import { registry } from "@/content/registry";
const by = {};
let n = 0, chars = 0;
for (const c of Object.values(registry.citations)) {
  const w = registry.works[c.work];
  const sp = w?.speaker ?? "?";
  for (const ex of c.excerpts) for (const lang of ["es", "en", "la"]) if (ex[lang]) {
    by[sp] ??= { n: 0, chars: 0 };
    by[sp].n++; by[sp].chars += ex[lang].text.length; n++; chars += ex[lang].text.length;
  }
}
console.log({ n, chars, by });
const lic = {};
for (const e of Object.values(registry.editions)) lic[e.licence] = (lic[e.licence] ?? 0) + 1;
console.log("editions by licence", lic, "verses", Object.keys(registry.verses).length);
