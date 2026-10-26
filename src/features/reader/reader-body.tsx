"use client";

import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import { UndoBar } from "@/components/undo-bar";
import { ChapterFoot } from "@/features/reader/chapter-foot";
import { ChapterText } from "@/features/reader/chapter-text";
import { useChosenTranslation } from "@/features/reader/use-chosen-translation";
import { readerPanelFrom, VersePanel } from "@/features/reader/verse-panel";
import { SelectionToolbar } from "@/features/reader/selection-toolbar";
import type { ReaderSelection, VerseRange } from "@/features/reader/read-selection";
import { keepAboveSheet } from "@/features/reader/keep-above-sheet";
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
  currentColor,
  isCovered,
  removeRange,
  removeVerse,
  segmentsOf,
  type Highlight,
  type HighlightColor,
  type VerseKey,
} from "@/lib/highlights";
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
    highlight: Parameters<typeof VersePanel>[0]["highlight"]["text"] & { done: string; removed: string; undo: string };
    bookName: string;
    chapter: number;
    verseReference: string;
    shortCitation: string;
    verseRange: string;
    toolbar: Omit<Parameters<typeof SelectionToolbar>[0]["text"], "highlight">;
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
  const textRoot = useRef<HTMLDivElement>(null);
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
  const highlights = useSyncExternalStore(subscribeHighlights, getHighlights, () => noHighlights);
  const [undo, setUndo] = useState<{ message: string; before: Highlight[]; token: number; open: boolean } | null>(null);
  const keyOf = (number: number): VerseKey => ({
    translationId: selected.id,
    book: bookId,
    chapter: panel.chapter,
    verse: number,
  });
  const change = (next: Highlight[], message: string) => {
    const before = getHighlights();
    setHighlights(next);
    setUndo((previous) => ({ message, before, token: (previous?.token ?? 0) + 1, open: true }));
  };
  const applyRanges = (ranges: VerseRange[], color: HighlightColor) => {
    let next = getHighlights();
    for (const range of ranges) {
      next = addHighlight(next, { ...keyOf(range.verse), from: range.from, to: range.to, color, at: Date.now() });
    }
    rememberHighlightColor(color);
    change(next, panel.highlight.done);
  };
  const removeRanges = (ranges: VerseRange[]) => {
    let next = getHighlights();
    for (const range of ranges) next = removeRange(next, keyOf(range.verse), range.from, range.to);
    change(next, panel.highlight.removed);
  };
  const pick = (color: HighlightColor) => {
    const entry = selected.verses.find((candidate) => candidate.verse === verse);
    if (verse !== null && entry) applyRanges([{ verse, from: 0, to: entry.text.length }], color);
  };
  const selectionCitation = (selection: ReaderSelection) => {
    const first = selection.ranges[0]?.verse ?? 0;
    const last = selection.ranges[selection.ranges.length - 1]?.verse ?? first;
    const pattern = first === last ? panel.verseReference : panel.verseRange;
    const reference = nbspBeforeDigits(pattern)
      .replace("{book}", panel.bookName)
      .replace("{chapter}", String(panel.chapter))
      .replace("{verse}", String(first))
      .replace("{from}", String(first))
      .replace("{to}", String(last))
      .replaceAll("\u00a0", " ");
    const short = panel.shortCitation.replace("{reference}", reference).replace("{edition}", selected.abbreviation);
    return `«${selection.text}» ${short}. ${location.origin}${location.pathname}#v-${first}`;
  };
  const unmark = () => {
    if (verse !== null) change(removeVerse(getHighlights(), keyOf(verse)), panel.highlight.removed);
  };
  const expireUndo = useCallback(() => setUndo((previous) => (previous ? { ...previous, open: false } : previous)), []);
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
      <ChapterText
        verses={selected.verses}
        lang={selected.language}
        selected={verse}
        rootRef={textRoot}
        segmentsOf={(entry) => segmentsOf(highlights, keyOf(entry.verse), entry.text.length)}
        onSelect={select}
      />
      <ChapterFoot title={footTitle} edition={selected.name} licence={licences[selected.id] ?? null} />
      <VersePanel
        open={verse !== null}
        reference={reference}
        citation={citation}
        verse={verse}
        text={panel.text}
        focusOnOpen={byKeyboard}
        highlight={{
          text: panel.highlight,
          current: verse === null ? null : (currentColor(highlights, keyOf(verse)) ?? lastHighlightColor()),
          marked: verse !== null && currentColor(highlights, keyOf(verse)) !== null,
          onPick: pick,
          onRemove: unmark,
        }}
        onClose={close}
      />
      <SelectionToolbar
        rootRef={textRoot}
        text={{ ...panel.toolbar, highlight: panel.highlight }}
        isMarked={(ranges) =>
          ranges.length > 0 && ranges.every((range) => isCovered(highlights, keyOf(range.verse), range.from, range.to))
        }
        lastColor={lastHighlightColor}
        citation={selectionCitation}
        onHighlight={applyRanges}
        onRemove={removeRanges}
      />
      <UndoBar
        open={undo?.open ?? false}
        message={undo?.message ?? ""}
        token={undo?.token ?? 0}
        actionLabel={panel.highlight.undo}
        onAction={() => {
          if (!undo) return;
          setHighlights(undo.before);
          setUndo({ ...undo, open: false });
        }}
        onExpire={expireUndo}
      />
    </>
  );
}
