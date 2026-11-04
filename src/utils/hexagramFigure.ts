/**
 * Utilidades matemáticas y estructurales para el trazado de hexagramas y trigramas.
 * Garantiza fidelidad canónica absoluta sin depender de ilustraciones estáticas erróneas.
 */

export type LineValue = 6 | 7 | 8 | 9;
export type StaticLineType = 'yin' | 'yang';

export interface TrigramDefinition {
  pinyin: string;
  wadeGiles: string;
  chinese: string;
  symbol: string;
  naturalImage: string;
  quality: string;
  movement: string;
  // Líneas de abajo hacia arriba (1, 2, 3)
  lines: [StaticLineType, StaticLineType, StaticLineType];
}

export const EIGHT_TRIGRAMS: TrigramDefinition[] = [
  {
    pinyin: 'Qián',
    wadeGiles: "Ch'ien",
    chinese: '乾',
    symbol: '☰',
    naturalImage: 'Cielo',
    quality: 'Lo Creativo',
    movement: 'Fuerza generadora, iniciativa pura',
    lines: ['yang', 'yang', 'yang'],
  },
  {
    pinyin: 'Kūn',
    wadeGiles: "K'un",
    chinese: '坤',
    symbol: '☷',
    naturalImage: 'Tierra',
    quality: 'Lo Receptivo',
    movement: 'Entrega, sustento, docilidad fecunda',
    lines: ['yin', 'yin', 'yin'],
  },
  {
    pinyin: 'Zhèn',
    wadeGiles: 'Chen',
    chinese: '震',
    symbol: '☳',
    naturalImage: 'Trueno',
    quality: 'Lo Suscitante',
    movement: 'Despertar, conmoción, impulso inicial',
    lines: ['yang', 'yin', 'yin'],
  },
  {
    pinyin: 'Kǎn',
    wadeGiles: "K'an",
    chinese: '坎',
    symbol: '☵',
    naturalImage: 'Agua',
    quality: 'Lo Abismal',
    movement: 'Peligro, profundidad, flujo que no se detiene',
    lines: ['yin', 'yang', 'yin'],
  },
  {
    pinyin: 'Gèn',
    wadeGiles: 'Ken',
    chinese: '艮',
    symbol: '☶',
    naturalImage: 'Montaña',
    quality: 'El Aquietamiento',
    movement: 'Quietud, discernimiento del límite, detención',
    lines: ['yin', 'yin', 'yang'],
  },
  {
    pinyin: 'Xùn',
    wadeGiles: 'Sun',
    chinese: '巽',
    symbol: '☴',
    naturalImage: 'Viento / Madera',
    quality: 'Lo Suave',
    movement: 'Penetración sutil, constancia, flexibilidad',
    lines: ['yin', 'yang', 'yang'],
  },
  {
    pinyin: 'Lí',
    wadeGiles: 'Li',
    chinese: '離',
    symbol: '☲',
    naturalImage: 'Fuego',
    quality: 'Lo Adherente',
    movement: 'Claridad, lucidez consciente, dependencia luminosa',
    lines: ['yang', 'yin', 'yang'],
  },
  {
    pinyin: 'Duì',
    wadeGiles: 'Tui',
    chinese: '兌',
    symbol: '☱',
    naturalImage: 'Lago',
    quality: 'Lo Sereno',
    movement: 'Alegría compartida, apertura comunicativa',
    lines: ['yang', 'yang', 'yin'],
  },
];

/**
 * Convierte un valor de tirada (6, 7, 8, 9) en su tipo estático inicial.
 */
export function getInitialLineType(val: LineValue): StaticLineType {
  return val === 7 || val === 9 ? 'yang' : 'yin';
}

/**
 * Calcula la línea resultante de la mutación:
 * 6 (yin mutante) -> 7 (yang)
 * 9 (yang mutante) -> 8 (yin)
 * 7 (yang fijo) -> 7 (yang)
 * 8 (yin fijo) -> 8 (yin)
 */
export function deriveLine(val: LineValue): LineValue {
  if (val === 6) return 7;
  if (val === 9) return 8;
  return val;
}

/**
 * Deriva las seis líneas completas de un hexagrama primario al secundario (tendencia).
 */
export function deriveHexagramLines(lines: LineValue[]): LineValue[] {
  return lines.map(deriveLine);
}

/**
 * Identifica si un valor de línea es mutante (6 o 9).
 */
export function isMovingLine(val: LineValue): boolean {
  return val === 6 || val === 9;
}
