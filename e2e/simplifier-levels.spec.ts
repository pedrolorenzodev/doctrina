import { readFileSync } from "node:fs";
import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, preferEnglishFatherEdition, storeSimplifyOn, traditionPath } from "./helpers";

const simplifyRoute = "**/api/ai/simplify**";
const smyrnaeans = "/es/historia/obras/ignatius-smyrnaeans";
const ring = "[data-simplifier-mark]";
const manifest = readFileSync("src/content/simplified-manifest.ts", "utf8");
const servedOn = (prefix: string) =>
  [...manifest.matchAll(/^ {2}"([^"]+)":/gm)].filter((m) => m[1]!.startsWith(prefix)).length;

const original = ["Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo."];
const clear = [
  "Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo, que él instituyó.",
];

test.beforeEach(async ({ context }) => {
  await storeSimplifyOn(context);
});

async function open(page: Page, path: string, width = 1440, height = 900) {
  await page.setViewportSize({ width, height });
  await page.goto(path, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  test.skip((await page.locator("[data-simplifier]").count()) === 0, "the simplifier switch is off in this build");
}

async function answer(page: Page, body: Record<string, unknown>, status = 200) {
  await page.route(simplifyRoute, async (route) => {
    if (route.request().method() !== "POST") return route.fulfill({ status: 204 });
    await new Promise((resolve) => setTimeout(resolve, 300));
    return route.fulfill({ status, contentType: "application/json", body: JSON.stringify(body) });
  });
}

const firstTop = (page: Page) =>
  page.evaluate(() => {
    const first = document.querySelector("[data-simplifier]")!;
    return {
      top: (first.firstElementChild!.firstElementChild as HTMLElement).getBoundingClientRect().top,
      scroll: scrollY,
    };
  });

test.describe("rings follow the manifest", () => {
  test("a tradition page gets a ring on exactly the served paragraphs", async ({ page }) => {
    await open(page, traditionPath);
    expect(await page.locator(ring).count()).toBe(servedOn("eucharist/catholic/"));
    expect(await page.locator("[data-simplifier]").count()).toBe(servedOn("eucharist/catholic/"));
    const statements = await page.locator("#teach p").count();
    expect(statements).toBeGreaterThan(servedOn("eucharist/catholic/"));
  });

  test("a 02 page gets a ring on the served common and answers paragraphs only", async ({ page }) => {
    await open(page, "/es/doctrinas/eucaristia");
    expect(await page.locator(ring).count()).toBe(servedOn("eucharist/02/common/") + servedOn("eucharist/02/answers/"));
  });

  test("the route-row switch is on the page because something is served", async ({ page }) => {
    await open(page, traditionPath);
    await expect(page.getByRole("switch", { name: "Simplificar párrafos" })).toBeVisible();
  });

  test("a Father's paragraph has a ring in the English edition", async ({ page }) => {
    await preferEnglishFatherEdition(page);
    await open(page, smyrnaeans);
    expect(await page.locator(ring).count()).toBeGreaterThan(10);
  });
});

test.describe("one level on tradition pages, two for the Fathers", () => {
  test("a served paragraph opens with no level selector and only «Más claro»; nothing moves", async ({ page }) => {
    await answer(page, {
      lang: "es",
      original,
      clear,
      very: clear,
      status: "reviewed",
      cached: true,
      levels: ["clear"],
    });
    await open(page, traditionPath);
    const before = await firstTop(page);
    await page.locator("[data-simplifier]").first().hover();
    await page.locator(`[data-simplifier] >> nth=0 >> ${ring}`).click();
    await page.waitForTimeout(150);
    expect(await firstTop(page)).toEqual(before);
    const panel = page.locator("[data-simplifier] >> nth=0 >> [data-simplifier-panel]");
    await expect(panel).toBeVisible({ timeout: 10000 });
    await expect(panel.locator("[data-simplifier-label]")).toHaveText("Simplificado por IA");
    await expect(panel.locator("[data-simplifier-text]")).toContainText("que él instituyó");
    await expect(panel.getByRole("group", { name: "Nivel de lectura" })).toHaveCount(0);
    await expect(panel.getByRole("button", { name: "Muy simple" })).toHaveCount(0);
    await expect(panel.getByRole("button", { name: "Más claro" })).toHaveCount(0);
    await expect(panel.locator("[data-simplifier-hide]")).toBeVisible();
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });

  test("the error panel of a tradition paragraph has no level selector either", async ({ page }) => {
    await answer(page, { code: "ai_provider_down", message: "x", retry: true }, 503);
    await open(page, traditionPath);
    await page.locator("[data-simplifier]").first().hover();
    await page.locator(`[data-simplifier] >> nth=0 >> ${ring}`).click();
    const panel = page.locator("[data-simplifier] >> nth=0 >> [data-simplifier-panel]");
    await expect(panel).toBeVisible({ timeout: 10000 });
    await expect(panel.locator("[data-simplifier-message]")).toBeVisible();
    await expect(panel.getByRole("group", { name: "Nivel de lectura" })).toHaveCount(0);
  });

  test("a Father's paragraph keeps the two-level selector and switches instantly", async ({ page }) => {
    await preferEnglishFatherEdition(page);
    await open(page, smyrnaeans);
    const at = await page.evaluate(() =>
      [...document.querySelectorAll("[data-simplifier]")].findIndex(
        (element) => element.closest('[id="d-6.2"]') !== null,
      ),
    );
    const mark = page.locator(`[data-simplifier] >> nth=${at} >> ${ring}`);
    await mark.scrollIntoViewIfNeeded();
    await mark.click({ force: true });
    const panel = page.locator(`[data-simplifier] >> nth=${at} >> [data-simplifier-panel]`);
    await expect(panel).toBeVisible({ timeout: 12000 });
    const group = panel.getByRole("group", { name: "Nivel de lectura" });
    await expect(group).toBeVisible();
    await expect(group.getByRole("button", { name: "Más claro" })).toBeVisible();
    await expect(group.getByRole("button", { name: "Muy simple" })).toBeVisible();
    await group.getByRole("button", { name: "Muy simple" }).click();
    await expect(group.getByRole("button", { name: "Muy simple" })).toHaveAttribute("aria-pressed", "true");
  });

  test("the level memory of a Father's paragraph does not leak into a tradition page", async ({ page }) => {
    await preferEnglishFatherEdition(page);
    await open(page, smyrnaeans);
    await page.goto(traditionPath, { waitUntil: "networkidle" });
    await page.locator("[data-simplifier]").first().hover();
    await page.locator(`[data-simplifier] >> nth=0 >> ${ring}`).click();
    const panel = page.locator("[data-simplifier] >> nth=0 >> [data-simplifier-panel]");
    await expect(panel).toBeVisible({ timeout: 12000 });
    await expect(panel.getByRole("group", { name: "Nivel de lectura" })).toHaveCount(0);
  });
});
