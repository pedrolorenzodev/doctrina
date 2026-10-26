import { expect, test } from "@playwright/test";
import { horizontalOverflow, landingTop } from "./helpers";

const father = (id: string) => `/es/historia/padres/${id}`;
const ignatius = father("ignatius-of-antioch");
const headerFacts = "main dl.title-part";
const crumbs = 'main nav[aria-label="Ruta"]';

const headerFactsOf = (page: import("@playwright/test").Page) =>
  page
    .locator(`${headerFacts} > div`)
    .evaluateAll((items) =>
      items.map((item) => [item.querySelector("dt")!.textContent, item.querySelector("dd")!.textContent]),
    );

test("Ignatius: title, tab, crumbs and the four facts of the header", async ({ page }) => {
  await page.goto(ignatius);
  await expect(page.locator("main h1")).toHaveText("Ignacio de Antioquía");
  await expect(page).toHaveTitle("Ignacio de Antioquía · Padres");
  await expect(page.locator(`${crumbs} button`)).toHaveText(["Historia", "Padres"]);
  await expect(page.locator(`${crumbs} [aria-current=page]`)).toHaveText("Ignacio de Antioquía");
  expect(await headerFactsOf(page)).toEqual([
    ["Nació", "desconocido"],
    ["Murió", "107 o 108 según Eusebio (se discute)"],
    ["Obispo de", "Antioquía"],
    ["Escribió en", "griego"],
  ]);
});

test("a born and a dead year, circa or not, and a role that is not a bishop's", async ({ page }) => {
  await page.goto(father("justin-martyr"));
  expect(await headerFactsOf(page)).toEqual([
    ["Nació", "c. 100"],
    ["Murió", "c. 165"],
    ["Función", "Filósofo laico y apologista"],
    ["Escribió en", "griego"],
  ]);
  await page.goto(father("augustine-of-hippo"));
  expect((await headerFactsOf(page)).slice(0, 3)).toEqual([
    ["Nació", "13 nov 354"],
    ["Murió", "28 ago 430"],
    ["Obispo de", "Hipona"],
  ]);
  await page.goto(father("john-chrysostom"));
  expect((await headerFactsOf(page))[2]).toEqual(["Arzobispo de", "Constantinopla (398–404)"]);
});

test("an anonymous work has a date, what it is and its language, and no birth or death", async ({ page }) => {
  await page.goto(father("didache"));
  expect(await headerFactsOf(page)).toEqual([
    ["Compuesta", "segunda mitad del siglo I a primera mitad del siglo II"],
    ["Qué es", "Manual eclesial anónimo"],
    ["Lengua", "griego"],
  ]);
  await expect(page.locator("#who h2")).toHaveText("Qué es");
  const table = await page
    .locator("#who dl > div")
    .evaluateAll((items) =>
      items.map((item) => [item.querySelector("dt")!.textContent, item.querySelector("dd")!.textContent]),
    );
  expect(table).toEqual([
    ["Región", "Siria"],
    ["Lengua", "Griego"],
    ["Tipo", "Manual eclesial anónimo"],
    ["Compuesta", "segunda mitad del siglo I a primera mitad del siglo II"],
  ]);
  await expect(page.locator("main")).not.toContainText("Nació");
});

test("the timeline link leads to the line with this entity chosen", async ({ page }) => {
  await page.goto(ignatius);
  const link = page.locator("main p.title-part-3 a");
  await expect(link).toHaveText("Ver en la línea de tiempo");
  await expect(link).toHaveAttribute("href", "/es/historia/linea-de-tiempo#ignatius-of-antioch");
  await link.click();
  await expect(page).toHaveURL(/linea-de-tiempo#ignatius-of-antioch$/);
  await expect(page.locator('[data-scroller] button[data-entry="ignatius-of-antioch"]')).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(page.locator("aside[data-side-panel] h2")).toHaveText("Ignacio de Antioquía");
});

test("«Quién fue»: the summary and a facts table that sits beside it from 900 px of section", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(ignatius);
  await expect(page.locator("#who h2")).toHaveText("Quién fue");
  await expect(page.locator("#who p")).toHaveText(
    "Obispo de Antioquía que, según la tradición, fue llevado preso a Roma y martirizado bajo Trajano. Las siete cartas que escribió durante el viaje insisten en la unidad en torno al obispo, presbíteros y diáconos, y polemizan contra quienes negaban la realidad de la carne de Cristo.",
  );
  const rows = await page
    .locator("#who dl > div")
    .evaluateAll((items) =>
      items.map((item) => [item.querySelector("dt")!.textContent, item.querySelector("dd")!.textContent]),
    );
  expect(rows).toEqual([
    ["Región", "Siria"],
    ["Lengua", "Griego"],
    ["Función", "Obispo de Antioquía"],
    ["Murió", "107 o 108 según Eusebio (se discute)"],
  ]);
  const wide = await page.evaluate(() => {
    const text = document.querySelector("#who p")!.getBoundingClientRect();
    const facts = document.querySelector("#who dl")!.getBoundingClientRect();
    const row = document.querySelector("#who dl > div")!;
    return {
      text: Math.round(text.width),
      facts: Math.round(facts.width),
      gap: Math.round(facts.left - text.right),
      termAboveValue:
        row.querySelector("dd")!.getBoundingClientRect().top > row.querySelector("dt")!.getBoundingClientRect().top,
    };
  });
  expect(wide).toEqual({ text: 640, facts: 260, gap: 56, termAboveValue: true });
  await page.setViewportSize({ width: 1100, height: 900 });
  const narrow = await page.evaluate(() => {
    const text = document.querySelector("#who p")!.getBoundingClientRect();
    const facts = document.querySelector("#who dl")!.getBoundingClientRect();
    const row = document.querySelector("#who dl > div")!;
    return {
      below: facts.top >= text.bottom,
      termBesideValue:
        Math.abs(
          row.querySelector("dd")!.getBoundingClientRect().top - row.querySelector("dt")!.getBoundingClientRect().top,
        ) < 8,
      term: Math.round(
        row.querySelector("dd")!.getBoundingClientRect().left - row.querySelector("dt")!.getBoundingClientRect().left,
      ),
    };
  });
  expect(narrow).toEqual({ below: true, termBesideValue: true, term: 136 });
});

test("«Sus escritos»: each writing with its date, one shared axis and the count", async ({ page }) => {
  await page.goto(father("justin-martyr"));
  await expect(page.locator("#works h2")).toHaveText("Sus escritos");
  await expect(page.locator("#works > div > div > p").first()).toHaveText("3 escritos, c. 155–161");
  const rows = await page
    .locator("#works li")
    .evaluateAll((items) => items.map((item) => [item.children[0]!.textContent, item.children[1]!.textContent]));
  expect(rows).toEqual([
    ["Primera Apología", "c. 155"],
    ["Diálogo con Trifón", "c. 160"],
    ["Segunda Apología", "c. 161"],
  ]);
  await expect(page.locator("#works li button")).toHaveCount(3);
  await expect(page.locator("#works [aria-hidden=true]")).toHaveCount(1);
  await page.goto(ignatius);
  await expect(page.locator("#works > div > div > p").first()).toHaveText("1 escrito, c. 107–110");
});

test("the writings grid: name | 104 px date, in one column of dates", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(father("justin-martyr"));
  const measured = await page.locator("#works li").evaluateAll((items) =>
    items.map((item) => {
      const date = item.children[1]!.getBoundingClientRect();
      return [Math.round(date.width), Math.round(date.left)];
    }),
  );
  expect(new Set(measured.map((entry) => entry[1])).size).toBe(1);
  expect(measured.every((entry) => entry[0] === 104)).toBe(true);
});

test("«Dónde aparece en Doctrina»: the doctrine page that cites him, grouped by place in a left column", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(ignatius);
  await expect(page.locator("#appears h2")).toHaveText("Dónde aparece en Doctrina");
  await expect(page.locator("#appears h3")).toHaveText("En una doctrina");
  await expect(page.locator("#appears li a")).toHaveText("La Eucaristía: lo que escribieron los primeros cristianos");
  await expect(page.locator("#appears li p").last()).toHaveText(
    "Testigo en esta doctrina: Carta a los Esmirniotas 7.1.",
  );
  const layout = await page.evaluate(() => {
    const heading = document.querySelector("#appears h3")!.getBoundingClientRect();
    const list = document.querySelector("#appears ul")!.getBoundingClientRect();
    return { heading: Math.round(heading.width), gap: Math.round(list.left - heading.right) };
  });
  expect(layout).toEqual({ heading: 150, gap: 24 });
  await page.setViewportSize({ width: 390, height: 800 });
  const stacked = await page.evaluate(
    () =>
      document.querySelector("#appears ul")!.getBoundingClientRect().top >=
      document.querySelector("#appears h3")!.getBoundingClientRect().bottom,
  );
  expect(stacked).toBe(true);
});

test("a Father cited twice lists both references; one nobody cites has no such section", async ({ page }) => {
  await page.goto(father("justin-martyr"));
  await expect(page.locator("#appears li p").last()).toHaveText(
    "Testigo en esta doctrina: Primera Apología 66; Diálogo con Trifón 41.",
  );
  await page.goto(father("clement-of-rome"));
  await expect(page.locator("#appears")).toHaveCount(0);
  await expect(page.locator("main")).not.toContainText("Dónde aparece en Doctrina");
});

test("the link from «Dónde aparece» lands on the witness entry", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(father("tertullian"));
  await page.locator("#appears li a").click();
  await expect(page).toHaveURL("/es/doctrinas/eucaristia/primeros-cristianos#early-ew-figure");
  const top = await landingTop(page);
  await expect
    .poll(async () => Math.abs((await page.locator("#early-ew-figure").boundingBox())!.y - top), { timeout: 5000 })
    .toBeLessThanOrEqual(1);
});

test("the author of each witness on the early Christians page leads to his page", async ({ page }) => {
  await page.goto("/es/doctrinas/eucaristia/primeros-cristianos");
  const hrefs = await page
    .locator("main ol > li h2 a")
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  expect(hrefs).toHaveLength(12);
  expect(hrefs[0]).toBe(father("didache"));
  expect(hrefs[1]).toBe(ignatius);
  expect(hrefs[2]).toBe(father("justin-martyr"));
  expect(hrefs[3]).toBe(father("justin-martyr"));
  expect(hrefs[11]).toBe(father("john-of-damascus"));
  await page.locator("main ol > li h2 a").nth(1).click();
  await expect(page).toHaveURL(ignatius);
  await expect(page.locator("main h1")).toHaveText("Ignacio de Antioquía");
});

test("previous and next: the neighbours by name; the first has only «Siguiente», the last only «Anterior»", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(ignatius);
  const nav = page.locator('main nav[aria-label="Padres anterior y siguiente"]');
  await expect(nav.locator("a")).toHaveCount(2);
  await expect(nav.locator("a").first()).toContainText("Anterior");
  await expect(nav.locator("a").first()).toContainText("Didajé (Enseñanza de los Doce Apóstoles)");
  await expect(nav.locator("a").last()).toContainText("Siguiente");
  await expect(nav.locator("a").last()).toContainText("Papías de Hierápolis");
  await nav.locator("a").last().click();
  await expect(page).toHaveURL(father("papias-of-hierapolis"));
  await page.goto(father("clement-of-rome"));
  const first = page.locator('main nav[aria-label="Padres anterior y siguiente"] a');
  await expect(first).toHaveCount(1);
  await expect(first).toContainText("Siguiente");
  const box = await first.boundingBox();
  const column = await page.locator('main nav[aria-label="Padres anterior y siguiente"] > div').boundingBox();
  expect(box!.x).toBeGreaterThan(column!.x + column!.width / 2 - 1);
  await page.goto(father("john-of-damascus"));
  const last = page.locator('main nav[aria-label="Padres anterior y siguiente"] a');
  await expect(last).toHaveCount(1);
  await expect(last).toContainText("Anterior");
});

test("the sidebar lists all 56 Fathers as links and marks the current one", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(ignatius);
  const branch = page.locator('aside nav li[data-id="history/fathers"]');
  await expect(branch.locator("> ul > li a")).toHaveCount(56);
  await expect(page.locator("aside nav a[aria-current=page]")).toHaveText("Ignacio de Antioquía");
  await expect(branch.locator("> ul")).toHaveAttribute("data-open", "true");
  await branch.locator('li[data-id="history/fathers/tertullian"] a').click();
  await expect(page).toHaveURL(father("tertullian"));
});

test("the search finds a Father by name and by what his summary says, and opens his page", async ({ page }) => {
  await page.goto("/es/doctrinas/eucaristia/catolica");
  await page.locator("header button[aria-haspopup=dialog]").click();
  const input = page.locator("[data-search-dialog] [role=combobox]");
  await input.fill("Ignacio");
  const options = page.locator("[data-search-dialog] [role=option]");
  const row = options.filter({ hasText: "Historia / Padres" }).first();
  await expect(options.first().locator("> span").first()).toHaveText("Ignacio de Antioquía");
  await expect(row).toContainText("† 107 o 108");
  await expect(options.nth(1).locator("> span").first()).toHaveText("Carta a los Esmirniotas 7.1");
  await input.fill("Trajano");
  await expect(options.first().locator("> span").first()).toHaveText("Ignacio de Antioquía");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(ignatius);
});

test("the ruler has a tick per section that exists", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(ignatius);
  await expect(page.locator("[data-tick]")).toHaveCount(6);
  await page.goto(father("clement-of-rome"));
  await expect(page.locator("[data-tick]")).toHaveCount(4);
});

test("every one of the 56 pages exists and has its name as the title", async ({ request }) => {
  const ids = await (async () => {
    const response = await request.get(ignatius);
    const html = await response.text();
    return [...html.matchAll(/href="\/es\/historia\/padres\/([a-z0-9-]+)"/g)].map((match) => match[1]!);
  })();
  expect(new Set(ids).size).toBe(56);
  for (const id of new Set(ids)) {
    const response = await request.get(father(id));
    expect(response.status(), id).toBe(200);
    expect(await response.text()).toMatch(/<h1[^>]*>[^<]+<\/h1>/);
  }
});

test("the list of writings reveals on scroll and none stays hidden after a fast jump", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 600 });
  await page.goto(father("augustine-of-hippo"));
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  const opacity = await page.evaluate(() =>
    [...document.querySelectorAll("#works li, #appears li")].map((item) => Number(getComputedStyle(item).opacity)),
  );
  expect(opacity.length).toBeGreaterThan(0);
  expect(opacity.every((value) => value === 1)).toBe(true);
});

test("under reduced motion the lists are never armed", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(ignatius);
  expect(await page.evaluate(() => document.querySelectorAll("main [data-rv]").length)).toBe(0);
  await context.close();
});

for (const width of [360, 390, 768, 1024, 1440]) {
  for (const id of ["ignatius-of-antioch", "didache", "john-chrysostom"]) {
    test(`${width}px, ${id}: no horizontal overflow @webkit`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(father(id));
      expect(await horizontalOverflow(page)).toBe(0);
    });
  }
}

test("no console errors on a Father's page, in a client navigation and back", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("Failed to load resource")) errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(ignatius);
  await page.locator('main nav[aria-label="Padres anterior y siguiente"] a').last().click();
  await expect(page).toHaveURL(father("papias-of-hierapolis"));
  await page.goBack();
  await expect(page).toHaveURL(ignatius);
  expect(errors).toEqual([]);
});

test("a malformed hash does not break the page", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(`${ignatius}#%E0%A4%A`);
  await expect(page.locator("main h1")).toHaveText("Ignacio de Antioquía");
  await page.goto(`${ignatius}#no-such-section`);
  await expect(page.locator("main h1")).toHaveText("Ignacio de Antioquía");
  expect(errors).toEqual([]);
});
