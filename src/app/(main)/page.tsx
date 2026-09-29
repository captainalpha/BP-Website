import DarkHeroNew from "@/components/home/dark/DarkHeroNew";
import CookieBanner from "@/components/CookieBanner";
import dynamic from "next/dynamic";
const ClientSectionNew = dynamic(
  () => import("@/components/home/dark/Client-saction-new")
);
const OurPartnerships = dynamic(
  () => import("@/components/home/dark/OurPartnerships")
);
const Certification = dynamic(
  () => import("@/components/home/dark/Certification")
);
const AboutUs = dynamic(() => import("@/app/(main)/header-pages/about-us/page"));
const ContactUs = dynamic(() => import("@/app/(main)/contact-us/page"));

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      <DarkHeroNew />
      <ClientSectionNew />
      <OurPartnerships />
      <Certification />
      <AboutUs />
      <ContactUs />
      <CookieBanner />
    </div>
  );
}
