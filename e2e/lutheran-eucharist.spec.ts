import { expect, test } from "@playwright/test";

const lutheranPath = "/es/doctrinas/eucaristia/luterana";

test("the Lutheran Eucharist page shows its own sections and no empty Objeciones", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(lutheranPath);
  await expect(page.locator("h1")).toHaveText("La posición luterana");
  for (const id of ["teach", "why", "scripture", "life", "authority"])
    await expect(page.locator(`section#${id}`)).toHaveCount(1);
  await expect(page.locator("section#objections")).toHaveCount(0);
});

test("the Lutheran page grades its statements with the confessions' own categories", async ({ page }) => {
  await page.goto(lutheranPath);
  const authority = page.locator("section#authority");
  await expect(authority).toContainText("Escritura: única regla y norma");
  await expect(authority).toContainText("propias confesiones luteranas");
  await expect(authority).not.toContainText("Iglesia católica");
  await expect(page.locator("section#teach")).toContainText("Confesión de Augsburgo");
});

test("the Lutheran page has no raw tokens, straight quotes or horizontal overflow at 390 px", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(lutheranPath);
  const text = await page.locator("main").innerText();
  expect(text).not.toMatch(/\{[cvg]:/);
  expect(text).not.toContain('"');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
