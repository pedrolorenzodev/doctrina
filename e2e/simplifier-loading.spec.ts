import { expect, test, type Page, type Route } from "@playwright/test";
import { storeSimplifyOn, traditionPath } from "./helpers";

type Frame = {
  t: number;
  dashed: boolean;
  angle: number;
  width: number;
  height: number;
  cx: number;
  cy: number;
  busy: string | null;
  panel: boolean;
  borderColor: string;
  para: number;
  below: number;
  scroll: number;
  status: string;
};

const simplifyRoute = "**/api/ai/simplify**";
const ring = "[data-simplifier-mark]";
const container = "[data-simplifier] >> nth=0";

test.beforeEach(async ({ context }) => {
  await storeSimplifyOn(context);
});

async function answerAfter(page: Page, ms: number) {
  await page.route(simplifyRoute, async (route: Route) => {
    if (route.request().method() !== "POST") return route.fulfill({ status: 204 });
    const response = await route.fetch();
    await new Promise((resolve) => setTimeout(resolve, ms));
    return route.fulfill({ response }).catch(() => undefined);
  });
}

async function answerFast(page: Page, ms: number) {
  const reply = await page.request.post("/api/ai/simplify", {
    data: {
      address: { kind: "statement", doctrine: "eucharist", tradition: "catholic", id: "definition" },
      locale: "es",
    },
  });
  const json = await reply.json();
  await page.route(simplifyRoute, async (route: Route) => {
    if (route.request().method() !== "POST") return route.fulfill({ status: 204 });
    await new Promise((resolve) => setTimeout(resolve, ms));
    return route.fulfill({ json }).catch(() => undefined);
  });
}

async function openPage(page: Page, width = 1440, height = 900) {
  await page.setViewportSize({ width, height });
  await page.goto(traditionPath, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  test.skip((await page.locator("[data-simplifier]").count()) === 0, "the simplifier switch is off in this build");
  await page.locator(container).evaluate((element) => {
    window.scrollTo(0, element.getBoundingClientRect().top + scrollY - 200);
  });
  await page.waitForTimeout(500);
  await page.mouse.move(2, 2);
}

function pressAndSample(page: Page, ms: number, cancelAt?: number): Promise<Frame[]> {
  return page.evaluate(
    ([duration, cancel]) =>
      new Promise<Frame[]>((resolve) => {
        const root = document.querySelector("[data-simplifier]") as HTMLElement;
        const button = root.querySelector<HTMLButtonElement>("[data-simplifier-mark]")!;
        const dot = button.querySelector("i")!;
        const frames: Frame[] = [];
        const start = performance.now();
        let cancelled = false;
        button.click();
        const tick = () => {
          const t = performance.now() - start;
          if (typeof cancel === "number" && !cancelled && t >= cancel) {
            cancelled = true;
            button.click();
          }
          const style = getComputedStyle(dot);
          const matrix = new DOMMatrix(style.transform === "none" ? undefined : style.transform);
          const box = dot.getBoundingClientRect();
          frames.push({
            t,
            dashed: style.borderTopStyle === "dashed",
            angle: (Math.atan2(matrix.b, matrix.a) * 180) / Math.PI,
            width: dot.offsetWidth,
            height: dot.offsetHeight,
            cx: box.left + box.width / 2,
            cy: box.top + box.height / 2,
            busy: button.getAttribute("aria-busy"),
            panel: root.querySelector("[data-simplifier-panel]") !== null,
            borderColor: style.borderTopColor,
            para: (root.firstElementChild!.firstElementChild as HTMLElement).getBoundingClientRect().top,
            below: (
              (root.nextElementSibling ?? root.parentElement?.nextElementSibling) as HTMLElement
            ).getBoundingClientRect().top,
            scroll: scrollY,
            status: root.querySelector("[role=status]")?.textContent ?? "",
          });
          if (t < (duration as number)) requestAnimationFrame(tick);
          else resolve(frames);
        };
        tick();
      }),
    [ms, cancelAt] as const,
  );
}

const onset = (frames: Frame[]) => frames.find((frame) => frame.dashed)?.t ?? null;

function unwrapped(frames: Frame[]) {
  let total = 0;
  for (let at = 1; at < frames.length; at += 1) {
    let step = frames[at]!.angle - frames[at - 1]!.angle;
    if (step < -180) step += 360;
    if (step > 180) step -= 360;
    total += step;
  }
  return total;
}

const tokenColor = (page: Page, token: string) =>
  page.evaluate((name) => {
    const probe = document.createElement("span");
    probe.style.color = `var(${name})`;
    document.body.append(probe);
    const color = getComputedStyle(probe).color;
    probe.remove();
    return color;
  }, token);

for (const setup of [
  { name: "desktop light", width: 1440, height: 900, scheme: "light" as const },
  { name: "390 dark", width: 390, height: 800, scheme: "dark" as const },
  { name: "360 light", width: 360, height: 740, scheme: "light" as const },
]) {
  test(`${setup.name}: the dashed ring turns from 200 ms, never before; same size, same place, nothing moves`, async ({
    browser,
  }) => {
    const context = await browser.newContext({ colorScheme: setup.scheme });
    await storeSimplifyOn(context);
    const page = await context.newPage();
    await answerAfter(page, 1800);
    await openPage(page, setup.width, setup.height);
    const frames = await pressAndSample(page, 1500);
    const first = onset(frames);
    expect(first).not.toBeNull();
    expect(first!).toBeGreaterThanOrEqual(199);
    expect(first!).toBeLessThan(260);
    for (const frame of frames.filter((candidate) => candidate.t < 195)) expect(frame.dashed).toBe(false);
    const turning = frames.filter((frame) => frame.dashed);
    expect(turning.length).toBeGreaterThan(30);
    const distinct = new Set(turning.map((frame) => Math.round(frame.angle))).size;
    expect(distinct).toBeGreaterThan(20);
    const degrees = unwrapped(turning);
    const seconds = (turning.at(-1)!.t - turning[0]!.t) / 1000;
    expect(degrees / seconds).toBeGreaterThan(130);
    expect(degrees / seconds).toBeLessThan(170);
    const ink = await tokenColor(page, "--color-ink");
    for (const frame of turning) expect(frame.borderColor).toBe(ink);
    const start = frames[0]!;
    for (const frame of frames) {
      expect(frame.width).toBe(14);
      expect(frame.height).toBe(14);
      expect(Math.abs(frame.cx - start.cx)).toBeLessThan(0.5);
      expect(Math.abs(frame.cy - start.cy)).toBeLessThan(0.5);
      expect(Math.abs(frame.para - start.para)).toBeLessThan(1);
      expect(Math.abs(frame.below - start.below)).toBeLessThan(1);
      expect(frame.scroll).toBe(start.scroll);
      expect(frame.panel).toBe(false);
      if (frame.t > 40) expect(frame.busy).toBe("true");
    }
    expect(frames.find((frame) => frame.t > 40)!.status).toBe("Simplificando…");
    await context.close();
  });
}

test("a fast answer (before 200 ms) shows no loader at all, and the panel opens once", async ({ page }) => {
  await answerFast(page, 60);
  await openPage(page);
  const frames = await pressAndSample(page, 700);
  expect(frames.some((frame) => frame.dashed)).toBe(false);
  expect(frames.some((frame) => Math.abs(frame.angle) > 0.5)).toBe(false);
  expect(frames.at(-1)!.panel).toBe(true);
  expect(frames.at(-1)!.busy).toBe("false");
  const opened = frames.find((frame) => frame.panel)!;
  expect(opened.t).toBeLessThan(250);
  expect(frames.find((frame) => frame.t > 10 && frame.busy === "true")).toBeDefined();
});

test("once shown the loader stays at least 400 ms, and the panel waits for it", async ({ page }) => {
  await answerFast(page, 260);
  await openPage(page);
  const frames = await pressAndSample(page, 1400);
  const first = onset(frames)!;
  expect(first).toBeGreaterThanOrEqual(199);
  const last = frames.filter((frame) => frame.dashed).at(-1)!;
  expect(last.t - first).toBeGreaterThanOrEqual(380);
  const opened = frames.find((frame) => frame.panel)!;
  expect(opened.t).toBeGreaterThanOrEqual(first + 395);
  expect(opened.busy).toBe("false");
  expect(frames.filter((frame) => frame.t > 40 && frame.t < first + 380).every((frame) => frame.busy === "true")).toBe(
    true,
  );
});

test("a second press while it turns cancels: the ring returns to rest, no panel", async ({ page }) => {
  await answerAfter(page, 1800);
  await openPage(page);
  const frames = await pressAndSample(page, 900, 500);
  const after = frames.filter((frame) => frame.t > 560);
  expect(after.length).toBeGreaterThan(10);
  for (const frame of after) {
    expect(frame.dashed).toBe(false);
    expect(frame.busy).toBe("false");
    expect(frame.panel).toBe(false);
  }
  await page.waitForTimeout(1600);
  await expect(page.locator(container).locator("[data-simplifier-panel]")).toHaveCount(0);
});

test("Esc while it turns cancels the same way", async ({ page }) => {
  await answerAfter(page, 1800);
  await openPage(page);
  await page.locator(`${container} >> ${ring}`).click();
  await expect(page.locator(`${container} >> ${ring}`)).toHaveAttribute("aria-busy", "true");
  await page.waitForTimeout(450);
  expect(
    await page.locator(`${container} >> ${ring} i`).evaluate((node) => getComputedStyle(node).borderTopStyle),
  ).toBe("dashed");
  await page.keyboard.press("Escape");
  await expect(page.locator(`${container} >> ${ring}`)).toHaveAttribute("aria-busy", "false");
  expect(
    await page.locator(`${container} >> ${ring} i`).evaluate((node) => getComputedStyle(node).borderTopStyle),
  ).toBe("solid");
  await page.waitForTimeout(1800);
  await expect(page.locator(container).locator("[data-simplifier-panel]")).toHaveCount(0);
});

test("reduced motion: the dashed ring appears at 200 ms and does not turn", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  await storeSimplifyOn(context);
  const page = await context.newPage();
  await answerAfter(page, 1800);
  await openPage(page);
  const frames = await pressAndSample(page, 1200);
  const first = onset(frames);
  expect(first).not.toBeNull();
  expect(first!).toBeGreaterThanOrEqual(199);
  const turning = frames.filter((frame) => frame.dashed);
  expect(turning.length).toBeGreaterThan(30);
  for (const frame of turning) expect(Math.abs(frame.angle)).toBeLessThan(0.01);
  await context.close();
});

test("the ring at rest, hover and open keep their look", async ({ page }) => {
  await answerFast(page, 50);
  await openPage(page);
  const dot = page.locator(`${container} >> ${ring} i`);
  const rest = await dot.evaluate((node) => {
    const style = getComputedStyle(node);
    return {
      style: style.borderTopStyle,
      color: style.borderTopColor,
      background: style.backgroundColor,
    };
  });
  expect(rest.style).toBe("solid");
  expect(rest.color).toBe(await tokenColor(page, "--color-ink-3"));
  await page.locator(`${container} >> ${ring}`).click();
  await expect(page.locator(container).locator("[data-simplifier-panel]")).toHaveCount(1);
  await page.mouse.move(2, 2);
  await page.waitForTimeout(300);
  const open = await dot.evaluate((node) => {
    const style = getComputedStyle(node);
    return { style: style.borderTopStyle, background: style.backgroundColor, transform: style.transform };
  });
  expect(open.style).toBe("solid");
  expect(open.background).not.toBe(rest.background);
  expect(open.transform).toBe("none");
});
