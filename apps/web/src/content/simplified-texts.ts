import { simplifierEnabled } from "@/lib/simplifier-enabled";
import type { SimplifiedEntry } from "@/lib/simplifier-types";

const texts: Record<string, SimplifiedEntry> = {
  "eucharist/catholic/definition": {
    lang: "es",
    original: [
      "Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo, instituido en la última Cena para hacer presente el sacrificio de la cruz hasta que él vuelva, y a la vez el banquete en el que se recibe a Cristo mismo.",
    ],
    clear: [
      "Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo, que él instituyó en la última Cena para hacer presente el sacrificio de la cruz hasta que vuelva; y es a la vez el banquete en el que se recibe a Cristo mismo.",
    ],
    very: [
      "Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo. Él lo dejó en la última Cena para hacer presente su sacrificio en la cruz hasta que vuelva. Y es también el banquete en el que se recibe a Cristo mismo.",
    ],
  },
  "eucharist/catholic/QE-1": {
    lang: "es",
    original: [
      "En la Eucaristía, después de la consagración, está contenido verdadera, real y sustancialmente Cristo entero: su cuerpo y su sangre, con su alma y su divinidad.",
      "No está solo como en un signo o una figura.",
      "La Iglesia la llama presencia «real» por excelencia, no porque las otras presencias de Cristo (en su Palabra, en la oración de la Iglesia, en los sacramentos) no sean reales.",
    ],
    clear: [
      "En la Eucaristía, después de la consagración, Cristo está presente entero, de verdad, de modo real y en su sustancia: su cuerpo y su sangre, con su alma y su divinidad.",
      "No está solo como en un signo o una figura.",
      "La Iglesia la llama presencia «real» por excelencia, y no porque las otras presencias de Cristo (en su Palabra, en la oración de la Iglesia, en los sacramentos) no sean reales.",
    ],
    very: [
      "Después de la consagración, Cristo está presente en la Eucaristía de verdad, de modo real y en su sustancia: entero, con su cuerpo y su sangre, su alma y su divinidad.",
      "No está solo como un signo o una figura.",
      "La Iglesia llama «real» a esta presencia de manera especial. No lo hace porque las otras presencias de Cristo (en su Palabra, en la oración de la Iglesia, en los sacramentos) no sean reales.",
    ],
  },
  "eucharist/catholic/QE-2": {
    lang: "es",
    original: [
      "Por la consagración, toda la sustancia del pan se convierte en la sustancia del cuerpo de Cristo y toda la sustancia del vino en la de su sangre; del pan y del vino quedan solo las especies (lo que se ve, se toca y se gusta).",
      "La Iglesia llama a este cambio «transubstanciación».",
    ],
    clear: [
      "Por la consagración, toda la sustancia del pan pasa a ser la sustancia del cuerpo de Cristo, y toda la sustancia del vino, la de su sangre; del pan y del vino solo quedan las especies (lo que se ve, se toca y se gusta).",
      "La Iglesia llama «transubstanciación» a este cambio.",
    ],
    very: [
      "Cuando se consagra, lo que el pan es en sí mismo pasa a ser el cuerpo de Cristo, y lo que el vino es en sí mismo pasa a ser su sangre. Solo quedan las especies: lo que se ve, se toca y se gusta.",
      "La Iglesia llama «transubstanciación» a este cambio.",
    ],
  },
  "eucharist/baptist/definition": {
    lang: "es",
    original: [
      "Según Fe y Mensaje Bautistas (art. VII), los miembros de la iglesia participan del pan y del fruto de la vid para recordar la muerte del Redentor y anticipar su segunda venida.",
      "La misma sección presenta el bautismo como requisito previo a la Cena.",
      "Es la formulación de este documento de la convención, sin atribuirla a todas las familias bautistas.",
    ],
    clear: [
      "Según Fe y Mensaje Bautistas (art. VII), los miembros de la iglesia participan del pan y del fruto de la vid para recordar la muerte del Redentor y mirar hacia su segunda venida.",
      "En esa misma sección, el bautismo aparece como requisito previo a la Cena.",
      "Esta es la formulación de este documento de la convención; no se atribuye a todas las familias bautistas.",
    ],
    very: [
      "Fe y Mensaje Bautistas (art. VII) dice que los miembros de la iglesia comparten el pan y el fruto de la vid. Lo hacen para recordar la muerte del Redentor y para mirar hacia su segunda venida.",
      "El mismo texto pone el bautismo antes de la Cena, como requisito.",
      "Es lo que dice este documento de la convención. No se dice que valga para todas las familias bautistas.",
    ],
  },
  "eucharist/baptist/QE-1": {
    lang: "es",
    original: [
      "Fe y Mensaje Bautistas llama a la Cena un «acto simbólico de obediencia», en el que los miembros de la iglesia participan del pan y del fruto de la vid para recordar la muerte del Redentor y anticipar su segunda venida.",
    ],
    clear: [
      "Fe y Mensaje Bautistas llama a la Cena un «acto simbólico de obediencia», en el que los miembros de la iglesia participan del pan y del fruto de la vid para recordar la muerte del Redentor y mirar hacia su segunda venida.",
    ],
    very: [
      "Fe y Mensaje Bautistas llama a la Cena un «acto simbólico de obediencia». En ella, los miembros de la iglesia comparten el pan y el fruto de la vid. Así recuerdan la muerte del Redentor y miran hacia su segunda venida.",
    ],
  },
  "eucharist/baptist/QE-2": {
    lang: "es",
    original: [
      "La Confesión de New Hampshire enseña: «mediante el uso [sagrado] del pan y del vino, han de conmemorar juntos el amor de Cristo en su muerte; precedido siempre de un solemne examen de sí mismos».",
    ],
    clear: [
      "La Confesión de New Hampshire enseña que, mediante el uso sagrado del pan y del vino, han de recordar juntos el amor de Cristo en su muerte, y que antes siempre debe haber un examen serio de sí mismos.",
    ],
    very: [
      "La Confesión de New Hampshire enseña que, al usar el pan y el vino, han de recordar juntos el amor de Cristo al morir. Antes, siempre deben examinarse a sí mismos con seriedad.",
    ],
  },
  "baptism/catholic/definition": {
    lang: "es",
    original: [
      "Para la Iglesia católica, el bautismo es «el sacramento del nuevo nacimiento por el agua y la palabra» (Catecismo 1213): por él la persona es liberada del pecado, renace como hijo de Dios, se hace miembro de Cristo y entra en la Iglesia.",
      "Es la puerta de la vida cristiana y de los demás sacramentos, y se da una sola vez.",
    ],
    clear: [
      "Para la Iglesia católica, el bautismo es «el sacramento del nuevo nacimiento por el agua y la palabra» (Catecismo 1213): por él la persona queda libre del pecado, nace de nuevo como hijo de Dios, se hace miembro de Cristo y entra en la Iglesia.",
      "Es la puerta de la vida cristiana y de los demás sacramentos, y se recibe una sola vez.",
    ],
    very: [
      "Para la Iglesia católica, el bautismo es «el sacramento del nuevo nacimiento por el agua y la palabra» (Catecismo 1213). Con él, la persona queda libre del pecado, nace como hijo de Dios, se hace miembro de Cristo y entra en la Iglesia.",
      "Es la entrada a la vida cristiana y a los demás sacramentos. Se recibe una sola vez.",
    ],
  },
  "baptism/catholic/QE-1": {
    lang: "es",
    original: [
      "El bautismo es uno de los siete sacramentos que Cristo instituyó.",
      "Como todo sacramento de la Nueva Ley, no es solo un signo exterior de una gracia recibida antes por la fe: contiene la gracia que significa y la confiere a quien no le pone obstáculo.",
      "Por eso la Iglesia lo llama «el sacramento del nuevo nacimiento»: lo que el agua significa, el lavado y la vida nueva, el bautismo lo realiza.",
    ],
    clear: [
      "El bautismo es uno de los siete sacramentos que Cristo instituyó.",
      "Como todo sacramento de la Nueva Ley, no es solo una señal externa de una gracia que se recibió antes por la fe: contiene la gracia que significa y se la da a quien no le pone obstáculo.",
      "Por eso la Iglesia lo llama «el sacramento del nuevo nacimiento»: lo que el agua significa, el lavado y la vida nueva, el bautismo lo realiza.",
    ],
    very: [
      "El bautismo es uno de los siete sacramentos que Cristo instituyó.",
      "Como todo sacramento de la Nueva Ley, no es solo una señal externa de una gracia recibida antes por la fe. Contiene la gracia que significa, y la da a quien no pone obstáculo.",
      "Por eso la Iglesia lo llama «el sacramento del nuevo nacimiento». El agua significa lavado y vida nueva, y el bautismo hace realidad eso.",
    ],
  },
  "baptism/catholic/QE-2": {
    lang: "es",
    original: [
      "Por el bautismo se perdonan el pecado original y todos los pecados personales, y todas las penas debidas por el pecado.",
      "El bautizado es hecho «una nueva creatura», hijo adoptivo de Dios, miembro de Cristo y templo del Espíritu Santo, y recibe la gracia santificante con la fe, la esperanza y la caridad.",
      "En él queda una inclinación al pecado, la concupiscencia, «dejada para el combate», que la Iglesia no considera pecado en sentido propio.",
    ],
    clear: [
      "Por el bautismo se perdonan el pecado original y todos los pecados personales, y también todas las penas debidas por el pecado.",
      "El bautizado se hace «una nueva creatura»: hijo adoptivo de Dios, miembro de Cristo y templo del Espíritu Santo; y recibe la gracia santificante junto con la fe, la esperanza y la caridad.",
      "En él queda una inclinación al pecado, la concupiscencia, «dejada para el combate», que la Iglesia no considera pecado en sentido propio.",
    ],
    very: [
      "El bautismo perdona el pecado original, todos los pecados personales y todas las penas que se debían por el pecado.",
      "El bautizado pasa a ser «una nueva creatura»: hijo adoptivo de Dios, miembro de Cristo y templo del Espíritu Santo. Recibe la gracia santificante, junto con la fe, la esperanza y la caridad.",
      "Le queda una inclinación al pecado, la concupiscencia, «dejada para el combate». La Iglesia no la considera pecado en sentido propio.",
    ],
  },
  "baptism/baptist/definition": {
    lang: "es",
    original: [
      "La Confesión de New Hampshire dice: «El bautismo cristiano es la inmersión en agua de un creyente, en el nombre del Padre [y] del Hijo y del Espíritu Santo».",
    ],
    clear: [
      "La Confesión de New Hampshire dice que el bautismo cristiano es la inmersión en agua de un creyente, en el nombre del Padre, del Hijo y del Espíritu Santo.",
    ],
    very: [
      "La Confesión de New Hampshire dice que el bautismo cristiano consiste en sumergir en agua a un creyente, en el nombre del Padre, del Hijo y del Espíritu Santo.",
    ],
  },
  "baptism/baptist/QE-1": {
    lang: "es",
    original: [
      "La Confesión de New Hampshire enseña: «El bautismo cristiano es la inmersión en agua de un creyente, en el nombre del Padre [y] del Hijo y del Espíritu Santo».",
    ],
    clear: [
      "La Confesión de New Hampshire enseña que el bautismo cristiano es la inmersión en agua de un creyente, en el nombre del Padre, del Hijo y del Espíritu Santo.",
    ],
    very: [
      "La Confesión de New Hampshire enseña que el bautismo cristiano consiste en sumergir en agua a un creyente, en el nombre del Padre, del Hijo y del Espíritu Santo.",
    ],
  },
  "baptism/baptist/QE-2": {
    lang: "es",
    original: [
      "Para Fe y Mensaje Bautistas, el bautismo es la inmersión de un creyente en el nombre del Padre, del Hijo y del Espíritu Santo.",
      "Simboliza su fe en Cristo crucificado, sepultado y resucitado, su muerte al pecado, la sepultura de la vida anterior y una vida nueva en Cristo.",
      "También testimonia su fe en la resurrección final de los muertos.",
    ],
    clear: [
      "Para Fe y Mensaje Bautistas, el bautismo es la inmersión de un creyente en el nombre del Padre, del Hijo y del Espíritu Santo.",
      "Simboliza su fe en Cristo crucificado, sepultado y resucitado, su muerte al pecado, la sepultura de su vida anterior y una vida nueva en Cristo.",
      "También da testimonio de su fe en la resurrección final de los muertos.",
    ],
    very: [
      "Para Fe y Mensaje Bautistas, el bautismo es sumergir a un creyente en el nombre del Padre, del Hijo y del Espíritu Santo.",
      "Es un signo de su fe en Cristo, que fue crucificado, sepultado y resucitado. Muestra que el creyente murió al pecado, que sepultó su vida anterior y que tiene una vida nueva en Cristo.",
      "También muestra su fe en la resurrección final de los muertos.",
    ],
  },
  "papacy/catholic/definition": {
    lang: "es",
    original: [
      "Para la Iglesia católica, Cristo puso a Pedro al frente de los apóstoles como «principio y fundamento, perpetuo y visible, de la unidad de fe y de comunión» (Lumen gentium 18), y ese oficio continúa en el obispo de Roma, su sucesor.",
      "El papa tiene sobre toda la Iglesia una potestad plena, suprema e inmediata, que no anula la de los obispos sino que la confirma; y cuando define solemnemente una doctrina de fe o de costumbres para toda la Iglesia, la define sin error, por la asistencia del Espíritu Santo prometida a Pedro.",
    ],
    clear: [
      "Para la Iglesia católica, Cristo puso a Pedro al frente de los apóstoles como «principio y fundamento, perpetuo y visible, de la unidad de fe y de comunión» (Lumen gentium 18), y ese oficio sigue en el obispo de Roma, su sucesor.",
      "El papa tiene sobre toda la Iglesia una potestad plena, suprema e inmediata, que no anula la de los obispos sino que la confirma; y cuando define de modo solemne una doctrina de fe o de costumbres para toda la Iglesia, la define sin error, por la asistencia del Espíritu Santo prometida a Pedro.",
    ],
    very: [
      "Para la Iglesia católica, Cristo puso a Pedro al frente de los apóstoles. Pedro es «principio y fundamento, perpetuo y visible, de la unidad de fe y de comunión» (Lumen gentium 18). Ese oficio continúa en el obispo de Roma, que es su sucesor.",
      "El papa tiene sobre toda la Iglesia un poder pleno, supremo e inmediato. No anula el de los obispos: lo confirma. Cuando define de manera solemne una doctrina de fe o de costumbres para toda la Iglesia, la define sin error, porque lo asiste el Espíritu Santo prometido a Pedro.",
    ],
  },
  "papacy/catholic/QE-1": {
    lang: "es",
    original: [
      "«Según los testimonios del Evangelio» (Vaticano I), Cristo prometió y dio directamente a Pedro, y solo a él, el primado de jurisdicción sobre toda la Iglesia: le llamó «Piedra», le dio las llaves del Reino y le encargó apacentar todo su rebaño.",
      "Pedro no recibió ese primado de la Iglesia, como si fuera su delegado, sino de Cristo; y no es solo un primado de honor, sino de verdadera jurisdicción.",
    ],
    clear: [
      "«Según los testimonios del Evangelio» (Vaticano I), Cristo prometió y dio directamente a Pedro, y solo a él, el primado de jurisdicción sobre toda la Iglesia: lo llamó «Piedra», le dio las llaves del Reino y le encargó apacentar todo su rebaño.",
      "Pedro no recibió ese primado de la Iglesia, como si fuera su delegado, sino de Cristo; y no es solo un primado de honor, sino de verdadera jurisdicción.",
    ],
    very: [
      "«Según los testimonios del Evangelio» (Vaticano I), Cristo prometió y dio directamente a Pedro, y solo a él, el primado de jurisdicción sobre toda la Iglesia. Lo llamó «Piedra», le dio las llaves del Reino y le encargó cuidar todo su rebaño.",
      "Pedro no recibió ese primado de la Iglesia, como si fuera su representante, sino de Cristo. Y no es solo un primado de honor: es de verdadera jurisdicción.",
    ],
  },
  "papacy/catholic/QE-2": {
    lang: "es",
    original: [
      "Lo que Cristo instituyó en Pedro para el bien de la Iglesia tiene que durar mientras dure la Iglesia.",
      "Por eso, quien sucede a Pedro en la sede de Roma recibe por institución de Cristo, es decir, por derecho divino, el primado de Pedro sobre toda la Iglesia.",
      "La Iglesia sitúa la muerte de Pedro en Roma por «la tradición literaria y arqueológica más antigua» (Congregación para la Doctrina de la Fe, 1998, n. 3); el Vaticano I habla de la sede romana «consagrada por su sangre» (cap. 2).",
    ],
    clear: [
      "Lo que Cristo instituyó en Pedro para el bien de la Iglesia tiene que durar tanto como la Iglesia.",
      "Por eso, quien sucede a Pedro en la sede de Roma recibe, por institución de Cristo (es decir, por derecho divino), el primado de Pedro sobre toda la Iglesia.",
      "La Iglesia sitúa la muerte de Pedro en Roma según «la tradición literaria y arqueológica más antigua» (Congregación para la Doctrina de la Fe, 1998, n. 3); el Vaticano I habla de la sede romana «consagrada por su sangre» (cap. 2).",
    ],
    very: [
      "Lo que Cristo instituyó en Pedro para el bien de la Iglesia debe durar mientras dure la Iglesia.",
      "Por eso, el que sucede a Pedro en la sede de Roma recibe el primado de Pedro sobre toda la Iglesia. Lo recibe por institución de Cristo, es decir, por derecho divino.",
      "La Iglesia sitúa la muerte de Pedro en Roma según «la tradición literaria y arqueológica más antigua» (Congregación para la Doctrina de la Fe, 1998, n. 3). El Vaticano I habla de la sede romana «consagrada por su sangre» (cap. 2).",
    ],
  },
  "papacy/baptist/definition": {
    lang: "es",
    original: [
      "La Confesión de New Hampshire dice de la Iglesia: «una Iglesia visible de Cristo es una congregación de creyentes bautizados, asociados por pacto en la fe y la comunión del Evangelio».",
    ],
    clear: [
      "La Confesión de New Hampshire dice de la Iglesia que una Iglesia visible de Cristo es una congregación de creyentes bautizados, unidos por un pacto en la fe y la comunión del Evangelio.",
    ],
    very: [
      "La Confesión de New Hampshire dice de la Iglesia que una Iglesia visible de Cristo es un grupo de creyentes bautizados. Están unidos por un pacto, en la fe y en la comunión del Evangelio.",
    ],
  },
  "papacy/baptist/QE-1": {
    lang: "es",
    original: [
      "La Confesión de New Hampshire enseña: «una Iglesia visible de Cristo es una congregación de creyentes bautizados, asociados por pacto en la fe y la comunión del Evangelio».",
    ],
    clear: [
      "La Confesión de New Hampshire enseña que una Iglesia visible de Cristo es una congregación de creyentes bautizados, unidos por un pacto en la fe y la comunión del Evangelio.",
    ],
    very: [
      "La Confesión de New Hampshire enseña que una Iglesia visible de Cristo es un grupo de creyentes bautizados. Están unidos por un pacto, en la fe y en la comunión del Evangelio.",
    ],
  },
  "papacy/baptist/QE-2": {
    lang: "es",
    original: [
      "Fe y Mensaje Bautistas habla del «señorío de Cristo».",
      "Su artículo VI describe una congregación local autónoma de creyentes bautizados, con comunión de pacto, las ordenanzas y las leyes de Cristo, misión del Evangelio y procesos democráticos bajo Cristo; cada miembro responde ante Cristo, y sus dos oficios bíblicos son pastor, anciano u obispo, y diácono.",
      "Nombra también el Cuerpo de Cristo, que incluye a los redimidos de toda edad y pueblo.",
    ],
    clear: [
      "Fe y Mensaje Bautistas habla del «señorío de Cristo».",
      "Su artículo VI describe una congregación local autónoma de creyentes bautizados, con comunión de pacto, las ordenanzas y las leyes de Cristo, misión del Evangelio y procesos democráticos bajo Cristo; cada miembro responde ante Cristo, y sus dos oficios bíblicos son pastor, anciano u obispo, y diácono.",
      "También nombra el Cuerpo de Cristo, que incluye a los redimidos de toda edad y pueblo.",
    ],
    very: [
      "Fe y Mensaje Bautistas habla del «señorío de Cristo».",
      "Su artículo VI describe una congregación local autónoma de creyentes bautizados. Tiene comunión de pacto, las ordenanzas y las leyes de Cristo, y la misión del Evangelio. Tiene procesos democráticos bajo Cristo. Cada miembro responde ante Cristo. Los dos oficios bíblicos son pastor, anciano u obispo, y diácono.",
      "También nombra el Cuerpo de Cristo. Incluye a los redimidos de toda edad y pueblo.",
    ],
  },
  "sola-scriptura/catholic/definition": {
    lang: "es",
    original: [
      "¿Solo la Escritura?",
      "«[…] la Iglesia no deriva solamente de la Sagrada Escritura su certeza acerca de todas las verdades reveladas.»",
    ],
    clear: [
      "¿Solo la Escritura?",
      "La Iglesia no deriva solamente de la Sagrada Escritura su certeza acerca de todas las verdades reveladas.",
    ],
    very: [
      "¿Solo la Escritura?",
      "La Iglesia no saca solo de la Sagrada Escritura su seguridad sobre todas las verdades reveladas.",
    ],
  },
  "sola-scriptura/catholic/Definición": {
    lang: "es",
    original: [
      "Para la Iglesia católica, la Sagrada Tradición y la Sagrada Escritura «constituyen un solo depósito sagrado de la palabra de Dios, confiado a la Iglesia» (Dei Verbum 10), y «se han de recibir y venerar ambas con un mismo espíritu de piedad» (Dei Verbum 9).",
      "Considera la Escritura, «juntamente con la Sagrada Tradición, como la regla suprema de su fe» (Dei Verbum 21), y enseña que el Magisterio «no está sobre la palabra de Dios, sino que la sirve» (Dei Verbum 10).",
    ],
    clear: [
      "Para la Iglesia católica, la Sagrada Tradición y la Sagrada Escritura forman un solo depósito sagrado de la palabra de Dios, confiado a la Iglesia (Dei Verbum 10), y hay que recibir y venerar a las dos con el mismo espíritu de piedad (Dei Verbum 9).",
      "Considera la Escritura, junto con la Sagrada Tradición, como la regla suprema de su fe (Dei Verbum 21), y enseña que el Magisterio no está sobre la palabra de Dios, sino que la sirve (Dei Verbum 10).",
    ],
    very: [
      "Para la Iglesia católica, la Tradición y la Escritura forman juntas un solo depósito sagrado de la palabra de Dios, que se confió a la Iglesia (Dei Verbum 10). Hay que recibir y venerar a las dos con el mismo espíritu de piedad (Dei Verbum 9).",
      "Para la Iglesia, la Escritura, junto con la Tradición, es la regla suprema de su fe (Dei Verbum 21). Y el Magisterio no está por encima de la palabra de Dios: la sirve (Dei Verbum 10).",
    ],
  },
  "sola-scriptura/catholic/QE-1": {
    lang: "es",
    original: [
      "La revelación de Dios culmina en Cristo, y no hay que esperar otra revelación pública.",
      "Cristo mandó a los apóstoles predicar el Evangelio, «fuente de toda la verdad salvadora».",
      "Ellos lo transmitieron de dos maneras: de palabra, con su ejemplo y sus instituciones, y por escrito, bajo la inspiración del Espíritu Santo.",
      "Para que el Evangelio se conservara vivo, dejaron como sucesores a los obispos.",
    ],
    clear: [
      "La revelación de Dios llega a su plenitud en Cristo, y no hay que esperar otra revelación pública.",
      "Cristo mandó a los apóstoles predicar el Evangelio, que es «fuente de toda la verdad salvadora».",
      "Ellos lo transmitieron de dos maneras: de palabra, con su ejemplo y sus instituciones, y por escrito, bajo la inspiración del Espíritu Santo.",
      "Para que el Evangelio se conservara vivo, dejaron como sucesores a los obispos.",
    ],
    very: [
      "La revelación de Dios llega a su punto más alto en Cristo. No hay que esperar otra revelación pública.",
      "Cristo mandó a los apóstoles anunciar el Evangelio, «fuente de toda la verdad salvadora».",
      "Ellos lo transmitieron de dos maneras. Con palabras, con su ejemplo y con sus instituciones. Y por escrito, con la inspiración del Espíritu Santo.",
      "Para que el Evangelio siguiera vivo, dejaron como sucesores a los obispos.",
    ],
  },
  "sola-scriptura/baptist/definition": {
    lang: "es",
    original: [
      "La Confesión de New Hampshire dice de la Biblia: «la norma suprema por la que deben examinarse toda conducta humana, los credos y las opiniones».",
    ],
    clear: [
      "La Confesión de New Hampshire dice de la Biblia que es la norma suprema por la que deben examinarse toda conducta humana, los credos y las opiniones.",
    ],
    very: [
      "La Confesión de New Hampshire dice que la Biblia es la norma más alta. Con ella se deben examinar la conducta de las personas, los credos y las opiniones.",
    ],
  },
  "sola-scriptura/baptist/QE-1": {
    lang: "es",
    original: [
      "La Confesión de New Hampshire dice de la Biblia: «la norma suprema por la que deben examinarse toda conducta humana, los credos y las opiniones».",
    ],
    clear: [
      "La Confesión de New Hampshire dice de la Biblia que es la norma suprema por la que deben examinarse toda conducta humana, los credos y las opiniones.",
    ],
    very: [
      "La Confesión de New Hampshire dice que la Biblia es la norma más alta. Con ella se deben examinar la conducta de las personas, los credos y las opiniones.",
    ],
  },
  "sola-scriptura/baptist/QE-2": {
    lang: "es",
    original: [
      "Para Fe y Mensaje Bautistas, la Biblia fue escrita por personas inspiradas por Dios y es su revelación al ser humano.",
      "Dios es su autor, la salvación su fin y la verdad sin mezcla de error su contenido.",
      "La Escritura es la norma que examina la conducta, los credos y las opiniones religiosas; toda ella testimonia a Cristo, centro de la revelación divina.",
    ],
    clear: [
      "Para Fe y Mensaje Bautistas, la Biblia fue escrita por personas inspiradas por Dios y es la revelación de Dios al ser humano.",
      "Dios es su autor, la salvación es su fin y la verdad sin mezcla de error es su contenido.",
      "La Escritura es la norma con la que se examinan la conducta, los credos y las opiniones religiosas; toda ella da testimonio de Cristo, centro de la revelación divina.",
    ],
    very: [
      "Para Fe y Mensaje Bautistas, personas inspiradas por Dios escribieron la Biblia. Es la revelación de Dios al ser humano.",
      "Dios es su autor. Su fin es la salvación. Su contenido es la verdad, sin mezcla de error.",
      "La Escritura es la norma con la que se examinan la conducta, los credos y las opiniones religiosas. Toda ella da testimonio de Cristo, centro de la revelación divina.",
    ],
  },
  "ignatius-smyrnaeans/6.2": {
    lang: "en",
    original: [
      "But mark ye those who hold strange doctrine touching the grace of Jesus Christ which came to us, how that they are contrary to the mind of God.",
      "They have no care for love, none for the widow, none for the orphan, none for the afflicted, none for the prisoner, none for the hungry or thirsty.",
      "They abstain from eucharist (thanksgiving) and prayer, because they allow not that the eucharist is the flesh of our Saviour Jesus Christ, which flesh suffered for our sins, and which the Father of His goodness raised up.",
    ],
    clear: [
      "Take note of those who hold strange teaching about the grace of Jesus Christ that came to us: they are opposed to the mind of God.",
      "They have no concern for love: none for the widow, none for the orphan, none for the afflicted, none for the prisoner, none for the hungry or thirsty.",
      "They keep away from the eucharist (thanksgiving) and from prayer, because they do not admit that the eucharist is the flesh of our Saviour Jesus Christ, the flesh that suffered for our sins and that the Father in His goodness raised up.",
    ],
    very: [
      "Some teach something different about the grace that Jesus Christ brought us. This goes against what God thinks.",
      "They do not care about love. They do not look after widows, orphans, people who suffer, prisoners, or people who are hungry or thirsty.",
      "They stay away from the eucharist (thanksgiving) and from prayer. They do not accept that the eucharist is the flesh of our Saviour Jesus Christ. That flesh suffered for our sins, and the Father, in His goodness, raised it up.",
    ],
  },
};

export function getSimplifiedText(id: string): SimplifiedEntry | undefined {
  return simplifierEnabled ? texts[id] : undefined;
}
