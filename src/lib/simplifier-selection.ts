import { normalize } from "@/lib/ai/normalize";

export type SelectionMark = { sentence: number; from: number; to: number };

const wholeShare = 0.95;
const edgePunctuation = /^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu;

const wordsOf = (text: string) => text.split(" ").filter((word) => word !== "");
const tokenOf = (word: string) => word.replace(edgePunctuation, "");

function indexOfRun(haystack: string[], needle: string[]): number {
  if (needle.length === 0) return -1;
  for (let start = 0; start + needle.length <= haystack.length; start++) {
    if (needle.every((token, at) => haystack[start + at] === token)) return start;
  }
  return -1;
}

export function findSelectionMark(original: string[], simplified: string[], selected: string): SelectionMark | null {
  const picked = normalize(selected).text.trim();
  const whole = normalize(original.join(" ")).text.trim();
  if (picked === "" || picked.length >= whole.length * wholeShare) return null;
  const needle = wordsOf(picked)
    .map(tokenOf)
    .filter((token) => token !== "");
  const sentence = original.findIndex((unit) => indexOfRun(wordsOf(normalize(unit).text).map(tokenOf), needle) >= 0);
  const unit = simplified[sentence];
  if (sentence < 0 || unit === undefined) return null;
  const words = unit.split(" ").map(tokenOf);
  const from = indexOfRun(words, needle);
  return from < 0 ? null : { sentence, from, to: from + needle.length };
}
