"use client";

import { useCallback, useEffect, useState } from "react";
import { SidePanel } from "@/components/side-panel";
import { CopyButton } from "@/components/ui/copy-button";
import { readerPanelFrom } from "@/features/reader/verse-panel";

type FatherPanelText = {
  label: string;
  close: string;
  cite: string;
  citeCopied: string;
  copyLink: string;
  linkCopied: string;
};

type FatherPanelProps = {
  text: FatherPanelText;
  reference: string;
  citation: string;
  prologue: string;
};

type Opened = { anchor: string; locator: string };

export function FatherPanel({ text, reference, citation, prologue }: FatherPanelProps) {
  const [opened, setOpened] = useState<Opened | null>(null);
  const close = useCallback(() => setOpened(null), []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const button = target.closest<HTMLElement>("[data-division-open]");
      if (!button) return;
      setOpened({ anchor: button.dataset.divisionOpen ?? "", locator: button.dataset.locator ?? "" });
    };
    addEventListener("click", onClick);
    return () => removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!opened) return;
    const division = document.getElementById(opened.anchor);
    division?.setAttribute("data-selected", "");
    return () => division?.removeAttribute("data-selected");
  }, [opened]);

  const place = opened ? (opened.locator === "prologue" ? prologue : opened.locator) : "";
  return (
    <SidePanel
      open={opened !== null}
      label={text.label}
      title={`${reference} ${place}`.trim()}
      closeLabel={text.close}
      onClose={close}
      variant="reference"
      from={readerPanelFrom}
      focusOnOpen
    >
      <div className="-mt-2 -ml-2.5 flex flex-wrap items-center gap-x-1">
        <CopyButton label={text.cite} done={text.citeCopied} text={() => citation.replace("{place}", place)} />
        <CopyButton
          label={text.copyLink}
          done={text.linkCopied}
          text={() => `${location.origin}${location.pathname}#${opened?.anchor ?? ""}`}
        />
      </div>
    </SidePanel>
  );
}
