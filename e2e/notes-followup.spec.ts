import { expect, test, type Page, type Route } from "@playwright/test";

const john = "/es/biblia/juan/6";
const drawer = "aside[data-ask-drawer]";
const field = "[data-ask-content] textarea";
const answers = "[data-ask-answer]";
const line = "[data-ask-note-line]";
const chip = "[data-ask-note-chip]";
const question = "¿Qué dicen los protestantes sobre la Eucaristía en Juan 6?";

type Wire = Record<string, unknown>;

const questionNote = {
  kind: "question",
  before: "Vi tu nota de ",
  ref: "Juan 6:53",
  after: ", «¿Qué significan “carne” y “sangre” acá?». ¿Querés que lo analicemos?",
  suggestion: "Tu nota de Juan 6:53: ¿qué significan “carne” y “sangre” acá?",
  question: "Juan 6:53, tu nota: ¿qué significan “carne” y “sangre” acá?",
  noteText: "¿Qué significan “carne” y “sangre” acá?",
};

const claimNote = {
  kind: "claim",
  before: "Vi tu nota de ",
  ref: "Juan 6:63",
  after:
    ", «Para mí esto es simbólico: Jesús no habla de comer su cuerpo de verdad.». ¿Querés ver qué dicen las tradiciones sobre lo que escribiste?",
  suggestion: "Tu nota de Juan 6:63: ¿qué dicen las tradiciones sobre lo que escribiste?",
  question: "Juan 6:63, tu nota: ¿qué dicen las tradiciones sobre lo que escribiste?",
  noteText: "Para mí esto es simbólico: Jesús no habla de comer su cuerpo de verdad.",
};

const wire = (extra: Wire = {}): Wire => ({
  answerId: `a-${Math.random().toString(36).slice(2, 8)}`,
  kind: "evidence",
  question,
  scope: "Buscó en los documentos de 3 tradiciones sobre la Eucaristía.",
  blocks: [{ quote: "q1" }],
  prose: "Los luteranos dicen que el cuerpo y la sangre están «verdadera y sustancialmente presentes» {q:q1}.",
  quotes: {
    q1: {
      id: "q1",
      key: "tradition:eucharist:lutheran:test",
      who: "Apología de la Confesión de Augsburgo",
      work: "Apología de la Confesión de Augsburgo, art. X",
      text: "Confesamos que creemos que en la Cena del Señor el cuerpo y la sangre de Cristo están verdadera y sustancialmente presentes.",
      edition: "Doctrina, páginas de tradición.",
      translatedByAi: false,
      speaker: "lutheran",
    },
  },
  consulted: ["q1"],
  followups: ["¿Qué dicen los católicos?", "¿Y los ortodoxos?"],
  more: false,
  cached: false,
  promptVersion: "test",
  ...extra,
});

const stream = (route: Route, answer: Wire) =>
  route.fulfill({
    status: 200,
    headers: { "content-type": "text/event-stream" },
    body: `event: phase\ndata: {"phase":"plan"}\n\nevent: answer\ndata: ${JSON.stringify(answer)}\n\n`,
  });

const seedNote = (page: Page, text: string, verse: number) =>
  page.addInitScript(
    ([body, at]) => {
      const now = Date.now();
      localStorage.setItem(
        "doctrina-notes",
        JSON.stringify([
          {
            id: "n-test",
            scope: "unit",
            translationId: "rv1909",
            book: "John",
            chapter: 6,
            verse: at,
            verseTo: null,
            from: null,
            to: null,
            quote: null,
            text: body,
            createdAt: now,
            updatedAt: now,
          },
        ]),
      );
    },
    [text, verse] as const,
  );

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

const ask = async (page: Page, typed = question) => {
  await page.locator(field).fill(typed);
  await page.keyboard.press("Enter");
};

test.describe("ask drawer: the follow-up on a reader's note", () => {
  test.skip(process.env.NEXT_PUBLIC_AI_CHAT !== "real", "needs a build with NEXT_PUBLIC_AI_CHAT=real");

  test("a related question note: option A's closing sentence and option B's suggestion, first among the chips", async ({
    page,
  }) => {
    const sent: string[] = [];
    await page.route("**/api/ai/ask", (route) => {
      sent.push((route.request().postDataJSON() as { question: string }).question);
      return stream(
        route,
        sent.length === 1 ? wire({ note: questionNote }) : wire({ question: questionNote.question }),
      );
    });
    await openDrawer(page);
    await ask(page);
    await expect(page.locator(line)).toHaveText(
      "Vi tu nota de Juan 6:53, «¿Qué significan “carne” y “sangre” acá?». ¿Querés que lo analicemos?",
      { timeout: 15000 },
    );
    await expect(page.locator(`${line} [data-ask-note-cite]`)).toHaveText("Juan 6:53");
    const firstChip = page.locator(`${answers} button[data-bare-focus]`).filter({ hasText: "Tu nota de" }).first();
    await expect(firstChip).toHaveText(questionNote.suggestion);
    const chipTexts = await page.locator(chip).locator("xpath=..").locator("button").allTextContents();
    expect(chipTexts[0]).toBe(questionNote.suggestion);
    expect(chipTexts.slice(1, 3)).toEqual(["¿Qué dicen los católicos?", "¿Y los ortodoxos?"]);
    const paragraphs = page.locator(`${answers} p`);
    const texts = await paragraphs.allTextContents();
    const proseAt = texts.findIndex((text) => text.startsWith("Los luteranos"));
    const lineAt = texts.findIndex((text) => text.startsWith("Vi tu nota"));
    expect(lineAt).toBe(proseAt + 1);
    await page.locator(chip).click();
    await expect.poll(() => sent.length).toBe(2);
    expect(sent[1]).toBe(questionNote.question);
    await expect(page.locator(answers)).toHaveCount(2, { timeout: 15000 });
  });

  test("a doctrinal claim gets the invitation to see the traditions, never a correction", async ({ page }) => {
    await page.route("**/api/ai/ask", (route) => stream(route, wire({ note: claimNote })));
    await openDrawer(page);
    await ask(page);
    await expect(page.locator(line)).toContainText("¿Querés ver qué dicen las tradiciones sobre lo que escribiste?", {
      timeout: 15000,
    });
    await expect(page.locator(chip)).toHaveText(claimNote.suggestion);
  });

  test("with no related note nothing is shown and the answer ends as before", async ({ page }) => {
    await page.route("**/api/ai/ask", (route) => stream(route, wire()));
    await openDrawer(page);
    await ask(page);
    await expect(page.locator(`${answers} button`, { hasText: "¿Qué dicen los católicos?" })).toBeVisible({
      timeout: 15000,
    });
    await expect(page.locator(line)).toHaveCount(0);
    await expect(page.locator(chip)).toHaveCount(0);
  });

  test("the «Juan 6:53» citation opens the reader's note in the text", async ({ page }) => {
    await seedNote(page, questionNote.noteText, 53);
    await page.route("**/api/ai/ask", (route) => stream(route, wire({ note: questionNote })));
    await openDrawer(page);
    await ask(page);
    await page.locator(`${line} [data-ask-note-cite]`).click({ timeout: 15000 });
    await expect
      .poll(() =>
        page
          .locator("textarea")
          .evaluateAll(
            (areas, text) => areas.some((area) => (area as HTMLTextAreaElement).value === text),
            questionNote.noteText,
          ),
      )
      .toBe(true);
  });

  test("the closing sentence enters word by word, measured per frame", async ({ page }) => {
    await page.route("**/api/ai/ask", (route) => stream(route, wire({ note: questionNote })));
    await openDrawer(page);
    await page.evaluate((selector) => {
      const counts: number[] = [];
      (window as unknown as { noteCounts: number[] }).noteCounts = counts;
      const sample = () => {
        counts.push(document.querySelector(selector)?.children.length ?? -1);
        if (counts.length < 900) requestAnimationFrame(sample);
      };
      requestAnimationFrame(sample);
    }, line);
    await ask(page);
    await expect(page.locator(line)).toContainText("analicemos", { timeout: 15000 });
    const counts = await page.evaluate(() => (window as unknown as { noteCounts: number[] }).noteCounts);
    const shown = counts.filter((count) => count >= 0);
    const steps = new Set(shown);
    expect(steps.size).toBeGreaterThan(5);
    for (let index = 1; index < shown.length; index += 1)
      expect(shown[index]).toBeGreaterThanOrEqual(shown[index - 1]!);
  });

  test("a note already offered in the conversation is not offered again", async ({ page }) => {
    await page.route("**/api/ai/ask", (route) => stream(route, wire({ note: questionNote })));
    await openDrawer(page);
    await ask(page);
    await expect(page.locator(line)).toHaveCount(1, { timeout: 15000 });
    await expect(page.locator(`${answers} button`, { hasText: "¿Qué dicen los católicos?" })).toBeVisible({
      timeout: 15000,
    });
    await ask(page, "¿Y Agustín?");
    await expect(page.locator(answers)).toHaveCount(2, { timeout: 15000 });
    await expect(
      page.locator(`${answers}`).nth(1).locator("button", { hasText: "¿Qué dicen los católicos?" }),
    ).toBeVisible({
      timeout: 15000,
    });
    await expect(page.locator(line)).toHaveCount(1);
    await expect(page.locator(chip)).toHaveCount(1);
  });
  test("notes written in another edition of the open chapter travel with the question", async ({ page }) => {
    await page.addInitScript(() => {
      const now = Date.now();
      const note = (id: string, verse: number, text: string) => ({
        id,
        scope: "unit",
        translationId: "bsb",
        book: "John",
        chapter: 6,
        verse,
        verseTo: null,
        from: null,
        to: null,
        quote: null,
        text,
        createdAt: now,
        updatedAt: now,
      });
      localStorage.setItem(
        "doctrina-notes",
        JSON.stringify([
          note("n1", 53, 'What did Jesus meant by His "FLESH" and "BLOOD"'),
          note("n2", 35, "Bread of life: compare with the manna in Exodus 16"),
        ]),
      );
      localStorage.setItem("doctrina-translation", "bsb");
    });
    const sent: { notes: { text: string; ref: string | null }[] }[] = [];
    await page.route("**/api/ai/ask", (route) => {
      sent.push(route.request().postDataJSON() as { notes: { text: string; ref: string | null }[] });
      return stream(route, wire());
    });
    await openDrawer(page);
    await ask(page, "Hey, que creian los primeros padres, los mas tempranos, acerca de la eucaristia como simbolo?");
    await expect.poll(() => sent.length).toBe(1);
    expect(sent[0]?.notes).toContainEqual({
      text: 'What did Jesus meant by His "FLESH" and "BLOOD"',
      ref: "Juan 6:53",
    });
    expect(sent[0]?.notes).toHaveLength(2);
  });
});
