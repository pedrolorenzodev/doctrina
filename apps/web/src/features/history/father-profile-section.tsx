import { Section } from "@/components/section";
import type { FatherFact } from "@/content/father-view";

type FatherProfileSectionProps = {
  id: string;
  title: string;
  summary: string;
  facts: FatherFact[];
};

export function FatherProfileSection({ id, title, summary, facts }: FatherProfileSectionProps) {
  return (
    <Section id={id} title={title} wide>
      <div className="profile-box">
        <div className="profile-grid">
          <p className="m-0 font-body text-prose-mobile font-light text-ink-2 opsz-18 sm:text-prose">{summary}</p>
          <dl className="profile-facts">
            {facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`profile-fact border-t border-rule py-2.5 ${index === facts.length - 1 ? "border-b" : ""}`}
              >
                <dt className="pt-0.5 text-ui-xs text-ink-3">{fact.label}</dt>
                <dd className="m-0 font-body text-fact-row text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
