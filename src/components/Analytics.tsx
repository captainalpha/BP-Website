"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Cookies from "js-cookie";
import { GA_MEASUREMENT_ID, pageview } from "@/lib/ga";

const Analytics = () => {
  const pathname = usePathname();

  const hasConsent = Cookies.get("bpaasCookieConsent") === "true";

  useEffect(() => {
    if (hasConsent) {
      pageview(pathname);
    }
  }, [pathname, hasConsent]);

  if (!hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', { debug_mode: true });
    console.log("GA initialized with ID: ${GA_MEASUREMENT_ID}");
  `}
      </Script>
    </>
  );
};

export default Analytics;
