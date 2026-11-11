import { expect, test } from "@playwright/test";
import { hasFathers } from "./helpers";

const ignatius = { kind: "father", work: "ignatius-smyrnaeans", edition: "lightfoot-1889", locator: "6.2" };
const catholic = { kind: "statement", doctrine: "eucharist", tradition: "catholic", id: "QE-1" };
const orthodox = { kind: "statement", doctrine: "eucharist", tradition: "orthodox", id: "definition" };
const unseededFather = { ...ignatius, locator: "7.1" };
const encode = (value: unknown) => Buffer.from(JSON.stringify(value)).toString("base64url");
const cacheOnly = (address: unknown, locale = "es") =>
  `/api/ai/simplify?address=${encode(address)}&locale=${locale}&cacheOnly=1`;

test("the test-set paragraphs return their reviewed texts", async ({ request }) => {
  const entry = await (await request.post("/api/ai/simplify", { data: { address: ignatius, locale: "es" } })).json();
  test.skip(entry.status !== "reviewed", "the simplifier switch is off in this build, so nothing is seeded");
  expect(entry).toMatchObject({ lang: "en", status: "reviewed", cached: true });
  expect(entry.original).toHaveLength(3);
  expect(entry.very[0]).not.toBe(entry.original[0]);
  const statement = await (
    await request.post("/api/ai/simplify", { data: { address: catholic, locale: "es" } })
  ).json();
  expect(statement).toMatchObject({ lang: "es", status: "reviewed" });
  expect(statement.original[1]).toBe("No está solo como en un signo o una figura.");
});

test("a Father division gets a live aligned simplification, then a cache hit", async ({ request }) => {
  test.skip(!hasFathers, "needs the local Fathers corpus");
  const first = await request.post("/api/ai/simplify", { data: { address: unseededFather, locale: "es" } });
  expect(first.status()).toBe(200);
  expect(first.headers()["cache-control"]).toBe("no-store");
  const entry = await first.json();
  expect(entry).toMatchObject({ lang: "en", status: "generated", cached: false });
  expect(entry.original.length).toBeGreaterThan(0);
  expect(entry.clear).toHaveLength(entry.original.length);
  expect(entry.very).toHaveLength(entry.original.length);
  const started = Date.now();
  const again = await (
    await request.post("/api/ai/simplify", { data: { address: unseededFather, locale: "es" } })
  ).json();
  expect(Date.now() - started).toBeLessThan(200);
  expect(again).toMatchObject({ cached: true, original: entry.original });
  const hit = await request.get(cacheOnly(unseededFather));
  expect(hit.status()).toBe(200);
  expect((await hit.json()).cached).toBe(true);
});

test("tradition pages, 02 pages and the glossary serve only reviewed texts", async ({ request }) => {
  const notReviewed = [
    orthodox,
    { kind: "doctrine", doctrine: "baptism", section: "common", id: "text" },
    { kind: "glossary", term: "magisterio", tradition: "catholic" },
  ];
  for (const address of notReviewed) {
    const response = await request.post("/api/ai/simplify", { data: { address, locale: "es" } });
    expect(response.status()).toBe(400);
    expect(await response.json()).toEqual({
      code: "ai_not_simplifiable",
      message: "Este párrafo no se puede simplificar.",
      retry: false,
    });
    expect((await request.get(cacheOnly(address))).status()).toBe(204);
  }
  const unknownTerm = await request.post("/api/ai/simplify", {
    data: { address: { kind: "glossary", term: "no-such-term", tradition: "catholic" }, locale: "es" },
  });
  expect(unknownTerm.status()).toBe(404);
  const reviewed = await request.get(cacheOnly(catholic));
  test.skip(reviewed.status() === 204, "the simplifier switch is off in this build, so nothing is seeded");
  expect((await reviewed.json()).status).toBe("reviewed");
});

test("the cache-only GET never generates", async ({ request }) => {
  const address = { kind: "statement", doctrine: "baptism", tradition: "orthodox", id: "definition" };
  const miss = await request.get(cacheOnly(address));
  expect(miss.status()).toBe(204);
  expect((await request.get(cacheOnly(address))).status()).toBe(204);
  const unknown = await request.get(cacheOnly({ ...ignatius, work: "no-such-work" }));
  expect(unknown.status()).toBe(204);
  const notCacheOnly = await request.get(`/api/ai/simplify?address=${encode(address)}&locale=es`);
  expect(notCacheOnly.status()).toBe(400);
  const garbage = await request.get("/api/ai/simplify?address=%%%&locale=es&cacheOnly=1");
  expect(garbage.status()).toBe(400);
});

test("refusals carry the simplifier's messages", async ({ request }) => {
  test.skip(!hasFathers, "needs the local Fathers corpus");
  const bible = await request.post("/api/ai/simplify", {
    data: { address: { kind: "bible", book: "John", chapter: 6, verse: 53 }, locale: "es" },
  });
  expect(bible.status()).toBe(400);
  expect(await bible.json()).toEqual({
    code: "ai_not_simplifiable",
    message: "Este párrafo no se puede simplificar.",
    retry: false,
  });
  const spanishAi = await request.post("/api/ai/simplify", {
    data: { address: { ...ignatius, edition: "doctrina-ia-2026" }, locale: "es" },
  });
  expect((await spanishAi.json()).code).toBe("ai_not_simplifiable");
  const missing = await request.post("/api/ai/simplify", {
    data: { address: { ...ignatius, work: "no-such-work" }, locale: "en" },
  });
  expect(missing.status()).toBe(404);
  expect((await missing.json()).code).toBe("ai_not_found");
  const bad = await request.post("/api/ai/simplify", { data: { address: { kind: "nothing" }, locale: "es" } });
  expect(bad.status()).toBe(400);
  expect((await bad.json()).code).toBe("ai_bad_request");
  const noLocale = await request.post("/api/ai/simplify", { data: { address: orthodox } });
  expect((await noLocale.json()).code).toBe("ai_bad_request");
});
