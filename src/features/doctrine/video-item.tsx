import Image from "next/image";
import { PageLink } from "@/components/ui/page-link";

type VideoItemProps = {
  id: string;
  title: string;
  meta: string;
  lang: string;
};

const coverWidth = 320;
const coverHeight = 180;
const decorative = "";

export function VideoItem({ id, title, meta, lang }: VideoItemProps) {
  const href = `https://www.youtube.com/watch?v=${id}`;
  return (
    <div className="flex items-start gap-5 max-sm:gap-4">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="block aspect-video w-44 shrink-0 overflow-hidden rounded-4 bg-hover ring-1 ring-rule transition-shadow duration-150 ease-standard hover:ring-rule-2 max-sm:w-30"
      >
        <Image
          src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`}
          alt={decorative}
          width={coverWidth}
          height={coverHeight}
          unoptimized
          loading="lazy"
          className="size-full object-cover"
        />
      </a>
      <div className="min-w-0">
        <p className="font-body text-video-mobile font-medium sm:text-video">
          <PageLink href={href} external lang={lang}>
            {title}
          </PageLink>
        </p>
        <p className="mt-1 text-btn text-ink-3">{meta}</p>
      </div>
    </div>
  );
}
