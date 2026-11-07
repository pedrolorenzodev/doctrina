import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { getAiStore } from "@/content/ai-store/get-ai-store";
import { pregenerationItems } from "./ai-pregenerate-simplifications.mjs";

const OUT_DIR = "tmp/ai-review";

const escape = (text) =>
  String(text).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function checksLine(checks) {
  const names = ["shape", "length", "numbers", "quotes", "names", "scripts", "claims"];
  return names.map((name) => `${checks[name] === false ? "✗" : "✓"} ${name}`).join(" · ");
}

export function reviewPage(entries) {
  const sections = entries
    .map(({ id, row }) => {
      const rows = row.original
        .map(
          (sentence, index) =>
            `<tr><td>${escape(sentence)}</td><td>${escape(row.clear[index] ?? "")}</td><td>${escape(row.very[index] ?? "")}</td></tr>`,
        )
        .join("");
      return `<section id="${escape(id)}"><h2>${escape(id)} <small>${escape(row.status)} · ${escape(row.model)} · ${row.costMicros} µ$</small></h2>
<p class="meta">${escape(checksLine(row.checks))} · key ${escape(row.cacheKey.slice(0, 12))}</p>
<table><thead><tr><th>Original</th><th>Más claro</th><th>Muy simple</th></tr></thead><tbody>${rows}</tbody></table>
<p class="cmd">--approve ${escape(id)} · --reject ${escape(id)}</p></section>`;
    })
    .join("\n");
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Simplificaciones para revisar</title>
<style>body{font:16px/1.5 Georgia,serif;margin:0 auto;max-width:1200px;padding:16px;color:#222;background:#fbfaf7}h2{font:600 15px/1.3 system-ui,sans-serif;margin:32px 0 4px}small,.meta,.cmd{font:13px system-ui,sans-serif;color:#666}table{border-collapse:collapse;width:100%}td,th{border-top:1px solid #ddd;padding:8px;vertical-align:top;text-align:left;width:33%}th{font:600 13px system-ui,sans-serif}@media (max-width:700px){td,th{display:block;width:auto}}</style></head>
<body><h1>Simplificaciones para revisar (${entries.length})</h1>${sections || "<p>No hay simplificaciones guardadas para estas direcciones.</p>"}</body></html>`;
}

function listOption(args, name) {
  const at = args.indexOf(name);
  if (at === -1) return [];
  return (args[at + 1] ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

export async function storedEntries() {
  const store = getAiStore();
  const entries = [];
  for (const item of await pregenerationItems()) {
    const row = await store.getSimplification(item.cacheKey);
    if (row) entries.push({ id: item.id, row });
  }
  return entries;
}

export async function setStatus(entries, targets, status) {
  const store = getAiStore();
  const changed = [];
  for (const target of targets) {
    const entry = entries.find(({ id, row }) => id === target || row.cacheKey.startsWith(target));
    if (!entry) {
      console.log(`not found: ${target}`);
      continue;
    }
    entry.row = { ...entry.row, status };
    await store.putSimplification(entry.row);
    changed.push(entry.id);
  }
  return changed;
}

async function main() {
  if (existsSync(".env.local")) process.loadEnvFile(".env.local");
  const args = process.argv.slice(2);
  const entries = await storedEntries();
  for (const [flag, status] of [
    ["--approve", "reviewed"],
    ["--reject", "rejected"],
  ]) {
    const changed = await setStatus(entries, listOption(args, flag), status);
    if (changed.length > 0) console.log(`${status}: ${changed.join(", ")}`);
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(`${OUT_DIR}/index.html`, reviewPage(entries));
  console.log(`${entries.length} stored simplifications · wrote ${OUT_DIR}/index.html`);
}

if (import.meta.main) await main();
