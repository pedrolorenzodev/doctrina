import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doctrina",
  description:
    "A bilingual deep-study resource on Christian doctrine: what each tradition believes, why, and every primary source.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={fontVariables}>
      <body className="texture-page bg-bg font-ui text-ui-base text-ink antialiased">
        <div className="relative z-1">{children}</div>
      </body>
    </html>
  );
}
