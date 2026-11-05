"use client";

import { Fragment, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { SimplifiedParagraph } from "@/components/simplifier/simplified-paragraph";
import { UndoBar } from "@/components/undo-bar";
import type { FatherDivision } from "@/content/get-father-works";
import { getSimplifiedText } from "@/content/simplified-texts";
import { ColumnHead, type ColumnHeadText } from "@/features/reader/column-head";
import { DeleteNoteDialog, type DeleteNoteText } from "@/features/reader/delete-note-dialog";
import { goToUnit } from "@/features/reader/go-to-unit";
import { keepAboveSheet } from "@/features/reader/keep-above-sheet";
import { NoteEditor } from "@/features/reader/note-editor";
import { NoteMarkers } from "@/features/reader/note-markers";
import { PanelNotes } from "@/features/reader/panel-notes";
import type { ReaderSelection, VerseRange } from "@/features/reader/read-selection";
import { fieldOnOpen, openAskDrawer } from "@/lib/ask-drawer";
import { SelectionToolbar } from "@/features/reader/selection-toolbar";
import { useChapterHighlights } from "@/features/reader/use-chapter-highlights";
import { useChapterNotes } from "@/features/reader/use-chapter-notes";
import { useKeepTopVerse } from "@/features/reader/use-keep-top-verse";
import { useSecondTranslation, useSideRoom } from "@/features/reader/use-second-translation";
import { useUndo } from "@/features/reader/use-undo";
import { readerPanelFrom, VersePanel } from "@/features/reader/verse-panel";
import { YourNotesPanel, type YourNotesText } from "@/features/reader/your-notes-panel";
import {
  isYourNotesOpen,
  setYourNotesOpen,
  subscribeYourNotes,
  useYourNotesOpen,
} from "@/features/reader/your-notes-store";
import { markerLabel } from "@/features/reader/father-marker";
import { chooseFatherEdition, useChosenFatherEdition } from "@/lib/father-edition-choice";
import { fatherSecondStore } from "@/lib/father-second-translation";
import { nbspBeforeDigits } from "@/lib/locator";
import type { Segment } from "@/lib/highlights";
import { clippedQuote, type NoteDraft } from "@/lib/notes";

export type FatherEditionView = {
  id: string;
  key: string;
  lang: "en" | "es";
  abbreviation: string;
  name: string;
  simplified: boolean;
  workName: string;
  title: string;
  editionTag: string;
  markers: Record<string, string>;
  divisions: FatherDivision[];
  foot: ReactNode;
};

type FatherBodyProps = {
  workId: string;
  views: FatherEditionView[];
  defaultId: string;
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
      inEdition: string;
      delete: DeleteNoteText;
      removed: string;
    };
    toolbar: Omit<Parameters<typeof SelectionToolbar>[0]["text"], "highlight">;
    yourNotes: YourNotesText;
    shortCitation: string;
    columnHeads: ColumnHeadText;
    markers: Record<string, string>;
  };
};

const maxHangingLocator = 8;
const hangingLocator = "md:absolute md:verse-number-top md:-left-13 md:w-14 md:indent-0 md:text-right";

const anchorOf = (locator: string) => `d-${locator.replace(/[^a-zA-Z0-9.-]+/g, "-")}`;
const excerptLimit = 90;
const excerptOf = (text: string) => (text.length > excerptLimit ? `${text.slice(0, excerptLimit).trimEnd()}…` : text);
const chapterOfWork = 1;

export function FatherBody({ workId, views, defaultId, locale, panel }: FatherBodyProps) {
  const ids = views.map((view) => view.id);
  const chosen = useChosenFatherEdition(ids, defaultId);
  const selected = views.find((view) => view.id === chosen) ?? views[0]!;
  const secondChoice = useSecondTranslation(ids, selected.id, fatherSecondStore);
  const sideRoom = useSideRoom();
  const pickerOptions = views.map(({ id, abbreviation, name, lang }) => ({
    id,
    abbreviation,
    displayName: name,
    language: lang,
  }));
  const changeFirst = (id: string) => {
    if (secondChoice.id === id) fatherSecondStore.choose({ mode: secondChoice.mode, id: selected.id });
    chooseFatherEdition(id);
  };
  const changeSecond = (id: string) => {
    if (id === selected.id && secondChoice.id) chooseFatherEdition(secondChoice.id);
    fatherSecondStore.choose({ mode: secondChoice.mode, id });
  };
  const secondView = views.find((view) => view.id === secondChoice.id) ?? null;
  const secondMode =
    secondView && secondChoice.mode !== "off" ? (secondChoice.mode === "side" && sideRoom ? "side" : "below") : null;
  const second = secondView && secondMode ? { view: secondView, mode: secondMode } : null;
  const sideLayout = secondMode === "side";
  const secondByOrdinal = new Map(secondView?.divisions.map((division) => [division.ordinal, division]));

  const [picked, setPicked] = useState<number | null>(null);
  const [pickedSecond, setPickedSecond] = useState(false);
  const [byKeyboard, setByKeyboard] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [previewed, setPreviewed] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const textRoot = useRef<HTMLDivElement>(null);
  useKeepTopVerse(textRoot);
  const yourOpen = useYourNotesOpen();
  const undoState = useUndo();
  const highlights = useChapterHighlights({
    translationId: selected.key,
    column: "first",
    root: textRoot,
    book: workId,
    chapter: chapterOfWork,
    done: panel.highlight.done,
    removed: panel.highlight.removed,
    showUndo: undoState.show,
  });
  const highlightsSecond = useChapterHighlights({
    translationId: secondView?.key ?? "",
    column: "second",
    root: textRoot,
    book: workId,
    chapter: chapterOfWork,
    done: panel.highlight.done,
    removed: panel.highlight.removed,
    showUndo: undoState.show,
  });
  const inSecond = pickedSecond && second !== null;
  const contextView = inSecond ? second.view : selected;
  const contextHighlights = inSecond ? highlightsSecond : highlights;
  const highlightsOf = (ranges: VerseRange[]) =>
    secondView !== null && ranges[0]?.translationId === secondView.key ? highlightsSecond : highlights;
  const notes = useChapterNotes({
    translationId: selected.key,
    book: workId,
    chapter: chapterOfWork,
    removedMessage: panel.notes.removed,
    showUndo: undoState.show,
  });

  const byOrdinal = new Map(selected.divisions.map((division) => [division.ordinal, division]));
  const locatorOf = (ordinal: number) =>
    byOrdinal.get(ordinal)?.locator ?? secondByOrdinal.get(ordinal)?.locator ?? String(ordinal);
  const placeName = (view: FatherEditionView, ordinal: number) => markerLabel(locatorOf(ordinal), view.markers);
  const siteName = (ordinal: number) => markerLabel(locatorOf(ordinal), panel.markers);
  const referenceOf = (view: FatherEditionView, first: number, last: number) =>
    first === last ? `${view.workName} ${siteName(first)}` : `${view.workName} ${siteName(first)}–${siteName(last)}`;
  const dateLabel = (time: number) =>
    new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", year: "numeric" }).format(time);
  const citedPlace = (view: FatherEditionView, first: number, last: number) =>
    first === last
      ? `${view.title} ${placeName(view, first)}`
      : `${view.title} ${placeName(view, first)}–${placeName(view, last)}`;
  const citationOf = (view: FatherEditionView, first: number, last: number) =>
    panel.shortCitation.replace("{reference}", citedPlace(view, first, last)).replace("{edition}", view.editionTag);
  const viewOfKey = (key: string | undefined) => views.find((view) => view.key === key) ?? selected;
  const sourceCitation = panel.shortCitation
    .replace("{reference}", selected.title)
    .replace("{edition}", selected.editionTag);
  const verse = picked !== null && byOrdinal.has(picked) ? picked : null;
  const plainReference = verse === null ? "" : referenceOf(contextView, verse, verse);
  const anchorOfOrdinal = (ordinal: number) => anchorOf(locatorOf(ordinal));

  const close = useCallback(() => {
    setPicked(null);
    setPickedSecond(false);
    notes.close();
    opener.current?.focus({ preventScroll: true });
  }, [notes]);
  const open = (next: number, keyboard: boolean, element: HTMLElement | null, side = false) => {
    setYourNotesOpen(false);
    setPickedSecond(side);
    opener.current = element;
    setByKeyboard(keyboard);
    setPicked(next);
    if (element) keepAboveSheet(element, readerPanelFrom);
  };
  const openFrom = (ordinal: number, element: HTMLElement, keyboard: boolean) => {
    if (picked === ordinal && !pickedSecond) {
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
    const list = notes.at(ordinal);
    if (list.length === 0) return null;
    const base = list.length === 1 ? panel.notes.one : panel.notes.many.replace("{n}", String(list.length));
    const foreign = list.every((note) => note.scope === "words" && note.translationId !== selected.key)
      ? list[0]
      : null;
    const view = foreign ? views.find((candidate) => candidate.key === foreign.translationId) : null;
    return view ? panel.notes.inEdition.replace("{mark}", base).replace("{edition}", view.abbreviation) : base;
  };
  const draftReference = (draft: NoteDraft) => {
    const place = nbspBeforeDigits(referenceOf(contextView, draft.verse, draft.verseTo));
    return panel.notes.about.replace(
      "{reference}",
      draft.scope === "words" && draft.quote ? `${place}: «${clippedQuote(draft.quote)}»` : place,
    );
  };
  const noteOnWords = (selection: ReaderSelection) => {
    const first = selection.ranges[0];
    const last = selection.ranges[selection.ranges.length - 1];
    if (!first || !last) return;
    open(first.verse, false, null, first.translationId !== undefined && first.translationId === secondView?.key);
    notes.openNew({
      scope: "words",
      verse: first.verse,
      verseTo: last.verse,
      from: first.from,
      to: last.to,
      quote: selection.text,
      ...(first.translationId ? { translationId: first.translationId } : {}),
    });
  };
  const selectionCitation = (selection: ReaderSelection) => {
    const first = selection.ranges[0]?.verse ?? 0;
    const last = selection.ranges[selection.ranges.length - 1]?.verse ?? first;
    return `«${selection.text}» ${citationOf(viewOfKey(selection.ranges[0]?.translationId), first, last)}.`;
  };

  const editor = notes.editing && notes.editing.draft.verse === verse ? notes.editing : null;
  const listedNotes = notes.ofChapter.map((note) => {
    if (note.scope === "source") {
      return {
        id: note.id,
        verse: null,
        place: selected.workName,
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
      place: nbspBeforeDigits(referenceOf(selected, first, note.verseTo ?? first)),
      text: note.text,
      date: dateLabel(note.updatedAt),
      at: note.updatedAt,
      citation: `${note.text} ${citationOf(viewOfKey(note.translationId), first, note.verseTo ?? first)}`,
      scope: note.scope,
      anchor: note.quote ? clippedQuote(note.quote) : null,
      lost: byOrdinal.get(first) === undefined,
    };
  });
  const listedHighlights = [
    { view: selected, list: highlights.list },
    ...(secondView ? [{ view: secondView, list: highlightsSecond.list }] : []),
  ]
    .flatMap(({ view, list }) =>
      list.flatMap((entry) => {
        const division = view.divisions.find((candidate) => candidate.ordinal === entry.verse);
        if (!division) return [];
        const quote = division.text.slice(entry.from, entry.to);
        return [
          {
            id: entry.id,
            verse: entry.verse,
            place: nbspBeforeDigits(referenceOf(view, entry.verse, entry.verse)),
            text: quote,
            date: dateLabel(entry.at),
            at: entry.at,
            color: entry.color,
            citation: `«${quote}» ${citationOf(view, entry.verse, entry.verse)}`,
          },
        ];
      }),
    )
    .sort((a, b) => a.verse - b.verse || a.at - b.at);
  const deletingNote = deleting === null ? null : (listedNotes.find((item) => item.id === deleting) ?? null);

  const textSpan = (division: FatherDivision, marked: Segment[], attributes: object) => (
    <span {...attributes}>
      {marked.map((segment) =>
        segment.color ? (
          <mark
            key={segment.from}
            data-highlight={segment.color}
            className="highlight-mark rounded-2 text-inherit box-decoration-clone"
          >
            {division.text.slice(segment.from, segment.to)}
          </mark>
        ) : (
          division.text.slice(segment.from, segment.to)
        ),
      )}
    </span>
  );

  return (
    <>
      <div
        ref={textRoot}
        lang={selected.lang}
        data-father-text=""
        data-second={second ? second.mode : undefined}
        className={`relative mt-8.5 ${sideLayout ? "grid max-w-wide grid-cols-2 gap-x-10" : "max-w-reader"}`}
      >
        {sideLayout && second ? (
          <div className="col-span-2 mb-1.5 grid grid-cols-2 gap-x-10 border-b border-rule pb-3">
            <ColumnHead
              label={panel.columnHeads.first}
              abbreviation={selected.abbreviation}
              name={selected.name}
              options={pickerOptions}
              value={selected.id}
              onChoose={changeFirst}
              text={panel.columnHeads}
            />
            <ColumnHead
              label={panel.columnHeads.second}
              abbreviation={second.view.abbreviation}
              name={second.view.name}
              options={pickerOptions}
              value={second.view.id}
              onChoose={changeSecond}
              text={panel.columnHeads}
            />
          </div>
        ) : null}
        {selected.divisions.map((division) => {
          const mark = noteMarkOf(division.ordinal);
          const stacked = division.locator.length > maxHangingLocator;
          const other = secondByOrdinal.get(division.ordinal);
          return (
            <Fragment key={division.ordinal}>
              <div
                id={anchorOf(division.locator)}
                className="relative -mx-3 mb-1.5 rounded-6 px-3 py-2 arrival-mark data-marked:bg-mark data-selected:bg-accent-weak"
              >
                {division.heading ? (
                  <p className="m-0 mb-1 font-ui text-ui-xs font-medium text-ink-3">{division.heading}</p>
                ) : null}
                <SimplifiedParagraph
                  id={`${workId}/${division.locator}`}
                  locale={locale === "en" ? "en" : "es"}
                  entry={selected.simplified ? getSimplifiedText(`${workId}/${division.locator}`) : undefined}
                  tone="reader"
                >
                  <p
                    className={`relative verse-mid -mx-3 -mt-2 mb-0 px-3 pt-2 font-body text-reader font-reader text-ink-2 ${mark && !stacked ? "md:indent-5.75" : ""}`}
                  >
                    <span
                      className={`mb-0.5 flex min-h-6 items-center gap-2 font-ui text-division font-normal text-ink-3 tabular-nums ${stacked ? "" : "md:contents"}`}
                    >
                      <button
                        type="button"
                        data-division-open={anchorOf(division.locator)}
                        data-locator={division.locator}
                        onClick={(event) => openFrom(division.ordinal, event.currentTarget, event.detail === 0)}
                        className={`cursor-pointer rounded-3 text-division text-ink-3 transition-colors duration-150 ease-standard hover:text-ink hover:underline ${stacked ? "" : hangingLocator}`}
                      >
                        {markerLabel(division.locator, selected.markers)}
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
                    {textSpan(division, highlights.segmentsFor(division.ordinal, division.text.length), {
                      "data-verse-text": division.ordinal,
                    })}
                  </p>
                </SimplifiedParagraph>
              </div>
              {second ? (
                <div
                  lang={second.view.lang}
                  data-second-division={division.ordinal}
                  className={
                    second.mode === "side"
                      ? "-mx-3 mb-1.5 px-3 py-2 font-body text-reader font-reader text-ink-2"
                      : "-mt-1 mb-1.5 ml-4.5 border-l border-rule-2 pl-3.5 font-body text-reader-second font-light text-ink-prose"
                  }
                >
                  {other ? (
                    <>
                      {second.mode === "side" && other.heading ? (
                        <p className="m-0 mb-1 font-ui text-ui-xs font-medium text-ink-3">{other.heading}</p>
                      ) : null}
                      {second.mode === "below" ? (
                        <span className="mr-2 font-ui text-label font-medium text-ink-3">
                          {second.view.abbreviation}
                        </span>
                      ) : null}
                      {textSpan(other, highlightsSecond.segmentsFor(division.ordinal, other.text.length), {
                        "data-second-text": division.ordinal,
                        "data-translation": second.view.key,
                      })}
                    </>
                  ) : null}
                </div>
              ) : null}
            </Fragment>
          );
        })}
      </div>
      {selected.foot}
      {second ? second.view.foot : null}
      <VersePanel
        open={verse !== null}
        reference={plainReference}
        citation={verse === null ? "" : citationOf(contextView, verse, verse)}
        verse={verse}
        text={panel.text}
        focusOnOpen={byKeyboard}
        link={() => `${location.origin}${location.pathname}#${verse === null ? "" : anchorOfOrdinal(verse)}`}
        withDetail={false}
        highlight={{
          text: panel.highlight,
          current: verse === null ? null : contextHighlights.chosenOfVerse(verse),
          canRemove: verse !== null && contextHighlights.hasHighlightOnVerse(verse),
          onPick: (color) => {
            const division =
              verse === null ? undefined : contextView.divisions.find((entry) => entry.ordinal === verse);
            if (verse !== null && division)
              contextHighlights.apply([{ verse, from: 0, to: division.text.length }], color);
          },
          onRemove: () => {
            if (verse !== null) contextHighlights.removeVerse(verse);
          },
        }}
        noteLabel={panel.notes.add}
        onNote={() => {
          if (verse !== null) {
            notes.openNew({
              scope: "unit",
              verse,
              verseTo: verse,
              from: null,
              to: null,
              quote: null,
              ...(inSecond ? { translationId: contextView.key } : {}),
            });
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
        heading={selected.workName}
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
        isMarked={(ranges) => highlightsOf(ranges).isMarked(ranges)}
        lastColor={highlights.lastColor}
        chosenIn={(ranges) => highlightsOf(ranges).chosenIn(ranges)}
        hasHighlightIn={(ranges) => highlightsOf(ranges).hasHighlightIn(ranges)}
        citation={selectionCitation}
        onHighlight={(ranges, color) => highlightsOf(ranges).apply(ranges, color)}
        onRemove={(ranges) => highlightsOf(ranges).remove(ranges)}
        onNote={noteOnWords}
        onAsk={(selection) => {
          const first = selection.ranges[0]?.verse ?? 0;
          const last = selection.ranges[selection.ranges.length - 1]?.verse ?? first;
          openAskDrawer({
            pill: {
              reference: referenceOf(viewOfKey(selection.ranges[0]?.translationId), first, last),
              text: selection.text,
              unit: { prefix: "", verse: first, anchor: anchorOfOrdinal(first) },
            },
            focus: fieldOnOpen(),
          });
        }}
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
