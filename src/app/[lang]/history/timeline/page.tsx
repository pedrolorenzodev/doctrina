import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { buildGeneralTimeline } from "@/content/get-general-timeline";
import { getPublishedFathers } from "@/content/get-fathers";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { GeneralTimeline } from "@/features/history/general-timeline";
import { currentLocale } from "@/lib/current-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  return { title: getUiText(locale).generalTimeline.title };
}

export default async function TimelineRoute() {
  const locale = await currentLocale();
  const text = getUiText(locale);
  const labels = text.generalTimeline;
  const timeline = buildGeneralTimeline(getPublishedFathers(locale), locale, text);
  return (
    <PageMain>
      {/* TODO: «Historia» leads to its index page once it exists */}
      <Breadcrumbs label={text.shell.breadcrumb} trail={[{ label: text.shell.tree.history }]} current={labels.title} />
      <PageHeader id="top" className="mt-9" title={labels.title} />
      <p className="title-part title-part-2 mt-2.5 mb-0 max-w-160 text-sub text-ink-3">
        {labels.lede.replace("{from}", String(timeline.from)).replace("{to}", String(timeline.to))}
      </p>
      <section aria-label={labels.title} className="mt-8.5">
        <GeneralTimeline
          from={timeline.from}
          to={timeline.to}
          marks={timeline.marks}
          entries={timeline.entries}
          text={{ ...labels, diedMark: text.timeline.diedMark }}
        />
      </section>
    </PageMain>
  );
}
