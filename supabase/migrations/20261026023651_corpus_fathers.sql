create table public.works (
  id text primary key,
  title text not null,
  author text not null
);

create table public.editions (
  work_id text not null references public.works (id),
  id text not null,
  language text not null check (language in ('en', 'es', 'la', 'el', 'de')),
  translator text,
  year smallint,
  bibliography text not null,
  source_url text not null,
  scan_url text,
  licence text not null,
  retrieved_on date not null,
  source_sha256 text not null,
  locator_notes text,
  primary key (work_id, id)
);

create table public.divisions (
  work_id text not null,
  edition_id text not null,
  locator text not null,
  ordinal integer not null check (ordinal > 0),
  heading text,
  text text not null check (text <> ''),
  primary key (work_id, edition_id, locator),
  unique (work_id, edition_id, ordinal),
  foreign key (work_id, edition_id) references public.editions (work_id, id)
);

alter table public.works enable row level security;
alter table public.editions enable row level security;
alter table public.divisions enable row level security;

create policy works_read on public.works for select to anon, authenticated using (true);
create policy editions_read on public.editions for select to anon, authenticated using (true);
create policy divisions_read on public.divisions for select to anon, authenticated using (true);

grant select on public.works, public.editions, public.divisions to anon, authenticated;
