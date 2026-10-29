import { expect, test } from "@playwright/test";
import { hasCorpus, horizontalOverflow } from "./helpers";

test("the home has no sidebar tree: the menu opens it as a drawer at every width", async ({ page }) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/es");
    const sidebar = page.locator("#site-sidebar");
    await expect(sidebar).toBeHidden();
    const menu = page.locator("header [aria-controls='site-sidebar']");
    await expect(menu).toBeVisible();
    await menu.click();
    await expect(sidebar).toBeVisible();
    await expect.poll(async () => (await sidebar.boundingBox())?.x).toBe(0);
    expect((await sidebar.boundingBox())?.width).toBeCloseTo(320, 1);
    await page.keyboard.press("Escape");
    await expect(sidebar).toBeHidden();
    await expect(menu).toBeFocused();
    expect(await horizontalOverflow(page)).toBe(0);
  }
});

test("in the home's drawer a book's chapters use the drawer's five large columns on the desktop too", async ({
  page,
}) => {
  test.skip(!hasCorpus, "needs the Bible corpus");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  await page.locator("header [aria-controls='site-sidebar']").click();
  const sidebar = page.locator("#site-sidebar");
  await sidebar.locator("[data-label-toggle]", { hasText: "Nuevo Testamento" }).click();
  await sidebar.locator("[data-label-toggle]", { hasText: /^Juan\s*21$/ }).click();
  const grid = sidebar.getByLabel("Capítulos de Juan", { exact: true });
  await expect(grid).toBeVisible();
  const columns = await grid.evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length);
  expect(columns).toBe(5);
  const cell = grid.locator("a").first();
  expect((await cell.boundingBox())?.height).toBe(56);
});

test("other pages keep the fixed tree on the desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  await page.goto("/es/historia/padres");
  const sidebar = page.locator("#site-sidebar");
  await expect(sidebar).toBeVisible();
  expect((await sidebar.boundingBox())?.width).toBe(272);
  await expect(page.locator("header [aria-controls='site-sidebar']")).toBeHidden();
});

test("the header is the site's name and its line, as in the proposal", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  const title = page.locator("#content h1");
  await expect(title).toHaveText("Doctrina");
  await expect(page.locator("#content header p")).toHaveText(
    "Qué cree cada tradición cristiana, por qué, y cada fuente primaria.",
  );
  const box = await title.boundingBox();
  expect(box?.x).toBe(64);
  expect(box?.y).toBe(90);
  await expect(page.locator("#content a.resume-row")).toHaveCount(0);
});

test("«Seguir donde dejaste» shows the chapter, the day and where the reader was", async ({ page }) => {
  test.skip(!hasCorpus, "needs the Bible corpus");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/biblia/juan/6");
  await page.locator("#v-53").scrollIntoViewIfNeeded();
  await page.evaluate(() => document.getElementById("v-53")?.scrollIntoView());
  await page.waitForTimeout(700);
  await page.goto("/es");
  const row = page.locator("#content a.resume-row");
  await expect(row).toHaveAttribute("href", "/es/biblia/juan/6");
  await expect(row.locator("> span").nth(0)).toHaveText("Juan 6");
  await expect(row.locator("> span").nth(1)).toHaveText("hoy");
  await expect(row.locator("> span").nth(2)).toHaveText(/^Reina-Valera 1909, desde el versículo 5\d$/);
  await expect(page.getByText("Seguir donde dejaste", { exact: true })).toBeVisible();
  const box = await row.boundingBox();
  expect(box?.y).toBeCloseTo(251.9, 0);
  expect(box?.height).toBeCloseTo(76, 0);
});
