create table public.chapter_structure (
  translation_id text not null references public.translations (id),
  book text not null references public.books (id),
  chapter smallint not null check (chapter > 0),
  sections jsonb not null default '[]'::jsonb check (jsonb_typeof(sections) = 'array'),
  paragraphs smallint[] not null default '{}',
  primary key (translation_id, book, chapter)
);

alter table public.verses add column red text[];

alter table public.chapter_structure enable row level security;

create policy chapter_structure_read on public.chapter_structure for select to anon, authenticated using (true);

grant select on public.chapter_structure to anon, authenticated;

notify pgrst, 'reload schema';
