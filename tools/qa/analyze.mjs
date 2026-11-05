import { readFileSync } from "node:fs";
const file = process.argv[2] ?? "tmp/qa/measure.jsonl";
const rows = readFileSync(file, "utf8")
  .trim()
  .split("\n")
  .map((l) => JSON.parse(l));
console.log("rows", rows.length);
const errs = rows.filter((r) => r.error || (r.status && r.status >= 400 && r.key !== "not-found"));
console.log(
  "ERRORS/status:",
  errs.map((r) => `${r.key}@${r.w}${r.theme[0]} ${r.status ?? ""} ${r.error ?? ""}`).slice(0, 20),
);
const of = rows.filter((r) => r.overflowX > 0);
console.log("\nHORIZONTAL OVERFLOW:", of.length);
const g = {};
for (const r of of) (g[r.key] ??= []).push(`${r.w}${r.theme[0]}:+${r.overflowX}`);
for (const [k, v] of Object.entries(g))
  console.log(" ", k, v.slice(0, 8).join(" "), rows.find((r) => r.key === k && r.overflowX > 0).offenders?.slice(0, 2));
const cons = {};
for (const r of rows) for (const c of r.console ?? []) (cons[c] ??= new Set()).add(r.key);
console.log("\nCONSOLE:");
for (const [c, s] of Object.entries(cons)) console.log(" ", c, [...s].slice(0, 5), s.size);
const fr = {};
for (const r of rows) for (const c of r.failedReq ?? []) (fr[c] ??= new Set()).add(r.key);
console.log("\nFAILED REQ:");
for (const [c, s] of Object.entries(fr)) console.log(" ", c, [...s].slice(0, 4), s.size);
const bl = rows.filter((r) => r.badLang > 0);
console.log("\nBAD LANG:", [...new Set(bl.map((r) => r.key))].join(","), bl[0]?.badLangSample);
console.log(
  "BROKEN IMAGES:",
  rows.filter((r) => r.brokenImages?.length).map((r) => r.key + "@" + r.w),
);
const cls = rows.filter((r) => r.cls > 0.05).map((r) => `${r.key}@${r.w}${r.theme[0]} ${r.cls}`);
console.log("CLS>0.05:", cls.length, cls.slice(0, 15));
const tr = {};
for (const r of rows) for (const c of r.truncated ?? []) (tr[c] ??= new Set()).add(r.key + "@" + r.w);
console.log("\nTRUNCATED:");
for (const [c, s] of Object.entries(tr)) console.log(" ", c, [...s].slice(0, 5), s.size);
console.log("\nWIDE LAYOUT (light): key  width  mainW  textLeftGap textRightGap textWidth textCenterOffset");
for (const w of [1440, 1920, 2560]) {
  console.log("--", w);
  for (const r of rows.filter((r) => r.w === w && r.theme === "light" && r.text && r.main)) {
    const tw = r.text.right - r.text.left;
    const centre = (r.text.left + r.text.right) / 2 - (r.main.left + r.main.width / 2);
    console.log(
      `  ${r.key.padEnd(26)} main=${r.main.width} sb=${r.sidebar?.shown ? r.sidebar.width : 0} L=${r.text.leftGap} R=${r.text.rightGap} text=${tw} off=${Math.round(centre)}`,
    );
  }
}
