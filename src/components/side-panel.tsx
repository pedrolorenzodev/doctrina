"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { IconButton } from "@/components/ui/icon-button";
import { escapePriority, registerEscape } from "@/lib/escape-stack";

type SidePanelProps = {
  open: boolean;
  label: string;
  title: string;
  closeLabel: string;
  onClose: () => void;
  variant?: "label" | "reference";
  from?: keyof typeof layouts;
  focusOnOpen?: boolean;
  children: ReactNode;
};

export const sidePanelBreakpoints = { lg: "(min-width: 64rem)", xl: "(min-width: 80rem)" } as const;

const layouts = {
  lg: {
    room: "side-panel-room",
    panel:
      "max-lg:top-auto max-lg:left-0 max-lg:h-sheet max-lg:w-auto max-lg:translate-x-0 max-lg:translate-y-full max-lg:rounded-t-14 max-lg:border-t max-lg:border-l-0 max-lg:border-rule-2 max-lg:opacity-100 max-lg:data-[open=true]:translate-y-0",
    grip: "max-lg:block",
  },
  xl: {
    room: "side-panel-room-wide",
    panel:
      "max-xl:top-auto max-xl:left-0 max-xl:h-sheet max-xl:w-auto max-xl:translate-x-0 max-xl:translate-y-full max-xl:rounded-t-14 max-xl:border-t max-xl:border-l-0 max-xl:border-rule-2 max-xl:opacity-100 max-xl:data-[open=true]:translate-y-0",
    grip: "max-xl:block",
  },
};

const titleClassName = {
  label: "text-label",
  reference: "font-head text-panel-reference font-normal text-ink opsz-24",
};

export function SidePanel({
  open,
  label,
  title,
  closeLabel,
  onClose,
  variant = "label",
  from = "lg",
  focusOnOpen = false,
  children,
}: SidePanelProps) {
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add(layouts[from].room);
    const release = registerEscape(escapePriority.panel, onClose);
    return () => {
      document.documentElement.classList.remove(layouts[from].room);
      release();
    };
  }, [open, onClose, from]);

  useEffect(() => {
    if (open && focusOnOpen) panel.current?.focus({ preventScroll: true });
  }, [open, focusOnOpen]);

  return (
    <aside
      ref={panel}
      tabIndex={-1}
      aria-label={label}
      data-open={open}
      data-side-panel
      className={`texture-layer panel-motion invisible fixed top-top right-0 bottom-0 z-35 flex w-panel translate-x-6 flex-col border-l border-rule bg-bg opacity-0 outline-none data-[open=true]:visible data-[open=true]:translate-x-0 data-[open=true]:opacity-100 ${layouts[from].panel} safe-bottom`}
    >
      <span aria-hidden="true" className={`mx-auto mt-2 hidden h-1 w-7 rounded-2 bg-rule-2 ${layouts[from].grip}`} />
      <div className="flex min-h-reader-strip items-center justify-between gap-2 border-b border-rule py-1.5 pr-2.5 pl-5.5 text-ink-3">
        <span className={titleClassName[variant]}>{title}</span>
        <IconButton aria-label={closeLabel} onClick={onClose}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="m3 3 8 8M11 3l-8 8" />
          </svg>
        </IconButton>
      </div>
      <div data-lenis-prevent className="flex-1 overflow-y-auto overscroll-contain px-5.5 pt-4.5 pb-10">
        {children}
      </div>
    </aside>
  );
}
