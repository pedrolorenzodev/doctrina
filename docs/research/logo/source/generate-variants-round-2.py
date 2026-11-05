import json, math, re
exec(open("gen.py").read().split("V = []")[0])  # reuse glyph helpers (SP, fonts, glyph, gk, r, p, line)

R1 = {v["id"]: v for v in json.load(open(SP + "/work/variants.json"))}


def fmt(v):
    return ("%.2f" % v).rstrip("0").rstrip(".")


def poly(pts, fill="F"):
    return '<path d="M' + "L".join(f"{fmt(x)} {fmt(y)}" for x, y in pts) + f'Z" fill="{{{fill}}}"/>'


def unit(dx, dy):
    l = math.hypot(dx, dy)
    return dx / l, dy / l


def inter(p, d, q, e):
    # intersection of lines p + t d and q + s e
    det = d[0] * -e[1] + d[1] * e[0]
    t = ((q[0] - p[0]) * -e[1] + (q[1] - p[1]) * e[0]) / det
    return p[0] + t * d[0], p[1] + t * d[1]


def chevron(P0, P1, P2, t1, t2, fill="F"):
    d1 = unit(P1[0] - P0[0], P1[1] - P0[1])
    d2 = unit(P2[0] - P1[0], P2[1] - P1[1])
    n1 = (-d1[1], d1[0])
    n2 = (-d2[1], d2[0])
    h1, h2 = t1 / 2, t2 / 2
    a0 = (P0[0] + n1[0] * h1, P0[1] + n1[1] * h1)
    b0 = (P0[0] - n1[0] * h1, P0[1] - n1[1] * h1)
    a2 = (P2[0] + n2[0] * h2, P2[1] + n2[1] * h2)
    b2 = (P2[0] - n2[0] * h2, P2[1] - n2[1] * h2)
    A = inter(a0, d1, a2, d2)
    B = inter(b0, d1, b2, d2)
    return poly([a0, A, a2, b2, B, b0], fill), (A, B)


def wedges(dx=0.0, mirror=False, scale=1.0, ox=0.0, oy=0.0):
    left = [(12, 7), (17.5, 7), (8.5, 16), (17.5, 25), (12, 25), (4.5, 16)]
    right = [(x + 10, y) for x, y in left]
    out = []
    for poly_ in (left, right):
        pts = []
        for x, y in poly_:
            x = x + dx
            if mirror:
                x = 32 - x
            pts.append((ox + (x - 16) * scale + 16, oy + (y - 16) * scale + 16))
        out.append(poly(pts))
    return "".join(out)


V = []


def add(id, axis, name, idea, body, why, risk, look, cont="sharp", self_tile=False, fixed=None, label=None):
    V.append(dict(id=id, axis=axis, name=name, idea=idea, body=body, why=why, risk=risk, look=look,
                  cont=cont, selfTile=self_tile, fixed=fixed, label=label))


# control
add("C0", "control", "D3 de la ronda 1",
    "La comilla « de Newsreader, sobre baldosa redonda de tinta: la que te gustó.",
    R1["D3"]["body"],
    "Es el punto de comparación. Son dos chevrones rectos de ancho constante: Newsreader no dibuja curvas en la «.",
    "A 16 px es el mismo dibujo que los íconos de «contraer», «atrás» y «rebobinar»; el cuadrado redondeado es el de las apps.",
    "Íconos de interfaz (Material, Lucide): contraer, atrás, rebobinar.", cont="ios")

# V1 pen diple on sharp ink square
tip = 26.3
P1 = (tip - 3.3, 16.2)
b1, (A1, B1) = chevron((8.5, 8.6), P1, (10.5, 26), 3.0, 5.0)
add("V1", "sign", "Diple de pluma",
    "Un solo «>» con el brazo de arriba fino y el de abajo grueso, como un trazo de pluma.",
    b1,
    "La diple es la marca que los copistas ponían al margen junto a las citas de la Escritura (Isidoro, Etimologías I.21; códices Vaticano, Sinaítico, Alejandrino). Es antecesora de las comillas angulares y anterior a cualquier tradición moderna.",
    "Se ve la mano recién desde 32 px; a 16 px es un chevrón.",
    "El botón «siguiente». En una baldosa oscura redondeada es el logo de Plex: por eso va sobre cuadrado de esquinas rectas.", cont="sharp")

# V2 diple in margin + 3 lines
add("V2", "sign", "Diple al margen",
    "Una diple pequeña en el margen izquierdo y tres líneas de texto: la Escritura citada, aparte de las palabras del comentarista.",
    line("M3.5 9.5L11.5 14L3.5 18.5", 3.2, "F", "butt", "miter") + r(14, 8, 14, 3) + r(14, 14.5, 14, 3) + r(14, 21, 10, 3),
    "Dibuja la frase de Isidoro: la diple se pone junto a la cita, en el margen. Es la imagen más específica de la investigación.",
    "Cuatro partes: aguanta en la prueba, pero es la más cargada.",
    "El ícono de «bloque de cita» de los editores de texto (Lucide text-quote) y el de «lista».", cont="sharp")

# V3 wedges, same container as D3
add("V3", "sign", "Cuña",
    "La « de D3 redibujada como dos cuñas, más gruesas en la boca y algo más finas en la punta, y más chica: puntuación y no ícono.",
    wedges(0.5, scale=0.88),
    "El problema de D3 es el dibujo: ancho constante. Con cuñas conserva el signo que elegiste, con otro peso. Mismo contenedor que D3, para aislar solo el signo. Ojo: a simple vista cambia poco; es la que menos se despega de «rebobinar».",
    "A 1× sigue pareciéndose a «atrás»; con 2× las cuñas se notan.",
    "«Atrás» y «contraer» a 16 px (inevitable para cualquier «).", cont="ios")

# V4 Gentium curved «
gd, _ = glyph(GENT_B, "«", 16, 16, 16, w=22)
add("V4", "sign", "Comilla de Gentium",
    "La « de Gentium Book Plus, la fuente griega del sitio, con brazos curvos y acampanados.",
    p(gd),
    "Gentium usa curvas, a diferencia de Newsreader (06 §4). Parece trazada con pluma.",
    "Las puntas pueden cerrarse a 16 px.",
    "A 32 px se lee como dos hojas o dos comas.", cont="sharp")

# V5 diple periestigmene
b5, _ = chevron((8, 10), (21, 16), (8, 22), 3.6, 3.6)
add("V5", "sign", "Diple con dos puntos",
    "Un «>» con un punto arriba y otro abajo, la diple periestigmene (U+2E16).",
    b5 + '<circle cx="22.5" cy="6.8" r="2.3" fill="{F}"/><circle cx="22.5" cy="25.2" r="2.3" fill="{F}"/>',
    "Es la variante que describe Isidoro (I.21.15, «cum geminis punctis»). Ninguna de las fuentes del sitio la trae: hay que dibujarla.",
    "Tres partes. Su sentido histórico es «la edición difiere», no «cita»: habría que decirlo si se elige.",
    "El emoticón «>:» si los puntos van a la derecha; por eso van arriba y abajo.", cont="sharp")

# V6 « on a rule
add("V6", "sign", "Comilla sobre la línea",
    "Las cuñas sentadas sobre una línea de ancho completo: puntuación dentro de un renglón, no una flecha flotando.",
    wedges(0, scale=0.78, ox=0, oy=-3.4) + r(5, 23.5, 22, 3),
    "La RAE pide las comillas angulares centradas en el renglón (Diccionario panhispánico de dudas).",
    "Dos partes, bajo riesgo a 32 px.",
    "Con la línea vertical sería «primera página» (|«); horizontal no encontré parecido.", cont="sharp")

# V7 cut
cut_l = [(x - 4.5, y) for x, y in [(12, 7), (17.5, 7), (8.5, 16), (17.5, 25), (12, 25), (4.5, 16)]]
cut_r = [(x + 5.5, y) for x, y in [(12, 7), (17.5, 7), (8.5, 16), (17.5, 25), (12, 25), (4.5, 16)]]
mask = '<defs><mask id="m7"><rect width="32" height="32" fill="#fff"/>' + \
    "".join('<path d="M' + "L".join(f"{fmt(x)} {fmt(y)}" for x, y in pl) + 'Z" fill="#000"/>' for pl in (cut_l, cut_r)) + \
    '</mask></defs><rect width="32" height="32" fill="{T}" mask="url(#m7)"/>'
add("V7", "container", "Comilla cortada",
    "Las cuñas recortadas del bloque, desplazadas a la izquierda para que la punta toque el borde: el cuadrado es parte del signo.",
    mask,
    "Un bloque de imprenta con la cita muescada. El contenedor deja de ser un envase.",
    "Una punta cortada por el borde puede leerse como un desperfecto. La forma suelta del sitio también es un bloque.",
    "No encontré parecido.", cont="none", self_tile=True)

# V8 notch tile
add("V8", "container", "Pestaña",
    "El cuadrado mismo hace el signo: un mordisco en forma de « en el borde izquierdo y una línea de texto.",
    '<path d="M0 0H32V32H0V23L9 16L0 9Z" fill="{T}"/>' + r(14, 14.5, 12, 3),
    "Solo la silueta del cuadrado; sin glifo aparte.",
    "Se parece a una etiqueta o a una flecha de «paso».",
    "Etiqueta, cinta, flecha de proceso. La incluyo una vez; probablemente se descarte.", cont="none", self_tile=True)

# V9 asymmetric guillemet
b9a = line("M15 9L6 15.5L13.5 25", 3.6, "F", "butt", "miter")
b9b = line("M25 9L16 15.5L23.5 25", 3.6, "F", "butt", "miter")
add("V9", "sign", "Comilla asimétrica",
    "Los dos chevrones de la « con el brazo de arriba corto y el de abajo largo: la asimetría de la diple aplicada a la comilla.",
    b9a + b9b,
    "Lleva a la comilla un rasgo del manuscrito sin copiarlo entero.",
    "A 2× se ve «a mano» o «torcida», según el gusto.",
    "«Atrás», con un defecto.", cont="sharp")

# V10 faithful diple control
add("V10", "control", "Diple del Vaticano, fiel",
    "La diple como se ve en el manuscrito: trazo corto y poco inclinado arriba, trazo largo y pesado abajo, con un gancho de entrada.",
    line("M8 10L23 15.5", 3, "F", "butt") + line("M23 15.5L14 26", 4.6, "F", "butt", "miter") + line("M5.8 12.6Q5.8 9.6 8.8 10.4", 2.6, "F", "round"),
    "Está para mostrar por qué no se usa la forma fiel.",
    "A 16 y a 32 px se lee como el número «7».",
    "El número 7 o un tilde rotado.", cont="sharp")

# V11 » pointing at the name
add("V11", "sign", "» hacia el texto",
    "La cuña invertida: apunta a la derecha, hacia el nombre, como la diple apuntaba a la línea citada.",
    wedges(-0.5, mirror=True, scale=0.88),
    "En los manuscritos la diple señala el texto. En alemán » abre la cita.",
    "Bajo a 16 px.",
    "«Siguiente», «expandir» o el separador de migas de pan (›).", cont="ios")

# V12 V3 sharp, V13 circle
add("V12", "container", "Bloque de imprenta",
    "Las cuñas sobre un cuadrado de tinta de esquinas rectas.",
    wedges(0.5, scale=0.88),
    "Los cuadrados rectos se leen como «imprenta»: Production Type, Flipboard, Le Monde (08 §3). Evita el cuadrado de app.",
    "Depende del signo; con cuñas, bajo.",
    "Según el signo.", cont="sharp")
add("V13", "container", "Sello",
    "Las cuñas sobre un círculo lleno.",
    wedges(0, scale=0.86),
    "Sobrevive al recorte redondo de Google y se lee como sello (Vercel, Seuil, Brill).",
    "Menos espacio: el signo va dentro de r 11.",
    "El botón «play/siguiente» en círculo si fuera un solo «>»; con las cuñas no.", cont="circle")

# V14 frame
add("V14", "container", "Papel con filete",
    "Un cuadrado con un marco de 2 unidades y las cuñas dentro.",
    '<rect width="32" height="32" fill="{T}"/><rect x="1" y="1" width="30" height="30" fill="none" stroke="{F}" stroke-width="2"/>' + wedges(0.4, scale=0.8),
    "Con la baldosa de papel, el marco mantiene la silueta cuadrada sobre una pestaña clara (el papel casi no se distingue: 1,04 a 1).",
    "El marco es de 1 px a 1×; puede titilar.",
    "Un ícono con marco genérico.", cont="none", self_tile=True)

# V15 rubric red diple on paper
add("V15", "container", "Rúbrica",
    "La diple de pluma en rojo de copista sobre papel.",
    chevron((8.5, 8.6), P1, (10.5, 26), 3.0, 5.0, "F")[0],
    "Los copistas medievales preferían el rojo para las citas de la Escritura (Finnegan, 06 §2.3).",
    "Fuera de la paleta; no debe chocar con el rojo del diálogo de borrar.",
    "El rojo de YouVersion y el de «error».", cont="sharp", fixed={"T": "#e8e5de", "F": "#a8321f", "H": "#a8321f"})

order = ["C0", "V1", "V2", "V3", "V4", "V5", "V6", "V9", "V10", "V11", "V12", "V13", "V7", "V8", "V14", "V15"]
by = {v["id"]: v for v in V}
V = [by[i] for i in order]
json.dump(V, open(SP + "/work/variants2.json", "w"), ensure_ascii=False, indent=1)
print(len(V))
