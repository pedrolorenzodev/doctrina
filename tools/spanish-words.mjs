const WORDS = `
para con por que del las los una unos unas como cuando donde entre sobre desde hasta este esta esto estos estas todo todos toda todas cada tambien pero porque
pagina paginas boton botones lista listas fuente fuentes versiculo versiculos capitulo capitulos libro libros biblia biblias escritura escrituras
objecion objeciones objetor doctrinas tradicion tradiciones catolica catolico catolicas ortodoxa ortodoxo luterana luterano reformada reformado bautista bautistas
eucaristia bautismo papado justificacion testigo testigos padre padres linea lineas tiempo tiempos cita citas citar ventana ventanas nota notas lector lectura
glosario resumen prueba pruebas datos dato inicio buscar busqueda buscador ajustes tema temas idioma idiomas encabezado cabecera barra lateral
seccion secciones titulo titulos subtitulo texto textos enlace enlaces tarjeta tarjetas autor autores obra obras fecha fechas regla reglas contenido contenidos
palabra palabras griego hebreo traduccion traducciones traducir pasaje pasajes pantalla pantallas propuesta propuestas oscuro claro mostrar ocultar abrir cerrar
cargar guardar nuevo nueva nuevos viejo siguiente anterior primero primera primeros ultimo ultima grado grados autoridad ensena ensenanza practica respuesta respuestas
pregunta preguntas historia concilio concilios herejia herejias iglesia iglesias santo santos dios cristo comun compartido conectadas cristianos escribieron usuario usuarios
configuracion utilidades ayudante ayudantes componente componentes estilo estilos tipo tipos ruta rutas regla vista vistas boletin correo nombre nombres fila filas columna columnas
izquierda derecha arriba abajo ancho alto altura tamano fondo borde sombra animacion animaciones desplazamiento regla reglas marca marcas punto puntos
`;

export const SPANISH_WORDS = new Set(WORDS.split(/\s+/).filter(Boolean));

export function wordsOf(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

export function spanishWordsIn(name) {
  return wordsOf(name).filter((word) => SPANISH_WORDS.has(word));
}
