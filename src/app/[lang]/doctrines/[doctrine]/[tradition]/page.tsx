import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { doctrineIds, traditionIds, type DoctrineId, type TraditionId } from "@/content/model/ids";
import { getPublishedPages, getTraditionPage } from "@/content/get-tradition-page";
import { currentLocale } from "@/lib/current-locale";

function isDoctrine(value: string): value is DoctrineId {
  return (doctrineIds as readonly string[]).includes(value);
}

function isTradition(value: string): value is TraditionId {
  return (traditionIds as readonly string[]).includes(value);
}

export async function generateStaticParams() {
  return getPublishedPages("es").map(({ doctrine, tradition }) => ({ lang: "es", doctrine, tradition }));
}

export default async function TraditionRoute({ params }: PageProps<"/[lang]/doctrines/[doctrine]/[tradition]">) {
  const { doctrine, tradition } = await params;
  if (!isDoctrine(doctrine) || !isTradition(tradition)) notFound();
  const page = await getTraditionPage(doctrine, tradition, await currentLocale());
  if (!page) notFound();
  return (
    <PageMain>
      <PageHeader title={page.title} lede={page.lede} />
    </PageMain>
  );
}
