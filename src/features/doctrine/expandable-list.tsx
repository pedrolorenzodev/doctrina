"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { MoreButton } from "@/components/ui/more-button";
import { flipList, revealList } from "@/lib/list-motion";
import { scrollOffset, scrollToElement, scrollToLayoutPosition } from "@/lib/scroll";
import { showItemEvent } from "@/lib/show-item";

type ExpandableItem = {
  id: string;
  content: ReactNode;
};

type ExpandableListProps = {
  as?: "ol" | "ul";
  itemClassName: string;
  items: ExpandableItem[];
  shown: number;
  moreLabel: string;
  lessLabel: string;
};

export function ExpandableList({
  as: Tag = "ol",
  itemClassName,
  items,
  shown,
  moreLabel,
  lessLabel,
}: ExpandableListProps) {
  const [expanded, setExpanded] = useState(false);
  const list = useRef<HTMLOListElement & HTMLUListElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);

  const expandedNow = useRef(false);

  useEffect(() => {
    expandedNow.current = expanded;
  }, [expanded]);

  useEffect(() => (list.current ? revealList(list.current) : undefined), []);

  const arrivalId = useRef<string | null>(null);

  useEffect(() => {
    if (!expanded || !arrivalId.current) return;
    const element = document.getElementById(arrivalId.current);
    arrivalId.current = null;
    if (element) scrollToLayoutPosition(element, true);
  }, [expanded]);

  useEffect(() => {
    function reveal(id: string) {
      const index = items.findIndex((item) => item.id === id);
      const element = document.getElementById(id);
      if (index < 0 || !element) return;
      if (index >= shown && !expandedNow.current) {
        if (list.current && ghosts.current) {
          flipList(list.current, ghosts.current, () => flushSync(() => setExpanded(true)));
        } else setExpanded(true);
        scrollToLayoutPosition(element);
      } else scrollToElement(element);
    }
    const onShow = (event: Event) => reveal((event as CustomEvent<string>).detail);
    window.addEventListener(showItemEvent, onShow);
    const arrival = decodeURIComponent(location.hash.slice(1));
    if (items.some((item, index) => item.id === arrival && index >= shown)) {
      arrivalId.current = arrival;
      setExpanded(true);
    }
    return () => window.removeEventListener(showItemEvent, onShow);
  }, [items, shown]);

  function toggle() {
    const next = !expanded;
    if (!list.current || !ghosts.current) {
      setExpanded(next);
      return;
    }
    flipList(list.current, ghosts.current, () => flushSync(() => setExpanded(next)));
    if (!next && list.current.getBoundingClientRect().top < scrollOffset()) scrollToElement(list.current);
  }

  return (
    <>
      <div className="relative">
        <Tag ref={list} className="list-none border-b border-rule">
          {items.map((item, index) => (
            <li
              key={item.id}
              id={item.id}
              data-id={item.id}
              hidden={index >= shown && !expanded}
              className={itemClassName}
            >
              {item.content}
            </li>
          ))}
        </Tag>
        <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
      </div>
      {items.length > shown ? (
        <div className="mt-3.5">
          <MoreButton expanded={expanded} onClick={toggle}>
            {expanded ? lessLabel : moreLabel}
          </MoreButton>
        </div>
      ) : null}
    </>
  );
}
