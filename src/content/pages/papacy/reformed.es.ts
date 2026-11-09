import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const papacyReformed = {
  doctrine: "papacy",
  tradition: "reformed",
  status: "draft",
  title: "La posición reformada",
  lede: "Cómo los Estándares de Westminster entienden la Iglesia, su gobierno y el papado, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan los Estándares de Westminster sobre la Iglesia, su gobierno y el papado, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de Westminster describe así la iglesia universal e invisible: «que han sido, ó son, ó serán reunidos en uno y sometidos á Cristo la cabeza de la Iglesia; y esta es la esposa, la plenitud de El quien llena todas las cosas en todos».",
      grades: [
        {
          kind: "church",
          grade: "standards",
          basis: "Confesión de Westminster 25.1",
        },
      ],
      sources: [
        {
          citations: ["RWCF25_1"],
          label: "Westminster 25.1",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la iglesia visible",
        text: "La Confesión de Westminster nombra la iglesia visible: «el reino del Señor Jesu-Cristo [...] la casa y familia de Dios».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 25.2",
          },
        ],
        sources: [
          {
            citations: ["RWCF25_2"],
            label: "Westminster 25.2",
          },
        ],
      },
      {
        id: "QE-2",
        short: "el ministerio de la Iglesia",
        text: "La Confesión de Westminster enseña: «A esta iglesia católica visible, Cristo ha dado el ministerio, los oráculos, y las ordenanzas de Dios; para juntar y perfeccionar á los santos, en la vida presente, hasta el fin del mundo, haciéndoles suficientes para este fin, segun su promesa, por su presencia y Espíritu.».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 25.3",
          },
        ],
        sources: [
          {
            citations: ["RWCF25_3"],
            label: "Westminster 25.3",
          },
        ],
      },
      {
        id: "QE-3",
        short: "el gobierno de la Iglesia",
        text: "La Confesión de Westminster enseña: «El Señor Jesus, como Rey y Cabeza de su iglesia, ha establecido en ella un gobierno regido por oficiales eclesiásticos distintos del magistrado civil.».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 30.1",
          },
        ],
        sources: [
          {
            citations: ["RWCF30_1"],
            label: "Westminster 30.1",
          },
        ],
      },
      {
        id: "QE-4",
        short: "el rechazo de una cabeza papal",
        text: "La Confesión de Westminster, en su texto histórico, enseña: «No hay otra cabeza de la iglesia sino el Señor Jesu-Cristo [...] Ni puede el papa de Roma ser la cabeza de ella en ningun sentido; pues es aquel anti-cristo, aquel inícuo, é hijo de perdicion, que se ensalza en la iglesia contra Cristo, y contra todo lo que se llama Dios».",
        status: ["STWCF~p"],
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 25.6",
          },
        ],
        sources: [
          {
            citations: ["RWCF25_6"],
            label: "Westminster 25.6",
          },
        ],
      },
      {
        id: "QE-5",
        short: "la Iglesia que permanece y puede errar",
        text: "La Confesión de Westminster dice de las iglesias más puras: «están expuestas á errar en doctrina y práctica». Y dice: «siempre habrá una iglesia en la tierra, para adorar á Dios conforme á su voluntad».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 25.5",
          },
        ],
        sources: [
          {
            citations: ["RWCF25_5"],
            label: "Westminster 25.5",
          },
        ],
      },
      {
        id: "QE-6",
        short: "sínodos y concilios",
        text: "La Confesión de Westminster, en su numeración histórica, atribuye a los sínodos y concilios la determinación ministerial de controversias, casos de conciencia, culto y gobierno, con sumisión a lo que concuerde con la Palabra de Dios (31.3), y dice que pueden errar (31.4).",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 31.3 y 31.4, numeración histórica",
          },
        ],
        sources: [
          {
            citations: ["RWCF31_3"],
            label: "Westminster 31.3",
          },
          {
            citations: ["RWCF31_4"],
            label: "Westminster 31.4",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para el Catecismo Menor de Westminster, Cristo ejerce su oficio de Rey: «Cristo ejecuta el oficio de Rey sujetándonos á sí mismo, rigiendo y defendiéndonos, y restringiendo y venciendo á todos sus enemigos y los nuestros.» {c:RWSC26|Catecismo Menor de Westminster 26}.",
      "Y la Confesión dice de los oficiales de la iglesia: «A estos oficiales, son entregadas las llaves del reino de los cielos, en virtud de lo cual, tienen poder para retener y remitir pecados; para cerrar aquel reino contra los impenitentes, por la palabra y por las censuras; y para abrirlo á los pecadores arrepentidos, por el ministerio del evangelio, y por la remocion de las censuras, segun exigen las circunstancias.» {c:RWCF30_2|Westminster 30.2}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Sobre la disciplina, la Confesión de Westminster dice: «Las censuras eclesiásticas son necesarias para corregir y hacer volver sobre sus pasos á los hermanos que ofenden; para impedir que otros cometan semejantes ofensas; para reivindicar el honor de Cristo, y la santa profesion del evangelio» {c:RWCF30_3|Westminster 30.3}.",
  },
  scriptureSubtitle:
    "Los pasajes que los Estándares de Westminster citan sobre la Iglesia, su gobierno y el papado, y cómo los leen.",
  scripture: [
    {
      refs: ["Eph.1.10", "Eph.1.22-Eph.1.23"],
      text: "La Confesión de Westminster lo cita para la reunión y la jefatura (Confesión 25.1).",
    },
    {
      refs: ["Col.1.18"],
      text: "La Confesión de Westminster lo cita para Cristo como cabeza (Confesión 25.1 y 25.6).",
    },
    {
      refs: ["Eph.5.23", "Eph.5.27", "Eph.5.32"],
      text: "La Confesión de Westminster lo cita para la iglesia como esposa y cuerpo (Confesión 25.1).",
      apologists: {
        arguments: [
          {
            title:
              "Ferguson dice que la imagen de un Dios fiel y de la iglesia como su esposa llega a su cumplimiento en Jesús: la iglesia es la esposa de Cristo, y Pablo dice en Efesios 5 que esta imagen está inscrita en la creación original de hombre y mujer, el matrimonio en el Edén y el nuestro siendo una imagen de Cristo y su pueblo; Pablo dice que algún día la iglesia será presentada con esplendor, sin mancha ni arruga, santa y sin defecto",
            quotes: [
              {
                speaker: "Sinclair B. Ferguson",
                work: "The Bride of Christ",
                outlet: "Things Unseen with Sinclair B. Ferguson",
                date: "15 de julio de 2026",
                locator: "Minutos 1:36 a 2:53",
                url: "https://ligonier.org/podcasts/things-unseen-with-sinclair-ferguson/the-bride-of-christ#t=96",
                text: "Esa imagen de un Dios fiel, fiel, y de la iglesia como novia de ese Dios, llega a su cumplimiento, por supuesto, en el Señor Jesús. La iglesia es la novia de Cristo. Y ustedes recuerdan que Pablo dice en Efesios 5 que esta imagen está en realidad incorporada en la creación original del hombre como varón y mujer, un hombre y una mujer, hechos el uno para el otro. Ese matrimonio en el Edén, y también nuestro matrimonio, están pensados para ser una imagen de la relación entre el Señor Jesús y su pueblo. Es una imagen de su asombroso amor por nosotros. Como dice el himno, desde el cielo vino y nos buscó para ser su preciosa novia. Con su propia sangre nos compró, y por nuestra vida murió. Y esta es una imagen que tiene muchas lecciones para enseñarnos. Pero aquí hay una de las más importantes. Pablo dice que un día la iglesia será presentada al Señor en esplendor, sin mancha ni arruga ni cosa semejante, para que sea santa y sin defecto. Piensen en eso cuando reflexionen sobre su propia comunión en la iglesia.",
                original:
                  "That picture of a faithful, faithful God and the church as that God's bride comes to its fulfillment, of course, in the Lord Jesus. The church is the bride of Christ. And you remember that Paul says in Ephesians 5 that this picture is actually embedded in the original creation of man as male and female, a man and a woman, made for each other. That marriage in Eden, and our marriage too, is intended to be a picture of the relationship between the Lord Jesus and His people. It's a picture of His amazing love for us. As the hymn puts it, from heaven he came and sought us to be his precious bride. With his own blood he bought us, and for our life he died. And this is a picture that has many lessons to teach us. But here's one of the most important. Paul says that one day the church will be presented to the Lord in splendor, without spot or wrinkle or any such thing, that she might be holy and without blemish. Think about that when you reflect on your own church fellowship.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.1.2", "1Cor.12.12-1Cor.12.13"],
      text: "La Confesión de Westminster lo cita para la iglesia visible en muchos lugares y un solo cuerpo (Confesión 25.2).",
      apologists: {
        arguments: [
          {
            title:
              "Waters dice que en Romanos 12 y 1 Corintios 12 Pablo habla de la iglesia como cuerpo, y que una preocupación es la unidad del cuerpo: Rom 12:4–5, «un cuerpo en Cristo, aunque somos muchos», y 1 Cor 12:12, «así como el cuerpo es uno y tiene muchos miembros, y todos los miembros del cuerpo, siendo muchos, son un solo cuerpo, así también es Cristo»; Pablo da esta unidad como algo dado, un hecho, no como una exhortación a buscarla",
            quotes: [
              {
                speaker: "Guy Waters",
                work: "The Church and the Christian Life",
                outlet: "Renewing Your Mind",
                date: "10 de octubre de 2026",
                locator: "Minutos 3:56 a 5:24",
                url: "https://renewingyourmind.org/2026/10/10/the-church-and-the-christian-life#t=236",
                text: "Y en Romanos 12 y 1 Corintios 12, habla de la iglesia como cuerpo. Y creo que de la discusión de Pablo sobre la iglesia como cuerpo en estos capítulos surgen dos cosas. Una preocupación para Pablo es que los creyentes entiendan la unidad del cuerpo. Romanos 12, 4, un cuerpo. El versículo siguiente, un cuerpo en Cristo, aunque somos muchos, somos un cuerpo en Cristo. 1 Corintios 12, en el versículo 12, así como el cuerpo es uno y tiene muchos miembros, todos los miembros del cuerpo, aunque son muchos, son un solo cuerpo. Así es con Cristo. Ahora bien, fíjense que cuando Pablo habla de la unidad del cuerpo, no la presenta aquí como una exhortación. Procuren una unidad que no tienen. Más bien, es un hecho dado. Es un dato. Pablo dice que ustedes son uno en Cristo. Y eso tiene implicaciones, por supuesto, para la manera en que debemos vivir. Es revelador que Pablo les diga a iglesias desgarradas por la división y las facciones que son uno.",
                original:
                  "And in Romans 12 and 1 Corinthians 12, he speaks of the church as body. And two things, I think, emerge from Paul's discussion of the church as body in these chapters. One concern for Paul is that believers understand the unity of the body. Romans 12, 4, one body. The very next verse, one body in Christ, though we are many, we are one body in Christ. 1 Corinthians 12, at the 12th verse, just as the body is one and has many members, All the members of the body, though many, are one body. So it is with Christ. Now notice when Paul talks about the unity of the body, he doesn't here give it as an exhortation. Pursue a unity that you don't have. Rather, it is a given. It is a fact. Paul says you are one in Christ. And that has implications, of course, for the way we're to live. It's telling that Paul tells churches that are racked by division and faction that they are one.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.4.11-Eph.4.13"],
      text: "La Confesión de Westminster lo cita para el ministerio y la perfección de los santos (Confesión 25.3).",
      apologists: {
        arguments: [
          {
            title:
              "Parsons dice que el Nuevo Testamento usa varios términos: «pastor» (gr. poimén, pastor de ovejas) aparece en Efesios 4 como pastor-maestro, y en Tito 1 Pablo le dice a Tito que designe ancianos (presbíteros) en cada ciudad, quienes sirven a la iglesia gobernándola y dirigiéndola bajo Cristo",
            quotes: [
              {
                speaker: "Burk Parsons",
                work: "What Is the Difference between Pastors, Elders, and Overseers?",
                outlet: "Ask Ligonier",
                date: "27 de julio de 2023",
                locator: "Minutos 0:46 a 1:55",
                url: "https://ask.ligonier.org/podcast-episodes/what-is-the-difference-between-pastors-elders-and-overseers#t=46",
                text: "cuando miramos el Nuevo Testamento, vemos a los autores del Nuevo Testamento usando todos estos diferentes términos. Ven la palabra pastor, y esa palabra viene de la palabra griega poimén, que significa pastor. Vemos esa palabra usada en Efesios 4 y en otros lugares como el pastor-maestro o pastor-enseñante. Y luego vemos en pasajes como Tito capítulo 1, donde Pablo escribe a Tito: esta es la razón por la que te dejé en Creta, para que pusieras en orden lo que quedaba y nombraras ancianos en cada ciudad como yo te indiqué. Y la palabra anciano allí, tal como se usa en Tito y en todo el Nuevo Testamento, es una palabra que traduce la palabra griega presbýteros. Ahora, por supuesto, ustedes oyen la palabra presbýteros y reconocen que el cognado que tenemos para presbýteros en inglés es presbyter. De ahí viene el presbiterianismo. Y así, presbýteros o presbýteroi en plural son ancianos. Y son los que sirven a la iglesia gobernando y",
                original:
                  "when we look at the New Testament, we see the New Testament authors using all of these different terms. You see the word pastor, and that word is from the Greek word poimen, which means shepherd. We see that word being used in Ephesians 4 and elsewhere as the pastor teacher or shepherd teacher. And then we see in passages like Titus chapter 1, where Paul writes to Titus, this is why I left you in Crete, so that you might put what remained into order and appoint elders in every town as I directed you. And the word elder there, as it's used in Titus and throughout the New Testament, is a word that is translating the Greek word presbyteros. Now, of course, you hear the word presbyteros and recognize that the cognate that we have for presbyteros in English is presbyter. We get Presbyterianism from that. And so presbyteros or presbuteroi in the plural are elders. And they are those who serve the church by ruling and",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Reeder dice que Cristo reina sobre la iglesia desde el cielo por su posición a la diestra del Padre y, funcionalmente, por su palabra y su Espíritu, y por dar: «el que descendió es el mismo que ascendió y dio dones a los hombres», dando apóstoles para el liderazgo en los lugares oficiales de la iglesia, pastores y maestros, y dones a cada miembro; él también es la cabeza de su iglesia, a la que envía como embajada del reino",
            quotes: [
              {
                speaker: "Harry Reeder",
                work: "In What Way Is Christ Presently Reigning over the Church?",
                outlet: "Ask Ligonier",
                date: "18 de agosto de 2022",
                locator: "Minutos 0:23 a 2:00",
                url: "https://ask.ligonier.org/podcast-episodes/in-what-way-is-christ-presently-reigning-over-the-church#t=23",
                text: "Bueno, él está en el cielo, y reina sobre la iglesia por su posición de autoridad, y ha sido colocado a la diestra del Padre. Y reina sobre la iglesia funcionalmente por su palabra y con su Espíritu. Así que nos ha enviado la palabra de Dios, y nos ha enviado el Espíritu de Dios, y reina por medio de ellos. En segundo lugar, reina por su liderazgo benevolente al dar. La Biblia dice: el que descendió es el mismo que ascendió y dio dones a los hombres. Así que reina dando apóstoles, es decir, hombres para el liderazgo en los lugares oficiales de la iglesia. Da a la iglesia mujeres y sus dones. Así que da personas a la iglesia. Da ministerios a la iglesia, pastores, maestros, etcétera. Y también da dones a cada miembro de la iglesia. Así que cada uno está dotado por el Espíritu Santo con su don espiritual. Hay ministerios que Cristo ha establecido en su iglesia y dado a la iglesia. Y hay personas que él ha salvado y se las da a la iglesia. Fueron bautizados y añadidos a la iglesia. Así que son parte de las piedras vivas que forman el templo del Nuevo Testamento de Dios. Y así él gobierna y reina. En segundo lugar, es la cabeza de su iglesia, y ahora envía a su iglesia como embajada del reino de Dios para extender el reino de Dios a este mundo.",
                original:
                  "Well, he is in heaven, and he is reigning over the church by his position of authority, and that he has been placed at the right hand of the Father. And he is reigning over the church functionally by his word and with his spirit. So he has sent us the word of God, and he has sent us the spirit of God, and he is reigning through that. Secondly, he is reigning by his benevolent leadership of giving. The Bible says, he who descended is he who ascended and gave gifts to men. So he is reigning through giving apostles, that's men for leadership in the official places of the church. He is giving women and their giftedness to the church. So he gives people to the church. He gives ministries to the church, pastors, teachers, et cetera. And he also gives gifts to every single member of the church. So everyone is gifted by the Holy Spirit with their spiritual gift. There are ministries that Christ has established in his church and given to the church. And there are people that he has saved and gives them to the church. They were baptized and added to the church. So they are a part of the living stones that make up the New Testament temple of God. And so he's ruling and reigning. Secondly, he is the head over his church, and now he is sending his church as the embassy of the kingdom of God to extend the kingdom of God into this world.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Isa.59.21", "Matt.28.19-Matt.28.20"],
      text: "La Confesión de Westminster lo cita para el Espíritu, la palabra y la comisión que continúa (Confesión 25.3).",
      apologists: {
        arguments: [
          {
            title:
              "Tweeddale dice que la frase más importante de la Gran Comisión es «se me ha dado toda autoridad en el cielo y en la tierra» (Mt 28); los teólogos reformados distinguen la autoridad universal de Cristo como Hijo eterno y Señor de la creación, que no nos ha delegado, de su autoridad mediadora sobre la iglesia, que es la autoridad de Mt 28, delegada a quienes ministran en su nombre: predican la palabra, oran, leen las Escrituras y llaman al arrepentimiento",
            quotes: [
              {
                speaker: "John Tweeddale",
                work: "Do Christians Have Authority Over Sickness?",
                outlet: "Ask Ligonier",
                date: "25 de junio de 2020",
                locator: "Minutos 2:41 a 4:23",
                url: "https://ask.ligonier.org/podcast-episodes/do-christians-have-authority-over-sickness/#t=161",
                text: "La frase más importante de la Gran Comisión aparece en Mateo 28, 17, donde Jesús dice: Me ha sido dada toda autoridad en el cielo y en la tierra. Ahora bien, a lo largo de la historia de la Iglesia, los teólogos reformados han distinguido la autoridad de Cristo de dos maneras. Por un lado, hablan de la autoridad universal de Cristo como Hijo eterno, como segunda persona de la Trinidad, como Señor de la creación, como creador y sustentador de todas las cosas. Y en ese sentido, Cristo es Señor del universo, de los mares, de las sanidades en nuestro cuerpo y de la enfermedad. Y Cristo a veces ha sanado, pero los asuntos ordinarios de la vida nos harían creer que la mayoría de las veces, el salario del pecado es muerte, y la muerte es una parte natural del mundo caído. Y así Jesús es gobernador del cielo y de la tierra, pero no ha delegado esa autoridad en nosotros. El segundo tipo de autoridad que tenemos es la autoridad mediadora de Jesús. Esa es la autoridad que tiene sobre la iglesia, y es la autoridad de la que habla Jesús en Mateo 28. Así que delega su autoridad en quienes ministran en su nombre. Por eso predicamos la palabra. Intercedemos ante el cielo. Leemos la Escritura. Llamamos al arrepentimiento.",
                original:
                  "The most important phrase in the Great Commission comes in Matthew 28, 17, where Jesus says, All authority in heaven and earth has been given to me. Now, throughout the history of the Church, Reformed theologians have distinguished Christ's authority in two ways. On the one hand, they talk about Christ's universal authority as the eternal Son, as the second person of the Trinity, as the Lord of creation, as the creator and sustainer of all things. And in that sense, Christ is Lord over the universe, over the seas, over healings in our body and of sickness. And Christ at times has healed, but the ordinary affairs of life would lead us to believe that most of the time, the wages of sin is death and death is a natural part of the fallen world. And so Jesus is governor of the heaven and earth, but he has not delegated that authority to us. The second kind of authority we have is Jesus's mediatorial authority. That's the authority he has over the church, and that's the authority Jesus speaks about in Matthew 28. So he delegates his authority to those who minister in his name. So we preach the word. We pray down heaven. We read scripture. We call for repentance.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.13.12", "Matt.13.24-Matt.13.30", "Matt.13.47"],
      text: "La Confesión de Westminster lo cita para la falibilidad y la mezcla (Confesión 25.5).",
      apologists: {
        arguments: [
          {
            title:
              "Cooper dice que no todos los que parecen miembros de la iglesia de Dios lo son realmente: la iglesia visible comprende a todos los que dicen seguir a Cristo, la iglesia invisible a todos los que realmente lo siguen; repite la parábola de Jesús en Mt 13 del trigo y la cizaña, el enemigo que las sembró y la orden del amo de dejar crecer ambas juntas hasta la cosecha",
            quotes: [
              {
                speaker: "Barry Cooper",
                work: "The Visible and Invisible Church",
                outlet: "Simply Put",
                date: "12 de noviembre de 2024",
                locator: "Minutos 0:44 a 2:16",
                url: "https://ligonier.org/podcasts/simply-put/the-visible-and-invisible-church#t=44",
                text: "No todo el que se identifica como miembro de los medios de comunicación es realmente miembro de los medios de comunicación, y del mismo modo no todo el que parece ser miembro de la iglesia de Dios es realmente miembro de la iglesia de Dios. Eso es lo que queremos decir con iglesia visible e invisible. La iglesia visible comprende a todos los que afirman ser o se identifican como seguidores de Cristo. La iglesia invisible comprende a todos los que realmente son seguidores de Cristo. Jesús cuenta una historia sobre esto en Mateo capítulo 13. Un hombre siembra buena semilla en su campo, y sus siervos quedan perplejos cuando el campo resulta tener cizaña además de trigo. Pensábamos que solo sembraste trigo. ¿Qué pasa con toda esta cizaña? El amo dice, bastante ominosamente: un enemigo ha hecho esto. Entonces, ¿qué quieren que hagamos?, dicen los siervos. ¿Vamos a arrancar toda la cizaña? No, dice el amo. Si hacen eso, podrían arrancar por accidente lo bueno. Dejen que crezcan juntos. Yo los separaré de una vez por todas cuando llegue el tiempo de la cosecha. Lo curioso de la cizaña y el trigo, como descubrí a mediados de los años ochenta durante una breve temporada como jardinero, es que no siempre es fácil distinguir entre una mala hierba y una flor premiada. Algunas de las malezas más destructivas se ven hermosas, y algunas plantas que lucen muy poco atractivas en sus primeras etapas crecen hasta convertirse en las orquídeas más espectaculares. Realmente necesitas un jardinero experto para saber la diferencia.",
                original:
                  "Not everyone who identifies as a member of the media is actually a member of the media and in the same way not everyone who seems to be a member of God's church is actually a member of God's church. That's what we mean by the visible and invisible church. The visible church comprises all those who claim to be or identify as followers of Christ. The invisible church comprises all those who really are followers of Christ. Jesus tells a story about this in Matthew chapter 13. A man sows good seed in his field and his servants are perplexed when the field turns out to have weeds in it as well as wheat. We thought you only sowed wheat. What's with all the weeds? The master says rather ominously, an enemy has done this. So what would you like us to do, say the servants. Shall we go and root up all the weeds? No, says the master. If you do that, you might accidentally root up the good stuff. Let them both grow together. I will separate them once and for all when the time comes for the harvest. The thing about wheat and weeds, as I discovered in the mid-1980s during a short-lived stint as a gardener is that it isn't always easy to spot the difference between a weed and a prize-winning flower. Some of the most destructive weeds look beautiful, and some plants which look very unprepossessing in their early stages grow up to be the most stunning orchids. You really need an expert gardener to know the difference.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.16.18"],
      text: "La Confesión de Westminster lo cita para la permanencia de la iglesia (Confesión 25.5).",
      apologists: {
        arguments: [
          {
            title:
              "La roca es la confesión de Pedro sobre Cristo; la autoridad de las llaves se da en Mateo 18:18 a los apóstoles en conjunto, y la entrega de las llaves a Pedro como superior a los demás no consta en ningún lugar",
            quotes: [
              {
                speaker: "James White",
                work: "James White - Peter & The Papacy",
                outlet: "Apologia Studios, YouTube",
                date: "22 de enero de 2024",
                locator: "Minutos 35:29 a 42:47",
                url: "https://www.youtube.com/watch?v=N2CbLHUBcs4&t=2129s",
                text: "16 es un pasaje singularmente importante aquí. El Señor Jesús conduce a sus discípulos a una confesión de fe en él mismo; el Padre desde el cielo revela la verdadera naturaleza de su Hijo, Jesús el Mesías. Es un pasaje central en el Evangelio de Mateo. Antes de discutir este pasaje, puede decirse mucho, así que voy a hacerlo muy brevemente. Hay que entender que la erudición y la apologética católica romana modernas afirman que el original de estas palabras estaba en arameo, y que por lo tanto se puede tener kea por sephus, y se construye todo un caso sobre la base del idioma arameo. Bueno, aquí está el problema: no tenemos un original en arameo. El Evangelio que Roma dice que canonizó, y Roma afirma tener autoridad para canonizar las Escrituras, es el que se canonizó, y estaba en griego, no en arameo. Así que toda la especulación que pone en lo que habría sido el arameo, y hay obras eruditas enteras que sugieren términos distintos en el arameo; el trabajo de Chris Carona de los años 90 sugirió que el término ahí debería haber sido minra y no sephus, y eso destruye todo el paralelismo que proponen, etcétera. Me asombra que, si este es el texto clave que Roma tiene que leer en una lengua distinta de aquella en que lo escribió Mateo y en una forma que nunca hemos visto, eso sea así. Es realmente asombroso, de verdad es asombroso. Pero tenemos que ir más allá de eso; no tenemos tiempo para tratarlo. El tema central de este pasaje es la mesianidad de Jesucristo. Cualquier interpretación que quite el foco de Jesús como Mesías y lo ponga en Pedro está completamente perdiendo el punto. Las preguntas de Jesús a los discípulos sobre las opiniones de la multitud, e incluso sobre su propia comprensión, están todas dirigidas a su propio propósito, a su propia identidad. Cuando Pedro habla y confiesa que Jesús es el Mesías, el Cristo, el Hijo del Dios viviente, está confesando la fe de todos los discípulos, no solo la suya; habla por todos ellos, como tan a menudo hace. La bendición de Jesús a Pedro no se debe a ninguna bondad inherente en Pedro, sino a que Pedro es el destinatario de una gran bendición del Padre. El Padre le ha revelado a Pedro la verdadera identidad de Jesucristo. Ahora bien, los otros apóstoles no están sentados ahí diciendo: 'Es el Mesías, nunca lo supimos'. Difícilmente podemos pensar que todos se quedaron asombrados por las palabras de Pedro, que nunca se les había ocurrido que Jesús fuera el Mesías. El punto de las palabras de Jesús es que se requiere la obra del Padre para revelar al Hijo. Este mismo tema aparece en Juan, capítulo 6, donde 'nadie puede venir al Hijo si no es atraído por el Padre'. En ese mismo contexto, cuando todos los discípulos se apartaron de Jesús excepto los doce, fue Pedro quien habló por los discípulos, diciendo: 'Señor, ¿a quién iremos? Tú tienes palabras de vida eterna. Y creemos y sabemos que tú eres el Santo de Dios', Juan 6:68-69. El tema del pasaje sigue siendo la identidad de Cristo, hallada en la confesión de Pedro. Cuando el Señor dice: 'Te digo que tú eres Pedro, y sobre esta roca edificaré mi Iglesia, y las puertas del Hades no prevalecerán contra ella', el foco no cambia; Jesús no está hablando aquí de la identidad de Pedro, sigue hablando de sí mismo y de su Iglesia. Esto se ve claramente al seguir hasta el versículo 20, donde leemos que luego ordenó a sus discípulos que no le dijeran a nadie que él era el Mesías, el Cristo. Algunos eruditos modernos, sin haber notado que el foco permanece en Cristo de principio a fin, están tan desconcertados por este pasaje que sugieren que no es original, pero esa conjetura no es necesaria. La roca de la que habla el Señor es la confesión común que hacen todos los que son parte de la Iglesia: Jesús es el Cristo, el Hijo del Dios viviente. Creo que esto se ve en el hecho de que, mientras el Señor se dirige directamente a Pedro, cambia de la segunda persona a la tercera: 'esta roca'. Al hablar de la confesión de Pedro, no dice: 'Sobre ti, Pedro, edificaré mi Iglesia'; en cambio, hay una distinción clara entre Pedro, el Petros, y la tercera persona, la Petra: la confesión de fe, la piedra sobre la que se edifica la Iglesia. Ahora bien, en la Iglesia temprana hubo muchos que, pese al Vaticano 1, lo entendieron exactamente de esa misma manera. Esta declaración va seguida de la promesa de dar, en algún momento futuro, las llaves del Reino de los Cielos a Pedro, para que lo que ate en la tierra quede atado en el cielo y lo que desate en la tierra quede desatado en el cielo. Lo enfatizo como una promesa: el verbo está en futuro. Sin embargo, cuando vemos esta autoridad dada en Mateo 18:18, dos capítulos más adelante, se da no a Pedro solo ni principalmente, sino a todos los apóstoles, y con exactamente el mismo lenguaje, palabra por palabra, sobre atar y desatar. Así que escúchenme: si alguien quiere decir que Pedro recibe las llaves en distinción de los otros apóstoles, les recuerdo que eso es exactamente lo que dijo el Vaticano 1. Es una enseñanza dogmática: si niegan eso, son condenados por Roma. Pero si alguien quiere decir que Pedro recibe las llaves en distinción de los otros apóstoles como su superior, también tiene que admitir que la entrega de estas llaves nunca se registra en ninguna parte de la Escritura, algo extraño en verdad para algo supuestamente tan fundamental para la constitución de la Iglesia. Así que tienen que decir que Pedro recibió las llaves en Mateo 18:18, pero eso significa que las recibió junto con los otros apóstoles y no es su superior, o que las recibió en otro momento, quizá antes de Mateo 18, pero nadie consideró que valiera la pena registrarlo. Bien, ahora pueden mirar ese texto, y un católico romano lo mirará y dirá: 'Simplemente no",
                original:
                  "16 is a singularly important passage here the Lord Jesus leads his disciples to a confession of faith in himself the father from Heaven reveals the true nature of his son Jesus the Messiah it's a pivotal passage in Matthew's gospel before we can discuss this passage very briefly much can be said I'm going to do this very very briefly you need to understand that modern Roman Catholic scholarship and apologetics asserts that the original of these words was in Aramaic and therefore you can have Kea for sephus and you you build this whole case based upon the Aramaic language well here's the problem we don't have an Aramaic original the gospel that Rome claimed Rome claims authority to canonize scripture and the gospel that was canonized was Greek not Aramaic and so all the speculation that they put into what the Aramaic would have been and there are entire scholarly works that suggest different terms in the Aramaic one Chris carona's work from back in the 90s suggested uh that that minra should have been the term there and and not sephus and and it it destroys all of the the parallelism that they bring up so on so forth it is amazing to me that if this is the key text that Rome literally has to say we need to read it in a language other than it was written by Matthew and in a form we've never seen that is amazing it truly truly is amazing but we have to go past that we don't have time to to deal with that the central theme of this passage is the messiahship of Jesus Christ any interpretation that takes the focus off of Jesus as Messiah and puts it on Peter is completely missing the point Jesus questions to the disciples about the opinions of the multitudes and even their own understanding are all directed toward his own purpose his own identity when Peter speaks up and confesses that Jesus is the Messiah the Christ the son of the Living God he is confessing the faith of all the disciples not merely himself he is speaking for them all as he so often does Jesus's pronouncement of blessing upon Peter is not due to any inherent goodness in Peter but is due to Peter's being the recipient of a great blessing from the Father the father has revealed to Peter the true identity of Jesus Christ now the other Apostles aren't sitting there going he's the Messiah we never knew we can hardly think that they all sat there amazed at Peter's words never have even thought that Jesus was the Messiah the point of Jesus's words is that it requires the work of the father to reveal the son this same theme is struck in John chapter 6 where no man can come to the son un L drawn by the father in that same context when all the disciples turned away from Jesus except for the 12 it was Peter who spoke for the disciples against saying Lord to whom shall we go you have the words of eternal life we believe and know that you are the Holy One Of God John 6: 68-69 the subject of the passage Remains the identity of Christ found the confession of Peter when the Lord says I tell you are Peter and on this rock I will build my church and the gates of Hades will not overcome it the focus does not change Jesus is not here speaking of the identity of Peter he is still talking about himself and his church this is plainly seen by continuing on through verse 20 where we read then he warned his disciples not to tell anyone that he was the Messiah the Christ some Modern Scholars having missed the fact the focus remains on Christ all the way through are so puzzled by this passage they suggest that it's not original but that conjecture is not necessary the rock of which the Lord speaks is the common confession made by all who are part of the church Jesus is the Christ the son of the Living God this is seen I believe in the fact that while the Lord is addressing Peter directly he changes from direct address to the third person this rock when speaking of Peter's confession he does not say upon you Peter I will build my church instead you have a clear distinction between Peter the Petros and the third person Petra the confession of faith on pit upon which the church is built now by the way there were many in the early church despite Vatican 1 who understood it in exactly that same way this statement is followed by the promise to at some time in the future it's in the future tense at sometime it does not saying I am giving you Peter alone the keys the statement is followed by the promise to at sometime in the future give the keys the Kingdom of Heaven to Peter so that what he binds on Earth will be bound in heaven and whatever he looses on Earth will be loosed in heaven I emphasize this as a promise the verb is future tense yet when we see this Authority given in Matthew 18:18 so two chapters later Matthew 18:18 it is given not to Peter alone or even primarily but to all all the apostles and that using the exact same language word for word regarding binding and loosing so listen to me if someone wishes to say that Peter receives the keys in distinction from the other Apostles and I just remind you that's exactly what Vatican 1 said that's a dogmatic teaching you deny that and you are a cursed by Rome but if someone wishes to say that Peter receives the keys in distinction from the other Apostles as their Superior they are also forced to admit that the giving of these Keys is never recorded for us anywhere in scripture a strange thing indeed for something supposedly so foundational to the Constitution of the church so you either have to say Peter received the keys and Matthew 18:18 but that means he received it right along with the other Apostles and is not their Superior or he received it some other time maybe before Matthew 18 but no one thought it important enough to actually record it okay now you may look at that text and a Roman Catholic will look at that and say well I just don't",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "La idea de que Pedro mismo es la roca, y no su confesión, la articuló por primera vez un obispo de Roma en el siglo III; una opinión solitaria, que ni siquiera siguieron todos los obispos de Roma posteriores, y un desarrollo tardío en Occidente, nunca en Oriente",
            quotes: [
              {
                speaker: "W. Robert Godfrey",
                work: "How did the early church fathers interpret the “rock” of Matthew 16?",
                outlet: "Ligonier Ministries, YouTube",
                date: "8 de marzo de 2019",
                locator: "Minutos 0:00 a 0:56",
                url: "https://www.youtube.com/watch?v=gpaTKCiLnOc&t=0s",
                text: "Diría que, si esta fuera la ronda rápida, podríamos decir que sí, es cierto. La noción de que el propio Pedro era la roca, y no su confesión, parece haber sido articulada por primera vez por un obispo de Roma en el siglo III. Ahora bien, el siglo III es muy temprano en relación con nosotros, pero es mucho tiempo después de Jesús: doscientos, doscientos cincuenta años después de Jesús. Y esto fue, al principio, un punto de vista bastante solitario del obispo de Roma, que ni siquiera fue seguido por todos los obispos de Roma posteriores en el período de la Iglesia antigua. Así que sí, en líneas generales creo que la noción de que el propio Pedro era la roca es un desarrollo relativamente tardío en la Iglesia occidental, nunca en la oriental, y en una parte posterior del período antiguo. Y muchos intérpretes anteriores lo habrían visto de otra manera.",
                original:
                  "I would say, if this were the lightning round we could say, true. The notion that Peter himself was the rock rather than his confession being the rock seems first to be articulated by a bishop of Rome in the third century. Now, the third century is very early relative to us, but it's a long time after Jesus. Two hundred, two hundred and fifty years after Jesus. And this is a sort of solitary point of view of the Bishop of Rome initially, not even followed up by all later bishops of Rome in the ancient church period. So yes, I think generally speaking, the notion that Peter himself was the rock is a relatively late development in the Western church, never in the Eastern church, and in a later part of the ancient period. And many earlier interpreters would've seen that differently.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.1.22"],
      text: "La Confesión de Westminster lo cita para la jefatura de Cristo (Confesión 25.6).",
    },
    {
      refs: ["Matt.23.8-Matt.23.10"],
      text: "La Confesión de Westminster lo cita para el rechazo de otra cabeza (Confesión 25.6).",
    },
    {
      refs: ["2Thess.2.3-2Thess.2.5"],
      text: "La Confesión de Westminster lo cita para la cláusula histórica sobre el Anticristo (Confesión 25.6).",
      apologists: {
        arguments: [
          {
            title:
              "Sproul lee 2 Tes 2:3: el día no vendrá sin que antes venga la apostasía y se revele el hombre de pecado; explica que un apóstata es alguien dentro de la comunidad del pacto que repudia una profesión de fe, cita la opinión de Benjamin Warfield de que Pablo se refiere a la apostasía judía del siglo primero, y continúa con «el hombre de pecado, el hijo de perdición, que se opone y se exalta sobre todo lo que se llama Dios»",
            quotes: [
              {
                speaker: "R. C. Sproul",
                work: "The Antichrist: The Last Days According to Jesus with R.C. Sproul",
                outlet: "Ligonier Ministries",
                date: "9 de septiembre de 2019",
                locator: "Minutos 11:37 a 13:56",
                url: "https://www.youtube.com/watch?v=aDYBQjF93Ko&t=697s",
                text: "Ese día no llegará sin que antes venga la apostasía. Y ahora se refiere a una apostasía. Eso es lo que significa apostatar: un repudio de la fe verdadera. Ahora recuerden la diferencia entre paganismo y apostasía. Un pagano es un incrédulo que nunca ha hecho una profesión de fe. Un apóstata es alguien que hace una profesión de fe y luego repudia esa profesión de fe. Es decir, un apóstata solo puede ser alguien que está dentro de la comunidad del pacto, dentro de la iglesia visible. Benjamin Warfield está convencido de que en este texto Pablo no está hablando de una apostasía que tendrá lugar al final de la historia, en la manifestación de maldad y decadencia moral dentro de la iglesia cristiana. Está hablando de la apostasía de los judíos en el siglo primero, que fue un problema importante que se narra en el Nuevo Testamento. Cristo vino a lo suyo, y los suyos no lo recibieron. Pablo tenía una carga tremenda y constante por sus parientes según la carne, Israel. El autor de Hebreos advierte a la generación actual del pueblo judío sobre el peligro terrible de descuidar la gran salvación que había llegado. Y así, la apostasía de los judíos, o la apostasía de Israel, está ligada a aquella generación de judíos que rechazó al Mesías que había aparecido en medio de ellos. Y eso indicaría una gran apostasía. Pero luego Pablo continúa diciendo: que ese día no llegará sin que antes venga la apostasía y se manifieste el hombre de pecado, el hijo de perdición, el que se opone y se exalta por encima de todo lo que se llama Dios o es objeto de culto.",
                original:
                  "That day will not come unless the falling away comes first. And now he's referring to an apostasy. That's what it means to fall away, a repudiation of true faith. Now remember the difference between paganism and apostasy. A pagan is one who is an unbeliever who has never made a profession of faith. An apostate is someone who makes a profession of faith and then later repudiates that profession of faith. That is, an apostate can only be someone who is within the covenant community, within the visible church. Benjamin Warfield is convinced that in this text Paul is not talking about an apostasy that will take place at the end of history in the manifestation of wickedness and moral decline within the Christian church. He's talking about the apostasy of the Jews in the first century, which was a major problem that is recounted in the New Testament. Christ came to His own, His own received Him not. Paul had this tremendous ongoing burden for his own kinsmen according to the flesh, Israel. The author of Hebrews warns that current generation of Jewish people about the dire danger of neglecting the great salvation that had come. And so the apostasy of the Jews or the apostasy of Israel is tied to that generation of Jews who rejected the Messiah that had appeared in their midst. And that would indicate a great falling away. But then Paul goes on to say, that day will not come unless the falling away comes first and the man of sin is revealed, the son of perdition, who opposes and exalts himself above all that is called God or that is worship.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Isa.9.6-Isa.9.7"],
      text: "La Confesión de Westminster lo cita para el gobierno de Cristo (Confesión 30.1).",
      apologists: {
        arguments: [
          {
            title:
              "En una charla sobre la confesión de Pedro en Mt 16:16, Ferguson dice que Pedro conocía el Salmo 2, que el Mesías sería el hijo sentado en el trono de Dios, y que Isaías había hablado de él como Consejero admirable, Dios fuerte, Padre eterno, Príncipe de paz (Is 9:6); estas piezas de revelación del Antiguo Testamento se estaban uniendo en un solo patrón que mostraba que el Jesús que Pedro conocía era el propio Hijo de Dios, el profeta, sacerdote y rey prometido",
            quotes: [
              {
                speaker: "Sinclair B. Ferguson",
                work: "Son of the Living God",
                outlet: "Things Unseen with Sinclair B. Ferguson",
                date: "27 de noviembre de 2025",
                locator: "Minutos 3:18 a 4:17",
                url: "https://ligonier.org/podcasts/things-unseen-with-sinclair-ferguson/son-of-the-living-god#t=198",
                text: "El éxodo fue obra de los tres que son uno y del uno que es tres. Y Pedro también debe haber conocido la manera en que el Salmo 2 prometió que, cuando viniera el Mesías, sería el hijo que Dios pondría en su trono. E Isaías había hablado de él como el Consejero admirable, el Dios poderoso, el Padre eterno, el Príncipe de paz. Ahora bien, Pedro todavía no lo entendía del todo, pero estas piezas caleidoscópicas de la revelación del Antiguo Testamento estaban empezando a unirse en un solo patrón que se volvía claro. Y ese patrón le decía que el Jesús que conocía era el Hijo propio de Dios. Era el Hijo propio de Dios quien había venido a ser el profeta, sacerdote y rey prometido. Y empezar a verlo con claridad no sucede de forma natural. No a Simón Pedro, no a",
                original:
                  "The Exodus was the work of the three who are one and the one who is three. And Peter must also have known the way the second Psalm promised that when the Messiah came, he would be the son that God would set on his throne. And Isaiah had spoken of him as the wonderful counselor, the mighty God, the everlasting Father, the Prince of Peace. Now, Peter didn't yet fully understand, but these kaleidoscopic pieces of the Old Testament revelation were now all coming together in a single pattern that was becoming clear. And that pattern told him that the Jesus he knew was God's own Son. It was God's own Son who had come to be the promised prophet and priest and king. And beginning to see that clearly doesn't happen naturally. Not to Simon Peter, not to",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Tim.5.17", "1Thess.5.12"],
      text: "La Confesión de Westminster lo cita para los oficiales y el gobierno (Confesión 30.1).",
      apologists: {
        arguments: [
          {
            title:
              "Parsons dice que entre los ancianos algunos se inclinan más a gobernar y otros a predicar, como en 1 Timoteo 5: «los ancianos que gobiernan bien sean tenidos por dignos de doble honor, especialmente los que trabajan en la predicación y la enseñanza»; Dios llama y dota a ciertos hombres para predicar, y por las calificaciones de 1 Timoteo 3 y Tito 1 todos los ancianos deben estar capacitados para enseñar",
            quotes: [
              {
                speaker: "Burk Parsons",
                work: "What Is the Difference between Pastors, Elders, and Overseers?",
                outlet: "Ask Ligonier",
                date: "27 de julio de 2023",
                locator: "Minutos 5:47 a 6:35",
                url: "https://ask.ligonier.org/podcast-episodes/what-is-the-difference-between-pastors-elders-and-overseers#t=347",
                text: "oficiales de la iglesia que Dios nos ha dado. Entonces, ¿cuál es la respuesta a esto? Bueno, ciertamente entendemos que entre los ancianos hay algunos más inclinados a gobernar, y otros más inclinados a predicar. De hecho, incluso Pablo en 1 Timoteo capítulo 5 leemos lo siguiente: que los ancianos que gobiernan bien sean considerados dignos de doble honor, especialmente los que trabajan en la predicación y la enseñanza. Entendemos que Dios llama y dota a ciertos hombres para predicar. Y así es. Pero también tenemos que entender que, según las calificaciones para el oficio de anciano en 1 Timoteo 3 y Tito 1, todos los ancianos deben ser aptos para enseñar. Si",
                original:
                  "officers of the church that God has given us. And so what's the answer to this? Well, we certainly understand that among the elders, we have certain elders that are more given to ruling, some elders that are more given to preaching. In fact, even Paul in 1 Timothy in chapter 5, we read the following, let the elders who rule well be considered worthy of double honor, especially those who labor in preaching and teaching. We understand that God calls and gifts certain men to preach. And that is the case. But we have to also understand that according to the qualifications for the office of elder in 1 Timothy 3 and Titus 1, that all elders should be apt to teach. If",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.12.28", "Ps.2.6-Ps.2.9", "John.18.36"],
      text: "La Confesión de Westminster lo cita para los oficios y el reino de Cristo (Confesión 30.1).",
      apologists: {
        arguments: [
          {
            title:
              "Pablo ordena a los apóstoles, luego a los profetas y a los maestros: el Nuevo Testamento enumera oficios sin mencionar a un papa",
            quotes: [
              {
                speaker: "James White",
                work: "James White - Peter & The Papacy",
                outlet: "Apologia Studios, YouTube",
                date: "22 de enero de 2024",
                locator: "Minutos 19:19 a 20:07",
                url: "https://www.youtube.com/watch?v=N2CbLHUBcs4&t=1159s",
                text: "Por ejemplo, dice en 2 Corintios 12:11 que de ninguna manera es inferior a los más eminentes de los apóstoles. Bueno, quizá estaba hablando de los 'superapóstoles' ahí, pero escribe a los corintios que Dios había puesto en la Iglesia, primero apóstoles, segundo profetas, tercero maestros, 1 Corintios 12:28. ¿Pablo dice: 'Primero el papa'? No, no dice nada de eso; ese no es el orden bíblico. Casi no hace falta decir que en todas las cartas de Pablo, en las que encontramos discusiones sobre apóstoles, obispos, diáconos y toda clase de otros cargos de ministerio en la Iglesia, nunca se dice una palabra sobre el oficio más importante de todos, el supuesto oficio de papa; y la razón es clara: tal oficio no existía. Ahora déjenme detenerme un momento antes de seguir; todo lo de Pablo es tan claro en el Nuevo",
                original:
                  "example he says in 2 Corinthians 12:11 that he is in no way inferior to the very chiefest of Apostles now maybe he was talking about the super Apostles there but he writes to the Corinthians that God had placed in the church first of all Apostles second prophets third teachers 1 Corinthians 12:28 Paul no isn't it first the pope no he doesn't say anything like that that's not the biblical order it hardly needs to be said that in all of Paul's letters in which we find discussions of Apostles Bishops deacons all sorts of other positions of ministry in the church never a word is said about the most important office of all the supposed office of Pope and the reason plain no such office existed now let me stop for just a moment before I continue all with Paul this is so plain in the New",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.16.19", "Matt.18.17-Matt.18.18"],
      text: "La Confesión de Westminster lo cita para las llaves y la disciplina (Confesión 30.2).",
      apologists: {
        arguments: [
          {
            title:
              "La roca es la confesión de Pedro sobre Cristo; la autoridad de las llaves se da en Mateo 18:18 a los apóstoles en conjunto, y la entrega de las llaves a Pedro como superior a los demás no consta en ningún lugar",
            quotes: [
              {
                speaker: "James White",
                work: "James White - Peter & The Papacy",
                outlet: "Apologia Studios, YouTube",
                date: "22 de enero de 2024",
                locator: "Minutos 35:29 a 42:47",
                url: "https://www.youtube.com/watch?v=N2CbLHUBcs4&t=2129s",
                text: "16 es un pasaje singularmente importante aquí. El Señor Jesús conduce a sus discípulos a una confesión de fe en él mismo; el Padre desde el cielo revela la verdadera naturaleza de su Hijo, Jesús el Mesías. Es un pasaje central en el Evangelio de Mateo. Antes de discutir este pasaje, puede decirse mucho, así que voy a hacerlo muy brevemente. Hay que entender que la erudición y la apologética católica romana modernas afirman que el original de estas palabras estaba en arameo, y que por lo tanto se puede tener kea por sephus, y se construye todo un caso sobre la base del idioma arameo. Bueno, aquí está el problema: no tenemos un original en arameo. El Evangelio que Roma dice que canonizó, y Roma afirma tener autoridad para canonizar las Escrituras, es el que se canonizó, y estaba en griego, no en arameo. Así que toda la especulación que pone en lo que habría sido el arameo, y hay obras eruditas enteras que sugieren términos distintos en el arameo; el trabajo de Chris Carona de los años 90 sugirió que el término ahí debería haber sido minra y no sephus, y eso destruye todo el paralelismo que proponen, etcétera. Me asombra que, si este es el texto clave que Roma tiene que leer en una lengua distinta de aquella en que lo escribió Mateo y en una forma que nunca hemos visto, eso sea así. Es realmente asombroso, de verdad es asombroso. Pero tenemos que ir más allá de eso; no tenemos tiempo para tratarlo. El tema central de este pasaje es la mesianidad de Jesucristo. Cualquier interpretación que quite el foco de Jesús como Mesías y lo ponga en Pedro está completamente perdiendo el punto. Las preguntas de Jesús a los discípulos sobre las opiniones de la multitud, e incluso sobre su propia comprensión, están todas dirigidas a su propio propósito, a su propia identidad. Cuando Pedro habla y confiesa que Jesús es el Mesías, el Cristo, el Hijo del Dios viviente, está confesando la fe de todos los discípulos, no solo la suya; habla por todos ellos, como tan a menudo hace. La bendición de Jesús a Pedro no se debe a ninguna bondad inherente en Pedro, sino a que Pedro es el destinatario de una gran bendición del Padre. El Padre le ha revelado a Pedro la verdadera identidad de Jesucristo. Ahora bien, los otros apóstoles no están sentados ahí diciendo: 'Es el Mesías, nunca lo supimos'. Difícilmente podemos pensar que todos se quedaron asombrados por las palabras de Pedro, que nunca se les había ocurrido que Jesús fuera el Mesías. El punto de las palabras de Jesús es que se requiere la obra del Padre para revelar al Hijo. Este mismo tema aparece en Juan, capítulo 6, donde 'nadie puede venir al Hijo si no es atraído por el Padre'. En ese mismo contexto, cuando todos los discípulos se apartaron de Jesús excepto los doce, fue Pedro quien habló por los discípulos, diciendo: 'Señor, ¿a quién iremos? Tú tienes palabras de vida eterna. Y creemos y sabemos que tú eres el Santo de Dios', Juan 6:68-69. El tema del pasaje sigue siendo la identidad de Cristo, hallada en la confesión de Pedro. Cuando el Señor dice: 'Te digo que tú eres Pedro, y sobre esta roca edificaré mi Iglesia, y las puertas del Hades no prevalecerán contra ella', el foco no cambia; Jesús no está hablando aquí de la identidad de Pedro, sigue hablando de sí mismo y de su Iglesia. Esto se ve claramente al seguir hasta el versículo 20, donde leemos que luego ordenó a sus discípulos que no le dijeran a nadie que él era el Mesías, el Cristo. Algunos eruditos modernos, sin haber notado que el foco permanece en Cristo de principio a fin, están tan desconcertados por este pasaje que sugieren que no es original, pero esa conjetura no es necesaria. La roca de la que habla el Señor es la confesión común que hacen todos los que son parte de la Iglesia: Jesús es el Cristo, el Hijo del Dios viviente. Creo que esto se ve en el hecho de que, mientras el Señor se dirige directamente a Pedro, cambia de la segunda persona a la tercera: 'esta roca'. Al hablar de la confesión de Pedro, no dice: 'Sobre ti, Pedro, edificaré mi Iglesia'; en cambio, hay una distinción clara entre Pedro, el Petros, y la tercera persona, la Petra: la confesión de fe, la piedra sobre la que se edifica la Iglesia. Ahora bien, en la Iglesia temprana hubo muchos que, pese al Vaticano 1, lo entendieron exactamente de esa misma manera. Esta declaración va seguida de la promesa de dar, en algún momento futuro, las llaves del Reino de los Cielos a Pedro, para que lo que ate en la tierra quede atado en el cielo y lo que desate en la tierra quede desatado en el cielo. Lo enfatizo como una promesa: el verbo está en futuro. Sin embargo, cuando vemos esta autoridad dada en Mateo 18:18, dos capítulos más adelante, se da no a Pedro solo ni principalmente, sino a todos los apóstoles, y con exactamente el mismo lenguaje, palabra por palabra, sobre atar y desatar. Así que escúchenme: si alguien quiere decir que Pedro recibe las llaves en distinción de los otros apóstoles, les recuerdo que eso es exactamente lo que dijo el Vaticano 1. Es una enseñanza dogmática: si niegan eso, son condenados por Roma. Pero si alguien quiere decir que Pedro recibe las llaves en distinción de los otros apóstoles como su superior, también tiene que admitir que la entrega de estas llaves nunca se registra en ninguna parte de la Escritura, algo extraño en verdad para algo supuestamente tan fundamental para la constitución de la Iglesia. Así que tienen que decir que Pedro recibió las llaves en Mateo 18:18, pero eso significa que las recibió junto con los otros apóstoles y no es su superior, o que las recibió en otro momento, quizá antes de Mateo 18, pero nadie consideró que valiera la pena registrarlo. Bien, ahora pueden mirar ese texto, y un católico romano lo mirará y dirá: 'Simplemente no",
                original:
                  "16 is a singularly important passage here the Lord Jesus leads his disciples to a confession of faith in himself the father from Heaven reveals the true nature of his son Jesus the Messiah it's a pivotal passage in Matthew's gospel before we can discuss this passage very briefly much can be said I'm going to do this very very briefly you need to understand that modern Roman Catholic scholarship and apologetics asserts that the original of these words was in Aramaic and therefore you can have Kea for sephus and you you build this whole case based upon the Aramaic language well here's the problem we don't have an Aramaic original the gospel that Rome claimed Rome claims authority to canonize scripture and the gospel that was canonized was Greek not Aramaic and so all the speculation that they put into what the Aramaic would have been and there are entire scholarly works that suggest different terms in the Aramaic one Chris carona's work from back in the 90s suggested uh that that minra should have been the term there and and not sephus and and it it destroys all of the the parallelism that they bring up so on so forth it is amazing to me that if this is the key text that Rome literally has to say we need to read it in a language other than it was written by Matthew and in a form we've never seen that is amazing it truly truly is amazing but we have to go past that we don't have time to to deal with that the central theme of this passage is the messiahship of Jesus Christ any interpretation that takes the focus off of Jesus as Messiah and puts it on Peter is completely missing the point Jesus questions to the disciples about the opinions of the multitudes and even their own understanding are all directed toward his own purpose his own identity when Peter speaks up and confesses that Jesus is the Messiah the Christ the son of the Living God he is confessing the faith of all the disciples not merely himself he is speaking for them all as he so often does Jesus's pronouncement of blessing upon Peter is not due to any inherent goodness in Peter but is due to Peter's being the recipient of a great blessing from the Father the father has revealed to Peter the true identity of Jesus Christ now the other Apostles aren't sitting there going he's the Messiah we never knew we can hardly think that they all sat there amazed at Peter's words never have even thought that Jesus was the Messiah the point of Jesus's words is that it requires the work of the father to reveal the son this same theme is struck in John chapter 6 where no man can come to the son un L drawn by the father in that same context when all the disciples turned away from Jesus except for the 12 it was Peter who spoke for the disciples against saying Lord to whom shall we go you have the words of eternal life we believe and know that you are the Holy One Of God John 6: 68-69 the subject of the passage Remains the identity of Christ found the confession of Peter when the Lord says I tell you are Peter and on this rock I will build my church and the gates of Hades will not overcome it the focus does not change Jesus is not here speaking of the identity of Peter he is still talking about himself and his church this is plainly seen by continuing on through verse 20 where we read then he warned his disciples not to tell anyone that he was the Messiah the Christ some Modern Scholars having missed the fact the focus remains on Christ all the way through are so puzzled by this passage they suggest that it's not original but that conjecture is not necessary the rock of which the Lord speaks is the common confession made by all who are part of the church Jesus is the Christ the son of the Living God this is seen I believe in the fact that while the Lord is addressing Peter directly he changes from direct address to the third person this rock when speaking of Peter's confession he does not say upon you Peter I will build my church instead you have a clear distinction between Peter the Petros and the third person Petra the confession of faith on pit upon which the church is built now by the way there were many in the early church despite Vatican 1 who understood it in exactly that same way this statement is followed by the promise to at some time in the future it's in the future tense at sometime it does not saying I am giving you Peter alone the keys the statement is followed by the promise to at sometime in the future give the keys the Kingdom of Heaven to Peter so that what he binds on Earth will be bound in heaven and whatever he looses on Earth will be loosed in heaven I emphasize this as a promise the verb is future tense yet when we see this Authority given in Matthew 18:18 so two chapters later Matthew 18:18 it is given not to Peter alone or even primarily but to all all the apostles and that using the exact same language word for word regarding binding and loosing so listen to me if someone wishes to say that Peter receives the keys in distinction from the other Apostles and I just remind you that's exactly what Vatican 1 said that's a dogmatic teaching you deny that and you are a cursed by Rome but if someone wishes to say that Peter receives the keys in distinction from the other Apostles as their Superior they are also forced to admit that the giving of these Keys is never recorded for us anywhere in scripture a strange thing indeed for something supposedly so foundational to the Constitution of the church so you either have to say Peter received the keys and Matthew 18:18 but that means he received it right along with the other Apostles and is not their Superior or he received it some other time maybe before Matthew 18 but no one thought it important enough to actually record it okay now you may look at that text and a Roman Catholic will look at that and say well I just don't",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "La idea de que Pedro mismo es la roca, y no su confesión, la articuló por primera vez un obispo de Roma en el siglo III; una opinión solitaria, que ni siquiera siguieron todos los obispos de Roma posteriores, y un desarrollo tardío en Occidente, nunca en Oriente",
            quotes: [
              {
                speaker: "W. Robert Godfrey",
                work: "How did the early church fathers interpret the “rock” of Matthew 16?",
                outlet: "Ligonier Ministries, YouTube",
                date: "8 de marzo de 2019",
                locator: "Minutos 0:00 a 0:56",
                url: "https://www.youtube.com/watch?v=gpaTKCiLnOc&t=0s",
                text: "Diría que, si esta fuera la ronda rápida, podríamos decir que sí, es cierto. La noción de que el propio Pedro era la roca, y no su confesión, parece haber sido articulada por primera vez por un obispo de Roma en el siglo III. Ahora bien, el siglo III es muy temprano en relación con nosotros, pero es mucho tiempo después de Jesús: doscientos, doscientos cincuenta años después de Jesús. Y esto fue, al principio, un punto de vista bastante solitario del obispo de Roma, que ni siquiera fue seguido por todos los obispos de Roma posteriores en el período de la Iglesia antigua. Así que sí, en líneas generales creo que la noción de que el propio Pedro era la roca es un desarrollo relativamente tardío en la Iglesia occidental, nunca en la oriental, y en una parte posterior del período antiguo. Y muchos intérpretes anteriores lo habrían visto de otra manera.",
                original:
                  "I would say, if this were the lightning round we could say, true. The notion that Peter himself was the rock rather than his confession being the rock seems first to be articulated by a bishop of Rome in the third century. Now, the third century is very early relative to us, but it's a long time after Jesus. Two hundred, two hundred and fifty years after Jesus. And this is a sort of solitary point of view of the Bishop of Rome initially, not even followed up by all later bishops of Rome in the ancient church period. So yes, I think generally speaking, the notion that Peter himself was the rock is a relatively late development in the Western church, never in the Eastern church, and in a later part of the ancient period. And many earlier interpreters would've seen that differently.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.20.21-John.20.23", "2Cor.2.6-2Cor.2.8"],
      text: "La Confesión de Westminster lo cita para la remisión y la restauración (Confesión 30.2).",
    },
    {
      refs: ["1Cor.5", "1Tim.5.20"],
      text: "La Confesión de Westminster lo cita para los fines de la disciplina (Confesión 30.3).",
    },
    {
      refs: ["Acts.15.15", "Acts.15.19", "Acts.15.24", "Acts.15.27-Acts.15.31", "Acts.16.4", "Matt.18.17-Matt.18.20"],
      text: "La Confesión de Westminster lo cita para las determinaciones ministeriales (Confesión 31.3, numeración histórica).",
      apologists: {
        arguments: [
          {
            title:
              "En el concilio de Jerusalén Pedro habla como apóstol, Santiago preside y decide; la decisión es de los apóstoles y los ancianos, no de un papa",
            quotes: [
              {
                speaker: "James White",
                work: "James White - Peter & The Papacy",
                outlet: "Apologia Studios, YouTube",
                date: "22 de enero de 2024",
                locator: "Minutos 25:35 a 28:21",
                url: "https://www.youtube.com/watch?v=N2CbLHUBcs4&t=1535s",
                text: "15 El supuesto Concilio de Jerusalén, y aquí es muy, muy interesante; solo tengo que ser muy breve, hay muchísimo que se puede decir. Hice un debate con Robertson Jennis sobre la asunción de María, que terminó centrándose mucho en Hechos, capítulo 15. Fue en Nuevo México; no me acuerdo de qué año fue, pueden buscarlo si quieren profundizar un poco más. Pero mucha gente, al citar Hechos 15, dice que Pedro se pone de pie y dice estas cosas, y eso muestra que es papa. Aquí está el problema: en el versículo 6 leemos que los apóstoles y los ancianos se propusieron considerar esta cuestión. No dice 'el papa, los apóstoles y los ancianos'. Pedro aparece claramente como un apóstol igual que los demás. El concilio no está bajo la dirección de Pedro; está claramente bajo la dirección de Jacobo, que es el obispo de Jerusalén. Pedro se dirige al grupo no como papa, sino como apóstol usado por Dios para llevar el evangelio a los gentiles. Concluye su discurso así: 'Creemos que es por la gracia de nuestro Señor Jesucristo que somos salvos, igual que ellos'. Sabemos que las deliberaciones no terminan con el speer's peach de Pedro, ese discurso de Pedro, ¿no? En cambio, leemos en el versículo 12 que toda la asamblea quedó en silencio mientras escuchaba a Bernabé y a Pablo contar las señales y maravillas milagrosas que Dios había hecho entre los gentiles por medio de ellos. Pablo y Bernabé se dirigieron al grupo y confirman la opinión de Pedro relatando la obra maravillosa de Dios en sus propios ministerios. En ese momento habla Jacobo, y, usando el modo imperativo, el modo de mando, ordena a la asamblea que escuche sus palabras. Confirma las palabras de Pedro, cita la Escritura y, al hacerlo, da su juicio. En el versículo 19 tenemos la conclusión del asunto: la carta se escribe por sugerencia de Jacobo, pero otra vez en nombre no de Pedro el papa, sino de los apóstoles y los ancianos; aparentemente no había papas disponibles. Las palabras de Pedro en Hechos 15:11 son nuestra última mirada a Pedro en Hechos; desde ese punto en adelante no se hace ninguna mención de él. Aquel que supuestamente es la cabeza misma de la Iglesia universal, el fundador de la Iglesia en Roma, no aparece por ningún lado; incluso cuando Pablo llega a Roma al final del libro, Pedro no se encuentra por ningún lado. Hechos no es un libro amigable con el concepto del papado, así que recuerden: el defensor del papado debe probar más allá de toda sombra de duda que Mateo 16 y Juan",
                original:
                  "15 The supposed Jerusalem Council and here it's very very interesting I just have to be very brief there's so much that we can say about this I did do uh a debate with Robertson jennis on the B assumption Mary which ended up focusing very much on Acts chapter 15 it was in New Mexico don't remember what year it was you can look it up uh if you wanted dig a little bit more deeper but a lot of people will Point acts chap 15 say say Peter stands up and he says these things that shows he's Pope here's the problem in verse six we read the apostles and Elders meant to consider this question it is not said the pope and the apostles and the elders met Peter is plainly considered an apostle just as all the rest the council is not under the direction of Peter it is plainly under the direction of James who is the bishop of Jerusalem Peter addresses the group not as a pope but as an apostle used by God to bring the gospel to the Gentiles he concludes his speech as follows we believe it is through the grace of our Lord Jesus Christ that we are saved just as they are we knowe that the deliberations do not end with speer's peach Peter's speech say that right instead we read in verse 12 the whole assembly became silent as they listened to Barnabas and Paul telling about the miraculous signs and wonders God had done among the Gentiles through them Paul and Barnabas addressed the group and confirm Peter's opinion by relating God's wondrous work in their own Ministries at this point James speaks up and using the imperative mode the mode of command commands the assembly to listen to his words he confirms Peter's words the citation of scripture and upon doing this gives his judgment in verse 19 here we have the conclusion of the affair the letter is written at James's suggestion but again in the name not of Peter the pope but of the Apostles and Elders no popes seemingly being available the words of Peter in Acts 15:11 give us our final look at Peter in Acts from this point on no mention is made of him he who ised allegedly the very head of the church Universal the founder of the church at Rome even when Paul arrives in Rome at the end of the book Peter is nowhere to be found acts is not a friendly book to the concept of the papacy and so remember the defender of the papacy must prove beyond a shadow of a doubt that Matthew 16 and John",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.2.20", "Acts.17.11", "1Cor.2.5", "2Cor.1.24"],
      text: "La Confesión de Westminster lo cita para los concilios falibles como ayuda (Confesión 31.4, numeración histórica).",
      apologists: {
        arguments: [
          {
            title:
              "Cooper dice que Pablo escribe en Efesios 2 que la iglesia está edificada sobre el fundamento de los apóstoles y profetas, siendo Cristo Jesús mismo la piedra angular, y que un fundamento se pone una sola vez: después de que los apóstoles del siglo primero lo pusieron y murieron no puede haber más apóstoles en ese sentido, por eso el testimonio escrito de los apóstoles y de quienes ellos avalaron tiene una autoridad única hoy, con la autoridad para hablar en nombre de Cristo",
            quotes: [
              {
                speaker: "Barry Cooper",
                work: "Apostles",
                outlet: "Simply Put",
                date: "28 de enero de 2025",
                locator: "Minutos 2:16 a 3:56",
                url: "https://ligonier.org/podcasts/simply-put/apostles#t=136",
                text: "En Efesios capítulo 2, Pablo escribe que la iglesia está edificada sobre el fundamento de los apóstoles y profetas, siendo Cristo Jesús mismo la piedra angular. Esa visión de los apóstoles como parte del fundamento de la fe cristiana es crucial para entender, porque un fundamento se pone una sola vez. Así que, después de que aquellos apóstoles pusieron el fundamento en el primer siglo y luego murieron, por definición no pudo haber más apóstoles. Nadie después podría afirmar con verdad ser apóstol en el sentido en que Pablo habla en Efesios, porque no serían testigos de primera mano del Señor Jesús resucitado, como lo fueron los apóstoles. Tampoco habrían recibido el respaldo visible de los apóstoles del primer siglo. Esa es una de las razones por las que el testimonio escrito de los apóstoles en el Nuevo Testamento, y los escritos del Nuevo Testamento de aquellos específicamente avalados por los apóstoles, es tan singularmente autoritativo hoy. En el Imperio romano, un apostolos, de donde viene la palabra en inglés apostle, era cualquiera con autoridad para hablar a otros en nombre del emperador. Tal era su autoridad que, si desobedecías a esa persona, era como si desobedecieras al propio emperador. Ese es el tipo de autoridad que tiene el testimonio escrito de los apóstoles. Tienen la autoridad para hablarnos en nombre de, y con",
                original:
                  "In Ephesians chapter 2, Paul writes that the church is built on the foundation of the apostles and prophets, Christ Jesus himself being the cornerstone. That view of the apostles as being included in the foundation of the Christian faith is crucial to understand because a foundation is laid only once. So after those apostles laid the foundation in the first century and then eventually died, there could be, by definition, no further apostles. No one subsequently could truthfully claim to be an apostle in the sense Paul talks about in Ephesians, because they would not be first-hand witnesses of the risen Lord Jesus, as the apostles were. Nor would they have received the visible endorsement of those first century apostles. That's one of the reasons why the written testimony of the apostles in the New Testament, and the New Testament writings of those specifically endorsed by the apostles, is so uniquely authoritative today. In the Roman Empire, an apostolos, from which we get the English word apostle, was anyone with the authority to speak to others on behalf of the emperor. Such was their authority that if you disobeyed them, it was as if you were disobeying the emperor himself. That's the kind of authority that the apostles' written testimony has. They have the authority to speak to us on behalf of, and with",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
  ],
  passages: {
    title: "Los pasajes de la posición reformada",
    lede: "Los versículos que la tradición reformada cita sobre la Iglesia, su gobierno y el papado, completos y con su propia lectura.",
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
      "Para los Estándares de Westminster, el gobierno de la Iglesia es este: «El Señor Jesus, como Rey y Cabeza de su iglesia, ha establecido en ella un gobierno regido por oficiales eclesiásticos distintos del magistrado civil.» {c:RWCF30_1|Westminster 30.1}.",
      "Y la Confesión prescribe la disciplina: «primero de la amonestacion, y en seguida, de la suspension del culpable del sacramento de la cena del Señor por algun tiempo, y despues de la excomunion de la iglesia, segun la naturaleza del delito de la persona» {c:RWCF30_4|Westminster 30.4}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "El gobierno de la Iglesia",
        text: "La Confesión de Westminster dice: «El Señor Jesus, como Rey y Cabeza de su iglesia, ha establecido en ella un gobierno regido por oficiales eclesiásticos distintos del magistrado civil.».",
        sources: [
          {
            citations: ["RWCF30_1"],
            label: "Westminster 30.1",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Censuras y restauración",
        text: "La Confesión de Westminster prescribe: «primero de la amonestacion, y en seguida, de la suspension del culpable del sacramento de la cena del Señor por algun tiempo, y despues de la excomunion de la iglesia, segun la naturaleza del delito de la persona».",
        sources: [
          {
            citations: ["RWCF30_2"],
            label: "Westminster 30.2",
          },
          {
            citations: ["RWCF30_4"],
            label: "Westminster 30.4",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Concilios, sumisión y límites",
        text: "La Confesión histórica prescribe decisiones sobre controversias, conciencia, culto y gobierno (31.3), las califica con la posibilidad de error (31.4) y limita su asunto propio a lo eclesiástico (31.5).",
        sources: [
          {
            citations: ["RWCF31_3"],
            label: "Westminster 31.3",
          },
          {
            citations: ["RWCF31_4"],
            label: "Westminster 31.4",
          },
          {
            citations: ["RWCF31_5"],
            label: "Westminster 31.5",
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
          "El Espíritu Santo, que habla en las Escrituras, es el Juez supremo por quien toda controversia religiosa tiene que decidirse (Confesión 1.10).",
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
