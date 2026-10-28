"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { UndoBar } from "@/components/undo-bar";
import type { FatherDivision } from "@/content/get-father-works";
import { toneClassName } from "@/features/reader/chapter-text";
import { DeleteNoteDialog, type DeleteNoteText } from "@/features/reader/delete-note-dialog";
import { goToUnit } from "@/features/reader/go-to-unit";
import { keepAboveSheet } from "@/features/reader/keep-above-sheet";
import { NoteEditor } from "@/features/reader/note-editor";
import { NoteMarkers } from "@/features/reader/note-markers";
import { PanelNotes } from "@/features/reader/panel-notes";
import type { ReaderSelection } from "@/features/reader/read-selection";
import { SelectionToolbar } from "@/features/reader/selection-toolbar";
import { useChapterHighlights } from "@/features/reader/use-chapter-highlights";
import { useChapterNotes } from "@/features/reader/use-chapter-notes";
import { useKeepTopVerse } from "@/features/reader/use-keep-top-verse";
import { useUndo } from "@/features/reader/use-undo";
import { readerPanelFrom, VersePanel } from "@/features/reader/verse-panel";
import { YourNotesPanel, type YourNotesText } from "@/features/reader/your-notes-panel";
import {
  isYourNotesOpen,
  setYourNotesOpen,
  subscribeYourNotes,
  useYourNotesOpen,
} from "@/features/reader/your-notes-store";
import { nbspBeforeDigits } from "@/lib/locator";
import { clippedQuote, type NoteDraft } from "@/lib/notes";

type FatherBodyProps = {
  workId: string;
  workName: string;
  title: string;
  lang: string;
  prologue: string;
  divisions: FatherDivision[];
  editionTag: string;
  locale: string;
  panel: {
    text: Parameters<typeof VersePanel>[0]["text"];
    highlight: Parameters<typeof VersePanel>[0]["highlight"]["text"] & { done: string; removed: string; undo: string };
    notes: {
      add: string;
      label: string;
      placeholder: string;
      about: string;
      saved: string;
      deleteNote: string;
      one: string;
      many: string;
      delete: DeleteNoteText;
      removed: string;
    };
    toolbar: Omit<Parameters<typeof SelectionToolbar>[0]["text"], "highlight">;
    yourNotes: YourNotesText;
    shortCitation: string;
  };
};

const anchorOf = (locator: string) => `d-${locator.replace(/[^a-zA-Z0-9.-]+/g, "-")}`;
const excerptLimit = 90;
const excerptOf = (text: string) => (text.length > excerptLimit ? `${text.slice(0, excerptLimit).trimEnd()}…` : text);
const chapterOfWork = 1;

export function FatherBody({
  workId,
  workName,
  title,
  lang,
  prologue,
  divisions,
  editionTag,
  locale,
  panel,
}: FatherBodyProps) {
  const [picked, setPicked] = useState<number | null>(null);
  const [byKeyboard, setByKeyboard] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [previewed, setPreviewed] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const textRoot = useRef<HTMLDivElement>(null);
  useKeepTopVerse(textRoot);
  const yourOpen = useYourNotesOpen();
  const undoState = useUndo();
  const highlights = useChapterHighlights({
    translationId: workId,
    column: "first",
    root: textRoot,
    book: workId,
    chapter: chapterOfWork,
    done: panel.highlight.done,
    removed: panel.highlight.removed,
    showUndo: undoState.show,
  });
  const notes = useChapterNotes({
    translationId: workId,
    book: workId,
    chapter: chapterOfWork,
    removedMessage: panel.notes.removed,
    showUndo: undoState.show,
  });

  const byOrdinal = new Map(divisions.map((division) => [division.ordinal, division]));
  const placeName = (ordinal: number) => {
    const locator = byOrdinal.get(ordinal)?.locator ?? String(ordinal);
    return locator === "prologue" ? prologue : locator;
  };
  const referenceOf = (first: number, last: number) =>
    first === last ? `${workName} ${placeName(first)}` : `${workName} ${placeName(first)}–${placeName(last)}`;
  const dateLabel = (time: number) =>
    new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", year: "numeric" }).format(time);
  const citedPlace = (first: number, last: number) =>
    first === last ? `${title} ${placeName(first)}` : `${title} ${placeName(first)}–${placeName(last)}`;
  const citationOf = (first: number, last: number) =>
    panel.shortCitation.replace("{reference}", citedPlace(first, last)).replace("{edition}", editionTag);
  const sourceCitation = panel.shortCitation.replace("{reference}", title).replace("{edition}", editionTag);
  const verse = picked !== null && byOrdinal.has(picked) ? picked : null;
  const plainReference = verse === null ? "" : referenceOf(verse, verse);
  const anchorOfOrdinal = (ordinal: number) => anchorOf(byOrdinal.get(ordinal)?.locator ?? "");

  const close = useCallback(() => {
    setPicked(null);
    notes.close();
    opener.current?.focus({ preventScroll: true });
  }, [notes]);
  const open = (next: number, keyboard: boolean, element: HTMLElement | null) => {
    setYourNotesOpen(false);
    opener.current = element;
    setByKeyboard(keyboard);
    setPicked(next);
    if (element) keepAboveSheet(element, readerPanelFrom);
  };
  const openFrom = (ordinal: number, element: HTMLElement, keyboard: boolean) => {
    if (picked === ordinal) {
      close();
      return;
    }
    if (notes.editing && notes.editing.draft.verse !== ordinal) notes.close();
    open(ordinal, keyboard, element);
  };

  useEffect(() => {
    if (verse === null) return;
    const division = document.getElementById(anchorOfOrdinal(verse));
    division?.setAttribute("data-selected", "");
    return () => division?.removeAttribute("data-selected");
  });

  useEffect(() => {
    const release = subscribeYourNotes(() => {
      if (isYourNotesOpen()) setPicked(null);
    });
    return () => {
      release();
      setYourNotesOpen(false);
    };
  }, []);

  const noteMarkOf = (ordinal: number) => {
    const count = notes.at(ordinal).length;
    if (count === 0) return null;
    return count === 1 ? panel.notes.one : panel.notes.many.replace("{n}", String(count));
  };
  const draftReference = (draft: NoteDraft) => {
    const place = nbspBeforeDigits(referenceOf(draft.verse, draft.verseTo));
    return panel.notes.about.replace(
      "{reference}",
      draft.scope === "words" && draft.quote ? `${place}: «${clippedQuote(draft.quote)}»` : place,
    );
  };
  const noteOnWords = (selection: ReaderSelection) => {
    const first = selection.ranges[0];
    const last = selection.ranges[selection.ranges.length - 1];
    if (!first || !last) return;
    open(first.verse, false, null);
    notes.openNew({
      scope: "words",
      verse: first.verse,
      verseTo: last.verse,
      from: first.from,
      to: last.to,
      quote: selection.text,
    });
  };
  const selectionCitation = (selection: ReaderSelection) => {
    const first = selection.ranges[0]?.verse ?? 0;
    const last = selection.ranges[selection.ranges.length - 1]?.verse ?? first;
    return `«${selection.text}» ${citationOf(first, last)}.`;
  };

  const editor = notes.editing && notes.editing.draft.verse === verse ? notes.editing : null;
  const listedNotes = notes.ofChapter.map((note) => {
    if (note.scope === "source") {
      return {
        id: note.id,
        verse: null,
        place: workName,
        text: note.text,
        date: dateLabel(note.updatedAt),
        at: note.updatedAt,
        citation: `${note.text} ${sourceCitation}`,
        scope: note.scope,
        anchor: null,
        lost: false,
      };
    }
    const first = note.verse ?? 0;
    return {
      id: note.id,
      verse: first,
      place: nbspBeforeDigits(referenceOf(first, note.verseTo ?? first)),
      text: note.text,
      date: dateLabel(note.updatedAt),
      at: note.updatedAt,
      citation: `${note.text} ${citationOf(first, note.verseTo ?? first)}`,
      scope: note.scope,
      anchor: note.quote ? clippedQuote(note.quote) : null,
      lost: byOrdinal.get(first) === undefined,
    };
  });
  const listedHighlights = highlights.list.flatMap((entry) => {
    const division = byOrdinal.get(entry.verse);
    if (!division) return [];
    const quote = division.text.slice(entry.from, entry.to);
    return [
      {
        id: entry.id,
        verse: entry.verse,
        place: nbspBeforeDigits(referenceOf(entry.verse, entry.verse)),
        text: quote,
        date: dateLabel(entry.at),
        at: entry.at,
        color: entry.color,
        citation: `«${quote}» ${citationOf(entry.verse, entry.verse)}`,
      },
    ];
  });
  const deletingNote = deleting === null ? null : (listedNotes.find((item) => item.id === deleting) ?? null);

  return (
    <>
      <div ref={textRoot} lang={lang} data-father-text="" className="relative mt-8.5 max-w-reader">
        {divisions.map((division) => {
          const mark = noteMarkOf(division.ordinal);
          return (
            <div
              key={division.ordinal}
              id={anchorOf(division.locator)}
              className="relative -mx-3 mb-1.5 rounded-6 px-3 py-2 arrival-mark data-marked:bg-mark data-selected:bg-accent-weak"
            >
              {division.heading ? (
                <p className="m-0 mb-1 font-ui text-ui-xs font-medium text-ink-3">{division.heading}</p>
              ) : null}
              <p
                className={`relative verse-mid -mx-3 -mt-2 mb-0 px-3 pt-2 font-body text-reader font-reader text-ink-2 ${mark ? "md:indent-5.75" : ""}`}
              >
                <span className="mb-0.5 flex min-h-6 items-center gap-2 font-ui text-division font-normal text-ink-3 tabular-nums md:contents">
                  <button
                    type="button"
                    data-division-open={anchorOf(division.locator)}
                    data-locator={division.locator}
                    onClick={(event) => openFrom(division.ordinal, event.currentTarget, event.detail === 0)}
                    className="cursor-pointer rounded-3 text-division text-ink-3 transition-colors duration-150 ease-standard hover:text-ink hover:underline md:absolute md:verse-number-top md:-left-13 md:w-14 md:indent-0 md:text-right"
                  >
                    {division.locator === "prologue" ? prologue : division.locator}
                  </button>
                  {mark ? (
                    <NoteMarkers
                      mark={mark}
                      previewed={previewed === division.ordinal}
                      hideLabel={false}
                      onOpen={(event) => open(division.ordinal, false, event.currentTarget)}
                      onPreview={(on) => setPreviewed(on ? division.ordinal : null)}
                    />
                  ) : null}
                </span>
                <span data-verse-text={division.ordinal}>
                  {highlights.segmentsFor(division.ordinal, division.text.length).map((segment) =>
                    segment.color ? (
                      <mark
                        key={segment.from}
                        data-highlight={segment.color}
                        className={`rounded-2 text-inherit box-decoration-clone transition-colors duration-200 ease-standard ${toneClassName[segment.color]}`}
                      >
                        {division.text.slice(segment.from, segment.to)}
                      </mark>
                    ) : (
                      division.text.slice(segment.from, segment.to)
                    ),
                  )}
                </span>
              </p>
            </div>
          );
        })}
      </div>
      <VersePanel
        open={verse !== null}
        reference={plainReference}
        citation={verse === null ? "" : citationOf(verse, verse)}
        verse={verse}
        text={panel.text}
        focusOnOpen={byKeyboard}
        link={() => `${location.origin}${location.pathname}#${verse === null ? "" : anchorOfOrdinal(verse)}`}
        withDetail={false}
        highlight={{
          text: panel.highlight,
          current: verse === null ? null : highlights.chosenOfVerse(verse),
          canRemove: verse !== null && highlights.hasHighlightOnVerse(verse),
          onPick: (color) => {
            const division = verse === null ? undefined : byOrdinal.get(verse);
            if (verse !== null && division) highlights.apply([{ verse, from: 0, to: division.text.length }], color);
          },
          onRemove: () => {
            if (verse !== null) highlights.removeVerse(verse);
          },
        }}
        noteLabel={panel.notes.add}
        onNote={() => {
          if (verse !== null) {
            notes.openNew({ scope: "unit", verse, verseTo: verse, from: null, to: null, quote: null });
          }
        }}
        onClose={close}
      >
        {editor ? (
          <NoteEditor
            key={editor.session}
            reference={draftReference(editor.draft)}
            initial={notes.current?.text ?? ""}
            savedAt={notes.current?.updatedAt ?? null}
            dateLabel={dateLabel}
            text={panel.notes}
            onSave={notes.save}
            onClose={notes.close}
            onDelete={() => (editor.noteId ? setDeleting(editor.noteId) : notes.close())}
          />
        ) : null}
        <PanelNotes
          notes={verse === null ? [] : notes.at(verse).filter((note) => note.id !== editor?.noteId)}
          dateLabel={dateLabel}
          onOpen={notes.openExisting}
        />
      </VersePanel>
      <YourNotesPanel
        open={yourOpen}
        text={panel.yourNotes}
        editorText={panel.notes}
        closeLabel={panel.text.close}
        sourceNote={notes.source ? { text: notes.source.text, updatedAt: notes.source.updatedAt } : null}
        dateLabel={dateLabel}
        onSaveSource={notes.saveSource}
        onDeleteSource={notes.removeSource}
        notes={listedNotes}
        highlights={listedHighlights}
        colorNames={panel.highlight.colors}
        heading={workName}
        onOpenNote={(id) => {
          const note = notes.ofChapter.find((candidate) => candidate.id === id);
          if (!note || note.verse === null) return;
          open(note.verse, false, null);
          notes.openExisting(note);
        }}
        onOpenHighlight={(ordinal) => goToUnit(anchorOfOrdinal(ordinal))}
        onClose={() => setYourNotesOpen(false)}
      />
      {deletingNote ? (
        <DeleteNoteDialog
          place={deletingNote.place}
          excerpt={excerptOf(deletingNote.text)}
          text={panel.notes.delete}
          onCancel={() => setDeleting(null)}
          onConfirm={() => {
            notes.remove(deletingNote.id);
            setDeleting(null);
            requestAnimationFrame(() => opener.current?.focus({ preventScroll: true }));
          }}
        />
      ) : null}
      <SelectionToolbar
        rootRef={textRoot}
        text={{ ...panel.toolbar, highlight: panel.highlight }}
        isMarked={highlights.isMarked}
        lastColor={highlights.lastColor}
        chosenIn={highlights.chosenIn}
        hasHighlightIn={highlights.hasHighlightIn}
        citation={selectionCitation}
        onHighlight={highlights.apply}
        onRemove={highlights.remove}
        onNote={noteOnWords}
      />
      <UndoBar
        open={undoState.undo?.open ?? false}
        message={undoState.undo?.message ?? ""}
        token={undoState.undo?.token ?? 0}
        actionLabel={panel.highlight.undo}
        onAction={() => {
          undoState.undo?.restore();
          undoState.expire();
        }}
        onExpire={undoState.expire}
      />
    </>
  );
}
