import type { PickerOption } from "@/features/reader/translation-picker";

type TranslationRowsProps = {
  spanish: string;
  english: string;
  options: PickerOption[];
  value: string | null;
  onChoose: (id: string) => void;
  tabbable?: boolean;
};

const bracketed = (abbreviation: string) => `(${abbreviation})`;

export const translationOptionClassName =
  "group/option flex min-h-11 cursor-pointer items-center rounded-6 px-2.5 py-2 text-picker-option text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink focus:outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent aria-selected:bg-accent-weak aria-selected:font-medium aria-selected:text-ink aria-selected:shadow-current";

export function TranslationRows({
  spanish,
  english,
  options,
  value,
  onChoose,
  tabbable = false,
}: TranslationRowsProps) {
  const groups = [
    { language: "es" as const, label: spanish },
    { language: "en" as const, label: english },
  ].filter((group) => options.some((option) => option.language === group.language));
  return groups.flatMap((group, index) => [
    <div
      key={`${group.language}-head`}
      role="presentation"
      data-menu-item=""
      className={`px-2.5 pt-2 pb-1 text-label font-medium text-ink-3 ${index > 0 ? "mt-1 border-t border-rule pt-3" : ""}`}
    >
      {group.label}
    </div>,
    ...options
      .filter((option) => option.language === group.language)
      .map((option) => (
        <div
          key={option.id}
          role="option"
          tabIndex={tabbable && (option.id === value || (value === null && option === options[0])) ? 0 : -1}
          aria-selected={option.id === value}
          data-id={option.id}
          data-menu-item=""
          onClick={() => onChoose(option.id)}
          className={translationOptionClassName}
        >
          <span className="min-w-0">
            {option.displayName}{" "}
            <span className="text-ink-3 group-aria-selected/option:text-ink-2">{bracketed(option.abbreviation)}</span>
          </span>
        </div>
      )),
  ]);
}
