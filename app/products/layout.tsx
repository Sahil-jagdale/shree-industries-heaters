import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Heaters & Custom Heating Elements Catalog",
  description:
    "Comprehensive catalog of industrial heaters: Cartridge, Immersion, Ceramic Band, Mica, Roller, and Porcelain heaters manufactured for high thermal efficiency.",
  alternates: {
    canonical: "https://www.shreeindustriesheaters.com/products",
  },
  openGraph: {
    title: "Industrial Heaters & Custom Heating Elements Catalog | Shree Industries",
    description:
      "Comprehensive catalog of industrial heaters: Cartridge, Immersion, Ceramic Band, Mica, Roller, and Porcelain heaters manufactured for high thermal efficiency.",
    url: "https://www.shreeindustriesheaters.com/products",
    images: [
      {
        url: "/images/slider-main/bg1.png",
        width: 1200,
        height: 630,
        alt: "Shree Industries Industrial Heaters Catalog",
      },
    ],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
