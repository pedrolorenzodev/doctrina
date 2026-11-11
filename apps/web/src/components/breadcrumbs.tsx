import Link from "next/link";
import { Fragment, type ReactNode } from "react";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  label: string;
  trail: Crumb[];
  current?: ReactNode;
  aside?: ReactNode;
};

const separator = "/";

export function Breadcrumbs({ label, trail, current, aside }: BreadcrumbsProps) {
  const nav = (
    <nav
      aria-label={label}
      className={`flex max-w-col flex-wrap items-center gap-y-1 text-ui-xs text-ink-3 ${aside ? "" : "title-part title-part-0"}`}
    >
      {trail.map((crumb, index) => (
        <Fragment key={crumb.label}>
          {crumb.href ? (
            <Link href={crumb.href} className="link-crumb hit-44">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-ink-3">{crumb.label}</span>
          )}
          {current !== undefined || index < trail.length - 1 ? (
            <span aria-hidden="true" className="mx-2 text-rule-2">
              {separator}
            </span>
          ) : null}
        </Fragment>
      ))}
      {current !== undefined ? (
        <span aria-current="page" className="text-ink-2">
          {current}
        </span>
      ) : null}
    </nav>
  );
  if (!aside) return nav;
  return (
    <div className="title-part title-part-0 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 lg:-my-2.5">
      {nav}
      {aside}
    </div>
  );
}
