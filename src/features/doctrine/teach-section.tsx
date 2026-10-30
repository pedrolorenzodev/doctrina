import { CitationLink } from "@/components/citation-window/citation-link";
import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import { shownStatements } from "@/content/doctrine-rules";
import type { GradeLine, TraditionPage } from "@/content/model/page";
import { gradeViewId, verseLink } from "@/content/page-views";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ExpandableList } from "@/features/doctrine/expandable-list";
import { SourceLinks } from "@/features/doctrine/source-links";
import type { Locale } from "@/lib/locale";

type TeachSectionProps = {
  page: TraditionPage;
  locale: Locale;
};

export function TeachSection({ page, locale }: TeachSectionProps) {
  const text = getUiText(locale);
  const verse = (segments: string[]) => verseLink(segments, locale);

  const gradeLinks = (statementId: string, grades: GradeLine[]) =>
    grades.map((line, index) => {
      const connector = index > 0 ? ` ${text.doctrine.gradeAnd} ` : null;
      if (line.kind !== "church") {
        return (
          <span key={index}>
            {connector}
            {text.doctrine.unclassified[line.reason]}
          </span>
        );
      }
      const label = page.authority.grades[line.grade]?.label;
      if (!label) return null;
      return (
        <span key={index}>
          {connector}
          <CitationLink id={gradeViewId(statementId, index)} kind="term">
            {index > 0 ? label.toLowerCase() : label}
          </CitationLink>
        </span>
      );
    });

  const items = page.teach.statements.map((statement) => ({
    id: statement.id,
    content: (
      <>
        <p className="font-body text-prose-mobile font-light text-ink-2 opsz-18 sm:text-prose">
          <RichText text={statement.text} verse={verse} />
        </p>
        <p className="mt-3 text-line text-ink-3">
          <span className="font-semibold text-ink-2">{gradeLinks(statement.id, statement.grades)}</span>
          <span className="divider-inline" aria-hidden="true" />
          <SourceLinks sources={statement.sources} />
        </p>
      </>
    ),
  }));

  const shown = shownStatements[page.doctrine];
  const { definition } = page.teach;

  return (
    <Section id="teach" title={text.doctrine.teach} subtitle={page.teach.subtitle}>
      <p className="mb-7.5 font-head text-defn-mobile font-light text-ink opsz-24 sm:text-defn">
        <RichText text={definition.text} verse={verse} />{" "}
        <span className="font-ui text-defn-source">
          <SourceLinks sources={definition.sources} parenthesized />
        </span>
      </p>
      <ExpandableList
        itemClassName="border-t border-rule pt-5.5 pb-6"
        items={items}
        shown={shown}
        moreLabel={text.doctrine.showMoreStatements.replace("{n}", String(Math.max(0, items.length - shown)))}
        lessLabel={text.doctrine.showLess}
      />
    </Section>
  );
}
