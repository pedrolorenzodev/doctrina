"use client";

import { SidePanel } from "@/components/side-panel";
import { ActionButton } from "@/components/ui/action";
import { CopyButton } from "@/components/ui/copy-button";
import { HighlightColors } from "@/features/reader/highlight-colors";
import type { ReactNode } from "react";
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
  children: ReactNode;
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
  children,
}: VersePanelProps) {
  const link = () => `${location.origin}${location.pathname}#v-${verse}`;
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
      <div className="-mt-2 mb-3 -ml-2.5 flex flex-wrap items-center gap-x-1">
        <CopyButton label={text.cite} done={text.citeCopied} text={() => citation} />
        <CopyButton label={text.copyLink} done={text.linkCopied} text={link} />
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
      {children}
      {/* TODO: opens the verse's own page (06) once it exists */}
      <ActionButton>{text.openDetail}</ActionButton>
    </SidePanel>
  );
}
