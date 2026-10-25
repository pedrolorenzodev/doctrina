"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { MoreButton } from "@/components/ui/more-button";
import { flipList, revealList } from "@/lib/list-motion";
import { scrollOffset, scrollToElement } from "@/lib/scroll";

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

  useEffect(() => (list.current ? revealList(list.current) : undefined), []);

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
