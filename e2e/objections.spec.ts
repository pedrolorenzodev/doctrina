import { expect, test } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

const items = "#objections li";

test("three official objections, each with a title and a synthesis", async ({ page }) => {
  await page.goto(traditionPath);
  await expect(page.locator(items)).toHaveCount(3);
  await expect(page.locator("#objections h2")).toHaveText("Objeciones");
  await expect(page.locator(`${items} > p:first-child`).first()).toHaveText(
    "Si Cristo se ofreció «una vez para siempre», la Misa no puede ser un sacrificio",
  );
  await expect(page.locator("#objections")).not.toContainText("pending");
  await expect(page.locator("#objections")).not.toContainText("Suelen plantearla");
});

test("a reference inside the author's own parentheses is not wrapped twice", async ({ page }) => {
  await page.goto(traditionPath);
  const text = await page.locator(`${items}`).nth(2).locator("p").last().textContent();
  expect((text ?? "").replace(/[ ]/g, " ")).toContain("(«Tomad, comed», Mateo 26:26). Guardarlo");
});

test("the button counts the official objections and does nothing yet", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const url = page.url();
  const button = page.locator("#objections button", { hasText: "Ver las 7 objeciones" });
  await expect(button).toBeVisible();
  await button.click();
  await page.locator(`${items} > p:first-child button`).first().click();
  expect(page.url()).toBe(url);
  await expect(page.locator("#objections a")).toHaveCount(0);
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: no horizontal overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(traditionPath);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("a reference in a synthesis opens the window", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const link = page.locator(`${items} [aria-haspopup]`).first();
  await link.click();
  await expect(page.locator("[role=dialog]")).toHaveAttribute("data-open", "true");
  await page.keyboard.press("Escape");
  await expect(link).toBeFocused();
});

test("the list reveals on scroll and none stays hidden after a fast jump", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  const opacity = await page.evaluate(() =>
    [...document.querySelectorAll("#objections li")].map((item) => Number(getComputedStyle(item).opacity)),
  );
  expect(opacity).toEqual([1, 1, 1]);
});

test("under reduced motion the list is never armed", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(traditionPath);
  expect(await page.evaluate(() => document.querySelectorAll("#objections [data-rv]").length)).toBe(0);
  await context.close();
});
