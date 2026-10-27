"use client";

import type { ReactNode } from "react";
import { StripShell } from "@/features/reader/strip-shell";
import { TextOptions } from "@/features/reader/text-options";
import { YourNotesButton } from "@/features/reader/your-notes-button";

type FatherStripProps = {
  text: Parameters<typeof TextOptions>[0]["text"];
  treeToggle: ReactNode;
  yourNotes: { label: string; book: string; chapter: number };
};

export function FatherStrip({ text, treeToggle, yourNotes }: FatherStripProps) {
  return (
    <StripShell
      left={treeToggle}
      center={null}
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
