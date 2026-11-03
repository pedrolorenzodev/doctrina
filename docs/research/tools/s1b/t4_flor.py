import sys,re; sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from s1blib import *
ED='Council of Basel-Ferrara-Florence, English text as reproduced on papalencyclicals.net (https://www.papalencyclicals.net/councils/ecum17.htm, fetched 2026-11-02); the translator and edition are not printed on the page'
URL='https://www.papalencyclicals.net/councils/ecum17.htm'
TO='[unverified: online reproduction; verse identified from quoted words by Doctrina]'
B=Lst('baptism-catholic')
B.add('John.3.5','Council of Florence, decree for the Armenians (Exsultate Deo)','the section on the seven sacraments, on baptism','quoted words, no reference printed','[…] Holy baptism holds the first place among all the sacraments, for it is the gate of the spiritual life […] unless we are born again of water and the spirit, we cannot, as Truth says, enter the kingdom of heaven. […]',ED,TO,URL,None,'no book, chapter or verse printed: «as Truth says» introduces the words; John 3:5 is identified by Doctrina from the wording [unverified]')
nr=[x for x in re.findall(r'^- (.*)$',open(OUT+'baptism-catholic.md').read().split('## Not reached')[1].split('\n## ')[0],re.M) if not x.startswith('Florence') and not x.startswith('Lateran')]
B.nr_replace=nr+['Florence, Exsultate Deo (Armenians): read the baptism passage in the online English text; the only Scripture wording is «unless we are born again of water and the spirit, … as Truth says» (John 3:5, identified); Lateran IV c. 1 read in full: it prints no Scripture reference and quotes no verse; the Roman Catechism and CIC canons: CIC canons carry no Scripture references.']
B.save()
E=Lst('eucharist-catholic')
for ref,sent in [('Matt.26.26','[…] It uses this form of words in the consecration of the Lord\'s body: For this is my body. […]'),('Matt.26.28','[…] And of his blood: For this is the chalice of my blood, of the new and everlasting covenant, the mystery of faith, which will be shed for you and for many unto the remission of sins. […]')]:
    E.add(ref,'Council of Florence (Basel-Ferrara-Florence), decree on the form of the Eucharist (after the decree for the Armenians)','the clause on the form of the consecration of the Lord\'s body and blood','quoted words, no reference printed',sent,ED,TO,URL,None,'no book, chapter or verse printed; identified by Doctrina from the words of institution [unverified]; the passage is in the last part of the page, after the Armenian decree (the exact decree title was not read)')
nr=[x for x in re.findall(r'^- (.*)$',open(OUT+'eucharist-catholic.md').read().split('## Not reached')[1].split('\n## ')[0],re.M) if not x.startswith('Florence')]
E.nr_replace=nr+['Florence: the passage on the form of the Eucharist read (two quoted wordings, no reference printed); Exsultate Deo on the Eucharist (the section on the seven sacraments) names no Scripture; Laetentur caeli not searched for the Eucharist.']
E.save(); print('ok')
