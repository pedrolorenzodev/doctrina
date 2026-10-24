import Link from "next/link";
import type { ReactNode } from "react";

const actionClassName =
  "inline-flex cursor-pointer min-h-11 items-center justify-center gap-2.5 rounded-7 border border-rule-2 bg-card px-4 text-ui-sm font-medium text-ink no-underline transition-colors duration-150 hover:border-ink hover:bg-hover";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
};

export function ActionLink({ href, children }: ActionLinkProps) {
  return (
    <Link href={href} className={actionClassName}>
      {children}
    </Link>
  );
}

type ActionButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export function ActionButton({ onClick, children }: ActionButtonProps) {
  return (
    <button type="button" onClick={onClick} className={actionClassName}>
      {children}
    </button>
  );
}
