const FOLD = new Map<string, string>([
  ["“", '"'],
  ["”", '"'],
  ["„", '"'],
  ["«", '"'],
  ["»", '"'],
  ["‹", "'"],
  ["›", "'"],
  ["‘", "'"],
  ["’", "'"],
  ["—", "-"],
  ["–", "-"],
  ["‐", "-"],
  ["‑", "-"],
  ["Æ", "AE"],
  ["æ", "ae"],
  ["Œ", "OE"],
  ["œ", "oe"],
]);

const DROP = new Set(["[", "]", "_", "*"]);
const HYPHEN_BREAK = /-[ \t]*\r?\n\s*(?=\p{L})/uy;
const LETTER = /\p{L}/u;

export type Normalized = { text: string; map: number[]; source: string };

export function normalize(raw: string): Normalized {
  const source = raw.normalize("NFC");
  const chars: string[] = [];
  const map: number[] = [];
  let lastSpace = true;
  let i = 0;
  while (i < source.length) {
    const codePoint = source.codePointAt(i) ?? 0;
    const char = String.fromCodePoint(codePoint);
    const width = char.length;
    if (DROP.has(char)) {
      i += width;
      continue;
    }
    if (char === "-" && i > 0 && LETTER.test(source[i - 1] ?? "")) {
      HYPHEN_BREAK.lastIndex = i;
      const found = HYPHEN_BREAK.exec(source);
      if (found) {
        i += found[0].length;
        continue;
      }
    }
    if (/\s/.test(char)) {
      if (!lastSpace) {
        chars.push(" ");
        map.push(i);
        lastSpace = true;
      }
      i += width;
      continue;
    }
    const folded = (FOLD.get(char) ?? char).toLowerCase();
    for (const unit of folded) {
      chars.push(unit);
      map.push(i);
    }
    lastSpace = false;
    i += width;
  }
  return { text: chars.join(""), map, source };
}
