alter table public.word_places add column ref_count integer generated always as (cardinality(refs)) stored;

create function public.word_scan(p_id text)
returns table (book text, chapter integer, verse integer, words json)
language sql
stable
security invoker
set search_path = ''
as $$
  with refs as (
    select p.book, p.book_order, split_part(r.ref, '.', 1)::integer as chapter, split_part(r.ref, '.', 2)::integer as verse, r.position
    from public.word_places p
    cross join lateral unnest(p.refs) with ordinality as r(ref, position)
    where p.id = p_id
  )
  select refs.book, refs.chapter, refs.verse, (c.verses -> refs.verse::text) -> 'words'
  from refs
  join public.word_chapters c on c.book = refs.book and c.chapter = refs.chapter
  order by refs.book_order, refs.position
$$;

revoke execute on function public.word_scan(text) from public, anon, authenticated;
grant execute on function public.word_scan(text) to service_role;

notify pgrst, 'reload schema';
