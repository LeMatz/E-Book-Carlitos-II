export interface CarlitosCallout {
  id: string;
  title?: string;
  tagline?: string;
  text: string;
  variant?: 'carlitos' | 'historical_quote' | 'marginalia' | 'glossary' | 'alchemical' | 'context_note' | 'left_callout' | 'iching';
  position?: 'left' | 'right' | 'full';
}

export interface ArchetypeTableRow {
  archetype: string;
  symbols: string;
  distortion: string;
  origin?: 'Jung explícito' | 'Tradición junguiana / Ampliado';
}

export interface ClippedPhoto {
  imageUrl: string;
  caption?: string;
  rotationDeg?: number;
  side?: 'left' | 'right';
  altText?: string;
  handwrittenNote?: string;
  objectFit?: 'cover' | 'contain';
}

export interface IChingHexagramData {
  number: number;
  nameChinese: string;
  namePinYin: string;
  nameSpanish: string;
  upperTrigram: string;
  lowerTrigram: string;
  // 6 lines from top (line 6) to bottom (line 1)
  lines: ('yang' | 'yin')[];
  judgment: string;
  image: string;
  psychologicalMeaning: string;
}

export interface HexagramFigureData {
  // Lines 1 (bottom) to 6 (top), with values 6, 7, 8, 9
  lines: (6 | 7 | 8 | 9)[];
  showDerived?: boolean;
  annotate?: 'positions' | 'trigrams' | 'both';
  caption?: string;
  primaryName?: string;
  derivedName?: string;
  highlightLines?: number[]; // 1-indexed (e.g. [2, 3])
}

export type TableCellContent =
  | string
  | { line: 6 | 7 | 8 | 9 }
  | { trigram: string; name?: string; symbol?: string; lines?: ('yang' | 'yin')[] };

export interface ReferenceTable {
  title?: string;
  headers: string[];
  rows: TableCellContent[][];
  footnote?: string;
}

export interface TrigramData {
  name: string;
  chinese: string;
  symbol: string;
  element: string;
  direction: string;
  archetypalQuality: string;
  psychologicalFunction: string;
}

export interface IllustrationData {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
  aspect?: 'square' | 'portrait' | 'landscape';
}

export interface ExerciseStep {
  stepNumber: number;
  title: string;
  instruction: string;
}

export interface ExerciseField {
  key: string;
  label: string;
  placeholder?: string;
  multiline?: boolean;
}

export interface ExerciseData {
  id: string;
  title: string;
  objective: string;
  steps: ExerciseStep[];
  applicationExample: string;
  exampleLabel?: string;
  closurePrompt?: string;
  inputFieldKey?: string;
  inputPlaceholder?: string;
  fields?: ExerciseField[];
}

export type PageContentType = 
  | 'text' 
  | 'table' 
  | 'exercise' 
  | 'biography' 
  | 'legacy' 
  | 'introduction' 
  | 'conclusion'
  | 'iching'
  | 'visual_essay';

export interface FootnoteData {
  number: number;
  term: string;
  note: string;
}

export interface TrickstersModelRow {
  trickster: string;
  attitude: string;
  operation: string;
  question: string;
  explanation: string;
}

export interface TrickstersModelData {
  imageSection: {
    heading: string;
    text: string;
  };
  purposeSection: {
    heading: string;
    text: string;
  };
  carnivalSection: {
    heading: string;
    text: string;
  };
  tableHeading: string;
  rows: TrickstersModelRow[];
  authorshipNote: string;
}

export interface TrickstersStepByStepData {
  dailySection: {
    heading: string;
    instruction: string;
  };
  sessionHeading: string;
  step1: string;
  step2: {
    heading: string;
    aOfficial: string;
    bMinimal: string;
    cComment: string;
    dDiscomfortIntro: string;
    dResults: { result: string; action: string }[];
    eHypothesis: string;
  };
  step3: {
    heading: string;
    questions: { question: string; label: string }[];
  };
  step4: {
    heading: string;
    lossRehearsal: string;
    dismissalDecree: string;
  };
  step5: {
    heading: string;
    text: string;
  };
  safetyNote: {
    heading: string;
    text: string;
  };
}

export interface EbookPageData {
  pageNumber: number; // 1 to EBOOK_PAGES.length (33)
  chapterId: number; // 0 for Intro/Bio, 1, 2, 3, 4, 5, 6
  sectionTitle: string;
  pageTitle: string;
  subtitle?: string;
  contentType: PageContentType;
  paragraphs: string[];
  carlitosCallout?: CarlitosCallout;
  secondaryCallout?: CarlitosCallout;
  tableData?: ArchetypeTableRow[];
  exerciseData?: ExerciseData;
  trickstersModelData?: TrickstersModelData;
  trickstersStepByStepData?: TrickstersStepByStepData;
  keyTerms?: string[];
  historicalNotes?: string[];
  illustrationImage?: IllustrationData;
  bottomImage?: IllustrationData;
  iChingHexagram?: IChingHexagramData;
  iChingTrigrams?: TrigramData[];
  hexagramFigure?: HexagramFigureData;
  extraFigures?: HexagramFigureData[];
  referenceTables?: ReferenceTable[];
  footnotes?: FootnoteData[];
  clippedPhoto?: ClippedPhoto;
  placeholderImage?: {
    label: string;
    caption?: string;
    aspect?: string;
  };
}

export interface ChapterMeta {
  chapterId: number;
  title: string;
  subtitle: string;
  startPage: number;
  endPage: number;
  iconName: string;
}

export interface Bookmark {
  pageNumber: number;
  title: string;
  timestamp: string;
  note?: string;
}

export interface UserWorkbookState {
  [key: string]: string; // exercise field key -> user answer
}
