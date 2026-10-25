import { expect, test } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

const base = `${traditionPath}/objeciones`;
const first = `${base}/ob-1`;
const rows = "#sources li";
const passageItems = "#passages li";

test("«Fuentes citadas»: two groups, three sources in the answer and four in the objection", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  await expect(page.locator("#sources h2")).toHaveText("Fuentes citadas");
  await expect(page.locator("#sources h3")).toHaveText(["En la respuesta", "En la objeción"]);
  await expect(page.locator(`${rows} p:first-child`)).toHaveText([
    "Concilio de Trentosesión XXII, caps. 1–2, can. 4",
    "Juan Pablo IIEcclesia de Eucharistia 12–13",
    "Catecismo de la Iglesia Católica1085, 1360, 1361, 1364, 1366, 1367, 1368",
    "Confesión de Westminster29.2",
    "Apología de la Confesión de AugsburgoXXIV.1, 19, 22",
    "Confesión de AugsburgoXXIV.21–27",
    "Artículos de EsmalcaldaII.2.1",
  ]);
});

test("each row states its date beside the name and marks the year on a shared axis", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  await expect(page.locator(`${rows} p:nth-child(2)`)).toHaveText([
    "17 sep 1562",
    "17 abr 2003",
    "1992/1997",
    "1647",
    "1531",
    "25 jun 1530",
    "1537",
  ]);
  const labels = await page.locator(`${rows} > div > div:last-child`).allTextContents();
  expect(labels).toEqual(["1562", "2003", "1992", "1647", "1531", "1530", "1537"]);
  const ends = await page.locator(`${rows} > div`).first().locator("div").allTextContents();
  expect(ends).toEqual(expect.arrayContaining(["1500", "1900", "2026"]));
});

test("the axis starts at the century of the oldest source", async ({ page }) => {
  await page.goto(`/es/doctrinas/bautismo/catolica/objeciones/ob-3`);
  const marks = await page.locator(`${rows} > div`).first().locator("div > div:last-child").allTextContents();
  expect(marks.slice(0, 5).join(" ")).toContain("1200");
});

test("a source row without a date draws no timeline", async ({ page }) => {
  await page.goto(`${base}/ob-6`);
  const misal = page.locator(rows, { hasText: "Misal Romano" });
  await expect(misal).toHaveCount(1);
  await expect(misal.locator("> div")).toHaveCount(0);
});

test("a source name opens its window; the point grows on hover", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  const row = page.locator(rows).first();
  await row.hover();
  const point = row
    .locator("> div > div")
    .filter({ has: page.locator("xpath=self::div[contains(@class,'bg-accent')]") })
    .first();
  await expect.poll(() => point.evaluate((node) => getComputedStyle(node).scale)).toBe("1.25");
  const link = row.locator("[aria-haspopup]");
  await link.click();
  await expect(page.locator("[role=dialog]")).toHaveAttribute("data-open", "true");
  await page.keyboard.press("Escape");
  await expect(link).toBeFocused();
});

test("on phones the timeline sits under the name and spans the row", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(first);
  const geometry = await page
    .locator(rows)
    .first()
    .evaluate((row) => {
      const name = row.querySelector("p")!.getBoundingClientRect();
      const mini = row.querySelector(":scope > div")!.getBoundingClientRect();
      const box = row.getBoundingClientRect();
      return { below: mini.top >= name.bottom, width: Math.round(mini.width), row: Math.round(box.width) };
    });
  expect(geometry.below).toBe(true);
  expect(geometry.width).toBe(geometry.row);
});

test("«Pasajes»: two answer passages, four objector passages and «Mostrar los otros 8 textos de prueba»", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  await expect(page.locator("#passages h2")).toHaveText("Pasajes");
  await expect(page.locator("#passages h3")).toHaveText(["En la respuesta", "En la objeción"]);
  await expect(page.locator(`${passageItems}:visible`)).toHaveCount(6);
  await expect(page.locator("#passages li p").first()).toHaveText("Hebreos 7:24");
  const more = page.locator("#passages button[aria-expanded]");
  await expect(more).toHaveText("Mostrar los otros 8 textos de prueba");
  await more.click();
  await expect(page.locator(`${passageItems}:visible`)).toHaveCount(14);
  await expect(more).toHaveText("Mostrar menos");
  await more.click();
  await expect(page.locator(`${passageItems}:visible`)).toHaveCount(6);
});

test("each passage shows its verse as a quote and its reference as an inert page link", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  await expect(page.locator("#passages blockquote").first()).toContainText("sacerdocio inmutable");
  const url = page.url();
  await page.locator("#passages li button").first().click();
  expect(page.url()).toBe(url);
});

test("one hidden passage reads «Mostrar el otro texto de prueba»; an empty group has no heading", async ({ page }) => {
  await page.goto(`${base}/ob-2`);
  await expect(page.locator("#passages button[aria-expanded]")).toHaveText("Mostrar el otro texto de prueba");
  await page.goto(`${base}/ob-5`);
  await expect(page.locator("#passages h3")).toHaveText(["En la objeción"]);
});

test("the objector note is shown once under the list", async ({ page }) => {
  await page.goto(`${base}/ob-2`);
  await expect(page.locator("#passages > div > p, #passages div > p").last()).toContainText("Hechos 3:21");
});

test("a section without data is not rendered and the ruler follows", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${base}/ob-7`);
  await expect(page.locator("#passages")).toHaveCount(0);
  await expect(page.locator("#sources")).toHaveCount(1);
  await page.waitForTimeout(1500);
  await expect(page.locator("[data-tick]")).toHaveCount(4);
  await page.goto(first);
  await page.waitForTimeout(1500);
  await expect(page.locator("[data-tick]")).toHaveCount(5);
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: ob-1 sources and passages have no horizontal overflow @webkit`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(first);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("the lists reveal and none stays hidden after a fast jump; reduced motion arms nothing", async ({
  page,
  browser,
}) => {
  await page.setViewportSize({ width: 1440, height: 700 });
  await page.goto(first);
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1800);
  const opacity = await page.evaluate(() =>
    [...document.querySelectorAll("#sources li, #passages li:not([hidden])")].map((item) =>
      Number(getComputedStyle(item).opacity),
    ),
  );
  expect(opacity.every((value) => value === 1)).toBe(true);
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const quiet = await context.newPage();
  await quiet.goto(first);
  expect(await quiet.evaluate(() => document.querySelectorAll("#sources [data-rv], #passages [data-rv]").length)).toBe(
    0,
  );
  await context.close();
});
