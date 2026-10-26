import { useState, useSyncExternalStore } from "react";
import { getNotes, noNotes, setNotes, subscribeNotes } from "@/lib/note-store";
import { createNote, draftOf, notesAtVerse, removeNote, saveNoteText, type Note, type NoteDraft } from "@/lib/notes";

type Options = {
  translationId: string;
  book: string;
  chapter: number;
  removedMessage: string;
  showUndo: (message: string, restore: () => void) => void;
};

export type Editing = { draft: NoteDraft; noteId: string | null; session: number };

export function useChapterNotes({ translationId, book, chapter, removedMessage, showUndo }: Options) {
  const notes = useSyncExternalStore(subscribeNotes, getNotes, () => noNotes);
  const [editing, setEditing] = useState<Editing | null>(null);
  const [sessions, setSessions] = useState(0);
  const key = { book, chapter };

  const save = (text: string) => {
    if (!editing) return;
    const list = getNotes();
    const now = Date.now();
    if (editing.noteId === null) {
      if (text.trim() === "") return;
      const id = crypto.randomUUID();
      setNotes([...list, createNote(editing.draft, { ...key, translationId }, text, now, id)]);
      setEditing({ ...editing, noteId: id });
      return;
    }
    if (text.trim() === "") {
      setNotes(removeNote(list, editing.noteId));
      showUndo(removedMessage, () => setNotes(list));
      setEditing({ ...editing, noteId: null });
      return;
    }
    setNotes(saveNoteText(list, editing.noteId, text, now));
  };

  return {
    editing,
    at: (verse: number): Note[] => notesAtVerse(notes, key, verse),
    openNew: (draft: NoteDraft) => {
      setSessions((count) => count + 1);
      setEditing({ draft, noteId: null, session: sessions + 1 });
    },
    openExisting: (note: Note) => {
      const draft = draftOf(note);
      if (!draft) return;
      setSessions((count) => count + 1);
      setEditing({ draft, noteId: note.id, session: sessions + 1 });
    },
    close: () => setEditing(null),
    save,
    remove: (id: string) => {
      const list = getNotes();
      setNotes(removeNote(list, id));
      showUndo(removedMessage, () => setNotes(list));
      setEditing(null);
    },
    current: editing?.noteId ? (notes.find((note) => note.id === editing.noteId) ?? null) : null,
  };
}
