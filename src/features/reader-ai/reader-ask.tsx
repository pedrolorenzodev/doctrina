"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { fatherWorkHref } from "@/content/routes";
import { markArrival } from "@/lib/arrival-mark";
import { closedAskDrawer, getAskDrawer, subscribeAskDrawer, type AskPill } from "@/lib/ask-drawer";
import { useActiveChapter } from "@/lib/active-chapter";
import { escapePriority, registerEscape } from "@/lib/escape-stack";
import type { Locale } from "@/lib/locale";
import { scrollOffset, scrollToLayoutPosition, scrollToY } from "@/lib/scroll";
import { currentTranslationChoice, subscribeTranslationChoice } from "@/lib/translation-choice";
import type { CiteHandlers } from "@/features/reader-ai/answer-parts";
import { AskDrawer } from "@/features/reader-ai/ask-drawer";
import { BackBar } from "@/features/reader-ai/back-bar";
import { Chat } from "@/features/reader-ai/chat";
import { ContextLine } from "@/features/reader-ai/context-line";
import { CitePreview, type CiteTarget } from "@/features/reader-ai/cite-preview";
import { QuoteWindow } from "@/features/reader-ai/quote-window";
import { quotes, type QuoteId } from "@/features/reader-ai/quotes";
import type { Scope } from "@/features/reader-ai/scope-control";
import { wordMarks } from "@/features/reader-ai/script";
import type { AskText } from "@/features/reader-ai/text";
import { clearWords, markWords } from "@/features/reader-ai/word-marks";

type ReaderAskProps = {
  locale: Locale;
  text: AskText;
  chapterTitle: string;
  books: { id: string; title: string }[];
  here: { book: string; chapter: number };
  editions: { id: string; name: string }[];
  defaultEdition: string;
  johnSix: { book: string; chapter: number; href: string };
  bibleHrefs: Record<string, string>;
};

const showMs = 200;
const verseLead = 2;
const hideMs = 120;
const coarse = () => matchMedia("(pointer: coarse)").matches;

export function ReaderAsk({
  locale,
  text,
  chapterTitle,
  books,
  here,
  editions,
  defaultEdition,
  johnSix,
  bibleHrefs,
}: ReaderAskProps) {
  const router = useRouter();
  const active = useActiveChapter() ?? here;
  const stored = useSyncExternalStore(subscribeTranslationChoice, currentTranslationChoice, () => null);
  const edition =
    editions.find((entry) => entry.id === stored) ?? editions.find((entry) => entry.id === defaultEdition);
  const bookTitle = books.find((book) => book.id === active.book)?.title ?? "";
  const chapter = chapterTitle.replace("{book}", bookTitle).replace("{chapter}", String(active.chapter));
  const [notesOn, setNotesOn] = useState(true);
  const [contextOpen, setContextOpen] = useState(false);
  const [scope, setScope] = useState<Scope>("all");
  const pill = useSyncExternalStore(
    subscribeAskDrawer,
    () => getAskDrawer().pill,
    () => closedAskDrawer.pill,
  );
  const [preview, setPreview] = useState<{ target: CiteTarget; anchor: HTMLElement } | null>(null);
  const [windowQuote, setWindowQuote] = useState<QuoteId | null>(null);
  const [back, setBack] = useState<{ from: string; y: number } | null>(null);
  const timers = useRef({ show: 0, hide: 0 });
  const windowFrom = useRef<HTMLElement | null>(null);

  const scopeNames: Record<Scope, string> = {
    chapter: text.sees.scopes.chapter.replace("{chapter}", chapter),
    bible: text.sees.scopes.bible,
    fathers: text.sees.scopes.fathers,
    all: text.chat.everything,
  };

  const hidePreview = () => {
    clearTimeout(timers.current.show);
    clearTimeout(timers.current.hide);
    setPreview(null);
  };

  useEffect(() => {
    const pending = timers.current;
    const onScroll = () => {
      clearTimeout(pending.show);
      clearTimeout(pending.hide);
      setPreview(null);
    };
    document.addEventListener("scroll", onScroll, { capture: true, passive: true });
    return () => document.removeEventListener("scroll", onScroll, { capture: true });
  }, []);

  useEffect(() => {
    if (!preview) return;
    const pending = timers.current;
    return registerEscape(escapePriority.window, () => {
      clearTimeout(pending.show);
      setPreview(null);
    });
  }, [preview]);

  const firstTap = (anchor: HTMLElement, target: CiteTarget) => {
    if (!coarse() || preview?.anchor === anchor) return false;
    clearTimeout(timers.current.show);
    setPreview({ target, anchor });
    return true;
  };

  const goToVerse = (verse: number) => {
    const unit = document.getElementById(`v-${verse}`);
    const inJohnSix = here.book === johnSix.book && here.chapter === johnSix.chapter;
    if (!inJohnSix || !unit) {
      router.push(`${johnSix.href}#v-${verse}`);
      return;
    }
    setBack((current) => current ?? { from: chapter, y: scrollY });
    history.replaceState(null, "", `#v-${verse}`);
    dispatchEvent(new HashChangeEvent("hashchange"));
    scrollToLayoutPosition(unit);
  };

  const goToPill = (chosen: AskPill) => {
    const unit = chosen.unit;
    const verse = unit ? document.getElementById(`${unit.prefix}v-${unit.verse}`) : null;
    if (!unit || !verse) return;
    const lead = document.getElementById(`${unit.prefix}v-${Math.max(1, unit.verse - verseLead)}`) ?? verse;
    markArrival(verse);
    scrollToY(lead.getBoundingClientRect().top + scrollY - scrollOffset());
  };

  const closeWindow = () => {
    setWindowQuote(null);
    const from = windowFrom.current;
    windowFrom.current = null;
    from?.setAttribute("aria-expanded", "false");
    from?.focus({ preventScroll: true });
  };

  const handlers: CiteHandlers = {
    onPreview: (target, anchor, immediate = false) => {
      clearTimeout(timers.current.show);
      clearTimeout(timers.current.hide);
      if (target && anchor) {
        if (immediate) setPreview({ target, anchor });
        else timers.current.show = window.setTimeout(() => setPreview({ target, anchor }), showMs);
        return;
      }
      timers.current.hide = window.setTimeout(() => setPreview(null), hideMs);
    },
    onVerse: (verse, anchor) => {
      if (firstTap(anchor, { verse })) return;
      hidePreview();
      goToVerse(verse);
    },
    onQuote: (quote, anchor) => {
      if (firstTap(anchor, { quote })) return;
      hidePreview();
      const bible = quotes[quote].bible;
      if (bible) {
        if (bible.book === johnSix.book && bible.chapter === johnSix.chapter) goToVerse(bible.verse);
        else router.push(`${bibleHrefs[`${bible.book}.${bible.chapter}`]}?place=third#v-${bible.verse}`);
        return;
      }
      const father = quotes[quote].father;
      if (father) {
        router.push(`${fatherWorkHref(locale, father.workId)}#d-${father.anchor}`);
        return;
      }
      windowFrom.current?.setAttribute("aria-expanded", "false");
      windowFrom.current = anchor;
      anchor.setAttribute("aria-expanded", "true");
      setWindowQuote(quote);
    },
  };

  return (
    <>
      <AskDrawer
        title={text.title}
        closeLabel={text.close}
        bar={
          <ContextLine
            text={text.sees}
            chapter={chapter}
            edition={edition?.name ?? ""}
            notesOn={notesOn}
            onNotes={setNotesOn}
            scope={scope}
            scopeName={text.sees.scopes[scope].replace("{chapter}", chapter)}
            onScope={setScope}
            open={contextOpen}
            onOpen={setContextOpen}
          />
        }
      >
        {(opening) => (
          <div key={opening} data-ask-content="" className="flex min-h-0 flex-1 flex-col">
            <Chat
              text={text.chat}
              chapter={chapter}
              scope={scope}
              scopeNames={scopeNames}
              notesOn={notesOn}
              pill={pill}
              handlers={handlers}
              onScopeFix={() => setScope("fathers")}
              onMarks={() => markWords(wordMarks, Number(Object.keys(wordMarks)[0]))}
              onAsk={clearWords}
              onPillGo={goToPill}
            />
          </div>
        )}
      </AskDrawer>
      <CitePreview text={text.cite} shown={preview} />
      <QuoteWindow text={text.cite} closeLabel={text.close} quote={windowQuote} onClose={closeWindow} />
      <BackBar
        label={text.cite.back}
        from={back?.from ?? null}
        onBack={() => {
          if (back) scrollToY(back.y);
          setBack(null);
        }}
      />
    </>
  );
}
