import type { BibleVerse } from "@/content/model/bible";

type ChapterTextProps = {
  verses: BibleVerse[];
  lang: string;
};

export function ChapterText({ verses, lang }: ChapterTextProps) {
  return (
    <div lang={lang} className="mt-8.5 max-w-col">
      {verses.map((verse) => (
        <p
          key={verse.verse}
          id={`v-${verse.verse}`}
          className="relative -mx-3 mb-1.5 rounded-6 px-3 py-2 font-body text-reader font-light text-ink-2"
        >
          <span className="mb-1 block font-ui text-division text-ink-3 tabular-nums md:absolute md:top-3 md:mb-0 md:-left-16.5 md:w-14 md:text-right">
            {verse.verse}
          </span>
          {verse.text}
        </p>
      ))}
    </div>
  );
}
