alter table public.word_chapters drop constraint word_chapters_verses_check;
alter table public.word_chapters alter column verses type json using verses::json;
alter table public.word_chapters add check (json_typeof(verses) = 'object');

alter table public.word_lexicon drop constraint word_lexicon_entry_check;
alter table public.word_lexicon alter column entry type json using entry::json;
alter table public.word_lexicon add check (json_typeof(entry) = 'object');

alter table public.word_occurrences alter column forms type json using forms::json;
alter table public.word_occurrences alter column form_morph type json using form_morph::json;

alter table public.word_parse_names alter column names type json using names::json;

alter table public.word_manifest alter column doc type json using doc::json;

notify pgrst, 'reload schema';
