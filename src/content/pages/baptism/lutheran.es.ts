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
                text: "then we've got the specifics so we're going to delve into what are the sacraments more particularly well first we've got holy baptism the most foundational Sacrament so how was it done how are you baptized well we have really two things we've got the application of water so the water is applied to the person being baptized you don't do it yourself you are apz someone does it for you that's part of the nature of baptism it's it's that passive thing you know you're not doing it for yourself but it's being given to you because it is a Divine means of Grace it's it's a promise of God um so it is done with the application of water some traditions get very particular about exactly how you do it you have to dunk or you have to sprinkle or you have to pour we're okay with all of those scripture doesn't command one particular mode and and there are some examples I think of each of those in scripture which is precisely why people can AR AR so much about it um but we say it doesn't matter as long as it's applied to you and it's water so we don't baptize with you chocolate milk or something but uh so use water and the second is it has to have the invocation of the Triune name the words that Jesus instituted so these These are you know I baptize you in the name of the Father the Son and the Holy Spirit and so those are the words in Matthew 28 that Jesus delivers to the church so those are the words that we use so it has to have both of those elements the application of water and then the word of God coming in and with the the water to make it baptism so it's not merely pouring water on yourself or someone pouring water on you that constitutes baptism you're not baptized every time you take a take a shower or a bath or something okay then",
                lang: "en",
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
                text: "is to be baptized well let's look at some of the things that scripture says Matthew 28:19 tells us that baptism is for all nations this is part of the Great Commission that baptism and discipling is for all nations and what's significant about that is that this is a universal thing when we look at say the the Old Testament the old Covenant well there were benefit for other nations in terms of the Covenant God made with Israel the Covenant was really with particularly the nation of Israel so now baptism however is something that is broader it's it's for more people than the old Covenant was for uh and if the old Covenant was for Israelites and included infants there was no reason to think that infants would not be included now that it's become more Universal not less now it's for all nations it's for men and women unlike you know circumcision which was just for for men uh we also see that there is this practice of household baptisms acts 16:33 and I have a lot on this subject",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Mark.16.16"],
      text: "El Catecismo Menor cita este versículo como la promesa de salvación para quien cree y es bautizado (Catecismo Menor IV.7–8).",
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
                text: "what are its benefits so what does baptism do well the first point here and this is where a lot of debate is but I can't get into that too much here is that baptism is not man's work but it is God's work baptism is not a work of law it is not a command I am not fulfilling some kind of righteous Duty when I get baptized instead it is God's doing it is not works and I have a reference here to Titus Chapter 3 where Paul uses the phrase that is the washing of regeneration which is specifically set as distinct from Works baptism unites us to Christ it brings us into the reality of who Jesus is and what he has done for",
                lang: "en",
              },
              {
                speaker: "Jordan B. Cooper",
                work: "The Doctrine of Holy Baptism (Intro to Christian Theology 21)",
                outlet: "Dr. Jordan B Cooper, YouTube",
                date: "6 de julio de 2026",
                locator: "Minutos 55:20 a 56:06",
                url: "https://www.youtube.com/watch?v=lcRHfOBzPBM&t=3320s",
                text: "So this language is used throughout throughout scripture. And what I would say is I just don't see language in the New Testament anywhere that speaks about baptism as an act of human obedience. I think it's hard to come to that perspective just from the texts themselves, which seemed to me to speak far more like realistically about baptism. Baptism just does these things. Um, washing of regeneration. Paul says in Titus chapter 3, washing regeneration. Why are these two things tied together? Water and spirit. Washing regeneration. It's I think it's very difficult to say that all of this language really is not about baptism and water is just being used in some other way. I think if the apostles themselves would have had a different view of what baptism did, they would have been more careful in in making these distinctions. Um I just don't see I don't see Baptist preaching this way. You know, I don't see Baptist preaching using the kinds of language that scripture uses there. It would always be really heavily qualified even when they get to those to those kinds of texts.",
                lang: "en",
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
                text: "the Galatians text and that is from The Book of Romans chapter 6 and he says in verse three Paul writing again he says do you not know that as many of us were baptized into Christ Jesus were baptized into his death therefore we were buried with him through bapt ISM into death that just as Christ was raised from the dead by the glory of the father even so we also should walk in newness of life we are told here that we are baptized into Christ's death baptism unites us to Jesus it connects us to Christ and it connects us specifically to his saving death we are baptized into to his death and we are raised then to newness of life again there's no reason in the text to think that baptism means anything other than baptism Paul doesn't say Spirit baptism not water baptism he just says baptism and if we're going to read these texts together and just take them at face value as Paul understood them uh and as he wanted the Romans and the Galatians to understand these texts it's very clear baptism does save us the",
                lang: "en",
              },
              {
                speaker: "Jordan B. Cooper",
                work: "The Doctrine of Baptism Explained Quickly and Simply",
                outlet: "Dr. Jordan B Cooper, YouTube",
                date: "30 de diciembre de 2024",
                locator: "Minutos 2:17 a 3:28",
                url: "https://www.youtube.com/watch?v=sFXYH_xu5pA&t=137s",
                text: "as distinct from Works baptism unites us to Christ it brings us into the reality of who Jesus is and what he has done for us that's that subjective justification we were talking about that we are into the reality of Christ's own death and Resurrection as we are baptized we are united to him so Romans 6:3 it brings the Forgiveness of sins Acts 22:16 be baptized and wash away your sins in other words if you are baptized your sins are being washed away it gives the holy spirit this is in Acts 2: 38 at the end of Peter's sermon at at Pentecost I be baptized you'll receive the Forgiveness of sins and receive the gift of the Holy Spirit baptism saves there's that that word you know when somebody says you know are you saved if you've been baptized well you were saved according to St Peter 1 Peter 3:21 says baptism now saves you and he has a connection there to the Ark of the Covenant then we have uh that baptism gives spiritual life Colossians 2: 12-13 finally it regenerates or it makes you born again John 3:5 that you have to be born of water and the spirit as Jesus tells Nicodemus so that's what baptism does those are the benefits that baptism gives then we have the question well who is it for who",
                lang: "en",
              },
              {
                speaker: "Jordan B. Cooper",
                work: "The Doctrine of Holy Baptism (Intro to Christian Theology 21)",
                outlet: "Dr. Jordan B Cooper, YouTube",
                date: "6 de julio de 2026",
                locator: "Minutos 53:58 a 55:14",
                url: "https://www.youtube.com/watch?v=lcRHfOBzPBM&t=3238s",
                text: "Um, all right. So, those are the those are the various interpretations of that passage. But then you also have um passages like in Galatians where Paul talks about being baptized into Christ or clothed with Christ in baptism. Uh there, you know, Romans chapter 6, Paul talks about how we're buried with Christ in baptism. And these kinds of texts are all over the place in Paul. So they certainly seem to imply that baptism actually does things. That baptism actually buries us with Christ, unites us with his death, clothe us in Christ and his gifts. And so these passages are interpreted by some who reject a more sacramental view of baptism to say that well you know these passages are really not referring to water baptism. They are referring to something else a spirit baptism that's distinct from water baptism. And you know I would just say to that that that's just not addressed in the text. There's no distinction there at all. It just the texts just say baptism. And I think when they say baptism they probably just mean baptism. There's no clear differentiation between a spirit baptism and a water baptism in any of these texts. We also have texts like Acts chapter 238 where Peter says at Pentecost be baptized uh for the forgiveness of sins. Then then later, you know, we have the apostles saying in the book of Acts, be baptized and wash away your sins. To the the Philippian jailer, baptized, wash away your sins.",
                lang: "en",
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
    },
    {
      refs: ["Matt.23.2"],
      text: "La Confesión de Augsburgo lo cita para la eficacia del bautismo aun cuando el ministro es indigno (art. VIII.1–2).",
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
