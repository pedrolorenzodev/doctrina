"use client";

import { ChapterFoot } from "@/features/reader/chapter-foot";
import { ChapterText } from "@/features/reader/chapter-text";
import { useChosenTranslation } from "@/features/reader/use-chosen-translation";
import { numberingDiffers } from "@/content/bible/numbering-note";
import type { ReaderTranslationView } from "@/content/get-reader-chapter";

type ReaderBodyProps = {
  views: ReaderTranslationView[];
  licences: Record<string, string | null>;
  defaultId: string;
  bookId: string;
  deuteroNotice: string | null;
  numberingNote: string;
  footTitle: string;
};

const noteClassName = "mt-5.5 mb-0 max-w-140 text-reader-note text-ink-3";

export function ReaderBody({
  views,
  licences,
  defaultId,
  bookId,
  deuteroNotice,
  numberingNote,
  footTitle,
}: ReaderBodyProps) {
  const chosen = useChosenTranslation(
    views.map((view) => view.id),
    defaultId,
  );
  const selected = views.find((view) => view.id === chosen) ?? views[0]!;
  const reference = views.find((view) => view.id === defaultId) ?? selected;
  const asNumbered = (view: ReaderTranslationView) => ({
    id: view.id,
    versification: view.versification,
    verseCount: view.verses.length,
  });
  const differs = numberingDiffers(asNumbered(selected), asNumbered(reference), bookId);
  return (
    <>
      <p className="title-part title-part-2 mt-2.5 mb-0 text-reader-note text-ink-3">{selected.name}</p>
      {deuteroNotice ? <p className={`title-part title-part-3 ${noteClassName}`}>{deuteroNotice}</p> : null}
      {differs ? (
        <p role="note" className={noteClassName}>
          {numberingNote
            .replace("{abbreviation}", selected.abbreviation)
            .replace("{reference}", reference.abbreviation)}
        </p>
      ) : null}
      <ChapterText verses={selected.verses} lang={selected.language} />
      <ChapterFoot title={footTitle} edition={selected.name} licence={licences[selected.id] ?? null} />
    </>
  );
}
