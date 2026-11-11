import { expect, test, type Page } from "@playwright/test";
import { hasCorpus, hasWords } from "./helpers";

const otherLanguage = (page: Page, locale: "en" | "es") =>
  page.getByRole("group", { name: locale === "en" ? "Idioma" : "Language" }).locator(`[lang="${locale}"]`);

const withoutEnglish = [
  "/es/doctrinas/eucaristia",
  "/es/doctrinas/eucaristia/catolica",
  "/es/doctrinas/eucaristia/catolica/pasajes",
  "/es/doctrinas/eucaristia/catolica/objeciones",
  "/es/doctrinas/eucaristia/catolica/objeciones/ob-1",
  "/es/doctrinas/eucaristia/primeros-cristianos",
  "/es/glosario",
  "/es/glosario/acuerdo-ecumenico",
];

for (const path of withoutEnglish) {
  test(`${path}: EN is shown inert with the reason, never a dead link`, async ({ page }) => {
    await page.goto(path);
    const english = otherLanguage(page, "en");
    await expect(english).toHaveText("EN");
    expect(await english.evaluate((node) => node.tagName)).toBe("BUTTON");
    await expect(english).toHaveAttribute("aria-disabled", "true");
    await expect(page.getByText("Esta página todavía no está en inglés")).toHaveCSS("opacity", "0");
    await english.hover();
    await expect(page.getByText("Esta página todavía no está en inglés")).toHaveCSS("opacity", "1");
  });
}

const withEnglish: [string, string][] = [
  ["/es", "/en"],
  ["/es/historia/linea-de-tiempo", "/en/history/timeline"],
  ["/es/historia/padres", "/en/history/fathers"],
  ["/es/historia/padres/clement-of-rome", "/en/history/fathers/clement-of-rome"],
  ["/es/palabras/G4561", "/en/words/G4561"],
];

for (const [spanish, english] of withEnglish) {
  test(`${spanish}: EN leads to ${english}, which exists`, async ({ page, request }) => {
    test.skip(!hasWords && spanish.includes("/palabras/"), "needs the local word-study data");
    await page.goto(spanish);
    const link = otherLanguage(page, "en");
    await expect(link).toHaveAttribute("href", english);
    expect((await request.get(english)).status()).toBe(200);
  });
}

test("a Bible chapter switches to the same chapter in the other language", async ({ page, request }) => {
  test.skip(!hasCorpus);
  await page.goto("/es/biblia/juan/6");
  await expect(otherLanguage(page, "en")).toHaveAttribute("href", "/en/bible/john/6");
  expect((await request.get("/en/bible/john/6")).status()).toBe(200);
  await page.goto("/en/bible/john/6");
  await expect(otherLanguage(page, "es")).toHaveAttribute("href", "/es/biblia/juan/6");
});

test("English pages never link to the glossary, which has no English route", async ({ page }) => {
  for (const path of ["/en", "/en/history/fathers", "/en/words/G4561"]) {
    await page.goto(path);
    await expect(page.locator('a[href*="/glossary"]')).toHaveCount(0);
  }
  await page.goto("/en");
  const footer = page.locator("footer");
  await expect(footer.getByRole("button", { name: "Glossary" })).toHaveAttribute("aria-disabled", "true");
  expect((await page.request.get("/en/glossary")).status()).toBe(404);
});

test("the Spanish home still links to the glossary", async ({ page }) => {
  await page.goto("/es");
  await expect(page.locator("footer").getByRole("link", { name: "Glosario" })).toHaveAttribute("href", "/es/glosario");
});

test("the Ask drawer on an English page suggests questions in English", async ({ page }) => {
  test.skip(!hasCorpus);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/en/bible/john/6");
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => {
    const button = [...document.querySelectorAll<HTMLElement>("[data-ask-button]")].find((node) => node.offsetParent);
    button?.click();
  });
  const suggestions = page.locator("[data-ask-suggestions] button");
  await expect(suggestions).toHaveText([
    "What did the Fathers say about this chapter?",
    "How does each tradition read it?",
    "Which other passages of the Bible deal with this subject?",
    "Which words repeat in the chapter?",
  ]);
});

const sameOnServer = [
  ...withoutEnglish,
  ...withEnglish.map(([spanish]) => spanish),
  "/es/historia/herejias",
  "/es/historia/concilios",
];

for (const path of sameOnServer) {
  test(`${path}: the switch is the same in the server's HTML and in the browser, and hydration keeps the page's attributes`, async ({
    browser,
  }) => {
    test.skip(!hasWords && path.includes("/palabras/"), "needs the local word-study data");
    const bare = await browser.newContext({ javaScriptEnabled: false });
    const served = await bare.newPage();
    await served.goto(path);
    const describe = (page: Page) =>
      otherLanguage(page, "en").evaluate((node) => `${node.tagName} ${node.getAttribute("href") ?? ""}`);
    const fromServer = await describe(served);
    await bare.close();
    const context = await browser.newContext();
    await context.addInitScript(() => localStorage.setItem("doctrina-tree", "closed"));
    const page = await context.newPage();
    await page.goto(path);
    await page.waitForTimeout(800);
    expect(await describe(page)).toBe(fromServer);
    expect(await page.evaluate(() => document.documentElement.dataset.tree)).toBe("closed");
    await context.close();
  });
}
