import { expect, test } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const father = (id: string) => `/es/historia/padres/${id}`;
const ignatius = father("ignatius-of-antioch");
const item = (page: import("@playwright/test").Page, name: string) =>
  page.locator("#time button[data-entry]").filter({ hasText: name });

test("Ignatius: the contemporaries, the currents he fought and the events, in their three groups", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(ignatius);
  await expect(page.locator("#time h2")).toHaveText("Tiempo contemporáneo");
  await expect(page.locator("#time h2 + p")).toHaveText(
    "Su vida junto a la de quienes vivieron en su época, del año 20 al 170.",
  );
  await expect(page.locator("#time p.sticky")).toHaveText(["Personas", "Corrientes que combatió", "Hechos"]);
  const names = await page
    .locator("#time button[data-entry]")
    .evaluateAll((buttons) => buttons.map((button) => (button as HTMLElement).dataset.entry));
  expect(names.slice(0, 5)).toEqual([
    "clement-of-rome",
    "ignatius-of-antioch",
    "papias-of-hierapolis",
    "polycarp-of-smyrna",
    "justin-martyr",
  ]);
  expect(names).toContain("docetism");
  expect(names).toContain("judaizers");
  await expect(item(page, "Ignacio de Antioquía")).toHaveCSS("color", /.+/);
});

test("choosing an item shows its detail with a link to its page, and nothing for the page's own entity", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(ignatius);
  await expect(page.locator("#time [aria-live] p")).toHaveText(
    "Elige una persona o un hecho de la línea para ver sus fechas y quién fue.",
  );
  await item(page, "Policarpo").click();
  await expect(item(page, "Policarpo")).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#time [aria-live] h3")).toHaveText("Policarpo de Esmirna");
  await expect(page.locator("#time [aria-live] a")).toHaveAttribute("href", /polycarp-of-smyrna$/);
  await item(page, "Ignacio de Antioquía").click();
  await expect(page.locator("#time [aria-live] h3")).toHaveText("Ignacio de Antioquía");
  await expect(page.locator("#time [aria-live] a, #time [aria-live] button")).toHaveCount(0);
  await item(page, "Docetismo").click();
  await expect(page.locator("#time [aria-live] button")).toHaveText("Ir a la página de Docetismo");
});

test("the fixed strip shows while the detail is below the screen and hides once the detail is in view", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 640 });
  await page.goto(ignatius);
  const strip = page.locator("[data-strip]");
  await expect(strip).toHaveCount(0);
  await page.locator("#time").scrollIntoViewIfNeeded();
  await page.evaluate(() => scrollTo(0, document.querySelector("#time")!.getBoundingClientRect().top + scrollY - 80));
  await item(page, "Justino").click();
  await expect(strip).toBeVisible();
  await expect(strip.locator("b")).toHaveText("Justino Mártir");
  await expect(strip.locator("a")).toHaveAttribute("href", /justin-martyr$/);
  expect(await strip.evaluate((element) => Number(getComputedStyle(element).opacity))).toBeGreaterThan(0.9);
  await page.evaluate(() => document.querySelector("#time h3")!.scrollIntoView({ block: "center" }));
  await expect(strip).toBeHidden();
  await item(page, "Policarpo").click();
  await expect(strip.locator("b")).toHaveText("Policarpo de Esmirna");
});

test("under reduced motion the strip is on or off, never half transparent", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 640 });
  await page.goto(ignatius);
  await page.evaluate(() => scrollTo(0, document.querySelector("#time")!.getBoundingClientRect().top + scrollY - 80));
  await item(page, "Justino").click();
  const strip = page.locator("[data-strip]");
  const opacities = new Set<number>();
  for (let y = 0; y < 900; y += 60) {
    await page.evaluate((offset) => scrollBy(0, offset), 60);
    opacities.add(await strip.evaluate((element) => Number(getComputedStyle(element).opacity)));
  }
  expect([...opacities].every((opacity) => opacity === 0 || opacity === 1)).toBe(true);
});

test("arrows move the focus along the items and Enter sends it to the detail heading", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(ignatius);
  await item(page, "Clemente").focus();
  await page.keyboard.press("ArrowRight");
  await expect(item(page, "Ignacio de Antioquía")).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("Enter");
  await expect(page.locator("#time [aria-live] h3")).toBeFocused();
  await expect(page.locator("#time [aria-live] h3")).toHaveText("Papías de Hierápolis");
});

test("on a phone the timeline scrolls sideways inside its box and the page does not", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto(ignatius);
  await expect(page.locator("#time p.hidden").first()).toBeVisible();
  expect(await horizontalOverflow(page)).toBe(0);
  const scrolls = await page
    .locator('#time [class*="overflow-x-auto"]')
    .evaluate((box) => box.scrollWidth > box.clientWidth);
  expect(scrolls).toBe(true);
});

test("an ecumenical council inside a page's window gets the dot and its legend line; a page without one has neither", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(father("augustine-of-hippo"));
  expect(await page.locator("#time [data-ecumenical]").count()).toBeGreaterThanOrEqual(1);
  await expect(page.locator("#time li", { hasText: "Lo reciben como ecuménico" })).toHaveCount(1);
  await page.goto(ignatius);
  await expect(page.locator("#time [data-ecumenical]")).toHaveCount(0);
  await expect(page.locator("#time li", { hasText: "Lo reciben como ecuménico" })).toHaveCount(0);
});

for (const width of [360, 390, 768, 1024, 1440]) {
  for (const id of ["augustine-of-hippo", "didache", "polycarp-of-smyrna"]) {
    test(`${width}px, ${id}: the timeline never makes the page overflow @webkit`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(father(id));
      await expect(page.locator("#time button[data-entry]").first()).toBeVisible();
      expect(await horizontalOverflow(page)).toBe(0);
    });
  }
}

test("all 56 pages have the section and at least their own item", async ({ request }) => {
  const ids = [
    ...(await (await request.get(ignatius)).text()).matchAll(/href="\/es\/historia\/padres\/([a-z0-9-]+)"/g),
  ].map((match) => match[1]!);
  for (const id of new Set(ids)) {
    const html = await (await request.get(father(id))).text();
    expect(html, id).toContain('id="time"');
    expect(html, id).toContain(`data-entry="${id}"`);
  }
});
