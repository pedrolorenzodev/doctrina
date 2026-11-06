"use client";

import { useRef, useState } from "react";
import { MoreButton } from "@/components/ui/more-button";
import { easeReveal, prefersReducedMotion } from "@/lib/branch-motion";
import { OriginalScripts } from "@/components/original-scripts";

type OriginalEntryProps = { entry: string; show: string; hide: string };

export function OriginalEntry({ entry, show, hide }: OriginalEntryProps) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLParagraphElement>(null);
  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next && box.current && !prefersReducedMotion()) {
      box.current.animate(
        [
          { opacity: 0, transform: "translateY(8px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 420, easing: easeReveal },
      );
    }
  };
  return (
    <>
      <MoreButton expanded={open} controls="original-entry" onClick={toggle}>
        {open ? hide : show}
      </MoreButton>
      <p
        ref={box}
        id="original-entry"
        lang="en"
        hidden={!open}
        className="m-0 max-w-170 pt-4 font-body text-reference font-light whitespace-pre-line text-ink-2"
      >
        <OriginalScripts text={entry} />
      </p>
    </>
  );
}
