// Image Manifest: Clave semántica -> Import ESM de assets empaquetados por Vite
// Esto garantiza que las rutas sean resueltas por el bundler tanto en dev como en build/preview

import studyLibraryImg from '../assets/images/carlitos_antique_study_library_1790692376845.jpg';
import mateJournalImg from '../assets/images/vintage_mate_journal_snapshot_1790695120216.jpg';
import carlitosLakeImg from '../assets/images/vintage_carlitos_lake_snapshot_1790695023385.jpg';
import bollingenStoneImg from '../assets/images/vintage_bollingen_stone_snapshot_1790695102166.jpg';
import dreamsMandalaImg from '../assets/images/alchemical_dreams_mandala_1790692414590.jpg';
import goldenScarabImg from '../assets/images/golden_scarab_alchemical_relic_1790692388946.jpg';
import ichingCoinsImg from '../assets/images/iching_bronze_coins_consultation_1790692401314.jpg';
import hexagram50BrushImg from '../assets/images/hexagram_50_ting_ink_brush_1790694984643.jpg';
import fourHexagramsPlateImg from '../assets/images/four_hexagrams_ink_brush_plate_1790695005198.jpg';
import authorPortraitImg from '../assets/images/author_portrait_1786398073343.jpg';

export const IMAGE_MANIFEST = {
  studyLibrary: studyLibraryImg,
  mateJournal: mateJournalImg,
  carlitosLake: carlitosLakeImg,
  bollingenStone: bollingenStoneImg,
  dreamsMandala: dreamsMandalaImg,
  goldenScarab: goldenScarabImg,
  ichingCoins: ichingCoinsImg,
  hexagram50Brush: hexagram50BrushImg,
  fourHexagramsPlate: fourHexagramsPlateImg,
  authorPortrait: authorPortraitImg,
} as const;

export type ImageManifestKey = keyof typeof IMAGE_MANIFEST;
