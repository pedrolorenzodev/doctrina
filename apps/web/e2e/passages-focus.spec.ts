import { expect, test } from "@playwright/test";
import { hasCorpus } from "./helpers";

const route = "/es/doctrinas/bautismo/catolica/pasajes";
const focused = (page: import("@playwright/test").Page) => page.locator("p.verse-focus");

async function fillOf(locator: import("@playwright/test").Locator) {
  return locator.evaluate((element) => {
    const fill = getComputedStyle(element, "::before");
    return {
      background: fill.backgroundColor,
      zIndex: fill.zIndex,
      position: fill.position,
      left: parseFloat(fill.left),
      right: parseFloat(fill.right),
      top: parseFloat(fill.top),
      bottom: parseFloat(fill.bottom),
      radius: fill.borderTopLeftRadius,
      text: getComputedStyle(element).color,
      numeral: getComputedStyle(element.querySelector(".verse-numeral")!).color,
      numeralWeight: getComputedStyle(element.querySelector(".verse-numeral")!).fontWeight,
    };
  });
}

test("John 3:3-8 fills verse 5 only, with its number inside the fill", async ({ page }) => {
  await page.goto(`${route}#john-3-3-john-3-8`);
  await expect(focused(page)).toHaveCount(1);
  await expect(focused(page).locator(".verse-numeral")).toHaveText("5");
  const fill = await fillOf(focused(page));
  expect(fill).toMatchObject({
    background: "rgba(28, 23, 19, 0.07)",
    zIndex: "-1",
    position: "absolute",
    radius: "6px",
  });
  expect(fill.left).toBe(-40);
  expect(fill.right).toBe(-14);
  expect(fill.top).toBe(-7);
  expect(fill.bottom).toBe(-7);
  expect(fill.text).toBe("rgb(28, 23, 19)");
  expect(fill.numeralWeight).toBe("500");
  const [paragraph, numeral] = await Promise.all([
    focused(page).boundingBox(),
    focused(page).locator(".verse-numeral").boundingBox(),
  ]);
  expect(numeral!.x).toBeGreaterThan(paragraph!.x - 40);
  expect(numeral!.x + numeral!.width).toBeLessThan(paragraph!.x);
});

test("context verses keep their own look", async ({ page }) => {
  await page.goto(`${route}#john-3-3-john-3-8`);
  const verses = page.locator("p:has(.verse-numeral)");
  expect(await verses.count()).toBe(6);
  const context = verses.filter({ hasNot: page.locator(".verse-focus") }).first();
  expect(await context.evaluate((element) => getComputedStyle(element, "::before").content)).toBe("none");
  expect(await context.evaluate((element) => getComputedStyle(element).color)).toBe("rgb(42, 38, 32)");
});

test("Acts 2:37-42 fills verse 38", async ({ page }) => {
  await page.goto(`${route}#acts-2-37-acts-2-42`);
  await expect(focused(page)).toHaveCount(1);
  await expect(focused(page).locator(".verse-numeral")).toHaveText("38");
});

test("a block without enough evidence has no fill", async ({ page }) => {
  test.skip(!hasCorpus, "needs the local Bible corpus");
  await page.goto(`${route}#matt-28-18-matt-28-20`);
  await expect(page.getByRole("heading", { level: 2 })).toHaveText(/Mateo\s28:18–20/);
  await expect(page.locator("p:has(.verse-numeral)").first()).toBeVisible();
  await expect(focused(page)).toHaveCount(0);
});

test("two consecutive centrals join into one band", async ({ page }) => {
  await page.goto(`${route}#1pet-3-18-1pet-3-22`);
  await expect(focused(page)).toHaveCount(2);
  const radii = await focused(page).evaluateAll((elements) =>
    elements.map((element) => {
      const fill = getComputedStyle(element, "::before");
      return [fill.borderTopLeftRadius, fill.borderBottomLeftRadius];
    }),
  );
  expect(radii).toEqual([
    ["6px", "0px"],
    ["0px", "6px"],
  ]);
});

test("a two-verse block can carry one centre", async ({ page }) => {
  await page.goto(`${route}#1cor-6-11`);
  await expect(page.getByRole("heading", { level: 2 })).toHaveText(/12:12–13/);
  await expect(focused(page)).toHaveCount(1);
  await expect(focused(page).locator(".verse-numeral")).toHaveText("13");
});

test("dark theme: the fill is a light veil and the text stays ink", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto(`${route}#john-3-3-john-3-8`);
  await page.evaluate(() => document.documentElement.setAttribute("data-theme", "dark"));
  const fill = await fillOf(focused(page));
  expect(fill.background).toBe("rgba(242, 242, 240, 0.07)");
  expect(fill.text).toBe("rgb(242, 242, 240)");
  expect(fill.numeral).toBe("rgb(242, 242, 240)");
});

test.describe("390 px", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("the fill keeps 12 px each side, no horizontal scroll, the number stays inline", async ({ page }) => {
    await page.goto(`${route}#john-3-3-john-3-8`);
    const fill = await fillOf(focused(page));
    expect(fill.left).toBe(-12);
    expect(fill.right).toBe(-12);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBe(0);
    const [paragraph, numeral] = await Promise.all([
      focused(page).boundingBox(),
      focused(page).locator(".verse-numeral").boundingBox(),
    ]);
    expect(numeral!.x).toBeGreaterThanOrEqual(paragraph!.x);
    const box = paragraph!;
    expect(box.x - 12).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width + 12).toBeLessThanOrEqual(390);
  });
});

test("the fill sits below the letters", async ({ page }) => {
  test.skip(!hasCorpus, "needs the local Bible corpus");
  await page.goto(`${route}#john-3-3-john-3-8`);
  const paragraph = focused(page);
  await paragraph.scrollIntoViewIfNeeded();
  expect(await paragraph.evaluate((element) => getComputedStyle(element).isolation)).toBe("isolate");
  const covered = await paragraph.evaluate((element) => {
    const word = element.querySelector("span:not(.verse-numeral)")!.getBoundingClientRect();
    const top = document.elementFromPoint(word.left + word.width / 2, word.top + word.height / 2);
    return top !== null && element.contains(top);
  });
  expect(covered).toBe(true);
});

test("the fill carries no visible word and nothing for screen readers", async ({ page }) => {
  await page.goto(`${route}#john-3-3-john-3-8`);
  await expect(page.getByText(/central/i)).toHaveCount(0);
  await expect(focused(page).locator("[role], [aria-label]")).toHaveCount(0);
});
