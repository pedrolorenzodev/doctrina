alter table public.translations add column ordinal smallint not null default 0;

notify pgrst, 'reload schema';
