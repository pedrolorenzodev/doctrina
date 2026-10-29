import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { HomeResume } from "@/features/home/home-resume";
import { currentLocale } from "@/lib/current-locale";
import { localeHref } from "@/lib/locale";

export default async function Home() {
  const locale = await currentLocale();
  const { site, home } = getUiText(locale);
  return (
    <PageMain>
      <PageHeader title={site.title} lede={home.lede} />
      <HomeResume here={localeHref(locale)} text={{ label: home.resume, detail: home.resumeDetail }} />
    </PageMain>
  );
}
