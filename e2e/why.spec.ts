import { expect, test } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

const normalize = (text: string | null) => (text ?? "").replace(/[ ⁠]/g, " ").replace(/\s+/g, " ").trim();

test("the intro groups its references in one parenthesis, with the punctuation after it", async ({ page }) => {
  await page.goto(traditionPath);
  const paragraphs = await page.locator("#why > div > div:first-of-type p").allTextContents();
  expect(paragraphs.map(normalize)).toEqual([
    "La Iglesia católica funda esta enseñanza, ante todo, en las palabras de Cristo en la última Cena, tomadas en su sentido propio: «Esto es mi cuerpo» (Trento, ses. XIII, caps. 1 y 4).",
    "Las lee junto con el discurso del pan de vida (Juan 6) y con las palabras «que por vosotros es dado» y «derramada por muchos», que muestran un sacrificio (Lucas 22:19; Mateo 26:28; Ecclesia de Eucharistia 16; Catecismo 1336; Catecismo 1365; Ecclesia de Eucharistia 12; Trento, ses. XXII, cap. 1).",
    "Y sostiene que la Iglesia siempre lo creyó así (Trento, ses. XIII, cap. 4).",
  ]);
});

test("two figures with author, work, date and the source link", async ({ page }) => {
  await page.goto(traditionPath);
  const figures = page.locator("#why figure");
  await expect(figures).toHaveCount(2);
  await expect(figures.first().locator("figcaption")).toContainText("San Juan Crisóstomo");
  await expect(figures.first().locator("figcaption")).toContainText("388 (según Baur)");
  await expect(figures.nth(1).locator("figcaption")).toContainText("c. 387–391");
  await expect(figures.nth(1).locator("blockquote")).toHaveCount(2);
  await expect(figures.nth(1).locator("figcaption button")).toHaveText(/Citado en Catecismo\s1375/);
});

for (const [width, beside] of [
  [1440, true],
  [1280, true],
  [1024, false],
  [768, false],
  [390, false],
  [360, false],
] as const) {
  test(`${width}px: caption ${beside ? "beside" : "under"} the quote, no overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(traditionPath);
    const geometry = await page.evaluate(() => {
      const figure = document.querySelector("#why figure")!;
      const quote = figure.querySelector("blockquote")!.getBoundingClientRect();
      const caption = figure.querySelector("figcaption")!.getBoundingClientRect();
      return {
        quoteRight: quote.right,
        quoteTop: quote.top,
        quoteBottom: quote.bottom,
        captionLeft: caption.left,
        captionTop: caption.top,
      };
    });
    if (beside) {
      expect(geometry.captionLeft).toBeGreaterThanOrEqual(geometry.quoteRight);
      expect(Math.abs(geometry.captionTop - geometry.quoteTop)).toBeLessThan(12);
    } else {
      expect(geometry.captionTop).toBeGreaterThanOrEqual(geometry.quoteBottom);
    }
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("an opening parenthesis never ends a line @webkit", async ({ page }) => {
  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(traditionPath);
    const orphans = await page.evaluate(() => {
      const found: string[] = [];
      for (const paragraph of document.querySelectorAll("#why p")) {
        for (const button of paragraph.querySelectorAll("button")) {
          const before = button.previousSibling;
          const mark = button.parentElement?.firstChild;
          if (mark?.nodeType !== Node.TEXT_NODE || !mark.textContent?.endsWith("(") || before) continue;
          const range = document.createRange();
          range.setStart(mark, mark.textContent.length - 1);
          range.setEnd(mark, mark.textContent.length);
          const parenthesis = range.getBoundingClientRect();
          const link = button.getBoundingClientRect();
          if (Math.abs(parenthesis.top - link.top) > 8 && Math.abs(parenthesis.bottom - link.bottom) > 8) {
            found.push(`${innerWidth}: ${button.textContent}`);
          }
        }
      }
      return found;
    });
    expect(orphans).toEqual([]);
  }
});

test("grouped references open the window and give the focus back", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const link = page.locator("#why p button", { hasText: "Catecismo 1336" });
  await link.click();
  await expect(link).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("dialog")).toContainText("Catecismo");
  await page.keyboard.press("Escape");
  await expect(link).toBeFocused();
  await expect(link).toHaveAttribute("aria-expanded", "false");
  await page.locator("#why figcaption button").first().click();
  await expect(page.getByRole("dialog")).toContainText("n. 1375");
});

test("the closing line and its note come after the figures", async ({ page }) => {
  await page.goto(traditionPath);
  const order = await page.evaluate(() => {
    const top = (selector: string) => document.querySelector(selector)!.getBoundingClientRect().top;
    return [top("#why figure:last-of-type"), top("#why p.font-head"), top("#why p.text-note")];
  });
  expect(order).toEqual([...order].sort((a, b) => a - b));
});

test("the figures reveal on scroll and none stays hidden after a fast jump", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  const state = await page.evaluate(() =>
    [...document.querySelectorAll("#why figure")].map((item) => Number(getComputedStyle(item).opacity)),
  );
  expect(state).toEqual([1, 1]);
});

test("under reduced motion the figures are never armed", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(traditionPath);
  const armed = await page.evaluate(() => document.querySelectorAll("#why [data-rv]").length);
  expect(armed).toBe(0);
  await context.close();
});

test("the ruler lists the why section", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await expect(page.locator("nav[aria-label] a, nav[aria-label] button").filter({ hasText: /Por qué/ })).toHaveCount(1);
});

test("the note's section link is pressable and does nothing yet", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const url = page.url();
  const link = page.locator("#why p.text-note button", { hasText: "Lo que escribieron los primeros cristianos" });
  await expect(link).toHaveCSS("text-decoration-line", "underline");
  await link.click();
  expect(page.url()).toBe(url);
});
