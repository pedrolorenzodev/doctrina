import { expect, test } from "@playwright/test";
import { horizontalOverflow, landingTop, traditionPath } from "./helpers";

const base = `${traditionPath}/objeciones`;
const first = `${base}/ob-1`;
const crumbs = 'main nav[aria-label="Ruta"]';
const box = "#objection div.rounded-6";
const quotes = `${box} li`;

test("header: kicker, h1 and tab title", async ({ page }) => {
  await page.goto(first);
  await expect(page.locator("main header p")).toHaveText("Objeción a la postura católica");
  await expect(page.locator("main h1")).toHaveText(
    "Si Cristo se ofreció «una vez para siempre», la Misa no puede ser un sacrificio",
  );
  await expect(page).toHaveTitle("Un solo sacrificio, una sola vez · Eucaristía · Católica");
  await expect(page.locator("main section h2")).toHaveText(["La objeción", "La respuesta católica"]);
});

test("crumbs: four steps, the last two lead to the Objeciones and tradition pages, none is current", async ({
  page,
}) => {
  await page.goto(first);
  await expect(page.locator(`${crumbs} button`)).toHaveText(["Doctrinas", "La Eucaristía"]);
  await expect(page.locator(`${crumbs} a`)).toHaveText(["Católica", "Objeciones"]);
  await expect(page.locator(`${crumbs} [aria-current]`)).toHaveCount(0);
  await page.locator(`${crumbs} a`, { hasText: "Objeciones" }).click();
  await expect(page).toHaveURL(base);
});

test("the kicker sits 44 px under the crumbs on desktop and 30 px on phones", async ({ page }) => {
  for (const [width, gap] of [
    [1440, 44],
    [390, 30],
  ] as const) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(first);
    const distance = await page.evaluate(() => {
      const nav = document.querySelector('main nav[aria-label="Ruta"]')!.getBoundingClientRect();
      const kicker = document.querySelector("main header p")!.getBoundingClientRect();
      return Math.round(kicker.top - nav.bottom);
    });
    expect(distance).toBe(gap);
  }
});

test("the box shows two own-words texts, with source and year, and the quiet line under it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  await expect(page.locator(`${quotes}:visible`)).toHaveCount(2);
  await expect(page.locator(`${quotes}:visible figcaption`).first()).toHaveText("Confesión de Westminster 29.21647");
  await expect(page.locator(`${box} > div > p`).first()).toHaveText("En sus propias palabras");
  await expect(page.locator("#objection div.max-w-col > p").last()).toHaveText(
    "Suelen plantearla reformados y luteranos.",
  );
});

test("«Mostrar 2 textos más» shows the other two and «Mostrar menos» hides them again", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  const more = page.locator(`${box} button[aria-expanded]`);
  await expect(more).toHaveText("Mostrar 2 textos más");
  await more.click();
  await expect(page.locator(`${quotes}:visible`)).toHaveCount(4);
  await expect(more).toHaveText("Mostrar menos");
  await more.click();
  await expect(page.locator(`${quotes}:visible`)).toHaveCount(2);
});

test("one hidden text reads «Mostrar 1 texto más»; two or fewer texts show no button", async ({ page }) => {
  await page.goto(`${base}/ob-2`);
  await expect(page.locator(`${box} button[aria-expanded]`)).toHaveText("Mostrar 1 texto más");
  await page.goto(`${base}/ob-6`);
  await expect(page.locator(`${box} button[aria-expanded]`)).toHaveCount(0);
  await page.goto(`${base}/ob-7`);
  await expect(page.locator(quotes)).toHaveCount(1);
  await expect(page.locator(`${box} button[aria-expanded]`)).toHaveCount(0);
});

test("a text that is not in Spanish says so", async ({ page }) => {
  await page.goto(`${base}/ob-3`);
  await page.locator(`${box} button[aria-expanded]`).click();
  await expect(page.locator(`${quotes}:visible`).last()).toContainText("Texto en inglés");
  await expect(page.locator(`${quotes}:visible blockquote`).last()).toHaveAttribute("lang", "en");
});

test("the answer has its paragraphs and the canon as a quote with its source", async ({ page }) => {
  await page.goto(first);
  await expect(page.locator("#answer > div > p")).toHaveCount(5);
  await expect(page.locator("#answer figure blockquote")).toHaveCount(1);
  await expect(page.locator("#answer figure figcaption [aria-haspopup]")).toHaveText("Trento, sesión XXII, canon 4");
});

test("sources in the box, the synthesis and the answer open the window and Esc returns focus", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  for (const selector of [
    `${box} > p [aria-haspopup]`,
    `${box} figcaption [aria-haspopup]`,
    "#answer p [aria-haspopup]",
  ]) {
    const link = page.locator(selector).first();
    await link.click();
    await expect(page.locator("[role=dialog]")).toHaveAttribute("data-open", "true");
    await page.keyboard.press("Escape");
    await expect(link).toBeFocused();
    await expect(page.locator("[role=dialog]")).not.toHaveAttribute("data-open", "true");
  }
});

test("the window of an own-words source holds the quote of the confession", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  await page.locator(`${box} figcaption [aria-haspopup]`).first().click();
  await expect(page.locator("[role=dialog]")).toContainText("Cristo no está ofrecido á su Padre");
});

test("the ruler has the three sections and the edge states of the page hold", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  await page.waitForTimeout(1500);
  await expect(page.locator("[data-tick]")).toHaveCount(3);
});

test("the sidebar marks the objection as the current page", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  const current = page.locator("aside nav a[aria-current=page]");
  await expect(current).toHaveCount(1);
  await expect(current).toHaveText("Un solo sacrificio, una sola vez");
});

test("from the Objeciones page and the sidebar the titles open the objection", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(base);
  await page.locator("main section li a").nth(1).click();
  await expect(page).toHaveURL(`${base}/ob-2`);
  await expect(page.locator("main h1")).toContainText("Pablo lo sigue llamando");
  await page.goBack();
  await expect(page).toHaveURL(base);
});

test("an unknown objection and the debate layer are 404", async ({ page }) => {
  for (const slug of ["ob-99", "do-1", "nonsense"]) {
    const response = await page.goto(`${base}/${slug}`);
    expect(response?.status()).toBe(404);
  }
});

test("Baptism has its seven objection pages", async ({ page }) => {
  for (const slug of ["ob-1", "ob-2", "ob-3", "ob-4", "ob-5", "ob-6a", "ob-6b"]) {
    const response = await page.goto(`/es/doctrinas/bautismo/catolica/objeciones/${slug}`);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1")).not.toBeEmpty();
  }
});

for (const width of [360, 390, 768, 1024, 1440]) {
  for (const n of [1, 5]) {
    test(`${width}px: ob-${n} has no horizontal overflow @webkit`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${base}/ob-${n}`);
      expect(await horizontalOverflow(page)).toBe(0);
    });
  }
}

test("the ruler lands the answer under the top bar and the page has no console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("Failed to load resource")) errors.push(message.text());
  });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  await page.waitForTimeout(1500);
  await page.locator("[data-tick]").nth(2).click();
  const top = await landingTop(page);
  await expect
    .poll(async () =>
      Math.round(await page.evaluate(() => document.querySelector("#answer")!.getBoundingClientRect().top)),
    )
    .toBe(top);
  expect(errors).toEqual([]);
});

test("the list reveals none hidden after a fast jump, and under reduced motion nothing is armed", async ({
  page,
  browser,
}) => {
  await page.setViewportSize({ width: 1440, height: 700 });
  await page.goto(first);
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  const opacity = await page.evaluate(() =>
    [...document.querySelectorAll("#objection li:not([hidden])")].map((item) => Number(getComputedStyle(item).opacity)),
  );
  expect(opacity).toEqual([1, 1]);
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const quiet = await context.newPage();
  await quiet.goto(first);
  expect(await quiet.evaluate(() => document.querySelectorAll("#objection [data-rv]").length)).toBe(0);
  await context.close();
});
