export const modules = [
  {
    id: 1,
    number: "01",
    title: "Intro a Small Caps",
    description: "Entendiendo el ecosistema de baja capitalización y por qué es la mayor oportunidad del mercado americano.",
    lessons: [
      { id: 101, title: "¿Qué son las Small Caps?", duration: "18:30", completed: true },
      { id: 102, title: "El ecosistema de baja capitalización", duration: "22:15", completed: true },
      { id: 103, title: "Por qué Small Caps para Day Trading", duration: "15:45", completed: true },
      { id: 104, title: "Catalizadores y volatilidad", duration: "28:00", completed: false },
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Psicología de Ejecución",
    description: "Psicología, gestión de riesgo y la arquitectura mental necesaria para operar bajo presión.",
    lessons: [
      { id: 201, title: "Gestión del Miedo al Click", duration: "15:20", completed: true },
      { id: 202, title: "La Mentalidad Probabilística", duration: "22:45", completed: true },
      { id: 203, title: "Disciplina y Rutina Operativa", duration: "19:30", completed: false },
      { id: 204, title: "Control Emocional en Pérdidas", duration: "25:10", completed: false },
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Herramientas de Precisión",
    description: "Configuración profesional de herramientas y lectura avanzada del flujo de órdenes.",
    lessons: [
      { id: 301, title: "Lectura de Nivel 2 y Time & Sales", duration: "45:00", completed: false, current: true },
      { id: 302, title: "Estrategia de Momentum", duration: "38:12", completed: false },
      { id: 303, title: "Volumen Relativo Avanzado", duration: "29:05", completed: false },
      { id: 304, title: "Configuración de Hotkeys", duration: "20:00", completed: false },
    ],
  },
  {
    id: 4,
    number: "04",
    title: "DAS Trader Setup",
    description: "Configuración profesional de la plataforma DAS Trader para ejecución instantánea y precisa.",
    lessons: [
      { id: 401, title: "Instalación y Configuración Inicial", duration: "30:00", completed: false },
      { id: 402, title: "Layouts Profesionales", duration: "25:45", completed: false },
      { id: 403, title: "Hotkeys de Ejecución", duration: "35:20", completed: false },
      { id: 404, title: "Simulador vs Cuenta Real", duration: "18:00", completed: false },
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Momentum Mastery",
    description: "Identificación de flujos de capital en tiempo real y entrada en el punto de inflexión.",
    lessons: [
      { id: 501, title: "Identificación de Momentum", duration: "32:00", completed: false },
      { id: 502, title: "Entradas en Punto de Inflexión", duration: "28:15", completed: false },
      { id: 503, title: "Gestión de Posición en Momentum", duration: "24:30", completed: false },
    ],
  },
  {
    id: 6,
    number: "06",
    title: "Análisis Técnico Aplicado",
    description: "Lectura de charts, soportes, resistencias y patrones de alta probabilidad para small caps.",
    lessons: [
      { id: 601, title: "Soportes y Resistencias Clave", duration: "26:00", completed: false },
      { id: 602, title: "Patrones de Alta Probabilidad", duration: "34:20", completed: false },
      { id: 603, title: "VWAP como Indicador Central", duration: "22:10", completed: false },
    ],
  },
  {
    id: 7,
    number: "07",
    title: "Gestión del Riesgo",
    description: "Sizing de posición, stop losses, y control de drawdown profesional.",
    lessons: [
      { id: 701, title: "Position Sizing Profesional", duration: "28:00", completed: false },
      { id: 702, title: "Stop Loss Strategies", duration: "22:30", completed: false },
      { id: 703, title: "Gestión del Drawdown", duration: "20:15", completed: false },
    ],
  },
  {
    id: 8,
    number: "08",
    title: "Estrategias Pro",
    description: "Scalping en breakouts, gap & go, y estrategias de reversión para traders avanzados.",
    lessons: [
      { id: 801, title: "Scalping en Breakouts", duration: "42:10", completed: false },
      { id: 802, title: "Gap & Go Strategy", duration: "35:00", completed: false },
      { id: 803, title: "Reversión en Small Caps", duration: "30:45", completed: false },
    ],
  },
  {
    id: 9,
    number: "09",
    title: "Pre-Market & Scanning",
    description: "Rutina pre-market, uso de scanners, y filtrado de oportunidades de alta calidad.",
    lessons: [
      { id: 901, title: "Rutina Pre-Market Completa", duration: "25:00", completed: false },
      { id: 902, title: "Configuración de Scanners", duration: "30:15", completed: false },
      { id: 903, title: "Selección de Watchlist", duration: "18:40", completed: false },
    ],
  },
  {
    id: 10,
    number: "10",
    title: "Trading Journal & Review",
    description: "Registro, análisis y mejora continua de tu operativa con métricas profesionales.",
    lessons: [
      { id: 1001, title: "Construcción del Trading Journal", duration: "20:00", completed: false },
      { id: 1002, title: "Métricas que Importan", duration: "24:30", completed: false },
      { id: 1003, title: "Review Semanal Profesional", duration: "22:00", completed: false },
    ],
  },
];

export const plans = {
  free: {
    id: "free",
    name: "Free Plan",
    price: 0,
    period: "",
    accessibleModules: [1],
    features: [
      "Acceso al primer módulo completo",
      "Conoce la metodología JP Street",
      "Contenido introductorio",
      "Sin compromiso",
    ],
    cta: "Comenzar Gratis",
  },
  quarterly: {
    id: "quarterly",
    name: "Quarterly Plan",
    price: 169,
    period: "/ 3 meses",
    accessibleModules: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    badge: "Popular",
    features: [
      "Acceso completo a los 10 módulos",
      "42+ lecciones profesionales",
      "Recursos descargables",
      "Acceso a comunidad",
      "Soporte por 3 meses",
    ],
    cta: "Elegir Plan",
  },
  semiannual: {
    id: "semiannual",
    name: "Semiannual Plan",
    price: 290,
    period: "/ 6 meses",
    accessibleModules: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    badge: "Best Value",
    features: [
      "Acceso completo a los 10 módulos",
      "42+ lecciones profesionales",
      "Recursos descargables",
      "Acceso a comunidad",
      "Soporte prioritario por 6 meses",
      "Sesiones de Q&A en vivo",
    ],
    cta: "Mejor Valor",
    savings: "Ahorra $48",
  },
};

export const currentUser = {
  name: "Alex Rivera",
  plan: "free", // Change to "quarterly" or "semiannual" to test access
  avatar: null,
  progress: 34,
};

export const benefits = [
  {
    icon: "trending_up",
    title: "Momentum Trading",
    description: "Aprende a identificar y capitalizar movimientos explosivos en small caps antes que el mercado reaccione.",
  },
  {
    icon: "shield",
    title: "Gestión del Riesgo",
    description: "Domina el position sizing, stop losses y control de drawdown como un trader institucional.",
  },
  {
    icon: "speed",
    title: "Ejecución Profesional",
    description: "Configura DAS Trader y domina la lectura de Nivel 2 para entradas de precisión quirúrgica.",
  },
  {
    icon: "psychology",
    title: "Mentalidad de Trader",
    description: "Desarrolla la disciplina, control emocional y mentalidad probabilística necesaria para ser consistente.",
  },
  {
    icon: "bar_chart",
    title: "Análisis Técnico",
    description: "Patrones de alta probabilidad, VWAP, soportes y resistencias aplicados a small caps.",
  },
  {
    icon: "groups",
    title: "Comunidad Elite",
    description: "Únete a una comunidad de traders enfocados en resultados con sesiones de Q&A y análisis en vivo.",
  },
];

export const whatYouLearn = [
  "Identificar small caps con alto potencial de movimiento",
  "Leer el Nivel 2 y el flujo de órdenes en tiempo real",
  "Ejecutar entradas y salidas con precisión usando hotkeys",
  "Gestionar el riesgo como un trader profesional",
  "Construir rutinas pre-market efectivas",
  "Usar scanners para filtrar las mejores oportunidades",
  "Dominar estrategias de momentum y scalping",
  "Mantener un trading journal profesional",
  "Controlar las emociones durante la operativa",
  "Desarrollar consistencia y disciplina a largo plazo",
];

export const getTotalLessons = () => {
  return modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
};

export const getCompletedLessons = () => {
  return modules.reduce(
    (acc, mod) => acc + mod.lessons.filter((l) => l.completed).length,
    0
  );
};

export const getCurrentLesson = () => {
  for (const mod of modules) {
    const lesson = mod.lessons.find((l) => l.current);
    if (lesson) return { module: mod, lesson };
  }
  return { module: modules[0], lesson: modules[0].lessons[0] };
};

export const isModuleAccessible = (moduleId, userPlan) => {
  const plan = plans[userPlan];
  if (!plan) return false;
  return plan.accessibleModules.includes(moduleId);
};
