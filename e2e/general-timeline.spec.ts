import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const timeline = "/es/historia/linea-de-tiempo";
const item = (page: Page, id: string) => page.locator(`[data-scroller] button[data-entry="${id}"]`);
const detail = (page: Page) => page.locator("[aria-live=polite]").last();

test("the page: title, crumbs, the sidebar's current leaf and the four groups in order", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  await expect(page.locator("main h1")).toHaveText("Línea de tiempo");
  await expect(page).toHaveTitle("Línea de tiempo");
  await expect(page.locator('main nav[aria-label="Ruta"] [aria-current=page]')).toHaveText("Línea de tiempo");
  await expect(page.locator("[data-scroller] p.sticky")).toHaveText([
    "Padres y escritores",
    "Concilios",
    "Escritos anónimos",
    "Corrientes condenadas",
  ]);
  await expect(page.locator("[data-scroller] button[data-entry]")).toHaveCount(51 + 22 + 5 + 18);
  await expect(page.locator('aside a[href="/es/historia/linea-de-tiempo"]')).toHaveAttribute("aria-current", "page");
});

test("the line is 770 years at 5.85 px a year and scrolls inside its box, never the page", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  const box = page.locator("[data-scroller]");
  const sizes = await box.evaluate((element) => ({ scroll: element.scrollWidth, client: element.clientWidth }));
  expect(Math.abs(sizes.scroll - 4505)).toBeLessThan(3);
  expect(sizes.client).toBeLessThan(sizes.scroll);
  expect(await horizontalOverflow(page)).toBe(0);
});

test("choosing a person: dates as labelled facts, the band of his time, his years on the axis; again to deselect", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  await expect(detail(page)).toHaveText("Elegí una persona, un concilio o una corriente para ver sus fechas.");
  await item(page, "polycarp-of-smyrna").click();
  await expect(item(page, "polycarp-of-smyrna")).toHaveAttribute("aria-pressed", "true");
  await expect(detail(page).locator("dl dt")).toHaveText(["Nació", "Murió"]);
  await expect(detail(page).locator("dl dd")).toHaveText(["c. 69", "c. 155"]);
  await expect(detail(page).locator("h3")).toHaveText("Policarpo de Esmirna");
  await expect(detail(page).locator("a")).toHaveAttribute("href", /polycarp-of-smyrna$/);
  await expect(page.locator("[data-scroller] .bg-accent-weak")).toHaveCount(1);
  await expect(page.locator("[data-scroller] [aria-hidden=true] .bg-ink").first()).toBeVisible();
  await item(page, "polycarp-of-smyrna").click();
  await expect(item(page, "polycarp-of-smyrna")).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator("[data-scroller] .bg-accent-weak")).toHaveCount(0);
  await expect(detail(page)).toContainText("Elegí una persona");
});

test("a council, a movement and an anonymous writing each have their own labelled dates", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  await item(page, "nicaea-1").click();
  await expect(detail(page).locator("p").first()).toHaveText("Concilio");
  await expect(detail(page).locator("dl dt")).toHaveText(["Fecha"]);
  await expect(detail(page).locator("button")).toHaveText(/Ir a la página de/);
  await item(page, "arianism").click();
  await expect(detail(page).locator("dl dt")).toHaveText(["Desde", "Hasta"]);
  await item(page, "didache").click();
  await expect(detail(page).locator("dl dt")).toHaveText(["Escrito"]);
});

test("arrows move the focus along the items, Enter sends it to the heading", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  await item(page, "clement-of-rome").focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("[data-scroller] button[data-entry]:focus")).not.toHaveAttribute(
    "data-entry",
    "clement-of-rome",
  );
  await page.keyboard.press("Enter");
  await expect(detail(page).locator("h3")).toBeFocused();
});

test("an item outside the visible years scrolls into view when chosen", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(timeline);
  const box = page.locator("[data-scroller]");
  expect(await box.evaluate((element) => element.scrollLeft)).toBe(0);
  await item(page, "iconoclasm").focus();
  await page.keyboard.press("Enter");
  await expect.poll(() => box.evaluate((element) => element.scrollLeft)).toBeGreaterThan(2000);
});

test("dragging with the mouse pans the line and does not choose what was under the pointer", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  const box = page.locator("[data-scroller]");
  const rect = (await box.boundingBox())!;
  await page.mouse.move(rect.x + 700, rect.y + 200);
  await page.mouse.down();
  await page.mouse.move(rect.x + 300, rect.y + 200, { steps: 8 });
  await page.mouse.up();
  expect(await box.evaluate((element) => element.scrollLeft)).toBeGreaterThan(300);
  await expect(page.locator('[data-scroller] button[aria-pressed="true"]')).toHaveCount(0);
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: the page never overflows and the line scrolls inside its box @webkit`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(timeline);
    await expect(page.locator("[data-scroller] button[data-entry]").first()).toBeVisible();
    expect(await horizontalOverflow(page)).toBe(0);
    await item(page, "polycarp-of-smyrna").click();
    expect(await horizontalOverflow(page)).toBe(0);
  });
}
