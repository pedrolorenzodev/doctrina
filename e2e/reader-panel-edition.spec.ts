import { expect, test, type Page } from "@playwright/test";

const john = "/es/biblia/juan/6";
const panel = 'aside[data-side-panel]:has([data-flip-block="sections-strip"])';
const strip = `${panel} [data-flip-block="sections-strip"]`;
const body = `${panel} [data-flip-block="sections-body"]`;
const picker = 'main [data-reader-strip] button[aria-haspopup="listbox"]';
const option = (abbreviation: string) =>
  `main [data-reader-strip] [role="listbox"] [role="option"]:has-text("(${abbreviation})")`;
const tab = (page: Page, name: RegExp) => page.locator(strip).getByRole("button", { name });

async function openVerse(page: Page, path: string, verse = 53, width = 1440) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(path);
  await page.locator(`#v-${verse} [role=button]`).first().click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(500);
}

async function chooseEdition(page: Page, abbreviation: string) {
  await page.locator(picker).click();
  await page.locator(option(abbreviation)).click();
  await page.waitForTimeout(700);
}

async function indicatorOverTab(page: Page, label: RegExp) {
  return page.evaluate(
    ([selector, source]) => {
      const group = document.querySelector(selector as string)!;
      const indicator = group.querySelector<HTMLElement>("[data-slide-indicator]");
      const button = [...group.querySelectorAll("button")].find((candidate) =>
        new RegExp(source as string).test(candidate.textContent ?? ""),
      );
      if (!indicator || !button) return null;
      const a = indicator.getBoundingClientRect();
      const b = button.getBoundingClientRect();
      return { dx: Math.abs(a.left - b.left), dw: Math.abs(a.width - b.width) };
    },
    [strip, label.source] as const,
  );
}

for (const [locale, path, words, uses] of [
  ["es", john, /^Palabras/, /^Usos/],
  ["en", "/en/bible/john/6", /^Words/, null],
] as const) {
  test.describe(`${locale}: changing the edition with the panel open`, () => {
    for (const [name, label] of [["Palabras", words], ...(uses ? [["Usos", uses] as const] : [])] as const) {
      test(`${name} stays selected, the indicator sits on it and the body explains the numbering`, async ({ page }) => {
        await openVerse(page, path);
        await tab(page, label).click();
        await page.waitForTimeout(700);
        await expect(tab(page, label)).toHaveAttribute("aria-pressed", "true");
        await chooseEdition(page, "DRA");
        await expect(tab(page, label)).toHaveAttribute("aria-pressed", "true");
        await expect(page.locator(strip).locator('button[aria-pressed="true"]')).toHaveCount(1);
        const box = await indicatorOverTab(page, label);
        expect(box).not.toBeNull();
        expect(box!.dx).toBeLessThan(1);
        expect(box!.dw).toBeLessThan(1);
        await expect(page.locator(body).locator("[data-numbering-note]")).toBeVisible();
        await expect(page.locator(body).locator("[lang=grc]")).toHaveCount(0);
      });
    }

    test("going back to the default edition restores the words", async ({ page }) => {
      await openVerse(page, path);
      await tab(page, words).click();
      await page.waitForTimeout(700);
      await chooseEdition(page, "DRA");
      await chooseEdition(page, "RV1909");
      await expect(tab(page, words)).toHaveAttribute("aria-pressed", "true");
      await expect(page.locator(body).locator("[lang=grc]").first()).toBeVisible();
      await expect(page.locator(body).locator("[data-numbering-note]")).toHaveCount(0);
    });
  });
}

test("changing the edition with the panel closed, then opening a verse, shows the note under the selected tab", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await chooseEdition(page, "DRA");
  await page.locator("#v-53 [role=button]").first().click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(500);
  await expect(page.locator(strip).locator('button[aria-pressed="true"]')).toHaveCount(1);
  const box = await indicatorOverTab(page, /^(Palabras|Words|Usos|Uses)/);
  expect(box).not.toBeNull();
});

test("the tab indicator never moves or disappears while the edition changes", async ({ page }) => {
  await openVerse(page, john);
  await tab(page, /^Palabras/).click();
  await page.waitForTimeout(700);
  const sampling = page.evaluate(
    (selector) =>
      new Promise<{ present: boolean; left: number }[]>((resolve) => {
        const frames: { present: boolean; left: number }[] = [];
        const start = performance.now();
        const tick = () => {
          const indicator = document.querySelector<HTMLElement>(`${selector} [data-slide-indicator]`);
          frames.push({ present: indicator !== null, left: indicator?.getBoundingClientRect().left ?? 0 });
          if (performance.now() - start < 1200) requestAnimationFrame(tick);
          else resolve(frames);
        };
        tick();
      }),
    strip,
  );
  await chooseEdition(page, "DRA");
  const frames = await sampling;
  expect(frames.length).toBeGreaterThan(30);
  expect(frames.every((frame) => frame.present)).toBe(true);
  const lefts = frames.map((frame) => frame.left);
  expect(Math.max(...lefts) - Math.min(...lefts)).toBeLessThan(1);
});
