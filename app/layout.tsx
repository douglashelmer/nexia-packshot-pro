import type { Metadata } from "next";
import { Inter, Orbitron, Sail, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700", "800", "900"],
  display: "swap",
});
const script = Sail({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://nexiapackshot.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "nexIA Packshot Pro — Crie packshots profissionais sem câmera",
    template: "%s · nexIA Packshot Pro",
  },
  description:
    "Em poucas semanas você sai gerando imagens e vídeos de produto prontos pra Instagram, e-commerce e marketplace — mesmo sem saber nada de design ou fotografia.",
  keywords: [
    "packshot",
    "foto de produto com IA",
    "imagem de produto",
    "fotografia de produto",
    "packshot ecommerce",
    "imagem para marketplace",
    "curso de IA generativa",
    "Midjourney produto",
  ],
  authors: [{ name: "nexIA" }],
  creator: "nexIA",
  publisher: "nexIA",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "nexIA Packshot Pro",
    title: "nexIA Packshot Pro — Crie packshots profissionais sem câmera",
    description:
      "Em poucas semanas você sai gerando imagens e vídeos de produto prontos pra Instagram, e-commerce e marketplace — mesmo sem saber nada de design ou fotografia.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "nexIA Packshot Pro", type: "image/svg+xml" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "nexIA Packshot Pro",
    description:
      "Crie packshots profissionais de produto em minutos — sem câmera, sem estúdio, sem fotógrafo.",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.svg" },
};

const jsonLdCourse = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "nexIA Packshot Pro",
  description:
    "Curso completo de criação de imagens e vídeos de produto com IA — para Instagram, e-commerce e marketplace, sem câmera nem estúdio.",
  provider: { "@type": "Organization", name: "nexIA", sameAs: SITE_URL },
  offers: {
    "@type": "Offer",
    category: "Paid",
    priceCurrency: "BRL",
    price: "97.00",
    availability: "https://schema.org/InStock",
    url: SITE_URL + "#preco",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    inLanguage: "pt-BR",
    courseWorkload: "PT12H",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "nexIA",
  url: SITE_URL,
  logo: SITE_URL + "/favicon.svg",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${display.variable} ${script.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourse) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        {children}
      </body>
    </html>
  );
}
