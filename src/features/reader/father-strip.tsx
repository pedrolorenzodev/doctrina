"use client";

import { AskButton } from "@/components/ask-button";
import { ParallelMenu } from "@/features/reader/parallel-menu";
import { StripShell } from "@/features/reader/strip-shell";
import { TextOptions } from "@/features/reader/text-options";
import { TranslationPicker, type PickerOption } from "@/features/reader/translation-picker";
import { useSecondMode, useSecondTranslation } from "@/features/reader/use-second-translation";
import { YourNotesButton } from "@/features/reader/your-notes-button";
import { chooseFatherEdition, useChosenFatherEdition } from "@/lib/father-edition-choice";
import { fatherSecondStore } from "@/lib/father-second-translation";

type FatherStripProps = {
  text: Parameters<typeof TextOptions>[0]["text"];
  yourNotes: { label: string; book: string; chapter: number };
  ask: { label: string; keyHint: string };
  picker: { text: Parameters<typeof TranslationPicker>[0]["text"]; options: PickerOption[]; defaultId: string };
  parallelText: Omit<Parameters<typeof ParallelMenu>[0]["text"], "spanish" | "english">;
};

export function FatherStrip({ text, yourNotes, ask, picker, parallelText }: FatherStripProps) {
  const ids = picker.options.map((option) => option.id);
  const value = useChosenFatherEdition(ids, picker.defaultId);
  const second = useSecondTranslation(ids, value, fatherSecondStore);
  const storedMode = useSecondMode(fatherSecondStore);
  const shown = second.id === null ? { mode: storedMode, id: null } : second;
  const changeFirst = (id: string) => {
    if (second.id === id) fatherSecondStore.choose({ mode: second.mode, id: value });
    chooseFatherEdition(id);
  };
  return (
    <StripShell
      left={<AskButton label={ask.label} keyHint={ask.keyHint} />}
      center={
        <div className="inline-flex h-8.5 items-center rounded-8 border border-rule-2 bg-card">
          <TranslationPicker text={picker.text} options={picker.options} value={value} onChange={changeFirst} />
        </div>
      }
      right={
        <>
          <ParallelMenu
            text={{ ...parallelText, spanish: picker.text.spanish, english: picker.text.english }}
            options={picker.options}
            firstId={value}
            second={shown}
            unavailable={second.id === null && storedMode !== "off"}
            store={fatherSecondStore}
          />
          <YourNotesButton
            label={yourNotes.label}
            book={yourNotes.book}
            chapter={yourNotes.chapter}
            className="max-sm:hidden"
          />
          <TextOptions text={text} locked={false} sizeOnly />
        </>
      }
    />
  );
}
