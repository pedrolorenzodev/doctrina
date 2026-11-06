import { expect, test } from "@playwright/test";

const ask = {
  question: "¿Qué dicen los Padres sobre la Eucaristía?",
  locale: "es",
  scope: "all",
  here: { kind: "bible", book: "John", chapter: 6, translation: "rv1909" },
  selection: null,
  history: [],
  notes: [],
  turn: 1,
};

const ignatius = { kind: "father", work: "ignatius-smyrnaeans", edition: "lightfoot-1889", locator: "6.2" };
const unknown = { kind: "father", work: "no-such-work", edition: "x", locator: "1" };
const encode = (value: unknown) => Buffer.from(JSON.stringify(value)).toString("base64url");

function events(body: string): { event: string; data: unknown }[] {
  return body
    .split("\n\n")
    .filter(Boolean)
    .map((chunk) => {
      const event = /^event: (.+)$/m.exec(chunk)?.[1] ?? "";
      const data = JSON.parse(/^data: (.+)$/m.exec(chunk)?.[1] ?? "null");
      return { event, data };
    });
}

test("the ask stub streams the five phases and then a valid answer", async ({ request }) => {
  const response = await request.post("/api/ai/ask", { data: ask });
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("text/event-stream");
  expect(response.headers()["cache-control"]).toBe("no-store");
  const sent = events(await response.text());
  expect(sent.map((item) => item.event)).toEqual(["phase", "phase", "phase", "phase", "phase", "answer"]);
  expect(sent.slice(0, 5).map((item) => (item.data as { phase: string }).phase)).toEqual([
    "plan",
    "search",
    "read",
    "write",
    "check",
  ]);
  expect(sent[1]?.data).toEqual({ phase: "search", n: 24 });
  const answer = sent[5]?.data as {
    answerId: string;
    kind: string;
    question: string;
    prose: string;
    blocks: { quote: string }[];
    quotes: Record<string, { key: string; text: string }>;
    consulted: string[];
    followups: string[];
    cached: boolean;
    promptVersion: string;
  };
  expect(answer.kind).toBe("evidence");
  expect(answer.answerId).not.toBe("stub-answer");
  expect(answer.question).toBe(ask.question);
  expect(answer.cached).toBe(false);
  expect(answer.promptVersion).toBe("chat-2026-11-06.1");
  expect(Object.keys(answer.quotes)).toHaveLength(5);
  expect(answer.consulted).toHaveLength(5);
  expect(answer.followups).toHaveLength(2);
  for (const block of answer.blocks) expect(answer.quotes[block.quote]?.key).toBeTruthy();
  for (const token of answer.prose.matchAll(/\{q:([^}]+)\}/g)) expect(answer.quotes[token[1] ?? ""]).toBeDefined();
});

test("each ask gets a fresh answer id", async ({ request }) => {
  const ids = new Set<string>();
  for (let i = 0; i < 2; i += 1) {
    const sent = events(await (await request.post("/api/ai/ask", { data: ask })).text());
    ids.add((sent.at(-1)?.data as { answerId: string }).answerId);
  }
  expect(ids.size).toBe(2);
});

test("the ask stub refuses a malformed request with ai_bad_request", async ({ request }) => {
  const response = await request.post("/api/ai/ask", { data: { ...ask, question: "" } });
  expect(response.status()).toBe(400);
  expect(await response.json()).toMatchObject({ code: "ai_bad_request", retry: false });
  const english = await request.post("/api/ai/ask", { data: { ...ask, locale: "en", turn: 9 } });
  expect((await english.json()).message).toBe("I could not read the question. Try writing it again.");
});

test("the simplify stub returns the test-set paragraph or says the switch is off", async ({ request }) => {
  const response = await request.post("/api/ai/simplify", { data: { address: ignatius, locale: "en" } });
  test.skip(response.status() === 404, "the simplifier switch is off in this build");
  expect(response.status()).toBe(200);
  const entry = await response.json();
  expect(entry).toMatchObject({ lang: "en", status: "generated", cached: false });
  expect(entry.original.length).toBeGreaterThan(0);
  expect(entry.clear).toHaveLength(entry.original.length);
  expect(entry.very).toHaveLength(entry.original.length);
  const cached = await request.get(`/api/ai/simplify?address=${encode(ignatius)}&locale=en&cacheOnly=1`);
  expect(cached.status()).toBe(200);
  expect((await cached.json()).cached).toBe(true);
});

test("the simplify stub answers ai_not_found, ai_bad_request and 204 where it should", async ({ request }) => {
  const missing = await request.post("/api/ai/simplify", { data: { address: unknown, locale: "es" } });
  expect(missing.status()).toBe(404);
  expect(await missing.json()).toMatchObject({ code: "ai_not_found", retry: false });
  const bad = await request.post("/api/ai/simplify", { data: { address: { kind: "nothing" }, locale: "es" } });
  expect(bad.status()).toBe(400);
  expect((await bad.json()).code).toBe("ai_bad_request");
  const none = await request.get(`/api/ai/simplify?address=${encode(unknown)}&locale=es&cacheOnly=1`);
  expect(none.status()).toBe(204);
  const notCacheOnly = await request.get(`/api/ai/simplify?address=${encode(unknown)}&locale=es`);
  expect(notCacheOnly.status()).toBe(400);
});
