import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const timeline = "/es/historia/linea-de-tiempo";
const item = (page: Page, id: string) => page.locator(`[data-scroller] button[data-entry="${id}"]`);
const detail = (page: Page) => page.locator("aside[data-side-panel]");

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
  await expect(detail(page)).toHaveAttribute("data-open", "false");
  await expect(detail(page)).toBeHidden();
  await item(page, "polycarp-of-smyrna").click();
  await expect(item(page, "polycarp-of-smyrna")).toHaveAttribute("aria-pressed", "true");
  await expect(detail(page).locator("dl dt")).toHaveText(["Nació", "Murió"]);
  await expect(detail(page).locator("dl dd")).toHaveText(["c. 69", "c. 155"]);
  await expect(detail(page)).toBeVisible();
  await expect(detail(page).locator("h2")).toHaveText("Policarpo de Esmirna");
  await expect(detail(page).locator("a")).toHaveAttribute("href", /polycarp-of-smyrna$/);
  await expect(page.locator("[data-scroller] .bg-accent-weak")).toHaveCount(1);
  await expect(page.locator("[data-scroller] [aria-hidden=true] .bg-ink").first()).toBeVisible();
  await item(page, "polycarp-of-smyrna").click();
  await expect(item(page, "polycarp-of-smyrna")).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator("[data-scroller] .bg-accent-weak")).toHaveCount(0);
  await expect(detail(page)).toBeHidden();
});

test("a council, a movement and an anonymous writing each have their own labelled dates", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  await item(page, "nicaea-1").click();
  await expect(detail(page).locator("div.font-ui > p").first()).toHaveText("Concilio");
  await expect(detail(page).locator("dl dt")).toHaveText(["Fecha"]);
  await expect(detail(page).getByRole("button", { name: /Ir a la página de/ })).toBeVisible();
  await item(page, "arianism").click();
  await expect(detail(page).locator("dl dt")).toHaveText(["Desde", "Hasta"]);
  await item(page, "didache").click();
  await expect(detail(page).locator("dl dt")).toHaveText(["Compuesta"]);
});

test("the panel: opens on the right with its title, closes with its button or Escape and keeps the selection", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  await item(page, "justin-martyr").click();
  const panel = detail(page);
  await expect(panel).toBeVisible();
  await expect(panel.getByText("Lo elegido en la línea")).toBeVisible();
  await expect.poll(async () => Math.round((await panel.boundingBox())!.x)).toBe(1060);
  const box = (await panel.boundingBox())!;
  expect(Math.round(box.width)).toBe(380);
  expect(Math.round(box.x + box.width)).toBe(1440);
  expect(
    await page.locator("#content").evaluate((main) => parseFloat(getComputedStyle(main).paddingRight)),
  ).toBeGreaterThanOrEqual(404);
  await panel.getByRole("button", { name: "Cerrar el panel" }).click();
  await expect(panel).toBeHidden();
  await expect(item(page, "justin-martyr")).toHaveAttribute("aria-pressed", "true");
  await expect(item(page, "justin-martyr")).toBeFocused();
  expect(
    await page.locator("#content").evaluate((main) => parseFloat(getComputedStyle(main).paddingRight)),
  ).toBeLessThan(404);
  await item(page, "justin-martyr").click();
  await expect(panel).toBeVisible();
  await expect(item(page, "justin-martyr")).toHaveAttribute("aria-pressed", "true");
  await page.keyboard.press("Escape");
  await expect(panel).toBeHidden();
  await item(page, "irenaeus-of-lyon").click();
  await expect(panel.locator("h2")).toHaveText("Ireneo de Lyon");
});

test("below 1100 px the panel is a half sheet at the bottom and the page makes room under it", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto(timeline);
  await item(page, "justin-martyr").click();
  const panel = detail(page);
  await expect(panel).toBeVisible();
  await expect
    .poll(async () => {
      const rect = (await panel.boundingBox())!;
      return Math.round(rect.y + rect.height);
    })
    .toBe(800);
  const box = (await panel.boundingBox())!;
  expect(Math.abs(box.height - 0.52 * 800)).toBeLessThan(3);
  expect(Math.round(box.width)).toBe(390);
  expect(
    await page.locator("#content").evaluate((main) => parseFloat(getComputedStyle(main).paddingBottom)),
  ).toBeGreaterThan(400);
  expect(await horizontalOverflow(page)).toBe(0);
});

test("under reduced motion the panel has no transition", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  await expect(detail(page)).toHaveCSS("transition-duration", "0s");
});

test("the overview ruler: one thin bar per item, a window that follows the scroll and writes its years", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  const ruler = page.locator("[data-ruler]");
  await expect(ruler).toBeVisible();
  await expect(ruler.locator("[data-ruler-item]")).toHaveCount(96);
  const box = page.locator("[data-scroller]");
  const sizes = await box.evaluate((element) => ({ scroll: element.scrollWidth, client: element.clientWidth }));
  const win = ruler.locator("[data-ruler-window]");
  const rulerBox = (await ruler.boundingBox())!;
  const first = (await win.boundingBox())!;
  expect(Math.abs(first.width / rulerBox.width - sizes.client / sizes.scroll)).toBeLessThan(0.01);
  const lastYear = Math.round(30 + (sizes.client / sizes.scroll) * 770);
  await expect(ruler.locator("[data-ruler-years]")).toHaveText(`30–${lastYear}`);
  await box.evaluate((element) => element.scrollTo({ left: 2000, behavior: "instant" }));
  await expect
    .poll(async () => Math.round((((await win.boundingBox())!.x - rulerBox.x) / rulerBox.width) * 1000))
    .toBe(Math.round((2000 / sizes.scroll) * 1000));
  await expect(ruler.locator("[data-ruler-years]")).toHaveText(
    `${Math.round(30 + (2000 / sizes.scroll) * 770)}–${Math.round(30 + ((2000 + sizes.client) / sizes.scroll) * 770)}`,
  );
});

test("dragging the ruler's window scrolls the line; pressing the ruler elsewhere takes the window there", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(timeline);
  const ruler = page.locator("[data-ruler]");
  const box = page.locator("[data-scroller]");
  const sizes = await box.evaluate((element) => ({ scroll: element.scrollWidth, client: element.clientWidth }));
  const rulerBox = (await ruler.boundingBox())!;
  const win = (await ruler.locator("[data-ruler-window]").boundingBox())!;
  await page.mouse.move(win.x + win.width / 2, win.y + win.height / 2);
  await page.mouse.down();
  await page.mouse.move(win.x + win.width / 2 + 200, win.y + win.height / 2, { steps: 6 });
  await page.mouse.up();
  const dragged = await box.evaluate((element) => element.scrollLeft);
  expect(Math.abs(dragged - (200 / rulerBox.width) * sizes.scroll)).toBeLessThan(40);
  await page.mouse.click(rulerBox.x + rulerBox.width * 0.8, rulerBox.y + 22);
  const target = Math.min(sizes.scroll - sizes.client, 0.8 * sizes.scroll - sizes.client / 2);
  await expect.poll(() => box.evaluate((element) => element.scrollLeft)).toBeGreaterThan(target - 60);
  await expect(page.locator("[data-scroller] button[aria-pressed=true]")).toHaveCount(0);
});

test("the chosen item is the accent bar of the ruler", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  await item(page, "polycarp-of-smyrna").click();
  await expect(page.locator('[data-ruler-item="polycarp-of-smyrna"]')).toHaveClass(/bg-accent/);
  await expect(page.locator('[data-ruler-item="justin-martyr"]')).not.toHaveClass(/bg-accent/);
});

test("the seven ecumenical councils carry a dot in their ring, explained by one legend line, and their panel says who receives them", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  await expect(page.locator("[data-scroller] [data-ecumenical]")).toHaveCount(7);
  await expect(page.getByText("Lo reciben como ecuménico las Iglesias católica y ortodoxa")).toBeVisible();
  await item(page, "nicaea-1").click();
  await expect(detail(page).getByText("Lo reciben como concilio ecuménico")).toBeVisible();
  await expect(detail(page)).toContainText("Iglesia católica");
  await item(page, "jerusalem-49").click();
  await expect(detail(page).getByText("Concilio ecuménico", { exact: true })).toBeVisible();
  await expect(detail(page)).toContainText("No se cuenta entre los concilios ecuménicos");
  await item(page, "polycarp-of-smyrna").click();
  await expect(detail(page).getByText("Concilio ecuménico")).toHaveCount(0);
});

test("a Father's panel lists his main writings with their dates; a council's has none", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  await item(page, "ignatius-of-antioch").click();
  await expect(detail(page).getByText("Escritos principales")).toBeVisible();
  await expect(detail(page).locator("li")).toHaveCount(1);
  await expect(detail(page).locator("li")).toContainText("Siete cartas");
  await expect(detail(page).locator("li")).toContainText("c. 107–110");
  await item(page, "justin-martyr").click();
  await expect(detail(page).locator("li")).toHaveCount(3);
  await item(page, "nicaea-1").click();
  await expect(detail(page).getByText("Escritos principales")).toHaveCount(0);
});

test("the panel switches to the sheet at 1024 px (lg), not later: side panel with room at 1050, sheet at 1000", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1050, height: 800 });
  await page.goto(timeline);
  await item(page, "justin-martyr").click();
  const panel = detail(page);
  await expect.poll(async () => Math.round((await panel.boundingBox())!.x)).toBe(1050 - 380);
  const scroller = (await page.locator("[data-scroller]").boundingBox())!;
  expect(scroller.x + scroller.width).toBeLessThan(1050 - 380);
  await page.setViewportSize({ width: 1000, height: 800 });
  await expect.poll(async () => Math.round((await panel.boundingBox())!.width)).toBe(1000);
});

test("both axes start at the first year, 30, and carry its tick", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  await expect(page.locator("[data-scroller] [aria-hidden=true].border-b span", { hasText: /^30$/ })).toHaveCount(1);
  await expect(page.locator("[data-scroller] [aria-hidden=true].border-t span", { hasText: /^30$/ })).toHaveCount(1);
});

test("the dashed lead of a chosen person goes ink with his bar", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(timeline);
  const lead = item(page, "polycarp-of-smyrna").locator("span.border-dashed");
  await expect(lead).toHaveCSS("border-top-color", "rgb(174, 171, 164)");
  await item(page, "polycarp-of-smyrna").click();
  await expect(lead).toHaveCSS("border-top-color", "rgb(28, 23, 19)");
});

test("the English route does not exist until the English content does, and its sidebar leaf is inert", async ({
  page,
  request,
}) => {
  expect((await request.get("/en/history/timeline")).status()).toBe(404);
  await page.goto("/en");
  await expect(page.locator('aside a[href*="timeline"]')).toHaveCount(0);
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
  await expect(detail(page).locator("h2")).toBeFocused();
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

test("a hash arrives with that item chosen, its panel open, the line and the page scrolled to it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 800 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(`${timeline}#justin-martyr`);
  const button = item(page, "justin-martyr");
  await expect(button).toHaveAttribute("aria-pressed", "true");
  await expect(detail(page)).toBeVisible();
  await expect(detail(page).locator("h2")).toHaveText("Justino Mártir");
  await expect.poll(async () => (await button.boundingBox())!.y).toBeGreaterThan(55);
  const rect = (await button.boundingBox())!;
  expect(rect.y + rect.height).toBeLessThan(800);
});

test("a council arrives far to the right: the line scrolls sideways to show it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 800 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(`${timeline}#nicaea-2`);
  await expect(item(page, "nicaea-2")).toHaveAttribute("aria-pressed", "true");
  await expect.poll(() => page.locator("[data-scroller]").evaluate((box) => box.scrollLeft)).toBeGreaterThan(3000);
});

test("an unknown or malformed hash leaves the page as it is", async ({ page }) => {
  await page.goto(`${timeline}#nobody`);
  await expect(page.locator('[data-scroller] button[aria-pressed="true"]')).toHaveCount(0);
  await page.goto(`${timeline}#%E0%A4%A`);
  await expect(page.locator('[data-scroller] button[aria-pressed="true"]')).toHaveCount(0);
  await expect(page.locator("main h1")).toHaveText("Línea de tiempo");
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
