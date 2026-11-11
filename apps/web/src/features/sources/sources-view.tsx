import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { getSources } from "@/content/get-sources";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { SourcesCatalogue } from "@/features/sources/sources-catalogue";
import { currentLocale } from "@/lib/current-locale";

export async function SourcesView() {
  const locale = await currentLocale();
  const text = getUiText(locale);
  const labels = text.sourcesPage;
  return (
    <PageMain rail>
      <Breadcrumbs
        label={text.shell.breadcrumb}
        trail={[{ label: text.shell.tree.reference }]}
        current={labels.title}
      />
      <PageHeader id="top" className="mt-10" title={labels.title} lede={labels.lede} />
      <p className="m-0 mt-4 text-label text-ink-3">{labels.review}</p>
      <SourcesCatalogue sources={await getSources(locale)} text={labels} />
    </PageMain>
  );
}
