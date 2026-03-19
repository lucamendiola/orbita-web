/* ─── SERVICES ─── */
export interface Service {
  slug: string;
  title: string;
  desc: string;
  color: string; // CSS class suffix
  longDesc: string;
}

export const SERVICES: Service[] = [
  {
    slug: "pediatria-desarrollo",
    title: "Pediatr\u00eda del desarrollo y comportamiento",
    desc: "Evaluaci\u00f3n y seguimiento del desarrollo infantil.",
    color: "yellow",
    longDesc:
      "Consulta m\u00e9dica especializada en el desarrollo infantil. Evaluamos hitos del desarrollo, identificamos condiciones tempranas y dise\u00f1amos planes de seguimiento integral para cada paciente.",
  },
  {
    slug: "neurologia-pediatrica",
    title: "Neurolog\u00eda pedi\u00e1trica",
    desc: "Atenci\u00f3n de trastornos neurol\u00f3gicos infantiles.",
    color: "sky",
    longDesc:
      "Diagn\u00f3stico y tratamiento de condiciones neurol\u00f3gicas en ni\u00f1os y adolescentes, incluyendo epilepsia, cefaleas, trastornos del movimiento y condiciones del neurodesarrollo.",
  },
  {
    slug: "psicopedagogia",
    title: "Psicopedagog\u00eda",
    desc: "Apoyo al aprendizaje y estrategias escolares.",
    color: "lime",
    longDesc:
      "Evaluaci\u00f3n y acompa\u00f1amiento en dificultades de aprendizaje. Dise\u00f1amos estrategias escolares personalizadas y trabajamos de la mano con las familias y escuelas.",
  },
  {
    slug: "psiquiatria-infantil",
    title: "Psiquiatr\u00eda infantil",
    desc: "Salud mental en ni\u00f1os y adolescentes.",
    color: "teal",
    longDesc:
      "Atenci\u00f3n psiqui\u00e1trica especializada para ni\u00f1os y adolescentes. Evaluaci\u00f3n, diagn\u00f3stico y tratamiento farmacol\u00f3gico cuando es necesario, siempre como parte de un plan integral.",
  },
  {
    slug: "terapia-conductual",
    title: "Terapia conductual",
    desc: "Intervenci\u00f3n en habilidades adaptativas y de comportamiento.",
    color: "lavender",
    longDesc:
      "An\u00e1lisis Conductual Aplicado (ABA) para desarrollar habilidades adaptativas, reducir conductas desafiantes y mejorar la calidad de vida del paciente y su familia.",
  },
  {
    slug: "terapia-fisica-ocupacional-lenguaje",
    title: "Terapia f\u00edsica, ocupacional y lenguaje",
    desc: "Intervenciones motoras, sensoriomotoras y de comunicaci\u00f3n.",
    color: "coral",
    longDesc:
      "Terapias integradas para el desarrollo motor grueso y fino, procesamiento sensorial, habilidades de comunicaci\u00f3n, habla y lenguaje. Trabajamos con objetivos funcionales para cada paciente.",
  },
  {
    slug: "neuropsicologia",
    title: "Neuropsicolog\u00eda",
    desc: "Evaluaci\u00f3n cognitiva y perfil de fortalezas/\u00e1reas de oportunidad.",
    color: "coral",
    longDesc:
      "Evaluaciones neuropsicol\u00f3gicas completas para entender el perfil cognitivo del paciente: memoria, atenci\u00f3n, funciones ejecutivas, lenguaje y habilidades visuoespaciales.",
  },
  {
    slug: "psicologia-clinica",
    title: "Psicolog\u00eda cl\u00ednica",
    desc: "Evaluaci\u00f3n y tratamiento emocional y conductual.",
    color: "yellow",
    longDesc:
      "Psicoterapia individual y familiar. Trabajamos con regulaci\u00f3n emocional, ansiedad, autoestima, habilidades sociales y acompa\u00f1amiento en el proceso de diagn\u00f3stico.",
  },
  {
    slug: "medicina-rehabilitacion",
    title: "Medicina de rehabilitaci\u00f3n",
    desc: "Recuperaci\u00f3n funcional y motriz.",
    color: "lavender",
    longDesc:
      "Evaluaci\u00f3n y tratamiento m\u00e9dico enfocado en la recuperaci\u00f3n funcional. Dise\u00f1amos programas de rehabilitaci\u00f3n personalizados para maximizar la independencia del paciente.",
  },
  {
    slug: "terapia-neurodesarrollo",
    title: "Terapia de neurodesarrollo",
    desc: "Adquisici\u00f3n y fortalecimiento de hitos del desarrollo.",
    color: "lime",
    longDesc:
      "Intervenci\u00f3n temprana enfocada en estimular y fortalecer los hitos del desarrollo. Trabajamos con beb\u00e9s y ni\u00f1os peque\u00f1os para maximizar su potencial desde las primeras etapas.",
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
    role: "Pediatr\u00eda del Desarrollo y Comportamiento",
    color: "lavender",
    photo: "/team/dr-lozano.png",
    bio: "Pediatra especialista en desarrollo y comportamiento infantil. Formado en TecSalud con experiencia en evaluaci\u00f3n y seguimiento del neurodesarrollo.",
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
    role: "Terapia Conductual \u00b7 Analista de Conducta",
    color: "teal-light",
    photo: "/team/dra-garcia.png",
    bio: "Analista de conducta certificada. Especialista en An\u00e1lisis Conductual Aplicado (ABA) para el desarrollo de habilidades adaptativas.",
    specialties: ["ABA", "Habilidades adaptativas", "Manejo conductual", "Habilidades sociales"],
  },
  {
    slug: "lic-daniela-paez",
    initials: "DP",
    name: "Lic. Daniela P\u00e1ez",
    role: "Terapia de Lenguaje",
    color: "orange",
    photo: "/team/lic-paez.png",
    bio: "Terapeuta de lenguaje especializada en trastornos de comunicaci\u00f3n, habla y lenguaje en poblaci\u00f3n infantil y adolescente.",
    specialties: ["Trastornos del lenguaje", "Tartamudeo", "Comunicaci\u00f3n aumentativa", "Fonoaudiolog\u00eda"],
  },
  {
    slug: "lic-rebeca-zepeda",
    initials: "RZ",
    name: "Lic. Rebeca Zepeda",
    role: "Psicolog\u00eda Cl\u00ednica",
    color: "sky",
    photo: "/team/lic-zepeda.png",
    bio: "Psic\u00f3loga cl\u00ednica con enfoque en regulaci\u00f3n emocional, ansiedad infantil y acompa\u00f1amiento a familias durante el proceso diagn\u00f3stico.",
    specialties: ["Regulaci\u00f3n emocional", "Ansiedad", "Terapia familiar", "Autoestima"],
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
