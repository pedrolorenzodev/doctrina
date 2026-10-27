import { expect, test } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const chapter = (book: string, number: number) => `/es/biblia/${book}/${number}`;
const crumbs = 'main nav[aria-label="Ruta"]';
const neighbors = 'main nav[aria-label="Capítulo anterior y siguiente"]';

test("John 6: title, tab, crumbs, edition line and all 71 verses in order", async ({ page }) => {
  await page.goto(chapter("juan", 6));
  await expect(page.locator("main h1")).toHaveText("Juan 6");
  await expect(page).toHaveTitle("Juan 6");
  await expect(page.locator(`${crumbs} button`)).toHaveText(["Biblia", "Nuevo Testamento"]);
  await expect(page.locator(`${crumbs} [aria-current=page]`)).toHaveText("Juan");
  await expect(page.locator("main p", { hasText: /^Reina-Valera 1909$/ }).first()).toBeVisible();
  const verses = page.locator('main [id^="v-"]');
  await expect(verses).toHaveCount(71);
  const ids = await verses.evaluateAll((items) => items.map((item) => item.id));
  expect(ids).toEqual(Array.from({ length: 71 }, (_, at) => `v-${at + 1}`));
  await expect(verses.first()).toContainText("PASADAS estas cosas, fuése Jesús de la otra parte de la mar de Galilea");
  await expect(page.locator("main [lang=es]")).toHaveCount(1);
});

test("the sidebar marks the chapter being read with a ring and its book as a location", async ({ page }) => {
  const cell = page.locator("aside nav a[data-chapter][aria-current=page]");
  const book = (id: string) => page.locator(`aside nav li[data-id="book/${id}"]`);
  await page.goto(chapter("juan", 6));
  await expect(cell).toHaveText("6");
  await expect(cell).toHaveAttribute("aria-label", "Juan 6");
  await expect(book("John")).toBeVisible();
  await expect(book("John").locator("> [data-row] [data-label-toggle]")).toHaveAttribute("data-trail", "true");
  await page.goto(chapter("1-corintios", 13));
  await expect(cell).toHaveText("13");
  await expect(cell).toHaveAttribute("aria-label", "1 Corintios 13");
  await page.goto(chapter("eclesiastico", 51));
  await expect(cell).toHaveText("51");
  await expect(page.locator('aside nav li[data-id="bible/deutero"] > ul')).toBeVisible();
});

test("the verse number sits in the left margin from 768 and above the text below", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(chapter("juan", 6));
  const box = async () => {
    const verse = page.locator("#v-1");
    const number = verse.locator("> span > span").first();
    return { verse: await verse.boundingBox(), number: await number.boundingBox() };
  };
  const wide = await box();
  expect(wide.number!.x + wide.number!.width).toBeLessThan(wide.verse!.x + 1);
  expect(Math.abs(wide.number!.y - wide.verse!.y)).toBeLessThan(20);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(450);
  const narrow = await box();
  expect(narrow.number!.y + narrow.number!.height).toBeLessThanOrEqual(narrow.verse!.y + narrow.verse!.height);
  expect(narrow.number!.x).toBeGreaterThanOrEqual(narrow.verse!.x);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("Psalm 119 renders its 176 verses and Sirach 51 its English text with the notice", async ({ page }) => {
  await page.goto(chapter("salmo", 119));
  await expect(page.locator("main h1")).toHaveText("Salmo 119");
  await expect(page.locator('main [id^="v-"]')).toHaveCount(176);
  await page.goto(chapter("eclesiastico", 51));
  await expect(page.locator("main h1")).toHaveText("Eclesiástico 51");
  await expect(page.locator("main [lang=en]")).toHaveCount(1);
  await expect(page.locator("main")).toContainText("Por ahora no hay una traducción al español: se leen en inglés.");
  await expect(page.locator("main")).toContainText("Douay-Rheims");
  await expect(page.locator(`${crumbs} button`)).toHaveText(["Biblia", "Libros deuterocanónicos"]);
});

test("a chapter outside the Spanish default shows no notice, and there is no chapter footer", async ({ page }) => {
  await page.goto(chapter("juan", 6));
  await expect(page.locator("main")).not.toContainText("Por ahora no hay una traducción al español");
  await expect(page.locator("main")).not.toContainText("Edición y licencia");
  await expect(page.locator(`${neighbors} a`)).toHaveCount(0);
});

test("the head names the neighbouring chapters for search engines; Malachi 4 leads to Matthew", async ({ page }) => {
  await page.goto(chapter("genesis", 1));
  await expect(page.locator('link[rel="next"]')).toHaveAttribute("href", /\/es\/biblia\/genesis\/2$/);
  await expect(page.locator('link[rel="prev"]')).toHaveCount(0);
  await page.goto(chapter("apocalipsis", 22));
  await expect(page.locator('link[rel="prev"]')).toHaveAttribute("href", /\/es\/biblia\/apocalipsis\/21$/);
  await page.goto(chapter("malaquias", 4));
  await expect(page.locator('link[rel="next"]')).toHaveAttribute("href", /\/es\/biblia\/mateo\/1$/);
});

test("unknown book, chapter or locale is a 404", async ({ request }) => {
  expect((await request.get(chapter("noexiste", 1))).status()).toBe(404);
  expect((await request.get(chapter("juan", 99))).status()).toBe(404);
  expect((await request.get(chapter("juan", 0))).status()).toBe(404);
  expect((await request.get("/en/bible/john/6")).status()).toBe(404);
});

test("a verse link lands on its verse", async ({ page }) => {
  await page.goto(`${chapter("juan", 6)}#v-53`);
  await expect.poll(async () => Math.round((await page.locator("#v-53").boundingBox())!.y)).toBeLessThan(260);
  expect(await page.locator("#v-53").evaluate((el) => el.getBoundingClientRect().top)).toBeGreaterThan(40);
});
