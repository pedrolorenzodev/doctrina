import { isNote, type Note } from "@/lib/notes";

export const notesStorageKey = "doctrina-notes";

export const noNotes: Note[] = [];

let cache: Note[] | null = null;

const listeners = new Set<() => void>();

function load(): Note[] {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(notesStorageKey) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter(isNote) : [];
  } catch {
    return [];
  }
}

const emit = () => listeners.forEach((listener) => listener());

const onStorage = (event: StorageEvent) => {
  if (event.key !== notesStorageKey) return;
  cache = null;
  emit();
};

export function subscribeNotes(listener: () => void): () => void {
  if (listeners.size === 0) addEventListener("storage", onStorage);
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) removeEventListener("storage", onStorage);
  };
}

export function getNotes(): Note[] {
  cache ??= load();
  return cache;
}

export function setNotes(next: Note[]): void {
  cache = next;
  try {
    localStorage.setItem(notesStorageKey, JSON.stringify(next));
  } catch {
    cache = next;
  }
  emit();
}
