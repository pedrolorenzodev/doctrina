import { normalize } from "@/lib/ai/normalize";
import { splitSentences } from "@/lib/ai/sentences";

export type SimplifiedLevels = { clear: string[]; very: string[] };

export type CheckName =
  "shape" | "length" | "numbers" | "quotes" | "names" | "scripts" | "claims" | "language" | "levels" | "fidelity";

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
  /(?<![\p{L}])(cat[oó]lic|ortodox|luteran|reformad|bautist|pentecostal|protestant|evang[eé]lic|catholic|orthodox|lutheran|reformed|baptist)\p{L}*/giu;

const QUOTED = [/«([^«»]+)»/g, /“([^“”]+)”/g, /"([^"]+)"/g];
const ORIGINAL_SCRIPTS = /[\p{Script=Greek}\p{Script=Hebrew}][\p{Script=Greek}\p{Script=Hebrew}\p{M}]*/gu;
const WORDS = /[\p{L}\p{M}]+(?:['’-](?![sS](?![\p{L}]))[\p{L}\p{M}]+)*/gu;
const NOT_NAMES = new Set([
  "I",
  "He",
  "Him",
  "His",
  "Himself",
  "Thee",
  "Thou",
  "Thy",
  "Thine",
  "Thyself",
  "Who",
  "Whom",
  "Whose",
  "Él",
  "Su",
  "Sus",
]);
const OPENS_CLAUSE = /(?:^|[«“"‘(\[¿¡:]|[.?!;]\s)\s*$/u;

const flat = (text: string) => normalize(text).text;
const wordCount = (text: string) => text.split(/\s+/).filter(Boolean).length;
const stems = (text: string) =>
  new Set(
    [...text.matchAll(TRADITION_WORDS)].map((match) =>
      (match[1] ?? "").toLowerCase().replace("ó", "o").replace("é", "e"),
    ),
  );
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

const SPANISH_MARKS = /[áéíóúñ¿¡]|(?<![\p{L}])(?:que|los|las|del|por|una|para|es)(?![\p{L}])/giu;
const ENGLISH_MARKS = /(?<![\p{L}])(?:the|and|of|that|which|is|to|for)(?![\p{L}])/giu;

function guessLang(text: string): ReadingLang {
  return (text.match(SPANISH_MARKS) ?? []).length >= (text.match(ENGLISH_MARKS) ?? []).length ? "es" : "en";
}

const LANGUAGE_NAMES = { es: "Spanish", en: "English" } as const;

function checkLanguage(levels: Level[], lang: ReadingLang, failures: string[]): boolean {
  let passed = true;
  for (const level of levels)
    level.units.forEach((unit, index) =>
      splitSentences(stripQuotes(unit)).forEach((sentence) => {
        if (wordCount(sentence) < 4 || guessLang(sentence) === lang) return;
        if ((sentence.match(lang === "es" ? ENGLISH_MARKS : SPANISH_MARKS) ?? []).length < 2) return;
        failures.push(
          `language: "${level.name}" entry ${index + 1} has a sentence that is not in ${LANGUAGE_NAMES[lang]}: «${sentence.trim()}»`,
        );
        passed = false;
      }),
    );
  return passed;
}

function checkLevels(
  original: string[],
  output: SimplifiedLevels,
  options: { allowIdentity: boolean; lang?: ReadingLang },
  failures: string[],
): boolean {
  if (options.allowIdentity) return true;
  if (output.clear.length !== original.length || output.very.length !== original.length) return true;
  const found = levelSeparation(original, output, options.lang ?? guessLang(original.join(" ")));
  failures.push(...found);
  return found.length === 0;
}

export function checkSimplification(
  original: string[],
  output: SimplifiedLevels,
  options: { allowIdentity: boolean; lang?: ReadingLang } = { allowIdentity: false },
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
    language: checkLanguage(levels, options.lang ?? guessLang(source), failures),
    levels: checkLevels(original, output, options, failures),
    fidelity: true,
  };
  return { passed: failures.length === 0, failures, results };
}

export type ReadingLang = "es" | "en";

export type ReadingMetrics = {
  words: number;
  sentences: number;
  wordsPerSentence: number;
  charsPerWord: number;
  readability: number;
  grade: number;
};

const STRONG_VOWELS = /[aeoáéíóú]/;
const READING_WORDS = /[\p{L}\p{N}]+(?:['’][\p{L}]+)*/gu;

function spanishSyllables(token: string): number {
  const runs = token.match(/[aeiouáéíóúü]+|y$/g) ?? [];
  let count = 0;
  for (const run of runs) {
    count += 1;
    for (let i = 1; i < run.length; i += 1)
      if (STRONG_VOWELS.test(run[i - 1] ?? "") && STRONG_VOWELS.test(run[i] ?? "")) count += 1;
  }
  return Math.max(1, count);
}

function englishSyllables(token: string): number {
  const lower = token.replace(/[^a-z]/g, "");
  if (lower.length <= 3) return 1;
  const trimmed = lower.replace(/(?:[^laeiouy]es|[^laeiouy]ed|[^laeiouy]e)$/, "").replace(/^y/, "");
  return Math.max(1, (trimmed.match(/[aeiouy]{1,2}/g) ?? []).length);
}

function readingTokens(text: string): string[] {
  return normalize(text).text.match(READING_WORDS) ?? [];
}

export function readingMetrics(text: string, lang: ReadingLang): ReadingMetrics {
  const tokens = readingTokens(text);
  const words = Math.max(1, tokens.length);
  const sentences = Math.max(1, splitSentences(text).length);
  const countSyllables = lang === "es" ? spanishSyllables : englishSyllables;
  const syllables = tokens.reduce((sum, token) => sum + countSyllables(token), 0);
  const letters = tokens.reduce((sum, token) => sum + token.length, 0);
  const huerta = 206.84 - 0.6 * ((100 * syllables) / words) - 1.02 * (words / sentences);
  const kincaid = 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59;
  return {
    words: tokens.length,
    sentences,
    wordsPerSentence: words / sentences,
    charsPerWord: letters / words,
    readability: lang === "es" ? huerta : kincaid,
    grade: lang === "es" ? (110 - huerta) / 5 : kincaid,
  };
}

function grams(tokens: string[], size: number): string[] {
  return tokens
    .slice(0, Math.max(0, tokens.length - size + 1))
    .map((_, index) => tokens.slice(index, index + size).join(" "));
}

export function wordOverlap(version: string, reference: string, size: 1 | 2 = 1): number {
  const known = new Set(grams(readingTokens(reference), size));
  const tokens = grams(readingTokens(stripQuotes(version)), size);
  if (tokens.length === 0) return 0;
  return tokens.filter((token) => known.has(token)).length / tokens.length;
}

export const SEPARATION = {
  clear: { gradeDrop: 2, easyGrade: 7, sentenceShare: 0.7, maxOverlap: 0.7 },
  very: {
    gradeDrop: 4,
    easyGrade: 5,
    maxSentenceWords: 12,
    maxOverlap: 0.55,
    maxOverlapClear: 0.65,
    gradeBelowClear: 1.5,
  },
  shortSentenceWords: 15,
} as const;

const fixed = (value: number) => value.toFixed(1);
const percent = (value: number) => `${Math.round(value * 100)} %`;

const QUOTATION_AS_WORD = (text: string) => QUOTED.reduce((rest, pattern) => rest.replace(pattern, "cita"), text);

export function levelSeparation(original: string[], output: SimplifiedLevels, lang: ReadingLang): string[] {
  const source = original.join(" ");
  const clearText = QUOTATION_AS_WORD(output.clear.join(" "));
  const veryText = QUOTATION_AS_WORD(output.very.join(" "));
  const base = readingMetrics(QUOTATION_AS_WORD(source), lang);
  const clear = readingMetrics(clearText, lang);
  const very = readingMetrics(veryText, lang);
  const failures: string[] = [];
  const { clear: forClear, very: forVery, shortSentenceWords } = SEPARATION;
  const clearTarget = Math.max(forClear.easyGrade, base.grade - forClear.gradeDrop);
  if (clear.grade > clearTarget)
    failures.push(
      `levels: "clear" reads at grade ${fixed(clear.grade)}, the original at ${fixed(base.grade)}; bring it to grade ${fixed(clearTarget)} or easier with shorter sentences and everyday words`,
    );
  if (
    base.wordsPerSentence > shortSentenceWords &&
    clear.wordsPerSentence > forClear.sentenceShare * base.wordsPerSentence
  )
    failures.push(
      `levels: "clear" sentences average ${fixed(clear.wordsPerSentence)} words, the original's ${fixed(base.wordsPerSentence)}; split them to at most ${fixed(forClear.sentenceShare * base.wordsPerSentence)}`,
    );
  const clearOverlap = wordOverlap(clearText, source, 2);
  if (clearOverlap > forClear.maxOverlap)
    failures.push(
      `levels: ${percent(clearOverlap)} of the word pairs of "clear" are copied from the original; reword it in modern everyday language (at most ${percent(forClear.maxOverlap)})`,
    );
  const veryTarget = Math.max(forVery.easyGrade, base.grade - forVery.gradeDrop);
  if (very.grade > veryTarget)
    failures.push(
      `levels: "very" reads at grade ${fixed(very.grade)}, the original at ${fixed(base.grade)}; bring it to grade ${fixed(veryTarget)} or easier, as if for a twelve-year-old`,
    );
  if (very.wordsPerSentence > forVery.maxSentenceWords)
    failures.push(
      `levels: "very" sentences average ${fixed(very.wordsPerSentence)} words; split them to at most ${forVery.maxSentenceWords}`,
    );
  const veryOverlap = wordOverlap(veryText, source, 2);
  if (veryOverlap > forVery.maxOverlap)
    failures.push(
      `levels: ${percent(veryOverlap)} of the word pairs of "very" are copied from the original; rewrite it in your own everyday words (at most ${percent(forVery.maxOverlap)})`,
    );
  const veryClearOverlap = wordOverlap(veryText, clearText, 2);
  if (veryClearOverlap > forVery.maxOverlapClear)
    failures.push(
      `levels: "very" repeats ${percent(veryClearOverlap)} of the word pairs of "clear"; it must be a different, much simpler rewrite, not "clear" cut into pieces (at most ${percent(forVery.maxOverlapClear)})`,
    );
  if (very.grade > forVery.easyGrade && clear.grade - very.grade < forVery.gradeBelowClear)
    failures.push(
      `levels: "very" (grade ${fixed(very.grade)}) is not clearly simpler than "clear" (grade ${fixed(clear.grade)}); it must be at least ${forVery.gradeBelowClear} grades easier`,
    );
  return failures;
}
