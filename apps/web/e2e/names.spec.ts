import { expect, test } from "@playwright/test";
import { hasFathers } from "./helpers";

test("the Shepherd of Hermas has one name on Padres and on Fuentes", async ({ page }) => {
  await page.goto("/es/historia/padres");
  await expect(page.getByText("El Pastor de Hermas", { exact: true }).first()).toBeAttached();
  await page.goto("/es/fuentes");
  await expect(page.getByText("El Pastor de Hermas", { exact: true }).first()).toBeAttached();
  await expect(page.getByText("El Pastor", { exact: true })).toHaveCount(0);
});

test("the English Fuentes uses the English name of the same work", async ({ page }) => {
  await page.goto("/en/sources");
  await expect(page.getByText("The Shepherd of Hermas", { exact: true }).first()).toBeAttached();
  await expect(page.getByText("The Shepherd", { exact: true })).toHaveCount(0);
});

test("a Father's work page shows its full name", async ({ page }) => {
  test.skip(!hasFathers, "needs the local Fathers corpus");
  await page.goto("/es/historia/obras/ignatius-ephesians");
  await expect(page.locator("main").getByText("Carta a los Efesios").first()).toBeAttached();
});

test("a work once English-only shows its sourced Spanish name in Spanish and its English name in English", async ({
  page,
}) => {
  test.skip(!hasFathers, "needs the local Fathers corpus");
  await page.goto("/es/historia/obras/athenagoras-plea-christians");
  await expect(page.locator("main").getByText("Súplica en favor de los cristianos").first()).toBeAttached();
  await page.goto("/en/history/works/athenagoras-plea-christians");
  await expect(page.locator("main").getByText("A Plea for the Christians").first()).toBeAttached();
  await expect(page.locator("main").getByText("Súplica en favor de los cristianos")).toHaveCount(0);
});
