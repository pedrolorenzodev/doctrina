import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="mt-section scroll-mt-offset">
      <div className="max-w-col">
        <h2 className="mb-2.5 font-head text-h2-mobile font-light text-ink opsz-60 sm:text-h2">{title}</h2>
        {subtitle ? <p className="mb-6.5 max-w-155 text-sub text-ink-3">{subtitle}</p> : null}
        {children}
      </div>
    </section>
  );
}
