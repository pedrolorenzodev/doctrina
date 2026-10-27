import { expect, test } from "@playwright/test";

const john = "/es/biblia/juan/6";
const didache = "/es/historia/obras/didache";
const strip = "main [data-reader-strip]";
const toggle = `${strip} [data-tree-toggle]`;

const geometry = (page: import("@playwright/test").Page) =>
  page.evaluate(() => {
    const holder = document.querySelector("main [data-reader-strip]")!;
    const bar = holder.firstElementChild!.firstElementChild as HTMLElement;
    const rect = holder.getBoundingClientRect();
    return { top: rect.top, height: rect.height, left: rect.left, right: rect.right, barHeight: bar.offsetHeight };
  });

test("the strip has the same place and height at the top of the page and when it comes back after scrolling", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  const first = await geometry(page);
  expect(first.top).toBe(56);
  expect(first.height).toBe(51);
  await page.mouse.move(700, 500);
  await page.mouse.wheel(0, 900);
  await page.waitForTimeout(600);
  await page.mouse.wheel(0, -80);
  await page.waitForTimeout(700);
  const back = await geometry(page);
  expect(back).toEqual(first);
});

test("the strip's bottom border is a sharp 1 px line, and the texture does not cover it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  const bar = await page.evaluate(() => {
    const element = document.querySelector("main [data-reader-strip]")!.firstElementChild!;
    const style = getComputedStyle(element);
    const after = getComputedStyle(element, "::after");
    return {
      border: style.borderBottomWidth,
      colour: style.borderBottomColor,
      position: style.position,
      afterPosition: after.position,
    };
  });
  expect(bar.border).toBe("1px");
  expect(bar.colour).not.toBe("rgba(0, 0, 0, 0)");
  expect(bar.position).toBe("relative");
  expect(bar.afterPosition).toBe("absolute");
});

test("«Aa» sits close to the right edge, as far from it as the strip's own padding, and the strip spans the whole main area", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  const aa = (await page.locator(strip).getByRole("button", { name: "Texto", exact: true }).boundingBox())!;
  expect(1440 - (aa.x + aa.width)).toBeLessThanOrEqual(24);
  const bar = await geometry(page);
  expect(bar.left).toBe(272);
  expect(bar.right).toBe(1440);
});

test("the toggle at the left of the strip hides and shows the tree, and the choice is remembered", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await expect(page.locator("aside#site-sidebar")).toBeVisible();
  await expect(page.locator(toggle)).toHaveAttribute("aria-pressed", "true");
  const before = (await page.locator("main").boundingBox())!;
  expect(before.x).toBe(272);
  await page.locator(toggle).click();
  await expect(page.locator("aside#site-sidebar")).toBeHidden();
  await expect(page.locator(toggle)).toHaveAttribute("aria-pressed", "false");
  const after = (await page.locator("main").boundingBox())!;
  expect(after.x).toBe(0);
  expect((await geometry(page)).left).toBe(0);
  await page.reload();
  await expect(page.locator("aside#site-sidebar")).toBeHidden();
  await expect(page.locator(toggle)).toHaveAttribute("aria-pressed", "false");
  await page.locator(toggle).click();
  await expect(page.locator("aside#site-sidebar")).toBeVisible();
  await page.reload();
  await expect(page.locator("aside#site-sidebar")).toBeVisible();
});

test("below 1024 px the toggle opens the drawer instead", async ({ page }) => {
  await page.setViewportSize({ width: 800, height: 900 });
  await page.goto(john);
  await expect(page.locator("aside#site-sidebar")).toBeHidden();
  await page.locator(toggle).click();
  await expect(page.locator("aside#site-sidebar")).toBeVisible();
  await expect(page.locator(toggle)).toHaveAttribute("aria-pressed", "true");
});

test("the Fathers' reader has the same strip and the same toggle", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(didache);
  const bar = await geometry(page);
  expect(bar.top).toBe(56);
  expect(bar.height).toBe(51);
  await page.locator(toggle).click();
  await expect(page.locator("aside#site-sidebar")).toBeHidden();
  await page.locator(toggle).click();
});

test("choosing an item with the mouse does not keep the strip in view: it hides on the next scroll down", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator(`${strip} button[aria-haspopup="listbox"]`).click();
  await page.locator(`${strip} [role="option"]`).nth(1).click();
  await expect(page.locator(`${strip} [role="listbox"]`)).toBeHidden();
  await page.evaluate(() => scrollTo(0, 600));
  for (let at = 0; at < 30; at += 1) {
    await page.evaluate(() => scrollBy(0, 4));
    await page.waitForTimeout(14);
  }
  await expect(page.locator(strip)).toHaveAttribute("data-hidden", "");
});

test("keyboard focus inside the strip still keeps it in view", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.evaluate(() => scrollTo(0, 600));
  await page.waitForTimeout(300);
  await page.keyboard.press("Shift");
  await page.locator(`${strip} [data-step="next"]:visible`).focus();
  await expect(page.locator(`${strip} :focus-visible`)).toHaveCount(1);
  for (let at = 0; at < 30; at += 1) {
    await page.evaluate(() => scrollBy(0, 4));
    await page.waitForTimeout(14);
  }
  await expect(page.locator(strip)).not.toHaveAttribute("data-hidden", "");
});

test("the tree's content is visible during the whole slide, when it opens and when it closes", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.addInitScript(() => localStorage.setItem("doctrina-tree", "closed"));
  await page.goto(john);
  const visibility = () => page.locator("aside#site-sidebar").evaluate((el) => getComputedStyle(el).visibility);
  expect(await visibility()).toBe("hidden");
  await page.locator(toggle).click();
  await page.waitForTimeout(120);
  expect(await visibility()).toBe("visible");
  await page.waitForTimeout(500);
  await page.locator(toggle).click();
  await page.waitForTimeout(200);
  expect(await visibility()).toBe("visible");
  await page.waitForTimeout(500);
  expect(await visibility()).toBe("hidden");
});
