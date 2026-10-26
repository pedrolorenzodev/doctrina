"use client";

import { useSyncExternalStore } from "react";
import { useSearch } from "@/components/search-provider";

type SearchTriggerProps = {
  label: string;
  placeholder: string;
};

const isApple = () => /Mac|iPhone|iPad/.test(navigator.platform);

export function SearchTrigger({ label, placeholder }: SearchTriggerProps) {
  const { open, show } = useSearch();
  const apple = useSyncExternalStore(
    () => () => undefined,
    isApple,
    () => true,
  );
  return (
    <button
      type="button"
      aria-label={label}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-keyshortcuts="Control+K Meta+K"
      onClick={(event) => show(event.currentTarget)}
      className="search-width ml-6 flex h-9 cursor-pointer items-center gap-2.5 rounded-6 border border-rule bg-card pr-2.5 pl-3 text-btn text-ink-3 transition-colors duration-150 ease-standard hover:border-rule-2 hover:bg-hover max-sm:ml-auto max-sm:w-10 max-sm:justify-center max-sm:border-transparent max-sm:bg-transparent max-sm:p-0 pointer-coarse:min-h-11 max-sm:pointer-coarse:min-w-11"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="7" cy="7" r="5" />
        <path d="m11 11 3.5 3.5" />
      </svg>
      <span className="min-w-0 flex-1 truncate text-left max-sm:hidden">{placeholder}</span>
      <kbd className="rounded-4 border border-rule px-1.5 py-px font-ui text-micro-lg text-ink-3 max-sm:hidden">
        {apple ? "⌘K" : "Ctrl K"}
      </kbd>
    </button>
  );
}
