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
  marked: boolean;
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

export function HighlightColors({ text, current, marked, onPick, onRemove }: HighlightColorsProps) {
  return (
    <span className="inline-flex items-center">
      {marked ? (
        <button
          type="button"
          onClick={onRemove}
          className="inline-flex min-h-10 cursor-pointer items-center justify-center rounded-6 px-2.5 py-2 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11"
        >
          {text.remove}
        </button>
      ) : (
        <span className="pr-1.5 pl-2.5 text-btn font-medium text-ink-3">{text.label}</span>
      )}
      <span role="group" aria-label={text.group} className="inline-flex items-center">
        {highlightColors.map((color) => (
          <button
            key={color}
            type="button"
            aria-label={text.withColor.replace("{color}", text.colors[color])}
            aria-pressed={current === color}
            onClick={() => onPick(color)}
            className="group/dot inline-flex size-8 cursor-pointer items-center justify-center rounded-6 transition-colors duration-150 ease-standard hover:bg-hover pointer-coarse:size-11"
          >
            <span
              className={`size-3 rounded-full shadow-swatch group-aria-pressed/dot:shadow-swatch-current ${swatchClassName[color]}`}
            />
          </button>
        ))}
      </span>
    </span>
  );
}
