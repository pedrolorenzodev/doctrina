-- DRAFT (AI plan, 2026-11-06). Not applied. Server-only: no anon/authenticated access.
create table public.ai_settings (
  id smallint primary key default 1 check (id = 1),
  enabled boolean not null default true,
  chat_enabled boolean not null default true,
  simplify_enabled boolean not null default true,
  corpus_version text,
  last_alerts jsonb not null default '{}'::jsonb check (jsonb_typeof(last_alerts) = 'object'),
  updated_at timestamptz not null default now()
);

insert into public.ai_settings (id) values (1);

alter table public.ai_settings enable row level security;
revoke all on public.ai_settings from anon, authenticated;
