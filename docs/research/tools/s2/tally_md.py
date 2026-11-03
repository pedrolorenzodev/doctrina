import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tally as T
b = T.tally("HEAD"); a = T.tally("work")
def row(s):
    if s is None: return None
    return [len(s)] + [sum(1 for _, n in s if n == k) for k in (0, 1, 2)] + [sum(1 for _, n in s if n >= 3)]
L = ["| Page | Sections before / after | 0 before → after | 1 | 2 | ≥ 3 | ≥ 2 before → after |", "|---|---|---|---|---|---|---|"]
tot = {t: [[0]*5, [0]*5] for t in T.TR}
for d in T.DOC:
    for t in T.TR:
        rb, ra = row(b[(t, d)]), row(a[(t, d)])
        rb = rb or [0]*5
        L.append(f"| {t} · {d} | {rb[0]} → {ra[0]} | {rb[1]} → {ra[1]} | {rb[2]} → {ra[2]} | {rb[3]} → {ra[3]} | {rb[4]} → {ra[4]} | {rb[3]+rb[4]} → {ra[3]+ra[4]} |")
        for i in range(5): tot[t][0][i] += rb[i]; tot[t][1][i] += ra[i]
L += ["", "| Tradition | Sections before → after | ≥ 2 persons before → after |", "|---|---|---|"]
for t in T.TR:
    x, y = tot[t]; L.append(f"| {t} | {x[0]} → {y[0]} | {x[3]+x[4]} → {y[3]+y[4]} |")
print("\n".join(L))
