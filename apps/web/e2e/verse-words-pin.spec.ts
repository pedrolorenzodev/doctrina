import { expect, test, type Page } from "@playwright/test";
import { hasCorpus } from "./helpers";

test.skip(!hasCorpus, "needs the local Bible corpus");

const path = "/es/biblia/juan/6/53";

async function open(page: Page) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await page.waitForTimeout(500);
}

const tiles = (page: Page) => page.locator("#words button[aria-pressed]");
const cardOpacity = (page: Page, index: number) =>
  page
    .locator(`#words .grid > div:nth-child(${index + 1})`)
    .evaluate((element) => Number(getComputedStyle(element).opacity));
const pinnedTiles = (page: Page) => page.locator("#words button[data-pinned]");

function crossing(page: Page, index: number, ms: number) {
  return page.evaluate(
    ([selector, duration]) =>
      new Promise<{ t: number; opacity: number }[]>((resolve) => {
        const out: { t: number; opacity: number }[] = [];
        const start = performance.now();
        const tick = () => {
          const element = document.querySelector(selector as string);
          if (element) out.push({ t: performance.now() - start, opacity: Number(getComputedStyle(element).opacity) });
          if (performance.now() - start < (duration as number)) requestAnimationFrame(tick);
          else resolve(out);
        };
        tick();
      }),
    [`#words .grid > div:nth-child(${index + 1})`, ms] as const,
  );
}

test("a click pins a word: hovering and focusing others no longer changes the card", async ({ page }) => {
  await open(page);
  await tiles(page).nth(2).click();
  await expect(pinnedTiles(page)).toHaveCount(1);
  await expect(tiles(page).nth(2)).toHaveAttribute("data-pinned", "");
  await page.waitForTimeout(400);
  await tiles(page).nth(9).hover();
  await tiles(page).nth(11).focus();
  await page.waitForTimeout(400);
  expect(await cardOpacity(page, 2)).toBe(1);
  expect(await cardOpacity(page, 9)).toBe(0);
  expect(await cardOpacity(page, 11)).toBe(0);
  await expect(page.locator('#words button[aria-pressed="true"]')).toHaveCount(1);
  await expect(tiles(page).nth(2)).toHaveAttribute("aria-pressed", "true");
});

test("a click on another word moves the pin, crossing the cards in about 160 ms", async ({ page }) => {
  await open(page);
  await tiles(page).nth(2).click();
  await page.waitForTimeout(400);
  const fadeOut = crossing(page, 2, 500);
  const fadeIn = crossing(page, 9, 500);
  await tiles(page).nth(9).click();
  const [out, into] = [await fadeOut, await fadeIn];
  for (const frames of [out, into]) {
    for (let index = 1; index < frames.length; index += 1) {
      expect(Math.abs(frames[index]!.opacity - frames[index - 1]!.opacity)).toBeLessThanOrEqual(0.5);
    }
  }
  expect(out.at(-1)!.opacity).toBe(0);
  expect(into.at(-1)!.opacity).toBe(1);
  const settled = into.find((frame) => frame.opacity >= 0.99)!;
  expect(settled.t).toBeGreaterThan(100);
  expect(settled.t).toBeLessThan(260);
  await expect(pinnedTiles(page)).toHaveCount(1);
  await expect(tiles(page).nth(9)).toHaveAttribute("data-pinned", "");
  await tiles(page).nth(4).hover();
  await page.waitForTimeout(400);
  expect(await cardOpacity(page, 9)).toBe(1);
});

test("a click on the pinned word releases it and hover works again; the card stays on that word until then", async ({
  page,
}) => {
  await open(page);
  await tiles(page).nth(2).click();
  await tiles(page).nth(2).click();
  await expect(pinnedTiles(page)).toHaveCount(0);
  await page.waitForTimeout(400);
  expect(await cardOpacity(page, 2)).toBe(1);
  await tiles(page).nth(9).hover();
  await page.waitForTimeout(400);
  expect(await cardOpacity(page, 9)).toBe(1);
  expect(await cardOpacity(page, 2)).toBe(0);
  await expect(tiles(page).nth(9)).toHaveAttribute("aria-pressed", "true");
});

test("keyboard: Enter or Space pins, Tab to others leaves the card, the same key releases", async ({ page }) => {
  await open(page);
  await tiles(page).nth(3).focus();
  await page.keyboard.press("Enter");
  await expect(tiles(page).nth(3)).toHaveAttribute("data-pinned", "");
  await page.keyboard.press("Tab");
  await expect(tiles(page).nth(4)).toBeFocused();
  await page.waitForTimeout(400);
  expect(await cardOpacity(page, 3)).toBe(1);
  expect(await cardOpacity(page, 4)).toBe(0);
  await page.keyboard.press("Space");
  await expect(tiles(page).nth(4)).toHaveAttribute("data-pinned", "");
  await expect(pinnedTiles(page)).toHaveCount(1);
  await page.keyboard.press("Space");
  await expect(pinnedTiles(page)).toHaveCount(0);
  await page.keyboard.press("Shift+Tab");
  await page.waitForTimeout(400);
  expect(await cardOpacity(page, 3)).toBe(1);
});

test("the pinned word is drawn with the filled selected state and its text turns light", async ({ page }) => {
  await open(page);
  const tile = tiles(page).nth(5);
  const before = await tile.evaluate((element) => getComputedStyle(element).backgroundColor);
  await tile.click();
  await page.waitForTimeout(400);
  await page.mouse.move(0, 0);
  const ink = await page.evaluate(() => {
    const probe = document.createElement("span");
    probe.style.color = "var(--color-ink)";
    document.body.append(probe);
    const color = getComputedStyle(probe).color;
    probe.remove();
    return color;
  });
  const after = await tile.evaluate((element) => ({
    background: getComputedStyle(element).backgroundColor,
    text: getComputedStyle(element.querySelector("span")!).color,
  }));
  expect(before).not.toBe(ink);
  expect(after.background).toBe(ink);
  expect(after.text).not.toBe(ink);
});

test.describe("touch", () => {
  test.use({ hasTouch: true });

  test("a tap pins, a tap on another moves the pin, a tap on the pinned one releases it", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(path);
    await page.waitForTimeout(500);
    await tiles(page).nth(2).tap();
    await expect(tiles(page).nth(2)).toHaveAttribute("data-pinned", "");
    await tiles(page).nth(6).tap();
    await expect(tiles(page).nth(6)).toHaveAttribute("data-pinned", "");
    await expect(pinnedTiles(page)).toHaveCount(1);
    await page.waitForTimeout(400);
    expect(await cardOpacity(page, 6)).toBe(1);
    await tiles(page).nth(6).tap();
    await expect(pinnedTiles(page)).toHaveCount(0);
    await page.waitForTimeout(400);
    expect(await cardOpacity(page, 6)).toBe(1);
  });
});
