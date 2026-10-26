import { readFileSync } from "node:fs";
import { expect, test } from "@playwright/test";

const john = "/es/biblia/juan/6";
const web = JSON.parse(readFileSync("data/corpus/bibles/web-c.json", "utf8")) as Record<string, string>;

const useWeb = async (page: import("@playwright/test").Page) =>
  page.addInitScript(() => localStorage.setItem("doctrina-translation", "web-c"));

test("in the WEB the words of Jesus are red and the rest of the verse is not", async ({ page }) => {
  await useWeb(page);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  const red = page.locator("#v-35 [data-jesus]");
  await expect(red).toHaveCount(1);
  await expect(red).toContainText("I am the bread of life.");
  expect(await red.evaluate((element) => getComputedStyle(element).color)).toBe("rgb(163, 39, 28)");
  expect(await page.locator("#v-35 [role=button]").evaluate((element) => getComputedStyle(element).color)).not.toBe(
    "rgb(163, 39, 28)",
  );
  await expect(page.locator("#v-35")).toContainText("Jesus said to them,");
  await expect(page.locator("#v-1 [data-jesus]")).toHaveCount(0);
  await expect(page.locator("#v-20 [data-jesus]")).toHaveCount(1);
});

test("the red does not change the text: every verse reads exactly as in the corpus", async ({ page }) => {
  await useWeb(page);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  for (const n of [10, 20, 35, 53, 70]) {
    expect(await page.locator(`#v-${n} [data-verse-text]`).evaluate((element) => element.textContent)).toBe(
      web[`John.6.${n}`],
    );
  }
});

test("the editions that carry no marking show no red", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await expect(page.locator("main [data-jesus]")).toHaveCount(0);
});

test("the dark tone is lighter and readable", async ({ page }) => {
  await useWeb(page);
  await page.emulateMedia({ colorScheme: "dark" });
  await page.addInitScript(() => localStorage.setItem("doctrina-theme", "dark"));
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  expect(await page.locator("#v-35 [data-jesus]").evaluate((element) => getComputedStyle(element).color)).toBe(
    "rgb(229, 138, 123)",
  );
});

test("a highlighted verse keeps its red inside one mark", async ({ page }) => {
  await useWeb(page);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.locator("#v-35 [role=button]").click();
  await page.locator('aside[data-side-panel] button[aria-label="Subrayar en amarillo"]').click();
  await expect(page.locator("#v-35 mark")).toHaveCount(1);
  await expect(page.locator("#v-35 mark [data-jesus]")).toHaveCount(1);
  expect(await page.locator("#v-35 mark").evaluate((element) => element.textContent)).toBe(web["John.6.35"]);
});

test("the second translation line is red too when it carries the marking", async ({ page }) => {
  await page.addInitScript(() =>
    localStorage.setItem("doctrina-second-translation", JSON.stringify({ mode: "below", id: "web-c" })),
  );
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await expect(page.locator('[data-second-verse="35"] [data-jesus]')).toHaveCount(1);
  await expect(page.locator('[data-second-verse="1"] [data-jesus]')).toHaveCount(0);
});

test("a dragged selection across red words still highlights exactly those words", async ({ page }) => {
  await useWeb(page);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.evaluate(() => document.getElementById("v-35")!.scrollIntoView({ block: "center" }));
  await page.evaluate(() => {
    const unit = document.querySelector("#v-35 [data-verse-text]")!;
    const walker = document.createTreeWalker(unit, NodeFilter.SHOW_TEXT);
    const first = walker.nextNode()!;
    const second = walker.nextNode()!;
    const range = document.createRange();
    range.setStart(first, first.textContent!.length - 4);
    range.setEnd(second, 10);
    getSelection()!.removeAllRanges();
    getSelection()!.addRange(range);
    document.dispatchEvent(new PointerEvent("pointerup", { pointerType: "mouse", bubbles: true }));
  });
  await page.locator('[role="toolbar"] button[aria-label="Subrayar en verde"]').click();
  await expect(page.locator("#v-35 mark")).toHaveCount(1);
  const marked = await page.locator("#v-35 mark").evaluate((element) => element.textContent!);
  expect(web["John.6.35"]!.includes(marked)).toBe(true);
  expect(marked.length).toBeGreaterThan(10);
});
