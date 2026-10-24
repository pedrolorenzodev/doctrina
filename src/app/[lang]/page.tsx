import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { sampleHeader } from "@/content/sample-header";
import { currentLocale } from "@/lib/current-locale";

export default async function Home() {
  const { title, lede } = sampleHeader[await currentLocale()];
  return (
    <PageMain>
      <PageHeader title={title} lede={lede} />
    </PageMain>
  );
}
