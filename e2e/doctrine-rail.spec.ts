import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

const menu = "button[aria-controls=site-sidebar]";

async function openWithTree(page: Page, width: number, height: number, tree: "open" | "closed") {
  await page.setViewportSize({ width, height });
  await page.addInitScript((state) => localStorage.setItem("doctrina-tree", state), tree);
  await page.goto(traditionPath, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
}

async function wheelToObjections(page: Page) {
  await page.mouse.move(900, 500);
  const distance = await page
    .locator("#objections li")
    .first()
    .evaluate((el) => el.getBoundingClientRect().top - 140);
  await page.mouse.wheel(0, distance);
  await page.waitForTimeout(1500);
}

async function clickMenu(page: Page) {
  const box = (await page.locator(menu).first().boundingBox())!;
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
}

const boxes = (page: Page, selector: string) =>
  page.locator(selector).evaluateAll((elements) =>
    elements.map((element) => {
      const rect = element.getBoundingClientRect();
      return { x: Math.round(rect.left), y: Math.round(rect.top), w: Math.round(rect.width) };
    }),
  );

test("1728 with the tree closed: titles in a 236 px rail, lists in two columns, videos in three, prose at 720", async ({
  page,
}) => {
  await openWithTree(page, 1728, 1117, "closed");
  const head = (await boxes(page, "#teach .rail-head"))[0]!;
  const body = (await boxes(page, "#teach .rail-body"))[0]!;
  expect(head.w).toBe(236);
  expect(body.x - head.x).toBe(300);
  expect(head.x).toBe(64 + (1728 - 176 - 1360) / 2);
  const statements = await boxes(page, "#teach li:not([hidden])");
  expect(statements[1]!.y).toBe(statements[0]!.y);
  expect(statements[1]!.x).toBeGreaterThan(statements[0]!.x + 400);
  const definition = (await boxes(page, "#teach .rail-body > p"))[0]!;
  expect(definition.w).toBeLessThanOrEqual(720);
  const videos = await boxes(page, "#videos li");
  expect(new Set(videos.slice(0, 3).map((video) => video.y)).size).toBe(1);
  const grades = await boxes(page, "#authority tr");
  expect(grades[1]!.y).toBe(grades[0]!.y);
  expect(await page.locator("#teach .rail-head").evaluate((el) => getComputedStyle(el).position)).toBe("sticky");
  expect(await horizontalOverflow(page)).toBe(0);
});

test("1440 with the tree open keeps today's single 720 px column", async ({ page }) => {
  await openWithTree(page, 1440, 900, "open");
  const section = (await boxes(page, "#teach > div"))[0]!;
  expect(section.w).toBe(720);
  const statements = await boxes(page, "#teach li:not([hidden])");
  expect(statements[1]!.x).toBe(statements[0]!.x);
  expect(await page.locator("#teach .rail-head").evaluate((el) => getComputedStyle(el).position)).toBe("static");
});

test("folding the tree at 1440 moves the sections with it and keeps the reading place", async ({ page }) => {
  await openWithTree(page, 1440, 900, "open");
  await wheelToObjections(page);
  const frames = page.evaluate(
    () =>
      new Promise<{ t: number; firstTop: number; secondX: number; secondY: number }[]>((resolve) => {
        const [first, second] = document.querySelectorAll("#objections li");
        const log: { t: number; firstTop: number; secondX: number; secondY: number }[] = [];
        const start = performance.now();
        const step = () => {
          const a = first!.getBoundingClientRect();
          const b = second!.getBoundingClientRect();
          log.push({ t: performance.now() - start, firstTop: a.top, secondX: b.left, secondY: b.top });
          if (performance.now() - start < 600) requestAnimationFrame(step);
          else resolve(log);
        };
        requestAnimationFrame(step);
      }),
  );
  await clickMenu(page);
  const log = await frames;
  expect(await page.evaluate(() => document.documentElement.dataset.tree)).toBe("closed");
  for (const frame of log) expect(Math.abs(frame.firstTop - log[0]!.firstTop)).toBeLessThan(2);
  const last = log[log.length - 1]!;
  expect(last.secondY).toBeCloseTo(last.firstTop, 0);
  expect(last.secondX).toBeGreaterThan(800);
  for (let index = 1; index < log.length; index++) {
    expect(Math.abs(log[index]!.secondX - log[index - 1]!.secondX)).toBeLessThan(160);
  }
  const mid = log.find((frame) => frame.t > 120 && frame.t < 220)!;
  expect(mid.secondX).toBeGreaterThan(log[0]!.secondX + 20);
  expect(mid.secondX).toBeLessThan(last.secondX - 20);
});

test("unfolding the tree at 1440 keeps the reading place, not the sticky title", async ({ page }) => {
  await openWithTree(page, 1440, 900, "closed");
  await wheelToObjections(page);
  const before = await page
    .locator("#objections li")
    .first()
    .evaluate((el) => el.getBoundingClientRect().top);
  await clickMenu(page);
  await page.waitForTimeout(500);
  const after = await page
    .locator("#objections li")
    .first()
    .evaluate((el) => el.getBoundingClientRect().top);
  expect(Math.abs(after - before)).toBeLessThan(2);
});

test("with reduced motion the layout switches without animating", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openWithTree(page, 1440, 900, "open");
  await clickMenu(page);
  const running = await page.evaluate(
    () =>
      document
        .getElementById("content")!
        .getAnimations({ subtree: true })
        .filter((a) => a.id === "rail-morph").length,
  );
  expect(running).toBe(0);
});
