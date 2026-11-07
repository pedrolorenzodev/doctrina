import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, storeSimplifyOn, traditionPath } from "./helpers";

test.beforeEach(async ({ context }) => {
  await storeSimplifyOn(context);
});

type Frame = {
  t: number;
  box: number;
  para: number;
  below: number;
  scroll: number;
  words: number;
  dashed: boolean;
  fade: number;
  layers: number;
};

const container = (index: number) => `[data-simplifier] >> nth=${index}`;

async function openPage(page: Page, width = 1440, height = 900) {
  await page.setViewportSize({ width, height });
  await page.goto(traditionPath, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  test.skip((await page.locator("[data-simplifier-mark]").count()) === 0, "the simplifier switch is off in this build");
}

async function bringUp(page: Page, index: number) {
  await page.locator(container(index)).evaluate((element) => {
    window.scrollTo(0, element.getBoundingClientRect().top + scrollY - 200);
  });
  await page.waitForTimeout(150);
}

const mark = (page: Page, index: number) => page.locator("[data-simplifier-mark]").nth(index);

async function startSampling(page: Page, index: number) {
  await page.evaluate((at) => {
    const frames: Frame[] = [];
    const start = performance.now();
    const root = document.querySelectorAll("[data-simplifier]")[at] as HTMLElement;
    const visible = (word: Element) => getComputedStyle(word).visibility === "visible";
    const tick = () => {
      const box = root.querySelector<HTMLElement>("[data-simplifier-panel]");
      const para = root.firstElementChild?.firstElementChild as HTMLElement;
      frames.push({
        t: performance.now() - start,
        box: box ? box.getBoundingClientRect().height : -1,
        para: para.getBoundingClientRect().top,
        below: (
          (root.nextElementSibling ?? root.parentElement?.nextElementSibling) as HTMLElement
        ).getBoundingClientRect().top,
        scroll: scrollY,
        words: box ? [...box.querySelectorAll("[data-word]")].filter(visible).length : 0,
        dashed: box ? getComputedStyle(box.firstElementChild!).borderLeftStyle === "dashed" : false,
        fade: box ? Number(getComputedStyle(box.firstElementChild!).opacity) : 1,
        layers: box ? box.querySelector("[data-simplifier-text]")!.parentElement!.children.length : 0,
      });
      (window as unknown as { __frames: Frame[] }).__frames = frames;
      (window as unknown as { __run: number }).__run = requestAnimationFrame(tick);
    };
    tick();
  }, index);
}

async function stopSampling(page: Page): Promise<Frame[]> {
  const frames = await page.evaluate(() => {
    cancelAnimationFrame((window as unknown as { __run: number }).__run);
    return (window as unknown as { __frames: Frame[] }).__frames;
  });
  if (process.env.SIMPLIFIER_DEBUG) {
    const base = frames[0]!;
    console.log(
      frames
        .filter((_, at) => at % 2 === 0)
        .map(
          (f) =>
            `${Math.round(f.t)} box=${f.box.toFixed(1)} below=${(f.below - base.below).toFixed(1)} fade=${f.fade.toFixed(2)} layers=${f.layers} words=${f.words} para=${f.para.toFixed(1)} scroll=${f.scroll}`,
        )
        .join("\n"),
    );
  }
  return frames;
}

const totalWords = (page: Page, index: number) =>
  page.locator("[data-simplifier]").nth(index).locator("[data-word]").count();

function expectInStep(frames: Frame[], direction: "grow" | "shrink" = "grow") {
  const first = frames[0]!;
  for (const frame of frames) {
    expect(Math.abs(frame.para - first.para)).toBeLessThan(0.5);
    expect(frame.scroll).toBe(first.scroll);
    expect(Math.abs(frame.below - Math.max(frame.box, 0) - (first.below - Math.max(first.box, 0)))).toBeLessThan(1);
  }
  const boxes = frames.map((frame) => Math.max(frame.box, 0));
  for (let at = 1; at < boxes.length; at += 1) {
    if (direction === "grow") expect(boxes[at]!).toBeGreaterThanOrEqual(boxes[at - 1]! - 0.5);
    else expect(boxes[at]!).toBeLessThanOrEqual(boxes[at - 1]! + 0.5);
  }
}

async function openAndSettle(page: Page, index: number) {
  await mark(page, index).click();
  await expect(page.locator(container(index)).locator("[data-simplifier-stop]")).toBeVisible();
  await expect(page.locator(container(index)).locator("[data-simplifier-hide]")).toBeVisible({ timeout: 12000 });
  await page.waitForTimeout(500);
}

async function hide(page: Page, index: number) {
  await page.locator(container(index)).locator("[data-simplifier-hide]").click();
  await expect(page.locator(container(index)).locator("[data-simplifier-panel]")).toHaveCount(0);
}

test("the first open on a paragraph streams its words, the box and the content below move in step", async ({
  page,
}) => {
  await openPage(page);
  await bringUp(page, 1);
  await page.locator(container(1)).hover();
  await startSampling(page, 1);
  await page.waitForTimeout(150);
  await mark(page, 1).click();
  await page.waitForTimeout(8000);
  const frames = await stopSampling(page);
  const opened = frames.filter((frame) => frame.box >= 0);
  if (process.env.SIMPLIFIER_DEBUG)
    console.log(
      opened
        .slice(0, 45)
        .map(
          (f) =>
            `${Math.round(f.t)} box=${f.box.toFixed(1)} below=${(f.below - frames[0]!.below).toFixed(1)} words=${f.words} para=${f.para.toFixed(1)}`,
        )
        .join("\n"),
    );
  expect(opened.length).toBeGreaterThan(20);
  expectInStep(frames);
  const total = await totalWords(page, 1);
  const counts = new Set(opened.map((frame) => frame.words));
  expect(counts.size).toBeGreaterThan(8);
  expect(opened.at(-1)!.words).toBe(total);
  const grown = opened.find((frame) => frame.box >= opened.at(-1)!.box - 0.5)!;
  const later = opened.filter((frame) => frame.t > grown.t + 100);
  for (const frame of later) expect(Math.abs(frame.box - opened.at(-1)!.box)).toBeLessThan(0.5);
  expect(opened.some((frame) => frame.dashed)).toBe(true);
  expect(opened.at(-1)!.dashed).toBe(false);
});

test("opening the same paragraph again does not stream: every word is there from the first frame", async ({ page }) => {
  await openPage(page);
  await bringUp(page, 1);
  await mark(page, 1).click();
  await expect(page.locator(container(1)).locator("[data-simplifier-stop]")).toBeVisible();
  await page
    .locator(container(1))
    .locator("[data-simplifier-hide]")
    .click({ trial: true })
    .catch(() => undefined);
  await page.waitForTimeout(8000);
  await page.locator(container(1)).locator("[data-simplifier-hide]").click();
  await expect(page.locator(container(1)).locator("[data-simplifier-panel]")).toHaveCount(0);
  await bringUp(page, 1);
  await startSampling(page, 1);
  await page.waitForTimeout(100);
  await mark(page, 1).click();
  await page.waitForTimeout(800);
  const frames = await stopSampling(page);
  const opened = frames.filter((frame) => frame.box >= 0);
  const wordsAtEnd = opened.at(-1)!.words;
  for (const frame of opened) expect(frame.words).toBe(wordsAtEnd);
  expect(opened.some((frame) => frame.dashed)).toBe(false);
  expectInStep(frames);
  const heights = opened.map((frame) => frame.box);
  expect(heights[0]!).toBeLessThan(heights.at(-1)! / 2);
  expect(new Set(heights.map((height) => Math.round(height))).size).toBeGreaterThan(5);
});

test("another paragraph streams on its own first open even after the first one was opened twice", async ({ page }) => {
  await openPage(page);
  await bringUp(page, 1);
  await openAndSettle(page, 1);
  await hide(page, 1);
  await bringUp(page, 2);
  await startSampling(page, 2);
  await mark(page, 2).click();
  await page.waitForTimeout(1500);
  const frames = await stopSampling(page);
  const opened = frames.filter((frame) => frame.box >= 0);
  expect(new Set(opened.map((frame) => frame.words)).size).toBeGreaterThan(5);
  expectInStep(frames);
});

test("closing fades then collapses: the box and the content below move in step and the scroll never moves", async ({
  page,
}) => {
  await openPage(page);
  await bringUp(page, 1);
  await openAndSettle(page, 1);
  await startSampling(page, 1);
  await page.waitForTimeout(100);
  await page.locator(container(1)).locator("[data-simplifier-hide]").click();
  await expect(page.locator(container(1)).locator("[data-simplifier-panel]")).toHaveCount(0);
  await page.waitForTimeout(100);
  const frames = await stopSampling(page);
  const closing = frames.filter((frame) => frame.box >= 0);
  expect(closing.at(-1)!.box).toBeLessThan(1);
  expect(closing.length).toBeGreaterThan(15);
  expectInStep(frames.slice(frames.indexOf(closing[0]!)), "shrink");
  for (let at = 1; at < closing.length; at += 1)
    expect(closing[at]!.fade).toBeLessThanOrEqual(closing[at - 1]!.fade + 0.01);
  expect(closing.some((frame) => frame.fade < 0.5)).toBe(true);
});

test("switching the level cross-fades the text and moves the box and the content below in step", async ({ page }) => {
  await openPage(page);
  await bringUp(page, 2);
  await openAndSettle(page, 2);
  await hide(page, 2);
  await mark(page, 2).click();
  await page.waitForTimeout(700);
  const before = await page
    .locator(container(2))
    .locator("[data-simplifier-panel]")
    .evaluate((el) => el.getBoundingClientRect().height);
  await startSampling(page, 2);
  await page.waitForTimeout(100);
  await page.locator(container(2)).getByRole("button", { name: "Muy simple" }).click();
  await page.waitForTimeout(800);
  const frames = await stopSampling(page);
  const after = frames.at(-1)!.box;
  expect(Math.abs(after - before)).toBeGreaterThan(1);
  const moving = frames.filter((frame) => Math.abs(frame.box - before) > 0.5 || frame.layers > 1);
  expect(moving.length).toBeGreaterThan(8);
  const base = frames[0]!;
  for (const frame of frames) {
    expect(Math.abs(frame.below - base.below - (frame.box - before))).toBeLessThan(1);
    expect(frame.scroll).toBe(base.scroll);
    expect(frame.box).toBeGreaterThanOrEqual(Math.min(before, after) - 0.5);
    expect(frame.box).toBeLessThanOrEqual(Math.max(before, after) + 0.5);
  }
  expect(frames.some((frame) => frame.layers === 2)).toBe(true);
  expect(frames.at(-1)!.layers).toBe(1);
  await expect(page.locator(container(2)).locator("[data-simplifier-text]")).toContainText("Cristo");
});

test("with reduced motion everything is instant and nothing streams", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  await storeSimplifyOn(context);
  const page = await context.newPage();
  await openPage(page);
  await bringUp(page, 1);
  await startSampling(page, 1);
  await page.waitForTimeout(100);
  await mark(page, 1).click();
  await page.waitForTimeout(400);
  const frames = await stopSampling(page);
  const opened = frames.filter((frame) => frame.box >= 0);
  const total = await totalWords(page, 1);
  expect(opened[0]!.words).toBe(total);
  expect(opened.every((frame) => Math.abs(frame.box - opened.at(-1)!.box) < 0.5)).toBe(true);
  expect(opened.some((frame) => frame.dashed)).toBe(false);
  await hide(page, 1);
  await context.close();
});

test("the ring is reachable by keyboard, Escape and «Ocultar» give the focus back to it", async ({ page }) => {
  await openPage(page);
  await bringUp(page, 1);
  await mark(page, 1).focus();
  await page.keyboard.press("Enter");
  await expect(mark(page, 1)).toHaveAttribute("aria-expanded", "true");
  await page.getByRole("button", { name: "Detener" }).first().focus();
  await page.keyboard.press("Escape");
  await expect(page.locator(container(1)).locator("[data-simplifier-panel]")).toHaveCount(0);
  await expect(mark(page, 1)).toBeFocused();
  await expect(mark(page, 1)).toHaveAttribute("aria-expanded", "false");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  await page
    .locator(container(1))
    .locator("[data-simplifier-hide]")
    .click({ force: true })
    .catch(() => undefined);
});

test("the label «Simplificado por IA» is visible whenever the simplified text is, with no overflow at 360", async ({
  page,
}) => {
  await openPage(page, 360, 780);
  await bringUp(page, 1);
  await mark(page, 1).click();
  const panel = page.locator(container(1)).locator("[data-simplifier-panel]");
  await expect(panel.locator("[data-simplifier-label]")).toBeVisible();
  await expect(panel.locator("[data-simplifier-label]")).toHaveText("Simplificado por IA");
  await page.waitForTimeout(1200);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  await page.getByRole("button", { name: "Muy simple" }).first().click();
  await page.waitForTimeout(700);
  await expect(panel.locator("[data-simplifier-label]")).toBeVisible();
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

const smyrnaeans = "/es/historia/obras/ignatius-smyrnaeans";

test("the Fathers' reader offers the simplifier on one paragraph, in English, with the same animation rules", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(smyrnaeans, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  test.skip((await page.locator("[data-simplifier-mark]").count()) === 0, "the simplifier switch is off in this build");
  await expect(page.locator("[data-simplifier-mark]")).toHaveCount(1);
  await expect(page.locator("[data-father-text] > div")).toHaveCount(29);
  await expect(page.locator("[data-simplifier] [data-division-open]")).toHaveText("6.2");
  await bringUp(page, 0);
  await startSampling(page, 0);
  await page.waitForTimeout(100);
  await mark(page, 0).click();
  await page.waitForTimeout(9000);
  const frames = await stopSampling(page);
  const opened = frames.filter((frame) => frame.box >= 0);
  expectInStep(frames);
  expect(new Set(opened.map((frame) => frame.words)).size).toBeGreaterThan(10);
  const text = page.locator("[data-simplifier-text]");
  await expect(text).toHaveAttribute("lang", "en");
  await expect(text).toContainText("Take note of those who hold strange teaching");
  await expect(page.locator("[data-simplifier-label]")).toHaveText("Simplificado por IA");
  await page.getByRole("button", { name: "Muy simple" }).click();
  await page.waitForTimeout(700);
  await expect(text).toContainText("This goes against what God thinks.");
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("pointing at a sentence number marks its original sentence", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(smyrnaeans, { waitUntil: "networkidle" });
  test.skip((await page.locator("[data-simplifier-mark]").count()) === 0, "the simplifier switch is off in this build");
  await bringUp(page, 0);
  await mark(page, 0).click();
  await page.waitForTimeout(9000);
  await page.locator("[data-simplifier-text] sup").nth(1).hover();
  const marked = await page.evaluate(() => {
    const highlight = (CSS as unknown as { highlights: Map<string, Set<Range>> }).highlights.get("simplifier-pair");
    return highlight ? [...highlight].map((range) => range.toString()) : [];
  });
  expect(marked).toEqual([
    "They have no care for love, none for the widow, none for the orphan, none for the afflicted, none for the prisoner, none for the hungry or thirsty.",
  ]);
  await page.mouse.move(5, 5);
  const cleared = await page.evaluate(() =>
    (CSS as unknown as { highlights: Map<string, unknown> }).highlights.has("simplifier-pair"),
  );
  expect(cleared).toBe(false);
});

const catholicAndBaptist = ["eucaristia", "bautismo", "papado", "sola-scriptura"].flatMap((doctrine) =>
  ["catolica", "bautista"].map((tradition) => `/es/doctrinas/${doctrine}/${tradition}`),
);

test("the 8 Catholic and Baptist pages simplify their definition and first two statements, each sentence paired with its original", async ({
  browser,
}) => {
  test.setTimeout(240000);
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  await storeSimplifyOn(context);
  const page = await context.newPage();
  for (const route of catholicAndBaptist) {
    await page.goto(route, { waitUntil: "networkidle" });
    test.skip(
      (await page.locator("[data-simplifier-mark]").count()) === 0,
      "the simplifier switch is off in this build",
    );
    const rings = await page.locator("[data-simplifier-mark]").count();
    expect(rings, route).toBe(await page.locator("[data-simplifier]").count());
    expect(rings, route).toBeGreaterThanOrEqual(3);
    for (let index = 0; index < 3; index += 1) {
      await bringUp(page, index);
      await mark(page, index).click();
      const panel = page.locator(container(index)).locator("[data-simplifier-panel]");
      await expect(panel.locator("[data-simplifier-label]"), route).toHaveText("Simplificado por IA");
      for (const level of ["Más claro", "Muy simple"]) {
        await panel.getByRole("button", { name: level }).click();
        const sups = panel.locator("[data-simplifier-text] sup");
        const count = await sups.count();
        expect(count, `${route} ${index} ${level}`).toBeGreaterThan(0);
        for (let at = 0; at < count; at += 1) {
          await sups.nth(at).hover();
          const marked = await page.evaluate(() => {
            const highlight = (CSS as unknown as { highlights: Map<string, Set<Range>> }).highlights.get(
              "simplifier-pair",
            );
            return highlight ? [...highlight].map((range) => range.toString()).join("") : "";
          });
          expect(marked.length, `${route} ${index} ${level} sentence ${at + 1}`).toBeGreaterThan(10);
        }
      }
      await panel.locator("[data-simplifier-hide]").click();
      await expect(panel).toHaveCount(0);
    }
  }
  await context.close();
});

function expectOneMotion(frames: Frame[]) {
  const positions = frames.map((frame) => frame.below + frame.scroll);
  const steps = positions.slice(1).map((position, at) => Math.abs(position - positions[at]!));
  const peak = steps.indexOf(Math.max(...steps));
  expect(positions.at(-1)).not.toBe(positions[0]);
  for (let at = peak + 1; at < steps.length; at += 1) expect(steps[at]!).toBeLessThanOrEqual(steps[at - 1]! + 1.5);
}

const oneMotionPages = [
  { route: traditionPath, index: 1 },
  { route: "/es/historia/obras/ignatius-smyrnaeans", index: 0 },
];

for (const { route, index } of oneMotionPages) {
  test(`${route}: the content below moves in one motion on open, close, reopen and level change`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(route, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    test.skip(
      (await page.locator("[data-simplifier-mark]").count()) === 0,
      "the simplifier switch is off in this build",
    );
    await bringUp(page, index);
    const sampled = async (action: () => Promise<void>) => {
      await startSampling(page, index);
      await action();
      await page.waitForTimeout(1500);
      return stopSampling(page);
    };
    expectOneMotion(await sampled(() => mark(page, index).click()));
    await expect(page.locator(container(index)).locator("[data-simplifier-hide]")).toBeVisible({ timeout: 12000 });
    expectOneMotion(await sampled(() => page.locator(container(index)).locator("[data-simplifier-hide]").click()));
    await expect(page.locator(container(index)).locator("[data-simplifier-panel]")).toHaveCount(0);
    expectOneMotion(await sampled(() => mark(page, index).click()));
    const panel = page.locator(container(index)).locator("[data-simplifier-panel]");
    const heightBefore = (await panel.boundingBox())!.height;
    await page.waitForTimeout(300);
    const frames = await sampled(() => panel.locator("button").nth(1).click());
    if (Math.abs((await panel.boundingBox())!.height - heightBefore) > 2) expectOneMotion(frames);
  });
}
