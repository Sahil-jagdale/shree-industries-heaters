import type { Metadata } from "next";
import Image from "next/image";
import HeroCarousel from "../components/HeroCarousel";

export const metadata: Metadata = {
  title: "Industrial Heaters & Heating Elements Manufacturer | Shree Industries",
  description:
    "Leading manufacturer of custom industrial heaters, cartridge heaters, tubular elements, immersion and band heaters. ISO compliant. Request a quote today.",
  alternates: {
    canonical: "https://www.shreeindustriesheaters.com",
  },
  openGraph: {
    title: "Industrial Heaters & Heating Elements Manufacturer | Shree Industries",
    description:
      "Leading manufacturer of custom industrial heaters, cartridge heaters, tubular elements, immersion and band heaters. ISO compliant. Request a quote today.",
    url: "https://www.shreeindustriesheaters.com",
    images: [
      {
        url: "/images/slider-main/bg1.png",
        width: 1200,
        height: 630,
        alt: "Shree Industries - Industrial Heaters & Heating Elements Manufacturer",
      },
    ],
  },
};

type Product = { name: string; image: string; href: string };
type Application = { name: string; image: string };

const products: Product[] = [
  { name: "Roller Heater", image: "roller_heater1.png", href: "roller-heater" },
  {
    name: "Industrial Water Heater",
    image: "ss-304-watter_heater.png",
    href: "industrial-water-horizontal-type-heater",
  },
  {
    name: "Immersion Heaters",
    image: "emmersion_heaters1.png",
    href: "immersion-heater",
  },
  {
    name: "Load Bank Heater",
    image: "loadBank_heater.png",
    href: "loadbank-heater",
  },
  {
    name: "Cartridge Heater",
    image: "high_density_cartridge_heater1.png",
    href: "cartridge-heater",
  },
  {
    name: "Ceramic Band Heater",
    image: "ceramic_band_heater.png",
    href: "ceramic-band-heater",
  },
  {
    name: "U-Shape Air Heater",
    image: "ushaped_finned_heater1.png",
    href: "u-shape-air-heater",
  },
  {
    name: "Mica Band Heater",
    image: "mica_band_heater_1.png",
    href: "mica-band-heater",
  },
  {
    name: "Ceramic Infrared Heater",
    image: "ceramic_infrared_heater.png",
    href: "ceramic-infrared-heater",
  },

  {
    name: "Hot Runner Heater",
    image: "runner_heater1.png",
    href: "hot-runner-heater",
  },
  {
    name: "Furnace Heating Element",
    image: "heating-elements.png",
    href: "furnace-heating-elements",
  },
  {
    name: "Porcelain Heater",
    image: "porcelain-heater.png",
    href: "porcelain-heater",
  },
  {
    name: "Other Products",
    image: "other_products.png",
    href: "other-products",
  },
];

const applications: Application[] = [
  ["Chemical Plant", "chemical--plant.jpg"],
  ["Corrugation Machines", "CORRUGATION-MACHINE.jpg"],
  ["Industrial Furnace", "furnace-big.jpg"],
  ["Industrial Oven", "Industrial_Oven.jpg"],
  ["Plastic Industry", "Plastic.jpg"],
  ["Plating Plants", "plating_header.jpg"],
  ["Rubber Industry", "Rubber-plant.jpg"],
  ["Paint Baker", "PAINT-BAKER.webp"],
  ["Food Industry", "food_industries.jpg"],
  ["7 Process Tank Plating", "7-process-tank-plating.webp"],
  ["Blast Furnace for Steel Melting", "Blast-Furnace-For Steel-Melting.jpg"],
  ["Oil Plant", "oil-plant.jpeg"],
  ["Paint Booth", "paint-booth.jpg"],
  ["Plastic Moulding Machine", "platic-moulding-machine.png"],
  ["Industrial Furnace", "Industrial_Furnace.jpg"],
].map(([name, image]) => ({ name, image }));

type Vendor = {
  name: string;
  logo: string;
};

const vendors: Vendor[] = [
  {
    name: "Tata Power",
    logo: "/images/vendors/tata_power.svg",
  },
  {
    name: "L&T Electrical & Automation",
    logo: "/images/vendors/lt_electricals.svg",
  },
  {
    name: "Greaves Cotton",
    logo: "/images/vendors/greaves_cotton.svg",
  },
  {
    name: "Paras Group of Industries",
    logo: "/images/vendors/paras_group.png",
  },
  {
    name: "Forbes Marshall",
    logo: "/images/vendors/forbes_marshall.png",
  },
  {
    name: "Siemens",
    logo: "/images/vendors/siemens.svg",
  },
  {
    name: "BKT Tires",
    logo: "/images/vendors/bkt_tires.svg",
  },
  {
    name: "Herman Pharma",
    logo: "/images/vendors/herman_pharma.png",
  },
  {
    name: "Sun Pharma",
    logo: "/images/vendors/sun_pharma.svg",
  },
];

const nav = [
  "Home",
  "About Us",
  "Products",
  "Sister Companies",
  "Gallery",
  "Contact Us",
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="section-title">{children}</h2>;
}

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      <section className="intro section">
        <div className="container narrow">
          <p>
            Shree Industries Heaters is built on a foundation of engineering
            excellence and rigorous manufacturing standards. We are known for
            quality products and customer satisfaction, making us the vendor of
            choice for machinery manufacturers across India.
          </p>
          <div className="intro-grid">
            <div>
              <h2>
                Welcome to <span>Shree Industries Heaters</span>
              </h2>
              <p>
                We manufacture industrial heaters, heating elements and custom
                heating solutions using the finest raw materials. Our
                experienced team supports customers from product design through
                reliable delivery.
              </p>
              <a className="text-link" href="/about-us">
                Read more →
              </a>
            </div>
            <div className="intro-card">
              <p>
                We use high-grade stainless steel tubing, Incoloy and magnesium
                oxide to meet demanding industrial requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section products-section">
        <div className="container">
          <SectionTitle>Engineered Industrial Heaters &amp; Heating Elements</SectionTitle>
          <p className="section-lead">
            Explore our comprehensive range of high-efficiency, dependable industrial electric heaters and heating elements.
          </p>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <a
                  className="product-image"
                  href={`/products/${product.href}`}
                  aria-label={`View technical specifications for ${product.name}`}
                >
                  <Image
                    src={`/images/products/${product.image}`}
                    alt={`${product.name} - Industrial Heating Element Manufacturer - Shree Industries`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 25vw"
                  />
                </a>
                <a
                  className="product-card-button"
                  href={`/products/${product.href}`}
                  aria-label={`View ${product.name} technical details`}
                >
                  {product.name}
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="section" style={{ backgroundColor: "#f8fafc", padding: "65px 0" }}>
        <div className="container">
          <SectionTitle>Industrial Applications &amp; Thermal Processing Sectors</SectionTitle>
          <p className="section-lead">
            Delivering robust thermal performance across heavy engineering, chemical plants, plastic processing, and industrial furnaces.
          </p>
          <div className="application-scroller">
            <div className="application-track">
              {[...applications, ...applications].map((app, idx) => (
                <article className="application-card" key={`app-${idx}`}>
                  <span>
                    <Image
                      src={`/images/our_product/${app.image}`}
                      alt={`${app.name} - Industrial Thermal Application - Shree Industries`}
                      fill
                      sizes="310px"
                      loading="lazy"
                    />
                  </span>
                  <h3>{app.name}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container narrow">
          <SectionTitle>Why Partner with Shree Industries</SectionTitle>
          <p style={{ marginBottom: "30px", fontSize: "1.1rem", color: "#555" }}>
            As an industry-leading manufacturer of industrial heating elements, Shree Industries combines 30+ years of thermal engineering experience with ISO-standard quality controls. Here is what we deliver:
          </p>
          <div className="why-us-grid">
            <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", borderLeft: "4px solid #0066cc" }}>
              <h4 style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", color: "#333" }}>
                <i className="fa-solid fa-check-circle" style={{ color: "#0066cc" }}></i> Uncompromising Quality &amp; 100% Testing
              </h4>
              <p style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}>Every heater undergoes rigorous testing including high-voltage flash tests and insulation resistance verification to ensure zero defects on arrival.</p>
            </div>
            <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", borderLeft: "4px solid #0066cc" }}>
              <h4 style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", color: "#333" }}>
                <i className="fa-solid fa-tags" style={{ color: "#0066cc" }}></i> Competitive Direct-Manufacturer Pricing
              </h4>
              <p style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}>Direct factory-to-industry supply ensures optimum cost-effectiveness without intermediaries or quality compromise.</p>
            </div>
            <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", borderLeft: "4px solid #0066cc" }}>
              <h4 style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", color: "#333" }}>
                <i className="fa-solid fa-truck-fast" style={{ color: "#0066cc" }}></i> Scalable Production &amp; Rapid Dispatch
              </h4>
              <p style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}>High-capacity tooling and automated winding equipment allow prompt dispatch for bulk orders and urgent replacement requirements across India.</p>
            </div>
            <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", borderLeft: "4px solid #0066cc" }}>
              <h4 style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", color: "#333" }}>
                <i className="fa-solid fa-gears" style={{ color: "#0066cc" }}></i> Custom Thermal Engineering &amp; Prototyping
              </h4>
              <p style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}>We fabricate custom wattages, specialized sheath alloys (SS304, SS316, Incoloy, Titanium), and exact geometries matching your engineering drawings.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="vendors-section" style={{ padding: "60px 0", backgroundColor: "#ffffff", overflow: "hidden", borderTop: "1px solid #eaeaea", borderBottom: "1px solid #eaeaea" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontFamily: "Montserrat, sans-serif", fontSize: "24px", fontWeight: "700", color: "#1e2934", marginBottom: "40px", textTransform: "uppercase" }}>
            Trusted by Leading Industrial Enterprises
          </h2>
          <style>{`
            .marquee-wrapper {
              width: 100%;
              overflow: hidden;
              position: relative;
            }
            .marquee-container {
              display: flex;
              width: max-content;
              animation: scrollMarquee 35s linear infinite;
            }
            .marquee-container:hover {
              animation-play-state: paused;
            }
            .vendor-card {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 220px;
              height: 125px;
              margin: 0 16px;
              background-color: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
              transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
              text-align: center;
              padding: 12px 16px;
              flex-shrink: 0;
            }
            .vendor-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 10px 20px rgba(2, 84, 156, 0.12);
              border-color: #93c5fd;
            }
            .vendor-logo-box {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 54px;
              width: 100%;
              margin-bottom: 8px;
            }
            .vendor-logo-img {
              max-height: 48px;
              max-width: 155px;
              width: auto;
              height: auto;
              object-fit: contain;
            }
            .vendor-name {
              font-family: Montserrat, sans-serif;
              font-weight: 600;
              color: #334155;
              font-size: 13px;
              line-height: 1.25;
              margin: 0;
            }
            @keyframes scrollMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div className="marquee-wrapper">
            <div className="marquee-container">
              {/* First set */}
              {vendors.map((vendor, index) => (
                <div className="vendor-card" key={`vendor-1-${index}`}>
                  <div className="vendor-logo-box">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={vendor.logo}
                      alt={vendor.name}
                      className="vendor-logo-img"
                      loading="lazy"
                    />
                  </div>
                  <span className="vendor-name">{vendor.name}</span>
                </div>
              ))}
              {/* Duplicate set for infinite scroll */}
              {vendors.map((vendor, index) => (
                <div className="vendor-card" key={`vendor-2-${index}`}>
                  <div className="vendor-logo-box">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={vendor.logo}
                      alt={vendor.name}
                      className="vendor-logo-img"
                      loading="lazy"
                    />
                  </div>
                  <span className="vendor-name">{vendor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="assurance">
        <div className="container assurance-grid">
          <article>
            <Image
              src="/images/quality_assurance.png"
              width={110}
              height={110}
              alt="Quality assurance"
            />
            <h3>Quality Assurance</h3>
            <p>
              At Shree Industries, quality is not just a promise—it's our core principle. Strict quality control protocols guide every step of our manufacturing process, from initial design and raw material sourcing through to final finishing and testing. Our rigorous standards ensure that every heating element leaving our facility meets the highest benchmarks for durability, performance, and safety.
            </p>
          </article>
          <article>
            <Image
              src="/images/customer-satisfaction.png"
              width={110}
              height={110}
              alt="Customer satisfaction"
            />
            <h3>100% Client Satisfaction</h3>
            <p>
              We believe that our success is measured by the success of our clients. Our dedicated, client-focused approach allows us to deliver highly dependable products tailored to your exact specifications. From customized engineering solutions to responsive, attentive after-sales support, we are committed to forging long-lasting partnerships and ensuring complete peace of mind.
            </p>
          </article>
        </div>
      </section>

      <section className="facts">
        <div className="container facts-grid">
          {[
            ["100,000+", "Heaters Supplied"],
            ["50,000+", "Customised Heaters Delivered"],
            ["10,000+", "Customers"],
          ].map(([number, label]) => (
            <div key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
