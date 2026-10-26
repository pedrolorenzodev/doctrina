import type { FatherDivision } from "@/content/get-father-works";

type FatherTextProps = {
  divisions: FatherDivision[];
  lang: string;
  prologue: string;
};

const anchorOf = (locator: string) => `d-${locator.replace(/[^a-zA-Z0-9.-]+/g, "-")}`;

export function FatherText({ divisions, lang, prologue }: FatherTextProps) {
  return (
    <div lang={lang} data-father-text="" className="relative mt-8.5 max-w-col">
      {divisions.map((division) => (
        <div
          key={division.ordinal}
          id={anchorOf(division.locator)}
          className="relative -mx-3 mb-1.5 rounded-6 px-3 py-2 transition-colors duration-1200 data-arrived:shadow-current data-marked:bg-mark data-marked:duration-200 data-selected:bg-accent-weak"
        >
          <button
            type="button"
            data-division-open={anchorOf(division.locator)}
            data-locator={division.locator}
            className="mb-1 block cursor-pointer rounded-3 font-ui text-division text-ink-3 tabular-nums transition-colors duration-150 ease-standard hover:text-ink hover:underline md:absolute md:top-3 md:-left-16.5 md:w-14 md:text-right"
          >
            {division.locator === "prologue" ? prologue : division.locator}
          </button>
          {division.heading ? (
            <p className="m-0 mb-1 font-ui text-ui-xs font-medium text-ink-3">{division.heading}</p>
          ) : null}
          <p className="m-0 font-body text-reader font-light text-ink-2">{division.text}</p>
        </div>
      ))}
    </div>
  );
}
