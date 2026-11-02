import os, sys, re
sys.path.insert(0, os.environ["SCR"] + "/tools")
from gen import *
P = "/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/"
NOTE = "added by session B5; the page's byline is the only speaker evidence"
adds = [
 ("apologists-catholic-baptism.md", "## 9. Baptism · the household baptisms", "B", "Whole households were baptized (Lydia, the jailer, Stephanas); presumably children among them.",
  web("https://www.catholic.com/magazine/online-edition/should-or-can-babies-be-baptized", "Lydia, identified as", "Presumably these included children", "Karl Keating", "Should (or Can) Babies Be Baptized?", "*Catholic Answers Magazine*", "24 Aug 2015", note=NOTE + "; Keating is not a person of `apologists.md`: he founded Catholic Answers (not checked on a page here), admitted as an agent's call under the late-night rule for passages with fewer than two persons")),
 ("apologists-catholic-sola-scriptura.md", "## 14. Sola Scriptura · 1 John 2:20", "B", "John's «you have no need that anyone should teach you» does not deny a teaching authority: the context warns against false teachers and tells readers to hold what they heard from the beginning.",
  web("https://www.catholic.com/magazine/online-edition/johns-first-letter-to-the-protestants", "For example, he seems to teach the Protestant doctrine of the inner testimony", "Christians ought to listen to", "Karlo Broussard", "John’s First Letter to the Protestants?", "*Catholic Answers Magazine*", "13 Sep 2016", note=NOTE + "; the block runs across paragraphs of the article that also treat 1 John 5:13 and are not part of this passage")),
]
for fn, head, argid, argtitle, (blk, st) in adds:
    t = open(P + fn).read().split("\n")
    idx = [i for i, l in enumerate(t) if l.startswith(head)]
    if not idx: print("NO SECTION", fn, head); continue
    i = idx[0]
    j = next(k for k in range(i + 1, len(t)) if t[k].startswith("**Count and independence."))
    ins = ["", f"**Argument {argid} (added by B5) · {argtitle}**", blk]
    t[j:j] = ins
    t.insert(j + len(ins) + 1, f"**B5 addition:** {st['person']} added to this passage (work: «{st['work']}», {st['words']} words). Recount: the persons listed in the line above plus {st['person']}; by organisation still 1 (Catholic Answers).")
    open(P + fn, "w").write("\n".join(t))
    print("added", fn, st["person"], st["words"])
