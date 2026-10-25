import { PageLink } from "@/components/ui/page-link";

type VideoItemProps = {
  id: string;
  title: string;
  meta: string;
  lang: string;
};

export function VideoItem({ id, title, meta, lang }: VideoItemProps) {
  return (
    <>
      <p className="font-body text-video-mobile font-medium sm:text-video">
        <PageLink href={`https://www.youtube.com/watch?v=${id}`} external lang={lang}>
          {title}
        </PageLink>
      </p>
      <p className="mt-1 text-btn text-ink-3">{meta}</p>
    </>
  );
}
