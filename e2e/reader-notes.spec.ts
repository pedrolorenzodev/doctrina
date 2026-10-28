import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const john = "/es/biblia/juan/6";
const panel = 'aside[data-side-panel][aria-label="Detalle del versículo"]';
const verseButton = (n: number) => `#v-${n} [role=button]`;
const field = `${panel} textarea[aria-label="Tu nota"]`;
const mark = (n: number) => `#v-${n} button:has-text("nota")`;
const undoBar = "[role=status][data-open]";
const toolbar = '[role="toolbar"][aria-label="Lo que elegiste"]';

const storedNotes = (page: Page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem("doctrina-notes") ?? "[]") as Record<string, unknown>[]);

async function writeNote(page: Page, verse: number, text: string) {
  await page.locator(verseButton(verse)).click();
  await page.locator(panel).getByRole("button", { name: "Nota", exact: true }).click();
  await page.locator(field).fill(text);
  await expect.poll(async () => (await storedNotes(page)).length, { timeout: 3000 }).toBeGreaterThan(0);
}

async function selectWords(page: Page, from: [number, number], to: [number, number]) {
  await page.evaluate((verse) => document.getElementById(`v-${verse}`)!.scrollIntoView({ block: "center" }), from[0]);
  await page.waitForTimeout(200);
  await page.evaluate(
    ([start, end]) => {
      const point = (verse: number, offset: number): [Node, number] => {
        const unit = document.querySelector(`#v-${verse} [data-verse-text]`)!;
        const walker = document.createTreeWalker(unit, NodeFilter.SHOW_TEXT);
        let left = offset;
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
          if (left <= node.textContent!.length) return [node, left];
          left -= node.textContent!.length;
        }
        return [unit, unit.childNodes.length];
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

test("«Nota» in the panel opens an editor that saves by itself and leaves a quiet label beside the number", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator(verseButton(53)).click();
  await expect(page.locator(mark(53))).toHaveCount(0);
  await page.locator(panel).getByRole("button", { name: "Nota", exact: true }).click();
  await expect(page.locator(field)).toBeFocused();
  await expect(page.locator(panel)).toContainText("Nota sobre Juan 6:53");
  await page.locator(field).fill("El discurso del pan de vida.");
  await expect(page.locator(panel).getByRole("status").filter({ hasText: "Guardada" })).toBeVisible();
  const notes = await storedNotes(page);
  expect(notes).toHaveLength(1);
  expect(notes[0]).toMatchObject({
    scope: "unit",
    book: "John",
    chapter: 6,
    verse: 53,
    translationId: "rv1909",
    text: "El discurso del pan de vida.",
  });
  await expect(page.locator(mark(53))).toHaveText("1 nota");
  const number = (await page.locator("#v-53 > span > span").first().boundingBox())!;
  const badge = (await page.locator(mark(53)).boundingBox())!;
  expect(badge.x).toBeGreaterThan(number.x + number.width);
  expect(Math.abs(badge.y + badge.height / 2 - (number.y + number.height / 2))).toBeLessThan(6);
});

test("the note is still there after a reload; the mark opens the panel with it, and the row reopens the editor", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await writeNote(page, 53, "Primera versión.");
  await page.reload();
  await page.setViewportSize({ width: 1300, height: 900 });
  await expect(page.locator(mark(53))).toHaveText("1 nota");
  await page.locator(mark(53)).click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await page
    .locator(panel)
    .getByRole("button", { name: /Primera versión/ })
    .click();
  await expect(page.locator(field)).toHaveValue("Primera versión.");
  await page.locator(field).fill("Segunda versión.");
  await expect.poll(async () => (await storedNotes(page))[0]!.text).toBe("Segunda versión.");
  expect((await storedNotes(page))[0]!.updatedAt).toBeGreaterThanOrEqual(
    (await storedNotes(page))[0]!.createdAt as number,
  );
});

test("emptying a note removes it with an undo; Esc closes the editor before the panel; ⌘/Ctrl+Enter saves and closes", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await writeNote(page, 53, "Para borrar.");
  await page.locator(field).fill("");
  await expect.poll(async () => (await storedNotes(page)).length).toBe(0);
  await expect(page.locator(undoBar)).toContainText("Nota borrada.");
  await page.locator(undoBar).getByRole("button", { name: "Deshacer" }).click();
  await expect.poll(async () => (await storedNotes(page)).length).toBe(1);
  await page
    .locator(panel)
    .getByRole("button", { name: /Para borrar/ })
    .click();
  await page.keyboard.press("Escape");
  await expect(page.locator(field)).toHaveCount(0);
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await page.locator(panel).getByRole("button", { name: "Nota", exact: true }).click();
  await page.locator(field).fill("Con atajo");
  await page.keyboard.press("Control+Enter");
  await expect(page.locator(field)).toHaveCount(0);
  await expect.poll(async () => (await storedNotes(page)).length).toBe(2);
  await page.locator(verseButton(53)).click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "false");
});

test("the toolbar's «Nota» and the N key start a note on the words, anchored to the first verse of the range", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await selectWords(page, [53, 5], [55, 10]);
  await page.locator(toolbar).getByRole("button", { name: "Nota" }).click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await expect(page.locator(panel)).toContainText("Nota sobre Juan 6:53-55: «");
  await expect(page.locator(panel)).toContainText("Hijo…»");
  await page.locator(field).fill("Pasaje de los tres versículos.");
  await expect.poll(async () => (await storedNotes(page)).length).toBe(1);
  expect((await storedNotes(page))[0]).toMatchObject({
    scope: "words",
    verse: 53,
    verseTo: 55,
    quote: expect.stringContaining("Jesús les dijo"),
  });
  await expect(page.locator(mark(53))).toHaveText("1 nota");
  await expect(page.locator(mark(55))).toHaveCount(0);
  await page.keyboard.press("Escape");
  await page.keyboard.press("Escape");
  await selectWords(page, [57, 0], [57, 10]);
  await expect(page.locator(toolbar)).toBeVisible();
  await page.keyboard.press("n");
  await expect(page.locator(field)).toBeFocused();
  await expect(page.locator(panel)).toContainText("Nota sobre Juan 6:57");
});

test("two notes say «2 notas»; a words note made in one translation says so in another, a unit note does not", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await writeNote(page, 53, "Una.");
  await page.locator(panel).getByRole("button", { name: "Nota", exact: true }).click();
  await page.locator(field).fill("Dos.");
  await expect.poll(async () => (await storedNotes(page)).length).toBe(2);
  await expect(page.locator(mark(53))).toHaveText("2 notas");
  await page.keyboard.press("Escape");
  await page.keyboard.press("Escape");
  await selectWords(page, [57, 0], [57, 12]);
  await page.locator(toolbar).getByRole("button", { name: "Nota" }).click();
  await page.locator(field).fill("Sobre palabras.");
  await expect.poll(async () => (await storedNotes(page)).length).toBe(3);
  await page.locator('[data-reader-strip] button[aria-haspopup="listbox"]').click();
  await page.locator('[data-reader-strip] [role=option]:has-text("(BSB)")').click();
  await expect(page.locator(mark(53))).toHaveText("2 notas");
  await expect(page.locator(mark(57))).toHaveText("1 nota en RV1909");
});

test("tapping another verse closes the editor and keeps the note; the field grows with its text", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await writeNote(page, 53, "Una línea");
  const small = (await page.locator(field).boundingBox())!.height;
  expect(small).toBeGreaterThanOrEqual(87);
  await page.locator(field).fill(Array.from({ length: 8 }, (_, at) => `línea ${at}`).join("\n"));
  expect((await page.locator(field).boundingBox())!.height).toBeGreaterThan(small + 60);
  await page.locator(verseButton(54)).click();
  await expect(page.locator(field)).toHaveCount(0);
  await expect.poll(async () => (await storedNotes(page))[0]!.text).toContain("línea 7");
  await expect(page.locator(panel)).toContainText("Juan 6:54");
});

test("on a phone the mark sits beside the number and the editor lives in the sheet", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(john);
  await writeNote(page, 3, "En el celular.");
  const number = (await page.locator("#v-3 > span > span").first().boundingBox())!;
  const badge = (await page.locator(mark(3)).boundingBox())!;
  expect(Math.abs(badge.y - number.y)).toBeLessThan(12);
  expect(badge.x).toBeGreaterThan(number.x);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  const sheet = (await page.locator(panel).boundingBox())!;
  const input = (await page.locator(field).boundingBox())!;
  expect(input.y).toBeGreaterThanOrEqual(sheet.y);
  expect(input.x + input.width).toBeLessThanOrEqual(390);
});

test("a damaged notes store is ignored", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("doctrina-notes", '[{"id":1},"junk",{"scope":"unit"}]'));
  await page.goto(john);
  await expect(page.locator("#v-53 button:has-text('nota')")).toHaveCount(0);
  await writeNote(page, 53, "Sigue funcionando.");
  await expect(page.locator(mark(53))).toHaveText("1 nota");
});
