"use client";

import { useSyncExternalStore, type ReactNode } from "react";

const storageKey = "doctrina-link-legend-closed";

type LinkLegendProps = {
  label: string;
  intro: string;
  middle: string;
  outro: string;
  citation: ReactNode;
  page: ReactNode;
  closeLabel: string;
};

const listeners = new Set<() => void>();
let closedHere = false;

function readClosed(): boolean {
  if (closedHere) return true;
  try {
    return localStorage.getItem(storageKey) === "1";
  } catch {
    return false;
  }
}

function storeClosed() {
  closedHere = true;
  try {
    localStorage.setItem(storageKey, "1");
  } catch {
    closedHere = true;
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const openOnServer = () => false;

export function LinkLegend({ label, intro, middle, outro, citation, page, closeLabel }: LinkLegendProps) {
  const closed = useSyncExternalStore(subscribe, readClosed, openOnServer);

  function close() {
    storeClosed();
    document.getElementById("content")?.focus({ preventScroll: true });
  }

  return (
    <div
      role="note"
      aria-label={label}
      hidden={closed}
      className="title-part title-part-5 mt-7.5 flex items-start justify-between gap-5 rounded-8 border border-rule py-3.5 pr-3.5 pl-4.5 max-sm:flex-col max-sm:gap-3"
    >
      <p className="m-0 max-w-140 text-legend text-ink-2">
        {intro} {citation}
        {middle} {page}
        {outro}
      </p>
      <button
        type="button"
        onClick={close}
        className="min-h-9 flex-none cursor-pointer rounded-6 border border-rule-2 px-3.5 py-1.5 text-btn font-medium text-ink transition-colors duration-150 ease-standard hover:border-ink-3 hover:bg-hover pointer-coarse:min-h-11"
      >
        {closeLabel}
      </button>
    </div>
  );
}
