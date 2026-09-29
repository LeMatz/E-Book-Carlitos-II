import React, { useState } from 'react';
import { RegistrationFormData } from '../types';
import { X, Sparkles, Ticket, Download, BookOpen, ShieldCheck } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    profession: 'Coaching',
    preferredSchedule: 'Viernes 21 de Agosto - 18:00 hs (ARG/CHI)',
    notes: '',
    includeEbook: true
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  const ticketCode = `HC-JUNG-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#120e0a]/80 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl bg-[#e8d7b5] border-4 border-double border-[#120e0a] p-4 sm:p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 p-1.5 border border-[#120e0a] bg-[#dec8a1] hover:bg-[#120e0a] hover:text-[#e8d7b5] transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#120e0a] hover:text-[#e8d7b5]" />
        </button>

        {!submitted ? (
          <div>
            {/* Form Header */}
            <div className="text-center border-b-2 border-[#120e0a] pb-3 sm:pb-4 mb-4 sm:mb-6 pr-6 sm:pr-0">
              <span className="font-serif text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#4a2e19]">
                FORMULARIO DE MATRÍCULA E INSCRIPCIÓN
              </span>
              <h2 className="font-playfair font-black text-xl xs:text-2xl sm:text-4xl uppercase text-[#120e0a] mt-1 ink-text">
                Asegura tu lugar en la cohorte
              </h2>
              <p className="font-im-fell text-xs sm:text-sm text-[#4a2e19] font-semibold mt-0.5">
                Completa tus datos para emitir tu Ticket de Embarque y reservar tu vacante de inmediato.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 font-old-standard text-xs sm:text-sm">
              <div>
                <label className="block font-playfair font-bold uppercase text-[#120e0a] mb-1 text-xs">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Sofía Benítez"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-2.5 bg-[#f1e2c3] border border-[#120e0a] text-[#120e0a] focus:outline-none focus:bg-[#e8d7b5] font-serif"
                />
              </div>

              <div>
                <label className="block font-playfair font-bold uppercase text-[#120e0a] mb-1 text-xs">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  required
                  placeholder="ejemplo@correo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 bg-[#f1e2c3] border border-[#120e0a] text-[#120e0a] focus:outline-none focus:bg-[#e8d7b5] font-serif"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block font-playfair font-bold uppercase text-[#120e0a] mb-1 text-xs">
                    Profesión / Interés
                  </label>
                  <select
                    value={formData.profession}
                    onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                    className="w-full p-2.5 bg-[#f1e2c3] border border-[#120e0a] text-[#120e0a] focus:outline-none font-serif cursor-pointer text-xs"
                  >
                    <option value="Coaching">Coach / Mentor</option>
                    <option value="Psicología">Psicólogo / Terapeuta</option>
                    <option value="Docencia">Docente / Facilitador</option>
                    <option value="Buscador">Buscador Curioso / Particular</option>
                  </select>
                </div>

                <div>
                  <label className="block font-playfair font-bold uppercase text-[#120e0a] mb-1 text-xs">
                    Turno Preferido
                  </label>
                  <select
                    value={formData.preferredSchedule}
                    onChange={(e) => setFormData({ ...formData, preferredSchedule: e.target.value })}
                    className="w-full p-2.5 bg-[#f1e2c3] border border-[#120e0a] text-[#120e0a] focus:outline-none font-serif cursor-pointer text-xs"
                  >
                    <option value="Viernes 21 de Agosto - 18:00 hs (ARG/CHI)">Viernes 18:00 hs (En Vivo Zoom)</option>
                    <option value="Sábado 22 de Agosto - 10:00 hs (ESP/ARG)">Sábado 10:00 hs (En Vivo Zoom)</option>
                    <option value="Grabado en diferido">Grabación Asincrónica (Campus)</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#f1e2c3] border border-[#120e0a] p-2.5 text-center my-2">
                <span className="font-serif text-[10px] uppercase font-bold text-[#4a2e19] block">
                  FACILIDADES DE MATRÍCULA:
                </span>
                <span className="font-playfair font-black text-base sm:text-lg text-[#120e0a] uppercase tracking-wide">
                  3 CUOTAS SIN INTERÉS
                </span>
                <span className="block text-xs font-serif font-bold text-[#4a2e19] mt-0.5">
                  Válido para tarjetas de Débito y Crédito
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#120e0a] text-[#e8d7b5] font-playfair font-bold text-xs sm:text-base uppercase py-3 px-4 hover:bg-[#4a2e19] transition-colors cursor-pointer flex items-center justify-center gap-2 tracking-wider shadow-xs"
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#dec8a1]" />
                  <span>Confirmar Matrícula y Emitir Ticket</span>
                </button>
              </div>

              <p className="font-im-fell text-[10px] sm:text-[11px] text-[#4a2e19] text-center font-semibold">
                * No se requiere pago inmediato para reservar la vacante. Recibirás las instrucciones de acceso por correo.
              </p>
            </form>
          </div>
        ) : (
          /* CONFIRMATION STATE: VINTAGE BOARDING PASS TICKET */
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center border-b-2 border-[#120e0a] pb-3 sm:pb-4">
              <span className="font-serif text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#4a2e19]">
                MATRÍCULA CONFIRMADA EXITOSAMENTE
              </span>
              <h2 className="font-playfair font-black text-xl sm:text-3xl uppercase text-[#120e0a] mt-1 ink-text">
                ¡Bienvenido/a a la Aventura Interior!
              </h2>
            </div>

            {/* Vintage Ticket Card */}
            <div className="border-4 border-dashed border-[#120e0a] bg-[#dec8a1] p-4 sm:p-6 relative shadow-md">
              <div className="flex items-center justify-between border-b-2 border-[#120e0a] pb-2 sm:pb-3 mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <Ticket className="w-5 h-5 sm:w-6 sm:h-6 text-[#4a2e19]" />
                  <span className="font-playfair font-black text-xs sm:text-base uppercase text-[#120e0a]">
                    TICKET DE EMBARQUE COSMOGÓNICO
                  </span>
                </div>
                <span className="font-mono text-[11px] sm:text-xs font-bold text-[#4a2e19]">
                  {ticketCode}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-old-standard text-xs text-[#120e0a] mb-4">
                <div>
                  <span className="block font-serif font-bold text-[#4a2e19] uppercase text-[10px]">PASAJERO:</span>
                  <span className="font-playfair font-bold text-sm sm:text-base text-[#120e0a]">{formData.fullName}</span>
                </div>
                <div>
                  <span className="block font-serif font-bold text-[#4a2e19] uppercase text-[10px]">CORREO:</span>
                  <span className="font-serif text-xs sm:text-sm">{formData.email}</span>
                </div>
                <div>
                  <span className="block font-serif font-bold text-[#4a2e19] uppercase text-[10px]">CURSO:</span>
                  <span className="font-playfair font-bold">Mi Amigo Carlitos (Carl Jung)</span>
                </div>
                <div>
                  <span className="block font-serif font-bold text-[#4a2e19] uppercase text-[10px]">TURNO CONVOCADO:</span>
                  <span className="font-serif">{formData.preferredSchedule}</span>
                </div>
              </div>

              <div className="border-t border-[#120e0a] pt-3 flex flex-col xs:flex-row items-center justify-between bg-[#f1e2c3] p-3 gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#4a2e19] shrink-0" />
                  <span className="font-im-fell text-xs text-[#120e0a]">
                    Confirmación e instrucciones de acceso enviadas a tu correo. Guarda tu código de ticket.
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={onClose}
                className="bg-[#120e0a] text-[#e8d7b5] font-playfair font-bold text-xs uppercase py-2.5 px-6 hover:bg-[#4a2e19] transition-colors cursor-pointer shadow-xs"
              >
                Cerrar Ventana y Continuar Leyendo
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

