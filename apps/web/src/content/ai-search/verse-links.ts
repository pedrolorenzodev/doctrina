export type VerseLink = { passage_id: number; verse_from: number; kind: "cites" | "quotes"; score: number };
export type RankedPassage = { passageId: number; rank: number; verses: number[] };

const DENSITY_WEIGHT = 0.1;
const DENSITY_CAP = 10;

export function rankVerseLinks(links: VerseLink[]): RankedPassage[] {
  const byPassage = new Map<number, { best: number; verses: Set<number> }>();
  for (const link of links) {
    const entry = byPassage.get(link.passage_id) ?? { best: 0, verses: new Set<number>() };
    entry.best = Math.max(entry.best, (link.kind === "cites" ? 2 : 1) + link.score);
    entry.verses.add(link.verse_from);
    byPassage.set(link.passage_id, entry);
  }
  return [...byPassage]
    .map(([passageId, entry]) => ({
      passageId,
      rank: entry.best + DENSITY_WEIGHT * Math.min(entry.verses.size, DENSITY_CAP),
      verses: [...entry.verses].sort((a, b) => a - b),
    }))
    .sort((a, b) => b.rank - a.rank || a.passageId - b.passageId);
}

export function capPerGroup<T>(items: T[], groupOf: (item: T) => string, perGroup: number, limit: number): T[] {
  const counts = new Map<string, number>();
  const kept: T[] = [];
  for (const item of items) {
    const group = groupOf(item);
    const count = counts.get(group) ?? 0;
    if (count >= perGroup) continue;
    counts.set(group, count + 1);
    kept.push(item);
    if (kept.length >= limit) break;
  }
  return kept;
}
