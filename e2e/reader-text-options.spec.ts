import { expect, test } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const john = "/es/biblia/juan/6";
const strip = "main [data-reader-strip]";
const aa = `${strip} button[aria-haspopup="dialog"]:has-text("Texto")`;
const menu = `${strip} [role="dialog"][aria-label="Texto"]`;
const format = (name: string) => `${menu} button:has-text("${name}")`;

test("«Aa» opens a menu hanging from the header with the size and the format; Esc closes it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await expect(page.locator(menu)).toBeHidden();
  await page.locator(aa).click();
  await expect(page.locator(menu)).toBeVisible();
  await expect(page.locator(aa)).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(menu)).toContainText("Tamaño del texto");
  await expect(page.locator(menu)).toContainText("Formato");
  await expect(page.locator(format("Un versículo por línea"))).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(format("En párrafo"))).toHaveAttribute("aria-pressed", "false");
  await page.waitForTimeout(350);
  const gap = await page.evaluate(
    () =>
      document.querySelector('main [data-reader-strip] [role="dialog"][aria-label="Texto"]')!.getBoundingClientRect()
        .top - document.querySelector("main [data-reader-strip]")!.getBoundingClientRect().bottom,
  );
  expect(Math.abs(gap)).toBeLessThanOrEqual(0.5);
  const box = (await page.locator(format("Un versículo por línea")).boundingBox())!;
  expect(box.height).toBeLessThan(40);
  await page.keyboard.press("Escape");
  await expect(page.locator(menu)).toBeHidden();
  await expect(page.locator(aa)).toBeFocused();
});

test("A+ changes the size and the menu stays open", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator(aa).click();
  await page.locator(`${menu} button[aria-label="Agrandar el texto"]`).click();
  expect(await page.locator("#v-1").evaluate((el) => getComputedStyle(el).fontSize)).toBe("21px");
  await expect(page.locator(menu)).toBeVisible();
});

test("«En párrafo» runs the verses together with small numbers and comes back; it is remembered before paint", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  const display = (n: number) => page.locator(`#v-${n}`).evaluate((el) => getComputedStyle(el).display);
  expect(await display(1)).toBe("block");
  await page.locator(aa).click();
  await page.locator(format("En párrafo")).click();
  await expect(page.locator(format("En párrafo"))).toHaveAttribute("aria-pressed", "true");
  expect(await page.evaluate(() => document.documentElement.dataset.readerFormat)).toBe("flow");
  expect(await display(1)).toBe("inline");
  expect(await display(2)).toBe("inline");
  const one = (await page.locator("#v-1").boundingBox())!;
  const two = (await page.locator("#v-2").boundingBox())!;
  const lineHeight = await page.locator("#v-1").evaluate((el) => Number.parseFloat(getComputedStyle(el).lineHeight));
  expect(two.y - one.y).toBeLessThan(lineHeight * 3);
  const number = await page
    .locator("#v-3 > span > span")
    .first()
    .evaluate((el) => {
      const css = getComputedStyle(el);
      return { position: css.position, align: css.verticalAlign, size: Number.parseFloat(css.fontSize) };
    });
  expect(number.position).toBe("static");
  expect(number.align).toBe("super");
  expect(number.size).toBeLessThan(14);
  expect(await page.evaluate(() => localStorage.getItem("doctrina-reader-format"))).toBe("flow");
  await page.reload({ waitUntil: "domcontentloaded" });
  expect(await page.evaluate(() => document.documentElement.dataset.readerFormat)).toBe("flow");
  await page.goto("/es/biblia/juan/7");
  expect(await page.evaluate(() => document.documentElement.dataset.readerFormat)).toBe("flow");
  await page.locator(aa).click();
  await page.locator(format("Un versículo por línea")).click();
  expect(await page.evaluate(() => document.documentElement.dataset.readerFormat)).toBeUndefined();
  expect(await display(1)).toBe("block");
});

test("in paragraph format a verse can still be opened and highlighted", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.addInitScript(() => localStorage.setItem("doctrina-reader-format", "flow"));
  await page.goto(john);
  await page.locator("#v-53 [role=button]").click();
  await expect(page.locator('aside[data-side-panel][aria-label="Detalle del versículo"]')).toHaveAttribute(
    "data-open",
    "true",
  );
  await page.locator('aside[data-side-panel] button[aria-label="Subrayar en verde"]').click();
  await expect(page.locator("#v-53 mark")).toHaveCount(1);
});

test("a stored format that is not one of the two is ignored", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("doctrina-reader-format", "poetry"));
  await page.goto(john);
  expect(await page.evaluate(() => document.documentElement.dataset.readerFormat)).toBeUndefined();
});

test.describe("phone", () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

  test("the menu fits the screen and the buttons are touch targets", async ({ page }) => {
    await page.goto(john);
    await page.locator(aa).tap();
    await expect(page.locator(menu)).toBeVisible();
    await page.waitForTimeout(350);
    const box = (await page.locator(menu).boundingBox())!;
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(390);
    const target = (await page.locator(format("En párrafo")).boundingBox())!;
    expect(target.height).toBeGreaterThanOrEqual(43);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });
});
