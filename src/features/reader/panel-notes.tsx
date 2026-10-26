import type { Note } from "@/lib/notes";

type PanelNotesProps = {
  notes: Note[];
  dateLabel: (time: number) => string;
  onOpen: (note: Note) => void;
};

export function PanelNotes({ notes, dateLabel, onOpen }: PanelNotesProps) {
  if (notes.length === 0) return null;
  return (
    <ul className="m-0 mb-5 list-none border-b border-rule p-0">
      {notes.map((note) => (
        <li key={note.id} className="border-t border-rule">
          <button
            type="button"
            onClick={() => onOpen(note)}
            className="block min-h-11 w-full cursor-pointer rounded-4 px-1.5 py-3 text-left transition-colors duration-150 ease-standard hover:bg-hover"
          >
            <span className="line-clamp-3 block font-body text-note-row font-light text-ink-2">{note.text}</span>
            <span className="mt-1 block text-note-meta text-ink-3 tabular-nums">{dateLabel(note.updatedAt)}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
