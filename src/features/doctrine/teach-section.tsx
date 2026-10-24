import { Fragment } from "react";
import { CitationLink } from "@/components/citation-window/citation-link";
import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import { shownStatements } from "@/content/doctrine-rules";
import type { GradeLine, SourceRef, TraditionPage } from "@/content/model/page";
import { gradeViewId, verseLink } from "@/content/page-views";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { StatementList } from "@/features/doctrine/statement-list";
import type { Locale } from "@/lib/locale";
import { closeParenthesis, openParenthesis, referenceSeparator } from "@/lib/punctuation";

type TeachSectionProps = {
  page: TraditionPage;
  locale: Locale;
};

export function TeachSection({ page, locale }: TeachSectionProps) {
  const text = getUiText(locale);
  const verse = (segments: string[]) => verseLink(segments, locale);

  const sourceLinks = (sources: SourceRef[], separator: string, parenthesized = false) =>
    sources.map((source, index) => {
      const last = index === sources.length - 1;
      return (
        <Fragment key={source.label}>
          {index > 0 && parenthesized ? " " : null}
          <span className={parenthesized ? "whitespace-nowrap" : undefined}>
            {index > 0 && !parenthesized ? separator : null}
            {parenthesized && index === 0 ? openParenthesis : null}
            <CitationLink id={source.citations[0] ?? ""}>{source.label}</CitationLink>
            {parenthesized ? (last ? closeParenthesis : separator) : null}
          </span>
        </Fragment>
      );
    });

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
        <span className="font-ui text-sub">{sourceLinks(definition.sources, referenceSeparator, true)}</span>
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
