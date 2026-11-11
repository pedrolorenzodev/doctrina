import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { getLanguageAvailability } from "@/content/get-language-availability";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { MenuButton } from "@/features/shell/menu-button";
import { LanguageSwitch } from "@/features/shell/language-switch";
import { SearchTrigger } from "@/features/shell/search-trigger";
import { ThemeToggle } from "@/features/shell/theme-toggle";
import { currentLocale } from "@/lib/current-locale";
import { localeHref } from "@doctrina/core/locale";

export async function TopBar({ withMenu }: { withMenu: boolean }) {
  const locale = await currentLocale();
  const { site, shell, search } = getUiText(locale);
  return (
    <header className="texture-layer sticky top-0 z-40 flex h-top items-center gap-3.5 border-b border-rule bg-bg px-5">
      {withMenu ? <MenuButton label={shell.menuOpen} /> : null}
      <Link
        href={localeHref(locale)}
        className="inline-flex items-baseline gap-2.25 font-head text-logo font-normal text-ink no-underline opsz-24 pointer-coarse:py-3"
      >
        <BrandMark />
        {site.title}
      </Link>
      <SearchTrigger placeholder={search.placeholder} tiers={search.triggerShort} />
      <span className="hidden flex-1 sm:block" />
      <LanguageSwitch
        current={locale}
        label={shell.language}
        unavailable={shell.languageUnavailable}
        availability={getLanguageAvailability()}
      />
      <ThemeToggle toLight={shell.themeToLight} toDark={shell.themeToDark} />
    </header>
  );
}
