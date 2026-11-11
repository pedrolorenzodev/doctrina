import { CitationLink } from "@/components/citation-window/citation-link";
import { RevealList } from "@/components/reveal-list";
import { Section } from "@/components/section";
import type { DoctrinePage, PracticeCell } from "@/content/model/doctrine-page";
import { traditionName } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { closeParenthesis, finalStop, openParenthesis } from "@/lib/punctuation";
import type { Locale } from "@/lib/locale";

type PracticeSectionProps = {
  id: string;
  page: DoctrinePage;
  locale: Locale;
};

function Cell({ cell }: { cell: PracticeCell }) {
  const [source] = cell.sources;
  const first = source?.citations[0];
  return (
    <>
      {cell.text}{" "}
      <span className="text-ink-3">
        {openParenthesis}
        {source && first ? (
          <CitationLink kind="source" id={first}>
            {source.label}
          </CitationLink>
        ) : (
          (source?.label ?? "")
        )}
        {closeParenthesis}
      </span>
      {finalStop}
    </>
  );
}

export function PracticeSection({ id, page, locale }: PracticeSectionProps) {
  const text = getUiText(locale).doctrinePage.practice;
  const traditions = page.answers.items.map((answer) => answer.tradition);
  return (
    <Section id={id} title={text.title} subtitle={page.practice.subtitle} wide>
      <div className="mt-1 practice-wide">
        <table className="w-full table-fixed border-collapse">
          <caption className="sr-only">{text.caption}</caption>
          <thead>
            <tr>
              <th scope="col" className="w-31 border-b border-rule-2 pr-3.5 pb-2.5 pl-0 text-left">
                <span className="sr-only">{text.aspect}</span>
              </th>
              {traditions.map((tradition) => (
                <th
                  key={tradition}
                  scope="col"
                  className="border-b border-rule-2 px-3.5 pb-2.5 text-left text-btn font-medium text-ink last:pr-0"
                >
                  {traditionName(locale, tradition)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {page.practice.aspects.map((aspect) => (
              <tr key={aspect.id} className="transition-colors duration-150 ease-standard hover:bg-hover">
                <th
                  scope="row"
                  className="w-31 border-b border-rule py-4 pr-3.5 pl-0 text-left align-top text-ui-xs font-medium text-ink-3"
                >
                  {aspect.label}
                </th>
                {traditions.map((tradition) => {
                  const cell = aspect.cells[tradition];
                  return (
                    <td
                      key={tradition}
                      className="border-b border-rule px-3.5 py-4 align-top font-body text-practice font-light text-ink-2 last:pr-0"
                    >
                      {cell ? <Cell cell={cell} /> : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="practice-narrow">
        {page.practice.aspects.map((aspect) => (
          <div key={aspect.id} className="mt-9 first:mt-0">
            <h3 className="m-0 mb-1 font-head text-practice-aspect font-normal text-ink opsz-24">{aspect.label}</h3>
            <RevealList as="ul" className="m-0 list-none border-b border-rule p-0">
              {traditions.map((tradition) => {
                const cell = aspect.cells[tradition];
                return cell ? (
                  <li key={tradition} className="border-t border-rule pt-3 pb-3.25">
                    <span className="mb-0.75 block text-ui-xs font-medium text-ink">
                      {traditionName(locale, tradition)}
                    </span>
                    <p className="m-0 font-body text-synthesis font-light text-ink-2">
                      <Cell cell={cell} />
                    </p>
                  </li>
                ) : null;
              })}
            </RevealList>
          </div>
        ))}
      </div>
    </Section>
  );
}
