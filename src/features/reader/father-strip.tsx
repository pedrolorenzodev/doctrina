"use client";

import { AskButton } from "@/components/ask-button";
import { StripShell } from "@/features/reader/strip-shell";
import { TextOptions } from "@/features/reader/text-options";
import { TranslationPicker, type PickerOption } from "@/features/reader/translation-picker";
import { YourNotesButton } from "@/features/reader/your-notes-button";
import { chooseFatherEdition, useChosenFatherEdition } from "@/lib/father-edition-choice";

type FatherStripProps = {
  text: Parameters<typeof TextOptions>[0]["text"];
  yourNotes: { label: string; book: string; chapter: number };
  ask: { label: string; keyHint: string };
  picker: { text: Parameters<typeof TranslationPicker>[0]["text"]; options: PickerOption[]; defaultId: string };
};

export function FatherStrip({ text, yourNotes, ask, picker }: FatherStripProps) {
  const value = useChosenFatherEdition(
    picker.options.map((option) => option.id),
    picker.defaultId,
  );
  return (
    <StripShell
      left={<AskButton label={ask.label} keyHint={ask.keyHint} />}
      center={
        <div className="inline-flex h-8.5 items-center rounded-8 border border-rule-2 bg-card">
          <TranslationPicker text={picker.text} options={picker.options} value={value} onChange={chooseFatherEdition} />
        </div>
      }
      right={
        <>
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
