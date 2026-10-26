"use client";

import { useEffect, useRef, useState } from "react";
import { SidePanel } from "@/components/side-panel";
import { CopyButton } from "@/components/ui/copy-button";
import { FilterSelect } from "@/components/ui/filter-select";
import { SegmentedFilter } from "@/components/ui/segmented-filter";
import { readerPanelFrom } from "@/features/reader/verse-panel";
import { highlightColors, type HighlightColor } from "@/lib/highlights";
import { downloadText, highlightsMarkdown, notesMarkdown } from "@/lib/notes-markdown";
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
};

export type YourNotesItem = {
  id: string;
  verse: number;
  place: string;
  text: string;
  date: string;
  citation: string;
  at: number;
};
export type YourHighlightItem = YourNotesItem & { color: HighlightColor };

type YourNotesPanelProps = {
  open: boolean;
  text: YourNotesText;
  closeLabel: string;
  notes: YourNotesItem[];
  highlights: YourHighlightItem[];
  colorNames: Record<HighlightColor, string>;
  heading: string;
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
  "block min-h-11 w-full cursor-pointer rounded-4 px-1.5 py-3 text-left transition-colors duration-150 ease-standard hover:bg-hover";

type Order = "text" | "recent";

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

export function YourNotesPanel({
  open,
  text,
  closeLabel,
  notes,
  highlights,
  colorNames,
  heading,
  onOpenNote,
  onOpenHighlight,
  onClose,
}: YourNotesPanelProps) {
  const [tab, setTab] = useState<"notes" | "highlights">("notes");
  const [query, setQuery] = useState("");
  const [color, setColor] = useState("all");
  const [order, setOrder] = useState<Order>("text");
  const field = useRef<HTMLInputElement>(null);

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

  const words = searchWords(query);
  const sorted = <Item extends YourNotesItem>(items: Item[]) =>
    order === "recent" ? [...items].sort((a, b) => b.at - a.at) : items;
  const shownNotes = sorted(notes.filter((note) => matches(words, note.text, note.place)));
  const shownHighlights = sorted(
    highlights.filter((item) => (color === "all" || item.color === color) && matches(words, item.text, item.place)),
  );
  const list = tab === "notes" ? shownNotes : shownHighlights;
  const total = tab === "notes" ? notes.length : highlights.length;
  const filtering = words.length > 0 || (tab === "highlights" && color !== "all");
  const clear = () => {
    setQuery("");
    setColor("all");
  };

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
      <SegmentedFilter
        label={text.tabs}
        value={tab}
        onChange={(id) => setTab(id === "highlights" ? "highlights" : "notes")}
        options={[
          { id: "notes", label: text.notes, count: notes.length },
          { id: "highlights", label: text.highlights, count: highlights.length },
        ]}
      />
      {total > 0 ? (
        <div className="mb-3">
          <input
            ref={field}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key !== "Escape" || query === "") return;
              event.stopPropagation();
              setQuery("");
            }}
            aria-label={text.search}
            placeholder={text.search}
            autoComplete="off"
            spellCheck={false}
            className="block min-h-10 w-full rounded-6 border border-rule bg-transparent px-3 text-ui-sm text-ink outline-none placeholder:text-ink-3 focus-visible:border-accent pointer-coarse:min-h-11"
          />
          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
            {tab === "highlights" ? (
              <FilterSelect
                label={text.show}
                value={color}
                onChange={setColor}
                options={[
                  { id: "all", label: text.showAll },
                  ...highlightColors.map((id) => ({ id, label: colorNames[id] })),
                ]}
              />
            ) : null}
            <FilterSelect
              label={text.order}
              value={order}
              onChange={(id) => setOrder(id === "recent" ? "recent" : "text")}
              options={[
                { id: "text", label: text.orderText },
                { id: "recent", label: text.orderRecent },
              ]}
            />
          </div>
          <p role="status" className="mt-2 mb-0 min-h-4 text-note-meta text-ink-3 tabular-nums">
            {filtering
              ? (tab === "notes" ? text.statusNotes : text.statusHighlights)
                  .replace("{n}", String(list.length))
                  .replace("{total}", String(total))
              : ""}
          </p>
        </div>
      ) : null}
      {total === 0 ? (
        <p className="m-0 text-ui-sm text-ink-3">{tab === "notes" ? text.emptyNotes : text.emptyHighlights}</p>
      ) : list.length === 0 ? (
        <div>
          <p className="m-0 mb-2 text-ui-sm text-ink-3">
            {words.length > 0 ? text.noMatch.replace("{query}", query.trim()) : text.noMatchFilters}
          </p>
          <button
            type="button"
            onClick={clear}
            className="-ml-2.5 inline-flex min-h-8.5 cursor-pointer items-center rounded-6 px-2.5 text-btn leading-label font-medium text-ink transition-colors duration-150 ease-standard hover:bg-hover pointer-coarse:min-h-11"
          >
            {text.clear}
          </button>
        </div>
      ) : (
        <>
          <ul className="m-0 mb-4 list-none border-b border-rule p-0">
            {tab === "notes"
              ? shownNotes.map((note) => (
                  <li key={note.id} className="border-t border-rule">
                    <button type="button" onClick={() => onOpenNote(note.id)} className={rowClassName}>
                      <span className="block text-note-line text-cite">{note.place}</span>
                      <span className="mt-0.5 line-clamp-3 block font-body text-note-row font-light text-ink-2">
                        <Excerpt text={note.text} words={words} />
                      </span>
                      <span className="mt-1 block text-note-meta text-ink-3 tabular-nums">{note.date}</span>
                    </button>
                  </li>
                ))
              : shownHighlights.map((item) => (
                  <li key={item.id} className="border-t border-rule">
                    <button type="button" onClick={() => onOpenHighlight(item.verse)} className={rowClassName}>
                      <span className="flex items-center gap-2 text-note-line text-cite">
                        <span
                          aria-hidden="true"
                          className={`size-3 flex-none rounded-full ${swatchClassName[item.color]}`}
                        />
                        {item.place}
                      </span>
                      <span className="mt-0.5 line-clamp-3 block font-body text-note-text font-light text-ink-2">
                        <Excerpt text={item.text} words={words} />
                      </span>
                    </button>
                  </li>
                ))}
          </ul>
          <div className="-ml-2.5">
            <CopyButton
              label={tab === "notes" ? text.copyNotes : text.copyHighlights}
              done={text.copied}
              text={() => (tab === "notes" ? notes : highlights).map((item) => item.citation).join("\n\n")}
            />
            <button
              type="button"
              onClick={() =>
                tab === "notes"
                  ? downloadText(`${fileSlug(heading)}-notas.md`, notesMarkdown(`${text.label}, ${heading}`, notes))
                  : downloadText(
                      `${fileSlug(heading)}-subrayados.md`,
                      highlightsMarkdown(`${text.highlights}, ${heading}`, highlights),
                    )
              }
              className="inline-grid min-h-10 cursor-pointer place-items-center rounded-6 px-2.5 py-2 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11"
            >
              {text.downloadMarkdown}
            </button>
          </div>
        </>
      )}
      <p className="mt-4 mb-0 text-note-meta text-ink-3">{text.footer}</p>
    </SidePanel>
  );
}
