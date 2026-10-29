import { expect, test } from "@playwright/test";
import { horizontalOverflow, landingTop, traditionPath } from "./helpers";

const crumbs = 'main nav[aria-label="Ruta"]';
const switcher = 'main nav[aria-label="Tradición"]';

test("crumbs: Doctrinas (inert) / La Eucaristía (a link) / Católica, the last one current", async ({ page }) => {
  await page.goto(traditionPath);
  await expect(page.locator(`${crumbs} > span.text-ink-3`)).toHaveText(["Doctrinas"]);
  await expect(page.locator(`${crumbs} [aria-current=page]`)).toHaveText("Católica");
  const url = page.url();
  const inert = page.locator(`${crumbs} > span.text-ink-3`).first();
  await inert.hover();
  await expect(inert).toHaveCSS("text-decoration-line", "none");
  await expect(inert).toHaveCSS("cursor", "auto");
  await inert.click();
  expect(page.url()).toBe(url);
});

test("switcher: six tabs in the fixed order, Católica current, the others inert", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await expect(page.locator(`${switcher} li button`)).toHaveText([
    "Católica",
    "Ortodoxa",
    "Luterana",
    "Reformada",
    "Bautista",
    "Pentecostal",
  ]);
  await expect(page.locator(`${switcher} [aria-current=page]`)).toHaveText("Católica");
  const url = page.url();
  await page.locator(`${switcher} li button`, { hasText: "Luterana" }).click({ force: true });
  expect(page.url()).toBe(url);
  await expect(page.locator(`${switcher} [aria-current=page]`)).toHaveText("Católica");
});

test("switcher: marking a tab does not move the others", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const widths = await page.evaluate(() =>
    [...document.querySelectorAll('main nav[aria-label="Tradición"] li button')].map((tab) => {
      const bold = getComputedStyle(tab, "::after");
      return { width: tab.getBoundingClientRect().width, reserved: bold.fontWeight };
    }),
  );
  expect(widths.every((tab) => tab.reserved === "500")).toBe(true);
});

test("switcher: sticky under the bar, hairline only once stuck, scroll offset follows its height", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const bar = page.locator(switcher);
  await expect(bar).toHaveCSS("position", "sticky");
  await expect(bar).toHaveCSS("border-bottom-color", "rgba(0, 0, 0, 0)");
  const height = await bar.evaluate((element) => element.getBoundingClientRect().height);
  expect(await landingTop(page)).toBe(56 + Math.round(height) + 20);
  await page.evaluate(() => scrollTo(0, 1200));
  await page.waitForTimeout(600);
  expect(Math.round(await bar.evaluate((element) => element.getBoundingClientRect().top))).toBe(56);
  await expect(bar).not.toHaveCSS("border-bottom-color", "rgba(0, 0, 0, 0)");
  await page.evaluate(() => scrollTo(0, 0));
  await page.waitForTimeout(600);
  await expect(bar).toHaveCSS("border-bottom-color", "rgba(0, 0, 0, 0)");
});

test("switcher: the label hides under 640 px and the hint under 768 px", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await expect(page.locator(`${switcher} > span`).first()).toBeVisible();
  await expect(page.locator(`${switcher} > span`).last()).toBeVisible();
  await page.setViewportSize({ width: 700, height: 900 });
  await expect(page.locator(`${switcher} > span`).last()).toBeHidden();
  await expect(page.locator(`${switcher} > span`).first()).toBeVisible();
  await page.setViewportSize({ width: 600, height: 900 });
  await expect(page.locator(`${switcher} > span`).first()).toBeHidden();
});

test("switcher: on a phone the strip scrolls sideways with a fade that goes away at the end", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto(traditionPath);
  const strip = page.locator(`${switcher} ul`);
  await expect(strip).toHaveAttribute("data-fade", "");
  await expect(strip).toHaveAttribute("data-lenis-prevent", "true");
  await strip.evaluate((element) => element.scrollTo(element.scrollWidth, 0));
  await page.waitForTimeout(300);
  await expect(strip).not.toHaveAttribute("data-fade", "");
  expect(await horizontalOverflow(page)).toBe(0);
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: crumbs and switcher cause no horizontal overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(traditionPath);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("switcher: tabs are centred on both axes", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const offsets = await page.evaluate(() => {
    const tab = document.querySelector('main nav[aria-label="Tradición"] li button')!;
    const range = document.createRange();
    range.selectNodeContents(tab);
    const text = range.getBoundingClientRect();
    const box = tab.getBoundingClientRect();
    return { x: text.left - box.left - (box.right - text.right), y: text.top - box.top - (box.bottom - text.bottom) };
  });
  expect(Math.abs(offsets.x)).toBeLessThan(2);
  expect(Math.abs(offsets.y)).toBeLessThan(2);
});

test("switcher: the hint gives way when the six tabs would not fit", async ({ page }) => {
  for (const [width, hintVisible] of [
    [1440, true],
    [1024, false],
    [800, false],
  ] as const) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(traditionPath);
    await page.waitForTimeout(300);
    const hint = page.locator(`${switcher} > span`).last();
    if (hintVisible) await expect(hint).toBeVisible();
    else await expect(hint).toBeHidden();
    if (width === 1440) {
      const reach = await page.evaluate(() => {
        const strip = document.querySelector('main nav[aria-label="Tradición"] ul')!;
        return strip.scrollWidth - strip.clientWidth;
      });
      expect(reach).toBeLessThanOrEqual(2);
    }
  }
});

test("the doctrine's name in the lede takes the source colour at weight 400, in both themes", async ({ browser }) => {
  for (const [scheme, colour] of [
    ["light", "rgb(95, 61, 12)"],
    ["dark", "rgb(214, 168, 101)"],
  ] as const) {
    const context = await browser.newContext({ colorScheme: scheme, viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.goto(traditionPath);
    const term = page.locator("main header p span");
    await expect(term).toHaveText("Eucaristía");
    await expect(term).toHaveCSS("color", colour);
    await expect(term).toHaveCSS("font-weight", "400");
    await expect(page.locator("main header p")).toHaveCSS("font-weight", "300");
    await context.close();
  }
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("/es/doctrinas/bautismo/catolica");
  await expect(page.locator("main header p span")).toHaveText("bautismo");
  await page.close();
});
