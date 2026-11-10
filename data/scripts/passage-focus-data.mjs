import fs from "node:fs";
import { verseSet } from "./passage-normalize.mjs";

const DIR = new URL("../passages/focus/", import.meta.url).pathname;
const STATUSES = ["proposed", "confirmed"];
const MAX_PER_BLOCK = 2;

export const focusFile = (key) => `${DIR}${key.replace(":", "-")}.json`;

export function loadFocus(key) {
  const file = focusFile(key);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : { passages: [] };
}

export function saveFocus(key, data) {
  fs.mkdirSync(DIR, { recursive: true });
  fs.writeFileSync(focusFile(key), `${JSON.stringify(data, null, 1)}\n`);
}

export const sameRefs = (a, b) => JSON.stringify(a) === JSON.stringify(b);

export function validateFocus(key, scripture, data) {
  const errors = [];
  const seen = [];
  for (const entry of data.passages) {
    const label = `${key}: ${(entry.refs ?? []).join(" · ")}`;
    const passage = scripture.find((p) => sameRefs(p.refs, entry.refs));
    if (!passage) {
      errors.push(`${label} is not a passage of the page`);
      continue;
    }
    if (seen.some((refs) => sameRefs(refs, entry.refs))) errors.push(`${label} appears twice`);
    seen.push(entry.refs);
    if (!STATUSES.includes(entry.status)) errors.push(`${label} has status ${entry.status}`);
    if (!Array.isArray(entry.focus)) {
      errors.push(`${label} has no focus list`);
      continue;
    }
    if (entry.focus.length === 0 && entry.status !== "confirmed")
      errors.push(`${label} has an empty focus list that is not confirmed`);
    if (new Set(entry.focus).size !== entry.focus.length) errors.push(`${label} repeats a verse`);
    const blocks = passage.refs.map((ref) => [...verseSet([ref])]);
    for (const verse of entry.focus) {
      if (!blocks.some((block) => block.includes(verse))) errors.push(`${label}: ${verse} is outside the passage`);
    }
    for (const block of blocks) {
      const inBlock = entry.focus.filter((verse) => block.includes(verse));
      if (inBlock.length > MAX_PER_BLOCK) errors.push(`${label}: more than ${MAX_PER_BLOCK} focus verses in one block`);
      if (block.length === 1 && inBlock.length > 0) errors.push(`${label}: focus on a single-verse block`);
      if (block.length > 1 && inBlock.length === block.length)
        errors.push(`${label}: every verse of a block is focus, so none is`);
    }
  }
  return errors;
}
