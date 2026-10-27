import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, trackElement } from "./helpers";

const john = "/es/biblia/juan/6";
const panel = 'aside[data-side-panel][aria-label="Detalle del versículo"]';
const verseButton = (n: number) => `#v-${n} [role=button]`;
const strip = `${panel} [data-flip-block="sections-strip"]`;
const body = `${panel} [data-flip-block="sections-body"]`;
const indicator = `${strip} [data-slide-indicator]`;
const tab = (page: Page, name: RegExp) => page.locator(strip).getByRole("button", { name });

const base = { book: "John", chapter: 6, from: null, to: null, quote: null, createdAt: 1, updatedAt: 1700000000000 };
const notes = [
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

async function openVerse(page: Page, seeded = true, width = 1440) {
  if (seeded) {
    await page.addInitScript((saved) => {
      if (!localStorage.getItem("doctrina-notes")) localStorage.setItem("doctrina-notes", JSON.stringify(saved));
    }, notes);
  }
  await page.setViewportSize({ width, height: 900 });
  await page.goto(john);
  await page.locator(verseButton(53)).click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(500);
}

test("the verse panel has Notas, Palabras, Usos and Traducciones with their counts, in that order", async ({
  page,
}) => {
  await openVerse(page);
  const labels = page.locator(strip).getByRole("button");
  await expect(labels).toHaveCount(4);
  await expect(labels.nth(0)).toContainText("Notas");
  await expect(labels.nth(0)).toContainText("1");
  await expect(labels.nth(1)).toHaveText("Palabras");
  await expect(labels.nth(2)).toHaveText("Usos");
  await expect(labels.nth(3)).toContainText("Traducciones");
  await expect(labels.nth(0)).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(body)).toContainText("El discurso del pan de vida.");
});

test("«Palabras» and «Usos» are inert: pressing them changes nothing", async ({ page }) => {
  await openVerse(page);
  const before = await page.locator(body).innerText();
  await tab(page, /^Palabras/).click();
  await tab(page, /^Usos/).click();
  await page.waitForTimeout(500);
  await expect(tab(page, /^Notas/)).toHaveAttribute("aria-pressed", "true");
  await expect(tab(page, /^Palabras/)).toHaveAttribute("aria-pressed", "false");
  expect(await page.locator(body).innerText()).toBe(before);
});

test("«Traducciones» lists the other editions of the verse with their language", async ({ page }) => {
  await openVerse(page);
  await tab(page, /^Traducciones/).click();
  await expect(page.locator(body)).toContainText("inglés");
  await expect(page.locator(`${body} li`)).not.toHaveCount(0);
  await expect(page.locator(`${body} p[lang="en"]`).first()).toBeVisible();
  await expect(tab(page, /^Traducciones/)).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(body)).not.toContainText("The Jews therefore strove");
});

test("with no notes the first section is «Traducciones» and «Notas» is not offered", async ({ page }) => {
  await openVerse(page, false);
  await expect(page.locator(strip).getByRole("button", { name: /^Notas/ })).toHaveCount(0);
  await expect(tab(page, /^Traducciones/)).toHaveAttribute("aria-pressed", "true");
});

test("the indicator slides in about 340 ms and the content leaves and enters", async ({ page }) => {
  await openVerse(page);
  const before = (await page.locator(indicator).boundingBox())!;
  const slide = trackElement(page, indicator, 900);
  const content = trackElement(page, body, 900);
  await tab(page, /^Traducciones/).click();
  const [sampled, bodyFrames] = await Promise.all([slide, content]);
  const moving = sampled.filter(
    (frame) => frame.left > before.x + 1 && frame.left < sampled[sampled.length - 1]!.left - 1,
  );
  expect(moving.length).toBeGreaterThanOrEqual(3);
  const began = sampled.find((frame) => frame.left > before.x + 0.5)!.t;
  const done = sampled.find((frame) => frame.left >= sampled[sampled.length - 1]!.left - 0.5)!.t;
  expect(done - began).toBeGreaterThan(150);
  expect(done - began).toBeLessThan(520);
  const target = (await tab(page, /^Traducciones/).boundingBox())!;
  const after = (await page.locator(indicator).boundingBox())!;
  expect(Math.abs(after.x - target.x)).toBeLessThan(1.5);
  expect(Math.min(...bodyFrames.map((frame) => frame.opacity))).toBeLessThan(0.3);
  expect(bodyFrames[bodyFrames.length - 1]!.opacity).toBe(1);
});

test("under reduced motion the section changes at once", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openVerse(page);
  const frames = trackElement(page, body, 500);
  await tab(page, /^Traducciones/).click();
  const sampled = await frames;
  expect(sampled.every((frame) => frame.opacity === 1)).toBe(true);
  await expect(page.locator(body)).toContainText("inglés");
});

test("the note editor opens in «Notas» even from another section", async ({ page }) => {
  await openVerse(page);
  await tab(page, /^Traducciones/).click();
  await page.waitForTimeout(600);
  await page.locator(panel).getByRole("button", { name: "Nota", exact: true }).click();
  await expect(page.locator(`${panel} textarea[aria-label="Tu nota"]`)).toBeVisible();
  await expect(tab(page, /^Notas/)).toHaveAttribute("aria-pressed", "true");
});

test("«Citar» and «Copiar enlace» are as wide as their label, and the detail button sits 20 px under the section", async ({
  page,
}) => {
  await openVerse(page);
  const cite = (await page.locator(panel).getByRole("button", { name: "Citar", exact: true }).boundingBox())!;
  const link = (await page.locator(panel).getByRole("button", { name: "Copiar enlace", exact: true }).boundingBox())!;
  expect(cite.width).toBeLessThan(60);
  expect(cite.height).toBeCloseTo(40, 0);
  expect(link.width).toBeLessThan(115);
  expect(link.x - (cite.x + cite.width)).toBeCloseTo(4, 0);
  const bodyBox = (await page.locator(body).boundingBox())!;
  const detail = (await page.locator(panel).getByRole("button", { name: "Ver el detalle completo" }).boundingBox())!;
  expect(detail.y - (bodyBox.y + bodyBox.height)).toBeCloseTo(20, 0);
});

test("on a phone the strip fits and nothing overflows", async ({ page }) => {
  await openVerse(page, true, 390);
  await expect(page.locator(strip)).toBeVisible();
  const box = (await page.locator(strip).boundingBox())!;
  expect(box.x + box.width).toBeLessThanOrEqual(390);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});
