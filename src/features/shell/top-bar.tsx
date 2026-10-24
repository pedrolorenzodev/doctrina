import Link from "next/link";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { LanguageSwitch } from "@/features/shell/language-switch";
import { ThemeToggle } from "@/features/shell/theme-toggle";
import { currentLocale } from "@/lib/current-locale";
import { localeHref } from "@/lib/locale";

export async function TopBar() {
  const locale = await currentLocale();
  const { site, shell } = getUiText(locale);
  return (
    <header className="texture-layer sticky top-0 z-40 flex h-top items-center gap-3.5 border-b border-rule bg-bg px-5">
      <Link
        href={localeHref(locale)}
        className="font-head text-logo font-normal text-ink no-underline opsz-24 pointer-coarse:py-3"
      >
        {site.title}
      </Link>
      <span className="flex-1" />
      <LanguageSwitch current={locale} label={shell.language} />
      <ThemeToggle toLight={shell.themeToLight} toDark={shell.themeToDark} />
    </header>
  );
}
