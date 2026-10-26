import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, trackElement } from "./helpers";

const john = "/es/biblia/juan/6";
const panel = "aside[data-side-panel]";
const yourPanel = `${panel}[aria-label="Tus notas"]`;
const field = `${panel} textarea[aria-label="Tu nota"]`;
const strip = "main [data-reader-strip]";

const base = { book: "John", chapter: 6, from: null, to: null, quote: null, createdAt: 1, updatedAt: 1700000000000 };
const notes = [
  {
    ...base,
    id: "n2",
    scope: "unit",
    translationId: "rv1909",
    verse: 57,
    verseTo: 57,
    text: "Sobre el Padre viviente.",
  },
  {
    ...base,
    id: "n1",
    scope: "unit",
    translationId: "rv1909",
    verse: 53,
    verseTo: 53,
    text: "El discurso del pan de vida.",
  },
];
const marks = [
  { id: "h1", translationId: "rv1909", book: "John", chapter: 6, verse: 54, from: 0, to: 20, color: "sky", at: 1 },
  { id: "h2", translationId: "rv1909", book: "John", chapter: 6, verse: 35, from: 0, to: 14, color: "pink", at: 2 },
  { id: "h3", translationId: "bsb", book: "John", chapter: 6, verse: 40, from: 0, to: 10, color: "green", at: 3 },
];

async function openChapter(page: Page, width = 1440, seeded = true) {
  if (seeded) {
    await page.addInitScript(
      ([savedNotes, savedMarks]) => {
        if (localStorage.getItem("doctrina-notes")) return;
        localStorage.setItem("doctrina-notes", JSON.stringify(savedNotes));
        localStorage.setItem("doctrina-highlights", JSON.stringify(savedMarks));
      },
      [notes, marks] as const,
    );
  }
  await page.setViewportSize({ width, height: 900 });
  await page.goto(john);
}

const yourButton = (page: Page) => page.locator(`${strip} [data-your-notes]`);

test("the strip has «Tus notas» with the count of this chapter's notes, left of «Aa»", async ({ page }) => {
  await openChapter(page);
  await expect(yourButton(page)).toContainText("Tus notas");
  await expect(yourButton(page)).toContainText("2");
  const button = (await yourButton(page).boundingBox())!;
  const size = (await page.locator(strip).getByRole("button", { name: "Texto", exact: true }).boundingBox())!;
  expect(button.x + button.width).toBeLessThan(size.x);
});

test("it lists the notes in text order with their place and date, and the highlights of this edition only", async ({
  page,
}) => {
  await openChapter(page);
  await yourButton(page).click();
  await expect(page.locator(yourPanel)).toHaveAttribute("data-open", "true");
  const rows = page.locator(`${yourPanel} li button`);
  await expect(rows).toHaveCount(2);
  await expect(rows.nth(0)).toContainText("Juan 6:53");
  await expect(rows.nth(0)).toContainText("El discurso del pan de vida.");
  await expect(rows.nth(1)).toContainText("Juan 6:57");
  await page
    .locator(yourPanel)
    .getByRole("button", { name: /Subrayados/ })
    .click();
  await expect(rows).toHaveCount(2);
  await expect(rows.nth(0)).toContainText("Juan 6:35");
  await expect(rows.nth(1)).toContainText("Juan 6:54");
  await expect(page.locator(yourPanel)).toContainText("Se guardan en este navegador.");
});

test("a note row closes the list and opens the verse panel with the note ready to edit", async ({ page }) => {
  await openChapter(page);
  await yourButton(page).click();
  await page.locator(`${yourPanel} li button`).nth(1).click();
  await expect(page.locator(yourPanel)).toHaveAttribute("data-open", "false");
  await expect(page.locator(`${panel}[aria-label="Detalle del versículo"]`)).toHaveAttribute("data-open", "true");
  await expect(page.locator(field)).toHaveValue("Sobre el Padre viviente.");
});

test("opening a verse closes the list, and the list closes the verse panel; Esc closes the list", async ({ page }) => {
  await openChapter(page);
  await yourButton(page).click();
  await page.locator("#v-10 [role=button]").click();
  await expect(page.locator(yourPanel)).toHaveAttribute("data-open", "false");
  await expect(page.locator(`${panel}[aria-label="Detalle del versículo"]`)).toHaveAttribute("data-open", "true");
  await yourButton(page).click();
  await expect(page.locator(`${panel}[aria-label="Detalle del versículo"]`)).toHaveAttribute("data-open", "false");
  await expect(page.locator(yourPanel)).toHaveAttribute("data-open", "true");
  await page.keyboard.press("Escape");
  await expect(page.locator(yourPanel)).toHaveAttribute("data-open", "false");
});

test("«Copiar todas con sus citas» copies each note with its short citation", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await openChapter(page);
  await yourButton(page).click();
  await page.locator(yourPanel).getByRole("button", { name: "Copiar todas con sus citas" }).click();
  await expect(page.locator(yourPanel).getByText("Copiado", { exact: true }).first()).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "El discurso del pan de vida. Juan 6:53 (RV1909)\n\nSobre el Padre viviente. Juan 6:57 (RV1909)",
  );
});

test("with nothing saved the list says so", async ({ page }) => {
  await openChapter(page, 1440, false);
  await expect(yourButton(page)).not.toContainText(/\d/);
  await yourButton(page).click();
  await expect(page.locator(yourPanel)).toContainText("Aún no hay notas en este capítulo.");
  await page
    .locator(yourPanel)
    .getByRole("button", { name: /Subrayados/ })
    .click();
  await expect(page.locator(yourPanel)).toContainText("Aún no hay subrayados en este capítulo.");
});

test("on a phone the button leaves the strip and sits under the title; the list is a half sheet", async ({ page }) => {
  await openChapter(page, 390);
  await expect(yourButton(page).first()).toBeHidden();
  const under = page.locator("main [data-your-notes]:visible").first();
  await expect(under).toBeVisible();
  await under.click();
  await expect(page.locator(yourPanel)).toHaveAttribute("data-open", "true");
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

const search = (page: Page) => page.locator(`${yourPanel} input[aria-label="Buscar en tus notas"]`);

test("the search field filters notes ignoring case and accents, marks the match and counts them", async ({ page }) => {
  await openChapter(page);
  await yourButton(page).click();
  await search(page).fill("PADRÉ");
  const rows = page.locator(`${yourPanel} li button`);
  await expect(rows).toHaveCount(1);
  await expect(rows.first()).toContainText("Juan 6:57");
  await expect(rows.first().locator("mark")).toHaveText("Padre");
  await expect(page.locator(`${yourPanel} p[role=status]`)).toHaveText("1 de 2 notas");
});

test("«/» focuses the field, Esc clears it first and only then closes the panel", async ({ page }) => {
  await openChapter(page);
  await yourButton(page).click();
  await expect(page.locator(yourPanel)).toHaveAttribute("data-open", "true");
  await page.locator(yourPanel).getByRole("button", { name: "Cerrar" }).focus();
  await page.keyboard.press("/");
  await expect(search(page)).toBeFocused();
  await page.keyboard.type("pan");
  await page.keyboard.press("Escape");
  await expect(search(page)).toHaveValue("");
  await expect(page.locator(yourPanel)).toHaveAttribute("data-open", "true");
  await page.keyboard.press("Escape");
  await expect(page.locator(yourPanel)).toHaveAttribute("data-open", "false");
});

test("a search with no match says so and «Quitar filtros» brings the list back", async ({ page }) => {
  await openChapter(page);
  await yourButton(page).click();
  await search(page).fill("zzz");
  await expect(page.locator(yourPanel)).toContainText("Ninguna nota dice «zzz».");
  await expect(page.locator(`${yourPanel} li`)).toHaveCount(0);
  await page.locator(yourPanel).getByRole("button", { name: "Quitar filtros" }).click();
  await expect(search(page)).toHaveValue("");
  await expect(page.locator(`${yourPanel} li button`)).toHaveCount(2);
});

test("«Ordenar» puts the most recent note first", async ({ page }) => {
  await page.addInitScript(
    (saved) => {
      localStorage.setItem("doctrina-notes", JSON.stringify(saved));
    },
    [
      { ...notes[1], updatedAt: 1700000000000 },
      { ...notes[0], updatedAt: 1800000000000 },
    ],
  );
  await openChapter(page, 1440, false);
  await yourButton(page).click();
  const rows = page.locator(`${yourPanel} li button`);
  await expect(rows.nth(0)).toContainText("Juan 6:53");
  await page.locator(yourPanel).getByLabel("Ordenar").selectOption("recent");
  await expect(rows.nth(0)).toContainText("Juan 6:57");
});

test("in «Subrayados», «Mostrar» keeps one colour and the status counts them", async ({ page }) => {
  await openChapter(page);
  await yourButton(page).click();
  await page
    .locator(yourPanel)
    .getByRole("button", { name: /Subrayados/ })
    .click();
  await page.locator(yourPanel).getByLabel("Mostrar").selectOption("sky");
  const rows = page.locator(`${yourPanel} li button`);
  await expect(rows).toHaveCount(1);
  await expect(rows.first()).toContainText("Juan 6:54");
  await expect(page.locator(`${yourPanel} p[role=status]`)).toHaveText("1 de 2 subrayados");
});

test("the filters fit a phone and the field is 44 px high on touch", async ({ page }) => {
  await openChapter(page, 390);
  await page.locator("main [data-your-notes]:visible").first().click();
  await expect(page.locator(yourPanel)).toHaveAttribute("data-open", "true");
  await expect(search(page)).toBeVisible();
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("«Descargar en Markdown» saves the notes of the chapter as a .md file", async ({ page }) => {
  await openChapter(page);
  await yourButton(page).click();
  const download = page.waitForEvent("download");
  await page.locator(yourPanel).getByRole("button", { name: "Descargar en Markdown (.md)" }).click();
  const file = await download;
  expect(file.suggestedFilename()).toBe("juan-6-notas.md");
  const path = await file.path();
  const { readFileSync } = await import("node:fs");
  expect(readFileSync(path, "utf8")).toBe(
    "# Tus notas, Juan 6\n\n## Juan 6:53\n\nEl discurso del pan de vida.\n\n14 nov 2023\n\n## Juan 6:57\n\nSobre el Padre viviente.\n\n14 nov 2023\n",
  );
});

test("the tab indicator slides to the chosen tab in about 340 ms, and jumps under reduced motion", async ({ page }) => {
  await openChapter(page);
  await yourButton(page).click();
  await expect(page.locator(yourPanel)).toHaveAttribute("data-open", "true");
  const indicator = `${yourPanel} [data-slide-indicator]`;
  const tab = page.locator(yourPanel).getByRole("button", { name: /Subrayados/ });
  const before = (await page.locator(indicator).boundingBox())!;
  const frames = trackElement(page, indicator, 700);
  await tab.click();
  const sampled = await frames;
  const moving = sampled.filter(
    (frame) => frame.left > before.x + 1 && frame.left < sampled[sampled.length - 1]!.left - 1,
  );
  expect(moving.length).toBeGreaterThanOrEqual(3);
  const began = sampled.find((frame) => frame.left > before.x + 0.5)!.t;
  const done = sampled.find((frame) => frame.left >= sampled[sampled.length - 1]!.left - 0.5)!.t;
  expect(done - began).toBeGreaterThan(200);
  expect(done - began).toBeLessThan(520);
  const tabBox = (await tab.boundingBox())!;
  const after = (await page.locator(indicator).boundingBox())!;
  expect(Math.abs(after.x - tabBox.x)).toBeLessThan(1.5);
  expect(Math.abs(after.width - tabBox.width)).toBeLessThan(1.5);
  await page.emulateMedia({ reducedMotion: "reduce" });
  const instant = trackElement(page, indicator, 500);
  await page
    .locator(yourPanel)
    .getByRole("button", { name: /^Notas/ })
    .click();
  const jumped = await instant;
  expect(jumped.filter((frame) => frame.left > before.x + 1 && frame.left < after.x - 1)).toHaveLength(0);
});
