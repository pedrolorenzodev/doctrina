import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const baptismOrthodox = {
  doctrine: "baptism",
  tradition: "orthodox",
  status: "draft",
  title: "La posición ortodoxa",
  lede: "Cómo la Iglesia ortodoxa entiende el bautismo, con sus propias fuentes.",
  teach: {
    subtitle: "Lo que enseñan los textos ortodoxos sobre el bautismo, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "Para el Catecismo extenso de Filareto, el bautismo es un sacramento en el cual el creyente, sumergido tres veces en agua en el nombre de Dios Padre, Hijo y Espíritu Santo, muere a la vida carnal del pecado y nace de nuevo del Espíritu a una vida espiritual y santa (pregunta 288).",
      grades: [
        {
          kind: "church",
          grade: "catechism",
          basis: "Catecismo extenso de Filareto, pregunta 288",
        },
      ],
      sources: [
        {
          citations: ["OPhilaret288"],
          label: "Filareto, pregunta 288",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la institución y la Trinidad",
        text: "La Confesión de Dositeo enseña: «El santo bautismo, instituido por el Señor y realizado en el nombre de la santa Trinidad».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVI",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVI"],
            label: "Dositeo XVI",
          },
        ],
      },
      {
        id: "QE-2",
        short: "el agua y su administración",
        text: "La Confesión de Dositeo enseña: «El bautismo se realiza con agua pura como materia y con ningún otro líquido». El Catecismo extenso de Filareto responde que el bautismo se administra por inmersión triple en agua, en el nombre del Padre, del Hijo y del Espíritu Santo (pregunta 290).",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVI",
          },
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 290",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVI"],
            label: "Dositeo XVI",
          },
          {
            citations: ["OPhilaret290"],
            label: "Filareto, pregunta 290",
          },
        ],
      },
      {
        id: "QE-3",
        short: "la remisión",
        text: "La Confesión de Dositeo enseña: «Los efectos del bautismo, en resumen, son, primero, la remisión de la falta ancestral y de cuantos otros pecados hubiera cometido el bautizado».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVI",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVI"],
            label: "Dositeo XVI",
          },
        ],
      },
      {
        id: "QE-4",
        short: "los niños y los padrinos",
        text: "Para el Catecismo extenso de Filareto, los niños se bautizan por la fe de sus padres y padrinos, que además deben enseñarles la fe cuando tengan edad para aprender (pregunta 292).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 292",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret292"],
            label: "Filareto, pregunta 292",
          },
        ],
      },
      {
        id: "QE-5",
        short: "un solo bautismo y la penitencia",
        text: "Para la confesión de Dositeo, el bautismo imprime un carácter indeleble; quien fue bautizado correctamente una vez no vuelve a bautizarse, incluso si después cae en pecado o reniega de la fe. El retorno al Señor recupera la adopción mediante el misterio del arrepentimiento. El Catecismo extenso de Filareto añade que el bautismo no puede repetirse (pregunta 303) y que después del pecado hay un camino, que es la penitencia (pregunta 306).",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVI",
          },
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, preguntas 303 y 306",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret303"],
            label: "Filareto, pregunta 303",
          },
          {
            citations: ["OPhilaret306"],
            label: "Filareto, pregunta 306",
          },
        ],
      },
      {
        id: "QE-6",
        short: "la recepción de conversos",
        text: "La Confesión de Dositeo habla de la recepción de quienes recibieron el bautismo con fe deficiente y dice que no se los bautiza de nuevo al adquirir la fe plena (decreto XV).",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XV",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXV"],
            label: "Dositeo XV",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para el Catecismo extenso de Filareto, el bautismo se funda en el mandato del Cristo resucitado a los apóstoles de ir, enseñar a todas las naciones y bautizarlas en el nombre del Padre, del Hijo y del Espíritu Santo (pregunta 289) {c:OPhilaret289|Filareto, pregunta 289}.",
      "Y la Confesión de Dositeo cita la palabra del Señor: «Quien no nazca de agua y Espíritu no entrará en el reino de los cielos» {c:ODositheusXVI|Dositeo XVI}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para la Confesión de Dositeo, los niños también necesitan el bautismo: «Si los niños son seres humanos, también ellos necesitan salvación; si necesitan salvación, necesitan también el bautismo» {c:ODositheusXVI|Dositeo XVI}.",
  },
  scriptureSubtitle: "Los pasajes que los textos ortodoxos citan sobre el bautismo, y cómo los leen.",
  scripture: [
    {
      refs: ["John.3.5"],
      text: "El Catecismo extenso de Filareto y la Confesión de Dositeo lo citan para el nacimiento de agua y de Espíritu, cada uno con su propia redacción (Filareto, pregunta 288; Dositeo, decreto XVI).",
      apologists: {
        arguments: [
          {
            title:
              "El nuevo nacimiento de Juan 3 es el santo bautismo; el «lavado de la regeneración» de Tito 3 es lo mismo",
            quotes: [
              {
                speaker: "Fr. Josiah Trenham",
                work: "5 Miracles That Happen at Baptism",
                outlet: "Patristic Nectar, YouTube",
                date: "9 de junio de 2026",
                locator: "Minutos 3:58 a 4:44",
                url: "https://www.youtube.com/watch?v=Dc8PHJ76uUY&t=238s",
                text: "life to God. This is how Christians live. A second miracle of holy baptism is new birth. Is new birth. We see this of course in Jesus's conversation with Nicodemus in the third chapter of St. John's gospel where Jesus speaks about being born from again being born again by water and the spirit. This is also a beautifully described by St. Paul in his epistle to his spiritual son Titus in chapter 3. I'll read this to you. It's a it's a beautiful text. But when the kindness of God our Savior, and his love for mankind appeared, he saved us not on the basis of deeds which we have done in righteousness, but according to his mercy, by the washing of regeneration and renewal by the Holy Spirit. Here again you have this beautiful description of holy baptism as a washing of regeneration and a renewal of the Holy Spirit. This is new birth, the",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.19.4"],
      text: "El Catecismo extenso lo cita para el bautismo de arrepentimiento de Juan y la fe en el que había de venir (Filareto, pregunta 289).",
    },
    {
      refs: ["Matt.28.19"],
      text: "El Catecismo extenso lo cita para el mandato del Cristo resucitado y el nombre trino (Filareto, pregunta 289).",
    },
    {
      refs: ["Acts.2.38"],
      text: "El Catecismo extenso lo cita para el arrepentimiento, el bautismo, la remisión y el don del Espíritu (Filareto, pregunta 291).",
    },
    {
      refs: ["Mark.16.16"],
      text: "El Catecismo extenso lo cita para la fe y el bautismo (Filareto, pregunta 291).",
    },
    {
      refs: ["Col.2.11-Col.2.12"],
      text: "El Catecismo extenso lo cita para la circuncisión y la sepultura con Cristo en el bautismo (Filareto, pregunta 294).",
      apologists: {
        arguments: [
          {
            title:
              "El bautismo es el modo en que se confieren los beneficios de la circuncisión de Cristo; el argumento de Pablo es que los gentiles no necesitan circuncisión propia",
            quotes: [
              {
                speaker: "the hosts of The Lord of Spirits",
                work: "Lord of Spirits - Baptism Now Saves [Ep. 54]",
                outlet: "Ancient Faith, YouTube",
                date: "11 de octubre de 2023",
                locator: "Minutos 1:06:46 a 1:10:53",
                url: "https://www.youtube.com/watch?v=iwQRhEwtQ-I&t=4006s",
                text: "of God right um and so there is a place that I already alluded to right which occurs in the epistle reading for the Feast of Christ circumcision it's actually Colossians uh where Saint Paul really pulls all of these ideas we've just been discussing together all in one place okay yes so Colossians chapter 2 verses 8 through 12. Saint Paul says see to it that no one takes you captive by philosophy and empty deceit according to human tradition according to the elemental spirits of the world and not according to Christ for in him the whole fullness of deity dwells bodily and you have been filled in him who is the head of all Rule and Authority in him also you were circumcised with a circumcision made without hands by cutting off the body of the flesh by the circumcision of Christ having been buried with him in baptism in which you were also raised with him through faithfulness in the powerful working of God who raised him from the dead and so here we have very clearly right the benefits of Christ's circumcision are bestowed upon these Gentiles in colossae explicitly through baptism yeah so it sets up the same relationship as um being the wife or daughter of a circumcised man in the old Covenant you know because the church is the bride of Christ and so therefore the relationship in this in these terms is the same Christ's circumcision counts for the church all right and this is why Hebrews and several other places talk about Christ sanctifying himself before his crucifixion hmm and that's those are weird passages that people kind of don't know like why did he have like Christ was holy the whole time right why did he have to sanctify himself what is it this is talking about that him being set apart so that that can be bestowed upon us right uh as his bride through his circumcision and so this is the ultimate argument from Saint Paul as to why Gentile Christians not only don't have to get circumcised to be able to receive the Eucharist and be full participants in in Christian right ritual life but should not be yeah because for Saint Paul by demanding that they be circumcised individually In the Flesh as he says that would be replacing Christ circumcision for Saint Paul with their own yeah it would be like if you were baptized in the church and then you decided to go get your own baptism somewhere else because you felt like it wasn't right it wasn't it didn't really do the job or whatever you know it would be saying I'm not going to be made Holy by Christ I'm going to make myself holy yeah and this is why this contact St Paul talks about people trying to establish their own righteousness right rather than receiving the righteousness of Christ through faithfulness yeah it's not about yeah I mean if you think about that like right people talking about him talking about people establishing their own righteousness that's often especially in in Reformation framework is read as you know stop trying to do good things Christ has already done good things but right that's not what's going on it's the establishment of righteousness it's not just doing good things right and that righteousness is received through faithfulness yeah which involves keeping Commandments yep if you love me you will keep my Commandments at all which it says a gazillion times in the Bible yes like like just do a word search everybody for love and Commandments uh and see how many places they are paired together in the Bible it's a bunch a bunch all right well with that said there's a good beefy first half we're going to go ahead and take our first break we'll be",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.2.2"],
      text: "El Catecismo extenso lo cita para explicar el exorcismo (Filareto, pregunta 296).",
    },
    {
      refs: ["Mark.16.17"],
      text: "El Catecismo extenso lo cita para la invocación en el nombre de Cristo (Filareto, pregunta 297).",
    },
    {
      refs: ["Matt.16.24"],
      text: "El Catecismo extenso lo cita para la cruz dada al bautizado y el discipulado (Filareto, pregunta 301).",
    },
    {
      refs: ["2Pet.2.20"],
      text: "El Catecismo extenso lo cita como advertencia sobre el pecado después del bautismo (Filareto, pregunta 305).",
    },
  ],
  passages: {
    title: "Los pasajes de la posición ortodoxa",
    lede: "Los versículos que la tradición ortodoxa cita sobre el bautismo, completos y con su propia lectura.",
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
      "Para el Catecismo extenso de Filareto, antes del bautismo se pide arrepentimiento y fe, y por eso se recita el Credo (pregunta 291) {c:OPhilaret291|Filareto, pregunta 291}.",
      "Y la Confesión de Dositeo dice quién bautiza: «Lo realiza solamente el sacerdote; ante una necesidad ineludible puede realizarlo también otra persona, siempre que sea ortodoxa y tenga la intención apropiada al divino bautismo» {c:ODositheusXVI|Dositeo XVI}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "La profesión antes del bautismo",
        text: "Se piden arrepentimiento y fe, y por eso antes del bautismo se recita el Credo.",
        sources: [
          {
            citations: ["OPhilaret291"],
            label: "Filareto, pregunta 291",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Los padrinos después",
        text: "Los padrinos responden ante la Iglesia por la fe del bautizado y, después del bautismo, se encargan de él para afirmarlo en la fe.",
        sources: [
          {
            citations: ["OPhilaret295"],
            label: "Filareto, pregunta 295",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Quién bautiza",
        text: "La Confesión de Dositeo dice: «Lo realiza solamente el sacerdote; ante una necesidad ineludible puede realizarlo también otra persona, siempre que sea ortodoxa y tenga la intención apropiada al divino bautismo».",
        sources: [
          {
            citations: ["ODositheusXVI"],
            label: "Dositeo XVI",
          },
        ],
      },
      {
        id: "CV-4",
        label: "El exorcismo",
        text: "El Catecismo extenso explica que el exorcismo obra en el nombre de Jesucristo, invocado con oración y fe (pregunta 297).",
        sources: [
          {
            citations: ["OPhilaret297"],
            label: "Filareto, pregunta 297",
          },
        ],
      },
      {
        id: "CV-5",
        label: "El vestido blanco",
        text: "El vestido blanco significa la pureza del alma y de la vida cristiana (pregunta 300).",
        sources: [
          {
            citations: ["OPhilaret300"],
            label: "Filareto, pregunta 300",
          },
        ],
      },
      {
        id: "CV-6",
        label: "La procesión con luz",
        text: "La procesión alrededor de la pila con una luz significa la alegría espiritual unida a la iluminación espiritual (pregunta 302).",
        sources: [
          {
            citations: ["OPhilaret302"],
            label: "Filareto, pregunta 302",
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
          "Confesión del Sínodo de Jerusalén de 1672. Pedro Mogila tiene la aprobación patriarcal de su revisión griega del 11 de marzo de 1643, limitada al griego y no a toda traducción posterior.",
        source: {
          citations: ["ODositheusXVI"],
          label: "Dositeo XVI",
        },
      },
      catechism: {
        label: "Catecismo extenso de Filareto (1839)",
        definition:
          "Catecismo sinodal ruso de 1839, con la numeración de preguntas de Schaff. Su descripción doctrinal no es un relevamiento de todas las Iglesias autocéfalas.",
        source: {
          citations: ["OPhilaret288"],
          label: "Filareto, pregunta 288",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
