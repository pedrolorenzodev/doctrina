export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function swapLocale(pathname: string, target: Locale): string {
  return pathname.replace(/^\/[^/]+/, `/${target}`);
}

export function localeHref(locale: Locale, path: `/${string}` | "" = ""): string {
  return `/${locale}${path}`;
}

export function isHomePath(pathname: string): boolean {
  return locales.some((locale) => pathname === localeHref(locale));
}
