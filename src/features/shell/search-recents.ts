import { useMemo, useSyncExternalStore } from "react";

const storageKey = "doctrina-search-recents";
const limit = 4;
const listeners = new Set<() => void>();
let fallback = "";

function read(): string {
  try {
    return localStorage.getItem(storageKey) ?? fallback;
  } catch {
    return fallback;
  }
}

function store(value: string): boolean {
  try {
    localStorage.setItem(storageKey, value);
    return true;
  } catch {
    return false;
  }
}

function write(value: string) {
  fallback = value;
  store(value);
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    removeEventListener("storage", listener);
  };
}

export function useRecentIds(): string[] {
  const raw = useSyncExternalStore(subscribe, read, () => "");
  return useMemo(() => (raw ? raw.split("\n") : []), [raw]);
}

export function rememberResult(id: string) {
  const kept = read()
    .split("\n")
    .filter((known) => known !== "" && known !== id);
  write([id, ...kept].slice(0, limit).join("\n"));
}
