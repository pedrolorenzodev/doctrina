import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, trackElement } from "./helpers";

const john = "/es/biblia/juan/6";
const panel = 'aside[data-side-panel][aria-label="Detalle del versículo"]';
const field = `${panel} textarea[aria-label="Tu nota"]`;
const card = "[data-note-card]";
const cardAt = (verse: number) => `[data-note-card][data-verse="${verse}"]`;
const mark = (n: number) => `#v-${n} button:has-text("nota")`;
const markFrames = "#v-53 button[class*=note-mark-in]:not([data-note-pen])";

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
  page.evaluate(() => document.querySelectorAll("[data-note-overlay][data-shown] [data-note-range]").length);

test("with the tree closed, from 1083 px, a note is a card 40 px right of the column, level with its verse, and the margin mark is gone", async ({
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

test("with the tree closed, below 1083 px, there are no cards and the marks stay", async ({ page }) => {
  await openWithNotes(page, 1070);
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

test("with the tree open the marks say «1 nota» below 1355 px and the cards come from there", async ({ page }) => {
  await openWithNotes(page, 1300, "open");
  await expect(page.locator("aside#site-sidebar")).toBeVisible();
  await expect(page.locator(mark(53))).toBeVisible();
  await expect(page.locator(card).first()).toBeHidden();
  await page.setViewportSize({ width: 1355, height: 900 });
  await expect(page.locator(cardAt(53)).first()).toBeVisible();
  await expect(page.locator(mark(53))).toBeHidden();
});

test("closing the tree with the menu swaps the marks for the cards, and opening it swaps them back", async ({
  page,
}) => {
  await openWithNotes(page, 1300, "open");
  await expect(page.locator(mark(53))).toBeVisible();
  await page.locator("header [aria-controls='site-sidebar']").click();
  await expect(page.locator(cardAt(53)).first()).toBeVisible();
  await expect(page.locator(mark(53))).toBeHidden();
  await page.locator("header [aria-controls='site-sidebar']").click();
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
  await openWithNotes(page, 1600, "open");
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
  expect(open.right).toBeCloseTo(297, 0);
  expect(open.left).toBeCloseTo(151, 0);
  const first = (await page.locator(cardAt(53)).first().boundingBox())!;
  expect(first.x + first.width).toBeCloseTo(1440 - 17, 0);
  await openWithNotes(page, 1100, "closed");
  await page.waitForTimeout(500);
  expect((await columnPlaces(page)).left).toBeCloseTo(83, 0);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  await page.setViewportSize({ width: 1083, height: 900 });
  await page.waitForTimeout(500);
  expect((await columnPlaces(page)).left).toBeCloseTo(66, 0);
  await expect(page.locator(cardAt(53)).first()).toBeVisible();
});

test("the shift is continuous: 0 px at 1314, growing as the window narrows, and it slides with the tree", async ({
  page,
}) => {
  await openWithNotes(page, 1314, "closed");
  await page.waitForTimeout(500);
  expect(Math.abs((await columnPlaces(page)).centre)).toBeLessThan(1);
  await page.setViewportSize({ width: 1200, height: 900 });
  await page.waitForTimeout(500);
  const shift = -(await columnPlaces(page)).centre;
  expect(shift).toBeCloseTo(57, 0);
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

test("in «En párrafo» on the BSB a card is level with its verse's first line, and the margin mark is gone while the card shows", async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem("doctrina-translation", "bsb");
    localStorage.setItem("doctrina-reader-format", "flow");
  });
  await openWithNotes(page);
  await expect(page.locator("[data-section-heading]").first()).toBeVisible();
  await expect(page.locator(card)).toHaveCount(4);
  for (const verse of [35, 53]) {
    const line = await page.evaluate(
      (n) => document.querySelector(`[data-verse-text="${n}"]`)!.getClientRects()[0]!.top,
      verse,
    );
    const placed = (await page.locator(cardAt(verse)).first().boundingBox())!;
    expect(Math.abs(placed.y - line)).toBeLessThan(2);
  }
  for (const verse of [35, 53, 57]) {
    const display = await page.evaluate(
      (n) => getComputedStyle(document.querySelector(`#v-${n} button[data-cards-shown]`)!).display,
      verse,
    );
    expect(display).toBe("none");
  }
});

const pen = (n: number) => `#v-${n} [data-note-pen]`;

test("a verse with notes has the pen icon between its number and its text, and the others have none", async ({
  page,
}) => {
  await openWithNotes(page);
  for (const verse of [35, 53, 57]) await expect(page.locator(pen(verse))).toBeVisible();
  for (const verse of [1, 54, 55]) await expect(page.locator(pen(verse))).toHaveCount(0);
  const place = await page.evaluate(() => {
    const unit = document.querySelector("#v-53")!;
    const number = unit.querySelector<HTMLElement>("span > span")!.getBoundingClientRect();
    const icon = unit.querySelector("[data-note-pen]")!.getBoundingClientRect();
    const text = unit.querySelector("[data-verse-text]")!.getClientRects()[0]!;
    return { numberRight: number.right, iconLeft: icon.left, iconRight: icon.right, textLeft: text.left };
  });
  expect(place.iconLeft).toBeGreaterThan(place.numberRight);
  expect(place.iconRight).toBeLessThanOrEqual(place.textLeft + 1);
  expect(await page.locator(pen(53)).innerText()).toBe("");
});

test("the pen opens the verse panel, the same as the margin mark and the card", async ({ page }) => {
  await openWithNotes(page);
  await page.locator(pen(53)).click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await expect(page.locator(panel)).toContainText("El discurso del pan de vida.");
});

test("with the panel open the pen stays and the label shows beside the number", async ({ page }) => {
  await openWithNotes(page);
  await page.locator("#v-10 [role=button]").click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await expect(page.locator(pen(53))).toBeVisible();
  await expect(page.locator(mark(53))).toBeVisible();
});

test("on a phone the pen sits in the number's row, next to the label, and the text is not indented", async ({
  page,
}) => {
  await openWithNotes(page, 390);
  await expect(page.locator(pen(53))).toBeVisible();
  const row = await page.evaluate(() => {
    const unit = document.querySelector("#v-53")!;
    const icon = unit.querySelector("[data-note-pen]")!.getBoundingClientRect();
    const label = unit.querySelector("button[data-cards-shown]")!.getBoundingClientRect();
    const box = unit.getBoundingClientRect();
    const first = unit.querySelector("[data-verse-text]")!.getClientRects()[0]!;
    return {
      iconTop: icon.top,
      labelTop: label.top,
      iconRight: icon.right,
      labelLeft: label.left,
      start: first.left - box.left,
      textTop: first.top,
      iconBottom: icon.bottom,
    };
  });
  expect(Math.abs(row.iconTop - row.labelTop)).toBeLessThan(8);
  expect(row.iconRight).toBeLessThanOrEqual(row.labelLeft);
  expect(row.start).toBe(12);
  expect(row.iconBottom).toBeLessThanOrEqual(row.textTop);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("in «En párrafo» the pen is inline after the small number and nothing overflows", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("doctrina-reader-format", "flow"));
  await openWithNotes(page);
  await expect(page.locator(pen(53))).toBeVisible();
  const box = (await page.locator(pen(53)).boundingBox())!;
  expect(box.width).toBeGreaterThan(8);
  expect(box.width).toBeLessThan(20);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("the number, the pen and the first line stay level with a big size and wide spacing in «Aa»", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("doctrina-reader-size", "25");
    localStorage.setItem(
      "doctrina-reader-text",
      JSON.stringify({ weight: 300, leading: 1.95, measure: 720, justify: false }),
    );
  });
  await openWithNotes(page);
  await expect(page.locator(pen(53))).toBeVisible();
  const level = await page.evaluate(() => {
    const unit = document.querySelector("#v-53")!;
    const middle = (box: { top: number; height: number }) => box.top + box.height / 2;
    const icon = middle(unit.querySelector("[data-note-pen]")!.getBoundingClientRect());
    const number = middle(unit.querySelector("span > span")!.getBoundingClientRect());
    const line = middle(unit.querySelector("[data-verse-text]")!.getClientRects()[0]!);
    return [icon - number, icon - line];
  });
  expect(Math.max(...level.map(Math.abs))).toBeLessThan(1.5);
});

test("the pen's hover lives on the icon only: the line of text beside it and the lines around it do nothing", async ({
  page,
}) => {
  await openWithNotes(page);
  const box = (await page.locator(pen(53)).boundingBox())!;
  const verse = (await page.locator("#v-53 [data-verse-text]").boundingBox())!;
  const idle = await page.locator(pen(53)).evaluate((element) => getComputedStyle(element).color);
  const before = await page.locator(pen(53)).evaluate((element) => getComputedStyle(element, "::before").content);
  expect(before).toBe("none");
  for (const [x, y] of [
    [box.x + box.width + 3, box.y + box.height / 2],
    [box.x + box.width + 12, box.y + box.height / 2],
    [verse.x + 8, box.y + box.height / 2],
    [box.x + box.width / 2, box.y - 10],
    [box.x + box.width / 2, box.y + box.height + 12],
  ] as const) {
    await page.mouse.move(x, y);
    await page.waitForTimeout(250);
    expect(await highlightSize(page)).toBe(0);
    expect(await page.locator(pen(53)).evaluate((element) => getComputedStyle(element).color)).toBe(idle);
  }
});

test("the number and the label are regular weight, as in the approved artifact", async ({ page }) => {
  await openWithNotes(page, 390);
  await expect(page.locator(mark(53))).toBeVisible();
  const weights = await page.evaluate(() => {
    const unit = document.querySelector("#v-53")!;
    const number = unit.querySelector("span > span")!;
    const label = unit.querySelector("button[data-cards-shown]")!;
    return [getComputedStyle(number).fontWeight, getComputedStyle(label).fontWeight];
  });
  expect(weights).toEqual(["400", "400"]);
});

test("hovering the pen marks the verse's words, turns the pen and every card of that verse to the accent; leaving clears it", async ({
  page,
}) => {
  await openWithNotes(page);
  const accent = (selector: string, property: "color" | "borderLeftColor") =>
    page
      .locator(selector)
      .first()
      .evaluate((element, key) => getComputedStyle(element)[key], property);
  const idle = await accent(pen(53), "color");
  await page.locator(pen(53)).hover();
  await expect.poll(() => highlightSize(page)).toBe(2);
  await expect.poll(() => accent(pen(53), "color")).not.toBe(idle);
  await expect
    .poll(async () => (await accent(cardAt(53), "borderLeftColor")) === (await accent(pen(53), "color")))
    .toBe(true);
  await expect.poll(() => accent(pen(57), "color")).toBe(idle);
  await page.mouse.move(5, 5);
  await expect.poll(() => highlightSize(page)).toBe(0);
  await expect.poll(() => accent(pen(53), "color")).toBe(idle);
});

test("hovering a card turns its pen to the accent, and the label does the same as the pen", async ({ page }) => {
  await openWithNotes(page);
  const idle = await page.locator(pen(53)).evaluate((element) => getComputedStyle(element).color);
  await page.locator(cardAt(53)).first().hover();
  await expect.poll(() => page.locator(pen(53)).evaluate((element) => getComputedStyle(element).color)).not.toBe(idle);
  await page.mouse.move(5, 5);
  await page.locator("#v-10 [role=button]").click();
  await expect(page.locator(mark(53))).toBeVisible();
  await page.locator(mark(53)).hover();
  await expect.poll(() => highlightSize(page)).toBe(2);
  await expect.poll(() => page.locator(pen(53)).evaluate((element) => getComputedStyle(element).color)).not.toBe(idle);
});

type Row = {
  number: { left: number; right: number; mid: number };
  icon: { left: number; right: number; mid: number; width: number } | null;
  label: { left: number; right: number; mid: number } | null;
  letter: { left: number; mid: number };
  unit: { left: number };
  otherLines: number[];
};

function measureRow(verse: number): Row {
  const unit = document.querySelector(`#v-${verse}`)!;
  const text = unit.querySelector("[data-verse-text]")!;
  const node = text.firstChild!.nodeType === 3 ? text.firstChild! : text.firstChild!.firstChild!;
  const letter = document.createRange();
  letter.setStart(node, 0);
  letter.setEnd(node, 1);
  const take = (box: DOMRect) => ({
    left: box.left,
    right: box.right,
    mid: box.top + box.height / 2,
    width: box.width,
  });
  const tag = unit.querySelector("button:not([data-note-pen])");
  const label = tag && tag.getBoundingClientRect().width > 0 ? take(tag.getBoundingClientRect()) : null;
  const icon = unit.querySelector("[data-note-pen]");
  return {
    number: take(unit.querySelector("span > span")!.getBoundingClientRect()),
    icon: icon ? take(icon.getBoundingClientRect()) : null,
    label,
    letter: take(letter.getBoundingClientRect()),
    unit: take(unit.getBoundingClientRect()),
    otherLines: [...text.getClientRects()]
      .filter((rect) => rect.top > text.getClientRects()[0]!.top + 2)
      .map((rect) => rect.left),
  };
}

const glued = { number: 8, icon: 8, label: 5, text: 8 };

test("lines: a verse with no note starts 8 px after its number; one with a note starts 23 px in on its first line only", async ({
  page,
}) => {
  await openWithNotes(page);
  await expect(page.locator(pen(53))).toBeVisible();
  const [plain, noted] = [await page.evaluate(measureRow, 54), await page.evaluate(measureRow, 53)];
  expect(noted.number.right).toBe(plain.number.right);
  expect(Math.abs(plain.letter.left - plain.number.right - glued.text)).toBeLessThan(0.5);
  expect(Math.abs(noted.letter.left - plain.letter.left - 23)).toBeLessThan(0.5);
  for (const left of [...plain.otherLines, ...noted.otherLines])
    expect(Math.abs(left - plain.letter.left)).toBeLessThan(1);
});

test("lines: number 8 px, icon 8 px, text; all three level with the first line", async ({ page }) => {
  await openWithNotes(page);
  await expect(page.locator(pen(53))).toBeVisible();
  for (const verse of [53, 57]) {
    const row = await page.evaluate(measureRow, verse);
    expect(row.icon!.width).toBe(15);
    expect(Math.abs(row.icon!.left - row.number.right - glued.number)).toBeLessThan(0.5);
    expect(Math.abs(row.letter.left - row.icon!.right - glued.icon)).toBeLessThan(0.5);
    expect(Math.abs(row.number.mid - row.letter.mid)).toBeLessThan(1.5);
    expect(Math.abs(row.icon!.mid - row.letter.mid)).toBeLessThan(1.5);
  }
});

test("lines with the label: number 8 px, icon 5 px, label 8 px, text; all four level", async ({ page }) => {
  await openWithNotes(page);
  await page.locator("#v-10 [role=button]").click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await expect(page.locator(mark(53))).toBeVisible();
  for (const verse of [53, 57]) {
    const row = await page.evaluate(measureRow, verse);
    expect(Math.abs(row.icon!.left - row.number.right - glued.number)).toBeLessThan(0.5);
    expect(Math.abs(row.label!.left - row.icon!.right - glued.label)).toBeLessThan(0.5);
    expect(Math.abs(row.letter.left - row.label!.right - glued.text)).toBeLessThan(0.5);
    for (const mid of [row.number.mid, row.icon!.mid, row.label!.mid])
      expect(Math.abs(mid - row.letter.mid)).toBeLessThan(1.5);
    for (const left of row.otherLines) expect(Math.abs(left - (row.unit.left + 12))).toBeLessThan(1);
  }
});

test("«En párrafo»: the number, the icon and the label are level with the first line and 8, 5 and 8 px apart; a plain number is 8 px from its text", async ({
  page,
}) => {
  await page.addInitScript(() => localStorage.setItem("doctrina-reader-format", "flow"));
  await openWithNotes(page);
  await page.locator("#v-10 [role=button]").click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await expect(page.locator(mark(53))).toBeVisible();
  const plain = await page.evaluate(measureRow, 54);
  expect(Math.abs(plain.letter.left - plain.number.right - glued.text)).toBeLessThan(0.5);
  expect(Math.abs(plain.number.mid - plain.letter.mid)).toBeLessThan(1.5);
  for (const verse of [53, 57]) {
    const row = await page.evaluate(measureRow, verse);
    expect(Math.abs(row.icon!.left - row.number.right - glued.number)).toBeLessThan(0.5);
    expect(Math.abs(row.label!.left - row.icon!.right - glued.label)).toBeLessThan(0.5);
    expect(Math.abs(row.letter.left - row.label!.right - glued.text)).toBeLessThan(0.5);
    for (const mid of [row.number.mid, row.icon!.mid, row.label!.mid])
      expect(Math.abs(mid - row.letter.mid)).toBeLessThan(1.5);
  }
});

test("«En párrafo» on a phone: number, icon and label stay together on one line", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("doctrina-reader-format", "flow"));
  await openWithNotes(page, 390);
  await expect(page.locator(mark(57))).toBeVisible();
  const row = await page.evaluate(measureRow, 57);
  expect(Math.abs(row.icon!.mid - row.number.mid)).toBeLessThan(1.5);
  expect(Math.abs(row.label!.mid - row.number.mid)).toBeLessThan(1.5);
  expect(Math.abs(row.letter.mid - row.number.mid)).toBeLessThan(1.5);
});

test("on a phone the number, the icon and the label share one centred row, 8 and 5 px apart", async ({ page }) => {
  await openWithNotes(page, 390);
  await expect(page.locator(mark(53))).toBeVisible();
  const row = await page.evaluate(measureRow, 53);
  expect(Math.abs(row.icon!.left - row.number.right - glued.number)).toBeLessThan(0.5);
  expect(Math.abs(row.label!.left - row.icon!.right - glued.label)).toBeLessThan(0.5);
  expect(Math.abs(row.icon!.mid - row.number.mid)).toBeLessThan(1);
  expect(Math.abs(row.label!.mid - row.number.mid)).toBeLessThan(1);
});
