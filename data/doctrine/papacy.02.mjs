const ai = "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público:";

const page = {
  lede: "¿Quién tiene autoridad en la Iglesia, y hasta dónde llega?",
  legend: { witnessId: "pw-irenaeus", citationLabel: "Contra las herejías III.3.2" },
  fingerprint: [
    [107, 110, "Ignacio de Antioquía, A los romanos"],
    [180, 0, "Ireneo de Lyon, Contra las herejías", true],
    [251, 0, "Cipriano de Cartago, Sobre la unidad de la Iglesia", true],
    [256, 0, "Firmiliano de Cesarea, carta a Cipriano"],
    [325, 0, "I Concilio de Nicea"],
    [343, 344, "Concilio de Sárdica"],
    [376, 377, "Jerónimo, Carta a Dámaso"],
    [440, 0, "León Magno, Sermón III", true],
    [451, 0, "Concilio de Calcedonia"],
    [594, 595, "Gregorio Magno, Carta a Mauricio"],
    [681, 0, "III Concilio de Constantinopla"],
    [1302, 0, "Bonifacio VIII, Unam sanctam"],
    [1439, 0, "Concilio de Florencia, Laetentur caeli"],
    [1537, 0, "Artículos de Esmalcalda"],
    [1537, 0, "Tratado sobre el poder y la primacía del papa"],
    [1647, 0, "Confesión de Westminster"],
    [1672, 0, "Sínodo de Jerusalén (Confesión de Dositeo)"],
    [1848, 0, "Encíclica de los patriarcas orientales"],
    [1853, 0, "Confesión de New Hampshire"],
    [1870, 0, "Concilio Vaticano I, Pastor aeternus"],
    [1895, 0, "Encíclica patriarcal y sinodal"],
    [1932, 0, "Breve declaración de la Iglesia Luterana, Sínodo de Misuri"],
    [1964, 0, "Concilio Vaticano II, Lumen gentium"],
    [1983, 0, "Código de Derecho Canónico"],
    [1992, 0, "Catecismo de la Iglesia Católica"],
    [1995, 0, "Juan Pablo II, Ut unum sint"],
    [1998, 0, "Congregación para la Doctrina de la Fe, El primado del sucesor de Pedro"],
    [2000, 0, "Fe y Mensaje Bautistas 2000"],
  ],
  common: {
    text: "Las cinco tradiciones ponen a la Iglesia bajo el señorío de Cristo, a quien sus textos llaman su cabeza o su Señor, y describen en ella un ministerio con oficios propios. Entre las tradiciones que se pronuncian sobre ello, discrepan sobre si alguna autoridad humana está por encima de la iglesia local y sobre quién puede definir la doctrina sin error; sobre la roca y las llaves argumentan los textos católicos, luteranos y reformados.",
    questions: [
      "¿Hay en la Iglesia alguna autoridad humana por encima de la iglesia local?",
      "¿Puede una persona o una asamblea definir la doctrina sin error?",
      "¿A quién se dieron las llaves y qué es la roca?",
    ],
  },
  answersSubtitle: "Cada tradición, en sus propias palabras. Debajo de cada una, las objeciones que recibe.",
  answers: [
    {
      tradition: "catholic",
      summary:
        "Cristo puso a Pedro al frente de los apóstoles, y ese oficio continúa en el obispo de Roma. El papa tiene sobre toda la Iglesia una potestad plena, suprema e inmediata, y es infalible cuando define solemnemente una doctrina de fe o costumbres.",
      grade: "dogma",
      basis: "definido en el Vaticano I (Pastor aeternus, 1870)",
    },
    {
      tradition: "orthodox",
      summary:
        "Jesucristo es la cabeza de la Iglesia. La gobiernan los patriarcas y el Santo Sínodo, y un concilio ecuménico es la autoridad que puede actuar sobre toda la Iglesia.",
      gradeId: "catechism",
      basis: "Catecismo extenso de Filareto, preguntas 272 y 278 (1839)",
    },
    {
      tradition: "lutheran",
      summary:
        "Según el Tratado sobre el poder y la primacía del papa, quienes presiden las iglesias tienen el mandato de enseñar el evangelio, perdonar los pecados y administrar los sacramentos, con la misma potestad por derecho divino. El obispo de Roma no es superior a los demás por derecho divino.",
      gradeId: "confession",
      basis: "Tratado 60 (1537)",
    },
    {
      tradition: "reformed",
      summary:
        "No hay otra cabeza de la Iglesia sino el Señor Jesucristo. Él dio a su Iglesia visible el ministerio, los oráculos y las ordenanzas; la gobiernan oficiales distintos del magistrado civil, y los sínodos y concilios pueden errar.",
      gradeId: "standards",
      basis: "Confesión de Westminster 25.1 y 25.6 (1647)",
    },
    {
      tradition: "baptist",
      summary:
        "La iglesia es una congregación local autónoma de creyentes bautizados, bajo el señorío de Cristo, con dos oficios: pastor y diácono. Los textos leídos no nombran al papa.",
      gradeId: "confession",
      basis: "Confesión de New Hampshire, art. XIII (1853)",
    },
  ],
  witnessesSubtitle: "Testigos de los primeros siglos, en orden de fecha. Esta sección es neutral.",
  historyLink: {
    label: "La historia completa del papado",
    note: "Concilios, controversias y confesiones de fe, hasta hoy.",
  },
  witnesses: [
    {
      src: "P-W1",
      id: "pw-ignatius",
      entity: "ignatius-of-antioch",
      author: "Ignacio de Antioquía",
      work: "Carta a los Romanos",
      locator: "salutación",
      date: { year: 107, yearEnd: 110, circa: true },
      edition: `${ai} ANF vol. 1 (Roberts y Donaldson), 1885.`,
      note: "No se cotejó la recensión ni el griego «προκαθημένη τῆς ἀγάπης».",
    },
    {
      src: "P-W2",
      id: "pw-irenaeus",
      entity: "irenaeus-of-lyon",
      author: "Ireneo de Lyon",
      work: "Contra las herejías",
      locator: "III.3.2",
      date: { year: 180, yearEnd: 189, circa: true },
      edition: `${ai} ANF vol. 1 (Roberts y Rambaut), 1885.`,
      note: "La obra se conserva solo en latín, y los traductores de ANF advierten que el sentido de esta frase no es seguro.",
    },
    {
      src: "P-W3",
      id: "pw-cyprian",
      entity: "cyprian-of-carthage",
      author: "Cipriano de Cartago",
      work: "Sobre la unidad de la Iglesia",
      locator: "4",
      date: { year: 251, circa: true },
      edition: `${ai} ANF vol. 5, 1888.`,
      note: "Se muestra el texto recibido tal como lo imprime ANF. El año no se pudo confirmar en una edición fechada.",
    },
    {
      src: "P-W4",
      id: "pw-firmilian",
      author: "Firmiliano de Cesarea",
      work: "Carta a Cipriano",
      locator: "LXXIV (ANF)",
      date: { year: 256 },
      edition: `${ai} ANF vol. 5, 1886.`,
      note: "Traducción latina de una carta griega perdida.",
    },
    {
      src: "P-W5",
      id: "pw-nicaea-6",
      author: "I Concilio de Nicea",
      work: "Cánones",
      locator: "canon 6",
      date: { year: 325 },
      edition: `${ai} NPNF2 vol. 14, 1900.`,
    },
    {
      src: "P-W10",
      id: "pw-sardica",
      author: "Concilio de Sárdica",
      work: "Cánones",
      locator: "canon III",
      date: { year: 343, alsoYears: [344] },
      edition: `${ai} NPNF2 vol. 14, 1900.`,
      note: "La edición da dos versiones del canon; se muestra la primera.",
    },
    {
      src: "P-W6",
      id: "pw-jerome-15",
      entity: "jerome",
      author: "Jerónimo",
      work: "Carta XV a Dámaso",
      locator: "§ 2",
      date: { year: 376, alsoYears: [377] },
      edition: `${ai} NPNF2 vol. 6, 1893.`,
    },
    {
      src: "P-W9",
      id: "pw-leo",
      entity: "leo-the-great",
      author: "León Magno",
      work: "Sermón III",
      locator: "cap. III",
      date: { year: 440, circa: true },
      edition: `${ai} NPNF2 vol. 12, 1895.`,
      note: "Es un sermón del aniversario de su elevación; la edición no imprime el año. Fue ordenado el 29 de septiembre de 440.",
    },
    {
      src: "P-W7",
      id: "pw-chalcedon-28",
      author: "Concilio de Calcedonia",
      work: "Cánones",
      locator: "canon 28",
      date: { year: 451 },
      edition: `${ai} NPNF2 vol. 14, 1900.`,
    },
    {
      src: "P-W8",
      id: "pw-gregory",
      entity: "gregory-the-great",
      author: "Gregorio Magno",
      work: "Carta V.XX al emperador Mauricio",
      locator: "Libro V, carta XX",
      date: { year: 594, yearEnd: 595, circa: true },
      edition: `${ai} NPNF2 vol. 12, 1895.`,
      note: "La edición fecha el libro V en 594–595; la carta no trae año propio. Se muestran dos pasajes de la misma carta.",
    },
  ],
  practiceSubtitle:
    "Lo que dicen de la autoridad en la Iglesia los textos oficiales de cada tradición: quién gobierna, cómo se nombra, cómo se juzgan las controversias y dónde se expresa la unidad.",
  practice: [
    {
      id: "governs",
      label: "Quién gobierna",
      cells: {
        catholic: [
          "El papa con el colegio de los obispos: «junto con su Cabeza, el Romano Pontífice, y nunca sin esta Cabeza»",
          "Lumen gentium 22; Código de Derecho Canónico, cáns. 375, 377",
          ["LG22", "CIC375", "CIC377"],
        ],
        orthodox: [
          "Los patriarcas y el Santo Sínodo; el obispo gobierna su iglesia particular",
          "Catecismo extenso de Filareto, pregunta 279 (forma sinodal rusa del siglo XIX); Confesión de Dositeo, decreto 10 (español de Doctrina asistido por IA)",
          ["OPhilaret279", "ODositheusX"],
        ],
        lutheran: [
          "Pastores, presbíteros u obispos con la misma potestad por derecho divino",
          "Tratado sobre el poder y la primacía del papa 61",
          ["LTr61"],
        ],
        reformed: [
          "Oficiales eclesiásticos distintos del magistrado civil: «Rey y Cabeza» es Cristo",
          "Confesión de Westminster 30.1",
          ["RWCF30_1"],
        ],
        baptist: [
          "La congregación local autónoma de creyentes bautizados; pastor y diácono",
          "Fe y Mensaje Bautistas VI",
          ["BBFMVI"],
        ],
      },
    },
    {
      id: "appointed",
      label: "Cómo se elige o nombra",
      cells: {
        catholic: [
          "Los cardenales eligen al papa; el papa nombra libremente a los obispos o confirma a los elegidos (Iglesia latina)",
          "Código de Derecho Canónico, cáns. 349, 377",
          ["CIC349", "CIC377"],
        ],
        orthodox: [
          "La elección se hace en el sínodo propio, y el obispo es ordenado por dos o tres obispos",
          "Confesión de Dositeo, decreto 10 (español de Doctrina asistido por IA)",
          ["ODositheusX"],
        ],
        lutheran: [
          "La iglesia tiene principalmente el derecho de llamar ministros",
          "Tratado sobre el poder y la primacía del papa 24",
          ["LTr24"],
        ],
        reformed: [
          "Los textos leídos no dan un procedimiento; la Palabra ha de ser predicada solo por quienes son debidamente aprobados y llamados a ese oficio",
          "Catecismo Mayor de Westminster 158 (español de Doctrina asistido por IA)",
          ["RWLC158"],
        ],
        baptist: [
          "Cada congregación obra bajo el señorío de Cristo por procesos democráticos y nombra dos oficios; ningún texto leído describe un procedimiento",
          "Fe y Mensaje Bautistas VI; Confesión de New Hampshire XIII (español de Doctrina asistido por IA)",
          ["BBFMVI", "BNHXIII"],
        ],
      },
    },
    {
      id: "controversies",
      label: "Cómo se juzgan las controversias",
      cells: {
        catholic: [
          "El concilio ecuménico ejerce la potestad suprema con el papa, y sus decretos obligan si el papa los aprueba",
          "Código de Derecho Canónico, cáns. 337, 341",
          ["CIC337", "CIC341"],
        ],
        orthodox: [
          "Un concilio ecuménico es la autoridad que puede actuar sobre toda la Iglesia",
          "Catecismo extenso de Filareto, pregunta 278 (1839)",
          ["OPhilaret278"],
        ],
        lutheran: [
          "Los juicios sinodales son juicios de la iglesia, según la Palabra de Dios",
          "Tratado sobre el poder y la primacía del papa 56 (resumen de Doctrina)",
          ["LTr56"],
        ],
        reformed: [
          "Los sínodos y concilios determinan las controversias; sus decisiones conformes a la Palabra se reciben con sumisión, y pueden errar",
          "Confesión de Westminster 31.3–4 (numeración de la edición de Edimburgo, 1894)",
          [],
        ],
        baptist: [
          "Las asociaciones y convenciones no tienen autoridad sobre las iglesias; ningún texto leído nombra un órgano que resuelva disputas",
          "Fe y Mensaje Bautistas XIV; Confesión de New Hampshire XIII (español de Doctrina asistido por IA)",
          ["BNHXIII"],
        ],
      },
    },
    {
      id: "owed",
      label: "Qué se debe a la enseñanza de los pastores",
      cells: {
        catholic: [
          "Asentimiento religioso del entendimiento y de la voluntad a la enseñanza ordinaria del papa; obediencia de la fe a lo definido",
          "Código de Derecho Canónico, can. 752; Catecismo 891",
          ["CIC752", "CEC891"],
        ],
        orthodox: [
          "La obediencia se aprende de la Escritura, los cánones, los concilios, los Padres y las reglas eclesiásticas",
          "Catecismo extenso de Filareto, pregunta 282 (1839)",
          ["OPhilaret282"],
        ],
        lutheran: [
          "Las congregaciones deben obedecer a los obispos que enseñan el Evangelio; si enseñan algo contra el Evangelio, tienen un mandato de Dios que les prohíbe obedecer",
          "Confesión de Augsburgo XXVIII.21–23 (Triglot, inglés, 1921; español de Doctrina asistido por IA)",
          ["AC28_21"],
        ],
        reformed: [
          "Recibir con reverencia y sumisión lo que es conforme a la Palabra",
          "Confesión de Westminster 31.3 (numeración de la edición de Edimburgo, 1894)",
          [],
        ],
        baptist: [
          "Los textos leídos no dicen qué se debe a la enseñanza de los pastores; cada miembro es responsable ante Cristo como Señor",
          "Fe y Mensaje Bautistas VI y XIV; Confesión de New Hampshire XIII",
          ["BBFMVI", "BNHXIII"],
        ],
      },
    },
    {
      id: "discipline",
      label: "Disciplina",
      cells: {
        catholic: [
          "El cisma es el rechazo de la sujeción al Sumo Pontífice; se exige profesión de fe para ciertos oficios",
          "Código de Derecho Canónico, cáns. 751, 833",
          ["CIC751", "CIC833"],
        ],
        orthodox: [
          "El texto del Catecismo extenso (pregunta 275) no se leyó; solo sus referencias bíblicas",
          "Catecismo extenso de Filareto, pregunta 275",
          [],
        ],
        lutheran: [
          "Jurisdicción para excomulgar a quienes tienen delitos conocidos y absolver a quienes se arrepienten",
          "Tratado sobre el poder y la primacía del papa 60",
          ["LTr60"],
        ],
        reformed: [
          "Amonestación, suspensión de la Cena y excomunión",
          "Confesión de Westminster 30.4",
          ["RWCF30_4"],
        ],
        baptist: [
          "Los textos leídos no tienen una frase sobre la disciplina de la iglesia",
          "Fe y Mensaje Bautistas VI y XIV; Confesión de New Hampshire XIII–XIV",
          ["BBFMVI"],
        ],
      },
    },
    {
      id: "unity",
      label: "Dónde se expresa la unidad",
      cells: {
        catholic: [
          "En cada Misa se nombra al papa como signo y servidor de la unidad",
          "Catecismo 1369",
          ["CEC1369"],
        ],
        orthodox: [
          "La unidad se expresa por la unidad del Credo y por la comunión en la oración y los sacramentos",
          "Catecismo extenso de Filareto, pregunta 261 (1839)",
          [],
        ],
        lutheran: [
          "Obispos unidos en doctrina, fe, sacramentos, oración y amor, bajo Cristo como cabeza",
          "Artículos de Esmalcalda II.4.9 (resumen de Doctrina)",
          ["LSAII_4_7_9"],
        ],
        reformed: [
          "Los santos están obligados a mantener entre sí una comunión santa en el culto de Dios",
          "Confesión de Westminster 25.1 y 26.2 (edición de Monterrey, 1880)",
          ["RWCF25_1"],
        ],
        baptist: [
          "Armonía espiritual y cooperación voluntaria para fines comunes entre grupos del pueblo de Cristo",
          "Fe y Mensaje Bautistas XIV; Confesión de New Hampshire XIII",
          ["BNHXIII"],
        ],
      },
    },
  ],
  connectedSubtitle: "Lo que cada tradición responde aquí pesa también en estas doctrinas.",
  connected: [
    [
      "sola-scriptura",
      "Quién juzga las controversias de fe es también la pregunta de Sola Scriptura: los textos católicos ponen en la Iglesia el juicio sobre el sentido de la Escritura ({c:DV10|Dei Verbum 10}); el texto reformado dice que los sínodos y concilios pueden errar y muchos han errado (Confesión de Westminster 31.4, edición de Edimburgo, 1894; traducción de Doctrina asistida por IA).",
    ],
    [
      "baptism",
      "Los textos católicos definen la plena comunión por «los vínculos de la profesión de fe, de los sacramentos y del régimen eclesiástico» ({c:CIC205|Código de Derecho Canónico, can. 205}) y piden que los bautizados en una comunidad no católica no sean bautizados bajo condición salvo duda seria ({c:CIC869|can. 869 §2}); la página de Bautismo muestra qué dice cada tradición sobre la repetición del bautismo.",
    ],
  ],
};

export default page;
