import type { DoctrinePage } from "@/content/model/doctrine-page";
import type { CitationId } from "@/content/registry/citations";

export const solaScripturaDoctrine = {
  doctrine: "sola-scriptura",
  status: "draft",
  lede: "¿Qué autoridad tiene la Escritura, y quién decide lo que significa?",
  legend: { witnessId: "sw-irenaeus-2", citationLabel: "Contra las herejías III.4.1–2" },
  fingerprint: {
    marks: [
      { year: 180, circa: true, label: "Ireneo de Lyon, Contra las herejías" },
      { year: 318, circa: true, label: "Atanasio de Alejandría, Contra los paganos" },
      { year: 348, circa: true, label: "Cirilo de Jerusalén, Catequesis IV" },
      { year: 374, label: "Basilio de Cesarea, Sobre el Espíritu Santo" },
      { year: 397, circa: true, label: "Agustín de Hipona, Sobre la doctrina cristiana" },
      { year: 408, circa: true, label: "Jerónimo (pasaje usado en Dei Verbum 25)" },
      { year: 434, label: "Vicente de Lérins, Conmonitorio" },
      { year: 1530, label: "Confesión de Augsburgo" },
      { year: 1531, label: "Apología de la Confesión de Augsburgo" },
      { year: 1537, label: "Artículos de Esmalcalda" },
      { year: 1546, label: "Concilio de Trento, sesión IV" },
      { year: 1564, label: "Profesión de fe tridentina" },
      { year: 1577, label: "Fórmula de Concordia" },
      { year: 1647, label: "Confesión de Westminster" },
      { year: 1853, label: "Confesión de New Hampshire" },
      { year: 1870, label: "Concilio Vaticano I, Dei Filius" },
      { year: 1893, label: "León XIII, Providentissimus Deus" },
      { year: 1943, label: "Pío XII, Divino afflante Spiritu" },
      { year: 1950, label: "Pío XII, Humani generis" },
      { year: 1964, label: "Concilio Vaticano II, Lumen gentium" },
      { year: 1965, label: "Concilio Vaticano II, Dei Verbum" },
      { year: 1983, label: "Código de Derecho Canónico" },
      { year: 1992, label: "Catecismo de la Iglesia Católica" },
      { year: 2000, label: "Fe y Mensaje Bautistas 2000" },
      { year: 2010, label: "Benedicto XVI, Verbum Domini" },
      { year: 2015, label: "Asambleas de Dios, Inspiración, inerrancia y autoridad de la Escritura" },
    ],
  },
  common: {
    text: "Las cinco tradiciones tienen la Escritura —los libros proféticos y apostólicos— por una norma o autoridad para juzgar lo que se enseña. Sobre si toda la verdad necesaria para la fe está en ella, quién decide su sentido y qué libros la forman, discrepan las tradiciones que se pronuncian.",
    questions: [
      "¿Toda la verdad necesaria para la fe está en la Escritura?",
      "¿Quién decide el sentido de la Escritura?",
      "¿Qué libros forman la Escritura?",
    ],
  },
  answers: {
    subtitle: "Cada tradición, en sus propias palabras. Debajo de cada una, las objeciones que recibe.",
    items: [
      {
        tradition: "catholic",
        summary:
          "La Iglesia no deriva solamente de la Sagrada Escritura su certeza acerca de todas las verdades reveladas: la Escritura y la Tradición forman un solo depósito de la palabra de Dios, cuya interpretación auténtica corresponde al magisterio.",
        grade: { grade: "dogma", basis: "definido en Trento (sesión IV, 1546)" },
        objections: [
          { id: "OB-1" },
          { id: "OB-2" },
          { id: "OB-3" },
          { id: "OB-4" },
          { id: "OB-5" },
          { id: "OB-6" },
          { id: "OB-7" },
        ],
      },
      {
        tradition: "orthodox",
        summary:
          "La divina y sagrada Escritura es enseñada por Dios, y los libros canónicos se confiesan Sagrada Escritura por la transmisión de la Iglesia.",
        grade: {
          basis: "Confesión de Dositeo, decreto II (1672)",
          definition: {
            label: "Confesión de Dositeo (Jerusalén, 1672)",
            definition:
              "Confesión del Sínodo de Jerusalén de 1672. Pedro Mogila tiene la aprobación patriarcal de su revisión griega del 11 de marzo de 1643, limitada al griego y no a toda traducción posterior.",
            source: { citations: ["ODositheusII"], label: "Dositeo II" },
          },
        },
        objections: [
          { title: "A la Escritura no se ha de añadir nada, ni revelaciones nuevas ni tradiciones de hombres" },
          { title: "Los concilios, los antiguos escritores y los decretos se juzgan por la Escritura" },
        ],
      },
      {
        tradition: "lutheran",
        summary:
          "Los escritos proféticos y apostólicos del Antiguo y del Nuevo Testamento son la única regla y norma según la cual deben juzgarse todas las doctrinas y todos los maestros.",
        grade: {
          basis: "Fórmula de Concordia, Epítome, Regla y norma 1 (1577)",
          definition: {
            label: "Escritura: única regla y norma",
            definition:
              "«la única regla y norma según la cual deben ser estimados y juzgados todos los dogmas y todos los maestros» son «los escritos proféticos y apostólicos del Antiguo y del Nuevo Testamento» (unicam regulam et normam); «la sola Sagrada Escritura es reconocida como juez, norma y regla», «piedra de toque»",
            source: { citations: ["LFCEpRN_1_y_7"], label: "Epítome RN 1 y 7" },
          },
        },
        objections: [
          { title: "La Escritura no es la única fuente: la Tradición se recibe con igual reverencia" },
          { title: "La interpretación de la Escritura pertenece a la Iglesia, no a cada lector" },
        ],
      },
      {
        tradition: "reformed",
        summary:
          "Todos los libros de ambos Testamentos fueron dados por inspiración de Dios para ser la regla de la fe y de la práctica.",
        grade: {
          basis: "Confesión de Westminster 1.2 (1647)",
          definition: {
            label: "Estándares de Westminster",
            definition:
              "La Confesión y los Catecismos de Westminster son normas subordinadas a la Escritura: los concilios pueden errar y ayudan a la fe sin constituir su regla (Confesión 31.4); sus determinaciones, si concuerdan con la Escritura, se reciben con reverencia y sumisión (Confesión 31.3).",
            source: { citations: ["RWCF31_3_4"], label: "Westminster 31.3–4" },
          },
        },
        objections: [
          { title: "La Escritura no es la única fuente: la Tradición se recibe con igual reverencia" },
          { title: "La interpretación pertenece a la Iglesia, no a cada lector" },
        ],
      },
      {
        tradition: "baptist",
        summary:
          "La Biblia fue escrita por hombres divinamente inspirados y es la norma suprema por la que deben examinarse toda conducta humana, los credos y las opiniones.",
        grade: {
          basis: "Confesión de New Hampshire, art. I (1853)",
          definition: {
            label: "Confesiones de la convención",
            definition:
              "La Confesión de New Hampshire de 1853 es una confesión histórica, sin jurisdicción bautista universal. Fe y Mensaje Bautistas 2000, enmendada en 2023, es la declaración de la convención nombrada: guía y rendición de cuentas doctrinal bajo la Escritura, revisable, no infalible ni una norma que obligue la conciencia como la Escritura.",
            source: { citations: ["BNHI"], label: "New Hampshire I" },
          },
        },
        objections: [
          { title: "La Escritura no es la única fuente: la Tradición se recibe con igual reverencia" },
          { title: "La interpretación pertenece a la Iglesia, no a cada lector" },
        ],
      },
    ],
  },
  witnesses: {
    subtitle: "Testigos de los primeros siglos, en orden de fecha. Esta sección es neutral.",
    historyLink: {
      label: "La historia completa de la autoridad de la Escritura",
      note: "Concilios, controversias y confesiones de fe, hasta hoy.",
    },
    items: [
      {
        id: "sw-irenaeus-1",
        entity: "irenaeus-of-lyon",
        author: "Ireneo de Lyon",
        work: "Contra las herejías",
        locator: "III.1.1",
        date: { year: 180, yearEnd: 189, circa: true },
        quote:
          "lo que en un tiempo proclamaron en público y, más tarde, por voluntad de Dios, nos transmitieron en las Escrituras, para que fuera fundamento y columna de nuestra fe",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 1 (Roberts y Rambaut), 1885.",
        note: "La obra se conserva solo en latín. Este pasaje y el siguiente (III.4.1–2) se leen juntos.",
      },
      {
        id: "sw-irenaeus-2",
        entity: "irenaeus-of-lyon",
        author: "Ireneo de Lyon",
        work: "Contra las herejías",
        locator: "III.4.1–2",
        date: { year: 180, yearEnd: 189, circa: true },
        quote:
          "Pues ¿qué sería si los apóstoles mismos no nos hubieran dejado escritos? ¿No sería necesario [en ese caso] seguir el curso de la tradición que transmitieron a aquellos a quienes confiaron las Iglesias? [...] teniendo la salvación escrita en sus corazones por el Espíritu, sin papel ni tinta, y conservando con cuidado la antigua tradición, creyendo en un solo Dios, Creador del cielo y de la tierra y de todo lo que hay en ellos, por medio de Cristo Jesús, el Hijo de Dios",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 1 (Roberts y Rambaut), 1885.",
        note: "La obra se conserva solo en latín. La entrada reúne dos citas del mismo pasaje.",
      },
      {
        id: "sw-athanasius",
        entity: "athanasius-of-alexandria",
        author: "Atanasio de Alejandría",
        work: "Contra los paganos",
        locator: "§ 1",
        date: { year: 318, circa: true },
        quote:
          "Pues aunque las sagradas y inspiradas Escrituras son suficientes para declarar la verdad, — y además hay otras obras de nuestros bienaventurados maestros compuestas con este fin; quien dé con ellas ganará algún conocimiento de la interpretación de las Escrituras y podrá aprender lo que desea saber, — con todo, como no tenemos ahora a mano las composiciones de nuestros maestros, debemos comunicaros por escrito lo que de ellos aprendimos […]",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 4, 1892.",
        note: "La fecha es la «probable» de la tabla cronológica de la edición.",
      },
      {
        id: "sw-cyril",
        entity: "cyril-of-jerusalem",
        author: "Cirilo de Jerusalén",
        work: "Catequesis IV",
        locator: "§ 17",
        date: { year: 348, circa: true },
        quote:
          "Pues acerca de los divinos y santos misterios de la Fe, no debe transmitirse ni siquiera una afirmación ocasional sin las Santas Escrituras; ni debemos dejarnos arrastrar por la mera verosimilitud y los artificios del discurso. Ni siquiera a mí, que te digo estas cosas, des crédito absoluto, a menos que recibas la prueba de lo que te anuncio desde las Divinas Escrituras.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 7, 1894.",
        note: "La fecha es una inferencia del editor, no una fecha impresa.",
      },
      {
        id: "sw-basil",
        entity: "basil-of-caesarea",
        author: "Basilio de Cesarea",
        work: "Sobre el Espíritu Santo",
        locator: "27.66",
        date: { year: 374 },
        quote:
          'De las creencias y prácticas, ya sean de aceptación general o prescritas públicamente, que se conservan en la Iglesia, algunas las poseemos derivadas de la enseñanza escrita; otras las hemos recibido transmitidas "en misterio" por la tradición de los apóstoles; y unas y otras, en relación con la verdadera religión, tienen la misma fuerza. Y a estas nadie se opondrá; nadie, al menos, que esté medianamente versado en las instituciones de la Iglesia. Pues si intentáramos rechazar las costumbres que no tienen autoridad escrita, con el pretexto de que su importancia es pequeña, dañaríamos sin querer el Evangelio en sus mismas entrañas; o más bien, haríamos de nuestra definición pública una mera frase y nada más.',
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 8, 1895.",
      },
      {
        id: "sw-augustine",
        entity: "augustine-of-hippo",
        author: "Agustín de Hipona",
        work: "Sobre la doctrina cristiana",
        locator: "II.8.12",
        date: { year: 397 },
        quote:
          "Ahora bien, en cuanto a las Escrituras canónicas, debe seguir el parecer del mayor número de iglesias católicas; y entre estas, por supuesto, se ha de dar un lugar alto a las que han sido tenidas por dignas de ser sede de un apóstol y de recibir cartas. Por consiguiente, entre las Escrituras canónicas juzgará según la norma siguiente: preferir las que son recibidas por todas las iglesias católicas a las que algunas no reciben. Entre las que no son recibidas por todas, preferirá las que tienen el respaldo del mayor número y de mayor autoridad, a las que son sostenidas por el menor número y de menor autoridad.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF1 vol. 2, 1887.",
      },
      {
        id: "sw-vincent",
        entity: "vincent-of-lerins",
        author: "Vicente de Lérins",
        work: "Conmonitorio",
        locator: "II",
        date: { year: 434 },
        quote:
          "Pero aquí quizá alguien pregunte: puesto que el canon de la Escritura es completo y suficiente de por sí para todo, y más que suficiente, ¿qué necesidad hay de unirle la autoridad de la interpretación de la Iglesia? Por esta razón: porque, debido a la profundidad de la Santa Escritura, no todos la aceptan en un mismo sentido […] Por tanto, es muy necesario, a causa de las tan grandes complicaciones de tan variados errores, que la regla para la recta inteligencia de los profetas y los apóstoles se ajuste a la norma de la interpretación eclesiástica y católica.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 11, 1894.",
        note: "El año es la inferencia de la edición, a partir de una referencia al concilio de Éfeso (431).",
      },
    ],
  },
  practice: {
    subtitle:
      "Lo que dicen de la lectura y la enseñanza de la Escritura los textos oficiales de cada tradición: cómo se lee, cómo se traduce y cómo se enseña lo recibido.",
    aspects: [
      {
        id: "personal-reading",
        label: "Lectura personal de la Biblia",
        cells: {
          catholic: {
            text: "La Iglesia recomienda insistentemente a todos sus fieles la lectura asidua de la Escritura, con oración",
            sources: [{ citations: ["CEC2653"], label: "Catecismo 2653" }],
          },
          orthodox: {
            text: "Dositeo, pregunta I, se lee distinto en dos ediciones: en Schaff (1896) la respuesta a si todos los cristianos deben leer la Escritura es «No»; en Robertson (1899), a un fiel se le priva injustamente si se le priva de oír o leer las Escrituras. Las ediciones no están cotejadas",
            sources: [
              {
                citations: [],
                label:
                  "Confesión de Dositeo, pregunta I (Schaff, 1896, p. 433, y Robertson, 1899; español de Doctrina asistido por IA)",
              },
            ],
          },
          lutheran: {
            text: "No se halló un texto que mande a cada laico leer la Escritura misma; los textos hablan de leer el Catecismo, que es un compendio y breve resumen de toda la Escritura",
            sources: [
              {
                citations: ["LFCEpRN_5"],
                label:
                  "Catecismo Mayor, prefacio; Fórmula de Concordia, Epítome, Regla y norma 5 (Triglot, inglés, 1921; español de Doctrina asistido por IA)",
              },
            ],
          },
          reformed: {
            text: "Ha de leerse por sí mismos y con sus familias, y por eso se traduce a las lenguas comunes",
            sources: [
              { citations: ["RWCF1_8", "RWLC156"], label: "Confesión de Westminster 1.8; Catecismo Mayor 156" },
            ],
          },
          baptist: {
            text: "Los textos leídos no afirman una regla de lectura solo privada",
            sources: [{ citations: ["BBFMI"], label: "Fe y Mensaje Bautistas I y VIII; preámbulo" }],
          },
        },
      },
      {
        id: "how-read",
        label: "Cómo debe leerse",
        cells: {
          catholic: {
            text: "Con oración; lectio divina en cuatro pasos",
            sources: [{ citations: ["CEC2653", "VD87"], label: "Catecismo 2653; Verbum Domini 87" }],
          },
          orthodox: {
            text: "La claridad para quienes la leen: es el tema de la pregunta II de Dositeo",
            sources: [
              {
                citations: ["ODositheusII"],
                label: "Confesión de Dositeo, pregunta II (español de Doctrina asistido por IA)",
              },
            ],
          },
          lutheran: {
            text: "No se halló una regla sobre cómo leerla; lo que las Confesiones afirman es la norma: solo las Escrituras proféticas y apostólicas son el único juez, regla y norma",
            sources: [
              {
                citations: ["LFCEpRN_1_y_7"],
                label:
                  "Fórmula de Concordia, Epítome, Regla y norma 1 y 7 (Triglot, inglés, 1921; español de Doctrina asistido por IA)",
              },
            ],
          },
          reformed: {
            text: "Con alta y reverente estima, con deseo de conocer, creer y obedecer, con meditación y oración",
            sources: [
              {
                citations: ["RWLC157"],
                label: "Catecismo Mayor de Westminster 157 (español de Doctrina asistido por IA)",
              },
            ],
          },
          baptist: {
            text: "Las confesiones son guías de interpretación, no autoridad sobre la conciencia",
            sources: [{ citations: ["BBFMpre_mbulo"], label: "Fe y Mensaje Bautistas, preámbulo" }],
          },
        },
      },
      {
        id: "worship",
        label: "En el culto y la predicación",
        cells: {
          catholic: {
            text: "Lecturas, salmos y homilía; la homilía no se puede omitir sin causa grave los domingos",
            sources: [
              {
                citations: ["SC24", "CIC767"],
                label: "Sacrosanctum Concilium 24; Código de Derecho Canónico, can. 767",
              },
            ],
          },
          orthodox: {
            text: "Los Salmos están en uso continuo en el culto divino de la Iglesia",
            sources: [{ citations: ["OPhilaret42"], label: "Catecismo extenso de Filareto, pregunta 42 (1839)" }],
          },
          lutheran: {
            text: "La potestad eclesial se ejerce enseñando la Palabra y administrando los sacramentos",
            sources: [{ citations: ["LACXXVIII_8"], label: "Confesión de Augsburgo XXVIII.8" }],
          },
          reformed: {
            text: "La Palabra debe ser predicada solo por quienes están suficientemente dotados y son llamados",
            sources: [{ citations: ["RWLC158"], label: "Catecismo Mayor de Westminster 158" }],
          },
          baptist: {
            text: "Los pasajes leídos dicen poco sobre el culto y la predicación",
            sources: [{ citations: [], label: "Fe y Mensaje Bautistas VI y VII" }],
          },
        },
      },
      {
        id: "translations",
        label: "Traducciones y ediciones",
        cells: {
          catholic: {
            text: "Los libros de la Escritura se publican con aprobación de la Sede Apostólica o de la Conferencia Episcopal; las traducciones llevan notas",
            sources: [{ citations: ["CIC825"], label: "Código de Derecho Canónico, can. 825" }],
          },
          orthodox: {
            text: "Dositeo no nombra edición ni traducción; su pregunta I, vecina, es la que se muestra en «Lectura personal», con la diferencia entre las dos ediciones",
            sources: [
              {
                citations: [],
                label:
                  "Confesión de Dositeo, pregunta I (Schaff, 1896, p. 433, y Robertson, 1899; español de Doctrina asistido por IA)",
              },
            ],
          },
          lutheran: {
            text: "Habla de una versión concreta: rechaza que se traduzca Hechos 3:21 de otra manera; no nombra una traducción recomendada",
            sources: [
              {
                citations: ["LFCEpVII"],
                label:
                  "Fórmula de Concordia, Epítome VII, tesis rechazada 8 (Triglot, inglés, 1921; español de Doctrina asistido por IA)",
              },
            ],
          },
          reformed: {
            text: "La Escritura ha de traducirse a las lenguas comunes",
            sources: [
              { citations: ["RWCF1_8", "RWLC156"], label: "Confesión de Westminster 1.8; Catecismo Mayor 156" },
            ],
          },
          baptist: {
            text: "Los textos leídos no dicen nada sobre traducciones ni ediciones",
            sources: [
              {
                citations: ["BBFMI", "BNHI"],
                label: "Fe y Mensaje Bautistas I (leído entero); Confesión de New Hampshire I",
              },
            ],
          },
        },
      },
      {
        id: "teaching",
        label: "Cómo se enseña lo recibido",
        cells: {
          catholic: {
            text: "La catequesis y la predicación se fundan en la sagrada Escritura, la Tradición, la liturgia, el magisterio y la vida de la Iglesia",
            sources: [{ citations: ["CIC760", "CIC833"], label: "Código de Derecho Canónico, cáns. 760, 833" }],
          },
          orthodox: {
            text: "Los libros canónicos se confiesan Sagrada Escritura por la transmisión de la Iglesia",
            sources: [{ citations: ["ODositheusQuestion_III"], label: "Confesión de Dositeo, pregunta III" }],
          },
          lutheran: {
            text: "La enseñanza se juzga por la Escritura; los catecismos se usaron en iglesias, escuelas y casas (informe histórico)",
            sources: [
              {
                citations: ["LFCEpRN_1_y_7", "LFCSDRN_8"],
                label: "Fórmula de Concordia, Epítome, Regla y norma 1 y 7; Declaración Sólida, Regla y norma 8",
              },
            ],
          },
          reformed: {
            text: "Escuchar y examinar por la Escritura lo que se predica",
            sources: [{ citations: ["RWLC160"], label: "Catecismo Mayor de Westminster 160" }],
          },
          baptist: {
            text: "Las confesiones sirven para rendir cuentas en la doctrina y son revisables",
            sources: [
              { citations: ["BBFMpre_mbulo"], label: "Fe y Mensaje Bautistas, preámbulo (resumen de Doctrina)" },
            ],
          },
        },
      },
    ],
  },
  connected: {
    subtitle: "Lo que cada tradición responde aquí pesa también en estas doctrinas.",
    items: [
      {
        doctrine: "papacy",
        text: "Quién ha recibido autoridad para enseñar es la pregunta de Papado: allí los textos católicos, ortodoxos, luteranos y reformados responden sobre el papa, y los católicos, luteranos y reformados sobre la roca y las llaves; los textos bautistas leídos no nombran al papa.",
      },
    ],
  },
} satisfies DoctrinePage<CitationId>;
