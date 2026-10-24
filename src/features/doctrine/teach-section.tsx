import { CitationLink } from "@/components/citation-window/citation-link";
import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import { shownStatements } from "@/content/doctrine-rules";
import { formatVerseRef } from "@/content/format-verse";
import type { GradeLine, SourceRef, TraditionPage } from "@/content/model/page";
import { gradeViewId, verseViewId } from "@/content/teach-views";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { StatementList } from "@/features/doctrine/statement-list";
import type { Locale } from "@/lib/locale";

const openParenthesis = "(";
const closeParenthesis = ")";

type TeachSectionProps = {
  page: TraditionPage;
  locale: Locale;
};

export function TeachSection({ page, locale }: TeachSectionProps) {
  const text = getUiText(locale);
  const verse = (segments: string[]) => ({ id: verseViewId(segments), label: formatVerseRef(segments, locale) });

  const sourceLinks = (sources: SourceRef[], separator: string) =>
    sources.map((source, index) => (
      <span key={source.label}>
        {index > 0 ? separator : null}
        <CitationLink id={source.citations[0] ?? ""}>{source.label}</CitationLink>
      </span>
    ));

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
      const label = page.authority.grades[line.grade].label;
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
    body: <RichText text={statement.text} verse={verse} />,
    line: (
      <>
        <span className="font-semibold text-ink-2">{gradeLinks(statement.id, statement.grades)}</span>
        <span className="divider-inline" aria-hidden="true" />
        {sourceLinks(statement.sources, ", ")}
      </>
    ),
  }));

  const shown = shownStatements[page.doctrine];
  const { definition } = page.teach;

  return (
    <Section id="teach" title={text.doctrine.teach} subtitle={page.teach.subtitle}>
      <p className="mb-7.5 font-head text-defn-mobile font-light text-ink opsz-24 sm:text-defn">
        <RichText text={definition.text} verse={verse} />{" "}
        <span className="font-ui text-sub">
          {openParenthesis}
          {sourceLinks(definition.sources, "; ")}
          {closeParenthesis}
        </span>
      </p>
      <StatementList
        items={items}
        shown={shown}
        moreLabel={text.doctrine.showMoreStatements.replace("{n}", String(Math.max(0, items.length - shown)))}
        lessLabel={text.doctrine.showLess}
      />
    </Section>
  );
}
