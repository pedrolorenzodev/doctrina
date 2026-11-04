import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const baptismReformed = {
  doctrine: "baptism",
  tradition: "reformed",
  status: "draft",
  title: "La posición reformada",
  lede: "Cómo los Estándares de Westminster entienden el bautismo, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan los Estándares de Westminster sobre el bautismo, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "El Catecismo Menor de Westminster define el bautismo así: «El Bautismo es un sacramento, en el cual, el lavamiento con agua, en nombre del Padre, del Hijo, y del Espíritu Santo, significa y sella nuestra union con Cristo, nuestra participacion en los beneficios de la alianza de gracia y nuestro comprometimiento de ser del Señor.».",
      grades: [
        {
          kind: "church",
          grade: "standards",
          basis: "Catecismo Menor de Westminster 94",
        },
      ],
      sources: [
        {
          citations: ["RWSC94"],
          label: "Catecismo Menor de Westminster 94",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la institución y la Iglesia visible",
        text: "La Confesión de Westminster enseña: «El bautismo es un sacramento del Nuevo Testamento, instituido por Jesu-Cristo [...] no solo para admitir la persona bautizada en la iglesia visible [...] sino tambien para que sea para ella un signo y sello del concierto de la gracia». Y nombra lo que el bautismo significa y sella: «del hecho que es ingerida en Cristo [...] de su regeneracion [...] de la remision de sus pecados [...] y de su sumision á Dios por Jesu-Cristo, á fin de andar en novedad de vida».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 28.1",
          },
        ],
        sources: [
          {
            citations: ["RWCF28_1"],
            label: "Westminster 28.1",
          },
        ],
      },
      {
        id: "QE-2",
        short: "el agua y el nombre",
        text: "La Confesión de Westminster enseña: «El elemento exterior que se emplea en este sacramento es el agua, con la cual la parte que lo recibe se bautiza en el nombre del Padre, y del Hijo, y del Espíritu Santo, por un ministro del evangelio debidamente autorizado.».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 28.2",
          },
        ],
        sources: [
          {
            citations: ["RWCF28_2"],
            label: "Westminster 28.2",
          },
        ],
      },
      {
        id: "QE-3",
        short: "quiénes lo reciben",
        text: "La Confesión de Westminster enseña: «No solo los que personalmente profesan su fé en Cristo y su obediencia á El deben ser bautizados [...] sino tambien deben serlo los párvulos cuyos padres son, á lo menos uno de ellos, creyentes». El Catecismo Menor da su propia formulación: «El Bautismo no debe administrarse á los que están fuera de la iglesia visible hasta que no profesen su fé en Cristo y su obediencia á él; mas, los párvulos de los que son miembros de la iglesia visible han de ser bautizados.».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 28.4 y Catecismo Menor 95",
          },
        ],
        sources: [
          {
            citations: ["RWCF28_4"],
            label: "Westminster 28.4",
          },
          {
            citations: ["RWSC95"],
            label: "Catecismo Menor de Westminster 95",
          },
        ],
      },
      {
        id: "QE-4",
        short: "cómo se administra",
        text: "La Confesión de Westminster enseña: «La inmersion de la persona en el agua no es necesaria; sino que se administra rectamente el bautismo por la aspersion ó por la efusion del agua sobre la persona.».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 28.3",
          },
        ],
        sources: [
          {
            citations: ["RWCF28_3"],
            label: "Westminster 28.3",
          },
        ],
      },
      {
        id: "QE-5",
        short: "la gracia que da el Espíritu",
        text: "La Confesión de Westminster enseña: «La eficacia del bautismo no se limita al momento mismo en que se administra». Y añade: «la gracia prometida no solamente se ofrece, sino realmente es en debido tiempo demostrada y dada, por el Espíritu Santo, á aquellos (sean adultos ó párvulos) á quienes pertenece aquella gracia, segun el consejo de la propia voluntad de Dios».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 28.6",
          },
        ],
        sources: [
          {
            citations: ["RWCF28_6"],
            label: "Westminster 28.6",
          },
        ],
      },
      {
        id: "QE-6",
        short: "el bautismo, la gracia y la salvación",
        text: "La Confesión de Westminster enseña: «Aunque el menosprecio ó descuido de esta ordenanza sea un grave pecado [...] sin embargo, la gracia y la salvacion, no son tan inseparablemente unidas con ella, que seria imposible ser regenerado ó salvo sin ella [...] y por otra parte, no resulta que todos los que sean bautizados, necesariamente son regenerados».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 28.5",
          },
        ],
        sources: [
          {
            citations: ["RWCF28_5"],
            label: "Westminster 28.5",
          },
        ],
      },
      {
        id: "QE-7",
        short: "una vez y para toda la vida",
        text: "La Confesión de Westminster enseña: «El sacramento del bautismo no debe administrarse á la misma persona mas de una vez.». El Catecismo Mayor añade: «El deber necesario, pero muy descuidado, de aprovechar nuestro bautismo debe cumplirse durante toda nuestra vida».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 28.7 y Catecismo Mayor 167",
          },
        ],
        sources: [
          {
            citations: ["RWCF28_7"],
            label: "Westminster 28.7",
          },
          {
            citations: ["RWLC167"],
            label: "Catecismo Mayor de Westminster 167",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para los Estándares de Westminster, el bautismo se funda en el mandato de Cristo: «Segun el mismo mandato de Jesu-Cristo, este sacramento debe continuarse en su iglesia hasta el fin del mundo» {c:RWCF28_1|Westminster 28.1}.",
      "Y en el pacto, que incluye a los hijos de quienes profesan la fe: «que descienden de padres, ya sea ambos o uno solo de ellos, que profesan fe en Cristo y obediencia a él, están por ese motivo dentro del pacto y deben ser bautizados» {c:RWLC166|Catecismo Mayor de Westminster 166}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para el Catecismo Mayor de Westminster, el bautismo sirve toda la vida: «sacando fuerzas de la muerte y resurrección de Cristo, en quien somos bautizados, para mortificar el pecado y vivificar la gracia» {c:RWLC167|Catecismo Mayor de Westminster 167}.",
  },
  scriptureSubtitle: "Los pasajes que los Estándares de Westminster citan sobre el bautismo, y cómo los leen.",
  scripture: [
    {
      refs: ["Matt.28.19-Matt.28.20"],
      text: "La Confesión de Westminster y el Catecismo Menor lo citan para la institución, el nombre trino y la continuación del bautismo (Confesión 28.1–2; Catecismo Menor 94).",
      apologists: {
        arguments: [
          {
            title:
              "El bautismo es el signo que Cristo manda dar a los creyentes y a sus hijos (Duncan cita entre corchetes Mateo 28:19–20 como el mandato)",
            quotes: [
              {
                speaker: "Ligon Duncan",
                work: "Why Presbyterians baptize believers and their children",
                outlet: "Reformation21",
                date: "17 de agosto de 2007",
                locator:
                  "4 párrafos: del párrafo que empieza «Furthermore, Justin has given a thumbnail sketch of why…» al que termina «…in humble obedience to biblical command and example. QED.»",
                url: "https://reformation21.org/why-presbyterians-baptize-beli-php/",
                text: "Furthermore, Justin has given a thumbnail sketch of why paedo-baptists believe that paedo-baptism is biblical. The sketches he offers are fine as far as they go, but a much simpler explanation can be given. I could actually give the explanation in one sentence, but for clarity and elaboration’s sake — allow me three!\n\n1. God, in both the Old and New Testaments, explicitly makes a promise to believers and to their children (Genesis 17:7; Acts 2:39).\n\n2. God, in both the Old and New Testaments, explicitly attaches specific signs (respectively, circumcision [Genesis 17:10] and baptism [Acts 2:38, cf. Colossians 2:11-12], to this promise that he gives to believers and their children.\n\n3. Therefore, since God has given an explicit promise to believers and their children, in the New Testament, and attached a sign to this promise, and enjoined us (in the new covenant) to administer that sign [baptism, Matthew 28:19-20], then we should give the sign of the promise he has made to believers and their children, to believers and their children, in humble obedience to biblical command and example. QED.",
                lang: "en",
              },
            ],
          },
          {
            title:
              "Lo central es el nombre en el que uno es bautizado: el único nombre de la Trinidad (Mateo 28:18–19, citado)",
            quotes: [
              {
                speaker: "Sinclair B. Ferguson",
                work: "Named in Baptism: Things Unseen with Sinclair B. Ferguson",
                outlet: "Ligonier Ministries, YouTube",
                date: "30 de agosto de 2024",
                locator: "Minutos 1:23 a 2:11",
                url: "https://www.youtube.com/watch?v=ZtLBpT1rivk&t=83s",
                text: "Well, maybe your experience is different, but before you respond that it is, maybe it’s wise to ask the question, What actually is most important about baptism? The answer? Well, let’s ask Jesus. Here’s His answer: “All authority in heaven and earth has been given to me. Go therefore and make disciples of all nations, baptizing them into the name of the Father and of the Son and of the Holy Spirit” (Matt. 28:18–19). So, what’s central and most important to your baptism? It’s the name into which we’ve been baptized, isn’t it? The name that reveals the One into whom we’ve been baptized, the name of God the Trinity, the single name of the three-person God—the Father, the Son, and the Holy Spirit.",
                lang: "en",
              },
            ],
          },
          {
            title:
              "El bautismo es una ceremonia de imposición de nombre: la Gran Comisión bautiza «en el nombre»; Jesús fue bautizado en el nombre del pecador para que el pecador fuera bautizado en el suyo",
            quotes: [
              {
                speaker: "Sinclair B. Ferguson",
                work: "Means of Grace: Baptism – The Basics of the Christian Life with Sinclair Ferguson",
                outlet: "Ligonier Ministries, YouTube",
                date: "3 de septiembre de 2025",
                locator: "Minutos 15:42 a 17:54",
                url: "https://www.youtube.com/watch?v=GAOv1HrDwgo&t=942s",
                text: 'In His baptism on the cross, Jesus was baptized into my name as a sinner in order that I might be baptized into His name as the Savior. And of course, that\'s exactly what He says, isn\'t it, in Matthew 28, 18 to 20, "Go into all the world. Preach the gospel and baptize them into the name of the Father, the Son, and the Holy Spirit." So what is baptism? Baptism is a naming ceremony in which I who have been reared in the family of Adam am given the sign of the new family of Jesus Christ, and I am being named for Jesus Christ. Now, this is the Western world. I imagine everyone here has actually gone through a naming ceremony. There is a law in Scotland that you have to name your child within a certain number of days. I almost rendered one of our children illegitimate by not getting the name in in time. What happens is you go along to the official and the official says, filling in the papers, "What is the name of your child?" and apparently at some point my parents had decided the answer would be "Sinclair Buchanan Ferguson." What did that ceremony do to my heart? Absolutely nothing! But in another sense it has determined the whole course of my life. I don\'t hear the name Sinclair without, and certainly I don\'t hear the name Sinclair Buchanan Ferguson without, "That\'s who I am." Strange though it may seem, I don\'t know who I am unless I am Sinclair Buchanan Ferguson, but the giving of that name did nothing to transform my heart, but by the same token the fact I was given that name has been as it were the parameters of the life that I\'ve had to live.',
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.12.13"],
      text: "Se cita para la admisión en el cuerpo y el amor fraterno (Confesión 28.1; Catecismo Mayor 167).",
    },
    {
      refs: ["Rom.4.11"],
      text: "Se cita para el signo y el sello, el pacto y los beneficios sellados (Confesión 28.1 y 28.4; Catecismo Mayor 166–167).",
      apologists: {
        arguments: [
          {
            title:
              "Dios añade un signo a cada promesa de alianza: la circuncisión a Abraham, el bautismo y la Cena en la nueva alianza",
            quotes: [
              {
                speaker: "Sinclair B. Ferguson",
                work: "Means of Grace: Baptism – The Basics of the Christian Life with Sinclair Ferguson",
                outlet: "Ligonier Ministries, YouTube",
                date: "3 de septiembre de 2025",
                locator: "Minutos 4:50 a 6:36",
                url: "https://www.youtube.com/watch?v=GAOv1HrDwgo&t=290s",
                text: "You notice what that sign is? It's a sign to which Noah is to look, but it's a sign of what God does. God remembers His promise. The same is true when God makes His covenant with Abraham. He gives to Abraham and his family a sign of that covenant. You remember how Paul speaks about this in Romans chapter 4. He says when Abraham was justified by grace through faith, when he was constituted righteous in God's presence, God gave him this sign. It was a sign of the righteousness that God gave to Abraham and Abraham received through faith. Now just let your mind linger on that for a moment because it's very important to understand the dynamic and the direction of what Paul is saying. Notice, he is not saying circumcision was a sign of Abraham's faith. He was saying circumcision is a sign of God's gracious justifying. That's what it's a sign of, which Abraham receives through faith. And that's a real clue to us for understanding what we call the sacraments, that they are first and foremost not a sign of our response to God's Word, not first and foremost a sign of our faith, but signs of the gospel that draw from us the response of faith, and because God understands that we need these signs He gives these signs to us.",
                lang: "en",
              },
              {
                speaker: "Sinclair B. Ferguson",
                work: "The Promise of Baptism: Things Unseen with Sinclair B. Ferguson",
                outlet: "Ligonier Ministries, YouTube",
                date: "26 de agosto de 2024",
                locator: "Minutos 2:30 a 5:22",
                url: "https://www.youtube.com/watch?v=w_ZcNpg2YuA&t=150s",
                text: "If we do, we’ll forget that baptism is actually only one of a whole series of rites—that’s R-I-T-E-S—that God gave to His people throughout the various epochs of His self-revelation. Right from the very beginning, God always added some kind of physical sign to His covenant word of promise. We’re all familiar with the promise to Noah that He would never flood the earth again. Is God’s promise enough for us? Well, yes, He’s God, after all, and He doesn’t lie. Will He ever break His promise? No, He won’t. He can’t. Well then, why does He tell Noah that the rainbow will be a sign to him, that He, the Lord, will remember His promise? It’s not because God needs the reminder, is it? No, it’s because He knows Noah needs the reminder. He needs the reassurance. Some years ago, the snow in the mountains around our village in the Grampian Highlands of Scotland melted, and there was a downpour of rain, and the river that runs through the village burst its banks. Half the village was flooded, and people were out of their homes for months. It was a once-in-a-century-size flood and a terrible time for the village. And now, whenever the snow melts, and there’s a downpour, and the river rises, what do you think is the first thing on people’s minds? Well, if that is true in our village, what must Noah have felt when it started raining again? But in His kindness, the Lord gave him a sign to confirm His promise: “Just in case you forget it, Noah, whenever you see the rainbow in the sky, you can be sure I see it too, and that I am remembering My promise to you.” And actually, in each of the great covenants God went on to make with His people, He did something similar each time: He gave them his word of promise, and then He added to it a visible sign to reassure them of the meaning of His promise and that He was going to keep that promise. That happened again in the promise that God gave to Abraham in the sign of circumcision. Remember how Paul says that it was a sign and seal of the God-given righteousness that faith receives. So, when we fast-forward to the new covenant in Christ, it’s not really a surprise that God adds two signs to His promise: the sign of baptism and the sign of the Lord’s Supper. And both of them, in different ways, are given to us to confirm the promise of the gospel. Now today, I think we should remind ourselves that the first function of these signs—baptism,",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Col.2.11-Col.2.12"],
      text: "Se cita junto a la circuncisión y el bautismo en el pacto (Confesión 28.1 y 28.4; Catecismo Mayor 166–167).",
      apologists: {
        arguments: [
          {
            title:
              "Pablo vincula la circuncisión del Antiguo Testamento con el bautismo del Nuevo; el bautismo significa la obra del Espíritu",
            quotes: [
              {
                speaker: "R. C. Sproul",
                work: "Baptism: Foundations with R.C. Sproul",
                outlet: "Ligonier Ministries, YouTube",
                date: "23 de mayo de 2026",
                locator: "Minutos 14:14 a 17:52",
                url: "https://www.youtube.com/watch?v=g1T1ofhY5so&t=854s",
                text: "It is God's word of promise to all who believe. Let me turn your attention just briefly to Paul's letter to the Colossians. In chapter 2 of Colossians beginning in verse 8, Paul writes these words, \"Beware lest anyone cheat you through philosophy and empty deceit according to the tradition of men, according to the basic principles of the world and not according to Christ. For in Him dwells all the fullness of the Godhead bodily and you are complete in Him who is the head of all principality and power. In Him you were also circumcised with the circumcision made without hands by putting off the body of the sins of the flesh, by the circumcision of Christ, buried with Him in baptism in which you also were raised with Him through faith in the working of God who raised Him from the dead.\" You see what Paul is saying here. He speaks of the circumcision not made with hands and he sees this direct link here between the circumcision of the Old Testament and the baptism of the New Testament. OK, so baptism is the new covenant sign. What does it mean? Obviously part of its significance or what it signifies is our cleansing from sin. In John's hands it was a cleansing rite but the reason why the baptism of John is not to be identified or equated exactly with New Testament baptism is because New Testament baptism signifies so much more than what John's baptism -- all John's baptism really did was prepare people through cleansing them from sin. And we need to be cleansed from sin and the sign of our cleansing from sin is the sign of baptism. That's why you have the laver or the ritual of the use of water. It's a bathing symbol. But what else does it signify? Buried with Him in baptism. We just read there that one of the crucial significances of baptism is -- well, what baptism does is it is the sign in a sense that indicates all of the benefits that we receive from Christ. It's a sign of our regeneration. It's a sign of the Holy Spirit quickening us from the dead -- from spiritual death -- and making us new creatures. Not that the sign accomplishes that, but the sign is a sign of the work of the Spirit who does do the regenerating. It's the sign of our being baptized in the Holy Ghost. Water baptism is not the baptism of the Holy Spirit, but it is the sign of the baptism of the Holy Spirit. That just as we are baptized with water, so God promises to baptize all of those who are in Christ with His Holy Spirit. Also, baptism indicates our participation in the death of Christ and in the resurrection of Christ. Again, the symbolism of being buried and being raised from the dead. It's that promise.",
                lang: "en",
              },
            ],
          },
          {
            title:
              "El argumento de la alianza en tres frases: promesa a los creyentes y a sus hijos (Génesis 17:7; Hechos 2:39), signo unido (circuncisión, bautismo: Colosenses 2:11–12), mandato de administrarlo",
            quotes: [
              {
                speaker: "Ligon Duncan",
                work: "Why Presbyterians baptize believers and their children",
                outlet: "Reformation21",
                date: "17 de agosto de 2007",
                locator:
                  "4 párrafos: del párrafo que empieza «Furthermore, Justin has given a thumbnail sketch of why…» al que termina «…in humble obedience to biblical command and example. QED.»",
                url: "https://reformation21.org/why-presbyterians-baptize-beli-php/",
                text: "Furthermore, Justin has given a thumbnail sketch of why paedo-baptists believe that paedo-baptism is biblical. The sketches he offers are fine as far as they go, but a much simpler explanation can be given. I could actually give the explanation in one sentence, but for clarity and elaboration’s sake — allow me three!\n\n1. God, in both the Old and New Testaments, explicitly makes a promise to believers and to their children (Genesis 17:7; Acts 2:39).\n\n2. God, in both the Old and New Testaments, explicitly attaches specific signs (respectively, circumcision [Genesis 17:10] and baptism [Acts 2:38, cf. Colossians 2:11-12], to this promise that he gives to believers and their children.\n\n3. Therefore, since God has given an explicit promise to believers and their children, in the New Testament, and attached a sign to this promise, and enjoined us (in the new covenant) to administer that sign [baptism, Matthew 28:19-20], then we should give the sign of the promise he has made to believers and their children, to believers and their children, in humble obedience to biblical command and example. QED.",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Gal.3.27"],
      text: "Se cita para la unión con Cristo (Confesión 28.1 y 28.6; Catecismo Menor 94).",
    },
    {
      refs: ["Rom.6.3-Rom.6.5"],
      text: "Se cita para la vida nueva y la muerte y resurrección de Cristo (Confesión 28.1; Catecismo Mayor 167).",
    },
    {
      refs: ["Titus.3.5"],
      text: "Se cita para la regeneración, y en la edición española para administrar el bautismo una sola vez (Confesión 28.1 y 28.7).",
      apologists: {
        arguments: [
          {
            title:
              "La Escritura puede decir «lavado de la regeneración» del bautismo por la unión sacramental entre signo y cosa significada, no porque el signo sea la cosa",
            quotes: [
              {
                speaker: "Jim Cassidy",
                work: "Calvin and Baptism: Baptismal Regeneration or the Duplex Loquendi Modus?",
                outlet: "Reformation21",
                date: "22 de agosto de 2016",
                locator:
                  "5 párrafos: del párrafo que empieza «Having addressed the qualifications Calvin makes about the efficacy…» al que termina «…in the direction of something akin to baptismal regeneration.»",
                url: "https://reformation21.org/calvin-and-baptism-baptismal-regeneration-or-the-duplex-loquendi-modus-php/",
                text: "Having addressed the qualifications Calvin makes about the efficacy of Word and sacrament, we move on to develop the relationship between the sign (signa) and the thing signified (res) with reference to baptism in his thought. For Calvin the relationship between them is so close that, without confusing them, the language of the res can be used for the signa. In this way, the Reformed and Chalcedonian Christology was helpful as an analogy. As Christ is fully God and fully man – in hypostatic union without separation or confusion – so likewise is the relation between the sign the thing signified.\n\nIn other words, there is a “sacramental union” in baptism. What this means is that, between the sign and the thing signified, the names and effects of the one are attributable to the other. In this way, the Bible can speak about baptism as the washing of regeneration (Titus 3:5) and as that which saves (1 Peter 3:21). Not because the sign is the thing itself, but because of the sacramental union. The same is the case with Christ. By reason of the unity of his person, that which is proper to one of Christ’s natures is sometimes in Scripture attributed to the person denominated by the other nature. And just as with the two natures of Christ, so with the relation between baptism and regeneration: there is no conversion, confusion, or composition.\n\nCalvin argues that the error of the Roman Church’s doctrine of baptismal regeneration was the confusion of the sign and the thing signified. As we will later see, this is why Calvin can write with language which would leads us to think he is advocating baptismal regeneration – while at the same time vehemently rejecting the Roman doctrine. In so doing, he is borrows from Scripture a duplex loquendi modus: a “twofold way of speaking” concerning the sacraments16. This is part and parcel of Calvin’s hermeneutic with reference to certain passages. The exegesis depends on who the audience is that the Scripture is addressing. If the text is addressing believers, often the thing signified will be predicated of the sign. However, if the audience is unbelievers, the text may speak of the signs as “frigid empty figures”17 Calvin articulates the duplex loquendi modus this way:\n\nI answer, it is customary with Paul to treat of the sacraments in two points of view. When he is dealing with the hypocrites, in whom the mere symbol awakens pride, he then proclaims loudly the emptiness and worthlessness of the outward symbol, and denounces, in strong terms, their foolish confidence. In such cases he contemplates not the ordinance of God, but the corruption of wicked men. When, on the other hand, he addresses believers, who make a proper use of the symbols, he then views them in connexion with the truth-which they represent.18\n\nIn sum, Scripture – depending on who is being addressed in the immediate context – can speak of the sacrament is one of two ways. Either it can speak in language which predicates the res for the signa if the audience is made up of believers (as in Titus 3:5 and 1 Peter 3:21), or it can speak in a way that emphasizes the distinction between the res and signa when the spiritual state of the audience is unbelief or questionable. Therefore, since Scripture speaks in two ways about the sacraments (duplex loquendi modus), so does Calvin. This understanding of the duplex loquendi modus of Scripture will go a long way toward understanding the difficult quotations from Calvin often cited; particularly by those who desire to move his position in the direction of something akin to baptismal regeneration.",
                lang: "en",
              },
            ],
          },
          {
            title:
              "Sproul sobre la regeneración bautismal: el bautismo es signo de la regeneración, no su causa; la fe es el modo en que los sacramentos son eficaces; Pablo se esfuerza en Romanos por mostrar que la circuncisión no confería automáticamente la salvación",
            quotes: [
              {
                speaker: "R. C. Sproul",
                work: "What would you say in response to the doctrine of baptismal regeneration? - R.C. Sproul",
                outlet: "Ligonier Ministries, YouTube",
                date: "8 de noviembre de 2019",
                locator: "Minutos 0:00 a 1:15",
                url: "https://www.youtube.com/watch?v=1xR56XFWoO0&t=0s",
                text: "SPROUL: I would say, first of all, I'm not at all an advocate of baptismal regeneration. I don't think that baptism conveys regeneration either for infants or for adults. Regeneration is a sovereign work of God the Holy Spirit. Now, one of the things of which baptism is a sign, is the sign of regeneration. But that doesn't mean that the sign is always conveyed automatically by the sacrament itself. As a Protestant, I believe that the sacraments are effective by and through faith, but what does happen in the operation of baptism is that God makes a promise to His people and to their seed that if they come to faith then, and that would presume that they were regenerate because they couldn't be coming to faith unless they were regenerate. But the idea is that that the promise of God to all who believe, is to enjoy all of the benefits that were wrought for us by Jesus Christ. We participate in His death and resurrection and are cleansed of our sin and all the rest, all of which things baptism is a sign, but it doesn't convey any more than circumcision automatically conveyed salvation in the Old Testament, as Paul labors in Romans that we can't assume that just because somebody has been baptized that therefore they are regenerate.",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Mark.1.4"],
      text: "Se cita para la remisión de los pecados (Confesión 28.1).",
    },
    {
      refs: ["Acts.22.16"],
      text: "Se cita para el lavamiento de los pecados (Confesión 28.1, edición española).",
      apologists: {
        arguments: [
          {
            title: "Hechos 22:16 en su contexto del llamado y la soberanía de Dios",
            quotes: [
              {
                speaker: "James White",
                work: "A Brief Rebuttal of Baptismal Regeneration",
                outlet: "aomin.org",
                date: "8 de mayo de 1998",
                locator:
                  "3 párrafos: del párrafo que empieza «What, then, of Acts 22:16? Here, Ananias, having confronted…» al que termina «…Ananias to be teaching any form of baptismal regeneration!»",
                url: "https://www.aomin.org/aoblog/reformed-apologetics/a-brief-rebuttal-of-baptismal-regeneration/",
                text: "What, then, of Acts 22:16? Here, Ananias, having confronted the blinded Saul, says, in context:\n\nThen he said: “The God of our fathers has chosen you to know his will and to see the Righteous One and to hear words from his mouth. You will be his witness to all men of what you have seen and heard. And now what are you waiting for? Get up, be baptized and wash your sins away, calling on his name.”\n\nWe again see the common theme of the calling and sovereignty of God in the context of this passage as well (“God…has chosen you”). Verse 16 presents us with a significant construction in the original language. The terms “arise” and “call” (anastas and epikalesamenos) are aorist participles; “be baptized” and “be cleansed” (baptisai and apolousai) are aorist imperatives. These terms form two sets–the first, “arise and be baptized,” the second, “wash away your sins, calling upon the name of the Lord,” or more literally, “wash away your sins, having called upon the name of the Lord.” The remission of sins is effected by calling upon the name of the Lord in this passage–it is represented, as elsewhere, by baptism. One thing is for certain: given what we have seen previously of Paul’s own theology of justification, he certainly did not interpret Ananias to be teaching any form of baptismal regeneration!",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Heb.9.10", "Heb.9.19-Heb.9.22"],
      text: "Se cita para administrar el bautismo derramando o rociando el agua (Confesión 28.3).",
    },
    {
      refs: ["Acts.2.41", "Acts.16.33"],
      text: "Se cita para la administración con agua (Confesión 28.3).",
    },
    {
      refs: ["Mark.7.4"],
      text: "Se cita para los lavamientos (Confesión 28.3).",
    },
    {
      refs: ["Mark.16.15-Mark.16.16", "Acts.8.37-Acts.8.38"],
      text: "Se cita para la profesión de fe antes del bautismo (Confesión 28.4).",
    },
    {
      refs: ["Gen.17.7", "Gen.17.9"],
      text: "Se cita para el pacto y la descendencia (Confesión 28.4; Catecismo Mayor 166).",
    },
    {
      refs: ["Gal.3.9", "Gal.3.14"],
      text: "Se cita para la bendición de Abraham y la promesa (Confesión 28.4; Catecismo Mayor 166).",
    },
    {
      refs: ["Acts.2.38-Acts.2.39"],
      text: "Se cita para la promesa a los oyentes y a sus hijos (Confesión 28.4; Catecismo Mayor 166).",
      apologists: {
        arguments: [
          {
            title:
              "La promesa de Hechos 2:39 es para los creyentes y sus hijos, y el bautismo (Hechos 2:38) es su signo",
            quotes: [
              {
                speaker: "Ligon Duncan",
                work: "Why Presbyterians baptize believers and their children",
                outlet: "Reformation21",
                date: "17 de agosto de 2007",
                locator:
                  "4 párrafos: del párrafo que empieza «Furthermore, Justin has given a thumbnail sketch of why…» al que termina «…in humble obedience to biblical command and example. QED.»",
                url: "https://reformation21.org/why-presbyterians-baptize-beli-php/",
                text: "Furthermore, Justin has given a thumbnail sketch of why paedo-baptists believe that paedo-baptism is biblical. The sketches he offers are fine as far as they go, but a much simpler explanation can be given. I could actually give the explanation in one sentence, but for clarity and elaboration’s sake — allow me three!\n\n1. God, in both the Old and New Testaments, explicitly makes a promise to believers and to their children (Genesis 17:7; Acts 2:39).\n\n2. God, in both the Old and New Testaments, explicitly attaches specific signs (respectively, circumcision [Genesis 17:10] and baptism [Acts 2:38, cf. Colossians 2:11-12], to this promise that he gives to believers and their children.\n\n3. Therefore, since God has given an explicit promise to believers and their children, in the New Testament, and attached a sign to this promise, and enjoined us (in the new covenant) to administer that sign [baptism, Matthew 28:19-20], then we should give the sign of the promise he has made to believers and their children, to believers and their children, in humble obedience to biblical command and example. QED.",
                lang: "en",
              },
            ],
          },
          {
            title:
              "Hechos 2:38: el bautismo es un signo cuyo significado es la purificación del pecado; no trae automáticamente el perdón; los sacramentos son signos y sellos del evangelio, no del perdón personal de cada uno",
            quotes: [
              {
                speaker: "R. C. Sproul and Derek Thomas",
                work: "What does it mean that baptism is for the forgiveness of sins (Acts 2:38)?",
                outlet: "Ligonier Ministries, YouTube",
                date: "5 de octubre de 2020",
                locator: "Minutos 0:00 a 1:06",
                url: "https://www.youtube.com/watch?v=cX-5xOZ-XX4&t=0s",
                text: "SPROUL: I think that baptism is a sign and its significance signifies the forgiveness of sins. I don't think that it automatically carries forgiveness of sins with it, but it's a central sign of what our salvation is, is that we're being washed with water, and the significance of that sign is cleansing, and it is the cleansing from sin. Again, there's all kinds of disputes about the efficacy of the sacrament, whether it happens ex opera operato, simply by the washing of the works or the exercise of the sacrament, or whether or not it needs to be accompanied by faith for its efficacy. I would take the latter position. THOMAS: Yes, I think it's important to emphasize that the sacraments are signs and seals to the forgiveness of sins. They are signs and seals to faith, to forgiveness, but they're not in and of themselves signs and seals that we are forgiven. They're signs and seals of the gospel. So baptism points us to the gospel. Baptism points us to Christ, and in Him there is forgiveness of sins.",
                lang: "en",
              },
            ],
          },
          {
            title:
              "Hechos 2:38 leído en su contexto (versículo 39: la promesa, el mismo concepto de los pasajes anteriores) y con el sentido de «para el perdón de los pecados» como «a causa de»",
            quotes: [
              {
                speaker: "James White",
                work: "A Brief Rebuttal of Baptismal Regeneration",
                outlet: "aomin.org",
                date: "8 de mayo de 1998",
                locator:
                  "6 párrafos: del párrafo que empieza «In light of the fact that any review of…» al que termina «…Peter 3:21. Let’s look at the passage in context:»",
                url: "https://www.aomin.org/aoblog/reformed-apologetics/a-brief-rebuttal-of-baptismal-regeneration/",
                text: "In light of the fact that any review of the central passages of the New Testament that directly deal with how a man is made right with God will lead us to recognize our own inability and the great ability of our God to save, what is to be said concerning those passages, drawn from one context or another, that seem to indicate that we are saved or forgiven by baptism? First, we must point out that it is common for some to confuse the *importance* of baptism with the idea of the *necessity* of baptism. Indeed, often the fact that the New Testament takes for granted that all believers will be baptized as a profession of their faith is taken to mean that baptism is *how* they became believers in the first place! We confess baptism to be vitally important–the Scriptures are clear in this. That Paul can use baptism is a sign and symbol of our spiritual union with Christ (Romans 6:1-4) shows that it is his assumption that all believers will be obedient in baptism. We do not, by asserting the proper understanding of baptism, in any way denigrate it as an ordinance given by Christ to His Church. But just as the holy Law of God was misused by the Pharisees in Jerusalem, and the Judaizers in Galatia, so baptism has been misused by modern proponents of the works-oriented system of baptismal regeneration. Therefore, just as Paul often asserted his great respect for and love of the law of God while asserting its true nature and purpose, so we, too, assert our great respect for Christian baptism while asserting its proper place in God’s work of salvation and sanctification. We shall center our attention on three passages of Scripture that are often placed before us as “clear testimony” to the concept of baptismal regeneration. These passages are Acts 2:38, 22:16, and 1 Peter 3:21.\n\nPeter replied, “Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of sins. And you will receive the gift of the Holy Spirit. The promise is for you and your children and for all who are far off–for all whom the Lord our God will call” (Acts 2:38-39, NIV).\n\nThis is probably the most oft-quoted passage in the great baptism debate. Yet, when we read verse 39, we hear again the same concept that we saw above, which Peter himself will assert at a later date (1 Peter 1:2), and that will reappear in the Acts narrative, too (Acts 13:48)–salvation comes through the work of God’s elective choice, not the actions or plans of men. Baptism does nothing for those who are not called of God. But, one might say, what if one is called of God? Does this passage then not say that baptism is for the remission of sins?\n\nA tremendously large number of interpretations have been set forth on this passage over the years. We believe the simplest and most consistent manner of approach is to ask a question that is frequently not asked at all: we here have a short snippet of what was obviously a longer sermon by Peter. Does Peter elsewhere tell us, in plain language, how our sins are remitted, how we are cleansed from our burden of guilt? Certainly! We began our article with the quotation of 1 Peter 1:18-19, where Peter directly teaches that we are cleansed by the blood of the spotless Lamb of God, Jesus Christ. Do we then have sufficient basis to identify the waters of baptism with the blood of Christ? Surely not. Sins are remitted through our participation in the death of Jesus Christ–it is by the “one time offering” of Jesus Christ that we are made whole (Hebrews 10:10-14). What of baptism then? It is the symbol, the outward representation before men of what the Spirit of God has done in our hearts (Titus 3:5-7). Unless we have first had our sins remitted in the blood of Christ, the symbol of baptism is meaningless. But doesn’t this passage say that baptism is for the remission of sins? Yes, but what does “for” mean? We feel that Dr. A. T. Robertson’s comments from earlier this century are very meaningful:\n\nThis phrase is the subject of endless controversy as men look at it from the standpoint of sacramental or of evangelical theology. In themselves the words can express aim or purpose for that use of “eis” does exist as in 1 Cor. 2:7….But then another usage exists which is just as good Greek as the use of “eis” for aim or purpose. It is seen in Matt. 10:41 in three examples “eis onoma prophetou, diakaiou, mathetou” where it cannot be purpose or aim, but rather the basis or ground, on the basis of the name of prophet, righteous man, disciple, because one is, etc. It is seen again in Matt. 12:41 about the preaching of Jonah….They repented because of (or at) the preaching of Jonah. The illustrations of both usages are numerous in the N.T. and the Koine generally (Robertson, Grammar, p. 592). One will decide the use here according as he believes that baptism is essential to the remission of sins or not. My view is decidedly against the idea that Peter, Paul, or any one in the New Testament taught baptism as essential to the remission of sins or the means of securing such remission. So I understand Peter to be urging baptism on each of them who had already turned (repented) and for it to be done in the name of Jesus Christ on the basis of the forgiveness of sins which they had already received (A. T. Robertson, Word Pictures in the New Testament, III:35-36).\n\nThe point being that one can (and we believe should, if one believes in the consistency of Scripture as a whole) understand Peter to be speaking of baptism on the grounds of the remission of sins that comes through belief in the name of Jesus Christ (Acts 10:43). But, someone will surely object, Peter himself said that “baptism saves us” in 1 Peter 3:21. Let’s look at the passage in context:",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.7.14"],
      text: "Se cita para los hijos llamados santos (Confesión 28.4; Catecismo Mayor 166; Catecismo Menor 95).",
      apologists: {
        arguments: [
          {
            title:
              "El «santo» de Pablo es una afirmación apostólica explícita sobre los hijos de incluso un solo padre creyente",
            quotes: [
              {
                speaker: "R. C. Sproul",
                work: "The Doctrine of Baptism (Acts 16:1–10) — A Sermon by R.C. Sproul",
                outlet: "Ligonier Ministries, YouTube",
                date: "25 de agosto de 2024",
                locator: "Minutos 24:36 a 27:14",
                url: "https://www.youtube.com/watch?v=5_ylO2y2t_s&t=1476s",
                text: "the nascence of the Christian church. Finally, we find in the New Testament, the statement that the apostle Paul makes with specific concern and reference the children of believers. Now, remember I said finally, but I have some limits there. I'm a preacher. I don't have to finish with this last point. There may be a couple more. But one other point, then there'll be a couple more of this, but... that Paul writes to the Colossians, you know, and he talks about the situation... or later on to the Corinthians where he talks about the situation of what if you have a mixed marriage, a believer married to an unbeliever. And the apostle says that the unbelieving husband is sanctified by the believing wife. And the unbelieving wife is sanctified by the believing husband. That doesn't mean that we're justified by marriage. Here the term sanctification does not refer to that process by which we are conformed to the image of Christ after we are justified. Rather it has a more primary meaning, the meaning that's most often used in the Scriptures, namely that they are set apart or consecrated. Now, Paul gives the rationale for that. And what is it? Else would their children be unclean. But now, are they holy. Now here Paul is explicit. There's no inference here. This is an explicit statement, an apostolic statement, that the children of even one believer are considered clean and holy in the sight of God. And in the language of the Jew, to be clean means to be what? A full member of the covenant community that God has set apart for himself. I think if that were the only text in the New Testament, that would be enough to satisfy me that our children should receive the sign of the covenant because they are clean, they are holy, they are not strangers and foreigners to the covenant, they are not outside the covenant. Also I'd like to remind you that the author of Hebrews labors the point that the new covenant is much richer, much better, more inclusive than the old covenant. And yet if we believe that in the old covenant for 2000 years, the children of believers received the sign of the covenant, but then all of a sudden in the new covenant, they don't receive it, now you have a covenant that is less inclusive",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Luke.18.15-Luke.18.16", "Rom.11.16"],
      text: "Se citan para los niños y para la raíz y las ramas (Catecismo Mayor 166).",
    },
    {
      refs: ["John.3.5", "John.3.8"],
      text: "Se cita para la obra del Espíritu (Confesión 28.6).",
    },
    {
      refs: ["Eph.5.25-Eph.5.26", "Acts.2.38", "Acts.2.41"],
      text: "Se citan para la gracia prometida conferida (Confesión 28.6).",
      apologists: {
        arguments: [
          {
            title:
              "La promesa de Hechos 2:39 es para los creyentes y sus hijos, y el bautismo (Hechos 2:38) es su signo",
            quotes: [
              {
                speaker: "Ligon Duncan",
                work: "Why Presbyterians baptize believers and their children",
                outlet: "Reformation21",
                date: "17 de agosto de 2007",
                locator:
                  "4 párrafos: del párrafo que empieza «Furthermore, Justin has given a thumbnail sketch of why…» al que termina «…in humble obedience to biblical command and example. QED.»",
                url: "https://reformation21.org/why-presbyterians-baptize-beli-php/",
                text: "Furthermore, Justin has given a thumbnail sketch of why paedo-baptists believe that paedo-baptism is biblical. The sketches he offers are fine as far as they go, but a much simpler explanation can be given. I could actually give the explanation in one sentence, but for clarity and elaboration’s sake — allow me three!\n\n1. God, in both the Old and New Testaments, explicitly makes a promise to believers and to their children (Genesis 17:7; Acts 2:39).\n\n2. God, in both the Old and New Testaments, explicitly attaches specific signs (respectively, circumcision [Genesis 17:10] and baptism [Acts 2:38, cf. Colossians 2:11-12], to this promise that he gives to believers and their children.\n\n3. Therefore, since God has given an explicit promise to believers and their children, in the New Testament, and attached a sign to this promise, and enjoined us (in the new covenant) to administer that sign [baptism, Matthew 28:19-20], then we should give the sign of the promise he has made to believers and their children, to believers and their children, in humble obedience to biblical command and example. QED.",
                lang: "en",
              },
            ],
          },
          {
            title:
              "Hechos 2:38: el bautismo es un signo cuyo significado es la purificación del pecado; no trae automáticamente el perdón; los sacramentos son signos y sellos del evangelio, no del perdón personal de cada uno",
            quotes: [
              {
                speaker: "R. C. Sproul and Derek Thomas",
                work: "What does it mean that baptism is for the forgiveness of sins (Acts 2:38)?",
                outlet: "Ligonier Ministries, YouTube",
                date: "5 de octubre de 2020",
                locator: "Minutos 0:00 a 1:06",
                url: "https://www.youtube.com/watch?v=cX-5xOZ-XX4&t=0s",
                text: "SPROUL: I think that baptism is a sign and its significance signifies the forgiveness of sins. I don't think that it automatically carries forgiveness of sins with it, but it's a central sign of what our salvation is, is that we're being washed with water, and the significance of that sign is cleansing, and it is the cleansing from sin. Again, there's all kinds of disputes about the efficacy of the sacrament, whether it happens ex opera operato, simply by the washing of the works or the exercise of the sacrament, or whether or not it needs to be accompanied by faith for its efficacy. I would take the latter position. THOMAS: Yes, I think it's important to emphasize that the sacraments are signs and seals to the forgiveness of sins. They are signs and seals to faith, to forgiveness, but they're not in and of themselves signs and seals that we are forgiven. They're signs and seals of the gospel. So baptism points us to the gospel. Baptism points us to Christ, and in Him there is forgiveness of sins.",
                lang: "en",
              },
            ],
          },
          {
            title:
              "Hechos 2:38 leído en su contexto (versículo 39: la promesa, el mismo concepto de los pasajes anteriores) y con el sentido de «para el perdón de los pecados» como «a causa de»",
            quotes: [
              {
                speaker: "James White",
                work: "A Brief Rebuttal of Baptismal Regeneration",
                outlet: "aomin.org",
                date: "8 de mayo de 1998",
                locator:
                  "6 párrafos: del párrafo que empieza «In light of the fact that any review of…» al que termina «…Peter 3:21. Let’s look at the passage in context:»",
                url: "https://www.aomin.org/aoblog/reformed-apologetics/a-brief-rebuttal-of-baptismal-regeneration/",
                text: "In light of the fact that any review of the central passages of the New Testament that directly deal with how a man is made right with God will lead us to recognize our own inability and the great ability of our God to save, what is to be said concerning those passages, drawn from one context or another, that seem to indicate that we are saved or forgiven by baptism? First, we must point out that it is common for some to confuse the *importance* of baptism with the idea of the *necessity* of baptism. Indeed, often the fact that the New Testament takes for granted that all believers will be baptized as a profession of their faith is taken to mean that baptism is *how* they became believers in the first place! We confess baptism to be vitally important–the Scriptures are clear in this. That Paul can use baptism is a sign and symbol of our spiritual union with Christ (Romans 6:1-4) shows that it is his assumption that all believers will be obedient in baptism. We do not, by asserting the proper understanding of baptism, in any way denigrate it as an ordinance given by Christ to His Church. But just as the holy Law of God was misused by the Pharisees in Jerusalem, and the Judaizers in Galatia, so baptism has been misused by modern proponents of the works-oriented system of baptismal regeneration. Therefore, just as Paul often asserted his great respect for and love of the law of God while asserting its true nature and purpose, so we, too, assert our great respect for Christian baptism while asserting its proper place in God’s work of salvation and sanctification. We shall center our attention on three passages of Scripture that are often placed before us as “clear testimony” to the concept of baptismal regeneration. These passages are Acts 2:38, 22:16, and 1 Peter 3:21.\n\nPeter replied, “Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of sins. And you will receive the gift of the Holy Spirit. The promise is for you and your children and for all who are far off–for all whom the Lord our God will call” (Acts 2:38-39, NIV).\n\nThis is probably the most oft-quoted passage in the great baptism debate. Yet, when we read verse 39, we hear again the same concept that we saw above, which Peter himself will assert at a later date (1 Peter 1:2), and that will reappear in the Acts narrative, too (Acts 13:48)–salvation comes through the work of God’s elective choice, not the actions or plans of men. Baptism does nothing for those who are not called of God. But, one might say, what if one is called of God? Does this passage then not say that baptism is for the remission of sins?\n\nA tremendously large number of interpretations have been set forth on this passage over the years. We believe the simplest and most consistent manner of approach is to ask a question that is frequently not asked at all: we here have a short snippet of what was obviously a longer sermon by Peter. Does Peter elsewhere tell us, in plain language, how our sins are remitted, how we are cleansed from our burden of guilt? Certainly! We began our article with the quotation of 1 Peter 1:18-19, where Peter directly teaches that we are cleansed by the blood of the spotless Lamb of God, Jesus Christ. Do we then have sufficient basis to identify the waters of baptism with the blood of Christ? Surely not. Sins are remitted through our participation in the death of Jesus Christ–it is by the “one time offering” of Jesus Christ that we are made whole (Hebrews 10:10-14). What of baptism then? It is the symbol, the outward representation before men of what the Spirit of God has done in our hearts (Titus 3:5-7). Unless we have first had our sins remitted in the blood of Christ, the symbol of baptism is meaningless. But doesn’t this passage say that baptism is for the remission of sins? Yes, but what does “for” mean? We feel that Dr. A. T. Robertson’s comments from earlier this century are very meaningful:\n\nThis phrase is the subject of endless controversy as men look at it from the standpoint of sacramental or of evangelical theology. In themselves the words can express aim or purpose for that use of “eis” does exist as in 1 Cor. 2:7….But then another usage exists which is just as good Greek as the use of “eis” for aim or purpose. It is seen in Matt. 10:41 in three examples “eis onoma prophetou, diakaiou, mathetou” where it cannot be purpose or aim, but rather the basis or ground, on the basis of the name of prophet, righteous man, disciple, because one is, etc. It is seen again in Matt. 12:41 about the preaching of Jonah….They repented because of (or at) the preaching of Jonah. The illustrations of both usages are numerous in the N.T. and the Koine generally (Robertson, Grammar, p. 592). One will decide the use here according as he believes that baptism is essential to the remission of sins or not. My view is decidedly against the idea that Peter, Paul, or any one in the New Testament taught baptism as essential to the remission of sins or the means of securing such remission. So I understand Peter to be urging baptism on each of them who had already turned (repented) and for it to be done in the name of Jesus Christ on the basis of the forgiveness of sins which they had already received (A. T. Robertson, Word Pictures in the New Testament, III:35-36).\n\nThe point being that one can (and we believe should, if one believes in the consistency of Scripture as a whole) understand Peter to be speaking of baptism on the grounds of the remission of sins that comes through belief in the name of Jesus Christ (Acts 10:43). But, someone will surely object, Peter himself said that “baptism saves us” in 1 Peter 3:21. Let’s look at the passage in context:",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Pet.3.21"],
      text: "Se cita para los beneficios y la buena conciencia (Catecismo Mayor 167; Catecismo Menor 95).",
      apologists: {
        arguments: [
          {
            title:
              "«El bautismo ahora los salva» es la misma forma doble de hablar: el signo se nombra por lo que significa cuando se dirige a los creyentes",
            quotes: [
              {
                speaker: "Jim Cassidy",
                work: "Calvin and Baptism: Baptismal Regeneration or the Duplex Loquendi Modus?",
                outlet: "Reformation21",
                date: "22 de agosto de 2016",
                locator:
                  "5 párrafos: del párrafo que empieza «Having addressed the qualifications Calvin makes about the efficacy…» al que termina «…in the direction of something akin to baptismal regeneration.»",
                url: "https://reformation21.org/calvin-and-baptism-baptismal-regeneration-or-the-duplex-loquendi-modus-php/",
                text: "Having addressed the qualifications Calvin makes about the efficacy of Word and sacrament, we move on to develop the relationship between the sign (signa) and the thing signified (res) with reference to baptism in his thought. For Calvin the relationship between them is so close that, without confusing them, the language of the res can be used for the signa. In this way, the Reformed and Chalcedonian Christology was helpful as an analogy. As Christ is fully God and fully man – in hypostatic union without separation or confusion – so likewise is the relation between the sign the thing signified.\n\nIn other words, there is a “sacramental union” in baptism. What this means is that, between the sign and the thing signified, the names and effects of the one are attributable to the other. In this way, the Bible can speak about baptism as the washing of regeneration (Titus 3:5) and as that which saves (1 Peter 3:21). Not because the sign is the thing itself, but because of the sacramental union. The same is the case with Christ. By reason of the unity of his person, that which is proper to one of Christ’s natures is sometimes in Scripture attributed to the person denominated by the other nature. And just as with the two natures of Christ, so with the relation between baptism and regeneration: there is no conversion, confusion, or composition.\n\nCalvin argues that the error of the Roman Church’s doctrine of baptismal regeneration was the confusion of the sign and the thing signified. As we will later see, this is why Calvin can write with language which would leads us to think he is advocating baptismal regeneration – while at the same time vehemently rejecting the Roman doctrine. In so doing, he is borrows from Scripture a duplex loquendi modus: a “twofold way of speaking” concerning the sacraments16. This is part and parcel of Calvin’s hermeneutic with reference to certain passages. The exegesis depends on who the audience is that the Scripture is addressing. If the text is addressing believers, often the thing signified will be predicated of the sign. However, if the audience is unbelievers, the text may speak of the signs as “frigid empty figures”17 Calvin articulates the duplex loquendi modus this way:\n\nI answer, it is customary with Paul to treat of the sacraments in two points of view. When he is dealing with the hypocrites, in whom the mere symbol awakens pride, he then proclaims loudly the emptiness and worthlessness of the outward symbol, and denounces, in strong terms, their foolish confidence. In such cases he contemplates not the ordinance of God, but the corruption of wicked men. When, on the other hand, he addresses believers, who make a proper use of the symbols, he then views them in connexion with the truth-which they represent.18\n\nIn sum, Scripture – depending on who is being addressed in the immediate context – can speak of the sacrament is one of two ways. Either it can speak in language which predicates the res for the signa if the audience is made up of believers (as in Titus 3:5 and 1 Peter 3:21), or it can speak in a way that emphasizes the distinction between the res and signa when the spiritual state of the audience is unbelief or questionable. Therefore, since Scripture speaks in two ways about the sacraments (duplex loquendi modus), so does Calvin. This understanding of the duplex loquendi modus of Scripture will go a long way toward understanding the difficult quotations from Calvin often cited; particularly by those who desire to move his position in the direction of something akin to baptismal regeneration.",
                lang: "en",
              },
            ],
          },
          {
            title:
              "1 Pedro 3:18–22 leído frente a la regeneración bautismal: el agua del diluvio y el arca, el bautismo del Espíritu, y la conciencia",
            quotes: [
              {
                speaker: "James White",
                work: "A Brief Rebuttal of Baptismal Regeneration",
                outlet: "aomin.org",
                date: "8 de mayo de 1998",
                locator:
                  "3 párrafos: del párrafo que empieza «For Christ died for sins once for all, the…» al que termina «…believing sinner is identified with Him in that resurrection.»",
                url: "https://www.aomin.org/aoblog/reformed-apologetics/a-brief-rebuttal-of-baptismal-regeneration/",
                text: "For Christ died for sins once for all, the righteous for the unrighteous, to bring you to God. He was put to death in the body but made alive by the Spirit, through whom also he went and preached to the spirits in prison who were disobeyed long ago when God waited patiently in the days of Noah while the ark was being built. In it only a few people, eight in all, were saved through water, and this water symbolizes baptism that now saves you also–not the removal of dirt from the body but the pledge of a good conscience toward God. It saves you by the resurrection of Jesus Christ, who has gone into heaven and is at God’s right hand–with angels, authorities and powers in submission to him.\n\nThis is one of the more difficult passages in Scripture, due to the reference to Christ’s preaching to the “spirits in prison.” It is not our purpose to enter into the controversy over this particular aspect of this passage at this time (one might find Dr. Kenneth Wuest’s comments enlightening; see Wuest, Word Studies in the Greek New Testament II:92-109). Instead, we point out that foremost in Peter’s mind, again, is the death of Christ as the sacrifice for sin. Men are brought to God, not by what they do, but what God has done in Christ Jesus (v. 18). Upon the heels of this he mentions God’s act of judgment in the days of Noah. At that time eight souls were saved through water. Peter then says that this water “symbolizes” baptism (as the NIV translates the Greek term antitupon, literally, “antitype”). Baptism now saves us, Peter says–just as the water “saved” Noah and his family. But, of course, we know that Peter was not asserting that there was some salvific aspect to the flood waters themselves–God shut up the ark, and God saved Noah and his family. But the water is a symbol, Peter says, a symbol seen now in baptism. But is Peter dropping the symbolization so as to make baptism the means of salvation? Certainly not. Dr. Wuest has commented so well that we give his words at length:\n\nWater baptism is clearly in the apostle’s mind, not the baptism by the Holy Spirit, for he speaks of the waters of the flood as saving the inmates of the ark, and in this verse, of baptism saving believers. But he says that it saves them only as a counterpart. That is, water baptism is the counterpart of the reality, salvation. It can only save as a counterpart, not actually. The Old Testament sacrifices were counterparts of the reality, the Lord Jesus. They did not actually save the believer, only in type. It is not argued here that these sacrifices are analogous to Christian water baptism. The author is merely using them as an illustration of the use of the word “counterpart.” So water baptism only saves the believer in type. The Old Testament Jew was saved before he brought the offering. That offering was only his outward testimony that he was placing faith in the Lamb of God of whom these sacrifices were a type….Water baptism is the outward testimony of the believer’s inward faith. The person is saved the moment he places his faith in the Lord Jesus. Water baptism is the visible testimony to his faith and the salvation he was given in answer to that faith. Peter is careful to inform his readers that he is not teaching baptismal regeneration, namely, that a person who submits to baptism is thereby regenerated, for he says, “not the putting away of the filth of the flesh.” Baptism, Peter explains, does not wash away the filth of the flesh, either in a literal sense as a bath for the body, nor in a metaphorical sense as a cleansing for the soul. No ceremonies really affect the conscience. But he defines what he means by salvation, in the words “the answer of a good conscience toward God,” and he explains how this is accomplished, namely, “by the resurrection of Jesus Christ,” in that he believing sinner is identified with Him in that resurrection.",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Rom.6.22"],
      text: "Se cita para la santidad y la justicia de vida (Catecismo Mayor 167).",
    },
  ],
  passages: {
    title: "Los pasajes de la posición reformada",
    lede: "Los versículos que la tradición reformada cita sobre el bautismo, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la tradición reformada.",
    apologistsLabel: "Cómo lo defienden los apologistas reformados.",
  },
  videos: {
    subtitle: "Creadores reformados explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura reformada. Abre cada una para leer en profundidad la respuesta de los Estándares de Westminster.",
    videosSubtitle: "Creadores reformados que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Para los Estándares de Westminster, el bautizado debe aprovechar su bautismo durante toda la vida: «El deber necesario, pero muy descuidado, de aprovechar nuestro bautismo debe cumplirse durante toda nuestra vida» {c:RWLC167|Catecismo Mayor de Westminster 167}.",
      "Y el bautismo no se repite: «El sacramento del bautismo no debe administrarse á la misma persona mas de una vez.» {c:RWCF28_7|Westminster 28.7}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "El agua",
        text: "El elemento exterior del bautismo es el agua.",
        sources: [
          {
            citations: ["RWCF28_2"],
            label: "Westminster 28.2",
          },
        ],
      },
      {
        id: "CV-2",
        label: "La fórmula",
        text: "Se bautiza en el nombre del Padre, del Hijo y del Espíritu Santo.",
        sources: [
          {
            citations: ["RWCF28_2"],
            label: "Westminster 28.2",
          },
          {
            citations: ["RWSC94"],
            label: "Catecismo Menor de Westminster 94",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Quién bautiza",
        text: "Un ministro del evangelio debidamente autorizado.",
        sources: [
          {
            citations: ["RWCF28_2"],
            label: "Westminster 28.2",
          },
        ],
      },
      {
        id: "CV-4",
        label: "El modo",
        text: "Se administra rectamente derramando o rociando el agua; la inmersión no es necesaria.",
        sources: [
          {
            citations: ["RWCF28_3"],
            label: "Westminster 28.3",
          },
        ],
      },
      {
        id: "CV-5",
        label: "Quienes profesan la fe",
        text: "Se bautiza a quienes profesan su fe en Cristo y su obediencia a él.",
        sources: [
          {
            citations: ["RWCF28_4"],
            label: "Westminster 28.4",
          },
          {
            citations: ["RWSC95"],
            label: "Catecismo Menor de Westminster 95",
          },
        ],
      },
      {
        id: "CV-6",
        label: "Los niños",
        text: "Se bautiza a los hijos de padres de los que al menos uno es creyente.",
        sources: [
          {
            citations: ["RWCF28_4"],
            label: "Westminster 28.4",
          },
        ],
      },
      {
        id: "CV-7",
        label: "Una sola vez",
        text: "El bautismo no se administra más de una vez a la misma persona.",
        sources: [
          {
            citations: ["RWCF28_7"],
            label: "Westminster 28.7",
          },
        ],
      },
      {
        id: "CV-8",
        label: "Aprovechar el bautismo",
        text: "Se cumple durante toda la vida, sobre todo ante la tentación y al ver bautizar a otro.",
        sources: [
          {
            citations: ["RWLC167"],
            label: "Catecismo Mayor de Westminster 167",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que los propios Estándares de Westminster aplican a sus textos, con su definición en palabras de los Estándares.",
    grades: {
      scripture: {
        label: "Escritura: juez supremo",
        definition:
          "La Confesión de Westminster distingue la Escritura, juez supremo de toda controversia, de los escritos humanos (capítulo 1.10).",
        source: {
          citations: ["RWCF1_10"],
          label: "Westminster 1.10",
        },
      },
      standards: {
        label: "Estándares de Westminster",
        definition:
          "La Confesión y los Catecismos de Westminster son normas subordinadas a la Escritura: los concilios pueden errar y ayudan a la fe sin constituir su regla (Confesión 31.4); sus determinaciones, si concuerdan con la Escritura, se reciben con reverencia y sumisión (Confesión 31.3).",
        source: {
          citations: ["RWCF31_3_4"],
          label: "Westminster 31.3–4",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
