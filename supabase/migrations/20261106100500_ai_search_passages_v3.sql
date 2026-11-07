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
  with q as materialized (
    select public.ai_tsquery('english'::regconfig, p_terms_en, p_phrases_en) as en,
           public.ai_tsquery('spanish'::regconfig, p_terms_es, p_phrases_es) as es
  ), hits as (
    select p.id, coalesce(p.author, p.speaker) as grp,
           case when p.lang = 'es' then ts_rank_cd(p.tsv, q.es, 1) else ts_rank_cd(p.tsv, q.en, 1) end as rank
    from public.ai_passages p, q
    where p.collection = any (p_collections)
      and (p_doctrines is null or p.doctrine is null or p.doctrine = any (p_doctrines))
      and (p_speakers is null or p.speaker = any (p_speakers))
      and (p_authors is null or p.author = any (p_authors))
      and (p_works is null or p.work_id = any (p_works))
      and ((p.lang = 'es' and p.tsv @@ coalesce(q.es, ''::tsquery))
        or (p.lang <> 'es' and p.tsv @@ coalesce(q.en, ''::tsquery)))
  ), ranked as (
    select h.*, row_number() over (partition by h.grp order by h.rank desc) as n
    from hits h
  ), top as (
    select r.id, r.rank
    from ranked r
    where r.n <= greatest(p_per_group, 1)
    order by r.rank desc
    limit least(greatest(p_limit, 1), 60)
  )
  select p.id, p.source_key, p.collection, p.speaker, p.doctrine, p.lang, p.work_id, p.edition_id, p.locator,
         p.part, p.author, p.year, p.title, p.edition_label, p.licence, p.translated_by_ai, p.max_quote_words,
         p.href, p.refs, p.text, t.rank
  from top t
  join public.ai_passages p on p.id = t.id
  order by t.rank desc;
$$;

revoke all on function public.ai_search_passages(text[], text[], text[], text[], text[], text[], text[], text[], text[], integer, integer) from public, anon, authenticated;
grant execute on function public.ai_search_passages(text[], text[], text[], text[], text[], text[], text[], text[], text[], integer, integer) to service_role;

notify pgrst, 'reload schema';
