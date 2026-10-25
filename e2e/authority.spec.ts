import { expect, test } from "@playwright/test";
import { horizontalOverflow, landingTop, traditionPath } from "./helpers";

const rows = "#authority tr";
const normalize = (text: string | null | undefined) => (text ?? "").replace(/[ ⁠]/g, " ").replace(/\s+/g, " ").trim();

test("four rows in the order dogma, definitive doctrine, authentic magisterium, discipline", async ({ page }) => {
  await page.goto(traditionPath);
  await expect(page.locator("#authority h2")).toHaveText("Grado de autoridad");
  await expect(page.locator(`${rows} th`)).toHaveText([
    "Dogma",
    "Doctrina definitiva",
    "Magisterio auténtico",
    "Disciplina",
  ]);
});

test("each definition ends with its source in one parenthesis and a single full stop", async ({ page }) => {
  await page.goto(traditionPath);
  const texts = await page.locator(`${rows} td p:first-child`).allTextContents();
  for (const text of texts) expect(normalize(text)).toMatch(/ \([^()]+\)\.$/);
  expect(normalize(texts[3])).toMatch(/de los fieles \(Donum veritatis 17\)\.$/);
});

test("the examples list the statements of each grade and say when there is none", async ({ page }) => {
  await page.goto(traditionPath);
  const examples = await page.locator(`${rows} td p:last-child`).allTextContents();
  expect(normalize(examples[0])).toBe(
    "En esta página: la presencia real, la transubstanciación, el sacrificio de la Misa, Cristo entero en cada especie, la adoración, el sacerdocio, la comunión bajo una especie, los frutos de la comunión.",
  );
  expect(normalize(examples[1])).toBe("Ninguna afirmación de esta página tiene este grado.");
  expect(normalize(examples[2])).toBe("En esta página: la Eucaristía hace la Iglesia.");
});

test("an example link to a hidden statement expands the list and lands under the bar", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  expect(await page.evaluate(() => document.getElementById("QE-9")!.hidden)).toBe(true);
  await page.locator("#authority a", { hasText: "la Eucaristía hace la Iglesia" }).first().click();
  await page.waitForTimeout(1500);
  expect(await page.evaluate(() => document.getElementById("QE-9")!.hidden)).toBe(false);
  const landing = await landingTop(page);
  await expect
    .poll(() => page.evaluate(() => Math.round(document.getElementById("QE-9")!.getBoundingClientRect().top)), {
      timeout: 5000,
    })
    .toBe(landing);
});

test("an example link to a visible statement scrolls to it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.locator("#authority a", { hasText: "la transubstanciación" }).first().click();
  await page.waitForTimeout(1500);
  const landing = await landingTop(page);
  await expect
    .poll(() => page.evaluate(() => Math.round(document.getElementById("QE-2")!.getBoundingClientRect().top)), {
      timeout: 5000,
    })
    .toBe(landing);
});

test("arriving with the hash of a hidden statement expands the list and shows it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${traditionPath}#QE-9`);
  await page.waitForTimeout(1500);
  expect(await page.evaluate(() => document.getElementById("QE-9")!.hidden)).toBe(false);
  const landing = await landingTop(page);
  await expect
    .poll(() => page.evaluate(() => Math.round(document.getElementById("QE-9")!.getBoundingClientRect().top)), {
      timeout: 5000,
    })
    .toBe(landing);
  await expect(page.locator("#teach button[aria-expanded]:not([aria-haspopup])")).toHaveText("Mostrar menos");
});

for (const [width, beside] of [
  [1440, true],
  [768, true],
  [640, true],
  [390, false],
  [360, false],
] as const) {
  test(`${width}px: label ${beside ? "beside" : "above"} the meaning, no overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(traditionPath);
    const geometry = await page.evaluate(() => {
      const label = document.querySelector("#authority th")!.getBoundingClientRect();
      const body = document.querySelector("#authority td")!.getBoundingClientRect();
      return { side: body.left >= label.right, below: body.top >= label.bottom };
    });
    if (beside) expect(geometry.side).toBe(true);
    else expect(geometry.below).toBe(true);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("the source link opens the window and gives the focus back", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const link = page.locator(`${rows} [aria-haspopup]`).first();
  await link.click();
  await expect(page.locator("[role=dialog]")).toHaveAttribute("data-open", "true");
  await page.keyboard.press("Escape");
  await expect(link).toBeFocused();
});

test("rows reveal on scroll and none stays hidden after a fast jump", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  const opacity = await page.evaluate(() =>
    [...document.querySelectorAll("#authority tr")].map((row) => Number(getComputedStyle(row).opacity)),
  );
  expect(opacity).toEqual([1, 1, 1, 1]);
});

test("under reduced motion the rows are never armed", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(traditionPath);
  expect(await page.evaluate(() => document.querySelectorAll("#authority [data-rv]").length)).toBe(0);
  await context.close();
});
