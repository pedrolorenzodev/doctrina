import { existsSync, readdirSync } from "node:fs";
import { expect, test } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const root = "data/corpus/fathers";
const hasCorpus = existsSync(root);

test.describe("the Fathers' corpus in the reader", () => {
  test.skip(!hasCorpus, "needs the local corpus");

  test("every work of the corpus has a page, and a long one fits a phone", async ({ page, request }) => {
    test.setTimeout(120000);
    for (const work of readdirSync(root, { withFileTypes: true }).filter((entry) => entry.isDirectory())) {
      expect((await request.get(`/es/historia/obras/${work.name}`)).status(), work.name).toBe(200);
    }
    await page.setViewportSize({ width: 390, height: 800 });
    await page.goto("/es/historia/obras/chrysostom-homilies-matthew");
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });

  test("a draft work says so; an approved one does not", async ({ page }) => {
    await page.goto("/es/historia/obras/origen-against-celsus");
    await expect(page.locator("h1")).toContainText("Against Celsus");
    await expect(page.locator("main")).toContainText(
      "Borrador: la transcripción de esta obra todavía no tuvo una lectura independiente.",
    );
    await page.goto("/es/historia/obras/didache");
    await expect(page.locator("main")).not.toContainText("Borrador:");
  });

  test("the sidebar lists the works under their Father and the page has neighbours", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/es/historia/obras/origen-against-celsus");
    const origen = page.locator('aside nav li[data-id="history/fathers/origen"]');
    await expect(origen.locator('a[href="/es/historia/obras/origen-against-celsus"]')).toHaveCount(1);
    await expect(page.getByRole("navigation", { name: /anterior y siguiente/i }).getByRole("link")).not.toHaveCount(0);
  });
});
