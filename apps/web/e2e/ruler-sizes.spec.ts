import { expect, test } from "@playwright/test";

const pages = [
  "/es",
  "/es/doctrinas/eucaristia",
  "/es/doctrinas/papado/catolica",
  "/es/historia/padres/ignatius-of-antioch",
];
const sizes: [number, number][] = [
  [1400, 900],
  [1700, 1100],
  [1920, 1080],
  [2560, 1300],
];

async function measure(page: import("@playwright/test").Page) {
  const first = (await page.locator("[data-tick]").first().boundingBox())!;
  const second = (await page.locator("[data-tick]").nth(1).boundingBox())!;
  const right = await page.evaluate(() => {
    const tick = document.querySelector("[data-tick]")!;
    return Math.round(innerWidth - tick.getBoundingClientRect().right);
  });
  await page.mouse.move(first.x + 40, first.y + 6);
  await page.waitForTimeout(400);
  const widths = await page
    .locator("[data-tick] span:last-child")
    .evaluateAll((bars) => bars.slice(0, 5).map((bar) => Math.round(bar.getBoundingClientRect().width)));
  return { pitch: second.y - first.y, height: first.height, right, widths };
}

for (const path of pages) {
  test(`${path}: the ruler looks the same at 1400, 1700, 1920 and 2560 px wide`, async ({ browser }) => {
    const seen: Awaited<ReturnType<typeof measure>>[] = [];
    for (const [width, height] of sizes) {
      const context = await browser.newContext({ viewport: { width, height } });
      const page = await context.newPage();
      await page.goto(path, { waitUntil: "networkidle" });
      await page.waitForTimeout(1500);
      seen.push(await measure(page));
      await context.close();
    }
    expect(seen[0]!.pitch).toBe(13);
    for (const result of seen) expect(result).toEqual(seen[0]);
  });
}
