import os, sys, re
sys.path.insert(0, os.environ["SCR"] + "/tools")
from gen import *
OUT = "/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/"
def common(extra):
    return [
 "- **Core sets** (`doctrines/scripture-lists/core-sets.md`, A5) are the proof-texts the confessions print for the Lord's Supper (1 Cor 10:16, 11:23–29, Matt 26:26–28, Mark 14:22–24, Luke 22:19–20…). The caption files read for this tradition's creators are lectures and talks on the doctrine, not verse-by-verse expositions: passage mentions are few. " + extra,
 "- Method: captions through the logged-in transcript panel, passage mentions found with `vq.py` (chapter level), boundaries read cue by cue (`passages/method-apologists.md`).",
 "- Verifier pass: none yet on the blocks below."]
C = "Jordan B. Cooper"; CROLE = "his own channel; AALC pastor 2012–2018 and Chair of Lutheran Dogmatics at ALTS per his own site, `apologists.md`"
spec = {"title": "Pasajes · apologists for the Lutheran Eucharist passages (B5)", "progress": common("**Covered here:** 1 Cor 10:16 and 1 Cor 11:27 (core #1 and #2), the words of institution (Matt 26:26, Luke 22:19, 1 Cor 11:24, core #3 and #5) and John 6, from Cooper's lectures on the Lord's Supper (the Formula of Concord VII lecture and *The Nature of Christ's Presence*; in the second he reads Hoenecke's *Evangelical Lutheran Dogmatics* aloud)."), "entries": [
 {"heading": "1 Cor 10:16 and 1 Cor 11:27 (core #1 and #2)",
  "arguments": [{"id": "A", "title": "Paul speaks of a sharing in Christ's actual body, not only in its power; the severity of the judgment on those who receive unworthily shows that a holy thing is received.", "items": [
     cap("iPAFgIS9gXY", "42:18", "46:59", C, CROLE, note="a lecture on Formula of Concord VII; the cut starts at the end of the previous point and the last cue ends mid-sentence; the speaker names «1 Corinthians 10:16» at 42:25 only as the text being cited and «11:27» at 44:35")]}],
  "count": "**Count and independence.** By person and work: **1 person** (Cooper), 1 work."},
 {"heading": "Matt 26:26; Luke 22:19; 1 Cor 11:24: «this is my body» (core set; no reference is spoken in the block, so the identification with these verses is an `[inference]` from the words)",
  "arguments": [{"id": "A", "title": "Luther took the words of institution literally; Zwingli and the Reformed read them as «represents»; the argument turns on the right hand of the Father.", "items": [
     cap("dgHKo64KzXk", "5:52", "8:03", C, CROLE, note="the first cue starts mid-sentence («do not believe that there is …»); the last ends where the argument about the Reformed reply begins")]}]},
 {"heading": "John 6 (not in the core set; cited by the sources as the counter-text)",
  "arguments": [{"id": "A", "title": "The words of John 6 are not about the sacrament; the words of institution are meant in their proper and natural sense; mouth and bread and wine, but a supernatural mode.", "items": [
     cap("dgHKo64KzXk", "54:23", "57:27", C, CROLE, note="in this part the speaker reads aloud from a Lutheran textbook and comments: the textbook is Hoenecke's *Evangelical Lutheran Dogmatics*, named at 53:12 to 53:54 (the page «129» is said at 56:28), and Chemnitz and Hollaz are named inside the block (54:30, 56:57)")]}],
  "count": "**Count and independence.** By person and work: **1 person** (Cooper), 1 work."}],
 "not_covered": ["- Mark 14:22, Matt 11:28, Matt 9:12 (core #4, #6, #8): no creator of `apologists.md` treats them in the Cooper captions read (*The Lord's Supper*, *The Nature of Christ's Presence*, *Christ's Presence in the Lord's Supper (FC VII)*, *Differences Between the Lutheran and Roman Catholic View of the Eucharist*).", "- Second and third persons: none found."]}
render(spec, OUT + "apologists-lutheran-eucharist.md")
S = "R. C. Sproul"
spec = {"title": "Pasajes · apologists for the Reformed Eucharist passages (B5)", "progress": common("**Covered here:** Luke 22:19–20 (parallel of Matt 26:26–28 and Mark 14:22–24 in the core set) and 1 Cor 11:26. Ortlund's *The Lord's Supper: A Reformed View* quotes older Reformed authors on 1 Cor 10:16 and is not cut (the voice there is a Baptist reading them)."), "entries": [
 {"heading": "Luke 22:19–20 (with Matt 26:26–28, Mark 14:22–24 in the core set)",
  "arguments": [{"id": "A", "title": "The institution is a command to remember: the Supper looks to the past, the present community and the future kingdom.", "items": [
     cap("fth_FkAk968", "2:20", "5:24", S, "Ligonier Ministries, recorded series; died 2017, `apologists.md`", note="Luke 22:19–22 is read aloud inside the segment; the last cue ends in a new thought about traditions and the past")]}],
  "count": "**Count and independence.** By person and work: **1 person** (Sproul), 1 work. His sermon *The Lord's Supper (Luke 22:1–7)* (`2eORFeyfYt8`) was read for passage mentions and quotes the institution words once at 1:47."},
 {"heading": "1 Cor 11:26 (core set)",
  "arguments": [{"id": "A", "title": "«You proclaim the Lord's death»: the Supper itself is the proclamation, the gospel in dramatic form, with visible signs offered to be received and passed on.", "items": [
     cap("i9l9Te1KYak", "1:17", "4:41", "Sinclair B. Ferguson", "Ligonier Ministries; teaching fellow per `apologists.md`", note="the speaker names the verse at 1:17 («1 Corinthians 11:26»); he also cites Gal 3:1 and 1 Cor 11:23 in passing; the last cue is the verse's closing thought before the sign-off")]}],
  "count": "**Count and independence.** By person and work: **1 person** (Ferguson), 1 work."}],
 "not_covered": ["- 1 Cor 10:16–17, 1 Cor 10:2–4, 1 Cor 11:31: none treated in the Sproul captions read (*Real Body and Blood?*, *The Institution of the Lord's Supper*, the Luke 22 sermon); 1 Cor 5:7 is quoted without a number in the Luke 22 sermon (`2eORFeyfYt8` 19:55) and not cut.", "- Second person: Ferguson (above). No third person found."]}
render(spec, OUT + "apologists-reformed-eucharist.md")
O = "Gavin Ortlund"; OROLE = "Truth Unites; Baptist per `apologists.md` (agent's call, with the 1689)"
spec = {"title": "Pasajes · apologists for the Baptist Eucharist passages (B5)", "progress": common("**Covered here:** John 6 and 1 Cor 10:3–4, the passages Ortlund argues for a spiritual presence (neither is in A5's Baptist core set, which has 1 Cor 11:23–26, 1 Cor 10:16–17, Matt 26:26, Matt 28:19–20, 1 Cor 10:21). Whether his view matches the 1689 is not checked: DECISIONS 2026-11-01 evening, item 8 keeps «Ortlund's video on the Lord's Supper» (it does not say which; the Reformed page's video is «The Lord's Supper: A Reformed View», `wapRHM2QmyU`) with a later check against the 1689 text; this block comes from the other video, «A Baptist Case for Real Presence» (`qGIRjz5qSpA`), which that decision does not name."), "entries": [
 {"heading": "John 6 and 1 Cor 10:3–4 (not in the core set)",
  "arguments": [{"id": "A", "title": "Spiritual presence: Christ is truly present to faith, not locally or carnally; John 6's eating is the union with Christ that the Supper expresses most fully (1 Cor 10:3–4).", "items": [
     cap("qGIRjz5qSpA", "22:26", "26:04", O, OROLE, note="the first cue starts mid-sentence; the video is «A Baptist Case for Real Presence in the Eucharist»; the segment ends where the next question («if you are at a church that doesn't have real presence») begins")]}],
  "count": "**Count and independence.** By person and work: **1 person** (Ortlund), 1 work."}],
 "not_covered": ["- The core-set passages (1 Cor 11:23–26, 10:16–17, Matt 26:26, Matt 28:19–20, 1 Cor 10:21): for Matt 28:19–20 the Baptist Baptism file has Ben Robin (about baptism, not the Supper); the verse index found no creator of `apologists.md` treating the others; Ortlund's 1 Cor 10:16 mention (Reformed View) is a quotation of older authors.", "- Second and third persons: none found."]}
render(spec, OUT + "apologists-baptist-eucharist.md")
H = "the hosts of The Lord of Spirits (Fr. Stephen De Young and Fr. Andrew Stephen Damick; the captions do not say which of the two speaks)"
HROLE = "Ancient Faith; call-in show (pre-recorded, with voicemails); this upload is dated 2025-02-04 and its description says the episode first aired 2022-11-25; 3 h 34 min"
spec = {"title": "Pasajes · apologists for the Orthodox Eucharist passages (B5)", "progress": common("**Covered here:** 1 Cor 10:17 within 10:14–22 (core #3), John 6:51–58 (core #2, #9, #10), John 19:34 (core #7) and the words of institution at the Passover table (Matt 26:26–28 core #1, Luke 22:19 core #11), from the Ancient Faith episode *Lord of Spirits — Thanksgiving [Ep. 55]*. The two hosts speak in dialogue and the captions have no speaker labels, so they count together as one person.") , "entries": [
 {"heading": "1 Cor 10:14–22, with 1 Cor 10:17 (core #3)",
  "arguments": [{"id": "A", "title": "The Eucharist is a sacrifice and a table at an altar (1 Cor 10:14–22); «remembrance» in Scripture is the language of sacrifice, not of mere recollection.", "items": [
     cap("W5HhTyuo6Dg", "40:32", "49:12", H, HROLE, note="the passage is read at 41:07; the segment starts a little before it and the last cue ends mid-thought")]}],
  "count": "**Count and independence.** By person and work: the two hosts jointly, 1 work."},
 {"heading": "John 6:51–58 (core #2, #9 and #10: John 6:54, 6:51, 6:56)",
  "arguments": [{"id": "A", "title": "John 6 is about the Eucharist: the flesh and blood are real food and drink, answered in the episode against readings that make it a metaphor or a later community's addition.", "items": [
     cap("W5HhTyuo6Dg", "2:22:11", "2:34:33", H, HROLE, note="the passage is read at 2:10:25 (from verse 22) and again at 2:22:25 (verses 52 to 59); the segment starts at verse 52 and the last cue ends mid-thought, the discussion of the metaphor reading goes on")]}],
  "count": "**Count and independence.** By person and work: the two hosts jointly, 1 work."},
 {"heading": "John 19:34 (core #7)",
  "arguments": [{"id": "A", "title": "The blood and water from the pierced side recall Adam's side opened in Genesis 2 and are connected to the Eucharist and the Church as bride.", "items": [
     cap("W5HhTyuo6Dg", "2:43:58", "2:46:03", H, HROLE, note="the passage is named by the speaker before the block starts («John 19 … verses 31 through 37», 2:43:12; «John 19», 2:44:19); the block starts at 2:43:58; the last cue ends mid-sentence")]}],
  "count": "**Count and independence.** By person and work: the two hosts jointly, 1 work."},
 {"heading": "Matt 26:26–28 and Luke 22:19: «this is my body broken for you» at the Passover (core set; the wording is that of 1 Cor 11:24 and 11:26 («until he comes»), so the identification with Matt 26:26–28 and Luke 22:19 is an `[inference]`)",
  "arguments": [{"id": "A", "title": "Christ institutes the Eucharist as the renewed Passover, before the event, with no stated end other than his return.", "items": [
     cap("W5HhTyuo6Dg", "1:16:30", "1:18:29", H, HROLE, note="a part of a longer discussion of the Passover and the Eucharist from about 1:09:24; the first and last cues start and end mid-sentence")]}],
  "count": "**Count and independence.** By person and work: the two hosts jointly, 1 work."}],
 "not_covered": ["- 1 Cor 11:28–29 and John 20:29: the episode's captions were searched for «First Corinthians 11», «1 Corinthians 11», «John 20» and «do this in remembrance» and name neither as a passage. 1 Cor 11:26 is quoted in words at 1:18:02 and 11:23 is echoed at 1:18:45 inside the institution block, with no number; the remembrance of 1 Cor 11:24 / Luke 22:19 is discussed at 46:31 to 47:52 inside the first block, without a reference.", "- Second and third persons: none found; no other Orthodox text or captions on the Eucharist were found (Trenham's and Dyer's videos found by title search were not fetched)."]}
render(spec, OUT + "apologists-orthodox-eucharist.md")
print("ok")
