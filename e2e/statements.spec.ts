import { expect, test, type Page } from "@playwright/test";
import { traditionPath } from "./helpers";

const more = "#teach button[aria-expanded]:not([aria-haspopup])";

const list = (page: Page) =>
  page.evaluate(() => {
    const items = [...document.querySelectorAll("#teach ol > li")] as HTMLElement[];
    return {
      total: items.length,
      hidden: items.filter((item) => item.hidden).length,
      rv: items.map((item) => item.dataset.rv ?? "-"),
      opacity: items.map((item) => Number(getComputedStyle(item).opacity)),
      ghosts: document.querySelector("#teach [aria-hidden=true].absolute")?.children.length ?? -1,
      animations: document.querySelector("#teach ol")?.getAnimations({ subtree: true }).length ?? -1,
    };
  });

test("nine statements, four hidden, with the count in the button", async ({ page }) => {
  await page.goto(traditionPath);
  expect(await list(page)).toMatchObject({ total: 9, hidden: 4 });
  await expect(page.locator(more)).toHaveText("Mostrar 4 afirmaciones más");
  await expect(page.locator(more)).toHaveAttribute("aria-expanded", "false");
});

test("show more and show less leave no ghost and no running animation", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.locator(more).click();
  await page.waitForTimeout(900);
  expect(await list(page)).toMatchObject({ hidden: 0, ghosts: 0 });
  await expect(page.locator(more)).toHaveText("Mostrar menos");
  await page.locator(more).click();
  await page.waitForTimeout(60);
  expect((await list(page)).ghosts).toBe(4);
  await page.waitForTimeout(900);
  expect(await list(page)).toMatchObject({ hidden: 4, ghosts: 0, animations: 0 });
});

test("nine quick toggles end in an agreeing state", async ({ page }) => {
  await page.goto(traditionPath);
  for (let index = 0; index < 9; index += 1) {
    await page.locator(more).click();
    await page.waitForTimeout(index % 2 ? 30 : 90);
  }
  await page.waitForTimeout(1200);
  expect(await list(page)).toMatchObject({ hidden: 0, ghosts: 0, animations: 0 });
  await expect(page.locator(more)).toHaveAttribute("aria-expanded", "true");
});

test("after «Mostrar menos» from far below, the page returns to the list", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.locator(more).click();
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    const bottom = document.querySelector("#teach ol")!.getBoundingClientRect().bottom + scrollY;
    scrollTo(0, bottom - 200);
  });
  await page.waitForTimeout(500);
  await page.locator(more).click();
  await page.waitForTimeout(1200);
  const top = await page.evaluate(() => Math.round(document.querySelector("#teach ol")!.getBoundingClientRect().top));
  expect(top).toBeGreaterThanOrEqual(0);
});

test("items below the fold are armed at load and revealed on scroll; a fast jump never leaves one invisible", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 560 });
  await page.goto(traditionPath);
  await page.waitForTimeout(300);
  expect((await list(page)).rv.slice(1, 5)).toEqual(["armed", "armed", "armed", "armed"]);
  await page.locator(more).click();
  await page.waitForTimeout(900);
  await page.evaluate(() => scrollTo(0, 3000));
  await page.waitForTimeout(500);
  await page.evaluate(() => scrollTo(0, 0));
  await page.waitForTimeout(600);
  const after = await list(page);
  expect(after.opacity.every((value) => value === 1)).toBe(true);
});

test("under reduced motion nothing is armed and the list changes at once", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto(traditionPath);
  expect((await list(page)).rv.every((value) => value === "-")).toBe(true);
  await page.locator(more).click();
  await page.waitForTimeout(80);
  expect(await list(page)).toMatchObject({ hidden: 0, animations: 0 });
  await context.close();
});
