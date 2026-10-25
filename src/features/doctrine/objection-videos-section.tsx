import { RevealList } from "@/components/reveal-list";
import { Section } from "@/components/section";
import type { Objection, TraditionPage } from "@/content/model/page";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { VideoItem } from "@/features/doctrine/video-item";
import type { Locale } from "@/lib/locale";

type ObjectionVideosSectionProps = {
  id: string;
  page: TraditionPage;
  objection: Objection;
  locale: Locale;
};

export function ObjectionVideosSection({ id, page, objection, locale }: ObjectionVideosSectionProps) {
  const text = getUiText(locale).doctrine;
  const videos = (objection.videoIds ?? []).flatMap(
    (videoId) => page.videos.items.find((video) => video.id === videoId) ?? [],
  );
  if (videos.length === 0) return null;
  return (
    <Section id={id} title={text.videos} subtitle={page.objections.videosSubtitle}>
      <RevealList as="ul" className="list-none border-b border-rule">
        {videos.map((video) => (
          <li key={video.id} className="border-t border-rule py-3.75">
            <VideoItem
              id={video.id}
              title={video.title}
              meta={`${video.channel}, ${text.videoLanguage[video.lang]}`}
              lang={video.lang}
            />
          </li>
        ))}
      </RevealList>
    </Section>
  );
}
