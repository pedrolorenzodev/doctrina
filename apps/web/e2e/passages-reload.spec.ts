import { expect, test, type Browser, type Page } from "@playwright/test";

const route = "/es/doctrinas/bautismo/bautista/pasajes";

type Frame = { t: number; title: string | null; layers: boolean; count: string | null; accent: number[] };
type Target = { hash: string; title: string; number: number };

const sampler = () => {
  const frames: Frame[] = [];
  Object.assign(window, { passageFrames: frames });
  const visible = (element: Element | null | undefined) =>
    !!element && element.checkVisibility({ visibilityProperty: true, checkVisibilityCSS: true } as never);
  const sample = () => {
    const heading = document.querySelector(".passages-grid h2");
    const layers = heading?.parentElement?.nextElementSibling ?? null;
    const grid = document.querySelector(".passages-grid");
    const count = [...(grid?.querySelectorAll("span") ?? [])].find((span) =>
      /^Pasaje \d+ de \d+$/.test(span.textContent ?? ""),
    );
    const accent: number[] = [];
    grid?.querySelectorAll("nav").forEach((nav) => {
      if (!visible(nav)) return;
      nav.querySelectorAll("button").forEach((tick, index) => {
        const mark = tick.querySelector(':scope > span[aria-hidden="true"]');
        if (mark && Number(getComputedStyle(mark).opacity) >= 0.99) accent.push(index);
      });
    });
    frames.push({
      t: performance.now(),
      title: heading && visible(heading) ? (heading.textContent ?? "") : null,
      layers: visible(layers),
      count: count && visible(count) ? (count.textContent ?? "") : null,
      accent,
    });
    requestAnimationFrame(sample);
  };
  requestAnimationFrame(sample);
};

const normal = (text: string | null) => (text ?? "").replace(/\s+/g, " ").trim();

async function framesOf(page: Page): Promise<Frame[]> {
  return page.evaluate(() => (window as unknown as { passageFrames: Frame[] }).passageFrames);
}

function wrongFrames(frames: Frame[], target: Target): string[] {
  const wrong: string[] = [];
  for (const frame of frames) {
    if (frame.title !== null && normal(frame.title) !== normal(target.title))
      wrong.push(`t=${Math.round(frame.t)} title ${frame.title}`);
    if (frame.layers && normal(frame.title) !== normal(target.title)) wrong.push(`t=${Math.round(frame.t)} layers`);
    if (frame.count !== null && !frame.count.startsWith(`Pasaje ${target.number} de`))
      wrong.push(`t=${Math.round(frame.t)} count ${frame.count}`);
    if (frame.accent.some((index) => index !== target.number - 1))
      wrong.push(`t=${Math.round(frame.t)} tick ${frame.accent.join(",")}`);
  }
  return wrong;
}

async function targets(browser: Browser): Promise<{ first: Target; later: Target[]; total: number }> {
  const page = await browser.newPage();
  await page.goto(route);
  const heading = page.getByRole("heading", { level: 2 });
  const total = Number((await page.getByText(/^Pasaje 1 de \d+$/).textContent())!.replace(/\D+1\D+/, ""));
  const found: Target[] = [];
  const first: Target = { hash: "", title: normal(await heading.textContent()), number: 1 };
  for (let number = 2; number <= total; number += 1) {
    await page.keyboard.press("ArrowRight");
    await expect(page.getByText(new RegExp(`^Pasaje ${number} de`))).toBeVisible();
    found.push({
      hash: await page.evaluate(() => location.hash),
      title: normal(await heading.textContent()),
      number,
    });
  }
  await page.close();
  return { first, later: found, total };
}

let set: Awaited<ReturnType<typeof targets>>;

test.beforeAll(async ({ browser }) => {
  set = await targets(browser);
});

const settled = (page: Page, target: Target) =>
  expect(page.getByRole("heading", { level: 2 })).toHaveText(new RegExp(target.title.replace(/\s/g, "\\s")), {
    timeout: 45000,
  });

async function reloadOn(page: Page, target: Target) {
  await page.addInitScript(sampler);
  await page.goto(`${route}${target.hash}`);
  await settled(page, target);
  await page.evaluate(() => (window as unknown as { passageFrames: Frame[] }).passageFrames.splice(0));
  await page.reload();
  await settled(page, target);
  await expect(page.getByText(new RegExp(`^Pasaje ${target.number} de`))).toBeVisible();
  await page.waitForTimeout(400);
}

test("a reload on a later passage never paints the first passage", async ({ page }) => {
  const picks = [set.later[0]!, set.later[Math.floor(set.later.length / 2)]!, set.later.at(-1)!];
  for (const target of picks) {
    await reloadOn(page, target);
    const frames = await framesOf(page);
    expect(frames.length).toBeGreaterThan(3);
    expect(wrongFrames(frames, target), target.hash).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.hasAttribute("data-passage-pending"))).toBe(false);
  }
});

test("the same holds with a throttled CPU and a slow network", async ({ page }) => {
  test.setTimeout(120000);
  const target = set.later[Math.floor(set.later.length / 2)]!;
  const session = await page.context().newCDPSession(page);
  await session.send("Network.enable");
  await session.send("Network.emulateNetworkConditions", {
    offline: false,
    latency: 300,
    downloadThroughput: (400 * 1024) / 8,
    uploadThroughput: (400 * 1024) / 8,
  });
  await session.send("Emulation.setCPUThrottlingRate", { rate: 6 });
  await reloadOn(page, target);
  expect(wrongFrames(await framesOf(page), target)).toEqual([]);
});

test("a reload on a later passage at 390 px with reduced motion", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const target = set.later[Math.floor(set.later.length / 2)]!;
  await reloadOn(page, target);
  expect(wrongFrames(await framesOf(page), target)).toEqual([]);
  await context.close();
});

test("without a hash the first passage shows at once and nothing is marked", async ({ page }) => {
  await page.addInitScript(sampler);
  await page.goto(route);
  await settled(page, set.first);
  await page.waitForTimeout(300);
  const frames = (await framesOf(page)).filter((frame) => frame.title !== null || frame.count !== null);
  expect(frames.length).toBeGreaterThan(0);
  const hidden = (await framesOf(page)).filter((frame) => frame.t > frames[0]!.t && frame.title === null);
  expect(hidden).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.hasAttribute("data-passage-pending"))).toBe(false);
});

async function loadsWithoutHiding(browser: Browser, hash: string, first: Target) {
  const page = await browser.newPage();
  await page.addInitScript(sampler);
  await page.goto(`${route}${hash}`);
  await settled(page, first);
  await page.waitForTimeout(250);
  const frames = await framesOf(page);
  const started = frames.findIndex((frame) => frame.title !== null);
  expect(started, hash).toBeGreaterThanOrEqual(0);
  expect(
    frames.slice(started).filter((frame) => frame.title === null),
    hash,
  ).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.hasAttribute("data-passage-pending")), hash).toBe(false);
  await page.close();
}

test("an unknown id, #top and a malformed hash hide nothing", async ({ browser }) => {
  for (const hash of ["#nonexistent-passage", "#top", "#%E0%A4%A", "#"])
    await loadsWithoutHiding(browser, hash, set.first);
});

test("a hash that points to a passage the page does not show falls back to the first one, unmarked", async ({
  browser,
}) => {
  for (const hash of ["#acts-18-8", "#mark-1-4-mark-1-5"]) await loadsWithoutHiding(browser, hash, set.first);
});

test("hashchange, back and forward move between passages and never mark the page again", async ({ page }) => {
  const [a, b] = [set.later[0]!, set.later[1]!];
  await page.goto(`${route}${a.hash}`);
  await settled(page, a);
  await page.evaluate((hash) => (location.hash = hash), b.hash);
  await settled(page, b);
  await page.goBack();
  await settled(page, a);
  await expect(page.getByText(new RegExp(`^Pasaje ${a.number} de`))).toBeVisible();
  await page.goForward();
  await settled(page, b);
  expect(await page.evaluate(() => document.documentElement.hasAttribute("data-passage-pending"))).toBe(false);
});

test("leaving the page and coming back with the browser's back button shows that passage", async ({ page }) => {
  const target = set.later[2]!;
  await page.addInitScript(sampler);
  await page.goto(`${route}${target.hash}`);
  await settled(page, target);
  await page.goto("/es");
  await page.goBack();
  await settled(page, target);
  await page.waitForTimeout(300);
  expect(wrongFrames(await framesOf(page), target)).toEqual([]);
});

test("the central verse fill survives a reload on its passage", async ({ page }) => {
  await page.goto("/es/doctrinas/bautismo/catolica/pasajes#john-3-3-john-3-8");
  await expect(page.locator("p.verse-focus")).toHaveCount(1);
  await page.reload();
  await expect(page.locator("p.verse-focus")).toHaveCount(1);
  await expect(page.locator("p.verse-focus .verse-numeral")).toHaveText("5");
});

test("if hydration never happens the passage comes back by itself", async ({ page }) => {
  test.setTimeout(60000);
  const target = set.later[0]!;
  await page.route(/\/_next\/static\/.*\.js/, (request) => request.abort());
  await page.goto(`${route}${target.hash}`);
  const heading = page.locator(".passages-grid h2");
  await expect(heading).toBeHidden();
  await expect(page.locator("html")).toHaveAttribute("data-passage-pending", "");
  await expect(heading).toBeVisible({ timeout: 10000 });
  await expect(page.locator("html")).not.toHaveAttribute("data-passage-pending", "");
});

test("the marked page keeps the first passage's height, so nothing jumps while it waits", async ({ page }) => {
  const target = set.later[0]!;
  await page.route(/\/_next\/static\/.*\.js/, (request) => request.abort());
  const heightOf = () => page.locator(".passages-grid").evaluate((grid) => grid.getBoundingClientRect().height);
  await page.goto(route);
  const plain = await heightOf();
  await page.goto("about:blank");
  await page.goto(`${route}${target.hash}`);
  await expect(page.locator("html")).toHaveAttribute("data-passage-pending", "");
  expect(await heightOf()).toBe(plain);
});

test("a reload keeps the reading position inside the passage", async ({ page }) => {
  const target = set.later[2]!;
  await page.goto(`${route}${target.hash}`);
  await settled(page, target);
  await page.evaluate(() => scrollTo(0, 600));
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(600);
  await page.reload();
  await settled(page, target);
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(500);
  expect(await page.evaluate(() => document.documentElement.hasAttribute("data-passage-pending"))).toBe(false);
});
