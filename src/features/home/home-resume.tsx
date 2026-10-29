"use client";

import Link from "next/link";
import { placeWhen, usePlaceBefore } from "@/lib/last-place";

type HomeResumeText = { label: string; detail: string };

export function HomeResume({ here, text }: { here: string; text: HomeResumeText }) {
  const place = usePlaceBefore(here);
  if (!place) return null;
  const detail = place.detail
    ? text.detail.replace("{edition}", place.detail.edition).replace("{verse}", String(place.detail.verse))
    : null;
  return (
    <div className="title-part title-part-3 mt-7.5 max-w-col">
      <span className="mb-2 block text-label leading-label font-medium text-ink-3">{text.label}</span>
      <Link
        href={place.href}
        className="resume-row border-y border-rule px-2 py-3.5 no-underline transition-colors duration-150 ease-standard hover:bg-hover"
      >
        <span className="font-head text-entity font-normal text-ink">{place.title.split(" · ")[0]}</span>
        <span className="col-start-2 row-start-1 flex items-center gap-3 text-ui-xs text-ink-3">
          <span aria-hidden="true" className="h-3 w-px bg-rule-2" />
          {placeWhen(place.at)}
        </span>
        {detail ? <span className="col-start-1 text-resume-path text-ink-3">{detail}</span> : null}
      </Link>
    </div>
  );
}
