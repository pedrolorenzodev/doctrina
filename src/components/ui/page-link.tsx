import Link from "next/link";
import type { ReactNode } from "react";
import { nbspBeforeDigits } from "@/lib/locator";

type PageLinkProps = {
  href?: string;
  external?: boolean;
  children: ReactNode;
};

export function PageLink({ href, external = false, children }: PageLinkProps) {
  const label = typeof children === "string" ? nbspBeforeDigits(children) : children;
  if (href === undefined) {
    return (
      <button type="button" className="link-page cursor-pointer text-left">
        {label}
      </button>
    );
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="link-page mark-external">
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className="link-page">
      {label}
    </Link>
  );
}
