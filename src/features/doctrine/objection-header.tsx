type ObjectionHeaderProps = {
  id: string;
  kicker: string;
  title: string;
};

export function ObjectionHeader({ id, kicker, title }: ObjectionHeaderProps) {
  return (
    <header id={id} className="mt-7.5 max-w-col sm:mt-11">
      <p className="title-part title-part-1 mb-2.5 text-ui-xs text-ink-3">{kicker}</p>
      <h1 className="title-part title-part-2 font-head text-objection-mobile sm:text-objection opsz-72 font-light text-ink">
        {title}
      </h1>
    </header>
  );
}
