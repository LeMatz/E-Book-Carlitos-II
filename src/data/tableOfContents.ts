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
  5: 'El Viaje de la Individuación: De los Arquetipos a la Totalidad',
  6: 'El Continuo de Pérdida de Distancia Yo-Arquetipo',
  7: 'Anatomía de la Inflación y la Pérdida del Yo',
  8: 'El Self / Sí-Mismo y la Distancia Justa',
  9: 'El Sueño como Mensajero Autónomo y Compensatorio',
  10: 'Símbolos vs. Signos y el Error del Diccionario',
  11: 'La Estructura Dramática del Sueño Junguiano',
  12: 'Del Sueño a la Sincronicidad: Cuando el Sentido Encuentra al Mundo Exterior',
  13: 'El Escarabajo Dorado de Küsnacht',
  14: 'Causalidad vs. Sincronicidad: El Tiempo Cualitativo',
  15: 'Los Arquetipos Psicoides: El Puente entre mente y Materia',
  16: 'La Brújula del Destino: Señales en la Vida Cotidiana',
  17: 'Sentido No Es Destino: Alcances y Límites de la Sincronicidad',
  18: 'Jung y el Libro de las Mutaciones',
  19: 'El mapa del viaje: la consulta de punta a punta',
  20: 'El arte de formular la pregunta',
  21: 'Anatomía del hexagrama y aritmética de la tirada',
  22: 'La estructura de la lectura: juicio, imagen y mutaciones',
  23: 'Dos lentes para profundizar: posiciones y trigramas',
  24: 'Una tirada completa: el caso del prólogo de Jung',
  25: 'Práctica guiada: tu primera tirada',
  26: 'Protocolo 1: Bitácora de Sueños en Cuatro Actos',
  27: 'Protocolo 2: Registro y Auditoría de Sincronicidades',
  28: 'Protocolo 3: El Juego del Tao y la Sintonía Azarosa',
  29: 'La Gran Coniunctio y el Manifiesto de la Completitud',
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
