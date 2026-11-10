import fs from "node:fs";
import { verseSet } from "./passage-normalize.mjs";
import { loadFocus, saveFocus, sameRefs } from "./passage-focus-data.mjs";

const ROOT = new URL("../passages/", import.meta.url).pathname;
const REVIEW = new URL("../../docs/features/passages-focus.md", import.meta.url).pathname;
const readJson = (file) => (fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : null);
const BIBLES = ["rv1909", "bsb", "kjv", "web-c", "dra"].map((id) => [
  id,
  JSON.parse(fs.readFileSync(new URL(`../corpus/bibles/${id}.json`, import.meta.url), "utf8")),
]);

export const THRESHOLDS = { share: 0.5, ratio: 2, pairShare: 0.75, pairMinBlock: 4, minSignals: 2, minUnits: 4 };

const STOP = new Set(
  "the and for not but his her who you our was are has had him she can may that this with from have they them their there were been which shall unto upon thou thee thy your what when will would into than then also only each such these those para como pero porque entre sobre desde hasta cuando donde aquel aquella sido sera seran esta este esto estos todo todos cada".split(
    " ",
  ),
);
const NUMBER_WORDS = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty".split(
  " ",
);
const TENS = { 20: "twenty", 30: "thirty", 40: "forty" };
const ONES = NUMBER_WORDS.slice(1, 10);
const wordOf = (n) =>
  n <= 20 ? NUMBER_WORDS[n] : n < 50 && n % 10 === 0 ? TENS[n] : n < 50 ? `${TENS[Math.floor(n / 10) * 10]}-${ONES[(n % 10) - 1]}` : "zzzz";

const norm = (text) =>
  (text.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "").match(/[a-z0-9]+/g) ?? []);
const grams = (tokens, n) => {
  const out = new Set();
  for (let i = 0; i + n <= tokens.length; i += 1) out.add(tokens.slice(i, i + n).join(" "));
  return out;
};
const plainGrams = (tokens) => {
  const out = new Set();
  for (let i = 0; i + 3 <= tokens.length; i += 1) {
    const g = tokens.slice(i, i + 3);
    if (g.every((w) => w.length >= 3 && !STOP.has(w))) out.add(g.join(" "));
  }
  return out;
};
const verseNumber = (key) => Number(key.split(".")[2]);
const chapterNumber = (key) => Number(key.split(".")[1]);

const PRE_MERGE = readJson(`${ROOT}pre-merge-persons.json`);

function legacyPersons(key) {
  return (PRE_MERGE[key] ?? []).map((entry) => ({ verses: verseSet(entry.refs), persons: entry.persons.length }));
}

function analyse(passage, ref, legacy) {
  const verses = [...verseSet([ref])];
  const blockSet = new Set(verses);
  const tokens = Object.fromEntries(verses.map((k) => [k, BIBLES.map(([id, bible]) => [id, norm(bible[k] ?? "")])]));
  const s1 = Object.fromEntries(verses.map((k) => [k, 0]));
  const s2 = { ...s1 };
  const s3 = { ...s1 };
  const reading = passage.text.replace(/\{[cv]:[^}]*\}/g, "");
  for (const phrase of reading.match(/«[^»]+»/g) ?? []) {
    const wanted = norm(phrase.slice(1, -1));
    if (wanted.length < 3) continue;
    for (const k of verses) if (` ${tokens[k][0][1].join(" ")} `.includes(` ${wanted.join(" ")} `)) s1[k] += 1;
  }
  for (const { verses: old, persons } of legacy) {
    if (old.size < blockSet.size && [...old].every((v) => blockSet.has(v)))
      for (const k of old) s2[k] += persons / old.size;
  }
  const items = (passage.apologists?.arguments ?? []).flatMap((argument) => [
    argument.title,
    ...argument.quotes.map((quote) => `${quote.original ?? ""} ${quote.text}`),
  ]);
  const own = Object.fromEntries(
    verses.map((k) => {
      const set = new Set();
      for (const [, toks] of tokens[k]) {
        for (const g of grams(toks, 4)) set.add(g);
        for (const g of plainGrams(toks)) set.add(g);
      }
      return [k, set];
    }),
  );
  const count = new Map();
  for (const k of verses) for (const g of own[k]) count.set(g, (count.get(g) ?? 0) + 1);
  const unique = Object.fromEntries(verses.map((k) => [k, new Set([...own[k]].filter((g) => count.get(g) === 1))]));
  for (const item of items) {
    const toks = norm(item);
    const itemGrams = new Set([...grams(toks, 4), ...plainGrams(toks)]);
    for (const k of verses) {
      const v = verseNumber(k);
      const mention = new RegExp(
        `\\b${chapterNumber(k)}:${v}\\b|\\bverses? ${v}\\b|\\bvers[ií]culo ${v}\\b|\\bv\\. ?${v}\\b|\\bverse ${wordOf(v)}\\b`,
        "i",
      );
      if (mention.test(item) || [...itemGrams].some((g) => unique[k].has(g))) s3[k] += 1;
    }
  }
  return { verses, s1, s2, s3 };
}

export function decide({ verses, s1, s2, s3 }) {
  const signals = [s1, s2, s3].filter((s) => Object.values(s).reduce((a, b) => a + b, 0) > 0);
  const units = [s1, s2, s3].reduce((n, s) => n + Object.values(s).reduce((a, b) => a + b, 0), 0);
  if (signals.length < THRESHOLDS.minSignals || units < THRESHOLDS.minUnits)
    return { kind: "insufficient", focus: [], weight: null, signals: signals.length, units };
  const weight = Object.fromEntries(
    verses.map((k) => [k, signals.reduce((sum, s) => sum + s[k] / Object.values(s).reduce((a, b) => a + b, 0), 0) / signals.length]),
  );
  const ranked = [...verses].sort((a, b) => weight[b] - weight[a]);
  const [first, second, third] = ranked;
  const next = second ? weight[second] : 0;
  const result = (kind, focus) => ({ kind, focus, weight, signals: signals.length, units });
  if (weight[first] >= THRESHOLDS.share && (next === 0 || weight[first] >= THRESHOLDS.ratio * next)) return result("one", [first]);
  const rest = third ? weight[third] : 0;
  if (
    verses.length >= THRESHOLDS.pairMinBlock &&
    weight[first] + weight[second] >= THRESHOLDS.pairShare &&
    (rest === 0 || Math.min(weight[first], weight[second]) >= THRESHOLDS.ratio * rest)
  )
    return result("two", [first, second]);
  return result("none", []);
}

export function proposeFocus(passage, legacy) {
  return passage.refs.map((ref) => {
    const evidence = analyse(passage, ref, legacy);
    const decision = evidence.verses.length < 2 ? { kind: "single", focus: [], weight: null, signals: 0, units: 0 } : decide(evidence);
    return { ref, evidence, decision };
  });
}

const emptyCounts = () => ({ blocks: 0, one: 0, two: 0, none: 0, insufficient: 0 });
const short = (key) => key.split(".").slice(1).join(":");
const pct = (x) => `${Math.round(x * 100)}%`;
function evidenceLine({ evidence, decision }) {
  const { verses, s1, s2, s3 } = evidence;
  const per = (k) => `${short(k)} S1 ${s1[k]} · S2 ${Math.round(s2[k] * 10) / 10} · S3 ${s3[k]}`;
  if (decision.kind === "single") return "single verse";
  if (decision.kind === "insufficient") {
    const found = verses.filter((k) => s1[k] + s2[k] + s3[k] > 0).map(per);
    return `${decision.signals} signal(s), ${decision.units} unit(s): not enough${found.length ? ` (${found.join("; ")})` : ""}`;
  }
  const ranked = [...verses].sort((a, b) => decision.weight[b] - decision.weight[a]).slice(0, 3);
  return `${ranked.map((k) => `${short(k)} ${pct(decision.weight[k])} (${per(k)})`).join("; ")}`;
}

const CALIBRATION = [
  ["baptism:catholic", ["Acts.2.37-Acts.2.42"], "Acts.2.38"],
  ["baptism:catholic", ["1Pet.3.18-1Pet.3.22"], "1Pet.3.21"],
  ["baptism:catholic", ["Mark.16.15-Mark.16.16"], "Mark.16.16"],
  ["baptism:catholic", ["Gal.3.26-Gal.3.29"], "Gal.3.27"],
  ["baptism:catholic", ["Matt.3.13-Matt.3.17"], "Matt.3.15"],
  ["baptism:catholic", ["John.3.3-John.3.8"], "John.3.5"],
  ["baptism:catholic", ["Titus.3.4-Titus.3.7"], "Titus.3.5"],
];

async function main() {
  const { spanishPages } = await import("@/content/pages/index");
  const { shownScripture } = await import("@/content/shown-passages");
  const args = process.argv.slice(2);
  const command = args[0] && !args[0].startsWith("--") ? args[0] : "run";
  const dry = args.includes("--dry");
  if (command === "confirm" || command === "set") {
    const key = args[1];
    const data = loadFocus(key);
    if (command === "confirm") data.passages.forEach((entry) => (entry.status = "confirmed"));
    else {
      const refs = args[2].split(",");
      const focus = args[3] === "none" ? [] : args[3].split(",");
      const at = data.passages.findIndex((e) => sameRefs(e.refs, refs));
      const entry = { refs, focus, status: "confirmed" };
      if (at >= 0) data.passages[at] = entry;
      else data.passages.push(entry);
    }
    saveFocus(key, data);
    return;
  }
  const report = [];
  const totals = {};
  const calibrationRows = [];
  for (const [pageKey, page] of Object.entries(spanishPages)) {
    if (!page.scripture) continue;
    const [doctrine, tradition] = pageKey.split("/");
    const key = `${doctrine}:${tradition}`;
    const legacy = legacyPersons(key);
    const existing = loadFocus(key);
    const confirmed = existing.passages.filter((e) => e.status === "confirmed");
    const next = [];
    const rows = [];
    for (const passage of shownScripture(page)) {
      const blocks = proposeFocus(passage, legacy);
      const kept = confirmed.find((e) => sameRefs(e.refs, passage.refs));
      const proposedFocus = blocks.flatMap((b) => b.decision.focus);
      if (kept) next.push(kept);
      else if (proposedFocus.length) next.push({ refs: passage.refs, focus: proposedFocus, status: "proposed" });
      blocks.forEach((block) => {
        const row = { ref: block.ref, n: block.evidence.verses.length, kind: block.decision.kind, focus: block.decision.focus, line: evidenceLine(block), kept: kept && kept.focus.filter((v) => block.evidence.verses.includes(v)) };
        rows.push(row);
        const size = row.n >= 3 ? "long" : "pair";
        const bucket = ((totals[tradition] ??= { long: emptyCounts(), pair: emptyCounts() })[size]);
        if (row.n >= 2) {
          bucket.blocks += 1;
          bucket[block.decision.kind] += 1;
        }
        const cal = CALIBRATION.find(([k, refs]) => k === key && sameRefs(refs, [block.ref]));
        if (cal) calibrationRows.push({ ref: block.ref, expected: cal[2], got: block.decision.focus, kind: block.decision.kind, line: row.line });
      });
    }
    const stale = confirmed.filter((e) => !shownScripture(page).some((p) => sameRefs(p.refs, e.refs)));
    next.push(...stale);
    if (!dry) saveFocus(key, { passages: next });
    report.push({ key, rows, stale });
  }
  for (const [tradition, t] of Object.entries(totals))
    for (const size of ["long", "pair"])
      console.log(`${tradition} ${size}: blocks ${t[size].blocks} · one ${t[size].one} · two ${t[size].two} · none dominates ${t[size].none} · insufficient ${t[size].insufficient}`);
  for (const c of calibrationRows)
    console.log(`calibration ${c.ref}: Pedro ${c.expected} · rule ${c.got.join(",") || "none"} (${c.kind}) ${c.line}`);
  if (!dry) fs.writeFileSync(REVIEW, renderReview(report, totals, calibrationRows));
}

function renderReview(report, totals, calibration) {
  const lines = [];
  lines.push("# Central verse of a passage (variant D «Fondo»)", "");
  lines.push(
    "Generated by `npm run passage-focus` (`data/scripts/passage-focus.mjs`): do not edit by hand; the script rewrites these tables and never overwrites a `confirmed` entry in `data/passages/focus/`.",
    "",
    "**Intent.** Variant D «Fondo» (a soft fill behind the central verse, its number inside; token `--color-verse-focus`) on the Pasajes page. Proposal: https://claude.ai/artifact/XQrDNnEYsMRp9HJqAqRxpi. The default is no highlight; a verse is central only when the evidence rule finds it clearly (also in 2-verse blocks); Pedro reviews the proposals page by page and his corrections are stored as `confirmed`.",
    "",
    "**Rule (thresholds in `THRESHOLDS`).** Signals per verse: S1 official-reading phrases found in the verse (RV1909), S2 persons of the narrower pre-merge entries (snapshot `data/passages/pre-merge-persons.json`), S3 apologist titles and quotes that name the verse or share a 3-4 word sequence only with it (RV1909, BSB, KJV, WEB, DRA). Weight = mean share over the active signals. Needs at least 2 active signals and 4 units of evidence. One central if weight is at least 50 % and at least 2 times the next; two only in blocks of 4+ verses if together at least 75 % and each at least 2 times the third; otherwise none.",
    "",
    "**Review.** `npm run passage-focus -- confirm <doctrine>:<tradition>` marks every proposal of a page as confirmed; `npm run passage-focus -- set <doctrine>:<tradition> <refs,comma> <verses,comma|none>` stores Pedro's correction as confirmed (for example `set baptism:catholic Mark.16.15-Mark.16.16 Mark.16.16`, refs with a comma for multi-ref passages). `npm run lint` checks every entry (`tools/check-passage-focus.mjs`).",
    "",
    "**Out of scope.** The Bible reader (no mark there), a visible label, any announcement to screen readers, motion.",
    "",
  );
  lines.push("## Counts per tradition (shown passages only)", "");
  lines.push("| Tradition | Size | Blocks | One verse | Two verses | Evidence but none dominates | Not enough evidence |", "|---|---|---|---|---|---|---|");
  for (const size of ["long", "pair"]) {
    for (const [tradition, t] of Object.entries(totals))
      lines.push(`| ${tradition} | ${size === "long" ? "3+ verses" : "2 verses"} | ${t[size].blocks} | ${t[size].one} | ${t[size].two} | ${t[size].none} | ${t[size].insufficient} |`);
    const sum = (field) => Object.values(totals).reduce((n, t) => n + t[size][field], 0);
    lines.push(`| **total** | ${size === "long" ? "3+ verses" : "2 verses"} | ${sum("blocks")} | ${sum("one")} | ${sum("two")} | ${sum("none")} | ${sum("insufficient")} |`);
  }
  lines.push("");
  lines.push("## Pedro's calibration cases", "");
  lines.push("| Block | Pedro | Rule | Result | Evidence |", "|---|---|---|---|---|");
  for (const c of calibration) {
    const rule = c.got.map(short).join(", ") || "none";
    const result = c.got.length === 1 && c.got[0] === c.expected ? "agrees" : c.got.includes(c.expected) ? "partly" : c.got.length === 0 ? "no highlight" : "disagrees";
    lines.push(`| ${c.ref} | ${short(c.expected)} | ${rule} | ${result} | ${c.line} |`);
  }
  lines.push("", "## Per page", "");
  for (const { key, rows, stale } of report) {
    lines.push(`### ${key}`, "", "| Block | Verses | Central | Evidence |", "|---|---|---|---|");
    for (const row of rows) {
      if (row.n < 2) continue;
      const central = row.kept ? `${row.kept.map(short).join(", ") || "none"} (confirmed)` : row.focus.map(short).join(", ") || "none";
      lines.push(`| ${row.ref} | ${row.n} | ${central} | ${row.line} |`);
    }
    for (const entry of stale) lines.push(`| ${entry.refs.join(" · ")} | | ${entry.focus.join(", ") || "none"} (confirmed, passage no longer shown) | |`);
    lines.push("");
  }
  return `${lines.join("\n")}\n`;
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) await main();
