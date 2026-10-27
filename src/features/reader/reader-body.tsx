"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { UndoBar } from "@/components/undo-bar";
import { ChapterFoot } from "@/features/reader/chapter-foot";
import { ChapterText, type SecondReading } from "@/features/reader/chapter-text";
import { ReadMarker } from "@/features/reader/read-marker";
import { goToUnit } from "@/features/reader/go-to-unit";
import { keepAboveSheet } from "@/features/reader/keep-above-sheet";
import { DeleteNoteDialog, type DeleteNoteText } from "@/features/reader/delete-note-dialog";
import { NoteCards, type NoteCard } from "@/features/reader/note-cards";
import { YourNotesButton } from "@/features/reader/your-notes-button";
import { YourNotesPanel, type YourNotesText } from "@/features/reader/your-notes-panel";
import {
  isYourNotesOpen,
  setYourNotesOpen,
  subscribeYourNotes,
  useYourNotesOpen,
} from "@/features/reader/your-notes-store";
import { NoteEditor } from "@/features/reader/note-editor";
import { clearNoteWords, markNoteWords } from "@/features/reader/note-words";
import { PanelNotes } from "@/features/reader/panel-notes";
import type { PanelSection } from "@/features/reader/panel-sections";
import { PanelTranslations } from "@/features/reader/panel-translations";
import type { ReaderSelection } from "@/features/reader/read-selection";
import { SelectionToolbar } from "@/features/reader/selection-toolbar";
import { useChapterHighlights } from "@/features/reader/use-chapter-highlights";
import { useChapterNotes } from "@/features/reader/use-chapter-notes";
import { useChosenTranslation } from "@/features/reader/use-chosen-translation";
import { useSecondTranslation, useSideRoom } from "@/features/reader/use-second-translation";
import { useKeepTopVerse } from "@/features/reader/use-keep-top-verse";
import { useUndo } from "@/features/reader/use-undo";
import { readerPanelFrom, VersePanel } from "@/features/reader/verse-panel";
import { nbspBeforeDigits } from "@/lib/locator";
import { clippedQuote, type NoteDraft } from "@/lib/notes";
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
    locale: string;
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
      inEdition: string;
      cardsLabel: string;
      cardForeign: string;
      delete: DeleteNoteText;
      removed: string;
    };
    bookName: string;
    chapter: number;
    verseReference: string;
    shortCitation: string;
    verseRange: string;
    toolbar: Omit<Parameters<typeof SelectionToolbar>[0]["text"], "highlight">;
    yourNotes: YourNotesText;
  };
};

const excerptLimit = 90;
const excerptOf = (text: string) => (text.length > excerptLimit ? `${text.slice(0, excerptLimit).trimEnd()}…` : text);

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
  const secondChoice = useSecondTranslation(
    views.map((view) => view.id),
    selected.id,
  );
  const sideRoom = useSideRoom();
  const secondView = views.find((view) => view.id === secondChoice.id) ?? null;
  const second: SecondReading | null =
    secondView && secondChoice.mode !== "off"
      ? {
          mode: secondChoice.mode === "side" && sideRoom ? "side" : "below",
          abbreviation: secondView.abbreviation,
          name: secondView.name,
          firstName: selected.name,
          lang: secondView.language,
          verses: new Map(secondView.verses.map((entry) => [entry.verse, { text: entry.text, red: entry.red }])),
        }
      : null;
  const [picked, setPicked] = useState<number | null>(null);
  const [byKeyboard, setByKeyboard] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const textRoot = useRef<HTMLDivElement>(null);
  useKeepTopVerse(textRoot);
  const yourOpen = useYourNotesOpen();
  const verse = picked !== null && selected.verses.some((entry) => entry.verse === picked) ? picked : null;
  const undoState = useUndo();
  const highlights = useChapterHighlights({
    translationId: selected.id,
    book: bookId,
    chapter: panel.chapter,
    done: panel.highlight.done,
    removed: panel.highlight.removed,
    showUndo: undoState.show,
  });
  const notes = useChapterNotes({
    translationId: selected.id,
    book: bookId,
    chapter: panel.chapter,
    removedMessage: panel.notes.removed,
    showUndo: undoState.show,
  });

  const referenceOf = (first: number, last: number) =>
    (first === last ? panel.verseReference : panel.verseRange)
      .replace("{book}", panel.bookName)
      .replace("{chapter}", String(panel.chapter))
      .replace("{verse}", String(first))
      .replace("{from}", String(first))
      .replace("{to}", String(last));
  const plainReference = verse === null ? "" : referenceOf(verse, verse);
  const reference = nbspBeforeDigits(plainReference);
  const citation = panel.shortCitation
    .replace("{reference}", plainReference)
    .replace("{edition}", selected.abbreviation);
  const selectionCitation = (selection: ReaderSelection) => {
    const first = selection.ranges[0]?.verse ?? 0;
    const last = selection.ranges[selection.ranges.length - 1]?.verse ?? first;
    const short = panel.shortCitation
      .replace("{reference}", referenceOf(first, last))
      .replace("{edition}", selected.abbreviation);
    return `«${selection.text}» ${short}. ${location.origin}${location.pathname}#v-${first}`;
  };
  const dateLabel = (time: number) =>
    new Intl.DateTimeFormat(panel.locale, { day: "numeric", month: "short", year: "numeric" }).format(time);

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
  const select = (next: number, keyboard: boolean, element: HTMLElement) => {
    if (getSelection()?.toString()) return;
    if (picked === next) {
      close();
      return;
    }
    if (notes.editing && notes.editing.draft.verse !== next) notes.close();
    open(next, keyboard, element);
  };
  const noteMarkOf = (number: number) => {
    const list = notes.at(number);
    if (list.length === 0) return null;
    const base = list.length === 1 ? panel.notes.one : panel.notes.many.replace("{n}", String(list.length));
    const foreign = list.every((note) => note.scope === "words" && note.translationId !== selected.id) ? list[0] : null;
    const view = foreign ? views.find((candidate) => candidate.id === foreign.translationId) : null;
    return view ? panel.notes.inEdition.replace("{mark}", base).replace("{edition}", view.abbreviation) : base;
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
  const differs = numberingDiffers(
    { id: selected.id, versification: selected.versification, verseCount: selected.verses.length },
    { id: defaultView.id, versification: defaultView.versification, verseCount: defaultView.verses.length },
    bookId,
  );
  const editor = notes.editing && notes.editing.draft.verse === verse ? notes.editing : null;
  const verseNotes = verse === null ? [] : notes.at(verse).filter((note) => note.id !== editor?.noteId);
  const sectionText = panel.text.sections;
  const otherEditions =
    verse === null
      ? []
      : views
          .filter((view) => view.id !== selected.id)
          .filter(
            (view) =>
              !numberingDiffers(
                { id: selected.id, versification: selected.versification, verseCount: selected.verses.length },
                { id: view.id, versification: view.versification, verseCount: view.verses.length },
                bookId,
              ),
          )
          .flatMap((view) => {
            const entry = view.verses.find((candidate) => candidate.verse === verse);
            if (!entry) return [];
            const language = view.language === "es" ? sectionText.spanish : sectionText.english;
            return [{ id: view.id, name: view.displayName, language, lang: view.language, text: entry.text }];
          });
  const sections: PanelSection[] = [
    ...(editor || verseNotes.length > 0
      ? [
          {
            id: "notes",
            label: sectionText.notes,
            ...(verseNotes.length > 0 ? { count: verseNotes.length } : {}),
            content: (
              <>
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
                <PanelNotes notes={verseNotes} dateLabel={dateLabel} onOpen={notes.openExisting} />
              </>
            ),
          },
        ]
      : []),
    // TODO: «Palabras» shows the verse's words once the STEPBible word layer is loaded
    { id: "words", label: sectionText.words, content: null },
    // TODO: «Usos» lists where Doctrina cites this verse once the citation registry is queryable
    { id: "uses", label: sectionText.uses, content: null },
    ...(otherEditions.length > 0
      ? [
          {
            id: "translations",
            label: sectionText.translations,
            count: otherEditions.length,
            content: <PanelTranslations items={otherEditions} />,
          },
        ]
      : []),
  ];
  const chapterNotes = selected.verses.flatMap((entry) => notes.at(entry.verse));
  const cards: NoteCard[] = chapterNotes.map((note) => {
    const first = note.verse ?? 0;
    const place = nbspBeforeDigits(referenceOf(first, note.verseTo ?? first));
    const foreign = note.scope === "words" && note.translationId !== selected.id;
    const edition = views.find((candidate) => candidate.id === note.translationId)?.abbreviation;
    return {
      id: note.id,
      verse: first,
      place:
        foreign && edition
          ? panel.notes.cardForeign.replace("{reference}", place).replace("{edition}", edition)
          : place,
      text: note.text,
      date: dateLabel(note.updatedAt),
    };
  });
  const deletingCard = deleting === null ? null : (cards.find((card) => card.id === deleting) ?? null);
  const latest = useRef({ chapterNotes, translationId: selected.id });
  useEffect(() => {
    latest.current = { chapterNotes, translationId: selected.id };
  });
  const previewNote = useCallback((id: string | null) => {
    const note = id === null ? undefined : latest.current.chapterNotes.find((candidate) => candidate.id === id);
    if (note && textRoot.current) markNoteWords(textRoot.current, note, latest.current.translationId);
    else clearNoteWords();
  }, []);
  const citationOf = (first: number, last: number, abbreviation: string) =>
    panel.shortCitation.replace("{reference}", referenceOf(first, last)).replace("{edition}", abbreviation);
  const placedIds = new Set(chapterNotes.map((note) => note.id));
  const sourceCitation = panel.shortCitation
    .replace("{reference}", `${panel.bookName} ${panel.chapter}`)
    .replace("{edition}", selected.abbreviation);
  const listedNotes = notes.ofChapter.map((note) => {
    const card = cards.find((entry) => entry.id === note.id);
    const abbreviation =
      views.find((candidate) => candidate.id === note.translationId)?.abbreviation ?? selected.abbreviation;
    if (note.scope === "source") {
      return {
        id: note.id,
        verse: null,
        place: `${panel.bookName} ${panel.chapter}`,
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
    const place = card?.place ?? nbspBeforeDigits(referenceOf(first, note.verseTo ?? first));
    return {
      id: note.id,
      verse: first,
      place,
      text: note.text,
      date: card?.date ?? dateLabel(note.updatedAt),
      at: note.updatedAt,
      citation: `${note.text} ${citationOf(first, note.verseTo ?? first, abbreviation)}`,
      scope: note.scope,
      anchor: note.quote ? clippedQuote(note.quote) : null,
      lost: !placedIds.has(note.id),
    };
  });
  const listedHighlights = highlights.list.flatMap((entry) => {
    const source = selected.verses.find((candidate) => candidate.verse === entry.verse);
    if (!source) return [];
    const quote = source.text.slice(entry.from, entry.to);
    return [
      {
        id: entry.id,
        verse: entry.verse,
        place: nbspBeforeDigits(referenceOf(entry.verse, entry.verse)),
        text: quote,
        date: dateLabel(entry.at),
        at: entry.at,
        color: entry.color,
        citation: `«${quote}» ${citationOf(entry.verse, entry.verse, selected.abbreviation)}`,
      },
    ];
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
  const openCard = (id: string, element: HTMLElement) => {
    const note = chapterNotes.find((candidate) => candidate.id === id);
    if (!note || note.verse === null) return;
    open(note.verse, false, element);
    notes.openExisting(note);
  };

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
      <YourNotesButton
        label={panel.yourNotes.button}
        book={bookId}
        chapter={panel.chapter}
        className="mt-2 -ml-2.5 border border-rule-2 sm:hidden"
      />
      <ChapterText
        second={second}
        verses={selected.verses}
        lang={selected.language}
        selected={verse}
        rootRef={textRoot}
        segmentsOf={(entry) => highlights.segmentsFor(entry.verse, entry.text.length)}
        noteMarkOf={noteMarkOf}
        cardsShown={verse === null && !yourOpen && second?.mode !== "side"}
        cards={
          second?.mode === "side" ? null : (
            <NoteCards
              label={panel.notes.cardsLabel}
              cards={cards}
              hidden={verse !== null || yourOpen}
              rootRef={textRoot}
              onOpen={openCard}
              onPreview={previewNote}
            />
          )
        }
        onMark={(number, element) => open(number, false, element)}
        onSelect={select}
      />
      <ReadMarker book={bookId} chapter={panel.chapter} />
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
          current: verse === null ? null : highlights.chosenOfVerse(verse),
          canRemove: verse !== null && highlights.hasHighlightOnVerse(verse),
          onPick: (color) => {
            const entry = selected.verses.find((candidate) => candidate.verse === verse);
            if (verse !== null && entry) highlights.apply([{ verse, from: 0, to: entry.text.length }], color);
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
        sections={sections}
        forceSection={editor ? "notes" : null}
      />
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
        heading={`${panel.bookName} ${panel.chapter}`}
        onOpenNote={(id) => {
          const note = notes.ofChapter.find((candidate) => candidate.id === id);
          if (!note || note.verse === null) return;
          open(note.verse, false, null);
          notes.openExisting(note);
        }}
        onOpenHighlight={(number) => goToUnit(`v-${number}`)}
        onClose={() => setYourNotesOpen(false)}
      />
      {deletingCard ? (
        <DeleteNoteDialog
          place={deletingCard.place}
          excerpt={excerptOf(deletingCard.text)}
          text={panel.notes.delete}
          onCancel={() => setDeleting(null)}
          onConfirm={() => {
            notes.remove(deletingCard.id);
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
