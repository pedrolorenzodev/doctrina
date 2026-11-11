import { PageLink } from "@/components/ui/page-link";
import type { SourceEntry } from "@/content/get-sources";
import type { UiText } from "@/content/ui-text/types";

type SourceItemProps = {
  source: SourceEntry;
  text: UiText["sourcesPage"];
  hot: boolean;
  onHot: (id: string | null) => void;
};

export function SourceItem({ source, text, hot, onHot }: SourceItemProps) {
  return (
    <li
      data-id={source.id}
      data-source={source.id}
      data-hot={hot || undefined}
      onMouseEnter={() => onHot(source.id)}
      onMouseLeave={() => onHot(null)}
      onFocus={() => onHot(source.id)}
      onBlur={() => onHot(null)}
      className="group/source wrap-break-word break-inside-avoid-column border-t border-rule px-3 py-4 transition-colors duration-150 ease-standard data-hot:bg-hover"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 lang={source.titleLang} className="m-0 min-w-0 font-body text-source-name font-medium text-ink">
          {source.title}
        </h2>
        <p className="date-mark m-0 max-w-1/3 shrink-0 text-right text-ui-sm font-medium text-ink tabular-nums">
          <span className="min-w-0">{source.date || text.undated}</span>
        </p>
      </div>
      {source.author ? <p className="m-0 mt-1 text-ui-sm text-ink-3">{source.author}</p> : null}
      <p className="m-0 mt-1 text-label text-ink-3">
        {(source.documentKind ? text.documentKinds[source.documentKind as keyof typeof text.documentKinds] : null) ??
          text.kinds[source.kind]}
      </p>
      <dl className="m-0 mt-3 text-ui-sm leading-normal text-ink-2">
        <dt className="sr-only">{text.editions}</dt>
        {source.editions.map((edition) => (
          <dd key={edition.bibliography} className="m-0 mt-2 first-of-type:mt-0">
            <span>{edition.bibliography}</span>
            <span className="mt-0.5 block text-label text-ink-3">
              {text.licences[edition.licence as keyof typeof text.licences] ?? text.licences.unconfirmed}
            </span>
            {edition.href ? (
              <span className="mt-1 block">
                <PageLink href={edition.href} external>
                  {text.original}
                </PageLink>
              </span>
            ) : null}
          </dd>
        ))}
        {source.editions.length === 0 ? <dd className="m-0 text-ink-3">{text.missingEdition}</dd> : null}
      </dl>
      {source.reader ? (
        <p className="m-0 mt-3 text-ui-sm">
          <PageLink href={source.reader}>{text.read}</PageLink>
        </p>
      ) : null}
    </li>
  );
}
