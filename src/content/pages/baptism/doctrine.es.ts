import type { DoctrinePage } from "@/content/model/doctrine-page";
import type { CitationId } from "@/content/registry/citations";

export const baptismDoctrine = {
  doctrine: "baptism",
  status: "draft",
  lede: "¿Qué es el bautismo y a quién se le administra?",
  legend: { witnessId: "bw-didache", citationLabel: "Didaché 7.1–3" },
  fingerprint: {
    marks: [
      { year: 50, yearEnd: 150, label: "La Didaché" },
      { year: 148, yearEnd: 161, label: "Justino Mártir, Primera Apología" },
      { year: 155, circa: true, label: "Justino Mártir" },
      { year: 190, circa: true, label: "Ireneo de Lyon, Demostración de la predicación apostólica" },
      { year: 198, yearEnd: 208, label: "Tertuliano, Sobre el bautismo" },
      { year: 200, circa: true, label: "Tertuliano" },
      { year: 253, circa: true, label: "Cipriano de Cartago, Carta a Fido" },
      { year: 325, label: "I Concilio de Nicea" },
      { year: 348, circa: true, label: "Cirilo de Jerusalén, Procatequesis" },
      { year: 374, label: "Basilio de Cesarea, Sobre el Espíritu Santo" },
      { year: 381, label: "Gregorio Nacianceno, Oración 40" },
      { year: 381, label: "I Concilio de Constantinopla, credo" },
      { year: 387, circa: true, label: "Ambrosio de Milán, Sobre los misterios" },
      { year: 390, circa: true, label: "Ambrosio de Milán, Sobre los sacramentos" },
      { year: 400, circa: true, label: "Agustín de Hipona, Sobre el bautismo" },
      { year: 418, label: "Concilio de Cartago" },
      { year: 692, label: "Concilio Quinisexto" },
      { year: 1215, label: "IV Concilio de Letrán" },
      { year: 1312, label: "Concilio de Vienne" },
      { year: 1439, label: "Concilio de Florencia, decreto para los armenios" },
      { year: 1529, label: "Catecismos Menor y Mayor de Lutero" },
      { year: 1530, label: "Confesión de Augsburgo" },
      { year: 1531, label: "Apología de la Confesión de Augsburgo" },
      { year: 1546, label: "Concilio de Trento, sesión V" },
      { year: 1547, label: "Concilio de Trento, sesiones VI y VII" },
      { year: 1551, label: "Concilio de Trento, sesión XIV" },
      { year: 1577, label: "Fórmula de Concordia" },
      { year: 1643, label: "Confesión de Pedro Mogila" },
      { year: 1647, label: "Confesión de Westminster" },
      { year: 1648, label: "Catecismos de Westminster" },
      { year: 1672, label: "Sínodo de Jerusalén (Confesión de Dositeo)" },
      { year: 1755, label: "Oros de Constantinopla sobre el bautismo de los conversos" },
      { year: 1839, label: "Catecismo extenso de Filareto" },
      { year: 1853, label: "Confesión de New Hampshire" },
      { year: 1895, label: "Encíclica patriarcal y sinodal" },
      { year: 1963, label: "Concilio Vaticano II, Sacrosanctum Concilium" },
      { year: 1964, label: "Concilio Vaticano II, Lumen gentium y Unitatis redintegratio" },
      { year: 1983, label: "Código de Derecho Canónico" },
      { year: 1990, label: "Donum veritatis" },
      { year: 1992, label: "Catecismo de la Iglesia Católica" },
      { year: 2000, label: "Fe y Mensaje Bautistas 2000" },
      { year: 2024, label: "Gestis verbisque" },
    ],
  },
  common: {
    text: "Las cinco tradiciones bautizan con agua en el nombre del Padre, del Hijo y del Espíritu Santo. Todas relacionan el bautismo con una vida nueva. Discrepan sobre a quién se bautiza, sobre qué ocurre en el bautismo y sobre cómo se administra.",
    questions: ["¿A quién se bautiza?", "¿Qué es el bautismo y para qué se hace?", "¿Con qué modo se administra?"],
  },
  answers: {
    subtitle: "Cada tradición, en sus propias palabras. Debajo de cada una, las objeciones que recibe.",
    items: [
      {
        tradition: "catholic",
        summary:
          "El bautismo es «el sacramento del nuevo nacimiento por el agua y la palabra»: libera del pecado, hace hijo de Dios y miembro de la Iglesia. Se da una sola vez, también a los niños.",
        grade: { grade: "dogma", basis: "definido en Trento (sesiones V y VII, 1546–1547)" },
        objections: [
          { id: "OB-1" },
          { id: "OB-2" },
          { id: "OB-3" },
          { id: "OB-4" },
          { id: "OB-5" },
          { id: "OB-6a" },
          { id: "OB-6b" },
        ],
      },
      {
        tradition: "orthodox",
        summary:
          "Es un sacramento en el que el creyente, sumergido tres veces en agua en el nombre de la Trinidad, muere a la vida carnal del pecado y nace de nuevo del Espíritu. Se bautiza a los niños por la fe de sus padres y padrinos.",
        grade: {
          basis: "Catecismo extenso de Filareto, preguntas 288 y 292 (1839)",
          definition: {
            label: "Catecismo extenso de Filareto (1839)",
            definition:
              "Catecismo sinodal ruso de 1839, con la numeración de preguntas de Schaff. Su descripción doctrinal no es un relevamiento de todas las Iglesias autocéfalas.",
            source: { citations: ["OPhilaret288"], label: "Filareto, pregunta 288" },
          },
        },
        objections: [
          { title: "El bautismo no es necesario para ser regenerado o salvado" },
          { title: "Solo los creyentes deben ser bautizados" },
        ],
      },
      {
        tradition: "lutheran",
        summary:
          "El bautismo es agua unida a la palabra de Dios: obra el perdón de los pecados, libra de la muerte y del diablo y da la salvación a los que lo creen. Se bautiza también a los niños.",
        grade: {
          basis: "Catecismo Menor IV (1529)",
          definition: {
            label: "Catecismos: «Biblia de los laicos»",
            definition:
              "Los catecismos Menor y Mayor, «en los que está comprendido todo lo que se trata más extensamente en la Sagrada Escritura y es necesario que un cristiano sepa para su salvación»",
            source: { citations: ["LFCEpRN_5"], label: "Epítome RN 5" },
          },
        },
        objections: [
          { title: "La gracia y la salvación no están unidas inseparablemente al bautismo" },
          { title: "Solo los creyentes deben ser bautizados, por inmersión" },
        ],
      },
      {
        tradition: "reformed",
        summary:
          "El lavamiento con agua significa y sella la unión con Cristo y los beneficios de la alianza de gracia. Se bautiza a los que profesan la fe y a los niños cuyos padres, al menos uno, son creyentes.",
        grade: {
          basis: "Catecismo Menor de Westminster 94 (1648)",
          definition: {
            label: "Estándares de Westminster",
            definition:
              "La Confesión y los Catecismos de Westminster son normas subordinadas a la Escritura: los concilios pueden errar y ayudan a la fe sin constituir su regla (Confesión 31.4); sus determinaciones, si concuerdan con la Escritura, se reciben con reverencia y sumisión (Confesión 31.3).",
            source: { citations: ["RWCF31_3_4"], label: "Westminster 31.3–4" },
          },
        },
        objections: [
          { title: "El bautismo es necesario para la salvación y obra el perdón" },
          { title: "Solo los creyentes deben ser bautizados" },
          { title: "La inmersión es necesaria; basta con derramar o rociar no" },
        ],
      },
      {
        tradition: "baptist",
        summary:
          "El bautismo es la inmersión en agua de un creyente, en el nombre del Padre, del Hijo y del Espíritu Santo: un acto de obediencia que simboliza su fe, su muerte al pecado y su vida nueva. Es requisito para ser miembro de la iglesia y para la Cena.",
        grade: {
          basis: "Confesión de New Hampshire, art. XIV (1853)",
          definition: {
            label: "Confesiones de la convención",
            definition:
              "La Confesión de New Hampshire de 1853 es una confesión histórica revisada, sin jurisdicción bautista universal ni adopción regional actual inferida. Fe y Mensaje Bautistas 2000, enmendada en 2023, es la declaración adoptada por la convención nombrada: guía y rendición de cuentas doctrinal bajo la Escritura, revisable, sin reclamar finalidad, infalibilidad ni autoridad sobre la conciencia; no es un magisterio bautista mundial.",
            source: { citations: ["BNHXIV"], label: "New Hampshire XIV" },
          },
        },
        objections: [
          { title: "Los niños deben ser bautizados" },
          { title: "El bautismo hace algo: obra el perdón y la nueva vida, no solo los significa" },
          { title: "La inmersión no es necesaria: basta con derramar o rociar" },
        ],
      },
    ],
  },
  witnesses: {
    subtitle: "Testigos de los primeros siglos, en orden de fecha. Esta sección es neutral.",
    historyLink: {
      label: "La historia completa del bautismo",
      note: "Concilios, controversias y confesiones de fe, hasta hoy.",
    },
    items: [
      {
        id: "bw-didache",
        entity: "didache",
        author: "Anónimo",
        work: "Didaché",
        locator: "7.1–3",
        date: { year: 50, yearEnd: 150, circa: true },
        quote:
          "Y en cuanto al bautismo, bautizad así: habiendo dicho antes todas estas cosas, bautizad en el nombre del Padre y del Hijo y del Espíritu Santo, en agua viva. Pero si no tienes agua viva, bautiza en otra agua; y si no puedes en fría, en tibia. Pero si no tienes ninguna de las dos, derrama agua tres veces sobre la cabeza en el nombre del Padre, del Hijo y del Espíritu Santo.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 7 (Roberts y Donaldson), 1886.",
        note: "La fecha se discute: las propuestas van de mediados del siglo I a comienzos del II. No dice nada sobre el bautismo de niños.",
        anonymous: true,
      },
      {
        id: "bw-justin",
        entity: "justin-martyr",
        author: "Justino Mártir",
        work: "Primera Apología",
        locator: "61",
        date: { year: 148, yearEnd: 161, circa: true },
        quote:
          "Luego los llevamos adonde hay agua y nacen de nuevo de la misma manera en que nosotros mismos nacimos de nuevo. Pues en el nombre de Dios, Padre y Señor del universo, y de nuestro Salvador Jesucristo, y del Espíritu Santo, reciben entonces el lavado con agua.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 1 (Dods y Reith), 1885.",
      },
      {
        id: "bw-tertullian",
        entity: "tertullian",
        author: "Tertuliano",
        work: "Sobre el bautismo",
        locator: "18",
        date: { year: 198, yearEnd: 208, circa: true },
        quote:
          "Y así, según las circunstancias y la disposición, e incluso la edad, de cada persona, es preferible retrasar el bautismo; principalmente, sin embargo, en el caso de los niños pequeños.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 3 (Thelwall), 1885.",
        note: "Habla de aplazar el bautismo, no de negarlo.",
      },
      {
        id: "bw-cyprian",
        entity: "cyprian-of-carthage",
        author: "Cipriano de Cartago",
        work: "Carta LVIII a Fido",
        locator: "6",
        date: { year: 253, circa: true },
        quote:
          "Por tanto, queridísimo hermano, este fue nuestro parecer en el concilio: que por nosotros nadie sea impedido del bautismo y de la gracia de Dios, que es misericordioso, bondadoso y amante con todos. Y puesto que esto ha de observarse y mantenerse respecto de todos, pensamos que ha de observarse aún más respecto de los niños y recién nacidos.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 5 (Wallis), 1886.",
        note: "La numeración es la de ANF. El año no se pudo confirmar en una edición fechada.",
      },
      {
        id: "bw-nicaea-19",
        author: "I Concilio de Nicea",
        work: "Cánones",
        locator: "canon 19",
        date: { year: 325 },
        quote:
          "Respecto de los paulianistas que se han refugiado en la Iglesia Católica, se ha decretado que deben ser rebautizados en todo caso; y si alguno de ellos que en tiempo pasado haya sido contado entre su clero fuere hallado irreprochable y sin tacha, sea rebautizado y ordenado por el obispo de la Iglesia Católica; pero si el examen los descubriere no aptos, deben ser depuestos.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 14 (Percival), 1900.",
      },
      {
        id: "bw-cyril",
        entity: "cyril-of-jerusalem",
        author: "Cirilo de Jerusalén",
        work: "Catequesis",
        locator: "Procatequesis 16",
        date: { year: 348, circa: true },
        quote:
          "Grande es el bautismo que tenéis por delante: rescate de cautivos; remisión de ofensas; muerte del pecado; nuevo nacimiento del alma; vestidura de luz; sello santo e indisoluble; carro hacia el cielo; delicia del Paraíso; acogida en el reino; don de la adopción.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 7 (Gifford), 1894.",
        note: "La fecha es una inferencia del editor, no una fecha impresa.",
      },
      {
        id: "bw-basil",
        entity: "basil-of-caesarea",
        author: "Basilio de Cesarea",
        work: "Sobre el Espíritu Santo",
        locator: "27.66",
        date: { year: 374 },
        quote:
          "Además bendecimos el agua del bautismo y el óleo de la unción, y, junto con esto, al catecúmeno que es bautizado. ¿Con qué autoridad escrita hacemos esto? ¿No es nuestra autoridad la tradición silenciosa y misteriosa? Y aun la unción con óleo, ¿por qué palabra escrita se enseña? ¿Y de dónde viene la costumbre de bautizar tres veces? Y en cuanto a las demás costumbres del bautismo, ¿de qué Escritura sacamos la renuncia a Satanás y a sus ángeles? ¿No viene esto de aquella enseñanza no publicada y secreta que nuestros padres guardaron en un silencio fuera del alcance de la intromisión curiosa y de la indagación indiscreta?",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 8, 1895.",
      },
      {
        id: "bw-gregory",
        entity: "gregory-of-nazianzus",
        author: "Gregorio Nacianceno",
        work: "Oración 40, Sobre el santo bautismo",
        locator: "§ 17",
        date: { year: 381 },
        quote:
          "¿Tienes un hijo pequeño? No dejes que el pecado encuentre ocasión alguna, sino que sea santificado desde la infancia; desde su más tierna edad sea consagrado por el Espíritu. ¿Temes el Sello por la debilidad de la naturaleza? ¡Oh, qué madre de poca alma y de cuán poca fe!",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 7, 1894.",
      },
      {
        id: "bw-ambrose",
        entity: "ambrose-of-milan",
        author: "Ambrosio de Milán",
        work: "Sobre los misterios",
        locator: "5 § 28",
        date: { year: 387, circa: true },
        quote:
          "Descendisteis, pues (al agua); recordad lo que respondisteis a las preguntas: que creéis en el Padre, que creéis en el Hijo, que creéis en el Espíritu Santo.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 10, 1896.",
      },
      {
        id: "bw-augustine",
        entity: "augustine-of-hippo",
        author: "Agustín de Hipona",
        work: "Sobre el bautismo, contra los donatistas",
        locator: "IV.24",
        date: { year: 400, circa: true },
        quote:
          "Y si alguien busca autoridad divina en este asunto, aunque lo que sostiene toda la Iglesia, y no como instituido por concilios sino como costumbre invariable, con razón se tiene por transmitido por autoridad apostólica, aun así podemos conjeturar con acierto el valor del sacramento del bautismo en el caso de los niños, a partir del paralelo de la circuncisión",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF1 vol. 4, 1887.",
        note: "La frase continúa más allá de la cita.",
      },
      {
        id: "bw-carthage",
        author: "Concilio de Cartago",
        work: "Código de la Iglesia africana",
        locator: "canon CX",
        date: { year: 418, alsoYears: [419] },
        quote:
          "Asimismo pareció bien que quien niegue que los niños recién salidos del vientre de sus madres deban ser bautizados, o diga que el bautismo es para remisión de los pecados pero que ellos no derivan de Adán ningún pecado original que deba ser quitado por el baño de la regeneración, de donde se sigue que en ellos la forma del bautismo para la remisión de los pecados ha de entenderse como falsa y no verdadera, sea anatema.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 14, 1900.",
        note: "La edición titula el código «419» y anota el canon como del concilio de 418.",
      },
    ],
  },
  practice: {
    subtitle:
      "Lo que dicen del bautismo los textos oficiales de cada tradición: quién lo recibe, con qué agua y qué palabras, cómo se administra y qué sigue.",
    aspects: [
      {
        id: "receives",
        label: "Quién recibe",
        cells: {
          catholic: {
            text: "Niños en las primeras semanas; adultos tras el catecumenado",
            sources: [{ citations: ["CIC867", "CIC851"], label: "Código de Derecho Canónico, cáns. 867, 851" }],
          },
          orthodox: {
            text: "Los niños, por la fe de sus padres y padrinos; el creyente que profesa la fe antes",
            sources: [
              {
                citations: ["OPhilaret292", "OPhilaret291"],
                label: "Catecismo extenso de Filareto, preguntas 291–292 (español de Doctrina asistido por IA)",
              },
            ],
          },
          lutheran: {
            text: "También los niños: la gracia y la promesa no se niegan por la edad, y se los lleva con oración para que Dios les dé la fe",
            sources: [
              {
                citations: ["LACIX", "LApIX_52", "LLCIV_57"],
                label: "Confesión de Augsburgo IX; Apología IX.52; Catecismo Mayor IV.57",
              },
            ],
          },
          reformed: {
            text: "Los que profesan la fe y los niños cuyos padres, al menos uno de ellos, son creyentes",
            sources: [
              { citations: ["RWCF28_4", "RWSC95"], label: "Confesión de Westminster 28.4; Catecismo Menor 95" },
            ],
          },
          baptist: {
            text: "Un creyente",
            sources: [
              { citations: ["BNHXIV", "BBFMVII"], label: "Confesión de New Hampshire XIV; Fe y Mensaje Bautistas VII" },
            ],
          },
        },
      },
      {
        id: "matter",
        label: "Material y fórmula",
        cells: {
          catholic: {
            text: "Agua verdadera y la debida forma verbal: «yo te bautizo…»",
            sources: [
              {
                citations: ["CIC849", "CIC854", "CEC1239"],
                label: "Código de Derecho Canónico, cáns. 849, 854; Catecismo 1239",
              },
            ],
          },
          orthodox: {
            text: "Agua pura, sin ningún otro líquido, en el nombre de la Trinidad",
            sources: [
              {
                citations: ["ODositheusXVI"],
                label: "Confesión de Dositeo, decreto 16 (español de Doctrina asistido por IA)",
              },
            ],
          },
          lutheran: {
            text: "Agua unida a la palabra de Dios, en el nombre del Padre, del Hijo y del Espíritu Santo",
            sources: [{ citations: ["LSCIV_2"], label: "Catecismo Menor IV.2" }],
          },
          reformed: {
            text: "Agua, en el nombre del Padre, del Hijo y del Espíritu Santo",
            sources: [
              { citations: ["RWCF28_2", "RWSC94"], label: "Confesión de Westminster 28.2; Catecismo Menor 94" },
            ],
          },
          baptist: {
            text: "Agua, en el nombre del Padre, del Hijo y del Espíritu Santo",
            sources: [
              { citations: ["BNHXIV", "BBFMVII"], label: "Confesión de New Hampshire XIV; Fe y Mensaje Bautistas VII" },
            ],
          },
        },
      },
      {
        id: "mode",
        label: "Modo",
        cells: {
          catholic: {
            text: "Inmersión o infusión",
            sources: [{ citations: ["CIC854"], label: "Código de Derecho Canónico, can. 854" }],
          },
          orthodox: {
            text: "Triple inmersión",
            sources: [
              {
                citations: ["OPhilaret290", "OPhilaret288"],
                label: "Catecismo extenso de Filareto, preguntas 288 y 290 (1839; no se leyó el Eucologio)",
              },
            ],
          },
          lutheran: {
            text: "El Catecismo Mayor menciona verter, rociar y sumergir el agua, y no prescribe ninguno de los tres",
            sources: [
              {
                citations: ["LC4"],
                label: "Catecismo Mayor IV (texto inglés de la transcripción web del Triglot, 1921)",
              },
            ],
          },
          reformed: {
            text: "La inmersión no es necesaria: se administra rectamente por aspersión o por efusión de agua sobre la persona",
            sources: [{ citations: ["RWCF28_3"], label: "Confesión de Westminster 28.3 (edición de Monterrey, 1880)" }],
          },
          baptist: {
            text: "Inmersión",
            sources: [
              { citations: ["BNHXIV", "BBFMVII"], label: "Confesión de New Hampshire XIV; Fe y Mensaje Bautistas VII" },
            ],
          },
        },
      },
      {
        id: "administers",
        label: "Quién administra",
        cells: {
          catholic: {
            text: "El ministro ordinario; en caso de necesidad, cualquier persona que tenga la debida intención",
            sources: [
              { citations: ["CIC861", "CEC1256"], label: "Código de Derecho Canónico, can. 861; Catecismo 1256" },
            ],
          },
          orthodox: {
            text: "Solo el sacerdote; ante una necesidad ineludible, otra persona ortodoxa con la intención apropiada",
            sources: [
              {
                citations: ["ODositheusXVI"],
                label: "Confesión de Dositeo, decreto 16 (español de Doctrina asistido por IA)",
              },
            ],
          },
          lutheran: {
            text: "Ninguna regla propia del bautismo; la Confesión de Augsburgo dice que nadie debe enseñar en la Iglesia ni administrar los sacramentos si no ha sido debidamente llamado",
            sources: [
              {
                citations: ["LACXIV"],
                label: "Confesión de Augsburgo XIV (Triglot, inglés, 1921; español de Doctrina asistido por IA)",
              },
            ],
          },
          reformed: {
            text: "Un ministro del evangelio debidamente autorizado",
            sources: [{ citations: ["RWCF28_2"], label: "Confesión de Westminster 28.2 (edición de Monterrey, 1880)" }],
          },
          baptist: {
            text: "Los textos leídos no dicen quién lo administra",
            sources: [
              {
                citations: ["BBFMVII", "BNHXIV"],
                label: "Fe y Mensaje Bautistas VII; Confesión de New Hampshire XIV (leídos enteros)",
              },
            ],
          },
        },
      },
      {
        id: "repeat",
        label: "Repetición",
        cells: {
          catholic: {
            text: "No puede ser reiterado",
            sources: [
              { citations: ["CIC845", "CEC1272"], label: "Código de Derecho Canónico, can. 845; Catecismo 1272" },
            ],
          },
          orthodox: {
            text: "No puede repetirse; la recepción de quienes se convierten es una pregunta aparte",
            sources: [
              {
                citations: ["OPhilaret303", "ODositheusXV"],
                label: "Catecismo extenso de Filareto, pregunta 303; Confesión de Dositeo, decreto 15",
              },
            ],
          },
          lutheran: {
            text: "No hace falta otro derramamiento de agua: el bautismo permanece y el arrepentimiento es volver a él",
            sources: [{ citations: ["LLCIV_77_79"], label: "Catecismo Mayor IV.77–79" }],
          },
          reformed: {
            text: "No debe administrarse a la misma persona más de una vez",
            sources: [{ citations: ["RWCF28_7"], label: "Confesión de Westminster 28.7 (edición de Monterrey, 1880)" }],
          },
          baptist: {
            text: "Los textos leídos no dicen nada sobre repetir el bautismo",
            sources: [
              {
                citations: ["BBFMVII", "BNHXIV"],
                label: "Fe y Mensaje Bautistas VII; Confesión de New Hampshire XIV (leídos enteros)",
              },
            ],
          },
        },
      },
      {
        id: "after",
        label: "Después del bautismo",
        cells: {
          catholic: {
            text: "Renovación anual de las promesas en la Vigilia Pascual; confirmación y Eucaristía",
            sources: [{ citations: ["CEC1254", "CEC1244"], label: "Catecismo 1254, 1244" }],
          },
          orthodox: {
            text: "Los padrinos responden por la fe del bautizado y después lo ayudan a afirmarse en ella",
            sources: [
              {
                citations: ["OPhilaret295"],
                label: "Catecismo extenso de Filareto, pregunta 295 (resumen de Doctrina)",
              },
            ],
          },
          lutheran: {
            text: "Una vida diaria de contrición y arrepentimiento",
            sources: [
              { citations: ["LSCIV_12", "LLCIV_77_79"], label: "Catecismo Menor IV.12; Catecismo Mayor IV.77–79" },
            ],
          },
          reformed: {
            text: "Considerar el bautismo con seriedad y gratitud durante toda la vida",
            sources: [
              {
                citations: ["RWLC167"],
                label: "Catecismo Mayor de Westminster 167 (español de Doctrina asistido por IA)",
              },
            ],
          },
          baptist: {
            text: "Requisito para ser miembro de la iglesia y para la Cena",
            sources: [
              { citations: ["BNHXIV", "BBFMVII"], label: "Confesión de New Hampshire XIV; Fe y Mensaje Bautistas VII" },
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
        doctrine: "eucharist",
        text: "Los textos bautistas hacen del bautismo un requisito previo para la Cena y para ser miembro de la iglesia ({c:BNHXIV|Nueva Hampshire XIV}; {c:BBFMVII|Fe y Mensaje Bautistas VII}); el Catecismo católico llama al bautismo «la puerta que abre el acceso a los otros sacramentos» ({c:CEC1213|Catecismo 1213}).",
      },
    ],
  },
} satisfies DoctrinePage<CitationId>;
