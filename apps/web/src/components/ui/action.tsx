import Link from "next/link";
import type { ReactNode } from "react";

const actionClassName =
  "inline-flex min-h-10.5 cursor-pointer items-center justify-center gap-2.5 rounded-7 border border-rule-2 bg-card px-4 py-2.25 text-ui-sm font-medium text-ink no-underline transition-colors duration-150 ease-standard hover:border-ink hover:bg-hover pointer-coarse:min-h-11";

type ActionLinkProps = {
  href?: string;
  external?: boolean;
  children: ReactNode;
};

export function ActionLink({ href, external = false, children }: ActionLinkProps) {
  if (href === undefined) {
    return (
      <button type="button" className={actionClassName}>
        {children}
      </button>
    );
  }
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${actionClassName} mark-external mark-external-flush`}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={actionClassName}>
      {children}
    </Link>
  );
}

type ActionButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

export function ActionButton({ onClick, children }: ActionButtonProps) {
  return (
    <button type="button" onClick={onClick} className={actionClassName}>
      {children}
    </button>
  );
}
