import { chromium } from "playwright";
import { mkdirSync, appendFileSync } from "node:fs";

const base = process.env.QA_BASE ?? "http://localhost:3801";
const out = "tmp/qa/interact.jsonl";
mkdirSync("tmp/qa/inter", { recursive: true });
const sizes = [
  [390, 844, true],
  [768, 1024, true],
  [1024, 768, false],
  [1440, 900, false],
  [2560, 1440, false],
];
const themes = (process.env.QA_THEMES ?? "light,dark").split(",");
const only = process.env.QA_ONLY?.split(",");

const verse = (p) => p.locator("#v-53 [role=button]").first().click();
const strip = (p, name) => p.getByRole("button", { name }).first();
const panelBtn = (p, name) => p.locator("aside[data-side-panel]").getByRole("button", { name }).first();

const scenarios = [
  { key: "panel-words", path: "/es/biblia/juan/6", run: async (p) => verse(p) },
  {
    key: "panel-uses",
    path: "/es/biblia/juan/6",
    run: async (p) => {
      await verse(p);
      await p.waitForTimeout(500);
      await panelBtn(p, /^Usos/).click();
    },
  },
  {
    key: "panel-translations",
    path: "/es/biblia/juan/6",
    run: async (p) => {
      await verse(p);
      await p.waitForTimeout(500);
      await panelBtn(p, /^Traducciones/).click();
    },
  },
  {
    key: "note-editor",
    path: "/es/biblia/juan/6",
    run: async (p) => {
      await verse(p);
      await p.waitForTimeout(500);
      await panelBtn(p, "Nota").click();
    },
  },
  { key: "picker-translation", path: "/es/biblia/juan/6", run: async (p) => strip(p, /^Traducción/).click() },
  { key: "picker-book", path: "/es/biblia/juan/6", run: async (p) => strip(p, /^Libro y cap/).click() },
  {
    key: "second-translation",
    path: "/es/biblia/juan/6",
    run: async (p) => {
      await strip(p, "Segunda traducción").click();
      await p.waitForTimeout(400);
    },
  },
  {
    key: "second-side",
    path: "/es/biblia/juan/6",
    run: async (p) => {
      await strip(p, "Segunda traducción").click();
      await p.waitForTimeout(400);
      const b = p.getByRole("button", { name: "Al lado" }).first();
      if (await b.isVisible()) await b.click();
      await p.waitForTimeout(600);
    },
  },
  { key: "text-options", path: "/es/biblia/juan/6", run: async (p) => strip(p, /^Texto/).click() },
  {
    key: "ask-drawer",
    path: "/es/biblia/juan/6",
    run: async (p) => {
      await strip(p, "Preguntar").click();
      await p.waitForTimeout(700);
    },
  },
  { key: "your-notes", path: "/es/biblia/juan/6", run: async (p) => strip(p, "Tus notas").click() },
  {
    key: "search-open",
    path: "/es",
    run: async (p) => {
      await p.locator("header button[aria-haspopup=dialog]").click();
      await p.waitForTimeout(400);
      await p.keyboard.type("pan");
      await p.waitForTimeout(700);
    },
  },
  { key: "tree-open-home", path: "/es", run: async (p) => p.locator("button[aria-controls=site-sidebar]").click() },
  {
    key: "tree-open-trad",
    path: "/es/doctrinas/eucaristia/catolica",
    run: async (p) => p.locator("button[aria-controls=site-sidebar]").click(),
  },
  {
    key: "simplifier",
    path: "/es/doctrinas/eucaristia/catolica",
    run: async (p) => {
      const m = p.locator("[data-simplifier-mark]").first();
      await m.scrollIntoViewIfNeeded();
      await m.click();
      await p.waitForTimeout(900);
    },
  },
  {
    key: "citation-window",
    path: "/es/doctrinas/eucaristia/catolica",
    run: async (p) => {
      const c = p.locator("#QE-1 [aria-haspopup]").first();
      await c.scrollIntoViewIfNeeded();
      await c.click();
      await p.waitForTimeout(800);
    },
  },
  {
    key: "verse-page-compare",
    path: "/es/biblia/juan/6/53",
    run: async (p) => {
      await p.getByText("Comparar traducciones").first().scrollIntoViewIfNeeded();
      await p.waitForTimeout(600);
    },
  },
  { key: "dra-verse", path: "/es/biblia/juan/6/53?t=dra", run: async () => {} },
  {
    key: "father-panel",
    path: "/es/historia/obras/1-clement",
    run: async (p) => {
      await p.locator("[data-father-text] > div button").first().click({ timeout: 5000 });
      await p.waitForTimeout(700);
    },
  },
];

const browser = await chromium.launch();
for (const [w, h, touch] of sizes) {
  for (const th of themes) {
    const ctx = await browser.newContext({
      viewport: { width: w, height: h },
      colorScheme: th,
      hasTouch: touch,
      isMobile: touch,
      deviceScaleFactor: 1,
    });
    for (const sc of scenarios.filter((s) => !only || only.includes(s.key))) {
      const page = await ctx.newPage();
      const logs = [];
      page.on("console", (m) => (m.type() === "error" || m.type() === "warning") && logs.push(m.text().slice(0, 140)));
      page.on("pageerror", (e) => logs.push("pageerror " + e.message.slice(0, 140)));
      const rec = { key: sc.key, w, theme: th, touch };
      try {
        page.setDefaultTimeout(6000);
        await page.goto(base + sc.path, { waitUntil: "load", timeout: 30000 });
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(900);
        await sc.run(page);
        await page.waitForTimeout(700);
        Object.assign(
          rec,
          await page.evaluate(() => {
            const vw = innerWidth;
            const vh = innerHeight;
            const open = [
              ...document.querySelectorAll(
                "[role=dialog],[data-side-panel][data-open=true],[data-ask-drawer][data-open=true],[data-search-dialog][data-open=true],[role=listbox],[role=menu],[aria-modal=true]",
              ),
            ]
              .map((e) => {
                const r = e.getBoundingClientRect();
                return {
                  el:
                    e.tagName.toLowerCase() +
                    (e.getAttribute("aria-label") ? "[" + e.getAttribute("aria-label").slice(0, 20) + "]" : ""),
                  l: Math.round(r.left),
                  t: Math.round(r.top),
                  r: Math.round(r.right),
                  b: Math.round(r.bottom),
                  vis: r.width > 0 && r.height > 0,
                };
              })
              .filter((o) => o.vis && o.t < vh && o.r > 0 && o.l < vw);
            return {
              overflowX: document.documentElement.scrollWidth - vw,
              open,
              offscreen: open.filter((o) => o.r > vw + 1 || o.l < -1 || o.b > vh + 1),
            };
          }),
        );
        await page.screenshot({ path: `tmp/qa/inter/${sc.key}__${w}__${th}.png` });
      } catch (e) {
        rec.error = String(e).split("\n")[0].slice(0, 160);
      }
      rec.console = [...new Set(logs)].slice(0, 4);
      appendFileSync(out, JSON.stringify(rec) + "\n");
      await page.close();
    }
    await ctx.close();
    console.log("done", w, th);
  }
}
await browser.close();
