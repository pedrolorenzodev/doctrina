export const translationStorageKey = "doctrina-translation";

let chosen: string | null = null;

const listeners = new Set<() => void>();

export function subscribeTranslationChoice(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function currentTranslationChoice(): string | null {
  if (chosen) return chosen;
  try {
    return localStorage.getItem(translationStorageKey);
  } catch {
    return null;
  }
}

export function chooseTranslation(id: string): void {
  chosen = id;
  try {
    localStorage.setItem(translationStorageKey, id);
  } catch {
    chosen = id;
  }
  listeners.forEach((listener) => listener());
}
