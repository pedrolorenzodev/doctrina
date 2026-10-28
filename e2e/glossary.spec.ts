import { expect, test } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const rows = "main ul li:not([data-id^=group-])";

test("the glossary lists the hundred terms by letter, filters them and is reached from the tree", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/glosario");
  await expect(page.locator("h1")).toHaveText("Glosario");
  await expect(page.locator("main")).toContainText("Borrador");
  await expect(page.locator(rows)).toHaveCount(100);
  await expect(page.locator("main h3").first()).toHaveText("A");
  const filter = page.getByRole("searchbox", { name: "Filtrar por nombre" });
  await filter.fill("cisma");
  await expect(page.locator(rows)).toHaveCount(1);
  await page.getByRole("link", { name: "cisma" }).click();
  await expect(page).toHaveURL("/es/glosario/cisma");
  await expect(page.locator('aside nav a[href="/es/glosario"]')).toHaveCount(1);
});

test("a term shows each tradition's definition in its own words, the source, the AI mark and who does not define it", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/glosario/tradicion-tradiciones");
  await expect(page.locator("h1")).toHaveText("Tradición / tradiciones");
  const blocks = page.locator("main section blockquote");
  await expect(blocks).toHaveCount(3);
  await expect(page.locator("main")).toContainText("Católica");
  await expect(page.locator("main")).toContainText("Ortodoxa");
  await expect(page.locator("main")).toContainText("Luterana");
  await expect(page.locator("main")).toContainText("CEC 78");
  await expect(page.locator("main")).toContainText("Traducción de Doctrina asistida por IA");
  await expect(page.locator("main")).toContainText(
    "Las tradiciones reformada y bautista no lo definen oficialmente en sus textos.",
  );
  await expect(page.locator("#where")).toContainText("Sola Scriptura");
  await page.setViewportSize({ width: 390, height: 800 });
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("the English site has no glossary yet", async ({ request }) => {
  expect((await request.get("/en/glossary")).status()).toBe(404);
});

test("the letter strip jumps to its letter, letters with no term are off, and desktop shows two columns", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/glosario");
  const strip = page.getByRole("navigation", { name: "Saltar a la letra" });
  await expect(strip.getByRole("button", { name: "W", exact: true })).toBeDisabled();
  await strip.getByRole("button", { name: "S", exact: true }).click();
  await expect.poll(async () => (await page.locator("#letter-S").boundingBox())!.y).toBeLessThan(260);
  const lefts = await page
    .locator(rows)
    .evaluateAll((items) => new Set(items.map((item) => Math.round(item.getBoundingClientRect().left))).size);
  expect(lefts).toBe(2);
});
