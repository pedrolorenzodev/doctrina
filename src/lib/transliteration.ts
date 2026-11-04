export const transliterationStorageKey = "doctrina-transliteration";

export type TransliterationMode = "on" | "off";

let cache: TransliterationMode | null = null;

const listeners = new Set<() => void>();

const emit = () => listeners.forEach((listener) => listener());

function load(): TransliterationMode {
  try {
    return localStorage.getItem(transliterationStorageKey) === "off" ? "off" : "on";
  } catch {
    return "on";
  }
}

const onStorage = (event: StorageEvent) => {
  if (event.key !== transliterationStorageKey) return;
  cache = null;
  emit();
};

export function subscribeTransliteration(listener: () => void): () => void {
  if (listeners.size === 0) addEventListener("storage", onStorage);
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) removeEventListener("storage", onStorage);
  };
}

export function getTransliteration(): TransliterationMode {
  cache ??= load();
  return cache;
}

export const serverTransliteration = (): TransliterationMode => "on";

export function setTransliteration(mode: TransliterationMode): void {
  cache = mode;
  try {
    localStorage.setItem(transliterationStorageKey, mode);
  } catch {
    cache = mode;
  }
  emit();
}
