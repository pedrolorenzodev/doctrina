import { expect, test } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

const path = `${traditionPath}/objeciones`;
const items = "main section[aria-label=Objeciones] li";
const crumbs = 'main nav[aria-label="Ruta"]';
const switcher = 'main nav[aria-label="Tradición"]';

test("header: h1, lede and tab title", async ({ page }) => {
  await page.goto(path);
  await expect(page.locator("main h1")).toHaveText("Objeciones a la posición católica");
  await expect(page.locator("main header p")).toHaveText(
    "Lo que otras tradiciones objetan a la postura católica sobre la Eucaristía. Cada objeción abre su página, con la respuesta católica.",
  );
  await expect(page).toHaveTitle("Eucaristía · Católica · Objeciones");
});

test("crumbs: Católica leads back to the tradition page, Objeciones is current", async ({ page }) => {
  await page.goto(path);
  await expect(page.locator(`${crumbs} button`)).toHaveText(["Doctrinas", "La Eucaristía"]);
  await expect(page.locator(`${crumbs} [aria-current=page]`)).toHaveText("Objeciones");
  await page.locator(`${crumbs} a`, { hasText: "Católica" }).click();
  await expect(page).toHaveURL(traditionPath);
});

test("switcher: six tabs, Católica current, the hint says «en las objeciones», tabs inert", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await expect(page.locator(`${switcher} li button`)).toHaveCount(6);
  await expect(page.locator(`${switcher} [aria-current=page]`)).toHaveText("Católica");
  await expect(page.locator(switcher)).toContainText("Al cambiar, sigues en las objeciones.");
  const url = page.url();
  await page.locator(`${switcher} li button`, { hasText: "Luterana" }).click();
  expect(page.url()).toBe(url);
});

test("the seven official objections, none of the debate layer, no counts, no attribution", async ({ page }) => {
  await page.goto(path);
  await expect(page.locator(items)).toHaveCount(7);
  await expect(page.locator(`${items} > p:first-child`).first()).toHaveText(
    "Si Cristo se ofreció «una vez para siempre», la Misa no puede ser un sacrificio",
  );
  await expect(page.locator("main")).not.toContainText("Suelen plantearla");
  await expect(page.locator("main")).not.toContainText("pending");
});

test("each title opens its objection page", async ({ page }) => {
  await page.goto(path);
  const hrefs = await page
    .locator(`${items} > p:first-child a`)
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  expect(hrefs).toEqual([1, 2, 3, 4, 5, 6, 7].map((n) => `${path}/ob-${n}`));
});

test("the sidebar marks Objeciones under Católica as the current page", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  const current = page.locator("aside nav a[aria-current=page]");
  await expect(current).toHaveCount(1);
  await expect(current).toHaveText("Objeciones");
  await expect(page.locator('aside nav li[data-id="eucharist/catholic"] > ul')).toHaveAttribute("data-open", "true");
});

test("the sidebar link of Objeciones opens the page from the tradition page", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.locator('aside nav li[data-id="eucharist/catholic"] > [data-row] [data-twisty]').click();
  await page.locator('aside nav li[data-id="eucharist/catholic/objections"] > [data-row] a').click();
  await expect(page).toHaveURL(path);
  await expect(page.locator("main h1")).toHaveText("Objeciones a la posición católica");
});

test("the list starts 44 px under the header on desktop and 32 px on phones", async ({ page }) => {
  for (const [width, gap] of [
    [1440, 44],
    [390, 32],
  ] as const) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(path);
    const distance = await page.evaluate(() => {
      const header = document.querySelector("main header")!.getBoundingClientRect();
      const list = document.querySelector("main section")!.getBoundingClientRect();
      return Math.round(list.top - header.bottom);
    });
    expect(distance).toBe(gap);
  }
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: no horizontal overflow @webkit`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(path);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("a reference in a synthesis opens the window and Esc returns focus", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  const link = page.locator(`${items} [aria-haspopup]`).first();
  await link.click();
  await expect(page.locator("[role=dialog]")).toHaveAttribute("data-open", "true");
  await page.keyboard.press("Escape");
  await expect(link).toBeFocused();
});

test("the list reveals on scroll and none stays hidden after a fast jump", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 700 });
  await page.goto(path);
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  const opacity = await page.evaluate(() =>
    [...document.querySelectorAll("main section li")].map((item) => Number(getComputedStyle(item).opacity)),
  );
  expect(opacity).toEqual([1, 1, 1, 1, 1, 1, 1]);
});

test("under reduced motion the list is never armed", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(path);
  expect(await page.evaluate(() => document.querySelectorAll("main section [data-rv]").length)).toBe(0);
  await context.close();
});

test("the same page from the tradition page keeps the fade and shows no console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("Failed to load resource")) errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(traditionPath);
  await page.locator("#objections a", { hasText: "Ver las 7 objeciones" }).click();
  await expect(page).toHaveURL(path);
  await page.goBack();
  await expect(page).toHaveURL(traditionPath);
  expect(errors).toEqual([]);
});

test("the Baptism page has its own Objeciones page", async ({ page }) => {
  await page.goto("/es/doctrinas/bautismo/catolica/objeciones");
  await expect(page.locator("main h1")).toHaveText("Objeciones a la posición católica");
  await expect(page.locator("main header p")).toContainText("sobre el bautismo");
  await expect(page.locator(items)).toHaveCount(7);
});
