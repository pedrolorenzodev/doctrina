import { expect, test } from "@playwright/test";

const route = "/es/doctrinas/bautismo/catolica/pasajes";

test("the page shows the first passage with its title, the reader link and every edition", async ({ page }) => {
  await page.goto(route);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Los pasajes de la posición católica");
  await expect(page.getByRole("heading", { level: 2 })).toHaveText("Juan 3:5");
  await expect(page.getByText("Pasaje 1 de 19")).toBeVisible();
  for (const edition of ["RV1909", "BSB", "KJV", "WEB", "DRA"])
    await expect(page.getByRole("group", { name: "Traducción" }).getByRole("button", { name: edition })).toBeVisible();
  await expect(page.getByRole("link", { name: /Leer en el lector/ })).toHaveAttribute("href", /\/biblia\/juan\/3#v-5$/);
});

test("changing the translation switches the text and persists in the reader's choice", async ({ page }) => {
  await page.goto(route);
  await page.getByRole("group", { name: "Traducción" }).getByRole("button", { name: "BSB" }).click();
  await expect(page.getByText("Jesus answered")).toBeVisible();
  expect(await page.evaluate(() => localStorage.getItem("doctrina-translation"))).toBe("bsb");
});

test("arrows and the boxes change the passage and the hash", async ({ page }) => {
  await page.goto(route);
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("heading", { level: 2 })).toHaveText(/Mateo\s28:19–20\s·\sMarcos\s16:15–16/);
  expect(await page.evaluate(() => location.hash)).toBe("#matt-28-19-matt-28-20");
  await page.getByRole("button", { name: /Pasaje anterior/ }).click();
  await expect(page.getByRole("heading", { level: 2 })).toHaveText("Juan 3:5");
});

test("a hash opens that passage", async ({ page }) => {
  await page.goto(`${route}#acts-2-38`);
  await expect(page.getByRole("heading", { level: 2 })).toHaveText("Hechos 2:38");
});

test("the apologists layer shows quotes with their source and is muted where there is no data", async ({ page }) => {
  await page.goto(`${route}#acts-2-38`);
  await page.getByRole("button", { name: "Apologistas" }).click();
  await expect(page.getByText("El argumento, en sus palabras")).toBeVisible();
  await expect(page.getByRole("link", { name: "Ver la fuente" }).first()).toHaveAttribute("target", "_blank");
  await page.goto(`${route}#john-3-5`);
  await expect(page.getByRole("button", { name: "Apologistas" })).toHaveAttribute("aria-disabled", "true");
});

test("the tree row Pasajes is on and the button of the tradition page leads here", async ({ page }) => {
  await page.goto("/es/doctrinas/bautismo/catolica");
  await page.getByRole("link", { name: /Ver los 19 pasajes/ }).click();
  await expect(page).toHaveURL(/\/pasajes$/);
});

test("no horizontal overflow at 360", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto(`${route}#acts-2-38`);
  await page.getByRole("button", { name: "Apologistas" }).click();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
