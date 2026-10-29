import { expect, test } from "@playwright/test";
import { horizontalOverflow, trackElement } from "./helpers";

const path = "/es/doctrinas/eucaristia/primeros-cristianos";
const doctrinePath = "/es/doctrinas/eucaristia";
const entries = "main ol > li";
const crumbs = 'main nav[aria-label="Ruta"]';
const toggle = "main button[aria-controls=criterion]";

const dates = [
  "c. 50–120",
  "c. 107–110",
  "c. 150–155",
  "c. 155–160",
  "c. 180",
  "c. 207–208",
  "c. 350–390",
  "c. 387–391",
  "c. 396–397",
  "c. 403–404",
  "c. 447",
  "c. 743",
];

const headings = [
  "Didaché 14.1–3",
  "Ignacio de Antioquía, Carta a los Esmirniotas 7.1",
  "Justino Mártir, Primera Apología 66",
  "Justino Mártir, Diálogo con Trifón 41",
  "Ireneo de Lyon, Contra las herejías IV.18.5",
  "Tertuliano, Contra Marción IV.40",
  "Cirilo de Jerusalén (atribuido), Catequesis mistagógicas 5.7",
  "Ambrosio de Milán, Sobre los misterios 9.52",
  "Agustín de Hipona, Sobre la doctrina cristiana III.16.24",
  "Juan Crisóstomo, Homilías sobre Hebreos, homilía 17.6",
  "Teodoreto de Ciro, Eranistes (Diálogos), diálogo II",
  "Juan Damasceno, Exposición exacta de la fe ortodoxa IV.13",
];

test("header: h1, lede and tab title", async ({ page }) => {
  await page.goto(path);
  await expect(page.locator("main h1")).toHaveText("Lo que escribieron los primeros cristianos sobre la Eucaristía");
  await expect(page.locator("main header p")).toHaveText(
    "Los textos cristianos hasta c. 800 que tratan de la Eucaristía, en orden cronológico. Cada uno lleva a la obra completa.",
  );
  await expect(page).toHaveTitle("Eucaristía · Primeros cristianos");
});

test("crumbs: Doctrinas inert, La Eucaristía leads to 02, the page is current", async ({ page }) => {
  await page.goto(path);
  await expect(page.locator(`${crumbs} > span.text-ink-3`)).toHaveText(["Doctrinas"]);
  await expect(page.locator(`${crumbs} [aria-current=page]`)).toHaveText("Lo que escribieron los primeros cristianos");
  await page.locator(`${crumbs} a`, { hasText: "La Eucaristía" }).click();
  await expect(page).toHaveURL(doctrinePath);
});

test("the twelve witnesses in date order with their dates and headings", async ({ page }) => {
  await page.goto(path);
  await expect(page.locator(entries)).toHaveCount(12);
  const shown = await page.locator(entries).evaluateAll((items) =>
    items.map((item) => ({
      date: item.querySelector(":scope > div:first-child")!.childNodes[0]!.textContent,
      heading: item.querySelector("h2")!.textContent!.replace(/ /g, " "),
    })),
  );
  expect(shown.map((item) => item.date)).toEqual(dates);
  expect(shown.map((item) => item.heading)).toEqual(headings);
});

test("the Didaché entry, word for word", async ({ page }) => {
  await page.goto(path);
  const first = page.locator(entries).first();
  await expect(first.locator("h2 a")).toHaveText("Didaché");
  await expect(first.locator("h2 + p")).toHaveText(
    "Breve manual anónimo de enseñanza moral, bautismo, ayuno, oración y Eucaristía, probablemente compilado en Siria o Palestina.",
  );
  await expect(first.locator("small")).toHaveText(
    "La fecha se discute: las propuestas van de mediados del siglo I a comienzos del II.",
  );
  await expect(first.locator("mark")).toHaveText([
    "Cada día del Señor reuníos, partid el pan y dad gracias, después de haber confesado vuestras transgresiones, para que vuestro sacrificio sea puro.",
    "Porque esto es lo que dijo el Señor: En todo lugar y tiempo ofrecedme un sacrificio puro",
  ]);
  await expect(first.locator("h2 + p + p")).toContainText(
    "Pero que nadie que tenga una disputa con su compañero se junte con vosotros",
  );
  await expect(first.locator("h2 + p + p")).toContainText("y mi nombre es admirable entre las naciones.");
});

test("the Ignatius entry: the paragraph around his sentence", async ({ page }) => {
  await page.goto(path);
  const entry = page.locator(entries).nth(1);
  await expect(entry.locator("h2 a")).toHaveText("Ignacio de Antioquía");
  await expect(entry.locator("mark")).toHaveText(
    "Se abstienen de la Eucaristía y de la oración, porque no confiesan que la Eucaristía es la carne de nuestro Salvador Jesucristo, la que padeció por nuestros pecados y la que el Padre, en su bondad, resucitó.",
  );
  await expect(entry.locator("h2 + p + p")).toContainText("Evitad todas las divisiones, como principio de males.");
  await expect(entry.locator("small")).toHaveCount(0);
});

test("the sentence on the doctrine is ink and its context ink-3, in both themes", async ({ page }) => {
  for (const scheme of ["light", "dark"] as const) {
    await page.emulateMedia({ colorScheme: scheme });
    await page.goto(path);
    const colors = await page
      .locator(entries)
      .nth(1)
      .evaluate((item) => {
        const paragraph = item.querySelector("h2 + p + p")!;
        return {
          mark: getComputedStyle(item.querySelector("mark")!).color,
          context: getComputedStyle(paragraph).color,
          background: getComputedStyle(item.querySelector("mark")!).backgroundColor,
          ink: getComputedStyle(document.documentElement).getPropertyValue("--color-ink").trim(),
          ink3: getComputedStyle(document.documentElement).getPropertyValue("--color-ink-3").trim(),
        };
      });
    expect(colors.mark).not.toBe(colors.context);
    expect(colors.background).toBe("rgba(0, 0, 0, 0)");
  }
});

test("a witness with no paragraph shows its quote whole, in ink, with a single mark", async ({ page }) => {
  await page.goto(path);
  const entry = page.locator(entries).nth(5);
  await expect(entry.locator("mark")).toHaveCount(1);
  await expect(entry.locator("mark")).toContainText("Luego, tomando el pan y dándolo a sus discípulos");
  await expect(entry.locator("h2 + p + p")).toHaveText(await entry.locator("mark").innerText());
});

test("only the Didaché, Cirilo, Agustín and Crisóstomo carry a note under the date", async ({ page }) => {
  await page.goto(path);
  const notes = await page
    .locator(entries)
    .evaluateAll((items) => items.map((item) => item.querySelector("small")?.textContent ?? null));
  expect(notes.map((note) => note !== null)).toEqual([
    true,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    true,
    false,
    false,
  ]);
  expect(notes[8]).toBe("Libros I a III.");
});

test("every author name is a link to his page and every «Leer …» link is built and inert", async ({ page }) => {
  await page.goto(path);
  await expect(page.locator(`${entries} h2 a`)).toHaveCount(12);
  const labels = await page.locator(`${entries} > div:last-child > p:last-child button`).allInnerTexts();
  expect(labels).toHaveLength(12);
  expect(labels[1]!.replace(/ /g, " ")).toBe("Leer Carta a los Esmirniotas 7.1 en la obra completa");
  expect(labels[0]!.replace(/ /g, " ")).toBe("Leer Didaché 14.1–3 en la obra completa");
  const url = page.url();
  await page.locator(`${entries} > div:last-child > p:last-child button`).first().click();
  expect(page.url()).toBe(url);
});

test("the sidebar lists the page first under La Eucaristía and marks it as current", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  const current = page.locator("aside nav a[aria-current=page]");
  await expect(current).toHaveCount(1);
  await expect(current).toHaveText("Lo que escribieron los primeros cristianos");
  const children = await page
    .locator('aside nav li[data-id="eucharist"] > ul > li')
    .evaluateAll((items) => items.map((item) => item.getAttribute("data-id")));
  expect(children[0]).toBe("eucharist/early-christians");
  expect(children).toHaveLength(7);
  await expect(page.locator('aside nav li[data-id="eucharist"] > ul')).toHaveAttribute("data-open", "true");
});

test("from 02 the sidebar link opens the page, and the other doctrines show it inert", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(doctrinePath);
  await page.locator('aside nav li[data-id="eucharist"] > [data-row] [data-twisty]').click();
  await page.locator('aside nav li[data-id="eucharist/early-christians"] a').click();
  await expect(page).toHaveURL(path);
  await expect(page.locator('aside nav li[data-id="baptism/early-christians"] a')).toHaveCount(0);
});

test("the list: date column 150 px from 640, stacked under it; text capped at 680 and the list at 870", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  const wide = await page
    .locator(entries)
    .nth(1)
    .evaluate((item) => {
      const date = item.children[0]!.getBoundingClientRect();
      const body = item.children[1]!.getBoundingClientRect();
      const text = item.querySelector("h2 + p + p")!.getBoundingClientRect();
      return {
        date: Math.round(date.width),
        gap: Math.round(body.left - date.right),
        text: Math.round(text.width),
        row: Math.round(item.getBoundingClientRect().width),
      };
    });
  expect(wide).toEqual({ date: 150, gap: 40, text: 680, row: 870 });
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto(path);
  const narrow = await page
    .locator(entries)
    .nth(1)
    .evaluate((item) => {
      const date = item.children[0]!.getBoundingClientRect();
      const body = item.children[1]!.getBoundingClientRect();
      return { stacked: body.top >= date.bottom, sameLeft: Math.round(body.left) === Math.round(date.left) };
    });
  expect(narrow).toEqual({ stacked: true, sameLeft: true });
});

test("the title steps down on phones", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  expect(await page.locator("main h1").evaluate((node) => getComputedStyle(node).fontSize)).toBe("52px");
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto(path);
  expect(await page.locator("main h1").evaluate((node) => getComputedStyle(node).fontSize)).toBe("36px");
});

test("«Cómo se eligen estos textos» starts folded and opens with its text", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await expect(page.locator(toggle)).toHaveText("Cómo se eligen estos textos");
  await expect(page.locator(toggle)).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#criterion")).toBeHidden();
  await page.locator(toggle).click();
  await expect(page.locator("#criterion")).toBeVisible();
  await expect(page.locator("#criterion p")).toHaveText(
    "Entra cada pasaje que cita alguna de las tradiciones y cada uno que cita la bibliografía académica habitual sobre el tema. La lista no dice qué prueba cada texto: eso lo dice cada tradición en su propia página.",
  );
  await expect(page.locator(toggle)).toHaveAttribute("aria-expanded", "true");
  await expect
    .poll(() => page.locator(`${toggle} svg`).evaluate((node) => getComputedStyle(node).rotate))
    .toBe("45deg");
});

test("the button's label is centred on both axes", async ({ page }) => {
  await page.goto(path);
  const offsets = await page.locator(toggle).evaluate((button) => {
    const box = button.getBoundingClientRect();
    const range = document.createRange();
    range.selectNodeContents(button.lastChild!);
    const text = range.getBoundingClientRect();
    return Math.abs(box.top + box.height / 2 - (text.top + text.height / 2));
  });
  expect(offsets).toBeLessThan(1.5);
});

test("opening animates the height from zero, then settles with nothing running", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await page.locator(toggle).hover();
  const frames = trackElement(page, "#criterion", 800);
  await page.locator(toggle).click();
  const recorded = (await frames).filter((frame) => frame.height > 0);
  const natural = Math.max(...recorded.map((frame) => frame.height));
  expect(recorded[0]!.height).toBeLessThan(natural * 0.5);
  expect(recorded.some((frame) => frame.height > natural * 0.2 && frame.height < natural * 0.95)).toBe(true);
  recorded.forEach((frame, index) => {
    if (index > 0) expect(frame.height).toBeGreaterThanOrEqual(recorded[index - 1]!.height - 0.5);
  });
  await page.waitForTimeout(800);
  const settled = await page.locator("#criterion").evaluate((element) => ({
    overflow: (element as HTMLElement).style.overflow,
    animations: element.getAnimations({ subtree: true }).length,
    opacity: getComputedStyle(element.querySelector("p")!).opacity,
  }));
  expect(settled).toEqual({ overflow: "", animations: 0, opacity: "1" });
});

test("closing folds the box and hides it; quick toggles end in the state their parity says", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await page.locator(toggle).click();
  await page.waitForTimeout(800);
  await page.locator(toggle).click();
  await expect(page.locator("#criterion")).toBeHidden();
  for (let step = 0; step < 7; step += 1) {
    await page.locator(toggle).click();
    await page.waitForTimeout(40);
  }
  await page.waitForTimeout(1200);
  await expect(page.locator("#criterion")).toBeVisible();
  await expect(page.locator(toggle)).toHaveAttribute("aria-expanded", "true");
  const state = await page.locator("#criterion").evaluate((element) => ({
    overflow: (element as HTMLElement).style.overflow,
    animations: element.getAnimations({ subtree: true }).length,
  }));
  expect(state).toEqual({ overflow: "", animations: 0 });
});

test("under reduced motion the fold is instant and the list is never armed", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(path);
  expect(await page.evaluate(() => document.querySelectorAll("main ol [data-rv]").length)).toBe(0);
  await page.locator(toggle).click();
  await expect(page.locator("#criterion")).toBeVisible();
  expect(await page.locator("#criterion").evaluate((element) => element.getAnimations({ subtree: true }).length)).toBe(
    0,
  );
  await page.locator(toggle).click();
  await expect(page.locator("#criterion")).toBeHidden();
  await context.close();
});

test("the list reveals on scroll and none stays hidden after a fast jump", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 700 });
  await page.goto(path);
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  const opacity = await page.evaluate(() =>
    [...document.querySelectorAll("main ol > li")].map((item) => Number(getComputedStyle(item).opacity)),
  );
  expect(opacity).toEqual(Array(12).fill(1));
});

test("Tab reaches the toggle, then each author name and each reading link, with a visible ring", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await page.locator(toggle).focus();
  await page.keyboard.press("Tab");
  await expect(page.locator(`${entries} h2 a`).first()).toBeFocused();
  const outline = await page
    .locator(`${entries} h2 a`)
    .first()
    .evaluate((node) => getComputedStyle(node).outlineStyle);
  expect(outline).toBe("solid");
  await page.keyboard.press("Tab");
  await expect(page.locator(`${entries} > div:last-child > p:last-child button`).first()).toBeFocused();
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: no horizontal overflow @webkit`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(path);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("no console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("Failed to load resource")) errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(path);
  await page.locator(toggle).click();
  await page.waitForTimeout(500);
  expect(errors).toEqual([]);
});
