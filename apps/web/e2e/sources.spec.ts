import { existsSync, readdirSync, readFileSync } from "node:fs";
import { expect, test } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const root = "[data-sources]";
const rows = `${root} ul[aria-label] > [data-source]`;
const slider = `${root} [role=slider]`;
const typeFilter = `${root} [role=group][aria-label="Tipo de fuente"]`;
const period = () => `${root} [role=group][aria-label="Intervalo de años"] button`;

async function allYears(page: import("@playwright/test").Page) {
  await page
    .locator(period())
    .filter({ hasText: /^Todo$/ })
    .click();
}

test("renders the catalogue with recorded editions, without recognition or duplicate aliases @webkit", async ({
  page,
}) => {
  await page.goto("/es/fuentes");
  await expect(page.locator("h1")).toHaveText("Fuentes");
  await expect(page).toHaveTitle(/Fuentes/);
  await expect(page.locator(`${rows}[data-source=didache]`)).toContainText("ANF");
  await expect(page.locator(root)).not.toContainText("Reconocida por");
  await allYears(page);
  const ids = await page
    .locator(rows)
    .evaluateAll((nodes) => nodes.map((node) => (node as HTMLElement).dataset.source));
  expect(new Set(ids).size).toBe(ids.length);
  expect(ids.length).toBeGreaterThan(55);
  await expect(page.locator(`${rows}[data-source=cec]`)).toHaveCount(1);
  await expect(page.locator(`${rows}[data-source=ccc]`)).toHaveCount(0);
  await expect(page.locator(`${root} [data-source-count]`)).toContainText(`${ids.length} de ${ids.length}`);
  await expect(page.locator(`${root} .flip-ghosts [data-source]`)).toHaveCount(0);
});

test("type, text and years combine; clear, empty and undated states remain usable", async ({ page }) => {
  await page.goto("/es/fuentes");
  await allYears(page);
  const initialCount = await page.locator(rows).count();
  await page.locator(`${typeFilter} button`).filter({ hasText: "Catecismos" }).click();
  const entries = page.locator(rows);
  await expect(entries.first()).toContainText("Catecismo");
  const count = await entries.count();
  expect(count).toBeGreaterThan(2);
  await page.getByRole("searchbox", { name: "Buscar título o autor" }).fill("Lutero");
  await expect(entries).toHaveCount(2);
  await page.getByRole("searchbox").fill("zzzzzzzz");
  await expect(entries).toHaveCount(0);
  await expect(page.locator(root)).toContainText("Ninguna obra coincide");
  await page.getByRole("searchbox").fill("");
  await expect(entries).toHaveCount(count);
  await page
    .locator(`${typeFilter} button`)
    .filter({ hasText: /^Todas/ })
    .click();
  await expect(entries).toHaveCount(initialCount);
  const undated = page.getByRole("checkbox", { name: "Incluir obras sin año preciso" });
  await expect(undated).toBeChecked();
  const withUndated = await entries.count();
  await undated.uncheck();
  expect(await entries.count()).toBeLessThan(withUndated);
  await undated.check();
  await expect(entries).toHaveCount(withUndated);
});

test("the shared ruler marks follow the filter, range and row hover; contested dates stay visible", async ({
  page,
}) => {
  await page.goto("/es/fuentes");
  const mark = page.locator(`${root} [data-mark="f-didache"]`);
  await expect(mark).toHaveAttribute("data-in", "true");
  await page.locator(`${rows}[data-source=didache]`).hover();
  await expect(mark).toHaveAttribute("data-hot", "true");
  await expect(page.locator(`${rows}[data-source=didache]`)).toContainText("c. 50–120");
  await page.locator(`${typeFilter} button`).filter({ hasText: "Confesiones" }).click();
  await expect(mark).toBeHidden();
  await expect(page.locator(rows)).toHaveCount(0);
  await allYears(page);
  expect(await page.locator(rows).count()).toBeGreaterThan(0);
  await expect(page.locator(`${root} [data-mark]:not([hidden])`).first()).toHaveAttribute("data-in", "true");
});

test("keyboard filters keep focus and the year window moves in ten and fifty year steps", async ({ page }) => {
  await page.goto("/es/fuentes");
  const button = page.locator(`${typeFilter} button`).filter({ hasText: "Catecismos" });
  await button.focus();
  await page.keyboard.press("Enter");
  await expect(button).toBeFocused();
  await expect(button).toHaveAttribute("aria-pressed", "true");
  await page.locator(slider).focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator(slider)).toHaveAttribute("aria-valuetext", "Del año 60 al 810");
  await page.keyboard.press("Shift+ArrowLeft");
  await expect(page.locator(slider)).toHaveAttribute("aria-valuetext", "Del año 10 al 760");
  await expect(page.locator(slider)).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.locator(period()).first()).toBeFocused();
});

test("language switch agrees before and after hydration, and navigation links are live", async ({ browser, page }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await context.newPage();
  await staticPage.goto("/es/fuentes");
  const selector = '[role=group][aria-label="Idioma"] a[lang=en]';
  await expect(staticPage.locator(selector)).toHaveAttribute("href", "/en/sources");
  await context.close();
  await page.goto("/es/fuentes");
  await expect(page.locator(selector)).toHaveAttribute("href", "/en/sources");
  await page.locator(selector).click();
  await expect(page.locator("h1")).toHaveText("Sources");
  await expect(page.locator('[role=group][aria-label="Language"] a[lang=es]')).toHaveAttribute("href", "/es/fuentes");
  await page.goto("/es");
  await expect(page.locator('footer a[href="/es/fuentes"]')).toHaveText("Fuentes");
  await expect(page.locator('aside li[data-id="reference/sources"] a')).toHaveAttribute("href", "/es/fuentes");
});

test("filter FLIP is sampled per frame, keeps the controls still and supports interruption", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/es/fuentes");
  await allYears(page);
  await page.waitForTimeout(900);
  const result = await page.evaluate(async () => {
    const root = document.querySelector<HTMLElement>("[data-sources]")!;
    const input = root.querySelector<HTMLInputElement>("input[type=search]")!;
    const row = () => root.querySelector<HTMLElement>('ul[aria-label] > [data-source="augustine-tractates-john"]');
    const before = row()!.getBoundingClientRect().top;
    const controlBefore = input.getBoundingClientRect().top;
    const set = (value: string) => {
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")!.set!.call(input, value);
      input.dispatchEvent(new Event("input", { bubbles: true }));
    };
    set("Agustín");
    const animation = row()!
      .getAnimations()
      .find((item) => item.id === "flip");
    const ghosts = root.querySelectorAll(".flip-ghosts [data-source]").length;
    const frames: number[] = [];
    const controls: number[] = [];
    const start = performance.now();
    await new Promise<void>((resolve) => {
      function sample() {
        frames.push(row()!.getBoundingClientRect().top);
        controls.push(input.getBoundingClientRect().top);
        if (performance.now() - start < 650) requestAnimationFrame(sample);
        else resolve();
      }
      requestAnimationFrame(sample);
    });
    const settled = row()!.getBoundingClientRect().top;
    set("");
    await new Promise((resolve) => setTimeout(resolve, 100));
    const interruptedBefore = row()!.getBoundingClientRect().top;
    set("Agustín");
    const interruptedAfter = row()!.getBoundingClientRect().top;
    return {
      before,
      settled,
      frames,
      controls,
      controlBefore,
      ghosts,
      duration: animation?.effect?.getTiming().duration,
      interruptedBefore,
      interruptedAfter,
    };
  });
  expect(result.duration).toBe(380);
  expect(result.ghosts).toBeGreaterThan(0);
  expect(result.frames.length).toBeGreaterThan(12);
  expect(Math.max(...result.controls.map((y) => Math.abs(y - result.controlBefore)))).toBeLessThan(1);
  expect(Math.abs(result.before - result.settled)).toBeGreaterThan(20);
  const direction = Math.sign(result.settled - result.before);
  const deltas = result.frames.slice(1).map((y, i) => (y - result.frames[i]!) * direction);
  expect(Math.min(...deltas)).toBeGreaterThan(-1);
  expect(Math.max(...deltas)).toBeLessThan(Math.abs(result.before - result.settled) * 0.4);
  expect(Math.abs(result.interruptedAfter - result.interruptedBefore)).toBeLessThan(2);
});

for (const width of [360, 390, 768, 1440]) {
  for (const theme of ["light", "dark"]) {
    test(`${width} ${theme}: no overflow, reachable controls, reduced motion @webkit`, async ({ browser }) => {
      const context = await browser.newContext({
        viewport: { width, height: 1000 },
        hasTouch: width < 800,
        reducedMotion: "reduce",
      });
      await context.addInitScript((value) => localStorage.setItem("doctrina-theme", value), theme);
      const page = await context.newPage();
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.goto("/es/fuentes");
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
      expect(await horizontalOverflow(page)).toBe(0);
      await allYears(page);
      await page.getByRole("searchbox").fill("Lutero");
      await expect(page.locator(rows)).toHaveCount(5);
      expect(await horizontalOverflow(page)).toBe(0);
      expect(await page.locator(root).evaluate((element) => element.getAnimations({ subtree: true }).length)).toBe(0);
      const handle = await page.locator(`${slider} [data-h=r]`).evaluate((element) => {
        const style = getComputedStyle(element, "::before");
        return { content: style.content, position: style.position, width: style.width };
      });
      if (width < 800) expect(handle).toMatchObject({ position: "absolute", width: "44px" });
      else expect(["none", "normal"]).toContain(handle.content);
      const pressed = page.locator(`${typeFilter} [aria-pressed=true]`);
      const indicator = page.locator(`${typeFilter} [data-slide-indicator]`);
      const boxes = await page.evaluate(() => {
        const filter = document.querySelector('[data-sources] [aria-label="Tipo de fuente"]')!;
        return [filter.querySelector("[aria-pressed=true]")!, filter.querySelector("[data-slide-indicator]")!].map(
          (element) => {
            const box = element.getBoundingClientRect();
            return { x: box.x, y: box.y, w: box.width, h: box.height };
          },
        );
      });
      await expect(pressed).toBeVisible();
      await expect(indicator).toBeAttached();
      for (const key of ["x", "y", "w", "h"] as const)
        expect(Math.abs(boxes[0]![key] - boxes[1]![key])).toBeLessThan(1);
      expect(errors).toEqual([]);
      await context.close();
    });
  }
}

test("touch dragging resizes the shared timeline window on a phone", async ({ browser }) => {
  const context = await browser.newContext({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto("/es/fuentes");
  const track = page.locator(`${root} [data-years-track]`);
  await track.scrollIntoViewIfNeeded();
  const box = (await track.boundingBox())!;
  const x = (year: number) => box.x + (box.width * (year - 1)) / 2025;
  const handle = (await page.locator(`${slider} [data-h=r]`).boundingBox())!;
  const y = handle.y + handle.height / 2;
  const session = await context.newCDPSession(page);
  await session.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: x(800), y }] });
  await session.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x: x(1200), y }] });
  await session.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  await expect(page.locator(slider)).toHaveAttribute("aria-valuetext", "Del año 50 al 1200");
  expect(await horizontalOverflow(page)).toBe(0);
  await context.close();
});

test("available Ambrose, Athanasius and Cyprian works retain their reader links", async ({ page, request }) => {
  test.skip(!existsSync("../../data/corpus/fathers/ambrose-de-mysteriis"), "requires the local Fathers corpus");
  await page.goto("/es/fuentes");
  const pairs = [
    ["ambrose-on-the-mysteries", "ambrose-de-mysteriis"],
    ["athanasius-on-the-incarnation", "athanasius-de-incarnatione"],
    ["cyprian-on-the-lapsed", "cyprian-de-lapsis"],
  ];
  for (const [source, work] of pairs) {
    const link = page.locator(`${rows}[data-source="${source}"]`).getByRole("link", { name: "Leer la obra" });
    await expect(link).toHaveCount(1);
    await expect(link).toHaveAttribute("href", `/es/historia/obras/${work}`);
    const response = await request.get(`/es/historia/obras/${work}`);
    expect(response.status()).toBe(200);
  }
});

test("includes every corpus work and all seven Ignatius letters with usable marks and controls @webkit", async ({
  page,
}) => {
  const corpus = readdirSync("../../data/corpus/fathers", { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const folder = `../../data/corpus/fathers/${entry.name}`;
      const file = readdirSync(folder)
        .filter((name) => name.endsWith(".json"))
        .sort()[0]!;
      return JSON.parse(readFileSync(`${folder}/${file}`, "utf8")).work.id as string;
    });
  await page.goto("/es/fuentes");
  await allYears(page);
  const hrefs = await page.locator(`${rows} a`).evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  for (const id of corpus) expect(hrefs).toContain(`/es/historia/obras/${id}`);
  const search = page.getByRole("searchbox");
  await search.fill("Ignacio de Antioquía");
  await expect(page.locator(rows)).toHaveCount(7);
  const marks = page.locator(`${root} [data-mark^="f-ignatius-"]`);
  await marks.first().scrollIntoViewIfNeeded();
  const boxes = await marks.evaluateAll((nodes) =>
    nodes.map((node) => {
      const box = node.getBoundingClientRect();
      return { key: node.getAttribute("data-mark"), x: box.x, y: box.y, width: box.width, height: box.height };
    }),
  );
  for (const box of boxes) {
    expect(box.width).toBeGreaterThanOrEqual(10);
    expect(box.height).toBeGreaterThanOrEqual(6);
  }
  expect(new Set(boxes.map((box) => box.y)).size).toBe(7);
  for (const box of boxes) {
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await expect(page.locator(`${root} [data-mark="${box.key}"]`)).toHaveAttribute("data-hot", "true");
    await expect(page.locator(`${root} [data-years-tip]`)).toBeVisible();
  }
  const clear = page.getByRole("button", { name: "Borrar búsqueda" });
  await clear.hover();
  await expect
    .poll(() => clear.evaluate((button) => getComputedStyle(button).backgroundColor))
    .not.toBe("rgba(0, 0, 0, 0)");
  await clear.click();
  await expect(search).toHaveValue("");
  await expect(search).toBeFocused();
});

const markTolerancePx = 1;

for (const width of [1440, 390]) {
  test(`every ruler mark sits on its year of the axis, and the labels end at 2000, within ${markTolerancePx} px at ${width} px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/es/fuentes");
    const track = page.locator(`${root} [data-years-track]`);
    await track.scrollIntoViewIfNeeded();
    const result = await track.evaluate((element) => {
      const center = (node: Element) => {
        const box = node.getBoundingClientRect();
        return box.left + box.width / 2;
      };
      const labels = new Map(
        [...element.querySelectorAll<HTMLElement>("span.text-axis")].map((node) => [
          Number(node.textContent),
          center(node),
        ]),
      );
      const pxPerYear = (labels.get(1500)! - labels.get(500)!) / 1000;
      const xOf = (year: number) => labels.get(500)! + (year - 500) * pxPerYear;
      const yearOf = (percent: number) => 1 + (percent / 100) * 2025;
      const bars = [...element.querySelectorAll<HTMLElement>("[data-father]:not([hidden])")];
      const marks = bars.map((bar) =>
        Math.abs(center(bar) - xOf(yearOf(parseFloat(bar.style.getPropertyValue("--x"))))),
      );
      return {
        count: bars.length,
        worstMark: Math.max(...marks),
        firstLabel: Math.abs(labels.get(1)! - xOf(1)),
        lastLabel: Math.abs(labels.get(2000)! - xOf(2000)),
        labelYears: [...labels.keys()],
      };
    });
    expect(result.count).toBeGreaterThan(100);
    expect(result.worstMark).toBeLessThanOrEqual(markTolerancePx);
    expect(result.firstLabel).toBeLessThanOrEqual(markTolerancePx);
    expect(result.lastLabel).toBeLessThanOrEqual(markTolerancePx);
    expect(result.labelYears).toEqual([1, 500, 1000, 1500, 2000]);
  });
}

for (const width of [360, 390, 768, 1024, 1440, 1728]) {
  test(`the search placeholder is not clipped at ${width} px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/es/fuentes");
    const field = page.locator(`${root} input[type=search]`);
    await field.scrollIntoViewIfNeeded();
    const room = await field.evaluate((input: HTMLInputElement) => {
      const style = getComputedStyle(input);
      const context = document.createElement("canvas").getContext("2d")!;
      context.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const available = input.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      return available - context.measureText(input.placeholder).width;
    });
    expect(room).toBeGreaterThanOrEqual(0);
  });
}

for (const [width, scheme] of [
  [1440, "light"],
  [1440, "dark"],
  [390, "light"],
  [390, "dark"],
] as const) {
  test(`the ruler has its final height from the first frame, with a slowed CPU, at ${width} px ${scheme}`, async ({
    browser,
  }) => {
    const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: scheme });
    const page = await context.newPage();
    const session = await context.newCDPSession(page);
    await session.send("Emulation.setCPUThrottlingRate", { rate: 6 });
    await page.addInitScript(() => {
      const heights: number[] = [];
      let shift = 0;
      Object.assign(window, { rulerHeights: heights, rulerShift: () => shift });
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as unknown as { value: number; hadRecentInput: boolean }[])
          if (!entry.hadRecentInput) shift += entry.value;
      }).observe({ type: "layout-shift", buffered: true });
      const sample = () => {
        const track = document.querySelector("[data-sources] [data-years-track]");
        if (track) heights.push(track.getBoundingClientRect().height);
        requestAnimationFrame(sample);
      };
      requestAnimationFrame(sample);
    });
    await page.goto("/es/fuentes", { waitUntil: "load" });
    await page.waitForTimeout(2500);
    const { heights, shift } = await page.evaluate(() => ({
      heights: (window as unknown as { rulerHeights: number[] }).rulerHeights,
      shift: (window as unknown as { rulerShift: () => number }).rulerShift(),
    }));
    expect(heights.length).toBeGreaterThan(20);
    expect(Math.max(...heights) - Math.min(...heights)).toBeLessThanOrEqual(1);
    expect(shift).toBeLessThan(0.02);
    await context.close();
  });
}
