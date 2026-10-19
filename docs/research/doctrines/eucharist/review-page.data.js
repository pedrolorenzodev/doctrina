const LV = {
  ayala: `Español: traducción de Ignacio López de Ayala (Madrid, 1785), con su ortografía.`,
  vat: `Texto oficial en español (vatican.va).`,
  ia: `Traducción asistida por IA.`,
  wcf: `Español: Doctrinas y reglamentos de la Iglesia Presbiteriana (Monterrey, 1880), tal como se imprimió.`,
  sacros: `Español: Los sacrosantos concilios generales y particulares, t. V (Madrid, 1794), hecho desde una versión francesa.`,
  zorita: `Español: traducción de Agustín Zorita (Barcelona, 1833).`,
  rv1909: `Reina-Valera 1909.`
};

const ED = {
  trent: `Latín y castellano: López de Ayala, El sacrosanto y ecuménico concilio de Trento, 2.ª ed., Madrid, Imprenta Real, 1785. Inglés: J. Waterworth, The Canons and Decrees of the Sacred and Oecumenical Council of Trent, Londres, Burns and Oates. Dominio público.`,
  cec: `Catecismo de la Iglesia Católica. © Libreria Editrice Vaticana: cita breve y enlace.`,
  cic: `Código de Derecho Canónico (1983). © Libreria Editrice Vaticana: cita breve y enlace.`,
  triglot: `Concordia Triglotta, St. Louis, CPH, 1921 (alemán, latín, inglés; inglés según bookofconcord.org). Dominio público.`,
  wcf: `Inglés: The Confession of Faith (texto de 1647), Edimburgo, Johnstone, Hunter & Co., 1894. Español: Monterrey, Tipografía del Comercio, 1880. Dominio público.`,
  enc1895: `Encíclica patriarcal y sinodal de Antimo VII (1895), ed. E. Metallinos, Answer of the Great Church of Constantinople to the Papal Encyclical on Union, Manchester, 1896. Dominio público. Solo se cita el inglés.`,
  mansi: `Mansi, Sacrorum conciliorum nova et amplissima collectio, t. 31, Venecia, 1798. Dominio público.`
};

const LINKS = {
  ayala: {href:`https://archive.org/details/elsacrosantoyec00madgoog`, label:`Ver el escaneo de 1785 en archive.org`},
  cecA3: {href:`https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html`, label:`Leer en vatican.va`},
  cecS1a1: {href:`https://www.vatican.va/archive/catechism_sp/p2s1c1a1_sp.html`, label:`Leer en vatican.va`},
  cecS1a2: {href:`https://www.vatican.va/archive/catechism_sp/p2s1c1a2_sp.html`, label:`Leer en vatican.va`},
  cecC2a4: {href:`https://www.vatican.va/archive/catechism_sp/p2s2c2a4_sp.html`, label:`Leer en vatican.va`},
  cicL4en: {href:`https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann879-958_en.html`, label:`Leer en vatican.va (en inglés)`},
  cic945: {href:`https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann945-958_sp.html`, label:`Leer en vatican.va`},
  cic750: {href:`https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro3_cann747-755_sp.html`, label:`Leer en vatican.va`},
  sc: {href:`https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_sp.html`, label:`Leer en vatican.va`},
  lg: {href:`https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_sp.html`, label:`Leer en vatican.va`},
  oe: {href:`https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_orientalium-ecclesiarum_sp.html`, label:`Leer en vatican.va`},
  mf: {href:`https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html`, label:`Leer en vatican.va`},
  ede: {href:`https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html`, label:`Leer en vatican.va`},
  cdf: {href:`https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_1998_professio-fidei_sp.html`, label:`Leer en vatican.va`},
  dv: {href:`https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19900524_theologian-vocation_sp.html`, label:`Leer en vatican.va`},
  lat: {href:`https://archive.org/details/DisciplinaryCouncils`, label:`Ver el escaneo de Schroeder en archive.org`},
  mansi: {href:`https://archive.org/details/sacrorumconcilio0031jonn`, label:`Ver el escaneo de Mansi en archive.org`},
  zorita: {href:`https://archive.org/details/catecismo-romano-de-trento-san-pi-o-v.-traducido-p.-m.-fr.-agustin-zorita-dominico-1833-completo`, label:`Ver el escaneo de 1833 en archive.org`},
  wcf: {href:`https://archive.org/details/confessionoffaith00chur`, label:`Ver el escaneo de 1894 en archive.org`},
  ap24: {href:`https://bookofconcord.org/defense/of-the-mass/`, label:`Leer en bookofconcord.org`},
  ap22: {href:`https://bookofconcord.org/defense/of-both-kinds-in-the-lords-supper/`, label:`Leer en bookofconcord.org`},
  boc: {href:`https://bookofconcord.org`, label:`Leer en bookofconcord.org`},
  enc: {href:`https://archive.org/details/answerofgreatchu0000eust`, label:`Ver el escaneo en archive.org`}
};

const RV_APPLY = `Texto añadido en el paso de correcciones: leído por ese agente, sin verificador independiente.`;
const RV_EXCOM = `«sea excomulgado» traduce anathema sit (Pregunta 14).`;
const RV_NOTEXT = `El dosier cita este número pero no transcribe su texto.`;

function trent(o){ return Object.assign({kind:`Fuente`, ed:ED.trent, url:LINKS.ayala}, o); }
function cec(n, o){
  const nn = String(n);
  const first = parseInt(nn, 10);
  let url = LINKS.cecA3;
  if (first < 1110) url = LINKS.cecS1a1; else if (first < 1200) url = LINKS.cecS1a2; else if (first >= 1420) url = LINKS.cecC2a4;
  return Object.assign({kind:`Fuente`, title:`Catecismo de la Iglesia Católica, ${/[–,y]/.test(nn) ? `nn.` : `n.`} ${nn}`, date:`1992/1997`, year:1992, ed:ED.cec, url}, o || {});
}
function cic(n, o){
  return Object.assign({kind:`Fuente`, title:`Código de Derecho Canónico, ${/[–,y]/.test(String(n)) ? `cann.` : `can.`} ${n}`, date:`1983`, year:1983, ed:ED.cic, url:LINKS.cicL4en}, o || {});
}

const SRC = {
  T13c1: trent({title:`Concilio de Trento, sesión XIII, capítulo 1`, date:`11 oct 1551`, year:1551, ex:[
    {la:`Principio docet sancta Synodus, et aperte, ac simpliciter profitetur, in almo sanctae Eucharistiae Sacramento, post panis, et vini consecrationem, Dominum nostrum Jesum Christum, verum Deum, atque hominem, vere, realiter, ac substantialiter sub specie illarum rerum sensibilium contineri.`,
     es:`En primer lugar enseña el santo Concilio, y clara y sencillamente confiesa, que despues de la consagracion del pan y del vino, se contiene en el saludable Sacramento de la santa Eucaristía, verdadera, real y substancialmente nuestro señor Jesu-Cristo, verdadero Dios y hombre, bajo las especies de aquellas cosas sensibles.`, esLv:`ayala`,
     en:`the holy Synod teaches, and openly and simply professes, that in the august sacrament of the holy Eucharist, after the consecration of the bread and wine, our Lord Jesus Christ, true God and man, is truly, really, and substantially contained under the species of those sensible things.`,
     pg:`Ayala, pp. 157–158; Waterworth, p. 76`},
    {la:`…cum post panis, vinique benedictionem, se suum ipsius corpus illis praebere, ac suum sanguinem, disertis, et perspicuis verbis testatus est: quae verba a sanctis Evangelistis commemorata, et a divo Paulo postea repetita, cum propriam illam, et apertissimam significationem prae se ferant, secundum quam a Patribus intellecta sunt; indignissimum sane flagitium est, ea a quibusdam contentiosis, et pravis hominibus ad fictitios, et imaginarios tropos, quibus veritas carnis, et sanguinis Christi negatur, contra universum Ecclesiae sensum detorqueri…`,
     es:`…quando despues de haber bendecido el pan y el vino, testificó á sus Apóstoles con claras y enérgicas palabras, que les daba su propio cuerpo y su propia sangre. Y siendo constante que dichas palabras, mencionadas por los santos Evangelistas, y repetidas despues por el Apostol san Pablo, incluyen en sí mismas aquella propia y patentísima significacion que les han dado los santos Padres; es sin duda maldad exécrable, que ciertos hombres contenciosos y corrompidos las tuerzan, violenten y expliquen en sentido figurado, ficticio, é imaginario; por el que niegan la realidad de la carne y sangre de Jesu-Cristo, contra la inteligencia unanime de la Iglesia…`, esLv:`ayala`,
     en:`He testified, in express and clear words, that He gave them His own very Body, and His own Blood; words which, — recorded by the holy Evangelists, and afterwards repeated by Saint Paul, whereas they carry with them that proper and most manifest meaning in which they were understood by the Fathers, — it is indeed a crime the most unworthy that they should be wrested … to fictitious and imaginary tropes, whereby the verity of the flesh and blood of Christ is denied…`,
     pg:`Ayala, pp. 158–159; Waterworth, pp. 76–77`},
    {es:`«no hay en efecto repugnancia en que el mismo Cristo nuestro Salvador esté siempre sentado en el cielo á la diestra del Padre, segun el modo natural de existir, y que al mismo tiempo nos asista sacramentalmente con su presencia, y en su propia substancia en otros muchos lugares» … «apenas lo podemos declarar con palabras» … «es posible á Dios»`, esLv:`ayala`, pg:`Fragmentos citados en la respuesta a la objeción OB-2`}
  ]}),
  T13c2: trent({title:`Concilio de Trento, sesión XIII, capítulo 2`, date:`11 oct 1551`, year:1551, ex:[
    {es:`Quiso ademas que se recibiese este Sacramento como un manjar espiritual de las almas, con el que se alimenten y conforten los que viven por la vida del mismo Jesu-Cristo […] y como un antidoto con que nos libremos de las culpas veniales, y nos preservemos de las mortales.`, esLv:`ayala`,
     en:`as an antidote, whereby we may be freed from daily faults, and be preserved from mortal sins.`, pg:`Ayala, p. 160; Waterworth, p. 77`}
  ]}),
  T13c3: trent({title:`Concilio de Trento, sesión XIII, capítulo 3`, date:`11 oct 1551`, year:1551, ex:[
    {la:`Quapropter verissimum est, tantundem sub alterutra specie, atque sub utraque contineri. Totus enim, et integer Christus sub panis specie, et sub quavis ipsius speciei parte, totus item sub vini specie, et sub ejus partibus existit.`,
     es:`Por esta causa es certísimo que se contiene tanto baxo cada una de las dos especies, como baxo de ambas juntas; pues existe Cristo todo, y entero baxo las especies de pan, y baxo qualquiera parte de esta especie; y todo tambien existe baxo la especie de vino y de sus partes.`, esLv:`ayala`,
     en:`it is most true, that as much is contained under either species as under both; for Christ whole and entire is under the species of bread, and under any part whatsoever of that species…`, pg:`Ayala, p. 162; Waterworth, p. 78`},
    {es:`en fuerza de aquella natural conexion y concomitancia, por la que están unidas entre sí las partes de nuestro señor Jesu-Cristo, que ya resucitó de entre los muertos para no volver á morir`, esLv:`ayala`,
     en:`by the force of that natural connection and concomitancy whereby the parts of Christ our Lord, who hath now risen from the dead, to die no more, are united together`, pg:`Ayala, p. 162; Waterworth, p. 78`},
    {es:`«en virtud de las palabras» (latín: «ex vi verborum»)`, esLv:`ayala`, pg:`Ayala, p. 162`}
  ]}),
  T13c4: trent({title:`Concilio de Trento, sesión XIII, capítulo 4`, date:`11 oct 1551`, year:1551, ex:[
    {la:`Quoniam autem Christus, Redemptor noster, corpus suum id, quod sub specie panis offerebat, vere esse dixit; ideo persuasum semper in Ecclesia Dei fuit, idque nunc denuo sancta haec Synodus declarat, per consecrationem panis, et vini, conversionem fieri totius substantiae panis in substantiam corporis Christi, Domini nostri; et totius substantiae vini in substantiam sanguinis ejus. Quae conversio convenienter, et proprie a sancta Catholica Ecclesia Transsubstantiatio est appellata.`,
     es:`Mas, por quanto dixo Jesu-Cristo nuestro Redentor, que era verdaderamente su cuerpo lo que ofrecia bajo la especie de pan; ha creido por lo mismo perpetuamente la Iglesia de Dios, y lo mismo declara ahora de nuevo este mismo santo Concilio, que por la consagracion del pan y del vino, se convierte toda la substancia del pan en la substancia del cuerpo de nuestro señor Jesu-Cristo, y toda la substancia del vino en la substancia de su sangre, cuya conversion ha llamado oportuna, y propiamente Transubstanciacion la santa Iglesia Católica.`, esLv:`ayala`,
     en:`by the consecration of the bread and of the wine, a conversion is made of the whole substance of the bread into the substance of the body of Christ our Lord, and of the whole substance of the wine into the substance of His blood; which conversion is, by the holy Catholic Church, suitably and properly called Transubstantiation.`, pg:`Ayala, p. 163; Waterworth, p. 78`}
  ]}),
  T13c5: trent({title:`Concilio de Trento, sesión XIII, capítulo 5`, date:`11 oct 1551`, year:1551, ex:[
    {la:`Nullus itaque dubitandi locus relinquitur, quin omnes Christi fideles, pro more in Catholica Ecclesia semper recepto, latriae cultum, qui vero Deo debetur, huic sanctissimo Sacramento in veneratione exhibeant.`,
     es:`No queda pues, motivo alguno de duda en que todos los fieles cristianos hayan de venerar á este santísimo Sacramento, y prestarle, segun la costumbre siempre recibida en la Iglesia católica, el culto de latría que se debe al mismo Dios.`, esLv:`ayala`,
     en:`render in veneration the worship of latria, which is due to the true God, to this most holy sacrament.`, pg:`Ayala, p. 164; Waterworth, p. 79`},
    {es:`«creemos que está presente en él aquel mismo Dios» … «Ni se le debe tributar menos adoracion con el pretexto de que fue instituido por Cristo nuestro señor para recibirle»`, esLv:`ayala`, pg:`Fragmentos citados en la respuesta a la objeción OB-3`}
  ]}),
  T13c6: trent({title:`Concilio de Trento, sesión XIII, capítulo 6`, date:`11 oct 1551`, year:1551, ex:[
    {es:`Es tan antigua la costumbre de guardar en el sagrario la santa Eucaristía, que ya se conocia en el siglo en que se celebró el concilio Niceno`, esLv:`ayala`,
     en:`The custom of reserving the holy Eucharist in the sacrarium is so ancient, that even the age of the Council of Nicaea recognised that usage.`, pg:`Ayala, pp. 164–166; Waterworth, p. 80`}
  ], rv:[`El canon 7 (reserva y llevarla a los enfermos) no está transcrito en el dosier.`]}),
  T13c7: trent({title:`Concilio de Trento, sesión XIII, capítulo 7`, date:`11 oct 1551`, year:1551, ex:[
    {en:`ecclesiastical usage declares that necessary proof to be, that no one, conscious to himself of mortal sin, how contrite soever he may seem to himself, ought to approach to the sacred Eucharist, without previous sacramental confession.`, pg:`Waterworth, pp. 80–81`}
  ], rv:[`El dosier no da el español de este capítulo.`]}),
  T13can1: trent({title:`Concilio de Trento, sesión XIII, canon 1`, date:`11 oct 1551`, year:1551, ex:[
    {la:`Si quis negaverit, in sanctissimae Eucharistiae Sacramento contineri vere, realiter, et substantialiter corpus, et sanguinem una cum anima, et divinitate Domini nostri Jesu Christi, ac proinde totum Christum; sed dixerit, tantummodo esse in eo, ut in signo, vel figura, aut virtute; anathema sit.`,
     es:`Si alguno negáre, que en el santisimo Sacramento de la Eucaristia se contiene verdadera, real y substancialmente el cuerpo y la sangre juntamente con el alma y divinidad de nuestro señor Jesu-Cristo, y por conseqüencia todo Cristo; sino por el contrario dixere, que solamente está en él como en señal, ó en figura, ó virtualmente; sea excomulgado.`, esLv:`ayala`,
     en:`If anyone denieth that, in the sacrament of the most holy Eucharist, are contained truly, really, and substantially, the body and blood together with the soul and divinity of our Lord Jesus Christ, and consequently the whole Christ; but saith that He is only therein as in a sign, or in figure, or virtue; let him be anathema.`, pg:`Ayala, p. 171; Waterworth, p. 82`}
  ], rv:[RV_EXCOM]}),
  T13can2: trent({title:`Concilio de Trento, sesión XIII, canon 2`, date:`11 oct 1551`, year:1551, ex:[
    {la:`Si quis dixerit, in sacrosancto Eucharistiae Sacramento remanere substantiam panis, et vini, una cum corpore, et sanguine Domini nostri Jesu Christi; negaveritque mirabilem illam, et singularem conversionem totius substantiae panis in corpus, et totius substantiae vini in sanguinem, manentibus dumtaxat speciebus panis, et vini; quam quidem conversionem Catholica Ecclesia aptissime Transsubstantiationem appellat; anathema sit.`,
     es:`Si alguno dixere, que en el sacrosanto Sacramento de la Eucaristia queda substancia de pan y de vino juntamente con el cuerpo y sangre de nuestro señor Jesu-Cristo; y negare aquella admirable y singular conversion de toda la substancia del pan en el cuerpo, y de toda la substancia del vino en la sangre, permaneciendo solamente las especies de pan y vino; conversion que la Iglesia Católica propisimamente llama Transubstanciacion; sea excomulgado.`, esLv:`ayala`,
     en:`If anyone saith that, in the sacred and holy sacrament of the Eucharist, the substance of the bread and wine remains conjointly with the body and blood of our Lord Jesus Christ, and denieth that wonderful and singular conversion … the species only of the bread and wine remaining — which conversion indeed the Catholic Church most aptly calls Transubstantiation; let him be anathema.`, pg:`Ayala, p. 171; Waterworth, p. 82`}
  ], rv:[RV_EXCOM]}),
  T13can4: trent({title:`Concilio de Trento, sesión XIII, canon 4`, date:`11 oct 1551`, year:1551, ex:[
    {es:`«solo en el uso, mientras que se recibe»`, esLv:`ayala`, pg:`Fragmento citado en la respuesta a la objeción OB-3`}
  ], rv:[`El dosier solo transcribe este fragmento del canon.`]}),
  T13can5: trent({title:`Concilio de Trento, sesión XIII, canon 5`, date:`11 oct 1551`, year:1551, ex:[
    {es:`Si alguno dixere, ó que el principal fruto de la sacrosanta Eucaristía es el perdon de los pecados, ó que no provienen de ella otros efectos; sea excomulgado.`, esLv:`ayala`, pg:`Ayala, p. 172`}
  ], rv:[RV_EXCOM]}),
  T13can6: trent({title:`Concilio de Trento, sesión XIII, canon 6`, date:`11 oct 1551`, year:1551, ex:[
    {es:`Si alguno dixere, que en el santo Sacramento de la Eucaristía no se debe adorar á Cristo hijo unigenito de Dios con el culto de latría, ni aun con el externo; y que por lo mismo, ni se debe venerar con peculiar y festiva celebridad; ni ser conducido solemnemente en procesiones, segun el loable y universal rito y costumbre de la santa Iglesia; ó que no se debe exponer públicamente al pueblo para que le adore, y que los que le adoran son idólatras; sea excomulgado.`, esLv:`ayala`,
     en:`…and that the adorers thereof are idolaters; let him be anathema.`, pg:`Ayala, pp. 172–173; Waterworth, p. 83`}
  ], rv:[RV_EXCOM]}),
  T13can9: trent({title:`Concilio de Trento, sesión XIII, canon 9`, date:`11 oct 1551`, year:1551, ex:[
    {es:`«en Pasqua florida»`, esLv:`ayala`, pg:`Ayala, p. 173`}
  ], rv:[`El dosier solo transcribe este fragmento del precepto anual.`]}),
  T13can11: trent({title:`Concilio de Trento, sesión XIII, canon 11`, date:`11 oct 1551`, year:1551, ex:[
    {es:`Si alguno dixere, que sola la fe es preparacion suficiente para recibir el Sacramento de la santísima Eucaristía; sea excomulgado. Y para que no se reciba indignamente tan grande Sacramento, y por consequencia cause muerte y condenacion; establece y declara el mismo santo Concilio, que los que se sienten gravados con conciencia de pecado mortal, por contritos que se crean, deben para recibirle, anticipar necesariamente la confesion sacramental habiendo confesor. Y si alguno presumiere enseñar, predicar ó afirmar con pertinacia lo contrario, ó tambien defenderlo en disputas públicas; quede por el mismo caso excomulgado.`, esLv:`ayala`,
     en:`this holy Synod ordains and declares that sacramental confession, when a confessor may be had, is of necessity to be made beforehand, by those whose conscience is burthened with mortal sin, how contrite even soever they may think themselves.`, pg:`Ayala, p. 174; Waterworth, p. 84`}
  ], rv:[RV_APPLY, RV_EXCOM]}),
  T21c1: trent({title:`Concilio de Trento, sesión XXI, capítulo 1`, date:`16 jul 1562`, year:1562, ex:[
    {es:`«en las especies de pan y vino, y lo dió á sus Apóstoles» … «la obligacion de que todos los fieles cristianos deban recibir […] una y otra especie» … «si no comiereis la carne del hijo del hombre, ni bebiereis su sangre, no tendréis vida» … «si alguno comiere de este pan, vivirá eternamente»`, esLv:`ayala`, pg:`Ayala, pp. 287–291; Waterworth, pp. 140–142`},
    {es:`«segun las varias interpretaciones de los santos Padres y doctores»`, esLv:`ayala`, en:`according to the various interpretations of holy Fathers and Doctors`, pg:`Sobre Juan 6`}
  ], rv:[`Ayala imprime «16 de julio de 1563» en el encabezado castellano; el latín y Waterworth dicen 1562. Se usa 1562.`]}),
  T21c2: trent({title:`Concilio de Trento, sesión XXI, capítulo 2`, date:`16 jul 1562`, year:1562, ex:[
    {la:`…hanc consuetudinem sub altera specie communicandi approbavit, et pro lege habendam decrevit: quam reprobare, aut sine ipsius Ecclesiae auctoritate pro libito mutare non licet.`,
     es:`…ha aprobado, movida de graves y justas causas, la de comulgar bajo una sola especie, decretando que esta se observase como ley; la misma que no es permitido reprobar, ni mudar arbitrariamente sin la autoridad de la misma Iglesia.`, esLv:`ayala`,
     en:`has approved of this custom of communicating under one species, and decreed that it was to be held as a law; which it is not lawful to reprobate, or to change at pleasure, without the authority of the Church itself.`, pg:`Ayala, p. 290; Waterworth, p. 142`},
    {es:`«desde los principios de la religion cristiana» … «freqüente» … «salva siempre la esencia de ellos»`, esLv:`ayala`, pg:`Fragmentos citados en la respuesta a la objeción OB-4`}
  ]}),
  T21c3: trent({title:`Concilio de Trento, sesión XXI, capítulo 3 y canon 3`, date:`16 jul 1562`, year:1562, ex:[
    {es:`«se recibe en cada una sola de las especies á Cristo todo entero, y un verdadero Sacramento» … «defraudado» … «ninguna gracia necesaria para conseguir la salvacion»`, esLv:`ayala`, pg:`Capítulo 3: fragmentos citados en la respuesta a la objeción OB-4`},
    {es:`Si alguno negáre que Cristo, fuente y autor de todas las gracias, se recibe todo entero bajo la sola especie de pan, dando por razon, como falsamente afirman algunos, que no se recibe, segun lo estableció el mismo Jesu-Cristo, en las dos especies; sea excomulgado.`, esLv:`ayala`, pg:`Canon 3. Ayala, p. 293; Waterworth, pp. 142–143`}
  ], rv:[RV_EXCOM, `El canon 3 de la sesión XIII no está transcrito en el dosier.`]}),
  T21can1: trent({title:`Concilio de Trento, sesión XXI, canon 1`, date:`16 jul 1562`, year:1562, ex:[
    {es:`Si alguno dixere, que todos y cada uno de los fieles cristianos están obligados por precepto divino, ó de necesidad para conseguir la salvacion, á recibir una y otra especie del santísimo Sacramento de la Eucaristía; sea excomulgado.`, esLv:`ayala`, pg:`Ayala, p. 293`}
  ], rv:[RV_EXCOM]}),
  T22c1: trent({title:`Concilio de Trento, sesión XXII, capítulo 1`, date:`17 sep 1562`, year:1562, ex:[
    {la:`Is igitur Deus, et Dominus noster, etsi semel se ipsum in ara crucis, morte intercedente, Deo Patri oblaturus erat, ut aeternam illic redemptionem operaretur; quia tamen per mortem sacerdotium ejus extinguendum non erat; in Coena novissima … dilectae sponsae suae Ecclesiae visibile, sicut hominum natura exigit, relinqueret sacrificium, quo cruentum illud, semel in cruce peragendum, repraesentaretur, ejusque memoria in finem usque saeculi permaneret, atque illius salutaris virtus in remissionem eorum, quae a nobis quotidie committuntur, peccatorum applicaretur…`,
     es:`El mismo Dios pues, y señor nuestro, aunque se había de ofrecer á sí mismo á Dios Padre, una vez, por medio de la muerte en el ara de la cruz, para obrar desde ella la redencion eterna; con todo, como su sacerdocio no habia de acabarse con su muerte; para dexar en la última cena, de la noche misma en que era entregado, á su amada Esposa la Iglesia un sacrificio visible, segun requiere la condicion de los hombres, en el que se representase el sacrificio cruento que por una vez se habia de hacer en la cruz, y permaneciese su memoria hasta el fin del mundo, y se aplicase su saludable virtud á la remision de los pecados que cotidianamente cometemos…`, esLv:`ayala`,
     en:`though He was about to offer Himself once on the altar of the cross unto God the Father, by means of His death, there to operate an eternal redemption; nevertheless, because that His priesthood was not to be extinguished by His death, in the last supper … that He might leave, to His own beloved Spouse the Church, a visible sacrifice, such as the nature of man requires, whereby that bloody sacrifice, once to be accomplished on the cross might be represented, and the memory thereof remain even unto the end of the world, and its salutary virtue be applied to the remission of those sins which we daily commit…`, pg:`Ayala, pp. 314–315; Waterworth, p. 153`}
  ], rv:[`Latín no confirmado letra por letra (OCR pobre); español e inglés confirmados.`]}),
  T22c2: trent({title:`Concilio de Trento, sesión XXII, capítulo 2`, date:`17 sep 1562`, year:1562, ex:[
    {la:`Una enim, eademque est hostia, idem nunc offerens sacerdotum ministerio, qui se ipsum tunc in Cruce obtulit, sola offerendi ratione diversa. Cujus quidem oblationis, cruentae, inquam, fructus per hanc incruentam uberrime percipiuntur: tantum abest, ut illi per hanc quovis modo derogetur.`,
     es:`…porque la hostia es una misma, uno el mismo que ahora ofrece por el ministerio de los sacerdotes, que el que entonces se ofreció á sí mismo en la cruz, con sola la diferencia del modo de ofrecerse. Los frutos por cierto de aquella oblacion cruenta, se logran abundantisimamente por esta incruenta: tan lejos está que esta derogue de modo alguno á aquella.`, esLv:`ayala`,
     en:`For the victim is one and the same, the same now offering by the ministry of priests who then offered Himself on the cross, the manner alone of offering being different. The fruits indeed of which oblation, of that bloody one, to wit, are received most plentifully through this unbloody one; so far is this (latter) from derogating in any way from that (former oblation).`, pg:`Ayala, pp. 317–318; Waterworth, p. 155`},
    {es:`«si nos acercamos al Señor contritos y penitentes, si con sincero corazon, y recta fe, si con temor y reverencia»`, esLv:`ayala`, pg:`Ayala, p. 317`},
    {es:`«segun la tradicion de los Apóstoles, por los que han muerto en Cristo sin estar plenamente purgados»`, esLv:`ayala`, pg:`Ayala, p. 318`}
  ]}),
  T22c6: trent({title:`Concilio de Trento, sesión XXII, capítulo 6`, date:`17 sep 1562`, year:1562, ex:[
    {es:`«Quisiera por cierto el sacrosanto Concilio que todos los fieles que asistiesen á las Misas comulgasen en ellas, no solo espiritualmente, sino recibiendo tambien sacramentalmente la Eucaristía» … «se deben tambien tener con toda verdad por comunes de todos; parte porque el pueblo comulga espiritualmente en ellas, y parte porque se celebran por un ministro público de la Iglesia, no solo por sí, sino por todos los fieles»`, esLv:`ayala`, pg:`Ayala, p. 321; Waterworth, pp. 155–157`}
  ]}),
  T22can: trent({title:`Concilio de Trento, sesión XXII, cánones 1, 3 y 4`, date:`17 sep 1562`, year:1562, ex:[
    {la:`Si quis dixerit, in Missa non offerri Deo verum, et proprium sacrificium; aut quod offerri non sit aliud, quam nobis Christum ad manducandum dari; anathema sit.`,
     es:`Si alguno dixere, que no se ofrece á Dios en la Misa verdadero y propio sacrificio; ó que el ofrecerse este no es otra cosa que darnos á Cristo para que le comamos; sea excomulgado.`, esLv:`ayala`, pg:`Canon 1. Ayala, pp. 324–325`},
    {es:`Si alguno dixere, que el sacrificio de la Misa es solo sacrificio de alabanza, y de accion de gracias, ó mero recuerdo del sacrificio consumado en la cruz, mas que no es propiciatorio; ó que solo aprovecha al que lo recibe; y que no se debe ofrecer por los vivos, ni por los difuntos, por los pecados, penas, satisfacciones, ni otras necesidades; sea excomulgado.`, esLv:`ayala`,
     en:`If anyone saith that the sacrifice of the mass is only a sacrifice of praise and of thanksgiving; or that it is a bare commemoration of the sacrifice consummated on the cross, but not a propitiatory sacrifice; or that it profits him only who receives; and that it ought not to be offered for the living and the dead for sins, pains, satisfactions, and other necessities; let him be anathema.`, pg:`Canon 3. Waterworth, pp. 158–159`},
    {la:`Si quis dixerit, blasphemiam irrogari sanctissimo Christi sacrificio, in cruce peracto, per Missae sacrificium; aut illi per hoc derogari; anathema sit.`,
     es:`Si alguno dixere, que se comete blasfemia contra el santisimo sacrificio que Cristo consumó en la cruz, por el sacrificio de la Misa; ó que por este se deroga á aquel; sea excomulgado.`, esLv:`ayala`, pg:`Canon 4. Ayala, p. 325; Waterworth, p. 159`}
  ], rv:[RV_EXCOM, `Latín del canon 1 no confirmado letra por letra.`]}),
  T22can2: trent({title:`Concilio de Trento, sesión XXII, canon 2`, date:`17 sep 1562`, year:1562, ex:[
    {la:`Si quis dixerit, illis verbis: Hoc facite in meam commemorationem, Christum non instituisse Apostolos sacerdotes; aut non ordinasse, ut ipsi, aliique sacerdotes offerrent corpus, et sanguinem suum; anathema sit.`,
     es:`Si alguno dixere, que en aquellas palabras: Haced esto en mi memoria, no instituyó Cristo sacerdotes á los Apóstoles; ó que no los ordenó para que ellos, y los demas sacerdotes ofreciesen su cuerpo, y su sangre; sea excomulgado.`, esLv:`ayala`,
     en:`If anyone saith that by those words, Do this for the commemoration of Me (Luke xxii. 19), Christ did not institute the Apostles priests…`, pg:`Ayala, p. 325; Waterworth, p. 158`}
  ], rv:[RV_EXCOM]}),
  T22c7: trent({title:`Concilio de Trento, sesión XXII, capítulo 7`, date:`17 sep 1562`, year:1562, ex:[], rv:[`Agua mezclada con el vino. ${RV_NOTEXT}`]}),
  T22decr: trent({title:`Concilio de Trento, sesión XXII, decreto sobre lo que se ha de observar y evitar en la celebración de la Misa`, date:`17 sep 1562`, year:1562, ex:[
    {es:`«las condiciones de pagas de qualquiera especie, los contratos» … «no distan mucho del pecado de Simonía» … «el abuso de decir cierto número de Misas con determinado número de luces, inventado mas bien por espíritu de supersticion que de verdadera religion»`, esLv:`ayala`, pg:`Ayala, pp. ≈328–330; Waterworth, pp. 159–161`}
  ], rv:[`Páginas de Ayala aproximadas en el dosier. Es un decreto de reforma: grado disciplina.`]}),

  LAT1: {kind:`Fuente`, title:`Concilio IV de Letrán, constitución 1 (Firmiter)`, date:`1215`, year:1215, url:LINKS.lat,
    ed:`Latín e inglés: H. J. Schroeder, Disciplinary Decrees of the General Councils, St. Louis, B. Herder, 1937. Español: Los sacrosantos concilios generales y particulares, t. V, Madrid, 1794. Dominio público.`,
    ex:[
      {la:`…cujus corpus et sanguis in sacramento altaris sub speciebus panis et vini veraciter continentur; transsubstantiatis pane in corpus et vino in sanguinem, potestate divina…`,
       es:`…cuyo Cuerpo y Sangre están realmente en el Sacramento del Altar, baxo las especies de pan y de vino, transubstanciándose el pan en el Cuerpo de Jesu-Christo, y el vino en su Sangre, mediante el poder divino…`, esLv:`sacros`,
       en:`whose body and blood are truly contained in the sacrament of the altar under the forms of bread and wine; the bread being changed (transsubstantiatis) by divine power into the body, and the wine into the blood`, pg:`Schroeder, pp. 560 (latín) y 238 (inglés); Sacrosantos, p. 170. «realmente» traduce veraciter.`},
      {la:`Et hoc utique sacramentum nemo potest conficere, nisi sacerdos, qui fuerit ordinatus secundum claves ecclesiae, quas ipse concessit apostolis et eorum successoribus Jesus Christus.`,
       es:`Nadie puede consagrar este misterio, sino solo el Sacerdote legitimamente ordenado, segun la potestad de las llaves de la Iglesia, que Jesu-Christo concedió á los Apóstoles, y á sus succesores`, esLv:`sacros`,
       en:`And this sacrament no one can effect except the priest who has been duly ordained in accordance with the keys of the Church, which Jesus Christ Himself gave to the Apostles and their successors.`, pg:`Schroeder, pp. 560 y 238; Sacrosantos, pp. 170–171`}
    ],
    rv:[`Según el comentario de Schroeder (p. 239), aquí aparece por primera vez la palabra en un texto conciliar: es nota de un estudioso, no texto de la Iglesia.`]},
  FLOexs: {kind:`Fuente`, title:`Concilio de Florencia, Exsultate Deo (decreto para los armenios)`, date:`22 nov 1439`, year:1439, ed:ED.mansi + ` Columna 1057.`, url:LINKS.mansi,
    ex:[{la:`Forma hujus sacramenti sunt verba salvatoris, quibus hoc conficit sacramentum. Sacerdos enim in persona Christi loquens, hoc conficit sacramentum. Nam ipsorum verborum virtute, substantia panis in corpus Christi, & substantia vini in sanguinem convertuntur`,
      es:`la forma de este sacramento son las palabras del Salvador con las que realizó este sacramento; pues el sacerdote, hablando en la persona de Cristo, realiza este sacramento. Por la fuerza de esas mismas palabras, la sustancia del pan se convierte en el cuerpo de Cristo, y la sustancia del vino en su sangre`, esLv:`ia`, pg:`Mansi 31, col. 1057 (en el margen: «Forte, efficitur»). En la misma columna, a los armenios se les manda mezclar «paululum aquae» con el vino.`}],
    rv:[RV_APPLY, `Grado exacto del decreto no declarado por la Iglesia en los textos leídos (inferencia).`]},
  FLOlae: {kind:`Fuente`, title:`Concilio de Florencia, Laetentur caeli (decreto de unión con los griegos)`, date:`6 jul 1439`, year:1439, ed:ED.mansi + ` Columna 1031. No se halló inglés ni español de dominio público.`, url:LINKS.mansi,
    ex:[{la:`Item, in azymo sive fermentato pane triticeo, corpus Christi veraciter confici; sacerdotesque in altero ipsum domini corpus conficere debere, unumquemque scilicet juxta suae ecclesiae sive occidentalis, sive orientalis consuetudinem.`,
      es:`que el cuerpo de Cristo se consagra verdaderamente en pan de trigo ázimo o fermentado, y que los sacerdotes deben consagrar el cuerpo del Señor en uno u otro, cada uno según la costumbre de su Iglesia, occidental u oriental`, esLv:`ia`, pg:`Mansi 31, col. 1031; fecha, col. 1034 («pridie Nonas Julii» 1439)`}],
    rv:[`Que la cláusula de los ázimos esté definida con el mismo grado que el resto es inferencia.`]},

  CR38: {kind:`Fuente`, title:`Catecismo Romano, parte II, capítulo 4, n. 38`, date:`1566`, year:1566, url:LINKS.zorita,
    ed:`Catecismo Romano, trad. Agustín Zorita, t. I, Barcelona, Imprenta de Sierra, 1833 (latín y castellano). Dominio público.`,
    ex:[{es:`«parece que de ningun modo se podria decir con verdad: Esto es mi cuerpo»`, esLv:`zorita`, pg:`Zorita, p. 223`}],
    rv:[`El Catecismo Romano enseña, no define: su explicación no tiene grado propio.`]},
  CR40: {kind:`Fuente`, title:`Catecismo Romano, parte II, capítulo 4, n. 40`, date:`1566`, year:1566, url:LINKS.zorita,
    ed:`Catecismo Romano, trad. Agustín Zorita, t. I, Barcelona, 1833. Inglés: J. Donovan, The Catechism of the Council of Trent, Baltimore, Lucas Brothers, [1829], p. 162. Dominio público.`,
    ex:[{la:`Sed moneant pastores hoc loco, mirandum non esse, si post consecrationem panis etiam vocetur. Hoc enim nomine Eucharistia appellari consuevit, tum quia panis speciem habeat, tum quia naturalem alendi, et nutriendi corporis vim, quae panis propria est, adhuc retineat`,
      es:`«no debe estrañarse que la Eucaristía se llame pan, aun despues de la consagracion» … «conserva la figura de pan» … «todavía retiene natural virtud de alimentar» … «es costumbre de las Escrituras sagradas llamar las cosas segun lo que parecen»`, esLv:`zorita`,
      en:`we should not at all be surprised, if even after consecration, the Eucharist is sometimes called bread: it is so called because it has the appearance and still retains the natural quality of bread, which is to support and nourish the body`, pg:`Zorita, pp. 224–225; Donovan, p. 162`}],
    rv:[`El Catecismo Romano enseña, no define: su explicación no tiene grado propio.`]},

  SC47: {kind:`Fuente`, title:`Concilio Vaticano II, Sacrosanctum Concilium 47`, date:`4 dic 1963`, year:1963, ed:`Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.sc,
    ex:[{la:`Salvator noster, in Cena novissima, qua nocte tradebatur, Sacrificium Eucharisticum Corporis et Sanguinis sui instituit, quo Sacrificium Crucis in saecula, donec veniret, perpetuaret atque adeo Ecclesiae dilectae Sponsae memoriale concrederet Mortis et Resurrectionis suae: sacramentum pietatis, signum unitatis, vinculum caritatis, convivium paschale, "in quo Christus sumitur, mens impletur gratia et futurae gloriae nobis pignus datur".`,
      es:`Nuestro Salvador, en la Última Cena, la noche que le traicionaban, instituyó el Sacrificio Eucarístico de su Cuerpo y Sangre, con lo cual iba a perpetuar por los siglos, hasta su vuelta, el Sacrificio de la Cruz y a confiar a su Esposa, la Iglesia, el Memorial de su Muerte y Resurrección: sacramento de piedad, signo de unidad, vínculo de caridad, banquete pascual, en el cual se come a Cristo, el alma se llena de gracia y se nos da una prenda de la gloria venidera.`, esLv:`vat`,
      en:`At the Last Supper, on the night when He was betrayed, our Saviour instituted the eucharistic sacrifice of His Body and Blood. He did this in order to perpetuate the sacrifice of the Cross throughout the centuries until He should come again…`}],
    rv:[`Dos redacciones oficiales en español: el Catecismo (n. 1323) cita SC 47 con «vínculo de amor», «en el que se recibe a Cristo», «prenda de la gloria futura» (Pregunta 2).`]},
  SC7: {kind:`Fuente`, title:`Concilio Vaticano II, Sacrosanctum Concilium 7`, date:`4 dic 1963`, year:1963, ed:`Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.sc,
    ex:[{es:`Está presente en el sacrificio de la Misa, sea en la persona del ministro, […] sea sobre todo bajo las especies eucarísticas. Está presente con su fuerza en los Sacramentos […] Está presente en su palabra […] Está presente, por último, cuando la Iglesia suplica y canta salmos`, esLv:`vat`}],
    rv:[RV_APPLY]},
  SC55: {kind:`Fuente`, title:`Concilio Vaticano II, Sacrosanctum Concilium 55`, date:`4 dic 1963`, year:1963, ed:`Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.sc,
    ex:[{es:`Manteniendo firmes los principios dogmáticos declarados por el Concilio de Trento, la comunión bajo ambas especies puede concederse en los casos que la Sede Apostólica determine…`, esLv:`vat`}]},
  LG11: {kind:`Fuente`, title:`Concilio Vaticano II, Lumen gentium 11`, date:`1964`, year:1964, ed:`Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.lg,
    ex:[{es:`«fuente y cumbre de toda la vida cristiana»`, esLv:`vat`, pg:`El Catecismo (n. 1324) lo cita en su español oficial como «fuente y culmen de toda la vida cristiana».`, en:`The Eucharist is 'the source and summit of the Christian life.' (CCC 1324)`}]},
  OE5: {kind:`Fuente`, title:`Concilio Vaticano II, Orientalium Ecclesiarum 5`, date:`1964`, year:1964, ed:`Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.oe,
    ex:[{es:`«las Iglesias de Oriente, como las de Occidente, gozan del derecho y deber de regirse según sus respectivas disciplinas peculiares»`, esLv:`vat`}]},

  MF10: {kind:`Fuente`, title:`Pablo VI, Mysterium fidei 10`, date:`3 sep 1965`, year:1965, ed:`Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.mf,
    ex:[{la:`circa dogma transsubstantiationis … quasi cuique doctrinam semel ab Ecclesia definitam … liceret`,
      es:`opiniones acerca de las misas privadas, del dogma de la transustanciación y del culto eucarístico […] como si a cualquiera le fuese lícito olvidar la doctrina, una vez definida por la Iglesia`, esLv:`vat`}]},
  MF24: {kind:`Fuente`, title:`Pablo VI, Mysterium fidei 24`, date:`3 sep 1965`, year:1965, ed:`Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.mf,
    ex:[{en:`express concepts that are not tied to a certain specific form of human culture, or to a certain level of scientific progress, or to one or another theological school.`}],
    rv:[`El dosier solo da el inglés de este número.`]},
  MF32: {kind:`Fuente`, title:`Pablo VI, Mysterium fidei 32`, date:`3 sep 1965`, year:1965, ed:`Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.mf,
    ex:[{es:`«toda misa, aunque sea celebrada privadamente por un sacerdote, no es acción privada, sino acción de Cristo y de la Iglesia»`, esLv:`vat`,
      en:`For each and every Mass is not something private, even if a priest celebrates it privately; instead, it is an act of Christ and of the Church`}]},
  MF46: {kind:`Fuente`, title:`Pablo VI, Mysterium fidei 46`, date:`3 sep 1965`, year:1965, ed:`Encíclica. © Libreria Editrice Vaticana: cita breve y enlace. La página en español une los números 46 y 47 del inglés.`, url:LINKS.mf,
    ex:[{es:`«aun corporalmente, pero no a la manera que los cuerpos están en un lugar»`, esLv:`vat`,
      en:`nothing remains of the bread and the wine except for the species—beneath which Christ is present whole and entire in His physical 'reality,' corporeally present, although not in the manner in which bodies are in a place.`}]},
  EdE12: {kind:`Fuente`, title:`Juan Pablo II, Ecclesia de Eucharistia 12`, date:`17 abr 2003`, year:2003, ed:`Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.ede,
    ex:[
      {es:`La Misa hace presente el sacrificio de la Cruz, no se le añade y no lo multiplica. Lo que se repite es su celebración memorial, la "manifestación memorial" (memorialis demonstratio), por la cual el único y definitivo sacrificio redentor de Cristo se actualiza siempre en el tiempo.`, esLv:`vat`,
       en:`The Mass makes present the sacrifice of the Cross; it does not add to that sacrifice nor does it multiply it. What is repeated is its memorial celebration…`},
      {es:`No afirmó solamente que lo que les daba de comer y beber era su cuerpo y su sangre, sino que manifestó su valor sacrificial, haciendo presente de modo sacramental su sacrificio, que cumpliría después en la cruz algunas horas más tarde, para la salvación de todos.`, esLv:`vat`,
       en:`Jesus did not simply state that what he was giving them to eat and drink was his body and his blood; he also expressed its sacrificial meaning and made sacramentally present his sacrifice which would soon be offered on the Cross for the salvation of all.`}
    ]},
  EdE16: {kind:`Fuente`, title:`Juan Pablo II, Ecclesia de Eucharistia 16`, date:`17 abr 2003`, year:2003, ed:`Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.ede,
    ex:[{es:`Cuando Jesús anuncia por primera vez esta comida, los oyentes se quedan asombrados y confusos, obligando al Maestro a recalcar la verdad objetiva de sus palabras: "En verdad, en verdad os digo: si no coméis la carne del Hijo del hombre, y no bebéis su sangre, no tendréis vida en vosotros" (Jn 6, 53). No se trata de un alimento metafórico: "Mi carne es verdadera comida y mi sangre verdadera bebida" (Jn 6, 55).`, esLv:`vat`,
      en:`When for the first time Jesus spoke of this food, his listeners were astonished and bewildered, which forced the Master to emphasize the objective truth of his words … This is no metaphorical food: 'My flesh is food indeed, and my blood is drink indeed' (Jn 6:55).`}]},
  EdE25: {kind:`Fuente`, title:`Juan Pablo II, Ecclesia de Eucharistia 25`, date:`17 abr 2003`, year:2003, ed:`Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.ede,
    ex:[{es:`«está estrechamente unido a la celebración del Sacrificio eucarístico» … «tiende a la comunión sacramental y espiritual»`, esLv:`vat`}]},
  EdE26: {kind:`Fuente`, title:`Juan Pablo II, Ecclesia de Eucharistia 26`, date:`17 abr 2003`, year:2003, ed:`Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.ede,
    ex:[{es:`si la Eucaristía edifica la Iglesia y la Iglesia hace la Eucaristía, se deduce que hay una relación sumamente estrecha entre una y otra`, esLv:`vat`}], rv:[RV_APPLY]},
  EdE35: {kind:`Fuente`, title:`Juan Pablo II, Ecclesia de Eucharistia 35`, date:`17 abr 2003`, year:2003, ed:`Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.ede,
    ex:[{es:`La celebración de la Eucaristía, no obstante, no puede ser el punto de partida de la comunión, que la presupone previamente, para consolidarla y llevarla a perfección.`, esLv:`vat`}], rv:[RV_APPLY]},
  EdE38: {kind:`Fuente`, title:`Juan Pablo II, Ecclesia de Eucharistia 38`, date:`17 abr 2003`, year:2003, ed:`Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.ede,
    ex:[{es:`No se puede dar la comunión a una persona no bautizada o que rechace la verdad íntegra de fe sobre el Misterio eucarístico. […] el Sacramento de su cuerpo y su sangre no permite ficciones.`, esLv:`vat`}],
    rv:[RV_APPLY, `Usar solo entre comillas, nunca como frase de cierre (crítico).`]},
  EdE45: {kind:`Fuente`, title:`Juan Pablo II, Ecclesia de Eucharistia 45`, date:`17 abr 2003`, year:2003, ed:`Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.ede,
    ex:[{es:`el objetivo es satisfacer una grave necesidad espiritual para la salvación eterna de los fieles, singularmente considerados, pero no realizar una intercomunión, que no es posible mientras no se hayan restablecido del todo los vínculos visibles de la comunión eclesial`, esLv:`vat`}], rv:[RV_APPLY]},
  CDF11: {kind:`Fuente`, title:`Congregación para la Doctrina de la Fe, Nota doctrinal ilustrativa de la fórmula conclusiva de la Professio fidei, §11`, date:`29 jun 1998`, year:1998, ed:`Comentario doctrinal de la Congregación (1998), citado como clasificación de la propia Iglesia, sin grado propio. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.cdf,
    ex:[
      {es:`A las verdades correspondientes al primer apartado pertenecen […] la doctrina de la presencia real y substancial de Cristo en la eucaristía`, esLv:`vat`, pg:`Nota 24: «Cf. DS 1636».`},
      {es:`Sin ninguna intención de ser exhaustivos, pueden ser recordados, con finalidad meramente indicativa, algunos ejemplos`, esLv:`vat`, pg:`Apertura del §11: la lista es ilustrativa.`},
      {en:`the sacrificial nature of the eucharistic celebration`, pg:`También en la lista del §11 (nota 25: DS 1740 y 1743).`}
    ], rv:[RV_APPLY]},
  CDF5: {kind:`Fuente`, title:`Congregación para la Doctrina de la Fe, Nota doctrinal ilustrativa de la fórmula conclusiva de la Professio fidei, §5`, date:`29 jun 1998`, year:1998, ed:`Comentario doctrinal de la Congregación (1998). © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.cdf,
    ex:[{es:`definidas como verdades divinamente reveladas por medio de un juicio solemne del Romano Pontífice cuando habla "ex cathedra", o por el Colegio de los Obispos reunido en concilio, o bien son propuestas infaliblemente por el Magisterio ordinario y universal`, esLv:`vat`}], rv:[RV_APPLY]},
  DV17: {kind:`Fuente`, title:`Congregación para la Doctrina de la Fe, Donum veritatis 17`, date:`24 may 1990`, year:1990, ed:`Instrucción. © Libreria Editrice Vaticana: cita breve y enlace.`, url:LINKS.dv,
    ex:[{es:`Las decisiones magisteriales en materia de disciplina, aunque no estén garantizadas por el carisma de la infalibilidad, no están desprovistas de la asistencia divina y requieren la adhesión de los fieles.`, esLv:`vat`}]},
  MISAL: {kind:`Fuente`, title:`Misal Romano, Plegaria eucarística I (Canon romano)`, ed:`Citada en el Catecismo, n. 1353.`, ex:[], rv:[RV_NOTEXT]},

  CEC1085: cec(1085, {ex:[{es:`todos los demás acontecimientos suceden una vez, y luego pasan y son absorbidos por el pasado. El misterio pascual de Cristo, por el contrario, no puede permanecer solamente en el pasado, pues por su muerte destruyó a la muerte, y todo lo que Cristo es y todo lo que hizo y padeció por los hombres participa de la eternidad divina y domina así todos los tiempos y en ellos se mantiene permanentemente presente.`, esLv:`vat`}], rv:[RV_APPLY]}),
  CEC1106: cec(1106, {ex:[{es:`«Junto con la Anámnesis, la Epíclesis es el centro de toda celebración sacramental, y muy particularmente de la Eucaristía» … «el Espíritu Santo irrumpe y realiza aquello que sobrepasa toda palabra y todo pensamiento»`, esLv:`vat`, pg:`La segunda frase es de san Juan Damasceno, citado por el Catecismo.`}]}),
  CEC1128: cec(1128, {ex:[{es:`los sacramentos obran ex opere operato (según las palabras mismas del Concilio: "por el hecho mismo de que la acción es realizada"), es decir, en virtud de la obra salvífica de Cristo, realizada de una vez por todas … independientemente de la santidad personal del ministro. Sin embargo, los frutos de los sacramentos dependen también de las disposiciones del que los recibe.`, esLv:`vat`}], rv:[RV_APPLY]}),
  CEC1323: cec(1323, {ex:[{es:`«vínculo de amor» … «en el que se recibe a Cristo» … «prenda de la gloria futura»`, esLv:`vat`, pg:`El Catecismo abre su artículo sobre la Eucaristía citando Sacrosanctum Concilium 47 con esta redacción.`}]}),
  CEC1333: cec(1333, {ex:[{es:`«siguen significando también la bondad de la creación»`, esLv:`vat`}]}),
  CEC1336: cec(1336, {ex:[{es:`El primer anuncio de la Eucaristía dividió a los discípulos, igual que el anuncio de la pasión los escandalizó: "Es duro este lenguaje, ¿quién puede escucharlo?" (Jn 6,60). La Eucaristía y la cruz son piedras de escándalo.`, esLv:`vat`}]}),
  CEC1338: cec(1338, {ex:[], rv:[RV_NOTEXT]}),
  CEC1340: cec(1340, {ex:[], rv:[RV_NOTEXT]}),
  CEC1341: cec(`1341 y 1363`, {ex:[], rv:[RV_NOTEXT]}),
  CEC1342: cec(`1342–1343`, {ex:[], rv:[RV_NOTEXT]}),
  CEC1346: cec(1346, {ex:[{es:`«dos grandes momentos que forman una unidad básica» … «con las lecturas, la homilía y la oración universal» … «con la presentación del pan y del vino, la acción de gracias consecratoria y la comunión» … «un solo acto de culto»`, esLv:`vat`, pg:`El Catecismo cita aquí Sacrosanctum Concilium 56.`}], rv:[RV_APPLY]}),
  CEC1348: cec(1348, {ex:[{es:`«es quien preside invisiblemente toda celebración eucarística» … «actuando in persona Christi capitis»`, esLv:`vat`}]}),
  CEC1353: cec(1353, {ex:[{es:`«la fuerza de las palabras y de la acción de Cristo y el poder del Espíritu Santo hacen sacramentalmente presentes bajo las especies de pan y de vino su Cuerpo y su Sangre» … «la Iglesia pide al Padre que envíe su Espíritu Santo (o el poder de su bendición) sobre el pan y el vino, para que se conviertan por su poder, en el Cuerpo y la Sangre de Jesucristo»`, esLv:`vat`, pg:`Cita la Plegaria eucarística I del Misal Romano.`}]}),
  CEC1360: cec(`1360–1362`, {ex:[{es:`La Eucaristía es un sacrificio de acción de gracias al Padre […] "Eucaristía" significa, ante todo, acción de gracias. — La Eucaristía es también el sacrificio de alabanza por medio del cual la Iglesia canta la gloria de Dios en nombre de toda la creación. — La Eucaristía es el memorial de la Pascua de Cristo, la actualización y la ofrenda sacramental de su único sacrificio`, esLv:`vat`}], rv:[RV_APPLY]}),
  CEC1364: cec(1364, {ex:[{es:`«de una vez para siempre en la cruz, permanece siempre actual»`, esLv:`vat`, pg:`Cita Hebreos 7:25-27.`}]}),
  CEC1365: cec(1365, {ex:[{es:`El carácter sacrificial de la Eucaristía se manifiesta en las palabras mismas de la institución: "Esto es mi Cuerpo que será entregado por vosotros" y "Esta copa es la nueva Alianza en mi sangre, que será derramada por vosotros" (Lc 22,19-20). En la Eucaristía, Cristo da el mismo cuerpo que por nosotros entregó en la cruz, y la sangre misma que "derramó por muchos [...] para remisión de los pecados" (Mt 26,28).`, esLv:`vat`}]}),
  CEC1366: cec(1366, {ex:[{es:`La Eucaristía es, pues, un sacrificio porque representa (= hace presente) el sacrificio de la cruz, porque es su memorial y aplica su fruto`, esLv:`vat`}]}),
  CEC1367: cec(1367, {ex:[{es:`El sacrificio de Cristo y el sacrificio de la Eucaristía son, pues, un único sacrificio`, esLv:`vat`, pg:`Cita Hebreos 9:14, 27.`}]}),
  CEC1366b: cec(`1366–1367`, {ex:[{es:`La Eucaristía es, pues, un sacrificio porque representa (= hace presente) el sacrificio de la cruz, porque es su memorial y aplica su fruto`, esLv:`vat`, pg:`n. 1366`},{es:`El sacrificio de Cristo y el sacrificio de la Eucaristía son, pues, un único sacrificio`, esLv:`vat`, pg:`n. 1367`}]}),
  CEC1371: cec(1371, {ex:[], rv:[RV_NOTEXT]}),
  CEC1373: cec(1373, {ex:[{es:`está presente de múltiples maneras en su Iglesia […]: en su Palabra, en la oración de su Iglesia, […] en los sacramentos de los que Él es autor, en el sacrificio de la misa y en la persona del ministro. Pero, "sobre todo, (está presente) bajo las especies eucarísticas" (SC 7)`, esLv:`vat`}], rv:[RV_APPLY]}),
  CEC1374: cec(1374, {ex:[{es:`"Esta presencia se denomina 'real', no a título exclusivo, como si las otras presencias no fuesen 'reales', sino por excelencia, porque es substancial, y por ella Cristo, Dios y hombre, se hace totalmente presente" (MF 39).`, esLv:`vat`,
    en:`a substantial presence by which Christ, God and man, makes himself wholly and entirely present`}]}),
  CEC1375: cec(1375, {ex:[
    {es:`No es el hombre quien hace que las cosas ofrecidas se conviertan en Cuerpo y Sangre de Cristo, sino Cristo mismo que fue crucificado por nosotros. El sacerdote, figura de Cristo, pronuncia estas palabras, pero su eficacia y su gracia provienen de Dios. Esto es mi Cuerpo, dice. Esta palabra transforma las cosas ofrecidas.`, esLv:`vat`,
     en:`It is not man that causes the things offered to become the Body and Blood of Christ, but he who was crucified for us, Christ himself. the priest, in the role of Christ, pronounces these words, but their power and grace are God's. This is my body, he says. This word transforms the things offered.`, pg:`San Juan Crisóstomo, De proditione Iudae, hom. 1, 6 (PG 49, 380), citado por el Catecismo`},
    {es:`Estemos bien persuadidos de que esto no es lo que la naturaleza ha producido, sino lo que la bendición ha consagrado, y de que la fuerza de la bendición supera a la de la naturaleza, porque por la bendición la naturaleza misma resulta cambiada. … La palabra de Cristo, que pudo hacer de la nada lo que no existía, ¿no podría cambiar las cosas existentes en lo que no eran todavía?`, esLv:`vat`,
     en:`Be convinced that this is not what nature has formed, but what the blessing has consecrated. the power of the blessing prevails over that of nature, because by the blessing nature itself is changed.... Could not Christ's word, which can make from nothing what did not exist, change existing things into what they were not before?`, pg:`San Ambrosio, De mysteriis 9, 50; 52 (PL 16, 405-407), citado por el Catecismo`},
    {es:`«la eficacia de la Palabra de Cristo y de la acción del Espíritu Santo para obrar esta conversión»`, esLv:`vat`, pg:`Fragmento citado en la respuesta a la objeción OB-6`}
  ], rv:[`Los originales de los Padres no se leyeron para el dosier: el texto es la traducción del propio Catecismo.`]}),
  CEC1376: cec(1376, {ex:[], rv:[`El Catecismo cita aquí Trento, ses. XIII, cap. 4 (DS 1642). ${RV_NOTEXT}`]}),
  CEC1377: cec(1377, {ex:[{es:`«comienza en el momento de la consagración y dura todo el tiempo que subsistan las especies eucarísticas»`, esLv:`vat`,
    en:`Christ is present whole and entire in each of the species and whole and entire in each of their parts, in such a way that the breaking of the bread does not divide Christ.`}]}),
  CEC1378: cec(1378, {ex:[{es:`"La Iglesia católica ha dado y continua dando este culto de adoración que se debe al sacramento de la Eucaristía no solamente durante la misa, sino también fuera de su celebración: conservando con el mayor cuidado las hostias consagradas, presentándolas a los fieles para que las veneren con solemnidad, llevándolas en procesión en medio de la alegría del pueblo" (MF 56).`, esLv:`vat`}]}),
  CEC1379: cec(1379, {ex:[], rv:[RV_NOTEXT]}),
  CEC1381: cec(1381, {ex:[{es:`«no se conoce por los sentidos, […] sino sólo por la fe, la cual se apoya en la autoridad de Dios»`, esLv:`vat`, pg:`El Catecismo cita aquí a santo Tomás.`}]}),
  CEC1382: cec(1382, {ex:[], rv:[RV_NOTEXT]}),
  CEC1385: cec(1385, {ex:[], rv:[RV_NOTEXT]}),
  CEC1387: cec(1387, {ex:[], rv:[RV_NOTEXT]}),
  CEC1389: cec(`1388–1389`, {ex:[{es:`«recomienda vivamente a los fieles recibir la santa Eucaristía los domingos y los días de fiesta, o con más frecuencia aún, incluso todos los días»`, esLv:`vat`, pg:`n. 1389`}]}),
  CEC1390: cec(1390, {ex:[{es:`Por razones pastorales, esta manera de comulgar se ha establecido legítimamente como la más habitual en el rito latino. "La comunión tiene una expresión más plena por razón del signo cuando se hace bajo las dos especies"…`, esLv:`vat`, pg:`Cita la Instrucción General del Misal Romano, 240.`}]}),
  CEC1395: cec(1395, {ex:[{en:`the Eucharist is not ordered to the forgiveness of mortal sins - that is proper to the sacrament of Reconciliation. the Eucharist is properly the sacrament of those who are in full communion with the Church.`}], rv:[`El dosier solo da el inglés de este número.`]}),
  CEC1396: cec(1396, {ex:[{es:`La unidad del Cuerpo místico: La Eucaristía hace la Iglesia. Los que reciben la Eucaristía se unen más estrechamente a Cristo. Por ello mismo, Cristo los une a todos los fieles en un solo cuerpo: la Iglesia.`, esLv:`vat`}], rv:[RV_APPLY]}),
  CEC1399: cec(1399, {ex:[{es:`"Estas Iglesias, aunque separadas, [tienen] verdaderos sacramentos [...] y sobre todo, en virtud de la sucesión apostólica, el sacerdocio y la Eucaristía, con los que se unen aún más con nosotros con vínculo estrechísimo" (UR 15).`, esLv:`vat`}]}),
  CEC1400: cec(1400, {ex:[{es:`Las comunidades eclesiales nacidas de la Reforma, separadas de la Iglesia católica, "sobre todo por defecto del sacramento del orden, no han conservado la sustancia genuina e íntegra del misterio eucarístico" (UR 22). Por esto, para la Iglesia católica, la intercomunión eucarística con estas comunidades no es posible.`, esLv:`vat`}]}),
  CEC1401: cec(1401, {ex:[{es:`Si, a juicio del Ordinario, se presenta una necesidad grave, los ministros católicos pueden administrar los sacramentos (Eucaristía, Penitencia, Unción de los enfermos) a cristianos que no están en plena comunión con la Iglesia católica, pero que piden estos sacramentos con deseo y rectitud: en tal caso se precisa que profesen la fe católica respecto a estos sacramentos y estén bien dispuestos`, esLv:`vat`}], rv:[RV_APPLY]}),
  CEC1411: cec(1411, {ex:[{es:`Sólo los presbíteros válidamente ordenados pueden presidir la Eucaristía y consagrar el pan y el vino para que se conviertan en el Cuerpo y la Sangre del Señor.`, esLv:`vat`}]}),
  CEC1412: cec(1412, {ex:[{es:`«sobre los cuales es invocada la bendición del Espíritu Santo»`, esLv:`vat`}]}),
  CEC1415: cec(1415, {ex:[], rv:[RV_NOTEXT]}),
  CEC1416: cec(1416, {ex:[{en:`Communion with the Body and Blood of Christ increases the communicant's union with the Lord, forgives his venial sins, and preserves him from grave sins.`}], rv:[`El dosier solo da el inglés de este número.`]}),
  CEC1417: cec(1417, {ex:[], rv:[RV_NOTEXT]}),
  CEC1457: cec(1457, {ex:[{es:`Quien tenga conciencia de hallarse en pecado grave que no comulgue el Cuerpo del Señor sin acudir antes a la confesión sacramental (cf DS 1647, 1661) a no ser que concurra un motivo grave y no haya posibilidad de confesarse; y, en este caso, tenga presente que está obligado a hacer un acto de contrición perfecta, que incluye el propósito de confesarse cuanto antes`, esLv:`vat`}], rv:[RV_APPLY]}),

  CIC1: cic(1, {url:null, ex:[{es:`Los cánones de este Código son sólo para la Iglesia latina`, esLv:`vat`, en:`The canons of this Code regard only the Latin Church`}]}),
  CIC750: cic(750, {url:LINKS.cic750, ex:[
    {es:`Se ha de creer con fe divina y católica todo aquello que se contiene en la palabra de Dios escrita o transmitida por tradición […] y que además es propuesto como revelado por Dios, ya sea por el magisterio solemne de la Iglesia, ya por su magisterio ordinario y universal`, esLv:`vat`, pg:`§1`},
    {es:`Se han de aceptar y retener firmemente todas y cada una de las cosas sobre la doctrina de la fe y las costumbres propuestas de modo definitivo por el magisterio de la Iglesia`, esLv:`vat`, pg:`§2`}]}),
  CIC752: cic(752, {url:LINKS.cic750, ex:[{es:`Se ha de prestar un asentimiento religioso del entendimiento y de la voluntad, sin que llegue a ser de fe, a la doctrina que el Sumo Pontífice o el Colegio de los Obispos, en el ejercicio de su magisterio auténtico, enseñan acerca de la fe y de las costumbres`, esLv:`vat`}]}),
  CIC844: cic(844, {url:null, ex:[{es:`«profesen la fe católica respecto a esos sacramentos»`, esLv:`vat`, pg:`§§1, 3–4`}], rv:[`El dosier lo resume; solo transcribe este fragmento.`]}),
  CIC900: cic(900, {ex:[{es:`Sólo el sacerdote válidamente ordenado es ministro capaz de confeccionar el sacramento de la Eucaristía, actuando en la persona de Cristo.`, esLv:`vat`, pg:`§1`}]}),
  CIC901: cic(901, {ex:[{es:`El sacerdote tiene facultad para aplicar la Misa por cualesquiera, tanto vivos como difuntos.`, esLv:`vat`}]}),
  CIC913: cic(`913–914`, {ex:[{es:`«previa confesión sacramental» … «con fe y devoción»`, esLv:`vat`, pg:`913 §1 y 914`}]}),
  CIC916: cic(916, {ex:[{es:`Quien tenga conciencia de hallarse en pecado grave, no celebre la Misa ni comulgue el Cuerpo del Señor sin acudir antes a la confesión sacramental, a no ser que concurra un motivo grave y no haya oportunidad de confesarse`, esLv:`vat`}]}),
  CIC919: cic(919, {ex:[{es:`«al menos desde una hora antes de la sagrada comunión, a excepción sólo del agua y de las medicinas»`, esLv:`vat`, pg:`§§1, 3`}]}),
  CIC920: cic(920, {ex:[{es:`«por lo menos una vez al año» … «durante el tiempo pascual, a no ser que por causa justa se cumpla en otro tiempo dentro del año»`, esLv:`vat`, pg:`§§1–2`}]}),
  CIC921: cic(921, {ex:[], rv:[RV_NOTEXT]}),
  CIC924: cic(`924 y 926`, {ex:[{es:`«exclusivamente de trigo y hecho recientemente» … «natural, del fruto de la vid» … «un poco de agua» … «según la antigua tradición de la Iglesia latina»`, esLv:`vat`}]}),
  CIC925: cic(925, {ex:[{es:`Adminístrese la sagrada comunión bajo la sola especie del pan o, de acuerdo con las leyes litúrgicas, bajo las dos especies; en caso de necesidad, también bajo la sola especie del vino.`, esLv:`vat`}]}),
  CIC926: cic(926, {ex:[{es:`«según la antigua tradición de la Iglesia latina»`, esLv:`vat`}]}),
  CIC938: cic(`938 y 940`, {ex:[{es:`«en un solo sagrario» … «verdaderamente noble» … «ha de lucir constantemente una lámpara especial, con la que se indique y honre la presencia de Cristo»`, esLv:`vat`, pg:`938 §§1–2 y 940`}]}),
  CIC941: cic(`941 y 944`, {ex:[{es:`«sobre todo en la solemnidad del Cuerpo y Sangre de Cristo»`, esLv:`vat`}]}),
  CIC945: cic(`945 §2`, {url:LINKS.cic945, ex:[{es:`Se recomienda encarecidamente a los sacerdotes que celebren la Misa por las intenciones de los fieles, sobre todo de los necesitados, aunque no reciban ninguna ofrenda`, esLv:`vat`}], rv:[RV_APPLY]}),
  CIC947: cic(947, {url:LINKS.cic945, ex:[{es:`En materia de ofrendas de Misas, evítese hasta la más pequeña apariencia de negociación o comercio`, esLv:`vat`}], rv:[RV_APPLY]}),
  CIC1247: cic(1247, {url:null, ex:[{es:`El domingo y las demás fiestas de precepto los fieles tienen obligación de participar en la Misa.`, esLv:`vat`, en:`On Sundays and other holy days of obligation, the faithful are obliged to participate in the Mass.`}]}),

  WCF292: {kind:`Texto de otra tradición`, title:`Confesión de Westminster 29.2`, date:`1647`, year:1647, ed:ED.wcf, url:LINKS.wcf, ex:[
    {es:`En este sacramento, Cristo no está ofrecido á su Padre, ni se hace ningun sacrificio verdadero para remision de pecados ni de los vivos y ni de los muertos, sino solamente un recuerdo de aquella vez cuando se ofreció á sí mismo, por sí mismo en la Cruz, una oblacion espiritual de todo loor posible á Dios, alabándole por el sacrificio de su Hijo que fué una sola vez para siempre; de manera que el sacrificio papal de la misa (como lo llaman) es abominable á los ojos de Dios y un ultraje al solo y único sacrificio de Cristo, la única propiciacion para todos los elegidos.`, esLv:`wcf`,
     en:`In this sacrament Christ is not offered up to his Father, nor any real sacrifice made at all for remission of sins of the quick or dead; but only a commemoration of that one offering up of himself, by himself, upon the cross, once for all, and a spiritual oblation of all possible praise unto God for the same; so that the Popish sacrifice of the mass, as they call it, is most abominably injurious to Christ's one only sacrifice, the alone propitiation for all the sins of the elect.`, pg:`1894, p. 93. Textos de prueba impresos: Heb 9:22, 25–26, 28; Heb 7:23–24, 27; Heb 10:11–12, 14, 18.`}],
    rv:[`El español de 1880 amplía «most abominably injurious» en «abominable á los ojos de Dios y un ultraje»; una versión literal sería traducción de nivel 2.`, `Texto actual: la Iglesia Presbiteriana Ortodoxa (OPC) imprime hoy la misma frase. Lenguaje duro con estado actual: Pregunta 6.`]},
  WCF294: {kind:`Texto de otra tradición`, title:`Confesión de Westminster 29.4`, date:`1647`, year:1647, ed:ED.wcf, url:LINKS.wcf, ex:[
    {es:`Las misas privadas, ó la recepcion de este sacramento por un sacerdote, ó por cualquiera otra persona cuando esté sola; como tambien la negacion del cáliz al pueblo; la adoracion de los elementos, el elevarlos, ó llevarlos en procesion ó de otra manera cualquiera para recibir adoracion, y la conservacion de ellos para supuestos usos religiosos, son todas costumbres y prácticas contrarias á la naturaleza de este sacramento, y á la institucion de Cristo.`, esLv:`wcf`,
     en:`Private masses, or receiving this sacrament by a priest, or any other, alone; as likewise the denial of the cup to the people; worshipping the elements, the lifting them up, or carrying them about for adoration, and the reserving them for any pretended religious use; are all contrary to the nature of this sacrament, and to the institution of Christ.`, pg:`1894, p. 94. Texto de prueba de la última cláusula: Mt 15:9.`}]},
  WCF296: {kind:`Texto de otra tradición`, title:`Confesión de Westminster 29.6 y 29.5`, date:`1647`, year:1647, ed:ED.wcf, url:LINKS.wcf, ex:[
    {es:`Aquella doctrina llamada comunmente trasustanciacion que sostiene que hay un cambio de la sustancia del pan y del vino, en la sustancia del cuerpo y de la sangre de Cristo, por la consagracion de un sacerdote, ó por cualquier otro modo, por ser no solamente contra la Escritura, sino aun contra el sentido y razon comunes: destruye la naturaleza del sacramento; y ha sido y es, la causa de muchas supersticiones y groseras idolatrias.`, esLv:`wcf`,
     en:`That doctrine which maintains a change of the substance of bread and wine into the substance of Christ's body and blood (commonly called Transubstantiation) by consecration of a priest, or by any other way, is repugnant not to Scripture alone, but even to common sense and reason; overthroweth the nature of the sacrament; and hath been and is the cause of manifold superstitions, yea, of gross idolatries.`, pg:`29.6. 1894, p. 94. Textos de prueba: Hch 3:21; 1 Co 11:24–26; Lc 24:6, 39.`},
    {es:`…permanecen todavia en sustancia y naturaleza, verdadera y solamente, pan y vino, tales como fueron antes.`, esLv:`wcf`,
     en:`in substance and nature … still remain truly and only bread and wine, as they were before`, pg:`29.5. Textos de prueba: 1 Co 11:26–28; Mt 26:29.`}],
    rv:[`Lenguaje duro con estado actual (la OPC imprime hoy 29.6): Pregunta 6.`]},
  AC24: {kind:`Texto de otra tradición`, title:`Confesión de Augsburgo XXIV.24–27`, ed:ED.triglot, url:LINKS.boc, ex:[
    {la:`De his opinionibus nostri admonuerunt, quod dissentiant a Scripturis Sanctis et laedant gloriam passionis Christi. Nam passio Christi fuit oblatio et satisfactio non solum pro culpa originis, sed etiam pro omnibus reliquis peccatis, ut ad Hebraeos, 10, 10, scriptum est: Sanctificati sumus per oblationem Iesu Christi semel. Item 10, 14: Una oblatione consummavit in perpetuum sanctificatos.`,
     es:`Acerca de estas opiniones, los nuestros advirtieron que se apartan de las Sagradas Escrituras y ofenden la gloria de la pasión de Cristo. Porque la pasión de Cristo fue oblación y satisfacción no solo por la culpa original, sino también por todos los demás pecados, como está escrito en Hebreos 10:10: "Somos santificados por la oblación de Jesucristo, hecha una vez". Y en 10:14: "Con una sola oblación hizo perfectos para siempre a los santificados".`, esLv:`ia`, esFrom:`desde el latín de la Triglotta`,
     en:`Concerning these opinions our teachers have given warning that they depart from the Holy Scriptures and diminish the glory of the passion of Christ. For Christ's passion was an oblation and satisfaction, not for original guilt only, but also for all other sins, as it is written to the Hebrews 10:10: We are sanctified through the offering of Jesus Christ once for all. Also, Hebrews 10:14: By one offering He hath perfected forever them that are sanctified.`},
    {en:`that Christ, by His passion, had made satisfaction for original sin, and instituted the Mass wherein an offering should be made for daily sins … the Mass takes away the sins of the living and the dead by the outward act`, pg:`Contexto, XXIV.21–23 (latín: ex opere operato). Sin español en el dosier.`}]},
  AC24b: {kind:`Texto de otra tradición`, title:`Confesión de Augsburgo XXIV.10–13, 21–23, 29`, ed:ED.triglot, url:LINKS.boc, ex:[
    {es:`si la misa quita los pecados de los vivos y de los muertos por el acto exterior, la justificación vendría de la obra de las misas y no de la fe, lo cual la Escritura no permite.`, esLv:`ia`, pg:`XXIV.29`,
     en:`if the Mass take away the sins of the living and the dead by the outward act justification comes of the work of Masses, and not of faith, which Scripture does not allow`},
    {en:`Masses are said only for fees or stipends (11) … Private Masses were discontinued among us, as scarcely any Private Masses were celebrated except for lucre's sake (13) … the common opinion that the Mass takes away the sins of the living and the dead by the outward act (22–23)`, pg:`Sin español en el dosier.`}]},
  AC22: {kind:`Texto de otra tradición`, title:`Confesión de Augsburgo XXII`, ed:ED.triglot, url:LINKS.boc, ex:[
    {la:`Laicis datur utraque species sacramenti in coena Domini, quia hic mos habet mandatum Domini Matth. 26, 27: Bibite ex hoc omnes. Ubi manifeste praecepit Christus de poculo, ut omnes bibant.`,
     es:`A los laicos se les dan las dos especies del sacramento en la Cena del Señor, porque esta costumbre tiene el mandato del Señor en Mateo 26:27: "Bebed de ella todos". Allí Cristo mandó claramente acerca de la copa que todos beban.`, esLv:`ia`, esFrom:`desde el latín`,
     en:`To the laity are given Both Kinds in the Sacrament of the Lord's Supper, because this usage has the commandment of the Lord in Matt. 26:27: Drink ye all of it, where Christ has manifestly commanded concerning the cup that all should drink.`, pg:`XXII.1–2`}]},
  AC2212: {kind:`Texto de otra tradición`, title:`Confesión de Augsburgo XXII.12`, ed:ED.triglot, url:LINKS.boc, ex:[
    {en:`And because the division of the Sacrament does not agree with the ordinance of Christ, we are accustomed to omit the procession, which hitherto has been in use.`, pg:`Sin español en el dosier.`}]},
  AP24a: {kind:`Texto de otra tradición`, title:`Apología de la Confesión de Augsburgo XXIV.1, 19, 22`, ed:ED.triglot, url:LINKS.ap24, ex:[
    {la:`nos non abolere missam, sed religiose retinere ac defendere. Fiunt enim apud nos missae singulis dominicis et aliis festis`,
     es:`nosotros no abolimos la misa, sino que la conservamos y la defendemos con reverencia. Pues entre nosotros se celebran misas todos los domingos y en las demás fiestas`, esLv:`ia`, esFrom:`desde el latín`,
     en:`we do not abolish the Mass, but religiously maintain and defend it. For among us masses are celebrated every Lord's Day and on the other festivals`, pg:`XXIV.1`},
    {la:`Quoddam est sacrificium propitiatorium, id est, opus satisfactorium pro culpa et poena, hoc est, reconcilians Deum seu placans iram Dei, seu quod meretur aliis remissionem peccatorum. Altera species est sacrificium εὐχαριστικόν, quod non meretur remissionem peccatorum aut reconciliationem, sed fit a reconciliatis, ut pro accepta remissione peccatorum et pro aliis beneficiis acceptis gratias agamus`,
     es:`Uno es el sacrificio propiciatorio, es decir, una obra que satisface por la culpa y la pena, esto es, que reconcilia a Dios o aplaca su ira, o que merece para otros el perdón de los pecados. La otra especie es el sacrificio eucarístico, que no merece el perdón de los pecados ni la reconciliación, sino que lo ofrecen los reconciliados, para dar gracias por el perdón de los pecados recibido y por los demás beneficios recibidos`, esLv:`ia`, esFrom:`desde el latín`,
     en:`One is the propitiatory sacrifice, i.e., a work which makes satisfaction for guilt and punishment … The other species is the eucharistic sacrifice, which does not merit the remission of sins or reconciliation, but is rendered by those who have been reconciled, in order that we may give thanks`, pg:`XXIV.19`},
    {la:`Sed revera unicum tantum in mundo fuit sacrificium propitiatorium, videlicet mors Christi, ut docet Epistola ad Ebraeos`,
     es:`Pero en verdad hubo en el mundo un único sacrificio propiciatorio, a saber, la muerte de Cristo, como enseña la Epístola a los Hebreos`, esLv:`ia`,
     en:`But in fact there has been only one propitiatory sacrifice in the world, namely, the death of Christ, as the Epistle to the Hebrews 10:4 teaches`, pg:`XXIV.22`}],
    rv:[RV_APPLY]},
  AP24b: {kind:`Texto de otra tradición`, title:`Apología de la Confesión de Augsburgo XXIV.89, 92–93 (sobre la misa por los difuntos)`, ed:ED.triglot, url:LINKS.ap24, ex:[
    {la:`Quod vero defendunt adversarii nostri applicationem ceremoniae pro liberandis animabus defunctorum, qua ex re quaestum infinitum faciunt, nulla habent testimonia, nullum mandatum ex Scripturis.`,
     es:`Lo que defienden nuestros adversarios, la aplicación de la ceremonia para liberar las almas de los difuntos, de lo cual sacan ganancias infinitas, no tiene ningún testimonio ni ningún mandato de las Escrituras.`, esLv:`ia`, esFrom:`desde el latín`,
     en:`Our adversaries have no testimonies and no command from Scripture for defending the application of the ceremony for liberating the souls of the dead, although from this they derive infinite revenue.`, pg:`XXIV.89 (en el mismo párrafo: la Cena "was instituted for commemoration and preaching among the living")`},
    {la:`Quum missa non sit satisfactio, nec pro poena nec pro culpa, ex opere operato sine fide, sequitur applicationem pro mortuis inutilem esse.`,
     es:`Puesto que la misa no es satisfacción, ni por la pena ni por la culpa, ex opere operato, sin fe, se sigue que su aplicación por los muertos es inútil.`, esLv:`ia`,
     en:`Since the Mass is not a satisfaction, either for punishment or for guilt, ex opere operato, without faith, it follows that the application on behalf of the dead is useless.`, pg:`XXIV.92`},
    {en:`Neither does the Greek canon apply the offering as a satisfaction for the dead, because it applies it equally for all the blessed patriarchs, prophets, apostles.`, pg:`XXIV.93. Sin español en el dosier. Es la lectura luterana de la liturgia griega.`}],
    rv:[RV_APPLY]},
  AP22: {kind:`Texto de otra tradición`, title:`Apología de la Confesión de Augsburgo XXII.2`, ed:ED.triglot, url:LINKS.ap22, ex:[
    {es:`Si Cristo lo instituyó para toda la Iglesia, ¿por qué se niega una especie a una parte de la Iglesia? ¿Por qué se prohíbe el uso de la otra especie? ¿Por qué se cambia la ordenanza de Cristo, sobre todo cuando él mismo la llama su testamento?`, esLv:`ia`, esFrom:`desde el inglés`,
     en:`Now, if Christ has instituted it for the entire Church, why is one kind denied to a part of the Church? Why is the use of the other kind prohibited? Why is the ordinance of Christ changed, especially when He Himself calls it His testament?`}],
    rv:[`Latín no leído; el español hay que rehacerlo desde el latín.`, RV_APPLY]},
  SA221: {kind:`Texto de otra tradición`, title:`Artículos de Esmalcalda II.2.1`, ed:ED.triglot, url:LINKS.boc, ex:[
    {de:`Daß die Messe im Papsttum muss der grösste und schrecklichste Greül sein als die stracks und gewaltiglich wider diesen Hauptartikel strebt…`,
     es:`Que la misa en el papado tiene que ser la mayor y más horrible abominación, porque choca directa y violentamente con este artículo principal… Pues se ha sostenido que este sacrificio u obra de la misa… libra a los hombres de los pecados, tanto en esta vida como en el purgatorio, cuando solo el Cordero de Dios debe y tiene que hacerlo.`, esLv:`ia`, esFrom:`desde el alemán`,
     en:`That the Mass in the Papacy must be the greatest and most horrible abomination, as it directly and powerfully conflicts with this chief article … For it has been held that this sacrifice or work of the Mass … frees men from sins, both in this life and also in purgatory, while only the Lamb of God shall and must do this.`}],
    rv:[`Lenguaje duro sin estado actual todavía: Pregunta 6.`]},
  SA2212: {kind:`Texto de otra tradición`, title:`Artículos de Esmalcalda II.2.12`, ed:ED.triglot, url:LINKS.boc, ex:[
    {en:`the Mass is used almost alone for the dead, although Christ has instituted the Sacrament alone for the living.`, pg:`Sin español en el dosier.`}]},
  SA365: {kind:`Texto de otra tradición`, title:`Artículos de Esmalcalda III.6.5`, ed:ED.triglot, url:LINKS.boc, ex:[
    {de:`Von der Transsubstantiation achten wir der spitzigen Sophisterei gar nichts, da sie lehren, daß Brot und Wein verlassen oder verlieren ihr natürlich Wesen, und bleibe allein Gestalt und Farbe des Brots und nicht rechtes Brot. Denn es reimt sich mit der Schrift aufs beste, daß Brot da sei und bleibe, wie es St. Paulus selbst nennt: "Das Brot, das wir brechen", und: "Also, esse er von dem Brot."`,
     es:`De la transubstanciación no nos importa nada la sutileza sofística con que enseñan que el pan y el vino abandonan o pierden su ser natural, y que solo queda la forma y el color del pan, y no pan verdadero. Porque concuerda perfectamente con la Escritura que allí hay pan y sigue habiéndolo, como lo llama el mismo san Pablo: "El pan que partimos", y: "Coma así de aquel pan".`, esLv:`ia`, esFrom:`desde el alemán`,
     en:`As regards transubstantiation, we care nothing about the sophistical subtlety by which they teach that bread and wine leave or lose their own natural substance, and that there remain only the appearance and color of bread, and not true bread. For it is in perfect agreement with Holy Scriptures that there is, and remains, bread, as Paul himself calls it, 1 Cor. 10:16: The bread which we break. And 1 Cor. 11:28: Let him so eat of that bread.`}]},
  SA3623: {kind:`Texto de otra tradición`, title:`Artículos de Esmalcalda III.6.2–3`, ed:ED.triglot, url:LINKS.boc, ex:[
    {en:`And that not only one form is to be given … For even if it were true that there is as much under one as under both, yet the one form only is not the entire ordinance and institution ordained and commanded by Christ.`, pg:`Sin español en el dosier.`}]},
  FCEP7: {kind:`Texto de otra tradición`, title:`Fórmula de Concordia, Epítome VII.22–24 (artículos rechazados)`, ed:ED.triglot, url:LINKS.boc, ex:[
    {de:`1. Die päpstische Transsubstantiation, da im Papsttum gelehrt wird, daß Brot und Wein im heiligen Abendmahl ihre Substanz und natürlich Wesen verlieren und also zunichte werden, daß es in den Leib Christi verwandelt werde, und allein die äußerliche Gestalt bleibe.`,
     es:`1. La transubstanciación papal, cuando en el papado se enseña que el pan y el vino pierden en la santa Cena su sustancia y su ser natural, y así quedan aniquilados, de modo que son transformados en el cuerpo de Cristo y solo permanece la forma exterior.`, esLv:`ia`, pg:`VII.22`},
    {de:`2. Die päpstische Opfermesse für die Sünden der Lebendigen und Toten.`, es:`2. La misa papal como sacrificio por los pecados de los vivos y de los muertos.`, esLv:`ia`,
     en:`The papistic sacrifice of the Mass for the sins of the living and the dead.`, pg:`VII.23`},
    {de:`3. Daß den Laien nur eine Gestalt des Sakraments gegeben, und wider die offenbaren Worte des Testaments Christi der Kelch ihnen vorgehalten, und seines Bluts beraubt werden!`, pg:`VII.24. Sin español en el dosier.`}]},
  FCSD7: {kind:`Texto de otra tradición`, title:`Fórmula de Concordia, Declaración Sólida VII.87 y 126`, ed:ED.triglot, url:LINKS.boc, ex:[
    {de:`außer welchem Gebrauch, wenn das Brot in der papistischen Messe nicht ausgeteilt, sondern aufgeopfert oder eingeschlossen, umgetragen und anzubeten vorgestellt [wird], ist es für kein Sakrament zu halten`,
     es:`Y fuera de este uso, cuando en la misa papista el pan no se distribuye, sino que se ofrece, se encierra, se lleva en procesión y se exhibe para la adoración, no ha de tenerse por sacramento.`, esLv:`ia`, esFrom:`desde el alemán`,
     en:`And apart from this use, when in the papistic mass the bread is not distributed, but offered up or enclosed, borne about, and exhibited for adoration, it is to be regarded as no sacrament.`, pg:`VII.87`},
    {en:`that the elements or the visible species or forms of the consecrated bread and wine must be adored. However, no one, unless he be an Arian heretic, can and will deny that Christ Himself, true God and man, who is truly and essentially present in the Supper, should be adored in spirit and in truth in the true use of the same`, pg:`VII.126 (enseñanza rechazada). Sin español en el dosier.`}]},
  ENC11: {kind:`Texto de otra tradición`, title:`Encíclica patriarcal y sinodal de 1895, §XI`, date:`1895`, year:1895, ed:ED.enc1895, url:LINKS.enc, ex:[
    {es:`La Iglesia una, santa, católica y apostólica de los siete concilios ecuménicos, siguiendo el mandato del Señor, "Bebed de ella todos", daba a todos también del santo cáliz; pero la Iglesia papal, desde el siglo IX en adelante, innovó también en este rito, privando a los laicos del santo cáliz, contra el mandato del Señor y la práctica universal de la Iglesia antigua, así como la prohibición expresa de muchos obispos ortodoxos antiguos de Roma.`, esLv:`ia`, esFrom:`desde el inglés de Metallinos`,
     en:`The one holy, catholic and apostolic Church of the seven Oecumenical Councils, following the Lord's command, 'Drink ye all of it,' imparted also of the holy chalice to all; but the Papal Church from the ninth century downwards has made an innovation in this rite also, by depriving the laity of the holy chalice, contrary to the Lord's command and the universal practice of the ancient Church, as well as the express prohibition of many ancient orthodox bishops of Rome.`}],
    rv:[`Español a rehacer desde el griego (OCR griego inutilizable). Lenguaje duro y estado actual: Pregunta 6.`]},
  ENC10: {kind:`Texto de otra tradición`, title:`Encíclica patriarcal y sinodal de 1895, §X`, date:`1895`, year:1895, ed:ED.enc1895, url:LINKS.enc, ex:[
    {es:`La Iglesia una, santa, católica y apostólica de los siete concilios ecuménicos sostuvo que los preciosos dones se consagran después de la oración de invocación del Espíritu Santo, por la bendición del sacerdote, como atestiguan los antiguos rituales de Roma y de las Galias; pero después la Iglesia papal innovó también en esto, aceptando arbitrariamente que la consagración de los preciosos dones ocurre con la pronunciación de las palabras del Señor: "Tomad, comed; esto es mi cuerpo" y "Bebed de ella todos; porque esta es mi sangre".`, esLv:`ia`, esFrom:`desde el inglés de Metallinos`,
     en:`The one holy, catholic and apostolic Church of the seven Oecumenical Councils held that the precious gifts are consecrated after the prayer of the invocation of the Holy Ghost by the blessing of the priest, as the ancient rituals of Rome and Gaul testify; nevertheless afterwards the Papal Church made an innovation in this also, by arbitrarily accepting the consecration of the precious gifts as taking place along with the utterance of the Lord's words: 'Take, eat; this is my body': and 'Drink ye all of it; for this is my blood.'`}],
    rv:[`Español a rehacer desde el griego.`, `Rango intraortodoxo: Mogila (P. 107) liga el cambio a la epíclesis; Filareto (P. 338) nombra las palabras de la institución y luego la invocación. Lo debe mostrar el dosier ortodoxo.`]},
  ENC9: {kind:`Texto de otra tradición`, title:`Encíclica patriarcal y sinodal de 1895, §IX`, date:`1895`, year:1895, ed:ED.enc1895, url:LINKS.enc, ex:[
    {es:`La Iglesia una, santa, católica y apostólica de los siete concilios ecuménicos, según el ejemplo de nuestro Salvador, celebró la divina Eucaristía durante más de mil años, en Oriente y Occidente, con pan fermentado, como lo atestiguan también los teólogos papales amantes de la verdad; pero la Iglesia papal, desde el siglo XI, innovó también en el sacramento de la divina Eucaristía introduciendo el pan ázimo.`, esLv:`ia`, esFrom:`desde el inglés de Metallinos`,
     en:`The one holy, catholic and apostolic Church of the seven Oecumenical Councils, according to the example of our Saviour, celebrated the divine Eucharist for more than a thousand years throughout the East and West with leavened bread, as the truth-loving papal theologians themselves also bear witness; but the Papal Church from the eleventh century made an innovation also in the sacrament of the divine Eucharist by introducing unleavened bread.`},
    {en:`one uses leavened bread … and another unleavened`, pg:`§IV, entre las diferencias que la encíclica considera incompatibles con una sola Iglesia. Sin español en el dosier.`}],
    rv:[`Español a rehacer desde el griego.`]},
  MOG107: {kind:`Texto de otra tradición`, title:`Pedro Mogila, Confesión ortodoxa I, pregunta 107`, ed:`Edición de Overbeck, 1898, pp. 79–80.`, ex:[
    {es:`que la sustancia del pan y la sustancia del vino se cambian en la misma sustancia del mismo Cuerpo y Sangre de Jesucristo por la operación del Espíritu Santo, cuyo poder e influjo invoque el sacerdote con estas palabras: … Señor, envía desde el cielo tu Espíritu Santo sobre nosotros y sobre estos dones aquí presentes`, esLv:`ia`, esFrom:`desde el inglés de Overbeck`,
     en:`that the Substance of the Bread and the Substance of the Wine are changed into the very Substance of the very Body and Blood of Jesus Christ, by the operation or working of the Holy Ghost, whose Power and Influence let the Priest invoke in these Words … O Lord, send down from Heaven thy Holy Spirit upon us, and upon these Gifts now lying before thee`}],
    rv:[`Cita tomada del mapa ortodoxo; no releída en este dosier.`]}
};

const VERSES = {
  "Hebreos 9:25-26": {es:`Y no para ofrecerse muchas veces á sí mismo…`, rv:`El dosier solo transcribe el comienzo del pasaje.`},
  "Hebreos 10:14": {es:`Porque con una sola ofrenda hizo perfectos para siempre á los santificados`},
  "Hebreos 10:18": {es:`Pues donde hay remisión de éstos, no hay más ofrenda por pecado`},
  "Hebreos 10:14, 18": {es:`Porque con una sola ofrenda hizo perfectos para siempre á los santificados. […] Pues donde hay remisión de éstos, no hay más ofrenda por pecado`}
};

const GRADES = {
  dogma: {label:`Dogma`, sub:`de fe divina y católica`, src:`CIC750`, srcLabel:`Código de Derecho Canónico, can. 750 §1`,
    def:`Se ha de creer con fe divina y católica todo aquello que se contiene en la palabra de Dios escrita o transmitida por tradición […] y que además es propuesto como revelado por Dios, ya sea por el magisterio solemne de la Iglesia, ya por su magisterio ordinario y universal`},
  definitiva: {label:`Doctrina definitiva`, src:`CIC750`, srcLabel:`Código de Derecho Canónico, can. 750 §2`,
    def:`Se han de aceptar y retener firmemente todas y cada una de las cosas sobre la doctrina de la fe y las costumbres propuestas de modo definitivo por el magisterio de la Iglesia`},
  magisterio: {label:`Magisterio auténtico`, src:`CIC752`, srcLabel:`Código de Derecho Canónico, can. 752`,
    def:`Se ha de prestar un asentimiento religioso del entendimiento y de la voluntad, sin que llegue a ser de fe, a la doctrina que el Sumo Pontífice o el Colegio de los Obispos, en el ejercicio de su magisterio auténtico, enseñan acerca de la fe y de las costumbres`},
  disciplina: {label:`Disciplina`, src:`DV17`, srcLabel:`Donum veritatis 17`,
    def:`Las decisiones magisteriales en materia de disciplina, aunque no estén garantizadas por el carisma de la infalibilidad, no están desprovistas de la asistencia divina y requieren la adhesión de los fieles.`}
};

const DEFINITION = {
  text:`Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo, instituido en la última Cena para hacer presente el sacrificio de la cruz hasta que él vuelva, y a la vez el banquete en el que se recibe a Cristo mismo.`,
  grades:[{cat:`magisterio`}],
  sources:[[`SC47`,`Sacrosanctum Concilium 47`],[`CEC1323`,`Catecismo 1323`],[`CEC1382`,`Catecismo 1382`]],
  rv:[`Grado: el dosier no redacta una línea de sitio para la definición. Su afirmación del sacrificio lleva el grado de Trento (dogma, QE-3) y el resto el del Vaticano II; cómo mostrarlo es la Pregunta 15.`,
      `Hay dos redacciones oficiales en español de SC 47 (la de su página y la del Catecismo 1323): Pregunta 2.`]
};

const QE = [
  {id:`QE-1`, text:`En la Eucaristía, después de la consagración, está contenido verdadera, real y sustancialmente Cristo entero: su cuerpo y su sangre, con su alma y su divinidad. No está solo como en un signo o una figura. La Iglesia la llama presencia "real" por excelencia, no porque las otras presencias de Cristo (en su Palabra, en la oración de la Iglesia, en los sacramentos) no sean reales.`,
   grades:[{cat:`dogma`, basis:`así lo clasifica la {c:CDF11,CDF5|Congregación para la Doctrina de la Fe (1998, §11)}`}],
   sources:[[`T13c1`,`Trento, ses. XIII, cap. 1`],[`T13can1`,`Trento, ses. XIII, can. 1`],[`CEC1373,CEC1374`,`Catecismo 1373–1374`],[`SC7`,`Sacrosanctum Concilium 7`]]},
  {id:`QE-2`, text:`Por la consagración, toda la sustancia del pan se convierte en la sustancia del cuerpo de Cristo y toda la sustancia del vino en la de su sangre; del pan y del vino quedan solo las especies (lo que se ve, se toca y se gusta). La Iglesia llama a este cambio "transubstanciación".`,
   grades:[{cat:`dogma`, basis:`definido por Trento (ses. XIII, cap. 4 y can. 2); la Iglesia no lo ha clasificado por separado`}],
   sources:[[`T13c4`,`Trento, ses. XIII, cap. 4`],[`T13can2`,`Trento, ses. XIII, can. 2`],[`LAT1`,`Letrán IV, const. 1`],[`MF10,MF24,MF46`,`Mysterium fidei 10, 24, 46`],[`CEC1376`,`Catecismo 1376`]],
   rv:[`Grado por inferencia del agente: no confirmable como clasificación de la propia Iglesia (verificación F7).`]},
  {id:`QE-3`, text:`La Misa es un sacrificio verdadero y propio: sacrificio de acción de gracias y de alabanza al Padre, y memorial de la Pascua de Cristo. No es otro sacrificio distinto del de la cruz: la víctima y el que ofrece son los mismos, Cristo, y solo cambia el modo de ofrecerse, que ahora es incruento. Por eso la Iglesia enseña que es también propiciatorio y que puede ofrecerse por vivos y difuntos.`,
   grades:[{cat:`dogma`, basis:`así lo clasifica la {c:CDF11|Congregación para la Doctrina de la Fe (1998, §11)}`}],
   sources:[[`T22c1`,`Trento, ses. XXII, cap. 1`],[`T22c2`,`Trento, ses. XXII, cap. 2`],[`T22can`,`Trento, ses. XXII, cann. 1, 3 y 4`],[`CEC1360`,`Catecismo 1360–1362`],[`CEC1366b`,`Catecismo 1366–1367`],[`EdE12`,`Ecclesia de Eucharistia 12`]]},
  {id:`QE-4`, text:`Bajo la especie del pan y bajo la del vino está Cristo entero, y también en cada parte de cada una: partir la hostia no divide a Cristo. Por eso quien comulga solo con el pan recibe a Cristo entero.`,
   grades:[{cat:`dogma`, basis:`definido por Trento (ses. XIII, can. 3; ses. XXI, can. 3); la Iglesia no lo ha clasificado por separado`}],
   sources:[[`T13c3`,`Trento, ses. XIII, cap. 3`],[`T21c3`,`Trento, ses. XXI, cap. 3 y can. 3`],[`CEC1377`,`Catecismo 1377`]],
   rv:[`Grado por inferencia del agente: no confirmable como clasificación de la propia Iglesia (verificación F8). La lista de la CDF es ilustrativa: su silencio no es un grado menor.`]},
  {id:`QE-5`, text:`Como Cristo mismo está presente, a la Eucaristía se le da el culto de adoración que se debe solo a Dios. Por eso se la guarda en el sagrario, se la lleva a los enfermos, se la expone para la adoración y se la lleva en procesión.`,
   grades:[{cat:`dogma`, basis:`definido por Trento (ses. XIII, cann. 6–7); la Iglesia no lo ha clasificado por separado`}],
   sources:[[`T13c5`,`Trento, ses. XIII, cap. 5`],[`T13can6`,`Trento, ses. XIII, can. 6`],[`T13c6`,`Trento, ses. XIII, cap. 6`],[`CEC1378`,`Catecismo 1378`]],
   rv:[`Grado por inferencia (verificación F9). Las formas concretas (exposición, procesiones, sagrario, lámpara) son disciplina (Código, cann. 934–944): la línea del sitio no lo dice.`]},
  {id:`QE-6`, text:`Con las palabras "Hagan esto en memoria mía", Cristo hizo sacerdotes a los apóstoles y les mandó ofrecer su cuerpo y su sangre. Por eso solo un sacerdote válidamente ordenado, obispo o presbítero, puede consagrar la Eucaristía.`,
   grades:[{cat:`dogma`}],
   sources:[[`T22can2`,`Trento, ses. XXII, can. 2`],[`LAT1`,`Letrán IV, const. 1`],[`CIC900`,`Código de Derecho Canónico, can. 900`],[`CEC1411`,`Catecismo 1411`]],
   rv:[`Sin línea de grado redactada: se muestra solo la categoría. El dosier da dogma (por inferencia) a la institución de los apóstoles como sacerdotes; que solo el sacerdote consagre no tiene grado declarado por la Iglesia (verificación F10).`]},
  {id:`QE-7`, text:`Ningún mandato divino obliga a los fieles a comulgar con las dos especies, porque bajo cualquiera de ellas se recibe a Cristo entero. Comulgar solo con el pan es una ley de la Iglesia, que ella puede cambiar; hoy, en el rito latino, se permite también la comunión bajo las dos especies; en los ritos orientales católicos es la forma habitual (Catecismo 1390).`,
   grades:[{cat:`dogma`},{cat:`disciplina`}],
   sources:[[`T21can1`,`Trento, ses. XXI, can. 1`],[`T21c2`,`Trento, ses. XXI, cap. 2`],[`SC55`,`Sacrosanctum Concilium 55`],[`CIC925`,`Código de Derecho Canónico, can. 925`],[`CEC1390`,`Catecismo 1390`]],
   rv:[`Dos grados en una afirmación, sin línea redactada: dogma para «no hay precepto divino; se recibe a Cristo entero» (Trento XXI, cann. 1 y 3, por inferencia); disciplina para la regla de una sola especie (XXI, cap. 2; hoy Código 925 y SC 55).`, `La referencia «(Catecismo 1390)» está dentro del borrador.`]},
  {id:`QE-8`, text:`Comulgar une más a Cristo, perdona los pecados veniales y preserva de los graves. No está ordenada a perdonar los pecados mortales: para eso está la confesión. Quien tiene conciencia de pecado grave debe confesarse antes de comulgar, salvo que haya un motivo grave y no pueda confesarse; en ese caso debe hacer un acto de contrición perfecta, con el propósito de confesarse cuanto antes.`,
   grades:[{cat:`dogma`},{cat:`disciplina`}],
   sources:[[`T13c2`,`Trento, ses. XIII, cap. 2`],[`T13can5`,`Trento, ses. XIII, can. 5`],[`T13c7,T13can11`,`Trento, ses. XIII, cap. 7 y can. 11`],[`CEC1457`,`Catecismo 1457`],[`CEC1395,CEC1416`,`Catecismo 1395, 1416`]],
   rv:[`Sin línea de grado redactada. Dogma (por inferencia) para Trento XIII can. 5; la regla de confesarse antes: Trento la funda en el uso eclesiástico y la «establece y declara» en el can. 11; la Iglesia no la clasificó, y el dosier la muestra como disciplina en su forma concreta (Código 916; Catecismo 1457).`]},
  {id:`QE-9`, text:`Para la Iglesia católica, la Eucaristía es "fuente y cumbre de toda la vida cristiana" y "hace la Iglesia": quienes la reciben se unen más a Cristo y, por eso, Cristo los une entre sí en un solo cuerpo (Catecismo 1396). Por la misma razón enseña que celebrarla "no puede ser el punto de partida de la comunión, que la presupone previamente" (Ecclesia de Eucharistia 35). Reconoce en las Iglesias ortodoxas verdaderos sacramentos, y sobre todo el sacerdocio y la Eucaristía; con las comunidades nacidas de la Reforma no admite la intercomunión. Distingue de la intercomunión el caso de una necesidad espiritual grave, en el que puede darse la comunión a otros cristianos que comparten la fe católica sobre este sacramento (Catecismo 1401; Ecclesia de Eucharistia 45).`,
   grades:[{cat:`magisterio`},{cat:`disciplina`}],
   sources:[[`LG11`,`Lumen gentium 11`],[`CEC1396,EdE26`,`Catecismo 1396`],[`EdE35,EdE38`,`Ecclesia de Eucharistia 35, 38`],[`CEC1399,CEC1400`,`Catecismo 1399–1400`],[`CEC1401,EdE45`,`Catecismo 1401; Ecclesia de Eucharistia 45`],[`CIC844`,`Código de Derecho Canónico, can. 844`]],
   rv:[`Sin línea de grado redactada: magisterio auténtico (LG 11; UR 15, 22; Ecclesia de Eucharistia) y disciplina (Código 844).`, `Neutralidad: es la columna católica hablando de las otras tradiciones; no reutilizar en otra página como descripción de ellas.`, `Las referencias entre paréntesis están dentro del borrador.`]}
];

const LEFT_OUT = `Fuera de Qué enseña, con motivo: misas en honor de los santos, canon romano y ceremonias (definidos, pero litúrgicos; posibles en «ver más»); cómo permanecen los accidentes (explicación tomista; Aquino es una voz, no la columna); la epíclesis (va en OB-6); materia y forma según Florencia (usada en OB-6 y Cómo se vive; Pregunta 17).`;

const PORQUE = {
  intro:[
    `La Iglesia católica funda esta enseñanza, ante todo, en las palabras de Cristo en la última Cena, tomadas en su sentido propio: "Esto es mi cuerpo". {c:T13c1,T13c4|Trento, ses. XIII, caps. 1 y 4}`,
    `Las lee junto con el discurso del pan de vida (Juan 6) y con las palabras "entregado por ustedes" y "derramada por muchos", que muestran un sacrificio. {c:EdE16|Ecclesia de Eucharistia 16} {c:CEC1336|Catecismo 1336} {c:CEC1365|Catecismo 1365} {c:EdE12|Ecclesia de Eucharistia 12} {c:T22c1|Trento, ses. XXII, cap. 1}`,
    `Y sostiene que la Iglesia siempre lo creyó así. {c:T13c4|Trento, ses. XIII, cap. 4}`
  ],
  fathers:[
    {lead:`El Catecismo cita a san Juan Crisóstomo:`, quote:[`No es el hombre quien hace que las cosas ofrecidas se conviertan en Cuerpo y Sangre de Cristo, sino Cristo mismo que fue crucificado por nosotros. El sacerdote, figura de Cristo, pronuncia estas palabras, pero su eficacia y su gracia provienen de Dios. Esto es mi Cuerpo, dice. Esta palabra transforma las cosas ofrecidas.`],
     attr:`Juan Crisóstomo, De proditione Iudae, hom. 1, 6, en`, src:`CEC1375`, srcLabel:`Catecismo 1375`},
    {lead:`El Catecismo cita a san Ambrosio:`, quote:[`Estemos bien persuadidos de que esto no es lo que la naturaleza ha producido, sino lo que la bendición ha consagrado, y de que la fuerza de la bendición supera a la de la naturaleza, porque por la bendición la naturaleza misma resulta cambiada.`, `La palabra de Cristo, que pudo hacer de la nada lo que no existía, ¿no podría cambiar las cosas existentes en lo que no eran todavía?`],
     attr:`Ambrosio de Milán, De mysteriis 9, 50; 52, en`, src:`CEC1375`, srcLabel:`Catecismo 1375`}
  ],
  note:`Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing:`Para la Iglesia católica, Juan 6 no admite una lectura metafórica: ante el asombro de los oyentes, Jesús se ve obligado, dice Juan Pablo II, "a recalcar la verdad objetiva de sus palabras": "Mi carne es verdadera comida y mi sangre verdadera bebida" {v:Juan 6:55}. Y concluye: "No se trata de un alimento metafórico" {c:EdE16|Ecclesia de Eucharistia 16}.`
};

const ESCRITURA = [
  {ref:`Mateo 26:26-28; Marcos 14:22-24; Lucas 22:19-20; 1 Corintios 11:23-26`, d:`"Esto es mi cuerpo… esta es mi sangre" se lee en su sentido propio: Cristo dio a los apóstoles su propio cuerpo y su propia sangre {c:T13c1|Trento, ses. XIII, cap. 1}. "Entregado por vosotros" y "derramada… para remisión de los pecados" muestran que es un sacrificio {c:CEC1365|Catecismo 1365}.`},
  {ref:`Lucas 22:19`, d:`Con estas palabras Cristo hizo sacerdotes a los apóstoles y les mandó ofrecer su cuerpo y su sangre {c:T22can2|Trento, ses. XXII, can. 2}. El memorial no es solo recordar: es la celebración litúrgica que hace presente lo que recuerda {c:CEC1341|Catecismo 1341, 1363}.`},
  {ref:`Juan 6:51-58; 6:60-69`, d:`Para la Iglesia católica, el discurso del pan de vida prepara la institución de la Eucaristía {c:CEC1338|Catecismo 1338}. Ante el asombro de los oyentes, Jesús "recalca la verdad objetiva de sus palabras": "mi carne es verdadera comida" {v:Juan 6:55}; por eso, según {c:EdE16|Ecclesia de Eucharistia 16}, no es "un alimento metafórico". Trento, por su parte, usa Juan 6 "segun las varias interpretaciones de los santos Padres y doctores" {c:T21c1|ses. XXI, cap. 1}.`,
   rv:`Trento XXI cap. 1 usa Juan 6 solo para mostrar que no se manda comulgar con las dos especies, y no hace obligatoria una lectura. Juan 6:66 no lo citan Ecclesia de Eucharistia 16 ni Catecismo 1336.`},
  {ref:`1 Corintios 10:16-17`, d:`"La copa de bendición… ¿no es comunión con la sangre de Cristo?" La Eucaristía une a Cristo y, por eso, une entre sí a los que comulgan en un solo cuerpo, la Iglesia {c:CEC1396|Catecismo 1396}.`},
  {ref:`1 Corintios 10:21`, d:`Pablo contrapone la "mesa del Señor" a la "mesa de los demonios", donde se comían sacrificios; Trento entiende en ambos casos "mesa" como altar.`, rv:`Sin cita en el borrador; el dosier lo apoya en Trento XXII cap. 1.`},
  {ref:`1 Corintios 11:26`, d:`Comer este pan y beber esta copa es anunciar la muerte del Señor hasta que vuelva: la Eucaristía mira a la cruz y a la venida final {c:T13c2|Trento, ses. XIII, cap. 2}.`},
  {ref:`1 Corintios 11:27-29`, d:`Quien come o bebe indignamente "será reo del cuerpo y de la sangre del Señor": por eso hay que examinarse, y quien tiene conciencia de pecado grave debe confesarse antes de comulgar {c:CEC1385|Catecismo 1385}.`},
  {ref:`Malaquías 1:11`, d:`La "oblación pura" que se ofrecería "en todo lugar" entre las naciones es, para Trento, la Misa {c:T22c1|ses. XXII, cap. 1}.`,
   rv:`La confesión luterana lee el mismo versículo como predicación y acción de gracias: "The adversaries perversely apply this passage to the Mass" (Apología XXIV.31–32). Se propone mostrar ambas lecturas en OB-1; hoy no está en esa página.`},
  {ref:`Génesis 14:18; Salmo 110:4`, d:`Cristo es sacerdote "según el orden de Melquisedec", que ofreció pan y vino; la Iglesia ve en ese gesto una figura de su propia ofrenda {c:CEC1333|Catecismo 1333}.`},
  {ref:`Hebreos 7:11-27; 9:12-14, 27`, d:`Hebreos dice que Cristo se ofreció una sola vez y que su sacerdocio no termina; Trento concluye que en la última Cena dejó un sacrificio visible que hace presente ese único sacrificio, sin repetirlo {c:T22c1|ses. XXII, cap. 1}.`},
  {ref:`Éxodo 12; 1 Corintios 5:7`, d:`Jesús instituyó la Eucaristía en la cena pascual: celebrada la Pascua antigua, instituyó la nueva, él mismo inmolado bajo signos visibles {c:T22c1|Trento, ses. XXII, cap. 1} {c:CEC1340|Catecismo 1340}.`},
  {ref:`Hebreos 1:6 (Salmo 97:7); Mateo 2:11; Mateo 28:17`, d:`Al mismo Dios presente en el sacramento lo adoraron los ángeles, los magos y los apóstoles en Galilea: por eso se le da culto de adoración {c:T13c5|Trento, ses. XIII, cap. 5}.`,
   rv:`Mateo 28:17 es inferencia del agente («adorado por los apóstoles en Galilea»); Trento no lo nombra. En OB-3 se dejó fuera de Pasajes por eso.`},
  {ref:`1 Corintios 4:1; 11:34`, d:`La Iglesia es "administradora de los misterios de Dios": puede regular cómo se dan los sacramentos, sin tocar su sustancia {c:T21c2|Trento, ses. XXI, cap. 2}.`},
  {ref:`Hechos 2:42, 46; 20:7`, d:`Desde el principio los cristianos se reunían "para partir el pan", sobre todo el primer día de la semana {c:CEC1342|Catecismo 1342–1343}.`}
];

const VIVE = {
  intro:[
    `La Eucaristía se celebra en la Misa. Los católicos tienen la obligación de participar en ella los domingos y las demás fiestas de precepto, y deben comulgar al menos una vez al año, en tiempo pascual {c:CIC1247,CIC920|Código de Derecho Canónico, cann. 1247 y 920}. Pero la Iglesia no se queda en ese mínimo: «recomienda vivamente a los fieles recibir la santa Eucaristía los domingos y los días de fiesta, o con más frecuencia aún, incluso todos los días» {c:CEC1389|Catecismo 1389}.`,
    `Solo un sacerdote válidamente ordenado preside y consagra {c:CIC900|can. 900}. La Iglesia pide comulgar en gracia de Dios: quien tiene conciencia de pecado grave se confiesa antes {c:CIC916|can. 916}. Como, para la Iglesia, Cristo sigue presente mientras duran las especies, las hostias consagradas se guardan en el sagrario, desde donde se llevan a los enfermos y ante el que se reza y se adora {c:CIC938,CIC941|cann. 938–941} {c:CEC1378,CEC1379|Catecismo 1378–1379}.`
  ],
  items:[
    {id:`CV-0`, l:`La Misa: Palabra y Eucaristía`, d:`La celebración tiene «dos grandes momentos que forman una unidad básica»: la liturgia de la Palabra, «con las lecturas, la homilía y la oración universal», y la liturgia eucarística, «con la presentación del pan y del vino, la acción de gracias consecratoria y la comunión»; juntas constituyen «un solo acto de culto».`, s:[[`CEC1346`,`Catecismo 1346`]]},
    {id:`CV-1`, l:`Misa del domingo`, d:`«El domingo y las demás fiestas de precepto los fieles tienen obligación de participar en la Misa.»`, s:[[`CIC1247`,`Código de Derecho Canónico, can. 1247`]]},
    {id:`CV-2`, l:`Comunión frecuente; mínimo anual`, d:`La Iglesia recomienda comulgar cada vez que se participa en la Misa, incluso a diario; obliga a hacerlo «por lo menos una vez al año», «durante el tiempo pascual, a no ser que por causa justa se cumpla en otro tiempo dentro del año».`, s:[[`CEC1389,CEC1417`,`Catecismo 1388–1389, 1417`],[`CIC920`,`can. 920`],[`T13can9`,`Trento, ses. XIII, can. 9`]]},
    {id:`CV-3`, l:`En gracia de Dios`, d:`«Quien tenga conciencia de hallarse en pecado grave, no celebre la Misa ni comulgue el Cuerpo del Señor sin acudir antes a la confesión sacramental, a no ser que concurra un motivo grave y no haya oportunidad de confesarse», y en ese caso debe hacer un acto de contrición perfecta con propósito de confesarse cuanto antes.`, s:[[`CIC916`,`can. 916`],[`CEC1385,CEC1415`,`Catecismo 1385, 1415`],[`T13c7`,`Trento, ses. XIII, cap. 7`]]},
    {id:`CV-4`, l:`Ayuno eucarístico`, d:`Abstenerse de comida y bebida «al menos desde una hora antes de la sagrada comunión, a excepción sólo del agua y de las medicinas»; los mayores, los enfermos y quienes los cuidan quedan exentos.`, s:[[`CIC919`,`can. 919`],[`CEC1387`,`Catecismo 1387`]]},
    {id:`CV-5`, l:`Primera comunión`, d:`Los niños que han llegado al uso de razón, con preparación y «previa confesión sacramental»; deben poder recibir el Cuerpo del Señor «con fe y devoción».`, s:[[`CIC913`,`cann. 913–914`]]},
    {id:`CV-6`, l:`Quién preside`, d:`«Sólo el sacerdote válidamente ordenado es ministro capaz de confeccionar el sacramento de la Eucaristía, actuando en la persona de Cristo.» Cristo mismo «es quien preside invisiblemente toda celebración eucarística»; el obispo o el presbítero preside «actuando in persona Christi capitis».`, s:[[`CIC900`,`can. 900`],[`CEC1348`,`Catecismo 1348`]]},
    {id:`CV-7`, l:`Pan y vino`, d:`Pan «exclusivamente de trigo y hecho recientemente»; vino «natural, del fruto de la vid», con «un poco de agua»; en la Iglesia latina, pan ázimo «según la antigua tradición de la Iglesia latina».`, s:[[`CIC924`,`cann. 924 y 926`],[`T22c7`,`Trento, ses. XXII, cap. 7`],[`FLOexs`,`Florencia, Exsultate Deo`]]},
    {id:`CV-8`, l:`Una o dos especies`, d:`Se comulga con el pan solo o, según las leyes litúrgicas, con las dos especies; bajo cualquiera se recibe a Cristo entero.`, s:[[`CIC925`,`can. 925`],[`CEC1390`,`Catecismo 1390`],[`T21c3`,`Trento, ses. XXI, cap. 3`]]},
    {id:`CV-9`, l:`Quién puede comulgar`, d:`En principio, los católicos; con condiciones, los fieles de las Iglesias orientales que lo piden espontáneamente y están bien dispuestos; otros cristianos solo en peligro de muerte u otra necesidad grave, si «profesen la fe católica respecto a esos sacramentos».`, s:[[`CIC844`,`can. 844`],[`CEC1399,CEC1400,CEC1401`,`Catecismo 1399–1401`]]},
    {id:`CV-10`, l:`El sagrario`, d:`La Eucaristía se reserva «en un solo sagrario», en un lugar «verdaderamente noble», ante el que «ha de lucir constantemente una lámpara especial, con la que se indique y honre la presencia de Cristo».`, s:[[`CIC938`,`cann. 938 y 940`],[`CEC1379`,`Catecismo 1379`]]},
    {id:`CV-11`, l:`Adoración y procesiones`, d:`Exposición del Santísimo (no durante la Misa) y, donde el obispo lo juzgue posible, procesión por las calles «sobre todo en la solemnidad del Cuerpo y Sangre de Cristo».`, s:[[`CIC941`,`cann. 941 y 944`],[`CEC1378`,`Catecismo 1378`]]},
    {id:`CV-12`, l:`Viático`, d:`A quien está en peligro de muerte se le da la comunión como Viático, aunque haya comulgado ese mismo día.`, s:[[`CIC921`,`can. 921`]]},
    {id:`CV-13`, l:`Misa por vivos y difuntos`, d:`«El sacerdote tiene facultad para aplicar la Misa por cualesquiera, tanto vivos como difuntos.»`, s:[[`CIC901`,`can. 901`],[`T22c2`,`Trento, ses. XXII, cap. 2`],[`CEC1371`,`Catecismo 1371`]]}
  ]
};

const OB_ORDER = [`OB-1`,`OB-2`,`OB-3`,`OB-4`,`OB-6`,`OB-7`,`OB-5`];

const OBJ = {
  'OB-1': {title:`Si Cristo se ofreció una sola vez, la Misa no puede ser un sacrificio`,
    syn:`Hebreos dice que Cristo no se ofreció "muchas veces" sino una vez, que "con una sola ofrenda hizo perfectos para siempre á los santificados" y que "donde hay remisión de éstos, no hay más ofrenda por pecado" {v:Hebreos 9:25-26} {v:Hebreos 10:14, 18}. La muerte de Cristo es el único sacrificio propiciatorio; la Cena puede ser un sacrificio de alabanza y acción de gracias de los ya reconciliados, pero no uno que reconcilie con Dios. Si la Misa es un sacrificio propiciatorio que se ofrece cada día por vivos y difuntos, o repite la cruz o le añade algo que la cruz no hizo.`,
    who:`Suelen plantearla reformados y luteranos.`,
    own:{lead:[`WCF292`,`AC24`], more:[`AP24a`,`SA221`,`FCEP7`]},
    answer:[
      `La Iglesia católica afirma el «una sola vez». El Concilio de Trento abre su doctrina sobre la Misa diciendo que Cristo «se había de ofrecer á sí mismo á Dios Padre, una vez, por medio de la muerte en el ara de la cruz, para obrar desde ella la redencion eterna» {c:T22c1|Trento, ses. XXII, cap. 1}. La Misa no es un segundo sacrificio: «la hostia es una misma, uno el mismo que ahora ofrece por el ministerio de los sacerdotes, que el que entonces se ofreció á sí mismo en la cruz, con sola la diferencia del modo de ofrecerse» {c:T22c2|Trento, ses. XXII, cap. 2}. Juan Pablo II lo dice así: «La Misa hace presente el sacrificio de la Cruz, no se le añade y no lo multiplica. Lo que se repite es su celebración memorial» {c:EdE12|Ecclesia de Eucharistia 12}.`,
      `¿Por qué, entonces, un sacrificio? Porque, según Trento, el sacerdocio de Cristo «no habia de acabarse con su muerte» {v:Hebreos 7:24}, y en la última Cena dejó a la Iglesia «un sacrificio visible, segun requiere la condicion de los hombres, en el que se representase el sacrificio cruento que por una vez se habia de hacer en la cruz, y permaneciese su memoria hasta el fin del mundo, y se aplicase su saludable virtud á la remision de los pecados que cotidianamente cometemos» {c:T22c1|Trento, ses. XXII, cap. 1}. El Catecismo explica cómo un acontecimiento único puede hacerse presente sin repetirse: «todos los demás acontecimientos suceden una vez, y luego pasan y son absorbidos por el pasado. El misterio pascual de Cristo, por el contrario, no puede permanecer solamente en el pasado, pues por su muerte destruyó a la muerte, y todo lo que Cristo es y todo lo que hizo y padeció por los hombres participa de la eternidad divina y domina así todos los tiempos y en ellos se mantiene permanentemente presente» {c:CEC1085|Catecismo 1085}. Y lo resume: la Eucaristía es sacrificio «porque representa (= hace presente) el sacrificio de la cruz, porque es su memorial y aplica su fruto» {c:CEC1366|Catecismo 1366}, y cita los mismos pasajes de Hebreos: el sacrificio que Cristo ofreció «de una vez para siempre en la cruz, permanece siempre actual» {c:CEC1364|Catecismo 1364} {v:Hebreos 7:25-27}; cf. {v:Hebreos 9:14, 27} en {c:CEC1367|Catecismo 1367}.`,
      `«Propiciatorio» no quiere decir una expiación nueva ni distinta. Los frutos de la cruz «se logran abundantisimamente por esta incruenta: tan lejos está que esta derogue de modo alguno á aquella» {c:T22c2|Trento, ses. XXII, cap. 2}, y Trento condena a quien diga que la Misa blasfema contra el sacrificio de la cruz o le quita valor {c:T22can|ses. XXII, can. 4}. Y esos frutos no se reciben de cualquier manera: «si nos acercamos al Señor contritos y penitentes, si con sincero corazon, y recta fe, si con temor y reverencia» {c:T22c2|Trento, ses. XXII, cap. 2}.`
    ],
    fuentes:[
      {ids:`T22c1,T22c2,T22can`, name:`Concilio de Trento, sesión XXII, caps. 1–2, can. 4`, date:`17 sep 1562`, year:1562},
      {ids:`EdE12`, name:`Juan Pablo II, Ecclesia de Eucharistia 12`, date:`17 abr 2003`, year:2003},
      {ids:`CEC1085,CEC1364,CEC1366,CEC1367`, name:`Catecismo de la Iglesia Católica 1085, 1364, 1366, 1367`, date:`1992/1997`, year:1992}
    ],
    pasajes:{resp:[`Hebreos 7:24`,`Hebreos 7:25-27`,`Hebreos 9:14`,`Hebreos 9:27`], obj:[`Hebreos 7:23-24`,`Hebreos 7:27`,`Hebreos 9:22`,`Hebreos 9:25-26`,`Hebreos 9:28`,`Hebreos 10:4`,`Hebreos 10:10`,`Hebreos 10:11-12`,`Hebreos 10:14`,`Hebreos 10:18`,`Isaías 53:10`]},
    rv:[`Malaquías 1:11: el dosier propone mostrar aquí la lectura luterana (Apología XXIV.31–32) junto a la de Trento; no hay borrador para eso.`, `Pasajes de la objeción: todos los textos de prueba impresos bajo Westminster 29.2 y citados en Augsburgo XXIV.24–27 y Apología XXIV.22–23.`]},
  'OB-2': {title:`Lo consagrado sigue siendo pan, como lo llama la Escritura`,
    syn:`Después de la consagración Pablo lo sigue llamando "pan" {v:1 Corintios 10:16} {v:1 Corintios 11:26-28}: el pan sigue siendo pan en su sustancia, y enseñar que su sustancia desaparece no concuerda con la Escritura. Los reformados añaden que el cuerpo de Cristo está en el cielo {v:Hechos 3:21} y que la transubstanciación va "aun contra el sentido y razon comunes" y "destruye la naturaleza del sacramento" {c:WCF296|Confesión de Westminster 29.6}.`,
    who:`Suelen plantearla reformados y luteranos.`,
    own:{lead:[`WCF296`,`SA365`], more:[`FCEP7`]},
    answer:[
      `Trento funda la conversión en las palabras de Cristo: «por quanto dixo Jesu-Cristo nuestro Redentor, que era verdaderamente su cuerpo lo que ofrecia bajo la especie de pan», la Iglesia enseña que «se convierte toda la substancia del pan en la substancia del cuerpo de nuestro señor Jesu-Cristo» {c:T13c4|Trento, ses. XIII, cap. 4} {v:Mateo 26:26}. El Catecismo Romano razona sobre la misma frase: si allí quedara la sustancia del pan, «parece que de ningun modo se podria decir con verdad: Esto es mi cuerpo» {c:CR38|Catecismo Romano, parte II, cap. 4, n. 38}.`,
      `¿Por qué Pablo lo sigue llamando «pan»? El Catecismo Romano responde que «no debe estrañarse que la Eucaristía se llame pan, aun despues de la consagracion», porque «conserva la figura de pan» y «todavía retiene natural virtud de alimentar», y porque «es costumbre de las Escrituras sagradas llamar las cosas segun lo que parecen»: así llama «varones» a los ángeles que vio Abraham y a los dos que aparecieron en la Ascensión {c:CR40|Catecismo Romano, parte II, cap. 4, n. 40} {v:Génesis 18:2} {v:Hechos 1:10}.`,
      `¿Y el cielo, que alegan los reformados? Para Trento no hay contradicción: «no hay en efecto repugnancia en que el mismo Cristo nuestro Salvador esté siempre sentado en el cielo á la diestra del Padre, segun el modo natural de existir, y que al mismo tiempo nos asista sacramentalmente con su presencia, y en su propia substancia en otros muchos lugares», con un modo de existir que «apenas lo podemos declarar con palabras», pero que «es posible á Dios» {c:T13c1|Trento, ses. XIII, cap. 1}. Pablo VI precisa que Cristo está presente «aun corporalmente, pero no a la manera que los cuerpos están en un lugar» {c:MF46|Mysterium fidei 46}.`,
      `Lo que perciben los sentidos —las especies del pan y del vino— permanece {c:T13can2|Trento, ses. XIII, can. 2}. Por eso, dice el Catecismo citando a santo Tomás, esta presencia «no se conoce por los sentidos, […] sino sólo por la fe, la cual se apoya en la autoridad de Dios» {c:CEC1381|Catecismo 1381}. Y el signo no se destruye: los signos del pan y del vino «siguen significando también la bondad de la creación» {c:CEC1333|Catecismo 1333}.`
    ],
    fuentes:[
      {ids:`T13c1,T13c4,T13can2`, name:`Concilio de Trento, sesión XIII, caps. 1 y 4, can. 2`, date:`11 oct 1551`, year:1551},
      {ids:`CR38,CR40`, name:`Catecismo Romano, parte II, cap. 4, nn. 38 y 40`, date:`1566`, year:1566},
      {ids:`MF46`, name:`Pablo VI, Mysterium fidei 46`, date:`3 sep 1965`, year:1965},
      {ids:`CEC1333,CEC1381`, name:`Catecismo de la Iglesia Católica 1333, 1381`, date:`1992/1997`, year:1992}
    ],
    pasajes:{resp:[`Mateo 26:26`,`Génesis 18:2`,`Hechos 1:10`], obj:[`1 Corintios 10:16`,`1 Corintios 11:26-28`,`Hechos 3:21`,`Lucas 24:6, 39`], objNote:`Hechos 3:21 y Lucas 24:6, 39: solo reformados (textos de prueba de Westminster 29.6).`},
    rv:[`Las dos tradiciones rechazan la transubstanciación por razones distintas: los textos luteranos afirman la presencia verdadera del cuerpo y la sangre y objetan solo la pérdida de la sustancia del pan; Westminster niega toda presencia corporal (29.7). El argumento de Hechos 3:21 no puede ponerse en boca luterana (Fórmula de Concordia, Epítome VII ¶32).`, `Anatema ausente en esta respuesta: Pregunta 9.`, `También disponible y no usado: Catecismo Romano n. 37 (el cuerpo no se hace presente «por cambio de lugar»).`]},
  'OB-3': {title:`Guardar, exponer y adorar la hostia es usar el sacramento fuera de lo que Cristo mandó`,
    syn:`Cristo dio el pan para que se tome y se coma ("tomad, comed"). Guardarlo, exponerlo y llevarlo en procesión para adorarlo es usar el sacramento para algo que Cristo no mandó, y dirigir la adoración a lo que, a la vista, son pan y vino.`,
    who:`Suelen plantearla reformados y luteranos.`,
    own:{lead:[`WCF294`,`FCSD7`], more:[`AC2212`]},
    answer:[
      `Para la Iglesia católica, lo que se adora es Cristo, no el pan. Trento enseña que al sacramento se le da «el culto de latría que se debe al mismo Dios», porque «creemos que está presente en él aquel mismo Dios» a quien adoraron los ángeles, los magos y los apóstoles {c:T13c5|Trento, ses. XIII, cap. 5} {v:Hebreos 1:6} {v:Mateo 2:11}. Que se haya instituido para comerlo no lo impide: «Ni se le debe tributar menos adoracion con el pretexto de que fue instituido por Cristo nuestro señor para recibirle» {c:T13c5|Trento, ses. XIII, cap. 5}. El canon correspondiente habla de adorar «á Cristo hijo unigénito de Dios» en el sacramento {c:T13can6|ses. XIII, can. 6}.`,
      `Para la Iglesia católica, la presencia no depende del momento en que se come: «comienza en el momento de la consagración y dura todo el tiempo que subsistan las especies eucarísticas» {c:CEC1377|Catecismo 1377}, y Trento rechaza que Cristo esté «solo en el uso, mientras que se recibe» {c:T13can4|ses. XIII, can. 4}.`,
      `Guardar la Eucaristía es, según Trento, una costumbre «tan antigua […] que ya se conocia en el siglo en que se celebró el concilio Niceno», y su primer fin fue llevarla a los enfermos {c:T13c6|Trento, ses. XIII, cap. 6} {c:CEC1379|Catecismo 1379}. Juan Pablo II subraya que este culto «está estrechamente unido a la celebración del Sacrificio eucarístico» y que la presencia en las especies que se conservan «tiende a la comunión sacramental y espiritual» {c:EdE25|Ecclesia de Eucharistia 25}.`
    ],
    fuentes:[
      {ids:`T13c5,T13c6,T13can4,T13can6`, name:`Concilio de Trento, sesión XIII, caps. 5–6, cann. 4 y 6`, date:`11 oct 1551`, year:1551},
      {ids:`CEC1377,CEC1379`, name:`Catecismo de la Iglesia Católica 1377, 1379`, date:`1992/1997`, year:1992},
      {ids:`EdE25`, name:`Juan Pablo II, Ecclesia de Eucharistia 25`, date:`17 abr 2003`, year:2003}
    ],
    pasajes:{resp:[`Hebreos 1:6`,`Mateo 2:11`], obj:[`Mateo 26:26`,`Mateo 15:9`]},
    rv:[`Los textos luteranos no objetan adorar a Cristo: rechazan adorar «los elementos» y el sacramento «fuera del uso» (Declaración Sólida VII.126, VII.87). La síntesis deja esa distinción implícita.`, `La acusación reformada de idolatría no aparece en la síntesis: Pregunta 7.`, `Trento cap. 5 cita «Ps. xcvi. 7» (= Hebreos 1:6, que cita Salmo 97:7) y «Matth. ii. 11»; Mateo 28:17 se dejó fuera hasta que un texto católico lo nombre.`]},
  'OB-4': {title:`Cristo dijo "Bebed de ella todos": negar el cáliz a los laicos cambia lo que él instituyó`,
    syn:`De la copa Jesús dijo "Bebed de ella todos" {v:Mateo 26:27}, y la Iglesia antigua dio las dos especies a todos durante siglos. Dar a los laicos solo el pan cambia la institución de Cristo y los priva de algo que él mandó.`,
    who:`Suelen plantearla luteranos, reformados y ortodoxos.`,
    own:{lead:[`AC22`,`WCF294`,`ENC11`], more:[`AP22`,`SA3623`,`FCEP7`]},
    answer:[
      `Trento enseña que ningún precepto divino obliga a los laicos a recibir las dos especies: aunque Cristo instituyó el sacramento «en las especies de pan y vino, y lo dió á sus Apóstoles», esa institución no establece «la obligacion de que todos los fieles cristianos deban recibir […] una y otra especie» {c:T21c1|Trento, ses. XXI, cap. 1}. El concilio recuerda que en Juan 6 el mismo Señor que dijo «si no comiereis la carne del hijo del hombre, ni bebiereis su sangre, no tendréis vida» dijo también «si alguno comiere de este pan, vivirá eternamente» {c:T21c1|ses. XXI, cap. 1} {v:Juan 6:53, 51, 58}.`,
      `La razón de fondo es que Cristo está entero en cada especie: «se recibe en cada una sola de las especies á Cristo todo entero, y un verdadero Sacramento», y quien recibe una sola no queda «defraudado» de «ninguna gracia necesaria para conseguir la salvacion» {c:T21c3|ses. XXI, cap. 3}.`,
      `Trento reconoce que «desde los principios de la religion cristiana» fue «freqüente» comulgar con las dos especies, y presenta la comunión con el pan solo como una «ley» de la Iglesia, que ella puede regular porque administra los sacramentos «salva siempre la esencia de ellos» {c:T21c2|ses. XXI, cap. 2} {v:1 Corintios 4:1} {v:1 Corintios 11:34}. Hoy la Iglesia permite la comunión bajo las dos especies {c:SC55|Sacrosanctum Concilium 55} {c:CIC925|Código de Derecho Canónico, can. 925} y reconoce que «la comunión tiene una expresión más plena por razón del signo cuando se hace bajo las dos especies»; es la forma habitual en los ritos orientales {c:CEC1390|Catecismo 1390}.`
    ],
    fuentes:[
      {ids:`T21c1,T21c2,T21c3`, name:`Concilio de Trento, sesión XXI, caps. 1–3`, date:`16 jul 1562`, year:1562},
      {ids:`SC55`, name:`Concilio Vaticano II, Sacrosanctum Concilium 55`, date:`4 dic 1963`, year:1963},
      {ids:`CIC925`, name:`Código de Derecho Canónico, can. 925`, date:`1983`, year:1983},
      {ids:`CEC1390`, name:`Catecismo de la Iglesia Católica 1390`, date:`1992/1997`, year:1992}
    ],
    pasajes:{resp:[`Juan 6:51`,`Juan 6:53`,`Juan 6:58`,`1 Corintios 4:1`,`1 Corintios 11:34`], obj:[`Mateo 26:27`,`1 Corintios 11:27-28`]},
    rv:[`Trento cita la Vulgata (vv. 54, 59, 55, 52, 57); aquí, numeración moderna.`, `La respuesta termina en la práctica actual, no en la doctrina: Pregunta 10. Anatema ausente: Pregunta 9.`]},
  'OB-5': {title:`Misas privadas y misas por los difuntos: la Cena convertida en una obra que vale por sí sola`,
    syn:`Cristo instituyó la Cena para que la comunidad comulgue y los creyentes reciban con fe el perdón. Misas sin comulgantes, multiplicadas y aplicadas a cambio de dinero por vivos y difuntos, hacen de ella una obra que valdría por el solo hecho de celebrarse, sin la fe de quien la recibe. Y la Cena se instituyó para los vivos: aplicarla por los difuntos no tiene testimonio ni mandato en la Escritura.`,
    who:`Suelen plantearla luteranos y reformados.`,
    own:{lead:[`AC24b`,`WCF292`], more:[`AP24b`,`SA2212`,`WCF294`]},
    answer:[
      `El Catecismo define qué entiende la Iglesia por _ex opere operato_: «los sacramentos obran ex opere operato (según las palabras mismas del Concilio: "por el hecho mismo de que la acción es realizada"), es decir, en virtud de la obra salvífica de Cristo, realizada de una vez por todas», y añade: «Sin embargo, los frutos de los sacramentos dependen también de las disposiciones del que los recibe» {c:CEC1128|Catecismo 1128}.`,
      `Trento también quiere que los fieles comulguen en cada Misa: «Quisiera por cierto el sacrosanto Concilio que todos los fieles que asistiesen á las Misas comulgasen en ellas, no solo espiritualmente, sino recibiendo tambien sacramentalmente la Eucaristía» {c:T22c6|Trento, ses. XXII, cap. 6}. Pero no condena las misas en que solo comulga el sacerdote, porque «se deben tambien tener con toda verdad por comunes de todos; parte porque el pueblo comulga espiritualmente en ellas, y parte porque se celebran por un ministro público de la Iglesia, no solo por sí, sino por todos los fieles» {c:T22c6|cap. 6}. Pablo VI lo repite: «toda misa, aunque sea celebrada privadamente por un sacerdote, no es acción privada, sino acción de Cristo y de la Iglesia» {c:MF32|Mysterium fidei 32}.`,
      `Sobre los difuntos, Trento enseña que la Misa se ofrece también, «segun la tradicion de los Apóstoles, por los que han muerto en Cristo sin estar plenamente purgados» {c:T22c2|ses. XXII, cap. 2} {c:CEC1371|Catecismo 1371}.`,
      `Sobre el dinero, el mismo concilio mandó a los obispos prohibir «las condiciones de pagas de qualquiera especie, los contratos» por la celebración de misas y las cobranzas que «no distan mucho del pecado de Simonía», y desterrar «el abuso de decir cierto número de Misas con determinado número de luces, inventado mas bien por espíritu de supersticion que de verdadera religion» {c:T22decr|Trento, ses. XXII, decreto sobre lo que se ha de observar en la celebración de la Misa}. Hoy el Código manda: «En materia de ofrendas de Misas, evítese hasta la más pequeña apariencia de negociación o comercio» {c:CIC947|can. 947}, y recomienda a los sacerdotes celebrar «por las intenciones de los fieles, sobre todo de los necesitados, aunque no reciban ninguna ofrenda» {c:CIC945|can. 945 §2}. Y sobre la fe: los frutos de la Misa se alcanzan «si nos acercamos al Señor contritos y penitentes, si con sincero corazon, y recta fe» {c:T22c2|ses. XXII, cap. 2}.`
    ],
    fuentes:[
      {ids:`CEC1128,CEC1371`, name:`Catecismo de la Iglesia Católica 1128, 1371`, date:`1992/1997`, year:1992},
      {ids:`T22c2,T22c6,T22decr`, name:`Concilio de Trento, sesión XXII, caps. 2 y 6, y decreto sobre la celebración de la Misa`, date:`17 sep 1562`, year:1562},
      {ids:`MF32`, name:`Pablo VI, Mysterium fidei 32`, date:`3 sep 1965`, year:1965},
      {ids:`CIC945,CIC947`, name:`Código de Derecho Canónico, cann. 945 §2 y 947`, date:`1983`, year:1983}
    ],
    pasajes:{resp:[], obj:[`1 Corintios 11:27, 33`,`Mateo 15:9`], objNote:`Augsburgo XXIV.12, 39; Esmalcalda II.2.2.`},
    rv:[`Se solapa con OB-1: por eso va última en el orden propuesto.`, `Anatema ausente: Pregunta 9.`]},
  'OB-6': {title:`Los dones se consagran por la invocación del Espíritu Santo, no solo por las palabras de Cristo`,
    syn:`En las liturgias antiguas, de Oriente y también de Roma y las Galias, los dones se consagran con la oración que invoca al Espíritu Santo, la epíclesis. Atribuir la consagración solo a las palabras "Esto es mi cuerpo" fue una innovación posterior de la Iglesia latina.`,
    who:`Suelen plantearla ortodoxos.`,
    own:{lead:[`ENC10`], more:[`MOG107`]},
    answer:[
      `La Iglesia católica enseña que la consagración se realiza por las palabras de Cristo. El Concilio de Florencia, en su decreto para los armenios, dice que «la forma de este sacramento son las palabras del Salvador con las que realizó este sacramento; pues el sacerdote, hablando en la persona de Cristo, realiza este sacramento. Por la fuerza de esas mismas palabras, la sustancia del pan se convierte en el cuerpo de Cristo, y la sustancia del vino en su sangre» {c:FLOexs|Florencia, Exsultate Deo, 1439}. Trento enseña que el cuerpo está bajo la especie del pan «en virtud de las palabras» {c:T13c3|ses. XIII, cap. 3}. Y el Catecismo lo sitúa en el relato de la institución: «la fuerza de las palabras y de la acción de Cristo y el poder del Espíritu Santo hacen sacramentalmente presentes bajo las especies de pan y de vino su Cuerpo y su Sangre» {c:CEC1353|Catecismo 1353}.`,
      `A la vez, el Catecismo enseña la epíclesis como parte del centro de la Eucaristía: en ella «la Iglesia pide al Padre que envíe su Espíritu Santo (o el poder de su bendición) sobre el pan y el vino, para que se conviertan por su poder, en el Cuerpo y la Sangre de Jesucristo», y el Canon romano tiene esta invocación {c:CEC1353,MISAL|Catecismo 1353, que cita la Plegaria eucarística I}. «Junto con la Anámnesis, la Epíclesis es el centro de toda celebración sacramental, y muy particularmente de la Eucaristía», y para explicarlo el Catecismo cita a san Juan Damasceno: «el Espíritu Santo irrumpe y realiza aquello que sobrepasa toda palabra y todo pensamiento» {c:CEC1106|Catecismo 1106}.`,
      `Según el Catecismo, la Iglesia no separa la palabra y el Espíritu. Los Padres, dice el Catecismo, afirmaron «la eficacia de la Palabra de Cristo y de la acción del Espíritu Santo para obrar esta conversión», y cita a san Juan Crisóstomo: «Esto es mi Cuerpo, dice. Esta palabra transforma las cosas ofrecidas» {c:CEC1375|Catecismo 1375}. Por eso, entre los signos esenciales, nombra juntos el pan y el vino «sobre los cuales es invocada la bendición del Espíritu Santo» y las palabras de la consagración que el sacerdote pronuncia {c:CEC1412|Catecismo 1412}.`,
      `Los documentos católicos citados aquí no responden a la afirmación histórica de la encíclica sobre los antiguos rituales de Roma y de las Galias.`
    ],
    answerRv:{0:`La cita de Florencia en español es traducción asistida por IA (sin revisar por Pedro), desde el latín de Mansi.`},
    fuentes:[
      {ids:`FLOexs`, name:`Concilio de Florencia, Exsultate Deo`, date:`22 nov 1439`, year:1439},
      {ids:`T13c3`, name:`Concilio de Trento, sesión XIII, cap. 3`, date:`11 oct 1551`, year:1551},
      {ids:`CEC1106,CEC1353,CEC1375,CEC1412`, name:`Catecismo de la Iglesia Católica 1106 (con san Juan Damasceno), 1353, 1375 (con san Juan Crisóstomo), 1412`, date:`1992/1997`, year:1992},
      {ids:`MISAL`, name:`Misal Romano, Plegaria eucarística I (citada en Catecismo 1353)`, date:``}
    ],
    pasajes:{resp:[], obj:[`Mateo 26:26-28`], objNote:`Citado por la encíclica.`},
    rv:[`El Catecismo no dice en qué instante ocurre el cambio; Trento dice «en virtud de las palabras». No se buscó fuera de los documentos leídos una respuesta católica a la afirmación histórica sobre Roma y las Galias.`, `Propuesto y no usado hasta que Pedro apruebe el mapa (Pregunta 16): PCPCU 2001, la anáfora de Addai y Mari declarada válida, con las palabras de la institución presentes «in a dispersed euchological way».`]},
  'OB-7': {title:`Durante mil años se consagró con pan fermentado: el ázimo es una innovación latina`,
    syn:`Durante más de mil años, en Oriente y en Occidente, la Iglesia celebró la Eucaristía con pan fermentado, a ejemplo del Salvador. El pan ázimo de la Iglesia latina es una innovación del siglo XI.`,
    who:`Suelen plantearla ortodoxos.`,
    own:{lead:[`ENC9`], more:[]},
    answer:[
      `La Iglesia católica no hace del ázimo una condición de la Eucaristía. El Concilio de Florencia, en el decreto de unión con los griegos, definió «que el cuerpo de Cristo se consagra verdaderamente en pan de trigo ázimo o fermentado, y que los sacerdotes deben consagrar el cuerpo del Señor en uno u otro, cada uno según la costumbre de su Iglesia, occidental u oriental» {c:FLOlae|Florencia, Laetentur caeli, 1439}.`,
      `El pan ázimo es la disciplina de la Iglesia latina: su Código manda usarlo «según la antigua tradición de la Iglesia latina» {c:CIC926|Código de Derecho Canónico, can. 926}, y ese Código rige solo para la Iglesia latina {c:CIC1|can. 1}. Las Iglesias orientales católicas se rigen por su propia disciplina: el Vaticano II declaró que «las Iglesias de Oriente, como las de Occidente, gozan del derecho y deber de regirse según sus respectivas disciplinas peculiares» {c:OE5|Orientalium Ecclesiarum 5}.`
    ],
    answerRv:{0:`La cita de Florencia en español es traducción asistida por IA (sin revisar por Pedro), desde el latín de Mansi.`},
    fuentes:[
      {ids:`FLOlae`, name:`Concilio de Florencia, Laetentur caeli`, date:`6 jul 1439`, year:1439},
      {ids:`CIC1,CIC926`, name:`Código de Derecho Canónico, cann. 1 y 926`, date:`1983`, year:1983},
      {ids:`OE5`, name:`Concilio Vaticano II, Orientalium Ecclesiarum 5`, date:`1964`, year:1964}
    ],
    pasajes:{resp:[], obj:[]},
    rv:[`Sin pasajes en la objeción ni en la respuesta: la sección «Pasajes» no se muestra.`]}
};

const OB_LIST_NOTE = `Los textos que hablan por los bautistas en Doctrina (Fe y Mensaje Bautistas 2000, art. VII; Confesión de New Hampshire 1853, art. XIV) presentan la Cena como símbolo y memorial y no formulan objeciones a la doctrina católica; lo mismo la Declaración de Verdades Fundamentales de las Asambleas de Dios, art. 6.`;

const QUESTIONS = [
  {n:1, t:`Redacción de los versículos en la página católica`, ctx:`Los documentos católicos citan sus propias traducciones; la predeterminada del sitio es la Reina-Valera 1909 (DECISIONS 2026-10-09).`, opts:[`Las traducciones de los propios documentos`,`Reina-Valera 1909 (la predeterminada del sitio)`], rec:`RV1909 para los versículos que cita el sitio; dentro de un texto de la Iglesia citado, mantener la redacción del documento (como hace la frase de cierre con Ecclesia de Eucharistia 16).`, rel:[[`#p03/escritura`,`La Escritura que usa`]]},
  {n:2, t:`SC 47 tiene dos redacciones oficiales en español`, ctx:`La página de Sacrosanctum Concilium y la cita del Catecismo 1323 difieren («vínculo de amor», «en el que se recibe a Cristo», «prenda de la gloria futura»).`, opts:[`La de la página de SC`,`La del Catecismo 1323`], rec:`La página de SC, el documento fuente; mencionar la variante del Catecismo solo en el modal.`, rel:[[`#p03/ensena`,`Qué enseña, definición`]]},
  {n:3, t:`«Grado de autoridad»: ¿tres o cuatro filas?`, ctx:`«Doctrina definitiva» no tiene ninguna afirmación eucarística en este dosier.`, opts:[`Tres filas (las que usa esta doctrina)`,`Cuatro filas (las de la tradición)`], rec:`Cuatro, con «Doctrina definitiva» marcada como sin afirmación eucarística en esta página (experto 16: los cuatro grados son el marco de la Iglesia, no de esta doctrina).`, rel:[[`#p03/autoridad`,`Grado de autoridad`]]},
  {n:4, t:`Juan 6:63 y la prohibición de beber sangre (del piloto anterior)`, ctx:`No están en ningún texto oficial de las tradiciones objetoras dentro del universo de fuentes; son comunes en la apologética popular.`, opts:[`Descartarlas`,`Ampliar el universo a la apologética popular`], rec:`Descartarlas; el crítico (13) comprobó que la regla se aplicó igual a ambos lados.`, rel:[[`#p03/objeciones`,`Objeciones`]]},
  {n:5, t:`Asimetría de las objeciones`, ctx:`7 objeciones: reformados 5, luteranos 5, ortodoxos 3, bautistas y Asambleas de Dios 0. Además, el paso de correcciones alargó las respuestas católicas (Catecismo 1085, 1128, Florencia, Código 945 y 947) y añadió textos de los objetores solo en OB-1, OB-4, OB-5 y OB-6.`, opts:[`Aceptar como está`,`Limitar la extensión de la respuesta por objeción`], rec:`Aceptar sin relleno, y decidir la extensión de las respuestas en la pantalla 04 (ver la 12).`, rel:[[`#p03/objeciones`,`Objeciones`]]},
  {n:6, t:`Lenguaje duro y estado actual (regla de Heidelberg P80, DECISIONS 2026-10-15)`, ctx:`Hasta ahora se aplicó solo a Westminster 29.2 y 29.6, no a Esmalcalda II.2.1 («la mayor y más horrible abominación») ni a la Encíclica de 1895 («innovación») (crítico 15).`, opts:[`Aplicarla a los tres`,`Reformular la regla como propia de Westminster`], rec:`Aplicarla a los tres (la LCMS suscribe «sin reservas», verificado en el mapa luterano; el estado actual del texto de 1895 figura como [memoria] en el crítico y hay que comprobarlo primero).`, rel:[[`#ob-1`,`OB-1`],[`#ob-4`,`OB-4`]]},
  {n:7, t:`OB-3 y la acusación reformada de idolatría (crítico 7)`, ctx:`La respuesta católica se apoya en el canon de Trento con «los que le adoran son idólatras» (ses. XIII, can. 6), pero la síntesis nunca muestra a los reformados haciendo esa acusación.`, opts:[`Añadir «Para los reformados, adorar los elementos es idolatría (Westminster 29.4, 29.6)»`,`Dividir OB-3 en una objeción luterana y otra reformada`,`Dejarla como está`], rec:`Añadir la cláusula marcada, con el mismo patrón que OB-2.`, rel:[[`#ob-3`,`OB-3`]]},
  {n:8, t:`Dónde aparece el acuerdo (crítico 10 y alcance de 12)`, ctx:`Las confesiones ortodoxas concuerdan con QE-1 a QE-3 y QE-5, pero en esta página aparecen solo como objetoras; la línea bautista de 1689 (fuera del piloto) sí objeta.`, opts:[`Mostrar el acuerdo por afirmación en shared.md o la pantalla 02, y anotar en la página bautista que la línea de 1689 objeta`,`Añadir una línea de «acuerdo» en la página católica`], rec:`shared.md por afirmación más la nota en la página bautista; nada extra en la página católica.`, rel:[[`#p03/ensena`,`Qué enseña`]]},
  {n:9, t:`Anatemas en las respuestas (crítico 14)`, ctx:`Aparecen en OB-1 (ses. XXII, can. 4) y OB-3 (ses. XIII, can. 6) y faltan en OB-2, OB-4 y OB-5 (por ejemplo, ses. XXI, can. 2: "was not induced, by just causes and reasons, to communicate under the species of bread only … let him be anathema", Waterworth).`, opts:[`Cada respuesta termina con el canon que condena esa objeción`,`Ninguna (los cánones, solo en Qué enseña)`], rec:`En todas, una línea citada al final: la respuesta de la Iglesia tal como ella la dio; mezclado se lee como partidista.`, rel:[[`#ob-2`,`OB-2`],[`#ob-4`,`OB-4`],[`#ob-5`,`OB-5`]]},
  {n:10, t:`Cómo terminan las respuestas (crítico 17)`, ctx:`OB-4 termina con el permiso actual de las dos especies.`, opts:[`Terminar en la doctrina, con la práctica actual en el medio`,`Permitir ese cierre suave en todas`], rec:`Terminar en la doctrina (coherente con la 9).`, rel:[[`#ob-4`,`OB-4`]]},
  {n:11, t:`Términos de iniciados (crítico 24)`, ctx:`«fiestas de precepto», «tiempo pascual», «in persona Christi capitis», «por vivos y difuntos», «rito latino».`, opts:[`Glosa en línea`,`El modal compartido de términos`], rec:`El modal de términos, decidido una vez para todas las tradiciones.`, rel:[[`#p03/vive`,`Cómo se vive`]]},
  {n:12, t:`Cuánto texto de los objetores en la pantalla 04 (crítico 25)`, ctx:`OB-1 tiene ahora cinco textos de objetores. Esta revisión ya muestra la opción recomendada: una cita por objetor y el resto en «ver más».`, opts:[`Una cita principal por objetor más «ver más»`,`El conjunto completo`], rec:`Una cita principal por objetor más «ver más».`, rel:[[`#ob-1`,`OB-1`]]},
  {n:13, t:`La frase de cierre modelo del ROADMAP es voz del sitio (crítico 26)`, ctx:`El ejemplo «…y Jesús no suaviza sus palabras…» narra y concluye con la voz del sitio.`, opts:[`Registrar en DECISIONS que la frase de cierre es la afirmación de la tradición, citada o abierta con «Para X,»`,`Dejar el ejemplo`], rec:`Registrar la regla y corregir el ejemplo del ROADMAP (el cierre de este dosier ya la sigue).`, rel:[[`#p03/porque`,`Por qué`]]},
  {n:14, t:`«sea excomulgado» por anathema sit (crítico 32)`, ctx:`López de Ayala (1785) lo traduce así en todo el texto.`, opts:[`Añadir una nota en el modal: «"anatema" en el latín; "excomulgado" en la traducción de 1785»`,`Dejarlo`], rec:`Añadir la nota.`, rel:[]},
  {n:15, t:`El grado de SC 47 (verificador F3)`, ctx:`Aplicado según DECISIONS 2026-10-15: la cláusula del sacrificio lleva el grado de Trento; el resto, el predeterminado del Vaticano II.`, opts:[`Una línea de grado con una nota`,`Dos grados en la definición`], rec:`Una línea: «Magisterio auténtico (Vaticano II); su afirmación del sacrificio repite un dogma de Trento (QE-3)».`, rel:[[`#p03/ensena`,`Qué enseña, definición`]]},
  {n:16, t:`Huecos del mapa (§8)`, ctx:`Propuesta: añadir al mapa católico Dominicae cenae, Eucharisticum mysterium, Redemptionis Sacramentum y las Guidelines del PCPCU (2001); esperar con Mane nobiscum Domine y Desiderio desideravi hasta que se muestre un acto que los cite.`, opts:[], rec:`Aprobar los cuatro; solo entonces OB-6 puede usar el texto del PCPCU.`, rel:[[`#ob-6`,`OB-6`]]},
  {n:17, t:`Materia y forma como afirmación (experto 11)`, ctx:`Exsultate Deo (Florencia) ya se usa en OB-6 y en Cómo se vive (pan y vino).`, opts:[`Añadir un QE-10 detrás de «ver más»`,`Dejarlo como está`], rec:`Dejarlo como está.`, rel:[[`#p03/ensena`,`Qué enseña`]]}
];

const WEAK = [
  `Encíclica de 1895: solo inglés (el OCR griego es inutilizable); el español es IA desde el inglés, sin cotejar con el griego.`,
  `Trento, ses. XXII, cap. 1 y can. 1: latín no confirmado letra por letra.`,
  `Grados por inferencia (QE-2, QE-4, QE-5, QE-6): no confirmables como clasificación de la propia Iglesia.`,
  `Citas bautistas, de las Asambleas de Dios y del mapa ortodoxo: dependen de los mapas; no releídas en la verificación.`,
  `Textos añadidos en el paso de correcciones (Apología XXIV; Exsultate Deo; Catecismo 1085, 1128, 1346, 1360–1361, 1373, 1396, 1401, 1457; Ecclesia de Eucharistia 26, 35, 38, 45; CDF 1998 §5 y §11; Código 945 y 947; SC 7; Trento XIII cann. 8 y 11, XXI can. 2, XXII can. 9; Reina-Valera 1909 en Hebreos 9–10): leídos por ese agente, sin verificador independiente.`
];

const NOTE_FIELDS = [
  [`n03-ensena`,`Pantalla 03, Qué enseña`],
  [`n03-porque`,`Pantalla 03, Por qué`],
  [`n03-escritura`,`Pantalla 03, La Escritura que usa`],
  [`n03-objeciones`,`Pantalla 03, Objeciones`],
  [`n03-vive`,`Pantalla 03, Cómo se vive`],
  [`n03-autoridad`,`Pantalla 03, Grado de autoridad`],
  [`nOB-1`,`Pantalla 04, OB-1`],
  [`nOB-2`,`Pantalla 04, OB-2`],
  [`nOB-3`,`Pantalla 04, OB-3`],
  [`nOB-4`,`Pantalla 04, OB-4`],
  [`nOB-5`,`Pantalla 04, OB-5`],
  [`nOB-6`,`Pantalla 04, OB-6`],
  [`nOB-7`,`Pantalla 04, OB-7`],
  [`n-general`,`General`]
];


const META = {
  doctrine:`La Eucaristía`,
  barTitle:`Revisión del piloto: Eucaristía, postura católica`,
  lede:`Cómo la Iglesia católica entiende la Eucaristía, con sus propias fuentes.`,
  ensenaSub:`Lo que la Iglesia católica enseña sobre la Eucaristía, con el grado de autoridad que le corresponde según las categorías de la Iglesia.`,
  storeKey:`doctrina-revision-piloto-catolico-v1`,
  qeShown:5,
  gradeOrder:[`dogma`,`definitiva`,`magisterio`,`disciplina`],
  rv03:{
    top:`Contenido del dosier católico (borrador, revisiones aplicadas el 2026-10-17) sobre el diseño P1 con las notas acordadas para 03. Sin videos. Selector de tradición, barra lateral y buscador omitidos: en esta revisión llevarían a pantallas que no existen.`,
    porque:`El dosier da las fuentes de la introducción en bloque (Trento XIII caps. 1 y 4; Catecismo 1336, 1365; Ecclesia de Eucharistia 12, 16; Trento XXII cap. 1); el reparto por frase es de esta maqueta. Los argumentos PQ-1 a PQ-3 no tienen borrador propio: sus textos se leen al abrir esas fuentes.`,
    fathers:`Los Padres aparecen solo como los cita el Catecismo (DECISIONS 2026-10-15), con la traducción del propio Catecismo. Otros disponibles en documentos católicos: Cirilo de Jerusalén (Ecclesia de Eucharistia 15), Ignacio de Antioquía (Catecismo 1331, 1405), Justino (Catecismo 1345, 1355).`,
    closing:`Frase de cierre reescrita para que la afirmación tenga dueño (crítico 1; Pregunta 13).`,
    escritura:`Se muestran los ${ESCRITURA.length} pasajes para revisarlos; en el sitio se verían unos pocos y «Ver los ${ESCRITURA.length} pasajes» llevaría a su página. Solo pasajes que los propios documentos católicos citan. Redacción de los versículos: Pregunta 1.`,
    escrituraAfter:`No incluidos: Levítico 17:10-14 y Hechos 15:20, 29 (la objeción de la sangre del piloto anterior); ningún documento católico del dosier los cita sobre la Eucaristía.`,
    objeciones:`Orden propuesto por el dosier: lo más doctrinal primero; OB-5 al final porque se solapa con OB-1. Reformados 5, luteranos 5, ortodoxos 3, bautistas y Asambleas de Dios 0 (Pregunta 5). Juan 6:63 y la prohibición de la sangre, del piloto anterior, no se trajeron (Pregunta 4).`,
    silent:`Redacción del dosier (obligatoria según el crítico 12); su ubicación aquí es de esta maqueta. Nunca «los bautistas no objetan».`,
    vive:`Alcance: derecho universal de la Iglesia latina y Catecismo; las Iglesias orientales católicas, solo mención. Grado de cada punto: disciplina, salvo los que repiten doctrina (quién preside, una o dos especies, misa por vivos y difuntos). Se dejó fuera «las Iglesias orientales católicas usan casi siempre pan fermentado»: escrito de memoria, sin texto.`,
    autoridad:`Las cuatro categorías de la Iglesia, con su definición en palabras de la Iglesia. ¿Tres o cuatro filas? Pregunta 3 (se muestran cuatro, como recomienda el dosier).`,
    gradeRow:{definitiva:`Ninguna afirmación eucarística de esta página tiene este grado.`}
  },
  rv04:{
    top:`Las referencias entre paréntesis del borrador se muestran como citas con nombre, como se acordó para 04. Sin videos.`,
    objecion:`Debajo de la síntesis, los textos de los objetores con la opción que recomienda la Pregunta 12: una cita por objetor y el resto en «ver más». La ubicación dentro del recuadro es de esta maqueta.`,
    pasajes:`Texto de los versículos pendiente (Pregunta 1): el dosier solo transcribe Reina-Valera 1909 para Hebreos 9:25-26, 10:14 y 10:18. Agrupados por dónde se citan, como los separa el dosier.`,
    verseMissing:`El dosier no transcribe este versículo: falta decidir la traducción (Pregunta 1).`
  }
};
