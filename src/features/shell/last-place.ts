import { useMemo, useSyncExternalStore } from "react";

const storageKey = "doctrina-last-place";
const listeners = new Set<() => void>();
let fallback = "";

export type LastPlace = { href: string; title: string; at: number };

function read(): string {
  try {
    return localStorage.getItem(storageKey) ?? fallback;
  } catch {
    return fallback;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    removeEventListener("storage", listener);
  };
}

const kept = 2;
const pathOf = (href: string) => href.split("#")[0] ?? href;

function parse(raw: string): LastPlace[] {
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is LastPlace =>
        typeof item === "object" &&
        item !== null &&
        typeof item.href === "string" &&
        typeof item.title === "string" &&
        typeof item.at === "number",
    );
  } catch {
    return [];
  }
}

export function rememberPlace(place: LastPlace) {
  const others = parse(read()).filter((known) => pathOf(known.href) !== pathOf(place.href));
  const value = JSON.stringify([place, ...others].slice(0, kept));
  fallback = value;
  try {
    localStorage.setItem(storageKey, value);
  } catch {
    return;
  } finally {
    listeners.forEach((listener) => listener());
  }
}

export function usePlaceBefore(here: string): LastPlace | null {
  const raw = useSyncExternalStore(subscribe, read, () => "");
  return useMemo(() => parse(raw).find((place) => pathOf(place.href) !== here) ?? null, [raw, here]);
}
