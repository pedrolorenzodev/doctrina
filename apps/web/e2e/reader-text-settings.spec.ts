import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const john = "/es/biblia/juan/6";
const verse = "#v-1 [data-verse-text]";
const title = "main h1";

const base = { book: "John", chapter: 6, quote: null, from: null, to: null, createdAt: 1, updatedAt: 1 };
const note = {
  ...base,
  id: "n1",
  scope: "unit",
  translationId: "rv1909",
  verse: 53,
  verseTo: 53,
  text: "El discurso del pan de vida.",
};

async function openMenu(page: Page) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.getByRole("button", { name: "Texto", exact: true }).click();
  await expect(page.getByRole("group", { name: "Grosor del texto" })).toBeVisible();
}

const weightOf = (page: Page, selector: string) =>
  page.evaluate((target) => Number(getComputedStyle(document.querySelector(target)!).fontWeight), selector);

test("the menu offers the four new settings under the text size", async ({ page }) => {
  await openMenu(page);
  for (const group of ["Tamaño del texto", "Grosor del texto", "Interlineado", "Ancho del texto", "Alineación"]) {
    await expect(page.getByRole("group", { name: group })).toBeVisible();
  }
  const boxes = await Promise.all(
    ["Tamaño del texto", "Grosor del texto"].map((name) => page.getByRole("group", { name }).boundingBox()),
  );
  expect(boxes[1]!.y).toBeGreaterThan(boxes[0]!.y);
});

test("the weight steps from 200 to 600; the title follows until 500 and then stops; the section heading stops at 700", async ({
  page,
}) => {
  await page.addInitScript(() => localStorage.setItem("doctrina-translation", "bsb"));
  await openMenu(page);
  await expect(page.locator("[data-section-heading]").first()).toBeVisible();
  const heavier = page.getByRole("button", { name: "Letra más gruesa" });
  const lighter = page.getByRole("button", { name: "Letra más fina" });
  const seen: number[][] = [];
  const read = async () =>
    seen.push([
      await weightOf(page, verse),
      await weightOf(page, title),
      await weightOf(page, "[data-section-heading]"),
    ]);
  await read();
  for (let step = 0; step < 3; step++) {
    await heavier.click();
    await read();
  }
  await expect(heavier).toBeDisabled();
  for (let step = 0; step < 4; step++) await lighter.click();
  await read();
  expect(seen).toEqual([
    [300, 300, 500],
    [400, 400, 600],
    [500, 500, 700],
    [600, 500, 700],
    [200, 200, 400],
  ]);
  await expect(lighter).toBeDisabled();
});

test("line spacing, line length and alignment change the text and are kept after a reload", async ({ page }) => {
  await openMenu(page);
  const lineHeight = () =>
    page.evaluate((target) => {
      const style = getComputedStyle(document.querySelector(target)!.parentElement!);
      return Math.round((parseFloat(style.lineHeight) / parseFloat(style.fontSize)) * 100) / 100;
    }, verse);
  const width = () => page.locator("[data-chapter-text]").evaluate((element) => element.getBoundingClientRect().width);
  expect(await lineHeight()).toBe(1.66);
  expect(await width()).toBe(720);
  await page.getByRole("button", { name: "Más espacio entre líneas" }).click();
  expect(await lineHeight()).toBe(1.8);
  await page.getByRole("button", { name: "Líneas más largas" }).click();
  expect(await width()).toBe(800);
  await page.getByRole("button", { name: "Justificada" }).click();
  expect(await page.locator("[data-chapter-text]").evaluate((element) => getComputedStyle(element).textAlign)).toBe(
    "justify",
  );
  await page.reload();
  expect(await lineHeight()).toBe(1.8);
  expect(await width()).toBe(800);
  expect(await page.locator("[data-chapter-text]").evaluate((element) => getComputedStyle(element).textAlign)).toBe(
    "justify",
  );
  expect(await page.evaluate(() => document.documentElement.style.getPropertyValue("--reader-measure"))).toBe("800px");
});

test("a longer line keeps the note cards inside the screen: they wait for a wider window", async ({ page }) => {
  await page.addInitScript(
    ([stored, notes]) => {
      localStorage.setItem("doctrina-reader-text", stored!);
      localStorage.setItem("doctrina-notes", notes!);
    },
    [JSON.stringify({ weight: 300, leading: 1.66, measure: 880, justify: false }), JSON.stringify([note])],
  );
  for (const [width, cardsShown] of [
    [1440, false],
    [1515, true],
    [1700, true],
  ] as const) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(john);
    await expect(page.locator("#v-53")).toBeVisible();
    expect(
      await page.locator("[data-note-cards]").evaluate((element) => getComputedStyle(element).display !== "none"),
    ).toBe(cardsShown);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
    const column = await page.locator("[data-chapter-text]").boundingBox();
    expect(column!.x).toBeGreaterThanOrEqual(272 + 66 - 1);
    if (cardsShown) {
      const placed = (await page.locator("[data-note-card]").first().boundingBox())!;
      expect(placed.x + placed.width).toBeLessThanOrEqual(width);
    }
  }
});

test("the Fathers' reader offers the same settings", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/history/works/ignatius-romans");
  await page.getByRole("button", { name: "Texto", exact: true }).click();
  await expect(page.getByRole("group", { name: "Interlineado" })).toBeVisible();
});

for (const width of [360, 390, 1440]) {
  test(`${width}px: the alignment selector grows to hold both labels inside the menu`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.goto(john);
    await page.getByRole("button", { name: "Texto", exact: true }).click();
    await expect(page.getByRole("group", { name: "Alineación" })).toBeVisible();
    const fit = await page.evaluate(() => {
      const menu = document.querySelector('[role="dialog"][aria-label="Texto"]')!.getBoundingClientRect();
      const group = document.querySelector('[role=group][aria-label="Alineación"]')!;
      const buttons = [...group.querySelectorAll("button")];
      return {
        insideMenu: group.getBoundingClientRect().right <= menu.right - 12,
        clipped: buttons.some((button) => button.scrollWidth > button.clientWidth),
        gap: buttons[1]!.getBoundingClientRect().left - buttons[0]!.getBoundingClientRect().right,
        padding: Number.parseFloat(getComputedStyle(buttons[0]!).paddingLeft),
      };
    });
    expect(fit.insideMenu).toBe(true);
    expect(fit.clipped).toBe(false);
    expect(fit.padding).toBeGreaterThanOrEqual(12);
  });
}
