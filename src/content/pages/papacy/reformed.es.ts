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
    },
    {
      refs: ["1Cor.1.2", "1Cor.12.12-1Cor.12.13"],
      text: "La Confesión de Westminster lo cita para la iglesia visible en muchos lugares y un solo cuerpo (Confesión 25.2).",
    },
    {
      refs: ["Eph.4.11-Eph.4.13"],
      text: "La Confesión de Westminster lo cita para el ministerio y la perfección de los santos (Confesión 25.3).",
    },
    {
      refs: ["Isa.59.21", "Matt.28.19-Matt.28.20"],
      text: "La Confesión de Westminster lo cita para el Espíritu, la palabra y la comisión que continúa (Confesión 25.3).",
    },
    {
      refs: ["1Cor.13.12", "Matt.13.24-Matt.13.30", "Matt.13.47"],
      text: "La Confesión de Westminster lo cita para la falibilidad y la mezcla (Confesión 25.5).",
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
    },
    {
      refs: ["Isa.9.6-Isa.9.7"],
      text: "La Confesión de Westminster lo cita para el gobierno de Cristo (Confesión 30.1).",
    },
    {
      refs: ["1Tim.5.17", "1Thess.5.12"],
      text: "La Confesión de Westminster lo cita para los oficiales y el gobierno (Confesión 30.1).",
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
