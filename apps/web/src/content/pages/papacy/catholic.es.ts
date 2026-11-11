import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const papacyCatholic = {
  doctrine: "papacy",
  tradition: "catholic",
  status: "draft",
  title: "La posición católica",
  lede: "Cómo la Iglesia católica entiende el primado y la infalibilidad del papa, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que la Iglesia católica enseña sobre el primado y la infalibilidad del papa, con el grado de autoridad que le corresponde según las categorías de la Iglesia.",
    definition: {
      text: "Para la Iglesia católica, Cristo puso a Pedro al frente de los apóstoles como «principio y fundamento, perpetuo y visible, de la unidad de fe y de comunión» (Lumen gentium 18), y ese oficio continúa en el obispo de Roma, su sucesor. El papa tiene sobre toda la Iglesia una potestad plena, suprema e inmediata, que no anula la de los obispos sino que la confirma; y cuando define solemnemente una doctrina de fe o de costumbres para toda la Iglesia, la define sin error, por la asistencia del Espíritu Santo prometida a Pedro.",
      grades: [],
      sources: [
        {
          citations: ["PA1", "PA2", "PA3a", "PA4def"],
          label: "Pastor aeternus, caps. 1–4",
        },
        {
          citations: ["LG18"],
          label: "Lumen gentium 18",
        },
        {
          citations: ["LG22"],
          label: "Lumen gentium 22",
        },
        {
          citations: ["LG25"],
          label: "Lumen gentium 25",
        },
        {
          citations: ["CEC882"],
          label: "Catecismo 882",
        },
        {
          citations: ["CEC891"],
          label: "Catecismo 891",
        },
        {
          citations: ["CEC895"],
          label: "Catecismo 895",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "el primado de Pedro",
        text: "«Según los testimonios del Evangelio» (Vaticano I), Cristo prometió y dio directamente a Pedro, y solo a él, el primado de jurisdicción sobre toda la Iglesia: le llamó «Piedra», le dio las llaves del Reino y le encargó apacentar todo su rebaño. Pedro no recibió ese primado de la Iglesia, como si fuera su delegado, sino de Cristo; y no es solo un primado de honor, sino de verdadera jurisdicción.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "definido por el Vaticano I (Pastor aeternus, cap. 1 y su canon, con anatema); el Vaticano II lo propone «como objeto de fe inconmovible» ({c:LG18|Lumen gentium 18})",
          },
        ],
        sources: [
          {
            citations: ["PA1"],
            label: "Pastor aeternus, cap. 1",
          },
          {
            citations: ["PA1can"],
            label: "Pastor aeternus, cap. 1, canon",
          },
          {
            citations: ["LG22"],
            label: "Lumen gentium 22",
          },
          {
            citations: ["CEC552", "CEC553"],
            label: "Catecismo 552–553",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la sucesión de Pedro",
        text: "Lo que Cristo instituyó en Pedro para el bien de la Iglesia tiene que durar mientras dure la Iglesia. Por eso, quien sucede a Pedro en la sede de Roma recibe por institución de Cristo, es decir, por derecho divino, el primado de Pedro sobre toda la Iglesia. La Iglesia sitúa la muerte de Pedro en Roma por «la tradición literaria y arqueológica más antigua» (Congregación para la Doctrina de la Fe, 1998, n. 3); el Vaticano I habla de la sede romana «consagrada por su sangre» (cap. 2).",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "definido por el Vaticano I (Pastor aeternus, cap. 2 y su canon); la {c:CDFP4|Congregación para la Doctrina de la Fe} lo llama «doctrina de fe» (El primado del Sucesor de Pedro, 1998, n. 4)",
          },
        ],
        sources: [
          {
            citations: ["PA2"],
            label: "Pastor aeternus, cap. 2",
          },
          {
            citations: ["PA2can"],
            label: "Pastor aeternus, cap. 2, canon",
          },
          {
            citations: ["CDFP3", "CDFP4"],
            label: "El primado del Sucesor de Pedro 3–4",
          },
          {
            citations: ["LG20"],
            label: "Lumen gentium 20",
          },
          {
            citations: ["CIC331"],
            label: "Código de Derecho Canónico, can. 331",
          },
        ],
      },
      {
        id: "QE-3",
        short: "la jurisdicción del papa",
        text: "El papa, como sucesor de Pedro, verdadero vicario de Cristo y cabeza de toda la Iglesia, tiene sobre ella una potestad plena y suprema, verdaderamente episcopal, ordinaria e inmediata: sobre todas las Iglesias y sobre cada pastor y cada fiel, no solo en materia de fe y costumbres, sino también de disciplina y gobierno. Es el juez supremo de los fieles, y contra sus sentencias no cabe apelación, ni siquiera a un concilio ecuménico. El Concilio de Florencia lo había definido en 1439, y el Vaticano I renovó esa definición.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "así lo clasifica la {c:CDF98|Congregación para la Doctrina de la Fe} («la doctrina sobre el primado y la infalibilidad del Romano Pontífice», 1998, citando DS 3059-3075); definido por el Vaticano I (Pastor aeternus, cap. 3 y su canon), que renueva la definición de Florencia (1439)",
          },
        ],
        sources: [
          {
            citations: ["FLO"],
            label: "Florencia, Laetentur caeli",
          },
          {
            citations: ["PA3a", "PA3b"],
            label: "Pastor aeternus, cap. 3",
          },
          {
            citations: ["PA3can"],
            label: "Pastor aeternus, cap. 3, canon",
          },
          {
            citations: ["LG22"],
            label: "Lumen gentium 22",
          },
          {
            citations: ["CIC331", "CIC333", "CIC1404"],
            label: "Código de Derecho Canónico, cann. 331, 333 §3, 1404",
          },
          {
            citations: ["CDF98"],
            label: "Congregación para la Doctrina de la Fe (1998), §11",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la infalibilidad del papa",
        text: "El papa goza de la infalibilidad que Cristo quiso dar a su Iglesia cuando habla «ex cathedra»: es decir, cuando, como pastor y maestro de todos los cristianos y con su suprema autoridad apostólica, define que una doctrina de fe o de costumbres debe ser sostenida por toda la Iglesia. Esas definiciones son irreformables «por sí mismas y no por el consentimiento de la Iglesia», es decir, porque se proclaman «bajo la asistencia del Espíritu Santo» y no necesitan «de ninguna aprobación de otros» ni admiten «apelación a otro tribunal»; y a esas definiciones «nunca puede faltar el asenso de la Iglesia por la acción del mismo Espíritu Santo» (Lumen gentium 25). Para la Iglesia, Cristo quiso dar a toda su Iglesia «una participación en su propia infalibilidad» (Catecismo 889): la tiene el conjunto de los fieles, que «no puede equivocarse cuando cree» (Lumen gentium 12), y la tienen los obispos unidos al papa, sobre todo en el concilio ecuménico; el papa la ejerce de modo personal cuando define. No se extiende a todo lo que dice el papa, sino a lo que define de ese modo, y no le da una revelación nueva: es una asistencia del Espíritu Santo para custodiar el depósito de la fe.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "definido por el Vaticano I como «dogma divinamente revelado» (Pastor aeternus, cap. 4), y así lo clasifica la {c:CDF98|Congregación para la Doctrina de la Fe} (1998, DS 3059-3075)",
          },
        ],
        sources: [
          {
            citations: ["PA4def"],
            label: "Pastor aeternus, cap. 4",
          },
          {
            citations: ["LG25"],
            label: "Lumen gentium 25",
          },
          {
            citations: ["LG12"],
            label: "Lumen gentium 12",
          },
          {
            citations: ["CEC889", "CEC891"],
            label: "Catecismo 889, 891",
          },
          {
            citations: ["ME2"],
            label: "Mysterium Ecclesiae 2",
          },
          {
            citations: ["CIC749"],
            label: "Código de Derecho Canónico, can. 749",
          },
        ],
      },
      {
        id: "QE-5",
        short: "el papa y los obispos",
        text: "Como Pedro y los demás apóstoles formaban un solo colegio, así el papa y los obispos. Los obispos no son vicarios del papa: gobiernan sus Iglesias con potestad propia, como «vicarios y legados de Cristo», y el primado del papa no anula esa potestad, sino que la afirma y la defiende. El colegio de los obispos, unido a su cabeza y nunca sin ella, es también sujeto de la potestad suprema sobre toda la Iglesia, que ejerce de modo solemne en el concilio ecuménico.",
        grades: [
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis:
              "(cap. 3) y reafirmado por el Catecismo (895: la autoridad del papa «no anula la de ellos, sino que, al contrario, la confirma y tutela»); la Congregación para la Doctrina de la Fe remite a ese capítulo (Denz-Hün 3061) al decir que el primado y los obispos están «en una originaria y esencial armonía» ({c:CDFP5|El primado del Sucesor de Pedro, n. 5 y nota 21})",
          },
          {
            kind: "church",
            grade: "magisterium",
            basis:
              "el colegio de los obispos como sujeto de la potestad suprema, con su cabeza y nunca sin ella (Lumen gentium 22; concilio ecuménico); la Nota explicativa previa dice cómo leer el cap. III de Lumen gentium",
          },
        ],
        sources: [
          {
            citations: ["PA3c"],
            label: "Pastor aeternus, cap. 3",
          },
          {
            citations: ["LG22"],
            label: "Lumen gentium 22",
          },
          {
            citations: ["CEC895"],
            label: "Catecismo 895",
          },
          {
            citations: ["CIC333", "CIC336"],
            label: "Código de Derecho Canónico, cann. 333 §1, 336",
          },
          {
            citations: ["NEP"],
            label: "Lumen gentium, Nota explicativa previa",
          },
        ],
      },
      {
        id: "QE-6",
        short: "lo que custodia el papa",
        text: "El Espíritu Santo no fue prometido a los sucesores de Pedro para revelar doctrinas nuevas, sino para custodiar y exponer fielmente lo que los apóstoles transmitieron. Esa infalibilidad «se extiende tanto cuanto abarca el depósito de la Revelación» (Lumen gentium 25); y como no es fruto de nuevas revelaciones, al papa y a los obispos «no se les dispensa de la necesidad de escrutar con los medios apropiados el tesoro de la divina Revelación» (Congregación para la Doctrina de la Fe, Mysterium Ecclesiae, 1973, n. 3). Una doctrina solo se tiene por definida infaliblemente si consta de modo manifiesto. A la enseñanza ordinaria del papa que no es una definición, los católicos le deben un «asentimiento religioso del entendimiento y de la voluntad», que no es todavía asentimiento de fe.",
        grades: [
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis:
              "en el capítulo de la definición (DS 3070, citado así por {c:LG25|Lumen gentium 25}, nota 83, y {c:ME3|Mysterium Ecclesiae}, nota 24); la definición misma es DS 3074",
          },
        ],
        sources: [
          {
            citations: ["PA4neque"],
            label: "Pastor aeternus, cap. 4",
          },
          {
            citations: ["LG25"],
            label: "Lumen gentium 25",
          },
          {
            citations: ["ME3"],
            label: "Mysterium Ecclesiae 3",
          },
          {
            citations: ["CIC749", "CIC752"],
            label: "Código de Derecho Canónico, cann. 749 §3 y 752",
          },
          {
            citations: ["CEC86", "CEC891", "CEC892"],
            label: "Catecismo 86, 891, 892",
          },
          {
            citations: ["CEC2035"],
            label: "Catecismo 2035",
          },
        ],
      },
      {
        id: "QE-7",
        short: "la unidad de la Iglesia",
        text: "Para la Iglesia católica, el papa es «el principio y fundamento perpetuo y visible de unidad, así de los obispos como de la multitud de los fieles». Por eso sostiene que la comunión de las Iglesias con la Iglesia de Roma, y de sus obispos con el obispo de Roma, es, «en el designio de Dios», un requisito esencial de la comunión plena y visible. A la vez reconoce una comunión real, aunque imperfecta, con los demás bautizados.",
        grades: [
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis:
              "(proemio) y propuesto de nuevo por el Vaticano II «como objeto de fe inconmovible», junto con la institución, perpetuidad y poder del primado ({c:LG18|Lumen gentium 18})",
          },
          {
            kind: "church",
            grade: "magisterium",
            basis:
              "el requisito de la comunión con Roma: encíclica ({c:UUS97|Ut unum sint 97}; la cita {c:CDFP15|El primado del Sucesor de Pedro, n. 15})",
          },
        ],
        sources: [
          {
            citations: ["PAproem"],
            label: "Pastor aeternus, proemio",
          },
          {
            citations: ["LG23"],
            label: "Lumen gentium 23",
          },
          {
            citations: ["UUS97"],
            label: "Ut unum sint 97",
          },
          {
            citations: ["CIC205"],
            label: "Código de Derecho Canónico, can. 205",
          },
          {
            citations: ["CEC838"],
            label: "Catecismo 838",
          },
        ],
      },
      {
        id: "QE-8",
        short: "el orden de los patriarcas",
        text: "El Concilio de Florencia, al definir el primado del papa, renovó también el orden de los patriarcas de Oriente, «quedando a salvo todos sus privilegios y derechos». Para la Iglesia católica, el episcopado y el primado son de institución divina, mientras que los patriarcados surgieron «por institución de la Iglesia», en un sistema que «pertenece a la guía de la Providencia ordinaria de Dios sobre la Iglesia» y que comporta «desde los inicios, el nexo con la tradición petrina»; y el sucesor de Pedro es «garante de la legítima diversidad de ritos, disciplinas y estructuras eclesiásticas entre Oriente y Occidente».",
        grades: [
          {
            kind: "unclassified",
            reason: "undeclared",
            basis: "la cláusula de Florencia sobre los patriarcas, decreto de un concilio ecuménico",
          },
          {
            kind: "church",
            grade: "magisterium",
            basis: "{c:LG23|Lumen gentium 23}",
          },
          {
            kind: "unclassified",
            reason: "no-own-grade",
            basis: "El primado del Sucesor de Pedro (Congregación para la Doctrina de la Fe, 1998)",
          },
        ],
        sources: [
          {
            citations: ["FLOpat"],
            label: "Florencia, Laetentur caeli",
          },
          {
            citations: ["CDFP68"],
            label: "El primado del Sucesor de Pedro 6 y 8",
          },
          {
            citations: ["LG23"],
            label: "Lumen gentium 23",
          },
        ],
      },
      {
        id: "QE-9",
        short: "el servicio del papa",
        text: "El papa se llama a sí mismo «servus servorum Dei», siervo de los siervos de Dios (Ut unum sint 88). Para la Iglesia católica, el primado no es una monarquía política ni un simple primado de honor, sino un servicio a la unidad, sometido como todo fiel a la Palabra de Dios. En 1995 Juan Pablo II llamó al obispo de Roma «el primero entre los servidores de la unidad», que debe asegurar la comunión de todas las Iglesias «con el poder y la autoridad sin los cuales esta función sería ilusoria» (Ut unum sint 94); en la misma encíclica pidió ayuda a las demás Iglesias para «encontrar una forma de ejercicio del primado que, sin renunciar de ningún modo a lo esencial de su misión, se abra a una situación nueva», y reconoció que la convicción católica sobre el papado «constituye una dificultad para la mayoría de los demás cristianos».",
        grades: [
          {
            kind: "church",
            grade: "magisterium",
            basis: "encíclica (Ut unum sint 88, 94–96)",
          },
          {
            kind: "unclassified",
            reason: "no-own-grade",
            basis:
              "El primado del Sucesor de Pedro (1998): consideraciones de la Congregación, sin fórmula de aprobación en el texto leído",
          },
        ],
        sources: [
          {
            citations: ["UUS88"],
            label: "Ut unum sint 88",
          },
          {
            citations: ["UUS94"],
            label: "Ut unum sint 94",
          },
          {
            citations: ["UUS95", "UUS96"],
            label: "Ut unum sint 95–96",
          },
          {
            citations: ["CDFP7"],
            label: "El primado del Sucesor de Pedro 7",
          },
          {
            citations: ["CDFP12"],
            label: "El primado del Sucesor de Pedro 12–13",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "La Iglesia católica funda esta enseñanza en las palabras de Cristo a Pedro, «doctrina tan manifiesta de las Sagradas Escrituras», «tal como siempre la entendió la Iglesia católica» {c:PA1perv|Vaticano I, Pastor aeternus, cap. 1}, en la necesidad de que dure lo que Cristo instituyó para el bien de la Iglesia, en la necesidad de que la fe pueda profesarse sin error {c:CEC890|Catecismo 890}, y en el testimonio de los concilios antiguos. La explica, sobre todo, como un servicio a la unidad: el papa es «el principio y fundamento perpetuo y visible de unidad» {c:LG23|Lumen gentium 23}.",
    ],
    fathers: [
      {
        lead: "El Catecismo cita a san Ireneo:",
        quote: [
          "Porque con esta Iglesia en razón de su origen más excelente debe necesariamente acomodarse toda Iglesia, es decir, los fieles de todas partes",
        ],
        author: "Ireneo de Lyon",
        work: "Adversus haereses 3, 3, 2",
        date: {
          year: 180,
          yearEnd: 189,
          circa: true,
        },
        citedIn: {
          citations: ["CEC834", "PA2"],
          label: "Catecismo 834",
        },
      },
      {
        lead: "El Catecismo cita a san Ignacio de Antioquía:",
        quote: ["«que preside en la caridad»"],
        author: "Ignacio de Antioquía",
        work: "A los Romanos, saludo",
        date: {
          year: 107,
          yearEnd: 110,
          circa: true,
          attribution: "fecha tradicional; discutida",
        },
        citedIn: {
          citations: ["CEC834"],
          label: "Catecismo 834",
        },
      },
    ],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para la Iglesia católica, el oficio de Pedro forma parte de la Iglesia tal como Cristo la fundó: «El Señor estableció solamente a Simón como roca y portador de las llaves de la Iglesia (Mt 16,18-19) y le constituyó Pastor de toda su grey (cf. Jn 21, 15 ss)» {c:LG22|Lumen gentium 22}, y lo que instituyó en él para el bien de la Iglesia «es necesario que dure» hasta el fin de los siglos {c:PA2|Vaticano I, Pastor aeternus, cap. 2}.",
  },
  scriptureSubtitle:
    "Los pasajes que los documentos católicos citan sobre el primado y la infalibilidad del papa, y cómo los leen.",
  scripture: [
    {
      refs: ["Matt.16.13-Matt.16.20"],
      text: "«Tú eres Pedro, y sobre esta piedra edificaré mi iglesia… Y á ti daré las llaves del reino de los cielos.» Para la Iglesia católica, Cristo dijo estas palabras a Simón solo, después de su confesión: Pedro, «a causa de la fe confesada por él», es la roca, y las llaves significan «la autoridad para gobernar la casa de Dios» {c:CEC552,CEC553|Catecismo 552–553}.",
      apologists: {
        arguments: [
          {
            title:
              "Las llaves se hacen eco de Isaías 22:22: a Pedro se le da autoridad para gobernar la Iglesia, incluido el atar y desatar",
            quotes: [
              {
                speaker: "Trent Horn",
                work: 'Refuting Papal Myths — "Peter Was Not a Pope"',
                outlet: "Catholic Answers Magazine",
                date: "22 de septiembre de 2015",
                locator:
                  "9 párrafos: del párrafo que empieza «Editors Note: In light of Pope Francis’s visit to…» al que termina «…so exalting his status would have contradicted his message.»",
                url: "https://www.catholic.com/magazine/online-edition/refuting-papal-myths-peter-was-not-a-pope",
                text: "Nota de la redacción: a la luz de la visita del papa Francisco a Estados Unidos, continuamos una serie de artículos que responden a los argumentos más comunes contra el oficio del papado y contra los hombres que lo han ocupado. El primer artículo de la serie puede leerse aquí.\n\nMito n.º 3: Pedro era importante, pero no tenía una autoridad especial que pudiera transmitirse a un sucesor, como el papa.\n\nEl papel de Pedro como “principal apóstol” se evidencia en el hecho de que es mencionado más que cualquier otro apóstol, a menudo habla en nombre de todo el grupo y aparece primero en todas las listas de los apóstoles. Como Judas siempre aparece al final, podemos deducir que estas listas se hacían en orden de importancia.\n\nAdemás, Cristo hizo a Pedro el único pastor de todo su rebaño (ver Juan 21:15-17), y el libro de los Hechos describe el liderazgo incomparable de Pedro en la Iglesia primitiva. Esto incluye su autoridad para hacer una declaración vinculante y dogmática en el concilio de Jerusalén (Hechos 15). Como dice el erudito anglicano J.N.D Kelly, “Pedro era el líder indiscutido de la iglesia joven” (Oxford Dictionary of the Popes, 1). Por último, en Mateo 16:18-19, Jesús cambió el nombre de Simón por Pedro, que significa roca, y dijo: “Tú eres Pedro [roca], y sobre esta roca edificaré mi iglesia, y los poderes de la muerte no prevalecerán contra ella. Te daré las llaves del reino de los cielos, y todo lo que ates en la tierra será atado en los cielos, y todo lo que desates en la tierra será desatado en los cielos.”\n\nEste pasaje está anticipado por Isaías 22:22, que habla de cómo Sebna, el malvado mayordomo jefe de Israel, fue reemplazado por el justo Eliaquim. Isaías 22:22 dice que Eliaquim tendría “la llave de la casa de David; él abrirá, y nadie cerrará; y él cerrará, y nadie abrirá”. Así como el rey Ezequías dio a Eliaquim autoridad para supervisar el reino de Israel, Cristo dio a Pedro autoridad para supervisar su Iglesia (es decir, las “llaves del reino”), lo que incluyó la autoridad de “atar y desatar”; en otras palabras, para determinar la doctrina y la práctica oficiales.\n\nEn respuesta a estos versículos, algunos protestantes sostienen que Pedro no es la roca sobre la que fue edificada la Iglesia, porque 1 Corintios 10:4 dice “la roca era Cristo”. Otros dicen que el texto griego de Mateo 16:18 muestra que, mientras a Simón se le llamaba petros, la roca sobre la que se edificaría la Iglesia se llamaba petras, y que así se muestra que la Iglesia no está edificada sobre Pedro. Pero en 1 Corintios, Pablo habla de Cristo pastoreando al antiguo Israel, no a la Iglesia, y en Mateo 16, petros y petras se refieren ambos a Pedro.\n\nSegún Juan 1:42, Jesús dio a Simón el nombre arameo Kepha, que significa simplemente “roca”. Pero a diferencia del arameo, en griego la palabra roca es un sustantivo femenino, así que Mateo usó la versión masculina de roca, petros, ya que llamar a Pedro petras hubiera equivalido a llamarlo ¡Patricia! Como dice el teólogo luterano Oscar Cullman, “petra=Kepha=petros” (Theological Dictionary of the New Testament, 98). Incluso el reformador protestante Juan Calvino dijo: “No hay diferencia de significado, lo reconozco, entre las dos palabras griegas petros y petra” (Commentary on Matthew Mark, and Luke, vol. 2).\n\nPor último, si Pedro no es la roca sobre la que se edifica la Iglesia, ¿por qué se molestó Jesús en cambiarle el nombre a Simón? Como escribe el erudito protestante Craig Keener en su comentario sobre Mateo: “[Jesús] juega con el apodo de Simón, ‘Pedro’, que en inglés equivale más o menos a ‘Rocky’: Pedro es ‘rocoso’, y sobre esta roca Jesús edificaría su Iglesia” (426).\n\n¿Pero no se refirió Pedro a sí mismo como “copresbítero” y no como “papa” en 1 Pedro 5:1? Sí, pero en este pasaje Pedro demuestra la humildad que anima a otros sacerdotes a practicar. Él escribió: “Revístanse todos de humildad en el trato mutuo” (5:5), así que exaltar su estatus habría contradicho su mensaje.",
                original:
                  "Editors Note: In light of Pope Francis’s visit to the United States, we are continuing a series of posts that answer the most common arguments made against the office of the papacy and the men who have held that office. The first post in the series can be accessed here.\n\nMyth #3: Peter was important, but he had no special authority that could be passed on to a successor like the pope.\n\nPeter’s role as “chief apostle” is evident in the fact that he is mentioned more than any other apostle, often speaks for the whole group, and is placed first in every list of the apostles. Since Judas is always listed last, we can deduce that these lists were made in order of importance.\n\nMoreover, Christ made Peter alone the shepherd over his whole flock (see John 21:15-17), and the book of Acts describes Peter’s unparalleled leadership in the early Church. This includes his authority to make a binding, dogmatic declaration at the council of Jerusalem (Acts 15). As the Anglican scholar J.N.D Kelly puts it, “Peter was the undisputed leader of the youthful church” (Oxford Dictionary of the Popes, 1). Finally, in Matthew 16:18-19, Jesus changed Simon’s name to Peter, which means rock, and said, “You are Peter [rock], and on this rock I will build my church, and the powers of death shall not prevail against it. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven.”\n\nThis passage is foreshadowed by Isaiah 22:22, which tells of how Israel’s wicked chief steward Shebna was replaced with the righteous Eli’akim. Isaiah 22:22 said Eli’akim would have “the key of the house of David; he shall open, and none shall shut; and he shall shut, and none shall open.” Just as King Hezekiah gave Eli’akim authority to oversee the kingdom of Israel, Christ gave Peter authority to oversee his Church (i.e., the “keys to the kingdom”), which included the authority to “bind and loose”—in other words, to determine official doctrine and practice.\n\nIn response to these verses, some Protestants claim Peter is not the rock upon whom the Church was built, because 1 Corinthians 10:4 says “the rock was Christ.” Others say the Greek text of Matthew 16:18 shows that while Simon was called petros, the rock the Church will be built on was called petras, thus showing that the Church is not built on Peter. But in 1 Corinthians, Paul is talking about Christ shepherding ancient Israel, not the Church, and in Matthew 16, petros and petras both refer to Peter.\n\nAccording to John 1:42, Jesus gave Simon the Aramaic name Kepha, which means simply “rock.” But unlike in Aramaic, in Greek the word rock is a feminine noun, so Matthew used the masculine version of rock, or petros, since calling Peter petras would have been on par with calling him Patricia! As Lutheran theologian Oscar Cullman puts it, “petra=Kepha=petros” (Theological Dictionary of the New Testament, 98). Even the Protestant Reformer John Calvin said, “There is no difference of meaning, I acknowledge, between the two Greek words petros and petra” (Commentary on Matthew Mark, and Luke, vol. 2).\n\nFinally, if Peter is not the rock upon whom the Church is built, then why did Jesus bother to change Simon’s name in the first place? As Protestant scholar Craig Keener writes in his commentary on Matthew, “[Jesus] plays on Simon’s nickname, ‘Peter,’ which is roughly the English ‘Rocky’: Peter is ‘rocky,’ and on this rock Jesus would build his Church” (426).\n\nBut didn’t Peter refer to himself as a “fellow elder” and not as “pope” in 1 Peter 5:1? Yes, but in this passage Peter is demonstrating the humility that he is encouraging other priests to practice. He wrote, “Clothe yourselves, all of you, with humility toward one another” (5:5), so exalting his status would have contradicted his message.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Petros y petra son sinónimos en tiempos de Jesús; en arameo la palabra era la misma",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "Peter the Rock",
                outlet: "Catholic Answers Magazine",
                date: "1 de noviembre de 1998",
                locator: "Ver la página enlazada",
                url: "https://www.catholic.com/magazine/print-edition/peter-the-rock-0",
                text: "En el siglo I, cuando se compuso el Evangelio de Mateo, los dos términos eran sinónimos (cf. D. A. Carson en su tratamiento del pasaje en The Expositor's Bible Commentary, publicado por Zondervan).",
                original:
                  "In the first century, when Matthew's Gospel was composed, the two terms were synonyms (cf. D. A. Carson's treatment of the passage in The Expositor's Bible Commentary, published by Zondervan).",
                translation: "ai-assisted",
              },
              {
                speaker: "Jimmy Akin",
                work: "Peter the Rock",
                outlet: "Catholic Answers Magazine",
                date: "1 de noviembre de 1998",
                locator: "Párrafo que empieza «I also had not devoted sufficient attention…»",
                url: "https://www.catholic.com/magazine/print-edition/peter-the-rock-0",
                text: "La declaración de Jesús en arameo —“Tú eres kepha y sobre esta kepha edificaré mi Iglesia”— debería ser decisiva para nuestra interpretación.",
                original:
                  'Jesus\' statement in Aramaic—"You are kepha and on this kepha I will build my Church"—should be decisive for our interpretation.',
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "«Esta roca» puede referirse a Pedro incluso después de «tú»",
            quotes: [
              {
                speaker: "Karlo Broussard",
                work: "Peter Is the Rock Upon Which the Church Is Founded",
                outlet: "Catholic Answers Magazine",
                date: "4 de julio de 2019",
                locator: "Ver la página enlazada",
                url: "https://www.catholic.com/magazine/online-edition/peter-is-the-rock-upon-which-the-church-is-founded",
                text: "Solo porque se use el pronombre “este” en lugar del pronombre personal no se sigue que deba referirse a algo distinto de la persona a la que se dirigía la afirmación anterior.",
                original:
                  'just because the pronoun "this" is used rather than the personal pronoun it doesn\'t follow that it must be referring to something other than the person who was being addressed in the preceding statement.',
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.21.15-John.21.17"],
      text: "«Apacienta mis ovejas»: el Vaticano I lee aquí que Cristo, después de la resurrección, confió a Pedro todo el rebaño {c:PA1|cap. 1}. Juan Pablo II subraya que la triple profesión de amor responde a la triple negación {c:UUS91|Ut unum sint 91}.",
      apologists: {
        arguments: [
          {
            title: "Solo Cristo hace de Pedro el pastor de todo el rebaño: su papel único como guía",
            quotes: [
              {
                speaker: "Karlo Broussard",
                work: "Protestant Comebacks When Catholics Say Peter Is Pope",
                outlet: "Catholic Answers Magazine",
                date: "29 de noviembre de 2022",
                locator:
                  "8 párrafos: del párrafo que empieza «Catholics might think they have a slam-dunk argument for…» al que termina «…but bringing him back up to their level (212).»",
                url: "https://www.catholic.com/magazine/online-edition/protestant-comebacks-when-catholics-say-peter-is-pope",
                text: "Los católicos podrían pensar que tienen un argumento contundente para ver a Pedro como papa... pero los protestantes también tienen sus réplicas. ¿Cómo puede responder el católico?\n\nLos católicos no usan solo “sobre esta roca” para argumentar a favor del papado. Otro argumento de que Pedro fue el primer papa proviene de Juan 21:15-17:\n\nCuando hubieron desayunado, Jesús dijo a Simón Pedro: “Simón, hijo de Juan, ¿me amas más que a estos?” Él le respondió: “Sí, Señor; tú sabes que te amo.” Le dijo: “Apacienta mis corderos.” Por segunda vez le dijo: “Simón, hijo de Juan, ¿me amas?” Le respondió: “Sí, Señor; tú sabes que te amo.” Le dijo: “Pastorea mis ovejas.” Le dijo por tercera vez: “Simón, hijo de Juan, ¿me amas?” Pedro se entristeció porque le dijo por tercera vez: “¿Me amas?” Y le respondió: “Señor, tú lo sabes todo; tú sabes que te amo.” Jesús le dijo: “Apacienta mis ovejas.”\n\nPara los católicos, el mandato exclusivo de apacentar las ovejas de Jesús señala claramente el papel único de Pedro como líder de la Iglesia de Jesús. Como en Mateo 16:18-19, donde Jesús distingue a Pedro y lo hace el fundamento visible de su Iglesia, aquí Jesús vuelve a distinguir a Pedro y lo hace pastor de su rebaño, un encargo universal que se extiende tanto a los jóvenes “corderos” (en griego, arnion) como a las “ovejas” adultas (en griego, probaton).\n\nPero los protestantes tienen réplicas a Juan 21:15-17 que cuestionan la afirmación católica.\n\n“El intercambio sirve solo para darle a Pedro la oportunidad de compensar las tres veces que negó a Cristo.”\n\nQuizá la contrarréplica más común a Juan 21:15-17 es que Jesús simplemente le estaba dando a Pedro la oportunidad de arrepentirse de sus tres negaciones. Norman L. Geisler y Ralph E. MacKenzie lo expresan sucintamente:\n\nEl sentido general del pasaje en Juan habla más de la debilidad de Pedro y de su necesidad de restauración que de su autoridad única. La razón por la que Pedro es señalado para la restauración, al ser preguntado tres veces por Jesús... fue que solo Pedro negó al Señor tres veces y, por eso, solo Pedro necesitaba ser restaurado. Así, Jesús no estaba exaltando aquí a Pedro por encima de los otros apóstoles, sino devolviéndolo a su mismo nivel (212).",
                original:
                  "Catholics might think they have a slam-dunk argument for Peter as the pope . . . but Protestants have their comebacks, too. How can the Catholic answer?\n\nCatholic don’t just use “on this rock” to argue for the papacy. Another argument that Peter was the first pope comes from John 21:15-17:\n\nWhen they had finished breakfast, Jesus said to Simon Peter, “Simon, son of John, do you love me more than these?” He said to him, “Yes, Lord; you know that I love you.” He said to him, “Feed my lambs.” A second time he said to him, “Simon, son of John, do you love me?” He said to him, “Yes, Lord; you know that I love you.” He said to him, “Tend my sheep.” He said to him the third time, “Simon, son of John, do you love me?” Peter was grieved because he said to him the third time, “Do you love me?” And he said to him, “Lord, you know everything; you know that I love you.” Jesus said to him, “Feed my sheep.”\n\nFor Catholics, the exclusive command to feed Jesus’ sheep clearly signals Peter’s unique role as leader of Jesus’ Church. As in Matthew 16:18-19, where Jesus singles out Peter and makes him the visible foundation of his Church, here Jesus singles out Peter again and makes him the shepherd of his flock—a universal charge that extends to both the young “lambs” (Greek, arnion) and the old “sheep” (Greek, probaton).\n\nBut Protestants have comebacks to John 21:15-17 that challenge the Catholic claim.\n\n“The exchange is merely to give Peter the opportunity to make up for the three times he denied Christ.”\n\nPerhaps the most common counter-response given to John 21:15-17 is that Jesus was simply giving Peter an opportunity to repent for his three denials. Norman L. Geisler and Ralph E. MacKenzie put it succinctly:\n\nThe overall import of the passage in John speaks more to Peter’s weakness and need for restoration than to his unique authority. The reason Peter is singled out for restoration, being asked three times by Jesus . . . was that only Peter denied the Lord three times and so only Peter needed to be restored. Thus, Jesus was not exalting Peter above the other apostles here but bringing him back up to their level (212).",
                translation: "ai-assisted",
              },
              {
                speaker: "Trent Horn",
                work: 'Refuting Papal Myths — "Peter Was Not a Pope"',
                outlet: "Catholic Answers Magazine",
                date: "22 de septiembre de 2015",
                locator:
                  "9 párrafos: del párrafo que empieza «Editors Note: In light of Pope Francis’s visit to…» al que termina «…so exalting his status would have contradicted his message.»",
                url: "https://www.catholic.com/magazine/online-edition/refuting-papal-myths-peter-was-not-a-pope",
                text: "Nota de la redacción: a la luz de la visita del papa Francisco a Estados Unidos, continuamos una serie de artículos que responden a los argumentos más comunes contra el oficio del papado y contra los hombres que lo han ocupado. El primer artículo de la serie puede leerse aquí.\n\nMito n.º 3: Pedro era importante, pero no tenía una autoridad especial que pudiera transmitirse a un sucesor, como el papa.\n\nEl papel de Pedro como “principal apóstol” se evidencia en el hecho de que es mencionado más que cualquier otro apóstol, a menudo habla en nombre de todo el grupo y aparece primero en todas las listas de los apóstoles. Como Judas siempre aparece al final, podemos deducir que estas listas se hacían en orden de importancia.\n\nAdemás, Cristo hizo a Pedro el único pastor de todo su rebaño (ver Juan 21:15-17), y el libro de los Hechos describe el liderazgo incomparable de Pedro en la Iglesia primitiva. Esto incluye su autoridad para hacer una declaración vinculante y dogmática en el concilio de Jerusalén (Hechos 15). Como dice el erudito anglicano J.N.D Kelly, “Pedro era el líder indiscutido de la iglesia joven” (Oxford Dictionary of the Popes, 1). Por último, en Mateo 16:18-19, Jesús cambió el nombre de Simón por Pedro, que significa roca, y dijo: “Tú eres Pedro [roca], y sobre esta roca edificaré mi iglesia, y los poderes de la muerte no prevalecerán contra ella. Te daré las llaves del reino de los cielos, y todo lo que ates en la tierra será atado en los cielos, y todo lo que desates en la tierra será desatado en los cielos.”\n\nEste pasaje está anticipado por Isaías 22:22, que habla de cómo Sebna, el malvado mayordomo jefe de Israel, fue reemplazado por el justo Eliaquim. Isaías 22:22 dice que Eliaquim tendría “la llave de la casa de David; él abrirá, y nadie cerrará; y él cerrará, y nadie abrirá”. Así como el rey Ezequías dio a Eliaquim autoridad para supervisar el reino de Israel, Cristo dio a Pedro autoridad para supervisar su Iglesia (es decir, las “llaves del reino”), lo que incluyó la autoridad de “atar y desatar”; en otras palabras, para determinar la doctrina y la práctica oficiales.\n\nEn respuesta a estos versículos, algunos protestantes sostienen que Pedro no es la roca sobre la que fue edificada la Iglesia, porque 1 Corintios 10:4 dice “la roca era Cristo”. Otros dicen que el texto griego de Mateo 16:18 muestra que, mientras a Simón se le llamaba petros, la roca sobre la que se edificaría la Iglesia se llamaba petras, y que así se muestra que la Iglesia no está edificada sobre Pedro. Pero en 1 Corintios, Pablo habla de Cristo pastoreando al antiguo Israel, no a la Iglesia, y en Mateo 16, petros y petras se refieren ambos a Pedro.\n\nSegún Juan 1:42, Jesús dio a Simón el nombre arameo Kepha, que significa simplemente “roca”. Pero a diferencia del arameo, en griego la palabra roca es un sustantivo femenino, así que Mateo usó la versión masculina de roca, petros, ya que llamar a Pedro petras hubiera equivalido a llamarlo ¡Patricia! Como dice el teólogo luterano Oscar Cullman, “petra=Kepha=petros” (Theological Dictionary of the New Testament, 98). Incluso el reformador protestante Juan Calvino dijo: “No hay diferencia de significado, lo reconozco, entre las dos palabras griegas petros y petra” (Commentary on Matthew Mark, and Luke, vol. 2).\n\nPor último, si Pedro no es la roca sobre la que se edifica la Iglesia, ¿por qué se molestó Jesús en cambiarle el nombre a Simón? Como escribe el erudito protestante Craig Keener en su comentario sobre Mateo: “[Jesús] juega con el apodo de Simón, ‘Pedro’, que en inglés equivale más o menos a ‘Rocky’: Pedro es ‘rocoso’, y sobre esta roca Jesús edificaría su Iglesia” (426).\n\n¿Pero no se refirió Pedro a sí mismo como “copresbítero” y no como “papa” en 1 Pedro 5:1? Sí, pero en este pasaje Pedro demuestra la humildad que anima a otros sacerdotes a practicar. Él escribió: “Revístanse todos de humildad en el trato mutuo” (5:5), así que exaltar su estatus habría contradicho su mensaje.",
                original:
                  "Editors Note: In light of Pope Francis’s visit to the United States, we are continuing a series of posts that answer the most common arguments made against the office of the papacy and the men who have held that office. The first post in the series can be accessed here.\n\nMyth #3: Peter was important, but he had no special authority that could be passed on to a successor like the pope.\n\nPeter’s role as “chief apostle” is evident in the fact that he is mentioned more than any other apostle, often speaks for the whole group, and is placed first in every list of the apostles. Since Judas is always listed last, we can deduce that these lists were made in order of importance.\n\nMoreover, Christ made Peter alone the shepherd over his whole flock (see John 21:15-17), and the book of Acts describes Peter’s unparalleled leadership in the early Church. This includes his authority to make a binding, dogmatic declaration at the council of Jerusalem (Acts 15). As the Anglican scholar J.N.D Kelly puts it, “Peter was the undisputed leader of the youthful church” (Oxford Dictionary of the Popes, 1). Finally, in Matthew 16:18-19, Jesus changed Simon’s name to Peter, which means rock, and said, “You are Peter [rock], and on this rock I will build my church, and the powers of death shall not prevail against it. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven.”\n\nThis passage is foreshadowed by Isaiah 22:22, which tells of how Israel’s wicked chief steward Shebna was replaced with the righteous Eli’akim. Isaiah 22:22 said Eli’akim would have “the key of the house of David; he shall open, and none shall shut; and he shall shut, and none shall open.” Just as King Hezekiah gave Eli’akim authority to oversee the kingdom of Israel, Christ gave Peter authority to oversee his Church (i.e., the “keys to the kingdom”), which included the authority to “bind and loose”—in other words, to determine official doctrine and practice.\n\nIn response to these verses, some Protestants claim Peter is not the rock upon whom the Church was built, because 1 Corinthians 10:4 says “the rock was Christ.” Others say the Greek text of Matthew 16:18 shows that while Simon was called petros, the rock the Church will be built on was called petras, thus showing that the Church is not built on Peter. But in 1 Corinthians, Paul is talking about Christ shepherding ancient Israel, not the Church, and in Matthew 16, petros and petras both refer to Peter.\n\nAccording to John 1:42, Jesus gave Simon the Aramaic name Kepha, which means simply “rock.” But unlike in Aramaic, in Greek the word rock is a feminine noun, so Matthew used the masculine version of rock, or petros, since calling Peter petras would have been on par with calling him Patricia! As Lutheran theologian Oscar Cullman puts it, “petra=Kepha=petros” (Theological Dictionary of the New Testament, 98). Even the Protestant Reformer John Calvin said, “There is no difference of meaning, I acknowledge, between the two Greek words petros and petra” (Commentary on Matthew Mark, and Luke, vol. 2).\n\nFinally, if Peter is not the rock upon whom the Church is built, then why did Jesus bother to change Simon’s name in the first place? As Protestant scholar Craig Keener writes in his commentary on Matthew, “[Jesus] plays on Simon’s nickname, ‘Peter,’ which is roughly the English ‘Rocky’: Peter is ‘rocky,’ and on this rock Jesus would build his Church” (426).\n\nBut didn’t Peter refer to himself as a “fellow elder” and not as “pope” in 1 Peter 5:1? Yes, but in this passage Peter is demonstrating the humility that he is encouraging other priests to practice. He wrote, “Clothe yourselves, all of you, with humility toward one another” (5:5), so exalting his status would have contradicted his message.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "La triple profesión de Pedro sana su triple negación (Heschmeyer; la página toma su lectura de Ut unum sint 91)",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "The Fisher Pope",
                outlet: "Catholic Answers Magazine",
                date: "5 de octubre de 2020",
                locator:
                  "10 párrafos: del párrafo que empieza «St. Augustine saw in this a reference to the…» al que termina «…singled Peter out as the leader of his Church.»",
                url: "https://www.catholic.com/magazine/print-edition/the-fisher-pope",
                text: "San Agustín vio en esto una referencia a la misión escatológica de la Iglesia: “El Señor indicó con una acción externa el tipo de carácter que la Iglesia tendría al final del mundo” (Tratado 122 sobre Juan [20:30-21:11]). Dicho de otra manera, Juan muestra a los discípulos no solo como pescadores de hombres, sino como quienes nos llevan a salvo a la otra orilla, arrastrando la red de la Iglesia hasta las costas eternas del cielo y hasta el Cristo glorificado. Por eso Juan menciona que hay siete discípulos, ya que siete es el número bíblico de la plenitud y del reposo celestial (cf. Heb. 4:4).\n\nQuizá esa interpretación parezca rebuscada. ¿Por qué leer en esto algo más que un relato sobre peces llevados a la orilla? Además del caso ya visto, en el que Jesús usó la pesca milagrosa para hacer un punto sobre la Iglesia y la evangelización, tenemos también su enseñanza explícita sobre el asunto:\n\nOtra vez, el reino de los cielos es semejante a una red que fue echada al mar y recogió peces de toda clase; cuando se llenó, la sacaron a la orilla, se sentaron y pasaron los buenos a los recipientes, pero tiraron los malos. Así será al fin de la era. Saldrán los ángeles, separarán a los malos de los justos y los arrojarán al horno de fuego; allí habrá llanto y crujir de dientes (Mt. 13:47-50).\n\n¿Cómo describe a la Iglesia terrena? Como una red que contiene peces buenos y malos. ¿Y qué representa la red arrastrada a la orilla? El “fin de la era”, el fin del mundo en el que los justos serán separados de los malvados. Jesús usa un conjunto coherente de imágenes, en sus palabras y en sus obras. La lectura que hace Agustín de Juan 21 simplemente reconoce este hecho.\n\nPero observemos que los líderes de la Iglesia no pueden hacerlo por sí solos. Por sí mismos no pescan nada, e incluso cuando hacen la pesca milagrosa no pueden llevarla a la orilla. Afortunadamente, esto no es el final de la historia. Jesús les ordena: “Traigan algunos de los peces que acaban de pescar”, y así “Simón Pedro subió a la barca y arrastró la red a tierra, llena de peces grandes, ciento cincuenta y tres; y aunque eran tantos, la red no se rompió” (Juan 21:10-11).\n\nAunque las instrucciones de Jesús van dirigidas a todos los discípulos, Juan nos dice que es Simón Pedro quien trae las redes. Recordemos que son las mismas redes que todos juntos no habían podido recoger momentos antes. Ahora, por orden de Jesús, Pedro no solo lleva la pesca hasta Cristo, sino que lo hace sin romper las redes.\n\nY cuando Juan dice que las redes no se rompieron, usa la palabra schisma, raíz de la palabra “cisma”. Pedro tiene un papel especial en llevar a la Iglesia hasta Cristo, precisamente al mantenernos unidos en un solo rebaño, porque de otro modo caeríamos en el cisma y no llegaríamos a casa a salvo.\n\nEste papel especial de Pedro se reitera a lo largo del último capítulo del Evangelio de Juan, de maneras grandes y pequeñas. El desayuno de los discípulos con Jesús se cocina sobre un “fuego de carbón” (Juan 21:9). ¿Por qué Juan menciona un detalle aparentemente tan trivial? Porque fue junto a un fuego de carbón donde Pedro había negado a Jesús (Juan 18:18).\n\nDespués del desayuno, Jesús le pregunta famosamente a Pedro tres veces: “¿Me amas?” (Juan 21:15-17). Pero en realidad va más allá y pregunta: “Simón, hijo de Juan, ¿me amas más que a estos?” (Juan 21:15). Aquí hay menos sutileza: la triple profesión de fe de Pedro es una especie de sanación de su triple negación anterior. Y después de cada respuesta, Jesús le dice a Pedro: “Apacienta mis corderos”, “Pastorea mis ovejas” y “Apacienta mis ovejas”.\n\nEl Buen Pastor llama al pescador para que sea su pastor. Una vez más, entre los otros discípulos, Jesús ha señalado a Pedro como el líder de su Iglesia.",
                original:
                  "St. Augustine saw in this a reference to the eschatological mission of the Church: “The Lord indicated by an outward action the kind of character the Church would have in the end of the world” (Tractate 122 on John [20:30-21:11]). In other words, John shows the disciples not only as fishers of men but as bringing us safely home to the other side, hauling the net of the Church to the eternal shores of heaven and to the glorified Christ. It’s why John mentions that there are seven disciples, since seven is the biblical number of completion and of heavenly rest (cf. Heb. 4:4).\n\nPerhaps that interpretation seems far-fetched. Why would we read into this any more than a story about fish being brought ashore? Besides the instance we’ve already seen in which Jesus used the miraculous catch as a way of making a point about the Church and evangelization, we also have his explicit teaching on the matter:\n\nAgain, the kingdom of heaven is like a net which was thrown into the sea and gathered fish of every kind; when it was full, men drew it ashore and sat down and sorted the good into vessels but threw away the bad. So it will be at the close of the age. The angels will come out and separate the evil from the righteous and throw them into the furnace of fire; there men will weep and gnash their teeth (Matt. 13:47-50).\n\nHow does he depict the earthly Church? As a net, containing both good and bad fish. And what’s represented by the net being drawn ashore? The “close of the age,” the end of the world in which the just will be separated from the wicked. Jesus is using a consistent set of images, in his word and in his deeds. Augustine’s reading of John 21 simply recognizes this fact.\n\nBut notice that the leaders of the Church can’t do it on their own. By themselves, they catch nothing, and even when they do catch the miraculous haul, they cannot bring it ashore. Thankfully, this isn’t the end of the story. Jesus orders them to “bring some of the fish that you have just caught,” and so “Simon Peter went aboard and hauled the net ashore, full of large fish, a hundred and fifty-three of them; and although there were so many, the net was not torn” (John 21:10-11).\n\nEven though Jesus’ instructions are to all of the disciples, John tells us that it is Simon Peter who brings the nets in. Remember, these are the same nets that all of them together were unable to bring in, moments earlier. Now, at the command of Jesus, Peter not only brings the catch home to Christ, he does so without tearing the nets.\n\nAnd when John says that the nets are not “torn,” he uses the word schisma, the root of the word schism. Peter has a special role in bringing the Church home to Christ, precisely by keeping us united in one fold, since we would otherwise fall into schism and not make it home safely.\n\nThis special role of Peter is reiterated throughout the final chapter of John’s Gospel in ways small and large. The disciples’ breakfast with Jesus is cooked over a “charcoal fire” (John 21:9). Why does John mention such a seemingly trivial detail? Because it was over a charcoal fire that Peter had denied Jesus (John 18:18).\n\nAfter breakfast, Jesus famously asks Peter three times, “Do you love me?” (John 21:15-17). But in fact he goes further, asking, “Simon, son of John, do you love me more than these?” (John 21:15). Here there is less subtlety: Peter’s threefold proclamation of faith is a sort of healing for his earlier threefold denial. And after each time, Jesus says to Peter, “Feed my lambs,” “Tend my sheep,” and “Feed my sheep.”\n\nThe Good Shepherd is calling the fisherman as his shepherd. Once more, amid the other disciples, Jesus has singled Peter out as the leader of his Church.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Luke.22.31-Luke.22.32"],
      text: "«Mas yo he rogado por ti que tu fe no falte: y tú, una vez vuelto, confirma á tus hermanos»: el Vaticano I lee aquí la promesa que funda el carisma de «verdad y de fe que nunca falla» dado a Pedro y a sus sucesores {c:PA4char|cap. 4}.",
      apologists: {
        arguments: [
          {
            title:
              "Jesús ora por Simón solamente y le dice que confirme a sus hermanos: un papel de liderazgo especial entre los Doce (Akin); esa frase llega «al corazón del papado», y Pedro es un líder servidor (Heschmeyer)",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "St. Peter: What NOBODY Knows!",
                outlet: "The Jimmy Akin Podcast",
                date: "8 de julio de 2025",
                locator:
                  "27 párrafos: del párrafo que empieza «Now, there’s something to be aware of in this…» al que termina «…and see what Jesus has to say in it.»",
                url: "https://www.catholic.com/audio/tjap/st-peter-what-nobody-knows",
                text: "Ahora, hay algo que tener en cuenta en este pasaje que no resulta evidente en la mayoría de las traducciones al inglés.\n\nEl inglés estándar contemporáneo es raro en el sentido de que no tiene una forma distinta para el plural de la segunda persona. Por eso, hoy, la gente puede usar la palabra “you” para referirse a una sola persona o a un grupo de personas. Como “you” puede ser singular o plural, esto genera confusión.\n\n“You are invited to my party” puede significar que una persona está invitada, o que está invitado todo un grupo de personas, y el contexto no siempre aclara cuál de las dos cosas se quiere decir.\n\nPor eso —aquí en el sur— usamos “y’all” como pronombre plural de segunda persona, y esto ya se está volviendo estándar en el inglés americano. Así que qué bueno ver que otros se van poniendo al día.\n\nBueno, el inglés es inusual entre las lenguas que tienen número plural en su gramática, y la mayoría de las lenguas siempre tuvieron formas distintas para el singular y el plural de la segunda persona. Entre ellas están las lenguas bíblicas: hebreo, arameo y griego.\n\nY es muy evidente al leer el Nuevo Testamento griego si Jesús está diciendo “you” —singular— o “y’all” —plural—. Por ejemplo, si leen la versión de Lucas de las bienaventuranzas, Jesús dice:\n\nDichosos los pobres, porque de ustedes es el reino de Dios.\n\nDichosos los que ahora tienen hambre, porque ustedes serán saciados.\n\nDichosos los que ahora lloran, porque ustedes reirán (Lucas 6:20-21).\n\nLamentablemente, la mayoría de las traducciones de la Biblia todavía no están al día, y por eso tienden a usar simplemente “you”, lo que oculta cosas importantes.\n\nSi lo corregimos, encontramos que lo que Jesús realmente dice en su declaración a Pedro es esto:\n\n“Simón, Simón, mira que Satanás ha pedido tener a ustedes, para zarandearlos como al trigo, pero yo he rogado por ti para que tu fe no falle. Y cuando te hayas vuelto, fortalece a tus hermanos” (Lucas 22:31-32).\n\nFíjense en el cambio entre “y’all” y “you”. Jesús dice que Satanás ha pedido tener a los discípulos como grupo, para poder zarandearlos como al trigo.\n\nPero Jesús ha rogado específicamente por Simón para que su fe no falle, y dice que cuando Simón se haya vuelto, debe fortalecer a sus hermanos.\n\nAsí vemos otra vez a Jesús dando a Pedro un papel de liderazgo especial entre los Doce.\n\nJesús ha rogado específicamente por la fe de Pedro, y le encarga fortalecer a los otros miembros de los Doce tras el arresto que se acerca. Esta es otra instancia en la que Jesús da a Pedro un papel de liderazgo único entre los Doce.\n\nAsí vemos cómo Jesús maneja la situación cuando estalla la disputa en la Última Cena.\n\nPrimero, Jesús establece el principio general que se aplica a ser grande en la comunidad cristiana: el líder debe ser el servidor de los demás.\n\nSegundo, les da a los doce discípulos la garantía, como grupo, de que todos tendrán lugares importantes en su reino.\n\nY tercero, se vuelve a Pedro y lo distingue para un papel especial de liderazgo, diciéndole que fortalezca a sus hermanos.\n\nNoten que esto aplica el principio general con el que Jesús comenzó su respuesta. Al fortalecer a sus hermanos, Pedro ha de ayudarlos. Ha de ser su servidor.\n\nAsí, en lugar de imponerse sobre los demás, Pedro ha de ser un líder servidor.\n\nY esta es la respuesta de Jesús a la pregunta de cuál de los discípulos debe ser considerado el más grande. Es Pedro, y esto debe mostrarse en la manera en que Pedro sirve a los demás. Ha de ser el siervo de los siervos de Dios.\n\nAsí, Jesús indica que Pedro es el líder único de los discípulos.\n\nAsí vemos que el Evangelio de Lucas —como el Evangelio de Mateo— contiene un pasaje en el que Jesús da a Pedro un papel de liderazgo único entre los Doce.\n\nEl Evangelio de Juan\n\nAhora pasemos al Evangelio de Juan y veamos qué tiene para decir Jesús.",
                original:
                  "Now, there’s something to be aware of in this passage that is not obvious in most English translations.\n\nStandard contemporary English is odd in that it does not have a distinct form for a plural second person pronoun. That’s why—today—people can use the word “you” to refer to a single person—or they can use it to refer to a group of people. Since “you” can be either singular or plural, this causes confusion.\n\n“You are invited to my party” can either mean one person is invited or that a whole group of people are invited, and context doesn’t always make it clear which is intended.\n\nThat’s why—here in the South—we use “y’all” as the plural second person pronoun, and this is now becoming standard in American English. So, nice to see other folks catching up.\n\nWell, English is unusual among languages that have the plural number in their grammar, and most language have always had distinct singular and plural forms of you. Among them are the biblical languages Hebrew, Aramaic, and Greek.\n\nAnd it’s really obvious when you’re reading the Greek New Testament whether Jesus is saying you—singular—or y’all—plural. For example, if you read Luke’s version of the beatitudes, Jesus says:\n\nBlessed are the poor, because y’all’s is the kingdom of God.\n\nBlessed are those who are hungry now, because y’all will be satisfied.\n\nBlessed are those who weep now, because y’all will laugh (Luke 6:20-21).\n\nUnfortunately, most Bible translations aren’t up to speed yet, and so they tend to just use “you,” and this obscures important things.\n\nIf we correct for this, we find that what Jesus actually says in his statement to Peter is this:\n\n“Simon, Simon, behold, Satan demanded to have y’all, that he might sift y’all like wheat, but I have prayed for you that your faith may not fail. And when you have turned again, strengthen your brothers” (Luke 22:31-32).\n\nNotice the shift between y’all and you. Jesus says that Satan has demanded to have the disciples as a group so that he could sift them like wheat.\n\nBut Jesus has prayed for Simon specifically so that his faith might not fail, and he says that when Simon has turned back, he is to strengthen his brothers.\n\nSo here we see Jesus—once again—giving Peter a special leadership role among the Twelve.\n\nJesus has prayed for Peter’s faith specifically, and he instructs him to strengthen the other members of the Twelve in the aftermath of Jesus’ coming arrest. This is another instance of Jesus giving Peter a unique leadership role among the Twelve.\n\nWe thus see how Jesus handles the situation when the dispute breaks out at the Last Supper.\n\nFirst, Jesus establishes the general principle that applies to being great in the Christian community: The leader must be the servant of the others.\n\nSecond he gives the Twelve disciples his assurance as a group that they will all have important places in his kingdom.\n\nAnd third, he turns to Peter and singles him out for a special leadership role, telling him to strengthen his brothers.\n\nNote that this applies the general principle that Jesus began his response with. By strengthening his brothers, Peter is to help them. He is to be their servant.\n\nThus—rather than lording it over the others—Peter is to be a servant leader.\n\nAnd this is Jesus’ answer to the question of which of the disciples is to be regarded as the greatest. It’s Peter, and this is to be revealed by how Peter serves the others. He is to be the servant of the servants of God.\n\nJesus thus indicates that Peter is the unique leader of the disciples.\n\nAnd so we see that the Gospel of Luke—like the Gospel of Matthew—contains a passage in which Jesus gives Peter a unique leadership role among the Twelve.\n\nThe Gospel of John\n\nNow let’s turn to the Gospel of John and see what Jesus has to say in it.",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "The One Passage that Proves the Papacy (to Protestants)",
                outlet: "Shameless Popery",
                date: "10 de septiembre de 2024",
                locator:
                  "5 párrafos: del párrafo que empieza «He says, I’m among you as one who serves.…» al que termina «…the kingdom, what’s meant by the bindin and loosening.»",
                url: "https://www.catholic.com/audio/sp/142684",
                text: "Dice: estoy entre ustedes como quien sirve. Eso son los versículos 25 a 27. Enseguida, distingue a los doce y dice, en 28 a 30: ustedes son los que han estado conmigo en mis pruebas, como mi Padre me asignó un reino. Así que yo les asigno que coman y beban a mi mesa en mi reino y se sienten en tronos juzgando a las doce tribus de Israel. Entonces hay liderazgo en la Iglesia. Es liderazgo apostólico en sus orígenes. Lo vemos con los doce. Tenemos doce líderes claramente identificados. Uno de ellos, como sabemos, Judas, va a ser reemplazado por Matías, pero igual van a mantener esta estructura de liderazgo en la Iglesia. Y en el versículo siguiente, ¿saben qué hace? Se vuelve a uno de los doce. Si solo están hablando del liderazgo de servicio y destacando el liderazgo de servicio de los doce, distingue a uno de los doce.\n\nMe imagino que pueden adivinar cuál. Dice: Simón, Simón, mira que Satanás ha pedido tenerlos a ustedes para zarandearlos como al trigo. Ahora tienen que saber que aquí el “ustedes” es plural. Es “ustedes todos”. Son “ustedes, los doce”. ¿Y conocemos el contexto, no? Todos van a abandonar o traicionar a Jesús de alguna manera. Judas lo va a entregar. Los otros once van a huir. Simón Pedro va a negar a Jesús tres veces. Va a ser una noche bastante lamentable para todos los involucrados. Y Jesús sabe que esto está por pasar. Sabe que van a atravesar esta tentación demoníaca, este tipo de zarandeo como al trigo. Imaginen una horca separando el trigo; no es una imagen agradable. ¿Y qué le responde? ¿Dice: “pero yo soy Dios, así que impedí que esto ocurriera”? ¿Dice que deseó tener a los doce de ustedes?\n\nAsí que oré por todos ustedes, los doce. No dice nada parecido. Dice algo mucho más extraño. Dice: “pero yo he rogado por ti”. Y aquí cambia. Satanás deseó tenerlos a ustedes, en plural, los doce, pero yo he rogado por ti. Ahora es singular, tú, Simón Pedro, para que tu fe no falle, pero él sabe que va a fallar. Sabe que lo va a negar tres veces. Y entonces agrega: “y cuando te hayas vuelto, fortalece a tus hermanos”. Ahora bien, esas tres palabras, fortalece a tus hermanos, van al corazón del papado, y podemos identificarlo en un proceso de tres pasos muy simple. Número uno: en el reino de Cristo, el líder está llamado a servir. Ya vimos eso aquí en Lucas 22, 2: todos los apóstoles están llamados a servir en la Iglesia y a servir a la Iglesia. Quiero decir, él lo dice bastante explícitamente también.\n\n¿Verdad? Número tres: san Pedro está llamado a servir incluso a sus hermanos entre los doce. Cuando dice “fortalece a tus hermanos”, en el contexto se refiere a los otros que esa noche están siendo tentados por Satanás. Así que los otros apóstoles tienen todos estos líderes, y uno de ellos debe ser un líder servidor de los otros líderes servidores. Como explica el papa san Juan Pablo II, esto es lo que significa ser llamado a ser papa. Y, en palabras de JP II, el deber del papa es un servicio a la Iglesia y a la humanidad. Por eso, desde tiempos antiguos, se lo conoce como siervo de los siervos de Dios. Este es el modelo. La idea del papa no es que alguien tenga que mandonear a todos, patear a todos y poner a todos en línea. Es verdad: hay momentos en que el papa tiene que ejercer autoridad y realmente zanjar disputas, usar ese poder de atar y desatar.\n\nPero la mayor parte de su autoridad es servir y dirigir de la manera humilde y servicial propia del cristianismo. Del mismo modo, si intentas entender la idea de la jefatura masculina a partir de la Escritura mirando al tipo estereotípicamente macho, un tipo autoritario y pesado, no es así como vas a entender la jefatura masculina en sentido cristiano, que, como dice Efesios 5, es Cristo entregando su vida por su esposa, la Iglesia. Así es como se sabe qué es la jefatura masculina en sentido bíblico. Bueno, entonces, aquí el papado es bíblico, pero nuestros conceptos erróneos sobre el papado, nuestra caricatura del papado, quizá no lo sean. Y lo que Lucas 22 nos da es cómo se supone que se vea el papado y cómo debe ejercerse, y entendido de esa manera es muy claro. Ahora noten que no tienen que meterse en todas estas preguntas complicadas sobre qué significan las llaves del reino, qué significa el atar y desatar.",
                original:
                  "He says, I’m among you as one who serves. That’s verses 25 to 27. Immediately, he then singles out the 12 and he says, in 28 to 30, you are those who’ve been with me in my trials as my father appointed a kingdom for me. So I appoint for you that you may eat and drink at my table in my kingdom and sit on thrones judging the 12 tribes of Israel. So there is leadership in the church. It is apostolic leadership in its origins. We see it with the 12. We have 12 clearly identified leaders. One of them as we know Judas is going to be replaced with Matthias, but they’re still going to maintain this structure of leadership in the church. And then in the very next verse, you know what he does? He turns to one of the 12. If you’re just talking about servant leadership and highlighting the servant leadership of all 12, he singles one of the 12 out.\n\nI bet you can guess which one. He says, Simon, Simon, behold Satan demanded to have you that he might sift you like wheat. Now you need to know here you there is plural. It’s you all. It’s you 12. And we know the context, right? All of them are going to abandon or betray Jesus in some way. Judas is going to turn Jesus in. The other 11 are going to run away. Simon Peter is going to deny Jesus three times. It’s going to be a pretty sorry night for everyone involved here. And Jesus knows this is about to happen. He knows they’re going to undergo this demonic temptation, this sort of sifting like wheat. Imagine like a pitchfork sifting through wheat, not a nice image. And what does he say in response? Does he say, but I’m God, so I stopped this from happening. Does he say he desired to have all 12 of you?\n\nSo I prayed for all 12 of you. He says nothing like this. He says something much stranger. He says, but I’ve prayed for you. And now here he switches. Satan desired to have you plural you 12, but I’ve prayed for you. Now it’s singular you Simon Peter, that your faith may not fail, but he knows it will. He knows that he’ll deny him three times. And so he adds. And when you have turned back, strengthen your brethren. Now those three words strengthen your brethren, get to the heart of the papacy and we can identify it in a really simple three-step process. Number one, in Christ’s kingdom, the leader is called to serve. We already saw that here in Luke 22, 2, all of the apostles are called to serve in the church and to serve the church. I mean he says that quite explicitly as well.\n\nRight? Number three, St. Peter is called to serve even his brethren amongst the 12. When he says, strengthen your brethren contextually, he’s talking about the others who are being tempted by Satan that night. The other apostles so have all these leaders, and one of them is to be a servant leader to the other servant leaders. As Pope Saint John Paul II explains, this is what it means to be called to be Pope. And he knows he was in JP two’s words, he says, the Pope’s duty as a service to the church and to humanity. This is why since ancient times, he has been known as serve de servant of the servants of God. This is the model. The idea of the Pope is not someone needs to boss everyone around and kick everybody and get everybody online. It’s true. There are times the Pope has to exercise authority and really settle disputes, use that binding and loosening power.\n\nBut most of his authority is to serve and to lead in the Christian humble serving sort of way. In the same way that if you are trying to understand the idea of male headship from scripture looking at the kind of stereotypically macho, kind of overbearing jerk of a guy, it is not going to be the way you understand male headship in a Christian sense looking as Ephesians five says to Christ laying down his life for his bride, the church. That’s how you know what male headship in a biblical sense looks like. Well, so to here the papacy is biblical, but our misconceptions about the papacy, our caricature of the papacy may not be biblical. And so what Luke 22 gives us is what the papacy is meant to look like and be exercised as and so understood in that way is very clear. Now notice you don’t have to get into all of these complicated questions of what’s meant by the keys of the kingdom, what’s meant by the bindin and loosening.",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "The One Passage that Proves the Papacy (to Protestants)",
                outlet: "Shameless Popery",
                date: "10 de septiembre de 2024",
                locator:
                  "4 párrafos: del párrafo que empieza «I bet you can guess which one. He says,…» al que termina «…the kingdom, what’s meant by the bindin and loosening.»",
                url: "https://www.catholic.com/audio/sp/142684",
                text: "Me imagino que pueden adivinar cuál. Dice: Simón, Simón, mira que Satanás ha pedido tenerlos a ustedes para zarandearlos como al trigo. Ahora tienen que saber que aquí el “ustedes” es plural. Es “ustedes todos”. Son “ustedes, los doce”. ¿Y conocemos el contexto, no? Todos van a abandonar o traicionar a Jesús de alguna manera. Judas lo va a entregar. Los otros once van a huir. Simón Pedro va a negar a Jesús tres veces. Va a ser una noche bastante lamentable para todos los involucrados. Y Jesús sabe que esto está por pasar. Sabe que van a atravesar esta tentación demoníaca, este tipo de zarandeo como al trigo. Imaginen una horca separando el trigo; no es una imagen agradable. ¿Y qué le responde? ¿Dice: “pero yo soy Dios, así que impedí que esto ocurriera”? ¿Dice que deseó tener a los doce de ustedes?\n\nAsí que oré por todos ustedes, los doce. No dice nada parecido. Dice algo mucho más extraño. Dice: “pero yo he rogado por ti”. Y aquí cambia. Satanás deseó tenerlos a ustedes, en plural, los doce, pero yo he rogado por ti. Ahora es singular, tú, Simón Pedro, para que tu fe no falle, pero él sabe que va a fallar. Sabe que lo va a negar tres veces. Y entonces agrega: “y cuando te hayas vuelto, fortalece a tus hermanos”. Ahora bien, esas tres palabras, fortalece a tus hermanos, van al corazón del papado, y podemos identificarlo en un proceso de tres pasos muy simple. Número uno: en el reino de Cristo, el líder está llamado a servir. Ya vimos eso aquí en Lucas 22, 2: todos los apóstoles están llamados a servir en la Iglesia y a servir a la Iglesia. Quiero decir, él lo dice bastante explícitamente también.\n\n¿Verdad? Número tres: san Pedro está llamado a servir incluso a sus hermanos entre los doce. Cuando dice “fortalece a tus hermanos”, en el contexto se refiere a los otros que esa noche están siendo tentados por Satanás. Así que los otros apóstoles tienen todos estos líderes, y uno de ellos debe ser un líder servidor de los otros líderes servidores. Como explica el papa san Juan Pablo II, esto es lo que significa ser llamado a ser papa. Y, en palabras de JP II, el deber del papa es un servicio a la Iglesia y a la humanidad. Por eso, desde tiempos antiguos, se lo conoce como siervo de los siervos de Dios. Este es el modelo. La idea del papa no es que alguien tenga que mandonear a todos, patear a todos y poner a todos en línea. Es verdad: hay momentos en que el papa tiene que ejercer autoridad y realmente zanjar disputas, usar ese poder de atar y desatar.\n\nPero la mayor parte de su autoridad es servir y dirigir de la manera humilde y servicial propia del cristianismo. Del mismo modo, si intentas entender la idea de la jefatura masculina a partir de la Escritura mirando al tipo estereotípicamente macho, un tipo autoritario y pesado, no es así como vas a entender la jefatura masculina en sentido cristiano, que, como dice Efesios 5, es Cristo entregando su vida por su esposa, la Iglesia. Así es como se sabe qué es la jefatura masculina en sentido bíblico. Bueno, entonces, aquí el papado es bíblico, pero nuestros conceptos erróneos sobre el papado, nuestra caricatura del papado, quizá no lo sean. Y lo que Lucas 22 nos da es cómo se supone que se vea el papado y cómo debe ejercerse, y entendido de esa manera es muy claro. Ahora noten que no tienen que meterse en todas estas preguntas complicadas sobre qué significan las llaves del reino, qué significa el atar y desatar.",
                original:
                  "I bet you can guess which one. He says, Simon, Simon, behold Satan demanded to have you that he might sift you like wheat. Now you need to know here you there is plural. It’s you all. It’s you 12. And we know the context, right? All of them are going to abandon or betray Jesus in some way. Judas is going to turn Jesus in. The other 11 are going to run away. Simon Peter is going to deny Jesus three times. It’s going to be a pretty sorry night for everyone involved here. And Jesus knows this is about to happen. He knows they’re going to undergo this demonic temptation, this sort of sifting like wheat. Imagine like a pitchfork sifting through wheat, not a nice image. And what does he say in response? Does he say, but I’m God, so I stopped this from happening. Does he say he desired to have all 12 of you?\n\nSo I prayed for all 12 of you. He says nothing like this. He says something much stranger. He says, but I’ve prayed for you. And now here he switches. Satan desired to have you plural you 12, but I’ve prayed for you. Now it’s singular you Simon Peter, that your faith may not fail, but he knows it will. He knows that he’ll deny him three times. And so he adds. And when you have turned back, strengthen your brethren. Now those three words strengthen your brethren, get to the heart of the papacy and we can identify it in a really simple three-step process. Number one, in Christ’s kingdom, the leader is called to serve. We already saw that here in Luke 22, 2, all of the apostles are called to serve in the church and to serve the church. I mean he says that quite explicitly as well.\n\nRight? Number three, St. Peter is called to serve even his brethren amongst the 12. When he says, strengthen your brethren contextually, he’s talking about the others who are being tempted by Satan that night. The other apostles so have all these leaders, and one of them is to be a servant leader to the other servant leaders. As Pope Saint John Paul II explains, this is what it means to be called to be Pope. And he knows he was in JP two’s words, he says, the Pope’s duty as a service to the church and to humanity. This is why since ancient times, he has been known as serve de servant of the servants of God. This is the model. The idea of the Pope is not someone needs to boss everyone around and kick everybody and get everybody online. It’s true. There are times the Pope has to exercise authority and really settle disputes, use that binding and loosening power.\n\nBut most of his authority is to serve and to lead in the Christian humble serving sort of way. In the same way that if you are trying to understand the idea of male headship from scripture looking at the kind of stereotypically macho, kind of overbearing jerk of a guy, it is not going to be the way you understand male headship in a Christian sense looking as Ephesians five says to Christ laying down his life for his bride, the church. That’s how you know what male headship in a biblical sense looks like. Well, so to here the papacy is biblical, but our misconceptions about the papacy, our caricature of the papacy may not be biblical. And so what Luke 22 gives us is what the papacy is meant to look like and be exercised as and so understood in that way is very clear. Now notice you don’t have to get into all of these complicated questions of what’s meant by the keys of the kingdom, what’s meant by the bindin and loosening.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.1.42"],
      text: "«Tú serás llamado Cephas (que quiere decir, Piedra)»: el Vaticano I lo cita como el primer paso: Jesús ya había dado a Simón el nombre de «Piedra» antes de prometerle las llaves {c:PA1|Pastor aeternus, cap. 1}.",
      apologists: {
        arguments: [
          {
            title: "El nombre que Jesús da a Simón es Cefas en arameo, que significa «roca»",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "St. Peter: Rock or Stumbling-Stone?",
                outlet: "Catholic Answers Magazine",
                date: "21 de febrero de 2018",
                locator:
                  "8 párrafos: del párrafo que empieza «He then turns to Peter and says, “Simon, Simon,…» al que termina «…appeals to papal authority in Luke 22 by saying»",
                url: "https://www.catholic.com/magazine/online-edition/st-peter-rock-or-stumbling-stone",
                text: "Luego se vuelve a Pedro y le dice: “Simón, Simón, mira que Satanás ha pedido tener a ustedes [plural], para zarandearlos [plural] como al trigo, pero yo he rogado por ti [singular] para que tu fe no falle; y cuando te hayas vuelto, fortalece a tus hermanos” (22:31-32). Como en inglés no tenemos palabras para distinguir la segunda persona del singular de la del plural, perdemos un cambio importante. Jesús está diciendo que Satanás ha pedido tener a los doce, para zarandearlos a todos como al trigo. Y la respuesta de Jesús no es orar por los doce, sino por uno de ellos, Pedro, para que su fe no falle, y luego encomendarle la tarea de fortalecer a sus hermanos. Por sí solos, estos dos versículos serían un argumento impresionante a favor del papado. Jesús encomienda explícitamente a Pedro el cuidado de los otros apóstoles de una manera única. Pero es aún más llamativo en el contexto más amplio de Lucas 22. Inmediatamente después de decir que el verdadero liderazgo es servicio, y de llamar a los apóstoles a servir, Jesús encomienda a Pedro la tarea de servir incluso a los otros apóstoles.\n\nPero en cuanto parece que las cosas van bien para Pedro, se derrumban otra vez. (Es un tema recurrente. Por ejemplo, Pedro es quien tuvo fe suficiente para caminar sobre el agua... hasta que dejó de tenerla). Inmediatamente después de que Jesús le encomienda el cuidado de los apóstoles, Pedro responde diciendo: “Señor, estoy listo para ir contigo a la cárcel y a la muerte”, lo que lleva a Jesús a decir: “Te digo, Pedro, que el gallo no cantará hoy antes de que tres veces niegues que me conoces” (22:33-34). Esto pone de manifiesto la dimensión paradójica del mandato de Jesús, “cuando te hayas vuelto, fortalece a tus hermanos”: Jesús está confiando el cuidado de la Iglesia a un hombre que sabe que está a punto de caer.\n\nEsto también está presente en Mateo 16, en el pasaje mucho más famoso sobre el papado. Pedro confiesa la verdadera identidad de Cristo, diciendo: “Tú eres el Cristo, el Hijo del Dios viviente” (v.16). Jesús responde:\n\n“¡Bienaventurado eres, Simón Bar-Jona! Porque no te lo reveló carne ni sangre, sino mi Padre que está en los cielos. Y yo te digo que tú eres Pedro [Petros], y sobre esta roca [petra] edificaré mi iglesia, y los poderes de la muerte no prevalecerán contra ella. Te daré las llaves del reino de los cielos, y todo lo que ates en la tierra será atado en los cielos, y todo lo que desates en la tierra será desatado en los cielos” (vv.17-19).\n\nSe ha derramado mucha tinta sobre la pregunta de quién o qué es la roca sobre la que Jesús edificará su Iglesia. Una respuesta parece venir en Juan 1:42, donde aprendemos que el nombre original que Jesús le da a Pedro no es el griego Petros sino el arameo Cefas, un nombre que simplemente significa “Roca”. Pero de nuevo, este punto alto para Pedro es inmediatamente seguido por una caída, y así vemos en los versículos siguientes a Pedro tratando de impedir que Jesús muera (v.22), lo que lleva a Jesús a decir: “¡Apártate de mí, Satanás! Me eres un obstáculo [skandalon], porque no estás de parte de Dios sino de los hombres.”\n\nEs aquí, de todos los lugares, donde encontramos una respuesta irónica a la pregunta de quién es la roca, porque un skandalon es una “piedra de tropiezo”. Dicho de otra manera, Pedro es a la vez la roca sobre la que se edifica la Iglesia (por su fe) y una piedra escandalosa de tropiezo (por sus fallas).\n\nEn palabras del P. Joseph Ratzinger, el futuro papa Benedicto XVI: “¿No ha permanecido así a lo largo de toda la historia de la Iglesia, que el papa, el sucesor de Pedro, ha sido petra y skandalon, roca de Dios y piedra de tropiezo a la vez?”[1] Lo que fue cierto de Pedro no lo ha sido menos de sus sucesores.\n\nEl reformador protestante Juan Calvino se burló de las apelaciones católicas a la autoridad papal en Lucas 22 diciendo",
                original:
                  "He then turns to Peter and says, “Simon, Simon, behold, Satan demanded to have you [plural], that he might sift you [plural] like wheat, but I have prayed for you [singular] that your faith may not fail; and when you have turned again, strengthen your brethren” (22:31-32), Since in English we don’t have words to distinguish the second-person singular from the second-person plural, we miss an important switch. Jesus is saying that Satan has demanded to have all twelve of them, to sift them all like wheat. And Jesus’ response to this isn’t to pray for all twelve of them but to pray for one of them, Peter, that his faith might not fail, and then to entrust him with the task of strengthening his brethren. By themselves, these two verses would be an impressive case for the papacy. Jesus explicitly entrusts Peter with the care of the other apostles in a unique way. But it’s yet more striking in the broader context of Luke 22. Immediately after saying that true leadership is service, and calling upon the apostles to serve, Jesus entrusts Peter with the task of serving even the other apostles.\n\nBut the moment it looks like things are going well for Peter, they come crashing down again. (This is a common theme. For example, Peter is the one whose faith was strong enough to let him walk on water . . . until it wasn’t.) Immediately after Jesus entrusts the care of the apostles to him, Peter responds by saying “Lord, I am ready to go with you to prison and to death,” leading Jesus to say, “I tell you, Peter, the cock will not crow this day, until you three times deny that you know me” (22:33-34). This brings out the paradoxical dimension of Jesus’ command, “when you have turned again, strengthen your brethren”: Jesus is entrusting the care of the Church to a man whom he knows is about to fall.\n\nThis is also present in Matthew 16, in the much more famous passage about the papacy. Peter confesses the true identity of Christ, saying, “You are the Christ, the Son of the living God” (v.16). Jesus responds,\n\n“Blessed are you, Simon Bar-Jona! For flesh and blood has not revealed this to you, but my Father who is in heaven. And I tell you, you are Peter [Petros], and on this rock [petra] I will build my church, and the powers of death shall not prevail against it. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven” (vv.17-19).\n\nMuch ink has been spilled over the question of who or what is the rock upon which Jesus will build his Church. An answer to this seems to come in John 1:42, in which we learn that the original name that Jesus gives Peter isn’t the Greek Petros but the Aramaic Cephas, a name that simply means “Rock.” But again, this high point for Peter is immediately followed by a fall, and so we see in the next few verses Peter trying to keep Jesus from dying (v.22), leading Jesus to say “Get behind me, Satan! You are a hindrance [skandalon] to me; for you are not on the side of God but of men.”\n\nIt’s here of all places that we get an ironic answer to the question of who the rock is, because a skandalon is a “stumbling stone.” In other words, Peter is simultaneously the rock upon which the Church is built (through his faith) and a scandalizing stumbling stone (through his failings).\n\nIn the words of Fr. Joseph Ratzinger, the future Pope Benedict XVI, “Has it not remained this way throughout all Church history, that the pope, the successor of Peter, has been petra and skandalon, rock of God and stumbling stone all in one?”[1] What was true of Peter has been no less true of his successors.\n\nThe Protestant Reformer John Calvin laughed off Catholic appeals to papal authority in Luke 22 by saying",
                translation: "ai-assisted",
              },
              {
                speaker: "Trent Horn",
                work: 'Refuting Papal Myths — "Peter Was Not a Pope"',
                outlet: "Catholic Answers Magazine",
                date: "22 de septiembre de 2015",
                locator:
                  "8 párrafos: del párrafo que empieza «Peter’s role as “chief apostle” is evident in the…» al que termina «…authority as being “first” among the apostles (Matt 10:2).»",
                url: "https://www.catholic.com/magazine/online-edition/refuting-papal-myths-peter-was-not-a-pope",
                text: "El papel de Pedro como “apóstol principal” se evidencia en que es mencionado más que cualquier otro apóstol, a menudo habla en nombre de todo el grupo y aparece primero en cada lista de apóstoles. Como Judas figura siempre al final, podemos deducir que estas listas se hicieron en orden de importancia.\n\nAdemás, Cristo constituyó a Pedro, solo a él, pastor de todo su rebaño (ver Juan 21:15-17), y el libro de los Hechos describe el liderazgo incomparable de Pedro en la Iglesia primitiva. Esto incluye su autoridad para hacer una declaración vinculante y dogmática en el concilio de Jerusalén (Hechos 15). Como dice el erudito anglicano J.N.D. Kelly, “Pedro fue el líder indiscutido de la iglesia joven” (Oxford Dictionary of the Popes, 1). Por último, en Mateo 16:18-19, Jesús cambió el nombre de Simón por Pedro, que significa roca, y dijo: “Tú eres Pedro [roca], y sobre esta roca edificaré mi iglesia, y las fuerzas de la muerte no prevalecerán contra ella. Te daré las llaves del reino de los cielos, y todo lo que ates en la tierra será atado en el cielo, y todo lo que desates en la tierra será desatado en el cielo.”\n\nEste pasaje está prefigurado en Isaías 22:22, que relata cómo Shebna, el mayordomo jefe impío de Israel, fue reemplazado por el justo Eli’akim. Isaías 22:22 dice que Eli’akim tendría “la llave de la casa de David; él abrirá, y nadie cerrará; y él cerrará, y nadie abrirá”. Así como el rey Ezequías dio a Eli’akim autoridad para gobernar el reino de Israel, Cristo dio a Pedro autoridad para gobernar su Iglesia (es decir, las “llaves del reino”), lo que incluía la autoridad para “atar y desatar”, en otras palabras, para determinar la doctrina y la práctica oficiales.\n\nEn respuesta a estos versículos, algunos protestantes afirman que Pedro no es la roca sobre la que se edificó la Iglesia, porque 1 Corintios 10:4 dice “la roca era Cristo”. Otros sostienen que el texto griego de Mateo 16:18 muestra que, mientras Simón era llamado petros, la roca sobre la que se edificaría la Iglesia se llamaba petras, lo que demostraría que la Iglesia no está edificada sobre Pedro. Pero en 1 Corintios, Pablo habla de Cristo pastoreando al antiguo Israel, no a la Iglesia, y en Mateo 16, petros y petras se refieren ambos a Pedro.\n\nSegún Juan 1:42, Jesús dio a Simón el nombre arameo Kepha, que significa simplemente “roca”. Pero a diferencia del arameo, en griego la palabra roca es un sustantivo femenino, así que Mateo usó la forma masculina de roca, petros, ya que llamar a Pedro petras habría equivalido a llamarlo Patricia. Como dice el teólogo luterano Oscar Cullmann, “petra=Kepha=petros” (Theological Dictionary of the New Testament, 98). Incluso el reformador protestante Juan Calvino dijo: “No hay diferencia de significado, lo reconozco, entre las dos palabras griegas petros y petra” (Commentary on Matthew Mark, and Luke, vol. 2).\n\nPor último, si Pedro no es la roca sobre la que se edifica la Iglesia, ¿por qué Jesús se tomó el trabajo de cambiarle el nombre a Simón? Como dice el erudito protestante Craig Keener en su comentario sobre Mateo, “[Jesús] juega con el apodo de Simón, ‘Pedro’, que en inglés equivale aproximadamente a ‘Rocky’: Pedro es ‘rocoso’, y sobre esta roca Jesús edificaría su Iglesia” (426).\n\n¿Pero no dice Pedro en 1 Pedro 5:1 que se llama a sí mismo “copresbítero” y no “papa”? Sí, pero en ese pasaje Pedro muestra la humildad que anima a los demás sacerdotes a practicar. Escribe: “Vístanse todos de humildad en el trato mutuo” (5:5), así que exaltar su condición habría contradicho su mensaje.\n\nAdemás, san Pablo se llamaba a sí mismo a menudo un simple diácono (ver 1 Corintios 3:5, 2 Corintios 11:23) e incluso dijo que era “el más pequeño de todos los santos” (Ef. 3:8), pero eso no le quitó autoridad como apóstol. Del mismo modo, la descripción que Pedro hace de sí mismo como anciano no le quita autoridad para ser “primero” entre los apóstoles (Mt 10:2).",
                original:
                  "Peter’s role as “chief apostle” is evident in the fact that he is mentioned more than any other apostle, often speaks for the whole group, and is placed first in every list of the apostles. Since Judas is always listed last, we can deduce that these lists were made in order of importance.\n\nMoreover, Christ made Peter alone the shepherd over his whole flock (see John 21:15-17), and the book of Acts describes Peter’s unparalleled leadership in the early Church. This includes his authority to make a binding, dogmatic declaration at the council of Jerusalem (Acts 15). As the Anglican scholar J.N.D Kelly puts it, “Peter was the undisputed leader of the youthful church” (Oxford Dictionary of the Popes, 1). Finally, in Matthew 16:18-19, Jesus changed Simon’s name to Peter, which means rock, and said, “You are Peter [rock], and on this rock I will build my church, and the powers of death shall not prevail against it. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven.”\n\nThis passage is foreshadowed by Isaiah 22:22, which tells of how Israel’s wicked chief steward Shebna was replaced with the righteous Eli’akim. Isaiah 22:22 said Eli’akim would have “the key of the house of David; he shall open, and none shall shut; and he shall shut, and none shall open.” Just as King Hezekiah gave Eli’akim authority to oversee the kingdom of Israel, Christ gave Peter authority to oversee his Church (i.e., the “keys to the kingdom”), which included the authority to “bind and loose”—in other words, to determine official doctrine and practice.\n\nIn response to these verses, some Protestants claim Peter is not the rock upon whom the Church was built, because 1 Corinthians 10:4 says “the rock was Christ.” Others say the Greek text of Matthew 16:18 shows that while Simon was called petros, the rock the Church will be built on was called petras, thus showing that the Church is not built on Peter. But in 1 Corinthians, Paul is talking about Christ shepherding ancient Israel, not the Church, and in Matthew 16, petros and petras both refer to Peter.\n\nAccording to John 1:42, Jesus gave Simon the Aramaic name Kepha, which means simply “rock.” But unlike in Aramaic, in Greek the word rock is a feminine noun, so Matthew used the masculine version of rock, or petros, since calling Peter petras would have been on par with calling him Patricia! As Lutheran theologian Oscar Cullman puts it, “petra=Kepha=petros” (Theological Dictionary of the New Testament, 98). Even the Protestant Reformer John Calvin said, “There is no difference of meaning, I acknowledge, between the two Greek words petros and petra” (Commentary on Matthew Mark, and Luke, vol. 2).\n\nFinally, if Peter is not the rock upon whom the Church is built, then why did Jesus bother to change Simon’s name in the first place? As Protestant scholar Craig Keener writes in his commentary on Matthew, “[Jesus] plays on Simon’s nickname, ‘Peter,’ which is roughly the English ‘Rocky’: Peter is ‘rocky,’ and on this rock Jesus would build his Church” (426).\n\nBut didn’t Peter refer to himself as a “fellow elder” and not as “pope” in 1 Peter 5:1? Yes, but in this passage Peter is demonstrating the humility that he is encouraging other priests to practice. He wrote, “Clothe yourselves, all of you, with humility toward one another” (5:5), so exalting his status would have contradicted his message.\n\nBesides, St. Paul often referred to himself as a mere deacon (see 1 Corinthians 3:5, 2 Corinthians 11:23) and even said he was “the very least of all the saints” (Eph. 3:8), but that did not take away from his authority as an apostle. Likewise, Peter’s description of himself as an elder does not take away from his authority as being “first” among the apostles (Matt 10:2).",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.10.2", "Mark.3.16", "Luke.6.14", "Acts.1.13"],
      text: "«Primero Simón, llamado Pedro»: todas las listas de los Doce empiezan por él {c:CDFP3|Congregación para la Doctrina de la Fe, 1998}.",
      apologists: {
        arguments: [
          {
            title: "Pedro figura en primer lugar en todas las listas de apóstoles (Horn)",
            quotes: [
              {
                speaker: "Trent Horn",
                work: 'Refuting Papal Myths — "Peter Was Not a Pope"',
                outlet: "Catholic Answers Magazine",
                date: "22 de septiembre de 2015",
                locator:
                  "9 párrafos: del párrafo que empieza «Editors Note: In light of Pope Francis’s visit to…» al que termina «…so exalting his status would have contradicted his message.»",
                url: "https://www.catholic.com/magazine/online-edition/refuting-papal-myths-peter-was-not-a-pope",
                text: "Nota de la redacción: a la luz de la visita del papa Francisco a Estados Unidos, continuamos una serie de artículos que responden a los argumentos más comunes contra el oficio del papado y contra los hombres que lo han ocupado. El primer artículo de la serie puede leerse aquí.\n\nMito n.º 3: Pedro era importante, pero no tenía una autoridad especial que pudiera transmitirse a un sucesor, como el papa.\n\nEl papel de Pedro como “principal apóstol” se evidencia en el hecho de que es mencionado más que cualquier otro apóstol, a menudo habla en nombre de todo el grupo y aparece primero en todas las listas de los apóstoles. Como Judas siempre aparece al final, podemos deducir que estas listas se hacían en orden de importancia.\n\nAdemás, Cristo hizo a Pedro el único pastor de todo su rebaño (ver Juan 21:15-17), y el libro de los Hechos describe el liderazgo incomparable de Pedro en la Iglesia primitiva. Esto incluye su autoridad para hacer una declaración vinculante y dogmática en el concilio de Jerusalén (Hechos 15). Como dice el erudito anglicano J.N.D Kelly, “Pedro era el líder indiscutido de la iglesia joven” (Oxford Dictionary of the Popes, 1). Por último, en Mateo 16:18-19, Jesús cambió el nombre de Simón por Pedro, que significa roca, y dijo: “Tú eres Pedro [roca], y sobre esta roca edificaré mi iglesia, y los poderes de la muerte no prevalecerán contra ella. Te daré las llaves del reino de los cielos, y todo lo que ates en la tierra será atado en los cielos, y todo lo que desates en la tierra será desatado en los cielos.”\n\nEste pasaje está anticipado por Isaías 22:22, que habla de cómo Sebna, el malvado mayordomo jefe de Israel, fue reemplazado por el justo Eliaquim. Isaías 22:22 dice que Eliaquim tendría “la llave de la casa de David; él abrirá, y nadie cerrará; y él cerrará, y nadie abrirá”. Así como el rey Ezequías dio a Eliaquim autoridad para supervisar el reino de Israel, Cristo dio a Pedro autoridad para supervisar su Iglesia (es decir, las “llaves del reino”), lo que incluyó la autoridad de “atar y desatar”; en otras palabras, para determinar la doctrina y la práctica oficiales.\n\nEn respuesta a estos versículos, algunos protestantes sostienen que Pedro no es la roca sobre la que fue edificada la Iglesia, porque 1 Corintios 10:4 dice “la roca era Cristo”. Otros dicen que el texto griego de Mateo 16:18 muestra que, mientras a Simón se le llamaba petros, la roca sobre la que se edificaría la Iglesia se llamaba petras, y que así se muestra que la Iglesia no está edificada sobre Pedro. Pero en 1 Corintios, Pablo habla de Cristo pastoreando al antiguo Israel, no a la Iglesia, y en Mateo 16, petros y petras se refieren ambos a Pedro.\n\nSegún Juan 1:42, Jesús dio a Simón el nombre arameo Kepha, que significa simplemente “roca”. Pero a diferencia del arameo, en griego la palabra roca es un sustantivo femenino, así que Mateo usó la versión masculina de roca, petros, ya que llamar a Pedro petras hubiera equivalido a llamarlo ¡Patricia! Como dice el teólogo luterano Oscar Cullman, “petra=Kepha=petros” (Theological Dictionary of the New Testament, 98). Incluso el reformador protestante Juan Calvino dijo: “No hay diferencia de significado, lo reconozco, entre las dos palabras griegas petros y petra” (Commentary on Matthew Mark, and Luke, vol. 2).\n\nPor último, si Pedro no es la roca sobre la que se edifica la Iglesia, ¿por qué se molestó Jesús en cambiarle el nombre a Simón? Como escribe el erudito protestante Craig Keener en su comentario sobre Mateo: “[Jesús] juega con el apodo de Simón, ‘Pedro’, que en inglés equivale más o menos a ‘Rocky’: Pedro es ‘rocoso’, y sobre esta roca Jesús edificaría su Iglesia” (426).\n\n¿Pero no se refirió Pedro a sí mismo como “copresbítero” y no como “papa” en 1 Pedro 5:1? Sí, pero en este pasaje Pedro demuestra la humildad que anima a otros sacerdotes a practicar. Él escribió: “Revístanse todos de humildad en el trato mutuo” (5:5), así que exaltar su estatus habría contradicho su mensaje.",
                original:
                  "Editors Note: In light of Pope Francis’s visit to the United States, we are continuing a series of posts that answer the most common arguments made against the office of the papacy and the men who have held that office. The first post in the series can be accessed here.\n\nMyth #3: Peter was important, but he had no special authority that could be passed on to a successor like the pope.\n\nPeter’s role as “chief apostle” is evident in the fact that he is mentioned more than any other apostle, often speaks for the whole group, and is placed first in every list of the apostles. Since Judas is always listed last, we can deduce that these lists were made in order of importance.\n\nMoreover, Christ made Peter alone the shepherd over his whole flock (see John 21:15-17), and the book of Acts describes Peter’s unparalleled leadership in the early Church. This includes his authority to make a binding, dogmatic declaration at the council of Jerusalem (Acts 15). As the Anglican scholar J.N.D Kelly puts it, “Peter was the undisputed leader of the youthful church” (Oxford Dictionary of the Popes, 1). Finally, in Matthew 16:18-19, Jesus changed Simon’s name to Peter, which means rock, and said, “You are Peter [rock], and on this rock I will build my church, and the powers of death shall not prevail against it. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven.”\n\nThis passage is foreshadowed by Isaiah 22:22, which tells of how Israel’s wicked chief steward Shebna was replaced with the righteous Eli’akim. Isaiah 22:22 said Eli’akim would have “the key of the house of David; he shall open, and none shall shut; and he shall shut, and none shall open.” Just as King Hezekiah gave Eli’akim authority to oversee the kingdom of Israel, Christ gave Peter authority to oversee his Church (i.e., the “keys to the kingdom”), which included the authority to “bind and loose”—in other words, to determine official doctrine and practice.\n\nIn response to these verses, some Protestants claim Peter is not the rock upon whom the Church was built, because 1 Corinthians 10:4 says “the rock was Christ.” Others say the Greek text of Matthew 16:18 shows that while Simon was called petros, the rock the Church will be built on was called petras, thus showing that the Church is not built on Peter. But in 1 Corinthians, Paul is talking about Christ shepherding ancient Israel, not the Church, and in Matthew 16, petros and petras both refer to Peter.\n\nAccording to John 1:42, Jesus gave Simon the Aramaic name Kepha, which means simply “rock.” But unlike in Aramaic, in Greek the word rock is a feminine noun, so Matthew used the masculine version of rock, or petros, since calling Peter petras would have been on par with calling him Patricia! As Lutheran theologian Oscar Cullman puts it, “petra=Kepha=petros” (Theological Dictionary of the New Testament, 98). Even the Protestant Reformer John Calvin said, “There is no difference of meaning, I acknowledge, between the two Greek words petros and petra” (Commentary on Matthew Mark, and Luke, vol. 2).\n\nFinally, if Peter is not the rock upon whom the Church is built, then why did Jesus bother to change Simon’s name in the first place? As Protestant scholar Craig Keener writes in his commentary on Matthew, “[Jesus] plays on Simon’s nickname, ‘Peter,’ which is roughly the English ‘Rocky’: Peter is ‘rocky,’ and on this rock Jesus would build his Church” (426).\n\nBut didn’t Peter refer to himself as a “fellow elder” and not as “pope” in 1 Peter 5:1? Yes, but in this passage Peter is demonstrating the humility that he is encouraging other priests to practice. He wrote, “Clothe yourselves, all of you, with humility toward one another” (5:5), so exalting his status would have contradicted his message.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Los apóstoles y María se reúnen en oración como signo de la unidad de la Iglesia",
            quotes: [
              {
                speaker: "Scott Hahn",
                work: "Knowing God: Scott Hahn Reflects on the Seventh Sunday of Easter",
                outlet: "St. Paul Center",
                date: "Sin fecha indicada",
                locator: "Párrafos que empiezan «Jesus has been taken up»",
                url: "https://stpaulcenter.com/posts/knowing-god-scott-hahn-reflects-on-the-seventh-sunday-of-easter",
                text: "Jesús ha sido llevado al cielo cuando comenzamos la Primera Lectura de hoy. Sus discípulos —incluidos los Apóstoles y María— regresan al cenáculo donde Él celebró la Última Cena (ver Lucas 22:12). Allí se dedican unánimemente a la oración, esperando al Espíritu que Él prometió que vendría sobre ellos (ver Hechos 1:8). La unidad de la Iglesia primitiva en Jerusalén es un signo de la unidad que Cristo pide en el Evangelio de hoy. La Iglesia debe ser una comunión en la tierra que refleje la gloriosa unión del Padre, el Hijo y el Espíritu en la Trinidad.",
                original:
                  "Jesus has been taken up into heaven as we begin today’s First Reading. His disciples—including the Apostles and Mary—return to the upper room where He celebrated the Last Supper (see Luke 22:12). There, they devote themselves with one accord to prayer, awaiting the Spirit that He promised would come upon them (see Acts 1:8). The unity of the early Church at Jerusalem is a sign of the oneness that Christ prays for in today’s Gospel. The Church is to be a communion on earth that mirrors the glorious union of Father, Son, and Spirit in the Trinity.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.2.14", "Acts.2.37", "Acts.5.29"],
      text: "En los primeros capítulos de los Hechos, Pedro aparece «como cabeza y portavoz del colegio apostólico»: «Pedro… con los Once» {c:UUS90|Ut unum sint 90}.",
      apologists: {
        arguments: [
          {
            title:
              "Hechos muestra el liderazgo sin igual de Pedro en la Iglesia primitiva (Horn; no se nombra ningún versículo de los tres)",
            quotes: [
              {
                speaker: "Trent Horn",
                work: 'Refuting Papal Myths — "Peter Was Not a Pope"',
                outlet: "Catholic Answers Magazine",
                date: "22 de septiembre de 2015",
                locator:
                  "9 párrafos: del párrafo que empieza «Editors Note: In light of Pope Francis’s visit to…» al que termina «…so exalting his status would have contradicted his message.»",
                url: "https://www.catholic.com/magazine/online-edition/refuting-papal-myths-peter-was-not-a-pope",
                text: "Nota de la redacción: a la luz de la visita del papa Francisco a Estados Unidos, continuamos una serie de artículos que responden a los argumentos más comunes contra el oficio del papado y contra los hombres que lo han ocupado. El primer artículo de la serie puede leerse aquí.\n\nMito n.º 3: Pedro era importante, pero no tenía una autoridad especial que pudiera transmitirse a un sucesor, como el papa.\n\nEl papel de Pedro como “principal apóstol” se evidencia en el hecho de que es mencionado más que cualquier otro apóstol, a menudo habla en nombre de todo el grupo y aparece primero en todas las listas de los apóstoles. Como Judas siempre aparece al final, podemos deducir que estas listas se hacían en orden de importancia.\n\nAdemás, Cristo hizo a Pedro el único pastor de todo su rebaño (ver Juan 21:15-17), y el libro de los Hechos describe el liderazgo incomparable de Pedro en la Iglesia primitiva. Esto incluye su autoridad para hacer una declaración vinculante y dogmática en el concilio de Jerusalén (Hechos 15). Como dice el erudito anglicano J.N.D Kelly, “Pedro era el líder indiscutido de la iglesia joven” (Oxford Dictionary of the Popes, 1). Por último, en Mateo 16:18-19, Jesús cambió el nombre de Simón por Pedro, que significa roca, y dijo: “Tú eres Pedro [roca], y sobre esta roca edificaré mi iglesia, y los poderes de la muerte no prevalecerán contra ella. Te daré las llaves del reino de los cielos, y todo lo que ates en la tierra será atado en los cielos, y todo lo que desates en la tierra será desatado en los cielos.”\n\nEste pasaje está anticipado por Isaías 22:22, que habla de cómo Sebna, el malvado mayordomo jefe de Israel, fue reemplazado por el justo Eliaquim. Isaías 22:22 dice que Eliaquim tendría “la llave de la casa de David; él abrirá, y nadie cerrará; y él cerrará, y nadie abrirá”. Así como el rey Ezequías dio a Eliaquim autoridad para supervisar el reino de Israel, Cristo dio a Pedro autoridad para supervisar su Iglesia (es decir, las “llaves del reino”), lo que incluyó la autoridad de “atar y desatar”; en otras palabras, para determinar la doctrina y la práctica oficiales.\n\nEn respuesta a estos versículos, algunos protestantes sostienen que Pedro no es la roca sobre la que fue edificada la Iglesia, porque 1 Corintios 10:4 dice “la roca era Cristo”. Otros dicen que el texto griego de Mateo 16:18 muestra que, mientras a Simón se le llamaba petros, la roca sobre la que se edificaría la Iglesia se llamaba petras, y que así se muestra que la Iglesia no está edificada sobre Pedro. Pero en 1 Corintios, Pablo habla de Cristo pastoreando al antiguo Israel, no a la Iglesia, y en Mateo 16, petros y petras se refieren ambos a Pedro.\n\nSegún Juan 1:42, Jesús dio a Simón el nombre arameo Kepha, que significa simplemente “roca”. Pero a diferencia del arameo, en griego la palabra roca es un sustantivo femenino, así que Mateo usó la versión masculina de roca, petros, ya que llamar a Pedro petras hubiera equivalido a llamarlo ¡Patricia! Como dice el teólogo luterano Oscar Cullman, “petra=Kepha=petros” (Theological Dictionary of the New Testament, 98). Incluso el reformador protestante Juan Calvino dijo: “No hay diferencia de significado, lo reconozco, entre las dos palabras griegas petros y petra” (Commentary on Matthew Mark, and Luke, vol. 2).\n\nPor último, si Pedro no es la roca sobre la que se edifica la Iglesia, ¿por qué se molestó Jesús en cambiarle el nombre a Simón? Como escribe el erudito protestante Craig Keener en su comentario sobre Mateo: “[Jesús] juega con el apodo de Simón, ‘Pedro’, que en inglés equivale más o menos a ‘Rocky’: Pedro es ‘rocoso’, y sobre esta roca Jesús edificaría su Iglesia” (426).\n\n¿Pero no se refirió Pedro a sí mismo como “copresbítero” y no como “papa” en 1 Pedro 5:1? Sí, pero en este pasaje Pedro demuestra la humildad que anima a otros sacerdotes a practicar. Él escribió: “Revístanse todos de humildad en el trato mutuo” (5:5), así que exaltar su estatus habría contradicho su mensaje.",
                original:
                  "Editors Note: In light of Pope Francis’s visit to the United States, we are continuing a series of posts that answer the most common arguments made against the office of the papacy and the men who have held that office. The first post in the series can be accessed here.\n\nMyth #3: Peter was important, but he had no special authority that could be passed on to a successor like the pope.\n\nPeter’s role as “chief apostle” is evident in the fact that he is mentioned more than any other apostle, often speaks for the whole group, and is placed first in every list of the apostles. Since Judas is always listed last, we can deduce that these lists were made in order of importance.\n\nMoreover, Christ made Peter alone the shepherd over his whole flock (see John 21:15-17), and the book of Acts describes Peter’s unparalleled leadership in the early Church. This includes his authority to make a binding, dogmatic declaration at the council of Jerusalem (Acts 15). As the Anglican scholar J.N.D Kelly puts it, “Peter was the undisputed leader of the youthful church” (Oxford Dictionary of the Popes, 1). Finally, in Matthew 16:18-19, Jesus changed Simon’s name to Peter, which means rock, and said, “You are Peter [rock], and on this rock I will build my church, and the powers of death shall not prevail against it. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven.”\n\nThis passage is foreshadowed by Isaiah 22:22, which tells of how Israel’s wicked chief steward Shebna was replaced with the righteous Eli’akim. Isaiah 22:22 said Eli’akim would have “the key of the house of David; he shall open, and none shall shut; and he shall shut, and none shall open.” Just as King Hezekiah gave Eli’akim authority to oversee the kingdom of Israel, Christ gave Peter authority to oversee his Church (i.e., the “keys to the kingdom”), which included the authority to “bind and loose”—in other words, to determine official doctrine and practice.\n\nIn response to these verses, some Protestants claim Peter is not the rock upon whom the Church was built, because 1 Corinthians 10:4 says “the rock was Christ.” Others say the Greek text of Matthew 16:18 shows that while Simon was called petros, the rock the Church will be built on was called petras, thus showing that the Church is not built on Peter. But in 1 Corinthians, Paul is talking about Christ shepherding ancient Israel, not the Church, and in Matthew 16, petros and petras both refer to Peter.\n\nAccording to John 1:42, Jesus gave Simon the Aramaic name Kepha, which means simply “rock.” But unlike in Aramaic, in Greek the word rock is a feminine noun, so Matthew used the masculine version of rock, or petros, since calling Peter petras would have been on par with calling him Patricia! As Lutheran theologian Oscar Cullman puts it, “petra=Kepha=petros” (Theological Dictionary of the New Testament, 98). Even the Protestant Reformer John Calvin said, “There is no difference of meaning, I acknowledge, between the two Greek words petros and petra” (Commentary on Matthew Mark, and Luke, vol. 2).\n\nFinally, if Peter is not the rock upon whom the Church is built, then why did Jesus bother to change Simon’s name in the first place? As Protestant scholar Craig Keener writes in his commentary on Matthew, “[Jesus] plays on Simon’s nickname, ‘Peter,’ which is roughly the English ‘Rocky’: Peter is ‘rocky,’ and on this rock Jesus would build his Church” (426).\n\nBut didn’t Peter refer to himself as a “fellow elder” and not as “pope” in 1 Peter 5:1? Yes, but in this passage Peter is demonstrating the humility that he is encouraging other priests to practice. He wrote, “Clothe yourselves, all of you, with humility toward one another” (5:5), so exalting his status would have contradicted his message.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Pedro lidera en Hechos: habla en Pentecostés, realiza el primer milagro, decide sobre Ananías y Safira",
            quotes: [
              {
                speaker: "Tim Staples",
                work: "Who Was at the Helm in the Book of Acts? Peter? James?",
                outlet: "Catholic Answers Magazine",
                date: "2 de octubre de 2015",
                locator:
                  "22 párrafos: del párrafo que empieza «At Catholic Answers, we often get the question: “If…» al que termina «…final arbiter of the situation will be the Church.»",
                url: "https://www.catholic.com/magazine/online-edition/who-was-at-the-helm-in-the-book-of-acts-peter-james",
                text: "En Catholic Answers nos hacen con frecuencia esta pregunta: “Si san Pedro fue constituido cabeza visible de la Iglesia, ¿por qué no lo vemos en el libro de los Hechos? ¿No es acaso san Santiago (o quizás san Pablo) el verdadero líder de la Iglesia primitiva?”\n\n¿Cómo respondemos?\n\nEn realidad, san Pedro es, con toda evidencia, la cabeza visible de la Iglesia en los Hechos. Si se considera que el autor inspirado de los Hechos fue san Lucas, compañero de san Pablo, resulta muy revelador que durante los primeros 15 de los 28 capítulos el centro de atención sea Pedro y no Pablo. ¿Por qué este énfasis en Pedro? Veamos.\n\n1. Hechos 1:15-26: Es san Pedro quien claramente está al frente al elegir y ordenar a un nuevo apóstol para reemplazar a Judas, cuando da una interpretación autoritativa de los Salmos 69:25 y 109:8. Y debo agregar que estos textos no tienen una interpretación obvia. El Salmo 69:25, por ejemplo, habla de los perseguidores (en plural) del Mesías, que “le dan hiel por (su) alimento y vinagre agrio para beber” (69:21). Luego, en el versículo 25, dice: “Que su campamento (plural) quede desolado, que nadie habite en sus tiendas”.\n\nNunca aparece la pregunta de los demás apóstoles: “Pedro, esa interpretación de esos dos textos es bastante dudosa. ¿Qué principios hermenéuticos estás usando, por cierto?”\n\n2. Hechos 2:14-41: Es san Pedro quien dirige en Pentecostés y predica el primer sermón, tras el cual son bautizados 3.000.\n\n3. Hechos 3:1-4:4: Es san Pedro quien realiza el primer milagro en los Hechos, sanando al hombre con los pies y los tobillos atrofiados. Luego predica otra vez y, esta vez, en 4:4 se convierten 5.000.\n\n4. Hechos 4:3-12: Cuando san Pedro y san Juan son arrestados y llevados ante el Sanedrín, es san Pedro, en el versículo 8, quien habla por ambos y predica con audacia sobre Cristo y el nombre de Jesús.\n\n5. Hechos 5:1-29: Es san Pedro quien está al frente de la Iglesia en la colecta de fondos para la evangelización mundial, y pronuncia el juicio de Dios sobre Ananías y Safira. Luego, en el versículo 15, la gente desea que la sombra de san Pedro pase sobre ellos para ser sanados. Después, en el versículo 29, tras ser arrestados y liberados milagrosamente por el ángel del Señor, los apóstoles comparecen por segunda vez ante el Sanedrín. San Lucas registra:\n\nPedro y los apóstoles respondieron: “Hay que obedecer a Dios antes que a los hombres.”\n\nSan Pedro se distingue del resto. Es “Pedro y los apóstoles”.\n\n6. Hechos 8:14-24: Vemos a san Pedro al frente (figura primero) cuando él y san Juan confirman a los nuevos conversos de Samaria, después de la labor evangelizadora de san Felipe. Y es san Pedro quien pronuncia juicio sobre Simón el mago, que quería comprar el poder de conferir el Espíritu Santo.\n\n7. Hechos 9:32, 40-43: Aquí tenemos un pasaje curioso que la mayoría pasa demasiado rápido.\n\nMientras Pedro recorría todas las regiones, bajó también a visitar a los santos que vivían en Lida (NAB).\n\nAquí vemos a san Pedro haciendo su visita pastoral. ¿A qué parte de la Iglesia? ¡A toda! Luego realiza otra primicia: resucita a Tabita en Jope.\n\n8. Hechos 10–11:18: Es a san Pedro a quien Dios da una visión para conducir a la Iglesia a permitir que los gentiles sean bautizados y gocen de plena pertenencia a la Iglesia. ¡Fue un paso radical! Si creemos que tenemos un problema de racismo en el siglo XXI, no es nada comparado con la opinión que había en el siglo primero sobre los gentiles. Observa que, después de que los demás apóstoles y discípulos oyeron a Pedro declarar lo que Dios había hecho, dicen, en 11:18:\n\nCuando oyeron esto, se callaron. Y glorificaron a Dios, diciendo: “Entonces también a los gentiles ha concedido Dios el arrepentimiento para vida.”\n\nOyeron hablar a san Pedro y la cuestión quedó zanjada.\n\n9. Hechos 12:1-17: San Pedro vuelve a ser arrestado. Observa que toda la Iglesia se entrega entonces a la “oración ferviente” (v. 5) y pasa la noche en vela (vv. 6, 12) hasta que él es liberado milagrosamente. No consta que esto haya ocurrido cuando arrestaron a san Santiago o a cualquier otro.\n\n10. Hechos 15–16:4: Leemos sobre un enorme problema en la Iglesia primitiva: la herejía de los judaizantes. Enseñaban que los creyentes en Cristo no solo debían creer y obedecer la ley del Nuevo Testamento, dada por Cristo y los apóstoles, sino también guardar la ley del Antiguo Testamento dada por Moisés, especialmente la circuncisión.\n\nObserva que san Pablo y Bernabé no pudieron calmar la agitación.\n\nPero aún más importante es la manera en que se resuelve el problema. ¿Sacan sus Biblias y se ponen a discutir pasajes? ¡No! Responden con decisión, pero no del modo en que lo haría hoy un “cristiano bíblico”. Responden al problema en obediencia al mandato de nuestro Señor en Mateo 18:15-18. Jesús nos da instrucciones autoritativas sobre qué hacer en caso de desacuerdo sobre doctrina o disciplina en la Iglesia. Primero, ve a tu hermano. Segundo, si no te escucha, toma contigo dos o tres testigos. Si tampoco los escucha, el árbitro final de la situación será la Iglesia.",
                original:
                  "At Catholic Answers, we often get the question: “If St. Peter was made the visible head of the Church, why don’t we see it in the book of Acts? Is not St. James (or perhaps St. Paul) the real leader of the early Church?”\n\nHow do we reply?\n\nActually, St. Peter is quite obviously the visible head of the Church in Acts. When you consider the inspired author of Acts was St. Luke, a companion of St. Paul, it is quite telling that for the first 15 of 28 chapters, Peter is the center of attention rather than Paul. Why this focus on Peter? Let’s take a look.\n\n1. Acts 1:15-26: It is St. Peter who is clearly in charge in choosing and ordaining a new apostle to replace Judas when he gives an authoritative interpretation of Psalm 69:25 and Psalm 109:8. And I might add that these texts do not have an obvious interpretation. Psalm 69:25, for example, speaks of the messiah’s persecutors (plural) who “give him gall for (his) food and sour wine to drink” – in 69:21. Then in verse 25 it says “May their (plural) camp be a desolation, let no one dwell in their tents.”\n\nThere is never a question from the rest of the apostles, “Hey, Peter, that’s a pretty shaky interpretation of those two texts. What hermeneutical principles are you using, anyway?”\n\n2. Acts 2:14-41: It is St. Peter who is in charge at Pentecost and preaches the first sermon whereby 3,000 are baptized.\n\n3. Acts 3:1-4:4:  It is St. Peter who performs the first miracle in Acts, healing the man with withered feet and ankles. He then preaches again and, this time, 5,000 are converted in chapter 4:4.\n\n4. Acts 4:3-12: When St. Peter and St. John are arrested and called before the Sanhedrin, it is St. Peter, in verse 8, who speaks for both and preaches boldly of Christ and the name of Jesus.\n\n5. Acts 5:1-29: It is St. Peter who is in charge of the Church in collecting funds for world evangelism and pronounces God’s judgment on Ananias and Sapphira. It is then, in verse, 15, the people desire St. Peter’s shadow to pass over them that they may be healed. Then, in verse 29, after the apostles were arrested and miraculously set free by the angel of the Lord, they are before the Sanhedrin for the second time. St. Luke records:\n\nPeter and the apostles said in reply, “We must obey God rather than men.”\n\nSt. Peter is set apart. It’s “Peter and the apostles.”\n\n6. Acts 8:14-24: We see St. Peter leading (listed first) when he and St. John confirm new converts in Samaria after the evangelistic efforts of St. Phillip. And it is St. Peter who pronounces judgment on Simon the sorcerer who wanted to buy the power to convey the Holy Spirit.\n\n7. Acts 9:32,40-43: Here we have an interesting little passage most pass over too quickly.\n\nAs Peter was passing through every region, he went down to the holy ones living in Lydda (NAB).\n\nHere we have St. Peter making his pastoral rounds. To what part of the Church? All of it! He then proceeds to do another first. He raises Tabitha from the dead in Joppa.\n\n8. Acts 10-11:18: It is St. Peter to whom God gives a vision to lead the Church in allowing the gentiles to be baptized and enjoy full membership in the Church. This was a radical move! If you think we have a problem with racism in the 21st century, we have nothing on first century opinion of the gentiles! Notice, after the other apostles and other disciples heard Peter declare what God had done, they say, in 11:18:\n\nWhen they heard this they were silenced. And they glorified God, saying, “Then to the gentiles also God has granted repentance unto life.”\n\nThey heard St. Peter speak and the question was settled.\n\n9. Acts 12:1-17: St. Peter is arrested again. Notice that the entire Church then goes to “earnest prayer” (vs. 5) and into the night (vs. 6, 12) until he is released miraculously. This is not recorded to have been the case when St. James or any others were arrested.\n\n10. Acts 15-16:4: We read of an enormous problem in the early Church, the heresy of the Judaizers. They taught believers in Christ must not only believe and obey the New Testament law as given by Christ and the apostles, but they must keep the Old Testament law given by Moses as well, especially circumcision.\n\nNotice, St. Paul and Barnabas could not quell the upheaval.\n\nEven more importantly, however, is the manner in which the problem is dealt with. Do they get out their Bibles and start arguing passages? No! They respond decisively, but not in the way a “Bible Christian” would today. They respond to the difficulty in obedience to the command of our Lord in Matthew 18:15-18. Jesus gives us authoritative instructions on what to do in the case of a disagreement over doctrine or discipline in the Church. First, go to your brother. Second, if he won’t hear you, take two or three witnesses with you. If he won’t hear them, the final arbiter of the situation will be the Church.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.18.15-Matt.18.20", "Matt.28.16-Matt.28.20"],
      text: "Para {c:LG22|Lumen gentium 22}, el poder de «atar y desatar» se dio también al colegio de los apóstoles, pero «unido a su Cabeza»; el Catecismo añade que Pedro es «el único a quien Él confió explícitamente las llaves» {c:CEC553|553}.",
      apologists: {
        arguments: [
          {
            title:
              "Jesús da a «la Iglesia» autoridad vinculante; un párrafo de la misma página que empieza con «Jesús no puede querer decir “la Iglesia” en el sentido del cuerpo invisible…» sostiene que no se trata de la iglesia invisible (no citado)",
            quotes: [
              {
                speaker: "Karlo Broussard",
                work: "THIS Argument Proves Sola Scriptura False",
                outlet: "Dr. Karlo",
                date: "17 de junio de 2026",
                locator:
                  "26 párrafos: del párrafo que empieza «And they arrive at this conclusion like this:…» al que termina «…viewed this authority as extending also to doctrinal matters.»",
                url: "https://www.catholic.com/audio/drk/this-argument-proves-sola-scriptura-false",
                text: "Y llegan a esta conclusión de la siguiente manera:\n\nLa Biblia es una regla de fe infalible.\n\nNo hay otras reglas de fe infalibles.\n\nPor lo tanto, la Biblia sola es nuestra regla de fe infalible.\n\nAhora bien, la premisa clave de ese argumento es la premisa dos: no hay otras reglas de fe infalibles.\n\nY aquí hay una aclaración importante: para la mayoría de los protestantes, esa afirmación no se aplica al siglo primero. Reconocen que los apóstoles eran infalibles, tanto en sus escritos como en su predicación. Así que coinciden en que durante la era apostólica había varias reglas de fe infalibles: los escritos apostólicos y las enseñanzas orales.\n\nPero —y este es el punto crucial— los protestantes sostienen que, después de la muerte de los apóstoles, ninguna regla infalible continuó más allá de sus escritos. ¿Por qué? Porque, dicen, no se preservaron enseñanzas apostólicas no escritas, y ningún agente infalible sucedió a los apóstoles para dar enseñanzas infalibles.\n\nAsí que, si queremos demostrar que la sola Escritura es falsa, tenemos dos caminos posibles: mostrar que a) se preservó una enseñanza apostólica no escrita, o b) una autoridad docente infalible, como el Magisterio, continuó después de los apóstoles y dio enseñanzas infalibles.\n\nHoy voy a concentrarme en ese segundo camino.\n\nConcretamente, quiero argumentar que una autoridad docente infalible sí continuó después de los apóstoles, y que se identifica con el colegio episcopal, el orden de los obispos.\n\nAsí que construyamos el caso paso a paso.\n\nPrimero, vamos a Jesús en Mateo 18:15–18.\n\nAllí, Jesús establece un procedimiento para resolver disputas:\n\nSi tu hermano peca contra ti, ve y repréndelo a solas. Si te escucha, has ganado a tu hermano. 16 Pero si no te escucha, toma contigo a uno o dos más, para que todo asunto se establezca por el testimonio de dos o tres testigos. 17 Si se niega a escucharlos, dilo a la Iglesia; y si ni siquiera escucha a la Iglesia, sea para ti como un gentil y un recaudador de impuestos. 18 De cierto os digo que todo lo que atéis en la tierra quedará atado en el cielo, y todo lo que desatéis en la tierra quedará desatado en el cielo.\n\nObserva que Jesús presenta a “la Iglesia” como un agente con autoridad para emitir juicios vinculantes, tan vinculantes que rechazarlos te deja fuera de la comunión con la Iglesia de Cristo. Ser “gentil” o “recaudador de impuestos” era una manera de decir que eras un extraño.\n\nPero eso plantea algunas preguntas:\n\n¿Qué quiere decir Jesús aquí con “la Iglesia”, que es quien debe ejercer esta clase de agencia?\n\n¿Y a qué clase de juicios autoritativos nos referimos?\n\nVeamos primero la primera pregunta.\n\nJesús no puede referirse a “la Iglesia” en el sentido de cuerpo invisible de creyentes unidos por la gracia, porque un cuerpo invisible no puede oír casos, emitir juicios ni dictar decisiones vinculantes.\n\nAsí que Jesús debe estar refiriéndose a algo visible: algún cuerpo identificable de líderes que representan oficialmente a “la Iglesia”.\n\nLa mayoría identifica a ese cuerpo de líderes con quienes los apóstoles designarían para dirigir las iglesias locales que fundaron. Sin embargo, el versículo 18 da motivos para pensar que se extiende al colegio de los apóstoles como representante de la Iglesia universal.\n\nObserva que, inmediatamente después de que Jesús habla de la Iglesia emitiendo juicios vinculantes, se dirige a los apóstoles presentes y les dice: “De cierto os digo que todo lo que atéis en la tierra quedará atado en el cielo, y todo lo que desatéis en la tierra quedará desatado en el cielo”.\n\nAllí, Jesús se dirige a los apóstoles como grupo y vincula su actividad colectiva de atar y desatar con la mencionada agencia de “la Iglesia”. Seguramente, la autoridad colectiva de los apóstoles va más allá de cualquier ámbito local. Así, Jesús concibe a los apóstoles como un grupo que representa a la Iglesia universal y ejerce autoridad en su nombre.\n\nAdemás, como veremos enseguida, el Nuevo Testamento muestra que los primeros cristianos aplicaban la instrucción de Jesús de Mateo 18 de manera tan amplia y universal.\n\nAhora bien, en cuanto al tipo de juicios autoritativos: como mínimo, son disciplinarios. El lenguaje de “atar y desatar” en el contexto judío se refiere a la toma de decisiones con autoridad sobre asuntos disciplinarios. Pero cuando miramos la Iglesia primitiva, vemos que los apóstoles y otros cristianos consideraban que esta autoridad se extendía también a asuntos doctrinales.",
                original:
                  "And they arrive at this conclusion like this:\n\nThe Bible is an infallible rule of faith.\n\nThere are no other infallible rules of faith.\n\nTherefore, the Bible alone is our infallible rule of faith.\n\nNow, the key premise in that argument is premise two: there are no other infallible rules of faith.\n\nAnd here’s an important clarification: for most Protestants, that claim doesn’t apply to the first century. They acknowledge that the apostles were infallible—both in their writing and in their preaching. So they agree that during the apostolic age, there were multiple infallible rules of faith—the apostolic writings and oral teachings.\n\nBut—and this is the crucial point—Protestants argue that after the apostles died, no infallible rule continued other than their writings. Why? Because, they say, no unwritten apostolic teachings were preserved, and no infallible agents succeeded the apostles to give infallible teachings.\n\nSo, if we want to prove Sola Scriptura false, we’ve got two possible routes: Either show that a) unwritten apostolic teaching was preserved, or b) an infallible teaching authority—like the Magisterium—continued after the apostles and gave infallible teachings.\n\nToday, I’m going to focus on that second route.\n\nSpecifically, I want to argue that an infallible teaching authority did continue after the apostles—and it’s identified in the episcopal college, the order of bishops.\n\nSo let’s build the case step by step.\n\nFirst, we go to Jesus in Matthew 18:15–18.\n\nThere, Jesus lays out a process for resolving disputes:\n\nIf your brother sins against you, go and tell him his fault, between you and him alone. If he listens to you, you have gained your brother. 16 But if he does not listen, take one or two others along with you, that every word may be confirmed by the evidence of two or three witnesses. 17 If he refuses to listen to them, tell it to the Church; and if he refuses to listen even to the Church, let him be to you as a Gentile and a tax collector. 18 Truly, I say to you, whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven.\n\nNotice Jesus presents “the Church” as an agent who has the authority to make judgments that are binding—so binding, in fact, that rejecting them puts you out of communion with Christ’s Church. To be a “gentile” or a “tax collector” was code for being an outsider.\n\nBut that raises a few questions:\n\nWhat does Jesus mean by “the Church” here who is to exercise this sort of agency?\n\nAnd what kind of authoritative judgements are we talking about?\n\nLet’s take the first question.\n\nJesus can’t mean “the Church” in the sense of the invisible body of believers united by grace, because an invisible body can’t hear cases, make judgments, and issue binding decisions.\n\nSo Jesus must be referring to something visible—some identifiable body of leaders who officially represent “the Church.”\n\nMost identify that body of leaders as those whom the apostles would appoint to lead the local churches they founded. However, verse 18 gives us reason to think it extends to the college of the apostles as representative of the Church universal.\n\nNotice immediately after Jesus speaks of the Church making binding judgments, he turns to the apostles present there and says, “Truly I say to you, whatever you bind on earth is bound in heaven, and whatever you loose on earth is loosed in heaven.”\n\nThere, Jesus is addressing the apostles as a group and ties their collective binding and loosing activity to the said agency of “the Church.” Surely, the collective agency of the apostles goes beyond any sort of local setting. Thus, Jesus envisions the apostles as a group representative of the universal Church and exercising agency on behalf of it.\n\nAlso, as we’ll see in a moment, the New Testament witnesses to the early Christians applying Jesus’ instruction from Matthew 18 in this expansive and universal way.\n\nNow, concerning the kind of authoritative judgments—at a minimum, it’s disciplinary. The language of “binding and loosing” in the Jewish context refers to authoritative decision-making that pertains to disciplinary matters. But when we look at the early Church, we see that the apostles and other Christians viewed this authority as extending also to doctrinal matters.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.20.21-John.20.23"],
      text: "«Como me envió el Padre, así también yo os envío»: para {c:LG18|Lumen gentium 18}, Cristo edificó la Iglesia enviando a los apóstoles y quiso que sus sucesores, los obispos, fueran «los pastores en su Iglesia hasta la consumación de los siglos».",
      apologists: {
        arguments: [
          {
            title:
              "El Hijo envía a los apóstoles con autoridad, como el Padre lo envió a él (Heschmeyer, en dos episodios sobre el perdón de los pecados)",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Who Can Forgive Sins?",
                outlet: "Shameless Popery",
                date: "5 de enero de 2023",
                locator:
                  "7 párrafos: del párrafo que empieza «And so it would be ridiculous Jesus’ point is…» al que termina «…people what has already been forgiven them by God.»",
                url: "https://www.catholic.com/audio/sp/who-can-forgive-sins",
                text: "Y así sería ridículo —el punto de Jesús frente a los fariseos— creer que se puede tener autoridad para decirle a un paralítico que camine, pero no autoridad para decirle al paralítico que sus pecados le son perdonados. Eso sería absurdo. ¿Por qué no sería absurdo? Porque ambas cosas pertenecen propiamente solo a Dios, y sería absurdo pensar que a Dios le importa más que le funcionen las piernas al hombre que el perdón de su pecado.\n\nAsí que sería absurdo creer que Dios daría a los seres humanos la capacidad de realizar sanaciones físicas y no espirituales. Por eso Jesús plantea su prueba. Y lo asombroso es que no es que estos autores protestantes simplemente se alineen con los escribas y fariseos contra Jesús. Es que ni siquiera llegan a entender la prueba, porque piensan: ah, sí, los apóstoles ciertamente podrían decir: “Levántate y anda”. Pueden realizar sanaciones físicas, pero no pueden realizar sanaciones espirituales. Incluso los escribas y fariseos se daban cuenta de que esa posición era ridícula. Decir que pueden sanar todo menos el alma es escandaloso, porque el punto central es la sanación del alma. La sanación espiritual es lo que necesitamos en primer lugar.\n\nQuiero volver al punto y llegar de verdad al corazón de la cuestión: ¿Jesús confirió autoridad divina para perdonar pecados? ¿Dio a los seres humanos la capacidad de perdonar pecados en algún lugar del Evangelio? Y la respuesta es simplemente que sí. Hay algunos lugares donde mirar. El primero y más obvio es Juan 20, 21 y 23. Esto es en Pascua.\n\nÉl les dice: “La paz sea con ustedes. Como el Padre me envió, así también yo los envío.” Fíjense otra vez en el tema del envío, otra vez en el tema de la autoridad. Esto no es algo que puedan hacer por sí mismos, sino que, así como el Hijo del Hombre fue enviado por el Padre, ahora el Hijo envía a los apóstoles. Y no solo los envía, sino que los capacita. Dice: “Reciban el Espíritu Santo. A quienes les perdonen los pecados, les son perdonados; a quienes se los retengan, les son retenidos.” Eso es claro como el día: sabemos que es posible que un ser humano perdone pecados con autoridad divina, porque lo vimos en los evangelios, y ahora vemos a nuevas personas con esta autoridad para perdonar pecados, a saber, los apóstoles.\n\nClaro, podrías pensar: bueno, dado lo clara que es esa cuestión, ¿qué hacen los protestantes con eso? Bueno, este es Matt Slick, que tiene un artículo, “Does John 20:23 Mean the Catholic Priest Can Forgive Sins”, y remite al pasaje original que estábamos viendo, la sanación del paralítico en Lucas 5 y en otros lugares, Mateo 9. Dice que Jesús perdonó pecados, y que los escribas, estudiosos de la ley, afirmaron correctamente que solo Dios perdona pecados. Así que, de nuevo, él supone que los escribas y fariseos tienen razón.\n\nLuego dice: si estaban equivocados en eso, ¿por qué Jesús no los corrigió? Y la respuesta es que sí lo hizo. Dijo: “¿Por qué piensan mal en sus corazones?” En cambio, Matt Slick dice que él confirma la afirmación de ellos. No lo hizo. Declara que tiene la capacidad de perdonar pecados y luego sana al paralítico. Eso simplemente no es lo que pasa. Quiero decir, vuelvan y lean el pasaje. No dice: tienen razón, solo Dios puede perdonar pecados, y aquí estoy perdonando pecados.\n\nSi hubiera hecho eso, todos sabrían desde el comienzo del ministerio de Jesús que él se estaba declarando Dios, y todavía no lo saben. Vemos una revelación gradual de la afirmación divina de Jesús. No la vemos muy temprano. Y entonces sigue, Matt Slick sigue diciendo: bueno, debería quedar claro que solo Dios perdona pecados, y que los cristianos, como representantes de Cristo, anuncian a las personas lo que Dios ya les ha perdonado.",
                original:
                  "And so it would be ridiculous Jesus’ point is to the Pharisees to believe that you can have the authority to tell a paralyzed man that he can walk, but you don’t have the authority to tell the paralyzed man that his sins are forgiven. That would be absurd. Why wouldn’t that be absurd? Because both of these are things that properly belong only to God, and it would be absurd to think that God cares more about the guy’s legs working than about the forgiveness of his sin.\n\nSo it’d be absurd to believe that God would give humans the ability to perform physical healing and not spiritual healing. That’s why Jesus poses his test. And so the astounding thing is that it isn’t that these Protestant authors are just citing with the scribes and Pharisees over Jesus. It’s that they’re failing to even understand the test because they’re thinking, oh yeah, the apostles could certainly say, “Rise and walk.” They can actually perform physical healing but they can’t perform spiritual healings. Even the scribes and Pharisees realized that was a ridiculous position. To say they can heal everything other than the soul is outrageous, because the whole point is the healing of the soul. The spiritual healing is what we need in the first place.\n\nSo I want to circle back around and get really to the heart of the question, did Jesus bestow divine authority to forgive sins? Did he give human beings the ability to forgive sins anywhere in the gospel? And the answer to that is only yes. There’s a few places to look. The first and most obvious one is John 20, 21 and 23. This is Easter.\n\nHe says to them, “Peace be with you. As the father has sent me even so I send you.” Notice the theme of sending again, notice the theme of authority again. This is not something they can do by themselves, but just as the son of man was sent by the father, now the son sends the apostles. And he doesn’t just send them, he empowers them. He says, “Receive the Holy Spirit. If you forgive the sins of any they are forgiven. If you retain the sins of any they are retained.” That’s as clear as day, that we know it’s possible for a human being to forgive sins with divine authority because we saw it in the gospels, and now we see new people with this authority to forgive sins, namely the apostles.\n\nSee, you might think, okay, given how clear that is, what do Protestants do with that? Well this is Matt Slick, who has an article, Does John 20:23 Mean the Catholic Priest Can Forgive Sins, and he points back to the original passage that we were looking at the healing of the paralytic in Luke 5 and elsewhere, Matthew 9. He says Jesus forgave sins, and the scribes, students of the law, rightly stated that only God forgive sins. So again, he’s assuming the scribes and Pharisees are right.\n\nThen he says if they were wrong about that then why didn’t Jesus correct them? And the answer is He did. He said, “Why do you think evil in your hearts?” Instead, Matt Slick says he affirms their claim. He didn’t. He states that he has the ability to forgive sins and then heals the paralytic. That’s just not what happens. I mean go back and read the passage. He doesn’t say, you are right, only God can forgive sins, and here I am forgiven sins.\n\nIf he had done that, then everyone would’ve known from the beginning of Jesus’ ministry that he was claiming to be God, and they don’t know that yet. We see a gradual revelation of Jesus’ divine claim. We don’t see it super early on. And so he goes on, Matt Slick goes on to say, well it should be clear that only God forgives sins and Christians as representatives of Christ pronounce people what has already been forgiven them by God.",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "Why Confess Your Sins to a Priest?",
                outlet: "Shameless Popery",
                date: "22 de octubre de 2024",
                locator:
                  "4 párrafos: del párrafo que empieza «And he points out, well throughout scripture, God’s forgiveness…» al que termina «…Spirit, they have a gift of the Holy Spirit.»",
                url: "https://www.catholic.com/audio/sp/why-confess-your-sins-to-a-priest",
                text: "Y señala que, a lo largo de toda la Escritura, el perdón de Dios siempre está mediado. En el Antiguo Testamento, estaba mediado por el sumo sacerdote, el chivo expiatorio y la fiesta hebrea de Yom Kipur, el Día de la Expiación. Y claro, eso se ve en todo el Antiguo Testamento. Es algo fácil de pasar por alto, pero piensen en cómo está organizado el Antiguo Testamento. Esto no va a ser Yom Kipur; esto va a ser Levítico 4, pero muestra esta práctica del Antiguo Testamento. Así que esto está bajo la ley mosaica. Si uno de la gente común, uno de los hombres del pueblo, peca sin querer y se da cuenta de que hizo algo que no debía hacer, y es culpable cuando se le hace conocer el pecado que cometió, traerá como ofrenda una cabra hembra sin defecto, por el pecado que cometió.\n\nY pone la mano sobre la cabeza de la ofrenda por el pecado y mata la ofrenda por el pecado en el lugar del holocausto. Pero ¿adónde la lleva? Bueno, la lleva al sacerdote, lo que significa que la gente iba al sacerdote a confesar sus pecados, incluso si era solo confesar: pequé y aquí está mi ofrenda por el pecado. Había cierta idea de que ibas al sacerdote y el sacerdote ofrecía un sacrificio para ayudar a tu perdón. Ahora bien, la pregunta es: bueno, pero Jesús es a la vez nuestro sacrificio y nuestro gran sumo sacerdote. Entonces, ¿hay algún papel para esto ahora? Y la respuesta bíblica a esto es que sí. ¿Cómo lo sabemos? Así que el primer versículo que quiero que tengan a mano, para tenerlo en el bolsillo de atrás, es Santiago 5:16. El segundo es Juan 20.\n\nEn realidad son Juan 20 a 23. Pero si solo tienen que tomar un versículo, solo Juan 20:23, esto es en Pascua, y Jesús se aparece a través de los discípulos y dice: la paz sea con ustedes, como el Padre me envió. Así también yo los envío. Noten que él ha recibido autoridad del Padre. Ahora se la está dando a los apóstoles. Y cuando dice esto, luego sopla sobre ellos. Piensen en la importancia de eso: Dios literalmente insufla vida en Adán. Así que aquí está Dios el Hijo, soplando sobre los apóstoles y diciendo: reciban el Espíritu Santo. A quienes les perdonen los pecados, les son perdonados. A quienes se los retengan, les son retenidos. Bien, entonces ¿por qué voy a ir a cualquier otra persona a confesar mis pecados? Bueno, en parte porque la he agraviado a ella, y porque en el pecado he herido a la familia humana. He escuchado a miembros de la iglesia, he escuchado a miembros de mi familia, y necesito reconocerlo y asumirlo.\n\nPero ¿por qué voy al sacerdote? Bueno, no solo por esas razones, sino también porque el sacerdote, a diferencia de mí y de ustedes, a menos que sean sacerdotes, tiene la capacidad de perdonar pecados, porque es un poder que Jesús da aquí a los apóstoles. Noten que no se lo da a todos. No dice: reúnan a los quinientos que lo vieron después de su resurrección, y no sopla sobre todos ellos. Está soplando aquí sobre los doce, en realidad sobre diez de los doce, porque Judas y Tomás no están, por distintas razones. Pero noten que esto es algo que les da a sus líderes de la Iglesia, si quieren llamarlo así, clero, si quieren llamarlo así. Los ancianos, los presbíteros; san Pedro se refiere a sí mismo como anciano. Y así claramente hay un sentido de que el liderazgo de la Iglesia ha recibido una autoridad especial para perdonar pecados a través del ministerio de Cristo y de este don del Espíritu Santo; tienen un don del Espíritu Santo.",
                original:
                  "And he points out, well throughout scripture, God’s forgiveness is always mediated. In the Old Testament, it was mediated by the high priest and the scapegoat and the Hebrew feast of Yom Kippur, the Day of Atonement. And of course you can see that all over the Old Testament. This is something that’s easy to kind of miss, but think about the way the Old Testament is set up. This isn’t going to be Yom Kippur, this is going to be Leviticus four, but it shows this Old Testament practice. And so this is under the Mosaic law. If one of the ordinary people, one of the common people sinned unwittingly and they realize they’d done something they weren’t supposed to do, and they’re guilty when the sin which he has made is made known to him, he shall bring for his law for in a goat, a female without blemish for his sin, which he has committed.\n\nAnd he shall lay his hand on the head of the sin offering and kill the sin offering in the place of burnt offering. But where is he bringing that? Well, he’s bringing it to the priest, which means people were going to the priest to have their sins confess, even if it was just confessing, I sinned and here’s my sin offering. There was some sense that you were going to the priest and the priest was offering sacrifice to aid in your forgiveness. Now, the question then becomes, well, okay, but Jesus is both our sacrifice and our great high priest. So is there any role for this now? And the biblical answer to this, the biblical answer is yes. How do we know that? So the first verse I want you to know to just have in your back pocket was James five 16. The second one is John 20.\n\nReally it’s 20 to 23. But if you got to just get one verse, just John 2023, this is on Easter, and Jesus appears through the disciples and says, peace be with you as the Father has sent me. Even. So I send you notice, he’s been given authority by the Father. He’s now giving authority to the apostles. And when he says this, he then breathes on them. This is, think about the importance of that God literally breathes life into Adam. So here is God the Son, breathing on the apostles and saying, receive the Holy Spirit. If you forgive the sins of any, they’re forgiven. If you retain the sins of any, they’re retained. Okay, so why do I go to anybody else to confess my sins? Well, partly because I’ve wronged them and because in sin, I’ve hurt the human family. I’ve heard members of the church, I’ve heard members of my family, and I need to acknowledge that and own that.\n\nBut why do I go to the priest? Well, not just for those reasons, but also because the priest unlike me and you, unless you’re a priest, the priest unlike me, and you has the ability to forgive sins because this is a power that Jesus gives here to the apostles. Notice he doesn’t give it to everybody. He doesn’t say gather the 500 who see him after his resurrection, and he doesn’t breathe on all of them. He’s breathing here on the 12, actually 10 of the 12, because Judas and Thomas are not there for different reasons. But notice this is something he’s giving to his church leaders, if you want to call it that clergy, if you want to call it that. The elders, the presbyter, St. Peter refers to himself as an elder. And so there’s clearly this sense that the church leadership has been given a special authority to forgive sins through the ministry of Christ and this gift of the Holy Spirit, they have a gift of the Holy Spirit.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "La sucesión apostólica transmite las promesas hechas a los apóstoles",
            quotes: [
              {
                speaker: "Taylor Marshall",
                work: "Roman Ecclesiology and Protestants",
                outlet: "taylormarshall.com",
                date: "17 de julio de 2007",
                locator: "Párrafo que empieza «We might also remember»",
                url: "https://taylormarshall.com/2007/07/roman-ecclesiology-and-protestants.html",
                text: "También podemos recordar que la Iglesia Católica define a la Iglesia como una realidad visible, históricamente conectada con Cristo y sus doce Apóstoles mediante el Santo Bautismo y la Sucesión Apostólica. Este último término se refiere a la cadena ininterrumpida de ordenaciones que se extiende desde los Apóstoles hasta los obispos de hoy. Esta cadena ininterrumpida de ordenaciones asegura que estos hombres reciben las promesas de Cristo: 1) “atar en la tierra” mediante la doctrina y la disciplina; 2) “perdonar pecados” (Jn 20:19-21); y tener autoridad para celebrar los Sacramentos, sobre todo el Santo Sacrificio de la Misa.",
                original:
                  "We might also remember that the Catholic Church defines the Church as a visible reality that is historically connected to Christ and His twelve Apostles through Holy Baptism and Apostolic Succession. The latter term refers to the unbroken chain of ordinations extending from the Apostles to the modern day bishops of the Church. This unbroken chain of ordinations ensures that these men receive the promises of Christ: 1) to “bind on earth” through doctrine and discipline; 2) to “forgive sins” (Jn 20:19-21); and to have authority to celebrate the Sacraments, chiefly the Holy Sacrifice of the Mass.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.15.5"],
      text: "Cristo resucitado se aparece «a Cefas y luego a los Doce» {c:UUS91|Ut unum sint 91}.",
      apologists: {
        arguments: [
          {
            title: "El Jesús resucitado se apareció primero a Pedro (Horn)",
            quotes: [
              {
                speaker: "Trent Horn",
                work: 'Refuting Papal Myths — "Peter Was Not a Pope"',
                outlet: "Catholic Answers Magazine",
                date: "22 de septiembre de 2015",
                locator:
                  "7 párrafos: del párrafo que empieza «The doctrine of papal infallibility teaches that the pope…» al que termina «…of Catholic Answers Magazine, available for digital download here.»",
                url: "https://www.catholic.com/magazine/online-edition/refuting-papal-myths-peter-was-not-a-pope",
                text: "La doctrina de la infalibilidad papal enseña que el papa tiene una gracia especial de Cristo que lo protege de llevar a la Iglesia al error. Esa gracia no le impedirá pecar (incluso gravemente), ni le dará la respuesta correcta a cada cuestión que enfrenta la Iglesia. Más bien, lo protegerá de llevar oficialmente a la Iglesia a la herejía. Como teólogo privado, el papa podría especular, incluso equivocadamente, sobre la fe, pero nunca emitirá una enseñanza falsa relacionada con la fe o la moral que pretenda ser vinculante e infalible (o una enseñanza errónea ex cathedra).\n\n¿Pero por qué creer que el papa es infalible? Mateo 16:18 dice que los “poderes de la muerte” (en otras traducciones, “las puertas del infierno”) no prevalecerán nunca contra la Iglesia, así que tiene sentido que el pastor de la Iglesia de Cristo nunca la lleve al infierno enseñando herejía. Lucas 22:31-32 registra a Jesús diciéndole a Pedro: “Satanás ha pedido zarandearlos a todos como al trigo, pero yo he rogado por ti para que tu fe no falle; y cuando te hayas vuelto, fortalece a tus hermanos.” El texto griego original muestra que Satanás pidió zarandear “a todos ustedes”, es decir, a todos los apóstoles, pero Jesús oró solo por Pedro, para que su fe no fallara.\n\nAhora bien, es cierto que Cristo llamó alguna vez a Pedro “Satanás” por intentar detener la crucifixión (Mt. 16:23), y sabía que más tarde lo negaría en su juicio. Pero Dios no llama a los perfectos: perfecciona a los llamados. Cristo oró para que, una vez que Pedro se “hubiera vuelto” de sus pecados, guiara y fortaleciera a los apóstoles. Después de su Resurrección, Jesús incluso se apareció primero a Pedro (1 Cor. 15:5).\n\nLa mayoría de los protestantes tendría que admitir que Pedro era infalible cuando escribió 1 y 2 Pedro, o al menos que esas epístolas no tienen errores. Los católicos simplemente llevan este razonamiento a su conclusión lógica: Pedro nunca llevó a la Iglesia al error, ni tampoco ninguno de sus sucesores. Algunos sostienen que Pedro era falible porque san Pablo se le opuso en Antioquía y dijo que Pedro estaba equivocado o que “se había hecho digno de condena” (Gál. 2:11-14). Pero en esa situación Pedro, a lo sumo, cometió un error de conducta, no de enseñanza.\n\nPedro temía la hostilidad de los cristianos que pensaban que la circuncisión era necesaria para la salvación. Así que, mientras estaba en su presencia, Pedro se negó a comer con los no circuncidados. Pablo criticó a Pedro por hacer esto, pero el mismo Pablo se acomodó a este mismo grupo cuando hizo circuncidar a su discípulo Timoteo. Pablo lo hizo para facilitar la predicación a los judíos (Hechos 16:1-3), pero en Gálatas 5:2 llamó a la circuncisión un pecado grave. Por tanto, si ceder prudencialmente a los críticos no invalida la autoridad de san Pablo, tampoco invalida la de san Pedro.\n\nNadie niega que algunos papas hayan cometido pecados graves, pero la infalibilidad significa solo que el papa no enseñará error, no que vaya a ser sin pecado. De hecho, algunos Padres de la Iglesia, como san Cipriano de Cartago, criticaron las decisiones de los papas; pero incluso Cipriano creía que el papa no podía llevar a la Iglesia por mal camino. Escribe en el año 256 d. C. sobre herejes que se atreven a acercarse “a la cátedra de Pedro... a la que la infidelidad no podía tener acceso” (Epístola 54.14), o, como dicen otras traducciones, “de la que ningún error puede manar”.\n\nEste texto está extraído del artículo de Trent Horn “Defending the Papacy”. El artículo completo puede encontrarse en el número de este mes de Catholic Answers Magazine, disponible para descarga digital aquí.",
                original:
                  "The doctrine of papal infallibility teaches that the pope has a special grace from Christ that protects him from leading the Church into error. That grace won’t keep him from sinning (even gravely), nor will it give him the right answer to every issue facing the Church. Instead, it will protect the pope from officially leading the Church into heresy. As a private theologian, the pope might speculate, even incorrectly, about the Faith, but he will never issue a false teaching related to faith or morality that claims to be binding and infallible (or an erroneous ex cathedra teaching).\n\nBut why believe the pope is infallible? Matthew 16:18 says the “powers of death” (in other translations “the gates of hell”) will never prevail against the Church, so it makes sense that the pastor of Christ’s Church will never steer it into hell by teaching heresy. Luke 22:31-32 records Jesus telling Peter, “Satan has demanded to sift you all like wheat, but I have prayed for you that your faith may not fail; and when you have turned again, strengthen your brethren.” The original Greek in the passage shows that Satan demanded to sift “you all,” or all the apostles, but Jesus prayed only for Peter and his faith not to fail.\n\nNow, it’s true that Christ once called Peter “Satan” for trying to stop the crucifixion (Matt. 16:23), and he knew Peter would later deny him at his trial. But God doesn’t call the perfect—he perfects the called. Christ prayed that once Peter had “turned again” from his sins, he would lead and strengthen the apostles. After his Resurrection, Jesus even appeared to Peter first (1 Cor. 15:5).\n\nMost Protestants would have to admit that Peter was infallible when he wrote 1 and 2 Peter, or at least that those epistles have no errors. Catholics simply take this reasoning to the logical conclusion that Peter never led the Church into error, nor did any of his successors. Some argue that Peter was fallible because St. Paul opposed him in Antioch and said Peter was wrong or “stood condemned” (Gal. 2:11-14). But in this situation Peter, at most, made an error in behavior, not teaching.\n\nPeter feared antagonism from Christians who thought circumcision was necessary for salvation. So, while he was in their presence, Peter declined to eat with the uncircumcised. Paul criticized Peter for doing this, but Paul himself accommodated this same group when he had his disciple Timothy circumcised. Paul did this to make it easier to preach to the Jews (Acts 16:1-3), but Paul called circumcision a grave sin in Galatians 5:2. Therefore, if prudentially yielding to critics doesn’t invalidate St. Paul’s authority, then neither does it invalidate St. Peter’s.\n\nNo one denies that some popes engaged in serous sins, but infallibility means only that the pope won’t teach error, not that he will be sinless. Indeed, some Church Fathers, such as St. Cyprian of Carthage, criticized the pope’s decisions; but even Cyprian believed the pope could not lead the Church astray. He writes in A.D. 256 of heretics who dare approach “the throne of Peter . . . to whom faithlessness could have no access” (Epistle 54.14), or, as other translations put it, “from whom no error can flow.”\n\nThis post excerpted from Trent Horn’s article “Defending the Papacy.” The full article can be found in this month’s issue of Catholic Answers Magazine, available for digital download here.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "La debilidad de Pedro, su respuesta obediente y su encuentro con el Señor resucitado",
            quotes: [
              {
                speaker: "Scott Hahn",
                work: "Into the Deep: Scott Hahn Reflects on the Fifth Sunday in Ordinary Time",
                outlet: "St. Paul Center",
                date: "Sin fecha indicada",
                locator: "Párrafos que empiezan «God’s Word comes to us»",
                url: "https://stpaulcenter.com/posts/into-the-deep-scott-hahn-reflects-on-the-fifth-sunday-in-ordinary-time",
                text: "La Palabra de Dios llega a nosotros como llegó a Pedro, Pablo, Isaías y al salmista de hoy: como un llamado personal a dejarlo todo y seguirlo, a entregar nuestras debilidades para ser llenados de su fuerza. Simón se internó en aguas profundas aunque, como pescador profesional, sabía que sería insensato esperar pescar algo. Al humillarse ante la orden del Señor, fue exaltado: sus redes se llenaron hasta desbordar; más tarde, como nos dice Pablo, será el primero en ver al Señor resucitado.",
                original:
                  "God’s Word comes to us as it came to Peter, Paul, Isaiah, and today’s Psalmist—as a personal call to leave everything and follow Him, to surrender our weaknesses in order to be filled with His strength. Simon put out into deep waters even though, as a professional fisherman, he knew it would be foolhardy to expect to catch anything. In humbling himself before the Lord’s command, he was exalted—his nets filled to overflowing; later, as Paul tells us, he will become the first to see the risen Lord.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.2.19-Eph.2.22", "Rev.21.14", "1Pet.2.4"],
      text: "La Iglesia está edificada «sobre el bienaventurado Pedro, su cabeza, siendo el propio Cristo Jesús la piedra angular» {c:LG19|Lumen gentium 19}; Cristo es la «Piedra viva» que asegura a la Iglesia edificada sobre Pedro {c:CEC552|Catecismo 552}.",
      apologists: {
        arguments: [
          {
            title: "La Iglesia está edificada sobre el fundamento de los apóstoles",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "The Church’s FIVE Foundations",
                outlet: "The Jimmy Akin Podcast",
                date: "10 de junio de 2025",
                locator:
                  "28 párrafos: del párrafo que empieza «But notice something. As the name suggests, a cornerstone…» al que termina «…being completed by the apostles and New Testament prophets.»",
                url: "https://www.catholic.com/audio/tjap/the-churchs-five-foundations",
                text: "Pero fíjate en algo. Como su nombre sugiere, una piedra angular está en la esquina de un edificio. No es toda la base, sino solo una parte.\n\nLa piedra angular puede ser la parte más importante del cimiento, pero no es todo.\n\nY esto es aún más evidente en el griego de san Pedro que en inglés, porque “piedra angular” no es una sola palabra. En cambio, san Pedro usa la frase lithon akrogóniaion para referirse a este concepto.\n\nYa vimos que lithos es la palabra para piedra, y el léxico griego-inglés de Bauer-Danker-Arndt-Gingrich define akrogóniaios como un adjetivo que significa “situado en el extremo de la esquina”.\n\nDe manera similar, el léxico griego-inglés de Liddell-Scott registra akrogóniaios con el significado de “en el ángulo extremo”.\n\nEsto deja muy claro que Pedro, basándose en Isaías, concibe a Jesús como una piedra en la esquina de una estructura más grande.\n\nAsí que aquí vemos a Pedro usando una metáfora distinta de la que usaba Pablo en 1 Corintios.\n\nAllí Pablo presentaba a Jesucristo como el fundamento entero, pero aquí Pedro lo presenta solo como la piedra angular de la Iglesia. Así que esta es una metáfora diferente\n\nEfesios 2:19-21\n\n¿Qué encontramos cuando nos volvemos a un tercer pasaje en el que el Nuevo Testamento habla del fundamento de la Iglesia?\n\nEste se encuentra en Efesios, capítulo 2, donde san Pablo dice:\n\nYa no sois extranjeros ni forasteros, sino conciudadanos de los santos y miembros de la familia de Dios, edificados sobre el fundamento de los apóstoles y profetas, siendo la piedra angular el mismo Cristo Jesús, en quien todo el edificio, bien coordinado, va creciendo para ser un templo santo en el Señor (Efesios 2:19-21).\n\nAquí Pablo compara la Iglesia con un templo santo, e identifica dos componentes del fundamento del templo.\n\nDice que el mismo Cristo Jesús es la piedra angular, así que es la misma metáfora que vimos en 1 Pedro, basada en la profecía de Isaías.\n\nPero también dice que el templo está edificado sobre el fundamento de los apóstoles y profetas.\n\nPodrías preguntarte si Pablo se refiere aquí a los profetas del Antiguo Testamento, pero no parece ser así.\n\nSi fuera el caso, esperaríamos que los profetas se mencionaran primero, ya que precedieron a los apóstoles en el tiempo. Pablo diría “edificados sobre el fundamento de los profetas y apóstoles”.\n\nEl hecho de que nombre a los profetas en segundo lugar sugiere que se trata de profetas del Nuevo Testamento, como Ágabo, del que leemos en Hechos 11:27-28. Estos profetas tenían menos autoridad que los apóstoles, y por eso la expresión “apóstoles y profetas” representa una jerarquía.\n\nEsta interpretación se confirma por el hecho de que Pablo menciona a los profetas otras dos veces en Efesios.\n\nLa primera está en el capítulo 3, versículo 5, donde Pablo contrasta cómo el mensaje cristiano no había sido revelado en el período del Antiguo Testamento con cómo:\n\nEl misterio de Cristo... ha sido revelado ahora a sus santos apóstoles y profetas por el Espíritu (Efesios 3:5).\n\nAsí que esta es una referencia a los profetas del Nuevo Testamento.\n\nEl segundo pasaje está en el capítulo 4, versículos 11-12, donde Pablo dice que:\n\n[Cristo] dio a los apóstoles, a los profetas, a los evangelistas, a los pastores y maestros, para perfeccionar a los santos en la obra del ministerio, para edificar el cuerpo de Cristo (Efesios 4:11-12).\n\nAsí que, también aquí, Pablo piensa en los profetas del Nuevo Testamento.\n\nPor tanto, por varias razones, debemos entender que Pablo dice que, teniendo a Cristo como piedra angular, la Iglesia está edificada sobre el fundamento de los apóstoles y de los profetas del Nuevo Testamento.\n\nY nota que esta carta fue escrita por el mismo san Pablo que escribió 1 Corintios, lo que muestra que era capaz de usar metáforas distintas en diferentes ocasiones.\n\nEn 1 Corintios, presenta a Jesús como el fundamento insustituible de la iglesia local; pero aquí lo presenta como la piedra angular de la Iglesia, con el fundamento completado por los apóstoles y los profetas del Nuevo Testamento.",
                original:
                  "But notice something. As the name suggests, a cornerstone is at the corner of a building. It’s not the whole foundation—only part of it.\n\nThe cornerstone may be the most important part of the foundation, but it’s not the whole thing.\n\nAnd this is even more obvious in St. Peter’s Greek than it is in English, because cornerstone isn’t a single word. Instead, St. Peter uses the phrase lithon akrogóniaion to refer to this concept.\n\nWe already heard that lithos is the word for stone, and as the Bauer-Danker-Arndt-Gingrich Greek-English Lexicon, akrogóniaios is an adjective that means “lying at the extreme corner.”\n\nSimilarly, the Liddell-Scott Greek-English Lexicon lists akrogóniaios as meaning “at the extreme angle.”\n\nThis makes it very clear that Peter—based on Isaiah—is conceptualizing Jesus as a stone at the corner of a larger structure.\n\nSo here we see Peter using a metaphor that is different from the one Paul was using in 1 Corinthians.\n\nThere, Paul depicted Jesus Christ as the whole foundation, but here Peter depicts him as just the cornerstone of the Church. So this is a different metaphor\n\nEphesians 2:19-21\n\nWhat do we find when we turn to a third passage in which the New Testament speaks about the foundation of the Church?\n\nThis one is found in Ephesians chapter 2, where St. Paul says:\n\nYou are no longer strangers and aliens, but you are fellow citizens with the saints and members of the household of God, built on the foundation of the apostles and prophets, Christ Jesus himself being the cornerstone, in whom the whole structure, being joined together, grows into a holy temple in the Lord (Ephesians 2:19-21).\n\nHere Paul compares the Church to a holy temple, and he identifies two components of the temple’s foundation.\n\nHe says that Christ Jesus himself is the cornerstone, so that’s the same metaphor we saw in 1 Peter, which is based on Isaiah’s prophecy.\n\nBut he also says that the temple is built on the foundation of the apostles and prophets.\n\nYou might wonder if Paul is referring to the Old Testament prophets here, but he does not appear to be.\n\nIf that were the case, then we would expect the prophets to be mentioned first since they preceded the apostles in time. Paul would say “built on the foundation of the prophets and apostles.”\n\nThe fact he lists the prophets second suggests that these are New Testament prophets—like Agabus, who we read about in the book of Acts 11:27-28. These prophets had less authority than the apostles, and so the expression “apostles and prophets” represents a hierarchy.\n\nThis understanding is confirmed by the fact that Paul mentions prophets two other times in Ephesians.\n\nThe first is in chapter 3, verse 5, where Paul contrasts how the Christian message had not been disclosed in the Old Testament period with how:\n\nThe mystery of Christ . . . has now been revealed to his holy apostles and prophets by the Spirit (Ephesians 3:5).\n\nSo this is a reference to the New Testament prophets.\n\nThe second passage is in chapter 4, verse 11-12, where Paul says that:\n\n[Christ] gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ (Ephesians 4:11-12).\n\nSo here again, Paul is thinking of New Testament prophets.\n\nThus for several reasons, we should understand Paul as saying that—with Christ as its cornerstone—the Church is built on the foundation of the apostles and New Testament prophets.\n\nAnd note that this letter is written by the same St. Paul who wrote 1 Corinthians, which shows us that he was capable of using different metaphors on different occasions.\n\nIn 1 Corinthians, he portrays Jesus as the irreplaceable foundation of the local church, but here he portrays Jesus as the cornerstone of the Church with the foundation being completed by the apostles and New Testament prophets.",
                translation: "ai-assisted",
              },
              {
                speaker: "Trent Horn",
                work: 'Refuting Papal Myths - "The Papacy is Unbiblical and Unhistorical"',
                outlet: "Catholic Answers Magazine",
                date: "21 de septiembre de 2015",
                locator:
                  "12 párrafos: del párrafo que empieza «As Pope Francis travels through the United States during…» al que termina «…founded the Church in Rome and later died there.»",
                url: "https://www.catholic.com/magazine/online-edition/refuting-papal-myths-the-papacy-is-unbiblical-and-unhistorical",
                text: "Mientras el papa Francisco viaja por Estados Unidos durante su visita al Congreso Mundial de las Familias en Pensilvania, es de esperar que críticos de todo tipo lo denuncien a él y a su oficio. Por eso esta semana publicaremos una serie de artículos que refutan estos perniciosos mitos sobre el oficio del papado, así como sobre quienes lo han ocupado.\n\nMito #1 – El papado no se encuentra en la Biblia.\n\nEs cierto que la palabra papado no aparece en la Biblia, pero tampoco aparecen allí las palabras Trinidad o Biblia. Este argumento supone que toda doctrina cristiana está descrita explícitamente en la Biblia, aunque esta misma enseñanza no se encuentre en la Escritura. Los católicos creen, en cambio, que la revelación divina procede de la Palabra de Dios dada en forma escrita (la Sagrada Escritura) y en forma oral (la Sagrada Tradición), y ambas dan testimonio de la existencia del papado. Según la Escritura, Cristo fundó una Iglesia visible que nunca dejaría de existir y tenía autoridad para enseñar y disciplinar a los creyentes (ver Mt 16:18-19, 18:17). San Pablo nos dice que esta Iglesia es “columna y fundamento de la verdad” (1 Tm 3:15) y que fue edificada sobre “el fundamento de los apóstoles” (Ef 2:20). Pablo también nos dice que la Iglesia tendría una jerarquía compuesta por diáconos (1 Tm 2:8-13); presbíteros, de donde viene la palabra inglesa priest (1 Tm 5:17); y obispos (1 Tm 3:1-7).\n\nPablo incluso instruyó a uno de estos obispos, Tito, para que designara presbíteros en la isla de Creta (Tito 1:5). En el año 110 d. C., san Ignacio de Antioquía dijo a sus lectores:\n\n“Sigan al obispo, como Jesucristo sigue al Padre, y al presbiterio como a los apóstoles; y respeten a los diáconos, por ser institución de Dios. Que nadie haga nada relacionado con la Iglesia sin el obispo.” (Letter to the Smyrnaeans, 8)\n\nA diferencia de los apóstoles, la Iglesia de Cristo existiría para todas las edades, así que los apóstoles transmitieron a sus sucesores la autoridad para atar y desatar la doctrina (ver Mateo 18:18), perdonar pecados (ver Juan 20:23) y hablar en nombre de Cristo (ver Lucas 10:16). Hechos 1:20, por ejemplo, registra cómo, tras la muerte de Judas, Pedro proclamó que el oficio de Judas (en griego, su episcopado) sería transferido a un sucesor digno. En 1 Timoteo 5:22, Pablo advirtió a Timoteo que “no se apresure en la imposición de manos” al designar nuevos líderes en la iglesia.\n\nA finales del siglo I, Clemente de Roma, que según la antigua tradición fue ordenado por el propio Pedro, escribió:\n\n“Nuestros apóstoles supieron, por medio de nuestro Señor Jesucristo, que habría disputas por el oficio de obispo . . . [por eso hicieron preparativos para que] . . . si murieran, otros hombres aprobados sucedieran a su ministerio” (Letter to the Corinthians 44:1–3).\n\nAsí como la autoridad de los apóstoles pasó a sus sucesores, la autoridad de Pedro como líder de los apóstoles y roca sobre la que se edificó la Iglesia (Mt 16:18) pasó a su sucesor. Este hombre heredó las llaves del reino de los cielos (Mt 16:19) y el deber de Pedro de pastorear el rebaño de Cristo (ver Juan 21:15-17). El sucesor de Pedro es el pastor de la Iglesia de Cristo y un padre espiritual para los hijos del Señor (1 Cor. 4:15), lo que explica el título que con el tiempo recibió su oficio, papa, que viene de la palabra latina para padre.\n\nMito #2 – El obispo de Roma no tenía autoridad especial en la Iglesia primitiva. ¡Pedro ni siquiera estuvo nunca en Roma!\n\nTanto el Nuevo Testamento como los Padres de la Iglesia primitiva dan testimonio de que Pedro estuvo en Roma. Al final de su primera carta, Pedro dice que escribe desde “Babilonia” (5:13), que era un código habitual para Roma, porque ambos imperios fueron perseguidores implacables del pueblo de Dios (ver Apocalipsis 17-18; Oxford Dictionary of the Popes, 6).\n\nEn palabras del erudito protestante D.A. Carson, Pedro estuvo “en Roma alrededor del año 63 (la fecha probable de 1 Pedro). Eusebio sugiere que Pedro estuvo en Roma durante el reinado de Claudio, que murió en el 54 (H.E. 2.14.6)” (An Introduction to the New Testament, 180). Pedro quizá no siempre estuvo presente en Roma (lo que explicaría por qué Pablo no lo menciona en su carta a los Romanos), pero existe una tradición sólida según la cual Pedro fundó la Iglesia en Roma y luego murió allí.",
                original:
                  "As Pope Francis travels through the United States during his visit to the World Congress of Families in Pennsylvania, expect critics of all stripes to be denouncing him and his office. That’s why this week we will be publishing a series of posts that refute these pernicious myths about the office of the Papacy as well as those who have held that office.\n\nMyth #1 – The papacy is not found in the Bible.\n\nIt’s true the word papacy is not in the Bible, but neither are the words Trinity or Bible found there. This argument assumes that all Christian doctrine is explicitly described in the Bible, even though this teaching itself is not found in Scripture. Catholics believe, on the other hand, that divine revelation comes from God’s word given to us in written form (Sacred Scripture) and oral form (Sacred Tradition), both of which testify to the existence of the papacy. According to Scripture, Christ founded a visible Church that would never go out of existence and had authority to teach and discipline believers (see Matt. 16:18-19, 18:17). St. Paul tells us this Church is “the pillar and foundation of truth” (1 Tim. 3:15) and it was built on “the foundation of the apostles” (Eph. 2:20). Paul also tells us the Church would have a hierarchy composed of deacons (1 Tim. 2:8-13); presbyters, from where we get the English word priest (1 Tim. 5:17); and bishops (1 Tim. 3:1-7).\n\nPaul even instructed one of these bishops, Titus, to appoint priests on the island of Crete (Titus 1:5). In A.D. 110, St. Ignatius of Antioch told his readers,\n\n“Follow the bishop, even as Jesus Christ does the Father, and the presbytery as you would the apostles; and reverence the deacons, as being the institution of God. Let no man do anything connected with the Church without the bishop.” (Letter to the Smyrnaeans, 8)\n\nUnlike the apostles, Christ’s Church would exist for all ages, so the apostle’s passed on to their successors the authority to bind and loose doctrine (see Matt. 18:18), forgive sins (see John 20:23), and speak on behalf of Christ (see Luke 10:16). Acts 1:20, for example, records how after Judas’s death Peter proclaimed that Judas’s office (or, in Greek, his bishoporic) would be transferred to a worthy successor. In 1 Timothy 5:22, Paul warned Timothy to “not be hasty in the laying on of hands” when he appointed new leaders in the church.\n\nAt the end of the first century, Clement of Rome, who according to ancient tradition was ordained by Peter himself, wrote,\n\n“Our apostles knew through our Lord Jesus Christ that there would be strife for the office of bishop . . . [so they made preparations that] . . . if they should die, other approved men should succeed to their ministry” (Letter to the Corinthians 44:1–3).\n\nJust as the apostles’ authority was passed on their successors, Peter’s authority as the leader of the apostles and the rock on whom the Church was built (Matt 16:18) was passed on to his successor. This man inherited the keys to the kingdom of heaven (Matt. 16:19) and Peter’s duty to shepherd Christ’s flock (see John 21:15-17). Peter’s successor was the pastor of Christ’s church and a spiritual father to the Lord’s children (1 Cor. 4:15), thus explaining his offices future title pope, which comes from papa, the Latin word for father.\n\nMyth #2 – The Bishop of Rome had no special authority in the early Church. Peter was never even in Rome!\n\nBoth the New Testament and the early Church Fathers testify to Peter being in Rome. At the end of his first letter, Peter says he is writing from “Babylon” (5:13), which was a common code word for Rome, because both empires were lavish persecutors of God’s people (see Rev. 17-18; Oxford Dictionary of the Popes, 6).\n\nIn the words of Protestant scholar D.A. Carson, Peter was “in Rome about 63 (the probable date of 1 Peter). Eusebius implies that Peter was in Rome during the reign of Claudius, who died in 54 (H.E. 2.14.6)” (An Introduction to the New Testament, 180). Peter may not have always been present in Rome (which would explain why Paul does not address him in his epistle to the Romans), but there is a solid tradition that Peter founded the Church in Rome and later died there.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.16.23", "John.13.38", "Luke.5.8"],
      text: "Pedro es reprendido («¡Escándalo eres par[a] mí!», como imprime la página) y niega tres veces. Juan Pablo II escribe: «Es precisamente como si, desde la debilidad humana de Pedro, se manifestara de un modo pleno que su ministerio particular en la Iglesia procede totalmente de la gracia» {c:UUS91|Ut unum sint 91}.",
      apologists: {
        arguments: [
          {
            title:
              "Los fallos de Pedro no anulan su oficio: es roca y piedra de tropiezo a la vez; Dios perfecciona a los llamados (Heschmeyer, Horn); la negación y la restauración están unidas, pero el intercambio es más que una restauración (Broussard)",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "St. Peter: Rock or Stumbling-Stone?",
                outlet: "Catholic Answers Magazine",
                date: "21 de febrero de 2018",
                locator:
                  "10 párrafos: del párrafo que empieza «He then turns to Peter and says, “Simon, Simon,…» al que termina «…and one of you is a devil?” (John 6:70).»",
                url: "https://www.catholic.com/magazine/online-edition/st-peter-rock-or-stumbling-stone",
                text: "Luego se vuelve a Pedro y le dice: “Simón, Simón, mira que Satanás ha pedido tener a ustedes [plural], para zarandearlos [plural] como al trigo, pero yo he rogado por ti [singular] para que tu fe no falle; y cuando te hayas vuelto, fortalece a tus hermanos” (22:31-32). Como en inglés no tenemos palabras para distinguir la segunda persona del singular de la del plural, perdemos un cambio importante. Jesús está diciendo que Satanás ha pedido tener a los doce, para zarandearlos a todos como al trigo. Y la respuesta de Jesús no es orar por los doce, sino por uno de ellos, Pedro, para que su fe no falle, y luego encomendarle la tarea de fortalecer a sus hermanos. Por sí solos, estos dos versículos serían un argumento impresionante a favor del papado. Jesús encomienda explícitamente a Pedro el cuidado de los otros apóstoles de una manera única. Pero es aún más llamativo en el contexto más amplio de Lucas 22. Inmediatamente después de decir que el verdadero liderazgo es servicio, y de llamar a los apóstoles a servir, Jesús encomienda a Pedro la tarea de servir incluso a los otros apóstoles.\n\nPero en cuanto parece que las cosas van bien para Pedro, se derrumban otra vez. (Es un tema recurrente. Por ejemplo, Pedro es quien tuvo fe suficiente para caminar sobre el agua... hasta que dejó de tenerla). Inmediatamente después de que Jesús le encomienda el cuidado de los apóstoles, Pedro responde diciendo: “Señor, estoy listo para ir contigo a la cárcel y a la muerte”, lo que lleva a Jesús a decir: “Te digo, Pedro, que el gallo no cantará hoy antes de que tres veces niegues que me conoces” (22:33-34). Esto pone de manifiesto la dimensión paradójica del mandato de Jesús, “cuando te hayas vuelto, fortalece a tus hermanos”: Jesús está confiando el cuidado de la Iglesia a un hombre que sabe que está a punto de caer.\n\nEsto también está presente en Mateo 16, en el pasaje mucho más famoso sobre el papado. Pedro confiesa la verdadera identidad de Cristo, diciendo: “Tú eres el Cristo, el Hijo del Dios viviente” (v.16). Jesús responde:\n\n“¡Bienaventurado eres, Simón Bar-Jona! Porque no te lo reveló carne ni sangre, sino mi Padre que está en los cielos. Y yo te digo que tú eres Pedro [Petros], y sobre esta roca [petra] edificaré mi iglesia, y los poderes de la muerte no prevalecerán contra ella. Te daré las llaves del reino de los cielos, y todo lo que ates en la tierra será atado en los cielos, y todo lo que desates en la tierra será desatado en los cielos” (vv.17-19).\n\nSe ha derramado mucha tinta sobre la pregunta de quién o qué es la roca sobre la que Jesús edificará su Iglesia. Una respuesta parece venir en Juan 1:42, donde aprendemos que el nombre original que Jesús le da a Pedro no es el griego Petros sino el arameo Cefas, un nombre que simplemente significa “Roca”. Pero de nuevo, este punto alto para Pedro es inmediatamente seguido por una caída, y así vemos en los versículos siguientes a Pedro tratando de impedir que Jesús muera (v.22), lo que lleva a Jesús a decir: “¡Apártate de mí, Satanás! Me eres un obstáculo [skandalon], porque no estás de parte de Dios sino de los hombres.”\n\nEs aquí, de todos los lugares, donde encontramos una respuesta irónica a la pregunta de quién es la roca, porque un skandalon es una “piedra de tropiezo”. Dicho de otra manera, Pedro es a la vez la roca sobre la que se edifica la Iglesia (por su fe) y una piedra escandalosa de tropiezo (por sus fallas).\n\nEn palabras del P. Joseph Ratzinger, el futuro papa Benedicto XVI: “¿No ha permanecido así a lo largo de toda la historia de la Iglesia, que el papa, el sucesor de Pedro, ha sido petra y skandalon, roca de Dios y piedra de tropiezo a la vez?”[1] Lo que fue cierto de Pedro no lo ha sido menos de sus sucesores.\n\nEl reformador protestante Juan Calvino se burló de las apelaciones católicas a la autoridad papal en Lucas 22, diciendo:\n\nEsto es demasiado infantil en sí mismo como para necesitar respuesta: si insisten en aplicar a los sucesores de Pedro todo lo que se dijo a Pedro, se seguirá que todos son Satanases, porque nuestro Señor una vez le dijo a Pedro: “¡Quítate de delante de mí, Satanás, me eres un tropiezo!”. Nos resulta tan fácil devolver esta última frase como a ellos aducir la primera.[2]\n\nLo que Calvino pasó por alto es que esto es precisamente el punto. El papado no es la roca porque los papas sean tan santos o brillantes. En varias ocasiones de la historia, el papado ha perdurado aparentemente a pesar del papa. Podríamos querer un papado en el que cada papa fuera sin pecado, o al menos un futuro santo. Pero el papado fue fundado por Jesús, quien dijo una vez de sus apóstoles escogidos: “¿No os escogí yo a vosotros, los doce, y uno de vosotros es un diablo?” (Juan 6:70).",
                original:
                  "He then turns to Peter and says, “Simon, Simon, behold, Satan demanded to have you [plural], that he might sift you [plural] like wheat, but I have prayed for you [singular] that your faith may not fail; and when you have turned again, strengthen your brethren” (22:31-32), Since in English we don’t have words to distinguish the second-person singular from the second-person plural, we miss an important switch. Jesus is saying that Satan has demanded to have all twelve of them, to sift them all like wheat. And Jesus’ response to this isn’t to pray for all twelve of them but to pray for one of them, Peter, that his faith might not fail, and then to entrust him with the task of strengthening his brethren. By themselves, these two verses would be an impressive case for the papacy. Jesus explicitly entrusts Peter with the care of the other apostles in a unique way. But it’s yet more striking in the broader context of Luke 22. Immediately after saying that true leadership is service, and calling upon the apostles to serve, Jesus entrusts Peter with the task of serving even the other apostles.\n\nBut the moment it looks like things are going well for Peter, they come crashing down again. (This is a common theme. For example, Peter is the one whose faith was strong enough to let him walk on water . . . until it wasn’t.) Immediately after Jesus entrusts the care of the apostles to him, Peter responds by saying “Lord, I am ready to go with you to prison and to death,” leading Jesus to say, “I tell you, Peter, the cock will not crow this day, until you three times deny that you know me” (22:33-34). This brings out the paradoxical dimension of Jesus’ command, “when you have turned again, strengthen your brethren”: Jesus is entrusting the care of the Church to a man whom he knows is about to fall.\n\nThis is also present in Matthew 16, in the much more famous passage about the papacy. Peter confesses the true identity of Christ, saying, “You are the Christ, the Son of the living God” (v.16). Jesus responds,\n\n“Blessed are you, Simon Bar-Jona! For flesh and blood has not revealed this to you, but my Father who is in heaven. And I tell you, you are Peter [Petros], and on this rock [petra] I will build my church, and the powers of death shall not prevail against it. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven” (vv.17-19).\n\nMuch ink has been spilled over the question of who or what is the rock upon which Jesus will build his Church. An answer to this seems to come in John 1:42, in which we learn that the original name that Jesus gives Peter isn’t the Greek Petros but the Aramaic Cephas, a name that simply means “Rock.” But again, this high point for Peter is immediately followed by a fall, and so we see in the next few verses Peter trying to keep Jesus from dying (v.22), leading Jesus to say “Get behind me, Satan! You are a hindrance [skandalon] to me; for you are not on the side of God but of men.”\n\nIt’s here of all places that we get an ironic answer to the question of who the rock is, because a skandalon is a “stumbling stone.” In other words, Peter is simultaneously the rock upon which the Church is built (through his faith) and a scandalizing stumbling stone (through his failings).\n\nIn the words of Fr. Joseph Ratzinger, the future Pope Benedict XVI, “Has it not remained this way throughout all Church history, that the pope, the successor of Peter, has been petra and skandalon, rock of God and stumbling stone all in one?”[1] What was true of Peter has been no less true of his successors.\n\nThe Protestant Reformer John Calvin laughed off Catholic appeals to papal authority in Luke 22 by saying\n\nthe thing is too childish in itself to need an answer: for if they insist on applying everything that was said to Peter to the successors of Peter, it will follow, that they are all Satans, because our Lord once said to Peter, “Get thee behind me, Satan, thou art an offence unto me.” It is as easy for us to retort the latter saying as for them to adduce the former.[2]\n\nWhat Calvin missed is that this is the whole point. The papacy isn’t the rock because the popes happen to be so holy or brilliant. Several times in history, the papacy has endured seemingly despite the pope. We might want a papacy in which every pope is sinless, or at least a future saint. But the papacy was founded by Jesus, who once said of his hand-picked apostles, “Did I not choose you, the twelve, and one of you is a devil?” (John 6:70).",
                translation: "ai-assisted",
              },
              {
                speaker: "Trent Horn",
                work: 'Refuting Papal Myths — "Peter Was Not a Pope"',
                outlet: "Catholic Answers Magazine",
                date: "22 de septiembre de 2015",
                locator:
                  "7 párrafos: del párrafo que empieza «The doctrine of papal infallibility teaches that the pope…» al que termina «…of Catholic Answers Magazine, available for digital download here.»",
                url: "https://www.catholic.com/magazine/online-edition/refuting-papal-myths-peter-was-not-a-pope",
                text: "La doctrina de la infalibilidad papal enseña que el papa tiene una gracia especial de Cristo que lo protege de llevar a la Iglesia al error. Esa gracia no le impedirá pecar (incluso gravemente), ni le dará la respuesta correcta a cada cuestión que enfrenta la Iglesia. Más bien, lo protegerá de llevar oficialmente a la Iglesia a la herejía. Como teólogo privado, el papa podría especular, incluso equivocadamente, sobre la fe, pero nunca emitirá una enseñanza falsa relacionada con la fe o la moral que pretenda ser vinculante e infalible (o una enseñanza errónea ex cathedra).\n\n¿Pero por qué creer que el papa es infalible? Mateo 16:18 dice que los “poderes de la muerte” (en otras traducciones, “las puertas del infierno”) no prevalecerán nunca contra la Iglesia, así que tiene sentido que el pastor de la Iglesia de Cristo nunca la lleve al infierno enseñando herejía. Lucas 22:31-32 registra a Jesús diciéndole a Pedro: “Satanás ha pedido zarandearlos a todos como al trigo, pero yo he rogado por ti para que tu fe no falle; y cuando te hayas vuelto, fortalece a tus hermanos.” El texto griego original muestra que Satanás pidió zarandear “a todos ustedes”, es decir, a todos los apóstoles, pero Jesús oró solo por Pedro, para que su fe no fallara.\n\nAhora bien, es cierto que Cristo llamó alguna vez a Pedro “Satanás” por intentar detener la crucifixión (Mt. 16:23), y sabía que más tarde lo negaría en su juicio. Pero Dios no llama a los perfectos: perfecciona a los llamados. Cristo oró para que, una vez que Pedro se “hubiera vuelto” de sus pecados, guiara y fortaleciera a los apóstoles. Después de su Resurrección, Jesús incluso se apareció primero a Pedro (1 Cor. 15:5).\n\nLa mayoría de los protestantes tendría que admitir que Pedro era infalible cuando escribió 1 y 2 Pedro, o al menos que esas epístolas no tienen errores. Los católicos simplemente llevan este razonamiento a su conclusión lógica: Pedro nunca llevó a la Iglesia al error, ni tampoco ninguno de sus sucesores. Algunos sostienen que Pedro era falible porque san Pablo se le opuso en Antioquía y dijo que Pedro estaba equivocado o que “se había hecho digno de condena” (Gál. 2:11-14). Pero en esa situación Pedro, a lo sumo, cometió un error de conducta, no de enseñanza.\n\nPedro temía la hostilidad de los cristianos que pensaban que la circuncisión era necesaria para la salvación. Así que, mientras estaba en su presencia, Pedro se negó a comer con los no circuncidados. Pablo criticó a Pedro por hacer esto, pero el mismo Pablo se acomodó a este mismo grupo cuando hizo circuncidar a su discípulo Timoteo. Pablo lo hizo para facilitar la predicación a los judíos (Hechos 16:1-3), pero en Gálatas 5:2 llamó a la circuncisión un pecado grave. Por tanto, si ceder prudencialmente a los críticos no invalida la autoridad de san Pablo, tampoco invalida la de san Pedro.\n\nNadie niega que algunos papas hayan cometido pecados graves, pero la infalibilidad significa solo que el papa no enseñará error, no que vaya a ser sin pecado. De hecho, algunos Padres de la Iglesia, como san Cipriano de Cartago, criticaron las decisiones de los papas; pero incluso Cipriano creía que el papa no podía llevar a la Iglesia por mal camino. Escribe en el año 256 d. C. sobre herejes que se atreven a acercarse “a la cátedra de Pedro... a la que la infidelidad no podía tener acceso” (Epístola 54.14), o, como dicen otras traducciones, “de la que ningún error puede manar”.\n\nEste texto está extraído del artículo de Trent Horn “Defending the Papacy”. El artículo completo puede encontrarse en el número de este mes de Catholic Answers Magazine, disponible para descarga digital aquí.",
                original:
                  "The doctrine of papal infallibility teaches that the pope has a special grace from Christ that protects him from leading the Church into error. That grace won’t keep him from sinning (even gravely), nor will it give him the right answer to every issue facing the Church. Instead, it will protect the pope from officially leading the Church into heresy. As a private theologian, the pope might speculate, even incorrectly, about the Faith, but he will never issue a false teaching related to faith or morality that claims to be binding and infallible (or an erroneous ex cathedra teaching).\n\nBut why believe the pope is infallible? Matthew 16:18 says the “powers of death” (in other translations “the gates of hell”) will never prevail against the Church, so it makes sense that the pastor of Christ’s Church will never steer it into hell by teaching heresy. Luke 22:31-32 records Jesus telling Peter, “Satan has demanded to sift you all like wheat, but I have prayed for you that your faith may not fail; and when you have turned again, strengthen your brethren.” The original Greek in the passage shows that Satan demanded to sift “you all,” or all the apostles, but Jesus prayed only for Peter and his faith not to fail.\n\nNow, it’s true that Christ once called Peter “Satan” for trying to stop the crucifixion (Matt. 16:23), and he knew Peter would later deny him at his trial. But God doesn’t call the perfect—he perfects the called. Christ prayed that once Peter had “turned again” from his sins, he would lead and strengthen the apostles. After his Resurrection, Jesus even appeared to Peter first (1 Cor. 15:5).\n\nMost Protestants would have to admit that Peter was infallible when he wrote 1 and 2 Peter, or at least that those epistles have no errors. Catholics simply take this reasoning to the logical conclusion that Peter never led the Church into error, nor did any of his successors. Some argue that Peter was fallible because St. Paul opposed him in Antioch and said Peter was wrong or “stood condemned” (Gal. 2:11-14). But in this situation Peter, at most, made an error in behavior, not teaching.\n\nPeter feared antagonism from Christians who thought circumcision was necessary for salvation. So, while he was in their presence, Peter declined to eat with the uncircumcised. Paul criticized Peter for doing this, but Paul himself accommodated this same group when he had his disciple Timothy circumcised. Paul did this to make it easier to preach to the Jews (Acts 16:1-3), but Paul called circumcision a grave sin in Galatians 5:2. Therefore, if prudentially yielding to critics doesn’t invalidate St. Paul’s authority, then neither does it invalidate St. Peter’s.\n\nNo one denies that some popes engaged in serous sins, but infallibility means only that the pope won’t teach error, not that he will be sinless. Indeed, some Church Fathers, such as St. Cyprian of Carthage, criticized the pope’s decisions; but even Cyprian believed the pope could not lead the Church astray. He writes in A.D. 256 of heretics who dare approach “the throne of Peter . . . to whom faithlessness could have no access” (Epistle 54.14), or, as other translations put it, “from whom no error can flow.”\n\nThis post excerpted from Trent Horn’s article “Defending the Papacy.” The full article can be found in this month’s issue of Catholic Answers Magazine, available for digital download here.",
                translation: "ai-assisted",
              },
              {
                speaker: "Karlo Broussard",
                work: "Protestant Comebacks When Catholics Say Peter Is Pope",
                outlet: "Catholic Answers Magazine",
                date: "29 de noviembre de 2022",
                locator:
                  "8 párrafos: del párrafo que empieza «Catholics have no problem with identifying the connection between…» al que termina «…to the shepherd’s activities of feeding or tending (43).»",
                url: "https://www.catholic.com/magazine/online-edition/protestant-comebacks-when-catholics-say-peter-is-pope",
                text: "Los católicos no tienen problema en identificar la conexión entre la triple negación de Pedro y su triple restauración. Es muy dudoso que algún especialista del Nuevo Testamento lo discuta. El problema es reducir el intercambio solo a la restauración de Pedro.\n\nUno de los motivos es que Pedro, como mencionamos antes, no fue el único apóstol que abandonó a Cristo. En la Última Cena, Jesús advirtió a todos los apóstoles que lo abandonarían, y Mateo 26:56 nos dice que así lo hicieron.\n\nDado que todos los apóstoles abandonaron a Cristo de alguna manera, tiene que haber algo más en el intercambio entre Jesús y Pedro en Juan 21:15-17. Ese algo más es aquello a lo que Pedro está siendo restaurado: un papel de liderazgo único para apacentar los corderos de Jesús y pastorear sus ovejas, incluidos los otros apóstoles. Los Evangelios revelan que Jesús ya le había dado a Pedro una posición única entre los apóstoles, y ahora, tras su caída, Pedro está siendo reafirmado en esa posición, no simplemente devuelto “a su mismo nivel”. Como escribe el especialista Bradford Blaine Jr.:\n\nAunque las tres profesiones de amor sí le permiten mitigar parte del daño de las tres negaciones, funcionan principalmente como garantías de las tres responsabilidades pastorales que recibe: apacentar corderos, pastorear ovejas y apacentar ovejas. Concuerdo con [el biblista protestante Herman Ridderbos] en que “Jesús no ha buscado tanto la triple retractación de Pedro de su negación... sino que lo que le aguarda a Pedro en el futuro es lo que lo impulsa a reforzar sus lazos con él como nunca antes” (170).\n\nLa presencia de los otros discípulos centrales cuando Jesús da este mandato subraya la singularidad del papel de Pedro como pastor. Significa que ellos están incluidos entre las ovejas de Jesús que Pedro ha de pastorear.\n\nOtra razón por la que esta lectura restrictiva de la restauración es problemática es sencillamente que la restauración no está realmente conectada con el pastoreo. La triple expresión de amor de Pedro por Jesús habría producido su restauración sin que se le confiaran después deberes pastorales. Estos deberes implican gobierno y liderazgo, que el motivo de la restauración no requiere.\n\nLa palabra griega aquí para “cuidar” (poimainō, v.16) sugiere la dimensión de gobierno del pastoreo de Pedro. Poimainō se usa tres veces en el libro de Apocalipsis para referirse a Cristo gobernando con vara de hierro como rey mesiánico (Ap. 2:27, 12:5, 19:15). El teólogo ortodoxo Veselin Kesich dice esto sobre poimainō:\n\nEl verbo poimainein transmite más que boskein. En sentido figurado, poimainein apunta a los deberes y responsabilidades de los líderes de la Iglesia: proteger, gobernar, conducir y cuidar a las personas a su cargo. Boskein, en cambio, apunta a las actividades del pastor de alimentar o cuidar (43).",
                original:
                  "Catholics have no problem with identifying the connection between Peter’s threefold denial and his threefold restoration. It’s highly doubtful that any New Testament scholar would dispute that. The problem is restricting the exchange merely to Peter’s restoration.\n\nOne reason is that Peter, as we mentioned above, wasn’t the only apostle to abandon Christ. At the Last Supper, Jesus warned all the apostles that they would desert him, and Matthew 26:56 tells us that they did.\n\nGiven that all the apostles abandoned Christ in some way, there must be something more to the exchange between Jesus and Peter in John 21:15-17. That something more is what Peter is being restored to: a unique role of leadership to feed Jesus’ lambs and shepherd his sheep, including the other apostles. The Gospels reveal that Jesus had already given Peter a unique position among the apostles, and now, following his lapse, Peter is being reconfirmed in that position—not merely being brought “back up to their level.” As the scholar Bradford Blaine Jr. writes,\n\nAlthough the three professions of love do allow him to mitigate some of the damage of the three denials, they function primarily as warrants for the three pastoral responsibilities he receives: feeding lambs, tending sheep, and feeding sheep. I concur with [the Protestant biblical scholar Herman Ridderbos] that “Jesus has sought not so much Peter’s triple retraction of his denial . . . it is rather what awaits Peter in the future that prompts Jesus to reinforce his ties with him as never before” (170).\n\nThe presence of the other core disciples when Jesus gives this command underscores the uniqueness of Peter’s role as shepherd. It means that they are included among Jesus’ sheep whom Peter is to pastor.\n\nAnother reason why this comeback’s restrictive view is problematic is simply that restoration isn’t really connected with shepherding. Peter’s threefold expression of love for Jesus would have effected his restoration without his being then invested with shepherding duties. These duties involve governance and leadership, which the motif of restoration does not require.\n\nThe Greek word here for “tend” (poimainō—v.16) suggests the ruling dimension of Peter’s shepherding. Poimainō is used three times in the book of Revelation to refer to Christ ruling with an iron rod as the messianic king (Rev. 2:27, 12:5, 19:15). The Orthodox theologian Veselin Kesich has this to say about poimainō:\n\nThe verb poimainein conveys more than boskein. In a figurative sense, poimainein points to the duties and responsibilities of church leaders—protecting, governing, leading, and caring for the people under their charge. Boskein, on the other hand, points to the shepherd’s activities of feeding or tending (43).",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Luke.22.26-Luke.22.27", "Matt.20.25"],
      text: "«Yo estoy en medio de vosotros como el que sirve»: Juan Pablo II cita estas palabras para decir que la potestad, «y en particular el primado», no puede separarse del ministerio; por eso su ministerio es el del «servus servorum Dei», siervo de los siervos de Dios {c:UUS88,UUS94|Ut unum sint 88; cf. 94}.",
      apologists: {
        arguments: [
          {
            title:
              "La autoridad en la Iglesia es servicio (Heschmeyer, Lucas 22:26); Horn y Broussard añaden que los papas se llaman a sí mismos «siervo de los siervos de Dios» (la oración citada por Heschmeyer no menciona al papa; Mateo 20:25 no aparece en ninguna cita)",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "The Papacy in the Early Church",
                outlet: "Catholic Answers Magazine",
                date: "23 de octubre de 2019",
                locator:
                  "2 párrafos: del párrafo que empieza «At the Last Supper, contrasting the authority of the…» al que termina «…Benedict and Francis—have consistently exercised, even if sometimes imperfectly.»",
                url: "https://www.catholic.com/magazine/print-edition/the-papacy-in-the-early-church",
                text: "En la Última Cena, contrastando la autoridad de los gentiles con la autoridad dentro de la Iglesia, Cristo dijo: “Que el mayor entre ustedes sea como el más joven, y el que dirige, como el que sirve” (Lucas 22:26). Luego, volviéndose a Pedro, dijo: “Simón, Simón, mira que Satanás os ha pedido [plural] para zarandearos [plural] como a trigo; pero yo he rogado por ti [singular] para que tu [singular] fe no falle; y tú [singular], cuando hayas vuelto, fortalece a tus hermanos” (Lucas 22:31-32).\n\nLa estructura que Cristo creó fue una en la que, frente al deseo de Satanás de destruir a todos los apóstoles y a toda la Iglesia, Jesús sostuvo espiritualmente a un solo hombre, a quien luego se encomendó fortalecer a los demás. Esto es exactamente lo que Jesús acaba de describir como “autoridad” dentro de la Iglesia (cf. Lucas 22:25-26). Es una autoridad que los sucesores de Pedro, desde Lino y Cleto hasta Benedicto y Francisco, han ejercido de manera constante, aunque a veces de forma imperfecta.",
                original:
                  "At the Last Supper, contrasting the authority of the Gentiles with authority within the Church, Christ said, “Let the greatest among you become as the youngest, and the leader as one who serves” (Luke 22:26). Turning to Peter, he then said, “Simon, Simon, behold, Satan demanded to have you [plural], that he might sift you [plural] like wheat, but I have prayed for you [singular] that your [singular] faith may not fail; and when you [singular] have turned again, strengthen your brethren” (Luke 22:31-32).\n\nThe structure Christ created was one in which, in response to Satan’s desire to destroy all of the apostles and the whole Church, Jesus spiritually supported one man who was then tasked with strengthening the others. This is exactly what Jesus just described as “authority” within the Church (cf. Luke 22:25-26). It’s an authority that Peter’s successors—from Linus and Cletus down to Benedict and Francis—have consistently exercised, even if sometimes imperfectly.",
                translation: "ai-assisted",
              },
              {
                speaker: "Trent Horn",
                work: 'Refuting Papal Myths - "The Papacy is Unbiblical and Unhistorical"',
                outlet: "Catholic Answers Magazine",
                date: "21 de septiembre de 2015",
                locator:
                  "10 párrafos: del párrafo que empieza «In the words of Protestant scholar D.A. Carson, Peter…» al que termina «…of Catholic Answers Magazine, available for digital download here.»",
                url: "https://www.catholic.com/magazine/online-edition/refuting-papal-myths-the-papacy-is-unbiblical-and-unhistorical",
                text: "En palabras del erudito protestante D.A. Carson, Pedro estuvo “en Roma alrededor del año 63 (la fecha probable de 1 Pedro). Eusebio sugiere que Pedro estuvo en Roma durante el reinado de Claudio, que murió en el 54 (H.E. 2.14.6)” (An Introduction to the New Testament, 180). Pedro quizá no siempre estuvo presente en Roma (lo que explicaría por qué Pablo no lo menciona en su carta a los Romanos), pero existe una tradición sólida según la cual Pedro fundó la Iglesia en Roma y luego murió allí.\n\nPor ejemplo, Pablo dice que la Iglesia de Roma fue fundada por “otro hombre” (Rom. 15:21), y san Ignacio de Antioquía dijo a los cristianos de Roma que no les daría órdenes como las que Pedro les había dado antes. A finales del siglo II, san Ireneo escribió: “Los bienaventurados apóstoles [Pedro y Pablo], tras fundar y edificar la iglesia [de Roma], entregaron el oficio del episcopado a Lino” (Against Heresies 3:3:3).\n\nUn sacerdote llamado Gayo, que vivió en tiempos de Ireneo, incluso le dijo a un hereje llamado Proclo que “los trofeos de los apóstoles” (es decir, sus restos) estaban sepultados en la colina Vaticana (Eusebio, Church History 2:25:5). De hecho, la evidencia arqueológica descubierta en el siglo XX reveló una tumba atribuida a Pedro bajo la basílica de San Pedro en Roma. Según el Oxford Dictionary of Saints, “es probable que la tumba sea auténtica. También es significativo que Roma sea la única ciudad que alguna vez reclamó ser el lugar de la muerte de Pedro” (353).\n\nEn cuanto a la autoridad del obispo de Roma como sucesor de Pedro: en el siglo I, Clemente de Roma (el cuarto papa) intervino en una disputa en la Iglesia de Corinto. Advirtió a quienes le desobedecieran que “se implicarían en transgresión y en no poco peligro”, demostrando así su autoridad sobre cristianos no romanos.\n\nSan Ignacio de Antioquía se refirió a la Iglesia de Roma como la que enseña a otras iglesias y “preside en el amor” sobre ellas. De hecho, los escritos del papa Clemente (92-99 d. C.) y del papa Sotero (167-174 d. C.) eran tan populares que se leían en la Iglesia junto con la Escritura (Eusebio, Church History 4:23:9).\n\nEn el año 190 d. C., el papa san Víctor I excomulgó a una región entera de iglesias por negarse a celebrar la Pascua en su fecha correcta. Aunque san Ireneo pensó que esto no era prudente, ni él ni nadie negó que Víctor tuviera autoridad para hacerlo. De hecho, Ireneo dijo: “es necesario que toda Iglesia concuerde con esta Iglesia [Roma] por su autoridad preeminente” (Against Heresies, 3.3.2).\n\nTen presente que toda esta evidencia es anterior en cien o doscientos años a la legalización del cristianismo en el Imperio romano, lo que desmiente la teoría fundamentalista de que el papado fue creado por el emperador romano en el siglo IV.\n\nAlgunos objetan que, si Pedro y sus sucesores tenían una autoridad especial, ¿por qué Cristo no lo dijo cuando los apóstoles discutían “quién era el más grande” (Lucas 22:24)? La razón es que Cristo no quería contribuir a que entendieran que uno de ellos sería un rey privilegiado. Sin embargo, Jesús sí dijo que entre los apóstoles habría un “más grande” que gobernaría como servidor humilde (Lucas 22:26). Por eso, desde el siglo VI los papas se llaman a sí mismos servus servorum Dei, o “siervo de los siervos de Dios”.\n\nEl papa Gregorio I usó el título en su disputa con el patriarca de Constantinopla Juan el Ayunador, que se llamaba a sí mismo “obispo universal”. Gregorio no negó que un obispo tuviera primacía sobre todos los demás, ya que en su duodécima epístola Gregorio dice explícitamente que Constantinopla estaba sujeta a la autoridad del papa. En cambio, negó que el papa fuera obispo de cada territorio particular, porque esto privaría a sus hermanos obispos de su legítima autoridad, aunque siguieran sujetos a él como sucesor de Pedro.\n\nEste texto es un extracto del artículo de Trent Horn “Defending the Papacy”. El artículo completo puede encontrarse en el número de este mes de Catholic Answers Magazine, disponible aquí para descarga digital.",
                original:
                  "In the words of Protestant scholar D.A. Carson, Peter was “in Rome about 63 (the probable date of 1 Peter). Eusebius implies that Peter was in Rome during the reign of Claudius, who died in 54 (H.E. 2.14.6)” (An Introduction to the New Testament, 180). Peter may not have always been present in Rome (which would explain why Paul does not address him in his epistle to the Romans), but there is a solid tradition that Peter founded the Church in Rome and later died there.\n\nFor example, Paul says the Roman Church was founded by “another man” (Rom. 15:21), and St. Ignatius of Antioch told the Christians in Rome he would not command them in the same way Peter had previously commanded them. At the end of the second century, St. Irenaeus wrote, “The blessed apostles [Peter and Paul], having founded and built up the church [of Rome], they handed over the office of the episcopate to Linus” (Against Heresies 3:3:3).\n\nA priest named Gaius who lived during Irenaeus’s time even told a heretic named Proclus that “the trophies of the apostles” (i.e., their remains) were buried at Vatican Hill (Eusebius, Church History 2:25:5). Indeed, archaeological evidence unearthed in the twentieth century revealed a tomb attributed to Peter underneath St. Peter’s basilica in Rome. According to the Oxford Dictionary of Saints, “it is probable that the tomb is authentic. It is also significant that Rome is the only city that ever claimed to be Peter’s place of death” (353).\n\nIn regard to the authority of the Bishop of Rome as Peter’s successor, in the first century Clement of Rome (the fourth pope) intervened in a dispute in the Church of Corinth. He warned those who disobeyed him that they would “involve themselves in transgression and in no small danger,” thus demonstrating his authority over non-Roman Christians.\n\nSt. Ignatius of Antioch referred to the Roman Church as the one that teaches other churches and “presides in love” over them. In fact, the writings of Pope Clement (A.D. 92-99) and Pope Soter (A.D. 167-174) were so popular that they were read in the Church alongside Scripture (Eusebius, Church History 4:23:9).\n\nIn A.D. 190, Pope St. Victor I excommunicated an entire region of churches for refusing to celebrate Easter on its proper date. While St. Irenaeus thought this was not prudent, neither he nor anyone else denied that Victor had the authority to do this. Indeed, Irenaeus said, “it is a matter of necessity that every Church should agree with this Church [Rome] on account of its preeminent authority” (Against Heresies, 3.3.2).\n\nKeep in mind that all of this evidence dates a hundred to two hundred years before Christianity was legalized in the Roman Empire, thus deflating the Fundamentalist theory that the papacy was created by the Roman emperor in the fourth century.\n\nSome people object that if Peter and his successors had special authority, why didn’t Christ say so when the apostles argued about “who was the greatest” (Luke 22:24)? The reason is that Christ did not want to contribute to their misunderstanding that one of them would be a privileged king. Jesus did say, however, that among the apostles there would be a “greatest” who would rule as a humble servant (Luke 22:26). That’s why since the sixth century popes have called themselves servus servorum Dei, or “servant of the servants of God.”\n\nPope Gregory I used the title in his dispute with the Patriarch of Constantinople John the Faster, who called himself the “Universal Bishop.” Gregory didn’t deny that one bishop had primacy over all the others,  since in his twelfth epistle Gregory explcitly says Constaninople was subject to the authority of the pope. Instead, he denied that the pope was the bishop of every individual territory, since this would rob his brother bishops of their legitimate authority, even though they were still subject to him as Peter’s successor.\n\nThis post excerpted from Trent Horn’s article “Defending the Papacy.” The full article can be found in this month’s issue of Catholic Answers Magazine, available for digital download here.",
                translation: "ai-assisted",
              },
              {
                speaker: "Karlo Broussard",
                work: "Six Keys to Christian Unity",
                outlet: "Catholic Answers Magazine",
                date: "20 de febrero de 2018",
                locator:
                  "7 párrafos: del párrafo que empieza «Recent popes show us practical ways to work so…» al que termina «…past have used to exercise their service of unity?»",
                url: "https://www.catholic.com/magazine/print-edition/six-keys-to-christian-unity",
                text: "Los papas recientes nos muestran maneras prácticas de trabajar para que todos los creyentes en Cristo puedan volver a adorar como él desea.\n\nEn su encíclica Ut Unum Sint, san Juan Pablo II reiteró la enseñanza del Concilio Vaticano II de que Dios ha establecido al obispo de Roma como “principio y fundamento perpetuo y visible de unidad” de la Iglesia (UUS 88, citando Lumen Gentium 23). Esta enseñanza tiene su origen en Mateo 16:18-19, donde Jesús hace de Pedro la roca fundacional de su Iglesia y le da las llaves del reino de los cielos.\n\nEl obispo de Roma no solo es el fundamento visible de unidad para el pueblo de Dios: también debe trabajar para lograr y mantener esa unidad. Recordemos que Jesús le dio a Pedro el mandato de “apacentar” y “pastorear” sus ovejas (Juan 21:15-17) y de fortalecer a los hermanos (Lucas 22:32). Por tanto, la labor de la unidad cristiana es una parte esencial del oficio del papa.\n\nVarias veces en su encíclica, san Juan Pablo II se refiere al ministerio papal como “ministerio de unidad” y llama al obispo de Roma “el primer servidor de la unidad”. El obispo de Roma “debe asegurar la comunión de todas las iglesias” (UUS 94). Pero ¿cómo debe hacerlo? Creo que podemos identificar seis claves prácticas que los papas de los últimos tiempos han utilizado en su labor ecuménica. Y, como veremos, ellos mismos nos las recomiendan.\n\nAntes de entrar en los detalles, hay dos enfoques ecuménicos generales que un papa podría adoptar. Podría llegar con un bate y empezar a golpear, ejerciendo su autoridad de manera autoritaria, acusando a los no católicos de herejía y obligándolos a quedarse descalzos en la nieve para reconciliarse con la Iglesia.\n\nSé que hay quienes quisieran ver al papa haciendo eso. Pero creo que el liderazgo de servicio es el enfoque mejor y más eficaz. Jesús también lo pensó. Él presenta este modelo en la Última Cena (ver Lucas 22:25-27). Dice a los apóstoles que no deben ejercer su autoridad sobre sus súbditos como hacen los gentiles. Para Jesús, el líder es quien sirve, así como él, el líder, sirvió. Los papas a lo largo de los siglos han preferido este enfoque también, y llaman a su ministerio el de servus servorum Dei: “siervo de los siervos de Dios”.\n\nEntonces, ¿cuáles son algunas claves prácticas que los papas de los últimos tiempos han usado para ejercer su servicio a la unidad?",
                original:
                  "Recent popes show us practical ways to work so that all believers in Christ might come again to worship as he desires.\n\nIn Pope St. John Paul II’s encyclical Ut Unum Sint, he reiterated the teaching of the Second Vatican Council that God has established the bishop of Rome as the Church’s “perpetual and visible principle and foundation of unity” (UUS 88, citing Lumen Gentium 23). This teaching has its origin in Matthew 16:18-19, where Jesus makes Peter the foundational rock of his Church and gives him the keys of the kingdom of heaven.\n\nThe bishop of Rome is not only the visible foundation of unity for God’s people, he must also work to bring about and maintain such unity. Recall that Jesus gave Peter the command to “feed” and “shepherd” his sheep (John 21:15-17) and to strengthen the brethren (Luke 22:32). The work of Christian unity is therefore an essential part of the pope’s job.\n\nSeveral times in his encyclical, St. John Paul refers to the papal ministry as the “ministry of unity” and calls the bishop of Rome “the first servant of unity.” The bishop of Rome “must ensure the communion of all the churches” (UUS 94). But how is he to go about doing this? I think we can identify six practical keys that the popes of recent past have utilized in their ecumenical work. And, as we’ll see, they recommend them for us as well.\n\nBefore we get into the particulars, there are two general ecumenical approaches a pope could take. He could come in with a bat and start swinging, exercising his authority in an authoritarian way, accusing non-Catholics of heresy and making them stand barefoot in the snow to be reconciled with the Church.\n\nI realize there are some who would like to see the pope do this. But I think servant leadership is the better and more effective approach. Jesus thought so too. He lays out this model at the Last Supper (see Luke 22:25-27). Jesus tells the apostles they are not to lord their authority over their subjects as the Gentiles do. For Jesus, the leader is the one who serves, just as he, the leader, served. Popes down through the ages have preferred this approach as well, referring to their ministry as that of servus servorum Dei—“servant of the servants of God.”\n\nSo, what are some practical keys the popes in recent past have used to exercise their service of unity?",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.17.21"],
      text: "«Para que todos sean una cosa»: el Vaticano I abre con esta oración de Cristo, y Juan Pablo II la propone como horizonte del diálogo sobre el primado {c:UUS96|Ut unum sint 96}.",
      apologists: {
        arguments: [
          {
            title:
              "La unidad de los cristianos pertenece a la misión de Cristo y, por lo tanto, a la del papa (Broussard)",
            quotes: [
              {
                speaker: "Karlo Broussard",
                work: "Six Keys to Christian Unity",
                outlet: "Catholic Answers Magazine",
                date: "20 de febrero de 2018",
                locator:
                  "3 párrafos: del párrafo que empieza «Finally, but not least, we must recognize other Christians…» al que termina «…Jesus’ prayer “that they may be one” (John 17:21).»",
                url: "https://www.catholic.com/magazine/print-edition/six-keys-to-christian-unity",
                text: "Por último, pero no menos importante, debemos reconocer a los demás cristianos por lo que son: hermanos y hermanas, y no extraños ni enemigos. En Ut Unum Sint, el papa san Juan Pablo II vio en este reconocimiento de la fraternidad entre cristianos uno de los muchos frutos del movimiento ecuménico de los últimos treinta años.\n\nLa unidad cristiana es algo que no puede ignorarse. Pertenece al corazón de la misión de Cristo (Juan 17:21) y, por tanto, debe pertenecer a la misión del papa. Pero, como nos recuerda el papa san Juan Pablo II, es una misión que corresponde a todos los cristianos: “El Espíritu de Dios pide a todos los fieles que hagan todo lo posible para fortalecer los vínculos de comunión entre todos los cristianos… la preocupación por restaurar la unidad compete a toda la Iglesia, a los fieles y al clero por igual” (UUS, 101).\n\nLa unidad cristiana no es solo obra del papa. También es tarea nuestra. Con estas claves prácticas como guía, pongámonos a trabajar y hagamos nuestra la oración de Jesús “para que sean uno” (Juan 17:21).",
                original:
                  "Finally, but not least, we must recognize other Christians as what they are: brothers and sisters, and not strangers or enemies. In Ut Unum Sint, Pope St. John Paul II saw this recognition of brotherhood among Christians as one of the many fruits of the ecumenical movement over the past thirty years.\n\nChristian unity is something that cannot be ignored. It belongs to the heart of Christ’s mission (John 17:21) and therefore must belong to the pope’s mission. But, as Pope St. John Paul II reminds us, it’s a mission that belongs to all Christians: “All the faithful are asked by the Spirit of God to do everything possible to strengthen the bonds of communion between all Christians…concern for restoring unity pertains to the whole Church, faithful and clergy alike” (UUS, 101).\n\nChristian unity is not only the work of the pope. It’s our job too. With these practical keys as our guide, let’s get to work and make our own Jesus’ prayer “that they may be one” (John 17:21).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Heschmeyer, que dice «obviamente estoy parafraseando» Juan 17:20–23, afirma que Jesús pide a las generaciones futuras que permanezcan unidas (lo usa allí contra la Sola Scriptura)",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Why I Don't Believe in Sola Scriptura",
                outlet: "Shameless Popery",
                date: "9 de febrero de 2023",
                locator:
                  "5 párrafos: del párrafo que empieza «I’ll give you two examples. First in Isaiah 66.…» al que termina «…and there to have a spiritual account for us.»",
                url: "https://www.catholic.com/audio/sp/why-i-dont-believe-in-sola-scriptura",
                text: "Te doy dos ejemplos. Primero, en Isaías 66. En Isaías 66, en una época en que el pueblo de Dios sigue siendo el pueblo judío, Israel, hay una profecía de que Dios vendrá, reunirá a todas las naciones y lenguas, y las traerá tal como lo hizo con los israelitas. Esta incorporación de los gentiles no se cumplió en vida de Isaías, pero Isaías profetizó que llegaría el día en que sí se cumpliría. Bueno, de manera parecida, los apóstoles fácilmente podrían haber profetizado la sola Escritura: todavía no es verdad, pero lo será cuando muramos, o será verdad en el año 325, o cuando sea, o en 1517; esto se convertiría en una nueva enseñanza, ahora obligatoria. Podrían haber hecho cualquiera de esas cosas. No lo hicieron. Y en cambio, la sola Escritura se convierte en una revelación poscristiana nueva, que es exactamente lo que pretende impedir, ¿no?\n\nRecuerden que la Confesión de Westminster trata precisamente de que no se quiere ninguna revelación posterior. Pero, como no se enseña en la Biblia, se convierte en una revelación poscapostólica. Surge un dogma nuevo, una enseñanza nueva que apareció de algún lado, no sabemos de dónde; no podemos darte ninguna cita bíblica ni decirte cuándo, y que ahora es la piedra angular del protestantismo. Eso es un problema grave. Así que, lo otro: dije que hablaría de cosas del futuro, y que vemos muchas cosas en el Antiguo Testamento que son predictivas de cosas del Nuevo Testamento. También vemos cosas en el Nuevo Testamento. En Juan 17, en la Última Cena, Jesús dice a las generaciones futuras, a quienes creen en él por la enseñanza de los apóstoles, que permanezcan unidos como él y el Padre son uno. Así que advierte contra el cisma y el denominacionalismo en las generaciones futuras.\n\nAsí que no le dice a los reformadores del futuro: deben seguir la sola Escritura. Les dice: no se separen ni formen sus propias iglesias. Eso es Juan 17:20-23. Ahora bien, obviamente estoy parafraseando: no dice “queridos reformadores”, pero sí dice a las generaciones futuras que permanezcan unidas. Así que Jesús y los apóstoles son perfectamente capaces de hablar a generaciones futuras, y tenemos ejemplos claros en los que lo hacen; y sin embargo no dicen a esas generaciones que sigan la sola Escritura, sino que no caigan en el cisma y permanezcan unidas. Bien, esa es la postura a favor de la sola Escritura basada en la Biblia, tal como yo la entiendo, y la razón por la que no creo en ella. El otro lado de la moneda: ¿hay versículos que la refuten? Te voy a dar algunos. Sé que este episodio es más largo de lo habitual.\n\nYa mencioné uno, 2 Tesalonicenses 2, donde san Pablo dice que se mantengan firmes y se aferren a las tradiciones que les enseñamos, de palabra o por carta. También señalé que en 1 Corintios 11:2 le dice a los corintios: “Os alabo porque en todo me recordáis y mantenéis las tradiciones tal como os las he transmitido.” Pablo les transmitió tradiciones que aparentemente no estaban en forma escrita, y debían ser mantenidas, debían ser obligatorias. Y luego Judas 1:3 no se refiere a la revelación como algo continuo, ni como un libro y después otro y otro, sino que la llama la fe que fue transmitida una vez para siempre a los santos. Así que la plenitud de la revelación se da en Jesucristo y se atestigua de una vez para siempre.\n\nAsí que la oímos atestiguada por partes, pero la revelación plena se da en Cristo, y no se da en forma escrita. La revelación plena se da en la persona de Jesús. Se atestigua tanto en forma escrita como no escrita. Jesús también envía a los setenta y dos, probablemente; no está del todo claro en el contexto a quién le hablaba, pero probablemente sea a los setenta y dos. Y les dice en Lucas 10:16: “El que os oye, me oye a mí. El que os rechaza, me rechaza a mí. Y el que me rechaza, rechaza al que me envió.” Y luego, en Hebreos 13:17, se nos dice que obedezcamos a nuestros líderes y nos sometamos a ellos. Hay indicios claros de que la Iglesia tiene una autoridad vinculante real, de que puede hablar con las palabras de Jesús, y de que debemos someternos a nuestros líderes, que tienen que rendir cuentas espirituales por nosotros.",
                original:
                  "I’ll give you two examples. First in Isaiah 66. In Isaiah 66, at a time when the people of God are still the Jewish people is Israel, there’s a prophecy that God is going to come and that he’s going to gather all nations and tongues and he’s going to bring them in just as he has the Israelites. This incorporation of the Gentiles wasn’t fulfilled in the lifetime of Isaiah, but Isaiah prophesied that the day was coming when it would be. Well, likewise, the Apostles could easily have prophesied sola scriptura, not true yet, but it’s going to be when we die, or it’s going to be true in 325 or whenever, 1517, this is going to become a new teaching that is now binding. They could have done any of that. They don’t do that. And so instead, sola scriptura becomes a post-Christian new revelation, which is exactly the thing it’s trying to prevent, right?\n\nRemember the Westminster Confession is all about, don’t want any further revelation. But because it’s not taught in the Bible, it becomes a post apostolic revelation. There’s a new dogma, a new teaching that has come up from somewhere, we can’t say where we can’t give you any biblical citation, we can’t tell you when, that is now the cornerstone of Protestantism. That is a major problem. So the other, I said I would talk about future stuff and say we see plenty of stuff in the Old Testament that is predictive of stuff in the New Testament. We also see things in the New Testament. In John 17, the Last Supper, Jesus says to the future generations, those who believe in him through the teaching of the apostles to remain one as he in the father of one. So he warns against schism and denominationalism in future generations.\n\nSo he doesn’t tell the reformers in the future, you need to follow sola scriptura. He tells them, don’t split off and form your own churches. That’s John 17:20-23. Now I’m obviously paraphrasing, he doesn’t say dear reformers, but he does tell future generations to remain one. So Jesus and the apostles are perfectly capable of speaking to future generations and we have a clear instances in which they do, and yet they don’t tell these future generations to follow sola scriptura, they tell them not to go into schism, to remain one. Okay, so that is the pro sola scriptura case from the Bible as I understand it and why I don’t believe in it. The flip side to that, are there verses that refute it? I’m going to give you a few. I know this is a longer than usual episode.\n\nI’ve already mentioned one of them, 2 Thessalonians 2, where St. Paul says to stand firm and hold to the traditions which you were taught by us, either by word of mouth or by epistle, by letter. I also referenced the fact that he tells the Corinthians in, 1 Corinthians 11:2, “I commend you because you remember me in everything and maintain the traditions even as I have delivered them to you.” That Paul delivered traditions to them not apparently in written form. And they were to be maintained. They were to be binding. And then Jude 1:3 refers to Revelation not as an ongoing thing or one book and then another and then another, but instead he calls it the faith which was once for all delivered to the saints. So the fullness of revelation is given in Jesus Christ and is in attested to once for all.\n\nAnd so we hear it attested to in pieces, but the full revelation is given in Christ and it’s not given in written form. The full revelation is given in the person of Jesus. It is attested to in both written and in unwritten forms. Jesus also sends out the 72 probably, it’s a little unclear from the context who he was speaking to, but it’s probably in the 72. And tells them in Luke 10:16, “He who hears you, here’s me. He who rejects you, rejects me. And he who rejects me, rejects him who sent me.” And then in Hebrews 13:17, we’re told to obey our leaders and submit to them. There’s some clear indications that there’s an actual binding authority that the church has, that it can speak in the words of Jesus and that we’re to submit to our leaders and there to have a spiritual account for us.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["2Cor.11.28"],
      text: "«La preocupación por todas las Iglesias»: todos los obispos la comparten; en el obispo de Roma «adquiere una fuerza particular» {c:CDFP6|Congregación para la Doctrina de la Fe, 1998}.",
      apologists: {
        arguments: [
          {
            title: "La preocupación por todas las iglesias no convierte por sí sola a Pablo en papa",
            quotes: [
              {
                speaker: "Dave Armstrong",
                work: 'Reply to a Critique of my "50 NT Proofs for Petrine Primacy and the Papacy" (vs. Jason Engwer)',
                outlet: "Biblical Evidence for Catholicism",
                date: "7 de marzo de 2007",
                locator: "Ver la página enlazada",
                url: "https://socrates58.blogspot.com/2007/03/reply-to-critique-of-my-50-new.html",
                text: 'Cualquiera podría tener "preocupación por todas las iglesias". Eso se llama oración (intercesión), caridad, preocupación, comunión, unidad cristiana. No tienes que ser papa (ni siquiera apóstol) para hacer eso. Los factores pertinentes aquí (para el propósito de nuestra discusión) son los destinatarios previstos de 1 Pedro (y de 2 Pedro, si es petrino). He hecho mis deberes y presenté lo que los eruditos bíblicos (todos protestantes) piensan sobre eso.',
                original:
                  "Anyone might have \"anxiety for all the churches.\" That's called prayer (intercession), charity, concern, fellowship, Christian unity. You don't have to be a pope (or even an apostle) to do that. The relevant factors here (for the purpose of our discussion) are the intended recipients of 1 Peter (and 2 Peter, if it is Petrine). I have done my homework and presented what Bible scholars (Protestants all) think about that.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "La autoridad apostólica universal de Pablo no lo identifica por sí sola como papa",
            quotes: [
              {
                speaker: "Suan Sonna",
                work: "The “Pauline Parody Argument” Against the Papacy (with Suan Sonna)",
                outlet: "Catholic Answers",
                date: "28 de julio de 2022",
                locator: "Ver la página enlazada",
                url: "https://www.catholic.com/audio/cot/the-pauline-parody-argument-against-the-papacy-with-suan-sonna",
                text: "Entonces, el número cinco es que Pablo es el único apóstol que se refiere a su autoridad sobre todas las iglesias. Es como: “Bueno… ” Así que permítanme incluir las Escrituras. Entonces, 1 Corintios 4:17, 7:17, y luego 2 Corintios 11:28. El primer problema con esto es: bueno, incluso si Pablo es el único que se refiere a su autoridad sobre todas las iglesias, ¿y qué? Quiero decir, todos los apóstoles tienen autoridad sobre la Iglesia. Todos ellos tienen este tipo de poder universal, por decirlo así. No creo que eso sea necesariamente problemático.\n\nEscritura y tradición, pero no solo eso, se podría argumentar que son en cierto sentido el depósito de la fe, especialmente Pablo, Pedro y los demás que escribieron epístolas. Así que el depósito apostólico tiene autoridad universal sobre la Iglesia, y los apóstoles, como principales guardianes, pueden ejercer un gobierno universal accediendo a ese depósito y enseñando definitivamente con él. ¿Verdad? Entonces Pablo tiene autoridad no por ser Pablo, sino por ser apóstol.",
                original:
                  "So number five is Paul is the only apostle who refers to his authority over all the churches. It’s like, “Okay. Well …” So let me just actually include the scriptures. So 1 Corinthians 4:17, 7:17, and then 2 Corinthians 11:28. The first problem with this is okay, even if Paul is the only one who refers to his authority over all the churches, so what? I mean all the apostles have authority over the church. All of them have this kind of universal power so to speak. I don’t think that’s necessarily problematic.\n\nScripture and tradition, but not only that, one could argue that they are in a sense the deposit of the faith, especially Paul and Peter and the others who wrote Epistles. So the apostolic deposit has universal authority over the church and the apostles being the chief guardians, they can have universal rule through accessing that deposit and teaching definitively with it. Right? So Paul has authority not by virtue of being Paul, but by virtue of being an apostle.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
  ],
  passages: {
    title: "Los pasajes de la posición católica",
    lede: "Los versículos que la Iglesia católica cita sobre el primado y la infalibilidad del papa, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la Iglesia católica.",
    apologistsLabel: "Cómo lo defienden los apologistas católicos.",
  },
  videos: {
    subtitle: "Creadores católicos explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle: "Objeciones a la postura católica. Abre cada una para leer en profundidad la respuesta católica.",
    videosSubtitle: "Creadores católicos que responden a esta objeción. Los videos se abren en YouTube.",
    order: ["OB-1", "OB-2", "OB-3", "OB-4", "OB-5", "OB-6", "OB-7", "OB-8"],
    silentTraditions:
      "Los textos que hablan por los bautistas en Doctrina (Fe y Mensaje Bautistas 2000, art. VI; Confesión de New Hampshire 1853, art. XIII) no se pronuncian sobre el papado.",
    items: [
      {
        id: "OB-1",
        layer: "official",
        short: "Cristo es la cabeza de la Iglesia",
        title: "Cristo es «la cabeza del cuerpo que es la iglesia»: ningún hombre puede serlo",
        synthesis:
          "La Escritura dice de Cristo: «él es la cabeza del cuerpo que es la iglesia» {v:Col.1.18}; para la Confesión de Westminster no hay otra cabeza de la Iglesia, y entre sus textos de prueba está el mandato «vuestro padre no llaméis á nadie en la tierra… Ni seáis llamados maestros; porque uno es vuestro Maestro, el Cristo» {v:Matt.23.9-Matt.23.10}. Los ortodoxos añaden que un hombre mortal no puede ser cabeza universal y perpetua de la Iglesia: Cristo mismo la gobierna {c:DOS10|Dositeo, decreto X}. Los luteranos sostienen que el obispo de Roma es solo obispo y pastor de la iglesia de Roma, y que los demás obispos son sus hermanos, no sus súbditos {c:SA241,SA249|Artículos de Esmalcalda II.4}.",
        raisedBy: {
          traditions: ["orthodox", "lutheran", "reformed"],
          line: "Suelen plantearla reformados, luteranos y ortodoxos.",
        },
        objectorTexts: {
          shown: ["WCF256", "STWCF~p"],
          more: ["SA241", "SA249", "STLUT~p", "DOS10", "ENC95_14h", "ST1895~p"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, Cristo es la única Cabeza de la Iglesia, y el ministerio de Pedro existe para servirla; Juan Pablo II escribe: «Esta función de Pedro debe permanecer en la Iglesia para que, bajo su única Cabeza, que es Cristo Jesús, sea visiblemente en el mundo la comunión de todos sus discípulos» {c:UUS97|Ut unum sint 97}. El Concilio Vaticano II enseña que la Iglesia está edificada «sobre el bienaventurado Pedro, su cabeza, siendo el propio Cristo Jesús la piedra angular» {c:LG19|Lumen gentium 19} {v:Eph.2.20}. El Catecismo dice que es Cristo quien la gobierna «por medio de Pedro y los demás Apóstoles, presentes en sus sucesores, el Papa y el colegio de los obispos» {c:CEC869|Catecismo 869}.",
          },
          {
            type: "p",
            text: "El Catecismo explica qué recibió Pedro: «El Señor hizo de Simón, al que dio el nombre de Pedro, y solamente de él, la piedra de su Iglesia. Le entregó las llaves de ella (cf. Mt 16, 18-19); lo instituyó pastor de todo el rebaño (cf. Jn 21, 15-17)»; y añade: «Este oficio pastoral de Pedro y de los demás Apóstoles pertenece a los cimientos de la Iglesia. Se continúa por los obispos bajo el primado del Papa» {c:CEC881|Catecismo 881}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, el papa es «Vicario de Cristo» y «cabeza visible de toda la Iglesia» {c:LG22,LG18|Lumen gentium 22 y 18}, El Vaticano II dice además que el Romano Pontífice es «el principio y fundamento perpetuo y visible de unidad así de los Obispos como de la multitud de los fieles» {c:LG23|Lumen gentium 23}. Juan Pablo II escribe que la Iglesia católica no separa esa función «de la misión confiada a todos los Obispos, también ellos «vicarios y legados de Cristo»», y que «el Obispo de Roma pertenece a su «colegio» y ellos son sus hermanos en el ministerio» {c:UUS95|Ut unum sint 95}.",
          },
          {
            type: "p",
            text: "El canon del Vaticano I sobre este punto dice: «Si alguno, pues, dijere que el bienaventurado apóstol Pedro no fue constituido por Cristo el Señor príncipe de todos los apóstoles y cabeza visible de toda la Iglesia militante; o que recibió directa e inmediatamente del mismo Señor nuestro Jesucristo solo un primado de honor, y no de verdadera y propia jurisdicción: sea anatema» {c:PA1can|Pastor aeternus, cap. 1, canon}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["UUS95", "UUS97"],
            name: "Juan Pablo II, Ut unum sint 95, 97",
            dates: [
              {
                year: 1995,
                month: 5,
                day: 25,
              },
            ],
          },
          {
            citations: ["LG18", "LG19", "LG22", "LG23"],
            name: "Concilio Vaticano II, Lumen gentium 18, 19, 22, 23",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
          {
            citations: ["CEC869", "CEC881"],
            name: "Catecismo de la Iglesia Católica 869, 881",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["PA1can"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 1, canon",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
        ],
        passages: {
          answer: ["Eph.2.20", "Matt.16.18-Matt.16.19", "John.21.15-John.21.17"],
          objector: ["Col.1.18", "Eph.1.22", "Matt.23.8-Matt.23.10", "Matt.28.20"],
          objectorNote:
            "Confesión de Westminster XXV.6, Encíclica de 1895 §XIV; 2 Tesalonicenses 2 y Apocalipsis 13:6, en la objeción OB-7.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-2",
        layer: "official",
        short: "La roca es la confesión de Pedro",
        title:
          "«Sobre esta roca edificaré mi iglesia»: la roca es la confesión de Pedro, y las llaves se dieron a todos los apóstoles",
        synthesis:
          "Cuando Cristo dice «sobre esta piedra edificaré mi iglesia», la piedra es la fe que Pedro confesó: «Tú eres el Cristo, el Hijo del Dios viviente». Pedro respondió en nombre de todos, y lo que se le dice a él en singular se dice después a todos en plural: «todo lo que ligareis en la tierra» {v:Matt.18.18}, «a los que remitiereis los pecados» {v:John.20.23}. Las llaves son de toda la Iglesia; y «apacienta mis ovejas» fue para Pedro la restitución de su apostolado después de negar al Señor, no una superioridad sobre los demás.",
        raisedBy: {
          traditions: ["orthodox", "lutheran"],
          line: "Suelen plantearla luteranos y ortodoxos.",
        },
        objectorTexts: {
          shown: ["TR25", "TR23", "TR24", "TR30", "STLUT~p"],
          more: ["ENC48_11r", "ST1848~p", "ENC95_14r", "ST1895~p"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, Pedro no se separa de su confesión: «Pedro, a causa de la fe confesada por él, será la roca inquebrantable de la Iglesia» {c:CEC552|Catecismo 552}. El Vaticano I subraya que Cristo habló así «a Simón solo», al que ya había llamado «Cefas», después de que él confesara: «Tú eres el Cristo, el Hijo de Dios vivo» {c:PA1|Pastor aeternus, cap. 1} {v:John.1.42} {v:Matt.16.16-Matt.16.19}. La Congregación para la Doctrina de la Fe escribe que en la Iglesia «la imagen de Pedro quedó fijada como la del Apóstol que, a pesar de su debilidad humana, fue constituido expresamente por Cristo en el primer lugar entre los Doce y llamado a desempeñar en la Iglesia una función propia y específica. Él es la roca sobre la que Cristo edificará su Iglesia» {c:CDFP3|El primado del Sucesor de Pedro, n. 3}.",
          },
          {
            type: "p",
            text: "El Catecismo enseña también que Jesús, «en virtud de su autoridad divina», «confiere este poder a los hombres (cf Jn 20,21-23) para que lo ejerzan en su nombre» {c:CEC1441|Catecismo 1441}, y que «consta que también el colegio de los Apóstoles, unido a su cabeza, recibió la función de atar y desatar dada a Pedro (cf Mt 18,18; 28,16-20)» {c:CEC1444|Catecismo 1444, citando Lumen gentium 22}. Lumen gentium añade: «el Señor estableció solamente a Simón como roca y portador de las llaves de la Iglesia (Mt 16,18-19) y le constituyó Pastor de toda su grey (cf. Jn 21, 15 ss)» {c:LG22|Lumen gentium 22}; Pedro es «el único a quien Él confió explícitamente las llaves del Reino» {c:CEC553|Catecismo 553}.",
          },
          {
            type: "p",
            text: "Sobre «Apacienta mis ovejas» {v:John.21.16-John.21.17}, Juan Pablo II escribe que la triple profesión de amor de Pedro «se corresponde con su triple traición», y que «es precisamente como si, desde la debilidad humana de Pedro, se manifestara de un modo pleno que su ministerio particular en la Iglesia procede totalmente de la gracia» {c:UUS91|Ut unum sint 91}. Para el Vaticano I, es allí donde Jesús resucitado confirió «solo a Simón Pedro» la jurisdicción de pastor supremo sobre todo su rebaño {c:PA1|Pastor aeternus, cap. 1} {v:John.21.15-John.21.17}.",
          },
          {
            type: "p",
            text: "El Vaticano I rechaza expresamente la lectura de que el primado se dio a la Iglesia y a Pedro solo como ministro de ella: a la doctrina de la Escritura «tal como siempre la entendió la Iglesia católica, se oponen abiertamente las perversas opiniones de quienes […] afirman que ese mismo primado no fue conferido inmediata y directamente al mismo bienaventurado Pedro, sino a la Iglesia, y por medio de ella a él como ministro de la misma Iglesia» {c:PA1perv|Pastor aeternus, cap. 1}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC552", "CEC553", "CEC1441", "CEC1444"],
            name: "Catecismo de la Iglesia Católica 552–553, 1441, 1444",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["CDFP3"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro 3",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
          {
            citations: ["LG22"],
            name: "Concilio Vaticano II, Lumen gentium 22",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
          {
            citations: ["UUS91"],
            name: "Juan Pablo II, Ut unum sint 91",
            dates: [
              {
                year: 1995,
                month: 5,
                day: 25,
              },
            ],
          },
          {
            citations: ["PA1", "PA1perv"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 1",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
        ],
        passages: {
          answer: [
            "John.1.42",
            "Matt.16.16-Matt.16.19",
            "Matt.18.18",
            "Matt.28.16-Matt.28.20",
            "John.20.21-John.20.23",
            "John.21.15-John.21.17",
          ],
          objector: [
            "Matt.16.15-Matt.16.19",
            "Matt.18.18-Matt.18.19",
            "John.20.21-John.20.23",
            "John.21.15-John.21.17",
            "1Cor.3.10-1Cor.3.11",
            "Eph.2.19-Eph.2.20",
          ],
          objectorNote:
            "Textos que citan el Tratado sobre el poder y el primado del papa 22–30 y las encíclicas ortodoxas de 1848, §11, y 1895, §XIV.",
        },
      },
      {
        id: "OB-3",
        layer: "official",
        short: "Un primado de honor y de derecho humano",
        title: "El primado de Roma es de honor y de derecho humano, no una jurisdicción de derecho divino",
        synthesis:
          "Cristo prohibió el señorío entre los apóstoles («Los reyes de las gentes se enseñorean de ellas… Mas vosotros, no así») {v:Luke.22.25-Luke.22.26} y los envió a todos por igual {v:John.20.21}. Para los luteranos, Pablo no fue ordenado ni confirmado por Pedro {v:Gal.2}, y la autoridad del obispo de Roma creció «por derecho humano», por disposición de los concilios {c:TR12|Tratado 12}; Melanchthon, al firmar los Artículos de Esmalcalda, admitió concederle por derecho humano una superioridad sobre los obispos si admitiera el Evangelio. Para los ortodoxos, los Padres dieron al obispo de Roma una presidencia de honor por ser obispo de la capital del imperio, «primero entre iguales», como después a Constantinopla (canon 28 de Calcedonia); cada Iglesia se gobernaba con sus propios sínodos, y durante nueve siglos Oriente no reconoció a Roma una jurisdicción sobre toda la Iglesia {c:ENC95_15,ENC95_16,ENC95_17|Encíclica de 1895, XV–XVII}.",
        raisedBy: {
          traditions: ["orthodox", "lutheran"],
          line: "Suelen plantearla luteranos y ortodoxos.",
        },
        objectorTexts: {
          shown: ["ENC95_15", "ENC95_17", "ST1895~p"],
          more: ["TR14", "TR8", "TR12", "STLUT~p", "SAMEL", "ENC48_13", "ST1848~p"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, Lucas 22 dice cómo debe ejercerse el primado: Juan Pablo II se presenta como «servus servorum Dei» y cita a Cristo: «Yo estoy en medio de vosotros como el que sirve» {c:UUS88|Ut unum sint 88} {v:Luke.22.27}; el primado se confía a uno de los obispos «no de ejercer el poder sobre el pueblo —como hacen los jefes de las naciones y los poderosos (cf. Mt 20, 25; Mc 10,42)—, sino de guiarlo» {c:UUS94|Ut unum sint 94} {v:Matt.20.25}. La Congregación para la Doctrina de la Fe dice que el primado «no es un oficio de coordinación o de presidencia, ni se reduce a un Primado de honor, ni puede concebirse como una monarquía de tipo político» {c:CDFP7|El primado del Sucesor de Pedro, 1998, n. 7}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, unas formas son de institución divina y otras nacieron de la Iglesia: «El Episcopado y el Primado, recíprocamente vinculados e inseparables, son de institución divina. Históricamente, por institución de la Iglesia, han surgido formas de organización eclesiástica en las que se ejerce también un principio de primacía», como el sistema de los patriarcados {c:CDFP6|n. 6}. El Concilio de Florencia, al definir el primado, renovó el orden de los patriarcas «quedando a salvo todos sus privilegios y derechos» {c:FLOpat|Laetentur caeli, 1439}.",
          },
          {
            type: "p",
            text: "Sobre el primer milenio, el Vaticano I sostiene que la suprema potestad de enseñar está comprendida en el primado, y que «lo declararon los mismos concilios ecuménicos, sobre todo aquellos en que Oriente y Occidente se reunían en la unión de la fe y de la caridad»; cita la profesión del IV Concilio de Constantinopla: «en la Sede Apostólica siempre se ha conservado inmaculada la religión católica» {c:PA4open|Pastor aeternus, cap. 4}. Sobre el canon 28 de Calcedonia, Pío XII, en la encíclica por los 1500 años de aquel concilio, sostiene que, «si bien nada se hubiera hecho contra el divino primado de jurisdicción, que era por todos reconocido, con todo aquel canon, redactado en ausencia y contra la voluntad de los Legados Pontificios, y por consiguiente clandestino y subrepticio, está destituido de todo valor jurídico y fue reprobado y condenado por San León en muchas cartas» {c:SRX|Sempiternus Rex Christus, 1951}. Juan Pablo II escribe que durante un milenio los cristianos estuvieron unidos «por la comunión fraterna de fe y vida sacramental, siendo la Sede Romana, con el consentimiento común, la que moderaba cuando surgían disensiones entre ellas en materia de fe o de disciplina» {c:UUS95|Ut unum sint 95, citando Unitatis redintegratio 14}; y admitió que, «contra la voluntad de unos y otros, lo que debía ser un servicio pudo manifestarse bajo una luz bastante distinta», y pidió perdón «por aquello de lo que somos responsables» {c:UUS95,UUS88|Ut unum sint 95 y 88}.",
          },
          {
            type: "p",
            text: "El canon del Vaticano I sobre este punto dice: «Si alguno, pues, dijere que el Romano Pontífice tiene solo un oficio de inspección o de dirección, y no la potestad plena y suprema de jurisdicción sobre toda la Iglesia […]; o que esta potestad suya no es ordinaria e inmediata, tanto sobre todas y cada una de las iglesias como sobre todos y cada uno de los pastores y fieles: sea anatema» {c:PA3can|Pastor aeternus, cap. 3, canon}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["UUS88", "UUS94", "UUS95"],
            name: "Juan Pablo II, Ut unum sint 88, 94, 95",
            dates: [
              {
                year: 1995,
                month: 5,
                day: 25,
              },
            ],
          },
          {
            citations: ["CDFP6", "CDFP7"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro en el misterio de la Iglesia 6–7",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
          {
            citations: ["FLOpat"],
            name: "Concilio de Florencia, Laetentur caeli",
            dates: [
              {
                year: 1439,
                month: 7,
                day: 6,
              },
            ],
          },
          {
            citations: ["PA4open"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 4",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
          {
            citations: ["SRX"],
            name: "Pío XII, Sempiternus Rex Christus",
            dates: [
              {
                year: 1951,
                month: 9,
                day: 8,
              },
            ],
          },
          {
            citations: ["PA3can"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 3, canon",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
        ],
        passages: {
          answer: ["Luke.22.27", "Matt.20.25"],
          objector: [
            "Luke.22.24-Luke.22.26",
            "Matt.18.1-Matt.18.4",
            "John.20.21",
            "Gal.2.6-Gal.2.9",
            "1Cor.3.6",
            "1Cor.3.21-1Cor.3.22",
          ],
          objectorNote: "Textos que cita el Tratado sobre el poder y el primado del papa, 8–11.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-4",
        layer: "official",
        short: "La sede de Roma y Pedro",
        title: "La sede de Roma no es la de Pedro por la Escritura",
        synthesis:
          "Que la sede de Roma sea la de Pedro se apoya en una tradición, no en la Escritura, que habla más bien de Antioquía. La Iglesia de Roma fue fundada sobre todo por Pablo, por medio de sus discípulos; la acción apostólica de Pedro en Roma no consta en la historia. En la Escritura, Pedro discute como igual entre iguales en el concilio de Jerusalén y es reprendido por Pablo.",
        raisedBy: {
          traditions: ["orthodox"],
          line: "Suelen plantearla ortodoxos.",
        },
        objectorTexts: {
          shown: ["ENC48_11a", "ST1848~p"],
          more: ["ENC95_14p", "ST1895~p"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, la presencia y la muerte de Pedro en Roma están «atestiguadas por la tradición literaria y arqueológica más antigua»; y entiende que el ministerio de unidad confiado a Pedro «pertenece a la estructura perenne de la Iglesia de Cristo y que esta sucesión está fijada en la sede de su martirio» {c:CDFP3|Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro, 1998, n. 3}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, Pablo está unido a Pedro en la Iglesia de Roma: su preeminencia está «enriquecida también con la predicación y el martirio de San Pablo» {c:CDFP4|n. 4}, y Juan Pablo II la llama «la Iglesia de Pedro y de Pablo» {c:UUS90|Ut unum sint 90}. El Catecismo cita a san Ignacio de Antioquía (Carta a los Romanos, hacia 107–110, fecha tradicional; discutida) y a san Ireneo (Contra las herejías, hacia 180–189): «Las Iglesias particulares son plenamente católicas gracias a la comunión con una de ellas: la Iglesia de Roma 'que preside en la caridad' […]. 'Porque con esta Iglesia en razón de su origen más excelente debe necesariamente acomodarse toda Iglesia, es decir, los fieles de todas partes'» {c:CEC834|Catecismo 834}. Sobre Antioquía, la Iglesia católica dice que «es plenamente consciente de la función de las sedes apostólicas en la Iglesia antigua, especialmente de las consideradas petrinas –Antioquía y Alejandría–» {c:CDFP6|n. 6}.",
          },
          {
            type: "p",
            text: "El canon del Vaticano I sobre este punto dice: «Si alguno, pues, dijere que no es por institución del mismo Cristo el Señor, es decir, por derecho divino, que el bienaventurado Pedro tenga perpetuos sucesores en el primado sobre toda la Iglesia; o que el Romano Pontífice no es sucesor del bienaventurado Pedro en este mismo primado: sea anatema» {c:PA2can|Pastor aeternus, cap. 2, canon}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["CDFP3", "CDFP4", "CDFP6"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro 3, 4, 6",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
          {
            citations: ["UUS90"],
            name: "Juan Pablo II, Ut unum sint 90",
            dates: [
              {
                year: 1995,
                month: 5,
                day: 25,
              },
            ],
          },
          {
            citations: ["CEC834"],
            name: "Catecismo de la Iglesia Católica 834",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["PA2can"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 2, canon",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: ["Gal.2.11-Gal.2.14", "Acts.15"],
          objectorNote: "Encíclicas ortodoxas de 1848, §11, y 1895, §XIV; ninguna da versículos de Hechos 15.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-5",
        layer: "official",
        short: "El concilio y el papa",
        title: "El concilio ecuménico, no el papa, es el tribunal supremo de la Iglesia",
        synthesis:
          "Para los ortodoxos, en la Iglesia antigua las cuestiones que tocaban a toda la Iglesia se llevaban a un concilio ecuménico, «el único tribunal supremo en la Iglesia universal», y el obispo de Roma estaba sujeto a sus decretos como los demás {c:ENC95_16|Encíclica de 1895, XVI}. Lo apoyan en Calcedonia, que no aceptó la carta del papa León porque fuera del papa, sino después de examinarla y comprobar que concordaba con los concilios anteriores {c:ENC48_15|Encíclica de 1848, 15}. Los luteranos añaden que un papa que no acepta ser juzgado por la Iglesia ni por un concilio quita a la Iglesia el juicio que le pertenece {c:TR4956|Tratado 49, 56}.",
        raisedBy: {
          traditions: ["orthodox", "lutheran"],
          line: "Suelen plantearla ortodoxos y luteranos.",
        },
        objectorTexts: {
          shown: ["ENC95_16", "ST1895~p"],
          more: ["ENC48_15", "ST1848~p", "TR4956", "STLUT~p"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, el concilio ecuménico es la forma solemne en que el colegio de los obispos ejerce la potestad suprema: «La potestad del colegio de los Obispos sobre toda la Iglesia se ejerce de modo solemne en el Concilio Ecuménico» {c:CEC884|Catecismo 884}. Lumen gentium enseña que ese colegio no existe sin su cabeza: «No hay concilio ecuménico si no es aprobado o, al menos, aceptado como tal por el sucesor de Pedro. Y es prerrogativa del Romano Pontífice convocar estos concilios ecuménicos, presidirlos y confirmarlos» {c:LG22|Lumen gentium 22}. El Vaticano I recuerda que los papas, antes de definir, «unas veces convocando concilios ecuménicos, otras consultando el parecer de la Iglesia dispersa por el orbe», definieron lo que habían reconocido «conforme a las Sagradas Escrituras y a las tradiciones apostólicas» {c:PA4conv|Pastor aeternus, cap. 4}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, que nadie pueda juzgar a la Primera Sede no hace ilimitado el poder del papa: «eso no significa que el Papa tenga un poder absoluto. En efecto, escuchar la voz de las Iglesias es una característica propia del ministerio de la unidad» {c:CDFP10|Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro, n. 10}. Lumen gentium enseña que a las definiciones «nunca puede faltar el asenso de la Iglesia por la acción del mismo Espíritu Santo» {c:LG25|Lumen gentium 25}.",
          },
          {
            type: "p",
            text: "Sobre Calcedonia, Pío XII, en la encíclica por los 1500 años de aquel concilio, sostiene que allí «no sólo los Legados Pontificios han ejercitado la autoridad de presidir, sino que también les fue reconocido por todos los Padres del Concilio sin alguna oposición el derecho y el honor de la presidencia»; que, leída la carta de León, «todos los Padres gritaron unánimemente: Esta es la fe de los Padres, ésta la fe de los Apóstoles. […] Pedro ha hablado por boca de León»; y que «después de esto, con pleno consentimiento, todos dijeron que el documento del Romano Pontífice concordaba perfectamente con los Símbolos Niceno y Constantinopolitano» {c:SRX|Sempiternus Rex Christus, 1951}.",
          },
          {
            type: "p",
            text: "El Vaticano I enseña: «se apartan del recto camino de la verdad quienes afirman que es lícito apelar de los juicios de los Romanos Pontífices al concilio ecuménico como a una autoridad superior al Romano Pontífice» {c:PA3b|Pastor aeternus, cap. 3}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC884"],
            name: "Catecismo de la Iglesia Católica 884",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["LG22", "LG25"],
            name: "Concilio Vaticano II, Lumen gentium 22, 25",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
          {
            citations: ["PA3b", "PA4conv"],
            name: "Concilio Vaticano I, Pastor aeternus, caps. 3–4",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
          {
            citations: ["CDFP10"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro 10",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
          {
            citations: ["SRX"],
            name: "Pío XII, Sempiternus Rex Christus",
            dates: [
              {
                year: 1951,
                month: 9,
                day: 8,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: [],
        },
      },
      {
        id: "OB-6",
        layer: "official",
        short: "La infalibilidad humana",
        title: "Ningún hombre en la tierra es infalible; solo la Escritura juzga las controversias",
        synthesis:
          "Para los ortodoxos, fuera de Cristo nadie en la tierra ha sido infalible: el mismo Pedro negó tres veces al Señor y fue reprendido por Pablo, y papas como Honorio fueron condenados como herejes por un concilio ecuménico; la infalibilidad del papa, proclamada en 1870, es una novedad que los primeros nueve siglos no conocieron {c:ENC95_14i,ENC95_18,ENC95_19|Encíclica de 1895, XIV, XVIII–XIX}, y el guardián de la fe es el cuerpo entero de la Iglesia, el pueblo mismo {c:ENC48_17|Encíclica de 1848, 17}. Los reformados sostienen además que el juez supremo de toda controversia es solo el Espíritu Santo que habla en la Escritura. Para los luteranos, la única regla para juzgar toda doctrina son los escritos de los profetas y de los apóstoles.",
        raisedBy: {
          traditions: ["orthodox", "lutheran", "reformed"],
          line: "Suelen plantearla ortodoxos, reformados y luteranos, desde lugares distintos: los ortodoxos tienen por infalibles las decisiones sinodales de la Iglesia universal y ponen la custodia de la fe en todo el cuerpo de la Iglesia; los reformados y los luteranos, solo la Escritura.",
        },
        objectorTexts: {
          shown: ["ENC95_18", "ENC95_14i", "ENC95_19", "ST1895~p"],
          more: ["ENC48_17", "ST1848~p", "WCF110", "FCEPRN"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, el papa no recibe una revelación nueva; el Vaticano I enseña: «el Espíritu Santo no fue prometido a los sucesores de Pedro para que, por revelación suya, dieran a conocer una doctrina nueva, sino para que, con su asistencia, custodiaran santamente y expusieran fielmente la revelación transmitida por los apóstoles, es decir, el depósito de la fe» {c:PA4neque|Pastor aeternus, cap. 4}. La Congregación para la Doctrina de la Fe lo explica así: «En el cumplimiento de su misión, los Pastores de la Iglesia gozan de la asistencia providencial del Espíritu Santo, que alcanza su cumbre cuando instruyen al Pueblo de Dios, de tal modo que transmiten una doctrina necesariamente libre de error» {c:ME3|Mysterium Ecclesiae, 1973, n. 3}. Lumen gentium enseña que, cuando define, el papa «no da una sentencia como persona privada», y que lo hace «siempre de acuerdo con la misma Revelación, a la cual deben atenerse y conformarse todos» {c:LG25|Lumen gentium 25}. El Código de Derecho Canónico dice: «Ninguna doctrina se considera definida infaliblemente si no consta así de modo manifiesto» {c:CIC749|can. 749 §3}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la debilidad de Pedro y de sus sucesores es real: «No han faltado en la historia del Papado errores humanos y faltas, incluso graves: Pedro mismo se reconocía pecador. Pedro, hombre débil, fue elegido como roca, precisamente para que quedara de manifiesto que la victoria es sólo de Cristo» {c:CDFP15|Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro, n. 15}. El Concilio Vaticano II enseña que Cristo llama a la Iglesia «hacia una perenne reforma, de la que la Iglesia misma, en cuanto institución humana y terrena, tiene siempre necesidad», también en las «formas de exponer la doctrina —que debe cuidadosamente distinguirse del mismo depósito de la fe—» {c:UR6|Unitatis redintegratio 6}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Escritura se interpreta con autoridad en la Iglesia: el Catecismo enseña que «el oficio de interpretar auténticamente la palabra de Dios, oral o escrita, ha sido encomendado sólo al Magisterio vivo de la Iglesia, el cual lo ejercita en nombre de Jesucristo», «es decir, a los obispos en comunión con el sucesor de Pedro, el obispo de Roma» {c:CEC85|Catecismo 85, citando Dei Verbum 10}; y que ese Magisterio «no está por encima de la palabra de Dios, sino a su servicio» {c:CEC86|Catecismo 86, citando Dei Verbum 10}. Lumen gentium enseña que la infalibilidad prometida a la Iglesia «reside también en el Cuerpo de los Obispos cuando ejerce el supremo magisterio en unión con el sucesor de Pedro» {c:LG25|Lumen gentium 25}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la fe la guarda también todo el pueblo de Dios: «La totalidad de los fieles, que tienen la unción del Santo (cf. 1 Jn 2,20 y 27), no puede equivocarse cuando cree» {c:LG12|Lumen gentium 12}. La Congregación para la Doctrina de la Fe dice que Dios «ha querido dotar a su nuevo Pueblo, que es la Iglesia, de una cierta infalibilidad participada», y que la función del Magisterio «no se reduce a sancionar el consentimiento expresado por ellos, sino que incluso, al interpretar y explicar la palabra de Dios escrita o transmitida, puede prevenir tal consentimiento y exigirlo» {c:ME2|Mysterium Ecclesiae 2}. Lumen gentium añade que a las definiciones «nunca puede faltar el asenso de la Iglesia por la acción del mismo Espíritu Santo» {c:LG25|Lumen gentium 25}.",
          },
          {
            type: "p",
            text: "Lumen gentium explica por qué esas definiciones son irreformables «por sí mismas»: porque se proclaman «bajo la asistencia del Espíritu Santo, prometida a él en la persona de San Pedro», y no necesitan «de ninguna aprobación de otros ni admitir tampoco apelación a otro tribunal» {c:LG25|Lumen gentium 25}.",
          },
          {
            type: "p",
            text: "El Vaticano I lo definió así: «enseñamos y definimos que es dogma divinamente revelado: que el Romano Pontífice, cuando habla ex cathedra […], goza […] de aquella infalibilidad de la que el divino Redentor quiso que estuviera dotada su Iglesia al definir la doctrina sobre la fe o las costumbres; y que, por tanto, tales definiciones del Romano Pontífice son irreformables por sí mismas, y no por el consentimiento de la Iglesia. Y si alguno […] presumiere contradecir esta nuestra definición: sea anatema» {c:PA4def|Pastor aeternus, cap. 4}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["PA4neque", "PA4def"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 4",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
          {
            citations: ["CEC85", "CEC86"],
            name: "Catecismo de la Iglesia Católica 85, 86 (Dei Verbum 10)",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["LG12", "LG25"],
            name: "Concilio Vaticano II, Lumen gentium 12, 25",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
          {
            citations: ["UR6"],
            name: "Concilio Vaticano II, Unitatis redintegratio 6",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
          {
            citations: ["ME2", "ME3"],
            name: "Congregación para la Doctrina de la Fe, Mysterium Ecclesiae 2–3",
            dates: [
              {
                year: 1973,
                month: 6,
                day: 24,
              },
            ],
          },
          {
            citations: ["CIC749"],
            name: "Código de Derecho Canónico, can. 749 §3",
            dates: [
              {
                year: 1983,
              },
            ],
          },
          {
            citations: ["CDFP15"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro 15",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
        ],
        passages: {
          answer: ["1John.2.20", "1John.2.27"],
          objector: ["Gal.2.11-Gal.2.14", "Matt.22.29", "Matt.22.31", "Eph.2.20", "Acts.28.25"],
          objectorNote:
            "Gálatas 2:11-14: Encíclica de 1895, §XVIII, sin versículo. Mateo 22:29, 31; Efesios 2:20; Hechos 28:25: Confesión de Westminster I.10.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-7",
        layer: "official",
        short: "El papa y la Palabra de Dios",
        title: "El papa se pone por encima de la Palabra de Dios y ata la salvación a su obediencia: es el Anticristo",
        synthesis:
          "Para los luteranos, el papa pretende ser cabeza de la Iglesia por derecho divino y enseña que nadie puede salvarse sin someterse a él, aunque crea en Cristo {c:SA244|Artículos de Esmalcalda II.4} {c:TR36|Tratado 36}. Se arroga cambiar la doctrina y el culto que Dios instituyó y no acepta ser juzgado por nadie {c:TR3940|Tratado 39–40}. Eso es lo que Pablo describe del «hombre de pecado», «oponiéndose, y levantándose contra todo lo que se llama Dios», «tanto que se asiente en el templo de Dios como Dios» {v:2Thess.2.3-2Thess.2.4}; por eso, aun si tuviera el primado por derecho divino, no se le debería obediencia {c:TR38,TR57|Tratado 38, 57}. La Confesión de Westminster, en su texto de 1647, llama al papa «aquel anti-cristo, aquel inícuo, é hijo de perdicion» {c:WCF256|XXV.6}.",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla los luteranos, y la Confesión de Westminster en su texto de 1647.",
        },
        objectorTexts: {
          shown: ["SA244", "SA2410", "STLUTAC~p"],
          more: ["TR38", "TR3940", "TR57", "STLUTAC~p", "TR36", "STLUT~p", "WCF256", "STWCF~p"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, «el oficio de interpretar auténticamente la palabra de Dios, oral o escrita, ha sido encomendado sólo al Magisterio vivo de la Iglesia» {c:CEC85|Catecismo 85, citando Dei Verbum 10}; y el Catecismo añade: «El Magisterio no está por encima de la palabra de Dios, sino a su servicio, para enseñar puramente lo transmitido» {c:CEC86|Catecismo 86, citando Dei Verbum 10}. La Congregación para la Doctrina de la Fe dice: «El Romano Pontífice, como todos los fieles, está subordinado a la Palabra de Dios, a la fe católica […]. No decide según su arbitrio, sino que es portavoz de la voluntad del Señor», y su potestad «tiene los límites que proceden de la ley divina y de la inviolable constitución divina de la Iglesia contenida en la Revelación» {c:CDFP7|Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro, n. 7}.",
          },
          {
            type: "p",
            text: "El Vaticano I cierra el capítulo 3 con una frase que llama «doctrina de la verdad católica, de la cual nadie puede apartarse sin menoscabo de la fe y de la salvación» a lo que ha enseñado en él {c:PA3a|Pastor aeternus, cap. 3}. El Vaticano II enseña también: «no podrían salvarse aquellos hombres que, conociendo que la Iglesia católica fue instituida por Dios a través de Jesucristo como necesaria, sin embargo, se negasen a entrar o a perseverar en ella» {c:LG14|Lumen gentium 14}. El Catecismo enseña a la vez que «los que creen en Cristo y han recibido ritualmente el bautismo están en una cierta comunión, aunque no perfecta, con la Iglesia católica» {c:CEC838|Catecismo 838, citando Unitatis redintegratio 3}, y el Concilio, que las Iglesias y comunidades separadas «no están desprovistas de sentido y de valor en el misterio de la salvación, porque el Espíritu de Cristo no ha rehusado servirse de ellas como medios de salvación» {c:UR3|Unitatis redintegratio 3}.",
          },
          {
            type: "p",
            text: "Juan Pablo II reconoció que la convicción católica sobre el papa «constituye una dificultad para la mayoría de los demás cristianos, cuya memoria está marcada por ciertos recuerdos dolorosos», pidió perdón «por aquello de lo que somos responsables» e invitó a un diálogo «más allá de estériles polémicas» {c:UUS88,UUS96|Ut unum sint 88 y 96}.",
          },
          {
            type: "p",
            text: "El Vaticano I enseña: «el Espíritu Santo no fue prometido a los sucesores de Pedro para que, por revelación suya, dieran a conocer una doctrina nueva, sino para que, con su asistencia, custodiaran santamente y expusieran fielmente la revelación transmitida por los apóstoles» {c:PA4neque|Pastor aeternus, cap. 4}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC85", "CEC86", "CEC838"],
            name: "Catecismo de la Iglesia Católica 85, 86, 838",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["LG14", "UR3"],
            name: "Concilio Vaticano II, Lumen gentium 14 y Unitatis redintegratio 3",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
          {
            citations: ["CDFP7"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro 7",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
          {
            citations: ["PA3a", "PA4neque"],
            name: "Concilio Vaticano I, Pastor aeternus, caps. 3–4",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
          {
            citations: ["UUS88", "UUS96"],
            name: "Juan Pablo II, Ut unum sint 88, 96",
            dates: [
              {
                year: 1995,
                month: 5,
                day: 25,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: [
            "2Thess.2.3-2Thess.2.4",
            "2Thess.2.8-2Thess.2.9",
            "Rev.13.6",
            "Rev.12",
            "Gal.1.8",
            "Acts.5.29",
            "Matt.7.15",
            "Titus.3.10",
            "2Cor.6.14",
          ],
          objectorNote:
            "Textos que citan los Artículos de Esmalcalda II.4 (Apocalipsis 12: II.4.4), el Tratado 38–41 y la Confesión de Westminster XXV.6, texto de 1647 (la edición de 1880 solo 2 Tesalonicenses 2:3-5).",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-8",
        layer: "official",
        short: "El poder temporal",
        title: "«Mi reino no es de este mundo»: Cristo no dio a los apóstoles la espada ni el poder de dar reinos",
        synthesis:
          "Cristo dio a los apóstoles solo una potestad espiritual: enseñar el Evangelio, anunciar el perdón de los pecados, administrar los sacramentos y excluir a los impíos sin fuerza física. «Mi reino no es de este mundo» {v:John.18.36}. Pretender que el papa tiene por derecho divino las dos espadas y el poder de dar y quitar reinos, y que creerlo es necesario para la salvación, convierte las llaves en un reino de este mundo.",
        raisedBy: {
          traditions: ["lutheran"],
          line: "Suelen plantearla luteranos.",
        },
        objectorTexts: {
          shown: ["TR31", "TR33", "TR35", "TR36w", "STLUT~p"],
          more: [],
        },
        answer: [
          {
            type: "p",
            text: "El Vaticano I enseña que la potestad del papa abarca «las cosas que pertenecen a la fe y a las costumbres» y las que pertenecen a «la disciplina y al régimen de la Iglesia extendida por todo el orbe» {c:PA3a|Pastor aeternus, cap. 3}. El Concilio Vaticano II enseña: «La misión propia que Cristo confió a su Iglesia no es de orden político, económico o social. El fin que le asignó es de orden religioso» {c:GS42|Gaudium et spes 42}. El Catecismo enseña, citando al mismo Concilio, que pertenece a la misión de la Iglesia «emitir un juicio moral incluso sobre cosas que afectan al orden político cuando lo exijan los derechos fundamentales de la persona o la salvación de las almas, aplicando todos y sólo aquellos medios que sean conformes al Evangelio […]» {c:CEC2246|Catecismo 2246, citando Gaudium et spes 76}.",
          },
          {
            type: "p",
            text: "La Congregación para la Doctrina de la Fe dice que el primado no «puede concebirse como una monarquía de tipo político», y que, «como demuestra la historia, ha constituido también una defensa de la libertad de los Obispos y de las Iglesias particulares frente a las injerencias del poder político» {c:CDFP7,CDFP2|El primado del Sucesor de Pedro, nn. 7 y 2}.",
          },
          {
            type: "p",
            text: "El Concilio Vaticano II enseña: «La Iglesia, que por razón de su misión y de su competencia no se confunde en modo alguno con la comunidad política ni está ligada a sistema político alguno, es a la vez signo y salvaguardia del carácter trascendente de la persona humana» {c:GS76|Gaudium et spes 76}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["PA3a"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 3",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
          {
            citations: ["GS42", "GS76"],
            name: "Concilio Vaticano II, Gaudium et spes 42, 76",
            dates: [
              {
                year: 1965,
                month: 12,
                day: 7,
              },
            ],
          },
          {
            citations: ["CEC2246"],
            name: "Catecismo de la Iglesia Católica 2246",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["CDFP2", "CDFP7"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro 2, 7",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: ["Matt.28.19-Matt.28.20", "John.20.21", "John.18.36", "2Cor.1.24", "2Cor.10.4"],
          objectorNote: "Textos que cita el Tratado sobre el poder y el primado del papa, 31.",
        },
        apologeticAnswer: "pending",
      },
    ],
  },
  life: {
    intro: [
      "En cada Misa se nombra al papa. Para la Iglesia católica, «el Papa es asociado a toda celebración de la Eucaristía en la que es nombrado como signo y servidor de la unidad de la Iglesia universal» {c:CEC1369|Catecismo 1369}. Para el Código, están en plena comunión los bautizados que se unen a Cristo dentro de su estructura visible «por los vínculos de la profesión de fe, de los sacramentos y del régimen eclesiástico» {c:CIC205|can. 205}, y el Código llama cisma «el rechazo de la sujeción al Sumo Pontífice» {c:CIC751|can. 751}; a la vez, el Catecismo enseña que quienes nacen hoy en las comunidades separadas «y son instruidos en la fe de Cristo, no pueden ser acusados del pecado de la separación y la Iglesia católica los abraza con respeto y amor fraternos» {c:CEC818|Catecismo 818, citando Unitatis redintegratio 3}.",
      "Para la Iglesia católica, a la enseñanza ordinaria del papa el católico le debe «un asentimiento religioso del entendimiento y de la voluntad, sin que llegue a ser de fe» {c:CIC752|can. 752}. El papa nombra a los obispos, es elegido por los cardenales y puede renunciar libremente; mientras la sede está vacante, «nada se ha de innovar en el régimen de la Iglesia universal» {c:CIC335|can. 335}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "En cada Misa",
        text: "El papa «es asociado a toda celebración de la Eucaristía en la que es nombrado como signo y servidor de la unidad de la Iglesia universal»; también se nombra al obispo del lugar. Para la Iglesia católica, toda celebración válida de la Eucaristía «expresa esta comunión universal con Pedro y con la Iglesia entera, o la reclama objetivamente».",
        sources: [
          {
            citations: ["CEC1369"],
            label: "Catecismo 1369",
          },
          {
            citations: ["CDFP11"],
            label: "El primado del Sucesor de Pedro 11",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Plena comunión",
        text: "Están en plena comunión «los bautizados que se unen a Cristo dentro de la estructura visible de aquélla, es decir, por los vínculos de la profesión de fe, de los sacramentos y del régimen eclesiástico»; el «rechazo de la sujeción al Sumo Pontífice o de la comunión con los miembros de la Iglesia a él sometidos» es, para el Código, cisma. El Catecismo añade que quienes nacen hoy en las comunidades separadas «y son instruidos en la fe de Cristo, no pueden ser acusados del pecado de la separación y la Iglesia católica los abraza con respeto y amor fraternos» (y que las separaciones ocurrieron «a veces, no sin culpa de los hombres de ambas partes», 817).",
        sources: [
          {
            citations: ["CIC205", "CIC751"],
            label: "cann. 205 y 751",
          },
          {
            citations: ["CEC817", "CEC818"],
            label: "Catecismo 817–818",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Ante una definición",
        text: "A lo que el papa define ex cathedra, o el concilio con él, se adhiere el católico «con la obediencia de la fe»; pero «ninguna doctrina se considera definida infaliblemente si no consta así de modo manifiesto».",
        sources: [
          {
            citations: ["CEC891"],
            label: "Catecismo 891",
          },
          {
            citations: ["CIC749"],
            label: "can. 749 §3",
          },
        ],
      },
      {
        id: "CV-4",
        label: "Ante la enseñanza ordinaria",
        text: "A la enseñanza ordinaria del papa se le debe «un asentimiento religioso del entendimiento y de la voluntad, sin que llegue a ser de fe»; su peso se conoce «por la índole de los documentos», «la frecuente proposición de la misma doctrina» o «la forma de decirlo».",
        sources: [
          {
            citations: ["CIC752"],
            label: "can. 752",
          },
          {
            citations: ["LG25"],
            label: "Lumen gentium 25",
          },
          {
            citations: ["CEC892"],
            label: "Catecismo 892",
          },
        ],
      },
      {
        id: "CV-5",
        label: "Obediencia y palabra",
        text: "Los fieles están obligados a seguir «todo aquello que los Pastores sagrados, en cuanto representantes de Cristo, declaran como maestros de la fe o establecen como rectores de la Iglesia»; y tienen «el derecho, y a veces incluso el deber», de manifestar su opinión a los pastores sobre el bien de la Iglesia.",
        sources: [
          {
            citations: ["CIC212"],
            label: "can. 212 §§1 y 3",
          },
        ],
      },
      {
        id: "CV-6",
        label: "Elección y renuncia",
        text: "Los cardenales eligen al papa; el elegido obtiene la potestad plena «mediante la elección legítima por él aceptada juntamente con la consagración episcopal»; si renuncia, la renuncia debe ser «libre» y manifestarse formalmente, «pero no que sea aceptada por nadie».",
        sources: [
          {
            citations: ["CIC349"],
            label: "can. 349",
          },
          {
            citations: ["CIC332"],
            label: "can. 332",
          },
        ],
      },
      {
        id: "CV-7",
        label: "Sede vacante",
        text: "Al quedar vacante la sede romana, «nada se ha de innovar en el régimen de la Iglesia universal».",
        sources: [
          {
            citations: ["CIC335"],
            label: "can. 335",
          },
        ],
      },
      {
        id: "CV-8",
        label: "Los obispos",
        text: "«El Sumo Pontífice nombra libremente a los Obispos, o confirma a los que han sido legítimamente elegidos»; los obispos solo ejercen sus funciones de enseñar y regir «en comunión jerárquica con la cabeza y con los miembros del Colegio».",
        sources: [
          {
            citations: ["CIC377"],
            label: "can. 377 §1",
          },
          {
            citations: ["CIC375"],
            label: "can. 375 §2",
          },
        ],
      },
      {
        id: "CV-9",
        label: "Profesión de fe",
        text: "Quienes asumen ciertos oficios en la Iglesia deben emitir personalmente la profesión de fe «según la fórmula aprobada por la Sede Apostólica».",
        sources: [
          {
            citations: ["CIC833"],
            label: "can. 833",
          },
        ],
      },
      {
        id: "CV-10",
        label: "El concilio",
        text: "El concilio ecuménico es la forma solemne en que el colegio de los obispos ejerce la potestad suprema; sus decretos obligan solo si el papa los aprueba, confirma y promulga.",
        sources: [
          {
            citations: ["CIC337"],
            label: "can. 337 §1",
          },
          {
            citations: ["CIC341"],
            label: "can. 341 §1",
          },
          {
            citations: ["LG22"],
            label: "Lumen gentium 22",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Qué significa, para la Iglesia católica, que una enseñanza sea dogma, doctrina definitiva, magisterio auténtico o disciplina.",
    grades: {
      dogma: {
        label: "Dogma",
        sub: "de fe divina y católica",
        definition:
          "Se ha de creer con fe divina y católica todo aquello que se contiene en la palabra de Dios escrita o transmitida por tradición, es decir, en el único depósito de la fe encomendado a la Iglesia, y que además es propuesto como revelado por Dios, ya sea por el magisterio solemne de la Iglesia, ya por su magisterio ordinario y universal",
        source: {
          citations: ["CIC750"],
          label: "Código de Derecho Canónico, can. 750 §1",
        },
      },
      definitive: {
        label: "Doctrina definitiva",
        definition:
          "Se han de aceptar y retener firmemente todas y cada una de las cosas sobre la doctrina de la fe y las costumbres propuestas de modo definitivo por el magisterio de la Iglesia",
        source: {
          citations: ["CIC750"],
          label: "Código de Derecho Canónico, can. 750 §2",
        },
      },
      magisterium: {
        label: "Magisterio auténtico",
        definition:
          "Se ha de prestar un asentimiento religioso del entendimiento y de la voluntad, sin que llegue a ser de fe, a la doctrina que el Sumo Pontífice o el Colegio de los Obispos, en el ejercicio de su magisterio auténtico, enseñan acerca de la fe y de las costumbres",
        source: {
          citations: ["CIC752"],
          label: "Código de Derecho Canónico, can. 752",
        },
      },
      discipline: {
        label: "Disciplina",
        definition:
          "Las decisiones magisteriales en materia de disciplina, aunque no estén garantizadas por el carisma de la infalibilidad, no están desprovistas de la asistencia divina y requieren la adhesión de los fieles.",
        source: {
          citations: ["DV17"],
          label: "Donum veritatis 17",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
