"use client";

import { useEffect, useLayoutEffect, useRef, type RefObject } from "react";

export type NoteCard = { id: string; verse: number; place: string; text: string; date: string };

type NoteCardsProps = {
  label: string;
  cards: NoteCard[];
  hidden: boolean;
  rootRef: RefObject<HTMLDivElement | null>;
  onOpen: (id: string, opener: HTMLElement) => void;
  onPreview: (id: string | null) => void;
};

const gapPx = 8;
const resizeDelayMs = 150;

export function NoteCards({ label, cards, hidden, rootRef, onOpen, onPreview }: NoteCardsProps) {
  const box = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = box.current;
    const root = rootRef.current;
    if (!container || !root) return;
    let timer = 0;
    const place = () => {
      if (container.offsetParent === null) return;
      let floor = 0;
      for (const card of container.querySelectorAll<HTMLElement>("[data-note-card]")) {
        const top = Math.max(document.getElementById(`v-${card.dataset.verse}`)?.offsetTop ?? 0, floor);
        card.style.setProperty("--note-top", `${top}px`);
        floor = top + card.offsetHeight + gapPx;
      }
    };
    const later = () => {
      clearTimeout(timer);
      timer = window.setTimeout(place, resizeDelayMs);
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(root);
    window.addEventListener("resize", later);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("resize", later);
    };
  }, [cards, hidden, rootRef]);

  useEffect(() => () => onPreview(null), [onPreview]);

  return (
    <div
      ref={box}
      role="group"
      aria-label={label}
      data-note-cards={hidden || cards.length === 0 ? undefined : ""}
      className={`absolute top-0 left-full ml-10 w-note-card ${hidden ? "hidden" : "hidden notes:block"}`}
    >
      {cards.map((card) => (
        <button
          key={card.id}
          type="button"
          data-note-card
          data-verse={card.verse}
          onClick={(event) => onOpen(card.id, event.currentTarget)}
          onPointerEnter={() => onPreview(card.id)}
          onPointerLeave={() => onPreview(null)}
          onFocus={() => onPreview(card.id)}
          onBlur={() => onPreview(null)}
          className="absolute top-(--note-top) left-0 block w-full cursor-pointer border-l border-rule-2 pt-1.5 pr-2 pb-2 pl-3.5 text-left transition-colors duration-150 ease-standard hover:border-accent focus-visible:border-accent"
        >
          <span className="block text-ui-2xs text-ink-3">{card.place}</span>
          <span className="line-clamp-2 block font-body text-note-card font-light text-ink-2">{card.text}</span>
          <span className="mt-1 block text-ui-2xs text-ink-3 tabular-nums">{card.date}</span>
        </button>
      ))}
    </div>
  );
}
