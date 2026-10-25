import Link from "next/link";

type Neighbor = {
  label: string;
  title: string;
  href: string;
};

type NeighborLinksProps = {
  label: string;
  previous: Neighbor | null;
  next: Neighbor | null;
  className?: string;
};

const boxClassName =
  "block rounded-6 border border-rule px-4.5 pt-3.5 pb-3.75 text-ink no-underline transition-colors duration-150 ease-standard hover:border-rule-2 hover:bg-hover";

function NeighborBox({ neighbor, className }: { neighbor: Neighbor; className: string }) {
  return (
    <Link href={neighbor.href} className={`${boxClassName} ${className}`}>
      <small className="mb-1 block text-neighbor-label text-ink-3">{neighbor.label}</small>
      <span className="font-body text-neighbor-title">{neighbor.title}</span>
    </Link>
  );
}

export function NeighborLinks({ label, previous, next, className = "mt-18" }: NeighborLinksProps) {
  return (
    <nav aria-label={label} className={`max-w-col ${className}`}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {previous ? <NeighborBox neighbor={previous} className="" /> : null}
        {next ? <NeighborBox neighbor={next} className={`sm:col-start-2 sm:text-right`} /> : null}
      </div>
    </nav>
  );
}
