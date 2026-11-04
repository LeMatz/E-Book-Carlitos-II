import React from 'react';
import { HexagramFigureData } from '../types/ebook';
import {
  LineValue,
  getInitialLineType,
  deriveHexagramLines,
  isMovingLine,
  EIGHT_TRIGRAMS,
} from '../utils/hexagramFigure';

interface SingleLineSvgProps {
  val: LineValue;
  width?: number;
  height?: number;
  strokeWidth?: number;
  color?: string;
  highlight?: boolean;
}

/**
 * Traza SVG canónico de una línea de I Ching:
 * - 7 (yang fijo): trazo continuo
 * - 8 (yin fijo): trazo partido con espacio al centro
 * - 6 (yin mutante): trazo partido con signo '×' en el centro
 * - 9 (yang mutante): trazo continuo con signo '○' en el centro
 */
export const LineSymbol: React.FC<SingleLineSvgProps> = ({
  val,
  width = 120,
  height = 16,
  strokeWidth = 6,
  color = '#17120d',
  highlight = false,
}) => {
  const lineType = getInitialLineType(val);
  const strokeColor = highlight ? '#8f6e28' : color;
  const centerY = height / 2;
  const gap = width * 0.18;
  const halfSegment = (width - gap) / 2;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="inline-block overflow-visible"
      aria-label={`Línea ${val}: ${lineType} ${isMovingLine(val) ? 'mutante' : 'fija'}`}
    >
      {lineType === 'yang' ? (
        // Trazo continuo
        <line
          x1={0}
          y1={centerY}
          x2={width}
          y2={centerY}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      ) : (
        // Trazo partido (dos segmentos)
        <>
          <line
            x1={0}
            y1={centerY}
            x2={halfSegment}
            y2={centerY}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <line
            x1={width - halfSegment}
            y1={centerY}
            x2={width}
            y2={centerY}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </>
      )}

      {/* Marca mutante central: 6 = × (yin mutante), 9 = ○ (yang mutante) */}
      {val === 6 && (
        <g stroke={strokeColor} strokeWidth={2} strokeLinecap="round">
          <line x1={width / 2 - 3.5} y1={centerY - 3.5} x2={width / 2 + 3.5} y2={centerY + 3.5} />
          <line x1={width / 2 - 3.5} y1={centerY + 3.5} x2={width / 2 + 3.5} y2={centerY - 3.5} />
        </g>
      )}
      {val === 9 && (
        <circle
          cx={width / 2}
          cy={centerY}
          r={4}
          fill="#fbf7ee"
          stroke={strokeColor}
          strokeWidth={2}
        />
      )}
    </svg>
  );
};

interface HexagramStackProps {
  lines: LineValue[]; // Índice 0 = Línea 1 (base), Índice 5 = Línea 6 (tope)
  name?: string;
  annotate?: 'positions' | 'trigrams' | 'both';
  highlightLines?: number[]; // 1-indexado (ej. [2, 3])
  lineWidth?: number;
  isDerived?: boolean;
}

export const HexagramStack: React.FC<HexagramStackProps> = ({
  lines,
  name,
  annotate,
  highlightLines = [],
  lineWidth = 110,
  isDerived = false,
}) => {
  // Las líneas se trazan en pantalla de arriba hacia abajo visualmente,
  // pero corresponden de abajo hacia arriba en orden: 6 (arriba) a 1 (abajo).
  const displayedOrder = [5, 4, 3, 2, 1, 0]; // Índices del array: 5 es la línea 6, 0 es la línea 1

  const showPositions = annotate === 'positions' || annotate === 'both';
  const showTrigrams = annotate === 'trigrams' || annotate === 'both';

  return (
    <div className="flex flex-col items-center">
      {name && (
        <h4 className="font-playfair text-xs sm:text-sm font-bold text-[#17120d] mb-2 tracking-wide uppercase text-center">
          {name}
        </h4>
      )}

      <div className="relative flex items-center justify-center gap-2">
        {/* Anotación de Trigramas a la izquierda */}
        {showTrigrams && (
          <div className="flex flex-col justify-between h-[126px] py-1 text-right pr-1 border-r border-[#8f6e28]/50">
            <div className="flex flex-col justify-center h-[58px] text-[10px] font-mono leading-tight text-[#7a5820]">
              <span className="font-bold text-[#17120d]">Trigrama Superior</span>
              <span className="italic text-[9px] text-[#5a4022]">El entorno / externo</span>
            </div>
            <div className="flex flex-col justify-center h-[58px] text-[10px] font-mono leading-tight text-[#7a5820]">
              <span className="font-bold text-[#17120d]">Trigrama Inferior</span>
              <span className="italic text-[9px] text-[#5a4022]">Lo propio / interno</span>
            </div>
          </div>
        )}

        {/* Las 6 líneas del hexagrama */}
        <div className="flex flex-col gap-2.5 py-1">
          {displayedOrder.map((arrayIdx) => {
            const lineNum = arrayIdx + 1; // 1 to 6
            const val = lines[arrayIdx];
            const isHighlighted = highlightLines.includes(lineNum);
            const isMutating = isMovingLine(val);

            return (
              <div key={lineNum} className="flex items-center gap-2">
                {showPositions && (
                  <span
                    className={`font-mono text-[10px] w-5 text-right font-bold ${
                      isHighlighted ? 'text-[#8f6e28]' : 'text-[#7a5820]'
                    }`}
                  >
                    {lineNum}
                  </span>
                )}
                <div
                  className={`p-1 rounded-xs transition-colors ${
                    isHighlighted
                      ? 'bg-[#d8c399]/60 border border-[#8f6e28]'
                      : ''
                  }`}
                >
                  <LineSymbol
                    val={val}
                    width={lineWidth}
                    height={13}
                    strokeWidth={5}
                    highlight={isHighlighted}
                  />
                </div>
                {isMutating && !isDerived && (
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8f6e28] font-bold">
                    {val === 6 ? 'yin mutante (×)' : 'yang mutante (○)'}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const HexagramFigure: React.FC<HexagramFigureData> = ({
  lines,
  showDerived = false,
  annotate,
  caption,
  primaryName,
  derivedName,
  highlightLines,
}) => {
  const derivedLines = deriveHexagramLines(lines);

  return (
    <figure className="my-3 p-3 sm:p-4 bg-[#fbf7ee] border border-[#aa8032]/70 shadow-sm rounded-xs max-w-xl mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        <HexagramStack
          lines={lines}
          name={primaryName}
          annotate={annotate}
          highlightLines={highlightLines}
        />

        {showDerived && (
          <>
            <div className="flex flex-col items-center justify-center text-[#8f6e28]">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider mb-1">
                Mutación
              </span>
              <svg
                width="32"
                height="20"
                viewBox="0 0 32 20"
                className="fill-none stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="2" y1="10" x2="26" y2="10" />
                <polyline points="18 4 26 10 18 16" />
              </svg>
              <span className="font-mono text-[9px] text-[#5a4022] mt-1 text-center">
                Tendencia
              </span>
            </div>

            <HexagramStack
              lines={derivedLines}
              name={derivedName}
              annotate={annotate === 'positions' || annotate === 'both' ? 'positions' : undefined}
              lineWidth={100}
              isDerived={true}
            />
          </>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2.5 pt-2 border-t border-[#aa8032]/30 text-center font-cormorant italic text-xs sm:text-sm text-[#3a281c] font-semibold">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

/**
 * Trazado SVG canónico de un trigrama (3 líneas apiladas de abajo hacia arriba).
 */
export const TrigramDrawing: React.FC<{
  name: string;
  width?: number;
  height?: number;
}> = ({ name, width = 48, height = 28 }) => {
  const trigram = EIGHT_TRIGRAMS.find(
    (t) =>
      t.pinyin.toLowerCase() === name.toLowerCase() ||
      t.wadeGiles.toLowerCase() === name.toLowerCase() ||
      t.naturalImage.toLowerCase().includes(name.toLowerCase())
  );

  if (!trigram) return null;

  // Líneas del trigrama: índice 0 = abajo, 1 = medio, 2 = arriba
  // Dibujar en orden visual: arriba (índice 2), medio (1), abajo (0)
  return (
    <div className="inline-flex flex-col gap-1 items-center justify-center py-0.5">
      {[2, 1, 0].map((idx) => {
        const type = trigram.lines[idx];
        const val: LineValue = type === 'yang' ? 7 : 8;
        return (
          <LineSymbol
            key={idx}
            val={val}
            width={width}
            height={height / 3}
            strokeWidth={3}
          />
        );
      })}
    </div>
  );
};
