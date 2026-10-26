type FilterSelectOption = { id: string; label: string };

type FilterSelectProps = {
  label: string;
  value: string;
  options: FilterSelectOption[];
  onChange: (id: string) => void;
};

export function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <label className="inline-flex items-center gap-2 text-ui-xs text-ink-3">
      {label}
      <span className="relative inline-flex">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-8 cursor-pointer appearance-none rounded-6 border border-rule bg-transparent py-1 pr-7 pl-2.5 text-ui-xs leading-label font-medium text-ink transition-colors duration-150 ease-standard hover:bg-hover pointer-coarse:min-h-11"
        >
          {options.map((option) => (
            <option key={option.id} value={option.id} className="bg-panel text-ink">
              {option.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 rotate-90 text-ink-3"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M3.5 1.5 7 5l-3.5 3.5" />
        </svg>
      </span>
    </label>
  );
}
