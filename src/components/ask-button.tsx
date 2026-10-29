"use client";

import { useSyncExternalStore } from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { closedAskDrawer, getAskDrawer, subscribeAskDrawer, toggleAskDrawer } from "@/lib/ask-drawer";

type AskButtonProps = {
  label: string;
  keyHint: string;
  className?: string;
};

export function AskButton({ label, keyHint, className = "" }: AskButtonProps) {
  const open = useSyncExternalStore(
    subscribeAskDrawer,
    () => getAskDrawer().open,
    () => closedAskDrawer.open,
  );
  return (
    <Tooltip label={keyHint}>
      <button
        type="button"
        data-ask-button=""
        aria-pressed={open}
        aria-keyshortcuts="/"
        onClick={toggleAskDrawer}
        className={`inline-flex h-8.5 cursor-pointer items-center justify-center rounded-6 px-2.5 text-btn font-medium whitespace-nowrap text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-pressed:bg-accent-weak aria-pressed:text-ink pointer-coarse:h-11 ${className}`}
      >
        {label}
      </button>
    </Tooltip>
  );
}
