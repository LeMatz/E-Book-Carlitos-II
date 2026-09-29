import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/courseData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { WhatsappIcon } from './VintageSvgIcons';

interface FaqSectionProps {
  onOpenRegisterModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenRegisterModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full max-w-7xl mx-auto px-2 sm:px-4 my-8 sm:my-12">
      <div className="border-4 border-double border-[#120e0a] p-3.5 sm:p-8 bg-[#e8d7b5] shadow-md">
        
        {/* Header */}
        <div className="text-center border-b-2 border-[#120e0a] pb-3 sm:pb-4 mb-4 sm:mb-6">
          <span className="font-serif text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4a2e19]">
            CONSULTAS DUDAS Y ACLARACIONES
          </span>
          <h2 className="font-playfair font-black text-3xl sm:text-5xl md:text-6xl text-[#120e0a] uppercase tracking-tight mt-1 ink-text">
            Preguntas Frecuentes
          </h2>
          <p className="font-im-fell text-sm sm:text-xl md:text-2xl text-[#4a2e19] font-semibold mt-1">
            Respuestas a las inquietudes más habituales planteadas por nuestros futuros viajeros.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border-2 border-[#120e0a] bg-[#dec8a1] transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-3.5 sm:p-5 flex items-center justify-between gap-3 cursor-pointer hover:bg-[#f1e2c3] transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-playfair font-black text-lg sm:text-2xl text-[#4a2e19]">
                      Q{idx + 1}.
                    </span>
                    <h3 className="font-playfair font-bold text-sm sm:text-xl md:text-2xl text-[#120e0a] uppercase leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#120e0a] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#120e0a] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-6 border-t border-[#120e0a] bg-[#f1e2c3] font-old-standard text-sm sm:text-lg md:text-xl text-[#120e0a] leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to action at bottom of FAQ */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 border-2 border-[#120e0a] bg-[#120e0a] text-[#e8d7b5] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-playfair font-bold text-base sm:text-xl md:text-2xl uppercase text-[#e8d7b5]">
              ¿Tienes alguna duda adicional que no figure aquí?
            </h4>
            <p className="font-im-fell text-xs sm:text-base text-[#dec8a1] mt-1 font-medium">
              Escribe directamente a nuestra secretaría académica o solicita asistencia personalizada.
            </p>
          </div>

          <button
            onClick={onOpenRegisterModal}
            className="bg-[#4a2e19] text-[#e8d7b5] font-playfair font-bold text-xs sm:text-sm md:text-base uppercase px-5 py-3 hover:bg-[#dec8a1] hover:text-[#120e0a] transition-colors cursor-pointer shrink-0 flex items-center gap-2 shadow-xs"
          >
            <WhatsappIcon className="w-5 h-5 text-[#25D366]" />
            <span>Contactar o Inscribirse</span>
          </button>
        </div>

      </div>
    </section>
  );
};

