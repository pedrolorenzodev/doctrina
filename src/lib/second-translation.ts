export const secondModes = ["off", "below", "side"] as const;

export type SecondMode = (typeof secondModes)[number];

export type SecondChoice = { mode: SecondMode; id: string | null };

export const noSecond: SecondChoice = { mode: "off", id: null };

export function parseSecondChoice(raw: string | null): SecondChoice {
  if (!raw) return noSecond;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return noSecond;
    const { mode, id } = parsed as { mode?: unknown; id?: unknown };
    const known = secondModes.find((candidate) => candidate === mode);
    if (!known || known === "off" || typeof id !== "string" || id.length === 0) return noSecond;
    return { mode: known, id };
  } catch {
    return noSecond;
  }
}

export function createSecondChoiceStore(storageKey: string) {
  let cache: { raw: string | null; value: SecondChoice } | null = null;
  let chosen: SecondChoice | null = null;

  const listeners = new Set<() => void>();

  const emit = () => listeners.forEach((listener) => listener());

  const onStorage = (event: StorageEvent) => {
    if (event.key !== storageKey) return;
    chosen = null;
    cache = null;
    emit();
  };

  const subscribe = (listener: () => void): (() => void) => {
    if (listeners.size === 0) addEventListener("storage", onStorage);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
      if (listeners.size === 0) removeEventListener("storage", onStorage);
    };
  };

  const get = (): SecondChoice => {
    if (chosen) return chosen;
    let raw: string | null = null;
    try {
      raw = localStorage.getItem(storageKey);
    } catch {
      raw = null;
    }
    if (cache?.raw !== raw) cache = { raw, value: parseSecondChoice(raw) };
    return cache.value;
  };

  const choose = (choice: SecondChoice): void => {
    chosen = choice;
    try {
      localStorage.setItem(storageKey, JSON.stringify(choice));
    } catch {
      chosen = choice;
    }
    emit();
  };

  return { storageKey, subscribe, get, choose };
}

export type SecondChoiceStore = ReturnType<typeof createSecondChoiceStore>;

export const bibleSecondStore = createSecondChoiceStore("doctrina-second-translation");

export const secondTranslationStorageKey = bibleSecondStore.storageKey;
export const subscribeSecondTranslation = bibleSecondStore.subscribe;
export const getSecondChoice = bibleSecondStore.get;
export const chooseSecondTranslation = bibleSecondStore.choose;
