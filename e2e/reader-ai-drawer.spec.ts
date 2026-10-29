import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const john = "/es/biblia/juan/6";
const drawer = "aside[data-ask-drawer]";
const stripAsk = "[data-reader-strip] [data-ask-button]";
const headerMenu = 'button[aria-controls="site-sidebar"]';

const clickQuietly = (page: Page, selector: string) =>
  page.evaluate((target) => {
    const element = [...document.querySelectorAll<HTMLElement>(target)].find((node) => node.offsetParent);
    element?.click();
  }, selector);

const openAt = async (page: Page, width: number, height = 900) => {
  await page.setViewportSize({ width, height });
  await page.goto(john);
  await page.evaluate(() => document.fonts.ready);
};

type Sample = { t: number; opacity: number; translate: string; column: number; tree: number };

const sampleOpening = (page: Page, ms: number) =>
  page.evaluate((duration) => {
    const element = document.querySelector<HTMLElement>("aside[data-ask-drawer]")!;
    const column = document.querySelector<HTMLElement>(".reader-column")!;
    let grid = document.getElementById("content")!.parentElement;
    while (grid && getComputedStyle(grid).display !== "grid") grid = grid.parentElement;
    return new Promise<Sample[]>((resolve) => {
      const frames: Sample[] = [];
      const start = performance.now();
      const step = () => {
        frames.push({
          t: performance.now() - start,
          opacity: Number(getComputedStyle(element).opacity),
          translate: getComputedStyle(element).translate,
          column: column.getBoundingClientRect().left,
          tree: grid ? parseFloat(getComputedStyle(grid).gridTemplateColumns) : 0,
        });
        if (performance.now() - start < duration) requestAnimationFrame(step);
        else resolve(frames);
      };
      requestAnimationFrame(step);
      document.querySelector<HTMLElement>("[data-reader-strip] [data-ask-button]")!.click();
    });
  }, ms);

test.describe("ask drawer: entry and motion", () => {
  test("the strip button opens a 380 px drawer at the left edge, under the top bar, and the text moves right", async ({
    page,
  }) => {
    await openAt(page, 1440);
    await expect(page.locator(stripAsk)).toHaveText("Preguntar");
    await expect(page.locator(drawer)).not.toBeVisible();
    await clickQuietly(page, stripAsk);
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    await expect(page.locator(stripAsk)).toHaveAttribute("aria-pressed", "true");
    await page.waitForTimeout(400);
    const box = await page.locator(drawer).boundingBox();
    expect(box).toEqual({ x: 0, y: 56, width: 380, height: 900 - 56 });
    await expect(page.locator(`${drawer} #ask-drawer-title`)).toHaveText("Preguntar");
    const padding = await page.locator("#content").evaluate((el) => getComputedStyle(el).paddingLeft);
    expect(padding).toBe("428px");
    const stripInner = await page
      .locator("[data-reader-strip] > div.texture-layer")
      .first()
      .evaluate((el) => el.getBoundingClientRect().left + parseFloat(getComputedStyle(el).paddingLeft));
    expect(stripInner).toBe(394);
    expect(await horizontalOverflow(page)).toBe(0);
  });

  test("opening folds the tree in the same motion: one monotonic travel of the text, 260 ms", async ({ page }) => {
    await openAt(page, 1440);
    await page.waitForTimeout(300);
    const frames = await sampleOpening(page, 450);
    const moving = frames.filter((frame) => frame.opacity > 0 && frame.opacity < 1);
    expect(moving.length).toBeGreaterThan(4);
    for (let i = 1; i < frames.length; i++) {
      expect(frames[i]!.column).toBeGreaterThanOrEqual(frames[i - 1]!.column - 0.5);
      expect(frames[i]!.tree).toBeLessThanOrEqual(frames[i - 1]!.tree + 0.5);
    }
    const last = frames[frames.length - 1]!;
    expect(last.tree).toBe(0);
    expect(last.opacity).toBe(1);
    const startedAt = frames.find((frame) => frame.tree < 272)!.t;
    const settledAt = frames.find((frame) => frame.tree === 0)!.t;
    expect(settledAt - startedAt).toBeLessThan(300);
  });

  test("closing brings the tree back and does not change the stored tree choice", async ({ page }) => {
    await openAt(page, 1440);
    const stored = await page.evaluate(() => localStorage.getItem("doctrina-tree"));
    await clickQuietly(page, stripAsk);
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    await expect(page.locator("html")).toHaveAttribute("data-tree", "closed");
    expect(await page.evaluate(() => localStorage.getItem("doctrina-tree"))).toBe(stored);
    await page.keyboard.press("Escape");
    await expect(page.locator(drawer)).not.toHaveAttribute("data-open");
    await expect(page.locator("html")).not.toHaveAttribute("data-tree", "closed");
    await expect(page.locator(stripAsk)).toHaveAttribute("aria-pressed", "false");
    await expect.poll(() => page.locator("#content").evaluate((el) => getComputedStyle(el).paddingLeft)).toBe("88px");
    expect(await page.evaluate(() => localStorage.getItem("doctrina-tree"))).toBe(stored);
  });

  test("a tree closed by the reader stays closed after the drawer closes", async ({ page }) => {
    await openAt(page, 1440);
    await clickQuietly(page, headerMenu);
    await expect(page.locator("html")).toHaveAttribute("data-tree", "closed");
    await clickQuietly(page, stripAsk);
    await clickQuietly(page, stripAsk);
    await expect(page.locator(drawer)).not.toHaveAttribute("data-open");
    await page.waitForTimeout(400);
    await expect(page.locator("html")).toHaveAttribute("data-tree", "closed");
  });

  test("showing the tree while the drawer is open swaps them back", async ({ page }) => {
    await openAt(page, 1440);
    await clickQuietly(page, stripAsk);
    await expect(page.locator("html")).toHaveAttribute("data-tree", "closed");
    await clickQuietly(page, headerMenu);
    await expect(page.locator(drawer)).not.toHaveAttribute("data-open");
    await expect(page.locator("html")).not.toHaveAttribute("data-tree", "closed");
    await expect.poll(() => page.locator("#content").evaluate((el) => getComputedStyle(el).paddingLeft)).toBe("88px");
  });

  test("the / key opens the drawer and puts the cursor in the field; the close button closes it", async ({ page }) => {
    await openAt(page, 1440);
    await page.locator("body").press("/");
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    await page.locator(`${drawer} button[aria-label="Cerrar"]`).click();
    await expect(page.locator(drawer)).not.toHaveAttribute("data-open");
  });

  test("under 1100 px it is a sheet from the bottom, 54 % high, with a grip and no tree change", async ({ page }) => {
    await openAt(page, 1024, 800);
    const tree = await page.locator("html").getAttribute("data-tree");
    await clickQuietly(page, stripAsk);
    await expect(page.locator(drawer)).toHaveAttribute("data-layout", "sheet");
    await page.waitForTimeout(400);
    const box = (await page.locator(drawer).boundingBox())!;
    expect(box.x).toBe(0);
    expect(box.width).toBe(1024);
    expect(Math.round(box.height)).toBe(Math.round(800 * 0.54));
    expect(Math.round(box.y + box.height)).toBe(800);
    expect(await page.locator("html").getAttribute("data-tree")).toBe(tree);
    const radius = await page.locator(drawer).evaluate((el) => getComputedStyle(el).borderTopLeftRadius);
    expect(radius).toBe("14px");
  });

  test("on the phone «Preguntar» sits beside «Tus notas» under the title and opens the sheet", async ({ page }) => {
    await openAt(page, 390, 780);
    const phoneAsk = page.locator("#content [data-ask-button]:visible").first();
    await expect(phoneAsk).toBeVisible();
    await expect(page.locator(stripAsk)).not.toBeVisible();
    await phoneAsk.click();
    await expect(page.locator(drawer)).toHaveAttribute("data-layout", "sheet");
    await expect(page.locator(drawer)).toBeInViewport();
    expect(await horizontalOverflow(page)).toBe(0);
  });

  test("reduced motion opens at once", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await openAt(page, 1440);
    await clickQuietly(page, stripAsk);
    await page.waitForTimeout(50);
    const opacity = await page.locator(drawer).evaluate((el) => getComputedStyle(el).opacity);
    expect(opacity).toBe("1");
  });
});

const openDrawer = async (page: Page, width = 1440, height = 1000) => {
  await openAt(page, width, height);
  await clickQuietly(page, "[data-ask-button]");
  await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(350);
};

const inDrawer = (page: Page, selector: string) =>
  page.evaluate((target) => {
    const frame = document.querySelector("aside[data-ask-drawer]")!.getBoundingClientRect();
    const box = document.querySelector(target)!.getBoundingClientRect();
    return {
      x: Math.round((box.left - frame.left) * 10) / 10,
      y: Math.round((box.top - frame.top) * 10) / 10,
      w: Math.round(box.width * 10) / 10,
      h: Math.round(box.height * 10) / 10,
    };
  }, selector);

test.describe("ask drawer: what it can see", () => {
  test("the block names the chapter and edition, with the artifact's measures", async ({ page }) => {
    await openDrawer(page);
    await expect(page.locator("[data-ask-sees]")).toContainText("Juan 6, Reina-Valera 1909");
    expect(await inDrawer(page, "[data-ask-sees]")).toEqual({ x: 22, y: 69, w: 335, h: 189 });
    expect(await inDrawer(page, "[role=switch]")).toEqual({ x: 323, y: 133, w: 34, h: 20 });
    expect(await inDrawer(page, "[data-ask-sees] [role=group]")).toEqual({ x: 22, y: 203, w: 335, h: 40 });
  });

  test("the switch reveals «1 nota 1 subrayado verde» and swaps the third suggestion", async ({ page }) => {
    await openDrawer(page);
    const line = page.locator("[data-ask-sees] > div[aria-hidden]");
    await expect(line).toHaveAttribute("aria-hidden", "true");
    await expect(page.locator("[data-ask-suggestions] li").nth(2)).toContainText("¿Qué palabras de 6:51 vuelven aquí?");
    await page.locator("[role=switch]").click();
    await expect(page.locator("[role=switch]")).toHaveAttribute("aria-checked", "true");
    await expect(line).toHaveAttribute("aria-hidden", "false");
    await expect.poll(() => line.evaluate((el) => el.getBoundingClientRect().height)).toBe(15);
    await expect(page.locator("[data-ask-suggestions] li").nth(2)).toContainText(
      "¿Qué subrayé en verde en este capítulo?",
    );
  });

  test("the scope indicator slides to the chosen place in 340 ms with the reveal curve", async ({ page }) => {
    await openDrawer(page);
    const indicator = page.locator("[data-ask-sees] [role=group] > span[aria-hidden]");
    const timing = await indicator.evaluate(async (el) => {
      el.parentElement!.querySelector("button")!.click();
      await new Promise((resolve) => requestAnimationFrame(resolve));
      return el.getAnimations().map((animation) => {
        const effect = animation.effect!.getTiming();
        return [(animation as CSSTransition).transitionProperty, effect.duration, effect.easing];
      });
    });
    expect(timing).toContainEqual(["translate", 340, "cubic-bezier(0.22, 1, 0.36, 1)"]);
    await expect.poll(async () => Math.round((await indicator.boundingBox())!.x)).toBe(26);
  });
});

test.describe("ask drawer: conversation", () => {
  test("a suggestion folds the list, streams the answer and ends with follow-ups and actions", async ({ page }) => {
    await openDrawer(page);
    await page.evaluate(() => {
      const seen: string[] = [];
      (window as unknown as { seen: string[] }).seen = seen;
      const chat = document.querySelector("[data-ask-chat]")!;
      new MutationObserver(() => seen.push(chat.textContent ?? "")).observe(chat, { childList: true, subtree: true });
    });
    await page.locator("[data-ask-suggestions] button").first().click();
    await expect(page.locator("[data-ask-chat] [role=log]")).toContainText(
      "¿Qué dijeron los Padres sobre este versículo?",
    );
    await expect(page.locator("[data-ask-chat] button", { hasText: "Detener" })).toBeVisible();
    await expect(page.locator("[data-ask-suggestions]")).toHaveCount(0);
    await expect(page.locator("[data-ask-meta]")).toContainText("Buscado en: todo el corpus.");
    await expect(page.locator("[data-ask-answer] figure")).toHaveCount(4, { timeout: 4000 });
    await expect(page.locator("[data-ask-answer] button", { hasText: "Informar un error" })).toBeVisible({
      timeout: 8000,
    });
    await expect(page.locator("[data-ask-chat] button", { hasText: "Preguntar" })).toBeVisible();
    await expect(page.locator("[data-ask-answer] button", { hasText: "¿Quién tiene razón?" })).toBeVisible();
    const seen = await page.evaluate(() => (window as unknown as { seen: string[] }).seen);
    expect(seen.some((text) => text.includes("Buscando en el corpus"))).toBe(true);
  });

  test("«Detener» stops the answer and says so", async ({ page }) => {
    await openDrawer(page);
    await page.locator("[data-ask-suggestions] button").first().click();
    await page.waitForTimeout(1100);
    await page.locator("[data-ask-chat] button", { hasText: "Detener" }).click();
    await expect(page.locator("[data-ask-answer]")).toContainText("Detenida.", { timeout: 3000 });
    await expect(page.locator("[data-ask-answer] button", { hasText: "Informar un error" })).toBeVisible();
  });

  test("«¿Quién tiene razón?» gets the disputed answer, never a verdict", async ({ page }) => {
    await openDrawer(page);
    await page.locator("[data-ask-chat] textarea").fill("¿Quién tiene razón?");
    await page.keyboard.press("Enter");
    await expect(page.locator("[data-ask-answer]")).toContainText("Doctrina no decide quién tiene razón.", {
      timeout: 4000,
    });
    await expect(page.locator("[data-ask-answer] li")).toHaveCount(5);
  });

  test("a pastoral request gets the fixed text without actions", async ({ page }) => {
    await openDrawer(page);
    await page.locator("[data-ask-chat] textarea").fill("quiero confesarme");
    await page.keyboard.press("Enter");
    await expect(page.locator("[data-ask-meta]")).toContainText("Texto fijo de Doctrina");
    await expect(page.locator("[data-ask-answer]")).toContainText("busca a un sacerdote o a un pastor", {
      timeout: 3000,
    });
    await page.waitForTimeout(600);
    await expect(page.locator("[data-ask-answer] button")).toHaveCount(0);
  });

  test("asking for the Fathers inside «Juan 6» explains the scope and «Buscar en los Padres» fixes it", async ({
    page,
  }) => {
    await openDrawer(page);
    await page.locator("[data-ask-sees] [role=group] button").first().click();
    await page.locator("[data-ask-suggestions] button").first().click();
    await expect(page.locator("[data-ask-answer]")).toContainText("En Juan 6 está solo el texto bíblico.", {
      timeout: 3000,
    });
    await page.locator("[data-ask-answer] button", { hasText: "Buscar en los Padres" }).click();
    await expect(page.locator("[data-ask-sees] [role=group] button[aria-pressed=true]")).toHaveText("Padres");
    await expect(page.locator("[data-ask-meta]").nth(1)).toContainText("Buscado en: Padres.");
  });

  test("the words answer marks the repeated words in 6:51 and 6:53 behind the text", async ({ page }) => {
    await openDrawer(page);
    await page.locator("[data-ask-suggestions] button").nth(2).click();
    await expect(page.locator("[data-ask-marks]")).toHaveAttribute("data-shown", "", { timeout: 3000 });
    expect(await page.locator("[data-ask-marks] > div").count()).toBe(8);
    const first = await page.evaluate(
      () =>
        document.querySelector("[data-ask-marks]") === document.querySelector("[data-chapter-text]")!.firstElementChild,
    );
    expect(first).toBe(true);
  });

  test("reduced motion shows the whole answer at once", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await openDrawer(page);
    await page.locator("[data-ask-suggestions] button").first().click();
    await expect(page.locator("[data-ask-answer] button", { hasText: "Informar un error" })).toBeVisible({
      timeout: 500,
    });
  });
});

test.describe("ask drawer: citations", () => {
  test.use({ permissions: ["clipboard-read", "clipboard-write"] });

  const answered = async (page: Page, suggestion: number) => {
    await openDrawer(page);
    await page.locator("[data-ask-suggestions] button").nth(suggestion).click();
    await expect(page.locator("[data-ask-answer] button", { hasText: "Informar un error" })).toBeVisible({
      timeout: 9000,
    });
  };

  test("hovering a Father's citation shows the card with the edition's wording", async ({ page }) => {
    await answered(page, 0);
    const link = page.locator("[data-ask-cite]", { hasText: "Catequesis 22, 4" });
    await link.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await link.hover();
    const card = page.locator("[data-ask-preview]");
    await expect(card).toHaveAttribute("data-open", "true");
    await expect(card).toContainText("En la edición, 22.4");
    await expect(card).toContainText("Cita comprobada en la edición.");
    expect((await card.boundingBox())!.width).toBe(320);
  });

  test("a verse citation jumps to the verse, marks it and offers the way back", async ({ page }) => {
    await answered(page, 0);
    const start = await page.evaluate(() => scrollY);
    await page.locator("[data-ask-cite]", { hasText: "6:66" }).click();
    await expect(page.locator("#v-66")).toHaveAttribute("data-marked", "");
    await expect(page.locator("[data-ask-back]")).toHaveAttribute("data-open", "true");
    await expect(page.locator("[data-ask-back]")).toContainText("Volver a donde estabas");
    await page.waitForTimeout(900);
    await page.locator("[data-ask-back] button").click();
    await expect.poll(() => page.evaluate(() => scrollY)).toBe(start);
    await expect(page.locator("[data-ask-back]")).not.toHaveAttribute("data-open");
  });

  test("a tradition's citation opens the citation window; Esc closes it and keeps the drawer", async ({ page }) => {
    await answered(page, 1);
    const link = page.locator("[data-ask-cite]", { hasText: "§1336" });
    await link.click();
    const window = page.locator("[data-ask-window]");
    await expect(window).toHaveAttribute("data-open", "true");
    await expect(link).toHaveAttribute("aria-expanded", "true");
    await expect.poll(async () => (await window.boundingBox())!.y).toBe(130);
    expect((await window.boundingBox())!.width).toBe(400);
    await window.getByRole("button", { name: "Copiar cita" }).click();
    expect(await page.evaluate(() => navigator.clipboard.readText())).toContain(
      "(Catecismo de la Iglesia Católica, §1336)",
    );
    await page.keyboard.press("Escape");
    await expect(window).not.toHaveAttribute("data-open");
    await expect(link).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
  });

  test("a Father's citation opens the work at that paragraph", async ({ page }) => {
    await answered(page, 0);
    await page.locator("[data-ask-cite]", { hasText: "Catequesis 22, 4" }).click();
    await page.waitForURL(/obras\/cyril-jerusalem-catechetical-lectures#d-22\.4$/);
  });
});

test.describe("ask drawer: the selection", () => {
  test("«Preguntar» in the selection toolbar opens the drawer with the words as a pill", async ({ page }) => {
    await openAt(page, 1440, 1000);
    await page.evaluate(() => {
      const verse = document.getElementById("v-53")!;
      scrollTo(0, verse.getBoundingClientRect().top + scrollY - 300);
    });
    await page.waitForTimeout(400);
    await page.evaluate(() => {
      const unit = document.querySelector('[data-verse-text="53"]')!;
      const walker = document.createTreeWalker(unit, NodeFilter.SHOW_TEXT);
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        const at = node.textContent!.indexOf("Si no comiereis");
        if (at < 0) continue;
        const range = document.createRange();
        range.setStart(node, at);
        range.setEnd(node, at + "Si no comiereis la carne".length);
        getSelection()!.removeAllRanges();
        getSelection()!.addRange(range);
      }
      document.dispatchEvent(new PointerEvent("pointerup", { pointerType: "mouse" }));
    });
    const toolbar = page.locator("[role=toolbar][data-open=true]");
    await toolbar.getByRole("button", { name: "Preguntar" }).click();
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    const pill = page.locator("[data-ask-pill-slot] > div");
    await expect(pill).toContainText("Juan 6:53");
    await expect(pill).toContainText("Si no comiereis la carne");
    await pill.getByRole("button", { name: "Quitar lo elegido" }).click();
    await expect(pill).toHaveCount(0);
  });
});

test("with a note in the chapter, the margin cards give way to the drawer in one motion and nothing overflows", async ({
  page,
}) => {
  await page.addInitScript(() =>
    localStorage.setItem(
      "doctrina-notes",
      JSON.stringify([
        {
          id: "ask-note",
          scope: "unit",
          translationId: "rv1909",
          book: "John",
          chapter: 6,
          verse: 53,
          verseTo: 53,
          from: null,
          to: null,
          quote: null,
          text: "Nota.",
          createdAt: 1,
          updatedAt: 1,
        },
      ]),
    ),
  );
  await openAt(page, 1440);
  await expect(page.locator("[data-note-cards]")).toHaveCount(1);
  const frames = await sampleOpening(page, 450);
  for (let i = 1; i < frames.length; i++) expect(frames[i]!.column).toBeGreaterThanOrEqual(frames[i - 1]!.column - 0.5);
  expect(frames[1]!.column - frames[0]!.column).toBeLessThan(20);
  await expect(page.locator("[data-note-cards]")).toHaveCount(0);
  expect(await horizontalOverflow(page)).toBe(0);
});

const visibilityFrames = (page: Page, phase: "open" | "close") =>
  page.evaluate(
    (which) =>
      new Promise<{ t: number; visible: boolean; opacity: number; translate: string }[]>((resolve) => {
        const element = document.querySelector<HTMLElement>("aside[data-ask-drawer]")!;
        const frames: { t: number; visible: boolean; opacity: number; translate: string }[] = [];
        const start = performance.now();
        const step = () => {
          const style = getComputedStyle(element);
          frames.push({
            t: performance.now() - start,
            visible: style.visibility === "visible",
            opacity: Number(style.opacity),
            translate: style.translate,
          });
          if (performance.now() - start < 340) requestAnimationFrame(step);
          else resolve(frames);
        };
        requestAnimationFrame(step);
        if (which === "open") document.querySelector<HTMLElement>("[data-ask-button]:not([hidden])")?.click();
        else document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
      }),
    phase,
  );

for (const [width, height, rest] of [
  [1440, 900, "-24px"],
  [390, 844, "0px 100%"],
] as const) {
  test(`at ${width} px the drawer is visible during the whole open and close motion`, async ({ page }) => {
    await openAt(page, width, height);
    await page.waitForTimeout(300);
    await page.evaluate(() => {
      const button = [...document.querySelectorAll<HTMLElement>("[data-ask-button]")].find((node) => node.offsetParent);
      button?.removeAttribute("hidden");
      document
        .querySelectorAll("[data-ask-button]")
        .forEach((node) => node !== button && node.setAttribute("hidden", ""));
    });
    for (const phase of ["open", "close"] as const) {
      const frames = await visibilityFrames(page, phase);
      const moving = frames.filter(
        (frame) => frame.translate !== rest && frame.translate !== "none" && frame.translate !== "0px",
      );
      expect(moving.length).toBeGreaterThan(3);
      expect(moving.every((frame) => frame.visible)).toBe(true);
      await page.waitForTimeout(300);
    }
  });
}

test("the hover card never takes the pointer, and Esc hides it before closing anything else", async ({ page }) => {
  await openDrawer(page);
  await page.locator("[data-ask-suggestions] button").first().click();
  await expect(page.locator("[data-ask-answer] button", { hasText: "Informar un error" })).toBeVisible({
    timeout: 9000,
  });
  const link = page.locator("[data-ask-cite]", { hasText: "Catequesis 22, 4" });
  await link.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await link.hover();
  const card = page.locator("[data-ask-preview]");
  await expect(card).toHaveAttribute("data-open", "true");
  expect(await card.evaluate((el) => getComputedStyle(el).pointerEvents)).toBe("none");
  await page.keyboard.press("Escape");
  await expect(card).not.toHaveAttribute("data-open");
  await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
});
