import { expect, test } from "@playwright/test";
import { traditionPath } from "./helpers";

const part = (index: number) => ["main nav[aria-label='Ruta']", "main h1", "main header p"][index] as string;

test("«Título»: crumbs, title and lede fade in 80 ms apart after the fonts, with no movement", async ({ page }) => {
  await page.goto(traditionPath);
  const data = await page.evaluate(
    async (selectors) => {
      await document.fonts.ready;
      return selectors.map((selector) => {
        const animation = document
          .querySelector(selector)!
          .getAnimations()
          .find((candidate) => (candidate as CSSAnimation).animationName === "title-in") as CSSAnimation | undefined;
        const timing = animation?.effect?.getComputedTiming();
        return { found: Boolean(animation), duration: timing?.duration, delay: timing?.delay };
      });
    },
    [part(0), part(1), part(2)],
  );
  await page.waitForTimeout(1600);
  const opacity = await page.evaluate(
    (selectors) => selectors.map((selector) => Number(getComputedStyle(document.querySelector(selector)!).opacity)),
    [part(0), part(1), part(2)],
  );
  expect(opacity).toEqual([1, 1, 1]);
  const timings = data.filter((entry) => entry.found);
  expect(timings.map((entry) => entry.delay)).toEqual([0, 80, 160]);
  expect(await page.evaluate(() => document.documentElement.hasAttribute("data-title-ready"))).toBe(true);
});

test("«Título» never uses movement", async ({ page }) => {
  await page.goto(traditionPath);
  const keyframes = await page.evaluate(() => {
    const rules = [...document.styleSheets].flatMap((sheet) => [...sheet.cssRules]);
    const rule = rules.find((candidate) => candidate instanceof CSSKeyframesRule && candidate.name === "title-in") as
      CSSKeyframesRule | undefined;
    return rule ? [...rule.cssRules].map((frame) => frame.cssText) : [];
  });
  expect(keyframes.join(" ")).not.toMatch(/transform|translate/);
});

test("«Título» is visible after the 2 s failsafe even without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(traditionPath);
  await page.waitForTimeout(3200);
  const opacity = await page.evaluate(() => Number(getComputedStyle(document.querySelector("main h1")!).opacity));
  expect(opacity).toBe(1);
  await context.close();
});

test("«Título» under reduced motion is visible at once and runs no animation", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto(traditionPath);
  const state = await page.evaluate(() => {
    const h1 = document.querySelector("main h1")!;
    return { opacity: Number(getComputedStyle(h1).opacity), animations: h1.getAnimations().length };
  });
  expect(state).toEqual({ opacity: 1, animations: 0 });
  await context.close();
});

test("«Fundido»: after a soft navigation the main content fades in 220 ms; the first load does not", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  const first = await page.evaluate(() => document.querySelector("main")!.parentElement!.getAnimations().length);
  expect(first).toBe(0);
  const result = await page.evaluate(
    () =>
      new Promise<{ name: string; duration: unknown }[]>((resolve) => {
        const link = document.querySelector("aside nav a") as HTMLElement;
        link.click();
        const check = () => {
          const main = document.querySelector("main");
          const wrapper = main?.parentElement;
          const animations = wrapper
            ?.getAnimations()
            .map((animation) => ({
              name: (animation as CSSAnimation).animationName,
              duration: animation.effect?.getComputedTiming().duration,
            }))
            .filter((animation) => animation.name === "page-fade");
          if (animations && animations.length > 0) resolve(animations);
          else requestAnimationFrame(check);
        };
        check();
      }),
  );
  expect(result[0]).toEqual({ name: "page-fade", duration: 220 });
});

test("«Fundido» leaves the top bar and the sidebar solid", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  await page.evaluate(() => (document.querySelector("aside nav a") as HTMLElement).click());
  await page.waitForTimeout(60);
  const state = await page.evaluate(() => ({
    header: Number(getComputedStyle(document.querySelector("header")!).opacity),
    aside: Number(getComputedStyle(document.querySelector("aside")!).opacity),
    animatedAncestors: [document.querySelector("header")!, document.querySelector("aside")!].map(
      (element) =>
        element
          .getAnimations({ subtree: false })
          .filter((animation) => (animation as CSSAnimation).animationName === "page-fade").length,
    ),
  }));
  expect(state).toEqual({ header: 1, aside: 1, animatedAncestors: [0, 0] });
});
