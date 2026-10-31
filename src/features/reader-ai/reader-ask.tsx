"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { CitationProvider, useCitation } from "@/components/citation-window/citation-context";
import type { CitationWindowText } from "@/components/citation-window/types";
import { markArrival } from "@/lib/arrival-mark";
import { clearAskPill, closedAskDrawer, getAskDrawer, subscribeAskDrawer, type AskPill } from "@/lib/ask-drawer";
import { useActiveChapter } from "@/lib/active-chapter";
import { escapePriority, registerEscape } from "@/lib/escape-stack";
import type { Locale } from "@/lib/locale";
import { scrollOffset, scrollToLayoutPosition, scrollToY } from "@/lib/scroll";
import { currentTranslationChoice, subscribeTranslationChoice } from "@/lib/translation-choice";
import type { CiteHandlers } from "@/features/reader-ai/answer-parts";
import { AskDrawer } from "@/features/reader-ai/ask-drawer";
import { BackBar } from "@/features/reader-ai/back-bar";
import { Chat } from "@/features/reader-ai/chat";
import {
  openConversation,
  savedConversations,
  startConversation,
  type Conversation,
} from "@/features/reader-ai/conversations";
import { HistoryPanel } from "@/features/reader-ai/history-panel";
import { focusRingClassName } from "@/features/reader-ai/motion";
import { ContextLine } from "@/features/reader-ai/context-line";
import { CitePreview, type CiteTarget } from "@/features/reader-ai/cite-preview";
import { quoteViews } from "@/features/reader-ai/quote-views";
import { quotes } from "@/features/reader-ai/quotes";
import type { Scope } from "@/features/reader-ai/scope-control";
import { exampleHistory, routeQuestion, wordMarks } from "@/features/reader-ai/script";
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
  citationText: CitationWindowText;
};

const showMs = 200;
const verseLead = 2;
const hideMs = 120;
const coarse = () => matchMedia("(pointer: coarse)").matches;
const headButtonClassName = `grid size-9 flex-none cursor-pointer place-items-center rounded-6 text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-pressed:bg-hover aria-pressed:text-ink pointer-coarse:size-11 ${focusRingClassName}`;

export function ReaderAsk(props: ReaderAskProps) {
  const { locale, text, citationText } = props;
  const views = useMemo(() => quoteViews(locale, text.cite), [locale, text.cite]);
  return (
    <CitationProvider views={views} text={citationText}>
      <AskLayer {...props} />
    </CitationProvider>
  );
}

function AskLayer({
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
  const citation = useCitation();
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
  const [back, setBack] = useState<{ from: string; y: number } | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [conversation, setConversation] = useState({ serial: 0, restored: false });
  const [saved, setSaved] = useState<Conversation[]>([]);
  const timers = useRef({ show: 0, hide: 0 });
  const windowFrom = useRef<HTMLElement | null>(null);

  const scopeNames: Record<Scope, string> = {
    chapter: text.sees.scopes.chapter.replace("{chapter}", chapter),
    bible: text.sees.scopes.bible,
    fathers: text.sees.scopes.fathers,
    all: text.sees.scopes.all,
  };

  useEffect(() => {
    if (!historyOpen) return;
    return registerEscape(escapePriority.window, () => setHistoryOpen(false));
  }, [historyOpen]);

  const dayOf = (iso: string) =>
    new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", timeZone: "UTC" })
      .format(new Date(iso))
      .replace(".", "");

  const showConversation = (restored: boolean) => {
    setHistoryOpen(false);
    clearAskPill();
    setConversation((current) => ({ serial: current.serial + 1, restored }));
  };

  const historyRows = [
    ...saved.map((entry) => ({
      key: entry.id,
      question: entry.entries[0]?.question ?? "",
      date: dayOf(entry.startedAt),
      onPick: () => {
        openConversation(entry);
        showConversation(true);
      },
    })),
    // TODO: drop the example questions once the answers are real
    ...exampleHistory.map((example) => ({
      key: example.date,
      question: example.question,
      date: dayOf(example.date),
      onPick: () => {
        openConversation({
          id: `example-${example.date}`,
          opening: "chapter",
          startedAt: `${example.date}T12:00:00.000Z`,
          entries: [
            {
              key: 1,
              id: routeQuestion(example.question),
              question: example.question,
              pill: null,
              scopeName: scopeNames[scope],
              seconds: 4,
            },
          ],
        });
        showConversation(true);
      },
    })),
  ];

  useEffect(() => {
    if (citation.openId) return;
    windowFrom.current?.setAttribute("aria-expanded", "false");
    windowFrom.current = null;
  }, [citation.openId]);

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
      if (citation.openId === quote && windowFrom.current === anchor) {
        citation.close();
        return;
      }
      windowFrom.current?.setAttribute("aria-expanded", "false");
      windowFrom.current = anchor;
      anchor.setAttribute("aria-expanded", "true");
      citation.open(quote, anchor);
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
        overlay={<HistoryPanel open={historyOpen} label={text.chat.history} rows={historyRows} />}
        actions={
          <>
            <button
              type="button"
              data-bare-focus=""
              aria-label={text.chat.newChat}
              title={text.chat.newChat}
              onClick={() => {
                startConversation(pill?.unit ? "verse" : "chapter");
                setHistoryOpen(false);
                setConversation((current) => ({ serial: current.serial + 1, restored: false }));
              }}
              className={headButtonClassName}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M9 4v10M4 9h10" />
              </svg>
            </button>
            <button
              type="button"
              data-bare-focus=""
              data-ask-history-button=""
              aria-label={text.chat.history}
              title={text.chat.history}
              aria-pressed={historyOpen}
              onClick={() => {
                if (!historyOpen) setSaved(savedConversations());
                setHistoryOpen(!historyOpen);
              }}
              className={headButtonClassName}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="9" r="6.5" />
                <path d="M9 5.5V9l2.3 1.5" />
              </svg>
            </button>
          </>
        }
      >
        {(opening) => (
          <div key={`${opening}-${conversation.serial}`} data-ask-content="" className="flex min-h-0 flex-1 flex-col">
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
              chapterSource={`${edition?.name ?? ""}, ${chapter}`}
              restored={conversation.restored}
            />
          </div>
        )}
      </AskDrawer>
      <CitePreview text={text.cite} shown={preview} />
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
