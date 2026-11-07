import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, preferEnglishFatherEdition, traditionPath } from "./helpers";

const smyrnaeans = "/es/historia/obras/ignatius-smyrnaeans";
const doctrinePath = "/es/doctrinas/eucaristia";
const storageKey = "doctrina-simplify";
const ring = "[data-simplifier-mark]";
const routeSwitch = (page: Page) => page.getByRole("switch", { name: "Simplificar párrafos" });

async function open(page: Page, path: string, width = 1440, height = 900) {
  await page.setViewportSize({ width, height });
  await page.goto(path, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  test.skip((await page.locator("[data-simplifier]").count()) === 0, "the simplifier switch is off in this build");
}

const ringOpacities = (page: Page) =>
  page.evaluate(
    (selector) =>
      [...document.querySelectorAll<HTMLElement>(selector)]
        .slice(0, 4)
        .map((element) => Number(getComputedStyle(element).opacity)),
    ring,
  );

const geometry = (page: Page) =>
  page.evaluate(() => {
    const first = document.querySelector("[data-simplifier]")!;
    const next = first.nextElementSibling ?? first.parentElement!.nextElementSibling!;
    return { top: first.getBoundingClientRect().top, next: next.getBoundingClientRect().top };
  });

test.describe("simplifier entry: the switch", () => {
  test("is off by default, and the route row carries the switch beside the breadcrumb", async ({ page }) => {
    await open(page, traditionPath);
    const toggle = routeSwitch(page);
    await expect(toggle).toHaveAttribute("aria-checked", "false");
    const rows = await page.evaluate(() => {
      const nav = document.querySelector("nav[aria-label]")!.getBoundingClientRect();
      const switchBox = document.querySelector("[role=switch]")!.getBoundingClientRect();
      return { navTop: nav.top, navBottom: nav.bottom, switchTop: switchBox.top, switchBottom: switchBox.bottom };
    });
    expect(rows.switchTop).toBeLessThan(rows.navBottom);
    expect(rows.switchBottom).toBeGreaterThan(rows.navTop);
    expect(await page.locator(ring).first().isVisible()).toBe(false);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });

  test("turning it on shows the rings for 2 s, then only on hover; nothing moves", async ({ page }) => {
    await open(page, traditionPath);
    const before = await geometry(page);
    await routeSwitch(page).click();
    await page.mouse.move(5, 5);
    await expect(routeSwitch(page)).toHaveAttribute("aria-checked", "true");
    await page.waitForTimeout(400);
    const during = await ringOpacities(page);
    expect(during.every((value) => value === 1)).toBe(true);
    expect(await geometry(page)).toEqual(before);
    await page.waitForTimeout(2400);
    const after = await ringOpacities(page);
    expect(after.every((value) => value === 0)).toBe(true);
    expect(await geometry(page)).toEqual(before);
    await page.locator("[data-simplifier]").first().hover();
    await page.waitForTimeout(300);
    expect(
      Number(
        await page
          .locator(ring)
          .first()
          .evaluate((element) => getComputedStyle(element).opacity),
      ),
    ).toBe(1);
  });

  test("the choice survives a reload, and every statement of the page gets a ring", async ({ page }) => {
    await open(page, traditionPath);
    await routeSwitch(page).click();
    await page.reload({ waitUntil: "networkidle" });
    await expect(routeSwitch(page)).toHaveAttribute("aria-checked", "true");
    expect(await page.evaluate((key) => localStorage.getItem(key), storageKey)).toBe("on");
    const statements = await page.locator("[data-simplifier]").count();
    expect(statements).toBeGreaterThan(5);
  });

  test("works from the keyboard", async ({ page }) => {
    await open(page, traditionPath);
    const toggle = routeSwitch(page);
    await toggle.focus();
    await page.keyboard.press("Space");
    await expect(toggle).toHaveAttribute("aria-checked", "true");
    await page.keyboard.press("Enter");
    await expect(toggle).toHaveAttribute("aria-checked", "false");
  });

  test("02 pages carry the switch and simplify their prose", async ({ page }) => {
    await open(page, doctrinePath);
    await expect(routeSwitch(page)).toBeVisible();
    expect(await page.locator("[data-simplifier]").count()).toBeGreaterThan(1);
  });

  test("on a phone the rings appear when the switch is on and the page does not overflow", async ({ page }) => {
    await open(page, traditionPath, 390, 800);
    expect(await page.locator(ring).first().isVisible()).toBe(false);
    await routeSwitch(page).click();
    await expect(page.locator(ring).first()).toBeVisible();
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });

  test("the Fathers' «Aa» menu has the same switch", async ({ page }) => {
    await preferEnglishFatherEdition(page);
    await open(page, smyrnaeans);
    await page.getByRole("button", { name: "Texto" }).click();
    const toggle = page.getByRole("dialog", { name: "Texto" }).getByRole("switch");
    await expect(toggle).toHaveAttribute("aria-checked", "false");
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-checked", "true");
    expect(await page.evaluate((key) => localStorage.getItem(key), storageKey)).toBe("on");
  });
});

test.describe("simplifier entry: the selection toolbar", () => {
  async function selectWords(page: Page, text: string) {
    await page.locator("[data-father-text]").getByText(text).first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(900);
    await page.evaluate((needle) => {
      const walker = document.createTreeWalker(document.querySelector("[data-father-text]")!, NodeFilter.SHOW_TEXT);
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        const at = node.textContent?.indexOf(needle) ?? -1;
        if (at >= 0) {
          const range = document.createRange();
          range.setStart(node, at);
          range.setEnd(node, at + needle.length);
          getSelection()?.removeAllRanges();
          getSelection()?.addRange(range);
          document.dispatchEvent(new PointerEvent("pointerup", { bubbles: true, pointerType: "mouse" }));
          return;
        }
      }
    }, text);
  }

  test("«Simplificar» opens the paragraph and marks the chosen words for about 2 s", async ({ page }) => {
    await preferEnglishFatherEdition(page);
    await open(page, smyrnaeans);
    await selectWords(page, "none for the widow");
    await page.waitForTimeout(300);
    const button = page.getByRole("toolbar").getByRole("button", { name: "Simplificar" });
    await expect(button).toBeVisible();
    await button.click();
    const panel = page.locator("[data-simplifier-panel]");
    await expect(panel).toBeVisible({ timeout: 10000 });
    const marked = panel.locator("[data-word][data-marked]");
    await expect.poll(() => marked.count(), { timeout: 12000 }).toBeGreaterThan(0);
    const seen = await marked.count();
    await expect.poll(() => marked.count(), { timeout: 4000 }).toBe(0);
    test.info().annotations.push({ type: "marked words while shown", description: String(seen) });
  });

  test("on a phone the marked words are brought into view", async ({ page }) => {
    await preferEnglishFatherEdition(page);
    await open(page, smyrnaeans, 390, 800);
    await selectWords(page, "none for the widow");
    await page.waitForTimeout(300);
    await page.getByRole("toolbar").getByRole("button", { name: "Simplificar" }).click();
    const marked = page.locator("[data-simplifier-panel] [data-word][data-marked]").first();
    await expect(marked).toBeVisible({ timeout: 14000 });
    await page.waitForTimeout(900);
    const box = await marked.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.y).toBeGreaterThan(0);
    expect(box!.y + box!.height).toBeLessThan(800);
  });

  test("no marks when the whole paragraph is selected", async ({ page }) => {
    await preferEnglishFatherEdition(page);
    await open(page, smyrnaeans);
    await page
      .locator("[data-father-text] [data-verse-text]")
      .first()
      .evaluate((element) => {
        const range = document.createRange();
        range.selectNodeContents(element);
        getSelection()?.removeAllRanges();
        getSelection()?.addRange(range);
        document.dispatchEvent(new PointerEvent("pointerup", { bubbles: true, pointerType: "mouse" }));
      });
    const button = page.getByRole("toolbar").getByRole("button", { name: "Simplificar" });
    await expect(button).toBeVisible();
    await button.click();
    await expect(page.locator("[data-simplifier-panel]")).toBeVisible({ timeout: 10000 });
    await page.waitForTimeout(1500);
    expect(await page.locator("[data-word][data-marked]").count()).toBe(0);
  });

  test("the Bible reader's toolbar has no «Simplificar»", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/es/biblia/juan/1", { waitUntil: "networkidle" });
    await page.evaluate(() => {
      const verse = document.querySelector("[data-verse-text]")!;
      const range = document.createRange();
      range.selectNodeContents(verse);
      getSelection()?.removeAllRanges();
      getSelection()?.addRange(range);
      document.dispatchEvent(new PointerEvent("pointerup", { bubbles: true, pointerType: "mouse" }));
    });
    await expect(page.getByRole("toolbar").getByRole("button", { name: "Nota" })).toBeVisible();
    await expect(page.getByRole("toolbar").getByRole("button", { name: "Simplificar" })).toHaveCount(0);
  });
});
