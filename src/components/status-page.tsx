import type { ReactNode } from "react";
import { PageHeader } from "@/components/page-header";

type StatusPageProps = {
  title: string;
  body: string;
  children: ReactNode;
};

export function StatusPage({ title, body, children }: StatusPageProps) {
  return (
    <section>
      <PageHeader title={title} lede={body} />
      <div className="mt-8 flex flex-wrap gap-3">{children}</div>
    </section>
  );
}
