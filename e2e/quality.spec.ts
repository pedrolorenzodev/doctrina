import { expect, test, devices } from "@playwright/test";
import { traditionPath } from "./helpers";

test("every interactive element is at least 44 px on a touch phone", async ({ browser }) => {
  const context = await browser.newContext({ ...devices["iPhone 13"] });
  const page = await context.newPage();
  await page.goto(traditionPath);
  const small = await page.evaluate(() => {
    const found: string[] = [];
    for (const element of document.querySelectorAll("a[href], button, summary, input, select, [role=button]")) {
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height || getComputedStyle(element).visibility === "hidden") continue;
      const before = getComputedStyle(element, "::before");
      const hit = before.content !== "none" && before.position === "absolute" ? parseFloat(before.height) : 0;
      if (Math.max(rect.height, hit) < 43.5 || rect.width < 43.5) {
        found.push(
          `${element.tagName} ${(element.textContent ?? "").trim().slice(0, 24)} ${Math.round(rect.width)}x${Math.round(rect.height)}`,
        );
      }
    }
    return found;
  });
  expect(small).toEqual([]);
  await context.close();
});

test("the first 70 tab stops all show a focus indicator", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const without: string[] = [];
  for (let stop = 0; stop < 70; stop += 1) {
    await page.keyboard.press("Tab");
    const state = await page.evaluate(() => {
      const element = document.activeElement;
      if (!element || element === document.body) return null;
      const style = getComputedStyle(element);
      const visible =
        (style.outlineStyle !== "none" && parseFloat(style.outlineWidth) > 0) || style.boxShadow !== "none";
      return visible ? null : `${element.tagName} ${(element.textContent ?? "").trim().slice(0, 24)}`;
    });
    if (state) without.push(state);
  }
  expect(without).toEqual([]);
});

for (const scheme of ["light", "dark"] as const) {
  test(`text contrast is at least 4.5:1 (3:1 for large text) in ${scheme}, decorative marks aside`, async ({
    browser,
  }) => {
    const context = await browser.newContext({ colorScheme: scheme, viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.goto(traditionPath);
    await page.evaluate(() => document.fonts.ready);
    const failures = await page.evaluate(() => {
      type Colour = { r: number; g: number; b: number; a: number };
      const parse = (value: string): Colour | null => {
        const match = value.match(/rgba?\(([^)]+)\)/);
        if (!match) return null;
        const parts = (match[1] ?? "").split(",").map((part) => parseFloat(part));
        return { r: parts[0] ?? 0, g: parts[1] ?? 0, b: parts[2] ?? 0, a: parts[3] ?? 1 };
      };
      const luminance = ({ r, g, b }: Colour) => {
        const channel = (value: number) => {
          const scaled = value / 255;
          return scaled <= 0.03928 ? scaled / 12.92 : ((scaled + 0.055) / 1.055) ** 2.4;
        };
        return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
      };
      const backgroundOf = (element: Element): Colour => {
        for (let node: Element | null = element; node; node = node.parentElement) {
          const colour = parse(getComputedStyle(node).backgroundColor);
          if (colour && colour.a > 0.9) return colour;
        }
        return parse(getComputedStyle(document.documentElement).backgroundColor) ?? { r: 255, g: 255, b: 255, a: 1 };
      };
      const found: string[] = [];
      for (const element of document.querySelectorAll("main *, aside *, header *")) {
        if (element.closest("[aria-hidden=true]")) continue;
        if (![...element.childNodes].some((node) => node.nodeType === 3 && (node.textContent ?? "").trim())) continue;
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        if (!rect.width || !rect.height || style.visibility === "hidden" || Number(style.opacity) === 0) continue;
        const foreground = parse(style.color);
        if (!foreground) continue;
        const background = backgroundOf(element);
        const [light, dark] = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
        const ratio = ((light ?? 0) + 0.05) / ((dark ?? 0) + 0.05);
        const size = parseFloat(style.fontSize);
        const large = size >= 24 || (size >= 18.66 && Number(style.fontWeight) >= 700);
        if (ratio < (large ? 3 : 4.5))
          found.push(
            `${style.color} on rgb(${background.r},${background.g},${background.b}) ${ratio.toFixed(2)} ${size}px`,
          );
      }
      return found;
    });
    expect(failures).toEqual([]);
    await context.close();
  });
}

test("structure: one h1, seven h2 in the agreed order, the tab title is «doctrine · tradition»", async ({ page }) => {
  await page.goto(traditionPath);
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("main h2")).toHaveText([
    "Qué enseña",
    "Por qué",
    "La Escritura que usa",
    "Objeciones",
    "Cómo se vive",
    "Grado de autoridad",
    "Videos",
  ]);
  await expect(page).toHaveTitle("Eucaristía · Católica");
  expect(await page.evaluate(() => document.documentElement.lang)).toBe("es");
  expect(await page.evaluate(() => document.querySelectorAll("img:not([alt])").length)).toBe(0);
});

test("English: the shell is fully English and no Spanish label survives on the home page", async ({ page }) => {
  await page.goto("/en");
  const text = await page.evaluate(() => document.body.innerText);
  for (const spanish of ["Doctrinas", "Biblia", "Historia", "Consulta", "Contraer", "Glosario", "Tradición"]) {
    expect(text).not.toContain(spanish);
  }
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("button", { name: /mode/i }).first()).toBeVisible();
});

test("a long citation wraps inside the paragraph on a phone instead of breaking it", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto(traditionPath);
  const state = await page.evaluate(() => {
    const link = [...document.querySelectorAll("#life [aria-haspopup]")].find((element) =>
      (element.textContent ?? "").replace(/\u00a0/g, " ").includes("cann. 1247 y 920"),
    )!;
    return { display: getComputedStyle(link).display, lines: link.getClientRects().length };
  });
  expect(state.display).toBe("inline");
  expect(state.lines).toBeGreaterThan(1);
});

test("keyboard: the first tab stop is a skip link that lands on the content", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Saltar al contenido" });
  await expect(skip).toBeFocused();
  await page.waitForTimeout(300);
  const box = await skip.boundingBox();
  expect(box!.y).toBeGreaterThanOrEqual(0);
  await page.keyboard.press("Enter");
  await expect(page.locator("main#content")).toBeFocused();
  await page.keyboard.press("Tab");
  expect(await page.evaluate(() => document.activeElement?.closest("main") !== null)).toBe(true);
});

test("«1 Corintios» is never split from its number", async ({ page }) => {
  await page.goto(traditionPath);
  const titles = await page.locator("#scripture li > p:first-child").allTextContents();
  for (const title of titles) expect(title).not.toMatch(/\d [A-ZÁÉÍÓÚ]/);
  expect(titles[0]).toContain("1 Corintios");
});

test("citations with a quote in another language say which one", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.locator("#life [aria-haspopup]", { hasText: "Trento, ses. XIII, cap. 7" }).first().click();
  await expect(page.locator("[role=dialog]")).toContainText("Texto en inglés");
  await expect(page.locator("[role=dialog] [lang=en]")).toHaveCount(1);
});

test("every citation in the statements is a link: no plain «(Catecismo …)» is left", async ({ page }) => {
  await page.goto(traditionPath);
  await page.locator("#teach button[aria-expanded]:not([aria-haspopup])").click();
  await page.waitForTimeout(900);
  const plain = await page.evaluate(
    () =>
      [...document.querySelectorAll("#teach li > p:first-child")].filter((paragraph) => {
        const text = (paragraph.textContent ?? "").replace(/ /g, " ");
        const links = [...paragraph.querySelectorAll("[aria-haspopup]")].map((link) =>
          (link.textContent ?? "").replace(/ /g, " "),
        );
        const mentioned = text.match(/\((Catecismo|Ecclesia de Eucharistia)[^)]*\)/g) ?? [];
        return mentioned.some((mention) => !links.some((label) => mention.includes(label)));
      }).length,
  );
  expect(plain).toBe(0);
});
