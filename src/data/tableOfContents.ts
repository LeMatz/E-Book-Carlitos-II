/**
 * =========================================================================
 * ÍNDICE DE CONTENIDOS (TABLA DE MATERIAS) — FUENTE ÚNICA DE TÍTULOS
 * =========================================================================
 * Para cambiar el título de cualquier punto o folio del libro, editalo
 * directamente en el objeto `INDICE_TITULOS` a continuación.
 *
 * Cada cambio que hagas aquí se refleja AUTOMÁTICAMENTE en:
 * 1. La Tabla de Contenidos / Índice visual (EbookTableOfContents)
 * 2. El encabezado del folio correspondiente (EbookPage)
 * 3. Los metadatos y navegación de toda la obra.
 * =========================================================================
 */

export const INDICE_TITULOS: Record<number, string> = {
  1: 'El Mate con Carlitos',
  2: 'La Realidad Psíquica y el Unus Mundus',
  3: 'La Torre de Bollingen: El Taller del Alma',
  4: 'La Ciencia de lo Imposible: Jung y Wolfgang Pauli',
  5: 'Las Figuras Arquetípicas: Sombra, Vínculos y Polaridades',
  6: 'El Continuo de Pérdida de Distancia Yo-Arquetipo',
  7: 'Anatomía de la Inflación y la Pérdida del Yo',
  8: 'Los Arquetipos Psicoides: El Puente entre Psique y Materia',
  9: 'El Self / Sí-Mismo y la Distancia Justa',
  10: 'El Sueño como Mensajero Autónomo y Compensatorio',
  11: 'Símbolos vs. Signos y el Error del Diccionario',
  12: 'La Estructura Dramática del Sueño Junguiano',
  13: 'El Arte de la Imaginación Activa',
  14: 'El Escarabajo Dorado de Küsnacht',
  15: 'Causalidad vs. Sincronicidad: El Tiempo Cualitativo',
  16: 'La Brújula del Destino: Señales en la Vida Cotidiana',
  17: 'Tabla Comparativa de Sincronicidades Cotidianas',
  18: 'Jung y el Libro de las Mutaciones',
  19: 'Antes de abrir la app: la pregunta',
  20: 'Qué es un hexagrama y qué hace la app por vos',
  21: 'Leer el resultado, pantalla por pantalla',
  22: 'Dos lentes para profundizar: posiciones y trigramas',
  23: 'Una tirada completa: el caso del prólogo de Jung',
  24: 'Del texto a la decisión: usar sin abusar',
  25: 'Práctica guiada: tu primera tirada',
  26: 'Protocolo 1: Bitácora de Sueños en Cuatro Actos',
  27: 'Protocolo 2: Registro y Auditoría de Sincronicidades',
  28: 'Protocolo 3: El Juego del Tao y la Sintonía Azarosa',
  29: 'La Gran Coniunctio y el Compromiso Ético',
};

/**
 * Subtítulos opcionales configurables desde el índice.
 * Si se define uno aquí, sobreescribe el subtítulo del folio.
 */
export const INDICE_SUBTITULOS: Partial<Record<number, string>> = {};

/**
 * Obtiene el título actualizado de un folio desde el índice.
 */
export function getIndiceTitle(folio: number, fallback?: string): string {
  return INDICE_TITULOS[folio] ?? fallback ?? `Folio ${folio}`;
}
