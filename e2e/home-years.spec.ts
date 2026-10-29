import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const percent = (year: number) => ((year - 1) / 2025) * 100;
const track = "[data-years-track]";
const win = "[data-window]";
const status = "#years p[aria-live]";

async function open(page: Page, width = 1440) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto("/es");
  await page.locator(track).scrollIntoViewIfNeeded();
}

async function xOf(page: Page, year: number) {
  const box = (await page.locator(track).boundingBox())!;
  return box.x + (box.width * percent(year)) / 100;
}

async function trackY(page: Page, offset: number) {
  return (await page.locator(track).boundingBox())!.y + offset;
}

async function dragYears(page: Page, fromX: number, toX: number, y: number) {
  await page.mouse.move(fromX, y);
  await page.mouse.down();
  await page.mouse.move(fromX + (toX - fromX) / 2, y, { steps: 4 });
  await page.mouse.move(toX, y, { steps: 4 });
  await page.mouse.up();
}

test("starts on 300–460 with the proposal's marks, counts and status", async ({ page }) => {
  await open(page);
  await expect(page.locator(`${track} > span.text-accent`)).toHaveText("300–460");
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 300 al 460");
  await expect(page.locator("[data-father]")).toHaveCount(56);
  await expect(page.locator("[data-council]")).toHaveCount(41);
  await expect(page.locator("[data-seven]")).toHaveCount(7);
  await expect(page.locator("[data-division]")).toHaveCount(10);
  await expect(page.locator("[data-father][data-in]")).toHaveCount(26);
  await expect(page.locator("[data-council][data-in]")).toHaveCount(12);
  await expect(page.locator("[data-division][data-in]")).toHaveCount(2);
  await expect(page.locator(status)).toHaveText(
    "Del año 300 al 460: 26 Padres y escritores, 12 concilios y 2 divisiones. Arrastra la ventana para elegir otros años.",
  );
  const height = (await page.locator(track).boundingBox())!.height;
  expect(height).toBe(196);
});

test("dragging the window moves it in steps of 10 years and keeps its width", async ({ page }) => {
  await open(page);
  const y = await trackY(page, 60);
  await dragYears(page, await xOf(page, 380), await xOf(page, 580), y);
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 500 al 660");
  await expect(page.locator(status)).toContainText("Del año 500 al 660:");
});

test("the handles resize the window, never under 40 years on the desktop", async ({ page }) => {
  await open(page);
  const y = await trackY(page, 20 + 73);
  await dragYears(page, await xOf(page, 300), await xOf(page, 200), y);
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 200 al 460");
  await dragYears(page, await xOf(page, 460), await xOf(page, 100), y);
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 200 al 240");
});

test("dragging on the track draws a new window; a tap centres the window there", async ({ page }) => {
  await open(page);
  const y = await trackY(page, 60);
  await dragYears(page, await xOf(page, 1500), await xOf(page, 1600), y);
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 1500 al 1600");
  await page.mouse.click(await xOf(page, 1000), y);
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 950 al 1050");
});

test("an empty stretch of years says so", async ({ page }) => {
  await open(page);
  const y = await trackY(page, 60);
  await dragYears(page, await xOf(page, 1700), await xOf(page, 1760), y);
  await expect(page.locator(status)).toHaveText(
    "Nada registrado entre los años 1700 y 1760. Arrastra la ventana para elegir otros años.",
  );
});

test("the window is a slider: arrows move it by 10 years, Shift by 50, clamped at the ends", async ({ page }) => {
  await open(page);
  await page.locator(win).focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 310 al 470");
  await page.keyboard.press("Shift+ArrowLeft");
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 260 al 420");
  for (let i = 0; i < 8; i++) await page.keyboard.press("Shift+ArrowLeft");
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 1 al 161");
  await expect(page.locator(status)).toContainText("Del año 1 al 161:");
});

test("the status follows the window while the drag is still going on", async ({ page }) => {
  await open(page);
  const y = await trackY(page, 60);
  await page.mouse.move(await xOf(page, 380), y);
  await page.mouse.down();
  await page.mouse.move(await xOf(page, 680), y, { steps: 6 });
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 600 al 760");
  await expect(page.locator(status)).toContainText("Del año 600 al 760:");
  await page.mouse.up();
});

test("marks change state with a 200 ms transition", async ({ page }) => {
  await open(page);
  await page.locator(win).focus();
  await page.keyboard.press("Shift+ArrowRight");
  const bar = page.locator("[data-father='methodius-of-olympus']");
  const durations = await bar.evaluate((element) =>
    element.getAnimations().map((animation) => animation.effect!.getTiming().duration),
  );
  expect(durations.length).toBeGreaterThan(0);
  expect(durations.every((duration) => duration === 200)).toBe(true);
  expect(await bar.evaluate((element) => getComputedStyle(element).transitionTimingFunction)).toBe(
    "cubic-bezier(0.25, 0.1, 0.25, 1), cubic-bezier(0.25, 0.1, 0.25, 1)",
  );
});

test("under reduced motion the marks change at once", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto("/es");
  await page.locator(win).focus();
  await page.keyboard.press("Shift+ArrowRight");
  expect(await page.locator("[data-father='methodius-of-olympus']").evaluate((e) => e.getAnimations().length)).toBe(0);
  await context.close();
});

test("on the phone the row labels hide, the window can be dragged by touch and nothing overflows", async ({
  browser,
}) => {
  const context = await browser.newContext({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto("/es");
  await page.locator(track).scrollIntoViewIfNeeded();
  await expect(page.locator("#years .years-grid > div").first()).toBeHidden();
  expect((await page.locator(track).boundingBox())!.width).toBe(358);
  const session = await context.newCDPSession(page);
  const box = (await page.locator(track).boundingBox())!;
  const x = (year: number) => box.x + (box.width * percent(year)) / 100;
  const y = box.y + 60;
  const touch = (type: "touchStart" | "touchMove" | "touchEnd", px: number) =>
    session.send("Input.dispatchTouchEvent", {
      type,
      touchPoints: type === "touchEnd" ? [] : [{ x: px, y }],
    });
  await touch("touchStart", x(380));
  for (const year of [420, 480, 560, 640, 680]) await touch("touchMove", x(year));
  await touch("touchEnd", x(680));
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 600 al 760");
  const handle = (await page.locator("[data-h='l']").boundingBox())!;
  const hit = await page.evaluate(
    ([hx, hy]) => document.elementFromPoint(hx!, hy!)?.closest("[data-h]")?.getAttribute("data-h") ?? null,
    [handle.x - 20, handle.y + handle.height / 2],
  );
  expect(hit).toBe("l");
  expect(await horizontalOverflow(page)).toBe(0);
  await context.close();
});
