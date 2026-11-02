import sys,os
sys.path.insert(0,os.environ['SCR']+'/tools')
from render import render_passage
P=[]
P.append(render_passage(1,"1 (supplement to the pilot). Papacy · Matt 16:19, the keys (page entry 1; the pilot `apologists-catholic.md` has Akin and Broussard on «rock»)",[
 ("Argument A · The keys echo Isaiah 22:22: Peter is given authority to oversee the Church, including to bind and loose.",[
  dict(src='magazine:refuting-papal-myths-peter-was-not-a-pope',who='Trent Horn',quote="Just as King Hezekiah gave Eli’akim authority to oversee the kingdom of Israel, Christ gave Peter authority to oversee his Church (i.e., the “keys to the kingdom”), which included the authority to “bind and loose”—in other words, to determine official doctrine and practice.",loc="the paragraph after the quotation of Matt 16:18–19, beginning «This passage is foreshadowed by Isaiah 22:22…»")]),
 ],"**Count and independence.** New here: **1 person** (Horn); with the pilot's Akin and Broussard (on «rock»), the page entry now has 3 persons across the two files, all Catholic Answers staff (by organisation: 1).\n**Contested within the tradition:** `[not searched]`."))
P.append(render_passage(5,"5. Papacy · Matt 18:18; 28:16–20 (page entry 5)",[
 ("Argument A · Jesus gives «the Church» binding authority; it cannot be the invisible church.",[
  dict(src='drk:this-argument-proves-sola-scriptura-false',quote="Notice Jesus presents “the Church” as an agent who has the authority to make judgments that are binding—so binding, in fact, that rejecting them puts you out of communion with Christ’s Church.",loc="the paragraph after the quotation of Matt 18:15–18")]),
 ],"**Count and independence.** By person and work: **1 person** (Broussard), 1 work. By organisation: 1. Gap stated: the quote is about the Church's authority, an argument used for the papacy only indirectly. Matt 28:16–20 not covered.\n**Contested within the tradition:** `[not searched]`."))
P.append(render_passage(12,"12. Papacy · Eph 2:20; Rev 21:14; 1 Pet 2:4 (page entry 12)",[
 ("Argument A · The Church is built on the foundation of the apostles.",[
  dict(src='tjap:the-churchs-five-foundations',quote="But he also says that the temple is built on the foundation of the apostles and prophets.",loc="the paragraph after the quotation of Eph 2:19–21"),
  dict(src='magazine:refuting-papal-myths-the-papacy-is-unbiblical-and-unhistorical',who='Trent Horn',quote="it was built on “the foundation of the apostles” (Eph. 2:20)",loc="the paragraph that begins «Catholics believe, on the other hand…»")]),
 ],"**Count and independence.** By person and work: **2 persons** (Akin, Horn). By organisation: **1**. Both state the apostolic foundation; neither draws the papal conclusion in the quoted sentence (Akin's title is about the Church's foundations, Horn's article about the papacy): a gap against the page entry's use `[inference]`.\n**Contested within the tradition:** `[not searched]`."))
open(os.environ['SCR']+'/pap2.md','w').write(''.join(P)); print('ok')
