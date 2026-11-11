"use client";

import { usePathname } from "next/navigation";
import { PressTooltip } from "@/components/ui/press-tooltip";
import { languageSwitchHref, type LanguageAvailability } from "@/content/language-switch";
import { locales, type Locale } from "@/lib/locale";
import { saveTreeCarry } from "@/lib/tree-carry";

type LanguageSwitchProps = {
  current: Locale;
  label: string;
  unavailable: string;
  availability: LanguageAvailability;
};

const itemClassName =
  "inline-flex items-center justify-center rounded-5 px-2 py-1.75 pointer-coarse:min-h-11 pointer-coarse:min-w-11";

export function LanguageSwitch({ current, label, unavailable, availability }: LanguageSwitchProps) {
  const pathname = usePathname();
  return (
    <div role="group" aria-label={label} className="hidden gap-0.5 text-ui-xs sm:flex">
      {locales.map((locale) => {
        if (locale === current)
          return (
            <span key={locale} aria-current="true" lang={locale} className={`${itemClassName} font-medium text-ink`}>
              {locale.toUpperCase()}
            </span>
          );
        const href = languageSwitchHref(pathname, current, locale, availability);
        return href ? (
          // guard: a plain link on purpose, a soft navigation between locales drops the data-theme attribute (GOTCHAS)
          <a
            key={locale}
            href={href}
            onClick={(event) => saveTreeCarry(event.currentTarget.pathname)}
            hrefLang={locale}
            lang={locale}
            className={`${itemClassName} text-ink-3 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink`}
          >
            {locale.toUpperCase()}
          </a>
        ) : (
          <PressTooltip key={locale} label={unavailable} align="end">
            <button
              type="button"
              aria-disabled="true"
              lang={locale}
              className={`${itemClassName} cursor-default border-0 bg-transparent text-ink-3 opacity-60`}
            >
              {locale.toUpperCase()}
            </button>
          </PressTooltip>
        );
      })}
    </div>
  );
}
