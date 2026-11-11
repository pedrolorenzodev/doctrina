import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const panel = 'aside[data-side-panel]:has([data-flip-block="sections-strip"])';
const strip = `${panel} [data-flip-block="sections-strip"]`;
const list = `${panel} ul[aria-label="Dónde se usa en Doctrina"]`;

async function openVerse(page: Page, path: string, verse: number, width = 1440) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(path);
  await page.locator(`#v-${verse} [role=button]`).first().click();
  await expect(page.locator(panel)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(500);
}

const usesTab = (page: Page) => page.locator(strip).getByRole("button", { name: /^(Usos|Uses)/ });

test("John 6:53 lists where Doctrina cites it, with a count, a link and the context", async ({ page }) => {
  await openVerse(page, "/es/biblia/juan/6", 53);
  await expect(usesTab(page)).toContainText(/\d/);
  await usesTab(page).click();
  await page.waitForTimeout(600);
  const items = page.locator(`${list} > li`);
  expect(await items.count()).toBeGreaterThan(1);
  const first = items.first();
  await expect(first.locator("a")).toContainText("La Escritura que usa");
  await expect(first.locator("a")).toHaveAttribute("href", /\/es\/doctrinas\/eucaristia\/[a-z]+#scripture$/);
  await expect(first).toContainText("La Eucaristía");
  await expect(first).toContainText("En el pasaje");
  const count = Number((await usesTab(page).innerText()).replace(/\D/g, ""));
  expect(count).toBe(await items.count());
});

test("the first item has no hairline above it and the others have", async ({ page }) => {
  await openVerse(page, "/es/biblia/juan/6", 53);
  await usesTab(page).click();
  await page.waitForTimeout(600);
  const widths = await page
    .locator(`${list} > li`)
    .evaluateAll((elements) => elements.map((element) => getComputedStyle(element).borderTopWidth));
  expect(widths[0]).toBe("0px");
  expect(widths.slice(1).every((width) => width === "1px")).toBe(true);
});

test("a link goes to the page section", async ({ page }) => {
  await openVerse(page, "/es/biblia/juan/6", 53);
  await usesTab(page).click();
  await page.waitForTimeout(600);
  await page.locator(`${list} > li a`).first().click();
  await expect(page).toHaveURL(/\/es\/doctrinas\/eucaristia\/[a-z]+#scripture/);
  await expect(page.locator("#scripture")).toBeVisible();
});

test("a verse nobody cites keeps «Usos» inert", async ({ page }) => {
  await openVerse(page, "/es/biblia/juan/2", 1);
  await expect(usesTab(page)).not.toContainText(/\d/);
  const before = await page.locator(`${panel} [data-flip-block="sections-body"]`).innerText();
  await usesTab(page).click();
  await page.waitForTimeout(400);
  await expect(usesTab(page)).toHaveAttribute("aria-pressed", "false");
  expect(await page.locator(`${panel} [data-flip-block="sections-body"]`).innerText()).toBe(before);
});

test("in English there are no pages yet, so «Uses» is inert", async ({ page }) => {
  await openVerse(page, "/en/bible/john/6", 53);
  await usesTab(page).click();
  await page.waitForTimeout(400);
  await expect(usesTab(page)).toHaveAttribute("aria-pressed", "false");
});

test("the list fits at 360", async ({ page }) => {
  await openVerse(page, "/es/biblia/juan/6", 53, 360);
  await usesTab(page).click();
  await page.waitForTimeout(600);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});
