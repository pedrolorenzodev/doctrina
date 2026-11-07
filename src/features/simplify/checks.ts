import { normalize } from "@/lib/ai/normalize";
import { splitSentences } from "@/lib/ai/sentences";

export type SimplifiedLevels = { clear: string[]; very: string[] };

export type CheckName = "shape" | "length" | "numbers" | "quotes" | "names" | "scripts" | "claims";

export type CheckReport = { passed: boolean; failures: string[]; results: Record<CheckName, boolean> };

type Level = { name: "clear" | "very"; units: string[]; text: string };

const RATIO = { clear: [0.6, 1.4], very: [0.5, 1.6] } as const;
const SHORT_SENTENCE_WORDS = 16;

const word = (body: string) => new RegExp(`(?<![\\p{L}\\p{N}])(?:${body})(?![\\p{L}\\p{N}])`, "iu");

const VERDICT = word(
  [
    "la verdad es",
    "claramente",
    "evidentemente",
    "es evidente",
    "demuestra",
    "prueba que",
    "de hecho",
    "correctamente",
    "erróneamente",
    "equivocad[oa]s?",
    "acertad[oa]",
    "es bíblic[oa]",
    "no es bíblic[oa]",
    "la (?:posición|lectura) correcta",
    "creemos",
    "nuestra fe",
    "debemos creer",
    "debés creer",
    "herej[ií]a",
    "the truth is",
    "clearly",
    "evidently",
    "it is evident",
    "proves",
    "demonstrates",
    "in fact",
    "correctly",
    "wrongly",
    "mistaken",
    "is (?:un)?biblical",
    "the correct (?:view|reading)",
    "we believe",
    "our faith",
    "you should believe",
    "heresy",
  ].join("|"),
);

const ADDED_CLAIM =
  /^(?:esto significa|en otras palabras|es decir que|this means|in other words|that is to say)(?![\p{L}])/iu;
const ADDED_CLAIM_ANYWHERE = word(
  "esto significa|en otras palabras|es decir que|this means|in other words|that is to say",
);

const TRADITION_WORDS =
  /(?<![\p{L}])(?:cat[oó]lic|ortodox|luteran|reformad|bautist|pentecostal|protestant|evang[eé]lic|catholic|orthodox|lutheran|reformed|baptist)\p{L}*/giu;

const QUOTED = [/«([^«»]+)»/g, /“([^“”]+)”/g, /"([^"]+)"/g];
const ORIGINAL_SCRIPTS = /[\p{Script=Greek}\p{Script=Hebrew}][\p{Script=Greek}\p{Script=Hebrew}\p{M}]*/gu;
const WORDS = /[\p{L}\p{M}]+(?:['’-][\p{L}\p{M}]+)*/gu;
const NOT_NAMES = new Set(["I"]);
const OPENS_CLAUSE = /(?:^|[«“"‘(\[¿¡:]|[.?!;]\s)\s*$/u;

const flat = (text: string) => normalize(text).text;
const wordCount = (text: string) => text.split(/\s+/).filter(Boolean).length;
const stems = (text: string) => new Set([...text.matchAll(TRADITION_WORDS)].map((match) => match[0].toLowerCase()));
const stripQuotes = (text: string) => QUOTED.reduce((rest, pattern) => rest.replace(pattern, " "), text);

function meanSentenceWords(text: string): number {
  const count = Math.max(1, splitSentences(text).length);
  return wordCount(text) / count;
}

function quotedSpans(text: string): string[] {
  return QUOTED.flatMap((pattern) =>
    [...text.matchAll(pattern)].map((match) =>
      (match[1] ?? "").replace(/\[(?:…|\.\.\.)\]|…|\.\.\./g, " ").replace(/^[\s.,;:]+|[\s.,;:]+$/g, ""),
    ),
  ).filter((span) => span.length > 0);
}

function nonInitialCapitals(text: string): string[] {
  return splitSentences(text).flatMap((sentence) =>
    [...sentence.matchAll(WORDS)]
      .filter((match) => !OPENS_CLAUSE.test(sentence.slice(0, match.index)))
      .map((match) => match[0])
      .filter((token) => /^\p{Lu}/u.test(token) && !NOT_NAMES.has(token)),
  );
}

function digitGroups(text: string): Set<string> {
  return new Set(text.match(/\d+/g) ?? []);
}

function checkShape(original: string[], levels: Level[], failures: string[]): boolean {
  let passed = true;
  for (const level of levels) {
    if (level.units.length !== original.length) {
      failures.push(
        `shape: "${level.name}" has ${level.units.length} entries; it must have exactly ${original.length}, one per numbered sentence`,
      );
      passed = false;
    }
    level.units.forEach((unit, index) => {
      if (unit.trim()) return;
      failures.push(`shape: "${level.name}" entry ${index + 1} is empty`);
      passed = false;
    });
  }
  return passed;
}

function checkLength(source: string, levels: Level[], allowIdentity: boolean, failures: string[]): boolean {
  let passed = true;
  const originalWords = Math.max(1, wordCount(source));
  for (const level of levels) {
    const ratio = wordCount(level.text) / originalWords;
    const [low, high] = RATIO[level.name];
    if (ratio < low || ratio > high) {
      failures.push(
        `length: "${level.name}" has ${Math.round(ratio * 100)} % of the original's words; it must stay between ${low * 100} % and ${high * 100} %`,
      );
      passed = false;
    }
  }
  const very = levels.find((level) => level.name === "very");
  const originalMean = meanSentenceWords(source);
  const identical = allowIdentity && very !== undefined && very.text === source;
  if (very && !identical && originalMean > SHORT_SENTENCE_WORDS && meanSentenceWords(very.text) >= originalMean) {
    failures.push(`length: the sentences of "very" are not shorter than the original's; keep them near fifteen words`);
    passed = false;
  }
  return passed;
}

function checkNumbers(source: string, levels: Level[], failures: string[]): boolean {
  const required = digitGroups(source);
  let passed = true;
  for (const level of levels) {
    const found = digitGroups(level.text);
    for (const group of required)
      if (!found.has(group)) {
        failures.push(`numbers: «${group}» is in the original but missing from "${level.name}"`);
        passed = false;
      }
    for (const group of found)
      if (!required.has(group)) {
        failures.push(`numbers: «${group}» in "${level.name}" is not in the original`);
        passed = false;
      }
  }
  return passed;
}

function checkQuotes(source: string, levels: Level[], failures: string[]): boolean {
  const original = flat(source);
  let passed = true;
  for (const level of levels) {
    const text = flat(level.text);
    for (const span of quotedSpans(source))
      if (!text.includes(flat(span))) {
        failures.push(`quotes: the quoted words «${span}» must appear exactly as written in "${level.name}"`);
        passed = false;
      }
    for (const span of quotedSpans(level.text))
      if (!original.includes(flat(span))) {
        failures.push(
          `quotes: "${level.name}" puts «${span}» in quotation marks, but those words are not in the original`,
        );
        passed = false;
      }
  }
  return passed;
}

function checkNames(source: string, levels: Level[], failures: string[]): boolean {
  const originalWords = new Set([...source.matchAll(WORDS)].map((match) => match[0].toLowerCase()));
  const required = new Set(nonInitialCapitals(source));
  const traditions = stems(source);
  let passed = true;
  for (const level of levels) {
    const present = new Set([...level.text.matchAll(WORDS)].map((match) => match[0]));
    for (const name of required)
      if (!present.has(name)) {
        failures.push(`names: «${name}» is in the original but missing from "${level.name}"`);
        passed = false;
      }
    for (const name of new Set(nonInitialCapitals(level.text)))
      if (!originalWords.has(name.toLowerCase())) {
        failures.push(`names: "${level.name}" adds «${name}», which is not in the original`);
        passed = false;
      }
    const levelTraditions = stems(level.text);
    for (const tradition of traditions)
      if (!levelTraditions.has(tradition)) {
        failures.push(`names: «${tradition}» (who is speaking) is missing from "${level.name}"`);
        passed = false;
      }
    for (const tradition of levelTraditions)
      if (!traditions.has(tradition)) {
        failures.push(`names: "${level.name}" adds a tradition, «${tradition}», that the original does not name`);
        passed = false;
      }
  }
  return passed;
}

function checkScripts(source: string, levels: Level[], failures: string[]): boolean {
  const tokens = new Set(source.match(ORIGINAL_SCRIPTS) ?? []);
  let passed = true;
  for (const level of levels)
    for (const token of tokens)
      if (!level.text.includes(token)) {
        failures.push(`scripts: the original word «${token}» must be copied unchanged into "${level.name}"`);
        passed = false;
      }
  return passed;
}

function checkClaims(original: string[], levels: Level[], failures: string[]): boolean {
  let passed = true;
  for (const level of levels)
    level.units.forEach((unit, index) => {
      const sentence = original[index] ?? "";
      const opensWithClaim = splitSentences(unit).some((part) => ADDED_CLAIM.test(part.trim()));
      if (opensWithClaim && !ADDED_CLAIM_ANYWHERE.test(sentence)) {
        failures.push(
          `claims: "${level.name}" entry ${index + 1} adds an explanation («this means», «in other words») that the original sentence does not have`,
        );
        passed = false;
      }
      const verdict = VERDICT.exec(stripQuotes(unit));
      if (verdict && !VERDICT.test(stripQuotes(sentence))) {
        failures.push(
          `claims: "${level.name}" entry ${index + 1} adds the judgement «${verdict[0]}», which the original sentence does not make`,
        );
        passed = false;
      }
    });
  return passed;
}

export function checkSimplification(
  original: string[],
  output: SimplifiedLevels,
  options: { allowIdentity: boolean } = { allowIdentity: false },
): CheckReport {
  const source = original.join(" ");
  const levels: Level[] = [
    { name: "clear", units: output.clear, text: output.clear.join(" ") },
    { name: "very", units: output.very, text: output.very.join(" ") },
  ];
  const failures: string[] = [];
  const results: Record<CheckName, boolean> = {
    shape: checkShape(original, levels, failures),
    length: checkLength(source, levels, options.allowIdentity, failures),
    numbers: checkNumbers(source, levels, failures),
    quotes: checkQuotes(source, levels, failures),
    names: checkNames(source, levels, failures),
    scripts: checkScripts(source, levels, failures),
    claims: checkClaims(original, levels, failures),
  };
  return { passed: failures.length === 0, failures, results };
}
