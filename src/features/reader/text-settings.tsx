"use client";

import { useSyncExternalStore } from "react";
import { stepButtonClassName } from "@/features/reader/text-size-control";
import {
  chooseReaderText,
  currentReaderText,
  defaultReaderText,
  readerLeadings,
  readerMeasures,
  readerWeights,
  steppedValue,
  subscribeReaderText,
} from "@/lib/reader-text";

type StepText = { group: string; less: string; more: string };

export type TextSettingsText = {
  weight: StepText;
  leading: StepText;
  measure: StepText;
  align: { group: string; left: string; justified: string };
  lessMark: string;
  moreMark: string;
};

type StepperProps = {
  text: StepText;
  lessMark: string;
  moreMark: string;
  atStart: boolean;
  atEnd: boolean;
  onStep: (direction: -1 | 1) => void;
};

function Stepper({ text, lessMark, moreMark, atStart, atEnd, onStep }: StepperProps) {
  return (
    <div data-menu-item="">
      <p className="mb-1.5 text-label font-medium text-ink-3">{text.group}</p>
      <div role="group" aria-label={text.group} className="inline-flex gap-0.5 rounded-8 border border-rule p-0.75">
        <button
          type="button"
          aria-label={text.less}
          disabled={atStart}
          onClick={() => onStep(-1)}
          className={stepButtonClassName}
        >
          {lessMark}
        </button>
        <button
          type="button"
          aria-label={text.more}
          disabled={atEnd}
          onClick={() => onStep(1)}
          className={stepButtonClassName}
        >
          {moreMark}
        </button>
      </div>
    </div>
  );
}

export function TextSettings({ text }: { text: TextSettingsText }) {
  const value = useSyncExternalStore(subscribeReaderText, currentReaderText, () => defaultReaderText);
  return (
    <div className="mt-3.5 grid grid-cols-text-settings gap-x-6 gap-y-3.5 pl-1">
      <Stepper
        text={text.weight}
        lessMark={text.lessMark}
        moreMark={text.moreMark}
        atStart={value.weight === readerWeights[0]}
        atEnd={value.weight === readerWeights[readerWeights.length - 1]}
        onStep={(direction) =>
          chooseReaderText({ weight: steppedValue(readerWeights, value.weight as 300, direction) })
        }
      />
      <Stepper
        text={text.leading}
        lessMark={text.lessMark}
        moreMark={text.moreMark}
        atStart={value.leading === readerLeadings[0]}
        atEnd={value.leading === readerLeadings[readerLeadings.length - 1]}
        onStep={(direction) =>
          chooseReaderText({ leading: steppedValue(readerLeadings, value.leading as 1.66, direction) })
        }
      />
      <Stepper
        text={text.measure}
        lessMark={text.lessMark}
        moreMark={text.moreMark}
        atStart={value.measure === readerMeasures[0]}
        atEnd={value.measure === readerMeasures[readerMeasures.length - 1]}
        onStep={(direction) =>
          chooseReaderText({ measure: steppedValue(readerMeasures, value.measure as 720, direction) })
        }
      />
      <div data-menu-item="">
        <p className="mb-1.5 text-label font-medium text-ink-3">{text.align.group}</p>
        <div role="group" aria-label={text.align.group} className="flex gap-0.5 rounded-8 border border-rule p-0.75">
          {[false, true].map((justify) => (
            <button
              key={String(justify)}
              type="button"
              aria-pressed={value.justify === justify}
              onClick={() => chooseReaderText({ justify })}
              className="inline-flex min-h-7 flex-1 cursor-pointer items-center justify-center rounded-5 px-3.5 py-1 text-ui-xs leading-label font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-pressed:bg-accent-weak aria-pressed:text-ink pointer-coarse:min-h-11"
            >
              {justify ? text.align.justified : text.align.left}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
