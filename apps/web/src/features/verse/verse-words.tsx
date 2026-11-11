"use client";

import { useState } from "react";
import { Section } from "@/components/section";
import { ActionLink } from "@/components/ui/action";
import type { WordView } from "@/content/get-chapter-word-view";
import type { VerseWords } from "@/content/get-verse-page";
import { wordHref } from "@/content/routes";
import { useVerseEdition } from "@/features/verse/verse-edition";
import type { Locale } from "@doctrina/core/locale";

type PanelWordsText = {
  strong: string;
  countNew: string;
  countOld: string;
  means: string;
  form: string;
  base: string;
  times: string;
  timesOne: string;
  inBook: string;
  inBookOne: string;
  open: string;
  english: string;
  source: string;
};

type VerseWordsProps = {
  locale: Locale;
  book: string;
  bookName: string;
  chapter: number;
  verse: number;
  words: VerseWords;
  text: PanelWordsText;
  title: string;
  subtitle: string;
};

const strongOf = (strong: string) =>
  strong
    .split(/ \+ |\//)
    .map((part) => part.replace(/^([GH])0+/, "$1").replace(/[A-Z]$/, ""))
    .join(" + ");

const firstShown = (words: WordView[]) => {
  for (const pattern of [/G4561/, /G5176/, /G5315/]) {
    const at = words.findIndex((word) => pattern.test(strongOf(word.strong)));
    if (at >= 0) return at;
  }
  return 0;
};

function Fact({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <>
      <dt className="m-0 border-t border-rule py-2.25 text-ui-xs text-ink-3">{term}</dt>
      <dd className="m-0 border-t border-rule py-2.25 font-body text-row text-ink">{children}</dd>
    </>
  );
}

function VerseWordCard({
  word,
  words,
  locale,
  book,
  bookName,
  chapter,
  verse,
  text,
}: Omit<VerseWordsProps, "title" | "subtitle"> & { word: WordView }) {
  const lexicon = words.lexicon[word.lexicon];
  const lang = words.language;
  const times = lexicon
    ? lexicon.times === 1
      ? text.timesOne
      : text.times.replace("{n}", String(lexicon.times))
    : null;
  const inBook = lexicon
    ? (lexicon.verses === 1 ? text.inBookOne : text.inBook.replace("{n}", String(lexicon.verses))).replace(
        "{book}",
        bookName,
      )
    : null;
  const countLine = [times, inBook].join(", ");
  const baseSuffix = lexicon ? ` (${lexicon.transliteration})` : "";
  return (
    <div>
      <p lang={lang} className="m-0 text-word-card-original text-ink">
        {word.g}
      </p>
      <p className="m-0 mt-0.5 mb-3.5 text-ui-sm text-ink-3">{word.t}</p>
      <dl className="m-0 verse-facts">
        <Fact term={text.strong}>{strongOf(word.strong)}</Fact>
        {times ? <Fact term={lang === "grc" ? text.countNew : text.countOld}>{countLine}</Fact> : null}
        <Fact term={text.means}>
          <span lang={word.english ? "en" : undefined}>{word.gloss}</span>
          {word.english ? <span className="ml-2.5 text-ui-xs text-ink-3">{text.english}</span> : null}
        </Fact>
        {word.parse ? <Fact term={text.form}>{word.parse}</Fact> : null}
        {lexicon ? (
          <Fact term={text.base}>
            <span lang={lang}>{lexicon.lemma}</span>
            {baseSuffix}
          </Fact>
        ) : null}
      </dl>
      {lexicon ? (
        <div className="mt-4">
          <ActionLink href={`${wordHref(locale, word.lexicon)}?from=${book}.${chapter}.${verse}`}>
            {text.open.split("{word}")[0]}
            <span lang={lang}>{lexicon.lemma}</span>
            {text.open.split("{word}")[1]}
          </ActionLink>
        </div>
      ) : null}
    </div>
  );
}

export function VerseWordsView(props: VerseWordsProps) {
  const { words, text, title, subtitle } = props;
  const { differs } = useVerseEdition();
  const [hovered, setHovered] = useState(() => firstShown(words.words));
  const [pinned, setPinned] = useState<number | null>(null);
  if (differs) return null;
  const lang = words.language;
  const shown = pinned ?? hovered;
  const preview = (index: number) => {
    if (pinned === null) setHovered(index);
  };
  const toggle = (index: number) => {
    if (pinned === index) {
      setPinned(null);
      setHovered(index);
    } else setPinned(index);
  };
  return (
    <Section id="words" title={title} subtitle={subtitle} wide>
      <div className="verse-words-grid">
        <ul dir={lang === "hbo" ? "rtl" : undefined} className="m-0 flex list-none flex-wrap gap-x-0.5 gap-y-1 p-0">
          {words.words.map((word, index) => {
            const isPinned = index === pinned;
            return (
              <li key={`${index}-${word.g}`}>
                <button
                  type="button"
                  aria-pressed={index === shown}
                  data-pinned={isPinned ? "" : undefined}
                  onClick={() => toggle(index)}
                  onFocus={() => preview(index)}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") preview(index);
                  }}
                  className={`flex min-h-11 cursor-pointer flex-col items-start gap-px rounded-6 border-0 px-2.25 py-1.75 text-left transition-selected ${isPinned ? "relative selected-ink" : "bg-transparent hover:bg-hover aria-pressed:selected-lift"}`}
                >
                  <span lang={lang} className={`text-verse-tile ${isPinned ? "text-bg" : "text-ink"}`}>
                    {word.g}
                  </span>
                  <span dir="ltr" className={`text-ui-xs ${isPinned ? "text-bg" : "text-ink-2"}`}>
                    <span lang={word.english ? "en" : undefined}>{word.gloss}</span>
                    {word.english ? (
                      <span className={`ml-1.5 text-ui-2xs ${isPinned ? "text-bg opacity-80" : "text-ink-3"}`}>
                        {text.english}
                      </span>
                    ) : null}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="mt-4.5 border-t border-rule pt-4 verse-card-sticky md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-6">
          <div className="grid">
            {words.words.map((word, index) => (
              <div
                key={`${index}-${word.g}`}
                inert={index !== shown}
                aria-hidden={index !== shown}
                className={`col-start-1 row-start-1 transition-opacity duration-160 ease-out ${index === shown ? "opacity-100" : "opacity-0"}`}
              >
                <VerseWordCard {...props} word={word} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="m-0 mt-3.5 text-ui-xs leading-normal text-ink-3">{text.source}</p>
    </Section>
  );
}
