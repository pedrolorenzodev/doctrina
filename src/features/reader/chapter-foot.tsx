type ChapterFootProps = {
  title: string;
  edition: string;
  licence: string | null;
};

export function ChapterFoot({ title, edition, licence }: ChapterFootProps) {
  return (
    <section className="mt-16 max-w-160 border-t border-rule pt-6">
      <h2 className="mb-2 font-head text-reader-foot-title font-light text-ink opsz-60">{title}</h2>
      <p className="m-0 text-reader-foot text-ink-3">{edition}</p>
      {licence ? <p className="mt-1 mb-0 text-reader-foot text-ink-3">{licence}</p> : null}
    </section>
  );
}
