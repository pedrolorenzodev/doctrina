import type { ReactNode } from "react";

type TooltipProps = {
  label: string;
  children: ReactNode;
};

export function Tooltip({ label, children }: TooltipProps) {
  return (
    <span className="group/tip relative inline-flex">
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none invisible absolute top-full left-1/2 z-50 mt-1.5 -translate-x-1/2 rounded-4 bg-tip-bg px-2 py-0.75 text-ui-2xs whitespace-nowrap text-tip-ink opacity-0 transition-all duration-150 ease-standard group-hover/tip:visible group-hover/tip:opacity-100 group-hover/tip:delay-300 group-has-focus-visible/tip:visible group-has-focus-visible/tip:opacity-100"
      >
        {label}
      </span>
    </span>
  );
}
