import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const sarx = "/es/palabras/G4561";

async function visit(page: Page, path: string, width = 1440) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(path);
}

test("the title block: kicker, Greek word in Gentium, transliteration, lede and the six facts", async ({ page }) => {
  await visit(page, sarx);
  await expect(page.getByText("Estudio de una palabra griega")).toBeVisible();
  const title = page.locator("h1 [lang=grc]");
  await expect(title).toHaveText("σάρξ");
  expect(await title.evaluate((element) => getComputedStyle(element).fontFamily)).toMatch(/gentium/i);
  expect(await title.evaluate((element) => getComputedStyle(element).fontSize)).toBe("64px");
  await expect(page.locator("h1")).toContainText("sarx");
  await expect(page.getByText("Carne.", { exact: true })).toBeVisible();
  for (const term of [
    "Significado literal",
    "Clase de palabra",
    "En el Nuevo Testamento",
    "Genitivo",
    "Número de Strong",
  ])
    await expect(page.locator("dt", { hasText: term })).toBeVisible();
  await expect(page.locator("dd", { hasText: "G4561" })).toBeVisible();
  await expect(page.locator("dd", { hasText: "147 veces" })).toContainText("en 126 versículos");
});

test("the count is a quiet source link that opens the citation window", async ({ page }) => {
  await visit(page, sarx);
  await page.getByRole("button", { name: "147 veces" }).click();
  const window = page.getByRole("dialog");
  await expect(window).toBeVisible();
  await expect(window).toContainText("Texto griego NA28");
  await expect(window).toContainText("STEPBible");
  await page.keyboard.press("Escape");
  await expect(window).toBeHidden();
});

test("the transliteration switch hides it everywhere and is remembered", async ({ page }) => {
  await visit(page, sarx);
  const switchButton = page.getByRole("button", { name: "Transliteración" });
  await expect(switchButton).toHaveAttribute("aria-pressed", "true");
  const shown = page.locator("h1 [data-transliteration]");
  await expect(shown).toBeVisible();
  await switchButton.click();
  await expect(switchButton).toHaveAttribute("aria-pressed", "false");
  await expect(shown).toBeHidden();
  await expect(page.locator("body [data-transliteration]:visible")).toHaveCount(0);
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-transliteration", "off");
  await expect(page.locator("h1 [data-transliteration]")).toBeHidden();
  await expect(page.getByRole("button", { name: "Transliteración" })).toHaveAttribute("aria-pressed", "false");
  await page.getByRole("button", { name: "Transliteración" }).click();
  await expect(page.locator("h1 [data-transliteration]")).toBeVisible();
});

test("«Dónde aparece» lists the 27 books in canon order with their counts and zeros", async ({ page }) => {
  await visit(page, sarx);
  const section = page.locator("#where");
  await expect(section.getByRole("button")).toHaveCount(22);
  await expect(section.getByText("3 Juan")).toBeVisible();
  const john = section.getByRole("button", { name: /^Juan/ });
  await expect(john).toContainText("12");
  const sizes = await john.evaluate((element) => ({
    height: element.getBoundingClientRect().height,
    font: getComputedStyle(element).fontSize,
  }));
  expect(sizes.height).toBeGreaterThanOrEqual(36);
  expect(sizes.font).toBe("14.5px");
  const names = await section.locator("ul > li > p").allInnerTexts();
  expect(names).toEqual(["Evangelios", "Hechos", "Cartas de Pablo", "Hebreos y las otras cartas", "Apocalipsis"]);
});

test("a book filters «Los lugares», scrolls there, opens the book, and a second click clears it", async ({ page }) => {
  await visit(page, sarx);
  await page.locator("#where").getByRole("button", { name: /^Juan/ }).click();
  await expect(page.locator("#where").getByRole("button", { name: /^Juan/ })).toHaveAttribute("aria-pressed", "true");
  await page.waitForTimeout(1200);
  await expect(page.locator("#places").getByText("12 de 126 versículos")).toBeVisible();
  const books = page.locator("#places ul > li > button[aria-expanded]");
  await expect(books).toHaveCount(1);
  await expect(books.first()).toHaveAttribute("aria-expanded", "true");
  expect(
    await page.evaluate(() => Math.round(document.getElementById("places")!.getBoundingClientRect().top)),
  ).toBeLessThan(200);
  await page.locator("#where").getByRole("button", { name: /^Juan/ }).click();
  await expect(page.locator("#where").getByRole("button", { name: /^Juan/ })).toHaveAttribute("aria-pressed", "false");
  await expect(books).toHaveCount(22);
});

test("«Sus formas»: six rows, and a form filters the places with its chip and count", async ({ page }) => {
  await visit(page, sarx);
  const rows = page.locator("#forms ul > li");
  await expect(rows).toHaveCount(6);
  await expect(rows.first()).toContainText("σὰρξ");
  await expect(rows.first()).toContainText("Sustantivo, nominativo femenino singular");
  await expect(rows.nth(1).getByRole("button")).toHaveText("Ver los 35 versículos");
  await expect(rows.nth(4).getByRole("button")).toHaveText("Ver el versículo");
  await rows.nth(3).getByRole("button").click();
  await page.waitForTimeout(1200);
  await expect(page.locator("#places").getByText("36 de 126 versículos")).toBeVisible();
  await expect(page.locator("#places").getByRole("button", { name: /^Quitar el filtro de la forma/ })).toBeVisible();
  await page.locator("#places").getByRole("button", { name: "Quitar filtros" }).click();
  await expect(page.locator("#places").getByText("de 126 versículos")).toHaveCount(0);
});

test("«Los lugares»: a book opens and closes, its rows show the reference, the text and the form", async ({ page }) => {
  await visit(page, sarx);
  const mateo = page.locator("#places ul > li > button[aria-expanded]").first();
  await expect(mateo).toHaveAttribute("aria-expanded", "false");
  await mateo.click();
  await expect(mateo).toHaveAttribute("aria-expanded", "true");
  await page.waitForTimeout(500);
  const first = page.locator("#places ul > li").first().locator("ul > li").first();
  await expect(first).toBeVisible();
  await expect(first.getByRole("link")).toHaveAttribute("href", /\/es\/biblia\/mateo\/16#v-17$/);
  await expect(first).toContainText("carne");
  await expect(first).toContainText("nominativo");
  await mateo.click();
  await page.waitForTimeout(700);
  await expect(first).toBeHidden();
});

test("«Qué significa»: numbered senses in English with their example verse, places and the original entry", async ({
  page,
}) => {
  await visit(page, sarx);
  const first = page.locator("#means ol > li").first();
  await expect(first.locator("h3")).toHaveText("Sentido 1(a)");
  await expect(first).toContainText("Abbott-Smith");
  await expect(first.locator("blockquote")).toContainText("Toda carne no es la misma carne");
  await expect(first.locator("blockquote a")).toHaveText(/1.Corintios.15:39/);
  const details = first.locator("details");
  await expect(details).not.toHaveAttribute("open", "");
  await details.locator("summary").click();
  await expect(details.locator("a").first()).toBeVisible();
  const original = page.getByRole("button", { name: "Ver la entrada original, en inglés" });
  await expect(original).toHaveAttribute("aria-expanded", "false");
  await original.click();
  await expect(page.locator("#original-entry")).toBeVisible();
  await expect(page.getByRole("button", { name: "Ocultar la entrada original" })).toBeVisible();
});

test("«Viniste desde …» and the neighbours inside the verse appear only when the reader came from a verse", async ({
  page,
}) => {
  await visit(page, `${sarx}?from=John.6.53`);
  await expect(page.getByText("Viniste desde")).toBeVisible();
  await expect(page.getByRole("link", { name: /Juan 6:53/ }).first()).toHaveAttribute(
    "href",
    /\/es\/biblia\/juan\/6#v-53$/,
  );
  await expect(page.getByText("Palabra anterior en Juan 6:53")).toBeVisible();
  await expect(page.getByText("Palabra siguiente en Juan 6:53")).toBeVisible();
  await visit(page, sarx);
  await expect(page.getByText("Viniste desde")).toHaveCount(0);
  await expect(page.getByText("Palabra anterior", { exact: true })).toBeVisible();
  await expect(page.getByText("Palabra siguiente", { exact: true })).toBeVisible();
});

test("a Hebrew word: Hebrew in its font, Old Testament books, BDB entry, forms", async ({ page }) => {
  await visit(page, "/es/palabras/H7225G");
  await expect(page.getByText("Estudio de una palabra hebrea")).toBeVisible();
  const title = page.locator("h1 [lang=hbo]");
  await expect(title).toHaveText("רֵאשִׁית");
  expect(await title.evaluate((element) => getComputedStyle(element).fontFamily)).toMatch(/hebrew/i);
  await expect(page.locator("dt", { hasText: "En el Antiguo Testamento" })).toBeVisible();
  await expect(page.locator("#where")).toContainText("La Ley");
  await expect(page.locator("#means")).toContainText("BDB");
  await expect(page.locator("#forms ul > li").first()).toBeVisible();
});

test("a very frequent word lists its books and says it cannot list every verse", async ({ page }) => {
  await visit(page, "/es/palabras/G3588");
  await expect(page.locator("#where").getByRole("button").first()).toBeVisible();
  await expect(page.locator("#places")).toContainText("demasiados para listarlos");
  await expect(page.locator("#forms ul > li").first().getByRole("button")).toHaveCount(0);
});

test("an unknown word is a not-found page", async ({ page }) => {
  const response = await page.goto("/es/palabras/G99999");
  expect(response?.status()).toBe(404);
});

test("the English page", async ({ page }) => {
  await visit(page, "/en/words/G4561");
  await expect(page.getByText("Study of a Greek word")).toBeVisible();
  await expect(page.locator("#where")).toContainText("Where it appears");
  await expect(page.locator("dd", { hasText: "147 times" })).toBeVisible();
  await expect(page.locator("#places")).toContainText("Berean Standard Bible");
});

for (const width of [360, 390, 768]) {
  test(`no horizontal overflow at ${width} and the title scales on a phone`, async ({ page }) => {
    await visit(page, `${sarx}?from=John.6.53`, width);
    await page.locator("#places ul > li > button[aria-expanded]").first().click();
    await page.waitForTimeout(600);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
    const size = await page.locator("h1 [lang=grc]").evaluate((element) => getComputedStyle(element).fontSize);
    expect(size).toBe(width < 640 ? "50px" : "64px");
  });
}

test("the book opening and the form filter tween monotonic frames, and reduced motion is instant", async ({ page }) => {
  await visit(page, sarx);
  const mateo = page.locator("#places ul > li > button[aria-expanded]").first();
  const panel = page.locator("#places ul > li").first().locator("> div");
  const frames = page.evaluate(
    () =>
      new Promise<number[]>((resolve) => {
        const out: number[] = [];
        const start = performance.now();
        const tick = () => {
          const element = document.querySelector("#places ul > li > div");
          if (element) out.push(element.getBoundingClientRect().height);
          if (performance.now() - start < 700) requestAnimationFrame(tick);
          else resolve(out);
        };
        tick();
      }),
  );
  await mateo.click();
  const heights = (await frames).filter((height) => height > 0);
  for (let index = 1; index < heights.length; index += 1)
    expect(heights[index]!).toBeGreaterThanOrEqual(heights[index - 1]! - 0.5);
  expect(heights.at(-1)!).toBeGreaterThan(100);
  await expect(panel).toBeVisible();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await mateo.click();
  await expect(panel).toBeHidden();
});
