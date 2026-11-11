import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import type { Objection } from "@/content/model/page";
import { verseLink } from "@/content/page-views";
import type { Locale } from "@/lib/locale";

type AnswerSectionProps = {
  id: string;
  title: string;
  objection: Objection;
  locale: Locale;
};

export function AnswerSection({ id, title, objection, locale }: AnswerSectionProps) {
  const verse = (segments: string[]) => verseLink(segments, locale);
  return (
    <Section id={id} title={title}>
      {objection.answer.map((block, index) =>
        block.type === "p" ? (
          <p key={index} className="mb-3.5 font-body text-prose-mobile font-light text-ink-2 opsz-18 sm:text-prose">
            <RichText text={block.text} verse={verse} />
          </p>
        ) : (
          <figure key={index} className="m-0 mb-3.5">
            {block.text.map((paragraph, position) => (
              <blockquote
                key={position}
                className="m-0 font-head text-box-quote font-light text-ink-2 italic guillemets opsz-24"
              >
                {paragraph}
              </blockquote>
            ))}
            <figcaption className="mt-2 text-ui-sm text-ink-3">
              <RichText text={block.attribution} verse={verse} />
            </figcaption>
          </figure>
        ),
      )}
    </Section>
  );
}
