import { parseReadChapters, readChapterKey } from "@/lib/read-chapters";

export const readChaptersStorageKey = "doctrina-read-chapters";

export const noReadChapters: ReadonlySet<string> = new Set();

let cache: ReadonlySet<string> | null = null;

const listeners = new Set<() => void>();

function load(): ReadonlySet<string> {
  try {
    return new Set(parseReadChapters(JSON.parse(localStorage.getItem(readChaptersStorageKey) ?? "[]")));
  } catch {
    return new Set();
  }
}

const emit = () => listeners.forEach((listener) => listener());

const onStorage = (event: StorageEvent) => {
  if (event.key !== readChaptersStorageKey) return;
  cache = null;
  emit();
};

export function subscribeReadChapters(listener: () => void): () => void {
  if (listeners.size === 0) addEventListener("storage", onStorage);
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) removeEventListener("storage", onStorage);
  };
}

export function getReadChapters(): ReadonlySet<string> {
  cache ??= load();
  return cache;
}

export function markChapterRead(book: string, chapter: number): void {
  const key = readChapterKey(book, chapter);
  const current = getReadChapters();
  if (current.has(key)) return;
  cache = new Set([...current, key]);
  try {
    localStorage.setItem(readChaptersStorageKey, JSON.stringify([...cache]));
  } catch {
    cache = new Set([...current, key]);
  }
  emit();
}
