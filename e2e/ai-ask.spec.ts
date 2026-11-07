import { expect, test, type APIRequestContext } from "@playwright/test";

type Sent = { event: string; data: unknown };
type Answer = {
  answerId: string;
  kind: string;
  question: string;
  cached: boolean;
  more: boolean;
  promptVersion: string;
};

let counter = 0;

function body(question: string) {
  return {
    question,
    locale: "es",
    scope: "all",
    here: { kind: "bible", book: "John", chapter: 6, translation: "rv1909" },
    selection: null,
    history: [],
    notes: [],
    turn: 1,
  };
}

function uniqueAddress(): string {
  counter += 1;
  return `10.${test.info().workerIndex}.${Date.now() % 250}.${counter % 250}`;
}

function events(text: string): Sent[] {
  return text
    .split("\n\n")
    .filter(Boolean)
    .map((chunk) => ({
      event: /^event: (.+)$/m.exec(chunk)?.[1] ?? "",
      data: JSON.parse(/^data: (.+)$/m.exec(chunk)?.[1] ?? "null"),
    }));
}

async function ask(request: APIRequestContext, question: string, address: string) {
  const response = await request.post("/api/ai/ask", {
    data: body(question),
    headers: { "x-forwarded-for": address },
  });
  return { response, sent: events(await response.text()) };
}

const fresh = () => `¿Qué enseñan los Padres de la Iglesia sobre la Eucaristía? ${Date.now()}${counter}`;

test("the ask route streams phases and then a valid answer", async ({ request }) => {
  const { response, sent } = await ask(request, fresh(), uniqueAddress());
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("text/event-stream");
  const phases = sent.filter((item) => item.event === "phase").map((item) => (item.data as { phase: string }).phase);
  expect(phases.length).toBeGreaterThan(0);
  expect(phases[0]).toBe("plan");
  expect(sent.at(-1)?.event).toBe("answer");
  const answer = sent.at(-1)?.data as Answer;
  expect(answer.cached).toBe(false);
  expect(answer.promptVersion).toBe("chat-2026-11-07.f");
  expect(["evidence", "disputed", "not_found"]).toContain(answer.kind);
});

test("the same question again is a cache hit without phases", async ({ request }) => {
  const question = fresh();
  const address = uniqueAddress();
  const first = await ask(request, question, address);
  const firstAnswer = first.sent.at(-1)?.data as Answer;
  expect(first.sent.at(-1)?.event).toBe("answer");
  test.skip(firstAnswer.kind === "not_found", "a not found answer is not what this case measures");
  const second = await ask(request, question, address);
  expect(second.sent.map((item) => item.event)).toEqual(["answer"]);
  expect((second.sent[0]?.data as Answer).cached).toBe(true);
});

test("a malformed question is ai_bad_request with the 400 status", async ({ request }) => {
  const response = await request.post("/api/ai/ask", {
    data: { ...body("x"), question: "" },
    headers: { "x-forwarded-for": uniqueAddress() },
  });
  expect(response.status()).toBe(400);
  expect(await response.json()).toMatchObject({ code: "ai_bad_request", retry: false });
});

test("the per-minute limit answers ai_rate_limited with its 429 status", async ({ request }) => {
  const address = uniqueAddress();
  const statuses: number[] = [];
  for (let at = 0; at < 8; at += 1) {
    const response = await request.post("/api/ai/ask", {
      data: body(fresh()),
      headers: { "x-forwarded-for": address },
    });
    statuses.push(response.status());
    if (response.status() === 429) {
      expect(await response.json()).toMatchObject({ code: "ai_rate_limited", retry: true });
      return;
    }
    await response.text();
  }
  expect(statuses, "no request was limited").toContain(429);
});

test("more answers with literal blocks, and says so when the answer is gone", async ({ request }) => {
  const { sent } = await ask(request, fresh(), uniqueAddress());
  const answer = sent.at(-1)?.data as Answer;
  expect(sent.at(-1)?.event).toBe("answer");
  if (answer.more) {
    const more = await request.post("/api/ai/ask/more", {
      data: { answerId: answer.answerId, offset: 0 },
      headers: { "x-forwarded-for": uniqueAddress() },
    });
    expect(more.status()).toBe(200);
    const page = (await more.json()) as { blocks: { quote: string }[]; quotes: Record<string, { text: string }> };
    expect(page.blocks.length).toBeGreaterThan(0);
    expect(page.blocks.length).toBeLessThanOrEqual(8);
    for (const block of page.blocks) expect(page.quotes[block.quote]?.text.length).toBeGreaterThan(0);
  }
  const gone = await request.post("/api/ai/ask/more", {
    data: { answerId: "no-such-answer", offset: 0 },
    headers: { "x-forwarded-for": uniqueAddress() },
  });
  expect(gone.status()).toBe(404);
  expect(await gone.json()).toMatchObject({ code: "ai_not_found" });
});
