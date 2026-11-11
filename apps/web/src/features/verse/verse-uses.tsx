"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { MoreButton } from "@/components/ui/more-button";
import { PageLink } from "@/components/ui/page-link";
import { flipKeyed } from "@/lib/keyed-flip";

export type VerseUseItem = { id: string; href: string; title: string; context: string };

export type VerseUseGroup = { label: string; items: VerseUseItem[] };

type VerseUsesText = { more: string; less: string };

export function VerseUsesSide({ items, text }: { items: VerseUseItem[]; text: VerseUsesText }) {
  const box = useRef<HTMLUListElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const shown = open ? items : items.slice(0, 1);
  const toggle = () => {
    const mutate = () => setOpen((previous) => !previous);
    if (box.current && ghosts.current) flipKeyed(box.current, ghosts.current, () => flushSync(mutate));
    else mutate();
  };
  return (
    <div className="relative">
      <ul id="verse-uses-side" ref={box} className="m-0 mt-0.5 list-none p-0">
        {shown.map((item) => (
          <li key={item.id} data-k={item.id} className="border-t border-rule py-2.5">
            <p className="m-0 font-body text-verse-use">
              <PageLink href={item.href}>{item.title}</PageLink>
            </p>
            <p className="m-0 mt-1 font-body text-defn-source font-light text-ink-prose">{item.context}</p>
          </li>
        ))}
      </ul>
      {items.length > 1 ? (
        <div className="mt-1.5">
          <MoreButton expanded={open} controls="verse-uses-side" onClick={toggle}>
            {open ? text.less : text.more.replace("{n}", String(items.length - 1))}
          </MoreButton>
        </div>
      ) : null}
      <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
    </div>
  );
}

export function VerseUsesGroups({ groups }: { groups: VerseUseGroup[] }) {
  return (
    <div>
      {groups.map((group) => (
        <div key={group.label} className="verse-uses-group border-t border-rule last:border-b">
          <p className="m-0 pt-3.5 text-btn font-medium text-ink-3 sm:pt-4">{group.label}</p>
          <ul className="m-0 list-none p-0">
            {group.items.map((item) => (
              <li key={item.id} className="border-t border-rule py-3.25 first:border-t-0 max-sm:first:pt-1.5">
                <p className="m-0 font-body text-entity">
                  <PageLink href={item.href}>{item.title}</PageLink>
                </p>
                <p className="m-0 mt-1 font-body text-row font-light text-ink-prose">{item.context}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
