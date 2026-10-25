import Link from "next/link";
import { CitationLink } from "@/components/citation-window/citation-link";
import { RevealList } from "@/components/reveal-list";
import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import { PageLink } from "@/components/ui/page-link";
import { answerGradeViewId } from "@/content/get-doctrine-views";
import { getTraditionPage } from "@/content/get-tradition-page";
import type { DoctrinePage } from "@/content/model/doctrine-page";
import { plainRich, verseLink } from "@/content/page-views";
import { objectionHref, traditionHref } from "@/content/routes";
import { traditionName } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ObjectionsFold } from "@/features/doctrine/objections-fold";
import type { Locale } from "@/lib/locale";

type AnswersSectionProps = {
  id: string;
  page: DoctrinePage;
  locale: Locale;
};

type ObjectionRow = { key: string; title: string; href: string | null };

const rowClassName =
  "group/row flex w-full cursor-pointer items-baseline justify-between gap-4.5 rounded-6 px-2.5 py-2.5 text-left font-body text-row font-normal text-ink-2 no-underline transition duration-150 ease-standard hover:bg-hover hover:text-ink";

function Chevron() {
  return (
    <svg
      className="flex-none translate-y-px text-ink-3 transition duration-150 ease-standard group-hover/row:translate-x-0.5 group-hover/row:text-ink"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M3.5 1.5 7 5l-3.5 3.5" />
    </svg>
  );
}

export async function AnswersSection({ id, page, locale }: AnswersSectionProps) {
  const text = getUiText(locale);
  const labels = text.doctrinePage;
  const verse = (segments: string[]) => verseLink(segments, locale);
  const answers = await Promise.all(
    page.answers.items.map(async (answer) => {
      const published = await getTraditionPage(page.doctrine, answer.tradition, locale);
      const gradeLabel =
        "grade" in answer.grade
          ? (published?.authority.grades[answer.grade.grade]?.label ?? "")
          : answer.grade.definition.label;
      const rows = answer.objections.map((objection, index): ObjectionRow => {
        if (!("id" in objection)) return { key: `${index}`, title: plainRich(objection.title, locale), href: null };
        const target = published?.objections.items.find((item) => item.id === objection.id);
        return {
          key: objection.id,
          title: target ? plainRich(target.title, locale) : "",
          href: objectionHref(locale, page.doctrine, answer.tradition, objection.id),
        };
      });
      return {
        answer,
        gradeLabel,
        rows,
        studyHref: published ? traditionHref(locale, page.doctrine, answer.tradition) : null,
      };
    }),
  );
  // TODO: objection rows of a tradition without a page, and its «Estudiar la postura» link, lead to its pages once they exist
  return (
    <Section id={id} title={labels.answers} subtitle={page.answers.subtitle} wide>
      <RevealList as="ol" className="m-0 list-none border-b border-rule p-0">
        {answers.map(({ answer, gradeLabel, rows, studyHref }) => {
          const name = traditionName(locale, answer.tradition);
          return (
            <li
              key={answer.tradition}
              data-id={answer.tradition}
              className="answer-grid border-t border-rule pt-7.5 pb-8 max-sm:pt-6.5 max-sm:pb-7"
            >
              <div>
                <h3 className="m-0 font-head text-answer-name-mobile font-normal text-ink opsz-24 sm:text-answer-name">
                  {name}
                </h3>
                <p className="mt-4 text-life-label max-sm:mt-2">
                  <span className="mb-1 block text-label font-normal text-ink-3">{text.doctrine.authority}</span>
                  <span className="font-medium text-ink">
                    <CitationLink kind="term" id={answerGradeViewId(answer.tradition)}>
                      {gradeLabel}
                    </CitationLink>
                  </span>
                  <span className="mt-0.75 block text-ui-xs text-ink-3">
                    <RichText text={answer.grade.basis} verse={verse} />
                  </span>
                </p>
              </div>
              <div>
                <p className="m-0 font-body text-answer-mobile font-light text-ink-2 opsz-18 sm:text-answer">
                  <RichText text={answer.summary} verse={verse} />
                </p>
                <ObjectionsFold
                  id={`objections-${answer.tradition}`}
                  heading={labels.objectionsReceived}
                  showLabel={labels.showObjections}
                  hideLabel={labels.hideObjections}
                >
                  <ul className="m-0 list-none p-0">
                    {rows.map((row) => (
                      <li key={row.key} className="border-t border-rule">
                        <div className="-mx-2.5">
                          {row.href ? (
                            <Link href={row.href} className={rowClassName}>
                              <span>{row.title}</span>
                              <Chevron />
                            </Link>
                          ) : (
                            <button type="button" className={rowClassName}>
                              <span>{row.title}</span>
                              <Chevron />
                            </button>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </ObjectionsFold>
                <p className="mt-5 text-go">
                  <PageLink {...(studyHref ? { href: studyHref } : {})}>
                    {labels.study.replace("{tradition}", name.toLowerCase())}
                  </PageLink>
                </p>
              </div>
            </li>
          );
        })}
      </RevealList>
    </Section>
  );
}
