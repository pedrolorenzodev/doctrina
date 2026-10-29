export function RowChevron({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`text-ink-3 transition-transform duration-150 ease-standard group-hover/row:translate-x-0.5 ${className}`}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 3l4 4-4 4" />
    </svg>
  );
}
