import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transformer Ovens, Muffle Furnaces & AMC Services",
  description:
    "Leading supplier of transformer drying ovens, high-temperature muffle furnaces, SiC heating elements, APFC/PLC panels & Annual Maintenance Contracts (AMC) across India.",
  alternates: {
    canonical: "https://shreeindustriesheaters.com/supply-services",
  },
  openGraph: {
    title: "Transformer Ovens, Muffle Furnaces & AMC Services | Shree Industries",
    description:
      "Leading supplier of transformer drying ovens, high-temperature muffle furnaces, SiC heating elements, APFC/PLC panels & Annual Maintenance Contracts (AMC) across India.",
    url: "https://shreeindustriesheaters.com/supply-services",
    images: [
      {
        url: "/images/supply-services/transformer-oven.png",
        width: 800,
        height: 600,
        alt: "Transformer Drying Oven - Shree Industries",
      },
    ],
  },
};

export default function SupplyServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
