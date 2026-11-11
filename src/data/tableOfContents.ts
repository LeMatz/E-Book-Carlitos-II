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
  5: 'El Continuo de Pérdida de Distancia Yo-Arquetipo',
  6: 'Anatomía de la Inflación y la Pérdida del Yo',
  7: 'El Self / Sí-Mismo y la Distancia Justa',
  8: 'El Sueño como Mensajero Autónomo y Compensatorio',
  9: 'Símbolos vs. Signos y el Error del Diccionario',
  10: 'La Estructura Dramática del Sueño Junguiano',
  11: 'El Escarabajo Dorado de Küsnacht',
  12: 'Causalidad vs. Sincronicidad: El Tiempo Cualitativo',
  13: 'Los Arquetipos Psicoides: El Puente entre mente y Materia',
  14: 'La Brújula del Destino: Señales en la Vida Cotidiana',
  15: 'Tabla Comparativa de Sincronicidades Cotidianas',
  16: 'Jung y el Libro de las Mutaciones',
  17: 'El mapa del viaje: la consulta de punta a punta',
  18: 'El arte de formular la pregunta',
  19: 'Anatomía del hexagrama y aritmética de la tirada',
  20: 'La estructura de la lectura: juicio, imagen y mutaciones',
  21: 'Dos lentes para profundizar: posiciones y trigramas',
  22: 'Una tirada completa: el caso del prólogo de Jung',
  23: 'Práctica guiada: tu primera tirada',
  24: 'Protocolo 1: Bitácora de Sueños en Cuatro Actos',
  25: 'Protocolo 2: Registro y Auditoría de Sincronicidades',
  26: 'Protocolo 3: El Juego del Tao y la Sintonía Azarosa',
  27: 'La Gran Coniunctio y el Compromiso Ético',
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
