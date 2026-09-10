import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelatedProducts from "../../../components/RelatedProducts";
import SubProductAccordion from "../../../components/SubProductAccordion";
import ExpandableDescription from "../../../components/ExpandableDescription";
import JsonLd from "../../../components/JsonLd";

type Product = {
  name: string;
  image: string;
  description: string;
  features: string[];
  specifications?: string[][];
  additionalSpecifications?: string[][];
  tableHeaders?: string[];
  subProducts?: Product[];
  images?: string[];
};

const products: Record<string, Product> = {
  "porcelain-heater": {
    name: "Porcelain Heater",
    image: "porcelain-heater.png",
    description:
      "Porcelain Heaters (also known as Ceramic Bobbin Heaters) are heavy-duty, high-performance heating solutions engineered specifically for both direct and indirect heating of liquids, gases, and viscous materials in demanding industrial environments. Constructed from high-refractory, grooved steatite porcelain ceramic segments mounted along a central stainless-steel tie rod, these elements hold premium 80/20 Nichrome (NiCr) or Kanthal A1 resistance wire in open circumferential grooves to maximize radiant and convective heat transfer.\n\nBecause these heaters are commonly installed inside protective thermowells and immersion pocket tubes, element replacement or routine inspection can be carried out cleanly and quickly without draining tanks, vessels, or piping systems, completely eliminating expensive operational downtime.\n\n<strong>Key Features & Numerical Specifications:</strong>\n• <strong>Operating Temperatures:</strong> Capable of sustaining continuous sheath temperatures up to 800°C (1472°F) and core refractory ceramic withstand temperatures reaching up to 1100°C.\n• <strong>Diameter Options:</strong> Standard cylindrical body diameters include 31 mm, 36 mm, 46 mm, and 57 mm, engineered to slide directly into standard 1.5-inch, 2-inch, and 3-inch protection tubes or thermowells.\n• <strong>Available Lengths:</strong> Manufactured in modular heating lengths from 300 mm up to 3000 mm (0.3 m to 3.0 m), featuring customized unheated cold zones ranging from 50 mm to 300 mm to protect terminal connections.\n• <strong>Electrical & Power Ratings:</strong> Available for 230V single-phase and 415V/440V 3-phase circuits, with power capacities scalable from 1.0 kW up to 24.0 kW per element. Watt densities are calibrated between 2.5 W/cm² and 6.0 W/cm² to prevent carbonization and fluid degradation.\n• <strong>Dielectric & Insulation Integrity:</strong> High-grade electrical porcelain provides dielectric breakdown resistance greater than 2000V AC and cold insulation resistance exceeding 20 MΩ at 500V DC.\n\nThese heaters are widely deployed in horizontal and vertical configurations across bitumen tanks, industrial fuel oil preheaters, chemical processing vessels, hot water boilers, and industrial heat-treatment ovens, delivering dependable performance and exceptional thermal efficiency.",
    features: [
      "Operating temperatures up to 800°C with 1100°C refractory core rating",
      "Standard body diameters of 31 mm, 36 mm, 46 mm, and 57 mm",
      "Heating lengths modularly scalable from 300 mm to 3000 mm",
      "Power ratings from 1.0 kW to 24.0 kW (230V / 415V / 440V)",
      "High dielectric insulation strength exceeding 2000V AC",
      "Replaceable without draining tanks or interrupting production pipelines",
    ],
  },
  "roller-heater": {
    name: "Roller Heater",
    image: "roller_heater1.png",
    description:
      "Shree Industries Super Roller Heaters are specialized, high-capacity industrial heating assemblies engineered specifically for uniform internal and surface heating of rotating cylinders, corrugation rolls, laminating drums, calendar rolls, and continuous web processing machinery. Constructed with a bundle of heavy-duty, swaged tubular heating elements fabricated from high-grade Stainless Steel (SS 304 / SS 316) or Incoloy sheathing, these heaters provide rapid heat transfer, exceptional mechanical strength, and rigorous vibration resistance under continuous industrial rotation.\n\nEach roller heating assembly features precision-wound 80/20 Nichrome resistance coils insulated with high-purity electro-fused Magnesium Oxide (MgO) compacted to high density via swaging. This ensures superior thermal conductivity, rapid thermal ramp-up, and zero hot-spots along the entire effective face length of the machine roller, directly preventing uneven processing, bubbling, or thermal distortion in paper, corrugated boards, textiles, and plastic films.\n\n<strong>Key Features & Numerical Specifications:</strong>\n• <strong>Tube Diameter & Element Geometry:</strong> Standard 10.5 mm outer diameter (OD) straight swaged heating elements bundled in a multi-element circular array (typically 9 straight heavy-duty elements) to deliver 360° balanced radial heat.\n• <strong>Machine Compatibility & Widths:</strong> Engineered for standard industrial machine widths including 42-inch (1067 mm), 45-inch (1143 mm), 52-inch (1321 mm), and 62-inch (1575 mm) rolls, with custom barrel lengths engineered on request up to 3000 mm.\n• <strong>Power & Electrical Ratings:</strong> Designed for standard 440V / 415V 3-phase industrial power supplies. High-output ratings range from 7.0 kW, 8.0 kW, 9.0 kW, 10.0 kW, 11.0 kW, 12.0 kW, up to 14.0 kW per roller assembly (custom ratings up to 24 kW available).\n• <strong>Operating Temperatures:</strong> Continuous operational sheath temperatures up to 600°C (1112°F) with surface uniformity maintained within ±3°C across the operational roller face.\n• <strong>Journal & Bearing Thermal Protection:</strong> Engineered with calibrated unheated cold ends at drive and non-drive shaft ends, protecting rotary unions, roll bearings, and slip-ring electrical assemblies from thermal degradation.\n• <strong>Dielectric Strength & Insulation:</strong> High-voltage breakdown tested to >2000V AC with cold insulation resistance exceeding 20 MΩ at 500V DC for maximum operational safety.\n\nThese heaters are widely utilized across corrugation box manufacturing, textile heat-setting stenters, plastic sheet laminators, rotogravure printing presses, and rubber processing drums, offering long service life and zero unplanned production halts.",
    features: [
      "Heavy-duty 10.5 mm diameter swaged SS 304 / SS 316 tubular construction",
      "Nine-element radial bundle delivering uniform 360° circumferential heat",
      "Calibrated for 42\", 45\", 52\", and 62\" machine roller widths",
      "Power ratings from 7.0 kW up to 14.0 kW on 440V / 3-phase power",
      "Sustained operating temperatures up to 600°C with ±3°C surface uniformity",
      "Unheated cold zones engineered to protect rotary bearings and slip rings",
    ],
    specifications: [
      ["RHI/1701", "For 62 inch machine — 440V/3 phase — 14 kW"],
      ["RHI/1702", "For 52 inch machine — 440V/3 phase — 12 kW"],
      ["RHI/1703", "For 45 inch machine — 440V/3 phase — 11 kW"],
      ["RHI/1704", "For 42 inch machine — 440V/3 phase — 10 kW"],
    ],
    additionalSpecifications: [
      ["RHI/1705", "For 62 inch machine — 440V/3 phase — 11 kW"],
      ["RHI/1706", "For 52 inch machine — 440V/3 phase — 09 kW"],
      ["RHI/1707", "For 45 inch machine — 440V/3 phase — 08 kW"],
      ["RHI/1708", "For 42 inch machine — 440V/3 phase — 07 kW"],
    ],
  },
  "industrial-water-horizontal-type-heater": {
    name: "Industrial Water Heater",
    image: "ss-304-watter_heater.png",
    description:
      "The SS 304 Industrial Water Horizontal Type Heater is a high-performance heating solution designed for industrial applications.Crafted from premium stainless steel (SS 304), it boasts exceptional durability and corrosion resistance. With its horizontal design, this heater optimizes space utilization, making it ideal for installations with limited vertical space. Equipped with advanced heating elements, it ensures rapid and efficient water heating, catering to diverse industrial needs. Safety features, easy installation, and compliance with industry standards make this heater a reliable choice for industrial facilities requiring a constant and precise source of hot water. Upgrade your industrial water heating system with the SS 304 Industrial Water Horizontal Type Heater for a dependable and efficient solution.",
    features: [
      "Corrosion-resistant construction",
      "Built for industrial water-heating duties",
      "Custom wattage and mounting options available",
    ],
    tableHeaders: ["Item Code", "WATTS", "VOLTS", "DEPTH OF IMMER", "FLANGE"],
    specifications: [
      ["RHI/1401", "2000", "230", "220 mm", "1 1/4\" BSPT"],
      ["RHI/1402", "2000", "230", "220 mm", "1 1/2\" BSPT"],
      ["RHI/1403", "3000", "230", "280 mm", "1 1/4\" BSPT"],
      ["RHI/1404", "3000", "230/400", "220 mm", "1 1/2\" BSPT"],
      ["RHI/1405", "3000", "230/400", "220 mm", "2\" BSPT"],
    ],
    additionalSpecifications: [
      ["RHI/1406", "4000", "230/400", "260 mm", "2\" BSPT"],
      ["RHI/1407", "5000", "230/400", "320 mm", "2\" BSPT"],
      ["RHI/1408", "6000", "230/400", "380 mm", "2 1/2\" BSPT"],
      ["RHI/1409", "9000", "230/400", "550 mm", "2 1/2\" BSPT"],
      ["RHI/1410", "12000", "230/400", "575 mm", "2 1/2\" BSPT"],
    ],
  },
  "immersion-heater": {
    name: "Immersion Heaters",
    image: "emmersion_heaters1.png",
    description:
      "An immersion heater is a device which is installed in a tank or container to heat a liquid. The installation can be over-the-side, flanged or threaded. Immersion heaters are available with heating elements made of copper, steel, stainless steel, cast iron, Incoloy, titanium, and PFA coated. A wide selection of kilowatt ratings, shapes and mounting methods are available to suit many different types of applications.",
    features: [
      "Direct and efficient heat transfer",
      "Suitable for tanks and process vessels",
      "Available in custom lengths and ratings",
    ],
    tableHeaders: ["ITEM CODE", "SHEATHING", "WATTS", "HEIGHT INEFFECTIVE", "LENGTH EFFECT", "FIXING CLAMP"],
    specifications: [
      ["RHI/1601", "TITANIUM", "1000", "150 MM", "300 MM", "75 X 100"],
      ["RHI/1602", "\"", "2000", "150 MM", "450 MM", "mm X mm"],
      ["RHI/1603", "\"", "3000", "150 MM", "600 MM", "\" \""],
      ["RHI/1604", "\"", "4000", "150 MM", "750 MM", "\" \""],
      ["RHI/1605", "STAINLESS", "1000", "100 MM", "200 MM", "100 X 125"],
      ["RHI/1606", "\"", "1500", "150 MM", "300 MM", "mm X mm"],
      ["RHI/1607", "\"", "2000", "150 MM", "450 MM", "\" \""],
    ],
    additionalSpecifications: [
      ["RHI/1608", "\"", "3000", "150 MM", "600 MM", "\" \""],
      ["RHI/1609", "\"", "4000", "150 MM", "750 MM", "\" \""],
      ["RHI/16010", "LEAD BONDED", "1000", "100 MM", "200 MM", "\" \""],
      ["RHI/16011", "\"", "1500", "150 MM", "300 MM", "\" \""],
      ["RHI/16012", "\"", "2000", "150 MM", "450 MM", "\" \""],
      ["RHI/16013", "\"", "3000", "150 MM", "600 MM", "\" \""],
      ["RHI/16014", "\"", "4000", "150 MM", "750 MM", "\" \""],
    ],
    subProducts: [
      {
        name: "Silica Cased Immersion Heater",
        image: "emmersion_heaters1.png",
        description: "Silica Cased Immersion Heaters are efficient and durable heating solutions designed for applications requiring direct immersion into liquids. Encased in a robust silica sheath, these heaters are particularly well-suited for use in corrosive environments such as chemical processing and water treatment.",
        features: ["Efficient and durable heating solutions", "Robust silica sheath for corrosive environments", "Ideal for chemical processing and water treatment"],
        tableHeaders: ["Item Code", "WATTS AT 230 VOLTS", "HEATING LENGTH INEFFECTIVE", "HEATING LENGTH EFFECTIVE", "TOTAL"],
        specifications: [
          ["RHI/1201", "1000", "150 MM", "300 MM", "450 MM"],
          ["RHI/1202", "2000", "150 MM", "450 MM", "600 MM"],
        ],
        additionalSpecifications: [
          ["RHI/1203", "3000", "150 MM", "600 MM", "750 MM"],
          ["RHI/1204", "4000", "150 MM", "750 MM", "900 MM"],
        ]
      },
      {
        name: "Alkaline Immersion Heater",
        image: "emmersion_heaters1.png",
        description: "Alkaline Immersion Heaters are specialized heating elements designed for applications where resistance to corrosive or alkaline environments is essential. These heaters are crafted with materials that exhibit exceptional corrosion resistance, making them suitable for use in industries such as chemical processing, metal finishing, and certain water treatment applications.",
        features: ["Specialized for corrosive or alkaline environments", "Exceptional corrosion resistance", "Suitable for chemical processing and metal finishing"],
        tableHeaders: ["TYPE", "WATTS AT 230 VOLTS", "VERTICAL LENGTH", "INEFFECTIVE LENGTH"],
        specifications: [
          ["RHI/1301", "1000", "150 MM", "300 MM"],
          ["RHI/1302", "2000", "150 MM", "450 MM"],
        ],
        additionalSpecifications: [
          ["RHI/1303", "3000", "150 MM", "600 MM"],
          ["RHI/1304", "4000", "150 MM", "750 MM"],
        ]
      },
      {
        name: "Oil Immersion Heater",
        image: "ss-304-watter_heater.png",
        description: "Oil Immersion Heaters are purpose-built heating elements designed for efficient and reliable heating of oils in various industrial processes. These heaters are specifically crafted to be immersed directly into oil, providing uniform and controlled heating for applications such as oil processing, hydraulic systems, and industrial heating.",
        features: ["Purpose-built for efficient heating of oils", "Provides uniform and controlled heating", "Ideal for oil processing and hydraulic systems"],
        tableHeaders: ["ITEM CODE", "WATTS", "VOLTS", "DEPTH IMMER", "HEADER"],
        specifications: [
          ["RHI/1501", "1000W", "230V", "438", "2 1/2\" BPST"],
          ["RHI/1502", "1500W", "230V", "438", "2 1/2\" BPST"],
          ["RHI/1503", "2000W", "230V", "438", "2 1/2\" BPST"],
          ["RHI/1504", "3000W", "230V/400V", "438", "2 1/2\" BPST"],
        ],
        additionalSpecifications: [
          ["RHI/1505", "4000W", "230V/400V", "575", "2 1/2\" BPST"],
          ["RHI/1506", "5000W", "230V/400V", "575", "2 1/2\" BPST"],
          ["RHI/1507", "6000W", "230V/400V", "575", "2\" BPST"],
          ["RHI/1508", "9000W", "230V/400V", "575", "2 1/2\" BPST"],
        ]
      }
    ]
  },
  "loadbank-heater": {
    name: "Load Bank Heater",
    image: "loadBank_heater.png",
    description:
      "A Load Bank Heater is a critical element in the testing and maintenance of power systems. It is a specialized device designed to apply an artificial electrical load to generators, batteries, or other power sources. This allows for the simulation of real-world conditions, ensuring that the power system is thoroughly tested for performance and reliability.\n\nLoad bank heaters are particularly important in assessing a system's ability to handle varying loads and identifying potential issues that may arise during operation. By replicating realistic thermal conditions, these heaters contribute significantly to the overall efficiency and dependability of power systems, making them indispensable tools in the field of electrical testing and validation.\n\nShree Industries is a top rated Load Bank Heater manufacturer in Pune, and our ISO certified company supplies Load Bank to clients across industries.",
    features: [
      "Applies artificial electrical load to power sources",
      "Simulates real-world thermal conditions",
      "Essential for electrical testing and validation",
    ],
  },
  "cartridge-heater": {
    name: "High Density Cartridge Heater",
    image: "high_density_cartridge_heater1.png",
    description:
      "Cartridge heaters are compact and versatile heating elements designed for a wide range of industrial and commercial applications. These cylindrical devices consist of a resistive heating coil encased in a metal sheath, typically made of stainless steel. The coil is carefully wound to ensure uniform heat distribution throughout the length of the cartridge.\n\nOne of the key features of cartridge heaters is their ability to deliver precise and localized heat within a confined space. This makes them ideal for applications where targeted heating is essential, such as in injection molding, packaging machinery, hot runners, and various manufacturing processes. The small and cylindrical design allows for easy installation and integration into tight spaces, ensuring efficient heat transfer.\n\nCartridge heaters come in various diameters, lengths, and power ratings, offering flexibility to suit different requirements. They are capable of reaching high temperatures quickly and maintaining precise temperature control, contributing to energy efficiency and optimized production processes.\n\nThese heaters are often equipped with various options, such as built-in thermocouples or temperature sensors, to enable accurate temperature monitoring and control. This feature is particularly crucial in applications where maintaining a specific temperature is critical for the quality of the end product.\n\nWe are the leading Cartridge Heater Manufacturer In Pune. At Shree Industries, our Expertise and experience is, we are manufacturing High Watt Density cartridge Heaters in India.",
    features: [
      "Rapid heat transfer in demanding applications",
      "High-density compaction for extended life",
      "Exact uniform heating",
    ],
  },
  "ceramic-band-heater": {
    name: "Ceramic Band Heater",
    image: "ceramic_band_heater.png",
    description:
      "Shree Industries is a well known manufacturer of Ceramic Band Heaters in Pune. The Ceramic Band Heater is a compact and efficient heating solution designed for a variety of industrial applications. This specialized heater features a robust ceramic band that ensures uniform heat distribution, making it ideal for applications requiring consistent and controlled heating. With a durable construction, it provides reliable performance in demanding environments. The Ceramic Band Heater is easy to install and offers versatility for use in plastic injection molding, extrusion, and other industrial processes. Upgrade your heating system with this reliable and compact solution, providing precise temperature control for enhanced productivity in your operations.\n\nAt Shree Industries, Ceramic Band Heaters are manufactured as per Customers Specification and Drawing.",
    features: [
      "Robust ceramic band for uniform heat distribution",
      "Reliable performance in demanding environments",
      "Versatile use in plastic injection molding and extrusion",
    ],
  },
  "u-shape-air-heater": {
    name: "U-Shape Air Heater",
    image: "ushaped_finned_heater1.png",
    description:
      "The U-shaped Air Heater is a compact and versatile heating solution designed for efficient and uniform air heating applications. Its distinctive U-shaped design allows for optimal heat distribution, making it suitable for a variety of industrial processes. Crafted with durability in mind, this heater ensures reliability and consistent performance in diverse environments. Whether used in drying systems, HVAC applications, or other air-heating requirements, the U-shaped Air Heater delivers reliable and efficient heat transfer. Its compact form factor and ease of installation make it a practical choice for enhancing the heating capabilities of your air systems, providing a reliable solution for achieving desired temperatures with precision.",
    features: [
      "Maximizes surface area for rapid heat transfer",
      "Ideal for duct heating and forced air systems",
      "Long life and durable construction",
    ],
    tableHeaders: ["ITEM CODE", "WATTS", "VOLT", "LENGTH", "BREATH", "HEIGHT"],
    specifications: [
      ["RHI/1001", "500", "230", "250 MM", "55", "40"],
      ["RHI/1002", "750", "230", "450 MM", "55", "40"],
      ["RHI/1003", "1000", "230", "610 MM", "55", "40"],
      ["RHI/1004", "1000", "230", "762 MM", "55", "40"],
      ["RHI/1005", "1500", "230", "610 MM", "55", "40"],
    ],
    additionalSpecifications: [
      ["RHI/1006", "1500", "230", "762 MM", "55", "40"],
      ["RHI/1007", "1500", "230", "900 MM", "55", "40"],
      ["RHI/1008", "1500", "230", "1000 MM", "55", "40"],
      ["RHI/1009", "2000", "230", "900 MM", "55", "40"],
    ],
  },
  "mica-band-heater": {
    name: "Mica Band Heater",
    image: "mica_band_heater_1.png",
    description:
      "The Mica Band Heater is a compact and effective heating solution designed for industrial applications requiring precise and uniform heat distribution. With its durable construction and efficient mica-insulated band, this heater is ideal for applications such as injection molding, extrusion, and other processes that demand consistent and controlled heating.\n\nThe Mica Band Heater is known for its rapid heating capabilities and reliability, ensuring optimal performance in demanding environments. Easy to install and offering versatility in usage, it stands as a dependable choice for industries seeking efficient and customizable heating solutions. Upgrade your heating system with the Mica Band Heater for enhanced productivity and temperature control in various industrial processes. We manufacture Mica Band Heaters as per Customer's Specification and Details.",
    features: [
      "Compact and effective heating solution",
      "Precise and uniform heat distribution",
      "Rapid heating capabilities and reliability",
      "Easy to install and versatile in usage",
    ],
  },

  "hot-runner-heater": {
    name: "Hot Runner Heater",
    image: "runner_heater1.png",
    description:
      "Hot Runner Heaters are precision-engineered heating elements designed for injection molding systems, playing a crucial role in ensuring the efficient and controlled melting of thermoplastic materials. These heaters are strategically positioned within the mold to maintain optimal temperatures in the channels or \"runners\" through which molten plastic flows, preventing premature cooling and ensuring uniform distribution during the molding process.\n\nCrafted with high-quality materials, Hot Runner Heaters offer rapid and precise heating, contributing to faster production cycles and enhanced product quality. The design of these heaters minimizes energy consumption by focusing heat precisely where it's needed, reducing waste and promoting cost-effectiveness in manufacturing operations.\n\nHot Runner Heaters come in various configurations, including nozzle and manifold types, catering to different injection molding setups. Their durability and resistance to corrosion ensure a prolonged service life, making them a reliable component in industrial settings.\n\nKey features of Hot Runner Heaters include excellent temperature control, quick response times, and compatibility with various thermoplastic materials. These heaters contribute significantly to the overall efficiency and consistency of injection molding processes, making them an integral component for industries seeking high-performance and reliable solutions in plastic manufacturing.",
    features: [
      "Precision-engineered for injection molding systems",
      "Prevents premature cooling and ensures uniform distribution",
      "Rapid and precise heating for faster production cycles",
      "Minimizes energy consumption and reduces waste",
    ],
  },
  "ceramic-infrared-heater": {
    name: "Ceramic Infrared Heater",
    image: "ceramic_infrared_heater.png",
    description:
      "Ceramic Infrared Heaters represent a cutting-edge and energy-efficient solution for industrial and commercial heating needs. These heaters leverage advanced ceramic technology to emit infrared radiation, delivering rapid and targeted heat for various applications. Characterized by their efficiency, these heaters are ideal for processes requiring quick temperature adjustments, such as drying, curing, and heating.\n\nThe ceramic element within these heaters allows for optimal heat distribution, ensuring uniform warmth across the targeted area. Known for their durability, Ceramic Infrared Heaters are designed to withstand the rigors of industrial environments, providing a reliable and long-lasting heating solution.\n\nVersatility is a key feature, making these heaters suitable for diverse industries, including manufacturing, food processing, automotive, and more. Their compact design facilitates easy integration into existing systems, offering a practical and space-efficient heating solution.",
    features: [
      "Focused radiant heat",
      "Efficient ceramic emitter",
      "Suitable for process heating lines",
    ],
    specifications: [
      ["Application", "Radiant process heating"],
      ["Technology", "Ceramic infrared emitter"],
      ["Configuration", "Custom power and mounting"],
    ],
  },
  "furnace-heating-elements": {
    name: "Furnace Heating Element",
    image: "heating-elements.png",
    description:
      "Furnace Heating Elements, fabricated from high-performance materials such as Kanthal and Nichrome, represent state-of-the-art solutions for industrial heating applications. These heating elements play a crucial role in achieving high temperatures within furnaces for processes like metal smelting, heat treatment, and various industrial applications.\n\n<strong>Kanthal Heating Elements:</strong>\n<ul style=\"margin-top: 10px; margin-bottom: 0; padding-left: 20px;\"><li style=\"margin-bottom: 5px;\">Description: Kanthal, an iron-chromium-aluminum alloy, is renowned for its exceptional resistance to high temperatures and oxidation. Kanthal heating elements boast longevity and reliability, making them suitable for applications requiring sustained exposure to extreme heat.</li><li>Advantages: Superior durability, oxidation resistance, and excellent thermal stability make Kanthal heating elements ideal for high-temperature furnace applications. They contribute to consistent and efficient heating over extended periods.</li></ul>\n\n<strong>Nichrome Heating Elements:</strong>\n<ul style=\"margin-top: 10px; margin-bottom: 0; padding-left: 20px;\"><li style=\"margin-bottom: 5px;\">Description: Comprising nickel and chromium, Nichrome heating elements are valued for their high electrical resistance and stability at elevated temperatures. This alloy is particularly well-suited for applications demanding precise temperature control and rapid heating.</li><li>Advantages: Nichrome heating elements offer quick response times, ensuring rapid heating and precise temperature maintenance. Their versatility makes them suitable for a wide range of industrial furnace applications.</li></ul>",
    features: [],
  },
  "other-products": {
    name: "Other Products",
    image: "other_products.png",
    description:
      "At Shree Industries, we manufacture a host of other products in the range of Heating Solutions. From coils to casing to control panel, we manufacture and supply everything related to heating requirements.\n\nGet in touch with us to know more.",
    features: [
      "Coils, casings, and control panels",
      "Comprehensive heating solutions",
      "Built exactly to application requirements",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug];
  if (!product) return {};

  const cleanDesc = product.description
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 150);

  return {
    title: `${product.name} Manufacturer & Supplier | Shree Industries`,
    description: `${cleanDesc}... Heavy duty engineering, fast dispatch across India. Request a quote.`,
    alternates: {
      canonical: `https://www.shreeindustriesheaters.com/products/${slug}`,
    },
    openGraph: {
      title: `${product.name} Manufacturer & Supplier | Shree Industries`,
      description: `${cleanDesc}... Heavy duty engineering, fast dispatch across India.`,
      url: `https://www.shreeindustriesheaters.com/products/${slug}`,
      images: [
        {
          url: `/images/products/${product.image}`,
          width: 800,
          height: 600,
          alt: `${product.name} - Industrial Electric Heater - Shree Industries`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Shree Industries`,
      description: `${cleanDesc}...`,
      images: [`/images/products/${product.image}`],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];
  if (!product) notFound();

  const cleanDescription = product.description
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 300);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://www.shreeindustriesheaters.com/images/products/${product.image}`,
    description: cleanDescription,
    category: "Industrial Heating Equipment",
    brand: {
      "@type": "Brand",
      name: "Shree Industries",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Shree Industries",
      url: "https://www.shreeindustriesheaters.com",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "0",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      url: `https://www.shreeindustriesheaters.com/products/${slug}`,
      seller: {
        "@type": "Organization",
        name: "Shree Industries",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.shreeindustriesheaters.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.shreeindustriesheaters.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://www.shreeindustriesheaters.com/products/${slug}`,
      },
    ],
  };

  const specificationTable = (specifications: string[][], headers: string[] = ["Reference", "Specification"]) => (
    <div className="specification-table">
      <div
        className="specification-row specification-heading"
        style={headers.length !== 2 ? { gridTemplateColumns: `repeat(${headers.length}, 1fr)` } : undefined}
      >
        {headers.map((h, i) => (
          <strong key={i}>{h}</strong>
        ))}
      </div>
      {specifications.map((row, index) => (
        <div
          className="specification-row"
          key={index}
          style={row.length !== 2 ? { gridTemplateColumns: `repeat(${row.length}, 1fr)` } : undefined}
        >
          {row.map((cell, i) => (
            <span key={i}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );

  const renderProductDetails = (prod: Product) => (
    <div key={prod.name}>
      <section className="product-details section">
        <div className="container">
          <Link className="back-link" href="/products">
            ← Back to products
          </Link>
          <h1>{prod.name}</h1>

          <div className="product-details-grid">
            <div>
              {prod.images ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {prod.images.map((img, idx) => (
                    <div className="product-detail-image" key={idx}>
                      <Image
                        src={`/images/products/${img}`}
                        alt={`${prod.name} view ${idx + 1} - Industrial Heater - Shree Industries`}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 800px) 100vw, 48vw"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="product-detail-image">
                  <Image
                    src={`/images/products/${prod.image}`}
                    alt={`${prod.name} - Industrial Electric Heating Element - Shree Industries`}
                    fill
                    priority
                    sizes="(max-width: 800px) 100vw, 48vw"
                  />
                </div>
              )}
              <a
                className="quote-button"
                href={`mailto:sales@shreeindustrialheater.com?subject=${encodeURIComponent(`Quote Request: ${prod.name}`)}`}
                aria-label={`Request best quote for ${prod.name}`}
              >
                Get Best Quote
              </a>
            </div>
            <div className="product-copy">
              <ExpandableDescription text={prod.description} />
            </div>
          </div>
        </div>
      </section>
      {prod.specifications && prod.specifications.length > 0 && (
        <section className="product-specifications-section">
          <div className="container">
            <h2>Product specifications</h2>
            <div className="specification-tables">
              <div>{specificationTable(prod.specifications, prod.tableHeaders)}</div>
              {prod.additionalSpecifications && (
                <div>{specificationTable(prod.additionalSpecifications, prod.tableHeaders)}</div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );

  return (
    <main>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <section className="product-page-hero">
        <div className="container">
          <p>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
            {" "}<span>/</span>{" "}
            <Link href="/products" style={{ color: "inherit", textDecoration: "none" }}>Products</Link>
            {" "}<span>/</span>{" "}
            <strong>{product.name}</strong>
          </p>
        </div>
      </section>

      {renderProductDetails(product)}

      {product.subProducts && product.subProducts.map(sub => (
        <SubProductAccordion key={sub.name} prod={sub} />
      ))}

      <section className="product-specifications-section">
        <div className="container">
          <RelatedProducts currentSlug={slug} />
        </div>
      </section>
    </main>
  );
}
