import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const eucharistLutheran = {
  doctrine: "eucharist",
  tradition: "lutheran",
  status: "draft",
  title: "La posición luterana",
  lede: "Cómo las confesiones luteranas entienden la Santa Cena, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan las confesiones luteranas sobre la Santa Cena, con el lugar que cada texto ocupa en el Libro de Concordia.",
    definition: {
      text: "Para las confesiones luteranas, la Santa Cena es el verdadero cuerpo y la verdadera sangre de nuestro Señor Jesucristo, bajo el pan y el vino, que Cristo mismo dio a los cristianos para comer y beber, y en la que por sus palabras («dado y derramado por vosotros para el perdón de los pecados») se dan el perdón, la vida y la salvación.",
      grades: [
        {
          kind: "church",
          grade: "catechism",
          basis: "Catecismo Menor VI (1529)",
        },
      ],
      sources: [
        {
          citations: ["LSCVI_1_2"],
          label: "Catecismo Menor VI.1–2",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la presencia de Cristo",
        text: "La Confesión de Augsburgo confiesa que el verdadero cuerpo y la verdadera sangre de Cristo están verdaderamente presentes en la Cena «bajo la forma del pan y del vino» y que allí se distribuyen y se reciben (art. X). La Apología añade que están «verdadera y sustancialmente presentes» y que esta es la doctrina «recibida en toda la Iglesia» (X.54, 57).",
        grades: [
          {
            kind: "church",
            grade: "augsburg",
            basis: "art. X (1530); repetido en la Apología y como tesis afirmativa de la Fórmula de Concordia",
          },
        ],
        sources: [
          {
            citations: ["LACX"],
            label: "Confesión de Augsburgo X",
          },
          {
            citations: ["LApX_54"],
            label: "Apología X.54",
          },
          {
            citations: ["LFCEpVII_6"],
            label: "Epítome VII.6",
          },
        ],
      },
      {
        id: "QE-2",
        short: "las palabras de la institución",
        text: "Las palabras de Cristo «Esto es mi cuerpo» se entienden como suenan, según la letra: el pan no significa un cuerpo ausente, sino que, por la «unión sacramental», es el cuerpo de Cristo. Las confesiones dicen también que el cuerpo está «bajo el pan, con el pan, en el pan»: esas fórmulas rechazan la transubstanciación e indican que el pan, sin transformarse, y el cuerpo de Cristo están unidos. No es una unión personal, como la de las dos naturalezas en Cristo, sino sacramental.",
        grades: [
          {
            kind: "church",
            grade: "thesis",
            basis: "Epítome VII.7 y Declaración sólida VII",
          },
        ],
        sources: [
          {
            citations: ["LFCEpVII_7"],
            label: "Epítome VII.7",
          },
          {
            citations: ["LFCSDVII_35"],
            label: "Declaración sólida VII.35",
          },
          {
            citations: ["LFCSDVII_38"],
            label: "Declaración sólida VII.38",
          },
        ],
      },
      {
        id: "QE-3+4",
        short: "cómo se recibe",
        text: "La Fórmula de Concordia reúne en una sola pregunta la cuestión principal de este artículo, y responde que sí: el verdadero cuerpo y la verdadera sangre de Cristo se distribuyen con el pan y el vino y se reciben con la boca por todos los que usan este sacramento, «sean dignos o indignos» (Epítome VII.2). Se reciben no solo espiritualmente, por la fe, sino también con la boca; pero no de un modo «cafarnaítico», como si la carne de Cristo se desgarrara con los dientes y se digiriera como otro alimento, sino de un modo sobrenatural y celestial, que los sentidos y la razón no comprenden y que solo la fe capta. Los reciben no solo los cristianos piadosos, sino también los impíos: los que creen, para consuelo y vida; los que no creen y no se arrepienten, para juicio. Por eso Pablo dice que quien come indignamente «será culpado del cuerpo y de la sangre del Señor» (1 Corintios 11:27).",
        grades: [
          {
            kind: "church",
            grade: "thesis",
            basis: "Epítome VII.2, 15 y 16, y antítesis VII.42",
          },
          {
            kind: "church",
            grade: "confession",
            basis: "Artículos de Esmalcalda III.6.1 (1537)",
          },
        ],
        sources: [
          {
            citations: ["LFCEpVII_2"],
            label: "Epítome VII.2",
          },
          {
            citations: ["LFCEpVII_15"],
            label: "Epítome VII.15",
          },
          {
            citations: ["LFCEpVII_42"],
            label: "Epítome VII.42",
          },
          {
            citations: ["LFCSDVII_105"],
            label: "Declaración sólida VII.105",
          },
          {
            citations: ["LSAIII_6_1"],
            label: "Esmalcalda III.6.1",
          },
          {
            citations: ["LFCEpVII_16"],
            label: "Epítome VII.16",
          },
          {
            citations: ["LFCEpVII_19"],
            label: "Epítome VII.19",
          },
        ],
      },
      {
        id: "QE-5",
        short: "lo que hace presente a Cristo",
        text: "Ninguna obra humana, ni el pronunciar del ministro, ni la fe de los que comulgan, hace presente el cuerpo y la sangre de Cristo: eso se atribuye solo al poder de Cristo y a sus palabras de la institución, que siguen obrando dondequiera que se celebra la Cena como él la instituyó. Por eso esas palabras deben decirse en voz alta en cada celebración. Lo resume el Catecismo Mayor: «Como habla y dice la boca de Cristo, así es».",
        grades: [
          {
            kind: "church",
            grade: "thesis",
            basis: "Epítome VII.8–9",
          },
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo Mayor V",
          },
        ],
        sources: [
          {
            citations: ["LFCEpVII_8_9"],
            label: "Epítome VII.8–9",
          },
          {
            citations: ["LFCSDVII_74_75"],
            label: "Declaración sólida VII.74–75",
          },
          {
            citations: ["LLCV_10"],
            label: "Catecismo Mayor V.10",
          },
        ],
      },
      {
        id: "QE-6",
        short: "para qué se da",
        text: "Lo que la Cena da lo dicen las palabras «dado y derramado por vosotros para el perdón de los pecados»: en el sacramento se dan, por esas palabras, el perdón de los pecados, la vida y la salvación. No lo hace el comer y beber por sí mismo, sino las palabras junto con el comer y beber; y quien las cree tiene lo que dicen. Por eso está bien preparado quien cree esas palabras: el ayuno y la preparación corporal son «una buena disciplina externa», pero el «por vosotros» pide corazones que crean. El Catecismo Mayor añade que con el perdón vienen «la gracia de Dios y su Espíritu con todos sus dones», y lo llama «alimento del alma, que nutre y fortalece al hombre nuevo», dado «como pasto y sustento diario, para que la fe se reponga y se fortalezca» (V.23–24).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo Menor VI (1529) y Catecismo Mayor V",
          },
        ],
        sources: [
          {
            citations: ["LSCVI_5_10"],
            label: "Catecismo Menor VI.5–10",
          },
          {
            citations: ["LLCV_23_24"],
            label: "Catecismo Mayor V.23–24",
          },
          {
            citations: ["LLCV_22"],
            label: "Catecismo Mayor V.22",
          },
          {
            citations: ["LFCEpVII_20"],
            label: "Epítome VII.20",
          },
        ],
      },
      {
        id: "QE-7",
        short: "la transubstanciación",
        text: "Los Artículos de Esmalcalda responden: «concuerda perfectamente con la Escritura que allí hay pan y sigue habiéndolo, como lo llama el mismo san Pablo». Para las confesiones luteranas, el pan no pierde su esencia: por eso dicen que el cuerpo de Cristo está «bajo el pan, con el pan, en el pan», para indicar la unión del pan sin transformar con el cuerpo de Cristo.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Artículos de Esmalcalda III.6.5",
          },
          {
            kind: "church",
            grade: "thesis",
            basis: "antítesis, Epítome VII.22 y Declaración sólida VII.108",
          },
        ],
        sources: [
          {
            citations: ["LSAIII_6_5"],
            label: "Esmalcalda III.6.5",
          },
          {
            citations: ["LFCEpVII_22"],
            label: "Epítome VII.22",
          },
        ],
      },
      {
        id: "QE-8",
        short: "la Misa como sacrificio",
        text: "La Apología distingue: en un sacramento Dios «nos da lo que ofrece la promesa unida a la ceremonia»; en un sacrificio somos nosotros los que damos a Dios «para honrarlo» (XXIV.18). Por eso responde: «hubo en el mundo un único sacrificio propiciatorio, a saber, la muerte de Cristo». La Cena es un sacrificio en otro sentido: de alabanza y acción de gracias, que ofrecen los ya reconciliados, no uno que reconcilie con Dios. Y la Confesión de Augsburgo dice que entre los luteranos la Misa «se conserva y se celebra con la mayor reverencia».",
        grades: [
          {
            kind: "church",
            grade: "augsburg",
            basis: "art. XXIV",
          },
          {
            kind: "church",
            grade: "confession",
            basis: "Apología XXIV (1531)",
          },
          {
            kind: "church",
            grade: "thesis",
            basis: "antítesis, Epítome VII.23",
          },
        ],
        sources: [
          {
            citations: ["LApXXIV_17_18"],
            label: "Apología XXIV.17–18",
          },
          {
            citations: ["LApXXIV_22"],
            label: "Apología XXIV.22",
          },
          {
            citations: ["LApXXIV_19"],
            label: "Apología XXIV.19",
          },
          {
            citations: ["LApXXIV_74"],
            label: "Apología XXIV.74",
          },
          {
            citations: ["LACXXIV_1_2"],
            label: "Confesión de Augsburgo XXIV.1–2",
          },
          {
            citations: ["LFCEpVII_23"],
            label: "Epítome VII.23",
          },
        ],
      },
      {
        id: "QE-9",
        short: "la hostia reservada",
        text: "La Fórmula de Concordia responde con una regla tomada de las palabras de la institución: «si no se guarda la institución de Cristo como él la ordenó, no hay sacramento». El «uso» no es solo la fe ni solo el comer, sino toda la acción que Cristo mandó: consagrar, distribuir, recibir, comer y beber. Fuera de ella, cuando el pan «se encierra, se ofrece en sacrificio o se lleva de un lado a otro», no es sacramento. La misma Fórmula aclara que lo que hace presente a Cristo no es el comer ni la fe del que comulga, sino sus palabras. Y cita la Concordia de Wittenberg (1536): el cuerpo de Cristo no está «encerrado localiter, es decir, espacialmente, en el pan», ni «unido de otro modo con él de manera permanente fuera de la recepción del sacramento»; «fuera de la recepción, cuando el pan se deja aparte y se guarda en el sagrario o se lleva en procesión y se muestra, como sucede en el papado», no sostienen «que el cuerpo de Cristo esté presente». A Cristo mismo, presente en la Cena, se le adora en espíritu y en verdad en el uso del sacramento; a los elementos, no.",
        grades: [
          {
            kind: "church",
            grade: "thesis",
            basis: "Declaración sólida VII.83–87 (doctrina) y antítesis, VII.108 y 126 y Epítome VII.40",
          },
        ],
        sources: [
          {
            citations: ["LFCSDVII_85"],
            label: "Declaración sólida VII.85",
          },
          {
            citations: ["LFCSDVII_83_84"],
            label: "Declaración sólida VII.83–84",
          },
          {
            citations: ["LFCSDVII_126"],
            label: "Declaración sólida VII.126",
          },
          {
            citations: ["LFCSDVII_14_15"],
            label: "Declaración sólida VII.14–15",
          },
        ],
      },
      {
        id: "QE-10",
        short: "el pan y el cáliz",
        text: "A todos los que comulgan se les dan el pan y el cáliz, porque Cristo mandó acerca de la copa: «Bebed de él todos» (Mateo 26:27). Una sola especie «no es toda la ordenanza e institución» de Cristo, aunque bajo una hubiera tanto como bajo ambas; y si no es lícito anular el testamento de un hombre, dice la Apología, «mucho menos» el de Cristo.",
        grades: [
          {
            kind: "church",
            grade: "augsburg",
            basis: "art. XXII",
          },
          {
            kind: "church",
            grade: "confession",
            basis: "Apología XXII y Artículos de Esmalcalda III.6.2–4",
          },
          {
            kind: "church",
            grade: "thesis",
            basis: "antítesis, Epítome VII.24",
          },
        ],
        sources: [
          {
            citations: ["LACXXII_1_2"],
            label: "Confesión de Augsburgo XXII.1–2",
          },
          {
            citations: ["LSAIII_6_2_3"],
            label: "Esmalcalda III.6.2–3",
          },
          {
            citations: ["LApXXII_2"],
            label: "Apología XXII.2",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Las confesiones luteranas fundan esta enseñanza, ante todo, en las palabras de Cristo en la última Cena, tomadas «como suenan»: «Esto es mi cuerpo». Las leen junto con Pablo: el pan que partimos «es la comunión del cuerpo de Cristo», y quien come indignamente «será culpado del cuerpo y de la sangre del Señor». Y apoyan su lectura en quién es Cristo: Dios y hombre en una persona, sentado a la diestra de Dios —y «la diestra de Dios está en todas partes»—, que según su naturaleza humana «puede estar, y está, presente donde quiere».",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para las confesiones luteranas, todo descansa en que Cristo no puede mentir. Lo dice el Catecismo Mayor: «Como habla y dice la boca de Cristo, así es, pues él no puede mentir ni engañar».",
  },
  scriptureSubtitle: "Los pasajes que los documentos católicos citan sobre la Santa Cena, y cómo los leen.",
  scripture: [
    {
      refs: ["Matt.26.26-Matt.26.28", "Mark.14.22-Mark.14.24", "Luke.22.19-Luke.22.20", "1Cor.11.23-1Cor.11.25"],
      text: "Para las confesiones luteranas, los tres evangelistas y Pablo repiten «con las mismas palabras y sílabas» «Esto es mi cuerpo», sin ninguna figura (Fórmula de Concordia, Declaración sólida VII.52): por eso se entienden como suenan. «Esto es mi cuerpo, que por vosotros es dado» (Lucas 22:19).",
    },
    {
      refs: ["Matt.26.27"],
      text: "«Bebed de él todos» (Mateo 26:27) es para la Confesión de Augsburgo un mandato: Cristo «mandó claramente acerca de la copa que todos beban» (art. XXII).",
    },
    {
      refs: ["Mark.14.23"],
      text: "La Fórmula de Concordia cita «y bebieron de él todos» (Marcos 14:23) para mostrar que el cuerpo y la sangre se reciben también con la boca.",
    },
    {
      refs: ["1Cor.10.16"],
      text: "«El pan que partimos, ¿no es la comunión del cuerpo de Cristo?» (1 Corintios 10:16). Para la Apología, si el cuerpo no estuviera presente, el pan sería comunión «solo del espíritu de Cristo» (X.54). Los Artículos de Esmalcalda leen en el mismo versículo que allí sigue habiendo pan (III.6.5).",
    },
    {
      refs: ["1Cor.11.27-1Cor.11.29"],
      text: "«Cualquiera que comiere este pan ó bebiere esta copa del Señor indignamente, será culpado del cuerpo y de la sangre del Señor» (1 Corintios 11:27). Para la Fórmula de Concordia, nadie es culpable de un cuerpo ausente: también el indigno recibe el cuerpo de Cristo, para juicio (Declaración sólida VII.60).",
    },
    {
      refs: ["1Cor.11.28"],
      text: "Pablo lo sigue llamando «pan» después de la consagración: para los Artículos de Esmalcalda, allí «hay pan y sigue habiéndolo» (III.6.5).",
    },
    {
      refs: ["1Cor.11.26"],
      text: "«La muerte del Señor anunciáis hasta que venga» (1 Corintios 11:26): para la Apología, la ceremonia está unida a la predicación, la fe y la acción de gracias, y «no debe separarse de ellas» (XXIV.35).",
    },
    {
      refs: ["Heb.10.4", "Heb.10.10", "Heb.10.14"],
      text: "«En la cual voluntad somos santificados por la ofrenda del cuerpo de Jesucristo [hecha] una sola vez» (Hebreos 10:10). Para la Apología, la muerte de Cristo es el único sacrificio propiciatorio (XXIV.22).",
    },
    {
      refs: ["Isa.53.10"],
      text: "Para la Apología, Isaías llama a la muerte de Cristo «expiación por el pecado» (53:10): esa es la verdadera satisfacción, no las ceremonias.",
    },
    {
      refs: ["Mal.1.11", "Lev.3", "Lev.7", "Ps.56"],
      text: "Para la Apología, los sacrificios de alabanza son «la predicación del Evangelio, la fe, la invocación, la acción de gracias» (XXIV.25); el «presente limpio» de Malaquías 1:11 se refiere a ellos, no a la misa (XXIV.31–32).",
    },
    {
      refs: ["John.4.23-John.4.24"],
      text: "«Los verdaderos adoradores adorarán al Padre en espíritu y en verdad»: para la Apología, el culto del Nuevo Testamento es espiritual, y ninguna ofrenda vale por la sola obra (XXIV.27).",
    },
    {
      refs: ["Acts.3.21"],
      text: "«Al cual de cierto es menester que el cielo tenga» (Hechos 3:21). Para la Fórmula de Concordia, el versículo no dice que el cielo encierre a Cristo de modo que no pueda estar en la Cena (Declaración sólida VII.119).",
    },
    {
      refs: ["Eph.1.22"],
      text: "Cristo, según su naturaleza humana, está sentado a la diestra de Dios, y Dios «sometió todas las cosas debajo de sus pies» (Efesios 1:22): para la Fórmula de Concordia, ese es uno de los fundamentos de su presencia en la Cena.",
    },
    {
      refs: ["John.1.14", "Col.2.9", "Acts.10.38", "2Cor.5.19"],
      text: "Así como «aquel Verbo fué hecho carne» (Juan 1:14) sin que la divinidad se convierta en humanidad, en la Cena el pan, sin cambiar, y el cuerpo de Cristo están unidos (Declaración sólida VII.36–38).",
    },
    {
      refs: ["John.6"],
      text: "Para la Fórmula de Concordia, Juan 6 habla sobre todo del comer espiritual, por la fe, «también en la Cena del Señor»; el comer con la boca se funda en las palabras de la institución (Declaración sólida VII.61–64).",
    },
    {
      refs: ["Matt.11.28", "Matt.9.12", "2Cor.12.9", "Rom.14.1"],
      text: "«Venid á mí todos los que estáis trabajados y cargados» (Mateo 11:28): para las confesiones, la Cena es para los débiles en la fe que se arrepienten (Declaración sólida VII.69–70).",
    },
    {
      refs: ["Gen.22"],
      text: "Como Abraham creyó la palabra de Dios «según la letra», aunque contradecía a su razón, así hay que creer las palabras de la institución (Declaración sólida VII.46–47).",
    },
    {
      refs: ["Luke.21.33", "Matt.28.18", "Matt.17.5"],
      text: "Quien habla es el que tiene «toda potestad» y cuyas palabras «no pasarán»: por eso se le cree (Declaración sólida VII.43).",
    },
    {
      refs: ["Gen.1.28"],
      text: "Como el «Fructificad y multiplicad» (Génesis 1:28) se dijo una vez y sigue obrando, así «Esto es mi cuerpo» se dijo una vez y obra en cada Cena (Declaración sólida VII.76, citando a Crisóstomo).",
    },
    {
      refs: ["1Cor.14.2-1Cor.14.9"],
      text: "Pablo manda usar en la iglesia una lengua que el pueblo entienda: por eso se cantan himnos en alemán en la misa (Confesión de Augsburgo XXIV.2–4).",
    },
    {
      refs: ["Rom.6.9"],
      text: "«La muerte no se enseñoreará más de él» (Romanos 6:9): la Apología habla de «la presencia del Cristo vivo».",
    },
  ],
  videos: {
    subtitle: "Creadores luteranos explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura luterana. Abre cada una para leer en profundidad la respuesta de las confesiones luteranas.",
    videosSubtitle: "Creadores luteranos que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Para las confesiones luteranas, la Cena se celebra en la misa, que se conserva «con la mayor reverencia» y con casi todas las ceremonias habituales, junto a himnos en la lengua del pueblo (Confesión de Augsburgo XXIV.1–3). En ella se dicen en voz alta las palabras de la institución, y el pan y el vino se consagran, se distribuyen y se reciben, con el pan y con el cáliz para todos (Fórmula de Concordia, Epítome VII.9; Declaración sólida VII.83–84; Confesión de Augsburgo XXII).",
      "Nadie es forzado a comulgar, pero el Catecismo Mayor exhorta a hacerlo a menudo y dice que quien se aparta del sacramento por mucho tiempo no ha de ser tenido por cristiano (Catecismo Mayor V.42). Antes, los que van a comulgar son examinados y absueltos (Confesión de Augsburgo XXV.1); y está bien preparado quien cree las palabras «por vosotros» (Catecismo Menor VI.10).",
    ],
    items: [
      {
        id: "CV-1",
        label: "La misa se conserva",
        text: "La misa se conserva entre nosotros y se celebra con la mayor reverencia",
        sources: [
          {
            citations: ["LACXXIV_1_3"],
            label: "Confesión de Augsburgo XXIV.1–3",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Una misa común, con comulgantes",
        text: "No hay misas privadas: «se conserva entre nosotros una misa común cada día de fiesta», y también otros días si alguien quiere el sacramento, «donde se da el sacramento a los que lo piden». La Apología: «entre nosotros se celebran misas todos los domingos y en las demás fiestas».",
        sources: [
          {
            citations: ["LACXXIV_13__34"],
            label: "Confesión de Augsburgo XXIV.13, 34",
          },
          {
            citations: ["LApXXIV_1"],
            label: "Apología XXIV.1",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Quién preside",
        text: "Nadie debe enseñar públicamente en la Iglesia ni administrar los sacramentos sin estar debidamente llamado",
        sources: [
          {
            citations: ["LACXIV"],
            label: "Confesión de Augsburgo XIV",
          },
        ],
      },
      {
        id: "CV-4",
        label: "Examen y absolución antes de comulgar",
        text: "No se suele dar el cuerpo del Señor sino a los que antes han sido examinados y absueltos",
        sources: [
          {
            citations: ["LACXXV_1"],
            label: "Confesión de Augsburgo XXV.1",
          },
          {
            citations: ["LACXXIV_6_7"],
            label: "Confesión de Augsburgo XXIV.6–7",
          },
          {
            citations: ["LApXXIV_49"],
            label: "Apología XXIV.49",
          },
        ],
      },
      {
        id: "CV-5",
        label: "Preparación: la fe",
        text: "Ayunar y prepararse corporalmente es, por cierto, una buena disciplina externa",
        sources: [
          {
            citations: ["LSCVI_9_10"],
            label: "Catecismo Menor VI.9–10",
          },
          {
            citations: ["LLCV_37"],
            label: "Catecismo Mayor V.37",
          },
        ],
      },
      {
        id: "CV-6",
        label: "Las palabras de la institución, en voz alta",
        text: "Deben «decirse o cantarse públicamente ante la asamblea, clara y distintamente, y no omitirse de ningún modo»: por obediencia al mandato «Haced esto», para que la fe de los oyentes sea «despertada, fortalecida y asegurada» por las palabras de Cristo, y para que el pan y el vino sean «santificados o bendecidos».",
        sources: [
          {
            citations: ["LFCEpVII_9"],
            label: "Epítome VII.9",
          },
          {
            citations: ["LFCSDVII_79_82"],
            label: "Declaración sólida VII.79–82",
          },
        ],
      },
      {
        id: "CV-7",
        label: "Toda la acción",
        text: "El pan y el vino se toman, se bendicen, se distribuyen, se reciben, se comen y se beben en la asamblea, y se anuncia la muerte del Señor; el pan consagrado no se encierra, ni se ofrece en sacrificio, ni se lleva en procesión.",
        sources: [
          {
            citations: ["LFCSDVII_83_84__87"],
            label: "Declaración sólida VII.83–84, 87",
          },
        ],
      },
      {
        id: "CV-8",
        label: "Pan y cáliz para todos; sin procesión",
        text: "A los laicos se les dan ambas especies; y «como la división del sacramento no concuerda con la institución de Cristo, entre nosotros suele omitirse la procesión».",
        sources: [
          {
            citations: ["LACXXII_1_2__12"],
            label: "Confesión de Augsburgo XXII.1–2, 12",
          },
        ],
      },
      {
        id: "CV-9",
        label: "Comulgar a menudo, sin obligación",
        text: "No se debe forzar ni obligar a nadie",
        sources: [
          {
            citations: ["LLCV_42"],
            label: "Catecismo Mayor V.42",
          },
          {
            citations: ["LLCV_39_47"],
            label: "Catecismo Mayor V.39–47",
          },
        ],
      },
      {
        id: "CV-10",
        label: "Los débiles, invitados",
        text: "El sacramento es para los que sienten su debilidad: «no depende de nuestra dignidad»; a los «insolentes y desenfrenados» hay que decirles «que se queden lejos».",
        sources: [
          {
            citations: ["LLCV_58__61__70_72"],
            label: "Catecismo Mayor V.58, 61, 70–72",
          },
          {
            citations: ["LFCEpVII_19"],
            label: "Epítome VII.19",
          },
          {
            citations: ["LFCSDVII_69_71"],
            label: "Declaración sólida VII.69–71",
          },
        ],
      },
      {
        id: "CV-11",
        label: "Adorar a Cristo en la Cena",
        text: "A Cristo, verdadero Dios y hombre, presente en la Cena, se le adora «en espíritu y en verdad en el verdadero uso de ella»; a los elementos, no.",
        sources: [
          {
            citations: ["LFCSDVII_126"],
            label: "Declaración sólida VII.126",
          },
        ],
      },
      {
        id: "CV-12",
        label: "Los niños y la Cena",
        text: "El padre de familia debe enseñar a sus hijos el catecismo; y «porque, como están bautizados y recibidos en la cristiandad, deben también gozar de esa comunión del sacramento».",
        sources: [
          {
            citations: ["LLCV_86_87"],
            label: "Catecismo Mayor V.86–87",
          },
          {
            citations: ["LLCV"],
            label: "Catecismo Mayor V",
          },
        ],
      },
      {
        id: "CV-13",
        label: "Los ritos pueden cambiar",
        text: "Las ceremonias no mandadas por Dios no son culto por sí mismas; cada congregación puede cambiarlas «del modo más útil y edificante», evitando escándalo y cuidando de los débiles.",
        sources: [
          {
            citations: ["LFCEpX_3_5"],
            label: "Epítome X.3–5",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que las propias confesiones luteranas usan para sus textos, con su definición en palabras de las confesiones.",
    grades: {
      scripture: {
        label: "Escritura: única regla y norma",
        definition:
          "«la única regla y norma según la cual deben ser estimados y juzgados todos los dogmas y todos los maestros» son «los escritos proféticos y apostólicos del Antiguo y del Nuevo Testamento» (unicam regulam et normam); «la sola Sagrada Escritura es reconocida como juez, norma y regla», «piedra de toque»",
        source: {
          citations: ["LFCEpRN_1_y_7"],
          label: "Epítome RN 1 y 7",
        },
      },
      confession: {
        label: "Confesión (símbolo)",
        definition:
          "Los demás escritos «no son jueces, como la Sagrada Escritura, sino solo testimonio y declaración de la fe», de cómo se entendió la Escritura en los artículos discutidos; y la doctrina común no ha de fundarse en escritos privados, sino en libros «compuestos, aprobados y recibidos en nombre de las iglesias»",
        source: {
          citations: ["LFCEpRN_8"],
          label: "Epítome RN 8",
        },
      },
      augsburg: {
        label: "Confesión de Augsburgo: «el símbolo de nuestro tiempo»",
        definition:
          "Aceptada «no porque la compusieran nuestros teólogos, sino porque ha sido tomada de la Palabra de Dios»",
        source: {
          citations: ["LFCEpRN_4"],
          label: "Epítome RN 4",
        },
      },
      catechism: {
        label: "Catecismos: «Biblia de los laicos»",
        definition:
          "Los catecismos Menor y Mayor, «en los que está comprendido todo lo que se trata más extensamente en la Sagrada Escritura y es necesario que un cristiano sepa para su salvación»",
        source: {
          citations: ["LFCEpRN_5"],
          label: "Epítome RN 5",
        },
      },
      thesis: {
        label: "Tesis afirmativa / antítesis (condena)",
        definition:
          "La Fórmula de Concordia confiesa «Creemos, enseñamos y confesamos…» y rechaza «Rechazamos y condenamos…»; sus antítesis son el rechazo de la propia tradición, en sus palabras",
        source: {
          citations: ["LFCEpVII"],
          label: "Epítome VII",
        },
      },
      witnesses: {
        label: "Testigos",
        definition:
          "Los Padres y los maestros posteriores «no deben ser recibidos de otro modo ni más allá que como testigos»",
        source: {
          citations: ["LFCEpRN_2"],
          label: "Epítome RN 2",
        },
      },
      adiaphora: {
        label: "Adiáforos (ritos)",
        definition:
          "Ceremonias «ni mandadas ni prohibidas en la Palabra de Dios», que «no son en sí mismas culto divino, ni siquiera parte de él»",
        source: {
          citations: ["LFCEpX_3"],
          label: "Epítome X.3",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
