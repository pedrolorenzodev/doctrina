"use client";

import { usePathname } from "next/navigation";
import { swapBibleLocale } from "@/content/bible-routes";
import { swapHistoryLocale } from "@/content/routes";
import { locales, swapLocale, type Locale } from "@/lib/locale";

type LanguageSwitchProps = {
  current: Locale;
  label: string;
};

const itemClassName =
  "inline-flex items-center justify-center rounded-5 px-2 py-1.75 pointer-coarse:min-h-11 pointer-coarse:min-w-11";

export function LanguageSwitch({ current, label }: LanguageSwitchProps) {
  const pathname = usePathname();
  return (
    <div role="group" aria-label={label} className="hidden gap-0.5 text-ui-xs sm:flex">
      {locales.map((locale) =>
        locale === current ? (
          <span key={locale} aria-current="true" lang={locale} className={`${itemClassName} font-medium text-ink`}>
            {locale.toUpperCase()}
          </span>
        ) : (
          // guard: a plain link on purpose, a soft navigation between locales drops the data-theme attribute (GOTCHAS)
          <a
            key={locale}
            href={
              swapBibleLocale(pathname, current, locale) ??
              swapHistoryLocale(pathname, current, locale) ??
              swapLocale(pathname, locale)
            }
            hrefLang={locale}
            lang={locale}
            className={`${itemClassName} text-ink-3 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink`}
          >
            {locale.toUpperCase()}
          </a>
        ),
      )}
    </div>
  );
}
