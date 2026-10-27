import { Fragment, type ReactNode, type RefObject } from "react";
import type { BibleVerse, ChapterStructure } from "@/content/model/bible";
import type { HighlightColor, Segment } from "@/lib/highlights";
import { splitByRed } from "@/lib/text-pieces";

export type SecondReading = {
  mode: "below" | "side";
  abbreviation: string;
  name: string;
  firstName: string;
  lang: string;
  verses: Map<number, { text: string; red: [number, number][] | undefined }>;
};

type ChapterTextProps = {
  second: SecondReading | null;
  verses: BibleVerse[];
  structure: ChapterStructure | null;
  lang: string;
  selected: number | null;
  segmentsOf: (verse: BibleVerse) => Segment[];
  rootRef: RefObject<HTMLDivElement | null>;
  idPrefix: string;
  noteMarkOf: (verse: number) => string | null;
  cards: ReactNode;
  cardsShown: boolean;
  onMark: (verse: number, opener: HTMLElement) => void;
  onSelect: (verse: number, byKeyboard: boolean, opener: HTMLElement) => void;
};

export const toneClassName: Record<HighlightColor, string> = {
  yellow: "bg-hl-yellow",
  green: "bg-hl-green",
  sky: "bg-hl-sky",
  pink: "bg-hl-pink",
  orange: "bg-hl-orange",
};

export function ChapterText({
  second,
  verses,
  structure,
  lang,
  selected,
  segmentsOf,
  rootRef,
  idPrefix,
  noteMarkOf,
  cards,
  cardsShown,
  onMark,
  onSelect,
}: ChapterTextProps) {
  const paragraphStarts = new Set(structure?.paragraphs);
  const headingAt = new Map(structure?.sections.map((section) => [section.from, section.title]));
  return (
    <div
      ref={rootRef}
      lang={lang}
      data-chapter-text=""
      data-second={second ? second.mode : undefined}
      className={`relative mt-8.5 ${second?.mode === "side" ? "grid max-w-wide grid-cols-2 gap-x-10" : "max-w-reader"}`}
    >
      {second?.mode === "side" ? (
        <>
          <p className="mb-1 text-ui-xs text-ink-3">{second.firstName}</p>
          <p className="mb-1 text-ui-xs text-ink-3">{second.name}</p>
        </>
      ) : null}
      {verses.map((verse) => (
        <Fragment key={verse.verse}>
          {headingAt.has(verse.verse) ? (
            <h3
              data-section-heading=""
              className={`mt-8 mb-2.5 font-head text-section-heading font-reader-heading text-ink first:mt-0 ${second?.mode === "side" ? "col-span-2" : ""}`}
            >
              {headingAt.get(verse.verse)}
            </h3>
          ) : null}
          <p
            id={`${idPrefix}v-${verse.verse}`}
            data-paragraph-start={paragraphStarts.has(verse.verse) || undefined}
            className="relative -mx-3 mb-1.5 rounded-6 px-3 py-2 font-body text-reader font-reader text-ink-2 arrival-mark data-marked:bg-mark"
          >
            <span className="mb-1 flex items-baseline gap-2 font-ui text-division text-ink-3 tabular-nums md:contents">
              <span className="md:absolute md:top-3 md:-left-16.5 md:w-14 md:text-right">{verse.verse}</span>
              {noteMarkOf(verse.verse) ? (
                <button
                  type="button"
                  onClick={(event) => onMark(verse.verse, event.currentTarget)}
                  className={`note-mark-in hit-44 cursor-pointer rounded-3 text-division text-ink-3 transition-colors duration-150 ease-standard hover:text-ink hover:underline md:absolute md:top-8 md:-left-16.5 md:w-14 md:text-right ${cardsShown ? "notes:hidden" : ""}`}
                  data-cards-shown={cardsShown || undefined}
                >
                  {noteMarkOf(verse.verse)}
                </button>
              ) : null}
            </span>
            <span
              role="button"
              data-verse-text={verse.verse}
              tabIndex={0}
              aria-pressed={selected === verse.verse}
              onClick={(event) => onSelect(verse.verse, event.detail === 0, event.currentTarget)}
              onKeyDown={(event) => {
                if (event.key !== "Enter" && event.key !== " ") return;
                event.preventDefault();
                onSelect(verse.verse, true, event.currentTarget);
              }}
              className="cursor-pointer rounded-3 box-decoration-clone transition-colors duration-150 ease-standard hover:bg-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent aria-pressed:bg-accent-weak"
            >
              {segmentsOf(verse).map((segment) =>
                segment.color ? (
                  <mark
                    key={segment.from}
                    data-highlight={segment.color}
                    className={`rounded-2 text-inherit box-decoration-clone transition-colors duration-200 ease-standard ${toneClassName[segment.color]}`}
                  >
                    <Red text={verse.text} from={segment.from} to={segment.to} red={verse.red} />
                  </mark>
                ) : (
                  <Red key={segment.from} text={verse.text} from={segment.from} to={segment.to} red={verse.red} />
                ),
              )}
            </span>
          </p>
          {second ? (
            <div
              lang={second.lang}
              data-second-verse={verse.verse}
              className={
                second.mode === "side"
                  ? "-mx-3 mb-1.5 px-3 py-2 font-body text-reader font-reader text-ink-2"
                  : "-mt-1 mb-1.5 ml-4.5 border-l border-rule-2 pl-3.5 font-body text-reader-second font-light text-ink-prose"
              }
            >
              {second.verses.get(verse.verse) ? (
                <>
                  {second.mode === "below" ? (
                    <span className="mr-2 font-ui text-label font-medium text-ink-3">{second.abbreviation}</span>
                  ) : null}
                  <Red
                    text={second.verses.get(verse.verse)!.text}
                    from={0}
                    to={second.verses.get(verse.verse)!.text.length}
                    red={second.verses.get(verse.verse)!.red}
                  />
                </>
              ) : null}
            </div>
          ) : null}
        </Fragment>
      ))}
      {cards}
    </div>
  );
}

type RedProps = { text: string; from: number; to: number; red: [number, number][] | undefined };

function Red({ text, from, to, red }: RedProps) {
  return splitByRed(from, to, red).map((piece) =>
    piece.red ? (
      <span key={piece.from} data-jesus="" className="text-jesus">
        {text.slice(piece.from, piece.to)}
      </span>
    ) : (
      text.slice(piece.from, piece.to)
    ),
  );
}
