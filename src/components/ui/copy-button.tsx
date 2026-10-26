"use client";

import { useEffect, useRef, useState } from "react";

const copiedMs = 1600;

type CopyButtonProps = {
  label: string;
  done: string;
  text: () => string;
  compact?: boolean;
};

export function CopyButton({ label, done, text, compact = false }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text());
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), copiedMs);
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className={`inline-grid ${compact ? "min-h-9" : "min-h-10"} cursor-pointer place-items-center rounded-6 px-2.5 py-2 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11`}
      >
        <span className={`col-start-1 row-start-1 ${copied ? "invisible" : ""}`}>{label}</span>
        <span className={`col-start-1 row-start-1 ${copied ? "" : "invisible"}`}>{done}</span>
      </button>
      <span role="status" className="sr-only">
        {copied ? done : null}
      </span>
    </>
  );
}
