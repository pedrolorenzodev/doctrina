"use client";

import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import { escapePriority, registerEscape } from "@/lib/escape-stack";

type NoteEditorText = {
  label: string;
  saved: string;
  deleteNote: string;
};

type NoteEditorProps = {
  reference: string;
  initial: string;
  savedAt: number | null;
  dateLabel: (time: number) => string;
  text: NoteEditorText;
  onSave: (text: string) => void;
  onClose: () => void;
  onDelete: () => void;
};

const saveDelayMs = 400;

const savedLine = (saved: string, date: string) => `${saved} ${date}`;

export function NoteEditor({
  reference,
  initial,
  savedAt,
  dateLabel,
  text,
  onSave,
  onClose,
  onDelete,
}: NoteEditorProps) {
  const field = useRef<HTMLTextAreaElement>(null);
  const timer = useRef(0);
  const [value, setValue] = useState(initial);
  const [dirty, setDirty] = useState(false);
  const latest = useRef({ value, dirty, onSave, onClose });

  useEffect(() => {
    latest.current = { value, dirty, onSave, onClose };
  });

  useLayoutEffect(() => {
    const element = field.current;
    if (!element) return;
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  }, [value]);

  useEffect(() => {
    field.current?.focus({ preventScroll: true });
    const flush = () => {
      clearTimeout(timer.current);
      if (latest.current.dirty) latest.current.onSave(latest.current.value);
    };
    const release = registerEscape(escapePriority.window, () => {
      flush();
      latest.current.onClose();
    });
    return () => {
      release();
      flush();
    };
  }, []);

  const change = (next: string) => {
    setValue(next);
    setDirty(true);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      latest.current.onSave(next);
      setDirty(false);
    }, saveDelayMs);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <div className="mb-5 border-b border-rule pb-4">
      <p className="m-0 mb-2 line-clamp-2 text-note-line text-ink-3">{reference}</p>
      <textarea
        ref={field}
        value={value}
        aria-label={text.label}
        onChange={(event) => change(event.target.value)}
        onKeyDown={onKeyDown}
        className="block min-h-22 w-full resize-none rounded-6 border border-rule-2 bg-transparent px-3 py-2.5 font-body text-note-text font-light text-ink-2 outline-none focus-visible:border-accent"
      />
      <div className="mt-2 flex items-center gap-3 text-note-meta text-ink-3">
        <span role="status">{!dirty && savedAt !== null ? savedLine(text.saved, dateLabel(savedAt)) : null}</span>
        <button
          type="button"
          onClick={onDelete}
          className="ml-auto cursor-pointer rounded-5 px-2 py-1.5 text-note-meta text-ink-3 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink"
        >
          {text.deleteNote}
        </button>
      </div>
    </div>
  );
}
