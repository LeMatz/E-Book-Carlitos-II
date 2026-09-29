import React, { useState } from 'react';
import { OrnamentalDivider } from './OrnamentalDivider';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { WhatsappIcon } from './VintageSvgIcons';

interface NoticiaDelDiaProps {
  onOpenRegisterModal: () => void;
}

export const NoticiaDelDia: React.FC<NoticiaDelDiaProps> = ({
  onOpenRegisterModal
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="noticia-del-dia" className="w-full max-w-7xl mx-auto px-2 sm:px-4 my-8 sm:my-12">
      {/* Newspaper Article Frame */}
      <div className="border-2 border-[#120e0a] p-3.5 sm:p-8 bg-[#e8d7b5] shadow-md relative">
        
        {/* Newspaper Section Kicker */}
        <div className="flex items-center justify-between border-b border-[#120e0a] pb-2 mb-4 text-[10px] sm:text-xs font-serif font-bold uppercase tracking-widest text-[#4a2e19]">
          <span>EDITORIAL DESTACADA</span>
          <span className="hidden sm:inline">ANÁLISIS DE ÉPOCA Y FILOSOFÍA APLICADA</span>
          <span>PÁG. 02</span>
        </div>

        {/* Main Article Headline */}
        <div className="text-center my-2 sm:my-4">
          <h2 className="font-playfair font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-[#120e0a] uppercase tracking-tight leading-tight ink-text">
            ¿Por qué Jung sigue más vigente que nunca?
          </h2>
          <p className="font-im-fell text-base sm:text-2xl text-[#4a2e19] max-w-3xl mx-auto mt-3 font-semibold">
            En una era hiperconectada y saturada de información, el ser humano padece la más profunda de las soledades: la separación de su propio mundo interior.
          </p>
        </div>

        <OrnamentalDivider variant="flourish" className="my-4 sm:my-6" />

        {/* Collapsible Article Button */}
        <div className="text-center my-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 bg-[#120e0a] text-[#e8d7b5] font-playfair text-xs sm:text-sm uppercase font-bold py-3 px-6 hover:bg-[#4a2e19] transition-colors cursor-pointer border border-[#e8d7b5]/40 shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-[#dec8a1]" />
            <span>{isExpanded ? 'Plegar Artículo Editorial' : 'Leer Artículo Editorial Completo'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-[#dec8a1]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#dec8a1]" />
            )}
          </button>
        </div>

        {/* Collapsible Article Content with ENLARGED FONT SIZE */}
        {isExpanded && (
          <div className="my-6 pt-6 border-t-2 border-double border-[#120e0a] bg-[#f2e6d0]/80 p-4 sm:p-8 border border-[#120e0a]/40 animate-fadeIn rounded-xs shadow-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 font-old-standard text-lg sm:text-2xl md:text-3xl text-[#120e0a] leading-relaxed text-justify">
              <div className="space-y-4">
                <p className="text-justify leading-relaxed">
                  <span className="font-playfair float-left text-[3.2rem] sm:text-[3.5rem] leading-[0.8] pt-1 pr-2.5 pb-0.5 font-black text-[#120e0a] select-none inline-block">
                    V
                  </span>
                  ivimos en un mundo repleto de datos, métricas y notificaciones del celu. Sin embargo, nunca antes el individuo moderno se había sentido tan ajeno a sus propias pasiones, tan desgastado por la ansiedad o tan desorientado respecto a su misión existencial.
                </p>
                <p>
                  Carlitos (yo le digo así porque es mi amigo) comprendió, hace casi un siglo, que la sensación de vacío, las crisis de mediana edad y los bloqueos creativos no son fallos de fábrica que deban curarse, sino llamados urgentes de nuestros instintos exigiendo renovación.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Mientras que hoy en día se busca adaptar a la persona a las exigencias externas, el camino junguiano invita a un viaje en sentido opuesto: hacia las profundidades del nuestro interior, donde aguardan los símbolos vivos y las respuestas verdaderas.
                </p>
                <p>
                  A través de este curso, no aprenderás teorías frías para acumular cultura general. Aprenderás a dialogar con tus símbolos internos y los de tus consultantes, transformando la teoría en una poderosa brújula cotidiana.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#120e0a]/30 text-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-1.5 font-serif text-sm uppercase tracking-widest text-[#4a2e19] hover:text-[#120e0a] font-bold cursor-pointer"
              >
                <ChevronUp className="w-4 h-4" />
                <span>Plegar Artículo Editorial</span>
              </button>
            </div>
          </div>
        )}

        {/* Separated Box: LO QUE JUNG NOS ENSEÑA A DECODIFICAR */}
        <div className="mt-6 bg-[#dec8a1] p-5 sm:p-7 border-2 border-[#120e0a] max-w-3xl mx-auto shadow-xs">
          <h4 className="font-playfair font-bold text-base sm:text-xl md:text-2xl uppercase text-[#120e0a] border-b border-[#120e0a] pb-2 text-center tracking-wider flex items-center justify-center gap-2">
            <span>LO QUE JUNG NOS ENSEÑA A DECODIFICAR:</span>
          </h4>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 font-cormorant text-lg sm:text-xl font-semibold text-[#120e0a]">
            <li className="flex items-start gap-2 bg-[#e8d7b5]/60 p-2.5 border border-[#120e0a]/20">
              <span className="text-[#4a2e19] mt-0.5">❖</span>
              <span><strong>Los Símbolos:</strong> El lenguaje secreto de la intuición.</span>
            </li>
            <li className="flex items-start gap-2 bg-[#e8d7b5]/60 p-2.5 border border-[#120e0a]/20">
              <span className="text-[#4a2e19] mt-0.5">❖</span>
              <span><strong>Los Sueños:</strong> Mensajes no leídos de la psique.</span>
            </li>
            <li className="flex items-start gap-2 bg-[#e8d7b5]/60 p-2.5 border border-[#120e0a]/20">
              <span className="text-[#4a2e19] mt-0.5">❖</span>
              <span><strong>La Sombra:</strong> El tesoro oculto tras la represión.</span>
            </li>
            <li className="flex items-start gap-2 bg-[#e8d7b5]/60 p-2.5 border border-[#120e0a]/20">
              <span className="text-[#4a2e19] mt-0.5">❖</span>
              <span><strong>Las Emociones:</strong> Brújula fisiológica de sentido.</span>
            </li>
          </ul>

          <div className="mt-5 pt-3 border-t border-[#120e0a] text-center">
            <button
              onClick={onOpenRegisterModal}
              className="w-full sm:w-auto mx-auto bg-[#120e0a] text-[#e8d7b5] font-playfair text-xs sm:text-sm uppercase font-bold py-2.5 px-6 hover:bg-[#4a2e19] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              <WhatsappIcon className="w-4 h-4 text-[#25D366]" />
              Comenzar Mi Formación
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

