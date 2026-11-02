import os, sys
sys.path.insert(0, os.environ["SCR"] + "/tools")
from gen import *

P = "Fr. Josiah Trenham (named by the video's description: «Father Josiah» in its text, #FatherJosiahTrenham in its hashtags)"
ROLE = "Patristic Nectar; the description lists the five chapters"
OLD1 = "A second miracle of holy baptism is new birth. Is new birth. We see this of course in Jesus's conversation with Nicodemus in the third chapter of St. John's gospel where Jesus speaks about being born from again being born again by water and the spirit…"
H = "the hosts of The Lord of Spirits (Fr. Stephen De Young and Fr. Andrew Stephen Damick; the captions do not say which of the two speaks)"
HROLE = "Ancient Faith; call-in show, 2 h 54 min"

spec = {
 "title": "Pasajes · apologists for the Orthodox Baptism passages (session B3 pilot, extended in B5)",
 "progress": [
  "- B3 wrote entry 1 (one short quote). **B5 (late night):** the same video cut along the chapters its own description lists (each chapter is one «miracle of baptism»; four of the five are stored, «Miracle #3: Forgiveness of Sins», 4:52 to 5:40, cites no passage and is not), stored long, plus the passages it reads that are not in the page's list. Core set of the Orthodox Baptism page (`doctrines/scripture-lists/core-sets.md`, A5, ranks 1 to 6): John 3:5, Gal 3:27, 1 Cor 6:11, Acts 16:33, Acts 19:4, Acts 2:38.",
  "- **Speaker:** the video is on Patristic Nectar's channel; its description says «Father Josiah explores the biblical and historic Christian understanding of baptism…», gives the chapter times and ends with the hashtags #FatherJosiahTrenham #PatristicNectar (`yt-dlp` description, read 2026-11-01 and again by the verifier). So the description names Fr. Josiah Trenham; the captions carry no speaker label.",
  "- **Added later (B5):** four blocks from the Ancient Faith episode *Lord of Spirits — Baptism Now Saves [Ep. 54]* (uploaded 2023-10-11, De Young and Damick as hosts of a call-in show; the captions have no speaker labels, so no sentence is attributed to one host).",
  "- Verifier pass (B5, `passages/verification-b5-1.md`): 37 items, 6 wrong, 1 unconfirmable; the six are corrected here (the speaker's surname is in the description's hashtags; a sound tag removed; the Kabasilas note; four chapters stored; three blocks from the episode; the core set). Its flags remain: several blocks start or end mid-sentence; the Gal 3:27 block was added after the pass and has not been read by a verifier.",
 ],
 "entries": [],
}
e1 = {"heading": "1. Baptism · John 3:5 (page entry 1; core set; Filareto's catechism, question 288, and Dositheus' confession, decree XVI, cite it for the birth of water and Spirit)",
      "arguments": [{"id": "A", "title": "The new birth of John 3 is holy baptism; Titus 3's «washing of regeneration» is the same.", "items": [
        cap("Dc8PHJ76uUY", "3:58", "4:44", P, ROLE, note="the chapter «Miracle #2: New Birth» of the description, 3:58 to 4:52", old=OLD1)]}]}
x1 = {"heading": "Other passages the same video reads for baptism (not in the page's list, or not in its core set)",
      "arguments": [
        {"id": "A", "title": "Rom 6:3–11: union with Christ's death and resurrection in baptism.", "items": [
          cap("Dc8PHJ76uUY", "0:42", "3:50", P, ROLE, note="chapter «Miracle #1: Union with Christ», 0:42 to 3:58; the speaker reads Rom 6:3–11 aloud inside it")]},
        {"id": "B", "title": "1 Cor 12:13: baptism is entrance into the Church.", "items": [
          cap("Dc8PHJ76uUY", "5:40", "6:37", P, ROLE, note="chapter «Miracle #4: Entering the Church», 5:40 to 6:45")]},
        {"id": "C", "title": "1 Pet 3:21 («baptism now saves you») and Matt 28:19–20 (baptism as the beginning of discipleship).", "items": [
          cap("Dc8PHJ76uUY", "6:46", "8:13", P, ROLE, note="chapter «Miracle #5: Baptism Saves You», 6:45 to the end of the video; the last cue holds the first words of the St. Nicholas Kabasilas quotation («The great St. Nicholas Kabasilos, he says…»)")]},
      ],
      "count": "**Count and independence.** By person and work: **1 person** (Fr. Josiah Trenham, per the description's hashtags), 1 work. Rom 6:3–11 is identified from the read text (the speaker never says «Romans»; `[inference]`); 1 Cor 12:13 is named by the speaker; Matt 28:19–20 is identified from the wording («go into all the world, make disciples of all the nations»). Matt 28:19 is the page's entry 3."}
e6 = {"heading": "6. Baptism · Col 2:11–12 (page entry 6; Filareto's catechism cites it)",
      "arguments": [{"id": "A", "title": "Baptism is how the benefits of Christ's circumcision are bestowed; Paul's argument is that Gentiles need no circumcision of their own.", "items": [
        cap("iwQRhEwtQ-I", "1:06:46", "1:10:53", H, HROLE, note="the first half of the episode, a dialogue; the passage is read aloud at 1:07:04")]}],
      "count": "**Count and independence.** By person and work: **the two hosts of one show, jointly (no sentence can be attributed to one of them), 1 work**; counted as **1** until the speakers can be separated. Not Trenham (a different Orthodox teacher)."}
eg = {"heading": "Gal 3:27 (core set #2)",
      "arguments": [{"id": "A", "title": "Gal 3:26–29: the faithful receive the status of Abraham's offspring through baptism, not through circumcision.", "items": [
        cap("iwQRhEwtQ-I", "1:01:11", "1:03:18", H, HROLE, note="Galatians 3 is read at 1:01:27 and 1:02:14; the last cue ends mid-thought")]}],
      "count": "**Count and independence.** By person and work: the two hosts jointly, 1 work."}
x2 = {"heading": "Other passages the Lord of Spirits episode reads for baptism (not in the page's list, or not in its core set)",
      "arguments": [
        {"id": "A", "title": "1 Cor 10:1–2: the crossing of the Red Sea as baptism.", "items": [
          cap("iwQRhEwtQ-I", "1:56:25", "2:03:10", H, HROLE, note="the passage is introduced at 1:57:33")]},
        {"id": "B", "title": "1 Pet 3:18–22: the episode's title text: Noah, the spirits in prison, and baptism as the beginning of theosis.", "items": [
          cap("iwQRhEwtQ-I", "2:03:17", "2:10:27", H, HROLE, note="the passage is read aloud at 2:03:25; the segment goes on past 2:10:27 on spiritual warfare")]}],
      "count": "**Count and independence.** By person and work: the two hosts jointly, 1 work."}
spec["entries"] = [e1, eg, e6, x1, x2]
spec["not_covered"] = [
 "- 1 Cor 6:11, Acts 16:33, Acts 19:4, Acts 2:38 (the next rows of A5's core set, a tie of one-document passages): not treated in the Patristic Nectar video; the Lord of Spirits episode mentions Matt 28 at 2:14:49 and was not searched for the others beyond a keyword pass (the household of Stephanas is named at 2:13:08, 1 Cor 1:16; households at 38:22 and 47:43 are about servants and Abraham's household; not searched further); Trenham's *Orthodoxy & Baptism, Pt. 1* (Protecting Veil) quotes no passage in its captions (it is about receiving converts).",
 "- Second person: none apart from the two hosts of the Ancient Faith episode, counted together as one (no sentence can be attributed to either).",
]
st = render(spec, "/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/apologists-orthodox-baptism.md")
print(st)
