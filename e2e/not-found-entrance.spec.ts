import { expect, test } from "@playwright/test";

const frames = (ms: number, selector: string) => async (page: import("@playwright/test").Page) =>
  page.evaluate(
    ([duration, target]) =>
      new Promise<{ t: number; opacity: number; ready: boolean }[]>((resolve) => {
        const samples: { t: number; opacity: number; ready: boolean }[] = [];
        const start = performance.now();
        const step = () => {
          const element = document.querySelector(target as string);
          samples.push({
            t: Math.round(performance.now() - start),
            opacity: element ? Number(getComputedStyle(element).opacity) : -1,
            ready: document.documentElement.hasAttribute("data-title-ready"),
          });
          if (performance.now() - start < (duration as number)) requestAnimationFrame(step);
          else resolve(samples);
        };
        step();
      }),
    [ms, selector] as const,
  );

for (const path of ["/es/ruta-que-no-existe", "/en/doctrinas/x"]) {
  test(`${path}: the 404's headings enter like every other page's, not after the 2 s failsafe`, async ({ page }) => {
    await page.goto(path);
    const samples = await frames(1600, "main h1")(page);
    expect(samples.some((sample) => sample.ready && sample.t < 900)).toBe(true);
    const visible = samples.find((sample) => sample.opacity >= 0.99);
    expect(visible, "the heading is fully visible within 1.6 s").toBeDefined();
    expect(visible!.t).toBeLessThan(1500);
  });
}
