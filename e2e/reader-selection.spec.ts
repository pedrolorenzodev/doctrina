import { expect, test, type Page } from "@playwright/test";
import { trackElement } from "./helpers";

const john = "/es/biblia/juan/6";
const toolbar = '[role="toolbar"][aria-label="Lo que elegiste"]';
const dot = (name: string) => `${toolbar} button[aria-label="Subrayar en ${name}"]`;
const marks = (n: number) => `#v-${n} mark`;
const undoBar = "[role=status][data-open]";

async function select(page: Page, from: [number, number], to: [number, number], scroll = true) {
  if (scroll) {
    await page.evaluate((verse) => document.getElementById(`v-${verse}`)!.scrollIntoView({ block: "center" }), from[0]);
    await page.waitForTimeout(200);
  }
  await page.evaluate(
    ([start, end]) => {
      const unit = (verse: number) => document.querySelector(`#v-${verse} [data-verse-text]`)!;
      const point = (verse: number, offset: number): [Node, number] => {
        const walker = document.createTreeWalker(unit(verse), NodeFilter.SHOW_TEXT);
        let left = offset;
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
          const length = node.textContent!.length;
          if (left <= length) return [node, left];
          left -= length;
        }
        return [unit(verse), unit(verse).childNodes.length];
      };
      const range = document.createRange();
      range.setStart(...point(start![0]!, start![1]!));
      range.setEnd(...point(end![0]!, end![1]!));
      getSelection()!.removeAllRanges();
      getSelection()!.addRange(range);
      document.dispatchEvent(new PointerEvent("pointerup", { pointerType: "mouse", bubbles: true }));
    },
    [from, to] as const,
  );
}

test.describe("toolbar", () => {
  test.use({ permissions: ["clipboard-read", "clipboard-write"] });

  test("dragging over words opens the toolbar below them with five colours, Copiar cita and Buscar", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await expect(page.locator(toolbar)).toBeHidden();
    await select(page, [53, 5], [53, 14]);
    await expect(page.locator(toolbar)).toBeVisible();
    await expect(page.locator(`${toolbar} button[aria-label^="Subrayar en "]`)).toHaveCount(5);
    await expect(page.locator(toolbar).getByText("Subrayar", { exact: true })).toHaveCount(0);
    await expect(page.locator(toolbar).getByRole("button", { name: "Copiar cita" })).toBeVisible();
    await expect(page.locator(toolbar).getByRole("button", { name: "Buscar" })).toBeVisible();
    await page.waitForTimeout(300);
    const bar = (await page.locator(toolbar).boundingBox())!;
    const verse = (await page.locator("#v-53").boundingBox())!;
    expect(bar.y).toBeGreaterThan(verse.y);
    expect(bar.x).toBeGreaterThanOrEqual(8);
    expect(bar.x + bar.width).toBeLessThanOrEqual(1440);
    const column = (await page.locator("#v-53 [data-verse-text]").boundingBox())!;
    expect(bar.x).toBeGreaterThanOrEqual(column.x - 2);
  });

  test("a colour highlights exactly the words, grown to whole words, and clears the selection", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await select(page, [53, 5], [53, 14]);
    await page.locator(dot("verde")).click();
    await expect(page.locator(marks(53))).toHaveCount(1);
    await expect(page.locator(marks(53))).toHaveText("Jesús les dijo");
    await expect(page.locator(marks(53))).toHaveAttribute("data-highlight", "green");
    await expect(page.locator(toolbar)).toBeHidden();
    expect(await page.evaluate(() => getSelection()!.toString())).toBe("");
    await expect(page.locator(undoBar)).toContainText("Subrayado.");
    await page.locator(undoBar).getByRole("button", { name: "Deshacer" }).click();
    await expect(page.locator(marks(53))).toHaveCount(0);
  });

  test("a selection across verses highlights the end of the first, the middle whole and the start of the last", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    const lengths = await page.evaluate(() =>
      [53, 54, 55].map((n) => document.querySelector(`#v-${n} [data-verse-text]`)!.textContent!.length),
    );
    await select(page, [53, 5], [55, 10]);
    await page.locator(dot("rosa")).click();
    await expect(page.locator(marks(53))).toHaveText(/^Jesús les dijo.*vosotros\.$/);
    await expect(page.locator(marks(54))).toHaveText(/^El que come mi carne.*postrero\.$/);
    await expect(page.locator(marks(55))).toHaveText("Porque mi");
    expect(await page.locator(marks(54)).evaluate((el) => el.textContent!.length)).toBe(lengths[1]);
  });

  test("«Copiar cita» copies the words and the reference of the range, with no web address", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await select(page, [53, 5], [55, 10]);
    await page.locator(toolbar).getByRole("button", { name: "Copiar cita" }).click();
    await expect(page.locator(toolbar).getByRole("button", { name: "Cita copiada" })).toBeVisible();
    const copied = await page.evaluate(() => navigator.clipboard.readText());
    expect(copied).toMatch(/^«Jesús les dijo.*Porque mi» Juan 6:53-55 \(RV1909\)\.$/);
    expect(copied).not.toContain(" ");
    await select(page, [60, 3], [60, 12]);
    await page.locator(toolbar).getByRole("button", { name: "Copiar cita" }).click();
    expect(await page.evaluate(() => navigator.clipboard.readText())).toMatch(/ Juan 6:60 \(RV1909\)\.$/);
  });

  test("a marked selection offers «Quitar subrayado» and removes only those words", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await select(page, [53, 0], [53, 40]);
    await page.locator(dot("amarillo")).click();
    await select(page, [53, 5], [53, 14]);
    await expect(page.locator(toolbar).getByRole("button", { name: "Quitar subrayado" })).toBeVisible();
    await page.locator(toolbar).getByRole("button", { name: "Quitar subrayado" }).click();
    await expect(page.locator(marks(53))).toHaveCount(2);
    await expect(page.locator(undoBar)).toContainText("Subrayado quitado.");
  });

  test("the chosen colour shows only on highlighted words, in their own colour, and the remove icon is dimmed otherwise", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    const pressed = `${toolbar} button[aria-pressed="true"]`;
    const remove = `${toolbar} button[aria-label="Quitar subrayado"]`;
    await select(page, [53, 0], [53, 40]);
    await expect(page.locator(toolbar)).toBeVisible();
    await expect(page.locator(pressed)).toHaveCount(0);
    await expect(page.locator(remove)).toBeDisabled();
    await page.locator(dot("verde")).click();
    await select(page, [54, 0], [54, 20]);
    await expect(page.locator(toolbar)).toBeVisible();
    await expect(page.locator(pressed)).toHaveCount(0);
    await expect(page.locator(remove)).toBeDisabled();
    await select(page, [53, 5], [53, 14]);
    await expect(page.locator(toolbar)).toBeVisible();
    await expect(page.locator(dot("verde"))).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(pressed)).toHaveCount(1);
    await expect(page.locator(remove)).toBeEnabled();
  });

  test("highlighting words again with the same colour merges into one run", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await select(page, [53, 0], [53, 20]);
    await page.locator(dot("verde")).click();
    await select(page, [53, 0], [53, 60]);
    await page.locator(dot("verde")).click();
    await expect(page.locator(marks(53))).toHaveCount(1);
    const length = await page.locator(marks(53)).evaluate((el) => el.textContent!.length);
    expect(length).toBeGreaterThanOrEqual(60);
    expect(length).toBeLessThan(75);
  });

  test("the first colour and the last button sit the same distance from the bar's edges", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await select(page, [53, 5], [53, 14]);
    await expect(page.locator(toolbar)).toBeVisible();
    await page.waitForTimeout(300);
    const bar = (await page.locator(toolbar).boundingBox())!;
    const first = (await page.locator(toolbar).getByRole("button", { name: "Subrayar en amarillo" }).boundingBox())!;
    const last = (await page.locator(toolbar).getByRole("button", { name: "Buscar" }).boundingBox())!;
    const left = first.x - bar.x;
    const right = bar.x + bar.width - (last.x + last.width);
    expect(Math.abs(left - right)).toBeLessThanOrEqual(1);
    expect(left).toBeGreaterThanOrEqual(6);
  });

  test("a right click on a verse opens the same toolbar for the whole verse", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await page.evaluate(() => document.getElementById("v-53")!.scrollIntoView({ block: "center" }));
    await page.locator("#v-53 [data-verse-text]").click({ button: "right" });
    await expect(page.locator(toolbar)).toBeVisible();
    const selected = await page.evaluate(() => getSelection()!.toString());
    const verse = await page.locator("#v-53 [data-verse-text]").evaluate((element) => element.textContent);
    expect(selected).toBe(verse);
    await page.locator(dot("verde")).click();
    await expect(page.locator(marks(53))).toHaveCount(1);
    expect(await page.locator(marks(53)).evaluate((element) => element.textContent)).toBe(verse);
    await expect(page.locator(toolbar)).toBeHidden();
  });

  test("a right click keeps a selection that is already on the verse, and Esc closes the toolbar", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await select(page, [53, 5], [53, 14]);
    await expect(page.locator(toolbar)).toBeVisible();
    const before = await page.evaluate(() => getSelection()!.toString());
    await page.locator("#v-53 [data-verse-text]").dispatchEvent("contextmenu");
    await page.waitForTimeout(200);
    expect(await page.evaluate(() => getSelection()!.toString())).toBe(before);
    await expect(page.locator(toolbar)).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator(toolbar)).toBeHidden();
  });

  test("the browser's own menu is replaced only over verse text, and never by a touch screen", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    const prevented = (selector: string) =>
      page.locator(selector).evaluate((element) => {
        const event = new MouseEvent("contextmenu", { bubbles: true, cancelable: true });
        element.dispatchEvent(event);
        return event.defaultPrevented;
      });
    expect(await prevented("#v-53 [data-verse-text]")).toBe(true);
    expect(await prevented("main h1")).toBe(false);
  });

  test("keys: S highlights in the last colour, S again removes, C copies, Esc closes", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await select(page, [53, 0], [53, 40]);
    await page.locator(dot("celeste")).click();
    await select(page, [54, 0], [54, 20]);
    await expect(page.locator(toolbar)).toBeVisible();
    await page.keyboard.press("s");
    await expect(page.locator(marks(54))).toHaveAttribute("data-highlight", "sky");
    await select(page, [54, 0], [54, 20]);
    await expect(page.locator(toolbar)).toBeVisible();
    await page.keyboard.press("s");
    await expect(page.locator(marks(54))).toHaveCount(0);
    await select(page, [55, 0], [55, 20]);
    await expect(page.locator(toolbar)).toBeVisible();
    await page.keyboard.press("c");
    await expect(page.locator(toolbar).getByRole("button", { name: "Cita copiada" })).toBeVisible();
    expect(await page.evaluate(() => navigator.clipboard.readText())).toContain("Juan 6:55");
    await page.keyboard.press("Escape");
    await expect(page.locator(toolbar)).toBeHidden();
  });

  test("«Buscar» opens the search with the selected words", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await select(page, [53, 5], [53, 14]);
    await page.locator(toolbar).getByRole("button", { name: "Buscar" }).click();
    await expect(page.locator("[data-search-dialog] [role=combobox]")).toHaveValue("Jesús les dijo");
    await expect(page.locator("[data-search-dialog] [role=combobox]")).toBeFocused();
    await expect(page.locator(toolbar)).toBeHidden();
  });

  test("it hides when the page scrolls or the selection collapses, and stays closed for text outside the chapter", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    await select(page, [53, 5], [53, 14]);
    await expect(page.locator(toolbar)).toBeVisible();
    await page.evaluate(() => scrollBy(0, 200));
    await expect(page.locator(toolbar)).toBeHidden();
    await select(page, [57, 0], [57, 10]);
    await expect(page.locator(toolbar)).toBeVisible();
    await page.evaluate(() => getSelection()!.removeAllRanges());
    await expect(page.locator(toolbar)).toBeHidden();
    await page.evaluate(() => {
      const range = document.createRange();
      range.selectNodeContents(document.querySelector("main h1")!);
      getSelection()!.removeAllRanges();
      getSelection()!.addRange(range);
      document.dispatchEvent(new PointerEvent("pointerup", { pointerType: "mouse", bubbles: true }));
    });
    await page.waitForTimeout(300);
    await expect(page.locator(toolbar)).toBeHidden();
  });

  test("below a selection near the bottom of the screen it goes above it", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 700 });
    await page.goto(john);
    await page.evaluate(() => {
      const top = document.getElementById("v-30")!.getBoundingClientRect().top;
      scrollBy(0, top - 640);
    });
    await page.waitForTimeout(200);
    await select(page, [30, 0], [30, 10], false);
    await expect(page.locator(toolbar)).toBeVisible();
    await page.waitForTimeout(300);
    const bar = (await page.locator(toolbar).boundingBox())!;
    const verse = (await page.locator("#v-30 [data-verse-text]").boundingBox())!;
    expect(bar.y + bar.height).toBeLessThanOrEqual(verse.y);
  });

  test("it appears in about 150 ms and leaves in about 100 ms; under reduced motion at once", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(john);
    const frames = trackElement(page, toolbar, 600);
    await select(page, [53, 5], [53, 14]);
    const sampled = await frames;
    const rising = sampled.filter((frame) => frame.opacity > 0.01 && frame.opacity < 0.99);
    expect(rising.length).toBeGreaterThanOrEqual(2);
    const began = sampled.find((frame) => frame.opacity > 0.01)!.t;
    const done = sampled.find((frame) => frame.opacity >= 0.99)!.t;
    expect(done - began).toBeGreaterThan(60);
    expect(done - began).toBeLessThan(300);
    for (let at = 1; at < sampled.length; at += 1)
      expect(sampled[at]!.opacity).toBeGreaterThanOrEqual(sampled[at - 1]!.opacity - 0.02);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.keyboard.press("Escape");
    await expect(page.locator(toolbar)).toBeHidden();
    const instant = trackElement(page, toolbar, 300);
    await select(page, [54, 0], [54, 12]);
    expect((await instant).filter((frame) => frame.opacity > 0.01 && frame.opacity < 0.99)).toHaveLength(0);
  });
});

test("on a phone the toolbar is docked to the bottom edge with 44 px buttons", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true,
    permissions: ["clipboard-read", "clipboard-write"],
  });
  const page = await context.newPage();
  await page.goto(john);
  await select(page, [3, 0], [3, 20]);
  await expect(page.locator(toolbar)).toBeVisible();
  await page.waitForTimeout(400);
  const bar = (await page.locator(toolbar).boundingBox())!;
  expect(Math.round(bar.y + bar.height)).toBe(844);
  expect(Math.round(bar.x)).toBe(0);
  expect(Math.round(bar.width)).toBe(390);
  for (const name of ["Copiar cita", "Buscar"]) {
    const button = (await page.locator(toolbar).getByRole("button", { name }).boundingBox())!;
    expect(button.height).toBeGreaterThanOrEqual(43);
  }
  const target = (await page.locator(dot("verde")).boundingBox())!;
  expect(target.width).toBeGreaterThanOrEqual(43);
  const inside = await page
    .locator(`${toolbar} button`)
    .evaluateAll((buttons) =>
      buttons.every(
        (button) => button.getBoundingClientRect().left >= 0 && button.getBoundingClientRect().right <= innerWidth,
      ),
    );
  expect(inside).toBe(true);
  await context.close();
});

test("on a touch screen a long press keeps the browser's own behaviour", async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const page = await context.newPage();
  await page.goto(john);
  const prevented = await page.locator("#v-53 [data-verse-text]").evaluate((element) => {
    const event = new MouseEvent("contextmenu", { bubbles: true, cancelable: true });
    element.dispatchEvent(event);
    return event.defaultPrevented;
  });
  expect(prevented).toBe(false);
  await context.close();
});
