type PageHeaderProps = {
  id?: string;
  className?: string;
  title: string;
  lede: string;
  emphasis?: string;
  long?: boolean;
};

function ledeParts(lede: string, emphasis: string | undefined) {
  const start = emphasis ? lede.toLowerCase().indexOf(emphasis.toLowerCase()) : -1;
  if (!emphasis || start < 0) return { before: lede, term: "", after: "" };
  const end = start + emphasis.length;
  return { before: lede.slice(0, start), term: lede.slice(start, end), after: lede.slice(end) };
}

export function PageHeader({ id, className = "", title, lede, emphasis, long = false }: PageHeaderProps) {
  const { before, term, after } = ledeParts(lede, emphasis);
  return (
    <header id={id} className={`max-w-col ${className}`}>
      <h1
        className={`title-part title-part-1 font-head opsz-72 font-light text-ink ${long ? "text-objection-mobile sm:text-objection" : "text-display-mobile sm:text-display"}`}
      >
        {title}
      </h1>
      <p className="title-part title-part-2 font-head text-lede-mobile sm:text-lede opsz-36 mt-3.5 font-light text-ink-2 italic">
        {before}
        {term ? <span className="font-normal text-cite">{term}</span> : null}
        {after}
      </p>
    </header>
  );
}
