import { join } from "node:path";
import { expect, test, type Page } from "@playwright/test";

const axePath = join(process.cwd(), "node_modules/axe-core/axe.min.js");

type Violation = { id: string; nodes: { target: string[] }[] };

async function violations(page: Page): Promise<string[]> {
  await page.addScriptTag({ path: axePath });
  const found = await page.evaluate(async () => {
    const result = await (
      window as unknown as {
        axe: { run: (context: Document, options: object) => Promise<{ violations: Violation[] }> };
      }
    ).axe.run(document, { runOnly: ["wcag2a", "wcag2aa", "wcag21aa", "best-practice"] });
    return result.violations.map((violation) => `${violation.id}: ${violation.nodes[0]?.target.join(" ")}`);
  });
  return found;
}

const titleEntranceMs = 1200;

const pages: [string, string, (page: Page) => Promise<void>][] = [
  [
    "the 08 timeline with its panel open",
    "/es/historia/linea-de-tiempo#polycarp-of-smyrna",
    async (page) => {
      await expect(page.locator("aside[data-side-panel]")).toBeVisible();
      await page.waitForTimeout(400);
    },
  ],
  [
    "a council on the 08 timeline",
    "/es/historia/linea-de-tiempo#nicaea-1",
    async (page) => {
      await expect(page.locator("aside[data-side-panel]")).toBeVisible();
      await page.waitForTimeout(400);
    },
  ],
  [
    "a Father's page with a timeline item chosen",
    "/es/historia/padres/ignatius-of-antioch",
    async (page) => {
      await page.locator('#time button[data-entry="justin-martyr"]').click();
    },
  ],
  [
    "a Father's dating list with a scholar's window open",
    "/es/historia/padres/ignatius-of-antioch",
    async (page) => {
      await page.getByRole("button", { name: "Decrept" }).click();
      await expect(page.locator("[role=dialog]")).toBeVisible();
    },
  ],
  [
    "the 02 doctrine page",
    "/es/doctrinas/eucaristia",
    async (page) => {
      await page.waitForTimeout(1200);
    },
  ],
  [
    "the 03 tradition page",
    "/es/doctrinas/eucaristia/catolica",
    async (page) => {
      await page.waitForTimeout(1200);
    },
  ],
  [
    "the Objeciones page",
    "/es/doctrinas/eucaristia/catolica/objeciones",
    async (page) => {
      await page.waitForTimeout(1200);
    },
  ],
  [
    "an objection page",
    "/es/doctrinas/eucaristia/catolica/objeciones/ob-1",
    async (page) => {
      await page.waitForTimeout(1200);
    },
  ],
  [
    "the early Christians page",
    "/es/doctrinas/eucaristia/primeros-cristianos",
    async (page) => {
      await page.waitForTimeout(1200);
    },
  ],
  [
    "a Bible chapter",
    "/es/biblia/juan/6",
    async (page) => {
      await page.waitForTimeout(400);
    },
  ],
  [
    "a Father's work with its passage panel open",
    "/es/historia/obras/ignatius-romans",
    async (page) => {
      await page.locator('[data-division-open="d-1.1"]').click();
      await page.waitForTimeout(500);
    },
  ],
  [
    "a Bible chapter with the translation list open",
    "/es/biblia/juan/6",
    async (page) => {
      await page.locator('[data-reader-strip] button[aria-haspopup="listbox"]').click();
      await expect(page.locator('[data-reader-strip] [role="listbox"]')).toBeVisible();
    },
  ],
  [
    "a Bible chapter with a verse's panel open",
    "/es/biblia/juan/6",
    async (page) => {
      await page.locator("#v-53 [role=button]").click();
      await expect(page.locator('aside[data-side-panel][aria-label="Detalle del versículo"]')).toHaveAttribute(
        "data-open",
        "true",
      );
    },
  ],
  [
    "a Bible chapter with «Tus notas» open",
    "/es/biblia/juan/6",
    async (page) => {
      await page.locator("[data-reader-strip] [data-your-notes]").click();
      await expect(page.locator('aside[data-side-panel][aria-label="Tus notas"]')).toHaveAttribute("data-open", "true");
    },
  ],
  [
    "the book and chapter menu",
    "/es/biblia/juan/6",
    async (page) => {
      await page.locator("[data-reader-strip] button[data-book-picker]").click();
      await page.locator('[data-reader-strip] [role="dialog"] button:has-text("Génesis")').click();
      await expect(page.locator('[data-reader-strip] [role="dialog"] a[data-chapter="3"]')).toBeVisible();
      await page.waitForTimeout(400);
    },
  ],
  [
    "the text menu and the translation list",
    "/es/biblia/juan/6",
    async (page) => {
      await page.locator("[data-reader-strip]").getByRole("button", { name: "Texto", exact: true }).click();
      await expect(page.locator('[data-reader-strip] [role="dialog"][aria-label="Texto"]')).toBeVisible();
      await page.waitForTimeout(400);
    },
  ],
  [
    "the second translation menu with two translations on screen",
    "/es/biblia/juan/6",
    async (page) => {
      await page.evaluate(() =>
        localStorage.setItem("doctrina-second-translation", JSON.stringify({ mode: "below", id: "bsb" })),
      );
      await page.reload();
      await page.locator("[data-reader-strip] button[data-parallel]").click();
      await expect(page.locator('[data-reader-strip] [role="dialog"][aria-label="Segunda traducción"]')).toBeVisible();
      await page.waitForTimeout(400);
    },
  ],
  [
    "the translation list",
    "/es/biblia/juan/6",
    async (page) => {
      await page.locator('[data-reader-strip] button[aria-haspopup="listbox"]').click();
      await expect(page.locator('[data-reader-strip] [role="listbox"]')).toBeVisible();
      await page.waitForTimeout(400);
    },
  ],
  [
    "the delete note dialog",
    "/es/biblia/juan/6",
    async (page) => {
      await page.evaluate(() =>
        localStorage.setItem(
          "doctrina-notes",
          JSON.stringify([
            {
              id: "n1",
              scope: "unit",
              translationId: "rv1909",
              book: "John",
              chapter: 6,
              verse: 53,
              verseTo: 53,
              from: null,
              to: null,
              quote: null,
              text: "Una nota.",
              createdAt: 1,
              updatedAt: 1,
            },
          ]),
        ),
      );
      await page.reload();
      await page.locator("#v-53 [role=button]").click();
      await page.getByRole("button", { name: /Una nota/ }).click();
      await page.getByRole("button", { name: "Borrar nota" }).click();
      await expect(page.locator('[role="alertdialog"]')).toBeVisible();
    },
  ],
  [
    "the search with a query",
    "/es/doctrinas/eucaristia/catolica",
    async (page) => {
      await page.locator("header button[aria-haspopup=dialog]").click();
      await page.locator("[data-search-dialog] [role=combobox]").fill("carne");
      await page.waitForTimeout(700);
    },
  ],
];

for (const theme of ["light", "dark"] as const) {
  for (const [name, path, act] of pages) {
    test(`${name} has no accessibility violations in ${theme}`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: theme });
      await page.addInitScript((value) => localStorage.setItem("doctrina-theme", value), theme);
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(path);
      await act(page);
      await page.waitForTimeout(titleEntranceMs);
      expect(await violations(page)).toEqual([]);
    });
  }
}
