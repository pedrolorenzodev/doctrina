"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { createPortal } from "react-dom";
import { escapePriority, registerEscape } from "@/lib/escape-stack";
import { trapTab } from "@/lib/focus";
import { inertRest } from "@/lib/inert-rest";

export type DeleteNoteText = {
  titleVerb: string;
  titleRest: string;
  cancel: string;
  hold: string;
  hint: string;
  early: string;
};

type DeleteNoteDialogProps = {
  place: string;
  excerpt: string;
  text: DeleteNoteText;
  onCancel: () => void;
  onConfirm: () => void;
};

const holdMs = 3000;
const releaseMs = 220;
const holdSteps = 3;
const holdKeys = ["Enter", " "];

const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

export function DeleteNoteDialog({ place, excerpt, text, onCancel, onConfirm }: DeleteNoteDialogProps) {
  const root = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const cancel = useRef<HTMLButtonElement>(null);
  const fill = useRef<HTMLSpanElement>(null);
  const run = useRef<Animation | null>(null);
  const holding = useRef(false);
  const latest = useRef({ onCancel, onConfirm });
  const [message, setMessage] = useState("");
  const titleId = useId();
  const bodyId = useId();

  useEffect(() => {
    latest.current = { onCancel, onConfirm };
  });

  useEffect(() => {
    const opener = document.activeElement;
    cancel.current?.focus();
    const release = inertRest(root.current!);
    const unregister = registerEscape(escapePriority.alert, () => latest.current.onCancel());
    return () => {
      unregister();
      release();
      run.current?.cancel();
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true });
    };
  }, []);

  const begin = () => {
    const element = fill.current;
    if (holding.current || !element) return;
    holding.current = true;
    setMessage("");
    const animation = element.animate([{ scale: "0 1" }, { scale: "1 1" }], {
      duration: holdMs,
      easing: reduced() ? `steps(${holdSteps}, end)` : "linear",
      fill: "forwards",
    });
    animation.onfinish = () => {
      holding.current = false;
      latest.current.onConfirm();
    };
    run.current = animation;
  };

  const letGo = () => {
    const element = fill.current;
    const animation = run.current;
    if (!holding.current || !element || !animation) return;
    holding.current = false;
    animation.onfinish = null;
    const progress = Math.min(1, Number(animation.currentTime ?? 0) / holdMs);
    animation.cancel();
    element.animate([{ scale: `${progress} 1` }, { scale: "0 1" }], {
      duration: reduced() ? 0 : releaseMs,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    });
    setMessage(text.early);
  };

  const onPointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    begin();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!holdKeys.includes(event.key)) return;
    event.preventDefault();
    if (!event.repeat) begin();
  };

  const onKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (holdKeys.includes(event.key)) letGo();
  };

  return createPortal(
    <div
      ref={root}
      data-delete-dialog
      className="dialog-backdrop-in fixed inset-0 z-100 grid place-items-center bg-scrim-strong p-4"
    >
      <div
        ref={box}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        onKeyDown={(event) => box.current && trapTab(event.nativeEvent, box.current)}
        className="dialog-box-in texture-layer relative w-full max-w-100 rounded-8 border border-t-2 border-rule-2 border-t-danger bg-panel px-6 pt-5.5 pb-5 text-ink"
      >
        <h2 id={titleId} className="m-0 font-head text-dialog-title font-normal text-ink opsz-24">
          <span className="text-danger">{text.titleVerb}</span> {text.titleRest}
        </h2>
        <div id={bodyId} className="mt-3">
          <p className="m-0 text-note-line text-ink-3">{place}</p>
          <p className="mt-1 mb-0 text-note text-ink-2">{excerpt}</p>
        </div>
        <div className="mt-5 flex items-center justify-end gap-2.5">
          <button
            ref={cancel}
            type="button"
            onClick={onCancel}
            className="inline-flex min-h-10 cursor-pointer items-center justify-center rounded-6 px-3.5 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11"
          >
            {text.cancel}
          </button>
          <button
            type="button"
            onPointerDown={onPointerDown}
            onPointerUp={letGo}
            onPointerCancel={letGo}
            onLostPointerCapture={letGo}
            onBlur={letGo}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onClick={(event) => event.preventDefault()}
            className="relative inline-flex min-h-10 cursor-pointer touch-none items-center justify-center overflow-hidden rounded-6 border border-danger px-4 text-btn font-medium text-danger transition-colors duration-150 ease-standard select-none hover:bg-danger-weak pointer-coarse:min-h-11"
          >
            <span ref={fill} aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-danger-fill" />
            <span className="relative">{text.hold}</span>
          </button>
        </div>
        <p role="status" className="mt-3 mb-0 min-h-5 text-note-meta text-ink-3">
          {message || text.hint}
        </p>
      </div>
    </div>,
    document.body,
  );
}
