import { expect, test, type Page } from "@playwright/test";
import { landingTop, traditionPath, trackElement } from "./helpers";

const dialog = "[role=dialog]";
const links = "#QE-1 [aria-haspopup]";

async function open(page: Page, width = 1440, height = 900) {
  await page.setViewportSize({ width, height });
  await page.goto(traditionPath);
  await page.waitForTimeout(300);
}

const state = (page: Page) =>
  page.evaluate((selector) => {
    const panel = document.querySelector(selector) as HTMLElement;
    const rect = panel.getBoundingClientRect();
    return {
      open: panel.dataset.open ?? null,
      x: Math.round(rect.left),
      y: Math.round(rect.top),
      width: Math.round(rect.width),
      height: Math.round(rect.height),
    };
  }, dialog);

test.describe("desktop", () => {
  test.use({ permissions: ["clipboard-read", "clipboard-write"] });

  test("the first opening animates, lands at the right and takes focus", async ({ page }) => {
    await open(page);
    const transitions = await page.evaluate(
      ([link, selector]) =>
        new Promise<string[]>((resolve) => {
          (document.querySelectorAll(link as string)[1] as HTMLElement).click();
          requestAnimationFrame(() =>
            requestAnimationFrame(() =>
              resolve(
                document
                  .querySelector(selector as string)!
                  .getAnimations()
                  .map((animation) => (animation as CSSTransition).transitionProperty),
              ),
            ),
          );
        }),
      [links, dialog] as const,
    );
    expect(transitions).toContain("opacity");
    expect(transitions).toContain("translate");
    await page.waitForTimeout(350);
    const panel = await state(page);
    expect(panel).toMatchObject({ open: "true", x: 928, y: (await landingTop(page)) + 40, width: 400 });
    await expect(page.locator(dialog)).toBeFocused();
    await expect(page.locator(dialog)).toHaveAttribute("aria-modal", "false");
    await expect(page.locator("#citation-window-kind")).toHaveText("Cita");
    await expect(page.locator(links).nth(1)).toHaveAttribute("aria-expanded", "true");
  });

  test("another link swaps the content, the same link closes, Esc closes; focus returns to the trigger", async ({
    page,
  }) => {
    await open(page);
    await page.locator(links).nth(1).click();
    await page.locator(links).nth(2).click();
    await expect(page.locator(links).nth(1)).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator(links).nth(2)).toHaveAttribute("aria-expanded", "true");
    expect((await state(page)).x).toBe(928);
    await page.locator(links).nth(2).click();
    await expect(page.locator(dialog)).not.toHaveAttribute("data-open", "true");
    await page.locator(links).nth(1).click();
    await page.keyboard.press("Escape");
    await expect(page.locator(dialog)).not.toHaveAttribute("data-open", "true");
    await expect(page.locator(links).nth(1)).toBeFocused();
  });

  test("dragging by the header clamps at the edges, is remembered, and the close button does not drag", async ({
    page,
  }) => {
    await open(page);
    await page.locator(links).nth(1).click();
    await page.waitForTimeout(300);
    const header = (await page.locator(`${dialog} > div`).first().boundingBox())!;
    await page.mouse.move(header.x + 100, header.y + 20);
    await page.mouse.down();
    await page.mouse.move(-500, -500, { steps: 4 });
    await page.mouse.up();
    expect(await state(page)).toMatchObject({ x: 8, y: 8 });
    const moved = (await page.locator(`${dialog} > div`).first().boundingBox())!;
    await page.mouse.move(moved.x + 100, moved.y + 20);
    await page.mouse.down();
    await page.mouse.move(3000, 3000, { steps: 4 });
    await page.mouse.up();
    expect(await state(page)).toMatchObject({ x: 1032, y: 772 });
    await page.keyboard.press("Escape");
    await page.locator(links).nth(2).click();
    await page.waitForTimeout(300);
    expect(await state(page)).toMatchObject({ x: 1032, y: 772 });
  });

  test("a smaller window clamps it and a bigger one gives its place back", async ({ page }) => {
    await open(page);
    await page.locator(links).nth(1).click();
    await page.waitForTimeout(300);
    await page.setViewportSize({ width: 700, height: 500 });
    await page.waitForTimeout(200);
    const small = await state(page);
    expect(small.x).toBeLessThanOrEqual(292);
    expect(small.y).toBeLessThanOrEqual(372);
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(200);
    expect((await state(page)).x).toBe(928);
  });

  test("copy writes the quotation and its reference, then says so for a moment", async ({ page }) => {
    await open(page);
    await page.locator(links).nth(1).click();
    await page.waitForTimeout(300);
    await page.getByRole("button", { name: "Copiar cita" }).click();
    const copied = await page.evaluate(() => navigator.clipboard.readText());
    expect(copied.startsWith("«")).toBe(true);
    expect(copied).toContain("Concilio de Trento, ses. XIII, cap. 1, 11 oct 1551");
    await expect(page.getByRole("button", { name: "Cita copiada" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Copiar cita" })).toBeVisible({ timeout: 3000 });
  });

  test("the three kinds: grade, citation, scripture", async ({ page }) => {
    await open(page);
    await page.locator(links).first().click();
    await expect(page.locator("#citation-window-kind")).toHaveText("Grado de autoridad");
    await expect(page.locator(`${dialog} h3`)).toHaveText("Dogma");
    await expect(page.getByRole("button", { name: "Copiar cita" })).toHaveCount(0);
    await page.keyboard.press("Escape");
    await page.locator("#teach button[aria-expanded]:not([aria-haspopup])").click();
    await page.waitForTimeout(900);
    await page.locator("#teach li [aria-haspopup]", { hasText: "Lucas" }).first().click();
    await expect(page.locator("#citation-window-kind")).toHaveText("Escritura");
    await expect(page.locator(dialog)).toContainText("Lucas 22:19");
  });

  test("the wheel over a long body scrolls the window and not the page", async ({ page }) => {
    await open(page, 1440, 480);
    await page.locator(links).nth(1).click();
    await page.waitForTimeout(400);
    const pageBefore = await page.evaluate(() => Math.round(scrollY));
    const body = (await page.locator(`${dialog} [data-lenis-prevent]`).boundingBox())!;
    await page.mouse.move(body.x + 100, body.y + 60);
    await page.mouse.wheel(0, 150);
    await page.waitForTimeout(500);
    expect(await page.evaluate(() => Math.round(scrollY))).toBe(pageBefore);
    expect(
      await page.locator(`${dialog} [data-lenis-prevent]`).evaluate((element) => element.scrollTop),
    ).toBeGreaterThan(0);
  });

  test("under reduced motion it appears at once", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.goto(traditionPath);
    const frames = trackElement(page, dialog, 150);
    await page.locator(links).nth(1).click();
    const sampled = await frames;
    expect(sampled.every((frame) => frame.opacity === 0 || frame.opacity === 1)).toBe(true);
    await context.close();
  });
});

test.describe("phone", () => {
  test.use({ hasTouch: true });

  test("a bottom sheet with a scrim: not draggable, closes with Esc and the scrim @webkit", async ({
    page,
    browserName,
  }) => {
    await open(page, 390, 780);
    const frames = trackElement(page, dialog, 500);
    await page.locator(links).nth(1).tap();
    const sampled = await frames;
    await page.waitForTimeout(350);
    if (browserName === "chromium") {
      expect(sampled.filter((frame) => frame.top > 266 && frame.top < 779).length).toBeGreaterThan(3);
    }
    const panel = await state(page);
    expect(panel).toMatchObject({ x: 0, width: 390 });
    expect(panel.y + panel.height).toBe(780);
    await expect(page.locator(dialog)).toHaveAttribute("aria-modal", "true");
    await page.keyboard.press("Escape");
    await expect(page.locator(dialog)).not.toHaveAttribute("data-open", "true");
    await page.locator(links).nth(1).tap();
    await page.waitForTimeout(350);
    await page.mouse.click(200, 60);
    await expect(page.locator(dialog)).not.toHaveAttribute("data-open", "true");
    if (browserName === "chromium") {
      await page.locator(links).nth(1).tap();
      await page.waitForTimeout(350);
      for (let index = 0; index < 6; index += 1) {
        await page.keyboard.press("Tab");
        expect(await page.evaluate(() => Boolean(document.activeElement?.closest("[role=dialog]")))).toBe(true);
      }
    }
  });
});

test("«Abrir la fuente completa» is in citation windows only and does nothing yet", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const url = page.url();
  await page.locator("#why p [aria-haspopup]", { hasText: "Catecismo 1336" }).click();
  const open = page.getByRole("dialog").getByRole("button", { name: "Abrir la fuente completa" });
  await expect(open).toBeVisible();
  await open.click();
  expect(page.url()).toBe(url);
  await expect(page.getByRole("dialog")).toHaveAttribute("data-open", "true");
  await page.keyboard.press("Escape");
  await page.locator("#why p [aria-haspopup]", { hasText: "Lucas 22:19" }).click();
  await expect(page.getByRole("dialog").getByRole("button", { name: "Abrir la fuente completa" })).toHaveCount(0);
});
