type PageHeaderProps = {
  id?: string;
  className?: string;
  title: string;
  lede?: string;
  emphasis?: string;
  size?: keyof typeof titleSizes;
};

const titleSizes = {
  display: "opsz-72 text-display-mobile sm:text-display",
  objection: "opsz-72 text-objection-mobile sm:text-objection",
  reader: "opsz-60 text-balance text-reader-title-mobile sm:text-reader-title",
};

const titleWeights = { display: "font-light", objection: "font-light", reader: "font-reader-title" };

function ledeParts(lede: string, emphasis: string | undefined) {
  const start = emphasis ? lede.toLowerCase().indexOf(emphasis.toLowerCase()) : -1;
  if (!emphasis || start < 0) return { before: lede, term: "", after: "" };
  const end = start + emphasis.length;
  return { before: lede.slice(0, start), term: lede.slice(start, end), after: lede.slice(end) };
}

export function PageHeader({ id, className = "", title, lede, emphasis, size = "display" }: PageHeaderProps) {
  const { before, term, after } = ledeParts(lede ?? "", emphasis);
  return (
    <header id={id} className={`max-w-col ${className}`}>
      <h1 className={`title-part title-part-1 font-head ${titleWeights[size]} text-ink ${titleSizes[size]}`}>
        {title}
      </h1>
      {lede ? (
        <p className="title-part title-part-2 font-head text-lede-mobile sm:text-lede opsz-36 mt-3.5 font-light text-ink-2 italic">
          {before}
          {term ? <span className="font-normal text-cite">{term}</span> : null}
          {after}
        </p>
      ) : null}
    </header>
  );
}
