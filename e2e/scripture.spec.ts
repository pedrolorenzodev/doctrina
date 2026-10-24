import { expect, test } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

const items = "#scripture li";

test("four passages with the reference as the title and the reading under it", async ({ page }) => {
  await page.goto(traditionPath);
  await expect(page.locator(items)).toHaveCount(4);
  const titles = await page.locator(`${items} > p:first-child`).allTextContents();
  expect(titles.map((title) => title.replace(/ /g, " "))).toEqual([
    "Mateo 26:26–28; Marcos 14:22–24; Lucas 22:19–20; 1 Corintios 11:23–26",
    "Lucas 22:19",
    "Juan 6:51–58, 60–69",
    "1 Corintios 10:16–17",
  ]);
  await expect(page.locator("#scripture h2")).toHaveText("La Escritura que usa");
});

test("titles and the button are pressable and do nothing yet", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const url = page.url();
  const title = page.locator(`${items} > p:first-child button`).first();
  await title.click();
  const all = page.locator("#scripture button", { hasText: "Ver los 14 pasajes" });
  await expect(all).toBeVisible();
  await all.click();
  expect(page.url()).toBe(url);
  await expect(page.locator("[role=dialog]")).not.toHaveAttribute("data-open", "true");
  await expect(page.locator("#scripture a")).toHaveCount(0);
});

test("a reference in a reading opens the window and gives the focus back", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const link = page.locator(`${items} button[aria-haspopup]`, { hasText: "Catecismo 1365" });
  await link.click();
  await expect(page.getByRole("dialog")).toContainText("1365");
  await page.keyboard.press("Escape");
  await expect(link).toBeFocused();
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: no horizontal overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(traditionPath);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("the list reveals on scroll and none stays hidden after a fast jump", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  const opacity = await page.evaluate(() =>
    [...document.querySelectorAll("#scripture li")].map((item) => Number(getComputedStyle(item).opacity)),
  );
  expect(opacity).toEqual([1, 1, 1, 1]);
});

test("under reduced motion the list is never armed", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(traditionPath);
  expect(await page.evaluate(() => document.querySelectorAll("#scripture [data-rv]").length)).toBe(0);
  await context.close();
});
