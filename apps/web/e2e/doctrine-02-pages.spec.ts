import { expect, test } from "@playwright/test";
import { baptismDoctrine } from "../src/content/pages/baptism/doctrine.es";
import { papacyDoctrine } from "../src/content/pages/papacy/doctrine.es";
import { solaScripturaDoctrine } from "../src/content/pages/sola-scriptura/doctrine.es";
import { horizontalOverflow } from "./helpers";

const pages = [
  { path: "/es/doctrinas/bautismo", title: "El bautismo", page: baptismDoctrine, connected: ["La Eucaristía"] },
  {
    path: "/es/doctrinas/papado",
    title: "El papado",
    page: papacyDoctrine,
    connected: ["Sola Scriptura", "El bautismo"],
  },
  {
    path: "/es/doctrinas/sola-scriptura",
    title: "Sola Scriptura",
    page: solaScripturaDoctrine,
    connected: ["El papado"],
  },
];

for (const { path, title, page: data, connected } of pages) {
  test.describe(path, () => {
    test("has the five answers, its practice rows and every witness", async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(path);
      await expect(page.locator("h1")).toHaveText(title);
      await expect(page.locator("#answers h3")).toHaveCount(5);
      await expect(page.locator("#practice table tbody th")).toHaveText(data.practice.aspects.map((a) => a.label));
      await expect(page.locator("#practice table tbody tr").first().locator("td")).toHaveCount(5);
      for (const witness of data.witnesses.items) await expect(page.locator(`#w-${witness.id}`)).toHaveCount(1);
      await expect(page.locator("#connected h3")).toHaveText(connected);
    });

    test("a registry source in a practice cell opens its window and Escape returns focus", async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(path);
      const link = page
        .locator("#practice table tbody tr")
        .first()
        .locator("td")
        .first()
        .locator("[aria-haspopup]")
        .first();
      await link.scrollIntoViewIfNeeded();
      await link.click();
      await expect(page.locator("[role=dialog]")).toHaveAttribute("data-open", "true");
      await page.keyboard.press("Escape");
      await expect(link).toBeFocused();
    });

    for (const width of [360, 390, 768]) {
      test(`no horizontal overflow at ${width}`, async ({ page }) => {
        await page.setViewportSize({ width, height: 800 });
        await page.goto(path);
        expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
      });
    }
  });
}
