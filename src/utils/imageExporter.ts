import html2canvas from 'html2canvas';
import JSZip from 'jszip';

export type ImageFormat = 'png' | 'jpg';
export type ImageQuality = 'standard' | 'high';

export interface PageExportItem {
  id: string;
  filename: string;
  title: string;
}

/**
 * Prepares the canvas for export, adding a background if saving to JPG to avoid black transparency
 */
function prepareCanvasForFormat(
  sourceCanvas: HTMLCanvasElement,
  elementId: string,
  format: ImageFormat
): HTMLCanvasElement {
  if (format === 'png') {
    return sourceCanvas;
  }

  // JPG requires a solid background because it has no alpha channel
  const isDark = elementId.includes('portada') || elementId.includes('contraportada');
  const outCanvas = document.createElement('canvas');
  outCanvas.width = sourceCanvas.width;
  outCanvas.height = sourceCanvas.height;
  const ctx = outCanvas.getContext('2d');

  if (ctx) {
    ctx.fillStyle = isDark ? '#1c150f' : '#dfcea6';
    ctx.fillRect(0, 0, outCanvas.width, outCanvas.height);
    ctx.drawImage(sourceCanvas, 0, 0);
  }

  return outCanvas;
}

/**
 * Exports a single page element to PNG or JPG and triggers an automatic browser download
 */
export async function exportPageToImage(
  elementId: string,
  baseFilename: string,
  format: ImageFormat = 'png',
  quality: ImageQuality = 'high'
): Promise<void> {
  const container = document.getElementById(elementId);
  if (!container) {
    throw new Error(`No se encontró el elemento con ID: ${elementId}`);
  }

  // Target the inner page sheet if available, or fallback to the container
  const targetElement =
    (container.querySelector('.print-page-sheet') as HTMLElement) ||
    (container.querySelector('.legal-sheet') as HTMLElement) ||
    container;

  const scale = quality === 'high' ? 2 : 1;

  const rawCanvas = await html2canvas(targetElement, {
    scale,
    useCORS: true,
    allowTaint: true,
    logging: false,
    backgroundColor: null,
    ignoreElements: (element) =>
      element.classList.contains('export-exclude') ||
      element.classList.contains('no-print'),
  });

  const finalCanvas = prepareCanvasForFormat(rawCanvas, elementId, format);
  const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
  const qualityVal = format === 'jpg' ? 0.95 : undefined;

  const blob = await new Promise<Blob | null>((resolve) => {
    finalCanvas.toBlob((b) => resolve(b), mimeType, qualityVal);
  });

  if (!blob) {
    throw new Error('No se pudo generar la imagen a partir del lienzo');
  }

  const cleanFilename = baseFilename.endsWith(`.${format}`)
    ? baseFilename
    : `${baseFilename}.${format}`;

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = cleanFilename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  setTimeout(() => URL.revokeObjectURL(url), 2500);
}

/**
 * Exports all pages in sequence and packages them into a single downloadable .ZIP archive
 */
export async function exportAllPagesToZip(
  pages: PageExportItem[],
  format: ImageFormat = 'png',
  quality: ImageQuality = 'high',
  onProgress?: (current: number, total: number, message: string) => void
): Promise<void> {
  const zip = new JSZip();
  const folderName = `mi-amigo-carlitos-ii-${format.toUpperCase()}`;
  const folder = zip.folder(folderName) || zip;
  const scale = quality === 'high' ? 2 : 1;
  const total = pages.length;

  for (let i = 0; i < total; i++) {
    const page = pages[i];
    onProgress?.(i + 1, total, `Renderizando página ${i + 1} de ${total}: ${page.title}...`);

    // Let the UI render the progress update
    await new Promise((resolve) => setTimeout(resolve, 60));

    const container = document.getElementById(page.id);
    if (!container) {
      console.warn(`Elemento ${page.id} no encontrado en el DOM, omitiendo.`);
      continue;
    }

    const targetElement =
      (container.querySelector('.print-page-sheet') as HTMLElement) ||
      (container.querySelector('.legal-sheet') as HTMLElement) ||
      container;

    const rawCanvas = await html2canvas(targetElement, {
      scale,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: null,
      ignoreElements: (element) =>
        element.classList.contains('export-exclude') ||
        element.classList.contains('no-print'),
    });

    const finalCanvas = prepareCanvasForFormat(rawCanvas, page.id, format);
    const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
    const qualityVal = format === 'jpg' ? 0.95 : undefined;

    const blob = await new Promise<Blob | null>((resolve) => {
      finalCanvas.toBlob((b) => resolve(b), mimeType, qualityVal);
    });

    if (blob) {
      const cleanFilename = page.filename.endsWith(`.${format}`)
        ? page.filename
        : `${page.filename}.${format}`;
      folder.file(cleanFilename, blob);
    }
  }

  onProgress?.(total, total, `Empaquetando ${total} imágenes en archivo ZIP...`);
  await new Promise((resolve) => setTimeout(resolve, 80));

  const zipBlob = await zip.generateAsync(
    {
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
    },
    (metadata) => {
      onProgress?.(
        total,
        total,
        `Comprimiendo archivo ZIP: ${metadata.percent.toFixed(0)}%`
      );
    }
  );

  const zipFilename = `mi-amigo-carlitos-ii-paginas-${format}.zip`;
  const url = URL.createObjectURL(zipBlob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = zipFilename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  setTimeout(() => URL.revokeObjectURL(url), 3000);
}
