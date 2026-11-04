"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Section } from "@/components/section";
import { SegmentedFilter } from "@/components/ui/segmented-filter";
import { useVerseEdition } from "@/features/verse/verse-edition";
import { flipKeyed } from "@/lib/keyed-flip";

type VerseCompareText = {
  title: string;
  subtitle: string;
  filter: string;
  chips: string;
  spanish: string;
  english: string;
  all: string;
  languageSpanish: string;
  languageEnglish: string;
};

type Language = "es" | "en" | "all";

export function VerseCompare({ text }: { text: VerseCompareText }) {
  const { sameNumbering } = useVerseEdition();
  const spanishCount = sameNumbering.filter((edition) => edition.language === "es").length;
  const hasBoth = spanishCount > 0 && spanishCount < sameNumbering.length;
  const [language, setLanguage] = useState<Language>(spanishCount > 1 ? "es" : "all");
  const [off, setOff] = useState<ReadonlySet<string>>(new Set());
  const box = useRef<HTMLUListElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);
  if (sameNumbering.length < 2) return null;

  const inLanguage = (id: string) => {
    const edition = sameNumbering.find((candidate) => candidate.id === id);
    return language === "all" || edition?.language === language;
  };
  const rows = sameNumbering.filter((edition) => inLanguage(edition.id) && !off.has(edition.id));
  const change = (mutate: () => void) => {
    if (box.current && ghosts.current) flipKeyed(box.current, ghosts.current, () => flushSync(mutate));
    else mutate();
  };

  return (
    <Section id="compare" title={text.title} subtitle={text.subtitle}>
      {hasBoth ? (
        <div className="mb-3.5">
          <SegmentedFilter
            flush
            label={text.filter}
            value={language}
            onChange={(id) => change(() => setLanguage(id as Language))}
            options={[
              { id: "es", label: text.spanish },
              { id: "en", label: text.english },
              { id: "all", label: text.all },
            ]}
          />
        </div>
      ) : null}
      <div role="group" aria-label={text.chips} className="mb-4.5 flex flex-wrap gap-1.5">
        {sameNumbering
          .filter((edition) => inLanguage(edition.id))
          .map((edition) => (
            <button
              key={edition.id}
              type="button"
              aria-pressed={!off.has(edition.id)}
              onClick={() =>
                change(() =>
                  setOff((previous) => {
                    const next = new Set(previous);
                    if (next.has(edition.id)) next.delete(edition.id);
                    else next.add(edition.id);
                    return next;
                  }),
                )
              }
              className="inline-flex min-h-9.5 cursor-pointer items-center justify-center rounded-6 border border-rule bg-transparent px-3 py-1.5 text-btn leading-label text-ink-2 transition-selected hover:bg-hover hover:text-ink aria-pressed:border-transparent aria-pressed:selected-lift aria-pressed:font-medium aria-pressed:text-ink"
            >
              {edition.displayName}
            </button>
          ))}
      </div>
      <div className="relative">
        <ul ref={box} className="m-0 list-none p-0">
          {rows.map((edition) => (
            <li key={edition.id} data-k={edition.id} className="border-t border-rule pt-4 pb-4.5 last:border-b">
              <p className="m-0 mb-1.5 text-ui-sm font-medium text-ink">
                {edition.displayName}
                <span className="ml-2.5 font-normal text-ink-3">
                  {edition.language === "es" ? text.languageSpanish : text.languageEnglish}
                </span>
              </p>
              <p lang={edition.language} className="m-0 font-body text-verse-text font-light text-ink-2">
                {edition.text}
              </p>
            </li>
          ))}
        </ul>
        <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
      </div>
    </Section>
  );
}
