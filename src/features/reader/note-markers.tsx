import type { MouseEvent } from "react";

type NoteMarkersProps = {
  mark: string;
  previewed: boolean;
  hideLabel: boolean;
  onOpen: (event: MouseEvent<HTMLButtonElement>) => void;
  onPreview: (on: boolean) => void;
};

export function NoteMarkers({ mark, previewed, hideLabel, onOpen, onPreview }: NoteMarkersProps) {
  return (
    <>
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        data-note-pen=""
        data-preview={previewed || undefined}
        onClick={onOpen}
        onPointerEnter={() => onPreview(true)}
        onPointerLeave={() => onPreview(false)}
        className="note-mark-in pointer-coarse:hit-44 inline-grid size-3.75 shrink-0 cursor-pointer place-items-center rounded-4 text-ink-3 transition-colors duration-150 ease-standard hover:text-accent data-preview:text-accent md:absolute md:note-pen-top md:left-3 md:-translate-y-1/2"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={onOpen}
        className={`note-mark-in pointer-coarse:hit-44 cursor-pointer rounded-3 text-division text-ink-3 transition-colors duration-150 ease-standard hover:text-ink hover:underline -ml-0.75 md:mr-2 md:-translate-y-0.5 md:align-middle md:whitespace-nowrap ${hideLabel ? "notes:hidden" : ""}`}
        data-cards-shown={hideLabel || undefined}
        onPointerEnter={() => onPreview(true)}
        onPointerLeave={() => onPreview(false)}
        onFocus={() => onPreview(true)}
        onBlur={() => onPreview(false)}
      >
        {mark}
      </button>
    </>
  );
}
