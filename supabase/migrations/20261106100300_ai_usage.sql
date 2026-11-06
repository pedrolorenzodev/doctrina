-- AI block LIM: server-only tables, no anon or authenticated access.
create table public.ai_usage_counters (
  day date not null,
  bucket text not null,
  key text not null,
  count integer not null default 0 check (count >= 0),
  primary key (day, bucket, key)
);

create table public.ai_spend (
  period text primary key check (period ~ '^(d:\d{4}-\d{2}-\d{2}|m:\d{4}-\d{2})$'),
  reserved_micros bigint not null default 0 check (reserved_micros >= 0),
  spent_micros bigint not null default 0 check (spent_micros >= 0),
  updated_at timestamptz not null default now()
);

alter table public.ai_usage_counters enable row level security;
alter table public.ai_spend enable row level security;
revoke all on public.ai_usage_counters, public.ai_spend from anon, authenticated;

create or replace function public.ai_take(p_day date, p_bucket text, p_key text, p_limit integer)
returns boolean
language sql
volatile
security definer
set search_path = ''
as $$
  with taken as (
    insert into public.ai_usage_counters as c (day, bucket, key, count)
    values (p_day, p_bucket, p_key, 1)
    on conflict (day, bucket, key) do update set count = c.count + 1
      where c.count < p_limit
    returning 1
  )
  select exists (select 1 from taken) and p_limit > 0;
$$;

create or replace function public.ai_reserve(
  p_day text, p_month text, p_estimate_micros bigint, p_daily_cap_micros bigint, p_monthly_cap_micros bigint
)
returns boolean
language plpgsql
volatile
security definer
set search_path = ''
as $$
declare
  d public.ai_spend;
  m public.ai_spend;
begin
  insert into public.ai_spend (period) values ('d:' || p_day), ('m:' || p_month) on conflict do nothing;
  select * into d from public.ai_spend where period = 'd:' || p_day for update;
  select * into m from public.ai_spend where period = 'm:' || p_month for update;
  if d.reserved_micros + d.spent_micros + p_estimate_micros > p_daily_cap_micros
     or m.reserved_micros + m.spent_micros + p_estimate_micros > p_monthly_cap_micros then
    return false;
  end if;
  update public.ai_spend set reserved_micros = reserved_micros + p_estimate_micros, updated_at = now()
    where period in ('d:' || p_day, 'm:' || p_month);
  return true;
end;
$$;

create or replace function public.ai_settle(p_day text, p_month text, p_reserved_micros bigint, p_actual_micros bigint)
returns void
language sql
volatile
security definer
set search_path = ''
as $$
  update public.ai_spend
     set reserved_micros = greatest(reserved_micros - p_reserved_micros, 0),
         spent_micros = spent_micros + greatest(p_actual_micros, 0),
         updated_at = now()
   where period in ('d:' || p_day, 'm:' || p_month);
$$;

create or replace function public.ai_cleanup()
returns void
language sql
volatile
security definer
set search_path = ''
as $$
  delete from public.ai_usage_counters where day < current_date - 2;
  update public.ai_requests set question = null where question is not null and created_at < now() - interval '30 days';
  update public.ai_answers set pack = null where pack is not null and created_at < now() - interval '1 day';
$$;

revoke all on function public.ai_take(date, text, text, integer) from public, anon, authenticated;
revoke all on function public.ai_reserve(text, text, bigint, bigint, bigint) from public, anon, authenticated;
revoke all on function public.ai_settle(text, text, bigint, bigint) from public, anon, authenticated;
revoke all on function public.ai_cleanup() from public, anon, authenticated;
grant execute on function public.ai_take(date, text, text, integer) to service_role;
grant execute on function public.ai_reserve(text, text, bigint, bigint, bigint) to service_role;
grant execute on function public.ai_settle(text, text, bigint, bigint) to service_role;
grant execute on function public.ai_cleanup() to service_role;
