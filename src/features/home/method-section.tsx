import type { ReactNode } from "react";
import { CitationLink } from "@/components/citation-window/citation-link";
import { RevealList } from "@/components/reveal-list";
import { Section } from "@/components/section";

type Plain = { title: string; text: string };
type Cited = { title: string; before: string; link: string; after: string };

type MethodText = {
  title: string;
  intro: string;
  words: Cited;
  sources: Plain;
  fathers: Cited;
  open: Plain;
};

type MethodSectionProps = { text: MethodText; councilView: string; witnessView: string };

function Row({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="method-row border-t border-rule pt-5.5 pb-6 last:border-b">
      <h3 className="m-0 font-head text-h3 font-normal text-ink">{title}</h3>
      <p className="m-0 max-w-150 font-body text-passage-body font-light text-ink-2">{children}</p>
    </div>
  );
}

export function MethodSection({ text, councilView, witnessView }: MethodSectionProps) {
  return (
    <Section id="method" title={text.title}>
      <p className="m-0 max-w-155 text-sub text-ink-3">{text.intro}</p>
      <RevealList className="mt-7.5">
        <Row title={text.words.title}>
          {text.words.before}
          <CitationLink id={councilView}>{text.words.link}</CitationLink>
          {text.words.after}
        </Row>
        <Row title={text.sources.title}>{text.sources.text}</Row>
        <Row title={text.fathers.title}>
          {text.fathers.before}
          <CitationLink id={witnessView}>{text.fathers.link}</CitationLink>
          {text.fathers.after}
        </Row>
        <Row title={text.open.title}>{text.open.text}</Row>
      </RevealList>
    </Section>
  );
}
