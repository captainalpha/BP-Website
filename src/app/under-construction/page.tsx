import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Under Construction",
  description: "BPAAS Solutions — our new website is coming soon.",
};

export default function UnderConstruction() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "1.5rem",
        padding: "2rem",
        background: "#0b0c10",
        color: "#f1f5f9",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      <Image
        src="/images/Logo-Reverse-png.png"
        alt="BPAAS Solutions"
        width={220}
        height={70}
        priority
        style={{ height: "auto", width: "auto", maxWidth: "220px" }}
      />

      <h1
        style={{
          fontSize: "clamp(1.75rem, 5vw, 3rem)",
          fontWeight: 700,
          margin: 0,
          background: "linear-gradient(90deg, #00c9ff, #9b59b6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        We&apos;re Building Something Great
      </h1>

      <p
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          maxWidth: "540px",
          lineHeight: 1.6,
          color: "#94a3b8",
          margin: 0,
        }}
      >
        Our website is currently under construction. We&apos;ll be back soon
        with a brand-new experience.
      </p>

      <a
        href="mailto:inquiry@bpaassolutions.com"
        style={{
          marginTop: "0.5rem",
          padding: "0.75rem 1.75rem",
          borderRadius: "9999px",
          fontWeight: 600,
          color: "#0b0c10",
          background: "linear-gradient(90deg, #00c9ff, #9b59b6)",
          textDecoration: "none",
        }}
      >
        Get in touch
      </a>
    </main>
  );
}
