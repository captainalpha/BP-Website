import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import NextTopLoader from "nextjs-toploader";
import Analytics from "@/components/Analytics";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImageKitProvider } from "@imagekit/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    absolute: "BPAAS Solutions pvt",
    template: "%s - BPAAS Solutions pvt",
  },
  description:
    "BPAAS Solutions delivers intelligent, scalable platforms that transform the way organizations operate. By blending automation, cloud-native architecture, and deep domain expertise, we empower businesses to streamline workflows, reduce complexity, and unlock new levels of efficiency. We don't just build solutions we architect digital excellence for the next generation of enterprise.",

  openGraph: {
    title: "BPAAS Solutions pvt",
    description:
      "BPAAS Solutions delivers intelligent, scalable platforms that transform the way organizations operate. By blending automation, cloud-native architecture, and deep domain expertise, we empower businesses to streamline workflows, reduce complexity, and unlock new levels of efficiency. We don't just build solutions we architect digital excellence for the next generation of enterprise.",
    url: "https://bpaas-website.vercel.app/",
    type: "website",
    siteName: "BPAAS Solutions",
    images: [
      {
        url: "https://ik.imagekit.io/bpaas/bpaas%20home%20hero%20.png?updatedAt=1751975069431",
        width: 1200,
        height: 630,
        alt: "BPAAS Solutions Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BPAAS Solutions pvt",
    description:
      "BPAAS Solutions delivers intelligent, scalable platforms that transform the way organizations operate. By blending automation, cloud-native architecture, and deep domain expertise, we empower businesses to streamline workflows, reduce complexity, and unlock new levels of efficiency. We don't just build solutions we architect digital excellence for the next generation of enterprise.",
    images: [
      "https://ik.imagekit.io/bpaas/bpaas%20home%20hero%20.png?updatedAt=1751975069431",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ImageKitProvider urlEndpoint="https://ik.imagekit.io/bpaas">
          <NextTopLoader
            color="#ec964c"
            initialPosition={0.3}
            crawlSpeed={30}
            speed={50}
            crawl={true}
            showSpinner={false}
            height={3}
            easing="linear"
            shadow={false}
          />
          <Providers>
            <Analytics />
            <ToastContainer draggable pauseOnHover theme="dark" />
            {children}
          </Providers>
        </ImageKitProvider>
      </body>
    </html>
  );
}
