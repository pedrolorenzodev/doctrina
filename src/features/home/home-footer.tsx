import Link from "next/link";

type HomeFooterProps = {
  site: string;
  glossary: { label: string; href: string };
  sources: string;
  other: { label: string; href: string; lang: string };
};

const linkClassName =
  "cursor-pointer text-ink-3 no-underline underline-offset-3 transition-colors duration-150 ease-standard hover:text-ink hover:underline";

export function HomeFooter({ site, glossary, sources, other }: HomeFooterProps) {
  return (
    <footer className="mt-10 flex flex-wrap gap-x-5.5 gap-y-1.5 text-ui-xs leading-normal text-ink-3">
      <span>{site}</span>
      <Link href={glossary.href} className={linkClassName}>
        {glossary.label}
      </Link>
      {/* TODO: link to the Fuentes page once it exists */}
      <button type="button" className={`${linkClassName} border-0 bg-transparent p-0 text-ui-xs leading-normal`}>
        {sources}
      </button>
      <a href={other.href} hrefLang={other.lang} lang={other.lang} className={linkClassName}>
        {other.label}
      </a>
    </footer>
  );
}
