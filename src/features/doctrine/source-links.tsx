import { Fragment } from "react";
import { CitationLink } from "@/components/citation-window/citation-link";
import type { SourceRef } from "@/content/model/page";
import { closeParenthesis, openParenthesis, referenceSeparator } from "@/lib/punctuation";

type SourceLinksProps = {
  sources: SourceRef[];
  parenthesized?: boolean;
};

export function SourceLinks({ sources, parenthesized = false }: SourceLinksProps) {
  return sources.map((source, index) => (
    <Fragment key={source.label}>
      {index > 0 ? (parenthesized ? `${referenceSeparator} ` : ", ") : null}
      {parenthesized && index === 0 ? openParenthesis : null}
      <CitationLink id={source.citations[0] ?? ""}>{source.label}</CitationLink>
      {parenthesized && index === sources.length - 1 ? closeParenthesis : null}
    </Fragment>
  ));
}
