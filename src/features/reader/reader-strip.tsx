"use client";

import type { ReactNode } from "react";
import { BookPicker, type PickerBook } from "@/features/reader/book-picker";
import { ChapterStep, type StepNeighbor } from "@/features/reader/chapter-step";
import { YourNotesButton } from "@/features/reader/your-notes-button";
import { ParallelMenu } from "@/features/reader/parallel-menu";
import { StripShell } from "@/features/reader/strip-shell";
import { TextOptions } from "@/features/reader/text-options";
import { useSecondTranslation } from "@/features/reader/use-second-translation";
import { chooseSecondTranslation } from "@/lib/second-translation";
import { TranslationPicker, type PickerOption } from "@/features/reader/translation-picker";
import { useChosenTranslation } from "@/features/reader/use-chosen-translation";
import { chooseTranslation } from "@/lib/translation-choice";

type ReaderStripProps = {
  textText: Parameters<typeof TextOptions>[0]["text"];
  parallelText: Omit<Parameters<typeof ParallelMenu>[0]["text"], "spanish" | "english">;
  pickerText: Parameters<typeof TranslationPicker>[0]["text"];
  options: PickerOption[];
  defaultId: string;
  yourNotes: { label: string; book: string; chapter: number };
  bookPicker: {
    text: Parameters<typeof BookPicker>[0]["text"];
    books: PickerBook[];
    title: string;
  };
  treeToggle: ReactNode;
  neighbors: { previous: StepNeighbor; next: StepNeighbor; previousLabel: string; nextLabel: string };
};

export function ReaderStrip({
  textText,
  parallelText,
  pickerText,
  options,
  defaultId,
  yourNotes,
  bookPicker,
  treeToggle,
  neighbors,
}: ReaderStripProps) {
  const value = useChosenTranslation(
    options.map((option) => option.id),
    defaultId,
  );
  const second = useSecondTranslation(
    options.map((option) => option.id),
    value,
  );
  const changeFirst = (id: string) => {
    if (second.id === id) chooseSecondTranslation({ mode: second.mode, id: value });
    chooseTranslation(id);
  };

  const step = (direction: "previous" | "next") => (
    <ChapterStep
      direction={direction}
      neighbor={neighbors[direction]}
      fallbackLabel={direction === "previous" ? neighbors.previousLabel : neighbors.nextLabel}
    />
  );

  return (
    <StripShell
      left={
        <>
          {treeToggle}
          <div className="inline-flex h-8.5 items-center rounded-8 border border-rule">
            {step("previous")}
            <span aria-hidden="true" className="h-4 w-px bg-rule" />
            {step("next")}
          </div>
        </>
      }
      center={
        <>
          <span className="sm:hidden">{step("previous")}</span>
          <div className="inline-flex h-8.5 items-center rounded-8 border border-rule-2 bg-card">
            <BookPicker
              text={bookPicker.text}
              books={bookPicker.books}
              currentBook={yourNotes.book}
              currentChapter={yourNotes.chapter}
              title={bookPicker.title}
            />
            <span aria-hidden="true" className="h-4 w-px bg-rule-2" />
            <TranslationPicker text={pickerText} options={options} value={value} onChange={changeFirst} />
          </div>
          <span className="sm:hidden">{step("next")}</span>
        </>
      }
      right={
        <>
          <ParallelMenu
            text={{ ...parallelText, spanish: pickerText.spanish, english: pickerText.english }}
            options={options}
            firstId={value}
            second={second}
          />
          <YourNotesButton
            label={yourNotes.label}
            book={yourNotes.book}
            chapter={yourNotes.chapter}
            className="mr-1.5 max-sm:hidden"
          />
          <TextOptions text={textText} locked={second.mode !== "off"} />
        </>
      }
    />
  );
}
