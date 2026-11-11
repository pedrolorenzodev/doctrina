"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { PageMain } from "@/components/page-main";
import { StatusPage } from "@/components/status-page";
import { ActionButton, ActionLink } from "@/components/ui/action";
import { errorText } from "@/content/ui-text/error-text";
import { defaultLocale, isLocale, localeHref } from "@/lib/locale";

type ErrorProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

export default function ErrorBoundary({ error, retry }: ErrorProps) {
  const { lang } = useParams<{ lang: string }>();
  const locale = isLocale(lang) ? lang : defaultLocale;
  const { title, body, retry: retryLabel, home } = errorText[locale];

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageMain>
      <StatusPage title={title} body={body}>
        <ActionButton onClick={retry}>{retryLabel}</ActionButton>
        <ActionLink href={localeHref(locale)}>{home}</ActionLink>
      </StatusPage>
    </PageMain>
  );
}
