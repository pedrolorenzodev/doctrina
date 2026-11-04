import fs from "node:fs";
import { parseApologists } from "./apologists-md.mjs";

const SRC = new URL("../../docs/research/passages/", import.meta.url).pathname;
const OUT = new URL("../passages/apologists/", import.meta.url).pathname;
const DOCTRINES = ["baptism", "eucharist", "papacy", "sola-scriptura"];
const TRADITIONS = ["catholic", "lutheran", "reformed", "orthodox", "baptist"];
fs.mkdirSync(OUT, { recursive: true });
const report = [];
for (const d of DOCTRINES)
  for (const t of TRADITIONS) {
    const files = [`apologists-${t}-${d}.md`];
    if (t === "catholic") files.push("apologists-catholic.md");
    const sections = [];
    const issues = [];
    for (const f of files) {
      const parsed = parseApologists(SRC + f);
      parsed.sections.forEach((s) => sections.push({ ...s, file: f, fileDoctrine: f === "apologists-catholic.md" ? null : d }));
      issues.push(...parsed.issues);
    }
    const kept = sections.filter((s) => s.arguments.length && (s.doctrine ?? s.fileDoctrine) === d);
    fs.writeFileSync(`${OUT}${d}-${t}.json`, JSON.stringify({ doctrine: d, tradition: t, files, sections: kept, issues }, null, 1));
    const quotes = kept.flatMap((s) => s.arguments.flatMap((a) => a.quotes));
    report.push(`${d}:${t} sections ${kept.length} quotes ${quotes.length} words ${quotes.reduce((n, q) => n + q.text.split(/\s+/).length, 0)} issues ${issues.length} locatorFallback ${quotes.filter((q) => q.locatorFallback).length}`);
  }
console.log(report.join("\n"));
