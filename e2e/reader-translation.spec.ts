import { readFileSync } from "node:fs";
import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const john = "/es/biblia/juan/6";
const button = 'main [data-reader-strip] button[aria-haspopup="listbox"]';
const list = 'main [data-reader-strip] [role="listbox"]';
const option = (abbreviation: string) => `${list} [role="option"]:has-text("(${abbreviation})")`;

const bsb = JSON.parse(readFileSync("data/corpus/bibles/bsb.json", "utf8")) as Record<string, string>;
const dra = JSON.parse(readFileSync("data/corpus/bibles/dra.json", "utf8")) as Record<string, string>;

const verse = (page: Page, n: number) => page.locator(`#v-${n}`);

test("the picker shows only the abbreviation; the list has two groups and marks the current one", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await expect(page.locator(button)).toHaveText(/RV1909/);
  await expect(page.locator(button)).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator(list)).toBeHidden();
  await page.locator(button).click();
  await expect(page.locator(list)).toBeVisible();
  await expect(page.locator(button)).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(`${list} [role=presentation]`)).toHaveText(["Español", "Inglés"]);
  await expect(page.locator(`${list} [role=option]`)).toHaveText([
    "Reina-Valera 1909 (RV1909)",
    "Berean Standard Bible (BSB)",
    "King James Version (KJV)",
    "World English Bible, Catholic edition (WEB)",
    "Douay-Rheims (DRA)",
  ]);
  await expect(page.locator(option("RV1909"))).toHaveAttribute("aria-selected", "true");
  await expect(page.locator(`${list} [aria-selected=true]`)).toHaveCount(1);
});

test("choosing a translation swaps the text, the edition line and the foot; it is remembered", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator(button).click();
  await page.locator(option("BSB")).click();
  await expect(verse(page, 1)).toHaveText(new RegExp(`^1\\s*${bsb["John.6.1"]!.slice(0, 30)}`));
  await expect(page.locator("main [lang=en]")).toHaveCount(1);
  await expect(page.locator("main p", { hasText: /^Berean Standard Bible$/ }).first()).toBeVisible();
  await expect(page.locator(button)).toHaveText(/BSB/);
  await expect(page.locator(list)).toBeHidden();
  await expect(page.locator(button)).toBeFocused();
  expect(await page.evaluate(() => localStorage.getItem("doctrina-translation"))).toBe("bsb");
  await page.reload();
  await expect(page.locator(button)).toHaveText(/BSB/);
  await expect(verse(page, 1)).toContainText(bsb["John.6.1"]!.slice(0, 30));
  await page.goto("/es/biblia/juan/7");
  await expect(page.locator(button)).toHaveText(/BSB/);
  await expect(verse(page, 1)).toContainText(bsb["John.7.1"]!.slice(0, 30));
});

test("a deuterocanonical chapter offers only the translations that have it and ignores a stored choice it lacks", async ({
  page,
}) => {
  await page.addInitScript(() => localStorage.setItem("doctrina-translation", "bsb"));
  await page.goto("/es/biblia/eclesiastico/51");
  await expect(page.locator(button)).toHaveText(/DRA/);
  await page.locator(button).click();
  await expect(page.locator(`${list} [role=presentation]`)).toHaveText(["Inglés"]);
  await expect(page.locator(`${list} [role=option]`)).toHaveText([
    "World English Bible, Catholic edition (WEB)",
    "Douay-Rheims (DRA)",
  ]);
  await expect(verse(page, 1)).toContainText(dra["Sir.51.1"]!.slice(0, 30));
});

test("a translation that numbers the chapter differently says so; one that agrees does not", async ({ page }) => {
  await page.goto("/es/biblia/salmo/23");
  await expect(page.locator("main [role=note]")).toHaveCount(0);
  await page.locator(button).click();
  await page.locator(option("DRA")).click();
  await expect(page.locator("main [role=note]")).toContainText("DRA numera este capítulo de otro modo que RV1909");
  await page.goto("/es/biblia/juan/6");
  await expect(page.locator("main [role=note]")).toContainText("DRA numera este capítulo de otro modo que RV1909");
  await page.goto("/es/biblia/juan/3");
  await page.locator(button).click();
  await page.locator(option("BSB")).click();
  await expect(page.locator("main [role=note]")).toHaveCount(0);
});

test("keyboard: arrows open and move, Home and End jump, Enter chooses, Esc and Tab close", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator(button).focus();
  await page.keyboard.press("ArrowDown");
  await expect(page.locator(list)).toBeVisible();
  await expect(page.locator(option("RV1909"))).toBeFocused();
  await page.keyboard.press("ArrowDown");
  await expect(page.locator(option("BSB"))).toBeFocused();
  await page.keyboard.press("End");
  await expect(page.locator(option("DRA"))).toBeFocused();
  await page.keyboard.press("ArrowDown");
  await expect(page.locator(option("DRA"))).toBeFocused();
  await page.keyboard.press("Home");
  await expect(page.locator(option("RV1909"))).toBeFocused();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await expect(page.locator(button)).toHaveText(/KJV/);
  await expect(page.locator(button)).toBeFocused();
  await expect(page.locator(list)).toBeHidden();
  await page.keyboard.press("ArrowUp");
  await expect(page.locator(option("KJV"))).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.locator(list)).toBeHidden();
  await expect(page.locator(button)).toBeFocused();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Tab");
  await expect(page.locator(list)).toBeHidden();
});

test("Enter or Space on the button opens the list and the arrows then reach its options", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator(button).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(list)).toBeVisible();
  await expect(page.locator(option("RV1909"))).toBeFocused();
  await page.keyboard.press("Escape");
  await page.keyboard.press("Space");
  await expect(page.locator(option("RV1909"))).toBeFocused();
  await page.keyboard.press("Escape");
  await page.locator(button).click();
  await expect(page.locator(list)).toBeVisible();
  await page.locator(button).focus();
  await page.keyboard.press("ArrowDown");
  await expect(page.locator(option("RV1909"))).toBeFocused();
});

test("a click outside closes the list", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator(button).click();
  await expect(page.locator(list)).toBeVisible();
  await page.mouse.click(700, 600);
  await expect(page.locator(list)).toBeHidden();
  await expect(page.locator(button)).toHaveAttribute("aria-expanded", "false");
});

type Frame = { t: number; height: number; opacity: number; offset: number };

async function sampleList(page: Page, act: () => Promise<void>, ms: number): Promise<Frame[]> {
  await page.evaluate((duration) => {
    const frames: unknown[] = [];
    (window as unknown as { __list: unknown[] }).__list = frames;
    const start = performance.now();
    const visibleHeight = (panel: Element) => {
      const full = panel.getBoundingClientRect().height;
      const clip = getComputedStyle(panel).clipPath;
      const parts = /^inset\((\S+) (\S+) (calc\([^)]*\)|\S+)(?: (\S+))?\)$/.exec(clip);
      if (!parts) return full;
      const bottom = parts[3]!;
      const calc = /calc\(([-\d.e]+)% - ([-\d.e]+)px\)/.exec(bottom);
      const inset = calc
        ? (Number(calc[1]) / 100) * full - Number(calc[2])
        : bottom.endsWith("%")
          ? (Number.parseFloat(bottom) / 100) * full
          : Number.parseFloat(bottom);
      return Math.max(0, full - Math.max(inset, 0));
    };
    const tick = () => {
      const panel = document.querySelector("[data-reader-strip] [role=listbox]")!;
      const strip = document.querySelector("[data-reader-strip]")!;
      const firstOption = panel.querySelector("[role=option]");
      frames.push({
        t: performance.now() - start,
        height: panel.hasAttribute("hidden") ? 0 : visibleHeight(panel),
        opacity: firstOption ? Number(getComputedStyle(firstOption).opacity) : 1,
        offset: panel.getBoundingClientRect().top - strip.getBoundingClientRect().bottom,
      });
      if (performance.now() - start < (duration as number)) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, ms);
  await act();
  await page.waitForTimeout(ms + 100);
  return page.evaluate(() => (window as unknown as { __list: Frame[] }).__list);
}

test("opening reveals the list from the header's line in about 220 ms and closing returns to it in about 160 ms", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator(button).hover();
  const opening = await sampleList(page, () => page.locator(button).click(), 700);
  const grown = opening.filter((frame) => frame.height > 0.5);
  const full = Math.max(...opening.map((frame) => frame.height));
  expect(full).toBeGreaterThan(200);
  const t0 = grown[0]!.t;
  const done = opening.find((frame) => frame.height >= full - 0.5 && frame.t >= t0)!;
  expect(done.t - t0).toBeGreaterThan(25);
  expect(done.t - t0).toBeLessThan(380);
  for (let at = 1; at < grown.length; at += 1)
    expect(grown[at]!.height).toBeGreaterThanOrEqual(grown[at - 1]!.height - 0.5);
  const closing = await sampleList(page, () => page.locator(button).click(), 700);
  const shrinking = closing.filter((frame) => frame.height > 0.5);
  const c0 = shrinking[0]!.t;
  const last = shrinking[shrinking.length - 1]!;
  expect(last.t - c0).toBeGreaterThan(60);
  expect(last.t - c0).toBeLessThan(330);
  for (let at = 1; at < shrinking.length; at += 1)
    expect(shrinking[at]!.height).toBeLessThanOrEqual(shrinking[at - 1]!.height + 0.5);
  await expect(page.locator(list)).toBeHidden();
  for (const frame of [...opening, ...closing].filter((item) => item.height > 0)) {
    expect(Math.abs(frame.offset)).toBeLessThanOrEqual(0.5);
  }
});

test("the list hangs from the header's own line: no border of its own on top, square top corners", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator(button).click();
  await expect(page.locator(list)).toBeVisible();
  await page.waitForTimeout(350);
  const style = await page.locator(list).evaluate((element) => {
    const css = getComputedStyle(element);
    return {
      top: css.borderTopWidth,
      left: css.borderLeftWidth,
      topRadius: css.borderTopLeftRadius,
      bottomRadius: css.borderBottomLeftRadius,
    };
  });
  expect(style.top).toBe("0px");
  expect(style.left).toBe("1px");
  expect(style.topRadius).toBe("0px");
  expect(style.bottomRadius).not.toBe("0px");
  const gap = await page.evaluate(
    () =>
      document.querySelector("[data-reader-strip] [role=listbox]")!.getBoundingClientRect().top -
      document.querySelector("[data-reader-strip]")!.getBoundingClientRect().bottom,
  );
  expect(Math.abs(gap)).toBeLessThanOrEqual(0.5);
});

test("a long name wraps with its abbreviation right after the last word, as the others do", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(john);
  await page.locator(button).click();
  await page.waitForTimeout(350);
  const web = page.locator(option("WEB"));
  const box = (await web.boundingBox())!;
  expect(box.height).toBeGreaterThan(48);
  const abbreviation = (await web.locator("span span").boundingBox())!;
  expect(abbreviation.y).toBeGreaterThan(box.y + box.height / 2 - 4);
  expect(abbreviation.x - box.x).toBeLessThan(box.width * 0.6);
  const short = (await page.locator(option("BSB")).boundingBox())!;
  expect(short.height).toBeLessThan(50);
});

test("under reduced motion the list appears and goes at once", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  const frames = await sampleList(page, () => page.locator(button).click(), 400);
  const partial = frames.filter(
    (frame) => frame.height > 0.5 && frame.height < Math.max(...frames.map((f) => f.height)) - 1,
  );
  expect(partial).toHaveLength(0);
  await page.locator(button).click();
  await expect(page.locator(list)).toBeHidden();
});

test("a short window keeps the list inside it and scrolls within", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 420 });
  await page.goto(john);
  await page.locator(button).click();
  await expect(page.locator(list)).toBeVisible();
  await page.waitForTimeout(400);
  const box = (await page.locator(list).boundingBox())!;
  expect(box.y + box.height).toBeLessThanOrEqual(420);
  const scrolls = await page.locator(list).evaluate((el) => el.scrollHeight > el.clientHeight);
  expect(scrolls).toBe(true);
});

test("on a phone the strip holds only the picker and the list stays inside the screen", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(john);
  await expect(page.locator('main [role="group"][aria-label="Tamaño del texto"]')).toBeHidden();
  await expect(page.locator(button)).toBeVisible();
  await page.locator(button).click();
  await page.waitForTimeout(400);
  const box = (await page.locator(list).boundingBox())!;
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(390);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  const target = (await page.locator(option("BSB")).boundingBox())!;
  expect(target.height).toBeGreaterThanOrEqual(43);
});
