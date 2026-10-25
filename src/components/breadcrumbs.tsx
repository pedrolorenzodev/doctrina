import Link from "next/link";
import { Fragment } from "react";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  label: string;
  trail: Crumb[];
  current?: string;
};

const separator = "/";

export function Breadcrumbs({ label, trail, current }: BreadcrumbsProps) {
  // TODO: crumbs lead to the doctrines index and to the doctrine page (02) once those pages exist
  return (
    <nav
      aria-label={label}
      className="title-part title-part-0 flex max-w-col flex-wrap items-center gap-y-1 text-ui-xs text-ink-3"
    >
      {trail.map((crumb, index) => (
        <Fragment key={crumb.label}>
          {crumb.href ? (
            <Link href={crumb.href} className="link-crumb hit-44">
              {crumb.label}
            </Link>
          ) : (
            <button type="button" className="link-crumb hit-44">
              {crumb.label}
            </button>
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
}
