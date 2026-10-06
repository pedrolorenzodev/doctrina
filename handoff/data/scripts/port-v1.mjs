// One-off: ports v1 content (data/raw/v1.json) to the v2 schema as TS modules.
import { readFileSync, writeFileSync } from "fs";
const v1 = JSON.parse(readFileSync("data/raw/v1.json", "utf8"));
const tid = (id) => (id === "baptist-evangelical" ? "baptist" : id);
const en = (s) =>
  s
    .replace(/Sesión/g, "Session").replace(/Decreto sobre la Eucaristía/g, "Decree on the Eucharist")
    .replace(/cap\./g, "ch.").replace(/Pregunta/g, "Question").replace(/pregunta/g, "question")
    .replace(/Artículo/g, "Article").replace(/Decreto/g, "Decree").replace(/Corintios/g, "Corinthians")
    .replace(/Juan/g, "John").replace(/El Sacramento del Altar/g, "The Sacrament of the Altar")
    .replace(/«Bautismo y Cena del Señor»/g, "“Baptism and the Lord's Supper”");
const loc = (s) => ({ es: s, en: en(s) });

const sources = v1.sources.map((s) => {
  const m = s.date.match(/(\d{3,4})(?:\s*[–-]\s*(\d{3,4}))?/);
  const out = {
    ...s,
    year: m ? +m[1] : 0,
    ...(m && m[2] ? { yearEnd: +m[2] } : {}),
    ...(s.date.startsWith("c.") ? { approx: true } : {}),
    recognizedBy: s.kind === "church-father" ? [] : s.recognizedBy.map(tid),
  };
  return out;
});

const authorityFor = { catholic: "dogma", orthodox: "confession", lutheran: "confession", reformed: "confession", baptist: "confession" };
const cit = (c) => ({ ...c, locator: loc(c.locator) });
const studies = v1.eucharist.positions.map((p) => {
  const t = tid(p.traditionId);
  return {
    traditionId: t,
    position: {
      summary: p.summary,
      claims: p.claims.map((c, i) => ({
        text: c.text,
        ...(i === 0 ? { authority: { level: authorityFor[t] } } : {}),
        citations: c.citations.map(cit),
      })),
      reasons: p.reasons.map((c) => ({ text: c.text, citations: c.citations.map(cit) })),
    },
    keyTerms: p.keyTerms ?? [],
  };
});

const header = (imp) => `// Generated from the v1 pilot by tools/port-v1.mjs, then edited by hand.\n${imp}\n\n`;
writeFileSync(
  "src/content/sources.ts",
  header('import type { Source } from "./schema";') +
    `/** Primary-source registry. Only editions whose legal status we know. */\nexport const sources: Source[] = ${JSON.stringify(sources, null, 2)};\n\nexport const sourceById = new Map(sources.map((s) => [s.id, s]));\n`,
);
writeFileSync(
  "src/content/traditions.ts",
  header('import type { Tradition, TraditionId } from "./schema";') +
    `/** The five MVP traditions, in order of visible origin. Each defines itself in its own words. */\nexport const traditions: Tradition[] = ${JSON.stringify(
      v1.traditions.map(({ normativeSources, ...t }) => ({ ...t, id: tid(t.id), ...(t.id === "baptist-evangelical" ? { short: { es: "Bautista", en: "Baptist" } } : {}) })),
      null,
      2,
    )};\n\nexport const traditionById = new Map(traditions.map((t) => [t.id, t])) as Map<TraditionId, Tradition>;\n`,
);
writeFileSync("data/raw/v1.studies.json", JSON.stringify({ studies, commonGround: v1.eucharist.commonGround, question: v1.eucharist.question }, null, 2));
console.log("ok", sources.length, studies.length);
