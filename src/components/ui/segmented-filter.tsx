type SegmentedOption = {
  id: string;
  label: string;
  count: number;
};

type SegmentedFilterProps = {
  label: string;
  options: SegmentedOption[];
  value: string;
  onChange: (id: string) => void;
};

export function SegmentedFilter({ label, options, value, onChange }: SegmentedFilterProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className="mb-4.5 inline-flex gap-0.5 rounded-8 border border-rule p-0.75 max-sm:flex max-sm:w-full"
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={option.id === value}
          onClick={() => onChange(option.id)}
          className="inline-flex min-h-8.5 cursor-pointer items-center justify-center gap-1.75 rounded-6 px-3 py-1.5 text-btn leading-label text-ink-2 max-sm:flex-1 max-sm:px-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-pressed:bg-accent-weak aria-pressed:font-medium aria-pressed:text-ink pointer-coarse:min-h-11"
        >
          {option.label}
          <span className="text-ui-2xs leading-label font-normal text-ink-3 tabular-nums">{option.count}</span>
        </button>
      ))}
    </div>
  );
}
