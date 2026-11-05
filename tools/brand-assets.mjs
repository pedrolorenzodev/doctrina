import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const base = process.env.SHOT_BASE ?? "http://localhost:3000";
const appDir = join(process.cwd(), "src", "app");
const paper = "#e8e5de";
const ink = "#1c1713";
const iconSvg = readFileSync(join(appDir, "icon.svg"), "utf8");
const markPath = /<path d="([^"]+)"/.exec(iconSvg)?.[1];
if (!markPath) throw new Error("src/app/icon.svg has no path");

const tile = (size, radius) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}"><rect width="32" height="32" rx="${radius}" fill="${paper}"/><path d="${markPath}" fill="${ink}"/></svg>`;

function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const entries = images.map(({ size, png }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size, 0);
    entry.writeUInt8(size, 1);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += png.length;
    return entry;
  });
  return Buffer.concat([header, ...entries, ...images.map(({ png }) => png)]);
}

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });

async function renderIcon(size, radius) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<html><body style="margin:0;background:transparent">${tile(size, radius)}</body></html>`);
  return page.screenshot({ omitBackground: true, clip: { x: 0, y: 0, width: size, height: size } });
}

const sizes = [16, 32, 48];
const pngs = [];
for (const size of sizes) pngs.push({ size, png: await renderIcon(size, 7) });
writeFileSync(join(appDir, "favicon.ico"), ico(pngs));
writeFileSync(join(appDir, "apple-icon.png"), await renderIcon(180, 0));

await page.setViewportSize({ width: 1200, height: 630 });
await page.goto(`${base}/es`);
await page.evaluate(() => document.fonts.ready);
await page.evaluate(
  ([svg]) => {
    const card = document.createElement("div");
    card.id = "brand-card";
    card.innerHTML = `${svg}<span>Doctrina</span>`;
    document.body.append(card);
    const style = document.createElement("style");
    style.textContent = `
      #brand-card { position: fixed; inset: 0; z-index: 99999; display: flex; align-items: center; justify-content: center; gap: 48px; background: var(--color-bg); overflow: hidden; }
      #brand-card::after { content: ""; position: absolute; inset: 0; background-image: var(--texture-image); background-size: 420px 420px; opacity: var(--texture-opacity); mix-blend-mode: multiply; pointer-events: none; }
      #brand-card > * { position: relative; z-index: 1; }
      #brand-card span { font-family: var(--font-head); font-weight: 400; font-size: 150px; letter-spacing: -0.005em; font-variation-settings: "opsz" 24; color: var(--color-ink); line-height: 1; }
    `;
    document.head.append(style);
  },
  [tile(240, 7)],
);
await page.evaluate(() => document.fonts.ready);
const card = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 630 } });
writeFileSync(join(appDir, "opengraph-image.png"), card);
await browser.close();
console.log("favicon.ico, apple-icon.png, opengraph-image.png written");
