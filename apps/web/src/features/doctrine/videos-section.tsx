import { Section } from "@/components/section";
import type { TraditionPage } from "@/content/model/page";
import { videosPerStep } from "@/content/doctrine-rules";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { VideoList } from "@/features/doctrine/video-list";
import type { Locale } from "@/lib/locale";

type VideosSectionProps = {
  page: TraditionPage;
  locale: Locale;
};

export function VideosSection({ page, locale }: VideosSectionProps) {
  const text = getUiText(locale);
  const { videoFilter, videoLanguage } = text.doctrine;
  if (page.videos.items.length === 0) return null;
  return (
    <Section id="videos" title={text.doctrine.videos} subtitle={page.videos.subtitle}>
      <VideoList
        videos={page.videos.items.map((video) => ({
          id: video.id,
          title: video.title,
          meta: `${video.channel}, ${videoLanguage[video.lang]}`,
          lang: video.lang,
        }))}
        step={videosPerStep}
        filterLabel={text.doctrine.videosLanguage}
        filters={[
          { id: "all", label: videoFilter.all },
          { id: "es", label: videoFilter.es },
          { id: "en", label: videoFilter.en },
        ]}
        moreLabel={text.doctrine.showMore}
        seenLabel={text.doctrine.videosSeen}
      />
    </Section>
  );
}
