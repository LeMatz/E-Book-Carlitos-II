import React from 'react';
import { Clock, CreditCard, Landmark, Wallet } from 'lucide-react';
import { WhatsappIcon } from './VintageSvgIcons';

interface CtaFinalProps {
  onOpenRegisterModal: () => void;
}

export const CtaFinal: React.FC<CtaFinalProps> = ({
  onOpenRegisterModal
}) => {
  return (
    <section id="cta-final" className="w-full max-w-7xl mx-auto px-2 sm:px-4 my-10 sm:my-16">
      <div className="border-4 border-double border-[#e8d7b5] p-5 sm:p-12 bg-[#120e0a] text-[#e8d7b5] shadow-2xl relative overflow-hidden text-center">
        
        {/* Decorative corner borders */}
        <div className="absolute top-2 left-2 border-t-2 border-l-2 border-[#e8d7b5] w-6 sm:w-8 h-6 sm:h-8 pointer-events-none" />
        <div className="absolute top-2 right-2 border-t-2 border-r-2 border-[#e8d7b5] w-6 sm:w-8 h-6 sm:h-8 pointer-events-none" />
        <div className="absolute bottom-2 left-2 border-b-2 border-l-2 border-[#e8d7b5] w-6 sm:w-8 h-6 sm:h-8 pointer-events-none" />
        <div className="absolute bottom-2 right-2 border-b-2 border-r-2 border-[#e8d7b5] w-6 sm:w-8 h-6 sm:h-8 pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-5 sm:space-y-7">
          
          <div className="inline-block border border-[#e8d7b5]/40 px-3.5 py-1.5 font-serif text-xs sm:text-sm uppercase tracking-widest text-[#dec8a1]">
            MI AMIGO CARLITOS • CONVOCATORIA OFICIAL
          </div>

          <h2 className="font-playfair font-black text-4xl xs:text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-[#e8d7b5] leading-none">
            INSCRÍBETE AHORA
          </h2>

          <p className="font-im-fell text-xl sm:text-3xl md:text-4xl text-[#dec8a1] font-semibold">
            &ldquo;Comienza el viaje hacia tu mundo interior.&rdquo;
          </p>

          <p className="font-old-standard text-sm sm:text-xl md:text-2xl text-[#e8d7b5]/90 max-w-3xl mx-auto leading-relaxed">
            No dejes que tus instintos esperen otra oportunidad. Súmate al grupo de amigos exclusivos del viernes 21 de agosto y recibe de inmediato tus materiales del curso.
          </p>

          {/* Investment Price Box */}
          <div className="border-2 border-[#e8d7b5]/60 bg-[#24170d] p-5 sm:p-8 max-w-2xl mx-auto shadow-xl my-4 sm:my-6 text-center relative">
            <div className="font-serif text-xs sm:text-sm uppercase tracking-widest text-[#dec8a1] font-bold mb-2">
              INVERSIÓN ÚNICA TOTAL DEL CURSO
            </div>
            <div className="py-2 space-y-1.5">
              <div className="font-playfair font-black text-4xl sm:text-6xl md:text-7xl text-[#e8d7b5] tracking-tight">
                $30.000 ARS
              </div>
              <div className="font-playfair font-black text-2xl sm:text-4xl text-[#dec8a1] pt-1">
                U$D 30
              </div>
              <div className="font-serif text-sm sm:text-base text-[#dec8a1]/90 font-medium italic">
                (Fuera de Argentina)
              </div>
            </div>
            <p className="font-old-standard text-base sm:text-xl md:text-2xl text-[#e8d7b5] font-semibold mt-2 border-t border-[#e8d7b5]/20 pt-3">
              (Justamente lo que costaría una cena con amigos)
            </p>

            {/* High-visibility Payment Options Highlight Box */}
            <div className="mt-5 pt-3.5 bg-[#e8d7b5] text-[#120e0a] p-4 sm:p-5 border-2 border-[#e8d7b5] shadow-md space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 border-b border-[#120e0a]/20 pb-3">
                <div className="flex items-center gap-2 font-playfair font-black text-lg sm:text-2xl uppercase tracking-wider text-[#120e0a]">
                  <CreditCard className="w-6 h-6 sm:w-7 sm:h-7 text-[#4a2e19]" />
                  <span>3 CUOTAS SIN INTERÉS</span>
                </div>
                <span className="hidden sm:inline font-bold text-[#4a2e19]">•</span>
                <div className="flex items-center gap-2 font-serif text-sm sm:text-base font-bold text-[#4a2e19] uppercase tracking-wider">
                  DÉBITO Y CRÉDITO
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 font-serif text-xs sm:text-sm font-bold text-[#120e0a] uppercase tracking-wider">
                <Landmark className="w-4 h-4 text-[#4a2e19] shrink-0" />
                <Wallet className="w-4 h-4 text-[#4a2e19] shrink-0" />
                <span>Transferencia con cuenta bancaria y billeteras virtuales</span>
              </div>
            </div>
          </div>

          {/* Registration Button */}
          <div className="pt-2 sm:pt-4 flex flex-col items-center justify-center gap-2">
            <button
              onClick={onOpenRegisterModal}
              className="w-full sm:w-auto bg-[#e8d7b5] text-[#120e0a] font-playfair font-black text-base sm:text-2xl md:text-3xl uppercase py-4 sm:py-5 px-8 sm:px-14 hover:bg-[#dec8a1] transition-all cursor-pointer shadow-lg tracking-wider border-2 border-[#e8d7b5] flex items-center justify-center gap-3 sm:gap-4 group"
            >
              <WhatsappIcon className="w-7 h-7 sm:w-9 sm:h-9 text-[#25D366]" />
              <span>RESERVAR MI LUGAR AHORA</span>
            </button>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-[#e8d7b5]/20 flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm font-serif uppercase tracking-widest text-[#dec8a1]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> Inicio: Viernes 21 de Agosto
            </span>
            <span className="hidden xs:inline">•</span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-[#dec8a1]" /> 3 cuotas sin interés
            </span>
            <span className="hidden xs:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Landmark className="w-4 h-4 text-[#dec8a1]" /> Transferencia y billeteras virtuales
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

