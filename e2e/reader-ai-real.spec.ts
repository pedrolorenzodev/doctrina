import { expect, test, type Page, type Route } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const john = "/es/biblia/juan/6";
const drawer = "aside[data-ask-drawer]";
const field = "[data-ask-content] textarea";
const answers = "[data-ask-answer]";
const unscripted = "¿Qué opinan los vecinos del barrio?";

type Wire = Record<string, unknown>;

const quote = (id: string, extra: Wire = {}) => ({
  id,
  key: `fathers:test:${id}`,
  who: "Ignacio de Antioquía",
  work: `A los esmirniotas ${id}`,
  text: `Texto literal de la cita ${id}`,
  edition: "J. B. Lightfoot, 1889. Dominio público.",
  translatedByAi: false,
  speaker: "shared",
  father: { workId: "ignatius-smyrnaeans", at: "6.2", anchor: "6.2", original: "" },
  ...extra,
});

const wireAnswer = (count: number, extra: Wire = {}): Wire => {
  const ids = Array.from({ length: count }, (_, index) => `q${index + 1}`);
  return {
    answerId: `a-${Math.random().toString(36).slice(2, 8)}`,
    kind: "evidence",
    question: unscripted,
    scope: "Buscó en la Biblia (RV1909) y en 3 obras de los Padres.",
    blocks: ids.map((id) => ({ quote: id })),
    prose: `Ignacio habla de esto {q:${ids[0]}}. Más adelante lo repite {q:${ids[count - 1]}}.`,
    quotes: Object.fromEntries(ids.map((id) => [id, quote(id)])),
    consulted: ids,
    followups: ["¿Y los ortodoxos?", "¿Qué dice Agustín?"],
    more: true,
    cached: false,
    promptVersion: "test",
    ...extra,
  };
};

const sse = (answer: Wire) =>
  `event: phase\ndata: {"phase":"plan"}\n\nevent: phase\ndata: {"phase":"write"}\n\nevent: answer\ndata: ${JSON.stringify(answer)}\n\n`;

const stream = (route: Route, answer: Wire, delayMs = 0) =>
  new Promise<void>((resolve) =>
    setTimeout(() => {
      void route
        .fulfill({ status: 200, headers: { "content-type": "text/event-stream" }, body: sse(answer) })
        .then(resolve, resolve);
    }, delayMs),
  );

const failure = (route: Route, status: number, code: string, message: string, retry: boolean) =>
  route.fulfill({ status, contentType: "application/json", body: JSON.stringify({ code, message, retry }) });

const openDrawer = async (page: Page, width = 1440, height = 900) => {
  await page.setViewportSize({ width, height });
  await page.goto(john);
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => {
    [...document.querySelectorAll<HTMLElement>("[data-ask-button]")].find((node) => node.offsetParent)?.click();
  });
  await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(350);
};

const ask = async (page: Page, question = unscripted) => {
  await page.locator(field).fill(question);
  await page.keyboard.press("Enter");
};

test.describe("ask drawer: real answers", () => {
  test.skip(process.env.NEXT_PUBLIC_AI_CHAT !== "real", "needs a build with NEXT_PUBLIC_AI_CHAT=real");
  test("a typed question shows the live phases with seconds, then quotes, prose citations and the privacy line", async ({
    page,
  }) => {
    const bodies: Wire[] = [];
    page.on("request", (request) => {
      if (request.url().endsWith("/api/ai/ask")) bodies.push(request.postDataJSON() as Wire);
    });
    await page.route("**/api/ai/ask", (route) => stream(route, wireAnswer(5), 1500));
    await openDrawer(page);
    await page.evaluate(() => {
      const seen = new Set<string>();
      (window as unknown as { seenStatus: Set<string> }).seenStatus = seen;
      new MutationObserver(() => {
        document.querySelectorAll("[data-ask-status]").forEach((node) => seen.add(node.textContent ?? ""));
      }).observe(document.body, { subtree: true, childList: true, characterData: true });
    });
    await ask(page);
    await expect(page.locator("[data-ask-status]").first()).toContainText("Consultó 5 textos", { timeout: 8000 });
    const seen = await page.evaluate(() => [...(window as unknown as { seenStatus: Set<string> }).seenStatus]);
    expect(seen.some((text) => text.includes("Buscando en los Padres"))).toBe(true);
    expect(seen.some((text) => /\d+ s$/.test(text))).toBe(true);
    await expect(page.locator("[data-ask-meta]")).toContainText(
      "Generada por IA. Buscó en la Biblia (RV1909) y en 3 obras de los Padres.",
      { timeout: 6000 },
    );
    await expect(page.locator(`${answers} blockquote`)).toHaveCount(5, { timeout: 6000 });
    await expect(page.locator(`${answers} p [data-ask-cite]`)).toHaveCount(2, { timeout: 12000 });
    await expect(page.locator("[data-ask-status]")).toContainText("Consultó 5 textos");
    await expect(page.locator("[data-ask-privacy]")).toContainText("No guardamos tu IP.", { timeout: 6000 });
    expect(bodies[0]).toMatchObject({ locale: "es", scope: "all", turn: 1, notes: [] });
    expect(bodies[0]!.here).toMatchObject({ kind: "bible", book: "John", chapter: 6 });
  });

  test("a prose citation opens the citation window with «Abrir la fuente completa» to the work", async ({ page }) => {
    await page.route("**/api/ai/ask", (route) => stream(route, wireAnswer(2)));
    await openDrawer(page);
    await ask(page);
    const cite = page.locator(`${answers} p [data-ask-cite]`).first();
    await expect(cite).toBeVisible({ timeout: 9000 });
    await cite.click();
    const window = page.locator('[role=dialog][aria-labelledby="citation-window-kind"]');
    await expect(window).toBeVisible();
    await expect(window).toContainText("Texto literal de la cita q1");
    const link = window.getByRole("link", { name: "Abrir la fuente completa" });
    await expect(link).toHaveAttribute("href", /ignatius-smyrnaeans.*#d-6\.2$/);
  });

  test("suggestion chips and routed questions never call the route", async ({ page }) => {
    let calls = 0;
    await page.route("**/api/ai/ask", (route) => {
      calls += 1;
      return stream(route, wireAnswer(1));
    });
    await openDrawer(page);
    await page.locator("[data-ask-suggestions] button").nth(1).click();
    await expect(page.locator("[data-ask-meta]")).toBeVisible({ timeout: 6000 });
    await page.waitForTimeout(500);
    expect(calls).toBe(0);
  });

  test("follow-up chips ask again, and «Más textos sobre esto» appends blocks from /ask/more", async ({ page }) => {
    const questions: string[] = [];
    const offsets: number[] = [];
    await page.route("**/api/ai/ask", (route) => {
      questions.push((route.request().postDataJSON() as { question: string }).question);
      return stream(route, wireAnswer(2));
    });
    await page.route("**/api/ai/ask/more", (route) => {
      offsets.push((route.request().postDataJSON() as { offset: number }).offset);
      return route.fulfill({
        contentType: "application/json",
        body: JSON.stringify({
          blocks: [{ quote: "m1" }, { quote: "m2" }],
          quotes: { m1: quote("m1"), m2: quote("m2") },
          consulted: ["m1", "m2"],
          more: false,
        }),
      });
    });
    await openDrawer(page);
    await ask(page);
    const chips = page.locator(`${answers} button`, { hasText: "Más textos sobre esto" });
    await expect(chips).toBeVisible({ timeout: 12000 });
    await chips.click();
    await expect(page.locator(`${answers}`).nth(1).locator("blockquote")).toHaveCount(2, { timeout: 6000 });
    await expect(page.locator(`${answers}`).nth(1)).toContainText("Más pasajes de la misma búsqueda");
    expect(offsets).toEqual([0]);
    await expect(page.locator(`${answers}`).nth(1).locator("button", { hasText: "Más textos" })).toHaveCount(0);
    await page.locator(`${answers}`).first().locator("button", { hasText: "¿Y los ortodoxos?" }).click();
    await expect.poll(() => questions.length, { timeout: 6000 }).toBe(2);
    expect(questions[1]).toBe("¿Y los ortodoxos?");
  });

  test("a budget error shows the message as plain text without a retry chip", async ({ page }) => {
    await page.route("**/api/ai/ask", (route) =>
      failure(
        route,
        503,
        "ai_budget_exhausted",
        "La IA está pausada por hoy porque se usó todo el presupuesto del día. Las preguntas sugeridas siguen funcionando.",
        false,
      ),
    );
    await openDrawer(page);
    await ask(page);
    await expect(page.locator(answers)).toContainText("La IA está pausada por hoy", { timeout: 6000 });
    await page.waitForTimeout(600);
    await expect(page.locator(`${answers} button`)).toHaveCount(0);
  });

  test("a retryable error offers «Reintentar», which asks the same question again", async ({ page }) => {
    let calls = 0;
    await page.route("**/api/ai/ask", (route) => {
      calls += 1;
      return calls === 1
        ? failure(
            route,
            503,
            "ai_provider_busy",
            "El servicio de IA está ocupado. Probá de nuevo en unos segundos.",
            true,
          )
        : stream(route, wireAnswer(2));
    });
    await openDrawer(page);
    await ask(page);
    const retry = page.locator(`${answers} button`, { hasText: "Reintentar" });
    await expect(retry).toBeVisible({ timeout: 6000 });
    await retry.click();
    await expect(page.locator(`${answers}`).nth(1).locator("blockquote")).toHaveCount(2, { timeout: 8000 });
    expect(calls).toBe(2);
  });

  test("«Detener» while waiting aborts the request and offers «Reintentar»", async ({ page }) => {
    await page.route("**/api/ai/ask", (route) => stream(route, wireAnswer(1), 6000));
    await openDrawer(page);
    await ask(page);
    await expect(page.locator("[data-ask-status]")).toBeVisible();
    await page.locator(`${drawer} button`, { hasText: "Detener" }).click();
    await expect(page.locator(answers)).toContainText("Detenida.", { timeout: 4000 });
    await expect(page.locator(`${answers} button`, { hasText: "Reintentar" })).toBeVisible({ timeout: 4000 });
  });

  test("notes travel only while «Tus notas y subrayados» is on", async ({ page }) => {
    const bodies: { notes: { text: string; ref: string | null }[] }[] = [];
    await page.route("**/api/ai/ask", (route) => {
      bodies.push(route.request().postDataJSON() as (typeof bodies)[number]);
      return stream(route, wireAnswer(1));
    });
    await page.addInitScript(() => {
      localStorage.setItem(
        "doctrina-notes",
        JSON.stringify([
          {
            id: "n1",
            scope: "unit",
            translationId: "rv1909",
            book: "John",
            chapter: 6,
            verse: 53,
            verseTo: 53,
            from: null,
            to: null,
            quote: null,
            text: "Comparar con los vecinos del barrio en 1 Corintios",
            createdAt: 1,
            updatedAt: 1,
          },
        ]),
      );
    });
    await openDrawer(page);
    await ask(page);
    await expect.poll(() => bodies.length, { timeout: 6000 }).toBe(1);
    expect(bodies[0]!.notes).toEqual([
      { text: "Comparar con los vecinos del barrio en 1 Corintios", ref: "Juan 6:53" },
    ]);
    await expect(page.locator("[data-ask-answer] button", { hasText: "Reintentar" })).toHaveCount(0);
    await page.locator("[data-ask-context] button").first().click();
    await page.waitForTimeout(350);
    await page.locator("[role=switch]").click();
    await page.locator("button", { hasText: "¿Qué dice Agustín?" }).click({ timeout: 12000 });
    await expect.poll(() => bodies.length, { timeout: 8000 }).toBe(2);
    expect(bodies[1]!.notes).toEqual([]);
  });

  test("an answer with 24 quotes reveals without overflow and finishes in a reasonable time", async ({ page }) => {
    await page.route("**/api/ai/ask", (route) => stream(route, wireAnswer(24)));
    await openDrawer(page, 390, 800);
    const started = Date.now();
    await ask(page);
    await expect(page.locator(`${answers} blockquote`)).toHaveCount(24, { timeout: 20000 });
    await expect(page.locator("[data-ask-actions]")).toBeVisible({ timeout: 20000 });
    const seconds = (Date.now() - started) / 1000;
    expect(seconds).toBeLessThan(20);
    expect(await horizontalOverflow(page)).toBe(0);
  });

  test("a saved live answer replays from «Preguntas anteriores» without a call", async ({ page }) => {
    let calls = 0;
    await page.route("**/api/ai/ask", (route) => {
      calls += 1;
      return stream(route, wireAnswer(2));
    });
    await openDrawer(page);
    await ask(page);
    await expect(page.locator(`${answers} blockquote`)).toHaveCount(2, { timeout: 12000 });
    await expect(page.locator("[data-ask-actions]")).toBeVisible({ timeout: 12000 });
    await page.locator('button[aria-label="Nueva conversación"]').click();
    await page.locator("[data-ask-history-button]").click();
    await page.locator("[data-ask-history] button", { hasText: unscripted }).first().click();
    await expect(page.locator(`${answers} blockquote`)).toHaveCount(2, { timeout: 4000 });
    expect(calls).toBe(1);
  });
});
