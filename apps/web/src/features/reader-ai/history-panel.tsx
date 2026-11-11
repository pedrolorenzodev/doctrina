"use client";

import { focusRingClassName, motionClassName, motionStyle } from "@/features/reader-ai/motion";

type HistoryPanelProps = {
  open: boolean;
  label: string;
  rows: { key: string; question: string; date: string; onPick: () => void }[];
};

export function HistoryPanel({ open, label, rows }: HistoryPanelProps) {
  return (
    <div
      data-ask-history=""
      data-open={open || undefined}
      inert={!open}
      style={motionStyle(["opacity", 200, "standard"])}
      className={`texture-layer pointer-events-none absolute inset-x-0 top-reader-strip bottom-0 z-14 overflow-y-auto bg-bg px-5.5 py-4.5 opacity-0 scrollbar-rule data-open:pointer-events-auto data-open:opacity-100 group-data-[layout=sheet]/drawer:top-14.25 ${motionClassName}`}
    >
      <p className="mb-2 text-label leading-label font-medium text-ink-3">{label}</p>
      <ul className="m-0 list-none p-0">
        {rows.map((row) => (
          <li key={row.key}>
            <button
              type="button"
              data-bare-focus=""
              onClick={row.onPick}
              className={`flex min-h-11 w-full cursor-pointer items-baseline justify-between gap-3 border-b border-rule py-2.25 pr-2 pl-2.5 text-left text-go leading-(--ask-leading-row) text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink ${focusRingClassName}`}
            >
              <span className="min-w-0">{row.question}</span>
              <span className="flex-none text-label leading-(--ask-leading-ui) whitespace-nowrap text-ink-3 tabular-nums before:relative before:top-px before:mr-2.25 before:inline-block before:h-3 before:w-px before:bg-rule-2">
                {row.date}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
