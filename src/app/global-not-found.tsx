import { Document } from "@/components/document";
import { PageMain } from "@/components/page-main";
import { StatusPage } from "@/components/status-page";
import { ActionLink } from "@/components/ui/action";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { locales, localeHref } from "@/lib/locale";
import "@/app/globals.css";

export default function GlobalNotFound() {
  return (
    <Document lang="es">
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
