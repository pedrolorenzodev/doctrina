import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, trackElement } from "./helpers";

const john = "/es/biblia/juan/6";
const panel = 'aside[data-side-panel][aria-label="Detalle del versículo"]';
const dialog = '[role="alertdialog"]';
const fill = `${dialog} span[aria-hidden="true"]`;
const undoBar = "[role=status][data-open]";
const text =
  "Para borrar: una nota que dice bastante más de lo que cabe en noventa caracteres para ver el corte del extracto.";

const stored = (page: Page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem("doctrina-notes") ?? "[]") as { text: string }[]);

async function openDialog(page: Page, width = 1440) {
  await page.addInitScript((note) => {
    if (!localStorage.getItem("doctrina-notes")) {
      localStorage.setItem(
        "doctrina-notes",
        JSON.stringify([
          {
            id: "n1",
            scope: "unit",
            translationId: "rv1909",
            book: "John",
            chapter: 6,
            verse: 53,
            verseTo: 53,
            from: null,
            to: null,
            quote: null,
            text: note,
            createdAt: 1,
            updatedAt: 1,
          },
        ]),
      );
    }
  }, text);
  await page.setViewportSize({ width, height: 900 });
  await page.goto(john);
  await page.locator("#v-53 [role=button]").click();
  await page
    .locator(panel)
    .getByRole("button", { name: /Para borrar/ })
    .click();
  await page.locator(panel).getByRole("button", { name: "Borrar nota" }).click();
  await expect(page.locator(dialog)).toBeVisible();
}

const holdButton = (page: Page) => page.locator(dialog).getByRole("button", { name: "Mantener para borrar" });

async function startSampling(page: Page) {
  await page.evaluate(() => {
    const store: [number, number][] = [];
    (window as unknown as { __ratios: [number, number][] }).__ratios = store;
    const start = performance.now();
    const tick = () => {
      const bar = document.querySelector('[role="alertdialog"] span[aria-hidden="true"]');
      if (bar && bar.parentElement) {
        const ratio = bar.getBoundingClientRect().width / bar.parentElement.getBoundingClientRect().width;
        store.push([Math.round(performance.now() - start), ratio]);
      }
      if (performance.now() - start < 5000) requestAnimationFrame(tick);
    };
    tick();
  });
}

const ratios = (page: Page) => page.evaluate(() => (window as unknown as { __ratios: [number, number][] }).__ratios);

async function press(page: Page) {
  const box = (await holdButton(page).boundingBox())!;
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
}

test("it is a modal alert dialog: named, with the note's place and first 90 characters, focus on «Cancelar», the page inert, Tab trapped", async ({
  page,
}) => {
  await openDialog(page);
  await expect(page.locator(dialog)).toHaveAttribute("aria-modal", "true");
  await expect(page.locator(dialog)).toHaveAccessibleName("Borrar esta nota");
  await expect(page.locator(dialog)).toContainText("Juan 6:53");
  await expect(page.locator(dialog)).toContainText(`${text.slice(0, 90).trimEnd()}…`);
  await expect(page.locator(dialog).getByRole("button", { name: "Cancelar" })).toBeFocused();
  expect(await page.evaluate(() => Boolean(document.querySelector("main")?.closest("[inert]")))).toBe(true);
  await page.keyboard.press("Tab");
  await expect(holdButton(page)).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.locator(dialog).getByRole("button", { name: "Cancelar" })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(holdButton(page)).toBeFocused();
});

test("Esc and «Cancelar» close it without deleting and give focus back to «Borrar nota»", async ({ page }) => {
  await openDialog(page);
  await page.keyboard.press("Escape");
  await expect(page.locator(dialog)).toHaveCount(0);
  expect(await stored(page)).toHaveLength(1);
  await expect(page.locator(panel).getByRole("button", { name: "Borrar nota" })).toBeFocused();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await page.locator(panel).getByRole("button", { name: "Borrar nota" }).click();
  await page.locator(dialog).getByRole("button", { name: "Cancelar" }).click();
  await expect(page.locator(dialog)).toHaveCount(0);
  expect(await stored(page)).toHaveLength(1);
});

test("holding the button fills it linearly over 3 s, then deletes the note and offers the undo", async ({ page }) => {
  await openDialog(page);
  await startSampling(page);
  await press(page);
  await page.waitForTimeout(3500);
  await page.mouse.up();
  await expect(page.locator(dialog)).toHaveCount(0);
  expect(await stored(page)).toHaveLength(0);
  await expect(page.locator(undoBar)).toContainText("Nota borrada.");
  const frames = (await ratios(page)).filter(([, ratio]) => ratio > 0.001);
  const start = frames[0]![0];
  for (let index = 1; index < frames.length; index += 1) {
    expect(frames[index]![1]).toBeGreaterThanOrEqual(frames[index - 1]![1] - 0.001);
  }
  const half = frames.find(([time]) => time - start >= 1500)!;
  expect(Math.abs(half[1] - 0.5)).toBeLessThan(0.1);
  expect(frames[frames.length - 1]![0] - start).toBeGreaterThan(2700);
  expect(frames[frames.length - 1]![0] - start).toBeLessThan(3400);
  await page.locator(undoBar).getByRole("button", { name: "Deshacer" }).click();
  await expect.poll(async () => (await stored(page)).length).toBe(1);
});

test("letting go early returns the fill in about 220 ms and says the note was not deleted", async ({ page }) => {
  await openDialog(page);
  await press(page);
  await page.waitForTimeout(900);
  await startSampling(page);
  await page.mouse.up();
  await expect(page.locator(dialog)).toContainText("Soltaste antes de tiempo. La nota no se borró.");
  await page.waitForTimeout(600);
  expect(await stored(page)).toHaveLength(1);
  const all = await ratios(page);
  const peak = all.reduce((best, frame, index) => (frame[1] > all[best]![1] ? index : best), 0);
  const frames = all.slice(peak);
  expect(frames[0]![1]).toBeGreaterThan(0.15);
  for (let index = 1; index < frames.length; index += 1) {
    expect(frames[index]![1]).toBeLessThanOrEqual(frames[index - 1]![1] + 0.001);
  }
  const gone = frames.find(([, ratio]) => ratio < 0.01)!;
  expect(gone[0] - frames[0]![0]).toBeLessThan(330);
});

test("Enter held for 3 s deletes; Space let go early does not", async ({ page }) => {
  await openDialog(page);
  await page.keyboard.press("Tab");
  await expect(holdButton(page)).toBeFocused();
  await page.keyboard.down(" ");
  await page.waitForTimeout(500);
  await page.keyboard.up(" ");
  expect(await stored(page)).toHaveLength(1);
  await expect(page.locator(dialog)).toContainText("Soltaste antes de tiempo");
  await page.keyboard.down("Enter");
  await page.waitForTimeout(3500);
  await page.keyboard.up("Enter");
  await expect(page.locator(dialog)).toHaveCount(0);
  expect(await stored(page)).toHaveLength(0);
});

test("moving focus away from the button counts as letting go", async ({ page }) => {
  await openDialog(page);
  await page.keyboard.press("Tab");
  await page.keyboard.down("Enter");
  await page.waitForTimeout(400);
  await page.locator(dialog).getByRole("button", { name: "Cancelar" }).focus();
  await expect(page.locator(dialog)).toContainText("Soltaste antes de tiempo");
  await page.keyboard.up("Enter");
  expect(await stored(page)).toHaveLength(1);
});

test("under reduced motion the hold still lasts 3 s and the fill moves in steps", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openDialog(page);
  await startSampling(page);
  const began = Date.now();
  await press(page);
  await expect(page.locator(dialog)).toHaveCount(0, { timeout: 5000 });
  const took = Date.now() - began;
  expect(took).toBeGreaterThan(2800);
  expect(took).toBeLessThan(3800);
  await page.mouse.up();
  const seen = new Set((await ratios(page)).map(([, ratio]) => Math.round(ratio * 3) / 3));
  expect([...seen].every((value) => [0, 1 / 3, 2 / 3, 1].some((step) => Math.abs(step - value) < 0.01))).toBe(true);
});

test("the dialog fades in over the backdrop in 150 ms and its box rises 6 px in about 200 ms", async ({ page }) => {
  await page.addInitScript((note) => {
    localStorage.setItem(
      "doctrina-notes",
      JSON.stringify([
        {
          id: "n1",
          scope: "unit",
          translationId: "rv1909",
          book: "John",
          chapter: 6,
          verse: 53,
          verseTo: 53,
          from: null,
          to: null,
          quote: null,
          text: note,
          createdAt: 1,
          updatedAt: 1,
        },
      ]),
    );
  }, text);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator("#v-53 [role=button]").click();
  await page
    .locator(panel)
    .getByRole("button", { name: /Para borrar/ })
    .click();
  const frames = trackElement(page, dialog, 500);
  await page.locator(panel).getByRole("button", { name: "Borrar nota" }).click();
  const shown = await frames;
  expect(shown.length).toBeGreaterThan(4);
  for (let index = 1; index < shown.length; index += 1) {
    expect(shown[index]!.top).toBeLessThanOrEqual(shown[index - 1]!.top + 0.01);
    expect(shown[index]!.opacity).toBeGreaterThanOrEqual(shown[index - 1]!.opacity - 0.001);
  }
  expect(shown[0]!.top - shown[shown.length - 1]!.top).toBeGreaterThan(4);
  expect(shown[0]!.top - shown[shown.length - 1]!.top).toBeLessThan(7);
  const settled = shown.find((frame) => frame.top === shown[shown.length - 1]!.top)!;
  expect(settled.t - shown[0]!.t).toBeLessThan(300);
});

test("a note not saved yet is closed without asking; the danger colours follow the theme", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator("#v-10 [role=button]").click();
  await page.locator(panel).getByRole("button", { name: "Nota", exact: true }).click();
  await page.locator(panel).getByRole("button", { name: "Borrar nota" }).click();
  await expect(page.locator(dialog)).toHaveCount(0);
  await expect(page.locator(panel).locator("textarea")).toHaveCount(0);
  await page.emulateMedia({ colorScheme: "dark" });
  await openDialog(page);
  await expect(page.locator(dialog)).toHaveCSS("border-top-color", /rgb\((156, 47, 40|232, 145, 138)\)/);
});

test("on a phone it fits the width and keeps the buttons reachable", async ({ page }) => {
  await openDialog(page, 390);
  const box = (await page.locator(dialog).boundingBox())!;
  expect(box.x).toBeGreaterThanOrEqual(15);
  expect(box.x + box.width).toBeLessThanOrEqual(375);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  const hold = (await holdButton(page).boundingBox())!;
  expect(hold.y + hold.height).toBeLessThanOrEqual(844);
});
