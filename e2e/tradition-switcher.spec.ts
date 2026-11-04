import { expect, test } from "@playwright/test";

const switcher = 'main nav[aria-label="Tradición"]';
const doctrines = ["eucaristia", "bautismo", "papado", "sola-scriptura"];
const traditions = ["catolica", "ortodoxa", "luterana", "reformada", "bautista"];

for (const doctrine of doctrines) {
  for (const target of traditions.filter((tradition) => tradition !== "catolica")) {
    test(`/es/doctrinas/${doctrine}/catolica: the switcher goes to ${target}`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(`/es/doctrinas/${doctrine}/catolica`);
      await page
        .locator(`${switcher} li button[data-label]`)
        .filter({ hasText: new RegExp(`^${label(target)}$`) })
        .click();
      await expect(page).toHaveURL(new RegExp(`/es/doctrinas/${doctrine}/${target}$`));
      await expect(page.locator("h1")).toHaveText(`La posición ${label(target).toLowerCase()}`);
    });
  }
}

function label(slug: string): string {
  return {
    catolica: "Católica",
    ortodoxa: "Ortodoxa",
    luterana: "Luterana",
    reformada: "Reformada",
    bautista: "Bautista",
  }[slug]!;
}

test("switching keeps the section you are reading", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/doctrinas/eucaristia/catolica");
  await page
    .locator("#scripture")
    .evaluate((section) => window.scrollTo(0, section.getBoundingClientRect().top + scrollY - 140));
  await page.waitForTimeout(600);
  const box = (await page
    .locator(`${switcher} li button[data-label]`)
    .filter({ hasText: /^Ortodoxa$/ })
    .boundingBox())!;
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  await expect(page).toHaveURL(/\/es\/doctrinas\/eucaristia\/ortodoxa#scripture$/);
  await expect
    .poll(async () => page.locator("#scripture").evaluate((section) => Math.round(section.getBoundingClientRect().top)))
    .toBeLessThan(300);
  await expect(page.locator("#scripture")).toBeInViewport();
});

test("from the top of a page the switcher lands at the top", async ({ page }) => {
  await page.goto("/es/doctrinas/bautismo/catolica");
  await page
    .locator(`${switcher} li button[data-label]`)
    .filter({ hasText: /^Luterana$/ })
    .click();
  await expect(page).toHaveURL(/\/es\/doctrinas\/bautismo\/luterana$/);
});

for (const [kind, segment] of [
  ["Pasajes", "pasajes"],
  ["Objeciones", "objeciones"],
] as const) {
  test(`${kind}: the switcher stays on the ${segment} page of the chosen tradition`, async ({ page }) => {
    await page.goto(`/es/doctrinas/eucaristia/catolica/${segment}`);
    await page
      .locator(`${switcher} li button[data-label]`)
      .filter({ hasText: /^Reformada$/ })
      .click();
    await expect(page).toHaveURL(new RegExp(`/es/doctrinas/eucaristia/reformada/${segment}$`));
  });
}

test("a tradition that is not built yet stays inert", async ({ page }) => {
  await page.goto("/es/doctrinas/eucaristia/catolica");
  await page.locator(`${switcher} li button[aria-disabled="true"]`).click({ force: true });
  await expect(page).toHaveURL(/\/es\/doctrinas\/eucaristia\/catolica$/);
});

test("the Fathers' page breadcrumb leads to the Fathers index", async ({ page }) => {
  await page.goto("/es/historia/padres/tertullian");
  await expect(page.locator('nav[aria-label="Ruta"] a').first()).toHaveAttribute("href", "/es/historia/padres");
});
