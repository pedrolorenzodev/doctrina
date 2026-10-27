import { expect, test } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const didache = "/es/historia/obras/didache";
const strip = "main [data-reader-strip]";

test("a Father's work is read division by division with its locator, edition and licence", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(didache);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("The Teaching of the Lord to the Gentiles");
  await expect(page.locator("main")).toContainText(
    "Texto en inglés. Traducción de Joseph Barber Lightfoot and J. R. Harmer, 1891.",
  );
  const divisions = page.locator("[data-father-text] > div");
  await expect(divisions).toHaveCount(16);
  await expect(divisions.first()).toContainText("There are two ways");
  await expect(page.locator("[data-father-text]")).toHaveAttribute("lang", "en");
  await expect(page.locator("main")).toContainText("Licencia: Dominio público");
});

test("the division locator sits in the left margin from 768 px and above the text below it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(didache);
  const first = page.locator("[data-father-text] > div").first();
  const locator = (await first.locator("button").first().boundingBox())!;
  const text = (await first.locator("p").last().boundingBox())!;
  expect(locator.x + locator.width).toBeLessThan(text.x);
  await page.setViewportSize({ width: 390, height: 844 });
  const stacked = (await first.locator("button").first().boundingBox())!;
  const below = (await first.locator("p").last().boundingBox())!;
  expect(stacked.y + stacked.height).toBeLessThanOrEqual(below.y + 1);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("«Aa» offers the text size only, and A+ makes the text larger", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(didache);
  const body = page.locator("[data-father-text] p").last();
  const before = await body.evaluate((element) => parseFloat(getComputedStyle(element).fontSize));
  await page.locator(strip).getByRole("button", { name: "Texto", exact: true }).click();
  const menu = page.getByRole("dialog", { name: "Texto" });
  await expect(menu).toBeVisible();
  await expect(menu).not.toContainText("Formato");
  await menu.getByRole("button", { name: "Agrandar el texto" }).click();
  const after = await body.evaluate((element) => parseFloat(getComputedStyle(element).fontSize));
  expect(after).toBeGreaterThan(before);
});

test("an unknown work is a 404", async ({ page }) => {
  const response = await page.goto("/es/historia/obras/no-existe");
  expect(response?.status()).toBe(404);
});

test("in the tree a Father with texts opens to them and the open work is marked", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/obras/ignatius-romans");
  const father = page.locator('aside nav li[data-id="history/fathers/ignatius-of-antioch"]');
  await expect(father.locator("> ul")).toHaveAttribute("data-open", "true");
  await expect(father.locator("> ul a")).toHaveCount(7);
  await expect(father.locator("> ul a")).toHaveText([
    "A los Efesios",
    "A los Magnesios",
    "A los Tralianos",
    "A los Romanos",
    "A los Filadelfios",
    "A los Esmirniotas",
    "A Policarpo",
  ]);
  await expect(page.locator("aside nav a[aria-current=page]")).toHaveText("A los Romanos");
  await father.locator("> ul a", { hasText: "A los Efesios" }).click();
  await expect(page).toHaveURL(/\/es\/historia\/obras\/ignatius-ephesians$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Ephesians");
});

test("a work links to the previous and next work of the same Father; a lone work has none", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/obras/ignatius-romans");
  const links = page.locator("main nav[aria-label] a", { hasText: /Obra (anterior|siguiente)/ });
  await expect(links).toHaveCount(2);
  await expect(links.first()).toContainText("A los Tralianos");
  await expect(links.last()).toContainText("A los Filadelfios");
  await links.last().click();
  await expect(page).toHaveURL(/\/es\/historia\/obras\/ignatius-philadelphians$/);
  await page.goto(didache);
  await expect(page.locator("main nav[aria-label] a", { hasText: /Obra (anterior|siguiente)/ })).toHaveCount(0);
});

test("arriving on a division by its anchor marks it for about two seconds", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${didache}#d-3`);
  const division = page.locator("#d-3");
  await expect(division).toHaveAttribute("data-marked", "");
  await expect(division).not.toHaveAttribute("data-marked", "", { timeout: 4000 });
  const top = (await division.boundingBox())!.y;
  expect(top).toBeGreaterThan(50);
});

test("a division's locator opens the panel with the citation and the link; Esc closes it", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/obras/ignatius-romans");
  const panel = page.locator('aside[data-side-panel][aria-label="Detalle del pasaje"]');
  await expect(panel).toHaveAttribute("data-open", "false");
  await page.locator('[data-division-open="d-1.1"]').click();
  await expect(panel).toHaveAttribute("data-open", "true");
  await expect(panel).toContainText("A los Romanos 1.1");
  await expect(page.locator("#d-1\\.1")).toHaveAttribute("data-selected", "");
  await panel.getByRole("button", { name: "Citar" }).click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "The Epistle of Ignatius to the Romans 1.1 (Joseph Barber Lightfoot, 1889)",
  );
  await panel.getByRole("button", { name: "Copiar enlace" }).click();
  await expect(panel.getByRole("status").filter({ hasText: "Enlace copiado" })).toHaveCount(1);
  expect(await page.evaluate(() => navigator.clipboard.readText())).toMatch(
    /\/es\/historia\/obras\/ignatius-romans#d-1\.1$/,
  );
  await page.keyboard.press("Escape");
  await expect(panel).toHaveAttribute("data-open", "false");
  await expect(page.locator("#d-1\\.1")).not.toHaveAttribute("data-selected", "");
});

const sentence = "[data-father-text] [data-verse-text]";

async function select(page: import("@playwright/test").Page, ordinal: number, from: number, to: number) {
  await page.evaluate(
    ([target, start, end]) => {
      const element = document.querySelector(`[data-verse-text="${target}"]`)!;
      const node = element.firstChild!;
      const range = document.createRange();
      range.setStart(node, start as number);
      range.setEnd(node, end as number);
      const selection = getSelection()!;
      selection.removeAllRanges();
      selection.addRange(range);
      document.dispatchEvent(new PointerEvent("pointerup", { pointerType: "mouse", bubbles: true }));
    },
    [ordinal, from, to] as const,
  );
}

test("selecting words in a division opens the selection bar; a colour highlights them and it survives a reload", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(didache);
  await page.locator(sentence).first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await select(page, 1, 0, 28);
  await expect(page.locator('[role="toolbar"][aria-label="Lo que elegiste"]')).toBeVisible();
  await page.keyboard.press("s");
  await expect(page.locator('[data-father-text] mark[data-highlight="yellow"]')).toHaveCount(1);
  await page.reload();
  await expect(page.locator('[data-father-text] mark[data-highlight="yellow"]')).toHaveCount(1);
});

test("the locator panel highlights and writes a note on a division, with its mark and count", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(didache);
  await page.locator("[data-division-open]").first().click();
  const panel = page.locator('aside[data-side-panel][aria-label="Detalle del pasaje"]');
  await expect(panel).toHaveAttribute("data-open", "true");
  await panel.getByRole("button", { name: "Nota", exact: true }).click();
  await panel.locator('textarea[aria-label="Tu nota"]').fill("Las dos vías.");
  await page.waitForTimeout(700);
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-father-text] button:has-text('1 nota')")).toBeVisible();
  await expect(page.locator("main [data-reader-strip] [data-your-notes]")).toContainText("1");
});

test("«Tus notas» of a work lists its notes and a note on the whole work", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.addInitScript(() => {
    localStorage.setItem(
      "doctrina-notes",
      JSON.stringify([
        {
          id: "n1",
          scope: "unit",
          translationId: "didache",
          book: "didache",
          chapter: 1,
          verse: 1,
          verseTo: 1,
          from: null,
          to: null,
          quote: null,
          text: "Las dos vías.",
          createdAt: 1,
          updatedAt: 1700000000000,
        },
      ]),
    );
  });
  await page.goto(didache);
  await page.locator("main [data-reader-strip] [data-your-notes]").click();
  const list = page.locator('aside[data-side-panel][aria-label="Tus notas"]');
  await expect(list).toHaveAttribute("data-open", "true");
  await expect(list.locator("li button")).toHaveCount(1);
  await expect(list).toContainText("Las dos vías.");
  await list.locator("li button").click();
  await expect(page.locator('aside[data-side-panel][aria-label="Detalle del pasaje"]')).toHaveAttribute(
    "data-open",
    "true",
  );
});
