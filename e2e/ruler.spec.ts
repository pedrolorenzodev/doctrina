import { expect, test } from "@playwright/test";
import { traditionPath } from "./helpers";

const ticks = "[data-tick]";

test("seven ticks with the specified geometry, the first active", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.waitForTimeout(1500);
  await expect(page.locator(ticks)).toHaveCount(7);
  const first = await page.locator(ticks).first().boundingBox();
  expect(first?.width).toBe(64);
  expect(first?.height).toBe(13);
  const bar = await page.locator(`${ticks} span:last-child`).first().boundingBox();
  expect(bar?.width).toBe(16);
  expect(bar?.height).toBe(3);
  await expect(page.locator(ticks).first()).toHaveAttribute("data-active", "true");
  const right = await page.evaluate(
    () => innerWidth - document.querySelector("nav[aria-label]:has([data-tick])")!.getBoundingClientRect().right,
  );
  expect(right).toBe(18);
});

test("hovering stretches the ticks as the cosine falloff says and shows the label", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.waitForTimeout(1500);
  const box = await page.locator(ticks).first().boundingBox();
  await page.mouse.move((box?.x ?? 0) + 40, (box?.y ?? 0) + 6);
  await page.waitForTimeout(350);
  const scales = await page
    .locator(`${ticks} span:last-child`)
    .evaluateAll((bars) => bars.map((bar) => new DOMMatrix(getComputedStyle(bar).transform).a));
  expect(scales[0]).toBeCloseTo(4.5, 2);
  expect(scales[1]).toBeCloseTo(2.5 + 2 * Math.cos(Math.PI / 16), 2);
  expect(scales[2]).toBeCloseTo(2.5 + 2 * Math.cos((2 * Math.PI) / 16), 2);
  expect(scales[3]).toBeCloseTo(2.5 + 2 * Math.cos((3 * Math.PI) / 16), 2);
  expect(scales[4]).toBeCloseTo(2.5 + 2 * Math.cos((4 * Math.PI) / 16), 2);
  expect(scales[5]).toBeCloseTo(2.5 + 2 * Math.cos((5 * Math.PI) / 16), 2);
  expect(scales[6]).toBeCloseTo(2.5 + 2 * Math.cos((6 * Math.PI) / 16), 2);
  await expect(page.locator(`${ticks} span:first-child`).first()).toHaveCSS("opacity", "1");
  await page.mouse.move(700, 450);
  await page.waitForTimeout(350);
  const rest = await page
    .locator(`${ticks} span:last-child`)
    .evaluateAll((bars) => bars.map((bar) => new DOMMatrix(getComputedStyle(bar).transform).a));
  expect(rest).toEqual([1, 1, 1, 1, 1, 1, 1]);
});

test("the active tick follows the scroll and a click jumps so the section lands under the bar", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.waitForTimeout(1500);
  await page.locator(ticks).nth(1).click();
  await page.waitForTimeout(1200);
  const top = await page.evaluate(() => Math.round(document.getElementById("teach")!.getBoundingClientRect().top));
  expect(top).toBe(80);
  await expect(page.locator(ticks).nth(1)).toHaveAttribute("data-active", "true");
  await page.evaluate(() => scrollTo(0, 0));
  await page.waitForTimeout(1200);
  await expect(page.locator(ticks).first()).toHaveAttribute("data-active", "true");
});

test("it is hidden below 768 px and shown from 768 px", async ({ page }) => {
  await page.setViewportSize({ width: 767, height: 800 });
  await page.goto(traditionPath);
  await expect(page.locator(ticks).first()).toBeHidden();
  await page.setViewportSize({ width: 768, height: 800 });
  await expect(page.locator(ticks).first()).toBeVisible();
});

test("smooth scroll runs without reduced motion and is not loaded with it", async ({ browser }) => {
  const smooth = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await smooth.newPage();
  await page.goto(traditionPath);
  await expect.poll(() => page.evaluate(() => document.documentElement.className.includes("lenis"))).toBe(true);
  await smooth.close();
  const still = await browser.newContext({ reducedMotion: "reduce" });
  const quiet = await still.newPage();
  await quiet.goto(traditionPath);
  await quiet.waitForTimeout(500);
  expect(await quiet.evaluate(() => document.documentElement.className.includes("lenis"))).toBe(false);
  await still.close();
});
