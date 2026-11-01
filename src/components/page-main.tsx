import type { ReactNode } from "react";
import { RailMorph } from "@/components/rail-morph";

type PageMainProps = { children: ReactNode; wideGutter?: boolean; rail?: boolean };

export function PageMain({ children, wideGutter = false, rail = false }: PageMainProps) {
  return (
    <main
      id="content"
      tabIndex={-1}
      data-rail-page={rail ? "" : undefined}
      className={`${rail ? "rail-page " : ""}min-w-0 outline-none pt-5.5 pr-4 pb-24 pl-4 sm:pt-6.5 sm:pr-8 sm:pb-27.5 sm:pl-8 md:pt-7.5 ${wideGutter ? "md:pr-18" : "md:pr-26"} md:pb-30 ${wideGutter ? "md:pl-18" : "md:pl-12"} lg:pt-8.5 ${wideGutter ? "lg:pr-22" : "lg:pr-28"} lg:pb-35 ${wideGutter ? "lg:pl-22" : "lg:pl-16"}`}
    >
      {children}
      {rail ? <RailMorph /> : null}
    </main>
  );
}
