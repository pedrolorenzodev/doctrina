alter table public.editions
  add column title text,
  add column status text,
  add column translated_from text,
  add column extra jsonb not null default '{}'::jsonb check (jsonb_typeof(extra) = 'object'),
  add foreign key (work_id, translated_from) references public.editions (work_id, id);

notify pgrst, 'reload schema';
