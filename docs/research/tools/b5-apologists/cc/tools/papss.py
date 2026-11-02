import sys,os
sys.path.insert(0,os.environ['SCR']+'/tools')
from render import render_passage
P=[]
P.append(render_passage(4,"4. Papacy · Luke 22:31–32 (page entry 4 of `papacy-catholic.md`)",[
 ("Argument A · Jesus prays for Simon alone and tells him to strengthen his brothers: a leadership role among the Twelve, exercised as service.",[
  dict(src='tjap:st-peter-what-nobody-knows',quote="Jesus has prayed for Simon specifically so that his faith might not fail, and he says that when Simon has turned back, he is to strengthen his brothers. So here we see Jesus—once again—giving Peter a special leadership role among the Twelve.",loc="the paragraph after «Notice the shift between y’all and you.»"),
  dict(src='sp:142684',quote="Now those three words strengthen your brethren, get to the heart of the papacy and we can identify it in a really simple three-step process.",loc="the paragraph that begins «…ay not fail, but he knows it will.»"),
  dict(src='sp:142684',quote="When he says, strengthen your brethren contextually, he’s talking about the others who are being tempted by Satan that night. The other apostles",loc="same paragraph, a few sentences later")]),
 ],"**Count and independence.** By person and work: **2 persons** (Akin, Heschmeyer), 2 works. By organisation: **1**. Horn: the Counsel of Trent episode with Steve Ray discusses this verse, but its transcript labels do not settle which of the two speakers says the lines (consecutive turns carry the same label), so nothing is quoted. Broussard: not found.\n**Contested within the tradition:** `[not searched]`. **Applies the official teaching:** `[not checked]` against the dossier row."))
open(os.environ['SCR']+'/pap_sections.md','w').write(''.join(P))
S=[]
S.append(render_passage(2,"2. Sola Scriptura · 2 Thess 2:15 (page entry 2 of `sola-scriptura-catholic.md`)",[
 ("Argument A · Paul tells them to hold the traditions he taught «by word or by letter»: God's word comes in oral and written form.",[
  dict(src='tjap:sola-scriptura-trying-something-new',quote="there are passages—particularly in the New Testament—that indicate we should adhere to God’s word regardless of whether it is communicated to us in oral or written form.",loc="the paragraph «Scripture Endorses a Different System», just before the quotation of 2 Thess 2:15"),
  dict(src='drk:are-catholics-still-wrong-about-pauls-traditions',quote="I argue that White’s claim—that these oral traditions were a closed, completed body of revelation identical to Scripture—begs the question, conflicts with the belief that revelation continued until the death of the last apostle, and fails to fit the context of the passage.",loc="the episode summary above the transcript, in the first person under the byline «Karlo Broussard»"),
  dict(src='sp:un-biblical-teachings-vs-sola-scriptura',quote="he reminds them in Second Thessalonians to stand firm and hold to the traditions which you were taught by us either by word of mouth or by epistle.",loc="the paragraph that begins «…all traditions are below scripture.»")]),
 ],"**Count and independence.** By person and work: **3 persons** (Akin, Broussard, Heschmeyer), 3 works. By organisation: **1**. Horn: not found.\n**Contested within the tradition:** `[not searched]`. **Applies the official teaching:** `[not checked]` against the dossier row."))
S.append(render_passage(3,"3. Sola Scriptura · Jude 3 (page entry 3)",[
 ("Argument A · «Once for all delivered» does not mean all revelation is in Scripture; Jude would have to be the last book, and the rest of it would fall.",[
  dict(src='tjap:faith-delivered-once-for-all',quote="if Jude were saying that all public revelation had ended, then—since Scripture is itself public revelation—the book of Jude itself would have to be the last book of Scripture to be penned.",loc="the paragraph «Not the Last Book?»"),
  dict(src='drk:sacred-tradition-overstepping-boundaries',quote="if that verse means everything was already fully delivered at that point, then they’d have to toss out the rest of Jude, or at least everything written after verse 3.",loc="the paragraph that quotes «the Faith [has been] once for all delivered to the saints»")]),
 ],"**Count and independence.** By person and work: **2 persons** (Akin, Broussard). By organisation: **1**. Heschmeyer has a mention of Jude 1:3 (episode «Are Catholics more divided than Protestants?») not quoted here; Horn: not found.\n**Contested within the tradition:** `[not searched]`."))
S.append(render_passage(4,"4. Sola Scriptura · 1 Tim 3:15 (page entry 4)",[
 ("Argument A · The church is «the pillar and bulwark of the truth».",[
  dict(src='sp:the-biblical-case-for-infallibility',quote="Well, what’s the household of God? It’s the church, the living God, the pillar and bulwark of the truth.",loc="the paragraph that begins «…how one ought to behave in the household of God»"),
  dict(src='magazine:refuting-papal-myths-the-papacy-is-unbiblical-and-unhistorical',who='Trent Horn',quote="St. Paul tells us this Church is “the pillar and foundation of truth” (1 Tim. 3:15) and it was built on “the foundation of the apostles” (Eph. 2:20).",loc="the paragraph that begins «Catholics believe, on the other hand, that divine revelation comes from God’s word…»; on the papacy, used here for the church-as-pillar claim")]),
 ],"**Count and independence.** By person and work: **2 persons** (Heschmeyer, Horn), 2 works. By organisation: **1**, since Horn's article is in the magazine of Catholic Answers where he is staff; the quote is from a 2015 article about the papacy. Akin, Broussard: not found.\n**Contested within the tradition:** `[not searched]`."))
S.append(render_passage(10,"10. Sola Scriptura · 2 Tim 3:16–17 (page entry 10)",[
 ("Argument A · «Useful» is not «sufficient»; the verse is read in its context.",[
  dict(src='ddp:sola-scriptura-and-2-timothy-316-17',who='Jimmy Akin',quote="But being useful merely means that something makes a contribution—not that it is uniquely and exclusively sufficient.",loc="the Defense text of Day 177, second point"),
  dict(src='sp:why-i-dont-believe-in-sola-scriptura',quote="But let’s give it in its context, and I think you’ll see that this verse is being ripped out of context.",loc="the paragraph that begins «First, 2 Timothy 3 says…»")]),
 ],"**Count and independence.** By person and work: **2 persons** (Akin, Heschmeyer). By organisation: **1**. Broussard: an episode summary describes White's use of 2 Tim 3:16 but is not his reply: not quoted. Horn: not found.\n**Contested within the tradition:** `[not searched]`."))
open(os.environ['SCR']+'/ss_sections.md','w').write(''.join(S))
print('ok')
