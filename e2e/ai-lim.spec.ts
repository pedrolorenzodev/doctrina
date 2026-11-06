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

test("the status route reports both features and may be cached for 30 seconds by the browser", async ({ request }) => {
  const response = await request.get("/api/ai/status");
  expect(response.status()).toBe(200);
  expect(response.headers()["cache-control"]).toBe("private, max-age=30");
  expect(await response.json()).toEqual({ chat: "on", simplify: "on" });
});

test("the first ask sets the signed visitor cookie and a cross-origin ask is refused", async ({ request }) => {
  const first = await request.post("/api/ai/ask", { data: ask, headers: { "x-forwarded-for": "203.0.113.41" } });
  expect(first.status()).toBe(200);
  const cookie = first.headers()["set-cookie"] ?? "";
  expect(cookie).toMatch(/^doctrina_ai=[\w-]+\.[\w-]+;/);
  expect(cookie).toContain("HttpOnly");
  expect(cookie).toContain("SameSite=Lax");

  const crossSite = await request.post("/api/ai/ask", {
    data: ask,
    headers: { origin: "https://evil.example", "x-forwarded-for": "203.0.113.42" },
  });
  expect(crossSite.status()).toBe(400);
  expect((await crossSite.json()).code).toBe("ai_bad_request");
});
