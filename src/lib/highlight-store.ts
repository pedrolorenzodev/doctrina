import { highlightColors, isHighlight, type Highlight, type HighlightColor } from "@/lib/highlights";

export const highlightsStorageKey = "doctrina-highlights";

export const highlightColorStorageKey = "doctrina-highlight-color";

export const noHighlights: Highlight[] = [];

let cache: Highlight[] | null = null;

const listeners = new Set<() => void>();

function load(): Highlight[] {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(highlightsStorageKey) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter(isHighlight) : [];
  } catch {
    return [];
  }
}

const emit = () => listeners.forEach((listener) => listener());

const onStorage = (event: StorageEvent) => {
  if (event.key !== highlightsStorageKey) return;
  cache = null;
  emit();
};

export function subscribeHighlights(listener: () => void): () => void {
  if (listeners.size === 0) addEventListener("storage", onStorage);
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) removeEventListener("storage", onStorage);
  };
}

export function getHighlights(): Highlight[] {
  cache ??= load();
  return cache;
}

export function setHighlights(next: Highlight[]): void {
  cache = next;
  try {
    localStorage.setItem(highlightsStorageKey, JSON.stringify(next));
  } catch {
    cache = next;
  }
  emit();
}

export function lastHighlightColor(): HighlightColor {
  try {
    const stored = localStorage.getItem(highlightColorStorageKey);
    return highlightColors.find((color) => color === stored) ?? highlightColors[0];
  } catch {
    return highlightColors[0];
  }
}

export function rememberHighlightColor(color: HighlightColor): void {
  try {
    localStorage.setItem(highlightColorStorageKey, color);
  } catch {
    return;
  }
}
