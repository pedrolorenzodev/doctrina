import type { FatherFact } from "@/content/father-view";

export function FatherFacts({ facts }: { facts: FatherFact[] }) {
  return (
    <dl className="title-part title-part-2 m-0 mt-6.5 flex max-w-col flex-wrap gap-x-7 gap-y-3.5 p-0 sm:gap-x-11 sm:gap-y-4.5">
      {facts.map((fact) => (
        <div key={fact.label} className="min-w-0 max-sm:flex-auto max-sm:basis-2/5">
          <dt className="mb-0.75 text-label text-ink-3">{fact.label}</dt>
          <dd className="m-0 font-body text-entity text-ink">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
