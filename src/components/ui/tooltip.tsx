import type { ReactNode } from "react";

type TooltipProps = {
  label: string;
  wait?: "short" | "long";
  align?: "center" | "end";
  children: ReactNode;
};

const waitClassName = { short: "group-hover/tip:delay-300", long: "group-hover/tip:delay-1000" };
const alignClassName = { center: "left-1/2 -translate-x-1/2", end: "right-0" };

export function Tooltip({ label, wait = "short", align = "center", children }: TooltipProps) {
  return (
    <span className="group/tip relative inline-flex">
      {children}
      <span
        aria-hidden="true"
        className={`pointer-events-none invisible absolute top-full z-50 mt-1.5 rounded-4 bg-tip-bg px-2 py-0.75 text-ui-2xs whitespace-nowrap text-tip-ink opacity-0 transition-all duration-150 ease-standard group-hover/tip:visible group-hover/tip:opacity-100 group-has-focus-visible/tip:visible group-has-focus-visible/tip:opacity-100 ${alignClassName[align]} ${waitClassName[wait]}`}
      >
        {label}
      </span>
    </span>
  );
}
