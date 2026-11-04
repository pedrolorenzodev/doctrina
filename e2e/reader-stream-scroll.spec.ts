import { expect, test, type Page } from "@playwright/test";

const john = "/es/biblia/juan/6";

type Frame = { shift: number };

async function startTracking(page: Page) {
  await page.evaluate(() => {
    const run = { frames: [] as Frame[], going: true };
    (window as unknown as { __run: typeof run }).__run = run;
    let previous: { unit: Element; top: number } | null = null;
    const tick = () => {
      if (!run.going) return;
      const unit =
        [...document.querySelectorAll("[data-chapter-text] > [id]")].find(
          (candidate) => candidate.getBoundingClientRect().bottom > 200,
        ) ?? null;
      const shift =
        previous && previous.unit.isConnected ? previous.unit.getBoundingClientRect().top - previous.top : 0;
      run.frames.push({ shift });
      previous = unit ? { unit, top: unit.getBoundingClientRect().top } : null;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

async function stopTracking(page: Page): Promise<Frame[]> {
  return page.evaluate(() => {
    const run = (window as unknown as { __run: { frames: Frame[]; going: boolean } }).__run;
    run.going = false;
    return run.frames;
  });
}

async function fling(page: Page, steps: number, delta: number) {
  await page.mouse.move(700, 450);
  for (let step = 0; step < steps; step += 1) {
    await page.mouse.wheel(0, delta);
    await page.waitForTimeout(16);
  }
  await page.waitForTimeout(800);
}

const readingUnit = (page: Page) =>
  page.evaluate(() => {
    const unit = [...document.querySelectorAll<HTMLElement>("[data-chapter-text] > [id]")].find(
      (candidate) => candidate.getBoundingClientRect().bottom > 200,
    );
    const chapter = unit?.closest("[data-stream-chapter]")?.getAttribute("data-stream-chapter");
    return unit && chapter ? `${chapter}:${unit.id.split("v-")[1]}` : null;
  });

test("a long fast scroll down through several chapters never moves the verse on screen by more than the scroll itself", async ({
  page,
}) => {
  test.setTimeout(120000);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await startTracking(page);
  await fling(page, 400, 100);
  const frames = await stopTracking(page);
  expect(Math.max(...frames.map((frame) => Math.abs(frame.shift)))).toBeLessThan(800);
  expect(await page.evaluate(() => document.querySelectorAll("[data-stream-chapter]").length)).toBeLessThanOrEqual(5);
});

test("a long fast scroll up across a book boundary does not jump either", async ({ page }) => {
  test.setTimeout(120000);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/biblia/lucas/2", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await startTracking(page);
  await fling(page, 400, -100);
  const frames = await stopTracking(page);
  expect(Math.max(...frames.map((frame) => Math.abs(frame.shift)))).toBeLessThan(800);
});

const chapterLink = (name: string) => `#site-sidebar a[aria-label="${name}"]`;

test("picking a chapter that is mounted in the tree scrolls to it and lands on its first verse", async ({ page }) => {
  test.setTimeout(120000);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await fling(page, 250, 120);
  const mounted = await page.evaluate(() =>
    [...document.querySelectorAll("[data-stream-chapter]")].map((section) =>
      section.getAttribute("data-stream-chapter"),
    ),
  );
  const target = mounted.find((key) => key !== "John/6" && key !== mounted[mounted.length - 1])!;
  const chapter = target.split("/")[1]!;
  await page.locator(chapterLink(`Juan ${chapter}`)).evaluate((link: HTMLElement) => link.click());
  await expect.poll(() => readingUnit(page), { timeout: 8000 }).toBe(`John/${chapter}:1`);
  expect(new URL(page.url()).pathname).toBe(`/es/biblia/juan/${chapter}`);
});

test("picking the chapter the page was opened on, after the window moved on, brings it back", async ({ page }) => {
  test.setTimeout(120000);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await fling(page, 250, 120);
  expect(await page.evaluate(() => document.querySelector('[data-stream-chapter="John/6"]') === null)).toBe(true);
  await page.locator(chapterLink("Juan 6")).evaluate((link: HTMLElement) => link.click());
  await expect.poll(() => readingUnit(page), { timeout: 8000 }).toBe("John/6:1");
  expect(new URL(page.url()).pathname).toBe("/es/biblia/juan/6");
});
