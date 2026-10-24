import type { ReactNode } from "react";

export function PageMain({ children }: { children: ReactNode }) {
  return <main className="box-content max-w-col px-4 py-8 sm:px-16">{children}</main>;
}
