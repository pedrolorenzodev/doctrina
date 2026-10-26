create table public.chapters (
  translation_id text not null references public.translations (id),
  book text not null references public.books (id),
  chapter smallint not null check (chapter > 0),
  verse_count smallint not null check (verse_count > 0),
  primary key (translation_id, book, chapter)
);

alter table public.chapters enable row level security;

create policy chapters_read on public.chapters for select to anon, authenticated using (true);

grant select on public.chapters to anon, authenticated;
