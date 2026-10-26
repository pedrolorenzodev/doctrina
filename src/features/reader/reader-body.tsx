"use client";

import { useCallback, useRef, useState } from "react";
import { ChapterFoot } from "@/features/reader/chapter-foot";
import { ChapterText } from "@/features/reader/chapter-text";
import { useChosenTranslation } from "@/features/reader/use-chosen-translation";
import { readerPanelFrom, VersePanel } from "@/features/reader/verse-panel";
import { keepAboveSheet } from "@/features/reader/keep-above-sheet";
import { nbspBeforeDigits } from "@/lib/locator";
import { numberingDiffers } from "@/content/bible/numbering-note";
import type { ReaderTranslationView } from "@/content/get-reader-chapter";

type ReaderBodyProps = {
  views: ReaderTranslationView[];
  licences: Record<string, string | null>;
  defaultId: string;
  bookId: string;
  deuteroNotice: string | null;
  numberingNote: string;
  footTitle: string;
  panel: {
    text: Parameters<typeof VersePanel>[0]["text"];
    bookName: string;
    chapter: number;
    verseReference: string;
    shortCitation: string;
  };
};

const noteClassName = "mt-5.5 mb-0 max-w-140 text-reader-note text-ink-3";

export function ReaderBody({
  views,
  licences,
  defaultId,
  bookId,
  deuteroNotice,
  numberingNote,
  footTitle,
  panel,
}: ReaderBodyProps) {
  const chosen = useChosenTranslation(
    views.map((view) => view.id),
    defaultId,
  );
  const selected = views.find((view) => view.id === chosen) ?? views[0]!;
  const defaultView = views.find((view) => view.id === defaultId) ?? selected;
  const asNumbered = (view: ReaderTranslationView) => ({
    id: view.id,
    versification: view.versification,
    verseCount: view.verses.length,
  });
  const [picked, setPicked] = useState<number | null>(null);
  const [byKeyboard, setByKeyboard] = useState(false);
  const opener = useRef<HTMLElement | null>(null);
  const verse = picked !== null && selected.verses.some((entry) => entry.verse === picked) ? picked : null;
  const plainReference =
    verse === null
      ? ""
      : panel.verseReference
          .replace("{book}", panel.bookName)
          .replace("{chapter}", String(panel.chapter))
          .replace("{verse}", String(verse));
  const reference = nbspBeforeDigits(plainReference);
  const citation = panel.shortCitation
    .replace("{reference}", plainReference)
    .replace("{edition}", selected.abbreviation);
  const close = useCallback(() => {
    setPicked(null);
    opener.current?.focus({ preventScroll: true });
  }, []);
  const select = (next: number, keyboard: boolean, element: HTMLElement) => {
    if (getSelection()?.toString()) return;
    if (picked === next) {
      close();
      return;
    }
    opener.current = element;
    setByKeyboard(keyboard);
    setPicked(next);
    keepAboveSheet(element, readerPanelFrom);
  };
  const differs = numberingDiffers(asNumbered(selected), asNumbered(defaultView), bookId);
  return (
    <>
      <p className="title-part title-part-2 mt-2.5 mb-0 text-reader-note text-ink-3">{selected.name}</p>
      {deuteroNotice ? <p className={`title-part title-part-3 ${noteClassName}`}>{deuteroNotice}</p> : null}
      {differs ? (
        <p role="note" className={noteClassName}>
          {numberingNote
            .replace("{abbreviation}", selected.abbreviation)
            .replace("{reference}", defaultView.abbreviation)}
        </p>
      ) : null}
      <ChapterText verses={selected.verses} lang={selected.language} selected={verse} onSelect={select} />
      <ChapterFoot title={footTitle} edition={selected.name} licence={licences[selected.id] ?? null} />
      <VersePanel
        open={verse !== null}
        reference={reference}
        citation={citation}
        verse={verse}
        text={panel.text}
        focusOnOpen={byKeyboard}
        onClose={close}
      />
    </>
  );
}
