import { chromium } from "playwright";
import { mkdirSync, appendFileSync, readFileSync } from "node:fs";
import { routes as allRoutes, widths as allWidths } from "./routes.mjs";

const base = process.env.QA_BASE ?? "http://localhost:3801";
const only = process.env.QA_ONLY?.split(",");
const wsel = process.env.QA_WIDTHS?.split(",").map(Number);
const themes = (process.env.QA_THEMES ?? "light,dark").split(",");
const touch = process.env.QA_TOUCH === "1";
const shotsAt = (process.env.QA_SHOTS ?? "390,1440,2560").split(",").map(Number);
const fullAt = (process.env.QA_FULL ?? "390,1440").split(",").map(Number);
const runAxe = process.env.QA_AXE === "1";
const noScroll = process.env.QA_NOSCROLL === "1";
const settle = Number(process.env.QA_WAIT ?? 500);
const out = process.env.QA_OUT ?? "tmp/qa/measure.jsonl";
mkdirSync("tmp/qa/shots", { recursive: true });
const axeSrc = readFileSync("node_modules/axe-core/axe.min.js", "utf8");
const routes = allRoutes.filter(([k]) => !only || only.includes(k));
const widths = allWidths.filter(([w]) => !wsel || wsel.includes(w));

const pageMetrics = () => {
  const vw = window.innerWidth;
  const sel = (el) => {
    let s = el.tagName.toLowerCase();
    if (el.id) s += "#" + el.id;
    const c = [...el.classList].slice(0, 3).join(".");
    if (c) s += "." + c;
    return s;
  };
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return false;
    const cs = getComputedStyle(el);
    return cs.visibility !== "hidden" && cs.display !== "none" && cs.opacity !== "0";
  };
  const inScroller = (el) => {
    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
      const cs = getComputedStyle(p);
      if (/(auto|scroll|hidden|clip)/.test(cs.overflowX) && p.scrollWidth > p.clientWidth + 1) return true;
    }
    return false;
  };
  const all = [...document.querySelectorAll("body *")];
  const res = {};
  res.vw = vw;
  res.overflowX = document.documentElement.scrollWidth - vw;
  res.docHeight = document.documentElement.scrollHeight;
  res.theme = document.documentElement.getAttribute("data-theme");
  res.lang = document.documentElement.lang;
  res.offenders = all
    .filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.right <= vw + 1 || r.width === 0) return false;
      const cs = getComputedStyle(el);
      if (cs.position === "fixed" && r.left >= vw) return false;
      return visible(el) && !inScroller(el);
    })
    .slice(0, 6)
    .map((el) => sel(el) + " right=" + Math.round(el.getBoundingClientRect().right));
  const main = document.querySelector("main");
  if (main) {
    const mr = main.getBoundingClientRect();
    res.main = { left: Math.round(mr.left), width: Math.round(mr.width) };
    let minL = 1e9;
    let maxR = 0;
    const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      if (!n.textContent.trim()) continue;
      const el = n.parentElement;
      if (!el || !visible(el)) continue;
      const cs = getComputedStyle(el);
      if (cs.position === "fixed") continue;
      if (el.closest("[aria-hidden=true],nav,[role=dialog]")) continue;
      const range = document.createRange();
      range.selectNodeContents(n);
      const r = range.getBoundingClientRect();
      if (r.width === 0) continue;
      minL = Math.min(minL, r.left);
      maxR = Math.max(maxR, r.right);
    }
    res.text = {
      left: Math.round(minL),
      right: Math.round(maxR),
      leftGap: Math.round(minL - mr.left),
      rightGap: Math.round(mr.right - maxR),
    };
  }
  const sidebar = document.querySelector("#site-sidebar");
  if (sidebar) {
    const sr = sidebar.getBoundingClientRect();
    res.sidebar = {
      left: Math.round(sr.left),
      width: Math.round(sr.width),
      shown: visible(sidebar) && sr.right > 0 && sr.left < vw,
    };
  }
  res.bars = all
    .filter((el) => {
      const cs = getComputedStyle(el);
      if (cs.position !== "fixed" && cs.position !== "sticky") return false;
      const r = el.getBoundingClientRect();
      return r.height > 20 && r.height < 140 && r.width > 200 && visible(el);
    })
    .slice(0, 6)
    .map((el) => {
      const r = el.getBoundingClientRect();
      return `${sel(el)} ${getComputedStyle(el).position} left=${Math.round(r.left)} w=${Math.round(r.width)} top=${Math.round(r.top)}`;
    });
  res.truncated = all
    .filter((el) => {
      if (!visible(el)) return false;
      const cs = getComputedStyle(el);
      const clamp = cs.webkitLineClamp !== "none" && cs.webkitLineClamp !== "";
      const ell = cs.textOverflow === "ellipsis";
      if (!clamp && !ell) return false;
      return clamp ? el.scrollHeight > el.clientHeight + 1 : el.scrollWidth > el.clientWidth + 1;
    })
    .slice(0, 5)
    .map(
      (el) =>
        sel(el) +
        " «" +
        el.textContent.trim().slice(0, 40) +
        "» title=" +
        Boolean(el.getAttribute("title") || el.getAttribute("aria-label")),
    );
  res.brokenImages = [...document.images]
    .filter((i) => i.complete && i.naturalWidth === 0 && visible(i))
    .map((i) => i.currentSrc.slice(-60));
  const gh = /[Ͱ-Ͽἀ-῿]/;
  const he = /[֐-׿]/;
  const badLang = [];
  const w2 = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = w2.nextNode(); n; n = w2.nextNode()) {
    const t = n.textContent;
    const isG = gh.test(t);
    const isH = he.test(t);
    if (!isG && !isH) continue;
    const el = n.parentElement;
    if (el.closest("script,style")) continue;
    const l = el.closest("[lang]")?.getAttribute("lang") ?? "";
    const ok = isG ? /^(grc|el|gr)/i.test(l) : /^(he|hbo|heb)/i.test(l);
    if (!ok) badLang.push((isG ? "greek" : "hebrew") + " in lang=" + l + " «" + t.trim().slice(0, 24) + "»");
  }
  res.badLang = badLang.length;
  res.badLangSample = [...new Set(badLang)].slice(0, 3);
  const coarse = matchMedia("(pointer: coarse)").matches;
  res.coarse = coarse;
  const tt = [
    ...document.querySelectorAll(
      "a[href],button,input,select,textarea,summary,[role=button],[role=tab],[tabindex='0']",
    ),
  ].filter(visible);
  const inlineSet = new Set();
  const small = tt.filter((el) => {
    const r = el.getBoundingClientRect();
    if (r.width >= 44 && r.height >= 44) return false;
    const inline =
      el.matches("a") && el.closest("p,li,dd,blockquote,figcaption") && getComputedStyle(el).display === "inline";
    if (inline) inlineSet.add(el);
    return true;
  });
  const notInline = small.filter((el) => !inlineSet.has(el));
  res.touchSmall = notInline.length;
  res.touchSmallInline = small.length - notInline.length;
  res.touchTotal = tt.length;
  res.touchSample = notInline.slice(0, 8).map((el) => {
    const r = el.getBoundingClientRect();
    return `${sel(el)} ${Math.round(r.width)}x${Math.round(r.height)} «${(el.getAttribute("aria-label") || el.textContent).trim().slice(0, 24)}»`;
  });
  res.h1 = document.querySelector("h1")?.textContent.trim().slice(0, 60);
  res.title = document.title;
  res.noMain = !main;
  return res;
};

const browser = await chromium.launch();
const configs = [];
for (const [w, h] of widths) for (const th of themes) configs.push({ w, h, th });
for (const cfg of configs) {
  const ctx = await browser.newContext({
    viewport: { width: cfg.w, height: cfg.h },
    colorScheme: cfg.th,
    deviceScaleFactor: 1,
    hasTouch: touch,
    isMobile: touch,
  });
  await ctx.addInitScript(() => {
    window.__cls = 0;
    new PerformanceObserver((l) => {
      for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value;
    }).observe({ type: "layout-shift", buffered: true });
  });
  let idx = 0;
  const worker = async () => {
    const page = await ctx.newPage();
    for (;;) {
      const i = idx++;
      if (i >= routes.length) break;
      const [key, path] = routes[i];
      const logs = [];
      const failed = [];
      const onConsole = (m) => {
        if (m.type() === "error" || m.type() === "warning") logs.push(m.type() + ": " + m.text().slice(0, 160));
      };
      const onErr = (e) => logs.push("pageerror: " + e.message.slice(0, 160));
      const onFail = (r) => failed.push("FAILED " + r.url().slice(-80) + " " + (r.failure()?.errorText ?? ""));
      const onResp = (r) => {
        if (r.status() >= 400) failed.push(r.status() + " " + r.url().slice(-80));
      };
      page.on("console", onConsole);
      page.on("pageerror", onErr);
      page.on("requestfailed", onFail);
      page.on("response", onResp);
      const rec = { key, path, w: cfg.w, theme: cfg.th, touch };
      try {
        const t0 = Date.now();
        const resp = await page.goto(base + path, { waitUntil: "load", timeout: 45000 });
        rec.status = resp?.status();
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(settle);
        rec.loadMs = Date.now() - t0;
        const total = await page.evaluate(() => document.documentElement.scrollHeight);
        const step = Math.max(cfg.h / 2, 400);
        for (let y = 0; !noScroll && y < Math.min(total, 9000); y += step) {
          await page.evaluate((t) => window.scrollTo(0, t), y);
          await page.waitForTimeout(60);
        }
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(350);
        rec.cls = Math.round((await page.evaluate(() => window.__cls)) * 1000) / 1000;
        rec.nav = await page.evaluate(() => {
          const n = performance.getEntriesByType("navigation")[0];
          const fcp = performance.getEntriesByName("first-contentful-paint")[0];
          return {
            dcl: Math.round(n.domContentLoadedEventEnd),
            load: Math.round(n.loadEventEnd),
            fcp: fcp ? Math.round(fcp.startTime) : null,
          };
        });
        Object.assign(rec, await page.evaluate(pageMetrics));
        if (shotsAt.includes(cfg.w) && !touch) {
          const stem = `tmp/qa/shots/${key}__${cfg.w}__${cfg.th}`;
          await page.screenshot({ path: stem + ".png" });
          if (fullAt.includes(cfg.w) && cfg.th === "light" && rec.docHeight < 14000)
            await page.screenshot({ path: stem + "__full.png", fullPage: true });
        }
        if (runAxe) {
          await page.evaluate(axeSrc);
          rec.axe = await page.evaluate(async () => {
            const r = await axe.run(document, { resultTypes: ["violations"] });
            return r.violations.map((v) => ({
              id: v.id,
              impact: v.impact,
              n: v.nodes.length,
              sample: v.nodes[0]?.target?.join(" ").slice(0, 80),
              help: v.help,
            }));
          });
        }
      } catch (e) {
        rec.error = String(e).slice(0, 200);
      }
      rec.console = [...new Set(logs)].slice(0, 6);
      rec.failedReq = [...new Set(failed)].slice(0, 6);
      page.off("console", onConsole);
      page.off("pageerror", onErr);
      page.off("requestfailed", onFail);
      page.off("response", onResp);
      appendFileSync(out, JSON.stringify(rec) + "\n");
    }
    await page.close();
  };
  await Promise.all(Array.from({ length: 4 }, worker));
  await ctx.close();
  console.log("done", cfg.w, cfg.th, touch ? "touch" : "");
}
await browser.close();
