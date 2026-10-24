import { PageHeader } from "@/components/page-header";
import { sampleHeader } from "@/content/sample-header";

export default function Home() {
  return (
    <main className="box-content max-w-col px-4 py-8 sm:px-16">
      <PageHeader title={sampleHeader.title} lede={sampleHeader.lede} />
    </main>
  );
}
