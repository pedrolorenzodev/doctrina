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
  await expect(
    page.locator(yourPanel).getByRole("button", { name: "Escribir una nota sobre toda la fuente" }),
  ).toBeVisible();
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
  await page
    .locator(yourPanel)
    .getByRole("button", { name: /Ordenar/ })
    .click();
  await page.locator(yourPanel).getByRole("option", { name: "Recientes" }).click();
  await expect(rows.nth(0)).toContainText("Juan 6:57");
});

test("in «Subrayados», a colour dot keeps one colour and the status counts them", async ({ page }) => {
  await openChapter(page);
  await yourButton(page).click();
  await page
    .locator(yourPanel)
    .getByRole("button", { name: /Subrayados/ })
    .click();
  await page.locator(yourPanel).getByRole("button", { name: "Solo celeste" }).click();
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

test("the field carries the «/» key hint, and each tab has its own placeholder", async ({ page }) => {
  await openChapter(page);
  await yourButton(page).click();
  await expect(page.locator(`${yourPanel} label kbd`)).toHaveText("/");
  await expect(page.locator(yourPanel).getByPlaceholder("Buscar en tus notas")).toBeVisible();
  await page
    .locator(yourPanel)
    .getByRole("button", { name: /Subrayados/ })
    .click();
  await expect(page.locator(yourPanel).getByPlaceholder("Buscar en lo subrayado")).toBeVisible();
});

test("«Mostrar» and «Ordenar» are labelled pickers with a list, and «Mostrar» filters by kind", async ({ page }) => {
  await openChapter(page);
  await yourButton(page).click();
  const show = page.locator(yourPanel).getByRole("button", { name: /Mostrar/ });
  await expect(show).toContainText("Todas");
  await show.click();
  await expect(page.locator(yourPanel).getByRole("option")).toHaveText(["Todas", "Sobre la fuente", "En el texto"]);
  await page.locator(yourPanel).getByRole("option", { name: "En el texto" }).click();
  await expect(page.locator(`${yourPanel} li button`)).toHaveCount(2);
  await expect(page.locator(`${yourPanel} p[role=status]`)).toHaveText("2 de 2 notas");
  await show.click();
  await page.locator(yourPanel).getByRole("option", { name: "Sobre la fuente" }).click();
  await expect(page.locator(yourPanel)).toContainText("Nada coincide con los filtros.");
});

test("notes unfiltered sit under «En el texto», with the button to write a note on the whole source above", async ({
  page,
}) => {
  await openChapter(page);
  await yourButton(page).click();
  const headings = page.locator(`${yourPanel} p`).filter({ hasText: /^(Sobre toda la fuente|En el texto)$/ });
  await expect(headings).toHaveText(["En el texto"]);
  await expect(
    page.locator(yourPanel).getByRole("button", { name: "Escribir una nota sobre toda la fuente" }),
  ).toBeVisible();
});

test("a note on the whole source is written in the panel, saved as the chapter's and listed under its own heading", async ({
  page,
}) => {
  await openChapter(page);
  await yourButton(page).click();
  await page.locator(yourPanel).getByRole("button", { name: "Escribir una nota sobre toda la fuente" }).click();
  const editor = page.locator(`${yourPanel} textarea[aria-label="Tu nota"]`);
  await expect(editor).toBeFocused();
  await editor.fill("Todo el capítulo habla del pan.");
  await page.waitForTimeout(700);
  const stored = await page.evaluate(() =>
    (
      JSON.parse(localStorage.getItem("doctrina-notes")!) as {
        scope: string;
        verse: number | null;
        book: string;
        chapter: number;
      }[]
    ).find((note) => note.scope === "source"),
  );
  expect(stored).toMatchObject({ scope: "source", verse: null, book: "John", chapter: 6 });
  await page.locator(yourPanel).getByRole("button", { name: "Tus notas", exact: true }).first().click();
  const headings = page.locator(`${yourPanel} p`).filter({ hasText: /^(Sobre toda la fuente|En el texto)$/ });
  await expect(headings).toHaveText(["Sobre toda la fuente", "En el texto"]);
  await expect(page.locator(`${yourPanel} li button`).first()).toContainText("Todo el capítulo habla del pan.");
  await expect(
    page.locator(yourPanel).getByRole("button", { name: "Escribir una nota sobre toda la fuente" }),
  ).toHaveCount(0);
});

const smooth = (frames: { t: number; top: number }[], from: number, to: number) => {
  const distance = Math.abs(to - from);
  const steps = frames.slice(1).map((frame, index) => Math.abs(frame.top - frames[index]!.top));
  expect(Math.abs(frames[0]!.top - from)).toBeLessThan(1);
  expect(Math.abs(frames[frames.length - 1]!.top - to)).toBeLessThan(1);
  expect(Math.max(...steps)).toBeLessThan(distance * 0.5);
  const moving = frames.filter((frame) => Math.abs(frame.top - from) > 0.5 && Math.abs(frame.top - to) > 0.5);
  expect(moving.length).toBeGreaterThan(5);
};

test("a query with no match and clearing it move the blocks below smoothly, never in one jump", async ({ page }) => {
  await openChapter(page);
  await yourButton(page).click();
  await expect(page.locator(yourPanel)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(600);
  const footer = `${yourPanel} [data-flip-block="footer"]`;
  const status = `${yourPanel} [data-flip-block="status"]`;
  const topOf = (selector: string) => page.locator(selector).evaluate((el) => el.getBoundingClientRect().top);
  const settled = async () => {
    await page.waitForTimeout(900);
  };
  const footerBefore = await topOf(footer);
  const [emptied] = await Promise.all([trackElement(page, footer, 900), search(page).fill("zzz")]);
  await settled();
  const footerEmpty = await topOf(footer);
  expect(footerEmpty).toBeLessThan(footerBefore - 40);
  smooth(emptied, footerBefore, footerEmpty);
  const [restored] = await Promise.all([
    trackElement(page, footer, 900),
    page.locator(yourPanel).getByRole("button", { name: "Quitar filtros" }).click(),
  ]);
  await settled();
  expect(Math.abs((await topOf(footer)) - footerBefore)).toBeLessThan(1);
  smooth(restored, footerEmpty, footerBefore);
  expect(await page.locator(status).count()).toBe(1);
});

test("typing a query that matches nothing keeps the field and filters still", async ({ page }) => {
  await openChapter(page);
  await yourButton(page).click();
  await page.waitForTimeout(600);
  const filters = `${yourPanel} [data-flip-block="filters"]`;
  const field = `${yourPanel} [data-flip-block="field"]`;
  const before = [
    await page.locator(field).evaluate((el) => el.getBoundingClientRect().top),
    await page.locator(filters).evaluate((el) => el.getBoundingClientRect().top),
  ];
  const [fieldFrames, filterFrames] = await Promise.all([
    trackElement(page, field, 900),
    trackElement(page, filters, 900),
    search(page).pressSequentially("zzz", { delay: 120 }),
  ]);
  expect(fieldFrames.every((frame) => Math.abs(frame.top - before[0]!) < 0.5)).toBe(true);
  expect(filterFrames.every((frame) => Math.abs(frame.top - before[1]!) < 0.5)).toBe(true);
});
