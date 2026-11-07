-- AI block RET round 2: which Bible verses each Father passage cites or quotes.
-- Rows are written only by data/scripts/build-scripture-index.mjs with the secret key; rebuild after reloading ai_passages.
create table public.ai_scripture_links (
  passage_id bigint not null references public.ai_passages (id) on delete cascade,
  book text not null,
  chapter smallint not null,
  verse_from smallint not null,
  verse_to smallint not null,
  kind text not null check (kind in ('cites', 'quotes')),
  score real not null check (score > 0 and score <= 1),
  primary key (book, chapter, verse_from, passage_id, kind),
  check (verse_to >= verse_from)
);

create index ai_scripture_links_passage_idx on public.ai_scripture_links (passage_id);

alter table public.ai_scripture_links enable row level security;
revoke all on public.ai_scripture_links from anon, authenticated;

create or replace function public.ai_fathers_by_verses(
  p_book text, p_chapter smallint, p_verse_from smallint, p_verse_to smallint, p_limit integer
)
returns table (
  id bigint, source_key text, collection text, speaker text, doctrine text, lang text,
  work_id text, edition_id text, locator text, part smallint, author text, year smallint,
  title text, edition_label text, licence text, translated_by_ai boolean, max_quote_words smallint,
  href text, refs text[], text text, rank real, kind text, verses text[]
)
language sql
stable
set search_path = ''
as $$
  with hits as (
    select l.passage_id,
           max(case when l.kind = 'cites' then 2 + l.score else 1 + l.score end)::real as rank,
           case when bool_or(l.kind = 'cites') then 'cites' else 'quotes' end as kind,
           array_agg(distinct l.book || '.' || l.chapter || '.' || l.verse_from) as verses
    from public.ai_scripture_links l
    where l.book = p_book
      and l.chapter = p_chapter
      and l.verse_from <= p_verse_to
      and l.verse_to >= p_verse_from
    group by l.passage_id
    order by rank desc, count(*) desc
    limit least(greatest(p_limit, 1), 200)
  )
  select p.id, p.source_key, p.collection, p.speaker, p.doctrine, p.lang, p.work_id, p.edition_id, p.locator,
         p.part, p.author, p.year, p.title, p.edition_label, p.licence, p.translated_by_ai, p.max_quote_words,
         p.href, p.refs, p.text, h.rank, h.kind, h.verses
  from hits h
  join public.ai_passages p on p.id = h.passage_id
  where p.collection = 'fathers'
  order by h.rank desc;
$$;

revoke all on function public.ai_fathers_by_verses(text, smallint, smallint, smallint, integer) from public, anon, authenticated;
grant execute on function public.ai_fathers_by_verses(text, smallint, smallint, smallint, integer) to service_role;

notify pgrst, 'reload schema';
