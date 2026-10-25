import { Fragment } from "react";
import { RevealList } from "@/components/reveal-list";
import { Section } from "@/components/section";
import type { FatherDating } from "@/content/model/history";
import type { UiText } from "@/content/ui-text/types";
import { DatingList } from "@/features/history/dating-list";

type FatherDatingSectionProps = {
  id: string;
  dating: FatherDating;
  text: UiText["dating"];
};

const stepTitle = "mt-10 mb-2.5 font-head text-title-sm font-normal opsz-30 first-of-type:mt-1.5";
const prose = "m-0 font-body text-prose-mobile font-light text-ink-2 opsz-18 sm:text-prose";

export function FatherDatingSection({ id, dating, text }: FatherDatingSectionProps) {
  return (
    <Section id={id} title={text.title} wide>
      <div className="max-w-col">
        <h3 className={stepTitle}>{dating.title}</h3>
        <p className={prose}>{dating.intro}</p>
      </div>
      <DatingList
        id={`${id}-list`}
        label={text.listLabel}
        rows={dating.rows}
        scholars={dating.scholars}
        axis={dating.axis}
        moreLabel={text.more}
        lessLabel={text.less}
      />
      <div className="mt-5.5 max-w-col">
        {dating.groups.map((group) => (
          <Fragment key={group.title}>
            <h3 className={stepTitle}>{group.title}</h3>
            {group.intro ? <p className={prose}>{group.intro}</p> : null}
            <RevealList as="ul" className="m-0 mt-2 list-none p-0">
              {group.steps.map((step) => (
                <li key={step.name} className="recension-row border-t border-rule py-3.5 last:border-b">
                  <p className="m-0 pt-0.5 text-ui-base font-medium text-ink">
                    {step.name}
                    {step.note ? (
                      <small
                        className={`mt-0.5 block text-ui-xs font-normal ${step.accepted ? "text-ink-2" : "text-ink-3"}`}
                      >
                        {step.note}
                      </small>
                    ) : null}
                  </p>
                  <p className="m-0 font-body text-passage-body font-light text-ink-2">{step.text}</p>
                </li>
              ))}
            </RevealList>
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
