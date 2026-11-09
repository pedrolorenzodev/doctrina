import { overlaps, versesOfOsis } from "./passage-refs.mjs";
import { verseSet } from "./passage-normalize.mjs";

export function matchSections(sections, passages, doctrine, fileDoctrine, legacyRefs = null) {
  const perPassage = passages.map(() => []);
  const unmatched = [];
  const notes = [];
  const sets = passages.map((p) => versesOfOsis(p.refs));
  for (const section of sections) {
    if (section.arguments.length === 0) continue;
    if ((section.doctrine ?? fileDoctrine) !== doctrine) continue;
    let targets = legacyTargets(section.entries, passages, legacyRefs, notes, section);
    if (targets.length) {
      for (const t of targets)
        if (section.verses.length && !overlaps(section.verses, sets[t])) notes.push(`${section.text.slice(0, 70)}: entry ${t + 1} does not overlap the heading's verses`);
    } else {
      targets = sets.flatMap((set, i) => (section.verses.length && overlaps(section.verses, set) ? [i] : []));
    }
    if (targets.length) {
      for (const t of targets) perPassage[t].push({ section, arguments: section.arguments });
      continue;
    }
    const perArgument = [];
    for (const argument of section.arguments) {
      const verses = require_verses(argument.title);
      const hits = sets.flatMap((set, i) => (verses.length && overlaps(verses, set) ? [i] : []));
      if (hits.length) hits.forEach((t) => perPassage[t].push({ section, arguments: [argument] }));
      else perArgument.push(argument.title);
    }
    if (perArgument.length === section.arguments.length) unmatched.push({ heading: section.text, arguments: section.arguments.length, quotes: section.arguments.reduce((n, a) => n + a.quotes.length, 0) });
  }
  return { perPassage, unmatched, notes };
}

function legacyTargets(entries, passages, legacyRefs, notes, section) {
  if (!legacyRefs) return entries.filter((n) => n >= 1 && n <= passages.length).map((n) => n - 1);
  const targets = new Set();
  for (const n of entries) {
    const refs = legacyRefs[n - 1];
    if (!refs) continue;
    const wanted = verseSet(refs);
    const hit = passages.findIndex((p) => [...wanted].every((v) => verseSet(p.refs).has(v)));
    if (hit >= 0) targets.add(hit);
    else notes.push(`${section.text.slice(0, 70)}: page entry ${n} (${refs.join(" · ")}) no longer on the page`);
  }
  return [...targets];
}

import { versesOfHeading } from "./passage-refs.mjs";
function require_verses(title) {
  return versesOfHeading(title.split(/[:«]/)[0]);
}

export function assemble(matches) {
  const args = new Map();
  for (const { arguments: list } of matches)
    for (const argument of list) {
      const bucket = args.get(argument.title) ?? { title: argument.title, quotes: [] };
      for (const quote of argument.quotes) if (!bucket.quotes.some((q) => q.key === quote.key && q.url === quote.url)) bucket.quotes.push(quote);
      args.set(argument.title, bucket);
    }
  return [...args.values()].filter((a) => a.quotes.length);
}
