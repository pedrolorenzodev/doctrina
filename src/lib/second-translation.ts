export const secondTranslationStorageKey = "doctrina-second-translation";

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

let cache: { raw: string | null; value: SecondChoice } | null = null;
let chosen: SecondChoice | null = null;

const listeners = new Set<() => void>();

const emit = () => listeners.forEach((listener) => listener());

const onStorage = (event: StorageEvent) => {
  if (event.key !== secondTranslationStorageKey) return;
  chosen = null;
  cache = null;
  emit();
};

export function subscribeSecondTranslation(listener: () => void): () => void {
  if (listeners.size === 0) addEventListener("storage", onStorage);
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) removeEventListener("storage", onStorage);
  };
}

export function getSecondChoice(): SecondChoice {
  if (chosen) return chosen;
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(secondTranslationStorageKey);
  } catch {
    raw = null;
  }
  if (cache?.raw !== raw) cache = { raw, value: parseSecondChoice(raw) };
  return cache.value;
}

export function chooseSecondTranslation(choice: SecondChoice): void {
  chosen = choice;
  try {
    localStorage.setItem(secondTranslationStorageKey, JSON.stringify(choice));
  } catch {
    chosen = choice;
  }
  emit();
}
