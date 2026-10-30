import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const eucharistReformed = {
  doctrine: "eucharist",
  tradition: "reformed",
  status: "draft",
  title: "La posición reformada",
  lede: "Cómo los Estándares de Westminster entienden la Cena del Señor, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan los Estándares de Westminster sobre la Cena del Señor, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "Para los Estándares de Westminster, la Cena del Señor es el sacramento instituido por Cristo para que la Iglesia anuncie y recuerde perpetuamente su único sacrificio, selle sus beneficios a los creyentes y los alimente espiritualmente en comunión con él y entre sí. El pan y el vino siguen siendo pan y vino; sin embargo, para quienes los reciben dignamente, Cristo y los beneficios de su muerte son recibidos real y verdaderamente por la fe, de manera espiritual.",
      grades: [
        {
          kind: "church",
          grade: "standards",
          basis: "Confesión de Westminster 29.1, 29.5 y 29.7",
        },
      ],
      sources: [
        {
          citations: ["RWCF29_1"],
          label: "Westminster 29.1",
        },
        {
          citations: ["RWCF29_7"],
          label: "Westminster 29.7",
        },
        {
          citations: ["RWCF29_5"],
          label: "Westminster 29.5",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la institución y la duración",
        text: "Según la Confesión de Westminster (29.1): Cristo instituyó la Cena la noche en que fue entregado, y debe observarse en la Iglesia hasta el fin del mundo.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.1",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_1"],
            label: "Westminster 29.1",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la finalidad",
        text: "Según la Confesión de Westminster (29.1): Es recuerdo perpetuo del sacrificio de Cristo, sello de sus beneficios, alimento y crecimiento espiritual, compromiso de obediencia y vínculo de comunión con Cristo y con su cuerpo.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.1",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_1"],
            label: "Westminster 29.1",
          },
        ],
      },
      {
        id: "QE-3",
        short: "el único sacrificio",
        text: "Según la Confesión de Westminster (29.2): La Cena no vuelve a ofrecer a Cristo ni realiza otro sacrificio por los vivos o los muertos: conmemora su ofrenda única y responde con alabanza.",
        status: ["STWCF~er"],
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.2",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_2"],
            label: "Westminster 29.2",
          },
        ],
      },
      {
        id: "QE-4",
        short: "el signo y la cosa significada",
        text: "Según la Confesión de Westminster (29.5): Los elementos guardan una relación sacramental con Cristo crucificado y por eso reciben sacramentalmente los nombres de su cuerpo y sangre.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.5",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_5"],
            label: "Westminster 29.5",
          },
        ],
      },
      {
        id: "QE-5",
        short: "la permanencia de los elementos",
        text: "Según la Confesión de Westminster (29.5): Después de ser apartados para el uso instituido, siguen siendo verdadera y sustancialmente pan y vino.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.5",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_5"],
            label: "Westminster 29.5",
          },
        ],
      },
      {
        id: "QE-6",
        short: "la presencia y la recepción",
        text: "Según la Confesión de Westminster (29.7): Los comulgantes dignos se alimentan real y verdaderamente de Cristo crucificado y reciben sus beneficios por la fe, espiritual y no corporalmente.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.7",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_7"],
            label: "Westminster 29.7",
          },
        ],
      },
      {
        id: "QE-7",
        short: "el lugar del cuerpo de Cristo",
        text: "Según la Confesión de Westminster (29.7): Su cuerpo y sangre no están corporal o carnalmente «en, con o bajo» el pan y el vino; están tan realmente, aunque espiritualmente, presentes a la fe como los elementos a los sentidos.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.7",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_7"],
            label: "Westminster 29.7",
          },
        ],
      },
      {
        id: "QE-8",
        short: "la recepción indigna",
        text: "Según la Confesión de Westminster (29.8): Quien recibe indignamente toma los elementos, pero no la cosa significada; se hace culpable del cuerpo y la sangre del Señor para su condenación.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.8",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_8"],
            label: "Westminster 29.8",
          },
        ],
      },
      {
        id: "QE-9",
        short: "la administración",
        text: "Según la Confesión de Westminster (29.3): Los ministros pronuncian las palabras de institución, oran, apartan pan y vino, parten el pan, toman la copa y dan ambos elementos a los comulgantes presentes.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.3",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_3"],
            label: "Westminster 29.3",
          },
        ],
      },
      {
        id: "QE-10",
        short: "la preparación",
        text: "Según el Catecismo Menor de Westminster (97) y el Catecismo Mayor de Westminster (171): El participante debe examinarse y acercarse con fe, arrepentimiento, amor y nueva obediencia.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Catecismo Menor 97 y Catecismo Mayor 171",
          },
        ],
        sources: [
          {
            citations: ["RWSC97"],
            label: "Catecismo Menor de Westminster 97",
          },
          {
            citations: ["RWLC171"],
            label: "Catecismo Mayor de Westminster 171",
          },
        ],
      },
      {
        id: "QE-11",
        short: "la transubstanciación",
        question: "¿El pan y el vino cambian de sustancia?",
        text: "No. La Confesión de Westminster (29.6) rechaza la transubstanciación porque entiende que contradice la Escritura, el carácter sacramental del signo y la permanencia sensible del pan y del vino.",
        status: ["STWCF~er"],
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.6",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_6"],
            label: "Westminster 29.6",
          },
        ],
      },
      {
        id: "QE-12",
        short: "la ofrenda por vivos y difuntos",
        question: "¿La Cena ofrece de nuevo a Cristo por vivos o muertos?",
        text: "No. La Confesión de Westminster (29.2) la llama conmemoración de la ofrenda de Cristo «una vez para siempre», no un sacrificio propiciatorio nuevo.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.2",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_2"],
            label: "Westminster 29.2",
          },
        ],
      },
      {
        id: "QE-13",
        short: "adorar y reservar los elementos",
        question: "¿Deben adorarse, elevarse, procesionarse o reservarse los elementos?",
        text: "No. La Confesión de Westminster (29.4) juzga esas prácticas contrarias a la naturaleza e institución de la Cena; también rechaza misas privadas y negar la copa al pueblo.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.4",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_4"],
            label: "Westminster 29.4",
          },
        ],
      },
      {
        id: "QE-14",
        short: "lo espiritual y lo real",
        question: "¿“Espiritual” significa imaginario o meramente simbólico?",
        text: "No. La Confesión de Westminster (29.7) insiste en «real y verdaderamente»: niega una recepción corporal, no la participación real de la fe en Cristo y sus beneficios.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.7",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_7"],
            label: "Westminster 29.7",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para los Estándares de Westminster, la Cena se funda en la institución de Cristo: él ordenó dar y recibir pan y vino, y vinculó ese acto con el anuncio de su muerte (Confesión 27.1–3 y 29.1).",
      "Y el signo no reemplaza la realidad espiritual: el pan y el vino conservan su sustancia, pero guardan una relación sacramental tan estrecha con Cristo crucificado que reciben los nombres de su cuerpo y sangre (Confesión 29.5).",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para los Estándares de Westminster, la Cena se lee bajo la suficiencia de la ofrenda única de Cristo: la Iglesia proclama, recuerda y agradece esa muerte, sin repetirla ni añadir otra propiciación (Confesión 29.2).",
  },
  scriptureSubtitle: "Los pasajes que los Estándares de Westminster citan sobre la Cena del Señor, y cómo los leen.",
  scripture: [
    {
      refs: ["Matt.26.26-Matt.26.28", "Mark.14.22-Mark.14.24", "Luke.22.19-Luke.22.20", "1Cor.11.23-1Cor.11.26"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para institución, memoria y proclamación hasta que Cristo venga (la Confesión de Westminster (29.1), 29.3; el Catecismo Mayor (168)–169; el Catecismo Menor (96)).",
    },
    {
      refs: ["1Cor.10.16-1Cor.10.17", "1Cor.10.21", "1Cor.12.13"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para comunión real con Cristo y unidad del cuerpo (la Confesión de Westminster (29.1), 29.7; el Catecismo Mayor (168), 170; el Catecismo Menor (96)).",
    },
    {
      refs: [
        "Heb.7.23-Heb.7.24",
        "Heb.7.27",
        "Heb.9.22",
        "Heb.9.25-Heb.9.26",
        "Heb.9.28",
        "Heb.10.11-Heb.10.12",
        "Heb.10.14",
        "Heb.10.18",
      ],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para ofrenda única, no repetida (la Confesión de Westminster (29.2)).",
    },
    {
      refs: ["Matt.26.26-Matt.26.29", "1Cor.11.26-1Cor.11.28"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para pan y vino permanecen como elementos (la Confesión de Westminster (29.5)).",
    },
    {
      refs: ["Acts.3.21", "Luke.24.6", "Luke.24.39", "1Cor.11.24-1Cor.11.26"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para humanidad corporal de Cristo recibida en el cielo (la Confesión de Westminster (29.6); el Catecismo Mayor (170)).",
    },
    {
      refs: ["1Cor.10.3-1Cor.10.4", "1Cor.10.16", "1Cor.11.28"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para participación espiritual por la fe (la Confesión de Westminster (29.7); el Catecismo Mayor (170)).",
    },
    {
      refs: ["1Cor.11.27-1Cor.11.32", "2Cor.13.5"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para examen y peligro de recepción indigna (la Confesión de Westminster (29.8); el Catecismo Mayor (171), 173; el Catecismo Menor (97)).",
    },
    {
      refs: ["1Cor.5.7-1Cor.5.8", "1Cor.10.16-1Cor.10.17", "1Cor.11.31"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para arrepentimiento, amor y nueva obediencia (el Catecismo Mayor (171); el Catecismo Menor (97)).",
    },
    {
      refs: ["Acts.2.42", "Acts.2.46-Acts.2.47", "1Cor.11.25-1Cor.11.26"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para frecuencia y perseverancia (el Catecismo Mayor (175), 177).",
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
      "Para los Estándares de Westminster, quien comulga se examina antes, atiende durante y considera después su conducta (Catecismo Mayor 171–175).",
      "La Cena se administra repetidamente a quienes tienen edad y capacidad para examinarse (Catecismo Mayor 173 y 177).",
    ],
    items: [
      {
        id: "CV-1",
        label: "Antes",
        text: "El comulgante se examina acerca de su unión con Cristo, sus pecados, su conocimiento, su fe, su arrepentimiento, su amor, su perdón y su deseo de Cristo y de nueva obediencia, y renueva esas gracias con meditación y oración; el examen no exige ausencia de dudas (Catecismo Mayor 171–172; Catecismo Menor 97).",
        sources: [
          {
            citations: ["RWLC171_172"],
            label: "Catecismo Mayor de Westminster 171–172",
          },
          {
            citations: ["RWSC97"],
            label: "Catecismo Menor de Westminster 97",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Durante",
        text: "La congregación recibe ambos elementos de un ministro de la Palabra; los participantes atienden con reverencia, observan las acciones sacramentales, disciernen el cuerpo del Señor y meditan en su muerte (Confesión 29.3; Catecismo Mayor 169 y 174).",
        sources: [
          {
            citations: ["RWCF29_3"],
            label: "Westminster 29.3",
          },
          {
            citations: ["RWLC169"],
            label: "Catecismo Mayor de Westminster 169",
          },
          {
            citations: ["RWLC174"],
            label: "Catecismo Mayor de Westminster 174",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Después",
        text: "El creyente considera su conducta y el fruto de la celebración; si recibió consuelo, agradece, pide continuidad, vigila contra recaídas, cumple sus votos y persevera en la Cena (Catecismo Mayor 175).",
        sources: [
          {
            citations: ["RWLC175"],
            label: "Catecismo Mayor de Westminster 175",
          },
        ],
      },
      {
        id: "CV-4",
        label: "Admisión y frecuencia",
        text: "La Cena se administra repetidamente a quienes tienen edad y capacidad para examinarse; la Iglesia puede excluir a quien permanece ignorante o escandaloso hasta que reciba instrucción y muestre reforma (Confesión 29.8; Catecismo Mayor 173 y 177).",
        sources: [
          {
            citations: ["RWCF29_8"],
            label: "Westminster 29.8",
          },
          {
            citations: ["RWLC173"],
            label: "Catecismo Mayor de Westminster 173",
          },
          {
            citations: ["RWLC177"],
            label: "Catecismo Mayor de Westminster 177",
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
        label: "Escritura: única regla infalible",
        definition: "Juez final de toda controversia; la autoridad de la Iglesia es ministerial y declarativa.",
        source: {
          citations: ["RWCF1_10"],
          label: "Westminster 1.10",
        },
      },
      standards: {
        label: "Estándares subordinados de Westminster",
        definition:
          "Vinculan especialmente a los oficiales según la forma de suscripción de cada cuerpo; son falibles y reformables bajo la Escritura.",
        source: {
          citations: ["RWCF31_3_4"],
          label: "Westminster 31.3–4",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
