import { useSyncExternalStore } from "react";

export type SimplifierVisibility = "ring-on-hover" | "hidden";

const listeners = new Set<() => void>();
let current: SimplifierVisibility = "ring-on-hover";

export const getSimplifierVisibility = () => current;

export function setSimplifierVisibility(next: SimplifierVisibility) {
  if (next === current) return;
  current = next;
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => void listeners.delete(listener);
}

export const useSimplifierVisibility = (): SimplifierVisibility =>
  useSyncExternalStore(subscribe, getSimplifierVisibility, () => "ring-on-hover");
