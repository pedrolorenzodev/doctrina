import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const percent = (year: number) => ((year - 1) / 2025) * 100;
const track = "[data-years-track]";
const win = "[data-window]";
const status = "#years p[aria-live]";

async function open(page: Page, width = 1440) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto("/es");
  await page.locator(track).scrollIntoViewIfNeeded();
}

async function xOf(page: Page, year: number) {
  const box = (await page.locator(track).boundingBox())!;
  return box.x + (box.width * percent(year)) / 100;
}

async function trackY(page: Page, offset: number) {
  return (await page.locator(track).boundingBox())!.y + offset;
}

async function dragYears(page: Page, fromX: number, toX: number, y: number) {
  await page.mouse.move(fromX, y);
  await page.mouse.down();
  await page.mouse.move(fromX + (toX - fromX) / 2, y, { steps: 4 });
  await page.mouse.move(toX, y, { steps: 4 });
  await page.mouse.up();
}

test("starts on 300–460 with the proposal's marks, counts and status", async ({ page }) => {
  await open(page);
  await expect(page.locator(`${track} > span.text-accent`)).toHaveText("300–460");
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 300 al 460");
  await expect(page.locator("[data-father]")).toHaveCount(56);
  await expect(page.locator("[data-council]")).toHaveCount(41);
  await expect(page.locator("[data-seven]")).toHaveCount(7);
  await expect(page.locator("[data-division]")).toHaveCount(10);
  await expect(page.locator("[data-father][data-in]")).toHaveCount(26);
  await expect(page.locator("[data-council][data-in]")).toHaveCount(12);
  await expect(page.locator("[data-division][data-in]")).toHaveCount(2);
  await expect(page.locator(status)).toHaveText(
    "Del año 300 al 460: 26 Padres y escritores, 12 concilios y 2 divisiones. Arrastra la ventana para elegir otros años.",
  );
  const height = (await page.locator(track).boundingBox())!.height;
  expect(height).toBe(196);
});

test("dragging the window moves it in steps of 10 years and keeps its width", async ({ page }) => {
  await open(page);
  const y = await trackY(page, 60);
  await dragYears(page, await xOf(page, 380), await xOf(page, 580), y);
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 500 al 660");
  await expect(page.locator(status)).toContainText("Del año 500 al 660:");
});

test("the handles resize the window, never under 40 years on the desktop", async ({ page }) => {
  await open(page);
  const y = await trackY(page, 20 + 73);
  await dragYears(page, await xOf(page, 300), await xOf(page, 200), y);
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 200 al 460");
  await dragYears(page, await xOf(page, 460), await xOf(page, 100), y);
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 200 al 240");
});

test("dragging on the track draws a new window; a tap centres the window there", async ({ page }) => {
  await open(page);
  const y = await trackY(page, 60);
  await dragYears(page, await xOf(page, 1500), await xOf(page, 1600), y);
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 1500 al 1600");
  await page.mouse.click(await xOf(page, 1000), y);
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 950 al 1050");
});

test("an empty stretch of years says so", async ({ page }) => {
  await open(page);
  const y = await trackY(page, 60);
  await dragYears(page, await xOf(page, 1700), await xOf(page, 1760), y);
  await expect(page.locator(status)).toHaveText(
    "Nada registrado entre los años 1700 y 1760. Arrastra la ventana para elegir otros años.",
  );
});

test("the window is a slider: arrows move it by 10 years, Shift by 50, clamped at the ends", async ({ page }) => {
  await open(page);
  await page.locator(win).focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 310 al 470");
  await page.keyboard.press("Shift+ArrowLeft");
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 260 al 420");
  for (let i = 0; i < 8; i++) await page.keyboard.press("Shift+ArrowLeft");
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 1 al 161");
  await expect(page.locator(status)).toContainText("Del año 1 al 161:");
});

test("the status follows the window while the drag is still going on", async ({ page }) => {
  await open(page);
  const y = await trackY(page, 60);
  await page.mouse.move(await xOf(page, 380), y);
  await page.mouse.down();
  await page.mouse.move(await xOf(page, 680), y, { steps: 6 });
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 600 al 760");
  await expect(page.locator(status)).toContainText("Del año 600 al 760:");
  await page.mouse.up();
});

test("marks change state with a 200 ms transition", async ({ page }) => {
  await open(page);
  await page.evaluate(() => {
    const seen: string[] = [];
    (window as unknown as { seen: string[] }).seen = seen;
    document.addEventListener("transitionrun", (event) => {
      const target = event.target as HTMLElement;
      if (target.dataset.father === "methodius-of-olympus") seen.push(event.propertyName);
    });
  });
  await page.locator(win).focus();
  await page.keyboard.press("Shift+ArrowRight");
  await expect
    .poll(() => page.evaluate(() => (window as unknown as { seen: string[] }).seen.sort().join(",")))
    .toBe("background-color,opacity");
  const style = await page
    .locator("[data-father='methodius-of-olympus']")
    .evaluate((bar) => [getComputedStyle(bar).transitionDuration, getComputedStyle(bar).transitionTimingFunction]);
  expect(style).toEqual(["0.2s, 0.2s", "cubic-bezier(0.25, 0.1, 0.25, 1), cubic-bezier(0.25, 0.1, 0.25, 1)"]);
});

test("under reduced motion the marks change at once", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto("/es");
  await page.locator(win).focus();
  await page.keyboard.press("Shift+ArrowRight");
  expect(await page.locator("[data-father='methodius-of-olympus']").evaluate((e) => e.getAnimations().length)).toBe(0);
  await context.close();
});

test("on the phone the row labels hide, the window can be dragged by touch and nothing overflows", async ({
  browser,
}) => {
  const context = await browser.newContext({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto("/es");
  await page.locator(track).scrollIntoViewIfNeeded();
  await expect(page.locator("#years .years-grid > div").first()).toBeHidden();
  expect((await page.locator(track).boundingBox())!.width).toBe(358);
  const session = await context.newCDPSession(page);
  const box = (await page.locator(track).boundingBox())!;
  const x = (year: number) => box.x + (box.width * percent(year)) / 100;
  const y = box.y + 60;
  const touch = (type: "touchStart" | "touchMove" | "touchEnd", px: number) =>
    session.send("Input.dispatchTouchEvent", {
      type,
      touchPoints: type === "touchEnd" ? [] : [{ x: px, y }],
    });
  await touch("touchStart", x(380));
  for (const year of [420, 480, 560, 640, 680]) await touch("touchMove", x(year));
  await touch("touchEnd", x(680));
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 600 al 760");
  const handle = (await page.locator("[data-h='l']").boundingBox())!;
  const hit = await page.evaluate(
    ([hx, hy]) => document.elementFromPoint(hx!, hy!)?.closest("[data-h]")?.getAttribute("data-h") ?? null,
    [handle.x - 20, handle.y + handle.height / 2],
  );
  expect(hit).toBe("l");
  expect(await horizontalOverflow(page)).toBe(0);
  await context.close();
});

const rows = (page: Page, group: string) => page.locator(`[data-k='g-${group}'] li`);

test("the lists show 8 rows per group with the proposal's texts and «Mostrar N más»", async ({ page }) => {
  await open(page);
  await expect(page.locator("#years .years-lists h3")).toHaveText(["Padres y escritores", "Concilios", "Divisiones"]);
  await expect(rows(page, "fathers")).toHaveCount(8);
  await expect(rows(page, "fathers").first()).toHaveText(
    /Metodio de Olimpo\s*murió c\. 311\s*Obispo y escritor \(Licia\)/,
  );
  await expect(rows(page, "fathers").first().locator("a")).toHaveAttribute(
    "href",
    "/es/historia/padres/methodius-of-olympus",
  );
  await expect(page.locator("[data-k='g-fathers'] button")).toHaveText("Mostrar 18 más");
  await expect(rows(page, "councils")).toHaveCount(8);
  await expect(page.locator("[data-k='g-councils'] button")).toHaveText("Mostrar 4 más");
  await expect(rows(page, "councils").nth(2)).toContainText("Lo reciben como concilio ecuménico");
  await expect(rows(page, "divisions")).toHaveText([
    /Separación de la Iglesia del Oriente\s*431–486/,
    /Cisma calcedoniano/,
  ]);
  await expect(page.locator("[data-k='g-divisions'] button")).toHaveCount(0);
});

test("«Mostrar más» opens the group with the FLIP entrance and «Mostrar menos» leaves ghosts", async ({ page }) => {
  await open(page);
  const more = page.locator("[data-k='g-fathers'] button");
  const entering = await page.evaluate(() => {
    document.querySelector<HTMLButtonElement>("[data-k='g-fathers'] button")!.click();
    const ninth = document.querySelectorAll("[data-k='g-fathers'] li")[8]!;
    return ninth.getAnimations().map((a) => [a.effect!.getTiming().duration, a.effect!.getTiming().delay]);
  });
  expect(entering).toEqual([[420, 120]]);
  await expect(rows(page, "fathers")).toHaveCount(26);
  await expect(more).toHaveText("Mostrar menos");
  await expect(more).toHaveAttribute("aria-expanded", "true");
  const ghostsNow = await page.evaluate(() => {
    document.querySelector<HTMLButtonElement>("[data-k='g-fathers'] button")!.click();
    return document.querySelectorAll("#years .years-lists + div > *").length;
  });
  expect(ghostsNow).toBe(18);
  await expect(rows(page, "fathers")).toHaveCount(8);
  await expect(page.locator("#years .years-lists + div > *")).toHaveCount(0);
});

test("moving the window slides kept rows, fades the others and keeps «Mostrar más» open", async ({ page }) => {
  await open(page);
  await page.locator("[data-k='g-councils'] button").click();
  await expect(rows(page, "councils")).toHaveCount(12);
  await page.locator(win).focus();
  const frames = await page.evaluate(
    () =>
      new Promise<number[]>((resolve) => {
        const ring = document.querySelector("[data-window]") as HTMLElement;
        ring.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", shiftKey: true, bubbles: true }));
        const tops: number[] = [];
        const start = performance.now();
        const tick = () => {
          const row = document.querySelector("[data-k='c-ephesus-431']");
          if (row) tops.push(row.getBoundingClientRect().top);
          if (performance.now() - start < 800) requestAnimationFrame(tick);
          else resolve(tops);
        };
        requestAnimationFrame(tick);
      }),
  );
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 350 al 510");
  await expect(rows(page, "councils")).toHaveCount(9);
  const total = Math.abs(frames.at(-1)! - frames[0]!);
  expect(total).toBeGreaterThan(40);
  const steps = frames.slice(1).map((top, i) => Math.abs(top - frames[i]!));
  expect(Math.max(...steps)).toBeLessThan(total * 0.35);
  const direction = Math.sign(frames.at(-1)! - frames[0]!);
  expect(frames.slice(1).every((top, i) => (top - frames[i]!) * direction >= -0.5)).toBe(true);
});

test("a window without Fathers says so and keeps the columns", async ({ page }) => {
  await open(page);
  const y = await trackY(page, 60);
  await dragYears(page, await xOf(page, 1500), await xOf(page, 1560), y);
  await expect(page.locator("[data-k='none-f']")).toHaveText("Ningún Padre de estos años.");
  await expect(page.locator("#years .years-lists h3")).toHaveText(["Concilios", "Divisiones"]);
});

test("under reduced motion the lists change with no animation and no ghosts", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto("/es");
  const state = await page.evaluate(() => {
    document.querySelector<HTMLButtonElement>("[data-k='g-fathers'] button")!.click();
    return {
      ghosts: document.querySelectorAll("#years .years-lists + div > *").length,
      animations: document.querySelector("#years .years-lists")!.getAnimations({ subtree: true }).length,
    };
  });
  expect(state).toEqual({ ghosts: 0, animations: 0 });
  await context.close();
});

const tip = "[data-years-tip]";

async function hoverYear(page: Page, year: number, top: number) {
  await page.mouse.move(await xOf(page, year), await trackY(page, top));
}

test("hovering a mark lights it, labels it and lights its row", async ({ page }) => {
  await open(page);
  await hoverYear(page, 325, 133);
  await expect(page.locator("[data-council='nicaea-1']")).toHaveAttribute("data-hot", "true");
  await expect(page.locator(tip)).toHaveText("Primer Concilio de Nicea, 325");
  await expect(page.locator("[data-k='c-nicaea-1'] a")).toHaveAttribute("data-hot", "true");
  const animation = await page
    .locator(tip)
    .evaluate((element) => element.getAnimations().map((a) => a.effect!.getTiming().duration));
  expect(animation.every((duration) => duration === 200)).toBe(true);
  await page.mouse.move(10, 10);
  await expect(page.locator(tip)).toHaveCount(0);
  await expect(page.locator("[data-hot]")).toHaveCount(0);
});

test("hovering or focusing a row lights its mark on the ruler", async ({ page }) => {
  await open(page);
  await page.locator("[data-k='f-eusebius-of-caesarea'] a").hover();
  await expect(page.locator("[data-father='eusebius-of-caesarea']")).toHaveAttribute("data-hot", "true");
  await expect(page.locator(tip)).toHaveText("Eusebio de Cesarea, c. 263–339");
  await page.mouse.move(10, 10);
  await expect(page.locator(tip)).toHaveCount(0);
  await page.locator("[data-k='d-church-of-the-east'] a").focus();
  await expect(page.locator("[data-division='church-of-the-east']")).toHaveAttribute("data-hot", "true");
  await page.locator("[data-k='d-church-of-the-east'] a").blur();
  await expect(page.locator(tip)).toHaveCount(0);
});

test("labels stay inside the page, at the ends and on a narrow window", async ({ page }) => {
  for (const width of [1440, 360]) {
    await open(page, width);
    for (const year of [49, 287, 1962]) {
      const top = year === 287 ? 30 : 133;
      await hoverYear(page, year, top);
      await expect(page.locator(tip)).toHaveCount(1);
      const box = (await page.locator(tip).boundingBox())!;
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(width);
    }
  }
});

test("a second change in the middle of the list's motion continues from where the rows are", async ({ page }) => {
  await open(page);
  const result = await page.evaluate(
    () =>
      new Promise<{ before: number; after: number; settled: number }>((resolve) => {
        const slider = document.querySelector("[data-window]") as HTMLElement;
        slider.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", shiftKey: true, bubbles: true }));
        const wait = () => {
          const row = document.querySelector("[data-k='f-hilary-of-poitiers']") as HTMLElement;
          const moving = row.getAnimations().find((animation) => animation.id === "keyed-flip");
          const time = Number(moving?.currentTime ?? -1);
          if (time < 60 || time > 250) {
            requestAnimationFrame(wait);
            return;
          }
          const before = row.getBoundingClientRect().top;
          document.querySelector<HTMLButtonElement>("[data-k='g-fathers'] button")!.click();
          const after = row.getBoundingClientRect().top;
          setTimeout(() => resolve({ before, after, settled: row.getBoundingClientRect().top }), 700);
        };
        requestAnimationFrame(wait);
      }),
  );
  expect(Math.abs(result.settled - result.before)).toBeGreaterThan(5);
  expect(Math.abs(result.after - result.before)).toBeLessThan(1);
});

test("a label over the window's years hides them while it shows", async ({ page }) => {
  await open(page);
  const years = page.locator(`${track} > span.text-accent`);
  const bar = (await page.locator("[data-father='augustine-of-hippo']").boundingBox())!;
  await page.mouse.move(bar.x + bar.width / 2, bar.y + 1);
  await expect(page.locator(tip)).toContainText("Agustín de Hipona");
  await expect(years).toHaveAttribute("data-covered", "true");
  await expect.poll(() => years.evaluate((element) => getComputedStyle(element).opacity)).toBe("0");
  await hoverYear(page, 1215, 133);
  await expect(years).not.toHaveAttribute("data-covered", "true");
});

test("dragging hides the label, and a click on a mark still centres the window there", async ({ page }) => {
  await open(page);
  await hoverYear(page, 1215, 133);
  await expect(page.locator(tip)).toHaveCount(1);
  await page.mouse.down();
  await expect(page.locator(tip)).toHaveCount(0);
  await page.mouse.up();
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 1140 al 1300");
});

test("touch shows no hover on the ruler", async ({ browser }) => {
  const context = await browser.newContext({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto("/es");
  await page.locator(track).scrollIntoViewIfNeeded();
  const box = (await page.locator(track).boundingBox())!;
  await page.touchscreen.tap(box.x + (box.width * percent(1215)) / 100, box.y + 133);
  await expect(page.locator(win)).toHaveAttribute("aria-valuetext", "Del año 1140 al 1300");
  await expect(page.locator(tip)).toHaveCount(0);
  await context.close();
});
