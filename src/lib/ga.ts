// src/lib/ga.ts

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-F19XZ11CMR";

export const pageview = (url: string) => {
  if (window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};
