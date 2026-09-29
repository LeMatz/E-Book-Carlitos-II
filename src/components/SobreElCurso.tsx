import React from 'react';
import { Video, Download, Award, Calendar, Sparkles } from 'lucide-react';

interface SobreElCursoProps {
  onOpenRegisterModal: () => void;
}

export const SobreElCurso: React.FC<SobreElCursoProps> = ({
  onOpenRegisterModal
}) => {
  return (
    <section id="sobre-el-curso" className="w-full max-w-7xl mx-auto px-2 sm:px-4 my-8 sm:my-12">
      <div className="border-4 border-double border-[#120e0a] p-3.5 sm:p-8 bg-[#e8d7b5] shadow-md">
        
        {/* Title */}
        <div className="text-center border-b-2 border-[#120e0a] pb-3 sm:pb-4 mb-4 sm:mb-6">
          <span className="font-serif text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4a2e19]">
            RESEÑA INFORMATIVA Y CONDICIONES
          </span>
          <h2 className="font-playfair font-black text-3xl sm:text-5xl md:text-6xl text-[#120e0a] uppercase tracking-tight mt-1 ink-text">
            Detalles y Modalidad del Curso
          </h2>
          <p className="font-im-fell text-sm sm:text-xl md:text-2xl text-[#4a2e19] font-semibold mt-1">
            Toda la información práctica que necesitas para sumarte a nuestro grupo de amigos de Carlitos.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6 sm:mb-8">
          
          {/* Card 1: Modalidad Online */}
          <div className="border-2 border-[#120e0a] bg-[#dec8a1] p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#4a2e19] mb-2.5 border-b border-[#120e0a] pb-2">
                <Video className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#120e0a]" />
                <h3 className="font-playfair font-bold text-base sm:text-lg md:text-xl uppercase text-[#120e0a]">
                  Modalidad Online
                </h3>
              </div>
              <p className="font-old-standard text-sm sm:text-base md:text-lg text-[#120e0a] leading-relaxed">
                Clases en vivo vía Zoom con interacción directa. Grabaciones disponibles 24hs después.
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-[#120e0a]/30 text-xs sm:text-sm font-im-fell text-[#4a2e19] font-bold">
              Acceso ilimitado por 12 meses
            </div>
          </div>

          {/* Card 2: Materiales y Cuadernillos */}
          <div className="border-2 border-[#120e0a] bg-[#dec8a1] p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#4a2e19] mb-2.5 border-b border-[#120e0a] pb-2">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#120e0a]" />
                <h3 className="font-playfair font-bold text-base sm:text-lg md:text-xl uppercase text-[#120e0a]">
                  Material Descargable
                </h3>
              </div>
              <p className="font-old-standard text-sm sm:text-base md:text-lg text-[#120e0a] leading-relaxed">
                E-book gratuito incluido con algo de teoría, ejercicios prácticos y mapas arquetípicos.
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-[#120e0a]/30 text-xs sm:text-sm font-im-fell text-[#4a2e19] font-bold">
              Descargables en PDF
            </div>
          </div>

          {/* Card 3: Clases y Tiempos */}
          <div className="border-2 border-[#120e0a] bg-[#dec8a1] p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#4a2e19] mb-2.5 border-b border-[#120e0a] pb-2">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#120e0a]" />
                <h3 className="font-playfair font-bold text-base sm:text-lg md:text-xl uppercase text-[#120e0a]">
                  Fechas y Horarios
                </h3>
              </div>
              <p className="font-old-standard text-sm sm:text-base md:text-lg text-[#120e0a] leading-relaxed">
                Inicio: <strong>Viernes 21 de agosto</strong>. Duración: 1 único encuentro de 3 horas. Horario: 18:00 hs (ARG)
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-[#120e0a]/30 text-xs sm:text-sm font-im-fell text-[#4a2e19] font-bold">
              Único encuentro
            </div>
          </div>

          {/* Card 4: Certificación */}
          <div className="border-2 border-[#120e0a] bg-[#dec8a1] p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#4a2e19] mb-2.5 border-b border-[#120e0a] pb-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#120e0a]" />
                <h3 className="font-playfair font-bold text-base sm:text-lg md:text-xl uppercase text-[#120e0a]">
                  Certificado de asistencia
                </h3>
              </div>
              <p className="font-old-standard text-sm sm:text-base md:text-lg text-[#120e0a] leading-relaxed">
                Acreditación firmada al finalizar el curso
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-[#120e0a]/30 text-xs sm:text-sm font-im-fell text-[#4a2e19] font-bold">
              Diploma Digital de Participación
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

