import Link from "next/link";
import type { ReactNode } from "react";
import { nbspBeforeDigits } from "@/lib/locator";

type PageLinkProps = {
  href?: string;
  external?: boolean;
  lang?: string;
  children: ReactNode;
};

export function PageLink({ href, external = false, lang, children }: PageLinkProps) {
  const label = typeof children === "string" ? nbspBeforeDigits(children) : children;
  if (href === undefined) {
    return (
      <button type="button" className="link-page hit-44 cursor-pointer text-left">
        {label}
      </button>
    );
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" lang={lang} className="link-page hit-44 mark-external">
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className="link-page hit-44">
      {label}
    </Link>
  );
}
