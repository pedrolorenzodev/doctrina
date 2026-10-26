import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, landingTop, traditionPath } from "./helpers";

const earlyPath = "/es/doctrinas/eucaristia/primeros-cristianos";
const storageKey = "doctrina-search-recents";
const trigger = "header button[aria-haspopup=dialog]";
const dialog = "[data-search-dialog]";
const input = `${dialog} [role=combobox]`;
const options = `${dialog} [role=option]`;
const wrapper = `${dialog} >> xpath=..`;

async function openSearch(page: Page) {
  await page.locator(trigger).click();
  await expect(page.locator(dialog)).toHaveAttribute("data-open", "true");
  await expect(page.locator(input)).toBeFocused();
}

async function search(page: Page, query: string) {
  await page.locator(input).fill(query);
}

const titles = (page: Page) => page.locator(`${options} > span:first-child`).allTextContents();

function runningInOverlay(page: Page): Promise<number> {
  return page.evaluate(() => {
    const shell = document.querySelector("[data-search-dialog]")!.parentElement!;
    return shell.getAnimations({ subtree: true }).filter((animation) => animation.playState === "running").length;
  });
}

type Frame = { t: number; opacity: number; y: number };

function sample(page: Page, ms: number): Promise<Frame[]> {
  return page.evaluate(
    (duration) =>
      new Promise<Frame[]>((resolve) => {
        const box = document.querySelector("[data-search-dialog]") as HTMLElement;
        const shell = box.parentElement as HTMLElement;
        const frames: Frame[] = [];
        const start = performance.now();
        const tick = () => {
          const elapsed = performance.now() - start;
          const translate = getComputedStyle(box).translate;
          frames.push({
            t: Math.round(elapsed),
            opacity: Number(getComputedStyle(shell).opacity),
            y: translate === "none" ? 0 : parseFloat(translate.split(" ")[1] ?? "0"),
          });
          if (elapsed < duration) requestAnimationFrame(tick);
          else resolve(frames);
        };
        tick();
      }),
    ms,
  );
}

test("the trigger sits 38 px after the logo (14 gap + 24 margin): 36 px high, up to 380 wide, with its placeholder and key", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const box = await page.locator(trigger).boundingBox();
  const logo = await page.locator("header > a").boundingBox();
  expect(box!.height).toBe(36);
  expect(box!.width).toBe(380);
  expect(Math.round(box!.x - (logo!.x + logo!.width))).toBe(38);
  await expect(page.locator(trigger)).toHaveAttribute("aria-label", "Buscar");
  await expect(page.locator(trigger)).toContainText("Buscar doctrinas, versículos, Padres, palabras");
  await expect(page.locator(`${trigger} kbd`)).toHaveText(/^(⌘K|Ctrl K)$/);
});

test("on a phone the trigger is an icon, 40 px wide, at the right", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto(traditionPath);
  const box = await page.locator(trigger).boundingBox();
  expect(box!.width).toBe(40);
  await expect(page.locator(`${trigger} kbd`)).toBeHidden();
  await expect(page.locator(`${trigger} span`)).toBeHidden();
  const theme = await page.locator("header button").last().boundingBox();
  expect(theme!.x).toBeGreaterThan(box!.x + box!.width - 1);
});

test("the trigger, ⌘K and Ctrl+K open it with the input focused and nothing shown yet", async ({ page }) => {
  await page.goto(traditionPath);
  await expect(page.locator(dialog)).not.toHaveAttribute("data-open");
  await openSearch(page);
  await expect(page.locator(options)).toHaveCount(0);
  await expect(page.locator(dialog)).toContainText("Escribe para buscar doctrinas, objeciones y textos de los Padres.");
  await page.keyboard.press("Escape");
  await expect(page.locator(dialog)).not.toHaveAttribute("data-open");
  await page.keyboard.press("Control+k");
  await expect(page.locator(dialog)).toHaveAttribute("data-open", "true");
  await expect(page.locator(input)).toBeFocused();
});

test("Esc closes and returns focus to the trigger; the scrim closes, the box does not @webkit", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await openSearch(page);
  await page.keyboard.press("Escape");
  await expect(page.locator(dialog)).not.toHaveAttribute("data-open");
  await expect(page.locator(trigger)).toBeFocused();
  await openSearch(page);
  await page.locator(dialog).click({ position: { x: 300, y: 30 } });
  await expect(page.locator(dialog)).toHaveAttribute("data-open", "true");
  await page.mouse.click(40, 600);
  await expect(page.locator(dialog)).not.toHaveAttribute("data-open");
  await expect(page.locator(trigger)).toBeFocused();
});

test("«carne»: the three witnesses, the movement and the Father whose texts say it, marked, accents ignored", async ({
  page,
}) => {
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "carne");
  await expect
    .poll(() => titles(page))
    .toEqual([
      "Carta a los Esmirniotas 7.1",
      "Primera Apología 66",
      "Sobre la doctrina cristiana III.16.24",
      "Docetismo",
      "Ignacio de Antioquía",
    ]);
  await expect(page.locator(`${options} mark`).first()).toHaveText("carne");
  await search(page, "EUCARISTIA ignacio");
  await expect.poll(() => titles(page)).toEqual(["Carta a los Esmirniotas 7.1"]);
  await expect(page.locator(`${options} mark`)).toHaveText(["Ignacio", "Eucaristía", "Eucaristía"]);
});

test("a word found only in the long text shows the fragment around it, cut with «…»", async ({ page }) => {
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "propiciatorio");
  await expect.poll(() => titles(page)).toEqual(["Un solo sacrificio, una sola vez"]);
  const line = page.locator(`${options} > span:last-child`);
  await expect(line).toContainText("propiciatorio");
  await expect(page.locator(`${options} mark`)).toHaveText("propiciatorio");
  expect((await line.innerText()).startsWith("…")).toBe(true);
  await expect(page.locator(`${options} > span:nth-child(2)`)).toHaveText("La Eucaristía / Católica / Objeción");
});

test("no match says so with the query; the empty line comes back when it is cleared", async ({ page }) => {
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "zzzz");
  await expect(page.locator(dialog)).toContainText("Nada coincide con «zzzz». Prueba con una palabra más corta.");
  await expect(page.locator(options)).toHaveCount(0);
  await search(page, "");
  await expect(page.locator(dialog)).toContainText("Escribe para buscar");
});

test("only what is shown can match: the date, the path and the text, nothing hidden", async ({ page }) => {
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "107");
  await expect.poll(() => titles(page)).toEqual(["Carta a los Esmirniotas 7.1", "Ignacio de Antioquía"]);
  await search(page, "Padres Justino");
  await expect.poll(() => titles(page)).toEqual(["Justino Mártir", "Primera Apología 66", "Diálogo con Trifón 41"]);
  await search(page, "keywords");
  await expect(page.locator(options)).toHaveCount(0);
});

test("the pages are in the index: 02, 10, the tradition, Objeciones and each objection", async ({ page }) => {
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "primeros cristianos");
  await expect.poll(() => titles(page)).toEqual(["Lo que escribieron los primeros cristianos"]);
  await search(page, "Objeciones");
  await expect(page.locator(options).first().locator("> span").first()).toHaveText("Objeciones");
  await search(page, "Un solo sacrificio");
  await page.locator(options).first().click();
  await expect(page).toHaveURL("/es/doctrinas/eucaristia/catolica/objeciones/ob-1");
});

test("Line 1: the path, a 1 × 12 px hairline and the date at the right; the Father's fragment is the quote voice", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "Esmirniotas");
  const row = page.locator(options).first();
  const measured = await row.evaluate((item) => {
    const meta = item.children[1] as HTMLElement;
    const hairline = meta.querySelector("i")!.getBoundingClientRect();
    const date = meta.lastElementChild!.getBoundingClientRect();
    const path = meta.firstElementChild!.getBoundingClientRect();
    const line = getComputedStyle(item.children[2]!);
    const title = getComputedStyle(item.children[0]!);
    return {
      hairline: [Math.round(hairline.width), Math.round(hairline.height)],
      dateAtRight: Math.abs(meta.getBoundingClientRect().right - date.right) < 1,
      pathBeforeDate: path.right <= hairline.left,
      line: [line.fontStyle, line.fontSize, `${Math.round(parseFloat(line.lineHeight) * 10) / 10}px`],
      title: [title.fontSize, title.fontFamily.includes("Newsreader")],
    };
  });
  expect(measured.hairline).toEqual([1, 12]);
  expect(measured.dateAtRight).toBe(true);
  expect(measured.pathBeforeDate).toBe(true);
  expect(measured.line).toEqual(["italic", "15.5px", "21.7px"]);
  expect(measured.title).toEqual(["18px", true]);
  await search(page, "propiciatorio");
  const explanatory = await page
    .locator(options)
    .first()
    .evaluate((item) => {
      const style = getComputedStyle(item.children[2]!);
      return [style.fontStyle, style.fontSize];
    });
  expect(explanatory).toEqual(["normal", "13.5px"]);
});

test("↑ ↓ move the selection and stop at both ends; Enter opens the selected result", async ({ page }) => {
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "carne");
  const selected = () =>
    page.locator(options).evaluateAll((items) => items.map((item) => item.getAttribute("aria-selected")));
  await expect.poll(selected).toEqual(["true", "false", "false", "false", "false"]);
  await page.keyboard.press("ArrowUp");
  expect(await selected()).toEqual(["true", "false", "false", "false", "false"]);
  for (let step = 0; step < 5; step += 1) await page.keyboard.press("ArrowDown");
  expect(await selected()).toEqual(["false", "false", "false", "false", "true"]);
  await expect(page.locator(input)).toHaveAttribute("aria-activedescendant", "search-result-4");
  await page.keyboard.press("ArrowUp");
  await page.keyboard.press("ArrowUp");
  await page.keyboard.press("ArrowUp");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(`${earlyPath}#early-ew-not-common-bread`);
  await expect(page.locator(dialog)).not.toHaveAttribute("data-open");
});

test("the pointer selects the row it is over, and a click opens it", async ({ page }) => {
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "carne");
  await page.locator(options).nth(2).hover();
  await expect(page.locator(options).nth(2)).toHaveAttribute("aria-selected", "true");
  await expect(page.locator(options).nth(0)).toHaveAttribute("aria-selected", "false");
  await page.locator(options).nth(2).click();
  await expect(page).toHaveURL(`${earlyPath}#early-ew-augustine-figure`);
});

test("a witness result lands on its entry on the early Christians page, in view and not hidden", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "Marción");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(`${earlyPath}#early-ew-figure`);
  const entry = page.locator("#early-ew-figure");
  const top = await landingTop(page);
  await expect
    .poll(async () => Math.abs((await entry.boundingBox())!.y - top), { timeout: 5000 })
    .toBeLessThanOrEqual(40);
  await expect.poll(() => entry.evaluate((node) => getComputedStyle(node).opacity)).toBe("1");
});

test("arriving from a page whose switcher changes the scroll offset still lands at the same place", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  for (const from of [traditionPath, "/es/doctrinas/eucaristia"]) {
    await page.goto(from);
    await openSearch(page);
    await search(page, "Marción");
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(`${earlyPath}#early-ew-figure`);
    const top = await landingTop(page);
    await expect
      .poll(async () => Math.abs((await page.locator("#early-ew-figure").boundingBox())!.y - top), { timeout: 5000 })
      .toBeLessThanOrEqual(1);
  }
});

test("recents: the last four results opened, newest first, saved in this browser", async ({ page }) => {
  await page.goto(earlyPath);
  for (const query of ["Esmirniotas", "Apología", "doctrina cristiana", "herejías", "Marción"]) {
    await openSearch(page);
    await search(page, query);
    await expect(page.locator(options)).not.toHaveCount(0);
    await page.keyboard.press("Enter");
    await expect(page.locator(dialog)).not.toHaveAttribute("data-open");
  }
  await openSearch(page);
  await expect(page.locator(dialog)).toContainText("Recientes");
  await expect
    .poll(() => titles(page))
    .toEqual([
      "Contra Marción IV.40",
      "Contra las herejías IV.18.5",
      "Sobre la doctrina cristiana III.16.24",
      "Primera Apología 66",
    ]);
  const stored = await page.evaluate((key) => localStorage.getItem(key), storageKey);
  expect(stored!.split("\n")).toHaveLength(4);
  await page.reload();
  await openSearch(page);
  await expect(page.locator(options)).toHaveCount(4);
});

test("recents: opening the same result again moves it to the top without repeating it", async ({ page }) => {
  await page.addInitScript((key) => {
    if (!localStorage.getItem(key)) localStorage.setItem(key, "doctrine:eucharist\nearly:eucharist");
  }, storageKey);
  await page.goto(earlyPath);
  await openSearch(page);
  await expect.poll(() => titles(page)).toEqual(["La Eucaristía", "Lo que escribieron los primeros cristianos"]);
  await search(page, "primeros cristianos");
  await page.keyboard.press("Enter");
  await openSearch(page);
  await expect.poll(() => titles(page)).toEqual(["Lo que escribieron los primeros cristianos", "La Eucaristía"]);
});

test("a recent that no longer exists in the index is skipped", async ({ page }) => {
  await page.addInitScript((key) => localStorage.setItem(key, "gone:1\ndoctrine:eucharist"), storageKey);
  await page.goto(traditionPath);
  await openSearch(page);
  await expect.poll(() => titles(page)).toEqual(["La Eucaristía"]);
});

test("Tab and Shift+Tab keep the focus in the input", async ({ page }) => {
  await page.goto(traditionPath);
  await openSearch(page);
  await page.keyboard.press("Tab");
  await expect(page.locator(input)).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(page.locator(input)).toBeFocused();
});

test("Esc closes the search first and then the citation window under it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const windowPanel = page.locator("[role=dialog][aria-labelledby=citation-window-kind]");
  await page.locator("main [aria-haspopup]").first().click();
  await expect(windowPanel).toHaveAttribute("data-open", "true");
  await page.keyboard.press("Control+k");
  await expect(page.locator(dialog)).toHaveAttribute("data-open", "true");
  await page.keyboard.press("Escape");
  await expect(page.locator(dialog)).not.toHaveAttribute("data-open");
  await expect(windowPanel).toHaveAttribute("data-open", "true");
  await page.keyboard.press("Escape");
  await expect(windowPanel).not.toHaveAttribute("data-open");
});

test("while open the page does not scroll and the layout does not move; closed, it scrolls again", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const before = await page.evaluate(() => document.body.getBoundingClientRect().width);
  await openSearch(page);
  await expect(page.locator("html")).toHaveClass(/scroll-locked-root/);
  expect(await page.evaluate(() => document.body.getBoundingClientRect().width)).toBeCloseTo(before, 0);
  await page.mouse.move(700, 600);
  await page.mouse.wheel(0, 900);
  await page.waitForTimeout(500);
  expect(await page.evaluate(() => scrollY)).toBe(0);
  await page.keyboard.press("Escape");
  await expect(page.locator("html")).not.toHaveClass(/scroll-locked-root/);
  await page.mouse.wheel(0, 900);
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(100);
});

test("a long list of results scrolls inside the box and the wheel does not move the page", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 420 });
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "la");
  const list = page.locator(`${dialog} [role=listbox]`);
  await expect.poll(() => page.locator(options).count()).toBe(8);
  const scrolls = await list.evaluate((node) => node.scrollHeight > node.clientHeight);
  expect(scrolls).toBe(true);
  await page.mouse.move(700, 250);
  await page.mouse.wheel(0, 300);
  await expect.poll(() => list.evaluate((node) => node.scrollTop)).toBeGreaterThan(50);
  expect(await page.evaluate(() => scrollY)).toBe(0);
});

test("opening: scrim and box fade in 200 ms while the box rises 6 px, then nothing keeps running", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await page.locator(trigger).hover();
  const frames = sample(page, 700);
  await page.waitForTimeout(100);
  await page.locator(trigger).click();
  const recorded = await frames;
  const started = recorded.find((frame) => frame.opacity > 0.01)!;
  const opening = recorded.filter((frame) => frame.t >= started.t);
  const full = opening.find((frame) => frame.opacity >= 0.99)!;
  expect(full.t - started.t).toBeGreaterThan(140);
  expect(full.t - started.t).toBeLessThan(330);
  opening.forEach((frame, index) => {
    if (index > 0) {
      expect(frame.opacity).toBeGreaterThanOrEqual(opening[index - 1]!.opacity - 0.001);
      expect(frame.y).toBeLessThanOrEqual(opening[index - 1]!.y + 0.01);
    }
  });
  expect(opening[0]!.y).toBeGreaterThan(3.5);
  expect(opening[opening.length - 1]!.y).toBe(0);
  expect(opening.some((frame) => frame.opacity > 0.2 && frame.opacity < 0.9)).toBe(true);
  await page.waitForTimeout(300);
  expect(await runningInOverlay(page)).toBe(0);
});

test("closing: the same fade out, then the overlay is hidden and unreachable", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await openSearch(page);
  await page.waitForTimeout(400);
  const frames = sample(page, 600);
  await page.waitForTimeout(80);
  await page.keyboard.press("Escape");
  const recorded = await frames;
  const closing = recorded.filter((frame) => frame.opacity < 0.999);
  expect(closing.some((frame) => frame.opacity > 0.2 && frame.opacity < 0.9)).toBe(true);
  expect(recorded[recorded.length - 1]!.opacity).toBe(0);
  await expect(page.locator(wrapper)).toHaveCSS("visibility", "hidden");
  await expect(page.locator(wrapper)).toHaveCSS("pointer-events", "none");
});

test("closing in the middle of opening, and opening in the middle of closing, end consistent", async ({ page }) => {
  await page.goto(traditionPath);
  await page.locator(trigger).click();
  await page.waitForTimeout(80);
  await page.keyboard.press("Escape");
  await expect(page.locator(dialog)).not.toHaveAttribute("data-open");
  await page.locator(trigger).click();
  await page.waitForTimeout(120);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(60);
  await page.locator(trigger).click();
  await page.waitForTimeout(500);
  await expect(page.locator(wrapper)).toHaveCSS("opacity", "1");
  await expect(page.locator(wrapper)).toHaveCSS("visibility", "visible");
  await expect(page.locator(input)).toBeFocused();
  expect(await runningInOverlay(page)).toBe(0);
});

test("seven quick toggles end in the state their parity says", async ({ page }) => {
  await page.goto(traditionPath);
  for (let step = 0; step < 7; step += 1) {
    await page.keyboard.press(step % 2 === 0 ? "Control+k" : "Escape");
    await page.waitForTimeout(40);
  }
  await page.waitForTimeout(500);
  await expect(page.locator(dialog)).toHaveAttribute("data-open", "true");
  await expect(page.locator(wrapper)).toHaveCSS("opacity", "1");
  expect(await runningInOverlay(page)).toBe(0);
});

test("the rows enter like every list: 420 ms, 40 ms apart, the first with no delay", async ({ page }) => {
  await page.addInitScript(
    (key) => localStorage.setItem(key, "doctrine:eucharist\nearly:eucharist\ntradition:eucharist/catholic"),
    storageKey,
  );
  await page.goto(traditionPath);
  await page.locator(trigger).click();
  const timing = await page.evaluate(() =>
    [...document.querySelectorAll("[data-search-dialog] [role=listbox] > li")].map((item) => {
      const animation = item.getAnimations().find((candidate) => candidate.id === "flip");
      const computed = animation?.effect?.getComputedTiming();
      return computed ? [Number(computed.delay), Number(computed.duration)] : null;
    }),
  );
  expect(timing).toEqual([
    [0, 420],
    [40, 420],
    [80, 420],
    [120, 420],
  ]);
});

test("typing a narrower query fades the leaving row as a ghost and leaves nothing running", async ({ page }) => {
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "carne");
  await expect(page.locator(options)).toHaveCount(5);
  await page.waitForTimeout(700);
  const seen = page.evaluate(
    () =>
      new Promise<number>((resolve) => {
        const ghosts = document.querySelector("[data-search-dialog] .flip-ghosts") as HTMLElement;
        const observer = new MutationObserver(() => {
          if (ghosts.children.length > 0) {
            resolve(ghosts.children.length);
            observer.disconnect();
          }
        });
        observer.observe(ghosts, { childList: true });
        setTimeout(() => resolve(0), 1500);
      }),
  );
  await search(page, "carne salvador");
  expect(await seen).toBe(3);
  await expect(page.locator(options)).toHaveCount(2);
  await page.waitForTimeout(900);
  const left = await page.evaluate(() => {
    const box = document.querySelector("[data-search-dialog]")!;
    return {
      ghosts: box.querySelector(".flip-ghosts")!.children.length,
      animations: box.getAnimations({ subtree: true }).filter((a) => a.id === "flip").length,
    };
  });
  expect(left).toEqual({ ghosts: 0, animations: 0 });
});

test("rows that come back rise in, after the first 120 ms", async ({ page }) => {
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "carne salvador");
  await expect(page.locator(options)).toHaveCount(2);
  await page.waitForTimeout(700);
  await search(page, "carne");
  const timing = await page.evaluate(() => {
    const items = [...document.querySelectorAll("[data-search-dialog] [role=option]")];
    return items.map((item) => {
      const animation = item.getAnimations().find((candidate) => candidate.id === "flip");
      const computed = animation?.effect?.getComputedTiming();
      return computed ? [Number(computed.delay), Number(computed.duration)] : null;
    });
  });
  expect(timing.filter(Boolean)).toEqual([
    [120, 420],
    [160, 420],
    [200, 420],
  ]);
});

test("under reduced motion it opens at once and no row animates", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(traditionPath);
  await page.locator(trigger).click();
  await expect(page.locator(wrapper)).toHaveCSS("opacity", "1");
  await search(page, "carne");
  await expect(page.locator(options)).toHaveCount(5);
  const animations = await page.evaluate(() => document.getAnimations().length);
  expect(animations).toBe(0);
  await page.keyboard.press("Escape");
  await expect(page.locator(wrapper)).toHaveCSS("visibility", "hidden");
  await context.close();
});

test("on touch there are no keyboard hints, and the trigger is at least 44 px", async ({ browser }) => {
  const context = await browser.newContext({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 800 } });
  const page = await context.newPage();
  await page.goto(traditionPath);
  const box = await page.locator(trigger).boundingBox();
  expect(box!.width).toBeGreaterThanOrEqual(44);
  expect(box!.height).toBeGreaterThanOrEqual(44);
  await page.locator(trigger).tap();
  await expect(page.locator(dialog)).toHaveAttribute("data-open", "true");
  const hints = page.locator(`${dialog} div`).filter({ hasText: "para moverse" }).last();
  await expect(hints).toHaveCSS("display", "none");
  await context.close();
});

test("the search is on every page, in the language of the page", async ({ page }) => {
  for (const path of ["/es/doctrinas/eucaristia", earlyPath, "/es/doctrinas/eucaristia/catolica/objeciones/ob-3"]) {
    await page.goto(path);
    await expect(page.locator(trigger)).toHaveCount(1);
  }
  await page.goto("/en");
  await expect(page.locator(trigger)).toHaveAttribute("aria-label", "Search");
  await page.locator(trigger).click();
  const english = page.locator("[data-search-dialog]");
  await expect(english.locator("[role=combobox]")).toHaveAttribute(
    "placeholder",
    "Search doctrines, verses, Fathers, words",
  );
  await english.locator("[role=combobox]").fill("zzz");
  await expect(english).toContainText("Nothing matches «zzz». Try a shorter word.");
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: the box stays inside the screen and the page does not overflow @webkit`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.goto(traditionPath);
    await page.locator(trigger).click();
    await search(page, "carne");
    await expect(page.locator(options)).toHaveCount(5);
    const box = await page.locator(dialog).boundingBox();
    expect(box!.x).toBeGreaterThanOrEqual(15.5);
    expect(box!.x + box!.width).toBeLessThanOrEqual(width - 15.5);
    expect(box!.width).toBeLessThanOrEqual(620);
    expect(await horizontalOverflow(page)).toBe(0);
    const rows = await page
      .locator(options)
      .evaluateAll((items) => items.map((item) => item.scrollWidth - item.clientWidth));
    expect(rows.every((extra) => extra <= 0)).toBe(true);
  });
}

test("no console errors while searching, picking and going back", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("Failed to load resource")) errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "carne");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/primeros-cristianos#early-/);
  await page.goBack();
  await expect(page).toHaveURL(traditionPath);
  expect(errors).toEqual([]);
});

test("the timeline page is found by its name and by its lede", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "línea de tiempo");
  await expect(page.locator(options).first()).toContainText("Línea de tiempo");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/linea-de-tiempo$/);
});

test("councils and movements of the timeline are found and land on the line with the item chosen", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await openSearch(page);
  await search(page, "Nicea");
  await expect.poll(() => titles(page)).toContain("Primer Concilio de Nicea");
  await expect(page.locator(options).filter({ hasText: "Primer Concilio de Nicea" }).first()).toContainText(
    "Historia / Concilios",
  );
  await search(page, "arrianismo");
  await expect.poll(() => titles(page)).toContain("Arrianismo");
  await page.locator(options).filter({ hasText: "Arrianismo" }).first().click();
  await expect(page).toHaveURL(/linea-de-tiempo#arianism$/);
  await expect(page.locator('[data-scroller] button[data-entry="arianism"]')).toHaveAttribute("aria-pressed", "true");
});
