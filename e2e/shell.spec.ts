import { expect, test } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

test("/ redirects to /es", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/es$/);
});

for (const path of ["/fr", "/foo", "/es/nothing", "/en/doctrinas/x"]) {
  test(`${path} is a 404 that shows Spanish and English`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "Esta página no existe" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "This page doesn't exist" })).toBeVisible();
  });
}

test("the Spanish and the canonical URLs of a tradition both work; English has none yet", async ({ page }) => {
  expect((await page.goto(traditionPath))?.status()).toBe(200);
  expect((await page.goto("/es/doctrines/eucharist/catholic"))?.status()).toBe(200);
  expect((await page.goto("/en/doctrines/eucharist/catholic"))?.status()).toBe(404);
});

test("English has the sidebar and the menu button, with English labels", async ({ page }) => {
  await page.goto("/en");
  await expect(page.locator("aside")).toHaveCount(1);
  await expect(page.locator("header button[aria-controls]")).toHaveCount(1);
  await expect(page.locator("aside nav p")).toHaveText(["Doctrines", "Bible", "History", "Reference"]);
  await expect(page.locator("aside nav")).toContainText("The Eucharist");
  await expect(page.locator("aside nav")).not.toContainText("La Eucaristía");
});

test("the language switch keeps the page it is on", async ({ page }) => {
  await page.goto("/es");
  await expect(page.getByRole("link", { name: "EN", exact: true })).toHaveAttribute("href", "/en");
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`no horizontal overflow at ${width} px, with every statement shown`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.goto(traditionPath);
    await page.locator("#teach button[aria-expanded]:not([aria-haspopup])").click();
    await page.waitForTimeout(700);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("the page refuses the browser's history swipe, and a wheel with a sideways part never scrolls it sideways", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).overscrollBehaviorX)).toBe("none");
  await page.mouse.move(700, 500);
  for (let i = 0; i < 8; i++) {
    await page.mouse.wheel(i % 2 ? 14 : -14, 120);
    await page.waitForTimeout(40);
  }
  expect(await page.evaluate(() => scrollX)).toBe(0);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});
