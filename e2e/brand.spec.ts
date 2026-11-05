import { expect, test } from "@playwright/test";

const mark = "header [data-brand-mark]";

test("the header mark stands on the baseline and is as tall as the capital letters", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  const measures = await page.evaluate((selector) => {
    const svg = document.querySelector<SVGSVGElement>(selector)!;
    const link = svg.parentElement!;
    const probe = document.createElement("span");
    probe.style.cssText = "display:inline-block;width:0;height:0";
    link.append(probe);
    const baseline = probe.getBoundingClientRect().top;
    probe.remove();
    const style = getComputedStyle(link);
    const context = document.createElement("canvas").getContext("2d")!;
    context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const capHeight = context.measureText("D").actualBoundingBoxAscent;
    const box = svg.getBoundingClientRect();
    const path = svg.querySelector("path")!.getBBox();
    const view = svg.viewBox.baseVal;
    return {
      bottomToBaseline: box.bottom - baseline,
      height: box.height,
      capHeight,
      pathOffsetX: path.x + path.width / 2 - (view.x + view.width / 2),
      pathOffsetY: path.y + path.height / 2 - (view.y + view.height / 2),
    };
  }, mark);
  expect(Math.abs(measures.bottomToBaseline)).toBeLessThan(0.6);
  expect(Math.abs(measures.height - measures.capHeight)).toBeLessThan(0.9);
  expect(Math.abs(measures.pathOffsetX)).toBeLessThan(0.05);
  expect(Math.abs(measures.pathOffsetY)).toBeLessThan(0.05);
});

test("the mark takes the text colour in both themes and sits before the name", async ({ page }) => {
  await page.goto("/es");
  for (const theme of ["light", "dark"]) {
    await page.evaluate((value) => document.documentElement.setAttribute("data-theme", value), theme);
    const colours = await page.evaluate((selector) => {
      const svg = document.querySelector<SVGSVGElement>(selector)!;
      return { mark: getComputedStyle(svg).color, text: getComputedStyle(svg.parentElement!).color };
    }, mark);
    expect(colours.mark).toBe(colours.text);
  }
  await expect(page.locator("header a", { has: page.locator("[data-brand-mark]") })).toHaveText("Doctrina");
});

test("the icons, the share image and the base URL are in the head", async ({ page }) => {
  await page.goto("/es");
  const rels = await page
    .locator('head link[rel="icon"], head link[rel="apple-touch-icon"]')
    .evaluateAll((links) =>
      links.map((link) => `${link.getAttribute("rel")} ${link.getAttribute("href")?.split("?")[0]}`),
    );
  expect(rels).toEqual(
    expect.arrayContaining(["icon /favicon.ico", "icon /icon.svg", "apple-touch-icon /apple-icon.png"]),
  );
  const image = await page.locator('head meta[property="og:image"]').getAttribute("content");
  expect(image).toMatch(/^https:\/\/doctrina\.elpepo\.dev\/opengraph-image\.png\?v=1$/);
  await expect(page.locator('head meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
  for (const path of ["/icon.svg", "/favicon.ico", "/apple-icon.png", "/opengraph-image.png"])
    expect((await page.request.get(path)).status()).toBe(200);
});
