"use client";

import { useRef, useState, type ReactNode } from "react";
import { MoreButton } from "@/components/ui/more-button";
import { foldGroup } from "@/lib/fold-motion";

type CriterionFoldProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export function CriterionFold({ id, label, children }: CriterionFoldProps) {
  const [expanded, setExpanded] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  function toggle() {
    const element = box.current;
    if (!element) return;
    const next = !expanded;
    setExpanded(next);
    foldGroup(element, [...element.querySelectorAll<HTMLElement>("p")], next);
  }

  return (
    <div className="mt-4 max-w-160">
      <MoreButton expanded={expanded} controls={id} onClick={toggle}>
        {label}
      </MoreButton>
      <div ref={box} id={id} hidden className="mt-1.5">
        {children}
      </div>
    </div>
  );
}
