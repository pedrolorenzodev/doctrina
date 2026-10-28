export type NoteScope = "source" | "unit" | "words";

export type Note = {
  id: string;
  scope: NoteScope;
  translationId: string;
  book: string;
  chapter: number;
  verse: number | null;
  verseTo: number | null;
  from: number | null;
  to: number | null;
  quote: string | null;
  text: string;
  createdAt: number;
  updatedAt: number;
};

export type NoteDraft = {
  scope: "unit" | "words";
  verse: number;
  verseTo: number;
  from: number | null;
  to: number | null;
  quote: string | null;
  translationId?: string;
};

export type ChapterKey = { book: string; chapter: number };

const quoteLimit = 80;

export const sameChapter = (note: ChapterKey, key: ChapterKey) =>
  note.book === key.book && note.chapter === key.chapter;

export function notesAtVerse(list: Note[], key: ChapterKey, verse: number): Note[] {
  return list
    .filter((note) => sameChapter(note, key) && note.verse === verse)
    .sort((a, b) => a.createdAt - b.createdAt);
}

export function createNote(
  draft: NoteDraft,
  key: ChapterKey & { translationId: string },
  text: string,
  now: number,
  id: string,
): Note {
  return {
    id,
    scope: draft.scope,
    translationId: draft.translationId ?? key.translationId,
    book: key.book,
    chapter: key.chapter,
    verse: draft.verse,
    verseTo: draft.verseTo,
    from: draft.from,
    to: draft.to,
    quote: draft.quote,
    text,
    createdAt: now,
    updatedAt: now,
  };
}

export function saveNoteText(list: Note[], id: string, text: string, now: number): Note[] {
  return list.map((note) => (note.id === id ? { ...note, text, updatedAt: now } : note));
}

export function removeNote(list: Note[], id: string): Note[] {
  return list.filter((note) => note.id !== id);
}

export function draftOf(note: Note): NoteDraft | null {
  if (note.scope === "source" || note.verse === null) return null;
  return {
    scope: note.scope,
    verse: note.verse,
    verseTo: note.verseTo ?? note.verse,
    from: note.from,
    to: note.to,
    quote: note.quote,
  };
}

export function clippedQuote(quote: string): string {
  return quote.length > quoteLimit ? `${quote.slice(0, quoteLimit).trimEnd()}…` : quote;
}

export function isNote(value: unknown): value is Note {
  if (typeof value !== "object" || value === null) return false;
  const item = value as Record<string, unknown>;
  const integerOrNull = (field: unknown) => field === null || Number.isInteger(field);
  return (
    typeof item.id === "string" &&
    (item.scope === "source" || item.scope === "unit" || item.scope === "words") &&
    typeof item.translationId === "string" &&
    typeof item.book === "string" &&
    Number.isInteger(item.chapter) &&
    integerOrNull(item.verse) &&
    integerOrNull(item.verseTo) &&
    integerOrNull(item.from) &&
    integerOrNull(item.to) &&
    (item.quote === null || typeof item.quote === "string") &&
    typeof item.text === "string" &&
    typeof item.createdAt === "number" &&
    typeof item.updatedAt === "number" &&
    (item.scope === "source" || item.verse !== null)
  );
}
