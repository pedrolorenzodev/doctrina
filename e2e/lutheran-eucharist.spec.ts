import { expect, test } from "@playwright/test";

const lutheranPath = "/es/doctrinas/eucaristia/luterana";

test("the Lutheran Eucharist page shows its own sections and no empty Objeciones", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(lutheranPath);
  await expect(page.locator("h1")).toHaveText("La posición luterana");
  for (const id of ["teach", "why", "scripture", "life", "authority"])
    await expect(page.locator(`section#${id}`)).toHaveCount(1);
  await expect(page.locator("section#objections")).toHaveCount(0);
});

test("the Lutheran page grades its statements with the confessions' own categories", async ({ page }) => {
  await page.goto(lutheranPath);
  const authority = page.locator("section#authority");
  await expect(authority).toContainText("Escritura: única regla y norma");
  await expect(authority).toContainText("propias confesiones luteranas");
  await expect(authority).not.toContainText("Iglesia católica");
  await expect(page.locator("section#teach")).toContainText("Confesión de Augsburgo");
});

test("the Lutheran page has no raw tokens, straight quotes or horizontal overflow at 390 px", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(lutheranPath);
  const text = await page.locator("main").innerText();
  expect(text).not.toMatch(/\{[cvg]:/);
  expect(text).not.toContain('"');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("the Lutheran Baptism page shows its own sections, no empty Objeciones and no editorial leftovers", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/es/doctrinas/bautismo/luterana");
  await expect(page.locator("h1")).toHaveText("La posición luterana");
  for (const id of ["teach", "why", "scripture", "life", "authority"])
    await expect(page.locator(`section#${id}`)).toHaveCount(1);
  await expect(page.locator("section#objections")).toHaveCount(0);
  const text = await page.locator("main").innerText();
  expect(text).not.toMatch(/\{[cvg]:/);
  expect(text).not.toContain('"');
  expect(text).not.toMatch(/unreviewed|Corrected \d{4}|traducción propia asistida/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("the Lutheran Sola Scriptura page shows its own sections and its own scripture subtitle", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/es/doctrinas/sola-scriptura/luterana");
  await expect(page.locator("h1")).toHaveText("La posición luterana");
  for (const id of ["teach", "why", "scripture", "life", "authority"])
    await expect(page.locator(`section#${id}`)).toHaveCount(1);
  await expect(page.locator("section#objections")).toHaveCount(0);
  await expect(page.locator("section#scripture")).toContainText("confesiones luteranas citan");
  const text = await page.locator("main").innerText();
  expect(text).not.toMatch(/\{[cvg]:/);
  expect(text).not.toContain('"');
  expect(text).not.toContain("»»");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("a statement that answers a reader's question leads with it, and harsh wording carries its status line", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(lutheranPath);
  const teach = page.locator("section#teach");
  await teach.getByRole("button", { name: /Mostrar \d+ afirmaciones más/ }).click();
  await expect(teach).toContainText("¿Se convierte el pan en el cuerpo de Cristo?");
  await expect(teach).toContainText("¿Es la Misa un sacrificio?");
  const status = teach.getByRole("button", { name: "Estado actual" });
  await expect(status.first()).toBeVisible();
  expect(await status.count()).toBe(3);
  await expect(teach).toContainText("Iglesia Luterana–Sínodo de Misuri");
  await expect(teach).not.toContainText("Estado actual: Estado actual");
  await expect(teach).toContainText("«sin reservas»");
});

test("the Lutheran Papacy page carries a status line beside the Antichrist wording", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/es/doctrinas/papado/luterana");
  await expect(page.locator("h1")).toHaveText("La posición luterana");
  for (const id of ["teach", "why", "scripture", "life", "authority"])
    await expect(page.locator(`section#${id}`)).toHaveCount(1);
  await expect(page.locator("section#objections")).toHaveCount(0);
  const teach = page.locator("section#teach");
  const more = teach.getByRole("button", { name: /Mostrar \d+ afirmaciones más/ });
  if (await more.count()) await more.click();
  await expect(teach).toContainText("verdadero Anticristo");
  await expect(teach.getByRole("button", { name: "Estado actual" })).toHaveCount(1);
  const text = await page.locator("main").innerText();
  expect(text).not.toMatch(/\{[cvg]:/);
  expect(text).not.toContain('"');
  expect(text).not.toContain("»»");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

for (const path of [
  "/es/doctrinas/bautismo/reformada",
  "/es/doctrinas/sola-scriptura/reformada",
  "/es/doctrinas/papado/reformada",
]) {
  test(`the Reformed page ${path} shows its own sections and no leftovers`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(path);
    await expect(page.locator("h1")).toHaveText("La posición reformada");
    for (const id of ["teach", "why", "scripture", "life", "authority"])
      await expect(page.locator(`section#${id}`)).toHaveCount(1);
    await expect(page.locator("section#objections")).toHaveCount(0);
    await expect(page.locator("section#scripture")).toContainText("Estándares de Westminster citan");
    const text = await page.locator("main").innerText();
    expect(text).not.toMatch(/\{[cvg]:/);
    expect(text).not.toContain('"');
    expect(text).not.toContain("»»");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
