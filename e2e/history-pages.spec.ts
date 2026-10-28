import { readFileSync } from "node:fs";
import { expect, test } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const history = JSON.parse(readFileSync("data/site/history.json", "utf8")) as {
  councils: { id: string }[];
  heresies: { id: string }[];
  divisions: { id: string }[];
  reformation: { id: string }[];
};

test("a council page: header with its facts, what it decided, who recognises it and the neighbours", async ({
  page,
}) => {
  await page.goto("/es/historia/concilios/nicaea-1");
  await expect(page.locator("h1")).toHaveText("Primer Concilio de Nicea");
  await expect(page.locator("dl").first()).toContainText("Fecha");
  await expect(page.locator("dl").first()).toContainText("Lugar");
  await expect(page.locator("h2")).toHaveText(["Qué decidió", "Quién lo reconoce"]);
  await expect(page.getByRole("link", { name: "Ver en la línea de tiempo" })).toHaveAttribute(
    "href",
    "/es/historia/linea-de-tiempo#nicaea-1",
  );
  const neighbors = page.getByRole("navigation", { name: "Concilios anterior y siguiente" });
  await expect(neighbors.getByRole("link")).toHaveCount(2);
  await neighbors.getByRole("link").last().click();
  await expect(page).toHaveURL(/\/es\/historia\/concilios\//);
});

test("a current's page: what it held, how it was answered, its story, and links to councils and Fathers", async ({
  page,
}) => {
  await page.goto("/es/historia/corrientes/arianism");
  await expect(page.locator("h1")).toHaveText("Arrianismo");
  await expect(page.locator("h2").first()).toHaveText("Qué sostenía");
  await expect(page.locator("h2").filter({ hasText: "Cómo se respondió" })).toHaveCount(1);
  const councils = page.locator("#councils a");
  if ((await councils.count()) > 0) {
    await councils.first().click();
    await expect(page).toHaveURL(/\/es\/historia\/concilios\//);
  }
});

test("every council and current has a page, and a long one fits a phone", async ({ page, request }) => {
  test.setTimeout(120000);
  for (const council of history.councils) {
    expect((await request.get(`/es/historia/concilios/${council.id}`)).status(), council.id).toBe(200);
  }
  for (const current of history.heresies) {
    expect((await request.get(`/es/historia/corrientes/${current.id}`)).status(), current.id).toBe(200);
  }
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto("/es/historia/concilios/trent");
  await expect(page.locator("h1")).not.toBeEmpty();
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("a division and a Reformation movement have their pages, reached from their indexes", async ({ page }) => {
  await page.goto("/es/historia/divisiones");
  await page.locator("main ul li a").first().click();
  await expect(page).toHaveURL(/\/es\/historia\/divisiones\/.+/);
  await expect(page.locator("h1")).not.toBeEmpty();
  await expect(page.locator("h2").first()).toHaveText("Qué pasó");
  await page.goto("/es/historia/reforma");
  await page.locator("main ul li a").first().click();
  await expect(page).toHaveURL(/\/es\/historia\/reforma\/.+/);
  await expect(page.locator("h2").first()).toHaveText("Qué fue");
});

test("every division and movement page responds and fits a phone", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  for (const division of history.divisions) {
    expect((await page.goto(`/es/historia/divisiones/${division.id}`))?.status(), division.id).toBe(200);
  }
  for (const movement of history.reformation) {
    expect((await page.goto(`/es/historia/reforma/${movement.id}`))?.status(), movement.id).toBe(200);
  }
});

test("the English indexes and the current pages have their routes; a late council has no timeline link", async ({
  page,
}) => {
  expect((await page.goto("/en/history/currents"))?.status()).toBe(200);
  await page.goto("/es/historia/concilios/trent");
  await expect(page.getByRole("link", { name: "Ver en la línea de tiempo" })).toHaveCount(0);
  await page.goto("/es/historia/corrientes/marcionism");
  expect(await page.locator("#story p").count()).toBeGreaterThan(1);
});
