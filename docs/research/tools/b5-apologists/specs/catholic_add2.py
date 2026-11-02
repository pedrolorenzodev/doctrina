import os, sys, re
sys.path.insert(0, os.environ["SCR"] + "/tools")
from gen import *
P = "/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/"
NOTE = "added by session B5; the page's byline or label is the only speaker evidence"
adds = [
 ("apologists-catholic-sola-scriptura.md", "## 8. Sola Scriptura · Luke 2:19; 2:51 (page entry 8; added by B5)", "Luke's Gospel draws on oral tradition from Mary (Luke 2:19, 2:51).",
  web_auto("https://www.catholic.com/audio/ddp/mark-and-luke-not-eyewitnesses", "Luke preserves traditions derived from the Virgin Mary", "Jimmy Akin", "Mark and Luke Not Eyewitnesses", "*A Daily Defense* (Catholic Answers)", "13 Feb 2023", note=NOTE)),
 ("apologists-catholic-eucharist.md", "## 13. Eucharist · 1 Cor 4:1; 11:34 (page entry 13; added by B5)", "Paul says he will give further directions (1 Cor 11:34): not everything he taught on the Eucharist is written.",
  web_auto("https://www.catholic.com/audio/drk/tradition-and-scripture-meeting-the-identity-challenge", "In 1 Corinthians 11:34, after giving instructions about the Eucharist", "Karlo Broussard", "Tradition and Scripture: Meeting the “Identity” Challenge", "*Dr. Karlo* (Catholic Answers), transcript on catholic.com", "8 Jul 2026", note=NOTE)),
]
for fn, head, argtitle, (blk, st) in adds:
    t = open(P + fn).read().split("\n")
    k = next(i for i, l in enumerate(t) if l.startswith("## Not done"))
    ins = [head, "", f"**Argument A · {argtitle}**", blk, "", f"**Count and independence.** By person and work: **1 person** ({st['person']}), 1 work; by organisation 1 (Catholic Answers). The passage had no quote before B5. Not a verse-by-verse exposition of the page's passage: the speaker uses the verse inside a broader argument about tradition.", "**Contested within the tradition:** `[not searched]`.", ""]
    t[k:k] = ins
    open(P + fn, "w").write("\n".join(t))
    print("added", fn, st["person"], st["words"])
