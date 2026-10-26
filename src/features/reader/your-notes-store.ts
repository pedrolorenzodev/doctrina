import { useSyncExternalStore } from "react";

let open = false;
const listeners = new Set<() => void>();

export const isYourNotesOpen = () => open;

export function subscribeYourNotes(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setYourNotesOpen(next: boolean) {
  if (open === next) return;
  open = next;
  for (const listener of listeners) listener();
}

export function useYourNotesOpen() {
  return useSyncExternalStore(subscribeYourNotes, isYourNotesOpen, () => false);
}
