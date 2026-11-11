import { expect, test } from "@playwright/test";
import { trackElement, type Frame } from "./helpers";

const timeline = "/es/historia/linea-de-tiempo";
const panel = "aside[data-side-panel]";

const monotonic = (values: number[], direction: 1 | -1, epsilon: number) =>
  values.every((value, index) => index === 0 || (value - (values[index - 1] ?? value)) * direction >= -epsilon);

const settledAt = (frames: Frame[], reached: (frame: Frame) => boolean) => frames.find(reached)?.t ?? Infinity;

test("the panel opens in about 200 ms: opacity rises and it slides 24 px in, with no stall", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  const target = page.locator('[data-scroller] button[data-entry="justin-martyr"]');
  await target.hover();
  const frames = trackElement(page, panel, 700);
  await target.click();
  const sampled = await frames;
  const moving = sampled.filter((frame) => frame.opacity > 0.01 && frame.opacity < 0.99);
  expect(moving.length).toBeGreaterThanOrEqual(3);
  expect(
    monotonic(
      sampled.map((frame) => frame.opacity),
      1,
      0.02,
    ),
  ).toBe(true);
  expect(
    monotonic(
      sampled.filter((frame) => frame.opacity > 0).map((frame) => frame.left),
      -1,
      0.5,
    ),
  ).toBe(true);
  const last = sampled[sampled.length - 1]!;
  expect(last.opacity).toBe(1);
  expect(Math.round(last.left)).toBe(1060);
  const began = settledAt(sampled, (frame) => frame.opacity > 0.01);
  const duration = settledAt(sampled.slice(1), (frame) => frame.opacity >= 0.99) - began;
  expect(duration).toBeGreaterThan(100);
  expect(duration).toBeLessThan(340);
  const gaps = sampled.slice(1).map((frame, index) => frame.t - sampled[index]!.t);
  expect(Math.max(...gaps)).toBeLessThan(120);
});

test("the phone sheet rises from the bottom edge in the same time", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto(timeline);
  const target = page.locator('[data-scroller] button[data-entry="justin-martyr"]');
  await target.hover();
  const frames = trackElement(page, panel, 700);
  await target.click();
  const sampled = await frames;
  const tops = sampled.filter((frame) => frame.opacity > 0).map((frame) => frame.top);
  expect(monotonic(tops, -1, 0.5)).toBe(true);
  const last = sampled[sampled.length - 1]!;
  expect(Math.round(last.top + last.height)).toBe(800);
});

test("the fixed strip of the Father timeline enters in 240 ms: opacity up, 8 px rise, then settles", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 640 });
  await page.goto("/es/historia/padres/ignatius-of-antioch");
  await page.evaluate(() => scrollTo(0, document.querySelector("#time")!.getBoundingClientRect().top + scrollY - 80));
  const target = page.locator('#time button[data-entry="justin-martyr"]');
  await target.hover();
  const frames = trackElement(page, "[data-strip] > div", 700);
  await target.click();
  const sampled = await frames;
  const live = sampled.filter((frame) => frame.opacity > 0);
  expect(live.length).toBeGreaterThanOrEqual(3);
  expect(
    monotonic(
      live.map((frame) => frame.opacity),
      1,
      0.02,
    ),
  ).toBe(true);
  expect(
    monotonic(
      live.map((frame) => frame.top),
      -1,
      0.5,
    ),
  ).toBe(true);
  const rise = live[0]!.top - live[live.length - 1]!.top;
  expect(rise).toBeGreaterThan(5);
  expect(rise).toBeLessThan(9);
  expect(live[live.length - 1]!.opacity).toBe(1);
});
