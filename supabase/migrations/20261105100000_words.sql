alter table public.corpus_manifest drop constraint corpus_manifest_kind_check;
alter table public.corpus_manifest add constraint corpus_manifest_kind_check check (kind in ('bible', 'father', 'words'));

create table public.word_chapters (
  book text not null references public.books (id),
  chapter smallint not null check (chapter > 0),
  lang text not null check (lang in ('grc', 'hbo')),
  verses jsonb not null check (jsonb_typeof(verses) = 'object'),
  primary key (book, chapter)
);

create table public.word_lexicon (
  id text primary key,
  shard text not null,
  entry jsonb not null check (jsonb_typeof(entry) = 'object')
);

create index word_lexicon_shard_idx on public.word_lexicon (shard);

create table public.word_occurrences (
  id text primary key,
  n integer not null,
  n_any integer not null,
  verse_count integer not null,
  forms jsonb not null,
  form_morph jsonb not null
);

create table public.word_places (
  id text not null,
  book_order smallint not null,
  book text not null,
  refs text[] not null,
  primary key (id, book_order)
);

create table public.word_parse_names (
  language text primary key check (language in ('grc', 'hbo')),
  names jsonb not null
);

create table public.word_glosses_es (
  english text primary key,
  spanish text not null
);

create table public.word_manifest (
  id text primary key default 'words',
  doc jsonb not null
);

alter table public.word_chapters enable row level security;
alter table public.word_lexicon enable row level security;
alter table public.word_occurrences enable row level security;
alter table public.word_places enable row level security;
alter table public.word_parse_names enable row level security;
alter table public.word_glosses_es enable row level security;
alter table public.word_manifest enable row level security;

revoke all on public.word_chapters, public.word_lexicon, public.word_occurrences, public.word_places,
  public.word_parse_names, public.word_glosses_es, public.word_manifest from anon, authenticated;

grant select, insert, update, delete on public.word_chapters, public.word_lexicon, public.word_occurrences,
  public.word_places, public.word_parse_names, public.word_glosses_es, public.word_manifest to service_role;

notify pgrst, 'reload schema';
