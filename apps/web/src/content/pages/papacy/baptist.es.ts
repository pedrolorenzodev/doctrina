import type { TraditionPage } from "@doctrina/core/model/page";
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
      refs: ["Matt.16.13-Matt.16.20"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar. Segunda Confesión de Londres (1689), 26.3 nota (f) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] nevertheless Christ always hath had, and ever shall have a Kingdome, in this world, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
      apologists: {
        arguments: [
          {
            title:
              "Ortlund sostiene que la roca es Pedro en su confesión de Cristo (la última opinión de Agustín) y que la autoridad para gobernar se dio a los apóstoles en conjunto; Mateo 18:18 se cita en el primer bloque para ese último punto (el segundo dice «dos capítulos después» sin versículo)",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: 'Augustine on the "Rock" of Matthew 16 (This Will Surprise You)',
                outlet: "Gavin Ortlund, YouTube",
                date: "18 de diciembre de 2024",
                locator: "Minutos 0:00 a 11:38",
                url: "https://www.youtube.com/watch?v=Mslw0lS1ZLQ&t=0s",
                text: "Quizá el pasaje bíblico más importante que aparece en las discusiones sobre el papado es Mateo 16, donde Jesús le dice a Pedro: tú eres Pedro, y sobre esta roca edificaré mi iglesia, y le da las llaves para atar y desatar. Pueden leer este pasaje en la pantalla ahora mismo. Hay muchísimo en este pasaje; se han escrito bibliotecas enteras sobre este texto tan importante. Pero una pregunta que podemos plantear es esta: ¿se destaca aquí a Pedro, o se le dan responsabilidades que en última instancia comparte con el resto de los apóstoles? Podrías decir: eh, ¿Pedro exclusivamente frente a Pedro representativamente? Bien, esas ni siquiera son las únicas opciones, pero es una distinción que podemos señalar y trabajar un poco en este video. Y la razón por la que no es una pregunta terca ni algo así, la razón por la que es una pregunta natural y totalmente legítima, es triple. Primero, las responsabilidades que se mencionan aquí en Mateo 16, atar y desatar, con referencia a la tierra y al cielo, se reiteran a todos los discípulos apenas dos capítulos después, en Mateo 18:18. Así que eso plantea la pregunta: espera un momento, ¿es solo Pedro, o son todos los discípulos? Eso parece cierto en el Nuevo Testamento en general, donde las responsabilidades que aquí se vislumbran generalmente aparecen compartidas conjuntamente entre los apóstoles, como en Juan 20. Una segunda razón es que Pedro con frecuencia es el portavoz de los discípulos; incluso aquí en Mateo 16, por ejemplo, Pedro responde a la pregunta de Jesús en el versículo 15, que se dirige a todos los discípulos; la palabra ustedes del versículo 15 está en plural. Una tercera razón es que esto llega justo después no de que a Pedro se le dé un oficio específico (ya lleva bastante tiempo siendo discípulo), sino justo después de su confesión de la identidad de Cristo. Así que el contexto de este pasaje es esa confesión que él hace, y eso plantea la pregunta de cuál es la relación entre la confesión de Pedro sobre Jesús en los versículos 16 y 17, que ven aquí en azul, y lo que ven en rojo, que es la confesión de Jesús a Pedro en los versículos 18 y 19. Eso no resuelve nada, pero hace que la pregunta sea legítima: ¿se le está dando a Pedro aquí una especie de supremacía única que en última instancia lo pone en autoridad sobre los otros apóstoles en algún sentido, o las responsabilidades que se le dan aquí las comparten en última instancia los demás apóstoles? ¿Es Pedro el jefe, o el primero entre iguales? ¿Es Pedro exclusivamente, o Pedro representativamente, o algo más? Bien, es una pregunta enorme, pero una de las cosas que podemos hacer para tener algo de tracción es ver cómo la iglesia primitiva y las generaciones de cristianos anteriores a nosotros trabajaron esto. Así que en este video vamos a trabajar la exit Jesus de Agustín sobre este pasaje y, específicamente, esta pregunta, exclusivamente frente a representativamente, con Mateo 16. Históricamente ha habido tres propuestas sobre cómo entender la roca aquí: a veces se la ve como Cristo, a veces como Pedro, a veces como la confesión de Pedro. Pero lo que podemos reconocer, y lo que está ampliamente reconocido hoy, es que estas no son necesariamente mutuamente excluyentes, y en la iglesia primitiva, por ejemplo, se sostienen las tres opciones, y muchas veces se combinan. Una de las visiones comunes es que la roca es Pedro en su confesión de Cristo, que es la Roca; y esta visión es sorprendentemente común. Creo que esto representa la visión madura de Agustín; la llamaremos visión representativa, y la voy a desarrollar y explicar. Esto es un poco delicado porque Agustín escribe muchísimo y predica muchísimo, así que se pueden encontrar muchas cosas distintas que dice sobre este pasaje a lo largo de su carrera. Pero creo que un enfoque razonable es mirar sus Retractaciones, porque ahí se encuentra su visión final y madura del asunto. Sus retractaciones, o reconsideraciones, están escritas alrededor del 426 o 427, por ahí; es decir, al final de su vida, en sus últimos años. Ahí dice: Pedro, llamado así a partir de esta roca, representó a la persona de la Iglesia, que está edificada sobre esta roca y ha recibido las llaves del Reino de los Cielos, porque tú eres Pedro y no Tú eres la Roca se le dijo a él, pero la Roca era Cristo, a quien confesando, como también confiesa toda la Iglesia, Simón fue llamado Pedro. Voy a dejar esto en pantalla un segundo, para que vean la lógica. Primero, la roca es Cristo: lo ven en rojo aquí; esto es de 1 Corintios 10, que se cita aquí. Y segundo, ven en azul que Pedro confiesa a Cristo, y por eso él es la Roca en esa confesión; eso también explica la frase del medio y la lógica de esta frase que puse en morado: tú eres Pedro y no Tú eres la Roca se le dijo a él. Entonces la idea parece ser algo así: Cristo es la roca, Pedro confiesa a Cristo, por lo tanto Pedro es la Roca en ese acto de confesar la Roca. Es como la roca mayor y la roca menor, o algo así. Hay una interacción entre la confesión de Pedro y Cristo; no es necesariamente mutuamente excluyente. Quizás podamos obtener algo de claridad y progreso si miramos otro de sus lenguajes anteriores en sus sermones: por ejemplo, encontrarán que Agustín habla de Pedro como rocoso, porque dirige nuestra atención a la Roca; y si leen las partes de abajo, donde puse en negrita, pueden ver que en este sermón realmente enfatiza la confesión de Pedro como esa roca sobre la que se edifica la iglesia. Así que esto plantea la pregunta: ¿hasta qué punto Pedro es exclusivamente la Roca, entonces? Y sobre ese punto Agustín parece muy claro: piensa que Pedro funciona en un papel representativo en este pasaje. No es Pedro exclusivamente, es Pedro representativamente, y eso surge de este mismo pasaje en las retractaciones que puse en rojo aquí, así que pueden ver que está afirmado muy explícitamente dos veces: Pedro representa a toda la Iglesia en este acto de confesión. Y eso también ocurre en otros pasajes de los escritos de Agustín. No es Pedro destacado con exclusión del resto de la iglesia; por eso, antes en sus sermones, Agustín puede decir cosas como esta sobre las llaves dadas aquí en Mateo 16: ¿recibió Pedro las llaves y Pablo no las recibió? ¿Recibió Pedro las llaves, y Juan, Santiago y los demás apóstoles no las recibieron? Lo que se le dio a Pedro se le dio a toda la Iglesia. Así que esta es, en términos generales, la visión de Mateo 16 que creo más sensata: es un pasaje difícil, pero probablemente así lo tomaría yo, que Pedro es la Roca en este acto de confesar a Cristo, en la confesión apostólica de Cristo, y no como primer titular de un oficio continuo con exclusión del resto de la iglesia o algo así. Ahora bien, una fortaleza de esta idea es que logra encajar con el resto del Nuevo Testamento. Este es mi enfoque básico para Mateo 16: miren, aquí hay un pasaje difícil; en lugar de cargar todo el peso en este único pasaje para hacer algo único, leámoslo en línea con el resto del Nuevo Testamento, porque ahí aparece la misma imaginería en todas partes, y de forma consistente Cristo es llamado la roca o la piedra angular sobre la que se edifica la iglesia. Ya vimos 1 Corintios 10, que cita Agustín, y tienen esta imaginería del Salmo 118 sobre Cristo como piedra de tropiezo y roca de escándalo; esto proviene de ese lenguaje sobre la piedra que los constructores rechazaron y que llegó a ser la piedra angular. Y luego, en ocasiones en el Nuevo Testamento, los apóstoles participan de esa imaginería: a veces todos los apóstoles, como en Efesios 2:20; a veces algunos de los apóstoles, como en Gálatas 2:9, con el círculo interior de Santiago, Pedro y Juan. Así que parece haber una tensión aquí entre la manera en que Agustín piensa el pasaje y lo que encontramos, por ejemplo, en el Vaticano I, y en la forma en que este pasaje se usa como texto probatorio para un primado de jurisdicción dado inmediata y directamente a Pedro por Cristo. Una de las razones por las que esto es significativo es que Agustín no es excéntrico en esto; es una manera común de pensar en la era patrística. Edmund Hill, un conocido traductor de Agustín, tiene una nota sobre este pasaje donde habla de los grandes textos petrinos; eso incluye, por ejemplo, el final de Juan y el final de Lucas, donde a Pedro se le da una comisión, interpretada de esta manera representativa por prácticamente todos los padres antes de León Magno. Ahora bien, no tengo suficiente conocimiento para verificar si eso es correcto o no. Ed sininsky, Ed suchinsky, que es también un gran estudioso, llega a una conclusión similar: dice que, con pocas excepciones, la exit Jesus patrística de Mateo 16 no tenía nada que ver con la existencia de un ministerio petrino continuo en la iglesia. Es decir, Agustín no está completamente fuera de lugar aquí. Ahora bien, mi objetivo no es necesariamente zanjar esto ni decir que todos tienen que estar de acuerdo con Agustín, sino más bien presentar categorías para la interpretación de este pasaje, porque encuentro que muchas veces la gente se acerca a esto de forma más simple: piensa que si la roca es Pedro eso respalda la visión católica romana, y si la roca es Cristo eso respalda la visión protestante o la ortodoxa oriental, o algo así. Pero la realidad es que los protestantes pueden hablar incluso de una especie de sucesión petrina. Ok, eh, cuando Orígenes dice: sé una roca como Pedro. Así que de nuevo, intento presentar categorías como esta. Permítanme explicarlo mejor. Para terminar, pasando de esta cuestión exegética específica de Mateo 16 a tratar de presentar, otra vez, una categoría sobre cómo piensan los protestantes no solo sobre la sucesión apostólica, sino incluso sobre una especie de sucesión petrina, aquí está cómo lo expresa Carl Bart. Está hablando de la concepción católico-romana de la apostolicidad, y dice: la diferencia entre la visión evangélica y la visión católico-romana no está en el que sino en el cómo. La protesta del protestantismo en esta cuestión de la sucesión se dirige solo y simplemente contra el hecho de que el UR Peter etc. se transfiere mecánicamente por encima de la cabeza de Pedro a cada obispo romano sucesivo, como segundo, tercero y centésimo Pedro, como si la sucesión y la tradición del Pedro de Mateo 16, a quien la carne y la sangre no le habían revelado tales cosas, pudieran relacionarse con cualquier sucesión que no fuera espiritual, o como si ser espiritual pudiera atarse a la circunstancia secular de una lista de obispos de este tipo. La razón de la protesta es que en estas circunstancias la apostolicidad deja necesariamente de ser un don divino y una tarea humana, y se convierte en una posesión humana asegurada, que se entiende sobre todo de manera histórica y mecánicamente legal, de modo que ya no puede ser una norma que enfrente a la iglesia con dirección y juicio; por el contrario, queda por completo bajo el juicio de la iglesia. Eso es lo que significa esa frase latina: el control del segundo, tercero o centésimo Pedro. ¿Ven a dónde va con esto? Está hablando de la naturaleza de la apostolicidad, y dice que no es el tipo de cosa que se puede entregar a alguien en una hoja de papel: aquí está, transferencia mecánica, aquí están los documentos legales que muestran la lista de obispos, todos impusieron las manos y así sucesivamente, por lo tanto eres apostólico. Él dice: no, la apostolicidad no es eso. Ahora bien, esa lista de obispos puede ser útil; puede ser una estructura que apoye y ayude a proteger el evangelio. Pero, ante todo, la apostolicidad es una cuestión de fidelidad al evangelio apostólico, a la confesión petrina de Jesús, y eso siempre debe estar por encima de nosotros y pedirnos cuentas. Nunca estamos en posesión de ella. Así que esa es un poco la visión protestante sobre estas cosas. ¿Qué piensan? Háganmelo saber en los comentarios. Es un video corto, enfocado específicamente en este único tema; ojalá le sirva a alguien. Gracias por ver, a todos.",
                original:
                  "perhaps the most important biblical passage that comes up in discussions about the papacy is Matthew 16 where Jesus says to Peter you are Peter and on this rock I will build my church he gives him keys for binding and loosing you can read through this on the screen now there's so much in this passage we could work through libraries have been written about this important text but one question we can pose is this is Peter being singled out here or is Peter being given responsibilities that he ultimately shares with the rest of the Apostles you might say uh Peter exclusively versus Peter representatively okay those aren't even aren't even the only options but that's one distinction we can draw attention to and kind of work through a little bit in this video and the reason that's not a a stubborn question or something like that the reason that's a natural question that's totally fair to ask is three-fold first the responsibilities that are mentioned here in Matthew 16 The Binding and loosing references to Earth and Heaven are reiterated to all the disciples just two chapters later in Matthew 18:18 so that raises the question here it's like okay wait a second is it just Peter or is it all the uh disciples and that seems true with the broader New Testament where you get you know the responsibilities that seem to be envisioned here generally seem to be shared conjointly among the apostles like in John 20 a second reason is that Peter often is a is the spokesperson for the disciples so even here in Matthew 16 for example G uh Peter is responding to Jesus's question question in verse 15 that is put to all of the disciples the word you in verse 15 is in the plural there a third reason is that this comes right on the heels not of Peter being given a specific office uh he's already been a disciple for some time but rather on the heels of his confession of Christ's identity so the context of this passage is is this confession that he makes and so it raises the question here of what's the relationship between Peter's conf confession of Jesus in verses 16 and 17 you see there in blue versus what you see in red which is Jesus's confession to Peter verses 18 and 19 so that doesn't resolve things but it just makes the question fair you know is Peter being given a kind of unique Supremacy here that ultimately puts him in authority over the other Apostles in some sense or are the responsibilities being given to Peter here ultimately shared by the other Apostles so he's more like a first among equals is Peter the boss or the first among equals is it Peter exclusively or Peter representatively or something else well again huge question but one of the things we can do to try to get some traction is just look at how the church fathers and other generations of Christians prior to us worked through this and so in this video Let's just work through Augustine's uh exit Jesus of this passage and specifically this question this exclusively versus representatively question uh with Matthew 16 historically there have been three proposals for how how to understand the rock here uh sometimes it's seen as Christ sometimes it's seen as Peter sometimes it's seen as Peter's confession of Christ but what we can recognize and what is widely recognized today is that these are not necessarily mutually exclusive and in the early church for example you can find all three options are held and a lot of times they're combined so one of the common views is that it's the the rock is Peter in his confession of Christ who is The Rock and this view is surprisingly common I think this represents Augustine's mature view we'll call it a representational view and I'll unpack it and explain it this is a little tricky because Augustine writes so much and he preaches so much so you can find a lot of different things that he says about this passage throughout his career but I think a fair approach is to look at his retractions because this is going to give you his sort of final mature view of the matter his retractions or reconsiderations are written around 426 or 4 27 somewhere in there so this is at the very end of his life the final years of his life and there he says Peter called after this rock represented the person of the church which is built Upon This Rock and has received the Keys of the Kingdom of Heaven for thou art Peter and not Thou Art The Rock was said to him but The Rock was Christ in confessing whom as also the whole church confesses Simon was called Peter so I'll leave this up for a second you can see the logic here first of all the rock is Christ you see that in red here uh this is from 1 Corinthians 10 which is being quoted here and then second you see in blue Peter confesses Christ and therefore he is The Rock in that confession and that also explains the sentence there in the middle and the logic of this sentence that I put in purple for thou art Peter and not Thou Art The Rock was said to him so the idea seems to be something like this Christ is the rock Peter confesses Christ therefore Peter is The Rock in that act of confessing The Rock it's like the greater Rock and the Lesser rock or something like that you have this interplay between Peter confession and Christ it's not necessarily mutually exclusive uh you can maybe maybe we can get some clarity and progress in understanding this if we look at some of his other language from earlier in his sermons for example you'll find Augustine speaking of Peter as Rocky he's Rocky because he draws our attention to the Rock and if you read the lower parts of this where that I put emboldened here you can see he's really emphasizing in this sermon Peter's conf confession as that rock on which the church is built so this further raises the question okay to what extent is Peter exclusively The Rock then and on that point Augustine seems very clear he thinks Augustine or he thinks Peter is functioning in a representative role In this passage it's not Peter exclusively it's Peter representatively and that from this same passage from the retractions I put in red here so you can see that stated very explicitly twice Peter represents the entire church Church in this act of confession and that's the case in some other passages in Augustine's writings as well uh it's not Peter being singled out to the exclusion of the rest of the church and that's why uh earlier in his sermons Augustine can say things like this with reference to the Keys given here in Matthew 16 did Peter receive the keys and Paul not received them did Peter receive them and John and James and the other Apostles not receive them what was given to Peter was given to the whole church so this is broadly the view of Matthew 16 that I think is most sensible is a tough passage but this is probably how I would take it that Peter is The Rock in this act of confessing Christ in the apostolic confession of Christ uh not not as the first holder of an ongoing office to the exclusion of the rest of the church or something like that now one strength to this idea is that it is able to sort of just fit with the rest of the New Testament this is this is my basic approach to Matthew 16 as I say look here's a tough passage rather than put all the weight on this one passage to do something unique let's just read it in line with the rest of the New Testament because you have the same imagery all throughout the New Testament and consistently Christ is called the rock or the Cornerstone on which the church is built we've already seen 1 Corinthians 10 quoted by Augustine and you have this imagery from Psalm 118 about Christ as the stone of stumbling and rock of offense this is from this language about the stone that the builders rejected becoming the Cornerstone and then at times in the New Testament you have the apostles participating in that imagery sometimes all of the Apostles as in Ephesians 2:20 sometimes certain of the Apostles as in Galatians 2:9 with sort of the inner three of James and Peter and John so there seems to be a tension here between Augustine's way of thinking about the passage and what you'll find for example at Vatican 1 and the way this passage is used as a sort of proof text for a Primacy of jurisdiction being given a uh immediately and directly to Peter by Christ one of the reasons that this is significant is that Augustine is not eccentric in this this is a common way of thinking in the patristic era Edmund Hill who's a well-known translator of Augustine uh has a note on this passage where he talks about the great petran texts so that includes like at the end of John and at the end of Luke where Peter's given a commission uh being interpreted in this representational manner by practically all the fathers before Leo the great now I don't have enough knowledge to verify whether that's correct or not but Ed sininsky Ed suchinsky who's a great scholar as well comes to a similar conclusion he says with few exceptions patristic ex Jesus of Matthew 16 had nothing to do with the existence of an ongoing petran Ministry in the church so in other words Augustine is not completely way out in left field here now my goal is not necessarily to settle this or say everyone has to agree with Augustine but more actually to just U put out categories uh for uh the interpretation of this passage because I find a lot of times people approach this more simply thinking well if the rock is Peter that supports the Roman Catholic View and if the rock is Christ that supports the Protestant view or the Eastern Orthodox view or something like this but the reality is Protestants can speak of even a kind of petrine succession okay uh you know when origin says be a rock like Peter okay the so again I'm trying to put out categories like this let me try to explain so now just to finish off here pivoting from this specific exegetical question with Matthew 16 to try to again put out category for how Protestants think about not just Apostolic succession but even a kind of petrine succession here's how Carl Bart puts it he's talking about the Roman Catholic conception of apostolicity and he says the difference between the Evangelical View and the Roman Catholic view is not in respect of the that but the how the protest of protestantism in this question of succession is directed solely and simply against the fact that the UR Peter Etc is mechanically transferred over Peter's head to every succeeding Roman Bishop as a second third and H 100th Peter as if the succession and tradition of the Peter of Matthew 16 to whom Flesh and Blood had not revealed such things could be related to any succession but a spiritual one or as if being spiritual could be tied to the secular circumstance of a list of Bishops of this kind the reason for the protest is that in these circumstances apostolicity necessarily ceases to be a Divine gift and human task and becomes an assured human possession that it is preeminently understood in a mechanically historical and legal way that it no longer can be a norm which confronts the church with Direction and judgment that in contrast it falls completely under the Judgment of the church that's what that Latin phrase means the control of the second or third or 100th Peter do you see what he's getting into here he's talking about the nature of apostolicity and he's saying apostolicity is not the kind of thing can hand somebody on a sheet of paper and just you know here it is mechanical transfer here's the legal documents that show the list of Bishops they all laid hands and so on so forth therefore you're Apostolic he's saying no apostolicity now now that list of Bishops might be helpful to the end of apostolicity that might be a structure that supports and helps you protect the gospel but first and foremost apostolicity is a matter of fidelity to the apostolic gospel the petrine confession of Jesus and that must always stand above us and hold us accountable to it we are never in possession of it so that's a little bit of a Protestant view on these things what do you think let me know in the comments short video targeted specific on this one issue hopefully it helps somebody thanks for watching everybody",
                translation: "ai-assisted",
              },
              {
                speaker: "Gavin Ortlund",
                work: "The Papacy Is Not From God",
                outlet: "Gavin Ortlund, YouTube",
                date: "15 de octubre de 2025",
                locator: "Minutos 16:06 a 18:49",
                url: "https://www.youtube.com/watch?v=z7zwIN8vEkA&t=966s",
                text: "Un pasaje como este, y la visión de Agustín sobre él, sería un buen ejemplo, pero vamos a tocar los puntos principales. Lo primero que hay que observar es que las responsabilidades de atar y desatar que se le dan a Pedro aquí se reiteran a todos los discípulos dos capítulos después. Igual que en general en todo el Nuevo Testamento, la autoridad para gobernar la iglesia se le da a todos los apóstoles conjuntamente. Y en el contexto de Mateo 16, Pedro habla en nombre de todos los demás apóstoles en respuesta a la pregunta de Jesús a todos ellos: ¿quién dicen ustedes (en plural en griego) que soy yo? Así que eso hace legítimo al menos preguntar: bueno, ¿es esta una supremacía única al estilo de Vaticano I la que se le da a Pedro, que lo pone en una posición de autoridad por encima de los demás, o las responsabilidades que se le dan a Pedro aquí van a ser compartidas en última instancia con los demás apóstoles? Y en la iglesia primitiva, Agustín sostuvo que Pedro funcionaba en un papel representativo en este pasaje. ¿Recibió Pedro las llaves y Pablo no las recibió? ¿Recibió Pedro las llaves, y Juan, Santiago y los demás apóstoles no las recibieron? ¿Lo que se le dio a Pedro se le dio a toda la iglesia? Y de nuevo, el pensamiento de Agustín sobre este pasaje no es excéntrico. No es una visión más marginal que la de Cyprien. Hay muchas visiones distintas, por ejemplo al tomar la roca. Supongamos que Pedro funciona representativamente aquí, como supone Agustín. Eso nos ayuda a entender históricamente la imaginería de la roca aquí. Y se ven las tres en los padres de la iglesia. Hay tres propuestas sobre cuál es el significado de la roca aquí: Cristo, Pedro o la confesión de Pedro. Pero el significado de esto puede ser polivalente. Estas opciones no son necesariamente mutuamente excluyentes. Así que en la iglesia primitiva se ven las tres, y muchos padres de la iglesia las combinan. Así parece pensar Agustín, y creo que es una buena manera de abordar el pasaje. La roca es Pedro en su confesión de Cristo. Bien, así lo expresa Agustín, en su visión final de sus retractaciones: Pedro, llamado así a partir de esta roca, que es Cristo, representó a la persona de la Iglesia, que está edificada sobre esta roca y ha recibido las llaves del Reino de los Cielos, porque tú eres Pedro y no Tú eres la Roca se le dijo a él, pero la Roca era Cristo, a quien confesando, como también confiesa toda la Iglesia, Simón fue llamado Pedro. Así que pueden ver la lógica. Es Pedro: Cristo es la roca, entonces Pedro confiesa a Cristo, y por lo tanto en esa confesión Pedro es la roca. Pero Pedro no es la roca como primer titular de un oficio eclesiástico continuo, sino en cuanto representa la confesión apostólica de Cristo. Y esta interpretación encaja bien con el resto del Nuevo Testamento, donde Cristo es llamado repetidamente la roca sobre la que se edifica la iglesia. Voy a poner tres ejemplos de pasajes donde se ve ese tipo de imaginería, y esto se basa en el Salmo 118, y la roca",
                original:
                  "passage like this one on Augustine's view of this for example would be a good but just to hit the main points here. The first thing to observe is that the responsibilities of binding and loosing given to Peter here are reiterated to all the disciples two chapters later. Just as generally throughout the New Testament, authority to govern the church is given to all the apostles conjointly. And in the context of Matthew 16, Peter is speaking on behalf of all the other apostles in response to Jesus's question to them all. Who do you plural in the Greek say that I am? So that makes it legitimate to at least ask the question, okay, is this a unique Vatican 1 supremacy here that Peter is being given, placing him in a position of authority above the others, or are the responsibilities being given to Peter here ultimately to be shared with the other apostles? And in the early church, Augustine argued that Peter functioned in a representative role in this passage. Did Peter receive the keys and Paul not receive them? Did Peter receive them and John and James and the other apostles not receive them? What was given to Peter was given to the whole church? And again, Augustine's thought on this passage is not eccentric. It's not an outlier view anymore than Cyprien's is. There's lots of different views like taking the rock for example. Let's suppose that Peter is functioning representatively here uh as Augustine supposes. That helps us understand the rock imagery here historically. And you see all three of these in the church fathers. There are three proposals for what is the meaning of the rock here. Christ, Peter or Peter's confession. But the meaning of this is can be polyvalent. These options are not necessarily mutually exclusive. So in the early church you see all three of them and a lot of the church fathers combine them. This is how Augustine seems to think and I think this is a good way to approach the passage. The rock is Peter in his confession of Christ. Okay, here's how Augustine puts it. His final view from his retractions. Peter called after this rock that's Christ represented the person of the church which is built upon this rock and has received the keys of the kingdom of heaven for thou art Peter and not thou art the rock was said to him but the rock was Christ in confessing whom as also the whole church confesses Simon was called Peter. So you can see the logic here. It's Peter Christ is the rock. So Peter confesses Christ and therefore in that confession Peter is the rock. But Peter is not the rock as the first holder of an ongoing ecclesiastical office but as representing the apostolic confession of Christ. And this interpretation fits well with the rest of the New Testament where Christ is repeatedly called the rock on which the church is built. I'll put up three examples of passages where you see that kind of imagery and this is drawing from Psalm 118. and the rock",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Jesús edifica su iglesia sobre la confesión de Pedro y promete las llaves del reino; en el resumen del autor de una serie de sermones, es tarea de cada miembro guardar el nombre de Jesús (Mt 16:19; 18:15–20)",
            quotes: [
              {
                speaker: "Trent Hunter",
                work: "What Happens When We Turn the Keys?",
                outlet: "9Marks",
                date: "8 de mayo de 2026",
                locator:
                  "3 párrafos: del párrafo que empieza «In September we worked through a…» al que termina «…Cor. 5:1–13, and 2 Cor. 2:5–11).»",
                url: "https://www.9marks.org/article/what-happens-when-we-turn-the-keys/",
                text: "En septiembre trabajamos con un conjunto de textos de nuestro Nuevo Testamento que delinean el plan de Jesús para edificar su iglesia. En Mateo 16, Pedro confesó que Jesús es “el Cristo, el Hijo del Dios viviente” (Mt. 16:16). Jesús respondió,\n\nTú eres Pedro, y sobre esta roca edificaré mi iglesia, y las puertas del infierno no prevalecerán contra ella. Te daré las llaves del reino de los cielos, y todo lo que ates en la tierra será atado en los cielos, y todo lo que desates en la tierra será desatado en los cielos. (Mt. 16:18–19)\n\nSi es crucial asegurarse de que las personas adecuadas tengan las llaves de tu casa, Jesús se toma la pregunta no menos en serio para su propio reino. Tres sermones de septiembre respondieron a la pregunta: Who Holds the Keys? Del primer sermón, “The King and His Kingdom”, aprendimos que Jesús es el rey del cielo que manifiesta su reinado en las iglesias que confiesan su nombre (Mt. 16:13–18). En la segunda semana, “The Keys and the Keepers”, aprendimos que es trabajo de cada miembro guardar el nombre de Jesús (Mt. 16:19; 18:15–20). En nuestra tercera semana, “Turning the Keys Together”, examinamos tres casos de estudio para mostrar cómo los apóstoles instruyeron a las iglesias sobre la base de la enseñanza de Cristo: cómo aplicaron su plano para la membresía de la iglesia (Gál. 1:6–9, 1 Cor. 5:1–13 y 2 Cor. 2:5–11).",
                original:
                  "In September we worked through a set of texts in our New Testament that outline Jesus’s plan for building his church. In Matthew 16, Peter confessed that Jesus is “the Christ, the Son of the living God” (Matt. 16:16). Jesus responded,\n\nYou are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven. (Matt. 16:18–19)\n\nIf it’s crucial to make sure the right people have the keys to your house, Jesus takes the question no less seriously for his own kingdom. Three sermons in September answered the question, Who Holds the Keys? From our first sermon, “The King and His Kingdom,” we learned that Jesus is heaven’s king who manifests his reign in churches that confess his name (Matt. 16:13–18). In week two, “The Keys and the Keepers,” we learned that it is every member’s job to guard Jesus’s name (Matt. 16:19; 18:15–20). In our third week, “Turning the Keys Together,” we examined three case studies to show how the apostles instructed the churches on the basis of Christ’s teaching—how they applied his blueprint for church membership (Gal. 1:6–9, 1 Cor. 5:1–13, and 2 Cor. 2:5–11).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Durbin distingue Petros de petra al explicar su lectura de la roca",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: "Is Peter The Rock of The Church? (Matt 16 13:20)",
                outlet: "Apologia Church",
                date: "21 de abril de 2018",
                locator: "Minutos 28:48 a 31:44",
                url: "https://apologia-church.simplecast.com/episodes/is-peter-the-rock-of-the-church-matt-16-13-20-v_WSt8c7#t=1728",
                text: "Mateo 16, vuelvan atrás, y desglosemos el texto aquí. Mateo capítulo 16, después de que Jesús le da la bendición a Simón Pedro, dice esto: y yo te digo, tú eres Pedro, y sobre esta roca edificaré mi iglesia, y las puertas del infierno no prevalecerán contra ella. La palabra ahí es en realidad hades, Hades. Te daré las llaves del reino de los cielos, y todo lo que ates en la tierra será atado en los cielos, y todo lo que desates en la tierra será desatado en los cielos. Si están tomando notas aquí, hablemos de esto. Entonces Jesús dice, con base en su profesión de fe, tú eres el Mesías, el Hijo del Dios viviente. Le da la bendición, y dice: y yo te digo, tú eres Petros, en griego, Petros, P-E-T-R-O-S, así es como se escribiría. Tú eres Petros, que significa piedra o roca. Y dice: y sobre esta Petra, escríbanlo P-E-T-R-A, y sobre esta Petra edificaré mi iglesia y las puertas del infierno no prevalecerán contra ella. Un par de cosas en cuanto al lenguaje aquí. Pedro es Petros. Tú eres Petros, que significa piedra o roca. Y sobre esta roca, Petra, edificaré mi iglesia, y las puertas del Hades no prevalecerán contra ella. La palabra Petros en griego es masculina. Los sustantivos tienen género en griego. Los sustantivos tienen género en la lengua griega. Petros es masculino, lo cual tiene mucho sentido porque Pedro es un tipo. Así que petros es un sustantivo masculino, y la palabra para roca es petra, que es un sustantivo femenino. Entonces, de nuevo, los sustantivos tienen género en la lengua griega. Es muy parecido a lo que pasa en inglés con actor y actress; y mi amigo Matt Slick señala esto. Actor es la forma masculina de ese sustantivo, masculina, actor, y actress es la femenina. Por ejemplo, así se vería en inglés si lo formuláramos de esta manera: You are the actor, and upon this actress, I will make my movie. ¿Tiene sentido? ¿Ven cómo es diferente? Es obviamente diferente. Tú eres el actor masculino, y sobre esta actriz haré mi película. Bueno, lo mismo pasa aquí en la lengua griega. Tú eres Petros, roca, piedra, Pedro, masculino, y sobre esta Petra, sustantivo femenino, roca, edificaré mi iglesia.",
                original:
                  "Matthew 16, go back, and let's unpack the text here. Matthew chapter 16, after Jesus gives the blessing to Simon Peter, he says this, and I tell you, you are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it. The word there is actually hades, Hades. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven. If you're taking notes here, let's talk about this. So Jesus says, based upon his profession of faith, you are the Messiah, the son of the living God. He gives him the blessing, and he says, and I tell you, you are Petros, in the Greek, Petros, P-E-T-R-O-S, is how you would write it out. You are Petros, which means stone or rock. And he says, and on this Petra, write it down P-E-T-R-A, and on this Petra, I will build my church and the gates of hell shall not prevail against it. A couple things in terms of language here. Peter is Petros. You are Petros, which means stone or rock. And upon this rock, Petra, I will build my church and the gates of Hades will not prevail against it. The word Petros in the Greek is masculine. Nouns have a gender in Greek. Nouns have a gender in the Greek language. Petros is masculine, which makes a lot of sense because Peter's a dude. So petros is masculine noun, and the word for rock is petra, and that's a feminine noun. So again, nouns have a gender in the Greek language. It's very much, and my friend Matt Slick points this out, it's very much like in the English language we have actor and actress. Actor is the masculine form of that noun, masculine, actor, and actress is the feminine. So for example, here's how it would look in a form in English if you were to form it this way. You are the actor, and upon this actress, I will make my movie. Does that make sense? See how it's different? It's obviously different. You are the masculine actor, and upon this actress, I will make my movie. Well, the same things happening here in the Greek language here. You are Petros, rock, stone, Peter, masculine, and upon this Petra, feminine noun, rock, I will build my church.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "White distingue la promesa futura de las llaves de la autoridad compartida de atar y desatar en Mateo 18",
            quotes: [
              {
                speaker: "James White",
                work: "Peter & The Papacy",
                outlet: "Apologia Church",
                date: "23 de enero de 2024",
                locator: "Minutos 45:40 a 47:33",
                url: "https://apologia-church.simplecast.com/episodes/peter-the-papacy-LKMpdMUk#t=2740",
                text: "Esta afirmación va seguida de la promesa de hacerlo en algún momento en el futuro. Está en tiempo futuro. En algún momento, no dice: te estoy dando, Pedro, solo a ti, las llaves. La afirmación va seguida de la promesa de que, en algún momento en el futuro, dará las llaves del reino de los cielos a Pedro. Así que lo que él ate en la tierra será atado en los cielos, y lo que desate en la tierra será desatado en los cielos. Lo enfatizo como promesa. El verbo está en futuro. Sin embargo, cuando vemos esta autoridad dada en Mateo 18, 18, dos capítulos después, Mateo 18, 18, se da no solo a Pedro ni siquiera principalmente, sino a todos los apóstoles, y usando exactamente el mismo lenguaje, palabra por palabra, sobre atar y desatar. Así que escúchenme. Si alguien quiere decir que Pedro recibe las llaves a diferencia de los otros apóstoles. Y les recuerdo que eso es exactamente lo que dijo el Vaticano I. Es una enseñanza dogmática. Si niegas eso, quedas bajo anatema por parte de Roma. Pero si alguien quiere decir que Pedro recibe las llaves a diferencia de los otros apóstoles como su superior, también está obligado a admitir que la entrega de estas llaves nunca está registrada para nosotros en ninguna parte de la Escritura. Algo extraño, en verdad, para algo supuestamente tan fundamental en la Constitución de la iglesia. Así que tienen que decir: o Pedro recibió las llaves en Mateo 18, 18, pero eso significa que las recibió junto con los otros apóstoles y no es su superior. O las recibió en algún otro momento, quizá antes de Mateo 18, pero nadie consideró que valiera la pena registrarlo.",
                original:
                  "This statement is followed by the promise to at some time in the future, It's in the future tense. At some time, it does not say, I am giving you, Peter, alone, the keys. The statement is followed by the promise to at some time in the future, give the keys of the kingdom of heaven to Peter. So what he binds on earth will be bound in heaven, and whatever he looses on earth will be loosed in heaven. I emphasize this as a promise. The verb is future tense. Yet, when we see this authority given in Matthew 18, 18, So two chapters later, Matthew 18, 18, it is given not to Peter alone or even primarily, but to all the apostles and that using the exact same language word for word regarding binding and loosing. So listen to me. If someone wishes to say that Peter receives the keys in distinction from the other apostles. And I just remind you, that's exactly what Vatican I said. That's a dogmatic teaching. You deny that and you are accursed by Rome. But if someone wishes to say that Peter receives the keys in distinction from the other apostles as their superior, they're also forced to admit that the giving of these keys is never recorded for us anywhere in Scripture. A strange thing indeed for something supposedly so foundational to the Constitution of the church. So you either have to say Peter received the keys in Matthew 18, 18, but that means he received it right along with the other apostles and is not their superior. Or he received it some other time, maybe before Matthew 18, but no one thought it important enough to actually record it.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund sostiene la confesión de Pedro en el contexto apostólico compartido y la contrasta con la jurisdicción papal",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "Engaging Suan Sonna's Typological Argument for the Papacy",
                outlet: "Truth Unites",
                date: "9 de diciembre de 2022",
                locator: "Minutos 45:58 a 48:38",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/Engaging-Suan-Sonnas-Typological-Argument-for-the-Papacy-e1s13cn#t=2758",
                text: "Lo que tienen en Mateo 16: hay dos razones por las que creo que tomarlo así es lo mejor. Pedro es la roca en su confesión apostólica de Cristo, porque Cristo es la roca última sobre la que se edifica la iglesia. Eso nos permite tomar la imaginería de la roca de manera consistente a lo largo del Nuevo Testamento. Así que podemos leer Mateo 16 de manera consistente con Efesios 2, 1 Corintios 10, 1 Pedro 2, todos los cuales usan esta imaginería, y posiblemente Gálatas 2.9, todos los cuales usan esta imaginería, a partir del Salmo 118, donde la roca es Cristo, en la interpretación del Nuevo Testamento. Entonces, en otras palabras, esto nos permite leer Mateo 16 de manera consistente con el resto del Nuevo Testamento. También nos permite leer este pasaje en su contexto inmediato. Esto no es cuando Pedro es llamado como apóstol. Esto es en su confesión de Cristo, al responder a una pregunta que se les hizo a todos los apóstoles. Y, de nuevo, esto nos va a permitir tener Mateo 16 y Mateo 18 trabajando juntos, no en tensión entre sí, porque Pedro es destacado en Mateo 16, pero las responsabilidades que se le dan de atar y desatar se repiten en Mateo 18. El tercer punto de énfasis es decir que lo que se le da a Pedro en este pasaje se comparte con los otros apóstoles. No parece que Pedro reciba autoridad sobre los otros apóstoles de la manera en que el Papa tiene autoridad sobre los otros obispos. Con frecuencia cito el lenguaje del Vaticano I, un deber jerárquico de subordinación y verdadera obediencia. El Papa tiene autoridad sobre los otros obispos, jurisdicción inmediata y universal. Eso no es lo que vemos con Pedro. Acabo de mencionar Mateo 18, cómo todos los otros... Y sé que los católicos tienen su propia manera de interpretar eso, pero solo trato de decir: cuál es mi propuesta y cuál es la mejor manera de tomarlo. A lo largo del Nuevo Testamento, simplemente no ven a Pedro funcionando con ese tipo de supremacía del Vaticano I. Y entonces, si leen Mateo 16 en relación con Mateo 18 y en relación con todo el Nuevo Testamento, no estamos minimizando Mateo 16. Solo, ya saben, damos un paso atrás, miramos el panorama completo. Miren todo. Hechos 15, siempre lo traigo a colación. Creo que es un pasaje muy decisivo. En la crisis doctrinal que estaba ocurriendo, es una decisión grupal. Y si eso no está claro solo leyendo Hechos 15, miren cómo el mismo Lucas lo resume en el capítulo siguiente. En el versículo 4 de Hechos capítulo 16, se trata de las decisiones que han sido alcanzadas por los apóstoles y los ancianos que estaban en Jerusalén. No hay ninguna idea de que Pedro dio un dogma, o de que Pedro funciona por encima de los otros apóstoles, o tiene supremacía, o algo por el estilo.",
                original:
                  "What you have in Matthew 16, there's two reasons why I think taking it like this is best. Peter is the rock in his apostolic confession of Christ because Christ is the ultimate rock the church is built upon. What that does is it enables us to take the rock imagery consistently throughout the New Testament. So we can read Matthew 16 consistently with Ephesians 2, 1 Corinthians 10, 1 Peter 2, all of which use this imagery, and possibly Galatians 2.9, all of which use this imagery drawing from Psalm 118, where the rock is Christ, in the interpretation of the New Testament. So, in other words, this enables us to read Matthew 16 consistently with the rest of the New Testament. It also enables us to read this passage in its immediate context. This is not when Peter is called as an apostle. This is in his confession of Christ in responding to a question that was put to all of the apostles. And again, this is going to enable us to have Matthew 16 and Matthew 18 working together, not in tension with each other, because Peter is being singled out in Matthew 16, but the responsibilities that are given to him of binding and loosing are repeated in Matthew 18. The third point of emphasis is just to say, what is given to Peter in this passage is shared among the other apostles. It doesn't look like Peter is being given authority over the other apostles in a way like the way the Pope has authority over the other bishops. I often reference the language of Vatican I, a hierarchical duty of subordination and true obedience. The Pope has authority over the other bishops, immediate and universal jurisdiction. That is not what we see with Peter. I just mentioned Matthew 18, how all the other... And I know Catholics have their own way of interpreting that, but I'm just trying to say, what's my proposal and what's the best way to take it. Throughout the New Testament, you just don't see Peter functioning with that kind of Vatican I supremacy. And so if you just read Matthew 16 in relation to Matthew 18 and in relation to the whole New Testament, we're not downplaying Matthew 16. We're just, you know, step back, look at the whole panoply. Look at everything. Acts 15, I often bring up. I think it's a very decisive passage. In the doctrinal crisis going on, it is a group decision. And if that's not clear from just reading through Acts 15, look at how Luke himself summarizes it in the next chapter. In verse 4 of Acts chapter 16, it's the decisions that have been reached by the apostles and elders who were in Jerusalem. There isn't this idea that Peter gave a dogma, or Peter is functioning over the other apostles, or has supremacy, or something like that.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Murr interpreta la roca en relación con la confesión de Pedro sobre la identidad de Cristo",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿DEJÓ JESÚS UN PAPA? | Lo que revelan la Biblia y la historia - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "17 de agosto de 2026",
                locator: "Minutos 1:25:29 a 1:26:54",
                url: "https://www.youtube.com/watch?v=2v5q6KEWy8I&t=5129s",
                text: "Entonces el asunto número uno, el asunto del pasaje es la identidad de Jesús, no la identidad de Pedro. Quiero que se den cuenta de eso, que el meollo del asunto es quién es Jesús, quiénes dicen los hombres que soy yo fue la pregunta que comenzó Jesús que inició este diálogo de Mateo 16 entonces Cristo le dice yo también te digo que tú eres Pedro y utiliza en griego la palabra Petros que significa una piedrecita pequeña una piedra y dice y sobre esta Petra sobre esta roca edificaré mi iglesia en el idioma griego original se usa una palabra distinta Petros no es lo mismo que Petra ¿Sí? Piedra grande o roca significa petra, utilizando el plural, y es diferente a petros. Entonces, el segundo punto que quiero remarcar es que el primero era que el asunto, el tema del cual se está hablando es la identidad de Jesucristo, no la de Pedro. ciertamente Jesús va a usar a Pedro como uno de los de las piedras sobre las cuales va a edificar su iglesia sobre esa roca que es la identidad de Jesús que es el meollo del asunto el hecho de que Jesús es el Cristo el hijo de Dios que vino a establecer el reino de Dios Jesús va a edificar su iglesia sobre esa verdad y Pedro va a ser parte de esa edificación de la iglesia de Cristo Jesús Por eso le pone el nombre Petros, que significa piedra.",
              },
            ],
          },
          {
            title:
              "Schreiner llama a Pedro la roca inseparable de su confesión y lo presenta como el primero entre los apóstoles",
            quotes: [
              {
                speaker: "Thomas Schreiner",
                work: "Introduction to Biblical Theology - Dr. Thomas Schreiner - Lecture 23",
                outlet: "The Master's Seminary",
                date: "1 de febrero de 2018",
                locator: "Minutos 13:43 a 15:00",
                url: "https://www.youtube.com/watch?v=niwIc9D2EW8&t=823s",
                text: "Por lo tanto, estoy de acuerdo: Pedro es la roca sobre la que se establece la iglesia. Pero es un poco matizado. Eso no puede separarse de su confesión. Los dos están unidos. Es la confesión y Pedro. Ahora, un par de cosas. Eso claramente no lleva a: Pedro, tú eres la roca y tú eres el Papa. ¿Verdad? Esa es una lectura anacrónica si alguna vez la hubo. ¿Verdad? No hay nada sobre sucesores aquí, para empezar. No hay nada de: bueno, y a lo largo de toda la historia, tus descendientes serán la roca. De hecho, creo que Pedro representa aquí a todos los apóstoles como el primero entre iguales, por así decirlo. Creo que Jesús está diciendo que la iglesia se edifica, y esta es otra manera de decirlo en forma narrativa: la iglesia se edifica sobre el fundamento de los apóstoles y profetas. Pedro y el resto de los apóstoles, la iglesia se edifica sobre su autoridad. Su autoridad, por supuesto, está condicionada y depende de que ustedes proclamen el evangelio, ¿verdad? Que Jesús es el Cristo, el Hijo del Dios viviente.",
                original:
                  "Therefore, I agree, Peter is the rock upon which the church is established. But it's a little nuanced. That can't be separated from his confession. The two are bound together. It's the confession and Peter. Now, just a couple things. that clearly doesn't lead to, Peter, you're the rock and you're the pope. Right? That is an anachronistic reading if there ever was one. Right? There's nothing about successors here, for one thing. There's nothing about, okay, and all through history, your descendants will be the rock. Actually, I think Peter stands here for all the apostles as the first among equals, so to speak. I think Jesus is saying the church is built, this is another way of saying in a narrative form, the church is built on the foundation of the apostles and prophets. Peter and the rest of the apostles, the church is built upon your authority. Your authority, of course, is conditioned upon and contingent upon you proclaiming the gospel, right? That Jesus is the Christ, the Son of the living God.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "White contrasta la promesa futura de las llaves con su recepción junto a los demás apóstoles",
            quotes: [
              {
                speaker: "James White",
                work: "CC210: Cameron Bertuzzi & James White Discuss Catholicism",
                outlet: "Capturing Christianity CC210",
                date: "3 de diciembre de 2022",
                locator: "Minutos 32:40 a 33:04",
                url: "https://soundcloud.com/capturingchristianity/cc210-cameron-bertuzzi-james-white-discuss-catholicism#t=1960",
                text: "Bueno, lo que haría después sería: está bien, dado que Doso es futuro, ¿cuándo recibió Pedro estas llaves? Y solo hay dos opciones. O es Mateo 18 y por lo tanto es junto con todos los demás apóstoles, en contradicción con el Vaticano I, Pastor Eternus, o Mateo ni siquiera lo registró para nosotros. Fue tan poco importante que ni siquiera aparece en el registro escritural. Esas son las únicas opciones que tienen.",
                original:
                  "Well, where I would go next would be, okay, given that Doso is future, then when did Peter receive these keys? And there's only two options. Either it's Matthew 18 and hence it's with all the other apostles in contradiction to Vatican one, Pastor Eternus, or Matthew didn't even record it for us. It was so unimportant that it doesn't even show up in the scriptural record. Those are the only options you've got.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "White distingue la promesa futura a Pedro de la autoridad de atar y desatar dada a los apóstoles",
            quotes: [
              {
                speaker: "James White",
                work: "The Great Debate III - The Papacy - Pacwa",
                outlet: "Alpha & Omega Ministries",
                date: "Sin fecha indicada",
                locator: "Minutos 1:11:04 a 1:11:59",
                url: "https://www.youtube.com/watch?v=WefaXKQYUv4&t=4264s",
                text: "esta afirmación va seguida de la promesa de que en algún momento en el futuro dará las Llaves del Reino de los Cielos a Pedro. Enfatizo que esto es una promesa, porque el verbo está en tiempo futuro. Jesús no le da nada a Pedro en este pasaje, en forma de llaves. Sin embargo, cuando vemos esta Autoridad dada en Mateo 18:18, se da no a Pedro solo ni siquiera principalmente, sino a todos los Apóstoles, y usando exactamente el mismo lenguaje, palabra por palabra, en cuanto a atar y desatar. Si alguien quiere decir que Pedro recibe las llaves a diferencia de los otros Apóstoles como su Superior, se ve obligado a admitir que la entrega de estas Llaves nunca está registrada para nosotros en ninguna parte de la Escritura, algo extraño, en verdad, para algo supuestamente tan fundamental para la Constitución de la iglesia misma",
                original:
                  "this statement is followed by the promise to at sometime in the future give the Keys of the Kingdom of Heaven to Peter I emphasize this is a promise for the verb is future intense Jesus gives nothing to Peter In this passage Jesus does not here in this passage give anything to Peter in the way of keys yet when we see this Authority given in Matthew 18:18 it is given not to Peter alone or even primarily but to all the apostles and that using the exact same language word for word regarding binding and loosing if someone wishes to say that Peter receives the keys in distinction from the other Apostles as their Superior they are forced to admit that the giving of these Keys is never recorded for us anywhere in scripture a strange thing indeed for something supposedly so fundamental to the Constitution of the church itself",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund lee la confesión de Pedro como representativa de los discípulos y la distingue de un oficio permanente",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "Theology Expert: If Catholics Are Right, What Happens to Protestants? | Gavin Ortlund",
                outlet: "The Bryce Crawford Podcast",
                date: "26 de octubre de 2026",
                locator: "Minutos 48:26 a 49:16",
                url: "https://podcasters.spotify.com/pod/show/bryce-crawford8/episodes/Theology-Expert-If-Catholics-Are-Right--What-Happens-to-Protestants---Gavin-Ortlund-e3qvj80#t=2906",
                text: "Y me parece que en Mateo 16 lo que sucede es que hay una confesión de Cristo por parte de Pedro. Jesús les preguntó en plural quién dicen que yo soy, Pedro habla en nombre de los discípulos y confiesa quién es Jesús: tú eres el Hijo de Dios. Luego, en respuesta, Jesús da esta bendición sobre Pedro. La forma en que muchos de los padres de la iglesia, incluido Agustín de Hipona, interpretaron esto es que Pedro representa a la iglesia en este acto de confesar a Cristo, de modo que el sentido de la roca es Pedro en esta confesión, pero en última instancia está orientado hacia Cristo. Y solo quisiera señalar, y esta es, una razón por la que soy protestante, que no hay indicio de un oficio asociado a Pedro en el Nuevo Testamento. Es Pedro, el tipo.",
                original:
                  "And it looks to me in Matthew 16 that what is happening there is there is Peter's confession of Christ. Jesus asked them in the plural who do you, plural, say that I am Peter speaks on behalf of the disciples and he confesses who Jesus is you're the son of God and then in response to that Jesus gives this blessing upon Peter and the way many of the church fathers including Augustine of Hippo interpreted this is this is Peter representing the church in this act of confessing Christ so that the meaning of the rock it is Peter in this confession but it ultimately is oriented onto Christ and I would just point out, and this is why I'm a, one reason I'm a Protestant is that there's no hint of an office associated with Peter in the New Testament. It's Peter, the guy.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund usa el lenguaje de la iglesia de Efesios 5 para cuestionar que se identifique la iglesia prometida solo con una jerarquía o un concilio",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The Most Misused Verse Against Protestantism",
                outlet: "Truth Unites",
                date: "2 de agosto de 2022",
                locator: "Minutos 1:51 a 2:50",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-Most-Misused-Verse-Against-Protestantism-e1lvuvh#t=111",
                text: "Así que esta palabra es la palabra griega ekklesía, que se usa solo dos veces en los Evangelios, aquí y luego en Mateo 18, 17. Cuando se usa a lo largo del Nuevo Testamento, en el libro de Hechos, en las epístolas, usualmente se refiere ya sea a una congregación local particular, o a todas las iglesias de una región geográfica particular, o a todos los cristianos de una región geográfica, o a todos los cristianos, la suma total de los creyentes cristianos, como Efesios 5, por ejemplo, Cristo amó a la iglesia y se entregó a sí mismo por ella. Muchas veces lo que se da por sentado en el uso de Mateo 16, 18 no es ninguno de esos significados, sino en realidad un liderazgo jerárquico particular dentro de la iglesia. Se está hablando de, se supone que se habla de obispos, y no solo de todos los obispos, sino particularmente de los obispos reunidos en un concilio ecuménico.",
                original:
                  "So this word is the Greek word ekklesia, which is used only two times in the Gospels, here and then in Matthew 18, 17. When it's used throughout the New Testament, in the Book of Acts, in the Epistles, usually it will refer to either one particular local congregation or all of the churches in a particular geographical region or all the Christians in a geographical region or all Christians. the entire sum of Christian believers, like Ephesians 5, for example, Christ loved the church and gave himself for her. Often what is assumed in the usage of Matthew 16, 18 is not any of those meanings, but actually a particular hierarchical leadership within the church. It's talking about, it's assumed that what is being talked about is bishops, and not just all bishops, but particularly the bishops gathered in an ecumenical council.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.18.15-Matt.18.20"],
      text: "Segunda Confesión de Londres (1689), 26.5 notas (i), (k), (l) (1688 p. 87): este versículo figura como nota al margen junto a la cláusula, en inglés, «In the execution of this Power wherewith he is so intrusted, the Lord Jesus calleth out of the World unto himself, through the Ministry of his Word, by his Spirit, those that are given unto him by his Father, that they may walk before him in all the ways of obedience, which he prescribeth to them in his Word. Those thus called, he commandeth to walk together in particular Societies, or Churches, for their mutual Edification, and the due performance of that publick Worship, which he requireth of them in the World.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar. Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "Ortlund sostiene que la roca es Pedro en su confesión de Cristo (la última opinión de Agustín) y que la autoridad para gobernar se dio a los apóstoles en conjunto; Mateo 18:18 se cita en el primer bloque para ese último punto (el segundo dice «dos capítulos después» sin versículo)",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: 'Augustine on the "Rock" of Matthew 16 (This Will Surprise You)',
                outlet: "Gavin Ortlund, YouTube",
                date: "18 de diciembre de 2024",
                locator: "Minutos 0:00 a 11:38",
                url: "https://www.youtube.com/watch?v=Mslw0lS1ZLQ&t=0s",
                text: "Quizá el pasaje bíblico más importante que aparece en las discusiones sobre el papado es Mateo 16, donde Jesús le dice a Pedro: tú eres Pedro, y sobre esta roca edificaré mi iglesia, y le da las llaves para atar y desatar. Pueden leer este pasaje en la pantalla ahora mismo. Hay muchísimo en este pasaje; se han escrito bibliotecas enteras sobre este texto tan importante. Pero una pregunta que podemos plantear es esta: ¿se destaca aquí a Pedro, o se le dan responsabilidades que en última instancia comparte con el resto de los apóstoles? Podrías decir: eh, ¿Pedro exclusivamente frente a Pedro representativamente? Bien, esas ni siquiera son las únicas opciones, pero es una distinción que podemos señalar y trabajar un poco en este video. Y la razón por la que no es una pregunta terca ni algo así, la razón por la que es una pregunta natural y totalmente legítima, es triple. Primero, las responsabilidades que se mencionan aquí en Mateo 16, atar y desatar, con referencia a la tierra y al cielo, se reiteran a todos los discípulos apenas dos capítulos después, en Mateo 18:18. Así que eso plantea la pregunta: espera un momento, ¿es solo Pedro, o son todos los discípulos? Eso parece cierto en el Nuevo Testamento en general, donde las responsabilidades que aquí se vislumbran generalmente aparecen compartidas conjuntamente entre los apóstoles, como en Juan 20. Una segunda razón es que Pedro con frecuencia es el portavoz de los discípulos; incluso aquí en Mateo 16, por ejemplo, Pedro responde a la pregunta de Jesús en el versículo 15, que se dirige a todos los discípulos; la palabra ustedes del versículo 15 está en plural. Una tercera razón es que esto llega justo después no de que a Pedro se le dé un oficio específico (ya lleva bastante tiempo siendo discípulo), sino justo después de su confesión de la identidad de Cristo. Así que el contexto de este pasaje es esa confesión que él hace, y eso plantea la pregunta de cuál es la relación entre la confesión de Pedro sobre Jesús en los versículos 16 y 17, que ven aquí en azul, y lo que ven en rojo, que es la confesión de Jesús a Pedro en los versículos 18 y 19. Eso no resuelve nada, pero hace que la pregunta sea legítima: ¿se le está dando a Pedro aquí una especie de supremacía única que en última instancia lo pone en autoridad sobre los otros apóstoles en algún sentido, o las responsabilidades que se le dan aquí las comparten en última instancia los demás apóstoles? ¿Es Pedro el jefe, o el primero entre iguales? ¿Es Pedro exclusivamente, o Pedro representativamente, o algo más? Bien, es una pregunta enorme, pero una de las cosas que podemos hacer para tener algo de tracción es ver cómo la iglesia primitiva y las generaciones de cristianos anteriores a nosotros trabajaron esto. Así que en este video vamos a trabajar la exit Jesus de Agustín sobre este pasaje y, específicamente, esta pregunta, exclusivamente frente a representativamente, con Mateo 16. Históricamente ha habido tres propuestas sobre cómo entender la roca aquí: a veces se la ve como Cristo, a veces como Pedro, a veces como la confesión de Pedro. Pero lo que podemos reconocer, y lo que está ampliamente reconocido hoy, es que estas no son necesariamente mutuamente excluyentes, y en la iglesia primitiva, por ejemplo, se sostienen las tres opciones, y muchas veces se combinan. Una de las visiones comunes es que la roca es Pedro en su confesión de Cristo, que es la Roca; y esta visión es sorprendentemente común. Creo que esto representa la visión madura de Agustín; la llamaremos visión representativa, y la voy a desarrollar y explicar. Esto es un poco delicado porque Agustín escribe muchísimo y predica muchísimo, así que se pueden encontrar muchas cosas distintas que dice sobre este pasaje a lo largo de su carrera. Pero creo que un enfoque razonable es mirar sus Retractaciones, porque ahí se encuentra su visión final y madura del asunto. Sus retractaciones, o reconsideraciones, están escritas alrededor del 426 o 427, por ahí; es decir, al final de su vida, en sus últimos años. Ahí dice: Pedro, llamado así a partir de esta roca, representó a la persona de la Iglesia, que está edificada sobre esta roca y ha recibido las llaves del Reino de los Cielos, porque tú eres Pedro y no Tú eres la Roca se le dijo a él, pero la Roca era Cristo, a quien confesando, como también confiesa toda la Iglesia, Simón fue llamado Pedro. Voy a dejar esto en pantalla un segundo, para que vean la lógica. Primero, la roca es Cristo: lo ven en rojo aquí; esto es de 1 Corintios 10, que se cita aquí. Y segundo, ven en azul que Pedro confiesa a Cristo, y por eso él es la Roca en esa confesión; eso también explica la frase del medio y la lógica de esta frase que puse en morado: tú eres Pedro y no Tú eres la Roca se le dijo a él. Entonces la idea parece ser algo así: Cristo es la roca, Pedro confiesa a Cristo, por lo tanto Pedro es la Roca en ese acto de confesar la Roca. Es como la roca mayor y la roca menor, o algo así. Hay una interacción entre la confesión de Pedro y Cristo; no es necesariamente mutuamente excluyente. Quizás podamos obtener algo de claridad y progreso si miramos otro de sus lenguajes anteriores en sus sermones: por ejemplo, encontrarán que Agustín habla de Pedro como rocoso, porque dirige nuestra atención a la Roca; y si leen las partes de abajo, donde puse en negrita, pueden ver que en este sermón realmente enfatiza la confesión de Pedro como esa roca sobre la que se edifica la iglesia. Así que esto plantea la pregunta: ¿hasta qué punto Pedro es exclusivamente la Roca, entonces? Y sobre ese punto Agustín parece muy claro: piensa que Pedro funciona en un papel representativo en este pasaje. No es Pedro exclusivamente, es Pedro representativamente, y eso surge de este mismo pasaje en las retractaciones que puse en rojo aquí, así que pueden ver que está afirmado muy explícitamente dos veces: Pedro representa a toda la Iglesia en este acto de confesión. Y eso también ocurre en otros pasajes de los escritos de Agustín. No es Pedro destacado con exclusión del resto de la iglesia; por eso, antes en sus sermones, Agustín puede decir cosas como esta sobre las llaves dadas aquí en Mateo 16: ¿recibió Pedro las llaves y Pablo no las recibió? ¿Recibió Pedro las llaves, y Juan, Santiago y los demás apóstoles no las recibieron? Lo que se le dio a Pedro se le dio a toda la Iglesia. Así que esta es, en términos generales, la visión de Mateo 16 que creo más sensata: es un pasaje difícil, pero probablemente así lo tomaría yo, que Pedro es la Roca en este acto de confesar a Cristo, en la confesión apostólica de Cristo, y no como primer titular de un oficio continuo con exclusión del resto de la iglesia o algo así. Ahora bien, una fortaleza de esta idea es que logra encajar con el resto del Nuevo Testamento. Este es mi enfoque básico para Mateo 16: miren, aquí hay un pasaje difícil; en lugar de cargar todo el peso en este único pasaje para hacer algo único, leámoslo en línea con el resto del Nuevo Testamento, porque ahí aparece la misma imaginería en todas partes, y de forma consistente Cristo es llamado la roca o la piedra angular sobre la que se edifica la iglesia. Ya vimos 1 Corintios 10, que cita Agustín, y tienen esta imaginería del Salmo 118 sobre Cristo como piedra de tropiezo y roca de escándalo; esto proviene de ese lenguaje sobre la piedra que los constructores rechazaron y que llegó a ser la piedra angular. Y luego, en ocasiones en el Nuevo Testamento, los apóstoles participan de esa imaginería: a veces todos los apóstoles, como en Efesios 2:20; a veces algunos de los apóstoles, como en Gálatas 2:9, con el círculo interior de Santiago, Pedro y Juan. Así que parece haber una tensión aquí entre la manera en que Agustín piensa el pasaje y lo que encontramos, por ejemplo, en el Vaticano I, y en la forma en que este pasaje se usa como texto probatorio para un primado de jurisdicción dado inmediata y directamente a Pedro por Cristo. Una de las razones por las que esto es significativo es que Agustín no es excéntrico en esto; es una manera común de pensar en la era patrística. Edmund Hill, un conocido traductor de Agustín, tiene una nota sobre este pasaje donde habla de los grandes textos petrinos; eso incluye, por ejemplo, el final de Juan y el final de Lucas, donde a Pedro se le da una comisión, interpretada de esta manera representativa por prácticamente todos los padres antes de León Magno. Ahora bien, no tengo suficiente conocimiento para verificar si eso es correcto o no. Ed sininsky, Ed suchinsky, que es también un gran estudioso, llega a una conclusión similar: dice que, con pocas excepciones, la exit Jesus patrística de Mateo 16 no tenía nada que ver con la existencia de un ministerio petrino continuo en la iglesia. Es decir, Agustín no está completamente fuera de lugar aquí. Ahora bien, mi objetivo no es necesariamente zanjar esto ni decir que todos tienen que estar de acuerdo con Agustín, sino más bien presentar categorías para la interpretación de este pasaje, porque encuentro que muchas veces la gente se acerca a esto de forma más simple: piensa que si la roca es Pedro eso respalda la visión católica romana, y si la roca es Cristo eso respalda la visión protestante o la ortodoxa oriental, o algo así. Pero la realidad es que los protestantes pueden hablar incluso de una especie de sucesión petrina. Ok, eh, cuando Orígenes dice: sé una roca como Pedro. Así que de nuevo, intento presentar categorías como esta. Permítanme explicarlo mejor. Para terminar, pasando de esta cuestión exegética específica de Mateo 16 a tratar de presentar, otra vez, una categoría sobre cómo piensan los protestantes no solo sobre la sucesión apostólica, sino incluso sobre una especie de sucesión petrina, aquí está cómo lo expresa Carl Bart. Está hablando de la concepción católico-romana de la apostolicidad, y dice: la diferencia entre la visión evangélica y la visión católico-romana no está en el que sino en el cómo. La protesta del protestantismo en esta cuestión de la sucesión se dirige solo y simplemente contra el hecho de que el UR Peter etc. se transfiere mecánicamente por encima de la cabeza de Pedro a cada obispo romano sucesivo, como segundo, tercero y centésimo Pedro, como si la sucesión y la tradición del Pedro de Mateo 16, a quien la carne y la sangre no le habían revelado tales cosas, pudieran relacionarse con cualquier sucesión que no fuera espiritual, o como si ser espiritual pudiera atarse a la circunstancia secular de una lista de obispos de este tipo. La razón de la protesta es que en estas circunstancias la apostolicidad deja necesariamente de ser un don divino y una tarea humana, y se convierte en una posesión humana asegurada, que se entiende sobre todo de manera histórica y mecánicamente legal, de modo que ya no puede ser una norma que enfrente a la iglesia con dirección y juicio; por el contrario, queda por completo bajo el juicio de la iglesia. Eso es lo que significa esa frase latina: el control del segundo, tercero o centésimo Pedro. ¿Ven a dónde va con esto? Está hablando de la naturaleza de la apostolicidad, y dice que no es el tipo de cosa que se puede entregar a alguien en una hoja de papel: aquí está, transferencia mecánica, aquí están los documentos legales que muestran la lista de obispos, todos impusieron las manos y así sucesivamente, por lo tanto eres apostólico. Él dice: no, la apostolicidad no es eso. Ahora bien, esa lista de obispos puede ser útil; puede ser una estructura que apoye y ayude a proteger el evangelio. Pero, ante todo, la apostolicidad es una cuestión de fidelidad al evangelio apostólico, a la confesión petrina de Jesús, y eso siempre debe estar por encima de nosotros y pedirnos cuentas. Nunca estamos en posesión de ella. Así que esa es un poco la visión protestante sobre estas cosas. ¿Qué piensan? Háganmelo saber en los comentarios. Es un video corto, enfocado específicamente en este único tema; ojalá le sirva a alguien. Gracias por ver, a todos.",
                original:
                  "perhaps the most important biblical passage that comes up in discussions about the papacy is Matthew 16 where Jesus says to Peter you are Peter and on this rock I will build my church he gives him keys for binding and loosing you can read through this on the screen now there's so much in this passage we could work through libraries have been written about this important text but one question we can pose is this is Peter being singled out here or is Peter being given responsibilities that he ultimately shares with the rest of the Apostles you might say uh Peter exclusively versus Peter representatively okay those aren't even aren't even the only options but that's one distinction we can draw attention to and kind of work through a little bit in this video and the reason that's not a a stubborn question or something like that the reason that's a natural question that's totally fair to ask is three-fold first the responsibilities that are mentioned here in Matthew 16 The Binding and loosing references to Earth and Heaven are reiterated to all the disciples just two chapters later in Matthew 18:18 so that raises the question here it's like okay wait a second is it just Peter or is it all the uh disciples and that seems true with the broader New Testament where you get you know the responsibilities that seem to be envisioned here generally seem to be shared conjointly among the apostles like in John 20 a second reason is that Peter often is a is the spokesperson for the disciples so even here in Matthew 16 for example G uh Peter is responding to Jesus's question question in verse 15 that is put to all of the disciples the word you in verse 15 is in the plural there a third reason is that this comes right on the heels not of Peter being given a specific office uh he's already been a disciple for some time but rather on the heels of his confession of Christ's identity so the context of this passage is is this confession that he makes and so it raises the question here of what's the relationship between Peter's conf confession of Jesus in verses 16 and 17 you see there in blue versus what you see in red which is Jesus's confession to Peter verses 18 and 19 so that doesn't resolve things but it just makes the question fair you know is Peter being given a kind of unique Supremacy here that ultimately puts him in authority over the other Apostles in some sense or are the responsibilities being given to Peter here ultimately shared by the other Apostles so he's more like a first among equals is Peter the boss or the first among equals is it Peter exclusively or Peter representatively or something else well again huge question but one of the things we can do to try to get some traction is just look at how the church fathers and other generations of Christians prior to us worked through this and so in this video Let's just work through Augustine's uh exit Jesus of this passage and specifically this question this exclusively versus representatively question uh with Matthew 16 historically there have been three proposals for how how to understand the rock here uh sometimes it's seen as Christ sometimes it's seen as Peter sometimes it's seen as Peter's confession of Christ but what we can recognize and what is widely recognized today is that these are not necessarily mutually exclusive and in the early church for example you can find all three options are held and a lot of times they're combined so one of the common views is that it's the the rock is Peter in his confession of Christ who is The Rock and this view is surprisingly common I think this represents Augustine's mature view we'll call it a representational view and I'll unpack it and explain it this is a little tricky because Augustine writes so much and he preaches so much so you can find a lot of different things that he says about this passage throughout his career but I think a fair approach is to look at his retractions because this is going to give you his sort of final mature view of the matter his retractions or reconsiderations are written around 426 or 4 27 somewhere in there so this is at the very end of his life the final years of his life and there he says Peter called after this rock represented the person of the church which is built Upon This Rock and has received the Keys of the Kingdom of Heaven for thou art Peter and not Thou Art The Rock was said to him but The Rock was Christ in confessing whom as also the whole church confesses Simon was called Peter so I'll leave this up for a second you can see the logic here first of all the rock is Christ you see that in red here uh this is from 1 Corinthians 10 which is being quoted here and then second you see in blue Peter confesses Christ and therefore he is The Rock in that confession and that also explains the sentence there in the middle and the logic of this sentence that I put in purple for thou art Peter and not Thou Art The Rock was said to him so the idea seems to be something like this Christ is the rock Peter confesses Christ therefore Peter is The Rock in that act of confessing The Rock it's like the greater Rock and the Lesser rock or something like that you have this interplay between Peter confession and Christ it's not necessarily mutually exclusive uh you can maybe maybe we can get some clarity and progress in understanding this if we look at some of his other language from earlier in his sermons for example you'll find Augustine speaking of Peter as Rocky he's Rocky because he draws our attention to the Rock and if you read the lower parts of this where that I put emboldened here you can see he's really emphasizing in this sermon Peter's conf confession as that rock on which the church is built so this further raises the question okay to what extent is Peter exclusively The Rock then and on that point Augustine seems very clear he thinks Augustine or he thinks Peter is functioning in a representative role In this passage it's not Peter exclusively it's Peter representatively and that from this same passage from the retractions I put in red here so you can see that stated very explicitly twice Peter represents the entire church Church in this act of confession and that's the case in some other passages in Augustine's writings as well uh it's not Peter being singled out to the exclusion of the rest of the church and that's why uh earlier in his sermons Augustine can say things like this with reference to the Keys given here in Matthew 16 did Peter receive the keys and Paul not received them did Peter receive them and John and James and the other Apostles not receive them what was given to Peter was given to the whole church so this is broadly the view of Matthew 16 that I think is most sensible is a tough passage but this is probably how I would take it that Peter is The Rock in this act of confessing Christ in the apostolic confession of Christ uh not not as the first holder of an ongoing office to the exclusion of the rest of the church or something like that now one strength to this idea is that it is able to sort of just fit with the rest of the New Testament this is this is my basic approach to Matthew 16 as I say look here's a tough passage rather than put all the weight on this one passage to do something unique let's just read it in line with the rest of the New Testament because you have the same imagery all throughout the New Testament and consistently Christ is called the rock or the Cornerstone on which the church is built we've already seen 1 Corinthians 10 quoted by Augustine and you have this imagery from Psalm 118 about Christ as the stone of stumbling and rock of offense this is from this language about the stone that the builders rejected becoming the Cornerstone and then at times in the New Testament you have the apostles participating in that imagery sometimes all of the Apostles as in Ephesians 2:20 sometimes certain of the Apostles as in Galatians 2:9 with sort of the inner three of James and Peter and John so there seems to be a tension here between Augustine's way of thinking about the passage and what you'll find for example at Vatican 1 and the way this passage is used as a sort of proof text for a Primacy of jurisdiction being given a uh immediately and directly to Peter by Christ one of the reasons that this is significant is that Augustine is not eccentric in this this is a common way of thinking in the patristic era Edmund Hill who's a well-known translator of Augustine uh has a note on this passage where he talks about the great petran texts so that includes like at the end of John and at the end of Luke where Peter's given a commission uh being interpreted in this representational manner by practically all the fathers before Leo the great now I don't have enough knowledge to verify whether that's correct or not but Ed sininsky Ed suchinsky who's a great scholar as well comes to a similar conclusion he says with few exceptions patristic ex Jesus of Matthew 16 had nothing to do with the existence of an ongoing petran Ministry in the church so in other words Augustine is not completely way out in left field here now my goal is not necessarily to settle this or say everyone has to agree with Augustine but more actually to just U put out categories uh for uh the interpretation of this passage because I find a lot of times people approach this more simply thinking well if the rock is Peter that supports the Roman Catholic View and if the rock is Christ that supports the Protestant view or the Eastern Orthodox view or something like this but the reality is Protestants can speak of even a kind of petrine succession okay uh you know when origin says be a rock like Peter okay the so again I'm trying to put out categories like this let me try to explain so now just to finish off here pivoting from this specific exegetical question with Matthew 16 to try to again put out category for how Protestants think about not just Apostolic succession but even a kind of petrine succession here's how Carl Bart puts it he's talking about the Roman Catholic conception of apostolicity and he says the difference between the Evangelical View and the Roman Catholic view is not in respect of the that but the how the protest of protestantism in this question of succession is directed solely and simply against the fact that the UR Peter Etc is mechanically transferred over Peter's head to every succeeding Roman Bishop as a second third and H 100th Peter as if the succession and tradition of the Peter of Matthew 16 to whom Flesh and Blood had not revealed such things could be related to any succession but a spiritual one or as if being spiritual could be tied to the secular circumstance of a list of Bishops of this kind the reason for the protest is that in these circumstances apostolicity necessarily ceases to be a Divine gift and human task and becomes an assured human possession that it is preeminently understood in a mechanically historical and legal way that it no longer can be a norm which confronts the church with Direction and judgment that in contrast it falls completely under the Judgment of the church that's what that Latin phrase means the control of the second or third or 100th Peter do you see what he's getting into here he's talking about the nature of apostolicity and he's saying apostolicity is not the kind of thing can hand somebody on a sheet of paper and just you know here it is mechanical transfer here's the legal documents that show the list of Bishops they all laid hands and so on so forth therefore you're Apostolic he's saying no apostolicity now now that list of Bishops might be helpful to the end of apostolicity that might be a structure that supports and helps you protect the gospel but first and foremost apostolicity is a matter of fidelity to the apostolic gospel the petrine confession of Jesus and that must always stand above us and hold us accountable to it we are never in possession of it so that's a little bit of a Protestant view on these things what do you think let me know in the comments short video targeted specific on this one issue hopefully it helps somebody thanks for watching everybody",
                translation: "ai-assisted",
              },
              {
                speaker: "Gavin Ortlund",
                work: "The Papacy Is Not From God",
                outlet: "Gavin Ortlund, YouTube",
                date: "15 de octubre de 2025",
                locator: "Minutos 16:06 a 18:49",
                url: "https://www.youtube.com/watch?v=z7zwIN8vEkA&t=966s",
                text: "Un pasaje como este, y la visión de Agustín sobre él, sería un buen ejemplo, pero vamos a tocar los puntos principales. Lo primero que hay que observar es que las responsabilidades de atar y desatar que se le dan a Pedro aquí se reiteran a todos los discípulos dos capítulos después. Igual que en general en todo el Nuevo Testamento, la autoridad para gobernar la iglesia se le da a todos los apóstoles conjuntamente. Y en el contexto de Mateo 16, Pedro habla en nombre de todos los demás apóstoles en respuesta a la pregunta de Jesús a todos ellos: ¿quién dicen ustedes (en plural en griego) que soy yo? Así que eso hace legítimo al menos preguntar: bueno, ¿es esta una supremacía única al estilo de Vaticano I la que se le da a Pedro, que lo pone en una posición de autoridad por encima de los demás, o las responsabilidades que se le dan a Pedro aquí van a ser compartidas en última instancia con los demás apóstoles? Y en la iglesia primitiva, Agustín sostuvo que Pedro funcionaba en un papel representativo en este pasaje. ¿Recibió Pedro las llaves y Pablo no las recibió? ¿Recibió Pedro las llaves, y Juan, Santiago y los demás apóstoles no las recibieron? ¿Lo que se le dio a Pedro se le dio a toda la iglesia? Y de nuevo, el pensamiento de Agustín sobre este pasaje no es excéntrico. No es una visión más marginal que la de Cyprien. Hay muchas visiones distintas, por ejemplo al tomar la roca. Supongamos que Pedro funciona representativamente aquí, como supone Agustín. Eso nos ayuda a entender históricamente la imaginería de la roca aquí. Y se ven las tres en los padres de la iglesia. Hay tres propuestas sobre cuál es el significado de la roca aquí: Cristo, Pedro o la confesión de Pedro. Pero el significado de esto puede ser polivalente. Estas opciones no son necesariamente mutuamente excluyentes. Así que en la iglesia primitiva se ven las tres, y muchos padres de la iglesia las combinan. Así parece pensar Agustín, y creo que es una buena manera de abordar el pasaje. La roca es Pedro en su confesión de Cristo. Bien, así lo expresa Agustín, en su visión final de sus retractaciones: Pedro, llamado así a partir de esta roca, que es Cristo, representó a la persona de la Iglesia, que está edificada sobre esta roca y ha recibido las llaves del Reino de los Cielos, porque tú eres Pedro y no Tú eres la Roca se le dijo a él, pero la Roca era Cristo, a quien confesando, como también confiesa toda la Iglesia, Simón fue llamado Pedro. Así que pueden ver la lógica. Es Pedro: Cristo es la roca, entonces Pedro confiesa a Cristo, y por lo tanto en esa confesión Pedro es la roca. Pero Pedro no es la roca como primer titular de un oficio eclesiástico continuo, sino en cuanto representa la confesión apostólica de Cristo. Y esta interpretación encaja bien con el resto del Nuevo Testamento, donde Cristo es llamado repetidamente la roca sobre la que se edifica la iglesia. Voy a poner tres ejemplos de pasajes donde se ve ese tipo de imaginería, y esto se basa en el Salmo 118, y la roca",
                original:
                  "passage like this one on Augustine's view of this for example would be a good but just to hit the main points here. The first thing to observe is that the responsibilities of binding and loosing given to Peter here are reiterated to all the disciples two chapters later. Just as generally throughout the New Testament, authority to govern the church is given to all the apostles conjointly. And in the context of Matthew 16, Peter is speaking on behalf of all the other apostles in response to Jesus's question to them all. Who do you plural in the Greek say that I am? So that makes it legitimate to at least ask the question, okay, is this a unique Vatican 1 supremacy here that Peter is being given, placing him in a position of authority above the others, or are the responsibilities being given to Peter here ultimately to be shared with the other apostles? And in the early church, Augustine argued that Peter functioned in a representative role in this passage. Did Peter receive the keys and Paul not receive them? Did Peter receive them and John and James and the other apostles not receive them? What was given to Peter was given to the whole church? And again, Augustine's thought on this passage is not eccentric. It's not an outlier view anymore than Cyprien's is. There's lots of different views like taking the rock for example. Let's suppose that Peter is functioning representatively here uh as Augustine supposes. That helps us understand the rock imagery here historically. And you see all three of these in the church fathers. There are three proposals for what is the meaning of the rock here. Christ, Peter or Peter's confession. But the meaning of this is can be polyvalent. These options are not necessarily mutually exclusive. So in the early church you see all three of them and a lot of the church fathers combine them. This is how Augustine seems to think and I think this is a good way to approach the passage. The rock is Peter in his confession of Christ. Okay, here's how Augustine puts it. His final view from his retractions. Peter called after this rock that's Christ represented the person of the church which is built upon this rock and has received the keys of the kingdom of heaven for thou art Peter and not thou art the rock was said to him but the rock was Christ in confessing whom as also the whole church confesses Simon was called Peter. So you can see the logic here. It's Peter Christ is the rock. So Peter confesses Christ and therefore in that confession Peter is the rock. But Peter is not the rock as the first holder of an ongoing ecclesiastical office but as representing the apostolic confession of Christ. And this interpretation fits well with the rest of the New Testament where Christ is repeatedly called the rock on which the church is built. I'll put up three examples of passages where you see that kind of imagery and this is drawing from Psalm 118. and the rock",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "El congregacionalismo deja que la congregación funcione como instancia final de apelación en los asuntos de la iglesia local, viviendo bajo el señorío de Cristo y bajo pastores o ancianos que la dirigen; las cartas del Nuevo Testamento están escritas a iglesias enteras (Gál 1:8), y toda la congregación ejerce disciplina (Mt 18:15–20; 1 Cor 5:1–13; 2 Cor 2:5–11)",
            quotes: [
              {
                speaker: "Stephen J. Wellum",
                work: "The Priesthood of All Believers and Why the New Covenant Requires Congregationalism",
                outlet: "9Marks",
                date: "16 de septiembre de 2025",
                locator:
                  "2 párrafos: del párrafo que empieza «Evidence for congregationalism can be found…» al que termina «…affairs under the lordship of Christ.»",
                url: "https://www.9marks.org/article/the-priesthood-of-all-believers-and-why-the-new-covenant-requires-congregationalism/",
                text: "Hay evidencia del congregacionalismo en todo el NT. Como creyentes pactados juntos, se escogieron ancianos (Hech. 14:23; Tito 1:5), se predicó la Palabra de Dios y se practicaron las ordenanzas (Hech. 2:42; 1 Cor. 11:26), y la iglesia tomó expresión visible en asambleas locales que gobernaban sus propios asuntos. Por eso una gran cantidad de cartas del NT fueron escritas a iglesias locales, no meramente a oficiales de la iglesia o a algún cuerpo eclesiástico más grande. Las cartas fueron escritas para instruir a toda la congregación sobre sus responsabilidades de gobernarse a sí misma y de protegerse de falsos maestros. Por ejemplo, en Gálatas, Pablo espera que esta joven iglesia juzgue la autoridad angelical y apostólica si predicaran algo contrario al mensaje apostólico (Gal. 1:8). Como dice Mark Dever, “Él [Pablo] no escribe meramente a los pastores, al presbiterio, al obispo o a la conferencia, a la convención, o al seminario. Escribe a los cristianos que componen las iglesias, ¡y deja muy claro que no solo son competentes para juzgar lo que pretende ser el evangelio, sino que deben hacerlo!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nEl congregacionalismo se confirma además en la práctica de la disciplina eclesiástica. No son solo los líderes quienes deben ejercer disciplina sino toda la congregación. La iglesia debe ejercer autoridad sobre los falsos maestros (2 Cor. 10–13; Gal. 1:8; 2 Juan) y sobre la vida de las personas (Mat. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). Por eso Pablo se angustia por el comportamiento de la iglesia de Corinto, que no puede resolver disputas desde dentro y en cambio busca la ayuda de no cristianos. Para Pablo, la iglesia está actuando en contra de lo que ella es, y mediante una serie de preguntas punzantes, lo deja abundantemente claro (ver 1 Cor. 6:2–5a). La consternación de Pablo con la iglesia solo tiene sentido si asume que toda la iglesia está involucrada en este tipo de decisiones. Cada miembro tiene un papel que cumplir porque toda la iglesia es, en última instancia, la corte final de apelación para sus propios asuntos bajo el señorío de Cristo.",
                original:
                  "Evidence for congregationalism can be found throughout the NT. As believers covenanted together, elders were chosen (Acts 14:23; Titus 1:5), God’s Word was preached, and the ordinances were practiced (Acts 2:42; 1 Cor. 11:26), the church took on visible expression in local assemblies that governed their own affairs. This is why a vast number of NT letters were written to local churches, not merely to church officers or some larger ecclesiastical body. The letters were written to instruct the entire congregation of their responsibilities to govern themselves and to protect themselves from false teachers. For example, in Galatians, Paul expects this young church to sit in judgment of angelic and apostolic authority if they should preach something contrary to the apostolic message (Gal. 1:8). As Mark Dever notes, “He [Paul] doesn’t write merely to the pastors, to the presbytery, to the bishop or the conference, to the convention, or to the seminary. He writes to the Christians who compose the churches, and he makes it quite clear that not only are they competent to sit in judgment on what claims to be the gospel, but that they must!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nCongregationalism is further confirmed in the practice of church discipline. It’s not only leaders who are to exercise discipline but the entire congregation. The church is to exercise authority over false teachers (2 Cor. 10–13; Gal. 1:8; 2 John) and people’s lives (Matt. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). This is why Paul is distraught by the behavior of the Corinthian church who cannot settle disputes from within and instead seeks the help of non-Christians. For Paul, the church is acting contrary to what she is, and by a series of pointed questions, he makes this abundantly clear (see 1 Cor. 6:2–5a). Paul’s consternation with the church only makes sense if he assumes that the entire church is involved in these kinds of decisions. Each member has a role to play because the entire church is ultimately the final court of appeal for her own affairs under the lordship of Christ.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund relata que el concilio apeló a Mt 18:20 como argumento de que la autoridad de los obispos reunidos superaba la de un solo papa",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "Pope Vigilius: A Challenge to Vatican 1",
                outlet: "Truth Unites",
                date: "14 de abril de 2023",
                locator: "Minutos 43:15 a 44:20",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/Pope-Vigilius-A-Challenge-to-Vatican-1-e22cu25#t=2595",
                text: "Ahora ven la referencia a Mateo 18 ahí. Ahí está lo de que donde dos o tres están reunidos en mi nombre. Los obispos están citando ese versículo. Están citando Eclesiastés 4.9, que dice que dos son mejores que uno. Este es su razonamiento. Dicen: nosotros somos muchos, ustedes son uno solo, por lo tanto nosotros tenemos más poder. Estamos unidos como grupo de obispos, y por eso nuestra autoridad supera la de ustedes. Ese es el argumento que presentan en los Hechos. Y ciertamente no muestran ninguna conciencia de que necesitan su consentimiento para sus deliberaciones, para su conclusión teológica, para cualquiera de sus actos. Ahora, cuando el papa Pelagio después acepta Constantinopla II, que también es político, no hay ningún sentido en que alguien diga: ahora sí, ya es válido. Ahora esto, ya saben, es como: no, sobre la base de su propia autoridad, ellos declaran ajeno a otros cristianos el nombre del Papa. Su término. De hecho, incluso se ofenden por su falta de disposición a ceder ante su autoridad.",
                original:
                  "Now you see the reference to Matthew 18 there. That's where two or three are gathered in my name. The bishops are quoting that verse. They're quoting Ecclesiastes 4.9, which says two are better than one. This is their reasoning. They're saying, we are multiple, you are singular, therefore we trump you in power. We are in union as a group of bishops, and therefore our authority surpasses yours. That is the argument that they make in the Acts. And they certainly don't exhibit any awareness that they require his consent for their deliberations, for their theological conclusion, for any of their Acts. Now, when Pope Pelagius later accepts Constantinople II, which is also political, there's no sense in anybody that like now it's like, okay, now it's valid. Now this, you know, it's like, no, on the basis of their own authority, they pronounce the Pope's name alien to other Christians. Their term. In fact, they even take offense at his unwillingness to yield to their authority.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Murr conecta la disciplina eclesiástica y el atar y desatar plural con el fundamento de los apóstoles",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿DEJÓ JESÚS UN PAPA? | Lo que revelan la Biblia y la historia - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "17 de agosto de 2026",
                locator: "Minutos 1:48:59 a 1:50:05",
                url: "https://www.youtube.com/watch?v=2v5q6KEWy8I&t=6539s",
                text: "Pero aquí en Mateo 18, 18, cuando habla de aplicar disciplina en la iglesia, cuando dice si tu hermano peca contra ti, ve y habla con él. Si no te escucha, trae testigos y si no, preséntalo delante de toda la iglesia como si fuera gentil o publicano, como si ni creyente fuera. Y es en ese contexto que Jesús dice, y les aseguro que todo lo que ustedes aten en la tierra quedará atado en el cielo y todo lo que es aten en la tierra quedará desatado en el cielo. Está hablando de prohibir o permitir cosas o de implementar la disciplina en la iglesia. Y en Mateo 18, 18, Jesús les está dando la autoridad que le dio a Pedro en Mateo 16, 19. Se le está dando a todos los discípulos, a todos ellos en Mateo 18, 18. Por eso es que en Efesios 2.20 San Pablo dice edificado sobre el fundamento de los apóstoles. No dice edificado sobre el fundamento de Pedro, sino el fundamento de los apóstoles en plural. Las llaves del reino con el poder de atar y desatar que le dio a Pedro en Mateo 16.19 y en Mateo 18.18 se la dio Cristo a todos como dijo. No hay tal cosa como un papado.",
              },
            ],
          },
          {
            title: "Murr lee el atar y desatar y la promesa de dos o tres como dirigidos a los discípulos juntos",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Mateo 16:19   Yo te daré [Pedro] las llaves del reino de los cielos - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "29 de diciembre de 2023",
                locator: "Minutos 31:53 a 32:59",
                url: "https://www.youtube.com/watch?v=QO7PJOvplOs&t=1913s",
                text: "de los cielos que se le dan a pedro se le dan también la el poder de atar y desatar que le Es dado no exclusivamente a Pedro, sino a todos los apóstoles en Mateo 18, 18. Está hablando de la disciplina en la iglesia cuando prohíban una conducta que no es correcta, que no es agradable delante de Dios. Cuando la prohíban o cuando permitan algo que es conforme a Dios. Y es algo que es dado a todos los apóstoles. Y dice, continúa diciendo en Mateo 18, 19. Además, les digo que si dos de ustedes está hablando a sus discípulos, se ponen de acuerdo sobre cualquier cosa que pidan aquí en la tierra, le será hecho por mi Padre que está en los cielos, porque donde están dos o tres reunidos en mi nombre y estoy yo en medio de ellos. Entonces esta autoridad de atar y desatar es dada a todos los apóstoles, no exclusivamente a Pedro. Entrar en el reino de los cielos, en el libro de Mateo que 29 veces habla del reino de los cielos y en los evangelios significa sencillamente obtener la salvación y la vida eterna.",
              },
            ],
          },
          {
            title: "White contrasta la promesa futura de las llaves con su recepción junto a los demás apóstoles",
            quotes: [
              {
                speaker: "James White",
                work: "CC210: Cameron Bertuzzi & James White Discuss Catholicism",
                outlet: "Capturing Christianity CC210",
                date: "3 de diciembre de 2022",
                locator: "Minutos 32:40 a 33:04",
                url: "https://soundcloud.com/capturingchristianity/cc210-cameron-bertuzzi-james-white-discuss-catholicism#t=1960",
                text: "Bueno, lo que haría después sería: está bien, dado que Doso es futuro, ¿cuándo recibió Pedro estas llaves? Y solo hay dos opciones. O es Mateo 18 y por lo tanto es junto con todos los demás apóstoles, en contradicción con el Vaticano I, Pastor Eternus, o Mateo ni siquiera lo registró para nosotros. Fue tan poco importante que ni siquiera aparece en el registro escritural. Esas son las únicas opciones que tienen.",
                original:
                  "Well, where I would go next would be, okay, given that Doso is future, then when did Peter receive these keys? And there's only two options. Either it's Matthew 18 and hence it's with all the other apostles in contradiction to Vatican one, Pastor Eternus, or Matthew didn't even record it for us. It was so unimportant that it doesn't even show up in the scriptural record. Those are the only options you've got.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund sostiene que la iglesia local tiene la autoridad final sobre la disciplina, las disputas, la doctrina y la membresía: recibe de nuevo a un miembro (2 Cor 2), expulsa a uno (1 Cor 5) y es la instancia final de apelación (Mt 18), sin sede central salvo el oficio apostólico único",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "Why I'm a Baptist",
                outlet: "Truth Unites",
                date: "30 de abril de 2023",
                locator: "Minutos 1:18 a 2:24",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/Why-Im-a-Baptist-e239cuq#t=78",
                text: "Número dos, gobierno congregacional de la iglesia. Me parece que cada iglesia local debería tener relación, asociación, etc. con otras iglesias. Distinguimos el poder de consejo y el poder de mandato, así que tenemos muchísima relación, pero la rendición de cuentas última, la autoridad última, el poder de hacer cumplir algo, debería recaer en los miembros de esa misma iglesia para asuntos de disciplina, disputa, doctrina, membresía. Lo ven en el Nuevo Testamento, 2 Corintios 2: esa iglesia tiene la responsabilidad de recibir de nuevo al miembro. 1 Corintios 5: esa iglesia tiene la responsabilidad de expulsar al miembro. Está, ya saben, Mateo 18, la última instancia de apelación: díselo a la iglesia. Parece que en la iglesia primitiva no había una sede central que dictara cómo debían funcionar las iglesias locales particulares, ni a la que se hiciera la apelación final. La única excepción a eso, donde hay una especie de autoridad pan-eclesial, sería el oficio de apóstol, pero ese es único en la historia de la redención.",
                original:
                  "Number two, congregational church government. It seems to me that each local church should have relationship, partnership, etc. with other churches. We distinguish the power of counsel and the power of command, so we have lots of relationship, but the ultimate accountability, the ultimate authority, the power to enforce something should be that own church's members for matters of discipline, dispute, doctrine, membership. You see this in the New Testament, 2 Corinthians 2, that church is accountable to receive the member back in. 1 Corinthians 5, that church is accountable to put the member out. There's supposed to be, you know, Matthew 18, the final court of appeal, tell it to the church. It seems like there's no central headquarters in the early church that dictates how particular local churches should be functioning or that you make the final appeal to. The only exception of that where you have a kind of pan church authority would be the office of apostle, but that is redemptive historically unique.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.2.19-Eph.2.22"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title: "Ortlund lee Ef 2:20 como una imagen compartida por todos los apóstoles al compararla con Mt 16",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: 'Augustine on the "Rock" of Matthew 16 (This Will Surprise You)',
                outlet: "Truth Unites",
                date: "18 de diciembre de 2024",
                locator: "Minutos 6:50 a 8:01",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/Augustine-on-the-Rock-of-Matthew-16-This-Will-Surprise-You-e2sd962#t=410",
                text: "Este es mi enfoque básico para Mateo 16: digo, miren, aquí hay un pasaje difícil. En lugar de cargar todo el peso en este único pasaje para hacer algo singular, leámoslo en línea con el resto del Nuevo Testamento, porque ahí tienen la misma imaginería a lo largo de todo el Nuevo Testamento. Y de manera consistente, Cristo es llamado la roca o la piedra angular sobre la que se edifica la iglesia. Ya vimos 1 Corintios 10 citado por Agustín. Y tienen esta imaginería del Salmo 118 sobre Cristo como piedra de tropiezo y roca de ofensa. Esto viene del lenguaje sobre la piedra que los edificadores desecharon y que se convirtió en la piedra angular. Y luego, en ocasiones en el Nuevo Testamento, los apóstoles participan de esa imaginería. A veces todos los apóstoles, como en Efesios 2.20; a veces ciertos apóstoles, como en Gálatas 2.9, con el grupo íntimo de tres: Santiago, Pedro y Juan. Así que parece haber una tensión aquí entre la manera en que Agustín piensa el pasaje y lo que encontrarán, por ejemplo, en el Vaticano I, y la forma en que este pasaje se usa como una especie de texto de prueba para un primado de jurisdicción otorgado inmediata y directamente a Pedro por Cristo.",
                original:
                  "This is my basic approach to Matthew 16, is I say, look, here's a tough passage. Rather than put all the weight on this one passage to do something unique, let's just read it in line with the rest of the New Testament, because you have the same imagery all throughout the New Testament. And consistently, Christ is called the rock or the cornerstone on which the church is built. We've already seen 1 Corinthians 10 quoted by Augustine. And you have this imagery from Psalm 118 about Christ as the stone of stumbling and rock of offense. This is from this language about the stone that the builders rejected becoming the cornerstone. And then at times in the New Testament, you have the apostles participating in that imagery. Sometimes all of the apostles, as in Ephesians 2.20, sometimes certain of the apostles, as in Galatians 2.9, with sort of the inner three of James and Peter and John. So there seems to be a tension here between Augustine's way of thinking about the passage and what you'll find, for example, at Vatican I and the way this passage is used as a sort of proof text for a primacy of jurisdiction being given immediately and directly to Peter by Christ.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Murr conecta la disciplina eclesiástica y el atar y desatar plural con el fundamento de los apóstoles",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿DEJÓ JESÚS UN PAPA? | Lo que revelan la Biblia y la historia - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "17 de agosto de 2026",
                locator: "Minutos 1:48:59 a 1:50:05",
                url: "https://www.youtube.com/watch?v=2v5q6KEWy8I&t=6539s",
                text: "Pero aquí en Mateo 18, 18, cuando habla de aplicar disciplina en la iglesia, cuando dice si tu hermano peca contra ti, ve y habla con él. Si no te escucha, trae testigos y si no, preséntalo delante de toda la iglesia como si fuera gentil o publicano, como si ni creyente fuera. Y es en ese contexto que Jesús dice, y les aseguro que todo lo que ustedes aten en la tierra quedará atado en el cielo y todo lo que es aten en la tierra quedará desatado en el cielo. Está hablando de prohibir o permitir cosas o de implementar la disciplina en la iglesia. Y en Mateo 18, 18, Jesús les está dando la autoridad que le dio a Pedro en Mateo 16, 19. Se le está dando a todos los discípulos, a todos ellos en Mateo 18, 18. Por eso es que en Efesios 2.20 San Pablo dice edificado sobre el fundamento de los apóstoles. No dice edificado sobre el fundamento de Pedro, sino el fundamento de los apóstoles en plural. Las llaves del reino con el poder de atar y desatar que le dio a Pedro en Mateo 16.19 y en Mateo 18.18 se la dio Cristo a todos como dijo. No hay tal cosa como un papado.",
              },
            ],
          },
          {
            title:
              "Ortlund distingue el papel fundacional de los apóstoles de la afirmación de sucesión que se defiende",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "CC190: The Case AGAINST The Papacy w/ Dr. Gavin Ortlund",
                outlet: "Capturing Christianity, CC190",
                date: "22 de abril de 2022",
                locator: "Minutos 21:04 a 22:04",
                url: "https://soundcloud.com/capturingchristianity/cc190-the-case-against-the-papacy-w-dr-gavin-ortlund#t=1264",
                text: "La razón por la que eso es un problema es que Pedro era apóstol, y los apóstoles eran los testigos oculares de Cristo que fueron fundamentales en la iglesia cristiana, Efesios 2.20. No se puede simplemente asumir que la autoridad apostólica va a continuar. Hace falta una razón para eso. Igual que si yo afirmara que hay un oficio joánico que continúa en la iglesia, necesitaría alguna clase de razón para hacer esa afirmación. Tenemos muchísima información detallada sobre los oficios de la iglesia en el Nuevo Testamento. Tenemos múltiples listas de requisitos, listas detalladas de lo que buscas en un presbítero de una iglesia, por ejemplo. ¿Por qué no hay ni un solo versículo que diga: ah, por cierto, también va a haber otro oficio que sea una cabeza suprema e infalible sobre la iglesia? Dada la autoridad gigantesca investida en este oficio, no creo que sea pedir demasiado que se mencione en algún lugar del Nuevo Testamento por Jesús y los apóstoles.",
                original:
                  "The reason that's a problem is Peter was an apostle, and apostles were the eyewitnesses of Christ who were foundational in the Christian church, Ephesians 2.20. You can't just assume that apostolic authority is going to roll on. One needs a reason for that. Just as if I claimed that there was a Johannine office that continues in the church, I would need some kind of reason to make that claim. We have so much detailed information about the offices of the church in the New Testament. We've got multiple qualifications lists, detailed lists of what you look for in a presbyter over a church, for example. Why is there not a single verse that ever says, oh, by the way, there's actually also going to be another office that's a supreme and infallible head over the church? Given the gargantuan authority invested in this office, I don't think it's too much to ask that it'd be mentioned somewhere in the New Testament by Jesus and the apostles.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Schreiner ubica la autoridad apostólica continua en la Escritura al compararla con la autoridad papal",
            quotes: [
              {
                speaker: "Thomas Schreiner",
                work: "Introduction to Biblical Theology - Dr. Thomas Schreiner - Lecture 23",
                outlet: "The Master's Seminary",
                date: "1 de febrero de 2018",
                locator: "Minutos 5:57 a 6:30",
                url: "https://www.youtube.com/watch?v=niwIc9D2EW8&t=357s",
                text: "Los católicos romanos dicen que la autoridad apostólica se encuentra en el Papa y sus obispos. Y nosotros no estamos de acuerdo con eso. Decimos que la autoridad apostólica se encuentra en las Escrituras. ¿Dónde está ahora la autoridad apostólica? Ya no están, ¿verdad? Argumentamos que la autoridad apostólica, y creo que tenemos razón, se encuentra en la santa Palabra de Dios. Todos creemos en la autoridad apostólica. Todos creemos que la iglesia está fundada sobre el fundamento de los apóstoles y los profetas, Efesios 2.20, y que la autoridad apostólica para nosotros está en la Palabra de Dios.",
                original:
                  "Roman Catholics say apostolic authority is found in the Pope and his bishops. And we don't agree with that. We say apostolic authority is found in the scriptures. Where's apostolic authority now? They're gone, aren't they? We argue that apostolic authority, and I think we're right, apostolic authority is found in the holy word of God. We all believe in apostolic authority. We all believe the church is founded on the foundation of the apostles and the prophets, Ephesians 2.20, that that apostolic authority for us is in the word of God.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Pet.5.1-1Pet.5.4"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title:
              "El autor tiene bastante certeza de que el oficio de pastor es idéntico al de anciano u obispo, ya que el verbo «pastorear» es la tarea encomendada a los ancianos y obispos, que además enseñan a la congregación",
            quotes: [
              {
                speaker: "Benjamin Merkle",
                work: "Hierarchy in the Church?",
                outlet: "9Marks",
                date: "26 de febrero de 2010",
                locator:
                  "1 párrafo: del párrafo que empieza «What is particularly important to this…» al que termina «…concerned about leadership in the church.»",
                url: "https://www.9marks.org/article/hierarchy-church/",
                text: "Lo que es particularmente importante para este estudio es que la forma verbal se usa a menudo en conexión con las funciones dadas a los ancianos u obispos. Por ejemplo, en Hechos 20 Pablo llama a los “ancianos” (v. 17) y los exhorta a “cuidarse a sí mismos y a todo el rebaño [poimnion]”, ya que han sido constituidos como “obispos” y son llamados “a pastorear [poimainein] la iglesia de Dios” (v. 28). Asimismo, Pedro exhorta a los “ancianos” (1 Pe. 5:1) a “pastorear [poimanate] el rebaño [poimnion] de Dios, sirviendo como obispos” (1 Pe. 5:3). Dado que el verbo “pastorear” es la tarea del anciano u obispo, es fácil ver por qué tal persona podría ser llamada “pastor”. No solo a los pastores o ancianos u obispos se les da la tarea de pastorear, sino que también son quienes enseñan a la congregación (Ef. 4:11; 1 Tim. 3:2; 5:17). Por lo tanto, podemos estar razonablemente seguros de que el oficio de pastor es idéntico al del anciano u obispo. Esta posición se ve reforzada por el hecho de que el término pastor no se menciona en 1 Timoteo ni en Tito, que se ocupan del liderazgo en la iglesia.",
                original:
                  "What is particularly important to this study is that the verb form is often used in connection with the duties given to the elders or overseers. For example, in Acts 20 Paul calls for the “elders” (v. 17) and encourages them to “be on guard for themselves and for all the flock [poimnion]” since they have been appointed as “overseers” and are called “to shepherd [poimainein] the church of God” (v. 28). Likewise, Peter exhorts the “elders” (1 Pet. 5:1) to “shepherd [poimanate] the flock [poimnion] of God, serving as overseers” (1 Pet. 5:3). Since the verb “to pastor/shepherd” is the task of the elder/overseer, it is easy to see why such a person could be called a “pastor/shepherd.” Not only are pastors or elders/overseers given the task of shepherding, but they are also those who teach the congregation (Eph. 4:11; 1 Tim. 3:2; 5:17). Therefore, we can be reasonably certain that the office of pastor is identical to that of the elder or overseer. This position is strengthened by the fact that the term pastor is not mentioned in 1 Timothy and Titus, which are concerned about leadership in the church.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "White lee el discurso de Pedro a los ancianos como el de un copastor y no como el de un papa",
            quotes: [
              {
                speaker: "James White",
                work: "Peter & The Papacy",
                outlet: "Apologia Church",
                date: "23 de enero de 2024",
                locator: "Minutos 21:35 a 22:20",
                url: "https://apologia-church.simplecast.com/episodes/peter-the-papacy-LKMpdMUk#t=1295",
                text: "que Pedro sí escribió esas cartas; nada en ellas da ninguna indicación de que se vea a sí mismo como la cabeza de la iglesia en la tierra. En su primera epístola dice lo siguiente: “A los ancianos entre ustedes, les exhorto como compañero anciano, testigo de los padecimientos de Cristo y partícipe también de la gloria que ha de ser revelada: pastoreen el rebaño de Dios que está bajo su cuidado, sirviendo como obispos, no porque tengan que hacerlo, sino porque están dispuestos, como Dios quiere que lo estén; no por ganancia deshonesta, sino con empeño; no como señores sobre los que les han sido confiados, sino siendo ejemplos para el rebaño”. Pedro no habla como un papa, sino como compañero anciano, compañero siervo. No habla como pastor principal, sino como un pastor más. No hay ninguna referencia a Roma, al papado, ni a ningún otro elemento de las afirmaciones católicas romanas en esta epístola.",
                original:
                  "that Peter did write those letters nothing in those letters gives any indication that he views himself as the head of the church on earth in his first epistle he says the following quote to the elders among you I appeal as a fellow elder a witness of Christ's sufferings and one who also will share in the glory to be revealed be shepherds of God's flock that is under your care serving as overseers, not because you must, but because you are willing, as God wants you to be, not greedy for money, but eager to serve, not lording it over those entrusted to you, but being examples of the flock. Peter doesn't speak as a pope, but as a fellow elder, a fellow servant. He does not speak as a chief pastor, but a fellow pastor. There is no reference to Rome, the papacy, or any other element of Roman Catholic claims in this epistle.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund lee la exhortación de Pedro como la de un coanciano, como una apelación a una autoridad común y no única",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The Papacy Is Not From God",
                outlet: "Truth Unites",
                date: "15 de octubre de 2025",
                locator: "Minutos 15:34 a 16:04",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-Papacy-Is-Not-From-God-e39imvq#t=934",
                text: "En la medida en que Pedro exhorta a otros en la iglesia, no apela a una autoridad única, sino a una común: exhorto a los ancianos entre ustedes como compañero anciano, 1 Pedro 5.1. Puedes decir: bueno, sí, pero aun así no está apelando a su autoridad ahí. Bueno, claro. ¿Dónde lo hace? Miren, este es el problema: hay un vacío aquí en el fundamento mismo. No hay fundamento para esta idea.",
                original:
                  "To the extent that Peter exhorts others in the church, he doesn't appeal to a unique authority, but a common one, I exhort the elders among you as a fellow elder, 1 Peter 5.1. You can say, okay, yeah, but he's still not appealing to his authority there. Fine, sure. Where does he? See, this is the problem is there's a vacuum here at the very foundation. There's no foundation for this idea.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Murr lee el pasaje como un encargo pastoral compartido bajo Cristo, el Pastor supremo",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿DEJÓ JESÚS UN PAPA? | Lo que revelan la Biblia y la historia - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "17 de agosto de 2026",
                locator: "Minutos 1:22:44 a 1:24:07",
                url: "https://www.youtube.com/watch?v=2v5q6KEWy8I&t=4964s",
                text: "A los ancianos o pastores entre ustedes, apacienten el rebaño de Dios que está a su cargo. Y fíjate que interesante porque la iglesia católica romana, algunos apologistas dicen, no, pues es que le dijo apacienta mis ovejas. Bueno, pero aquí el mismo Pedro está hablando de que los ancianos que están en la iglesia, que era una pluralidad de ancianos, si te das cuenta, es interesante que no dice a los sacerdotes, ¿verdad? dice a los ancianos o pastores entre ustedes, apacienten el rebaño de Dios que está a su cargo, dice que está a mi cargo, y al aparecer el príncipe de los pastores, el príncipe de los pastores no es Pedro, el príncipe de los pastores es Jesucristo, recibirán la inmarchitable corona de gloria. La gente en las olimpiadas corría y les daban unas guirnaldas de oliva de muestra que habían sido triunfadores, Pero la corona que habremos de recibir nosotros de correr la carrera de la fe con fidelidad no va a ser marchitable, sino va a ser la vida eterna que el Señor va a dar a todos los que están en Jesucristo y que caminan con el Señor. Bueno, muy interesante porque esto aclara de que no solamente es Pedro el único que va a apacentar las ovejas del Señor, sino es cada persona que Dios ha llamado para servirle, los ancianos de las iglesias y el príncipe de los pastores es el mismo Jesucristo.",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.15.1-Acts.15.31"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title:
              "En el concilio de Hechos 15, Pedro es uno de varios apóstoles que hablan; los Padres ven a Santiago con la mayor autoridad",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The Papacy Is Not From God",
                outlet: "Gavin Ortlund, YouTube",
                date: "15 de octubre de 2025",
                locator: "Minutos 13:39 a 15:28",
                url: "https://www.youtube.com/watch?v=z7zwIN8vEkA&t=819s",
                text: 'Lo más cercano sería Hechos 15. Es la primera gran controversia doctrinal de la iglesia primitiva. Los apóstoles y los ancianos de Jerusalén se reúnen para resolverla. Este es exactamente el tipo de escenario para el que supuestamente necesitamos un papa. Y, sin embargo, es una decisión colectiva entre los apóstoles. Pedro es solo uno entre varios apóstoles que hablan, y no parece hablar de manera definitiva. Si alguien tiene un papel superior de algún modo ahí, sería Santiago, que con las palabras por tanto, mi juicio es habla de forma más concluyente hacia la parte final de la discusión. Pero ni siquiera creo que haya que tener una visión muy rígida de que Santiago estuviera en algún tipo de posición superior: ya sabes, es una decisión colectiva. Aun así, en la medida en que se encuentra discusión patrística sobre esto, con más frecuencia se ve a Santiago como quien tiene la mayor autoridad. Así lo expresa John Crosstam en su homilía sobre este pasaje. Cita: Santiago fue investido con la autoridad principal. Pedro, en efecto, habló con más fuerza, pero Santiago aquí con más suavidad, porque así le conviene a quien está en autoridad superior: dejar a otros lo que es desagradable de decir, y aparecer él mismo en la parte más suave. Así que, eh, conozco cómo son estas discusiones y todas las maniobras evasivas que la gente va a usar. Ya saben, van a decir: argumento desde el silencio. Van a decir, eh, que estoy asumiendo solos scriptor, todas estas cosas; que si lo piensan un poco no es así. Eh, yo solo miro los datos y digo: ¿es verdad esto? ¿Jesús instituyó este oficio, o los apóstoles lo concibieron? ¿Es históricamente plausible? Solo mirar los datos y trabajar con ellos, diciendo: no parece. Eh, y en este punto con Hechos 15, la gente normalmente dirá: bueno, Pedro tenía tal autoridad, simplemente no la ejerció aquí. A lo que yo respondería: "Bien, de acuerdo. ¿Dónde, en el Nuevo Testamento, encontramos este oficio?"',
                original:
                  "the most would be Acts 15. This is the first great doctrinal controversy of the early church. The apostles and elders in Jerusalem come together to resolve it. This is exactly the kind of scenario for which we supposedly need a pope. And yet it's a group decision among the apostles. Peter is only one among several apostles who speaks and he does not appear to speak in a definitive matter. If anyone is in a sort of uh higher role there, it would be James who with the words therefore my judgment is speaks more conclusively toward the latter part of the discussion. But I don't even think you have to have a real tight view of James being in some you know it's a group decision to the extent that you do find petristic discussion on this more commonly James is seen as having the greater authority. This is John Crosstam in his sermon on this passage how he puts it. Quote, James was invested with the chief rule. Peter indeed spoke more strongly, but James here more mildly for thus it behooves one in high authority to leave what is unpleasant for others to say while he himself appears in the milder part. So, uh I'm familiar with how these discussions go and all the evasive maneuvers people will have. You know, they'll they'll say argument from silence. They'll say um they'll say I'm assuming solos scriptor all these things that if you just think about it it's like no um I'm just looking at the data and saying is this true. Did Jesus institute this office or was did the apostles envision this? Is this historically plausible? Just looking at the data working through it saying doesn't look like it. Um and on this point with Acts 15 people will typically say well Peter had such an authority he simply didn't exercise it here. to which I would respond by saying, \"Okay, fine. Where does he where in the New Testament do we find this office?\"",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "White argumenta, a partir de la secuencia de los oradores, del juicio de Santiago y de la autoría de la carta, en contra de leer a Pedro como papa en el concilio",
            quotes: [
              {
                speaker: "James White",
                work: "Peter & The Papacy",
                outlet: "Apologia Church",
                date: "23 de enero de 2024",
                locator: "Minutos 30:54 a 33:08",
                url: "https://apologia-church.simplecast.com/episodes/peter-the-papacy-LKMpdMUk#t=1854",
                text: "Pero mucha gente va a señalar Hechos capítulo 15 y decir: Pedro se levanta y dice estas cosas, y eso muestra que es Papa. Aquí está el problema. En el versículo 6 leemos: los apóstoles y los ancianos se reunieron para considerar este asunto. No se dice: el Papa y los apóstoles y los ancianos se reunieron. Pedro es claramente considerado un apóstol como todos los demás. El concilio no está bajo la dirección de Pedro. Está claramente bajo la dirección de Santiago, que es el obispo de Jerusalén. Pedro se dirige al grupo no como Papa, sino como apóstol usado por Dios para llevar el evangelio a los gentiles. Concluye su discurso así: creemos que es por la gracia de nuestro Señor Jesucristo que somos salvos, así como ellos. Sabemos que las deliberaciones no terminan con el discurso de Pedro. ¿Lo digo bien? En cambio, leemos en el versículo 12: toda la asamblea quedó en silencio mientras escuchaban a Bernabé y Pablo contar acerca de las señales y maravillas milagrosas que Dios había hecho entre los gentiles por medio de ellos. Pablo y Bernabé se dirigieron al grupo y confirmaron la opinión de Pedro relatando la obra maravillosa de Dios en sus propios ministerios. En este punto, Santiago toma la palabra y, usando el modo imperativo, el modo de mando, ordena a la asamblea que escuche sus palabras. Confirma las palabras de Pedro, la cita de la Escritura, y al hacerlo da su juicio en el versículo 19. Aquí tenemos la conclusión del asunto. La carta está escrita por sugerencia de Santiago, pero de nuevo en el nombre no de Pedro el Papa, sino de los apóstoles y ancianos, sin que aparentemente haya papas disponibles. Las palabras de Pedro en Hechos 15, 11 nos dan nuestra última mirada a Pedro en Hechos. A partir de este punto, no se hace ninguna mención de él. Él, que supuestamente es la cabeza misma de la iglesia universal, el fundador de la iglesia en Roma. Incluso cuando Pablo llega a Roma al final del libro, Pedro no aparece por ninguna parte. Hechos no es un libro amigable con el concepto del papado.",
                original:
                  "But a lot of people will point to Acts chapter 15 and say, Peter stands up and he says these things and that shows he's Pope. Here's the problem. In verse 6, we read the apostles and elders met to consider this question. It is not said the Pope and the apostles and the elders met. Peter is plainly considered an apostle just as all the rest. The council is not under the direction of Peter. It is plainly under the direction of James, who is the bishop of Jerusalem. Peter addresses the group not as a Pope, but as an apostle used by God to bring the gospel to the Gentiles. He concludes his speech as follows. We believe it is through the grace of our Lord Jesus Christ that we are saved just as they are. We know that the deliberations do not end with Peter's speech. Say that right? Instead, we read in verse 12, the whole assembly became silent as they listened to Barnabas and Paul telling about the miraculous signs and wonders God had done among Gentiles through them. Paul and Barnabas addressed the group and confirmed Peter's opinion by relating God's wondrous work in their own ministries. At this point, James speaks up and using the imperative mode, the mode of command, commands the assembly to listen to his words. He confirms Peter's words, the citation of scripture, and upon doing this gives his judgment in verse 19. Here we have the conclusion of the affair. The letter is written at James's suggestion, but again in the name not of Peter the Pope, but of the apostles and elders, no popes seemingly being available. The words of Peter in Acts 15, 11 give us our final look at Peter in Acts. From this point on, no mention is made of him. He who is allegedly the very head of the church universal, the founder of the church at Rome. Even when Paul arrives in Rome at the end of the book, Peter is nowhere to be found. Acts is not a friendly book to the concept of the papacy.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund sostiene la confesión de Pedro en el contexto apostólico compartido y la contrasta con la jurisdicción papal",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "Engaging Suan Sonna's Typological Argument for the Papacy",
                outlet: "Truth Unites",
                date: "9 de diciembre de 2022",
                locator: "Minutos 45:58 a 48:38",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/Engaging-Suan-Sonnas-Typological-Argument-for-the-Papacy-e1s13cn#t=2758",
                text: "Lo que tienen en Mateo 16: hay dos razones por las que creo que tomarlo así es lo mejor. Pedro es la roca en su confesión apostólica de Cristo, porque Cristo es la roca última sobre la que se edifica la iglesia. Eso nos permite tomar la imaginería de la roca de manera consistente a lo largo del Nuevo Testamento. Así que podemos leer Mateo 16 de manera consistente con Efesios 2, 1 Corintios 10, 1 Pedro 2, todos los cuales usan esta imaginería, y posiblemente Gálatas 2.9, todos los cuales usan esta imaginería, a partir del Salmo 118, donde la roca es Cristo, en la interpretación del Nuevo Testamento. Entonces, en otras palabras, esto nos permite leer Mateo 16 de manera consistente con el resto del Nuevo Testamento. También nos permite leer este pasaje en su contexto inmediato. Esto no es cuando Pedro es llamado como apóstol. Esto es en su confesión de Cristo, al responder a una pregunta que se les hizo a todos los apóstoles. Y, de nuevo, esto nos va a permitir tener Mateo 16 y Mateo 18 trabajando juntos, no en tensión entre sí, porque Pedro es destacado en Mateo 16, pero las responsabilidades que se le dan de atar y desatar se repiten en Mateo 18. El tercer punto de énfasis es decir que lo que se le da a Pedro en este pasaje se comparte con los otros apóstoles. No parece que Pedro reciba autoridad sobre los otros apóstoles de la manera en que el Papa tiene autoridad sobre los otros obispos. Con frecuencia cito el lenguaje del Vaticano I, un deber jerárquico de subordinación y verdadera obediencia. El Papa tiene autoridad sobre los otros obispos, jurisdicción inmediata y universal. Eso no es lo que vemos con Pedro. Acabo de mencionar Mateo 18, cómo todos los otros... Y sé que los católicos tienen su propia manera de interpretar eso, pero solo trato de decir: cuál es mi propuesta y cuál es la mejor manera de tomarlo. A lo largo del Nuevo Testamento, simplemente no ven a Pedro funcionando con ese tipo de supremacía del Vaticano I. Y entonces, si leen Mateo 16 en relación con Mateo 18 y en relación con todo el Nuevo Testamento, no estamos minimizando Mateo 16. Solo, ya saben, damos un paso atrás, miramos el panorama completo. Miren todo. Hechos 15, siempre lo traigo a colación. Creo que es un pasaje muy decisivo. En la crisis doctrinal que estaba ocurriendo, es una decisión grupal. Y si eso no está claro solo leyendo Hechos 15, miren cómo el mismo Lucas lo resume en el capítulo siguiente. En el versículo 4 de Hechos capítulo 16, se trata de las decisiones que han sido alcanzadas por los apóstoles y los ancianos que estaban en Jerusalén. No hay ninguna idea de que Pedro dio un dogma, o de que Pedro funciona por encima de los otros apóstoles, o tiene supremacía, o algo por el estilo.",
                original:
                  "What you have in Matthew 16, there's two reasons why I think taking it like this is best. Peter is the rock in his apostolic confession of Christ because Christ is the ultimate rock the church is built upon. What that does is it enables us to take the rock imagery consistently throughout the New Testament. So we can read Matthew 16 consistently with Ephesians 2, 1 Corinthians 10, 1 Peter 2, all of which use this imagery, and possibly Galatians 2.9, all of which use this imagery drawing from Psalm 118, where the rock is Christ, in the interpretation of the New Testament. So, in other words, this enables us to read Matthew 16 consistently with the rest of the New Testament. It also enables us to read this passage in its immediate context. This is not when Peter is called as an apostle. This is in his confession of Christ in responding to a question that was put to all of the apostles. And again, this is going to enable us to have Matthew 16 and Matthew 18 working together, not in tension with each other, because Peter is being singled out in Matthew 16, but the responsibilities that are given to him of binding and loosing are repeated in Matthew 18. The third point of emphasis is just to say, what is given to Peter in this passage is shared among the other apostles. It doesn't look like Peter is being given authority over the other apostles in a way like the way the Pope has authority over the other bishops. I often reference the language of Vatican I, a hierarchical duty of subordination and true obedience. The Pope has authority over the other bishops, immediate and universal jurisdiction. That is not what we see with Peter. I just mentioned Matthew 18, how all the other... And I know Catholics have their own way of interpreting that, but I'm just trying to say, what's my proposal and what's the best way to take it. Throughout the New Testament, you just don't see Peter functioning with that kind of Vatican I supremacy. And so if you just read Matthew 16 in relation to Matthew 18 and in relation to the whole New Testament, we're not downplaying Matthew 16. We're just, you know, step back, look at the whole panoply. Look at everything. Acts 15, I often bring up. I think it's a very decisive passage. In the doctrinal crisis going on, it is a group decision. And if that's not clear from just reading through Acts 15, look at how Luke himself summarizes it in the next chapter. In verse 4 of Acts chapter 16, it's the decisions that have been reached by the apostles and elders who were in Jerusalem. There isn't this idea that Peter gave a dogma, or Peter is functioning over the other apostles, or has supremacy, or something like that.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Murr lee Hch 15:1 («algunos que venían de Judea enseñaban que si no se circuncidaban conforme a la costumbre de Moisés no podían ser salvos»), recuerda el pacto de Dios con Abraham en Gn 17, y explica que los creyentes judíos pedían algo dentro de la ley de Dios, por eso decir que los gentiles no podían salvarse de otro modo era grave",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Hechos 15 ¿Es necesario someterse a la ley de Moisés para ser salvos? Dr. Carlos Andres Murr",
                outlet: "Carlos Andres Murr",
                date: "25 de febrero de 2021",
                locator: "Minutos 3:43 a 5:10",
                url: "https://www.youtube.com/watch?v=kgYGy2v_Xo4&t=223s",
                text: "Dice el versículo 1. Algunos que llegaron de Judea enseñaban a los hermanos, si no se circuncidan conforme al rito de Moisés, no pueden ser salvos. Dios había hecho un pacto con Israel y en Génesis 17 Dios pidió a Abraham que fuera circuncidado y dijo que este iba a ser un pacto eterno con su descendencia donde la carne del prepucio de los varones israelitas iba a ser quitada a los ocho días de nacido como un recordatorio físico visible en lo íntimo de la persona en el que recordaba que era un pueblo bajo pacto con Dios. Y es interesante porque aunque Dios había dicho que era algo eterno, vemos que va a haber una diferencia en lo que los apóstoles concluyen guiados por el Espíritu de Dios en este pasaje. Y en Hechos 15, lo único que estaba sucediendo es que estos cristianos judíos que habían creído en Jesucristo como el Mesías prometido en los profetas, lo que esperaban era que los que no eran judíos, puesto que no habían sido circuncidados a los ocho días de nacidos, que debían ser circuncidados para estar dentro del pacto de Dios, dentro del pueblo de Dios. pues es lo que ellos conocían por generaciones y es lo que la ley de Dios misma, la ley de Moisés demandaba. Entonces lo que estaban pidiendo no era algo fuera de la ley de Dios, era algo dentro de la ley de Dios.",
              },
            ],
          },
          {
            title:
              "Murr lee que los delegados, una vez despedidos, bajaron a Antioquía y entregaron la carta, y los hermanos se regocijaron por su aliento (Hch 15:30–31); dice que los gentiles fueron aceptados por Dios sin guardar las reglamentaciones ni hacerse judíos en su modo de vivir",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Hechos 15 ¿Es necesario someterse a la ley de Moisés para ser salvos? Dr. Carlos Andres Murr",
                outlet: "Carlos Andres Murr",
                date: "25 de febrero de 2021",
                locator: "Minutos 33:06 a 33:36",
                url: "https://www.youtube.com/watch?v=kgYGy2v_Xo4&t=1986s",
                text: "el siguiente versículo. Dice, así que ellos después de ser despedidos descendieron a Antioquía y Reuniendo a la congregación entregaron la carta, se las leyeron ahora sí. Y dice que cuando los hermanos la leyeron se regocijaron por el consuelo que les impartía. Somos aceptados por Dios. Gloria a Dios, no necesitamos guardar todos estos reglamentos y empezar a hacernos judíos en nuestra forma de vivir en pleno obediencia a la Torah, a la ley de Moisés y circuncidarnos.",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.1.20-Eph.1.23"],
      text: "Segunda Confesión de Londres (1689), 26.2 notas (b), (c) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] are and may be called visible Saints; and of such ought all particular Congregations to be constituted.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Segunda Confesión de Londres (1689), 26.1 nota (a) (1688 p. 85): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Catholick or Universal Church, which (with respect to the internal work of the Spirit, and truth of Grace) may be called Invisible, consists of the whole Number of the Elect, that have been, are, or shall be gathered into one, under Christ, the Head thereof; and is the Spouse, the Body, the Fulness of Him that filleth all in all.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar. Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "Wellum dice que no se puede pensar el evangelio sin la iglesia, porque Cristo y su pueblo están entretejidos en la Escritura: Jesús edifica su iglesia (Mt 16), la iglesia es la comunidad del nuevo pacto (Heb 8), partícipe de la Jerusalén celestial (Heb 12), el nuevo templo (Heb 3), el nuevo hombre (Ef 2); en Ef 1:22–23 todo el gobierno de Cristo es «en y para la iglesia»; las llaves del reino están atadas a la proclamación del evangelio por la iglesia, y en Ef 3 la iglesia es la manifestación de la sabiduría de Dios",
            quotes: [
              {
                speaker: "Stephen J. Wellum",
                work: "The Church and the Gospel in the 21st Century Part 2 - Dr. Stephen Wellum",
                outlet: "Toronto Baptist Seminary & Bible College",
                date: "12 de abril de 2019",
                locator: "Minutos 56:02 a 58:04",
                url: "https://www.youtube.com/watch?v=3D7BvYIwQXA&t=3362s",
                text: "Porque en la Escritura, Cristo y su pueblo están íntimamente entrelazados. Piensen en Mateo capítulo 16. Jesús ha venido a edificar su iglesia. Eso somos nosotros. Edificar la asamblea. Llama a sus discípulos, edifica esa iglesia. Nosotros somos esas personas. Estamos en el libro de Hebreos capítulo 8, el pueblo de la comunidad del nuevo pacto. Todo eso habla de la fidelidad de los propósitos de Dios. Somos ese pueblo, ese pueblo transformado, nacido del Espíritu, capacitado por el Espíritu. Somos partícipes de la Jerusalén celestial, el Sion, Hebreos capítulo 12. Hebreos 3, somos el nuevo templo. Eso es lo que somos. Efesios 2, somos el nuevo hombre, la nueva creación. Efesios 1 versículos 22 y 23, que todo el gobierno soberano de Dios, el gobierno de Cristo, es en y para la iglesia. Tenemos que renovarnos en una visión correcta de nosotros mismos, ¿no? Necesitamos vernos como el pueblo de Dios y como los llamados a una tarea, que no somos como el mundo, que no somos simplemente algo que va y viene. No somos simplemente como el club Kiwanis local. Somos un pueblo para siempre. Somos el pueblo escogido de Dios, un sacerdocio real, una nación santa, asumiendo ese papel de Israel, de modo que ahora, aun mientras esperamos la venida de Cristo, es a través de nosotros que el evangelio se proclama. Es a través de nosotros que se entregan las llaves del reino, lo cual está ligado a la proclamación del evangelio. Es a través de la iglesia que las personas son transformadas, porque la iglesia predica el evangelio. Es el evangelio el que transforma a las personas, pero es la iglesia, es el pueblo de Dios, el que proclama ese evangelio. Es en la iglesia, Efesios 3 lo describirá como la exhibición de la sabiduría misma de Dios, donde en la iglesia las personas son reconciliadas y vemos la obra salvadora de Dios exhibida ante los ángeles y exhibida ante el mundo que nos rodea. Necesitamos recuperar lo que somos como el pueblo de Dios.",
                original:
                  "Because in scripture, Christ and his people are intimately woven together. Think of Matthew chapter 16. Jesus has come to build his church. That's us. Build the assembly. Calls his disciples, builds that church. We are those people. We are in the book of Hebrews chapter 8, the people of the new covenant community. All of that speaks of the fidelity of God's purposes. We are that people, that transformed people, born of the Spirit, empowered by the Spirit. We are participants of the heavenly Jerusalem, the Zion, Hebrews chapter 12. Hebrews 3, we are the new temple. That is what we are. Ephesians 2, we are the new man, the new creation. Ephesians 1 verses 22 and 23, that all of God's sovereign rule, Christ's rule, is in and for the church. We have to renew ourselves to a proper view of ourselves, right? We need to see ourselves as God's people and those who are called to a task that we are not like the world, that we are not just something that is coming and going. We're not just like the local Kiwanis club. We are a forever people. We are the people who are God's chosen people, a royal priesthood, a holy nation taking on that role of Israel, so that we are now, even as we await the coming of Christ, it's through us that the gospel is proclaimed. It's through us that the keys of the kingdom are given, which is tied to the proclamation of the gospel. It's through the church that people are transformed because the gospel is preached by the church. It's the gospel that transforms people, but it's the church, it's the people of God that proclaim that gospel. It's in the church, Ephesians 3 will describe it as the display of the very wisdom of God, where in the church people are reconciled and we see God's saving work displayed before angels and displayed before the world around us. We need to recapture what we are as the people of God.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Col.1.18"],
      text: "Segunda Confesión de Londres (1689), 26.4 nota 7/(g) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom by the appointment of the Father, all power for the calling, institution, order, or Government of the Church, is invested in a supream & soveraigne manner, neither can the Pope of Rome in any sense be head thereof, but is that Antichrist, that Man of sin, and Son of perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.1 nota (a) (1688 p. 85): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Catholick or Universal Church, which (with respect to the internal work of the Spirit, and truth of Grace) may be called Invisible, consists of the whole Number of the Elect, that have been, are, or shall be gathered into one, under Christ, the Head thereof; and is the Spouse, the Body, the Fulness of Him that filleth all in all.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Segunda Confesión de Londres (1689), 26.4 nota (g) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom, by the appointment of the Father, all Power for the Calling, Institution, Order, or Government of the Church, is invested in a supreme and soveraign manner, neither can the Pope of Rome in any sence be Head thereof, but is that Antichrist, that Man of Sin, and Son of Perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title: "Murr apela a Cristo como cabeza del cuerpo y fundamento",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿DEJÓ JESÚS UN PAPA? | Lo que revelan la Biblia y la historia - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "17 de agosto de 2026",
                locator: "Minutos 2:50:09 a 2:51:19",
                url: "https://www.youtube.com/watch?v=2v5q6KEWy8I&t=10209s",
                text: "En Marcos 9.34 dice, si alguno quiere ser el primero, será el postrero de todos y el servidor de todos. Jesús es quien edificaría su iglesia y la escritura reconoce solo a Jesús como única cabeza. ¿Quieres verlo? Dice en Efesios 4.15 al 16, sino que siguiendo todos nosotros la verdad en amor, crezcamos en todo en Cristo, en aquel que es la cabeza, esto es Cristo, de quien todo el cuerpo bien concertado y unido, según la actividad propia de cada miembro, recibe su crecimiento. En Colosenses 1.18 dice, y el Cristo es la cabeza del cuerpo, que es la iglesia. Qué bendición, hay que poner una mena a eso. La cabeza no es una organización, no es un papa, la cabeza es Jesucristo. Solo en él se establece la iglesia. En 1 Corintios 3.11 dice Pablo porque nadie puede poner otro fundamento que el que está puesto, el cual es Jesucristo. Así que, y obviamente la iglesia católica romana dirían amén, es Jesucristo el fundamento, pero le dio las llaves a Pedro, pero ya vimos que bíblicamente eso no se sostiene ni tampoco se sostiene históricamente.",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["2Thess.2.2-2Thess.2.9"],
      text: "Segunda Confesión de Londres (1689), 26.4 nota (impresa «b» en 1688; (h) en 1677 y 1719) (1688 p. 86–87; 1719 p. 106): este versículo figura como nota al margen (junto a «that Antichrist, that Man of Sin») junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom, by the appointment of the Father, all Power for the Calling, Institution, Order, or Government of the Church, is invested in a supreme and soveraign manner, neither can the Pope of Rome in any sence be Head thereof, but is that Antichrist, that Man of Sin, and Son of Perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Segunda Confesión de Londres (1689), 26.4 nota 8 (McGlothlin p. 265; 1677): este versículo figura como nota al margen (variante) junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom by the appointment of the Father, all power for the calling, institution, order, or Government of the Church, is invested in a supream & soveraigne manner, neither can the Pope of Rome in any sense be head thereof, but is that Antichrist, that Man of sin, and Son of perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.20.28"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title:
              "El autor tiene bastante certeza de que el oficio de pastor es idéntico al de anciano u obispo, ya que el verbo «pastorear» es la tarea encomendada a los ancianos y obispos, que además enseñan a la congregación",
            quotes: [
              {
                speaker: "Benjamin Merkle",
                work: "Hierarchy in the Church?",
                outlet: "9Marks",
                date: "26 de febrero de 2010",
                locator:
                  "1 párrafo: del párrafo que empieza «What is particularly important to this…» al que termina «…concerned about leadership in the church.»",
                url: "https://www.9marks.org/article/hierarchy-church/",
                text: "Lo que es particularmente importante para este estudio es que la forma verbal se usa a menudo en conexión con las funciones dadas a los ancianos u obispos. Por ejemplo, en Hechos 20 Pablo llama a los “ancianos” (v. 17) y los exhorta a “cuidarse a sí mismos y a todo el rebaño [poimnion]”, ya que han sido constituidos como “obispos” y son llamados “a pastorear [poimainein] la iglesia de Dios” (v. 28). Asimismo, Pedro exhorta a los “ancianos” (1 Pe. 5:1) a “pastorear [poimanate] el rebaño [poimnion] de Dios, sirviendo como obispos” (1 Pe. 5:3). Dado que el verbo “pastorear” es la tarea del anciano u obispo, es fácil ver por qué tal persona podría ser llamada “pastor”. No solo a los pastores o ancianos u obispos se les da la tarea de pastorear, sino que también son quienes enseñan a la congregación (Ef. 4:11; 1 Tim. 3:2; 5:17). Por lo tanto, podemos estar razonablemente seguros de que el oficio de pastor es idéntico al del anciano u obispo. Esta posición se ve reforzada por el hecho de que el término pastor no se menciona en 1 Timoteo ni en Tito, que se ocupan del liderazgo en la iglesia.",
                original:
                  "What is particularly important to this study is that the verb form is often used in connection with the duties given to the elders or overseers. For example, in Acts 20 Paul calls for the “elders” (v. 17) and encourages them to “be on guard for themselves and for all the flock [poimnion]” since they have been appointed as “overseers” and are called “to shepherd [poimainein] the church of God” (v. 28). Likewise, Peter exhorts the “elders” (1 Pet. 5:1) to “shepherd [poimanate] the flock [poimnion] of God, serving as overseers” (1 Pet. 5:3). Since the verb “to pastor/shepherd” is the task of the elder/overseer, it is easy to see why such a person could be called a “pastor/shepherd.” Not only are pastors or elders/overseers given the task of shepherding, but they are also those who teach the congregation (Eph. 4:11; 1 Tim. 3:2; 5:17). Therefore, we can be reasonably certain that the office of pastor is identical to that of the elder or overseer. This position is strengthened by the fact that the term pastor is not mentioned in 1 Timothy and Titus, which are concerned about leadership in the church.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "White lee Jn 21 como la restauración de Pedro y compara con la comisión de los ancianos de Éfeso en Hch 20:28",
            quotes: [
              {
                speaker: "James White",
                work: "Peter & The Papacy",
                outlet: "Apologia Church",
                date: "23 de enero de 2024",
                locator: "Minutos 35:47 a 37:09",
                url: "https://apologia-church.simplecast.com/episodes/peter-the-papacy-LKMpdMUk#t=2147",
                text: "La triple pregunta de Pedro, seguida del mandato de apacentar o pastorear las ovejas de Cristo, es de naturaleza restauradora. Nada en el pasaje siquiera empezaría a sugerirnos que esto significa que los otros apóstoles no fueron igualmente comisionados para apacentar y pastorear el rebaño de Cristo en igualdad de condiciones con Simón Pedro. No hay indicio de que solo a Pedro se le diga que pastoree el rebaño de Dios, ni de que todos los demás que pastorean el rebaño lo hagan de manera derivada de la supremacía y la autoridad de Pedro. De hecho, si ese fuera el caso, Pablo parece haberlo ignorado. Pues instruyó a los ancianos de Éfeso en Hechos 20, 28: cuiden de ustedes mismos y de todo el rebaño en el que el Espíritu Santo los ha puesto como obispos, para pastorear la iglesia de Dios, que él compró con su propia sangre. Pablo no dice: como Pedro es el pastor principal, ustedes actúan como pastores subordinados del rebaño de Dios. No. La única manera en que tal entendimiento puede encontrarse es si tomamos un desarrollo mucho posterior y lo leemos de vuelta en estos textos, como nuestros amigos católicos romanos se ven obligados a hacer. Este pasaje de ninguna manera separa a Pedro como el príncipe de los apóstoles. Más bien, muestra que necesitaba un cuidado pastoral especial por parte de Cristo.",
                original:
                  "The threefold question of Peter, followed by the command to feed or shepherd Christ's sheep, is restorative in nature. Nothing in the passage would even begin to suggest to us that this means that the other apostles were not likewise commissioned to feed and pastor Christ's flock on an equal basis with Simon Peter. There is no indication that only Peter is told to shepherd God's flock, nor that all others who shepherd the flock do so derivatively from Peter's supremacy and authority. Indeed, if such were the case, Paul seems to have been ignorant of this. For he instructed the Ephesian elders in Acts 20, 28, to keep watch over yourselves and all the flock of which the Holy Spirit has made you overseers, be shepherds of the church of God, which he bought with his own blood. Paul does not say, as Peter is the chief shepherd, you act as under shepherds of the flock of God. No. The only way that such understanding can be found is if we take a much later development and read it back into these texts as our Roman Catholic friends are forced to do. This passage in no way sets Peter apart as the prince of the apostles. Instead, it shows that he was in need of special pastoral care on the part of Christ.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Murr lee la comisión a los ancianos de Éfeso como una pluralidad de obispos designados por el Espíritu Santo",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿DEJÓ JESÚS UN PAPA? | Lo que revelan la Biblia y la historia - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "17 de agosto de 2026",
                locator: "Minutos 1:17:39 a 1:18:45",
                url: "https://www.youtube.com/watch?v=2v5q6KEWy8I&t=4659s",
                text: "Entonces, solamente en el Nuevo Testamento aparece el oficio de ancianos, obispos y pastores. Y los tres son sinónimos. Significan lo mismo. Cristo dejó a su iglesia con una multitud y pluralidad de ancianos o de obispos que pastorean la iglesia de Dios. Y en Hechos 20, 28, dice Pablo, tengan cuidado de ustedes mismos hasta los propios papas se tienen que cuidar y los pastores y los líderes y los obispos y los ancianos de la iglesia tengan cuidado de sí mismos y de toda la congregación en medio de la cual el espíritu santo no pedro no el sagrado no el magisterio les ha hecho obispos para pastorear la iglesia de dios fíjate que interesante que mandó a llamar a los ancianos de la iglesia, les dice a los ancianos de la iglesia que el Espíritu Santo los ha puesto por obispos para pastorear la iglesia de Dios. Entonces los ancianos eran obispos y los obispos pastoreaban la iglesia. Anciano, obispo y pastor, la misma función, no es otra oficio. Así que algunos se",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Tim.3.1-1Tim.3.15"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title:
              "El autor tiene bastante certeza de que el oficio de pastor es idéntico al de anciano u obispo, ya que el verbo «pastorear» es la tarea encomendada a los ancianos y obispos, que además enseñan a la congregación",
            quotes: [
              {
                speaker: "Benjamin Merkle",
                work: "Hierarchy in the Church?",
                outlet: "9Marks",
                date: "26 de febrero de 2010",
                locator:
                  "1 párrafo: del párrafo que empieza «What is particularly important to this…» al que termina «…concerned about leadership in the church.»",
                url: "https://www.9marks.org/article/hierarchy-church/",
                text: "Lo que es particularmente importante para este estudio es que la forma verbal se usa a menudo en conexión con las funciones dadas a los ancianos u obispos. Por ejemplo, en Hechos 20 Pablo llama a los “ancianos” (v. 17) y los exhorta a “cuidarse a sí mismos y a todo el rebaño [poimnion]”, ya que han sido constituidos como “obispos” y son llamados “a pastorear [poimainein] la iglesia de Dios” (v. 28). Asimismo, Pedro exhorta a los “ancianos” (1 Pe. 5:1) a “pastorear [poimanate] el rebaño [poimnion] de Dios, sirviendo como obispos” (1 Pe. 5:3). Dado que el verbo “pastorear” es la tarea del anciano u obispo, es fácil ver por qué tal persona podría ser llamada “pastor”. No solo a los pastores o ancianos u obispos se les da la tarea de pastorear, sino que también son quienes enseñan a la congregación (Ef. 4:11; 1 Tim. 3:2; 5:17). Por lo tanto, podemos estar razonablemente seguros de que el oficio de pastor es idéntico al del anciano u obispo. Esta posición se ve reforzada por el hecho de que el término pastor no se menciona en 1 Timoteo ni en Tito, que se ocupan del liderazgo en la iglesia.",
                original:
                  "What is particularly important to this study is that the verb form is often used in connection with the duties given to the elders or overseers. For example, in Acts 20 Paul calls for the “elders” (v. 17) and encourages them to “be on guard for themselves and for all the flock [poimnion]” since they have been appointed as “overseers” and are called “to shepherd [poimainein] the church of God” (v. 28). Likewise, Peter exhorts the “elders” (1 Pet. 5:1) to “shepherd [poimanate] the flock [poimnion] of God, serving as overseers” (1 Pet. 5:3). Since the verb “to pastor/shepherd” is the task of the elder/overseer, it is easy to see why such a person could be called a “pastor/shepherd.” Not only are pastors or elders/overseers given the task of shepherding, but they are also those who teach the congregation (Eph. 4:11; 1 Tim. 3:2; 5:17). Therefore, we can be reasonably certain that the office of pastor is identical to that of the elder or overseer. This position is strengthened by the fact that the term pastor is not mentioned in 1 Timothy and Titus, which are concerned about leadership in the church.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Pablo da calificaciones solo para dos grupos: obispos o ancianos y diáconos; si pastor es un oficio del Nuevo Testamento, pertenece a los ancianos",
            quotes: [
              {
                speaker: "Ben Robin",
                work: "A Pastor Is an Elder Is a Bishop",
                outlet: "9Marks",
                date: "24 de noviembre de 2025",
                locator:
                  "2 párrafos: del párrafo que empieza «Not only that, but in his…» al que termina «…other option in the New Testament.»",
                url: "https://www.9marks.org/article/a-pastor-is-an-elder-is-a-bishop/",
                text: "No solo eso, sino que en su carta a una iglesia en Filipos, Pablo escribe “a todos los santos”, incluidos “los obispos y diáconos” (Fil. 1:1). Sería bastante extraño que dejara fuera a los pastores si escribe a “todos los santos en Cristo Jesús”, especialmente porque en su otra carta describe los dos oficios, con sus requisitos y todo. Un lector cuidadoso de 1 Timoteo 3:1–7 y Tito 1:5–9 también puede notar que la lista de requisitos es prácticamente idéntica. Entonces, si dices que un pastor no es un anciano, arriesgas aflojar también la conexión entre obispo y anciano.\n\nSi quieres que “pastor” sea un oficio del Nuevo Testamento en algún sentido, entonces vas a tener que decidir si el pastor entra en el grupo de los ancianos o en el de los diáconos. No hay otra opción en el Nuevo Testamento.",
                original:
                  "Not only that, but in his letter to a church in Philippi, Paul writes “to all the saints,” including “the overseers and deacons” (Phil. 1:1). It would be quite odd for him to leave out the pastors if he’s writing to “all the saints in Christ Jesus,” especially since he outlines the two offices, qualifications and all, in his other letter. A careful reader of 1 Timothy 3:1–7 and Titus 1:5–9 may also notice that the list of qualifications is virtually identical. So, if you say a pastor is not an elder, then you risk loosening the connection between overseer and elder as well.\n\nIf you want “pastor” to be a New Testament office in any sense, then you’ll need to decide if pastor goes in the elder bucket or the deacon bucket. There’s no other option in the New Testament.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.12"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title:
              "Ortlund contrasta los oficios que Pablo da para la unidad y la madurez con el oficio papal que sostiene que falta en esas descripciones",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The Papacy Is Not From God",
                outlet: "Truth Unites",
                date: "15 de octubre de 2025",
                locator: "Minutos 5:43 a 7:24",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-Papacy-Is-Not-From-God-e39imvq#t=343",
                text: "Hay mucha información sobre los oficios de la iglesia en el Nuevo Testamento. Casi, ya saben, los presbíteros se mencionan, se citan o se aluden en casi cada libro, empezando por Hechos: a lo largo de Hechos hay ancianos en las iglesias, y luego, avanzando, casi cada otro libro del Nuevo Testamento dice algo sobre el liderazgo o los oficios de la iglesia, incluso en relación con la unidad de la iglesia. Los oficios se describen, ya saben, en Efesios 4, 11 y siguientes, por ejemplo, que detallan cuáles son los oficios de la iglesia en relación con la unidad y la madurez de la iglesia. Pablo dice que Dios dio estos oficios para que la iglesia alcanzara unidad y madurez. Y lo mismo con 1 Corintios 12, otro pasaje así: los oficios de la iglesia hacia la unidad de la iglesia. Y vaya, es sospechoso que aquí nunca obtengamos ni un solo versículo en ningún lugar que diga: ah, por cierto, hay un oficio supremo e infalible, por encima de todos estos otros oficios. Eso sería lo más importante que el Nuevo Testamento podría decirnos si fuera realmente cierto. Si Jesús y los apóstoles concebían un oficio permanente de supremacía e infalibilidad en la iglesia, es razonable esperar que apareciera. Debería haber alguna clase de referencia. Piensen de nuevo en lo que está en juego con el papado. Si el obispo de Roma puede hablar infaliblemente, de modo que los límites de la creencia cristiana obligatoria estén en parte determinados por sus pronunciamientos, y si vas a ubicar un poder supremo de jurisdicción sobre la iglesia y la capacidad de pronunciamiento infalible en un solo hombre, eso tiene implicaciones para cada aspecto de cómo funciona el cristianismo.",
                original:
                  "There's lots of information about the offices of the church in the New Testament. Almost, you know, presbyters are mentioned or referenced or alluded to in almost every book, starting with Acts, all over Acts, you get elders in churches, and then moving forward, almost every other book of the New Testament says something about the leadership or offices of the church, even in relation to the unity of the church. Offices are laid out, you know, Ephesians 4, 11 and following, for example, flesh out what are the offices of the church in relation to the unity and maturity of the church. Paul is saying God gave these offices so that the church would attain unity and maturity. And same with 1 Corinthians 12, another passage like this, the offices of the church unto the unity of the church. And boy, is it suspicious here that we don't ever get a single verse anywhere that ever says, oh, by the way, there's a supreme and infallible office, so over all these other offices. That would be the most important thing the New Testament could tell us if it were in fact true. If Jesus and the apostles envisioned an ongoing office of supremacy and infallibility in the church, it's reasonable to expect that it'd show up. There'd be some kind of reference. Again, think about what's at stake with the papacy. If the bishop of Rome can speak infallibly, such that the boundaries of obligatory Christian belief are in part determined by his pronouncements, If you're going to locate a supreme power of jurisdiction over the church and the capacity of infallible pronouncement in one man, that has implications for every single aspect of how Christianity works.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "White señala a apóstoles, profetas y maestros en el orden de Pablo y sostiene que el papa está ausente",
            quotes: [
              {
                speaker: "James White",
                work: "Peter & The Papacy",
                outlet: "Apologia Church",
                date: "23 de enero de 2024",
                locator: "Minutos 24:23 a 24:43",
                url: "https://apologia-church.simplecast.com/episodes/peter-the-papacy-LKMpdMUk#t=1463",
                text: "pero le escribe a los corintios que Dios había puesto en la iglesia, en primer lugar, apóstoles; en segundo, profetas; en tercero, maestros, 1 Corintios 12, 28. Pablo, no, ¿no es primero el Papa? No, no dice nada de eso. Ese no es el orden bíblico.",
                original:
                  "but he writes to the Corinthians that God had placed in the church, first of all, apostles, second prophets, third teachers, 1 Corinthians 12, 28. Paul, no, isn't it first the Pope? No, he doesn't say anything like that. That's not the biblical order.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Murr sostiene que las listas de dones y oficios no nombran un sacerdocio",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿DEJÓ JESÚS UN PAPA? | Lo que revelan la Biblia y la historia - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "17 de agosto de 2026",
                locator: "Minutos 1:16:51 a 1:17:28",
                url: "https://www.youtube.com/watch?v=2v5q6KEWy8I&t=4611s",
                text: "acceso a dios pero en efesios 4 11 al 12 cuando dice que jesús resucitó y subiendo a lo alto llevó cautiva la cautividad y dio dones a los hombres dice que él instituyó en la iglesia apóstoles, profetas, pastores, evangelistas y maestros. Nunca se menciona la palabra sacerdote. También cuando se habla, en todos los lugares, primera de Corintios 12, Romanos 12, Efesios 4, primera de Pedro 4, en todos los lugares donde se habla de los dones o los oficios que el Espíritu Santo da, nunca se menciona sacerdocio.",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.4.11-Eph.4.13"],
      text: "Segunda Confesión de Londres (1689), 26.4 nota 7/(g) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom by the appointment of the Father, all power for the calling, institution, order, or Government of the Church, is invested in a supream & soveraigne manner, neither can the Pope of Rome in any sense be head thereof, but is that Antichrist, that Man of sin, and Son of perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.4 nota (g) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom, by the appointment of the Father, all Power for the Calling, Institution, Order, or Government of the Church, is invested in a supreme and soveraign manner, neither can the Pope of Rome in any sence be Head thereof, but is that Antichrist, that Man of Sin, and Son of Perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
      apologists: {
        arguments: [
          {
            title:
              "El autor tiene bastante certeza de que el oficio de pastor es idéntico al de anciano u obispo, ya que el verbo «pastorear» es la tarea encomendada a los ancianos y obispos, que además enseñan a la congregación",
            quotes: [
              {
                speaker: "Benjamin Merkle",
                work: "Hierarchy in the Church?",
                outlet: "9Marks",
                date: "26 de febrero de 2010",
                locator:
                  "1 párrafo: del párrafo que empieza «What is particularly important to this…» al que termina «…concerned about leadership in the church.»",
                url: "https://www.9marks.org/article/hierarchy-church/",
                text: "Lo que es particularmente importante para este estudio es que la forma verbal se usa a menudo en conexión con las funciones dadas a los ancianos u obispos. Por ejemplo, en Hechos 20 Pablo llama a los “ancianos” (v. 17) y los exhorta a “cuidarse a sí mismos y a todo el rebaño [poimnion]”, ya que han sido constituidos como “obispos” y son llamados “a pastorear [poimainein] la iglesia de Dios” (v. 28). Asimismo, Pedro exhorta a los “ancianos” (1 Pe. 5:1) a “pastorear [poimanate] el rebaño [poimnion] de Dios, sirviendo como obispos” (1 Pe. 5:3). Dado que el verbo “pastorear” es la tarea del anciano u obispo, es fácil ver por qué tal persona podría ser llamada “pastor”. No solo a los pastores o ancianos u obispos se les da la tarea de pastorear, sino que también son quienes enseñan a la congregación (Ef. 4:11; 1 Tim. 3:2; 5:17). Por lo tanto, podemos estar razonablemente seguros de que el oficio de pastor es idéntico al del anciano u obispo. Esta posición se ve reforzada por el hecho de que el término pastor no se menciona en 1 Timoteo ni en Tito, que se ocupan del liderazgo en la iglesia.",
                original:
                  "What is particularly important to this study is that the verb form is often used in connection with the duties given to the elders or overseers. For example, in Acts 20 Paul calls for the “elders” (v. 17) and encourages them to “be on guard for themselves and for all the flock [poimnion]” since they have been appointed as “overseers” and are called “to shepherd [poimainein] the church of God” (v. 28). Likewise, Peter exhorts the “elders” (1 Pet. 5:1) to “shepherd [poimanate] the flock [poimnion] of God, serving as overseers” (1 Pet. 5:3). Since the verb “to pastor/shepherd” is the task of the elder/overseer, it is easy to see why such a person could be called a “pastor/shepherd.” Not only are pastors or elders/overseers given the task of shepherding, but they are also those who teach the congregation (Eph. 4:11; 1 Tim. 3:2; 5:17). Therefore, we can be reasonably certain that the office of pastor is identical to that of the elder or overseer. This position is strengthened by the fact that the term pastor is not mentioned in 1 Timothy and Titus, which are concerned about leadership in the church.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund contrasta los oficios que Pablo da para la unidad y la madurez con el oficio papal que sostiene que falta en esas descripciones",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The Papacy Is Not From God",
                outlet: "Truth Unites",
                date: "15 de octubre de 2025",
                locator: "Minutos 5:43 a 7:24",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-Papacy-Is-Not-From-God-e39imvq#t=343",
                text: "Hay mucha información sobre los oficios de la iglesia en el Nuevo Testamento. Casi, ya saben, los presbíteros se mencionan, se citan o se aluden en casi cada libro, empezando por Hechos: a lo largo de Hechos hay ancianos en las iglesias, y luego, avanzando, casi cada otro libro del Nuevo Testamento dice algo sobre el liderazgo o los oficios de la iglesia, incluso en relación con la unidad de la iglesia. Los oficios se describen, ya saben, en Efesios 4, 11 y siguientes, por ejemplo, que detallan cuáles son los oficios de la iglesia en relación con la unidad y la madurez de la iglesia. Pablo dice que Dios dio estos oficios para que la iglesia alcanzara unidad y madurez. Y lo mismo con 1 Corintios 12, otro pasaje así: los oficios de la iglesia hacia la unidad de la iglesia. Y vaya, es sospechoso que aquí nunca obtengamos ni un solo versículo en ningún lugar que diga: ah, por cierto, hay un oficio supremo e infalible, por encima de todos estos otros oficios. Eso sería lo más importante que el Nuevo Testamento podría decirnos si fuera realmente cierto. Si Jesús y los apóstoles concebían un oficio permanente de supremacía e infalibilidad en la iglesia, es razonable esperar que apareciera. Debería haber alguna clase de referencia. Piensen de nuevo en lo que está en juego con el papado. Si el obispo de Roma puede hablar infaliblemente, de modo que los límites de la creencia cristiana obligatoria estén en parte determinados por sus pronunciamientos, y si vas a ubicar un poder supremo de jurisdicción sobre la iglesia y la capacidad de pronunciamiento infalible en un solo hombre, eso tiene implicaciones para cada aspecto de cómo funciona el cristianismo.",
                original:
                  "There's lots of information about the offices of the church in the New Testament. Almost, you know, presbyters are mentioned or referenced or alluded to in almost every book, starting with Acts, all over Acts, you get elders in churches, and then moving forward, almost every other book of the New Testament says something about the leadership or offices of the church, even in relation to the unity of the church. Offices are laid out, you know, Ephesians 4, 11 and following, for example, flesh out what are the offices of the church in relation to the unity and maturity of the church. Paul is saying God gave these offices so that the church would attain unity and maturity. And same with 1 Corinthians 12, another passage like this, the offices of the church unto the unity of the church. And boy, is it suspicious here that we don't ever get a single verse anywhere that ever says, oh, by the way, there's a supreme and infallible office, so over all these other offices. That would be the most important thing the New Testament could tell us if it were in fact true. If Jesus and the apostles envisioned an ongoing office of supremacy and infallibility in the church, it's reasonable to expect that it'd show up. There'd be some kind of reference. Again, think about what's at stake with the papacy. If the bishop of Rome can speak infallibly, such that the boundaries of obligatory Christian belief are in part determined by his pronouncements, If you're going to locate a supreme power of jurisdiction over the church and the capacity of infallible pronouncement in one man, that has implications for every single aspect of how Christianity works.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Murr sostiene que las listas de dones y oficios no nombran un sacerdocio",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿DEJÓ JESÚS UN PAPA? | Lo que revelan la Biblia y la historia - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "17 de agosto de 2026",
                locator: "Minutos 1:16:51 a 1:17:28",
                url: "https://www.youtube.com/watch?v=2v5q6KEWy8I&t=4611s",
                text: "acceso a dios pero en efesios 4 11 al 12 cuando dice que jesús resucitó y subiendo a lo alto llevó cautiva la cautividad y dio dones a los hombres dice que él instituyó en la iglesia apóstoles, profetas, pastores, evangelistas y maestros. Nunca se menciona la palabra sacerdote. También cuando se habla, en todos los lugares, primera de Corintios 12, Romanos 12, Efesios 4, primera de Pedro 4, en todos los lugares donde se habla de los dones o los oficios que el Espíritu Santo da, nunca se menciona sacerdocio.",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.5.4-1Cor.5.6"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title:
              "El congregacionalismo deja que la congregación funcione como instancia final de apelación en los asuntos de la iglesia local, viviendo bajo el señorío de Cristo y bajo pastores o ancianos que la dirigen; las cartas del Nuevo Testamento están escritas a iglesias enteras (Gál 1:8), y toda la congregación ejerce disciplina (Mt 18:15–20; 1 Cor 5:1–13; 2 Cor 2:5–11)",
            quotes: [
              {
                speaker: "Stephen J. Wellum",
                work: "The Priesthood of All Believers and Why the New Covenant Requires Congregationalism",
                outlet: "9Marks",
                date: "16 de septiembre de 2025",
                locator:
                  "2 párrafos: del párrafo que empieza «Evidence for congregationalism can be found…» al que termina «…affairs under the lordship of Christ.»",
                url: "https://www.9marks.org/article/the-priesthood-of-all-believers-and-why-the-new-covenant-requires-congregationalism/",
                text: "Hay evidencia del congregacionalismo en todo el NT. Como creyentes pactados juntos, se escogieron ancianos (Hech. 14:23; Tito 1:5), se predicó la Palabra de Dios y se practicaron las ordenanzas (Hech. 2:42; 1 Cor. 11:26), y la iglesia tomó expresión visible en asambleas locales que gobernaban sus propios asuntos. Por eso una gran cantidad de cartas del NT fueron escritas a iglesias locales, no meramente a oficiales de la iglesia o a algún cuerpo eclesiástico más grande. Las cartas fueron escritas para instruir a toda la congregación sobre sus responsabilidades de gobernarse a sí misma y de protegerse de falsos maestros. Por ejemplo, en Gálatas, Pablo espera que esta joven iglesia juzgue la autoridad angelical y apostólica si predicaran algo contrario al mensaje apostólico (Gal. 1:8). Como dice Mark Dever, “Él [Pablo] no escribe meramente a los pastores, al presbiterio, al obispo o a la conferencia, a la convención, o al seminario. Escribe a los cristianos que componen las iglesias, ¡y deja muy claro que no solo son competentes para juzgar lo que pretende ser el evangelio, sino que deben hacerlo!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nEl congregacionalismo se confirma además en la práctica de la disciplina eclesiástica. No son solo los líderes quienes deben ejercer disciplina sino toda la congregación. La iglesia debe ejercer autoridad sobre los falsos maestros (2 Cor. 10–13; Gal. 1:8; 2 Juan) y sobre la vida de las personas (Mat. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). Por eso Pablo se angustia por el comportamiento de la iglesia de Corinto, que no puede resolver disputas desde dentro y en cambio busca la ayuda de no cristianos. Para Pablo, la iglesia está actuando en contra de lo que ella es, y mediante una serie de preguntas punzantes, lo deja abundantemente claro (ver 1 Cor. 6:2–5a). La consternación de Pablo con la iglesia solo tiene sentido si asume que toda la iglesia está involucrada en este tipo de decisiones. Cada miembro tiene un papel que cumplir porque toda la iglesia es, en última instancia, la corte final de apelación para sus propios asuntos bajo el señorío de Cristo.",
                original:
                  "Evidence for congregationalism can be found throughout the NT. As believers covenanted together, elders were chosen (Acts 14:23; Titus 1:5), God’s Word was preached, and the ordinances were practiced (Acts 2:42; 1 Cor. 11:26), the church took on visible expression in local assemblies that governed their own affairs. This is why a vast number of NT letters were written to local churches, not merely to church officers or some larger ecclesiastical body. The letters were written to instruct the entire congregation of their responsibilities to govern themselves and to protect themselves from false teachers. For example, in Galatians, Paul expects this young church to sit in judgment of angelic and apostolic authority if they should preach something contrary to the apostolic message (Gal. 1:8). As Mark Dever notes, “He [Paul] doesn’t write merely to the pastors, to the presbytery, to the bishop or the conference, to the convention, or to the seminary. He writes to the Christians who compose the churches, and he makes it quite clear that not only are they competent to sit in judgment on what claims to be the gospel, but that they must!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nCongregationalism is further confirmed in the practice of church discipline. It’s not only leaders who are to exercise discipline but the entire congregation. The church is to exercise authority over false teachers (2 Cor. 10–13; Gal. 1:8; 2 John) and people’s lives (Matt. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). This is why Paul is distraught by the behavior of the Corinthian church who cannot settle disputes from within and instead seeks the help of non-Christians. For Paul, the church is acting contrary to what she is, and by a series of pointed questions, he makes this abundantly clear (see 1 Cor. 6:2–5a). Paul’s consternation with the church only makes sense if he assumes that the entire church is involved in these kinds of decisions. Each member has a role to play because the entire church is ultimately the final court of appeal for her own affairs under the lordship of Christ.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund sostiene que la iglesia local tiene la autoridad final sobre la disciplina, las disputas, la doctrina y la membresía: recibe de nuevo a un miembro (2 Cor 2), expulsa a uno (1 Cor 5) y es la instancia final de apelación (Mt 18), sin sede central salvo el oficio apostólico único",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "Why I'm a Baptist",
                outlet: "Truth Unites",
                date: "30 de abril de 2023",
                locator: "Minutos 1:18 a 2:24",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/Why-Im-a-Baptist-e239cuq#t=78",
                text: "Número dos, gobierno congregacional de la iglesia. Me parece que cada iglesia local debería tener relación, asociación, etc. con otras iglesias. Distinguimos el poder de consejo y el poder de mandato, así que tenemos muchísima relación, pero la rendición de cuentas última, la autoridad última, el poder de hacer cumplir algo, debería recaer en los miembros de esa misma iglesia para asuntos de disciplina, disputa, doctrina, membresía. Lo ven en el Nuevo Testamento, 2 Corintios 2: esa iglesia tiene la responsabilidad de recibir de nuevo al miembro. 1 Corintios 5: esa iglesia tiene la responsabilidad de expulsar al miembro. Está, ya saben, Mateo 18, la última instancia de apelación: díselo a la iglesia. Parece que en la iglesia primitiva no había una sede central que dictara cómo debían funcionar las iglesias locales particulares, ni a la que se hiciera la apelación final. La única excepción a eso, donde hay una especie de autoridad pan-eclesial, sería el oficio de apóstol, pero ese es único en la historia de la redención.",
                original:
                  "Number two, congregational church government. It seems to me that each local church should have relationship, partnership, etc. with other churches. We distinguish the power of counsel and the power of command, so we have lots of relationship, but the ultimate accountability, the ultimate authority, the power to enforce something should be that own church's members for matters of discipline, dispute, doctrine, membership. You see this in the New Testament, 2 Corinthians 2, that church is accountable to receive the member back in. 1 Corinthians 5, that church is accountable to put the member out. There's supposed to be, you know, Matthew 18, the final court of appeal, tell it to the church. It seems like there's no central headquarters in the early church that dictates how particular local churches should be functioning or that you make the final appeal to. The only exception of that where you have a kind of pan church authority would be the office of apostle, but that is redemptive historically unique.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.5.22-Eph.5.32"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar. Segunda Confesión de Londres (1689), 26.1 nota (a) (1688 p. 85): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Catholick or Universal Church, which (with respect to the internal work of the Spirit, and truth of Grace) may be called Invisible, consists of the whole Number of the Elect, that have been, are, or shall be gathered into one, under Christ, the Head thereof; and is the Spouse, the Body, the Fulness of Him that filleth all in all.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "Ortlund usa el lenguaje de la iglesia de Efesios 5 para cuestionar que se identifique la iglesia prometida solo con una jerarquía o un concilio",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The Most Misused Verse Against Protestantism",
                outlet: "Truth Unites",
                date: "2 de agosto de 2022",
                locator: "Minutos 1:51 a 2:50",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-Most-Misused-Verse-Against-Protestantism-e1lvuvh#t=111",
                text: "Así que esta palabra es la palabra griega ekklesía, que se usa solo dos veces en los Evangelios, aquí y luego en Mateo 18, 17. Cuando se usa a lo largo del Nuevo Testamento, en el libro de Hechos, en las epístolas, usualmente se refiere ya sea a una congregación local particular, o a todas las iglesias de una región geográfica particular, o a todos los cristianos de una región geográfica, o a todos los cristianos, la suma total de los creyentes cristianos, como Efesios 5, por ejemplo, Cristo amó a la iglesia y se entregó a sí mismo por ella. Muchas veces lo que se da por sentado en el uso de Mateo 16, 18 no es ninguno de esos significados, sino en realidad un liderazgo jerárquico particular dentro de la iglesia. Se está hablando de, se supone que se habla de obispos, y no solo de todos los obispos, sino particularmente de los obispos reunidos en un concilio ecuménico.",
                original:
                  "So this word is the Greek word ekklesia, which is used only two times in the Gospels, here and then in Matthew 18, 17. When it's used throughout the New Testament, in the Book of Acts, in the Epistles, usually it will refer to either one particular local congregation or all of the churches in a particular geographical region or all the Christians in a geographical region or all Christians. the entire sum of Christian believers, like Ephesians 5, for example, Christ loved the church and gave himself for her. Often what is assumed in the usage of Matthew 16, 18 is not any of those meanings, but actually a particular hierarchical leadership within the church. It's talking about, it's assumed that what is being talked about is bishops, and not just all bishops, but particularly the bishops gathered in an ecumenical council.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Murr dice que la definición bíblica de iglesia es el pueblo de Dios en todas partes, no una institución con un papa a su cabeza; recuerda Ef 5:25, que Cristo amó a la iglesia y se entregó a sí mismo por ella, lo que lee como Cristo entregándose por cada uno que es perdonado por gracia, sea cual sea su denominación, mediante la fe y el arrepentimiento",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿De Dónde Surge La Iglesia Católica y Los Protestantes? - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "8 de diciembre de 2021",
                locator: "Minutos 16:58 a 18:12",
                url: "https://www.youtube.com/watch?v=DXcz6pJZcXM&t=1018s",
                text: "fuera que los llaman a reunirse y es una descripción del pueblo de dios en todas partes eso es lo que significa iglesia no significa una institución con un papa sino el pueblo de dios en todas partes la iglesia cristiana somos somos tú y yo somos la multitud de personas salvas por jesucristo que lo siguen como señor de sus vidas si tú lees el nuevo testamento vas a llegar a esta conclusión que esta es la definición de iglesia que da la Biblia, no una institución que tiene la autoridad dada por Dios para gobernar iglesias locales en diferentes lugares y nombrar pastores con un papa a la cabeza de la iglesia. Esto es un desarrollo histórico. En Efesios 5, 25, se nos recuerda que Cristo amó a la iglesia y se dio el mismo por ella. Cristo Jesús amó. Cuando habla de que amó a la iglesia y se dio por ella, está hablando que se dio por cada uno de los que por su gracia podemos ser perdonados de nuestros pecados. Y eso no depende de la denominación a la que perteneces, sino depende de que por la fe has creído en Jesús, te has arrepentido de tus pecados y le has recibido como tu salvador.",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.28.18-Matt.28.20"],
      text: "Segunda Confesión de Londres (1689), 26.4 nota 7/(g) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom by the appointment of the Father, all power for the calling, institution, order, or Government of the Church, is invested in a supream & soveraigne manner, neither can the Pope of Rome in any sense be head thereof, but is that Antichrist, that Man of sin, and Son of perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.4 nota (g) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom, by the appointment of the Father, all Power for the Calling, Institution, Order, or Government of the Church, is invested in a supreme and soveraign manner, neither can the Pope of Rome in any sence be Head thereof, but is that Antichrist, that Man of Sin, and Son of Perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Segunda Confesión de Londres (1689), 26.5 notas (i), (k), (l) (1688 p. 87): este versículo figura como nota al margen junto a la cláusula, en inglés, «In the execution of this Power wherewith he is so intrusted, the Lord Jesus calleth out of the World unto himself, through the Ministry of his Word, by his Spirit, those that are given unto him by his Father, that they may walk before him in all the ways of obedience, which he prescribeth to them in his Word. Those thus called, he commandeth to walk together in particular Societies, or Churches, for their mutual Edification, and the due performance of that publick Worship, which he requireth of them in the World.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
      apologists: {
        arguments: [
          {
            title: "Murr conecta las llaves con la comisión de proclamar el evangelio dada a todos los creyentes",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Mateo 16:19   Yo te daré [Pedro] las llaves del reino de los cielos - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "29 de diciembre de 2023",
                locator: "Minutos 25:45 a 26:48",
                url: "https://www.youtube.com/watch?v=QO7PJOvplOs&t=1545s",
                text: "Entonces las llaves para abrir el reino de Dios fueron dadas después. Si las llaves para abrir el reino son la autoridad y el poder para proclamar el evangelio que abre el reino de los cielos a la gente, que les da el acceso para que la gente sea salva en Jesucristo, esas llaves fueron dadas a todos los creyentes en Mateo 28, 19 al 20, y a cada cristiano les dada. En Mateo 28, 19 al 20 dijo, todo poder me es dado en el cielo y en la tierra, por tanto vayan y hagan discípulos. Y también lo dijo en Hechos capítulo 1, 8, donde dice, recibirán poder cuando venga sobre ustedes el Espíritu Santo y me serán testigos. El mismo apóstol Pedro, en primera de Pedro 2, 8 al 9, dice que cada cristiano es un pueblo adquirido por Dios, real sacerdocionación santa. y dice para que anuncien las virtudes de aquel que los llamó de las tinieblas a su luz admirable. Así que la obra de abrir el reino de los cielos es dada a cada cristiano.",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.2.41-Acts.2.42"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title: "Murr contrasta la enseñanza apostólica plural con una comisión exclusivamente petrina",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿DEJÓ JESÚS UN PAPA? | Lo que revelan la Biblia y la historia - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "17 de agosto de 2026",
                locator: "Minutos 1:50:45 a 1:51:29",
                url: "https://www.youtube.com/watch?v=2v5q6KEWy8I&t=6645s",
                text: "Hechos 2.42 dice que la iglesia, cuando Pedro predicó y se bautizaron 3.000 personas, dice que perseveraban en la enseñanza de los apóstoles. No solo a pesar de que Pedro había predicado y tres mil se convirtieron, Pedro literalmente les había abierto el reino de los cielos, les había dado el poder de perdonar pecados que de Juan 20, donde Jesús les da esa autoridad y dice que a quienes perdonen los pecados, a quienes retengan serán retenidos. vemos a Pedro en acción proclamando el reino de Dios para que todos aquellos que creen en Jesús, sus pecados les son perdonados y abriendo con las llaves del reino entran al reino de los cielos 3.000 personas y Hechos 2.42 dice que perseveraban en la doctrina de los apóstoles.",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.2.47"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title:
              "Murr dice que no está de acuerdo con una lectura calvinista de Hch 2:47 (el Señor añadía a la iglesia los que habían de ser salvos) por el contexto de Hechos: el verbo griego prostithemi, «añadir», es el que se usa también en Hch 11:21–22, así que el versículo debe leerse según cómo usa el libro de Hechos ese mismo verbo",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Calvinismo:- Hechos 2:47 “Y el Señor añadía los que habían de ser salvos.” Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "21 de octubre de 2021",
                locator: "Minutos 5:54 a 6:29",
                url: "https://www.youtube.com/watch?v=yfyBFU_Wmhg&t=354s",
                text: "En segundo lugar, la razón por la cual no estoy de acuerdo con una interpretación calvinista de Hechos 2.47 que el Señor añadía a la iglesia porque Él los había escogido, los que habrían de ser salvos, es el contexto del libro de los hechos. Cuando vemos el libro de los hechos, nos damos cuenta que, por ejemplo, esta frase, y el Señor añadía, en griego este verbo prostitemi, es poner o añadir, y este verbo en griego se utiliza, por ejemplo, en estos pasajes que les voy a compartir, El mismo verbo que aparece en Hechos 2, 47, aparece en Hechos 11, 21 al 22.",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.5.11-Acts.5.14"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title:
              "Murr dice que en Hch 11:21–24 un gran número creyó y fue añadido al Señor, y en Hch 5:14 «cada vez más creyentes se añadían al Señor, multitudes de hombres y mujeres», así que los añadidos eran añadidos porque creían, y los creyentes mismos eran agregados al número de la iglesia cuando respondían al Señor en fe",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Calvinismo:- Hechos 2:47 “Y el Señor añadía los que habían de ser salvos.” Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "21 de octubre de 2021",
                locator: "Minutos 7:23 a 8:38",
                url: "https://www.youtube.com/watch?v=yfyBFU_Wmhg&t=443s",
                text: "El contexto claramente, por ejemplo, en el verso 21 dice que gran número creyó y se convirtió al Señor. O sea, cuando se predicaba el Evangelio, un gran número de personas quiso rendir su vida al Señor ante la obra de Dios, por supuesto, ante la predicación del Evangelio y respondieron en fe a la salvación del Señor y fueron salvos. Entonces, estos que fueron agregados al Señor, a ser parte del Señor, era porque creyeron. No era porque primero Dios los agregó y después creyeron. En Hechos 5.14 dice, y más y más creyentes en el Señor, multitud de hombres y de mujeres se añadían el mismo verbo griego y dice se añadían constantemente al número de ellos. Fíjate que en este verbo ellos mismos se añadían al responder al Señor y creer por la fe. O sea, cuando creían al Señor por la fe, ellos mismos eran añadidos al número de la iglesia. Entonces es importante ver, no ver solo Hechos 2.47, sino ver lo que consistentemente el contexto del libro de los Hechos habla y cuanto más cuando utiliza precisamente el mismo verbo de que en este caso ellos mismos se añadían al responder al Señor y por supuesto que el Señor también es parte en esa salvación porque la salvación es de él.",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.14.23"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title:
              "El congregacionalismo deja que la congregación funcione como instancia final de apelación en los asuntos de la iglesia local, viviendo bajo el señorío de Cristo y bajo pastores o ancianos que la dirigen; las cartas del Nuevo Testamento están escritas a iglesias enteras (Gál 1:8), y toda la congregación ejerce disciplina (Mt 18:15–20; 1 Cor 5:1–13; 2 Cor 2:5–11)",
            quotes: [
              {
                speaker: "Stephen J. Wellum",
                work: "The Priesthood of All Believers and Why the New Covenant Requires Congregationalism",
                outlet: "9Marks",
                date: "16 de septiembre de 2025",
                locator:
                  "2 párrafos: del párrafo que empieza «Evidence for congregationalism can be found…» al que termina «…affairs under the lordship of Christ.»",
                url: "https://www.9marks.org/article/the-priesthood-of-all-believers-and-why-the-new-covenant-requires-congregationalism/",
                text: "Hay evidencia del congregacionalismo en todo el NT. Como creyentes pactados juntos, se escogieron ancianos (Hech. 14:23; Tito 1:5), se predicó la Palabra de Dios y se practicaron las ordenanzas (Hech. 2:42; 1 Cor. 11:26), y la iglesia tomó expresión visible en asambleas locales que gobernaban sus propios asuntos. Por eso una gran cantidad de cartas del NT fueron escritas a iglesias locales, no meramente a oficiales de la iglesia o a algún cuerpo eclesiástico más grande. Las cartas fueron escritas para instruir a toda la congregación sobre sus responsabilidades de gobernarse a sí misma y de protegerse de falsos maestros. Por ejemplo, en Gálatas, Pablo espera que esta joven iglesia juzgue la autoridad angelical y apostólica si predicaran algo contrario al mensaje apostólico (Gal. 1:8). Como dice Mark Dever, “Él [Pablo] no escribe meramente a los pastores, al presbiterio, al obispo o a la conferencia, a la convención, o al seminario. Escribe a los cristianos que componen las iglesias, ¡y deja muy claro que no solo son competentes para juzgar lo que pretende ser el evangelio, sino que deben hacerlo!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nEl congregacionalismo se confirma además en la práctica de la disciplina eclesiástica. No son solo los líderes quienes deben ejercer disciplina sino toda la congregación. La iglesia debe ejercer autoridad sobre los falsos maestros (2 Cor. 10–13; Gal. 1:8; 2 Juan) y sobre la vida de las personas (Mat. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). Por eso Pablo se angustia por el comportamiento de la iglesia de Corinto, que no puede resolver disputas desde dentro y en cambio busca la ayuda de no cristianos. Para Pablo, la iglesia está actuando en contra de lo que ella es, y mediante una serie de preguntas punzantes, lo deja abundantemente claro (ver 1 Cor. 6:2–5a). La consternación de Pablo con la iglesia solo tiene sentido si asume que toda la iglesia está involucrada en este tipo de decisiones. Cada miembro tiene un papel que cumplir porque toda la iglesia es, en última instancia, la corte final de apelación para sus propios asuntos bajo el señorío de Cristo.",
                original:
                  "Evidence for congregationalism can be found throughout the NT. As believers covenanted together, elders were chosen (Acts 14:23; Titus 1:5), God’s Word was preached, and the ordinances were practiced (Acts 2:42; 1 Cor. 11:26), the church took on visible expression in local assemblies that governed their own affairs. This is why a vast number of NT letters were written to local churches, not merely to church officers or some larger ecclesiastical body. The letters were written to instruct the entire congregation of their responsibilities to govern themselves and to protect themselves from false teachers. For example, in Galatians, Paul expects this young church to sit in judgment of angelic and apostolic authority if they should preach something contrary to the apostolic message (Gal. 1:8). As Mark Dever notes, “He [Paul] doesn’t write merely to the pastors, to the presbytery, to the bishop or the conference, to the convention, or to the seminary. He writes to the Christians who compose the churches, and he makes it quite clear that not only are they competent to sit in judgment on what claims to be the gospel, but that they must!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nCongregationalism is further confirmed in the practice of church discipline. It’s not only leaders who are to exercise discipline but the entire congregation. The church is to exercise authority over false teachers (2 Cor. 10–13; Gal. 1:8; 2 John) and people’s lives (Matt. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). This is why Paul is distraught by the behavior of the Corinthian church who cannot settle disputes from within and instead seeks the help of non-Christians. For Paul, the church is acting contrary to what she is, and by a series of pointed questions, he makes this abundantly clear (see 1 Cor. 6:2–5a). Paul’s consternation with the church only makes sense if he assumes that the entire church is involved in these kinds of decisions. Each member has a role to play because the entire church is ultimately the final court of appeal for her own affairs under the lordship of Christ.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.1.2"],
      text: "Segunda Confesión de Londres (1689), 26.2 notas (b), (c) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] are and may be called visible Saints; and of such ought all particular Congregations to be constituted.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Segunda Confesión de Londres (1689), 26.6 nota (m) (1688 p. 87): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Members of these Churches are Saints by calling […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title: "Murr lee la iglesia como el pueblo santificado en Corinto junto con todos los que invocan a Cristo",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿DEJÓ JESÚS UN PAPA? | Lo que revelan la Biblia y la historia - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "17 de agosto de 2026",
                locator: "Minutos 2:46:28 a 2:47:21",
                url: "https://www.youtube.com/watch?v=2v5q6KEWy8I&t=9988s",
                text: "el punto volviendo a donde comenzamos de mateo 16 18 es que el señor edificaría su iglesia por todos los tiempos hasta que él venga por ella su iglesia son las personas salvas por cristo como lo dice primera de corintios 1 2 mira lo que dice que precioso versículo dice a la iglesia de dios Sabes que eso es lo que Dios quiere que seamos tú y yo, iglesia de Dios, la asamblea de personas redimidas por Jesús que le pertenecemos a Dios. Dice que está en Corinto, es una de las manifestaciones de la iglesia en cada ciudad. A los que han sido santificados en Cristo Jesús. ¿Quién es la iglesia? Los que han sido apartados para ser de Cristo y llamados a ser su pueblo santo. junto con todos los que en todas partes invocan el nombre de nuestro señor jesucristo señor de ellos y de nosotros ahí tienes a la iglesia",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.3.8-Eph.3.11"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title:
              "Wellum dice que no se puede pensar el evangelio sin la iglesia, porque Cristo y su pueblo están entretejidos en la Escritura: Jesús edifica su iglesia (Mt 16), la iglesia es la comunidad del nuevo pacto (Heb 8), partícipe de la Jerusalén celestial (Heb 12), el nuevo templo (Heb 3), el nuevo hombre (Ef 2); en Ef 1:22–23 todo el gobierno de Cristo es «en y para la iglesia»; las llaves del reino están atadas a la proclamación del evangelio por la iglesia, y en Ef 3 la iglesia es la manifestación de la sabiduría de Dios",
            quotes: [
              {
                speaker: "Stephen J. Wellum",
                work: "The Church and the Gospel in the 21st Century Part 2 - Dr. Stephen Wellum",
                outlet: "Toronto Baptist Seminary & Bible College",
                date: "12 de abril de 2019",
                locator: "Minutos 56:02 a 58:04",
                url: "https://www.youtube.com/watch?v=3D7BvYIwQXA&t=3362s",
                text: "Porque en la Escritura, Cristo y su pueblo están íntimamente entrelazados. Piensen en Mateo capítulo 16. Jesús ha venido a edificar su iglesia. Eso somos nosotros. Edificar la asamblea. Llama a sus discípulos, edifica esa iglesia. Nosotros somos esas personas. Estamos en el libro de Hebreos capítulo 8, el pueblo de la comunidad del nuevo pacto. Todo eso habla de la fidelidad de los propósitos de Dios. Somos ese pueblo, ese pueblo transformado, nacido del Espíritu, capacitado por el Espíritu. Somos partícipes de la Jerusalén celestial, el Sion, Hebreos capítulo 12. Hebreos 3, somos el nuevo templo. Eso es lo que somos. Efesios 2, somos el nuevo hombre, la nueva creación. Efesios 1 versículos 22 y 23, que todo el gobierno soberano de Dios, el gobierno de Cristo, es en y para la iglesia. Tenemos que renovarnos en una visión correcta de nosotros mismos, ¿no? Necesitamos vernos como el pueblo de Dios y como los llamados a una tarea, que no somos como el mundo, que no somos simplemente algo que va y viene. No somos simplemente como el club Kiwanis local. Somos un pueblo para siempre. Somos el pueblo escogido de Dios, un sacerdocio real, una nación santa, asumiendo ese papel de Israel, de modo que ahora, aun mientras esperamos la venida de Cristo, es a través de nosotros que el evangelio se proclama. Es a través de nosotros que se entregan las llaves del reino, lo cual está ligado a la proclamación del evangelio. Es a través de la iglesia que las personas son transformadas, porque la iglesia predica el evangelio. Es el evangelio el que transforma a las personas, pero es la iglesia, es el pueblo de Dios, el que proclama ese evangelio. Es en la iglesia, Efesios 3 lo describirá como la exhibición de la sabiduría misma de Dios, donde en la iglesia las personas son reconciliadas y vemos la obra salvadora de Dios exhibida ante los ángeles y exhibida ante el mundo que nos rodea. Necesitamos recuperar lo que somos como el pueblo de Dios.",
                original:
                  "Because in scripture, Christ and his people are intimately woven together. Think of Matthew chapter 16. Jesus has come to build his church. That's us. Build the assembly. Calls his disciples, builds that church. We are those people. We are in the book of Hebrews chapter 8, the people of the new covenant community. All of that speaks of the fidelity of God's purposes. We are that people, that transformed people, born of the Spirit, empowered by the Spirit. We are participants of the heavenly Jerusalem, the Zion, Hebrews chapter 12. Hebrews 3, we are the new temple. That is what we are. Ephesians 2, we are the new man, the new creation. Ephesians 1 verses 22 and 23, that all of God's sovereign rule, Christ's rule, is in and for the church. We have to renew ourselves to a proper view of ourselves, right? We need to see ourselves as God's people and those who are called to a task that we are not like the world, that we are not just something that is coming and going. We're not just like the local Kiwanis club. We are a forever people. We are the people who are God's chosen people, a royal priesthood, a holy nation taking on that role of Israel, so that we are now, even as we await the coming of Christ, it's through us that the gospel is proclaimed. It's through us that the keys of the kingdom are given, which is tied to the proclamation of the gospel. It's through the church that people are transformed because the gospel is preached by the church. It's the gospel that transforms people, but it's the church, it's the people of God that proclaim that gospel. It's in the church, Ephesians 3 will describe it as the display of the very wisdom of God, where in the church people are reconciled and we see God's saving work displayed before angels and displayed before the world around us. We need to recapture what we are as the people of God.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.3.21"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title:
              "Wellum dice que no se puede pensar el evangelio sin la iglesia, porque Cristo y su pueblo están entretejidos en la Escritura: Jesús edifica su iglesia (Mt 16), la iglesia es la comunidad del nuevo pacto (Heb 8), partícipe de la Jerusalén celestial (Heb 12), el nuevo templo (Heb 3), el nuevo hombre (Ef 2); en Ef 1:22–23 todo el gobierno de Cristo es «en y para la iglesia»; las llaves del reino están atadas a la proclamación del evangelio por la iglesia, y en Ef 3 la iglesia es la manifestación de la sabiduría de Dios",
            quotes: [
              {
                speaker: "Stephen J. Wellum",
                work: "The Church and the Gospel in the 21st Century Part 2 - Dr. Stephen Wellum",
                outlet: "Toronto Baptist Seminary & Bible College",
                date: "12 de abril de 2019",
                locator: "Minutos 56:02 a 58:04",
                url: "https://www.youtube.com/watch?v=3D7BvYIwQXA&t=3362s",
                text: "Porque en la Escritura, Cristo y su pueblo están íntimamente entrelazados. Piensen en Mateo capítulo 16. Jesús ha venido a edificar su iglesia. Eso somos nosotros. Edificar la asamblea. Llama a sus discípulos, edifica esa iglesia. Nosotros somos esas personas. Estamos en el libro de Hebreos capítulo 8, el pueblo de la comunidad del nuevo pacto. Todo eso habla de la fidelidad de los propósitos de Dios. Somos ese pueblo, ese pueblo transformado, nacido del Espíritu, capacitado por el Espíritu. Somos partícipes de la Jerusalén celestial, el Sion, Hebreos capítulo 12. Hebreos 3, somos el nuevo templo. Eso es lo que somos. Efesios 2, somos el nuevo hombre, la nueva creación. Efesios 1 versículos 22 y 23, que todo el gobierno soberano de Dios, el gobierno de Cristo, es en y para la iglesia. Tenemos que renovarnos en una visión correcta de nosotros mismos, ¿no? Necesitamos vernos como el pueblo de Dios y como los llamados a una tarea, que no somos como el mundo, que no somos simplemente algo que va y viene. No somos simplemente como el club Kiwanis local. Somos un pueblo para siempre. Somos el pueblo escogido de Dios, un sacerdocio real, una nación santa, asumiendo ese papel de Israel, de modo que ahora, aun mientras esperamos la venida de Cristo, es a través de nosotros que el evangelio se proclama. Es a través de nosotros que se entregan las llaves del reino, lo cual está ligado a la proclamación del evangelio. Es a través de la iglesia que las personas son transformadas, porque la iglesia predica el evangelio. Es el evangelio el que transforma a las personas, pero es la iglesia, es el pueblo de Dios, el que proclama ese evangelio. Es en la iglesia, Efesios 3 lo describirá como la exhibición de la sabiduría misma de Dios, donde en la iglesia las personas son reconciliadas y vemos la obra salvadora de Dios exhibida ante los ángeles y exhibida ante el mundo que nos rodea. Necesitamos recuperar lo que somos como el pueblo de Dios.",
                original:
                  "Because in scripture, Christ and his people are intimately woven together. Think of Matthew chapter 16. Jesus has come to build his church. That's us. Build the assembly. Calls his disciples, builds that church. We are those people. We are in the book of Hebrews chapter 8, the people of the new covenant community. All of that speaks of the fidelity of God's purposes. We are that people, that transformed people, born of the Spirit, empowered by the Spirit. We are participants of the heavenly Jerusalem, the Zion, Hebrews chapter 12. Hebrews 3, we are the new temple. That is what we are. Ephesians 2, we are the new man, the new creation. Ephesians 1 verses 22 and 23, that all of God's sovereign rule, Christ's rule, is in and for the church. We have to renew ourselves to a proper view of ourselves, right? We need to see ourselves as God's people and those who are called to a task that we are not like the world, that we are not just something that is coming and going. We're not just like the local Kiwanis club. We are a forever people. We are the people who are God's chosen people, a royal priesthood, a holy nation taking on that role of Israel, so that we are now, even as we await the coming of Christ, it's through us that the gospel is proclaimed. It's through us that the keys of the kingdom are given, which is tied to the proclamation of the gospel. It's through the church that people are transformed because the gospel is preached by the church. It's the gospel that transforms people, but it's the church, it's the people of God that proclaim that gospel. It's in the church, Ephesians 3 will describe it as the display of the very wisdom of God, where in the church people are reconciled and we see God's saving work displayed before angels and displayed before the world around us. We need to recapture what we are as the people of God.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Phil.1.1"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title:
              "Pablo da calificaciones solo para dos grupos: obispos o ancianos y diáconos; si pastor es un oficio del Nuevo Testamento, pertenece a los ancianos",
            quotes: [
              {
                speaker: "Ben Robin",
                work: "A Pastor Is an Elder Is a Bishop",
                outlet: "9Marks",
                date: "24 de noviembre de 2025",
                locator:
                  "2 párrafos: del párrafo que empieza «Not only that, but in his…» al que termina «…other option in the New Testament.»",
                url: "https://www.9marks.org/article/a-pastor-is-an-elder-is-a-bishop/",
                text: "No solo eso, sino que en su carta a una iglesia en Filipos, Pablo escribe “a todos los santos”, incluidos “los obispos y diáconos” (Fil. 1:1). Sería bastante extraño que dejara fuera a los pastores si escribe a “todos los santos en Cristo Jesús”, especialmente porque en su otra carta describe los dos oficios, con sus requisitos y todo. Un lector cuidadoso de 1 Timoteo 3:1–7 y Tito 1:5–9 también puede notar que la lista de requisitos es prácticamente idéntica. Entonces, si dices que un pastor no es un anciano, arriesgas aflojar también la conexión entre obispo y anciano.\n\nSi quieres que “pastor” sea un oficio del Nuevo Testamento en algún sentido, entonces vas a tener que decidir si el pastor entra en el grupo de los ancianos o en el de los diáconos. No hay otra opción en el Nuevo Testamento.",
                original:
                  "Not only that, but in his letter to a church in Philippi, Paul writes “to all the saints,” including “the overseers and deacons” (Phil. 1:1). It would be quite odd for him to leave out the pastors if he’s writing to “all the saints in Christ Jesus,” especially since he outlines the two offices, qualifications and all, in his other letter. A careful reader of 1 Timothy 3:1–7 and Titus 1:5–9 may also notice that the list of qualifications is virtually identical. So, if you say a pastor is not an elder, then you risk loosening the connection between overseer and elder as well.\n\nIf you want “pastor” to be a New Testament office in any sense, then you’ll need to decide if pastor goes in the elder bucket or the deacon bucket. There’s no other option in the New Testament.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Heb.12.22-Heb.12.23"],
      text: "Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.1 nota (a) (1688 p. 85): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Catholick or Universal Church, which (with respect to the internal work of the Spirit, and truth of Grace) may be called Invisible, consists of the whole Number of the Elect, that have been, are, or shall be gathered into one, under Christ, the Head thereof; and is the Spouse, the Body, the Fulness of Him that filleth all in all.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
      apologists: {
        arguments: [
          {
            title:
              "Wellum dice que no se puede pensar el evangelio sin la iglesia, porque Cristo y su pueblo están entretejidos en la Escritura: Jesús edifica su iglesia (Mt 16), la iglesia es la comunidad del nuevo pacto (Heb 8), partícipe de la Jerusalén celestial (Heb 12), el nuevo templo (Heb 3), el nuevo hombre (Ef 2); en Ef 1:22–23 todo el gobierno de Cristo es «en y para la iglesia»; las llaves del reino están atadas a la proclamación del evangelio por la iglesia, y en Ef 3 la iglesia es la manifestación de la sabiduría de Dios",
            quotes: [
              {
                speaker: "Stephen J. Wellum",
                work: "The Church and the Gospel in the 21st Century Part 2 - Dr. Stephen Wellum",
                outlet: "Toronto Baptist Seminary & Bible College",
                date: "12 de abril de 2019",
                locator: "Minutos 56:02 a 58:04",
                url: "https://www.youtube.com/watch?v=3D7BvYIwQXA&t=3362s",
                text: "Porque en la Escritura, Cristo y su pueblo están íntimamente entrelazados. Piensen en Mateo capítulo 16. Jesús ha venido a edificar su iglesia. Eso somos nosotros. Edificar la asamblea. Llama a sus discípulos, edifica esa iglesia. Nosotros somos esas personas. Estamos en el libro de Hebreos capítulo 8, el pueblo de la comunidad del nuevo pacto. Todo eso habla de la fidelidad de los propósitos de Dios. Somos ese pueblo, ese pueblo transformado, nacido del Espíritu, capacitado por el Espíritu. Somos partícipes de la Jerusalén celestial, el Sion, Hebreos capítulo 12. Hebreos 3, somos el nuevo templo. Eso es lo que somos. Efesios 2, somos el nuevo hombre, la nueva creación. Efesios 1 versículos 22 y 23, que todo el gobierno soberano de Dios, el gobierno de Cristo, es en y para la iglesia. Tenemos que renovarnos en una visión correcta de nosotros mismos, ¿no? Necesitamos vernos como el pueblo de Dios y como los llamados a una tarea, que no somos como el mundo, que no somos simplemente algo que va y viene. No somos simplemente como el club Kiwanis local. Somos un pueblo para siempre. Somos el pueblo escogido de Dios, un sacerdocio real, una nación santa, asumiendo ese papel de Israel, de modo que ahora, aun mientras esperamos la venida de Cristo, es a través de nosotros que el evangelio se proclama. Es a través de nosotros que se entregan las llaves del reino, lo cual está ligado a la proclamación del evangelio. Es a través de la iglesia que las personas son transformadas, porque la iglesia predica el evangelio. Es el evangelio el que transforma a las personas, pero es la iglesia, es el pueblo de Dios, el que proclama ese evangelio. Es en la iglesia, Efesios 3 lo describirá como la exhibición de la sabiduría misma de Dios, donde en la iglesia las personas son reconciliadas y vemos la obra salvadora de Dios exhibida ante los ángeles y exhibida ante el mundo que nos rodea. Necesitamos recuperar lo que somos como el pueblo de Dios.",
                original:
                  "Because in scripture, Christ and his people are intimately woven together. Think of Matthew chapter 16. Jesus has come to build his church. That's us. Build the assembly. Calls his disciples, builds that church. We are those people. We are in the book of Hebrews chapter 8, the people of the new covenant community. All of that speaks of the fidelity of God's purposes. We are that people, that transformed people, born of the Spirit, empowered by the Spirit. We are participants of the heavenly Jerusalem, the Zion, Hebrews chapter 12. Hebrews 3, we are the new temple. That is what we are. Ephesians 2, we are the new man, the new creation. Ephesians 1 verses 22 and 23, that all of God's sovereign rule, Christ's rule, is in and for the church. We have to renew ourselves to a proper view of ourselves, right? We need to see ourselves as God's people and those who are called to a task that we are not like the world, that we are not just something that is coming and going. We're not just like the local Kiwanis club. We are a forever people. We are the people who are God's chosen people, a royal priesthood, a holy nation taking on that role of Israel, so that we are now, even as we await the coming of Christ, it's through us that the gospel is proclaimed. It's through us that the keys of the kingdom are given, which is tied to the proclamation of the gospel. It's through the church that people are transformed because the gospel is preached by the church. It's the gospel that transforms people, but it's the church, it's the people of God that proclaim that gospel. It's in the church, Ephesians 3 will describe it as the display of the very wisdom of God, where in the church people are reconciled and we see God's saving work displayed before angels and displayed before the world around us. We need to recapture what we are as the people of God.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Ps.72.17"],
      text: "Segunda Confesión de Londres (1689), 26.3 nota (f) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] nevertheless Christ always hath had, and ever shall have a Kingdome, in this world, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Ps.102.28"],
      text: "Segunda Confesión de Londres (1689), 26.3 nota (f) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] nevertheless Christ always hath had, and ever shall have a Kingdome, in this world, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["John.10.16"],
      text: "Segunda Confesión de Londres (1689), 26.5 notas (i), (k), (l) (1688 p. 87): este versículo figura como nota al margen junto a la cláusula, en inglés, «In the execution of this Power wherewith he is so intrusted, the Lord Jesus calleth out of the World unto himself, through the Ministry of his Word, by his Spirit, those that are given unto him by his Father, that they may walk before him in all the ways of obedience, which he prescribeth to them in his Word. Those thus called, he commandeth to walk together in particular Societies, or Churches, for their mutual Edification, and the due performance of that publick Worship, which he requireth of them in the World.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["John.12.32"],
      text: "Segunda Confesión de Londres (1689), 26.5 notas (i), (k), (l) (1688 p. 87): este versículo figura como nota al margen junto a la cláusula, en inglés, «In the execution of this Power wherewith he is so intrusted, the Lord Jesus calleth out of the World unto himself, through the Ministry of his Word, by his Spirit, those that are given unto him by his Father, that they may walk before him in all the ways of obedience, which he prescribeth to them in his Word. Those thus called, he commandeth to walk together in particular Societies, or Churches, for their mutual Edification, and the due performance of that publick Worship, which he requireth of them in the World.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Acts.6.3-Acts.6.6"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.11.26"],
      text: "Segunda Confesión de Londres (1689), 26.2 notas (b), (c) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] are and may be called visible Saints; and of such ought all particular Congregations to be constituted.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Acts.13.1-Acts.13.3"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.14.27"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.16.5"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.17.10"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.18.28"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rom.1.7"],
      text: "Segunda Confesión de Londres (1689), 26.2 notas (b), (c) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] are and may be called visible Saints; and of such ought all particular Congregations to be constituted.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Segunda Confesión de Londres (1689), 26.6 nota (m) (1688 p. 87): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Members of these Churches are Saints by calling […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.3.16"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.7.17"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.9.13-1Cor.9.14"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.15.1"],
      text: "Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Gal.3.28"],
      text: "Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Eph.1.10"],
      text: "Segunda Confesión de Londres (1689), 26.1 nota (a) (1688 p. 85): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Catholick or Universal Church, which (with respect to the internal work of the Spirit, and truth of Grace) may be called Invisible, consists of the whole Number of the Elect, that have been, are, or shall be gathered into one, under Christ, the Head thereof; and is the Spouse, the Body, the Fulness of Him that filleth all in all.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["2Thess.2.11-2Thess.2.12"],
      text: "Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["1Tim.2.9-1Tim.2.14"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Tim.4.14"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Heb.11.39-Heb.11.40"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Rev.2.1-Rev.3.22"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar. Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Rev.12.17"],
      text: "Segunda Confesión de Londres (1689), 26.3 nota (f) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] nevertheless Christ always hath had, and ever shall have a Kingdome, in this world, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Rev.13.8"],
      text: "Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rev.14.1"],
      text: "Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rev.18.2"],
      text: "Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Rev.21.2-Rev.21.3"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
  ],
  passages: {
    title: "Los pasajes de la posición bautista",
    lede: "Los versículos que la tradición bautista cita sobre la Iglesia y su gobierno, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la tradición bautista.",
    apologistsLabel: "Cómo lo defienden los apologistas bautistas.",
  },
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
