-- DRAFT (AI plan, 2026-11-06). Not applied. The search surface of the chat (chat-design.md §3).
-- Rows are written only by data/scripts/load-ai-passages.mjs with the secret key.
create table public.ai_passages (
  id bigint generated always as identity primary key,
  source_key text not null unique,
  collection text not null check (collection in ('fathers', 'tradition', 'doctrine', 'glossary')),
  speaker text not null check (speaker in ('shared', 'site', 'catholic', 'orthodox', 'lutheran', 'reformed', 'baptist', 'pentecostal')),
  doctrine text,
  lang text not null check (lang in ('es', 'en', 'la', 'de', 'el')),
  work_id text,
  edition_id text,
  locator text,
  part smallint,
  author text,
  year smallint,
  title text not null,
  edition_label text not null,
  licence text not null check (licence in ('public-domain', 'short-quote', 'unconfirmed', 'site-authored', 'cc0-translation')),
  translated_by_ai boolean not null default false,
  max_quote_words smallint not null check (max_quote_words between 10 and 200),
  href text,
  refs text[] not null default '{}',
  text text not null check (text <> '' and length(text) <= 4000),
  tsv tsvector generated always as (
    to_tsvector(
      case lang when 'es' then 'spanish'::regconfig when 'en' then 'english'::regconfig else 'simple'::regconfig end,
      text
    )
  ) stored,
  corpus_version text not null
);

create index ai_passages_tsv_idx on public.ai_passages using gin (tsv);
create index ai_passages_scope_idx on public.ai_passages (collection, doctrine, speaker);
create index ai_passages_author_idx on public.ai_passages (author) where author is not null;
create index ai_passages_work_idx on public.ai_passages (work_id, edition_id, locator) where work_id is not null;

alter table public.ai_passages enable row level security;
revoke all on public.ai_passages from anon, authenticated;

-- Bible full-text search in place, on one edition per language (+ DRA for the deuterocanon).
-- The search function must repeat these exact expressions and predicates or the planner ignores the index.
create index verses_fts_en_idx on public.verses using gin (to_tsvector('english'::regconfig, text))
  where translation_id in ('bsb', 'dra');
create index verses_fts_es_idx on public.verses using gin (to_tsvector('spanish'::regconfig, text))
  where translation_id = 'rv1909';

create or replace function public.ai_tsquery(p_config regconfig, p_terms text[], p_phrases text[])
returns tsquery
language plpgsql
immutable
set search_path = ''
as $$
declare
  q tsquery;
  item text;
begin
  foreach item in array coalesce(p_terms, '{}') loop
    if length(item) between 2 and 40 then
      q := case when q is null then plainto_tsquery(p_config, item) else q || plainto_tsquery(p_config, item) end;
    end if;
  end loop;
  foreach item in array coalesce(p_phrases, '{}') loop
    if length(item) between 3 and 80 then
      q := case when q is null then phraseto_tsquery(p_config, item) else q || phraseto_tsquery(p_config, item) end;
    end if;
  end loop;
  return q;
end;
$$;

create or replace function public.ai_search_passages(
  p_terms_en text[], p_phrases_en text[], p_terms_es text[], p_phrases_es text[],
  p_collections text[], p_doctrines text[], p_speakers text[], p_authors text[], p_works text[],
  p_limit integer, p_per_group integer
)
returns table (
  id bigint, source_key text, collection text, speaker text, doctrine text, lang text,
  work_id text, edition_id text, locator text, part smallint, author text, year smallint,
  title text, edition_label text, licence text, translated_by_ai boolean, max_quote_words smallint,
  href text, refs text[], text text, rank real
)
language sql
stable
set search_path = ''
as $$
  with q as (
    select public.ai_tsquery('english'::regconfig, p_terms_en, p_phrases_en) as en,
           public.ai_tsquery('spanish'::regconfig, p_terms_es, p_phrases_es) as es
  ), hits as (
    select p.*, ts_rank_cd(p.tsv, case p.lang when 'es' then q.es else q.en end, 1) as rank
    from public.ai_passages p, q
    where p.collection = any (p_collections)
      and (p_doctrines is null or p.doctrine is null or p.doctrine = any (p_doctrines))
      and (p_speakers is null or p.speaker = any (p_speakers))
      and (p_authors is null or p.author = any (p_authors))
      and (p_works is null or p.work_id = any (p_works))
      and p.tsv @@ case p.lang when 'es' then coalesce(q.es, ''::tsquery) else coalesce(q.en, ''::tsquery) end
  ), ranked as (
    select h.*, row_number() over (partition by coalesce(h.author, h.speaker) order by h.rank desc) as n
    from hits h
  )
  select r.id, r.source_key, r.collection, r.speaker, r.doctrine, r.lang, r.work_id, r.edition_id, r.locator,
         r.part, r.author, r.year, r.title, r.edition_label, r.licence, r.translated_by_ai, r.max_quote_words,
         r.href, r.refs, r.text, r.rank
  from ranked r
  where r.n <= greatest(p_per_group, 1)
  order by r.rank desc
  limit least(greatest(p_limit, 1), 60);
$$;

create or replace function public.ai_search_verses(
  p_lang text, p_terms text[], p_phrases text[], p_books text[], p_chapter smallint, p_limit integer
)
returns table (translation_id text, book text, chapter smallint, verse smallint, text text, rank real)
language sql
stable
set search_path = ''
as $$
  select v.translation_id, v.book, v.chapter, v.verse, v.text,
         ts_rank_cd(to_tsvector('english'::regconfig, v.text), public.ai_tsquery('english'::regconfig, p_terms, p_phrases), 1)
  from public.verses v
  where p_lang = 'en'
    and v.translation_id in ('bsb', 'dra')
    and (p_books is null or v.book = any (p_books))
    and (p_chapter is null or v.chapter = p_chapter)
    and to_tsvector('english'::regconfig, v.text) @@ coalesce(public.ai_tsquery('english'::regconfig, p_terms, p_phrases), ''::tsquery)
  union all
  select v.translation_id, v.book, v.chapter, v.verse, v.text,
         ts_rank_cd(to_tsvector('spanish'::regconfig, v.text), public.ai_tsquery('spanish'::regconfig, p_terms, p_phrases), 1)
  from public.verses v
  where p_lang = 'es'
    and v.translation_id = 'rv1909'
    and (p_books is null or v.book = any (p_books))
    and (p_chapter is null or v.chapter = p_chapter)
    and to_tsvector('spanish'::regconfig, v.text) @@ coalesce(public.ai_tsquery('spanish'::regconfig, p_terms, p_phrases), ''::tsquery)
  order by 6 desc
  limit least(greatest(p_limit, 1), 30);
$$;

revoke all on function public.ai_tsquery(regconfig, text[], text[]) from public, anon, authenticated;
revoke all on function public.ai_search_passages(text[], text[], text[], text[], text[], text[], text[], text[], text[], integer, integer) from public, anon, authenticated;
revoke all on function public.ai_search_verses(text, text[], text[], text[], smallint, integer) from public, anon, authenticated;
grant execute on function public.ai_tsquery(regconfig, text[], text[]) to service_role;
grant execute on function public.ai_search_passages(text[], text[], text[], text[], text[], text[], text[], text[], text[], integer, integer) to service_role;
grant execute on function public.ai_search_verses(text, text[], text[], text[], smallint, integer) to service_role;

notify pgrst, 'reload schema';
