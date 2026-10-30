import type { Citation } from "@/content/model/registry";

export const citations = {
  PAproem: {
    id: "PAproem",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "locus",
          value: "proemio",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Ut vero episcopatus ipse unus et indivisus esset, et per cohaerentes sibi invicem sacerdotes credentium multitudo universa in fidei et communionis unitate conservaretur, beatum Petrum caeteris Apostolis praeponens in ipso instituit perpetuum utriusque unitatis principium ac visibile fundamentum",
          edition: "pa.la",
          page: "256–257",
        },
        es: {
          text: "Y para que el mismo episcopado fuese uno e indiviso, y toda la multitud de los creyentes se conservase en la unidad de la fe y de la comunión por medio de sacerdotes unidos entre sí, puso al bienaventurado Pedro al frente de los demás apóstoles e instituyó en él el principio perpetuo y el fundamento visible de esta doble unidad",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "And in order that the Episcopate also might be one and undivided, and that by means of a closely united priesthood the multitude of the faithful might be kept secure in the oneness of faith and communion, he set blessed Peter over the rest of the Apostles, and fixed in him the abiding principle of this twofold unity, and its visible foundation",
          edition: "pa.en",
          page: "256–257",
        },
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA1: {
    id: "PA1",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "1",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Docemus itaque et declaramus, juxta Evangelii testimonia primatum jurisdictionis in universam Dei Ecclesiam immediate et directe beato Petro Apostolo promissum atque collatum a Christo Domino fuisse.",
          edition: "pa.la",
          page: "258–259",
        },
        es: {
          text: "Enseñamos, pues, y declaramos que, según los testimonios del Evangelio, el primado de jurisdicción sobre toda la Iglesia de Dios fue prometido y conferido inmediata y directamente al bienaventurado apóstol Pedro por Cristo el Señor.",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "We therefore teach and declare that, according to the testimony of the Gospel, the primacy of jurisdiction over the universal Church of God was immediately and directly promised and given to blessed Peter the Apostle by Christ the Lord.",
          edition: "pa.en",
          page: "258–259",
        },
      },
      {
        la: {
          text: "Atque uni Simoni Petro contulit Jesus post suam resurrectionem summi pastoris et rectoris jurisdictionem in totum suum ovile",
          edition: "pa.la",
          page: "259",
        },
        citedIn: ["OB-2"],
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA1perv: {
    id: "PA1perv",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "1",
        },
      ],
      qualifier: "las «perversas opiniones»",
    },
    excerpts: [
      {
        la: {
          text: "Huic tam manifestae sacrarum Scripturarum doctrinae, ut ab Ecclesia Catholica semper intellecta est, aperte opponuntur pravae eorum sententiae, qui […] aut qui affirmant, eundem primatum non immediate directeque ipsi beato Petro, sed Ecclesiae, et per hanc illi ut ipsius Ecclesiae ministro delatum fuisse",
          edition: "pa.la",
          page: "258–259",
        },
        es: {
          text: "a la doctrina de la Escritura «tal como siempre la entendió la Iglesia católica, se oponen abiertamente las perversas opiniones de quienes […] afirman que ese mismo primado no fue conferido inmediata y directamente al mismo bienaventurado Pedro, sino a la Iglesia, y por medio de ella a él como ministro de la misma Iglesia»",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "this clear doctrine of Holy Scripture as it has been ever understood by the Catholic Church",
          edition: "pa.en",
          page: "258–259",
        },
        note: "el inglés de Schaff solo de la primera frase",
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA1can: {
    id: "PA1can",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "1",
        },
        {
          kind: "locus",
          value: "canon",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis igitur dixerit, beatum Petrum Apostolum non esse a Christo Domino constitutum Apostolorum omnium principem et totius Ecclesiae militantis visibile caput; vel eundem honoris tantum, non autem verae propriaeque jurisdictionis primatum ab eodem Domino nostro Jesu Christo directe et immediate accepisse; anathema sit.",
          edition: "pa.la",
          page: "259–260",
        },
        es: {
          text: "Si alguno, pues, dijere que el bienaventurado apóstol Pedro no fue constituido por Cristo el Señor príncipe de todos los apóstoles y cabeza visible de toda la Iglesia militante; o que recibió directa e inmediatamente del mismo Señor nuestro Jesucristo solo un primado de honor, y no de verdadera y propia jurisdicción: sea anatema.",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "If any one, therefore, shall say that blessed Peter the Apostle was not appointed the Prince of all the Apostles and the visible Head of the whole Church Militant; or that the same directly and immediately received from the same our Lord Jesus Christ a primacy of honor only, and not of true and proper jurisdiction: let him be anathema.",
          edition: "pa.en",
          page: "259–260",
        },
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA2: {
    id: "PA2",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Quod autem in beato Apostolo Petro princeps pastorum et pastor magnus ovium Dominus Christus Jesus in perpetuam salutem ac perenne bonum Ecclesiae instituit, id eodem auctore in Ecclesia, quae fundata super petram ad finem saeculorum usque firma stabit, jugiter durare necesse est. […] Unde quicumque in hac Cathedra Petro succedit, is secundum Christi ipsius institutionem primatum Petri in universam Ecclesiam obtinet.",
          edition: "pa.la",
          page: "260–261",
        },
        es: {
          text: "Lo que Cristo Jesús, Señor nuestro, príncipe de los pastores y gran pastor de las ovejas, instituyó en el bienaventurado apóstol Pedro para la salvación perpetua y el bien perenne de la Iglesia, es necesario que, por obra del mismo autor, dure sin interrupción en la Iglesia, que, fundada sobre la piedra, permanecerá firme hasta el fin de los siglos. […] Por eso, quienquiera que sucede a Pedro en esta cátedra obtiene, según la institución de Cristo mismo, el primado de Pedro sobre toda la Iglesia.",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "That which the Prince of Shepherds and great Shepherd of the sheep, Jesus Christ our Lord, established in the person of the blessed Apostle Peter to secure the perpetual welfare and lasting good of the Church, must, by the same institution, necessarily remain unceasingly in the Church; which, being founded upon the Rock, will stand firm to the end of the world. […] Whence, whosoever succeeds to Peter in this See, does by the institution of Christ himself obtain the Primacy of Peter over the whole Church.",
          edition: "pa.en",
          page: "260–261",
        },
      },
      {
        la: {
          text: "in suis successoribus, episcopis sanctae Romanae Sedis, ab ipso fundatae, eiusque consecratae sanguine",
          edition: "pa.la",
          page: "260–261",
        },
        es: {
          text: "«consagrada por su sangre»",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "in his successors the Bishops of the Holy See of Rome, which was founded by him, and consecrated by his blood",
          edition: "pa.en",
          page: "260–261",
        },
        note: "Lectura de vatican.va; , imprime «ejusque»",
      },
      {
        la: {
          text: "ad Romanam Ecclesiam propter potentiorem principalitatem necesse semper fuit omnem convenire Ecclesiam, hoc est, eos, qui sunt undique fideles",
          edition: "pa.la",
          page: "261",
        },
        en: {
          text: "it has at all times been necessary that every particular Church — that is to say, the faithful throughout the world — should agree with the Roman Church, on account of the greater authority of the princedom which this has received",
          edition: "pa.en",
          page: "261",
        },
        note: "San Ireneo, Adversus haereses 3, 3, 2, citado por el concilio",
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA2can: {
    id: "PA2can",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "2",
        },
        {
          kind: "locus",
          value: "canon",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis ergo dixerit, non esse ex ipsius Christi Domini institutione, seu jure divino, ut beatus Petrus in primatu super universam Ecclesiam habeat perpetuos successores; aut Romanum Pontificem non esse beati Petri in eodem primatu successorem: anathema sit.",
          edition: "pa.la",
          page: "261–262",
        },
        es: {
          text: "Si alguno, pues, dijere que no es por institución del mismo Cristo el Señor, es decir, por derecho divino, que el bienaventurado Pedro tenga perpetuos sucesores en el primado sobre toda la Iglesia; o que el Romano Pontífice no es sucesor del bienaventurado Pedro en este mismo primado: sea anatema.",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "If, then, any should deny that it is by the institution of Christ the Lord, or by divine right, that blessed Peter should have a perpetual line of successors in the Primacy over the universal Church, or that the Roman Pontiff is the successor of blessed Peter in this primacy: let him be anathema.",
          edition: "pa.en",
          page: "261–262",
        },
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA3a: {
    id: "PA3a",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "3",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Docemus proinde et declaramus, Ecclesiam Romanam, disponente Domino, super omnes alias ordinariae potestatis obtinere principatum, et hanc Romani Pontificis jurisdictionis potestatem, quae vere episcopalis est, immediatam esse: erga quam cujuscumque ritus et dignitatis pastores atque fideles, tam seorsum singuli quam simul omnes, officio hierarchicae subordinationis, veraeque obedientiae obstringuntur, non solum in rebus, quae ad fidem et mores, sed etiam in iis, quae ad disciplinam et regimen Ecclesiae per totum orbem diffusae pertinent; ita ut, custodita cum Romano Pontifice tam communionis, quam ejusdem fidei professionis unitate, Ecclesia Christi sit unus grex sub uno summo pastore. Haec est Catholicae veritatis doctrina, a qua deviare salva fide atque salute nemo potest.",
          edition: "pa.la",
          page: "262–263",
        },
        es: {
          text: "Enseñamos, por tanto, y declaramos que la Iglesia Romana, por disposición del Señor, tiene la primacía de potestad ordinaria sobre todas las demás, y que esta potestad de jurisdicción del Romano Pontífice, que es verdaderamente episcopal, es inmediata; a ella están obligados, por el deber de subordinación jerárquica y de verdadera obediencia, los pastores y los fieles de cualquier rito y dignidad, tanto cada uno por separado como todos juntos, no solo en las cosas que pertenecen a la fe y a las costumbres, sino también en las que pertenecen a la disciplina y al régimen de la Iglesia extendida por todo el orbe; de modo que, guardada con el Romano Pontífice la unidad tanto de comunión como de profesión de la misma fe, la Iglesia de Cristo sea un solo rebaño bajo un solo pastor supremo. Esta es la doctrina de la verdad católica, de la cual nadie puede apartarse sin menoscabo de la fe y de la salvación.",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "Hence we teach and declare that by the appointment of our Lord the Roman Church possesses a superiority of ordinary power over all other churches, and that this power of jurisdiction of the Roman Pontiff, which is truly episcopal, is immediate; to which all, of whatever rite and dignity, both pastors and faithful, both individually and collectively, are bound, by their duty of hierarchical subordination and true obedience, to submit not only in matters which belong to faith and morals, but also in those that appertain to the discipline and government of the Church throughout the world, so that the Church of Christ may be one flock under one supreme pastor through the preservation of unity both of communion and of profession of the same faith with the Roman Pontiff. This is the teaching of Catholic truth, from which no one can deviate without loss of faith and of salvation.",
          edition: "pa.en",
          page: "262–263",
        },
      },
      {
        la: {
          text: "innovamus oecumenici Concilii Florentini definitionem, qua credendum ab omnibus Christi fidelibus est…",
          edition: "pa.la",
          page: "262",
        },
        note: "Apertura del capítulo: renueva la definición de Florencia y la cita",
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA3b: {
    id: "PA3b",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "3",
        },
      ],
      qualifier: "el juez supremo",
    },
    excerpts: [
      {
        la: {
          text: "docemus etiam et declaramus, eum esse judicem supremum fidelium […]; Sedis vero Apostolicae, cujus auctoritate major non est, judicium a nemine fore retractandum, neque cuiquam de ejus licere judicare judicio. Quare a recto veritatis tramite aberrant, qui affirmant, licere ab judiciis Romanorum Pontificum ad oecumenicum Concilium tamquam ad auctoritatem Romano Pontifice superiorem appellare.",
          edition: "pa.la",
          page: "264–265",
        },
        es: {
          text: "«se apartan del recto camino de la verdad quienes afirman que es lícito apelar de los juicios de los Romanos Pontífices al concilio ecuménico como a una autoridad superior al Romano Pontífice»",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "…he is the supreme judge of the faithful, and that in all causes, the decision of which belongs to the Church, recourse may be had to his tribunal, and that none may re-open the judgment of the Apostolic See, than whose authority there is no greater, nor can any lawfully review its judgment. Wherefore they err from the right course who assert that it is lawful to appeal from the judgments of the Roman Pontiffs to an oecumenical Council, as to an authority higher than that of the Roman Pontiff.",
          edition: "pa.en",
          page: "264–265",
        },
        note: "El español, solo de la última frase, es el de la respuesta a OB-5",
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA3c: {
    id: "PA3c",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "3",
        },
      ],
      qualifier: "«Tantum autem abest»",
    },
    excerpts: [
      {
        la: {
          text: "Tantum autem abest, ut haec Summi Pontificis potestas officiat ordinariae ac immediatae illi episcopalis jurisdictionis potestati, qua Episcopi, qui positi a Spiritu Sancto in Apostolorum locum successerunt, tamquam veri pastores assignatos sibi greges, singuli singulos, pascunt et regunt, ut eadem a supremo et universali Pastore asseratur, roboretur ac vindicetur, secundum illud sancti Gregorii Magni: Meus honor est honor universalis Ecclesiae. Meus honor est fratrum meorum solidus vigor. Tum ego vere honoratus sum, cum singulis quibusque honor debitus non negatur.",
          edition: "pa.la",
          page: "263–264",
        },
        es: {
          text: 'Pero esta potestad del Sumo Pontífice está tan lejos de perjudicar la potestad ordinaria e inmediata de jurisdicción episcopal, por la que los obispos, puestos por el Espíritu Santo y sucesores de los apóstoles, apacientan y rigen como verdaderos pastores cada uno el rebaño que se le asignó, que esa potestad es afirmada, robustecida y defendida por el pastor supremo y universal, según aquello de san Gregorio Magno: "Mi honor es el honor de la Iglesia universal. Mi honor es el sólido vigor de mis hermanos. Soy verdaderamente honrado cuando a cada uno no se le niega el honor debido".',
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "But so far is this power of the Supreme Pontiff from being any prejudice to the ordinary and immediate power of episcopal jurisdiction, by which Bishops, who have been set by the Holy Ghost to succeed and hold the place of the Apostles, feed and govern, each his own flock, as true pastors, that this their episcopal authority is really asserted, strengthened, and protected by the supreme and universal Pastor…",
          edition: "pa.en",
          page: "263–264",
        },
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA3can: {
    id: "PA3can",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "3",
        },
        {
          kind: "locus",
          value: "canon",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis itaque dixerit, Romanum Pontificem habere tantummodo officium inspectionis vel directionis, non autem plenam et supremam potestatem jurisdictionis in universam Ecclesiam, non solum in rebus, quae ad fidem et mores, sed etiam in iis, quae ad disciplinam et regimen Ecclesiae per totum orbem diffusae pertinent; aut eum habere tantum potiores partes, non vero totam plenitudinem hujus supremae potestatis; aut hanc ejus potestatem non esse ordinariam et immediatam sive in omnes ac singulas ecclesias, sive in omnes et singulos pastores et fideles: anathema sit.",
          edition: "pa.la",
          page: "265–266",
        },
        es: {
          text: "Si alguno, pues, dijere que el Romano Pontífice tiene solo un oficio de inspección o de dirección, y no la potestad plena y suprema de jurisdicción sobre toda la Iglesia, no solo en las cosas que pertenecen a la fe y a las costumbres, sino también en las que pertenecen a la disciplina y al régimen de la Iglesia extendida por todo el orbe; o que tiene solo la parte principal, y no toda la plenitud de esta suprema potestad; o que esta potestad suya no es ordinaria e inmediata, tanto sobre todas y cada una de las iglesias como sobre todos y cada uno de los pastores y fieles: sea anatema.",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA4def: {
    id: "PA4def",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "4",
        },
      ],
      qualifier: "la definición",
    },
    excerpts: [
      {
        la: {
          text: "Itaque Nos traditioni a fidei Christianae exordio perceptae fideliter inhaerendo, ad Dei Salvatoris nostri gloriam, religionis Catholicae exaltationem et Christianorum populorum salutem, sacro approbante Concilio, docemus et divinitus revelatum dogma esse definimus: Romanum Pontificem, cum ex Cathedra loquitur, id est, cum omnium Christianorum Pastoris et Doctoris munere fungens pro suprema sua Apostolica auctoritate doctrinam de fide vel moribus ab universa Ecclesia tenendam definit, per assistentiam divinam, ipsi in beato Petro promissam, ea infallibilitate pollere, qua divinus Redemptor Ecclesiam suam in definienda doctrina de fide vel moribus instructam esse voluit; ideoque ejusmodi Romani Pontificis definitiones ex sese, non autem ex consensu Ecclesiae, irreformabiles esse. Si quis autem huic Nostrae definitioni contradicere, quod Deus avertat, praesumpserit: anathema sit.",
          edition: "pa.la",
          page: "270–271",
        },
        es: {
          text: "Por tanto, Nos, adhiriéndonos fielmente a la tradición recibida desde el comienzo de la fe cristiana, para gloria de Dios nuestro Salvador, exaltación de la religión católica y salvación de los pueblos cristianos, con la aprobación del sagrado Concilio, enseñamos y definimos que es dogma divinamente revelado: que el Romano Pontífice, cuando habla ex cathedra, esto es, cuando, en el ejercicio de su oficio de pastor y doctor de todos los cristianos, define con su suprema autoridad apostólica que una doctrina sobre la fe o las costumbres debe ser sostenida por la Iglesia universal, goza, por la asistencia divina que le fue prometida en el bienaventurado Pedro, de aquella infalibilidad de la que el divino Redentor quiso que estuviera dotada su Iglesia al definir la doctrina sobre la fe o las costumbres; y que, por tanto, tales definiciones del Romano Pontífice son irreformables por sí mismas, y no por el consentimiento de la Iglesia. Y si alguno, lo que Dios no permita, presumiere contradecir esta nuestra definición: sea anatema.",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "Therefore faithfully adhering to the tradition received from the beginning of the Christian faith, for the glory of God our Saviour, the exaltation of the Catholic religion, and the salvation of Christian people, the sacred Council approving, we teach and define that it is a dogma divinely revealed: that the Roman Pontiff, when he speaks ex cathedra, that is, when in discharge of the office of pastor and doctor of all Christians, by virtue of his supreme Apostolic authority, he defines a doctrine regarding faith or morals to be held by the universal Church, by the divine assistance promised to him in blessed Peter, is possessed of that infallibility with which the divine Redeemer willed that his Church should be endowed for defining doctrine regarding faith or morals; and that therefore such definitions of the Roman Pontiff are irreformable of themselves, and not from the consent of the Church. But if any one — which may God avert — presume to contradict this our definition: let him be anathema.",
          edition: "pa.en",
          page: "270–271",
        },
        note: "el mismo latín en vatican.va",
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA4neque: {
    id: "PA4neque",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "4",
        },
      ],
      qualifier: "«Neque enim»",
    },
    excerpts: [
      {
        la: {
          text: "Neque enim Petri successoribus Spiritus Sanctus promissus est, ut eo revelante novam doctrinam patefacerent, sed ut, eo assistente, traditam per Apostolos revelationem seu fidei depositum sancte custodirent et fideliter exponerent.",
          edition: "pa.la",
          page: "269",
        },
        es: {
          text: "Porque el Espíritu Santo no fue prometido a los sucesores de Pedro para que, por revelación suya, dieran a conocer una doctrina nueva, sino para que, con su asistencia, custodiaran santamente y expusieran fielmente la revelación transmitida por los apóstoles, es decir, el depósito de la fe.",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "For the Holy Spirit was not promised to the successors of Peter, that by his revelation they might make known new doctrine; but that by his assistance they might inviolably keep and faithfully expound the revelation or deposit of faith delivered through the Apostles.",
          edition: "pa.en",
          page: "269",
        },
        note: "DS 3070 según Lumen gentium 25, nota 83, y Mysterium Ecclesiae, nota 24",
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA4open: {
    id: "PA4open",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "4",
        },
      ],
      qualifier: "apertura",
    },
    excerpts: [
      {
        la: {
          text: "Ipso autem Apostolico primatu, quem Romanus Pontifex, tamquam Petri principis Apostolorum successor, in universam Ecclesiam obtinet, supremam quoque magisterii potestatem comprehendi, haec Sancta Sedes semper tenuit, perpetuus Ecclesiae usus comprobat, ipsaque oecumenica Concilia, ea imprimis, in quibus Oriens cum Occidente in fidei caritatisque unionem conveniebat, declaraverunt. Patres enim Concilii Constantinopolitani quarti […] hanc solemnem ediderunt professionem: Prima salus est, rectae fidei regulam custodire. […] quia in Sede Apostolica immaculata est semper Catholica reservata religio",
          edition: "pa.la",
          page: "266",
        },
        es: {
          text: "Que en el mismo primado apostólico, que el Romano Pontífice tiene sobre toda la Iglesia como sucesor de Pedro, príncipe de los apóstoles, está comprendida también la suprema potestad de enseñar, lo sostuvo siempre esta Santa Sede, lo comprueba el uso perpetuo de la Iglesia y lo declararon los mismos concilios ecuménicos, sobre todo aquellos en que Oriente y Occidente se reunían en la unión de la fe y de la caridad. […] la primera condición de la salvación es guardar la regla de la recta fe […] porque en la Sede Apostólica siempre se ha conservado inmaculada la religión católica",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "Moreover, that the supreme power of teaching is also included in the Apostolic primacy, which the Roman Pontiff, as the successor of Peter, Prince of the Apostles, possesses over the whole Church, this Holy See has always held, the perpetual practice of the Church confirms, and oecumenical Councils also have declared, especially those in which the East with the West met in the union of faith and charity",
          edition: "pa.en",
          page: "266",
        },
        note: "(vatican.va: «charitatisque»)",
      },
      {
        la: {
          text: "si quae de fide subortae fuerint quaestiones, suo debent judicio definiri",
          edition: "pa.la",
          page: "266–268",
        },
        note: "Profesión de los griegos aprobada en Lyon II, citada en el mismo capítulo ()",
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA4conv: {
    id: "PA4conv",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "4",
        },
      ],
      qualifier: "cómo definieron los papas",
    },
    excerpts: [
      {
        la: {
          text: "Romani autem Pontifices, prout temporum et rerum conditio suadebat, nunc convocatis oecumenicis Conciliis aut explorata Ecclesiae per orbem dispersae sententia, nunc per Synodos particulares, nunc aliis, quae divina suppeditabat Providentia, adhibitis auxiliis, ea tenenda definiverunt, quae sacris Scripturis et apostolicis Traditionibus consentanea, Deo adjutore, cognoverant",
          edition: "pa.la",
          page: "268–269",
        },
        es: {
          text: "«unas veces convocando concilios ecuménicos, otras consultando el parecer de la Iglesia dispersa por el orbe» … «conforme a las Sagradas Escrituras y a las tradiciones apostólicas»",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        note: "El español, solo los fragmentos de la respuesta a OB-5",
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PA4char: {
    id: "PA4char",
    work: "pastor-aeternus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "4",
        },
      ],
      qualifier: "el carisma",
    },
    excerpts: [
      {
        la: {
          text: "veritatis et fidei numquam deficientis charisma",
          edition: "pa.la",
          page: "269",
        },
        es: {
          text: "«verdad y de fe que nunca falla»",
          edition: "site-translation.pastor-aeternus.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
      },
      {
        la: {
          text: "ut sublata schismatis occasione Ecclesia tota una conservaretur",
          edition: "pa.la",
          page: "270",
        },
        en: {
          text: "that the occasion of schism being removed, the whole Church might be kept one",
          edition: "pa.en",
          page: "270",
        },
      },
    ],
    date: {
      year: 1870,
      month: 7,
      day: 18,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  FLO: {
    id: "FLO",
    work: "florence-laetentur",
    kind: "source",
    locator: {
      parts: [],
      qualifier: "cláusula del primado",
    },
    excerpts: [
      {
        la: {
          text: "Item, diffinimus sanctam apostolicam sedem, et Romanum pontificem in universum orbem tenere primatum, et ipsum pontificem Romanum successorem esse beati Petri principis apostolorum, et verum Christi vicarium, totiusque ecclesiae caput, et omnium Christianorum patrem ac doctorem existere; et ipsi in beato Petro pascendi, regendi, ac gubernandi universalem ecclesiam a domino nostro Jesu Christo plenam potestatem traditam esse; quemadmodum etiam in gestis oecumenicorum conciliorum, et in sacris canonibus continetur.",
          edition: "mansi.la",
        },
        es: {
          text: "Asimismo definimos que la santa Sede Apostólica y el Romano Pontífice tienen el primado sobre todo el orbe, y que el mismo Pontífice Romano es el sucesor del bienaventurado Pedro, príncipe de los apóstoles, y verdadero vicario de Cristo, cabeza de toda la Iglesia y padre y doctor de todos los cristianos; y que a él, en el bienaventurado Pedro, le fue entregada por nuestro Señor Jesucristo la plena potestad de apacentar, regir y gobernar la Iglesia universal, como se contiene también en las actas de los concilios ecuménicos y en los sagrados cánones.",
          edition: "mansi.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        note: "Mansi 31, cols. 1031–1033",
      },
    ],
    date: {
      year: 1439,
      month: 7,
      day: 6,
    },
    link: {
      href: "https://archive.org/details/sacrorumconcilio0031jonn",
      label: "Ver el escaneo de Mansi en archive.org",
    },
  },
  FLOpat: {
    id: "FLOpat",
    work: "florence-laetentur",
    kind: "source",
    locator: {
      parts: [],
      qualifier: "los patriarcas",
    },
    excerpts: [
      {
        la: {
          text: "Renovantes insuper ordinem traditum in canonibus ceterorum venerabilium patriarcharum; ut patriarcha Constantinopolitanus secundus sit post sanctissimum Romanum pontificem, tertius vero Alexandrinus, quartus autem Antiochenus, et quintus Hierosolymitanus: salvis videlicet privilegiis omnibus, et juribus eorum.",
          edition: "mansi.la",
        },
        es: {
          text: "Renovamos además el orden transmitido en los cánones de los demás venerables patriarcas: que el patriarca de Constantinopla sea el segundo después del santísimo Romano Pontífice, el de Alejandría el tercero, el de Antioquía el cuarto y el de Jerusalén el quinto, quedando a salvo, a saber, todos sus privilegios y derechos.",
          edition: "mansi.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        note: "Mansi 31, cols. 1031–1033 (Mansi imprime «ceterorum»)",
      },
    ],
    date: {
      year: 1439,
      month: 7,
      day: 6,
    },
    link: {
      href: "https://archive.org/details/sacrorumconcilio0031jonn",
      label: "Ver el escaneo de Mansi en archive.org",
    },
  },
  LG12: {
    id: "LG12",
    work: "lg",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "12",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'La totalidad de los fieles, que tienen la unción del Santo (cf. 1 Jn 2,20 y 27), no puede equivocarse cuando cree, y esta prerrogativa peculiar suya la manifiesta mediante el sentido sobrenatural de la fe de todo el pueblo cuando "desde los Obispos hasta los últimos fieles laicos" presta su consentimiento universal en las cosas de fe y costumbres',
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  LG14: {
    id: "LG14",
    work: "lg",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "14",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "al inculcar con palabras explícitas la necesidad de la fe y el bautismo (cf. Mc 16,16; Jn 3,5), confirmó al mismo tiempo la necesidad de la Iglesia, en la que los hombres entran por el bautismo como por una puerta",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  LG18: {
    id: "LG18",
    work: "lg",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "18",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "puso al frente de los demás Apóstoles al bienaventurado Pedro e instituyó en la persona del mismo el principio y fundamento, perpetuo y visible, de la unidad de fe y de comunión. Esta doctrina sobre la institución, perpetuidad, poder y razón de ser del sacro primado del Romano Pontífice y de su magisterio infalible, el santo Concilio la propone nuevamente como objeto de fe inconmovible a todos los fieles",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "fuesen los pastores en su Iglesia hasta la consumación de los siglos",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Los obispos, sucesores de los apóstoles",
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  LG19: {
    id: "LG19",
    work: "lg",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "19",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "sobre el bienaventurado Pedro, su cabeza, siendo el propio Cristo Jesús la piedra angular",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  LG20: {
    id: "LG20",
    work: "lg",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "20",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "así como permanece el oficio que Dios concedió personalmente a Pedro, príncipe de los Apóstoles, para que fuera transmitido a sus sucesores, así también perdura el oficio de los Apóstoles de apacentar la Iglesia",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  LG22: {
    id: "LG22",
    work: "lg",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "22",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Señor estableció solamente a Simón como roca y portador de las llaves de la Iglesia (Mt 16,18-19) y le constituyó Pastor de toda su grey (cf. Jn 21, 15 ss)",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "el Romano Pontífice tiene sobre la Iglesia, en virtud de su cargo, es decir, como Vicario de Cristo y Pastor de toda la Iglesia, plena, suprema y universal potestad, que puede siempre ejercer libremente",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "El Colegio o Cuerpo de los Obispos, por su parte, no tiene autoridad, a no ser que se considere en comunión con el Romano Pontífice, sucesor de Pedro, como cabeza del mismo […] junto con su Cabeza, el Romano Pontífice, y nunca sin esta Cabeza, es también sujeto de la suprema y plena potestad sobre la Iglesia universal",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "No hay concilio ecuménico si no es aprobado o, al menos, aceptado como tal por el sucesor de Pedro. Y es prerrogativa del Romano Pontífice convocar estos concilios ecuménicos, presidirlos y confirmarlos",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "Ya la más antigua disciplina, según la cual los Obispos esparcidos por todo el orbe comunicaban entre sí y con el Obispo de Roma en el vínculo de la unidad, de la caridad y de la paz",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  LG23: {
    id: "LG23",
    work: "lg",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "23",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Romano Pontífice, como sucesor de Pedro, es el principio y fundamento perpetuo y visible de unidad así de los Obispos como de la multitud de los fieles",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "algunas, concretamente las antiguas Iglesias patriarcales, como madres en la fe, engendraron a otras como hijas […] Esta variedad de las Iglesias locales, tendente a la unidad, manifiesta con mayor evidencia la catolicidad de la Iglesia indivisa",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  LG25: {
    id: "LG25",
    work: "lg",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "25",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Romano Pontífice, Cabeza del Colegio episcopal, goza de esta misma infalibilidad en razón de su oficio cuando, como supremo pastor y doctor de todos los fieles, que confirma en la fe a sus hermanos (cf. Lc 22,32), proclama de una forma definitiva la doctrina de fe y costumbres. Por esto se afirma, con razón, que sus definiciones son irreformables por sí mismas y no por el consentimiento de la Iglesia, por haber sido proclamadas bajo la asistencia del Espíritu Santo, prometida a él en la persona de San Pedro, y no necesitar de ninguna aprobación de otros ni admitir tampoco apelación a otro tribunal. Porque en esos casos, el Romano Pontífice no da una sentencia como persona privada, sino que, en calidad de maestro supremo de la Iglesia universal, en quien singularmente reside el carisma de la infalibilidad de la Iglesia misma, expone o defiende la doctrina de la fe católica. La infalibilidad prometida a la Iglesia reside también en el Cuerpo de los Obispos cuando ejerce el supremo magisterio en unión con el sucesor de Pedro. A estas definiciones nunca puede faltar el asenso de la Iglesia por la acción del mismo Espíritu Santo, en virtud de la cual la grey toda de Cristo se mantiene y progresa en la unidad de la fe",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Sin las marcas de nota 78–80",
      },
      {
        es: {
          text: "Esta infalibilidad que el divino Redentor quiso que tuviese su Iglesia cuando define la doctrina de fe y costumbres, se extiende tanto cuanto abarca el depósito de la Revelación, que debe ser custodiado santamente y expresado con fidelidad",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "cuando el Romano Pontífice o el Cuerpo de los Obispos juntamente con él definen una doctrina, lo hacen siempre de acuerdo con la misma Revelación, a la cual deben atenerse y conformarse todos […] El Romano Pontífice y los Obispos, por razón de su oficio y la importancia del asunto, trabajan celosamente con los medios oportunos para investigar adecuadamente y para proponer de una manera apta esta Revelación; y no aceptan ninguna nueva revelación pública como perteneciente al divino depósito de la fe",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "«obsequio religioso de la voluntad y del entendimiento» … «aun cuando no hable ex cathedra» … «por la índole de los documentos, ya sea por la frecuente proposición de la misma doctrina, ya sea por la forma de decirlo»",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "cada uno de los Prelados no goce por si de la prerrogativa de la infalibilidad […] reunidos en concilio ecuménico, son para la Iglesia universal los maestros y jueces de la fe y costumbres, a cuyas definiciones hay que adherirse con la sumisión de la fe",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "se extiende tanto cuanto abarca el depósito de la Revelación, que debe ser custodiado santamente y expresado con fidelidad",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  NEP: {
    id: "NEP",
    work: "lg",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "3",
        },
        {
          kind: "locus",
          value: ".ª",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "la distinción no se establece entre el Romano Pontífice y los Obispos colectivamente considerados, sino entre el Romano Pontífice separadamente y el Romano Pontífice junto con los Obispos",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  UR3: {
    id: "UR3",
    work: "ur",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "3",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«quienes creen en Cristo y recibieron el bautismo debidamente» … «justificados por la fe en el bautismo, quedan incorporados a Cristo y, por tanto, reciben el nombre de cristianos con todo derecho y justamente son reconocidos como hermanos en el Señor por los hijos de la Iglesia católica»",
          edition: "vat2.es",
          translation: "official",
        },
        en: {
          text: "justified by faith in Baptism are members of Christ's body, and have a right to be called Christian, and so are correctly accepted as brothers by the children of the Catholic Church.",
          edition: "vat2.en",
        },
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_unitatis-redintegratio_sp.html",
      label: "Leer en vatican.va",
    },
  },
  UR6: {
    id: "UR6",
    work: "ur",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "6",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Cristo llama a la Iglesia peregrinante hacia una perenne reforma, de la que la Iglesia misma, en cuanto institución humana y terrena, tiene siempre necesidad hasta el punto de que si algunas cosas fueron menos cuidadosamente observadas, bien por circunstancias especiales, bien por costumbres, o por disciplina eclesiástica, o también por formas de exponer la doctrina —que debe cuidadosamente distinguirse del mismo depósito de la fe—, se restauren en el tiempo oportuno recta y debidamente",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_unitatis-redintegratio_sp.html",
      label: "Leer en vatican.va",
    },
  },
  GS42: {
    id: "GS42",
    work: "gs",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "42",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La misión propia que Cristo confió a su Iglesia no es de orden político, económico o social. El fin que le asignó es de orden religioso",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1965,
      month: 12,
      day: 7,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651207_gaudium-et-spes_sp.html",
      label: "Leer en vatican.va",
    },
  },
  GS76: {
    id: "GS76",
    work: "gs",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "76",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La Iglesia, que por razón de su misión y de su competencia no se confunde en modo alguno con la comunidad política ni está ligada a sistema político alguno, es a la vez signo y salvaguardia del carácter trascendente de la persona humana",
          edition: "vat2.es",
          translation: "official",
        },
        note: "La frase que el Catecismo 2245 cita con puntos suspensivos",
      },
    ],
    date: {
      year: 1965,
      month: 12,
      day: 7,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651207_gaudium-et-spes_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC85: {
    id: "CEC85",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "85",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: '"El oficio de interpretar auténticamente la palabra de Dios, oral o escrita, ha sido encomendado sólo al Magisterio vivo de la Iglesia, el cual lo ejercita en nombre de Jesucristo" (DV 10), es decir, a los obispos en comunión con el sucesor de Pedro, el obispo de Roma',
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "…es decir, a los obispos en comunión con el sucesor de Pedro, el obispo de Roma.",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC86: {
    id: "CEC86",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "86",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Magisterio no está por encima de la palabra de Dios, sino a su servicio, para enseñar puramente lo transmitido",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["Cita Dei Verbum 10"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC552: {
    id: "CEC552",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "552",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "En el colegio de los Doce, Simón Pedro ocupa el primer lugar […] Pedro, a causa de la fe confesada por él, será la roca inquebrantable de la Iglesia. Tendrá la misión de custodiar esta fe ante todo desfallecimiento y de confirmar en ella a sus hermanos (cf. Lc 22, 32)",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "«Piedra viva»",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["Fragmento citado en La Escritura que usa"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p122a3p3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC553: {
    id: "CEC553",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "553",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El poder de las llaves designa la autoridad para gobernar la casa de Dios, que es la Iglesia",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "«el único a quien Él confió explícitamente las llaves del Reino»",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["OB-2"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p122a3p3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC817: {
    id: "CEC817",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "817",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«a veces, no sin culpa de los hombres de ambas partes»",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC818: {
    id: "CEC818",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "818",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«y son instruidos en la fe de Cristo, no pueden ser acusados del pecado de la separación y la Iglesia católica los abraza con respeto y amor fraternos»",
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita Unitatis redintegratio 3",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC834: {
    id: "CEC834",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "834",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Porque con esta Iglesia en razón de su origen más excelente debe necesariamente acomodarse toda Iglesia, es decir, los fieles de todas partes",
          edition: "cec.es",
          translation: "official",
        },
        note: "San Ireneo, Adversus haereses 3, 3, 2, «citado por Concilio Vaticano I: DS 3057»",
      },
      {
        es: {
          text: '"que preside en la caridad"',
          edition: "cec.es",
          translation: "official",
        },
        note: "San Ignacio de Antioquía, A los Romanos, saludo",
      },
      {
        es: {
          text: "Las Iglesias particulares son plenamente católicas gracias a la comunión con una de ellas: la Iglesia de Roma 'que preside en la caridad' […]. 'Porque con esta Iglesia en razón de su origen más excelente debe necesariamente acomodarse toda Iglesia, es decir, los fieles de todas partes'",
          edition: "cec.es",
          translation: "official",
        },
        note: "Como lo cita la respuesta a OB-4: sin las referencias internas ni la frase de Máximo ([…])",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC838: {
    id: "CEC838",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "838",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los que creen en Cristo y han recibido ritualmente el bautismo están en una cierta comunión, aunque no perfecta, con la Iglesia católica",
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita Lumen gentium 15 y Unitatis redintegratio 3",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC869: {
    id: "CEC869",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "869",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«por medio de Pedro y los demás Apóstoles, presentes en sus sucesores, el Papa y el colegio de los obispos»",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["OB-1"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC881: {
    id: "CEC881",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "881",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Señor hizo de Simón, al que dio el nombre de Pedro, y solamente de él, la piedra de su Iglesia. Le entregó las llaves de ella (cf. Mt 16, 18-19); lo instituyó pastor de todo el rebaño (cf. Jn 21, 15-17)",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "Este oficio pastoral de Pedro y de los demás Apóstoles pertenece a los cimientos de la Iglesia. Se continúa por los obispos bajo el primado del Papa",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC884: {
    id: "CEC884",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "884",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La potestad del colegio de los Obispos sobre toda la Iglesia se ejerce de modo solemne en el Concilio Ecuménico",
          edition: "cec.es",
          translation: "official",
        },
        note: "La página imprime una comilla suelta antes de «(CIC can 337, 1)»",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC882: {
    id: "CEC882",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "882",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'El Sumo Pontífice, obispo de Roma y sucesor de san Pedro, "es el principio y fundamento perpetuo y visible de unidad, tanto de los obispos como de la muchedumbre de los fieles" (LG 23). "El Pontífice Romano, en efecto, tiene en la Iglesia, en virtud de su función de Vicario de Cristo y Pastor de toda la Iglesia, la potestad plena, suprema y universal, que puede ejercer siempre con entera libertad" (LG 22)',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC889: {
    id: "CEC889",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "889",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'Para mantener a la Iglesia en la pureza de la fe transmitida por los apóstoles, Cristo, que es la Verdad, quiso conferir a su Iglesia una participación en su propia infalibilidad. Por medio del "sentido sobrenatural de la fe", el Pueblo de Dios "se une indefectiblemente a la fe", bajo la guía del Magisterio vivo de la Iglesia (cf. LG 12; DV 10)',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC890: {
    id: "CEC890",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "890",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La misión del Magisterio está ligada al carácter definitivo de la Alianza instaurada por Dios en Cristo con su Pueblo; debe protegerlo de las desviaciones y de los fallos, y garantizarle la posibilidad objetiva de profesar sin error la fe auténtica. El oficio pastoral del Magisterio está dirigido, así, a velar para que el Pueblo de Dios permanezca en la verdad que libera. Para cumplir este servicio, Cristo ha dotado a los pastores con el carisma de infalibilidad en materia de fe y de costumbres.",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC891: {
    id: "CEC891",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "891",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'La infalibilidad prometida a la Iglesia reside también en el cuerpo episcopal cuando ejerce el magisterio supremo con el sucesor de Pedro", sobre todo en un Concilio Ecuménico',
          edition: "cec.es",
          translation: "official",
        },
        note: "Segunda mitad; la comilla de apertura del Catecismo está antes de «El Romano Pontífice». «cf. Vaticano I: DS 3074»",
      },
      {
        es: {
          text: "Esta infalibilidad abarca todo el depósito de la Revelación divina (cf. LG 25)",
          edition: "cec.es",
          translation: "official",
        },
        note: "Última frase",
      },
      {
        es: {
          text: "«con la obediencia de la fe»",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["Fragmento citado en Cómo se vive"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC892: {
    id: "CEC892",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "892",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC895: {
    id: "CEC895",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "895",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "no se debe considerar a los obispos como vicarios del Romano Pontífice, cuya autoridad ordinaria e inmediata sobre toda la Iglesia no anula la de ellos, sino que, al contrario, la confirma y tutela",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1369: {
    id: "CEC1369",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1369",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«el Papa es asociado a toda celebración de la Eucaristía en la que es nombrado como signo y servidor de la unidad de la Iglesia universal»",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1441: {
    id: "CEC1441",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1441",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«en virtud de su autoridad divina» … «confiere este poder a los hombres (cf Jn 20,21-23) para que lo ejerzan en su nombre»",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c2a4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1444: {
    id: "CEC1444",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1444",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«consta que también el colegio de los Apóstoles, unido a su cabeza, recibió la función de atar y desatar dada a Pedro (cf Mt 18,18; 28,16-20)»",
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita Lumen gentium 22",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c2a4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC2035: {
    id: "CEC2035",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "2035",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "se extiende a todo el depósito de la revelación divina (cf LG 25); se extiende también a todos los elementos de doctrina, comprendida la moral, sin los cuales las verdades salvíficas de la fe no pueden ser salvaguardadas, expuestas u observadas (cf Congregación para la Doctrina de la Fe, Decl. Mysterium ecclesiae, 3)",
          edition: "cec.es",
          translation: "official",
        },
        note: "El «objeto secundario»: para el «ver más» o el modal de grado, no para el borrador principal",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p3s1c3a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC2246: {
    id: "CEC2246",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "2246",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "emitir un juicio moral incluso sobre cosas que afectan al orden político cuando lo exijan los derechos fundamentales de la persona o la salvación de las almas, aplicando todos y sólo aquellos medios que sean conformes al Evangelio […]",
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita Gaudium et spes 76",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p3s2c2a4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC205: {
    id: "CIC205",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "205",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«los bautizados que se unen a Cristo dentro de la estructura visible de aquélla, es decir, por los vínculos de la profesión de fe, de los sacramentos y del régimen eclesiástico»",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann204-207_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC212: {
    id: "CIC212",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "212",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«todo aquello que los Pastores sagrados, en cuanto representantes de Cristo, declaran como maestros de la fe o establecen como rectores de la Iglesia» … «el derecho, y a veces incluso el deber»",
          edition: "cic.es",
          translation: "official",
        },
        note: "§§1 y 3",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann208-223_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC331: {
    id: "CIC331",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "331",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Obispo de la Iglesia Romana, en quien permanece la función que el Señor encomendó singularmente a Pedro […] potestad ordinaria, que es suprema, plena, inmediata y universal en la Iglesia, y que puede siempre ejercer libremente",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann331-335_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC332: {
    id: "CIC332",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "332",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«mediante la elección legítima por él aceptada juntamente con la consagración episcopal» … «libre» … «pero no que sea aceptada por nadie»",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann331-335_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC333: {
    id: "CIC333",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "333",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "No cabe apelación ni recurso contra una sentencia o un decreto del Romano Pontífice",
          edition: "cic.es",
          translation: "official",
        },
        at: "§3",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann331-335_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC335: {
    id: "CIC335",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "335",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«nada se ha de innovar en el régimen de la Iglesia universal»",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann331-335_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC336: {
    id: "CIC336",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "336",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann336-341_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC337: {
    id: "CIC337",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "337",
        },
        {
          kind: "section",
          value: "1",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann336-341_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC341: {
    id: "CIC341",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "341",
        },
        {
          kind: "section",
          value: "1",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann336-341_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC349: {
    id: "CIC349",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "349",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann349-359_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC375: {
    id: "CIC375",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "375",
        },
        {
          kind: "section",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«en comunión jerárquica con la cabeza y con los miembros del Colegio»",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann375-380_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC377: {
    id: "CIC377",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "377",
        },
        {
          kind: "section",
          value: "1",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Sumo Pontífice nombra libremente a los Obispos, o confirma a los que han sido legítimamente elegidos",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann375-380_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC749: {
    id: "CIC749",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "749",
        },
        {
          kind: "section",
          value: "3",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Ninguna doctrina se considera definida infaliblemente si no consta así de modo manifiesto",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro3_cann747-755_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC750: {
    id: "CIC750",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "750",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Se ha de creer con fe divina y católica todo aquello que se contiene en la palabra de Dios escrita o transmitida por tradición […] y que además es propuesto como revelado por Dios, ya sea por el magisterio solemne de la Iglesia, ya por su magisterio ordinario y universal",
          edition: "cic.es",
          translation: "official",
        },
        at: "§1",
      },
      {
        es: {
          text: "Se han de aceptar y retener firmemente todas y cada una de las cosas sobre la doctrina de la fe y las costumbres propuestas de modo definitivo por el magisterio de la Iglesia",
          edition: "cic.es",
          translation: "official",
        },
        at: "§2",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro3_cann747-755_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC751: {
    id: "CIC751",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "751",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«el rechazo de la sujeción al Sumo Pontífice o de la comunión con los miembros de la Iglesia a él sometidos»",
          edition: "cic.es",
          translation: "official",
        },
        note: "Definición de cisma",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro3_cann747-755_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC752: {
    id: "CIC752",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "752",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Se ha de prestar un asentimiento religioso del entendimiento y de la voluntad, sin que llegue a ser de fe, a la doctrina que el Sumo Pontífice o el Colegio de los Obispos, en el ejercicio de su magisterio auténtico, enseñan acerca de la fe y de las costumbres",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro3_cann747-755_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC833: {
    id: "CIC833",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "833",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«según la fórmula aprobada por la Sede Apostólica»",
          edition: "cic.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "Tienen obligación de emitir personalmente la profesión de fe, según la fórmula aprobada por la Sede Apostólica",
          edition: "cic.es",
          translation: "official",
        },
        note: "Sigue la lista de los oficios",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro3_cann833_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC1404: {
    id: "CIC1404",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "1404",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La Primera Sede por nadie puede ser juzgada",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro7_cann1404-1416_sp.html",
      label: "Leer en vatican.va",
    },
  },
  UUS88: {
    id: "UUS88",
    work: "uus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "88",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Según la hermosa expresión del Papa Gregorio Magno, mi ministerio es el del servus servorum Dei",
          edition: "uus.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "constituye una dificultad para la mayoría de los demás cristianos, cuya memoria está marcada por ciertos recuerdos dolorosos. Por aquello de lo que somos responsables, con mi Predecesor Pablo VI imploro perdón",
          edition: "uus.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "«Yo estoy en medio de vosotros como el que sirve» … «y en particular el primado»",
          edition: "uus.es",
          translation: "official",
        },
        citedIn: ["OB-3"],
      },
    ],
    date: {
      year: 1995,
      month: 5,
      day: 25,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_25051995_ut-unum-sint.html",
      label: "Leer en vatican.va",
    },
  },
  UUS90: {
    id: "UUS90",
    work: "uus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "90",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«como cabeza y portavoz del colegio apostólico» … «Pedro… con los Once» … «la Iglesia de Pedro y de Pablo»",
          edition: "uus.es",
          translation: "official",
        },
        citedIn: ["Fragmentos citados en los borradores"],
      },
    ],
    date: {
      year: 1995,
      month: 5,
      day: 25,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_25051995_ut-unum-sint.html",
      label: "Leer en vatican.va",
    },
  },
  UUS91: {
    id: "UUS91",
    work: "uus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "91",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Es precisamente como si, desde la debilidad humana de Pedro, se manifestara de un modo pleno que su ministerio particular en la Iglesia procede totalmente de la gracia",
          edition: "uus.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "«¡Escándalo eres par[a] mí!» … «una triple profesión de amor (cf. 21, 15-17) que se corresponde con su triple traición (cf. 13, 38)» … «a Cefas y luego a los Doce»",
          edition: "uus.es",
          translation: "official",
        },
        note: "vatican.va imprime «par», errata (verificador C6)",
      },
    ],
    date: {
      year: 1995,
      month: 5,
      day: 25,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_25051995_ut-unum-sint.html",
      label: "Leer en vatican.va",
    },
  },
  UUS94: {
    id: "UUS94",
    work: "uus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "94",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'La misión del Obispo de Roma en el grupo de todos los Pastores consiste precisamente en "vigilar" (episkopein) como un centinela […]. El Obispo de Roma, con el poder y la autoridad sin los cuales esta función sería ilusoria, debe asegurar la comunión de todas las Iglesias. Por esta razón, es el primero entre los servidores de la unidad. […] Puede incluso —en condiciones bien precisas, señaladas por el Concilio Vaticano I— declarar ex cathedra que una doctrina pertenece al depósito de la fe. Testimoniando así la verdad, sirve a la unidad',
          edition: "uus.es",
          translation: "official",
        },
        note: "La página imprime la palabra interior entre « »",
      },
      {
        es: {
          text: "«no de ejercer el poder sobre el pueblo —como hacen los jefes de las naciones y los poderosos (cf. Mt 20, 25; Mc 10,42)—, sino de guiarlo»",
          edition: "uus.es",
          translation: "official",
        },
        citedIn: ["OB-3"],
      },
    ],
    date: {
      year: 1995,
      month: 5,
      day: 25,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_25051995_ut-unum-sint.html",
      label: "Leer en vatican.va",
    },
  },
  UUS95: {
    id: "UUS95",
    work: "uus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "95",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "encontrar una forma de ejercicio del primado que, sin renunciar de ningún modo a lo esencial de su misión, se abra a una situación nueva",
          edition: "uus.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "Todo esto, sin embargo, se debe realizar siempre en la comunión",
          edition: "uus.es",
          translation: "official",
        },
        note: "Apertura del número",
      },
      {
        es: {
          text: 'Durante un milenio los cristianos estuvieron unidos "por la comunión fraterna de fe y vida sacramental, siendo la Sede Romana, con el consentimiento común, la que moderaba cuando surgían disensiones entre ellas en materia de fe o de disciplina"',
          edition: "uus.es",
          translation: "official",
        },
        note: "Cita Unitatis redintegratio 14 (UUS, nota 154)",
      },
      {
        es: {
          text: "«contra la voluntad de unos y otros, lo que debía ser un servicio pudo manifestarse bajo una luz bastante distinta»",
          edition: "uus.es",
          translation: "official",
        },
        citedIn: ["OB-3"],
      },
      {
        es: {
          text: "«de la misión confiada a todos los Obispos, también ellos «vicarios y legados de Cristo»» … «el Obispo de Roma pertenece a su «colegio» y ellos son sus hermanos en el ministerio»",
          edition: "uus.es",
          translation: "official",
        },
        citedIn: ["OB-1"],
      },
    ],
    date: {
      year: 1995,
      month: 5,
      day: 25,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_25051995_ut-unum-sint.html",
      label: "Leer en vatican.va",
    },
  },
  UUS96: {
    id: "UUS96",
    work: "uus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "96",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "un diálogo fraterno, paciente, en el que podríamos escucharnos más allá de estériles polémicas",
          edition: "uus.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1995,
      month: 5,
      day: 25,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_25051995_ut-unum-sint.html",
      label: "Leer en vatican.va",
    },
  },
  UUS97: {
    id: "UUS97",
    work: "uus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "97",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "la comunión de las Iglesias particulares con la Iglesia de Roma, y de sus Obispos con el Obispo de Roma, es un requisito esencial —en el designio de Dios— para la comunión plena y visible",
          edition: "uus.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "Esta función de Pedro debe permanecer en la Iglesia para que, bajo su única Cabeza, que es Cristo Jesús, sea visiblemente en el mundo la comunión de todos sus discípulos",
          edition: "uus.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "«respetando la autoridad de Santiago, cabeza de la Iglesia de Jerusalén»",
          edition: "uus.es",
          translation: "official",
        },
        note: "Sin referencia bíblica",
      },
    ],
    date: {
      year: 1995,
      month: 5,
      day: 25,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_25051995_ut-unum-sint.html",
      label: "Leer en vatican.va",
    },
  },
  CDFP2: {
    id: "CDFP2",
    work: "cdf-primado",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«como demuestra la historia, ha constituido también una defensa de la libertad de los Obispos y de las Iglesias particulares frente a las injerencias del poder político»",
          edition: "cdfp.es",
          translation: "official",
        },
        citedIn: ["OB-8"],
      },
    ],
    date: {
      year: 1998,
      month: 10,
      day: 31,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CDFP3: {
    id: "CDFP3",
    work: "cdf-primado",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "3",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«en su presencia y en su muerte en Roma – atestiguadas por la tradición literaria y arqueológica más antigua»",
          edition: "cdfp.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "la imagen de Pedro quedó fijada como la del Apóstol que, a pesar de su debilidad humana, fue constituido expresamente por Cristo en el primer lugar entre los Doce y llamado a desempeñar en la Iglesia una función propia y específica. Él es la roca sobre la que Cristo edificará su Iglesia",
          edition: "cdfp.es",
          translation: "official",
        },
        citedIn: ["OB-2"],
      },
      {
        es: {
          text: "«pertenece a la estructura perenne de la Iglesia de Cristo y que esta sucesión está fijada en la sede de su martirio»",
          edition: "cdfp.es",
          translation: "official",
        },
        citedIn: ["OB-4"],
      },
      {
        es: {
          text: '«"Primero Simón, llamado Pedro"» … «se encuentra en todas las expresiones, aun diferentes, de la tradición neotestamentaria, tanto en los Sinópticos […] como en el cuerpo Paulino y en la tradición joánica»',
          edition: "cdfp.es",
          translation: "official",
        },
        note: "n. 3 y nota 8",
      },
    ],
    date: {
      year: 1998,
      month: 10,
      day: 31,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CDFP4: {
    id: "CDFP4",
    work: "cdf-primado",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "4",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "la Iglesia católica enseña, como doctrina de fe, que el Obispo de Roma es Sucesor de Pedro en su servicio primacial en la Iglesia universal",
          edition: "cdfp.es",
          translation: "official",
        },
        note: "Nota 13: «Concilio Vaticano I, Constitución dogmática Pastor aeternus, cap. 2: Denz-Hün, nn. 3056-3058»",
      },
      {
        es: {
          text: "«enriquecida también con la predicación y el martirio de San Pablo»",
          edition: "cdfp.es",
          translation: "official",
        },
        citedIn: ["OB-4"],
      },
    ],
    date: {
      year: 1998,
      month: 10,
      day: 31,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CDFP5: {
    id: "CDFP5",
    work: "cdf-primado",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "5",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«en una originaria y esencial armonía»",
          edition: "cdfp.es",
          translation: "official",
        },
        note: "Nota 21: «Pastor aeternus, cap. 3: Denz-Hün, n. 3061»",
      },
    ],
    date: {
      year: 1998,
      month: 10,
      day: 31,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CDFP6: {
    id: "CDFP6",
    work: "cdf-primado",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "6",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Episcopado y el Primado, recíprocamente vinculados e inseparables, son de institución divina. Históricamente, por institución de la Iglesia, han surgido formas de organización eclesiástica en las que se ejerce también un principio de primacía",
          edition: "cdfp.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "«es plenamente consciente de la función de las sedes apostólicas en la Iglesia antigua, especialmente de las consideradas petrinas –Antioquía y Alejandría–»",
          edition: "cdfp.es",
          translation: "official",
        },
        citedIn: ["OB-4"],
      },
    ],
    date: {
      year: 1998,
      month: 10,
      day: 31,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CDFP68: {
    id: "CDFP68",
    work: "cdf-primado",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "6 y 8",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Episcopado y el Primado, recíprocamente vinculados e inseparables, son de institución divina. Históricamente, por institución de la Iglesia, han surgido formas de organización eclesiástica en las que se ejerce también un principio de primacía",
          edition: "cdfp.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "«pertenece a la guía de la Providencia ordinaria de Dios sobre la Iglesia y comporta, desde los inicios, el nexo con la tradición petrina»",
          edition: "cdfp.es",
          translation: "official",
        },
        note: "El sistema de los patriarcados",
      },
      {
        es: {
          text: "«también es garante de la legítima diversidad de ritos, disciplinas y estructuras eclesiásticas entre Oriente y Occidente»",
          edition: "cdfp.es",
          translation: "official",
        },
        note: "El sucesor de Pedro",
      },
    ],
    date: {
      year: 1998,
      month: 10,
      day: 31,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CDFP7: {
    id: "CDFP7",
    work: "cdf-primado",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "7",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "no es un oficio de coordinación o de presidencia, ni se reduce a un Primado de honor, ni puede concebirse como una monarquía de tipo político",
          edition: "cdfp.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "El Romano Pontífice, como todos los fieles, está subordinado a la Palabra de Dios, a la fe católica […]. No decide según su arbitrio, sino que es portavoz de la voluntad del Señor",
          edition: "cdfp.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "«tiene los límites que proceden de la ley divina y de la inviolable constitución divina de la Iglesia contenida en la Revelación»",
          edition: "cdfp.es",
          translation: "official",
        },
        citedIn: ["OB-7"],
      },
    ],
    date: {
      year: 1998,
      month: 10,
      day: 31,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CDFP10: {
    id: "CDFP10",
    work: "cdf-primado",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "10",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "eso no significa que el Papa tenga un poder absoluto. En efecto, escuchar la voz de las Iglesias es una característica propia del ministerio de la unidad",
          edition: "cdfp.es",
          translation: "official",
        },
        note: "Cita «prima sedes a nemine iudicatur» (Código, can. 1404)",
      },
    ],
    date: {
      year: 1998,
      month: 10,
      day: 31,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CDFP11: {
    id: "CDFP11",
    work: "cdf-primado",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "11",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "toda celebración de la Eucaristía se realiza en unión no sólo con el propio Obispo sino también con el Papa",
          edition: "cdfp.es",
          translation: "official",
        },
        note: "Cita Communionis notio 14; cf. Catecismo 1369",
      },
      {
        es: {
          text: "«expresa esta comunión universal con Pedro y con la Iglesia entera, o la reclama objetivamente»",
          edition: "cdfp.es",
          translation: "official",
        },
        citedIn: ["Fragmento citado en Cómo se vive"],
      },
    ],
    date: {
      year: 1998,
      month: 10,
      day: 31,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CDFP12: {
    id: "CDFP12",
    work: "cdf-primado",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "12–13",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«a través de modalidades de ejercicio adecuadas a las circunstancias» … «sólo el Papa (o el Papa con el Concilio ecuménico) tiene […] la autoridad y la competencia para decir la última palabra sobre las modalidades de ejercicio de su propio ministerio pastoral en la Iglesia universal»",
          edition: "cdfp.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1998,
      month: 10,
      day: 31,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CDFP15: {
    id: "CDFP15",
    work: "cdf-primado",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "15",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "No han faltado en la historia del Papado errores humanos y faltas, incluso graves: Pedro mismo se reconocía pecador. Pedro, hombre débil, fue elegido como roca, precisamente para que quedara de manifiesto que la victoria es sólo de Cristo y no resultado de las fuerzas humanas",
          edition: "cdfp.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1998,
      month: 10,
      day: 31,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CDF98: {
    id: "CDF98",
    work: "cdf-note-1998",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "section",
          value: "5",
        },
        {
          kind: "locus",
          value: "y §11",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«la doctrina sobre el primado y la infalibilidad del Romano Pontífice»",
          edition: "cdf98.es",
          translation: "official",
        },
        note: "§11; nota 27: «Cf. DS 3059-3075»",
      },
      {
        es: {
          text: "«la doctrina sobre la infalibilidad y sobre el primado de jurisdicción del Romano Pontífice era reconocida como definitiva ya en la fase precedente al concilio […] si bien sólo en el paso final de la definición del Vaticano I fuera recibida como verdad divinamente revelada»",
          edition: "cdf98.es",
          translation: "official",
        },
        at: "§11",
      },
      {
        es: {
          text: "«la legitimidad de la elección del Sumo Pontífice»",
          edition: "cdf98.es",
          translation: "official",
        },
        note: "§11, ejemplo de «hecho dogmático» (doctrina definitiva)",
      },
      {
        es: {
          text: '«definidas como verdades divinamente reveladas por medio de un juicio solemne del Romano Pontífice cuando habla "ex cathedra", o por el Colegio de los Obispos reunido en concilio, o bien son propuestas infaliblemente por el Magisterio ordinario y universal»',
          edition: "cdf98.es",
          translation: "official",
        },
        note: "§5, el criterio",
      },
      {
        es: {
          text: "definidas como verdades divinamente reveladas por medio de un juicio solemne del Romano Pontífice cuando habla «ex cathedra», o por el Colegio de los Obispos reunido en concilio, o bien son propuestas infaliblemente por el Magisterio ordinario y universal",
          edition: "cdf98.es",
          translation: "official",
        },
        at: "§5",
      },
      {
        es: {
          text: "la inerrancia de los textos sagrados inspirados",
          edition: "cdf98.es",
          translation: "official",
        },
        note: "§11; nota 30: «Cf. DS 3293; Concilio Ecuménico Vaticano II, Constitución Dogmática Dei Verbum, n. 11»",
      },
    ],
    date: {
      year: 1998,
      month: 6,
      day: 29,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_1998_professio-fidei_sp.html",
      label: "Leer en vatican.va",
    },
  },
  ME2: {
    id: "ME2",
    work: "mysterium-ecclesiae",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El mismo Dios, absolutamente infalible, ha querido dotar a su nuevo Pueblo, que es la Iglesia, de una cierta infalibilidad participada, que se circunscribe al campo de la fe y de las costumbres, que actúa cuando todo el pueblo sostiene, sin dudar, algún elemento doctrinal perteneciente a estos campos",
          edition: "me.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "función no se reduce a sancionar el consentimiento expresado por ellos, sino que incluso, al interpretar y explicar la palabra de Dios escrita o transmitida, puede prevenir tal consentimiento y exigirlo",
          edition: "me.es",
          translation: "official",
        },
        note: "La función del Magisterio",
      },
    ],
    date: {
      year: 1973,
      month: 6,
      day: 24,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19730705_mysterium-ecclesiae_sp.html",
      label: "Leer en vatican.va",
    },
  },
  ME3: {
    id: "ME3",
    work: "mysterium-ecclesiae",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "3",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Como este carisma no es fruto de nuevas revelaciones de las que gocen el sucesor de Pedro y el Colegio episcopal, no se les dispensa de la necesidad de escrutar con los medios apropiados el tesoro de la divina Revelación contenido en las Sagradas Escrituras, que nos enseña sin corrupción la verdad que Dios ha querido que fuese escrita para nuestra salvación, y contenido también en la viva Tradición apostólica",
          edition: "me.es",
          translation: "official",
        },
        note: "Nota 24: «Pastor aeternus, cap. 4: DS 3070»",
      },
      {
        es: {
          text: "En el cumplimiento de su misión, los Pastores de la Iglesia gozan de la asistencia providencial del Espíritu Santo, que alcanza su cumbre cuando instruyen al Pueblo de Dios, de tal modo que transmiten una doctrina necesariamente libre de error",
          edition: "me.es",
          translation: "official",
        },
        citedIn: ["OB-6"],
      },
    ],
    date: {
      year: 1973,
      month: 6,
      day: 24,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19730705_mysterium-ecclesiae_sp.html",
      label: "Leer en vatican.va",
    },
  },
  SRX: {
    id: "SRX",
    work: "sempiternus-rex",
    kind: "source",
    locator: {
      parts: [],
    },
    excerpts: [
      {
        es: {
          text: "si bien nada se hubiera hecho contra el divino primado de jurisdicción, que era por todos reconocido, con todo aquel canon, redactado en ausencia y contra la voluntad de los Legados Pontificios, y por consiguiente clandestino y subrepticio, está destituido de todo valor jurídico y fue reprobado y condenado por San León en muchas cartas",
          edition: "srx.es",
          translation: "official",
        },
        note: "Sobre el canon 28 de Calcedonia",
      },
      {
        es: {
          text: "no sólo los Legados Pontificios han ejercitado la autoridad de presidir, sino que también les fue reconocido por todos los Padres del Concilio sin alguna oposición el derecho y el honor de la presidencia",
          edition: "srx.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "todos los Padres gritaron unánimemente: Esta es la fe de los Padres, ésta la fe de los Apóstoles. […] Pedro ha hablado por boca de León",
          edition: "srx.es",
          translation: "official",
        },
        note: "Nota 14: «Schwartz, II, vol. I, pars altera, p. 81 (277) (Act. III); Mansi, VI, 971 (Act. II)»",
      },
      {
        es: {
          text: "después de esto, con pleno consentimiento, todos dijeron que el documento del Romano Pontífice concordaba perfectamente con los Símbolos Niceno y Constantinopolitano",
          edition: "srx.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1951,
      month: 9,
      day: 8,
    },
    link: {
      href: "https://www.vatican.va/content/pius-xii/es/encyclicals/documents/hf_p-xii_enc_08091951_sempiternus-rex-christus.html",
      label: "Leer en vatican.va",
    },
  },
  DV17: {
    id: "DV17",
    work: "donum-veritatis",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "17",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Las decisiones magisteriales en materia de disciplina, aunque no estén garantizadas por el carisma de la infalibilidad, no están desprovistas de la asistencia divina y requieren la adhesión de los fieles.",
          edition: "donum-veritatis.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1990,
      month: 5,
      day: 24,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19900524_theologian-vocation_sp.html",
      label: "Leer en vatican.va",
    },
  },
  WCF256: {
    id: "WCF256",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXV.6",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "No hay otra cabeza de la iglesia sino el Señor Jesu-Cristo. Ni puede el papa de Roma ser la cabeza de ella en ningun sentido; pues es aquel anti-cristo, aquel inícuo, é hijo de perdicion, que se ensalza en la iglesia contra Cristo, y contra todo lo que se llama Dios.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "There is no other head of the church but the Lord Jesus Christ: nor can the Pope of Rome in any sense be head thereof; but is that antichrist, that man of sin, and son of perdition, that exalteth himself in the church against Christ, and all that is called God.",
          edition: "wcf.en",
        },
        note: "1894, p. 87 (texto de 1647); 1880, cap. XXV.VI, p. 133. Textos de prueba de 1647: Col 1:18; Ef 1:22; Mt 23:8-10; 2 Tes 2:3, 4, 8, 9; Ap 13:6. De 1880: Col 1:18; Ef 1:22; Mt 23:8-10; 2 Tes 2:3-5",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  WCF110: {
    id: "WCF110",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "I.10",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Espíritu Santo, que habla en las Escrituras, [es] el Juez Supremo, por quien toda controversia religiosa tiene que decidirse y por quien tambien todos los decretos de los concilios, las opiniones de los escritores antiguos, y las doctrinas de los hombres y de los espíritus particulares tienen que determinarse, y en su fallo ó sentencia podemos descanzar [sic] confiadamente.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "The supreme Judge, by which all controversies of religion are to be determined, and all decrees of councils, opinions of ancient writers, doctrines of men, and private spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Spirit speaking in the scripture.",
          edition: "wcf.en",
        },
        note: "1894, p. 21; 1880, cap. I.X, pp. 12–13. Textos de prueba (1880): Mt 22:29, 31; Ef 2:20; Hch 28:25",
      },
      {
        es: {
          text: "El Espíritu Santo, que habla en las Escrituras, el Juez Supremo, por quien toda controversia religiosa tiene que decidirse y por quien tambien todos los decretos de los concilios, las opiniones de los escritores antiguos, y las doctrinas de los hombres y de los espíritus particulares tienen que determinarse, y en su fallo ó sentencia podemos descanzar [sic] confiadamente.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "The supreme Judge, by which all controversies of religion are to be determined, and all decrees of councils, opinions of ancient writers, doctrines of men, and private spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Spirit speaking in the scripture.",
          edition: "wcf.en",
        },
        note: "1894, p. 21; 1880, p. 12. Textos de prueba: Mt 22:29, 31; Ef 2:20; Hch 28:25",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/doctrinasyreglam00west",
      label: "Ver el escaneo de 1880 en archive.org",
    },
  },
  SA241: {
    id: "SA241",
    work: "smalcald",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "II.4.1",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Quod papa non sit iure divino seu secundum Verbum Dei caput totius Christianitatis (hoc enim nomen uni et soli Iesu Christo debetur), sed tantum episcopus et pastor ecclesiae, quae est Romae, et eorum, qui voluntarie et sponte vel per humanam creaturam, id est, politicum magistratum, se ad eum conferunt, non ut sub ipso tamquam sub domino vivant, sed ut cum eo tamquam fratres, collegae, sodales et Christiani sint, quemadmodum hoc ipsum vetera concilia et aetas Cypriani ostendunt.",
          edition: "triglot.la",
          page: "470",
        },
        es: {
          text: "Que el papa no es, por derecho divino o según la Palabra de Dios, cabeza de toda la cristiandad (pues este nombre se debe solo a uno, Jesucristo), sino solo obispo y pastor de la iglesia que está en Roma y de aquellos que, voluntariamente o por medio de una criatura humana, es decir, el magistrado político, se han unido a él, no para vivir bajo él como bajo un señor, sino para estar con él como hermanos, colegas, compañeros y cristianos, como lo muestran los antiguos concilios y la época de Cipriano.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921; rehacer desde el alemán",
        },
        en: {
          text: "That the Pope is not, according to divine law or according to the Word of God the head of all Christendom (for this [name] belongs to One only, whose name is Jesus Christ), but is only the bishop and pastor of the Church at Rome, and of those who voluntarily or through a human creature (that is, a political magistrate) have attached themselves to him, to be Christians, not under him as a lord, but with him as brethren [colleagues] and comrades, as the ancient councils and the age of St. Cyprian show.",
          edition: "triglot.en",
        },
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/smalcald-articles/ii/of-the-papacy/",
      label: "Leer en bookofconcord.org",
    },
  },
  SA249: {
    id: "SA249",
    work: "smalcald",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "II.4.9",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Quapropter ecclesia nunquam melius gubernari et conservari potest, quam si omnes sub uno capite, quod est Christus, vivamus, et episcopi omnes pares officio (licet dispares sint quoad dona) summa cum diligentia coniuncti sint unanimitate doctrinae, fidei, sacramentorum, orationis et operum caritatis",
          edition: "triglot.la",
          page: "472",
        },
        es: {
          text: "Por eso la Iglesia nunca puede ser mejor gobernada y conservada que si todos vivimos bajo una sola cabeza, que es Cristo, y todos los obispos, iguales en el oficio (aunque desiguales en dones), están unidos con suma diligencia en la unanimidad de la doctrina, la fe, los sacramentos, la oración y las obras de caridad",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921; rehacer desde el alemán",
        },
        note: "En ¶7–8 Lutero añade que ni un primado por derecho humano ayudaría a la Iglesia",
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/smalcald-articles/ii/of-the-papacy/",
      label: "Leer en bookofconcord.org",
    },
  },
  SA244: {
    id: "SA244",
    work: "smalcald",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "II.4.4",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Prostant enim omnes ipsius bullae et libri, in quibus rugit ut leo […], clamitans neminem Christianorum posse salvari, nisi ei obediat et subiectus sit in omnibus, quaecunque vult, quaecunque dicit, quaecunque facit.",
          edition: "triglot.la",
          page: "472",
        },
        es: {
          text: "Ahí están todas sus bulas y libros, en los que ruge como un león […], clamando que ningún cristiano puede salvarse si no le obedece y le está sujeto en todo lo que quiere, dice y hace.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921; rehacer desde el alemán",
        },
        at: "¶4",
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/smalcald-articles/ii/of-the-papacy/",
      label: "Leer en bookofconcord.org",
    },
  },
  SA2410: {
    id: "SA2410",
    work: "smalcald",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "II.4.10–11",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Haec doctrina praeclare ostendit papam esse ipsum verum antichristum, qui supra et contra Christum sese extulit et evexit, quandoquidem Christianos non vult esse salvos sine sua potestate, quae tamen nihil est et a Deo nec ordinata nec mandata est. Hoc proprie loquendo est se efferre supra et contra Deum, sicut Paulus 2 Thess. 2, 4 loquitur.",
          edition: "triglot.la",
          page: "474",
        },
        es: {
          text: "Esta doctrina muestra claramente que el papa es el mismo verdadero anticristo, que se ha alzado y encumbrado por encima y en contra de Cristo, puesto que no quiere que los cristianos se salven sin su potestad, la cual sin embargo no es nada, y no ha sido ordenada ni mandada por Dios. Esto es, propiamente hablando, alzarse por encima y en contra de Dios, como dice Pablo en 2 Tesalonicenses 2:4.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921; rehacer desde el alemán",
        },
        en: {
          text: "This teaching shows forcefully that the Pope is the very Antichrist, who has exalted himself above, and opposed himself against Christ because he will not permit Christians to be saved without his power, which, nevertheless, is nothing, and is neither ordained nor commanded by God. This is, properly speaking to exalt himself above all that is called God as Paul says, 2 Thess. 2:4.",
          edition: "triglot.en",
        },
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/smalcald-articles/ii/of-the-papacy/",
      label: "Leer en bookofconcord.org",
    },
  },
  SAMEL: {
    id: "SAMEL",
    work: "smalcald",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "locus",
          value: "firma de Melanchthon",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Ego, Philippus Melanthon, supra positos articulos approbo ut pios et Christianos. De pontifice autem statuo, si evangelium admitteret, posse ei propter pacem et communem tranquillitatem Christianorum, qui iam sub ipso sunt et in posterum sub ipso erunt, superioritatem in episcopos, quam alioqui habet, iure humano etiam a nobis permitti.",
          edition: "triglot.la",
          page: "500",
        },
        es: {
          text: "Yo, Felipe Melanchthon, apruebo los artículos anteriores como piadosos y cristianos. Pero en cuanto al pontífice, sostengo que, si admitiera el Evangelio, también nosotros podríamos concederle por derecho humano, por la paz y la tranquilidad común de los cristianos que ya están bajo él y que lo estarán en adelante, la superioridad sobre los obispos que de otro modo tiene.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
        en: {
          text: "I, Philip Melanchthon, also regard [approve] the above articles as right and Christian. But regarding the Pope I hold that, if he would allow the Gospel, his superiority over the bishops which he has otherwise, is conceded to him by human right also by us, for the sake of peace and general unity of those Christians who are also under him, and may be under him hereafter.",
          edition: "triglot.en",
        },
        note: "«Nomina subscripta» ¶7",
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/smalcald-articles/signatories/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR14: {
    id: "TR14",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "1–4",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Romanus pontifex arrogat sibi, quod iure divino sit supra omnes episcopos et pastores. Deinde addit etiam, quod iure divino habeat utrumque gladium, hoc est, auctoritatem etiam regna conferendi et transferendi. Et tertio dicit, quod haec credere sit de necessitate salutis. Et propter has causas Romanus episcopus vocat se vicarium Christi in terris. Hos tres articulos sentimus falsos, impios, tyrannicos et perniciosos ecclesiae esse.",
          edition: "triglot.la",
          page: "502",
        },
        es: {
          text: "El Romano Pontífice se arroga que por derecho divino está por encima de todos los obispos y pastores. Además añade que por derecho divino tiene ambas espadas, es decir, también la autoridad de conferir y transferir reinos. Y en tercer lugar dice que creer esto es necesario para la salvación. Y por estas causas el obispo romano se llama vicario de Cristo en la tierra. Estos tres artículos los tenemos por falsos, impíos, tiránicos y perniciosos para la Iglesia.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR8: {
    id: "TR8",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "8",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Luc. 22, 25 Christus expresse prohibet dominationem inter apostolos. […] Ibi Christus hunc apostolorum errorem reprehendit et docet non futuram inter illos dominationem seu superioritatem, sed apostolos tamquam pares ad commune ministerium evangelii mittendos esse.",
          edition: "triglot.la",
          page: "504",
        },
        es: {
          text: "Lucas 22:25: Cristo prohíbe expresamente el señorío entre los apóstoles. […] Allí Cristo reprende este error de los apóstoles y enseña que no habrá entre ellos señorío ni superioridad, sino que los apóstoles serán enviados como iguales al ministerio común del Evangelio.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
        note: "Siguen ¶8 (Mt 18:2), ¶9 (Jn 20:21), ¶10 (Gál 2:7-8: Pablo «neither ordained nor confirmed [and endorsed] by Peter»), ¶11 (1 Co 3:6, 21-22)",
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR12: {
    id: "TR12",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "12",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Nicaena Synodus ordinavit, ut Alexandrinus episcopus curaret ecclesias in Oriente et Romanus episcopus curaret suburbanas […]. Hinc primum humano iure, hoc est, ordinatione synodi, crevit auctoritas Romani episcopi.",
          edition: "triglot.la",
          page: "506",
        },
        es: {
          text: "El sínodo de Nicea ordenó que el obispo de Alejandría cuidara de las iglesias de Oriente y el obispo romano de las suburbicarias […]. De aquí creció por primera vez, por derecho humano, es decir, por disposición del sínodo, la autoridad del obispo romano.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR23: {
    id: "TR23",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "23",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "In omnibus illis dictis Petrus sustinet personam communem totius coetus apostolorum, sicut ex ipso textu apparet. Nam Christus interrogat non unum Petrum, sed ait: Vos quem me esse dicitis? Et quod hic singulari numero dicitur: Tibi dabo claves, quidquid ligaveris, alibi plurali numero dicitur [Matth. 18, 18]: Quidquid ligaveritis etc. Et in Iohanne [20, 23]: Quorum remiseritis peccata etc. Haec verba testantur pariter omnibus apostolis tradi claves, et pariter mitti omnes apostolos.",
          edition: "triglot.la",
          page: "510",
        },
        es: {
          text: 'En todos esos dichos Pedro representa a toda la asamblea de los apóstoles, como se ve por el texto mismo. Porque Cristo no pregunta solo a Pedro, sino que dice: "¿Quién decís vosotros que soy yo?". Y lo que aquí se dice en singular, "A ti te daré las llaves; todo lo que ates", en otro lugar se dice en plural (Mateo 18:18): "Todo lo que atéis"; y en Juan (20:23): "A quienes perdonéis los pecados". Estas palabras atestiguan que las llaves se entregan por igual a todos los apóstoles, y que todos los apóstoles son enviados por igual.',
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
        en: {
          text: "In all these passages Peter is the representative of the entire assembly of apostles [and does not speak for himself alone, but for all the apostles], as appears from the text itself. For Christ asks not Peter alone, but says: Whom do ye say that I am? And what is here said [to Peter alone] in the singular number: I will give unto thee the keys; and whatsoever thou shalt bind, etc., is elsewhere expressed [to their entire number], in the plural Matt. 18:18 … And in John 20:23 … These words testify that the keys are given alike to all the apostles and that all the apostles are alike sent forth [to preach].",
          edition: "triglot.en",
        },
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR24: {
    id: "TR24",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "24",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "claves non ad personam unius certi hominis, sed ad ecclesiam pertineant […] Tribuit igitur principaliter claves ecclesiae et immediate",
          edition: "triglot.la",
          page: "510",
        },
        es: {
          text: "las llaves no pertenecen a la persona de un hombre determinado, sino a la Iglesia […] Por tanto, [Cristo] da las llaves principal e inmediatamente a la Iglesia",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR25: {
    id: "TR25",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "25",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Quod vero dictum est: Super hanc petram aedificabo ecclesiam meam, certe ecclesia non est aedificata super auctoritatem hominis, sed super ministerium illius professionis, quam Petrus fecerat, in qua praedicat Iesum esse Christum, Filium Dei.",
          edition: "triglot.la",
          page: "510",
        },
        es: {
          text: 'En cuanto a lo dicho, "Sobre esta piedra edificaré mi Iglesia", ciertamente la Iglesia no está edificada sobre la autoridad de un hombre, sino sobre el ministerio de aquella confesión que Pedro había hecho, en la que proclama que Jesús es el Cristo, el Hijo de Dios.',
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR30: {
    id: "TR30",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "30",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Iubet eum pascere, hoc est, docere Verbum seu ecclesiam Verbo regere, quod habet Petrus commune cum ceteris apostolis.",
          edition: "triglot.la",
          page: "512",
        },
        es: {
          text: "Le manda apacentar, es decir, enseñar la Palabra o regir la Iglesia con la Palabra, lo cual Pedro tiene en común con los demás apóstoles.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR31: {
    id: "TR31",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "31",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Secundus articulus magis etiam perspicuus est, quod Christus dederit apostolis tantum potestatem spiritualem, hoc est, mandatum docendi evangelii, annuntiandi remissionem peccatorum, administrandi sacramenta, excommunicandi impios sine vi corporali, nec dederit potestatem gladii aut ius constituendi, occupandi aut conferendi regna mundi.",
          edition: "triglot.la",
          page: "512",
        },
        es: {
          text: "El segundo artículo es todavía más claro: que Cristo dio a los apóstoles solo potestad espiritual, es decir, el mandato de enseñar el Evangelio, anunciar el perdón de los pecados, administrar los sacramentos y excomulgar a los impíos sin fuerza corporal, y no les dio la potestad de la espada ni el derecho de establecer, ocupar o conferir los reinos del mundo.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
        note: "Textos de prueba: Mt 28:19-20; Jn 20:21; Jn 18:36; 2 Co 1:24; 2 Co 10:4",
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR33: {
    id: "TR33",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "33",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Quare Bonifacii Octavi Constitutio et cap. Omnes, distinct. 22, et similes sententiae sunt falsae et impiae, quae contendunt iure divino papam esse dominum regnorum mundi.",
          edition: "triglot.la",
          page: "512",
        },
        es: {
          text: "Por eso la Constitución de Bonifacio VIII y el capítulo Omnes, distinción 22, y otras sentencias semejantes, que sostienen que el papa es por derecho divino señor de los reinos del mundo, son falsas e impías.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR35: {
    id: "TR35",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "35",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Deinde papae rapere ad se imperia coeperunt, transtulerunt regna, vexarunt iniustis excommunicationibus et bellis fere omnium nationum reges in Europa, sed maxime Imperatores Germanicos, alias ut occuparent Italicas civitates, alias ut episcopos Germaniae redigerent in suam servitutem, et eriperent imperatoribus collationem. Imo etiam in Clementina scriptum est: Vacante imperio papam esse legitimum successorem.",
          edition: "triglot.la",
          page: "512",
        },
        es: {
          text: 'Después los papas empezaron a apoderarse de imperios, transfirieron reinos, atormentaron con excomuniones injustas y con guerras a los reyes de casi todas las naciones de Europa, pero sobre todo a los emperadores germánicos, unas veces para ocupar ciudades de Italia, otras para reducir a su servidumbre a los obispos de Alemania y quitar a los emperadores la colación [de los obispados]. Más aún, en las Clementinas está escrito: "Vacante el imperio, el papa es su legítimo sucesor".',
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
        en: {
          text: "Next, the Popes began to seize upon kingdoms for themselves; they transferred kingdoms, they vexed with unjust excommunications and wars the kings of almost all nations in Europe, but especially the German emperors, sometimes for the purpose of occupying cities of Italy, at other times for the purpose of reducing to subjection the bishops of Germany, and wresting from the emperors the conferring of episcopates. Yea, in the Clementines it is even written: When the empire is vacant, the Pope is the legitimate successor.",
          edition: "triglot.en",
        },
        at: "¶35",
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR36w: {
    id: "TR36w",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "36",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Ita papa non solum dominationem contra mandatum Christi invasit, sed etiam tyrannice praetulit se omnibus regibus. Nec tantum in hac re factum ipsum reprehendendum est, quantum illud detestandum, quod praetexit auctoritatem Christi, quod claves ad regnum mundanum transfert, quod salutem alligat ad has impias et nefarias opiniones, quum ait de necessitate salutis esse, ut credant homines iure divino hanc dominationem competere.",
          edition: "triglot.la",
          page: "514",
        },
        es: {
          text: "Así el papa no solo usurpó un dominio contra el mandato de Cristo, sino que también se puso tiránicamente por encima de todos los reyes. Y en esto no hay que reprender tanto el hecho mismo como detestar que pretexte la autoridad de Cristo, que transfiera las llaves a un reino mundano, que ate la salvación a estas opiniones impías y nefandas, cuando dice que es necesario para la salvación que los hombres crean que este dominio le corresponde por derecho divino.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
        en: {
          text: "Thus the Pope has not only usurped dominion, contrary to Christ's command, but has also tyrannically exalted himself above all kings. And in this matter the deed itself is not to be reprehended as much as it is to be detested, that he assigns as a pretext the authority of Christ; that he transfers the keys to a worldly government; that he binds salvation to these godless and execrable opinions, when he says it is necessary to salvation for men to believe that this dominion belongs to him by divine right.",
          edition: "triglot.en",
        },
        at: "¶36",
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR36: {
    id: "TR36",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "36",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "[…] quod salutem alligat ad has impias et nefarias opiniones, quum ait de necessitate salutis esse, ut credant homines iure divino hanc dominationem competere.",
          edition: "triglot.la",
          page: "514",
        },
        es: {
          text: "[…] que ata la salvación a estas opiniones impías y nefandas, cuando dice que es necesario para la salvación que los hombres crean que este dominio le corresponde por derecho divino.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
        en: {
          text: "that he binds salvation to these godless and execrable opinions, when he says it is necessary to salvation for men to believe that this dominion belongs to him by divine right.",
          edition: "triglot.en",
        },
        note: "Completo (¶35–36) en OB-8",
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR38: {
    id: "TR38",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "38",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Etiamsi Romanus episcopus divino iure primatum et superioritatem haberet, tamen non debetur obedientia his pontificibus, qui defendunt impios cultus, idololatriam et doctrinam pugnantem cum evangelio.",
          edition: "triglot.la",
        },
        es: {
          text: "Aunque el obispo romano tuviera por derecho divino el primado y la superioridad, sin embargo no se debe obediencia a aquellos pontífices que defienden cultos impíos, idolatría y doctrina contraria al Evangelio.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
        note: "Triglotta, latín pp. 514–516. Textos de prueba: Gál 1:8; Hch 5:29",
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR3940: {
    id: "TR3940",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "39–40",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "plane notae antichristi competunt in regnum papae et sua membra. […] arrogat sibi papa auctoritatem divinam tripliciter. Primum, quia sumit sibi ius mutandi doctrinam Christi et cultus a Deo institutos […]. Secundo, quia sumit sibi potestatem non solum ligandi et solvendi in hac vita, sed etiam sumit sibi ius de animabus post hanc vitam. Tertio, quia papa non vult ab ecclesia aut ab ullo iudicari, et antefert suam auctoritatem iudicio conciliorum et totius ecclesiae. Hoc autem est se Deum facere, nolle ab ecclesia aut ab ullo iudicari.",
          edition: "triglot.la",
        },
        es: {
          text: "las señales del anticristo convienen claramente al reino del papa y a sus miembros. […] el papa se arroga autoridad divina de tres maneras. Primero, porque se toma el derecho de cambiar la doctrina de Cristo y los cultos instituidos por Dios […]. Segundo, porque se toma la potestad no solo de atar y desatar en esta vida, sino también el derecho sobre las almas después de esta vida. Tercero, porque el papa no quiere ser juzgado por la Iglesia ni por nadie, y antepone su autoridad al juicio de los concilios y de toda la Iglesia. Pero no querer ser juzgado por la Iglesia ni por nadie es hacerse Dios.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
        note: "Triglotta, latín pp. 514–516. Texto de prueba: 2 Tes 2:3-4; ¶41: Mt 7:15; Gál 1:8; Tit 3:10; 2 Co 6:14",
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR4956: {
    id: "TR4956",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "49 y 56",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "alterum, quod iudicium eripit ecclesiae, nec sinit rite iudicari ecclesiasticas controversias, imo contendit se supra concilium esse et decreta conciliorum rescindere posse",
          edition: "triglot.la",
          page: "518",
        },
        es: {
          text: "el segundo [pecado], que arrebata el juicio a la Iglesia y no permite que las controversias eclesiásticas se juzguen según el debido orden; más aún, sostiene que está por encima del concilio y que puede rescindir los decretos de los concilios",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
        at: "¶49",
      },
      {
        la: {
          text: "Quum autem iudicia synodorum sint ecclesiae iudicia, non pontificum…",
          edition: "triglot.la",
          page: "520",
        },
        es: {
          text: "Puesto que los juicios de los sínodos son juicios de la Iglesia, y no de los pontífices…",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
        at: "¶56",
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  TR57: {
    id: "TR57",
    work: "treatise",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "57",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "necesse est ei tamquam antichristo adversari",
          edition: "triglot.la",
          page: "520",
        },
        en: {
          text: "it is necessary to resist him as Antichrist",
          edition: "triglot.en",
        },
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/",
      label: "Leer en bookofconcord.org",
    },
  },
  FCEPRN: {
    id: "FCEPRN",
    work: "fc-epitome",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "locus",
          value: "Regla y norma 1",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Credimus, confitemur et docemus unicam regulam et normam, secundum quam omnia dogmata omnesque doctores aestimari et iudicari oporteat, nullam omnino aliam esse quam prophetica et apostolica scripta cum Veteris tum Novi Testamenti",
          edition: "triglot.la",
          page: "776",
        },
        es: {
          text: "Creemos, confesamos y enseñamos que la única regla y norma según la cual deben apreciarse y juzgarse todos los dogmas y todos los doctores no es ninguna otra que los escritos proféticos y apostólicos del Antiguo y del Nuevo Testamento",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta de 1921",
        },
        en: {
          text: "We believe, teach, and confess that the sole rule and standard according to which all dogmas together with [all] teachers should be estimated and judged are the prophetic and apostolic Scriptures of the Old and of the New Testament alone",
          edition: "triglot.en",
        },
      },
    ],
    link: {
      href: "https://bookofconcord.org/epitome/rule-and-norm/",
      label: "Leer en bookofconcord.org",
    },
  },
  DOS10: {
    id: "DOS10",
    work: "dositheus",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "decree",
          value: "X",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "De esta Iglesia católica, puesto que un hombre mortal no puede ser su cabeza universal y perpetuamente, nuestro Señor Jesucristo mismo es la cabeza, y Él mismo, sosteniendo el timón, gobierna la Iglesia por medio de los santos Padres.",
          edition: "dos.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Robertson; rehacer desde el griego",
        },
        en: {
          text: "Of which Catholic Church, since a mortal man cannot universally and perpetually be head, our Lord Jesus Christ Himself is head, and Himself holding the rudder is at the helm in the governing of the Church, through the Holy Fathers.",
          edition: "dos.en",
        },
        note: "Robertson, p. 123 (el decreto empieza en p. 122)",
      },
    ],
    date: {
      year: 1672,
    },
    link: {
      href: "https://archive.org/details/actsdecreesofsyn00orth",
      label: "Ver el escaneo de Robertson en archive.org",
    },
  },
  ENC48_11r: {
    id: "ENC48_11r",
    work: "enc-1848",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "11",
        },
      ],
      qualifier: "la roca",
    },
    excerpts: [
      {
        es: {
          text: 'si la Iglesia de Cristo no estuviera fundada sobre la roca inamovible de la confesión de san Pedro, "Tú eres el Cristo, el Hijo del Dios vivo" (que fue la respuesta común de los apóstoles cuando se les preguntó "¿Quién decís vosotros que soy yo?", como nos interpretan el pasaje los Padres, tanto orientales como occidentales), la Iglesia estaría edificada sobre un fundamento resbaladizo, sobre Cefas mismo, por no decir sobre el papa […] nuestros divinos Padres enseñan unánimes que el sentido del mandato tres veces repetido, "Apacienta mis ovejas", no implicaba prerrogativa alguna de san Pedro sobre los demás apóstoles, y menos aún de sus sucesores. Fue una simple restitución a su apostolado, del que había caído por su triple negación.',
          edition: "enc1848.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Fordham; rehacer desde el griego",
        },
        en: {
          text: "unless the Church of Christ was founded upon the immovable rock of St. Peter's Confession, Thou art the Christ, the Son of the Living God (which was the answer of the Apostles in common, when the question was put to them, Whom say ye that I am? (Matt. xvi. 15,) as the Fathers, both Eastern and Western, interpret the passage to us), the Church was built upon a slippery foundation, even on Cephas himself, not to say on the Pope […] our divine Fathers, with one accord, teach that the sense of the thrice-repeated command, Feed my sheep, implied no prerogative in St. Peter over the other Apostles, least of all in his successors. It was a simple restoration to his Apostleship, from which he had fallen by his thrice-repeated denial.",
          edition: "enc1848.en",
        },
      },
    ],
    date: {
      year: 1848,
      month: 5,
    },
    link: {
      href: "https://sourcebooks.web.fordham.edu/mod/1848orthodoxencyclical.asp",
      label: "Leer en Fordham Sourcebook",
    },
  },
  ENC48_11a: {
    id: "ENC48_11a",
    work: "enc-1848",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "11",
        },
      ],
      qualifier: "Antioquía",
    },
    excerpts: [
      {
        es: {
          text: 'El trono de Roma es tenido por el de san Pedro por una sola tradición, pero no por la Sagrada Escritura, donde la pretensión favorece a Antioquía, cuya Iglesia es por eso, según atestigua el gran Basilio, "la más venerable de todas las Iglesias del mundo". […] El bienaventurado Pedro, aun en su propia persona, fue juzgado delante de todos por la verdad del Evangelio y, como declara la Escritura, fue hallado reprensible y no andaba rectamente.',
          edition: "enc1848.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Fordham; rehacer desde el griego",
        },
        en: {
          text: "The Throne of Rome is esteemed that of St. Peter by a single tradition, but not from Holy Scripture, where the claim is in favor of Antioch, whose Church is therefore witnessed by the great Basil (Ep. 48 Athan.) to be 'the most venerable of all the Churches in the world.' […] The blessed Peter, even in his own person, was judged before all for the truth of the Gospel, and, as Scripture declares, was found blamable and not walking uprightly.",
          edition: "enc1848.en",
        },
        note: "Carta de Basilio que cita la encíclica («Ep. 48 Athan.»): sin fecha indicada",
      },
    ],
    date: {
      year: 1848,
      month: 5,
    },
    link: {
      href: "https://sourcebooks.web.fordham.edu/mod/1848orthodoxencyclical.asp",
      label: "Leer en Fordham Sourcebook",
    },
  },
  ENC48_13: {
    id: "ENC48_13",
    work: "enc-1848",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "13–14",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Vemos ese mismo primado, por el que Su Santidad lucha ahora con todas sus fuerzas, como lo hicieron sus predecesores, transformado de un carácter fraterno y de privilegio jerárquico en una superioridad señorial.",
          edition: "enc1848.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Fordham; rehacer desde el griego",
        },
        en: {
          text: "We see that very primacy, for which his Holiness now contends with all his might, as did his predecessors, transformed from a brotherly character and hierarchical privilege into a lordly superiority.",
          edition: "enc1848.en",
        },
        at: "§13",
      },
      {
        es: {
          text: "Pero este hecho es un apoyo muy débil para la autoridad papal en la casa de Dios. Porque, siendo entonces Roma el centro de la provincia imperial y la ciudad principal, en la que vivían los emperadores, era natural que cualquier cuestión importante, como la historia muestra que lo fue la de los corintios, se decidiera allí",
          edition: "enc1848.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Fordham; rehacer desde el griego",
        },
        en: {
          text: "But this event is a very weak support for the Papal authority in the house of God. For Rome being then the center of the Imperial Province and the chief City, in which the Emperors lived, it was proper that any question of importance, as history shows that of the Corinthians to have been, should be decided there",
          edition: "enc1848.en",
        },
        at: "§14",
      },
    ],
    date: {
      year: 1848,
      month: 5,
    },
    link: {
      href: "https://sourcebooks.web.fordham.edu/mod/1848orthodoxencyclical.asp",
      label: "Leer en Fordham Sourcebook",
    },
  },
  ENC48_15: {
    id: "ENC48_15",
    work: "enc-1848",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "15",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Pero Su Santidad no debería pasar por alto cómo, y después de qué examen, nuestros padres aclamaron así a León. Puesto que Su Santidad, por brevedad, parece haber omitido este punto tan necesario, y la prueba manifiesta de que un concilio ecuménico no solo está por encima del papa, sino por encima de cualquier concilio suyo, explicaremos públicamente el asunto tal como sucedió en realidad. De los más de seiscientos padres reunidos en el concilio de Calcedonia, unos doscientos de los más sabios fueron designados por el concilio para examinar, en cuanto a la letra y al sentido, dicha carta de León; y no solo eso, sino para dar por escrito y con sus firmas su propio juicio sobre ella: si era ortodoxa o no. […] Después de un escrutinio tan grande y tan severo, comparándola con los santos concilios anteriores, y con plena convicción de que su sentido era correcto, y no meramente porque fuera la carta del papa, aclamaron en alta voz, sin reservas, la exclamación de la que Su Santidad ahora se jacta",
          edition: "enc1848.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Fordham; rehacer desde el griego",
        },
        en: {
          text: "But his Holiness ought not to overlook how, and after what examination, our fathers cried out, as they did, in praise of Leo. Since however his Holiness, consulting brevity, appears to have omitted this most necessary point, and the manifest proof that an Ecumenical Council is not only above the Pope but above any Council of his, we will explain to the public the matter as it really happened. Of more than six hundred fathers assembled in the Council of Chalcedon, about two hundred of the wisest were appointed by the Council to examine both as to language and sense the said epistle of Leo; nor only so, but to give in writing and with their signatures their own judgment upon it, whether it were orthodox or not. […] After such great and very severe scrutiny in comparing it with former holy Councils, and a full conviction of the correctness of the meaning, and not merely because it was the epistle of the Pope, they cried aloud, ungrudgingly, the exclamation on which his Holiness now vaunts himself",
          edition: "enc1848.en",
        },
        note: "La página de Fordham imprime «Counci1»; lo omitido cita a Máximo de Antioquía y a Teodoreto sobre el acuerdo de la carta con Nicea, Constantinopla y Cirilo",
      },
    ],
    date: {
      year: 1848,
      month: 5,
    },
    link: {
      href: "https://sourcebooks.web.fordham.edu/mod/1848orthodoxencyclical.asp",
      label: "Leer en Fordham Sourcebook",
    },
  },
  ENC48_17: {
    id: "ENC48_17",
    work: "enc-1848",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "17",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Además, ni los patriarcas ni los concilios habrían podido introducir entonces novedades entre nosotros, porque el protector de la religión es el cuerpo mismo de la Iglesia, es decir, el pueblo mismo, que quiere que su culto religioso sea siempre inmutable y del mismo modo que el de sus padres",
          edition: "enc1848.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Fordham; rehacer desde el griego",
        },
        en: {
          text: "Moreover, neither Patriarchs nor Councils could then have introduced novelties amongst us, because the protector of religion is the very body of the Church, even the people themselves, who desire their religious worship to be ever unchanged and of the same kind as that of their fathers",
          edition: "enc1848.en",
        },
      },
    ],
    date: {
      year: 1848,
      month: 5,
    },
    link: {
      href: "https://sourcebooks.web.fordham.edu/mod/1848orthodoxencyclical.asp",
      label: "Leer en Fordham Sourcebook",
    },
  },
  ENC95_14h: {
    id: "ENC95_14h",
    work: "enc-1895",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "XIV",
        },
      ],
      qualifier: "la cabeza",
    },
    excerpts: [
      {
        es: {
          text: 'Solo nuestro Señor Jesucristo es el Príncipe eterno y la Cabeza inmortal de la Iglesia, pues "Él es la cabeza del cuerpo, que es la Iglesia", y dijo también a sus divinos discípulos y apóstoles al subir a los cielos: "Yo estoy con vosotros todos los días, hasta el fin del mundo".',
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos; rehacer desde el griego",
        },
        en: {
          text: "Our Lord Jesus Christ alone is the eternal Prince and immortal Head of the Church, for 'He is the Head of the body, the Church,' who said also to His divine disciples and apostles at His ascension into heaven, 'Lo, I am with you alway, even unto the end of the world.'",
          edition: "enc1895.en",
        },
        note: "Notas al pie impresas, fuera de la cita: Col. i. 18; Matt. xxviii. 20",
      },
    ],
    date: {
      year: 1895,
    },
    link: {
      href: "https://archive.org/details/answerofgreatchu0000eust",
      label: "Ver el escaneo de Metallinos en archive.org",
    },
  },
  ENC95_14r: {
    id: "ENC95_14r",
    work: "enc-1895",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "XIV",
        },
      ],
      qualifier: "la roca",
    },
    excerpts: [
      {
        es: {
          text: 'la roca fundamental e inconmovible sobre la que el Señor edificó su propia Iglesia, contra la cual no prevalecerán las puertas del infierno, se entiende metafóricamente de la verdadera confesión de Pedro acerca del Señor: que "Él es el Cristo, el Hijo del Dios vivo". Sobre esta confesión y fe descansa inconmovible la predicación salvadora del Evangelio por todos los apóstoles y sus sucesores. Por eso también el apóstol Pablo, que fue arrebatado al cielo, interpretando claramente este pasaje divino, declara por inspiración divina: "Conforme a la gracia de Dios que me ha sido dada, yo como sabio arquitecto puse el fundamento, y otro edifica encima. Porque nadie puede poner otro fundamento que el que está puesto, el cual es Jesucristo"',
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos; rehacer desde el griego",
        },
        en: {
          text: "the fundamental and unshaken rock upon which the Lord has built His own Church, against which the gates of hell shall not prevail, being understood metaphorically of Peter's true confession concerning the Lord, that 'He is Christ, the Son of the living God!' Upon this confession and faith the saving preaching of the Gospel by all the apostles and their successors rests unshaken. Whence also the Apostle Paul, who had been caught up into heaven, evidently interpreting this divine passage, declares by divine inspiration, saying: 'According to the grace of God which is given unto me, as a wise master-builder, I have laid the foundation, and another buildeth thereon. For other foundation can no man lay than that is laid, which is Jesus Christ.'",
          edition: "enc1895.en",
        },
        note: "Metallinos, p. 39",
      },
    ],
    date: {
      year: 1895,
    },
    link: {
      href: "https://archive.org/details/answerofgreatchu0000eust",
      label: "Ver el escaneo de Metallinos en archive.org",
    },
  },
  ENC95_14p: {
    id: "ENC95_14p",
    work: "enc-1895",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "XIV",
        },
      ],
      qualifier: "Pedro y Roma",
    },
    excerpts: [
      {
        es: {
          text: "el apóstol Pedro, a quien los papistas, apoyándose en libros apócrifos del siglo II, las pseudoclementinas, imaginan con intención como fundador de la Iglesia romana y su primer obispo, discute como igual entre iguales en el sínodo apostólico de Jerusalén, y en otra ocasión es reprendido duramente por el apóstol Pablo, como consta por la carta a los Gálatas",
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos; rehacer desde el griego",
        },
        en: {
          text: "the Apostle Peter, whom the Papists, relying on apocryphal books of the second century, the pseudo-Clementines, imagine with a purpose to be the founder of the Roman Church and their first bishop, discusses matters as an equal among equals in the apostolic synod of Jerusalem, and at another time is sharply rebuked by the Apostle Paul, as is evident from the Epistle to the Galatians",
          edition: "enc1895.en",
        },
      },
      {
        es: {
          text: "la Iglesia de Roma fue fundada principalmente no por Pedro, cuya acción apostólica en Roma es del todo desconocida para la historia, sino por el apóstol de los gentiles, Pablo, arrebatado al cielo, por medio de sus discípulos",
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos; rehacer desde el griego",
        },
        en: {
          text: "the Church of Rome was chiefly founded, not by Peter, whose apostolic action at Rome is totally unknown to history, but by the heaven-caught apostle of the Gentiles, Paul, through his disciples",
          edition: "enc1895.en",
        },
      },
    ],
    date: {
      year: 1895,
    },
    link: {
      href: "https://archive.org/details/answerofgreatchu0000eust",
      label: "Ver el escaneo de Metallinos en archive.org",
    },
  },
  ENC95_14i: {
    id: "ENC95_14i",
    work: "enc-1895",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "XIV",
        },
      ],
      qualifier: "la Iglesia universal, única infalible",
    },
    excerpts: [
      {
        es: {
          text: "recurriendo a los Padres y a los concilios ecuménicos de la Iglesia de los primeros nueve siglos, estamos plenamente persuadidos de que el obispo de Roma nunca fue considerado autoridad suprema y cabeza infalible de la Iglesia, y de que cada obispo es cabeza y presidente de su propia Iglesia particular, sujeto solo a las disposiciones sinodales y a las decisiones de la Iglesia universal, la única infalible",
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos; rehacer desde el griego",
        },
        en: {
          text: "having recourse to the fathers and the Oecumenical Councils of the Church of the first nine centuries, we are fully persuaded that the Bishop of Rome was never considered as the supreme authority and infallible head of the Church, and that every bishop is head and president of his own particular Church, subject only to the synodical ordinances and decisions of the Church universal as being alone infallible",
          edition: "enc1895.en",
        },
      },
    ],
    date: {
      year: 1895,
    },
    link: {
      href: "https://archive.org/details/answerofgreatchu0000eust",
      label: "Ver el escaneo de Metallinos en archive.org",
    },
  },
  ENC95_15: {
    id: "ENC95_15",
    work: "enc-1895",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "XV",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los divinos Padres, honrando al obispo de Roma solo como obispo de la ciudad capital del imperio, le dieron la prerrogativa honorífica de la presidencia, considerándolo simplemente como el obispo primero en orden, es decir, primero entre iguales; prerrogativa que asignaron después también al obispo de Constantinopla, cuando esta ciudad llegó a ser la capital del Imperio romano, como atestigua el canon veintiocho del cuarto concilio ecuménico de Calcedonia",
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos; rehacer desde el griego",
        },
        en: {
          text: "The divine Fathers, honouring the Bishop of Rome only as the bishop of the capital city of the empire, gave him the honorary prerogative of presidency, considering him simply as the bishop first in order, that is, first among equals; which prerogative they also assigned afterwards to the Bishop of Constantinople, when that city became the capital of the Roman Empire, as the twenty-eighth canon of the fourth Oecumenical Council at Chalcedon bears witness",
          edition: "enc1895.en",
        },
      },
      {
        es: {
          text: "Porque los Padres dieron con razón la prerrogativa al trono de la antigua Roma, porque aquella era la ciudad imperial",
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos; rehacer desde el griego",
        },
        en: {
          text: "For the Fathers have rightly given the prerogative to the throne of the elder Rome, because that was the imperial city.",
          edition: "enc1895.en",
        },
        note: "El canon 28 de Calcedonia, tal como lo cita la encíclica",
      },
    ],
    date: {
      year: 1895,
    },
    link: {
      href: "https://archive.org/details/answerofgreatchu0000eust",
      label: "Ver el escaneo de Metallinos en archive.org",
    },
  },
  ENC95_16: {
    id: "ENC95_16",
    work: "enc-1895",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "XVI",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Cada Iglesia particular que se gobierna a sí misma, tanto en Oriente como en Occidente, era del todo independiente y se administraba a sí misma en tiempos de los siete concilios ecuménicos. […] el obispo de Roma no tenía derecho a intervenir, y él mismo estaba igualmente sujeto y obediente a los decretos de los sínodos. Pero en las cuestiones importantes que necesitaban la sanción de la Iglesia universal se apelaba a un concilio ecuménico, que era y es el único tribunal supremo en la Iglesia universal.",
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos; rehacer desde el griego",
        },
        en: {
          text: "Each particular self-governing Church, both in the East and West, was totally independent and self-administered in the times of the seven Oecumenical Councils. […] the Bishop of Rome having no right to interfere, and he himself also was equally subject and obedient to the decrees of synods. But on important questions which needed the sanction of the universal Church an appeal was made to an Oecumenical Council, which alone was and is the supreme tribunal in the universal Church.",
          edition: "enc1895.en",
        },
      },
    ],
    date: {
      year: 1895,
    },
    link: {
      href: "https://archive.org/details/answerofgreatchu0000eust",
      label: "Ver el escaneo de Metallinos en archive.org",
    },
  },
  ENC95_17: {
    id: "ENC95_17",
    work: "enc-1895",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "XVII",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Durante los nueve siglos de los concilios ecuménicos, la Iglesia ortodoxa de Oriente nunca reconoció las pretensiones excesivas de primado de los obispos de Roma, ni por consiguiente se sometió nunca a ellas",
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos; rehacer desde el griego",
        },
        en: {
          text: "During the nine centuries of the Oecumenical Councils the Eastern Orthodox Church never recognized the excessive claims of primacy on the part of the bishops of Rome, nor consequently did she ever submit herself to them",
          edition: "enc1895.en",
        },
      },
      {
        en: {
          text: "the first seeds of these claims of a papal absolutism",
          edition: "enc1895.en",
        },
        note: "Atribuidas a las pseudoclementinas y a las «pseudo-Isidorian decrees»",
      },
    ],
    date: {
      year: 1895,
    },
    link: {
      href: "https://archive.org/details/answerofgreatchu0000eust",
      label: "Ver el escaneo de Metallinos en archive.org",
    },
  },
  ENC95_18: {
    id: "ENC95_18",
    work: "enc-1895",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "XVIII",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "la Iglesia papal […] aun en los últimos años del siglo XIX ha ensanchado el abismo existente al proclamar oficialmente, para asombro del mundo cristiano, que el obispo de Roma es incluso infalible. La Iglesia de Cristo, ortodoxa, oriental y católica, fuera del Hijo y Verbo de Dios que se hizo hombre de modo inefable, no conoce a nadie que haya sido infalible en la tierra. Aun el apóstol Pedro, de quien el papa se cree sucesor, negó tres veces al Señor y fue reprendido dos veces por el apóstol Pablo por no andar rectamente conforme a la verdad del Evangelio. Después, el papa Liberio, en el siglo IV, firmó una confesión arriana; y Zósimo, en el siglo V, aprobó una confesión herética que negaba el pecado original. Vigilio, en el siglo VI, fue condenado por opiniones erróneas por el quinto concilio; y Honorio, caído en la herejía monotelita, fue condenado en el siglo VII por el sexto concilio ecuménico como hereje, y los papas que le sucedieron reconocieron y aceptaron su condena.",
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos; rehacer desde el griego",
        },
        en: {
          text: "the Papal Church […] even in the expiring years of the nineteenth century has widened the existing gulf by officially proclaiming, to the astonishment of the Christian world, that the Bishop of Rome is even infallible. The orthodox Eastern and catholic Church of Christ, with the exception of the Son and Word of God, who was ineffably made man, knows no one that was infallible upon earth. Even the Apostle Peter himself, whose successor the Pope thinks himself to be, thrice denied the Lord, and was twice rebuked by the Apostle Paul as not walking uprightly according to the truth of the Gospel. Afterwards the Pope Liberius, in the fourth century, subscribed an Arian confession; and likewise Zosimus, in the fifth century, approved an heretical confession, denying original sin. Vigilius, in the sixth century, was condemned for wrong opinions by the fifth Council; and Honorius, having fallen into the Monothelite heresy, was condemned in the seventh century by the sixth Oecumenical Council as a heretic, and the popes who succeeded him acknowledged and accepted his condemnation.",
          edition: "enc1895.en",
        },
      },
    ],
    date: {
      year: 1895,
    },
    link: {
      href: "https://archive.org/details/answerofgreatchu0000eust",
      label: "Ver el escaneo de Metallinos en archive.org",
    },
  },
  ENC95_19: {
    id: "ENC95_19",
    work: "enc-1895",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "XIX",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "el nuevo dogma de la infalibilidad de los papas, promulgado por el concilio Vaticano",
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos; rehacer desde el griego",
        },
        en: {
          text: "the novel dogma of the infallibility of the Popes, issued by the Vatican Council",
          edition: "enc1895.en",
        },
      },
    ],
    date: {
      year: 1895,
    },
    link: {
      href: "https://archive.org/details/answerofgreatchu0000eust",
      label: "Ver el escaneo de Metallinos en archive.org",
    },
  },
  STWCF: {
    id: "STWCF",
    work: "status-stwcf",
    kind: "status",
    locator: {
      parts: [],
    },
    excerpts: [
      {
        es: {
          text: 'Estado actual: la Iglesia Presbiteriana Ortodoxa (OPC) mantiene estas frases en su texto vigente de la Confesión, y la Iglesia Presbiteriana en América (PCA) usa ese mismo texto. La Iglesia de Escocia, en su Acta Declaratoria de 1986, "ya no afirma" el artículo 29.2 (el acta no menciona el 29.6) y no exige a sus ministros creerlo. La Iglesia Nacional Presbiteriana de México tiene la Confesión de Westminster entre sus símbolos doctrinales; la traducción avalada por su Asamblea General conserva el texto de 1647.',
          edition: "status-stwcf.es",
          translation: "site-statement",
        },
      },
    ],
    link: {
      href: "https://opc.org/wcf.html",
      label: "Leer el texto vigente de la OPC",
    },
  },
  STLUT: {
    id: "STLUT",
    work: "status-stlut",
    kind: "status",
    locator: {
      parts: [],
    },
    excerpts: [
      {
        es: {
          text: 'Estado actual: la Iglesia Luterana–Sínodo de Misuri (LCMS) acepta como confesión todos los símbolos del Libro de Concordia de 1580, que incluye los Artículos de Esmalcalda y el Tratado sobre el poder y el primado del papa (Breve Declaración de 1932, §45: "We accept as our confession all the symbols contained in the Book of Concord of the year 1580"). La Iglesia Evangélica Luterana en América (ELCA) los acepta como "otras interpretaciones válidas de la fe de la Iglesia" (Constitución, cap. 2).',
          edition: "st.es",
          translation: "site-statement",
        },
        note: "ST-LUT",
      },
    ],
    link: {
      href: "https://www.projectwittenberg.org/etext/lcms/Brief/index.html",
      label: "Leer la Breve Declaración en Project Wittenberg",
    },
  },
  STLUTAC: {
    id: "STLUTAC",
    work: "status-stlutac",
    kind: "status",
    locator: {
      parts: [],
    },
    excerpts: [
      {
        es: {
          text: 'Estado actual: la Iglesia Luterana–Sínodo de Misuri (LCMS) acepta como confesión todos los símbolos del Libro de Concordia de 1580, que incluye los Artículos de Esmalcalda y el Tratado sobre el poder y el primado del papa (Breve Declaración de 1932, §45: "We accept as our confession all the symbols contained in the Book of Concord of the year 1580"). La Iglesia Evangélica Luterana en América (ELCA) los acepta como "otras interpretaciones válidas de la fe de la Iglesia" (Constitución, cap. 2). En su Breve Declaración de 1932 (§43), la LCMS enseña que las profecías de la Escritura sobre el Anticristo "se han cumplido en el papa de Roma y su dominio" y suscribe "la afirmación de nuestras Confesiones de que el papa es \'el mismo Anticristo\'" (texto en inglés; traducción asistida por IA).',
          edition: "st.es",
          translation: "site-statement",
        },
        note: "ST-LUT-AC: ST-LUT más la frase de la Breve Declaración §43",
      },
    ],
    link: {
      href: "https://www.projectwittenberg.org/etext/lcms/Brief/index.html",
      label: "Leer la Breve Declaración en Project Wittenberg",
    },
  },
  ST1848: {
    id: "ST1848",
    work: "status-st1848",
    kind: "status",
    locator: {
      parts: [],
    },
    excerpts: [
      {
        es: {
          text: "Estado actual: no se encontró una retractación sinodal. El diálogo católico-ortodoxo de Alejandría (2023) la menciona: la presenta como una respuesta contra la supremacía papal. Un artículo de un obispo del Patriarcado Ecuménico la cita, y un comentario de la comisión sinodal del Patriarcado de Moscú (2019) dice que trata del primado; eso no demuestra que cada frase tenga hoy autoridad universal.",
          edition: "st.es",
          translation: "site-statement",
        },
        note: "ST-1848",
      },
    ],
  },
  ST1895: {
    id: "ST1895",
    work: "status-st1895",
    kind: "status",
    locator: {
      parts: [],
    },
    excerpts: [
      {
        es: {
          text: "Estado actual: no se encontró una retractación sinodal. El diálogo católico-ortodoxo de Alejandría (2023) la menciona: la presenta como rechazo de la invitación de León XIII y crítica del uniatismo. Fuentes oficiales ortodoxas todavía la citan, pero eso no demuestra que cada frase tenga hoy autoridad universal.",
          edition: "status-st1895.es",
          translation: "site-statement",
        },
      },
    ],
  },
  T4dec: {
    id: "T4dec",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "IV",
        },
        {
          kind: "locus",
          value: "decreto sobre las Escrituras canónicas",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "perspiciensque hanc veritatem, et disciplinam contineri in libris scriptis, et sine scripto traditionibus, quae ab ipsius Christi ore ab Apostolis acceptae, aut ab ipsis Apostolis, Spiritu Sancto dictante, quasi per manus traditae, ad nos usque pervenerunt; orthodoxorum Patrum exempla secuta, omnes libros tam veteris, quám novi Testamenti, cùm utriusque unus Deus sit auctor; necnon traditiones ipsas, tum ad fidem, tum ad mores pertinentes, tamquam vel oretenus à Christo, vel à Spiritu Sancto dictatas, et continua successione in Ecclesia Catholica conservatas, pari pietatis affectu, ac reverentia suscipit, et veneratur.",
          edition: "ayala.la",
          page: "41",
        },
        es: {
          text: "considerando que esta verdad y disciplina están contenidas en los libros escritos, y en las tradiciones no escritas, que recibidas de boca del mismo Cristo por los Apóstoles, ó enseñadas por los mismos Apóstoles inspirados por el Espíritu Santo, han llegado como de mano en mano hasta nosotros; siguiendo los exemplos de los PP. Católicos, recibe, y venera con igual afecto de piedad y reverencia, todos los libros del viejo y nuevo Testamento, pues Dios es el unico autor de ambos, así como las mencionadas tradiciones pertenecientes á la fe y á las costumbres, como que fueron dictadas verbalmente por Jesu-Cristo, ó por el Espíritu Santo, y conservadas perpetuamente sin interrupcion en la iglesia Católica.",
          edition: "ayala.es",
          page: "41",
          translation: "printed-original",
        },
        en: {
          text: "seeing clearly that this truth and discipline are contained in the written books, and the unwritten traditions which, received by the Apostles from the mouth of Christ Himself, or from the Apostles themselves, the Holy Ghost dictating, have come down even unto us, transmitted as it were from hand to hand; (the Synod) following the examples of the orthodox Fathers, receives and venerates with an equal affection of piety, and reverence, all the books both of the Old and of the New Testament—seeing that one God is the author of both—as also the said traditions, as well those appertaining to faith as to morals…",
          edition: "ayala.en",
          page: "18",
        },
        note: "(latín y español, escaneo);  (OCR)",
      },
      {
        es: {
          text: "promulgó primeramente por su misma boca Jesu-Cristo, Hijo de Dios, y Señor nuestro; mandando despues á sus Apóstoles que lo predicasen á toda criatura como fuente de toda verdad conducente á nuestra salvacion, y regla de costumbres",
          edition: "ayala.es",
          page: "40–41",
          translation: "printed-original",
        },
        note: "Al margen: «Matth. et Marc. ult.» (Mt 28, Mc 16)",
      },
    ],
    date: {
      year: 1546,
      month: 4,
      day: 8,
      unconfirmed: true,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de Ayala (1785) en archive.org",
    },
  },
  T4anat: {
    id: "T4anat",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "IV",
        },
        {
          kind: "locus",
          value: "decreto sobre las Escrituras canónicas",
        },
        {
          kind: "locus",
          value: "anatema",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis autem libros ipsos integros cum omnibus suis partibus, prout in Ecclesia Catholica legi consueverunt, et in veteri Vulgata latina editione habentur, pro sacris, et canonicis non susceperit; et traditiones praedictas sciens, et prudens contempserit; anathema sit.",
          edition: "ayala.la",
          page: "43",
        },
        es: {
          text: "Si alguno pues no reconociere por sagrados, y canónicos estos libros, enteros, con todas sus partes, como ha sido costumbre leerlos en la Iglesia Católica, y se hallan en la antigua version latina llamada Vulgata; y despreciáre á sabiendas y con ánimo deliberado las mencionadas tradiciones; sea excomulgado.",
          edition: "ayala.es",
          page: "43",
          translation: "printed-original",
        },
        en: {
          text: "and knowingly and deliberately contemn the traditions aforesaid; let him be anathema.",
          edition: "ayala.en",
          page: "19",
        },
        note: ", solo el segundo miembro",
      },
    ],
    date: {
      year: 1546,
      month: 4,
      day: 8,
      unconfirmed: true,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de Ayala (1785) en archive.org",
    },
  },
  T4list: {
    id: "T4list",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "IV",
        },
        {
          kind: "locus",
          value: "decreto sobre las Escrituras canónicas",
        },
        {
          kind: "locus",
          value: "lista de los libros",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Tobias, Judith, Hester […] Sapientia, Ecclesiasticus, Isaias, Jeremias cum Baruch […] duo Machabaeorum, primus, et secundus",
          edition: "ayala.la",
          page: "42",
        },
        note: "(latín, escaneo; verificador A8). Lista completa: Ayala pp. 41–43;  pp. 18–19",
      },
    ],
    date: {
      year: 1546,
      month: 4,
      day: 8,
      unconfirmed: true,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de Ayala (1785) en archive.org",
    },
  },
  T4use: {
    id: "T4use",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "IV",
        },
        {
          kind: "locus",
          value: "decreto sobre la edición y el uso de los libros sagrados",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "decernit, ut nemo suae prudentiae innixus, in rebus Fidei, et morum ad aedificationem doctrinae Christianae pertinentium, sacram Scripturam ad suos sensus contorquens, contra eum sensum, quem tenuit, et tenet sancta mater Ecclesia, cujus est judicare de vero sensu, et interpretatione Scripturarum sanctarum, aut etiam contra unanimen [sic] consensum Patrum, ipsam Scripturam sacram interpretari audeat; etiamsi hujusmodi interpretationes nullo unquam tempore in lucem edendae forent.",
          edition: "ayala.la",
          page: "44",
        },
        es: {
          text: "Decreta ademas, con el fin de contener los ingenios insolentes, que ningnno [sic] fiado en su propia sabiduria, se atreva á interpretar la misma sagrada Escritura en cosas pertenecientes á la fe, ó á las costumbres que miran á la propagacion de la doctrina cristiana, violentando la sagrada Escritura para apoyar sus dictámenes, contra el sentido que le ha dado y dá la santa madre Iglesia, á la que privativamente toca determinar el verdadero sentido, é interpretacion de las sagradas letras; ni tampoco contra el unánime consentimiento de los santos PP. aunque en ningun tiempo se hayan de dar á luz estas interpretaciones.",
          edition: "ayala.es",
          page: "44",
          translation: "printed-original",
        },
        en: {
          text: "no one, relying on his own skill, shall,—in matters of faith, and of morals pertaining to the edification of Christian doctrine,—wresting the sacred Scriptures to his own senses, presume to interpret the said sacred Scripture contrary to that sense which holy mother Church,—whose it is to judge of the true sense and interpretation of the holy Scriptures,—hath held and doth hold; or even contrary to the unanimous consent of the Fathers",
          edition: "ayala.en",
          page: "19–20",
        },
        note: "Al margen de Ayala: «Sic Synodus in Trull. c. 19»",
      },
    ],
    date: {
      year: 1546,
      month: 4,
      day: 8,
      unconfirmed: true,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de Ayala (1785) en archive.org",
    },
  },
  T4vulg: {
    id: "T4vulg",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "IV",
        },
        {
          kind: "locus",
          value: "decreto sobre la edición y el uso de los libros sagrados",
        },
      ],
      qualifier: "la Vulgata",
    },
    excerpts: [
      {
        es: {
          text: "Considerando ademas de esto el mismo sacrosanto Concilio, que se podrá seguir mucha utilidad á la Iglesia de Dios, si se declara qué edicion de la sagrada Escritura se ha de tener por autentica entre todas las ediciones latinas que corren; establece y declara, que se tenga por tal en las lecciones públicas, disputas, sermones y exposiciones, esta misma antigua edicion Vulgata, aprobada en la Iglesia por el largo uso de tantos siglos; y que ninguno, por ningun pretexto, se atreva ó presuma despreciarla.",
          edition: "ayala.es",
          page: "43–44",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1546,
      month: 4,
      day: 8,
      unconfirmed: true,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de Ayala (1785) en archive.org",
    },
  },
  T6c8: {
    id: "T6c8",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VI",
        },
        {
          kind: "chapter",
          value: "8",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "en quanto ninguna de las cosas que preceden á la justificacion, sea la fe, ó sean las obras, merecen la gracia de la justificacion: porque si es gracia, ya no proviene de las obras: de otro modo, como dice el Apostol: la gracia no seria gracia",
          edition: "ayala.es",
          page: "75",
          translation: "printed-original",
        },
      },
    ],
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de Ayala (1785) en archive.org",
    },
  },
  T6c20: {
    id: "T6c20",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VI",
        },
        {
          kind: "canon",
          value: "20",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis hominem justificatum, et quantumlibet perfectum dixerit non teneri ad observantiam mandatorum Dei, et Ecclesiae, sed tantùm ad credendum […]; anathema sit",
          edition: "ayala.la",
          page: "96",
        },
        es: {
          text: "Si alguno dixere, que el hombre justificado, por perfecto que sea, no está obligado á observar los mandamientos de Dios y de la Iglesia, sino solo á creer; como si el Evangelio fuese una mera y absoluta promesa de la salvacion eterna sin la condicion de guardar los mandamientos; sea excomulgado.",
          edition: "ayala.es",
          page: "96",
          translation: "printed-original",
        },
        note: ": español leído en el escaneo; latín, en el OCR",
      },
    ],
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de Ayala (1785) en archive.org",
    },
  },
  PFT2: {
    id: "PFT2",
    work: "pft",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "II",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Apostolicas et ecclesiasticas traditiones, reliquasque ejusdem Ecclesiae observationes et constitutiones firmissime admitto et amplector.",
          edition: "pft.la",
          page: "207",
        },
        es: {
          text: "Admito y abrazo firmísimamente las tradiciones apostólicas y eclesiásticas y las demás observancias y constituciones de la misma Iglesia.",
          edition: "pft.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "I most steadfastly admit and embrace apostolic and ecclesiastic traditions, and all other observances and constitutions of the same Church.",
          edition: "pft.en",
          page: "207",
        },
      },
    ],
    date: {
      year: 1564,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PFT3: {
    id: "PFT3",
    work: "pft",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "III",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Item sacram Scripturam juxta eum sensum, quem tenuit et tenet sancta mater Ecclesia, cujus est judicare de vero sensu et interpretatione sacrarum Scripturarum, admitto; nec eam unquam, nisi juxta unanimem consensum patrum accipiam et interpretabor.",
          edition: "pft.la",
          page: "207",
        },
        es: {
          text: "Admito también la sagrada Escritura según el sentido que tuvo y tiene la santa madre Iglesia, a quien corresponde juzgar del verdadero sentido e interpretación de las sagradas Escrituras; y nunca la recibiré ni interpretaré sino según el consentimiento unánime de los Padres.",
          edition: "pft.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "I also admit the holy Scriptures, according to that sense which our holy mother Church has held and does hold, to which it belongs to judge of the true sense and interpretation of the Scriptures; neither will I ever take and interpret them otherwise than according to the unanimous consent of the Fathers.",
          edition: "pft.en",
          page: "207",
        },
      },
    ],
    date: {
      year: 1564,
    },
    link: {
      href: "https://archive.org/details/creedschristendo02scha",
      label: "Ver el escaneo de Schaff en archive.org",
    },
  },
  PF1989: {
    id: "PF1989",
    work: "pf-1989",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "locus",
          value: "primer apartado añadido",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Creo, también, con fe firme, todo aquello que se contiene en la Palabra de Dios escrita o transmitida por la Tradición, y que la Iglesia propone para ser creído, como divinamente revelado, mediante un juicio solemne o mediante el Magisterio ordinario y universal.",
          edition: "cdf98.es",
          translation: "official",
        },
        note: "Como lo imprime la Nota de la Congregación para la Doctrina de la Fe (1998)",
      },
    ],
    date: {
      year: 1989,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_1998_professio-fidei_sp.html",
      label: "Leer en vatican.va",
    },
  },
  DF2rev: {
    id: "DF2rev",
    work: "dei-filius",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "2",
        },
      ],
      qualifier: "la revelación en los libros y las tradiciones",
    },
    excerpts: [
      {
        la: {
          text: "Haec porro supernaturalis revelatio, secundum universalis Ecclesiae fidem, a sancta Tridentina Synodo declaratam, continetur in libris scriptis et sine scripto traditionibus, quae ipsius Christi ore ab Apostolis acceptae, aut ab ipsis Apostolis Spiritu sancto dictante quasi per manus traditae, ad nos usque pervenerunt",
          edition: "df.la",
        },
        es: {
          text: "Esta revelación sobrenatural, según la fe de la Iglesia universal declarada por el santo Sínodo de Trento, se contiene en los libros escritos y en las tradiciones no escritas que, recibidas por los apóstoles de boca del mismo Cristo, o transmitidas como de mano en mano por los mismos apóstoles bajo el dictado del Espíritu Santo, han llegado hasta nosotros",
          edition: "site-translation.dei-filius.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "this supernatural revelation, according to the universal belief of the Church, declared by the sacred Synod of Trent, is contained in the written books and unwritten traditions which have come down to us…",
          edition: "df.en",
          page: "241",
        },
      },
    ],
    date: {
      year: 1870,
      month: 4,
      day: 24,
    },
    link: {
      href: "https://www.vatican.va/content/pius-ix/la/documents/constitutio-dogmatica-dei-filius-24-aprilis-1870.html",
      label: "Leer en vatican.va",
    },
  },
  DF2can: {
    id: "DF2can",
    work: "dei-filius",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "2",
        },
      ],
      qualifier: "por qué los libros son canónicos",
    },
    excerpts: [
      {
        la: {
          text: "Eos vero Ecclesia pro sacris et canonicis habet, non ideo quod sola humana industria concinnati, sua deinde auctoritate sint approbati; nec ideo dumtaxat, quod revelationem sine errore contineant; sed propterea quod Spiritu Sancto inspirante conscripti Deum habent auctorem, atque ut tales ipsi Ecclesiae traditi sunt.",
          edition: "df.la",
        },
        es: {
          text: "La Iglesia los tiene por sagrados y canónicos no porque, compuestos por solo ingenio humano, hayan sido después aprobados por su autoridad; ni solamente porque contengan la revelación sin error; sino porque, escritos por inspiración del Espíritu Santo, tienen a Dios por autor, y como tales han sido entregados a la Iglesia.",
          edition: "site-translation.dei-filius.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "These the Church holds to be sacred and canonical, not because, having been carefully composed by mere human industry, they were afterwards approved by her authority, nor merely because they contain revelation, with no admixture of error; but because, having been written by the inspiration of the Holy Ghost, they have God for their author, and have been delivered as such to the Church herself.",
          edition: "df.en",
          page: "242",
        },
      },
    ],
    date: {
      year: 1870,
      month: 4,
      day: 24,
    },
    link: {
      href: "https://www.vatican.va/content/pius-ix/la/documents/constitutio-dogmatica-dei-filius-24-aprilis-1870.html",
      label: "Leer en vatican.va",
    },
  },
  DF2int: {
    id: "DF2int",
    work: "dei-filius",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "2",
        },
      ],
      qualifier: "la interpretación",
    },
    excerpts: [
      {
        la: {
          text: "Nos, idem Decretum renovantes, hanc illius mentem esse declaramus, ut in rebus fidei et morum, ad aedificationem doctrinae Christianae pertinentium, is pro vero sensu sacrae Scripturae habendus sit, quem tenuit ac tenet Sancta Mater Ecclesia, cuius est iudicare de vero sensu et interpretatione Scripturarum sanctarum; atque ideo nemini licere contra hunc sensum, aut etiam contra unanimem consensum Patrum ipsam Scripturam sacram interpretari.",
          edition: "df.la",
        },
        es: {
          text: "Nos, renovando el mismo decreto, declaramos que su sentido es este: que en las cosas de fe y costumbres que pertenecen a la edificación de la doctrina cristiana, ha de tenerse por verdadero sentido de la sagrada Escritura aquel que tuvo y tiene la santa madre Iglesia, a quien corresponde juzgar del verdadero sentido e interpretación de las santas Escrituras; y que, por tanto, a nadie es lícito interpretar la misma sagrada Escritura contra este sentido, ni tampoco contra el consentimiento unánime de los Padres.",
          edition: "site-translation.dei-filius.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "we, renewing the said decree, declare this to be their sense, that, in matters of faith and morals, appertaining to the building up of Christian doctrine, that is to be held as the true sense of Holy Scripture which our holy Mother Church hath held and holds…",
          edition: "df.en",
          page: "242",
        },
      },
    ],
    date: {
      year: 1870,
      month: 4,
      day: 24,
    },
    link: {
      href: "https://www.vatican.va/content/pius-ix/la/documents/constitutio-dogmatica-dei-filius-24-aprilis-1870.html",
      label: "Leer en vatican.va",
    },
  },
  DF4: {
    id: "DF4",
    work: "dei-filius",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "chapter",
          value: "4",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Neque enim fidei doctrina, quam Deus revelavit, velut philosophicum inventum proposita est humanis ingeniis perficienda, sed tamquam divinum depositum Christi Sponsae tradita, fideliter custodienda et infallibiliter declaranda. Hinc sacrorum quoque dogmatum is sensus perpetuo est retinendus, quem semel declaravit Sancta Mater Ecclesia […] Crescat igitur et multum vehementerque proficiat […] intelligentia, scientia, sapientia; sed in suo dumtaxat genere, in eodem scilicet dogmate, eodem sensu, eademque sententia (Vine. [sic: Vinc.] Lir. Common, n. 28).",
          edition: "df.la",
          page: "250–251",
        },
        es: {
          text: "Porque la doctrina de la fe que Dios ha revelado no ha sido propuesta como un hallazgo filosófico que el ingenio humano deba perfeccionar, sino entregada como depósito divino a la Esposa de Cristo, para ser custodiada fielmente y declarada infaliblemente. Por eso también ha de conservarse siempre aquel sentido de los sagrados dogmas que la santa madre Iglesia declaró una vez […]",
          edition: "site-translation.dei-filius.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "For the doctrine of faith which God hath revealed has not been proposed, like a philosophical invention, to be perfected by human ingenuity, but has been delivered as a divine deposit to the Spouse of Christ, to be faithfully kept and infallibly declared.",
          edition: "df.en",
          page: "250–251",
        },
        note: "Inglés: , solo la primera frase",
      },
    ],
    date: {
      year: 1870,
      month: 4,
      day: 24,
    },
    link: {
      href: "https://www.vatican.va/content/pius-ix/la/documents/constitutio-dogmatica-dei-filius-24-aprilis-1870.html",
      label: "Leer en vatican.va",
    },
  },
  DFcII4: {
    id: "DFcII4",
    work: "dei-filius",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "II.4",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis sacrae Scripturae libros integros cum omnibus suis partibus, prout illos sancta Tridentina Synodus recensuit, pro sacris et canonicis non susceperit, aut eos divinitus inspíralos [sic: inspiratos] esse negaverit; anathema sit.",
          edition: "df.la",
        },
        es: {
          text: "Si alguno no recibe como sagrados y canónicos los libros de la sagrada Escritura, íntegros con todas sus partes, tal como los enumeró el santo Sínodo de Trento, o niega que hayan sido divinamente inspirados, sea anatema.",
          edition: "site-translation.dei-filius.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "If any one shall not receive as sacred and canonical the books of Holy Scripture, entire with all their parts, as the holy Synod of Trent has enumerated them, or shall deny that they have been divinely inspired: let him be anathema.",
          edition: "df.en",
          page: "253",
        },
      },
    ],
    date: {
      year: 1870,
      month: 4,
      day: 24,
    },
    link: {
      href: "https://www.vatican.va/content/pius-ix/la/documents/constitutio-dogmatica-dei-filius-24-aprilis-1870.html",
      label: "Leer en vatican.va",
    },
  },
  DFcIV3: {
    id: "DFcIV3",
    work: "dei-filius",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "IV.3",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, fieri posse, ut dogmatibus ab Ecclesia propositis, aliquando secundum progressum scientiae sensus tribuendus sit alius ab eo, quem intellexit et intelligit Ecclesia; anathema sit.",
          edition: "df.la",
        },
        en: {
          text: "If any one shall assert it to be possible that sometimes, according to the progress of science, a sense is to be given to doctrines propounded by the Church different from that which the Church has understood and understands: let him be anathema.",
          edition: "df.en",
          page: "255",
        },
      },
    ],
    date: {
      year: 1870,
      month: 4,
      day: 24,
    },
    link: {
      href: "https://www.vatican.va/content/pius-ix/la/documents/constitutio-dogmatica-dei-filius-24-aprilis-1870.html",
      label: "Leer en vatican.va",
    },
  },
  DV4: {
    id: "DV4",
    work: "dei-verbum",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "4",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "no hay que esperar ya ninguna revelación pública antes de la gloriosa manifestación de nuestro Señor Jesucristo",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1965,
      month: 11,
      day: 18,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  DV5: {
    id: "DV5",
    work: "dei-verbum",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "5",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "es necesaria la gracia de Dios, que proviene y ayuda, a [sic] los auxilios internos del Espíritu Santo, el cual mueve el corazón y lo convierte a Dios, abre los ojos de la mente y da «a todos la suavidad en el aceptar y creer la verdad»",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1965,
      month: 11,
      day: 18,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  DV7: {
    id: "DV7",
    work: "dei-verbum",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "7",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Por ello Cristo Señor, en quien se consuma la revelación total del Dios sumo, mandó a los Apóstoles que predicaran a todos los hombres el Evangelio, comunicándoles los dones divinos. Este Evangelio, prometido antes por los Profetas, lo completó El y lo promulgó con su propia boca, como fuente de toda la verdad salvadora y de la ordenación de las costumbres. Lo cual fue realizado fielmente, tanto por los Apóstoles, que en la predicación oral comunicaron con ejemplos e instituciones lo que habían recibido por la palabra, por la convivencia y por las obras de Cristo, o habían aprendido por la inspiración del Espíritu Santo, como por aquellos Apóstoles y varones apostólicos que, bajo la inspiración del mismo Espíritu, escribieron el mensaje de la salvación. Mas para que el Evangelio se conservara constantemente íntegro y vivo en la Iglesia, los Apóstoles dejaron como sucesores suyos a los Obispos, «entregándoles su propio cargo del magisterio».",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Notas: Mt 28:19-20; Mc 16:15; Trento, ses. IV (Denzinger 783 (1501)); Dei Filius, cap. 2 (Denzinger 1787 (3005)); Ireneo, Adv. haer. III, 3, 1, para «entregándoles su propio cargo del magisterio»",
      },
    ],
    date: {
      year: 1965,
      month: 11,
      day: 18,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  DV8: {
    id: "DV8",
    work: "dei-verbum",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "8",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "De ahí que los Apóstoles, comunicando lo que de ellos mismos han recibido, amonestan a los fieles que conserven las tradiciones que han aprendido o de palabra o por escrito, y que sigan combatiendo por la fe que se les ha dado una vez para siempre",
          edition: "vat2.es",
          translation: "official",
        },
        note: "La página en inglés da las referencias: 2 Tes 2:15; Judas 3",
      },
      {
        es: {
          text: "lo que enseñaron los Apóstoles encierra todo lo necesario para que el Pueblo de Dios viva santamente y aumente su fe, y de esta forma la Iglesia, en su doctrina, en su vida y en su culto perpetúa y transmite a todas las generaciones todo lo que ella es, todo lo que cree.",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "Esta Tradición, que deriva de los Apóstoles, progresa en la Iglesia con la asistencia del Espíritu Santo: puesto que va creciendo en la comprensión de las cosas y de las palabras transmitidas, ya por la contemplación y el estudio de los creyentes, que las meditan en su corazón y, ya por la percepción íntima que experimentan de las cosas espirituales, ya por el anuncio de aquellos que con la sucesión del episcopado recibieron el carisma cierto de la verdad.",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Nota 5: Dei Filius, cap. 4, Denzinger 1800 (3020)",
      },
      {
        es: {
          text: "las enseñanzas de los Santos Padres testifican la presencia viva de esta tradición",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "Por esta Tradición conoce la Iglesia el Canon íntegro de los libros sagrados, y la misma Sagrada Escritura se va conociendo en ella más a fondo y se hace incesantemente operativa",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "que la palabra de Cristo habite en ellos abundantemente",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Con Colosenses 3:16",
      },
    ],
    date: {
      year: 1965,
      month: 11,
      day: 18,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  DV9: {
    id: "DV9",
    work: "dei-verbum",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "9",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "quo fit ut Ecclesia certitudinem suam de omnibus revelatis non per solam Sacram Scripturam hauriat. Quapropter utraque pari pietatis affectu ac reverentia suscipienda et veneranda est.",
          edition: "vat2.la",
        },
        es: {
          text: "de donde se sigue que la Iglesia no deriva solamente de la Sagrada Escritura su certeza acerca de todas las verdades reveladas. Por eso se han de recibir y venerar ambas con un mismo espíritu de piedad.",
          edition: "vat2.es",
          translation: "official",
        },
        en: {
          text: "Consequently it is not from Sacred Scripture alone that the Church draws her certainty about everything which has been revealed. Therefore both sacred tradition and Sacred Scripture are to be accepted and venerated with the same sense of loyalty and reverence.",
          edition: "vat2.en",
        },
        note: "«pari pietatis affectu ac reverentia» son palabras de Trento (ses. IV); la nota de DV 9 cita «Council of Trent, session IV, loc. cit.: Denzinger 783 (1501)»",
      },
      {
        es: {
          text: "Así, pues, la Sagrada Tradición y la Sagrada Escritura están íntimamente unidas y compenetradas. Porque surgiendo ambas de la misma divina fuente, se funden en cierto modo y tienden a un mismo fin. Ya que la Sagrada Escritura es la palabra de Dios en cuanto se consigna por escrito bajo la inspiración del Espíritu Santo, y la Sagrada Tradición transmite íntegramente a los sucesores de los Apóstoles la palabra de Dios, a ellos confiada por Cristo Señor y por el Espíritu Santo para que, con la luz del Espíritu de la verdad la guarden fielmente, la expongan y la difundan con su predicación",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1965,
      month: 11,
      day: 18,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  DV10: {
    id: "DV10",
    work: "dei-verbum",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "10",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La Sagrada Tradición, pues, y la Sagrada Escritura constituyen un solo depósito sagrado de la palabra de Dios, confiado a la Iglesia; fiel a este depósito todo el pueblo santo, unido con sus pastores en la doctrina de los Apóstoles y en la comunión, persevera constantemente en la fracción del pan y en la oración (cf. Hch 2,42), de suerte que prelados y fieles colaboran estrechamente en la conservación, en el ejercicio y en la profesión de la fe recibida.",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Primer párrafo",
      },
      {
        la: {
          text: "Quod quidem Magisterium non supra verbum Dei est, sed eidem ministrat, docens nonnisi quod traditum est",
          edition: "vat2.la",
        },
        es: {
          text: "Pero el oficio de interpretar auténticamente la palabra de Dios escrita o transmitida ha sido confiado únicamente al Magisterio vivo de la Iglesia, cuya autoridad se ejerce en el nombre de Jesucristo. Este Magisterio, evidentemente, no está sobre la palabra de Dios, sino que la sirve, enseñando solamente lo que le ha sido confiado, por mandato divino y con la asistencia del Espíritu Santo la oye con piedad, la guarda con exactitud y la expone con fidelidad, y de este único depósito de la fe saca todo lo que propone como verdad revelada por Dios que se ha de creer. Es evidente, por tanto, que la Sagrada Tradición, la Sagrada Escritura y el Magisterio de la Iglesia, según el designio sapientísimo de Dios, están entrelazados y unidos de tal forma que no tiene consistencia el uno sin el otro, y que, juntos, cada uno a su modo, bajo la acción del Espíritu Santo, contribuyen eficazmente a la salvación de las almas.",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Notas: Dei Filius, cap. 3 (Denzinger 1792 (3011)); Humani generis (Denzinger 2314 (3886))",
      },
    ],
    date: {
      year: 1965,
      month: 11,
      day: 18,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  DV11: {
    id: "DV11",
    work: "dei-verbum",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "11",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "la santa Madre Iglesia, según la fe apostólica, tiene por santos y canónicos los libros enteros del Antiguo y Nuevo Testamento con todas sus partes, porque, escritos bajo la inspiración del Espíritu Santo, tienen a Dios como autor y como tales se le han entregado a la misma Iglesia. Pero en la redacción de los libros sagrados, Dios eligió a hombres, que utilizó usando de sus propias facultades y medios, de forma que obrando El en ellos y por ellos, escribieron, como verdaderos autores, todo y sólo lo que El quería.",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Pasajes citados (página en inglés): Jn 20:31; 2 Tim 3:16; 2 Pe 1:19-20; 3:15-16",
      },
      {
        la: {
          text: "firmiter, fideliter et sine errore docere profitendi sunt",
          edition: "vat2.la",
        },
        es: {
          text: "Pues, como todo lo que los autores inspirados o hagiógrafos afirman, debe tenerse como afirmado por el Espíritu Santo, hay que confesar que los libros de la Escritura enseñan firmemente, con fidelidad y sin error, la verdad que Dios quiso consignar en las sagradas letras para nuestra salvación.",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Nota 4: Providentissimus Deus, «Denzinger 1952 (3293)»",
      },
      {
        es: {
          text: "toda la Escritura es divinamente inspirada y útil para enseñar, para argüir, para corregir, para educar en la justicia, a fin de que el hombre de Dios sea perfecto y equipado para toda obra buena",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Con 2 Timoteo 3:16-17; citado entero en la respuesta a OB-2 desde el 2026-10-21",
      },
    ],
    date: {
      year: 1965,
      month: 11,
      day: 18,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  DV12: {
    id: "DV12",
    work: "dei-verbum",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "12",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "para que el intérprete de la Sagrada Escritura comprenda lo que El quiso comunicarnos, debe investigar con atención lo que pretendieron expresar realmente los hagiógrafos y plugo a Dios manifestar con las palabras de ellos. Para descubrir la intención de los hagiógrafos, entre otras cosas hay que atender a «los géneros literarios». […] Y como la Sagrada Escritura hay que leerla e interpretarla con el mismo Espíritu con que se escribió para sacar el sentido exacto de los textos sagrados, hay que atender no menos diligentemente al contenido y a la unidad de toda la Sagrada Escritura, teniendo en cuanta [sic] la Tradición viva de toda la Iglesia y la analogía de la fe. […] Por que todo lo que se refiere a la interpretación de la Sagrada Escritura, está sometido en última instancia a la Iglesia, que tiene el mandato y el ministerio divino de conservar y de interpretar la palabra de Dios.",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Notas: Divino afflante Spiritu (Denzinger 2294 (3829-3830)); nota 10: Denzinger 1788 (3007)",
      },
    ],
    date: {
      year: 1965,
      month: 11,
      day: 18,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  DV21: {
    id: "DV21",
    work: "dei-verbum",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "21",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Eas una cum Sacra Traditione semper ut supremam fidei suae regulam habuit et habet",
          edition: "vat2.la",
        },
        es: {
          text: "la Iglesia ha venerado siempre las Sagradas Escrituras al igual que el mismo Cuerpo del Señor, no dejando de tomar de la mesa y de distribuir a los fieles el pan de vida, tanto de la palabra de Dios como del Cuerpo de Cristo, sobre todo en la Sagrada Liturgia. Siempre las ha considerado y considera, juntamente con la Sagrada Tradición, como la regla suprema de su fe, puesto que, inspiradas por Dios y escritas de una vez para siempre, comunican inmutablemente la palabra del mismo Dios […] Es necesario, por consiguiente, que toda la predicación eclesiástica, como la misma religión cristiana, se nutra de la Sagrada Escritura, y se rija por ella.",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1965,
      month: 11,
      day: 18,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  DV22: {
    id: "DV22",
    work: "dei-verbum",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "22",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Es conveniente que los cristianos tengan amplio acceso ala [sic] Sagrada Escritura. […] la Iglesia procura, con solicitud materna, que se redacten traducciones aptas y fieles en varias lenguas, sobre todo de los textos primitivos de los sagrados libros. Y si estas traducciones, oportunamente y con el beneplácito de la Autoridad de la Iglesia, se llevan a cabo incluso con la colaboración de los hermanos separados, podrán usarse por todos los cristianos.",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "ya desde sus principios, tomó como suya la antiquísima versión griega del Antiguo Testamento, llamada de los Setenta",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1965,
      month: 11,
      day: 18,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  DV24: {
    id: "DV24",
    work: "dei-verbum",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "24",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "el estudio de la Sagrada Escritura ha de ser como el alma de la Sagrada Teología",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1965,
      month: 11,
      day: 18,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  DV25: {
    id: "DV25",
    work: "dei-verbum",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "25",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«Porque el desconocimiento de las Escrituras es desconocimiento de Cristo»",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Nota: san Jerónimo, Comentario a Isaías, prólogo (escrito entre 408 y 410, según la introducción de T. P. Scheck, 2015)",
      },
      {
        es: {
          text: "a todos los cristianos […] lectura frecuente de las divinas Escrituras",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Fragmentos que cita la respuesta a OB-7",
      },
    ],
    date: {
      year: 1965,
      month: 11,
      day: 18,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  UR21: {
    id: "UR21",
    work: "ur",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "21",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "At cum Christiani a nobis seiuncti auctoritatem divinam Sacrorum Librorum affirmant, aliter ac nos -diversi quidem diverse- sentiunt de habitudine Scripturas inter et Ecclesiam, in qua secundum fidem catholicam magisterium authenticum peculiarem obtinet locum in verbo Dei scripto exponendo et praedicando.",
          edition: "vat2.la",
        },
        es: {
          text: "El amor y la veneración y casi culto a las Sagradas Escrituras conducen a nuestros hermanos separados el estudio constante y solícito de la Biblia, pues el Evangelio «es poder de Dios para la salud de todo el que cree, del judío primero, pero también del griego» (Rom., 1,16). Invocando al Espíritu Santo, buscan en las Escrituras a Dios, que, en cierto modo, les habla en Cristo, preanunciado por los profetas, Verbo de Dios encarnado por nosotros. En ellas contemplan la vida de Cristo y cuanto el divino Maestro enseñó y realizó para la salvación de los hombres, sobre todo los misterios de su muerte y de su resurrección. Pero cuando los hermanos separados reconocen la autoridad divina de los sagrados libros sienten -cada uno a su manera- diversamente de nosotros en cuanto a la relación entre las Escrituras y la Iglesia, en la cual, según la fe católica, el magisterio auténtico tiene un lugar especial en orden a la exposición y predicación de la palabra de Dios escrita. Sin embargo, las Sagradas Escrituras son, en el diálogo mismo, instrumentos preciosos en la mano poderosa de Dios para lograr aquella unidad que el Salvador presenta a todos los hombres.",
          edition: "vat2.es",
          translation: "official",
        },
        en: {
          text: 'A love and reverence of Sacred Scripture which might be described as devotion, leads our brethren to a constant meditative study of the sacred text. For the Gospel "is the power of God for salvation to every one who has faith, to the Jew first and then to the Greek". While invoking the Holy Spirit, they seek in these very Scriptures God as it were speaking to them in Christ, Whom the prophets foretold, Who is the Word of God made flesh for us. They contemplate in the Scriptures the life of Christ and what the Divine Master taught and did for our salvation, especially the mysteries of His death and resurrection. But while the Christians who are separated from us hold the divine authority of the Sacred Books, they differ from ours - some in one way, some in another - regarding the relationship between Scripture and the Church. For, according to Catholic belief, the authentic teaching authority of the Church has a special place in the interpretation and preaching of the written word of God. But Sacred Scriptures provide for the work of dialogue an instrument of the highest value in the mighty hand of God for the attainment of that unity which the Saviour holds out to all.',
          edition: "vat2.en",
        },
        note: "Artículo entero en español y en inglés; el latín, solo el tercer párrafo",
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_unitatis-redintegratio_sp.html",
      label: "Leer en vatican.va",
    },
  },
  UUS79: {
    id: "UUS79",
    work: "uus",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "79",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "las relaciones entre la sagrada Escritura, suprema autoridad en materia de fe, y la sagrada Tradición, interpretación indispensable de la palabra de Dios",
          edition: "uus.es",
          translation: "official",
        },
        en: {
          text: "the relationship between Sacred Scripture, as the highest authority in matters of faith, and Sacred Tradition, as indispensable to the interpretation of the Word of God",
          edition: "uus.en",
        },
        note: "Es la primera de cinco «areas in need of fuller study before a true consensus of faith can be achieved»",
      },
    ],
    date: {
      year: 1995,
      month: 5,
      day: 25,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_25051995_ut-unum-sint.html",
      label: "Leer en vatican.va",
    },
  },
  DH10: {
    id: "DH10",
    work: "dh",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "10",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "el hombre, al creer, debe responder voluntariamente a Dios, y que, por tanto, nadie debe ser forzado a abrazar la fe contra su voluntad",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1965,
      month: 12,
      day: 7,
    },
  },
  SC7: {
    id: "SC7",
    work: "sc",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "7",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Está presente en el sacrificio de la Misa, sea en la persona del ministro, […] sea sobre todo bajo las especies eucarísticas. Está presente con su fuerza en los Sacramentos […] Está presente en su palabra […] Está presente, por último, cuando la Iglesia suplica y canta salmos",
          edition: "sc.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1963,
      month: 12,
      day: 4,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  SC24: {
    id: "SC24",
    work: "sc",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "24",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "la importancia de la Sagrada Escritura es sumamente grande",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "penetrados",
          edition: "vat2.es",
          translation: "official",
        },
        note: "Las oraciones e himnos «penetrados» de la Escritura",
      },
    ],
    date: {
      year: 1963,
      month: 12,
      day: 4,
    },
  },
  SC35: {
    id: "SC35",
    work: "sc",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "35",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "más abundante, más variada y más apropiada",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1963,
      month: 12,
      day: 4,
    },
  },
  SC51: {
    id: "SC51",
    work: "sc",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "51",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "se lean al pueblo las partes más significativas de la Sagrada Escritura",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1963,
      month: 12,
      day: 4,
    },
  },
  CEC66: {
    id: "CEC66",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "66",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "ni hay que esperar otra revelación pública…",
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita de Dei Verbum 4 en otro español oficial",
      },
      {
        en: {
          text: "no new public revelation is to be expected before the glorious manifestation of our Lord Jesus Christ",
          edition: "cec.en",
        },
      },
      {
        en: {
          text: "Yet even if Revelation is already complete, it has not been made completely explicit",
          edition: "cec.en",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
  },
  CEC76: {
    id: "CEC76",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "76",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La transmisión del Evangelio, según el mandato del Señor, se hizo de dos maneras: — oralmente: 'los Apóstoles, con su predicación, sus ejemplos, sus instituciones, transmitieron de palabra lo que habían aprendido de las obras y palabras de Cristo y lo que el Espíritu Santo les enseñó'; — por escrito: 'los mismos Apóstoles y los varones apostólicos pusieron por escrito el mensaje de la salvación inspirados por el Espíritu Santo'",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["Cita Dei Verbum 7"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC80: {
    id: "CEC80",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "80",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC82: {
    id: "CEC82",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "82",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "no saca exclusivamente de la Escritura la certeza de todo lo revelado. Y así las dos se han de recibir y respetar con el mismo espíritu de devoción",
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita de Dei Verbum 9",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC83: {
    id: "CEC83",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "83",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La Tradición de que hablamos aquí es la que viene de los apóstoles y transmite lo que éstos recibieron de las enseñanzas y del ejemplo de Jesús y lo que aprendieron por el Espíritu Santo. […] Es preciso distinguir de ella las «tradiciones» teológicas, disciplinares, litúrgicas o devocionales nacidas en el transcurso del tiempo en las Iglesias locales. […] Sólo a la luz de la gran Tradición aquéllas pueden ser mantenidas, modificadas o también abandonadas bajo la guía del Magisterio de la Iglesia.",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "la primera generación de cristianos no tenía aún un Nuevo Testamento escrito, y el Nuevo Testamento mismo atestigua el proceso de la Tradición viva.",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC84: {
    id: "CEC84",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "84",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "contenido en la sagrada Tradición y en la sagrada Escritura fue confiado por los Apóstoles al conjunto de la Iglesia",
          edition: "cec.es",
          translation: "official",
        },
        note: "Sobre «el depósito» de la fe; fragmento que cita la respuesta a OB-1",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC87: {
    id: "CEC87",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "87",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los fieles, recordando la palabra de Cristo a sus Apóstoles: «El que a vosotros escucha a mí me escucha» (Lc 10,16; cf. LG 20), reciben con docilidad las enseñanzas y directrices que sus pastores les dan de diferentes formas.",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC9193: {
    id: "CEC9193",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "91–93",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La totalidad de los fieles […] no puede equivocarse en la fe",
          edition: "cec.es",
          translation: "official",
        },
        note: "n. 92, citando Lumen gentium 12",
      },
      {
        es: {
          text: "el Pueblo de Dios, bajo la dirección del Magisterio [...], se adhiere indefectiblemente a la fe transmitida a los santos de una vez para siempre",
          edition: "cec.es",
          translation: "official",
        },
        at: "n. 93",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC92: {
    id: "CEC92",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "92",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "la totalidad de los fieles [...] no puede equivocarse en la fe",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "desde los obispos hasta el último de los laicos cristianos",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "su consentimiento en cuestiones de fe y de moral",
          edition: "cec.es",
          translation: "official",
        },
        note: "Fragmentos que cita la respuesta a OB-5; el Catecismo cita Lumen gentium 12",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC94: {
    id: "CEC94",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "94",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Divina eloquia cum legente crescunt («la comprensión de las palabras divinas crece con su reiterada lectura», San Gregorio Magno, Homiliae in Ezechielem, 1,7,8)",
          edition: "cec.es",
          translation: "official",
        },
        note: "Gregorio Magno, Homilías sobre Ezequiel, años 590 (archivo neutral de escritores latinos, §2.19)",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC95: {
    id: "CEC95",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "95",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La santa Tradición, la sagrada Escritura y el Magisterio de la Iglesia, según el plan prudente de Dios, están unidos y ligados, de modo que ninguno puede subsistir sin los otros",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC104: {
    id: "CEC104",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "104",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC105: {
    id: "CEC105",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "105",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Dios es el autor de la Sagrada Escritura",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "La santa madre Iglesia, según la fe de los Apóstoles, reconoce que todos los libros del Antiguo y del Nuevo Testamento, con todas sus partes, son sagrados y canónicos, en cuanto que, escritos por inspiración del Espíritu Santo, tienen a Dios como autor, y como tales han sido confiados a la Iglesia",
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita de Dei Verbum 11 en la redacción del Catecismo",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC107: {
    id: "CEC107",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "107",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los libros inspirados enseñan la verdad",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC108: {
    id: "CEC108",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "108",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Sin embargo, la fe cristiana no es una «religión del Libro». El cristianismo es la religión de la «Palabra» de Dios, «no de un verbo escrito y mudo, sino del Verbo encarnado y vivo» (San Bernardo de Claraval […]). Para que las Escrituras no queden en letra muerta, es preciso que Cristo, Palabra eterna del Dios vivo, por el Espíritu Santo, nos abra el espíritu a la inteligencia de las mismas (cf. Lc 24, 45).",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC112: {
    id: "CEC112",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "112–118",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Todos los sentidos de la Sagrada Escritura se fundan sobre el sentido literal",
          edition: "cec.es",
          translation: "official",
        },
        note: "n. 116, santo Tomás",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC113: {
    id: "CEC113",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "113",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Según un adagio de los Padres, Sacra Scriptura pincipalius [sic: principalius] est in corde Ecclesiae quam in materialibus instrumentis scripta («La sagrada Escritura está más en el corazón de la Iglesia que en la materialidad de los libros escritos»). En efecto, la Iglesia encierra en su Tradición la memoria viva de la Palabra de Dios, y el Espíritu Santo le da la interpretación espiritual de la Escritura (…secundum spiritualem sensum quem Spiritus donat Ecclesiae [Orígenes, Homiliae in Leviticum, 5,5]).",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC114: {
    id: "CEC114",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "114",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC119: {
    id: "CEC119",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "119",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Ego vero Evangelio non crederem, nisi me catholicae Ecclesiae commoveret auctoritas",
          edition: "cec.la",
        },
        es: {
          text: "No creería en el Evangelio, si no me moviera a ello la autoridad de la Iglesia católica",
          edition: "cec.es",
          translation: "official",
        },
        en: {
          text: "But I would not believe in the Gospel, had not the authority of the Catholic Church already moved me.",
          edition: "cec.en",
        },
        note: "San Agustín, Contra epistulam Manichaei quam vocant fundamenti 5, 6, como lo imprime el Catecismo; obra del año 396 (BiblIndex, CSEL 25.1; etiquetas abiertas, fila 5)",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC120: {
    id: "CEC120",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "120",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La Tradición apostólica hizo discernir a la Iglesia qué escritos constituyen la lista de los Libros Santos (cf. DV 8,3). Esta lista integral es llamada «canon» de las Escrituras. Comprende para el Antiguo Testamento 46 escritos (45 si se cuentan Jr y Lm como uno solo), y 27 para el Nuevo (cf. Decretum Damasi: DS 179; Concilio de Florencia, año 1442: ibíd., 1334-1336; Concilio de Trento: ibíd., 1501-1504)",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "Tobías, Judit, Ester, los dos libros de los Macabeos […] la Sabiduría, el Eclesiástico […] Baruc",
          edition: "cec.es",
          translation: "official",
        },
        note: "Fragmentos de la lista que cita la respuesta a OB-6",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC121: {
    id: "CEC121",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "121",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Antiguo Testamento es una parte de la sagrada Escritura de la que no se puede prescindir. Sus libros son divinamente inspirados y conservan un valor permanente",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC127: {
    id: "CEC127",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "127",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "la veneración de que lo rodea la liturgia",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC133: {
    id: "CEC133",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "133",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "pues desconocer la Escritura es desconocer a Cristo",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC138: {
    id: "CEC138",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "138",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "los cuarenta y seis libros del Antiguo Testamento y los veintisiete del Nuevo",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC171: {
    id: "CEC171",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "171",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La Iglesia, que es «columna y fundamento de la verdad» (1 Tm 3,15), guarda fielmente «la fe transmitida a los santos de una vez para siempre» (cf. Judas 3).",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
  },
  CEC2041: {
    id: "CEC2041",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "2041",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los mandamientos de la Iglesia se sitúan en la línea de una vida moral referida a la vida litúrgica y que se alimenta de ella. El carácter obligatorio de estas leyes positivas promulgadas por la autoridad eclesiástica tiene por fin garantizar a los fieles el mínimo indispensable en el espíritu de oración y en el esfuerzo moral, en el crecimiento del amor de Dios y del prójimo",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p3s1c3a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC2181: {
    id: "CEC2181",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "2181",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "los fieles están obligados a participar en la Eucaristía los días de precepto, a no ser que estén excusados por una razón seria (por ejemplo, enfermedad, el cuidado de niños pequeños) o dispensados por su pastor propio (cf CIC can. 1245). Los que deliberadamente faltan a esta obligación cometen un pecado grave",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p3s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC2653: {
    id: "CEC2653",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "2653–2654",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "recomienda insistentemente a todos sus fieles […] la lectura asidua de la Escritura",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "pues a Dios hablamos cuando oramos, a Dios escuchamos cuando leemos sus palabras",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p4s1c2a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC760: {
    id: "CIC760",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "760",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "se debe fundar en la sagrada Escritura, en la Tradición, en la liturgia, en el magisterio y en la vida de la Iglesia",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro3_cann756-761_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC767: {
    id: "CIC767",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "767",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "partiendo del texto sagrado, los misterios de la fe y las normas de vida cristiana",
          edition: "cic.es",
          translation: "official",
        },
        at: "§1",
      },
      {
        es: {
          text: "debe haber homilía, y no se puede omitir sin causa grave",
          edition: "cic.es",
          translation: "official",
        },
        at: "§2",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro3_cann762-772_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC825: {
    id: "CIC825",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "825",
        },
        {
          kind: "section",
          value: "1",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "vayan acompañadas de las notas aclaratorias necesarias y suficientes",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro3_cann822-832_sp.html",
      label: "Leer en vatican.va",
    },
  },
  DVER17: {
    id: "DVER17",
    work: "donum-veritatis",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "17",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Las decisiones magisteriales en materia de disciplina, aunque no estén garantizadas por el carisma de la infalibilidad, no están desprovistas de la asistencia divina y requieren la adhesión de los fieles.",
          edition: "dver.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1990,
      month: 5,
      day: 24,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19900524_theologian-vocation_sp.html",
      label: "Leer en vatican.va",
    },
  },
  PD: {
    id: "PD",
    work: "providentissimus",
    kind: "source",
    locator: {
      parts: [],
    },
    excerpts: [
      {
        es: {
          text: "lo que de ninguna manera puede hacerse es limitar la inspiración a solas algunas partes de las Escrituras o conceder que el autor sagrado haya cometido error.",
          edition: "pd.es",
          translation: "official",
        },
        en: {
          text: "it is absolutely wrong and forbidden, either to narrow inspiration to certain parts only of Holy Scripture, or to admit that the sacred writer has erred.",
          edition: "pd.en",
        },
        note: "es n. 45; en n. 20",
      },
    ],
    date: {
      year: 1893,
      month: 11,
      day: 18,
    },
    link: {
      href: "https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_18111893_providentissimus-deus.html",
      label: "Leer en vatican.va",
    },
  },
  DAS: {
    id: "DAS",
    work: "divino-afflante",
    kind: "source",
    locator: {
      parts: [],
    },
    excerpts: [
      {
        es: {
          text: "solamente se refiere a la Iglesia latina y al uso público de la misma Escritura, y no disminuye, sin género de duda, en modo alguno, la autoridad y valor de los textos originales […] no se llama con nombre primario crítica, sino más bien jurídica",
          edition: "das.es",
          translation: "official",
        },
        at: "n. 14 (es)",
      },
      {
        es: {
          text: "que la misma está en absoluto inmune de todo error en materia de fe y costumbres […] de ninguna manera prohíbe —antes por el contrario, hoy más bien exige— que esta misma doctrina se compruebe y confirme por los textos primitivos",
          edition: "das.es",
          translation: "official",
        },
        at: "n. 14 (es)",
      },
      {
        es: {
          text: "que, para uso y provecho de los fieles de Cristo […] se hagan versiones en las lenguas vulgares, y eso aun tomándolas de los textos originales",
          edition: "das.es",
          translation: "official",
        },
        at: "n. 14 (es)",
      },
    ],
    date: {
      year: 1943,
      month: 9,
      day: 30,
    },
  },
  VD7: {
    id: "VD7",
    work: "verbum-domini",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "7",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "la Escritura ha de ser proclamada, escuchada, leída, acogida y vivida como Palabra de Dios, en el seno de la Tradición apostólica, de la que no se puede separar.",
          edition: "vd.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 2010,
      month: 9,
      day: 30,
    },
  },
  VD17: {
    id: "VD17",
    work: "verbum-domini",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "17",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La Tradición viva es esencial para que la Iglesia vaya creciendo con el tiempo en la comprensión de la verdad revelada en las Escrituras […] En definitiva, es la Tradición viva de la Iglesia la que nos hace comprender de modo adecuado la Sagrada Escritura como Palabra de Dios.",
          edition: "vd.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 2010,
      month: 9,
      day: 30,
    },
  },
  VD19: {
    id: "VD19",
    work: "verbum-domini",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "19",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Ciertamente, la reflexión teológica ha considerado siempre la inspiración y la verdad como dos conceptos clave para una hermenéutica eclesial de las Sagradas Escrituras. Sin embargo, hay que reconocer la necesidad actual de profundizar adecuadamente en esta realidad, para responder mejor a lo que exige la interpretación de los textos sagrados según su naturaleza.",
          edition: "vd.es",
          translation: "official",
        },
        note: "Inmediatamente después de citar Dei Verbum 11",
      },
    ],
    date: {
      year: 2010,
      month: 9,
      day: 30,
    },
  },
  VD29: {
    id: "VD29",
    work: "verbum-domini",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "29",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "el lugar originario de la interpretación escriturística es la vida de la Iglesia. Esta afirmación no pone la referencia eclesial como un criterio extrínseco al que los exegetas deben plegarse, sino que es requerida por la realidad misma de las Escrituras y por cómo se han ido formando con el tiempo.",
          edition: "vd.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 2010,
      month: 9,
      day: 30,
    },
  },
  VD46: {
    id: "VD46",
    work: "verbum-domini",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "46",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "escuchar y meditar juntos las Escrituras nos hace vivir una comunión real, aunque todavía no plena",
          edition: "vd.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 2010,
      month: 9,
      day: 30,
    },
  },
  VD87: {
    id: "VD87",
    work: "verbum-domini",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "87",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 2010,
      month: 9,
      day: 30,
    },
  },
  FCEP1: {
    id: "FCEP1",
    work: "fc-epitome",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "1",
        },
      ],
      qualifier: "Regla y norma",
    },
    excerpts: [
      {
        la: {
          text: "Credimus, confitemur et docemus unicam regulam et normam, secundum quam omnia dogmata omnesque doctores aestimari et iudicari oporteat, nullam omnino aliam esse quam prophetica et apostolica scripta cum Veteris tum Novi Testamenti, sicut scriptum est Ps. 119, 105: Lucerna pedibus meis Verbum tuum et lumen semitis meis. Et divus Paulus inquit Gal. 1, 8: Etiamsi angelus de coelo aliud praedicet evangelium, anathema sit.",
          edition: "triglot.la",
          page: "776",
        },
        es: {
          text: "Creemos, confesamos y enseñamos que la única regla y norma según la cual deben apreciarse y juzgarse todos los dogmas y todos los doctores no es otra en absoluto que los escritos proféticos y apostólicos del Antiguo y del Nuevo Testamento, como está escrito (Salmo 119:105): «Lámpara es a mis pies tu palabra y luz para mi camino». Y san Pablo dice (Gálatas 1:8): «Aunque un ángel del cielo predique otro evangelio, sea anatema».",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "We believe, teach, and confess that the sole rule and standard according to which all dogmas together with [all] teachers should be estimated and judged are the prophetic and apostolic Scriptures of the Old and of the New Testament alone, as it is written Ps. 119, 105 […] And St. Paul: Though an angel from heaven preach any other gospel unto you, let him be accursed, Gal. 1, 8.",
          edition: "triglot.en",
          page: "777",
        },
        note: "(imágenes de página)",
      },
    ],
    link: {
      href: "https://bookofconcord.org/epitome/rule-and-norm/",
      label: "Leer en bookofconcord.org",
    },
  },
  FCEP2: {
    id: "FCEP2",
    work: "fc-epitome",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "2",
        },
      ],
      qualifier: "Regla y norma",
    },
    excerpts: [
      {
        la: {
          text: "Reliqua vero sive patrum sive neotericorum scripta, quocunque veniant nomine, sacris litteris nequaquam sunt aequiparanda, sed universa illis ita subiicienda sunt, ut alia ratione non recipiantur nisi testium loco, qui doceant, quod etiam post apostolorum tempora et in quibus partibus orbis doctrina illa prophetarum et apostolorum sincerior conservata sit.",
          edition: "triglot.la",
          page: "776",
        },
        es: {
          text: "Los demás escritos, en cambio, sean de los Padres o de los modernos, cualquiera sea el nombre que lleven, de ningún modo han de equipararse a las sagradas letras, sino que todos han de someterse a ellas, de modo que no se reciban de otra manera que como testigos que enseñen que también después de los tiempos de los apóstoles, y en qué partes del orbe, se conservó más pura aquella doctrina de los profetas y apóstoles.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "Other writings, however, of ancient or modern teachers, whatever name they bear, must not be regarded as equal to the Holy Scriptures, but all of them together be subjected to them, and should not be received otherwise or further than as witnesses…",
          edition: "triglot.en",
          page: "777",
        },
      },
    ],
    link: {
      href: "https://bookofconcord.org/epitome/rule-and-norm/",
      label: "Leer en bookofconcord.org",
    },
  },
  FCEP7: {
    id: "FCEP7",
    work: "fc-epitome",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "7",
        },
      ],
      qualifier: "Regla y norma",
    },
    excerpts: [
      {
        la: {
          text: "Hoc modo luculentum discrimen inter sacras Veteris et Novi Testamenti litteras et omnia aliorum scripta retinetur, et sola Sacra Scriptura iudex, norma et regula agnoscitur, ad quam ceu ad Lydium lapidem omnia dogmata exigenda sunt et iudicanda, an pia an impia, an vera an vero falsa sint.",
          edition: "triglot.la",
          page: "778",
        },
        es: {
          text: "…y solo la Sagrada Escritura es reconocida como juez, norma y regla, a la cual, como a piedra de toque, deben ajustarse y juzgarse todos los dogmas, si son piadosos o impíos, verdaderos o falsos.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "the Holy Scriptures alone remain the only judge, rule, and standard, according to which, as the only test-stone, all dogmas shall and must be discerned and judged, as to whether they are good or evil, right or wrong.",
          edition: "triglot.en",
          page: "779",
        },
      },
    ],
    link: {
      href: "https://bookofconcord.org/epitome/rule-and-norm/",
      label: "Leer en bookofconcord.org",
    },
  },
  FCEP8: {
    id: "FCEP8",
    work: "fc-epitome",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "paragraph",
          value: "8",
        },
      ],
      qualifier: "Regla y norma",
    },
    excerpts: [
      {
        la: {
          text: "Cetera autem Symbola et alia scripta […] non obtinent auctoritatem iudicis; haec enim dignitas solis sacris litteris debetur; sed duntaxat pro religione nostra testimonium dicunt eamque explicant",
          edition: "triglot.la",
          page: "778",
        },
        es: {
          text: "Los demás símbolos y escritos […] no tienen autoridad de juez, porque esta dignidad se debe solo a las sagradas letras, sino que solamente dan testimonio de nuestra religión y la explican",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "But the other symbols and writings cited are not judges, as are the Holy Scriptures, but only a testimony and declaration of the faith",
          edition: "triglot.en",
          page: "779",
        },
      },
    ],
    link: {
      href: "https://bookofconcord.org/epitome/rule-and-norm/",
      label: "Leer en bookofconcord.org",
    },
  },
  SA2215: {
    id: "SA2215",
    work: "smalcald",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "II",
        },
        {
          kind: "locus",
          value: ".ii.15",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Ex patrum enim verbis et factis non sunt exstruendi articuli fidei […] Regulam autem aliam habemus, ut videlicet Verbum Dei condat articulos fidei, et praeterea nemo, ne angelus quidem.",
          edition: "triglot.la",
          page: "466",
        },
        es: {
          text: "Porque de las palabras y hechos de los Padres no se han de construir artículos de fe […] Tenemos otra regla: que la Palabra de Dios establezca los artículos de fe, y nadie más, ni siquiera un ángel.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "For it will not do to frame articles of faith from the works or words of the holy Fathers […] The rule is: The Word of God shall establish articles of faith, and no one else, not even an angel.",
          edition: "triglot.en",
          page: "467",
        },
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://archive.org/details/concordiatriglot00unse",
      label: "Ver el escaneo de la Triglotta (1921) en archive.org",
    },
  },
  AC15: {
    id: "AC15",
    work: "augsburg",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XV",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "De ritibus ecclesiasticis docent, quod ritus illi servandi sint, qui sine peccato servari possunt et prosunt ad tranquillitatem et bonum ordinem in ecclesia, sicut certae feriae, festa et similia. De talibus rebus tamen admonentur homines, ne conscientiae onerentur, tamquam talis cultus ad salutem necessarius sit. Admonentur etiam, quod traditiones humanae institutae ad placandum Deum, ad promerendam gratiam et satisfaciendum pro peccatis adversentur evangelio et doctrinae fidei",
          edition: "triglot.la",
          page: "48",
        },
        es: {
          text: "Sobre los ritos eclesiásticos enseñan que se han de observar aquellos ritos que pueden observarse sin pecado y que sirven a la tranquilidad y al buen orden en la Iglesia, como ciertas fiestas, solemnidades y cosas semejantes. Sin embargo, sobre estas cosas se advierte a los hombres que no se cargue la conciencia como si tal culto fuera necesario para la salvación. Se advierte también que las tradiciones humanas instituidas para aplacar a Dios, merecer la gracia y satisfacer por los pecados se oponen al Evangelio y a la doctrina de la fe.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "Nevertheless, concerning such things men are admonished that consciences are not to be burdened, as though such observance was necessary to salvation. They are admonished also that human traditions instituted to propitiate God, to merit grace, and to make satisfaction for sins, are opposed to the Gospel and the doctrine of faith.",
          edition: "triglot.en",
        },
        note: "inglés de bookofconcord.org",
      },
    ],
    link: {
      href: "https://archive.org/details/concordiatriglot00unse",
      label: "Ver el escaneo de la Triglotta (1921) en archive.org",
    },
  },
  AC28_34: {
    id: "AC28_34",
    work: "augsburg",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXVIII.34–35, 42–43",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Sed de hac quaestione nostri sic [OCR: «sie»] docent, quod episcopi non habent potestatem statuendi aliquid contra evangelium, ut supra ostensum est. […] Porro contra Scripturam est traditiones condere aut exigere, ut per eam observationem satisfaciamus pro peccatis, aut mereamur gratiam et iustitiam.",
          edition: "triglot.la",
          page: "86",
        },
        es: {
          text: "Pero sobre esta cuestión los nuestros enseñan que los obispos no tienen potestad para establecer nada contra el Evangelio, como se mostró arriba. […] Además, es contrario a la Escritura establecer o exigir tradiciones para que por esa observancia satisfagamos por los pecados o merezcamos la gracia y la justicia.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "bishops have no power to decree anything against the Gospel […] Now, it is against Scripture to establish or require the observance of any traditions, to the end that by such observance we may make satisfaction for sins, or merit grace and righteousness.",
          edition: "triglot.en",
        },
        note: "¶34–35. ; inglés p. 87 y bookofconcord.org",
      },
      {
        la: {
          text: "Unde habent ius episcopi has traditiones imponendi ecclesiis ad illaqueandas conscientias, quum Petrus vetet Act. 15,10 imponere iugum discipulis, quum Paulus dicat 2 Cor. 13, 10, potestatem ipsis datam, esse ad aedificationem, non ad destructionem. Cur igitur augent peccata per has traditiones? Verum exstant clara testimonia, quae prohibent condere tales traditiones ad promerendam gratiam, aut tamquam necessarias ad salutem.",
          edition: "triglot.la",
          page: "88",
        },
        es: {
          text: "¿De dónde tienen los obispos el derecho de imponer estas tradiciones a las iglesias para enredar las conciencias, cuando Pedro prohíbe (Hechos 15:10) imponer un yugo a los discípulos, y Pablo dice (2 Corintios 13:10) que la potestad se les dio para edificación, no para destrucción? ¿Por qué, entonces, aumentan los pecados con estas tradiciones? Pero hay testimonios claros que prohíben establecer tales tradiciones para merecer la gracia, o como necesarias para la salvación.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "Whence have the bishops the right to lay these traditions upon the Church for the ensnaring of consciences, when Peter, Acts 15:10, forbids to put a yoke upon the neck of the disciples […]? But there are clear testimonies which prohibit the making of such traditions, as though they merited grace or were necessary to salvation.",
          edition: "triglot.en",
        },
        at: "¶42–43",
      },
      {
        la: {
          text: "quod peccatum mortale sit etiam sine offensione aliorum in feriis laborare manibus, quod sit peccatum mortale omittere horas canonicas",
          edition: "triglot.la",
        },
        note: "¶41, latín p. 88: entre los preceptos que el artículo objeta",
      },
    ],
    link: {
      href: "https://archive.org/details/concordiatriglot00unse",
      label: "Ver el escaneo de la Triglotta (1921) en archive.org",
    },
  },
  SA315: {
    id: "SA315",
    work: "smalcald",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "III.15",
        },
        {
          kind: "paragraph",
          value: "1–2",
        },
      ],
      qualifier: "De las tradiciones humanas",
    },
    excerpts: [
      {
        la: {
          text: "Quod pontificii dicunt humanas traditiones facere ad remissionem peccatorum et mereri salutem, plane impium et damnatum est, sicut Christus inquit [Matth. 15, 9]: Frustra colunt me docentes doctrinas et mandata hominum. Et Tit. 1,14: Aversantium [OCR: «Aversantvum»] veritatem. Item, quod dicunt, esse peccatum mortale, si quis non servet ista statuta, etiam impium est.",
          edition: "triglot.la",
          page: "500",
        },
        es: {
          text: "Lo que dicen los pontificios, que las tradiciones humanas sirven para el perdón de los pecados y para merecer la salvación, es del todo impío y condenado, como dice Cristo (Mateo 15:9): «En vano me honran, enseñando doctrinas y mandamientos de hombres». Y Tito 1:14: «que se apartan de la verdad». Asimismo, lo que dicen, que es pecado mortal no guardar estos estatutos, también es impío.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "The declaration of the Papists that human traditions serve for the remission of sins, or merit salvation, is [altogether] unchristian and condemned, as Christ says Matt. 15:9: In vain they do worship Me, teaching for doctrines the commandments of men. Again, Titus 1:14: That turn from the truth. Again, when they declare that it is a mortal sin if one breaks these ordinances [does not keep these statutes], this, too, is not right.",
          edition: "triglot.en",
          page: "501",
        },
      },
    ],
    date: {
      year: 1537,
    },
    link: {
      href: "https://archive.org/details/concordiatriglot00unse",
      label: "Ver el escaneo de la Triglotta (1921) en archive.org",
    },
  },
  AC28_21: {
    id: "AC28_21",
    work: "augsburg",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXVIII.21–28",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Porro secundum evangelium seu, ut loquuntur, de iure divino nulla iurisdictio competit episcopis ut episcopis, hoc est, his, quibus est commissum ministerium Verbi et sacramentorum [OCR: «saeramentorum»], nisi remittere peccata, item cognoscere doctrinam et doctrinam ab evangelio dissentientem reiicere et impios, quorum nota est impietas, excludere a communione ecclesiae sine vi humana, sed Verbo. Hic [OCR: «Hie»] necessario et de iure divino debent eis ecclesiae [OCR: «eeclesiae»] praestare obedientiam, iuxta illud Luc. 10, 16: Qui vos audit, me audit. Verum quum aliquid contra evangelium docent aut statuunt, tunc [OCR: «tune»] habent ecclesiae mandatum Dei, quod obedientiam prohibet, Matth. 7,15: Cavete a pseudoprophetis! Gal. 1,8: Si angelus de coelo aliud evangelium evangelizaverit, anathema sit! 2 Cor. 13, 8: Non possumus aliquid contra veritatem, sed pro veritate. Item: Data est nobis potestas ad aedificationem, non ad destructionem. Sic [OCR: «Sie»] et canones praecipiunt, 2, q. 7, cap. Sacerdotes, et cap. Oves. Et Augustinus contra Petiliani epistolam inquit: Nec catholicis episcopis consentiendum [OCR: «consentiendum,»] est, sicubi forte falluntur, aut contra canonicas Dei Scripturas aliquid sentiunt.",
          edition: "triglot.la",
          page: "86",
        },
        es: {
          text: "Además, según el Evangelio, o, como dicen, de derecho divino, no corresponde a los obispos como obispos, es decir, a aquellos a quienes se ha confiado el ministerio de la Palabra y de los sacramentos, ninguna jurisdicción sino la de perdonar los pecados, y también la de juzgar la doctrina, rechazar la doctrina que disiente del Evangelio y excluir de la comunión de la Iglesia a los impíos cuya impiedad es conocida, sin fuerza humana, sino por la Palabra. En esto las iglesias deben necesariamente y de derecho divino prestarles obediencia, según aquello de Lucas 10:16: «El que a vosotros oye, a mí me oye». Pero cuando enseñan o establecen algo contra el Evangelio, entonces las iglesias tienen un mandato de Dios que prohíbe obedecer (Mateo 7:15): «Guardaos de los falsos profetas»; (Gálatas 1:8): «Si un ángel del cielo anunciare otro evangelio, sea anatema»; (2 Corintios 13:8): «Nada podemos contra la verdad, sino por la verdad». Y también: «La potestad se nos dio para edificación, no para destrucción». Así lo mandan también los cánones (2, q. 7, cap. Sacerdotes y cap. Oves). Y Agustín dice contra la carta de Petiliano: «Ni siquiera a los obispos católicos se ha de asentir si acaso se equivocan o sienten algo contra las Escrituras canónicas de Dios».",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "Again, according to the Gospel, or, as they say, by divine right, there belongs to the bishops as bishops, that is, to those to whom has been committed the ministry of the Word and the Sacraments, no jurisdiction except to forgive sins, to judge doctrine, to reject doctrines contrary to the Gospel, and to exclude from the communion of the Church wicked men, whose wickedness is known, and this without human force, simply by the Word. Herein the congregations of necessity and by divine right must obey them, according to Luke 10:16: He that heareth you heareth Me. But when they teach or ordain anything against the Gospel, then the congregations have a commandment of God prohibiting obedience, Matt. 7:15: Beware of false prophets; Gal. 1:8: Though an angel from heaven preach any other gospel, let him be accursed; 2 Cor. 13:8: We can do nothing against the truth, but for the truth. Also: The power which the Lord hath given me to edification, and not to destruction. So, also, the Canonical Laws command (II. Q. VII. Cap., Sacerdotes, and Cap. Oves). And Augustine (Contra Petiliani Epistolam): Neither must we submit to Catholic bishops if they chance to err, or hold anything contrary to the Canonical Scriptures of God.",
          edition: "triglot.en",
        },
        note: ", inglés p. 87 y bookofconcord.org",
      },
    ],
    link: {
      href: "https://archive.org/details/concordiatriglot00unse",
      label: "Ver el escaneo de la Triglotta (1921) en archive.org",
    },
  },
  WCF11: {
    id: "WCF11",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "I.1",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "y ademas para mejor conservar y propagar la verdad, y para el mejor consuelo y establecimiento de la iglesia contra la corrupcion de la carne, la malicia de Satanás y del mundo, le plugo ponerlo todo en escrito; por lo cual, las Sagradas Escrituras son muy necesaria[s]; y mas, puesto que han cesado ya los modos anteriores por los cuales Dios reveló su voluntad á su pueblo.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "therefore it pleased the Lord, at sundry times, and in divers manners, to reveal himself, and to declare that his will unto his Church; and afterwards, for the better preserving and propagating of the truth, and for the more sure establishment and comfort of the Church against the corruption of the flesh, and the malice of Satan and of the world, to commit the same wholly unto writing; which maketh the holy scripture to be most necessary; those former ways of God's revealing his will unto his people being now ceased.",
          edition: "wcf.en",
        },
        note: "1894, pp. 17–18 (texto de 1647); 1880, p. 5. Textos de prueba de 1647: Rom 2:14-15; 1:19-20, 32; Sal 19:1-3; Rom 2:1; 1 Co 1:21; 2:13-14; Heb 1:1; Prov 22:19-21; Lc 1:3-4; Rom 15:4; Mt 4:4, 7, 10; Is 8:19-20; 2 Tim 3:15; 2 Pe 1:19; Heb 1:1-2",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/doctrinasyreglam00west",
      label: "Ver el escaneo de 1880 en archive.org",
    },
  },
  WCF12: {
    id: "WCF12",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "I.2",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Todos estos fueron dados por la inspiracion de Dios para ser la regla de la fé y de la práctica.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "Under the name of Holy Scripture, or the Word of God written, are now contained all the Books of the Old and New Testaments, which are these […] All which are given by inspiration of God, to be the rule of faith and life.",
          edition: "wcf.en",
        },
        note: "1894, p. 18; 1880, p. 7. Lista de 39 + 27 libros, sin Tobías, Judit, Sabiduría, Eclesiástico, Baruc ni 1–2 Macabeos. Textos de prueba: Lc 16:29, 31; Ef 2:20; Ap 22:18-19; 2 Tim 3:16",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/doctrinasyreglam00west",
      label: "Ver el escaneo de 1880 en archive.org",
    },
  },
  WCF13: {
    id: "WCF13",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "I.3",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los libros que comunmente se titulan Apócrifos, por no ser de inspiracion divina, no son parte del Cánon de las Sagradas Escrituras; y por lo mismo, no son de autoridad para la iglesia de Dios; ni deben ser aprobados ni usados, sino de la misma manera de la que son otros escritos humanos.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "The Books commonly called Apocrypha, not being of divine inspiration, are no part of the canon of the scripture; and therefore are of no authority in the Church of God, nor to be any otherwise approved, or made use of, than other human writings.",
          edition: "wcf.en",
        },
        note: "1894, p. 18; 1880, p. 7. Textos de prueba: Lc 24:27, 44; Rom 3:2; 2 Pe 1:21",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/doctrinasyreglam00west",
      label: "Ver el escaneo de 1880 en archive.org",
    },
  },
  WCF14: {
    id: "WCF14",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "I.4",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La autoridad de las Sagradas Escrituras, la que hace que deben creerse y obedecerse, no depende del testimonio de ningun hombre ó iglesia cualquiera que fuera, sino enteramente del de Dios, quien es su autor, porque El es la misma verdad; por esto deben ser recibidas porque son la palabra de Dios.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "The authority of the holy scripture, for which it ought to be believed and obeyed, dependeth not upon the testimony of any man or church, but wholly upon God, (who is truth itself,) the author thereof; and therefore it is to be received, because it is the word of God.",
          edition: "wcf.en",
        },
        note: "1894, p. 19; 1880, p. 8. Textos de prueba: 2 Pe 1:19, 21; 2 Tim 3:16; 1 Jn 5:9; 1 Tes 2:13",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/doctrinasyreglam00west",
      label: "Ver el escaneo de 1880 en archive.org",
    },
  },
  WCF15: {
    id: "WCF15",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "I.5",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El testimonio de la iglesia puede mover é inducirnos á guardar para las Sagradas Escrituras una estimacion alta y reverencial […] Sin embargo, nuestra persuasion y completa conviccion de que su verdad es infalible y su autoridad divina, provienen de la obra interior del Espíritu Santo, quien dá testimonio juntamente con la palabra divina, y por ella á nuestros corazones.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "We may be moved and induced by the testimony of the Church to an high and reverend esteem of the holy scripture […] yet, notwithstanding, our full persuasion and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit, bearing witness by and with the word in our hearts.",
          edition: "wcf.en",
        },
        note: "1894, p. 19; 1880, pp. 8–9. Textos de prueba: 1 Tim 3:15 (k); 1 Jn 2:20, 27; Jn 16:13-14; 1 Co 2:10-12; Is 59:21 (l)",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/doctrinasyreglam00west",
      label: "Ver el escaneo de 1880 en archive.org",
    },
  },
  WCF16: {
    id: "WCF16",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "I.6",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Todo el consejo de Dios, tocante á todas las cosas necesarias para su propia gloria y para la salvacion, fé y vida del hombre; es ó expresamente expuesto en las Escrituras ó se puede deducir de ellas por buena y necesaria consecuencia; y á esta revelacion de su voluntad, nada se puede, ni se debe, añadir nunca, ni por nuevas revelaciones del Espíritu, ni por las tradiciones de los hombres. (1) Sin embargo, confesamos que la iluminacion interna del Espíritu de Dios, es necesaria á fin de que se entiendan de una manera salvadora, las cosas reveladas en la palabra; (2) y que hay algunas circunstancias tocante al culto de Dios y al gobierno de la iglesia, comunes á las acciones y sociedades humanas, que deben arreglarse conforme á la luz de la naturaleza y la prudencia cristiana, guardándose siempre las reglas generales de la palabra. (3.)",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "The whole counsel of God, concerning all things necessary for his own glory, man's salvation, faith, and life, is either expressly set down in scripture, or by good and necessary consequence may be deduced from scripture: unto which nothing at any time is to be added, whether by new revelations of the Spirit, or traditions of men. Nevertheless, we acknowledge the inward illumination of the Spirit of God to be necessary for the saving understanding of such things as are revealed in the word; and that there are some circumstances concerning the worship of God, and government of the Church, common to human actions and societies, which are to be ordered by the light of nature and Christian prudence, according to the general rules of the word, which are always to be observed.",
          edition: "wcf.en",
        },
        note: "1894, pp. 19–20; 1880, p. 9 (marcas de nota como se imprimieron). Textos de prueba: 2 Tim 3:15-17; Gál 1:8-9; 2 Tes 2:2 (m); Jn 6:45; 1 Co 2:9-12 (n); 1 Co 11:13-14; 1 Co 14:26, 40 (o)",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/doctrinasyreglam00west",
      label: "Ver el escaneo de 1880 en archive.org",
    },
  },
  WCF18: {
    id: "WCF18",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "I.8",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El antiguo Testamento es auténtico en el Hebreo, que era el idioma natal del pueblo de Dios antiguamente; y el nuevo Testamento, lo es en el Griego, que en el tiempo cuando fué escrito, era la lengua mas conocida entre las naciones: porque en aquellas lenguas son inspirados directamente por Dios, y guardados puros en todos los siglos por su cuidado y providencia singulares. De manera que la iglesia tiene que apelar finalmente á los originales en esos idiomas en toda controversia. Pero puesto que estos idiomas originales no se conocen por todo el pueblo de Dios, (quien tiene el derecho de poseer las Escrituras y gran interes en ellas, las cuales segun el mandamiento, debe leer y escudriñar en el temor de Dios;) se sigue que la Biblia debe traducirse en la lengua vulgar de todas las naciones á que pueda venir; para que morando abundantemente la palabra de Dios en todos, puedan adorarle de una manera aceptable, y por la paciencia y consuelo de las Escrituras tengan esperanza.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "The Old Testament in Hebrew, (which was the native language of the people of God of old,) and the New Testament in Greek, (which at the time of the writing of it was most generally known to the nations,) being immediately inspired by God, and by his singular care and providence kept pure in all ages, are therefore authentical; so as in all controversies of religion, the Church is finally to appeal unto them. But because these original tongues are not known to all the people of God, who have right unto and interest in the scriptures, and are commanded, in the fear of God, to read and search them, therefore they are to be translated into the vulgar language of every nation unto which they come, that the word of God dwelling plentifully in all, they may worship him in an acceptable manner, and, through patience and comfort of the scriptures, may have hope.",
          edition: "wcf.en",
        },
        note: "1894, pp. 20–21; 1880, p. 11. Textos de prueba: Mt 5:18; Is 8:20; Hch 15:15; Jn 5:39, 46; 1 Co 14:6, 9, 11, 12, 24, 27, 28; Col 3:16; Rom 15:4",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/doctrinasyreglam00west",
      label: "Ver el escaneo de 1880 en archive.org",
    },
  },
  WCF19: {
    id: "WCF19",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "I.9",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La misma Escritura es la regla infalible para interpretarse á sí misma; y por tanto, cuando hay una cuestion respecto del sentido verdadero y pleno de cualquier pasaje; cuyo significado no es multíplice, sino uno solo, se puede buscar y establecer segun otros textos que hablan con mas claridad.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "The infallible rule of interpretation of scripture is the scripture itself; and therefore, when there is a question about the true and full sense of any scripture, (which is not manifold, but one,) it must be searched and known by other places that speak more clearly.",
          edition: "wcf.en",
        },
        note: "1894, p. 21; 1880, p. 12. Textos de prueba de 1647: 2 Pe 1:20-21; Hch 15:15-16. La impresión de 1880 da Hch 15:15 y Jn 5:46",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/doctrinasyreglam00west",
      label: "Ver el escaneo de 1880 en archive.org",
    },
  },
  WCF202: {
    id: "WCF202",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XX.2",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Solo Dios es el Señor de la conciencia (1), y la exime de las doctrinas y los mandamientos de los hombres que de alguna manera sean opuestos á su palabra, y de todo lo que sin sancion de esta, se pretende de imponer á los hombres, como reglas de fé ó de culto (2); de manera que los que creen aquellas doctrinas humanas, ó de conciencia obedecen semejantes mandamientos, traicionan la verdadera libertad (3)",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "God alone is lord of the conscience, and hath left it free from the doctrines and commandments of men which are in any thing contrary to his word, or beside it, in matters of faith or worship. So that to believe such doctrines, or to obey such commandments out of conscience, is to betray true liberty of conscience",
          edition: "wcf.en",
        },
        note: "1894, p. 69; 1880, p. 104 (marcas de nota como se imprimieron). Textos de prueba no leídos",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/doctrinasyreglam00west",
      label: "Ver el escaneo de 1880 en archive.org",
    },
  },
  WCF313: {
    id: "WCF313",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXXI.3",
        },
      ],
      qualifier: "XXXI.2 en el texto americano",
    },
    excerpts: [
      {
        es: {
          text: "Pertenece á los sínodos y á los concilios el decidir ministerialmente cuestiones con respecto de la fé, el resolver casos de conciencia, el asentar reglas é instrucciones para el mejor gobierno en el culto público, y la disciplina de la iglesia de Dios, el oir y el determinar autoritativamente quejas respecto de los casos de mala administracion y sus decretos y decisiones cuando concuerden con la palabra de Dios, deben recibirse con reverencia y sumision, no solo por ser conformes á esta palabra, sino tambien porque la autoridad de dichos sínodos y concilios viene de Dios, pues así lo ordena en su palabra.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "It belongeth to synods and councils ministerially to determine controversies of faith, and cases of conscience; to set down rules and directions for the better ordering of the publick worship of God, and government of his church; to receive complaints in cases of mal-administration, and authoritatively to determine the same: which decrees and determinations, if consonant to the word of God, are to be received with reverence and submission, not only for their agreement with the word, but also for the power whereby they are made, as being an ordinance of God, appointed thereunto in his word.",
          edition: "wcf.en",
        },
        note: "1894, p. 97; 1880, cap. XXXI, II, p. 154. Textos de prueba de 1647 (d): Hch 15:15, 19, 24, 27-31; Hch 16:4; Mt 18:17-20. La de 1880 imprime Hch 16:4; Hch 15:15, 19, 24, 27-31; Mt 18:17-20",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/doctrinasyreglam00west",
      label: "Ver el escaneo de 1880 en archive.org",
    },
  },
  WCF314: {
    id: "WCF314",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXXI.4",
        },
      ],
      qualifier: "XXXI.3 en el texto americano",
    },
    excerpts: [
      {
        es: {
          text: "Todos los sínodos ó concilios despues de los tiempos de los apóstoles, sean generales ó particulares, están expuestos á errar, y muchos de ellos han errado; por esto sus decisiones no deben tenerse como reglas de fé ó de práctica, sino como una ayuda en todo lo que pertenece á estos.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "All synods or councils since the apostles' times, whether general or particular, may err, and many have erred; therefore they are not to be made the rule of faith or practice, but to be used as an help in both.",
          edition: "wcf.en",
        },
        note: "1894, p. 97; 1880, cap. XXXI, III, p. 155. Textos de prueba: Ef 2:20; Hch 17:11; 1 Co 2:5; 2 Co 1:24",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/doctrinasyreglam00west",
      label: "Ver el escaneo de 1880 en archive.org",
    },
  },
  WLC3: {
    id: "WLC3",
    work: "wlc",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "question",
          value: "3",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Las Sagradas Escrituras del Antiguo y del Nuevo Testamento son la palabra de Dios, la única regla de fe y obediencia.",
          edition: "site-translation.wlc.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés",
        },
        en: {
          text: "Q. What is the word of God? A. The holy scriptures of the Old and New Testament are the word of God, the only rule of faith and obedience.",
          edition: "wcat.en",
        },
        note: "1894, p. 103. Textos de prueba: 2 Tim 3:16; 2 Pe 1:19-21 (e); Ef 2:20; Ap 22:18-19; Is 8:20; Lc 16:29, 31; Gál 1:8-9; 2 Tim 3:15-16 (f, sigue en p. 104)",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  WLC4: {
    id: "WLC4",
    work: "wlc",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "question",
          value: "4",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Las Escrituras se manifiestan como palabra de Dios por su majestad y pureza; por el acuerdo de todas sus partes y el propósito del conjunto, que es dar toda la gloria a Dios; por su luz y su poder para convencer y convertir a los pecadores, y para consolar y edificar a los creyentes para salvación; pero solo el Espíritu de Dios, dando testimonio por las Escrituras y con ellas en el corazón del hombre, puede persuadirlo plenamente de que son la palabra misma de Dios.",
          edition: "site-translation.wlc.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés",
        },
        en: {
          text: "Q. How doth it appear that the scriptures are the word of God? A. The scriptures manifest themselves to be the word of God, by their majesty and purity; by the consent of all the parts, and the scope of the whole, which is to give all glory to God; by their light and power to convince and convert sinners, to comfort and build up believers unto salvation: but the Spirit of God bearing witness by and with the scriptures in the heart of man, is alone able fully to persuade it that they are the very word of God.",
          edition: "wcat.en",
        },
        note: "1894, p. 104 (OCR). Textos de prueba: Os 8:12; 1 Co 2:6-7, 13; Sal 119:18, 129 (g); Sal 12:6; Sal 119:140 (h); Hch 10:43; 26:22 (i); Rom 3:19, 27 (k); Hch 18:28; Heb 4:12; Sant 1:18; Sal 19:7-9; Rom 15:4; Hch 20:32 (l); Jn 16:13-14; 1 Jn 2:20, 27; Jn 20:31 (m)",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  WSC2: {
    id: "WSC2",
    work: "wsc",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "question",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La palabra de Dios, contenida en las Escrituras del Antiguo y del Nuevo Testamento, es la única regla para dirigirnos en cómo glorificarle y gozar de él.",
          edition: "site-translation.wsc.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés",
        },
        en: {
          text: "Q. What rule hath God given to direct us how we may glorify and enjoy him? A. The word of God, which is contained in the scriptures of the Old and New Testaments, is the only rule to direct us how we may glorify and enjoy him.",
          edition: "wcat.en",
        },
        note: "1894, p. 226 (página inferida de la cabecera siguiente). Textos de prueba: 2 Tim 3:16; Ef 2:20 (c); 1 Jn 1:3-4 (d)",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  BFMpre2000: {
    id: "BFMpre2000",
    work: "bfm-2000",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "locus",
          value: "preámbulo",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los bautistas aprecian y defienden la libertad religiosa, y niegan el derecho de cualquier autoridad secular o religiosa a imponer una confesión de fe a una iglesia o a un conjunto de iglesias. Honramos los principios de la competencia del alma y del sacerdocio de los creyentes, afirmando a la vez nuestra libertad en Cristo y nuestra responsabilidad mutua bajo la Palabra de Dios.",
          edition: "bfmpre.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés",
        },
        en: {
          text: "Baptists cherish and defend religious liberty, and deny the right of any secular or religious authority to impose a confession of faith upon a church or body of churches. We honor the principles of soul competency and the priesthood of believers, affirming together both our liberty in Christ and our accountability to each other under the Word of God.",
          edition: "bfmpre.en",
        },
        note: "Frases del comité de 2000, después de los puntos de 1925",
      },
      {
        es: {
          text: "Que no las consideramos declaraciones completas de nuestra fe, con alguna cualidad de carácter definitivo o de infalibilidad.",
          edition: "bfmpre.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés",
        },
        en: {
          text: "That we do not regard them as complete statements of our faith, having any quality of finality or infallibility.",
          edition: "bfmpre.en",
        },
        note: "Punto (2) de la declaración de 1925",
      },
    ],
    date: {
      year: 2000,
    },
    link: {
      href: "https://bfm.sbc.net/preamble/",
      label: "Leer en bfm.sbc.net",
    },
  },
  T5can4: {
    id: "T5can4",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "V",
        },
        {
          kind: "canon",
          value: "4",
        },
      ],
      qualifier: "decreto sobre el pecado original",
    },
    excerpts: [
      {
        la: {
          text: "Si quis parvulos recentes ab uteris matrum baptizandos negat, etiam si fuerint a baptizatis parentibus orti; aut dicit in remissionem quidem peccatorum eos baptizari, sed nihil ex Adam trahere originalis peccati, quod regenerationis lavacro necesse sit expiari ad vitam aeternam consequendam; unde fit consequens, ut in eis forma Baptismatis in remissionem peccatorum, non vera, sed falsa intelligatur; anathema sit […] Propter hanc enim regulam fidei ex traditione Apostolorum etiam parvuli, qui nihil peccatorum in semetipsis adhuc committere potuerunt, ideo in remissionem peccatorum veraciter baptizantur, ut in eis regeneratione mundetur, quod generatione contraxerunt. Nisi enim quis renatus fuerit ex aqua, et Spiritu Sancto, non potest introire in regnum Dei.",
          edition: "trent.la",
          page: "48–49",
        },
        es: {
          text: "Si alguno niega que los niños recien nacidos se hayan de bautizar, aunque sean hijos de padres bautizados; ó dice, que se bautizan para que se les perdonen los pecados, pero que nada participan del pecado original de Adan, de que necesiten purificarse con el baño de la regeneracion para conseguir la vida eterna; de donde es consiguiente que la forma del Bautismo, se entienda respecto de ellos no verdadera sino falsa en órden á la remision de los pecados; sea excomulgado […] Y así por esta regla de fe, conforme á la tradicion de los Apóstoles, aun los párvulos que todavía no han podido cometer pecado alguno personal, recibén con toda verdad el Bautismo en remision de sus pecados, para que purifique la regeneracion en ellos lo que contraxeron por la generacion: Pues no puede entrar en el reyno de Dios sino el que haya renacido del agua, y del Espíritu Santo.",
          edition: "trent.es",
          page: "48–49",
          translation: "printed-original",
        },
        en: {
          text: "If anyone denies that infants, newly born from their mothers' wombs, even though they be sprung from baptised parents, are to be baptised … let him be anathema. … For, by reason of this rule of faith, from a tradition of the apostles, even infants, who could not as yet commit any sin of themselves, are for this cause truly baptised for the remission of sins, that in them that may be cleansed away by regeneration, which they have contracted by generation. For, unless a man be born again of water and the Holy Ghost, he cannot enter into the kingdom of God.",
          edition: "trent.en",
          page: "23",
        },
      },
    ],
    date: {
      year: 1546,
      month: 6,
      day: 17,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T5can5: {
    id: "T5can5",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "V",
        },
        {
          kind: "canon",
          value: "5",
        },
      ],
      qualifier: "decreto sobre el pecado original",
    },
    excerpts: [
      {
        la: {
          text: "Si quis per Jesu Christi Domini nostri gratiam, quae in Baptismate confertur, reatum originalis peccati remitti negat; aut etiam asserit, non tolli totum id, quod veram, et propriam peccati rationem habet; sed illud dicit tantum radi, aut non imputari; anathema sit. In renatis enim nihil odit Deus",
          edition: "trent.la",
          page: "49–50",
        },
        es: {
          text: "Si alguno niega que se perdona el reato del pecado original por la gracia de nuestro señor Jesu-Cristo que se confiere en el Bautismo; ó afirma que no se quita todo lo que es propia y verdaderamente pecado; sino dice, que este solamente se rae, ó dexa de imputarse; sea excomulgado. Dios por cierto nada aborrece en los que han renacido",
          edition: "trent.es",
          page: "49–50",
          translation: "printed-original",
        },
        en: {
          text: "If anyone denies that, by the grace of our Lord Jesus Christ, which is conferred in baptism, the guilt of original sin is remitted; or even asserts that the whole of that which has the true and proper nature of sin is not taken away; but says that it is only raised, or not imputed; let him be anathema. For in those who are born again, there is nothing that God hates",
          edition: "trent.en",
          page: "23",
        },
      },
      {
        es: {
          text: "Dios por cierto nada aborrece en los que han renacido, pues cesa absolutamente la condenacion respecto de aquellos, que sepultados en realidad por el Bautismo con Jesu-Cristo en la muerte, no viven segun la carne, sino que despojados del hombre viejo, y vestidos del nuevo, que está creado segun Dios, pasan á ser inocentes, sin mancha, puros, sin culpa y amigos de Dios",
          edition: "trent.es",
          page: "50",
          translation: "printed-original",
        },
        note: "(Romanos 8:1; 6:4; Efesios 4:22, 24, según las notas de )",
      },
      {
        es: {
          text: "«porque sea verdadera y propiamente pecado en los renacidos por el Bautismo; sino porque dimana del pecado, é inclina à él»",
          edition: "trent.es",
          page: "50–51",
          translation: "printed-original",
        },
        note: "Cláusula sobre la concupiscencia (; ):",
        citedIn: ["OB-5"],
      },
    ],
    date: {
      year: 1546,
      month: 6,
      day: 17,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T6c4: {
    id: "T6c4",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VI",
        },
        {
          kind: "chapter",
          value: "4",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "quae quidem translatio post Evangelium promulgatum, sine lavacro regenerationis, aut ejus voto, fieri non potest: sicut scriptum est: Nisi quis renatus fuerit ex aqua, et Spiritu Sancto, non potest introire in regnum Dei.",
          edition: "trent.la",
          page: "67",
        },
        es: {
          text: "Esta traslacion ó tránsito no se puede lograr, despues de promulgado el Evangelio, sin el Bautismo, ó sin el deseo de él; segun está escrito: No puede entrar en el reyno de los cielos sino el que haya renacido del agua, y del Espíritu Santo.",
          edition: "trent.es",
          page: "67",
          translation: "printed-original",
        },
        en: {
          text: "this translation, since the promulgation of the Gospel, cannot be effected, without the laver of regeneration, or the desire thereof",
          edition: "trent.en",
          page: "32",
        },
      },
    ],
    date: {
      year: 1547,
      month: 1,
      day: 13,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T6c6: {
    id: "T6c6",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VI",
        },
        {
          kind: "chapter",
          value: "6",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«movidos y ayudados por la gracia divina, conciben la fe por el oido, y se inclinan libremente á Dios» … «comienzan á amarle como fuente de toda justicia» … «con aquel arrepentimiento que deben tener antes del Bautismo» … «recibir este sacramento, empezar una vida nueva, y observar los mandamientos de Dios»",
          edition: "trent.es",
          page: "69–70",
          translation: "printed-original",
        },
        en: {
          text: "are disposed unto the said justice, when, excited and assisted by divine grace, conceiving faith by hearing, they are freely moved towards God … are raised unto hope … begin to love Him as the fountain of all justice; and are therefore moved against sins by a certain hatred and detestation, to wit, by that penitence which must be performed before baptism: lastly, when they purpose to receive baptism, to begin a new life, and to keep the commandments of God",
          edition: "trent.en",
          page: "33–34",
        },
        citedIn: ["OB-2", "DO-2"],
      },
    ],
    date: {
      year: 1547,
      month: 1,
      day: 13,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T6c7: {
    id: "T6c7",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VI",
        },
        {
          kind: "chapter",
          value: "7",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Unde in ipsa justificatione cum remissione peccatorum haec omnia simul infusa accipit homo per Jesum Christum, cui inseritur, fidem, spem, et caritatem.",
          edition: "trent.la",
          page: "73",
        },
        es: {
          text: "Resulta de aquí que en la misma justificacion, ademas de la remision de los pecados, se infunden á un mismo tiempo al hombre por Jesu-Cristo, con quien se une, la fe, la esperanza y la caridad",
          edition: "trent.es",
          page: "73",
          translation: "printed-original",
        },
        en: {
          text: "man, through Jesus Christ, in whom he is ingrafted, receives, in the said Justification, together with the remission of sins, all these (gifts) infused at once, faith, hope, and charity.",
          edition: "trent.en",
          page: "35",
        },
      },
      {
        es: {
          text: "«sacramento de fe, sin la qual ninguno jamas ha logrado la justificacion»",
          edition: "trent.es",
          page: "72",
          translation: "printed-original",
        },
        note: ": el bautismo, causa instrumental de la justificación",
      },
    ],
    date: {
      year: 1547,
      month: 1,
      day: 13,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T6can11: {
    id: "T6can11",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VI",
        },
        {
          kind: "canon",
          value: "11",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Si alguno dixere, que los hombres se justifican ó con sola la imputacion de la justicia de Jesu-Cristo, ó con solo el perdon de los pecados, excluida la gracia y caridad que se difunde en sus corazones, y queda inherente en ellos por el Espiritu Santo; ó tambien que la gracia que nos justifica, no es otra cosa que el favor de Dios; sea excomulgado.",
          edition: "trent.es",
          page: "93–94",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1547,
      month: 1,
      day: 13,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7sacr1: {
    id: "T7sacr1",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "De los sacramentos en general",
        },
        {
          kind: "canon",
          value: "1",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, Sacramenta novae legis non fuisse omnia a Jesu Christo Domino nostro instituta; aut esse plura, vel pauciora, quam septem, videlicet, Baptismum, Confirmationem, Eucharistiam, Poenitentiam, Extremam Untionem [sic], Ordinem, et Matrimonium; aut etiam aliquod horum septem non esse vere, et proprie Sacramentum; anathema sit.",
          edition: "trent.la",
          page: "110",
        },
        es: {
          text: "Si alguno dixere, que los Sacramentos de la nueva lei no fueron todos instituidos por Jesu-Cristo nuestro Señor; ó que son mas, ó menos que siete, es à saber: Bautismo, Confirmacion, Eucaristía, Penitencia, Extrema-Uncion, Orden, y Matrimonio; ó tambien que alguno de estos siete no es Sacramento con toda verdad, y propiedad; sea excomulgado.",
          edition: "trent.es",
          page: "110",
          translation: "printed-original",
        },
        en: {
          text: "If anyone saith that the sacraments of the New Law were not all instituted by Jesus Christ, our Lord; or that they are more or less than seven … or even that any one of these seven is not truly and properly a sacrament; let him be anathema.",
          edition: "trent.en",
          page: "54",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7sacr6: {
    id: "T7sacr6",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "De los sacramentos en general",
        },
        {
          kind: "canon",
          value: "6",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, Sacramenta novae legis non continere gratiam, quam significant; aut gratiam ipsam non ponentibus obicem non conferre; quasi signa tantum externa sint acceptae per fidem gratiae, vel justitiae, et notae quaedam Christianae professionis, quibus apud homines discernuntur fideles ab infidelibus; anathema sit.",
          edition: "trent.la",
          page: "111–112",
        },
        es: {
          text: "Si alguno dixere, que los Sacramentos de la nueva ley no contienen en sí la gracia que significan; ó que no confieren esta misma gracia á los que no ponen obstáculo; como si solo fuesen señales extrínsecas de la gracia ó santidad recibida por la fe, y ciertos distintivos de la profesion de Cristiano, por los quales se distinguen entre los hombres los fieles de los infieles; sea excomulgado.",
          edition: "trent.es",
          page: "111–112",
          translation: "printed-original",
        },
        en: {
          text: "If anyone saith that the sacraments of the New Law do not contain the grace which they signify; or that they do not confer that grace on those who do not place an obstacle thereunto; as though they were merely outward signs of grace or justice received through faith, and certain marks of the Christian profession, whereby believers are distinguished amongst men from unbelievers; let him be anathema.",
          edition: "trent.en",
          page: "55",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7sacr7: {
    id: "T7sacr7",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "De los sacramentos en general",
        },
        {
          kind: "canon",
          value: "7",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Si alguno dixere, que no siempre, ni á todos se dá gracia por estos Sacramentos, en quanto está de parte de Dios, aunque los reciban dignamente; sino que la dan alguna vez, y á algunos; sea excomulgado.",
          edition: "trent.es",
          page: "112",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7sacr8: {
    id: "T7sacr8",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "De los sacramentos en general",
        },
        {
          kind: "canon",
          value: "8",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, per ipsa novae legis Sacramenta ex opere operato non conferri gratiam, sed solam fidem divinae promissionis ad gratiam consequendam sufficere; anathema sit.",
          edition: "trent.la",
          page: "112",
        },
        es: {
          text: "Si alguno dixere, que por los mismos Sacramentos de la nueva ley no se confiere gracia ex opere operato, sino que basta para conseguirla sola la fe en las divinas promesas; sea excomulgado.",
          edition: "trent.es",
          page: "112",
          translation: "printed-original",
        },
        en: {
          text: "If anyone saith that by the said sacraments of the New Law grace is not conferred through the act performed, but that faith alone in the divine promise suffices for the obtaining of grace; let him be anathema.",
          edition: "trent.en",
          page: "55",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7sacr9: {
    id: "T7sacr9",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "De los sacramentos en general",
        },
        {
          kind: "canon",
          value: "9",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, in tribus Sacramentis, Baptismo scilicet, Confirmatione, et Ordine, non imprimi characterem in anima; hoc est, signum quoddam spirituale, et indelebile, unde ea iterari non possunt; anathema sit.",
          edition: "trent.la",
          page: "112",
        },
        es: {
          text: "Si alguno dixere, que por los tres Sacramentos Bautismo, Confirmacion y Orden, no se imprime carácter en el alma; esto es, cierta señal espiritual é indeleble, por cuya razon no se pueden reiterar estos Sacramentos; sea excomulgado.",
          edition: "trent.es",
          page: "112",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7sacr10: {
    id: "T7sacr10",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "De los sacramentos en general",
        },
        {
          kind: "canon",
          value: "10",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Si alguno dixere, que todos los cristianos tienen potestad de predicar, y de administrar todos los Sacramentos; sea excomulgado",
          edition: "trent.es",
          page: "112–113",
          translation: "printed-original",
        },
        en: {
          text: "that all Christians have power to administer the word, and all the sacraments",
          edition: "trent.en",
          page: "55",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7sacr11: {
    id: "T7sacr11",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "De los sacramentos en general",
        },
        {
          kind: "canon",
          value: "11",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Si alguno dixere, que no se requiere en los ministros quando celebran, ó confieren los Sacramentos, intencion de hacer por lo menos lo mismo que hace la Iglesia; sea excomulgado.",
          edition: "trent.es",
          page: "113",
          translation: "printed-original",
        },
        en: {
          text: "the intention at least of doing what the Church does",
          edition: "trent.en",
          page: "55",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7sacr12: {
    id: "T7sacr12",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "De los sacramentos en general",
        },
        {
          kind: "canon",
          value: "12",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7b2: {
    id: "T7b2",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "Del bautismo",
        },
        {
          kind: "canon",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, aquam veram, et naturalem non esse de necessitate Baptismi …; anathema sit.",
          edition: "trent.la",
          page: "114",
        },
        es: {
          text: "Si alguno dixere, que el agua verdadera y natural no es necesaria para el Sacramento del Bautismo, y por este motivo torciere á algun sentido metafórico aquellas palabras de nuestro señor Jesu-Cristo: 'Quien no renaciere del agua, y del Espíritu Santo;' sea excomulgado",
          edition: "trent.es",
          page: "114",
          translation: "printed-original",
        },
        en: {
          text: "to some sort of metaphor",
          edition: "trent.en",
          page: "56",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7b3: {
    id: "T7b3",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "Del bautismo",
        },
        {
          kind: "canon",
          value: "3",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, in ecclesia Romana, quae omnium ecclesiarum mater est, et magistra, non esse veram de Baptismi Sacramento doctrinam; anathema sit.",
          edition: "trent.la",
          page: "114",
        },
        es: {
          text: "Si alguno dixere, que no hay en la Iglesia Romana, madre y maestra de todas las Iglesias, verdadera doctrina sobre el Sacramento del Bautismo: sea excomulgado",
          edition: "trent.es",
          page: "114",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7b4: {
    id: "T7b4",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "Del bautismo",
        },
        {
          kind: "canon",
          value: "4",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, Baptismum, qui etiam datur ab haereticis in nomine Patris, et Filii, et Spiritus Sancti, cum intentione faciendi, quod facit Ecclesia, non esse verum Baptismum; anathema sit.",
          edition: "trent.la",
          page: "114",
        },
        es: {
          text: "Si alguno dixere, que el Bautismo, aun el que confieren los hereges en el nombre del Padre, del Hijo y del Espíritu Santo, con intencion de hacer lo que hace la Iglesia, no es verdadero Bautismo; sea excomulgado.",
          edition: "trent.es",
          page: "114",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7b5: {
    id: "T7b5",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "Del bautismo",
        },
        {
          kind: "canon",
          value: "5",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, Baptismum liberum esse, hoc est, non necessarium ad salutem; anathema sit.",
          edition: "trent.la",
          page: "114",
        },
        es: {
          text: "Si alguno dixere, que el Bautismo es arbitrario, esto es, no preciso para conseguir la salvacion; sea excomulgado.",
          edition: "trent.es",
          page: "114",
          translation: "printed-original",
        },
        en: {
          text: "If anyone saith that baptism is free, that is, not necessary unto salvation; let him be anathema.",
          edition: "trent.en",
          page: "56",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7b7: {
    id: "T7b7",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "Del bautismo",
        },
        {
          kind: "canon",
          value: "7",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Si alguno dixere, que los bautizados solo están obligados en fuerza del mismo Bautismo á guardar la fe, pero no à la observancia de toda la ley de Jesu-Cristo; sea excomulgado",
          edition: "trent.es",
          page: "115",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7b10: {
    id: "T7b10",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "Del bautismo",
        },
        {
          kind: "canon",
          value: "10",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Si alguno dixere, que todos los pecados cometidos despues del Bautismo, se perdonan, ó pasan à ser veniales con solo el recuerdo, y fe del Bautismo recibido; sea excomulgado.",
          edition: "trent.es",
          page: "115–116",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7b11: {
    id: "T7b11",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "Del bautismo",
        },
        {
          kind: "canon",
          value: "11",
        },
      ],
    },
    excerpts: [
      {
        en: {
          text: "is to be repeated, for him who has denied the faith of Christ amongst Infidels, when he is converted unto penitence",
          edition: "trent.en",
          page: "57",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T7b13: {
    id: "T7b13",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "VII",
        },
        {
          kind: "locus",
          value: "Del bautismo",
        },
        {
          kind: "canon",
          value: "13",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, parvulos, eo quod actum credendi non habent, suscepto Baptismo inter fideles computandos non esse; ac propterea, cum ad annos discretionis pervenerint, esse rebaptizandos; aut praestare omitti eorum Baptisma, quam eos non actu proprio credentes baptizari in sola fide Ecclesiae; anathema sit.",
          edition: "trent.la",
          page: "116",
        },
        es: {
          text: "Si alguno dixere, que los párvulos despues de recibido el Bautismo, no se deben contar entre los fieles, por quanto no hacen acto de fe, y que por esta causa se deben rebautizar quando lleguen á la edad y uso de la razon; ó que es mas conveniente dexar de bautizarles, que el conferirles el Bautismo en sola la fe de la Iglesia sin que ellos crean con acto suyo propio; sea excomulgado.",
          edition: "trent.es",
          page: "116",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1547,
      month: 3,
      day: 3,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T14c2: {
    id: "T14c2",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIV",
        },
        {
          kind: "chapter",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "uno es el fruto del Bautismo, y otro el de la Penitencia; pues vistiendonos de Cristo por el Bautismo, pasamos à ser nuevas criaturas suyas, consiguiendo plena y entera remision de los pecados, mas por medio del Sacramento de la Penitencia no podemos llegar de modo alguno á esta renovacion é integridad, sin muchas lágrimas y trabajos de nuestra parte […] En consecuencia es tan necesario este Sacramento de Penitencia á los que han pecado despues del Bautismo, para conseguir la salvacion, como lo es el mismo Bautismo á los que no han sido reengendrados.",
          edition: "trent.es",
          page: "196–197",
          translation: "printed-original",
        },
        en: {
          text: "one is the fruit of baptism, and another that of penance. For, by baptism putting on Christ, we are made therein entirely a new creature, obtaining a full and entire remission of all sins … so that penance has justly been called by holy Fathers a laborious kind of baptism.",
          edition: "trent.en",
          page: "94",
        },
      },
      {
        es: {
          text: "«no quiso que si estos despues se contaminasen con alguna culpa, se purificáran repitiendo el Bautismo» … «no sola una vez, sino quantas recurriesen à él arrepentidos»",
          edition: "trent.es",
          translation: "printed-original",
        },
        note: "195–197)",
        citedIn: ["OB-4"],
      },
    ],
    date: {
      year: 1551,
      month: 11,
      day: 25,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T14can2: {
    id: "T14can2",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIV",
        },
        {
          kind: "locus",
          value: "De la Penitencia",
        },
        {
          kind: "canon",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis Sacramenta confundens, ipsum Baptismum Poenitentiae Sacramentum esse dixerit, quasi haec duo Sacramenta distincta non sint, atque ideo Poenitentiam non recte secundam post naufragium tabulam appellari; anathema sit.",
          edition: "trent.la",
          page: "223",
        },
        es: {
          text: "Si alguno, confundiendo los Sacramentos, dixere, que el Bautismo es el mismo Sacramento de la Penitencia, como si estos dos Sacramentos no fuesen distintos; y que por lo mismo no se dá con propiedad à la Penitencia el nombre de segunda tabla despues del naufragio; sea excomulgado",
          edition: "trent.es",
          page: "223",
          translation: "printed-original",
        },
        en: {
          text: "If anyone, confounding the sacraments, saith that baptism is itself the sacrament of Penance, as though these two sacraments were not distinct, and that therefore Penance is not rightly called a second plank after shipwreck; let him be anathema.",
          edition: "trent.en",
          page: "107",
        },
      },
    ],
    date: {
      year: 1551,
      month: 11,
      day: 25,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  FLOexs: {
    id: "FLOexs",
    work: "florence-exsultate",
    kind: "source",
    locator: {
      parts: [],
    },
    excerpts: [
      {
        la: {
          text: "Forma hujus sacramenti sunt verba salvatoris, quibus hoc conficit sacramentum. Sacerdos enim in persona Christi loquens, hoc conficit sacramentum. Nam ipsorum verborum virtute, substantia panis in corpus Christi, & substantia vini in sanguinem convertuntur",
          edition: "florence-exsultate.la",
        },
        es: {
          text: "la forma de este sacramento son las palabras del Salvador con las que realizó este sacramento; pues el sacerdote, hablando en la persona de Cristo, realiza este sacramento. Por la fuerza de esas mismas palabras, la sustancia del pan se convierte en el cuerpo de Cristo, y la sustancia del vino en su sangre.",
          edition: "florence-exsultate.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de Mansi",
        },
        note: "Mansi 31, col. 1057 (en el margen: «Forte, efficitur»). En la misma columna, a los armenios se les manda mezclar «paululum aquae» con el vino",
      },
    ],
    date: {
      year: 1439,
      month: 11,
      day: 22,
    },
    link: {
      href: "https://archive.org/details/sacrorumconcilio0031jonn",
      label: "Ver el escaneo de Mansi en archive.org",
    },
  },
  LAT1: {
    id: "LAT1",
    work: "lateran-4",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "constitution",
          value: "1",
        },
      ],
      qualifier: "Firmiter",
    },
    excerpts: [
      {
        la: {
          text: "…cujus corpus et sanguis in sacramento altaris sub speciebus panis et vini veraciter continentur; transsubstantiatis pane in corpus et vino in sanguinem, potestate divina…",
          edition: "lateran-4.la",
          page: "560",
        },
        es: {
          text: "…cuyo Cuerpo y Sangre están realmente en el Sacramento del Altar, baxo las especies de pan y de vino, transubstanciándose el pan en el Cuerpo de Jesu-Christo, y el vino en su Sangre, mediante el poder divino…",
          edition: "lateran-4.es",
          page: "170",
          translation: "printed-original",
        },
        en: {
          text: "whose body and blood are truly contained in the sacrament of the altar under the forms of bread and wine; the bread being changed (transsubstantiatis) by divine power into the body, and the wine into the blood",
          edition: "lateran-4.en",
          page: "238",
        },
        note: "«realmente» traduce veraciter",
      },
      {
        la: {
          text: "Et hoc utique sacramentum nemo potest conficere, nisi sacerdos, qui fuerit ordinatus secundum claves ecclesiae, quas ipse concessit apostolis et eorum successoribus Jesus Christus.",
          edition: "lateran-4.la",
          page: "560",
        },
        es: {
          text: "Nadie puede consagrar este misterio, sino solo el Sacerdote legitimamente ordenado, segun la potestad de las llaves de la Iglesia, que Jesu-Christo concedió á los Apóstoles, y á sus succesores",
          edition: "lateran-4.es",
          page: "170–171",
          translation: "printed-original",
        },
        en: {
          text: "And this sacrament no one can effect except the priest who has been duly ordained in accordance with the keys of the Church, which Jesus Christ Himself gave to the Apostles and their successors.",
          edition: "lateran-4.en",
          page: "238",
        },
      },
    ],
    date: {
      year: 1215,
    },
    link: {
      href: "https://archive.org/details/DisciplinaryCouncils",
      label: "Ver el escaneo de Schroeder en archive.org",
    },
  },
  VIEN: {
    id: "VIEN",
    work: "vienne",
    kind: "source",
    locator: {
      parts: [],
      qualifier: "decreto 1",
    },
    excerpts: [
      {
        la: {
          text: "baptisma unicum baptizatos omnes in Christo regenerans … credimus esse tam adultis quam parvulis communiter perfectum remedium ad salutem … opinionem secundam (quae dicit, tam parvulis quam adultis conferri in baptismo informantem gratiam et virtutes) tanquam probabiliorem … sacro approbante concilio duximus eligendam.",
          edition: "schroeder.la",
          page: "607–608",
        },
        es: {
          text: "un único bautismo, que regenera en Cristo a todos los bautizados, … creemos que es, para adultos y niños por igual, remedio perfecto para la salvación … con la aprobación del santo concilio elegimos como más probable la segunda opinión (que dice que en el bautismo se confieren a niños y adultos la gracia informante y las virtudes)",
          edition: "schroeder.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "a single baptism … regenerates all those baptized in Christ, we believe that it is a perfect remedy unto salvation for adults as well as for infants … with the approval of the holy council choose the second opinion (which says that in baptism the virtues and the gratia informans are infused in children and adults alike) as the more probable one",
          edition: "schroeder.en",
        },
        note: ", p. 374 (inglés)",
      },
    ],
    date: {
      year: 1311,
      yearEnd: 1312,
    },
    link: {
      href: "https://archive.org/details/DisciplinaryCouncils",
      label: "Ver el escaneo de Schroeder en archive.org",
    },
  },
  CEC403: {
    id: "CEC403",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "403",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Siguiendo a san Pablo, la Iglesia ha enseñado siempre que la inmensa miseria que oprime a los hombres y su inclinación al mal y a la muerte no son comprensibles sin su conexión con el pecado de Adán y con el hecho de que nos ha transmitido un pecado con que todos nacemos afectados y que es 'muerte del alma' (Concilio de Trento: DS 1512). Por esta certeza de fe, la Iglesia concede el Bautismo para la remisión de los pecados incluso a los niños que no han cometido pecado personal",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s2c1p7_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC405: {
    id: "CEC405",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "405",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Aunque propio de cada uno […], el pecado original no tiene, en ningún descendiente de Adán, un carácter de falta personal",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["DO-4"],
      },
      {
        es: {
          text: "El Bautismo, dando la vida de la gracia de Cristo, borra el pecado original y devuelve el hombre a Dios, pero las consecuencias para la naturaleza, debilitada e inclinada al mal, persisten en el hombre y lo llaman al combate espiritual",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["OB-5"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p1s2c1p7_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC845: {
    id: "CEC845",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "845",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«está prefigurada por el Arca de Noé que es la única que salva del diluvio (cf 1 P 3, 20-21)»",
          edition: "cec.es",
          translation: "official",
        },
        note: "La Iglesia",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a9p3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1094: {
    id: "CEC1094",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1094",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«el diluvio y el arca de Noé prefiguraban la salvación por el Bautismo (cf 1 P 3, 21)»",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s1c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1992: {
    id: "CEC1992",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1992",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La justificación nos fue merecida por la pasión de Cristo, que se ofreció en la cruz como hostia viva, santa y agradable a Dios y cuya sangre vino a ser instrumento de propiciación por los pecados de todos los hombres. La justificación es concedida por el Bautismo, sacramento de la fe",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p3s1c3a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC977: {
    id: "CEC977",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "977",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«el primero y principal sacramento del perdón de los pecados»",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a10_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC980: {
    id: "CEC980",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "980",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los Padres tuvieron razón en llamar a la penitencia 'un bautismo laborioso' (San Gregorio Nacianceno, Oratio 39, 17)",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["Cita a Trento (DS 1672)"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p123a10_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1123: {
    id: "CEC1123",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1123",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«no sólo suponen la fe, también la fortalecen, la alimentan y la expresan con palabras y acciones; por se llaman sacramentos de la fe»",
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita Sacrosanctum Concilium 59",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s1c1a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1127: {
    id: "CEC1127",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1127",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Celebrados dignamente en la fe, los sacramentos confieren la gracia que significan (cf Concilio de Trento: DS 1605 y 1606). Son eficaces porque en ellos actúa Cristo mismo; Él es quien bautiza, Él quien actúa en sus sacramentos con el fin de comunicar la gracia que el sacramento significa. El Padre escucha siempre la oración de la Iglesia de su Hijo que, en la epíclesis de cada sacramento, expresa su fe en el poder del Espíritu",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s1c1a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1128: {
    id: "CEC1128",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1128",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'los sacramentos obran ex opere operato (según las palabras mismas del Concilio: "por el hecho mismo de que la acción es realizada"), es decir, en virtud de la obra salvífica de Cristo, realizada de una vez por todas … independientemente de la santidad personal del ministro. Sin embargo, los frutos de los sacramentos dependen también de las disposiciones del que los recibe.',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s1c1a2_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1212: {
    id: "CEC1212",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1212",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Mediante los sacramentos de la iniciación cristiana, el Bautismo, la Confirmación y la Eucaristía, se ponen los fundamentos de toda vida cristiana",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1213: {
    id: "CEC1213",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1213",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'El santo Bautismo es el fundamento de toda la vida cristiana, el pórtico de la vida en el espíritu ("vitae spiritualis ianua") y la puerta que abre el acceso a los otros sacramentos. Por el Bautismo somos liberados del pecado y regenerados como hijos de Dios, llegamos a ser miembros de Cristo y somos incorporados a la Iglesia y hechos partícipes de su misión (cf Concilio de Florencia: DS 1314; CIC, can 204,1; 849; CCEO 675,1): "Baptismus est sacramentum regenerationis per aquam in verbo" ("El bautismo es el sacramento del nuevo nacimiento por el agua y la palabra": Catecismo Romano 2,2,5).',
          edition: "cec.es",
          translation: "official",
        },
        en: {
          text: "Holy Baptism is the basis of the whole Christian life, the gateway to life in the Spirit (vitae spiritualis ianua), and the door which gives access to the other sacraments. Through Baptism we are freed from sin and reborn as sons of God; we become members of Christ, are incorporated into the Church and made sharers in her mission: 'Baptism is the sacrament of regeneration through water in the word.'",
          edition: "cec.en",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1214: {
    id: "CEC1214",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1214",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "bautizar (baptizein en griego) significa 'sumergir', 'introducir dentro del agua'; la 'inmersión' en el agua simboliza el acto de sepultar al catecúmeno en la muerte de Cristo, de donde sale por la resurrección con Él (cf Rm 6,3-4; Col 2,12) como 'nueva criatura'",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["DO-6"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1215: {
    id: "CEC1215",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1215",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: '«"baño de regeneración y de renovación del Espíritu Santo" (Tt 3,5), porque significa y realiza ese nacimiento del agua y del Espíritu sin el cual "nadie puede entrar en el Reino de Dios" (Jn 3,5)»',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1216: {
    id: "CEC1216",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1216",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'El Bautismo "es el más bello y magnífico de los dones de Dios […] lo llamamos don, gracia, unción, iluminación, vestidura de incorruptibilidad, baño de regeneración, sello y todo lo más precioso que hay. Don, porque es conferido a los que no aportan nada; gracia, porque es dado incluso a culpables; bautismo, porque el pecado es sepultado en el agua"',
          edition: "cec.es",
          translation: "official",
        },
        en: {
          text: "Baptism is God's most beautiful and magnificent gift.... It is called gift because it is conferred on those who bring nothing of their own; grace since it is given even to the guilty; Baptism because sin is buried in the water",
          edition: "cec.en",
        },
        note: "Cita a san Gregorio Nacianceno, Oratio 40, 3-4",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1219: {
    id: "CEC1219",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1219",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La Iglesia ha visto en el arca de Noé una prefiguración de la salvación por el bautismo. En efecto, por medio de ella 'unos pocos, es decir, ocho personas, fueron salvados a través del agua' (1 P 3,20)",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1223: {
    id: "CEC1223",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1223–1224",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1225: {
    id: "CEC1225",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1225",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La sangre y el agua que brotaron del costado traspasado de Jesús crucificado (cf. Jn 19,34) son figuras del Bautismo y de la Eucaristía",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "Considera dónde eres bautizado, de dónde viene el Bautismo: de la cruz de Cristo, de la muerte de Cristo. Ahí está todo el misterio: Él padeció por ti. En él eres rescatado, en él eres salvado",
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita a san Ambrosio, De sacramentis 2, 2, 6 (c. 387–391)",
      },
      {
        es: {
          text: "«es posible 'nacer del agua y del Espíritu' para entrar en el Reino de Dios»",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["DO-5"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1226: {
    id: "CEC1226",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1226",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "'Ten fe en el Señor Jesús y te salvarás tú y tu casa', declara san. Pablo [sic] a su carcelero en Filipos. El relato continúa: 'el carcelero inmediatamente recibió el bautismo, él y todos los suyos' (Hch 16,31-33)",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1227: {
    id: "CEC1227",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1227",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: '«Según el apóstol san Pablo, por el Bautismo el creyente participa en la muerte de Cristo; es sepultado y resucita con Él» … «Los bautizados se han "revestido de Cristo" (Ga 3,27). Por el Espíritu Santo, el Bautismo es un baño que purifica, santifica y justifica (cf 1 Co 6,11; 12,13).»',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1228: {
    id: "CEC1228",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1228",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'San Agustín dirá del Bautismo: "Accedit verbum ad elementum, et fit sacramentum" ("Se une la palabra a la materia, y se hace el sacramento")',
          edition: "cec.es",
          translation: "official",
        },
        en: {
          text: "The word is brought to the material element, and it becomes a sacrament.",
          edition: "cec.en",
        },
        note: "Cita a san Agustín, In Iohannis evangelium tractatus 80, 3",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1231: {
    id: "CEC1231",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1231",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Por su naturaleza misma, el Bautismo de niños exige un catecumenado postbautismal. No se trata sólo de la necesidad de una instrucción posterior al Bautismo, sino del desarrollo necesario de la gracia bautismal en el crecimiento de la persona",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1248: {
    id: "CEC1248",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1248",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«llevar a madurez su conversión y su fe»",
          edition: "cec.es",
          translation: "official",
        },
        note: "Finalidad del catecumenado de adultos",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1232: {
    id: "CEC1232",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1232–1233",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1234: {
    id: "CEC1234",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1234–1245",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1239: {
    id: "CEC1239",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1239–1240",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Bautismo es realizado de la manera más significativa mediante la triple inmersión en el agua bautismal. Pero desde la antigüedad puede ser también conferido derramando tres veces agua sobre la cabeza del candidato",
          edition: "cec.es",
          translation: "official",
        },
        at: "n. 1239",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1243: {
    id: "CEC1243",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1243",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1244: {
    id: "CEC1244",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1244",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1247: {
    id: "CEC1247",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1247–1249",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1250: {
    id: "CEC1250",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1250",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Puesto que nacen con una naturaleza humana caída y manchada por el pecado original, los niños necesitan también el nuevo nacimiento en el Bautismo (cf DS 1514) […] La pura gratuidad de la gracia de la salvación se manifiesta particularmente en el bautismo de niños. Por tanto, la Iglesia y los padres privarían al niño de la gracia inestimable de ser hijo de Dios si no le administraran el Bautismo poco después de su nacimiento",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1251: {
    id: "CEC1251",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1251",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1252: {
    id: "CEC1252",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1252",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'La práctica de bautizar a los niños pequeños es una tradición inmemorial de la Iglesia. Está atestiguada explícitamente desde el siglo II. Sin embargo, es muy posible que, desde el comienzo de la predicación apostólica, cuando "casas" enteras recibieron el Bautismo (cf Hch 16,15.33; 18,8; 1 Co 1,16), se haya bautizado también a los niños (cf. Congregación para la Doctrina de la Fe, Instr. Pastoralis actio 4 […])',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1253: {
    id: "CEC1253",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1253–1254",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Sólo en la fe de la Iglesia puede creer cada uno de los fieles. La fe que se requiere para el Bautismo no es una fe perfecta y madura, sino un comienzo que está llamado a desarrollarse",
          edition: "cec.es",
          translation: "official",
        },
        at: "n. 1253",
      },
      {
        es: {
          text: "El Bautismo es el sacramento de la fe (cf Mc 16,16). Pero la fe tiene necesidad de la comunidad de creyentes […] En todos los bautizados, niños o adultos, la fe debe crecer después del Bautismo.",
          edition: "cec.es",
          translation: "official",
        },
        at: "nn. 1253–1254",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1254: {
    id: "CEC1254",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1254",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "En todos los bautizados, niños o adultos, la fe debe crecer después del Bautismo. Por eso, la Iglesia celebra cada año en la vigilia pascual la renovación de las promesas del Bautismo.",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["CV-10"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1255: {
    id: "CEC1255",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1255",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1256: {
    id: "CEC1256",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1256",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Son ministros ordinarios del Bautismo el obispo y el presbítero y, en la Iglesia latina, también el diácono […] En caso de necesidad, cualquier persona, incluso no bautizada, puede bautizar (cf CIC can. 861, § 2) si tiene la intención requerida y utiliza la fórmula bautismal trinitaria. La intención requerida consiste en querer hacer lo que hace la Iglesia al bautizar. La Iglesia ve la razón de esta posibilidad en la voluntad salvífica universal de Dios (cf 1 Tm 2,4) y en la necesidad del Bautismo para la salvación (cf Mc 16,16).",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1257: {
    id: "CEC1257",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1257",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Señor mismo afirma que el Bautismo es necesario para la salvación (cf Jn 3,5) […] El Bautismo es necesario para la salvación en aquellos a los que el Evangelio ha sido anunciado y han tenido la posibilidad de pedir este sacramento (cf Mc 16,16). La Iglesia no conoce otro medio que el Bautismo para asegurar la entrada en la bienaventuranza eterna […] Dios ha vinculado la salvación al sacramento del Bautismo, sin embargo, Él no queda sometido a sus sacramentos",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "El Señor mismo afirma que el Bautismo es necesario para la salvación (cf Jn 3,5). Por ello mandó a sus discípulos a anunciar el Evangelio y bautizar a todas las naciones (cf Mt 28, 19-20; cf DS 1618; LG 14; AG 5).",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["Citado en Por qué (PQ-1)"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1258: {
    id: "CEC1258",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1258",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Desde siempre, la Iglesia posee la firme convicción de que quienes padecen la muerte por razón de la fe, sin haber recibido el Bautismo, son bautizados por su muerte con Cristo y por Cristo. Este Bautismo de sangre como el deseo del Bautismo, produce los frutos del Bautismo sin ser sacramento",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1259: {
    id: "CEC1259",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1259",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "A los catecúmenos que mueren antes de su Bautismo, el deseo explícito de recibir el Bautismo, unido al arrepentimiento de sus pecados y a la caridad, les asegura la salvación que no han podido recibir por el sacramento",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1260: {
    id: "CEC1260",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1260",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Todo hombre que, ignorando el Evangelio de Cristo y su Iglesia, busca la verdad y hace la voluntad de Dios según él la conoce, puede ser salvado. Se puede suponer que semejantes personas habrían deseado explícitamente el Bautismo si hubiesen conocido su necesidad",
          edition: "cec.es",
          translation: "official",
        },
        note: "El párrafo empieza con Gaudium et spes 22 (cf Lumen gentium 16)",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1261: {
    id: "CEC1261",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1261",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "En cuanto a los niños muertos sin Bautismo, la Iglesia sólo puede confiarlos a la misericordia divina, como hace en el rito de las exequias por ellos. En efecto, la gran misericordia de Dios, que quiere que todos los hombres se salven (cf 1 Tm 2,4) y la ternura de Jesús con los niños, que le hizo decir: 'Dejad que los niños se acerquen a mí, no se lo impidáis' (Mc 10,14), nos permiten confiar en que haya un camino de salvación para los niños que mueren sin Bautismo. Por esto es más apremiante aún la llamada de la Iglesia a no impedir que los niños pequeños vengan a Cristo por el don del santo Bautismo",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1262: {
    id: "CEC1262",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1262",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los dos efectos principales, por tanto, son la purificación de los pecados y el nuevo nacimiento en el Espíritu Santo (cf Hch 2,38; Jn 3,5).",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1263: {
    id: "CEC1263",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1263",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Por el Bautismo, todos los pecados son perdonados, el pecado original y todos los pecados personales así como todas las penas del pecado (cf DS 1316)",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "«en los que han sido regenerados no permanece nada que les impida entrar en el Reino de Dios»",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["OB-5"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1264: {
    id: "CEC1264",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1264",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: '"La concupiscencia, dejada para el combate, no puede dañar a los que no la consienten y la resisten con coraje por la gracia de Jesucristo"',
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["Cita a Trento (DS 1515)"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1265: {
    id: "CEC1265",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1265",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'hace también del neófito "una nueva creatura" (2 Co 5,17), un hijo adoptivo de Dios (cf Ga 4,5-7) que ha sido hecho "partícipe de la naturaleza divina" (2 P 1,4), miembro de Cristo […] y templo del Espíritu Santo',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1266: {
    id: "CEC1266",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1266",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La Santísima Trinidad da al bautizado la gracia santificante, la gracia de la justificación que: — le hace capaz de creer en Dios, de esperar en Él y de amarlo mediante las virtudes teologales",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1267: {
    id: "CEC1267",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1267",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'El Bautismo hace de nosotros miembros del Cuerpo de Cristo. "Por tanto […] somos miembros los unos de los otros" (Ef 4,25). El Bautismo incorpora a la Iglesia. De las fuentes bautismales nace el único pueblo de Dios de la Nueva Alianza que trasciende todos los límites naturales o humanos de las naciones, las culturas, las razas y los sexos',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1268: {
    id: "CEC1268",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1268",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Por el Bautismo participan del sacerdocio de Cristo, de su misión profética y real […] El Bautismo hace participar en el sacerdocio común de los fieles",
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita 1 P 2,5 y 2,9",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1269: {
    id: "CEC1269",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1269–1270",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«ya no se pertenece a sí mismo» … «responsabilidades y deberes» … «derechos en el seno de la Iglesia: recibir los sacramentos, ser alimentado con la palabra de Dios y ser sostenido por los otros auxilios espirituales de la Iglesia» … «están obligados a confesar delante de los hombres la fe que recibieron de Dios por medio de la Iglesia»",
          edition: "cec.es",
          translation: "official",
        },
        note: "El último fragmento cita Lumen gentium 11",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1271: {
    id: "CEC1271",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1271",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«reconocidos con razón por los hijos de la Iglesia católica como hermanos del Señor» … «un vínculo sacramental de unidad»",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1272: {
    id: "CEC1272",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1272 y 1280",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El Bautismo imprime en el cristiano un sello espiritual indeleble (character) de su pertenencia a Cristo. Este sello no es borrado por ningún pecado, aunque el pecado impida al Bautismo dar frutos de salvación (cf DS 1609-1619). Dado una vez por todas, el Bautismo no puede ser reiterado.",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1273: {
    id: "CEC1273",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1273",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Incorporados a la Iglesia por el Bautismo, los fieles han recibido el carácter sacramental que los consagra para el culto religioso cristiano (cf LG 11)",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1274: {
    id: "CEC1274",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1272–1274",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«con un sello espiritual indeleble» … «Dado una vez por todas, el Bautismo no puede ser reiterado»",
          edition: "cec.es",
          translation: "official",
        },
        note: "El sello «para el día de la redención» (Ef 4,30; cf Ef 1,13-14; 2 Co 1,21-22)",
      },
      {
        es: {
          text: "«El Bautismo, en efecto, es el sello de la vida eterna»",
          edition: "cec.es",
          translation: "official",
        },
        note: "n. 1274, cita a san Ireneo, Demonstratio 3",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1275: {
    id: "CEC1275",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1275",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La iniciación cristiana se realiza mediante el conjunto de tres sacramentos: el Bautismo, que es el comienzo de la vida nueva; la Confirmación, que es su afianzamiento; y la Eucaristía, que alimenta al discípulo con el Cuerpo y la Sangre de Cristo para ser transformado en Él.",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1278: {
    id: "CEC1278",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1278",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El rito esencial del Bautismo consiste en sumergir en el agua al candidato o derramar agua sobre su cabeza, pronunciando la invocación de la Santísima Trinidad",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1282: {
    id: "CEC1282",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1282",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Desde los tiempos más antiguos, el Bautismo es dado a los niños, porque es una gracia y un don de Dios que no suponen méritos humanos; los niños son bautizados en la fe de la Iglesia",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1283: {
    id: "CEC1283",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1283",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1284: {
    id: "CEC1284",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1284",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1306: {
    id: "CEC1306",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1306",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'Puesto que Bautismo, Confirmación y Eucaristía forman una unidad, de ahí se sigue que "los fieles tienen la obligación de recibir este sacramento en tiempo oportuno" (CIC, can. 890), porque sin la Confirmación y la Eucaristía, el sacramento del Bautismo es ciertamente válido y eficaz, pero la iniciación cristiana queda incompleta.',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1426: {
    id: "CEC1426",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1426",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«a fin de que sirva de prueba en ellos en el combate de la vida cristiana»",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c2a4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1427: {
    id: "CEC1427",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1427",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«el lugar principal de la conversión primera y fundamental»",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c2a4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1428: {
    id: "CEC1428",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1428",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«una tarea ininterrumpida para toda la Iglesia» … «segunda conversión»",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c2a4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1446: {
    id: "CEC1446",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1446",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'Los Padres de la Iglesia presentan este sacramento como "la segunda tabla (de salvación) después del naufragio que es la pérdida de la gracia" (Concilio de Trento: DS 1542; cf Tertuliano, De paenitentia 4, 2)',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c2a4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC842: {
    id: "CIC842",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "842",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "§1 Quien no ha recibido el bautismo, no puede ser admitido válidamente a los demás sacramentos. §2 Los sacramentos del bautismo, de la confirmación y de la santísima Eucaristía están tan íntimamente unidos entre sí, que todos son necesarios para la plena iniciación cristiana.",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann840-848_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC845: {
    id: "CIC845",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "845 y 869",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los sacramentos del bautismo, de la confirmación y del orden imprimen carácter y, por tanto, no pueden reiterarse.",
          edition: "cic.es",
          translation: "official",
        },
        at: "845 §1",
      },
      {
        es: {
          text: "Los bautizados en una comunidad eclesial no católica, no deben ser bautizados bajo condición, a no ser que haya un motivo serio para dudar de la validez de su bautismo, atendiendo tanto a la materia y forma… como a la intención del ministro y del bautizado",
          edition: "cic.es",
          translation: "official",
        },
        at: "869 §2",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann840-848_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC845a: {
    id: "CIC845a",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "845",
        },
        {
          kind: "section",
          value: "1",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los sacramentos del bautismo, de la confirmación y del orden imprimen carácter y, por tanto, no pueden reiterarse.",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann840-848_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC849: {
    id: "CIC849",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "849",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El bautismo, puerta de los sacramentos, cuya recepción de hecho o al menos de deseo es necesaria para la salvación, por el cual los hombres son liberados de los pecados, reengendrados como hijos de Dios e incorporados a la Iglesia, quedando configurados con Cristo por el carácter indeleble, se confiere válidamente sólo mediante la ablución con agua verdadera acompañada de la debida forma verbal.",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann849_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC851: {
    id: "CIC851",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "851 y 872–874",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«convenientemente ilustrados sobre el significado de este sacramento» … «una vida cristiana congruente con el bautismo»",
          edition: "cic.es",
          translation: "official",
        },
        note: "851 2° y 872",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann850-860_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC851a: {
    id: "CIC851a",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "851",
        },
        {
          kind: "number",
          value: "1",
        },
        {
          kind: "locus",
          value: "°",
        },
        {
          kind: "number",
          value: "865",
        },
        {
          kind: "section",
          value: "1",
        },
        {
          kind: "locus",
          value: "y 866",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«por pasos sucesivos» … «probado en la vida cristiana»",
          edition: "cic.es",
          translation: "official",
        },
        citedIn: ["CV-3"],
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann864-871_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC846: {
    id: "CIC846",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "854 y 846",
        },
        {
          kind: "section",
          value: "1",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El bautismo se ha de administrar por inmersión o por infusión, de acuerdo con las normas de la Conferencia Episcopal.",
          edition: "cic.es",
          translation: "official",
        },
        at: "854",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann850-860_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC854: {
    id: "CIC854",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "854",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El bautismo se ha de administrar por inmersión o por infusión, de acuerdo con las normas de la Conferencia Episcopal.",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann850-860_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC855: {
    id: "CIC855",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "855 y 877",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«que no se imponga un nombre ajeno al sentir cristiano»",
          edition: "cic.es",
          translation: "official",
        },
        at: "855",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann850-860_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC856: {
    id: "CIC856",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "856–860",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«una iglesia u oratorio»",
          edition: "cic.es",
          translation: "official",
        },
        at: "857",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann850-860_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC861: {
    id: "CIC861",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "861",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "§1 […] es ministro ordinario del bautismo el Obispo, el presbítero y el diácono. §2 en caso de necesidad, cualquier persona que tenga la debida intención; y han de procurar los pastores de almas, especialmente el párroco, que los fieles sepan bautizar debidamente.",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann861-863_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC867: {
    id: "CIC867",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "867 y 868",
        },
        {
          kind: "section",
          value: "1",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«tienen obligación de hacer que los hijos sean bautizados en las primeras semanas» … «debe ser bautizado sin demora» … «esperanza fundada»",
          edition: "cic.es",
          translation: "official",
        },
        citedIn: ["CV-1"],
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann864-871_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC867a: {
    id: "CIC867a",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "867",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«en las primeras semanas»",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann864-871_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC869: {
    id: "CIC869",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "869",
        },
        {
          kind: "section",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los bautizados en una comunidad eclesial no católica, no deben ser bautizados bajo condición, a no ser que haya un motivo serio para dudar de la validez de su bautismo, atendiendo tanto a la materia y forma… como a la intención del ministro y del bautizado",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann864-871_sp.html",
      label: "Leer en vatican.va",
    },
  },
  LG10: {
    id: "LG10",
    work: "lg",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "10",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los bautizados, en efecto, son consagrados por la regeneración y la unción del Espíritu Santo como casa espiritual y sacerdocio santo",
          edition: "vat2.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "El sacerdocio común de los fieles y el sacerdocio ministerial o jerárquico, aunque diferentes esencialmente y no sólo en grado, se ordenan, sin embargo, el uno al otro, pues ambos participan a su manera del único sacerdocio de Cristo",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  LG11: {
    id: "LG11",
    work: "lg",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "11",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«fuente y cumbre de toda la vida cristiana»",
          edition: "lg.es",
          translation: "official",
        },
        en: {
          text: "The Eucharist is 'the source and summit of the Christian life.' (CCC 1324)",
          edition: "lg.en",
        },
        note: "El Catecismo (n. 1324) lo cita en su español oficial como «fuente y culmen de toda la vida cristiana»",
      },
    ],
    date: {
      year: 1964,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  LG16: {
    id: "LG16",
    work: "lg",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "16",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Pues quienes, ignorando sin culpa el Evangelio de Cristo y su Iglesia, buscan, no obstante, a Dios con un corazón sincero y se esfuerzan, bajo el influjo de la gracia, en cumplir con obras su voluntad, conocida mediante el juicio de la conciencia, pueden conseguir la salvación eterna",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  UR22: {
    id: "UR22",
    work: "ur",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "22",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Por el sacramento del bautismo, debidamente administrado según la institución del Señor, y recibido con la requerida disposición del alma, el hombre se incorpora realmente a Cristo crucificado y glorioso y se regenera para el consorcio de la vida divina […] El bautismo, por tanto, constituye un poderoso vínculo sacramental de unidad entre todos los que con él se han regenerado. Sin embargo, el bautismo por sí mismo es tan sólo un principio y un comienzo, porque todo él se dirige a la consecución de la plenitud de la vida en Cristo.",
          edition: "vat2.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
      month: 11,
      day: 21,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_unitatis-redintegratio_sp.html",
      label: "Leer en vatican.va",
    },
  },
  SC64: {
    id: "SC64",
    work: "sc",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "64",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1963,
      month: 12,
      day: 4,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  GV: {
    id: "GV",
    work: "gestis-verbisque",
    kind: "source",
    locator: {
      parts: [],
    },
    excerpts: [
      {
        es: {
          text: '«"Te bautizo en nombre del Creador..."» … «"En nombre de papá y de mamá... nosotros te bautizamos"»',
          edition: "gestis-verbisque.es",
          translation: "official",
        },
        note: "Presentación: fórmulas que hicieron nula la celebración; el rito tuvo que repetirse",
      },
    ],
    date: {
      year: 2024,
      month: 2,
      day: 2,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_ddf_doc_20240202_gestis-verbisque_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CDF11: {
    id: "CDF11",
    work: "cdf-note-1998",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "section",
          value: "11",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "A las verdades correspondientes al primer apartado pertenecen […] la doctrina de la presencia real y substancial de Cristo en la eucaristía",
          edition: "cdf-note-1998.es",
          translation: "official",
        },
        note: "Nota 24: «Cf. DS 1636»",
      },
      {
        es: {
          text: "Sin ninguna intención de ser exhaustivos, pueden ser recordados, con finalidad meramente indicativa, algunos ejemplos",
          edition: "cdf-note-1998.es",
          translation: "official",
        },
        note: "Apertura del §11: la lista es ilustrativa",
      },
      {
        en: {
          text: "the sacrificial nature of the eucharistic celebration",
          edition: "cdf-note-1998.en",
        },
        note: "También en la lista del §11 (nota 25: DS 1740 y 1743)",
      },
    ],
    date: {
      year: 1998,
      month: 6,
      day: 29,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_1998_professio-fidei_sp.html",
      label: "Leer en vatican.va",
    },
  },
  FD: {
    id: "FD",
    work: "fidei-depositum",
    kind: "source",
    locator: {
      parts: [],
    },
    excerpts: [
      {
        en: {
          text: "a sure norm for teaching the faith",
          edition: "fidei-depositum.en",
        },
      },
    ],
    date: {
      year: 1992,
    },
  },
  WCF281: {
    id: "WCF281",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXVIII.1",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El bautismo es un sacramento del Nuevo Testamento, instituido por Jesu-Cristo. no solo para admitir la persona bautizada en la iglesia visible, sino tambien para que sea para ella un signo y sello del concierto de la gracia, del hecho que es ingerida en Cristo, de su regeneracion, de la remision de sus pecados, y de su sumision á Dios por Jesu-Cristo, á fin de andar en novedad de vida. Segun el mismo mandato de Jesu-Cristo, este sacramento debe continuarse en su iglesia hasta el fin del mundo.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "Baptism is a sacrament of the New Testament, ordained by Jesus Christ, not only for the solemn admission of the party baptized into the visible church, but also to be unto him a sign and seal of the covenant of grace, of his ingrafting into Christ, of regeneration, of remission of sins, and of his giving up unto God through Jesus Christ, to walk in newness of life: which sacrament is, by Christ's own appointment, to be continued in his church until the end of the world.",
          edition: "wcf.en",
        },
        note: "1894, p. 91; 1880, cap. XXVIII, I, p. 139. Textos de prueba: Mt 28:19; 1 Co 12:13; Ro 4:11 con Col 2:11–12; Gá 3:27; Ro 6:5; Tit 3:5; Mc 1:4; Ro 6:3–4; Mt 28:19–20",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  WCF2856: {
    id: "WCF2856",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXVIII.5–6",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Aunque el menosprecio ó descuido de esta ordenanza sea un grave pecado, sin embargo, la gracia y la salvacion, no son tan inseparablemente unidas con ella, que seria imposible ser regenerado ó salvo sin ella; y por otra parte, no resulta que todos los que sean bautizados, necesariamente son regenerados. La eficácia del bautismo no se limita al momento mismo en que se administra; sin embargo, por el propio uso de esta ordenanza, la gracia prometida no solamente se ofrece, sino realmente es en debido tiempo demostrada y dada por el Espíritu Santo, á aquellos (sean adultos ó párvulos) á quienes pertenece aquella gracia, segun el consejo de la propia voluntad de Dios.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "Although it be a great sin to contemn or neglect this ordinance, yet grace and salvation are not so inseparably annexed unto it, as that no person can be regenerated or saved without it, or that all that are baptized are undoubtedly regenerated. The efficacy of baptism is not tied to that moment of time wherein it is administered; yet notwithstanding, by the right use of this ordinance, the grace promised is not only offered, but really exhibited and conferred by the Holy Ghost, to such (whether of age or infants) as that grace belongeth unto, according to the counsel of God's own will, in his appointed time.",
          edition: "wcf.en",
        },
        note: "1894, p. 92; 1880, pp. 143–144. Textos de prueba: V: Lc 7:30 con Éx 4:24–26; Ro 4:11; Hch 10:2, 4, 22, 31, 45, 47; Hch 8:13, 23. VI: Jn 3:5, 8; Gá 3:27; Tit 3:5; Ef 5:25–26; Hch 2:38, 41",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  WLC161: {
    id: "WLC161",
    work: "wlc",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "question",
          value: "161",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los sacramentos llegan a ser medios eficaces de salvación no por algún poder que haya en ellos, ni por alguna virtud que proceda de la piedad o de la intención de quien los administra, sino solo por la obra del Espíritu Santo y la bendición de Cristo, que los instituyó.",
          edition: "wcf.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés",
        },
        en: {
          text: "The sacraments become effectual means of salvation, not by any power in themselves, or any virtue derived from the piety or intention of him by whom they are administered, but only by the working of the Holy Ghost, and the blessing of Christ, by whom they are instituted.",
          edition: "wcf.en",
        },
        note: "1894, p. 200. Textos de prueba: 1 P 3:21; Hch 8:13 con 8:23; 1 Co 3:6–7; 1 Co 12:13",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  WLC165: {
    id: "WLC165",
    work: "wlc",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "question",
          value: "165",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El bautismo es un sacramento del Nuevo Testamento, en el cual Cristo ha ordenado el lavamiento con agua en el nombre del Padre, y del Hijo, y del Espíritu Santo, para que sea signo y sello de la incorporación a él, de la remisión de los pecados por su sangre y de la regeneración por su Espíritu; de la adopción y de la resurrección para la vida eterna; y por el cual los bautizados son admitidos solemnemente en la iglesia visible y entran en un compromiso abierto y declarado de ser total y únicamente del Señor.",
          edition: "wcf.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés",
        },
        en: {
          text: "Baptism is a sacrament of the New Testament, wherein Christ hath ordained the washing with water in the name of the Father, and of the Son, and of the Holy Ghost, to be a sign and seal of ingrafting into himself, of remission of sins by his blood, and regeneration by his Spirit; of adoption, and resurrection unto everlasting life; and whereby the parties baptized are solemnly admitted into the visible church, and enter into an open and professed engagement to be wholly and only the Lord's.",
          edition: "wcf.en",
        },
        note: "1894, p. 201",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  WCF273: {
    id: "WCF273",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXVII.3",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La gracia que se comunica en los sacramentos, ó por ellos dignamente empleados, no se dá por ningun poder que está en ellos, ni depende la eficácia de un sacramento de la piedad ó intencion de aquel que lo administra, sino de la operacion del Espíritu, y de las palabras de institucion, que contienen, juntamente con el precepto que autoriza el uso del sacramento, una promesa de bendicion para los que lo reciban dignamente.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "The grace which is exhibited in or by the sacraments, rightly used, is not conferred by any power in them; neither doth the efficacy of a sacrament depend upon the piety or intention of him that doth administer it, but upon the work of the Spirit, and the word of institution; which contains, together with a precept authorizing the use thereof, a promise of benefit to worthy receivers.",
          edition: "wcf.en",
        },
        note: "1894, p. 90; 1880, p. 137. Textos de prueba: Ro 2:28–29; 1 P 3:21; Mt 3:11; 1 Co 12:13; Mt 26:27–28; 28:19–20",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  WCF274: {
    id: "WCF274",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXVII.4",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "No hay sino dos sacramentos ordenados en el Evangelio por nuestro Señor Jesu-Cristo, á saber, el bautismo y la Cena del Señor; ni el uno, ni el otro de los cuales debe administrarse, sino por un ministro de la palabra legalmente ordenado.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "There be only two sacraments ordained by Christ our Lord in the gospel, that is to say, Baptism, and the Supper of the Lord; neither of which may be dispensed by any but by a minister of the word, lawfully ordained.",
          edition: "wcf.en",
        },
        note: "1894, p. 90; 1880, p. 138. Textos de prueba: Mt 28:19; 1 Co 11:20, 23; 1 Co 4:1; Heb 5:4",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  WCF282: {
    id: "WCF282",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXVIII.2",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«por un ministro del evangelio debidamente autorizado»",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "The outward element to be used in this sacrament is water, wherewith the party is to be baptized in the name of the Father, and of the Son, and of the Holy Ghost, by a minister of the gospel, lawfully called thereunto.",
          edition: "wcf.en",
        },
        note: "1894, p. 91; 1880, p. 140. Textos de prueba: Mt 3:11; Jn 1:33; Mt 28:19–20",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  WCF65: {
    id: "WCF65",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "VI.5",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Esta corrupcion de la naturaleza existe durante esta vida, aun en aquellos que sean regenerados; y aunque sea perdonada y amortiguada por médio de la fé en Cristo, sin embargo, ella, y todos los efectos de ella, son verdadera y propiamente pecado.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "This corruption of nature, during this life, doth remain in those that are regenerated; and although it be through Christ pardoned and mortified, yet both itself, and all the motions thereof, are truly and properly sin.",
          edition: "wcf.en",
        },
        note: "1894, p. 34. Textos de prueba (notas de 1880): Ro 7:14, 17, 18, 23 …",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  AC13: {
    id: "AC13",
    work: "augsburg",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XIII",
        },
      ],
      qualifier: "Del uso de los sacramentos",
    },
    excerpts: [
      {
        la: {
          text: "De usu sacramentorum docent, quod sacramenta instituta sint, non modo ut sint notae professionis inter homines, sed magis ut sint signa et testimonia voluntatis Dei erga nos, ad excitandam et confirmandam fidem in his, qui utuntur, proposita. Itaque utendum est sacramentis ita, ut fides accedat, quae credat promissionibus, quae per sacramenta exhibentur et ostenduntur. Damnant igitur illos, qui docent, quod sacramenta ex opere operato iustificent, nec docent fidem requiri in usu sacramentorum, quae credat remitti peccata.",
          edition: "triglot.la",
        },
        es: {
          text: "Sobre el uso de los sacramentos enseñan que los sacramentos fueron instituidos no solo para ser señales de profesión entre los hombres, sino más bien para ser signos y testimonios de la voluntad de Dios hacia nosotros, propuestos para despertar y confirmar la fe en quienes los usan. Por eso hay que usar los sacramentos de modo que se añada la fe, que crea las promesas que por los sacramentos se ofrecen y muestran. Condenan, por tanto, a quienes enseñan que los sacramentos justifican ex opere operato y no enseñan que en el uso de los sacramentos se requiere la fe que cree que los pecados son perdonados.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "Of the Use of the Sacraments they teach that the Sacraments were ordained, not only to be marks of profession among men, but rather to be signs and testimonies of the will of God toward us, instituted to awaken and confirm faith in those who use them. … They therefore condemn those who teach that the Sacraments justify by the outward act, and who do not teach that, in the use of the Sacraments, faith which believes that sins are forgiven, is required.",
          edition: "triglot.en",
        },
        note: "Triglot 1921, p. 48",
      },
    ],
    link: {
      href: "https://archive.org/details/concordiatriglot00unse",
      label: "Ver la impresión de 1921 en archive.org",
    },
  },
  AP13: {
    id: "AP13",
    work: "apology",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XIII",
        },
        {
          kind: "number",
          value: "18–20, 23",
        },
      ],
      qualifier: "VII",
    },
    excerpts: [
      {
        la: {
          text: "Illud magis est necessarium intelligere, quomodo sit utendum sacramentis. Hic damnamus totum populum scholasticorum doctorum, qui docent, quod sacramenta non ponenti obicem conferant gratiam ex opere operato sine bono motu utentis. Haec simpliciter Iudaica opinio est sentire, quod per ceremoniam iustificemur, sine bono motu cordis, hoc est, sine fide.",
          edition: "triglot.la",
        },
        note: 'Estado actual: la Iglesia Luterana–Sínodo de Misuri (LCMS) acepta "sin reservas" todos los libros simbólicos, entre ellos la Apología (Constitución, art. II). La Iglesia Evangélica Luterana en América (ELCA) acepta la Apología como "interpretación válida" de la fe (Constitución, 2.06) ¶18 latín: Triglot 1921, p. 312.',
        es: {
          text: "Es más necesario entender cómo se han de usar los sacramentos. Aquí condenamos a toda la multitud de doctores escolásticos que enseñan que los sacramentos confieren la gracia ex opere operato a quien no pone obstáculo, sin un buen movimiento de quien los usa. Esta es sencillamente una opinión judía: pensar que somos justificados por una ceremonia, sin un buen movimiento del corazón, es decir, sin fe. […] Pablo lo contradice y niega (Romanos 4:9) que Abraham fuera justificado por la circuncisión […] La promesa es inútil si no se recibe por la fe.",
          edition: "triglot.es",
          translation: "ai-assisted",
        },
        en: {
          text: "Here we condemn the whole crowd of scholastic doctors, who teach that the Sacraments confer grace ex opere operato, without a good disposition on the part of the one using them, provided he do not place a hindrance in the way. This is absolutely a Jewish opinion, to hold that we are justified by a ceremony, without a good disposition of the heart, i.e., without faith. And yet this impious and pernicious opinion is taught with great authority throughout the entire realm of the Pope. Paul contradicts this, and denies, Rom. 4:9, that Abraham was justified by circumcision, but asserts that circumcision was a sign presented for exercising faith. Thus we teach that in the use of the Sacraments faith ought to be added, which should believe these promises … The promise is useless unless it is received by faith. … (¶23) no one can express in words what abuses in the Church this fanatical opinion concerning the opus operatum, without a good disposition on the part of the one using the Sacraments, has produced.",
          edition: "triglot.en",
        },
      },
    ],
    link: {
      href: "https://archive.org/details/concordiatriglot00unse",
      label: "Ver la impresión de 1921 en archive.org",
    },
  },
  LC4373: {
    id: "LC4373",
    work: "large-catechism",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "IV.33",
        },
        {
          kind: "locus",
          value: "y IV.73",
        },
      ],
      qualifier: "Del bautismo",
    },
    excerpts: [
      {
        la: {
          text: "Iam ubicunque fides fructibus fecunda viget, hic baptismus non tantum inanem significationem repraesentat, sed mortificandae carnis opera coniuncta habet. Porro autem absente fide nudum et inefficax signum tantummodo permanet.",
          edition: "triglot.la",
        },
        es: {
          text: "solo la fe hace a la persona digna de recibir con provecho el agua salvadora y divina. Porque, como estos bienes se presentan y prometen aquí en las palabras, en el agua y con ella, no pueden recibirse de otro modo que creyéndolos de corazón. […] Donde la fe florece con sus frutos, este bautismo no representa una significación vacía, sino que lleva unidas las obras de mortificar la carne. Pero, ausente la fe, permanece solo como signo desnudo e ineficaz.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "(¶33 desde el inglés, rehacer desde el alemán; ¶73 desde el latín)",
        },
        en: {
          text: "faith alone makes the person worthy to receive profitably the saving, divine water. For, since these blessings are here presented and promised in the words in and with the water, they cannot be received in any other way than by believing them with the heart. … Where, therefore, faith flourishes with its fruits, there it has no empty signification, but the work [of mortifying the flesh] accompanies it; but where faith is wanting, it remains a mere unfruitful sign.",
          edition: "triglot.en",
        },
        note: "¶73 latín: Triglot 1921, p. 750 (escaneo); el latín es solo del ¶73",
      },
    ],
    link: {
      href: "https://archive.org/details/concordiatriglot00unse",
      label: "Ver la impresión de 1921 en archive.org",
    },
  },
  LC4: {
    id: "LC4",
    work: "large-catechism",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "IV.65, 74–82, 86",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'Digo esto para que no caigamos en la opinión en que estuvimos mucho tiempo, creyendo que el bautismo ya había pasado […] Y esto vino de que san Jerónimo escribió: "La penitencia es la segunda tabla con la que, roto el barco, tenemos que nadar y pasar al otro lado". Con eso se quitó el uso del bautismo, de modo que ya no puede servirnos. Por eso no está bien dicho, o al menos no bien entendido; porque el barco no se rompe, ya que es ordenación de Dios y no cosa nuestra',
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el alemán",
        },
        en: {
          text: "This I say lest we fall into the opinion in which we were for a long time, imagining that our Baptism is something past, which we can no longer use after we have fallen again into sin. … And this arose from the fact that St. Jerome wrote that repentance is the second plank by which we must swim forth and cross over after the ship is broken … Therefore the statement is not correct, or at any rate not rightly understood. For the ship never breaks, because (as we have said) it is the ordinance of God, and not a work of ours; but it happens, indeed, that we slip and fall out of the ship.",
          edition: "triglot.en",
        },
        de: {
          text: "Das sage ich darum, daß man nicht in die Meinung komme, darin wir lange Zeit gewesen sind und gewähnt haben, die Taufe wäre nun hin [mit der Taufe wäre es nun vorbei] […] Und ist zwar daher [ge]kommen, daß St. Hieronymus geschrieben hat: „Die Buße sei die andere Tafel [tabula, Brett], damit wir müssen [her]ausschwimmen und [hin]überkommen, nachdem das Schiff gebrochen ist, darein wir treten und [hin]überfahren, wenn wir in die Christenheit kommen.\" Damit ist nun der [Ge-]Brauch der Taufe weggenommen, daß sie uns nicht mehr nützen kann. Darum ist's nicht recht geredet oder je nicht recht verstanden; denn das Schiff zerbricht nicht, weil es (wie gesagt) Gottes Ordnung und nicht unser Ding ist",
          edition: "triglot.de",
        },
        note: "¶80–82. Alemán: Triglot 1921, p. 750 (escaneo); los corchetes son de los editores",
      },
      {
        en: {
          text: "Baptism, both in its power and signification, comprehends also the third Sacrament, which has been called repentance, as it is really nothing else than Baptism. (74–75) … Therefore our Baptism abides forever; and even though some one should fall from it and sin, nevertheless we always have access thereto (77) … Repentance, therefore, is nothing else than a return and approach to Baptism (79) … But if any one fall away from it, let him again come into it. (86)",
          edition: "triglot.en",
        },
        note: "¶74–79, 86",
      },
      {
        es: {
          text: "una vida verdaderamente cristiana no es otra cosa que un bautismo diario, comenzado una vez y continuado siempre",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés (rehacer desde el alemán)",
        },
        en: {
          text: "a truly Christian life is nothing else than a daily baptism, once begun and ever to be continued.",
          edition: "triglot.en",
        },
        at: "¶65",
      },
    ],
    link: {
      href: "https://archive.org/details/concordiatriglot00unse",
      label: "Ver la impresión de 1921 en archive.org",
    },
  },
  AP134: {
    id: "AP134",
    work: "apology",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XIII.4",
        },
      ],
    },
    excerpts: [
      {
        en: {
          text: "Baptism, the Lord's Supper, and Absolution, which is the Sacrament of Repentance, are truly Sacraments",
          edition: "triglot.en",
        },
      },
    ],
    link: {
      href: "https://bookofconcord.org",
      label: "Leer en bookofconcord.org",
    },
  },
  AP2: {
    id: "AP2",
    work: "apology",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "II",
        },
        {
          kind: "number",
          value: "35, 38–39",
        },
      ],
      qualifier: "I",
    },
    excerpts: [
      {
        es: {
          text: "El bautismo quita la culpa del pecado original, aunque permanece lo que llaman la materia del pecado, es decir, la concupiscencia. […] Pero ellos sostienen que la concupiscencia es una pena y no un pecado […] Lutero sostiene que es pecado.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés (rehacer desde el latín)",
        },
        en: {
          text: "Baptism removes the guilt of original sin, although the material, as they call it, of the sin, i.e., concupiscence, remains. … But they contend that concupiscence is a penalty, and not a sin … Luther maintains that it is a sin. … Besides Paul says, Rom. 7:7. 23: I had not known lust (concupiscence), except the Law had said, Thou shalt not covet.",
          edition: "triglot.en",
        },
      },
    ],
    link: {
      href: "https://bookofconcord.org",
      label: "Leer en bookofconcord.org",
    },
  },
  ENC8: {
    id: "ENC8",
    work: "enc-1895",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "VIII",
        },
      ],
    },
    excerpts: [
      {
        note: "Estado actual: no se encontró una retractación sinodal. El diálogo católico-ortodoxo de Alejandría (2023) la menciona: la presenta como rechazo de la invitación de León XIII y crítica del uniatismo. Fuentes oficiales ortodoxas todavía la citan, pero eso no demuestra que cada frase tenga hoy autoridad universal 1896, p. 31. Las palabras finales citan a Basilio, Ep. 243",
        es: {
          text: 'La una, santa, católica y apostólica Iglesia de los siete primeros concilios ecuménicos bautizaba con tres inmersiones en el agua; el papa Pelagio habla de la triple inmersión como mandato del Señor, y en el siglo XIII todavía prevalecía en Occidente el bautismo por inmersiones; las mismas pilas sagradas que se conservan en las iglesias más antiguas de Italia son testigos elocuentes de ello. Pero más tarde la aspersión o la infusión, introducidas a escondidas, fueron aceptadas por la Iglesia papal, que todavía mantiene la innovación, ensanchando así el abismo que ella misma abrió; pero nosotros, los ortodoxos, fieles a la tradición apostólica y a la práctica de los siete concilios ecuménicos, "nos mantenemos firmes, luchando por la profesión común, el tesoro paterno de la fe sana"',
          edition: "enc1895.es",
          translation: "ai-assisted",
        },
        en: {
          text: "The one holy, catholic and apostolic Church of the first seven Oecumenical Councils baptized by three immersions in the water, and the Pope Pelagius speaks of the triple immersion as a command of the Lord, and in the thirteenth century baptism by immersions still prevailed in the West; and the sacred fonts themselves, preserved in the more ancient churches in Italy, are eloquent witnesses on this point; but in later times sprinkling or affusion, being privily brought in, came to be accepted by the Papal Church, which still holds fast the innovation, thus also widening the gulf which she has opened; but we Orthodox, remaining faithful to the apostolic tradition and the practice of the seven Oecumenical Councils, 'stand fast, contending for the common profession, the paternal treasure of the sound faith.'",
          edition: "enc1895.en",
        },
      },
    ],
    date: {
      year: 1895,
    },
    link: {
      href: "https://archive.org/details/answerofgreatchu0000eust",
      label: "Ver el escaneo en archive.org",
    },
  },
  MOG102: {
    id: "MOG102",
    work: "mogila",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "question",
          value: "102–103",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El bautismo es un lavar y arrancar el pecado original, siendo sumergido tres veces en el agua, mientras el sacerdote pronuncia estas palabras: En el nombre del Padre, amén; y del Hijo, amén; y del Espíritu Santo, amén.",
          edition: "mogila.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de 1762 (rehacer desde el griego)",
        },
        en: {
          text: "Baptism is a washing away and rooting out of original Sin, by being thrice immersed in Water; the Priest pronouncing these Words: In The Name Of The Father, Amen; And Of The Son, Amen; And Of The Holy Ghost, Amen. … (Q.103) being observant to use the proper Requisite, namely, unmixed and natural and pure Water, and dipping the Person to be baptized thrice therein",
          edition: "mogila.en",
        },
        note: "Preguntas 102–103 (la 103: en caso de necesidad cualquiera puede bautizar)",
      },
    ],
    link: {
      href: "https://archive.org/details/cu31924029363094",
      label: "Ver el escaneo en archive.org",
    },
  },
  MOG102r: {
    id: "MOG102r",
    work: "mogila",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "question",
          value: "102",
        },
      ],
      qualifier: "sobre no repetir el bautismo",
    },
    excerpts: [
      {
        es: {
          text: "una vez recibido, este misterio no se repite, con tal que quien administró el bautismo creyera ortodoxamente en tres Personas en un solo Dios y pronunciara con exactitud y sin alteración alguna las palabras dichas",
          edition: "mogila.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de 1762 (rehacer desde el griego)",
        },
        en: {
          text: "being once received, is not to be again repeated; provided the Person who administered the Baptism believed orthodoxly in Three Persons in One God, and accurately, and without any Alteration, pronounced the afore-mentioned Words",
          edition: "mogila.en",
        },
        note: "Overbeck, p. 76",
      },
    ],
    link: {
      href: "https://archive.org/details/cu31924029363094",
      label: "Ver el escaneo en archive.org",
    },
  },
  PHIL290: {
    id: "PHIL290",
    work: "philaret",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "question",
          value: "290",
        },
      ],
    },
    excerpts: [
      {
        en: {
          text: "What is most essential in the administration of Baptism? Trine immersion in water, in the name of the Father, and of the Son, and of the Holy Ghost.",
          edition: "schaff.en",
        },
      },
    ],
  },
  OROSa: {
    id: "OROSa",
    work: "oros-1755",
    kind: "other-tradition",
    locator: {
      parts: [],
      qualifier: "sobre el modo",
    },
    excerpts: [
      {
        note: 'Estado actual: el Oros de 1755 rechaza los bautismos de los herejes y recibe como no bautizados a quienes vienen de ellos. El mapa ortodoxo registra su aplicación como "contested"',
        es: {
          text: "seguimos a los sagrados y divinos Apóstoles, que mandan bautizar a los aspirantes con tres inmersiones y emersiones, diciendo en cada inmersión uno de los nombres de la Santísima Trinidad",
          edition: "site-translation.oros-1755.es",
          translation: "ai-assisted",
        },
        en: {
          text: "we follow the sacred and divine Apostles who order us to baptize aspirants with three immersions and emersions, and in each immersion to say one name of the Holy Trinity",
          edition: "oros.en",
        },
      },
    ],
    date: {
      year: 1755,
      alsoYears: [1756],
    },
    link: {
      href: "https://www.oodegr.com/english/biblia/baptisma1/par2.htm",
      label: "Leer la traducción en oodegr.com",
    },
  },
  OROSb: {
    id: "OROSb",
    work: "oros-1755",
    kind: "other-tradition",
    locator: {
      parts: [],
      qualifier: "sobre el bautismo de los herejes",
    },
    excerpts: [
      {
        note: 'Estado actual: el Oros de 1755 rechaza los bautismos de los herejes y recibe como no bautizados a quienes vienen de ellos. El mapa ortodoxo registra su aplicación como "contested"',
        es: {
          text: "Nosotros, que por la misericordia divina fuimos criados en la Iglesia ortodoxa y nos atenemos a los cánones de los sagrados Apóstoles y de los divinos Padres, reconocemos una sola Iglesia, nuestra santa, católica y apostólica Iglesia. Son sus misterios [es decir, sacramentos], y por tanto su bautismo, los que aceptamos. […] Rechazamos y aborrecemos los bautismos de los herejes. Porque discrepan del divino mandato apostólico y le son ajenos. Son aguas inútiles, como dijeron san Ambrosio y san Atanasio el Grande. No dan santificación a quienes los reciben, ni sirven en nada para lavar los pecados. A los que vienen a la fe ortodoxa, bautizados sin haber sido bautizados, los recibimos como no bautizados",
          edition: "site-translation.oros-1755.es",
          translation: "ai-assisted",
        },
        en: {
          text: "We, who by divine mercy were raised in the Orthodox Church, and who adhere to the canons of the sacred Apostles and divine Fathers, recognize only one Church, our holy, catholic, and Apostolic Church. It is her Mysteries [i.e. sacraments], and consequently her baptism, that we accept. … we reject and abhor baptisms belonging to heretics. For they disagree with and are alien to the divine Apostolic dictate. They are useless waters, as Sts. Ambrose and Athanasios the Great said. They give no sanctification to such as receive them, nor avail at all to the washing away of sins. We receive those who come over to the Orthodox faith, who were baptized without being baptized, as being unbaptized",
          edition: "oros.en",
        },
      },
    ],
    date: {
      year: 1755,
      alsoYears: [1756],
    },
    link: {
      href: "https://www.oodegr.com/english/biblia/baptisma1/par2.htm",
      label: "Leer la traducción en oodegr.com",
    },
  },
  DOS16: {
    id: "DOS16",
    work: "dositheus",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "decree",
          value: "XVI",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "lo administra solo el sacerdote o, en caso de necesidad ineludible, otro hombre, con tal que sea ortodoxo y tenga la intención propia del divino bautismo",
          edition: "robertson.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés (rehacer desde el griego)",
        },
        en: {
          text: "is performed by the Priest only, or in a case of unavoidable necessity, by another man, provided he be Orthodox, and have the intention proper to Divine Baptism",
          edition: "robertson.en",
        },
        note: "Robertson, p. 141",
      },
    ],
    date: {
      year: 1672,
    },
    link: {
      href: "https://archive.org/details/actsdecreesofsyn00orth",
      label: "Ver el escaneo en archive.org",
    },
  },
  DOS15: {
    id: "DOS15",
    work: "dositheus",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "decree",
          value: "XV",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "rechazamos como cosa abominable y perniciosa la idea de que, cuando la fe es débil, se menoscaba la integridad del misterio. Porque los herejes que abjuran de su herejía y se unen a la Iglesia católica son recibidos por la Iglesia, aunque recibieron su bautismo válido con debilidad de fe. Por eso, cuando después llegan a tener la fe perfecta, no se los bautiza de nuevo.",
          edition: "robertson.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés (rehacer desde el griego)",
        },
        en: {
          text: "we reject as something abominable and pernicious the notion that when faith is weak the integrity of the Mystery is impaired. For heretics who abjure their heresy and join the Catholic Church are received by the Church; although they received their valid Baptism with weakness of faith. Wherefore, when they afterwards become possessed of the perfect faith, they are not again baptised.",
          edition: "robertson.en",
        },
        note: "Robertson, pp. 138–139",
      },
    ],
    date: {
      year: 1672,
    },
    link: {
      href: "https://archive.org/details/actsdecreesofsyn00orth",
      label: "Ver el escaneo en archive.org",
    },
  },
  BFM7: {
    id: "BFM7",
    work: "bfm-2000",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "VII",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El bautismo cristiano es la inmersión de un creyente en agua en el nombre del Padre, del Hijo, y del Espíritu Santo. Es un acto de obediencia que simboliza la fe del creyente en un Salvador crucificado, sepultado y resucitado, la muerte del creyente al pecado, la sepultura de la antigua vida, y la resurrección para andar en novedad de vida en Cristo Jesús. Es un testimonio de su fe en la resurrección final de los muertos. Como es una ordenanza de la iglesia, es un requisito que precede al privilegio de ser miembro de la iglesia y a participar en la Cena del Señor.",
          edition: "bfm.es",
          translation: "official",
        },
        en: {
          text: "Christian baptism is the immersion of a believer in water in the name of the Father, the Son, and the Holy Spirit. It is an act of obedience symbolizing the believer's faith in a crucified, buried, and risen Saviour, the believer's death to sin, the burial of the old life, and the resurrection to walk in newness of life in Christ Jesus. It is a testimony to his faith in the final resurrection of the dead. Being a church ordinance, it is prerequisite to the privileges of church membership and to the Lord's Supper.",
          edition: "site-translation.bfm-2000.en",
        },
      },
    ],
    date: {
      year: 2000,
    },
    link: {
      href: "https://web.archive.org/web/20260615234441/https://bfm.sbc.net/fe-y-mensaje-bautistas/",
      label: "Ver Fe y Mensaje Bautistas en Wayback",
    },
  },
  BFM7a: {
    id: "BFM7a",
    work: "bfm-2000",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "VII",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El bautismo cristiano es la inmersión de un creyente en agua en el nombre del Padre, del Hijo, y del Espíritu Santo.",
          edition: "bfm.es",
          translation: "official",
        },
        en: {
          text: "Christian baptism is the immersion of a believer in water in the name of the Father, the Son, and the Holy Spirit.",
          edition: "site-translation.bfm-2000.en",
        },
      },
    ],
    date: {
      year: 2000,
    },
    link: {
      href: "https://web.archive.org/web/20260615234441/https://bfm.sbc.net/fe-y-mensaje-bautistas/",
      label: "Ver Fe y Mensaje Bautistas en Wayback",
    },
  },
  BFM7b: {
    id: "BFM7b",
    work: "bfm-2000",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "VII",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Es un acto de obediencia que simboliza la fe del creyente en un Salvador crucificado, sepultado y resucitado",
          edition: "bfm.es",
          translation: "official",
        },
        en: {
          text: "It is an act of obedience symbolizing the believer's faith in a crucified, buried, and risen Saviour",
          edition: "site-translation.bfm-2000.en",
        },
      },
    ],
    date: {
      year: 2000,
    },
    link: {
      href: "https://web.archive.org/web/20260615234441/https://bfm.sbc.net/fe-y-mensaje-bautistas/",
      label: "Ver Fe y Mensaje Bautistas en Wayback",
    },
  },
  BFM7c: {
    id: "BFM7c",
    work: "bfm-2000",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "VII",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Es un acto de obediencia que simboliza la fe del creyente",
          edition: "bfm.es",
          translation: "official",
        },
        en: {
          text: "It is an act of obedience symbolizing the believer's faith",
          edition: "site-translation.bfm-2000.en",
        },
      },
    ],
    date: {
      year: 2000,
    },
    link: {
      href: "https://web.archive.org/web/20260615234441/https://bfm.sbc.net/fe-y-mensaje-bautistas/",
      label: "Ver Fe y Mensaje Bautistas en Wayback",
    },
  },
  BFM6: {
    id: "BFM6",
    work: "bfm-2000",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "VI",
        },
        {
          kind: "locus",
          value: "primera frase",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Una iglesia del Nuevo Testamento del Señor Jesucristo es una congregación local y autónoma de creyentes bautizados, asociados en un pacto en la fe y el compañerismo del evangelio; cumpliendo las dos ordenanzas de Cristo",
          edition: "bfm.es",
          translation: "official",
        },
        en: {
          text: "A New Testament church of the Lord Jesus Christ is an autonomous local congregation of baptized believers, associated by covenant in the faith and fellowship of the gospel; observing the two ordinances of Christ",
          edition: "site-translation.bfm-2000.en",
        },
      },
    ],
    date: {
      year: 2000,
    },
    link: {
      href: "https://web.archive.org/web/20260615234441/https://bfm.sbc.net/fe-y-mensaje-bautistas/",
      label: "Ver Fe y Mensaje Bautistas en Wayback",
    },
  },
  BFM3: {
    id: "BFM3",
    work: "bfm-2000",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "III",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Por medio de la tentación de Satanás el hombre transgredió el mandamiento de Dios, y cayó de su estado original de inocencia, por lo cual su posteridad heredó una naturaleza y un ambiente inclinado al pecado. Por tanto, tan pronto como son capaces de realizar una acción moral, se convierten en transgresores y están bajo condenación.",
          edition: "bfm.es",
          translation: "official",
        },
        en: {
          text: "whereby his posterity inherit a nature and an environment inclined toward sin. Therefore, as soon as they are capable of moral action, they become transgressors and are under condemnation.",
          edition: "site-translation.bfm-2000.en",
        },
      },
    ],
    date: {
      year: 2000,
    },
    link: {
      href: "https://web.archive.org/web/20260615234441/https://bfm.sbc.net/fe-y-mensaje-bautistas/",
      label: "Ver Fe y Mensaje Bautistas en Wayback",
    },
  },
  BFM4: {
    id: "BFM4",
    work: "bfm-2000",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "IV",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La salvación implica la redención total del hombre, y se ofrece gratuitamente a todos los que aceptan a Jesucristo como Señor y Salvador, quien por su propia sangre obtuvo redención eterna para el creyente. […] No hay salvación aparte de la fe personal en Jesucristo como Señor.",
          edition: "bfm.es",
          translation: "official",
        },
        en: {
          text: "who by His own blood obtained eternal redemption for the believer. … There is no salvation apart from personal faith in Jesus Christ as Lord.",
          edition: "site-translation.bfm-2000.en",
        },
      },
    ],
    date: {
      year: 2000,
    },
    link: {
      href: "https://web.archive.org/web/20260615234441/https://bfm.sbc.net/fe-y-mensaje-bautistas/",
      label: "Ver Fe y Mensaje Bautistas en Wayback",
    },
  },
  BFM4b: {
    id: "BFM4b",
    work: "bfm-2000",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "IV",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "No hay salvación aparte de la fe personal en Jesucristo como Señor.",
          edition: "bfm.es",
          translation: "official",
        },
        en: {
          text: "There is no salvation apart from personal faith in Jesus Christ as Lord.",
          edition: "site-translation.bfm-2000.en",
        },
      },
    ],
    date: {
      year: 2000,
    },
    link: {
      href: "https://web.archive.org/web/20260615234441/https://bfm.sbc.net/fe-y-mensaje-bautistas/",
      label: "Ver Fe y Mensaje Bautistas en Wayback",
    },
  },
  AG6: {
    id: "AG6",
    work: "ag-sft",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "6",
        },
      ],
      qualifier: "«El bautismo en agua»",
    },
    excerpts: [
      {
        es: {
          text: "Las Escrituras establecen la ordenanza del bautismo en agua por inmersión. Todos los que se arrepienten y creen en Cristo como Salvador y Señor deben ser bautizados. De esta manera declaran ante el mundo que han muerto con Cristo y que han sido resucitados con El para andar en nueva vida.",
          edition: "ag.es",
          translation: "official",
        },
        en: {
          text: "The ordinance of baptism by immersion is commanded by the Scriptures. All who repent and believe on Christ as Saviour and Lord are to be baptized. Thus they declare to the world that they have died with Christ and that they also have been raised with Him to walk in newness of life.",
          edition: "ag.en",
        },
      },
    ],
    link: {
      href: "http://web.archive.org/web/20260514023448/https://ag.org/es-ES/beliefs/Statement-of-Fundamental-Truths",
      label: "Ver la versión en español en Wayback",
    },
  },
  AG6m: {
    id: "AG6m",
    work: "ag-sft",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "6",
        },
      ],
      qualifier: "«El bautismo en agua»",
    },
    excerpts: [
      {
        es: {
          text: "Las Escrituras establecen la ordenanza del bautismo en agua por inmersión.",
          edition: "ag.es",
          translation: "official",
        },
        en: {
          text: "The ordinance of baptism by immersion is commanded by the Scriptures.",
          edition: "ag.en",
        },
      },
    ],
    link: {
      href: "http://web.archive.org/web/20260514023448/https://ag.org/es-ES/beliefs/Statement-of-Fundamental-Truths",
      label: "Ver la versión en español en Wayback",
    },
  },
  AG6s: {
    id: "AG6s",
    work: "ag-sft",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "6",
        },
      ],
      qualifier: "«El bautismo en agua»",
    },
    excerpts: [
      {
        es: {
          text: "Todos los que se arrepienten y creen en Cristo como Salvador y Señor deben ser bautizados.",
          edition: "ag.es",
          translation: "official",
        },
        en: {
          text: "All who repent and believe on Christ as Saviour and Lord are to be baptized.",
          edition: "ag.en",
        },
      },
    ],
    link: {
      href: "http://web.archive.org/web/20260514023448/https://ag.org/es-ES/beliefs/Statement-of-Fundamental-Truths",
      label: "Ver la versión en español en Wayback",
    },
  },
  AG6d: {
    id: "AG6d",
    work: "ag-sft",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "6",
        },
      ],
      qualifier: "«El bautismo en agua»",
    },
    excerpts: [
      {
        es: {
          text: "De esta manera declaran ante el mundo que han muerto con Cristo y que han sido resucitados con El para andar en nueva vida.",
          edition: "ag.es",
          translation: "official",
        },
        en: {
          text: "Thus they declare to the world that they have died with Christ and that they also have been raised with Him to walk in newness of life.",
          edition: "ag.en",
        },
      },
    ],
    link: {
      href: "http://web.archive.org/web/20260514023448/https://ag.org/es-ES/beliefs/Statement-of-Fundamental-Truths",
      label: "Ver la versión en español en Wayback",
    },
  },
  AG5: {
    id: "AG5",
    work: "ag-sft",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "5",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La única esperanza de redención para el hombre es a través de la sangre derramada de Jesucristo, el Hijo de Dios. Condiciones para la salvación. La salvación se recibe a través del arrepentimiento para con Dios y la fe en el Señor Jesucristo.",
          edition: "ag.es",
          translation: "official",
        },
        en: {
          text: "Man's only hope of redemption is through the shed blood of Jesus Christ the Son of God",
          edition: "ag.en",
        },
      },
    ],
    link: {
      href: "http://web.archive.org/web/20260514023448/https://ag.org/es-ES/beliefs/Statement-of-Fundamental-Truths",
      label: "Ver la versión en español en Wayback",
    },
  },
  AG5b: {
    id: "AG5b",
    work: "ag-sft",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "article",
          value: "5",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La salvación se recibe a través del arrepentimiento para con Dios y la fe en el Señor Jesucristo.",
          edition: "ag.es",
          translation: "official",
        },
      },
    ],
    link: {
      href: "http://web.archive.org/web/20260514023448/https://ag.org/es-ES/beliefs/Statement-of-Fundamental-Truths",
      label: "Ver la versión en español en Wayback",
    },
  },
  T13c1: {
    id: "T13c1",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "chapter",
          value: "1",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Principio docet sancta Synodus, et aperte, ac simpliciter profitetur, in almo sanctae Eucharistiae Sacramento, post panis, et vini consecrationem, Dominum nostrum Jesum Christum, verum Deum, atque hominem, vere, realiter, ac substantialiter sub specie illarum rerum sensibilium contineri.",
          edition: "trent.la",
          page: "157–158",
        },
        es: {
          text: "En primer lugar enseña el santo Concilio, y clara y sencillamente confiesa, que despues de la consagracion del pan y del vino, se contiene en el saludable Sacramento de la santa Eucaristía, verdadera, real y substancialmente nuestro señor Jesu-Cristo, verdadero Dios y hombre, bajo las especies de aquellas cosas sensibles.",
          edition: "trent.es",
          page: "157–158",
          translation: "printed-original",
        },
        en: {
          text: "the holy Synod teaches, and openly and simply professes, that in the august sacrament of the holy Eucharist, after the consecration of the bread and wine, our Lord Jesus Christ, true God and man, is truly, really, and substantially contained under the species of those sensible things.",
          edition: "trent.en",
          page: "76",
        },
      },
      {
        la: {
          text: "…cum post panis, vinique benedictionem, se suum ipsius corpus illis praebere, ac suum sanguinem, disertis, et perspicuis verbis testatus est: quae verba a sanctis Evangelistis commemorata, et a divo Paulo postea repetita, cum propriam illam, et apertissimam significationem prae se ferant, secundum quam a Patribus intellecta sunt; indignissimum sane flagitium est, ea a quibusdam contentiosis, et pravis hominibus ad fictitios, et imaginarios tropos, quibus veritas carnis, et sanguinis Christi negatur, contra universum Ecclesiae sensum detorqueri…",
          edition: "trent.la",
          page: "158–159",
        },
        es: {
          text: "…quando despues de haber bendecido el pan y el vino, testificó á sus Apóstoles con claras y enérgicas palabras, que les daba su propio cuerpo y su propia sangre. Y siendo constante que dichas palabras, mencionadas por los santos Evangelistas, y repetidas despues por el Apostol san Pablo, incluyen en sí mismas aquella propia y patentísima significacion que les han dado los santos Padres; es sin duda maldad exécrable, que ciertos hombres contenciosos y corrompidos las tuerzan, violenten y expliquen en sentido figurado, ficticio, é imaginario; por el que niegan la realidad de la carne y sangre de Jesu-Cristo, contra la inteligencia unanime de la Iglesia…",
          edition: "trent.es",
          page: "158–159",
          translation: "printed-original",
        },
        en: {
          text: "He testified, in express and clear words, that He gave them His own very Body, and His own Blood; words which, — recorded by the holy Evangelists, and afterwards repeated by Saint Paul, whereas they carry with them that proper and most manifest meaning in which they were understood by the Fathers, — it is indeed a crime the most unworthy that they should be wrested … to fictitious and imaginary tropes, whereby the verity of the flesh and blood of Christ is denied…",
          edition: "trent.en",
          page: "76–77",
        },
      },
      {
        es: {
          text: "«no hay en efecto repugnancia en que el mismo Cristo nuestro Salvador esté siempre sentado en el cielo á la diestra del Padre, segun el modo natural de existir, y que al mismo tiempo nos asista sacramentalmente con su presencia, y en su propia substancia en otros muchos lugares» … «apenas lo podemos declarar con palabras» … «es posible á Dios»",
          edition: "trent.es",
          translation: "printed-original",
        },
        citedIn: ["OB-2"],
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T13c2: {
    id: "T13c2",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "chapter",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Quiso ademas que se recibiese este Sacramento como un manjar espiritual de las almas, con el que se alimenten y conforten los que viven por la vida del mismo Jesu-Cristo […] y como un antidoto con que nos libremos de las culpas veniales, y nos preservemos de las mortales.",
          edition: "trent.es",
          page: "160",
          translation: "printed-original",
        },
        en: {
          text: "as an antidote, whereby we may be freed from daily faults, and be preserved from mortal sins.",
          edition: "trent.en",
          page: "77",
        },
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T13c3: {
    id: "T13c3",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "chapter",
          value: "3",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Quapropter verissimum est, tantundem sub alterutra specie, atque sub utraque contineri. Totus enim, et integer Christus sub panis specie, et sub quavis ipsius speciei parte, totus item sub vini specie, et sub ejus partibus existit.",
          edition: "trent.la",
          page: "162",
        },
        es: {
          text: "Por esta causa es certísimo que se contiene tanto baxo cada una de las dos especies, como baxo de ambas juntas; pues existe Cristo todo, y entero baxo las especies de pan, y baxo qualquiera parte de esta especie; y todo tambien existe baxo la especie de vino y de sus partes.",
          edition: "trent.es",
          page: "162",
          translation: "printed-original",
        },
        en: {
          text: "it is most true, that as much is contained under either species as under both; for Christ whole and entire is under the species of bread, and under any part whatsoever of that species…",
          edition: "trent.en",
          page: "78",
        },
      },
      {
        es: {
          text: "en fuerza de aquella natural conexion y concomitancia, por la que están unidas entre sí las partes de nuestro señor Jesu-Cristo, que ya resucitó de entre los muertos para no volver á morir",
          edition: "trent.es",
          page: "162",
          translation: "printed-original",
        },
        en: {
          text: "by the force of that natural connection and concomitancy whereby the parts of Christ our Lord, who hath now risen from the dead, to die no more, are united together",
          edition: "trent.en",
          page: "78",
        },
      },
      {
        es: {
          text: "«en virtud de las palabras» (latín: «ex vi verborum»)",
          edition: "trent.es",
          page: "162",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T13c4: {
    id: "T13c4",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "chapter",
          value: "4",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Quoniam autem Christus, Redemptor noster, corpus suum id, quod sub specie panis offerebat, vere esse dixit; ideo persuasum semper in Ecclesia Dei fuit, idque nunc denuo sancta haec Synodus declarat, per consecrationem panis, et vini, conversionem fieri totius substantiae panis in substantiam corporis Christi, Domini nostri; et totius substantiae vini in substantiam sanguinis ejus. Quae conversio convenienter, et proprie a sancta Catholica Ecclesia Transsubstantiatio est appellata.",
          edition: "trent.la",
          page: "163",
        },
        es: {
          text: "Mas, por quanto dixo Jesu-Cristo nuestro Redentor, que era verdaderamente su cuerpo lo que ofrecia bajo la especie de pan; ha creido por lo mismo perpetuamente la Iglesia de Dios, y lo mismo declara ahora de nuevo este mismo santo Concilio, que por la consagracion del pan y del vino, se convierte toda la substancia del pan en la substancia del cuerpo de nuestro señor Jesu-Cristo, y toda la substancia del vino en la substancia de su sangre, cuya conversion ha llamado oportuna, y propiamente Transubstanciacion la santa Iglesia Católica.",
          edition: "trent.es",
          page: "163",
          translation: "printed-original",
        },
        en: {
          text: "by the consecration of the bread and of the wine, a conversion is made of the whole substance of the bread into the substance of the body of Christ our Lord, and of the whole substance of the wine into the substance of His blood; which conversion is, by the holy Catholic Church, suitably and properly called Transubstantiation.",
          edition: "trent.en",
          page: "78",
        },
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T13c5: {
    id: "T13c5",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "chapter",
          value: "5",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Nullus itaque dubitandi locus relinquitur, quin omnes Christi fideles, pro more in Catholica Ecclesia semper recepto, latriae cultum, qui vero Deo debetur, huic sanctissimo Sacramento in veneratione exhibeant.",
          edition: "trent.la",
          page: "164",
        },
        es: {
          text: "No queda pues, motivo alguno de duda en que todos los fieles cristianos hayan de venerar á este santísimo Sacramento, y prestarle, segun la costumbre siempre recibida en la Iglesia católica, el culto de latría que se debe al mismo Dios.",
          edition: "trent.es",
          page: "164",
          translation: "printed-original",
        },
        en: {
          text: "render in veneration the worship of latria, which is due to the true God, to this most holy sacrament.",
          edition: "trent.en",
          page: "79",
        },
      },
      {
        es: {
          text: "«creemos que está presente en él aquel mismo Dios» … «Ni se le debe tributar menos adoracion con el pretexto de que fue instituido por Cristo nuestro señor para recibirle»",
          edition: "trent.es",
          translation: "printed-original",
        },
        citedIn: ["OB-3"],
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T13c6: {
    id: "T13c6",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "chapter",
          value: "6",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Es tan antigua la costumbre de guardar en el sagrario la santa Eucaristía, que ya se conocia en el siglo en que se celebró el concilio Niceno",
          edition: "trent.es",
          page: "164–166",
          translation: "printed-original",
        },
        en: {
          text: "The custom of reserving the holy Eucharist in the sacrarium is so ancient, that even the age of the Council of Nicaea recognised that usage.",
          edition: "trent.en",
          page: "80",
        },
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T13c7: {
    id: "T13c7",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "chapter",
          value: "7",
        },
      ],
    },
    excerpts: [
      {
        en: {
          text: "ecclesiastical usage declares that necessary proof to be, that no one, conscious to himself of mortal sin, how contrite soever he may seem to himself, ought to approach to the sacred Eucharist, without previous sacramental confession.",
          edition: "trent.en",
          page: "80–81",
        },
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T13can1: {
    id: "T13can1",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "canon",
          value: "1",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis negaverit, in sanctissimae Eucharistiae Sacramento contineri vere, realiter, et substantialiter corpus, et sanguinem una cum anima, et divinitate Domini nostri Jesu Christi, ac proinde totum Christum; sed dixerit, tantummodo esse in eo, ut in signo, vel figura, aut virtute; anathema sit.",
          edition: "trent.la",
          page: "171",
        },
        es: {
          text: "Si alguno negáre, que en el santisimo Sacramento de la Eucaristia se contiene verdadera, real y substancialmente el cuerpo y la sangre juntamente con el alma y divinidad de nuestro señor Jesu-Cristo, y por conseqüencia todo Cristo; sino por el contrario dixere, que solamente está en él como en señal, ó en figura, ó virtualmente; sea excomulgado.",
          edition: "trent.es",
          page: "171",
          translation: "printed-original",
        },
        en: {
          text: "If anyone denieth that, in the sacrament of the most holy Eucharist, are contained truly, really, and substantially, the body and blood together with the soul and divinity of our Lord Jesus Christ, and consequently the whole Christ; but saith that He is only therein as in a sign, or in figure, or virtue; let him be anathema.",
          edition: "trent.en",
          page: "82",
        },
        note: '"anatema" en el latín; "excomulgado" en la traducción de 1785.',
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T13can2: {
    id: "T13can2",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "canon",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, in sacrosancto Eucharistiae Sacramento remanere substantiam panis, et vini, una cum corpore, et sanguine Domini nostri Jesu Christi; negaveritque mirabilem illam, et singularem conversionem totius substantiae panis in corpus, et totius substantiae vini in sanguinem, manentibus dumtaxat speciebus panis, et vini; quam quidem conversionem Catholica Ecclesia aptissime Transsubstantiationem appellat; anathema sit.",
          edition: "trent.la",
          page: "171",
        },
        es: {
          text: "Si alguno dixere, que en el sacrosanto Sacramento de la Eucaristia queda substancia de pan y de vino juntamente con el cuerpo y sangre de nuestro señor Jesu-Cristo; y negare aquella admirable y singular conversion de toda la substancia del pan en el cuerpo, y de toda la substancia del vino en la sangre, permaneciendo solamente las especies de pan y vino; conversion que la Iglesia Católica propisimamente llama Transubstanciacion; sea excomulgado.",
          edition: "trent.es",
          page: "171",
          translation: "printed-original",
        },
        en: {
          text: "If anyone saith that, in the sacred and holy sacrament of the Eucharist, the substance of the bread and wine remains conjointly with the body and blood of our Lord Jesus Christ, and denieth that wonderful and singular conversion … the species only of the bread and wine remaining — which conversion indeed the Catholic Church most aptly calls Transubstantiation; let him be anathema.",
          edition: "trent.en",
          page: "82",
        },
        note: '"anatema" en el latín; "excomulgado" en la traducción de 1785.',
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T13can4: {
    id: "T13can4",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "canon",
          value: "4",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«solo en el uso, mientras que se recibe»",
          edition: "trent.es",
          translation: "printed-original",
        },
        citedIn: ["OB-3"],
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T13can5: {
    id: "T13can5",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "canon",
          value: "5",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Si alguno dixere, ó que el principal fruto de la sacrosanta Eucaristía es el perdon de los pecados, ó que no provienen de ella otros efectos; sea excomulgado.",
          edition: "trent.es",
          page: "172",
          translation: "printed-original",
        },
        note: '"anatema" en el latín; "excomulgado" en la traducción de 1785.',
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T13can6: {
    id: "T13can6",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "canon",
          value: "6",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Si alguno dixere, que en el santo Sacramento de la Eucaristía no se debe adorar á Cristo hijo unigenito de Dios con el culto de latría, ni aun con el externo; y que por lo mismo, ni se debe venerar con peculiar y festiva celebridad; ni ser conducido solemnemente en procesiones, segun el loable y universal rito y costumbre de la santa Iglesia; ó que no se debe exponer públicamente al pueblo para que le adore, y que los que le adoran son idólatras; sea excomulgado.",
          edition: "trent.es",
          page: "172–173",
          translation: "printed-original",
        },
        en: {
          text: "…and that the adorers thereof are idolaters; let him be anathema.",
          edition: "trent.en",
          page: "83",
        },
        note: '"anatema" en el latín; "excomulgado" en la traducción de 1785.',
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T13can9: {
    id: "T13can9",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "canon",
          value: "9",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«en Pasqua florida»",
          edition: "trent.es",
          page: "173",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T13can11: {
    id: "T13can11",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XIII",
        },
        {
          kind: "canon",
          value: "11",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Si alguno dixere, que sola la fe es preparacion suficiente para recibir el Sacramento de la santísima Eucaristía; sea excomulgado. Y para que no se reciba indignamente tan grande Sacramento, y por consequencia cause muerte y condenacion; establece y declara el mismo santo Concilio, que los que se sienten gravados con conciencia de pecado mortal, por contritos que se crean, deben para recibirle, anticipar necesariamente la confesion sacramental habiendo confesor. Y si alguno presumiere enseñar, predicar ó afirmar con pertinacia lo contrario, ó tambien defenderlo en disputas públicas; quede por el mismo caso excomulgado.",
          edition: "trent.es",
          page: "174",
          translation: "printed-original",
        },
        en: {
          text: "this holy Synod ordains and declares that sacramental confession, when a confessor may be had, is of necessity to be made beforehand, by those whose conscience is burthened with mortal sin, how contrite even soever they may think themselves.",
          edition: "trent.en",
          page: "84",
        },
        note: '"anatema" en el latín; "excomulgado" en la traducción de 1785.',
      },
    ],
    date: {
      year: 1551,
      month: 10,
      day: 11,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T21c1: {
    id: "T21c1",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XXI",
        },
        {
          kind: "chapter",
          value: "1",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«en las especies de pan y vino, y lo dió á sus Apóstoles» … «la obligacion de que todos los fieles cristianos deban recibir […] una y otra especie» … «si no comiereis la carne del hijo del hombre, ni bebiereis su sangre, no tendréis vida» … «si alguno comiere de este pan, vivirá eternamente»",
          edition: "trent.es",
          page: "287–291",
          translation: "printed-original",
        },
      },
      {
        es: {
          text: "«segun las varias interpretaciones de los santos Padres y doctores»",
          edition: "trent.es",
          translation: "printed-original",
        },
        en: {
          text: "according to the various interpretations of holy Fathers and Doctors",
          edition: "trent.en",
        },
        note: "Sobre Juan 6",
      },
    ],
    date: {
      year: 1562,
      month: 7,
      day: 16,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T21c2: {
    id: "T21c2",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XXI",
        },
        {
          kind: "chapter",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "…hanc consuetudinem sub altera specie communicandi approbavit, et pro lege habendam decrevit: quam reprobare, aut sine ipsius Ecclesiae auctoritate pro libito mutare non licet.",
          edition: "trent.la",
          page: "290",
        },
        es: {
          text: "…ha aprobado, movida de graves y justas causas, la de comulgar bajo una sola especie, decretando que esta se observase como ley; la misma que no es permitido reprobar, ni mudar arbitrariamente sin la autoridad de la misma Iglesia.",
          edition: "trent.es",
          page: "290",
          translation: "printed-original",
        },
        en: {
          text: "has approved of this custom of communicating under one species, and decreed that it was to be held as a law; which it is not lawful to reprobate, or to change at pleasure, without the authority of the Church itself.",
          edition: "trent.en",
          page: "142",
        },
      },
      {
        es: {
          text: "«desde los principios de la religion cristiana» … «freqüente» … «movida de graves y justas causas» … «salva siempre la esencia de ellos»",
          edition: "trent.es",
          translation: "printed-original",
        },
        citedIn: ["OB-4"],
      },
    ],
    date: {
      year: 1562,
      month: 7,
      day: 16,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T21c3: {
    id: "T21c3",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XXI",
        },
        {
          kind: "chapter",
          value: "3",
        },
        {
          kind: "locus",
          value: "y canon 3",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«se recibe en cada una sola de las especies á Cristo todo entero, y un verdadero Sacramento» … «defraudado» … «ninguna gracia necesaria para conseguir la salvacion»",
          edition: "trent.es",
          translation: "printed-original",
        },
        citedIn: ["OB-4"],
      },
      {
        es: {
          text: "Si alguno negáre que Cristo, fuente y autor de todas las gracias, se recibe todo entero bajo la sola especie de pan, dando por razon, como falsamente afirman algunos, que no se recibe, segun lo estableció el mismo Jesu-Cristo, en las dos especies; sea excomulgado.",
          edition: "trent.es",
          page: "293",
          translation: "printed-original",
        },
        at: "canon 3",
        note: '"anatema" en el latín; "excomulgado" en la traducción de 1785.',
      },
    ],
    date: {
      year: 1562,
      month: 7,
      day: 16,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T21can1: {
    id: "T21can1",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XXI",
        },
        {
          kind: "canon",
          value: "1",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Si alguno dixere, que todos y cada uno de los fieles cristianos están obligados por precepto divino, ó de necesidad para conseguir la salvacion, á recibir una y otra especie del santísimo Sacramento de la Eucaristía; sea excomulgado.",
          edition: "trent.es",
          page: "293",
          translation: "printed-original",
        },
        note: '"anatema" en el latín; "excomulgado" en la traducción de 1785.',
      },
    ],
    date: {
      year: 1562,
      month: 7,
      day: 16,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T21can2: {
    id: "T21can2",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XXI",
        },
        {
          kind: "canon",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "…aut in eo errasse; anathema sit.",
          edition: "trent.la",
          page: "293",
        },
        es: {
          text: "Si alguno dixere, que no tuvo la santa Iglesia católica causas ni razones justas para dar la comunion solo en la especie de pan á los legos, así como á los clerigos que no celebran; ó que erró en esto; sea excomulgado.",
          edition: "trent.es",
          page: "293",
          translation: "printed-original",
        },
        en: {
          text: "was not induced, by just causes and reasons, to communicate under the species of bread only … let him be anathema",
          edition: "trent.en",
        },
        note: '"anatema" en el latín; "excomulgado" en la traducción de 1785.',
      },
    ],
    date: {
      year: 1562,
      month: 7,
      day: 16,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T22c1: {
    id: "T22c1",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XXII",
        },
        {
          kind: "chapter",
          value: "1",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Is igitur Deus, et Dominus noster, etsi semel se ipsum in ara crucis, morte intercedente, Deo Patri oblaturus erat, ut aeternam illic redemptionem operaretur; quia tamen per mortem sacerdotium ejus extinguendum non erat; in Coena novissima … dilectae sponsae suae Ecclesiae visibile, sicut hominum natura exigit, relinqueret sacrificium, quo cruentum illud, semel in cruce peragendum, repraesentaretur, ejusque memoria in finem usque saeculi permaneret, atque illius salutaris virtus in remissionem eorum, quae a nobis quotidie committuntur, peccatorum applicaretur…",
          edition: "trent.la",
          page: "314–315",
        },
        es: {
          text: "El mismo Dios pues, y señor nuestro, aunque se había de ofrecer á sí mismo á Dios Padre, una vez, por medio de la muerte en el ara de la cruz, para obrar desde ella la redencion eterna; con todo, como su sacerdocio no habia de acabarse con su muerte; para dexar en la última cena, de la noche misma en que era entregado, á su amada Esposa la Iglesia un sacrificio visible, segun requiere la condicion de los hombres, en el que se representase el sacrificio cruento que por una vez se habia de hacer en la cruz, y permaneciese su memoria hasta el fin del mundo, y se aplicase su saludable virtud á la remision de los pecados que cotidianamente cometemos…",
          edition: "trent.es",
          page: "314–315",
          translation: "printed-original",
        },
        en: {
          text: "though He was about to offer Himself once on the altar of the cross unto God the Father, by means of His death, there to operate an eternal redemption; nevertheless, because that His priesthood was not to be extinguished by His death, in the last supper … that He might leave, to His own beloved Spouse the Church, a visible sacrifice, such as the nature of man requires, whereby that bloody sacrifice, once to be accomplished on the cross might be represented, and the memory thereof remain even unto the end of the world, and its salutary virtue be applied to the remission of those sins which we daily commit…",
          edition: "trent.en",
          page: "153",
        },
      },
    ],
    date: {
      year: 1562,
      month: 9,
      day: 17,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T22c2: {
    id: "T22c2",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XXII",
        },
        {
          kind: "chapter",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Una enim, eademque est hostia, idem nunc offerens sacerdotum ministerio, qui se ipsum tunc in Cruce obtulit, sola offerendi ratione diversa. Cujus quidem oblationis, cruentae, inquam, fructus per hanc incruentam uberrime percipiuntur: tantum abest, ut illi per hanc quovis modo derogetur.",
          edition: "trent.la",
          page: "317–318",
        },
        es: {
          text: "…porque la hostia es una misma, uno el mismo que ahora ofrece por el ministerio de los sacerdotes, que el que entonces se ofreció á sí mismo en la cruz, con sola la diferencia del modo de ofrecerse. Los frutos por cierto de aquella oblacion cruenta, se logran abundantisimamente por esta incruenta: tan lejos está que esta derogue de modo alguno á aquella.",
          edition: "trent.es",
          page: "317–318",
          translation: "printed-original",
        },
        en: {
          text: "For the victim is one and the same, the same now offering by the ministry of priests who then offered Himself on the cross, the manner alone of offering being different. The fruits indeed of which oblation, of that bloody one, to wit, are received most plentifully through this unbloody one; so far is this (latter) from derogating in any way from that (former oblation).",
          edition: "trent.en",
          page: "155",
        },
      },
      {
        la: {
          text: "…in ara crucis semel seipsum cruenté obtulit; docet sancta Synodus, sacrificium istud veré propitiatorium esse",
          edition: "trent.la",
          page: "317",
        },
        es: {
          text: "por quanto en este divino sacrificio que se hace en la Misa, se contiene, y sacrifica incruentamente aquel mismo Cristo que se ofreció por una vez cruentamente en el ara de la cruz; enseña el santo Concilio, que este sacrificio es con toda verdad propiciatorio",
          edition: "trent.es",
          page: "317",
          translation: "printed-original",
        },
        citedIn: ["citado en Catecismo 1367"],
      },
      {
        es: {
          text: "«si nos acercamos al Señor contritos y penitentes, si con sincero corazon, y recta fe, si con temor y reverencia»",
          edition: "trent.es",
          page: "317",
          translation: "printed-original",
        },
      },
      {
        es: {
          text: "«segun la tradicion de los Apóstoles, por los que han muerto en Cristo sin estar plenamente purgados»",
          edition: "trent.es",
          page: "318",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1562,
      month: 9,
      day: 17,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T22c6: {
    id: "T22c6",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XXII",
        },
        {
          kind: "chapter",
          value: "6",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«Quisiera por cierto el sacrosanto Concilio que todos los fieles que asistiesen á las Misas comulgasen en ellas, no solo espiritualmente, sino recibiendo tambien sacramentalmente la Eucaristía» … «se deben tambien tener con toda verdad por comunes de todos; parte porque el pueblo comulga espiritualmente en ellas, y parte porque se celebran por un ministro público de la Iglesia, no solo por sí, sino por todos los fieles que son miembros del cuerpo de Cristo»",
          edition: "trent.es",
          page: "321",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1562,
      month: 9,
      day: 17,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T22can: {
    id: "T22can",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XXII",
        },
        {
          kind: "canon",
          value: "1, 3 y 4",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, in Missa non offerri Deo verum, et proprium sacrificium; aut quod offerri non sit aliud, quam nobis Christum ad manducandum dari; anathema sit.",
          edition: "trent.la",
          page: "324–325",
        },
        es: {
          text: "Si alguno dixere, que no se ofrece á Dios en la Misa verdadero y propio sacrificio; ó que el ofrecerse este no es otra cosa que darnos á Cristo para que le comamos; sea excomulgado.",
          edition: "trent.es",
          page: "324–325",
          translation: "printed-original",
        },
        at: "canon 1",
        note: '"anatema" en el latín; "excomulgado" en la traducción de 1785.',
      },
      {
        es: {
          text: "Si alguno dixere, que el sacrificio de la Misa es solo sacrificio de alabanza, y de accion de gracias, ó mero recuerdo del sacrificio consumado en la cruz, mas que no es propiciatorio; ó que solo aprovecha al que lo recibe; y que no se debe ofrecer por los vivos, ni por los difuntos, por los pecados, penas, satisfacciones, ni otras necesidades; sea excomulgado.",
          edition: "trent.es",
          page: "325",
          translation: "printed-original",
        },
        en: {
          text: "If anyone saith that the sacrifice of the mass is only a sacrifice of praise and of thanksgiving; or that it is a bare commemoration of the sacrifice consummated on the cross, but not a propitiatory sacrifice; or that it profits him only who receives; and that it ought not to be offered for the living and the dead for sins, pains, satisfactions, and other necessities; let him be anathema.",
          edition: "trent.en",
          page: "158–159",
        },
        at: "canon 3",
        note: '"anatema" en el latín; "excomulgado" en la traducción de 1785.',
      },
      {
        la: {
          text: "Si quis dixerit, blasphemiam irrogari sanctissimo Christi sacrificio, in cruce peracto, per Missae sacrificium; aut illi per hoc derogari; anathema sit.",
          edition: "trent.la",
          page: "325",
        },
        es: {
          text: "Si alguno dixere, que se comete blasfemia contra el santisimo sacrificio que Cristo consumó en la cruz, por el sacrificio de la Misa; ó que por este se deroga á aquel; sea excomulgado.",
          edition: "trent.es",
          page: "325",
          translation: "printed-original",
        },
        at: "canon 4",
        note: '"anatema" en el latín; "excomulgado" en la traducción de 1785.',
      },
    ],
    date: {
      year: 1562,
      month: 9,
      day: 17,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T22can8: {
    id: "T22can8",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XXII",
        },
        {
          kind: "canon",
          value: "8",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, Missas, in quibus solus sacerdos sacramentaliter communicat, illicitas esse, ideoque abrogandas; anathema sit",
          edition: "trent.la",
          page: "326",
        },
        es: {
          text: "Si alguno dixere, que las Misas en que solo el sacerdote comulga sacramentalmente, son ilícitas, y que por esta causa se deben abrogar; sea excomulgado.",
          edition: "trent.es",
          page: "326",
          translation: "printed-original",
        },
        note: '"anatema" en el latín; "excomulgado" en la traducción de 1785.',
      },
    ],
    date: {
      year: 1562,
      month: 9,
      day: 17,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T22can2: {
    id: "T22can2",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XXII",
        },
        {
          kind: "canon",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Si quis dixerit, illis verbis: Hoc facite in meam commemorationem, Christum non instituisse Apostolos sacerdotes; aut non ordinasse, ut ipsi, aliique sacerdotes offerrent corpus, et sanguinem suum; anathema sit.",
          edition: "trent.la",
          page: "325",
        },
        es: {
          text: "Si alguno dixere, que en aquellas palabras: Haced esto en mi memoria, no instituyó Cristo sacerdotes á los Apóstoles; ó que no los ordenó para que ellos, y los demas sacerdotes ofreciesen su cuerpo, y su sangre; sea excomulgado.",
          edition: "trent.es",
          page: "325",
          translation: "printed-original",
        },
        en: {
          text: "If anyone saith that by those words, Do this for the commemoration of Me (Luke xxii. 19), Christ did not institute the Apostles priests…",
          edition: "trent.en",
          page: "158",
        },
        note: '"anatema" en el latín; "excomulgado" en la traducción de 1785.',
      },
    ],
    date: {
      year: 1562,
      month: 9,
      day: 17,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T22c7: {
    id: "T22c7",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XXII",
        },
        {
          kind: "chapter",
          value: "7",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1562,
      month: 9,
      day: 17,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  T22decr: {
    id: "T22decr",
    work: "trent",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "session",
          value: "XXII",
        },
        {
          kind: "locus",
          value: "decreto sobre lo que se ha de observar y evitar en la celebración de la Misa",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«las condiciones de pagas de qualquiera especie, los contratos» … «no distan mucho del pecado de Simonía» … «el abuso de decir cierto número de Misas con determinado número de luces, inventado mas bien por espíritu de supersticion que de verdadera religion»",
          edition: "trent.es",
          page: "≈328–330",
          translation: "printed-original",
        },
      },
    ],
    date: {
      year: 1562,
      month: 9,
      day: 17,
    },
    link: {
      href: "https://archive.org/details/elsacrosantoyec00madgoog",
      label: "Ver el escaneo de 1785 en archive.org",
    },
  },
  FLOlae: {
    id: "FLOlae",
    work: "florence-laetentur",
    kind: "source",
    locator: {
      parts: [],
      qualifier: "decreto de unión con los griegos",
    },
    excerpts: [
      {
        la: {
          text: "Item, in azymo sive fermentato pane triticeo, corpus Christi veraciter confici; sacerdotesque in altero ipsum domini corpus conficere debere, unumquemque scilicet juxta suae ecclesiae sive occidentalis, sive orientalis consuetudinem.",
          edition: "florence-laetentur.la",
        },
        es: {
          text: "el cuerpo de Cristo se consagra verdaderamente en pan de trigo ázimo o fermentado, y los sacerdotes deben consagrar el cuerpo del Señor en uno u otro, cada uno según la costumbre de su Iglesia, occidental u oriental.",
          edition: "florence-laetentur.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de Mansi",
        },
        note: "Mansi 31, col. 1031; fecha, col. 1034 («pridie Nonas Julii» 1439)",
      },
    ],
    date: {
      year: 1439,
      month: 7,
      day: 6,
    },
    link: {
      href: "https://archive.org/details/sacrorumconcilio0031jonn",
      label: "Ver el escaneo de Mansi en archive.org",
    },
  },
  CR38: {
    id: "CR38",
    work: "roman-catechism",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "part",
          value: "II",
        },
        {
          kind: "chapter",
          value: "4",
        },
        {
          kind: "number",
          value: "38",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«parece que de ningun modo se podria decir con verdad: Esto es mi cuerpo»",
          edition: "roman-catechism.es",
          translation: "printed-original",
        },
        note: "Zorita, p. 223",
      },
    ],
    date: {
      year: 1566,
    },
    link: {
      href: "https://archive.org/details/catecismo-romano-de-trento-san-pi-o-v.-traducido-p.-m.-fr.-agustin-zorita-dominico-1833-completo",
      label: "Ver el escaneo de 1833 en archive.org",
    },
  },
  CR40: {
    id: "CR40",
    work: "roman-catechism",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "part",
          value: "II",
        },
        {
          kind: "chapter",
          value: "4",
        },
        {
          kind: "number",
          value: "40",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Sed moneant pastores hoc loco, mirandum non esse, si post consecrationem panis etiam vocetur. Hoc enim nomine Eucharistia appellari consuevit, tum quia panis speciem habeat, tum quia naturalem alendi, et nutriendi corporis vim, quae panis propria est, adhuc retineat",
          edition: "roman-catechism.la",
        },
        es: {
          text: "«no debe estrañarse que la Eucaristía se llame pan, aun despues de la consagracion» … «conserva la figura de pan» … «todavía retiene natural virtud de alimentar» … «es costumbre de las Escrituras sagradas llamar las cosas segun lo que parecen»",
          edition: "roman-catechism.es",
          translation: "printed-original",
        },
        en: {
          text: "we should not at all be surprised, if even after consecration, the Eucharist is sometimes called bread: it is so called because it has the appearance and still retains the natural quality of bread, which is to support and nourish the body",
          edition: "roman-catechism.en",
        },
        note: "Zorita, pp. 224–225; Donovan, p. 162",
      },
    ],
    date: {
      year: 1566,
    },
    link: {
      href: "https://archive.org/details/catecismo-romano-de-trento-san-pi-o-v.-traducido-p.-m.-fr.-agustin-zorita-dominico-1833-completo",
      label: "Ver el escaneo de 1833 en archive.org",
    },
  },
  SC47: {
    id: "SC47",
    work: "sc",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "47",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: 'Salvator noster, in Cena novissima, qua nocte tradebatur, Sacrificium Eucharisticum Corporis et Sanguinis sui instituit, quo Sacrificium Crucis in saecula, donec veniret, perpetuaret atque adeo Ecclesiae dilectae Sponsae memoriale concrederet Mortis et Resurrectionis suae: sacramentum pietatis, signum unitatis, vinculum caritatis, convivium paschale, "in quo Christus sumitur, mens impletur gratia et futurae gloriae nobis pignus datur".',
          edition: "sc.la",
        },
        es: {
          text: "Nuestro Salvador, en la Última Cena, la noche que le traicionaban, instituyó el Sacrificio Eucarístico de su Cuerpo y Sangre, con lo cual iba a perpetuar por los siglos, hasta su vuelta, el Sacrificio de la Cruz y a confiar a su Esposa, la Iglesia, el Memorial de su Muerte y Resurrección: sacramento de piedad, signo de unidad, vínculo de caridad, banquete pascual, en el cual se come a Cristo, el alma se llena de gracia y se nos da una prenda de la gloria venidera.",
          edition: "sc.es",
          translation: "official",
        },
        en: {
          text: "At the Last Supper, on the night when He was betrayed, our Saviour instituted the eucharistic sacrifice of His Body and Blood. He did this in order to perpetuate the sacrifice of the Cross throughout the centuries until He should come again…",
          edition: "sc.en",
        },
        note: 'El Catecismo (1323) cita este pasaje con otra traducción oficial: "vínculo de amor", "en el que se recibe a Cristo", "prenda de la gloria futura"',
      },
    ],
    date: {
      year: 1963,
      month: 12,
      day: 4,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  SC55: {
    id: "SC55",
    work: "sc",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "55",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Manteniendo firmes los principios dogmáticos declarados por el Concilio de Trento, la comunión bajo ambas especies puede concederse en los casos que la Sede Apostólica determine…",
          edition: "sc.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1963,
      month: 12,
      day: 4,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_sp.html",
      label: "Leer en vatican.va",
    },
  },
  OE5: {
    id: "OE5",
    work: "oe",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "5",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«que las Iglesias de Oriente, como las de Occidente, gozan del derecho y deber de regirse según sus respectivas disciplinas peculiares, como lo exijan su venerable antigüedad»",
          edition: "oe.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_orientalium-ecclesiarum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  OE6: {
    id: "OE6",
    work: "oe",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "6",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Sepan y tengan por seguro todos los orientales, que pueden y deben conservar siempre sus legítimos ritos litúrgicos y su disciplina",
          edition: "oe.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1964,
    },
    link: {
      href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_orientalium-ecclesiarum_sp.html",
      label: "Leer en vatican.va",
    },
  },
  MF10: {
    id: "MF10",
    work: "mysterium-fidei",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "10",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "circa dogma transsubstantiationis … quasi cuique doctrinam semel ab Ecclesia definitam … liceret",
          edition: "mysterium-fidei.la",
        },
        es: {
          text: "opiniones acerca de las misas privadas, del dogma de la transustanciación y del culto eucarístico […] como si a cualquiera le fuese lícito olvidar la doctrina, una vez definida por la Iglesia",
          edition: "mysterium-fidei.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1965,
      month: 9,
      day: 3,
    },
    link: {
      href: "https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html",
      label: "Leer en vatican.va",
    },
  },
  MF11: {
    id: "MF11",
    work: "mysterium-fidei",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "11",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "discutir sobre el misterio de la transustanciación sin referirse a la admirable conversión de toda la sustancia del pan en el cuerpo de Cristo y de toda la sustancia del vino en su sangre, […] de modo que se limitan ellos tan sólo a lo que llaman transignificación y transfinalización",
          edition: "mysterium-fidei.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "no se puede proponer y aceptar la opinión, según la cual en las hostias consagradas, que quedan después de celebrado el santo sacrificio de la misa, ya no se halla presente Nuestro Señor Jesucristo",
          edition: "mysterium-fidei.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1965,
      month: 9,
      day: 3,
    },
    link: {
      href: "https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html",
      label: "Leer en vatican.va",
    },
  },
  MF24: {
    id: "MF24",
    work: "mysterium-fidei",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "24",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "expresan conceptos no ligados a una determinada forma de cultura ni a una determinada fase de progreso científico, ni a una u otra escuela teológica",
          edition: "mysterium-fidei.es",
          translation: "official",
        },
        en: {
          text: "express concepts that are not tied to a certain specific form of human culture, or to a certain level of scientific progress, or to one or another theological school.",
          edition: "mysterium-fidei.en",
        },
      },
    ],
    date: {
      year: 1965,
      month: 9,
      day: 3,
    },
    link: {
      href: "https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html",
      label: "Leer en vatican.va",
    },
  },
  MF32: {
    id: "MF32",
    work: "mysterium-fidei",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "32",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "toda misa, aunque sea celebrada privadamente por un sacerdote, no es acción privada, sino acción de Cristo y de la Iglesia, la cual, en el sacrifico que ofrece, aprende a ofrecerse a sí misma como sacrificio universal, y aplica a la salvación del mundo entero la única e infinita virtud redentora del sacrificio de la Cruz",
          edition: "mysterium-fidei.es",
          translation: "official",
        },
        en: {
          text: "For each and every Mass is not something private, even if a priest celebrates it privately; instead, it is an act of Christ and of the Church",
          edition: "mysterium-fidei.en",
        },
      },
    ],
    date: {
      year: 1965,
      month: 9,
      day: 3,
    },
    link: {
      href: "https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html",
      label: "Leer en vatican.va",
    },
  },
  MF46: {
    id: "MF46",
    work: "mysterium-fidei",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "46",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "no se hace presente en este sacramento sino por la conversión de toda la sustancia del pan en su cuerpo y de toda la sustancia del vino en su sangre",
          edition: "mysterium-fidei.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "bajo dichas especies ya no existe lo que antes había, sino una cosa completamente diversa; y esto no tan sólo por el juicio de la fe de la Iglesia, sino por la realidad objetiva, puesto que, convertida la sustancia o naturaleza del pan y del vino en el cuerpo y en la sangre de Cristo, no queda ya nada del pan y del vino, sino tan sólo las especies",
          edition: "mysterium-fidei.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "Cristo todo entero está presente en su realidad física, aun corporalmente, pero no a la manera que los cuerpos están en un lugar",
          edition: "mysterium-fidei.es",
          translation: "official",
        },
        en: {
          text: "nothing remains of the bread and the wine except for the species—beneath which Christ is present whole and entire in His physical 'reality,' corporeally present, although not in the manner in which bodies are in a place.",
          edition: "mysterium-fidei.en",
        },
      },
    ],
    date: {
      year: 1965,
      month: 9,
      day: 3,
    },
    link: {
      href: "https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html",
      label: "Leer en vatican.va",
    },
  },
  MF56: {
    id: "MF56",
    work: "mysterium-fidei",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "56",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "conservando con el mayor cuidado las hostias consagradas, presentándolas a los fieles para que las veneren con solemnidad, llevándolas en procesión en medio de la alegría del pueblo",
          edition: "mysterium-fidei.es",
          translation: "official",
        },
        citedIn: ["Citado en Catecismo 1378"],
      },
    ],
    date: {
      year: 1965,
      month: 9,
      day: 3,
    },
    link: {
      href: "https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html",
      label: "Leer en vatican.va",
    },
  },
  EdE12: {
    id: "EdE12",
    work: "ede",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "12",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'La Misa hace presente el sacrificio de la Cruz, no se le añade y no lo multiplica. Lo que se repite es su celebración memorial, la "manifestación memorial" (memorialis demonstratio), por la cual el único y definitivo sacrificio redentor de Cristo se actualiza siempre en el tiempo.',
          edition: "ede.es",
          translation: "official",
        },
        en: {
          text: "The Mass makes present the sacrifice of the Cross; it does not add to that sacrifice nor does it multiply it. What is repeated is its memorial celebration…",
          edition: "ede.en",
        },
      },
      {
        es: {
          text: "No afirmó solamente que lo que les daba de comer y beber era su cuerpo y su sangre, sino que manifestó su valor sacrificial, haciendo presente de modo sacramental su sacrificio, que cumpliría después en la cruz algunas horas más tarde, para la salvación de todos.",
          edition: "ede.es",
          translation: "official",
        },
        en: {
          text: "Jesus did not simply state that what he was giving them to eat and drink was his body and his blood; he also expressed its sacrificial meaning and made sacramentally present his sacrifice which would soon be offered on the Cross for the salvation of all.",
          edition: "ede.en",
        },
      },
    ],
    date: {
      year: 2003,
      month: 4,
      day: 17,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html",
      label: "Leer en vatican.va",
    },
  },
  EdE13: {
    id: "EdE13",
    work: "ede",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "13",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "la Eucaristía es sacrificio en sentido propio y no sólo en sentido genérico, como si se tratara del mero ofrecimiento de Cristo a los fieles como alimento espiritual",
          edition: "ede.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 2003,
      month: 4,
      day: 17,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html",
      label: "Leer en vatican.va",
    },
  },
  EdE16: {
    id: "EdE16",
    work: "ede",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "16",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'Cuando Jesús anuncia por primera vez esta comida, los oyentes se quedan asombrados y confusos, obligando al Maestro a recalcar la verdad objetiva de sus palabras: "En verdad, en verdad os digo: si no coméis la carne del Hijo del hombre, y no bebéis su sangre, no tendréis vida en vosotros" (Jn 6, 53). No se trata de un alimento metafórico: "Mi carne es verdadera comida y mi sangre verdadera bebida" (Jn 6, 55).',
          edition: "ede.es",
          translation: "official",
        },
        en: {
          text: "When for the first time Jesus spoke of this food, his listeners were astonished and bewildered, which forced the Master to emphasize the objective truth of his words … This is no metaphorical food: 'My flesh is food indeed, and my blood is drink indeed' (Jn 6:55).",
          edition: "ede.en",
        },
      },
    ],
    date: {
      year: 2003,
      month: 4,
      day: 17,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html",
      label: "Leer en vatican.va",
    },
  },
  EdE25: {
    id: "EdE25",
    work: "ede",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "25",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«está estrechamente unido a la celebración del Sacrificio eucarístico» … «deriva de la celebración del Sacrificio y tiende a la comunión sacramental y espiritual»",
          edition: "ede.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 2003,
      month: 4,
      day: 17,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html",
      label: "Leer en vatican.va",
    },
  },
  EdE26: {
    id: "EdE26",
    work: "ede",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "26",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "si la Eucaristía edifica la Iglesia y la Iglesia hace la Eucaristía, se deduce que hay una relación sumamente estrecha entre una y otra",
          edition: "ede.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 2003,
      month: 4,
      day: 17,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html",
      label: "Leer en vatican.va",
    },
  },
  EdE35: {
    id: "EdE35",
    work: "ede",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "35",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La celebración de la Eucaristía, no obstante, no puede ser el punto de partida de la comunión, que la presupone previamente, para consolidarla y llevarla a perfección.",
          edition: "ede.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 2003,
      month: 4,
      day: 17,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html",
      label: "Leer en vatican.va",
    },
  },
  EdE38: {
    id: "EdE38",
    work: "ede",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "38",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "No se puede dar la comunión a una persona no bautizada o que rechace la verdad íntegra de fe sobre el Misterio eucarístico. […] el Sacramento de su cuerpo y su sangre no permite ficciones.",
          edition: "ede.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 2003,
      month: 4,
      day: 17,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html",
      label: "Leer en vatican.va",
    },
  },
  EdE45: {
    id: "EdE45",
    work: "ede",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "45",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "el objetivo es satisfacer una grave necesidad espiritual para la salvación eterna de los fieles, singularmente considerados, pero no realizar una intercomunión, que no es posible mientras no se hayan restablecido del todo los vínculos visibles de la comunión eclesial",
          edition: "ede.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 2003,
      month: 4,
      day: 17,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html",
      label: "Leer en vatican.va",
    },
  },
  CDF5: {
    id: "CDF5",
    work: "cdf-note-1998",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "section",
          value: "5",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'definidas como verdades divinamente reveladas por medio de un juicio solemne del Romano Pontífice cuando habla "ex cathedra", o por el Colegio de los Obispos reunido en concilio, o bien son propuestas infaliblemente por el Magisterio ordinario y universal',
          edition: "cdf-note-1998.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1998,
      month: 6,
      day: 29,
    },
    link: {
      href: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_1998_professio-fidei_sp.html",
      label: "Leer en vatican.va",
    },
  },
  MISAL: {
    id: "MISAL",
    work: "misal",
    kind: "source",
    locator: {
      parts: [],
    },
    excerpts: [],
  },
  OGMR: {
    id: "OGMR",
    work: "ogmr",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "79c",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "la Iglesia, por medio de determinadas invocaciones, implora la fuerza del Espíritu Santo para que los dones que han presentado los hombres queden consagrados, es decir, se conviertan en el Cuerpo y Sangre de Cristo […]",
          edition: "ogmr.es",
          translation: "official",
        },
        note: "Tal como la cita Sacramentum caritatis 48",
      },
    ],
    link: {
      href: "https://www.vatican.va/content/benedict-xvi/es/apost_exhortations/documents/hf_ben-xvi_exh_20070222_sacramentum-caritatis.html",
      label: "Leer en vatican.va",
    },
  },
  SCa13: {
    id: "SCa13",
    work: "sacramentum-caritatis",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "13",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "junto con las palabras pronunciadas por Cristo en la última Cena, contiene la epíclesis, como invocación al Padre para que haga descender el don del Espíritu a fin de que el pan y el vino se conviertan en el cuerpo y la sangre de Jesucristo",
          edition: "sacramentum-caritatis.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "invocamos a Dios misericordioso para que mande su Santo Espíritu sobre las ofrendas que están ante nosotros, para que Él convierta el pan en cuerpo de Cristo y el vino en sangre de Cristo",
          edition: "sacramentum-caritatis.es",
          translation: "official",
        },
        note: "Cita las Catequesis de san Cirilo de Jerusalén (nota 25: «Catequesis XXIII, 7: PG 33, 1114s.»)",
      },
    ],
    date: {
      year: 2007,
      month: 2,
      day: 22,
    },
    link: {
      href: "https://www.vatican.va/content/benedict-xvi/es/apost_exhortations/documents/hf_ben-xvi_exh_20070222_sacramentum-caritatis.html",
      label: "Leer en vatican.va",
    },
  },
  SCa48: {
    id: "SCa48",
    work: "sacramentum-caritatis",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "48",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "la profunda unidad de la anáfora, entre la invocación del Espíritu Santo y el relato de la institución",
          edition: "sacramentum-caritatis.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 2007,
      month: 2,
      day: 22,
    },
    link: {
      href: "https://www.vatican.va/content/benedict-xvi/es/apost_exhortations/documents/hf_ben-xvi_exh_20070222_sacramentum-caritatis.html",
      label: "Leer en vatican.va",
    },
  },
  SCa66: {
    id: "SCa66",
    work: "sacramentum-caritatis",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "66",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Una objeción difundida entonces se basaba, por ejemplo, en la observación de que el Pan eucarístico no habría sido dado para ser contemplado, sino para ser comido. En realidad, a la luz de la experiencia de oración de la Iglesia, dicha contraposición se mostró carente de todo fundamento.",
          edition: "sacramentum-caritatis.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "la adoración eucarística no es sino la continuación obvia de la celebración eucarística, la cual es en sí misma el acto más grande de adoración de la Iglesia. Recibir la Eucaristía significa adorar al que recibimos",
          edition: "sacramentum-caritatis.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 2007,
      month: 2,
      day: 22,
    },
    link: {
      href: "https://www.vatican.va/content/benedict-xvi/es/apost_exhortations/documents/hf_ben-xvi_exh_20070222_sacramentum-caritatis.html",
      label: "Leer en vatican.va",
    },
  },
  PCPCU: {
    id: "PCPCU",
    work: "pcpcu-2001",
    kind: "source",
    locator: {
      parts: [],
    },
    excerpts: [
      {
        es: {
          text: "«sin una recitación del relato de la institución» … «puede considerarse válida» … «no de modo narrativo coherente y ad litteram, sino de modo eucológico disperso»",
          edition: "pcpcu-2001.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés",
        },
        en: {
          text: "from time immemorial, it has been used without a recitation of the Institution Narrative … the Congregation for the Doctrine of Faith on January 17th, 2001 concluded that this Anaphora can be considered valid. H.H. Pope John Paul II has approved this decision … the words of Eucharistic Institution are indeed present in the Anaphora of Addai and Mari, not in a coherent narrative way and ad litteram, but rather in a dispersed euchological way",
          edition: "pcpcu-2001.en",
        },
      },
      {
        en: {
          text: "The Catholic Church considers the words of the Institution as a constitutive part of the Anaphora or Eucharistic Prayer",
          edition: "pcpcu-2001.en",
        },
      },
    ],
    date: {
      year: 2001,
      month: 7,
      day: 20,
    },
    link: {
      href: "https://www.christianunity.va/content/unitacristiani/en/dialoghi/sezione-orientale/chiesa-assira-dell-oriente/altri-documenti/testo-in-inglese.html",
      label: "Leer en christianunity.va (en inglés)",
    },
  },
  CEC1085: {
    id: "CEC1085",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1085",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "todos los demás acontecimientos suceden una vez, y luego pasan y son absorbidos por el pasado. El misterio pascual de Cristo, por el contrario, no puede permanecer solamente en el pasado, pues por su muerte destruyó a la muerte, y todo lo que Cristo es y todo lo que hizo y padeció por los hombres participa de la eternidad divina y domina así todos los tiempos y en ellos se mantiene permanentemente presente.",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s1c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1106: {
    id: "CEC1106",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1106",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«Junto con la Anámnesis, la Epíclesis es el centro de toda celebración sacramental, y muy particularmente de la Eucaristía» … «el Espíritu Santo irrumpe y realiza aquello que sobrepasa toda palabra y todo pensamiento»",
          edition: "cec.es",
          translation: "official",
        },
        note: "La segunda frase es de san Juan Damasceno, Exposición de la fe (comienzos del siglo VIII), citado por el Catecismo",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s1c1a1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1323: {
    id: "CEC1323",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1323",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«vínculo de amor» … «en el que se recibe a Cristo» … «prenda de la gloria futura»",
          edition: "cec.es",
          translation: "official",
        },
        note: "El Catecismo abre su artículo sobre la Eucaristía citando Sacrosanctum Concilium 47 con esta redacción",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1333: {
    id: "CEC1333",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1333",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "En el corazón de la celebración de la Eucaristía se encuentran el pan y el vino que, por las palabras de Cristo y por la invocación del Espíritu Santo, se convierten en el Cuerpo y la Sangre de Cristo",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "los signos del pan y del vino siguen significando también la bondad de la creación",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1336: {
    id: "CEC1336",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1336",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'El primer anuncio de la Eucaristía dividió a los discípulos, igual que el anuncio de la pasión los escandalizó: "Es duro este lenguaje, ¿quién puede escucharlo?" (Jn 6,60). La Eucaristía y la cruz son piedras de escándalo. Es el mismo misterio.',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1338: {
    id: "CEC1338",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1338",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1340: {
    id: "CEC1340",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1340",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1341: {
    id: "CEC1341",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1341 y 1363",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1342: {
    id: "CEC1342",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1342–1343",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1346: {
    id: "CEC1346",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1346",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«dos grandes momentos que forman una unidad básica» … «con las lecturas, la homilía y la oración universal» … «con la presentación del pan y del vino, la acción de gracias consecratoria y la comunión» … «un solo acto de culto»",
          edition: "cec.es",
          translation: "official",
        },
        note: "El Catecismo cita aquí Sacrosanctum Concilium 56",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1348: {
    id: "CEC1348",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1348",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«es quien preside invisiblemente toda celebración eucarística» … «actuando in persona Christi capitis»",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1353: {
    id: "CEC1353",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1353",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«la fuerza de las palabras y de la acción de Cristo y el poder del Espíritu Santo hacen sacramentalmente presentes bajo las especies de pan y de vino su Cuerpo y su Sangre» … «la Iglesia pide al Padre que envíe su Espíritu Santo (o el poder de su bendición (cf Plegaria Eucarística I o Canon romano, 90; Misal Romano) sobre el pan y el vino, para que se conviertan por su poder, en el Cuerpo y la Sangre de Jesucristo»",
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita la Plegaria eucarística I del Misal Romano",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1360: {
    id: "CEC1360",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1360–1362",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'La Eucaristía es un sacrificio de acción de gracias al Padre […] "Eucaristía" significa, ante todo, acción de gracias. — La Eucaristía es también el sacrificio de alabanza por medio del cual la Iglesia canta la gloria de Dios en nombre de toda la creación. — La Eucaristía es el memorial de la Pascua de Cristo, la actualización y la ofrenda sacramental de su único sacrificio',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1364: {
    id: "CEC1364",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1364",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "el sacrificio que Cristo ofreció de una vez para siempre en la cruz, permanece siempre actual",
          edition: "cec.es",
          translation: "official",
        },
        note: "Remite a Hebreos 7:25-27",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1365: {
    id: "CEC1365",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1365",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'El carácter sacrificial de la Eucaristía se manifiesta en las palabras mismas de la institución: "Esto es mi Cuerpo que será entregado por vosotros" y "Esta copa es la nueva Alianza en mi sangre, que será derramada por vosotros" (Lc 22,19-20). En la Eucaristía, Cristo da el mismo cuerpo que por nosotros entregó en la cruz, y la sangre misma que "derramó por muchos [...] para remisión de los pecados" (Mt 26,28).',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1366: {
    id: "CEC1366",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1366",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La Eucaristía es, pues, un sacrificio porque representa (= hace presente) el sacrificio de la cruz, porque es su memorial y aplica su fruto",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1367: {
    id: "CEC1367",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1367",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El sacrificio de Cristo y el sacrificio de la Eucaristía son, pues, un único sacrificio",
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita Hebreos 9:14, 27, y Trento, ses. XXII, cap. 2 (DS 1743), con «verdaderamente propiciatorio»",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1368: {
    id: "CEC1368",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1368",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "el sacrificio de Cristo se hace también el sacrificio de los miembros de su Cuerpo",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1366b: {
    id: "CEC1366b",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1366–1367",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La Eucaristía es, pues, un sacrificio porque representa (= hace presente) el sacrificio de la cruz, porque es su memorial y aplica su fruto",
          edition: "cec.es",
          translation: "official",
        },
        at: "n. 1366",
      },
      {
        es: {
          text: "El sacrificio de Cristo y el sacrificio de la Eucaristía son, pues, un único sacrificio",
          edition: "cec.es",
          translation: "official",
        },
        at: "n. 1367",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1371: {
    id: "CEC1371",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1371",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'El Sacrificio Eucarístico es también ofrecido por los fieles difuntos "que han muerto en Cristo y todavía no están plenamente purificados" […], para que puedan entrar en la luz y la paz de Cristo',
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "Presentando a Dios nuestras súplicas por los que han muerto, aunque fuesen pecadores […], presentamos a Cristo inmolado por nuestros pecados, haciendo propicio para ellos y para nosotros al Dios amigo de los hombres",
          edition: "cec.es",
          translation: "official",
        },
        note: "El Catecismo cita a «San Cirilo de Jerusalén, Catecheses mistagogicae 5, 9.10»",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1373: {
    id: "CEC1373",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1373",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'está presente de múltiples maneras en su Iglesia […]: en su Palabra, en la oración de su Iglesia, […] en los sacramentos de los que Él es autor, en el sacrificio de la misa y en la persona del ministro. Pero, "sobre todo, (está presente) bajo las especies eucarísticas" (SC 7)',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1374: {
    id: "CEC1374",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1374",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "\"Esta presencia se denomina 'real', no a título exclusivo, como si las otras presencias no fuesen 'reales', sino por excelencia, porque es substancial, y por ella Cristo, Dios y hombre, se hace totalmente presente\" (MF 39).",
          edition: "cec.es",
          translation: "official",
        },
        en: {
          text: "a substantial presence by which Christ, God and man, makes himself wholly and entirely present",
          edition: "cec.en",
        },
      },
      {
        es: {
          text: '"contenidos verdadera, real y substancialmente el Cuerpo y la Sangre junto con el alma y la divinidad de nuestro señor Jesucristo, y, por consiguiente, Cristo entero"',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1375: {
    id: "CEC1375",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1375",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "No es el hombre quien hace que las cosas ofrecidas se conviertan en Cuerpo y Sangre de Cristo, sino Cristo mismo que fue crucificado por nosotros. El sacerdote, figura de Cristo, pronuncia estas palabras, pero su eficacia y su gracia provienen de Dios. Esto es mi Cuerpo, dice. Esta palabra transforma las cosas ofrecidas.",
          edition: "cec.es",
          translation: "official",
        },
        en: {
          text: "It is not man that causes the things offered to become the Body and Blood of Christ, but he who was crucified for us, Christ himself. the priest, in the role of Christ, pronounces these words, but their power and grace are God's. This is my body, he says. This word transforms the things offered.",
          edition: "cec.en",
        },
        note: "San Juan Crisóstomo, Homilías sobre la traición de Judas, 1, 6 (predicada en 388, según Baur; PG 49, 380), citado por el Catecismo",
      },
      {
        es: {
          text: "Estemos bien persuadidos de que esto no es lo que la naturaleza ha producido, sino lo que la bendición ha consagrado, y de que la fuerza de la bendición supera a la de la naturaleza, porque por la bendición la naturaleza misma resulta cambiada. … La palabra de Cristo, que pudo hacer de la nada lo que no existía, ¿no podría cambiar las cosas existentes en lo que no eran todavía?",
          edition: "cec.es",
          translation: "official",
        },
        en: {
          text: "Be convinced that this is not what nature has formed, but what the blessing has consecrated. the power of the blessing prevails over that of nature, because by the blessing nature itself is changed.... Could not Christ's word, which can make from nothing what did not exist, change existing things into what they were not before?",
          edition: "cec.en",
        },
        note: "San Ambrosio, Sobre los misterios, 9, 50; 52 (c. 387–391; PL 16, 405-407), citado por el Catecismo",
      },
      {
        es: {
          text: "«la eficacia de la Palabra de Cristo y de la acción del Espíritu Santo para obrar esta conversión»",
          edition: "cec.es",
          translation: "official",
        },
        citedIn: ["OB-6"],
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1376: {
    id: "CEC1376",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1376",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1377: {
    id: "CEC1377",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1377",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Cristo está todo entero presente en cada una de las especies y todo entero en cada una de sus partes",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "comienza en el momento de la consagración y dura todo el tiempo que subsistan las especies eucarísticas",
          edition: "cec.es",
          translation: "official",
        },
        en: {
          text: "Christ is present whole and entire in each of the species and whole and entire in each of their parts, in such a way that the breaking of the bread does not divide Christ.",
          edition: "cec.en",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1378: {
    id: "CEC1378",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1378",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "En la liturgia de la misa expresamos nuestra fe en la presencia real de Cristo bajo las especies de pan y de vino, entre otras maneras, arrodillándonos o inclinándonos profundamente en señal de adoración al Señor",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: '"La Iglesia católica ha dado y continua dando este culto de adoración que se debe al sacramento de la Eucaristía no solamente durante la misa, sino también fuera de su celebración: conservando con el mayor cuidado las hostias consagradas, presentándolas a los fieles para que las veneren con solemnidad, llevándolas en procesión en medio de la alegría del pueblo" (MF 56).',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1379: {
    id: "CEC1379",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1379",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El sagrario (tabernáculo) estaba primeramente destinado a guardar dignamente la Eucaristía para que pudiera ser llevada a los enfermos y ausentes fuera de la misa. Por la profundización de la fe en la presencia real de Cristo en su Eucaristía, la Iglesia tomó conciencia del sentido de la adoración silenciosa del Señor presente bajo las especies eucarísticas",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1381: {
    id: "CEC1381",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1381",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«no se conoce por los sentidos, […] sino sólo por la fe, la cual se apoya en la autoridad de Dios»",
          edition: "cec.es",
          translation: "official",
        },
        note: "El Catecismo cita aquí a santo Tomás",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1382: {
    id: "CEC1382",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1382",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1385: {
    id: "CEC1385",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1385",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1387: {
    id: "CEC1387",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1387",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1389: {
    id: "CEC1389",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1388–1389",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«recomienda vivamente a los fieles recibir la santa Eucaristía los domingos y los días de fiesta, o con más frecuencia aún, incluso todos los días»",
          edition: "cec.es",
          translation: "official",
        },
        at: "n. 1389",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1390: {
    id: "CEC1390",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1390",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Gracias a la presencia sacramental de Cristo bajo cada una de las especies, la comunión bajo la sola especie de pan ya hace que se reciba todo el fruto de gracia propio de la Eucaristía",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "«es la forma habitual de comulgar en los ritos orientales»",
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: 'Por razones pastorales, esta manera de comulgar se ha establecido legítimamente como la más habitual en el rito latino. "La comunión tiene una expresión más plena por razón del signo cuando se hace bajo las dos especies"…',
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita la Instrucción General del Misal Romano, 240",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1395: {
    id: "CEC1395",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1395",
        },
      ],
    },
    excerpts: [
      {
        en: {
          text: "the Eucharist is not ordered to the forgiveness of mortal sins - that is proper to the sacrament of Reconciliation. the Eucharist is properly the sacrament of those who are in full communion with the Church.",
          edition: "cec.en",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1396: {
    id: "CEC1396",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1396",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La unidad del Cuerpo místico: La Eucaristía hace la Iglesia. Los que reciben la Eucaristía se unen más estrechamente a Cristo. Por ello mismo, Cristo los une a todos los fieles en un solo cuerpo: la Iglesia.",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1399: {
    id: "CEC1399",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1399",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: '"Estas Iglesias, aunque separadas, [tienen] verdaderos sacramentos [...] y sobre todo, en virtud de la sucesión apostólica, el sacerdocio y la Eucaristía, con los que se unen aún más con nosotros con vínculo estrechísimo" (UR 15).',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1400: {
    id: "CEC1400",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1400",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'Las comunidades eclesiales nacidas de la Reforma, separadas de la Iglesia católica, "sobre todo por defecto del sacramento del orden, no han conservado la sustancia genuina e íntegra del misterio eucarístico" (UR 22). Por esto, para la Iglesia católica, la intercomunión eucarística con estas comunidades no es posible.',
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1401: {
    id: "CEC1401",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1401",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Si, a juicio del Ordinario, se presenta una necesidad grave, los ministros católicos pueden administrar los sacramentos (Eucaristía, Penitencia, Unción de los enfermos) a cristianos que no están en plena comunión con la Iglesia católica, pero que piden estos sacramentos con deseo y rectitud: en tal caso se precisa que profesen la fe católica respecto a estos sacramentos y estén bien dispuestos",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1411: {
    id: "CEC1411",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1411",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Sólo los presbíteros válidamente ordenados pueden presidir la Eucaristía y consagrar el pan y el vino para que se conviertan en el Cuerpo y la Sangre del Señor.",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1412: {
    id: "CEC1412",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1412",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«pan de trigo» … «sobre los cuales es invocada la bendición del Espíritu Santo»",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1414: {
    id: "CEC1414",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1414",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "En cuanto sacrificio, la Eucaristía es ofrecida también en reparación de los pecados de los vivos y los difuntos",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1415: {
    id: "CEC1415",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1415",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1416: {
    id: "CEC1416",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1416",
        },
      ],
    },
    excerpts: [
      {
        en: {
          text: "Communion with the Body and Blood of Christ increases the communicant's union with the Lord, forgives his venial sins, and preserves him from grave sins.",
          edition: "cec.en",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1417: {
    id: "CEC1417",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1417",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1418: {
    id: "CEC1418",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1418",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Puesto que Cristo mismo está presente en el Sacramento del Altar es preciso honrarlo con culto de adoración",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1457: {
    id: "CEC1457",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1457",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Quien tenga conciencia de hallarse en pecado grave que no comulgue el Cuerpo del Señor sin acudir antes a la confesión sacramental (cf DS 1647, 1661) a no ser que concurra un motivo grave y no haya posibilidad de confesarse; y, en este caso, tenga presente que está obligado a hacer un acto de contrición perfecta, que incluye el propósito de confesarse cuanto antes",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c2a4_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC1: {
    id: "CIC1",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "1",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Los cánones de este Código son sólo para la Iglesia latina",
          edition: "cic.es",
          translation: "official",
        },
        en: {
          text: "The canons of this Code regard only the Latin Church",
          edition: "cic.en",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro1_cann1-6_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC844: {
    id: "CIC844",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "844",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«profesen la fe católica respecto a esos sacramentos»",
          edition: "cic.es",
          translation: "official",
        },
        note: "§§1, 3–4",
      },
    ],
    date: {
      year: 1983,
    },
  },
  CIC900: {
    id: "CIC900",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "900",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Sólo el sacerdote válidamente ordenado es ministro capaz de confeccionar el sacramento de la Eucaristía, actuando en la persona de Cristo.",
          edition: "cic.es",
          translation: "official",
        },
        at: "§1",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann879-958_en.html",
      label: "Leer en vatican.va (en inglés)",
    },
  },
  CIC901: {
    id: "CIC901",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "901",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El sacerdote tiene facultad para aplicar la Misa por cualesquiera, tanto vivos como difuntos.",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann879-958_en.html",
      label: "Leer en vatican.va (en inglés)",
    },
  },
  CIC913: {
    id: "CIC913",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "913–914",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«previa confesión sacramental» … «con fe y devoción»",
          edition: "cic.es",
          translation: "official",
        },
        note: "913 §1 y 914",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann879-958_en.html",
      label: "Leer en vatican.va (en inglés)",
    },
  },
  CIC916: {
    id: "CIC916",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "916",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Quien tenga conciencia de hallarse en pecado grave, no celebre la Misa ni comulgue el Cuerpo del Señor sin acudir antes a la confesión sacramental, a no ser que concurra un motivo grave y no haya oportunidad de confesarse",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann879-958_en.html",
      label: "Leer en vatican.va (en inglés)",
    },
  },
  CIC919: {
    id: "CIC919",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "919",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«al menos desde una hora antes de la sagrada comunión, a excepción sólo del agua y de las medicinas»",
          edition: "cic.es",
          translation: "official",
        },
        note: "§§1, 3",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann879-958_en.html",
      label: "Leer en vatican.va (en inglés)",
    },
  },
  CIC920: {
    id: "CIC920",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "920",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«por lo menos una vez al año» … «durante el tiempo pascual, a no ser que por causa justa se cumpla en otro tiempo dentro del año»",
          edition: "cic.es",
          translation: "official",
        },
        at: "§§1–2",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann879-958_en.html",
      label: "Leer en vatican.va (en inglés)",
    },
  },
  CIC921: {
    id: "CIC921",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "921",
        },
      ],
    },
    excerpts: [],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann879-958_en.html",
      label: "Leer en vatican.va (en inglés)",
    },
  },
  CIC924: {
    id: "CIC924",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "924 y 926",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«exclusivamente de trigo y hecho recientemente» … «natural, del fruto de la vid» … «un poco de agua» … «según la antigua tradición de la Iglesia latina»",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann924-930_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC925: {
    id: "CIC925",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "925",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Adminístrese la sagrada comunión bajo la sola especie del pan o, de acuerdo con las leyes litúrgicas, bajo las dos especies; en caso de necesidad, también bajo la sola especie del vino.",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann924-930_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC926: {
    id: "CIC926",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "926",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«según la antigua tradición de la Iglesia latina»",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann924-930_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC938: {
    id: "CIC938",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "938 y 940",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«en un solo sagrario» … «verdaderamente noble» … «ha de lucir constantemente una lámpara especial, con la que se indique y honre la presencia de Cristo»",
          edition: "cic.es",
          translation: "official",
        },
        note: "938 §§1–2 y 940",
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann879-958_en.html",
      label: "Leer en vatican.va (en inglés)",
    },
  },
  CIC941: {
    id: "CIC941",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "941 y 944",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "«sobre todo en la solemnidad del Cuerpo y Sangre de Cristo»",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann879-958_en.html",
      label: "Leer en vatican.va (en inglés)",
    },
  },
  CIC945: {
    id: "CIC945",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "945",
        },
        {
          kind: "section",
          value: "2",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Se recomienda encarecidamente a los sacerdotes que celebren la Misa por las intenciones de los fieles, sobre todo de los necesitados, aunque no reciban ninguna ofrenda",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann945-958_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC947: {
    id: "CIC947",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "947",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "En materia de ofrendas de Misas, evítese hasta la más pequeña apariencia de negociación o comercio",
          edition: "cic.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1983,
    },
    link: {
      href: "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann945-958_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CIC1247: {
    id: "CIC1247",
    work: "cic",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "canon",
          value: "1247",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "El domingo y las demás fiestas de precepto los fieles tienen obligación de participar en la Misa.",
          edition: "cic.es",
          translation: "official",
        },
        en: {
          text: "On Sundays and other holy days of obligation, the faithful are obliged to participate in the Mass.",
          edition: "cic.en",
        },
      },
    ],
    date: {
      year: 1983,
    },
  },
  WCF292: {
    id: "WCF292",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "29.2",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "En este sacramento, Cristo no está ofrecido á su Padre, ni se hace ningun sacrificio verdadero para remision de pecados ni de los vivos y ni de los muertos, sino solamente un recuerdo de aquella vez cuando se ofreció á sí mismo, por sí mismo en la Cruz, una oblacion espiritual de todo loor posible á Dios, alabándole por el sacrificio de su Hijo que fué una sola vez para siempre; de manera que el sacrificio papal de la misa (como lo llaman) es abominable á los ojos de Dios y un ultraje al solo y único sacrificio de Cristo, la única propiciacion para todos los elegidos.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "In this sacrament Christ is not offered up to his Father, nor any real sacrifice made at all for remission of sins of the quick or dead; but only a commemoration of that one offering up of himself, by himself, upon the cross, once for all, and a spiritual oblation of all possible praise unto God for the same; so that the Popish sacrifice of the mass, as they call it, is most abominably injurious to Christ's one only sacrifice, the alone propitiation for all the sins of the elect.",
          edition: "wcf.en",
        },
        note: "1894, p. 93. Textos de prueba impresos: Heb 9:22, 25–26, 28; Heb 7:23–24, 27; Heb 10:11–12, 14, 18",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  WCF294: {
    id: "WCF294",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "29.4",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Las misas privadas, ó la recepcion de este sacramento por un sacerdote, ó por cualquiera otra persona cuando esté sola; como tambien la negacion del cáliz al pueblo; la adoracion de los elementos, el elevarlos, ó llevarlos en procesion ó de otra manera cualquiera para recibir adoracion, y la conservacion de ellos para supuestos usos religiosos, son todas costumbres y prácticas contrarias á la naturaleza de este sacramento, y á la institucion de Cristo.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "Private masses, or receiving this sacrament by a priest, or any other, alone; as likewise the denial of the cup to the people; worshipping the elements, the lifting them up, or carrying them about for adoration, and the reserving them for any pretended religious use; are all contrary to the nature of this sacrament, and to the institution of Christ.",
          edition: "wcf.en",
        },
        note: "1894, p. 94. Texto de prueba de la última cláusula: Mt 15:9",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  WCF296: {
    id: "WCF296",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "29.6 y 29.5",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Aquella doctrina llamada comunmente trasustanciacion que sostiene que hay un cambio de la sustancia del pan y del vino, en la sustancia del cuerpo y de la sangre de Cristo, por la consagracion de un sacerdote, ó por cualquier otro modo, por ser no solamente contra la Escritura, sino aun contra el sentido y razon comunes: destruye la naturaleza del sacramento; y ha sido y es, la causa de muchas supersticiones y groseras idolatrias.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "That doctrine which maintains a change of the substance of bread and wine into the substance of Christ's body and blood (commonly called Transubstantiation) by consecration of a priest, or by any other way, is repugnant not to Scripture alone, but even to common sense and reason; overthroweth the nature of the sacrament; and hath been and is the cause of manifold superstitions, yea, of gross idolatries.",
          edition: "wcf.en",
        },
        note: "29.6. 1894, p. 94. Textos de prueba: Hch 3:21; 1 Co 11:24–26; Lc 24:6, 39",
      },
      {
        es: {
          text: "…permanecen todavia en sustancia y naturaleza, verdadera y solamente, pan y vino, tales como fueron antes.",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "in substance and nature … still remain truly and only bread and wine, as they were before",
          edition: "wcf.en",
        },
        note: "29.5. Textos de prueba: 1 Co 11:26–28; Mt 26:29",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  WCF2924: {
    id: "WCF2924",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "29.2 y 29.4",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "…ni se hace ningun sacrificio verdadero para remision de pecados ni de los vivos y ni de los muertos…",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "nor any real sacrifice made at all for remission of sins of the quick or dead",
          edition: "wcf.en",
        },
        note: "29.2",
      },
      {
        es: {
          text: "Las misas privadas, ó la recepcion de este sacramento por un sacerdote, ó por cualquiera otra persona cuando esté sola…",
          edition: "wcf.es",
          translation: "printed-original",
        },
        en: {
          text: "Private masses, or receiving this sacrament by a priest, or any other, alone",
          edition: "wcf.en",
        },
        note: "29.4",
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://archive.org/details/confessionoffaith00chur",
      label: "Ver el escaneo de 1894 en archive.org",
    },
  },
  AC24: {
    id: "AC24",
    work: "augsburg",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXIV.21–27",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "De his opinionibus nostri admonuerunt, quod dissentiant a Scripturis Sanctis et laedant gloriam passionis Christi. Nam passio Christi fuit oblatio et satisfactio non solum pro culpa originis, sed etiam pro omnibus reliquis peccatis, ut ad Hebraeos, 10, 10, scriptum est: Sanctificati sumus per oblationem Iesu Christi semel. Item 10, 14: Una oblatione consummavit in perpetuum sanctificatos.",
          edition: "triglot.la",
        },
        es: {
          text: 'Acerca de estas opiniones, los nuestros advirtieron que se apartan de las Sagradas Escrituras y ofenden la gloria de la pasión de Cristo. Porque la pasión de Cristo fue oblación y satisfacción no solo por la culpa original, sino también por todos los demás pecados, como está escrito en Hebreos 10:10: "Somos santificados por la oblación de Jesucristo, hecha una vez". Y en 10:14: "Con una sola oblación hizo perfectos para siempre a los santificados".',
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín de la Triglotta",
        },
        en: {
          text: "Concerning these opinions our teachers have given warning that they depart from the Holy Scriptures and diminish the glory of the passion of Christ. For Christ's passion was an oblation and satisfaction, not for original guilt only, but also for all other sins, as it is written to the Hebrews 10:10: We are sanctified through the offering of Jesus Christ once for all. Also, Hebrews 10:14: By one offering He hath perfected forever them that are sanctified.",
          edition: "triglot.en",
        },
      },
      {
        en: {
          text: "that Christ, by His passion, had made satisfaction for original sin, and instituted the Mass wherein an offering should be made for daily sins … the Mass takes away the sins of the living and the dead by the outward act",
          edition: "triglot.en",
        },
        note: "Contexto, XXIV.21–23 (latín: ex opere operato)",
      },
    ],
    link: {
      href: "https://bookofconcord.org",
      label: "Leer en bookofconcord.org",
    },
  },
  AC24b: {
    id: "AC24b",
    work: "augsburg",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXIV.10–13, 21–23, 29",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "si la misa quita los pecados de los vivos y de los muertos por el acto exterior, la justificación vendría de la obra de las misas y no de la fe, lo cual la Escritura no permite.",
          edition: "triglot.es",
          translation: "ai-assisted",
        },
        en: {
          text: "if the Mass take away the sins of the living and the dead by the outward act justification comes of the work of Masses, and not of faith, which Scripture does not allow",
          edition: "triglot.en",
        },
        at: "XXIV.29",
      },
      {
        en: {
          text: "Masses are said only for fees or stipends (11) … Private Masses were discontinued among us, as scarcely any Private Masses were celebrated except for lucre's sake (13) … the common opinion that the Mass takes away the sins of the living and the dead by the outward act (22–23)",
          edition: "triglot.en",
        },
      },
    ],
    link: {
      href: "https://bookofconcord.org",
      label: "Leer en bookofconcord.org",
    },
  },
  AC22: {
    id: "AC22",
    work: "augsburg",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXII",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "Laicis datur utraque species sacramenti in coena Domini, quia hic mos habet mandatum Domini Matth. 26, 27: Bibite ex hoc omnes. Ubi manifeste praecepit Christus de poculo, ut omnes bibant.",
          edition: "triglot.la",
        },
        es: {
          text: 'A los laicos se les dan las dos especies del sacramento en la Cena del Señor, porque esta costumbre tiene el mandato del Señor en Mateo 26:27: "Bebed de ella todos". Allí Cristo mandó claramente acerca de la copa que todos beban.',
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "To the laity are given Both Kinds in the Sacrament of the Lord's Supper, because this usage has the commandment of the Lord in Matt. 26:27: Drink ye all of it, where Christ has manifestly commanded concerning the cup that all should drink.",
          edition: "triglot.en",
        },
        at: "XXII.1–2",
      },
    ],
    link: {
      href: "https://bookofconcord.org",
      label: "Leer en bookofconcord.org",
    },
  },
  AC2212: {
    id: "AC2212",
    work: "augsburg",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXII.12",
        },
      ],
    },
    excerpts: [
      {
        en: {
          text: "And because the division of the Sacrament does not agree with the ordinance of Christ, we are accustomed to omit the procession, which hitherto has been in use.",
          edition: "triglot.en",
        },
      },
    ],
    link: {
      href: "https://bookofconcord.org",
      label: "Leer en bookofconcord.org",
    },
  },
  AP24a: {
    id: "AP24a",
    work: "apology",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXIV.1, 19, 22",
        },
      ],
    },
    excerpts: [
      {
        la: {
          text: "nos non abolere missam, sed religiose retinere ac defendere. Fiunt enim apud nos missae singulis dominicis et aliis festis",
          edition: "triglot.la",
        },
        es: {
          text: "nosotros no abolimos la misa, sino que la conservamos y la defendemos con reverencia. Pues entre nosotros se celebran misas todos los domingos y en las demás fiestas",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "we do not abolish the Mass, but religiously maintain and defend it. For among us masses are celebrated every Lord's Day and on the other festivals",
          edition: "triglot.en",
        },
        at: "XXIV.1",
      },
      {
        la: {
          text: "Quoddam est sacrificium propitiatorium, id est, opus satisfactorium pro culpa et poena, hoc est, reconcilians Deum seu placans iram Dei, seu quod meretur aliis remissionem peccatorum. Altera species est sacrificium εὐχαριστικόν, quod non meretur remissionem peccatorum aut reconciliationem, sed fit a reconciliatis, ut pro accepta remissione peccatorum et pro aliis beneficiis acceptis gratias agamus",
          edition: "triglot.la",
        },
        es: {
          text: "Uno es el sacrificio propiciatorio, es decir, una obra que satisface por la culpa y la pena, esto es, que reconcilia a Dios o aplaca su ira, o que merece para otros el perdón de los pecados. La otra especie es el sacrificio eucarístico, que no merece el perdón de los pecados ni la reconciliación, sino que lo ofrecen los reconciliados, para dar gracias por el perdón de los pecados recibido y por los demás beneficios recibidos",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "One is the propitiatory sacrifice, i.e., a work which makes satisfaction for guilt and punishment … The other species is the eucharistic sacrifice, which does not merit the remission of sins or reconciliation, but is rendered by those who have been reconciled, in order that we may give thanks",
          edition: "triglot.en",
        },
        at: "XXIV.19",
      },
      {
        la: {
          text: "Sed revera unicum tantum in mundo fuit sacrificium propitiatorium, videlicet mors Christi, ut docet Epistola ad Ebraeos",
          edition: "triglot.la",
        },
        es: {
          text: "Pero en verdad hubo en el mundo un único sacrificio propiciatorio, a saber, la muerte de Cristo, como enseña la Epístola a los Hebreos",
          edition: "triglot.es",
          translation: "ai-assisted",
        },
        en: {
          text: "But in fact there has been only one propitiatory sacrifice in the world, namely, the death of Christ, as the Epistle to the Hebrews 10:4 teaches",
          edition: "triglot.en",
        },
        at: "XXIV.22",
      },
    ],
    link: {
      href: "https://bookofconcord.org/defense/of-the-mass/",
      label: "Leer en bookofconcord.org",
    },
  },
  AP24b: {
    id: "AP24b",
    work: "apology",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXIV.89, 92–93",
        },
      ],
      qualifier: "sobre la misa por los difuntos",
    },
    excerpts: [
      {
        la: {
          text: "Quod vero defendunt adversarii nostri applicationem ceremoniae pro liberandis animabus defunctorum, qua ex re quaestum infinitum faciunt, nulla habent testimonia, nullum mandatum ex Scripturis.",
          edition: "triglot.la",
        },
        es: {
          text: "Lo que defienden nuestros adversarios, la aplicación de la ceremonia para liberar las almas de los difuntos, de lo cual sacan ganancias infinitas, no tiene ningún testimonio ni ningún mandato de las Escrituras.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín",
        },
        en: {
          text: "Our adversaries have no testimonies and no command from Scripture for defending the application of the ceremony for liberating the souls of the dead, although from this they derive infinite revenue.",
          edition: "triglot.en",
        },
        note: 'XXIV.89 (en el mismo párrafo: la Cena "was instituted for commemoration and preaching among the living")',
      },
      {
        la: {
          text: "Quum missa non sit satisfactio, nec pro poena nec pro culpa, ex opere operato sine fide, sequitur applicationem pro mortuis inutilem esse.",
          edition: "triglot.la",
        },
        es: {
          text: "Puesto que la misa no es satisfacción, ni por la pena ni por la culpa, ex opere operato, sin fe, se sigue que su aplicación por los muertos es inútil.",
          edition: "triglot.es",
          translation: "ai-assisted",
        },
        en: {
          text: "Since the Mass is not a satisfaction, either for punishment or for guilt, ex opere operato, without faith, it follows that the application on behalf of the dead is useless.",
          edition: "triglot.en",
        },
        at: "XXIV.92",
      },
      {
        en: {
          text: "Neither does the Greek canon apply the offering as a satisfaction for the dead, because it applies it equally for all the blessed patriarchs, prophets, apostles.",
          edition: "triglot.en",
        },
        note: "XXIV.93 Es la lectura luterana de la liturgia griega",
      },
    ],
    link: {
      href: "https://bookofconcord.org/defense/of-the-mass/",
      label: "Leer en bookofconcord.org",
    },
  },
  AP22: {
    id: "AP22",
    work: "apology",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "XXII.2",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Si Cristo lo instituyó para toda la Iglesia, ¿por qué se niega una especie a una parte de la Iglesia? ¿Por qué se prohíbe el uso de la otra especie? ¿Por qué se cambia la ordenanza de Cristo, sobre todo cuando él mismo la llama su testamento?",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés",
        },
        en: {
          text: "Now, if Christ has instituted it for the entire Church, why is one kind denied to a part of the Church? Why is the use of the other kind prohibited? Why is the ordinance of Christ changed, especially when He Himself calls it His testament?",
          edition: "triglot.en",
        },
      },
    ],
    link: {
      href: "https://bookofconcord.org/defense/of-both-kinds-in-the-lords-supper/",
      label: "Leer en bookofconcord.org",
    },
  },
  SA221: {
    id: "SA221",
    work: "smalcald",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "II.2.1",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Que la misa en el papado tiene que ser la mayor y más horrible abominación, porque choca directa y violentamente con este artículo principal… Pues se ha sostenido que este sacrificio u obra de la misa… libra a los hombres de los pecados, tanto en esta vida como en el purgatorio, cuando solo el Cordero de Dios debe y tiene que hacerlo.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el alemán",
        },
        en: {
          text: "That the Mass in the Papacy must be the greatest and most horrible abomination, as it directly and powerfully conflicts with this chief article … For it has been held that this sacrifice or work of the Mass … frees men from sins, both in this life and also in purgatory, while only the Lamb of God shall and must do this.",
          edition: "triglot.en",
        },
        de: {
          text: "Daß die Messe im Papsttum muss der grösste und schrecklichste Greül sein als die stracks und gewaltiglich wider diesen Hauptartikel strebt…",
          edition: "triglot.de",
        },
      },
    ],
    link: {
      href: "https://bookofconcord.org",
      label: "Leer en bookofconcord.org",
    },
  },
  SA2212: {
    id: "SA2212",
    work: "smalcald",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "II.2.12",
        },
      ],
    },
    excerpts: [
      {
        en: {
          text: "the Mass is used almost alone for the dead, although Christ has instituted the Sacrament alone for the living.",
          edition: "triglot.en",
        },
      },
    ],
    link: {
      href: "https://bookofconcord.org",
      label: "Leer en bookofconcord.org",
    },
  },
  SA365: {
    id: "SA365",
    work: "smalcald",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "III.6.5",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'De la transubstanciación no nos importa nada la sutileza sofística con que enseñan que el pan y el vino abandonan o pierden su ser natural, y que solo queda la forma y el color del pan, y no pan verdadero. Porque concuerda perfectamente con la Escritura que allí hay pan y sigue habiéndolo, como lo llama el mismo san Pablo: "El pan que partimos", y: "Coma así de aquel pan".',
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el alemán",
        },
        en: {
          text: "As regards transubstantiation, we care nothing about the sophistical subtlety by which they teach that bread and wine leave or lose their own natural substance, and that there remain only the appearance and color of bread, and not true bread. For it is in perfect agreement with Holy Scriptures that there is, and remains, bread, as Paul himself calls it, 1 Cor. 10:16: The bread which we break. And 1 Cor. 11:28: Let him so eat of that bread.",
          edition: "triglot.en",
        },
        de: {
          text: 'Von der Transsubstantiation achten wir der spitzigen Sophisterei gar nichts, da sie lehren, daß Brot und Wein verlassen oder verlieren ihr natürlich Wesen, und bleibe allein Gestalt und Farbe des Brots und nicht rechtes Brot. Denn es reimt sich mit der Schrift aufs beste, daß Brot da sei und bleibe, wie es St. Paulus selbst nennt: "Das Brot, das wir brechen", und: "Also, esse er von dem Brot."',
          edition: "triglot.de",
        },
      },
    ],
    link: {
      href: "https://bookofconcord.org",
      label: "Leer en bookofconcord.org",
    },
  },
  FCEP722: {
    id: "FCEP722",
    work: "fc-epitome",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "VII.22",
        },
      ],
      qualifier: "artículos rechazados",
    },
    excerpts: [
      {
        es: {
          text: "1. La transubstanciación papal, cuando en el papado se enseña que el pan y el vino pierden en la santa Cena su sustancia y su ser natural, y así quedan aniquilados, de modo que son transformados en el cuerpo de Cristo y solo permanece la forma exterior.",
          edition: "triglot.es",
          translation: "ai-assisted",
        },
        de: {
          text: "1. Die päpstische Transsubstantiation, da im Papsttum gelehrt wird, daß Brot und Wein im heiligen Abendmahl ihre Substanz und natürlich Wesen verlieren und also zunichte werden, daß es in den Leib Christi verwandelt werde, und allein die äußerliche Gestalt bleibe.",
          edition: "triglot.de",
        },
        at: "VII.22",
      },
    ],
    link: {
      href: "https://bookofconcord.org",
      label: "Leer en bookofconcord.org",
    },
  },
  FCSD7: {
    id: "FCSD7",
    work: "fc-sd",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "VII.87 y 126",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Y fuera de este uso, cuando en la misa papista el pan no se distribuye, sino que se ofrece, se encierra, se lleva en procesión y se exhibe para la adoración, no ha de tenerse por sacramento.",
          edition: "triglot.es",
          translation: "ai-assisted",
          derivedFrom: "desde el alemán",
        },
        en: {
          text: "And apart from this use, when in the papistic mass the bread is not distributed, but offered up or enclosed, borne about, and exhibited for adoration, it is to be regarded as no sacrament.",
          edition: "triglot.en",
        },
        de: {
          text: "außer welchem Gebrauch, wenn das Brot in der papistischen Messe nicht ausgeteilt, sondern aufgeopfert oder eingeschlossen, umgetragen und anzubeten vorgestellt [wird], ist es für kein Sakrament zu halten",
          edition: "triglot.de",
        },
        at: "VII.87",
      },
      {
        en: {
          text: "that the elements or the visible species or forms of the consecrated bread and wine must be adored. However, no one, unless he be an Arian heretic, can and will deny that Christ Himself, true God and man, who is truly and essentially present in the Supper, should be adored in spirit and in truth in the true use of the same",
          edition: "triglot.en",
        },
        note: "VII.126 (enseñanza rechazada)",
      },
    ],
    link: {
      href: "https://bookofconcord.org",
      label: "Leer en bookofconcord.org",
    },
  },
  ENC11: {
    id: "ENC11",
    work: "enc-1895",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "XI",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'La Iglesia una, santa, católica y apostólica de los siete concilios ecuménicos, siguiendo el mandato del Señor, "Bebed de ella todos", daba a todos también del santo cáliz; pero la Iglesia papal, desde el siglo IX en adelante, innovó también en este rito, privando a los laicos del santo cáliz, contra el mandato del Señor y la práctica universal de la Iglesia antigua, así como la prohibición expresa de muchos obispos ortodoxos antiguos de Roma.',
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos",
        },
        en: {
          text: "The one holy, catholic and apostolic Church of the seven Oecumenical Councils, following the Lord's command, 'Drink ye all of it,' imparted also of the holy chalice to all; but the Papal Church from the ninth century downwards has made an innovation in this rite also, by depriving the laity of the holy chalice, contrary to the Lord's command and the universal practice of the ancient Church, as well as the express prohibition of many ancient orthodox bishops of Rome.",
          edition: "enc1895.en",
        },
      },
    ],
    date: {
      year: 1895,
    },
    link: {
      href: "https://archive.org/details/answerofgreatchu0000eust",
      label: "Ver el escaneo en archive.org",
    },
  },
  ENC10: {
    id: "ENC10",
    work: "enc-1895",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "X",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'La Iglesia una, santa, católica y apostólica de los siete concilios ecuménicos sostuvo que los preciosos dones se consagran después de la oración de invocación del Espíritu Santo, por la bendición del sacerdote, como atestiguan los antiguos rituales de Roma y de las Galias; pero después la Iglesia papal innovó también en esto, aceptando arbitrariamente que la consagración de los preciosos dones ocurre con la pronunciación de las palabras del Señor: "Tomad, comed; esto es mi cuerpo" y "Bebed de ella todos; porque esta es mi sangre".',
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos",
        },
        en: {
          text: "The one holy, catholic and apostolic Church of the seven Oecumenical Councils held that the precious gifts are consecrated after the prayer of the invocation of the Holy Ghost by the blessing of the priest, as the ancient rituals of Rome and Gaul testify; nevertheless afterwards the Papal Church made an innovation in this also, by arbitrarily accepting the consecration of the precious gifts as taking place along with the utterance of the Lord's words: 'Take, eat; this is my body': and 'Drink ye all of it; for this is my blood.'",
          edition: "enc1895.en",
        },
      },
    ],
    date: {
      year: 1895,
    },
    link: {
      href: "https://archive.org/details/answerofgreatchu0000eust",
      label: "Ver el escaneo en archive.org",
    },
  },
  ENC9: {
    id: "ENC9",
    work: "enc-1895",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "section",
          value: "IX",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "La Iglesia una, santa, católica y apostólica de los siete concilios ecuménicos, según el ejemplo de nuestro Salvador, celebró la divina Eucaristía durante más de mil años, en Oriente y Occidente, con pan fermentado, como lo atestiguan también los teólogos papales amantes de la verdad; pero la Iglesia papal, desde el siglo XI, innovó también en el sacramento de la divina Eucaristía introduciendo el pan ázimo.",
          edition: "enc1895.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Metallinos",
        },
        en: {
          text: "The one holy, catholic and apostolic Church of the seven Oecumenical Councils, according to the example of our Saviour, celebrated the divine Eucharist for more than a thousand years throughout the East and West with leavened bread, as the truth-loving papal theologians themselves also bear witness; but the Papal Church from the eleventh century made an innovation also in the sacrament of the divine Eucharist by introducing unleavened bread.",
          edition: "enc1895.en",
        },
      },
      {
        en: {
          text: "one uses leavened bread … and another unleavened",
          edition: "enc1895.en",
        },
        note: "§IV, entre las diferencias que la encíclica considera incompatibles con una sola Iglesia",
      },
    ],
    date: {
      year: 1895,
    },
    link: {
      href: "https://archive.org/details/answerofgreatchu0000eust",
      label: "Ver el escaneo en archive.org",
    },
  },
  MOG107: {
    id: "MOG107",
    work: "mogila",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "question",
          value: "107",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "que la sustancia del pan y la sustancia del vino se cambian en la misma sustancia del mismo Cuerpo y Sangre de Jesucristo por la operación del Espíritu Santo, cuyo poder e influjo invoque el sacerdote con estas palabras: … Señor, envía desde el cielo tu Espíritu Santo sobre nosotros y sobre estos dones aquí presentes",
          edition: "mogila.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés de Overbeck",
        },
        en: {
          text: "that the Substance of the Bread and the Substance of the Wine are changed into the very Substance of the very Body and Blood of Jesus Christ, by the operation or working of the Holy Ghost, whose Power and Influence let the Priest invoke in these Words … O Lord, send down from Heaven thy Holy Spirit upon us, and upon these Gifts now lying before thee",
          edition: "mogila.en",
        },
      },
    ],
  },
  CEC582: {
    id: "CEC582",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "582",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: 'Yendo más lejos, Jesús da plenitud a la Ley sobre la pureza de los alimentos, tan importante en la vida cotidiana judía, manifestando su sentido "pedagógico" (cf. Ga 3, 24) por medio de una interpretación divina: "Todo lo que de fuera entra en el hombre no puede hacerle impuro […] —así declaraba puros todos los alimentos—"',
          edition: "cec.es",
          translation: "official",
        },
        note: "Cita Mc 7,18-21",
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p122a4p1_sp.html",
      label: "Leer en vatican.va",
    },
  },
  CEC1384: {
    id: "CEC1384",
    work: "cec",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "1384",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: '"En verdad, en verdad os digo: si no coméis la carne del Hijo del hombre, y no bebéis su sangre, no tendréis vida en vosotros" (Jn 6,53)',
          edition: "cec.es",
          translation: "official",
        },
      },
      {
        es: {
          text: "invitación urgente a recibirle en el sacramento de la Eucaristía",
          edition: "cec.es",
          translation: "official",
        },
      },
    ],
    date: {
      year: 1992,
      alsoYears: [1997],
    },
    link: {
      href: "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html",
      label: "Leer en vatican.va",
    },
  },
  JP89: {
    id: "JP89",
    work: "jp-audience-1989",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "4",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: '"El espíritu es el que da vida: la carne no sirve para nada. Las palabras que os he dicho son espíritu y son vida" (Jn 6, 63)',
          edition: "jp-audience-1989.es",
          translation: "official",
        },
      },
      {
        es: {
          text: 'Los oyentes de Jesús entendieron de modo "material" aquel primer anuncio eucarístico. El Maestro quiso en seguida precisar que su contenido sólo podía aclararse y entenderse por obra del "Espíritu que da vida". En la Eucaristía Cristo nos da su cuerpo y su sangre como alimento y bebida, bajo las especies del pan y del vino […]. Solamente en virtud del Espíritu, que da vida, el alimento y la bebida eucarísticos pueden obrar en nosotros la "comunión", es decir, la unión salvífica con el Cristo crucificado y glorificado',
          edition: "jp-audience-1989.es",
          translation: "official",
        },
        at: "n. 4",
      },
    ],
    date: {
      year: 1989,
      month: 9,
      day: 13,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/audiences/1989/documents/hf_jp-ii_aud_19890913.html",
      label: "Leer en vatican.va",
    },
  },
  JP91: {
    id: "JP91",
    work: "jp-audience-1991",
    kind: "source",
    locator: {
      parts: [
        {
          kind: "number",
          value: "6",
        },
      ],
    },
    excerpts: [
      {
        es: {
          text: "Tanto la palabra como el sacramento tienen vida y eficacia operativa por el Espíritu Santo",
          edition: "jp-audience-1991.es",
          translation: "official",
        },
        at: "n. 6",
      },
    ],
    date: {
      year: 1991,
      month: 1,
      day: 30,
    },
    link: {
      href: "https://www.vatican.va/content/john-paul-ii/es/audiences/1991/documents/hf_jp-ii_aud_19910130.html",
      label: "Leer en vatican.va",
    },
  },
  FLOcd: {
    id: "FLOcd",
    work: "florence-cantate",
    kind: "source",
    locator: {
      parts: [],
      qualifier: "bula de unión con los coptos y los etíopes",
    },
    excerpts: [
      {
        la: {
          text: "Illamque mosaice legis ciborum mundorum et immundorum differentiam ad cerimonialia asserit pertinere, que surgente evangelio transierunt et efficacia esse desierunt. Illam etiam apostolorum prohibitionem, ab immolatis simulacrorum et sanguine et suffocato (At 15, 29), dicit, illi tempori congruisse […] illius apostolice prohibitionis causa cessante etiam cessavit effectus. Nullam itaque cibi naturam condemnandam esse denuntiat […]",
          edition: "florence-cantate.la",
        },
        es: {
          text: "[La Iglesia] afirma que la diferencia de la ley mosaica entre alimentos puros e impuros pertenece a lo ceremonial, que pasó al surgir el Evangelio y dejó de ser eficaz. Dice también que aquella prohibición de los apóstoles, de lo inmolado a los ídolos, de la sangre y de lo sofocado (Hch 15,29), convenía a aquel tiempo […]. Pero cuando la religión cristiana se extendió hasta el punto de que en ella no aparece ningún judío carnal, sino que todos, pasando a la Iglesia, convienen en los mismos ritos y ceremonias del Evangelio, creyendo que todo es puro para los puros (Tt 1,15), cesando la causa de aquella prohibición apostólica cesó también su efecto. Por eso declara que no se ha de condenar la naturaleza de ningún alimento […]",
          edition: "florence-cantate.es",
          translation: "ai-assisted",
          derivedFrom: "desde el latín oficial",
        },
      },
    ],
    date: {
      year: 1442,
      month: 2,
      day: 4,
    },
    link: {
      href: "https://www.vatican.va/content/eugenius-iv/la/documents/bulla-cantate-domino-4-febr-1442.html",
      label: "Leer en vatican.va (en latín)",
    },
  },
  WCF297: {
    id: "WCF297",
    work: "wcf",
    kind: "other-tradition",
    locator: {
      parts: [
        {
          kind: "ref",
          value: "29.7",
        },
      ],
      qualifier: "texto vigente de la OPC",
    },
    excerpts: [
      {
        es: {
          text: "Los que reciben dignamente, participando exteriormente de los elementos visibles en este sacramento, entonces también reciben interiormente, por la fe, real y verdaderamente, aunque no carnal y corporalmente sino espiritualmente, a Cristo crucificado, y se alimentan de él, con todos los beneficios de su muerte",
          edition: "wcf.es",
          translation: "ai-assisted",
          derivedFrom: "desde el inglés",
        },
        en: {
          text: "Worthy receivers, outwardly partaking of the visible elements, in this sacrament, do then also, inwardly by faith, really and indeed, yet not carnally and corporally but spiritually, receive, and feed upon, Christ crucified, and all benefits of his death",
          edition: "wcf.en",
        },
      },
    ],
    date: {
      year: 1647,
    },
    link: {
      href: "https://opc.org/wcf.html",
      label: "Leer el texto vigente de la OPC",
    },
  },
  STSA: {
    id: "STSA",
    work: "status-stsa",
    kind: "status",
    locator: {
      parts: [],
    },
    excerpts: [
      {
        es: {
          text: 'Estado actual: la Iglesia Luterana–Sínodo de Misuri (LCMS) acepta "sin reservas" todos los libros simbólicos, entre ellos los Artículos de Esmalcalda (Constitución, art. II). La Iglesia Evangélica Luterana en América (ELCA) los acepta como "interpretaciones válidas" de la fe, junto a la Confesión de Augsburgo, que acepta como "testimonio verdadero" (Constitución, 2.05–2.06).',
          edition: "status-stsa.es",
          translation: "site-statement",
        },
      },
    ],
  },
} satisfies Record<string, Citation>;

export type CitationId = keyof typeof citations;
