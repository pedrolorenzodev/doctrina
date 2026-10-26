import type { ReactNode, RefObject } from "react";
import type { BibleVerse } from "@/content/model/bible";
import type { HighlightColor, Segment } from "@/lib/highlights";

type ChapterTextProps = {
  verses: BibleVerse[];
  lang: string;
  selected: number | null;
  segmentsOf: (verse: BibleVerse) => Segment[];
  rootRef: RefObject<HTMLDivElement | null>;
  noteMarkOf: (verse: number) => string | null;
  cards: ReactNode;
  cardsShown: boolean;
  onMark: (verse: number, opener: HTMLElement) => void;
  onSelect: (verse: number, byKeyboard: boolean, opener: HTMLElement) => void;
};

const toneClassName: Record<HighlightColor, string> = {
  yellow: "bg-hl-yellow",
  green: "bg-hl-green",
  sky: "bg-hl-sky",
  pink: "bg-hl-pink",
  orange: "bg-hl-orange",
};

export function ChapterText({
  verses,
  lang,
  selected,
  segmentsOf,
  rootRef,
  noteMarkOf,
  cards,
  cardsShown,
  onMark,
  onSelect,
}: ChapterTextProps) {
  return (
    <div ref={rootRef} lang={lang} className="relative mt-8.5 max-w-col">
      {verses.map((verse) => (
        <p
          key={verse.verse}
          id={`v-${verse.verse}`}
          className="relative -mx-3 mb-1.5 rounded-6 px-3 py-2 font-body text-reader font-light text-ink-2 transition-colors duration-1200 data-arrived:shadow-current data-marked:bg-mark data-marked:duration-200"
        >
          <span className="mb-1 flex items-baseline gap-2 font-ui text-division text-ink-3 tabular-nums md:contents">
            <span className="md:absolute md:top-3 md:-left-16.5 md:w-14 md:text-right">{verse.verse}</span>
            {noteMarkOf(verse.verse) ? (
              <button
                type="button"
                onClick={(event) => onMark(verse.verse, event.currentTarget)}
                className={`note-mark-in hit-44 cursor-pointer rounded-3 text-division text-ink-3 transition-colors duration-150 ease-standard hover:text-ink hover:underline md:absolute md:top-8 md:-left-16.5 md:w-14 md:text-right ${cardsShown ? "notes:hidden" : ""}`}
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
                  {verse.text.slice(segment.from, segment.to)}
                </mark>
              ) : (
                verse.text.slice(segment.from, segment.to)
              ),
            )}
          </span>
        </p>
      ))}
      {cards}
    </div>
  );
}
