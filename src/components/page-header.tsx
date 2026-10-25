type PageHeaderProps = {
  id?: string;
  className?: string;
  title: string;
  lede: string;
};

export function PageHeader({ id, className = "", title, lede }: PageHeaderProps) {
  return (
    <header id={id} className={`max-w-col ${className}`}>
      <h1 className="title-part title-part-1 font-head text-display-mobile sm:text-display opsz-72 font-light text-ink">
        {title}
      </h1>
      <p className="title-part title-part-2 font-head text-lede-mobile sm:text-lede opsz-36 mt-3.5 font-light text-ink-2 italic">
        {lede}
      </p>
    </header>
  );
}
