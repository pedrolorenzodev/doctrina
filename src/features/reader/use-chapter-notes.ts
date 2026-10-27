import { useState, useSyncExternalStore } from "react";
import { getNotes, noNotes, setNotes, subscribeNotes } from "@/lib/note-store";
import {
  createNote,
  draftOf,
  notesAtVerse,
  removeNote,
  sameChapter,
  saveNoteText,
  type Note,
  type NoteDraft,
} from "@/lib/notes";

type Options = {
  translationId: string;
  book: string;
  chapter: number;
  removedMessage: string;
  showUndo: (message: string, restore: () => void) => void;
};

const currentTime = () => Date.now();

export type Editing = { draft: NoteDraft; noteId: string | null; session: number };

export function useChapterNotes({ translationId, book, chapter, removedMessage, showUndo }: Options) {
  const notes = useSyncExternalStore(subscribeNotes, getNotes, () => noNotes);
  const [editing, setEditing] = useState<Editing | null>(null);
  const [sessions, setSessions] = useState(0);
  const key = { book, chapter };

  const save = (text: string) => {
    if (!editing) return;
    const list = getNotes();
    const now = currentTime();
    if (editing.noteId === null) {
      if (text.trim() === "") return;
      const id = crypto.randomUUID();
      setNotes([...list, createNote(editing.draft, { ...key, translationId }, text, now, id)]);
      setEditing((current) => (current?.session === editing.session ? { ...current, noteId: id } : current));
      return;
    }
    if (text.trim() === "") {
      setNotes(removeNote(list, editing.noteId));
      showUndo(removedMessage, () => setNotes(list));
      setEditing((current) => (current?.session === editing.session ? { ...current, noteId: null } : current));
      return;
    }
    setNotes(saveNoteText(list, editing.noteId, text, now));
  };

  const ofChapter = notes
    .filter((note) => sameChapter(note, key))
    .sort((a, b) => (a.verse ?? -1) - (b.verse ?? -1) || a.createdAt - b.createdAt);
  const source = ofChapter.find((note) => note.scope === "source") ?? null;

  const saveSource = (text: string) => {
    const list = getNotes();
    const now = currentTime();
    const existing = list.find((note) => sameChapter(note, key) && note.scope === "source");
    if (!existing) {
      if (text.trim() === "") return;
      const created: Note = {
        id: crypto.randomUUID(),
        scope: "source",
        translationId,
        book,
        chapter,
        verse: null,
        verseTo: null,
        from: null,
        to: null,
        quote: null,
        text,
        createdAt: now,
        updatedAt: now,
      };
      setNotes([...list, created]);
      return;
    }
    if (text.trim() === "") {
      setNotes(removeNote(list, existing.id));
      showUndo(removedMessage, () => setNotes(list));
      return;
    }
    setNotes(saveNoteText(list, existing.id, text, now));
  };

  return {
    ofChapter,
    source,
    saveSource,
    removeSource: () => {
      const list = getNotes();
      const existing = list.find((note) => sameChapter(note, key) && note.scope === "source");
      if (!existing) return;
      setNotes(removeNote(list, existing.id));
      showUndo(removedMessage, () => setNotes(list));
    },
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
