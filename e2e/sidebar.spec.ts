import { expect, test } from "@playwright/test";
import { traditionPath, trackElement } from "./helpers";

const branch = 'li[data-id="eucharist"]';
const twisty = `${branch} > [data-row] [data-twisty]`;
const list = `${branch} > ul`;

test("the sidebar is sticky, marks the current page and opens its ancestors", async ({ page }) => {
  await page.goto(traditionPath);
  const aside = page.locator("aside");
  await expect(aside).toHaveCSS("position", "sticky");
  await expect(page.locator("[aria-current=page]")).toHaveText("Católica");
  await expect(page.locator(twisty)).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(list)).toBeVisible();
  await expect(page.locator("aside nav")).toHaveAttribute("data-lenis-prevent", "true");
});

test("«Despliegue»: close and open animate and end in a consistent state", async ({ page }) => {
  await page.goto(traditionPath);
  const closing = trackElement(page, list, 450);
  await page.locator(twisty).click();
  const frames = await closing;
  expect(frames.some((frame) => frame.height > 0 && frame.height < Math.max(...frames.map((f) => f.height)))).toBe(
    true,
  );
  await expect(page.locator(list)).toBeHidden();
  await expect(page.locator(twisty)).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator(twisty)).toHaveAttribute("aria-label", "Expandir La Eucaristía");
  await page.locator(twisty).click();
  await expect(page.locator(list)).toBeVisible();
  await expect(page.locator(list)).toHaveAttribute("data-open", "true");
  await expect.poll(() => page.locator(list).evaluate((element) => (element as HTMLElement).style.overflow)).toBe("");
});

test("21 quick toggles leave the branch open and every state in agreement", async ({ page }) => {
  await page.goto(traditionPath);
  for (let index = 0; index < 21; index += 1) {
    await page.locator(twisty).click();
    await page.waitForTimeout(index % 3 === 0 ? 10 : 40);
  }
  await page.waitForTimeout(500);
  await expect(page.locator(twisty)).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator(list)).toBeHidden();
  expect(await page.locator(list).evaluate((element) => element.getAnimations({ subtree: true }).length)).toBe(0);
});

test("a parent without a page of its own toggles from its label", async ({ page }) => {
  await page.goto(traditionPath);
  await page.locator(`${branch} > [data-row] [data-label-toggle]`).click();
  await expect(page.locator(list)).toBeHidden();
});

test("«Contraer todo menos dónde estoy» keeps the ancestors of the current page", async ({ page }) => {
  await page.goto(traditionPath);
  await page.locator("[data-collapse-all]").click();
  await page.waitForTimeout(400);
  await expect(page.locator(list)).toBeVisible();
});

test.describe("drawer", () => {
  test.use({ viewport: { width: 390, height: 780 } });

  test("closed, it cannot be reached with the keyboard", async ({ page }) => {
    await page.goto(traditionPath);
    await expect(page.locator("aside")).toHaveCSS("visibility", "hidden");
    await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
    for (let index = 0; index < 8; index += 1) {
      await page.keyboard.press("Tab");
      expect(await page.evaluate(() => Boolean(document.activeElement?.closest("aside")))).toBe(false);
    }
  });

  test("it slides with a translate transition, not at once", async ({ page }) => {
    await page.goto(traditionPath);
    const transitions = await page.evaluate(
      () =>
        new Promise<string[]>((resolve) => {
          (document.querySelector("header button[aria-controls]") as HTMLElement).click();
          requestAnimationFrame(() =>
            requestAnimationFrame(() =>
              resolve(
                document
                  .querySelector("aside")!
                  .getAnimations()
                  .map((animation) => (animation as CSSTransition).transitionProperty),
              ),
            ),
          );
        }),
    );
    expect(transitions).toContain("translate");
    await page.waitForTimeout(350);
    expect((await trackElement(page, "aside", 50)).at(-1)?.left).toBe(0);
  });

  test("Esc, the scrim and a link close it; focus goes back to the menu button", async ({ page }) => {
    await page.goto(traditionPath);
    const menu = page.locator("header button[aria-controls]");
    await menu.click();
    await expect(page.locator("aside")).toHaveAttribute("data-open", "true");
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(page.locator("aside")).not.toHaveAttribute("data-open", "true");
    await expect(menu).toBeFocused();
    await menu.click();
    await page.mouse.click(370, 400);
    await expect(page.locator("aside")).not.toHaveAttribute("data-open", "true");
  });

  test("Tab stays inside the open drawer", async ({ page, browserName }) => {
    test.skip(browserName === "webkit", "WebKit does not Tab to buttons by default");
    await page.goto(traditionPath);
    await page.locator("header button[aria-controls]").click();
    for (let index = 0; index < 8; index += 1) {
      await page.keyboard.press("Tab");
      expect(await page.evaluate(() => Boolean(document.activeElement?.closest("aside")))).toBe(true);
    }
  });

  test("growing to desktop closes it and shrinking back finds it closed", async ({ page }) => {
    await page.goto(traditionPath);
    await page.locator("header button[aria-controls]").click();
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.locator("aside")).toHaveCSS("position", "sticky");
    await page.setViewportSize({ width: 390, height: 780 });
    await expect(page.locator("aside")).not.toHaveAttribute("data-open", "true");
  });
});
