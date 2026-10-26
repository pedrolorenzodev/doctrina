import { expect, test, type Page } from "@playwright/test";

const john = "/es/biblia/juan/6";
const panel = 'aside[data-side-panel][aria-label="Detalle del versículo"]';
const verseButton = (n: number) => `#v-${n} [role=button]`;
const mark = (n: number) => `#v-${n} mark`;
const dot = (name: string) => `${panel} button[aria-label="Subrayar en ${name}"]`;
const undoBar = "[role=status][data-open]";

const open = async (page: Page, n = 53) => {
  await page.locator(verseButton(n)).click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
};

test("the panel offers five colours; one tap highlights the whole verse in it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await open(page);
  await expect(page.locator(`${panel} button[aria-label^="Subrayar en "]`)).toHaveCount(5);
  await expect(page.locator(panel).getByText("Subrayar", { exact: true })).toBeVisible();
  await expect(page.locator(mark(53))).toHaveCount(0);
  await page.locator(dot("verde")).click();
  await expect(page.locator(mark(53))).toHaveCount(1);
  await expect(page.locator(mark(53))).toHaveAttribute("data-highlight", "green");
  expect(await page.locator(mark(53)).evaluate((el) => el.textContent!.length)).toBe(
    await page.locator(verseButton(53)).evaluate((el) => el.textContent!.length),
  );
  await expect(page.locator(panel).getByRole("button", { name: "Quitar subrayado" })).toBeVisible();
  await expect(page.locator(dot("verde"))).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(mark(54))).toHaveCount(0);
});

test("only highlighted text shows a chosen colour, and the remove icon is dimmed when there is nothing to remove", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  const pressed = `${panel} [role=group][aria-label="Subrayar con color"] button[aria-pressed="true"]`;
  const remove = `${panel} button[aria-label="Quitar subrayado"]`;
  await open(page);
  await expect(page.locator(pressed)).toHaveCount(0);
  await expect(page.locator(remove)).toBeDisabled();
  await page.locator(dot("verde")).click();
  await expect(page.locator(dot("verde"))).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(remove)).toBeEnabled();
  await page.locator(verseButton(54)).click();
  await expect(page.locator(panel)).toContainText("Juan 6:54");
  await expect(page.locator(pressed)).toHaveCount(0);
  await expect(page.locator(remove)).toBeDisabled();
  await page.locator(verseButton(53)).click();
  await expect(page.locator(pressed)).toHaveCount(1);
  await expect(page.locator(dot("verde"))).toHaveAttribute("aria-pressed", "true");
});

test("the remove icon is a round control after the colours, the label stays «Subrayar»", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await open(page);
  await page.locator(dot("rosa")).click();
  await expect(page.locator(panel).getByText("Subrayar", { exact: true })).toBeVisible();
  await expect(page.locator(panel).getByText("Quitar subrayado", { exact: true })).toHaveCount(0);
  const group = page.locator(`${panel} [role=group][aria-label="Subrayar con color"] button`);
  await expect(group).toHaveCount(6);
  await expect(group.last()).toHaveAttribute("aria-label", "Quitar subrayado");
  await expect(group.last().locator("svg")).toBeVisible();
  const note = (await page.locator(panel).getByRole("button", { name: "Nota" }).boundingBox())!;
  const lastBox = (await group.last().boundingBox())!;
  expect(Math.abs(note.y - lastBox.y)).toBeLessThan(lastBox.height);
});

test("the fill is the decided tone in light and dark, and never an underline", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  const expected = {
    light: { yellow: "rgba(240, 200, 60, 0.28)", orange: "rgba(235, 140, 55, 0.26)" },
    dark: { yellow: "rgba(214, 168, 101, 0.2)", orange: "rgba(230, 140, 70, 0.2)" },
  } as const;
  for (const theme of ["light", "dark"] as const) {
    await page.emulateMedia({ colorScheme: theme });
    await page.addInitScript((value) => localStorage.setItem("doctrina-theme", value), theme);
    await page.goto(john);
    await open(page);
    for (const [color, name] of [
      ["yellow", "amarillo"],
      ["orange", "naranja"],
    ] as const) {
      await page.locator(dot(name)).click();
      await expect
        .poll(() => page.locator(mark(53)).evaluate((el) => getComputedStyle(el).backgroundColor))
        .toBe(expected[theme][color]);
      expect(await page.locator(mark(53)).evaluate((el) => getComputedStyle(el).textDecorationLine)).toBe("none");
    }
    await page.evaluate(() => localStorage.clear());
  }
});

test("another colour replaces it, «Quitar subrayado» takes it off, and «Deshacer» brings it back", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await open(page);
  await page.locator(dot("rosa")).click();
  await expect(page.locator(undoBar)).toHaveAttribute("data-open", "true");
  await expect(page.locator(undoBar)).toContainText("Subrayado.");
  await page.locator(dot("celeste")).click();
  await expect(page.locator(mark(53))).toHaveAttribute("data-highlight", "sky");
  await expect(page.locator(mark(53))).toHaveCount(1);
  await page.locator(panel).getByRole("button", { name: "Quitar subrayado" }).click();
  await expect(page.locator(mark(53))).toHaveCount(0);
  await expect(page.locator(undoBar)).toContainText("Subrayado quitado.");
  await page.locator(undoBar).getByRole("button", { name: "Deshacer" }).click();
  await expect(page.locator(mark(53))).toHaveAttribute("data-highlight", "sky");
  await expect(page.locator(undoBar)).toHaveAttribute("data-open", "false");
});

test("the bar stays about five seconds and a new change restarts the count", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await open(page);
  await page.locator(dot("amarillo")).click();
  await page.waitForTimeout(3500);
  await page.locator(dot("verde")).click();
  await page.waitForTimeout(3500);
  await expect(page.locator(undoBar)).toHaveAttribute("data-open", "true");
  await expect(page.locator(undoBar)).toHaveAttribute("data-open", "false", { timeout: 3000 });
});

test("highlights are kept in this browser and shown again after a reload", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await open(page, 20);
  await page.locator(dot("naranja")).click();
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem("doctrina-highlights")!).length)).toBe(1);
  await page.reload();
  await expect(page.locator(mark(20))).toHaveAttribute("data-highlight", "orange");
  await page.goto("/es/biblia/juan/7");
  await expect(page.locator("main mark")).toHaveCount(0);
});

test("a highlight shows only in the translation where it was made", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await open(page);
  await page.locator(dot("verde")).click();
  await page.locator('[data-reader-strip] button[aria-haspopup="listbox"]').click();
  await page.locator('[data-reader-strip] [role=option]:has-text("(BSB)")').click();
  await expect(page.locator(mark(53))).toHaveCount(0);
  await page.locator('[data-reader-strip] button[aria-haspopup="listbox"]').click();
  await page.locator('[data-reader-strip] [role=option]:has-text("(RV1909)")').click();
  await expect(page.locator(mark(53))).toHaveAttribute("data-highlight", "green");
});

test("a damaged store is ignored and a blocked store still lets the reader highlight during the visit", async ({
  page,
}) => {
  await page.addInitScript(() => localStorage.setItem("doctrina-highlights", '[{"id":1},{"x":2},"junk"]'));
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await expect(page.locator("main mark")).toHaveCount(0);
  await page.evaluate(() => {
    Storage.prototype.setItem = () => {
      throw new Error("blocked");
    };
  });
  await open(page);
  await page.locator(dot("verde")).click();
  await expect(page.locator(mark(53))).toHaveAttribute("data-highlight", "green");
});

test("the undo bar goes under the top bar on a phone, and the dots are 44 px targets on touch", async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const page = await context.newPage();
  await page.goto(john);
  await page.locator(verseButton(3)).tap();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  const target = (await page.locator(dot("verde")).boundingBox())!;
  expect(target.width).toBeGreaterThanOrEqual(43);
  expect(target.height).toBeGreaterThanOrEqual(43);
  await page.locator(dot("verde")).tap();
  await expect(page.locator(undoBar)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(300);
  const bar = (await page.locator(undoBar).boundingBox())!;
  expect(bar.y).toBeLessThan(120);
  expect(bar.x).toBeGreaterThanOrEqual(0);
  expect(bar.x + bar.width).toBeLessThanOrEqual(390);
  await context.close();
});
