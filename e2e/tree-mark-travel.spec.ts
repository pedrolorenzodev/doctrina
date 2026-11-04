import { expect, test, type Page } from "@playwright/test";

type Frame = { scroll: number; marks: number[] };

const doctrines = "/es/doctrinas";
const history = "/es/historia";

async function sample(page: Page, hrefs: string[], gap: number): Promise<Frame[]> {
  await page.evaluate(() => {
    const nav = document.querySelector("#site-sidebar nav")!;
    const frames: Frame[] = [];
    (window as unknown as { __frames: Frame[] }).__frames = frames;
    const start = performance.now();
    const tick = () => {
      const top = nav.getBoundingClientRect().top;
      const marks: number[] = [];
      for (const row of nav.querySelectorAll<HTMLElement>("[data-row].row-current")) {
        if (row.offsetParent === null || Number(getComputedStyle(row, "::before").opacity) < 0.02) continue;
        const rect = row.getBoundingClientRect();
        marks.push(rect.top + rect.height / 2 - top);
      }
      for (const mark of nav.querySelectorAll("[data-mark]")) {
        const rect = mark.getBoundingClientRect();
        marks.push(rect.top + rect.height / 2 - top);
      }
      frames.push({ scroll: nav.scrollTop, marks });
      if (performance.now() - start < 1400) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  for (const [index, href] of hrefs.entries()) {
    if (index > 0) await page.waitForTimeout(gap);
    await page.evaluate(
      (target) => document.querySelector<HTMLElement>(`#site-sidebar a[href="${target}"]`)!.click(),
      href,
    );
  }
  await page.waitForTimeout(1600);
  return page.evaluate(() => (window as unknown as { __frames: Frame[] }).__frames);
}

function expectGlide(frames: Frame[]) {
  expect(frames.every((frame) => frame.marks.length === 1)).toBe(true);
  const marks = frames.map((frame) => frame.marks[0]!);
  const shown = marks.map((mark) => Math.abs(mark - marks[0]!));
  const reach = Math.max(...shown);
  const steps = marks.slice(1).map((mark, at) => Math.abs(mark - marks[at]!));
  expect(Math.max(...steps)).toBeLessThanOrEqual(0.45 * reach + 12);
  const scrolls = frames.map((frame) => frame.scroll);
  const travelled = Math.abs(scrolls.at(-1)! - scrolls[0]!);
  const scrollSteps = scrolls.slice(1).map((scroll, at) => Math.abs(scroll - scrolls[at]!));
  expect(Math.max(...scrollSteps)).toBeLessThanOrEqual(0.3 * travelled + 12);
}

const cases = [
  { name: "a sibling tradition", from: `${doctrines}/eucaristia/catolica`, to: [`${doctrines}/eucaristia/ortodoxa`] },
  {
    name: "a group that was closed",
    from: `${history}/linea-de-tiempo`,
    to: [`${doctrines}/papado/bautista/pasajes`],
  },
  { name: "a row far down the tree", from: `${history}/obras/ignatius-smyrnaeans`, to: [`/es/glosario`] },
  { name: "a row far up the tree", from: `/es/glosario`, to: [`${doctrines}/eucaristia/catolica`] },
  {
    name: "a second click while the mark is travelling",
    from: `${doctrines}/eucaristia/catolica`,
    to: [`${history}/padres/justin-martyr`, `${history}/padres/tertullian`],
  },
];

for (const { name, from, to } of cases) {
  test(`the current-page mark glides to ${name}: one mark in every frame, no jump`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(from, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    expectGlide(await sample(page, to, 150));
  });
}
