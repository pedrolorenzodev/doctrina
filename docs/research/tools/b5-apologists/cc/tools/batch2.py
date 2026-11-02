import sys,os
sys.path.insert(0,os.environ['SCR']+'/tools')
from render import render_passage
E=[]
E.append(render_passage(2,"2. Eucharist · Luke 22:19 (page entry 2)",[
 ("Argument A · «Do this in remembrance of me» is sacrificial memorial, not a mere recollection.",[
  dict(src='sp:does-the-mass-put-jesus-back-on-the-cross',quote="In the Jewish context, for one anamnesis has a particularly sacrificial kind of overtone to it.",loc="the paragraph that begins «…Jesus’s Passover at the Last Supper, he says, this is my body which is given for you.»"),
  dict(src='cot:why-70-of-catholics-deny-christs-real-presence-in-the-eucharist',quote="Do this in remembrance of me is not asking us to remember it, it’s asking God in an anthropomorphic way to remember Christ’s sacrifice on our behalf.",loc="the paragraph before «Trent Horn: In fact, another non-Catholic scholar has published on this, Joachim Jeremias» (every speaker label on the page is «Trent Horn:»)")]),
 ("Argument B · The command makes the Eucharist a regular feature of Christian life.",[
  dict(src='tjap:why-cant-everyone-receive-the-eucharist',quote="He told the disciples, “Do this in remembrance of me” (Luke 22:19), and it became a regular feature of Christian life.",loc="the paragraph that begins «…Jesus did not mean the Eucharist to be celebrated just one time.»")]),
 ],"**Count and independence.** By person and work: **3 persons** (Heschmeyer, Horn, Akin), 3 works. By organisation: **1**. Broussard has a magazine article on the same words (`magazine/did-jesus-make-the-apostles-priests-at-the-last-supper`) whose sentence on Luke 22:19 reports Trent's reading: not quoted as his own argument.\n**Contested within the tradition:** `[not searched]`. **Applies the official teaching:** `[not checked]`."))
E.append(render_passage(5,"5. Eucharist · 1 Cor 10:21 (page entry 5)",[
 ("Argument A · The «table of the Lord» is parallel to the pagan and Israelite sacrificial tables: the Eucharist is a sacrifice and a real presence.",[
  dict(src='sp:the-bible-on-the-eucharist-strange-sacrificial-serious-sacramental-and-shocking',quote="Now, if this is a threefold parallel, as Paul seems to think it is, this only makes sense if the Eucharist is a sacrifice, if the table of the Lord is like the table of demons and […]",loc="the paragraph that begins «…in verse 21, “You cannot drink the cup of the Lord and the cup of demons.»"),
  dict(src='magazine:heres-why-you-can-be-absolutely-sure-that-paul-believed-in-the-eucharist',who='Karlo Broussard',quote="If communing with demons in pagan sacrifices implies that demons are really present, then communing with the body and blood of Jesus in the Eucharist implies that his body and blood are really present.",loc="the paragraph that quotes 1 Cor 10:20–21")]),
 ],"**Count and independence.** By person and work: **2 persons** (Heschmeyer, Broussard). By organisation: **1**. Akin quotes 1 Cor 10:21–22 only to speak of mortal sin: not quoted. Horn: not found.\n**Contested within the tradition:** `[not searched]`."))
open(os.environ['SCR']+'/euc2.md','w').write(''.join(E))
S=[]
S.append(render_passage(6,"6. Sola Scriptura · Luke 10:16 (page entry 6)",[
 ("Argument A · «He who hears you hears me»: Christ gave teaching authority to the ministers of his Church.",[
  dict(src='ddp:cafeteria-christianity',who='Jimmy Akin',quote="Christ did not keep this authority to himself. He gave teaching authority to the ministers he put in charge of his Church, telling them: “He who hears you hears me, and he who rejects you rejects me, and he who rejects me rejects him who sent me” (Luke 10:16).",loc="the Defense text of the episode, the paragraph that quotes Luke 10:16, John 16:13 and Matt 28"),
  dict(src='sp:why-i-dont-believe-in-sola-scriptura',quote="there seems to be these promises of at least particular kinds of an errancy for the church, that he who hears you hears me, and he who rejects you rejects me.",loc="the paragraph that begins «…this is not all you need.»; the transcript's «an errancy» is its own wording (read as «inerrancy» in context: `[inference]`)")]),
 ],"**Count and independence.** By person and work: **2 persons** (Akin, Heschmeyer). By organisation: **1**. Horn's article cites Luke 10:16 only in a list («speak on behalf of Christ»): not quoted. Broussard: not found.\n**Contested within the tradition:** `[not searched]`."))
open(os.environ['SCR']+'/ss2.md','w').write(''.join(S)); print('ok')
