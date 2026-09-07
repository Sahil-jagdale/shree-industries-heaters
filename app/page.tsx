import Image from "next/image";
import HeroCarousel from "../components/HeroCarousel";
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
          <SectionTitle>Our Product</SectionTitle>
          <p className="section-lead">
            Explore our range of efficient, dependable industrial heating
            solutions.
          </p>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <a
                  className="product-image"
                  href={`/products/${product.href}`}
                  aria-label={`View ${product.name} details`}
                >
                  <Image
                    src={`/images/products/${product.image}`}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 25vw"
                  />
                </a>
                <a
                  className="product-card-button"
                  href={`/products/${product.href}`}
                >
                  {product.name}
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container narrow">
          <SectionTitle>Why Us</SectionTitle>
          <p style={{ marginBottom: "30px", fontSize: "1.1rem", color: "#555" }}>
            As an industry leader in manufacturing industrial heating elements, Shree Industries stands out through our unwavering commitment to excellence. We partner with you to provide solutions that empower your business. Here is what we promise:
          </p>
          <div className="why-us-grid">
            <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", borderLeft: "4px solid #0066cc" }}>
              <h4 style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", color: "#333" }}>
                <i className="fa-solid fa-check-circle" style={{ color: "#0066cc" }}></i> Uncompromising Quality
              </h4>
              <p style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}>Every heater undergoes rigorous testing to ensure it meets our strict quality-assurance protocols, delivering unparalleled reliability for your operations.</p>
            </div>
            <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", borderLeft: "4px solid #0066cc" }}>
              <h4 style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", color: "#333" }}>
                <i className="fa-solid fa-tags" style={{ color: "#0066cc" }}></i> Competitive Pricing
              </h4>
              <p style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}>We optimize our manufacturing processes to offer you highly competitive, cost-effective rates without ever sacrificing the quality of our materials.</p>
            </div>
            <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", borderLeft: "4px solid #0066cc" }}>
              <h4 style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", color: "#333" }}>
                <i className="fa-solid fa-truck-fast" style={{ color: "#0066cc" }}></i> Bulk & Urgent Deliveries
              </h4>
              <p style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}>With scalable production capabilities, we guarantee prompt delivery for bulk orders and urgent customized requirements to keep your business running smoothly.</p>
            </div>
            <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", borderLeft: "4px solid #0066cc" }}>
              <h4 style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", color: "#333" }}>
                <i className="fa-solid fa-gears" style={{ color: "#0066cc" }}></i> Custom Engineering
              </h4>
              <p style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}>Beyond standard products, our expert team works closely with you to design and engineer bespoke heating solutions tailored perfectly to your unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="vendors-section" style={{ padding: "60px 0", backgroundColor: "#ffffff", overflow: "hidden", borderTop: "1px solid #eaeaea", borderBottom: "1px solid #eaeaea" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontFamily: "Montserrat, sans-serif", fontSize: "24px", fontWeight: "700", color: "#1e2934", marginBottom: "40px", textTransform: "uppercase" }}>
            Our Trusted Vendors
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
              animation: scrollMarquee 25s linear infinite;
            }
            .marquee-container:hover {
              animation-play-state: paused;
            }
            .vendor-card {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 200px;
              height: 100px;
              margin: 0 20px;
              background-color: #f8fafc;
              border: 1px solid #e5e9ed;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
              font-weight: 600;
              color: #5e6874;
              font-size: 18px;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              text-align: center;
              padding: 10px;
            }
            .vendor-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
              color: #02549c;
              border-color: #c5e2fd;
            }
            @keyframes scrollMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div className="marquee-wrapper">
            <div className="marquee-container">
              {/* First set */}
              {[
                "SteelTech Industries",
                "Alloy Masters",
                "Global Heating Co.",
                "Thermal Dynamics",
                "Precision Metals",
                "Indo Elements",
                "Supreme Ceramics",
                "Advanced Insulation",
              ].map((vendor, index) => (
                <div className="vendor-card" key={`vendor-1-${index}`}>
                  {vendor}
                </div>
              ))}
              {/* Duplicate set for infinite scroll */}
              {[
                "SteelTech Industries",
                "Alloy Masters",
                "Global Heating Co.",
                "Thermal Dynamics",
                "Precision Metals",
                "Indo Elements",
                "Supreme Ceramics",
                "Advanced Insulation",
              ].map((vendor, index) => (
                <div className="vendor-card" key={`vendor-2-${index}`}>
                  {vendor}
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
