import React from 'react';
import { OrnamentalDivider } from '../OrnamentalDivider';
import { OrnamentalCorner } from '../VintageSvgIcons';
import { Globe, Mail, Instagram, MessageCircle, BookOpen } from 'lucide-react';

export const EbookBackCover: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-6 sm:my-10 p-5 sm:p-10 paper-card border-2 border-[#5a4022] rounded-sm shadow-2xl print-page-sheet min-h-[1100px] sm:min-h-[1280px] flex flex-col justify-between relative overflow-hidden select-none">
      
      {/* Decorative Corners */}
      <div className="absolute top-2 left-2">
        <OrnamentalCorner position="top-left" color="#aa8032" />
      </div>
      <div className="absolute top-2 right-2">
        <OrnamentalCorner position="top-right" color="#aa8032" />
      </div>
      <div className="absolute bottom-2 left-2">
        <OrnamentalCorner position="bottom-left" color="#aa8032" />
      </div>
      <div className="absolute bottom-2 right-2">
        <OrnamentalCorner position="bottom-right" color="#aa8032" />
      </div>

      <div className="border-4 border-double border-[#aa8032] p-5 sm:p-8 relative bg-[#ebdcb8]/40 text-center min-h-[1020px] sm:min-h-[1180px] flex-1 flex flex-col justify-between">
        
        {/* Header Title */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs tracking-[0.25em] font-mono uppercase text-[#aa8032] font-bold">
            <span>✦</span>
            <span>CONTRAPORTADA DE ARCHIVO • VOLUMEN II</span>
            <span>✦</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl font-black text-[#17120d] uppercase tracking-tight ink-text">
            Mi amigo Carlitos II
          </h2>

          <p className="font-cormorant italic text-base sm:text-xl text-[#5a4022] font-semibold max-w-xl mx-auto">
            Arquetipos Profundos, la Alquimia de los Sueños, Sincronicidades y la Sabiduría del I Ching
          </p>
        </div>

        <OrnamentalDivider variant="stars" className="my-3" />

        {/* 1. SINOPSIS */}
        <div className="p-5 sm:p-6 bg-[#ebdcb9] border-2 border-[#5a4022] text-left shadow-md rounded-xs space-y-3">
          <div className="flex items-center justify-between border-b border-[#5a4022]/30 pb-1.5">
            <span className="text-xs font-mono text-[#8f6e28] uppercase font-bold tracking-widest flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#8f6e28]" />
              Sinopsis de la Obra
            </span>
            <span className="text-xs font-mono text-[#aa8032] italic font-semibold">Texto Íntegro</span>
          </div>
          
          <p className="font-old-standard text-xs sm:text-sm text-[#17120d] leading-relaxed text-justify">
            Tras ordenar el mapa básico en el primer volumen, <strong className="font-semibold text-[#8f6e28]">"Mi amigo Carlitos II"</strong> se interna en los territorios más fecundos del legado de Carl Gustav Jung. En este segundo manual ilustrado, el autor comparte charlas de mate con Carlitos para recorrer un panorama integrador de las figuras arquetípicas (Sombra Dorada, Ánima y Ánimus, Senex-Puer) y profundizar en el eje rector: la escala de distancia Yo-arquetipo, la anatomía de la inflación psíquica y la dimensión psicoide que une mente y materia.
          </p>
          
          <p className="font-old-standard text-xs sm:text-sm text-[#17120d] leading-relaxed text-justify">
            Asimismo, la obra ofrece una guía operativa para descifrar los <em>sueños en cuatro actos</em> (exposición, nudo, peripeteia y lysis), el principio de las <em>sincronicidades</em> y su puente entre mente y materia (*Unus Mundus*), y el oráculo milenario del <em>I Ching</em> mediante el lanzamiento ritual de las tres monedas de bronce. Una experiencia viva, artesanal e indispensable para coaches, terapeutas y buscadores de su propio centro.
          </p>
        </div>

        {/* 2. BIO DEL AUTOR + DATOS DE CONTACTO */}
        <div className="my-4 p-5 bg-[#dfcea6]/80 border-2 border-[#5a4022] rounded-xs text-left shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-5">
          {/* Foto del Autor */}
          <div className="shrink-0 flex flex-col items-center gap-2">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xs border-2 border-[#5a4022] p-1 bg-[#ebdcb8] shadow-md overflow-hidden relative">
              <img
                src="/src/assets/images/author_portrait_1786398073343.jpg"
                alt="Matías Pérez Rojas"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://lh3.googleusercontent.com/d/1mMO9kM0h_YtKzRgVQDOk-T7TstyIpgjZ';
                }}
                className="w-full h-full object-cover sepia-vintage rounded-xs"
              />
            </div>
            <span className="text-xs font-mono font-bold text-[#8f6e28] uppercase tracking-wider text-center">
              Matías Pérez Rojas
            </span>
          </div>

          {/* Bio del Autor */}
          <div className="flex-1 space-y-3">
            <div>
              <div className="flex items-center justify-between border-b border-[#5a4022]/30 pb-1.5">
                <h3 className="font-playfair font-bold text-base sm:text-lg text-[#17120d] uppercase tracking-wide">
                  Acerca del Autor
                </h3>
                <span className="text-xs font-mono text-[#8f6e28] font-semibold">
                  Mitología Personal & Docencia
                </span>
              </div>
              <p className="font-old-standard text-xs sm:text-sm text-[#2b1f16] leading-relaxed pt-2 text-justify">
                Trainer y Master Coach en Programación Neurolingüística, docente y divulgador especializado en mitología comparada, arquetipos junguianos y diseño de vida con propósito. Fascinado por el diálogo entre la psicología profunda de Carl Jung y el Viaje del Héroe de Joseph Campbell, Matías acompaña a personas y equipos a traducir los símbolos de su inconsciente en acciones concretas de madurez y soberanía interior.
              </p>
            </div>

            {/* Datos de contacto y Redes Sociales */}
            <div className="pt-2 border-t border-[#5a4022]/30 grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px] sm:text-xs text-[#17120d]">
              <div className="flex items-center gap-2 bg-[#ebdcb8]/70 px-2.5 py-1.5 rounded-xs border border-[#5a4022]/30 min-w-0">
                <Globe className="w-4 h-4 text-[#8f6e28] shrink-0" />
                <span className="font-semibold text-[#17120d] truncate">
                  mi-amigo-carlitos.vercel.app
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[#ebdcb8]/70 px-2.5 py-1.5 rounded-xs border border-[#5a4022]/30 min-w-0">
                <Mail className="w-4 h-4 text-[#8f6e28] shrink-0" />
                <span className="font-semibold text-[#17120d] truncate">
                  mpr1221@hotmail.com
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[#ebdcb8]/70 px-2.5 py-1.5 rounded-xs border border-[#5a4022]/30 min-w-0">
                <Instagram className="w-4 h-4 text-[#8f6e28] shrink-0" />
                <span className="font-semibold text-[#17120d]">
                  @heroismo.cosmogonico
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[#ebdcb8]/70 px-2.5 py-1.5 rounded-xs border border-[#5a4022]/30 min-w-0">
                <MessageCircle className="w-4 h-4 text-[#8f6e28] shrink-0" />
                <span className="font-semibold text-[#17120d]">+54 9 2236830508</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. TAGLINE / FRASE DE CIERRE */}
        <div className="px-5 py-3.5 bg-[#ebdcb8] border-2 border-[#aa8032] rounded-xs text-center my-2 shadow-xs">
          <p className="font-cormorant italic text-base sm:text-xl text-[#17120d] font-bold tracking-wide">
            "Quien mira hacia afuera sueña; quien mira hacia adentro despierta."
          </p>
          <span className="text-[10px] font-mono text-[#8f6e28] block mt-0.5">
            — C. G. Jung • Carta a Fanny Bowditch, 1916
          </span>
        </div>

        {/* 4. SELLO EDITORIAL Y METADATOS DE ARCHIVO (Zero interactive buttons) */}
        <div className="pt-3 border-t border-[#5a4022]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#8f6e28]">
          <div className="flex items-center gap-3">
            <span className="font-playfair font-black text-sm uppercase text-[#17120d]">
              Heroísmo Cosmogónico
            </span>
            <span>•</span>
            <span>Edición de Archivo 2026</span>
          </div>

          <div className="text-center sm:text-right">
            <span>MANUAL ILUSTRADO DE ESTUDIO • TODOS LOS DERECHOS RESERVADOS</span>
          </div>
        </div>

      </div>
    </div>
  );
};
