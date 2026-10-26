import { useSyncExternalStore } from "react";
import type { VerseRange } from "@/features/reader/read-selection";
import {
  getHighlights,
  lastHighlightColor,
  noHighlights,
  rememberHighlightColor,
  setHighlights,
  subscribeHighlights,
} from "@/lib/highlight-store";
import {
  addHighlight,
  chosenColor,
  hasHighlightIn,
  isCovered,
  removeRange,
  removeVerse,
  segmentsOf,
  type HighlightColor,
  type VerseKey,
} from "@/lib/highlights";

type Options = {
  translationId: string;
  book: string;
  chapter: number;
  done: string;
  removed: string;
  showUndo: (message: string, restore: () => void) => void;
};

export function useChapterHighlights({ translationId, book, chapter, done, removed, showUndo }: Options) {
  const highlights = useSyncExternalStore(subscribeHighlights, getHighlights, () => noHighlights);
  const keyOf = (verse: number): VerseKey => ({ translationId, book, chapter, verse });

  const commit = (next: ReturnType<typeof getHighlights>, message: string) => {
    const before = getHighlights();
    setHighlights(next);
    showUndo(message, () => setHighlights(before));
  };

  return {
    list: highlights
      .filter((entry) => entry.translationId === translationId && entry.book === book && entry.chapter === chapter)
      .sort((a, b) => a.verse - b.verse || a.from - b.from),
    segmentsFor: (verse: number, length: number) => segmentsOf(highlights, keyOf(verse), length),
    chosenOfVerse: (verse: number): HighlightColor | null =>
      chosenColor(highlights, keyOf(verse), 0, Number.POSITIVE_INFINITY),
    hasHighlightOnVerse: (verse: number) => hasHighlightIn(highlights, keyOf(verse), 0, Number.POSITIVE_INFINITY),
    chosenIn: (ranges: VerseRange[]): HighlightColor | null => {
      const colors = new Set(
        ranges.flatMap((range) => {
          const color = chosenColor(highlights, keyOf(range.verse), range.from, range.to);
          return color === null ? [] : [color];
        }),
      );
      const hasMixed = ranges.some(
        (range) =>
          hasHighlightIn(highlights, keyOf(range.verse), range.from, range.to) &&
          chosenColor(highlights, keyOf(range.verse), range.from, range.to) === null,
      );
      return colors.size === 1 && !hasMixed ? ([...colors][0] ?? null) : null;
    },
    hasHighlightIn: (ranges: VerseRange[]) =>
      ranges.some((range) => hasHighlightIn(highlights, keyOf(range.verse), range.from, range.to)),
    lastColor: lastHighlightColor,
    isMarked: (ranges: VerseRange[]) =>
      ranges.length > 0 && ranges.every((range) => isCovered(highlights, keyOf(range.verse), range.from, range.to)),
    apply: (ranges: VerseRange[], color: HighlightColor) => {
      let next = getHighlights();
      for (const range of ranges) {
        next = addHighlight(next, { ...keyOf(range.verse), from: range.from, to: range.to, color, at: Date.now() });
      }
      rememberHighlightColor(color);
      commit(next, done);
    },
    remove: (ranges: VerseRange[]) => {
      let next = getHighlights();
      for (const range of ranges) next = removeRange(next, keyOf(range.verse), range.from, range.to);
      commit(next, removed);
    },
    removeVerse: (verse: number) => commit(removeVerse(getHighlights(), keyOf(verse)), removed),
  };
}
