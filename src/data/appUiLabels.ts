/**
 * Centralización de etiquetas de la interfaz de la app de I Ching
 * correspondiente al Anexo A del curso.
 * Si la app modifica alguna etiqueta visible, se actualiza exclusivamente aquí.
 */

export const APP_UI_LABELS = {
  APP_NOMBRE: 'la app de I Ching del curso',
  
  // Modos de consulta y formulación
  CONSULTA_ABIERTA: 'Consulta abierta',
  CATEGORIAS: [
    'Decisiones y Encrucijadas',
    'Vínculos y Relaciones',
    'Autoconocimiento y Procesos Internos',
    'Proyectos y Trabajo',
  ] as const,

  // Pantalla de tirada
  TIRAR_MONEDAS: 'Tirar monedas',
  COMPLETAR_RAPIDO: 'Completar Rápido',

  // Pantalla de resultados e interpretación
  INTERPRETACION_RAPIDA: 'Interpretación Rápida',
  SECCIONES_RAPIDAS: {
    PRESENTE: '1. Tu Presente',
    ACTITUD: '2. Actitud Recomendada',
    EVOLUCION: '3. ¿Hacia dónde evoluciona?',
  },
  PESTANAS: {
    PRESENTE: 'Presente',
    TENDENCIA: 'Tendencia',
  },
  EL_JUICIO: 'El Juicio',
  LA_IMAGEN: 'La Imagen',
  TUS_LINEAS_MUTANTES: 'Tus Líneas Mutantes',
  VER_HEXAGRAMA_DERIVADO: 'Ver Hexagrama Derivado',
  ESTRUCTURA_TRIGRAMAS: 'Estructura de Trigramas',
  HEXAGRAMA_ESTABLE: 'Hexagrama Estable',

  // Historial y guardado
  HISTORIAL: 'Historial',
  NOTA_PERSONAL: 'Nota personal',
  GUARDAR_CONSULTA: 'Guardar consulta',
  PROTEGER_CONSULTA: 'Proteger consulta',
} as const;
