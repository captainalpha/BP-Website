import "./globals.css";

export const metadata = {
  title: "Under Maintenance | BPAAS Solutions",
  description:
    "The BPAAS Solutions website is currently undergoing scheduled maintenance. We'll be back online shortly.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
