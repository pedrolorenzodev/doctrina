import type { ReactNode } from "react";

type MoreButtonProps = {
  expanded: boolean;
  onClick: () => void;
  children: ReactNode;
};

export function MoreButton({ expanded, onClick, children }: MoreButtonProps) {
  return (
    <button
      type="button"
      aria-expanded={expanded}
      onClick={onClick}
      className="group/more -ml-2.5 inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-6 py-2 pr-3 pl-2.5 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11"
    >
      <svg
        className="transition-transform duration-200 ease-standard group-aria-expanded/more:rotate-45"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M6 1.5v9M1.5 6h9" />
      </svg>
      {children}
    </button>
  );
}
