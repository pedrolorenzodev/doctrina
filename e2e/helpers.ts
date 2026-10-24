import type { Page } from "@playwright/test";

export const traditionPath = "/es/doctrinas/eucaristia/catolica";

export type Frame = { t: number; left: number; top: number; height: number; opacity: number };

export function trackElement(page: Page, selector: string, ms: number): Promise<Frame[]> {
  return page.evaluate(
    ([target, duration]) =>
      new Promise<Frame[]>((resolve) => {
        const frames: Frame[] = [];
        const start = performance.now();
        const tick = () => {
          const element = document.querySelector(target as string);
          const elapsed = performance.now() - start;
          if (element) {
            const rect = element.getBoundingClientRect();
            frames.push({
              t: Math.round(elapsed),
              left: rect.left,
              top: rect.top,
              height: rect.height,
              opacity: Number(getComputedStyle(element).opacity),
            });
          }
          if (elapsed < (duration as number)) requestAnimationFrame(tick);
          else resolve(frames);
        };
        tick();
      }),
    [selector, ms] as const,
  );
}

export function horizontalOverflow(page: Page): Promise<number> {
  return page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
}
