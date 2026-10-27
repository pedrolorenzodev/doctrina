import Link from "next/link";
import { Tooltip } from "@/components/ui/tooltip";

export type StepNeighbor = { label: string; ariaLabel: string; href: string } | null;

type ChapterStepProps = {
  direction: "previous" | "next";
  neighbor: StepNeighbor;
  fallbackLabel: string;
};

const stepClassName =
  "inline-grid h-8 w-8.5 place-items-center rounded-7 text-ink-2 transition-colors duration-150 ease-standard focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent pointer-coarse:size-11";

export function ChapterStep({ direction, neighbor, fallbackLabel }: ChapterStepProps) {
  const path = direction === "previous" ? "M10 3.5 5.5 8 10 12.5" : "M6 3.5 10.5 8 6 12.5";
  const icon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  if (!neighbor) {
    return (
      <span role="link" aria-disabled="true" aria-label={fallbackLabel} className={`${stepClassName} opacity-40`}>
        {icon}
      </span>
    );
  }
  return (
    <Tooltip label={neighbor.label}>
      <Link
        href={neighbor.href}
        aria-label={neighbor.ariaLabel}
        data-step={direction}
        className={`${stepClassName} hover:bg-hover hover:text-ink`}
      >
        {icon}
      </Link>
    </Tooltip>
  );
}
