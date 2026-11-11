import type { Metadata } from "next";
import { Document } from "@/components/document";
import { PageMain } from "@/components/page-main";
import { StatusPage } from "@/components/status-page";
import { TitleEntrance } from "@/features/shell/title-entrance";
import { ActionLink } from "@/components/ui/action";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { locales, localeHref } from "@doctrina/core/locale";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: locales.map((locale) => getUiText(locale).notFound.title).join(" · "),
};

export default function GlobalNotFound() {
  return (
    <Document lang="es">
      <TitleEntrance />
      <PageMain>
        {locales.map((locale) => {
          const { title, body, home } = getUiText(locale).notFound;
          return (
            <div key={locale} lang={locale} className="mb-16">
              <StatusPage title={title} body={body}>
                <ActionLink href={localeHref(locale)}>{home}</ActionLink>
              </StatusPage>
            </div>
          );
        })}
      </PageMain>
    </Document>
  );
}
