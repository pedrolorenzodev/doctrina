import { expect, test } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const didache = "/es/historia/obras/didache";
const strip = "main [data-reader-strip]";

test("a Father's work is read division by division with its locator, edition and licence", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(didache);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("The Teaching of the Lord to the Gentiles");
  await expect(page.locator("main")).toContainText(
    "Texto en inglés. Traducción de Joseph Barber Lightfoot and J. R. Harmer, 1891.",
  );
  const divisions = page.locator("[data-father-text] > div");
  await expect(divisions).toHaveCount(16);
  await expect(divisions.first()).toContainText("There are two ways");
  await expect(page.locator("[data-father-text]")).toHaveAttribute("lang", "en");
  await expect(page.locator("main")).toContainText("Licencia: Dominio público");
});

test("the division locator sits in the left margin from 768 px and above the text below it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(didache);
  const first = page.locator("[data-father-text] > div").first();
  const locator = (await first.locator("span").first().boundingBox())!;
  const text = (await first.locator("p").last().boundingBox())!;
  expect(locator.x + locator.width).toBeLessThan(text.x);
  await page.setViewportSize({ width: 390, height: 844 });
  const stacked = (await first.locator("span").first().boundingBox())!;
  const below = (await first.locator("p").last().boundingBox())!;
  expect(stacked.y + stacked.height).toBeLessThanOrEqual(below.y + 1);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("«Aa» offers the text size only, and A+ makes the text larger", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(didache);
  const body = page.locator("[data-father-text] p").last();
  const before = await body.evaluate((element) => parseFloat(getComputedStyle(element).fontSize));
  await page.locator(strip).getByRole("button", { name: "Texto", exact: true }).click();
  const menu = page.getByRole("dialog", { name: "Texto" });
  await expect(menu).toBeVisible();
  await expect(menu).not.toContainText("Formato");
  await menu.getByRole("button", { name: "Agrandar el texto" }).click();
  const after = await body.evaluate((element) => parseFloat(getComputedStyle(element).fontSize));
  expect(after).toBeGreaterThan(before);
});

test("an unknown work is a 404", async ({ page }) => {
  const response = await page.goto("/es/historia/obras/no-existe");
  expect(response?.status()).toBe(404);
});

test("in the tree a Father with texts opens to them and the open work is marked", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/obras/ignatius-romans");
  const father = page.locator('aside nav li[data-id="history/fathers/ignatius-of-antioch"]');
  await expect(father.locator("> ul")).toHaveAttribute("data-open", "true");
  await expect(father.locator("> ul a")).toHaveCount(7);
  await expect(page.locator("aside nav a[aria-current=page]")).toHaveText("A los Romanos");
  await father.locator("> ul a", { hasText: "A los Efesios" }).click();
  await expect(page).toHaveURL(/\/es\/historia\/obras\/ignatius-ephesians$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Ephesians");
});

test("a work links to the previous and next work of the same Father; a lone work has none", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/obras/ignatius-polycarp");
  const links = page.locator("main nav[aria-label] a", { hasText: /Obra (anterior|siguiente)/ });
  await expect(links).toHaveCount(2);
  await expect(links.first()).toContainText("A los Filadelfios");
  await expect(links.last()).toContainText("A los Romanos");
  await links.last().click();
  await expect(page).toHaveURL(/\/es\/historia\/obras\/ignatius-romans$/);
  await page.goto(didache);
  await expect(page.locator("main nav[aria-label] a", { hasText: /Obra (anterior|siguiente)/ })).toHaveCount(0);
});

test("arriving on a division by its anchor marks it for about two seconds", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${didache}#d-3`);
  const division = page.locator("#d-3");
  await expect(division).toHaveAttribute("data-marked", "");
  await expect(division).not.toHaveAttribute("data-marked", "", { timeout: 4000 });
  const top = (await division.boundingBox())!.y;
  expect(top).toBeGreaterThan(50);
});
