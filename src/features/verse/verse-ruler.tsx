"use client";

import type { ComponentType } from "react";
import { useVerseEdition } from "@/features/verse/verse-edition";
import { useMediaQuery } from "@/lib/use-viewport";

type RulerEntry = { id: string; label: string };

type VerseRulerProps = {
  Ruler: ComponentType<{ label: string; sections: RulerEntry[] }>;
  label: string;
  translation: RulerEntry;
  words: RulerEntry | null;
  compare: RulerEntry;
  uses: RulerEntry | null;
  cite: RulerEntry;
};

export function VerseRuler({ Ruler, label, translation, words, compare, uses, cite }: VerseRulerProps) {
  const { differs, sameNumbering } = useVerseEdition();
  const wide = useMediaQuery("(min-width: 1100px)", true);
  const sections = [
    translation,
    ...(words && !differs ? [words] : []),
    ...(sameNumbering.length > 1 ? [compare] : []),
    ...(!wide ? [...(uses && !differs ? [uses] : []), cite] : []),
  ];
  return <Ruler label={label} sections={sections} />;
}
