import jsPDF from 'jspdf';
import html2canvasPro from 'html2canvas-pro';
import { domToCanvas } from 'modern-screenshot';

export interface PdfExportProgress {
  currentPage: number;
  totalPages: number;
  statusMessage: string;
}

export interface PdfExportOptions {
  includeCover?: boolean;
  includeToc?: boolean;
  includeBackCover?: boolean;
  pageRange?: 'all' | 'custom';
  startPage?: number;
  endPage?: number;
  filename?: string;
  onProgress?: (progress: PdfExportProgress) => void;
}

/**
 * Automatically captures rendered book DOM elements and compiles them into a downloadable PDF document.
 */
export async function generateEbookPdf(options: PdfExportOptions = {}): Promise<void> {
  const {
    includeCover = true,
    includeToc = true,
    includeBackCover = true,
    pageRange = 'all',
    startPage = 1,
    endPage = 26,
    filename = 'Mi_Amigo_Carlitos_Libro_Completo.pdf',
    onProgress,
  } = options;

  // Build target element ID queue
  const elementIds: { id: string; title: string }[] = [];

  if (includeCover) {
    elementIds.push({ id: 'page-cover', title: 'Portada' });
  }

  if (includeToc) {
    elementIds.push({ id: 'page-toc', title: 'Índice de Contenidos' });
  }

  const minP = Math.max(1, startPage);
  const maxP = Math.min(26, endPage);

  for (let p = minP; p <= maxP; p++) {
    elementIds.push({ id: `page-${p}`, title: `Página ${p}` });
  }

  if (includeBackCover) {
    elementIds.push({ id: 'page-backcover', title: 'Contraportada' });
  }

  const total = elementIds.length;
  if (total === 0) {
    throw new Error('No hay páginas seleccionadas para exportar.');
  }

  // Create jsPDF instance in A4 format portrait
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
  const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm

  for (let i = 0; i < elementIds.length; i++) {
    const item = elementIds[i];

    if (onProgress) {
      onProgress({
        currentPage: i + 1,
        totalPages: total,
        statusMessage: `Capturando y procesando ${item.title}...`,
      });
    }

    const element = document.getElementById(item.id);

    if (!element) {
      console.warn(`Element with ID '${item.id}' not found in DOM.`);
      continue;
    }

    // Scroll element into view briefly
    element.scrollIntoView({ block: 'nearest' });
    await new Promise((resolve) => setTimeout(resolve, 150));

    let canvas: HTMLCanvasElement;

    try {
      // First attempt with html2canvas-pro which supports modern CSS color functions
      canvas = await html2canvasPro(element, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#dfceaa',
      });
    } catch (err) {
      console.warn(`html2canvas-pro failed for ${item.id}, falling back to modern-screenshot domToCanvas`, err);
      // Fallback with modern-screenshot domToCanvas
      canvas = await domToCanvas(element, {
        scale: 1.5,
        backgroundColor: '#dfceaa',
      });
    }

    const imgData = canvas.toDataURL('image/jpeg', 0.92);

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Calculate aspect ratio fit inside A4 page
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const renderWidth = imgWidth * ratio;
    const renderHeight = imgHeight * ratio;

    // Center image on page
    const xOffset = (pdfWidth - renderWidth) / 2;
    const yOffset = (pdfHeight - renderHeight) / 2;

    if (i > 0) {
      pdf.addPage();
    }

    pdf.addImage(imgData, 'JPEG', xOffset, yOffset, renderWidth, renderHeight);
  }

  if (onProgress) {
    onProgress({
      currentPage: total,
      totalPages: total,
      statusMessage: 'Finalizando y descargando archivo PDF...',
    });
  }

  // Save the generated PDF
  pdf.save(filename);
}

/**
 * Triggers native browser print dialog configured for high quality vector PDF saving.
 */
export function triggerNativePrintPdf(): void {
  window.print();
}
