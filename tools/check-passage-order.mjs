import { spanishPages } from "@/content/pages/index";
import { hasApologistQuote } from "@/content/shown-passages";
import { loadOrder } from "../data/scripts/passage-order.mjs";
import { verseSet, hasBibleCorpus } from "../data/scripts/passage-normalize.mjs";

if (!hasBibleCorpus) {
  console.log("check-passage-order.mjs: skipped, no Bible corpus here (the git-only CI)");
  process.exit(0);
}

const subset = (a, b) => [...a].every((v) => b.has(v));
const errors = [];
const toAdd = [];
const hidden = [];
const apologistless = (pageScripture) => pageScripture.filter((p) => !hasApologistQuote(p));
for (const page of Object.values(spanishPages)) {
  if (!page.scripture) continue;
  const key = `${page.doctrine}:${page.tradition}`;
  const shown = page.scripture.filter(hasApologistQuote);
  const sets = shown.map((p) => verseSet(p.refs));
  const hiddenSets = apologistless(page.scripture).map((p) => verseSet(p.refs));
  const { order, toAdd: pending } = loadOrder(key);
  const seen = [];
  for (const ref of order) {
    const wanted = verseSet([ref]);
    if (seen.some((i) => subset(wanted, sets[i]))) continue;
    const at = sets.findIndex((s, i) => !seen.includes(i) && subset(wanted, s));
    if (at >= 0) seen.push(at);
    else if (hiddenSets.some((s) => subset(wanted, s))) hidden.push(`${key} ${ref}`);
    else errors.push(`${key}: ordered passage ${ref} is not on the page`);
  }
  if (shown.length === 0) hidden.push(`${key} page has no shown passages`);
  seen.forEach((at, position) => {
    if (at !== position) errors.push(`${key}: ordered passage at place ${position + 1} sits at place ${at + 1}`);
  });
  for (const ref of pending) {
    const wanted = verseSet([ref]);
    if (sets.some((s) => subset(wanted, s)) || hiddenSets.some((s) => subset(wanted, s)))
      errors.push(`${key}: ${ref} is on the page now, remove it from toAdd`);
    else toAdd.push(`${key} ${ref}`);
  }
  shown.forEach((passage, i) => {
    shown.forEach((other, j) => {
      if (j <= i || (passage.refs.length > 1 && other.refs.length > 1)) return;
      if ([...sets[i]].some((v) => sets[j].has(v)))
        errors.push(
          `${key}: places ${i + 1} and ${j + 1} repeat verses (${passage.refs.join(" · ")} / ${other.refs.join(" · ")})`,
        );
    });
  });
}
if (errors.length > 0) {
  for (const error of errors.slice(0, 40)) console.error(`FAIL ${error}`);
  console.error(`${errors.length} passage order problems.`);
  process.exit(1);
}
console.log(`passage order ok; hidden (no apologists): ${hidden.length}; to add: ${toAdd.length}`);
