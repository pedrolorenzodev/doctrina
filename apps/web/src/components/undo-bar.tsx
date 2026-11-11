"use client";

import { useEffect } from "react";

const stayMs = 5000;

type UndoBarProps = {
  open: boolean;
  message: string;
  token: number;
  actionLabel: string;
  onAction: () => void;
  onExpire: () => void;
};

export function UndoBar({ open, message, token, actionLabel, onAction, onExpire }: UndoBarProps) {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(onExpire, stayMs);
    return () => clearTimeout(timer);
  }, [open, token, onExpire]);

  return (
    <div
      role="status"
      data-open={open}
      className="undo-motion undo-position invisible pointer-events-none fixed left-1/2 z-95 flex max-w-undo -translate-x-1/2 translate-y-1.5 items-center gap-1.5 rounded-8 border border-rule-2 bg-panel py-1 pr-1 pl-3.5 text-btn text-ink-2 opacity-0 shadow-floating data-[open=true]:pointer-events-auto data-[open=true]:visible data-[open=true]:translate-y-0 data-[open=true]:opacity-100"
    >
      <span>{message}</span>
      <button
        type="button"
        onClick={onAction}
        className="inline-flex min-h-9 cursor-pointer items-center justify-center rounded-6 px-2.5 text-btn font-medium text-ink transition-colors duration-150 ease-standard hover:bg-hover pointer-coarse:min-h-11"
      >
        {actionLabel}
      </button>
    </div>
  );
}
