import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

const items = "#videos li";
const more = "#videos button[aria-expanded]";
const filter = (page: Page, name: string) => page.locator("#videos [role=group] button", { hasText: name });

const state = (page: Page) =>
  page.evaluate(() => ({
    shown: document.querySelectorAll("#videos li").length,
    ghosts: document.querySelector("#videos [aria-hidden=true].absolute")?.children.length ?? -1,
    animations: document.querySelector("#videos ul")?.getAnimations({ subtree: true }).length ?? -1,
  }));

test("five of fifteen at first, with the counts in the filter and in «Ves 5 de 15»", async ({ page }) => {
  await page.goto(traditionPath);
  await expect(page.locator("#videos h2")).toHaveText("Videos");
  await expect(page.locator(items)).toHaveCount(5);
  await expect(filter(page, "Todos")).toContainText("15");
  await expect(filter(page, "Español")).toContainText("5");
  await expect(filter(page, "Inglés")).toContainText("10");
  await expect(filter(page, "Todos")).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(more)).toHaveText("Mostrar 5 más");
  await expect(page.locator("#videos")).toContainText("Ves 5 de 15");
});

test("each video is an external link to YouTube with its language and a meta line", async ({ page }) => {
  await page.goto(traditionPath);
  const first = page.locator(`${items} a[lang]`).first();
  await expect(first).toHaveAttribute("href", "https://www.youtube.com/watch?v=mJXAFHw_ARQ");
  await expect(first).toHaveAttribute("target", "_blank");
  await expect(first).toHaveAttribute("rel", /noopener/);
  await expect(first).toHaveAttribute("lang", "en");
  await expect(page.locator(items).first().locator("p").last()).toHaveText("Catholic Productions, en inglés");
});

test("«Mostrar 5 más» adds five, moves the focus to the first new one and ends without the button", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.locator(more).click();
  await page.waitForTimeout(900);
  await expect(page.locator(items)).toHaveCount(10);
  await expect(page.locator("#videos")).toContainText("Ves 10 de 15");
  await expect(page.locator(`${items} a[lang]`).nth(5)).toBeFocused();
  await page.locator(more).click();
  await page.waitForTimeout(900);
  await expect(page.locator(items)).toHaveCount(15);
  await expect(page.locator(more)).toHaveCount(0);
  await expect(page.locator("#videos")).not.toContainText("Ves ");
  expect(await state(page)).toMatchObject({ shown: 15, ghosts: 0, animations: 0 });
});

test("filtering by language resets to five and hides the button when nothing is left", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.locator(more).click();
  await page.waitForTimeout(700);
  await filter(page, "Español").click();
  await page.waitForTimeout(900);
  await expect(page.locator(items)).toHaveCount(5);
  await expect(filter(page, "Español")).toHaveAttribute("aria-pressed", "true");
  await expect(filter(page, "Todos")).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator(more)).toHaveCount(0);
  const languages = await page
    .locator(`${items} a[lang]`)
    .evaluateAll((links) => links.map((link) => link.getAttribute("lang")));
  expect(languages).toEqual(["es", "es", "es", "es", "es"]);
  await filter(page, "Inglés").click();
  await page.waitForTimeout(900);
  await expect(page.locator(items)).toHaveCount(5);
  await expect(page.locator("#videos")).toContainText("Ves 5 de 10");
  await page.locator(more).click();
  await page.waitForTimeout(900);
  await expect(page.locator(items)).toHaveCount(10);
  await expect(page.locator(more)).toHaveCount(0);
});

test("quick changes end in an agreeing state with no ghost left", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const names = ["Español", "Inglés", "Todos", "Español", "Todos", "Inglés"];
  for (const name of names) {
    await filter(page, name).click();
    await page.waitForTimeout(40);
  }
  await page.waitForTimeout(1200);
  expect(await state(page)).toMatchObject({ shown: 5, ghosts: 0, animations: 0 });
  await expect(filter(page, "Inglés")).toHaveAttribute("aria-pressed", "true");
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: no horizontal overflow, filter ${width < 640 ? "full width" : "compact"}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(traditionPath);
    expect(await horizontalOverflow(page)).toBe(0);
    const widths = await page.evaluate(() => {
      const group = document.querySelector("#videos [role=group]")!.getBoundingClientRect();
      const column = document.querySelector("#videos ul")!.getBoundingClientRect();
      return { group: Math.round(group.width), column: Math.round(column.width) };
    });
    if (width < 640) expect(widths.group).toBe(widths.column);
    else expect(widths.group).toBeLessThan(widths.column);
  });
}

test("text in the filter buttons is centred on both axes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto(traditionPath);
  const offsets = await page.evaluate(() =>
    [...document.querySelectorAll("#videos [role=group] button")].map((button) => {
      const range = document.createRange();
      range.selectNodeContents(button);
      const text = range.getBoundingClientRect();
      const box = button.getBoundingClientRect();
      return {
        x: Math.abs(text.left - box.left - (box.right - text.right)),
        y: Math.abs(text.top - box.top - (box.bottom - text.bottom)),
      };
    }),
  );
  for (const offset of offsets) {
    expect(offset.x).toBeLessThan(2);
    expect(offset.y).toBeLessThan(2);
  }
});

test("the list reveals on scroll and none stays hidden after a fast jump", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  const opacity = await page.evaluate(() =>
    [...document.querySelectorAll("#videos li")].map((item) => Number(getComputedStyle(item).opacity)),
  );
  expect(opacity).toEqual([1, 1, 1, 1, 1]);
});

test("under reduced motion nothing is armed", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(traditionPath);
  expect(await page.evaluate(() => document.querySelectorAll("#videos [data-rv]").length)).toBe(0);
  await context.close();
});

test("a row that leaves as a ghost carries no list marker", async ({ page }) => {
  await page.goto(traditionPath);
  await page.evaluate(() => {
    const found: string[] = [];
    Object.assign(window, { ghostMarkers: found });
    new MutationObserver((records) => {
      for (const record of records)
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) found.push(getComputedStyle(node).listStyleType);
        });
    }).observe(document.querySelector("#videos .flip-ghosts")!, { childList: true });
  });
  await filter(page, "Español").click();
  await page.waitForTimeout(400);
  const found = await page.evaluate(() => (window as unknown as { ghostMarkers: string[] }).ghostMarkers);
  expect(found.length).toBeGreaterThan(0);
  expect(found.every((marker) => marker === "none")).toBe(true);
});

test("each video shows its unmodified YouTube cover next to the title and opens the same video", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto(traditionPath);
  const row = page.locator(items).first();
  const cover = row.locator("img");
  await expect(cover).toHaveAttribute("src", /i\.ytimg\.com\/vi\/mJXAFHw_ARQ\/mqdefault\.jpg/);
  const box = await cover.boundingBox();
  expect(box?.width).toBeGreaterThanOrEqual(120);
  expect(Math.abs((box?.width ?? 0) / (box?.height ?? 1) - 16 / 9)).toBeLessThan(0.02);
  await expect(row.locator("a").first()).toHaveAttribute("href", "https://www.youtube.com/watch?v=mJXAFHw_ARQ");
  await expect(row.locator("a").first()).toHaveAttribute("tabindex", "-1");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
