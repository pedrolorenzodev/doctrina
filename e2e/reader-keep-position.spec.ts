import { expect, test, type Page } from "@playwright/test";

const john = "/es/biblia/juan/6";
const strip = "main [data-reader-strip]";
const text = `${strip} button:has-text("Texto")`;

const topVerse = (page: Page) =>
  page.evaluate(() => {
    const units = [...document.querySelectorAll<HTMLElement>("[data-chapter-text] > p[id^=v-]")];
    const unit = units.find((el) => el.getBoundingClientRect().bottom > 140)!;
    return { id: unit.id, top: unit.getBoundingClientRect().top };
  });

const followFrames = (page: Page, id: string, ms: number) =>
  page.evaluate(
    ([target, duration]) =>
      new Promise<number[]>((resolve) => {
        const tops: number[] = [document.getElementById(target as string)!.getBoundingClientRect().top];
        const sample = () => tops.push(document.getElementById(target as string)!.getBoundingClientRect().top);
        const root = document.querySelector("[data-chapter-text]")?.closest("[data-stream-chapter]")?.parentElement;
        const observer = new ResizeObserver(sample);
        observer.observe(document.body);
        if (root) observer.observe(root);
        setTimeout(() => {
          observer.disconnect();
          sample();
          resolve(tops);
        }, duration as number);
      }),
    [id, ms] as const,
  );

async function atVerse(page: Page, verse: number, width = 1440) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(john);
  await page.waitForTimeout(600);
  await page.evaluate((n) => document.getElementById(`v-${n}`)!.scrollIntoView({ block: "start" }), verse);
  await page.mouse.wheel(0, -200);
  await page.waitForTimeout(900);
  await expect
    .poll(
      async () => {
        const top = await page.locator(strip).evaluate((el) => el.getBoundingClientRect().top);
        if (top < 55) await page.mouse.wheel(0, -60);
        return top;
      },
      { timeout: 6000, intervals: [300] },
    )
    .toBeGreaterThanOrEqual(55);
  await page.waitForTimeout(400);
  await page.evaluate(() => new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done))));
}

async function holds(page: Page, act: () => Promise<void>, ms = 1400) {
  const before = await topVerse(page);
  const [tops] = await Promise.all([followFrames(page, before.id, ms), act()]);
  const worst = Math.max(...tops.map((top) => Math.abs(top - before.top)));
  expect(worst).toBeLessThan(2);
  const stripTop = await page.locator(strip).evaluate((el) => el.getBoundingClientRect().top);
  expect(stripTop).toBeGreaterThanOrEqual(55);
}

const larger = 'button[aria-label="Agrandar el texto"]';

const press = (page: Page, selector: string) =>
  page.locator(selector).evaluate((element) => (element as HTMLElement).click());

test("choosing the second translation side by side keeps the verse that was at the top where it was", async ({
  page,
}) => {
  await atVerse(page, 39);
  await holds(page, async () => {
    await press(page, `${strip} button[data-parallel]`);
    const menu = `${strip} [role=dialog][aria-label="Segunda traducción"]`;
    await press(page, `${menu} [role=group] button:has-text("Al lado")`);
    await page.waitForTimeout(300);
    await press(page, `${menu} [role=option]:has-text("(BSB)")`);
  });
});

test("A+ keeps the verse at the top where it was", async ({ page }) => {
  await atVerse(page, 39);
  await holds(page, async () => {
    await press(page, text);
    await press(page, larger);
    await press(page, larger);
    await press(page, larger);
  });
});

test("«En párrafo» keeps the verse at the top where it was", async ({ page }) => {
  await atVerse(page, 39);
  await holds(page, async () => {
    await press(page, text);
    await press(page, 'button:has-text("En párrafo")');
  });
});

test("closing and opening the tree keeps the verse still in every frame of the slide", async ({ page }) => {
  await atVerse(page, 39);
  await holds(page, () => press(page, `${strip} [data-tree-toggle]`));
  await page.waitForTimeout(500);
  await holds(page, () => press(page, `${strip} [data-tree-toggle]`));
});

test("opening the verse panel keeps the verse at the top where it was", async ({ page }) => {
  await atVerse(page, 39);
  await holds(page, async () => {
    const top = await topVerse(page);
    await press(page, `#${top.id} [role=button]`);
  });
});

test("resizing the window keeps the verse at the top where it was", async ({ page }) => {
  await atVerse(page, 39);
  await holds(page, () => page.setViewportSize({ width: 1180, height: 900 }));
});

test("under reduced motion the position is kept as well, and the strip stays shown", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await atVerse(page, 39);
  await holds(page, async () => {
    await press(page, text);
    await press(page, 'button:has-text("En párrafo")');
  });
});

test("at the very top the page stays at the top when the width changes", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(john);
  await page.waitForTimeout(600);
  await page.locator(`${strip} [data-tree-toggle]`).click();
  await page.waitForTimeout(700);
  expect(await page.evaluate(() => scrollY)).toBeLessThan(2);
});

test("after the reader scrolls on, the next width change keeps the new verse, not the old one", async ({ page }) => {
  await atVerse(page, 10);
  await holds(page, () => press(page, `${strip} [data-tree-toggle]`));
  await page.mouse.wheel(0, 900);
  await page.waitForTimeout(1000);
  await page.mouse.wheel(0, -80);
  await page.waitForTimeout(700);
  await holds(page, () => press(page, `${strip} [data-tree-toggle]`));
});

test.fixme("switching to «En párrafo» in the middle of a chapter keeps the reading verse (the position jumps to the next chapter)", async ({
  page,
}) => {
  await atVerse(page, 39);
  await page.waitForTimeout(1500);
  const before = await topVerse(page);
  await page.locator(text).click();
  await page.locator('[role=group] button:has-text("En párrafo")').click();
  await page.waitForTimeout(1800);
  const after = await page.evaluate((id) => document.getElementById(id)!.getBoundingClientRect().top, before.id);
  expect(Math.abs(after - before.top)).toBeLessThan(2);
});
