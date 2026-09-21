export function isIOSorSafari() {
  const ua = navigator.userAgent;
  // Cast window to any to bypass TS error
  const hasMSStream = (window as any).MSStream !== undefined;

  const isIOS = /iPad|iPhone|iPod/.test(ua) && !hasMSStream;
  const isSafariOnMac = !ua.includes("Chrome") && !ua.includes("Firefox") && ua.includes("Safari");

  return isIOS || isSafariOnMac;
}