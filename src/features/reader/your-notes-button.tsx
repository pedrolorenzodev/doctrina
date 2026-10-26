"use client";

import { useSyncExternalStore } from "react";
import { getNotes, noNotes, subscribeNotes } from "@/lib/note-store";
import { sameChapter } from "@/lib/notes";
import { setYourNotesOpen } from "@/features/reader/your-notes-store";

type YourNotesButtonProps = {
  label: string;
  book: string;
  chapter: number;
  className?: string;
};

export function YourNotesButton({ label, book, chapter, className = "" }: YourNotesButtonProps) {
  const notes = useSyncExternalStore(subscribeNotes, getNotes, () => noNotes);
  const count = notes.filter((note) => sameChapter(note, { book, chapter })).length;
  return (
    <button
      type="button"
      data-your-notes
      onClick={() => setYourNotesOpen(true)}
      className={`inline-flex min-h-8.5 cursor-pointer items-center justify-center gap-1.75 rounded-6 px-2.5 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11 ${className}`}
    >
      {label}
      {count > 0 ? <span className="text-ui-2xs font-normal text-ink-3 tabular-nums">{count}</span> : null}
    </button>
  );
}
