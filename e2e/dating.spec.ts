import { expect, test } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const ignatius = "/es/historia/padres/ignatius-of-antioch";
const rows = (page: import("@playwright/test").Page) => page.locator("#dating-list > li:not([hidden])");
const dates = (page: import("@playwright/test").Page) => rows(page).locator("b").allTextContents();

test("Ignatius: the three most useful dates first, in date order, then the whole debate", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(ignatius);
  await expect(page.locator("#dating h2")).toHaveText("Fechas y autenticidad");
  await expect(page.locator("#dating h3").first()).toHaveText("Las fechas propuestas");
  expect(await dates(page)).toEqual(["c. 107–110", "julio de 116", "años 140"]);
  const more = page.getByRole("button", { name: "Mostrar las 7 de la historia del debate" });
  await expect(more).toHaveAttribute("aria-expanded", "false");
  await more.click();
  await expect(rows(page)).toHaveCount(10);
  expect(await dates(page)).toEqual([
    "época de Trajano (98–117)",
    "105–117",
    "c. 107–110",
    "c. 110",
    "110–117, o quizá 117–125",
    "julio de 116",
    "últimos años de Adriano o después",
    "años 140",
    "segunda mitad del siglo II",
    "160–180",
  ]);
  await expect(rows(page).first()).toHaveClass(/border-dashed/);
  await expect(rows(page).nth(1)).not.toHaveClass(/border-dashed/);
  await page.getByRole("button", { name: "Ocultar la historia del debate" }).click();
  await expect(rows(page)).toHaveCount(3);
  await expect(page.getByRole("button", { name: "Mostrar las 7 de la historia del debate" })).toBeVisible();
});

test("a row reads «what, according to Name (year).»", async ({ page }) => {
  await page.goto(ignatius);
  await expect(rows(page).nth(1).locator("p")).toHaveText(
    "julio de 116La persecución en Antioquía que habría llevado a su condena, según Decrept (2008).",
  );
  await expect(rows(page).first().locator("p")).toHaveText(
    "c. 107–110Su muerte, fecha tradicional, bajo Trajano (Clavis Patrum Graecorum).",
  );
  await expect(rows(page).first().locator("b")).toHaveCSS("color", /^rgb\(44, 74, 158\)$/);
});

test("a scholar's name opens «Quién es»: field, position, the work in italics and, when known, a life timeline", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(ignatius);
  const dialog = page.locator("[role=dialog]");
  await rows(page).nth(1).getByRole("button", { name: "Decrept" }).click();
  await expect(dialog).toBeVisible();
  await expect(dialog.locator("#citation-window-kind")).toHaveText("Quién es");
  await expect(dialog.locator("h3")).toHaveText("Étienne Decrept");
  await expect(dialog).toContainText("Historiador del cristianismo antiguo y de la Antigüedad tardía");
  await expect(dialog.locator("p.font-body")).toHaveCount(2);
  await expect(dialog.locator("p.font-body i")).toHaveText("Revue des Sciences Religieuses");
  await expect(dialog).not.toContainText("Vida");
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await rows(page).nth(2).getByRole("button", { name: "Barnes" }).click();
  await expect(dialog.locator("h3")).toHaveText("Timothy D. Barnes");
  await expect(dialog).toContainText("VidaNació en 1942");
  await expect(dialog.locator('[aria-hidden="true"]').filter({ hasText: "nació en 1942" })).toHaveCount(1);
  await expect(dialog).toContainText("1800");
  await expect(dialog).toContainText("2026");
});

test("a dead scholar's life is a range and the window never overflows a phone", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 700 });
  await page.goto(ignatius);
  await page.getByRole("button", { name: /Mostrar las 7/ }).click();
  await rows(page).filter({ hasText: "Zahn" }).getByRole("button", { name: "Zahn" }).click();
  const dialog = page.locator("[role=dialog]");
  await expect(dialog.locator("h3")).toHaveText("Theodor Zahn");
  await expect(dialog).toContainText("Vida1838–1933");
  expect(await horizontalOverflow(page)).toBe(0);
});

test("the recensions and the story of the text are listed under the dates", async ({ page }) => {
  await page.goto(ignatius);
  await expect(page.locator("#dating h3")).toHaveText([
    "Las fechas propuestas",
    "Tres formas de las cartas",
    "Cómo se recuperó el texto",
  ]);
  await expect(page.locator("#dating li.recension-row")).toHaveCount(8);
  await expect(page.locator("#dating li.recension-row").first()).toContainText("Recensión media");
});

test("each group title keeps its 40 px of space above, after the list that precedes it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(ignatius);
  const gap = await page
    .locator("#dating h3")
    .last()
    .evaluate((title) => {
      const previous = title.previousElementSibling!.getBoundingClientRect();
      return Math.round(title.getBoundingClientRect().top - previous.bottom);
    });
  expect(gap).toBeGreaterThanOrEqual(40);
});

test("a Father with no researched dating has no such section", async ({ page }) => {
  await page.goto("/es/historia/padres/polycarp-of-smyrna");
  await expect(page.locator("#dating")).toHaveCount(0);
});

test("the fixed strip of the timeline casts a soft shadow", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 640 });
  await page.goto(ignatius);
  await page.evaluate(() => scrollTo(0, document.querySelector("#time")!.getBoundingClientRect().top + scrollY - 80));
  await page.locator("#time button[data-entry]").filter({ hasText: "Justino" }).click();
  expect(await page.locator("[data-strip]").evaluate((element) => getComputedStyle(element).boxShadow)).not.toBe(
    "none",
  );
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: the dating section, open and closed, never overflows the page @webkit`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(ignatius);
    expect(await horizontalOverflow(page)).toBe(0);
    await page.getByRole("button", { name: /Mostrar las 7/ }).click();
    await expect(rows(page)).toHaveCount(10);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}
