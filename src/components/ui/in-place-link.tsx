import type { MouseEvent, ReactNode } from "react";
import { nbspBeforeDigits } from "@/lib/locator";

type InPlaceLinkKind = "citation" | "term" | "source";

type InPlaceLinkProps = {
  kind: InPlaceLinkKind;
  open?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

const kindClassName: Record<InPlaceLinkKind, string> = {
  citation: "link-cite hit-44 whitespace-normal",
  term: "link-term hit-44 whitespace-normal",
  source: "link-source hit-44 whitespace-normal",
};

export function InPlaceLink({ kind, open = false, onClick, children }: InPlaceLinkProps) {
  return (
    <button type="button" aria-haspopup="dialog" aria-expanded={open} onClick={onClick} className={kindClassName[kind]}>
      {typeof children === "string" ? nbspBeforeDigits(children) : children}
    </button>
  );
}
