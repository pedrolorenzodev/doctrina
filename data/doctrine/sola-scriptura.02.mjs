const ai = "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público:";
const dositheus =
  "Confesión de Dositeo, pregunta I (Schaff, 1896, p. 433, y Robertson, 1899; español de Doctrina asistido por IA)";

const page = {
  lede: "¿Qué autoridad tiene la Escritura, y quién decide lo que significa?",
  legend: { witnessId: "sw-irenaeus-2", citationLabel: "Contra las herejías III.4.1–2" },
  fingerprint: [
    [180, 0, "Ireneo de Lyon, Contra las herejías", true],
    [318, 0, "Atanasio de Alejandría, Contra los paganos", true],
    [348, 0, "Cirilo de Jerusalén, Catequesis IV", true],
    [374, 0, "Basilio de Cesarea, Sobre el Espíritu Santo"],
    [397, 0, "Agustín de Hipona, Sobre la doctrina cristiana", true],
    [408, 0, "Jerónimo (pasaje usado en Dei Verbum 25)", true],
    [434, 0, "Vicente de Lérins, Conmonitorio"],
    [1530, 0, "Confesión de Augsburgo"],
    [1531, 0, "Apología de la Confesión de Augsburgo"],
    [1537, 0, "Artículos de Esmalcalda"],
    [1546, 0, "Concilio de Trento, sesión IV"],
    [1564, 0, "Profesión de fe tridentina"],
    [1577, 0, "Fórmula de Concordia"],
    [1647, 0, "Confesión de Westminster"],
    [1853, 0, "Confesión de New Hampshire"],
    [1870, 0, "Concilio Vaticano I, Dei Filius"],
    [1893, 0, "León XIII, Providentissimus Deus"],
    [1943, 0, "Pío XII, Divino afflante Spiritu"],
    [1950, 0, "Pío XII, Humani generis"],
    [1964, 0, "Concilio Vaticano II, Lumen gentium"],
    [1965, 0, "Concilio Vaticano II, Dei Verbum"],
    [1983, 0, "Código de Derecho Canónico"],
    [1992, 0, "Catecismo de la Iglesia Católica"],
    [2000, 0, "Fe y Mensaje Bautistas 2000"],
    [2010, 0, "Benedicto XVI, Verbum Domini"],
    [2015, 0, "Asambleas de Dios, Inspiración, inerrancia y autoridad de la Escritura"],
  ],
  common: {
    text: "Las cinco tradiciones tienen la Escritura —los libros proféticos y apostólicos— por una norma o autoridad para juzgar lo que se enseña. Sobre si toda la verdad necesaria para la fe está en ella, quién decide su sentido y qué libros la forman, discrepan las tradiciones que se pronuncian.",
    questions: [
      "¿Toda la verdad necesaria para la fe está en la Escritura?",
      "¿Quién decide el sentido de la Escritura?",
      "¿Qué libros forman la Escritura?",
    ],
  },
  answersSubtitle: "Cada tradición, en sus propias palabras. Debajo de cada una, las objeciones que recibe.",
  answers: [
    {
      tradition: "catholic",
      summary:
        "La Iglesia no deriva solamente de la Sagrada Escritura su certeza acerca de todas las verdades reveladas: la Escritura y la Tradición forman un solo depósito de la palabra de Dios, cuya interpretación auténtica corresponde al magisterio.",
      grade: "dogma",
      basis: "definido en Trento (sesión IV, 1546)",
    },
    {
      tradition: "orthodox",
      summary:
        "La divina y sagrada Escritura es enseñada por Dios, y los libros canónicos se confiesan Sagrada Escritura por la transmisión de la Iglesia.",
      gradeId: "confession",
      basis: "Confesión de Dositeo, decreto II (1672)",
    },
    {
      tradition: "lutheran",
      summary:
        "Los escritos proféticos y apostólicos del Antiguo y del Nuevo Testamento son la única regla y norma según la cual deben juzgarse todas las doctrinas y todos los maestros.",
      gradeId: "scripture",
      basis: "Fórmula de Concordia, Epítome, Regla y norma 1 (1577)",
    },
    {
      tradition: "reformed",
      summary:
        "Todos los libros de ambos Testamentos fueron dados por inspiración de Dios para ser la regla de la fe y de la práctica.",
      gradeId: "standards",
      basis: "Confesión de Westminster 1.2 (1647)",
    },
    {
      tradition: "baptist",
      summary:
        "La Biblia fue escrita por hombres divinamente inspirados y es la norma suprema por la que deben examinarse toda conducta humana, los credos y las opiniones.",
      gradeId: "confession",
      basis: "Confesión de New Hampshire, art. I (1853)",
    },
  ],
  witnessesSubtitle: "Testigos de los primeros siglos, en orden de fecha. Esta sección es neutral.",
  historyLink: {
    label: "La historia completa de la autoridad de la Escritura",
    note: "Concilios, controversias y confesiones de fe, hasta hoy.",
  },
  witnesses: [
    {
      src: "S-W1",
      id: "sw-irenaeus-1",
      entity: "irenaeus-of-lyon",
      author: "Ireneo de Lyon",
      work: "Contra las herejías",
      locator: "III.1.1",
      date: { year: 180, yearEnd: 189, circa: true },
      edition: `${ai} ANF vol. 1 (Roberts y Rambaut), 1885.`,
      note: "La obra se conserva solo en latín. Este pasaje y el siguiente (III.4.1–2) se leen juntos.",
    },
    {
      src: "S-W2",
      id: "sw-irenaeus-2",
      entity: "irenaeus-of-lyon",
      author: "Ireneo de Lyon",
      work: "Contra las herejías",
      locator: "III.4.1–2",
      date: { year: 180, yearEnd: 189, circa: true },
      edition: `${ai} ANF vol. 1 (Roberts y Rambaut), 1885.`,
      note: "La obra se conserva solo en latín. La entrada reúne dos citas del mismo pasaje.",
    },
    {
      src: "SS-W5",
      id: "sw-athanasius",
      entity: "athanasius-of-alexandria",
      author: "Atanasio de Alejandría",
      work: "Contra los paganos",
      locator: "§ 1",
      date: { year: 318, circa: true },
      edition: `${ai} NPNF2 vol. 4, 1892.`,
      note: "La fecha es la «probable» de la tabla cronológica de la edición.",
    },
    {
      src: "SS-W6",
      id: "sw-cyril",
      entity: "cyril-of-jerusalem",
      author: "Cirilo de Jerusalén",
      work: "Catequesis IV",
      locator: "§ 17",
      date: { year: 348, circa: true },
      edition: `${ai} NPNF2 vol. 7, 1894.`,
      note: "La fecha es una inferencia del editor, no una fecha impresa.",
    },
    {
      src: "SS-W8",
      id: "sw-basil",
      entity: "basil-of-caesarea",
      author: "Basilio de Cesarea",
      work: "Sobre el Espíritu Santo",
      locator: "27.66",
      date: { year: 374 },
      edition: `${ai} NPNF2 vol. 8, 1895.`,
    },
    {
      src: "SS-W9",
      id: "sw-augustine",
      entity: "augustine-of-hippo",
      author: "Agustín de Hipona",
      work: "Sobre la doctrina cristiana",
      locator: "II.8.12",
      date: { year: 397 },
      edition: `${ai} NPNF1 vol. 2, 1887.`,
    },
    {
      src: "SS-W7",
      id: "sw-vincent",
      entity: "vincent-of-lerins",
      author: "Vicente de Lérins",
      work: "Conmonitorio",
      locator: "II",
      date: { year: 434 },
      edition: `${ai} NPNF2 vol. 11, 1894.`,
      note: "El año es la inferencia de la edición, a partir de una referencia al concilio de Éfeso (431).",
    },
  ],
  practiceSubtitle:
    "Lo que dicen de la lectura y la enseñanza de la Escritura los textos oficiales de cada tradición: cómo se lee, cómo se traduce y cómo se enseña lo recibido.",
  practice: [
    {
      id: "personal-reading",
      label: "Lectura personal de la Biblia",
      cells: {
        catholic: [
          "La Iglesia recomienda insistentemente a todos sus fieles la lectura asidua de la Escritura, con oración",
          "Catecismo 2653",
          ["CEC2653"],
        ],
        orthodox: [
          "Dositeo, pregunta I, se lee distinto en dos ediciones: en Schaff (1896) la respuesta a si todos los cristianos deben leer la Escritura es «No»; en Robertson (1899), a un fiel se le priva injustamente si se le priva de oír o leer las Escrituras. Las ediciones no están cotejadas",
          dositheus,
          [],
        ],
        lutheran: [
          "No se halló un texto que mande a cada laico leer la Escritura misma; los textos hablan de leer el Catecismo, que es un compendio y breve resumen de toda la Escritura",
          "Catecismo Mayor, prefacio; Fórmula de Concordia, Epítome, Regla y norma 5 (Triglot, inglés, 1921; español de Doctrina asistido por IA)",
          ["LFCEpRN_5"],
        ],
        reformed: [
          "Ha de leerse por sí mismos y con sus familias, y por eso se traduce a las lenguas comunes",
          "Confesión de Westminster 1.8; Catecismo Mayor 156",
          ["RWCF1_8", "RWLC156"],
        ],
        baptist: [
          "Los textos leídos no afirman una regla de lectura solo privada",
          "Fe y Mensaje Bautistas I y VIII; preámbulo",
          ["BBFMI"],
        ],
      },
    },
    {
      id: "how-read",
      label: "Cómo debe leerse",
      cells: {
        catholic: [
          "Con oración; lectio divina en cuatro pasos",
          "Catecismo 2653; Verbum Domini 87",
          ["CEC2653", "VD87"],
        ],
        orthodox: [
          "La claridad para quienes la leen: es el tema de la pregunta II de Dositeo",
          "Confesión de Dositeo, pregunta II (español de Doctrina asistido por IA)",
          ["ODositheusII"],
        ],
        lutheran: [
          "No se halló una regla sobre cómo leerla; lo que las Confesiones afirman es la norma: solo las Escrituras proféticas y apostólicas son el único juez, regla y norma",
          "Fórmula de Concordia, Epítome, Regla y norma 1 y 7 (Triglot, inglés, 1921; español de Doctrina asistido por IA)",
          ["LFCEpRN_1_y_7"],
        ],
        reformed: [
          "Con alta y reverente estima, con deseo de conocer, creer y obedecer, con meditación y oración",
          "Catecismo Mayor de Westminster 157 (español de Doctrina asistido por IA)",
          ["RWLC157"],
        ],
        baptist: [
          "Las confesiones son guías de interpretación, no autoridad sobre la conciencia",
          "Fe y Mensaje Bautistas, preámbulo",
          ["BBFMpre_mbulo"],
        ],
      },
    },
    {
      id: "worship",
      label: "En el culto y la predicación",
      cells: {
        catholic: [
          "Lecturas, salmos y homilía; la homilía no se puede omitir sin causa grave los domingos",
          "Sacrosanctum Concilium 24; Código de Derecho Canónico, can. 767",
          ["SC24", "CIC767"],
        ],
        orthodox: [
          "Los Salmos están en uso continuo en el culto divino de la Iglesia",
          "Catecismo extenso de Filareto, pregunta 42 (1839)",
          ["OPhilaret42"],
        ],
        lutheran: [
          "La potestad eclesial se ejerce enseñando la Palabra y administrando los sacramentos",
          "Confesión de Augsburgo XXVIII.8",
          ["LACXXVIII_8"],
        ],
        reformed: [
          "La Palabra debe ser predicada solo por quienes están suficientemente dotados y son llamados",
          "Catecismo Mayor de Westminster 158",
          ["RWLC158"],
        ],
        baptist: [
          "Los pasajes leídos dicen poco sobre el culto y la predicación",
          "Fe y Mensaje Bautistas VI y VII",
          [],
        ],
      },
    },
    {
      id: "translations",
      label: "Traducciones y ediciones",
      cells: {
        catholic: [
          "Los libros de la Escritura se publican con aprobación de la Sede Apostólica o de la Conferencia Episcopal; las traducciones llevan notas",
          "Código de Derecho Canónico, can. 825",
          ["CIC825"],
        ],
        orthodox: [
          "Dositeo no nombra edición ni traducción; su pregunta I, vecina, es la que se muestra en «Lectura personal», con la diferencia entre las dos ediciones",
          dositheus,
          [],
        ],
        lutheran: [
          "Habla de una versión concreta: rechaza que se traduzca Hechos 3:21 de otra manera; no nombra una traducción recomendada",
          "Fórmula de Concordia, Epítome VII, tesis rechazada 8 (Triglot, inglés, 1921; español de Doctrina asistido por IA)",
          ["LFCEpVII"],
        ],
        reformed: [
          "La Escritura ha de traducirse a las lenguas comunes",
          "Confesión de Westminster 1.8; Catecismo Mayor 156",
          ["RWCF1_8", "RWLC156"],
        ],
        baptist: [
          "Los textos leídos no dicen nada sobre traducciones ni ediciones",
          "Fe y Mensaje Bautistas I (leído entero); Confesión de New Hampshire I",
          ["BBFMI", "BNHI"],
        ],
      },
    },
    {
      id: "teaching",
      label: "Cómo se enseña lo recibido",
      cells: {
        catholic: [
          "La catequesis y la predicación se fundan en la sagrada Escritura, la Tradición, la liturgia, el magisterio y la vida de la Iglesia",
          "Código de Derecho Canónico, cáns. 760, 833",
          ["CIC760", "CIC833"],
        ],
        orthodox: [
          "Los libros canónicos se confiesan Sagrada Escritura por la transmisión de la Iglesia",
          "Confesión de Dositeo, pregunta III",
          ["ODositheusQuestion_III"],
        ],
        lutheran: [
          "La enseñanza se juzga por la Escritura; los catecismos se usaron en iglesias, escuelas y casas (informe histórico)",
          "Fórmula de Concordia, Epítome, Regla y norma 1 y 7; Declaración Sólida, Regla y norma 8",
          ["LFCEpRN_1_y_7", "LFCSDRN_8"],
        ],
        reformed: [
          "Escuchar y examinar por la Escritura lo que se predica",
          "Catecismo Mayor de Westminster 160",
          ["RWLC160"],
        ],
        baptist: [
          "Las confesiones sirven para rendir cuentas en la doctrina y son revisables",
          "Fe y Mensaje Bautistas, preámbulo (resumen de Doctrina)",
          ["BBFMpre_mbulo"],
        ],
      },
    },
  ],
  connectedSubtitle: "Lo que cada tradición responde aquí pesa también en estas doctrinas.",
  connected: [
    [
      "papacy",
      "Quién ha recibido autoridad para enseñar es la pregunta de Papado: allí los textos católicos, ortodoxos, luteranos y reformados responden sobre el papa, y los católicos, luteranos y reformados sobre la roca y las llaves; los textos bautistas leídos no nombran al papa.",
    ],
  ],
};

export default page;
