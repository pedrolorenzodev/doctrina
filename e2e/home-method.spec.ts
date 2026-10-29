import { expect, test } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

test("«Cómo se hace Doctrina»: four rows, and the two citations open the citation window", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  const section = page.locator("#method");
  await expect(section.locator("h2")).toHaveText("Cómo se hace Doctrina");
  await expect(section.locator("h3")).toHaveText([
    "Cada tradición, con sus palabras",
    "Cada cita, con su fuente",
    "Los primeros cristianos no son de nadie",
    "El sitio no concluye",
  ]);
  const council = section.locator("[aria-haspopup]").first();
  await council.scrollIntoViewIfNeeded();
  await council.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toContainText("Transubstanciacion");
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await section.locator("[aria-haspopup]").nth(1).click();
  await expect(dialog).toContainText("la carne de nuestro Salvador Jesucristo");
  await expect(dialog).toContainText("Ignacio de Antioquía");
});

test("the mail form checks the address and answers", async ({ page }) => {
  await page.goto("/es");
  const input = page.getByLabel("Tu correo");
  const status = page.getByRole("status").filter({ hasText: /./ });
  await page.getByRole("button", { name: "Avisarme" }).click();
  await expect(page.getByText("Falta un correo válido, como nombre@ejemplo.com.")).toBeVisible();
  await expect(input).toBeFocused();
  await input.fill("no-es-un-correo");
  await page.getByRole("button", { name: "Avisarme" }).click();
  await expect(page.getByText("Falta un correo válido, como nombre@ejemplo.com.")).toBeVisible();
  await input.fill("nombre@ejemplo.com");
  await input.press("Enter");
  await expect(status).toHaveText("Listo. Te llegará un correo con la próxima doctrina que se publique.");
  await expect(input).toHaveValue("");
});

test("the footer: the site's name, the glossary, Fuentes (no page yet) and the other language", async ({ page }) => {
  await page.goto("/es");
  const footer = page.locator("#content footer");
  await expect(footer).toHaveText(/Doctrina\s*Glosario\s*Fuentes\s*English/);
  await expect(footer.getByRole("link", { name: "Glosario" })).toHaveAttribute("href", "/es/glosario");
  await expect(footer.getByRole("link", { name: "English" })).toHaveAttribute("href", "/en");
  const before = page.url();
  await footer.getByRole("button", { name: "Fuentes" }).click();
  expect(page.url()).toBe(before);
});

test("the edge ruler lists the four sections and jumps to them", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  const ruler = page.getByRole("navigation", { name: "Secciones de la página" });
  const ticks = ruler.getByRole("button");
  await expect(ticks).toHaveCount(4);
  const names = await ticks.evaluateAll((buttons) => buttons.map((button) => button.getAttribute("aria-label")));
  expect(names).toEqual(["Dos mil años", "Doctrinas", "Biblia", "Cómo se hace"]);
  await ticks.nth(2).click();
  await expect
    .poll(() => page.evaluate(() => Math.round(document.getElementById("bible")!.getBoundingClientRect().top)))
    .toBeLessThan(120);
});

test("no horizontal overflow at 360, 390 and 768", async ({ page }) => {
  for (const width of [360, 390, 768]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/es");
    expect(await horizontalOverflow(page)).toBe(0);
  }
});
