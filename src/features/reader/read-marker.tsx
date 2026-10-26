"use client";

import { useEffect, useRef } from "react";
import { markChapterRead } from "@/lib/read-chapter-store";

type ReadMarkerProps = {
  book: string;
  chapter: number;
};

export function ReadMarker({ book, chapter }: ReadMarkerProps) {
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = end.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      markChapterRead(book, chapter);
      observer.disconnect();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [book, chapter]);

  return <div ref={end} data-read-marker aria-hidden="true" className="h-px" />;
}
