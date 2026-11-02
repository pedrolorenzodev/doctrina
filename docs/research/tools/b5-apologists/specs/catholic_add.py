import os, sys, re
sys.path.insert(0, os.environ["SCR"] + "/tools")
from gen import *
P = "/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/"
NOTE = "added by session B5; the page's byline or label is the only speaker evidence"
adds = [
 ("apologists-catholic-baptism.md", "## 6. Baptism · Gal 3:27", "B", "Paul names baptism, not faith alone, as the way one puts on Christ (Gal 3:26–28); circumcision gave way to baptism (Col 2).",
  web_auto("https://www.catholic.com/audio/cot/answering-servus-christi-on-salvation-by-faith-alone", "Let’s go to what Paul actually said here. First what he says in Galatians 3:26 through 28", "Trent Horn", "Answering “Servus Christi” on Salvation by Faith Alone", "*The Counsel of Trent* (Catholic Answers), transcript on catholic.com", "30 Jul 2020", note=NOTE + "; his opponent's turns («Josh:») are not in the block"),
  "Horn (Counsel of Trent, 2020)"),
 ("apologists-catholic-papacy.md", "## 8. Papacy · Acts 2:14", "B", "Peter leads in Acts: he speaks at Pentecost, performs the first miracle, rules on Ananias and Sapphira.",
  web_auto("https://www.catholic.com/magazine/online-edition/who-was-at-the-helm-in-the-book-of-acts-peter-james", "It is St. Peter who is in charge at Pentecost and preaches the first sermon", "Tim Staples", "Who Was at the Helm in the Book of Acts? Peter? James?", "*Catholic Answers Magazine*", "2 Oct 2015", note=NOTE + "; Staples is «apologist emeritus at Catholic Answers» on his profile (https://www.catholic.com/profile/tim-staples): not a person of `apologists.md`, admitted as an agent's call under the late-night rule (passes proxy 1; the profile lists a philosophy degree and graduate theology study, no book)", cap_words=800),
  "Staples (magazine, 2015)"),
 ("apologists-catholic-eucharist.md", "## 9. Eucharist · Gen 14:18", "B", "Melchizedek's bread and wine foreshadow the Eucharist; Christ's priesthood is «according to the order of Melchizedek».",
  web_auto("https://www.catholic.com/magazine/online-edition/what-is-the-point-of-a-priest", "according to the order of Melchizedek", "Tom Nash", "What Is the Point of a Priest?", "*Catholic Answers Magazine*", "9 Mar 2026", note=NOTE + "; Nash is «a staff apologist for Catholic Answers» and the author of three books on his profile (https://www.catholic.com/profile/tom-nash): not a person of `apologists.md`, admitted as an agent's call (passes proxies 1 and 2)"),
  "Nash (magazine, 2026)"),
 ("apologists-catholic-sola-scriptura.md", "## 8. Sola Scriptura · Luke 2:19", "B", "Luke's Gospel draws on oral tradition from Mary (Luke 2:19, 2:51).",
  web_auto("https://www.catholic.com/audio/ddp/mark-and-luke-not-eyewitnesses", "Luke preserves traditions derived from the Virgin Mary", "Jimmy Akin", "Mark and Luke Not Eyewitnesses", "*A Daily Defense* (Catholic Answers)", "13 Feb 2023", note=NOTE),
  None),
 ("apologists-catholic-eucharist.md", "## 13. Eucharist · 1 Cor 4:1", "A", "Paul says he will give further directions (1 Cor 11:34): not everything he taught on the Eucharist is written.",
  web_auto("https://www.catholic.com/audio/drk/tradition-and-scripture-meeting-the-identity-challenge", "In 1 Corinthians 11:34, after giving instructions about the Eucharist", "Karlo Broussard", "Tradition and Scripture: Meeting the “Identity” Challenge", "*Dr. Karlo* (Catholic Answers), transcript on catholic.com", "8 Jul 2026", note=NOTE),
  "Broussard (Dr. Karlo, 2026)"),
]
for fn, head, argid, argtitle, (blk, st), label in adds:
    t = open(P + fn).read().split("\n")
    idx = [i for i, l in enumerate(t) if l.startswith(head)]
    if not idx:
        print("NO SECTION", fn, head); continue
    i = idx[0]
    j = next(k for k in range(i + 1, len(t)) if t[k].startswith("**Count and independence."))
    ins = ["", f"**Argument {argid} (added by B5) · {argtitle}**", blk]
    t[j:j] = ins
    t.insert(j + len(ins) + 1, f"**B5 addition:** {st['person']} added to this passage (work: «{st['work']}», {st['words']} words). Recount: the persons listed in the line above plus {st['person']}; by organisation still 1 (Catholic Answers)." )
    open(P + fn, "w").write("\n".join(t))
    print("added", fn, head, st["person"], st["words"])
