"use client";

import { CopyButton } from "@/components/ui/copy-button";
import { useVerseEdition } from "@/features/verse/verse-edition";

type VerseCiteText = { cite: string; withText: string; copyLink: string; copied: string; linkCopied: string };

type VerseCiteProps = { text: VerseCiteText; reference: string };

export function VerseCite({ text, reference }: VerseCiteProps) {
  const { selected } = useVerseEdition();
  const short = `${reference} (${selected.displayName})`;
  return (
    <>
      <p className="m-0 border-y border-rule py-3 font-body text-card font-light text-ink-2">{short}</p>
      <div className="mt-2.5 -ml-2.5 flex flex-col items-start">
        <div className="flex flex-wrap gap-x-1">
          <CopyButton label={text.cite} done={text.copied} text={() => short} reserveWidth={false} />
          <CopyButton
            label={text.withText}
            done={text.copied}
            text={() => `«${selected.text}» ${short}. ${location.href}`}
            reserveWidth={false}
          />
        </div>
        <CopyButton label={text.copyLink} done={text.linkCopied} text={() => location.href} reserveWidth={false} />
      </div>
    </>
  );
}
