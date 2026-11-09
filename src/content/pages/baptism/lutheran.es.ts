import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const baptismLutheran = {
  doctrine: "baptism",
  tradition: "lutheran",
  status: "draft",
  title: "La posición luterana",
  lede: "Cómo las confesiones luteranas entienden el bautismo, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan las confesiones luteranas sobre el bautismo, con el lugar que cada texto ocupa en el Libro de Concordia.",
    definition: {
      text: "Para las confesiones luteranas, el bautismo se define así: «Obra el perdón de los pecados, libra de la muerte y del diablo y da la salvación eterna a todos los que lo creen, como dicen las palabras y promesas de Dios».",
      grades: [
        {
          kind: "church",
          grade: "catechism",
          basis: "Catecismo Menor IV (1529)",
        },
      ],
      sources: [
        {
          citations: ["LSCIV_6"],
          label: "Catecismo Menor IV.6",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "el agua y la palabra",
        text: "El Catecismo Menor enseña: «El bautismo no es solamente agua común, sino el agua comprendida en el mandato de Dios y unida a la palabra de Dios».",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo Menor IV (1529)",
          },
        ],
        sources: [
          {
            citations: ["LSCIV_2"],
            label: "Catecismo Menor IV.2",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la gracia y los niños",
        text: "La Confesión de Augsburgo enseña, en su texto latino: «Sobre el bautismo enseñan que es necesario para la salvación, que por el bautismo se ofrece la gracia de Dios y que los niños deben ser bautizados, quienes, ofrecidos a Dios por el bautismo, son recibidos en la gracia de Dios». Y en su texto alemán: «Sobre el bautismo se enseña que es necesario y que por él se ofrece gracia; que también se debe bautizar a los niños, quienes mediante ese bautismo son entregados a Dios y le son agradables».",
        grades: [
          {
            kind: "church",
            grade: "augsburg",
            basis: "art. IX",
          },
        ],
        sources: [
          {
            citations: ["LACIX_1_2"],
            label: "Confesión de Augsburgo IX.1–2",
          },
          {
            citations: ["LACIX"],
            label: "Confesión de Augsburgo IX",
          },
        ],
      },
      {
        id: "QE-3",
        short: "la palabra y la fe",
        text: "El Catecismo Menor enseña: «Ciertamente no lo hace el agua, sino la palabra de Dios que está con el agua y junto a ella, y la fe que confía en esa palabra de Dios en el agua». Y continúa: «Pues sin la palabra de Dios el agua es agua común y no es bautismo; pero con la palabra de Dios es bautismo, es decir, un agua de vida llena de gracia y un baño del nuevo nacimiento en el Espíritu Santo».",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo Menor IV (1529)",
          },
        ],
        sources: [
          {
            citations: ["LSCIV_10"],
            label: "Catecismo Menor IV.10",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la obra de Dios",
        text: "El Catecismo Mayor enseña: «pero el bautismo no es obra nuestra, sino de Dios».",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo Mayor IV",
          },
        ],
        sources: [
          {
            citations: ["LLCIV_35"],
            label: "Catecismo Mayor IV.35",
          },
        ],
      },
      {
        id: "QE-5",
        short: "los niños y la promesa",
        text: "La Apología de la Confesión de Augsburgo enseña: «Pues es completamente cierto que la promesa de salvación pertenece también a los niños pequeños».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Apología IX (1531)",
          },
        ],
        sources: [
          {
            citations: ["LApIX_52"],
            label: "Apología IX.52",
          },
        ],
      },
      {
        id: "QE-6",
        short: "morir y resucitar cada día",
        text: "El Catecismo Menor enseña: «Significa que el viejo Adán en nosotros debe ser ahogado y morir, mediante contrición y arrepentimiento diarios, con todos los pecados y malos deseos; y que, a su vez, salga y resucite cada día un hombre nuevo que viva eternamente ante Dios en justicia y pureza».",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo Menor IV (1529)",
          },
        ],
        sources: [
          {
            citations: ["LSCIV_12"],
            label: "Catecismo Menor IV.12",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Las confesiones luteranas fundan el bautismo en la institución y el mandato de Dios: «El bautismo no es otra cosa que la palabra de Dios en el agua, mandada por su institución» {c:LSAIII_5_1|Esmalcalda III.5.1}.",
      "Y sostienen que la promesa de salvación alcanza también a los niños: «Pues es completamente cierto que la promesa de salvación pertenece también a los niños pequeños» {c:LApIX_52|Apología IX.52}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para las confesiones luteranas, en el bautismo obra Dios y no quien lo administra. El Catecismo Mayor dice: «Pues ser bautizado en el nombre de Dios es ser bautizado por Dios mismo, no por seres humanos» {c:LLCIV_10|Catecismo Mayor IV.10}.",
  },
  scriptureSubtitle: "Los pasajes que las confesiones luteranas citan sobre el bautismo, y cómo los leen.",
  scripture: [
    {
      refs: ["Matt.28.19"],
      text: "El Catecismo Menor funda el bautismo en la institución de Cristo y en el nombre del Padre, del Hijo y del Espíritu Santo (Catecismo Menor IV.3–4).",
      apologists: {
        arguments: [
          {
            title:
              "El bautismo necesita agua y el nombre trinitario, las palabras que Jesús instituyó en Mateo 28; el bautismo se recibe, no se hace uno mismo",
            quotes: [
              {
                speaker: "Jordan B. Cooper",
                work: "The Doctrine of Baptism Explained Quickly and Simply",
                outlet: "Dr. Jordan B Cooper, YouTube",
                date: "30 de diciembre de 2024",
                locator: "Minutos 0:08 a 1:34",
                url: "https://www.youtube.com/watch?v=sFXYH_xu5pA&t=8s",
                text: "entonces tenemos los detalles, así que vamos a profundizar en cuáles son los sacramentos, más en particular. Bueno, primero tenemos el santo bautismo, el sacramento más fundamental. ¿Cómo se hace? ¿Cómo te bautizan? Bueno, tenemos realmente dos cosas. Tenemos la aplicación de agua: el agua se aplica a la persona que va a ser bautizada. No lo haces tú mismo, eres apz alguien lo hace por ti; eso es parte de la naturaleza del bautismo, es algo pasivo, ¿sabes? No lo haces por ti mismo, sino que se te da, porque es un medio divino de gracia, es una promesa de Dios. Así que se hace con la aplicación de agua. Algunas tradiciones se ponen muy quisquillosas con exactamente cómo se hace: tienes que sumergir, o tienes que rociar, o tienes que derramar. Nosotros estamos bien con todas esas formas; la Escritura no manda un modo particular, y hay ejemplos de cada uno en la Escritura, que es precisamente por lo que la gente puede AR AR tanto al respecto, eh. Pero decimos que no importa, siempre que se aplique a ti y sea agua. Así que no bautizamos con leche chocolatada ni nada por el estilo, así que usa agua. Y lo segundo es que tiene que tener la invocación del Nombre trino, las palabras que instituyó Jesús. Estas son: «Yo te bautizo en el nombre del Padre, del Hijo y del Espíritu Santo», y esas son las palabras de Mateo 28 que Jesús entrega a la iglesia, así que esas son las palabras que usamos. Así que tiene que tener los dos elementos: la aplicación de agua y luego la palabra de Dios que viene junto con el agua para hacerla bautismo. No es simplemente echarse agua uno mismo, o que alguien te eche agua encima, lo que constituye el bautismo; no te bautizas cada vez que te duchas o te bañas o algo así, ¿ok?",
                original:
                  "then we've got the specifics so we're going to delve into what are the sacraments more particularly well first we've got holy baptism the most foundational Sacrament so how was it done how are you baptized well we have really two things we've got the application of water so the water is applied to the person being baptized you don't do it yourself you are apz someone does it for you that's part of the nature of baptism it's it's that passive thing you know you're not doing it for yourself but it's being given to you because it is a Divine means of Grace it's it's a promise of God um so it is done with the application of water some traditions get very particular about exactly how you do it you have to dunk or you have to sprinkle or you have to pour we're okay with all of those scripture doesn't command one particular mode and and there are some examples I think of each of those in scripture which is precisely why people can AR AR so much about it um but we say it doesn't matter as long as it's applied to you and it's water so we don't baptize with you chocolate milk or something but uh so use water and the second is it has to have the invocation of the Triune name the words that Jesus instituted so these These are you know I baptize you in the name of the Father the Son and the Holy Spirit and so those are the words in Matthew 28 that Jesus delivers to the church so those are the words that we use so it has to have both of those elements the application of water and then the word of God coming in and with the the water to make it baptism so it's not merely pouring water on yourself or someone pouring water on you that constitutes baptism you're not baptized every time you take a take a shower or a bath or something okay then",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "El bautismo es para todas las naciones (Mateo 28:19), más amplio que la antigua alianza, así que se incluye a los niños pequeños",
            quotes: [
              {
                speaker: "Jordan B. Cooper",
                work: "The Doctrine of Baptism Explained Quickly and Simply",
                outlet: "Dr. Jordan B Cooper, YouTube",
                date: "30 de diciembre de 2024",
                locator: "Minutos 3:37 a 4:31",
                url: "https://www.youtube.com/watch?v=sFXYH_xu5pA&t=217s",
                text: "debe ser bautizado. Veamos algunas de las cosas que dice la Escritura. Mateo 28:19 nos dice que el bautismo es para todas las naciones. Esto es parte de la Gran Comisión: que bautizar y hacer discípulos es para todas las naciones. Y lo significativo de eso es que es algo universal. Si miramos, por ejemplo, el Antiguo Testamento, el antiguo pacto, bueno, había beneficios para otras naciones en términos del pacto que Dios hizo con Israel; pero el pacto era realmente con la nación de Israel en particular. Ahora bien, el bautismo es algo más amplio: es para más personas que el antiguo pacto. Y si el antiguo pacto era para los israelitas e incluía a los infantes, no había razón para pensar que los infantes no estarían incluidos. Ahora que se ha vuelto más universal, no menos, es para todas las naciones, es para hombres y mujeres, a diferencia de la circuncisión, que era solo para hombres. También vemos que hay una práctica de bautismos de casas, Hechos 16:33, y tengo bastante que decir sobre este tema.",
                original:
                  "is to be baptized well let's look at some of the things that scripture says Matthew 28:19 tells us that baptism is for all nations this is part of the Great Commission that baptism and discipling is for all nations and what's significant about that is that this is a universal thing when we look at say the the Old Testament the old Covenant well there were benefit for other nations in terms of the Covenant God made with Israel the Covenant was really with particularly the nation of Israel so now baptism however is something that is broader it's it's for more people than the old Covenant was for uh and if the old Covenant was for Israelites and included infants there was no reason to think that infants would not be included now that it's become more Universal not less now it's for all nations it's for men and women unlike you know circumcision which was just for for men uh we also see that there is this practice of household baptisms acts 16:33 and I have a lot on this subject",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "El alcance de «todas las naciones» incluye a los niños",
            quotes: [
              {
                speaker: "Rev. Matthew Zickler",
                work: "Concerning Rebaptism",
                outlet: "Lutheran Reformation",
                date: "4 de mayo de 2017",
                locator: "Párrafo que empieza «Some might argue»",
                url: "https://lutheranreformation.org/theology/concerning-rebaptism/",
                text: "Algunos podrían argumentar que esto no prueba nada, porque Jesús no mandó específicamente bautizar a los niños. La respuesta de Lutero: “Tampoco ha mandado específicamente bautizar a los adultos, ni a los hombres ni a las mujeres, así que más vale que no bauticemos a nadie.”[6] Jesús no ha especificado ningún tipo particular de persona para bautizar. Dijo “todas las naciones”. Así que, o podemos bautizar a los niños, porque son parte de eso, o si la lógica excluye a los niños, entonces no podemos bautizar a nadie.",
                original:
                  "Some might argue that this doesn’t prove anything because Jesus didn’t specifically command the baptism of children. Luther’s response: “Neither has he specifically commanded the baptism of adults, nor of men or of women, so we had better not baptize anybody.”[6] Jesus hasn’t specified any particular sort of person to baptize. He said, “all nations.” So, either we can baptize children, as a they are a part of that, or if logic precludes children, then we can baptize no one.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Un solo nombre divino, tres personas",
            quotes: [
              {
                speaker: "T. R. Halvorson",
                work: "Vicarious Satisfaction in Liturgy: Invocation",
                outlet: "Steadfast Lutherans",
                date: "9 de enero de 2023",
                locator: "Párrafo que empieza «Jesus said, “Go therefore»",
                url: "https://steadfastlutherans.org/blog/2023/01/vicarious-satisfaction-in-liturgy-invocation/",
                text: "Jesús dijo: “Id, pues, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.” (Mateo 28:19) Esto revela la Trinidad. El nombre de Dios es singular: nombre, no nombres. Las personas son tres: Padre, Hijo y Espíritu Santo. Cristo revela este nombre de Dios en su encargo de bautizar en el Nombre. Por sí solo, esto le da a la Invocación un significado trinitario y bautismal.",
                original:
                  "Jesus said, “Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.” (Matthew 28:19) This reveals the Trinity. The name of God is singular: name, not names. The persons are three: Father, Son, and Holy Spirit. Christ reveals this name of God in his commission to baptize into the Name. All by itself, this gives the Invocation trinitarian and baptismal significance.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Mark.16.16"],
      text: "El Catecismo Menor cita este versículo como la promesa de salvación para quien cree y es bautizado (Catecismo Menor IV.7–8).",
      apologists: {
        arguments: [
          {
            title: "El bautismo y Jesús no son objetos de fe que compitan entre sí",
            quotes: [
              {
                speaker: "Pastor Andrew Preus",
                work: "Proposed Catechism Explanation Revision: Baptism",
                outlet: "Steadfast Lutherans",
                date: "13 de octubre de 2016",
                locator: "Párrafo que empieza «The connection between faith and baptism»",
                url: "https://steadfastlutherans.org/blog/2016/10/proposed-catechism-explanation-revision-baptism/",
                text: "La conexión entre fe y bautismo también se trata en la pregunta bajo el poder del bautismo: “¿La fe de un cristiano está en el Bautismo o en Jesús?” Podemos señalar en la respuesta a esto que el objeto de “creer” en Marcos 16:16 es el bautismo. Por otra parte, es una muy buena pregunta para hacer, y se responde bien que “Bautismo o Jesús” es una falsa dicotomía.",
                original:
                  "The connection between faith and baptism is also treated in the question under the power of baptism, “Is a Christian’s faith in Baptism or in Jesus?” We can point out in the answer to this that the object of “believe” in Mark 16:16 is baptism. This otherwise is a very good question to ask, and it is answered well that “Baptism or Jesus” is a false dichotomy.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Titus.3.5-Titus.3.7"],
      text: "El Catecismo Menor lo cita para el lavamiento de la regeneración y de la renovación (Catecismo Menor IV.10).",
      apologists: {
        arguments: [
          {
            title: "«El lavado de la regeneración» une agua y Espíritu; el lenguaje trata sobre el bautismo",
            quotes: [
              {
                speaker: "Jordan B. Cooper",
                work: "The Doctrine of Baptism Explained Quickly and Simply",
                outlet: "Dr. Jordan B Cooper, YouTube",
                date: "30 de diciembre de 2024",
                locator: "Minutos 1:43 a 2:17",
                url: "https://www.youtube.com/watch?v=sFXYH_xu5pA&t=103s",
                text: "cuáles son sus beneficios. Entonces, ¿qué hace el bautismo? Bueno, el primer punto aquí, y es donde hay mucho debate, pero no puedo entrar mucho en eso ahora, es que el bautismo no es obra del hombre sino obra de Dios. El bautismo no es una obra de la ley; no es un mandamiento. No estoy cumpliendo algún tipo de deber justo cuando me bautizo; en cambio, es Dios quien lo hace. No son obras. Y tengo una referencia aquí a Tito, capítulo 3, donde Pablo usa la frase «el lavamiento de la regeneración», que está expresamente puesta como distinta de las obras. El bautismo nos une a Cristo; nos introduce en la realidad de quién es Jesús y de lo que ha hecho por",
                original:
                  "what are its benefits so what does baptism do well the first point here and this is where a lot of debate is but I can't get into that too much here is that baptism is not man's work but it is God's work baptism is not a work of law it is not a command I am not fulfilling some kind of righteous Duty when I get baptized instead it is God's doing it is not works and I have a reference here to Titus Chapter 3 where Paul uses the phrase that is the washing of regeneration which is specifically set as distinct from Works baptism unites us to Christ it brings us into the reality of who Jesus is and what he has done for",
                translation: "ai-assisted",
              },
              {
                speaker: "Jordan B. Cooper",
                work: "The Doctrine of Holy Baptism (Intro to Christian Theology 21)",
                outlet: "Dr. Jordan B Cooper, YouTube",
                date: "6 de julio de 2026",
                locator: "Minutos 55:20 a 56:06",
                url: "https://www.youtube.com/watch?v=lcRHfOBzPBM&t=3320s",
                text: "Así que este lenguaje se usa en toda la Escritura. Y lo que diría es que simplemente no veo en ninguna parte del Nuevo Testamento un lenguaje que hable del bautismo como un acto de obediencia humana. Creo que es difícil llegar a esa perspectiva solo a partir de los textos mismos, que me parecen hablar mucho más realistamente del bautismo. El bautismo simplemente hace estas cosas. Eh, «lavamiento de regeneración». Pablo dice en Tito, capítulo 3: lavamiento de regeneración. ¿Por qué se unen estas dos cosas? Agua y Espíritu. Lavamiento de regeneración. Creo que es muy difícil decir que todo este lenguaje en realidad no trata sobre el bautismo y que el agua solo se está usando de otra manera. Creo que si los apóstoles mismos hubieran tenido una visión distinta de lo que hace el bautismo, habrían sido más cuidadosos al hacer estas distinciones. Eh, simplemente no veo, no veo que los bautistas prediquen así. Ustedes saben, no veo que la predicación bautista use el tipo de lenguaje que usa la Escritura allí. Siempre tendría que estar muy calificado, incluso cuando llegan a esos tipos de textos.",
                original:
                  "So this language is used throughout throughout scripture. And what I would say is I just don't see language in the New Testament anywhere that speaks about baptism as an act of human obedience. I think it's hard to come to that perspective just from the texts themselves, which seemed to me to speak far more like realistically about baptism. Baptism just does these things. Um, washing of regeneration. Paul says in Titus chapter 3, washing regeneration. Why are these two things tied together? Water and spirit. Washing regeneration. It's I think it's very difficult to say that all of this language really is not about baptism and water is just being used in some other way. I think if the apostles themselves would have had a different view of what baptism did, they would have been more careful in in making these distinctions. Um I just don't see I don't see Baptist preaching this way. You know, I don't see Baptist preaching using the kinds of language that scripture uses there. It would always be really heavily qualified even when they get to those to those kinds of texts.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Rom.6.4"],
      text: "El Catecismo Menor lo cita para la vida nueva que el bautismo significa cada día (Catecismo Menor IV.13–14).",
      apologists: {
        arguments: [
          {
            title:
              "El bautismo une a los bautizados con la muerte de Cristo y los resucita a una vida nueva; aquí «bautismo» significa bautismo",
            quotes: [
              {
                speaker: "Jordan B. Cooper",
                work: "Five Scriptural Proofs that Baptism Saves",
                outlet: "Dr. Jordan B Cooper, YouTube",
                date: "5 de abril de 2017",
                locator: "Minutos 5:12 a 6:11",
                url: "https://www.youtube.com/watch?v=9yN2plB-Bb8&t=312s",
                text: "el texto de Gálatas, y ese es el de la Carta a los Romanos, capítulo 6, y dice en el versículo 3. Pablo, escribiendo de nuevo, dice: «¿No saben que todos los que fuimos bautizados en Cristo Jesús fuimos bautizados en su muerte? Por eso fuimos sepultados con él mediante el bautismo en la muerte, para que, así como Cristo fue levantado de entre los muertos por la gloria del Padre, también nosotros andemos en vida nueva». Aquí se nos dice que fuimos bautizados en su muerte. El bautismo nos une a Jesús, nos conecta con Cristo y nos conecta específicamente con su muerte salvadora. Fuimos bautizados en su muerte y luego somos levantados a una vida nueva. De nuevo, no hay razón en el texto para pensar que el bautismo signifique algo distinto de bautismo. Pablo no dice bautismo del Espíritu, no bautismo de agua; simplemente dice bautismo. Y si vamos a leer estos textos juntos y tomarlos al pie de la letra, tal como los entendió Pablo y como quería que los romanos y los gálatas los entendieran, es muy claro que el bautismo sí nos salva, el",
                original:
                  "the Galatians text and that is from The Book of Romans chapter 6 and he says in verse three Paul writing again he says do you not know that as many of us were baptized into Christ Jesus were baptized into his death therefore we were buried with him through bapt ISM into death that just as Christ was raised from the dead by the glory of the father even so we also should walk in newness of life we are told here that we are baptized into Christ's death baptism unites us to Jesus it connects us to Christ and it connects us specifically to his saving death we are baptized into to his death and we are raised then to newness of life again there's no reason in the text to think that baptism means anything other than baptism Paul doesn't say Spirit baptism not water baptism he just says baptism and if we're going to read these texts together and just take them at face value as Paul understood them uh and as he wanted the Romans and the Galatians to understand these texts it's very clear baptism does save us the",
                translation: "ai-assisted",
              },
              {
                speaker: "Jordan B. Cooper",
                work: "The Doctrine of Baptism Explained Quickly and Simply",
                outlet: "Dr. Jordan B Cooper, YouTube",
                date: "30 de diciembre de 2024",
                locator: "Minutos 2:17 a 3:28",
                url: "https://www.youtube.com/watch?v=sFXYH_xu5pA&t=137s",
                text: "a diferencia de las obras: el bautismo nos une a Cristo, nos lleva a la realidad de quién es Jesús y de lo que él ha hecho por nosotros. Esa es la justificación subjetiva de la que hablábamos: entramos en la realidad de la propia muerte y resurrección de Cristo al ser bautizados, y somos unidos a él. Así que Romanos 6:3 dice que trae el perdón de los pecados. Hechos 22:16: «Bautízate y lava tus pecados», es decir, si eres bautizado, tus pecados están siendo lavados. Da el Espíritu Santo; esto está en Hechos 2:38, al final del sermón de Pedro en Pentecostés: «Háganse bautizar, y recibirán el perdón de los pecados y el don del Espíritu Santo». El bautismo salva; ahí está esa palabra, ustedes saben, cuando alguien pregunta: ¿estás salvado? Si te has bautizado, entonces estabas salvado, según san Pedro. 1 Pedro 3:21 dice que el bautismo ahora te salva, y ahí hace una conexión con el arca de la alianza. Después tenemos que el bautismo da vida espiritual: Colosenses 2:12-13. Finalmente, regenera, o te hace nacer de nuevo: Juan 3:5, que hay que nacer de agua y del Espíritu, como Jesús le dice a Nicodemo. Eso es lo que hace el bautismo; esos son los beneficios que da. Entonces tenemos la pregunta: bueno, ¿para quién es? ¿Quién",
                original:
                  "as distinct from Works baptism unites us to Christ it brings us into the reality of who Jesus is and what he has done for us that's that subjective justification we were talking about that we are into the reality of Christ's own death and Resurrection as we are baptized we are united to him so Romans 6:3 it brings the Forgiveness of sins Acts 22:16 be baptized and wash away your sins in other words if you are baptized your sins are being washed away it gives the holy spirit this is in Acts 2: 38 at the end of Peter's sermon at at Pentecost I be baptized you'll receive the Forgiveness of sins and receive the gift of the Holy Spirit baptism saves there's that that word you know when somebody says you know are you saved if you've been baptized well you were saved according to St Peter 1 Peter 3:21 says baptism now saves you and he has a connection there to the Ark of the Covenant then we have uh that baptism gives spiritual life Colossians 2: 12-13 finally it regenerates or it makes you born again John 3:5 that you have to be born of water and the spirit as Jesus tells Nicodemus so that's what baptism does those are the benefits that baptism gives then we have the question well who is it for who",
                translation: "ai-assisted",
              },
              {
                speaker: "Jordan B. Cooper",
                work: "The Doctrine of Holy Baptism (Intro to Christian Theology 21)",
                outlet: "Dr. Jordan B Cooper, YouTube",
                date: "6 de julio de 2026",
                locator: "Minutos 53:58 a 55:14",
                url: "https://www.youtube.com/watch?v=lcRHfOBzPBM&t=3238s",
                text: "Eh, bien. Entonces, esas son las distintas interpretaciones de ese pasaje. Pero además hay pasajes como el de Gálatas, donde Pablo habla de ser bautizados en Cristo o de ser revestidos de Cristo en el bautismo. Allí, y en Romanos, capítulo 6, Pablo dice que somos sepultados con Cristo en el bautismo. Y este tipo de textos aparece por todas partes en Pablo. Así que ciertamente parecen implicar que el bautismo realmente hace algo: que el bautismo de verdad nos sepulta con Cristo, nos une a su muerte, nos viste con Cristo y con sus dones. Y algunos que rechazan una visión más sacramental del bautismo interpretan estos pasajes diciendo: bueno, en realidad estos pasajes no se refieren al bautismo con agua. Se refieren a otra cosa, un bautismo del Espíritu, distinto del bautismo con agua. Y, saben, yo solo diría a eso que el texto no lo dice, no hay ninguna distinción ahí. Los textos simplemente dicen bautismo, y creo que cuando dicen bautismo probablemente solo quieren decir bautismo. En ninguno de estos textos hay una diferenciación clara entre un bautismo del Espíritu y un bautismo con agua. También tenemos textos como Hechos capítulo 238, donde Pedro dice en Pentecostés: sean bautizados para el perdón de los pecados. Luego, más adelante, tenemos a los apóstoles diciendo en el libro de los Hechos: bautízate y lava tus pecados. Al carcelero de Filipos: bautizado, lava tus pecados.",
                original:
                  "Um, all right. So, those are the those are the various interpretations of that passage. But then you also have um passages like in Galatians where Paul talks about being baptized into Christ or clothed with Christ in baptism. Uh there, you know, Romans chapter 6, Paul talks about how we're buried with Christ in baptism. And these kinds of texts are all over the place in Paul. So they certainly seem to imply that baptism actually does things. That baptism actually buries us with Christ, unites us with his death, clothe us in Christ and his gifts. And so these passages are interpreted by some who reject a more sacramental view of baptism to say that well you know these passages are really not referring to water baptism. They are referring to something else a spirit baptism that's distinct from water baptism. And you know I would just say to that that that's just not addressed in the text. There's no distinction there at all. It just the texts just say baptism. And I think when they say baptism they probably just mean baptism. There's no clear differentiation between a spirit baptism and a water baptism in any of these texts. We also have texts like Acts chapter 238 where Peter says at Pentecost be baptized uh for the forgiveness of sins. Then then later, you know, we have the apostles saying in the book of Acts, be baptized and wash away your sins. To the the Philippian jailer, baptized, wash away your sins.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "El bautismo introduce al bautizado en la muerte de Cristo y promete la resurrección",
            quotes: [
              {
                speaker: "Pr. Mark Surburg",
                work: "Great Stuff — The surprising history of Romans 6 and baptism in the early Church",
                outlet: "Steadfast Lutherans",
                date: "14 de junio de 2015",
                locator: "Párrafo que empieza «Paul asks them if they’ve forgotten»",
                url: "https://steadfastlutherans.org/blog/2015/06/great-stuff-the-surprising-history-of-romans-6-and-baptism-in-the-early-church/",
                text: "Pablo les pregunta si se han olvidado de que cuantos han sido bautizados en Cristo Jesús han sido bautizados en su muerte (6:3).[2] Su pregunta se basa en el supuesto de que esto es algo que los romanos sí saben. Presume que entienden que en el bautismo “el cristiano no se identifica meramente con el ‘Cristo moribundo’, que ha ganado la victoria sobre el pecado, sino que es introducido en el acto mismo por el cual esa victoria se gana”.[3] Pablo continúa diciendo en 6:4 que el bautismo es el medio por el cual han participado en la muerte de Cristo; de hecho, fueron sepultados con Cristo en la muerte. La afirmación de 6:5 añade entonces que si han participado en la muerte de Cristo mediante el bautismo, ciertamente también participarán en su resurrección en el Último Día.",
                original:
                  "Paul asks them if they’ve forgotten that as many as have been baptized into Christ Jesus have been baptized into his death (6:3).[2] His question is based on the assumption that this is something the Romans do know. He presumes that they understand that in baptism “the Christian is not merely identified with the ‘dying Christ,’ who has won the victory over sin, but is introduced into the very act by which that victory is won.”[3] Paul goes on to say in 6:4 that baptism is the means through which they have shared in Christ’s death – in fact they were buried with Christ into death. The statement in 6:5 then adds that if they have shared in Christ’s death through baptism, they will certainly also share in his resurrection on the Last Day.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.28.19"],
      text: "La Apología aplica el mandato de bautizar también a los niños (Apología IX.52).",
    },
    {
      refs: ["Eph.5.26"],
      text: "Los Artículos de Esmalcalda lo citan con la expresión «lavacrum in verbo» (Artículos de Esmalcalda III.5.1).",
    },
    {
      refs: ["Eph.4.5-Eph.4.6"],
      text: "La Confesión de Augsburgo lo cita para la unidad de la fe y del bautismo (art. VII).",
      apologists: {
        arguments: [
          {
            title: "Las ceremonias pueden cambiar mientras el bautismo permanece igual",
            quotes: [
              {
                speaker: "Rev. Dr. Mark Birkholz",
                work: "Luther’s Baptismal Rites",
                outlet: "Lutheran Reformation",
                date: "11 de noviembre de 2017",
                locator: "Párrafo que empieza «In our day»",
                url: "https://lutheranreformation.org/worship/luthers-baptismal-rites/",
                text: "En nuestros días, algunas de estas prácticas han regresado (p. ej., la vela bautismal). Se han añadido otras nuevas (p. ej., la bienvenida por parte de la congregación). En el tiempo de Lutero fue necesario reducir un poco las ceremonias, porque distraían del bautismo mismo. Lutero consideró necesario enfatizar que el agua y la Palabra de Dios eran lo principal en el rito bautismal, reduciendo la cantidad de ceremonias. En algunos lugares se ha visto que las ceremonias adicionales son útiles para enseñar y enfatizar lo que sucede en el bautismo. “Cada generación recorta un poco, agrega un poco (el elogio nunca termina); pero el Bautismo en sí permanece siempre igual: ‘un Señor, una fe, un bautismo’ (Ef 4:5).”[13]",
                original:
                  "In our day, some of these practices have come back (e.g. the baptismal candle). Other new ones have been added (e.g. the welcome by the congregation). In Luther’s day it was necessary to pare back the ceremonies a bit, as they were distracting from the baptism itself. Luther found it necessary to emphasize that the water and the Word of God were the main thing in the baptismal rite by reducing the number of ceremonies. In some places the additional ceremonies have been found to be helpful to teach and emphasize what is happening in baptism. “Each generation trims a little, adds a little (extolling is never finished); but always the actual Baptism itself remains the same: ‘one Lord, one faith, one baptism’ (Eph 4:5).”[13]",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Un solo Señor y un solo bautismo unen a la iglesia",
            quotes: [
              {
                speaker: "Pastor Rolf Preus",
                work: "Seventeenth Sunday after Trinity – The True Unity of the Church",
                outlet: "Steadfast Lutherans",
                date: "19 de septiembre de 2018",
                locator: "Párrafo que empieza «Let us take a closer look»",
                url: "https://steadfastlutherans.org/blog/2018/09/seventeenth-sunday-after-trinity-the-true-unity-of-the-church/",
                text: "Veamos más de cerca el texto que tenemos delante hoy. San Pablo tiene una lista de siete unos. Tres de estos unos se refieren a las tres personas de la Santísima Trinidad. Hay un Espíritu. Hay un Señor, es decir, un Señor Jesús. Hay un Dios y Padre. Dios es uno. Las tres personas distintas no son tres dioses diferentes. Hay un solo Dios y solo uno, como confesaba el pueblo de Dios en el Antiguo Testamento: “Oye, Israel: El Señor nuestro Dios, el Señor es uno.” Confesamos en el Credo Atanasiano:\n\nHay un solo bautismo. No hay un bautismo de agua por un lado y un bautismo del Espíritu por el otro. No, el bautismo de agua es el bautismo del Espíritu Santo.",
                original:
                  "Let us take a closer look at the text before us today. St. Paul has a list of seven ones. Three of these ones refer to the three persons of the Holy Trinity. There is one Spirit. There is one Lord, that is, one Lord Jesus. There is one God and Father. God is one. The three distinct persons are not three different gods. There is one God and only one God as God’s people during the Old Testament confessed, “Hear O Israel, the LORD our God, the LORD is one!” We confess in the Athanasian Creed:\n\nThere is but one baptism. There isn’t a baptism of water on the one hand and a baptism of the Spirit on the other. No, the baptism of water is the baptism of the Holy Spirit.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.23.2"],
      text: "La Confesión de Augsburgo lo cita para la eficacia del bautismo aun cuando el ministro es indigno (art. VIII.1–2).",
      apologists: {
        arguments: [
          {
            title: "La eficacia de la Palabra y de los sacramentos no depende de la santidad del ministro",
            quotes: [
              {
                speaker: "Dr. Paul Edmon",
                work: "A Laymen’s Commentary on the Augsburg Confession: What the Church Is",
                outlet: "Steadfast Lutherans",
                date: "3 de octubre de 2018",
                locator: "Párrafo que empieza «We even have pastors who are hypocrites»",
                url: "https://steadfastlutherans.org/blog/2018/10/a-laymens-commentary-on-the-augsburg-confession-what-the-church-is/",
                text: "Incluso tenemos pastores que son hipócritas. En el día de Jesús, a pesar de que los escribas, fariseos y sacerdotes eran hipócritas, los sacrificios que ellos administraban y la Palabra que ellos predicaban seguían siendo eficaces. Lo mismo ocurre con los pastores de hoy que son hipócritas. Los sacramentos y la Palabra son eficaces por la Palabra de Dios, no por la santidad del pastor (Mateo 23).",
                original:
                  "We even have pastors who are hypocrites. In Jesus’s day in spite of the fact that the Scribes, Pharisees, and Priests were hypocrites the sacrifices administered by them and the Word preached by them was still efficacious. Same with pastors today who are hypocrites. The Sacraments and the Word are efficacious because of God’s Word not because of the sanctity of the pastor (Matthew 23).",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Mark.16.16"],
      text: "El Catecismo Mayor lo cita para la fe que recibe el tesoro prometido (Catecismo Mayor IV.33–34).",
    },
  ],
  passages: {
    title: "Los pasajes de la posición luterana",
    lede: "Los versículos que la tradición luterana cita sobre el bautismo, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la tradición luterana.",
    apologistsLabel: "Cómo lo defienden los apologistas luteranos.",
  },
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
      "Para las confesiones luteranas, el padre de familia enseña el bautismo a los de su casa: el Catecismo Menor dice que debe hacerlo «con sencillez» {c:LSCIV|Catecismo Menor IV}.",
      "El bautismo no se repite: «Por eso el bautismo permanece para siempre» {c:LLCIV_77|Catecismo Mayor IV.77}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "El agua con la palabra",
        text: "El bautismo es agua unida al mandato y a la palabra de Dios.",
        sources: [
          {
            citations: ["LSCIV_2"],
            label: "Catecismo Menor IV.2",
          },
        ],
      },
      {
        id: "CV-2",
        label: "El nombre",
        text: "Se bautiza en el nombre del Padre, del Hijo y del Espíritu Santo.",
        sources: [
          {
            citations: ["LSCIV_4"],
            label: "Catecismo Menor IV.4",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Los niños",
        text: "Se bautiza a los niños: la gracia y la promesa no se les niegan por la edad.",
        sources: [
          {
            citations: ["LACIX"],
            label: "Confesión de Augsburgo IX",
          },
          {
            citations: ["LApIX_52"],
            label: "Apología IX.52",
          },
        ],
      },
      {
        id: "CV-4",
        label: "La fe y la oración",
        text: "Se lleva a los niños con la esperanza y la oración de que Dios les dé fe.",
        sources: [
          {
            citations: ["LLCIV_57"],
            label: "Catecismo Mayor IV.57",
          },
        ],
      },
      {
        id: "CV-5",
        label: "La vida diaria",
        text: "La contrición, el arrepentimiento y la vida nueva se viven cada día.",
        sources: [
          {
            citations: ["LSCIV_12"],
            label: "Catecismo Menor IV.12",
          },
        ],
      },
      {
        id: "CV-6",
        label: "Volver al bautismo",
        text: "Tras el pecado se vuelve al bautismo, no se busca otro lavado.",
        sources: [
          {
            citations: ["LLCIV_77_79"],
            label: "Catecismo Mayor IV.77–79",
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
