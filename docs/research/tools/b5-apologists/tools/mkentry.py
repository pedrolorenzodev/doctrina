import sys, os, re
sys.path.insert(0, os.environ["SCR"] + "/tools")
import longform as L
url, a1 = sys.argv[1], sys.argv[2]
cap = int(sys.argv[3]) if len(sys.argv) > 3 else 650
h = L.fetch(url); paras = L.paragraphs(h)
i = L.locate(paras, a1)
meta = [t for k, t in paras[:6]]
raw = L.clean(re.sub(r"(?s).*?<h1", "<h1", h, count=1))[:300].replace("\n", " | ")
print("META:", raw)
if i is None: print("NO MATCH"); sys.exit()
kind, a, b = L.segment(paras, i, url, cap)
print("kind", kind, "paras", a, b, "of", len(paras), "anchor para", i)
for j in range(a, b + 1):
    print(f"[{j}] ({paras[j][0]}) {paras[j][1]}")
