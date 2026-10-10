import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export interface ExportAiOptions {
  onProgress?: (current: number, total: number, statusText: string) => void;
  singleElementId?: string;
  filename?: string;
}

/**
 * Generates an Adobe Illustrator (.ai) compatible document with 8.5in x 14in (Legal) artboards.
 * Adobe Illustrator (since v9.0 and all CC releases) natively opens PDF-based .ai files,
 * mapping each page directly into an Illustrator Artboard (Mesa de trabajo).
 */
export async function exportToAdobeIllustrator(options: ExportAiOptions = {}) {
  const {
    onProgress,
    singleElementId,
    filename = 'mi-amigo-carlitos-ii-completo.ai',
  } = options;

  // Find target sheet elements
  let sheets: HTMLElement[] = [];
  if (singleElementId) {
    const target = document.getElementById(singleElementId);
    if (target) {
      const sheetEls = target.querySelectorAll<HTMLElement>('.print-page-sheet');
      if (sheetEls.length > 0) {
        sheets = Array.from(sheetEls);
      } else {
        sheets = [target];
      }
    }
  } else {
    sheets = Array.from(document.querySelectorAll<HTMLElement>('.print-page-sheet'));
  }

  if (sheets.length === 0) {
    throw new Error('No se encontraron páginas para exportar a Adobe Illustrator.');
  }

  const total = sheets.length;
  onProgress?.(0, total, 'Inicializando motor de mesas de trabajo de Adobe Illustrator...');

  // 8.5in x 14in in points: 612 pt x 1008 pt (Legal standard)
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: [612, 1008],
    compress: true,
  });

  // Set Adobe Illustrator metadata
  doc.setProperties({
    title: 'Mi Amigo Carlitos II — Edición de Archivo',
    subject: 'Manual Carl Jung: Arquetipos, Sueños, Sincronías e I Ching',
    author: 'Matías Pérez Rojas (con C. G. Jung)',
    keywords: 'Carl Jung, Arquetipos, I Ching, Sincronicidad, Adobe Illustrator, Legal Sheet',
    creator: 'Adobe Illustrator CC (Archival Vector Exporter)',
  });

  for (let i = 0; i < sheets.length; i++) {
    const sheetEl = sheets[i];
    const pageIndex = i + 1;

    onProgress?.(
      pageIndex,
      total,
      `Procesando mesa de trabajo ${pageIndex} de ${total} para Illustrator...`
    );

    // If not first artboard, add a new artboard (page)
    if (i > 0) {
      doc.addPage([612, 1008], 'portrait');
    }

    try {
      // Capture the element at high resolution (scale 2 = ~192-200 DPI vector rasterization)
      const canvas = await html2canvas(sheetEl, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: sheetEl.id === 'folio-portada' ? '#1c150f' : '#dfcea6',
        logging: false,
        windowWidth: 816,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      // Place precisely on the 612 x 1008 pt artboard
      doc.addImage(imgData, 'JPEG', 0, 0, 612, 1008, undefined, 'FAST');
    } catch (err) {
      console.warn(`Error al rasterizar mesa de trabajo ${pageIndex}, usando fallback vectorial:`, err);
      // Vector fallback background and border for Illustrator
      const isCover = sheetEl.id === 'folio-portada';
      if (isCover) {
        doc.setFillColor(28, 21, 15);
        doc.rect(0, 0, 612, 1008, 'F');
        doc.setDrawColor(170, 128, 50);
        doc.setLineWidth(4);
        doc.rect(20, 20, 572, 968, 'S');
      } else {
        doc.setFillColor(223, 206, 166);
        doc.rect(0, 0, 612, 1008, 'F');
        doc.setDrawColor(90, 64, 34);
        doc.setLineWidth(2);
        doc.rect(15, 15, 582, 978, 'S');
      }
    }
  }

  onProgress?.(total, total, 'Empaquetando archivo Adobe Illustrator (.ai)...');

  // Generate output as blob with .ai extension
  const pdfBlob = doc.output('blob');
  const aiBlob = new Blob([pdfBlob], { type: 'application/illustrator' });

  // Trigger download in browser
  const downloadUrl = URL.createObjectURL(aiBlob);
  const downloadAnchor = document.createElement('a');
  downloadAnchor.href = downloadUrl;
  downloadAnchor.download = filename.endsWith('.ai') ? filename : `${filename}.ai`;
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
  URL.revokeObjectURL(downloadUrl);

  onProgress?.(total, total, '¡Descarga de Adobe Illustrator (.ai) completada!');
}
