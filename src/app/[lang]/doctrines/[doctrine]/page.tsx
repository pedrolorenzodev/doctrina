import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CitationLink } from "@/components/citation-window/citation-link";
import { CitationProvider } from "@/components/citation-window/citation-context";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { PageLink } from "@/components/ui/page-link";
import { formatYear } from "@/content/format-date";
import { getDoctrinePage, getPublishedDoctrines } from "@/content/get-doctrine-page";
import { getConnected } from "@/content/get-connected";
import { getDoctrineViews } from "@/content/get-doctrine-views";
import { getPublishedPages } from "@/content/get-tradition-page";
import { doctrineIds, type DoctrineId } from "@/content/model/ids";
import { traditionHref } from "@/content/routes";
import { doctrineName, doctrineTitle, traditionName } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { witnessViewId } from "@/content/witness-view";
import { AnswersSection } from "@/features/doctrine/answers-section";
import { CommonSection } from "@/features/doctrine/common-section";
import { ConnectedSection } from "@/features/doctrine/connected-section";
import { DoctrineFingerprint } from "@/features/doctrine/doctrine-fingerprint";
import { LinkLegend } from "@/features/doctrine/link-legend";
import { PracticeSection } from "@/features/doctrine/practice-section";
import { WitnessesSection } from "@/features/doctrine/witnesses-section";
import { EdgeRuler } from "@/features/shell/edge-ruler";
import { currentLocale } from "@/lib/current-locale";

function isDoctrine(value: string): value is DoctrineId {
  return (doctrineIds as readonly string[]).includes(value);
}

export async function generateStaticParams() {
  return getPublishedDoctrines("es").map((doctrine) => ({ lang: "es", doctrine }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/doctrines/[doctrine]">): Promise<Metadata> {
  const { doctrine } = await params;
  const locale = await currentLocale();
  if (!isDoctrine(doctrine) || !(await getDoctrinePage(doctrine, locale)))
    return { title: getUiText(locale).site.title };
  return { title: doctrineTitle(locale, doctrine) };
}

export default async function DoctrineRoute({ params }: PageProps<"/[lang]/doctrines/[doctrine]">) {
  const { doctrine } = await params;
  if (!isDoctrine(doctrine)) notFound();
  const locale = await currentLocale();
  const page = await getDoctrinePage(doctrine, locale);
  if (!page) notFound();
  const text = getUiText(locale);
  const labels = text.doctrinePage;
  const marks = page.fingerprint.marks;
  const first = marks[0];
  const last = marks[marks.length - 1];
  const items = marks.map((mark) => ({
    year: mark.year,
    yearEnd: mark.yearEnd ?? null,
    tip: `${mark.label}, ${
      mark.yearEnd ? labels.fingerprint.circa.replace("{from}", `${mark.year}–${mark.yearEnd}`) : formatYear(mark)
    }`,
  }));
  const connectedShown = getConnected(page, locale).items.length > 0;
  const targets = marks.map((mark) => {
    const witness = page.witnesses.items.find((item) => item.date.year === mark.year);
    return witness ? `w-${witness.id}` : null;
  });
  const example = getPublishedPages(locale).find((published) => published.doctrine === doctrine);
  const exampleTradition = example?.tradition ?? page.answers.items[0]?.tradition;
  const exampleLabel = labels.legend.page.replace(
    "{tradition}",
    exampleTradition ? traditionName(locale, exampleTradition).toLowerCase() : "",
  );
  return (
    <CitationProvider views={await getDoctrineViews(page, locale)} text={text.citation}>
      <PageMain>
        <Breadcrumbs
          label={text.shell.breadcrumb}
          trail={[{ label: text.shell.groupDoctrines }]}
          current={doctrineName(locale, doctrine)}
        />
        <PageHeader id="top" className="mt-5" title={doctrineName(locale, doctrine)} lede={page.lede} />
        <div className="title-part title-part-3 max-w-col">
          {/* TODO: a mark with no witness opens the doctrine's history once that page exists */}
          <DoctrineFingerprint
            items={items}
            summary={labels.fingerprint.summary
              .replace("{label}", labels.fingerprint.label)
              .replace("{count}", String(marks.length))
              .replace("{from}", String(first?.year ?? ""))
              .replace("{to}", String(last?.year ?? ""))}
            axis={labels.fingerprint.axis}
            targets={targets}
          />
        </div>
        <p className="title-part title-part-4 mt-2 max-w-col text-label text-ink-3">{labels.fingerprint.caption}</p>
        <div className="max-w-col">
          <LinkLegend
            label={labels.legend.label}
            intro={labels.legend.intro}
            middle={labels.legend.middle}
            outro={labels.legend.outro}
            citation={
              <CitationLink id={witnessViewId(page.legend.witnessId)}>{page.legend.citationLabel}</CitationLink>
            }
            page={
              <PageLink
                {...(example && exampleTradition ? { href: traditionHref(locale, doctrine, exampleTradition) } : {})}
              >
                {exampleLabel}
              </PageLink>
            }
            closeLabel={labels.legend.close}
          />
        </div>
        <CommonSection id="common" page={page} locale={locale} />
        <AnswersSection id="answers" page={page} locale={locale} />
        <WitnessesSection id="witnesses" page={page} locale={locale} />
        <PracticeSection id="practice" page={page} locale={locale} />
        <ConnectedSection id="connected" page={page} locale={locale} />
        <EdgeRuler
          label={text.shell.sections}
          sections={[
            { id: "top", label: doctrineName(locale, doctrine) },
            { id: "common", label: labels.common },
            { id: "answers", label: labels.answers },
            { id: "witnesses", label: labels.witnesses.short },
            { id: "practice", label: labels.practice.title },
            ...(connectedShown ? [{ id: "connected", label: labels.connected.title }] : []),
          ]}
        />
      </PageMain>
    </CitationProvider>
  );
}
