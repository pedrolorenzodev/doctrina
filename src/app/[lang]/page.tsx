import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { getHomeTimeline } from "@/content/get-home-timeline";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { HomeResume } from "@/features/home/home-resume";
import { YearsExplorer } from "@/features/home/years-explorer";
import { currentLocale } from "@/lib/current-locale";
import { localeHref } from "@/lib/locale";

export default async function Home() {
  const locale = await currentLocale();
  const { site, home } = getUiText(locale);
  const years = home.years;
  return (
    <PageMain>
      <PageHeader title={site.title} lede={home.lede} />
      <HomeResume here={localeHref(locale)} text={{ label: home.resume, detail: home.resumeDetail }} />
      <section id="years" aria-labelledby="years-title" className="title-part title-part-3 mt-14 max-w-wide">
        <h2 id="years-title" className="m-0 font-head text-title-sm leading-group font-normal text-ink opsz-60">
          {years.title}
        </h2>
        <p className="mt-2.5 mb-0 max-w-155 text-sub text-ink-3">{years.intro}</p>
        <YearsExplorer data={getHomeTimeline(locale)} text={years} />
      </section>
    </PageMain>
  );
}
