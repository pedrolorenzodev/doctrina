"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { SidePanel } from "@/components/side-panel";
import { CopyButton } from "@/components/ui/copy-button";
import { SegmentedFilter } from "@/components/ui/segmented-filter";
import { NoteEditor } from "@/features/reader/note-editor";
import { PanelPicker } from "@/features/reader/panel-picker";
import { readerPanelFrom } from "@/features/reader/verse-panel";
import { highlightColors, type HighlightColor } from "@/lib/highlights";
import { easeReveal, prefersReducedMotion } from "@/lib/branch-motion";
import { flipBlocks } from "@/lib/block-motion";
import { flipList } from "@/lib/list-motion";
import { downloadText, notesMarkdown } from "@/lib/notes-markdown";
import type { NoteScope } from "@/lib/notes";
import { fold, fragmentAround, searchWords } from "@/lib/search-match";

export type YourNotesText = {
  button: string;
  label: string;
  tabs: string;
  notes: string;
  highlights: string;
  emptyNotes: string;
  emptyHighlights: string;
  copyNotes: string;
  copyHighlights: string;
  copied: string;
  footer: string;
  search: string;
  show: string;
  showAll: string;
  order: string;
  orderText: string;
  orderRecent: string;
  statusNotes: string;
  statusHighlights: string;
  noMatch: string;
  noMatchFilters: string;
  clear: string;
  downloadMarkdown: string;
  searchHighlights: string;
  write: string;
  sourceHeading: string;
  inText: string;
  unplaced: string;
  unplacedNote: string;
  kindAll: string;
  kindSource: string;
  kindText: string;
  onlyColor: string;
  colors: string;
  back: string;
};

type EditorText = Parameters<typeof NoteEditor>[0]["text"];

export type YourNotesItem = {
  id: string;
  verse: number | null;
  place: string;
  text: string;
  date: string;
  citation: string;
  at: number;
  scope: NoteScope;
  anchor: string | null;
  lost: boolean;
};
export type YourHighlightItem = Omit<YourNotesItem, "scope" | "anchor" | "lost" | "verse"> & {
  verse: number;
  color: HighlightColor;
};

type YourNotesPanelProps = {
  open: boolean;
  text: YourNotesText;
  editorText: EditorText;
  closeLabel: string;
  notes: YourNotesItem[];
  highlights: YourHighlightItem[];
  colorNames: Record<HighlightColor, string>;
  heading: string;
  sourceNote: { text: string; updatedAt: number } | null;
  dateLabel: (time: number) => string;
  onSaveSource: (text: string) => void;
  onDeleteSource: () => void;
  onOpenNote: (id: string) => void;
  onOpenHighlight: (verse: number) => void;
  onClose: () => void;
};

const swatchClassName: Record<HighlightColor, string> = {
  yellow: "bg-hls-yellow",
  green: "bg-hls-green",
  sky: "bg-hls-sky",
  pink: "bg-hls-pink",
  orange: "bg-hls-orange",
};

const rowClassName =
  "flex min-h-11 w-full cursor-pointer flex-col gap-0.75 rounded-4 px-1.5 py-3 text-left transition-colors duration-150 ease-standard hover:bg-hover";

const listClassName = "m-0 mb-4 list-none border-b border-rule p-0";

const flatListShellClassName = "relative mb-4 flow-root border-b border-rule";

const flatListClassName = "m-0 list-none p-0";

const groupHeadingClassName = "mt-4.5 mb-1.5 text-label font-medium text-ink-3 first:mt-1";

const moreButtonClassName =
  "-ml-2.5 inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-6 py-2 pr-3 pl-2.5 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11";

const slashKey = "/";
const openQuote = "«";
const closeQuote = "»";

type Order = "text" | "recent";
type Kind = "all" | "source" | "text";

function Excerpt({ text, words }: { text: string; words: string[] }) {
  const fragment = fragmentAround(text, words);
  return (
    <>
      {fragment.cutStart ? "…" : null}
      {fragment.segments.map((segment, index) =>
        segment.marked ? (
          <mark key={index} className="rounded-3 bg-mark text-ink">
            {segment.text}
          </mark>
        ) : (
          segment.text
        ),
      )}
      {fragment.cutEnd ? "…" : null}
    </>
  );
}

const fileSlug = (heading: string) =>
  fold(heading)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const matches = (words: string[], ...fields: string[]) =>
  words.every((word) => fields.some((field) => fold(field).includes(word)));

const spreadFirst = (items: YourNotesItem[]) => [...items].sort((a, b) => (a.verse ?? -1) - (b.verse ?? -1));

export function YourNotesPanel({
  open,
  text,
  editorText,
  closeLabel,
  notes,
  highlights,
  colorNames,
  heading,
  sourceNote,
  dateLabel,
  onSaveSource,
  onDeleteSource,
  onOpenNote,
  onOpenHighlight,
  onClose,
}: YourNotesPanelProps) {
  const [tab, setTab] = useState<"notes" | "highlights">("notes");
  const [query, setQuery] = useState("");
  const [colors, setColors] = useState<HighlightColor[]>([]);
  const [kind, setKind] = useState<Kind>("all");
  const [order, setOrder] = useState<Order>("text");
  const [writing, setWriting] = useState(false);
  const field = useRef<HTMLInputElement>(null);
  const results = useRef<HTMLDivElement>(null);
  const flatList = useRef<HTMLUListElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const blockGhosts = useRef<HTMLDivElement>(null);
  const firstTab = useRef(true);

  const change = (mutate: () => void, rows = true) => {
    const run = () => flushSync(mutate);
    const withRows =
      rows && flatList.current && ghosts.current ? () => flipList(flatList.current!, ghosts.current!, run) : run;
    if (body.current && blockGhosts.current) flipBlocks(body.current, blockGhosts.current, withRows);
    else withRows();
  };

  useEffect(() => {
    if (firstTab.current) {
      firstTab.current = false;
      return;
    }
    if (prefersReducedMotion()) return;
    results.current?.querySelectorAll("li").forEach((item, index) => {
      item.animate(
        [
          { opacity: 0, transform: "translateY(8px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 420, delay: Math.min(index, 8) * 60, easing: easeReveal, fill: "backwards" },
      );
    });
  }, [tab]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target;
      if (target instanceof HTMLElement && target.closest("input, textarea, select, [contenteditable]")) return;
      event.preventDefault();
      field.current?.focus();
    };
    addEventListener("keydown", onKeyDown);
    return () => removeEventListener("keydown", onKeyDown);
  }, [open]);

  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (!open) setWriting(false);
  }

  const words = searchWords(query);
  const byOrder = <Item extends { at: number; verse: number | null }>(items: Item[]) =>
    order === "recent"
      ? [...items].sort((a, b) => b.at - a.at)
      : [...items].sort((a, b) => (a.verse ?? -1) - (b.verse ?? -1));
  const kindOk = (note: YourNotesItem) =>
    kind === "all" || (kind === "source" ? note.scope === "source" : note.scope !== "source");
  const shownNotes = byOrder(
    notes.filter((note) => kindOk(note) && matches(words, note.text, note.place, note.anchor ?? "")),
  );
  const shownHighlights = byOrder(
    highlights.filter(
      (item) => (colors.length === 0 || colors.includes(item.color)) && matches(words, item.text, item.place),
    ),
  );
  const list = tab === "notes" ? shownNotes : shownHighlights;
  const total = tab === "notes" ? notes.length : highlights.length;
  const filtering =
    words.length > 0 || (tab === "highlights" && colors.length > 0) || (tab === "notes" && kind !== "all");
  const flat = filtering || order === "recent";
  const clear = () =>
    change(() => {
      setQuery("");
      setColors([]);
      setKind("all");
    });

  const noteRow = (note: YourNotesItem) => (
    <li key={note.id} data-id={note.id} className="border-t border-rule">
      <button
        type="button"
        onClick={() => (note.scope === "source" ? change(() => setWriting(true)) : onOpenNote(note.id))}
        className={rowClassName}
      >
        <span className={`line-clamp-2 block text-note-line text-ink-3 ${note.lost ? "line-through" : ""}`}>
          <span className={note.lost ? "" : "text-cite"}>
            {note.place}
            {note.scope === "source" || !note.anchor ? "" : ":"}
          </span>
          {note.scope !== "source" && note.anchor ? ` «${note.anchor}»` : ""}
        </span>
        <span
          className={`block whitespace-pre-line font-body text-note-row font-light text-ink-2 ${filtering ? "line-clamp-4" : "line-clamp-3"}`}
        >
          <Excerpt text={note.text} words={words} />
        </span>
        <span className="block text-note-meta text-ink-3 tabular-nums">
          {note.lost ? `${text.unplacedNote} ` : ""}
          {note.date}
        </span>
      </button>
    </li>
  );

  const writeButton = (
    <button
      type="button"
      onClick={() => change(() => setWriting(true))}
      data-write-source=""
      className={moreButtonClassName}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M7 2v10M2 7h10" strokeLinecap="round" />
      </svg>
      {text.write}
    </button>
  );

  const notesBody = () => {
    if (total === 0)
      return (
        <div data-flip-block="write" className="flow-root">
          {writeButton}
        </div>
      );
    if (list.length === 0) return null;
    if (flat)
      return (
        <div data-flip-block="list" className={flatListShellClassName}>
          <ul ref={flatList} className={flatListClassName}>
            {shownNotes.map(noteRow)}
          </ul>
          <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
        </div>
      );
    const inline = spreadFirst(notes);
    const source = inline.find((note) => note.scope === "source");
    const placed = inline.filter((note) => note.scope !== "source" && !note.lost);
    const lost = inline.filter((note) => note.lost);
    return (
      <div data-flip-block="grouped" className="flow-root">
        {source ? (
          <>
            <p className={groupHeadingClassName}>{text.sourceHeading}</p>
            <ul className={listClassName}>{noteRow(source)}</ul>
          </>
        ) : (
          writeButton
        )}
        {placed.length > 0 ? (
          <>
            <p className={groupHeadingClassName}>{text.inText}</p>
            <ul className={listClassName}>{placed.map(noteRow)}</ul>
          </>
        ) : null}
        {lost.length > 0 ? (
          <>
            <p className={groupHeadingClassName}>{text.unplaced}</p>
            <ul className={listClassName}>{lost.map(noteRow)}</ul>
          </>
        ) : null}
      </div>
    );
  };

  const placeholder = tab === "notes" ? text.search : text.searchHighlights;

  return (
    <SidePanel
      open={open}
      label={text.label}
      title={text.label}
      closeLabel={closeLabel}
      onClose={onClose}
      from={readerPanelFrom}
      focusOnOpen
    >
      <div ref={body} className="relative">
        {writing ? (
          <div data-flip-block="editor" className="flow-root">
            <button
              type="button"
              onClick={() => change(() => setWriting(false))}
              className="-ml-2.5 mb-3 inline-flex min-h-8.5 cursor-pointer items-center gap-1 rounded-6 pr-2.5 pl-1.5 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M10 3.5 5.5 8 10 12.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {text.back}
            </button>
            <NoteEditor
              key={sourceNote ? "saved" : "new"}
              reference={`${heading}, ${text.sourceHeading.toLowerCase()}`}
              initial={sourceNote?.text ?? ""}
              savedAt={sourceNote?.updatedAt ?? null}
              dateLabel={dateLabel}
              text={editorText}
              onSave={onSaveSource}
              onClose={() => change(() => setWriting(false))}
              onDelete={() =>
                change(() => {
                  onDeleteSource();
                  setWriting(false);
                })
              }
            />
          </div>
        ) : (
          <>
            <div data-flip-block="tabs" className="flex">
              <SegmentedFilter
                label={text.tabs}
                value={tab}
                onChange={(id) => change(() => setTab(id === "highlights" ? "highlights" : "notes"), false)}
                options={[
                  { id: "notes", label: text.notes, count: notes.length },
                  { id: "highlights", label: text.highlights, count: highlights.length },
                ]}
              />
            </div>
            {total > 0 ? (
              <div className="mb-1.5">
                <label
                  data-flip-block="field"
                  className="group/field flex min-h-10 items-center gap-2 rounded-6 border border-rule bg-card px-2.5 text-ink-3"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    className="flex-none origin-center transition-icon-focus group-focus-within/field:scale-125 group-focus-within/field:text-ink"
                  >
                    <circle cx="7" cy="7" r="4.5" />
                    <path d="m10.5 10.5 3 3" strokeLinecap="round" />
                  </svg>
                  <input
                    ref={field}
                    type="text"
                    value={query}
                    onChange={(event) => change(() => setQuery(event.target.value))}
                    onKeyDown={(event) => {
                      if (event.key !== "Escape" || query === "") return;
                      event.stopPropagation();
                      change(() => setQuery(""));
                    }}
                    aria-label={placeholder}
                    aria-keyshortcuts="/"
                    placeholder={placeholder}
                    autoComplete="off"
                    spellCheck={false}
                    data-bare-focus=""
                    className="h-9.5 min-w-0 flex-1 border-0 bg-transparent text-picker-option text-ink outline-none placeholder:text-ink-3"
                  />
                  <kbd className="flex-none rounded-4 border border-rule px-1.5 py-px font-ui text-ui-2xs text-ink-3">
                    {slashKey}
                  </kbd>
                </label>
                <div data-flip-block="filters" className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                  {tab === "highlights" ? (
                    <span role="group" aria-label={text.colors} className="-ml-1.5 flex flex-wrap">
                      {highlightColors.map((id) => (
                        <button
                          key={id}
                          type="button"
                          aria-pressed={colors.includes(id)}
                          aria-label={text.onlyColor.replace("{color}", colorNames[id].toLowerCase())}
                          onClick={() =>
                            change(() =>
                              setColors((current) =>
                                current.includes(id) ? current.filter((one) => one !== id) : [...current, id],
                              ),
                            )
                          }
                          className="group/dot inline-grid size-8 cursor-pointer place-items-center rounded-6 transition-colors duration-150 ease-standard hover:bg-hover"
                        >
                          <span
                            className={`size-3 rounded-full shadow-swatch group-aria-pressed/dot:shadow-swatch-current ${swatchClassName[id]}`}
                          />
                        </button>
                      ))}
                    </span>
                  ) : (
                    <PanelPicker
                      label={text.show}
                      value={kind}
                      onChange={(id) =>
                        change(() => setKind(id === "source" ? "source" : id === "text" ? "text" : "all"))
                      }
                      options={[
                        { id: "all", label: text.kindAll },
                        { id: "source", label: text.kindSource },
                        { id: "text", label: text.kindText },
                      ]}
                    />
                  )}
                  <PanelPicker
                    label={text.order}
                    value={order}
                    onChange={(id) => change(() => setOrder(id === "recent" ? "recent" : "text"))}
                    options={[
                      { id: "text", label: text.orderText },
                      { id: "recent", label: text.orderRecent },
                    ]}
                  />
                </div>
                <p
                  data-flip-block="status"
                  role="status"
                  className="mt-1.5 mb-0 min-h-4.5 text-label text-ink-3 tabular-nums empty:hidden"
                >
                  {filtering
                    ? (tab === "notes" ? text.statusNotes : text.statusHighlights)
                        .replace("{n}", String(list.length))
                        .replace("{total}", String(total))
                    : ""}
                </p>
              </div>
            ) : null}
            <div ref={results}>
              {tab === "notes" && total === 0 ? (
                notesBody()
              ) : total === 0 ? (
                <p data-flip-block="empty" className="m-0 text-ui-sm text-ink-3">
                  {text.emptyHighlights}
                </p>
              ) : list.length === 0 ? (
                <div data-flip-block="empty" className="border-y border-rule py-3.5">
                  <p className="m-0 mb-1 text-ui-sm text-ink-2">
                    {words.length > 0 ? text.noMatch.replace("{query}", query.trim()) : text.noMatchFilters}
                  </p>
                  <button type="button" onClick={clear} className={moreButtonClassName}>
                    {text.clear}
                  </button>
                </div>
              ) : (
                <>
                  {tab === "notes" ? (
                    notesBody()
                  ) : (
                    <div data-flip-block="list" className={flatListShellClassName}>
                      <ul ref={flatList} className={flatListClassName}>
                        {shownHighlights.map((item) => (
                          <li key={item.id} data-id={item.id} className="border-t border-rule">
                            <button
                              type="button"
                              onClick={() => onOpenHighlight(item.verse)}
                              className={`${rowClassName} gap-0`}
                            >
                              <span className="line-clamp-3 block font-body text-note-text font-light text-ink-2">
                                <span
                                  aria-label={colorNames[item.color]}
                                  className={`mr-2 mb-px inline-block size-3 rounded-full align-baseline shadow-swatch ${swatchClassName[item.color]}`}
                                />
                                {openQuote}
                                <Excerpt text={item.text} words={words} />
                                {closeQuote}
                              </span>
                              <span className="mt-1 flex w-full justify-between gap-3 text-note-line text-cite">
                                {item.place}
                                <span className="date-mark flex-none text-ink-3 tabular-nums">{item.date}</span>
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div
                        ref={ghosts}
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 flip-ghosts"
                      />
                    </div>
                  )}
                  <div data-flip-block="copy" className="-ml-2.5">
                    <CopyButton
                      label={tab === "notes" ? text.copyNotes : text.copyHighlights}
                      done={text.copied}
                      text={() => (tab === "notes" ? notes : highlights).map((item) => item.citation).join("\n\n")}
                    />
                    {tab === "notes" ? (
                      <button
                        type="button"
                        onClick={() =>
                          downloadText(
                            `${fileSlug(heading)}-notas.md`,
                            notesMarkdown(`${text.label}, ${heading}`, notes),
                          )
                        }
                        className="inline-grid min-h-10 cursor-pointer place-items-center rounded-6 px-2.5 py-2 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11"
                      >
                        {text.downloadMarkdown}
                      </button>
                    ) : null}
                  </div>
                </>
              )}
            </div>
            <p data-flip-block="footer" className="mt-4 mb-0 text-note-meta text-ink-3">
              {text.footer}
            </p>
          </>
        )}
        <div ref={blockGhosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
      </div>
    </SidePanel>
  );
}
