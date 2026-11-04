import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const solaScripturaOrthodox = {
  doctrine: "sola-scriptura",
  tradition: "orthodox",
  status: "draft",
  title: "La posición ortodoxa",
  lede: "Cómo la Iglesia ortodoxa entiende la Escritura y la Tradición, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan los textos ortodoxos sobre la Escritura y la Tradición, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de Dositeo confiesa: «La divina y sagrada Escritura es enseñada por Dios».",
      grades: [
        {
          kind: "church",
          grade: "confession",
          basis: "Confesión de Dositeo, decreto II",
        },
      ],
      sources: [
        {
          citations: ["ODositheusII"],
          label: "Dositeo II",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "los libros inspirados",
        text: "Para el Catecismo extenso de Filareto, la Biblia son ciertos libros escritos por el Espíritu de Dios por medio de hombres santificados por Dios, llamados profetas y apóstoles (pregunta 19); y estos libros merecen atención antes que todos los demás (pregunta 20).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, preguntas 19 y 20",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret19"],
            label: "Filareto, pregunta 19",
          },
          {
            citations: ["OPhilaret20"],
            label: "Filareto, pregunta 20",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la revelación transmitida",
        text: "El Catecismo extenso de Filareto responde que la revelación divina se difunde y se conserva en la verdadera Iglesia por dos canales: la santa tradición y la santa Escritura (pregunta 16).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 16",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret16"],
            label: "Filareto, pregunta 16",
          },
        ],
      },
      {
        id: "QE-3",
        short: "qué es la tradición",
        text: "Por santa tradición el Catecismo extenso de Filareto entiende la doctrina de la fe, la ley de Dios, los sacramentos y el ritual, tal como los transmitieron de unos a otros, de generación en generación, de palabra y con el ejemplo, los verdaderos creyentes y adoradores de Dios (pregunta 17); y dice que la Iglesia es su depositaria (pregunta 18).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, preguntas 17 y 18",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret17"],
            label: "Filareto, pregunta 17",
          },
          {
            citations: ["OPhilaret18"],
            label: "Filareto, pregunta 18",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la Escritura conservada",
        text: "Según el Catecismo extenso de Filareto, la Escritura se escribió para que la revelación divina se conservara con más exactitud e inmutabilidad (pregunta 22).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 22",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret22"],
            label: "Filareto, pregunta 22",
          },
        ],
      },
      {
        id: "QE-5",
        short: "la tradición y la Escritura",
        text: "El Catecismo extenso de Filareto recibe la tradición que concuerda con la revelación divina y con la santa Escritura, como lo enseña la propia Escritura (pregunta 23).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 23",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret23"],
            label: "Filareto, pregunta 23",
          },
        ],
      },
      {
        id: "QE-6",
        short: "la interpretación en la Iglesia",
        text: "La Confesión de Dositeo enseña: «Sin embargo, no de otro modo que como la Iglesia católica la interpretó y la transmitió».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto II",
          },
        ],
        sources: [
          {
            citations: ["ODositheusII"],
            label: "Dositeo II",
          },
        ],
      },
      {
        id: "QE-7",
        short: "los testimonios sobre el canon",
        text: "Los testimonios sobre el canon no se funden: el Catecismo extenso de Filareto (preguntas 31 a 35) y la Confesión de Dositeo (pregunta III) difieren sobre los libros ausentes de la lista hebrea.",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, preguntas 31 a 35",
          },
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, pregunta III",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret31"],
            label: "Filareto, pregunta 31",
          },
          {
            citations: ["ODositheusQuestion_III"],
            label: "Dositeo, pregunta III",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "La Confesión de Dositeo dice: «Pues, siendo uno y el mismo Espíritu Santo el autor de ambas, es ciertamente igual ser enseñado por la Escritura y por la Iglesia católica» {c:ODositheusII|Dositeo II}.",
      "Y el Catecismo extenso de Filareto dice que el instrumento más antiguo y original para difundir la revelación divina es la santa tradición (pregunta 21) {c:OPhilaret21|Filareto, pregunta 21}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para el Catecismo extenso de Filareto, la propia Escritura pide mantenerse firmes en las tradiciones aprendidas, de palabra o por carta (2 Tesalonicenses 2:15; pregunta 23).",
  },
  scriptureSubtitle: "Los pasajes que los textos ortodoxos citan sobre la Escritura y la Tradición, y cómo los leen.",
  scripture: [
    {
      refs: ["1Tim.3.15"],
      text: "El Catecismo extenso lo cita para la Iglesia como depositaria, columna y baluarte de la verdad (Filareto, pregunta 18); la Confesión de Dositeo apoya en la Iglesia su argumento (decreto II).",
      apologists: {
        arguments: [
          {
            title:
              "La Iglesia es «columna y sostén de la verdad»: la Escritura y la Iglesia no se oponen; quien quiere la verdad va a la Iglesia, a la que el Espíritu guía a toda la verdad",
            quotes: [
              {
                speaker: "Fr. Josiah Trenham",
                work: "Having the Bible Without the Church?",
                outlet: "Patristic Nectar, YouTube",
                date: "19 de diciembre de 2024",
                locator: "Minutos 11:11 a 14:08",
                url: "https://www.youtube.com/watch?v=79MwTNPlzdU&t=671s",
                text: "Cristo, así que no hay una dicotomía entre Jesús y la Iglesia. Número dos: no hay una dicotomía entre la verdad y la Iglesia. Si quieres la verdad, vas a la Iglesia; no vas a tu Biblia y a tu lectura privada. Por supuesto que es maravilloso leer la Biblia, pero hay que leerla de la manera en que Jesús guía a su pueblo en la Iglesia a leerla, de modo que sea verdaderamente auténtica según su sentido, tal como siempre ha sido entendida. Esta idea de que de alguna manera podemos tener la verdad sin la Iglesia no es así. ¿Qué dice Pablo? ¿Cómo llama el gran san Pablo a la Iglesia en su primera epístola a su hijo espiritual Timoteo? Dice que la Iglesia es la familia de Dios, es la Iglesia del Dios viviente, la columna y el sostén de la verdad. Si quieres la verdad, tienes que ir a la Iglesia, porque la Iglesia sostiene a la Iglesia; la verdad ha recibido la verdad revelada TR y la articula, tanto nutriendo a su pueblo en la verdad como proclamándola al mundo. Eso es lo que es la Iglesia: la luz del mundo, la sal de la tierra; no este individuo o aquel individuo, no esta persona con un gran canal de YouTube que no está conectada con la Iglesia. Si una persona es miembro de la Iglesia y habla formalmente en nombre de la Iglesia, eso es lo más bendito, y puedes tener confianza en la verdad que llega. Pero la idea de que la verdad está aquí y la Iglesia está allá, y de que la Iglesia siempre es mixta y no tiene ninguna conexión esencial con la verdad, es un error terrible y una falsa dicotomía entre la verdad y la Iglesia. Y por último, la tercera falsa dicotomía es la dicotomía entre la Biblia y la Iglesia, como si la Biblia de alguna manera existiera aparte de la Iglesia, como si hubiera llegado al mundo aparte de la Iglesia. Muchos en Occidente, muchos en el Occidente protestante, funcionan sobre el presupuesto de que, de alguna manera, Dios hizo bajar del cielo, como un gran paquete navideño, la Santa Biblia en un envoltorio bonito con un moño, para cada persona en particular: aquí tienes, este es mi regalo para ti, ve y léelo. Así no es como llegaron a existir las Escrituras. La idea de que la Biblia existe aparte de la Iglesia es un completo disparate, y es en sí misma una falsa dicotomía. El Espíritu Santo que inspiró a los profetas a hablar, las palabras de la Santa Escritura inspiradas por Dios, es el mismo Espíritu Santo que vino a la Iglesia el día de Pentecostés, y la inspira en su plena realidad. Jesús lo prometió, por supuesto; puedes leerlo en el capítulo 14 y especialmente en el capítulo 16 del Evangelio de san Juan, donde Jesús habla con tanto detalle de su promesa de enviar al Espíritu Santo para guiar a la Iglesia a toda la verdad. Esto es lo que hace el Espíritu Santo.",
                original:
                  "Christ so there is no dichotomy between Jesus and the church number two there is no dichotomy between the truth and the church if you want the truth you go to the church you don't go to your Bible and to your private reading of course it's wonderful to read the Bible but you need to read the Bible the way that Jesus guides his people in the church to read the Bible that is truly authentically according to its meaning as it has always been understood this idea that somehow we can have the truth without the church is not the case what does Paul what does the great St Paul call the church in his first epistle to his spiritual son Timothy he says the church is the family of God it is the Church of the Living God the pillar and support of the truth if you want the truth you have to go to the church because the church upholds the church the truth has received the revealed TR truth and articulates the revealed truth both nourishing her people in the truth and proclaiming the truth to the world that is what the church is the church is the light of the world the salt of the earth not this individual or that individual not this person with a great YouTube channel that's not connected to the church if a person is a member of the church and is speaking on behalf formally of the church that is most blessed and you can be confident of the truth that comes but the idea that truth is over here and the church is over there and the church is always mixed and doesn't have any essential connection to the truth that is a terrible mistake and a false dichotomy between the truth and the church and lastly the third false dichotomy is the dichotomy between the Bible and the church as though uh the Bible somehow uh exists apart from the church came into the world apart from the church many in the west many in the Protestant West function on this presupposition that somehow God caused as a great Christmas package the Holy Bible to descend from the heaven all in a pretty little package with a bow to each individual person here this is my gift to you go read it this is not how the scriptures came to pass the idea that the Bible exists apart from the church is complete nonsense and it is it itself a false dichotomy the Holy Spirit who inspired the prophets to speak the god inspired words of Holy scripture is the same Holy Spirit who came to the church on the day of Pentecost and inspires her in her complete reality Jesus Promised this of course you can read this in the 14th chapter and the 16th chapter particularly of St John's gospel where Jesus speaks in such detail about the his promise to send forth the holy spirit to guide the church into all the truth this is what the Holy Spirit does",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "La Iglesia, no la Biblia, es la columna y el fundamento de la verdad; el Nuevo Testamento se escribió dentro de su vida y ella lo interpreta",
            quotes: [
              {
                speaker: "Fr. James Bernstein",
                work: "Which Came First: The Church or the New Testament?",
                outlet: "Orthodox Christian Information Center",
                date: "Sin fecha indicada",
                locator:
                  "1 párrafo: del párrafo que empieza «In the view of the earliest Christians, God spoke…» al que termina «…Church that the New Testament was written and preserved.»",
                url: "http://orthodoxinfo.com/inquirers/whichcamefirst.aspx",
                text: "En la visión de los primeros cristianos, Dios habló su Palabra no solo a su Cuerpo, la Iglesia, sino también por medio de ella. Fue dentro de su Cuerpo, la Iglesia, donde la Palabra fue confirmada y establecida. Sin duda, los primeros cristianos consideraban las Escrituras como la revelación activa de Dios de sí mismo al mundo. Al mismo tiempo, la Iglesia era entendida como la casa de Dios, “edificada sobre el fundamento de los apóstoles y profetas, siendo Jesucristo mismo la piedra angular, en quien todo el edificio, bien coordinado, va creciendo para ser un templo santo en el Señor” (Efesios 2:20, 21). Dios tiene su Palabra, pero también tiene su Cuerpo. El Nuevo Testamento dice: (1) “Ahora bien, ustedes son el cuerpo de Cristo, y miembros cada uno en particular” (1 Corintios 12:27; compárese con Romanos 12:5). (2) “Él [Cristo] es la cabeza del cuerpo, que es la iglesia” (Colosenses 1:18). (3) “Y sometió todas las cosas bajo sus pies [del Hijo], y lo dio por cabeza sobre todas las cosas a la iglesia, la cual es su cuerpo, la plenitud de aquel que todo lo llena en todos” (Efesios 1:22, 23). En los tiempos antiguos no había separación orgánica entre Biblia e Iglesia, como tan a menudo encontramos hoy. El Cuerpo sin la Palabra carece de mensaje, pero la Palabra sin el Cuerpo carece de fundamento. Como escribe Pablo, el Cuerpo es “la iglesia del Dios viviente, columna y fundamento de la verdad” (1 Timoteo 3:15). La Iglesia es el Cuerpo vivo del Señor encarnado. El apóstol no dice que el Nuevo Testamento sea la columna y el fundamento de la verdad. La Iglesia es la columna y el fundamento de la verdad porque el Nuevo Testamento fue edificado sobre su vida en Dios. ¡En resumen, ella lo escribió! Ella es una parte integral del mensaje del evangelio, y es dentro de la Iglesia donde el Nuevo Testamento fue escrito y preservado.",
                original:
                  "In the view of the earliest Christians, God spoke His Word not only to but through His Body, the Church. It was within His Body, the Church, that the Word was confirmed and established. Without question, the Scriptures were looked upon by early Christians as God’s active revelation of Himself to the world. At the same time, the Church was understood as the household of God, “having been built on the foundation of the apostles and prophets, Jesus Christ Himself being the chief cornerstone, in whom the whole building, being fitted together, grows into a holy temple in the Lord” (Ephesians 2:20, 21). God has His Word, but He also has His Body. The New Testament says: (1) “Now you are the body of Christ, and members individually” (1 Corinthians 12:27; compare Romans 12:5). (2) “He [Christ] is the head of the body, the church” (Colossians 1:18). (3) “And He [the Father] put all things under His [the Son’s] feet, and gave Him to be head overall things to the church, which is His body, the fullness of Him who fills all in all” (Ephesians 1:22, 23). In early times there was no organic separation between Bible and Church, as we so often find today. The Body without the Word is without message, but the Word without the Body is without foundation. As Paul writes, the Body is “the church of the living God, the pillar and ground of the truth” (1 Timothy 3:15). The Church is the Living Body of the Incarnate Lord. The Apostle does not say that the New Testament is the pillar and ground of the truth. The Church is the pillar and foundation of the truth because the New Testament was built upon her life in God. In short, she wrote it! She is an integral part of the gospel message, and it is within the Church that the New Testament was written and preserved.",
                translation: "ai-assisted",
              },
              {
                speaker: "Fr. Lawrence Farley",
                work: "Sola Scriptura",
                outlet: "OrthoChristian.com",
                date: "Sin fecha indicada",
                locator:
                  "1 párrafo: del párrafo que empieza «One therefore cannot legitimately sunder Scripture from the rest…» al que termina «…not the Bible, but the Church (1 Timothy 3:15).»",
                url: "https://orthochristian.com/113528.html",
                text: "Por lo tanto, no se puede separar legítimamente la Escritura del resto de la Tradición, ni hablar de “Escritura y Tradición” como cosas separadas, como hace Occidente. La Escritura es parte de la Tradición apostólica, con T mayúscula, y no se puede hablar de “Escritura vs. Tradición” como tampoco de “el Nuevo Testamento vs. la Biblia”. La Escritura reina de manera suprema en la Iglesia, pero nunca se separa de la tradición oral y se lee como parte de la Tradición total. Es porque esta Tradición apostólica es suprema en la Iglesia que la Iglesia es el único intérprete autorizado de la Escritura. Por eso san Pablo declara que “la columna y baluarte de la verdad” no es la Biblia, sino la Iglesia (1 Timoteo 3:15).",
                original:
                  "One therefore cannot legitimately sunder Scripture from the rest of Tradition, or speak of “Scripture and Tradition” as separate things as the West does. Scripture is a part of the capital ‘T’ apostolic Tradition, and one can no more speak of “Scripture vs. Tradition” than one can speak of “the New Testament vs. the Bible”. Scripture reigns supreme in the Church, but it is never sundered from oral tradition and is read as a part of the total Tradition. It is because this apostolic Tradition is supreme in the Church that the Church is the only authorized interpreter of Scripture. That is why St. Paul declares that “the pillar and bulwark of the truth” is not the Bible, but the Church (1 Timothy 3:15).",
                translation: "ai-assisted",
              },
              {
                speaker: "Dr. Amir Azarvan",
                work: "How to Test the Protestant Doctrine of Sola Scriptura",
                outlet: "OrthoChristian.com",
                date: "Sin fecha indicada",
                locator:
                  "1 párrafo: del párrafo que empieza «Far from denying the existence of an entity above…» al que termina «…body that is guided “into all truth” (John 16:13).»",
                url: "https://orthochristian.com/149634.html",
                text: "Lejos de negar la existencia de una entidad por encima del individuo capaz de interpretar con autoridad la verdad bíblica, las Escrituras nos dicen que la misma “columna y fundamento de la verdad” (1 Timoteo 3:15) es la Iglesia, no el creyente individual ni la Biblia. La Iglesia es un cuerpo permanente de creyentes contra el cual ni siquiera las puertas de la muerte prevalecerán (Mateo 16:18). Esto es así porque la Iglesia no es meramente una institución humana, sino una institución divino-humana (o teantrópica). La Biblia presenta a la Iglesia no solo como una organización, sino como un organismo, en cuanto la describe como el mismo cuerpo de Cristo. La Iglesia, por lo tanto, no es algún fósil bíblico, sino un cuerpo vivo, indestructible y divino-humano que es guiado “a toda la verdad” (Juan 16:13).",
                original:
                  "Far from denying the existence of an entity above the individual capable of authoritatively interpreting Biblical truth, the Scriptures tell us that the very “pillar and ground of truth” (1 Tim 3:15) is the Church, not the individual believer or the Bible. The Church is a permanent body of believers against which even the gates of death will not prevail (Matt 16:18). This is so because the church is not merely a human institution, but a divine-human (or theanthropic) one. The bible presents the church not merely as an organization, but as an organism, in that it describes her as the very body of Christ. The Church, therefore, is not some biblical fossil, but a living, indestructible, and divine-human body that is guided “into all truth” (John 16:13).",
                translation: "ai-assisted",
              },
              {
                speaker: "Fr. John Whiteford",
                work: "Sola Scriptura: In the Vanity of Their Minds",
                outlet: "Orthodox Christian Information Center",
                date: "Sin fecha indicada",
                locator:
                  "1 párrafo: del párrafo que empieza «But how can we know that the Church has…» al que termina «…but steadily grows into the largest of garden plants.»",
                url: "http://orthodoxinfo.com/inquirers/tca_solascriptura",
                text: "Pero ¿cómo podemos saber que la Iglesia ha conservado la Tradición apostólica en su pureza? La respuesta corta es que Dios la ha preservado en la Iglesia porque Él lo ha prometido. Cristo dijo que edificaría su Iglesia y que las puertas del Infierno no prevalecerían contra ella (Mateo 16:18). Cristo mismo es la cabeza de la Iglesia (Efesios 4:16), y la Iglesia es su Cuerpo (Efesios 1:22-23). Si la Iglesia hubiera perdido la pura Tradición apostólica, la Verdad tendría que dejar de ser Verdad, pues la Iglesia es la columna y el fundamento de la Verdad (1 Timoteo 3:15). La concepción protestante común de la historia de la Iglesia, según la cual la Iglesia cayó en apostasía desde la época de Constantino hasta la Reforma, sin duda deja sin sentido estas y muchas otras Escrituras. Si la Iglesia dejó de existir, aunque fuera por un solo día, entonces las puertas del Infierno prevalecieron contra ella ese día. Si esto fuera así, cuando Cristo describió el crecimiento de la Iglesia en la parábola del grano de mostaza (Mateo 13:31-32), debería haber hablado de una planta que empezó a crecer pero fue aplastada, y en su lugar brotó después una nueva semilla; pero en cambio usó la imagen de una semilla de mostaza que empieza pequeña y crece de manera constante hasta convertirse en la más grande de las plantas del huerto.",
                original:
                  "But how can we know that the Church has preserved the Apostolic Tradition in its purity? The short answer is that God has preserved it in the Church because He has promised to do so. Christ said that He would build His Church and that the gates of Hell would not prevail against it (Matthew 16:18). Christ Himself is the head of the Church (Ephesians 4:16), and the Church is His Body (Ephesians 1:22-23). If the Church lost the pure Apostolic Tradition, then the Truth would have to cease being the Truth — for the Church is the pillar and foundation of the Truth (I Timothy 3:15). The common Protestant conception of Church history, that the Church fell into apostasy from the time of Constantine until the Reformation certainly makes these and many other Scriptures meaningless. If the Church ceased to be, for even one day, then the gates of Hell prevailed against it on that day. If this were the case, when Christ described the growth of the Church in His parable of the mustard seed (Matthew 13:31-32), He should have spoken of a plant that started to grow but was squashed, and in its place a new seed sprouted later on — but instead He used the imagery of a mustard seed that begins small but steadily grows into the largest of garden plants.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["2Thess.2.15"],
      text: "El Catecismo extenso lo cita para la tradición enseñada de palabra o por carta (Filareto, pregunta 23).",
      apologists: {
        arguments: [
          {
            title:
              "Pablo da la misma autoridad a la enseñanza apostólica escrita y oral; la Escritura es una parte de la Tradición completa",
            quotes: [
              {
                speaker: "Robert Arakaki",
                work: "Reconsidering 2 Thessalonians 2:15 and Sola Scriptura",
                outlet: "Orthodox-Reformed Bridge",
                date: "22 de abril de 2023",
                locator:
                  "2 párrafos: del párrafo que empieza «2 Thessalonians 2:15 complements and roughly parallels 2 Thessalonians…» al que termina «…the intent behind Fr. Stephen’s criticism of Orthodox apologists.»",
                url: "https://orthodoxbridge.com/2023/04/22/reconsidering-2-thessalonians-215-and-sola-scriptura/",
                text: "2 Tesalonicenses 2:15 complementa y guarda un paralelo aproximado con 2 Tesalonicenses 2:2. Primero, en el versículo 2:2, Pablo se preocupa por el bienestar espiritual de los cristianos de Tesalónica. Teme que se dejen “sacudir” (σαλευθῆναι) por algún informe oral (λόγου) de que la Segunda Venida ya había ocurrido. Esto explica por qué en el versículo 2:15 los exhorta a “estar firmes” (στήκετε) en espíritu y a “aferrarse” (κρατεῖτε) a “las tradiciones” (τὰς παραδόσεις) que les enseñó. “Estar firmes” se refiere al estado de sus corazones, y “aferrarse” se refiere a su adhesión a las enseñanzas de Pablo. Segundo, en el versículo 2:2 Pablo describe los medios de comunicación para conocer los acontecimientos de los tiempos finales: (1) una carta (ἐπιστολῆς) supuestamente de Pablo, (2) una palabra hablada (λόγου) supuestamente dicha por Pablo, o (3) una expresión profética (πνεύματος). La presencia del don carismático de profecía es evidente a la luz de la exhortación de Pablo de que las expresiones proféticas no debían despreciarse sino examinarse (1 Tesalonicenses 5:20-21). El don de profecía era bastante común en la Iglesia del Nuevo Testamento (ver 1 Corintios 12 y 14, Romanos 12, Efesios 4, Hechos 21). En el versículo 15, Pablo vuelve a referirse a los dos medios principales de comunicación: carta (ἐπιστολῆς) y palabra de boca (λόγου). Si el apóstol Pablo pretendía que el versículo 15 fuera paralelo al versículo 2, entonces podemos esperar que el sentido de “palabra” (λόγου) sea simétrico en ambos versículos. Que Pablo usara “palabra de boca” junto con “carta” sugiere que ambas eran medios válidos y con autoridad para comunicar la revelación divina. Pablo no excluyó las comunicaciones orales, ni subordinó la palabra oral a la escrita; hacer cualquiera de estas dos cosas sugeriría el paradigma protestante de la sola Scriptura. La colocación de la palabra oral junto a la escrita por parte de Pablo sugiere el paradigma ortodoxo de la Tradición con T mayúscula, que comprende la Tradición escrita junto con la Tradición oral. Esta comprensión de dos mitades complementarias de una sola Tradición difiere del paradigma católico romano, que ve la Tradición como dos corrientes que proceden de una misma fuente divina (ver Dei Verbum §9).\n\nHay implicaciones pastorales en 2 Tesalonicenses 2:15. Una es que la Tradición (escrita y oral) provee un fundamento espiritual, doctrinal y ético para la vida cristiana. Si estamos firmes y nos aferramos a la Tradición, nuestras vidas se caracterizarán por la estabilidad y la sobriedad en lugar de la vacilación y la excitabilidad. Este versículo es especialmente pertinente para los evangélicos y dispensacionalistas de hoy, que se obsesionan con el Arrebatamiento y los tiempos finales. También conviene notar que Pablo no menciona buscar una revelación del Espíritu Santo. Las revelaciones privadas son mucho más propensas a la subjetividad caprichosa que el fundamento estable que provee la Tradición (escrita y oral). En otras palabras, cuando los protestantes y los cristianos ortodoxos de hoy leen 2 Tesalonicenses 2:15, deben tener presente que la principal preocupación de Pablo era pastoral, no la apologética teológica. Así, aunque 2 Tesalonicenses 2:15 nos da valiosas percepciones sobre el principio formal de la teología de Pablo, los cristianos de hoy deben tener cuidado de leer el versículo solamente desde el punto de vista de la apologética. Creo que esa fue la intención de la crítica del P. Stephen a los apologistas ortodoxos.",
                original:
                  "2 Thessalonians 2:15 complements and roughly parallels 2 Thessalonians 2:2. First, in verse 2:2, Paul is concerned about the Thessalonian Christians’ spiritual wellbeing. He worries about their being “shaken” (σαλευθῆναι) by some oral report (λόγου) that the Second Coming had already taken place. This explains why in verse 2:15, he admonishes the Thessalonian Christians to “stand firm” (στήκετε) in spirit and to “hold fast” (κρατεῖτε) to “the traditions” (τὰς παραδόσεις) he taught them. To “stand firm” refers to the state of their hearts and to “hold fast” refers to their adherence to Paul’s teachings. Second, in verse 2:2 Paul describes the means of communication for learning about the end times: (1) a letter (ἐπιστολῆς) purportedly from Paul, (2) a spoken word (λόγου) allegedly said by Paul, or (3) a prophetic utterance (πνεύματος). The presence of the charismatic gift of prophecy is evident in light of Paul’s admonition that prophetic utterances were not to be despised but rather tested (1 Thessalonians 5:20-21). The gift of prophecy was fairly common in the New Testament Church (see 1 Corinthians 12 and 14, Romans 12, Ephesians 4, Acts 21). In verse 15, Paul refers again to the two primary means of communication: letter (ἐπιστολῆς) and word of mouth (λόγου). If the Apostle Paul intended verse 15 to parallel verse 2, then we can expect the meaning for “word” (λόγου) to be symmetrical for both verses. That Paul used “word of mouth” in tandem with “letter” suggests that both were valid and authoritative means of communicating divine revelation. Paul did not exclude oral communications, nor did he subordinate the oral word to the written word; doing either of these would be suggestive of the Protestant sola scriptura paradigm. Paul’s placement of the oral word alongside the written word suggests the Orthodox paradigm of capital “T” Tradition comprising written Tradition with oral Tradition. This understanding of two complementary halves of one singular Tradition diverges from the Roman Catholic paradigm which sees Tradition as two streams from one divine source (see Dei Verbum §9).\n\nThere are pastoral implications to 2 Thessalonians 2:15. One is that Tradition (written and oral) provides a spiritual, doctrinal, and ethical foundation for the Christian life. If we stand firm and hold fast to Tradition, our lives will be marked by stability and sobriety instead of wavering and excitability. This verse is especially pertinent for modern-day Evangelicals and Dispensationalists who obsess about the Rapture and the End Times. It should also be noted that Paul makes no mention of seeking a revelation by the Holy Spirit. Private revelations are much more prone to fickle subjectivity than the stable foundation provided by Tradition (written and oral). In other words, when modern-day Protestants and Orthodox Christians read 2 Thessalonians 2:15, they should keep in mind that Paul’s primary concern was pastoral, not theological apologetics. So, while 2 Thessalonians 2:15 does give us important insights into the formal principle of Paul’s theology, present-day Christians should beware reading the verse solely from the standpoint of doing apologetics. This I believe was the intent behind Fr. Stephen’s criticism of Orthodox apologists.",
                translation: "ai-assisted",
              },
              {
                speaker: "Fr. James Bernstein",
                work: "Which Came First: The Church or the New Testament?",
                outlet: "Orthodox Christian Information Center",
                date: "Sin fecha indicada",
                locator:
                  "1 párrafo: del párrafo que empieza «The Apostle Paul exhorts us, “Therefore, brethren, stand fast…» al que termina «…Written and oral tradition together got the job done.»",
                url: "http://orthodoxinfo.com/inquirers/whichcamefirst.aspx",
                text: "El apóstol Pablo nos exhorta: “Así que, hermanos, estad firmes y retened las tradiciones que os fueron enseñadas, ya sea por palabra o por nuestra epístola” (2 Tesalonicenses 2:15). Este versículo no lo había subrayado porque usaba dos expresiones que no me gustaban: “retener las tradiciones” y “por palabra [de boca]”. Estas dos frases chocaban con mi comprensión de la autoridad bíblica. Pero después empecé a entender: el mismo Dios que nos habla por medio de su Palabra escrita, la Biblia, habló también por medio de los apóstoles de Cristo mientras enseñaban y predicaban en persona. ¡Las Escrituras mismas enseñan en este pasaje (y en otros) que esta tradición oral es la que debemos guardar! La tradición escrita y la oral no están en conflicto, sino que son partes de un mismo todo. Esto explica por qué los Padres enseñan que quien no tiene a la Iglesia por madre no tiene a Dios por padre. Al llegar a esta conclusión, comprendí que había reaccionado exageradamente al rechazar la Tradición oral santa. En mi hostilidad hacia la tradición oral judía, que rechazó a Cristo, había rechazado la tradición oral cristiana, la Santa Tradición, que expresa la vida del Espíritu Santo en la Iglesia. Y había rechazado la idea de que esta Tradición nos permite entender la Biblia de manera correcta y plena. Permítanme ilustrar este punto con una experiencia que tuve hace poco. Decidí construir un cobertizo detrás de mi casa. Para prepararme, estudié un libro de carpintería que lo tiene “todo”. Está lleno de dibujos y diagramas, lo suficiente como para que “hasta un chico pueda seguir sus instrucciones”. Se explica solo, me dijeron. Pero, por simple que pretendiera ser, cuanto más lo leía, más preguntas me surgían y más confundido me sentía. Harto de no poder entender algo que parecía tan sencillo, llegué a la conclusión de que el libro necesitaba interpretación. Sin ayuda, simplemente no podía ponerlo en práctica. Lo que necesitaba era alguien con experiencia que me explicara el manual. Afortunadamente, tenía un amigo que sabía mostrarme cómo debía completarse el trabajo. Él lo sabe por tradición oral: un carpintero experimentado se lo enseñó, y él a su vez me lo enseñó a mí. La tradición escrita y la oral, juntas, hicieron el trabajo.",
                original:
                  "The Apostle Paul exhorts us, “Therefore, brethren, stand fast and hold the traditions which you were taught, whether by word or our epistle” (2 Thessalonians 2:15). This verse was one that I had not highlighted because it used two phrases I didn’t like: “hold the traditions” and “by word [of mouth].” These two phrases conflicted with my understanding of biblical authority. But then I began to understand: the same God who speaks to us through His written Word, the Bible, spoke also through the Apostles of Christ as they taught and preached in person. The Scriptures themselves teach in this passage (and others) that this oral tradition is what we are to keep! Written and oral tradition are not in conflict, but are parts of one whole. This explains why the Fathers teach that he who does not have the Church as his Mother does not have God as his Father. In coming to this realization, I concluded that I had grossly overreacted in rejecting oral Holy Tradition. In my hostility toward Jewish oral tradition, which rejected Christ, I had rejected Christian oral Holy Tradition, which expresses the life of the Holy Spirit in the Church. And I had rejected the idea that this Tradition enables us properly and fully to understand the Bible. Let me illustrate this point with an experience I had recently. I decided to build a shed behind my house. In preparation, I studied a book on carpentry that has “everything” in it. It’s full of pictures and diagrams, enough so that “even a kid could follow its instructions.” It explains itself, I was told. But, simple as it claimed to be, the more I read it, the more questions I had and the more confused I became. Disgusted at not being able to understand something that seemed so simple, I came to the conclusion that the book needed interpretation. Without help, I just couldn’t put it into practice. What I needed was someone with expertise who could explain the manual to me. Fortunately, I had a friend who was able to show me how the project should be completed. He knows because of oral tradition. An experienced carpenter taught him, and he in turn taught me. Written and oral tradition together got the job done.",
                translation: "ai-assisted",
              },
              {
                speaker: "Fr. John Whiteford",
                work: "Sola Scriptura: In the Vanity of Their Minds",
                outlet: "Orthodox Christian Information Center",
                date: "Sin fecha indicada",
                locator:
                  "3 párrafos: del párrafo que empieza «This dependence upon tradition is evident in the New…» al que termina «…pillar and ground of the Truth” (I Timothy 3:15).»",
                url: "http://orthodoxinfo.com/inquirers/tca_solascriptura",
                text: "Esta dependencia de la tradición es evidente en los propios escritos del Nuevo Testamento. Por ejemplo, san Pablo exhorta a los tesalonicenses:\n\nAsí que, hermanos, estad firmes y retened las tradiciones que habéis aprendido, ya sea por palabra [es decir, tradición oral] o por nuestra epístola (II Tesalonicenses 2:15).\n\nLa palabra aquí traducida como “tradiciones” es el griego paradosis, que, aunque se traduce de manera distinta en algunas versiones protestantes, es la misma palabra que usan los ortodoxos griegos cuando hablan de la Tradición, y pocos biblistas competentes discutirían este sentido. La palabra significa literalmente “lo que se transmite”. Es la misma palabra que se usa en sentido negativo para referirse a las falsas enseñanzas de los fariseos (Marcos 7:3, 5, 8), y también para referirse a la enseñanza cristiana autorizada (1 Corintios 11:2, 2 Tesalonicenses 2:15). Entonces, ¿qué hace que la tradición de los fariseos sea falsa y la de la Iglesia verdadera? ¡La fuente! Cristo dejó claro cuál era la fuente de las tradiciones de los fariseos cuando las llamó “tradiciones de hombres” (Marcos 7:8). San Pablo, en cambio, refiriéndose a la Tradición cristiana, afirma: “Os alabo, hermanos, porque en todo os acordáis de mí y retenéis las tradiciones [paradoseis] tal como os las entregué [paredoka, forma verbal de paradosis]” (1 Corintios 11:2). Pero ¿de dónde sacó estas tradiciones en primer lugar? “Recibí del Señor lo que también os entregué [paredoka]” (1 Corintios 11:23). Esto es a lo que la Iglesia ortodoxa se refiere cuando habla de la Tradición apostólica: “la fe una vez entregada [paradotheise] a los santos” (Judas 3). Su fuente es Cristo: le fue entregada personalmente por Él a los apóstoles a través de todo lo que dijo e hizo, lo cual, si todo se hubiera escrito, “el mundo mismo no podría contener los libros que se habrían de escribir” (Juan 21:25). Los apóstoles transmitieron este conocimiento a toda la Iglesia, y la Iglesia, como depositaria de este tesoro, llegó así a ser “columna y baluarte de la Verdad” (1 Timoteo 3:15).",
                original:
                  "This dependence upon tradition is evident in the New Testament writings themselves. For example, Saint Paul exhorts the Thessalonians:\n\nTherefore, brethren, stand fast and hold the traditions which ye have been taught, whether by word [i.e. oral tradition] or our epistle (II Thessalonians 2:15).\n\nThe word here translated “traditions” is the Greek word paradosis — which, though translated differently in some Protestant versions, is the same word that the Greek Orthodox use when speaking of Tradition, and few competent Bible scholars would dispute this meaning. The word itself literally means “what is transmitted.” It is the same word used when referring negatively to the false teachings of the Pharisees (Mark 7:3, 5, 8), and also when referring to authoritative Christian teaching (I Corinthians 11:2, Second Thessalonians 2:15). So what makes the tradition of the Pharisees false and that of the Church true? The source! Christ made clear what was the source of the traditions of the Pharisees when He called them “the traditions of men” (Mark 7:8). Saint Paul on the other hand, in reference to Christian Tradition states, “I praise you brethren, that you remember me in all things and hold fast to the traditions [paradoseis] just as I delivered [paredoka, a verbal form of paradosis] them to you” (First Corinthians 11:2), but where did he get these traditions in the first place? “I received from the Lord that which I delivered [paredoka] to you” (first Corinthians 11:23). This is what the Orthodox Church refers to when it speaks of the Apostolic Tradition — “the Faith once delivered [paradotheise] unto the saints” (Jude 3). Its source is Christ, it was delivered personally by Him to the Apostles through all that He said and did, which if it all were all written down, “the world itself could not contain the books that should be written” (John 21:25). The Apostles delivered this knowldge to the entire Church, and the Church, being the repository of this treasure thus became “the pillar and ground of the Truth” (I Timothy 3:15).",
                translation: "ai-assisted",
              },
              {
                speaker: "Fr. Lawrence Farley",
                work: "Sola Scriptura",
                outlet: "OrthoChristian.com",
                date: "Sin fecha indicada",
                locator:
                  "1 párrafo: del párrafo que empieza «Secondly, when one looks into the Scriptures one sees…» al que termina «…authoritative because Paul was an apostle—as he vigorously insisted.»",
                url: "https://orthochristian.com/113528.html",
                text: 'En segundo lugar, al examinar las Escrituras se ve que los propios apóstoles se refieren a las tradiciones orales como una fuente de igual autoridad. Así, san Pablo escribe en 1 Corintios 11:2: "Os alabo porque me recordáis en todo y mantenéis las tradiciones tal como os las he entregado". O también en 2 Tesalonicenses 2:15, donde escribe: "Así que, hermanos, estad firmes y aferraos a las tradiciones que os fueron enseñadas por nosotros, ya sea de palabra o por carta". Lo que tenía autoridad era la enseñanza de los apóstoles, y era irrelevante si se transmitía oralmente (es decir, "de palabra", tradición oral) o por escrito (es decir, por carta, las epístolas del Nuevo Testamento). La autoridad residía en la Tradición apostólica, transmitida de cualquiera de las dos maneras. Las epístolas de Pablo no tenían autoridad porque Dios hubiera activado un interruptor de inspiración antes de que Pablo escribiera y luego lo hubiera apagado al terminar. La tenían porque Pablo era apóstol, como él insistía con vehemencia.',
                original:
                  "Secondly, when one looks into the Scriptures one sees that the apostles themselves refer to oral traditions as a source of equal authority. Thus St. Paul writes in 1 Corinthians 11:2, “I commend you because you remember me in everything and maintain the traditions even as I have delivered them to you”. Or again in 2 Thessalonians 2:15, where he writes, “So then, brethren, stand firm and hold to the traditions which you were taught by us, either by word of mouth or by letter”. What possessed authority was the teaching of the apostles, and it was irrelevant whether it transmitted orally (i.e. “by word of mouth”, oral tradition) or in writing (i.e. by letter, the epistles of the New Testament). Authority resided in apostolic Tradition, however transmitted. Paul’s epistles were not authoritative because God had turned on an inspiration switch before Paul wrote and then turned if off again when he finished writing. They were authoritative because Paul was an apostle—as he vigorously insisted.",
                translation: "ai-assisted",
              },
              {
                speaker: "Dr. Amir Azarvan",
                work: "How to Test the Protestant Doctrine of Sola Scriptura",
                outlet: "OrthoChristian.com",
                date: "Sin fecha indicada",
                locator:
                  "1 párrafo: del párrafo que empieza «What Christ did command was to have his gospel…» al que termina «…other traditions? I have yet to find any, myself.»",
                url: "https://orthochristian.com/149634.html",
                text: "Lo que Cristo sí mandó fue que su evangelio fuera predicado a toda criatura (Marcos 16:15). Dicho de otro modo, la verdad se enseñaba oralmente. Después, encontramos a san Pablo exhortando a los tesalonicenses a estar firmes y a retener las tradiciones escritas y no escritas (2 Tesalonicenses 2:15). Algunos protestantes dirán: “Aunque eso pudiera ser así, solo las tradiciones escritas siguen teniendo autoridad hoy.” Pero recuerden: según la Sola Scriptura, todas las doctrinas con autoridad deben derivarse de la Biblia. Entonces, para que este argumento tenga algún mérito, tiene que haber evidencia bíblica de una especie de “fecha de vencimiento” para la autoridad de las tradiciones no escritas. ¿Hay, por ejemplo, alguna Escritura que profetice la creación de un nuevo testamento escrito, algunos siglos después de la Ascensión, que desplace a todas las demás tradiciones? Yo mismo no he encontrado ninguna.",
                original:
                  "What Christ did command was to have his gospel preached to every creature (Mark 16:15). In other words, the truth was taught orally. Afterwards, we find St. Paul exhorting the Thessalonians to stand fast and hold the written and unwritten traditions (2 Thess 2:15). Some Protestants will argue: “Although that might be the case, only the written traditions remain authoritative today.” But remember: according to Sola Scriptura, all authoritative doctrines must be biblically derived. So, for this argument to have any merit, there must be biblical evidence of a sort of “expiration date” for the authority of the unwritten traditions. Is there, for instance, scripture that prophecies the creation of a new, written testament—for some reason centuries after the Ascension—that will displace all other traditions? I have yet to find any, myself.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Rom.3.2"],
      text: "El Catecismo extenso lo cita para la recepción de los libros del Antiguo Testamento por medio de la Iglesia hebrea (Filareto, pregunta 32).",
    },
    {
      refs: ["Luke.24.44"],
      text: "El Catecismo extenso lo cita para la designación «Ley de Moisés» en su relato de los libros de la Escritura (Filareto, pregunta 37).",
    },
  ],
  passages: {
    title: "Los pasajes de la posición ortodoxa",
    lede: "Los versículos que la tradición ortodoxa cita sobre la Escritura y la Tradición, completos y con su propia lectura.",
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
      "Para el Catecismo extenso de Filareto, el Salterio es un manual perfecto de oración y alabanza y por eso se usa continuamente en el culto divino de la Iglesia (pregunta 42) {c:OPhilaret42|Filareto, pregunta 42}.",
      "Y la Confesión de Dositeo dice sobre el canon: «Los consideramos libros canónicos y confesamos que son Sagrada Escritura» {c:ODositheusQuestion_III|Dositeo, pregunta III}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "El canon: la confesión griega",
        text: "Tras enumerar los libros, la Confesión de Dositeo dice: «Los consideramos libros canónicos y confesamos que son Sagrada Escritura».",
        sources: [
          {
            citations: ["ODositheusQuestion_III"],
            label: "Dositeo, pregunta III",
          },
        ],
      },
      {
        id: "CV-2",
        label: "El canon: el testimonio ruso",
        text: "El Catecismo extenso de Filareto cuenta los libros del Antiguo Testamento en veintidós, de acuerdo con los judíos y su lista hebrea original (pregunta 31); no incluye el Sirácida y otros libros porque no existen en hebreo (pregunta 34), y dice que fueron destinados a ser leídos por quienes se preparan para ingresar en la Iglesia (pregunta 35).",
        sources: [
          {
            citations: ["OPhilaret31"],
            label: "Filareto, pregunta 31",
          },
          {
            citations: ["OPhilaret34"],
            label: "Filareto, pregunta 34",
          },
          {
            citations: ["OPhilaret35"],
            label: "Filareto, pregunta 35",
          },
        ],
      },
      {
        id: "CV-3",
        label: "La lectura litúrgica",
        text: "El Salterio es un manual perfecto de oración y alabanza, y por eso se usa continuamente en el culto divino de la Iglesia (pregunta 42).",
        sources: [
          {
            citations: ["OPhilaret42"],
            label: "Filareto, pregunta 42",
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
          "Confesión del Sínodo de Jerusalén de 1672. Pedro Mogila tiene la aprobación patriarcal de su revisión griega del 11 de marzo de 1643, limitada al griego y no a toda traducción posterior.",
        source: {
          citations: ["ODositheusII"],
          label: "Dositeo II",
        },
      },
      catechism: {
        label: "Catecismo extenso de Filareto (1839)",
        definition:
          "Catecismo sinodal ruso de 1839, con la numeración de preguntas de Schaff. Su descripción doctrinal no es un relevamiento de todas las Iglesias autocéfalas.",
        source: {
          citations: ["OPhilaret16"],
          label: "Filareto, pregunta 16",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
