import { chromium } from "playwright";

const [, , route, out, width = "1440", height = "900", full = "1", scheme = "light"] = process.argv;
if (!route || !out) {
  console.error("Usage: npm run shot -- <route> <out.png> [width] [height] [fullPage 0|1] [light|dark]");
  console.error(
    "Base URL: SHOT_BASE (default http://localhost:3000). SHOT_SCROLL=1 scrolls the page first so reveals play.",
  );
  process.exit(1);
}

const base = process.env.SHOT_BASE ?? "http://localhost:3000";
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: Number(width), height: Number(height) },
  colorScheme: scheme === "dark" ? "dark" : "light",
  deviceScaleFactor: 1,
});
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
await page.goto(new URL(route, base).href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);
if (process.env.SHOT_SCROLL) {
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < total; y += Number(height) / 2) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(120);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(900);
}
await page.screenshot({ path: out, fullPage: full === "1" });
const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
if (overflow > 0) console.log(`HORIZONTAL OVERFLOW: ${overflow}px`);
if (errors.length) console.log("ERRORS:", errors.join("\n"));
await browser.close();
