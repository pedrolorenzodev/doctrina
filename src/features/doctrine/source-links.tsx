import { Fragment } from "react";
import { CitationLink } from "@/components/citation-window/citation-link";
import type { SourceRef } from "@/content/model/page";
import { bracketGlue, closeParenthesis, openParenthesis, referenceSeparator } from "@/lib/punctuation";

type SourceLinksProps = {
  sources: SourceRef[];
  parenthesized?: boolean;
};

export function SourceLinks({ sources, parenthesized = false }: SourceLinksProps) {
  return sources.map((source, index) => {
    const last = index === sources.length - 1;
    return (
      <Fragment key={source.label}>
        {index > 0 && parenthesized ? " " : null}
        <span className={parenthesized ? bracketGlue(source.label) : undefined}>
          {index > 0 && !parenthesized ? ", " : null}
          {parenthesized && index === 0 ? openParenthesis : null}
          <CitationLink id={source.citations[0] ?? ""}>{source.label}</CitationLink>
          {parenthesized ? (last ? closeParenthesis : referenceSeparator) : null}
        </span>
      </Fragment>
    );
  });
}
