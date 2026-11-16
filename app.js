"use strict";

/* ================================================================
   Guía de estudio · Sociología — app.js
   ETAPA 3: tema claro/oscuro, acordeón, flashcards y navegación
   ================================================================ */

/* ---------- 1. Datos: 53 flashcards hardcodeadas ---------- */
const AUTORES = {
  marx: "Marx",
  durkheim: "Durkheim",
  weber: "Weber",
  parsons: "Parsons",
  bourdieu: "Bourdieu",
  beck: "Beck",
  aguirre: "Aguirre y Batthyány",
  castells: "Castells",
  sociologia: "Sociología"
};

const FLASHCARDS = [
  /* --- El concepto de sociología (5) --- */
  { a: "sociologia", f: "¿Qué es la sociología?", r: "La ciencia que estudia la vida social: las relaciones entre las personas, los grupos, las instituciones y las estructuras que organizan la convivencia. Explica lo social por causas sociales." },
  { a: "sociologia", f: "¿Quién acuñó el término «sociología» y cuándo?", r: "Auguste Comte, en 1838. Antes la llamaba «física social»: buscaba una ciencia de la sociedad con los métodos de las ciencias naturales." },
  { a: "sociologia", f: "¿Qué es el positivismo?", r: "La corriente fundada por Comte: aplicar el método científico (observar, comparar, explicar con leyes) al estudio de la sociedad, en lugar de la especulación filosófica." },
  { a: "sociologia", f: "¿Quiénes son los tres clásicos fundadores y qué pregunta fundó cada uno?", r: "Marx (el conflicto y el capitalismo), Durkheim (los hechos sociales y la cohesión) y Weber (el sentido de la acción social y la racionalización)." },
  { a: "sociologia", f: "¿Qué es la imaginación sociológica (C. Wright Mills)?", r: "La capacidad de conectar la biografía personal con la historia colectiva: ver que los problemas personales (troubles) reflejan cuestiones estructurales (issues)." },

  /* --- Marx (5) --- */
  { a: "marx", f: "¿Qué es el valor de uso?", r: "La utilidad que algo tiene para satisfacer necesidades en el día a día: cuánto vale un objeto para quien lo usa." },
  { a: "marx", f: "¿Qué es el fetichismo de la mercancía?", r: "La ilusión del sistema capitalista por la cual las relaciones sociales entre personas aparecen como relaciones entre cosas: entre el dinero y las mercancías." },
  { a: "marx", f: "¿Qué papel cumple el dinero como intermediario?", r: "Es la herramienta que conecta a todos y a todo: transforma el trabajo humano en un número con valor económico, que puede comprarse y venderse." },
  { a: "marx", f: "Idea central de Marx en «Contribución a la crítica de la economía política»", r: "Las mercancías y el dinero no son solo objetos materiales: expresan las relaciones sociales y el modo capitalista de organizar la sociedad." },
  { a: "marx", f: "Ejemplo: el dinero como intermediario en la economía de creadores de contenido", r: "El trabajo de un youtuber no se intercambia directamente por bienes: se traduce en visitas y suscriptores, y de ahí en dinero y patrocinios. El dinero es el puente que convierte tiempo y esfuerzo en algo vendible." },

  /* --- Durkheim (6) --- */
  { a: "durkheim", f: "¿Qué es un hecho social según Durkheim?", r: "Maneras de actuar, pensar y sentir exteriores al individuo y dotadas de poder coercitivo: se le imponen. Ejemplos: la lengua, la moda, la moral, el derecho, la moneda." },
  { a: "durkheim", f: "¿Qué significa que los hechos sociales sean «exteriores y coercitivos»?", r: "Exteriores: existen antes de que nazcamos, independientemente de cada individuo. Coercitivos: se imponen aunque no los elijamos; si los ignoramos, quedamos excluidos o sancionados." },
  { a: "durkheim", f: "¿Qué es la conciencia colectiva?", r: "El conjunto de creencias y sentimientos comunes a los miembros de una sociedad. Es más fuerte en las sociedades con solidaridad mecánica y se debilita con la división del trabajo." },
  { a: "durkheim", f: "Solidaridad mecánica vs. solidaridad orgánica", r: "Mecánica: la cohesión nace de la semejanza (todos hacen lo mismo, sociedades tradicionales). Orgánica: nace de la división del trabajo y la interdependencia (todos dependen de todos, sociedades modernas)." },
  { a: "durkheim", f: "¿Qué es la anomia?", r: "La falta o el debilitamiento de las normas: cuando la sociedad cambia muy rápido, las reglas pierden fuerza y los deseos individuales quedan sin límites ni dirección (Durkheim la vincula al suicidio anómico)." },
  { a: "durkheim", f: "¿Por qué «El suicidio» es el ejemplo clave del método de Durkheim?", r: "Demostró que hasta el acto más individual e íntimo tiene causas sociales: las tasas de suicidio varían según la integración y la regulación de los grupos, no según la psicología de cada persona." },

  /* --- Weber (7) --- */
  { a: "weber", f: "¿Qué es la acción social según Weber?", r: "Toda conducta que tiene un sentido subjetivo para quien la realiza y está orientada por la acción de otros. Es la unidad básica de la sociología comprensiva." },
  { a: "weber", f: "¿Cuáles son los cuatro tipos de acción social?", r: "1) Racional con arreglo a fines; 2) racional con arreglo a valores; 3) afectiva (emocional); 4) tradicional (por costumbre)." },
  { a: "weber", f: "Diferencia entre acción racional con arreglo a fines y con arreglo a valores", r: "Con arreglo a fines: se eligen medios eficientes para un fin práctico (estudiar para aprobar). Con arreglo a valores: se actúa por convicción, aunque no sea «eficiente» (no mentir aunque convenga)." },
  { a: "weber", f: "¿Qué es la racionalización?", r: "El proceso histórico por el cual la vida social se organiza cada vez más según el cálculo, la eficiencia y las reglas formales, desplazando lo religioso y lo emocional." },
  { a: "weber", f: "¿Cuáles son los tres tipos de dominación legítima?", r: "Legal-racional (normas impersonales, típica de la burocracia), tradicional (costumbres heredadas) y carismática (cualidades excepcionales del líder)." },
  { a: "weber", f: "¿Qué es el desencantamiento del mundo?", r: "La pérdida de las explicaciones mágicas y religiosas de la vida, desplazadas por la ciencia, la técnica y el cálculo racional." },
  { a: "weber", f: "¿Qué es un tipo ideal?", r: "Una herramienta conceptual: una imagen «pura» y exagerada de un fenómeno social que el sociólogo construye para comparar la realidad." },

  /* --- Parsons (7) --- */
  { a: "parsons", f: "¿Cuál es la pregunta central de Parsons?", r: "¿Cómo es posible el orden social? Su respuesta: gracias a valores y normas compartidos que se institucionalizan en roles y se internalizan en las personas." },
  { a: "parsons", f: "¿Qué es el sistema social?", r: "La red de interacciones entre actores, orientadas por normas y valores compartidos, institucionalizados en roles y estatus." },
  { a: "parsons", f: "¿Qué significan las siglas AGIL?", r: "Los cuatro imperativos funcionales de todo sistema: Adaptación, consecución de Metas (Goal attainment), Integración y Latencia (mantenimiento de los patrones)." },
  { a: "parsons", f: "¿Qué es la institucionalización?", r: "El proceso por el cual las normas y valores de la sociedad se fijan en roles y expectativas socialmente definidas." },
  { a: "parsons", f: "¿Qué es la internalización de los valores?", r: "La incorporación de los valores sociales a la personalidad individual a través de la socialización (familia, escuela): garantiza la conformidad y la estabilidad del sistema." },
  { a: "parsons", f: "¿Qué diferencia hay entre estatus y rol?", r: "Estatus: la posición que se ocupa en el sistema social. Rol: la conducta que se espera de quien ocupa esa posición." },
  { a: "parsons", f: "¿Cuál es la crítica más común al estructural-funcionalismo de Parsons?", r: "Que sobrestima el consenso y el equilibrio, y no explica bien el conflicto y el cambio social (revoluciones, movimientos sociales)." },

  /* --- Bourdieu (6) --- */
  { a: "bourdieu", f: "¿Qué es el espacio social?", r: "El conjunto de posiciones que ocupan las personas según los capitales que poseen (económico, cultural, social, simbólico). Posiciones cercanas implican condiciones de vida y formas de pensar parecidas." },
  { a: "bourdieu", f: "¿Qué diferencia hay entre capital económico y capital cultural?", r: "Económico: recursos y bienes materiales. Cultural: educación, conocimientos y formación. Ambos definen la posición en el espacio social." },
  { a: "bourdieu", f: "¿Qué es el poder simbólico?", r: "La capacidad de imponer una manera de ver y clasificar la realidad; lograr que la definición de un grupo social sea aceptada públicamente por los demás." },
  { a: "bourdieu", f: "Idea central de Bourdieu en «Poder, derecho y clases sociales»", r: "Las clases no existen como grupos ya formados: se construyen a partir de diferencias económicas, culturales y sociales, y necesitan reconocimiento y representación para existir como grupo real." },
  { a: "bourdieu", f: "¿Cuándo existe una clase «para sí»?", r: "Cuando sus miembros se reconocen como parte de ella y existe una representación (portavoz, organización) que pueda hablar en su nombre." },
  { a: "bourdieu", f: "¿Qué son el capital social y el capital simbólico?", r: "Social: la red de relaciones y contactos de una persona. Simbólico: el prestigio y el reconocimiento. Completan al económico y al cultural en la posición social." },

  /* --- Beck (6) --- */
  { a: "beck", f: "¿Qué es la sociedad del riesgo?", r: "La etapa en la que el problema principal ya no es la escasez o la pobreza material, sino la gestión de los peligros invisibles y globales creados por la propia ciencia y la tecnología." },
  { a: "beck", f: "¿Qué es el efecto bumerang?", r: "Los riesgos y daños ambientales producidos por la industria terminan afectando, tarde o temprano, a quienes los producen o se benefician de ellos, derribando las diferencias de clase." },
  { a: "beck", f: "¿Qué es la comunidad del miedo?", r: "La unión colectiva entre personas de distintos sectores sociales por el temor compartido ante amenazas globales; reemplaza la solidaridad basada en la clase o la miseria." },
  { a: "beck", f: "Modernidad simple vs. modernidad reflexiva", r: "Simple: lógica del reparto de la riqueza, conflictos por la escasez, clases sociales. Reflexiva: lógica del reparto de los riesgos fabricados por el propio desarrollo técnico." },
  { a: "beck", f: "¿Por qué Beck habla de «riesgos fabricados»?", r: "Porque los peligros actuales (contaminación, cambio climático) no vienen de la naturaleza externa, sino que son producidos por las decisiones del propio sistema económico-técnico." },
  { a: "beck", f: "Ejemplo actual del efecto bumerang", r: "Las olas de calor y las sequías: la contaminación de industrias y ciudades altera el clima y termina recortando el acceso al agua de ricos y pobres por igual." },

  /* --- Aguirre y Batthyány (5) --- */
  { a: "aguirre", f: "¿Qué es la división sexual del trabajo?", r: "La distribución social de las tareas entre mujeres y varones: a ellos, el trabajo productivo y remunerado; a ellas, además del empleo, el trabajo doméstico y de cuidado. Resultado: doble jornada para las mujeres." },
  { a: "aguirre", f: "¿Qué es el trabajo no remunerado?", r: "El trabajo doméstico y de cuidados que sostiene la vida cotidiana y hace posible el funcionamiento de la economía, aunque no se pague ni siempre se contabilice como «trabajo»." },
  { a: "aguirre", f: "¿Qué son las desigualdades de género?", r: "Diferencias de oportunidades, cargas y poder entre varones y mujeres que provienen de la organización social —no de la biología— y se reproducen en la familia y en el trabajo." },
  { a: "aguirre", f: "Idea central de «Género, familias y trabajo» de Aguirre y Batthyány", r: "Las mujeres se incorporaron masivamente al empleo (ruptura), pero el trabajo doméstico y de cuidado siguió recayendo en ellas (continuidad): la desigualdad de género se reproduce." },
  { a: "aguirre", f: "Ejemplo actual de desigualdad de género en el cuidado", r: "Cuando los hijos se enferman, suele ser la madre quien falta al trabajo o reorganiza sus horarios: las responsabilidades familiares afectan sus oportunidades laborales y económicas." },

  /* --- Castells (6) --- */
  { a: "castells", f: "¿Qué es el informacionalismo?", r: "El nuevo modelo de desarrollo en el que la productividad y el poder dependen de la capacidad de generar conocimiento y procesar información mediante la tecnología." },
  { a: "castells", f: "¿Qué es la globalización según Castells?", r: "El proceso que conecta todo el planeta en tiempo real a través de redes de capital, mercados financieros, tecnología y comercio." },
  { a: "castells", f: "¿Qué es el Estado-red?", r: "La transformación del Estado tradicional ante la globalización: deja de ser soberano y centralizado para operar en red junto con otros actores públicos y privados." },
  { a: "castells", f: "Idea central de «Panorama de la era de la información» de Castells", r: "El capitalismo informacional global excluye a gran parte de la población y debilita a los Estados nacionales; sostenerlo exige transformar el modelo productivo, reformar las instituciones y reconstruir la participación con nuevos actores sociales." },
  { a: "castells", f: "¿Qué necesita América Latina según Castells para no quedar excluida?", r: "Fortalecer la educación y la tecnología, reformar sus instituciones e incorporar a nuevos actores sociales, sin perder soberanía ni desatender a los sectores vulnerables." },
  { a: "castells", f: "Ejemplo actual del impacto de la globalización financiera", r: "La volatilidad de los mercados globales (inflación, crisis cambiarias) sacude la economía local de la noche a la mañana y golpea especialmente al empleo informal." }
];

/* ---------- 2. Almacenamiento seguro (file:// incluido) ---------- */
function leer(clave, porDefecto) {
  try {
    const v = localStorage.getItem(clave);
    return v === null ? porDefecto : JSON.parse(v);
  } catch { return porDefecto; }
}
function guardar(clave, valor) {
  try { localStorage.setItem(clave, JSON.stringify(valor)); } catch { /* sin almacenamiento */ }
}

/* ---------- 3. Tema claro / oscuro ---------- */
const btnTema = document.getElementById("btn-tema");
function aplicarTema(tema) {
  document.documentElement.dataset.tema = tema;
  btnTema.textContent = tema === "oscuro" ? "☀️" : "🌙";
}
const prefiereOscuro = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
aplicarTema(leer("socio-tema", null) || (prefiereOscuro ? "oscuro" : "claro"));
btnTema.addEventListener("click", () => {
  const nuevo = document.documentElement.dataset.tema === "oscuro" ? "claro" : "oscuro";
  aplicarTema(nuevo);
  guardar("socio-tema", nuevo);
});

/* ---------- 4. Acordeón de fichas ---------- */
const fichas = Array.from(document.querySelectorAll(".ficha"));
fichas.forEach((ficha) => {
  const cabecera = ficha.querySelector(".ficha-cabecera");
  cabecera.addEventListener("click", () => {
    const abierta = ficha.classList.toggle("abierta");
    cabecera.setAttribute("aria-expanded", abierta ? "true" : "false");
    actualizarBotonTodas();
  });
});

const btnTodas = document.getElementById("btn-todas");
function actualizarBotonTodas() {
  const hayCerradas = fichas.some((f) => !f.classList.contains("abierta"));
  btnTodas.textContent = hayCerradas ? "Abrir todas" : "Cerrar todas";
}
btnTodas.addEventListener("click", () => {
  const hayCerradas = fichas.some((f) => !f.classList.contains("abierta"));
  fichas.forEach((f) => {
    f.classList.toggle("abierta", hayCerradas);
    f.querySelector(".ficha-cabecera").setAttribute("aria-expanded", hayCerradas ? "true" : "false");
  });
  actualizarBotonTodas();
});

/* ---------- 5. Motor de flashcards ---------- */
const els = {
  card: document.getElementById("flash-card"),
  etiqueta: document.getElementById("flash-etiqueta"),
  etiquetaAtras: document.getElementById("flash-etiqueta-atras"),
  pregunta: document.getElementById("flash-pregunta"),
  respuesta: document.getElementById("flash-respuesta"),
  contador: document.getElementById("flash-contador"),
  btnPrev: document.getElementById("btn-prev"),
  btnNext: document.getElementById("btn-next"),
  btnVoltear: document.getElementById("btn-voltear"),
  btnSabida: document.getElementById("btn-sabida"),
  btnBarajar: document.getElementById("btn-barajar"),
  btnReiniciar: document.getElementById("btn-reiniciar"),
  barra: document.getElementById("barra-relleno"),
  progresoTexto: document.getElementById("progreso-texto")
};

const estado = {
  filtro: "todos",
  mazo: [],
  pos: 0,
  sabidas: new Set(leer("socio-sabidas", []))
};

function construirMazo() {
  estado.mazo = FLASHCARDS
    .map((c, i) => ({ ...c, id: i }))
    .filter((c) => estado.filtro === "todos" || c.a === estado.filtro);
  estado.pos = 0;
}

function pintarTarjeta() {
  const c = estado.mazo[estado.pos];
  if (!c) return;
  const dominada = estado.sabidas.has(c.id);

  els.card.dataset.acento = c.a;
  els.card.classList.remove("volteada");
  els.card.classList.toggle("sabida", dominada);
  els.etiqueta.textContent = AUTORES[c.a];
  els.etiquetaAtras.textContent = AUTORES[c.a];
  els.pregunta.textContent = c.f;
  els.respuesta.textContent = c.r;
  els.contador.textContent = `${estado.pos + 1} / ${estado.mazo.length}`;
  els.btnSabida.textContent = dominada ? "↺ Desmarcar" : "✓ La sé";
  actualizarProgreso();
}

function actualizarProgreso() {
  const total = FLASHCARDS.length;
  const hechas = estado.sabidas.size;
  els.barra.style.width = total ? `${((hechas / total) * 100).toFixed(1)}%` : "0";
  els.progresoTexto.textContent = `${hechas} de ${total} dominadas`;
}

function mover(delta) {
  if (!estado.mazo.length) return;
  estado.pos = (estado.pos + delta + estado.mazo.length) % estado.mazo.length;
  pintarTarjeta();
}

function voltear() { els.card.classList.toggle("volteada"); }

function marcarSabida() {
  const c = estado.mazo[estado.pos];
  if (estado.sabidas.has(c.id)) {
    estado.sabidas.delete(c.id);
    guardar("socio-sabidas", [...estado.sabidas]);
    pintarTarjeta();
  } else {
    estado.sabidas.add(c.id);
    guardar("socio-sabidas", [...estado.sabidas]);
    mover(1);
  }
}

function barajar() {
  for (let i = estado.mazo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [estado.mazo[i], estado.mazo[j]] = [estado.mazo[j], estado.mazo[i]];
  }
  estado.pos = 0;
  pintarTarjeta();
}

/* Filtros por autor */
document.querySelectorAll(".chip[data-filtro]").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip[data-filtro]").forEach((c) => c.classList.remove("activa"));
    chip.classList.add("activa");
    estado.filtro = chip.dataset.filtro;
    construirMazo();
    pintarTarjeta();
  });
});

/* Eventos de la interfaz */
els.card.addEventListener("click", voltear);
els.card.addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); voltear(); }
});
els.btnVoltear.addEventListener("click", voltear);
els.btnPrev.addEventListener("click", () => mover(-1));
els.btnNext.addEventListener("click", () => mover(1));
els.btnSabida.addEventListener("click", marcarSabida);
els.btnBarajar.addEventListener("click", barajar);
els.btnReiniciar.addEventListener("click", () => {
  estado.sabidas.clear();
  guardar("socio-sabidas", []);
  pintarTarjeta();
});

/* Atajos de teclado */
document.addEventListener("keydown", (e) => {
  if (e.target.closest("button, a, input, textarea, select")) return;
  if (e.key === "ArrowRight") { mover(1); }
  else if (e.key === "ArrowLeft") { mover(-1); }
  else if (e.key === " " || e.code === "Space") { e.preventDefault(); voltear(); }
});

/* Inicio */
construirMazo();
pintarTarjeta();

/* ---------- 6. Navegación activa (scrollspy) ---------- */
const enlaces = Array.from(document.querySelectorAll(".nav a[data-seccion]"));
const secciones = ["inicio", "sociologia", "guia", "fichas", "preguntas", "flashcards"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if ("IntersectionObserver" in window && secciones.length) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (!en.isIntersecting) return;
      enlaces.forEach((a) => a.classList.toggle("activa", a.dataset.seccion === en.target.id));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  secciones.forEach((s) => observador.observe(s));
}
