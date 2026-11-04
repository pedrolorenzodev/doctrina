"use client";

import { useSyncExternalStore } from "react";
import {
  getTransliteration,
  serverTransliteration,
  setTransliteration,
  subscribeTransliteration,
} from "@/lib/transliteration";

export function TransliterationSwitch({ label }: { label: string }) {
  const mode = useSyncExternalStore(subscribeTransliteration, getTransliteration, serverTransliteration);
  const on = mode === "on";
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={() => setTransliteration(on ? "off" : "on")}
      className="group/switch -mr-2 inline-flex min-h-9 cursor-pointer items-center gap-2.25 rounded-6 py-1.5 pr-2 pl-2.5 text-ui-xs text-ink-3 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-pressed:text-ink-2"
    >
      <span>{label}</span>
      <span
        aria-hidden="true"
        className="relative h-3.75 w-6.5 rounded-8 border border-rule-2 transition-colors duration-150 ease-standard group-aria-pressed/switch:border-accent group-aria-pressed/switch:bg-accent-weak"
      >
        <span className="absolute top-0.5 left-0.5 size-2.25 rounded-full bg-ink-3 transition-all duration-200 ease-standard group-aria-pressed/switch:translate-x-2.75 group-aria-pressed/switch:bg-accent" />
      </span>
    </button>
  );
}
