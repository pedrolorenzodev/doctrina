"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Chevron } from "@/components/ui/chevron";
import { SegmentedFilter } from "@/components/ui/segmented-filter";
import type { FormRow, PlaceBook, PlaceVerse } from "@/content/get-word-page";
import { OriginalWord } from "@/features/words/original-word";
import { useWordFilters } from "@/features/words/word-filters";
import { foldBox } from "@/lib/fold-box";
import { flipKeyed } from "@/lib/keyed-flip";
import Link from "next/link";

type PlacesText = {
  filterLabel: string;
  all: string;
  of: string;
  removeBook: string;
  removeForm: string;
  clear: string;
  verse: string;
  verses: string;
};

type PlacesListProps = {
  places: PlaceBook[];
  forms: FormRow[];
  language: "grc" | "hbo";
  total: number;
  text: PlacesText;
};

const separator = " ; ";
const middot = " \u00b7 ";
const crossMark = "\u00d7";
const shortOf = (forms: FormRow[], morph: string) => forms.find((row) => row.morph === morph)?.short ?? "";

function VerseRow({ verse, forms, language }: { verse: PlaceVerse; forms: FormRow[]; language: "grc" | "hbo" }) {
  return (
    <li className="word-place-row border-t border-rule py-2.25 first:border-t-0">
      <Link href={verse.href} className="link-page hit-44 text-ui-sm tabular-nums whitespace-nowrap">
        {verse.reference}
      </Link>
      <p className="m-0 min-w-0 truncate font-body text-word-fragment font-light text-ink-2 max-[720px]:col-span-full max-[720px]:row-start-2 max-[720px]:line-clamp-2 max-[720px]:whitespace-normal">
        {verse.text}
      </p>
      <span className="text-right text-label whitespace-nowrap text-ink-3 max-[720px]:col-start-2 max-[720px]:row-start-1 max-[720px]:text-left">
        {verse.forms.map((entry, index) => {
          const tail = `${middot}${shortOf(forms, entry.morph)}`;
          return (
            <span key={`${entry.morph}-${entry.form}`}>
              {index > 0 ? separator : ""}
              <OriginalWord text={entry.form} transliteration={entry.transliteration} language={language} />
              {tail}
            </span>
          );
        })}
      </span>
    </li>
  );
}

export function PlacesList({ places, forms, language, total, text }: PlacesListProps) {
  const { book, form, setBook, setForm, clear } = useWordFilters();
  const [open, setOpen] = useState<ReadonlySet<string>>(new Set());
  const box = useRef<HTMLDivElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);
  const panels = useRef(new Map<string, HTMLDivElement>());
  const started = useRef(new WeakSet<HTMLElement>());
  const shown = useRef<string>("");

  const visible = places
    .filter((entry) => !book || entry.id === book)
    .map((entry) => ({
      ...entry,
      verses: entry.verses.filter((verse) => !form || verse.forms.some((f) => f.morph === form)),
    }))
    .filter((entry) => entry.verses.length > 0);
  const count = visible.reduce((sum, entry) => sum + entry.verses.length, 0);
  const signature = `${book ?? ""}|${form ?? ""}`;

  useEffect(() => {
    if (shown.current === signature) return;
    shown.current = signature;
  }, [signature]);

  const withFlip = (mutate: () => void) => {
    if (box.current && ghosts.current) flipKeyed(box.current, ghosts.current, () => flushSync(mutate));
    else mutate();
  };

  const toggle = (id: string) => {
    const element = panels.current.get(id);
    const want = !open.has(id);
    setOpen((previous) => {
      const next = new Set(previous);
      if (want) next.add(id);
      else next.delete(id);
      return next;
    });
    if (element) {
      if (want) element.hidden = false;
      void foldBox(element, want);
    }
  };

  const formOptions = [
    { id: "", label: text.all, count: places.reduce((sum, entry) => sum + entry.verses.length, 0) },
    ...forms.map((row) => ({
      id: row.morph,
      label: row.form,
      content: (
        <OriginalWord
          text={row.form}
          transliteration={row.transliteration}
          language={language}
          className="text-ui-sm"
        />
      ),
      count: row.verses ?? 0,
    })),
  ];

  const active = book !== null || form !== null;
  const formRow = forms.find((row) => row.morph === form);
  const bookName = places.find((entry) => entry.id === book)?.name ?? "";

  return (
    <>
      <div className="mb-4.5">
        <SegmentedFilter
          label={text.filterLabel}
          wrap
          value={form ?? ""}
          options={formOptions}
          onChange={(id) => withFlip(() => setForm(id === "" ? null : id))}
        />
      </div>
      {active ? (
        <div className="mb-4 flex flex-wrap items-center gap-2 text-btn text-ink-3">
          <span>{text.of.replace("{n}", String(count)).replace("{total}", String(total))}</span>
          {book ? (
            <button
              type="button"
              aria-label={text.removeBook.replace("{name}", bookName)}
              onClick={() => withFlip(() => clear("book"))}
              className="inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-6 border border-rule-2 bg-transparent py-1 pr-1.5 pl-2.5 text-btn text-ink transition-colors duration-150 ease-standard hover:border-ink hover:bg-hover"
            >
              <span>{bookName}</span>
              <span aria-hidden="true">{crossMark}</span>
            </button>
          ) : null}
          {formRow ? (
            <button
              type="button"
              aria-label={text.removeForm.replace("{form}", formRow.form)}
              onClick={() => withFlip(() => clear("form"))}
              className="inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-6 border border-rule-2 bg-transparent py-1 pr-1.5 pl-2.5 text-btn text-ink transition-colors duration-150 ease-standard hover:border-ink hover:bg-hover"
            >
              <OriginalWord text={formRow.form} language={language} />
              <span aria-hidden="true">{crossMark}</span>
            </button>
          ) : null}
          <button
            type="button"
            onClick={() => withFlip(() => clear())}
            className="cursor-pointer rounded-6 border-0 bg-transparent px-2 py-1.5 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink"
          >
            {text.clear}
          </button>
        </div>
      ) : null}
      <div ref={box} className="relative">
        <ul className="m-0 max-w-220 list-none p-0">
          {visible.map((entry) => {
            const opened = open.has(entry.id) || book === entry.id;
            return (
              <li key={entry.id} data-k={entry.id} className="border-t border-rule py-4 pb-3.5 last:border-b">
                <button
                  type="button"
                  aria-expanded={opened}
                  onClick={() => (book === entry.id ? setBook(null) : toggle(entry.id))}
                  className="group/place -my-4 -mb-3.5 grid min-h-11 w-full cursor-pointer word-place-head items-center gap-x-3 border-0 bg-transparent py-4 pb-3.5 text-left text-ink"
                >
                  <span className="font-head text-passage group-hover/place:underline group-hover/place:decoration-rule-2 group-hover/place:underline-offset-4">
                    {entry.name}
                  </span>
                  <span className="text-ui-xs text-ink-3 tabular-nums">
                    {(entry.verses.length === 1 ? text.verse : text.verses).replace("{n}", String(entry.verses.length))}
                  </span>
                  <Chevron className="text-ink-3 transition-transform duration-200 ease-standard group-aria-expanded/place:rotate-90" />
                </button>
                <div
                  ref={(element) => {
                    if (!element) {
                      panels.current.delete(entry.id);
                      return;
                    }
                    if (!started.current.has(element)) {
                      started.current.add(element);
                      element.hidden = !opened;
                    } else if (opened && element.hidden) element.hidden = false;
                    panels.current.set(entry.id, element);
                  }}
                  className="overflow-hidden"
                >
                  <ul className="m-0 mt-4.5 list-none p-0 pb-0.5">
                    {entry.verses.map((verse) => (
                      <VerseRow key={verse.reference} verse={verse} forms={forms} language={language} />
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
      </div>
    </>
  );
}
