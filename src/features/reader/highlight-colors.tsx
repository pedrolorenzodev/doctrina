import { highlightColors, type HighlightColor } from "@/lib/highlights";

type HighlightColorsText = {
  label: string;
  remove: string;
  group: string;
  withColor: string;
  colors: Record<HighlightColor, string>;
};

type HighlightColorsProps = {
  text: HighlightColorsText;
  current: HighlightColor | null;
  canRemove: boolean;
  showLabel?: boolean;
  onPick: (color: HighlightColor) => void;
  onRemove: () => void;
};

const swatchClassName: Record<HighlightColor, string> = {
  yellow: "bg-hls-yellow",
  green: "bg-hls-green",
  sky: "bg-hls-sky",
  pink: "bg-hls-pink",
  orange: "bg-hls-orange",
};

const dotClassName =
  "group/dot inline-flex size-8 cursor-pointer items-center justify-center rounded-6 transition-colors duration-150 ease-standard hover:bg-hover pointer-coarse:size-11";

export function HighlightColors({
  text,
  current,
  canRemove,
  showLabel = false,
  onPick,
  onRemove,
}: HighlightColorsProps) {
  return (
    <span className="inline-flex items-center">
      {showLabel ? <span className="pr-1.5 pl-2.5 text-btn font-medium text-ink-3">{text.label}</span> : null}
      <span role="group" aria-label={text.group} className="inline-flex items-center">
        {highlightColors.map((color) => (
          <button
            key={color}
            type="button"
            aria-label={text.withColor.replace("{color}", text.colors[color])}
            aria-pressed={current === color}
            onClick={() => onPick(color)}
            className={dotClassName}
          >
            <span
              className={`size-3 rounded-full shadow-swatch group-aria-pressed/dot:shadow-swatch-current ${swatchClassName[color]}`}
            />
          </button>
        ))}
        <button
          type="button"
          aria-label={text.remove}
          title={text.remove}
          disabled={!canRemove}
          onClick={onRemove}
          className={`${dotClassName} text-ink-3 hover:text-ink disabled:cursor-default disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-ink-3`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="7" cy="7" r="5.25" />
            <path d="M3.3 10.7 10.7 3.3" />
          </svg>
        </button>
      </span>
    </span>
  );
}
