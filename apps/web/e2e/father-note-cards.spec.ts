import { expect, test, type Page } from "@playwright/test";
import { hasFathers, horizontalOverflow, preferEnglishFatherEdition } from "./helpers";

const didache = "/es/historia/obras/didache";
const panel = 'aside[data-side-panel][aria-label="Detalle del pasaje"]';
const field = `${panel} textarea[aria-label="Tu nota"]`;
const card = "[data-note-card]";
const cardAt = (ordinal: number) => `[data-note-card][data-verse="${ordinal}"]`;
const mark = (n: number) => `#d-${n} button:has-text("nota")`;
const root = "[data-father-text]";

const base = { book: "didache", chapter: 1, quote: null, from: null, to: null, createdAt: 1, updatedAt: 1 };
const seeded = [
  {
    ...base,
    id: "n1",
    scope: "unit",
    translationId: "didache",
    verse: 5,
    verseTo: 5,
    text: "El camino de la vida.",
  },
  {
    ...base,
    id: "n2",
    scope: "unit",
    translationId: "didache",
    verse: 5,
    verseTo: 5,
    text: "Segunda nota sobre lo mismo.",
    createdAt: 2,
    updatedAt: 2,
  },
  {
    ...base,
    id: "n3",
    scope: "words",
    translationId: "doctrina-ia-2026",
    verse: 9,
    verseTo: 9,
    from: 0,
    to: 12,
    quote: "Pero en cuanto",
    text: "Palabras en otra edición.",
  },
  {
    ...base,
    id: "n4",
    scope: "words",
    translationId: "didache",
    verse: 7,
    verseTo: 8,
    from: 0,
    to: 10,
    quote: "But concerning",
    text: "Pasa por dos divisiones.",
  },
];

async function openWithNotes(page: Page, width = 1440, tree: "open" | "closed" = "closed") {
  await preferEnglishFatherEdition(page);
  await page.addInitScript(
    ([notes, treeState]) => {
      if (!localStorage.getItem("doctrina-notes")) localStorage.setItem("doctrina-notes", JSON.stringify(notes));
      if (treeState === "closed") localStorage.setItem("doctrina-tree", "closed");
    },
    [seeded, tree] as const,
  );
  await page.setViewportSize({ width, height: 900 });
  await page.goto(didache);
  await page.evaluate(() => document.fonts.ready);
}

const highlightSize = (page: Page) =>
  page.evaluate(() => document.querySelectorAll("[data-note-overlay][data-shown] [data-note-range]").length);

const columnPlaces = (page: Page) =>
  page.evaluate(() => {
    const column = document.querySelector("[data-father-text]")!.getBoundingClientRect();
    const main = document.querySelector("main")!.getBoundingClientRect();
    return {
      centre: (column.left + column.right) / 2 - (main.left + main.right) / 2,
      left: column.left - main.left,
      right: main.right - column.right,
    };
  });

test.describe("Fathers' reader: note cards", () => {
  test.skip(!hasFathers, "needs the local Fathers corpus");
  test("with the tree closed, from 1083 px, a note is a card 40 px right of the column, level with its paragraph, and the margin mark is gone", async ({
    page,
  }) => {
    await openWithNotes(page);
    await expect(page.locator(card)).toHaveCount(4);
    const column = (await page.locator(root).boundingBox())!;
    const first = (await page.locator(cardAt(5)).first().boundingBox())!;
    const line = (await page.locator('#d-5 p[class*="verse-mid"]').boundingBox())!;
    expect(Math.abs(first.x - (column.x + column.width + 40))).toBeLessThan(2);
    expect(first.width).toBe(240);
    expect(Math.abs(first.y - line.y)).toBeLessThan(2);
    await expect(page.locator(mark(5))).toBeHidden();
    await expect(page.locator(cardAt(9))).toContainText("Didajé (Enseñanza de los Doce Apóstoles) 9, en IA 2026");
    await expect(page.locator(cardAt(7))).toContainText("Didajé (Enseñanza de los Doce Apóstoles) 7–8");
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });

  test("two cards on one paragraph keep 8 px between them", async ({ page }) => {
    await openWithNotes(page);
    const [one, two] = [
      (await page.locator(cardAt(5)).nth(0).boundingBox())!,
      (await page.locator(cardAt(5)).nth(1).boundingBox())!,
    ];
    expect(Math.abs(two.y - (one.y + one.height + 8))).toBeLessThan(1);
  });

  test("opening the panel puts the marks back and closing it brings the cards back", async ({ page }) => {
    await openWithNotes(page);
    await expect(page.locator(cardAt(5)).first()).toBeVisible();
    await page.locator('[data-division-open="d-10"]').click();
    await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
    await expect(page.locator(card).first()).toBeHidden();
    await expect(page.locator(mark(5))).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator(cardAt(5)).first()).toBeVisible();
    await expect(page.locator(mark(5))).toBeHidden();
  });

  test("with the tree closed, below 1083 px, there are no cards and the marks stay", async ({ page }) => {
    await openWithNotes(page, 1070);
    await expect(page.locator(mark(5))).toBeVisible();
    await expect(page.locator(card).first()).toBeHidden();
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });

  test("hovering or focusing a card marks the note's words; leaving clears them", async ({ page }) => {
    await openWithNotes(page);
    expect(await highlightSize(page)).toBe(0);
    await page.locator(cardAt(5)).first().hover();
    expect(await highlightSize(page)).toBe(1);
    await page.mouse.move(5, 5);
    expect(await highlightSize(page)).toBe(0);
    await page.locator(cardAt(7)).focus();
    expect(await highlightSize(page)).toBe(2);
    await page.locator(cardAt(7)).blur();
    expect(await highlightSize(page)).toBe(0);
  });

  test("a card opens the panel on its paragraph with the note ready to edit", async ({ page }) => {
    await openWithNotes(page);
    await page.locator(cardAt(5)).first().click();
    await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
    await expect(page.locator(field)).toHaveValue("El camino de la vida.");
  });

  test("the cards follow their paragraphs when the text grows", async ({ page }) => {
    await openWithNotes(page);
    const drift = async () =>
      Math.abs(
        (await page.locator(cardAt(9)).boundingBox())!.y -
          (await page.locator('#d-9 p[class*="verse-mid"]').boundingBox())!.y,
      );
    expect(await drift()).toBeLessThan(2);
    await page.locator("[data-reader-strip]").getByRole("button", { name: "Texto", exact: true }).click();
    await page.waitForTimeout(450);
    const larger = (await page.locator('button[aria-label="Agrandar el texto"]').boundingBox())!;
    await page.mouse.click(larger.x + larger.width / 2, larger.y + larger.height / 2);
    await expect
      .poll(async () => page.locator("#d-1 [data-verse-text]").evaluate((e) => getComputedStyle(e).fontSize))
      .toBe("21px");
    await expect.poll(drift).toBeLessThan(2);
  });

  test("a note on words made in this edition says only its reference", async ({ page }) => {
    await openWithNotes(page);
    await page.locator('[data-reader-strip] button[aria-haspopup="listbox"]').click();
    await page.locator('[data-reader-strip] [role=option][data-id="es"]').click();
    await expect(page.locator(cardAt(9))).toContainText("Didajé (Enseñanza de los Doce Apóstoles) 9");
    await expect(page.locator(cardAt(9))).not.toContainText("en IA 2026");
  });

  test("with the tree open the marks say «1 nota» below 1355 px and the cards come from there", async ({ page }) => {
    await openWithNotes(page, 1300, "open");
    await expect(page.locator("aside#site-sidebar")).toBeVisible();
    await expect(page.locator(mark(5))).toBeVisible();
    await expect(page.locator(card).first()).toBeHidden();
    await page.setViewportSize({ width: 1355, height: 900 });
    await expect(page.locator(cardAt(5)).first()).toBeVisible();
    await expect(page.locator(mark(5))).toBeHidden();
  });

  test("closing the tree with the menu swaps the marks for the cards, and opening it swaps them back", async ({
    page,
  }) => {
    await openWithNotes(page, 1300, "open");
    await expect(page.locator(mark(5))).toBeVisible();
    await page.locator("header [aria-controls='site-sidebar']").click();
    await expect(page.locator(cardAt(5)).first()).toBeVisible();
    await expect(page.locator(mark(5))).toBeHidden();
    await page.locator("header [aria-controls='site-sidebar']").click();
    await expect(page.locator(mark(5))).toBeVisible();
  });

  test("the column stays centred while the cards fit, and with no notes it is always centred", async ({ page }) => {
    await openWithNotes(page, 1440, "closed");
    expect(Math.abs((await columnPlaces(page)).centre)).toBeLessThan(1);
    await openWithNotes(page, 1600, "open");
    expect(Math.abs((await columnPlaces(page)).centre)).toBeLessThan(1);
    await page.addInitScript(() => localStorage.setItem("doctrina-notes", "[]"));
    await page.goto(didache);
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(500);
    expect(Math.abs((await columnPlaces(page)).centre)).toBeLessThan(1);
  });

  test("when the cards do not fit centred the column shifts left just enough, keeping 66 px for the numbers", async ({
    page,
  }) => {
    await openWithNotes(page, 1440, "open");
    await page.waitForTimeout(500);
    const open = await columnPlaces(page);
    expect(open.right).toBeCloseTo(297, 0);
    expect(open.left).toBeCloseTo(151, 0);
    const first = (await page.locator(cardAt(5)).first().boundingBox())!;
    expect(first.x + first.width).toBeCloseTo(1440 - 17, 0);
    await openWithNotes(page, 1100, "closed");
    await page.waitForTimeout(500);
    expect((await columnPlaces(page)).left).toBeCloseTo(83, 0);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
    await page.setViewportSize({ width: 1083, height: 900 });
    await page.waitForTimeout(500);
    expect((await columnPlaces(page)).left).toBeCloseTo(66, 0);
    await expect(page.locator(cardAt(5)).first()).toBeVisible();
  });

  test("the shift is continuous: 0 px at 1314 and growing as the window narrows", async ({ page }) => {
    await openWithNotes(page, 1314, "closed");
    await page.waitForTimeout(500);
    expect(Math.abs((await columnPlaces(page)).centre)).toBeLessThan(1);
    await page.setViewportSize({ width: 1200, height: 900 });
    await page.waitForTimeout(500);
    expect(-(await columnPlaces(page)).centre).toBeCloseTo(57, 0);
  });

  test("opening the panel hides the cards and the column recentres in the room left", async ({ page }) => {
    await openWithNotes(page, 1440, "open");
    await page.waitForTimeout(500);
    await page.locator('[data-division-open="d-10"]').click();
    await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
    await page.waitForTimeout(700);
    const room = await page.evaluate(() => {
      const main = document.querySelector("main")!;
      const rect = main.getBoundingClientRect();
      const style = getComputedStyle(main);
      const column = document.querySelector("[data-father-text]")!.getBoundingClientRect();
      const left = rect.left + parseFloat(style.paddingLeft);
      const right = rect.right - parseFloat(style.paddingRight);
      return (column.left + column.right) / 2 - (left + right) / 2;
    });
    expect(Math.abs(room)).toBeLessThan(1);
  });

  test("while «Tus notas» is open the cards give way to the marks and the column is not shifted", async ({ page }) => {
    await openWithNotes(page, 1440, "open");
    await page.waitForTimeout(500);
    await expect(page.locator(cardAt(5)).first()).toBeVisible();
    await page.locator("main [data-reader-strip] [data-your-notes]").click();
    await expect(page.locator('aside[data-side-panel][aria-label="Tus notas"]')).toHaveAttribute("data-open", "true");
    await expect(page.locator(card).first()).toBeHidden();
    await expect(page.locator(mark(5))).toBeVisible();
  });

  test("«Al lado» has no cards: the marks stay and the column is not shifted", async ({ page }) => {
    await page.addInitScript(() =>
      localStorage.setItem("doctrina-father-second-translation", JSON.stringify({ mode: "side", id: "es" })),
    );
    await openWithNotes(page, 1440, "closed");
    await expect(page.locator(root)).toHaveAttribute("data-second", "side");
    await expect(page.locator(card).first()).toBeHidden();
    await expect(page.locator(mark(5))).toBeVisible();
  });

  test("a paragraph with notes keeps the pen beside its locator while its card shows", async ({ page }) => {
    await openWithNotes(page);
    await page.locator(cardAt(5)).first().hover();
    await expect(page.locator(`#d-5 [data-note-pen]`).first()).toBeVisible();
  });
});
