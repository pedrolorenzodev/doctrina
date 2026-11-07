import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { isAiChecked, isClearOnly, isServable } from "@/content/ai-simplify/cache";
import { getAiStore } from "@/content/ai-store/get-ai-store";
import { pregenerationItems } from "./ai-pregenerate-simplifications.mjs";

const OUT_DIR = "tmp/ai-review";

const escape = (text) =>
  String(text).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function checksLine(checks) {
  const names = ["shape", "length", "numbers", "quotes", "names", "scripts", "claims", "language", "levels"];
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

function option(args, name, fallback) {
  const at = args.indexOf(name);
  return at === -1 ? fallback : args[at + 1];
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
    if (row) entries.push({ id: item.id, row, item });
  }
  return entries;
}

const TRADITION_NAMES = {
  catholic: "católica",
  orthodox: "ortodoxa",
  lutheran: "luterana",
  reformed: "reformada",
  baptist: "bautista",
  pentecostal: "pentecostal",
};

const COMMAND =
  "node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/ai-review-simplifications.mjs";

export function pickSample(entries, size, random = Math.random) {
  const checked = entries.filter(
    ({ row, item }) =>
      item.address.kind === "statement" && isAiChecked(row) && isServable(item.address, row, item.resolved.text),
  );
  const shuffled = checked
    .map((entry) => ({ entry, order: random() }))
    .sort((a, b) => a.order - b.order)
    .map(({ entry }) => entry);
  const byTradition = new Map();
  for (const entry of shuffled) {
    const tradition = entry.item.address.tradition;
    byTradition.set(tradition, [...(byTradition.get(tradition) ?? []), entry]);
  }
  const perTradition = Math.max(1, Math.floor(size / Math.max(1, byTradition.size)));
  const picked = [...byTradition.values()].flatMap((group) => group.slice(0, perTradition));
  for (const entry of shuffled) if (picked.length < size && !picked.includes(entry)) picked.push(entry);
  return picked.slice(0, size);
}

export function samplePage(sample, available) {
  const sections = sample
    .map(({ id, row, item }, index) => {
      const fidelity = row.checks.fidelity ?? {};
      const single = isClearOnly(row);
      const rows = row.original
        .map(
          (sentence, at) =>
            `<tr><td>${escape(sentence)}</td><td>${escape(row.clear[at] ?? "")}</td>${single ? "" : `<td>${escape(row.very[at] ?? "")}</td>`}</tr>`,
        )
        .join("");
      const head = single
        ? "<th>Original</th><th>Más claro</th>"
        : "<th>Original</th><th>Más claro</th><th>Muy simple</th>";
      const tradition = TRADITION_NAMES[item.address.tradition] ?? item.address.tradition;
      const rounds = fidelity.rounds > 1 ? `aprobó en el intento ${fidelity.rounds}` : "aprobó al primer intento";
      return `<section id="${escape(id)}"><h2>${index + 1}. ${escape(id)} <small>tradición ${escape(tradition)}</small></h2>
<p class="meta">Juez de fidelidad (${escape(fidelity.model ?? "—")}): ningún cambio de sentido · ${escape(rounds)} · ${escape(String(fidelity.at ?? "").slice(0, 10))}</p>
<table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>
<p class="cmd">Si está bien: <code>${escape(COMMAND)} --approve ${escape(id)}</code><br>Si cambia el sentido: <code>${escape(COMMAND)} --reject ${escape(id)}</code></p></section>`;
    })
    .join("\n");
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Muestra de simplificaciones</title>
<style>body{font:16px/1.5 Georgia,serif;margin:0 auto;max-width:1200px;padding:16px;color:#222;background:#fbfaf7}h1{font:600 22px/1.3 system-ui,sans-serif}h2{font:600 15px/1.3 system-ui,sans-serif;margin:32px 0 4px}small,.meta,.cmd,.intro{font:14px/1.5 system-ui,sans-serif;color:#555}code{font:12px ui-monospace,monospace;background:#eee;padding:1px 4px;word-break:break-all}table{border-collapse:collapse;width:100%}td,th{border-top:1px solid #ddd;padding:8px;vertical-align:top;text-align:left;width:33%}th{font:600 13px system-ui,sans-serif}@media (max-width:700px){td,th{display:block;width:auto}}</style></head>
<body><h1>Muestra de ${sample.length} simplificaciones controladas por IA</h1>
<p class="intro">Elegidas al azar entre ${available} párrafos de páginas de tradición que pasaron los controles y el juez de fidelidad (dos por tradición cuando se puede). Leé cada uno: el original y «Más claro» (en las páginas de tradición solo se ofrece ese nivel). Si alguno cambia lo que dice el original (una afirmación, una condición, una negación, un término, quién habla), rechazalo con el comando de abajo; deja de mostrarse y la próxima pregeneración lo rehace. Si está bien, no hace falta hacer nada: aprobarlo solo lo marca como «Revisado».</p>
${sections || "<p>Todavía no hay párrafos controlados por IA.</p>"}</body></html>`;
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
  const sampleSize = Number(option(args, "--sample", "0"));
  if (sampleSize > 0) {
    const sample = pickSample(entries, sampleSize);
    const available = entries.filter(({ row, item }) => item.address.kind === "statement" && isAiChecked(row)).length;
    writeFileSync(`${OUT_DIR}/muestra.html`, samplePage(sample, available));
    console.log(
      `sample of ${sample.length} (of ${available} AI-checked tradition paragraphs) · wrote ${OUT_DIR}/muestra.html`,
    );
    return;
  }
  writeFileSync(`${OUT_DIR}/index.html`, reviewPage(entries));
  console.log(`${entries.length} stored simplifications · wrote ${OUT_DIR}/index.html`);
}

if (import.meta.main) await main();
