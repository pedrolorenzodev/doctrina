import { Fragment, type ReactNode } from "react";
import { CitationLink } from "@/components/citation-window/citation-link";
import { PageLink } from "@/components/ui/page-link";
import { parseInline, type InlineNode } from "@/lib/inline-refs";
import { closeParenthesis, openParenthesis, referenceSeparator } from "@/lib/punctuation";

type RichTextProps = {
  text: string;
  verse: (segments: string[]) => { id: string; label: string };
};

type ReferenceNode = Extract<InlineNode, { kind: "citation" | "verse" }>;

const leadingPunctuation = /^([\s\S]*?)([.,;:]?)\s*$/;
const separatorBetweenReferences = /^[.,;:]?\s+$/;

function isReference(node: InlineNode | undefined): node is ReferenceNode {
  return node?.kind === "citation" || node?.kind === "verse";
}

export function RichText({ text, verse }: RichTextProps) {
  const nodes = parseInline(text);
  const out: ReactNode[] = [];

  const reference = (node: ReferenceNode, key: string) => {
    if (node.kind === "citation") {
      // TODO: a token with several ids opens only its first citation until the window shows groups
      return (
        <CitationLink key={key} id={node.ids[0] ?? ""}>
          {node.label}
        </CitationLink>
      );
    }
    const { id, label } = verse(node.osis);
    return (
      <CitationLink key={key} id={id}>
        {label}
      </CitationLink>
    );
  };

  let index = 0;
  while (index < nodes.length) {
    const node = nodes[index];
    if (!node) break;
    if (node.kind === "text") {
      const following = nodes[index + 1];
      if (isReference(following)) {
        const match = leadingPunctuation.exec(node.text);
        const members: ReferenceNode[] = [following];
        let cursor = index + 2;
        let trailing = match?.[2] ?? "";
        for (;;) {
          const gap = nodes[cursor];
          const next = nodes[cursor + 1];
          if (gap?.kind !== "text" || !separatorBetweenReferences.test(gap.text) || !isReference(next)) break;
          trailing = trailing || gap.text.trim();
          members.push(next);
          cursor += 2;
        }
        const after = nodes[cursor];
        const insideParentheses = after?.kind === "text" && after.text.startsWith(")") && /\([^)]*$/.test(node.text);
        if (insideParentheses) {
          out.push(<Fragment key={index}>{node.text}</Fragment>);
          out.push(
            <Fragment key={`group-${index}`}>
              {members.map((member, position) => (
                <Fragment key={position}>
                  {position > 0 ? `${referenceSeparator} ` : null}
                  {reference(member, String(position))}
                </Fragment>
              ))}
            </Fragment>,
          );
          index = cursor;
          continue;
        }
        out.push(<Fragment key={index}>{match?.[1] ?? node.text}</Fragment>);
        out.push(
          <Fragment key={`group-${index}`}>
            {" "}
            {openParenthesis}
            {members.map((member, position) => (
              <Fragment key={position}>
                {position > 0 ? `${referenceSeparator} ` : null}
                {reference(member, String(position))}
              </Fragment>
            ))}
            {closeParenthesis}
            {trailing}
          </Fragment>,
        );
        index = cursor;
        continue;
      }
      out.push(<Fragment key={index}>{node.text}</Fragment>);
    } else if (isReference(node)) {
      out.push(reference(node, String(index)));
    } else if (node.kind === "section") {
      // TODO: section tokens must link to their page and section (#node.id) once those pages exist
      out.push(<PageLink key={index}>{node.label}</PageLink>);
    } else {
      // TODO: glossary tokens need the glossary window
      out.push(<Fragment key={index}>{node.label ?? ""}</Fragment>);
    }
    index += 1;
  }
  return out;
}
