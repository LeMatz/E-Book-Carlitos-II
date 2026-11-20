import { domToBlob, type Options as ModernScreenshotOptions } from 'modern-screenshot';
import JSZip from 'jszip';

export type ImageFormat = 'png' | 'jpg';
export type ImageQuality = 'standard' | 'high';

export interface PageExportItem {
  id: string;
  filename: string;
  title: string;
}

let warmedUpCapture = false;

async function waitForFontsAndImages(targetElement: HTMLElement): Promise<void> {
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }

  const images = Array.from(targetElement.querySelectorAll('img'));
  await Promise.all(
    images.map(async (img) => {
      if (!img.complete) {
        await new Promise<void>((resolve) => {
          img.addEventListener('load', () => resolve(), { once: true });
          img.addEventListener('error', () => resolve(), { once: true });
          setTimeout(resolve, 4000);
        });
      }
      if (typeof img.decode === 'function') {
        await img.decode().catch(() => {});
      }
    })
  );
}

function syncFormValuesOnClone(sourceRoot: HTMLElement, clonedNode: Node): void {
  if (!(clonedNode instanceof HTMLElement)) return;

  const sourceInputs = sourceRoot.querySelectorAll('input, textarea');
  const clonedInputs = clonedNode.querySelectorAll('input, textarea');

  sourceInputs.forEach((srcEl, index) => {
    const cloneEl = clonedInputs[index];
    if (!cloneEl) return;

    if (srcEl instanceof HTMLInputElement && cloneEl instanceof HTMLInputElement) {
      cloneEl.setAttribute('value', srcEl.value);
      cloneEl.value = srcEl.value;
    } else if (srcEl instanceof HTMLTextAreaElement && cloneEl instanceof HTMLTextAreaElement) {
      cloneEl.textContent = srcEl.value;
      cloneEl.value = srcEl.value;
    }
  });
}

function buildCaptureOptions(
  targetElement: HTMLElement,
  elementId: string,
  format: ImageFormat,
  quality: ImageQuality
): ModernScreenshotOptions {
  const isDark = elementId.includes('portada') || elementId.includes('contraportada');
  const rect = targetElement.getBoundingClientRect();

  return {
    scale: quality === 'high' ? 2 : 1,
    width: Math.ceil(rect.width),
    height: Math.ceil(rect.height),
    type: format === 'jpg' ? 'image/jpeg' : 'image/png',
    quality: format === 'jpg' ? 0.95 : 1,
    backgroundColor: format === 'jpg' ? (isDark ? '#1c150f' : '#dfcea6') : null,
    style: {
      margin: '0',
      boxShadow: 'none',
    },
    features: {
      fixSvgXmlDecode: true,
    },
    fetch: {
      requestInit: {
        cache: 'force-cache',
      },
    },
    filter: (node: Node) => {
      if (node instanceof Element) {
        return (
          !node.classList.contains('export-exclude') &&
          !node.classList.contains('no-print')
        );
      }
      return true;
    },
    onCloneNode: (cloned) => {
      syncFormValuesOnClone(targetElement, cloned);
    },
  };
}

async function captureElementBlob(
  targetElement: HTMLElement,
  elementId: string,
  format: ImageFormat,
  quality: ImageQuality
): Promise<Blob> {
  await waitForFontsAndImages(targetElement);

  const options = buildCaptureOptions(targetElement, elementId, format, quality);

  // Warm-up discarded pass so webfont embedding settles cleanly before the real capture
  if (!warmedUpCapture) {
    await domToBlob(targetElement, { ...options, scale: 1 }).catch(() => null);
    warmedUpCapture = true;
  }

  const blob = await domToBlob(targetElement, options);
  if (!blob || blob.size === 0) {
    throw new Error('No se pudo generar la imagen a partir de la lámina');
  }

  return blob;
}

function resolveTargetElement(elementId: string): HTMLElement {
  const container = document.getElementById(elementId);
  if (!container) {
    throw new Error(`No se encontró el elemento con ID: ${elementId}`);
  }

  return (
    (container.querySelector('.print-page-sheet') as HTMLElement) ||
    (container.querySelector('.legal-sheet') as HTMLElement) ||
    container
  );
}

function triggerDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  setTimeout(() => URL.revokeObjectURL(url), 2500);
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
  const targetElement = resolveTargetElement(elementId);
  const blob = await captureElementBlob(targetElement, elementId, format, quality);

  const cleanFilename = baseFilename.endsWith(`.${format}`)
    ? baseFilename
    : `${baseFilename}.${format}`;

  triggerDownload(blob, cleanFilename);
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
  const total = pages.length;

  // Reset warm-up per batch so fonts are freshly bound for the whole archive
  warmedUpCapture = false;

  for (let i = 0; i < total; i++) {
    const page = pages[i];
    onProgress?.(i + 1, total, `Renderizando página ${i + 1} de ${total}: ${page.title}...`);

    // Allow progress bar UI to paint before heavy rendering
    await new Promise((resolve) => setTimeout(resolve, 40));

    const container = document.getElementById(page.id);
    if (!container) {
      console.warn(`Elemento ${page.id} no encontrado en el DOM, omitiendo.`);
      continue;
    }

    const targetElement =
      (container.querySelector('.print-page-sheet') as HTMLElement) ||
      (container.querySelector('.legal-sheet') as HTMLElement) ||
      container;

    let blob: Blob | null = await captureElementBlob(targetElement, page.id, format, quality);

    if (blob) {
      const cleanFilename = page.filename.endsWith(`.${format}`)
        ? page.filename
        : `${page.filename}.${format}`;
      folder.file(cleanFilename, blob);
      blob = null;
    }
  }

  onProgress?.(total, total, `Empaquetando ${total} imágenes en archivo ZIP...`);
  await new Promise((resolve) => setTimeout(resolve, 60));

  const zipBlob = await zip.generateAsync(
    {
      type: 'blob',
      streamFiles: true,
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
  triggerDownload(zipBlob, zipFilename);
}
