import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { Section } from "@/components/section";
import { getPublishedDoctrines } from "@/content/get-doctrine-page";
import {
  getGlossaryTerm,
  getGlossaryTerms,
  glossaryLocales,
  glossarySlug,
  type GlossaryEntry,
  type GlossaryTradition,
} from "@/content/get-glossary";
import { doctrineHref, glossaryHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { HistoryLinkList } from "@/features/history/history-link-list";
import { currentLocale } from "@/lib/current-locale";

const siteTraditions: GlossaryTradition[] = ["catholic", "orthodox", "lutheran", "reformed", "baptist"];

const unquoted = (quote: string) => quote.replace(/^[«"]|[»"]$/g, "");

export async function generateStaticParams() {
  return glossaryLocales.flatMap((lang) => getGlossaryTerms().map((term) => ({ lang, term: glossarySlug(term) })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/glossary/[term]">): Promise<Metadata> {
  const { term: slug } = await params;
  const locale = await currentLocale();
  const term = getGlossaryTerm(slug);
  const text = getUiText(locale);
  return { title: term ? `${term.name} · ${text.glossary.title}` : text.glossary.title };
}

export default async function GlossaryTermRoute({ params }: PageProps<"/[lang]/glossary/[term]">) {
  const { term: slug } = await params;
  const locale = await currentLocale();
  const term = getGlossaryTerm(slug);
  if (!term || !glossaryLocales.includes(locale)) notFound();
  const text = getUiText(locale);
  const labels = text.glossary;
  const published = getPublishedDoctrines(locale);
  const defined = new Set(term.traditions.map((entry) => entry.tradition));
  const silent = siteTraditions.filter((tradition) => !defined.has(tradition));
  const names = silent.map((tradition) =>
    locale === "es" ? labels.traditions[tradition].toLowerCase() : labels.traditions[tradition],
  );
  const joined = names.length > 1 ? `${names.slice(0, -1).join(", ")}${labels.and}${names.at(-1)}` : names[0];
  const othersNote = joined
    ? (names.length > 1 ? labels.othersMany : labels.othersOne).replace("{list}", joined)
    : null;
  const pick = (entries: GlossaryEntry[]) =>
    entries.find((entry) => entry.lang === locale && entry.quote) ?? entries.find((entry) => entry.quote) ?? null;
  const sourceOf = (entries: GlossaryEntry[], chosen: GlossaryEntry) =>
    chosen.source ?? entries.find((entry) => entry.source)?.source ?? null;

  return (
    <PageMain>
      <Breadcrumbs
        label={text.shell.breadcrumb}
        trail={[{ label: text.shell.tree.reference }, { label: labels.title, href: glossaryHref(locale) }]}
        current={term.name}
      />
      <PageHeader id="top" className="mt-10" title={term.name} />
      <p className="title-part title-part-2 mt-1 mb-0 text-reader-note text-ink-3">{labels.draft}</p>
      {term.doctrines.length > 0 ? (
        <p className="title-part title-part-3 mt-4 mb-0 text-ui-sm text-ink-3">
          {labels.usedIn}{" "}
          {term.doctrines.map((doctrine, index) => (
            <span key={doctrine}>
              {index > 0 ? " · " : null}
              <span className="text-ink">{labels.doctrines[doctrine]}</span>
            </span>
          ))}
        </p>
      ) : null}
      <div className="mt-12 max-w-reader border-b border-rule">
        {term.traditions.map(({ tradition, entries }) => {
          const chosen = pick(entries);
          const fallback = entries[0];
          return (
            <section key={tradition} className="border-t border-rule pt-5 pb-5.5">
              <p className="m-0 mb-2 text-ui-sm font-medium text-ink">{labels.traditions[tradition]}</p>
              {chosen?.quote ? (
                <>
                  <blockquote
                    lang={chosen.lang === "en" ? "en" : undefined}
                    className="m-0 font-head text-quote font-light text-ink italic guillemets opsz-24"
                  >
                    {unquoted(chosen.quote)}
                  </blockquote>
                  {sourceOf(entries, chosen) ? (
                    <p className="m-0 mt-2 text-meta text-ink-3">{sourceOf(entries, chosen)}</p>
                  ) : null}
                  {chosen.aiTranslated ? <p className="m-0 mt-1 text-ui-2xs text-ink-3">{labels.ai}</p> : null}
                  {chosen.lang === "en" && locale === "es" ? (
                    <p className="m-0 mt-1 text-ui-2xs text-ink-3">{labels.english}</p>
                  ) : null}
                </>
              ) : (
                <p className="m-0 font-body text-reader-note text-ink-3">
                  {fallback?.notFound ? labels.notFound : fallback?.text}
                </p>
              )}
            </section>
          );
        })}
      </div>
      {othersNote ? <p className="mt-4 mb-0 max-w-reader text-ui-sm text-ink-3">{othersNote}</p> : null}
      {term.doctrines.length > 0 ? (
        <Section id="where" title={labels.where}>
          <HistoryLinkList
            items={term.doctrines.map((doctrine) => ({
              id: doctrine,
              label: labels.doctrines[doctrine],
              ...(published.includes(doctrine) ? { href: doctrineHref(locale, doctrine) } : {}),
            }))}
          />
        </Section>
      ) : null}
    </PageMain>
  );
}
