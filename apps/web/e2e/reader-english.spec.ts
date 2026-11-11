import { expect, test } from "@playwright/test";

test("the English reader: John 6 in the BSB, English UI, English book names in the tree and the crumbs", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/en/bible/john/6");
  await expect(page.locator("h1")).toHaveText("John 6");
  await expect(page.locator("main")).toContainText("After this, Jesus crossed to the other side of the Sea of Galilee");
  await expect(page.locator("[data-reader-strip]")).toContainText("BSB");
  await expect(page.locator("main nav[aria-label]").first()).toContainText("New Testament");
  await expect(page.getByRole("link", { name: "Next" }).first()).toHaveAttribute("href", "/en/bible/john/7");
});

test("the deuterocanon opens in the English reader with the Douay-Rheims", async ({ page }) => {
  await page.goto("/en/bible/tobit/1");
  await expect(page.locator("h1")).toHaveText("Tobit 1");
  await expect(page.locator("[data-reader-strip]")).toContainText("DRA");
});

test("the language switch keeps the chapter", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/en/bible/john/6");
  await page.getByRole("link", { name: "ES", exact: true }).click();
  await expect(page).toHaveURL(/\/es\/biblia\/juan\/6$/);
});

test("the English reader keeps the English address and marks the book in the tree while scrolling on", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/en/bible/john/6");
  const book = page.locator('#site-sidebar nav li[data-id="book/John"]');
  await expect(book.locator("[data-current], [data-trail]").first()).toBeVisible();
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  expect(new URL(page.url()).pathname).toMatch(/^\/en\/bible\/john\/\d+$/);
  await expect(page.locator('main [data-stream-chapter="John/7"] [data-chapter-text]')).not.toContainText("Yo soy");
  await expect(
    page.locator('main [data-stream-chapter="John/7"] h2, main [data-stream-chapter="John/7"] h1'),
  ).toHaveText("John 7");
  await expect(book.locator("[data-current], [data-trail]").first()).toBeVisible();
});
