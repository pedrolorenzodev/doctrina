"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ActionLink } from "@/components/ui/action";
import { MoreButton } from "@/components/ui/more-button";
import { SlidingTabs } from "@/components/ui/sliding-tabs";
import type { PassagesData } from "@/content/get-passages";
import type { PassagesPageText } from "@/content/model/page";
import type { UiText } from "@/content/ui-text/types";
import { ApologistLayer } from "@/features/passages/apologist-layer";
import { settlePassagePending } from "@/features/passages/passage-pending";
import { PassageRuler } from "@/features/passages/passage-ruler";
import { ReadingText } from "@/features/passages/reading-text";
import { VerseBlocks } from "@/features/passages/verse-blocks";
import { usePassageStore } from "@/features/passages/use-passage-store";
import { locate } from "@/features/passages/word-text";
import { useChosenTranslation } from "@/lib/use-chosen-translation";
import { chooseTranslation } from "@/lib/translation-choice";

type PassagesViewProps = {
  data: PassagesData;
  dataBase: string;
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
  let hash = location.hash.slice(1);
  try {
    hash = decodeURIComponent(hash);
  } catch {
    return 0;
  }
  return Math.max(
    0,
    data.entries.findIndex((entry) => entry.id === hash),
  );
}

function whenIdle(task: () => void): () => void {
  if (typeof requestIdleCallback === "function") {
    const handle = requestIdleCallback(task, { timeout: 1500 });
    return () => cancelIdleCallback(handle);
  }
  const handle = setTimeout(task, 300);
  return () => clearTimeout(handle);
}

const whilePending = "passage-pending:invisible";

const prefetchAhead = [1, -1, 2] as const;

export function PassagesView({ data, dataBase, defaultEdition, labels, text }: PassagesViewProps) {
  const { entries, editions } = data;
  const store = usePassageStore(dataBase, data.first, data.firstApologists, entries.length);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "back" | null>(null);
  const [layer, setLayer] = useState<Layer>("apologists");
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

  const indexRef = useRef(0);
  const layerRef = useRef<Layer>("apologists");
  const ticket = useRef(0);

  const show = useCallback(
    async (target: number, fromHash: boolean) => {
      if (target < 0 || target >= entries.length) return;
      if (target === indexRef.current) return settlePassagePending();
      const mine = ++ticket.current;
      const ready = await store.ensure(target, layerRef.current === "apologists");
      if (mine !== ticket.current) return;
      if (!ready) return settlePassagePending();
      setDirection(fromHash ? null : target > indexRef.current ? "next" : "back");
      indexRef.current = target;
      setIndex(target);
      setChange((value) => ({ from: null, key: value.key + 1, crossLanguage: false }));
      setParallelsOpen(false);
      setPhrase(null);
      if (!fromHash) history.replaceState(null, "", `#${entries[target]!.id}`);
    },
    [entries, store],
  );

  const select = useCallback((target: number) => void show(target, false), [show]);

  const intend = useCallback(
    (target: number) => {
      store.prefetch(target, "core", "high");
      if (layerRef.current === "apologists") store.prefetch(target, "apologists", "high");
    },
    [store],
  );

  useEffect(() => {
    const read = () => void show(indexFromHash(data), true);
    read();
    addEventListener("hashchange", read);
    return () => removeEventListener("hashchange", read);
  }, [data, show]);

  useLayoutEffect(() => {
    if (index !== 0) settlePassagePending();
  }, [index]);

  useEffect(() => {
    layerRef.current = layer;
  }, [layer]);

  useEffect(
    () =>
      whenIdle(() => {
        for (const step of prefetchAhead) store.prefetch(index + step, "core");
        store.prefetch(index, "apologists");
        store.prefetch(index + 1, "apologists");
      }),
    [index, store],
  );

  const summary = entries[index]!;
  const core = store.core(index)!;
  const apologists = store.apologists(index);
  const shownLayer: Layer = layer === "apologists" && apologists ? "apologists" : "official";

  const chooseLayer = useCallback(
    async (id: string) => {
      if (id !== "apologists") return setLayer("official");
      if (!store.apologists(index)) await store.ensure(index, true);
      if (store.apologists(index)) setLayer("apologists");
    },
    [index, store],
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
    [...core.main, ...core.parallels].some((block) =>
      block.verses.some((verse) => locate(verse.text[edition] ?? "", candidate).length > 0),
    );

  const previous = entries[index - 1];
  const next = entries[index + 1];
  const motion = direction === "next" ? "passage-in-next" : direction === "back" ? "passage-in-back" : "";
  const single = core.main.length === 1 ? core.main[0]! : null;

  return (
    <div className="mt-14 passages-grid">
      <div className="self-stretch">
        <PassageRuler
          label={text.ruler}
          titles={entries.map((candidate) => candidate.short)}
          current={index}
          onSelect={select}
          onIntent={intend}
        />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 max-sm:mt-3.5">
          <span className={`text-ui-xs leading-normal text-ink-3 tabular-nums ${whilePending}`}>
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
        <div key={summary.id} className={`${motion} ${whilePending}`}>
          <h2 className="mt-7.25 font-head text-h2-mobile font-light text-balance text-ink-3 opsz-60 sm:mt-7.5 sm:text-h2">
            {summary.title}
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
            blocks={core.main}
            editionId={edition}
            changeFrom={change.from}
            flashKey={change.key}
            phrase={phrase}
            labelled={!single}
            readLabel={text.readInReader}
            className={`mt-9 ${change.crossLanguage ? "passage-in-fade" : ""}`}
            paragraphClassName="font-body text-verse font-light opsz-18"
          />
          {core.parallels.length > 0 ? (
            <div className="mt-10">
              <MoreButton
                expanded={parallelsOpen}
                controls="parallels"
                onClick={() => setParallelsOpen((open) => !open)}
              >
                {parallelsOpen ? text.hideParallels : text.parallels.replace("{n}", String(core.parallels.length))}
              </MoreButton>
              <div
                id="parallels"
                inert={!parallelsOpen}
                data-open={parallelsOpen ? "" : undefined}
                className="fold-grid"
              >
                <div className="min-h-0 overflow-hidden">
                  <VerseBlocks
                    blocks={core.parallels}
                    editionId={edition}
                    changeFrom={change.from}
                    flashKey={change.key}
                    phrase={phrase}
                    labelled
                    readLabel={text.readInReader}
                    className="pt-5.5"
                    paragraphClassName="font-body text-verse-parallel font-light opsz-18"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div
          key={`${summary.id}-layers`}
          className={`mt-16 ${motion} ${whilePending}`}
          onPointerEnter={() => store.prefetch(index, "apologists", "high")}
          onFocusCapture={() => store.prefetch(index, "apologists", "high")}
        >
          <SlidingTabs
            label={text.layers}
            variant="heading"
            value={shownLayer}
            onChange={(id) => void chooseLayer(id)}
            tabs={[
              { id: "apologists", label: text.apologists },
              { id: "official", label: text.official },
            ]}
          />
          <div key={shownLayer} className="passage-in-fade">
            {shownLayer === "apologists" && apologists ? (
              <ApologistLayer layer={apologists} label={labels.apologistsLabel} text={text} />
            ) : (
              <div>
                <p className="mt-9 max-w-descriptor font-head text-descriptor font-light text-ink-2 italic opsz-30 text-pretty">
                  {labels.officialLabel}
                </p>
                <p className="mt-7 max-w-measure font-body text-prose font-light text-ink-2 opsz-18">
                  <ReadingText
                    text={core.reading}
                    verseLinks={core.verseLinks}
                    onPhrase={setPhrase}
                    lightable={lightable}
                  />
                </p>
              </div>
            )}
          </div>
        </div>
        <nav className={`mt-24 grid grid-cols-1 gap-4 sm:grid-cols-2 ${whilePending}`} aria-label={text.neighbors}>
          {previous ? (
            <button
              type="button"
              onClick={() => select(index - 1)}
              onPointerEnter={() => intend(index - 1)}
              onFocus={() => intend(index - 1)}
              className={boxClassName}
            >
              <small className="mb-1 block text-neighbor-label text-ink-3">{text.previous}</small>
              <span className="font-body text-neighbor-title">{previous.short}</span>
            </button>
          ) : (
            <div />
          )}
          {next ? (
            <button
              type="button"
              onClick={() => select(index + 1)}
              onPointerEnter={() => intend(index + 1)}
              onFocus={() => intend(index + 1)}
              className={`${boxClassName} sm:text-right`}
            >
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
