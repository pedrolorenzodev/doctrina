import Link from "next/link";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { MenuButton } from "@/features/shell/menu-button";
import { LanguageSwitch } from "@/features/shell/language-switch";
import { SearchTrigger } from "@/features/shell/search-trigger";
import { ThemeToggle } from "@/features/shell/theme-toggle";
import { currentLocale } from "@/lib/current-locale";
import { localeHref } from "@/lib/locale";

export async function TopBar({ withMenu }: { withMenu: boolean }) {
  const locale = await currentLocale();
  const { site, shell, search } = getUiText(locale);
  return (
    <header className="texture-layer sticky top-0 z-40 flex h-top items-center gap-3.5 border-b border-rule bg-bg px-5">
      {withMenu ? <MenuButton label={shell.menuOpen} /> : null}
      <Link
        href={localeHref(locale)}
        className="font-head text-logo font-normal text-ink no-underline opsz-24 pointer-coarse:py-3"
      >
        {site.title}
      </Link>
      <SearchTrigger label={search.label} placeholder={search.placeholder} />
      <span className="hidden flex-1 sm:block" />
      <LanguageSwitch current={locale} label={shell.language} />
      <ThemeToggle toLight={shell.themeToLight} toDark={shell.themeToDark} />
    </header>
  );
}
