import { expect, test, type Locator, type Page } from "@playwright/test";
import { hasCorpus } from "./helpers";

test.use({ hasTouch: true, isMobile: true });

const hitSize = (target: Locator) =>
  target.evaluate((element) => {
    const box = element.getBoundingClientRect();
    const before = getComputedStyle(element, "::before");
    const extra = before.content !== "none" && before.position === "absolute";
    return {
      width: Math.max(box.width, extra ? parseFloat(before.width) : 0),
      height: Math.max(box.height, extra ? parseFloat(before.height) : 0),
      position: getComputedStyle(element).position,
    };
  });

async function expectTouchSize(target: Locator) {
  await target.scrollIntoViewIfNeeded();
  const { width, height } = await hitSize(target);
  expect(width).toBeGreaterThanOrEqual(44);
  expect(height).toBeGreaterThanOrEqual(44);
}

const open = async (page: Page, path: string, width: number) => {
  await page.setViewportSize({ width, height: 844 });
  await page.goto(path);
  await page.evaluate(() => document.fonts.ready);
};

test("the simplifier's «En palabras simples» button has a 44 px hit area on a tablet", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("doctrina-simplify", "on"));
  await open(page, "/es/doctrinas/eucaristia/catolica", 768);
  test.skip((await page.locator("[data-simplifier-mark]").count()) === 0, "the simplifier switch is off in this build");
  await expectTouchSize(page.locator("[data-simplifier-mark]").first());
});

test("the transliteration switch has a 44 px hit area", async ({ page }) => {
  await open(page, "/es/palabras/G4561", 390);
  await expectTouchSize(page.getByRole("button", { name: "Transliteración" }));
});

test("the verse page's edition buttons have a 44 px hit area", async ({ page }) => {
  test.skip(!hasCorpus);
  await open(page, "/es/biblia/juan/6/53", 390);
  const buttons = page.getByRole("group", { name: "Traducciones que se muestran" }).getByRole("button");
  expect(await buttons.count()).toBeGreaterThan(1);
  for (const button of await buttons.all()) await expectTouchSize(button);
});

for (const width of [390, 768]) {
  test(`the Fathers' verse-number buttons have a 44 px hit area at ${width} px and stay where they were`, async ({
    page,
  }) => {
    test.skip(!hasCorpus);
    await open(page, "/es/historia/obras/didache", width);
    const number = page.locator("[data-division-open]").first();
    await expectTouchSize(number);
    expect((await hitSize(number)).position).toBe(width >= 768 ? "absolute" : "relative");
  });
}

test("the Pasajes ruler's ticks on a phone have a 44 px hit area", async ({ page }) => {
  await open(page, "/es/doctrinas/eucaristia/catolica/pasajes", 390);
  const ticks = page.locator("nav:visible button[aria-label]");
  expect(await ticks.count()).toBeGreaterThan(3);
  for (const tick of (await ticks.all()).slice(0, 4)) {
    const { height } = await hitSize(tick);
    expect(height).toBeGreaterThanOrEqual(44);
  }
});

test("the home footer's links have a 44 px hit area", async ({ page }) => {
  await open(page, "/es", 390);
  await expectTouchSize(page.locator("footer").getByRole("link", { name: "Glosario" }));
  await expectTouchSize(page.locator("footer").getByRole("link", { name: "English" }));
});

test("tapping an edition chip on the home shows its full name", async ({ page }) => {
  await open(page, "/es", 390);
  const chip = page.locator("#bible span[tabindex='0']").first();
  await expectTouchSize(chip);
  const name = page.locator("#bible [aria-hidden='true'].invisible").first();
  await expect(name).toHaveCSS("opacity", "0");
  const box = (await chip.boundingBox())!;
  await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
  await expect(name).toHaveCSS("opacity", "1");
  await expect(name).not.toHaveText("");
});
