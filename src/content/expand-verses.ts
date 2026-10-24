import { bookOrder } from "@/content/verse-names";

function sortKey(key: string): [number, number, number] {
  const [book = "", chapter = "0", verse = "0"] = key.split(".");
  return [bookOrder.indexOf(book), Number(chapter), Number(verse)];
}

export function sortedVerseKeys(keys: string[]): string[] {
  return [...keys].sort((a, b) => {
    const [ab, ac, av] = sortKey(a);
    const [bb, bc, bv] = sortKey(b);
    return ab - bb || ac - bc || av - bv;
  });
}

export function expandSegment(segment: string, sorted: string[]): string[] {
  const [from = "", to = from] = segment.split("-");
  if (from.split(".").length === 2) return sorted.filter((key) => key.startsWith(`${from}.`));
  const start = sorted.indexOf(from);
  const end = sorted.indexOf(to);
  if (start < 0 || end < start) return [];
  return sorted.slice(start, end + 1);
}
