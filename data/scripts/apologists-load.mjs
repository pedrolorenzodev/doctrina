import fs from "node:fs";
import { quoteKey } from "./apologists-md.mjs";
import { assemble, matchSections } from "./apologists-match.mjs";

const DATA = new URL("../passages/", import.meta.url).pathname;
const readJson = (file) => (fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : null);
const paragraphs = (text) => text.split("\n\n");

function finalQuote(quote, translations) {
  const es = translations?.[quote.key];
  const base = { speaker: quote.speaker, work: quote.work, outlet: quote.outlet, date: quote.date, locator: quote.locator, url: quote.url };
  if (es) return { ...base, text: es, original: quote.text, translation: "ai-assisted" };
  return { ...base, text: quote.text, lang: "en" };
}

export function loadApologists(doctrine, tradition, scripture) {
  const data = readJson(`${DATA}apologists/${doctrine}-${tradition}.json`);
  const seeds = readJson(`${DATA}apologists/seeds/${doctrine}-${tradition}.json`) ?? [];
  const translations = readJson(`${DATA}translations/quotes.json`) ?? {};
  const titles = readJson(`${DATA}translations/titles.json`) ?? {};
  const result = scripture.map(() => undefined);
  const report = { sections: data?.sections.length ?? 0, importedSections: 0, unmatched: [], notes: [], quotes: 0, translated: 0, seeds: 0 };
  const matched = data ? matchSections(data.sections, scripture, doctrine, doctrine) : { perPassage: scripture.map(() => []), unmatched: [], notes: [] };
  report.unmatched = matched.unmatched;
  report.notes = matched.notes;
  const usedSections = new Set();
  scripture.forEach((passage, i) => {
    const seed = seeds.find((s) => JSON.stringify(s.refs) === JSON.stringify(passage.refs));
    const argumentsOut = [];
    if (seed) {
      report.seeds += 1;
      seed.apologists.arguments.forEach((a) => argumentsOut.push(a));
    }
    for (const argument of assemble(matched.perPassage[i])) {
      argumentsOut.push({ title: titles[quoteKey(argument.title)] ?? argument.title, quotes: argument.quotes.map((q) => finalQuote(q, translations)) });
      for (const q of argument.quotes) {
        report.quotes += 1;
        if (translations[q.key]) report.translated += 1;
      }
    }
    matched.perPassage[i].forEach((m) => usedSections.add(m.section.line));
    if (argumentsOut.length) result[i] = { ...(seed?.apologists.intro ? { intro: seed.apologists.intro } : {}), arguments: argumentsOut };
  });
  report.importedSections = usedSections.size;
  return { layers: result, report };
}

export { paragraphs };

const TRADITION_WORDS = {
  catholic: { position: "católica", church: "la Iglesia católica", apologists: "católicos" },
  lutheran: { position: "luterana", church: "la tradición luterana", apologists: "luteranos" },
  reformed: { position: "reformada", church: "la tradición reformada", apologists: "reformados" },
  orthodox: { position: "ortodoxa", church: "la tradición ortodoxa", apologists: "ortodoxos" },
  baptist: { position: "bautista", church: "la tradición bautista", apologists: "bautistas" },
};

export function passagesText(tradition, topic) {
  const w = TRADITION_WORDS[tradition];
  return {
    title: `Los pasajes de la posición ${w.position}`,
    lede: `Los versículos que ${w.church} cita sobre ${topic}, completos y con su propia lectura.`,
    officialLabel: `Lo que enseñan los documentos de ${w.church}.`,
    apologistsLabel: `Cómo lo defienden los apologistas ${w.apologists}.`,
  };
}

export function applyPassagesLayer(page, topic) {
  const clean = page.scripture.map((passage) => Object.fromEntries(Object.entries(passage).filter(([key]) => key !== "apologists")));
  const { layers, report } = loadApologists(page.doctrine, page.tradition, clean);
  const rest = Object.fromEntries(Object.entries(page).filter(([key]) => key !== "passages"));
  const scripture = clean.map((passage, i) => (layers[i] ? { ...passage, apologists: layers[i] } : passage));
  const entries = Object.entries(rest);
  const at = entries.findIndex(([key]) => key === "scripture");
  entries.splice(at, 1, ["scripture", scripture], ["passages", passagesText(page.tradition, topic)]);
  return { page: Object.fromEntries(entries), report: { ...report, passages: clean.length, withLayer: layers.filter(Boolean).length } };
}
