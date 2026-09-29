import React, { useState, useEffect } from 'react';
import { TARGET_AUDIENCE } from '../data/courseData';
import { Compass, Feather, Users, BookOpen, CheckCircle2 } from 'lucide-react';
import { WhatsappIcon } from './VintageSvgIcons';

interface ParaQuienEsProps {
  onOpenRegisterModal: () => void;
}

export const ParaQuienEs: React.FC<ParaQuienEsProps> = ({ onOpenRegisterModal }) => {
  const [selectedId, setSelectedId] = useState<string>(TARGET_AUDIENCE[0].id);
  const [userHasSelected, setUserHasSelected] = useState<boolean>(false);

  // Auto-rotate tabs every 2.5s until user manually selects a tab
  useEffect(() => {
    if (userHasSelected) return;

    const interval = setInterval(() => {
      setSelectedId((currentId) => {
        const currentIndex = TARGET_AUDIENCE.findIndex((p) => p.id === currentId);
        const nextIndex = (currentIndex + 1) % TARGET_AUDIENCE.length;
        return TARGET_AUDIENCE[nextIndex].id;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [userHasSelected]);

  const handleSelect = (id: string) => {
    setUserHasSelected(true);
    setSelectedId(id);
  };

  return (
    <section id="para-quien" className="w-full max-w-7xl mx-auto px-2 sm:px-4 my-8 sm:my-12">
      <div className="border-4 border-double border-[#120e0a] p-3.5 sm:p-8 bg-[#e8d7b5] shadow-md">
        
        {/* Section Title */}
        <div className="text-center border-b-2 border-[#120e0a] pb-3 sm:pb-4 mb-4 sm:mb-6">
          <span className="font-serif text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4a2e19]">
            DIRECTORIO DE PERFILES Y LECTORES
          </span>
          <h2 className="font-playfair font-black text-3xl sm:text-5xl md:text-6xl text-[#120e0a] uppercase tracking-tight mt-1 ink-text">
            ¿Para quién está diseñado este curso?
          </h2>
          <p className="font-serif text-sm sm:text-xl md:text-2xl text-[#4a2e19] font-semibold mt-1">
            Un espacio plural de aprendizaje ideado tanto para profesionales del desarrollo humano como para buscadores individuales.
          </p>
        </div>

        {/* Profile Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {TARGET_AUDIENCE.map((profile) => {
            const isSelected = profile.id === selectedId;
            return (
              <button
                key={profile.id}
                onClick={() => handleSelect(profile.id)}
                className={`font-playfair font-bold text-xs sm:text-sm md:text-base uppercase px-3.5 sm:px-5 py-2.5 border transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#120e0a] text-[#e8d7b5] border-[#120e0a] shadow-xs scale-102'
                    : 'bg-[#dec8a1] text-[#120e0a] border-[#120e0a] hover:bg-[#f1e2c3]'
                }`}
              >
                {profile.iconName === 'Compass' && <Compass className="w-4 h-4" />}
                {profile.iconName === 'Feather' && <Feather className="w-4 h-4" />}
                {profile.iconName === 'Users' && <Users className="w-4 h-4" />}
                {profile.iconName === 'BookOpen' && <BookOpen className="w-4 h-4" />}
                <span>{profile.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Profile Highlight Box with CSS Grid Stacked Overlay (Locks Height to Tallest Profile) */}
        <div className="border-2 border-[#120e0a] bg-[#dec8a1] p-4 sm:p-7 relative shadow-xs grid grid-cols-1">
          {TARGET_AUDIENCE.map((profile) => {
            const isSelected = profile.id === selectedId;
            return (
              <div
                key={profile.id}
                className={`col-start-1 row-start-1 transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'opacity-100 z-10 pointer-events-auto visible'
                    : 'opacity-0 z-0 pointer-events-none invisible'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#120e0a] pb-2 mb-3 sm:mb-4 text-xs sm:text-sm font-serif font-bold text-[#4a2e19] uppercase">
                    <span>PERFIL SELECCIONADO</span>
                    <span>ENFOQUE DE APRENDIZAJE</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
                    <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                      <h3 className="font-playfair font-black text-2xl sm:text-3xl md:text-4xl text-[#120e0a] uppercase leading-tight">
                        {profile.title}
                      </h3>
                      <p className="font-serif text-base sm:text-xl text-[#4a2e19] font-bold">
                        {profile.subtitle}
                      </p>
                      <p className="font-old-standard text-sm sm:text-lg md:text-xl text-[#120e0a] leading-relaxed">
                        {profile.description}
                      </p>
                      <div className="p-3 border border-[#120e0a] bg-[#f1e2c3] font-old-standard text-sm sm:text-base md:text-lg text-[#120e0a] flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#4a2e19] shrink-0" />
                        <span><strong>Beneficio Principal:</strong> {profile.benefit}</span>
                      </div>
                    </div>

                    <div className="lg:col-span-4 border-2 border-[#120e0a] p-4 sm:p-5 bg-[#f1e2c3] text-center space-y-3">
                      <span className="font-serif text-xs sm:text-sm font-bold uppercase text-[#4a2e19] block border-b border-[#120e0a] pb-1.5">
                        ¿ES TU MOMENTO?
                      </span>
                      <p className="font-serif text-sm sm:text-base text-[#120e0a] font-medium italic">
                        &ldquo;Aquello que buscas también te está buscando a ti.&rdquo;
                      </p>
                      <button
                        onClick={onOpenRegisterModal}
                        className="w-full bg-[#4a2e19] text-[#e8d7b5] font-playfair font-bold text-xs sm:text-sm uppercase py-3 px-3 hover:bg-[#120e0a] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                      >
                        <WhatsappIcon className="w-4 h-4 text-[#25D366]" />
                        <span>Unirme como {profile.title}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


