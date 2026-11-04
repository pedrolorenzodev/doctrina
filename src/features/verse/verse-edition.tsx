"use client";

import { createContext, useContext, type ReactNode } from "react";
import { numberingDiffers } from "@/content/bible/numbering-note";
import type { VerseEdition } from "@/content/get-verse-page";
import { chooseTranslation } from "@/lib/translation-choice";
import { useChosenTranslation } from "@/lib/use-chosen-translation";

type VerseEditionValue = {
  editions: VerseEdition[];
  selected: VerseEdition;
  reference: VerseEdition;
  differs: boolean;
  sameNumbering: VerseEdition[];
  choose: (id: string) => void;
};

const VerseEditionContext = createContext<VerseEditionValue | null>(null);

export function useVerseEdition(): VerseEditionValue {
  const value = useContext(VerseEditionContext);
  if (!value) throw new Error("useVerseEdition needs a VerseEditionProvider");
  return value;
}

type VerseEditionProviderProps = {
  editions: VerseEdition[];
  defaultId: string;
  book: string;
  children: ReactNode;
};

const numbered = (edition: VerseEdition) => ({
  id: edition.id,
  versification: edition.versification,
  verseCount: edition.verseCount,
});

export function VerseEditionProvider({ editions, defaultId, book, children }: VerseEditionProviderProps) {
  const chosen = useChosenTranslation(
    editions.map((edition) => edition.id),
    defaultId,
  );
  const reference = editions.find((edition) => edition.id === defaultId) ?? editions[0]!;
  const selected = editions.find((edition) => edition.id === chosen) ?? reference;
  const differs = numberingDiffers(numbered(selected), numbered(reference), book);
  const sameNumbering = editions.filter((edition) => !numberingDiffers(numbered(selected), numbered(edition), book));
  return (
    <VerseEditionContext value={{ editions, selected, reference, differs, sameNumbering, choose: chooseTranslation }}>
      {children}
    </VerseEditionContext>
  );
}
