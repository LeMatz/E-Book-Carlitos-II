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
  6: 'La Línea de Fusión Yo-Arquetipo',
  7: 'La Proyección Arquetípica: El Espejo del Mundo Exterior',
  8: 'La Inflación Psíquica: Cuando el Yo Se Confunde con el Arquetipo',
  9: 'La Posesión Arquetípica: Cuando el Yo Pierde el Timón',
  10: 'El Self / Sí-Mismo y la Distancia Justa',
  11: 'El Sueño como Mensajero Autónomo y Compensatorio',
  12: 'Los Símbolos y su Lenguaje en los Sueños',
  13: 'La Estructura Dramática del Sueño Junguiano',
  14: 'Uso Práctico de la Estructura Dramática del Sueño',
  15: 'Imaginación Activa y Amplificación Simbólica en los Sueños',
  16: 'El Escarabajo Dorado de Küsnacht',
  17: 'Causalidad vs. Sincronicidad: El Tiempo Cualitativo',
  18: 'El Esquema de la Cuaternidad: El Gráfico de Jung',
  19: 'Los Arquetipos Psicoides: El Puente entre mente y Materia',
  20: 'La Brújula del Destino: Señales en la Vida Cotidiana',
  21: 'Jung y el Libro de las Mutaciones',
  22: 'El mapa del viaje: la consulta de punta a punta',
  23: 'El arte de formular la pregunta',
  24: 'Anatomía del hexagrama y aritmética de la tirada',
  25: 'La estructura de la lectura: juicio, imagen y mutaciones',
  26: 'Dos lentes para profundizar: posiciones y trigramas',
  27: 'Una tirada completa: el caso del prólogo de Jung',
  28: 'Práctica guiada: tu primera tirada',
  29: 'Protocolo 1: Bitácora de Sueños en Cuatro Actos',
  30: 'Protocolo 2: Tres Tristes Tricksters',
  31: 'Protocolo 2: Tres Tristes Tricksters',
  32: 'Protocolo 3: El Juego del Tao y la Sintonía Azarosa',
  33: 'La Gran Coniunctio y el Manifiesto de la Completitud',
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
