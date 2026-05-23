import { toPng } from "html-to-image";

export async function exportElementAsPng(element: HTMLElement, filename: string) {
  const dataUrl = await toPng(element, {
    cacheBust: true,
    pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--color-paper").trim(),
  });

  const anchor = document.createElement("a");
  anchor.href = dataUrl;
  anchor.download = filename;
  anchor.click();
}
