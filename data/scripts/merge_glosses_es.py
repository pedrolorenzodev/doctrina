"""Merge tab-separated 'english<TAB>spanish' files into data/site/words/glosses-es.json (own Spanish glosses, AI-drafted).

Usage: python3 -I data/scripts/merge_glosses_es.py <out.json> <file.tsv> [<file.tsv> ...]
Later files win on a conflict; every conflict is printed.
"""
import json
import sys
from pathlib import Path

out = Path(sys.argv[1])
data = {
    "status": "draft, NOT verified by Pedro; automatic: Spanish glosses drafted by an AI from STEPBible's English glosses (CC BY 4.0); OpenGNT's Spanish is not used",
    "es": {},
}
if out.exists():
    data.update(json.loads(out.read_text(encoding="utf-8")))
es = data["es"]
added = changed = bad = 0
for f in sys.argv[2:]:
    for n, line in enumerate(Path(f).read_text(encoding="utf-8").splitlines(), 1):
        if not line.strip():
            continue
        parts = line.split("\t")
        if len(parts) != 2 or not parts[0].strip() or not parts[1].strip():
            print("bad line", f, n, repr(line))
            bad += 1
            continue
        k, v = parts[0].strip(), parts[1].strip()
        if k in es and es[k] != v:
            print("conflict", repr(k), es[k], "->", v)
            changed += 1
        elif k not in es:
            added += 1
        es[k] = v
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(data, ensure_ascii=False, indent=0, sort_keys=False), encoding="utf-8")
print("entries", len(es), "added", added, "changed", changed, "bad", bad)
