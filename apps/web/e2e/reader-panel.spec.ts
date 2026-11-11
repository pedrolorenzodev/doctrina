import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, trackElement } from "./helpers";

const john = "/es/biblia/juan/6";
const panel = 'aside[data-side-panel][aria-label="Detalle del versículo"]';
const verseButton = (n: number) => `#v-${n} [role=button]`;
const reference = `${panel} > div:first-of-type span`;

const readClipboard = (page: Page) => page.evaluate(() => navigator.clipboard.readText());

test.describe("panel", () => {
  test.use({ permissions: ["clipboard-read", "clipboard-write"] });

  test("tapping a verse opens the panel with its reference and makes room; the verse is marked", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await expect(page.locator(panel)).toHaveAttribute("data-open", "false");
    const before = await page.locator("#content").evaluate((el) => parseFloat(getComputedStyle(el).paddingRight));
    await page.locator(verseButton(53)).click();
    await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
    await expect(page.locator(panel)).toBeVisible();
    await expect(page.locator(reference)).toHaveText(/Juan\s6:53/);
    await expect(page.locator(verseButton(53))).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(`${verseButton(53)}[aria-pressed=true]`)).toHaveCount(1);
    await expect
      .poll(() => page.locator("#content").evaluate((el) => parseFloat(getComputedStyle(el).paddingRight)))
      .toBeGreaterThan(before + 200);
    await expect(page.locator(panel).getByRole("button", { name: "Ver el detalle completo" })).toBeVisible();
  });

  test("another verse retargets the panel; the same verse closes it", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await page.locator(verseButton(53)).click();
    await page.locator(verseButton(54)).click();
    await expect(page.locator(reference)).toHaveText(/Juan\s6:54/);
    await expect(page.locator(verseButton(53))).toHaveAttribute("aria-pressed", "false");
    await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
    await page.locator(verseButton(54)).click();
    await expect(page.locator(panel)).toHaveAttribute("data-open", "false");
  });

  test("«Citar» copies the short citation and «Copiar enlace» the verse link; each says so for a moment", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await page.locator(verseButton(53)).click();
    const cite = page.locator(panel).getByRole("button", { name: "Citar", exact: true });
    await page.waitForTimeout(450);
    await cite.click();
    expect((await readClipboard(page)).replace(/ /g, " ")).toBe("Juan 6:53 (RV1909)");
    await expect(page.locator(panel).getByRole("button", { name: "Cita copiada" })).toBeVisible();
    await expect(cite).toBeVisible({ timeout: 3000 });
    const link = page.locator(panel).getByRole("button", { name: "Copiar enlace" });
    await link.click();
    expect(await readClipboard(page)).toMatch(/\/es\/biblia\/juan\/6#v-53$/);
    await expect(page.locator(panel).getByRole("button", { name: "Enlace copiado" })).toBeVisible();
    await expect(link).toBeVisible({ timeout: 3000 });
  });

  test("the citation follows the chosen translation; a verse the translation lacks closes the panel", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/es/biblia/juan/5");
    await page.locator(verseButton(4)).click();
    await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
    await page.locator('[data-reader-strip] button[aria-haspopup="listbox"]').click();
    await page.locator('[data-reader-strip] [role=option]:has-text("(BSB)")').click();
    await expect(page.locator("#v-4")).toHaveCount(0);
    await expect(page.locator(panel)).toHaveAttribute("data-open", "false");
    await page.locator(verseButton(5)).click();
    await page.locator(panel).getByRole("button", { name: "Citar", exact: true }).click();
    expect((await readClipboard(page)).replace(/ /g, " ")).toBe("Juan 5:5 (BSB)");
  });
});

test("Esc and the close button close the panel and give the focus back to the verse", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator(verseButton(53)).click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await page.keyboard.press("Escape");
  await expect(page.locator(panel)).toHaveAttribute("data-open", "false");
  await expect(page.locator(verseButton(53))).toBeFocused();
  await page.locator(verseButton(53)).click();
  await page.locator(panel).getByRole("button", { name: "Cerrar" }).click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "false");
  await expect(page.locator(verseButton(53))).toBeFocused();
});

test("with the keyboard Enter and Space open the panel and move the focus into it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator(verseButton(20)).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await expect(page.locator(panel)).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.locator(verseButton(20))).toBeFocused();
  await page.keyboard.press("Space");
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await expect(page.locator(reference)).toHaveText(/Juan\s6:20/);
});

test("a tap with text selected opens nothing", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.evaluate(() => {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector("#v-10 [role=button]")!);
    getSelection()!.removeAllRanges();
    getSelection()!.addRange(range);
  });
  await page.locator(verseButton(11)).dispatchEvent("click");
  await expect(page.locator(panel)).toHaveAttribute("data-open", "false");
});

test("below 1280 px the panel is a half sheet and the text keeps its width", async ({ page }) => {
  for (const width of [1100, 768, 390]) {
    await page.setViewportSize({ width, height: 800 });
    await page.goto(john);
    const widthBefore = (await page.locator("#v-1").boundingBox())!.width;
    await page.locator(verseButton(53)).click();
    await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
    await page.waitForTimeout(500);
    const box = (await page.locator(panel).boundingBox())!;
    expect(Math.round(box.y + box.height)).toBe(800);
    expect(Math.abs(box.height - 0.52 * 800)).toBeLessThan(6);
    expect(Math.abs((await page.locator("#v-1").boundingBox())!.width - widthBefore)).toBeLessThan(2);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  }
});

test("on a phone the verse tapped is scrolled above the sheet", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(john);
  await page.evaluate(() => {
    const top = document.getElementById("v-30")!.getBoundingClientRect().top;
    scrollBy(0, top - 600);
  });
  await page.waitForTimeout(300);
  const text = (await page.locator(verseButton(30)).boundingBox())!;
  await page.mouse.click(text.x + 40, text.y + 10);
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(1100);
  const rect = (await page.locator("#v-30").boundingBox())!;
  const sheet = (await page.locator(panel).boundingBox())!;
  expect(rect.y + rect.height).toBeLessThanOrEqual(sheet.y);
  expect(rect.y).toBeGreaterThanOrEqual(120);
});

const monotonic = (values: number[], direction: 1 | -1, epsilon: number) =>
  values.every((value, index) => index === 0 || (value - (values[index - 1] ?? value)) * direction >= -epsilon);

test("the column keeps its width at 1280 and the panel stays a column there", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(john);
  await page.locator(verseButton(53)).click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(400);
  const box = (await page.locator(panel).boundingBox())!;
  expect(box.x + box.width).toBe(1280);
  expect(box.height).toBeGreaterThan(700);
  expect((await page.locator("#v-1").boundingBox())!.width).toBeGreaterThan(450);
});

test("the panel opens in about 200 ms: opacity rises and it slides in, with no stall; reduced motion is instant", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  const target = page.locator(verseButton(53));
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
  const began = sampled.find((frame) => frame.opacity > 0.01)!.t;
  const done = sampled.slice(1).find((frame) => frame.opacity >= 0.99)!.t;
  expect(done - began).toBeGreaterThan(100);
  expect(done - began).toBeLessThan(340);
  expect(Math.max(...sampled.slice(1).map((frame, index) => frame.t - sampled[index]!.t))).toBeLessThan(120);
});

test("under reduced motion the panel is there at once", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  const target = page.locator(verseButton(53));
  await target.hover();
  const frames = trackElement(page, panel, 400);
  await target.click();
  const sampled = await frames;
  expect(sampled.filter((frame) => frame.opacity > 0.01 && frame.opacity < 0.99)).toHaveLength(0);
});
