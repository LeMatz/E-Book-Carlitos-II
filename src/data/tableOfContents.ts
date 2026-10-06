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
  18: 'Carl Jung y el Libro de las Mutaciones',
  19: 'La Anatomía del Hexagrama y las Tres Monedas',
  20: 'Los Ocho Trigramas Fundamentales (Ba Gua)',
  21: 'Cuatro Hexagramas Espejo para el Viajero Interior',
  22: 'El I Ching como Espejo Proyectivo en el Coaching',
  23: 'Protocolo 1: Bitácora de Sueños en Cuatro Actos',
  24: 'Protocolo 2: Registro y Auditoría de Sincronicidades',
  25: 'Protocolo 3: El Juego del Tao y la Sintonía Azarosa',
  26: 'La Gran Coniunctio y el Compromiso Ético',
  27: 'Fuentes, Lecturas y Aparato Crítico',
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
