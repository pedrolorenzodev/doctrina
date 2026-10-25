import type { DoctrinePage } from "@/content/model/doctrine-page";
import type { CitationId } from "@/content/registry/citations";

export const eucharistDoctrine = {
  doctrine: "eucharist",
  status: "draft",
  lede: "¿Qué pasa con el pan y el vino en la Cena del Señor?",
  legend: { witnessId: "ew-flesh", citationLabel: "Esmirniotas 7.1" },
  fingerprint: {
    marks: [
      { year: 50, yearEnd: 120, label: "La Didaché" },
      { year: 107, yearEnd: 110, label: "Ignacio de Antioquía" },
      { year: 150, label: "Justino Mártir, Primera Apología" },
      { year: 155, label: "Justino Mártir" },
      { year: 180, label: "Ireneo de Lyon" },
      { year: 207, label: "Tertuliano, Contra Marción" },
      { year: 350, yearEnd: 390, label: "Catequesis mistagógicas (Jerusalén)" },
      { year: 387, label: "Ambrosio de Milán, Sobre los misterios" },
      { year: 390, label: "Ambrosio de Milán" },
      { year: 396, yearEnd: 397, label: "Agustín de Hipona, Sobre la doctrina cristiana" },
      { year: 403, label: "Juan Crisóstomo, Homilías sobre Hebreos" },
      { year: 447, label: "Teodoreto de Ciro, Eranistes" },
      { year: 743, label: "Juan Damasceno, Exposición exacta de la fe ortodoxa" },
      { year: 787, label: "II Concilio de Nicea" },
      { year: 831, label: "Pascasio Radberto, Sobre el cuerpo y la sangre del Señor" },
      { year: 844, circa: true, label: "Ratramno de Corbie le responde" },
      { year: 1059, label: "Berengario de Tours" },
      { year: 1215, label: "IV Concilio de Letrán" },
      { year: 1272, yearEnd: 1273, label: "Tomás de Aquino" },
      { year: 1379, label: "John Wycliffe" },
      { year: 1439, label: "Concilio de Florencia" },
      { year: 1524, yearEnd: 1525, label: "La visión memorial de Zwinglio" },
      { year: 1529, label: "Coloquio de Marburgo" },
      { year: 1530, label: "Confesión de Augsburgo" },
      { year: 1536, label: "Calvino, Institución de la religión cristiana" },
      { year: 1549, label: "Consenso de Zúrich" },
      { year: 1551, label: "Concilio de Trento" },
      { year: 1577, label: "Fórmula de Concordia" },
      { year: 1647, label: "Confesión de Westminster" },
      { year: 1672, label: "Sínodo de Jerusalén (Confesión de Dositeo)" },
      { year: 1677, label: "Segunda Confesión Bautista de Londres" },
      { year: 1982, label: "Bautismo, Eucaristía y Ministerio (Lima)" },
      { year: 2000, label: "Fe y Mensaje Bautistas 2000" },
    ],
  },
  common: {
    text: "Todas las tradiciones celebran la Cena que Jesús instituyó, la consideran un mandato suyo y afirman que en ella el creyente recibe a Cristo y sus beneficios. Discrepan en el modo de esa presencia y en qué le ocurre al pan y al vino.",
    questions: ["¿Cómo está presente Cristo en la Cena?", "¿Qué le ocurre al pan y al vino?"],
  },
  answers: {
    subtitle: "Cada tradición, en sus propias palabras. Debajo de cada una, las objeciones que recibe.",
    items: [
      {
        tradition: "catholic",
        summary:
          "El pan y el vino se convierten realmente en el cuerpo y la sangre de Cristo. Permanecen las apariencias; cambia la sustancia. La Iglesia llama a este cambio transubstanciación.",
        grade: { grade: "dogma", basis: "definido en Trento (1551)" },
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
          "El pan y el vino se transforman verdaderamente en el cuerpo y la sangre de Cristo. La Iglesia confiesa el hecho como misterio y no lo define con una teoría filosófica.",
        grade: {
          basis: "en la liturgia, los Padres y los sínodos",
          definition: {
            label: "Fe unánime de la Iglesia",
            definition:
              "Lo que la Iglesia confiesa en su liturgia, en los Padres y en sus sínodos. Que el pan y el vino se cambian verdaderamente en el cuerpo y la sangre de Cristo se confiesa en la epíclesis de la Liturgia de san Juan Crisóstomo y en la Confesión de Dositeo, decreto 17 (1672). El término «metousiosis» es terminología de sínodos locales del siglo XVII (Iași 1642, Jerusalén 1672): ningún concilio ecuménico la definió y su peso se debate.",
            source: { citations: [], label: "Liturgia de san Juan Crisóstomo; Confesión de Dositeo, decreto 17" },
          },
        },
        objections: [
          { title: "Las palabras de Cristo ya consagran: la epíclesis sobra" },
          { title: "Dicen que es un misterio, pero en 1672 usaron «transubstanciación»" },
          { title: "Un bebé no puede examinarse a sí mismo antes de comulgar" },
        ],
      },
      {
        tradition: "lutheran",
        summary:
          "El verdadero cuerpo y la verdadera sangre de Cristo están realmente presentes «en, con y bajo» el pan y el vino, y se reciben con la boca. El pan sigue siendo pan.",
        grade: {
          basis: "Confesión de Augsburgo, art. X (1530)",
          definition: {
            label: "Dogma confesional",
            definition:
              "Obliga a todo pastor que suscribe el Libro de Concordia. Así se enseña que el cuerpo y la sangre de Cristo están verdadera y sustancialmente presentes, se distribuyen y se reciben con la boca, también por los indignos, para juicio.",
            source: {
              citations: [],
              label:
                "Confesión de Augsburgo X; Apología X; Fórmula de Concordia, Epítome VII.6, 15–16; Declaración Sólida VII.60–63",
            },
          },
        },
        objections: [
          { title: "«Es» significa «representa», como en «yo soy la puerta»" },
          { title: "Un cuerpo verdadero está en un solo lugar: el de Cristo está en el cielo" },
          { title: "Si «es» se toma al pie de la letra, el pan ya no puede ser pan" },
        ],
      },
      {
        tradition: "reformed",
        summary:
          "Cristo está real pero espiritualmente presente para la fe de los creyentes. El pan y el vino no cambian; quien recibe con fe se alimenta de Cristo crucificado.",
        grade: {
          basis: "Confesión de Westminster 29.7 (1647)",
          definition: {
            label: "Confesional",
            definition:
              "Vinculante para los oficiales que suscriben la Confesión de Westminster (presbiterianos) o las Tres Formas de Unidad (reformados continentales). Así se enseña que los que reciben dignamente se alimentan real y verdaderamente, por la fe y por el Espíritu, del cuerpo y la sangre de Cristo.",
            source: {
              citations: ["WCF297"],
              label:
                "Confesión de Westminster 29.7; Catecismo Mayor, P. 170; Confesión Belga, art. 35; Catecismo de Heidelberg, P. 76 y 79",
            },
          },
        },
        objections: [
          { title: "La presencia «espiritual» es una ausencia real con otro nombre" },
          { title: "Pablo dice que quien come indignamente peca contra el cuerpo" },
          { title: "Encerrar el cuerpo en el cielo divide la persona de Cristo" },
        ],
      },
      {
        tradition: "baptist",
        summary:
          "La Cena es un acto simbólico de obediencia: la iglesia recuerda la muerte del Redentor y anticipa su regreso. El pan y el vino son símbolos.",
        grade: {
          basis: "Fe y Mensaje Bautistas, art. VII (2000)",
          definition: {
            label: "Confesional",
            definition:
              "Solo la Escritura obliga la conciencia; las confesiones son guías, no credos impuestos. Una confesión es vinculante para las iglesias que la adoptan, y cada iglesia es autónoma para hacerlo. La Cena como acto simbólico de obediencia es confesional para las iglesias que adoptan la Fe y Mensaje Bautistas 2000. Las que suscriben la Confesión de 1689 confiesan además una presencia espiritual de Cristo para la fe (cap. 30, §7).",
            source: { citations: ["BFM7"], label: "Fe y Mensaje Bautistas 2000, preámbulo y art. VII" },
          },
        },
        objections: [
          { title: "Jesús dijo «esto es mi cuerpo», no «esto representa»" },
          { title: "La Iglesia antigua creía que el pan es la carne de Cristo" },
          { title: "«Comunión del cuerpo» y juicio por comer indignamente: no es solo un recuerdo" },
        ],
      },
    ],
  },
  witnesses: {
    subtitle:
      "Testigos de los primeros siglos, en orden de fecha. Esta sección es neutral: cada tradición lee estos textos a su manera.",
    historyLink: {
      label: "La historia completa de la Eucaristía",
      note: "Concilios, controversias y confesiones de fe, hasta hoy.",
    },
    items: [
      {
        id: "ew-sacrifice",
        author: "Anónimo",
        work: "Didaché",
        locator: "14.1–3",
        date: { year: 50, yearEnd: 120, circa: true },
        quote:
          "Cada día del Señor reuníos, partid el pan y dad gracias, después de haber confesado vuestras transgresiones, para que vuestro sacrificio sea puro. [...] Porque esto es lo que dijo el Señor: En todo lugar y tiempo ofrecedme un sacrificio puro.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 7 (Roberts y Donaldson), 1885.",
        note: "La fecha se discute: las propuestas van de mediados del siglo I a comienzos del II.",
        anonymous: true,
        authorLine:
          "Breve manual anónimo de enseñanza moral, bautismo, ayuno, oración y Eucaristía, probablemente compilado en Siria o Palestina.",
        paragraph:
          "Cada día del Señor reuníos, partid el pan y dad gracias, después de haber confesado vuestras transgresiones, para que vuestro sacrificio sea puro. Pero que nadie que tenga una disputa con su compañero se junte con vosotros hasta que se hayan reconciliado, para que vuestro sacrificio no sea profanado. Porque esto es lo que dijo el Señor: En todo lugar y tiempo ofrecedme un sacrificio puro; porque yo soy un gran Rey, dice el Señor, y mi nombre es admirable entre las naciones.",
      },
      {
        id: "ew-flesh",
        author: "Ignacio de Antioquía",
        work: "Carta a los Esmirniotas",
        locator: "7.1",
        date: { year: 107, yearEnd: 110, circa: true },
        quote:
          "Se abstienen de la Eucaristía y de la oración, porque no confiesan que la Eucaristía es la carne de nuestro Salvador Jesucristo, la que padeció por nuestros pecados y la que el Padre, en su bondad, resucitó.",
        edition:
          "Traducción al español de Doctrina, hecha desde el texto griego de la edición de Lake (First1KGreek) y cotejada con la traducción inglesa de dominio público: ANF vol. 1 (Roberts y Donaldson), 1885.",
        authorLine: "Obispo de Antioquía que, según la tradición, fue llevado preso a Roma y martirizado bajo Trajano.",
        paragraph:
          "Se abstienen de la Eucaristía y de la oración, porque no confiesan que la Eucaristía es la carne de nuestro Salvador Jesucristo, la que padeció por nuestros pecados y la que el Padre, en su bondad, resucitó. Por eso, quienes hablan contra este don de Dios incurren en la muerte en medio de sus disputas. Mejor les sería tratarlo con respeto, para que también ellos resucitaran. Conviene, pues, que os mantengáis apartados de tales personas y que no se hable de ellos ni en privado ni en público, sino que prestéis atención a los profetas, y sobre todo al Evangelio, en el cual se nos ha revelado la pasión de Cristo y se ha probado plenamente la resurrección. Evitad todas las divisiones, como principio de males.",
      },
      {
        id: "ew-not-common-bread",
        author: "Justino Mártir",
        work: "Primera Apología",
        locator: "66",
        date: { year: 150, yearEnd: 155, circa: true },
        quote:
          "Porque no tomamos estas cosas como pan común ni bebida común; sino que, así como Jesucristo nuestro Salvador, hecho carne por la Palabra de Dios, tuvo carne y sangre para nuestra salvación, así también se nos ha enseñado que el alimento sobre el que se ha dado gracias por la oración de su palabra, y del cual nuestra sangre y nuestra carne se nutren por transformación, es la carne y la sangre de aquel Jesús que se hizo carne.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 1 (Roberts y Donaldson), 1885.",
        authorLine:
          "Filósofo nacido en Flavia Neápolis (Samaria) que, tras su conversión, enseñó en Roma y defendió la fe ante emperadores y ante interlocutores judíos.",
        paragraph:
          "Y este alimento se llama entre nosotros Eucaristía, de la cual a nadie le es lícito participar sino al que cree que son verdaderas las cosas que enseñamos, y ha sido lavado con el baño para el perdón de los pecados y para la regeneración, y vive como Cristo ordenó. Porque no tomamos estas cosas como pan común ni bebida común; sino que, así como Jesucristo nuestro Salvador, hecho carne por la Palabra de Dios, tuvo carne y sangre para nuestra salvación, así también se nos ha enseñado que el alimento sobre el que se ha dado gracias por la oración de su palabra, y del cual nuestra sangre y nuestra carne se nutren por transformación, es la carne y la sangre de aquel Jesús que se hizo carne. Pues los apóstoles, en las memorias que compusieron, que se llaman Evangelios, nos transmitieron que así se les mandó: que Jesús tomó pan y, después de dar gracias, dijo: Haced esto en memoria de mí, esto es mi cuerpo; y que de la misma manera, tomando la copa y dando gracias, dijo: Esta es mi sangre; y se la dio a ellos solos.",
      },
      {
        id: "ew-malachi-offering",
        author: "Justino Mártir",
        work: "Diálogo con Trifón",
        locator: "41",
        date: { year: 155, yearEnd: 160, circa: true },
        quote:
          "Habla, pues, de aquellos gentiles, es decir, de nosotros, que en todo lugar le ofrecemos sacrificios, esto es, el pan de la Eucaristía y también la copa de la Eucaristía, afirmando que nosotros glorificamos su nombre y que vosotros lo profanáis.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 1 (Roberts y Donaldson), 1885.",
        authorLine:
          "Filósofo nacido en Flavia Neápolis (Samaria) que, tras su conversión, enseñó en Roma y defendió la fe ante emperadores y ante interlocutores judíos.",
      },
      {
        id: "ew-two-realities",
        author: "Ireneo de Lyon",
        work: "Contra las herejías",
        locator: "IV.18.5",
        date: { year: 180, circa: true },
        quote:
          "Porque así como el pan, que proviene de la tierra, al recibir la invocación de Dios ya no es pan común, sino Eucaristía, compuesta de dos realidades, terrena y celestial, así también nuestros cuerpos, al recibir la Eucaristía, ya no son corruptibles, pues tienen la esperanza de la resurrección para siempre.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 1 (Roberts y Rambaut), 1885.",
        authorLine:
          "Originario de Asia Menor, donde de joven escuchó a Policarpo, fue presbítero y luego obispo de Lyon tras la persecución de 177.",
        paragraph:
          "Entonces, ¿cómo pueden decir que la carne, que se nutre con el cuerpo del Señor y con su sangre, va a la corrupción y no participa de la vida? Que cambien, pues, de opinión, o dejen de ofrecer las cosas mencionadas. Pero nuestra opinión concuerda con la Eucaristía, y la Eucaristía, a su vez, confirma nuestra opinión. Porque le ofrecemos lo que es suyo, proclamando de manera coherente la comunión y la unión de la carne y el Espíritu. Porque así como el pan, que proviene de la tierra, al recibir la invocación de Dios ya no es pan común, sino Eucaristía, compuesta de dos realidades, terrena y celestial, así también nuestros cuerpos, al recibir la Eucaristía, ya no son corruptibles, pues tienen la esperanza de la resurrección para siempre.",
      },
      {
        id: "ew-figure",
        author: "Tertuliano",
        work: "Contra Marción",
        locator: "IV.40",
        date: { year: 207, yearEnd: 208, circa: true },
        quote:
          "Luego, tomando el pan y dándolo a sus discípulos, lo hizo su propio cuerpo diciendo: “Esto es mi cuerpo”, es decir, la figura de mi cuerpo. Pero no habría podido haber figura si antes no hubiera habido un cuerpo verdadero.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 3 (Holmes), 1885.",
        authorLine: "Teólogo y apologista de Cartago, primer gran autor cristiano en latín.",
      },
      {
        id: "ew-epiclesis-change",
        author: "Cirilo de Jerusalén (atribuido)",
        work: "Catequesis mistagógicas",
        locator: "5.7",
        date: { year: 350, yearEnd: 390, circa: true },
        quote:
          "Después, habiéndonos santificado con estos himnos espirituales, suplicamos al Dios misericordioso que envíe su Espíritu Santo sobre los dones presentes, para que haga del pan el cuerpo de Cristo y del vino la sangre de Cristo; porque todo lo que el Espíritu Santo toca queda santificado y cambiado.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 7 (Gifford), 1890.",
        note: "La autoría se discute: Cirilo de Jerusalén o su sucesor, Juan II.",
        authorLine: "Obispo de Jerusalén desde c. 350, desterrado varias veces en las disputas arrianas.",
      },
      {
        id: "ew-word-changes-nature",
        author: "Ambrosio de Milán",
        work: "Sobre los misterios",
        locator: "9.52",
        date: { year: 387, yearEnd: 391, circa: true },
        quote:
          "Si la palabra de Elías tuvo poder para hacer bajar fuego del cielo, ¿no tendrá la palabra de Cristo poder para cambiar la naturaleza de los elementos? [...] La palabra de Cristo, que pudo hacer de la nada lo que no existía, ¿no podrá cambiar las cosas que ya existen en lo que no eran?",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 10 (de Romestin), 1890.",
        authorLine: "Gobernador romano elegido obispo de Milán por aclamación en 374, cuando aún era catecúmeno.",
      },
      {
        id: "ew-augustine-figure",
        author: "Agustín de Hipona",
        work: "Sobre la doctrina cristiana",
        locator: "III.16.24",
        date: { year: 396, yearEnd: 397, circa: true },
        quote:
          "“Si no comiereis la carne del Hijo del hombre y bebiereis su sangre, no tendréis vida en vosotros”, dice Cristo. Esto parece mandar un crimen o una maldad; es, por tanto, una figura, que manda que participemos de los padecimientos del Señor y que guardemos un recuerdo dulce y provechoso de que su carne fue herida y crucificada por nosotros.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF1 vol. 2 (Shaw), 1890.",
        note: "Libros I a III.",
        authorLine: "Retórico nacido en Tagaste, convertido en Milán en 386 y obispo de Hipona desde 395 o 396.",
      },
      {
        id: "ew-one-sacrifice-remembrance",
        author: "Juan Crisóstomo",
        work: "Homilías sobre Hebreos",
        locator: "homilía 17.6",
        date: { year: 403, yearEnd: 404, circa: true },
        quote:
          "¿Qué, pues? ¿No ofrecemos cada día? Ofrecemos, sí, pero haciendo memoria de su muerte, y esta [memoria] es una y no muchas. [...] Porque ofrecemos siempre lo mismo, no hoy una oveja y mañana otra, sino siempre lo mismo, de modo que el sacrificio es uno. [...] No es otro sacrificio, como el del sumo sacerdote, sino que ofrecemos siempre el mismo, o más bien hacemos memoria de un sacrificio.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF1 vol. 14 (Gardiner), 1890.",
        note: "Publicadas después de su muerte.",
        authorLine: "Predicador de Antioquía, apodado «Boca de Oro», elegido arzobispo de Constantinopla en 398.",
      },
      {
        id: "ew-symbols-remain",
        author: "Teodoreto de Ciro",
        work: "Eranistes (Diálogos)",
        locator: "diálogo II",
        date: { year: 447, circa: true },
        quote:
          "Porque aun después de la consagración los símbolos místicos no quedan privados de su propia naturaleza; permanecen en su sustancia, figura y forma anteriores; son visibles y tangibles como antes. Pero se los considera como lo que han llegado a ser, se cree que lo son y se los adora como lo que se cree que son.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 3 (Jackson), 1890.",
        authorLine: "Obispo de Ciro, exégeta e historiador de la tradición antioquena.",
      },
      {
        id: "ew-not-a-figure",
        author: "Juan Damasceno",
        work: "Exposición exacta de la fe ortodoxa",
        locator: "IV.13",
        date: { year: 743, circa: true },
        quote:
          "El pan y el vino no son meras figuras del cuerpo y la sangre de Cristo (¡Dios no lo permita!), sino el cuerpo mismo deificado del Señor; porque el Señor dijo: “Esto es mi cuerpo”, no “esto es figura de mi cuerpo”; y “mi sangre”, no “figura de mi sangre”.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 9 (Salmond), 1890.",
        authorLine:
          "Funcionario cristiano del califato omeya que se hizo monje en el monasterio de Mar Saba, cerca de Jerusalén.",
      },
    ],
  },
  practice: {
    subtitle:
      "Lo que dicen de la celebración los textos oficiales de cada tradición: quién preside, con qué pan y vino, y qué se hace con lo que sobra.",
    aspects: [
      {
        id: "presides",
        label: "Quién preside",
        cells: {
          catholic: {
            text: "Solo un sacerdote válidamente ordenado, que actúa en la persona de Cristo",
            sources: [{ citations: ["CEC1348", "CEC1411"], label: "Catecismo 1348, 1411" }],
          },
          orthodox: {
            text: "El sacerdote, que invoca al Espíritu Santo sobre los dones",
            sources: [{ citations: ["MOG107"], label: "Confesión de Pedro Mogila I.107" }],
          },
          lutheran: {
            text: "Un pastor ordenado y debidamente llamado",
            sources: [{ citations: [], label: "Confesión de Augsburgo XIV" }],
          },
          reformed: {
            text: "Solo un ministro de la Palabra legítimamente ordenado",
            sources: [{ citations: ["WCF274"], label: "Confesión de Westminster 27.4" }],
          },
          baptist: {
            text: "El ministro, que ora, bendice los elementos, parte el pan y los da",
            sources: [{ citations: [], label: "Segunda Confesión de Londres 30.3" }],
          },
        },
      },
      {
        id: "bread-and-wine",
        label: "Pan y vino",
        cells: {
          catholic: {
            text: "Pan de trigo, ázimo en el rito latino, y vino de vid con un poco de agua",
            sources: [{ citations: ["CIC924", "CIC926"], label: "Código de Derecho Canónico, cáns. 924, 926" }],
          },
          orthodox: {
            text: "Pan con levadura y vino mezclado con agua",
            sources: [{ citations: ["MOG107"], label: "Confesión de Pedro Mogila I.107" }],
          },
          lutheran: {
            text: "Pan y vino; los dos se dan a todos los que comulgan",
            sources: [{ citations: ["AC22"], label: "Confesión de Augsburgo XXII" }],
          },
          reformed: {
            text: "Pan y vino, que siguen siendo «verdadera y únicamente pan y vino»",
            sources: [{ citations: [], label: "Confesión de Westminster 29.5" }],
          },
          baptist: { text: "Pan y vino", sources: [{ citations: [], label: "Segunda Confesión de Londres 30.3" }] },
        },
      },
      {
        id: "leftovers",
        label: "Lo que sobra",
        cells: {
          catholic: {
            text: "Se reserva en el sagrario, ante una lámpara; se adora y se lleva en procesión",
            sources: [
              {
                citations: ["CIC938", "CEC1378", "CEC1379"],
                label: "Código de Derecho Canónico, cáns. 938, 940; Catecismo 1378–1379",
              },
            ],
          },
          orthodox: {
            text: "Se guardan dones consagrados para la Liturgia de los Presantificados, en Cuaresma",
            sources: [{ citations: [], label: "Concilio Quinisexto, can. 52" }],
          },
          lutheran: {
            text: "No se reserva para la adoración ni se lleva en procesión: fuera del uso instituido no hay sacramento",
            sources: [{ citations: [], label: "Fórmula de Concordia, Declaración Sólida VII.85–87" }],
          },
          reformed: {
            text: "No se reserva, no se eleva ni se adora",
            sources: [{ citations: ["WCF294"], label: "Confesión de Westminster 29.4" }],
          },
          baptist: {
            text: "No se reserva ni se adora",
            sources: [{ citations: [], label: "Segunda Confesión de Londres 30.4" }],
          },
        },
      },
    ],
  },
  connected: {
    subtitle: "Lo que cada tradición responde aquí pesa también en estas doctrinas.",
    items: [
      {
        doctrine: "justification",
        text: "Los luteranos llaman a la Cena un don del perdón de los pecados recibido por la fe; rechazan la misa como obra meritoria; los católicos responden que el sacrificio aplica los méritos de la cruz, no méritos nuevos.",
      },
      {
        doctrine: "baptism",
        text: "Todas las tradiciones exigen el bautismo antes de la comunión; de este vínculo surgen las disputas sobre el bautismo de niños (bautistas) y la comunión de niños (ortodoxos).",
      },
    ],
  },
} satisfies DoctrinePage<CitationId>;
