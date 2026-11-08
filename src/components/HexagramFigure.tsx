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
  highlight?: boolean;
}

/**
 * Trazado canónico de una línea de I Ching con estética de grabado oriental:
 * - 7 (yang fijo): barra continua de tinta profunda
 * - 8 (yin fijo): dos segmentos equilibrados con cesura central
 * - 6 (yin mutante): cesura central con marca bermellón '×'
 * - 9 (yang mutante): barra continua con disco solar bermellón '○' en el centro
 */
export const LineSymbol: React.FC<SingleLineSvgProps> = ({
  val,
  width = 118,
  height = 14,
  highlight = false,
}) => {
  const lineType = getInitialLineType(val);
  const strokeColor = highlight ? '#241a12' : '#1d160e';
  const barHeight = Math.max(6, height - 4);
  const centerY = (height - barHeight) / 2;
  const gapWidth = Math.round(width * 0.18);
  const segmentWidth = (width - gapWidth) / 2;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="inline-block overflow-visible shrink-0"
      aria-label={`Línea ${val}: ${lineType} ${isMovingLine(val) ? 'mutante' : 'fija'}`}
    >
      {lineType === 'yang' ? (
        // Trazo continuo Yang (barra sólida con bordes ligeramente suavizados)
        <rect
          x={0}
          y={centerY}
          width={width}
          height={barHeight}
          rx={1.5}
          fill={strokeColor}
        />
      ) : (
        // Trazo partido Yin (dos segmentos armónicos)
        <>
          <rect
            x={0}
            y={centerY}
            width={segmentWidth}
            height={barHeight}
            rx={1.5}
            fill={strokeColor}
          />
          <rect
            x={width - segmentWidth}
            y={centerY}
            width={segmentWidth}
            height={barHeight}
            rx={1.5}
            fill={strokeColor}
          />
        </>
      )}

      {/* Marca mutante 6: '×' bermellón en la cesura central */}
      {val === 6 && (
        <g stroke="#9e2a2b" strokeWidth={2.2} strokeLinecap="round">
          <line
            x1={width / 2 - 4}
            y1={height / 2 - 4}
            x2={width / 2 + 4}
            y2={height / 2 + 4}
          />
          <line
            x1={width / 2 - 4}
            y1={height / 2 + 4}
            x2={width / 2 + 4}
            y2={height / 2 - 4}
          />
        </g>
      )}

      {/* Marca mutante 9: '○' solar en el centro del trazo continuo */}
      {val === 9 && (
        <circle
          cx={width / 2}
          cy={height / 2}
          r={4}
          fill="#faf4e6"
          stroke="#9e2a2b"
          strokeWidth={2.2}
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
  lineWidth = 118,
  isDerived = false,
}) => {
  // Orden visual en pantalla: de arriba (línea 6, índice 5) a abajo (línea 1, índice 0)
  const displayedOrder = [5, 4, 3, 2, 1, 0];

  const showPositions = annotate === 'positions' || annotate === 'both';
  const showTrigrams = annotate === 'trigrams' || annotate === 'both';

  return (
    <div className="flex flex-col items-center">
      {name && (
        <div className="mb-2 text-center">
          <span className="font-playfair text-xs sm:text-[13px] font-bold text-[#17120d] uppercase tracking-wider block">
            {name}
          </span>
          {isDerived && (
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#7a5820] block">
              Tendencia de evolución
            </span>
          )}
        </div>
      )}

      <div className="relative flex items-center justify-center gap-2 sm:gap-3">
        {/* Anotación de Trigramas con corchetes tipográficos a la izquierda */}
        {showTrigrams && (
          <div className="flex flex-col justify-between h-[116px] py-0.5 text-right pr-2 border-r-2 border-[#8f6e28]/60">
            <div className="flex flex-col justify-center h-[52px]">
              <span className="font-mono text-[9px] font-bold text-[#17120d] leading-tight block">
                Superior
              </span>
              <span className="font-mono text-[8px] text-[#7a5820] leading-tight block">
                El entorno
              </span>
            </div>
            <div className="flex flex-col justify-center h-[52px]">
              <span className="font-mono text-[9px] font-bold text-[#17120d] leading-tight block">
                Inferior
              </span>
              <span className="font-mono text-[8px] text-[#7a5820] leading-tight block">
                Lo propio
              </span>
            </div>
          </div>
        )}

        {/* Las 6 líneas del hexagrama en caja compacta */}
        <div className="flex flex-col gap-1.5 py-0.5">
          {displayedOrder.map((arrayIdx) => {
            const lineNum = arrayIdx + 1; // 1 a 6
            const val = lines[arrayIdx];
            const isHighlighted = highlightLines.includes(lineNum);
            const isMutating = isMovingLine(val);

            return (
              <div
                key={lineNum}
                className={`flex items-center gap-2 px-1 py-0.5 rounded-xs transition-colors ${
                  isHighlighted
                    ? 'bg-[#d8c399]/70 ring-1 ring-[#8f6e28]/80'
                    : ''
                }`}
              >
                {showPositions && (
                  <span
                    className={`font-mono text-[10px] w-4 text-center font-bold shrink-0 ${
                      isHighlighted
                        ? 'text-[#9e2a2b] bg-[#ebdcb8] rounded-xs'
                        : 'text-[#7a5820]'
                    }`}
                  >
                    {lineNum}
                  </span>
                )}

                <LineSymbol
                  val={val}
                  width={lineWidth}
                  height={13}
                  highlight={isHighlighted}
                />

                {isMutating && !isDerived && (
                  <span className="font-mono text-[8px] uppercase tracking-wider font-bold text-[#9e2a2b] whitespace-nowrap">
                    {val === 6 ? '6 ×' : '9 ○'}
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

  // Ajuste de ancho de contenedor según si es figura simple o compuesta
  // Esto elimina los espacios vacíos laterales que hacían ver fea la caja
  const containerMaxWidth = showDerived ? 'max-w-[460px]' : 'max-w-[340px]';

  return (
    <figure
      className={`my-2.5 mx-auto p-3 sm:p-3.5 bg-[#f5ede0] border-2 border-double border-[#8f6e28]/80 shadow-md rounded-xs ${containerMaxWidth}`}
    >
      {/* Encabezado decorativo de la placa */}
      <div className="flex items-center justify-between border-b border-[#8f6e28]/40 pb-1 mb-2.5 text-[9px] font-mono uppercase tracking-widest text-[#7a5820]">
        <span>Diagrama Canónico</span>
        <span className="text-[#8f6e28]">I Ching</span>
      </div>

      <div className="flex items-center justify-center gap-3 sm:gap-6">
        <HexagramStack
          lines={lines}
          name={primaryName}
          annotate={annotate}
          highlightLines={highlightLines}
          lineWidth={showDerived ? 104 : 124}
        />

        {showDerived && (
          <>
            {/* Puente central de mutación */}
            <div className="flex flex-col items-center justify-center px-1 text-[#8f6e28] shrink-0">
              <span className="font-mono text-[8px] uppercase font-bold tracking-wider text-[#9e2a2b] mb-0.5">
                Mutación
              </span>
              <svg
                width="28"
                height="16"
                viewBox="0 0 28 16"
                className="fill-none stroke-current text-[#8f6e28]"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="2" y1="8" x2="22" y2="8" />
                <polyline points="15 3 22 8 15 13" />
              </svg>
              <span className="font-mono text-[8px] text-[#5a4022] mt-0.5">
                Tendencia
              </span>
            </div>

            <HexagramStack
              lines={derivedLines}
              name={derivedName}
              annotate={annotate === 'positions' || annotate === 'both' ? 'positions' : undefined}
              lineWidth={104}
              isDerived={true}
            />
          </>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2.5 pt-1.5 border-t border-[#8f6e28]/30 text-center font-cormorant italic text-xs text-[#3a281c] font-semibold leading-snug">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

/**
 * Trazado SVG canónico de un trigrama (3 líneas apiladas de abajo hacia arriba)
 * para su despliegue en celdas de tabla.
 */
export const TrigramDrawing: React.FC<{
  name: string;
  width?: number;
  height?: number;
}> = ({ name, width = 42, height = 24 }) => {
  const trigram = EIGHT_TRIGRAMS.find(
    (t) =>
      t.pinyin.toLowerCase() === name.toLowerCase() ||
      t.wadeGiles.toLowerCase() === name.toLowerCase() ||
      t.naturalImage.toLowerCase().includes(name.toLowerCase())
  );

  if (!trigram) return null;

  // Dibujar de arriba (índice 2) a abajo (índice 0)
  return (
    <div className="inline-flex flex-col gap-0.5 items-center justify-center py-0.5">
      {[2, 1, 0].map((idx) => {
        const type = trigram.lines[idx];
        const val: LineValue = type === 'yang' ? 7 : 8;
        return (
          <LineSymbol
            key={idx}
            val={val}
            width={width}
            height={height / 3}
          />
        );
      })}
    </div>
  );
};
