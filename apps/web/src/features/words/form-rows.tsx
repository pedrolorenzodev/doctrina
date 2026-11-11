"use client";

import type { FormRow } from "@/content/get-word-page";
import { OriginalWord } from "@/features/words/original-word";
import { useWordFilters } from "@/features/words/word-filters";

type FormRowsProps = {
  forms: FormRow[];
  language: "grc" | "hbo";
  text: { viewMany: string; viewOne: string };
};

export function FormRows({ forms, language, text }: FormRowsProps) {
  const { setForm } = useWordFilters();
  const max = Math.max(1, ...forms.map((row) => row.n));
  return (
    <ul className="m-0 mt-6 max-w-205 list-none p-0">
      {forms.map((row) => (
        <li
          key={row.morph}
          className="word-form-row border-t border-rule py-3 first:border-t last:border-b last:border-rule"
        >
          <span className="text-word-form text-ink">
            <OriginalWord text={row.form} transliteration={row.transliteration} language={language} />
          </span>
          <span className="text-ui-base text-ink-2 max-[860px]:order-3 max-[860px]:col-span-full">{row.label}</span>
          <span className="flex items-center gap-2.5 text-ui-base font-medium text-ink tabular-nums max-[860px]:col-start-2 max-[860px]:row-start-1">
            <span
              aria-hidden="true"
              style={{ "--bar": `${Math.max(3, (row.n / max) * 72)}px` } as React.CSSProperties}
              className="h-1.5 w-(--bar) rounded-3 bg-ink-3 opacity-50"
            />
            <b className="min-w-4.5 text-right font-medium">{row.n}</b>
          </span>
          {row.verses === null ? (
            <span />
          ) : (
            <button
              type="button"
              onClick={() => setForm(row.morph, true)}
              className="-my-1.5 -mx-2 cursor-pointer justify-self-end rounded-6 border-0 bg-transparent px-2 py-1.5 text-btn font-medium whitespace-nowrap text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink max-[860px]:order-4 max-[860px]:col-span-full max-[860px]:justify-self-start pointer-coarse:min-h-11"
            >
              {row.verses === 1 ? text.viewOne : text.viewMany.replace("{n}", String(row.verses))}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
