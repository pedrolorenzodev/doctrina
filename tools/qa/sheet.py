import sys, os
from PIL import Image, ImageDraw
shots = "tmp/qa/shots"
keys = sys.argv[2:]
out = sys.argv[1]
theme = os.environ.get("QA_THEME", "light")
widths = [int(x) for x in os.environ.get("QA_SHEET_W", "390,1440,2560").split(",")]
H = 430
rows = []
for k in keys:
    tiles = []
    for w in widths:
        p = f"{shots}/{k}__{w}__{theme}.png"
        if not os.path.exists(p):
            continue
        im = Image.open(p).convert("RGB")
        s = H / im.height
        tiles.append(im.resize((max(1, int(im.width * s)), H), Image.LANCZOS))
    if not tiles:
        continue
    gap = 8
    W = sum(t.width for t in tiles) + gap * (len(tiles) + 1)
    row = Image.new("RGB", (W, H + 22), (60, 60, 60))
    d = ImageDraw.Draw(row)
    d.text((6, 4), f"{k} [{theme}] " + " / ".join(map(str, widths)), fill=(255, 255, 255))
    x = gap
    for t in tiles:
        row.paste(t, (x, 20))
        x += t.width + gap
    rows.append(row)
W = max(r.width for r in rows)
sheet = Image.new("RGB", (W, sum(r.height + 4 for r in rows)), (30, 30, 30))
y = 0
for r in rows:
    sheet.paste(r, (0, y))
    y += r.height + 4
sheet.save(out)
print(out, sheet.size)
