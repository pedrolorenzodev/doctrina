import { RichText } from "@/components/rich-text";

type ReadingTextProps = {
  text: string;
  verseLinks: Record<string, { id: string; label: string }>;
  onPhrase: (phrase: string | null) => void;
  lightable: (phrase: string) => boolean;
};

const quotedPhrase = /«([^»]{12,})»/g;
const tokens = /\{[^}]*\}/g;

export function ReadingText({ text, verseLinks, onPhrase, lightable }: ReadingTextProps) {
  const verse = (segments: string[]) => verseLinks[segments.join(",")] ?? { id: segments.join(","), label: "" };
  const pieces: { quote: boolean; text: string }[] = [];
  let cursor = 0;
  for (const match of text.matchAll(quotedPhrase)) {
    pieces.push({ quote: false, text: text.slice(cursor, match.index) });
    pieces.push({ quote: true, text: match[1]! });
    cursor = match.index + match[0].length;
  }
  pieces.push({ quote: false, text: text.slice(cursor) });
  return (
    <>
      {pieces.map((piece, index) =>
        piece.quote ? (
          <span
            key={index}
            data-lightable={lightable(piece.text.replace(tokens, "")) ? "" : undefined}
            onMouseEnter={() => onPhrase(piece.text.replace(tokens, ""))}
            onMouseLeave={() => onPhrase(null)}
            className="rounded-2 guillemets transition-colors duration-200 ease-standard data-lightable:hover:bg-mark"
          >
            <RichText text={piece.text} verse={verse} />
          </span>
        ) : (
          <RichText key={index} text={piece.text} verse={verse} />
        ),
      )}
    </>
  );
}
