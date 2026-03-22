import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/lib/metadata";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  ...baseMetadata,
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Aina Raphaël Rakotonaivo",
      jobTitle: "Développeur Fullstack",
      email: "raphael.rakotonaivo@gmail.com",
      url: "https://raphael-rakotonaivo.vercel.app",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Saint-Denis",
        addressRegion: "La Réunion",
        addressCountry: "FR",
      },
      sameAs: [
        "https://github.com/raphael137",
        "https://gitlab.com/raphael137",
        "https://www.linkedin.com/in/aina-rapha%C3%ABl-rakotonaivo-80a821189/",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
