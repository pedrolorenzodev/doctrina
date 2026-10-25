import type { ReactNode } from "react";

export function PageMain({ children }: { children: ReactNode }) {
  return (
    <main
      id="content"
      tabIndex={-1}
      className="min-w-0 outline-none pt-5.5 pr-4 pb-24 pl-4 sm:pt-6.5 sm:pr-8 sm:pb-27.5 sm:pl-8 md:pt-7.5 md:pr-26 md:pb-30 md:pl-12 lg:pt-8.5 lg:pr-28 lg:pb-35 lg:pl-16"
    >
      {children}
    </main>
  );
}
