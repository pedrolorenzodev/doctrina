import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const john = "/es/biblia/juan/6";
const strip = "main [data-reader-strip]";
const group = '[role="group"][aria-label="Tamaño del texto"]';
const larger = `${group} button[aria-label="Agrandar el texto"]`;
const smaller = `${group} button[aria-label="Achicar el texto"]`;

const fontSize = (page: Page) => page.locator("#v-1").evaluate((el) => getComputedStyle(el).fontSize);

test("the strip holds A− and A+ on the right from 640 px and is gone on a phone", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await expect(page.locator(group)).toBeVisible();
  await expect(page.locator(group).locator("button")).toHaveText(["A−", "A+"]);
  const box = (await page.locator(group).boundingBox())!;
  const picker = (await page.locator('main [data-reader-strip] button[aria-haspopup="listbox"]').boundingBox())!;
  expect(picker.x + picker.width).toBeGreaterThan(1440 - 130);
  expect(box.x + box.width).toBeLessThan(picker.x);
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator(group)).toBeHidden();
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("seven steps from 17 to 29: the ends disable their button", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  expect(await fontSize(page)).toBe("19px");
  for (const expected of ["21px", "23px", "25px", "27px", "29px"]) {
    await page.locator(larger).click();
    expect(await fontSize(page)).toBe(expected);
  }
  await expect(page.locator(larger)).toBeDisabled();
  for (let at = 0; at < 6; at += 1) await page.locator(smaller).click();
  expect(await fontSize(page)).toBe("17px");
  await expect(page.locator(smaller)).toBeDisabled();
  await expect(page.locator(larger)).toBeEnabled();
});

test("the size is remembered and applied before the first paint on the next visit", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator(larger).click();
  await page.locator(larger).click();
  expect(await page.evaluate(() => localStorage.getItem("doctrina-reader-size"))).toBe("23");
  await page.reload({ waitUntil: "domcontentloaded" });
  expect(await fontSize(page)).toBe("23px");
  await page.goto("/es/biblia/juan/7");
  expect(await fontSize(page)).toBe("23px");
});

test("a size outside the seven steps is ignored", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("doctrina-reader-size", "18"));
  await page.goto(john);
  expect(await fontSize(page)).toBe("19px");
});

test("changing the size keeps the verse being read in place", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.evaluate(() => {
    const verse = document.getElementById("v-30")!;
    scrollTo(0, verse.getBoundingClientRect().top + scrollY - 220);
  });
  await page.waitForTimeout(200);
  const press = async (selector: string) => {
    const box = (await page.locator(selector).boundingBox())!;
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  };
  const top = () => page.locator("#v-30").evaluate((el) => el.getBoundingClientRect().top);
  const before = await top();
  await press(larger);
  expect(Math.abs((await top()) - before)).toBeLessThan(40);
  await press(smaller);
  await press(smaller);
  expect(Math.abs((await top()) - before)).toBeLessThan(60);
});

test("the strip sticks under the top bar and draws its hairline only once stuck", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  const border = () => page.locator(strip).evaluate((el) => getComputedStyle(el).borderBottomColor);
  await expect.poll(border).toBe("rgba(0, 0, 0, 0)");
  await page.evaluate(() => scrollTo(0, 900));
  await expect.poll(() => page.locator(strip).evaluate((el) => Math.round(el.getBoundingClientRect().top))).toBe(56);
  await expect.poll(border).not.toBe("rgba(0, 0, 0, 0)");
  await expect(page.locator(strip)).toHaveAttribute("data-stuck", "");
});

type Sample = { t: number; alpha: number; bar: boolean };

async function sampleArrival(page: Page, hash: string, ms: number): Promise<Sample[]> {
  await page.addInitScript((duration) => {
    const samples: unknown[] = [];
    (window as unknown as { __arrival: unknown[] }).__arrival = samples;
    const start = performance.now();
    const tick = () => {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        const color = getComputedStyle(el).backgroundColor;
        const match = /rgba?\(([^)]+)\)/.exec(color);
        const parts = match ? match[1]!.split(/[ ,/]+/).filter(Boolean) : [];
        const alpha = parts.length > 3 ? Number(parts[3]) : color === "rgba(0, 0, 0, 0)" ? 0 : 1;
        samples.push({ t: performance.now() - start, alpha, bar: getComputedStyle(el).boxShadow !== "none" });
      }
      if (performance.now() - start < (duration as number)) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, ms);
  await page.goto(`${john}${hash}`);
  await page.waitForTimeout(ms + 300);
  return page.evaluate(() => (window as unknown as { __arrival: Sample[] }).__arrival);
}

test("arriving at a verse: fill in 200 ms, held 1.8 s, faded over 1.2 s, the bar stays", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  const frames = await sampleArrival(page, "#v-53", 4200);
  const start = frames.find((frame) => frame.alpha > 0.01)!;
  expect(start).toBeTruthy();
  const rel = frames.filter((frame) => frame.t >= start.t).map((frame) => ({ ...frame, t: frame.t - start.t }));
  const peak = rel.find((frame) => frame.alpha >= 0.43)!;
  expect(peak.t).toBeLessThan(330);
  const held = rel.filter((frame) => frame.t > peak.t && frame.t < 1900);
  expect(held.every((frame) => frame.alpha >= 0.43)).toBe(true);
  const fading = rel.filter((frame) => frame.t > 2100 && frame.t < 3100);
  expect(fading.length).toBeGreaterThan(20);
  for (let at = 1; at < fading.length; at += 1)
    expect(fading[at]!.alpha).toBeLessThanOrEqual(fading[at - 1]!.alpha + 0.005);
  expect(fading[0]!.alpha).toBeGreaterThan(0.3);
  expect(rel.filter((frame) => frame.t > 3500).every((frame) => frame.alpha < 0.01)).toBe(true);
  expect(rel.every((frame) => frame.bar)).toBe(true);
});

test("under reduced motion the fill appears at once and goes at once, the bar stays", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 900 });
  const frames = await sampleArrival(page, "#v-53", 3200);
  const start = frames.find((frame) => frame.alpha > 0.01)!;
  expect(start.alpha).toBeGreaterThanOrEqual(0.43);
  expect(frames.filter((frame) => frame.alpha > 0.01 && frame.alpha < 0.4)).toHaveLength(0);
  const end = frames.find((frame) => frame.t > start.t && frame.alpha < 0.01)!;
  expect(end.t - start.t).toBeGreaterThan(1800);
  expect(end.t - start.t).toBeLessThan(2400);
  expect(frames.filter((frame) => frame.t >= start.t).every((frame) => frame.bar)).toBe(true);
});

test("a verse link lands the verse 140 px from the top at once, with no second jump", async ({ page }) => {
  await page.addInitScript(() => {
    const tops: number[] = [];
    (window as unknown as { __tops: number[] }).__tops = tops;
    const start = performance.now();
    const tick = () => {
      const el = document.getElementById("v-53");
      if (el) tops.push(Math.round(el.getBoundingClientRect().top));
      if (performance.now() - start < 1500) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${john}#v-53`);
  await page.waitForTimeout(1700);
  const tops = await page.evaluate(() => (window as unknown as { __tops: number[] }).__tops);
  const settled = tops.slice(-10);
  expect(settled.every((top) => Math.abs(top - 140) <= 3)).toBe(true);
  expect(tops.filter((top) => top < 120)).toHaveLength(0);
});

test("a hash that is not a verse marks nothing, and a hash change marks the new verse", async ({ page }) => {
  await page.goto(`${john}#top`);
  await expect(page.locator("[data-arrived]")).toHaveCount(0);
  await page.evaluate(() => {
    location.hash = "#v-2";
  });
  await expect(page.locator("#v-2")).toHaveAttribute("data-marked", "");
  await page.evaluate(() => {
    location.hash = "#v-3";
  });
  await expect(page.locator("#v-3")).toHaveAttribute("data-marked", "");
  await expect(page.locator("#v-2")).not.toHaveAttribute("data-marked", "");
});
