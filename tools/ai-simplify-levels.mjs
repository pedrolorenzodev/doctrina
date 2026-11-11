import { readFileSync } from "node:fs";
import { levelSeparation, readingMetrics, wordOverlap } from "@/features/simplify/checks";

const FORMULA = { es: "Fernández-Huerta (higher = easier)", en: "Flesch-Kincaid grade (lower = easier)" };

export function measureLevels(entry) {
  const lang = entry.lang;
  const original = entry.original.join(" ");
  const clear = entry.clear.join(" ");
  const very = entry.very.join(" ");
  const row = (text) => readingMetrics(text, lang);
  return {
    id: entry.id,
    lang,
    original: row(original),
    clear: {
      ...row(clear),
      overlapOriginal: wordOverlap(clear, original),
      phraseOriginal: wordOverlap(clear, original, 2),
    },
    very: {
      ...row(very),
      overlapOriginal: wordOverlap(very, original),
      overlapClear: wordOverlap(very, clear),
      phraseOriginal: wordOverlap(very, original, 2),
      phraseClear: wordOverlap(very, clear, 2),
    },
    gate: levelSeparation(entry.original, { clear: entry.clear, very: entry.very }, lang),
  };
}

const pct = (value) => `${Math.round(value * 100)}%`;
const one = (value) => value.toFixed(1);

export function formatMeasure(measure) {
  const cells = (name, metrics) =>
    `${name.padEnd(8)} words ${String(metrics.words).padStart(4)} · sent ${String(metrics.sentences).padStart(2)} · w/s ${one(metrics.wordsPerSentence).padStart(4)} · chars/w ${one(metrics.charsPerWord)} · read ${one(metrics.readability).padStart(5)} · grade ${one(metrics.grade).padStart(4)}`;
  return [
    `${measure.id} (${measure.lang}, ${FORMULA[measure.lang]})`,
    cells("original", measure.original),
    `${cells("clear", measure.clear)} · overlap/orig ${pct(measure.clear.overlapOriginal)} · phrases/orig ${pct(measure.clear.phraseOriginal)}`,
    `${cells("very", measure.very)} · overlap/orig ${pct(measure.very.overlapOriginal)} · overlap/clear ${pct(measure.very.overlapClear)} · phrases/orig ${pct(measure.very.phraseOriginal)} · phrases/clear ${pct(measure.very.phraseClear)}`,
    `gate: ${measure.gate.length === 0 ? "pass" : measure.gate.join(" | ")}`,
  ].join("\n");
}

function summary(measures) {
  const mean = (pick) => measures.reduce((sum, measure) => sum + pick(measure), 0) / Math.max(1, measures.length);
  return [
    `samples ${measures.length} · gate pass ${measures.filter((measure) => measure.gate.length === 0).length}`,
    `mean grade: original ${one(mean((m) => m.original.grade))} · clear ${one(mean((m) => m.clear.grade))} · very ${one(mean((m) => m.very.grade))}`,
    `mean words/sentence: original ${one(mean((m) => m.original.wordsPerSentence))} · clear ${one(mean((m) => m.clear.wordsPerSentence))} · very ${one(mean((m) => m.very.wordsPerSentence))}`,
    `mean word overlap: clear/orig ${pct(mean((m) => m.clear.overlapOriginal))} · very/orig ${pct(mean((m) => m.very.overlapOriginal))} · very/clear ${pct(mean((m) => m.very.overlapClear))}`,
    `mean phrase overlap: clear/orig ${pct(mean((m) => m.clear.phraseOriginal))} · very/orig ${pct(mean((m) => m.very.phraseOriginal))} · very/clear ${pct(mean((m) => m.very.phraseClear))}`,
  ].join("\n");
}

async function handWritten() {
  process.env.NEXT_PUBLIC_SIMPLIFIER = "on";
  const source = readFileSync("apps/web/src/content/simplified-texts.ts", "utf8");
  const ids = [...source.matchAll(/^ {2}"([^"]+)": \{/gm)].map((match) => match[1]);
  const { getSimplifiedText } = await import("@/content/simplified-texts");
  return ids.map((id) => ({ id, ...getSimplifiedText(id) })).filter((entry) => entry.original);
}

if (process.argv[1]?.endsWith("ai-simplify-levels.mjs")) {
  const args = process.argv.slice(2);
  const file = args[args.indexOf("--json") + 1];
  const entries = args.includes("--json") ? JSON.parse(readFileSync(file, "utf8")) : await handWritten();
  const measures = entries.map(measureLevels);
  for (const measure of measures) console.log(`${formatMeasure(measure)}\n`);
  console.log(summary(measures));
}
