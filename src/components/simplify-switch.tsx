"use client";

import { useEffect } from "react";
import {
  chooseSimplifierPreference,
  syncSimplifierVisibility,
  useSimplifierPreference,
} from "@/lib/simplifier-preference";

type SimplifySwitchProps = {
  label: string;
  ariaLabel?: string;
  row?: boolean;
};

export function SimplifySwitch({ label, ariaLabel, row = false }: SimplifySwitchProps) {
  const on = useSimplifierPreference();
  useEffect(() => {
    syncSimplifierVisibility();
  }, []);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={ariaLabel}
      onClick={() => chooseSimplifierPreference(!on)}
      className={`group/switch inline-flex min-h-9 cursor-pointer items-center gap-2.5 text-left ${row ? "text-ui-sm text-ink-3" : "text-ui-base text-ink"} transition-colors duration-150 ease-standard pointer-coarse:min-h-11`}
    >
      <span
        aria-hidden="true"
        className="relative h-4.5 w-7.5 flex-none rounded-full border-ink-3 simplifier-ring-line transition-colors duration-150 ease-standard group-aria-checked/switch:border-ink group-aria-checked/switch:bg-ink"
      >
        <span className="absolute top-0.5 left-0.5 size-2.75 rounded-full bg-ink-3 transition duration-180 ease-smooth group-aria-checked/switch:translate-x-3 group-aria-checked/switch:bg-bg" />
      </span>
      <span aria-hidden={ariaLabel ? "true" : undefined}>{label}</span>
    </button>
  );
}
