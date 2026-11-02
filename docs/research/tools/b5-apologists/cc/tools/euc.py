import sys,os
sys.path.insert(0,os.environ['SCR']+'/tools')
from render import render_passage
E=[]
E.append(render_passage(4,"4. Eucharist · 1 Cor 10:16–17 (page entry 4 of `eucharist-catholic.md`)",[
 ("Argument A · «Participation in the body and blood of Christ» is not ordinary bread, not even a representation.",[
  dict(src='sp:do-st-pauls-words-disprove-the-catholic-eucharist',quote="So whatever is happening in the Eucharist, it’s somehow a participation in the body and blood of Christ. That doesn’t sound like ordinary bread. That doesn’t even sound like a representation.",loc="the paragraph that begins «Joe: So there’s an easy answer to this question…», its later sentences"),
  dict(src='tjap:why-cant-everyone-receive-the-eucharist',quote="As these passages make clear, the Eucharist is Jesus himself. He is both the source of the Christian life and the summit toward which we are journeying.",loc="the paragraph that quotes 1 Cor 10:16, 11:27 and 11:29, its last sentences")]),
 ],"**Count and independence.** By person and work: **2 persons** (Heschmeyer, Akin), 2 works. By organisation: **1**. Broussard, Horn: no hit for this passage in the sources searched.\n**Contested within the tradition:** `[not searched]`. **Applies the official teaching:** `[not checked]` against the dossier row."))
E.append(render_passage(6,"6. Eucharist · 1 Cor 11:26 (page entry 6)",[
 ("Argument A · Calling the Eucharist «bread» is compatible with the real presence, because Jesus himself calls his flesh bread.",[
  dict(src='sp:do-st-pauls-words-disprove-the-catholic-eucharist',quote="So it is perfectly reasonable to refer to Jesus’ literal flesh as bread or as a bread of life because that’s what he does.",loc="the paragraph that begins «Joe: So there’s an easy answer to this question…»")]),
 ],"**Count and independence.** By person and work: **1 person** (Heschmeyer), 1 work. By organisation: 1. Gap stated: Akin, Broussard, Horn not found for 1 Cor 11:26.\n**Contested within the tradition:** `[not searched]`."))
E.append(render_passage(7,"7. Eucharist · 1 Cor 11:27–29 (page entry 7)",[
 ("Argument A · Unworthy reception brings judgment because the Eucharist is Christ himself.",[
  dict(src='tjap:why-cant-everyone-receive-the-eucharist',quote="Anyone who eats and drinks without discerning the body eats and drinks judgment upon himself (1 Corinthians 11:29). As these passages make clear, the Eucharist is Jesus himself.",loc="the paragraph that quotes 1 Cor 10:16, 11:27 and 11:29"),
  dict(src='drk:every-protestant-objection-to-john-6-answered',quote="If a physical act of eating can cause spiritual harm, surely it can cause spiritual life.",loc="the paragraph after «There’s nothing incoherent about a physical act producing a spiritual effect.»")]),
 ],"**Count and independence.** By person and work: **2 persons** (Akin, Broussard). By organisation: **1**. Heschmeyer, Horn: not quoted (a Heschmeyer episode only reports Craig's argument on 1 Cor 11).\n**Contested within the tradition:** `[not searched]`."))
E.append(render_passage(8,"8. Eucharist · Mal 1:11 (page entry 8)",[
 ("Argument A · The «pure offering» among the nations is the Eucharistic sacrifice, as Christians read it from the first century.",[
  dict(src='sp:james-white-debate-debrief-w-john-derosa',quote="No one in the early days of Christianity thought this was an end times prophecy. It’s about gathering the nations, which is what Jesus comes to do in the first coming, bringing the Gentiles into the people of God.",loc="the paragraph that quotes «a pure offering will be made to the Lord’s name»"),
  dict(src='tjap:n-t-wright-the-priesthood-of-all-believers',quote="From the first century onward, Christians saw this pair of prophecies as being fulfilled in their day.",loc="the paragraph after the quotation of Malachi 1:8, 10–11; it goes on «… began offering God the pure offering of the Eucharistic sacrifice»")]),
 ],"**Count and independence.** By person and work: **2 persons** (Heschmeyer, Akin). By organisation: **1**. Broussard, Horn: not found.\n**Contested within the tradition:** `[not searched]`."))
E.append(render_passage(9,"9. Eucharist · Gen 14:18; Ps 110:4 (page entry 9)",[
 ("Argument A · Melchizedek's bread and wine prefigure the Last Supper.",[
  dict(src='sp:proving-the-catholic-priesthood-is-biblical-response-to-needgod-net',quote="And it seems to be prefiguring the fact that Jesus is going to take bread and wine and turn them into his body and blood",loc="the paragraph that begins «…Jesus is a high priest after the order of Melchizedek»")]),
 ],"**Count and independence.** By person and work: **1 person** (Heschmeyer), 1 work. By organisation: 1. Gap stated: Akin, Broussard, Horn not found on this passage (a Broussard transcript quotes Gen 14:18 only on wine).\n**Contested within the tradition:** `[not searched]`."))
open(os.environ['SCR']+'/euc_sections.md','w').write(''.join(E)); print(len(E))
