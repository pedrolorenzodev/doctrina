import { expect, test, type Page } from "@playwright/test";

const branch = (id: string) => `aside nav li[data-id="book/${id}"] > ul[data-branch]`;

type Frame = { t: number; leavingHeight: number; leavingAngle: number; enteringHeight: number; enteringAngle: number };

function sampleCrossing(page: Page, leaving: string, entering: string, trigger: () => Promise<void>) {
  return (async () => {
    await page.evaluate(
      ([from, to]) => {
        const angleOf = (id: string) => {
          const svg = document.querySelector(`aside nav li[data-id="book/${id}"] > [data-row] [data-twisty] svg`);
          const rotate = getComputedStyle(svg!).rotate;
          return rotate === "none" ? 0 : Math.round(parseFloat(rotate));
        };
        const heightOf = (id: string) => {
          const list = document.querySelector<HTMLElement>(`aside nav li[data-id="book/${id}"] > ul[data-branch]`);
          return !list || list.hidden ? 0 : list.getBoundingClientRect().height;
        };
        const frames: Frame[] = [];
        const start = performance.now();
        const tick = () => {
          frames.push({
            t: Math.round(performance.now() - start),
            leavingHeight: heightOf(from),
            leavingAngle: angleOf(from),
            enteringHeight: heightOf(to),
            enteringAngle: angleOf(to),
          });
          if (performance.now() - start < 1200) requestAnimationFrame(tick);
        };
        (window as unknown as { frames: Frame[] }).frames = frames;
        tick();
      },
      [leaving, entering] as const,
    );
    await trigger();
    await page.waitForTimeout(1300);
    return page.evaluate(() => (window as unknown as { frames: Frame[] }).frames);
  })();
}

const jumps = (values: number[]) => values.slice(1).map((value, index) => Math.abs(value - values[index]!));

test("the tree closes the book being left and opens the next one smoothly while the scroll crosses a book", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/biblia/mateo/28");
  await page.evaluate(() => {
    const section = document.querySelector('[data-stream-chapter="Matt/28"]')!;
    scrollTo(0, section.getBoundingClientRect().bottom + scrollY - innerHeight + 40);
  });
  await expect.poll(() => page.evaluate(() => !!document.querySelector('[data-stream-chapter="Mark/1"]'))).toBe(true);
  await expect(page.locator(branch("Matt"))).toBeVisible();
  const openHeight = await page.locator(branch("Matt")).evaluate((list) => list.getBoundingClientRect().height);

  const forward = await sampleCrossing(page, "Matt", "Mark", () =>
    page.evaluate(() => {
      const section = document.querySelector('[data-stream-chapter="Mark/1"]')!;
      scrollTo(0, section.getBoundingClientRect().top + scrollY - 200);
    }),
  );
  await expect(page).toHaveURL(/\/es\/biblia\/marcos\/1$/);
  const leavingHeights = forward.map((frame) => frame.leavingHeight);
  const enteringHeights = forward.map((frame) => frame.enteringHeight);
  expect(leavingHeights[0]).toBeGreaterThan(openHeight * 0.9);
  expect(leavingHeights.at(-1)).toBe(0);
  expect(Math.max(...jumps(leavingHeights))).toBeLessThan(openHeight * 0.5);
  expect(enteringHeights.at(-1)).toBeGreaterThan(openHeight * 0.3);
  expect(Math.max(...jumps(enteringHeights))).toBeLessThan(enteringHeights.at(-1)! * 0.6);
  expect(forward.at(-1)!.leavingAngle).toBe(0);
  expect(forward.at(-1)!.enteringAngle).toBe(90);
  expect(new Set(forward.map((frame) => frame.leavingAngle)).size).toBeGreaterThan(2);
  expect(new Set(forward.map((frame) => frame.enteringAngle)).size).toBeGreaterThan(2);

  const back = await sampleCrossing(page, "Mark", "Matt", () =>
    page.evaluate(() => {
      const section = document.querySelector('[data-stream-chapter="Matt/28"]')!;
      scrollTo(0, section.getBoundingClientRect().bottom + scrollY - innerHeight + 40);
    }),
  );
  await expect(page).toHaveURL(/\/es\/biblia\/mateo\/28$/);
  const markHeights = back.map((frame) => frame.leavingHeight);
  expect(markHeights.at(-1)).toBe(0);
  expect(Math.max(...jumps(markHeights))).toBeLessThan(markHeights[0]! * 0.5);
  expect(back.at(-1)!.leavingAngle).toBe(0);
  expect(back.at(-1)!.enteringAngle).toBe(90);
  expect(back.at(-1)!.enteringHeight).toBeGreaterThan(openHeight * 0.9);
});
