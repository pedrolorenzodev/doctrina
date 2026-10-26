"use client";

import { useEffect, useRef, useState } from "react";
import { MenuHostContext } from "@/components/hanging-menu";
import { BookPicker, type PickerBook } from "@/features/reader/book-picker";
import { ChapterStep, type StepNeighbor } from "@/features/reader/chapter-step";
import { YourNotesButton } from "@/features/reader/your-notes-button";
import { TextOptions } from "@/features/reader/text-options";
import { TranslationPicker, type PickerOption } from "@/features/reader/translation-picker";
import { useChosenTranslation } from "@/features/reader/use-chosen-translation";
import { chooseTranslation } from "@/lib/translation-choice";
import { useHideOnScroll } from "@/lib/use-hide-on-scroll";
import { useStuck } from "@/lib/use-stuck";

type ReaderStripProps = {
  textText: Parameters<typeof TextOptions>[0]["text"];
  pickerText: Parameters<typeof TranslationPicker>[0]["text"];
  options: PickerOption[];
  defaultId: string;
  yourNotes: { label: string; book: string; chapter: number };
  bookPicker: {
    text: Parameters<typeof BookPicker>[0]["text"];
    books: PickerBook[];
    title: string;
  };
  neighbors: { previous: StepNeighbor; next: StepNeighbor; previousLabel: string; nextLabel: string };
};

export function ReaderStrip({
  textText,
  pickerText,
  options,
  defaultId,
  yourNotes,
  bookPicker,
  neighbors,
}: ReaderStripProps) {
  const bar = useRef<HTMLDivElement | null>(null);
  const [host, setHost] = useState<HTMLElement | null>(null);
  const stuck = useStuck(bar);
  const hidden = useHideOnScroll(bar);
  const value = useChosenTranslation(
    options.map((option) => option.id),
    defaultId,
  );

  useEffect(() => {
    const element = bar.current;
    if (!element) return;
    const root = document.documentElement;
    const measure = () => {
      const clearance = parseFloat(getComputedStyle(root).getPropertyValue("--spacing-reader-arrival")) || 0;
      root.style.setProperty("--spacing-scroll-offset", `${element.offsetHeight + clearance}px`);
    };
    measure();
    addEventListener("resize", measure);
    return () => {
      removeEventListener("resize", measure);
      root.style.removeProperty("--spacing-scroll-offset");
    };
  }, []);

  const step = (direction: "previous" | "next") => (
    <ChapterStep
      direction={direction}
      neighbor={neighbors[direction]}
      fallbackLabel={direction === "previous" ? neighbors.previousLabel : neighbors.nextLabel}
    />
  );

  return (
    <div
      ref={(element) => {
        bar.current = element;
        setHost(element);
      }}
      data-reader-strip=""
      data-stuck={stuck ? "" : undefined}
      data-hidden={hidden ? "" : undefined}
      className="group/strip sticky top-top z-31 mb-5.5 -mr-4 -ml-4 transition-transform duration-220 ease-move data-hidden:-translate-y-full motion-reduce:transition-none sm:mb-7.5 sm:-mr-8 sm:-ml-8 md:-mr-26 md:-ml-12 lg:-mr-28 lg:-ml-16"
    >
      <MenuHostContext value={host}>
        <div className="texture-layer grid grid-cols-header items-center max-sm:grid-cols-phone border-b border-transparent bg-bg px-4 py-1 transition-colors duration-150 ease-standard group-data-stuck/strip:border-rule sm:px-8 sm:py-1.5 md:pr-26 md:pl-12 lg:pr-28 lg:pl-16">
          <div className="justify-self-start max-sm:hidden">
            <div className="inline-flex items-center rounded-8 border border-rule p-0.75">
              {step("previous")}
              <span aria-hidden="true" className="mx-0.5 h-4 w-px bg-rule" />
              {step("next")}
            </div>
          </div>
          <div className="flex items-center justify-self-center">
            <span className="sm:hidden">{step("previous")}</span>
            <div className="inline-flex items-center rounded-8 border border-rule-2 bg-card p-0.75">
              <BookPicker
                text={bookPicker.text}
                books={bookPicker.books}
                currentBook={yourNotes.book}
                currentChapter={yourNotes.chapter}
                title={bookPicker.title}
              />
              <span aria-hidden="true" className="mx-0.5 h-4 w-px bg-rule-2" />
              <TranslationPicker text={pickerText} options={options} value={value} onChange={chooseTranslation} />
            </div>
            <span className="sm:hidden">{step("next")}</span>
          </div>
          <div className="flex items-center justify-self-end">
            <YourNotesButton
              label={yourNotes.label}
              book={yourNotes.book}
              chapter={yourNotes.chapter}
              className="mr-1.5 max-sm:hidden"
            />
            <TextOptions text={textText} />
          </div>
        </div>
      </MenuHostContext>
    </div>
  );
}
