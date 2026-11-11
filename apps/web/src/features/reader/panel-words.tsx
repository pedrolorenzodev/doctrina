"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ActionLink } from "@/components/ui/action";
import { Chevron } from "@/components/ui/chevron";
import type { ChapterWordView, WordView } from "@/content/get-chapter-word-view";
import { wordHref } from "@/content/routes";
import { loadChapterWords, loadedChapterWords } from "@/features/reader/chapter-words";
import { foldCard } from "@/lib/card-fold";
import type { Locale } from "@doctrina/core/locale";
import { getTransliteration, serverTransliteration, subscribeTransliteration } from "@/lib/transliteration";

export type PanelWordsText = {
  list: string;
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

type PanelWordsProps = {
  locale: Locale;
  book: string;
  bookName: string;
  chapter: number;
  verse: number;
  text: PanelWordsText;
};

const strongOf = (strong: string) =>
  strong
    .split(/ \+ |\//)
    .map((part) => part.replace(/^([GH])0+/, "$1").replace(/[A-Z]$/, ""))
    .join(" + ");

function WordCard({
  word,
  data,
  bookName,
  text,
  locale,
  book,
  chapter,
  verse,
}: {
  word: WordView;
  data: ChapterWordView;
  bookName: string;
  text: PanelWordsText;
  locale: Locale;
  book: string;
  chapter: number;
  verse: number;
}) {
  const lexicon = data.lexicon[word.lexicon];
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
  const lang = data.language === "grc" ? "grc" : "hbo";
  const countLine = `${times}, ${inBook}`;
  const baseSuffix = ` (${lexicon?.transliteration})`;
  return (
    <div className="px-1.5 pt-1 pb-4.5">
      <p lang={lang} className="m-0 text-word-card-original text-ink">
        {word.g}
      </p>
      <p className="m-0 mt-0.5 mb-3.5 text-ui-sm text-ink-3">{word.t}</p>
      <dl className="word-facts m-0">
        <Fact term={text.strong}>{strongOf(word.strong)}</Fact>
        {times ? <Fact term={data.language === "grc" ? text.countNew : text.countOld}>{countLine}</Fact> : null}
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

function Fact({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <>
      <dt className="m-0 border-t border-rule py-2.25 text-ui-xs text-ink-3">{term}</dt>
      <dd className="m-0 border-t border-rule py-2.25 font-body text-row text-ink">{children}</dd>
    </>
  );
}

export function PanelWords({ locale, book, bookName, chapter, verse, text }: PanelWordsProps) {
  const [data, setData] = useState<ChapterWordView | null>(() => loadedChapterWords(locale, book, chapter));
  const [open, setOpen] = useState<ReadonlySet<number>>(new Set());
  const details = useRef(new Map<number, HTMLDivElement>());
  const started = useRef(new WeakSet<HTMLElement>());
  const transliteration = useSyncExternalStore(subscribeTransliteration, getTransliteration, serverTransliteration);

  useEffect(() => {
    let current = true;
    void loadChapterWords(locale, book, chapter).then((value) => {
      if (current) setData(value);
    });
    return () => {
      current = false;
    };
  }, [locale, book, chapter]);

  const words = data?.verses[String(verse)] ?? [];
  if (!data || words.length === 0) return null;
  const lang = data.language === "grc" ? "grc" : "hbo";
  const toggle = (index: number) => {
    const element = details.current.get(index);
    const want = !open.has(index);
    setOpen((previous) => {
      const next = new Set(previous);
      if (want) next.add(index);
      else next.delete(index);
      return next;
    });
    if (element) foldCard(element, want);
  };

  return (
    <>
      <ul aria-label={text.list} className="m-0 list-none border-b border-rule p-0">
        {words.map((word, index) => (
          <li key={`${index}-${word.g}`} className="border-t border-rule">
            <button
              type="button"
              aria-expanded={open.has(index)}
              onClick={() => toggle(index)}
              className="group/word word-row min-h-11 w-full cursor-pointer rounded-4 border-0 bg-transparent px-1.5 py-2.25 text-left transition-colors duration-150 ease-standard hover:bg-hover"
            >
              <span lang={lang} className="text-word-original text-ink">
                {word.g}
              </span>
              <span className="font-body text-word-gloss font-light text-ink-2">
                <span lang={word.english ? "en" : undefined}>{word.gloss}</span>
                {transliteration === "on" ? (
                  <small className="ml-2.5 font-ui text-label text-ink-3">{word.t}</small>
                ) : null}
                {word.english ? <small className="ml-2.5 font-ui text-label text-ink-3">{text.english}</small> : null}
              </span>
              <Chevron className="justify-self-end text-ink-3 transition-transform duration-200 ease-standard group-aria-expanded/word:rotate-90" />
            </button>
            <div
              ref={(element) => {
                if (!element) {
                  details.current.delete(index);
                  return;
                }
                if (!started.current.has(element)) {
                  started.current.add(element);
                  element.hidden = true;
                }
                details.current.set(index, element);
              }}
              className="overflow-hidden"
            >
              <WordCard
                word={word}
                data={data}
                bookName={bookName}
                text={text}
                locale={locale}
                book={book}
                chapter={chapter}
                verse={verse}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="m-0 mt-3.5 text-ui-xs leading-normal text-ink-3">{text.source}</p>
    </>
  );
}
