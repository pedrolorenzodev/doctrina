create table public.translations (
  id text primary key,
  language text not null check (language in ('es', 'en')),
  name text not null,
  licence text not null,
  versification text not null,
  book_count smallint not null check (book_count in (66, 73)),
  source_url text not null,
  source_sha256 text not null,
  retrieved_on date not null
);

create table public.books (
  id text primary key,
  ordinal smallint not null unique,
  section text not null check (section in ('old', 'deuterocanon', 'new')),
  name_es text not null,
  name_en text not null
);

create table public.verses (
  translation_id text not null references public.translations (id),
  book text not null references public.books (id),
  chapter smallint not null check (chapter > 0),
  verse smallint not null check (verse > 0),
  text text not null check (text <> ''),
  primary key (translation_id, book, chapter, verse)
);

create index verses_book_idx on public.verses (book);

create table public.corpus_manifest (
  id text primary key,
  kind text not null check (kind in ('bible', 'father')),
  sha256 text not null,
  row_count integer not null check (row_count > 0),
  loaded_at timestamptz not null default now()
);

alter table public.translations enable row level security;
alter table public.books enable row level security;
alter table public.verses enable row level security;
alter table public.corpus_manifest enable row level security;

create policy translations_read on public.translations for select to anon, authenticated using (true);
create policy books_read on public.books for select to anon, authenticated using (true);
create policy verses_read on public.verses for select to anon, authenticated using (true);
create policy corpus_manifest_read on public.corpus_manifest for select to anon, authenticated using (true);

grant select on public.translations, public.books, public.verses, public.corpus_manifest to anon, authenticated;
