import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const eucharistCatholic = {
  doctrine: "eucharist",
  tradition: "catholic",
  status: "draft",
  title: "La posición católica",
  lede: "Cómo la Iglesia católica entiende la Eucaristía, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que la Iglesia católica enseña sobre la Eucaristía, con el grado de autoridad que le corresponde según las categorías de la Iglesia.",
    definition: {
      text: "Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo, instituido en la última Cena para hacer presente el sacrificio de la cruz hasta que él vuelva, y a la vez el banquete en el que se recibe a Cristo mismo.",
      grades: [
        {
          kind: "church",
          grade: "magisterium",
          basis: "Vaticano II; su afirmación del sacrificio repite un dogma de Trento (QE-3)",
        },
      ],
      sources: [
        {
          citations: ["SC47"],
          label: "Sacrosanctum Concilium 47",
        },
        {
          citations: ["CEC1323"],
          label: "Catecismo 1323",
        },
        {
          citations: ["CEC1382"],
          label: "Catecismo 1382",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la presencia real",
        text: "En la Eucaristía, después de la consagración, está contenido verdadera, real y sustancialmente Cristo entero: su cuerpo y su sangre, con su alma y su divinidad. No está solo como en un signo o una figura. La Iglesia la llama presencia «real» por excelencia, no porque las otras presencias de Cristo (en su Palabra, en la oración de la Iglesia, en los sacramentos) no sean reales.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis: "así lo clasifica la {c:CDF11,CDF5|Congregación para la Doctrina de la Fe (1998, §11)}",
          },
        ],
        sources: [
          {
            citations: ["T13c1"],
            label: "Trento, ses. XIII, cap. 1",
          },
          {
            citations: ["T13can1"],
            label: "Trento, ses. XIII, can. 1",
          },
          {
            citations: ["CEC1373", "CEC1374"],
            label: "Catecismo 1373–1374",
          },
          {
            citations: ["SC7"],
            label: "Sacrosanctum Concilium 7",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la transubstanciación",
        text: "Por la consagración, toda la sustancia del pan se convierte en la sustancia del cuerpo de Cristo y toda la sustancia del vino en la de su sangre; del pan y del vino quedan solo las especies (lo que se ve, se toca y se gusta). La Iglesia llama a este cambio «transubstanciación».",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis: "definido por Trento (ses. XIII, cap. 4 y can. 2); la Iglesia no lo ha clasificado por separado",
          },
        ],
        sources: [
          {
            citations: ["T13c4"],
            label: "Trento, ses. XIII, cap. 4",
          },
          {
            citations: ["T13can2"],
            label: "Trento, ses. XIII, can. 2",
          },
          {
            citations: ["LAT1"],
            label: "Letrán IV, const. 1",
          },
          {
            citations: ["MF10", "MF24", "MF46"],
            label: "Mysterium fidei 10, 24, 46",
          },
          {
            citations: ["CEC1376"],
            label: "Catecismo 1376",
          },
        ],
      },
      {
        id: "QE-3",
        short: "el sacrificio de la Misa",
        text: "La Misa es un sacrificio verdadero y propio: sacrificio de acción de gracias y de alabanza al Padre, y memorial de la Pascua de Cristo. No es otro sacrificio distinto del de la cruz: la víctima y el que ofrece son los mismos, Cristo, y solo cambia el modo de ofrecerse, que ahora es incruento. Por eso la Iglesia enseña que es también propiciatorio y que puede ofrecerse por vivos y difuntos.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis: "así lo clasifica la {c:CDF11|Congregación para la Doctrina de la Fe (1998, §11)}",
          },
        ],
        sources: [
          {
            citations: ["T22c1"],
            label: "Trento, ses. XXII, cap. 1",
          },
          {
            citations: ["T22c2"],
            label: "Trento, ses. XXII, cap. 2",
          },
          {
            citations: ["T22can"],
            label: "Trento, ses. XXII, cann. 1, 3 y 4",
          },
          {
            citations: ["CEC1360"],
            label: "Catecismo 1360–1362",
          },
          {
            citations: ["CEC1366b"],
            label: "Catecismo 1366–1367",
          },
          {
            citations: ["EdE12"],
            label: "Ecclesia de Eucharistia 12",
          },
        ],
      },
      {
        id: "QE-4",
        short: "Cristo entero en cada especie",
        text: "Bajo la especie del pan y bajo la del vino está Cristo entero, y también en cada parte de cada una: partir la hostia no divide a Cristo. Por eso quien comulga solo con el pan recibe a Cristo entero.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "definido por Trento (ses. XIII, can. 3; ses. XXI, can. 3); la Iglesia no lo ha clasificado por separado",
          },
        ],
        sources: [
          {
            citations: ["T13c3"],
            label: "Trento, ses. XIII, cap. 3",
          },
          {
            citations: ["T21c3"],
            label: "Trento, ses. XXI, cap. 3 y can. 3",
          },
          {
            citations: ["CEC1377"],
            label: "Catecismo 1377",
          },
        ],
      },
      {
        id: "QE-5",
        short: "la adoración",
        text: "Como Cristo mismo está presente, a la Eucaristía se le da el culto de adoración que se debe solo a Dios. Por eso se la guarda en el sagrario, se la lleva a los enfermos, se la expone para la adoración y se la lleva en procesión.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis: "definido por Trento (ses. XIII, cann. 6–7); la Iglesia no lo ha clasificado por separado",
          },
        ],
        sources: [
          {
            citations: ["T13c5"],
            label: "Trento, ses. XIII, cap. 5",
          },
          {
            citations: ["T13can6"],
            label: "Trento, ses. XIII, can. 6",
          },
          {
            citations: ["T13c6"],
            label: "Trento, ses. XIII, cap. 6",
          },
          {
            citations: ["CEC1378"],
            label: "Catecismo 1378",
          },
        ],
      },
      {
        id: "QE-6",
        short: "el sacerdocio",
        text: "Para la Iglesia católica, con las palabras «haced esto en memoria de mí» {v:Luke.22.19}, Cristo hizo sacerdotes a los apóstoles y les mandó ofrecer su cuerpo y su sangre. Por eso solo un sacerdote válidamente ordenado, obispo o presbítero, puede consagrar la Eucaristía.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
          },
        ],
        sources: [
          {
            citations: ["T22can2"],
            label: "Trento, ses. XXII, can. 2",
          },
          {
            citations: ["LAT1"],
            label: "Letrán IV, const. 1",
          },
          {
            citations: ["CIC900"],
            label: "Código de Derecho Canónico, can. 900",
          },
          {
            citations: ["CEC1411"],
            label: "Catecismo 1411",
          },
        ],
      },
      {
        id: "QE-7",
        short: "la comunión bajo una especie",
        text: "Ningún mandato divino obliga a los fieles a comulgar con las dos especies, porque bajo cualquiera de ellas se recibe a Cristo entero. Comulgar solo con el pan es una ley de la Iglesia, que ella puede cambiar; hoy, en el rito latino, se permite también la comunión bajo las dos especies; en los ritos orientales católicos es la forma habitual ({c:CEC1390|Catecismo 1390}).",
        grades: [
          {
            kind: "church",
            grade: "dogma",
          },
          {
            kind: "church",
            grade: "discipline",
          },
        ],
        sources: [
          {
            citations: ["T21can1"],
            label: "Trento, ses. XXI, can. 1",
          },
          {
            citations: ["T21c2"],
            label: "Trento, ses. XXI, cap. 2",
          },
          {
            citations: ["SC55"],
            label: "Sacrosanctum Concilium 55",
          },
          {
            citations: ["CIC925"],
            label: "Código de Derecho Canónico, can. 925",
          },
          {
            citations: ["CEC1390"],
            label: "Catecismo 1390",
          },
        ],
      },
      {
        id: "QE-8",
        short: "los frutos de la comunión",
        text: "Comulgar une más a Cristo, perdona los pecados veniales y preserva de los graves. No está ordenada a perdonar los pecados mortales: para eso está la confesión. Quien tiene conciencia de pecado grave debe confesarse antes de comulgar, salvo que haya un motivo grave y no pueda confesarse; en ese caso debe hacer un acto de contrición perfecta, con el propósito de confesarse cuanto antes.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
          },
          {
            kind: "church",
            grade: "discipline",
          },
        ],
        sources: [
          {
            citations: ["T13c2"],
            label: "Trento, ses. XIII, cap. 2",
          },
          {
            citations: ["T13can5"],
            label: "Trento, ses. XIII, can. 5",
          },
          {
            citations: ["T13c7", "T13can11"],
            label: "Trento, ses. XIII, cap. 7 y can. 11",
          },
          {
            citations: ["CEC1457"],
            label: "Catecismo 1457",
          },
          {
            citations: ["CEC1395", "CEC1416"],
            label: "Catecismo 1395, 1416",
          },
        ],
      },
      {
        id: "QE-9",
        short: "la Eucaristía hace la Iglesia",
        text: "Para la Iglesia católica, la Eucaristía es «fuente y cumbre de toda la vida cristiana» y «hace la Iglesia»: quienes la reciben se unen más a Cristo y, por eso, Cristo los une entre sí en un solo cuerpo ({c:CEC1396|Catecismo 1396}). Por la misma razón enseña que celebrarla «no puede ser el punto de partida de la comunión, que la presupone previamente» ({c:EdE35|Ecclesia de Eucharistia 35}). Reconoce en las Iglesias ortodoxas verdaderos sacramentos, y sobre todo el sacerdocio y la Eucaristía; con las comunidades nacidas de la Reforma no admite la intercomunión. Distingue de la intercomunión el caso de una necesidad espiritual grave, en el que puede darse la comunión a otros cristianos que comparten la fe católica sobre este sacramento ({c:CEC1401|Catecismo 1401}; {c:EdE45|Ecclesia de Eucharistia 45}).",
        grades: [
          {
            kind: "church",
            grade: "magisterium",
          },
          {
            kind: "church",
            grade: "discipline",
          },
        ],
        sources: [
          {
            citations: ["LG11"],
            label: "Lumen gentium 11",
          },
          {
            citations: ["CEC1396", "EdE26"],
            label: "Catecismo 1396",
          },
          {
            citations: ["EdE35", "EdE38"],
            label: "Ecclesia de Eucharistia 35, 38",
          },
          {
            citations: ["CEC1399", "CEC1400"],
            label: "Catecismo 1399–1400",
          },
          {
            citations: ["CEC1401", "EdE45"],
            label: "Catecismo 1401; Ecclesia de Eucharistia 45",
          },
          {
            citations: ["CIC844"],
            label: "Código de Derecho Canónico, can. 844",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "La Iglesia católica funda esta enseñanza, ante todo, en las palabras de Cristo en la última Cena, tomadas en su sentido propio: «Esto es mi cuerpo». {c:T13c1,T13c4|Trento, ses. XIII, caps. 1 y 4}",
      "Las lee junto con el discurso del pan de vida (Juan 6) y con las palabras «que por vosotros es dado» y «derramada por muchos», que muestran un sacrificio {v:Luke.22.19} {v:Matt.26.28}. {c:EdE16|Ecclesia de Eucharistia 16} {c:CEC1336|Catecismo 1336} {c:CEC1365|Catecismo 1365} {c:EdE12|Ecclesia de Eucharistia 12} {c:T22c1|Trento, ses. XXII, cap. 1}",
      "Y sostiene que la Iglesia siempre lo creyó así. {c:T13c4|Trento, ses. XIII, cap. 4}",
    ],
    fathers: [
      {
        lead: "El Catecismo cita a san Juan Crisóstomo:",
        quote: [
          "No es el hombre quien hace que las cosas ofrecidas se conviertan en Cuerpo y Sangre de Cristo, sino Cristo mismo que fue crucificado por nosotros. El sacerdote, figura de Cristo, pronuncia estas palabras, pero su eficacia y su gracia provienen de Dios. Esto es mi Cuerpo, dice. Esta palabra transforma las cosas ofrecidas.",
        ],
        author: "San Juan Crisóstomo",
        work: "Homilías sobre la traición de Judas",
        date: {
          year: 388,
          attribution: "según Baur",
        },
        citedIn: {
          citations: ["CEC1375"],
          label: "Catecismo 1375",
        },
      },
      {
        lead: "El Catecismo cita a san Ambrosio:",
        quote: [
          "Estemos bien persuadidos de que esto no es lo que la naturaleza ha producido, sino lo que la bendición ha consagrado, y de que la fuerza de la bendición supera a la de la naturaleza, porque por la bendición la naturaleza misma resulta cambiada.",
          "La palabra de Cristo, que pudo hacer de la nada lo que no existía, ¿no podría cambiar las cosas existentes en lo que no eran todavía?",
        ],
        author: "San Ambrosio",
        work: "Sobre los misterios",
        date: {
          year: 387,
          yearEnd: 391,
          circa: true,
        },
        citedIn: {
          citations: ["CEC1375"],
          label: "Catecismo 1375",
        },
      },
    ],
    note: "Estos textos no se asignan a ninguna tradición de hoy: están en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para la Iglesia católica, Juan 6 no admite una lectura metafórica: ante el asombro de los oyentes, Jesús se ve obligado, dice Juan Pablo II, «a recalcar la verdad objetiva de sus palabras»: «Mi carne es verdadera comida y mi sangre verdadera bebida» {v:John.6.55}. Y concluye: «No se trata de un alimento metafórico» {c:EdE16|Ecclesia de Eucharistia 16}.",
  },
  scriptureSubtitle: "Los pasajes que los documentos católicos citan sobre la Eucaristía, y cómo los leen.",
  scripture: [
    {
      refs: ["Matt.26.26-Matt.26.28", "Mark.14.22-Mark.14.24", "Luke.22.19-Luke.22.20", "1Cor.11.23-1Cor.11.26"],
      text: "Para la Iglesia católica, «esto es mi cuerpo… esto es mi sangre» {v:Matt.26.26,Matt.26.28} se lee en su sentido propio: Cristo dio a los apóstoles su propio cuerpo y su propia sangre {c:T13c1|Trento, ses. XIII, cap. 1}. «Que por vosotros es dado» {v:Luke.22.19} y «derramada por muchos para remisión de los pecados» {v:Matt.26.28} muestran que es un sacrificio {c:CEC1365|Catecismo 1365}.",
      apologists: {
        arguments: [
          {
            title:
              "En la institución, Jesús habla del cuerpo y la sangre entregados y derramados en presente: «esto sugiere» que el sacrificio de la cruz se hizo presente (Broussard); la «sangre de la alianza» es paralela a la alianza de Moisés, que «yo diría que ya es una fuerte evidencia» de que lo que hay en el cáliz es realmente sangre (Heschmeyer)",
            quotes: [
              {
                speaker: "Karlo Broussard",
                work: "Evidence Christ Offered the Last Supper as a Sacrifice",
                outlet: "Catholic Answers Magazine",
                date: "26 de octubre de 2016",
                locator:
                  "3 párrafos: del párrafo que empieza «Although there are more clues that suggest the sacrificial…» al que termina «…day was mysteriously made present in an unbloody manner.»",
                url: "https://www.catholic.com/magazine/online-edition/evidence-christ-offered-the-last-supper-as-a-sacrifice",
                text: "Aunque hay más pistas que sugieren la naturaleza sacrificial de la Última Cena, creo que estas bastan. Pero ahora debemos preguntar: “¿Qué sacrificio es la Última Cena?” La respuesta es: “¡Es el sacrificio de Cristo!”  El Catecismo de la Iglesia Católica afirma:\n\nEn la Eucaristía, Cristo nos da el mismo cuerpo que entregó por nosotros en la cruz, la misma sangre que “derramó por muchos para el perdón de los pecados”. La Eucaristía es, por tanto, un sacrificio porque re-presenta (hace presente) el sacrificio de la cruz (CCC, 1365-1366).\n\n¿Cuál es el respaldo bíblico? Observa que en los relatos de la Última Cena Jesús habla de su propio cuerpo siendo entregado (ver Lucas 22:19) y de su propia sangre siendo derramada (ver Marcos 14:24, Mateo 26:28, Lucas 22:20). Lo interesante es que no habla de su cuerpo y su sangre como algo que será entregado y derramado. En todos los relatos de la institución, Jesús habla de dar su cuerpo y su sangre en tiempo presente: “este es mi cuerpo que es entregado por ustedes” (Lucas 22:19); “la copa que es derramada por ustedes” (Lucas 22:20; Marcos 14:24; Mt. 26:28). Esto sugiere que el sacrificio cruento que Jesús iba a ofrecer en la cruz al día siguiente quedó misteriosamente hecho presente de manera incruenta.",
                original:
                  "Although there are more clues that suggest the sacrificial nature of the Last Supper, I think these suffice. But now we must ask, “What sacrifice is the Last Supper?” The answer is, “It’s Christ’s sacrifice!”  The Catechism of the Catholic Church states:\n\nIn the Eucharist Christ gives us the very body which he gave up for us on the cross, the very blood which he “poured out for many for the forgiveness of sins.” The Eucharist is thus a sacrifice because it re-presents (makes present) the sacrifice of the cross (CCC, 1365-1366).\n\nWhat’s the biblical support? Notice in the Last Supper narratives Jesus speaks of his own body being given up (see Luke 22:19) and his own blood being poured out (see Mark 14:24, Matthew 26:28, Luke 22:20). What’s interesting is that he doesn’t speak of his body and blood as that which will be given up and poured out. In all of the institution narratives Jesus speaks of giving his body and blood in the present tense—“this is my body which is given for you” (Luke 22:19); “the cup which is poured out for you” (Luke 22:20; Mark 14:24; Matt. 26:28). This suggests that the bloody sacrifice Jesus was to offer on the cross the next day was mysteriously made present in an unbloody manner.",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "The New Covenant Argument Against Baptist Theology",
                outlet: "Shameless Popery",
                date: "4 de agosto de 2026",
                locator: "Párrafo que empieza «Well, since God is the author of both…»",
                url: "https://www.catholic.com/audio/sp/the-new-covenant-argument-against-baptist-theology",
                text: "Ahora bien, el paralelo entre “he aquí la sangre del pacto”, que ratifica el antiguo pacto, y “esta es mi sangre del pacto”, que ratifica el nuevo pacto, debería ser claro. Eso, por sí solo, sugiero, ya es una fuerte evidencia de que, como Moisés antes que él, lo que Jesús tiene en ese cáliz es realmente sangre.",
                original:
                  "Now, the parallel between behold the blood of the covenant, ratifying the old covenant, and this is my blood of the covenant, ratifying the new covenant should be clear. That even on its own, I would suggest is already strong evidence that like Moses before him, what Jesus has in that chalice really is blood.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Luke.22.19"],
      text: "Para la Iglesia católica, con estas palabras Cristo hizo sacerdotes a los apóstoles y les mandó ofrecer su cuerpo y su sangre {c:T22can2|Trento, ses. XXII, can. 2}. El memorial no es solo recordar: es la celebración litúrgica que hace presente lo que recuerda {c:CEC1341|Catecismo 1341, 1363}.",
      apologists: {
        arguments: [
          {
            title: "«Haced esto en memoria de mí» es un memorial sacrificial, no un mero recuerdo",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Does the Mass Put Jesus Back on the Cross?",
                outlet: "Shameless Popery",
                date: "17 de abril de 2025",
                locator:
                  "5 párrafos: del párrafo que empieza «He calls Good Friday preparation of the Passover. Now,…» al que termina «…about a few other sacrificial dimensions, so to speak.»",
                url: "https://www.catholic.com/audio/sp/does-the-mass-put-jesus-back-on-the-cross",
                text: "Él llama al Viernes Santo “preparación de la Pascua”. Ahora bien, podría querer decir eso literalmente, o podría querer decir simplemente que esto es el cumplimiento. Este es el día de preparación de Cristo. Pues bien, de igual modo, ¿cuál es el cumplimiento del primer día de los panes sin levadura, la comida de la Pascua? Pues bien, Marcos 14 describe la Última Cena como el primer día de los panes sin levadura. Y luego dice: cuando sacrifican el cordero pascual, eso es bastante significativo, ¿verdad? Porque comer el cordero, y él sigue hablando de esto en el contexto de una ofrenda sacrificial. Y luego en Lucas 22, como dije antes, Jesús dice: “Con ansias he deseado comer esta Pascua con ustedes”. Así que aquí es donde obtenemos algo realmente significativo. Recuerden que lo que había que hacer en la Pascua bajo pena de excomunión era comer el cordero. Y sin embargo, cuando lees los relatos de la Última Cena de Mateo, Marcos, Lucas y Juan, ninguno de ellos menciona jamás que comieran cordero.\n\nEs una omisión chocante, a menos que estén comiendo la carne de Cristo, el Cordero de Dios. Entonces, ¿dónde vemos el cumplimiento de la matanza del cordero pasivo? El Viernes Santo. ¿Dónde vemos el cumplimiento de comer el cordero pascual? El Jueves Santo, está ahí mismo, pero no solo el Jueves Santo, también en cada misa después de eso. Ahora bien, había oído esta afirmación durante mucho tiempo sin estar seguro de si era verdadera, así que había dudado en hacerla hasta que la encontré en fuentes judías. Y es esta afirmación: que cuando comías la Pascua, no era solo un recuerdo de un evento pasado; que, de algún modo, la comprensión judía es que la Pascua se hacía presente, que había una presencia, perdón, una presencia actual de ese evento pasado. Y esto resulta realmente importante porque en la Pascua de Jesús, en la Última Cena, él dice: “Este es mi cuerpo que es entregado por ustedes”.\n\nY luego dice: “Hagan esto en memoria de mí”, y la palabra usada ahí para memoria es anamnesis. Ahora bien, muchos protestantes escuchan esto y dicen: ah, bueno, sé lo que es un recuerdo, como recordar un evento pasado que no se hace presente. Esa no es una buena comprensión. En el contexto judío, en primer lugar, anamnesis tiene un matiz particularmente sacrificial. La única otra vez que vemos anamnesis descrita, o perdón, la palabra anamnesis usada en el Nuevo Testamento cuando no habla de la Eucaristía, es cuando habla de las ofrendas sacrificiales por el pecado que traían una anamnesis, un recuerdo del pecado que no era simplemente: ah, sí, eso lo hice. No, el pecado se hace presente de alguna manera en la ofrenda por el pecado. Hay una teología mucho más profunda que desplegamos ahí. Pero el punto es que anamnesis no significa simplemente: ah, sí, recuerdo que fui al colegio con ese tipo.\n\nNo es así. Y podrías preguntar: bueno, ¿cómo lo sabemos? Pues lo sabemos en parte por la propia Escritura, particularmente en el contexto de la Pascua, porque, de nuevo, cuando estás celebrando la cena pascual, “le explicarás a tu hijo aquel día: es por lo que el Señor hizo por mí cuando salí de Egipto”. Eso está ahí mismo: Éxodo 13, versículo 8. Ahora fíjate en que no dices: esto es lo que sucedió a mis antepasados. Un judío, en cualquier siglo, debía decir: esto es lo que te sucedió a ti. Debías afirmar que la Pascua se aplicaba a ti personalmente. Eso no es solo una rareza extraña en la lengua de Éxodo 13; los rabinos se aferraron a esto y comentaron —lo encuentras en el Talmud— que en cada generación una persona debe considerarse a sí misma como si personalmente hubiera salido de Egipto. Y luego cita Éxodo 13.\n\nEn cada generación, cada persona debe decir esto: lo que el Señor hizo por mí, y no lo que el Señor hizo por mis antepasados. Así que entiende que la comprensión judía de la Pascua implicaba que la Pascua se hacía presente de alguna manera mística cada vez que se celebraba, en cada generación. Era como si fuera fresca y nueva. Participabas en la única Pascua. No la repetías; participabas en la Pascua de una vez para siempre desde Egipto, en cada generación. Este es un marco realmente importante para entender cómo es en cada misa. Podemos decir que participamos en este acontecimiento del siglo I, de una vez para siempre. Solo hay que entenderlo bíblicamente de una manera que muchos han perdido de vista, porque no leemos el Nuevo Testamento con la mirada puesta en el Antiguo. Así que esa es la Pascua; y, obviamente, se podría decir mucho más, pero quiero asegurarme de hablar de algunas otras dimensiones sacrificiales, por así decirlo.",
                original:
                  "He calls Good Friday preparation of the Passover. Now, he might mean that literally, or he might mean that just that this is the fulfillment. This is Christ’s preparation day. Well, likewise, what is the fulfillment of the first day of unleavened bread, the eating of the Passover meal? Well, mark 14 describes the last supper as the first day of unleavened bread. And then he says, when they sacrifice the Passover lamb, that’s actually pretty significant, right? Because eating the lamb, and he’s still talking about this in the context of a sacrificial offering. And then in Luke 22, as I said before, Jesus says, I’ve earnestly desired to eat this Passover with you. So here’s where we get something really significant. Remember, the thing you had to do in the Passover upon pain of excommunication was eat the lamb. And yet when you read Matthew, mark, Luke, and John’s account of the Last Supper, not one of them ever mentions them eating lamb.\n\nThat is a shocking omission unless they’re eating the flesh of Christ, the lamb of God. So where do we see the fulfillment of the killing of the passive lamb? Good Friday. Where do we see the fulfillment of the eating of the Passover lamb? Holy Thursday, it’s right there, but not just holy Thursday, also every mass after that. Now, I’d heard this claim for a long time that I wasn’t sure if it was true, so I’d hesitated making it until I actually found it in Jewish sources. And it’s this claim that when you ate the Passover, it wasn’t just a recollection of a past event that somehow the Jewish understanding is that the Passover became present, that there was a present, a presence, excuse me, of this past event, and this becomes really important because at Jesus’s Passover at the Last Supper, he says, this is my body which is given for you.\n\nAnd then he says, do this in remembrance of me, and from the word anamnesis is the word used for remembrance there. Now, many Protestants hear this and they, oh, okay, I know what a remembrance is, just like recalling a past event that isn’t made present. That’s not a good understanding. In the Jewish context, for one anamnesis has a particularly sacrificial kind of overtone to it. The only other time we see anamnesis described, or excuse me, the word anamnesis used in the New Testament when it’s not talking about the Eucharist, he’s talking about the sacrificial sin offerings that would bring an anamnesis, a remembrance of sin that wasn’t just like, oh yeah, I did that. No, the sin is being made present in some way in the offering for the sin. There’s a much deeper theology that we kind of unpack there. But the point there is anamnesis doesn’t just mean like, oh yeah, I remember I went to school with that guy.\n\nIt’s not like that. And you might say, well, how do we know that? Well, we know that partly from scripture itself, particularly in the context of the Passover, because again, when you’re having the Passover meal, you shall tell your son on that day. It is because what the Lord did for me when I came out of Egypt, that’s right there. Exodus 13 verse eight. Now notice that you don’t say this is what happened for my forefathers. You a Jew in any century were to say, this is what had happened to you. You were to claim that the Passover applied to you personally. That’s not just some weird quirk in the language of Exodus 13, the rabbis seized upon this and they commented, you find this in the Talmud, in each and every generation, a person must view himself as though he personally left Egypt. And then it quotes Exodus 13.\n\nIn every generation, each person must say this, which the Lord did for me and not this which the Lord did for my forefathers. So understand that the Jewish understanding of Passover involved the Passover somehow mystically being made present every time it was celebrated in every generation. It was as if it was fresh and new. You were participating in the one Passover. You weren’t re Passover, you were participating in the once for all Passover from Egypt in every generation. This is a really important framework to make sense of how it is at every mass. We can say we are participating in this once for all first century event. You just have to understand it biblically in a way that many people have lost sight of because we don’t read the New Testament with an eye towards the Old Testament. So that’s the Passover, and obviously there’s much more that could be said, but I want to make sure I talk about a few other sacrificial dimensions, so to speak.",
                translation: "ai-assisted",
              },
              {
                speaker: "Trent Horn",
                work: "Why 70% of Catholics Deny Christ’s Real Presence in the Eucharist",
                outlet: "Counsel of Trent",
                date: "15 de agosto de 2019",
                locator:
                  "4 párrafos: del párrafo que empieza «Trent Horn: And we can get that nice stylized…» al que termina «…forget me. But it is an eschatological oriented instruction.»",
                url: "https://www.catholic.com/audio/cot/why-70-of-catholics-deny-christs-real-presence-in-the-eucharist",
                text: "Trent Horn: Y podemos conseguir esa bonita impresión estilizada con una pintura clásica para la portada. Pero le dije que me gustaba “He aquí el Cordero de Dios” y espero que usemos ese título, porque para mí, cuando explico la Eucaristía a la gente, algunas personas dicen: “Bueno, vale, ¿por qué no puede ser un símbolo? Es un símbolo que me recuerda a Jesús. ¿Por qué tiene que ser él? No lo entiendo. Si es un símbolo, ¿no basta con eso?”. Y no basta, porque no reconoce que la Eucaristía es un sacrificio pascual. Es nuestro sacrificio pascual cristiano, y cuando llegamos a verlo, el sacramento cobra mucho más sentido para la gente. Y eso es lo que me ayudó a entenderlo durante mi experiencia de conversión. ¿Por qué importa esto?\n\nTrent Horn: Es porque, a través de la enseñanza sobre la presencia real en la Eucaristía, cerramos el círculo al comprender cómo la Pascua que tuvo lugar en el Éxodo, cuando los judíos fueron salvados del ángel de la muerte en la décima plaga, la muerte pasó de largo sobre sus casas. ¿Cómo lo hizo, damas y caballeros? Pues bien, tenían que tomar un cordero, cuyas patas no podían quebrarse, tenía que ser macho sin defecto. Era sacrificado. Se pone sangre sobre los dinteles y luego se come el cordero. A lo largo de toda la Escritura, Cristo es visto como nuestro cordero pascual. Juan 129, Juan el Bautista dice a Jesús: “He aquí el Cordero de Dios, que quita el pecado del mundo”. San Pablo dice en 1 Corintios 5:7: “Cristo, nuestro cordero pascual, ha sido sacrificado”. Así que es muy claro que Cristo se nos ofrece como sacrificio, y para que ese sacrificio llegue a plenitud, para que sea eficaz para nosotros, tenemos que recibirlo, igual que los judíos del Antiguo Testamento durante el Éxodo tuvieron que comer el cordero después de que se derramara su sangre. Jesús es nuestro cordero pascual. Es macho sin defecto.\n\nTrent Horn: No le quebraron las piernas en la cruz. Quiero decir, es algo que nos está gritando para que lo recibamos. Incluso los eruditos no católicos admiten que los primeros cristianos veían la Eucaristía como un sacrificio. J.N.D. Kelly es un erudito anglicano, y esto es lo que dice sobre los primeros cristianos. Dice: “El cumplimiento de la profecía exigía una ofrenda cristiana solemne, y el rito mismo estaba envuelto en la atmósfera sacrificial con que nuestro Señor revistió la última cena. Las palabras de la institución, haz esto, o en griego [Idioma extranjero 00:18:26], debían de estar cargadas de resonancias sacrificiales para oídos del siglo II.” Justino Mártir, que fue padre de la Iglesia a mediados del siglo I, en todo caso, las entendió como “ofrezcan esto”. Así que, cuando Jesús dice: “Hagan esto en memoria de mí”, no está diciendo: “Hagan esto solo como un símbolo para recordarme”. “Hagan esto en memoria de mí” no nos pide que lo recordemos; le pide a Dios, de una manera antropomórfica, que recuerde el sacrificio de Cristo en nuestro favor.\n\nTrent Horn: Además, otro erudito no católico ha publicado sobre esto, Joachim Jeremias. Es un erudito luterano, y dice que la palabra memoria en griego, [Idioma extranjero 00:00:19:07], no es solo un recuerdo puramente espiritual. Si vuelves a la Septuaginta, el Antiguo Testamento en griego, y al equivalente hebreo de esa palabra, que es [Idioma extranjero 00:19:16], vas a Números 10:10, que habla de sacrificios, sacrificios que se ofrecen y que te servirán de memorial delante de tu Dios. Es decir, Dios recordará el sacrificio que ustedes han ofrecido. Así que Jeremias dice: “El mandato de repetir el rito no es una convocatoria a los discípulos para conservar la memoria de Jesús y permanecer vigilantes.” O, ya saben, repetir la fracción del pan para que no me olviden. Pero es una instrucción de orientación escatológica.",
                original:
                  "Trent Horn: And we can get that nice stylized print with a classical painting for the cover. But I told him, I liked Behold The Lamb Of God and I hope we run with that title because for me, when I explained the Eucharist to people, some people say, “Well, okay, why can’t it be a symbol? It’s a symbol that reminds me of Jesus. Why does it have to be him? I don’t get that. If it’s a symbol, isn’t that good enough?” And it’s not good enough because it fails to recognize that the Eucharist is a Pascal sacrifice. It is our Christian Passover sacrifice and when we come to see that, it makes the sacrament, it makes so much more sense to people. And that’s what helped it make sense for me during my conversion experience. Why does this matter?\n\nTrent Horn: It’s because through the teaching of the real presence in the Eucharist, we come full circle in understanding how the Passover that took place in the Exodus where the Jews were saved from the angel of death from the 10th plague, death passed over their homes. How did it do that ladies and gentlemen? Well you had to take a lamb and it’s legs couldn’t be broken, it had to be male without blemish. It was slain. Blood is put over the doorposts and then you eat the lamb. All throughout scripture, Christ is seen as our Passover lamb. John 129, John the Baptist says to Jesus, “Behold the lamb of God who takes away the sin of the world.” Saint Paul says in First Corinthians five seven, “Christ our paschal lamb has been sacrificed.” So it’s very clear that Christ is offered to us as a sacrifice and for that sacrifice to come to fruition, to be efficacious for us, we have to receive the sacrifice just like the Jews in the old Testament during the Exodus had to eat the lamb after its blood was slain. Jesus is our Passover lamb. He’s male without blemish.\n\nTrent Horn: His legs were not broken on the cross. I mean, it’s just shouting at us for us to receive that. Even non-Catholic scholars admit that early Christians saw the Eucharist as a sacrifice. J.N.D. Kelly is an Anglican scholar and this is what he says about the first Christians. He says, “The fulfillment of prophecy demanded a solemn Christian offering and the Rite itself was wrapped in the sacrificial atmosphere with which our Lord invested the last supper. The words of institution do this or in Greek [Foreign Language 00:18:26] must have been charged with sacrificial overtones for second century ears.” Justin Martyr, who was a church father in the mid first century, at any rate, understood them to mean offer this. So when Jesus says, “Do this in remembrance of me,” he’s not saying, “Just do this as a symbol to remember me.” Do this in remembrance of me is not asking us to remember it, it’s asking God in an anthropomorphic way to remember Christ’s sacrifice on our behalf.\n\nTrent Horn: In fact, another non-Catholic scholar has published on this, Joachim Jeremias. He is a Lutheran scholar, and he says that the word remembrance in Greek, [Foreign Language 00:00:19:07], it’s not just a purely spiritual recollection. When you go back into the Septuagint, the Greek old Testament and the Hebrew equivalent of that word, which is [Foreign language 00:19:16], you go back to Numbers 1010 which talks about sacrifices, sacrifices that are offered that shall serve you for remembrance before your God. That it’s God will remember the sacrifice that you have offered. So Jeremias says, “The command to repeat the right is not a summons to the disciples to preserve the memory of Jesus and be vigilant.” Or, you know, repeat the breaking of bread so that you may not forget me. But it is an eschatological oriented instruction.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "El mandato hace de la Eucaristía un elemento regular de la vida cristiana",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "Why Can’t Everyone Receive the Eucharist?",
                outlet: "The Jimmy Akin Podcast",
                date: "22 de abril de 2025",
                locator:
                  "22 párrafos: del párrafo que empieza «I have earnestly desired to eat this Passover with…» al que termina «…bread and drink of the cup (1 Corinthians 11:28).»",
                url: "https://www.catholic.com/audio/tjap/why-cant-everyone-receive-the-eucharist",
                text: "Con ansias he deseado comer esta Pascua con ustedes antes de padecer (Lucas 22:15).\n\nLa Eucaristía es, por tanto, el equivalente cristiano de la Pascua. Mientras la primera comida pascual apuntaba hacia la liberación de los israelitas de Egipto, la Eucaristía apunta hacia la liberación de los cristianos del pecado.\n\nCristo mismo ocupa el lugar del cordero pascual. El Evangelio de Juan describe a Jesús como “el Cordero de Dios” (Juan 1:29), y san Pablo incluso dice que “Cristo, nuestro Cordero pascual, ha sido sacrificado” (1 Cor. 5:7).\n\nDurante la Última Cena, Jesús tomó el pan y dijo: “Tomen, coman; esto es mi cuerpo” (Mt. 26:26). La carne de Cristo, como nuevo Cordero pascual, fortalece así a los cristianos para su camino hacia la Tierra Prometida celestial.\n\nTambién tomó un cáliz y se lo dio a beber, diciendo: “Esta es mi sangre del pacto, que es derramada por muchos para el perdón de los pecados” (Mt. 26:28). Como el cordero pascual original, la sangre de Cristo hace que la ira de Dios pase de largo sobre los cristianos, porque sus pecados son perdonados.\n\nAsí como la sangre del pacto instituido por Moisés se aplicó tanto al altar como al pueblo, así también la sangre de Cristo. Es “derramada por muchos” en el altar de la Cruz, y se aplica al pueblo cuando bebe del cáliz.\n\nJesús también instituye el nuevo y mejor pacto profetizado por Jeremías. Esto se aclara especialmente en el Evangelio de Lucas, donde Jesús dice que el cáliz significa “el nuevo pacto en mi sangre” (Lucas 22:20).\n\nAsí, la Eucaristía resume los temas que Dios estableció con su pueblo Israel y los eleva a un nuevo nivel.\n\nLos acontecimientos originales implicaron la liberación de una sola nación de la esclavitud, la creación de un pacto nacional y un viaje a una Tierra Prometida terrenal. Ahora, con la venida del Mesías, tenemos la liberación de todas las personas de todas las naciones del pecado, la institución de un pacto universal y el viaje a la Tierra Prometida definitiva: el cielo.\n\nLa Eucaristía en la Iglesia\n\nLa comida pascual no era un evento único, sino algo que el pueblo de Dios hacía regularmente para conmemorar lo que él había hecho por ellos.\n\nDe manera similar, Jesús no quiso que la Eucaristía se celebrara una sola vez. Dijo a los discípulos: “Hagan esto en memoria de mí” (Lucas 22:19), y se volvió un rasgo habitual de la vida cristiana.\n\nDe hecho, se celebraba con mucha más frecuencia que la Pascua, que solo se celebraba una vez al año. Pero en sus cartas a los corintios, san Pablo les dijo a los cristianos que —por los abusos que estaban cometiendo— “Cuando se reúnen, no es la cena del Señor lo que comen” (1 Corintios 11:20).\n\nVolveremos a la idea de cometer abusos al recibir la Eucaristía, pero lo importante por ahora es notar que Pablo habla de celebrar la cena del Señor como parte regular del culto cristiano, cada vez que los corintios se reunían.\n\nMás adelante en la carta, indica que se reunían “el primer día de la semana” (1 Corintios 16:2), es decir, cada domingo.\n\nPablo escribió 1 Corintios alrededor del año 53 d. C., así que la Eucaristía dominical se volvió un rasgo habitual de la vida cristiana muy temprano.\n\nSer digno de recibir la comunión\n\nAsí como los israelitas fueron infieles a la alianza establecida por medio de Moisés y podían celebrar la Pascua indignamente, los cristianos pueden ser infieles al nuevo pacto y profanar la Eucaristía.\n\nDespués de comentar cómo Cristo ha sido sacrificado como nuestro Cordero pascual, Pablo dice de inmediato:\n\nCelebremos, pues, la fiesta, no con la vieja levadura, la levadura de la malicia y la maldad, sino con los panes sin levadura de la sinceridad y la verdad (1 Corintios 5:8).\n\nDice que la Eucaristía no debe recibirse indiscriminadamente. Por el contrario, se necesita un examen de conciencia. Dice:\n\nQue cada uno se examine a sí mismo, y así coma del pan y beba de la copa (1 Corintios 11:28).",
                original:
                  "I have earnestly desired to eat this Passover with you before I suffer (Luke 22:15).\n\nThe Eucharist is thus the Christian equivalent of Passover. While the first Passover meal pointed forward to the deliverance of the Israelites from Egypt, the Eucharist points forward to Christians’ deliverance from sin.\n\nChrist himself takes the place of the Passover lamb. The Gospel of John describes Jesus as “the Lamb of God” (John 1:29), and St. Paul even says that “Christ, our Paschal Lamb, has been sacrificed” (1 Cor. 5:7).\n\nDuring the Last Supper, Jesus took bread and said, “Take, eat; this is my body” (Matt. 26:26). The flesh of Christ as the new Passover Lamb thus strengthens Christians for their journey to the heavenly Promised Land.\n\nHe also took a chalice and gave it to them to drink, saying, “this is my blood of the covenant, which is poured out for many for the forgiveness of sins” (Matt. 26:28). Like the original Passover lamb, Christ’s blood causes God’s wrath to pass over Christians because their sins are forgiven.\n\nJust as the blood of the covenant instituted by Moses was applied both to the altar and the people, so is Christ’s blood. It is “poured out for many” on the altar of the Cross, and it is applied to the people when they drink from the chalice.\n\nJesus also is instituting the new and better covenant prophesied by Jeremiah. This is made particularly clear in Luke’s Gospel, where Jesus says that the chalice signifies “the new covenant in my blood” (Luke 22:20).\n\nThe Eucharist thus sums up the themes God established with his people Israel and elevates them to a new level.\n\nThe original events involved the delivery of a single nation from slavery, the creation of a national covenant, and a journey to an earthly Promised Land. Now, with the coming of the Messiah, we have the deliverance of all people from all nations from sin, the institution of a universal covenant, and the journey to the ultimate Promise Land—heaven.\n\nThe Eucharist in the Church\n\nThe Passover meal was not a one-time event but something God’s people did regularly to commemorate what he had done for them.\n\nSimilarly, Jesus did not mean the Eucharist to be celebrated just one time. He told the disciples, “Do this in remembrance of me” (Luke 22:19), and it became a regular feature of Christian life.\n\nIn fact, it was celebrated far more frequently than the Passover, which was held only once a year, but in his letters to the Corinthians, St. Paul told the Christians that—because of abuses they were committing—“When you come together, it is not the Lord’s supper that you eat”  (1 Corinthians 11:20).\n\nWe’ll come back to the idea of committing abuses when receiving the Eucharist, but the important thing to note for the moment is that Paul speaks of celebrating the Lord’s Supper as a regular part of Christian worship—whenever the Corinthians came together.\n\nLater in the letter, he indicated that they met together “on the first day of every week” (1 Corinthians 16:2) or every Sunday.\n\nPaul wrote 1 Corinthians around A.D. 53, so the Sunday Eucharist became a regular feature of Christian life very early.\n\nWorthiness to Receive Communion\n\nJust as the Israelites were unfaithful to the covenant established through Moses and could celebrate the Passover unworthily, Christians can be unfaithful to the new covenant and profane the Eucharist.\n\nAfter commenting on how Christ has been sacrificed as our Paschal Lamb, Paul immediately says,\n\nLet us, therefore, celebrate the festival, not with the old leaven, the leaven of malice and evil, but with the unleavened bread of sincerity and truth (1 Corinthians 5:8).\n\nHe says the Eucharist is not to be received indiscriminately. Instead, an examination of conscience is needed. He says:\n\nLet a man examine himself and so eat of the bread and drink of the cup (1 Corinthians 11:28).",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.6.51-John.6.58", "John.6.60-John.6.69"],
      text: "Para la Iglesia católica, el discurso del pan de vida prepara la institución de la Eucaristía {c:CEC1338|Catecismo 1338}. Ante el asombro de los oyentes, Jesús «recalca la verdad objetiva de sus palabras»: «mi carne es verdadera comida» {v:John.6.55}; por eso, según {c:EdE16|Ecclesia de Eucharistia 16}, no es «un alimento metafórico». Trento, por su parte, usa Juan 6 «segun las varias interpretaciones de los santos Padres y doctores» {c:T21c1|ses. XXI, cap. 1}.",
      apologists: {
        arguments: [
          {
            title:
              "Si la carne no aprovecha nada, Jesús murió en vano; «carne» en Juan significa una perspectiva humana cerrada a lo divino (Akin)",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "AMA: LIVE from the Catholic Answers Conference w/ Joe & Jimmy",
                outlet: "Catholic Answers Live, YouTube",
                date: "27 de septiembre de 2024",
                locator: "Ver la página enlazada",
                url: "https://www.youtube.com/watch?v=Mo0BEpnpL5g&t=5969s",
                text: "si la carne no aprovecha nada, entonces Jesús murió en vano, porque sacrificó su carne en la cruz por nosotros […]",
                original:
                  "if the flesh profits nothing then Jesus died for nothing because he sacrificed his flesh on the cross for us […]",
                translation: "ai-assisted",
              },
              {
                speaker: "Jimmy Akin",
                work: "AMA: LIVE from the Catholic Answers Conference w/ Joe & Jimmy",
                outlet: "Catholic Answers Live, YouTube",
                date: "27 de septiembre de 2024",
                locator: "Ver la página enlazada",
                url: "https://www.youtube.com/watch?v=Mo0BEpnpL5g&t=6026s",
                text: "el espíritu da vida; así que la carne: la perspectiva humana que está cerrada a los milagros divinos […]",
                original:
                  "the spirit gives life so the flesh the human perspective that's closed off to Divine Miracles […]",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "La carne «de nada sirve» (Juan 6:63) no puede ser la carne propia de Jesús",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Does This Verse Disprove the Eucharist?",
                outlet: "Shameless Popery, YouTube",
                date: "20 de agosto de 2024",
                locator: "Minutos 4:33 a 4:44",
                url: "https://www.youtube.com/watch?v=I7yY0zSUm20&t=273s",
                text: "si entiendes esto en el sentido de que Jesús no puede estar hablando de su propia carne porque dice que la carne no sirve de nada, tienes que ignorar toda la enseñanza anterior en el discurso del pan de vida, donde habla explícitamente de su carne como algo de gran provecho",
                original:
                  "if you take this to mean Jesus can't be talking about his own flesh because he says the flesh is of no avail you have to ignore the entire preceding teaching in the bread of life discourse where he speaks of his flesh explicitly as being of great avail",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "Does This Verse Disprove the Eucharist?",
                outlet: "Shameless Popery, YouTube",
                date: "20 de agosto de 2024",
                locator: "Minutos 5:52 a 6:07",
                url: "https://www.youtube.com/watch?v=I7yY0zSUm20&t=352s",
                text: "no puedes decir que la carne de Jesús no aprovecha nada cuando su carne nos salva; eso despoja a la cruz de su significado. Juan 6:63 no puede estar negando la eficacia o la importancia de la carne de Jesús",
                original:
                  "you cannot say Jesus's flesh profits nothing when his flesh saves us that strips the cross of its meaning John 6:63 cannot be denying the efficacy or importance of Jesus's flesh",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Los discípulos tomaron a Jesús al pie de la letra, y él no los corrigió",
            quotes: [
              {
                speaker: "Karlo Broussard",
                work: "Is Receiving the Eucharist Cannibalism?",
                outlet: "Catholic Answers Live, YouTube",
                date: "27 de marzo de 2021",
                locator: "Minutos 3:05 a 3:22",
                url: "https://www.youtube.com/watch?v=xS29MKkkxpU&t=185s",
                text: "Si Jesús solo hablara en sentido figurado —es decir, comer su carne y beber su sangre solo significara que debemos creer en él—, si eso es todo lo que Jesús quiso decir, entonces sus discípulos […] no habrían tenido dificultad para aceptar esa enseñanza",
                original:
                  "If Jesus were only speaking figuratively—that is to say, eating his flesh and drinking his blood only means that we must believe in him—if that's all Jesus meant, well then his disciples […] would not have had a hard time embracing that teaching",
                translation: "ai-assisted",
              },
              {
                speaker: "Karlo Broussard",
                work: "Is Receiving the Eucharist Cannibalism?",
                outlet: "Catholic Answers Live, YouTube",
                date: "27 de marzo de 2021",
                locator: "Minutos 3:40 a 3:51",
                url: "https://www.youtube.com/watch?v=xS29MKkkxpU&t=220s",
                text: "es precisamente por esta enseñanza de comer su carne y beber su sangre que estos discípulos se levantan y se van, y Jesús no los llama de vuelta",
                original:
                  "it is precisely because of this teaching to eat his flesh and drink his blood that these disciples get up and walk away, and Jesus does not call them back",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "No es canibalismo: Cristo da su sustancia bajo la apariencia de pan y vino",
            quotes: [
              {
                speaker: "Karlo Broussard",
                work: "Is Receiving the Eucharist Cannibalism?",
                outlet: "Catholic Answers Live, YouTube",
                date: "27 de marzo de 2021",
                locator: "Minutos 5:08 a 5:19",
                url: "https://www.youtube.com/watch?v=xS29MKkkxpU&t=308s",
                text: "Jesús revela en la Última Cena que nos dará la sustancia o la realidad de su carne y su sangre, pero bajo la apariencia de pan y vino",
                original:
                  "Jesus reveals at the Last Supper that he's going to give us the substance or the reality of his flesh and blood, but under the appearance of bread and wine",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.10.16-1Cor.10.17"],
      text: "«La copa de bendición que bendecimos, ¿no es la comunión de la sangre de Cristo?» {v:1Cor.10.16}. Para la Iglesia católica, la Eucaristía une a Cristo y, por eso, une entre sí a los que comulgan en un solo cuerpo, la Iglesia {c:CEC1396|Catecismo 1396}.",
      apologists: {
        arguments: [
          {
            title:
              "«Participación en el cuerpo y la sangre de Cristo» no es pan ordinario, ni siquiera una representación",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Do St. Paul’s Words DISPROVE the Catholic Eucharist?",
                outlet: "Shameless Popery",
                date: "20 de enero de 2026",
                locator:
                  "Fragmento: de la frase que empieza «In John six, Jesus calls himself the bread of…» a la que termina «…bread, he doesn’t seem to be describing ordinary bread.»",
                url: "https://www.catholic.com/audio/sp/do-st-pauls-words-disprove-the-catholic-eucharist",
                text: "En Juan 6, Jesús se llama a sí mismo el pan de vida, el pan de Dios, el verdadero pan del cielo, el pan vivo que descendió del cielo. Y en Juan 6:51 dice explícitamente que el pan que yo daré por la vida del mundo es mi carne. Observa que, mientras los críticos protestantes dicen que literalmente es pan y solo simbólicamente carne, Jesús dice exactamente lo contrario. Él habla literalmente de su carne y se refiere a ella metafóricamente como pan. Así que es perfectamente razonable llamar a la carne literal de Jesús pan o pan de vida, porque eso es lo que él hace. No debería sorprender, entonces, que encontremos en los escritos de los padres de la Iglesia, por ejemplo, a alguien que afirma en un momento la presencia real de Cristo en la Eucaristía y, un momento después, se refiere a la Eucaristía como el pan. De hecho, nosotros mismos lo hacemos cuando vamos a misa. Justo después de la consagración, viene lo que se llama la aclamación memorial. Y una de las oraciones se deriva de 1 Corintios 10: Cuando comemos este pan y bebemos esta copa, proclamamos tu muerte, Señor, hasta que vuelvas. Algo similar aparece en liturgias orientales, como la Liturgia divina de San Santiago. Así que es perfectamente correcto llamar a Jesús en la Eucaristía el pan de vida, especialmente cuando el contexto más amplio deja claro que uno entiende que la Eucaristía es más que simple pan. Con eso en mente, consideremos las palabras de san Pablo a los corintios en su contexto, y veamos si da más la idea de que quiere decir algo más que simple pan. Primero, dice: la copa de bendición que bendecimos, ¿no es una participación en la sangre de Cristo? El pan que partimos, ¿no es una participación en el cuerpo de Cristo? Así que, sea lo que sea que ocurre en la Eucaristía, es de algún modo una participación en el cuerpo y la sangre de Cristo. Eso no suena a pan ordinario. Ni siquiera suena a representación. Si hago un cuadro de Jesús, no creo que me digas que mi cuadro de alguna manera participa en Jesús. Por último, vemos señalado que la manera en que san Pablo describe lo que ocurre aquí implica comparar la Eucaristía con los sacrificios judíos y paganos, en los que participaban al comer las ofrendas sacrificiales. Ahora bien, si eso es correcto, y pueden ver ese episodio para saber más al respecto, parece que él dice que la Eucaristía es Jesús, nuestra ofrenda sacrificial por los pecados, y que participamos en su sacrificio comiendo su cuerpo y su sangre literales. Eso no suena a que hable de pan ordinario en 1 Corintios 10. Ahora bien, en el versículo siguiente dice algo así como: “Porque hay un solo pan, nosotros, que somos muchos, somos un solo cuerpo, pues todos participamos de aquel único pan”. Así que, si Pablo habla de una hogaza de pan ordinaria, en primer lugar, ¿cómo es posible que todos estos cristianos, incluido el propio Pablo, participen del mismo pan? Volveremos a esas palabras en unos momentos, pero por ahora noten que este pan de algún modo nos convierte de individuos en el cuerpo de Cristo, la Iglesia. Pablo parece atribuir algún tipo de poder espiritual a la Iglesia, así que no tanto un pan común como un pan milagroso. Luego, en el capítulo siguiente, 1 Corintios 11, advierte que quien coma el pan o beba la copa del Señor de manera indigna será culpable de profanar el cuerpo y la sangre del Señor, y que quien come y bebe sin discernir el cuerpo come y bebe juicio contra sí mismo. Así que, de nuevo, aunque usa el término pan, no parece estar describiendo pan ordinario.",
                original:
                  "In John six, Jesus calls himself the bread of life, the bread of God, the true bread from heaven, the living bread which came down from heaven. And in John 6:51, he explicitly says that the bread which I shall give for the life of the world is my flesh. So notice whereas Protestant critics will say that it’s literally bread and only symbolically flesh, Jesus says the exact opposite. He’s literally talking about his flesh and referring to it metaphorically as bread. So it is perfectly reasonable to refer to Jesus’ literal flesh as bread or as a bread of life because that’s what he does. So it shouldn’t be shocking that we sometimes find in the writings of church fathers, for instance, somebody affirming in one moment the real presence of Christ in the Eucharist and then a moment later referring to the Eucharist as the bread. In fact, we do this ourselves when we go to mass. Right after the consecration, there’s what’s called the memorial acclimation. And one of the prayers is derived from one Corinthians 10. When we eat this bread and drink this cup, we proclaim your death, oh Lord, until you come again. And there’s something similar in Eastern liturgies like the divine liturgy of St. James. So it’s perfectly fine to refer to Jesus in the Eucharist as the bread of life, particularly when the broader context makes clear that you realize the Eucharist is more than mere bread. With that in mind, let’s consider the words of St. Paul to the Corinthians in context and see if he gives us more of a sense that he means something more than mere bread. So first, he tells them the cup of blessing which we bless is not a participation in the blood of Christ, the bread which we break. Is it not a participation in the body of Christ? So whatever is happening in the Eucharist, it’s somehow a participation in the body and blood of Christ. That doesn’t sound like ordinary bread. That doesn’t even sound like a representation. If I make a painting of Jesus, I don’t think you would tell me that my painting somehow participates in Jesus. Last we get pointed out that the way St. Paul describes what’s happening here involves comparing the Eucharist to the Jewish and pagan sacrifices in which they participated in the sacrifice by eating the sacrificial offerings. Now, if that’s right, and you can watch that episode for more on that, it seems that he’s saying the Eucharist is Jesus, our sacrificial offering for sins, and that we participate in his sacrifice by eating his literal body and blood. That doesn’t sound like he’s talking about ordinary bread in one Corinthians 10. Well, in the next verse, he says something like, “Because there is one bread, we who are many are one body, for we all partake of the one bread.” So if Paul is talking about an ordinary loaf of bread, well, first of all, how in the world are all of these Christians, including Paul himself, partaking of the same loaf of bread? We’re going to return to those words in a few moments, but for now, notice that this bread somehow turns us from individuals into the body of Christ the church. Paul seems to be ascribing some kind of spiritual power to the church, so not so much wonder bread as miraculous bread. Then in the next chapter, 1st Corinthians 11, he warns that whoever eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of profaning the body and blood of the Lord, and that anyone who eats and drinks without discerning the body eats and drinks judgment upon himself. So here again, even though he uses the term bread, he doesn’t seem to be describing ordinary bread.",
                translation: "ai-assisted",
              },
              {
                speaker: "Jimmy Akin",
                work: "Why Can’t Everyone Receive the Eucharist?",
                outlet: "The Jimmy Akin Podcast",
                date: "22 de abril de 2025",
                locator:
                  "14 párrafos: del párrafo que empieza «The cup of blessing which we bless, is it…» al que termina «…* * *»",
                url: "https://www.catholic.com/audio/tjap/why-cant-everyone-receive-the-eucharist",
                text: "La copa de bendición que bendecimos, ¿no es una participación en la sangre de Cristo? El pan que partimos, ¿no es una participación en el cuerpo de Cristo? (1 Corintios 10:16).\n\nEn consecuencia,\n\nPor lo tanto, quien coma el pan o beba la copa del Señor de manera indigna será culpable de profanar el cuerpo y la sangre del Señor (1 Corintios 11:27),\n\nY,\n\nQuien come y bebe sin discernir el cuerpo come y bebe juicio contra sí mismo (1 Corintios 11:29).\n\nComo muestran claramente estos pasajes, la Eucaristía es el propio Jesús. Él es tanto la fuente de la vida cristiana como la cima hacia la que vamos caminando.\n\nEn cambio, el pecado mortal es un estado en el que uno ha rechazado a Dios. El pecado mortal significa darle la espalda.\n\nRecibir la comunión en pecado mortal es una contradicción. Es abrazar a Jesús y, al mismo tiempo, despreciarlo.\n\nY por eso la Iglesia católica no practica la comunión abierta ni invita a que cualquier persona bautizada que quiera recibir lo haga.\n\nEn primer lugar, no todos los cristianos creen en la presencia real de Cristo. Comerían y beberían sin discernir el cuerpo de Cristo, y así beberían juicio contra sí mismos.\n\nY en segundo lugar, no todos los cristianos están en estado de gracia. Algunos están en estado de pecado mortal, y serían culpables de profanar el cuerpo y la sangre del Señor.\n\nAsí que la práctica que usa la Iglesia católica está en realidad basada en principios bíblicos y pensada para proteger.\n\nProtege a Jesús de ser profanado por quienes reciben de manera indebida, y protege a quienes recibirían indebidamente… del juicio de Dios.\n\n* * *",
                original:
                  "The cup of blessing which we bless, is it not a participation in the blood of Christ? The bread which we break, is it not a participation in the body of Christ? (1 Corinthians 10:16).\n\nConsequently,\n\nWhoever, therefore, eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of profaning the body and blood of the Lord (1 Corinthians 11:27),\n\nAnd,\n\nAnyone who eats and drinks without discerning the body eats and drinks judgment upon himself (1 Corinthians 11:29).\n\nAs these passages make clear, the Eucharist is Jesus himself. He is both the source of the Christian life and the summit toward which we are journeying.\n\nBy contrast, mortal sin is a state in which one has rejected God. Mortal sin means turning your back on him.\n\nTo receive Communion in mortal sin is a contradiction. It is to embrace Jesus while simultaneously spurning him.\n\nAnd that’s why the Catholic Church does not practice open communion and invite any baptize person who wants to receive to do so.\n\nIn the first place, not all Christians believe in the real presence of Christ. They would eat and drink without discerning the body of Christ and thus drink judgment on themselves.\n\nAnd in the second place, not all Christians are in a state of grace. Some are in a state of mortal sin, and they would be guilty of profaning the body and blood of the Lord.\n\nSo the practice that the Catholic Church uses is actually based on biblical principles and designed to protect.\n\nIt protects Jesus from being profaned by those who would receive improperly, and it protects those who would receive improperly . . . from God’s judgment.\n\n* * *",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.10.21"],
      text: "Pablo contrapone la «mesa del Señor» a la «mesa de los demonios», donde se comían sacrificios; Trento entiende en ambos casos «mesa» como altar.",
      apologists: {
        arguments: [
          {
            title:
              "La «mesa del Señor» es paralela a las mesas sacrificiales paganas e israelitas: la Eucaristía es un sacrificio y una presencia real",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "The Bible on the Eucharist: Strange, Sacrificial, Serious, Sacramental, and Shocking",
                outlet: "Shameless Popery",
                date: "14 de diciembre de 2023",
                locator:
                  "6 párrafos: del párrafo que empieza «Well he says in verse 17, “Because there is…» al que termina «…the second of the five parts of the test.»",
                url: "https://www.catholic.com/audio/sp/the-bible-on-the-eucharist-strange-sacrificial-serious-sacramental-and-shocking",
                text: "Bueno, dice en el versículo 17: “Porque hay un solo pan, nosotros, que somos muchos, somos un cuerpo, pues todos participamos de aquel un pan”. Eso es fácil de pasar por alto, pero es realmente clave para entender 1 Corintios 10, 11 y 12. San Pablo está diciendo que la Iglesia es el cuerpo de Cristo porque participa del cuerpo eucarístico de Cristo. Lo menciona ahí en una línea y sigue de largo. Pero si captan ese versículo, es realmente clave, porque en 1 Corintios 11 va a hablar del cuerpo eucarístico de Cristo, y en 1 Corintios 12 todo trata de la Iglesia como cuerpo de Cristo. Y acá, en 1 Corintios 10, él destacó cómo esas dos cosas van juntas. Somos el cuerpo de Cristo porque recibimos el cuerpo de Cristo en la Eucaristía.\n\nY después va a mostrarnos cómo esta participación sacrificial nos une con Cristo. Y lo va a hacer de una manera realmente extraña. Primero va a señalar a Israel, el sistema sacrificial del Antiguo Testamento. 1 Corintios 10:18: “Consideren la práctica de Israel: ¿no son partícipes del altar los que comen de los sacrificios?” Ahora bien, observen: para explicar la Eucaristía, señala que en el Antiguo Testamento, e incluso en el judaísmo de su tiempo, los que comen de los sacrificios son partícipes del altar. Así que una teología eucarística debería tener comer de los sacrificios en un altar. O, no está claro por qué pensaría que esa imagen sería útil para traer a colación.\n\nPero después mira a un lugar aún más impactante, en los versículos 19 y 20. Dice: “¿Qué quiero decir entonces: que lo sacrificado a los ídolos es algo, o que el ídolo es algo? No; digo que lo que los paganos sacrifican, lo sacrifican a los demonios y no a Dios. No quiero que ustedes sean partícipes de los demonios”. Así que si no bastaba con mostrar que Israel come sacrificios en altares y que eso se parece a la Eucaristía, ahora va a decir: “Así también los paganos”. Y luego dice en el versículo 21: “No pueden beber la copa del Señor y la copa de los demonios. No pueden participar de la mesa del Señor y de la mesa de los demonios”.\n\nAhora bien, ¿cuál es la mesa ahí? Todo esto trata de un altar sacrificial, de comer la comida del altar. Así que hay tres grupos: paganos, israelitas, cristianos. Los paganos, ¿cómo experimentan la comunión? Bueno, comen el sacrificio de la mesa de los demonios, y eso los hace algo así como socios de los demonios. Los israelitas comen el sacrificio del altar en el templo. Y los cristianos comen la Eucaristía de la mesa del Señor. Ahora bien, si esto es un paralelo triple, como parece pensar Pablo, solo tiene sentido si la Eucaristía es un sacrificio, si la mesa del Señor es como la mesa de los demonios y esa es un altar, y si estamos comiendo el sacrificio como lo hacían los paganos y los israelitas. Así que todo esto es realmente claro, si la Eucaristía es de verdad una ofrenda sacrificial que luego comemos.\n\nSi es solo una conmemoración, donde no sacrificamos literalmente nada, y no comemos realmente un sacrificio hecho a Dios, entonces esto no funciona. Entonces no es como lo que hacen los paganos ni como lo que hacen los israelitas. Pero si la visión católica de la Eucaristía es correcta, bueno, entonces sí, hay algunas semejanzas obvias entre los enfoques paganos, judíos y cristianos del sacrificio, y de comer ofrendas sacrificiales, y cosas por el estilo. De hecho, esto es algo por lo que nos critican todo el tiempo a los cristianos… Perdón, por cristianos no católicos. Dicen: “Ay, ustedes los católicos, esto parece tan pagano”. Bueno, san Pablo está diciendo: “Sí, hay algo en esto que se parece al servicio del templo judío, y hay algo en esto que se parece a las ofrendas paganas”. No es ninguna de esas dos cosas, pero ambas apuntan a la verdadera ofrenda sacrificial.\n\nAsí que si aquello en lo que creen no pudiera compararse con lo que pasa en la liturgia del templo, si aquello en lo que creen no pudiera compararse con lo que hacían los paganos con las ofrendas de comida, los sacrificios de animales y el comerlos para volverse socios de sus demonios, entonces no creen lo mismo que creían los primeros cristianos y que describe san Pablo en one Corinthians 10. Esa es la segunda de las cinco partes de la prueba.",
                original:
                  "Well he says in verse 17, “Because there is one bread, we who are many are one body for we all partake of the one bread.” That’s easy to miss, but this is really key to understanding 1 Corinthians 10, 11 and 12. St. Paul is saying, the church is the body of Christ, because it partakes of the Eucharistic body of Christ. He throws it out there in one line and then moves on. But if you catch that verse, it’s really key because in 1 Corinthians 11, he’s going to talk about the Eucharistic body of Christ, and in 1 Corinthians 12, it’s all about the church as the body of Christ. And here in 1 Corinthians 10, he’s highlighted how those two things go together. We are the body of Christ, because we receive the body of Christ in the Eucharist.\n\nAnd then he’s going to show us how this sacrificial participation makes us one with Christ. And he’s going to do this in a really strange way. He’s going to first point to Israel, the Old Testament sacrificial system. 1 Corinthians 10:18, “Consider the practice of Israel, are not those who eat the sacrifices partners in the altar?” Now notice, to explain the Eucharist, he points out that in the Old Testament, and even in Judaism of his day, those who eat the sacrifices are partners in the altar. So a Eucharistic theology should have eating of sacrifices at an altar. Or, it’s not clear why he would think that would be a helpful image to bring up.\n\nBut then, he looks to an even more shocking place, in verses 19 and 20. He says, “What do I imply then, that food offered to idols is anything or that an idol is anything? No, I imply that what pagan sacrifice, they offered to demons and not to God. I do not want you to be partners with demons.” So if it wasn’t enough to show how Israel eats sacrifices on altars and how that’s like the Eucharist, well, now he’s going to say, “So do the pagans.” And then he says in verse 21, “You cannot drink the cup of the Lord and the cup of demons. You cannot partake of the table of the Lord and the table of demons.”\n\nNow, what’s the table there? This is all about a sacrificial altar, eating the food of the altar. And so you’ve got three groups, pagans, Israelites, Christians. The pagans, how do they experience communion? Well, they eat the sacrifice from the table of demons and that make some partners with demons. The Israelites eat the sacrifice of the altar in the temple. And Christians eat the Eucharist from the table of the Lord. Now, if this is a threefold parallel, as Paul seems to think it is, this only makes sense if the Eucharist is a sacrifice, if the table of the Lord is like the table of demons and that is an altar, and if we’re eating the sacrifice as the pagans and the Israelites did. So all of this is really clear, if the Eucharist really is a sacrificial offering that we then eat.\n\nIf it’s just a commemoration, where we don’t literally sacrifice anything, and we don’t actually eat a sacrifice made to God, then this doesn’t work. Then it’s not like what the pagans are doing and it’s not like what the Israelites are doing. But if the Catholic view and the Eucharist is right, well then yes, there are some obvious similarities between the pagan, the Jewish and the Christian kind of approaches to sacrifice and eating food sacrifices and the like. In fact, this is something we get knocked on all the time for as Christians… Excuse me, by non-Catholic Christians. They’ll say, “Oh, you Catholics, this looks so pagan.” Well, St. Paul is saying, “Yeah, there’s something about this that looks like the Jewish temple service, and there’s something about this that looks like the pagan offerings.” It’s neither of those, but those two are both pointing to the true sacrificial offering.\n\nSo if what you’re believing in couldn’t be compared to what happens in the temple liturgy, if what you’re believing in couldn’t be compared to what pagans were doing, with food sacrifices, animal sacrifices and eating them to become partners with their demons, then you’re not believing the same that the early Christians believed and that St. Paul describes in one Corinthians 10. That’s the second of the five parts of the test.",
                translation: "ai-assisted",
              },
              {
                speaker: "Karlo Broussard",
                work: "Here's Why You Can Be Absolutely Sure That Paul Believed in the Eucharist",
                outlet: "Catholic Answers Magazine",
                date: "2 de marzo de 2017",
                locator:
                  "5 párrafos: del párrafo que empieza «Let’s start with 1 Corinthians 10:16-21. Paul makes it…» al que termina «…real victim, Jesus, on the “table of the Lord”?»",
                url: "https://www.catholic.com/magazine/online-edition/heres-why-you-can-be-absolutely-sure-that-paul-believed-in-the-eucharist",
                text: "Empecemos con 1 Corintios 10:16-21. Pablo deja claro que, cuando participamos de la Eucaristía, participamos del cuerpo y la sangre de Jesús: “La copa de bendición que bendecimos, ¿no es acaso participación en la sangre de Cristo? El pan que partimos, ¿no es acaso participación en el cuerpo de Cristo?” (v.16).\n\n¿Cómo podríamos estar compartiendo el cuerpo y la sangre de Jesús si no estuvieran presentes? Pablo subraya esta verdad en los versículos siguientes, cuando traza un paralelo entre la Eucaristía y los sacrificios paganos:\n\n[L]o que los paganos sacrifican, lo ofrecen a los demonios y no a Dios. No quiero que ustedes sean partícipes de los demonios… No pueden participar de la mesa del Señor y de la mesa de los demonios (v.20-21).\n\nSi la comunión con los demonios en los sacrificios paganos implica que los demonios están realmente presentes, entonces la comunión con el cuerpo y la sangre de Jesús en la Eucaristía implica que su cuerpo y su sangre están realmente presentes.\n\nLa referencia de Pablo a la “mesa del Señor” (v.21) también implica la presencia real de Jesús en la Eucaristía. Si los paganos ofrecen una víctima real (no un símbolo) en la “mesa de los demonios”, ¿cuánto más ofrecen los cristianos una víctima real, Jesús, en la “mesa del Señor”?",
                original:
                  "Let’s start with 1 Corinthians 10:16-21. Paul makes it clear that when we partake of the Eucharist we partake of the body and blood of Jesus; The cup of blessing which we bless, is it not a participation in the blood of Christ? The bread which we break, is it not a participation in the body of Christ? (v.16).\n\nHow could we be sharing in the body and blood of Jesus unless his body and blood were present? Paul underscores this truth in the subsequent verses when he draws a parallel between the Eucharist and pagan sacrifices:\n\n[W]hat pagans sacrifice they offer to demons and not to God. I do not want you to be partners with demons…You cannot partake of the table of the Lord and the table of demons (v.20-21).\n\nIf communing with demons in pagan sacrifices implies that demons are really present, then communing with the body and blood of Jesus in the Eucharist implies that his body and blood are really present.\n\nPaul’s reference to the “table of the Lord” (v.21) also implies the real presence of Jesus in the Eucharist. If pagans offer a real victim (not a symbol) on the “table of demons,” then how much more do Christians offer a real victim, Jesus, on the “table of the Lord”?",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.11.26"],
      text: "Comer este pan y beber esta copa es anunciar la muerte del Señor hasta que vuelva: la Eucaristía mira a la cruz y a la venida final {c:T13c2|Trento, ses. XIII, cap. 2}.",
      apologists: {
        arguments: [
          {
            title:
              "Llamar «pan» a la Eucaristía es compatible con la presencia real, porque el mismo Jesús llama pan a su carne",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Do St. Paul’s Words DISPROVE the Catholic Eucharist?",
                outlet: "Shameless Popery",
                date: "20 de enero de 2026",
                locator:
                  "Fragmento: de la frase que empieza «The bread that we break, is it not participation…» a la que termina «…his sacrifice by eating his literal body and blood.»",
                url: "https://www.catholic.com/audio/sp/do-st-pauls-words-disprove-the-catholic-eucharist",
                text: "El pan que partimos, ¿no es acaso participación en el cuerpo de Cristo? Porque hay un solo pan, nosotros, que somos muchos, somos un cuerpo, pues todos participamos de aquel un pan. Así que tres veces seguidas se nos dice que es pan. Y cuando participan de la cena del Señor, están participando de un solo pan. Y eso es lo que creemos. Cuando comemos la cena del Señor, estamos comiendo pan. Si es su cuerpo y su sangre literales, ¿por qué Jesús todavía se refirió a ello como el fruto de la vid en referencia a la sangre? Y Pablo todavía lo llama pan. Se refirió a ello como pan, no como el cuerpo. Y eso fue después de que lo había bendecido, después de la bendición, parte de la comunión. Él había citado antes a Jesús diciendo: “Esto es mi cuerpo”. Y aun así lo sigue llamando pan. Así que la interpretación de Pablo de las palabras de Jesús, como apóstol inspirado, es que sigue siendo pan. Pero si “es” se usa como referencia a la sustancia, según el papista, entonces también se usa como referencia a la sustancia cuando la Escritura dice en one Corinthians 10: “todas las veces que coman este pan”. Joe: Bueno, hay una respuesta fácil a esta pregunta y después una respuesta algo más elaborada. La respuesta fácil va más o menos así. En Juan 6, Jesús se llama a sí mismo el pan de vida, el pan de Dios, el verdadero pan del cielo, el pan vivo que descendió del cielo. Y en Juan 6:51 dice explícitamente que el pan que yo daré por la vida del mundo es mi carne. Así que noten que, mientras los críticos protestantes dicen que es literalmente pan y solo simbólicamente carne, Jesús dice exactamente lo contrario. Él habla literalmente de su carne y se refiere a ella metafóricamente como pan. Así que es perfectamente razonable referirse a la carne literal de Jesús como pan o como pan de vida, porque eso es lo que él hace. Por eso no debería sorprender que a veces encontremos en los escritos de los padres de la Iglesia, por ejemplo, a alguien que afirma en un momento la presencia real de Cristo en la Eucaristía y un momento después se refiere a la Eucaristía como el pan. De hecho, nosotros mismos hacemos eso cuando vamos a misa. Justo después de la consagración hay lo que se llama la aclamación memorial. Y una de las oraciones deriva de one Corinthians 10: “Cuando comemos este pan y bebemos esta copa, proclamamos tu muerte, oh Señor, hasta que vuelvas”. Y hay algo parecido en las liturgias orientales, como la Divina Liturgia de San Santiago. Así que está perfectamente bien referirse a Jesús en la Eucaristía como el pan de vida, particularmente cuando el contexto más amplio deja claro que uno entiende que la Eucaristía es más que simple pan. Con eso en mente, consideremos las palabras de san Pablo a los corintios en contexto y veamos si nos da más la idea de que quiere decir algo más que simple pan. Entonces, primero, dice: la copa de bendición que bendecimos no es participación en la sangre de Cristo; el pan que partimos, ¿no es participación en el cuerpo de Cristo? Así que, sea lo que sea que pasa en la Eucaristía, de algún modo es participación en el cuerpo y la sangre de Cristo. Eso no suena a pan ordinario. Ni siquiera suena a una representación. Si yo hago un cuadro de Jesús, no creo que me digan que mi cuadro de alguna manera participa de Jesús. Por último, nos señalan que la manera en que san Pablo describe lo que pasa aquí implica compararlo con los sacrificios judíos y paganos, en los que participaban del sacrificio comiendo las ofrendas sacrificiales. Ahora bien, si eso es correcto, y pueden ver ese episodio para saber más, parece que él está diciendo que la Eucaristía es Jesús, nuestra ofrenda sacrificial por los pecados, y que participamos de su sacrificio comiendo su cuerpo y su sangre literales.",
                original:
                  "The bread that we break, is it not participation in the body of Christ? Because there’s one bread, we who are many are one body, for we all partake of the one bread. So three times in a row, we’re told that it’s bread. And when you partake in the Lord’s supper, you’re partaking of the one bread. And that’s what we believe. When we eat the Lord’s upper, we’re eating bread. If it’s his literal body and blood, why Jesus still referred to it as the fruit of the vine in reference to the blood? And Paul still refers to it as bread. He referred to it as bread, not to the body. And that was after he had blessed it, after the blessing, part of the communion. He’s quoted Jesus before saying, “This is my body.” And yet he still calls it bread. So Paul’s interpretation of Jesus’ word and inspired apostle is that it’s still bread. But if is being used as a reference to the substance, according to the papist, then it is likewise used as a reference to substance when scripture says in one Corinthians 10 for as often as you eat this bread. Joe: So there’s an easy answer to this question and then there’s a slightly more involved answer. The easy answer goes something like this. In John six, Jesus calls himself the bread of life, the bread of God, the true bread from heaven, the living bread which came down from heaven. And in John 6:51, he explicitly says that the bread which I shall give for the life of the world is my flesh. So notice whereas Protestant critics will say that it’s literally bread and only symbolically flesh, Jesus says the exact opposite. He’s literally talking about his flesh and referring to it metaphorically as bread. So it is perfectly reasonable to refer to Jesus’ literal flesh as bread or as a bread of life because that’s what he does. So it shouldn’t be shocking that we sometimes find in the writings of church fathers, for instance, somebody affirming in one moment the real presence of Christ in the Eucharist and then a moment later referring to the Eucharist as the bread. In fact, we do this ourselves when we go to mass. Right after the consecration, there’s what’s called the memorial acclimation. And one of the prayers is derived from one Corinthians 10. When we eat this bread and drink this cup, we proclaim your death, oh Lord, until you come again. And there’s something similar in Eastern liturgies like the divine liturgy of St. James. So it’s perfectly fine to refer to Jesus in the Eucharist as the bread of life, particularly when the broader context makes clear that you realize the Eucharist is more than mere bread. With that in mind, let’s consider the words of St. Paul to the Corinthians in context and see if he gives us more of a sense that he means something more than mere bread. So first, he tells them the cup of blessing which we bless is not a participation in the blood of Christ, the bread which we break. Is it not a participation in the body of Christ? So whatever is happening in the Eucharist, it’s somehow a participation in the body and blood of Christ. That doesn’t sound like ordinary bread. That doesn’t even sound like a representation. If I make a painting of Jesus, I don’t think you would tell me that my painting somehow participates in Jesus. Last we get pointed out that the way St. Paul describes what’s happening here involves comparing the Eucharist to the Jewish and pagan sacrifices in which they participated in the sacrifice by eating the sacrificial offerings. Now, if that’s right, and you can watch that episode for more on that, it seems that he’s saying the Eucharist is Jesus, our sacrificial offering for sins, and that we participate in his sacrifice by eating his literal body and blood.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.11.27-1Cor.11.29"],
      text: "Quien come este pan o bebe esta copa del Señor indignamente «será culpado del cuerpo y de la sangre del Señor» {v:1Cor.11.27}. Para la Iglesia católica, por eso hay que examinarse, y quien tiene conciencia de pecado grave debe confesarse antes de comulgar {c:CEC1385|Catecismo 1385}.",
      apologists: {
        arguments: [
          {
            title:
              "La recepción indigna trae juicio: un acto físico puede tener un efecto espiritual (Broussard, respondiendo a una objeción a Juan 6), y la Eucaristía es el propio Jesús (Akin, tras leer 1 Corintios 11:29)",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "Why Can’t Everyone Receive the Eucharist?",
                outlet: "The Jimmy Akin Podcast",
                date: "22 de abril de 2025",
                locator:
                  "14 párrafos: del párrafo que empieza «The cup of blessing which we bless, is it…» al que termina «…* * *»",
                url: "https://www.catholic.com/audio/tjap/why-cant-everyone-receive-the-eucharist",
                text: "La copa de bendición que bendecimos, ¿no es una participación en la sangre de Cristo? El pan que partimos, ¿no es una participación en el cuerpo de Cristo? (1 Corintios 10:16).\n\nEn consecuencia,\n\nPor lo tanto, quien coma el pan o beba la copa del Señor de manera indigna será culpable de profanar el cuerpo y la sangre del Señor (1 Corintios 11:27),\n\nY,\n\nQuien come y bebe sin discernir el cuerpo come y bebe juicio contra sí mismo (1 Corintios 11:29).\n\nComo muestran claramente estos pasajes, la Eucaristía es el propio Jesús. Él es tanto la fuente de la vida cristiana como la cima hacia la que vamos caminando.\n\nEn cambio, el pecado mortal es un estado en el que uno ha rechazado a Dios. El pecado mortal significa darle la espalda.\n\nRecibir la comunión en pecado mortal es una contradicción. Es abrazar a Jesús y, al mismo tiempo, despreciarlo.\n\nY por eso la Iglesia católica no practica la comunión abierta ni invita a que cualquier persona bautizada que quiera recibir lo haga.\n\nEn primer lugar, no todos los cristianos creen en la presencia real de Cristo. Comerían y beberían sin discernir el cuerpo de Cristo, y así beberían juicio contra sí mismos.\n\nY en segundo lugar, no todos los cristianos están en estado de gracia. Algunos están en estado de pecado mortal, y serían culpables de profanar el cuerpo y la sangre del Señor.\n\nAsí que la práctica que usa la Iglesia católica está en realidad basada en principios bíblicos y pensada para proteger.\n\nProtege a Jesús de ser profanado por quienes reciben de manera indebida, y protege a quienes recibirían indebidamente… del juicio de Dios.\n\n* * *",
                original:
                  "The cup of blessing which we bless, is it not a participation in the blood of Christ? The bread which we break, is it not a participation in the body of Christ? (1 Corinthians 10:16).\n\nConsequently,\n\nWhoever, therefore, eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of profaning the body and blood of the Lord (1 Corinthians 11:27),\n\nAnd,\n\nAnyone who eats and drinks without discerning the body eats and drinks judgment upon himself (1 Corinthians 11:29).\n\nAs these passages make clear, the Eucharist is Jesus himself. He is both the source of the Christian life and the summit toward which we are journeying.\n\nBy contrast, mortal sin is a state in which one has rejected God. Mortal sin means turning your back on him.\n\nTo receive Communion in mortal sin is a contradiction. It is to embrace Jesus while simultaneously spurning him.\n\nAnd that’s why the Catholic Church does not practice open communion and invite any baptize person who wants to receive to do so.\n\nIn the first place, not all Christians believe in the real presence of Christ. They would eat and drink without discerning the body of Christ and thus drink judgment on themselves.\n\nAnd in the second place, not all Christians are in a state of grace. Some are in a state of mortal sin, and they would be guilty of profaning the body and blood of the Lord.\n\nSo the practice that the Catholic Church uses is actually based on biblical principles and designed to protect.\n\nIt protects Jesus from being profaned by those who would receive improperly, and it protects those who would receive improperly . . . from God’s judgment.\n\n* * *",
                translation: "ai-assisted",
              },
              {
                speaker: "Karlo Broussard",
                work: "EVERY Protestant Objection to John 6 Answered",
                outlet: "Dr. Karlo",
                date: "10 de junio de 2026",
                locator:
                  "15 párrafos: del párrafo que empieza «First, there’s no reason to think sarx and sōma…» al que termina «…physical too, meaning our current bodies would never die.»",
                url: "https://www.catholic.com/audio/drk/every-protestant-objection-to-john-6-answered",
                text: "Primero, no hay razón para pensar que sarx y sōma se refieren a cosas distintas, porque se usan indistintamente a lo largo del Nuevo Testamento. Pablo usa ambas en la misma frase en 1 Corintios 6:16 y 2 Corintios 4:10-11, alternando para referirse a exactamente la misma realidad. Los cuerpos están hechos de carne. Cuando no hay indicio de que se pretenda una distinción, estamos justificados al leerlos como equivalentes. Jesús no dice nada en la Última Cena que nos impida entender “cuerpo” como si incluyera la carne.\n\nSegundo, y quizás el punto más fuerte. Tanto Juan 6 como la Última Cena son los únicos lugares en todo el Nuevo Testamento donde Jesús habla de beber su sangre. Eso no es una coincidencia: es una conexión.\n\nAhora pasamos a la objeción 8: Levítico 17 prohíbe beber sangre, así que Jesús no puede querer decirlo literalmente.\n\nUn problema acá es que la objeción supone que la prohibición de beber sangre es algo que nunca puede cambiar. Pero eso no es cierto. Las leyes dietéticas de la Antigua Alianza, incluida la prohibición de consumir sangre, no estaban enraizadas en la ley moral permanente. Eran regulaciones disciplinarias que gobernaban la pureza ritual judía, de carácter temporal.\n\nAdemás, el Nuevo Testamento es explícito en que pasaron. Por ejemplo, Jesús declara limpios todos los alimentos en Marcos 7:18-19. Pedro recibe una visión en Hechos 10 que le ordena comer lo que antes estaba prohibido. Pablo les dice a los colosenses, en Colosenses 2:16, que nadie debe juzgarlos por la comida y la bebida.\n\nPor último, si la prohibición de consumir sangre fuera una ley moral permanente, y el lenguaje de Jesús fuera una figura retórica, entonces Jesús estaría usando un comportamiento pecaminoso como figura para transmitir el significado real de creer en él. Eso no es propio del Hijo de Dios, todo santo, que no puede pecar.\n\nAsí que el precepto del Levítico era de naturaleza disciplinaria, no algo enraizado en la ley moral natural. Y ha sido reemplazado por el mandato de Cristo para la Nueva Alianza. Lejos de socavar la lectura católica, la objeción del Levítico confirma algo importante: la restricción de la Antigua Alianza ha dado paso a una realidad nueva y mayor, que el mismo Jesús inaugura.\n\n¡Bien! Faltan dos más.\n\nAcá va la objeción 9: si los católicos toman literalmente ‘coman mi carne’, también deberían tomar literalmente ‘nunca tendrá hambre ni sed’, que en el versículo 35 Jesús asocia con las imágenes de ‘comer’ y ‘beber’. Y aun así, todos seguimos teniendo hambre y sed.\n\nEsta objeción en realidad se vuelve contra el protestante. La mayoría de quienes la plantean interpretan las palabras de Jesús —“vengan a mí y nunca tendrán hambre, crean en mí y nunca tendrán sed”— como referidas a una fe real y literal, no simbólica. Así que, según la lógica de la objeción, si comer literalmente exige el efecto físico de no tener hambre nunca, creer literalmente debería exigir el mismo efecto. ¿Por qué se exigiría un resultado físico para comer literalmente y no para creer literalmente?\n\nNuestro amigo protestante no puede escapar del paralelo. O concede la misma conclusión absurda para su propia visión, o permite que la interpretación católica se sostenga sin una conclusión absurda. De cualquier modo, su argumento falla.\n\nPero hay un problema más profundo con la objeción. No hay nada incoherente en que un acto físico produzca un efecto espiritual. Pablo advierte en 1 Corintios 11:27-29 que comer la Eucaristía indignamente trae juicio espiritual. Si un acto físico de comer puede causar daño espiritual, seguramente puede causar vida espiritual.\n\nPor último, en un sentido muy real, literalmente nunca tendremos hambre ni sed, en nuestros cuerpos glorificados después de la resurrección. Jesús lo promete en el mismo pasaje de Juan 6: “El que come mi carne y bebe mi sangre tiene vida eterna, y yo lo resucitaré en el último día”.\n\nY así llegamos a la objeción 10: si Jesús quiso que comiéramos su carne en la Eucaristía con un acto físico de comer, como dicen los católicos, entonces los católicos nunca morirían al comer la Eucaristía, ya que Jesús dijo en los versículos 50-51 que quienes coman el pan del cielo nunca morirán.\n\nEl problema con esta objeción es que descansa sobre un principio interpretativo que nunca se defiende: que si la causa de la vida eterna es un acto físico, como comer la carne de Jesús, el efecto también debe ser físico, lo que significaría que nuestros cuerpos actuales nunca morirían.",
                original:
                  "First, there’s no reason to think sarx and sōma refer to different things, because they’re used interchangeably throughout the New Testament. Paul uses both in the same breath in 1 Corinthians 6:16 and 2 Corinthians 4:10-11—switching back and forth to refer to the exact same reality. Bodies are made of flesh. When there’s no indication a distinction is intended, we’re justified reading them as equivalent. Jesus says nothing at the Last Supper to preclude us understanding “body” as including flesh.\n\nSecond, and perhaps the stronger point. Both John 6 and the Last Supper are the only places in the entire New Testament where Jesus speaks of drinking his blood. That’s not a coincidence—that’s a connection.\n\nNow we move to objection 8: Leviticus 17 prohibits drinking blood—so Jesus can’t mean it literally.\n\nOne problem here is that the objection assumes the prohibition to drink blood is something that can never change. But that’s not true. The dietary laws of the Old Covenant—including the prohibition on consuming blood—were not rooted in the permanent moral law. They were disciplinary regulations governing Jewish ritual purity, temporary in nature.\n\nMoreover, the New Testament is explicit that they passed away. For example, Jesus declares all foods clean in Mark 7:18-19. Peter receives a vision in Acts 10 commanding him to eat what was formerly forbidden. Paul tells the Colossians in Colossians 2:16 that no one should judge them regarding food and drink.\n\nFinally, if the prohibition on consuming blood were a permanent moral law, and Jesus’ language was meant as a figure of speech, then Jesus would be using sinful behavior as his figure to convey the real meaning of belief in him. That’s not befitting of the all-holy Son of God who cannot sin.\n\nSo the precept from Leviticus was disciplinary in nature, not something rooted in the natural moral law. And it has been superseded by Christ’s command for the New Covenant. Far from undermining the Catholic reading, the objection from Leviticus actually confirms something important: the Old Covenant restriction has given way to a new and greater reality that Jesus himself inaugurates.\n\nAlright! Two more to go.\n\nHere’s objection 9: If Catholics take ‘eat my flesh’ literally, they should also take ‘never hunger or thirst’ literally, which, in verse 35, Jesus associates with the images of ‘eating’ and ‘drinking.’ Yet, we all still get hungry and thirsty.\n\nThis objection actually backfires for the Protestant. Most who make it interpret Jesus’ words—”come to me and never hunger, believe in me and never thirst”—as referring to real, literal faith, not symbolic faith. So according to the logic of the objection, if literal eating requires the physical effect of never getting hungry, literal believing should require the same effect. Why would one demand a physical outcome for literal eating but not for literal believing?\n\nOur Protestant friend can’t escape the parallel. Either he concedes the same absurd conclusion for his own view, or he allows the Catholic interpretation to stand without an absurd conclusion. Either way, his argument fails.\n\nBut there’s a deeper problem with the objection. There’s nothing incoherent about a physical act producing a spiritual effect. Paul warns in 1 Corinthians 11:27-29 that eating the Eucharist unworthily brings spiritual judgment. If a physical act of eating can cause spiritual harm, surely it can cause spiritual life.\n\nFinally, in a very real sense, we will literally never hunger or thirst—in our glorified bodies after the resurrection. Jesus promises in the very passage of John 6: “He who eats my flesh and drinks my blood has eternal life, and I will raise him up on the last day.”\n\nAnd so we come to objection 10: If Jesus intended us to eat his flesh in the Eucharist with a physical act of eating, like Catholics says, then Catholics would never die upon eating the Eucharist, since Jesus said in verses 50-51 that those who eat the bread from heaven will never die.\n\nThe problem with this objection it rests on an interpretative principle that’s never defended—that if the cause of eternal life is a physical act, like eating Jesus’ flesh, then the effect must be physical too, meaning our current bodies would never die.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Mal.1.11"],
      text: "El «presente limpio» que «en todo lugar se ofrece» al nombre de Dios «entre las gentes» {v:Mal.1.11} es, para Trento, la Misa {c:T22c1|ses. XXII, cap. 1}.",
      apologists: {
        arguments: [
          {
            title:
              "La «ofrenda pura» entre las naciones es el sacrificio eucarístico, tal como lo leyeron los cristianos desde el siglo I",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "James White DEBATE debrief (w/ John DeRosa)",
                outlet: "Shameless Popery",
                date: "6 de marzo de 2025",
                locator: "Ver la página enlazada",
                url: "https://www.catholic.com/audio/sp/james-white-debate-debrief-w-john-derosa",
                text: "Sí, el último capítulo de Isaías, Isaías 66, trata de los gentiles que entran en el pueblo de Dios. En el versículo 20 dice: traerán a todos sus hermanos de todas las naciones como ofrenda al Señor, a caballo y en carros, y así sucesivamente, al monte santo, Jerusalén. Y después, en el versículo 21, bueno, en realidad antes dice: así como los israelitas traen su ofrenda serial en un recipiente limpio a la casa del Señor. Es una imagen muy explícitamente de ofrenda, de aspecto sacrificial. En el versículo 21 dice: en algunos de ellos, es decir, también en los gentiles, tomaré para sacerdotes y para levitas, dice el Señor. Ahora bien, ¿por qué importa esto? Porque un protestante puede decir, y debo aclarar aquí que hablo de un protestante de cierta variante, como un bautista reformado. Otros protestantes van a discrepar con esto: anglicanos, algunos luteranos que aceptan sin problemas la idea de un sacerdocio, pero un protestante de tipo low church va a decir una o más de tres cosas.\n\nUno, no hay sacerdotes en el Nuevo Testamento. Dos, el único sacerdote es nuestro sumo sacerdote, Jesucristo. O tres, todos somos sacerdotes en virtud de nuestro bautismo o de nuestra pertenencia a la iglesia, algo por el estilo. Hay un sacerdocio de todos los creyentes. El problema de tomar solo una o más de esas tres posturas es que Isaías 66 no dice ninguno de ellos tomaré para sacerdotes y levitas, ni dice uno de ellos lo tomaré, ni dice todos. Dice algunos, que es justamente la única postura que los protestantes de esta variante se niegan a aceptar: algunos. Y no todos los cristianos tienen un oficio sacerdotal que no sea compartido por el resto de la comunidad de los fieles, y sin embargo ahí está, en Isaías 66. Luego tenemos Malaquías 1, que es críticamente importante, un pasaje que desarrollo con más profundidad en las charlas y, en general, en el debate. Es una repudiación de los sacerdotes judíos en tiempos de Malaquías por haber contaminado el altar del Señor, que el Señor llama la mesa del Señor, y muy explícitamente, entre el principio y el final del versículo 7, primero se lo llama altar y luego es la mesa del Señor.\n\nAsí que eso nos da un contexto para la mesa del Señor\n\n[la página imprime aquí las etiquetas «Speaker 5:» y «When», y luego «Joe:»]\n\nVemos ese contexto eucarístico en el Nuevo Testamento. Y luego habla de cómo, en cambio, Dios va a reemplazar este sacerdocio corrompido por un sacerdocio de entre las naciones, es decir, de los gentiles, y desde el surgir del sol hasta su ocaso. Quizá recuerden ese lenguaje de la misa: en todo lugar se presentará una ofrenda pura al nombre del Señor. Ahora bien, los cristianos primitivos, desde tan temprano como el ate en el siglo I, señalan el sacrificio eucarístico como el cumplimiento de esto. Y por eso, algo que vi en algunos comentarios del debate fue decir: “oh, esto trata sobre el fin de los tiempos”. Nadie en los primeros días del cristianismo pensó que esto era una profecía del fin de los tiempos. Trata de reunir a las naciones, que es lo que Jesús viene a hacer en su primera venida: traer a los gentiles al pueblo de Dios. Vemos que eso sucede en Hechos, y por eso entienden muy claramente que lo que está ocurriendo aquí es el cumplimiento de Malaquías 1. The dedicate habla de esto. San Justino Mártir habla de esto. EZ también. Todos citan Malaquías 1:11 y lo aplican explícitamente al sacrificio eucarístico. Y por eso eso también nos dice que no es solo alabanza. Algo más profundo está pasando aquí.",
                original:
                  "Yeah, the last chapter of Isaiah, Isaiah 66 is about the Gentiles coming into the people of God, and in verse 20, it says, they shall bring all your brethren from all the nations as an offering to the Lord upon horses and in chariots and so on to the Holy Mountain, Jerusalem. And then it says in verse 21, oh, actually then it says, just as the Israelites bring their serial offering in a clean vessel to the house of the Lord. So it’s a very explicitly offertory image, like a sacrificial looking image. Verse 21, it says in some of them, meaning the Gentiles also I will take for priests and for Levites says the Lord. Now why does that matter? Because a Protestant can say, and I should say here, a Protestant of a certain variety like a reformed Baptist. Other Protestants are going to disagree with this Anglicans, some Lutherans who are fine with the idea of a priesthood, but a Protestant of a low church variety is going to say one or more of three things.\n\nOne, there are no priests in the New Testament. Two, the only priest is our high priest, Jesus Christ, or three, all of us are priests by virtue of our baptism or by virtue of our being members of the church, something like that. There’s a priest of all believers. The problem with taking just one or more of those three views is Isaiah 66 doesn’t say, and none of them I will take for priests and for Levites, it doesn’t say one of them I’ll take it doesn’t say all of them. It says some of them, which is the one view that Protestants of this variety refuse to accept it some. And not all Christians have a priestly office that isn’t shared by the rest of the collection of the faithful, and yet there it is plaintiff’s day in Isaiah 66. Then you’ve got Malachi one, which is this critically important, which passage and I go into more depth in the talks and in the debate more broadly, it’s a repudiation of the Jewish priests in the time of Malachi for polluting the altar of the Lord, which the Lord calls the Lord’s table and very explicitly between the beginning and end of verse seven, it refers first as an altar and then it’s the Lord’s table.\n\nSo that gives us a context for table of the Lord\n\n[the page prints the labels «Speaker 5:» and «When» here, then «Joe:»]\n\nWe see that Eucharistic context in the New Testament. And then it talks about how instead God is going to replace this corrupted priesthood with the priesthood from the nations, meaning the Gentiles and from the rising of the sun to its setting. You may remember that language from mass, a pure offering will be made to the Lord’s name. Now, the early Christians from as early as the ate in the first century point to the Eucharistic sacrifice as the fulfillment of this. And so this is something I saw some of the debate comments saying, oh, this is about the end times. No one in the early days of Christianity thought this was an end times prophecy. It’s about gathering the nations, which is what Jesus comes to do in the first coming, bringing the Gentiles into the people of God. We see that happening in acts, and so very clearly they understand that what is happening here is the fulfillment of Malachi one. The dedicate talks about it. St. Justin Martyr talks about it. EZ talks about it. All of them quote Malachi one 11 and apply it explicitly to the Eucharistic sacrifice. And so that also tells us it’s not just praise. Something deeper is going on here.",
                translation: "ai-assisted",
              },
              {
                speaker: "Jimmy Akin",
                work: "N.T. Wright & the Priesthood of All Believers",
                outlet: "The Jimmy Akin Podcast",
                date: "24 de marzo de 2025",
                locator:
                  "16 párrafos: del párrafo que empieza «For example, in Isaiah 66—the last chapter of the…» al que termina «…the gentiles to God as a New Testament priest.»",
                url: "https://www.catholic.com/audio/tjap/n-t-wright-the-priesthood-of-all-believers",
                text: "Por ejemplo, en Isaías 66 —el último capítulo del libro de Isaías—, el profeta predice la era mesiánica que viene, en la que Dios hará grandes cosas, y dice:\n\nViene el tiempo de reunir a todas las naciones y lenguas. Y vendrán y verán mi gloria, y pondré entre ellos una señal. . . . Y anunciarán mi gloria entre las naciones. . . . Y a algunos de ellos también tomaré para sacerdotes y para levitas, dice el Señor (Isaías 66:18-21).\n\nAsí que Isaías profetizó que —en la era del Mesías, o la era cristiana— Dios tomaría a algunos de los gentiles y los haría servir como sacerdotes; por lo tanto, en la era cristiana tiene que haber una presencia de un sacerdocio ministerial.\n\nLo mismo se refuerza con otra profecía que se encuentra en Malaquías 1, donde leemos:\n\nCuando ofrecen animales ciegos en sacrificio, ¿no es eso malo? Y cuando ofrecen los que están cojos o enfermos, ¿no es eso malo? . . .\n\n¡Ojalá hubiera entre ustedes alguien que cerrara las puertas, para que no encendieran fuego en vano sobre mi altar! No tengo placer en ustedes, dice el Señor de los ejércitos, y no aceptaré ofrenda de su mano.\n\nPorque desde donde sale el sol hasta donde se pone, mi nombre será grande entre las naciones, y en todo lugar se ofrecerá incienso a mi nombre, y una ofrenda pura. Porque mi nombre será grande entre las naciones, dice el Señor de los ejércitos (Malaquías 1:8, 10-11).\n\nAquí el profeta expresa el deseo de Dios de que alguien cerrara las puertas del templo de Jerusalén, ya que Dios no aceptará las ofrendas hechas allí por el pueblo judío. En cambio, Dios empieza a recibir ofrendas puras dadas “en todo lugar” por los gentiles, porque entre ellos su nombre es grande.\n\nDesde el primer siglo en adelante, los cristianos vieron este par de profecías cumplido en su tiempo. El templo fue cerrado en el año 70 d. C., cuando fue destruido por los romanos —tal como Jesús había dicho que sucedería—, y entonces los cristianos en todas partes, incluidos muchos gentiles, comenzaron a ofrecer a Dios la ofrenda pura del sacrificio eucarístico.\n\nAsí vemos nuevamente una presencia continua del sacerdocio ministerial en la era cristiana.\n\nAmbos pasajes se encuentran en el Antiguo Testamento, pero también vemos una presencia continua en el Nuevo Testamento. En Romanos 15, donde san Pablo dice:\n\nSobre algunos puntos les he escrito con bastante audacia, a modo de recordatorio, por la gracia que Dios me ha dado para ser ministro de Cristo Jesús a los gentiles, en el servicio sacerdotal del evangelio de Dios, para que la ofrenda de los gentiles sea aceptable, santificada por el Espíritu Santo (Romanos 15:15-16).\n\nLa palabra aquí traducida como “servicio sacerdotal” es hierourgeó, y si consultan diccionarios griegos estándar como el léxico griego-inglés del Nuevo Testamento de Bauer, Danker, Arndt y Gingrich, verán que significa “realizar un servicio sagrado” o “actuar como sacerdote”.\n\nLa Lexham English Bible, que es una traducción protestante reciente y literal, por eso traduce el pasaje así:\n\nLes he escrito con más audacia en algunos puntos, para recordarles de nuevo por la gracia que me ha sido dada por Dios, con el resultado de que soy siervo de Cristo Jesús para los gentiles, sirviendo al evangelio de Dios como sacerdote, a fin de que la ofrenda de los gentiles sea hecha aceptable, santificada por el Espíritu Santo (Romanos 15:15-16, LEB).\n\nAsí que Pablo indica que sirve al evangelio de Dios como sacerdote, lo cual muestra que el evangelio cristiano incluye un papel para los sacerdotes ministeriales, ya que Pablo entiende que su propio ministerio es distinto al de un cristiano común. Fue llamado de una manera especial al servicio del evangelio, y aquí se ve a sí mismo ofreciendo a los gentiles a Dios como sacerdote del Nuevo Testamento.",
                original:
                  "For example, in Isaiah 66—the last chapter of the book of Isaiah—the prophet is predicting the coming messianic age in which God will do great things, and he says:\n\nThe time is coming to gather all nations and tongues. And they shall come and shall see my glory, and I will set a sign among them. . . . And they shall declare my glory among the nations. . . . And some of them also I will take for priests and for Levites, says the Lord (Isaiah 66:18-21).\n\nSo Isaiah prophesied that—in the age of the Messiah, or the Christian age—God would take some of the gentiles and have them serve as priests, so there is to be a presence of a ministerial priesthood in the Christian age.\n\nThe same thing is reinforced by another prophecy that is found in Malachi 1, where we read:\n\nWhen you offer blind animals in sacrifice, is that not evil? And when you offer those that are lame or sick, is that not evil? . . .\n\nOh that there were one among you who would shut the doors, that you might not kindle fire on my altar in vain! I have no pleasure in you, says the Lord of hosts, and I will not accept an offering from your hand.\n\nFor from the rising of the sun to its setting my name will be great among the nations, and in every place incense will be offered to my name, and a pure offering. For my name will be great among the nations, says the Lord of hosts (Malachi 1:8, 10-11).\n\nHere the prophet expresses God’s wish that someone would shut the doors of the temple in Jerusalem since God will not accept offerings made by the Jewish people there. Instead, God begins receiving pure offerings given “in every place” by the gentiles, for among them God’s name is great.\n\nFrom the first century onward, Christians saw this pair of prophecies as being fulfilled in their day. The temple was shut down in A.D. 70 when it was destroyed by the Romans—just as Jesus had said it would be—and then Christians everywhere, including many gentiles, began offering God the pure offering of the Eucharistic sacrifice.\n\nWe thus again see an ongoing presence for the ministerial priesthood in the Christian age.\n\nBoth of these passages are found in the Old Testament, but we also see an ongoing presence in the New Testament. In Romans 15, where St. Paul says:\n\nOn some points I have written to you very boldly by way of reminder, because of the grace given me by God to be a minister of Christ Jesus to the gentiles in the priestly service of the gospel of God, so that the offering of the gentiles may be acceptable, sanctified by the Holy Spirit (Romans 15:15-16).\n\nThe word here translated “priestly service” is hierourgeó, and if you check standard Greek dictionaries like Bauer, Danker, Arndt, and Gingrich’s Greek-English Lexicon of the New Testament, you’ll see that it means to “perform holy service” or to “act as a priest.”\n\nThe Lexham English Bible—which is a recent and literal Protestant translation—thus renders the passage:\n\nI have written to you more boldly on some points, so as to remind you again because of the grace that has been given to me by God, with the result that I am a servant of Christ Jesus to the gentiles, serving the gospel of God as a priest, in order that the offering of the gentiles may become acceptable, sanctified by the Holy Spirit (Romans 15:15-16, LEB).\n\nSo Paul indicates that he serves the gospel of God as a priest—which shows that the Christian gospel includes a role for ministerial priests, since Paul understands his own ministry to be different than that of an ordinary Christian. He was called in a special way to the service of the gospel, and he here views himself as offering the gentiles to God as a New Testament priest.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Gen.14.18", "Ps.110.4"],
      text: "«Tú eres sacerdote para siempre según el orden de Melchîsedech» {v:Ps.110.4}, que ofreció pan y vino {v:Gen.14.18}; la Iglesia católica ve en ese gesto una figura de su propia ofrenda {c:CEC1333|Catecismo 1333}.",
      apologists: {
        arguments: [
          {
            title: "El pan y el vino de Melquisedec prefiguran la Última Cena",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Proving The Catholic Priesthood Is Biblical (Response to Needgod.net)",
                outlet: "Shameless Popery",
                date: "15 de enero de 2026",
                locator: "Párrafo que empieza «Does that look like Jesus at the last supper?»",
                url: "https://www.catholic.com/audio/sp/proving-the-catholic-priesthood-is-biblical-response-to-needgod-net",
                text: "Y parece estar prefigurando el hecho de que Jesús va a tomar pan y vino y convertirlos en su cuerpo y su sangre",
                original:
                  "And it seems to be prefiguring the fact that Jesus is going to take bread and wine and turn them into his body and blood",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "El pan y el vino de Melquisedec prefiguran la Eucaristía; el sacerdocio de Cristo es «según el orden de Melquisedec»",
            quotes: [
              {
                speaker: "Tom Nash",
                work: "What Is the Point of a Priest?",
                outlet: "Catholic Answers Magazine",
                date: "9 de marzo de 2026",
                locator:
                  "8 párrafos: del párrafo que empieza «In the first part of my series on the…» al que termina «…God a high priest after the order of Melchizedek.»",
                url: "https://www.catholic.com/magazine/online-edition/what-is-the-point-of-a-priest",
                text: "En la primera parte de mi serie sobre las raíces bíblicas de la Misa, examinamos cómo el único sacrificio de Jesús en el Calvario no terminó en la cruz, sino que culminó en gloria eterna en el santuario celestial. En la segunda parte, vimos cómo el único y mismo sacrificio de Cristo se hace presente aquí en la tierra mediante el recuerdo bíblico, en el cumplimiento más profundo de la oración del Señor: “Venga tu reino, hágase tu voluntad, en la tierra como en el cielo” (Mateo 6:10).\n\nEn este tercer artículo de la serie, vamos a mostrar cómo ese único sacrificio se hace presente según el orden de Melquisedec, es decir, bajo las apariencias de pan y vino, que el “rey de Salem y sacerdote de Dios Altísimo” ofreció al principio de manera puramente natural (Gén. 14:18-20), después de que Abram hubiera derrotado a varios reyes. ¿Cuál es la función principal de un sacerdote? Como afirma la Escritura,\n\ntodo sumo sacerdote escogido de entre los hombres es constituido para actuar en favor de los hombres ante Dios, para ofrecer dones y sacrificios por los pecados (Hebreos 5:1, énfasis añadido).\n\nAlgunos críticos sostienen que el pan y el vino no constituyen la materia ritual de una ofrenda bíblica —con intención del juego de palabras—, entre otras cosas porque no se sacrifica ningún animal vivo. La Biblia dice otra cosa, ya que los israelitas ofrecían a diario un sacrificio de cordero:\n\n. . . con el primer cordero, una décima medida de flor de harina mezclada con un cuarto de hin de aceite batido, y un cuarto de hin de vino para libación (Éxodo 29:40; ver Levítico 23:13).\n\nLa Escritura habla de Melquisedec muy poco. El sumo sacerdote interactúa brevemente con Abram en Génesis 14, el salmista lo menciona una vez (Sal. 110:4), y el autor de Hebreos lo trata en los capítulos 5 a 7, explicando cómo Jesús es “sacerdote para siempre según el orden de Melquisedec” (por ejemplo, 5:6, 10). Entonces, si Melquisedec 1) es sacerdote, 2) aparece brevemente solo en Génesis 14, y 3) la función principal de un sacerdote debe ser “ofrecer dones y sacrificios por los pecados” (Heb. 5:1), ¿no es lógico inferir que su ofrenda sacerdotal fue efectivamente pan y vino, y que, por lo tanto, no sorprende que Jesús ofrezca su cuerpo y su sangre bajo las apariencias de pan y vino (según el orden de Melquisedec)?\n\nA la luz de todo esto, sostengo que Hebreos 5:7-10 es el pasaje más profundo de la historia bíblica de la Misa:\n\nEn los días de su carne, Jesús ofreció oraciones y súplicas, con fuerte clamor y lágrimas, a aquel que podía salvarlo de la muerte, y fue escuchado por su temor reverente. Aunque era Hijo, aprendió la obediencia por lo que padeció; y habiendo sido perfeccionado, llegó a ser autor de salvación eterna para todos los que le obedecen, siendo designado por Dios sumo sacerdote según el orden de Melquisedec.",
                original:
                  "In the first part of my series on the biblical roots of the Mass, we examined how Jesus’ one sacrifice of Calvary didn’t end on the cross, but rather culminated in everlasting glory in the heavenly sanctuary. In part two, we saw how Christ’s one, selfsame sacrifice becomes present here on earth through biblical remembrance, in the most profound fulfillment of the Lord’s Prayer: “Thy kingdom, thy will be done, on earth as it is in heaven” (Matt. 6:10).\n\nIn this third article of the series, we’ll show how that one sacrifice is made present according to the order of Melchizedek—that is, under the appearances of bread and wine, which the “king of Salem and priest of God most high” initially offered in a purely natural manner (Gen. 14:18-20) after Abram had a defeated a number of kings. What is the prime function of a priest? As Scripture affirms,\n\nevery high priest chosen from among men is appointed to act on behalf of men in relation to God, to offer gifts and sacrifices for sins (Heb. 5:1, emphasis added).\n\nSome critics contend that bread and wine do not constitute the rite stuff of a biblical offering—pun intended—including because no living animal is slaughtered in sacrifice. The Bible testifies otherwise, as the Israelites offered such with a daily lamb sacrifice:\n\n. . . with the first lamb a tenth measure of fine flour mingled with a fourth of a hin of beaten oil, and a fourth of a hin of wine for a libation (Exod. 29:40; see Lev. 23:13).\n\nScripture discusses Melchizedek minimally. The high priest interacts briefly with Abram in Genesis 14, the Psalmist references Melchizedek once (Ps. 110:4), and the author of Hebrews discusses him in chapter 5-7, explaining how Jesus is “a priest forever according to the order of Melchizedek” (for example, 5:6, 10). So if Melchizedek 1) is a priest, 2) makes only a brief cameo in Genesis 14, and 3) the prime function of a priest must be “to offer gifts and sacrifices for sins” (Heb. 5:1), isn’t it logical to infer that his priestly offering was indeed bread and wine—and thus not surprising that Jesus offers his body and blood under the appearances of bread and wine (according to the order of Melchizedek)?\n\nIn this important light, I contend that Hebrews 5:7-10 is the most profound passage in the biblical story of the Mass:\n\nIn the days of his flesh, Jesus offered up prayers and supplications, with loud cries and tears, to him who was able to save him from death, and he was heard for his godly fear. Although he was a Son, he learned obedience through what he suffered; and being made perfect he became the source of eternal salvation to all who obey him, being designated by God a high priest after the order of Melchizedek.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Pan y vino, Melquisedec y el sacrificio de acción de gracias",
            quotes: [
              {
                speaker: "Taylor Marshall",
                work: 'Saint Paul’s Use of the Word "Eucharist"',
                outlet: "taylormarshall.com",
                date: "29 de junio de 2010",
                locator: "Párrafo que empieza «In the Old Testament»",
                url: "https://taylormarshall.com/2010/06/saint-pauls-use-of-word-eucharist.html",
                text: "En el Antiguo Testamento leemos que los sacrificios de acción de gracias, el todah, se ofrecían con harina de trigo y vino (Núm 15:1-10). Este sacrificio de trigo y vino evoca el sacrificio de pan y vino ofrecido por Melquisedec, que bendijo al patriarca Abraham (Gén 14:18). Leemos que Cristo es un “sacerdote según el orden de Melquisedec” (Heb 7:1-17), y por eso los judíos esperarían que el Mesías ofreciera un sacrificio de pan y vino. Además, leemos que el rey David ofreció el sacrificio todah con pan y vino (1 Cr 16:3). También leemos sobre el profeta Jonás, que, tragado por la ballena, hizo voto al Señor de un sacrificio todah si era librado de la muerte después de pasar tres días en la oscuridad (Jon 2:3-10). Los primeros cristianos llegaron a percibir que la Última Cena de Cristo fue en realidad un sacrificio todah de pan y vino en unión con el sacrificio de Cristo. El tema davídico de acción de gracias todah y el todah prometido de Jonás, que también resucitó del vientre del pez al tercer día, confirmaron que el rito del trigo y el vino de Cristo se remontaba a la ofrenda de pan y vino de “acción de gracias” del Antiguo Testamento.",
                original:
                  "In the Old Testament, we read that the todah thanksgiving sacrifices were offered with wheat flour and wine (Num 15:1-10). This sacrifice of wheat and wine evokes the sacrifice of bread and wine offered by Melchizedek who blessed the patriarch Abraham (Gen 14:18). We learn that Christ is a “priest according to the order of Melchizedek” (Heb 7:1-17), and so Jews would expect the Messiah to offer a sacrifice of bread and wine. Moreoever, read that King David offered the todah sacrifice with bread and wine (1 Chr 16:3). We also read about how the prophet Jonah, having been swallowed by the whale, vowed to the Lord a todah sacrifice if he should be delivered from death after spending three days in darkness (Jon 2:3-10). The earliest Christians came to perceive that the Last Supper of Christ was in fact a todah sacrifice of bread and wine in union with the sacrifice of Christ. The Davidic todah—thanksgiving theme and the promised todah—thanksgiving of Jonah who also rose from the belly of the fish on the third day confirmed that the wheat and wine ritual of Christ hearkened back to the bread and wine “thanksgiving” offering of the Old Testament.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Heb.7.11-Heb.7.27", "Heb.9.12-Heb.9.14", "Heb.9.27"],
      text: "Hebreos dice que Cristo se ofreció una sola vez y que su sacerdocio no termina; Trento concluye que en la última Cena dejó un sacrificio visible que hace presente ese único sacrificio, sin repetirlo {c:T22c1|ses. XXII, cap. 1}.",
      apologists: {
        arguments: [
          {
            title:
              "Heschmeyer: el sacrificio único y definitivo no se realiza solo el Viernes Santo, según su lectura de Hebreos 9 (la ofrenda en el cielo está en su párrafo, no en la oración citada); Jesús, sacerdote según el orden de Melquisedec, ofrece pan y vino en la Última Cena (Broussard; su oración cita Hebreos 5:10, no el capítulo 7)",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Does the Mass Put Jesus Back on the Cross?",
                outlet: "Shameless Popery",
                date: "17 de abril de 2025",
                locator:
                  "4 párrafos: del párrafo que empieza «I’m just going to throw that out there without…» al que termina «…hear those words, what does that remind you of?»",
                url: "https://www.catholic.com/audio/sp/does-the-mass-put-jesus-back-on-the-cross",
                text: "Solo lo menciono, sin profundizar. Pero si no se entiende el contexto entre el pan de la presencia y que Cristo se haga presente, creo que se pierde algo. Luego está el segundo templo —perdón, la segunda cortina dentro del templo, el segundo tabernáculo que lleva al Santo de los Santos. Y así, el sacerdote, habiendo hecho los preparativos, normalmente entraba al tabernáculo exterior solo una vez al año. Solo entraba el sumo sacerdote, y no entraba sin antes ofrecer sangre por sí mismo y por los pecados del pueblo. Ahora, en cambio, Hebreos 9 dice: cuando Cristo apareció, entró una vez para siempre en el lugar santo, no con sangre de cabras y becerros, sino con su propia sangre, obteniendo así una redención eterna. Ahora bien, mucha gente señala Hebreos 9 como si contradijera a la Misa, y dice: ¡ajá!, esto pasó el Viernes Santo. Pero en realidad, lo que aquí se describe no es lo que pasó el Viernes Santo.\n\nEse no es el momento en que Cristo entró en el lugar santo. ¿Cómo lo sabemos? Porque Hebreos 9 explica después qué significa que Cristo entre en el lugar santo. Salto al versículo 24: porque Cristo no entró en un santuario hecho por manos, copia del verdadero, sino en el cielo mismo, para presentarse ahora ante la presencia de Dios por nosotros. Esto es importante. Debatí con James White sobre este punto y él intentó apoyarse en Hebreos 9. Él decía: mire, la ofrenda de Cristo, una vez para siempre, sucedió el Viernes Santo. Yo señalé que el aspecto propiciatorio del sacrificio ocurre cuando Cristo entra en el cielo mismo, lo cual no sucede el Viernes Santo. Sucede 42 días después, cuando Jesús asciende al cielo. Esto va a ser muy importante para entender lo que pasa, porque lo vamos a ver. Voy a seguir leyendo Hebreos 9, sin embargo: ni era para ofrecerse repetidamente, como el sumo sacerdote entra cada año en el lugar santo con sangre que no es suya, pues entonces habría tenido que padecer repetidas veces desde la fundación del mundo.\n\nPero como está, se ha manifestado una vez para siempre al final de los tiempos para quitar el pecado por el sacrificio de sí mismo. Entonces, está primero la muerte del sacerdote mismo por su ofrenda por el pecado. No hace falta, obviamente, porque Jesús no tiene pecado. Luego está la muerte de la ofrenda por el pecado del pueblo. Jesús la cumple una vez para siempre en el buen Viernes, pero después está la dimensión de la ofrenda, llevar la sangre al lugar santo. Esto también es una vez para siempre, pero no es el Viernes Santo. Así que quien les diga que el sacrificio de una vez para siempre se hizo el Viernes Santo no entiende lo que dice Hebreos 9 ni cómo funciona un sacrificio. Ahora podrían decir: un momento, ¿dónde vemos algo sobre comer la carne o algo que suene eucarístico en esto? Y les diré que es porque miramos el principio y el final de Hebreos 9 y saltamos justo el medio, donde hay un pasaje muy importante en el que el autor de Hebreos explica que, cuando habla de la sangre de la alianza, va a introducir una dimensión sacrificial aparte.\n\nEn este caso se trata de la creación de la alianza, que incluye algunas ofrendas sacrificiales, y explica un paso que podríamos pasar por alto si solo pensamos en Yom Kipur. Lo dice así. Dice: “incluso esto” es el versículo 18. Ni siquiera la primera alianza fue ratificada sin sangre. Fíjense que eso significa que la antigua alianza y la nueva se ratifican con sangre. Va a ser muy importante decir “ni siquiera la primera”. Eso también quiere decir que la segunda, porque cuando Moisés había proclamado a todo el pueblo cada mandamiento de la ley, tomó sangre de becerros y de cabras, con agua, lana escarlata e hiss, y roció tanto el libro mismo como a todo el pueblo, diciendo: esta es la sangre de la alianza que Dios les ordenó. Ahora bien, si eres cristiano, al escuchar esas palabras, ¿qué te recuerdan?",
                original:
                  "I’m just going to throw that out there without really delving into it. But if you don’t get the context between the bread of the presence and Christ being made present, I think you’re missing something. But then the second temple, excuse the second curtain within the temple, the second tabernacle goes into the holy of Holies. And so the priest having made the preparations, normally we would only go into the outer tent once a year. Only the high priest would go in and he wouldn’t go in without first offering blood for himself as well as for the heirs of the people. Now, in contrast, Hebrews nine says, when Christ appears, he enters once for all into the holy place, not taking the blood of goats and calves, but his own blood, thus securing an eternal redemption. Now, people will often point to Hebrews nine as if this is contradicting the mass and they’ll say, aha, this happened on Good Friday, but in fact, what’s being described here isn’t what happened on Good Friday.\n\nThat is not when Christ entered into the holy place. How do we know? Because Hebrews nine goes on to say what’s meant by Christ entering the holy place. Jumped on to verse 24, for Christ has entered not into his sanctuary, made with hands a copy of the true one, but into heaven itself now to appear in the presence of God on our behalf. So this is important. I debated James White on this and he tried to point to Hebrews nine. He saying, look, Christ, once for all offering happened on Good Friday, and I pointed out no very, the propitiatory aspect of the sacrifice happens when Christ goes into heaven itself, which doesn’t happen on Good Friday. It happens 42 days later when Jesus ascends into heaven. Now that’s going to be really important in understanding what’s happening because we’ll get into it. I’m going to continue reading from Hebrews nine though, nor was it to offer himself repeatedly as the high priest enters the holy place yearly with blood, not his own for then he would’ve had to suffer repeatedly since the foundation of the world.\n\nBut as it is, he has appeared once for all at the end of the age to put away sin by the sacrifice of himself. So you have the killing first for the priest himself for his sin offering. There’s no need for that obviously, because Jesus is without sin. Then you have killing the sin offering for the people. Jesus fulfills that once for all on good for Friday, but then you have the offertory dimension, the bringing the blood into the holy place. This is also once for all, but it’s not on Good Friday. So anyone who tells you the once for all sacrifice is done on Good Friday doesn’t understand what Hebrews nine is saying and doesn’t understand the way a sacrifice works. Now you might say, hold on, where do we see anything about eating the flesh or anything that sounds eucharistic in this? And I’ll tell you it’s because we were looking at the beginning and the end of Hebrews nine and jumping right over the middle where there’s this really important passage where the author of Hebrews explains that when he talks about the blood of the covenant, he’s going to bring in a separate sacrificial dimension.\n\nIn this case the covenant creation which has some sacrificial offerings and explaining that step that we might miss if we are just thinking about Yom Kippur. So he says it like this. He says, even this is verse 18. Even the first covenant was not ratified without blood. Okay, so notice that means the old covenant and the new covenant are ratified with blood. It’s going to be very important to say even the first one. That also means the second one for when every commandment of the law had been declared by Moses to all the people he took the blood of calves and goats with water and scarlet wool and hiss and sprinkled both the book itself and all the people saying, this is the blood of the covenant which God commanded you. Now if you’re a Christian, you hear those words, what does that remind you of?",
                translation: "ai-assisted",
              },
              {
                speaker: "Karlo Broussard",
                work: "The Catholic Mass Is Profoundly Biblical",
                outlet: "Catholic Answers Magazine",
                date: "1 de julio de 2012",
                locator:
                  "9 párrafos: del párrafo que empieza «As the Mass moves into the Liturgy of the…» al que termina «…sanctuary to join their voices with the heavenly beings.»",
                url: "https://www.catholic.com/magazine/print-edition/the-mass-is-profoundly-biblical",
                text: "A medida que la Misa avanza hacia la Liturgia Eucarística, se sigue reconociendo un conjunto de oraciones, gestos y prácticas que aluden a la Biblia. Por ejemplo, el pan y el vino evocan el sacrificio de acción de gracias ofrecido por el sacerdote-rey Melquisedec en Génesis 14:14-16. Es sobre este trasfondo del Antiguo Testamento que Jesús, a quien el autor de Hebreos identifica como sacerdote según el orden de Melquisedec (Heb. 5:10), ofrece pan y vino en la Última Cena.\n\nPor lo tanto, la ofrenda de pan y vino en la Misa católica significa que el sacrificio que está por tener lugar es uno como el de Melquisedec, a saber, un sacrificio de acción de gracias (griego, eucharistia), y es ofrecido por un sacerdote del orden de Melquisedec, es decir, el sacerdote que actúa in persona Christi.\n\nOtro pasaje bíblico que puede venir a la mente durante las oraciones del ofertorio es Daniel 3:39-40 (NAB), donde Azarías ora de pie en medio del horno ardiente: “Pero con corazón contrito y espíritu humilde seamos recibidos; como si fueran holocaustos de carneros y toros, o miles de corderos cebados, así sea nuestro sacrificio en tu presencia hoy, mientras te seguimos sin reservas.”\n\nEste pasaje sirve como posible trasfondo para la oración de aceptación del sacrificio, que dice: “Con espíritu humilde y corazón contrito, que seamos aceptados por ti, Señor, y que nuestro sacrificio, a tus ojos, sea hoy agradable para ti.”\n\nJunto con las oraciones del ofertorio, el acto sacerdotal de lavarse las manos sigue el modelo de la tradición bíblica. Según Levítico 30:18-21, Moisés instruye a los sacerdotes levitas a lavarse las manos en la fuente de bronce ubicada junto al altar del sacrificio, fuera del tabernáculo, antes de entrar a cumplir sus funciones sacerdotales. El sacerdote católico se lava las manos porque está por entrar al tabernáculo celestial que se hace presente en el tiempo y el espacio cuando confecciona la Eucaristía.\n\nOtro rito que merece destacarse es la ofrenda sacerdotal del incienso. Para cualquier judío, esto evoca el altar del incienso ubicado en el Lugar Santo del tabernáculo del desierto y en el Templo de Salomón, en el que ministraba el sacerdote levita. Además, san Juan describe en el libro del Apocalipsis a los presbíteros, es decir, sacerdotes, ofreciendo copas de oro llenas de incienso en el santuario celestial (cf. Ap. 5:8). Por eso, la ofrenda de incienso en la Misa católica es una práctica común del pueblo de Dios a lo largo de la historia de la salvación, y significa que los fieles católicos participan místicamente en el culto del Templo celestial.\n\nEl siguiente gran rezo que contiene elementos directamente derivados de la Biblia es el Sanctus. La triple aclamación de la santidad de Dios —santo, santo, santo— se encuentra tanto en el Antiguo como en el Nuevo Testamento. En el Antiguo Testamento, el profeta Isaías describe su visión del trono celestial y cómo, dentro de él, ve y oye a los ángeles cantando: “Santo, santo, santo es el Señor de los ejércitos” (Is. 6:3). De manera similar, san Juan ve lo mismo cuando se le concede acceso al trono celestial del Cordero. Escribe en Apocalipsis 4:8: “Y los cuatro seres vivientes… día y noche… nunca cesan de cantar: ‘¡Santo, santo, santo es el Señor Dios Todopoderoso, el que era, el que es y el que ha de venir!’” Quizá esto explica el prefacio que precede a la oración del Sanctus:\n\n“Y así, con los ángeles y arcángeles, con los tronos y dominaciones, y con todos los ejércitos y potestades del cielo, cantamos el himno de tu gloria, aclamándote sin fin.”\n\nEl Sanctus es, por lo tanto, una señal para los fieles católicos de que entran sacramentalmente en el santuario celestial para unir sus voces a las de los seres celestiales.",
                original:
                  "As the Mass moves into the Liturgy of the Eucharist, one continues to recognize a construct of prayers, gestures, and practices that allude to the Bible. For example, the bread and wine calls to mind the sacrifice of thanksgiving offered by the priest-king Melchizedek in Genesis 14:14-16. It is against this Old Testament backdrop that Jesus, whom the author of Hebrews identifies as a priest according to the order of Melchizedek (Heb. 5:10), offers bread and wine at the Last Supper.\n\nTherefore, the offering of bread and wine in the Catholic Mass signifies that the sacrifice soon to take place is one like Melchizedek, namely a sacrifice of thanksgiving (Greek, eucharistia), and is offered by a priest of the order of Melchizedek, i.e., the priest who acts in persona Christi.\n\nAnother Bible passage that may come to mind during the offertory prayers is Daniel 3:39-40 (NAB), where Azariah prays while standing in the midst of the fiery furnace, “But with contrite heart and humble spirit let us be received; As though it were holocausts of rams and bullocks, or thousands of fat lambs, So let our sacrifice be in your presence today as we follow you unreservedly.”\n\nThis passage serves as a possible background for the prayer for acceptance of sacrifice, which reads, “With humble spirit and contrite heart may we be accepted by you, O Lord, and may our sacrifice in your sight this day be pleasing to you.”\n\nAlong with the prayers of offertory, the priestly act of washing hands models the biblical tradition. According to Leviticus 30:18-21, Moses instructs the Levitical priests to wash their hands in the bronze basin located next to the altar of sacrifice outside the tabernacle before entering to perform their priestly duties. The Catholic priest washes his hands because he is about to enter the heavenly tabernacle that is made present in time and space when he confects the Eucharist.\n\nAn additional ritual worthy of highlight is the priestly offering of incense. For any Jew, this calls to mind the altar of incense located in the Holy Place of the wilderness tabernacle and in Solomon’s Temple at which the Levitical priest would minister. Furthermore, St. John describes in the Book of Revelation presbyters, i.e., priests, offering golden bowls of incense in the heavenly sanctuary (cf. Rev. 5:8). Therefore, the offering of incense in the Catholic Mass is one of common practice among the people of God throughout salvation history and signifies that the Catholic faithful mystically participate in the worship of the heavenly Temple.\n\nThe next major prayer that contains elements directly derived from the Bible is the Sanctus. The threefold acclamation of God’s holiness—holy, holy, holy—is found in both the Old and New Testaments. In the Old Testament, the prophet Isaiah describes his vision of the heavenly throne room and how within it he sees and hears the angels singing, “Holy, holy, holy is the Lord of hosts” (Is. 6:3). Similarly, St. John sees the same thing when he is given access to the heavenly throne room of the Lamb. He writes in Revelation 4:8, “And the four living creatures . . . day and night . . . never cease to sing, ‘Holy, holy, holy, is the Lord God Almighty, who was and is and is to come!’” Perhaps this makes sense out of the preface before the prayer of the Sanctus:\n\n“And so, with angels and archangels, with thrones and dominions, and with all the hosts and powers of heaven, we sing the hymn of your glory, as without end we acclaim.”\n\nThe Sanctus is thus a sign to the Catholic faithful that they are sacramentally entering into the heavenly sanctuary to join their voices with the heavenly beings.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Exod.12", "1Cor.5.7"],
      text: "Jesús instituyó la Eucaristía en la cena pascual: celebrada la Pascua antigua, instituyó la nueva, él mismo inmolado bajo signos visibles {c:T22c1|Trento, ses. XXII, cap. 1} {c:CEC1340|Catecismo 1340}.",
      apologists: {
        arguments: [
          {
            title: "Cristo es el cordero de la Pascua, y la Pascua se completa comiendo el cordero (Horn, Heschmeyer)",
            quotes: [
              {
                speaker: "Trent Horn",
                work: "The 'Death Cookie' and Other Eucharistic Whoppers",
                outlet: "Catholic Answers Magazine",
                date: "26 de octubre de 2022",
                locator:
                  "11 párrafos: del párrafo que empieza «Pasch means “Passover,” and when the Jews were enslaved…» al que termina «…the Lord himself would be pagan (The Two Babylons).»",
                url: "https://www.catholic.com/magazine/print-edition/the-death-cookie-and-other-eucharistic-whoppers",
                text: "Pasch significa “Pascua”, y cuando los judíos estaban esclavizados en Egipto, Dios le ordenó a su pueblo matar un cordero sin defecto para que el ángel de la muerte enviado a castigar a los egipcios “pasara de largo” sus casas (Éxodo 12:43-51). Pero los cristianos también tienen un cordero que fue sacrificado para que la muerte espiritual pasara de largo sobre ellos: Jesucristo.\n\nJuan el Bautista dijo que Jesús era “el Cordero de Dios, que quita el pecado del mundo” (Juan 1:29), y san Pablo dijo: “Cristo, nuestro Cordero pascual, ha sido sacrificado” (1 Cor. 5:7). El cordero pascual del Antiguo Testamento tenía que ser macho, sin defecto, y no se le podían quebrar las piernas (Éx. 12:5,46). Cristo, nuestro cordero pascual, es varón, sin pecado (Heb. 4:15), y durante la crucifixión no le quebraron las piernas (Juan 19:33). Por último, la Pascua no se completaba hasta que se comía el cordero, así que la “Pascua” que los cristianos todavía celebran debe completarse de la misma manera.\n\nPero según fundamentalistas como Hislop y Chick, la Eucaristía no tiene nada que ver con la comida pascual judía. Por el contrario, es una idea pagana que se infiltró en la Iglesia por influencias satánicas.\n\nBart Brewer, otro difusor de este tipo de fundamentalismo, dice que después de la conversión de Constantino y la legalización del cristianismo en el siglo IV, “[los nuevos conversos] trajeron consigo ritos paganos que introdujeron audazmente en la iglesia con terminología cristiana, corrompiendo así la fe primitiva” (“The Mystery of the Eucharist” en gospelbeacon.org).\n\nPero muchos de los “ritos” que la Iglesia adoptó son costumbres inofensivas, como los estilos de vestiduras o la arquitectura de los templos. Los protestantes hacen lo mismo cuando intercambian anillos de boda, porque esa práctica no aparece en la Escritura, pero sí en fuentes romanas antiguas.\n\nEn su folleto sobre la Eucaristía titulado The Death Cookie, Chick hace afirmaciones aún más asombrosas que Brewer. Sostiene que la Eucaristía se tomó de la práctica egipcia de adorar al dios sol Osiris en forma de “obleas redondas con forma de sol hechas de pan sin levadura”. Incluso afirma que el monograma IHS impreso en la hostia significa “Isis, Horus y Seb, los dioses de Egipto”. Chick no pone notas al pie ni documenta ninguna de estas afirmaciones, y con buenas razones: carecen totalmente de fundamento.\n\nPrimero, Osiris no era el dios sol (ese título correspondía a Ra), así que no se hacían obleas “con forma de sol” en su honor, y los egiptólogos serios no saben nada de que Osiris haya sido transustanciado en una Eucaristía. Segundo, el monograma no tiene nada que ver con la mitología egipcia. I, H y S son las tres primeras letras de la versión griega del nombre de Jesús. Por último, las obleas y tortas ofrecidas en el Antiguo Testamento presumiblemente también eran redondas (Gén. 18:1-8, Éx. 29:1-2), pero ningún protestante diría que tenían origen pagano.\n\nEstas afirmaciones se remontan a Hislop, y son tan escandalosas que incluso algunos de sus defensores “tiraron la toalla” y se dieron cuenta de que su tesis era indefendible.\n\nUno de ellos fue el autor protestante Ralph Woodrow, quien adaptó la investigación de Hislop y la publicó en 1966 en el mucho más legible Babylon Mystery Religion. Varias décadas después, Woodrow se dio cuenta de que la evidencia no respaldaba las afirmaciones de Hislop y, en muchos casos, incluso las contradecía.\n\nEsto llevó a la publicación del libro de Woodrow de 1997 The Babylon Connection?, en el que denunció su libro anterior y reprochó a Hislop varias ficciones históricas flagrantes. Woodrow también vio cómo la “paralelomanía” que había adoptado al comienzo de su carrera podía reutilizarse contra el cristianismo en su conjunto. Escribe:\n\nComo cristianos, no rechazamos la oración solo porque los paganos oran a sus dioses. No rechazamos el bautismo con agua solo porque antiguas tribus se sumergían en agua como ritual religioso. No rechazamos la Biblia solo porque los paganos creen que sus escritos son santos o sagrados. . . Si encontrar un paralelo pagano prueba el paganismo, el propio Señor sería pagano (The Two Babylons).",
                original:
                  "Pasch means “Passover,” and when the Jews were enslaved in Egypt, God told his people to kill a lamb that was without blemish so that the angel of death sent to punish the Egyptians would “pass over” their homes (Exod. 12:43-51). But Christians also have a lamb who was sacrificed so that spiritual death would pass them over: Jesus Christ.\n\nJohn the Baptist said that Jesus was “the lamb of God, who takes away the sin of the world” (John 1:29), and St. Paul said, “Christ, our Paschal Lamb, has been sacrificed” (1 Cor. 5:7). The Passover lamb in the Old Testament had to be a male, without blemish, and his legs could not be broken (Exod. 12:5,46). Christ, our Passover lamb, is male, without sin (Heb. 4:15), and during the crucifixion his legs were not broken (John 19:33). Finally, the Passover was not complete until the lamb was eaten, and so the “Passover” that Christians still celebrate must be completed in the same way.\n\nBut according to fundamentalists such as Hislop and Chick, the Eucharist has nothing to do with the Jewish Passover meal. Instead, it is a pagan idea that infiltrated the Church through satanic influences.\n\nBart Brewer, another purveyor of this kind of fundamentalism, says that after the conversion of Constantine and the legalization of Christianity in the fourth century, “[new converts] brought with them pagan rites which they boldly introduced into the church with Christian terminology, thus corrupting the primitive faith” (“The Mystery of the Eucharist” at gospelbeacon.org).\n\nBut many of the “rites” the Church adopted are harmless customs, such as styles of vestments or temple architecture. Protestants do the same thing when they exchange wedding rings, because this practice is not found in Scripture, but it is found in ancient Roman sources.\n\nIn his tract on the Eucharist called The Death Cookie, Chick makes even more astounding assertions than Brewer. He claims the Eucharist was taken from the Egyptian practice of worshiping the sun god Osiris in the form of “round sun-shaped wafers made of unleavened bread.” He even claims that the monogram IHS imprinted on the host stands for “Isis, Horus, and Seb, the gods of Egypt.” Chick doesn’t footnote or document any of these claims, and for good reason—they are utterly without merit.\n\nFirst, Osiris was not the sun god (that title belonged to Ra), and so there were no “sun-shaped” wafers made in his honor, and reputable Egyptologists know nothing of Osiris being transubstantiated into a Eucharist. Second, the monogram has nothing to do with Egyptian mythology. I, H, and S are the first three letters in the Greek version of Jesus’ name. Finally, wafers and cakes offered in the Old Testament were presumably also round (Gen. 18:1-8, Exod. 29:1-2), but no Protestant would say they were pagan in origin.\n\nThese claims can be traced back to Hislop, and they are so outrageous that even some of Hislop’s defenders “threw in the towel” and realized his thesis was indefensible.\n\nOne of these was Protestant author Ralph Woodrow, who adapted Hislop’s research and published it in 1966 in the much more readable Babylon Mystery Religion. Several decades later, Woodrow realized that the evidence did not support Hislop’s claims and, in many cases, even contradicted them.\n\nThis led to the publication of Woodrow’s 1997 book The Babylon Connection? where he denounced his previous book and took Hislop to task for several egregious historical fictions. Woodrow also saw how the “parallelomania” he embraced earlier in his career could be repurposed to be used against Christianity as a whole. He writes:\n\nAs Christians, we don’t reject prayer just because pagans pray to their gods. We don’t reject water baptism just because ancient tribes plunged into water as a religious ritual. We don’t reject the Bible just because pagans believe their writings are holy or sacred. . . If finding a pagan parallel provides proof of paganism, the Lord himself would be pagan (The Two Babylons).",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "Do Protestants Really Worship God?",
                outlet: "Shameless Popery",
                date: "29 de junio de 2023",
                locator:
                  "5 párrafos: del párrafo que empieza «So God’s promising that there will come a day…» al que termina «…your brother and then come and offer your gift.”»",
                url: "https://www.catholic.com/audio/sp/do-protestant-really-worship-god",
                text: "Así que Dios promete que llegará un día en que las naciones, los gentiles —es decir, las personas que no son solo del linaje étnico y religioso de Israel— le ofrecerán culto verdadero. Y los primeros cristianos se apresuraban a destacar este tipo de pasajes, pero volveremos sobre eso, porque la otra forma es explícitamente la Eucaristía. En 1 Corintios 10, san Pablo dice: “La copa de bendición que bendecimos, ¿no es una participación en la sangre de Cristo? El pan que partimos, ¿no es una participación en el cuerpo de Cristo?” Ahora bien, ¿cómo puede ser que lo que parece pan y lo que parece vino sean en realidad una participación en el cuerpo y la sangre de Jesucristo? Él lo va a explicar, pero antes va a decir otra cosa impactante: que, porque hay un solo pan, “Nosotros, aunque somos muchos, somos un solo cuerpo, porque todos participamos de un solo pan.”\n\nAhora, recordemos que san Pablo no está en Corinto cuando escribe; no está diciendo literalmente que hay un pan del que todos los cristianos reciben y que eso nos hace un solo cuerpo. ¿Cuál es el pan único? El pan único es Jesús. El único pan es el propio Jesucristo. Y al recibir a Jesús en la Eucaristía, nos hacemos realmente un solo pueblo como cristianos. Pablo va a defender este tipo de afirmación tan provocativa, una afirmación que hoy muchas personas negarían, y lo hace de una manera realmente impactante.\n\nPrimero, va a comparar esto con la práctica sacrificial de Israel. Dice: “Consideren la práctica de Israel: ¿no son partícipes del altar los que comen de los sacrificios?” Y si eso no fuera lo bastante impactante, bueno, tienen a Israel… Una forma de entender la Eucaristía es recordar que en Israel había sacrificios de comida, y uno se unía a los sacrificios al comerlos. Entonces está el cordero pascual: el día de la preparación, uno mata el cordero en el templo de Jerusalén. Eso no alcanza: uno se hace partícipe del sacrificio comiendo el cordero. Eso es la Pascua. Esto prefigura las dos acciones: el día de la preparación, el Viernes Santo, Jesús, el Cordero de Dios, es muerto. Luego, en la última cena, y en cada misa desde entonces, comemos el cordero. “Cristo, nuestro cordero pascual, ha sido sacrificado”, dice san Pablo en 1 Corintios 15.\n\nVa a seguir con este tema durante varios capítulos: que comemos el cordero pascual. No basta con sacrificar el cordero; para hacerse partícipe del sacrificio, hay que comer el cordero. En ese caso, uno untaba la sangre en la jamba de la puerta y después comía el cordero. Bueno, de acuerdo. Va a hacerlo más impactante. Luego lo compara con sacrificios paganos y demoníacos. Y dice, implicando: “Lo que los paganos ofrecen en sacrificio, lo ofrecen a demonios y no a Dios. No quiero que ustedes tengan comunión con los demonios. No pueden beber la copa del Señor y la copa de los demonios. No pueden participar de la mesa del Señor y de la mesa de los demonios.” Ahora bien, ¿qué está pasando aquí? El lenguaje es de sacrificio, bastante explícitamente, ¿no? Está hablando de los sacrificios que hacen los paganos a los demonios. La mesa de los demonios es un altar. La copa es la copa sacrificial.\n\nAhora bien, si eso es cierto, y Pablo está haciendo una comparación, un paralelo, esto solo funciona si la mesa del Señor es un altar. Solo funciona si la copa del Señor es una copa sacrificial. Así que toda la analogía de Pablo entre lo que hacen los paganos, lo que hacen los judíos y lo que hacen los cristianos depende de eso. Si la Eucaristía solo funciona —si la forma en que ofrecemos el culto comunitario cristiano es la Eucaristía—, eso es lo que está pasando aquí. Y así es como los primeros cristianos entendían esto. Mateo 5, versículos 23 y 24. Jesús dice algo que encaja muy bien con esto, ¿no? Es durante el Sermón de la Montaña. Dice: “Si estás presentando tu ofrenda sobre el altar y allí te acuerdas de que tu hermano tiene algo contra ti, deja tu ofrenda allí delante del altar y ve. Primero reconcíliate con tu hermano, y luego ven y presenta tu ofrenda.”",
                original:
                  "So God’s promising that there will come a day when the nations, the Gentiles, the people who aren’t just of the ethnic and religious stock of Israel, will be offering true worship to Him. And the early Christians were quick to highlight these kind of passages, but we’ll get into that because the other way is explicitly the Eucharist. First Corinthians 10, St. Paul says, “The cup of blessing, which we bless, is it not a participation in the blood of Christ? The bread which we break, is it not a participation in the body of Christ?” Now, how could it be that what appears to be bread and what appears to be wine could actually be a participation in Jesus Christ’s body and blood? He’s going to explain that Before he does that, he’s going to say another shocking thing that because there’s one loaf, “We who are many are one body, for we all partake of the one loaf.”\n\nNow, remember, St. Paul’s not in Corinth when he is writing, he’s not saying literally that there’s a loaf of bread that all Christians receive from and it makes us one body. What’s the one loaf? The one loaf is Jesus. The one bread is Jesus Christ Himself. And that when receiving Jesus in the Eucharist, we actually become one people as Christians and he’s going to defend this very provocative kind of claim, this claim that many people today would deny and he is going to defend it in a really shocking way.\n\nFirst, he’s going to compare it to the sacrificial practice of Israel. He said, “Consider the practice of Israel, are not those who eat the sacrifices partners in the altar?” And then if that wasn’t shocking enough, okay, you’ve got Israel … Okay, one way to understand the Eucharist is to remember in Israel you’ve got food sacrifices and then you’d be united with the sacrifices by eating them. So you’ve got the Passover lamb. Passover lamb, preparation day, you kill the lamb in the temple in Jerusalem. That’s not enough. You then become a partner in the sacrifice by eating the lamb. That’s Passover. This prefigures the two actions, preparation day, Good Friday, Jesus, the Lamb of God, is killed. Then at the last supper, in every mass since, we eat the lamb. “Christ, our paschal lamb has been sacrificed.”, St. Paul says in First Corinthians 15.\n\nHe’s going to continue this theme for several chapters that we eat the Passover lamb. It’s not enough to sacrifice the lamb, to become a partner in the sacrifice, you must then eat the lamb. You smeared the blood on the doorpost in that case, and then you ate the lamb. Okay, fair enough. He’s going to make it more shocking. He’s then going to compare it to pagan, demonic sacrifices. And he says, imply, “With pagan sacrifice, they offer to demons and not to God. I do not want you to be partners with demons. You cannot drink the cup of the Lord and the cup of demons. You cannot partake of the table of the Lord and the table of demons.” Now, what is going on here? The language there is sacrificial language, quite explicitly, right? He’s talking about the sacrifices pagans make to demons. The table of demons is an altar. The cup is the sacrificial cup.\n\nNow, if that’s true, and Paul is making like a comparison, a parallel, this only works if the table of the Lord is an altar. It only works if the cup of the Lord is a sacrificial cup. So Paul’s entire analogy here between what the pagans are doing, what the Jews are doing, and what the Christians are doing. If the Eucharist only works, if the way we offer corporate communal Christian worship is the Eucharist, that’s what’s going on here. And this is how the early Christians understood this. Matthew five, verse 23, 24. Jesus says something that really ties in well to this right. It’s during the sermon on the mount. He says, “If you are offering your gift at the altar and there, remember your brother has something against you, leave your gift there before the altar and go. First be reconciled to your brother and then come and offer your gift.”",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Heb.1.6", "Ps.97.7", "Matt.2.11", "Matt.28.17"],
      text: "Al mismo Dios presente en el sacramento lo adoraron los ángeles, los magos y los apóstoles en Galilea: por eso se le da culto de adoración {c:T13c5|Trento, ses. XIII, cap. 5}.",
      apologists: {
        arguments: [
          {
            title:
              "Heschmeyer sostiene que los usos bíblicos del lenguaje de adoración deben leerse en contexto, y que Cristo acepta una adoración que Pedro y el ángel rechazan",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Why Mormons Don’t Worship Jesus…",
                outlet: "Catholic Answers",
                date: "29 de julio de 2025",
                locator: "Minutos 7:53 a 10:38",
                url: "https://www.catholic.com/audio/sp/why-mormons-dont-worship-jesus",
                text: "Bien. Entonces, si estas dos cosas son correctas, si realmente existe una clase de oración y adoración dirigida específicamente a Dios el Padre, y no podemos pasar del uso de un verbo como pro sceo a concluir automáticamente que todos los que se postran ante Cristo lo están adorando realmente, entonces, ¿tienen razón los mormones? ¿Deberíamos dejar de adorar a Cristo? ¿Deberíamos dejar de orarle? No. Así que pongamos algunas piezas bíblicas del rompecabezas juntas. Primero, muchas veces pro sceo sí significa adorar en el sentido de ofrecer honor divino. Por ejemplo, san Juan va a adorar al ángel en Apocalipsis 22, y se le dice que no haga esto, sino que adore solo a Dios. De manera similar, Cornelio intenta adorar a san Pedro, pero Pedro lo detiene. En ambos casos, la palabra para adorar que se usa ahí es ProScan. Ahora, de manera similar, este es el tipo de adoración que el diablo exige de Jesús cuando lo tienta en el desierto, ¿sí? Aunque ProScan no siempre significa adoración, a menudo aparentemente, típicamente sí lo hace en la Biblia, y la gente se postra ProScan ante Jesús bastante. En la Biblia, por ejemplo, los Mangi le dicen a Herodes que han venido a Judea para adorar al rey recién nacido, lo cual hacen al encontrarlo en el pesebre, y a lo largo de su ministerio, diversas personas se acercan y ofrecen adoración de esta manera a Jesús: desde Jairo hasta la madre de los hijos de Zebedeo, hasta la guarnición democ, hasta el hombre ciego de nacimiento. De hecho, esta es la misma palabra que usa Hebreos 1 para describir cómo incluso los ángeles en el cielo adoran a Cristo, y es la misma palabra que se usa para describir a las mujeres que adoran a Cristo en la mañana de Pascua, o a los apóstoles que lo adoran después de que asciende al cielo. Pero, bueno, aquí está lo llamativo. A diferencia del ángel en Apocalipsis, y a diferencia de san Pedro, Jesús nunca rechaza estos actos de adoración. Así que realmente solo veo tres maneras de explicar esta evidencia. Número uno: decir que nadie en la Biblia realmente quiso adorar a Jesús. Eso parece claramente inverosímil. Incluso si concedemos que no toda instancia de pro sceo hacia Cristo es automáticamente un acto de adoración divina, es un completo despropósito decir que ninguna lo es. No tiene mucho sentido que la gente intentara adorar a Pedro y no intentara adorar al Jesús glorificado. Segunda opción: la gente adora a Jesús en la Biblia, pero no debería haberlo hecho. Bueno, si esa visión es correcta, entonces Jesús debería haber reprendido a sus adoradores como lo hicieron Pedro y el ángel, pero no lo hace. Eso nos deja con una tercera opción: la gente adora a Jesús correctamente. Eso me parece la conclusión bíblica obvia a partir de la evidencia, y explica por qué los primeros cristianos adoraban muy claramente a Jesucristo. Así que la gente ha adorado a Cristo desde el tiempo del Nuevo Testamento en adelante, porque esta es la respuesta apropiada a Jesús: le damos el honor divino que él merece.",
                original:
                  "Okay. So if these two things are correct, if there really is a kind of prayer and worship directed to God the father specifically, and we can’t jump from the usage of a verb like pro sceo to automatically conclude that everybody bowing down to Christ is actually worshiping him, then are the Mormons rights? Should we stop worshiping Christ? Should we stop praying to him? No. So let’s put a few biblical pieces of the puzzle together. First, many times pro sceo does mean worship in the sense of offering divine honor. For instance, St. John goes to worship the angel in Revelation 22, and he’s told not to do this, but to worship God alone. Similarly, Cornelius tries to worship St. Peter, but Peter stops him. In both instances, the word for worship used there is ProScan. Now, similarly, this is the kind of worship that the devil demands from Jesus when he is trying to tempt him in the desert, okay? Even though ProScan doesn’t always mean worship, it often seemingly typically does in the Bible, and people prostrate themselves ProScan before Jesus quite a lot. In the Bible, for instance, the Mangi tell Herod that they’ve come to Judea to worship the newborn king, which they do upon finding him in the manger and throughout his ministry, various people come up and offer worship in this way to Jesus from Jairus to the mother of the sons of Zebedee, to the garrison democ to the man blind from birth. In fact, this is the same word used in Hebrews one to describe how even the angels in heaven worship Christ, and it’s the same word used to describe the women worshiping Christ on Easter morning, or the apostles worshiping him after he ascends into heaven. But okay, here’s the striking thing. Unlike the angel in Revelation, and unlike St. Peter, Jesus never refuses these acts of worship. So there’s really only three ways I see of explaining this evidence. Number one saying that nobody in the Bible really meant to worship Jesus. That seems clearly implausible. Even if we grant that not every instance of pro sceo towards Christ is automatically an act of divine worship, it’s a total stretch to say that none of those are acts of divine worship. It doesn’t really make sense that people would try to worship Peter and not try to worship the glorified Jesus Second option, people worship Jesus in the Bible, but they shouldn’t have. Well, if that view is right, then Jesus should have been rebuking his worshipers the way that Peter and the angel did, but he doesn’t. That leaves us with a third option. People worship Jesus rightly. That seems to me to be the obvious biblical conclusion from the evidence, and it explains why the early Christians very clearly worship Jesus Christ. So people have worshiped Christ from the time of the New Testament forwards because this is the appropriate response to Jesus we’re to give him the divine honor that he is worth.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.4.1", "1Cor.11.34"],
      text: "Pablo pide que se tenga a los apóstoles por «dispensadores de los misterios de Dios» {v:1Cor.4.1}; para Trento, por eso la Iglesia puede regular cómo se dan los sacramentos, sin tocar su sustancia {c:T21c2|ses. XXI, cap. 2}.",
      apologists: {
        arguments: [
          {
            title:
              "Pablo dice que dará más instrucciones (1 Corintios 11:34): no todo lo que enseñó sobre la Eucaristía está escrito",
            quotes: [
              {
                speaker: "Karlo Broussard",
                work: "Tradition and Scripture: Meeting the “Identity” Challenge",
                outlet: "Dr. Karlo",
                date: "8 de julio de 2026",
                locator:
                  "23 párrafos: del párrafo que empieza «My second response: If the oral traditions are identical…» al que termina «…said or that we need everything that Jesus said.»",
                url: "https://www.catholic.com/audio/drk/tradition-and-scripture-meeting-the-identity-challenge",
                text: "Mi segunda respuesta: si las tradiciones orales son idénticas a la palabra escrita, entonces el mandato de Pablo en 2 Tesalonicenses 2:15 resulta redundante. ¿Por qué mandar a los creyentes aferrarse a tradiciones orales si todo lo que contienen ya está en sus escritos? Podría haber dicho simplemente: “Aténganse a las epístolas escritas.” La distinción misma sugiere con fuerza que hay contenido en las tradiciones orales que no está en sus escritos.\n\nPor último, la afirmación de identidad es falsa en los hechos. El Nuevo Testamento mismo nos da ejemplos de enseñanzas apostólicas —verdades reveladas por Dios— que no están contenidas en los escritos apostólicos inspirados.\n\nVeamos algunos.\n\nEn Marcos 13:14, Jesús habla de la “abominación desoladora puesta donde no debe estar”, y Marcos inserta: “El que lee, entienda.” Eso implica que el lector sabe de qué habla Jesús. Sin embargo, en ninguna parte del Nuevo Testamento encontramos una explicación de lo que Jesús está diciendo.\n\nEn 2 Tesalonicenses 2:3–6, Pablo habla del “hombre de iniquidad” y dice: “Ustedes saben qué es lo que lo detiene ahora.” Pero nunca nos dice quién es el que lo detiene. Les recuerda que se lo enseñó cuando estaba con ellos, pero no lo deja escrito.\n\nEn 1 Corintios 5:9, Pablo menciona una carta anterior a los corintios, que no poseemos. En Colosenses 4:16 se refiere a una carta a los laodicenses. Si eso es Efesios o una carta perdida, el punto se mantiene: hubo escritos apostólicos que ya no tenemos.\n\nSi lo que escribió Pablo fue inspirado —y la mayoría de los cristianos está de acuerdo en que lo fue—, entonces hubo verdades reveladas por Dios que no están contenidas en el canon del Nuevo Testamento.\n\nEn 1 Corintios 15:29, Pablo menciona “bautismos por los muertos”. No explica qué significa. Tampoco dice si lo que hacen es bueno o malo. Cualquiera haya sido su enseñanza completa sobre esa práctica, no se conserva totalmente en la Escritura.\n\nEn 1 Corintios 11:34, después de dar instrucciones sobre la Eucaristía, Pablo dice: “Cuando vaya, daré otras disposiciones.” Esto viene justo después de que Pablo advirtió en los versículos 27-30 sobre recibir la Eucaristía de manera indigna y sin discernir el cuerpo del Señor.\n\nEsas otras disposiciones, por lo tanto, habrían tratado sobre la Eucaristía, seguramente un asunto de revelación divina tanto como lo que enseñó en los versículos anteriores. Sin embargo, no quedaron registradas.\n\n¿Ven el patrón?\n\nJuan hace algo parecido. En Juan 21:25 dice que Jesús hizo muchas otras cosas que no fueron escritas. En 2 Juan 12 y 3 Juan 13–14 dice que tiene mucho más que escribir, pero prefiere hablar cara a cara. Seguramente esa instrucción cara a cara incluía enseñanza apostólica.\n\nPor último, los propios protestantes creen ciertas verdades sobre la revelación divina que no se encuentran en el Nuevo Testamento. Voy a mencionar solo tres por brevedad. Pienso hacer un episodio completo sobre esto más adelante. Las tres son:\n\nJesús no volverá a aparecer para designar nuevos apóstoles.\n\nLa revelación pública cesó con la muerte del último apóstol.\n\nNo habrá nuevas Escrituras inspiradas.\n\nEstas son verdades teológicas que los protestantes sostienen como vinculantes para la fe cristiana, pero que no se enuncian en el Nuevo Testamento.\n\nY si alguien apela a Judas 3, donde dice: “la fe [ha sido] una vez para siempre entregada a los santos”, eso no funciona. Porque tendría que rechazar la epístola de Judas misma, o al menos todos los versículos posteriores al versículo 3, ya que toda la doctrina cristiana ya habría sido entregada completa cuando se escribieron. Pero ningún cristiano quiere hacer eso.\n\nAsí que la afirmación de identidad —que las enseñanzas orales apostólicas son lo mismo que la Escritura escrita— simplemente no se sostiene bíblicamente.\n\nAhora bien, algunos protestantes, como James White en su debate de 2024 con Alex Jurado, responden que estos pasajes no sirven como refutación, porque la Sola Scriptura no exige que la Escritura contenga todo lo que Dios alguna vez reveló. Solo exige que la Escritura contenga todo lo que Dios quiere que crean las generaciones futuras.\n\nAsí lo expresó White en su debate con Alex:\n\n[VIDEO]\n\n[L]os apóstoles no abordan 46:07 todos los temas, ni necesitaban hacerlo, ni el Señor Jesucristo tenía que abordar todos los temas en todo lo que 46:14 dijo. Dios nos va a dar lo que quiere que tengamos. El Nuevo Testamento no nos da un relato exhaustivo de 46:20 cada palabra que Jesús dijo. Eso no es un argumento contra la solo scriptura, porque la sola Scriptura no sostiene 46:25 que tengamos todo lo que Jesús dijo, ni que necesitemos todo lo que Jesús dijo.",
                original:
                  "My second response: If the oral traditions are identical to the written word, then Paul’s command in 2 Thessalonians 2:15 becomes redundant. Why command believers to hold fast to oral traditions if everything in them is already in their writings? He could have just said, “Stick to the written epistles.” The distinction itself strongly suggests there’s content within the oral traditions that aren’t in their writings.\n\nFinally, the identity claim is factually false. The New Testament itself gives us examples of apostolic teachings—divinely revealed truths—that are not contained in the inspired apostolic writings.\n\nLet’s look at a few.\n\nIn Mark 13:14, Jesus speaks of the “desolating sacrilege set up where it ought not to be” and Mark inserts, “Let the reader understand.” That implies the reader knows what Jesus is talking about. Yet nowhere in the New Testament do we get an explanation of what Jesus is talking about.\n\nIn 2 Thessalonians 2:3–6, Paul talks about the “man of lawlessness” and says, “You know what is restraining him now.” But he never tells us what the restrainer is. He reminds them that he taught them this when he was with them—but he doesn’t record it.\n\nIn 1 Corinthians 5:9, Paul mentions a previous letter to the Corinthians—one we don’t possess. In Colossians 4:16, he refers to a letter to the Laodiceans. Whether that’s Ephesians or a lost letter, the point stands: there were apostolic writings we no longer have.\n\nIf what Paul wrote was inspired—and most Christians agree it was—then there were divinely revealed truths not contained in the New Testament canon.\n\nIn 1 Corinthians 15:29, Paul references “baptisms for the dead.” He doesn’t explain what that means. Nor does he say if what they’re doing is good or bad. Whatever his full teaching on that practice was, it isn’t fully preserved in Scripture.\n\nIn 1 Corinthians 11:34, after giving instructions about the Eucharist, Paul says, “When I come I will give further directions.” This comes right after Paul gave warnings in verses 27-30 about receiving the Eucharist in an unworthy manner and without discerning the Lord’s body.\n\nThose further directions, therefore, would have concerned the Eucharist—surely a matter of divine revelation just as much as what he taught in the previous verses. Yet they’re not recorded.\n\nSee the pattern?\n\nJohn does something similar. In John 21:25, he says that Jesus did many other things that were not written. In 2 John 12 and 3 John 13–14, he says he has much more to write but prefers to speak face to face. Surely that face-to-face instruction included apostolic teaching.\n\nFinally, Protestants themselves believe certain truths about divine revelation that aren’t found in the New Testament. I’ll just list three here for brevity’s sake. I plan to do a full episode on this in a future episode. So the three are:\n\nJesus will not appear again to appoint new apostles.\n\nPublic revelation ceased with the death of the last apostle.\n\nThere will be no new inspired Scriptures.\n\nThese are theological truths held by Protestants to be binding for Christian belief yet they’re not stated in the New Testament.\n\nAnd if someone appeals to Jude 3, where he says, “the Faith [has been] once for all delivered to the saints,” that’s not gonna work. Because he would have to reject the epistle of Jude itself, or at least all the verses that come after verse 3, since all Christian doctrine would have already been delivered complete by the time they were written. But no Christian wants to do that.\n\nSo the identity claim—that oral apostolic teachings are the same as written Scripture—simply doesn’t hold up biblically.\n\nNow, some Protestants—like James White in his 2024 debate with Alex Jurado—respond by saying that these passages are futile as defeaters because Sola Scriptura doesn’t require Scripture to contain everything God ever revealed. It only requires that Scripture contain everything God intends future generations to believe.\n\nHere’s how White put it in his debate with Alex:\n\n[VIDEO]\n\n[T]he apostles do 46:07 not address all topics nor did they need to nor did the Lord Jesus Christ have to address all topics in everything that he 46:14 said God is going to give us what he wants us to have the New Testament does not give us an exhaustive account of 46:20 every word Jesus ever said that is not an argument against solo scriptura because sola scriptura is not claiming 46:25 that we have everything that that Jesus said or that we need everything that Jesus said.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "«Administradores de los misterios» describe el ministerio sacramental público de un sacerdote",
            quotes: [
              {
                speaker: "Taylor Marshall",
                work: "The Double Standard Regarding Roman Priests and Roman Polanski",
                outlet: "taylormarshall.com",
                date: "4 de octubre de 2009",
                locator: "Párrafos que empiezan «Priests should be held»",
                url: "https://taylormarshall.com/2009/10/double-standard-regarding-roman-priests.html",
                text: "Los sacerdotes deben ser sujetos a una norma más alta que los demás. Los llamamos con el título más íntimo del mundo: “Padre”. Están presentes en todos los acontecimientos más importantes de nuestra vida: nacimiento, adolescencia, matrimonio, enfermedad y muerte. Los sacerdotes católicos están llamados a santificar a los fieles mediante la Palabra y los Sacramentos, y por eso con razón esperamos que vivan vidas santas. Los sacerdotes son célibes para mostrar su compromiso sacrificial con la Iglesia. Se han ofrecido voluntariamente a vivir vidas públicas como “administradores de los misterios” (1 Cor 4:1). San Pablo hizo literalmente todo lo que podía hacer “para que todos los hombres se salven” (1 Cor 10:33).",
                original:
                  "Priests should be held to a higher standard than everyone else. We call these men by the most intimate title in the world: “Father.” They are present for all the most important events of our lives: birth, adolescence, marriage, sickness, and death. Catholic priests are called to sanctify the faithful through Word and Sacrament and thus we rightly expect for them to live holy lives. Priests are celibate to show their sacrificial commitment to the Church. They have volunteered to live public lives as “stewards of the mysteries” (1 Cor 4:1). Saint Paul did literally everything he could do “that all men might be saved” (1 Cor 10:33).",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.2.42", "Acts.2.46", "Acts.20.7"],
      text: "Desde el principio los cristianos perseveraban «en el partimiento del pan» {v:Acts.2.42} y se reunían «á partir el pan» «el día primero de la semana» {v:Acts.20.7} {c:CEC1342|Catecismo 1342–1343}.",
      apologists: {
        arguments: [
          {
            title:
              "«La fracción del pan» es la liturgia cristiana; la Didaché manda partir el pan y ofrecer la Eucaristía el día del Señor (Horn, Heschmeyer)",
            quotes: [
              {
                speaker: "Trent Horn",
                work: "What You Need to Know About the Reality of the Church and Ecumenism",
                outlet: "Catholic Answers Magazine",
                date: "28 de marzo de 2017",
                locator:
                  "7 párrafos: del párrafo que empieza «There are very early accounts of this hierarchy in…» al que termina «…great amen that are still said at Mass today.»",
                url: "https://www.catholic.com/magazine/online-edition/what-you-need-to-know-about-the-reality-of-the-church-and-ecumenism",
                text: "Hay relatos muy tempranos de esta jerarquía en los textos de los primeros autores cristianos. En el año 110 d. C., san Ignacio de Antioquía les dijo a sus lectores: Seguid al obispo como Jesucristo sigue al Padre, y al presbiterio como a los apóstoles; y respetad a los diáconos como institución de Dios. Que nadie haga nada relacionado con la Iglesia sin el obispo (Letter to the Smyrnaeans).\n\nA finales del siglo I, el cuarto papa, Clemente I, recordó a los cristianos de la ciudad de Corinto la sucesión apostólica, diciendo:\n\nNuestros apóstoles sabían, por medio de nuestro Señor Jesucristo, que habría disputas por el cargo de obispo. Por eso, habiendo recibido un conocimiento perfecto, designaron a los ya mencionados y luego añadieron la disposición de que, si morían, otros hombres aprobados los sucedieran en su ministerio (Letter to the Corinthians, 44:1–3).\n\nTanto el Nuevo Testamento como los registros de la Iglesia primitiva muestran que esta sucesión de autoridad permitió a la Iglesia conservar las enseñanzas originales de los apóstoles. Por ejemplo, el libro de los Hechos describe cómo los miembros de la Iglesia “perseveraban en la enseñanza de los apóstoles y en la comunión, en la fracción del pan y en las oraciones” (Hechos 2:42). El Didache, un catecismo del siglo I, exhorta a los cristianos a: “Reúnanse el día del Señor, partan el pan y ofrezcan la Eucaristía; pero antes confiesen sus faltas, para que su sacrificio sea puro” (Didache, 14).\n\nEn el siglo II, san Justino Mártir escribió sobre la Misa y sobre cómo los reunidos “ofrecen oraciones fervorosas en común por nosotros mismos, por la persona bautizada [iluminada] y por todos los demás en todo lugar”, y que después “se saludan con un beso”. Luego, el que preside toma el pan y el vino y hace lo siguiente:\n\n[Él] da alabanza y gloria al Padre del universo, por el nombre del Hijo y del Espíritu Santo, y da gracias extensamente por habernos considerado dignos de recibir estas cosas de sus manos. Y cuando ha concluido las oraciones y las acciones de gracias, todo el pueblo presente expresa su asentimiento diciendo Amén (First Apology, 65).\n\nLa descripción de Justino se corresponde con las oraciones de los fieles, el beso de la paz, la oración de acción de gracias y el gran Amén que todavía se dicen en la Misa de hoy.",
                original:
                  "There are very early accounts of this hierarchy in the texts of early Christian authors. In A.D. 110, St. Ignatius of Antioch told his readers: Follow the bishop, even as Jesus Christ does the Father, and the presbytery as you would the apostles; and reverence the deacons, as being the institution of God. Let no man do anything connected with the Church without the bishop (Letter to the Smyrnaeans).\n\nAt the end of the first century, the fourth pope, Clement I, reminded the Christians in the city of Corinth about apostolic succession, saying:\n\nOur apostles knew through our Lord Jesus Christ that there would be strife for the office of bishop. For this reason, therefore, having received perfect foreknowledge, they appointed those who have already been mentioned and afterwards added the further provision that, if they should die, other approved men should succeed to their ministry (Letter to the Corinthians, 44:1–3).\n\nBoth the New Testament and the records of the early Church show that this succession of authority has enabled the Church to preserve the apostles’ original teachings. For example, the book of Acts describes how the members of the Church “held steadfastly to the apostles’ teaching and fellowship, to the breaking of the bread and to the prayers” (Acts 2:42). The Didache, a first-century catechism, exhorts Christians to “Assemble on the Lord’s day, and break bread and offer the Eucharist; but first make confession of your faults, so that your sacrifice may be a pure one” (Didache, 14).\n\nIn the second century, St. Justin Martyr wrote about the Mass and how the assembled “offer hearty prayers in common for ourselves and for the baptized [illuminated] person, and for all others in every place,” and after that, they “salute one another with a kiss.” The presider then takes bread and wine and does the following:\n\n[He] gives praise and glory to the Father of the universe, through the name of the Son and of the Holy Ghost, and offers thanks at considerable length for our being counted worthy to receive these things at his hands. And when he has concluded the prayers and thanksgivings, all the people present express their assent by saying Amen (First Apology, 65).\n\nJustin’s description corresponds to the prayers of the faithful, the kiss of peace, the prayer of thanksgiving, and the great amen that are still said at Mass today.",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "Are Seventh-Day Adventists Right about Sunday Worship?",
                outlet: "Shameless Popery",
                date: "5 de octubre de 2023",
                locator:
                  "4 párrafos: del párrafo que empieza «That’s evidence this isn’t some post apostolic invention. That…» al que termina «…the practice of the apostles and the early Christians.»",
                url: "https://www.catholic.com/audio/sp/are-seventh-day-adventists-right-about-sunday-worship",
                text: "Esa es evidencia de que esto no es una invención posapostólica. Que el día del Señor no es que abandonemos la enseñanza de los apóstoles y empecemos con nuestra propia cosa. No. Porque hasta este punto, podrías escuchar a todos esos hombres y decir: “Bueno, claro. Ellen Gould White no sabe de qué habla. Quizá sea una falsa profetisa, pero ¿cómo sabemos que el culto cristiano debe ser el domingo y no el sábado?” Y la respuesta es: “Bueno, porque esta idea del día del Señor como centro del culto.” Esa cosa del día del Señor no es algo que inventaron después de los apóstoles. El apóstol Juan se refiere al día del Señor. Lo trata como un dato dado en Apocalipsis, capítulo uno. Y también tenemos estas otras referencias que no usan la frase día del Señor, sino que se refieren a reuniones cristianas el primer día de la semana. Es decir, el domingo.\n\nAsí, por ejemplo, en Uno Corintios 16, san Pablo convoca a una reunión, una colecta. Dice: “El primer día de cada semana, cada uno de ustedes ponga algo aparte y lo guarde según le vaya prosperando, para que no se hagan colectas cuando yo llegue.” Entonces, la colecta para los pobres ocurre el primer día de la semana. Ahora bien, sabemos por Justino Mártir que estas colectas se hacían durante el culto cristiano, es decir, durante la liturgia, de la misma manera que hoy se pasa la canasta del diezmo. Ahora bien, he visto a adventistas intentar explicar esto diciendo: “Todo lo que esto prueba es que la colecta se hacía el domingo. No prueba que el culto se hacía el domingo.” Eso es técnicamente cierto, pero es un argumento débil imaginar que Pablo sabía que ya se reunían el sábado, que la colecta no estaba reunida ese día, y que en cambio insistió por alguna razón en que la colecta se hiciera cada domingo.\n\nEso no tiene sentido. Eso es recaudación básica. No se hace la colecta en un día en que la gente no va a estar en la iglesia. No se pasa la canasta del diezmo cada lunes, por ejemplo. ¿Por qué? Porque no se va a recaudar mucho. Se pasa cuando todos están juntos, cuando la congregación está reunida. Así que es cierto que es evidencia indirecta, pero creo que es una evidencia indirecta bastante clara. Un poco más clara de que el culto cristiano estaba ocurriendo está en Hechos 20, versículo 7, que dice: “El primer día de la semana, reunidos los discípulos para partir el pan, Pablo les hablaba, pensando salir al día siguiente, y alargó el discurso hasta la medianoche.” Ahora bien, eso es importante porque sabemos por Hechos, por ejemplo Hechos 2:42, que el partimiento del pan es la forma en que san Lucas se refiere a la liturgia cristiana. Y recuerden también la Didaché. Cuando habla de reunirse, dice: “Cada día del Señor reúnanse y partan el pan.”\n\nTodo eso parece apuntar a un conjunto de evidencias bastante coherente y cohesionado, que apunta todo en la misma dirección. Que los cristianos primitivos no se consideraban obligados a guardar el sábado, sino que se consideraban obligados a observar el día del Señor, porque Cristo era el cumplimiento de todas estas cosas. Y de hecho, Justino Mártir dice, en realidad no lo tengo frente a mí, pero dice: “Si no entendiéramos por qué vino Cristo, también guardaríamos el sábado.” Es una frase bastante contundente, porque está diciendo que Jesús es el cumplimiento de todas estas cosas. Y conviene tenerlo presente, porque el riesgo aquí es caer en una especie de legalismo, pensando que seguimos obligados por la ley mosaica. Y lo entiendo, porque en los Diez Mandamientos, la gente espera que tengamos que cumplirlos literalmente. Eso es una mala lectura de los Diez Mandamientos, y lo sabemos en parte por la práctica de los apóstoles y de los cristianos primitivos.",
                original:
                  "That’s evidence this isn’t some post apostolic invention. That the Lord’s day is not we abandon the teaching of the apostles and started our own thing. No. Because up to this point, you could listen to all those guys and say, “Okay, sure. Ellen Gould White doesn’t know what she’s talking about. Maybe she’s a false prophet, but how do we know that Christian worship should be on Sunday instead of Saturday?” And it’s like, “Well because this idea of the Lord’s Day being the center of worship.” That Lord’s Day thing isn’t something they’re making up after the apostles. The Apostle John refers to the Lord’s Day. He treats it as a given in Revelation chapter one. And we also have these other references that don’t use the phrase Lord’s Day, but refer to Christian gatherings on the first day of the week. That is Sunday.\n\nSo for instance, in one Corinthians 16, St. Paul calls for a gathering, a collection. He says, “On the first day of every week, each of you is to put something aside and store it up as you may prosper so that contributions need not be made when I come.” So the collection for the poor happens on the first day of the week. Now we know from Justin Martyr that these collections happened during the Christian worship, that it happened during the liturgy in the same way that you pass around the tithe collection today. Now I’ve seen Adventist try to explain this away and say, “All this proves is that the collection happened on Sunday. It doesn’t prove the worship happened on Sunday.” That’s technically true, but it’s a weak argument to imagine that Paul knew they were getting together on Saturday already, didn’t have the collection gathered then, and instead insisted for some reason the collection happen every Sunday.\n\nThat doesn’t make sense. That’s fundraising 101. You don’t hold your fundraiser on a day people aren’t going to be at church. You don’t pass the tithe basket around every Monday for instance. Why? Because you’re not going to get very much money. You pass it around when everybody’s together when the congregation is gathered. So it’s true that is indirect evidence, but I think it’s pretty clear indirect evidence. A little clearer that Christian worship is happening is in Acts 20 verse seven, which says, “On the first day of the week when we were gathered together to break bread, Paul talked with them intending to depart on the morrow and he prolonged his speech until midnight.” Now that’s important because we know from Acts, for instance Acts 2:42, that the breaking of the bread is how St. Luke speaks of the Christian liturgy. And remember also the Didache. When it’s talking about coming together, says, “Every Lord’s Day gather yourselves together and break bread.”\n\nSo all of that seems to point to a pretty coherent, cohesive set of evidence that all points in the same direction. That the early Christians did not view themselves bound to keep the Sabbath on Saturday and instead viewed themselves as bound of observing the Lord’s Day that Christ was the fulfillment of all of these things. And in fact, Justin Martyr says, actually I don’t have it right in front of me, but he says, “If we didn’t understand why Christ came, we would keep the Sabbath as well.” And it’s a pretty punchy kind of line because he’s saying Jesus is the fulfillment of all of these things. And it’s something to bear in mind because the risk here is that we fall into a kind of legalism, of thinking we’re still bound by the Mosaic law. And I understand because in the 10 Commandments, people expect we have to keep this literally. That’s a misreading of the 10 Commandments and we know that in part because of the practice of the apostles and the early Christians.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Las cuatro actividades de Hch 2:42 corresponden a doctrina, sacramentos, comunión y oración",
            quotes: [
              {
                speaker: "Dr. Brant Pitre",
                work: "Doubting Thomas: My Lord and My God (John 20)",
                outlet: "Catholic Productions",
                date: "23 de abril de 2020",
                locator: "Fragmento que empieza «One of the reasons I think»",
                url: "https://catholicproductions.com/blogs/blog/doubting-thomas-and-the-activity-of-the-early-apostolic-church",
                text: "Una de las razones por las que creo que eso es fascinante es que puedes correlacionarlo con las cuatro partes del Catecismo de la Iglesia Católica. Entonces, si tienes el Catecismo de la Iglesia Católica —lo he usado antes, es el compendio oficial de la enseñanza de la Iglesia sobre temas de fe y moral— lo interesante es que está dividido en cuatro partes. La primera parte trata de la enseñanza de los apóstoles, es sobre la doctrina, el credo. La segunda parte trata de los sacramentos, sobre todo de la Eucaristía, la fracción del pan. La tercera parte trata de la vida en Cristo, de la comunión unos con otros. Cómo amamos a Dios y cómo amamos a nuestro prójimo. Cómo guardamos los mandamientos y vivimos unos con otros según la justicia, la misericordia y el amor. Y luego la cuarta parte del Catecismo trata de la oración. Es sobre el Padrenuestro en particular, pero también sobre la vida de oración en general. Así que es bastante interesante ver que esos cuatro pilares de la enseñanza de la Iglesia ya están presentes en esta descripción inicial de la Iglesia primitiva.",
                original:
                  "One of the reasons I think that that's fascinating is that you can kind of correlate that with the four parts of the Catechism of the Catholic Church. So if you have the Catechism of the Catholic Church — I have used it before, it's the official compendium of the Church's teaching on matters of faith and morals — what is interesting is it is broken up into four parts. The first part is on the apostles' teaching, it is on the doctrine, the creed. The second part is on the sacraments, above all the Eucharist, the breaking of the bread. The third part is on life in Christ, on fellowship with one another. How do we love God and how do we love our neighbor. How do we keep the Commandments and live with one another according to justice and mercy and love. And then the fourth part of Catechism is on prayer. It's on the Lord's Prayer in particular, but on the life of prayer in general. So it's kind of neat there that you see that those four pillars of the Church's teaching are already present in this initial description of the early Church.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
  ],
  passages: {
    title: "Los pasajes de la posición católica",
    lede: "Los versículos que la Iglesia católica cita sobre la Eucaristía, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la Iglesia católica.",
    apologistsLabel: "Cómo lo defienden los apologistas católicos.",
  },
  objections: {
    subtitle: "Objeciones a la postura católica. Abre cada una para leer en profundidad la respuesta católica.",
    videosSubtitle: "Creadores católicos que responden a esta objeción. Los videos se abren en YouTube.",
    order: ["OB-1", "OB-2", "OB-3", "OB-4", "OB-5", "OB-6", "OB-7", "DO-1", "DO-2"],
    themes: [
      {
        id: "sacrifice",
        name: "El sacrificio",
        ids: ["OB-1", "OB-5"],
      },
      {
        id: "presence",
        name: "La presencia",
        ids: ["OB-2", "OB-3"],
      },
      {
        id: "celebration",
        name: "Cómo se celebra",
        ids: ["OB-4", "OB-6", "OB-7"],
      },
    ],
    silentTraditions:
      "Los textos que hablan por los bautistas en Doctrina (Fe y Mensaje Bautistas 2000, art. VII; Confesión de New Hampshire 1853, art. XIV) presentan la Cena como símbolo y memorial y no formulan objeciones a la doctrina católica; lo mismo la Declaración de Verdades Fundamentales de las Asambleas de Dios, art. 6.",
    items: [
      {
        id: "OB-1",
        short: "Un solo sacrificio, una sola vez",
        layer: "official",
        title: "Si Cristo se ofreció «una vez para siempre», la Misa no puede ser un sacrificio",
        synthesis:
          "Hebreos dice que Cristo no se ofreció «muchas veces» sino una vez, que «con una sola ofrenda hizo perfectos para siempre á los santificados» y que «donde hay remisión de éstos, no hay más ofrenda por pecado» {v:Heb.9.25-Heb.9.26} {v:Heb.10.14,Heb.10.18}. La muerte de Cristo es el único sacrificio propiciatorio; la Cena puede ser un sacrificio de alabanza y acción de gracias de los ya reconciliados, pero no uno que reconcilie con Dios. Si la Misa es un sacrificio propiciatorio que se ofrece cada día por vivos y difuntos, o repite la cruz o le añade algo que la cruz no hizo.",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla reformados y luteranos.",
        },
        objectorTexts: {
          shown: ["WCF292", "STWCF"],
          more: ["AP24a", "AC24", "SA221", "STSA"],
        },
        videoIds: ["PQRXRs4FNhE", "Vn9Z2QUYESw", "TeEflrqTBvU"],
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, el sacrificio de la cruz fue uno y para siempre. El Concilio de Trento abre su doctrina sobre la Misa diciendo que Cristo «se había de ofrecer á sí mismo á Dios Padre, una vez, por medio de la muerte en el ara de la cruz, para obrar desde ella la redencion eterna» {c:T22c1|Trento, ses. XXII, cap. 1}. El Catecismo dice: «el sacrificio que Cristo ofreció de una vez para siempre en la cruz, permanece siempre actual» {c:CEC1364|Catecismo 1364}, que remite a {v:Heb.7.25-Heb.7.27}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Misa no es un segundo sacrificio. Trento enseña: «la hostia es una misma, uno el mismo que ahora ofrece por el ministerio de los sacerdotes, que el que entonces se ofreció á sí mismo en la cruz, con sola la diferencia del modo de ofrecerse» {c:T22c2|ses. XXII, cap. 2}. El Catecismo lo resume: «El sacrificio de Cristo y el sacrificio de la Eucaristía son, pues, un único sacrificio» {c:CEC1367|Catecismo 1367}. Juan Pablo II escribe: «La Misa hace presente el sacrificio de la Cruz, no se le añade y no lo multiplica. Lo que se repite es su celebración memorial, la «manifestación memorial» (memorialis demonstratio), por la cual el único y definitivo sacrificio redentor de Cristo se actualiza siempre en el tiempo» {c:EdE12|Ecclesia de Eucharistia 12}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, ese único sacrificio se hace presente porque el sacerdocio de Cristo no terminó en la cruz. Trento enseña que ese sacerdocio «no habia de acabarse con su muerte», y que en la última Cena Cristo dejó a la Iglesia «un sacrificio visible, segun requiere la condicion de los hombres, en el que se representase el sacrificio cruento que por una vez se habia de hacer en la cruz, y permaneciese su memoria hasta el fin del mundo, y se aplicase su saludable virtud á la remision de los pecados que cotidianamente cometemos» {c:T22c1|ses. XXII, cap. 1} {v:Heb.7.24}. El Catecismo explica cómo un acontecimiento único puede estar presente sin repetirse: «todos los demás acontecimientos suceden una vez, y luego pasan y son absorbidos por el pasado. El misterio pascual de Cristo, por el contrario, no puede permanecer solamente en el pasado, pues por su muerte destruyó a la muerte, y todo lo que Cristo es y todo lo que hizo y padeció por los hombres participa de la eternidad divina y domina así todos los tiempos y en ellos se mantiene permanentemente presente» {c:CEC1085|Catecismo 1085}. Y dice en qué sentido la Eucaristía es sacrificio: «porque representa (= hace presente) el sacrificio de la cruz, porque es su memorial y aplica su fruto» {c:CEC1366|Catecismo 1366}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Misa es sacrificio en sentido propio, y también de alabanza. Juan Pablo II: «la Eucaristía es sacrificio en sentido propio y no sólo en sentido genérico, como si se tratara del mero ofrecimiento de Cristo a los fieles como alimento espiritual» {c:EdE13|Ecclesia de Eucharistia 13}. El Catecismo la llama a la vez «sacrificio de acción de gracias al Padre» y «sacrificio de alabanza» {c:CEC1360|Catecismo 1360–1361}, y enseña que en ella «el sacrificio de Cristo se hace también el sacrificio de los miembros de su Cuerpo» {c:CEC1368|Catecismo 1368}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Misa es propiciatoria porque en ella está el mismo Cristo de la cruz. Trento enseña: «por quanto en este divino sacrificio que se hace en la Misa, se contiene, y sacrifica incruentamente aquel mismo Cristo que se ofreció por una vez cruentamente en el ara de la cruz; enseña el santo Concilio, que este sacrificio es con toda verdad propiciatorio» {c:T22c2|ses. XXII, cap. 2} {c:CEC1367|citado en Catecismo 1367}. Sus frutos son los de la cruz: «Los frutos por cierto de aquella oblacion cruenta, se logran abundantisimamente por esta incruenta: tan lejos está que esta derogue de modo alguno á aquella» {c:T22c2|cap. 2}. Y se reciben «si nos acercamos al Señor contritos y penitentes, si con sincero corazon, y recta fe, si con temor y reverencia» {c:T22c2|cap. 2}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno dixere, que se comete blasfemia contra el santisimo sacrificio que Cristo consumó en la cruz, por el sacrificio de la Misa; ó que por este se deroga á aquel; sea excomulgado.",
            ],
            attribution: "{c:T22can|Trento, sesión XXII, canon 4}",
          },
        ],
        sourcesCited: [
          {
            citations: ["T22c1", "T22c2", "T22can"],
            name: "Concilio de Trento, sesión XXII, caps. 1–2, can. 4",
            dates: [
              {
                year: 1562,
                month: 9,
                day: 17,
              },
            ],
          },
          {
            citations: ["EdE12", "EdE13"],
            name: "Juan Pablo II, Ecclesia de Eucharistia 12–13",
            dates: [
              {
                year: 2003,
                month: 4,
                day: 17,
              },
            ],
          },
          {
            citations: ["CEC1085", "CEC1360", "CEC1364", "CEC1366", "CEC1367", "CEC1368"],
            name: "Catecismo de la Iglesia Católica 1085, 1360, 1361, 1364, 1366, 1367, 1368",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: ["Heb.7.24", "Heb.7.25-Heb.7.27"],
          objector: [
            "Heb.7.23-Heb.7.24",
            "Heb.7.27",
            "Heb.9.22",
            "Heb.9.25-Heb.9.26",
            "Heb.9.28",
            "Heb.10.4",
            "Heb.10.10",
            "Heb.10.11-Heb.10.12",
            "Heb.10.14",
            "Heb.10.18",
            "Isa.53.10",
            "Mal.1.11",
          ],
          objectorNote:
            "Textos que citan la Confesión de Westminster 29.2, la Confesión de Augsburgo XXIV.24–27 y la Apología XXIV.22–23. Malaquías 1:11 se lee de dos modos: Trento, ses. XXII, cap. 1, y Apología XXIV.31–32.",
        },
      },
      {
        id: "OB-2",
        short: "Lo consagrado sigue siendo pan",
        layer: "official",
        title: "Pablo lo sigue llamando «pan»: lo consagrado sigue siendo pan",
        synthesis:
          "Después de la consagración Pablo lo sigue llamando «pan» {v:1Cor.10.16} {v:1Cor.11.26-1Cor.11.28}: el pan sigue siendo pan en su sustancia, y enseñar que su sustancia desaparece no concuerda con la Escritura. Los reformados añaden que el cuerpo de Cristo está en el cielo {v:Acts.3.21} y que la transubstanciación va «aun contra el sentido y razon comunes» y «destruye la naturaleza del sacramento» {c:WCF296|Confesión de Westminster 29.6}.",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla reformados y luteranos.",
        },
        objectorTexts: {
          shown: ["SA365"],
          more: ["WCF296", "STWCF", "FCEP722"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, la conversión se funda en las palabras de Cristo. Trento enseña: «por quanto dixo Jesu-Cristo nuestro Redentor, que era verdaderamente su cuerpo lo que ofrecia bajo la especie de pan; ha creido por lo mismo perpetuamente la Iglesia de Dios, y lo mismo declara ahora de nuevo este mismo santo Concilio, que por la consagracion del pan y del vino, se convierte toda la substancia del pan en la substancia del cuerpo de nuestro señor Jesu-Cristo, y toda la substancia del vino en la substancia de su sangre» {c:T13c4|Trento, ses. XIII, cap. 4} {v:Matt.26.26} {c:CEC1376|citado en Catecismo 1376}. El Catecismo Romano razona sobre la misma frase: si allí quedara la sustancia del pan, «parece que de ningun modo se podria decir con verdad: Esto es mi cuerpo» {c:CR38|Catecismo Romano, parte II, cap. 4, n. 38}. Pablo VI enseña que Cristo «no se hace presente en este sacramento sino por la conversión de toda la sustancia del pan en su cuerpo y de toda la sustancia del vino en su sangre» {c:MF46|Mysterium fidei 46}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, que Pablo lo siga llamando «pan» no contradice la conversión. El Catecismo Romano responde que «no debe estrañarse que la Eucaristía se llame pan, aun despues de la consagracion», porque «conserva la figura de pan» y «todavía retiene natural virtud de alimentar», y porque «es costumbre de las Escrituras sagradas llamar las cosas segun lo que parecen»: así llama «varones» a los ángeles que vio Abraham y a los dos que aparecieron en la Ascensión {c:CR40|Catecismo Romano, parte II, cap. 4, n. 40} {v:Gen.18.2} {v:Acts.1.10}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, lo que cambia no es lo que se ve. Pablo VI: «bajo dichas especies ya no existe lo que antes había, sino una cosa completamente diversa; y esto no tan sólo por el juicio de la fe de la Iglesia, sino por la realidad objetiva, puesto que, convertida la sustancia o naturaleza del pan y del vino en el cuerpo y en la sangre de Cristo, no queda ya nada del pan y del vino, sino tan sólo las especies» {c:MF46|Mysterium fidei 46}. Por eso, dice el Catecismo citando a santo Tomás, esta presencia «no se conoce por los sentidos, […] sino sólo por la fe, la cual se apoya en la autoridad de Dios» {c:CEC1381|Catecismo 1381}. Y el signo no se destruye: «los signos del pan y del vino siguen significando también la bondad de la creación» {c:CEC1333|Catecismo 1333}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la conversión no se reduce a un cambio de significado. Pablo VI rechaza «discutir sobre el misterio de la transustanciación sin referirse a la admirable conversión de toda la sustancia del pan en el cuerpo de Cristo y de toda la sustancia del vino en su sangre, […] de modo que se limitan ellos tan sólo a lo que llaman transignificación y transfinalización» {c:MF11|Mysterium fidei 11}, y enseña que las fórmulas de Trento «expresan conceptos no ligados a una determinada forma de cultura ni a una determinada fase de progreso científico, ni a una u otra escuela teológica» {c:MF24|Mysterium fidei 24}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, que el cuerpo de Cristo esté en el cielo no lo impide. Trento: «no hay en efecto repugnancia en que el mismo Cristo nuestro Salvador esté siempre sentado en el cielo á la diestra del Padre, segun el modo natural de existir, y que al mismo tiempo nos asista sacramentalmente con su presencia, y en su propia substancia en otros muchos lugares», con un modo de existir que «apenas lo podemos declarar con palabras», pero que «es posible á Dios» {c:T13c1|Trento, ses. XIII, cap. 1}. Pablo VI precisa que bajo las especies «Cristo todo entero está presente en su realidad física, aun corporalmente, pero no a la manera que los cuerpos están en un lugar» {c:MF46|Mysterium fidei 46}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno dixere, que en el sacrosanto Sacramento de la Eucaristia queda substancia de pan y de vino juntamente con el cuerpo y sangre de nuestro señor Jesu-Cristo; y negare aquella admirable y singular conversion de toda la substancia del pan en el cuerpo, y de toda la substancia del vino en la sangre, permaneciendo solamente las especies de pan y vino; conversion que la Iglesia Católica propisimamente llama Transubstanciacion; sea excomulgado.",
            ],
            attribution: "{c:T13can2|Trento, sesión XIII, canon 2}",
          },
        ],
        sourcesCited: [
          {
            citations: ["T13c1", "T13c4", "T13can2"],
            name: "Concilio de Trento, sesión XIII, caps. 1 y 4, can. 2",
            dates: [
              {
                year: 1551,
                month: 10,
                day: 11,
              },
            ],
          },
          {
            citations: ["CR38", "CR40"],
            name: "Catecismo Romano, parte II, cap. 4, nn. 38 y 40",
            dates: [
              {
                year: 1566,
              },
            ],
          },
          {
            citations: ["MF11", "MF24", "MF46"],
            name: "Pablo VI, Mysterium fidei 11, 24, 46",
            dates: [
              {
                year: 1965,
                month: 9,
                day: 3,
              },
            ],
          },
          {
            citations: ["CEC1333", "CEC1376", "CEC1381"],
            name: "Catecismo de la Iglesia Católica 1333, 1376, 1381",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: ["Matt.26.26", "Gen.18.2", "Acts.1.10"],
          objector: ["1Cor.10.16", "1Cor.11.26-1Cor.11.28", "Acts.3.21", "Luke.24.6", "Luke.24.39"],
          objectorNote:
            "Hechos 3:21 y Lucas 24:6, 39: solo reformados (textos que cita la Confesión de Westminster 29.6).",
        },
      },
      {
        id: "OB-3",
        short: "Guardar y adorar la hostia",
        layer: "official",
        title: "Cristo dijo «Tomad, comed»: guardar, exponer y adorar la hostia va más allá de lo que mandó",
        synthesis:
          "Cristo dio el pan para que se tome y se coma («Tomad, comed», {v:Matt.26.26}). Guardarlo, exponerlo y llevarlo en procesión para adorarlo es usar el sacramento para algo que Cristo no mandó, y dirigir la adoración a lo que, a la vista, son pan y vino. Para los reformados, adorar los elementos es idolatría {c:WCF294,WCF296|Westminster 29.4, 29.6}.",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla reformados y luteranos.",
        },
        objectorTexts: {
          shown: ["WCF294"],
          more: ["FCSD7", "AC2212"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, lo que se adora es Cristo, no el pan. Trento enseña que al sacramento se le da «el culto de latría que se debe al mismo Dios», porque «creemos que está presente en él aquel mismo Dios» a quien adoraron los ángeles, los magos y los apóstoles {c:T13c5|Trento, ses. XIII, cap. 5} {v:Heb.1.6} {v:Matt.2.11}. El Catecismo lo dice así: «Puesto que Cristo mismo está presente en el Sacramento del Altar es preciso honrarlo con culto de adoración» {c:CEC1418|Catecismo 1418}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, que se haya instituido para comerlo no impide adorarlo. Trento: «Ni se le debe tributar menos adoracion con el pretexto de que fue instituido por Cristo nuestro señor para recibirle» {c:T13c5|ses. XIII, cap. 5}. Benedicto XVI responde a esta misma objeción: «Una objeción difundida entonces se basaba, por ejemplo, en la observación de que el Pan eucarístico no habría sido dado para ser contemplado, sino para ser comido. En realidad, a la luz de la experiencia de oración de la Iglesia, dicha contraposición se mostró carente de todo fundamento.» Y añade: «la adoración eucarística no es sino la continuación obvia de la celebración eucarística, la cual es en sí misma el acto más grande de adoración de la Iglesia. Recibir la Eucaristía significa adorar al que recibimos» {c:SCa66|Sacramentum caritatis 66}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la presencia no depende del momento en que se come: «comienza en el momento de la consagración y dura todo el tiempo que subsistan las especies eucarísticas» {c:CEC1377|Catecismo 1377}, y Trento rechaza que Cristo esté «solo en el uso, mientras que se recibe» {c:T13can4|ses. XIII, can. 4}. Pablo VI enseña que «no se puede proponer y aceptar la opinión, según la cual en las hostias consagradas, que quedan después de celebrado el santo sacrificio de la misa, ya no se halla presente Nuestro Señor Jesucristo» {c:MF11|Mysterium fidei 11}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, guardar la Eucaristía tiene un fin y una historia. Trento: es una costumbre «tan antigua […] que ya se conocia en el siglo en que se celebró el concilio Niceno» {c:T13c6|ses. XIII, cap. 6}. El Catecismo: «El sagrario (tabernáculo) estaba primeramente destinado a guardar dignamente la Eucaristía para que pudiera ser llevada a los enfermos y ausentes fuera de la misa. Por la profundización de la fe en la presencia real de Cristo en su Eucaristía, la Iglesia tomó conciencia del sentido de la adoración silenciosa del Señor presente bajo las especies eucarísticas» {c:CEC1379|Catecismo 1379}. Juan Pablo II subraya que este culto «está estrechamente unido a la celebración del Sacrificio eucarístico» y que la presencia en las especies que se conservan «deriva de la celebración del Sacrificio y tiende a la comunión sacramental y espiritual» {c:EdE25|Ecclesia de Eucharistia 25}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, esa adoración empieza dentro de la misma Misa: «En la liturgia de la misa expresamos nuestra fe en la presencia real de Cristo bajo las especies de pan y de vino, entre otras maneras, arrodillándonos o inclinándonos profundamente en señal de adoración al Señor» {c:CEC1378|Catecismo 1378}, y se prolonga fuera de ella: «conservando con el mayor cuidado las hostias consagradas, presentándolas a los fieles para que las veneren con solemnidad, llevándolas en procesión en medio de la alegría del pueblo» {c:MF56|Mysterium fidei 56} {c:CEC1378|citado en Catecismo 1378}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno dixere, que en el santo Sacramento de la Eucaristía no se debe adorar á Cristo hijo unigenito de Dios con el culto de latría, ni aun con el externo; y que por lo mismo, ni se debe venerar con peculiar y festiva celebridad; ni ser conducido solemnemente en procesiones, segun el loable y universal rito y costumbre de la santa Iglesia; ó que no se debe exponer públicamente al pueblo para que le adore, y que los que le adoran son idólatras; sea excomulgado.",
            ],
            attribution: "{c:T13can6|Trento, sesión XIII, canon 6}",
          },
        ],
        sourcesCited: [
          {
            citations: ["T13c5", "T13c6", "T13can4", "T13can6"],
            name: "Concilio de Trento, sesión XIII, caps. 5–6, cann. 4 y 6",
            dates: [
              {
                year: 1551,
                month: 10,
                day: 11,
              },
            ],
          },
          {
            citations: ["CEC1377", "CEC1378", "CEC1379", "CEC1418"],
            name: "Catecismo de la Iglesia Católica 1377, 1378, 1379, 1418",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["MF11", "MF56"],
            name: "Pablo VI, Mysterium fidei 11, 56",
            dates: [
              {
                year: 1965,
                month: 9,
                day: 3,
              },
            ],
          },
          {
            citations: ["EdE25"],
            name: "Juan Pablo II, Ecclesia de Eucharistia 25",
            dates: [
              {
                year: 2003,
                month: 4,
                day: 17,
              },
            ],
          },
          {
            citations: ["SCa66"],
            name: "Benedicto XVI, Sacramentum caritatis 66",
            dates: [
              {
                year: 2007,
                month: 2,
                day: 22,
              },
            ],
          },
        ],
        passages: {
          answer: ["Heb.1.6", "Matt.2.11"],
          objector: ["Matt.26.26", "Matt.15.9"],
        },
      },
      {
        id: "OB-4",
        short: "El cáliz y los laicos",
        layer: "official",
        title: "Cristo dijo «Bebed de ella todos»: negar el cáliz a los laicos cambia lo que él instituyó",
        synthesis:
          "De la copa Jesús dijo «Bebed de él todos» {v:Matt.26.27}, y la Iglesia antigua dio las dos especies a todos durante siglos. Dar a los laicos solo el pan cambia la institución de Cristo y los priva de algo que él mandó.",
        raisedBy: {
          traditions: ["orthodox", "lutheran", "reformed"],
          line: "Suelen plantearla luteranos, reformados y ortodoxos.",
        },
        objectorTexts: {
          shown: ["AC22"],
          more: ["ENC11", "ST1895", "AP22", "WCF294"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, ningún precepto divino obliga a los laicos a recibir las dos especies. Trento enseña que, aunque Cristo instituyó el sacramento «en las especies de pan y vino, y lo dió á sus Apóstoles», esa institución no establece «la obligacion de que todos los fieles cristianos deban recibir […] una y otra especie» {c:T21c1|Trento, ses. XXI, cap. 1}. El concilio recuerda que en Juan 6 el mismo Señor que dijo «si no comiereis la carne del hijo del hombre, ni bebiereis su sangre, no tendréis vida» dijo también «si alguno comiere de este pan, vivirá eternamente» {c:T21c1|ses. XXI, cap. 1} {v:John.6.53,John.6.51,John.6.58}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la razón de fondo es que Cristo está entero en cada especie. Trento: «se recibe en cada una sola de las especies á Cristo todo entero, y un verdadero Sacramento», y quien recibe una sola no queda «defraudado» de «ninguna gracia necesaria para conseguir la salvacion» {c:T21c3|ses. XXI, cap. 3}. El Catecismo: «Gracias a la presencia sacramental de Cristo bajo cada una de las especies, la comunión bajo la sola especie de pan ya hace que se reciba todo el fruto de gracia propio de la Eucaristía» {c:CEC1390|Catecismo 1390}. Y: «Cristo está todo entero presente en cada una de las especies y todo entero en cada una de sus partes» {c:CEC1377|Catecismo 1377}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la comunión con el pan solo es una ley de la Iglesia, no de Cristo. Trento reconoce que «desde los principios de la religion cristiana» fue «freqüente» comulgar con las dos especies, y presenta la comunión con el pan solo como una «ley» que la Iglesia aprobó «movida de graves y justas causas», y que puede regular porque administra los sacramentos «salva siempre la esencia de ellos» {c:T21c2|ses. XXI, cap. 2} {v:1Cor.4.1} {v:1Cor.11.34}. Hoy la Iglesia permite la comunión bajo las dos especies: el Concilio Vaticano II dispuso que, «manteniendo firmes los principios dogmáticos declarados por el Concilio de Trento, la comunión bajo ambas especies puede concederse en los casos que la Sede Apostólica determine» {c:SC55|Sacrosanctum Concilium 55}; el Código manda: «Adminístrese la sagrada comunión bajo la sola especie del pan o, de acuerdo con las leyes litúrgicas, bajo las dos especies» {c:CIC925|can. 925}; y el Catecismo, citando el Misal Romano, reconoce que «la comunión tiene una expresión más plena por razón del signo cuando se hace bajo las dos especies», y que esta «es la forma habitual de comulgar en los ritos orientales» {c:CEC1390|Catecismo 1390}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno dixere, que no tuvo la santa Iglesia católica causas ni razones justas para dar la comunion solo en la especie de pan á los legos, así como á los clerigos que no celebran; ó que erró en esto; sea excomulgado.",
            ],
            attribution: "{c:T21can2|Trento, sesión XXI, canon 2}",
          },
        ],
        sourcesCited: [
          {
            citations: ["T21c1", "T21c2", "T21c3", "T21can2"],
            name: "Concilio de Trento, sesión XXI, caps. 1–3, can. 2",
            dates: [
              {
                year: 1562,
                month: 7,
                day: 16,
              },
            ],
          },
          {
            citations: ["SC55"],
            name: "Concilio Vaticano II, Sacrosanctum Concilium 55",
            dates: [
              {
                year: 1963,
                month: 12,
                day: 4,
              },
            ],
          },
          {
            citations: ["CIC925"],
            name: "Código de Derecho Canónico, can. 925",
            dates: [
              {
                year: 1983,
              },
            ],
          },
          {
            citations: ["CEC1377", "CEC1390"],
            name: "Catecismo de la Iglesia Católica 1377, 1390",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: ["John.6.51", "John.6.53", "John.6.58", "1Cor.4.1", "1Cor.11.34"],
          objector: ["Matt.26.27", "1Cor.11.27-1Cor.11.28"],
        },
      },
      {
        id: "OB-5",
        short: "Misas privadas y por los difuntos",
        layer: "official",
        title: "Misas privadas y misas por los difuntos: la Cena convertida en una obra que vale por sí sola",
        synthesis:
          "Cristo instituyó la Cena para que la comunidad comulgue y los creyentes reciban con fe el perdón. Misas sin comulgantes, multiplicadas y aplicadas a cambio de dinero por vivos y difuntos, hacen de ella una obra que valdría por el solo hecho de celebrarse, sin la fe de quien la recibe. Y la Cena se instituyó para los vivos: aplicarla por los difuntos no tiene testimonio ni mandato en la Escritura.",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla luteranos y reformados.",
        },
        objectorTexts: {
          shown: ["AC24b"],
          more: ["AP24b", "SA2212", "WCF2924", "STWCF"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, que un sacramento obre _ex opere operato_ no significa que obre sin fe. El Catecismo define: «los sacramentos obran ex opere operato (según las palabras mismas del Concilio: «por el hecho mismo de que la acción es realizada»), es decir, en virtud de la obra salvífica de Cristo, realizada de una vez por todas», y añade: «Sin embargo, los frutos de los sacramentos dependen también de las disposiciones del que los recibe» {c:CEC1128|Catecismo 1128}. Trento dice de la Misa que sus frutos se alcanzan «si nos acercamos al Señor contritos y penitentes, si con sincero corazon, y recta fe, si con temor y reverencia» {c:T22c2|ses. XXII, cap. 2}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, lo deseable es que los fieles comulguen en cada Misa. Trento: «Quisiera por cierto el sacrosanto Concilio que todos los fieles que asistiesen á las Misas comulgasen en ellas, no solo espiritualmente, sino recibiendo tambien sacramentalmente la Eucaristía» {c:T22c6|ses. XXII, cap. 6}. Pero no condena las misas en que solo comulga el sacerdote, porque «se deben tambien tener con toda verdad por comunes de todos; parte porque el pueblo comulga espiritualmente en ellas, y parte porque se celebran por un ministro público de la Iglesia, no solo por sí, sino por todos los fieles que son miembros del cuerpo de Cristo» {c:T22c6|cap. 6}. Pablo VI: «toda misa, aunque sea celebrada privadamente por un sacerdote, no es acción privada, sino acción de Cristo y de la Iglesia, la cual, en el sacrifico que ofrece, aprende a ofrecerse a sí misma como sacrificio universal, y aplica a la salvación del mundo entero la única e infinita virtud redentora del sacrificio de la Cruz» {c:MF32|Mysterium fidei 32}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Misa se ofrece también por los difuntos. Trento enseña que se ofrece, «segun la tradicion de los Apóstoles, por los que han muerto en Cristo sin estar plenamente purgados» {c:T22c2|ses. XXII, cap. 2}. El Catecismo: «El Sacrificio Eucarístico es también ofrecido por los fieles difuntos «que han muerto en Cristo y todavía no están plenamente purificados» […], para que puedan entrar en la luz y la paz de Cristo» {c:CEC1371|Catecismo 1371}, y cita las _Catequesis mistagógicas_ atribuidas a san Cirilo de Jerusalén (c. 350–390): «Presentando a Dios nuestras súplicas por los que han muerto, aunque fuesen pecadores […], presentamos a Cristo inmolado por nuestros pecados, haciendo propicio para ellos y para nosotros al Dios amigo de los hombres» {c:CEC1371|Catecismo 1371}. Y resume: «En cuanto sacrificio, la Eucaristía es ofrecida también en reparación de los pecados de los vivos y los difuntos» {c:CEC1414|Catecismo 1414}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, el dinero no compra la Misa. El mismo Concilio de Trento mandó a los obispos prohibir «las condiciones de pagas de qualquiera especie, los contratos» por la celebración de misas y las cobranzas que «no distan mucho del pecado de Simonía», y desterrar «el abuso de decir cierto número de Misas con determinado número de luces, inventado mas bien por espíritu de supersticion que de verdadera religion» {c:T22decr|Trento, ses. XXII, decreto sobre lo que se ha de observar en la celebración de la Misa}. Hoy el Código manda: «En materia de ofrendas de Misas, evítese hasta la más pequeña apariencia de negociación o comercio» {c:CIC947|can. 947}, y recomienda a los sacerdotes celebrar «por las intenciones de los fieles, sobre todo de los necesitados, aunque no reciban ninguna ofrenda» {c:CIC945|can. 945 §2}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno dixere, que las Misas en que solo el sacerdote comulga sacramentalmente, son ilícitas, y que por esta causa se deben abrogar; sea excomulgado.",
              "Si alguno dixere, que el sacrificio de la Misa […] solo aprovecha al que lo recibe; y que no se debe ofrecer por los vivos, ni por los difuntos, por los pecados, penas, satisfacciones, ni otras necesidades; sea excomulgado.",
            ],
            attribution: "{c:T22can8,T22can|Trento, sesión XXII, cánones 8 y 3}",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC1128", "CEC1371", "CEC1414"],
            name: "Catecismo de la Iglesia Católica 1128, 1371 (con las Catequesis mistagógicas atribuidas a san Cirilo de Jerusalén, c. 350–390), 1414",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["T22c2", "T22c6", "T22can8", "T22can", "T22decr"],
            name: "Concilio de Trento, sesión XXII, caps. 2 y 6, cann. 3 y 8, y decreto sobre la celebración de la Misa",
            dates: [
              {
                year: 1562,
                month: 9,
                day: 17,
              },
            ],
          },
          {
            citations: ["MF32"],
            name: "Pablo VI, Mysterium fidei 32",
            dates: [
              {
                year: 1965,
                month: 9,
                day: 3,
              },
            ],
          },
          {
            citations: ["CIC945", "CIC947"],
            name: "Código de Derecho Canónico, cann. 945 §2 y 947",
            dates: [
              {
                year: 1983,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: ["1Cor.11.27", "1Cor.11.33", "Matt.15.9"],
          objectorNote: "Confesión de Augsburgo XXIV.12, 39; Artículos de Esmalcalda II.2.2.",
        },
      },
      {
        id: "OB-6",
        short: "La invocación del Espíritu Santo",
        layer: "official",
        title: "Los dones se consagran por la invocación del Espíritu Santo, no solo por las palabras de Cristo",
        synthesis:
          "En las liturgias antiguas, de Oriente y también de Roma y las Galias, los dones se consagran con la oración que invoca al Espíritu Santo, la epíclesis. Atribuir la consagración solo a las palabras «Esto es mi cuerpo» fue una innovación posterior de la Iglesia latina.",
        raisedBy: {
          traditions: ["orthodox"],
          line: "Suelen plantearla ortodoxos.",
        },
        objectorTexts: {
          shown: ["ENC10", "ST1895"],
          more: ["MOG107"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, la conversión es obra de la palabra de Cristo y del Espíritu Santo a la vez. El Catecismo: «En el corazón de la celebración de la Eucaristía se encuentran el pan y el vino que, por las palabras de Cristo y por la invocación del Espíritu Santo, se convierten en el Cuerpo y la Sangre de Cristo» {c:CEC1333|Catecismo 1333}. Y en el relato de la institución, «la fuerza de las palabras y de la acción de Cristo y el poder del Espíritu Santo hacen sacramentalmente presentes bajo las especies de pan y de vino su Cuerpo y su Sangre» {c:CEC1353|Catecismo 1353}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la epíclesis pertenece al centro de la Eucaristía. En ella «la Iglesia pide al Padre que envíe su Espíritu Santo (o el poder de su bendición (cf Plegaria Eucarística I o Canon romano, 90; Misal Romano) sobre el pan y el vino, para que se conviertan por su poder, en el Cuerpo y la Sangre de Jesucristo», y el Canon romano tiene esta invocación {c:CEC1353,MISAL|Catecismo 1353, que cita la Plegaria eucarística I}. «Junto con la Anámnesis, la Epíclesis es el centro de toda celebración sacramental, y muy particularmente de la Eucaristía», y el Catecismo cita a san Juan Damasceno, _Exposición de la fe_ (comienzos del siglo VIII): «el Espíritu Santo irrumpe y realiza aquello que sobrepasa toda palabra y todo pensamiento» {c:CEC1106|Catecismo 1106}. El Misal Romano lo dice en su Ordenación general: «la Iglesia, por medio de determinadas invocaciones, implora la fuerza del Espíritu Santo para que los dones que han presentado los hombres queden consagrados, es decir, se conviertan en el Cuerpo y Sangre de Cristo […]» {c:OGMR|Ordenación General del Misal Romano 79c, citada en Sacramentum caritatis 48}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, palabra y Espíritu no se separan. Benedicto XVI: la anáfora, «junto con las palabras pronunciadas por Cristo en la última Cena, contiene la epíclesis, como invocación al Padre para que haga descender el don del Espíritu a fin de que el pan y el vino se conviertan en el cuerpo y la sangre de Jesucristo» {c:SCa13|Sacramentum caritatis 13}, y pide contemplar «la profunda unidad de la anáfora, entre la invocación del Espíritu Santo y el relato de la institución» {c:SCa48|Sacramentum caritatis 48}. El mismo documento cita las _Catequesis_ atribuidas a san Cirilo de Jerusalén (c. 350–390): «invocamos a Dios misericordioso para que mande su Santo Espíritu sobre las ofrendas que están ante nosotros, para que Él convierta el pan en cuerpo de Cristo y el vino en sangre de Cristo» {c:SCa13|Sacramentum caritatis 13}. Y el Catecismo, que los Padres afirmaron «la eficacia de la Palabra de Cristo y de la acción del Espíritu Santo para obrar esta conversión», citando a san Juan Crisóstomo (_Homilías sobre la traición de Judas_, predicada en 388, según Baur): «Esto es mi Cuerpo, dice. Esta palabra transforma las cosas ofrecidas» {c:CEC1375|Catecismo 1375}. Por eso, entre los signos esenciales, nombra juntos el pan y el vino «sobre los cuales es invocada la bendición del Espíritu Santo» y las palabras de la consagración que el sacerdote pronuncia {c:CEC1412|Catecismo 1412}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, las palabras de la institución son parte constitutiva de la plegaria, pero no exigen una sola forma de recitarlas: la Congregación para la Doctrina de la Fe concluyó en 2001, con la aprobación de Juan Pablo II, que la anáfora de Addai y Mari, usada «sin una recitación del relato de la institución», «puede considerarse válida», porque las palabras de la institución están presentes en ella «no de modo narrativo coherente y _ad litteram_, sino de modo eucológico disperso» {c:PCPCU|Consejo Pontificio para la Promoción de la Unidad de los Cristianos, Orientaciones para la admisión a la Eucaristía entre la Iglesia caldea y la Iglesia asiria de Oriente, 2001} (traducción asistida por IA, sin revisar por Pedro, desde el inglés).",
          },
          {
            type: "quote",
            text: [
              "la forma de este sacramento son las palabras del Salvador con las que realizó este sacramento; pues el sacerdote, hablando en la persona de Cristo, realiza este sacramento. Por la fuerza de esas mismas palabras, la sustancia del pan se convierte en el cuerpo de Cristo, y la sustancia del vino en su sangre.",
            ],
            attribution: "{c:FLOexs|Concilio de Florencia, decreto para los armenios (Exsultate Deo, 1439)}",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC1106", "CEC1333", "CEC1353", "CEC1375", "CEC1412"],
            name: "Catecismo de la Iglesia Católica 1106 (con san Juan Damasceno, Exposición de la fe, comienzos del s. VIII), 1333, 1353, 1375 (con san Juan Crisóstomo), 1412",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["MISAL", "OGMR"],
            name: "Misal Romano, Plegaria eucarística I (citada en Catecismo 1353) y Ordenación General del Misal Romano (citada en Sacramentum caritatis 48)",
            dates: [],
          },
          {
            citations: ["SCa13", "SCa48"],
            name: "Benedicto XVI, Sacramentum caritatis 13, 48 (con las Catequesis atribuidas a san Cirilo de Jerusalén, c. 350–390)",
            dates: [
              {
                year: 2007,
                month: 2,
                day: 22,
              },
            ],
          },
          {
            citations: ["PCPCU"],
            name: "Consejo Pontificio para la Promoción de la Unidad de los Cristianos, Orientaciones",
            dates: [
              {
                year: 2001,
                month: 7,
                day: 20,
              },
            ],
          },
          {
            citations: ["FLOexs"],
            name: "Concilio de Florencia, Exsultate Deo",
            dates: [
              {
                year: 1439,
                month: 11,
                day: 22,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: ["Matt.26.26-Matt.26.28"],
          objectorNote: "Citado por la encíclica.",
        },
      },
      {
        id: "OB-7",
        short: "El pan ázimo",
        layer: "official",
        title: "Durante mil años se consagró con pan fermentado: el ázimo es una innovación latina",
        synthesis:
          "Durante más de mil años, en Oriente y en Occidente, la Iglesia celebró la Eucaristía con pan fermentado, a ejemplo del Salvador. El pan ázimo de la Iglesia latina es una innovación del siglo XI.",
        raisedBy: {
          traditions: ["orthodox"],
          line: "Suelen plantearla ortodoxos.",
        },
        objectorTexts: {
          shown: ["ENC9", "ST1895"],
          more: [],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, el pan ázimo es disciplina de la Iglesia latina, no una condición de la Eucaristía. Su Código pide pan «exclusivamente de trigo y hecho recientemente» {c:CIC924|can. 924} y, en cuanto a la levadura, usar pan ázimo «según la antigua tradición de la Iglesia latina» {c:CIC926|can. 926}; y ese Código rige solo para ella: «Los cánones de este Código son sólo para la Iglesia latina» {c:CIC1|can. 1}. El Catecismo nombra como signo esencial el «pan de trigo», sin mencionar la levadura {c:CEC1412|Catecismo 1412}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, las Iglesias orientales conservan su propia disciplina. El Concilio Vaticano II declaró «que las Iglesias de Oriente, como las de Occidente, gozan del derecho y deber de regirse según sus respectivas disciplinas peculiares, como lo exijan su venerable antigüedad» {c:OE5|Orientalium Ecclesiarum 5}, y les dijo: «Sepan y tengan por seguro todos los orientales, que pueden y deben conservar siempre sus legítimos ritos litúrgicos y su disciplina» {c:OE6|Orientalium Ecclesiarum 6}.",
          },
          {
            type: "quote",
            text: [
              "el cuerpo de Cristo se consagra verdaderamente en pan de trigo ázimo o fermentado, y los sacerdotes deben consagrar el cuerpo del Señor en uno u otro, cada uno según la costumbre de su Iglesia, occidental u oriental.",
            ],
            attribution: "{c:FLOlae|Concilio de Florencia, decreto de unión con los griegos (Laetentur caeli, 1439)}",
          },
        ],
        sourcesCited: [
          {
            citations: ["CIC1", "CIC924", "CIC926"],
            name: "Código de Derecho Canónico, cann. 1, 924 y 926",
            dates: [
              {
                year: 1983,
              },
            ],
          },
          {
            citations: ["CEC1412"],
            name: "Catecismo de la Iglesia Católica 1412",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["OE5", "OE6"],
            name: "Concilio Vaticano II, Orientalium Ecclesiarum 5–6",
            dates: [
              {
                year: 1964,
              },
            ],
          },
          {
            citations: ["FLOlae"],
            name: "Concilio de Florencia, Laetentur caeli",
            dates: [
              {
                year: 1439,
                month: 7,
                day: 6,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: [],
        },
      },
      {
        id: "DO-1",
        layer: "debate",
        title: "«La carne nada aprovecha»: Jesús habla en sentido espiritual",
        synthesis:
          "Jesús mismo dijo: «El espíritu es el que da vida; la carne nada aprovecha: las palabras que yo os he hablado, son espíritu, y son vida» {v:John.6.63}. Comer su carne y beber su sangre no puede ser comer carne de verdad: es creer en él, o recibirlo espiritualmente.",
        raisedBy: {
          traditions: ["reformed"],
          line: "Desde la tradición reformada se objeta que, si «la carne nada aprovecha» (Juan 6:63), Jesús no habla de comer su carne de verdad. Para la Confesión de Westminster, los fieles reciben a Cristo «no carnal y corporalmente, sino espiritualmente» (29.7).",
        },
        objectorTexts: {
          shown: ["WCF297"],
          more: [],
        },
        answer: [
          {
            type: "p",
            text: "El Catecismo recuerda cómo se recibió el primer anuncio de la Eucaristía: «El primer anuncio de la Eucaristía dividió a los discípulos, igual que el anuncio de la pasión los escandalizó: «Es duro este lenguaje, ¿quién puede escucharlo?» (Jn 6,60). La Eucaristía y la cruz son piedras de escándalo. Es el mismo misterio» {c:CEC1336|Catecismo 1336}.",
          },
          {
            type: "p",
            text: "Juan Pablo II, en la audiencia general del 13 de septiembre de 1989, cita el versículo: ««El espíritu es el que da vida: la carne no sirve para nada. Las palabras que os he dicho son espíritu y son vida» (Jn 6, 63)», y dice: «Los oyentes de Jesús entendieron de modo «material» aquel primer anuncio eucarístico. El Maestro quiso en seguida precisar que su contenido sólo podía aclararse y entenderse por obra del «Espíritu que da vida». En la Eucaristía Cristo nos da su cuerpo y su sangre como alimento y bebida, bajo las especies del pan y del vino […]. Solamente en virtud del Espíritu, que da vida, el alimento y la bebida eucarísticos pueden obrar en nosotros la «comunión», es decir, la unión salvífica con el Cristo crucificado y glorificado» {c:JP89|n. 4}.",
          },
          {
            type: "p",
            text: "Juan Pablo II, en la audiencia del 30 de enero de 1991: «Tanto la palabra como el sacramento tienen vida y eficacia operativa por el Espíritu Santo» {c:JP91|n. 6}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, ese alimento es Cristo mismo, presente de verdad. El Catecismo: en el Santísimo Sacramento están ««contenidos verdadera, real y substancialmente el Cuerpo y la Sangre junto con el alma y la divinidad de nuestro señor Jesucristo, y, por consiguiente, Cristo entero»» {c:CEC1374|Catecismo 1374, citando a Trento}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno negáre, que en el santisimo Sacramento de la Eucaristia se contiene verdadera, real y substancialmente el cuerpo y la sangre juntamente con el alma y divinidad de nuestro señor Jesu-Cristo, y por conseqüencia todo Cristo; sino por el contrario dixere, que solamente está en él como en señal, ó en figura, ó virtualmente; sea excomulgado.",
            ],
            attribution: "{c:T13can1|Trento, sesión XIII, canon 1}",
          },
        ],
        sourcesCited: [
          {
            citations: ["JP89", "JP91"],
            name: "Juan Pablo II, audiencias generales del 13 sep 1989 (n. 4) y del 30 ene 1991 (n. 6)",
            dates: [
              {
                year: 1989,
                alsoYears: [1991],
              },
            ],
          },
          {
            citations: ["CEC1336", "CEC1374"],
            name: "Catecismo de la Iglesia Católica 1336, 1374",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["T13can1"],
            name: "Concilio de Trento, sesión XIII, canon 1",
            dates: [
              {
                year: 1551,
                month: 10,
                day: 11,
              },
            ],
          },
        ],
        passages: {
          answer: ["John.6.60", "John.6.63", "John.6.67-John.6.68"],
          objector: ["John.6.63"],
        },
        apologeticAnswer: "pending",
      },
      {
        id: "DO-2",
        layer: "debate",
        title: "«Dios prohibió beber sangre»",
        synthesis:
          "Dios prohibió a Israel comer sangre, «porque la vida de toda carne es su sangre» {v:Lev.17.14}, y los apóstoles lo repitieron para los gentiles: «Que os abstengáis de cosas sacrificadas á ídolos, y de sangre, y de ahogado, y de fornicación» {v:Acts.15.29}. Beber la sangre de Cristo contradice lo que Dios prohibió.",
        raisedBy: {
          traditions: [],
          line: "Se objeta que la Escritura prohíbe beber sangre: a Israel, «No comeréis la sangre de ninguna carne» (Levítico 17:14), y a los gentiles convertidos, que se aparten «de ahogado, y de sangre» (Hechos 15:20).",
        },
        objectorTexts: {
          shown: [],
          more: [],
        },
        answer: [
          {
            type: "p",
            text: "El Catecismo enseña que Jesús dio plenitud a la ley sobre los alimentos: «Yendo más lejos, Jesús da plenitud a la Ley sobre la pureza de los alimentos, tan importante en la vida cotidiana judía, manifestando su sentido «pedagógico» (cf. Ga 3, 24) por medio de una interpretación divina: «Todo lo que de fuera entra en el hombre no puede hacerle impuro […] —así declaraba puros todos los alimentos—»» {c:CEC582|Catecismo 582, citando Mc 7,18-21}.",
          },
          {
            type: "p",
            text: "El Catecismo recoge las palabras del Señor sobre este mismo sacramento: ««En verdad, en verdad os digo: si no coméis la carne del Hijo del hombre, y no bebéis su sangre, no tendréis vida en vosotros» (Jn 6,53)», como «invitación urgente a recibirle en el sacramento de la Eucaristía» {c:CEC1384|Catecismo 1384}.",
          },
          {
            type: "quote",
            text: [
              "[La Iglesia] afirma que la diferencia de la ley mosaica entre alimentos puros e impuros pertenece a lo ceremonial, que pasó al surgir el Evangelio y dejó de ser eficaz. Dice también que aquella prohibición de los apóstoles, de lo inmolado a los ídolos, de la sangre y de lo sofocado (Hch 15,29), convenía a aquel tiempo […]. Pero cuando la religión cristiana se extendió hasta el punto de que en ella no aparece ningún judío carnal, sino que todos, pasando a la Iglesia, convienen en los mismos ritos y ceremonias del Evangelio, creyendo que todo es puro para los puros (Tt 1,15), cesando la causa de aquella prohibición apostólica cesó también su efecto. Por eso declara que no se ha de condenar la naturaleza de ningún alimento […]",
            ],
            attribution:
              "{c:FLOcd|Concilio de Florencia, bula Cantate Domino (4 de febrero de 1442, sesión XI, unión con los coptos y los etíopes)}",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC582", "CEC1384"],
            name: "Catecismo de la Iglesia Católica 582, 1384",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["FLOcd"],
            name: "Concilio de Florencia, Cantate Domino",
            dates: [
              {
                year: 1442,
                month: 2,
                day: 4,
              },
            ],
          },
        ],
        passages: {
          answer: ["Mark.7.18-Mark.7.21", "John.6.53", "Acts.15.29", "Titus.1.15"],
          objector: ["Lev.17.10-Lev.17.14", "Acts.15.20", "Acts.15.29"],
        },
        apologeticAnswer: "pending",
      },
    ],
  },
  videos: {
    subtitle: "Creadores católicos explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [
      {
        id: "mJXAFHw_ARQ",
        title: "What Does John 6 Say About the Eucharist? | Dr. Brant Pitre",
        channel: "Catholic Productions",
        lang: "en",
      },
      {
        id: "I7yY0zSUm20",
        title: "Does This Verse Disprove the Eucharist?",
        channel: "Shameless Popery",
        lang: "en",
      },
      {
        id: "PQRXRs4FNhE",
        title: "Does the Mass Put Jesus Back on the Cross?",
        channel: "Shameless Popery",
        lang: "en",
      },
      {
        id: "Vn9Z2QUYESw",
        title: "Do Catholics Re-Crucify Jesus During Mass?",
        channel: "Catholic Answers Live",
        lang: "en",
      },
      {
        id: "xS29MKkkxpU",
        title: "Is Receiving the Eucharist Cannibalism? | Karlo Broussard | Catholic Answers Live",
        channel: "Catholic Answers Live",
        lang: "en",
      },
      {
        id: "rDnLoBKRcCk",
        title: "How is the Eucharist Not Cannibalism?",
        channel: "Catholic Answers Live",
        lang: "en",
      },
      {
        id: "UzCPu_lEhe8",
        title: "The Real Presence of Jesus in the Eucharist // Bishop Barron at 2020 Religious Education Congress",
        channel: "Bishop Robert Barron",
        lang: "en",
      },
      {
        id: "AzqLMZ1x0zM",
        title: "Biblical PROOF The Eucharist is Truly Jesus | Father Mike Schmitz SEEK Rewind",
        channel: "FOCUS Catholic",
        lang: "en",
      },
      {
        id: "NFmgYbC3OYw",
        title: "Jesus and the Jewish Roots of the Eucharist | Dr. Brant Pitre",
        channel: "Catholic Productions",
        lang: "en",
      },
      {
        id: "epr44J8X8ys",
        title: "¿Realmente dijo Jesús que su carne no servía para nada en Juan 6:63?",
        channel: "Dios Te Salve",
        lang: "es",
      },
      {
        id: "LSCZGU1HnIM",
        title: "“Los protestantes dicen que Dios prohíbe comer sangre… pero rechazan la Eucaristía”",
        channel: "Dogma vs Reforma",
        lang: "es",
      },
      {
        id: "f7e7gBV4dn8",
        title: "AT. Estaba prohibido comer sangre. ¿Ya podemos comer sangre? Padre Luis Toro.",
        channel: "Raymundo Saucedo Raygoza - Padre Luis Toro.",
        lang: "es",
      },
      {
        id: "TeEflrqTBvU",
        title: "La Santa Misa: El Único Sacrificio de Cristo (Sacramento de la Eucaristía)",
        channel: "La Fe de la Iglesia",
        lang: "es",
      },
      {
        id: "7mc74gnF5M4",
        title: "La presencia real de Cristo en la Eucaristía",
        channel: "En ti confío",
        lang: "es",
      },
      {
        id: "PucLuJsfekA",
        title: "Answering a Protestant Objection to the Eucharist (John 6:63) w/ @JimmyAkin",
        channel: "Catholic Answers Live",
        lang: "en",
      },
    ],
  },
  life: {
    intro: [
      "La Eucaristía se celebra en la Misa. Los católicos tienen la obligación de participar en ella los domingos y las demás fiestas de precepto, y deben comulgar al menos una vez al año, en tiempo pascual {c:CIC1247,CIC920|Código de Derecho Canónico, cann. 1247 y 920}. Pero la Iglesia no se queda en ese mínimo: «recomienda vivamente a los fieles recibir la santa Eucaristía los domingos y los días de fiesta, o con más frecuencia aún, incluso todos los días» {c:CEC1389|Catecismo 1389}.",
      "Solo un sacerdote válidamente ordenado preside y consagra {c:CIC900|can. 900}. La Iglesia pide comulgar en gracia de Dios: quien tiene conciencia de pecado grave se confiesa antes {c:CIC916|can. 916}. Como, para la Iglesia, Cristo sigue presente mientras duran las especies, las hostias consagradas se guardan en el sagrario, desde donde se llevan a los enfermos y ante el que se reza y se adora {c:CIC938,CIC941|cann. 938–941} {c:CEC1378,CEC1379|Catecismo 1378–1379}.",
    ],
    items: [
      {
        id: "CV-0",
        label: "La Misa: Palabra y Eucaristía",
        text: "La celebración tiene «dos grandes momentos que forman una unidad básica»: la liturgia de la Palabra, «con las lecturas, la homilía y la oración universal», y la liturgia eucarística, «con la presentación del pan y del vino, la acción de gracias consecratoria y la comunión»; juntas constituyen «un solo acto de culto».",
        sources: [
          {
            citations: ["CEC1346"],
            label: "Catecismo 1346",
          },
        ],
      },
      {
        id: "CV-1",
        label: "Misa del domingo",
        text: "«El domingo y las demás fiestas de precepto los fieles tienen obligación de participar en la Misa.»",
        sources: [
          {
            citations: ["CIC1247"],
            label: "Código de Derecho Canónico, can. 1247",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Comunión frecuente; mínimo anual",
        text: "La Iglesia recomienda comulgar cada vez que se participa en la Misa, incluso a diario; obliga a hacerlo «por lo menos una vez al año», «durante el tiempo pascual, a no ser que por causa justa se cumpla en otro tiempo dentro del año».",
        sources: [
          {
            citations: ["CEC1389", "CEC1417"],
            label: "Catecismo 1388–1389, 1417",
          },
          {
            citations: ["CIC920"],
            label: "can. 920",
          },
          {
            citations: ["T13can9"],
            label: "Trento, ses. XIII, can. 9",
          },
        ],
      },
      {
        id: "CV-3",
        label: "En gracia de Dios",
        text: "«Quien tenga conciencia de hallarse en pecado grave, no celebre la Misa ni comulgue el Cuerpo del Señor sin acudir antes a la confesión sacramental, a no ser que concurra un motivo grave y no haya oportunidad de confesarse», y en ese caso debe hacer un acto de contrición perfecta con propósito de confesarse cuanto antes.",
        sources: [
          {
            citations: ["CIC916"],
            label: "can. 916",
          },
          {
            citations: ["CEC1385", "CEC1415"],
            label: "Catecismo 1385, 1415",
          },
          {
            citations: ["T13c7"],
            label: "Trento, ses. XIII, cap. 7",
          },
        ],
      },
      {
        id: "CV-4",
        label: "Ayuno eucarístico",
        text: "Abstenerse de comida y bebida «al menos desde una hora antes de la sagrada comunión, a excepción sólo del agua y de las medicinas»; los mayores, los enfermos y quienes los cuidan quedan exentos.",
        sources: [
          {
            citations: ["CIC919"],
            label: "can. 919",
          },
          {
            citations: ["CEC1387"],
            label: "Catecismo 1387",
          },
        ],
      },
      {
        id: "CV-5",
        label: "Primera comunión",
        text: "Los niños que han llegado al uso de razón, con preparación y «previa confesión sacramental»; deben poder recibir el Cuerpo del Señor «con fe y devoción».",
        sources: [
          {
            citations: ["CIC913"],
            label: "cann. 913–914",
          },
        ],
      },
      {
        id: "CV-6",
        label: "Quién preside",
        text: "«Sólo el sacerdote válidamente ordenado es ministro capaz de confeccionar el sacramento de la Eucaristía, actuando en la persona de Cristo.» Cristo mismo «es quien preside invisiblemente toda celebración eucarística»; el obispo o el presbítero preside «actuando in persona Christi capitis».",
        sources: [
          {
            citations: ["CIC900"],
            label: "can. 900",
          },
          {
            citations: ["CEC1348"],
            label: "Catecismo 1348",
          },
        ],
      },
      {
        id: "CV-7",
        label: "Pan y vino",
        text: "Pan «exclusivamente de trigo y hecho recientemente»; vino «natural, del fruto de la vid», con «un poco de agua»; en la Iglesia latina, pan ázimo «según la antigua tradición de la Iglesia latina».",
        sources: [
          {
            citations: ["CIC924"],
            label: "cann. 924 y 926",
          },
          {
            citations: ["T22c7"],
            label: "Trento, ses. XXII, cap. 7",
          },
          {
            citations: ["FLOexs"],
            label: "Concilio de Florencia, Exsultate Deo",
          },
        ],
      },
      {
        id: "CV-8",
        label: "Una o dos especies",
        text: "Se comulga con el pan solo o, según las leyes litúrgicas, con las dos especies; bajo cualquiera se recibe a Cristo entero.",
        sources: [
          {
            citations: ["CIC925"],
            label: "can. 925",
          },
          {
            citations: ["CEC1390"],
            label: "Catecismo 1390",
          },
          {
            citations: ["T21c3"],
            label: "Trento, ses. XXI, cap. 3",
          },
        ],
      },
      {
        id: "CV-9",
        label: "Quién puede comulgar",
        text: "En principio, los católicos; con condiciones, los fieles de las Iglesias orientales que lo piden espontáneamente y están bien dispuestos; otros cristianos solo en peligro de muerte u otra necesidad grave, si «profesen la fe católica respecto a esos sacramentos».",
        sources: [
          {
            citations: ["CIC844"],
            label: "can. 844",
          },
          {
            citations: ["CEC1399", "CEC1400", "CEC1401"],
            label: "Catecismo 1399–1401",
          },
        ],
      },
      {
        id: "CV-10",
        label: "El sagrario",
        text: "La Eucaristía se reserva «en un solo sagrario», en un lugar «verdaderamente noble», ante el que «ha de lucir constantemente una lámpara especial, con la que se indique y honre la presencia de Cristo».",
        sources: [
          {
            citations: ["CIC938"],
            label: "cann. 938 y 940",
          },
          {
            citations: ["CEC1379"],
            label: "Catecismo 1379",
          },
        ],
      },
      {
        id: "CV-11",
        label: "Adoración y procesiones",
        text: "Exposición del Santísimo (no durante la Misa) y, donde el obispo lo juzgue posible, procesión por las calles «sobre todo en la solemnidad del Cuerpo y Sangre de Cristo».",
        sources: [
          {
            citations: ["CIC941"],
            label: "cann. 941 y 944",
          },
          {
            citations: ["CEC1378"],
            label: "Catecismo 1378",
          },
          {
            citations: ["MF56"],
            label: "Mysterium fidei 56",
          },
        ],
      },
      {
        id: "CV-12",
        label: "Viático",
        text: "A quien está en peligro de muerte se le da la comunión como Viático, aunque haya comulgado ese mismo día.",
        sources: [
          {
            citations: ["CIC921"],
            label: "can. 921",
          },
        ],
      },
      {
        id: "CV-13",
        label: "Misa por vivos y difuntos",
        text: "«El sacerdote tiene facultad para aplicar la Misa por cualesquiera, tanto vivos como difuntos.»",
        sources: [
          {
            citations: ["CIC901"],
            label: "can. 901",
          },
          {
            citations: ["T22c2"],
            label: "Trento, ses. XXII, cap. 2",
          },
          {
            citations: ["CEC1371"],
            label: "Catecismo 1371",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Qué significa, para la Iglesia católica, que una enseñanza sea dogma, doctrina definitiva, magisterio auténtico o disciplina.",
    grades: {
      dogma: {
        label: "Dogma",
        sub: "de fe divina y católica",
        definition:
          "Se ha de creer con fe divina y católica todo aquello que se contiene en la palabra de Dios escrita o transmitida por tradición […] y que además es propuesto como revelado por Dios, ya sea por el magisterio solemne de la Iglesia, ya por su magisterio ordinario y universal",
        source: {
          citations: ["CIC750"],
          label: "Código de Derecho Canónico, can. 750 §1",
        },
      },
      definitive: {
        label: "Doctrina definitiva",
        definition:
          "Se han de aceptar y retener firmemente todas y cada una de las cosas sobre la doctrina de la fe y las costumbres propuestas de modo definitivo por el magisterio de la Iglesia",
        source: {
          citations: ["CIC750"],
          label: "Código de Derecho Canónico, can. 750 §2",
        },
      },
      magisterium: {
        label: "Magisterio auténtico",
        definition:
          "Se ha de prestar un asentimiento religioso del entendimiento y de la voluntad, sin que llegue a ser de fe, a la doctrina que el Sumo Pontífice o el Colegio de los Obispos, en el ejercicio de su magisterio auténtico, enseñan acerca de la fe y de las costumbres",
        source: {
          citations: ["CIC752"],
          label: "Código de Derecho Canónico, can. 752",
        },
      },
      discipline: {
        label: "Disciplina",
        definition:
          "Las decisiones magisteriales en materia de disciplina, aunque no estén garantizadas por el carisma de la infalibilidad, no están desprovistas de la asistencia divina y requieren la adhesión de los fieles.",
        source: {
          citations: ["DV17"],
          label: "Donum veritatis 17",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
