import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const papacyOrthodox = {
  doctrine: "papacy",
  tradition: "orthodox",
  status: "draft",
  title: "La posición ortodoxa",
  lede: "Cómo la Iglesia ortodoxa entiende a Cristo como cabeza de la Iglesia y el ministerio, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan los textos ortodoxos sobre la cabeza de la Iglesia y el ministerio, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "Para el Catecismo extenso de Filareto, Jesucristo es la cabeza de la Iglesia y el salvador del cuerpo (pregunta 272).",
      grades: [
        {
          kind: "church",
          grade: "catechism",
          basis: "Catecismo extenso de Filareto, pregunta 272",
        },
      ],
      sources: [
        {
          citations: ["OPhilaret272"],
          label: "Filareto, pregunta 272",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "Cristo gobierna por sus ministros",
        text: "La Confesión de Dositeo enseña: «El mismo Señor nuestro Jesucristo es cabeza y él mismo, teniendo el timón del gobierno de la Iglesia, la dirige por medio de los santos padres».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto X",
          },
        ],
        sources: [
          {
            citations: ["ODositheusX"],
            label: "Dositeo X",
          },
        ],
      },
      {
        id: "QE-2",
        short: "el ministerio apostólico",
        text: "El Catecismo extenso de Filareto llama apostólica a la Iglesia porque tiene de los apóstoles, sin interrupción ni cambio, tanto su doctrina como la sucesión de los dones del Espíritu Santo por la imposición de manos consagradas (pregunta 274).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 274",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret274"],
            label: "Filareto, pregunta 274",
          },
        ],
      },
      {
        id: "QE-3",
        short: "el origen de la jerarquía",
        text: "Según el Catecismo extenso de Filareto, la jerarquía procede del mismo Jesucristo y de la venida del Espíritu Santo sobre los apóstoles, y desde entonces continúa en sucesión ininterrumpida por la imposición de manos, en el sacramento del Orden (pregunta 277).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 277",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret277"],
            label: "Filareto, pregunta 277",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la autoridad sobre toda la Iglesia",
        text: "A la pregunta por qué autoridad jerárquica puede actuar sobre toda la Iglesia católica, el Catecismo extenso de Filareto responde: un Concilio ecuménico (pregunta 278). Y sobre las divisiones principales de la Iglesia: bajo los patriarcas ortodoxos y el Santísimo Sínodo (pregunta 279), formulación histórica de la época sinodal rusa.",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, preguntas 278 y 279",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret278"],
            label: "Filareto, pregunta 278",
          },
          {
            citations: ["OPhilaret279"],
            label: "Filareto, pregunta 279",
          },
        ],
      },
      {
        id: "QE-5",
        short: "la cláusula del hombre mortal",
        text: "La Confesión de Dositeo enseña: «Porque un hombre mortal no puede ser cabeza universal y perpetua».",
        status: ["STDOS~po"],
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto X",
          },
        ],
        sources: [
          {
            citations: ["ODositheusX"],
            label: "Dositeo X",
          },
        ],
      },
      {
        id: "QE-6",
        short: "el primado canónico",
        text: "Los cánones conciliares recibidos ordenan las sedes y sus privilegios: Constantinopla I (canon 3), Calcedonia (canon 28) y Trulo (canon 36). Se muestran junto a la confesión sobre Cristo y no en su lugar.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Cánones de Constantinopla I, Calcedonia y Trulo",
          },
        ],
        sources: [
          {
            citations: ["OConstantinopleI3"],
            label: "Constantinopla I, canon 3",
          },
          {
            citations: ["OChalcedon28"],
            label: "Calcedonia, canon 28",
          },
          {
            citations: ["OTrullo36"],
            label: "Trulo, canon 36",
          },
        ],
      },
      {
        id: "QE-7",
        short: "la preservación de la Iglesia",
        text: "Según el Catecismo extenso de Filareto, la Iglesia nunca apostatará de la fe, ni pecará contra la verdad de la fe, ni caerá en error (pregunta 271).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 271",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret271"],
            label: "Filareto, pregunta 271",
          },
        ],
      },
      {
        id: "QE-8",
        short: "el orden de las sedes",
        text: "El Primer Concilio de Constantinopla (canon 3) da al obispo de Constantinopla la prerrogativa de honor después del obispo de Roma, porque Constantinopla es la Nueva Roma. El Concilio Quinisexto (canon 36) dice que la sede de Constantinopla tendrá iguales privilegios que la antigua Roma y será segunda después de ella, seguida por Alejandría, Antioquía y Jerusalén.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Constantinopla I, canon 3, y Trulo, canon 36",
          },
        ],
        sources: [
          {
            citations: ["OConstantinopleI3"],
            label: "Constantinopla I, canon 3",
          },
          {
            citations: ["OTrullo36"],
            label: "Trulo, canon 36",
          },
        ],
      },
      {
        id: "QE-9",
        short: "la respuesta de 1895 sobre la infalibilidad",
        text: "La encíclica patriarcal y sinodal de 1895 dice: «La Iglesia ortodoxa oriental y católica de Cristo, fuera del Hijo y Verbo de Dios que se hizo hombre de manera inefable, no conoce a ningún otro que haya sido infalible sobre la tierra».",
        status: ["ST1895~p"],
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Encíclica patriarcal y sinodal de 1895, §XVIII",
          },
        ],
        sources: [
          {
            citations: ["O1895encyclicalXVIII"],
            label: "Encíclica de 1895, §XVIII",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "La Confesión de Dositeo dice: «Es manifiesto que el gran misterio y dignidad del episcopado se transmite por sucesión hasta nosotros» {c:ODositheusX|Dositeo X}.",
      "Y el Catecismo extenso de Filareto dice que la Iglesia está edificada sobre el fundamento de los apóstoles y profetas, siendo Jesucristo mismo la piedra angular (pregunta 274) {c:OPhilaret274|Filareto, pregunta 274}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para la encíclica patriarcal y sinodal de 1895: «En cuestiones graves que requerían la autoridad de la Iglesia universal se apelaba a un Concilio Ecuménico, que era y es el único tribunal supremo en la Iglesia universal» {c:O1895encyclicalXVI|Encíclica de 1895, §XVI}.",
  },
  scriptureSubtitle:
    "Los pasajes que los textos ortodoxos citan sobre la cabeza de la Iglesia y el ministerio, y cómo los leen.",
  scripture: [
    {
      refs: ["Eph.5.23"],
      text: "El Catecismo extenso lo cita para Cristo como cabeza y salvador del cuerpo (Filareto, pregunta 272).",
    },
    {
      refs: ["Eph.2.19-Eph.2.20"],
      text: "El Catecismo extenso lo cita para el fundamento apostólico y Cristo como piedra angular (Filareto, pregunta 274).",
      apologists: {
        arguments: [
          {
            title: "Los demás apóstoles también fueron el fundamento sobre el que se edificó la Iglesia (Efesios 2:20)",
            quotes: [
              {
                speaker: "Fr. John Maxwell",
                work: "Thou Art Peter",
                outlet: "Orthodox Research Institute",
                date: "octubre de 1998",
                locator:
                  "1 párrafo: del párrafo que empieza «First of all, although Peter was given the prominent…» al que termina «…they seemed unaware that Christ had already picked Peter.»",
                url: "http://www.orthodoxresearchinstitute.org/articles/ecumenical/maxwell_peter.html",
                text: "First of all, although Peter was given the prominent role as the first of the apostles, he was always equal to the other apostles. Christ told the apostles that they would sit on twelve thrones (Matt. 19:28). A special throne was not set up for Peter. Moreover the “keys” were given to all the apostles (Matt. 18:18). The other apostles were also the foundation upon which the Church was built (Eph. 2:20). If the Roman view is to be believed, it is interesting to note that when the disciples disputed among themselves as to who would be the greatest, (Lk. 22:24-27), they seemed unaware that Christ had already picked Peter.",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.4.11-Eph.4.12"],
      text: "El Catecismo extenso lo cita para los dones y el ministerio para la edificación (Filareto, pregunta 277).",
    },
    {
      refs: ["2Thess.2.15"],
      text: "El Catecismo extenso lo cita para mantener la enseñanza apostólica de palabra o por carta (Filareto, pregunta 275).",
    },
    {
      refs: ["Titus.3.10", "Titus.1.10-Titus.1.11"],
      text: "El Catecismo extenso lo cita para su disciplina frente a la falsa enseñanza (Filareto, pregunta 275).",
    },
    {
      refs: ["Matt.18.17"],
      text: "El Catecismo extenso lo cita para oír a la Iglesia (Filareto, pregunta 275).",
      apologists: {
        arguments: [
          {
            title:
              "El poder de las llaves es el poder de atar y desatar, que Mateo 18:18 y Juan 20:21–23 dan a los apóstoles en conjunto; Isaías 22 no es la clave de Mateo 16:19",
            quotes: [
              {
                speaker: "Robert Arakaki",
                work: "Does Isaiah 22 Prove the Papacy?",
                outlet: "Orthodox-Reformed Bridge",
                date: "30 de enero de 2017",
                locator:
                  "4 párrafos: del párrafo que empieza «In Matthew 16:19, Jesus noted that with the keys…» al que termina «…“you,” “ye,” and “your” to indicate second person plural.»",
                url: "https://orthodoxbridge.com/2017/01/30/isaiah-22-prove-papacy/",
                text: "In Matthew 16:19, Jesus noted that with the keys came the power to bind and to loose.  “To bind and loose” is a rabbinic term for rabbis’ authority to declare things permitted or forbidden.  Where in Judaism Moses was the Lawgiver and the Jewish rabbis had the authority to bind and loose members of the Jewish community, Jesus as the Inaugurator of the New Covenant bestowed covenantal authority upon his Disciples to “bind and loose” over the New Covenant Community – the Church.  The Orthodox Study Bible notes for Matthew 18:18-20 has this to say about “binding and loosing”:\n\nThe authority to bind and loose sins is given to the apostles and transmitted to the bishops and presbyters they ordained.  This authority is given for the sake of the salvation of the sinner.  The sinner, “seeing that he is not only cast of out of the Church, but that the bond of his sin will remain in Heaven, he may turn and become gentle” (JohnChr). (Emphasis in original.)\n\nExegetical Red Herring\n\nTo focus on the word “key” detracts from the main thrust of Jesus’ promise to Peter, the power to bind and loose, i.e., the authority to absolve sins.  The critical exegetical question here is whether the power to bind and loose that Christ bestowed on Peter in Matthew 16:19 was to one single person (which would support the monarchical model favored by Roman Catholics) or to the Twelve (which would support the conciliar model favored by Orthodoxy).  If we ask whether the “you” in Matthew 16:19 is in the singular (σοι) or plural form (ὑμῖν), the answer is the former.  So, if one makes “key” the focus of one’s investigation, then the evidence will point to the monarchical understanding.  However, if we focus on the power to bind and loose, we find evidence of more than one person being granted this power.  Matthew 18:17-18 shows the same power of binding and loosing given to a collective group.  The pairing of binding “δήσῃς” and loosing “λύσῃς” in Matthew 16:19 have their parallel in Matthew 18:18: binding “δήσητε” and loosing “λύσητε.”  Significantly, the two verbs in Matthew 18:18 are in the second person plural which supports the Orthodox conciliar understanding of ecclesial authority.  The difference between the second person singular and plural is evident to one reading the King James Version which uses “thy,” “thee” and “thou” to indicate second person singular and “you,” “ye,” and “your” to indicate second person plural.",
                lang: "en",
              },
            ],
          },
          {
            title:
              "Mateo 18:15–18 entrega el atar y desatar a la comunidad de discípulos (segunda persona del plural), no a Pedro solo; una lectura de Mateo 18 como «primer ministro» es conjetura, y en el concilio de Hechos 15 decide Santiago",
            quotes: [
              {
                speaker: "Robert Arakaki",
                work: "Does Isaiah 22 Prove the Papacy?",
                outlet: "Orthodox-Reformed Bridge",
                date: "30 de enero de 2017",
                locator:
                  "9 párrafos: del párrafo que empieza «To focus on the word “key” detracts from the…» al que termina «…history into their neat model of the monarchical papacy.»",
                url: "https://orthodoxbridge.com/2017/01/30/isaiah-22-prove-papacy/",
                text: "To focus on the word “key” detracts from the main thrust of Jesus’ promise to Peter, the power to bind and loose, i.e., the authority to absolve sins.  The critical exegetical question here is whether the power to bind and loose that Christ bestowed on Peter in Matthew 16:19 was to one single person (which would support the monarchical model favored by Roman Catholics) or to the Twelve (which would support the conciliar model favored by Orthodoxy).  If we ask whether the “you” in Matthew 16:19 is in the singular (σοι) or plural form (ὑμῖν), the answer is the former.  So, if one makes “key” the focus of one’s investigation, then the evidence will point to the monarchical understanding.  However, if we focus on the power to bind and loose, we find evidence of more than one person being granted this power.  Matthew 18:17-18 shows the same power of binding and loosing given to a collective group.  The pairing of binding “δήσῃς” and loosing “λύσῃς” in Matthew 16:19 have their parallel in Matthew 18:18: binding “δήσητε” and loosing “λύσητε.”  Significantly, the two verbs in Matthew 18:18 are in the second person plural which supports the Orthodox conciliar understanding of ecclesial authority.  The difference between the second person singular and plural is evident to one reading the King James Version which uses “thy,” “thee” and “thou” to indicate second person singular and “you,” “ye,” and “your” to indicate second person plural.\n\n15 Moreover if thy brother shall trespass against thee, go and tell him his fault between thee and him alone: if he shall hear thee, thou hast gained thy brother.  16 But if he will not hear thee, then take with thee one or two more, that in the mouth of two or three witnesses every word may be established.  17 And if he shall neglect to hear them, tell it unto the church: but if he neglect to hear the church, let him be unto thee as an heathen man and a publican.  18 Verily I say unto you, Whatsoever ye shall bind on earth shall be bound in heaven: and whatsoever ye shall loose on earth shall be loosed in heaven. (KJV)\n\nHowever, a reader of the NIV will not be able to spot the shifts in number due to the NIV’s usage of the modern “you” which includes both the singular and the plural under the same word form which necessitated my inserting [plural] into the excerpt below.  [More recent NIV translations usage of gender inclusive language, e.g., “your brother and sister,” forced the translators to render “him” as “them” muddying the waters even further!  Perhaps the NIV translators should consider using the Southern y’all in the next edition.]\n\n15 If your brother sins against you, go and point out his fault, just between the two of you. If he listens to you, you have won him over. 16 But if he will not listen, take one or two others along, so that ‘every matter may be established by the testimony of two or three witnesses.’ 17 If he still refuses to listen to them, tell it to the church; and if he refuses to listen even to the church, treat him as you would a pagan or a tax collector. 18 I tell you the truth, whatever you [plural] bind on earth will be bound in heaven, and whatever you [plural] loose on earth will be loosed in heaven. (NIV)\n\nSince Matthew’s Gospel was written for a Jewish audience it comes as no surprise that we find Jesus using the Hebraic expression of binding and loosing.  This means that to locate similar passages elsewhere it helps not just to look for formal (word-for-word) equivalent but also for dynamic (meaning-for-meaning) equivalent.  A parallel passage can be found in John’s Gospel in one of Jesus’ post-resurrection appearances.  In John 20:21-23 we read:\n\n21 Again Jesus said, “Peace be with you! As the Father has sent me, I am sending you.” 22 And with that he breathed on them and said, “Receive the Holy Spirit. 23 If you [plural] forgive anyone’s sins, their sins are forgiven; if you [plural] do not forgive them, they are not forgiven.”\n\nHere Jesus is speaking not to Peter alone but to Peter and the Disciples.  John, writing to a non-Jewish audience, refrained from using Hebraisms and instead has Jesus talking plainly about bestowing upon the Disciples the power to forgive sins.  Kittel’s Theological Dictionary of the New Testament entry for κλεὶς (kleis) (vol. III pp. 752-753) likewise notes the parallel between Matthew 18:18 and John 20:23.  What is important to note here is that John used the second person plural endings for the verb “forgive” (ἀφῆτε) in verse 23.  One might expect that Jesus would bestow this authority exclusively to Peter but here he gives it to the Disciples.  Jesus breathing on the Disciples indicates that the power to forgive sins is not so much a juridical power but more of a prophetic charisma that results from union with the Risen Christ.  This charismatic and conciliar understanding of the power to “bind and loose” is much closer to Orthodoxy than to Roman Catholicism with its papal monarchy and legalistic ethos.\n\nWhile it might be asserted, as Scott Hahn did, that the situation in Matthew 18:15-18 is like the king’s cabinet with the Prime Minister having the final say, this is projecting the modern parliament onto the ancient Church through reasoning by analogy.  What is striking is what Scripture does not say: (1) in Matthew 16:19 Jesus did not give the power of the keys exclusively to Peter and (2) Jesus did not subordinate the authority of the Twelve to Peter in either Matthew 18:18 or John 20:23.  This leaves Prof. Hahn’s Prime Minister/Cabinet analogy more a conjecture than a reasoned argument.\n\nFurthermore, if the parliamentary model holds true then we would see Peter having the final say at the Jerusalem Council.  However, it was James the bishop of Jerusalem who said: “It is my judgment” and instructing the Council “we should write to them.” (Acts 15:19-20)  To argue that James was merely echoing Peter’s views is to argue from silence.  Similarly, we would expect the First Ecumenical Council (Nicea I, 325) to have been presided over by the bishop of Rome or his representative.  In fact, Nicea I was presided over by Emperor Constantine or Bishop Hosius of Cordova (Spain) (NPNF 2nd Series Vol. 14 p. xiii).  Pope Sylvester had sent two legates to the Council, but they did not preside over it. To sum up, the empirical, historical evidence does not agree with the pro-papacy argument.  One gets the sense that pro-papacy apologists are trying to force the messiness of church history into their neat model of the monarchical papacy.",
                lang: "en",
              },
            ],
          },
          {
            title:
              "Las llaves se dieron a todos los apóstoles (Mateo 18:18); los doce tronos no están reservados para Pedro (Mateo 19:28)",
            quotes: [
              {
                speaker: "Fr. John Maxwell",
                work: "Thou Art Peter",
                outlet: "Orthodox Research Institute",
                date: "octubre de 1998",
                locator:
                  "1 párrafo: del párrafo que empieza «First of all, although Peter was given the prominent…» al que termina «…they seemed unaware that Christ had already picked Peter.»",
                url: "http://www.orthodoxresearchinstitute.org/articles/ecumenical/maxwell_peter.html",
                text: "First of all, although Peter was given the prominent role as the first of the apostles, he was always equal to the other apostles. Christ told the apostles that they would sit on twelve thrones (Matt. 19:28). A special throne was not set up for Peter. Moreover the “keys” were given to all the apostles (Matt. 18:18). The other apostles were also the foundation upon which the Church was built (Eph. 2:20). If the Roman view is to be believed, it is interesting to note that when the disciples disputed among themselves as to who would be the greatest, (Lk. 22:24-27), they seemed unaware that Christ had already picked Peter.",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Gal.2.11"],
      text: "La encíclica de 1895 lo cita en su argumento sobre la corrección de Pedro (encíclica, §XVIII).",
      apologists: {
        arguments: [
          {
            title:
              "Pedro y Pablo fundaron la iglesia de Antioquía (Hechos 13:1; Gálatas 2:11), así que Roma no es la única sede apostólica",
            quotes: [
              {
                speaker: "Robert Arakaki",
                work: "Why I Did Not Become Roman Catholic — A Sort of Response to Jason Stellman",
                outlet: "Orthodox-Reformed Bridge",
                date: "28 de julio de 2012",
                locator:
                  "1 párrafo: del párrafo que empieza «An Evangelical who finds himself in the midst of…» al que termina «…odds with the canons of the Seven Ecumenical Councils.»",
                url: "https://orthodoxbridge.com/2012/07/28/why-i-did-not-become-roman-catholic-a-sort-of-response-to-jason-stellman/",
                text: "An Evangelical who finds himself in the midst of the rubble of a shattered Protestant theology needs to consider carefully what his options are.  There exist not one but two options.  The Church of Rome may claim to have been founded by the Apostles Peter and Paul, but the same claim can be made by the Church of Antioch (see Acts 13:1 for Paul and Galatians 2:11 for Peter and Paul).  So while the Church of Rome may seem to be most obvious option there is another option. But there is another historically and biblically sound option: the Church of Antioch, that is, the Eastern Orthodox Church.  The Church of Antioch can claim a chain of apostolic succession that is equally valid and older than Rome’s.  The early Councils did not assign the Bishop of Rome an authority greater than the other bishops.  Rome’s claim to supremacy over the other bishops and patriarchates is a later development and is at odds with the canons of the Seven Ecumenical Councils.",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
  ],
  passages: {
    title: "Los pasajes de la posición ortodoxa",
    lede: "Los versículos que la tradición ortodoxa cita sobre la cabeza de la Iglesia y el ministerio, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la tradición ortodoxa.",
    apologistsLabel: "Cómo lo defienden los apologistas ortodoxos.",
  },
  videos: {
    subtitle: "Creadores ortodoxos explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura ortodoxa. Abre cada una para leer en profundidad la respuesta de los textos ortodoxos.",
    videosSubtitle: "Creadores ortodoxos que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Para la Confesión de Dositeo, el obispo se distingue del sacerdote: «El sacerdote conserva en sí la potestad y gracia del sacerdocio que ha recibido; el obispo también la comunica a otros» {c:ODositheusX|Dositeo X}.",
      "Para el Catecismo extenso de Filareto, la obediencia se aprende de la Escritura, de los cánones de los santos apóstoles, de los concilios ecuménicos y provinciales, de los santos padres y de los libros de reglas y rúbricas eclesiásticas (pregunta 282) {c:OPhilaret282|Filareto, pregunta 282}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "El servicio episcopal",
        text: "La Confesión de Dositeo dice: «El sacerdote conserva en sí la potestad y gracia del sacerdocio que ha recibido; el obispo también la comunica a otros».",
        sources: [
          {
            citations: ["ODositheusX"],
            label: "Dositeo X",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Dónde se aprende la obediencia",
        text: "El Catecismo extenso de Filareto dice que se aprende de la Escritura, de los cánones de los santos apóstoles, de los concilios ecuménicos y provinciales, de los santos padres y de los libros de reglas y rúbricas eclesiásticas (pregunta 282).",
        sources: [
          {
            citations: ["OPhilaret282"],
            label: "Filareto, pregunta 282",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que los propios textos ortodoxos reconocen para sus textos, con su definición en palabras de los textos.",
    grades: {
      confession: {
        label: "Confesión de Dositeo (Jerusalén, 1672)",
        definition:
          "Confesión del Sínodo de Jerusalén de 1672. Los cánones de Constantinopla I, Calcedonia y Trulo pertenecen al nivel conciliar del mapa, y la encíclica patriarcal y sinodal de 1895 es una respuesta fechada del patriarca Antimo VII y los firmantes; no es un concilio ecuménico.",
        source: {
          citations: ["ODositheusX"],
          label: "Dositeo X",
        },
      },
      catechism: {
        label: "Catecismo extenso de Filareto (1839)",
        definition:
          "Catecismo sinodal ruso de 1839, con la numeración de preguntas de Schaff. Su descripción doctrinal no es un relevamiento de todas las Iglesias autocéfalas.",
        source: {
          citations: ["OPhilaret272"],
          label: "Filareto, pregunta 272",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
