import type { Metadata } from "next";
import Image from "next/image";
import "./about.css";
import JsonLd from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "About Us — Industrial Heaters Manufacturer",
  description:
    "Learn about Shree Industries: 30+ years of thermal engineering, in-house R&D, advanced testing facilities, and nationwide industrial heating supply.",
  alternates: {
    canonical: "https://shreeindustriesheaters.com/about-us",
  },
  openGraph: {
    title: "About Us | Industrial Heaters Manufacturer | Shree Industries",
    description:
      "Learn about Shree Industries: 30+ years of thermal engineering, in-house R&D, advanced testing facilities, and nationwide industrial heating supply.",
    url: "https://shreeindustriesheaters.com/about-us",
    images: [
      {
        url: "/images/about_collage.png",
        width: 800,
        height: 600,
        alt: "About Shree Industries Team & Manufacturing",
      },
    ],
  },
};

const aboutBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://shreeindustriesheaters.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://shreeindustriesheaters.com/about-us",
    },
  ],
};

export default function AboutUs() {
  return (
    <main>
      <JsonLd data={aboutBreadcrumbs} />
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-text">
            <h1>ABOUT SHREE INDUSTRIES — INDUSTRIAL HEATERS MANUFACTURER</h1>
            <p>
              <strong>Shree Industries</strong> is among top rated manufacturers
              and suppliers of Industrial Heaters. Based out of Chhatrapati
              Sambhaji nagar, Maharashtra, we cater our heaters to clients all
              across India. At Shree Industries, innovation and reliability are
              redefined in industrial heating solutions manufacturing. With a
              commitment to excellence, we stand as a premier provider of
              cutting-edge industrial heaters designed to meet the diverse needs
              of businesses across sectors.
            </p>
            <p>
              With over 25 years of expertise in the industry, we have perfected
              our craft to deliver{" "}
              <strong>industrial heaters and heating solutions</strong> that not
              only meet but exceeds our clients expectations.
            </p>
          </div>
          <div
            className="about-images-composition"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image
              src="/images/about_laptop.png"
              alt="Shree Industries Engineering Design and Industrial Heater Manufacturing"
              width={450}
              height={450}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-section-header">
            <span className="about-section-badge">
              <i className="fa-solid fa-award"></i> WHY CHOOSE SHREE INDUSTRIES
            </span>
            <h2>OUR CORE PILLARS &amp; INFRASTRUCTURE</h2>
            <div className="header-line"></div>
            <p className="about-section-lead">
              A relentless commitment to engineering precision, advanced in-house manufacturing, and over 3 decades of domain expertise.
            </p>
          </div>

          <div className="about-pillars-grid">
            {/* Infrastructure */}
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <i className="fa-solid fa-industry"></i>
              </div>
              <div className="pillar-content">
                <h3>Our Infrastructure</h3>
                <p>
                  We have built a strong, modern infrastructure housing heavy-duty machineries, precision winding systems, and dynamic technicians ensuring high-capacity output.
                </p>
                <div className="pillar-tag">
                  <i className="fa-solid fa-check"></i> High-Capacity Machinery
                </div>
              </div>
            </div>

            {/* Manufacturing Facilities */}
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <i className="fa-solid fa-gears"></i>
              </div>
              <div className="pillar-content">
                <h3>Manufacturing Facilities</h3>
                <p>
                  Shree Industries boasts an in-house manufacturing facility equipped with advanced machinery &amp; equipment, dedicated testing chambers, and an extensive R&amp;D unit.
                </p>
                <div className="pillar-tag">
                  <i className="fa-solid fa-check"></i> In-House R&amp;D &amp; Testing
                </div>
              </div>
            </div>

            {/* Our Team */}
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <i className="fa-solid fa-users-gear"></i>
              </div>
              <div className="pillar-content">
                <h3>Our Team</h3>
                <p>
                  Our expert team of thermal engineers and skilled technicians possesses deep domain expertise, executing orders with scheduled precision and zero defects.
                </p>
                <div className="pillar-tag">
                  <i className="fa-solid fa-check"></i> Certified Specialists
                </div>
              </div>
            </div>

            {/* Our Vision */}
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <i className="fa-solid fa-eye"></i>
              </div>
              <div className="pillar-content">
                <h3>Our Vision</h3>
                <p>
                  To be India&apos;s most trusted, innovative, and technologically advanced industrial heating partner, recognized for superior thermal efficiency and customer delight.
                </p>
                <div className="pillar-tag">
                  <i className="fa-solid fa-check"></i> Industry Leadership
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <div className="pillar-content">
                <h3>Our Mission</h3>
                <p>
                  To provide comprehensive, cost-effective, and custom-engineered heating elements of uncompromising quality, supported by 3 decades of manufacturing excellence.
                </p>
                <div className="pillar-tag">
                  <i className="fa-solid fa-check"></i> Customer-First Approach
                </div>
              </div>
            </div>

            {/* Showcase Card with Collage */}
            <div className="pillar-card showcase-card">
              <div className="showcase-image-wrapper">
                <Image
                  src="/images/about_collage.png"
                  alt="Shree Industries Team & Vision Collage"
                  width={220}
                  height={220}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="showcase-text">
                <span className="showcase-badge">ESTABLISHED LEGACY</span>
                <h4>30+ Years of Excellence</h4>
                <p>
                  Powering heavy engineering, chemical, plastic, and furnace industries across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="container what-we-do-grid">
          <div className="what-we-do-text">
            <h3>What We Do</h3>
            <p>
              We manufacture and supply wide range of industrial electric
              heaters and are specialized in customized Heaters and Heating
              Elements supplying across Maharashtra and India. With this rich
              industrial experience of over 30 years, we can offer the best
              quality Industrial Heaters such as Load Bank Heaters, Roller
              Heaters, Industrial Oil Heaters, D-Type Heaters, Immersion Heaters
              such as Industrial Water Heaters, Alkaline Heaters, Strip Heaters,
              Cartridge Heaters, Mica Band Heaters, Coil Type Heating Elements,
              all types of Heating Coils, Open Type Heating Elements, U-shaped
              Air Heaters, at a cost effective price.
            </p>
          </div>
          <div className="what-we-do-image">
            <Image
              src="/images/products/ss-304-watter_heater.png"
              alt="Industrial Water Heater"
              width={600}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
