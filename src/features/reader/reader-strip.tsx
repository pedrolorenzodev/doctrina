"use client";

import { useEffect, useRef } from "react";
import { TextSizeControl } from "@/features/reader/text-size-control";
import { TranslationPicker, type PickerOption } from "@/features/reader/translation-picker";
import { useChosenTranslation } from "@/features/reader/use-chosen-translation";
import { chooseTranslation } from "@/lib/translation-choice";
import { useStuck } from "@/lib/use-stuck";

type ReaderStripProps = {
  sizeText: Parameters<typeof TextSizeControl>[0]["text"];
  pickerText: Parameters<typeof TranslationPicker>[0]["text"];
  options: PickerOption[];
  defaultId: string;
};

const arrivalClearance = 20;

export function ReaderStrip({ sizeText, pickerText, options, defaultId }: ReaderStripProps) {
  const bar = useRef<HTMLDivElement>(null);
  const stuck = useStuck(bar);
  const value = useChosenTranslation(
    options.map((option) => option.id),
    defaultId,
  );

  useEffect(() => {
    const element = bar.current;
    if (!element) return;
    const root = document.documentElement;
    const measure = () =>
      root.style.setProperty("--spacing-scroll-offset", `${element.offsetHeight + arrivalClearance}px`);
    measure();
    addEventListener("resize", measure);
    return () => {
      removeEventListener("resize", measure);
      root.style.removeProperty("--spacing-scroll-offset");
    };
  }, []);

  return (
    <div
      ref={bar}
      data-reader-strip=""
      data-stuck={stuck ? "" : undefined}
      className="texture-layer sticky top-top z-31 mb-5.5 -mr-4 -ml-4 flex items-center justify-end border-b border-transparent bg-bg px-4 py-1 transition-colors duration-150 ease-standard data-stuck:border-rule sm:mb-7.5 sm:-mr-8 sm:-ml-8 sm:px-8 sm:py-1.5 md:-mr-26 md:-ml-12 md:pr-26 md:pl-12 lg:-mr-28 lg:-ml-16 lg:pr-28 lg:pl-16"
    >
      <div className="max-sm:hidden">
        <TextSizeControl text={sizeText} />
      </div>
      <div className="ml-0.5 border-l border-rule pl-2 sm:ml-1.5 sm:pl-3.5 max-sm:border-l-0 max-sm:pl-0">
        <TranslationPicker text={pickerText} options={options} value={value} onChange={chooseTranslation} />
      </div>
    </div>
  );
}
