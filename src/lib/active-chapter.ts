import { useSyncExternalStore } from "react";

export type ChapterTarget = { book: string; chapter: number };
export type ActiveChapter =
  (ChapterTarget & { href: string; previous: ChapterTarget | null; next: ChapterTarget | null }) | null;

let scroller: ((target: ChapterTarget) => boolean) | null = null;

export function registerChapterScroller(next: ((target: ChapterTarget) => boolean) | null) {
  scroller = next;
}

export function scrollToChapter(target: ChapterTarget): boolean {
  return scroller?.(target) ?? false;
}

let current: ActiveChapter = null;
const listeners = new Set<() => void>();

export function setActiveChapter(next: ActiveChapter) {
  if (current?.book === next?.book && current?.chapter === next?.chapter) return;
  current = next;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useActiveChapter(): ActiveChapter {
  return useSyncExternalStore(
    subscribe,
    () => current,
    () => null,
  );
}
