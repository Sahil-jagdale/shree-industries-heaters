import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shreeindustriesheaters.com"),
  title: {
    default: "Industrial Heaters & Heating Elements Manufacturer | Shree Industries",
    template: "%s | Shree Industries",
  },
  description:
    "Leading Indian manufacturer of custom industrial heaters, cartridge heaters, tubular immersion elements, band heaters & furnace heating equipment since 1994. ISO compliant.",
  keywords: [
    "Industrial Heaters Manufacturer",
    "Cartridge Heaters",
    "Tubular Heating Elements",
    "Band Heaters",
    "Immersion Heaters",
    "Custom Industrial Heating Solutions",
    "Mica Band Heaters",
    "Ceramic Band Heaters",
    "Porcelain Heaters",
    "Industrial Heating Elements India",
    "Transformer Oven Manufacturer",
    "Muffle Furnace India",
  ],
  authors: [{ name: "Shree Industries" }],
  creator: "Shree Industries",
  publisher: "Shree Industries",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.shreeindustriesheaters.com",
    siteName: "Shree Industries Heaters",
    title: "Industrial Heaters & Heating Elements Manufacturer | Shree Industries",
    description:
      "Leading manufacturer of custom industrial electric heaters, cartridge heaters, tubular elements, immersion and band heaters. ISO compliant. Request a quote.",
    images: [
      {
        url: "/images/slider-main/bg1.png",
        width: 1200,
        height: 630,
        alt: "Shree Industries - Industrial Heating Elements & Thermal Equipment Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Heaters & Heating Elements Manufacturer | Shree Industries",
    description:
      "Leading manufacturer of custom industrial electric heaters, cartridge heaters, tubular elements, immersion and band heaters. ISO compliant.",
    images: ["/images/slider-main/bg1.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Manufacturer", "LocalBusiness", "Organization"],
      "@id": "https://www.shreeindustriesheaters.com/#organization",
      "name": "Shree Industries",
      "alternateName": ["Shree Industries Heaters", "Shree Industrial Heaters"],
      "url": "https://www.shreeindustriesheaters.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.shreeindustriesheaters.com/images/logo.jpg",
        "caption": "Shree Industries Logo",
      },
      "image": "https://www.shreeindustriesheaters.com/images/slider-main/bg1.png",
      "description":
        "Premier Indian manufacturer and exporter of custom industrial electric heaters, cartridge heaters, tubular heating elements, immersion heaters, band heaters, and furnace equipment since 1994.",
      "telephone": "+91-9096258317",
      "email": "sale@shreeindustriesheaters.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress":
          "Plot No. E-34, WTC Trade Center, SP Waluj Road, Ranjangaon Shenapunji, Waluj MIDC",
        "addressLocality": "Chhatrapati Sambhaji Nagar",
        "addressRegion": "Maharashtra",
        "postalCode": "431136",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.8398",
        "longitude": "75.2447",
      },
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "AdministrativeArea", "name": "Maharashtra" },
      ],
      "priceRange": "$$",
      "knowsAbout": [
        "Industrial Electric Heaters",
        "Cartridge Heaters",
        "Tubular Immersion Heaters",
        "Ceramic Band Heaters",
        "Mica Band Heaters",
        "Porcelain Bobbin Heaters",
        "Furnace Heating Elements",
        "Transformer Drying Ovens",
        "Muffle Furnaces",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.shreeindustriesheaters.com/#website",
      "url": "https://www.shreeindustriesheaters.com",
      "name": "Shree Industries",
      "publisher": {
        "@id": "https://www.shreeindustriesheaters.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
