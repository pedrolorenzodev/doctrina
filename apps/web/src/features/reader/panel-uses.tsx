import Link from "next/link";
import type { VerseUse } from "@/content/get-verse-uses";
import { nbspBeforeDigits } from "@/lib/locator";

export type PanelUsesText = { list: string };

export function PanelUses({ uses, text }: { uses: VerseUse[]; text: PanelUsesText }) {
  return (
    <ul aria-label={text.list} className="m-0 list-none p-0">
      {uses.map((use) => (
        <li key={use.id} className="border-t border-rule py-2.25 text-ui-sm leading-snug first:border-t-0 first:pt-0">
          <Link href={use.href} className="link-page hit-44 font-body text-panel-use">
            {nbspBeforeDigits(use.title)}
          </Link>
          <span className="block text-ink-3">{nbspBeforeDigits(use.context)}</span>
        </li>
      ))}
    </ul>
  );
}
