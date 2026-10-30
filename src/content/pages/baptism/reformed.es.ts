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
    },
    {
      refs: ["1Cor.12.13"],
      text: "Se cita para la admisión en el cuerpo y el amor fraterno (Confesión 28.1; Catecismo Mayor 167).",
    },
    {
      refs: ["Rom.4.11"],
      text: "Se cita para el signo y el sello, el pacto y los beneficios sellados (Confesión 28.1 y 28.4; Catecismo Mayor 166–167).",
    },
    {
      refs: ["Col.2.11-Col.2.12"],
      text: "Se cita junto a la circuncisión y el bautismo en el pacto (Confesión 28.1 y 28.4; Catecismo Mayor 166–167).",
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
    },
    {
      refs: ["Mark.1.4"],
      text: "Se cita para la remisión de los pecados (Confesión 28.1).",
    },
    {
      refs: ["Acts.22.16"],
      text: "Se cita para el lavamiento de los pecados (Confesión 28.1, edición española).",
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
    },
    {
      refs: ["1Cor.7.14"],
      text: "Se cita para los hijos llamados santos (Confesión 28.4; Catecismo Mayor 166; Catecismo Menor 95).",
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
    },
    {
      refs: ["1Pet.3.21"],
      text: "Se cita para los beneficios y la buena conciencia (Catecismo Mayor 167; Catecismo Menor 95).",
    },
    {
      refs: ["Rom.6.22"],
      text: "Se cita para la santidad y la justicia de vida (Catecismo Mayor 167).",
    },
  ],
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
