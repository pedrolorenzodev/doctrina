"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { PageLink } from "@/components/ui/page-link";
import { useVerseEdition } from "@/features/verse/verse-edition";
import { easeReveal, prefersReducedMotion } from "@/lib/branch-motion";
import { MoreButton } from "@/components/ui/more-button";

type VersePassageText = {
  translation: string;
  previous: string;
  next: string;
  previousAria: string;
  nextAria: string;
  showMore: string;
  source: string;
  readChapter: string;
  note: string;
};

type VersePassageProps = {
  text: VersePassageText;
  picker: ReactNode;
  verse: number;
  base: string;
  chapterHref: string;
  chapterTitle: string;
  numberingNote: string;
};

const heightMs = 380;

function NeighborVerse({
  number,
  base,
  aria,
  verseText,
  more,
}: {
  number: number;
  base: string;
  aria: string;
  verseText: string;
  more: string;
}) {
  const paragraph = useRef<HTMLParagraphElement>(null);
  const [clamped, setClamped] = useState(true);
  const [overflowing, setOverflowing] = useState(false);

  useLayoutEffect(() => {
    const element = paragraph.current;
    if (element) setOverflowing(clamped && element.scrollHeight - element.clientHeight > 4);
  }, [verseText, clamped]);

  const expand = () => {
    const element = paragraph.current;
    if (!element) return;
    const start = element.offsetHeight;
    setClamped(false);
    requestAnimationFrame(() => {
      if (prefersReducedMotion()) return;
      const end = element.scrollHeight;
      element.style.overflow = "hidden";
      element
        .animate([{ height: `${start}px` }, { height: `${end}px` }], { duration: heightMs, easing: easeReveal })
        .finished.then(
          () => element.style.removeProperty("overflow"),
          () => element.style.removeProperty("overflow"),
        );
    });
  };

  return (
    <li className="verse-pass-row py-3">
      <Link
        href={`${base}/${number}`}
        aria-label={aria}
        className="pt-1.25 text-ui-xs text-ink-3 tabular-nums no-underline transition-colors duration-150 ease-standard hover:text-ink hover:underline hover:underline-offset-3"
      >
        {number}
      </Link>
      <div>
        <p
          ref={paragraph}
          className={`m-0 font-body text-verse-text font-light text-ink-3 ${clamped ? "line-clamp-3" : ""}`}
        >
          {verseText}
        </p>
        {overflowing ? (
          <div className="mt-0.5">
            <MoreButton expanded={false} onClick={expand}>
              {more}
            </MoreButton>
          </div>
        ) : null}
      </div>
    </li>
  );
}

export function VersePassage({
  text,
  picker,
  verse,
  base,
  chapterHref,
  chapterTitle,
  numberingNote,
}: VersePassageProps) {
  const { selected, reference, differs } = useVerseEdition();
  const box = useRef<HTMLDivElement>(null);
  const last = useRef<number | null>(null);

  useLayoutEffect(() => {
    const element = box.current;
    if (!element) return;
    const visible = element.offsetHeight;
    const running = element.getAnimations().length > 0;
    for (const animation of element.getAnimations()) animation.cancel();
    const natural = element.offsetHeight;
    const start = running ? visible : last.current;
    last.current = natural;
    if (start === null || start === natural || prefersReducedMotion()) return;
    element.style.overflow = "hidden";
    element
      .animate([{ height: `${start}px` }, { height: `${natural}px` }], { duration: heightMs, easing: easeReveal })
      .finished.then(
        () => element.style.removeProperty("overflow"),
        () => element.style.removeProperty("overflow"),
      );
  }, [selected.id]);

  return (
    <section id="translation" className="mt-12 min-w-0 scroll-mt-offset max-w-col verse-wide:col-start-1">
      <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2.5">
        <h2 className="m-0 font-head text-h2-mobile font-light text-ink opsz-60 sm:text-h2">{text.translation}</h2>
        {picker}
      </div>
      {differs ? (
        <p role="note" className="m-0 mb-3 text-reader-note text-ink-3">
          {numberingNote
            .replace("{abbreviation}", selected.abbreviation)
            .replace("{reference}", reference.abbreviation)}
        </p>
      ) : null}
      <div ref={box}>
        <ol className="m-0 list-none p-0">
          {selected.previous ? (
            <NeighborVerse
              key={`previous-${selected.id}`}
              number={selected.previous.verse}
              base={base}
              aria={text.previousAria.replace("{reference}", [chapterTitle, selected.previous.verse].join(":"))}
              verseText={selected.previous.text}
              more={text.showMore}
            />
          ) : null}
          <li className="verse-pass-row border-y border-rule pt-4 pb-4.5">
            <span className="pt-2.25 text-ui-xs font-semibold text-accent tabular-nums">{verse}</span>
            <p
              lang={selected.language}
              className="m-0 font-head text-verse-current-mobile font-light text-ink opsz-36 sm:text-verse-current"
            >
              {selected.text}
            </p>
          </li>
          {selected.next ? (
            <NeighborVerse
              key={`next-${selected.id}`}
              number={selected.next.verse}
              base={base}
              aria={text.nextAria.replace("{reference}", [chapterTitle, selected.next.verse].join(":"))}
              verseText={selected.next.text}
              more={text.showMore}
            />
          ) : null}
        </ol>
      </div>
      <p className="m-0 mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-1.5 text-btn text-ink-3">
        <span>{text.source.replace("{edition}", selected.displayName)}</span>
        <PageLink href={chapterHref}>{text.readChapter}</PageLink>
        {/* TODO: opens the note editor of this verse on the page, as in the approved artifact; the editor lives only in the reader panel */}
        <button
          type="button"
          className="-ml-1.5 inline-flex min-h-10 cursor-pointer items-center rounded-6 px-2.5 py-2 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11"
        >
          {text.note}
        </button>
      </p>
    </section>
  );
}
