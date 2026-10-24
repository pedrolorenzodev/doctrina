import { bookNames } from "@/content/verse-names";
import { nbspBeforeDigits } from "@/lib/locator";
import type { Locale } from "@/lib/locale";

type Point = { book: string; chapter: number; verse: number | null };

function parsePoint(text: string): Point {
  const [book = "", chapter = "", verse] = text.split(".");
  return { book, chapter: Number(chapter), verse: verse === undefined ? null : Number(verse) };
}

export function formatVerseRef(segments: string[], locale: Locale): string {
  let text = "";
  let previous: Point | null = null;
  for (const segment of segments) {
    const [fromText = "", toText] = segment.split("-");
    const from = parsePoint(fromText);
    const to = toText ? parsePoint(toText) : null;
    const name = bookNames[from.book]?.[locale] ?? from.book;
    let part: string;
    if (from.verse === null) part = String(from.chapter);
    else if (to && to.chapter !== from.chapter) part = `${from.chapter}:${from.verse}–${to.chapter}:${to.verse}`;
    else if (to) part = `${from.chapter}:${from.verse}–${to.verse}`;
    else part = `${from.chapter}:${from.verse}`;
    if (!previous) text = `${name} ${part}`;
    else if (previous.book !== from.book) text += `; ${name} ${part}`;
    else if (previous.chapter === from.chapter && from.verse !== null) text += `, ${part.split(":")[1]}`;
    else text += `; ${part}`;
    previous = to ?? from;
  }
  return nbspBeforeDigits(text);
}
