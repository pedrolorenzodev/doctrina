"use client";

import { useRef, useState, type ReactNode } from "react";
import { MoreButton } from "@/components/ui/more-button";
import { foldGroup } from "@/lib/fold-motion";

type ObjectionsFoldProps = {
  id: string;
  heading: string;
  showLabel: string;
  hideLabel: string;
  children: ReactNode;
};

export function ObjectionsFold({ id, heading, showLabel, hideLabel, children }: ObjectionsFoldProps) {
  const [expanded, setExpanded] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  function toggle() {
    const element = box.current;
    if (!element) return;
    const next = !expanded;
    setExpanded(next);
    foldGroup(element, [...element.querySelectorAll<HTMLElement>("li")], next);
  }

  return (
    <>
      <div className="mt-3">
        <MoreButton expanded={expanded} controls={id} onClick={toggle}>
          {expanded ? hideLabel : showLabel}
        </MoreButton>
      </div>
      <div ref={box} id={id} hidden className="mt-5.5">
        <span className="mb-1.5 block text-label font-normal text-ink-3">{heading}</span>
        {children}
      </div>
    </>
  );
}
