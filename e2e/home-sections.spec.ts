import { expect, test } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

test("Doctrinas: the five doctrines with their questions, the published one as a link", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  const section = page.locator("#doctrines");
  await expect(section.locator("h2")).toHaveText("Doctrinas");
  await expect(section.locator("p").first()).toHaveText(
    "Católica, ortodoxa, luterana, reformada y bautista, cada una en sus propias palabras.",
  );
  const rows = section.locator("li");
  await expect(rows).toHaveText([
    /La Eucaristía\s*¿Qué pasa con el pan y el vino en la Cena del Señor\?/,
    /La justificación\s*¿Cómo es declarado justo el pecador ante Dios\?/,
    /El bautismo\s*¿Qué hace el bautismo, y a quién se le da\?/,
    /El papado\s*¿Tiene el obispo de Roma autoridad sobre toda la Iglesia\?/,
    /Sola Scriptura\s*¿Es la Escritura la única regla infalible de fe\?/,
  ]);
  await expect(rows.first().locator("a")).toHaveAttribute("href", "/es/doctrinas/eucaristia");
  await expect(rows.nth(1).locator("button")).toHaveCount(1);
  const before = await page.url();
  await expect(rows.nth(1).locator("button")).toHaveAttribute("aria-disabled", "true");
  await rows.nth(1).locator("button").click({ force: true });
  expect(page.url()).toBe(before);
  const row = rows.first().locator("a");
  await row.hover();
  await expect
    .poll(() => row.evaluate((element) => getComputedStyle(element).backgroundColor))
    .not.toBe("rgba(0, 0, 0, 0)");
  await expect.poll(() => row.locator("svg").evaluate((element) => getComputedStyle(element).translate)).toBe("2px");
});

test("Doctrinas on a phone: the question goes under the name, the chevron stays at the right", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/es");
  const row = page.locator("#doctrines li").first();
  const name = (await row.locator("span").first().boundingBox())!;
  const question = (await row.locator("span").nth(1).boundingBox())!;
  const chevron = (await row.locator("svg").boundingBox())!;
  expect(question.y).toBeGreaterThan(name.y + name.height - 1);
  expect(question.x).toBeCloseTo(name.x, 0);
  expect(chevron.x).toBeGreaterThan(question.x + question.width - 1);
  expect(await horizontalOverflow(page)).toBe(0);
});

test("Biblia: five editions with their names on hover and the three groups of books", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  const section = page.locator("#bible");
  await expect(section.locator("h2")).toHaveText("Biblia");
  const chips = section.locator("[tabindex='0']");
  await expect(chips).toHaveText(["RV1909", "BSB", "KJV", "WEB", "DRA"]);
  const tip = section.getByText("Reina-Valera 1909", { exact: true });
  await expect(tip).toBeHidden();
  await chips.first().hover();
  await expect(tip).toBeVisible();
  await chips.nth(3).focus();
  await expect(section.getByText("World English Bible, Catholic edition", { exact: true })).toBeVisible();
  const rows = section.locator("li a");
  await expect(rows).toHaveText([
    /Antiguo Testamento\s*39 libros/,
    /Libros deuterocanónicos\s*7 libros/,
    /Nuevo Testamento\s*27 libros/,
  ]);
  for (const index of [0, 1, 2]) await expect(rows.nth(index)).toHaveAttribute("href", /^\/es\/biblia\/[^/]+\/1$/);
});

test("English: the sections speak English", async ({ page }) => {
  await page.goto("/en");
  await expect(page.locator("#doctrines h2")).toHaveText("Doctrines");
  await expect(page.locator("#bible li a").first()).toContainText("39 books");
  await expect(page.locator("#years-title")).toHaveText("From year 1 to today");
});
