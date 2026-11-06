#!/usr/bin/env python3
import argparse
import collections
import datetime
import glob
import json
import os
import subprocess
import sys

PROJECTS = os.path.expanduser("~/.claude/projects")
MARKS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "docs", "research", "usage", "marks.jsonl")
USAGE_CHECK = os.path.expanduser("~/.claude/skills/usage-guard/scripts/usage_check.py")

PRICES = {
    "haiku": {"input": 0.10, "output": 0.50, "cache_read": 0.01, "cache_write": 0.125},
    "sonnet": {"input": 2.00, "output": 10.00, "cache_read": 0.10, "cache_write": 2.50},
    "opus": {"input": 4.00, "output": 20.00, "cache_read": 0.20, "cache_write": 5.00},
}
FIELDS = ("input", "output", "cache_read", "cache_write")


def family(model):
    for name in PRICES:
        if name in model:
            return name
    return None


def dollars(tokens, fam):
    if fam is None:
        return 0.0
    price = PRICES[fam]
    return sum(tokens[field] * price[field] for field in FIELDS) / 1e6


def parse_time(text):
    value = datetime.datetime.fromisoformat(text.replace("Z", "+00:00"))
    if value.tzinfo is None:
        value = value.astimezone()
    return value.astimezone(datetime.timezone.utc)


def record_time(text):
    return datetime.datetime.fromisoformat(text.replace("Z", "+00:00")).astimezone(datetime.timezone.utc)


def session_of(path):
    parts = path.split(os.sep)
    if "subagents" in parts:
        return parts[parts.index("subagents") - 1]
    return os.path.splitext(parts[-1])[0]


def collect(since, until, project):
    best = {}
    for path in glob.glob(os.path.join(PROJECTS, "**", "*.jsonl"), recursive=True):
        relative = os.path.relpath(path, PROJECTS)
        if project and project not in relative.split(os.sep)[0]:
            continue
        if os.path.getmtime(path) < since.timestamp():
            continue
        session = session_of(path)
        with open(path, errors="ignore") as handle:
            for line in handle:
                try:
                    record = json.loads(line)
                except ValueError:
                    continue
                message = record.get("message") or {}
                usage = message.get("usage")
                model = message.get("model") or ""
                stamp = record.get("timestamp")
                if not usage or not model or model.startswith("<") or not stamp:
                    continue
                when = record_time(stamp)
                if when < since or (until and when > until):
                    continue
                key = (message.get("id") or record.get("uuid"), record.get("requestId"), session)
                tokens = {
                    "input": usage.get("input_tokens", 0),
                    "output": usage.get("output_tokens", 0),
                    "cache_read": usage.get("cache_read_input_tokens", 0),
                    "cache_write": usage.get("cache_creation_input_tokens", 0),
                }
                current = best.get(key)
                if current is None:
                    best[key] = (session, model, tokens)
                else:
                    for field in FIELDS:
                        current[2][field] = max(current[2][field], tokens[field])
    return list(best.values())


def summarise(rows):
    by_model = collections.defaultdict(lambda: dict.fromkeys(FIELDS, 0))
    by_session = collections.defaultdict(float)
    for session, model, tokens in rows:
        for field in FIELDS:
            by_model[model][field] += tokens[field]
        by_session[session] += dollars(tokens, family(model))
    return by_model, by_session


def counter():
    out = subprocess.run(["python3", "-I", USAGE_CHECK, "--raw"], capture_output=True, text=True)
    data = json.loads(out.stdout)
    return {
        "weekly": data["seven_day"]["utilization"],
        "session": data["five_hour"]["utilization"],
        "weekly_resets": data["seven_day"]["resets_at"],
    }


def read_marks():
    if not os.path.exists(MARKS):
        return []
    with open(MARKS) as handle:
        return [json.loads(line) for line in handle if line.strip()]


def now():
    return datetime.datetime.now(datetime.timezone.utc)


def print_summary(by_model, by_session, title):
    print(title)
    total = 0.0
    for model, tokens in sorted(by_model.items()):
        fam = family(model)
        cost = dollars(tokens, fam)
        total += cost
        known = "" if fam else "  (no price: not counted)"
        print(
            f"  {model}: input {tokens['input']:,} · output {tokens['output']:,} · cache read {tokens['cache_read']:,}"
            f" · cache write {tokens['cache_write']:,} · ${cost:,.2f}{known}"
        )
    print(f"  total equivalent cost: ${total:,.2f} across {len(by_session)} sessions")
    return total


def command_mark(args):
    marks = read_marks()
    if any(m["label"] == args.label and m["kind"] == args.kind for m in marks):
        sys.exit(f"mark {args.kind} {args.label} already exists")
    reading = counter()
    entry = {"label": args.label, "kind": args.kind, "time": now().isoformat(), **reading}
    os.makedirs(os.path.dirname(MARKS), exist_ok=True)
    with open(MARKS, "a") as handle:
        handle.write(json.dumps(entry) + "\n")
    print(f"{args.kind} {args.label}: weekly {reading['weekly']:.0f} %, 5h session {reading['session']:.0f} %")


def command_report(args):
    marks = [m for m in read_marks() if m["label"] == args.label]
    start = next((m for m in marks if m["kind"] == "start"), None)
    end = next((m for m in marks if m["kind"] == "end"), None)
    if not start:
        sys.exit("no start mark for this label")
    since = parse_time(start["time"])
    until = parse_time(end["time"]) if end else now()
    rows = collect(since, until, args.project)
    by_model, by_session = summarise(rows)
    total = print_summary(by_model, by_session, f"{args.label}: {since:%a %d %H:%M} to {until:%a %d %H:%M} UTC")
    if end:
        crossed = start["weekly_resets"] != end["weekly_resets"]
        delta = end["weekly"] - start["weekly"]
        print(f"  weekly counter: {start['weekly']:.0f} % -> {end['weekly']:.0f} % = {delta:+.0f} points" + ("  (RESET CROSSED: unusable)" if crossed else ""))
        if delta > 0 and not crossed:
            print(f"  equivalent cost per point: ${total / delta:,.2f}")
        top = sorted(by_session.items(), key=lambda item: -item[1])
        print("  sessions by equivalent cost: " + ", ".join(f"{name[:8]} ${cost:,.2f}" for name, cost in top[:6]))
    print("  ledger row: | " + args.label + " | " + f"{since:%Y-%m-%d %H:%M}" + " | " + f"{len(by_session)}" + " | " + f"${total:,.2f}" + " | " + (f"{end['weekly'] - start['weekly']:+.0f}" if end else "?") + " | |")


def command_window(args):
    since = parse_time(args.since)
    until = parse_time(args.until) if args.until else None
    rows = collect(since, until, args.project)
    by_model, by_session = summarise(rows)
    print_summary(by_model, by_session, f"window from {since:%a %d %H:%M} UTC")
    for name, cost in sorted(by_session.items(), key=lambda item: -item[1])[:10]:
        print(f"    session {name[:8]}  ${cost:,.2f}")


def command_week(args):
    reading = counter()
    resets = parse_time(reading["weekly_resets"])
    since = resets - datetime.timedelta(days=7)
    rows = collect(since, None, args.project)
    by_model, by_session = summarise(rows)
    total = print_summary(by_model, by_session, f"current week since {since.astimezone():%a %d %H:%M}")
    print(f"  weekly counter now: {reading['weekly']:.0f} %")
    if reading["weekly"] > 0:
        print(f"  equivalent cost per point (rough, all sessions): ${total / reading['weekly']:,.2f}")


def main():
    parser = argparse.ArgumentParser()
    sub = parser.add_subparsers(dest="command", required=True)
    for kind in ("start", "end"):
        p = sub.add_parser(kind)
        p.add_argument("label")
        p.set_defaults(func=command_mark, kind=kind)
    p = sub.add_parser("report")
    p.add_argument("label")
    p.add_argument("--project")
    p.set_defaults(func=command_report)
    p = sub.add_parser("window")
    p.add_argument("--since", required=True)
    p.add_argument("--until")
    p.add_argument("--project")
    p.set_defaults(func=command_window)
    p = sub.add_parser("week")
    p.add_argument("--project")
    p.set_defaults(func=command_week)
    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
