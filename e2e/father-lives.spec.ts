import { expect, test, type Page } from "@playwright/test";

const father = (id: string) => `/es/historia/padres/${id}`;
const key = 'ul[aria-label="Cómo leer la línea"]';

const headerFactsOf = (page: Page) =>
  page
    .locator("main dl.title-part > div")
    .evaluateAll((items) =>
      items.map((item) => [item.querySelector("dt")!.textContent, item.querySelector("dd")!.textContent]),
    );

test("a death known only as «still alive in 394» is written in words", async ({ page }) => {
  await page.goto(father("gregory-of-nyssa"));
  expect((await headerFactsOf(page)).slice(0, 2)).toEqual([
    ["Nació", "c. 335"],
    ["Murió", "se desconoce; vivía en 394"],
  ]);
});

test("a birth and a death given as ranges are written as ranges, never as one year", async ({ page }) => {
  await page.goto(father("hilary-of-poitiers"));
  expect((await headerFactsOf(page)).slice(0, 2)).toEqual([
    ["Nació", "entre c. 310 y 320"],
    ["Murió", "367 o 368"],
  ]);
  await page.goto(father("john-chrysostom"));
  expect((await headerFactsOf(page)).slice(0, 2)).toEqual([
    ["Nació", "entre 347 y 354 (se discute)"],
    ["Murió", "14 sep 407"],
  ]);
});

test("a person known only by activity says «Activo» and has no birth or death", async ({ page }) => {
  await page.goto(father("aphrahat"));
  const facts = await headerFactsOf(page);
  expect(facts[0]).toEqual(["Activo", "337–345"]);
  expect(facts.map(([label]) => label)).not.toContain("Murió");
  expect(facts.map(([label]) => label)).not.toContain("Nació");
});

test("a work with a span of composition says «Compuesta» and never «Murió»", async ({ page }) => {
  await page.goto(father("didache"));
  const facts = await headerFactsOf(page);
  expect(facts[0]).toEqual(["Compuesta", "segunda mitad del siglo I a primera mitad del siglo II"]);
  expect(facts.map(([label]) => label)).not.toContain("Murió");
});

test("the key lists a state only when the line draws it", async ({ page }) => {
  await page.goto(father("gregory-of-nyssa"));
  await expect(page.locator(key)).toContainText("Se sabe que vivía; no cuándo murió");
  await page.goto(father("ignatius-of-antioch"));
  await expect(page.locator(key)).toContainText("Activo entre dos años");
  for (const label of ["Se sabe que vivía; no cuándo murió", "Tramo de composición"])
    await expect(page.locator(key)).not.toContainText(label);
});

test("the line of the 08 timeline draws the new marks and lists them in its key", async ({ page }) => {
  await page.goto("/es/historia/linea-de-tiempo");
  const list = page.locator('ul[aria-label="Cómo leer la línea"]');
  for (const label of ["Se sabe que vivía; no cuándo murió", "Activo entre dos años", "Tramo de composición"])
    await expect(list).toContainText(label);
});

test("the death of a Father known as «after 394» is spoken in the search entry", async ({ page }) => {
  await page.goto("/es");
  await page.keyboard.press("Meta+k");
  await page.keyboard.press("Control+k");
  await page.locator('input[type="search"], input[role="combobox"]').first().fill("Gregorio de Nisa");
  await expect(page.locator('[role="option"]').first()).toContainText("después de 394");
});
