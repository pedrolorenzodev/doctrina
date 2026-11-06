-- AI block LIM: server-only tables, no anon or authenticated access.
create table public.ai_simplifications (
  cache_key text primary key,
  address jsonb not null check (jsonb_typeof(address) = 'object'),
  text_sha256 text not null,
  source_lang text not null check (source_lang in ('es', 'en')),
  output_lang text not null check (output_lang in ('es', 'en')),
  model text not null,
  prompt_version text not null,
  original text[] not null,
  clear text[] not null,
  very text[] not null,
  status text not null default 'generated' check (status in ('generated', 'reviewed', 'rejected')),
  checks jsonb not null default '{}'::jsonb,
  tokens_in integer not null default 0,
  tokens_out integer not null default 0,
  cost_micros integer not null default 0,
  hits integer not null default 0,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  check (cardinality(original) = cardinality(clear) and cardinality(original) = cardinality(very))
);

create table public.ai_answers (
  answer_id uuid primary key default gen_random_uuid(),
  cache_key text unique,
  locale text not null check (locale in ('es', 'en')),
  prompt_version text not null,
  models jsonb not null,
  corpus_version text not null,
  answer jsonb not null,
  pack jsonb,
  hits integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.ai_requests (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  route text not null check (route in ('ask', 'ask-more', 'simplify', 'eval')),
  locale text,
  outcome text not null,
  intent text,
  doctrines text[],
  prompt_version text,
  models jsonb,
  usage jsonb,
  cost_micros integer not null default 0,
  latency_ms jsonb,
  quotes_total smallint,
  quotes_failed smallint,
  repaired boolean,
  cache_hit boolean not null default false,
  answer_id uuid,
  question text check (question is null or length(question) <= 500),
  checks jsonb
);

create index ai_requests_created_idx on public.ai_requests (created_at);
create index ai_requests_answer_idx on public.ai_requests (answer_id) where answer_id is not null;

create table public.ai_eval_runs (
  id bigint generated always as identity primary key,
  started_at timestamptz not null default now(),
  git_sha text,
  prompt_versions jsonb not null,
  models jsonb not null,
  provider_mode text not null check (provider_mode in ('anthropic', 'replay', 'fake')),
  totals jsonb,
  cost_micros integer not null default 0
);

create table public.ai_eval_results (
  run_id bigint not null references public.ai_eval_runs (id) on delete cascade,
  question_id text not null,
  passed boolean not null,
  scores jsonb not null,
  answer jsonb,
  primary key (run_id, question_id)
);

alter table public.ai_simplifications enable row level security;
alter table public.ai_answers enable row level security;
alter table public.ai_requests enable row level security;
alter table public.ai_eval_runs enable row level security;
alter table public.ai_eval_results enable row level security;
revoke all on public.ai_simplifications, public.ai_answers, public.ai_requests, public.ai_eval_runs, public.ai_eval_results
  from anon, authenticated;

notify pgrst, 'reload schema';
