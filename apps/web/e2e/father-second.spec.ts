import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const didache = "/es/historia/obras/didache";
const strip = "main [data-reader-strip]";
const button = `${strip} button[data-parallel]`;
const menu = `${strip} [role="dialog"][aria-label="Segunda traducción"]`;
const mode = (name: string) => `${menu} [role=group] button:has-text("${name}")`;
const root = "[data-father-text]";
const secondOf = (n: number) => `${root} [data-second-division="${n}"]`;
const storageKey = "doctrina-father-second-translation";

const openMenu = async (page: Page) => {
  await page.locator(button).click();
  await expect(page.locator(menu)).toBeVisible();
};

const open = async (page: Page, path: string, width = 1440, height = 900) => {
  await page.setViewportSize({ width, height });
  await page.goto(path);
  await page.evaluate(() => document.fonts.ready);
};

const store = (page: Page, value: object) =>
  page.addInitScript(([key, raw]) => localStorage.setItem(key!, raw!), [storageKey, JSON.stringify(value)]);

test.describe("Fathers' reader: the second translation", () => {
  test("the button opens a menu with No, Debajo and Al lado; the list leaves out the edition being read", async ({
    page,
  }) => {
    await open(page, didache);
    await expect(page.locator(button)).toHaveAttribute("aria-pressed", "false");
    await expect(page.locator(menu)).toBeHidden();
    await openMenu(page);
    await expect(page.locator(`${menu} [role=group] button`)).toHaveText(["No", "Debajo", "Al lado"]);
    await expect(page.locator(mode("No"))).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(`${menu} [role=option]`)).toHaveCount(0);
    await page.locator(mode("Debajo")).click();
    await expect(page.locator(`${menu} [role=option]`)).toHaveText(["Joseph Barber Lightfoot (Lightfoot 1891)"]);
    await expect(page.locator(button)).toHaveAttribute("aria-pressed", "true");
  });

  test("only a work with two editions offers it", async ({ page }) => {
    await open(page, "/es/historia/obras/ambrose-de-fide");
    await expect(page.locator(strip)).toBeVisible();
    await expect(page.locator(button)).toHaveCount(0);
  });

  test("keyboard: Enter on the mode, Tab to the list, Enter chooses, Escape closes and returns to the button", async ({
    page,
  }) => {
    await open(page, didache);
    await page.locator(button).focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(menu)).toBeVisible();
    await page.locator(mode("Debajo")).focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(root)).toHaveAttribute("data-second", "below");
    await page.keyboard.press("Tab");
    await expect(page.locator(mode("Al lado"))).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.locator(`${menu} [role=option]`).first()).toBeFocused();
    await page.keyboard.press("Enter");
    await page.keyboard.press("Escape");
    await expect(page.locator(menu)).toBeHidden();
    await expect(page.locator(button)).toBeFocused();
  });

  test("«Debajo» puts each division of the second edition under the first, with the «Con raya» look", async ({
    page,
  }) => {
    await open(page, didache);
    await openMenu(page);
    await page.locator(mode("Debajo")).click();
    await expect(page.locator(root)).toHaveAttribute("data-second", "below");
    await expect(page.locator(`${root} [data-second-division]`)).toHaveCount(16);
    await expect(page.locator(secondOf(1))).toContainText("Lightfoot 1891");
    await expect(page.locator(secondOf(1))).toContainText("There are two ways");
    const look = await page.locator(secondOf(1)).evaluate((element) => {
      const css = getComputedStyle(element);
      return {
        line: css.borderLeftWidth,
        indent: css.marginLeft,
        size: css.fontSize,
        lang: element.getAttribute("lang"),
      };
    });
    expect(look.line).toBe("1px");
    expect(look.indent).toBe("18px");
    expect(look.size).toBe("17px");
    expect(look.lang).toBe("en");
    const first = (await page.locator("#d-1").boundingBox())!;
    const second = (await page.locator(secondOf(1)).boundingBox())!;
    expect(second.y).toBeGreaterThan(first.y + first.height - 12);
    await expect(page.locator(`${root} > div:not([role="group"])`)).toHaveCount(32);
  });

  test("«Al lado» aligns the two editions division by division in two columns", async ({ page }) => {
    await open(page, didache);
    await openMenu(page);
    await page.locator(mode("Al lado")).click();
    await expect(page.locator(root)).toHaveAttribute("data-second", "side");
    const columns = await page
      .locator(root)
      .evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length);
    expect(columns).toBe(2);
    for (const n of [1, 9, 16]) {
      const { left, right } = await page.evaluate(
        ([first, second]) => {
          const box = (selector: string) => {
            const rect = document.querySelector(selector)!.getBoundingClientRect();
            return { x: rect.x, y: rect.y, width: rect.width };
          };
          return { left: box(first!), right: box(second!) };
        },
        [`#d-${n}`, secondOf(n)],
      );
      expect(Math.abs(left.y - right.y)).toBeLessThan(1);
      expect(right.x).toBeGreaterThan(left.x + left.width / 2);
    }
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });

  test("«Al lado» column heads each open a list; picking the other column's edition swaps them", async ({ page }) => {
    await open(page, didache);
    await openMenu(page);
    await page.locator(mode("Al lado")).click();
    await page.keyboard.press("Escape");
    await expect(page.locator(menu)).toBeHidden();
    const heads = page.locator(`${root} [data-column-head]`);
    await expect(heads).toHaveCount(2);
    await expect(heads.nth(0)).toContainText("IA 2026");
    await expect(heads.nth(1)).toContainText("Lightfoot 1891");
    await heads.nth(0).click();
    await page.locator('[role=listbox]:visible [role=option][data-id="en"]').click();
    await expect(heads.nth(0)).toContainText("Lightfoot 1891");
    await expect(heads.nth(1)).toContainText("IA 2026");
    await expect(page.locator(root)).toHaveAttribute("lang", "en");
    await expect(page.locator(strip).locator('button[aria-haspopup="listbox"]')).toContainText("Lightfoot 1891");
  });

  test("below 1100 px «Al lado» is unavailable and a stored side choice reads as «Debajo»", async ({ page }) => {
    await store(page, { mode: "side", id: "en" });
    await open(page, didache, 1000);
    await expect(page.locator(root)).toHaveAttribute("data-second", "below");
    await openMenu(page);
    await expect(page.locator(mode("Al lado"))).toBeDisabled();
    await expect(page.locator(menu)).toContainText("«Al lado» necesita una pantalla más ancha.");
  });

  test("the choice is remembered across works and reloads, under its own key; «No» clears it", async ({ page }) => {
    await open(page, didache);
    await openMenu(page);
    await page.locator(mode("Debajo")).click();
    await page.reload();
    await expect(page.locator(root)).toHaveAttribute("data-second", "below");
    await open(page, "/es/historia/obras/barnabas");
    await expect(page.locator(root)).toHaveAttribute("data-second", "below");
    expect(await page.evaluate(() => localStorage.getItem("doctrina-second-translation"))).toBeNull();
    await openMenu(page);
    await page.locator(mode("No")).click();
    await expect(page.locator(root)).not.toHaveAttribute("data-second", /.+/);
    await page.reload();
    await expect(page.locator(root)).not.toHaveAttribute("data-second", /.+/);
  });

  test("choosing the second edition as the first swaps them", async ({ page }) => {
    await open(page, didache);
    await openMenu(page);
    await page.locator(mode("Debajo")).click();
    await page.keyboard.press("Escape");
    await expect(page.locator(menu)).toBeHidden();
    await page.locator(`${strip} button[aria-haspopup="listbox"]`).click();
    await page.locator('[role=listbox]:visible [role=option][data-id="en"]').click();
    await expect(page.locator(root)).toHaveAttribute("lang", "en");
    await expect(page.locator(secondOf(1))).toContainText("IA 2026");
    await expect(page.locator(secondOf(1))).toContainText("Hay dos caminos");
  });

  test("a stored edition that this work does not have shows nothing, keeps the mode and says so", async ({ page }) => {
    await store(page, { mode: "below", id: "en" });
    await open(page, "/es/historia/obras/ambrose-de-fide");
    await expect(page.locator(root)).not.toHaveAttribute("data-second", /.+/);
    await open(page, didache);
    await expect(page.locator(root)).toHaveAttribute("data-second", "below");
  });

  test("a division the second edition does not have leaves an empty block; the partial work lines up by locator", async ({
    page,
  }) => {
    await store(page, { mode: "below", id: "es" });
    await page.addInitScript(() => localStorage.setItem("doctrina-father-edition", "en"));
    await open(page, "/es/historia/obras/irenaeus-against-heresies");
    const missing = page.locator(`${root} [data-second-division]:empty`);
    expect(await missing.count()).toBeGreaterThan(100);
    const translated = page.locator(`${root} [data-second-division] [data-second-text]`);
    expect(await translated.count()).toBeGreaterThan(300);
    const first = await page
      .locator(`${root} [data-second-division] [data-second-text]`)
      .first()
      .getAttribute("data-second-text");
    const row = page.locator(`${root} > div[id^="d-3.1.1"]`);
    expect(first).not.toBeNull();
    await expect(row).toHaveCount(1);
  });

  test("the second edition is labelled and its licence is shown with the first's", async ({ page }) => {
    await open(page, didache);
    await openMenu(page);
    await page.locator(mode("Debajo")).click();
    await page.keyboard.press("Escape");
    await expect(page.locator("main")).toContainText("Traducido con IA");
    await expect(page.locator("main")).toContainText("Joseph Barber Lightfoot and J. R. Harmer");
    await expect(page.locator("main")).toContainText("Traducción de Doctrina asistida por IA");
  });

  test("the panel and the copied citation keep their language rules with two editions open", async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem("doctrina-father-edition", "en"));
    await store(page, { mode: "below", id: "es" });
    await open(page, "/es/historia/obras/ignatius-romans");
    await page.locator('[data-division-open="d-1.1"]').click();
    const panel = page.locator('aside[data-side-panel][aria-label="Detalle del pasaje"]');
    await expect(panel).toHaveAttribute("data-open", "true");
    await expect(panel).toContainText("Carta a los Romanos 1.1");
  });

  test.describe("the second column", () => {
    test.use({ permissions: ["clipboard-read", "clipboard-write"] });
    const toolbar = '[role="toolbar"][aria-label="Lo que elegiste"]';
    const selectIn = (page: Page) =>
      page.evaluate(() => {
        const unit = document.querySelector('[data-second-text="1"]')!;
        const node = document.createTreeWalker(unit, NodeFilter.SHOW_TEXT).nextNode()!;
        const range = document.createRange();
        range.setStart(node, 5);
        range.setEnd(node, 14);
        getSelection()!.removeAllRanges();
        getSelection()!.addRange(range);
        document.dispatchEvent(new PointerEvent("pointerup", { pointerType: "mouse", bubbles: true }));
      });

    test("selecting words there opens the same toolbar: highlight lands in that column, the citation names its edition", async ({
      page,
    }) => {
      await store(page, { mode: "side", id: "en" });
      await open(page, didache);
      await page.locator('[data-second-text="1"]').scrollIntoViewIfNeeded();
      await selectIn(page);
      await expect(page.locator(toolbar)).toBeVisible();
      await page.locator(toolbar).getByRole("button", { name: "Copiar cita" }).click();
      const copied = await page.evaluate(() => navigator.clipboard.readText());
      expect(copied).toContain("Lightfoot");
      await selectIn(page);
      await page.locator(`${toolbar} button[aria-label^="Subrayar en "]`).first().click();
      await expect(page.locator('[data-second-text="1"] mark')).toHaveCount(1);
      await expect(page.locator("#d-1 [data-verse-text] mark")).toHaveCount(0);
      await page.reload();
      await expect(page.locator('[data-second-text="1"] mark')).toHaveCount(1);
    });
  });

  test("at 390 px the menu fits, «Al lado» is off, «Debajo» works and nothing overflows", async ({ page }) => {
    await open(page, didache, 390, 844);
    await openMenu(page);
    await expect(page.locator(mode("Al lado"))).toBeDisabled();
    const box = (await page.locator(menu).boundingBox())!;
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(390);
    await page.locator(mode("Debajo")).click();
    await expect(page.locator(root)).toHaveAttribute("data-second", "below");
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });
});
