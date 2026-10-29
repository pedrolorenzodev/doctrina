import { expect, test, type Page } from "@playwright/test";
import { eucharistDoctrine } from "../src/content/pages/eucharist/doctrine.es";
import { horizontalOverflow, traditionPath } from "./helpers";

const path = "/es/doctrinas/eucaristia";
const marks = eucharistDoctrine.fingerprint.marks;
const ranges = marks.filter((mark) => "yearEnd" in mark).length;
const ticks = "[data-fp-tick]";
const strip = '[role="img"] > div:first-child';
const restScale = 1 / 4.5;

function percent(year: number): number {
  return ((year - 1) / (2026 - 1)) * 100;
}

async function stripBox(page: Page) {
  const box = await page.locator(strip).boundingBox();
  if (!box) throw new Error("no strip");
  return box;
}

async function pointerAt(page: Page, year: number) {
  const box = await stripBox(page);
  await page.mouse.move(box.x + (box.width * percent(year)) / 100, box.y + box.height / 2);
}

function scaleOf(page: Page, index: number): Promise<number> {
  return page
    .locator(ticks)
    .nth(index)
    .evaluate((node) => {
      const matrix = new DOMMatrix(getComputedStyle(node).transform);
      return matrix.d;
    });
}

async function settled(page: Page) {
  await page.waitForTimeout(2600);
}

test("header: crumbs, h1, lede and the tab title", async ({ page }) => {
  await page.goto(path);
  await expect(page.locator('main nav[aria-label="Ruta"] > span.text-ink-3')).toHaveText(["Doctrinas"]);
  await expect(page.locator('main nav[aria-label="Ruta"] [aria-current=page]')).toHaveText("La Eucaristía");
  await expect(page.locator("main h1")).toHaveText("La Eucaristía");
  await expect(page.locator("main header p")).toHaveText("¿Qué pasa con el pan y el vino en la Cena del Señor?");
  await expect(page).toHaveTitle("Eucaristía");
});

test("the fingerprint has one tick per mark, its ranges, the axis and an accessible label", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  const root = page.locator('[role="img"]');
  await expect(root).toHaveAttribute(
    "aria-label",
    `Textos y hechos que esta página cita, por fecha: ${marks.length}, del año 50 al 2000`,
  );
  await expect(page.locator(ticks)).toHaveCount(marks.length);
  await expect(page.locator("[data-fp-range]")).toHaveCount(ranges);
  await expect(root.locator("> div:last-child span")).toHaveText(["1", "500", "1000", "1500", "2026"]);
  await expect(page.locator("main [role=img] ~ p, main p.text-label")).toContainText(
    "Los textos y hechos que esta página cita, por fecha.",
  );
  const box = await stripBox(page);
  expect(Math.round(box.height)).toBe(48);
  const first = await page.locator(ticks).first().boundingBox();
  expect(Math.abs((first?.x ?? 0) + 1 - (box.x + (box.width * percent(marks[0]!.year)) / 100))).toBeLessThan(1.5);
});

test("on load the ticks draw in, 300 ms each, 30 ms apart from 300 ms, and then rest", async ({ page }) => {
  await page.addInitScript(() => {
    const seen: string[][] = [];
    const ends: string[] = [];
    Object.assign(window, { drawStarts: seen, drawEnds: ends });
    document.addEventListener(
      "animationstart",
      (event) => {
        if ((event as AnimationEvent).animationName !== "fp-draw") return;
        const style = getComputedStyle(event.target as Element);
        seen.push([style.animationDelay, style.animationDuration, style.animationFillMode]);
      },
      true,
    );
    document.addEventListener(
      "animationend",
      (event) => {
        if ((event as AnimationEvent).animationName === "fp-draw") ends.push("end");
      },
      true,
    );
  });
  await page.goto(path);
  await settled(page);
  const { starts, ends } = await page.evaluate(() => ({
    starts: (window as unknown as { drawStarts: string[][] }).drawStarts,
    ends: (window as unknown as { drawEnds: string[] }).drawEnds,
  }));
  expect(starts).toHaveLength(marks.length);
  starts.forEach((entry, index) => expect(entry).toEqual([`${(300 + index * 30) / 1000}s`, "0.3s", "backwards"]));
  expect(ends).toHaveLength(marks.length);
  expect(await page.locator(ticks).evaluateAll((nodes) => nodes.flatMap((node) => node.getAnimations()).length)).toBe(
    0,
  );
  expect(await scaleOf(page, 0)).toBeCloseTo(restScale, 3);
  expect(await scaleOf(page, marks.length - 1)).toBeCloseTo(restScale, 3);
});

test("hovering lifts the nearest tick to full height, accents it and falls off as the cosine says", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await settled(page);
  const target = marks.findIndex((mark) => mark.year === 1647);
  await pointerAt(page, 1647);
  await expect(page.locator(`${ticks}[data-on]`)).toHaveCount(1);
  await expect.poll(() => scaleOf(page, target)).toBeCloseTo(1, 2);
  const box = await stripBox(page);
  const reach = Math.min(286, box.width * 0.35);
  for (const index of [target - 1, target + 1, 0, marks.length - 1]) {
    const mark = marks[index]!;
    const distance = Math.min((Math.abs(mark.year - 1647) / 2025) * (box.width / reach), 1);
    const expected = Math.max(1, 2.5 + 2 * Math.cos(Math.PI * distance)) / 4.5;
    await expect.poll(() => scaleOf(page, index), { message: `tick ${index}` }).toBeCloseTo(expected, 2);
  }
  const color = await page.locator(`${ticks}[data-on]`).evaluate((node) => getComputedStyle(node).backgroundColor);
  const accent = await page.evaluate(() => {
    const probe = document.createElement("i");
    probe.className = "bg-accent";
    document.body.append(probe);
    const value = getComputedStyle(probe).backgroundColor;
    probe.remove();
    return value;
  });
  expect(color).toBe(accent);
});

test("the tip names the mark and its date, ranges with «c.», and stays inside 14–86 %", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await settled(page);
  await pointerAt(page, 107);
  await expect(page.locator("[data-fp-tip]")).toHaveText("Ignacio de Antioquía, c. 107–110");
  await pointerAt(page, 1);
  const box = await stripBox(page);
  await page.mouse.move(box.x + 2, box.y + box.height / 2);
  const left = await page.locator("[data-fp-tip]").evaluate((node) => (node as HTMLElement).offsetLeft);
  expect(Math.round((left / box.width) * 100)).toBe(14);
  await page.mouse.move(box.x + box.width - 2, box.y + box.height / 2);
  const right = await page.locator("[data-fp-tip]").evaluate((node) => (node as HTMLElement).offsetLeft);
  expect(Math.round((right / box.width) * 100)).toBe(86);
  await pointerAt(page, 1647);
  await expect(page.locator("[data-fp-tip]")).toHaveText("Confesión de Westminster, 1647");
});

test("the tip fades and rises in 200 ms and restarts on each new mark", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await settled(page);
  await pointerAt(page, 1647);
  const timing = await page.locator("[data-fp-tip]").evaluate((node) => {
    const animation = node.getAnimations()[0];
    return [(animation as CSSAnimation).animationName, Number(animation?.effect?.getComputedTiming().duration)];
  });
  expect(timing).toEqual(["fp-tip", 200]);
  await pointerAt(page, 1672);
  const restarted = await page.locator("[data-fp-tip]").evaluate((node) => node.getAnimations().length);
  expect(restarted).toBe(1);
});

test("leaving the strip drops the tip and every tick returns to rest", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await settled(page);
  await pointerAt(page, 1647);
  await expect(page.locator("[data-fp-tip]")).toHaveCount(1);
  await page.mouse.move(10, 10);
  await expect(page.locator("[data-fp-tip]")).toHaveCount(0);
  await expect(page.locator(`${ticks}[data-on]`)).toHaveCount(0);
  await expect.poll(() => scaleOf(page, 5)).toBeCloseTo(restScale, 3);
});

test("a fast sweep across the strip, leaving mid-way, ends at rest with no errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await settled(page);
  const box = await stripBox(page);
  for (let step = 0; step <= 60; step += 1) {
    await page.mouse.move(box.x + (box.width * step) / 60, box.y + box.height / 2);
  }
  await page.mouse.move(box.x + box.width / 2, box.y + box.height + 120);
  await expect(page.locator("[data-fp-tip]")).toHaveCount(0);
  await expect.poll(() => scaleOf(page, 20)).toBeCloseTo(restScale, 3);
  expect(errors).toEqual([]);
});

test("after the draw-in no animation is left on the ticks, so a fast sweep lifts them at once @webkit", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await settled(page);
  expect(
    await page.locator(ticks).evaluateAll((nodes) => nodes.map((node) => getComputedStyle(node).animationName)),
  ).toEqual(marks.map(() => "none"));
  const box = await stripBox(page);
  await page.evaluate(() => {
    const nodes = [...document.querySelectorAll("[data-fp-tick]")];
    const samples: [number, number][] = [];
    const start = performance.now();
    (window as unknown as { sweep: [number, number][] }).sweep = samples;
    const frame = () => {
      const scale = Math.max(...nodes.map((node) => new DOMMatrix(getComputedStyle(node).transform).d));
      samples.push([performance.now() - start, scale]);
      if (performance.now() - start < 600) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  });
  const y = box.y + box.height / 2;
  for (let step = 0; step <= 12; step += 1) {
    await page.mouse.move(box.x + box.width * (0.1 + (0.6 * step) / 12), y);
    await page.waitForTimeout(10);
  }
  await page.waitForTimeout(300);
  const samples = await page.evaluate(() => (window as unknown as { sweep: [number, number][] }).sweep);
  const early = samples.filter(([time]) => time <= 220).map(([, scale]) => scale);
  expect(Math.max(...early)).toBeGreaterThan(0.35);
});

test("hovering while the ticks are still drawing in works and settles correctly", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await pointerAt(page, 1647);
  await pointerAt(page, 150);
  await page.mouse.move(10, 10);
  await settled(page);
  expect(await page.locator(ticks).evaluateAll((nodes) => nodes.flatMap((node) => node.getAnimations()).length)).toBe(
    0,
  );
  await expect.poll(() => scaleOf(page, 3)).toBeCloseTo(restScale, 3);
  expect(errors).toEqual([]);
});

test("a click on a mark does nothing yet", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await settled(page);
  const box = await stripBox(page);
  await page.mouse.click(box.x + (box.width * percent(1647)) / 100, box.y + box.height / 2);
  expect(new URL(page.url()).pathname).toBe(path);
});

test("on touch the tip stays about 1.4 s after lifting and then goes", async ({ browser }) => {
  const context = await browser.newContext({ hasTouch: true, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(path);
  await settled(page);
  const box = await stripBox(page);
  const tapped = Date.now();
  await page.touchscreen.tap(box.x + (box.width * percent(1647)) / 100, box.y + box.height / 2);
  await expect(page.locator("[data-fp-tip]")).toHaveCount(1);
  await expect(page.locator("[data-fp-tip]")).toHaveCount(0, { timeout: 4000 });
  const held = Date.now() - tapped;
  expect(held).toBeGreaterThan(1300);
  expect(held).toBeLessThan(3500);
  await context.close();
});

test("under reduced motion nothing animates and the ticks sit at rest height", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(path);
  expect(await page.locator(ticks).evaluateAll((nodes) => nodes.flatMap((node) => node.getAnimations()).length)).toBe(
    0,
  );
  expect(await scaleOf(page, 4)).toBeCloseTo(restScale, 3);
  await pointerAt(page, 1647);
  const target = marks.findIndex((mark) => mark.year === 1647);
  expect(await scaleOf(page, target)).toBeCloseTo(1, 2);
  await context.close();
});

test("the header parts enter in order: fingerprint, caption and legend are parts 3, 4 and 5", async ({ page }) => {
  await page.goto(path);
  const parts = await page.evaluate(() =>
    ["title-part-3", "title-part-4", "title-part-5"].map((name) => {
      const node = document.querySelector(`.${name}`)!;
      const animation = node.getAnimations().find((item) => (item as CSSAnimation).animationName === "title-in");
      return Number(animation?.effect?.getComputedTiming().delay);
    }),
  );
  expect(parts).toEqual([240, 320, 400]);
});

test("the legend names both kinds of link, opens the Ignatius window and leads to the Catholic page", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  const legend = page.locator("[role=note]");
  await expect(legend).toContainText("Hay dos tipos de enlace.");
  const link = legend.locator("[aria-haspopup]");
  await expect(link).toHaveText("Esmirniotas 7.1");
  await link.click();
  const dialog = page.locator("[role=dialog]");
  await expect(dialog).toHaveAttribute("data-open", "true");
  await expect(dialog).toContainText("Se abstienen de la Eucaristía");
  await expect(dialog).toContainText("Ignacio de Antioquía");
  await expect(dialog).toContainText("Carta a los Esmirniotas 7.1");
  await page.keyboard.press("Escape");
  await expect(link).toBeFocused();
  await expect(legend.locator("a")).toHaveAttribute("href", traditionPath);
  await expect(legend.locator("a")).toHaveText("la postura católica");
});

test("«Entendido» closes the legend, moves focus to the page and remembers it", async ({ page }) => {
  await page.goto(path);
  const legend = page.locator("[role=note]");
  await expect(legend).toBeVisible();
  await legend.getByRole("button", { name: "Entendido" }).click();
  await expect(legend).toBeHidden();
  await expect(page.locator("#content")).toBeFocused();
  await page.reload();
  await expect(legend).toBeHidden();
});

test("the legend closes for the session even when storage throws", async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => {
      throw new Error("blocked");
    };
  });
  await page.goto(path);
  const legend = page.locator("[role=note]");
  await legend.getByRole("button", { name: "Entendido" }).click();
  await expect(legend).toBeHidden();
});

test("the legend stays closed on arrival for a reader who closed it", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("doctrina-link-legend-closed", "1"));
  await page.goto(path);
  await expect(page.locator("[role=note]")).toBeHidden();
});

test("«Lo que todas comparten»: the text and the two questions", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await expect(page.locator("#common h2")).toHaveText("Lo que todas comparten");
  await expect(page.locator("#common > div > div > p")).toContainText("Todas las tradiciones celebran la Cena");
  await expect(page.locator("#common ul li")).toHaveCount(2);
  await expect(page.locator("#common ul li span")).toHaveText(["Lo que se discute", "Lo que se discute"]);
  await expect(page.locator("#common ul li p")).toHaveText([
    "¿Cómo está presente Cristo en la Cena?",
    "¿Qué le ocurre al pan y al vino?",
  ]);
});

test("the questions sit beside the text from 1100 px and below it under that", async ({ page }) => {
  for (const [width, beside] of [
    [1440, true],
    [1100, true],
    [1099, false],
    [390, false],
  ] as const) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(path);
    const geometry = await page.evaluate(() => {
      const text = document.querySelector("#common p")!.getBoundingClientRect();
      const side = document.querySelector("#common ul")!.getBoundingClientRect();
      return { sameRow: side.top < text.bottom && side.left >= text.right - 1, below: side.top >= text.bottom };
    });
    expect(beside ? geometry.sameRow : geometry.below, `${width}px`).toBe(true);
  }
});

test("the ruler has a tick for the title and each section, and the second one scrolls the page", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await page.waitForTimeout(1500);
  await expect(page.locator("[data-tick]")).toHaveCount(6);
  await page.locator("[data-tick]").nth(1).click();
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(0);
});

test("the sidebar marks the doctrine as the current page", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  const current = page.locator("aside nav a[aria-current=page]");
  await expect(current).toHaveCount(1);
  await expect(current).toHaveText("La Eucaristía");
});

test("the crumb «La Eucaristía» on the tradition page leads to the doctrine page", async ({ page }) => {
  await page.goto(traditionPath);
  await page.locator('main nav[aria-label="Ruta"] a', { hasText: "La Eucaristía" }).click();
  await expect(page).toHaveURL(path);
  await expect(page.locator("main h1")).toHaveText("La Eucaristía");
});

test("the soft navigation from the sidebar keeps the fade and shows no console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("Failed to load resource")) errors.push(message.text());
  });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.locator('aside nav li[data-id="eucharist"] > [data-row] a').click();
  await expect(page).toHaveURL(path);
  await page.waitForTimeout(1500);
  expect(errors).toEqual([]);
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: no horizontal overflow, the strip fits its column @webkit`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(path);
    expect(await horizontalOverflow(page)).toBe(0);
    const box = await stripBox(page);
    expect(box.x + box.width).toBeLessThanOrEqual(width);
  });
}

test("hovering works in every engine @webkit", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await settled(page);
  await pointerAt(page, 1647);
  await expect(page.locator("[data-fp-tip]")).toHaveText("Confesión de Westminster, 1647");
  const target = marks.findIndex((mark) => mark.year === 1647);
  await expect.poll(() => scaleOf(page, target)).toBeCloseTo(1, 2);
});
