import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { parseArgs } from "node:util";
import { fileURLToPath, pathToFileURL } from "node:url";
import { judgeAnswer } from "./judge.mjs";
import { buildReport, persistToSupabase, summarize } from "./report.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "..", "..");

// TODO: sum the server's logged cost from ai_requests (route eval) when AI_STORE=supabase; the harness only sees the estimate and the judge's own usage.
const ANSWER_USD = 0.005;
const PLAN_ONLY_USD = 0.0005;
const JUDGE_USD = 0.0005;
const REQUEST_TIMEOUT_MS = 120_000;
const RETRY_CODES = new Set(["ai_provider_busy", "ai_provider_down", "ai_timeout"]);

const MAX_QUOTES = 24;
const MAX_QUOTES_BRIEF = 6;
const MAX_PROSE_WORDS = 150;
const MAX_PROSE_WORDS_BRIEF = 60;
const MAX_FOLLOWUPS = 3;

const ANSWER_KINDS = ["evidence", "disputed", "not_found", "pastoral", "out_of_scope", "more"];

const INTENT_KINDS = {
  evidence: ["evidence", "not_found", "more"],
  verdict_request: ["disputed"],
  pastoral: ["pastoral"],
  out_of_scope: ["out_of_scope"],
  injection: ["out_of_scope"],
};

const PAGE_DOCTRINES = ["eucharist", "baptism", "papacy", "sola-scriptura"];
const TRADITIONS_WITH_PAGES = ["catholic", "orthodox", "lutheran", "reformed", "baptist"];
const TRADITION_NAMES = {
  catholic: /cat[oó]lic/iu,
  orthodox: /ortodox|orthodox/iu,
  lutheran: /luteran|lutheran/iu,
  reformed: /reformad|reformed/iu,
  baptist: /bautist|baptist/iu,
};

const NOTES_HEAD = /^(tus notas|your notes)$/iu;
const NOTE_PHRASE = /\btus? notas?\b|\byour notes?\b/iu;

const boundary = (source) => new RegExp(`(?<![\\p{L}\\p{N}])(?:${source})(?![\\p{L}\\p{N}])`, "iu");

export const VERDICT_LEXICON = [
  "la verdad es",
  "claramente",
  "evidentemente",
  "es evidente",
  "demuestra",
  "prueba que",
  "de hecho",
  "correctamente",
  "err[oó]neamente",
  "equivocad[oa]s?",
  "acertad[oa]",
  "es b[ií]blic[oa]",
  "no es b[ií]blic[oa]",
  "la (?:posici[oó]n|lectura) correcta",
  "creemos",
  "nuestra fe",
  "debemos creer",
  "deb[eé]s creer",
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
].map((source) => ({ source, regex: boundary(source) }));

const STOP_WORDS = {
  es: new Set(
    "el la los las del que una por con para sobre se su al lo como más pero sus también este esta entre cuando sin porque donde dice cita habla según de en y un es".split(
      " ",
    ),
  ),
  en: new Set(
    "the of and to in is that for with as on by this are from which was it an at also his they their has have not but be says cites speaks about".split(
      " ",
    ),
  ),
};

const TOKEN = /\{q:([^}]+)\}/gu;

export function stripTokens(text) {
  return text.replace(TOKEN, " ").replace(/\s+/gu, " ").trim();
}

export function wordCount(text) {
  const clean = stripTokens(text);
  return clean === "" ? 0 : clean.split(" ").length;
}

export function splitSentences(text) {
  return text
    .split(/(?<=[.!?…])\s+(?=[\p{Lu}¿¡«"“{])/u)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function tokensIn(text) {
  return [...text.matchAll(TOKEN)].map((match) => match[1]);
}

export function verdictHits(prose) {
  const outsideQuotes = prose
    .replace(/«[^»]*»/gu, " ")
    .replace(/“[^”]*”/gu, " ")
    .replace(/"[^"]*"/gu, " ");
  return VERDICT_LEXICON.filter(({ regex }) => regex.test(outsideQuotes)).map(({ source }) => source);
}

export function languageOf(text) {
  const counts = { es: 0, en: 0 };
  for (const word of text.toLowerCase().match(/[\p{L}]+/gu) ?? []) {
    if (STOP_WORDS.es.has(word)) counts.es += 1;
    if (STOP_WORDS.en.has(word)) counts.en += 1;
  }
  if (counts.es + counts.en < 2) return null;
  if (counts.es === counts.en) return "mixed";
  return counts.es > counts.en ? "es" : "en";
}

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function wireProblems(answer) {
  const problems = [];
  if (!isObject(answer)) return ["answer is not an object"];
  for (const field of ["answerId", "question", "scope", "promptVersion"]) {
    if (typeof answer[field] !== "string") problems.push(`${field} is not a string`);
  }
  if (!ANSWER_KINDS.includes(answer.kind)) problems.push("kind is not an AnswerKind");
  for (const field of ["more", "cached"]) {
    if (typeof answer[field] !== "boolean") problems.push(`${field} is not a boolean`);
  }
  for (const field of ["prose", "plain", "disputed"]) {
    if (answer[field] !== undefined && typeof answer[field] !== "string") problems.push(`${field} is not a string`);
  }
  for (const field of ["followups", "consulted"]) {
    if (!Array.isArray(answer[field]) || answer[field].some((item) => typeof item !== "string")) {
      problems.push(`${field} is not a string list`);
    }
  }
  if (!isObject(answer.quotes)) {
    problems.push("quotes is not an object");
    return problems;
  }
  for (const [key, quote] of Object.entries(answer.quotes)) {
    if (!isObject(quote)) {
      problems.push(`quote ${key} is not an object`);
      continue;
    }
    for (const field of ["id", "key", "who", "work", "text", "edition", "speaker"]) {
      if (typeof quote[field] !== "string") problems.push(`quote ${key}.${field} is not a string`);
    }
    if (quote.id !== key) problems.push(`quote ${key} has id ${String(quote.id)}`);
    if (typeof quote.translatedByAi !== "boolean") problems.push(`quote ${key}.translatedByAi is not a boolean`);
    if (quote.context !== undefined) {
      if (
        !isObject(quote.context) ||
        typeof quote.context.before !== "string" ||
        typeof quote.context.after !== "string"
      ) {
        problems.push(`quote ${key}.context is malformed`);
      }
    }
  }
  if (!Array.isArray(answer.blocks)) {
    problems.push("blocks is not a list");
  } else {
    for (const block of answer.blocks) {
      if (!isObject(block) || typeof block.quote !== "string") problems.push("a block has no quote id");
      else if (block.head !== undefined && typeof block.head !== "string")
        problems.push("a block head is not a string");
      else if (!(block.quote in answer.quotes)) problems.push(`block quote ${block.quote} is not in quotes`);
    }
  }
  if (answer.words !== undefined) {
    if (!Array.isArray(answer.words)) problems.push("words is not a list");
    else {
      for (const entry of answer.words) {
        const complete =
          isObject(entry) &&
          ["tradition", "source", "words", "quote"].every((field) => typeof entry[field] === "string");
        if (!complete) problems.push("a words entry is malformed");
        else if (!(entry.quote in answer.quotes)) problems.push(`words quote ${entry.quote} is not in quotes`);
      }
    }
  }
  for (const id of typeof answer.prose === "string" ? tokensIn(answer.prose) : []) {
    if (!(id in answer.quotes)) problems.push(`prose cites ${id}, which is not in quotes`);
  }
  for (const id of Array.isArray(answer.consulted) ? answer.consulted : []) {
    if (!(id in answer.quotes)) problems.push(`consulted lists ${id}, which is not in quotes`);
  }
  return problems;
}

export function displayedIds(answer) {
  const ids = new Set();
  for (const block of answer.blocks ?? []) ids.add(block.quote);
  for (const entry of answer.words ?? []) ids.add(entry.quote);
  for (const id of tokensIn(answer.prose ?? "")) ids.add(id);
  return [...ids].filter((id) => id in (answer.quotes ?? {}));
}

function parseOsis(text) {
  const match = /^(\d?[A-Za-z]+)\.(\d+)(?:\.(\d+)(?:-(\d+))?)?$/u.exec(text);
  if (!match) return null;
  const verse = match[3] === undefined ? null : Number(match[3]);
  return {
    book: match[1],
    chapter: Number(match[2]),
    verse,
    verseEnd: match[4] === undefined ? verse : Number(match[4]),
  };
}

function keyOsis(key) {
  const parts = key.split(":");
  return parts[0] === "bible" ? parseOsis(parts.slice(2).join(":")) : null;
}

export function keyMatches(key, entry) {
  if (key.startsWith(entry)) return true;
  const wanted = parseOsis(entry);
  const have = keyOsis(key);
  if (!wanted || !have || wanted.book !== have.book || wanted.chapter !== have.chapter) return false;
  if (wanted.verse === null || have.verse === null) return true;
  return wanted.verse <= have.verseEnd && have.verse <= wanted.verseEnd;
}

function keysOf(answer, ids) {
  return ids.map((id) => answer.quotes[id].key);
}

function expectedKinds(question) {
  return question.expect.kind ?? INTENT_KINDS[question.expect.intent];
}

function isBrief(question) {
  return question.tags.includes("brief");
}

function pageDoctrine(question) {
  return question.tags.find((tag) => PAGE_DOCTRINES.includes(tag)) ?? null;
}

function headSections(answer) {
  let current = "";
  return (answer.blocks ?? []).map((block) => {
    if (block.head !== undefined) current = block.head;
    return { quote: block.quote, head: current };
  });
}

function mentionsTradition(tradition, answer, ids) {
  const regex = TRADITION_NAMES[tradition];
  const heads = (answer.blocks ?? []).map((block) => block.head ?? "");
  const words = (answer.words ?? []).map((entry) => entry.tradition);
  const speakers = ids.map((id) => answer.quotes[id].speaker);
  return speakers.includes(tradition) || [...heads, ...words, answer.scope ?? ""].some((text) => regex.test(text));
}

function checkTraditionsAll(question, answer, ids) {
  if (!question.expect.traditionsAll) return null;
  const doctrine = pageDoctrine(question);
  if (doctrine === null) return null;
  return TRADITIONS_WITH_PAGES.every((tradition) => mentionsTradition(tradition, answer, ids));
}

function checkMustInclude(question, answer, ids) {
  const wanted = question.expect.mustInclude;
  if (!wanted?.length) return { ok: null, recall: null, packRecall: null, missing: [] };
  const shown = keysOf(answer, ids);
  const pack = Object.values(answer.quotes).map((quote) => quote.key);
  const missing = wanted.filter((entry) => !shown.some((key) => keyMatches(key, entry)));
  const packMissing = wanted.filter((entry) => !pack.some((key) => keyMatches(key, entry)));
  return {
    ok: missing.length === 0,
    recall: (wanted.length - missing.length) / wanted.length,
    packRecall: (wanted.length - packMissing.length) / wanted.length,
    missing,
  };
}

function checkMustNotInclude(question, answer, ids) {
  const banned = question.expect.mustNotInclude;
  if (!banned?.length) return null;
  const shown = keysOf(answer, ids);
  return !banned.some((entry) => shown.some((key) => keyMatches(key, entry)));
}

function proseOf(answer) {
  return [answer.plain, answer.disputed, answer.prose].filter((part) => typeof part === "string").join(" ");
}

function checkLanguage(question, answer) {
  const text = stripTokens(proseOf(answer));
  const found = languageOf(text);
  if (found === null) return null;
  return found === (question.expect.language ?? question.lang);
}

function checkLimits(question, answer, ids) {
  const brief = isBrief(question);
  return (
    ids.length <= (brief ? MAX_QUOTES_BRIEF : MAX_QUOTES) &&
    wordCount(answer.prose ?? "") <= (brief ? MAX_PROSE_WORDS_BRIEF : MAX_PROSE_WORDS) &&
    (answer.followups ?? []).length <= MAX_FOLLOWUPS
  );
}

const SOURCE_OF_PREFIX = {
  bible: "bible",
  fathers: "fathers",
  tradition: "traditions",
  doctrine: "doctrine",
  glossary: "glossary",
  mine: "notes",
};
const FOCUSED_TAGS = new Set([
  "verse-anchored",
  "named-father",
  "named-tradition",
  ...TRADITIONS_WITH_PAGES,
  "pentecostal",
]);
const QUOTED = /“[^”]*”|«[^»]*»|"[^"]*"/gu;
const BARE_SHARE = 0.6;

export function sourceOf(key) {
  return SOURCE_OF_PREFIX[key.split(":")[0]] ?? null;
}

export function quotedShare(text) {
  const letters = (value) => (value.match(/\p{L}/gu) ?? []).length;
  const total = letters(text);
  if (total === 0) return 0;
  return [...text.matchAll(QUOTED)].reduce((sum, match) => sum + letters(match[0]), 0) / total;
}

function isGeneral(question) {
  return !(question.expect.sources?.length > 0) && !question.tags.some((tag) => FOCUSED_TAGS.has(tag));
}

function checkScopeFaithful(question, answer, ids) {
  const sources = question.expect.sources;
  const traditions = question.expect.traditions;
  if (!sources?.length && !traditions?.length) return null;
  return ids.every((id) => {
    const quote = answer.quotes[id];
    const source = sourceOf(quote.key);
    if (source === "notes") return true;
    if (sources?.length && !sources.includes(source)) return false;
    if (traditions?.length && source === "traditions" && !traditions.includes(quote.speaker)) return false;
    return true;
  });
}

function checkNotBareQuotation(question, answer, ids) {
  const fathers = ids.filter((id) => answer.quotes[id].key.startsWith("fathers:"));
  if (fathers.length === 0) return null;
  return fathers.every((id) => quotedShare(answer.quotes[id].text) <= BARE_SHARE);
}

function checkTraditionsRequested(question, answer, ids) {
  const wanted = question.expect.traditions;
  if (!wanted?.length) return null;
  return wanted.every((tradition) => {
    const shown = ids.some((id) => answer.quotes[id].speaker === tradition);
    const named = TRADITION_NAMES[tradition]?.test(answer.scope ?? "") ?? /pentecost/iu.test(answer.scope ?? "");
    return shown || (tradition === "pentecostal" ? /pentecost/iu.test(answer.scope ?? "") : named);
  });
}

function checkNoteFollowup(question, answer) {
  const wanted = question.expect.noteFollowup;
  if (wanted === undefined) return null;
  if (wanted === "none") return answer.note === undefined;
  return answer.note?.kind === wanted && answer.note.ref === question.expect.noteRef;
}

function checkRichEnough(question, answer, ids) {
  if (isBrief(question) || question.expect.notFound) return null;
  const allowed = expectedKinds(question);
  if (allowed.some((kind) => ["not_found", "out_of_scope", "pastoral"].includes(kind))) return null;
  if (question.expect.intent !== "evidence" && question.expect.intent !== "verdict_request") return null;
  if (!["evidence", "disputed"].includes(answer.kind)) return false;
  const sources = question.expect.sources;
  const packQuotes = Object.values(answer.quotes).filter(
    (quote) => !sources?.length || sources.includes(sourceOf(quote.key)),
  );
  if (ids.length < Math.min(12, packQuotes.length)) return false;
  if (["fathers", "all"].includes(question.scope) && isGeneral(question)) {
    const packAuthors = new Set(
      packQuotes.filter((quote) => quote.key.startsWith("fathers:")).map((quote) => quote.who),
    );
    const shownAuthors = new Set(
      ids.filter((id) => answer.quotes[id].key.startsWith("fathers:")).map((id) => answer.quotes[id].who),
    );
    if (shownAuthors.size < Math.min(5, packAuthors.size)) return false;
  }
  if (question.expect.traditionsAll && pageDoctrine(question) !== null) {
    for (const tradition of TRADITIONS_WITH_PAGES) {
      const count = ids.filter((id) => answer.quotes[id].speaker === tradition).length;
      const listed = TRADITION_NAMES[tradition].test(answer.scope ?? "");
      if (count < 2 && !listed) return false;
    }
  }
  return true;
}

function sharesRun(sentence, note, length) {
  const words = (text) => text.toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [];
  const noteWords = words(note);
  const sentenceWords = words(sentence);
  const grams = new Set();
  for (let index = 0; index + length <= noteWords.length; index += 1) {
    grams.add(noteWords.slice(index, index + length).join(" "));
  }
  for (let index = 0; index + length <= sentenceWords.length; index += 1) {
    if (grams.has(sentenceWords.slice(index, index + length).join(" "))) return true;
  }
  return false;
}

function checkNoteNotEvidence(question, answer) {
  const notes = question.notes ?? [];
  if (notes.length === 0) return null;
  const mine = new Set(
    Object.values(answer.quotes)
      .filter((quote) => quote.key.startsWith("mine:"))
      .map((quote) => quote.id),
  );
  for (const { quote, head } of headSections(answer)) {
    const inNotes = NOTES_HEAD.test(head.trim());
    if (mine.has(quote) !== inNotes) return false;
  }
  for (const entry of answer.words ?? []) {
    if (mine.has(entry.quote)) return false;
  }
  if ((answer.consulted ?? []).some((id) => mine.has(id))) return false;
  const noteTexts = notes.map((note) => note.text);
  for (const sentence of splitSentences(answer.prose ?? "")) {
    const cited = tokensIn(sentence);
    const citesNote = cited.some((id) => mine.has(id));
    if (citesNote) {
      if (cited.some((id) => !mine.has(id)) || !NOTE_PHRASE.test(sentence)) return false;
    } else if (!NOTE_PHRASE.test(sentence) && noteTexts.some((text) => sharesRun(stripTokens(sentence), text, 5))) {
      return false;
    }
  }
  return true;
}

export function scoreAnswer(question, answer) {
  const problems = wireProblems(answer);
  const validWire = problems.length === 0;
  if (!validWire) {
    return {
      checks: { validWire: false },
      problems,
      recall: null,
      packRecall: null,
      missing: [],
      verdictHits: [],
      shown: 0,
    };
  }
  const ids = displayedIds(answer);
  const mustInclude = checkMustInclude(question, answer, ids);
  const hits = verdictHits(answer.prose ?? "");
  const checks = {
    validWire,
    intentOk: INTENT_KINDS[question.expect.intent].includes(answer.kind),
    kindOk: question.expect.kind ? question.expect.kind.includes(answer.kind) : null,
    quotesLiteral: ids.every((id) => {
      const quote = answer.quotes[id];
      const window = `${quote.context?.before ?? ""}${quote.text}${quote.context?.after ?? ""}`;
      return window.includes(quote.text);
    }),
    hasQuotes: ["evidence", "disputed"].includes(answer.kind) ? ids.length > 0 : null,
    traditionsAll: checkTraditionsAll(question, answer, ids),
    mustInclude: mustInclude.ok,
    mustNotInclude: checkMustNotInclude(question, answer, ids),
    language: checkLanguage(question, answer),
    limits: checkLimits(question, answer, ids),
    noVerdict: hits.length === 0,
    richEnough: checkRichEnough(question, answer, ids),
    noteNotEvidence: checkNoteNotEvidence(question, answer),
    scopeFaithful: checkScopeFaithful(question, answer, ids),
    notBareQuotation: checkNotBareQuotation(question, answer, ids),
    traditionsRequested: checkTraditionsRequested(question, answer, ids),
    noteFollowup: checkNoteFollowup(question, answer),
  };
  return {
    checks,
    problems,
    recall: mustInclude.recall,
    packRecall: mustInclude.packRecall,
    missing: mustInclude.missing,
    verdictHits: hits,
    shown: ids.length,
  };
}

const HARD_CHECKS = [
  "validWire",
  "quotesLiteral",
  "hasQuotes",
  "traditionsAll",
  "mustInclude",
  "mustNotInclude",
  "language",
  "limits",
  "noVerdict",
  "richEnough",
  "noteNotEvidence",
  "scopeFaithful",
  "traditionsRequested",
  "noteFollowup",
];

export function questionPassed(question, checks) {
  const gate = question.expect.kind ? "kindOk" : "intentOk";
  return [...HARD_CHECKS, gate].every((name) => checks[name] !== false);
}

export function requestBody(question) {
  const history = question.history ?? [];
  return {
    question: question.question,
    locale: question.lang,
    scope: question.scope,
    here: question.here,
    selection: question.selection ?? null,
    history,
    notes: question.notes ?? [],
    turn: history.length + 1,
  };
}

export function parseSse(text) {
  const events = [];
  for (const block of text.split(/\r?\n\r?\n/u)) {
    let name = "message";
    const data = [];
    for (const line of block.split(/\r?\n/u)) {
      if (line.startsWith("event:")) name = line.slice(6).trim();
      else if (line.startsWith("data:")) data.push(line.slice(5).trimStart());
    }
    if (data.length === 0) continue;
    try {
      events.push({ event: name, data: JSON.parse(data.join("\n")) });
    } catch {
      events.push({ event: "malformed", data: data.join("\n") });
    }
  }
  return events;
}

export function resolveProvider(flag, env) {
  const chosen = (flag ?? env.AI_PROVIDER ?? "").trim();
  if (chosen) return chosen;
  return env.ANTHROPIC_API_KEY ? "anthropic" : "fake";
}

export function estimateUsd(questions, { provider, judge }) {
  if (provider !== "anthropic") return 0;
  let total = 0;
  for (const question of questions) {
    const answers = ["evidence", "verdict_request"].includes(question.expect.intent);
    total += answers ? ANSWER_USD : PLAN_ONLY_USD;
    if (judge) total += JUDGE_USD;
  }
  return total;
}

export function selectQuestions(all, { subset, ids }) {
  let list = all;
  if (subset) {
    const tags = subset.split(",").map((tag) => tag.trim());
    list = list.filter((question) => tags.some((tag) => question.tags.includes(tag)));
  }
  if (ids) {
    const wanted = ids.split(",").map((id) => id.trim());
    list = list.filter((question) => wanted.includes(question.id));
  }
  return list;
}

async function askOnce(base, secret, question) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  const started = performance.now();
  const phases = [];
  try {
    const response = await fetch(`${base}/api/ai/ask`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Origin: new URL(base).origin, "x-ai-eval": secret },
      body: JSON.stringify(requestBody(question)),
      signal: controller.signal,
    });
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("text/event-stream")) {
      const body = await response.json().catch(() => null);
      const code = isObject(body) && typeof body.code === "string" ? body.code : `http_${response.status}`;
      return {
        answer: null,
        error: { code, status: response.status, retry: Boolean(body?.retry) },
        phases,
        latencyMs: performance.now() - started,
      };
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let answer = null;
    let error = null;
    const consume = (final) => {
      const cut = final ? buffer.length : buffer.lastIndexOf("\n\n");
      if (cut < 0) return;
      const complete = buffer.slice(0, cut);
      buffer = buffer.slice(cut);
      for (const { event, data } of parseSse(complete)) {
        if (event === "phase") phases.push({ ...data, atMs: Math.round(performance.now() - started) });
        else if (event === "answer") answer = data;
        else if (event === "error")
          error = { code: data?.code ?? "unknown", status: response.status, retry: Boolean(data?.retry) };
        else error ??= { code: event, status: response.status, retry: false };
      }
    };
    for (;;) {
      const { value, done } = await reader.read();
      if (value) buffer += decoder.decode(value, { stream: true });
      consume(done);
      if (done) break;
    }
    if (!answer && !error) error = { code: "no_answer_event", status: response.status, retry: false };
    return { answer, error: answer ? null : error, phases, latencyMs: performance.now() - started };
  } catch (failure) {
    const code = failure?.name === "AbortError" ? "client_timeout" : "network_error";
    return { answer: null, error: { code, status: 0, retry: false }, phases, latencyMs: performance.now() - started };
  } finally {
    clearTimeout(timer);
  }
}

export async function askQuestion(base, secret, question) {
  let outcome = await askOnce(base, secret, question);
  for (let attempt = 0; attempt < 2 && outcome.error && RETRY_CODES.has(outcome.error.code); attempt += 1) {
    await new Promise((done) => setTimeout(done, 3000 * (attempt + 1)));
    outcome = await askOnce(base, secret, question);
  }
  return outcome;
}

function gitSha() {
  const run = spawnSync("git", ["rev-parse", "HEAD"], { cwd: ROOT, encoding: "utf8" });
  return run.status === 0 ? run.stdout.trim() : null;
}

function timestamp() {
  return new Date().toISOString().replace(/[:.]/gu, "-");
}

function usage(message) {
  console.error(message);
  process.exit(2);
}

async function pool(items, size, work) {
  let next = 0;
  const lanes = Array.from({ length: Math.min(size, items.length) }, async () => {
    while (next < items.length) {
      const index = next;
      next += 1;
      await work(items[index], index);
    }
  });
  await Promise.all(lanes);
}

async function main() {
  const { values } = parseArgs({
    options: {
      base: { type: "string", default: "http://localhost:3100" },
      subset: { type: "string" },
      ids: { type: "string" },
      judge: { type: "boolean", default: false },
      "max-usd": { type: "string", default: "0.50" },
      concurrency: { type: "string", default: "2" },
      out: { type: "string" },
      provider: { type: "string" },
    },
  });
  if (existsSync(resolve(ROOT, ".env.local"))) process.loadEnvFile(resolve(ROOT, ".env.local"));

  const base = values.base.replace(/\/$/u, "");
  const maxUsd = Number(values["max-usd"]);
  const concurrency = Math.max(1, Number.parseInt(values.concurrency, 10) || 2);
  if (!Number.isFinite(maxUsd) || maxUsd < 0) usage("--max-usd must be a number of dollars, 0 or more");

  const all = JSON.parse(readFileSync(resolve(HERE, "questions.json"), "utf8"));
  const questions = selectQuestions(all, { subset: values.subset, ids: values.ids });
  if (questions.length === 0) usage("no question matches --subset / --ids");

  const provider = resolveProvider(values.provider, process.env);
  const estimate = estimateUsd(questions, { provider, judge: values.judge });
  console.log(
    `questions: ${questions.length} · provider: ${provider} · judge: ${values.judge ? "on" : "off"} · estimate: $${estimate.toFixed(4)} · cap: $${maxUsd.toFixed(2)}`,
  );
  if (provider === "anthropic" && estimate > maxUsd) {
    usage(
      `refused: the estimate $${estimate.toFixed(4)} is above --max-usd ${maxUsd}. Raise --max-usd or narrow --subset / --ids.`,
    );
  }

  const secret = process.env.AI_EVAL_SECRET;
  if (!secret) usage("AI_EVAL_SECRET is missing: export the same value in the server's shell and in this one");
  console.log("AI_EVAL_SECRET: set");

  const reachable = await fetch(`${base}/api/ai/status`).then(
    (response) => response.status < 500,
    () => false,
  );
  if (!reachable) usage(`nothing answers at ${base}: start the server first (npx next start -p <port>)`);

  const outDir = resolve(ROOT, values.out ?? `tmp/ai-eval/${timestamp()}`);
  mkdirSync(outDir, { recursive: true });
  const startedAt = new Date();
  const results = new Array(questions.length).fill(null);
  let spentUsd = 0;
  let stopped = null;

  const flush = () => {
    const done = results.filter(Boolean);
    writeFileSync(
      resolve(outDir, "results.json"),
      `${JSON.stringify({ startedAt, base, provider, results: done }, null, 2)}\n`,
    );
  };

  await pool(questions, concurrency, async (question, index) => {
    if (stopped) return;
    const outcome = await askQuestion(base, secret, question);
    const scored = outcome.answer
      ? scoreAnswer(question, outcome.answer)
      : {
          checks: { validWire: false },
          problems: [`error ${outcome.error?.code}`],
          recall: null,
          packRecall: null,
          missing: [],
          verdictHits: [],
          shown: 0,
        };
    let judged = null;
    if (values.judge && outcome.answer && scored.checks.validWire) {
      judged = await judgeAnswer(question, outcome.answer);
      if (provider !== "anthropic") judged.costMicros = 0;
      spentUsd += (judged.costMicros ?? 0) / 1_000_000;
    }
    if (provider === "anthropic")
      spentUsd += ["evidence", "verdict_request"].includes(question.expect.intent) ? ANSWER_USD : PLAN_ONLY_USD;
    results[index] = {
      id: question.id,
      tags: question.tags,
      lang: question.lang,
      question: question.question,
      expect: question.expect,
      passed: outcome.answer ? questionPassed(question, scored.checks) : false,
      checks: scored.checks,
      problems: scored.problems,
      recall: scored.recall,
      packRecall: scored.packRecall,
      missing: scored.missing,
      verdictHits: scored.verdictHits,
      shown: scored.shown,
      judge: judged,
      costMicros: judged?.costMicros ?? 0,
      latencyMs: Math.round(outcome.latencyMs),
      phases: outcome.phases,
      error: outcome.error,
      answer: outcome.answer,
    };
    flush();
    const mark = results[index].passed ? "pass" : "FAIL";
    console.log(
      `${mark} ${question.id} ${Math.round(outcome.latencyMs)} ms${outcome.error ? ` (${outcome.error.code})` : ""}`,
    );
    if (provider === "anthropic" && spentUsd > maxUsd) stopped = `--max-usd reached at about $${spentUsd.toFixed(4)}`;
  });

  const done = results.filter(Boolean);
  const run = {
    startedAt: startedAt.toISOString(),
    finishedAt: new Date().toISOString(),
    base,
    provider,
    judge: values.judge,
    estimateUsd: estimate,
    spentUsdEstimate: spentUsd,
    stopped,
    gitSha: gitSha(),
    results: done,
  };
  writeFileSync(resolve(outDir, "report.md"), buildReport(run, questions));
  flush();
  const summary = summarize(run);
  const store = await persistToSupabase(run, summary, process.env);
  console.log(
    `done: ${summary.passed}/${summary.total} passed · errors ${summary.errors} · p50 ${summary.p50Ms} ms · p95 ${summary.p95Ms} ms · estimate spent $${spentUsd.toFixed(4)}`,
  );
  console.log(
    `gate: ${summary.gate.filter((line) => line.status === "PASS").length}/${summary.gate.length} lines pass`,
  );
  console.log(`supabase: ${store}`);
  if (stopped) console.log(`stopped early: ${stopped}`);
  console.log(`report: ${resolve(outDir, "report.md")}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((failure) => {
    console.error(`ai:eval failed: ${failure instanceof Error ? failure.message : String(failure)}`);
    process.exit(1);
  });
}
