import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, trackElement } from "./helpers";

const john = "/es/biblia/juan/6";
const panel = 'aside[data-side-panel][aria-label="Detalle del versículo"]';
const field = `${panel} textarea[aria-label="Tu nota"]`;
const card = "[data-note-card]";
const cardAt = (verse: number) => `[data-note-card][data-verse="${verse}"]`;
const mark = (n: number) => `#v-${n} button:has-text("nota")`;
const markFrames = "#v-53 button[class*=note-mark-in]";

const base = { book: "John", chapter: 6, quote: null, from: null, to: null, createdAt: 1, updatedAt: 1 };
const seeded = [
  {
    ...base,
    id: "n1",
    scope: "unit",
    translationId: "rv1909",
    verse: 53,
    verseTo: 53,
    text: "El discurso del pan de vida.",
  },
  {
    ...base,
    id: "n2",
    scope: "unit",
    translationId: "rv1909",
    verse: 53,
    verseTo: 53,
    text: "Segunda nota sobre lo mismo.",
    createdAt: 2,
    updatedAt: 2,
  },
  {
    ...base,
    id: "n3",
    scope: "words",
    translationId: "bsb",
    verse: 57,
    verseTo: 57,
    from: 0,
    to: 12,
    quote: "As the living",
    text: "Palabras en otra edición.",
  },
  {
    ...base,
    id: "n4",
    scope: "words",
    translationId: "rv1909",
    verse: 35,
    verseTo: 36,
    from: 0,
    to: 10,
    quote: "Y Jesús les",
    text: "Pasa por dos versículos.",
  },
];

async function openWithNotes(page: Page, width = 1440, tree: "open" | "closed" = "closed") {
  await page.addInitScript(
    ([notes, treeState]) => {
      if (!localStorage.getItem("doctrina-notes")) localStorage.setItem("doctrina-notes", JSON.stringify(notes));
      if (treeState === "closed") localStorage.setItem("doctrina-tree", "closed");
    },
    [seeded, tree] as const,
  );
  await page.setViewportSize({ width, height: 900 });
  await page.goto(john);
}

const highlightSize = (page: Page) =>
  page.evaluate(() => (CSS.highlights.get("note-words") as Highlight | undefined)?.size ?? 0);

test("with the tree closed, from 1066 px, a note is a card 40 px right of the column, level with its verse, and the margin mark is gone", async ({
  page,
}) => {
  await openWithNotes(page);
  await expect(page.locator(card)).toHaveCount(4);
  const column = (await page.locator("#v-1").locator("xpath=..").boundingBox())!;
  const first = (await page.locator(cardAt(53)).first().boundingBox())!;
  const verse = (await page.locator("#v-53").boundingBox())!;
  expect(Math.abs(first.x - (column.x + column.width + 40))).toBeLessThan(2);
  expect(first.width).toBe(240);
  expect(Math.abs(first.y - verse.y)).toBeLessThan(2);
  await expect(page.locator(mark(53))).toBeHidden();
  await expect(page.locator(cardAt(57))).toContainText("Juan 6:57, en BSB");
  await expect(page.locator(cardAt(35))).toContainText("Juan 6:35-36");
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("two cards on one verse keep 8 px between them", async ({ page }) => {
  await openWithNotes(page);
  const [one, two] = [
    (await page.locator(cardAt(53)).nth(0).boundingBox())!,
    (await page.locator(cardAt(53)).nth(1).boundingBox())!,
  ];
  expect(Math.abs(two.y - (one.y + one.height + 8))).toBeLessThan(1);
});

test("opening the panel puts the marks back and closing it brings the cards back", async ({ page }) => {
  await openWithNotes(page);
  await expect(page.locator(cardAt(53)).first()).toBeVisible();
  await page.locator("#v-10 [role=button]").click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await expect(page.locator(card).first()).toBeHidden();
  await expect(page.locator(mark(53))).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(cardAt(53)).first()).toBeVisible();
  await expect(page.locator(mark(53))).toBeHidden();
});

test("the marks fade in over about 200 ms when the panel opens; under reduced motion they are there at once", async ({
  page,
}) => {
  await openWithNotes(page);
  const frames = trackElement(page, markFrames, 500);
  await page.locator("#v-10 [role=button]").click();
  const shown = (await frames).filter((frame) => frame.height > 0);
  expect(shown.length).toBeGreaterThan(3);
  for (let index = 1; index < shown.length; index += 1) {
    expect(shown[index]!.opacity).toBeGreaterThanOrEqual(shown[index - 1]!.opacity - 0.001);
  }
  expect(shown[0]!.opacity).toBeLessThan(0.6);
  expect(shown[shown.length - 1]!.opacity).toBe(1);
  const reached = shown.find((frame) => frame.opacity === 1)!;
  expect(reached.t - shown[0]!.t).toBeLessThan(320);
});

test("under reduced motion the marks are fully opaque from their first frame", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openWithNotes(page);
  const frames = trackElement(page, markFrames, 400);
  await page.locator("#v-10 [role=button]").click();
  const shown = (await frames).filter((frame) => frame.height > 0);
  expect(shown.length).toBeGreaterThan(2);
  expect(shown.every((frame) => frame.opacity === 1)).toBe(true);
});

test("with the tree closed, below 1066 px, there are no cards and the marks stay", async ({ page }) => {
  await openWithNotes(page, 1040);
  await expect(page.locator(mark(53))).toBeVisible();
  await expect(page.locator(card).first()).toBeHidden();
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("hovering or focusing a card marks the note's words; leaving clears them", async ({ page }) => {
  await openWithNotes(page);
  expect(await highlightSize(page)).toBe(0);
  await page.locator(cardAt(53)).first().hover();
  expect(await highlightSize(page)).toBe(1);
  await page.mouse.move(5, 5);
  expect(await highlightSize(page)).toBe(0);
  await page.locator(cardAt(35)).focus();
  expect(await highlightSize(page)).toBe(2);
  await page.locator(cardAt(35)).blur();
  expect(await highlightSize(page)).toBe(0);
});

test("a card opens the panel on its verse with the note ready to edit", async ({ page }) => {
  await openWithNotes(page);
  await page.locator(cardAt(53)).first().click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await expect(page.locator(field)).toHaveValue("El discurso del pan de vida.");
});

test("the cards follow their verses when the text grows", async ({ page }) => {
  await openWithNotes(page);
  const drift = async () =>
    Math.abs((await page.locator(cardAt(57)).boundingBox())!.y - (await page.locator("#v-57").boundingBox())!.y);
  expect(await drift()).toBeLessThan(2);
  await page.locator("[data-reader-strip]").getByRole("button", { name: "Texto", exact: true }).click();
  await page.waitForTimeout(450);
  const larger = (await page.locator('button[aria-label="Agrandar el texto"]').boundingBox())!;
  await page.mouse.click(larger.x + larger.width / 2, larger.y + larger.height / 2);
  await expect(page.locator("#v-1")).toHaveCSS("font-size", "21px");
  await expect.poll(drift).toBeLessThan(2);
});

test("a note on words made in this edition says only its reference", async ({ page }) => {
  await openWithNotes(page);
  await page.locator('[data-reader-strip] button[aria-haspopup="listbox"]').click();
  await page.locator('[data-reader-strip] [role=option]:has-text("(BSB)")').click();
  await expect(page.locator(cardAt(57))).toContainText("Juan 6:57");
  await expect(page.locator(cardAt(57))).not.toContainText("en BSB");
});

test("with the tree open the marks say «1 nota» below 1338 px and the cards come from there", async ({ page }) => {
  await openWithNotes(page, 1300, "open");
  await expect(page.locator("aside#site-sidebar")).toBeVisible();
  await expect(page.locator(mark(53))).toBeVisible();
  await expect(page.locator(card).first()).toBeHidden();
  await page.setViewportSize({ width: 1338, height: 900 });
  await expect(page.locator(cardAt(53)).first()).toBeVisible();
  await expect(page.locator(mark(53))).toBeHidden();
});

test("closing the tree with the toggle swaps the marks for the cards, and opening it swaps them back", async ({
  page,
}) => {
  await openWithNotes(page, 1300, "open");
  await expect(page.locator(mark(53))).toBeVisible();
  await page.locator("[data-reader-strip] [data-tree-toggle]").click();
  await expect(page.locator(cardAt(53)).first()).toBeVisible();
  await expect(page.locator(mark(53))).toBeHidden();
  await page.locator("[data-reader-strip] [data-tree-toggle]").click();
  await expect(page.locator(mark(53))).toBeVisible();
});

const columnPlaces = (page: Page) =>
  page.evaluate(() => {
    const column = document.querySelector("[data-chapter-text]")!.getBoundingClientRect();
    const main = document.querySelector("main")!.getBoundingClientRect();
    return {
      centre: (column.left + column.right) / 2 - (main.left + main.right) / 2,
      left: column.left - main.left,
      right: main.right - column.right,
    };
  });

test("the column stays centred while the cards fit, and with no notes it is always centred", async ({ page }) => {
  await openWithNotes(page, 1440, "closed");
  expect(Math.abs((await columnPlaces(page)).centre)).toBeLessThan(1);
  await openWithNotes(page, 1552, "open");
  expect(Math.abs((await columnPlaces(page)).centre)).toBeLessThan(1);
  await page.addInitScript(() => localStorage.setItem("doctrina-notes", "[]"));
  await page.goto(john);
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
  expect(open.right).toBeCloseTo(280, 0);
  expect(open.left).toBeCloseTo(168, 0);
  const first = (await page.locator(cardAt(53)).first().boundingBox())!;
  expect(first.x + first.width).toBeLessThanOrEqual(1440);
  await openWithNotes(page, 1100, "closed");
  await page.waitForTimeout(500);
  expect((await columnPlaces(page)).left).toBeCloseTo(100, 0);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  await page.setViewportSize({ width: 1066, height: 900 });
  await page.waitForTimeout(500);
  expect((await columnPlaces(page)).left).toBeCloseTo(66, 0);
  await expect(page.locator(cardAt(53)).first()).toBeVisible();
});

test("the shift is continuous: 0 px at 1280, growing as the window narrows, and it slides with the tree", async ({
  page,
}) => {
  await openWithNotes(page, 1280, "closed");
  await page.waitForTimeout(500);
  expect(Math.abs((await columnPlaces(page)).centre)).toBeLessThan(1);
  await page.setViewportSize({ width: 1200, height: 900 });
  await page.waitForTimeout(500);
  const shift = -(await columnPlaces(page)).centre;
  expect(shift).toBeCloseTo(40, 0);
});

test("opening the verse panel hides the cards and the column recentres in the room left", async ({ page }) => {
  await openWithNotes(page, 1440, "open");
  await page.waitForTimeout(500);
  await page.locator("#v-10 [role=button]").click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(700);
  const room = await page.evaluate(() => {
    const main = document.querySelector("main")!;
    const rect = main.getBoundingClientRect();
    const style = getComputedStyle(main);
    const column = document.querySelector("[data-chapter-text]")!.getBoundingClientRect();
    const left = rect.left + parseFloat(style.paddingLeft);
    const right = rect.right - parseFloat(style.paddingRight);
    return (column.left + column.right) / 2 - (left + right) / 2;
  });
  expect(Math.abs(room)).toBeLessThan(1);
});

test("while «Tus notas» is open the cards give way to the marks and the column is not shifted", async ({ page }) => {
  await openWithNotes(page, 1440, "open");
  await page.waitForTimeout(500);
  await expect(page.locator(cardAt(53)).first()).toBeVisible();
  await page.locator("main [data-reader-strip] [data-your-notes]").click();
  await expect(page.locator('aside[data-side-panel][aria-label="Tus notas"]')).toHaveAttribute("data-open", "true");
  await expect(page.locator(card).first()).toBeHidden();
  await expect(page.locator(mark(53))).toBeVisible();
  await page.waitForTimeout(700);
  const room = await page.evaluate(() => {
    const main = document.querySelector("main")!;
    const rect = main.getBoundingClientRect();
    const style = getComputedStyle(main);
    const column = document.querySelector("[data-chapter-text]")!.getBoundingClientRect();
    const left = rect.left + parseFloat(style.paddingLeft);
    const right = rect.right - parseFloat(style.paddingRight);
    return (column.left + column.right) / 2 - (left + right) / 2;
  });
  expect(Math.abs(room)).toBeLessThan(1);
});
