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
];

for (const theme of ["light", "dark"] as const) {
  for (const [name, path, act] of pages) {
    test(`${name} has no accessibility violations in ${theme}`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: theme });
      await page.addInitScript((value) => localStorage.setItem("doctrina-theme", value), theme);
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(path);
      await act(page);
      expect(await violations(page)).toEqual([]);
    });
  }
}
