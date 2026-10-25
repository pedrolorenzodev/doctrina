import { RevealList } from "@/components/reveal-list";
import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import { PageLink } from "@/components/ui/page-link";
import type { ObjectionPassages, PassageItem } from "@/content/get-objection-passages";
import { verseLink } from "@/content/page-views";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ExpandableList } from "@/features/doctrine/expandable-list";
import { GroupHeading } from "@/components/group-heading";
import type { Locale } from "@/lib/locale";

const shownObjectorPassages = 4;
const itemClassName = "border-t border-rule pt-4.5 pb-4.75";

type PassagesSectionProps = {
  id: string;
  passages: ObjectionPassages;
  locale: Locale;
};

function PassageBody({ passage }: { passage: PassageItem }) {
  // TODO: the reference opens the verse page (06)
  return (
    <>
      {passage.text ? (
        <blockquote className="m-0 mb-2 font-head text-box-quote font-light text-ink italic guillemets opsz-24">
          {passage.text}
        </blockquote>
      ) : null}
      <p className="m-0 text-reference">
        <PageLink>{passage.label}</PageLink>
      </p>
    </>
  );
}

export function PassagesSection({ id, passages, locale }: PassagesSectionProps) {
  const text = getUiText(locale).doctrine.objection;
  const verse = (segments: string[]) => verseLink(segments, locale);
  if (passages.answer.length === 0 && passages.objector.length === 0) return null;
  const hidden = Math.max(0, passages.objector.length - shownObjectorPassages);
  return (
    <Section id={id} title={text.passages}>
      {passages.answer.length > 0 ? (
        <>
          <GroupHeading>{text.groupAnswer}</GroupHeading>
          <RevealList as="ul" className="list-none border-b border-rule">
            {passages.answer.map((passage) => (
              <li key={passage.id} className={itemClassName}>
                <PassageBody passage={passage} />
              </li>
            ))}
          </RevealList>
        </>
      ) : null}
      {passages.objector.length > 0 ? (
        <>
          <GroupHeading>{text.groupObjection}</GroupHeading>
          <ExpandableList
            as="ul"
            itemClassName={itemClassName}
            items={passages.objector.map((passage) => ({
              id: `objector-${passage.id}`,
              content: <PassageBody passage={passage} />,
            }))}
            shown={shownObjectorPassages}
            moreLabel={(hidden === 1 ? text.showOnePassage : text.showMorePassages).replace("{n}", String(hidden))}
            lessLabel={getUiText(locale).doctrine.showLess}
          />
          {passages.note ? (
            <p className="mt-2.5 text-meta text-ink-3">
              <RichText text={passages.note} verse={verse} />
            </p>
          ) : null}
        </>
      ) : null}
    </Section>
  );
}
