import { expect, test } from "@playwright/test";

test("a chapter's data is served as static JSON with every edition and its neighbours", async ({ request }) => {
  const response = await request.get("/api/bible/es/John/6");
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.book.id).toBe("John");
  expect(data.chapter).toBe(6);
  expect(data.views.map((view: { id: string }) => view.id)).toContain("rv1909");
  expect(data.views[0].verses.length).toBeGreaterThan(50);
  expect(data.previous).toEqual({ book: "John", chapter: 5 });
  expect(data.next).toEqual({ book: "John", chapter: 7 });
});

test("the English chapter data defaults to the BSB and an unknown locale is a 404", async ({ request }) => {
  const english = await (await request.get("/api/bible/en/John/6")).json();
  expect(english.defaultId).toBe("bsb");
  expect((await request.get("/api/bible/fr/John/6")).status()).toBe(404);
});

test("the neighbours cross books at the ends of a book", async ({ request }) => {
  const last = await (await request.get("/api/bible/es/Matt/28")).json();
  expect(last.next).toEqual({ book: "Mark", chapter: 1 });
  const first = await (await request.get("/api/bible/es/Mark/1")).json();
  expect(first.previous).toEqual({ book: "Matt", chapter: 28 });
});

test("an unknown chapter is a 404", async ({ request }) => {
  expect((await request.get("/api/bible/es/John/99")).status()).toBe(404);
  expect((await request.get("/api/bible/es/Nope/1")).status()).toBe(404);
});
