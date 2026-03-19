/* ─── SERVICES ─── */
export interface Service {
  slug: string;
  title: string;
  desc: string;
  color: string;
  longDesc: string;
  forWhom: string;
  includes: string[];
  process: string[];
  faq: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "pediatria-desarrollo",
    title: "Pediatr\u00eda del desarrollo y comportamiento",
    desc: "Evaluaci\u00f3n y seguimiento del desarrollo infantil.",
    color: "yellow",
    longDesc:
      "Cuando algo en el desarrollo de tu hijo te genera dudas, el primer paso es una evaluaci\u00f3n con alguien que realmente entienda de neurodesarrollo. Nuestros pediatras del desarrollo no solo revisan hitos: observan c\u00f3mo se comunica, c\u00f3mo juega, c\u00f3mo interact\u00faa. A partir de ah\u00ed, dise\u00f1an un plan que conecta todas las \u00e1reas que tu hijo necesita, coordinando con el resto del equipo de \u00d3rbita para que nada quede suelto.",
    forWhom: "Familias que notan algo diferente en el desarrollo de su hijo y buscan una evaluaci\u00f3n completa. Tambi\u00e9n para quienes ya tienen un diagn\u00f3stico y necesitan un plan de seguimiento estructurado.",
    includes: [
      "Evaluaci\u00f3n integral del desarrollo (hitos motores, lenguaje, sociales, cognitivos)",
      "Diagn\u00f3stico de condiciones como TEA, TDAH, retrasos globales del desarrollo",
      "Plan de intervenci\u00f3n personalizado coordinado con terapeutas y especialistas",
      "Seguimiento peri\u00f3dico para ajustar objetivos conforme tu hijo avanza",
      "Orientaci\u00f3n a la familia sobre el proceso y los siguientes pasos",
    ],
    process: [
      "Primera consulta: historia cl\u00ednica completa y observaci\u00f3n del desarrollo",
      "Evaluaci\u00f3n estandarizada con instrumentos validados internacionalmente",
      "Sesi\u00f3n de devoluci\u00f3n con la familia: explicaci\u00f3n clara del diagn\u00f3stico y plan",
      "Coordinaci\u00f3n interna con terapeutas seg\u00fan las necesidades identificadas",
      "Consultas de seguimiento para medir progreso y ajustar el plan",
    ],
    faq: [
      { q: "\u00bfA qu\u00e9 edad debo llevar a mi hijo a una evaluaci\u00f3n del desarrollo?", a: "No hay una edad m\u00ednima. Si algo te genera inquietud, ese es el mejor momento para consultar. La detecci\u00f3n temprana marca la diferencia en los resultados." },
      { q: "\u00bfCu\u00e1l es la diferencia entre un pediatra general y un pediatra del desarrollo?", a: "Un pediatra del desarrollo tiene formaci\u00f3n especializada en c\u00f3mo los ni\u00f1os adquieren habilidades de comunicaci\u00f3n, motoras, sociales y cognitivas. Eval\u00faa en profundidad lo que un chequeo general no alcanza a detectar." },
      { q: "\u00bfCu\u00e1nto dura la evaluaci\u00f3n?", a: "La primera consulta dura entre 60 y 90 minutos. Queremos conocer a tu hijo con calma, no con prisa." },
    ],
  },
  {
    slug: "neurologia-pediatrica",
    title: "Neurolog\u00eda pedi\u00e1trica",
    desc: "Atenci\u00f3n de trastornos neurol\u00f3gicos infantiles.",
    color: "sky",
    longDesc:
      "El cerebro de un ni\u00f1o est\u00e1 en constante desarrollo, y cuando aparecen se\u00f1ales como convulsiones, dolores de cabeza frecuentes o movimientos involuntarios, es momento de buscar a un especialista. En \u00d3rbita, la neurolog\u00eda pedi\u00e1trica trabaja de la mano con el resto del equipo para entender qu\u00e9 est\u00e1 pasando y trazar un camino claro.",
    forWhom: "Ni\u00f1os y adolescentes con s\u00edntomas neurol\u00f3gicos como convulsiones, cefaleas, tics, trastornos del movimiento, o que necesitan seguimiento por condiciones como epilepsia.",
    includes: [
      "Evaluaci\u00f3n neurol\u00f3gica cl\u00ednica completa",
      "Interpretaci\u00f3n de estudios como electroencefalograma y neuroimagen",
      "Diagn\u00f3stico y manejo de epilepsia, cefaleas, tics y trastornos del movimiento",
      "Coordinaci\u00f3n con pediatras del desarrollo y terapeutas del equipo",
      "Seguimiento continuo y ajuste de tratamiento",
    ],
    process: [
      "Consulta inicial: historia cl\u00ednica detallada y exploraci\u00f3n neurol\u00f3gica",
      "Solicitud de estudios complementarios si son necesarios",
      "Revisi\u00f3n de resultados y explicaci\u00f3n accesible para la familia",
      "Plan de tratamiento integrado con el equipo transdisciplinario",
      "Seguimiento peri\u00f3dico seg\u00fan la condici\u00f3n",
    ],
    faq: [
      { q: "\u00bfCu\u00e1ndo debo llevar a mi hijo con un neur\u00f3logo?", a: "Si notas convulsiones, movimientos repetitivos que no puede controlar, dolores de cabeza frecuentes, o si ya tiene un diagn\u00f3stico que involucra el sistema nervioso." },
      { q: "\u00bfLa consulta de neurolog\u00eda es solo para condiciones graves?", a: "No. Muchas consultas son para aclarar dudas y descartar condiciones. Es mejor consultar a tiempo que esperar." },
    ],
  },
  {
    slug: "psicopedagogia",
    title: "Psicopedagog\u00eda",
    desc: "Apoyo al aprendizaje y estrategias escolares.",
    color: "lime",
    longDesc:
      "Cuando tu hijo batalla en la escuela, la respuesta no siempre est\u00e1 en estudiar m\u00e1s. A veces hay una dificultad espec\u00edfica de aprendizaje que nadie ha identificado. Nuestro equipo de psicopedagog\u00eda eval\u00faa c\u00f3mo aprende tu hijo, detecta qu\u00e9 le est\u00e1 costando y por qu\u00e9, y dise\u00f1a estrategias que funcionan tanto en casa como en el sal\u00f3n de clases.",
    forWhom: "Ni\u00f1os y adolescentes con dificultades escolares: bajo rendimiento, problemas de atenci\u00f3n en clase, rechazo a la escuela, o sospecha de dislexia, disgraf\u00eda o discalculia.",
    includes: [
      "Evaluaci\u00f3n psicopedag\u00f3gica: c\u00f3mo aprende, qu\u00e9 le cuesta y d\u00f3nde est\u00e1n sus fortalezas",
      "Detecci\u00f3n de dificultades espec\u00edficas del aprendizaje (dislexia, disgraf\u00eda, discalculia)",
      "Dise\u00f1o de estrategias personalizadas para casa y escuela",
      "Comunicaci\u00f3n directa con los maestros para implementar ajustes",
      "Sesiones de intervenci\u00f3n para fortalecer habilidades acad\u00e9micas",
    ],
    process: [
      "Entrevista con la familia: historia escolar y preocupaciones actuales",
      "Evaluaci\u00f3n formal de habilidades acad\u00e9micas y procesos de aprendizaje",
      "Devoluci\u00f3n a padres con resultados claros y plan de acci\u00f3n",
      "Coordinaci\u00f3n con la escuela para implementar adecuaciones",
      "Seguimiento y ajuste de estrategias conforme avanza",
    ],
    faq: [
      { q: "\u00bfC\u00f3mo s\u00e9 si mi hijo tiene una dificultad de aprendizaje o solo le cuesta?", a: "Una evaluaci\u00f3n psicopedag\u00f3gica permite diferenciar entre ambas situaciones. Si la dificultad persiste a pesar del esfuerzo, vale la pena explorar qu\u00e9 est\u00e1 pasando." },
      { q: "\u00bfTrabajan con la escuela de mi hijo?", a: "S\u00ed. Nos comunicamos directamente con los maestros para que las estrategias se apliquen de forma consistente." },
    ],
  },
  {
    slug: "psiquiatria-infantil",
    title: "Psiquiatr\u00eda infantil",
    desc: "Salud mental en ni\u00f1os y adolescentes.",
    color: "teal",
    longDesc:
      "La salud mental de un ni\u00f1o merece la misma atenci\u00f3n que su salud f\u00edsica. Cuando la ansiedad, los cambios de humor o las dificultades emocionales empiezan a afectar su d\u00eda a d\u00eda, un psiquiatra infantil puede evaluar si existe una condici\u00f3n que requiere tratamiento. En \u00d3rbita, la medicaci\u00f3n nunca es el primer recurso: siempre es parte de un plan integral.",
    forWhom: "Ni\u00f1os y adolescentes con ansiedad intensa, cambios de humor marcados, dificultades para dormir, irritabilidad persistente, o que ya tienen un diagn\u00f3stico psiqui\u00e1trico y necesitan seguimiento.",
    includes: [
      "Evaluaci\u00f3n psiqui\u00e1trica completa adaptada a la edad",
      "Diagn\u00f3stico de condiciones como ansiedad, depresi\u00f3n, TDAH y trastornos del \u00e1nimo",
      "Manejo farmacol\u00f3gico cuando es necesario, siempre explicado a la familia",
      "Coordinaci\u00f3n con psic\u00f3logos y terapeutas del equipo",
      "Seguimiento cercano para ajustar el plan seg\u00fan la evoluci\u00f3n",
    ],
    process: [
      "Primera consulta: entrevista con la familia y con el paciente",
      "Evaluaci\u00f3n cl\u00ednica y revisi\u00f3n de antecedentes",
      "Explicaci\u00f3n del diagn\u00f3stico y opciones de tratamiento",
      "Inicio de tratamiento (terap\u00e9utico, farmacol\u00f3gico o combinado)",
      "Seguimiento regular para monitorear avances y bienestar",
    ],
    faq: [
      { q: "\u00bfVan a medicar a mi hijo?", a: "No necesariamente. La medicaci\u00f3n se considera solo cuando es estrictamente necesaria y siempre como parte de un plan integral. Nunca es lo primero ni lo \u00fanico." },
      { q: "\u00bfDesde qu\u00e9 edad se puede consultar?", a: "Desde los primeros a\u00f1os. Mientras m\u00e1s temprano se identifique una dificultad, m\u00e1s herramientas podemos ofrecer." },
    ],
  },
  {
    slug: "terapia-conductual",
    title: "Terapia conductual",
    desc: "Intervenci\u00f3n en habilidades adaptativas y de comportamiento.",
    color: "lavender",
    longDesc:
      "Cada ni\u00f1o aprende a su ritmo, pero a veces necesita un empuj\u00f3n estructurado para desarrollar habilidades que otros adquieren de forma natural. La terapia conductual en \u00d3rbita usa el An\u00e1lisis Conductual Aplicado (ABA) para ense\u00f1ar habilidades nuevas, reducir conductas que le complican la vida y ayudar a que tu hijo pueda participar m\u00e1s en su entorno.",
    forWhom: "Ni\u00f1os con TEA, retrasos en habilidades adaptativas, conductas desafiantes que afectan la convivencia, o que necesitan apoyo para desarrollar independencia en actividades cotidianas.",
    includes: [
      "Evaluaci\u00f3n funcional de la conducta",
      "Dise\u00f1o de programas ABA individualizados",
      "Entrenamiento en habilidades adaptativas (autocuidado, rutinas, seguimiento de instrucciones)",
      "Estrategias para manejo de conductas desafiantes",
      "Capacitaci\u00f3n a padres para aplicar estrategias en casa",
    ],
    process: [
      "Evaluaci\u00f3n inicial: observaci\u00f3n y an\u00e1lisis funcional de la conducta",
      "Dise\u00f1o del programa con objetivos claros y medibles",
      "Sesiones de terapia (frecuencia seg\u00fan necesidades del ni\u00f1o)",
      "Revisi\u00f3n de datos y ajuste continuo del programa",
      "Entrenamiento a la familia para generalizar los avances",
    ],
    faq: [
      { q: "\u00bfQu\u00e9 es ABA?", a: "An\u00e1lisis Conductual Aplicado. Es una metodolog\u00eda basada en evidencia que se enfoca en ense\u00f1ar habilidades y reducir conductas que interfieren con la vida diaria del ni\u00f1o." },
      { q: "\u00bfCu\u00e1nto tiempo dura la terapia?", a: "Depende de cada ni\u00f1o. Algunos logran sus objetivos en meses, otros necesitan un acompa\u00f1amiento m\u00e1s prolongado. El plan se ajusta continuamente." },
    ],
  },
  {
    slug: "terapia-fisica-ocupacional-lenguaje",
    title: "Terapia f\u00edsica, ocupacional y lenguaje",
    desc: "Intervenciones motoras, sensoriomotoras y de comunicaci\u00f3n.",
    color: "coral",
    longDesc:
      "Moverse, sentir, comunicarse: son las bases sobre las que un ni\u00f1o construye su independencia. Cuando alguna de estas \u00e1reas necesita apoyo, nuestro equipo de terapeutas trabaja de forma integrada para que tu hijo pueda participar en su mundo con mayor facilidad. No son tres terapias separadas: es un equipo que se habla, se coordina y comparte un mismo plan.",
    forWhom: "Ni\u00f1os con retrasos en el movimiento, dificultades para hablar o comunicarse, problemas de procesamiento sensorial, dificultades de alimentaci\u00f3n, o que necesitan rehabilitaci\u00f3n f\u00edsica.",
    includes: [
      "Terapia f\u00edsica: fortalecimiento, equilibrio, coordinaci\u00f3n y habilidades motoras gruesas",
      "Terapia ocupacional: motricidad fina, procesamiento sensorial, habilidades de la vida diaria",
      "Terapia del lenguaje: habla, comprensi\u00f3n, expresi\u00f3n y alimentaci\u00f3n",
      "Objetivos funcionales orientados a la vida real del ni\u00f1o",
      "Coordinaci\u00f3n continua entre los tres terapeutas y el equipo m\u00e9dico",
    ],
    process: [
      "Evaluaci\u00f3n individual en cada \u00e1rea seg\u00fan las necesidades",
      "Definici\u00f3n de objetivos funcionales con la familia",
      "Sesiones de terapia semanales (individuales o combinadas)",
      "Reportes de avance y comunicaci\u00f3n constante con la familia",
      "Ajuste de objetivos conforme el ni\u00f1o avanza",
    ],
    faq: [
      { q: "\u00bfMi hijo necesita las tres terapias?", a: "No necesariamente. La evaluaci\u00f3n inicial determina qu\u00e9 \u00e1reas necesitan apoyo. Puede ser una, dos o las tres, seg\u00fan lo que tu hijo requiera." },
      { q: "\u00bfQu\u00e9 pasa si mi hijo no habla todav\u00eda?", a: "Hay muchas formas de comunicarse. Trabajamos con el nivel actual de tu hijo y lo acompa\u00f1amos a desarrollar herramientas de comunicaci\u00f3n, ya sean verbales o alternativas." },
    ],
  },
  {
    slug: "neuropsicologia",
    title: "Neuropsicolog\u00eda",
    desc: "Evaluaci\u00f3n cognitiva y perfil de fortalezas.",
    color: "coral",
    longDesc:
      "Entender c\u00f3mo funciona la mente de tu hijo es el primer paso para ayudarlo mejor. Una evaluaci\u00f3n neuropsicol\u00f3gica revela su perfil cognitivo: d\u00f3nde est\u00e1n sus fortalezas, qu\u00e9 le cuesta m\u00e1s, c\u00f3mo procesa la informaci\u00f3n. Con esa claridad, el equipo puede dise\u00f1ar intervenciones que realmente le funcionen.",
    forWhom: "Ni\u00f1os y adolescentes que necesitan una evaluaci\u00f3n profunda de sus capacidades cognitivas, ya sea para complementar un diagn\u00f3stico, para entender dificultades acad\u00e9micas, o para identificar altas capacidades.",
    includes: [
      "Evaluaci\u00f3n de memoria, atenci\u00f3n, funciones ejecutivas, lenguaje y habilidades visuoespaciales",
      "Perfil cognitivo completo: fortalezas y \u00e1reas de oportunidad",
      "Reporte detallado con recomendaciones para familia, escuela y equipo terap\u00e9utico",
      "Evaluaci\u00f3n de cociente intelectual (CI) cuando es requerido",
      "Detecci\u00f3n de altas capacidades intelectuales",
    ],
    process: [
      "Entrevista cl\u00ednica con la familia",
      "Sesiones de evaluaci\u00f3n con el paciente (2 a 4 sesiones seg\u00fan la edad)",
      "An\u00e1lisis e integraci\u00f3n de resultados",
      "Sesi\u00f3n de devoluci\u00f3n: explicaci\u00f3n del perfil con lenguaje claro",
      "Entrega de reporte escrito con recomendaciones espec\u00edficas",
    ],
    faq: [
      { q: "\u00bfCu\u00e1nto dura la evaluaci\u00f3n neuropsicol\u00f3gica?", a: "Generalmente entre 2 y 4 sesiones de una hora. Depende de la edad y las \u00e1reas que necesitamos explorar." },
      { q: "\u00bfPara qu\u00e9 sirve el reporte?", a: "Es una gu\u00eda para la familia, la escuela y los terapeutas. Permite tomar decisiones informadas y dise\u00f1ar intervenciones que realmente se ajusten al perfil de tu hijo." },
    ],
  },
  {
    slug: "psicologia-clinica",
    title: "Psicolog\u00eda cl\u00ednica",
    desc: "Evaluaci\u00f3n y tratamiento emocional y conductual.",
    color: "yellow",
    longDesc:
      "Las emociones de un ni\u00f1o no siempre se expresan con palabras. A veces se manifiestan en berrinches que no ceden, miedos que crecen, o un retraimiento que preocupa. La psicolog\u00eda cl\u00ednica en \u00d3rbita ofrece un espacio seguro donde tu hijo puede procesar lo que siente, mientras la familia recibe herramientas para acompa\u00f1arlo mejor.",
    forWhom: "Ni\u00f1os y adolescentes con ansiedad, miedos, baja autoestima, dificultades sociales, duelo, o que est\u00e1n atravesando el proceso emocional de un diagn\u00f3stico de neurodesarrollo.",
    includes: [
      "Psicoterapia individual adaptada a la edad (juego, narrativa, cognitivo-conductual)",
      "Terapia familiar y orientaci\u00f3n a padres",
      "Trabajo en regulaci\u00f3n emocional y habilidades sociales",
      "Acompa\u00f1amiento emocional durante el proceso diagn\u00f3stico",
      "Coordinaci\u00f3n con el equipo para un abordaje integral",
    ],
    process: [
      "Primera sesi\u00f3n: entrevista con padres para entender el contexto",
      "Sesiones de evaluaci\u00f3n con el ni\u00f1o o adolescente",
      "Definici\u00f3n de objetivos terap\u00e9uticos con la familia",
      "Sesiones semanales de psicoterapia",
      "Revisiones peri\u00f3dicas con la familia para compartir avances",
    ],
    faq: [
      { q: "\u00bfC\u00f3mo funciona la terapia con ni\u00f1os peque\u00f1os?", a: "Usamos el juego como herramienta principal. A trav\u00e9s del juego, los ni\u00f1os expresan lo que no pueden decir con palabras." },
      { q: "\u00bfLos padres participan en la terapia?", a: "S\u00ed. La familia es parte del proceso. Tenemos sesiones de orientaci\u00f3n para que los pap\u00e1s tengan herramientas concretas para el d\u00eda a d\u00eda." },
    ],
  },
  {
    slug: "medicina-rehabilitacion",
    title: "Medicina de rehabilitaci\u00f3n",
    desc: "Recuperaci\u00f3n funcional y motriz.",
    color: "lavender",
    longDesc:
      "Cuando un ni\u00f1o enfrenta una condici\u00f3n que limita su movimiento o su independencia f\u00edsica, la medicina de rehabilitaci\u00f3n ofrece un camino para recuperar funci\u00f3n y ganar autonom\u00eda. Nuestro especialista eval\u00faa las capacidades actuales y dise\u00f1a un programa que trabaja con lo que tu hijo s\u00ed puede hacer para llevarlo m\u00e1s lejos.",
    forWhom: "Ni\u00f1os con condiciones que afectan la movilidad, la postura o la independencia f\u00edsica: par\u00e1lisis cerebral, lesiones musculoesquel\u00e9ticas, condiciones gen\u00e9ticas con componente motor, o post-operatorios.",
    includes: [
      "Evaluaci\u00f3n funcional completa",
      "Dise\u00f1o de programa de rehabilitaci\u00f3n individualizado",
      "Prescripci\u00f3n de \u00f3rtesis y equipo de apoyo cuando es necesario",
      "Coordinaci\u00f3n con terapia f\u00edsica y ocupacional",
      "Seguimiento m\u00e9dico del progreso funcional",
    ],
    process: [
      "Evaluaci\u00f3n m\u00e9dica inicial: capacidades y limitaciones actuales",
      "Dise\u00f1o del programa con objetivos funcionales claros",
      "Implementaci\u00f3n coordinada con terapeutas del equipo",
      "Revisiones peri\u00f3dicas para ajustar el programa",
      "Evaluaci\u00f3n de necesidad de equipo de apoyo o \u00f3rtesis",
    ],
    faq: [
      { q: "\u00bfQu\u00e9 diferencia hay entre medicina de rehabilitaci\u00f3n y terapia f\u00edsica?", a: "El m\u00e9dico rehabilitador hace el diagn\u00f3stico funcional y dise\u00f1a el plan. El terapeuta f\u00edsico ejecuta las sesiones de tratamiento. Trabajan juntos." },
      { q: "\u00bfEste servicio es para condiciones permanentes o tambi\u00e9n temporales?", a: "Para ambas. Ya sea una lesi\u00f3n temporal o una condici\u00f3n cr\u00f3nica, la rehabilitaci\u00f3n busca maximizar la independencia de tu hijo." },
    ],
  },
  {
    slug: "terapia-neurodesarrollo",
    title: "Terapia de neurodesarrollo",
    desc: "Adquisici\u00f3n y fortalecimiento de hitos del desarrollo.",
    color: "lime",
    longDesc:
      "Los primeros a\u00f1os son una ventana de oportunidad \u00fanica. Si tu beb\u00e9 o ni\u00f1o peque\u00f1o est\u00e1 tardando en sostener la cabeza, sentarse, gatear o caminar, la intervenci\u00f3n temprana puede hacer una diferencia enorme. La terapia de neurodesarrollo trabaja con el cerebro en su momento de mayor plasticidad para estimular y fortalecer los hitos que tu hijo necesita alcanzar.",
    forWhom: "Beb\u00e9s y ni\u00f1os peque\u00f1os (0 a 5 a\u00f1os) con retrasos en hitos del desarrollo motor, prematuros, o con condiciones que afectan el desarrollo temprano.",
    includes: [
      "Estimulaci\u00f3n del desarrollo motor, sensorial y cognitivo",
      "T\u00e9cnicas de neurodesarrollo (Bobath, estimulaci\u00f3n temprana)",
      "Trabajo con la familia para incorporar ejercicios en la rutina diaria",
      "Seguimiento cercano de hitos del desarrollo",
      "Coordinaci\u00f3n con pediatra del desarrollo y resto del equipo",
    ],
    process: [
      "Evaluaci\u00f3n del nivel actual de desarrollo del beb\u00e9 o ni\u00f1o",
      "Definici\u00f3n de objetivos espec\u00edficos con la familia",
      "Sesiones de terapia (frecuencia seg\u00fan necesidad, generalmente 1 a 3 por semana)",
      "Entrenamiento a los padres en ejercicios para casa",
      "Reevaluaci\u00f3n peri\u00f3dica para ajustar el plan",
    ],
    faq: [
      { q: "\u00bfDesde qu\u00e9 edad se puede iniciar?", a: "Desde reci\u00e9n nacido. En prematuros y en condiciones diagnosticadas al nacer, la intervenci\u00f3n temprana puede iniciar en las primeras semanas de vida." },
      { q: "\u00bfC\u00f3mo s\u00e9 si mi beb\u00e9 necesita esta terapia?", a: "Si notas que tu beb\u00e9 no est\u00e1 alcanzando los hitos de movimiento esperados para su edad, o si su pediatra lo ha se\u00f1alado, es buen momento para una evaluaci\u00f3n." },
    ],
  },
];

/* ─── TEAM ─── */
export interface Doctor {
  slug: string;
  initials: string;
  name: string;
  role: string;
  color: string;
  photo: string;
  bio: string;
  specialties: string[];
}

export const DOCTORS: Doctor[] = [
  {
    slug: "dr-juan-francisco-lozano",
    initials: "JL",
    name: "Dr. Juan Francisco Lozano",
    role: "Pediatra del desarrollo y comportamiento",
    color: "lavender",
    photo: "/team/dr-lozano.png",
    bio: "M\u00e9dico cirujano egresado del Tecnol\u00f3gico de Monterrey y maestro en Ciencias en Investigaci\u00f3n Cl\u00ednica por Northwestern University en Chicago, IL. Realiz\u00f3 su residencia en Pediatr\u00eda en el Children\u2019s Hospital of Michigan en Detroit, y posteriormente su subespecialidad en Pediatr\u00eda del Desarrollo y Comportamiento en Nationwide Children\u2019s Hospital en Columbus, OH. Es miembro de diversas sociedades m\u00e9dicas en M\u00e9xico y Estados Unidos, adem\u00e1s de desempe\u00f1arse como profesor e investigador en el Tec de Monterrey. Su pr\u00e1ctica cl\u00ednica se centra en brindar atenci\u00f3n integral y basada en evidencia a ni\u00f1os y adolescentes con trastornos del neurodesarrollo.",
    specialties: ["Evaluaci\u00f3n del desarrollo", "TDAH", "TEA", "Retrasos del desarrollo"],
  },
  {
    slug: "dra-maria-jose-delgado",
    initials: "MJ",
    name: "Dra. Mar\u00eda Jos\u00e9 Delgado",
    role: "Pediatra \u00b7 Alta Especialidad en S\u00edndrome de Down",
    color: "coral",
    photo: "/team/dra-delgado.png",
    bio: "Pediatra con alta especialidad en S\u00edndrome de Down. Acompa\u00f1a a familias desde el diagn\u00f3stico con un enfoque integral y basado en evidencia.",
    specialties: ["S\u00edndrome de Down", "Pediatr\u00eda general", "Seguimiento integral"],
  },
  {
    slug: "dra-sofia-garcia",
    initials: "SG",
    name: "Dra. Sof\u00eda Garc\u00eda",
    role: "Terapeuta y analista del comportamiento",
    color: "teal-light",
    photo: "/team/dra-garcia.png",
    bio: "M\u00e9dico cirujano egresada del Tec de Monterrey, actualmente cursando una Maestr\u00eda en Autismo y Discapacidades del Desarrollo en la University of Texas at Austin. Cuenta con experiencia en hospitales de alto nivel como Zambrano Hellion Tec Salud, as\u00ed como en programas de atenci\u00f3n a ni\u00f1os con S\u00edndrome de Down y Trastorno del Espectro Autista. Su enfoque cl\u00ednico combina la evidencia cient\u00edfica con un acompa\u00f1amiento humano, cercano a cada familia.",
    specialties: ["Autismo", "Discapacidades del desarrollo", "S\u00edndrome de Down", "An\u00e1lisis conductual"],
  },
  {
    slug: "lic-daniela-paez",
    initials: "DP",
    name: "Lic. Daniela P\u00e1ez",
    role: "Terapeuta del Lenguaje y Habla",
    color: "coral",
    photo: "/team/lic-paez.png",
    bio: "Licenciada y maestra en Trastornos de la Comunicaci\u00f3n por universidades en Texas. Ha trabajado en cl\u00ednicas de rehabilitaci\u00f3n, hospitales y escuelas en EE.UU., atendiendo a beb\u00e9s, ni\u00f1os y adolescentes con trastornos del lenguaje, habla, alimentaci\u00f3n y degluci\u00f3n. Fundadora de Plan Diez Terapia del Lenguaje, combina su formaci\u00f3n biling\u00fce e internacional con un enfoque familiar y transdisciplinario.",
    specialties: ["Trastornos del lenguaje", "Habla", "Alimentaci\u00f3n y degluci\u00f3n", "Terapia biling\u00fce"],
  },
  {
    slug: "lic-rebeca-zepeda",
    initials: "RZ",
    name: "Lic. Rebeca Zepeda",
    role: "Psic\u00f3loga Cl\u00ednica y de la Salud",
    color: "sky",
    photo: "/team/lic-zepeda.png",
    bio: "Psic\u00f3loga cl\u00ednica y de la salud, egresada del Tecnol\u00f3gico de Monterrey, actualmente cursando una Maestr\u00eda en Psicoterapia. Su experiencia incluye trabajo como psic\u00f3loga en escuelas internacionales y como terapeuta en organizaciones de apoyo familiar, brindando atenci\u00f3n a ni\u00f1os, adolescentes y adultos. Con formaci\u00f3n en psicopatolog\u00eda infantil y terapias de tercera generaci\u00f3n, combina rigor acad\u00e9mico con calidez humana para acompa\u00f1ar a cada paciente en su proceso de bienestar.",
    specialties: ["Psicoterapia", "Psicopatolog\u00eda infantil", "Terapias de tercera generaci\u00f3n", "Salud mental infantil y adolescente"],
  },
  {
    slug: "lic-nora-martinez",
    initials: "NM",
    name: "Lic. Nora Mart\u00ednez",
    role: "Psicoterapia Breve Sist\u00e9mica",
    color: "yellow",
    photo: "/team/lic-martinez.png",
    bio: "Psic\u00f3loga por la UDEM con Maestr\u00eda en Psicoterapia Breve Sist\u00e9mica. M\u00e1s de una d\u00e9cada de experiencia cl\u00ednica en psicoterapia y evaluaci\u00f3n diagn\u00f3stica en contextos escolares y de desarrollo. Terapeuta en programas de estimulaci\u00f3n del desarrollo y docente en colegios privados, con certificaciones en DIR/Floortime, neurociencias y terapias basadas en evidencia. Su pr\u00e1ctica se centra en ofrecer estrategias efectivas y humanas para ni\u00f1os y familias.",
    specialties: ["Psicoterapia Breve Sist\u00e9mica", "DIR/Floortime", "Evaluaci\u00f3n diagn\u00f3stica", "Estimulaci\u00f3n del desarrollo"],
  },
];

/* ─── WHATSAPP ─── */
export const WA_URL =
  "https://wa.me/528182751125?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";
