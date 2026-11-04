import { useSyncExternalStore } from "react";

export const fatherEditionStorageKey = "doctrina-father-edition";

let chosen: string | null = null;

const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function current(): string | null {
  if (chosen) return chosen;
  try {
    return localStorage.getItem(fatherEditionStorageKey);
  } catch {
    return null;
  }
}

export function chooseFatherEdition(id: string): void {
  chosen = id;
  try {
    localStorage.setItem(fatherEditionStorageKey, id);
  } catch {
    chosen = id;
  }
  listeners.forEach((listener) => listener());
}

export function useChosenFatherEdition(ids: string[], defaultId: string): string {
  const stored = useSyncExternalStore(subscribe, current, () => null);
  return stored && ids.includes(stored) ? stored : defaultId;
}
