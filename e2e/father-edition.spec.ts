import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const didache = "/es/historia/obras/didache";
const strip = "main [data-reader-strip]";
const pickerButton = `${strip} button[aria-haspopup="listbox"]`;
const body = "[data-father-text]";

const open = async (page: Page, path: string, width = 1440) => {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(path);
  await page.evaluate(() => document.fonts.ready);
};

const choose = async (page: Page, name: RegExp) => {
  await page.locator(pickerButton).click();
  await page.getByRole("option", { name }).click();
};

const chooseEnglish = async (page: Page) => {
  await page.locator(pickerButton).click();
  await page.getByRole("listbox").getByRole("option").last().click();
};

test.describe("Fathers' reader: the translation switch", () => {
  test("a work with a Spanish edition offers two groups, and the button shows only the abbreviation of the one in use", async ({
    page,
  }) => {
    await open(page, didache);
    await expect(page.locator(pickerButton)).toHaveText(/^Traducción\s*IA 2026$/);
    await page.locator(pickerButton).click();
    const list = page.getByRole("listbox", { name: "Traducción" });
    await expect(list).toBeVisible();
    await expect(list.getByText("Español", { exact: true })).toBeVisible();
    await expect(list.getByText("Inglés", { exact: true })).toBeVisible();
    await expect(list.getByRole("option")).toHaveText([
      "Traducción de Doctrina con IA (IA 2026)",
      "Joseph Barber Lightfoot (Lightfoot 1891)",
    ]);
    await expect(list.getByRole("option", { selected: true })).toContainText("IA 2026");
  });

  test("the first visit follows the site language: Spanish site opens the Spanish edition, English site the English one", async ({
    page,
  }) => {
    await open(page, didache);
    await expect(page.locator(body)).toHaveAttribute("lang", "es");
    await expect(page.locator("main")).toContainText("Traducido con IA");
    await page.evaluate(() => localStorage.clear());
    await open(page, "/en/history/works/didache");
    await expect(page.locator(body)).toHaveAttribute("lang", "en");
    await expect(page.locator(pickerButton)).toHaveText(/^Translation\s*Lightfoot 1891$/);
    await expect(page.locator("main")).not.toContainText("Translated with AI");
  });

  test("once the reader chooses, the choice wins over the site language and is remembered", async ({ page }) => {
    await open(page, didache);
    await choose(page, /Lightfoot/);
    await expect(page.locator(body)).toHaveAttribute("lang", "en");
    await expect(page.locator("main")).not.toContainText("Traducido con IA");
    await page.reload();
    await expect(page.locator(body)).toHaveAttribute("lang", "en");
    await expect(page.locator(pickerButton)).toHaveText(/^Traducción\s*Lightfoot 1891$/);
    await choose(page, /IA 2026/);
    await expect(page.locator(body)).toHaveAttribute("lang", "es");
    await expect(page.locator(`${body} > div`)).toHaveCount(16);
    await expect(page.locator(`${body} > div`).first()).toContainText("Hay dos caminos");
    await expect(page.locator(pickerButton)).toHaveText(/^Traducción\s*IA 2026$/);
    await expect(page.locator("main")).toContainText("Licencia: Traducción de Doctrina, dominio público (CC0)");
    await expect(page.locator("main")).not.toContainText("Borrador: la transcripción");
    await page.reload();
    await expect(page.locator(body)).toHaveAttribute("lang", "es");
  });

  test("the work's title follows the edition in use, on both site languages, and the h1 element is kept", async ({
    page,
  }) => {
    await open(page, "/es/historia/obras/1-clement");
    const title = page.getByRole("heading", { level: 1 });
    await expect(title).toHaveText("La epístola de san Clemente a los corintios");
    await title.evaluate((element) => ((element as HTMLElement).dataset.kept = "yes"));
    await chooseEnglish(page);
    await expect(title).toHaveText("The Epistle of S. Clement to the Corinthians");
    await expect(title).toHaveAttribute("data-kept", "yes");
    await open(page, "/en/history/works/1-clement");
    await expect(title).toHaveText("The Epistle of S. Clement to the Corinthians");
    await choose(page, /AI 2026/);
    await expect(title).toHaveText("La epístola de san Clemente a los corintios");
  });

  test("the prologue marker and the other division markers are in the language of the edition", async ({ page }) => {
    await open(page, "/es/historia/obras/1-clement");
    const marker = page.locator(`${body} [data-locator="prologue"]`);
    await expect(marker).toHaveText("Prólogo");
    await chooseEnglish(page);
    await expect(marker).toHaveText("Prologue");
    await open(page, "/en/history/works/1-clement");
    await expect(marker).toHaveText("Prologue");
    await choose(page, /AI 2026/);
    await expect(marker).toHaveText("Prólogo");
    await open(page, "/es/historia/obras/irenaeus-against-heresies");
    await expect(page.locator(`${body} [data-locator="4.preface.1"]`)).toHaveText("4.prefacio.1");
    await chooseEnglish(page);
    await expect(page.locator(`${body} [data-locator="4.preface.1"]`)).toHaveText("4.preface.1");
  });

  test("the headings inside the work come from the corpus of the edition chosen", async ({ page }) => {
    await open(page, "/es/historia/obras/shepherd-hermas");
    await expect(page.locator(body)).toContainText("Visión 1");
    await chooseEnglish(page);
    await expect(page.locator(body)).toContainText("Vision 1");
    await expect(page.locator(body)).not.toContainText("Visión 1");
  });

  test("the choice does not touch the Bible's translation", async ({ page }) => {
    await open(page, didache);
    await choose(page, /IA 2026/);
    expect(await page.evaluate(() => localStorage.getItem("doctrina-translation"))).toBeNull();
  });

  test("a work without a Spanish edition shows the single English option and no AI label", async ({ page }) => {
    await open(page, "/es/historia/obras/ambrose-de-fide");
    await page.locator(pickerButton).click();
    await expect(page.getByRole("listbox", { name: "Traducción" }).getByRole("option")).toHaveCount(1);
    await expect(page.getByRole("listbox", { name: "Traducción" }).getByText("Español", { exact: true })).toHaveCount(
      0,
    );
  });

  test("a partial translation says which part it covers and keeps the paragraph ids of the English edition", async ({
    page,
  }) => {
    await open(page, "/es/historia/obras/irenaeus-against-heresies");
    const spanishFirst = await page.locator(`${body} > div`).evaluateAll((nodes) => nodes.map((node) => node.id));
    await chooseEnglish(page);
    await expect.poll(() => page.locator(body).getAttribute("lang")).toBe("en");
    const englishAnchors = await page.locator(`${body} > div`).evaluateAll((nodes) => nodes.map((node) => node.id));
    await choose(page, /IA 2026/);
    await expect(page.locator("main")).toContainText("Esta traducción cubre una parte de la obra: de 3.1.1 a 5.36.3.");
    const spanishAnchors = await page.locator(`${body} > div`).evaluateAll((nodes) => nodes.map((node) => node.id));
    expect(spanishAnchors).toEqual(spanishFirst);
    expect(spanishAnchors.length).toBeGreaterThan(300);
    expect(spanishAnchors.length).toBeLessThan(englishAnchors.length);
    for (const anchor of spanishAnchors) expect(englishAnchors).toContain(anchor);
  });

  test("the same paragraph carries its note across editions and a highlight stays in its own", async ({ page }) => {
    await open(page, didache);
    await page.locator(`${body} > div`).first().locator("button").first().click();
    await page.getByRole("button", { name: "Nota", exact: true }).first().click();
    await page.getByRole("textbox").first().fill("una nota");
    await page.waitForTimeout(500);
    await page.keyboard.press("Escape");
    await chooseEnglish(page);
    await expect(page.locator(body)).toHaveAttribute("lang", "en");
    await expect(page.locator(`${body} > div`).first()).toContainText("1 nota");
  });

  test("at 390 px the strip keeps the switch and nothing overflows", async ({ page }) => {
    await open(page, didache, 390);
    await expect(page.locator(pickerButton)).toHaveText(/^Traducción\s*IA 2026$/);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });
});
