import { chromium } from "playwright";
const base = "http://localhost:3801";
const pages = [
  "/es",
  "/es/doctrinas/eucaristia",
  "/es/doctrinas/eucaristia/catolica",
  "/es/biblia/juan/6",
  "/es/biblia/juan/6/53",
  "/es/palabras/G4561",
  "/es/historia/linea-de-tiempo",
  "/es/historia/padres",
  "/es/glosario",
];
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
for (const path of pages) {
  const p = await ctx.newPage();
  await p.goto(base + path, { waitUntil: "load" });
  await p.waitForTimeout(800);
  const seen = [];
  const bad = [];
  let offscreen = 0;
  let lastName = "";
  for (let i = 0; i < 45; i++) {
    await p.keyboard.press("Tab");
    const info = await p.evaluate(() => {
      const e = document.activeElement;
      if (!e || e === document.body) return null;
      const cs = getComputedStyle(e);
      const r = e.getBoundingClientRect();
      const outline = cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) > 0;
      const shadow = cs.boxShadow !== "none";
      const name = (e.getAttribute("aria-label") || e.textContent || e.getAttribute("href") || "")
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 30);
      return {
        tag: e.tagName.toLowerCase(),
        name,
        outline,
        shadow,
        inView: r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth,
        w: Math.round(r.width),
        h: Math.round(r.height),
        hidden: r.width === 0 || r.height === 0,
      };
    });
    if (!info) continue;
    seen.push(info.tag + ":" + info.name);
    if (!info.outline && !info.shadow) bad.push(info.tag + ":" + info.name);
    if (!info.inView) offscreen++;
    lastName = info.name;
  }
  console.log(path, "tabbed", seen.length, "noIndicator", bad.length, bad.slice(0, 5), "notInView", offscreen);
  console.log("   first 8:", seen.slice(0, 8).join(" > "));
  await p.close();
}
await b.close();
