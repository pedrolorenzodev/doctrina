import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

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
