"use client";

import CaseStudies from "@/components/home/dark/CaseStudies";
import Certification from "@/components/home/dark/Certification";
import ClientSectionNew from "@/components/home/dark/Client-saction-new";
import DarkHeroNew from "@/components/home/dark/DarkHeroNew";
import { hasUserConsented, setConsentCookie } from "@/lib/cookies";
import { Routes } from "@/utils/constants";
import CookieConsent from "react-cookie-consent";
import { LiaCookieBiteSolid } from "react-icons/lia";

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      <DarkHeroNew />
      <ClientSectionNew />
      <CaseStudies />
      <Certification />

      <CookieConsent
        location="bottom"
        cookieName="bpaasCookieConsent"
        enableDeclineButton
        declineButtonText="Decline"
        buttonText="Accept"
        style={{
          background: "#000",
          color: "#f1f5f9", // slate-100
          fontSize: "15px",
          padding: "1.5rem 2rem",
          borderRadius: "12px 12px 0px 0px",
          borderTop: "1px solid #ec964c",
          borderLeft: "1px solid #ec964c",
          borderRight: "1px solid #ec964c",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "900px",
          margin: "0 auto",
          position: "fixed",
          bottom: "10px",
          left: "0",
          right: "0",
          zIndex: 9999,
        }}
        buttonStyle={{
          background: "#ec964c",
          color: "#fff",
          padding: "0.6rem 1.5rem",
          fontWeight: "600",
          fontSize: "14px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
        }}
        declineButtonStyle={{
          background: "transparent",
          color: "#fff",
          border: "1px solid #fff",
          padding: "0.6rem 1.5rem",
          fontWeight: "600",
          fontSize: "14px",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
        }}
        onAccept={() => {
          setConsentCookie();
        }}
        onDecline={() => {
          hasUserConsented();
        }}
        expires={150}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <LiaCookieBiteSolid className="text-[#ec964c] text-5xl" />
          <span className="text-base sm:text-lg max-w-[600px]">
            We use cookies to enhance your experience, analyze usage, and
            provide tailored content. By clicking &ldquo;Accept&ldquo;, you
            agree to our use of cookies.
            <a
              href={Routes.COOKIE_POLICY}
              className="ml-2 underline text-[#ec964c] hover:text-sky-300 transition"
            >
              Learn more
            </a>
          </span>
        </div>
      </CookieConsent>
    </div>
  );
}
