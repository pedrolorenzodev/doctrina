"use client";

import { Document } from "@/components/document";
import { PageMain } from "@/components/page-main";
import { StatusPage } from "@/components/status-page";
import { ActionButton } from "@/components/ui/action";
import { errorText } from "@/content/ui-text/error-text";
import { locales } from "@/lib/locale";
import "@/app/globals.css";

export default function GlobalError({ retry }: { retry: () => void }) {
  return (
    <Document lang="es">
      <PageMain>
        {locales.map((locale) => (
          <div key={locale} lang={locale} className="mb-16">
            <StatusPage title={errorText[locale].title} body={errorText[locale].body}>
              <ActionButton onClick={retry}>{errorText[locale].retry}</ActionButton>
            </StatusPage>
          </div>
        ))}
      </PageMain>
    </Document>
  );
}
