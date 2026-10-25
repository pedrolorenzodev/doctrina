import { expect, test } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

const items = "#life li";
const more = "#life button[aria-expanded]:not([aria-haspopup])";
const normalize = (text: string | null) => (text ?? "").replace(/[ ⁠]/g, " ").replace(/\s+/g, " ").trim();

test("two intro paragraphs, fourteen rows with eight shown", async ({ page }) => {
  await page.goto(traditionPath);
  await expect(page.locator("#life h2")).toHaveText("Cómo se vive");
  await expect(page.locator("#life h2 + div p")).toHaveCount(2);
  const state = await page.evaluate(() => {
    const rows = [...document.querySelectorAll<HTMLElement>("#life li")];
    return { total: rows.length, hidden: rows.filter((row) => row.hidden).length };
  });
  expect(state).toEqual({ total: 14, hidden: 6 });
  await expect(page.locator(more)).toHaveText("Mostrar 6 más");
});

test("each row has a label and a text that ends with its sources in one parenthesis and a full stop", async ({
  page,
}) => {
  await page.goto(traditionPath);
  const second = page.locator(items).nth(1);
  await expect(second.locator("p").first()).toHaveText("Misa del domingo");
  expect(normalize(await second.locator("p").last().textContent())).toBe(
    "«El domingo y las demás fiestas de precepto los fieles tienen obligación de participar en la Misa» (Código de Derecho Canónico, can. 1247).",
  );
  const third = normalize(await page.locator(items).nth(2).locator("p").last().textContent());
  expect(third).toMatch(/\(Catecismo 1388–1389, 1417; can\. 920; Trento, ses\. XIII, can\. 9\)\.$/);
});

test("show more and less, ending in an agreeing state with the right label", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.locator(more).click();
  await page.waitForTimeout(900);
  await expect(page.locator(more)).toHaveText("Mostrar menos");
  expect(await page.locator(`${items}:visible`).count()).toBe(14);
  await page.locator(more).click();
  await page.waitForTimeout(900);
  await expect(page.locator(more)).toHaveText("Mostrar 6 más");
  expect(await page.locator(`${items}:visible`).count()).toBe(8);
});

for (const [width, columns] of [
  [1440, 2],
  [768, 2],
  [640, 2],
  [390, 1],
  [360, 1],
] as const) {
  test(`${width}px: ${columns === 2 ? "label beside the text" : "label above the text"}, no overflow`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(traditionPath);
    const geometry = await page.evaluate(() => {
      const row = document.querySelector("#life li")!;
      const [label, body] = [...row.querySelectorAll("p")].map((p) => p.getBoundingClientRect());
      return { sideBySide: body!.left >= label!.right, below: body!.top >= label!.bottom };
    });
    if (columns === 2) expect(geometry.sideBySide).toBe(true);
    else expect(geometry.below).toBe(true);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("a source opens the window and gives the focus back", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const link = page.locator(`${items} button[aria-haspopup]`).first();
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
    [...document.querySelectorAll<HTMLElement>("#life li")]
      .filter((row) => !row.hidden)
      .map((row) => Number(getComputedStyle(row).opacity)),
  );
  expect(opacity).toEqual(Array(8).fill(1));
});

test("under reduced motion the rows are never armed", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(traditionPath);
  expect(await page.evaluate(() => document.querySelectorAll("#life [data-rv]").length)).toBe(0);
  await context.close();
});
