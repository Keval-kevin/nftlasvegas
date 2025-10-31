import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Trigger multiple file downloads sequentially
export function multiDownload(files: string[]) {
  if (typeof window === 'undefined' || !files?.length) return;
  const delay = 400; // ms between downloads to avoid popup blockers
  files.forEach((path, idx) => {
    const url = encodeURI(path);
    setTimeout(() => {
      const a = document.createElement('a');
      a.href = url;
      // Use the filename after last slash
      const name = url.split('/').pop() || 'download';
      a.setAttribute('download', name);
      a.rel = 'noopener';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, idx * delay);
  });
}

