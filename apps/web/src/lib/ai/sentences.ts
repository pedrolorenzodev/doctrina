const ABBREVIATIONS = [
  "p. ej",
  "art",
  "arts",
  "cap",
  "etc",
  "cf",
  "st",
  "sto",
  "sta",
  "ch",
  "vol",
  "mr",
  "mrs",
  "dr",
  "dra",
  "sr",
  "sra",
  "i.e",
  "e.g",
  "ej",
  "pp",
  "cap",
  "vv",
];

const CLOSERS = new Set(["»", "”", "’", "›", ")", "]", "'", '"']);
const OPENERS = /^[\p{Lu}¿¡«“‘‹("'[]/u;
const ABBREVIATION_TAIL = new RegExp(`(?:^|[\\s(«“"'\\[])(?:${ABBREVIATIONS.map(escape).join("|")})$`, "i");
const INITIAL_TAIL = /(?:^|[\s(«“"'[])\p{Lu}$/u;

function escape(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function endsAbbreviation(before: string): boolean {
  return ABBREVIATION_TAIL.test(before) || INITIAL_TAIL.test(before);
}

export function splitSentences(text: string): string[] {
  const source = text.trim();
  const sentences: string[] = [];
  let start = 0;
  let straightQuotes = 0;
  let i = 0;
  while (i < source.length) {
    const char = source[i] ?? "";
    if (char === '"') straightQuotes += 1;
    const terminal = char === "." || char === "?" || char === "!" || char === ";";
    if (!terminal) {
      i += 1;
      continue;
    }
    let end = i + 1;
    if (char === "." || char === "?" || char === "!") {
      while (
        source[end] === char ||
        source[end] === "." ||
        (char !== "." && (source[end] === "?" || source[end] === "!"))
      )
        end += 1;
    }
    let quotes = straightQuotes;
    while (end < source.length && CLOSERS.has(source[end] ?? "")) {
      if (source[end] === '"') {
        if (quotes % 2 === 0) break;
        quotes += 1;
      }
      end += 1;
    }
    const rest = source.slice(end);
    const gap = /^\s+/.exec(rest);
    const next = gap ? rest.slice(gap[0].length) : "";
    const before = source.slice(start, i);
    const splits =
      gap !== null &&
      next.length > 0 &&
      OPENERS.test(next) &&
      !(char === "." && endsAbbreviation(before) && end === i + 1);
    straightQuotes = quotes;
    if (splits) {
      sentences.push(source.slice(start, end).trim());
      start = end + (gap?.[0].length ?? 0);
      i = start;
    } else {
      i = end;
    }
  }
  const last = source.slice(start).trim();
  if (last) sentences.push(last);
  return sentences;
}
