import { writeFileSync } from "node:fs";
const base = process.env.QA_BASE ?? "http://localhost:3801";
const seeds = ["/es", "/en"];
const seen = new Map();
const queue = [...seeds];
const from = new Map();
let active = 0;
async function visit(path) {
  const t0 = performance.now();
  let res;
  try {
    res = await fetch(base + path, { redirect: "manual" });
  } catch (e) {
    seen.set(path, { status: "ERR", err: String(e) });
    return;
  }
  const html = res.headers.get("content-type")?.includes("html") ? await res.text() : "";
  const ms = Math.round(performance.now() - t0);
  const links = new Set();
  const re = /href="([^"#]*)(#[^"]*)?"/g;
  let m;
  while ((m = re.exec(html))) {
    const h = Buffer.from(m[1].replace(/&amp;/g, "&")).toString("utf8");
    if (!h.startsWith("/") || h.startsWith("//")) continue;
    if (/^\/(_next|api)\//.test(h) || /\.(png|ico|svg|css|js|woff2?|json|txt|xml|jpg|webp)(\?|$)/.test(h)) continue;
    links.add(h);
  }
  const lang = html.match(/<html[^>]*lang="([^"]*)"/)?.[1];
  seen.set(path, {
    status: res.status,
    bytes: html.length,
    ms,
    lang,
    location: res.headers.get("location") ?? undefined,
    links: links.size,
  });
  for (const l of links) {
    if (!from.has(l)) from.set(l, path);
    if (!seen.has(l) && !queue.includes(l)) queue.push(l);
  }
}
const workers = Array.from({ length: 8 }, async () => {
  for (;;) {
    const p = queue.shift();
    if (!p) {
      if (active === 0) return;
      await new Promise((r) => setTimeout(r, 50));
      continue;
    }
    if (seen.has(p)) continue;
    seen.set(p, { status: "…" });
    active++;
    await visit(p);
    active--;
  }
});
await Promise.all(workers);
const out = [...seen.entries()].map(([path, v]) => ({ path, from: from.get(path), ...v }));
writeFileSync("tmp/qa/crawl.json", JSON.stringify(out, null, 1));
const byStatus = {};
for (const o of out) byStatus[o.status] = (byStatus[o.status] ?? 0) + 1;
console.log(out.length, "urls", byStatus);
for (const o of out.filter((o) => o.status !== 200)) console.log(o.status, o.path, "<-", o.from, o.location ?? "");
