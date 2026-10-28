import { readFileSync } from "node:fs";
import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const john = "/es/biblia/juan/6";
const strip = "main [data-reader-strip]";
const button = `${strip} button[data-parallel]`;
const menu = `${strip} [role="dialog"][aria-label="Segunda traducción"]`;
const mode = (name: string) => `${menu} [role=group] button:has-text("${name}")`;
const root = "main [data-stream-chapter]:first-of-type [data-chapter-text]";
const secondOf = (n: number) => `${root} [data-second-verse="${n}"]`;
const storageKey = "doctrina-second-translation";

const bsb = JSON.parse(readFileSync("data/corpus/bibles/bsb.json", "utf8")) as Record<string, string>;

const openMenu = async (page: Page) => {
  await page.locator(button).click();
  await expect(page.locator(menu)).toBeVisible();
};

test("the button opens a menu with No, Debajo and Al lado; the list leaves out the translation being read", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await expect(page.locator(button)).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator(menu)).toBeHidden();
  await openMenu(page);
  await expect(page.locator(`${menu} [role=group] button`)).toHaveText(["No", "Debajo", "Al lado"]);
  await expect(page.locator(mode("No"))).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(`${menu} [role=option]`)).toHaveCount(0);
  await page.locator(mode("Debajo")).click();
  await expect(page.locator(`${menu} [role=option]`)).toHaveText([
    "Berean Standard Bible (BSB)",
    "King James Version (KJV)",
    "World English Bible, Catholic edition (WEB)",
    "Douay-Rheims (DRA)",
  ]);
  await expect(page.locator(`${menu} [role=option][aria-selected=true]`)).toHaveText("Berean Standard Bible (BSB)");
  await expect(page.locator(button)).toHaveAttribute("aria-pressed", "true");
});

test("keyboard: the second translation's rows take Tab, the arrows move and Enter chooses", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator(button).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(menu)).toBeVisible();
  await page.locator(mode("Debajo")).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(root)).toHaveAttribute("data-second", "below");
  await page.keyboard.press("Tab");
  await expect(page.locator(mode("Al lado"))).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.locator(`${menu} [role=option][data-id="bsb"]`)).toBeFocused();
  await page.keyboard.press("ArrowDown");
  await expect(page.locator(`${menu} [role=option][data-id="kjv"]`)).toBeFocused();
  await page.keyboard.press("End");
  await expect(page.locator(`${menu} [role=option][data-id="dra"]`)).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator(secondOf(1))).toContainText("DRA");
  await page.keyboard.press("Escape");
  await expect(page.locator(menu)).toBeHidden();
  await expect(page.locator(button)).toBeFocused();
});

test("«Debajo» puts each verse of the second translation under the first, with the «Con raya» look", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await openMenu(page);
  await page.locator(mode("Debajo")).click();
  await expect(page.locator(root)).toHaveAttribute("data-second", "below");
  await expect(page.locator(`${root} [data-second-verse]`)).toHaveCount(71);
  await expect(page.locator(secondOf(35))).toContainText(bsb["John.6.35"]!.slice(0, 40));
  await expect(page.locator(secondOf(35))).toContainText("BSB");
  const look = await page.locator(secondOf(35)).evaluate((element) => {
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
  const first = (await page.locator("#v-35").boundingBox())!;
  const second = (await page.locator(secondOf(35)).boundingBox())!;
  expect(second.y).toBeGreaterThan(first.y + first.height - 12);
});

test("«Al lado» aligns the two translations verse by verse in two columns", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await openMenu(page);
  await page.locator(mode("Al lado")).click();
  await expect(page.locator(root)).toHaveAttribute("data-second", "side");
  const columns = await page
    .locator(root)
    .evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length);
  expect(columns).toBe(2);
  for (const n of [1, 35, 71]) {
    const left = (await page.locator(`#v-${n}`).boundingBox())!;
    const right = (await page.locator(secondOf(n)).boundingBox())!;
    expect(Math.abs(left.y - right.y)).toBeLessThan(14);
    expect(right.x).toBeGreaterThan(left.x + left.width / 2);
  }
  await expect(page.locator(`${root} p`).filter({ hasText: "Reina-Valera 1909" }).first()).toBeVisible();
  await expect(page.locator(`${root} p`).filter({ hasText: "Berean Standard Bible" }).first()).toBeVisible();
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("«Al lado» column heads each open a list; picking the other column's translation swaps them", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await openMenu(page);
  await page.locator(mode("Al lado")).click();
  const heads = page.locator(`${root} [data-column-head]`);
  await expect(heads).toHaveCount(2);
  await expect(heads.nth(0)).toContainText("RV1909");
  await expect(heads.nth(1)).toContainText("BSB");
  await heads.nth(1).click();
  const list = page.locator(`${root} [role=listbox]`).nth(1);
  await expect(list).toBeVisible();
  await list.locator('[role=option]:has-text("(KJV)")').click();
  await expect(heads.nth(1)).toContainText("KJV");
  await expect(list).toBeHidden();
  await heads.nth(0).click();
  await page.locator(`${root} [role=listbox]`).nth(0).locator('[role=option]:has-text("(KJV)")').click();
  await expect(heads.nth(0)).toContainText("KJV");
  await expect(heads.nth(1)).toContainText("RV1909");
  await heads.nth(0).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(`${root} [role=listbox]`).nth(0)).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(`${root} [role=listbox]`).nth(0)).toBeHidden();
});

test("below 1100 px «Al lado» is unavailable and a stored side choice reads as «Debajo»", async ({ page }) => {
  await page.addInitScript((key) => localStorage.setItem(key, JSON.stringify({ mode: "side", id: "bsb" })), storageKey);
  await page.setViewportSize({ width: 1000, height: 900 });
  await page.goto(john);
  await expect(page.locator(root)).toHaveAttribute("data-second", "below");
  await openMenu(page);
  await expect(page.locator(mode("Al lado"))).toBeDisabled();
  await expect(page.locator(menu)).toContainText("«Al lado» necesita una pantalla más ancha.");
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator(root)).toHaveAttribute("data-second", "side");
});

test("the choice is remembered across chapters and reloads; «No» clears it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await openMenu(page);
  await page.locator(mode("Debajo")).click();
  await page.locator(`${menu} [role=option]:has-text("(KJV)")`).click();
  expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!), storageKey)).toEqual({
    mode: "below",
    id: "kjv",
  });
  await page.goto("/es/biblia/juan/7");
  await expect(page.locator(root)).toHaveAttribute("data-second", "below");
  await expect(page.locator(secondOf(1))).toContainText("KJV");
  await page.reload();
  await expect(page.locator(root)).toHaveAttribute("data-second", "below");
  await openMenu(page);
  await page.locator(mode("No")).click();
  await expect(page.locator(root)).not.toHaveAttribute("data-second", /.*/);
  await expect(page.locator(`${root} [data-second-verse]`)).toHaveCount(0);
  expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!).mode, storageKey)).toBe("off");
});

test("choosing the second translation as the first swaps them; a stored one that is not offered is ignored", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.addInitScript(
    (key) => localStorage.setItem(key, JSON.stringify({ mode: "below", id: "bsb" })),
    storageKey,
  );
  await page.goto(john);
  await page.locator(`${strip} button[aria-haspopup="listbox"]`).click();
  await page.locator(`${strip} [role=listbox][aria-label="Traducción"] [role=option]:has-text("(BSB)")`).click();
  await expect(page.locator(`${strip} button[aria-haspopup="listbox"]`)).toContainText("BSB");
  await expect(page.locator(secondOf(1))).toContainText("RV1909");
  await page.goto("/es/biblia/eclesiastico/51");
  await expect(page.locator(root)).not.toHaveAttribute("data-second", /.*/);
  await expect(page.locator(button)).toHaveAttribute("aria-pressed", "false");
});

test("a verse the second translation does not have leaves an empty line", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.addInitScript(
    (key) => localStorage.setItem(key, JSON.stringify({ mode: "below", id: "bsb" })),
    storageKey,
  );
  await page.goto("/es/biblia/juan/5");
  await expect(page.locator("#v-4")).toBeVisible();
  await expect(page.locator(secondOf(4))).toHaveText("");
  await expect(page.locator(secondOf(3))).not.toHaveText("");
});

test("with two translations the paragraph format is locked and the text stays one verse per line", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.addInitScript(() => {
    localStorage.setItem("doctrina-reader-format", "flow");
    localStorage.setItem("doctrina-second-translation", JSON.stringify({ mode: "below", id: "bsb" }));
  });
  await page.goto(john);
  expect(await page.locator("#v-1").evaluate((el) => getComputedStyle(el).display)).toBe("block");
  await page.locator(strip).getByRole("button", { name: "Texto", exact: true }).click();
  await expect(page.locator(`${strip} button:has-text("En párrafo")`)).toBeDisabled();
  await expect(page.locator(`${strip} button:has-text("Un versículo por línea")`)).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(page.locator(`${strip} [role=dialog][aria-label="Texto"]`)).toContainText(
    "Con dos traducciones va un versículo por línea, para poder alinearlas.",
  );
});

test("highlighting and the panel act on the first translation only", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.addInitScript(
    (key) => localStorage.setItem(key, JSON.stringify({ mode: "below", id: "bsb" })),
    storageKey,
  );
  await page.goto(john);
  await page.locator("#v-53 [role=button]").click();
  await page.locator('aside[data-side-panel] button[aria-label="Subrayar en verde"]').click();
  await expect(page.locator("#v-53 mark")).toHaveCount(1);
  await expect(page.locator(`${secondOf(53)} mark`)).toHaveCount(0);
});

test.describe("phone", () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

  test("the menu fits, «Al lado» is off, «Debajo» works and nothing overflows", async ({ page }) => {
    await page.goto(john);
    const box = (await page.locator(button).boundingBox())!;
    expect(box.width).toBeGreaterThanOrEqual(43);
    await page.locator(button).tap();
    await expect(page.locator(menu)).toBeVisible();
    await page.waitForTimeout(350);
    const panel = (await page.locator(menu).boundingBox())!;
    expect(panel.x).toBeGreaterThanOrEqual(0);
    expect(panel.x + panel.width).toBeLessThanOrEqual(390);
    await expect(page.locator(mode("Al lado"))).toBeDisabled();
    await page.locator(mode("Debajo")).tap();
    await expect(page.locator(root)).toHaveAttribute("data-second", "below");
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });
});
