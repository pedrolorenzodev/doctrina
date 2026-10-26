export const highlightColors = ["yellow", "green", "sky", "pink", "orange"] as const;

export type HighlightColor = (typeof highlightColors)[number];

export type VerseKey = { translationId: string; book: string; chapter: number; verse: number };

export type Highlight = VerseKey & { id: string; from: number; to: number; color: HighlightColor; at: number };

export type Segment = { from: number; to: number; color: HighlightColor | null };

const sameVerse = (highlight: VerseKey, key: VerseKey) =>
  highlight.translationId === key.translationId &&
  highlight.book === key.book &&
  highlight.chapter === key.chapter &&
  highlight.verse === key.verse;

const newId = () => crypto.randomUUID();

export function highlightsOf(list: Highlight[], key: VerseKey): Highlight[] {
  return list.filter((highlight) => sameVerse(highlight, key)).sort((a, b) => a.from - b.from);
}

function cut(existing: Highlight[], from: number, to: number): Highlight[] {
  return existing.flatMap((highlight) => {
    if (highlight.to <= from || highlight.from >= to) return [highlight];
    const parts: Highlight[] = [];
    if (highlight.from < from) parts.push({ ...highlight, to: from });
    if (highlight.to > to) parts.push({ ...highlight, id: parts.length > 0 ? newId() : highlight.id, from: to });
    return parts;
  });
}

function merge(runs: Highlight[]): Highlight[] {
  const merged: Highlight[] = [];
  for (const run of [...runs].sort((a, b) => a.from - b.from)) {
    const last = merged[merged.length - 1];
    if (last && last.color === run.color && last.to >= run.from) last.to = Math.max(last.to, run.to);
    else merged.push({ ...run });
  }
  return merged;
}

export function addHighlight(list: Highlight[], next: Omit<Highlight, "id">): Highlight[] {
  const others = list.filter((highlight) => !sameVerse(highlight, next));
  const mine = cut(highlightsOf(list, next), next.from, next.to);
  return [...others, ...merge([...mine, { ...next, id: newId() }])];
}

export function removeRange(list: Highlight[], key: VerseKey, from: number, to: number): Highlight[] {
  const others = list.filter((highlight) => !sameVerse(highlight, key));
  return [...others, ...cut(highlightsOf(list, key), from, to)];
}

export function removeVerse(list: Highlight[], key: VerseKey): Highlight[] {
  return list.filter((highlight) => !sameVerse(highlight, key));
}

export function segmentsOf(list: Highlight[], key: VerseKey, length: number): Segment[] {
  const segments: Segment[] = [];
  let at = 0;
  for (const highlight of highlightsOf(list, key)) {
    const from = Math.max(at, Math.min(highlight.from, length));
    const to = Math.min(highlight.to, length);
    if (to <= from) continue;
    if (from > at) segments.push({ from: at, to: from, color: null });
    segments.push({ from, to, color: highlight.color });
    at = to;
  }
  if (at < length || segments.length === 0) segments.push({ from: at, to: length, color: null });
  return segments;
}

export function currentColor(list: Highlight[], key: VerseKey): HighlightColor | null {
  return highlightsOf(list, key)[0]?.color ?? null;
}

export function isHighlight(value: unknown): value is Highlight {
  if (typeof value !== "object" || value === null) return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.id === "string" &&
    typeof item.translationId === "string" &&
    typeof item.book === "string" &&
    Number.isInteger(item.chapter) &&
    Number.isInteger(item.verse) &&
    Number.isInteger(item.from) &&
    Number.isInteger(item.to) &&
    (item.from as number) < (item.to as number) &&
    (item.from as number) >= 0 &&
    highlightColors.some((color) => color === item.color) &&
    typeof item.at === "number"
  );
}
