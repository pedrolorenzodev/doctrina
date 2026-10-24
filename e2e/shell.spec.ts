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

test("English has no sidebar or menu button", async ({ page }) => {
  await page.goto("/en");
  await expect(page.locator("aside")).toHaveCount(0);
  await expect(page.locator("header button[aria-controls]")).toHaveCount(0);
});

test("the language switch keeps the page it is on", async ({ page }) => {
  await page.goto("/es");
  await expect(page.getByRole("link", { name: "EN" })).toHaveAttribute("href", "/en");
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
