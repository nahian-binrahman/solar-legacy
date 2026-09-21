import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import { MobileStickyCTA } from "@/components/layout/mobile-sticky-cta";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#04140E",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://solarlegacy.com"),
  title: {
    default: "Solar Legacy | Architectural Solar & Renewable Energy Architecture",
    template: "%s | Solar Legacy",
  },
  description:
    "Bespoke monocrystalline solar engineering, solid-state battery micro-grids, and architectural integration for luxury residential estates and commercial enterprises.",
  keywords: [
    "Solar Legacy",
    "Architectural Solar",
    "Luxury Solar Panels",
    "Solid-State Battery Storage",
    "Micro-Grid Engineering",
    "Commercial Net-Zero",
    "Bifacial Solar Technology",
    "Monocrystalline Solar",
  ],
  authors: [{ name: "Solar Legacy Engineering", url: "https://solarlegacy.com" }],
  creator: "Solar Legacy Technologies Inc.",
  publisher: "Solar Legacy Technologies Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solarlegacy.com",
    title: "Solar Legacy | Power Today. Build Your Legacy.",
    description:
      "Engineering bespoke monocrystalline solar micro-grids and solid-state energy storage for landmark estates.",
    siteName: "Solar Legacy",
    images: [
      {
        url: "/hero-solar.jpg",
        width: 1920,
        height: 1080,
        alt: "Solar Legacy luxury architectural estate with solar installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Legacy | Architectural Solar & Renewable Energy",
    description:
      "High-efficiency monocrystalline solar systems and intelligent solid-state energy storage for luxury properties.",
    images: ["/hero-solar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://solarlegacy.com",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Solar Legacy",
  image: "https://solarlegacy.com/hero-solar.jpg",
  "@id": "https://solarlegacy.com/#organization",
  url: "https://solarlegacy.com",
  telephone: "+1-800-555-7652",
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "100 Solar Way, Suite 400",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.7749,
    longitude: -122.4194,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.linkedin.com/company/solar-legacy",
    "https://twitter.com/solarlegacy",
  ],
  description:
    "Solar Legacy designs and installs high-efficiency monocrystalline solar systems and intelligent battery storage for architectural estates and commercial landmarks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-solar-300 selection:text-forest-950 pb-16 lg:pb-0">
        {children}
        <MobileStickyCTA />
      </body>
    </html>
  );
}
