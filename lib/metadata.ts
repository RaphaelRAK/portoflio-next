import type { Metadata } from "next";

export const siteConfig = {
  name: "Aina Raphaël Rakotonaivo",
  title: "Aina Raphaël Rakotonaivo — Développeur Fullstack",
  description:
    "Développeur Fullstack React Native & Next.js basé à La Réunion. CDI chez plüm. Ouvert aux opportunités en remote, Paris, Lyon, Toulouse.",
  url: "https://raphael-rakotonaivo.vercel.app",
  email: "raphael.rakotonaivo@gmail.com",
  location: "La Réunion",
  github: "https://github.com/raphael137",
  gitlab: "https://gitlab.com/raphael137",
  linkedin: "https://www.linkedin.com/in/aina-rapha%C3%ABl-rakotonaivo-80a821189/",
};

export const baseMetadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};
