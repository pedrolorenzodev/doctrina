import Link from "next/link";
import type { SenseView } from "@/content/get-word-page";

const plus = "+";

type SensesListProps = {
  senses: SenseView[];
  tag: string;
  senseLabel: string;
  placesLabel: string;
  placesOneLabel: string;
};

export function SensesList({ senses, tag, senseLabel, placesLabel, placesOneLabel }: SensesListProps) {
  return (
    <ol className="m-0 mt-6.5 max-w-190 list-none p-0">
      {senses.map((sense, index) => (
        <li key={`${sense.n}-${index}`} className="border-t border-rule pt-5 pb-4.5 last:border-b last:border-rule">
          <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
            {/* TODO: a plain-language title for each sense; the lexicon gives only its number */}
            {sense.n === "" ? null : (
              <h3 className="m-0 font-head text-section-heading font-normal text-ink opsz-24">
                {senseLabel.replace("{n}", sense.n)}
              </h3>
            )}
            <span className="inline-block rounded-5 border border-rule-2 px-2 py-px text-label leading-normal whitespace-nowrap text-ink-3">
              {tag}
            </span>
          </div>
          <p lang="en" className="m-0 mt-2.5 max-w-160 font-body text-definition font-light text-ink-2">
            {sense.text}
          </p>
          {sense.example ? (
            <blockquote className="m-0 mt-3.5 max-w-160 border-l-2 border-rule-2 pl-4">
              <p className="m-0 font-head text-quote-window font-light text-ink italic opsz-24 guillemets">
                {sense.example.text}
              </p>
              <Link href={sense.example.href} className="link-page hit-44 mt-1.5 inline-block text-ui-sm">
                {sense.example.reference}
              </Link>
            </blockquote>
          ) : null}
          {sense.places.length > 0 ? (
            <details className="group/more mt-3 text-btn text-ink-3">
              <summary className="inline-flex min-h-8 cursor-pointer list-none items-center gap-2 rounded-4 py-1.25 font-medium text-ink-2 hover:text-ink [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden="true"
                  className="inline-block w-3 text-center text-ink-3 transition-transform duration-200 ease-standard group-open/more:rotate-45"
                >
                  {plus}
                </span>
                {sense.places.length === 1 ? placesOneLabel : placesLabel.replace("{n}", String(sense.places.length))}
              </summary>
              <p className="m-0 mt-1 text-ui-sm leading-loose text-ink-2">
                {sense.places.map((place, at) => (
                  <span key={place.href}>
                    {at > 0 ? ", " : ""}
                    <Link href={place.href} className="link-page whitespace-nowrap">
                      {place.reference}
                    </Link>
                  </span>
                ))}
              </p>
            </details>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
