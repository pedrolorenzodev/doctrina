import Link from "next/link";
import { Fragment } from "react";
import type { PassageBlock, PassageVerse } from "@/content/get-passages";
import { changedWords, highlightedWords, locate, words } from "@/features/passages/word-text";

type VerseBlocksProps = {
  blocks: PassageBlock[];
  editionId: string;
  changeFrom: string | null;
  flashKey: number;
  phrase: string | null;
  labelled: boolean;
  readLabel: string;
  className?: string;
  paragraphClassName?: string;
};

function Verse({
  verse,
  numbered,
  editionId,
  changeFrom,
  phrase,
  paragraphClassName,
}: {
  verse: PassageVerse;
  numbered: boolean;
  editionId: string;
  changeFrom: string | null;
  phrase: string | null;
  paragraphClassName: string;
}) {
  const raw = verse.text[editionId] ?? "";
  const lit = phrase ? highlightedWords(raw, locate(raw, phrase)) : new Set<number>();
  const changed = changeFrom ? changedWords(verse.text[changeFrom] ?? "", raw) : new Set<number>();
  return (
    <p className={`relative mt-1.5 first:mt-0 ${paragraphClassName}`}>
      {numbered ? (
        <span className="text-ui-2xs font-ui leading-none font-normal text-ink-3 tabular-nums verse-numeral">
          {verse.n}
        </span>
      ) : null}
      {words(raw).map((word, index) => (
        <Fragment key={index}>
          {index > 0 ? " " : null}
          <span
            className={`rounded-2 ${lit.has(index) ? "bg-mark transition-colors duration-200 ease-standard" : ""} ${lit.has(index) && lit.has(index + 1) ? "word-bridge" : ""} ${changed.has(index) ? "word-changed" : ""}`}
          >
            {word.text}
          </span>
        </Fragment>
      ))}
    </p>
  );
}

export function VerseBlocks({
  blocks,
  editionId,
  changeFrom,
  flashKey,
  phrase,
  labelled,
  readLabel,
  className = "",
  paragraphClassName = "",
}: VerseBlocksProps) {
  return (
    <div key={flashKey} className={className}>
      {blocks.map((block) => (
        <div key={block.ref} className="mt-7 first:mt-0">
          {labelled ? (
            <p className="mb-2.5 flex flex-wrap items-baseline gap-3 text-label font-medium text-ink-3">
              <span>{block.ref}</span>
              <Link
                href={block.readerHref}
                className="font-medium text-ink-3 underline decoration-rule-2 underline-offset-4 transition-colors duration-150 ease-standard hover:text-ink hover:decoration-current"
              >
                {readLabel}
              </Link>
            </p>
          ) : null}
          {block.verses.map((verse) => (
            <Verse
              key={verse.n}
              verse={verse}
              numbered={block.verses.length > 1}
              editionId={editionId}
              changeFrom={changeFrom}
              phrase={phrase}
              paragraphClassName={paragraphClassName}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
