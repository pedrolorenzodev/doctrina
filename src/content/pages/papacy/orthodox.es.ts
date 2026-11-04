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
                text: "En primer lugar, aunque a Pedro se le dio un papel prominente como el primero de los apóstoles, siempre fue igual a los demás apóstoles. Cristo les dijo a los apóstoles que se sentarían en doce tronos (Mateo 19:28). No se preparó un trono especial para Pedro. Además, las “llaves” se dieron a todos los apóstoles (Mateo 18:18). Los demás apóstoles también eran el fundamento sobre el que se edificó la Iglesia (Efesios 2:20). Si se ha de creer la visión romana, es interesante notar que cuando los discípulos discutían entre sí quién sería el mayor (Lucas 22:24-27), parecían no saber que Cristo ya había elegido a Pedro.",
                original:
                  "First of all, although Peter was given the prominent role as the first of the apostles, he was always equal to the other apostles. Christ told the apostles that they would sit on twelve thrones (Matt. 19:28). A special throne was not set up for Peter. Moreover the “keys” were given to all the apostles (Matt. 18:18). The other apostles were also the foundation upon which the Church was built (Eph. 2:20). If the Roman view is to be believed, it is interesting to note that when the disciples disputed among themselves as to who would be the greatest, (Lk. 22:24-27), they seemed unaware that Christ had already picked Peter.",
                translation: "ai-assisted",
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
                text: "En Mateo 16:19, Jesús señaló que con las llaves venía el poder de atar y desatar. “Atar y desatar” es un término rabínico para la autoridad de los rabinos de declarar cosas permitidas o prohibidas. Así como en el judaísmo Moisés era el Legislador y los rabinos judíos tenían autoridad para atar y desatar a los miembros de la comunidad judía, Jesús, como Inaugurador de la Nueva Alianza, confirió a sus discípulos autoridad de alianza para “atar y desatar” sobre la Nueva Comunidad de la Alianza: la Iglesia. La Orthodox Study Bible, en sus notas sobre Mateo 18:18-20, dice lo siguiente sobre “atar y desatar”:\n\nLa autoridad para atar y desatar pecados fue dada a los apóstoles y transmitida a los obispos y presbíteros que ellos ordenaron. Esta autoridad se da por la salvación del pecador. El pecador, “viendo que no solo es expulsado de la Iglesia, sino que el vínculo de su pecado permanecerá en el cielo, puede volverse y hacerse manso” (JohnChr). (Énfasis en el original.)\n\nFalsa pista exegética\n\nCentrarse en la palabra “llave” desvía de la idea principal de la promesa de Jesús a Pedro: el poder de atar y desatar, es decir, la autoridad para absolver pecados. La cuestión exegética crítica aquí es si el poder de atar y desatar que Cristo confirió a Pedro en Mateo 16:19 fue dado a una sola persona (lo que respaldaría el modelo monárquico que favorecen los católicos romanos) o a los Doce (lo que respaldaría el modelo conciliar que favorece la Ortodoxia). Si preguntamos si el “tú” de Mateo 16:19 está en singular (σοι) o en plural (ὑμῖν), la respuesta es la primera. Entonces, si uno hace de la “llave” el foco de la investigación, la evidencia apuntará hacia la comprensión monárquica. Sin embargo, si nos centramos en el poder de atar y desatar, encontramos evidencia de que más de una persona recibe este poder. Mateo 18:17-18 muestra el mismo poder de atar y desatar dado a un grupo colectivo. La pareja de “atar” δήσῃς y “desatar” λύσῃς en Mateo 16:19 tiene su paralelo en Mateo 18:18: “atar” δήσητε y “desatar” λύσητε. Significativamente, los dos verbos en Mateo 18:18 están en segunda persona del plural, lo que respalda la comprensión conciliar de la autoridad eclesial de la Ortodoxia. La diferencia entre la segunda persona del singular y la del plural es evidente para quien lee la King James Version, que usa “thy”, “thee” y “thou” para indicar el singular, y “you”, “ye” y “your” para indicar el plural.",
                original:
                  "In Matthew 16:19, Jesus noted that with the keys came the power to bind and to loose.  “To bind and loose” is a rabbinic term for rabbis’ authority to declare things permitted or forbidden.  Where in Judaism Moses was the Lawgiver and the Jewish rabbis had the authority to bind and loose members of the Jewish community, Jesus as the Inaugurator of the New Covenant bestowed covenantal authority upon his Disciples to “bind and loose” over the New Covenant Community – the Church.  The Orthodox Study Bible notes for Matthew 18:18-20 has this to say about “binding and loosing”:\n\nThe authority to bind and loose sins is given to the apostles and transmitted to the bishops and presbyters they ordained.  This authority is given for the sake of the salvation of the sinner.  The sinner, “seeing that he is not only cast of out of the Church, but that the bond of his sin will remain in Heaven, he may turn and become gentle” (JohnChr). (Emphasis in original.)\n\nExegetical Red Herring\n\nTo focus on the word “key” detracts from the main thrust of Jesus’ promise to Peter, the power to bind and loose, i.e., the authority to absolve sins.  The critical exegetical question here is whether the power to bind and loose that Christ bestowed on Peter in Matthew 16:19 was to one single person (which would support the monarchical model favored by Roman Catholics) or to the Twelve (which would support the conciliar model favored by Orthodoxy).  If we ask whether the “you” in Matthew 16:19 is in the singular (σοι) or plural form (ὑμῖν), the answer is the former.  So, if one makes “key” the focus of one’s investigation, then the evidence will point to the monarchical understanding.  However, if we focus on the power to bind and loose, we find evidence of more than one person being granted this power.  Matthew 18:17-18 shows the same power of binding and loosing given to a collective group.  The pairing of binding “δήσῃς” and loosing “λύσῃς” in Matthew 16:19 have their parallel in Matthew 18:18: binding “δήσητε” and loosing “λύσητε.”  Significantly, the two verbs in Matthew 18:18 are in the second person plural which supports the Orthodox conciliar understanding of ecclesial authority.  The difference between the second person singular and plural is evident to one reading the King James Version which uses “thy,” “thee” and “thou” to indicate second person singular and “you,” “ye,” and “your” to indicate second person plural.",
                translation: "ai-assisted",
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
                text: "Centrarse en la palabra “llave” desvía de la idea central de la promesa de Jesús a Pedro: el poder de atar y desatar, es decir, la autoridad para absolver pecados. La cuestión exegética crítica aquí es si el poder de atar y desatar que Cristo confirió a Pedro en Mateo 16:19 fue dado a una sola persona (lo que respaldaría el modelo monárquico que favorecen los católicos romanos) o a los Doce (lo que respaldaría el modelo conciliar que favorece la Ortodoxia). Si preguntamos si el “tú” de Mateo 16:19 está en singular (σοι) o en plural (ὑμῖν), la respuesta es la primera. Entonces, si uno hace de la “llave” el centro de su investigación, la evidencia apuntará a la comprensión monárquica. Sin embargo, si nos centramos en el poder de atar y desatar, encontramos evidencia de que más de una persona recibe este poder. Mateo 18:17-18 muestra el mismo poder de atar y desatar dado a un grupo colectivo. La pareja de “atar” δήσῃς y “desatar” λύσῃς en Mateo 16:19 tiene su paralelo en Mateo 18:18: “atar” δήσητε y “desatar” λύσητε. Significativamente, los dos verbos en Mateo 18:18 están en segunda persona del plural, lo que respalda la comprensión conciliar de la autoridad eclesial de la Ortodoxia. La diferencia entre la segunda persona del singular y la del plural es evidente para quien lee la King James Version, que usa “thy”, “thee” y “thou” para indicar el singular, y “you”, “ye” y “your” para indicar el plural.\n\n15 Y si tu hermano pecare contra ti, ve y repréndele entre tú y él solo; si te oyere, has ganado a tu hermano. 16 Mas si no te oyere, toma aún contigo a uno o dos más, para que en boca de dos o tres testigos conste toda palabra. 17 Y si no los oyere, dilo a la iglesia; y si ni aun a la iglesia oyere, sea para ti como un pagano y un publicano. 18 De cierto os digo que todo lo que atareis en la tierra será atado en el cielo; y todo lo que desatareis en la tierra será desatado en el cielo. (KJV)\n\nSin embargo, quien lee la NIV no podrá notar los cambios de número, porque la NIV usa el “you” moderno, que incluye tanto el singular como el plural bajo la misma forma, lo que me obligó a insertar [plural] en el pasaje de abajo. [Los usos más recientes de la NIV, con su lenguaje inclusivo de género, por ejemplo “tu hermano y tu hermana”, obligaron a los traductores a traducir “him” como “them”, ¡enturbiando todavía más las aguas! Quizá los traductores de la NIV deberían considerar usar el y’all sureño en la próxima edición.]\n\n15 Si tu hermano peca contra ti, ve y señálale su falta, solo entre los dos. Si te escucha, has ganado a tu hermano. 16 Pero si no te escucha, toma contigo a uno o dos más, para que “todo asunto se confirme por el testimonio de dos o tres testigos”. 17 Si todavía se niega a escucharlos, díselo a la iglesia; y si ni siquiera escucha a la iglesia, trátalo como a un pagano o a un recaudador de impuestos. 18 Les digo la verdad: todo lo que ustedes [plural] aten en la tierra quedará atado en el cielo, y todo lo que ustedes [plural] desaten en la tierra quedará desatado en el cielo. (NIV)\n\nComo el Evangelio de Mateo fue escrito para un público judío, no sorprende que hallemos a Jesús usando la expresión hebrea de atar y desatar. Esto significa que, para localizar pasajes similares en otros lugares, conviene buscar no solo equivalentes formales (palabra por palabra), sino también equivalentes dinámicos (sentido por sentido). Un pasaje paralelo se encuentra en el Evangelio de Juan, en una de las apariciones de Jesús después de la resurrección. En Juan 20:21-23 leemos:\n\n21 Jesús les dijo de nuevo: “¡La paz sea con ustedes! Como el Padre me envió, yo los envío a ustedes”. 22 Y con eso sopló sobre ellos y dijo: “Reciban el Espíritu Santo. 23 Si ustedes [plural] perdonan los pecados de alguien, sus pecados quedan perdonados; si ustedes [plural] no se los perdonan, no quedan perdonados”.\n\nAquí Jesús no habla solo a Pedro, sino a Pedro y a los discípulos. Juan, que escribe para un público no judío, evita los hebraísmos y presenta a Jesús hablando de manera llana sobre el otorgamiento a los discípulos del poder de perdonar pecados. El Theological Dictionary of the New Testament de Kittel, en la entrada para κλεὶς (kleis) (vol. III, pp. 752-753), también señala el paralelo entre Mateo 18:18 y Juan 20:23. Lo importante aquí es que Juan usa para el verbo “perdonar” (ἀφῆτε), en el versículo 23, la terminación de segunda persona del plural. Uno podría esperar que Jesús confiriera esta autoridad exclusivamente a Pedro, pero aquí se la da a los discípulos. Que Jesús sople sobre los discípulos indica que el poder de perdonar pecados no es tanto una potestad jurídica como un carisma profético que resulta de la unión con el Cristo resucitado. Esta comprensión carismática y conciliar del poder de “atar y desatar” está mucho más cerca de la Ortodoxia que del catolicismo romano, con su monarquía papal y su ethos legalista.\n\nSi bien se podría afirmar, como lo hizo Scott Hahn, que la situación de Mateo 18:15-18 es como el gabinete de un rey, con el primer ministro teniendo la última palabra, eso es proyectar el parlamento moderno sobre la Iglesia antigua mediante un razonamiento por analogía. Lo que llama la atención es lo que la Escritura no dice: (1) en Mateo 16:19 Jesús no dio el poder de las llaves exclusivamente a Pedro, y (2) Jesús no subordinó la autoridad de los Doce a Pedro, ni en Mateo 18:18 ni en Juan 20:23. Esto deja la analogía del primer ministro y el gabinete del prof. Hahn más como una conjetura que como un argumento razonado.\n\nAdemás, si el modelo parlamentario fuera correcto, veríamos a Pedro teniendo la última palabra en el Concilio de Jerusalén. Sin embargo, fue Jacobo, el obispo de Jerusalén, quien dijo: “Es mi juicio” e instruyó al concilio: “Debemos escribirles” (Hechos 15:19-20). Afirmar que Jacobo simplemente se hacía eco de las opiniones de Pedro es argumentar a partir del silencio. De manera similar, esperaríamos que el Primer Concilio Ecuménico (Nicea I, 325) hubiera sido presidido por el obispo de Roma o por su representante. En realidad, Nicea I fue presidido por el emperador Constantino o por el obispo Osio de Córdoba (España) (NPNF 2nd Series Vol. 14 p. xiii). El papa Silvestre había enviado dos legados al concilio, pero no lo presidieron. En síntesis, la evidencia empírica e histórica no concuerda con el argumento a favor del papado. Uno tiene la sensación de que los apologistas pro papado intentan forzar el desorden de la historia de la Iglesia en su modelo ordenado de papado monárquico.",
                original:
                  "To focus on the word “key” detracts from the main thrust of Jesus’ promise to Peter, the power to bind and loose, i.e., the authority to absolve sins.  The critical exegetical question here is whether the power to bind and loose that Christ bestowed on Peter in Matthew 16:19 was to one single person (which would support the monarchical model favored by Roman Catholics) or to the Twelve (which would support the conciliar model favored by Orthodoxy).  If we ask whether the “you” in Matthew 16:19 is in the singular (σοι) or plural form (ὑμῖν), the answer is the former.  So, if one makes “key” the focus of one’s investigation, then the evidence will point to the monarchical understanding.  However, if we focus on the power to bind and loose, we find evidence of more than one person being granted this power.  Matthew 18:17-18 shows the same power of binding and loosing given to a collective group.  The pairing of binding “δήσῃς” and loosing “λύσῃς” in Matthew 16:19 have their parallel in Matthew 18:18: binding “δήσητε” and loosing “λύσητε.”  Significantly, the two verbs in Matthew 18:18 are in the second person plural which supports the Orthodox conciliar understanding of ecclesial authority.  The difference between the second person singular and plural is evident to one reading the King James Version which uses “thy,” “thee” and “thou” to indicate second person singular and “you,” “ye,” and “your” to indicate second person plural.\n\n15 Moreover if thy brother shall trespass against thee, go and tell him his fault between thee and him alone: if he shall hear thee, thou hast gained thy brother.  16 But if he will not hear thee, then take with thee one or two more, that in the mouth of two or three witnesses every word may be established.  17 And if he shall neglect to hear them, tell it unto the church: but if he neglect to hear the church, let him be unto thee as an heathen man and a publican.  18 Verily I say unto you, Whatsoever ye shall bind on earth shall be bound in heaven: and whatsoever ye shall loose on earth shall be loosed in heaven. (KJV)\n\nHowever, a reader of the NIV will not be able to spot the shifts in number due to the NIV’s usage of the modern “you” which includes both the singular and the plural under the same word form which necessitated my inserting [plural] into the excerpt below.  [More recent NIV translations usage of gender inclusive language, e.g., “your brother and sister,” forced the translators to render “him” as “them” muddying the waters even further!  Perhaps the NIV translators should consider using the Southern y’all in the next edition.]\n\n15 If your brother sins against you, go and point out his fault, just between the two of you. If he listens to you, you have won him over. 16 But if he will not listen, take one or two others along, so that ‘every matter may be established by the testimony of two or three witnesses.’ 17 If he still refuses to listen to them, tell it to the church; and if he refuses to listen even to the church, treat him as you would a pagan or a tax collector. 18 I tell you the truth, whatever you [plural] bind on earth will be bound in heaven, and whatever you [plural] loose on earth will be loosed in heaven. (NIV)\n\nSince Matthew’s Gospel was written for a Jewish audience it comes as no surprise that we find Jesus using the Hebraic expression of binding and loosing.  This means that to locate similar passages elsewhere it helps not just to look for formal (word-for-word) equivalent but also for dynamic (meaning-for-meaning) equivalent.  A parallel passage can be found in John’s Gospel in one of Jesus’ post-resurrection appearances.  In John 20:21-23 we read:\n\n21 Again Jesus said, “Peace be with you! As the Father has sent me, I am sending you.” 22 And with that he breathed on them and said, “Receive the Holy Spirit. 23 If you [plural] forgive anyone’s sins, their sins are forgiven; if you [plural] do not forgive them, they are not forgiven.”\n\nHere Jesus is speaking not to Peter alone but to Peter and the Disciples.  John, writing to a non-Jewish audience, refrained from using Hebraisms and instead has Jesus talking plainly about bestowing upon the Disciples the power to forgive sins.  Kittel’s Theological Dictionary of the New Testament entry for κλεὶς (kleis) (vol. III pp. 752-753) likewise notes the parallel between Matthew 18:18 and John 20:23.  What is important to note here is that John used the second person plural endings for the verb “forgive” (ἀφῆτε) in verse 23.  One might expect that Jesus would bestow this authority exclusively to Peter but here he gives it to the Disciples.  Jesus breathing on the Disciples indicates that the power to forgive sins is not so much a juridical power but more of a prophetic charisma that results from union with the Risen Christ.  This charismatic and conciliar understanding of the power to “bind and loose” is much closer to Orthodoxy than to Roman Catholicism with its papal monarchy and legalistic ethos.\n\nWhile it might be asserted, as Scott Hahn did, that the situation in Matthew 18:15-18 is like the king’s cabinet with the Prime Minister having the final say, this is projecting the modern parliament onto the ancient Church through reasoning by analogy.  What is striking is what Scripture does not say: (1) in Matthew 16:19 Jesus did not give the power of the keys exclusively to Peter and (2) Jesus did not subordinate the authority of the Twelve to Peter in either Matthew 18:18 or John 20:23.  This leaves Prof. Hahn’s Prime Minister/Cabinet analogy more a conjecture than a reasoned argument.\n\nFurthermore, if the parliamentary model holds true then we would see Peter having the final say at the Jerusalem Council.  However, it was James the bishop of Jerusalem who said: “It is my judgment” and instructing the Council “we should write to them.” (Acts 15:19-20)  To argue that James was merely echoing Peter’s views is to argue from silence.  Similarly, we would expect the First Ecumenical Council (Nicea I, 325) to have been presided over by the bishop of Rome or his representative.  In fact, Nicea I was presided over by Emperor Constantine or Bishop Hosius of Cordova (Spain) (NPNF 2nd Series Vol. 14 p. xiii).  Pope Sylvester had sent two legates to the Council, but they did not preside over it. To sum up, the empirical, historical evidence does not agree with the pro-papacy argument.  One gets the sense that pro-papacy apologists are trying to force the messiness of church history into their neat model of the monarchical papacy.",
                translation: "ai-assisted",
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
                text: "En primer lugar, aunque a Pedro se le dio un papel prominente como el primero de los apóstoles, siempre fue igual a los demás apóstoles. Cristo les dijo a los apóstoles que se sentarían en doce tronos (Mateo 19:28). No se preparó un trono especial para Pedro. Además, las “llaves” se dieron a todos los apóstoles (Mateo 18:18). Los demás apóstoles también eran el fundamento sobre el que se edificó la Iglesia (Efesios 2:20). Si se ha de creer la visión romana, es interesante notar que cuando los discípulos discutían entre sí quién sería el mayor (Lucas 22:24-27), parecían no saber que Cristo ya había elegido a Pedro.",
                original:
                  "First of all, although Peter was given the prominent role as the first of the apostles, he was always equal to the other apostles. Christ told the apostles that they would sit on twelve thrones (Matt. 19:28). A special throne was not set up for Peter. Moreover the “keys” were given to all the apostles (Matt. 18:18). The other apostles were also the foundation upon which the Church was built (Eph. 2:20). If the Roman view is to be believed, it is interesting to note that when the disciples disputed among themselves as to who would be the greatest, (Lk. 22:24-27), they seemed unaware that Christ had already picked Peter.",
                translation: "ai-assisted",
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
                text: "Un evangélico que se encuentra en medio de las ruinas de una teología protestante destrozada necesita considerar con cuidado sus opciones. No hay una sino dos opciones. La Iglesia de Roma puede afirmar que fue fundada por los apóstoles Pedro y Pablo, pero la misma afirmación puede hacerla la Iglesia de Antioquía (ver Hechos 13:1 para Pablo y Gálatas 2:11 para Pedro y Pablo). Así que, si bien la Iglesia de Roma puede parecer la opción más obvia, hay otra opción. Pero hay otra opción histórica y bíblicamente sólida: la Iglesia de Antioquía, es decir, la Iglesia ortodoxa oriental. La Iglesia de Antioquía puede reclamar una cadena de sucesión apostólica igualmente válida y más antigua que la de Roma. Los primeros concilios no le asignaron al obispo de Roma una autoridad mayor que la de los demás obispos. La pretensión de Roma de supremacía sobre los demás obispos y patriarcados es un desarrollo posterior y está en contradicción con los cánones de los siete concilios ecuménicos.",
                original:
                  "An Evangelical who finds himself in the midst of the rubble of a shattered Protestant theology needs to consider carefully what his options are.  There exist not one but two options.  The Church of Rome may claim to have been founded by the Apostles Peter and Paul, but the same claim can be made by the Church of Antioch (see Acts 13:1 for Paul and Galatians 2:11 for Peter and Paul).  So while the Church of Rome may seem to be most obvious option there is another option. But there is another historically and biblically sound option: the Church of Antioch, that is, the Eastern Orthodox Church.  The Church of Antioch can claim a chain of apostolic succession that is equally valid and older than Rome’s.  The early Councils did not assign the Bishop of Rome an authority greater than the other bishops.  Rome’s claim to supremacy over the other bishops and patriarchates is a later development and is at odds with the canons of the Seven Ecumenical Councils.",
                translation: "ai-assisted",
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
