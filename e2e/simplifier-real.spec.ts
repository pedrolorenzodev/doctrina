import { expect, test, type Page, type Route } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

type Frame = { para: number; below: number; scroll: number; box: number; ring: string; busy: string | null };

const container = (index: number) => `[data-simplifier] >> nth=${index}`;
const mark = (page: Page, index: number) => page.locator("[data-simplifier-mark]").nth(index);
const panelOf = (page: Page, index: number) => page.locator(container(index)).locator("[data-simplifier-panel]");
const simplifyRoute = "**/api/ai/simplify**";
const noProbe = (route: Route) => route.fulfill({ status: 204 });
const delayMs = 1500;

async function openPage(page: Page, width = 1440, height = 900, path = traditionPath) {
  await page.setViewportSize({ width, height });
  await page.goto(path, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  test.skip((await page.locator("[data-simplifier-mark]").count()) === 0, "the simplifier switch is off in this build");
}

async function bringUp(page: Page, index: number) {
  await page.locator(container(index)).evaluate((element) => {
    window.scrollTo(0, element.getBoundingClientRect().top + scrollY - 200);
  });
  await page.waitForTimeout(500);
}

async function slowRoute(page: Page, ms: number, counter: { posts: number; gets: number }) {
  await page.route(simplifyRoute, async (route) => {
    if (route.request().method() !== "POST") {
      counter.gets += 1;
      await noProbe(route);
      return;
    }
    counter.posts += 1;
    const response = await route.fetch();
    await new Promise((resolve) => setTimeout(resolve, ms));
    await route.fulfill({ response }).catch(() => undefined);
  });
}

const failWith = (status: number, code: string, retry: boolean) => (route: Route) =>
  route.request().method() === "POST"
    ? route.fulfill({ status, contentType: "application/json", body: JSON.stringify({ code, message: "x", retry }) })
    : noProbe(route);

function track(page: Page, index: number, ms: number): Promise<Frame[]> {
  return page.evaluate(
    ([at, duration]) =>
      new Promise<Frame[]>((resolve) => {
        const frames: Frame[] = [];
        const start = performance.now();
        const root = document.querySelectorAll("[data-simplifier]")[at as number] as HTMLElement;
        const tick = () => {
          const box = root.querySelector<HTMLElement>("[data-simplifier-panel]");
          const ring = root.querySelector<HTMLElement>("[data-simplifier-mark]")!;
          frames.push({
            para: (root.firstElementChild!.firstElementChild as HTMLElement).getBoundingClientRect().top,
            below: (
              (root.nextElementSibling ?? root.parentElement?.nextElementSibling) as HTMLElement
            ).getBoundingClientRect().top,
            scroll: scrollY,
            box: box ? box.getBoundingClientRect().height : -1,
            ring: getComputedStyle(ring.querySelector("i")!).borderTopStyle,
            busy: ring.getAttribute("aria-busy"),
          });
          if (performance.now() - start < (duration as number)) requestAnimationFrame(tick);
          else resolve(frames);
        };
        tick();
      }),
    [index, ms] as const,
  );
}

test("pending: the ring takes the writing look, aria-busy, live region and tooltip; nothing moves; then the box opens once in step", async ({
  page,
}) => {
  const counter = { posts: 0, gets: 0 };
  await slowRoute(page, delayMs, counter);
  await openPage(page);
  await bringUp(page, 1);
  await page.locator(container(1)).hover();
  const sampling = track(page, 1, delayMs + 2600);
  await page.waitForTimeout(150);
  await mark(page, 1).click();
  await expect(mark(page, 1)).toHaveAttribute("aria-busy", "true");
  await expect(page.locator(container(1)).getByRole("status")).toHaveText("Simplificando…");
  await expect(page.locator(container(1)).locator("[data-simplifier-mark] + span")).toHaveText("Simplificando…");
  await expect(panelOf(page, 1)).toHaveCount(0);
  const frames = await sampling;
  const waiting = frames.filter((frame) => frame.busy === "true");
  expect(waiting.length).toBeGreaterThan(40);
  for (const frame of waiting) {
    expect(frame.box).toBe(-1);
    expect(frame.ring).toBe("dashed");
  }
  const first = frames[0]!;
  for (const frame of frames) {
    expect(Math.abs(frame.para - first.para)).toBeLessThan(0.5);
    expect(frame.scroll).toBe(first.scroll);
    expect(Math.abs(frame.below - Math.max(frame.box, 0) - first.below)).toBeLessThan(1);
  }
  const boxes = frames.map((frame) => Math.max(frame.box, 0));
  for (let at = 1; at < boxes.length; at += 1) expect(boxes[at]!).toBeGreaterThanOrEqual(boxes[at - 1]! - 0.5);
  expect(boxes.at(-1)!).toBeGreaterThan(50);
  expect(frames.at(-1)!.busy).toBe("false");
  expect(frames.at(-1)!.ring).toBe("solid");
  expect(counter.posts).toBe(1);
  await expect(mark(page, 1)).toHaveAttribute("aria-expanded", "true");
});

test("a second press while pending cancels the request and returns the ring to rest", async ({ page }) => {
  const counter = { posts: 0, gets: 0 };
  await slowRoute(page, delayMs, counter);
  await openPage(page);
  await bringUp(page, 1);
  await mark(page, 1).click();
  await expect(mark(page, 1)).toHaveAttribute("aria-busy", "true");
  await mark(page, 1).click();
  await expect(mark(page, 1)).toHaveAttribute("aria-busy", "false");
  await expect(mark(page, 1)).toHaveAttribute("aria-expanded", "false");
  await page.waitForTimeout(delayMs + 400);
  await expect(panelOf(page, 1)).toHaveCount(0);
  expect(counter.posts).toBe(1);
});

test("Escape while pending cancels too", async ({ page }) => {
  const counter = { posts: 0, gets: 0 };
  await slowRoute(page, delayMs, counter);
  await openPage(page);
  await bringUp(page, 1);
  await mark(page, 1).focus();
  await page.keyboard.press("Enter");
  await expect(mark(page, 1)).toHaveAttribute("aria-busy", "true");
  await page.keyboard.press("Escape");
  await expect(mark(page, 1)).toHaveAttribute("aria-busy", "false");
  await page.waitForTimeout(delayMs + 400);
  await expect(panelOf(page, 1)).toHaveCount(0);
});

const messages = [
  {
    status: 503,
    code: "ai_provider_down",
    retry: true,
    text: "El servicio de IA no responde. Probá de nuevo más tarde.",
  },
  {
    status: 503,
    code: "ai_provider_busy",
    retry: true,
    text: "El servicio de IA está ocupado. Probá de nuevo en unos segundos.",
  },
  { status: 429, code: "ai_daily_limit", retry: false, text: "Llegaste al límite de simplificaciones de hoy." },
  {
    status: 429,
    code: "ai_rate_limited",
    retry: true,
    text: "Pediste varias simplificaciones seguidas. Esperá un minuto.",
  },
  { status: 503, code: "ai_disabled", retry: false, text: "La simplificación está apagada por ahora." },
  { status: 503, code: "ai_budget_exhausted", retry: false, text: "La simplificación está pausada por hoy." },
  {
    status: 403,
    code: "ai_bot_check_failed",
    retry: false,
    text: "No pudimos comprobar que la pregunta viene de una persona. Recargá la página y probá de nuevo.",
  },
  {
    status: 422,
    code: "ai_simplify_failed",
    retry: true,
    text: "No se pudo simplificar este párrafo sin cambiar su sentido. El original está arriba.",
  },
];

for (const item of messages) {
  test(`message state ${item.code}: the box opens once with the message, «Ocultar»${item.retry ? " and «Reintentar»" : " only"}`, async ({
    page,
  }) => {
    await page.route(simplifyRoute, failWith(item.status, item.code, item.retry));
    await openPage(page);
    await bringUp(page, 1);
    await page.locator(container(1)).hover();
    const sampling = track(page, 1, 1200);
    await page.waitForTimeout(100);
    await mark(page, 1).click();
    const panel = panelOf(page, 1);
    await expect(panel.locator("[data-simplifier-message]")).toHaveText(item.text);
    const frames = await sampling;
    const boxes = frames.map((frame) => Math.max(frame.box, 0));
    for (let at = 1; at < boxes.length; at += 1) expect(boxes[at]!).toBeGreaterThanOrEqual(boxes[at - 1]! - 0.5);
    for (const frame of frames)
      expect(Math.abs(frame.below - Math.max(frame.box, 0) - frames[0]!.below)).toBeLessThan(1);
    await expect(panel.locator("[data-simplifier-hide]")).toBeVisible();
    await expect(panel.locator("[data-simplifier-retry]")).toHaveCount(item.retry ? 1 : 0);
    await expect(panel.getByRole("button", { name: "Copiar" })).toHaveCount(0);
    await expect(panel.locator("[data-simplifier-label]")).toHaveText("Simplificado por IA");
    const colors = await panel.evaluate((box) => [
      getComputedStyle(box.querySelector("[data-simplifier-message]")!).color,
      getComputedStyle(box.querySelector("[data-simplifier-label]")!).color,
    ]);
    expect(colors[0]).toBe(colors[1]);
    await expect(page.locator(container(1)).getByRole("status")).toHaveText(item.text);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
    await panel.locator("[data-simplifier-hide]").click();
    await expect(panel).toHaveCount(0);
    await expect(mark(page, 1)).toBeFocused();
  });
}

test("a network failure shows the «not responding» message and the next press asks again", async ({ page }) => {
  let failing = true;
  const counter = { posts: 0 };
  await page.route(simplifyRoute, (route) => {
    if (route.request().method() !== "POST") return noProbe(route);
    counter.posts += 1;
    return failing ? route.abort("failed") : route.continue();
  });
  await openPage(page);
  await bringUp(page, 1);
  await mark(page, 1).click();
  await expect(panelOf(page, 1).locator("[data-simplifier-message]")).toHaveText(
    "El servicio de IA no responde. Probá de nuevo más tarde.",
  );
  await panelOf(page, 1).locator("[data-simplifier-hide]").click();
  await expect(panelOf(page, 1)).toHaveCount(0);
  failing = false;
  await mark(page, 1).click();
  await expect(panelOf(page, 1).locator("[data-simplifier-stop], [data-simplifier-hide]").first()).toBeVisible();
  await expect(panelOf(page, 1).locator("[data-simplifier-message]")).toHaveCount(0);
  expect(counter.posts).toBe(2);
});

test("«Reintentar» asks again and the answer opens as the simplified text", async ({ page }) => {
  let failing = true;
  const counter = { posts: 0 };
  await page.route(simplifyRoute, (route) => {
    if (route.request().method() !== "POST") return noProbe(route);
    counter.posts += 1;
    return failing ? failChain(route) : route.continue();
  });
  await openPage(page);
  await bringUp(page, 1);
  await mark(page, 1).click();
  await expect(panelOf(page, 1).locator("[data-simplifier-retry]")).toBeVisible();
  failing = false;
  await panelOf(page, 1).locator("[data-simplifier-retry]").click();
  await expect(panelOf(page, 1).locator("[data-simplifier-message]")).toHaveCount(0, { timeout: 5000 });
  await expect(panelOf(page, 1).locator("[data-simplifier-stop], [data-simplifier-hide]").first()).toBeVisible();
  await expect(panelOf(page, 1).locator("[data-simplifier-retry]")).toHaveCount(0);
  expect(counter.posts).toBe(2);
});

const failChain = (route: Route) => failWith(503, "ai_provider_down", true)(route);

test("a request that never answers ends at 20 s with the timeout message", async ({ page }) => {
  await page.clock.install();
  await page.route(simplifyRoute, async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 60000));
    await route.abort().catch(() => undefined);
  });
  await openPage(page);
  await bringUp(page, 1);
  await mark(page, 1).click();
  await expect(mark(page, 1)).toHaveAttribute("aria-busy", "true");
  await page.clock.fastForward(19000);
  await expect(mark(page, 1)).toHaveAttribute("aria-busy", "true");
  await page.clock.fastForward(1500);
  await expect(panelOf(page, 1).locator("[data-simplifier-message]")).toHaveText(
    "La respuesta tardó demasiado. Probá de nuevo.",
  );
});

test("the status line says «Generado por IA», and «Revisado» for a reviewed result", async ({ page }) => {
  await page.route(simplifyRoute, async (route) => {
    if (route.request().method() !== "POST") return noProbe(route);
    const response = await route.fetch();
    const body = await response.json();
    return route.fulfill({ response, json: { ...body, status: "reviewed" } });
  });
  await openPage(page);
  await bringUp(page, 1);
  await mark(page, 1).click();
  await expect(panelOf(page, 1).locator("[data-simplifier-hide]")).toBeVisible({ timeout: 12000 });
  await expect(panelOf(page, 1)).toContainText("Revisado");
  await expect(panelOf(page, 1)).not.toContainText("Generado por IA");
});

test("the default status is «Generado por IA»", async ({ page }) => {
  await openPage(page);
  await bringUp(page, 1);
  await mark(page, 1).click();
  await expect(panelOf(page, 1).locator("[data-simplifier-hide]")).toBeVisible({ timeout: 12000 });
  await expect(panelOf(page, 1)).toContainText("Generado por IA");
  await expect(panelOf(page, 1)).not.toContainText("sin revisar");
  await expect(panelOf(page, 1)).not.toContainText("Texto de prueba");
});

test("both levels come in one response; switching and reopening make no new request", async ({ page }) => {
  const counter = { posts: 0, gets: 0 };
  await slowRoute(page, 0, counter);
  await openPage(page);
  await bringUp(page, 1);
  await mark(page, 1).click();
  await expect(panelOf(page, 1).locator("[data-simplifier-hide]")).toBeVisible({ timeout: 12000 });
  await page.getByRole("button", { name: "Muy simple" }).first().click();
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: "Más claro" }).first().click();
  await panelOf(page, 1).locator("[data-simplifier-hide]").click();
  await expect(panelOf(page, 1)).toHaveCount(0);
  await mark(page, 1).click();
  await expect(panelOf(page, 1)).toHaveCount(1);
  await expect(mark(page, 1)).toHaveAttribute("aria-busy", "false");
  expect(counter.posts).toBe(1);
});

test("hovering a ring probes the cache and a hit makes the press instant (no POST)", async ({ page }) => {
  const seen = { posts: 0, probes: [] as string[] };
  await page.route(simplifyRoute, async (route) => {
    const request = route.request();
    if (request.method() === "POST") {
      seen.posts += 1;
      return route.continue();
    }
    seen.probes.push(request.url());
    const post = await page.request.post(request.url().split("?")[0]!, {
      data: {
        address: JSON.parse(Buffer.from(new URL(request.url()).searchParams.get("address")!, "base64url").toString()),
        locale: "es",
      },
    });
    return route.fulfill({ response: post });
  });
  await openPage(page);
  await bringUp(page, 1);
  await page.locator(container(1)).hover();
  await mark(page, 1).hover();
  await expect.poll(() => seen.probes.length).toBe(1);
  expect(seen.probes[0]).toContain("cacheOnly=1");
  await page.waitForTimeout(300);
  await mark(page, 1).click();
  await expect(panelOf(page, 1)).toHaveCount(1);
  expect(seen.posts).toBe(0);
});

test("a 204 from the cache probe leaves the press to the normal request", async ({ page }) => {
  const seen = { posts: 0, probes: 0 };
  await page.route(simplifyRoute, (route) => {
    if (route.request().method() === "GET") {
      seen.probes += 1;
      return route.fulfill({ status: 204 });
    }
    seen.posts += 1;
    return route.continue();
  });
  await openPage(page);
  await bringUp(page, 1);
  await mark(page, 1).hover();
  await expect.poll(() => seen.probes).toBe(1);
  await mark(page, 1).click();
  await expect(panelOf(page, 1)).toHaveCount(1);
  expect(seen.posts).toBe(1);
});

test("the request carries the paragraph's address, not its text", async ({ page }) => {
  const bodies: unknown[] = [];
  await page.route(simplifyRoute, (route) => {
    if (route.request().method() !== "POST") return noProbe(route);
    bodies.push(route.request().postDataJSON());
    return route.continue();
  });
  await openPage(page);
  await bringUp(page, 0);
  await mark(page, 0).click();
  await expect(panelOf(page, 0)).toHaveCount(1);
  expect(bodies).toEqual([
    { address: { kind: "statement", doctrine: "eucharist", tradition: "catholic", id: "definition" }, locale: "es" },
  ]);
});

test("the Father's paragraph asks with a father address that names the edition", async ({ page }) => {
  const bodies: { address: Record<string, string>; locale: string }[] = [];
  await page.route(simplifyRoute, (route) => {
    if (route.request().method() !== "POST") return noProbe(route);
    bodies.push(route.request().postDataJSON());
    return route.continue();
  });
  await page.addInitScript(() => localStorage.setItem("doctrina-father-edition", "en"));
  await openPage(page, 1440, 900, "/es/historia/obras/ignatius-smyrnaeans");
  await bringUp(page, 0);
  await mark(page, 0).click();
  await expect(panelOf(page, 0).locator("[data-simplifier-text]")).toContainText(
    "Take note of those who hold strange teaching",
  );
  expect(bodies).toHaveLength(1);
  expect(bodies[0]!.address).toMatchObject({ kind: "father", work: "ignatius-smyrnaeans", locator: "6.2" });
  expect(bodies[0]!.address.edition).toBe("en");
});

test("reduced motion: the pending paragraph opens with every word and no streaming", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  const counter = { posts: 0, gets: 0 };
  await slowRoute(page, 400, counter);
  await openPage(page);
  await bringUp(page, 1);
  await mark(page, 1).click();
  await expect(mark(page, 1)).toHaveAttribute("aria-busy", "true");
  await expect(panelOf(page, 1)).toHaveCount(1);
  const counts = await panelOf(page, 1).evaluate((box) => {
    const words = [...box.querySelectorAll("[data-word]")];
    return {
      all: words.length,
      visible: words.filter((word) => getComputedStyle(word).visibility === "visible").length,
    };
  });
  expect(counts.visible).toBe(counts.all);
  await expect(panelOf(page, 1).locator("[data-simplifier-hide]")).toBeVisible();
  await context.close();
});

for (const width of [360, 390]) {
  test(`at ${width} px the pending ring and the message state cause no horizontal overflow and nothing moves`, async ({
    page,
  }) => {
    const counter = { posts: 0, gets: 0 };
    await slowRoute(page, 900, counter);
    await openPage(page, width, 800);
    await bringUp(page, 1);
    const sampling = track(page, 1, 900);
    await mark(page, 1).click();
    const frames = await sampling;
    for (const frame of frames) {
      expect(Math.abs(frame.para - frames[0]!.para)).toBeLessThan(0.5);
      expect(Math.abs(frame.below - Math.max(frame.box, 0) - frames[0]!.below)).toBeLessThan(1);
    }
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
    await page.unroute(simplifyRoute);
    await page.route(simplifyRoute, failWith(503, "ai_provider_down", true));
    await panelOf(page, 1).locator("[data-simplifier-hide]").click({ timeout: 12000 });
    await expect(panelOf(page, 1)).toHaveCount(0);
    await mark(page, 2).click();
    await expect(panelOf(page, 2).locator("[data-simplifier-message]")).toBeVisible();
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });
}
