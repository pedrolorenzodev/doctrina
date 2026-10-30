import { Fragment } from "react";
import { RevealList } from "@/components/reveal-list";
import { Section } from "@/components/section";
import { churchGrades } from "@/content/model/ids";
import type { TraditionPage } from "@/content/model/page";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { SourceLinks } from "@/features/doctrine/source-links";
import { StatementLink } from "@/features/doctrine/statement-link";
import type { Locale } from "@/lib/locale";
import { finalStop, withoutFinalStop } from "@/lib/punctuation";

type AuthoritySectionProps = {
  page: TraditionPage;
  locale: Locale;
};

export function AuthoritySection({ page, locale }: AuthoritySectionProps) {
  const text = getUiText(locale);
  const grades = Object.keys(page.authority.grades);
  const orderedGrades = [
    ...churchGrades.filter((grade) => grades.includes(grade)),
    ...grades.filter((grade) => !churchGrades.some((known) => known === grade)),
  ];
  const rows = orderedGrades.flatMap((grade) => {
    const definition = page.authority.grades[grade];
    if (!definition?.definition) return [];
    const statements = page.teach.statements.filter((statement) =>
      statement.grades.some((line) => line.kind === "church" && line.grade === grade),
    );
    return [{ grade, definition, statements }];
  });

  return (
    <Section id="authority" title={text.doctrine.authority} subtitle={page.authority.subtitle}>
      <table className="w-full border-collapse">
        <RevealList as="tbody" className="max-sm:block">
          {rows.map(({ grade, definition, statements }, index) => (
            <tr key={grade} className={`max-sm:block ${index === rows.length - 1 ? "border-b border-rule" : ""}`}>
              <th
                scope="row"
                className="w-47.5 border-t border-rule py-4.5 pr-6 text-left align-top font-head text-grade-mobile font-normal text-ink opsz-24 max-sm:block max-sm:w-auto max-sm:border-t max-sm:pt-4 max-sm:pr-0 max-sm:pb-1 sm:text-grade"
              >
                {definition.label}
              </th>
              <td className="border-t border-rule py-4.5 text-left align-top max-sm:block max-sm:border-t-0 max-sm:pt-0 max-sm:pb-4">
                <p className="font-body text-passage-body font-light text-ink-2">
                  {withoutFinalStop(definition.definition ?? "")}{" "}
                  <SourceLinks sources={[definition.source]} parenthesized />
                  {finalStop}
                </p>
                <p className="mt-2.5 text-example text-ink-3">
                  {statements.length > 0 ? (
                    <>
                      {text.doctrine.onThisPage}{" "}
                      {statements.map((statement, position) => (
                        <Fragment key={statement.id}>
                          {position > 0 ? ", " : null}
                          <StatementLink id={statement.id}>{statement.short}</StatementLink>
                        </Fragment>
                      ))}
                      {finalStop}
                    </>
                  ) : (
                    text.doctrine.noneOnThisPage
                  )}
                </p>
              </td>
            </tr>
          ))}
        </RevealList>
      </table>
    </Section>
  );
}
