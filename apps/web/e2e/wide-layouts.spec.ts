import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

const pages = {
  verse: "/es/biblia/juan/6/53",
  word: "/es/palabras/G4561",
  fathers: "/es/historia/padres",
  councils: "/es/historia/concilios",
  heresies: "/es/historia/herejias",
  divisions: "/es/historia/divisiones",
  reformation: "/es/historia/reforma",
  council: "/es/historia/concilios/elvira",
  current: "/es/historia/corrientes/docetism",
  division: "/es/historia/divisiones/chalcedon-451",
  movement: "/es/historia/reforma/waldensians",
  glossary: "/es/glosario",
  term: "/es/glosario/anafora",
  home: "/es",
  early: "/es/doctrinas/bautismo/primeros-cristianos",
};

async function open(page: Page, path: string, width: number, height: number, tree: "open" | "closed") {
  await page.setViewportSize({ width, height });
  await page.addInitScript((state) => localStorage.setItem("doctrina-tree", state), tree);
  await page.goto(path, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
}

const left = (page: Page, selector: string) =>
  page
    .locator(selector)
    .first()
    .evaluate((element) => Math.round(element.getBoundingClientRect().left));

const traditionTitleLeft = async (page: Page, width: number, height: number, tree: "open" | "closed") => {
  await open(page, traditionPath, width, height, tree);
  return left(page, "main h1");
};

for (const [width, height, tree] of [
  [1920, 1080, "open"],
  [2560, 1440, "closed"],
  [2560, 1080, "open"],
] as const) {
  test(`${width} ${tree}: every page starts at the left edge of the Doctrinas frame, with no overflow`, async ({
    page,
  }) => {
    const frameLeft = await traditionTitleLeft(page, width, height, tree);
    for (const [name, path] of Object.entries(pages)) {
      await open(page, path, width, height, tree);
      const title = await left(page, name === "home" ? "main h1" : "main h1, main header h1");
      const expected = name === "verse" ? frameLeft + 160 : frameLeft;
      if (name !== "home") {
        expect(Math.abs(title - expected), `${name}: title at ${title}, frame at ${expected}`).toBeLessThanOrEqual(2);
      }
      expect(await horizontalOverflow(page), name).toBeLessThanOrEqual(0);
    }
  });
}

test("1440 with the tree open: nothing moves, the column keeps its 64 px from the tree", async ({ page }) => {
  for (const path of Object.values(pages)) {
    if (path === "/es") continue;
    await open(page, path, 1440, 900, "open");
    expect(await left(page, "main h1, main header h1"), path).toBe(336);
  }
});

test("indexes: the filter sits in the 236 px rail and the list runs in two columns", async ({ page }) => {
  await open(page, pages.fathers, 1920, 1080, "open");
  const rail = await page
    .locator("main .rail-head")
    .first()
    .evaluate((element) => element.getBoundingClientRect().width);
  expect(Math.round(rail)).toBe(236);
  const columns = await page
    .locator("main ul")
    .first()
    .evaluate((element) => getComputedStyle(element).columnCount);
  expect(columns).toBe("2");
});

test("an index without filter lists in two columns across the whole frame", async ({ page }) => {
  await open(page, pages.heresies, 1920, 1080, "open");
  expect(await page.locator("main .rail-head").count()).toBe(0);
  const columns = await page
    .locator("main ul")
    .first()
    .evaluate((element) => getComputedStyle(element).columnCount);
  expect(columns).toBe("2");
});

test("below the Doctrinas threshold the indexes stay in one column", async ({ page }) => {
  await open(page, pages.fathers, 1440, 900, "open");
  const columns = await page
    .locator("main ul")
    .first()
    .evaluate((element) => getComputedStyle(element).columnCount);
  expect(columns).toBe("auto");
});

test("the home sections take the frame at 2560", async ({ page }) => {
  await open(page, pages.home, 2560, 1440, "closed");
  const width = await page.locator("#years").evaluate((element) => Math.round(element.getBoundingClientRect().width));
  expect(width).toBe(1360);
});

for (const [width, height, tree] of [
  [1440, 900, "open"],
  [2560, 1440, "closed"],
] as const) {
  test(`timeline at ${width}: a name that would cross the right edge flips to end at its bar, while panning`, async ({
    page,
  }) => {
    await open(page, "/es/historia/linea-de-tiempo", width, height, tree);
    await page.waitForTimeout(600);
    let flipped = 0;
    for (const x of [0, 300, 900, 1700, 2600]) {
      await page.locator("[data-scroller]").evaluate((box, left) => (box.scrollLeft = left), x);
      await page.waitForTimeout(200);
      const state = await page.locator("[data-scroller]").evaluate((box) => {
        const edge = box.getBoundingClientRect().right;
        let stranded = 0;
        let outside = 0;
        let count = 0;
        for (const button of box.querySelectorAll<HTMLElement>("button[data-flip-start]")) {
          const label = button.querySelector<HTMLElement>("[data-timeline-label]")!;
          const rect = label.getBoundingClientRect();
          const view = box.scrollLeft + box.clientWidth - 10;
          const start = Number(button.dataset.labelStart);
          const labelWidth = Number(button.dataset.labelWidth);
          const flipEnd = Number(button.dataset.flipStart) + labelWidth;
          const isFlipped = label.dataset.flipped === "";
          if (isFlipped) {
            count++;
            if (rect.right > edge) outside++;
          } else if (start + labelWidth > view + 0.5 && flipEnd <= view - 0.5) stranded++;
        }
        return { stranded, outside, count };
      });
      expect(state.stranded, `scroll ${x}`).toBe(0);
      expect(state.outside, `scroll ${x}`).toBe(0);
      flipped += state.count;
    }
    expect(flipped).toBeGreaterThan(0);
  });
}
