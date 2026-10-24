import { CitationLink } from "@/components/citation-window/citation-link";
import { parseInline } from "@/lib/inline-refs";

type RichTextProps = {
  text: string;
  verse: (segments: string[]) => { id: string; label: string };
};

export function RichText({ text, verse }: RichTextProps) {
  return parseInline(text).map((node, index) => {
    if (node.kind === "text") return node.text;
    if (node.kind === "citation") {
      // TODO: a token with several ids opens only its first citation until the window shows groups
      return (
        <CitationLink key={index} id={node.ids[0] ?? ""}>
          {node.label}
        </CitationLink>
      );
    }
    if (node.kind === "verse") {
      const { id, label } = verse(node.osis);
      return (
        <CitationLink key={index} id={id}>
          {label}
        </CitationLink>
      );
    }
    // TODO: section and glossary tokens need their links (in-page jump, glossary window)
    return node.label ?? "";
  });
}
