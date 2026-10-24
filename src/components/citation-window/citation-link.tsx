"use client";

import type { ReactNode } from "react";
import { useCitation } from "@/components/citation-window/citation-context";
import { InPlaceLink } from "@/components/ui/in-place-link";

type CitationLinkProps = {
  id: string;
  children: ReactNode;
};

export function CitationLink({ id, children }: CitationLinkProps) {
  const { openId, open, close } = useCitation();
  return (
    <InPlaceLink
      kind="citation"
      open={openId === id}
      onClick={(event) => (openId === id ? close() : open(id, event.currentTarget))}
    >
      {children}
    </InPlaceLink>
  );
}
