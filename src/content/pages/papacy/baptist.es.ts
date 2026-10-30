import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const papacyBaptist = {
  doctrine: "papacy",
  tradition: "baptist",
  status: "draft",
  title: "La posición bautista",
  lede: "Cómo la línea de las convenciones bautistas entiende la Iglesia y su gobierno, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan la Confesión de New Hampshire y Fe y Mensaje Bautistas sobre la Iglesia, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de New Hampshire dice de la Iglesia: «una Iglesia visible de Cristo es una congregación de creyentes bautizados, asociados por pacto en la fe y la comunión del Evangelio».",
      grades: [
        {
          kind: "church",
          grade: "confession",
          basis: "Confesión de New Hampshire (1853), art. XIII",
        },
      ],
      sources: [
        {
          citations: ["BNHXIII"],
          label: "New Hampshire XIII",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la iglesia visible",
        text: "La Confesión de New Hampshire enseña: «una Iglesia visible de Cristo es una congregación de creyentes bautizados, asociados por pacto en la fe y la comunión del Evangelio».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de New Hampshire (1853), art. XIII",
          },
        ],
        sources: [
          {
            citations: ["BNHXIII"],
            label: "New Hampshire XIII",
          },
        ],
      },
      {
        id: "QE-2",
        short: "el señorío de Cristo",
        text: "Fe y Mensaje Bautistas habla del «señorío de Cristo». Su artículo VI describe una congregación local autónoma de creyentes bautizados, con comunión de pacto, las ordenanzas y las leyes de Cristo, misión del Evangelio y procesos democráticos bajo Cristo; cada miembro responde ante Cristo, y sus dos oficios bíblicos son pastor, anciano u obispo, y diácono. Nombra también el Cuerpo de Cristo, que incluye a los redimidos de toda edad y pueblo.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Fe y Mensaje Bautistas (2000), art. VI",
          },
        ],
        sources: [
          {
            citations: ["BBFMVI"],
            label: "Fe y Mensaje VI",
          },
        ],
      },
      {
        id: "QE-3",
        short: "lo que los textos no dicen del papa",
        text: "Los pasajes inspeccionados de la Confesión de New Hampshire (art. XIII) y de Fe y Mensaje Bautistas (art. VI y preámbulo) no nombran al papa ni ofrecen una exposición papal desarrollada. Eso no establece el silencio de todos los documentos bautistas ni de toda convención.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de New Hampshire (1853), art. XIII",
          },
          {
            kind: "church",
            grade: "confession",
            basis: "Fe y Mensaje Bautistas (2000), art. VI",
          },
        ],
        sources: [
          {
            citations: ["BNHXIII"],
            label: "New Hampshire XIII",
          },
          {
            citations: ["BBFMVI"],
            label: "Fe y Mensaje VI",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para estos artículos, los fundamentos positivos son el señorío de Cristo y el gobierno por sus leyes y su Palabra (Confesión de New Hampshire XIII; Fe y Mensaje VI) {c:BBFMVI|Fe y Mensaje VI}.",
      "No explican la relación de Pedro con la jurisdicción papal ni con la infalibilidad.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing: "No se aporta ningún argumento de otras familias bautistas ni compuesto por el sitio.",
  },
  scriptureSubtitle: "Los pasajes que los textos bautistas citan sobre la Iglesia y su gobierno, y cómo los leen.",
  scripture: [
    {
      refs: ["Matt.16.15-Matt.16.19", "Matt.18.15-Matt.18.20"],
      text: "Se imprime con todo el artículo sobre la Iglesia, sin una exposición petrina o papal aparte (Fe y Mensaje VI).",
    },
    {
      refs: [
        "Acts.2.41-Acts.2.42",
        "Acts.2.47",
        "Acts.5.11-Acts.5.14",
        "Acts.6.3-Acts.6.6",
        "Acts.13.1-Acts.13.3",
        "Acts.14.23",
        "Acts.14.27",
        "Acts.15.1-Acts.15.30",
        "Acts.16.5",
        "Acts.20.28",
      ],
      text: "Es parte del aparato del mismo artículo sobre la Iglesia (Fe y Mensaje VI).",
    },
    {
      refs: ["Rom.1.7", "1Cor.1.2", "1Cor.3.16", "1Cor.5.4-1Cor.5.5", "1Cor.7.17", "1Cor.9.13-1Cor.9.14", "1Cor.12"],
      text: "Es parte del aparato del mismo artículo; 1 Corintios 12 se imprime como capítulo (Fe y Mensaje VI).",
    },
    {
      refs: [
        "Eph.1.22-Eph.1.23",
        "Eph.2.19-Eph.2.22",
        "Eph.3.8-Eph.3.11",
        "Eph.3.21",
        "Eph.5.22-Eph.5.32",
        "Phil.1.1",
        "Col.1.18",
      ],
      text: "Es parte del mismo artículo, sin versículos asignados por el sitio a cada cláusula (Fe y Mensaje VI).",
    },
    {
      refs: [
        "1Tim.2.9-1Tim.2.14",
        "1Tim.3.1-1Tim.3.15",
        "1Tim.4.14",
        "Heb.11.39-Heb.11.40",
        "1Pet.5.1-1Pet.5.4",
        "Rev.2",
        "Rev.3",
        "Rev.21.2-Rev.21.3",
      ],
      text: "Es el resto del aparato del mismo artículo (Fe y Mensaje VI).",
    },
  ],
  videos: {
    subtitle: "Creadores bautistas explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura bautista. Abre cada una para leer en profundidad la respuesta de los textos bautistas.",
    videosSubtitle: "Creadores bautistas que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Los pasajes inspeccionados de la Confesión de New Hampshire (art. XIII) y de Fe y Mensaje Bautistas (art. VI) prescriben la comunión de la iglesia, las ordenanzas, las leyes de Cristo y el ministerio.",
      "No prescriben una observancia específicamente papal.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Comunión y ordenanzas",
        text: "La comunión de la iglesia, las ordenanzas, las leyes de Cristo y el ministerio (Confesión de New Hampshire XIII; Fe y Mensaje VI).",
        sources: [
          {
            citations: ["BNHXIII"],
            label: "New Hampshire XIII",
          },
          {
            citations: ["BBFMVI"],
            label: "Fe y Mensaje VI",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Misión y rendición de cuentas",
        text: "Fe y Mensaje Bautistas describe la misión, los procesos congregacionales y la rendición de cuentas de cada miembro ante Cristo (art. VI).",
        sources: [
          {
            citations: ["BBFMVI"],
            label: "Fe y Mensaje VI",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Una observancia específicamente papal",
        text: "Estos pasajes no prescriben ninguna observancia específicamente papal.",
        sources: [
          {
            citations: ["BNHXIII"],
            label: "New Hampshire XIII",
          },
          {
            citations: ["BBFMVI"],
            label: "Fe y Mensaje VI",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que los propios textos bautistas se aplican, con su definición en palabras de los textos.",
    grades: {
      scripture: {
        label: "Escritura: autoridad única",
        definition:
          "Según el preámbulo de Fe y Mensaje Bautistas, la autoridad única para la fe y la práctica está en la Escritura; las confesiones no tienen finalidad ni infalibilidad.",
        source: {
          citations: ["BBFMpre_mbulo~pb"],
          label: "Fe y Mensaje, preámbulo",
        },
      },
      confession: {
        label: "Confesiones de la convención",
        definition:
          "La Confesión de New Hampshire es una confesión histórica de la línea de la convención; Fe y Mensaje Bautistas es una declaración de la convención, con versiones fechadas. No se establece que cada cuerpo hispanohablante adopte una versión determinada.",
        source: {
          citations: ["BNHXIII"],
          label: "New Hampshire XIII",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
