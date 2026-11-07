import { useSyncExternalStore } from "react";
import { prefersReducedMotion } from "@/lib/branch-motion";
import { setSimplifierVisibility } from "@/lib/simplifier-visibility";

export const simplifierPreferenceStorageKey = "doctrina-simplify";

export const simplifierRevealMs = 2000;

const listeners = new Set<() => void>();
let chosen: boolean | null = null;
let revealTimer = 0;

function readStored(): boolean {
  try {
    return localStorage.getItem(simplifierPreferenceStorageKey) === "on";
  } catch {
    return false;
  }
}

export const currentSimplifierPreference = (): boolean => chosen ?? readStored();

export function subscribeSimplifierPreference(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function syncSimplifierVisibility(): void {
  setSimplifierVisibility(currentSimplifierPreference() ? "ring-on-hover" : "hidden");
}

function revealRings() {
  if (prefersReducedMotion()) return;
  const root = document.documentElement;
  root.dataset.simplifierReveal = "";
  clearTimeout(revealTimer);
  revealTimer = window.setTimeout(() => {
    delete root.dataset.simplifierReveal;
  }, simplifierRevealMs);
}

export function chooseSimplifierPreference(on: boolean): void {
  chosen = on;
  try {
    localStorage.setItem(simplifierPreferenceStorageKey, on ? "on" : "off");
  } catch {
    chosen = on;
  }
  syncSimplifierVisibility();
  if (on) revealRings();
  else {
    clearTimeout(revealTimer);
    delete document.documentElement.dataset.simplifierReveal;
  }
  listeners.forEach((listener) => listener());
}

export const useSimplifierPreference = (): boolean =>
  useSyncExternalStore(subscribeSimplifierPreference, currentSimplifierPreference, () => false);
