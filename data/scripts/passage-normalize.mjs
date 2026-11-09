import fs from "node:fs";

const RULES = JSON.parse(fs.readFileSync(new URL("../passages/normalize-rules.json", import.meta.url), "utf8"));
const rv1909 = JSON.parse(fs.readFileSync(new URL("../corpus/bibles/rv1909.json", import.meta.url).pathname, "utf8"));
const KEYS = Object.keys(rv1909);
const INDEX = new Map(KEYS.map((k, i) => [k, i]));

function expand(segment) {
  const [from, to = from] = segment.split("-");
  if (from.split(".").length === 2) return KEYS.filter((k) => k.startsWith(from + "."));
  const a = INDEX.get(from);
  const b = INDEX.get(to);
  if (a === undefined || b === undefined || b < a) throw new Error("verse range not in corpus: " + segment);
  return KEYS.slice(a, b + 1);
}

export const verseSet = (refs) => new Set(refs.flatMap(expand));
const subset = (a, b) => [...a].every((v) => b.has(v));
const chapterOf = (key) => key.split(".").slice(0, 2).join(".");

function rangeOf(keys) {
  const sorted = [...keys].sort((x, y) => INDEX.get(x) - INDEX.get(y));
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  return first === last ? first : `${first}-${last}`;
}

function union(a, b) {
  const merged = new Set([...a, ...b]);
  return merged;
}

function adjacentOrOverlapping(a, b) {
  if ([...a].some((v) => b.has(v))) return true;
  const all = [...a, ...b].map((v) => INDEX.get(v)).sort((x, y) => x - y);
  const chapters = new Set([...a, ...b].map(chapterOf));
  if (chapters.size !== 1) return false;
  return all.every((n, i) => i === 0 || n - all[i - 1] === 1);
}

function dedupeSegments(refs) {
  const sets = refs.map((r) => verseSet([r]));
  return refs.filter((ref, i) => !sets.some((other, j) => j !== i && subset(sets[i], other) && (sets[i].size < other.size || j < i)));
}

function widen(refs, canonical) {
  const out = refs.map((ref) => {
    const set = verseSet([ref]);
    for (const rule of canonical) {
      const range = verseSet([rule.range]);
      if (subset(set, range) && rule.central.some((c) => set.has(c))) return rule.range;
    }
    return ref;
  });
  return dedupeSegments([...new Set(out)]);
}

function joinText(a, b) {
  return a === b || a.includes(b) ? a : b.includes(a) ? b : `${a} ${b}`;
}

function mergeInto(target, other) {
  target.text = joinText(target.text, other.text);
  target.origin.push(...other.origin);
  for (const key of Object.keys(other.extra)) target.extra[key] = target.extra[key] ?? other.extra[key];
}

export function normalizePassages(scripture, key) {
  const pageRules = RULES.pages[key] ?? {};
  const removeSets = (pageRules.remove ?? []).map((r) => verseSet([r]));
  let items = scripture.map(({ refs, text, ...extra }, index) => ({ refs, text, extra, origin: [index] }));
  const stats = { before: scripture.length, removed: 0, merged: 0, grouped: 0, widened: 0 };
  items = items.filter((item) => {
    const set = verseSet(item.refs);
    const drop = removeSets.some((r) => set.size === r.size && subset(set, r));
    if (drop) stats.removed += 1;
    return !drop;
  });
  for (const item of items) {
    const widened = widen(item.refs, RULES.canonical);
    if (JSON.stringify(widened) !== JSON.stringify(item.refs)) stats.widened += 1;
    item.refs = widened;
  }
  let changed = true;
  while (changed) {
    changed = false;
    outer: for (let i = 0; i < items.length; i += 1) {
      for (let j = i + 1; j < items.length; j += 1) {
        const a = items[i];
        const b = items[j];
        const sa = verseSet(a.refs);
        const sb = verseSet(b.refs);
        if (subset(sb, sa)) mergeInto(a, b);
        else if (subset(sa, sb)) {
          a.refs = b.refs;
          mergeInto(a, b);
        } else if (a.refs.length === 1 && b.refs.length === 1 && adjacentOrOverlapping(sa, sb)) {
          a.refs = [rangeOf(union(sa, sb))];
          mergeInto(a, b);
        } else continue;
        items.splice(j, 1);
        stats.merged += 1;
        changed = true;
        break outer;
      }
    }
  }
  for (const group of pageRules.parallels ?? []) {
    const found = group.map((spec) => {
      const set = verseSet([spec]);
      return items.filter((item) => subset(verseSet(item.refs), set));
    });
    if (found.some((f) => f.length === 0)) throw new Error(`parallel group ${group.join(" | ")} has a member with no entry on ${key}`);
    const gathered = [...new Set(found.flat())].sort((x, y) => items.indexOf(x) - items.indexOf(y));
    const grouped = { refs: group, text: gathered[0].text, extra: { ...gathered[0].extra }, origin: [...gathered[0].origin] };
    for (const entry of gathered.slice(1)) mergeInto(grouped, entry);
    const head = items.indexOf(gathered[0]);
    items = items.flatMap((item, i) => (i === head ? [grouped] : gathered.includes(item) ? [] : [item]));
    stats.grouped += 1;
  }
  stats.after = items.length;
  return {
    passages: items.map(({ refs, text, extra }) => ({ refs, text, ...extra })),
    origin: items.map((item) => item.origin),
    stats,
  };
}
