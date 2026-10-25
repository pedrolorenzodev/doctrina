import { expect, test, type Page } from "@playwright/test";
import { eucharistDoctrine } from "../src/content/pages/eucharist/doctrine.es";
import { horizontalOverflow } from "./helpers";

const path = "/es/doctrinas/eucaristia";
const witnesses = eucharistDoctrine.witnesses.items;
const stage = "[data-lr-stage]";
const marker = (id: string) => `[data-lr-marker][data-id="${id}"]`;
const row = (id: string) => `#w-${id}`;
const status = "[data-lr-wrap] [role=status]";

const percent = (year: number) => ((year - 1) / 799) * 100;

async function open(page: Page, width = 1440) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(path);
  await page.evaluate(() => document.querySelector("#witnesses")!.scrollIntoView());
  await page.waitForTimeout(600);
}

async function trackBox(page: Page) {
  const box = await page.locator('[data-lr-stage] [role="group"]').boundingBox();
  if (!box) throw new Error("no track");
  return box;
}

async function pointerAtYear(page: Page, year: number, dy = 30, dx = 0) {
  const box = await trackBox(page);
  await page.mouse.move(box.x + (box.width * percent(year)) / 100 + dx, box.y + dy);
}

async function readAt(page: Page, id: string) {
  await page.evaluate((target) => {
    const wrap = document.querySelector("[data-lr-wrap]") as HTMLElement;
    const top = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--spacing-top"));
    const item = document.getElementById(`w-${target}`)!.getBoundingClientRect();
    scrollBy(0, item.top - top - wrap.offsetHeight - 6);
  }, id);
  await page.waitForTimeout(700);
}

function lift(page: Page, id: string): Promise<number> {
  return page
    .locator(marker(id))
    .evaluate((node) => parseFloat((node as HTMLElement).style.getPropertyValue("--ly")) || 0);
}

function stem(page: Page, id: string): Promise<number> {
  return page
    .locator(marker(id))
    .evaluate((node) => parseFloat((node as HTMLElement).style.getPropertyValue("--sh")) || 0);
}

test("the section: title, subtitle, twelve markers, twelve rows in date order, status line", async ({ page }) => {
  await open(page);
  await expect(page.locator("#witnesses h2")).toHaveText("Lo que escribieron los primeros cristianos");
  await expect(page.locator("#witnesses > div > p").first()).toContainText("Esta sección es neutral");
  await expect(page.locator("[data-lr-marker]")).toHaveCount(12);
  await expect(page.locator("#witnesses ol li")).toHaveCount(12);
  await expect(page.locator(status)).toHaveText("12 testigos. Arrastra sobre la regla para elegir años.");
  const dates = await page.locator("#witnesses ol li > div:first-child").allTextContents();
  expect(dates[0]).toBe("c. 50–120");
  expect(dates[11]).toBe("c. 743");
  await expect(page.locator("#witnesses ol li").nth(1)).toContainText("Ignacio de Antioquía");
  await expect(page.locator("#witnesses ol li").nth(1).locator("[aria-haspopup]")).toHaveText(
    "Carta a los Esmirniotas 7.1",
  );
});

test("the ruler axis: ticks every 50 years, labels every 100, odd hundreds hidden on phones", async ({ page }) => {
  await open(page);
  const labels = await page.locator('[data-lr-stage] [role="group"] > div > div:nth-child(2)').allTextContents();
  expect(labels).toEqual(["1", "100", "200", "300", "400", "500", "600", "700", "800"]);
  await open(page, 390);
  const visible = await page
    .locator('[data-lr-stage] [role="group"] > div > div:nth-child(2)')
    .evaluateAll((nodes) =>
      nodes.filter((node) => (node as HTMLElement).offsetParent !== null).map((node) => node.textContent),
    );
  expect(visible).toEqual(["1", "200", "400", "600", "800"]);
});

test("hovering a marker raises it 22 px on an accent stem and shows «Nombre, fecha»", async ({ page }) => {
  await open(page);
  await pointerAtYear(page, 107);
  await expect(page.locator(`${marker("ew-flesh")}[data-hot]`)).toHaveCount(1);
  await expect.poll(() => lift(page, "ew-flesh")).toBe(-22);
  expect(await stem(page, "ew-flesh")).toBe(22);
  await expect(page.locator(`${marker("ew-flesh")} span:last-child`).last()).toBeVisible();
  const label = await page.locator(`${marker("ew-flesh")} .lr-label`).evaluate((node) => ({
    text: node.textContent,
    opacity: getComputedStyle(node).opacity,
  }));
  expect(label.text).toBe("Ignacio de Antioquía, c. 107–110");
  expect(label.opacity).toBe("1");
  await expect(page.locator(row("ew-flesh"))).toHaveAttribute("data-hot", "");
});

test("the neighbours rise with the wave, the far ones stay on the axis, nothing goes below it", async ({ page }) => {
  await open(page);
  await pointerAtYear(page, 150);
  await expect.poll(() => lift(page, "ew-not-common-bread")).toBe(-22);
  const track = await trackBox(page);
  for (const witness of witnesses) {
    const hovered = witnesses.find((item) => item.id === "ew-not-common-bread")!;
    const distance = ((Math.abs(percent(witness.date.year) - percent(hovered.date.year)) / 100) * track.width) / 140;
    const expected =
      witness.id === hovered.id ? -22 : distance < 1 ? Math.round(-14 * (0.5 + 0.5 * Math.cos(Math.PI * distance))) : 0;
    await expect.poll(() => lift(page, witness.id), { message: witness.id }).toBe(expected);
    expect(await stem(page, witness.id)).toBeGreaterThanOrEqual(0);
  }
});

test("the lift is a 200 ms tween that goes back from wherever it is, at the same speed", async ({ page }) => {
  await open(page);
  const box = await trackBox(page);
  const x = box.x + (box.width * percent(107)) / 100;
  const frames = await page.evaluate(
    ({ clientX, clientY }) =>
      new Promise<[number, number][]>((resolve) => {
        const node = document.querySelector('[data-lr-marker][data-id="ew-flesh"]') as HTMLElement;
        const stage = document.querySelector("[data-lr-stage]") as HTMLElement;
        const out: [number, number][] = [];
        const start = performance.now();
        const fire = (type: string) =>
          stage.dispatchEvent(new PointerEvent(type, { bubbles: true, clientX, clientY, pointerType: "mouse" }));
        setTimeout(() => fire("pointermove"), 50);
        setTimeout(() => fire("pointerout"), 50 + 90);
        const tick = () => {
          out.push([performance.now() - start, parseFloat(node.style.getPropertyValue("--ly")) || 0]);
          if (performance.now() - start < 900) requestAnimationFrame(tick);
          else resolve(out);
        };
        tick();
      }),
    { clientX: x, clientY: box.y + 30 },
  );
  const bottom = Math.min(...frames.map(([, value]) => value));
  expect(bottom).toBeLessThan(-3);
  expect(bottom).toBeGreaterThan(-22);
  expect(frames[frames.length - 1]![1]).toBe(0);
  const lowest = frames.findIndex(([, value]) => value === bottom);
  frames.slice(lowest + 1).forEach(([, value], index) => {
    expect(value).toBeGreaterThanOrEqual(frames[lowest + index]![1] - 0.01);
  });
});

test("the wave is centred on the snapped witness: small moves inside its zone change nothing", async ({ page }) => {
  await open(page);
  await pointerAtYear(page, 207);
  await expect(page.locator(`${marker("ew-figure")}[data-hot]`)).toHaveCount(1);
  await page.evaluate(() => {
    const changes: string[] = [];
    Object.assign(window, { hotChanges: changes });
    new MutationObserver((records) => {
      for (const record of records) if (record.attributeName === "data-hot") changes.push("change");
    }).observe(document.querySelector("[data-lr-stage]")!, {
      attributes: true,
      subtree: true,
      attributeFilter: ["data-hot"],
    });
  });
  const box = await trackBox(page);
  const centre = box.x + (box.width * percent(207)) / 100;
  for (let step = -12; step <= 12; step += 2) await page.mouse.move(centre + step, box.y + 30);
  const changes = await page.evaluate(() => (window as unknown as { hotChanges: string[] }).hotChanges);
  expect(changes).toEqual([]);
  expect(await lift(page, "ew-figure")).toBe(-22);
});

test("snapping reaches 40 px each side and lets go beyond", async ({ page }) => {
  await open(page);
  await pointerAtYear(page, 207, 30, 36);
  await expect(page.locator(`${marker("ew-figure")}[data-hot]`)).toHaveCount(1);
  await pointerAtYear(page, 207, 30, 80);
  await expect(page.locator("[data-lr-marker][data-hot]")).toHaveCount(0);
});

test("the pointer over the label area above the markers keeps the hover", async ({ page }) => {
  await open(page);
  await pointerAtYear(page, 207, 30);
  await expect(page.locator(`${marker("ew-figure")}[data-hot]`)).toHaveCount(1);
  const box = await stage_box(page);
  await page.mouse.move(box.x + (box.width * percent(207)) / 100 + 6, box.y + 4);
  await expect(page.locator(`${marker("ew-figure")}[data-hot]`)).toHaveCount(1);
});

async function stage_box(page: Page) {
  const box = await page.locator(stage).boundingBox();
  if (!box) throw new Error("no stage");
  return box;
}

test("two witnesses a few pixels apart do not flicker while the pointer sweeps past them", async ({ page }) => {
  await open(page);
  const seen: string[] = [];
  await page.evaluate(() => {
    const log: string[] = [];
    Object.assign(window, { hotLog: log });
    new MutationObserver((records) => {
      for (const record of records) {
        const element = record.target as HTMLElement;
        if (record.attributeName === "data-hot" && element.hasAttribute("data-hot")) log.push(element.dataset.id ?? "");
      }
    }).observe(document.querySelector("[data-lr-stage]")!, {
      attributes: true,
      subtree: true,
      attributeFilter: ["data-hot"],
    });
  });
  const box = await trackBox(page);
  for (let year = 120; year <= 200; year += 1) {
    await page.mouse.move(box.x + (box.width * percent(year)) / 100, box.y + 30);
  }
  seen.push(...(await page.evaluate(() => (window as unknown as { hotLog: string[] }).hotLog)));
  const unique = seen.filter((id, index) => id !== seen[index - 1]);
  expect(new Set(unique).size, unique.join(" > ")).toBe(unique.length);
  expect(unique).toEqual(expect.arrayContaining(["ew-not-common-bread", "ew-malachi-offering", "ew-two-realities"]));
});

test("the cursor becomes a pointer when a witness is snapped", async ({ page }) => {
  await open(page);
  await pointerAtYear(page, 207);
  expect(await page.locator('[data-lr-stage] [role="group"]').evaluate((node) => getComputedStyle(node).cursor)).toBe(
    "pointer",
  );
  await page.mouse.move(10, 10);
  await expect
    .poll(() => page.locator('[data-lr-stage] [role="group"]').evaluate((node) => getComputedStyle(node).cursor))
    .toBe("crosshair");
});

test("a tap on a marker jumps to its quote, which lands just under the ruler", async ({ page }) => {
  await open(page);
  await pointerAtYear(page, 396);
  await page.mouse.down();
  await page.mouse.up();
  await expect
    .poll(async () =>
      Math.round(
        await page.evaluate(() => {
          const bar = document.querySelector("[data-lr-wrap]")!.getBoundingClientRect();
          return document.getElementById("w-ew-augustine-figure")!.getBoundingClientRect().top - bar.bottom;
        }),
      ),
    )
    .toBeLessThanOrEqual(7);
});

test("dragging draws a window snapped to ten years and filters the list", async ({ page }) => {
  await open(page);
  const box = await trackBox(page);
  const y = box.y + 30;
  await page.mouse.move(box.x + (box.width * percent(100)) / 100, y);
  await page.mouse.down();
  await page.mouse.move(box.x + (box.width * percent(200)) / 100, y, { steps: 10 });
  await page.mouse.up();
  await expect(page.locator("[data-win]")).toHaveCount(1);
  await expect(page.locator(status)).toContainText("de 12 testigos, años 100 a 200");
  await expect(page.locator(`${status} button`)).toHaveText("Mostrar todos");
  const ids = await page
    .locator("#witnesses ol li")
    .evaluateAll((nodes) => nodes.map((node) => node.getAttribute("data-id")));
  expect(ids).toEqual(["ew-sacrifice", "ew-flesh", "ew-not-common-bread", "ew-malachi-offering", "ew-two-realities"]);
  await expect(page.locator(marker("ew-figure"))).toHaveAttribute("data-dim", "");
  await expect(page.locator("[data-handle=l]")).toHaveAttribute("aria-label", "Inicio del rango, año 100");
  await expect(page.locator("[data-handle=r]")).toHaveAttribute("aria-label", "Fin del rango, año 200");
});

test("the list changes with a FLIP: leaving rows fade as ghosts, and none is left running afterwards", async ({
  page,
}) => {
  await open(page);
  await page.evaluate(() => {
    const added: number[] = [];
    Object.assign(window, { ghostsAdded: added });
    new MutationObserver((records) => {
      for (const record of records) added.push(record.addedNodes.length);
    }).observe(document.querySelector(".flip-ghosts")!, { childList: true });
  });
  const box = await trackBox(page);
  const y = box.y + 30;
  await page.mouse.move(box.x + (box.width * percent(100)) / 100, y);
  await page.mouse.down();
  await page.mouse.move(box.x + (box.width * percent(160)) / 100, y, { steps: 6 });
  await page.mouse.up();
  const added = await page.evaluate(() => (window as unknown as { ghostsAdded: number[] }).ghostsAdded);
  expect(added.reduce((sum, count) => sum + count, 0)).toBeGreaterThan(0);
  await page.waitForTimeout(1500);
  expect(await page.locator(".flip-ghosts > *").count()).toBe(0);
  expect(await page.locator("#witnesses ol").evaluate((node) => node.getAnimations({ subtree: true }).length)).toBe(0);
});

test("a window with no witness says so, and «Mostrar todos» brings everything back", async ({ page }) => {
  await open(page);
  const box = await trackBox(page);
  const y = box.y + 30;
  await page.mouse.move(box.x + (box.width * percent(230)) / 100, y);
  await page.mouse.down();
  await page.mouse.move(box.x + (box.width * percent(330)) / 100, y, { steps: 6 });
  await page.mouse.up();
  await expect(page.locator("#witnesses ol li")).toHaveCount(1);
  await expect(page.locator("#witnesses ol li")).toHaveText("Ningún testigo de estos años en esta doctrina.");
  await page.locator(`${status} button`).click();
  await expect(page.locator("#witnesses ol li")).toHaveCount(12);
  await expect(page.locator(status)).toHaveText("12 testigos. Arrastra sobre la regla para elegir años.");
  await expect(page.locator("[data-win]")).toHaveCount(0);
});

test("a window is at least ten years: a shorter drag restores the previous one", async ({ page }) => {
  await open(page);
  const box = await trackBox(page);
  const y = box.y + 30;
  await page.mouse.move(box.x + (box.width * percent(100)) / 100, y);
  await page.mouse.down();
  await page.mouse.move(box.x + (box.width * percent(200)) / 100, y, { steps: 6 });
  await page.mouse.up();
  const start = box.x + (box.width * percent(496)) / 100;
  await page.mouse.move(start, y);
  await page.mouse.down();
  await page.mouse.move(start + 6, y, { steps: 3 });
  await page.mouse.up();
  await expect(page.locator(status)).toContainText("años 100 a 200");
});

test("the window moves when dragged by its body, even beside a witness, and its handles take the arrows", async ({
  page,
}) => {
  await open(page);
  const box = await trackBox(page);
  const y = box.y + 30;
  await page.mouse.move(box.x + (box.width * percent(100)) / 100, y);
  await page.mouse.down();
  await page.mouse.move(box.x + (box.width * percent(200)) / 100, y, { steps: 6 });
  await page.mouse.up();
  await expect(page.locator(status)).toContainText("años 100 a 200");
  const grab = box.x + (box.width * percent(150)) / 100;
  await page.mouse.move(grab, y + 12);
  await page.mouse.down();
  await page.mouse.move(grab + (box.width * 100) / 799, y + 12, { steps: 8 });
  await page.mouse.up();
  await expect(page.locator(status)).toContainText("años 200 a 300");
  await page.locator("[data-handle=r]").focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator(status)).toContainText("años 200 a 310");
  await page.locator("[data-handle=l]").focus();
  await page.keyboard.press("ArrowLeft");
  await expect(page.locator(status)).toContainText("años 190 a 310");
});

test("a tap inside the window still picks the witness beside it", async ({ page }) => {
  await open(page);
  const box = await trackBox(page);
  const y = box.y + 30;
  await page.mouse.move(box.x + (box.width * percent(100)) / 100, y);
  await page.mouse.down();
  await page.mouse.move(box.x + (box.width * percent(200)) / 100, y, { steps: 6 });
  await page.mouse.up();
  await pointerAtYear(page, 180);
  await page.mouse.down();
  await page.mouse.up();
  await expect(page.locator(status)).toContainText("años 100 a 200");
  await expect
    .poll(async () =>
      Math.round(
        await page.evaluate(() => {
          const bar = document.querySelector("[data-lr-wrap]")!.getBoundingClientRect();
          return document.getElementById("w-ew-two-realities")!.getBoundingClientRect().top - bar.bottom;
        }),
      ),
    )
    .toBeLessThanOrEqual(7);
});

test("the ruler sticks under the top bar while reading and shows its hairline", async ({ page }) => {
  await open(page);
  await expect(page.locator("[data-lr-wrap]")).not.toHaveAttribute("data-stuck", "");
  await page.evaluate(() => scrollBy(0, 900));
  await page.waitForTimeout(500);
  await expect(page.locator("[data-lr-wrap]")).toHaveAttribute("data-stuck", "");
  const top = await page.locator("[data-lr-wrap]").evaluate((node) => Math.round(node.getBoundingClientRect().top));
  expect(top).toBe(56);
  expect(await page.locator("[data-lr-wrap]").evaluate((node) => getComputedStyle(node).borderBottomColor)).not.toBe(
    "rgba(0, 0, 0, 0)",
  );
});

test("the block of the reading position follows the quote being read, in 220 ms", async ({ page }) => {
  await open(page);
  await readAt(page, "ew-augustine-figure");
  await expect(page.locator(`${marker("ew-augustine-figure")}[data-on]`)).toHaveCount(1);
  await expect(page.locator("[data-lr-pos]")).toHaveCount(1);
  const timing = await page.locator("[data-lr-pos]").evaluate((node) => getComputedStyle(node).transitionDuration);
  expect(timing).toBe("0.22s, 0.22s");
  const pos = await page.locator("[data-lr-pos]").boundingBox();
  const track = await trackBox(page);
  expect(Math.abs((pos?.x ?? 0) + 7 - (track.x + (track.width * percent(396)) / 100))).toBeLessThan(10);
});

test("the quote being read stays raised with its label while nothing is hovered", async ({ page }) => {
  await open(page);
  await readAt(page, "ew-augustine-figure");
  await expect.poll(() => lift(page, "ew-augustine-figure")).toBe(-14);
  await expect(page.locator(`${marker("ew-augustine-figure")}[data-show]`)).toHaveCount(1);
});

test("hovering a row lights its marker, and leaving it lets the marker fall", async ({ page }) => {
  await open(page);
  await page.locator(row("ew-two-realities")).hover();
  await expect(page.locator(`${marker("ew-two-realities")}[data-hot]`)).toHaveCount(1);
  await expect.poll(() => lift(page, "ew-two-realities")).toBe(-22);
  expect(
    await page.locator(row("ew-two-realities")).evaluate((node) => getComputedStyle(node).backgroundColor),
  ).not.toBe("rgba(0, 0, 0, 0)");
  await page.mouse.move(10, 400);
  await expect(page.locator("[data-lr-marker][data-hot]")).toHaveCount(0);
});

test("the keyboard: one tab stop on the markers, arrows move between them, Enter jumps", async ({ page }) => {
  await open(page);
  expect(await page.locator("[data-lr-marker][tabindex='0']").count()).toBe(1);
  await page.locator("[data-lr-marker][tabindex='0']").focus();
  const first = await page.evaluate(() => (document.activeElement as HTMLElement).dataset.id);
  await page.keyboard.press("ArrowRight");
  const second = await page.evaluate(() => (document.activeElement as HTMLElement).dataset.id);
  expect(second).not.toBe(first);
  await expect(page.locator(`${marker(second!)}[data-hot]`)).toHaveCount(1);
  await page.keyboard.press("ArrowLeft");
  expect(await page.evaluate(() => (document.activeElement as HTMLElement).dataset.id)).toBe(first);
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("Enter");
  await expect
    .poll(async () =>
      Math.round(
        await page.evaluate((id) => {
          const bar = document.querySelector("[data-lr-wrap]")!.getBoundingClientRect();
          return document.getElementById(`w-${id}`)!.getBoundingClientRect().top - bar.bottom;
        }, second),
      ),
    )
    .toBeLessThanOrEqual(7);
});

test("on touch a tap picks the nearest witness and nothing hovers", async ({ browser }) => {
  const context = await browser.newContext({ hasTouch: true, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(path);
  await page.evaluate(() => document.querySelector("#witnesses")!.scrollIntoView());
  await page.waitForTimeout(800);
  const box = await trackBox(page);
  await page.touchscreen.tap(box.x + (box.width * percent(396)) / 100, box.y + 30);
  await expect
    .poll(async () =>
      Math.round(
        await page.evaluate(() => {
          const bar = document.querySelector("[data-lr-wrap]")!.getBoundingClientRect();
          return document.getElementById("w-ew-augustine-figure")!.getBoundingClientRect().top - bar.bottom;
        }),
      ),
    )
    .toBeLessThanOrEqual(7);
  await context.close();
});

test("labels near the ends anchor inward so they never leave the page", async ({ page }) => {
  await open(page, 390);
  await pointerAtYear(page, 743);
  await expect(page.locator(`${marker("ew-not-a-figure")}[data-hot]`)).toHaveCount(1);
  const label = await page.locator(`${marker("ew-not-a-figure")} .lr-label`).boundingBox();
  expect((label?.x ?? 0) + (label?.width ?? 0)).toBeLessThanOrEqual(390);
  await pointerAtYear(page, 50);
  const left = await page.locator(`${marker("ew-sacrifice")} .lr-label`).boundingBox();
  expect(left?.x ?? -1).toBeGreaterThanOrEqual(0);
});

test("under reduced motion the lift is immediate and the list change has no animation", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(path);
  await page.evaluate(() => document.querySelector("#witnesses")!.scrollIntoView());
  await page.waitForTimeout(500);
  await pointerAtYear(page, 207);
  await expect.poll(() => lift(page, "ew-figure"), { timeout: 400 }).toBe(-22);
  const box = await trackBox(page);
  await page.mouse.move(box.x + (box.width * percent(100)) / 100, box.y + 30);
  await page.mouse.down();
  await page.mouse.move(box.x + (box.width * percent(200)) / 100, box.y + 30, { steps: 5 });
  await page.mouse.up();
  expect(await page.locator(".flip-ghosts > *").count()).toBe(0);
  await context.close();
});

test("a mark of the fingerprint with a witness scrolls to that quote; one without does nothing", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(path);
  await page.waitForTimeout(2200);
  const strip = await page.locator('[role="img"] > div:first-child').boundingBox();
  const at = (year: number) => strip!.x + (strip!.width * (year - 1)) / 2025;
  await page.mouse.click(at(1647), strip!.y + 24);
  expect(await page.evaluate(() => scrollY)).toBe(0);
  await page.mouse.click(at(107), strip!.y + 24);
  await expect
    .poll(async () =>
      Math.round(
        await page.evaluate(() => {
          const bar = document.querySelector("[data-lr-wrap]")!.getBoundingClientRect();
          return document.getElementById("w-ew-flesh")!.getBoundingClientRect().top - bar.bottom;
        }),
      ),
    )
    .toBeLessThanOrEqual(7);
});

test("a mark whose witness is filtered out clears the window first", async ({ page }) => {
  await open(page);
  const box = await trackBox(page);
  const y = box.y + 30;
  await page.mouse.move(box.x + (box.width * percent(300)) / 100, y);
  await page.mouse.down();
  await page.mouse.move(box.x + (box.width * percent(500)) / 100, y, { steps: 6 });
  await page.mouse.up();
  await expect(page.locator("#witnesses ol li")).toHaveCount(5);
  await page.evaluate(() => scrollTo(0, 0));
  await page.waitForTimeout(500);
  const strip = await page.locator('[role="img"] > div:first-child').boundingBox();
  await page.mouse.click(strip!.x + (strip!.width * (107 - 1)) / 2025, strip!.y + 24);
  await expect(page.locator("#witnesses ol li")).toHaveCount(12);
  await expect(page.locator(status)).toHaveText("12 testigos. Arrastra sobre la regla para elegir años.");
});

test("a quote's source opens its window with the translation's quote and date", async ({ page }) => {
  await open(page);
  const link = page.locator(`${row("ew-flesh")} [aria-haspopup]`);
  await link.click();
  const dialog = page.locator("[role=dialog]");
  await expect(dialog).toHaveAttribute("data-open", "true");
  await expect(dialog).toContainText("Se abstienen de la Eucaristía");
  await expect(dialog).toContainText("c. 107–110");
  await page.keyboard.press("Escape");
  await expect(link).toBeFocused();
});

test("the history link is built and inert", async ({ page }) => {
  await open(page);
  const url = page.url();
  const link = page.locator("#witnesses button", { hasText: "La historia completa de la Eucaristía" });
  await expect(link).toBeVisible();
  await link.click();
  expect(page.url()).toBe(url);
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: no horizontal overflow, with and without a window @webkit`, async ({ page }) => {
    await open(page, width);
    expect(await horizontalOverflow(page)).toBe(0);
    const box = await trackBox(page);
    await page.mouse.move(box.x + 20, box.y + 30);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2, box.y + 30, { steps: 5 });
    await page.mouse.up();
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("hovering, picking and filtering work in every engine @webkit", async ({ page }) => {
  await open(page);
  await pointerAtYear(page, 207);
  await expect.poll(() => lift(page, "ew-figure")).toBe(-22);
  const box = await trackBox(page);
  await page.mouse.move(box.x + (box.width * percent(100)) / 100, box.y + 30);
  await page.mouse.down();
  await page.mouse.move(box.x + (box.width * percent(200)) / 100, box.y + 30, { steps: 8 });
  await page.mouse.up();
  await expect(page.locator(status)).toContainText("de 12 testigos");
});
