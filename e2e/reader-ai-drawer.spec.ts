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
  test("the strip button opens a drawer 30 % of the window wide (432 px at 1440) at the left edge, under the top bar, and the text moves right", async ({
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
    expect(box).toEqual({ x: 0, y: 56, width: 432, height: 900 - 56 });
    await expect(page.locator(`${drawer} #ask-drawer-title`)).toHaveText("Preguntar");
    const padding = await page.locator("#content").evaluate((el) => getComputedStyle(el).paddingLeft);
    expect(padding).toBe("480px");
    const stripInner = await page
      .locator("[data-reader-strip] > div.texture-layer")
      .first()
      .evaluate((el) => el.getBoundingClientRect().left + parseFloat(getComputedStyle(el).paddingLeft));
    expect(stripInner).toBe(446);
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

  test("under 1100 px it is a sheet from the bottom, 54 % high, with a grip, and a docked tree folds out of its way", async ({
    page,
  }) => {
    await openAt(page, 1024, 800);
    expect(await page.locator("html").getAttribute("data-tree")).toBeNull();
    await clickQuietly(page, stripAsk);
    await expect(page.locator(drawer)).toHaveAttribute("data-layout", "sheet");
    await page.waitForTimeout(400);
    const box = (await page.locator(drawer).boundingBox())!;
    expect(box.x).toBe(0);
    expect(box.width).toBe(1024);
    expect(Math.round(box.height)).toBe(Math.round(800 * 0.54));
    expect(Math.round(box.y + box.height)).toBe(800);
    expect(await page.locator("html").getAttribute("data-tree")).toBe("closed");
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

const contextLine = "[data-ask-context] > div:first-child";
const contextButton = "[data-ask-context] button[aria-expanded]";

const openContext = async (page: Page) => {
  await page.locator(contextButton).click();
  await expect(page.locator("#ask-context-sees")).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(350);
};

test.describe("ask drawer: what it can see", () => {
  test("one line under the head names the chapter, the edition and where it searches; the block stays shut", async ({
    page,
  }) => {
    await openDrawer(page);
    await expect(page.locator(`${contextLine} > span`)).toHaveText("Juan 6, Reina-Valera 1909");
    await expect(page.locator(contextButton)).toHaveText("Todo el corpus");
    await expect(page.locator(contextButton)).toHaveAttribute("aria-expanded", "false");
    expect(await inDrawer(page, contextLine)).toEqual({ x: 0, y: 51, w: 431, h: 36 });
    expect(await inDrawer(page, contextButton)).toEqual({ x: 301, y: 53.5, w: 122, h: 30 });
    expect(await page.locator("#ask-context-sees").evaluate((el) => el.getBoundingClientRect().height)).toBe(1);
    expect(await page.locator("#ask-context-sees").evaluate((el) => (el as HTMLElement).inert)).toBe(true);
  });

  test("the line opens the block in 300 ms with the reveal curve; notes are on and the whole corpus is chosen", async ({
    page,
  }) => {
    await openDrawer(page);
    const timing = await page.locator("#ask-context-sees").evaluate(async (el) => {
      document.querySelector<HTMLElement>("[data-ask-context] button[aria-expanded]")!.click();
      await new Promise((resolve) => requestAnimationFrame(resolve));
      return el.getAnimations().map((animation) => {
        const effect = animation.effect!.getTiming();
        return [(animation as CSSTransition).transitionProperty, effect.duration, effect.easing];
      });
    });
    expect(timing).toContainEqual(["max-height", 300, "cubic-bezier(0.22, 1, 0.36, 1)"]);
    await page.waitForTimeout(350);
    await expect(page.locator(contextButton)).toHaveAttribute("aria-expanded", "true");
    expect(await page.locator(`${contextButton} svg`).evaluate((el) => getComputedStyle(el).rotate)).toBe("180deg");
    expect(await inDrawer(page, "[data-ask-sees]")).toEqual({ x: 0, y: 87, w: 431, h: 213 });
    expect(await inDrawer(page, "[role=switch]")).toEqual({ x: 375, y: 161, w: 34, h: 20 });
    expect(await inDrawer(page, "[data-ask-sees] [role=group]")).toEqual({ x: 22, y: 242, w: 387, h: 42 });
    await expect(page.locator("[role=switch]")).toHaveAttribute("aria-checked", "true");
    await expect(page.locator("[data-ask-sees] > div[aria-hidden]")).toHaveAttribute("aria-hidden", "false");
    await expect(page.locator("[data-ask-sees] [role=group] button[aria-pressed=true]")).toHaveText("Todo el corpus");
    await page.locator(contextButton).click();
    await expect(page.locator("#ask-context-sees")).not.toHaveAttribute("data-open", "true");
  });

  test("the switch hides «1 nota 1 subrayado verde»", async ({ page }) => {
    await openDrawer(page);
    await openContext(page);
    const line = page.locator("[data-ask-sees] > div[aria-hidden]");
    await page.locator("[role=switch]").click();
    await expect(page.locator("[role=switch]")).toHaveAttribute("aria-checked", "false");
    await expect(line).toHaveAttribute("aria-hidden", "true");
    await expect.poll(() => line.evaluate((el) => el.getBoundingClientRect().height)).toBe(0);
  });

  test("the scope indicator slides to the chosen place in 340 ms and the line names the new scope", async ({
    page,
  }) => {
    await openDrawer(page);
    await openContext(page);
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
    await expect(page.locator(contextButton)).toHaveText("Juan 6");
  });
});

const body = "[data-ask-body]";
const foot = "[data-ask-foot]";
const chipRow = "[data-ask-suggestions]";

const distanceToEnd = (page: Page) =>
  page.locator(body).evaluate((el) => el.scrollHeight - el.clientHeight - el.scrollTop);

const selectInVerse = async (page: Page, verse: number, words: string) => {
  await page.evaluate((target) => {
    const unit = document.getElementById(`v-${target}`)!;
    scrollTo(0, unit.getBoundingClientRect().top + scrollY - 300);
  }, verse);
  await page.waitForTimeout(400);
  await page.evaluate(
    ([target, text]) => {
      const unit = document.querySelector(`[data-verse-text="${target}"]`)!;
      const walker = document.createTreeWalker(unit, NodeFilter.SHOW_TEXT);
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        const at = node.textContent!.indexOf(text as string);
        if (at < 0) continue;
        const range = document.createRange();
        range.setStart(node, at);
        range.setEnd(node, at + (text as string).length);
        getSelection()!.removeAllRanges();
        getSelection()!.addRange(range);
      }
      document.dispatchEvent(new PointerEvent("pointerup", { pointerType: "mouse" }));
    },
    [verse, words],
  );
  await page.locator("[role=toolbar][data-open=true]").getByRole("button", { name: "Preguntar" }).click();
  await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(350);
};

test.describe("ask drawer: composer, suggestions and scroll", () => {
  test("empty, it asks about the chapter in the middle and the composer sits at the bottom with four chips", async ({
    page,
  }) => {
    await openDrawer(page);
    await expect(page.locator("[data-ask-empty] > p").first()).toHaveText("Pregunta sobre Juan 6");
    await expect(page.locator(`${chipRow} button`)).toHaveText([
      "¿Qué dijeron los Padres sobre este capítulo?",
      "¿Cómo lo lee cada tradición?",
      "¿Qué otros pasajes de la Biblia tratan este tema?",
      "¿Qué palabras se repiten en el capítulo?",
    ]);
    const frame = (await page.locator(drawer).boundingBox())!;
    const footBox = (await page.locator(foot).boundingBox())!;
    expect(Math.round(footBox.y + footBox.height)).toBe(Math.round(frame.y + frame.height));
    expect(Math.round(footBox.height)).toBe(102);
    await expect(page.locator(`${foot} textarea`)).toBeFocused();
    await expect(page.locator(`${foot} textarea`)).toHaveAttribute("placeholder", "Pregunta sobre Juan 6");
  });

  test("the chips fold away on the first question and the composer never leaves the screen", async ({ page }) => {
    await openDrawer(page, 1440, 760);
    await page.locator(`${chipRow} button`).first().click();
    await expect(page.locator("[data-ask-empty]")).toHaveCount(0);
    await expect(page.locator(chipRow)).toHaveCount(0);
    for (let i = 0; i < 8; i += 1) {
      const field = (await page.locator(`${foot} textarea`).boundingBox())!;
      expect(field.y + field.height).toBeLessThanOrEqual(760);
      await page.waitForTimeout(500);
    }
    await expect(page.locator("[data-ask-answer] button", { hasText: "Informar un error" })).toBeVisible({
      timeout: 16000,
    });
  });

  test("while it answers the view follows the text; scrolling up releases it and «↓» brings it back", async ({
    page,
  }) => {
    await openDrawer(page, 1440, 700);
    await page.locator(`${chipRow} button`).first().click();
    await expect(page.locator("[data-ask-answer] figure")).toHaveCount(4, { timeout: 10000 });
    await page.waitForTimeout(400);
    expect(await distanceToEnd(page)).toBeLessThan(40);
    await page.locator(body).hover();
    await page.mouse.wheel(0, -400);
    await page.waitForTimeout(1500);
    expect(await distanceToEnd(page)).toBeGreaterThan(100);
    const jump = page.locator("[data-ask-jump]");
    await expect(jump).toHaveAttribute("data-on", "true");
    await jump.click();
    await page.waitForTimeout(450);
    expect(await distanceToEnd(page)).toBeLessThan(40);
    await expect(jump).not.toHaveAttribute("data-on", "true");
  });

  test("opened from a verse, it asks about the verse, offers the verse chips and the line leads to the verse", async ({
    page,
  }) => {
    await openAt(page, 1440, 1000);
    await selectInVerse(page, 53, "Si no comiereis la carne");
    await expect(page.locator("[data-ask-empty] > p").first()).toHaveText("Pregunta sobre Juan 6:53");
    await expect(page.locator(`${chipRow} button`).first()).toHaveText("¿Qué creían los Padres sobre este versículo?");
    await expect(page.locator(`${foot} textarea`)).toHaveAttribute("placeholder", "Pregunta sobre Juan 6:53");
    const line = page.locator(`${foot} div:has(> [data-ask-pill-go])`);
    await page.evaluate(() => scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.locator("[data-ask-pill-go]").hover();
    await expect.poll(() => line.evaluate((el) => getComputedStyle(el).borderTopColor)).toBe("rgb(174, 171, 164)");
    await page.locator("[data-ask-pill-go]").click();
    await expect(page.locator("#v-53")).toHaveAttribute("data-marked", "");
    await page.waitForTimeout(900);
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    const third = await page.evaluate(() => {
      const offset =
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--spacing-top")) +
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--spacing-scroll-offset"));
      return Math.round(document.getElementById("v-51")!.getBoundingClientRect().top - offset);
    });
    expect(Math.abs(third)).toBeLessThanOrEqual(2);
    await expect(page.locator("#v-53")).not.toHaveAttribute("data-marked", "", { timeout: 2500 });
  });
});

test.describe("ask drawer: conversation", () => {
  test("a suggestion folds the list, streams the answer and ends with follow-ups and actions", async ({ page }) => {
    await openDrawer(page);
    await page.evaluate(() => {
      const seen: string[] = [];
      (window as unknown as { seen: string[] }).seen = seen;
      const chat = document.querySelector("[data-ask-content]")!;
      new MutationObserver(() => seen.push(chat.textContent ?? "")).observe(chat, { childList: true, subtree: true });
    });
    await page.locator("[data-ask-suggestions] button").first().click();
    await expect(page.locator("[data-ask-content] [role=log]")).toContainText(
      "¿Qué dijeron los Padres sobre este capítulo?",
    );
    await expect(page.locator("[data-ask-content] button", { hasText: "Detener" })).toBeVisible();
    await expect(page.locator("[data-ask-suggestions]")).toHaveCount(0);
    await expect(page.locator("[data-ask-status]")).toContainText("Buscando en los Padres");
    await expect(page.locator("[data-ask-status]")).toContainText("Comprobando las citas en la edición", {
      timeout: 2500,
    });
    await expect(page.locator("[data-ask-status]")).toContainText("Redactando", { timeout: 2500 });
    await expect(page.locator("[data-ask-meta]")).toHaveText("Generada por IA. Buscado en: Todo el corpus.", {
      timeout: 3000,
    });
    await expect(page.locator("[data-ask-status] button")).toHaveText(/^Consultó 4 textos\s*4 s$/);
    await expect(page.locator("[data-ask-answer] figure")).toHaveCount(4, { timeout: 4000 });
    await expect(page.locator("[data-ask-answer] button", { hasText: "Informar un error" })).toBeVisible({
      timeout: 16000,
    });
    await expect(page.locator("[data-ask-content] button", { hasText: "Preguntar" })).toBeVisible();
    await expect(page.locator("[data-ask-answer] .flex-wrap.gap-2 button")).toHaveText([
      "¿Qué dice cada tradición?",
      "¿En qué otro lugar de la Biblia se habla de este tema?",
    ]);
    const status = page.locator("[data-ask-status] button");
    await status.click();
    await expect(status).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("[data-ask-status] li")).toHaveText([
      "Cirilo de Jerusalén, Catequesis 22, 4",
      "Cirilo de Jerusalén, Catequesis 22, 6",
      "Agustín de Hipona, Sobre la doctrina cristiana III, 16, 24",
      "Agustín de Hipona, Tratados sobre el Evangelio de Juan 27, 5",
    ]);
  });

  test("the words arrive at 100 ms each with a soft 320 ms entry and the answer grows without jumps", async ({
    page,
  }) => {
    await openDrawer(page, 1440, 760);
    await page.locator("[data-ask-suggestions] button").first().click();
    await page.waitForSelector("[data-ask-answer] p.font-body", { timeout: 12000 });
    const entry = await page
      .locator("[data-ask-answer] p.font-body span")
      .last()
      .evaluate((el) => el.getAnimations().map((animation) => animation.effect!.getTiming().duration));
    expect(entry).toContain(320);
    const steps = await page.evaluate(
      () =>
        new Promise<number>((resolve) => {
          const answer = document.querySelector("[data-ask-answer]")!;
          const channel = new MessageChannel();
          let last = answer.getBoundingClientRect().height;
          let largest = 0;
          const start = performance.now();
          channel.port1.onmessage = () => {
            const height = answer.getBoundingClientRect().height;
            largest = Math.max(largest, Math.abs(height - last));
            last = height;
            if (performance.now() - start < 3000) requestAnimationFrame(() => channel.port2.postMessage(0));
            else resolve(largest);
          };
          requestAnimationFrame(() => channel.port2.postMessage(0));
        }),
    );
    expect(steps).toBeLessThan(8);
  });

  test("«Detener» stops the answer and says so", async ({ page }) => {
    await openDrawer(page);
    await page.locator("[data-ask-suggestions] button").first().click();
    await page.waitForTimeout(1100);
    await page.locator("[data-ask-content] button", { hasText: "Detener" }).click();
    await expect(page.locator("[data-ask-answer]")).toContainText("Detenida.", { timeout: 6000 });
    await expect(page.locator("[data-ask-actions]")).toHaveCount(0);
  });

  test("«¿Quién tiene razón?» gets the disputed answer, never a verdict", async ({ page }) => {
    await openDrawer(page);
    await page.locator("[data-ask-content] textarea").fill("¿Quién tiene razón?");
    await page.keyboard.press("Enter");
    await expect(page.locator("[data-ask-answer]")).toContainText("Doctrina no decide quién tiene razón.", {
      timeout: 6000,
    });
    await expect(page.locator("[data-ask-answer] li:visible")).toHaveCount(5);
  });

  test("a pastoral request gets the fixed text without actions", async ({ page }) => {
    await openDrawer(page);
    await page.locator("[data-ask-content] textarea").fill("quiero confesarme");
    await page.keyboard.press("Enter");
    await expect(page.locator("[data-ask-meta]")).toHaveText("Texto fijo de Doctrina. No lo escribe la IA.");
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
    await openContext(page);
    await page.locator("[data-ask-sees] [role=group] button").first().click();
    await page.locator("[data-ask-suggestions] button").first().click();
    await expect(page.locator("[data-ask-answer]")).toContainText("En Juan 6 está solo el texto bíblico.", {
      timeout: 6000,
    });
    await page.locator("[data-ask-answer] button", { hasText: "Buscar en los Padres" }).click();
    await expect(page.locator("[data-ask-sees] [role=group] button[aria-pressed=true]")).toHaveText("Padres");
    await expect(page.locator("[data-ask-meta]").nth(1)).toHaveText("Generada por IA. Buscado en: Padres.", {
      timeout: 6000,
    });
  });

  test("the words answer marks the repeated words in 6:51 and 6:53 behind the text", async ({ page }) => {
    await openDrawer(page);
    await page.locator(`${drawer} textarea`).fill("¿Qué palabras de 6:51 vuelven en 6:53?");
    await page.keyboard.press("Enter");
    await expect(page.locator("[data-ask-marks]")).toHaveAttribute("data-shown", "", { timeout: 6000 });
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
      timeout: 16000,
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

  test("a tradition's citation opens the site's citation window; Esc closes it and keeps the drawer", async ({
    page,
  }) => {
    await answered(page, 1);
    const link = page.locator("[data-ask-cite]", { hasText: "§1336" });
    await link.scrollIntoViewIfNeeded();
    await link.click();
    const window = page.locator('[role=dialog][aria-labelledby="citation-window-kind"]');
    await expect(window).toHaveAttribute("data-open", "true");
    await expect(link).toHaveAttribute("aria-expanded", "true");
    await expect(window).toContainText("Catecismo de la Iglesia Católica");
    await expect(window).toContainText("© Libreria Editrice Vaticana");
    await expect(window.getByRole("link", { name: "Abrir la fuente completa" })).toHaveCount(0);
    await window.getByRole("button", { name: "Copiar cita" }).click();
    expect(await page.evaluate(() => navigator.clipboard.readText())).toContain(
      "» Catecismo de la Iglesia Católica, §1336",
    );
    await page.keyboard.press("Escape");
    await expect(window).not.toHaveAttribute("data-open");
    await expect(link).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
  });

  test("a Father's citation opens the citation window, whose «Abrir la fuente completa» leads to the paragraph", async ({
    page,
  }) => {
    await answered(page, 0);
    const link = page.locator("[data-ask-cite]", { hasText: "Catequesis 22, 4" });
    await link.scrollIntoViewIfNeeded();
    await link.click();
    const window = page.locator('[role=dialog][aria-labelledby="citation-window-kind"]');
    await expect(window).toHaveAttribute("data-open", "true");
    await expect(window).toContainText("Cirilo de Jerusalén");
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    await window.getByRole("link", { name: "Abrir la fuente completa" }).click();
    await page.waitForURL(/obras\/cyril-jerusalem-catechetical-lectures#d-22\.4$/);
  });
});

const historyButton = "[data-ask-history-button]";
const historyPanel = "[data-ask-history]";

const answeredAtOnce = async (page: Page) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openDrawer(page);
  await page.locator(`${chipRow} button`).first().click();
  await expect(page.locator("[data-ask-actions]")).toBeVisible({ timeout: 2000 });
};

test.describe("ask drawer: conversations and fragments", () => {
  test("the head carries «Nueva conversación» and «Preguntas anteriores»; the list covers the drawer and Esc closes it", async ({
    page,
  }) => {
    await openDrawer(page);
    const newChat = page.getByRole("button", { name: "Nueva conversación" });
    expect(await inDrawer(page, "aside[data-ask-drawer] > div:nth-child(2) button:nth-of-type(1)")).toEqual({
      x: 307,
      y: 7,
      w: 36,
      h: 36,
    });
    await expect(newChat).toBeVisible();
    await page.locator(historyButton).click();
    await expect(page.locator(historyButton)).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(historyPanel)).toHaveAttribute("data-open", "true");
    expect((await inDrawer(page, historyPanel)).y).toBe(51);
    await expect(page.locator(`${historyPanel} li`)).toHaveCount(3);
    await expect(page.locator(`${historyPanel} li`).first()).toContainText("28 oct");
    await page.keyboard.press("Escape");
    await expect(page.locator(historyPanel)).not.toHaveAttribute("data-open", "true");
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
  });

  test("a conversation is kept when the drawer closes, saved in this browser, and comes back from the list", async ({
    page,
  }) => {
    await answeredAtOnce(page);
    await clickQuietly(page, stripAsk);
    await expect(page.locator(drawer)).not.toHaveAttribute("data-open", "true");
    await clickQuietly(page, stripAsk);
    await expect(page.locator("[role=log]")).toContainText("¿Qué dijeron los Padres sobre este capítulo?");
    const stored = await page.evaluate(() => JSON.parse(localStorage.getItem("doctrina-ask-conversations") ?? "[]"));
    expect(stored).toHaveLength(1);
    await page.getByRole("button", { name: "Nueva conversación" }).click();
    await expect(page.locator("[data-ask-empty]")).toBeVisible();
    await expect(page.locator("[role=log]")).toHaveCount(0);
    await page.reload();
    await page.evaluate(() => document.fonts.ready);
    await clickQuietly(page, "[data-ask-button]");
    await page.locator(historyButton).click();
    const today = await page.evaluate(() =>
      new Intl.DateTimeFormat("es", { day: "numeric", month: "short", timeZone: "UTC" })
        .format(new Date())
        .replace(".", ""),
    );
    const first = page.locator(`${historyPanel} li`).first();
    await expect(first).toContainText("¿Qué dijeron los Padres sobre este capítulo?");
    await expect(first).toContainText(today);
    await expect(page.locator(`${historyPanel} li`)).toHaveCount(4);
    await first.locator("button").click();
    await expect(page.locator(historyPanel)).not.toHaveAttribute("data-open", "true");
    await expect(page.locator("[role=log]")).toContainText("¿Qué dijeron los Padres sobre este capítulo?");
    await expect(page.locator("[data-ask-status] button")).toContainText("Consultó 4 textos");
    await expect(page.locator("[data-ask-answer] figure")).toHaveCount(4);
  });

  test("an example from the list opens with its answer", async ({ page }) => {
    await openDrawer(page);
    await page.locator(historyButton).click();
    await page.locator(`${historyPanel} li button`).first().click();
    await expect(page.locator("[role=log]")).toContainText("¿Qué dijo Crisóstomo sobre «la carne nada aprovecha»?");
    await expect(page.locator("[data-ask-answer] figure")).toHaveCount(4);
  });

  test("selecting words of an answer offers «Preguntar sobre esto», which brings them to the composer", async ({
    page,
  }) => {
    await answeredAtOnce(page);
    await page.evaluate(() => {
      const prose = document.querySelector("[data-ask-answer] p.font-body")!;
      const walker = document.createTreeWalker(prose, NodeFilter.SHOW_TEXT);
      const first = walker.nextNode()!;
      const range = document.createRange();
      range.setStart(first, 0);
      range.setEnd(first, first.textContent!.length);
      getSelection()!.removeAllRanges();
      getSelection()!.addRange(range);
      document.dispatchEvent(new PointerEvent("pointerup", { pointerType: "mouse" }));
    });
    const toolbar = page.locator("[data-ask-fragment]");
    await expect(toolbar).toBeVisible();
    await toolbar.getByRole("button", { name: "Preguntar sobre esto" }).click();
    await expect(toolbar).toHaveCount(0);
    const line = page.locator(`${foot} > div > div`).first();
    await expect(line).toContainText("De la respuesta");
    await expect(line).toContainText("Cirilo");
    await expect(page.locator("[data-ask-pill-go]")).toHaveCount(0);
    await expect(page.locator(`${foot} textarea`)).toBeFocused();
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
    const pill = page.locator("[data-ask-foot] div:has(> [data-ask-pill-go])");
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
    timeout: 16000,
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
