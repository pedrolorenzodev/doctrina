import { Fragment, type MouseEvent, type ReactNode, type RefObject } from "react";
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
  previewed: number | null;
  onPreview: (verse: number | null) => void;
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
  previewed,
  onPreview,
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
            className={`relative verse-mid -mx-3 mb-1.5 rounded-6 px-3 py-2 font-body text-reader font-reader text-ink-2 arrival-mark data-marked:bg-mark ${noteMarkOf(verse.verse) ? "md:indent-5.75" : ""}`}
          >
            <span className="mb-0.5 flex min-h-6 items-center gap-2 font-ui text-division font-normal text-ink-3 tabular-nums md:contents">
              <span className="md:absolute md:verse-number-top md:-left-13 md:w-14 md:indent-0 md:text-right">
                {verse.verse}
              </span>
              {noteMarkOf(verse.verse) ? (
                <>
                  <NotePen
                    previewed={previewed === verse.verse}
                    onClick={(event) => onMark(verse.verse, event.currentTarget)}
                    onPreview={(on) => onPreview(on ? verse.verse : null)}
                  />
                  <button
                    type="button"
                    onClick={(event) => onMark(verse.verse, event.currentTarget)}
                    className={`note-mark-in pointer-coarse:hit-44 cursor-pointer rounded-3 text-division text-ink-3 transition-colors duration-150 ease-standard hover:text-ink hover:underline -ml-0.75 md:mr-2 md:-translate-y-0.5 md:align-middle md:whitespace-nowrap ${cardsShown ? "notes:hidden" : ""}`}
                    data-cards-shown={cardsShown || undefined}
                    onPointerEnter={() => onPreview(verse.verse)}
                    onPointerLeave={() => onPreview(null)}
                    onFocus={() => onPreview(verse.verse)}
                    onBlur={() => onPreview(null)}
                  >
                    {noteMarkOf(verse.verse)}
                  </button>
                </>
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

type NotePenProps = {
  previewed: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onPreview: (on: boolean) => void;
};

function NotePen({ previewed, onClick, onPreview }: NotePenProps) {
  return (
    <button
      type="button"
      tabIndex={-1}
      aria-hidden="true"
      data-note-pen=""
      data-preview={previewed || undefined}
      onClick={onClick}
      onPointerEnter={() => onPreview(true)}
      onPointerLeave={() => onPreview(false)}
      className="note-mark-in pointer-coarse:hit-44 inline-grid size-3.75 shrink-0 cursor-pointer place-items-center rounded-4 text-ink-3 transition-colors duration-150 ease-standard hover:text-accent data-preview:text-accent md:absolute md:note-pen-top md:left-3 md:-translate-y-1/2"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
      </svg>
    </button>
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
