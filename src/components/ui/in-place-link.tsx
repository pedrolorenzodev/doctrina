import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { nbspBeforeDigits } from "@/lib/locator";

type InPlaceLinkKind = "citation" | "term" | "source";

type InPlaceLinkProps = {
  kind: InPlaceLinkKind;
  open?: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
};

const kindClassName: Record<InPlaceLinkKind, string> = {
  citation: "link-cite hit-44",
  term: "link-term hit-44",
  source: "link-source hit-44",
};

export function InPlaceLink({ kind, open = false, onClick, children }: InPlaceLinkProps) {
  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    event.currentTarget.click();
  }
  return (
    <span
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-expanded={open}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={kindClassName[kind]}
    >
      {typeof children === "string" ? nbspBeforeDigits(children) : children}
    </span>
  );
}
