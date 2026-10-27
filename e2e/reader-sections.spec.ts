import { existsSync } from "node:fs";
import { expect, test, type Page } from "@playwright/test";

const hasStructure = existsSync("data/corpus/bibles/bsb.structure.json");
const john = "/es/biblia/juan/6";
const root = "main [data-stream-chapter]:first-of-type [data-chapter-text]";

async function open(page: Page, translation: string, format: "lines" | "flow") {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.addInitScript(
    ([chosen, shown]) => {
      localStorage.setItem("doctrina-translation", chosen!);
      localStorage.setItem("doctrina-reader-format", shown!);
    },
    [translation, format],
  );
  await page.goto(john);
  await expect(page.locator(`${root} p[id="v-1"]`)).toBeVisible();
  if (translation === "bsb") await expect(page.locator("[data-section-heading]").first()).toBeVisible();
}

test.describe("section headings and paragraphs", () => {
  test.skip(!hasStructure, "the Bible structure files are built from the local corpus");

  test("the BSB shows its five section headings of John 6, each right before its first verse, in both formats", async ({
    page,
  }) => {
    for (const format of ["lines", "flow"] as const) {
      await open(page, "bsb", format);
      const headings = await page.evaluate(() =>
        [...document.querySelectorAll("[data-section-heading]")].map((heading) => ({
          title: heading.textContent,
          next: heading.nextElementSibling?.id,
        })),
      );
      expect(headings).toEqual([
        { title: "The Feeding of the Five Thousand", next: "v-1" },
        { title: "Jesus Walks on Water", next: "v-16" },
        { title: "Jesus the Bread of Life", next: "v-22" },
        { title: "Many Disciples Turn Back", next: "v-59" },
        { title: "Peter’s Confession of Faith", next: "v-67" },
      ]);
    }
  });

  test("«En párrafo» runs verses together inside a paragraph and breaks where the edition does", async ({ page }) => {
    await open(page, "bsb", "flow");
    const layout = await page.evaluate(() => {
      const column = document.querySelector("[data-chapter-text]")!.getBoundingClientRect();
      const textOf = (id: string) => document.querySelector(`[data-verse-text="${id.slice(2)}"]`)!;
      const first = (id: string) => textOf(id).getClientRects()[0]!;
      const last = (id: string) => {
        const rects = textOf(id).getClientRects();
        return rects[rects.length - 1]!;
      };
      return {
        left: column.left,
        v1: first("v-1").left,
        v2: first("v-2").left,
        v4: first("v-4").left,
        v4Top: first("v-4").top,
        v3Bottom: last("v-3").bottom,
        starts: [...document.querySelectorAll("p[data-paragraph-start]")].map((verse) => verse.id).slice(0, 4),
      };
    });
    expect(layout.starts).toEqual(["v-1", "v-4", "v-7", "v-8"]);
    expect(layout.v1).toBeLessThanOrEqual(layout.left + 20);
    expect(layout.v2).toBeGreaterThan(layout.left + 40);
    expect(layout.v4).toBeLessThanOrEqual(layout.left + 20);
    expect(layout.v4Top - layout.v3Bottom).toBeGreaterThan(8);
  });

  test("an edition without paragraph data keeps one running block and no headings", async ({ page }) => {
    await open(page, "rv1909", "flow");
    expect(await page.locator("[data-section-heading]").count()).toBe(0);
    expect(await page.locator("p[data-paragraph-start]").count()).toBe(0);
    const runs = await page.evaluate(() => {
      const column = document.querySelector("[data-chapter-text]")!.getBoundingClientRect();
      return document.querySelector('[data-verse-text="4"]')!.getClientRects()[0]!.left > column.left + 40;
    });
    expect(runs).toBe(true);
  });

  test("a heading never adds a second scroll anchor: the verses are still the only units with an id", async ({
    page,
  }) => {
    await open(page, "bsb", "lines");
    expect(await page.locator(`${root} > [id]`).count()).toBe(await page.locator(`${root} > p[id^="v-"]`).count());
    expect(await page.locator("[data-section-heading][id]").count()).toBe(0);
  });
});
