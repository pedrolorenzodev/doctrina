"use client";

import { useEffect, useRef, useState } from "react";
import { markChapterRead, unmarkChapterRead } from "@/lib/read-chapter-store";
import { readingRule } from "@/lib/reading-pace";

type ReadMarkerProps = {
  book: string;
  chapter: number;
  lastId: string;
  text: { mark: string; short: string; marked: string };
  alreadyRead: boolean;
  showUndo: (message: string, restore: () => void) => void;
};

export function ReadMarker({ book, chapter, lastId, text, alreadyRead, showUndo }: ReadMarkerProps) {
  const [offered, setOffered] = useState(false);
  const done = useRef(alreadyRead);
  const dwellMs = useRef(0);

  useEffect(() => {
    done.current = alreadyRead;
  }, [alreadyRead]);

  const mark = () => {
    if (done.current) return;
    done.current = true;
    dwellMs.current = 0;
    markChapterRead(book, chapter);
    setOffered(false);
    showUndo(text.marked, () => {
      done.current = false;
      dwellMs.current = 0;
      unmarkChapterRead(book, chapter);
    });
  };

  useEffect(() => {
    const last = document.getElementById(lastId);
    if (!last || typeof IntersectionObserver === "undefined") return;
    let inView = false;
    let lastActivity = 0;
    let lastTick = performance.now();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const fills = entry.intersectionRect.height >= window.innerHeight - readingRule.headerClearance;
        inView = entry.isIntersecting && (entry.intersectionRatio >= readingRule.visibleRatio || fills);
        if (inView) return;
        dwellMs.current = 0;
        setOffered(false);
      },
      { rootMargin: `-${readingRule.headerClearance}px 0px 0px 0px`, threshold: [0, readingRule.visibleRatio, 1] },
    );
    observer.observe(last);

    const touch = () => {
      lastActivity = performance.now();
    };
    const events = ["scroll", "wheel", "touchmove", "pointermove", "keydown"] as const;
    for (const name of events) addEventListener(name, touch, { passive: true });

    const timer = window.setInterval(() => {
      const now = performance.now();
      const elapsed = now - lastTick;
      lastTick = now;
      if (done.current || !inView || document.visibilityState !== "visible" || !document.hasFocus()) return;
      if (now - lastActivity > readingRule.idleMs) return;
      dwellMs.current += elapsed;
      if (dwellMs.current >= readingRule.dwellSeconds * 1000) setOffered(true);
    }, readingRule.tickMs);

    return () => {
      observer.disconnect();
      window.clearInterval(timer);
      for (const name of events) removeEventListener(name, touch);
    };
  }, [lastId]);

  const shown = offered && !alreadyRead;
  return (
    <div data-read-marker className="relative flex h-px justify-center">
      <div data-read-offer={shown ? "" : undefined} className="read-button fixed bottom-6 z-30">
        <button
          type="button"
          aria-label={text.mark}
          tabIndex={shown ? 0 : -1}
          onClick={mark}
          className="group inline-flex h-9 cursor-pointer items-center justify-center rounded-full border border-rule-2 bg-panel px-2.25 text-ink transition-colors duration-150 ease-standard hover:bg-hover pointer-coarse:size-11"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3.5 8.5l3 3 6-7" />
          </svg>
          <span className="ml-0 max-w-0 overflow-hidden text-label font-medium tracking-wide whitespace-nowrap uppercase opacity-0 transition-all duration-260 ease-smooth group-hover:ml-1.75 group-hover:max-w-15 group-hover:opacity-100 group-focus-visible:ml-1.75 group-focus-visible:max-w-15 group-focus-visible:opacity-100">
            {text.short}
          </span>
        </button>
      </div>
    </div>
  );
}
