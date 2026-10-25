import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import type { DoctrinePage } from "@/content/model/doctrine-page";
import { verseLink } from "@/content/page-views";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";

type CommonSectionProps = {
  id: string;
  page: DoctrinePage;
  locale: Locale;
};

export function CommonSection({ id, page, locale }: CommonSectionProps) {
  const text = getUiText(locale).doctrinePage;
  const verse = (segments: string[]) => verseLink(segments, locale);
  return (
    <Section id={id} title={text.common} wide>
      <div className="common-grid">
        <p className="m-0 mb-3.5 font-body text-prose-mobile font-light text-ink-2 opsz-18 sm:text-prose">
          <RichText text={page.common.text} verse={verse} />
        </p>
        <ul className="m-0 list-none p-0" aria-label={text.discussed}>
          {page.common.questions.map((question) => (
            <li key={question} className="border-t border-rule pt-3.5 pb-4 last:border-b">
              <span className="mb-1 block text-label font-medium text-ink-3">{text.discussed}</span>
              <p className="m-0 font-head text-question text-ink opsz-24">{question}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
