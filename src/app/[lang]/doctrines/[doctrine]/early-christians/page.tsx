import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { doctrineCrumb } from "@/content/doctrine-crumb";
import { getDoctrinePage, getPublishedDoctrines } from "@/content/get-doctrine-page";
import { doctrineIds, type DoctrineId } from "@/content/model/ids";
import { doctrineSubject, doctrineTitle } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { CriterionFold } from "@/features/doctrine/criterion-fold";
import { EarlyChristiansList } from "@/features/doctrine/early-christians-list";
import { currentLocale } from "@/lib/current-locale";

function isDoctrine(value: string): value is DoctrineId {
  return (doctrineIds as readonly string[]).includes(value);
}

export async function generateStaticParams() {
  return getPublishedDoctrines("es").map((doctrine) => ({ lang: "es", doctrine }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/doctrines/[doctrine]/early-christians">): Promise<Metadata> {
  const { doctrine } = await params;
  const locale = await currentLocale();
  const { site, doctrinePage } = getUiText(locale);
  if (!isDoctrine(doctrine) || !(await getDoctrinePage(doctrine, locale))) return { title: site.title };
  return { title: `${doctrineTitle(locale, doctrine)} · ${doctrinePage.witnesses.short}` };
}

export default async function EarlyChristiansRoute({
  params,
}: PageProps<"/[lang]/doctrines/[doctrine]/early-christians">) {
  const { doctrine } = await params;
  if (!isDoctrine(doctrine)) notFound();
  const locale = await currentLocale();
  const page = await getDoctrinePage(doctrine, locale);
  if (!page) notFound();
  const text = getUiText(locale);
  const labels = text.earlyChristians;
  const subject = doctrineSubject(locale, doctrine);
  return (
    <PageMain>
      <Breadcrumbs
        label={text.shell.breadcrumb}
        trail={[{ label: text.shell.groupDoctrines }, doctrineCrumb(locale, doctrine)]}
        current={text.doctrinePage.witnesses.title}
      />
      <PageHeader
        className="mt-5"
        size="objection"
        title={labels.title.replace("{subject}", subject)}
        lede={labels.lede.replaceAll("{subject}", subject)}
      />
      <CriterionFold id="criterion" label={labels.criterion.label}>
        <p className="m-0 text-note text-ink-3">{labels.criterion.body}</p>
      </CriterionFold>
      <div className="max-w-entries">
        <EarlyChristiansList witnesses={page.witnesses.items} locale={locale} readLabel={labels.read} />
      </div>
    </PageMain>
  );
}
