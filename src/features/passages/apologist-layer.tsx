import type { ApologistLayer as ApologistLayerData } from "@/content/model/page";
import type { UiText } from "@/content/ui-text/types";
import { ApologistFigure } from "@/features/passages/apologist-figure";

type ApologistLayerProps = {
  layer: ApologistLayerData;
  label: string;
  text: UiText["doctrine"]["passagesPage"];
};

function counted(layer: ApologistLayerData, text: UiText["doctrine"]["passagesPage"]): string {
  const quotes = layer.arguments.reduce((sum, argument) => sum + argument.quotes.length, 0);
  const speakers = new Set(layer.arguments.flatMap((argument) => argument.quotes.map((quote) => quote.speaker))).size;
  const template =
    speakers === 1 ? (quotes === 1 ? text.quotesOneSpeaker : text.quotesManyOneSpeaker) : text.quotesMany;
  return template.replace("{n}", String(quotes)).replace("{m}", String(speakers));
}

export function ApologistLayer({ layer, label, text }: ApologistLayerProps) {
  return (
    <div>
      <p className="mt-9 max-w-descriptor font-head text-descriptor font-light text-ink-2 italic opsz-30 text-pretty">
        {label}
      </p>
      <p className="mt-2 max-w-measure text-sub text-ink-3">{text.apologistsNote}</p>
      <p className="mt-7 max-w-measure font-body text-passage-body font-light text-ink-prose opsz-18">{layer.intro}</p>
      <h3 className="mt-18 font-head text-argument-heading font-light opsz-36">{text.argument}</h3>
      <p className="mt-2 max-w-measure text-sub text-ink-3">{counted(layer, text)}</p>
      {layer.arguments.map((argument) => (
        <div key={argument.title} className="mt-13">
          <h4 className="max-w-argument-title font-head text-h3 font-normal text-balance text-ink opsz-24">
            {argument.title}
          </h4>
          {argument.quotes.map((quote) => (
            <ApologistFigure
              key={`${quote.speaker}-${quote.locator}`}
              quote={quote}
              aiNote={text.aiTranslation}
              readOriginal={text.readOriginal}
              hideOriginal={text.hideOriginal}
              viewSource={text.viewSource}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
