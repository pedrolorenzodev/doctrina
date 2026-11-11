import { expect, test, type Page } from "@playwright/test";
import { hasCorpus } from "./helpers";

const openAt = async (page: Page, path: string, width: number, scheme: "light" | "dark" = "light") => {
  await page.emulateMedia({ colorScheme: scheme });
  await page.setViewportSize({ width, height: 900 });
  await page.goto(path);
  await page.evaluate(() => document.fonts.ready);
};

test("the search button's accessible name starts with its visible text", async ({ page }) => {
  for (const width of [768, 1440]) {
    await openAt(page, "/es", width);
    const button = page.locator("header button[aria-haspopup='dialog']");
    const visible = await button.evaluate((node) => {
      const spans = [...node.querySelectorAll<HTMLElement>("span.truncate")];
      return spans.find((span) => span.offsetParent !== null)?.textContent ?? "";
    });
    expect(visible).not.toBe("");
    expect((await button.getAttribute("aria-label"))!.startsWith(visible)).toBe(true);
  }
});

for (const width of [640, 768, 1023, 1024, 1440]) {
  test(`the search placeholder is not cut at ${width} px`, async ({ page }) => {
    await openAt(page, "/es", width);
    const cut = await page
      .locator("header button[aria-haspopup='dialog'] span.truncate")
      .evaluateAll((spans) =>
        spans
          .filter((span) => (span as HTMLElement).offsetParent !== null)
          .map((span) => (span as HTMLElement).scrollWidth > (span as HTMLElement).clientWidth + 1),
      );
    expect(cut).toEqual([false]);
  });
}

const scan = (page: Page) =>
  page.evaluate(() => {
    const greek = /[Ͱ-Ͽἀ-῿]/;
    const hebrew = /[֐-׿]/;
    const bad: string[] = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      const text = node.textContent ?? "";
      const isGreek = greek.test(text);
      if (!isGreek && !hebrew.test(text)) continue;
      const element = node.parentElement!;
      if (element.closest("script,style")) continue;
      const lang = element.closest("[lang]")?.getAttribute("lang") ?? "";
      if (!(isGreek ? /^(grc|el|gr)/i : /^(he|hbo|heb)/i).test(lang)) bad.push(`${lang} ${text.trim().slice(0, 30)}`);
    }
    return bad;
  });

for (const path of [
  "/es/palabras/G4561",
  "/es/palabras/G3588",
  "/es/palabras/H1285",
  "/es/doctrinas/papado/primeros-cristianos",
  "/es/historia/obras/augustine-tractates-john",
  "/en/history/works/augustine-tractates-john",
]) {
  test(`${path}: every Greek or Hebrew run carries its own lang`, async ({ page }) => {
    test.skip(!hasCorpus && path.includes("augustine"));
    await openAt(page, path, 1440);
    expect(await scan(page)).toEqual([]);
  });
}

test("a wrapped filter's pad covers only the chosen option", async ({ page }) => {
  await openAt(page, "/es/palabras/G4561", 390);
  const group = page.getByRole("group", { name: "Forma" });
  await group.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const { pad, pressed, box } = await group.evaluate((element) => {
    const rect = (node: Element) => node.getBoundingClientRect();
    return {
      pad: rect(element.querySelector("[data-slide-indicator]")!),
      pressed: rect(element.querySelector("[aria-pressed='true']")!),
      box: rect(element),
    };
  });
  expect(box.height).toBeGreaterThan(pressed.height * 2);
  expect(Math.abs(pad.height - pressed.height)).toBeLessThan(1);
  expect(Math.abs(pad.top - pressed.top)).toBeLessThan(1);
});

test("a wrapped filter's pad follows the chosen option onto another row", async ({ page }) => {
  await openAt(page, "/es/palabras/G4561", 390);
  const group = page.getByRole("group", { name: "Forma" });
  await group.scrollIntoViewIfNeeded();
  const last = group.getByRole("button").last();
  await last.evaluate((node) => (node as HTMLElement).click());
  await page.waitForTimeout(700);
  const { pad, pressed } = await group.evaluate((element) => ({
    pad: element.querySelector("[data-slide-indicator]")!.getBoundingClientRect(),
    pressed: element.querySelector("[aria-pressed='true']")!.getBoundingClientRect(),
  }));
  expect(Math.abs(pad.top - pressed.top)).toBeLessThan(1);
  expect(Math.abs(pad.left - pressed.left)).toBeLessThan(1);
  expect(Math.abs(pad.width - pressed.width)).toBeLessThan(1);
});

for (const path of ["/es/historia/padres", "/es/historia/concilios", "/es/glosario"]) {
  test(`${path}: heading levels never skip`, async ({ page }) => {
    await openAt(page, path, 390);
    const levels = await page
      .locator("main")
      .locator("h1, h2, h3, h4")
      .evaluateAll((nodes) => nodes.map((node) => Number(node.tagName.slice(1))));
    let previous = 0;
    for (const level of levels) {
      expect(level).toBeLessThanOrEqual(previous + 1);
      previous = level;
    }
  });
}

test("the Pasajes page has no two visible navigation landmarks with the same name", async ({ page }) => {
  await openAt(page, "/es/doctrinas/eucaristia/catolica/pasajes", 390);
  const names = await page
    .locator("nav")
    .evaluateAll((navs) =>
      navs.filter((nav) => (nav as HTMLElement).offsetParent !== null).map((nav) => nav.getAttribute("aria-label")),
    );
  expect(new Set(names).size).toBe(names.length);
});

test("the global 404 has a title", async ({ page }) => {
  await page.goto("/es/ruta-que-no-existe");
  expect((await page.title()).length).toBeGreaterThan(5);
});

for (const scheme of ["light", "dark"] as const) {
  test(`the «Filtrar por nombre» input shows its focus as a border at least 3:1 against the page (${scheme})`, async ({
    page,
  }) => {
    await openAt(page, "/es/glosario", 1440, scheme);
    await page.waitForTimeout(1300);
    await page.keyboard.press("Shift");
    const input = page.getByRole("searchbox", { name: "Filtrar por nombre" });
    const before = await input.evaluate((node) => getComputedStyle(node).borderColor);
    await input.focus();
    await page.waitForTimeout(300);
    const after = await input.evaluate((node) => ({
      border: getComputedStyle(node).borderColor,
      page: getComputedStyle(document.documentElement).backgroundColor,
    }));
    expect(after.border).not.toBe(before);
    const luminance = (colour: string) => {
      const [r, g, b] = colour
        .match(/[\d.]+/g)!
        .slice(0, 3)
        .map(Number) as [number, number, number];
      const linear = (value: number) => {
        const unit = value / 255;
        return unit <= 0.03928 ? unit / 12.92 : ((unit + 0.055) / 1.055) ** 2.4;
      };
      return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
    };
    const [light, dark] = [luminance(after.border), luminance(after.page)].sort((a, b) => b - a) as [number, number];
    expect((light + 0.05) / (dark + 0.05)).toBeGreaterThanOrEqual(3);
  });
}
