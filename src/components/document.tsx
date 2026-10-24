import type { ReactNode } from "react";
import { ThemeScript } from "@/components/theme-script";
import { fontVariables } from "@/lib/fonts";
import type { Locale } from "@/lib/locale";

type DocumentProps = {
  lang: Locale;
  children: ReactNode;
};

export function Document({ lang, children }: DocumentProps) {
  return (
    <html lang={lang} className={fontVariables} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element -- the app router has no next/head; the theme script must sit in the document head */}
      <head>
        <ThemeScript />
      </head>
      <body className="texture-page bg-bg font-ui text-ui-base text-ink antialiased">
        <div className="relative z-1">{children}</div>
      </body>
    </html>
  );
}
