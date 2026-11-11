import { Fragment } from "react";

const runPattern = /([Ͱ-Ͽἀ-῿][Ͱ-Ͽἀ-῿̀-ͯ\s]*[Ͱ-Ͽἀ-῿̀-ͯ]|[Ͱ-Ͽἀ-῿])|([֐-׿][֐-׿\s]*[֐-׿]|[֐-׿])/gu;

export function OriginalScripts({ text }: { text: string }) {
  const parts = text.split(runPattern);
  return (
    <>
      {parts.map((part, index) => {
        if (part === undefined || part === "") return null;
        const kind = index % 3;
        if (kind === 1)
          return (
            <span key={index} lang="grc">
              {part}
            </span>
          );
        if (kind === 2)
          return (
            <span key={index} lang="he">
              {part}
            </span>
          );
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}
