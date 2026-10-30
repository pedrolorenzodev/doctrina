import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

const path = "/es/doctrinas/eucaristia";
const items = "#answers ol > li";
const traditions = ["catholic", "orthodox", "lutheran", "reformed", "baptist"];
const counts = [7, 3, 3, 3, 3];
const box = (tradition: string) => `#objections-${tradition}`;
const toggle = (tradition: string) => `${items}[data-id=${tradition}] button[aria-expanded]`;

type Frame = { t: number; height: number; marginTop: number; rows: number };

function sample(page: Page, selector: string, ms: number): Promise<Frame[]> {
  return page.evaluate(
    ([target, duration]) =>
      new Promise<Frame[]>((resolve) => {
        const frames: Frame[] = [];
        const start = performance.now();
        const tick = () => {
          const element = document.querySelector(target as string) as HTMLElement | null;
          const elapsed = performance.now() - start;
          if (element) {
            frames.push({
              t: Math.round(elapsed),
              height: element.getBoundingClientRect().height,
              marginTop: parseFloat(getComputedStyle(element).marginTop),
              rows: element.getAnimations({ subtree: true }).length,
            });
          }
          if (elapsed < (duration as number)) requestAnimationFrame(tick);
          else resolve(frames);
        };
        tick();
      }),
    [selector, ms] as const,
  );
}

test("«Las cinco respuestas»: five traditions in order, each with its grade, basis, summary and study link", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await expect(page.locator("#answers h2")).toHaveText("Las cinco respuestas");
  await expect(page.locator("#answers > div > p").first()).toHaveText(
    "Cada tradición, en sus propias palabras. Debajo de cada una, las objeciones que recibe.",
  );
  await expect(page.locator(`${items} h3`)).toHaveText(["Católica", "Ortodoxa", "Luterana", "Reformada", "Bautista"]);
  await expect(page.locator(`${items} [aria-haspopup]`)).toHaveText([
    "Dogma",
    "Fe unánime de la Iglesia",
    "Dogma confesional",
    "Confesional",
    "Confesional",
  ]);
  await expect(page.locator(`${items}`).first()).toContainText("Grado de autoridad");
  await expect(page.locator(`${items}`).first()).toContainText("definido en Trento (1551)");
  await expect(page.locator(`${items}`).nth(2)).toContainText("Confesión de Augsburgo, art. X (1530)");
  await expect(page.locator(`${items}`).first()).toContainText("El pan y el vino se convierten realmente");
  await expect(page.locator(`${items} a, ${items} button`).filter({ hasText: /^Estudiar la postura/ })).toHaveText([
    "Estudiar la postura católica",
    "Estudiar la postura ortodoxa",
    "Estudiar la postura luterana",
    "Estudiar la postura reformada",
    "Estudiar la postura bautista",
  ]);
});

test("every list of objections starts folded", async ({ page }) => {
  await page.goto(path);
  for (const tradition of traditions) {
    await expect(page.locator(box(tradition))).toBeHidden();
    await expect(page.locator(toggle(tradition))).toHaveText("Ver las objeciones que recibe");
    await expect(page.locator(toggle(tradition))).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator(toggle(tradition))).toHaveAttribute("aria-controls", `objections-${tradition}`);
  }
});

test("opening shows the heading and the objections: the Catholic ones are links, the others inert", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  for (const [index, tradition] of traditions.entries()) {
    await page.locator(toggle(tradition)).click();
    await expect(page.locator(box(tradition))).toBeVisible();
    await expect(page.locator(toggle(tradition))).toHaveText("Ocultar las objeciones");
    await expect(page.locator(toggle(tradition))).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator(`${box(tradition)} li`)).toHaveCount(counts[index] ?? 0);
    await expect(page.locator(`${box(tradition)} > span`)).toHaveText("Objeciones que recibe");
  }
  const hrefs = await page
    .locator(`${box("catholic")} li a`)
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  expect(hrefs).toEqual([1, 2, 3, 4, 5, 6, 7].map((n) => `${traditionPath}/objeciones/ob-${n}`));
  await expect(page.locator(`${box("lutheran")} li a`)).toHaveCount(0);
  const url = page.url();
  await page
    .locator(`${box("lutheran")} li button`)
    .first()
    .click();
  expect(page.url()).toBe(url);
});

test("opening animates the height and the margin from the closed state and the rows rise one after another", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await page.locator("#answers").scrollIntoViewIfNeeded();
  await page.locator(toggle("catholic")).hover();
  const frames = sample(page, box("catholic"), 900);
  await page.locator(toggle("catholic")).click();
  const recorded = await frames;
  const open = recorded.filter((frame) => frame.height > 0);
  const natural = Math.max(...open.map((frame) => frame.height));
  expect(open[0]!.height).toBeLessThan(natural * 0.5);
  expect(open[0]!.marginTop).toBeLessThan(22);
  expect(open.some((frame) => frame.height > natural * 0.2 && frame.height < natural * 0.95)).toBe(true);
  const heights = open.map((frame) => frame.height);
  heights.forEach((height, index) => {
    if (index > 0) expect(height).toBeGreaterThanOrEqual(heights[index - 1]! - 0.5);
  });
  expect(recorded.some((frame) => frame.rows >= 7)).toBe(true);
  await page.waitForTimeout(900);
  const settled = await page.locator(box("catholic")).evaluate((element) => ({
    overflow: (element as HTMLElement).style.overflow,
    height: (element as HTMLElement).style.height,
    animations: element.getAnimations({ subtree: true }).length,
    marginTop: getComputedStyle(element).marginTop,
  }));
  expect(settled).toEqual({ overflow: "", height: "", animations: 0, marginTop: "22px" });
});

test("rows rise with 120 ms plus 40 ms steps, capped at eight, 420 ms each", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await page.locator(toggle("catholic")).click();
  const timing = await page.locator(`${box("catholic")} li`).evaluateAll((rows) =>
    rows.map((row) => {
      const animation = row.getAnimations().find((item) => item.id === "fold");
      const computed = animation?.effect?.getComputedTiming();
      return computed ? [Number(computed.delay), Number(computed.duration)] : null;
    }),
  );
  timing.forEach((entry, index) => {
    if (entry) expect(entry).toEqual([120 + index * 40, 420]);
  });
  expect(timing.filter(Boolean).length).toBeGreaterThan(0);
});

test("closing fades and shrinks the rows in 180 ms, then folds the height, then hides the box", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await page.locator(toggle("orthodox")).click();
  await page.waitForTimeout(1000);
  const frames = sample(page, box("orthodox"), 1000);
  await page.locator(toggle("orthodox")).click();
  const recorded = await frames;
  const start = recorded[0]!.height;
  expect(recorded.some((frame) => frame.height > start * 0.1 && frame.height < start * 0.9)).toBe(true);
  expect(Math.min(...recorded.map((frame) => frame.height))).toBeLessThan(1);
  await expect(page.locator(box("orthodox"))).toBeHidden();
  const left = await page.locator(box("orthodox")).evaluate((element) => ({
    animations: element.getAnimations({ subtree: true }).length,
    overflow: (element as HTMLElement).style.overflow,
  }));
  expect(left).toEqual({ animations: 0, overflow: "" });
  await expect(page.locator(toggle("orthodox"))).toHaveText("Ver las objeciones que recibe");
});

test("the plus turns 45° while open and back when closed", async ({ page }) => {
  await page.goto(path);
  const icon = page.locator(`${toggle("catholic")} svg`);
  await page.locator(toggle("catholic")).click();
  await expect.poll(() => icon.evaluate((node) => getComputedStyle(node).rotate)).toBe("45deg");
  await page.locator(toggle("catholic")).click();
  await expect.poll(() => icon.evaluate((node) => getComputedStyle(node).rotate)).toBe("none");
});

test("closing in the middle of opening, and opening in the middle of closing, end consistent", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  const button = page.locator(toggle("catholic"));
  await button.click();
  await page.waitForTimeout(150);
  await button.click();
  await expect(page.locator(box("catholic"))).toBeHidden();
  await button.click();
  await page.waitForTimeout(1000);
  await button.click();
  await page.waitForTimeout(250);
  await button.click();
  await page.waitForTimeout(1200);
  await expect(page.locator(box("catholic"))).toBeVisible();
  const state = await page.locator(box("catholic")).evaluate((element) => ({
    overflow: (element as HTMLElement).style.overflow,
    animations: element.getAnimations({ subtree: true }).length,
    opacities: [...element.querySelectorAll("li")].map((row) => getComputedStyle(row).opacity),
  }));
  expect(state.overflow).toBe("");
  expect(state.animations).toBe(0);
  expect(state.opacities.every((opacity) => opacity === "1")).toBe(true);
  const natural = await page.locator(box("catholic")).evaluate((element) => element.scrollHeight);
  const shown = await page.locator(box("catholic")).evaluate((element) => element.getBoundingClientRect().height);
  expect(Math.abs(shown - natural)).toBeLessThan(2);
});

test("seven quick toggles end in the state their parity says, with nothing left running", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  const button = page.locator(toggle("reformed"));
  for (let step = 0; step < 7; step += 1) {
    await button.click();
    await page.waitForTimeout(40);
  }
  await page.waitForTimeout(1500);
  await expect(page.locator(box("reformed"))).toBeVisible();
  await expect(button).toHaveAttribute("aria-expanded", "true");
  expect(
    await page.locator(box("reformed")).evaluate((element) => element.getAnimations({ subtree: true }).length),
  ).toBe(0);
  await button.click();
  await page.waitForTimeout(1200);
  await expect(page.locator(box("reformed"))).toBeHidden();
});

test("under reduced motion the toggle is instant and nothing is animated", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(path);
  await page.locator(toggle("catholic")).click();
  await expect(page.locator(box("catholic"))).toBeVisible();
  expect(
    await page.locator(box("catholic")).evaluate((element) => element.getAnimations({ subtree: true }).length),
  ).toBe(0);
  await page.locator(toggle("catholic")).click();
  await expect(page.locator(box("catholic"))).toBeHidden();
  await context.close();
});

test("the keyboard opens and closes the list and keeps the focus on the button", async ({ page }) => {
  await page.goto(path);
  const button = page.locator(toggle("baptist"));
  await button.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(box("baptist"))).toBeVisible();
  await expect(button).toBeFocused();
  await page.keyboard.press("Space");
  await expect(page.locator(box("baptist"))).toBeHidden();
  await expect(button).toBeFocused();
});

test("an objection row lifts its chevron and fills on hover, and a Catholic one opens its page", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await page.locator(toggle("catholic")).click();
  await page.waitForTimeout(1000);
  const row = page.locator(`${box("catholic")} li a`).first();
  await row.hover();
  await expect.poll(() => row.locator("svg").evaluate((node) => getComputedStyle(node).translate)).toBe("2px 1px");
  expect(await row.evaluate((node) => getComputedStyle(node).backgroundColor)).not.toBe("rgba(0, 0, 0, 0)");
  await row.click();
  await expect(page).toHaveURL(`${traditionPath}/objeciones/ob-1`);
});

test("a grade opens its window with the definition; Esc returns focus", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  const dialog = page.locator("[role=dialog]");
  for (const [index, expected] of [
    [0, "Se ha de creer con fe divina y católica"],
    [1, "metousiosis"],
    [2, "Obliga a todo pastor"],
    [3, "Vinculante para los oficiales"],
    [4, "Solo la Escritura obliga la conciencia"],
  ] as const) {
    const link = page.locator(`${items} [aria-haspopup]`).nth(index);
    await link.scrollIntoViewIfNeeded();
    await link.click();
    await expect(dialog).toHaveAttribute("data-open", "true");
    await expect(dialog).toContainText(expected);
    await expect(dialog).toContainText("Grado de autoridad");
    await page.keyboard.press("Escape");
    await expect(link).toBeFocused();
  }
});

test("the study link of the Catholic answer opens its page", async ({ page }) => {
  await page.goto(path);
  await expect(page.locator(`${items}[data-id=catholic] a`).filter({ hasText: "Estudiar" })).toHaveAttribute(
    "href",
    traditionPath,
  );
});

test("the columns are 200 and 680 px from 1100 px, 170 px from 640 and one column on phones", async ({ page }) => {
  for (const [width, expected] of [
    [1440, ["200px", "680px"]],
    [1100, ["200px", null]],
    [1099, ["170px", null]],
    [768, ["170px", null]],
    [390, [null, null]],
  ] as const) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(path);
    const columns = await page
      .locator(items)
      .first()
      .evaluate((node) => getComputedStyle(node).gridTemplateColumns.split(" "));
    if (expected[0] === null) expect(columns, `${width}px`).toHaveLength(1);
    else {
      expect(columns, `${width}px`).toHaveLength(2);
      expect(columns[0], `${width}px`).toBe(expected[0]);
      if (expected[1]) expect(columns[1], `${width}px`).toBe(expected[1]);
    }
  }
});

test("the list reveals on scroll and none stays hidden after a fast jump", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 700 });
  await page.goto(path);
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1800);
  const opacity = await page.evaluate(() =>
    [...document.querySelectorAll("#answers ol > li")].map((item) => Number(getComputedStyle(item).opacity)),
  );
  expect(opacity).toEqual([1, 1, 1, 1, 1]);
});

test("under reduced motion the list is never armed", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(path);
  expect(await page.evaluate(() => document.querySelectorAll("#answers [data-rv]").length)).toBe(0);
  await context.close();
});

test("the ruler has a tick for the title and each of the two sections", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await page.waitForTimeout(1500);
  await expect(page.locator("[data-tick]")).toHaveCount(6);
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: no horizontal overflow, closed and with every list open @webkit`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(path);
    expect(await horizontalOverflow(page)).toBe(0);
    for (const tradition of traditions) await page.locator(toggle(tradition)).click();
    await page.waitForTimeout(1200);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("the fold works in every engine @webkit", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await page.locator(toggle("lutheran")).click();
  await expect(page.locator(box("lutheran"))).toBeVisible();
  await page.waitForTimeout(1000);
  await page.locator(toggle("lutheran")).click();
  await expect(page.locator(box("lutheran"))).toBeHidden();
});
