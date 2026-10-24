"use client";

import type { ReactNode } from "react";
import { useCitation } from "@/components/citation-window/citation-context";
import { InPlaceLink } from "@/components/ui/in-place-link";

type CitationLinkProps = {
  id: string;
  kind?: "citation" | "term";
  children: ReactNode;
};

export function CitationLink({ id, kind = "citation", children }: CitationLinkProps) {
  const { openId, open, close } = useCitation();
  return (
    <InPlaceLink
      kind={kind}
      open={openId === id}
      onClick={(event) => (openId === id ? close() : open(id, event.currentTarget))}
    >
      {children}
    </InPlaceLink>
  );
}
