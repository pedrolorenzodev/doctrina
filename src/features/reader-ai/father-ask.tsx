"use client";

import { useMemo } from "react";
import type { CitationWindowText } from "@/components/citation-window/types";
import { fatherScript } from "@/features/reader-ai/father-script";
import { ReaderAsk } from "@/features/reader-ai/reader-ask";
import type { AskText } from "@/features/reader-ai/text";
import type { Locale } from "@/lib/locale";

type FatherAskProps = {
  locale: Locale;
  text: AskText;
  workId: string;
  workName: string;
  editions: { id: string; name: string }[];
  defaultEdition: string;
  citationText: CitationWindowText;
};

export function FatherAsk({ locale, text, workId, workName, editions, defaultEdition, citationText }: FatherAskProps) {
  const script = useMemo(() => fatherScript(workId), [workId]);
  return (
    <ReaderAsk
      locale={locale}
      text={text}
      script={script}
      fatherEditions
      chapterTitle="{book}"
      books={[{ id: workId, title: workName }]}
      here={{ book: workId, chapter: 1 }}
      editions={editions}
      defaultEdition={defaultEdition}
      citationText={citationText}
    />
  );
}
