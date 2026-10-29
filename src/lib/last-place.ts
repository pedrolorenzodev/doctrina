import { useMemo, useSyncExternalStore } from "react";

const storageKey = "doctrina-last-place";
const listeners = new Set<() => void>();
let fallback = "";

export type PlaceDetail = { edition: string; verse: number };

export type LastPlace = { href: string; title: string; at: number; detail?: PlaceDetail };

let describe: (() => PlaceDetail | null) | null = null;

export function describePlaceWith(read: () => PlaceDetail | null): () => void {
  describe = read;
  return () => {
    if (describe === read) describe = null;
  };
}

export function currentPlaceDetail(): PlaceDetail | null {
  return describe?.() ?? null;
}

export function placeWhen(at: number): string {
  const lang = document.documentElement.lang || "es";
  const startOfDay = (time: number) => new Date(time).setHours(0, 0, 0, 0);
  const days = Math.round((startOfDay(at) - startOfDay(Date.now())) / 86_400_000);
  if (days === 0 || days === -1) return new Intl.RelativeTimeFormat(lang, { numeric: "auto" }).format(days, "day");
  return new Intl.DateTimeFormat(lang, { day: "numeric", month: "short", year: "numeric" }).format(at);
}

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
        typeof item.at === "number" &&
        (item.detail === undefined ||
          (typeof item.detail === "object" &&
            item.detail !== null &&
            typeof item.detail.edition === "string" &&
            typeof item.detail.verse === "number")),
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
