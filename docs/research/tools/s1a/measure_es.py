import json
import sys
from pathlib import Path

root = Path(sys.argv[1])
tot = {"grc": [0, 0], "hbo": [0, 0]}
for f in (root / "verses").rglob("*.json"):
    d = json.loads(f.read_text(encoding="utf-8"))
    lang = d["lang"]
    for v in d["verses"].values():
        for w in v["words"]:
            tot[lang][0] += 1
            if w.get("es"):
                tot[lang][1] += 1
for L, (n, e) in tot.items():
    print(L, "words", n, "with es", e, "missing", n - e, "pct", round(100 * e / max(n, 1), 1))
