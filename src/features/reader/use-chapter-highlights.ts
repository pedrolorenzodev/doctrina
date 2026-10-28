import { useSyncExternalStore, type RefObject } from "react";
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

const fadeMs = 280;
const unitAttribute = { first: "data-verse-text", second: "data-second-text" } as const;

type Column = keyof typeof unitAttribute;

type Options = {
  translationId: string;
  column: Column;
  root: RefObject<HTMLElement | null>;
  book: string;
  chapter: number;
  done: string;
  removed: string;
  showUndo: (message: string, restore: () => void) => void;
};

function fadeMarks(root: HTMLElement | null, column: Column, ranges: VerseRange[]): boolean {
  if (!root || matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  let found = false;
  for (const range of ranges) {
    const unit = root.querySelector(`[${unitAttribute[column]}="${range.verse}"]`);
    if (!unit) continue;
    for (const mark of unit.querySelectorAll<HTMLElement>("mark")) {
      const before = document.createRange();
      before.selectNodeContents(unit);
      before.setEndBefore(mark);
      const start = before.toString().length;
      const end = start + (mark.textContent?.length ?? 0);
      if (start >= range.to || end <= range.from) continue;
      mark.dataset.leaving = "";
      found = true;
    }
  }
  return found;
}

export function useChapterHighlights({ translationId, column, root, book, chapter, done, removed, showUndo }: Options) {
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
      const run = () => {
        let next = getHighlights();
        for (const range of ranges) next = removeRange(next, keyOf(range.verse), range.from, range.to);
        commit(next, removed);
      };
      if (fadeMarks(root.current, column, ranges)) window.setTimeout(run, fadeMs);
      else run();
    },
    removeVerse: (verse: number) => {
      const run = () => commit(removeVerse(getHighlights(), keyOf(verse)), removed);
      if (fadeMarks(root.current, column, [{ verse, from: 0, to: Number.POSITIVE_INFINITY }])) {
        window.setTimeout(run, fadeMs);
      } else run();
    },
  };
}
