"use client";

import { useState } from "react";
import { SidePanel } from "@/components/side-panel";
import { CopyButton } from "@/components/ui/copy-button";
import { SegmentedFilter } from "@/components/ui/segmented-filter";
import { readerPanelFrom } from "@/features/reader/verse-panel";
import type { HighlightColor } from "@/lib/highlights";

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
};

export type YourNotesItem = { id: string; verse: number; place: string; text: string; date: string; citation: string };
export type YourHighlightItem = YourNotesItem & { color: HighlightColor };

type YourNotesPanelProps = {
  open: boolean;
  text: YourNotesText;
  closeLabel: string;
  notes: YourNotesItem[];
  highlights: YourHighlightItem[];
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

export function YourNotesPanel({
  open,
  text,
  closeLabel,
  notes,
  highlights,
  onOpenNote,
  onOpenHighlight,
  onClose,
}: YourNotesPanelProps) {
  const [tab, setTab] = useState<"notes" | "highlights">("notes");
  const list = tab === "notes" ? notes : highlights;
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
      {list.length === 0 ? (
        <p className="m-0 text-ui-sm text-ink-3">{tab === "notes" ? text.emptyNotes : text.emptyHighlights}</p>
      ) : (
        <>
          <ul className="m-0 mb-4 list-none border-b border-rule p-0">
            {tab === "notes"
              ? notes.map((note) => (
                  <li key={note.id} className="border-t border-rule">
                    <button type="button" onClick={() => onOpenNote(note.id)} className={rowClassName}>
                      <span className="block text-note-line text-cite">{note.place}</span>
                      <span className="mt-0.5 line-clamp-3 block font-body text-note-row font-light text-ink-2">
                        {note.text}
                      </span>
                      <span className="mt-1 block text-note-meta text-ink-3 tabular-nums">{note.date}</span>
                    </button>
                  </li>
                ))
              : highlights.map((item) => (
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
                        {item.text}
                      </span>
                    </button>
                  </li>
                ))}
          </ul>
          <div className="-ml-2.5">
            <CopyButton
              label={tab === "notes" ? text.copyNotes : text.copyHighlights}
              done={text.copied}
              text={() => list.map((item) => item.citation).join("\n\n")}
            />
          </div>
        </>
      )}
      <p className="mt-4 mb-0 text-note-meta text-ink-3">{text.footer}</p>
    </SidePanel>
  );
}
