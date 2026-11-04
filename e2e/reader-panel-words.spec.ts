import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, trackElement } from "./helpers";

const panel = 'aside[data-side-panel]:has([data-flip-block="sections-strip"])';
const strip = `${panel} [data-flip-block="sections-strip"]`;
const list = `${panel} ul[aria-label="Palabras del versículo"]`;
const rows = `${list} > li > button[aria-expanded]`;

async function openWords(page: Page, path: string, verse: number, width = 1440) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(path);
  await page.locator(`#v-${verse} [role=button]`).first().click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(500);
  await page
    .locator(strip)
    .getByRole("button", { name: /^(Palabras|Words)/ })
    .click();
  await page.waitForTimeout(700);
}

test("John 6:53 lists its 28 words with Greek, Spanish gloss and transliteration", async ({ page }) => {
  await openWords(page, "/es/biblia/juan/6", 53);
  await expect(page.locator(rows)).toHaveCount(28);
  const sarka = page.locator(rows).nth(13);
  await expect(sarka.locator('[lang="grc"]')).toHaveText("σάρκα");
  await expect(sarka).toContainText("carne");
  await expect(sarka).toContainText("sarka");
  const family = await sarka.locator('[lang="grc"]').evaluate((element) => getComputedStyle(element).fontFamily);
  expect(family).toMatch(/gentium/i);
  await expect(page.locator(strip).getByRole("button", { name: /^Palabras/ })).toContainText("28");
});

test("a word without a Spanish gloss shows the English one, labelled", async ({ page }) => {
  await openWords(page, "/es/biblia/juan/6", 53);
  const row = page.locator(rows).nth(11);
  await expect(row.locator('[lang="grc"]')).toHaveText("φάγητε");
  await expect(row.locator('[lang="en"]')).toContainText("you shall have eaten");
  await expect(row).toContainText("inglés");
});

test("opening a word shows its card with Strong, counts, parse and base word; closing hides it", async ({ page }) => {
  await openWords(page, "/es/biblia/juan/6", 53);
  const sarka = page.locator(rows).nth(13);
  const card = page.locator(`${list} > li`).nth(13).locator("> div");
  await expect(card).toBeHidden();
  await sarka.click();
  await expect(sarka).toHaveAttribute("aria-expanded", "true");
  await page.waitForTimeout(500);
  await expect(card).toBeVisible();
  await expect(card).toContainText("G4561");
  await expect(card).toContainText("147 veces, 12 versículos en Juan");
  await expect(card).toContainText("Sustantivo, acusativo femenino singular");
  await expect(card.locator("dd", { hasText: "σάρξ" })).toContainText("(sarx)");
  await expect(card.getByRole("button", { name: /Abrir el estudio de σάρξ/ })).toBeVisible();
  await sarka.click();
  await expect(sarka).toHaveAttribute("aria-expanded", "false");
  await page.waitForTimeout(900);
  await expect(card).toBeHidden();
});

test("the card opens on a monotonic height tween of about 380 ms and closes after fading", async ({ page }) => {
  await openWords(page, "/es/biblia/juan/6", 53);
  const card = `${list} > li:nth-child(14) > div`;
  const frames = page.evaluate(
    (selector) =>
      new Promise<{ t: number; height: number; opacity: number }[]>((resolve) => {
        const out: { t: number; height: number; opacity: number }[] = [];
        const start = performance.now();
        const tick = () => {
          const element = document.querySelector(selector);
          if (element) {
            const style = getComputedStyle(element);
            out.push({
              t: Math.round(performance.now() - start),
              height: element.getBoundingClientRect().height,
              opacity: Number(style.opacity),
            });
          }
          if (performance.now() - start < 700) requestAnimationFrame(tick);
          else resolve(out);
        };
        tick();
      }),
    card,
  );
  await page.locator(rows).nth(13).click();
  const opening = await frames;
  const visible = opening.filter((frame) => frame.height > 0);
  expect(visible.length).toBeGreaterThan(8);
  for (let index = 1; index < visible.length; index += 1)
    expect(visible[index]!.height).toBeGreaterThanOrEqual(visible[index - 1]!.height - 0.5);
  expect(visible[0]!.height).toBeLessThan(120);
  const full = visible.at(-1)!.height;
  expect(full).toBeGreaterThan(300);
  const closing = trackElement(page, card, 700);
  await page.locator(rows).nth(13).click();
  const closed = await closing;
  const early = closed.filter((frame) => frame.t < 150);
  expect(early.at(-1)!.opacity).toBeLessThan(early[0]!.opacity);
  expect(early.at(-1)!.height).toBeGreaterThan(full - 8);
  await page.waitForTimeout(300);
  await expect(page.locator(card)).toBeHidden();
});

test("with reduced motion the card appears and goes at once", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openWords(page, "/es/biblia/juan/6", 53);
  const card = page.locator(`${list} > li`).nth(13).locator("> div");
  await page.locator(rows).nth(13).click();
  await expect(card).toBeVisible();
  const frames = await trackElement(page, `${list} > li:nth-child(14) > div`, 120);
  expect(new Set(frames.map((frame) => Math.round(frame.height))).size).toBe(1);
  await page.locator(rows).nth(13).click();
  await expect(card).toBeHidden();
});

test("the transliteration follows the stored choice", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("doctrina-transliteration", "off"));
  await openWords(page, "/es/biblia/juan/6", 53);
  await expect(page.locator(`${rows} small`).filter({ hasText: "sarka" })).toHaveCount(0);
  await expect(page.locator(rows).nth(13)).toContainText("carne");
});

test("an Old Testament verse lists Hebrew words and counts in the Old Testament", async ({ page }) => {
  await openWords(page, "/es/biblia/genesis/1", 1);
  await expect(page.locator(rows)).toHaveCount(7);
  const first = page.locator(rows).first();
  await expect(first.locator('[lang="hbo"]')).toHaveText(/בְּרֵאשִׁ/);
  const family = await first.locator('[lang="hbo"]').evaluate((element) => getComputedStyle(element).fontFamily);
  expect(family).toMatch(/hebrew/i);
  await first.click();
  await page.waitForTimeout(500);
  const card = page.locator(`${list} > li`).first().locator("> div");
  await expect(card).toContainText("En el Antiguo Testamento");
  await expect(card).toContainText("H7225");
});

test("in English the glosses are English, with no label, and the panel text is English", async ({ page }) => {
  await openWords(page, "/en/bible/john/6", 53);
  const english = `${panel} ul[aria-label="Words of the verse"] > li > button[aria-expanded]`;
  await expect(page.locator(english)).toHaveCount(28);
  await expect(page.locator(english).nth(13)).toContainText("flesh");
  await expect(page.locator(english).nth(11)).not.toContainText("English");
  await page.locator(english).nth(13).click();
  await page.waitForTimeout(500);
  await expect(page.locator(panel)).toContainText("147 times, 12 verses in John");
  await expect(page.locator(panel)).toContainText("Noun, accusative feminine singular");
});

test("the panel has no horizontal overflow at 360 with a card open", async ({ page }) => {
  await openWords(page, "/es/biblia/juan/6", 53, 360);
  await page.locator(rows).nth(13).click();
  await page.waitForTimeout(600);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("a verse with no word data keeps «Palabras» inert", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/biblia/eclesiastico/51");
  await page.locator("#v-1 [role=button]").first().click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(400);
  await page
    .locator(strip)
    .getByRole("button", { name: /^Palabras/ })
    .click();
  await page.waitForTimeout(400);
  await expect(page.locator(strip).getByRole("button", { name: /^Palabras/ })).toHaveAttribute("aria-pressed", "false");
});
