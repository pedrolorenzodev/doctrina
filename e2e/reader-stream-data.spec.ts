import { expect, test } from "@playwright/test";

test("a chapter's data is served as static JSON with every edition and its neighbours", async ({ request }) => {
  const response = await request.get("/api/bible/John/6");
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.book.id).toBe("John");
  expect(data.chapter).toBe(6);
  expect(data.views.map((view: { id: string }) => view.id)).toContain("rv1909");
  expect(data.views[0].verses.length).toBeGreaterThan(50);
  expect(data.previous).toEqual({ book: "John", chapter: 5 });
  expect(data.next).toEqual({ book: "John", chapter: 7 });
});

test("the neighbours cross books at the ends of a book", async ({ request }) => {
  const last = await (await request.get("/api/bible/Matt/28")).json();
  expect(last.next).toEqual({ book: "Mark", chapter: 1 });
  const first = await (await request.get("/api/bible/Mark/1")).json();
  expect(first.previous).toEqual({ book: "Matt", chapter: 28 });
});

test("an unknown chapter is a 404", async ({ request }) => {
  expect((await request.get("/api/bible/John/99")).status()).toBe(404);
  expect((await request.get("/api/bible/Nope/1")).status()).toBe(404);
});
