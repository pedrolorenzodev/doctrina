import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const john = "/es/biblia/juan/6";
const crumbs = '[data-stream-fold="crumbs"]';
const boundary = '[data-stream-fold="boundary"]';

type Frame = {
  t: number;
  title: number;
  verse: number;
  last: number | null;
  crumbsHeight: number;
  crumbsOpacity: number;
  boundaryHeight: number;
  mounted: boolean;
};

async function watchFrames(page: Page): Promise<void> {
  await page.evaluate(() => {
    const frames: Frame[] = [];
    (window as unknown as { __frames: Frame[] }).__frames = frames;
    const tick = (now: number) => {
      const crumbsBox = document.querySelector('[data-stream-fold="crumbs"]');
      const boundaryBox = document.querySelector('[data-stream-fold="boundary"]');
      const previous = document.querySelector('[data-stream-chapter="John/5"]');
      const last = previous ? [...previous.querySelectorAll("[data-chapter-text] > [id]")].pop() : null;
      frames.push({
        t: now,
        title: document.querySelector("#top h1")?.getBoundingClientRect().top ?? 0,
        verse: document.querySelector("#v-1")?.getBoundingClientRect().top ?? 0,
        last: last ? last.getBoundingClientRect().top : null,
        crumbsHeight: crumbsBox ? crumbsBox.getBoundingClientRect().height : 0,
        crumbsOpacity: crumbsBox ? Number(getComputedStyle(crumbsBox).opacity) : 0,
        boundaryHeight: boundaryBox ? boundaryBox.getBoundingClientRect().height : 0,
        mounted: previous !== null,
      });
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

const framesOf = (page: Page) => page.evaluate(() => (window as unknown as { __frames: Frame[] }).__frames);

async function goUp(page: Page, x = 700, y = 450) {
  await page.mouse.move(x, y);
  await expect
    .poll(
      async () => {
        await page.mouse.wheel(0, -120);
        return page.locator('[data-stream-chapter="John/5"]').count();
      },
      { timeout: 10000, intervals: [250] },
    )
    .toBe(1);
}

test("on arrival the breadcrumbs show and the chapter separator is closed", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await expect(page.locator(`${crumbs} nav`)).toBeVisible();
  const box = (await page.locator(crumbs).boundingBox())!;
  expect(box.height).toBeGreaterThan(40);
  await expect(page.locator(boundary)).toHaveCount(0);
});

test("when the previous chapter mounts the breadcrumbs fade out and fold away, the separator opens, frame by frame without a jump", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await expect(page.locator(`${crumbs} nav`)).toBeVisible();
  await page.waitForTimeout(600);
  await watchFrames(page);
  await goUp(page);
  await page.waitForTimeout(900);
  const frames = (await framesOf(page)).filter((frame) => frame.mounted);
  expect(frames.length).toBeGreaterThan(8);
  const last = frames[frames.length - 1]!;
  expect(last.crumbsHeight).toBe(0);
  expect(Math.abs(last.boundaryHeight - 161)).toBeLessThan(2);
  const visible = frames.filter((frame) => frame.crumbsHeight > 0);
  const opacities = visible.map((frame) => frame.crumbsOpacity);
  for (let index = 1; index < opacities.length; index += 1) {
    expect(opacities[index]!).toBeLessThanOrEqual(opacities[index - 1]! + 0.001);
  }
  expect(opacities.some((value) => value > 0.1 && value < 0.9)).toBe(true);
  for (const key of ["title", "verse"] as const) {
    for (let index = 1; index < frames.length; index += 1) {
      const step = frames[index]![key] - frames[index - 1]![key];
      expect(Math.abs(step)).toBeLessThan(30);
      expect(step).toBeGreaterThanOrEqual(-0.5);
    }
  }
  const anchored = frames.filter((frame) => frame.last !== null).map((frame) => frame.last!);
  expect(Math.max(...anchored) - Math.min(...anchored)).toBeLessThan(1.5);
  const travel = last.title - frames[0]!.title;
  expect(travel).toBeGreaterThan(80);
  const heights = frames.map((frame) => frame.crumbsHeight);
  for (let index = 1; index < heights.length; index += 1) {
    expect(heights[index]!).toBeLessThanOrEqual(heights[index - 1]! + 0.5);
    expect(heights[index - 1]! - heights[index]!).toBeLessThan(14);
  }
});

test("once folded the breadcrumbs cannot be reached: hidden, inert and without links to tab to", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await goUp(page);
  await page.waitForTimeout(700);
  await expect(page.locator(crumbs)).toHaveAttribute("hidden", "");
  await expect(page.locator(`${crumbs} nav`)).toBeHidden();
});

test("under reduced motion the breadcrumbs are gone and the separator is open as soon as they are on screen", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.waitForTimeout(400);
  await goUp(page);
  await expect(page.locator(crumbs)).toHaveAttribute("hidden", "");
  await expect(page.locator(boundary)).toBeVisible();
  const open = (await page.locator(boundary).boundingBox())!;
  expect(Math.abs(open.height - 161)).toBeLessThan(2);
});

test("on a phone the same happens with no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(john);
  await expect(page.locator(`${crumbs} nav`)).toBeVisible();
  await goUp(page, 200, 400);
  await page.waitForTimeout(700);
  await expect(page.locator(crumbs)).toBeHidden();
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});
