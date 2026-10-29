"use client";

import { useCallback, useEffect, useState } from "react";
import { ActionLink } from "@/components/ui/action";
import { MoreButton } from "@/components/ui/more-button";
import { SlidingTabs } from "@/components/ui/sliding-tabs";
import type { PassagesData } from "@/content/get-passages";
import type { PassagesPageText } from "@/content/model/page";
import type { UiText } from "@/content/ui-text/types";
import { ApologistLayer } from "@/features/passages/apologist-layer";
import { PassageRuler } from "@/features/passages/passage-ruler";
import { ReadingText } from "@/features/passages/reading-text";
import { VerseBlocks } from "@/features/passages/verse-blocks";
import { locate } from "@/features/passages/word-text";
import { useChosenTranslation } from "@/lib/use-chosen-translation";
import { chooseTranslation } from "@/lib/translation-choice";

type PassagesViewProps = {
  data: PassagesData;
  defaultEdition: string;
  labels: PassagesPageText;
  text: UiText["doctrine"]["passagesPage"];
};

type Layer = "official" | "apologists";

const boxClassName =
  "block cursor-pointer rounded-6 border border-rule px-4.5 pt-3.5 pb-3.75 text-left text-ink transition-colors duration-150 ease-standard hover:border-rule-2 hover:bg-hover";

const chevron = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 3l4 4-4 4" />
  </svg>
);

function indexFromHash(data: PassagesData): number {
  const hash = decodeURIComponent(location.hash.slice(1));
  return Math.max(
    0,
    data.entries.findIndex((entry) => entry.id === hash),
  );
}

export function PassagesView({ data, defaultEdition, labels, text }: PassagesViewProps) {
  const { entries, editions } = data;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "back" | null>(null);
  const [layer, setLayer] = useState<Layer>("official");
  const [phrase, setPhrase] = useState<string | null>(null);
  const [parallelsOpen, setParallelsOpen] = useState(false);
  const [change, setChange] = useState<{ from: string | null; key: number; crossLanguage: boolean }>({
    from: null,
    key: 0,
    crossLanguage: false,
  });
  const edition = useChosenTranslation(
    editions.map((candidate) => candidate.id),
    defaultEdition,
  );

  useEffect(() => {
    const read = () => setIndex(indexFromHash(data));
    read();
    addEventListener("hashchange", read);
    return () => removeEventListener("hashchange", read);
  }, [data]);

  const entry = entries[index]!;
  const hasApologists = entry.apologists !== null;
  const shownLayer: Layer = layer === "apologists" && hasApologists ? "apologists" : "official";

  const select = useCallback(
    (target: number) => {
      if (target < 0 || target >= entries.length || target === index) return;
      setDirection(target > index ? "next" : "back");
      setIndex(target);
      setChange((value) => ({ from: null, key: value.key + 1, crossLanguage: false }));
      setParallelsOpen(false);
      setPhrase(null);
      history.replaceState(null, "", `#${entries[target]!.id}`);
    },
    [entries, index],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.target instanceof Element && event.target.closest("input, textarea")) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === "ArrowRight") select(index + 1);
      if (event.key === "ArrowLeft") select(index - 1);
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [index, select]);

  function pickEdition(target: string) {
    if (target === edition) return;
    const language = (id: string) => editions.find((candidate) => candidate.id === id)?.language;
    const same = language(target) === language(edition);
    setChange((value) => ({ from: same ? edition : null, key: value.key + 1, crossLanguage: !same }));
    chooseTranslation(target);
  }

  const lightable = (candidate: string) =>
    [...entry.main, ...entry.parallels].some((block) =>
      block.verses.some((verse) => locate(verse.text[edition] ?? "", candidate).length > 0),
    );

  const previous = entries[index - 1];
  const next = entries[index + 1];
  const motion = direction === "next" ? "passage-in-next" : direction === "back" ? "passage-in-back" : "";
  const single = entry.main.length === 1 ? entry.main[0]! : null;

  return (
    <div className="mt-14 passages-grid">
      <div className="self-stretch">
        <PassageRuler
          label={text.ruler}
          titles={entries.map((candidate) => candidate.short)}
          current={index}
          onSelect={select}
        />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 max-sm:mt-3.5">
          <span className="text-ui-xs leading-normal text-ink-3 tabular-nums">
            {text.count.replace("{n}", String(index + 1)).replace("{total}", String(entries.length))}
          </span>
          <div className="flex max-w-full flex-wrap items-center gap-x-3.5 gap-y-1.5">
            <span className="text-label font-medium text-ink-3">{text.translation}</span>
            <SlidingTabs
              label={text.translation}
              variant="flat"
              value={edition}
              onChange={pickEdition}
              tabs={editions.map((candidate) => ({
                id: candidate.id,
                label: candidate.abbreviation,
                title: candidate.name,
              }))}
            />
          </div>
        </div>
        <div key={entry.id} className={motion}>
          <h2 className="mt-7.25 font-head text-h2-mobile font-light text-balance text-ink-3 opsz-60 sm:mt-7.5 sm:text-h2">
            {entry.title}
          </h2>
          {single ? (
            <div className="mt-5">
              <ActionLink href={single.readerHref}>
                {text.readInReader}
                {chevron}
              </ActionLink>
            </div>
          ) : null}
          <VerseBlocks
            blocks={entry.main}
            editionId={edition}
            changeFrom={change.from}
            flashKey={change.key}
            phrase={phrase}
            labelled={!single}
            readLabel={text.readInReader}
            className={`mt-9 ${change.crossLanguage ? "passage-in-fade" : ""}`}
            paragraphClassName="font-body text-verse font-light text-ink-2 opsz-18"
          />
          {entry.parallels.length > 0 ? (
            <div className="mt-10">
              <MoreButton
                expanded={parallelsOpen}
                controls="parallels"
                onClick={() => setParallelsOpen((open) => !open)}
              >
                {parallelsOpen ? text.hideParallels : text.parallels.replace("{n}", String(entry.parallels.length))}
              </MoreButton>
              <div
                id="parallels"
                inert={!parallelsOpen}
                data-open={parallelsOpen ? "" : undefined}
                className="fold-grid"
              >
                <div className="min-h-0 overflow-hidden">
                  <VerseBlocks
                    blocks={entry.parallels}
                    editionId={edition}
                    changeFrom={change.from}
                    flashKey={change.key}
                    phrase={phrase}
                    labelled
                    readLabel={text.readInReader}
                    className="pt-5.5"
                    paragraphClassName="font-body text-verse-parallel font-light text-ink-2 opsz-18"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div key={`${entry.id}-layers`} className={`mt-16 ${motion}`}>
          <SlidingTabs
            label={text.layers}
            variant="heading"
            value={shownLayer}
            onChange={(id) => setLayer(id === "apologists" ? "apologists" : "official")}
            tabs={[
              { id: "official", label: text.official },
              {
                id: "apologists",
                label: text.apologists,
                disabled: !hasApologists,
                ...(hasApologists ? {} : { title: text.apologistsMuted }),
              },
            ]}
          />
          <div key={shownLayer} className="passage-in-fade">
            {shownLayer === "apologists" && entry.apologists ? (
              <ApologistLayer layer={entry.apologists} label={labels.apologistsLabel} text={text} />
            ) : (
              <div>
                <p className="mt-9 max-w-descriptor font-head text-descriptor font-light text-ink-2 italic opsz-30 text-pretty">
                  {labels.officialLabel}
                </p>
                <p className="mt-7 max-w-measure font-body text-prose font-light text-ink-2 opsz-18">
                  <ReadingText
                    text={entry.reading}
                    verseLinks={entry.verseLinks}
                    onPhrase={setPhrase}
                    lightable={lightable}
                  />
                </p>
              </div>
            )}
          </div>
        </div>
        <nav className="mt-24 grid grid-cols-1 gap-4 sm:grid-cols-2" aria-label={text.ruler}>
          {previous ? (
            <button type="button" onClick={() => select(index - 1)} className={boxClassName}>
              <small className="mb-1 block text-neighbor-label text-ink-3">{text.previous}</small>
              <span className="font-body text-neighbor-title">{previous.short}</span>
            </button>
          ) : (
            <div />
          )}
          {next ? (
            <button type="button" onClick={() => select(index + 1)} className={`${boxClassName} sm:text-right`}>
              <small className="mb-1 block text-neighbor-label text-ink-3">{text.next}</small>
              <span className="font-body text-neighbor-title">{next.short}</span>
            </button>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </div>
  );
}
