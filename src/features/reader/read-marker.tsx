"use client";

import { useEffect, useRef, useState } from "react";
import { markChapterRead, unmarkChapterRead } from "@/lib/read-chapter-store";
import { assessReading, readingRule } from "@/lib/reading-pace";

type ReadMarkerProps = {
  book: string;
  chapter: number;
  verseWords: [number, number][];
  idPrefix: string;
  text: { doubt: string; mark: string; marked: string };
  alreadyRead: boolean;
  showUndo: (message: string, restore: () => void) => void;
};

export function ReadMarker({ book, chapter, verseWords, idPrefix, text, alreadyRead, showUndo }: ReadMarkerProps) {
  const [offer, setOffer] = useState(false);
  const done = useRef(alreadyRead);
  const dismissed = useRef(false);
  const mark = useRef<() => void>(() => undefined);

  useEffect(() => {
    done.current = alreadyRead;
  }, [alreadyRead]);

  useEffect(() => {
    mark.current = () => {
      if (done.current) return;
      done.current = true;
      markChapterRead(book, chapter);
      setOffer(false);
      showUndo(text.marked, () => {
        done.current = false;
        dismissed.current = true;
        unmarkChapterRead(book, chapter);
      });
    };
  }, [book, chapter, showUndo, text.marked]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || verseWords.length === 0) return;
    const last = verseWords[verseWords.length - 1]![0];
    const credited = new Map<number, number>();
    const visible = new Set<number>();
    let activeMs = 0;
    let reached = false;
    let lastActivity = 0;
    let lastTick = performance.now();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const number = Number((entry.target as HTMLElement).dataset.readVerse);
          const fills = entry.intersectionRect.height >= window.innerHeight - readingRule.headerClearance;
          if (entry.isIntersecting && (entry.intersectionRatio >= readingRule.visibleRatio || fills))
            visible.add(number);
          else visible.delete(number);
        }
        if (visible.has(last)) reached = true;
      },
      { rootMargin: "-110px 0px 0px 0px", threshold: [0, readingRule.visibleRatio, 1] },
    );
    for (const [number] of verseWords) {
      const element = document.getElementById(`${idPrefix}v-${number}`);
      if (!element) continue;
      element.dataset.readVerse = String(number);
      observer.observe(element);
    }

    const touch = () => {
      lastActivity = performance.now();
    };
    const events = ["scroll", "wheel", "touchmove", "pointermove", "keydown"] as const;
    for (const name of events) addEventListener(name, touch, { passive: true });

    const timer = window.setInterval(() => {
      const now = performance.now();
      const elapsed = now - lastTick;
      lastTick = now;
      if (done.current || document.visibilityState !== "visible" || !document.hasFocus()) return;
      if (now - lastActivity > readingRule.idleMs || visible.size === 0) return;
      activeMs += elapsed;
      const wordsOf = new Map(verseWords);
      for (const number of visible) credited.set(number, wordsOf.get(number) ?? 0);
      const verdict = assessReading({
        creditedWords: [...credited.values()].reduce((sum, words) => sum + words, 0),
        totalWords: verseWords.reduce((sum, [, words]) => sum + words, 0),
        activeSeconds: activeMs / 1000,
        reachedEnd: reached,
      });
      if (verdict === "read" && !dismissed.current) mark.current();
      else if (verdict === "doubt") setOffer(true);
    }, readingRule.tickMs);

    return () => {
      observer.disconnect();
      window.clearInterval(timer);
      for (const name of events) removeEventListener(name, touch);
    };
  }, [verseWords, idPrefix]);

  return (
    <div data-read-marker className="relative h-px">
      <div
        data-read-offer={offer && !alreadyRead ? "" : undefined}
        className="read-offer absolute top-7 left-0 max-w-col"
        role="status"
      >
        <p className="m-0 mb-2 text-ui-xs text-ink-3">{text.doubt}</p>
        <button
          type="button"
          tabIndex={offer && !alreadyRead ? 0 : -1}
          onClick={() => mark.current()}
          className="inline-flex min-h-9 cursor-pointer items-center justify-center rounded-6 border border-rule-2 px-3.5 text-btn font-medium text-ink transition-colors duration-150 ease-standard hover:bg-hover pointer-coarse:min-h-11"
        >
          {text.mark}
        </button>
      </div>
    </div>
  );
}
