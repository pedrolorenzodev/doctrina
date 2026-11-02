import glob,sys
SP=sys.argv[1]
R=[
("de nuestro Señor Jesús desde el cielo","de nuestro Señor Jesucristo desde el cielo"),
("Y tales érais algunos","Y tales érais"),
("abusan de sí mismos con varones","abusan de sí mismos con hombres"),
("estafadores","extorsionadores"),
("concernientes a la recapitulación que él haría","concernientes al resumen que él haría"),
("recapitulando su propia obra","resumiendo su propia obra"),
("Atadle de pies y manos y echadle en las tinieblas de afuera","Quitadlo de en medio, de manos y pies, y echadlo a las tinieblas de afuera"),
("mis toros y mis animales cebados","mis bueyes y todos los animales cebados"),
("uno a su labranza, y otro a su negocio","unos a su labranza, y otros a sus negocios"),
("serán echados en las tinieblas de afuera","irán a las tinieblas de afuera"),
("ya adulteró con ella","ya ha cometido adulterio con ella"),
("será culpable de juicio","estará en peligro del juicio"),
("que hablen los hombres","que los hombres hayan hablado"),
("vestido de una ropa teñida en sangre","ceñido en derredor con una vestidura rociada de sangre"),
("muchas diademas","muchas coronas"),
("como la voz de muchas aguas","como la voz de aguas"),
("tu ofrenda","tu don"),
("con las manos vacías","vacío"),
("su pasión lo impulsó","su lujuria lo impulsó"),
("esclavo de la pasión","esclavo de la lujuria"),
("la pasión de la carne","la lujuria de la carne"),
("demos a beber vino a nuestro padre","embriaguemos a nuestro padre con vino"),
("(Bitos)","(Bythus)"),
("sus propias criaturas","sus propias cosas creadas"),
("como choza en un melonar","como choza en un huerto de pepinos"),
("hizo varón y hembra","hizo macho y hembra"),
("llevan piel de oveja","llevan vestidos de oveja"),
("Pero esto digo yo, no el Señor","Pero estas cosas digo yo, no el Señor"),
("Todo varón de entre vosotros","Todo macho de entre vosotros"),
("la carne de vuestro prepucio","la carne de vuestros prepucios"),
("Todo esto lo he hecho","Todas estas cosas he hecho"),
("como cubierta de malicia","como manto de malicia"),
("de tus apriscos","de tu aprisco"),
("Entonces romperá tu luz como la mañana","Entonces romperá tu luz matutina"),
("envidia semejante a la de Caín","celos semejantes a los de Caín"),
("olor de suave fragancia","olor de suave aroma"),
("la Eucaristía a su vez confirma","la Eucaristía a su vez establece"),
("de hombres de esta calaña","de esta clase"),
("te daré los gentiles por herencia","te daré los paganos por herencia"),
("predicar libertad a los cautivos","predicar liberación a los cautivos"),
("la paja del ojo de tu hermano","la mota del ojo de tu hermano"),
("Mirarán al que traspasaron","Mirarán al que han traspasado"),
("han rechazado al Hijo de Dios y lo echaron fuera","han rechazado al Hijo de Dios y lo han echado fuera"),
("para que lo mortal sea absorbido por la inmortalidad","para que la mortalidad sea absorbida por la inmortalidad"),
("Por esta causa pagáis también tributo","Por esta causa pagad también tributo"),
("habiendo predicado a otros","predicando a otros"),
("la obra completa de la detección y refutación","la obra completa de la exposición y refutación"),
]
files=sorted(glob.glob(SP+"/iren4.es.[0-9]*.txt"))
files=[f for f in files if not f.endswith("iren4.es.txt")]
texts={f:open(f,encoding="utf-8").read() for f in files}
for old,new in R:
    n=sum(t.count(old) for t in texts.values())
    print(n,old[:50])
    if n:
        for f in files: texts[f]=texts[f].replace(old,new)
for f,t in texts.items(): open(f,"w",encoding="utf-8").write(t)
