"use client";

import { SidePanel } from "@/components/side-panel";
import { ActionButton } from "@/components/ui/action";
import { CopyButton } from "@/components/ui/copy-button";
import { HighlightColors } from "@/features/reader/highlight-colors";
import { PanelSections, type PanelSection } from "@/features/reader/panel-sections";
import { flipBlocks } from "@/lib/block-motion";
import { useRef, type ReactNode } from "react";
import type { HighlightColor } from "@/lib/highlights";

export const readerPanelFrom = "xl";

type VersePanelText = {
  label: string;
  close: string;
  cite: string;
  citeCopied: string;
  copyLink: string;
  linkCopied: string;
  openDetail: string;
  sections: {
    group: string;
    notes: string;
    words: string;
    uses: string;
    translations: string;
    spanish: string;
    english: string;
  };
};

type VersePanelProps = {
  open: boolean;
  reference: string;
  citation: string;
  verse: number | null;
  text: VersePanelText;
  focusOnOpen: boolean;
  highlight: {
    text: Parameters<typeof HighlightColors>[0]["text"];
    current: HighlightColor | null;
    canRemove: boolean;
    onPick: (color: HighlightColor) => void;
    onRemove: () => void;
  };
  noteLabel: string;
  onNote: () => void;
  onClose: () => void;
  link?: () => string;
  withDetail?: boolean;
  sections?: PanelSection[];
  forceSection?: string | null;
  children?: ReactNode;
};

export function VersePanel({
  open,
  reference,
  citation,
  verse,
  text,
  focusOnOpen,
  highlight,
  noteLabel,
  onNote,
  onClose,
  link = () => `${location.origin}${location.pathname}#v-${verse}`,
  withDetail = true,
  sections,
  forceSection = null,
  children,
}: VersePanelProps) {
  const body = useRef<HTMLDivElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);
  const flip = (mutate: () => void) => {
    if (body.current && ghosts.current) flipBlocks(body.current, ghosts.current, mutate);
    else mutate();
  };
  return (
    <SidePanel
      open={open}
      label={text.label}
      title={reference}
      closeLabel={text.close}
      onClose={onClose}
      variant="reference"
      from={readerPanelFrom}
      focusOnOpen={focusOnOpen}
    >
      <div ref={body} className="relative">
        <div
          data-flip-block="actions"
          className={`-mt-2 -ml-2.5 flex flex-wrap items-center gap-x-1 ${sections ? "mb-4" : "mb-3"}`}
        >
          <CopyButton label={text.cite} done={text.citeCopied} text={() => citation} reserveWidth={false} />
          <CopyButton label={text.copyLink} done={text.linkCopied} text={link} reserveWidth={false} />
          <HighlightColors
            text={highlight.text}
            current={highlight.current}
            canRemove={highlight.canRemove}
            showLabel
            onPick={highlight.onPick}
            onRemove={highlight.onRemove}
          />
          <button
            type="button"
            onClick={onNote}
            className="inline-flex min-h-10 cursor-pointer items-center justify-center rounded-6 px-2.5 py-2 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11"
          >
            {noteLabel}
          </button>
        </div>
        {sections ? (
          <PanelSections label={text.sections.group} sections={sections} forceId={forceSection} flip={flip} />
        ) : null}
        {children}
        {/* TODO: opens the verse's own page (06) once it exists */}
        {withDetail ? (
          <div data-flip-block="detail" className="mt-5 flow-root">
            <ActionButton>{text.openDetail}</ActionButton>
          </div>
        ) : null}
        <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
      </div>
    </SidePanel>
  );
}
