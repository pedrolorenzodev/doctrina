import fs from "node:fs";
import { verseSet } from "./passage-normalize.mjs";

const DIR = new URL("../passages/order/", import.meta.url).pathname;
const subset = (a, b) => [...a].every((v) => b.has(v));
const distinctSpeakers = (passage) => new Set((passage.apologists?.arguments ?? []).flatMap((a) => a.quotes.map((q) => q.speaker))).size;

export function loadOrder(key) {
  const file = `${DIR}${key.replace(":", "-")}.json`;
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : { order: [], toAdd: [] };
}

export function orderPassages(scripture, key) {
  const { order, toAdd } = loadOrder(key);
  const sets = scripture.map((p) => verseSet(p.refs));
  const placed = [];
  const report = { missing: [], toAdd: [], approximate: [] };
  for (const ref of order) {
    const wanted = verseSet([ref]);
    const free = (i) => !placed.includes(i);
    if (placed.some((i) => subset(wanted, sets[i]))) continue;
    const first = (i) => subset(wanted, verseSet([scripture[i].refs[0]]));
    let at = sets.findIndex((s, i) => free(i) && first(i) && subset(wanted, s));
    if (at < 0) at = sets.findIndex((s, i) => free(i) && subset(wanted, s));
    if (at < 0) {
      at = sets.findIndex((s, i) => free(i) && [...wanted].some((v) => s.has(v)));
      if (at >= 0) report.approximate.push(`${ref} -> ${scripture[at].refs.join(" · ")}`);
    }
    if (at < 0) report.missing.push(ref);
    else placed.push(at);
  }
  for (const ref of toAdd) {
    const wanted = verseSet([ref]);
    report.toAdd.push({ ref, present: sets.some((s) => subset(wanted, s)) });
  }
  const rest = scripture
    .map((passage, i) => ({ passage, i }))
    .filter(({ i }) => !placed.includes(i))
    .sort((x, y) => distinctSpeakers(y.passage) - distinctSpeakers(x.passage) || x.i - y.i);
  return { passages: [...placed.map((i) => scripture[i]), ...rest.map((r) => r.passage)], report };
}
