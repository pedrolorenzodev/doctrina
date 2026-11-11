import { expect, test, type Page } from "@playwright/test";
import { hasCorpus, horizontalOverflow } from "./helpers";

test.skip(!hasCorpus, "needs the local Bible corpus");

const path = "/es/biblia/juan/6/53";

async function open(page: Page, width = 1440, route = path) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(route);
  await page.waitForTimeout(500);
}

function sample(page: Page, selector: string, read: string, ms: number): Promise<number[]> {
  return page.evaluate(
    ([target, reader, duration]) =>
      new Promise<number[]>((resolve) => {
        const values: number[] = [];
        const start = performance.now();
        const read = new Function("element", `return ${reader as string}`) as (element: Element) => number;
        const tick = () => {
          const element = document.querySelector(target as string);
          if (element) values.push(read(element));
          if (performance.now() - start < (duration as number)) requestAnimationFrame(tick);
          else resolve(values);
        };
        tick();
      }),
    [selector, read, ms] as const,
  );
}

const monotonic = (values: number[], direction: 1 | -1, jump: number) => {
  for (let index = 1; index < values.length; index += 1) {
    const step = (values[index]! - values[index - 1]!) * direction;
    expect(step).toBeGreaterThanOrEqual(-0.5);
    expect(Math.abs(step)).toBeLessThanOrEqual(jump);
  }
};

test("header: crumbs, kicker, title, no strip without a mark", async ({ page }) => {
  await open(page);
  await expect(page.locator("h1")).toHaveText("Juan 6:53");
  await expect(page.getByText("Evangelio según san Juan")).toBeVisible();
  const crumbs = page.locator('nav[aria-label="Ruta"], main nav').first();
  await expect(crumbs).toContainText("Biblia");
  await expect(crumbs).toContainText("Capítulo 6");
  await expect(crumbs.locator("[aria-current=page]")).toHaveText("6:53");
  await expect(page.getByRole("button", { name: /Volver/ })).toBeHidden();
  expect(await horizontalOverflow(page)).toBe(0);
});

test("the strip shows only with a mark and goes back to the place", async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem("doctrina-verse-back", JSON.stringify({ href: "/es/biblia/juan/6", label: "Juan 6" }));
  });
  await open(page);
  const back = page.getByRole("button", { name: "Volver a donde estabas" });
  await expect(back).toBeVisible();
  await expect(page.getByText("Juan 6", { exact: true }).first()).toBeVisible();
  await page.evaluate(() => scrollTo(0, 400));
  await page.waitForTimeout(300);
  const stuck = await back.locator("xpath=..").evaluate((element) => getComputedStyle(element).borderBottomColor);
  expect(stuck).not.toBe("rgba(0, 0, 0, 0)");
  await back.click();
  await expect(page).toHaveURL(/\/es\/biblia\/juan\/6$/);
});

test("passage shows the previous and next verse and the source line", async ({ page }) => {
  await open(page);
  const passage = page.locator("#translation");
  await expect(passage.getByRole("link", { name: "Anterior: Juan 6:52" })).toBeVisible();
  await expect(passage.getByRole("link", { name: "Siguiente: Juan 6:54" })).toBeVisible();
  await expect(passage).toContainText("Y Jesús les dijo: De cierto, de cierto os digo");
  await expect(passage).toContainText("Reina-Valera 1909. Dominio público.");
  await expect(passage.getByRole("link", { name: "Leer el capítulo completo" })).toHaveAttribute(
    "href",
    "/es/biblia/juan/6#v-53",
  );
  await expect(passage.getByRole("button", { name: "Nota" })).toBeVisible();
});

test("the translation picker lists the groups, switches the edition and remembers it", async ({ page }) => {
  await open(page);
  const button = page.locator("#translation button[aria-haspopup=listbox]");
  await expect(button).toContainText("RV1909");
  await button.click();
  const list = page.getByRole("listbox", { name: "Traducción" });
  await expect(list).toBeVisible();
  await expect(list).toContainText("Español");
  await expect(list).toContainText("Inglés");
  await expect(list.getByRole("option", { selected: true })).toContainText("Reina-Valera 1909");
  await page.keyboard.press("Escape");
  await expect(list).toBeHidden({ timeout: 1500 });
  await expect(button).toBeFocused();
  await button.click();
  await list.getByRole("option", { name: /Berean/ }).click();
  await expect(button).toContainText("BSB");
  await expect(page.locator("#translation")).toContainText("So Jesus said to them");
  await expect(page.locator("#translation")).toContainText("Berean Standard Bible. Dominio público.");
  expect(await page.evaluate(() => localStorage.getItem("doctrina-translation"))).toBe("bsb");
});

test("changing the edition moves what is below in one continuous motion", async ({ page }) => {
  await open(page);
  const button = page.locator("#translation button[aria-haspopup=listbox]");
  await button.click();
  const list = page.getByRole("listbox", { name: "Traducción" });
  await page.waitForTimeout(400);
  const frames = sample(page, "#words", "element.getBoundingClientRect().top", 700);
  await list.getByRole("option", { name: /King James/ }).click();
  const tops = await frames;
  monotonic(tops, 1, 80);
});

test("citation block copies the short citation, the quoted text and the link", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await open(page);
  const side = page.getByRole("complementary", { name: "Citar" });
  await expect(side).toContainText("Juan 6:53 (Reina-Valera 1909)");
  const cite = side.getByRole("button", { name: "Citar", exact: true });
  await cite.click();
  await expect(side.getByRole("button", { name: "Cita copiada" })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe("Juan 6:53 (Reina-Valera 1909)");
  await page.waitForTimeout(1900);
  await expect(side.getByRole("button", { name: "Citar", exact: true })).toBeVisible();
  await side.getByRole("button", { name: "Citar con texto" }).click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toMatch(
    /^«Y Jesús les dijo.*» Juan 6:53 \(Reina-Valera 1909\)\. http/,
  );
  await side.getByRole("button", { name: "Copiar enlace" }).click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toMatch(/\/es\/biblia\/juan\/6\/53$/);
});

test("«Dónde se usa» shows one item and folds the rest smoothly", async ({ page }) => {
  await open(page);
  const side = page.getByRole("complementary", { name: "Citar" });
  await expect(side.getByRole("heading", { name: "Dónde se usa en Doctrina" })).toBeVisible();
  const items = side.locator("#verse-uses-side > li");
  await expect(items).toHaveCount(1);
  const more = side.locator("button[aria-controls=verse-uses-side]");
  const total = Number((await more.textContent())!.match(/\d+/)![0]) + 1;
  const opening = sample(page, "#verse-uses-side", "element.getBoundingClientRect().height", 700);
  await more.click();
  monotonic(await opening, 1, 60);
  await expect(items).toHaveCount(total);
  await expect(more).toHaveAttribute("aria-expanded", "true");
  await expect(more).toContainText("Ver menos");
  const close = sample(page, "#verse-uses-side", "element.getBoundingClientRect().height", 900);
  await more.click();
  monotonic(await close, -1, 60);
  await expect(items).toHaveCount(1);
});

test("words: hover, focus and tap show the card, crossfading both ways", async ({ page }) => {
  await open(page);
  const tiles = page.locator("#words button[aria-pressed]");
  await expect(tiles).toHaveCount(28);
  const sarka = tiles.nth(13);
  await expect(sarka).toHaveAttribute("aria-pressed", "true");
  const card = page.locator("#words dl").first();
  await expect(page.locator("#words")).toContainText("G4561");
  await expect(page.locator("#words")).toContainText("147 veces, 12 versículos en Juan");
  const first = tiles.nth(0);
  const old = sample(page, "#words .grid > div:nth-child(14)", "Number(getComputedStyle(element).opacity)", 400);
  const fresh = sample(page, "#words .grid > div:nth-child(1)", "Number(getComputedStyle(element).opacity)", 400);
  await first.hover();
  const [fadeOut, fadeIn] = [await old, await fresh];
  monotonic(fadeOut, -1, 0.5);
  monotonic(fadeIn, 1, 0.5);
  expect(fadeOut.at(-1)).toBe(0);
  expect(fadeIn.at(-1)).toBe(1);
  await expect(first).toHaveAttribute("aria-pressed", "true");
  await tiles.nth(5).focus();
  await expect(tiles.nth(5)).toHaveAttribute("aria-pressed", "true");
  await tiles.nth(7).click();
  await expect(tiles.nth(7)).toHaveAttribute("aria-pressed", "true");
  await expect(card).toBeAttached();
  const link = page
    .locator("#words .grid > div")
    .nth(7)
    .getByRole("link", { name: /Abrir el estudio de/ });
  await expect(link).toHaveAttribute("href", /\/es\/palabras\/G\w+\?from=John\.6\.53/);
});

test("words: the card is sticky at 1440 and sits under the words below 768", async ({ page }) => {
  await open(page, 1440);
  const list = page.locator("#words ul");
  const cardBox = page.locator("#words .grid").locator("..");
  const wide = await Promise.all([list.boundingBox(), cardBox.boundingBox()]);
  expect(wide[1]!.x).toBeGreaterThan(wide[0]!.x + wide[0]!.width - 1);
  await open(page, 390);
  const narrow = await Promise.all([
    page.locator("#words ul").boundingBox(),
    page.locator("#words .grid").locator("..").boundingBox(),
  ]);
  expect(narrow[1]!.y).toBeGreaterThan(narrow[0]!.y + narrow[0]!.height - 1);
});

test("compare: segmented filter, chips and the list change with FLIP", async ({ page }) => {
  await open(page);
  const compare = page.locator("#compare");
  await expect(compare.getByRole("button", { name: "Todas", pressed: true })).toBeVisible();
  const rows = compare.locator("ul > li");
  await expect(rows).toHaveCount(4);
  await compare.getByRole("button", { name: "Inglés con inglés" }).click();
  await page.waitForTimeout(900);
  await expect(rows).toHaveCount(3);
  await expect(compare.getByRole("button", { name: "Reina-Valera 1909" })).toBeHidden();
  const chip = compare.getByRole("button", { name: "King James Version" });
  await chip.click();
  await expect(chip).toHaveAttribute("aria-pressed", "false");
  await page.waitForTimeout(900);
  await expect(rows).toHaveCount(2);
  await chip.click();
  await page.waitForTimeout(900);
  await expect(rows).toHaveCount(3);
  await expect(rows.first().locator("[lang=en]")).toBeVisible();
});

test("footer links go to the previous and next verse; the chapter's first verse hides the previous", async ({
  page,
}) => {
  await open(page);
  const nav = page.getByRole("navigation", { name: "Versículo anterior y siguiente" });
  await expect(nav.getByRole("link", { name: /Juan 6:52/ })).toHaveAttribute("href", "/es/biblia/juan/6/52");
  await nav.getByRole("link", { name: /Juan 6:54/ }).click();
  await expect(page).toHaveURL(/\/es\/biblia\/juan\/6\/54$/);
  await expect(page.locator("h1")).toHaveText("Juan 6:54");
  await open(page, 1440, "/es/biblia/juan/6/1");
  const first = page.getByRole("navigation", { name: "Versículo anterior y siguiente" });
  await expect(first.getByRole("link")).toHaveCount(1);
});

test("a verse that does not exist is a 404; English works", async ({ page }) => {
  const missing = await page.goto("/es/biblia/juan/6/999");
  expect(missing?.status()).toBe(404);
  await page.goto("/en/bible/john/6/53");
  await expect(page.locator("h1")).toHaveText("John 6:53");
  await expect(page.getByText("The Gospel according to John")).toBeVisible();
  await expect(page.getByRole("heading", { name: "In Greek, word by word" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Compare translations" })).toBeVisible();
});

test("an edition numbered differently keeps the verse and hides words and uses, with the numbering note", async ({
  page,
}) => {
  await page.addInitScript(() => localStorage.setItem("doctrina-translation", "dra"));
  await open(page);
  await expect(page.locator("#translation [role=note]")).toContainText("DRA numera este capítulo");
  await expect(page.locator("#words")).toHaveCount(0);
});

test("below 1100 «Dónde se usa» and «Citar» are sections before the footer", async ({ page }) => {
  await open(page, 768);
  await expect(page.getByRole("complementary", { name: "Citar" })).toBeHidden();
  await expect(page.locator("#uses")).toBeVisible();
  await expect(page.locator("#cite")).toBeVisible();
  await expect(page.locator("#uses")).toContainText("La Eucaristía");
  expect(await horizontalOverflow(page)).toBe(0);
});

for (const width of [360, 390, 768, 1440]) {
  test(`no horizontal overflow at ${width}`, async ({ page }) => {
    await open(page, width);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("reduced motion: the picker and the card change instantly", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await open(page);
  const button = page.locator("#translation button[aria-haspopup=listbox]");
  await button.click();
  await expect(page.getByRole("listbox", { name: "Traducción" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("listbox", { name: "Traducción" })).toBeHidden({ timeout: 300 });
});

test("a Hebrew verse shows its words in Hebrew with the Old Testament count", async ({ page }) => {
  await open(page, 1440, "/es/biblia/genesis/1/1");
  await expect(page.getByRole("heading", { name: "En hebreo, palabra por palabra" })).toBeVisible();
  await expect(page.locator("#words")).toContainText("En el Antiguo Testamento");
});

test("the panel's «Ver el detalle completo» opens the verse page with the strip, and the strip goes back", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/biblia/juan/6");
  await page.locator("#v-53 [role=button]").first().click();
  const panel = page.locator("aside[data-side-panel]").filter({ hasText: "Ver el detalle completo" });
  await expect(panel).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(500);
  await panel.getByRole("button", { name: "Ver el detalle completo" }).click();
  await expect(page).toHaveURL(/\/es\/biblia\/juan\/6\/53$/);
  const back = page.getByRole("button", { name: "Volver a donde estabas" });
  await expect(back).toBeVisible();
  await expect(page.locator("h1")).toHaveText("Juan 6:53");
  await back.click();
  await expect(page).toHaveURL(/\/es\/biblia\/juan\/6#v-53$/);
  await expect(page.locator("#v-53")).toBeVisible();
});

test("the language switch keeps the verse", async ({ page }) => {
  await open(page);
  await expect(page.getByRole("link", { name: "EN", exact: true })).toHaveAttribute("href", "/en/bible/john/6/53");
});
