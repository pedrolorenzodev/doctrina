type OriginalWordProps = { text: string; transliteration?: string; language: "grc" | "hbo"; className?: string };

export function OriginalWord({ text, transliteration, language, className }: OriginalWordProps) {
  return (
    <>
      <span lang={language} className={className}>
        {text}
      </span>
      {transliteration ? (
        <i data-transliteration="" className="translit-inline">
          {transliteration}
        </i>
      ) : null}
    </>
  );
}
