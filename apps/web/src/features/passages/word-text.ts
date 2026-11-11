export type Word = { text: string; start: number; end: number; key: string };

const minimumPhraseLength = 6;

export function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9ñ\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function words(text: string): Word[] {
  return [...text.matchAll(/\S+/g)].map((match) => ({
    text: match[0],
    start: match.index,
    end: match.index + match[0].length,
    key: normalize(match[0]),
  }));
}

export function keptWords(before: string[], after: string[]): Set<number> {
  const table = Array.from({ length: before.length + 1 }, () => new Uint16Array(after.length + 1));
  for (let i = before.length - 1; i >= 0; i -= 1) {
    for (let j = after.length - 1; j >= 0; j -= 1) {
      table[i]![j] =
        before[i] === after[j] ? table[i + 1]![j + 1]! + 1 : Math.max(table[i + 1]![j]!, table[i]![j + 1]!);
    }
  }
  const kept = new Set<number>();
  let i = 0;
  let j = 0;
  while (i < before.length && j < after.length) {
    if (before[i] === after[j]) {
      kept.add(j);
      i += 1;
      j += 1;
    } else if (table[i + 1]![j]! >= table[i]![j + 1]!) i += 1;
    else j += 1;
  }
  return kept;
}

export function changedWords(before: string, after: string): Set<number> {
  const next = words(after);
  const kept = keptWords(
    words(before).map((word) => word.key),
    next.map((word) => word.key),
  );
  return new Set(next.flatMap((_, index) => (kept.has(index) ? [] : [index])));
}

export type Range = [number, number];

export function locate(raw: string, phrase: string): Range[] {
  const map: number[] = [];
  let flat = "";
  for (let i = 0; i < raw.length; i += 1) {
    const char = raw[i]!.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
    if (/[a-z0-9ñ]/.test(char)) {
      flat += char;
      map.push(i);
    } else if (/\s/.test(raw[i]!) && flat && !flat.endsWith(" ")) {
      flat += " ";
      map.push(i);
    }
  }
  const ranges: Range[] = [];
  for (const piece of phrase.split(/…|\.\.\./)) {
    const needle = normalize(piece.replace(/\[[^\]]*\]/g, ""));
    if (needle.length < minimumPhraseLength) continue;
    const at = flat.indexOf(needle);
    if (at >= 0) ranges.push([map[at]!, map[at + needle.length - 1]! + 1]);
  }
  return ranges;
}

export function highlightedWords(raw: string, ranges: Range[]): Set<number> {
  return new Set(
    words(raw).flatMap((word, index) =>
      ranges.some(([from, to]) => word.start >= from && word.end <= to + 1) ? [index] : [],
    ),
  );
}
