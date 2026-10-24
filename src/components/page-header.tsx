type PageHeaderProps = {
  title: string;
  lede: string;
};

export function PageHeader({ title, lede }: PageHeaderProps) {
  return (
    <header>
      <h1 className="font-head text-display-mobile sm:text-display opsz-72 font-light text-ink">{title}</h1>
      <p className="font-head text-lede-mobile sm:text-lede opsz-36 mt-3.5 font-light text-ink-2 italic">{lede}</p>
    </header>
  );
}
