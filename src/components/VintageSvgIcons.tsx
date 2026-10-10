import React from 'react';

// Ornamental Corner Piece (Antique Victorian / Alchemical Corner)
export const OrnamentalCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  color?: string;
}> = ({ position, className = 'w-7 h-7 sm:w-9 sm:h-9', color = '#aa8032' }) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <svg
      viewBox="0 0 50 50"
      className={`${className} ${rotationClass} shrink-0 pointer-events-none transition-transform`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 48 V14 C2 7.37 7.37 2 14 2 H48 M6 44 V16 C6 10.48 10.48 6 16 6 H44"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M10 22 C14 18 18 14 22 10 M14 28 C20 22 22 20 28 14"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle cx="14" cy="14" r="2.5" fill={color} />
      <circle cx="2" cy="2" r="1.5" fill={color} />
      <path
        d="M26 4 C28 10 32 14 38 16 M4 26 C10 28 14 32 16 38"
        stroke={color}
        strokeWidth="0.9"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
};

// Golden Scarab of Jung (The Synchronic Scarabaeus Amulet)
export const GoldenScarabIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-10 h-10',
  color = '#c59b3f',
}) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Radiating sun halo */}
    <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
    <circle cx="50" cy="50" r="41" stroke={color} strokeWidth="0.75" opacity="0.7" />
    
    {/* Sun disc held above head */}
    <circle cx="50" cy="15" r="7" fill={color} />
    <circle cx="50" cy="15" r="9" stroke={color} strokeWidth="1" strokeDasharray="2 2" />
    
    {/* Scarab Head & Clypeus with radiating teeth */}
    <path d="M42 27 C42 22 58 22 58 27 L60 32 C56 34 44 34 40 32 Z" fill={color} />
    <path d="M40 24 L36 21 M45 22 L44 19 M55 22 L56 19 M60 24 L64 21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Pronotum / Thorax */}
    <path d="M34 33 C40 31 60 31 66 33 C68 40 68 44 65 46 C55 48 45 48 35 46 C32 44 32 40 34 33 Z" fill={color} />
    
    {/* Elytra (Wing Cases) with central division line */}
    <path d="M34 47 C44 48 49 48 49 84 C41 82 32 72 32 58 C32 52 33 49 34 47 Z" fill={color} opacity="0.9" />
    <path d="M66 47 C56 48 51 48 51 84 C59 82 68 72 68 58 C68 52 67 49 66 47 Z" fill={color} opacity="0.9" />
    <line x1="50" y1="47" x2="50" y2="85" stroke="#17120d" strokeWidth="1.5" />
    
    {/* Segmented legs */}
    {/* Front legs reaching to solar ball */}
    <path d="M36 35 L24 28 L27 18 L32 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M64 35 L76 28 L73 18 L68 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    
    {/* Middle legs */}
    <path d="M33 46 L20 48 L17 58 L12 60" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M67 46 L80 48 L83 58 L88 60" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    
    {/* Back legs gripping earth / base */}
    <path d="M36 72 L22 76 L25 88 L34 91" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M64 72 L78 76 L75 88 L66 91" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// Antique Chinese Bronze Coins for I Ching (Three coins with square aperture)
export const IChingCoinsIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-12 h-12',
  color = '#c59b3f',
}) => (
  <svg className={className} viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Coin 1 (Left, slightly back) */}
    <circle cx="32" cy="38" r="24" fill="#2b1f16" stroke={color} strokeWidth="2" />
    <circle cx="32" cy="38" r="20" stroke={color} strokeWidth="0.75" strokeDasharray="2 2" />
    <rect x="25" y="31" width="14" height="14" fill="#17120d" stroke={color} strokeWidth="1.5" />
    
    {/* Coin 2 (Right, middle) */}
    <circle cx="88" cy="38" r="24" fill="#2b1f16" stroke={color} strokeWidth="2" />
    <circle cx="88" cy="38" r="20" stroke={color} strokeWidth="0.75" strokeDasharray="2 2" />
    <rect x="81" y="31" width="14" height="14" fill="#17120d" stroke={color} strokeWidth="1.5" />
    
    {/* Coin 3 (Center, foreground) */}
    <circle cx="60" cy="30" r="26" fill="#3a281c" stroke={color} strokeWidth="2.5" />
    <circle cx="60" cy="30" r="22" stroke={color} strokeWidth="1" strokeDasharray="3 2" />
    <rect x="52" y="22" width="16" height="16" fill="#17120d" stroke={color} strokeWidth="2" />
    {/* Archaic character strokes around square */}
    <line x1="60" y1="10" x2="60" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="60" y1="42" x2="60" y2="50" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="40" y1="30" x2="48" y2="30" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="72" y1="30" x2="80" y2="30" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Sol & Luna / Alchemical Coniunctio (Sun and Moon Face)
export const SolAndLunaIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-10 h-10',
  color = '#c59b3f',
}) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="1.5" />
    <circle cx="50" cy="50" r="42" stroke={color} strokeWidth="0.75" strokeDasharray="3 3" />
    
    {/* Radiant Sun rays on left */}
    <path d="M50 8 L50 20 M50 80 L50 92 M12 50 L24 50 M22 22 L31 31 M22 78 L31 69" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M50 14 C30 14 14 30 14 50 C14 70 30 86 50 86" stroke={color} strokeWidth="2" />
    
    {/* Moon Crescent face on right */}
    <path d="M50 18 C67 18 82 32 82 50 C82 68 67 82 50 82 C62 74 68 63 68 50 C68 37 62 26 50 18 Z" fill={color} opacity="0.85" />
    {/* Moon profile eye and nose */}
    <circle cx="62" cy="42" r="1.5" fill="#17120d" />
    <path d="M60 48 C64 50 63 53 60 55" stroke="#17120d" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Antique Nautical / Psychic Compass (La Brújula del Self)
export const AntiqueCompassIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-10 h-10',
  color = '#c59b3f',
}) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="2" />
    <circle cx="50" cy="50" r="41" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
    <circle cx="50" cy="50" r="35" stroke={color} strokeWidth="0.75" />
    
    {/* Cardinal Points */}
    <text x="50" y="22" textAnchor="middle" fill={color} fontSize="8" fontFamily="serif" fontWeight="bold">N</text>
    <text x="50" y="85" textAnchor="middle" fill={color} fontSize="8" fontFamily="serif" fontWeight="bold">S</text>
    <text x="82" y="53" textAnchor="middle" fill={color} fontSize="8" fontFamily="serif" fontWeight="bold">E</text>
    <text x="18" y="53" textAnchor="middle" fill={color} fontSize="8" fontFamily="serif" fontWeight="bold">O</text>
    
    {/* 8-Point Compass Star Needle */}
    {/* North Point (Filled / Darkened) */}
    <polygon points="50,24 54,46 50,50" fill={color} />
    <polygon points="50,24 46,46 50,50" fill="#7a5820" />
    {/* South Point */}
    <polygon points="50,76 54,54 50,50" fill="#7a5820" />
    <polygon points="50,76 46,54 50,50" fill={color} />
    {/* East Point */}
    <polygon points="76,50 54,54 50,50" fill={color} />
    <polygon points="76,50 54,46 50,50" fill="#7a5820" />
    {/* West Point */}
    <polygon points="24,50 46,54 50,50" fill="#7a5820" />
    <polygon points="24,50 46,46 50,50" fill={color} />
    
    {/* Center Pivot Gem */}
    <circle cx="50" cy="50" r="4" fill="#17120d" stroke={color} strokeWidth="1.5" />
    <circle cx="50" cy="50" r="1.5" fill={color} />
  </svg>
);

// Argentine Mate Gourd with Silver Bombilla (Símbolo entrañable de las charlas con Carlitos)
export const ArgentineMateIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-9 h-9',
  color = '#c59b3f',
}) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Silver Bombilla straw sticking out to upper right */}
    <line x1="45" y1="50" x2="82" y2="12" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <circle cx="82" cy="12" r="2.5" fill={color} />
    {/* Bombilla rings / filter mouth */}
    <line x1="72" y1="22" x2="76" y2="18" stroke={color} strokeWidth="3" strokeLinecap="round" />
    
    {/* Gourd Calabash Body */}
    {/* Metal / Silver Virola rim */}
    <ellipse cx="44" cy="46" rx="22" ry="7" fill="#3a281c" stroke={color} strokeWidth="2" />
    {/* Yerba mate mound inside rim */}
    <ellipse cx="44" cy="46" rx="18" ry="5" fill="#24301a" />
    
    {/* Round Wooden / Leather Gourd */}
    <path
      d="M24 49 C20 62 26 84 44 86 C62 84 68 62 64 49 Z"
      fill="#2d1c12"
      stroke={color}
      strokeWidth="2"
    />
    {/* Leather stitching / carving decor */}
    <path
      d="M32 56 C30 68 34 78 44 80 C54 78 58 68 56 56"
      stroke={color}
      strokeWidth="1"
      strokeDasharray="2 3"
      opacity="0.8"
    />
    {/* Base ring */}
    <ellipse cx="44" cy="85" rx="10" ry="3" fill={color} opacity="0.6" />
  </svg>
);

// Quill & Antique Inkwell (Pluma y Tintero de Estudio)
export const QuillInkwellIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-10 h-10',
  color = '#c59b3f',
}) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Inkwell Glass / Ceramic Vessel */}
    <path d="M52 64 L74 64 L78 86 L48 86 Z" fill="#1f1812" stroke={color} strokeWidth="1.8" />
    <rect x="55" y="58" width="16" height="6" rx="1" fill="#38281a" stroke={color} strokeWidth="1.5" />
    
    {/* Feather Quill leaning left */}
    <path
      d="M62 60 Q45 40 22 15 C20 13 22 25 28 35 C34 45 48 58 61 64 Z"
      fill={color}
      opacity="0.9"
    />
    <path d="M22 15 Q46 45 61 64" stroke="#17120d" strokeWidth="1.5" strokeLinecap="round" />
    {/* Feather barbs */}
    <line x1="28" y1="24" x2="36" y2="28" stroke="#17120d" strokeWidth="1" />
    <line x1="34" y1="32" x2="44" y2="38" stroke="#17120d" strokeWidth="1" />
    <line x1="42" y1="42" x2="52" y2="50" stroke="#17120d" strokeWidth="1" />
  </svg>
);

// Ouroboros (The Alchemical Serpent biting its tail)
export const OuroborosIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-12 h-12',
  color = '#c59b3f',
}) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" stroke={color} strokeWidth="6" strokeDasharray="3 2" opacity="0.85" />
    <circle cx="50" cy="50" r="36" stroke={color} strokeWidth="1" />
    <circle cx="50" cy="50" r="48" stroke={color} strokeWidth="1" />
    {/* Dragon head at top */}
    <path d="M44 8 C48 4 56 4 60 8 L54 16 Z" fill={color} />
    <circle cx="48" cy="8" r="1" fill="#17120d" />
  </svg>
);

// Authentic Wax Seal Badge (Deep burgundy wax seal with antique gold text)
export const WaxSealBadge: React.FC<{
  className?: string;
  text?: string;
  subtext?: string;
}> = ({
  className = 'w-24 h-24 sm:w-28 sm:h-28',
  text = 'CARL JUNG',
  subtext = 'SIGILLUM',
}) => (
  <div className={`relative flex items-center justify-center rounded-full wax-seal-burgundy text-[#ebdcb8] shadow-2xl p-2 select-none ${className}`}>
    <div className="absolute inset-1.5 rounded-full border-2 border-dashed border-[#d4af37]/60" />
    <div className="absolute inset-3 rounded-full border border-[#d4af37]/40" />
    <div className="text-center space-y-0.5 z-10">
      <span className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase block font-bold">
        {subtext}
      </span>
      <span className="font-playfair uppercase text-xs sm:text-sm font-black tracking-wider block text-[#f4e8d0] ink-text">
        {text}
      </span>
      <div className="text-[10px] text-[#d4af37] font-serif">✦ ❖ ✦</div>
    </div>
  </div>
);

// Medallion Bust Icon
export const MedallionBustIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-10 h-10',
  color = '#c59b3f',
}) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="2.5" />
    <circle cx="50" cy="50" r="41" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
    <path
      d="M50 25C43 25 38 30 38 37C38 42 41 46 45 48C35 52 28 62 28 75H72C72 62 65 52 55 48C59 46 62 42 62 37C62 30 57 25 50 25Z"
      fill={color}
    />
    <path d="M42 35 C45 32, 55 32, 58 35" stroke="#17120d" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Alchemical Mercury / Transformation Symbol
export const AlchemicalMercuryIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-8 h-8',
  color = '#c59b3f',
}) => (
  <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Crescent horns on top */}
    <path d="M17 10 C21 16 29 16 33 10" stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="none" />
    {/* Circle */}
    <circle cx="25" cy="22" r="8" stroke={color} strokeWidth="2.2" fill="none" />
    {/* Cross at bottom */}
    <line x1="25" y1="30" x2="25" y2="44" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <line x1="18" y1="37" x2="32" y2="37" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// Compass Star 8-point
export const CompassStarIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = '#c59b3f',
}) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="1.5" />
    <path
      d="M50 10 L55 42 L87 35 L58 50 L87 65 L55 58 L50 90 L45 58 L13 65 L42 50 L13 35 L45 42 Z"
      fill={color}
    />
    <circle cx="50" cy="50" r="4" fill="#17120d" />
  </svg>
);

// WhatsApp Icon
export const WhatsappIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Greek Goddess Icon
export const GreekGoddessIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2.5" />
    <path d="M20 28 C28 10, 62 8, 80 18 C72 26, 52 21, 36 32 Z" fill="currentColor" />
    <path d="M30 30 C45 22 68 26 72 38 C74 43 70 50 65 52 C57 50 48 48 38 48 C32 44 30 36 30 30 Z" fill="currentColor" />
    <path d="M50 48 C54 50 59 52 61 55 C59 57 58 59 60 60 C62 60 63 62 60 64 C56 67 54 70 53 76 C48 76 43 72 42 65 C42 59 42 54 50 48 Z" fill="currentColor" />
  </svg>
);

// Doorway into the Shadow
export const DoorwayShadowIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="15" width="70" height="70" stroke="currentColor" strokeWidth="2.5" />
    <path d="M30 85 V30 C30 20 70 20 70 30 V85" stroke="currentColor" strokeWidth="2" />
    <path d="M35 85 V35 C35 28 65 28 65 35 V85" fill="currentColor" />
  </svg>
);

// Antique Brass Trombone Paperclip
export const VintagePaperClipIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-12',
  color = '#c59b3f',
}) => (
  <svg
    viewBox="0 0 32 76"
    className={`${className} drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)]`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Dark wire shadow path */}
    <path
      d="M10 24 V58 C10 66 22 66 22 58 V12 C22 4 4 4 4 12 V50 C4 56 13 56 13 50 V20"
      stroke="#3d2812"
      strokeWidth="3.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Brass metallic body */}
    <path
      d="M10 24 V58 C10 66 22 66 22 58 V12 C22 4 4 4 4 12 V50 C4 56 13 56 13 50 V20"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Gilded specular shine */}
    <path
      d="M10 26 V56 M22 14 V56 M4 14 V48"
      stroke="#fff3cb"
      strokeWidth="0.8"
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
);

// Vintage Clipped Photograph (Small artisanal photo pinned with paperclip)
export const VintageClippedPhoto: React.FC<{
  imageUrl: string;
  caption?: string;
  rotationDeg?: number;
  side?: 'left' | 'right';
  altText?: string;
  className?: string;
}> = ({
  imageUrl,
  caption,
  rotationDeg = -2.5,
  side = 'right',
  altText = 'Fotografía histórica',
  className = '',
}) => {
  const floatClass = side === 'left' ? 'sm:float-left sm:mr-6 sm:mb-4' : 'sm:float-right sm:ml-6 sm:mb-4';

  return (
    <figure
      style={{ transform: `rotate(${rotationDeg}deg)` }}
      className={`relative mx-auto my-4 sm:my-2 print:my-1.5 w-44 sm:w-52 print:w-36 p-2.5 print:p-1.5 bg-[#fbf5e6] border border-[#a48e6d] shadow-[0_8px_18px_rgba(20,15,10,0.38)] rounded-2xs transition-transform hover:rotate-0 select-none ${floatClass} ${className} z-10`}
    >
      {/* Antique Brass Clip holding photo */}
      <div className="absolute -top-5 right-5 print:-top-3.5 print:right-3 z-20 pointer-events-none transform rotate-3">
        <VintagePaperClipIcon className="w-5 h-11 print:w-4 print:h-8" color="#cfa444" />
      </div>

      {/* Snapshot Image with fine vintage border */}
      <div className="overflow-hidden border border-[#5a4022]/40 bg-[#1c150f] shadow-inner">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-36 sm:h-40 print:h-24 object-cover sepia-[0.35] contrast-[1.08] brightness-[0.97]"
          loading="lazy"
        />
      </div>

      {/* Handwritten Caption on aged photo border */}
      {caption && (
        <figcaption className="pt-2 pb-0.5 px-1 print:pt-1 font-cormorant italic text-[11px] sm:text-xs print:text-[10px] text-[#3a281c] text-center leading-tight tracking-tight font-semibold">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

// Cosmic Spiral Icon (🌀 Vortex / Whirlpool / Spiral)
export const CosmicSpiralIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-8 h-8',
  color = '#d4af37',
}) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Concentric cosmic orbital dashed guides */}
    <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
    <circle cx="50" cy="50" r="33" stroke={color} strokeWidth="0.8" opacity="0.3" />
    
    {/* Swirling Vortex Spiral Arms matching the 🌀 glyph */}
    <path
      d="M50 50 C46 41, 54 33, 63 35 C75 39, 78 59, 65 72 C49 87, 21 77, 15 54 C9 26, 31 6, 57 4 C86 2, 97 27, 93 56 C89 83, 62 95, 37 94"
      stroke={color}
      strokeWidth="3.4"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M50 50 C54 59, 46 67, 37 65 C25 61, 23 40, 36 27 C53 12, 79 23, 85 46 C91 73, 69 93, 43 92"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      fill="none"
      opacity="0.85"
    />
    <path
      d="M50 50 C43 45, 45 37, 54 37 C64 37, 69 50, 60 59 C49 69, 35 63, 31 49"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
      opacity="0.9"
    />
    
    {/* Center Eye of the Vortex */}
    <circle cx="50" cy="50" r="4.2" fill={color} />
    
    {/* Subtle Star Points */}
    <circle cx="23" cy="22" r="1.5" fill={color} opacity="0.75" />
    <circle cx="78" cy="24" r="1.5" fill={color} opacity="0.75" />
    <circle cx="77" cy="77" r="1.5" fill={color} opacity="0.75" />
    <circle cx="22" cy="74" r="1.5" fill={color} opacity="0.75" />
  </svg>
);

// Antique Postage Stamp for Book Cover (Vino Tinto & Cosmic Spiral 🌀)
export const AntiquePostageStamp: React.FC<{
  className?: string;
  denomination?: string;
  region?: string;
  title?: string;
  subtitle?: string;
  theme?: 'vino_tinto' | 'vintage';
}> = ({
  className = 'w-24 h-34 sm:w-28 sm:h-40',
  denomination = '25 CTS',
  region = 'HELVETIA',
  title = 'Heroísmo Cosmogónico',
  subtitle = 'SELLO EDITORIAL',
  theme = 'vino_tinto',
}) => {
  const isVinoTinto = theme === 'vino_tinto';

  return (
    <div
      className={`relative p-1.5 ${
        isVinoTinto ? 'bg-[#4a121a] text-[#f5e6cf] border border-[#2b070f]' : 'bg-[#dfd3ba] text-[#1c150f] border border-[#8f6e28]'
      } shadow-[0_8px_20px_rgba(0,0,0,0.7)] select-none stamp-perforated-border flex flex-col justify-between overflow-hidden ${className}`}
      style={{
        backgroundImage: isVinoTinto
          ? 'radial-gradient(circle at center, #5d1522 0%, #440d17 70%, #2a070e 100%)'
          : 'radial-gradient(circle at center, #ece3cf 0%, #dfd3ba 100%)',
      }}
    >
      {/* Inner Engraved Stamp Border */}
      <div
        className={`border ${
          isVinoTinto ? 'border-[#aa8032]/80 bg-[#380b13]/90' : 'border-[#7a5820]/70 bg-[#f6efe0]/80'
        } p-1.5 flex flex-col items-center justify-between h-full relative`}
      >
        {/* Top Postal Header */}
        <div
          className={`w-full flex items-center justify-between text-[8px] sm:text-[9px] font-mono font-bold ${
            isVinoTinto ? 'text-[#e6c280] border-[#aa8032]/40' : 'text-[#563814] border-[#aa8032]/40'
          } px-0.5 border-b pb-0.5`}
        >
          <span className="tracking-widest">{region}</span>
          <span
            className={`${
              isVinoTinto ? 'bg-[#220409] text-[#e8cfa0] border border-[#aa8032]/50' : 'bg-[#563814] text-[#ebdcb8]'
            } px-1 py-0.2 rounded-2xs font-mono text-[7px] sm:text-[8px] shadow-xs`}
          >
            {denomination}
          </span>
        </div>

        {/* Central Archival Engraving: Fixed Cosmic Spiral 🌀 */}
        <div className="my-auto py-1 flex flex-col items-center text-center">
          <div
            className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 ${
              isVinoTinto ? 'border-[#d4af37] bg-[#1d0408]' : 'border-[#8f6e28] bg-[#1e1610]'
            } flex items-center justify-center p-1 shadow-inner my-0.5`}
            title="Símbolo cosmogónico 🌀"
          >
            <CosmicSpiralIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#d4af37]" color="#d4af37" />
          </div>
          <span
            className={`font-playfair text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider ${
              isVinoTinto ? 'text-[#f5e6cf]' : 'text-[#17120d]'
            } leading-tight mt-1 max-w-[105px] text-center`}
          >
            {title}
          </span>
          <span
            className={`font-mono text-[6.5px] sm:text-[7.5px] tracking-[0.16em] ${
              isVinoTinto ? 'text-[#d4af37]' : 'text-[#7a5820]'
            } uppercase font-bold mt-0.5`}
          >
            {subtitle} • VOL. II
          </span>
        </div>

        {/* Bottom Location & Year */}
        <div
          className={`w-full flex items-center justify-between text-[7px] sm:text-[8px] font-mono ${
            isVinoTinto ? 'text-[#d8b068] border-[#aa8032]/40' : 'text-[#563814] border-[#aa8032]/40'
          } px-0.5 border-t pt-0.5 font-semibold`}
        >
          <span>KÜSNACHT</span>
          <span>✦ 1930 ✦</span>
          <span>ZÜRICH</span>
        </div>

        {/* Tilted Postal Cancellation Ink Stamp - Static image with zero animation */}
        <div className="absolute -top-1 -right-2 w-24 h-24 pointer-events-none transform -rotate-18 opacity-50">
          <svg viewBox="0 0 100 100" className={`w-full h-full ${isVinoTinto ? 'text-[#120306]' : 'text-[#2c1d12]'}`}>
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.6" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <text x="50" y="32" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="currentColor" fontWeight="bold">
              ZÜRICH ARCHIV
            </text>
            <text x="50" y="52" fontSize="9" fontFamily="serif" textAnchor="middle" fill="currentColor" fontWeight="bold">
              24.X.32
            </text>
            <text x="50" y="70" fontSize="6" fontFamily="monospace" textAnchor="middle" fill="currentColor" fontWeight="bold">
              ★ POSTES ★
            </text>
            <line x1="6" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="1.6" />
            <line x1="80" y1="50" x2="94" y2="50" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </div>
      </div>
    </div>
  );
};
