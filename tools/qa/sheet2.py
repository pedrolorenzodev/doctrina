import sys, os
from PIL import Image, ImageDraw
d = "tmp/qa/inter"
out = sys.argv[1]
w = sys.argv[2]
theme = sys.argv[3]
keys = sys.argv[4:]
H = int(os.environ.get("QA_H", "560"))
tiles = []
for k in keys:
    p = f"{d}/{k}__{w}__{theme}.png"
    if not os.path.exists(p):
        continue
    im = Image.open(p).convert("RGB")
    s = H / im.height
    t = im.resize((max(1, int(im.width * s)), H), Image.LANCZOS)
    c = Image.new("RGB", (t.width, H + 16), (60, 60, 60))
    ImageDraw.Draw(c).text((4, 2), k, fill=(255, 255, 255))
    c.paste(t, (0, 16))
    tiles.append(c)
W = sum(t.width for t in tiles) + 6 * (len(tiles) + 1)
sheet = Image.new("RGB", (W, H + 16), (30, 30, 30))
x = 6
for t in tiles:
    sheet.paste(t, (x, 0))
    x += t.width + 6
sheet.save(out)
print(out, sheet.size)
