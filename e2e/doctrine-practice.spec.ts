import { expect, test } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

const path = "/es/doctrinas/eucaristia";
const table = "#practice table";

test("«La práctica»: title, subtitle and the table with five traditions and three aspects", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await expect(page.locator("#practice h2")).toHaveText("La práctica");
  await expect(page.locator("#practice > div > p").first()).toContainText("quién preside, con qué pan y vino");
  await expect(page.locator(`${table} caption`)).toHaveText("La práctica en las cinco tradiciones");
  await expect(page.locator(`${table} thead th`)).toHaveText([
    "Aspecto",
    "Católica",
    "Ortodoxa",
    "Luterana",
    "Reformada",
    "Bautista",
  ]);
  await expect(page.locator(`${table} tbody th`)).toHaveText(["Quién preside", "Pan y vino", "Lo que sobra"]);
  await expect(page.locator(`${table} tbody tr`).first().locator("td")).toHaveCount(5);
  await expect(page.locator(`${table} tbody tr`).first().locator("td").first()).toContainText(
    "Solo un sacerdote válidamente ordenado",
  );
});

test("each cell ends with its source in parentheses; registry sources open their window", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  const first = page.locator(`${table} tbody tr`).first().locator("td").first();
  await expect(first).toContainText("(Catecismo 1348, 1411).");
  const link = first.locator("[aria-haspopup]");
  await link.scrollIntoViewIfNeeded();
  await link.click();
  await expect(page.locator("[role=dialog]")).toHaveAttribute("data-open", "true");
  await expect(page.locator("[role=dialog]")).toContainText("Catecismo");
  await page.keyboard.press("Escape");
  await expect(link).toBeFocused();
  const plain = page.locator(`${table} tbody tr`).first().locator("td").nth(2);
  await expect(plain).toContainText("(Confesión de Augsburgo XIV).");
  await expect(plain.locator("[aria-haspopup]")).toHaveCount(0);
});

test("a row fills on hover", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  const row = page.locator(`${table} tbody tr`).nth(1);
  await row.scrollIntoViewIfNeeded();
  await row.hover();
  await expect.poll(() => row.evaluate((node) => getComputedStyle(node).backgroundColor)).not.toBe("rgba(0, 0, 0, 0)");
});

test("the table shows from 900 px and the one-aspect-at-a-time list under it", async ({ page }) => {
  for (const [width, wide] of [
    [1440, true],
    [900, true],
    [899, false],
    [390, false],
  ] as const) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(path);
    await expect(page.locator(table), `${width}px`).toBeVisible({ visible: wide });
    await expect(page.locator("#practice h3").first(), `${width}px`).toBeVisible({ visible: !wide });
  }
});

test("under 900 px every aspect lists its five traditions with their sources", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(path);
  await expect(page.locator("#practice h3")).toHaveText(["Quién preside", "Pan y vino", "Lo que sobra"]);
  await expect(page.locator("#practice ul").first().locator("li")).toHaveCount(5);
  await expect(page.locator("#practice ul").first().locator("li").first()).toContainText("Católica");
  await expect(page.locator("#practice ul").first().locator("li").first()).toContainText("(Catecismo 1348, 1411).");
});

test("«Doctrinas conectadas»: only the doctrines that have a page, as one inert card", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await expect(page.locator("#connected h2")).toHaveText("Doctrinas conectadas");
  await expect(page.locator("#connected > div > p").first()).toContainText("pesa también en estas doctrinas");
  await expect(page.locator("#connected h3")).toHaveText(["El bautismo"]);
  await expect(page.locator("#connected a")).toHaveCount(0);
  const card = page.locator("#connected button");
  await expect(card).toHaveCount(1);
  await expect(card).toContainText("Todas las tradiciones exigen el bautismo antes de la comunión");
  const url = page.url();
  await card.click();
  expect(page.url()).toBe(url);
  await expect(page.locator("#connected")).not.toContainText("justificación");
});

test("a card underlines its title and darkens its text on hover and on focus", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  const card = page.locator("#connected button");
  await card.scrollIntoViewIfNeeded();
  const title = card.locator("h3");
  const before = await title.evaluate((node) => getComputedStyle(node).textDecorationColor);
  await card.hover();
  await expect.poll(() => title.evaluate((node) => getComputedStyle(node).textDecorationColor)).not.toBe(before);
  expect(await card.evaluate((node) => getComputedStyle(node).backgroundColor)).not.toBe("rgba(0, 0, 0, 0)");
  await page.mouse.move(10, 10);
  await card.focus();
  await page.keyboard.press("Tab");
  await card.focus();
  await expect(card).toBeFocused();
});

test("the ruler lists the title and the six sections, and each tick scrolls to its section", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await page.waitForTimeout(1500);
  await expect(page.locator("[data-tick]")).toHaveCount(6);
  await page.locator("[data-tick]").nth(5).click();
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(1000);
  await page.locator("[data-tick]").nth(3).click();
  await expect
    .poll(async () =>
      Math.round(await page.evaluate(() => document.querySelector("#witnesses")!.getBoundingClientRect().top)),
    )
    .toBeLessThan(120);
});

test("the sections come in the order of the proposal", async ({ page }) => {
  await page.goto(path);
  await expect(page.locator("main section h2")).toHaveText([
    "Lo que todas comparten",
    "Las cinco respuestas",
    "Lo que escribieron los primeros cristianos",
    "La práctica",
    "Doctrinas conectadas",
  ]);
});

test("the tradition page and the Objeciones page still open from here", async ({ page }) => {
  await page.goto(path);
  await page.locator("#answers li[data-id=catholic] a", { hasText: "Estudiar la postura católica" }).click();
  await expect(page).toHaveURL(traditionPath);
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: the whole doctrine page has no horizontal overflow @webkit`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(path);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}
