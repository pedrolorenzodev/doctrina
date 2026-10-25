export type SearchEntry = {
  id: string;
  title: string;
  path: string;
  date: string | null;
  texts: string[];
  quote: boolean;
  href: string;
};

export type Segment = { text: string; marked: boolean };
export type Fragment = { segments: Segment[]; cutStart: boolean; cutEnd: boolean };
export type SearchResult = {
  entry: SearchEntry;
  title: Segment[];
  path: Segment[];
  date: Segment[] | null;
  line: Fragment;
};

const combiningMarks = /\p{M}/gu;
const maxResults = 8;
const fragmentBefore = 42;
const fragmentAfter = 78;

export function fold(text: string): string {
  return [...text]
    .map((char) => {
      const base = char.normalize("NFD").replace(combiningMarks, "").toLowerCase();
      return base.length === char.length ? base : char.toLowerCase();
    })
    .join("");
}

export function searchWords(query: string): string[] {
  return fold(query)
    .split(/\s+/)
    .filter((word) => word !== "");
}

function foldedFields(entry: SearchEntry): string[] {
  return [entry.title, entry.path, entry.date ?? "", ...entry.texts].map(fold);
}

function score(entry: SearchEntry, words: string[]): number {
  const [title = "", path = ""] = foldedFields(entry);
  return words.reduce((sum, word) => sum + (title.includes(word) ? 3 : path.includes(word) ? 2 : 1), 0);
}

export function markSegments(text: string, words: string[]): Segment[] {
  const folded = fold(text);
  const flags = new Array<boolean>(text.length).fill(false);
  for (const word of words) {
    for (let at = folded.indexOf(word); at !== -1; at = folded.indexOf(word, at + word.length)) {
      flags.fill(true, at, at + word.length);
    }
  }
  const segments: Segment[] = [];
  text.split("").forEach((char, index) => {
    const marked = flags[index] ?? false;
    const last = segments[segments.length - 1];
    if (last && last.marked === marked) last.text += char;
    else segments.push({ text: char, marked });
  });
  return segments;
}

export function fragmentAround(text: string, words: string[]): Fragment {
  const folded = fold(text);
  const hits = words.map((word) => folded.indexOf(word)).filter((index) => index >= 0);
  const hit = hits.length > 0 ? Math.min(...hits) : 0;
  let from = Math.max(0, hit - fragmentBefore);
  let to = Math.min(text.length, hit + fragmentAfter);
  if (from > 0) {
    const space = text.indexOf(" ", from);
    if (space !== -1 && space < hit) from = space + 1;
  }
  if (to < text.length) {
    const space = text.lastIndexOf(" ", to);
    if (space > hit) to = space;
  }
  return { segments: markSegments(text.slice(from, to), words), cutStart: from > 0, cutEnd: to < text.length };
}

function lineFor(entry: SearchEntry, words: string[]): Fragment {
  const text = entry.texts.find((candidate) => words.some((word) => fold(candidate).includes(word))) ?? entry.texts[0];
  return fragmentAround(text ?? "", words);
}

export function searchEntries(entries: SearchEntry[], query: string): SearchResult[] {
  const words = searchWords(query);
  if (words.length === 0) return [];
  return entries
    .map((entry, order) => ({ entry, order, fields: foldedFields(entry).join(" ") }))
    .filter(({ fields }) => words.every((word) => fields.includes(word)))
    .map((hit) => ({ ...hit, points: score(hit.entry, words) }))
    .sort((a, b) => b.points - a.points || a.order - b.order)
    .slice(0, maxResults)
    .map(({ entry }) => resultFor(entry, words));
}

function resultFor(entry: SearchEntry, words: string[]): SearchResult {
  return {
    entry,
    title: markSegments(entry.title, words),
    path: markSegments(entry.path, words),
    date: entry.date === null ? null : markSegments(entry.date, words),
    line: words.length > 0 ? lineFor(entry, words) : fragmentAround(entry.texts[0] ?? "", []),
  };
}

export function plainResult(entry: SearchEntry): SearchResult {
  return resultFor(entry, []);
}
