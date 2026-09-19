import type { Metadata } from 'next';
import './contact.css';
import JsonLd from '../../components/JsonLd';

export const metadata: Metadata = {
  title: "Request a Quote — Contact Industrial Heaters Manufacturer",
  description:
    "Contact Shree Industries for custom industrial heating inquiries, technical drawings, pricing, and fast dispatch across Maharashtra and India.",
  alternates: {
    canonical: "https://www.shreeindustriesheaters.com/contact-us",
  },
  openGraph: {
    title: "Request a Quote | Contact Shree Industries Industrial Heaters",
    description:
      "Contact Shree Industries for custom industrial heating inquiries, technical drawings, pricing, and fast dispatch across Maharashtra and India.",
    url: "https://www.shreeindustriesheaters.com/contact-us",
    images: [
      {
        url: "/images/slider-main/bg1.png",
        width: 1200,
        height: 630,
        alt: "Contact Shree Industries - Industrial Heaters Manufacturer",
      },
    ],
  },
};

const contactBreadcrumbs = {
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
      name: "Contact Us",
      item: "https://www.shreeindustriesheaters.com/contact-us",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of industrial heaters does Shree Industries manufacture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shree Industries manufactures a comprehensive range of custom industrial heaters including Cartridge Heaters, Immersion Heaters, Ceramic Band Heaters, Mica Band Heaters, U-Shape Air Heaters, Roller Heaters, Porcelain Bobbin Heaters, Ceramic Infrared Heaters, and high-temperature Furnace Heating Elements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you manufacture heating elements as per custom drawings and voltages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our core expertise is tailor-made industrial heating solutions. We engineer heating elements to exact customer specifications, voltages (110V, 230V, 415V, 440V, 480V 3-phase), wattages, terminal styles, and physical geometries from your technical drawings.",
      },
    },
    {
      "@type": "Question",
      name: "What is your typical production and delivery lead time for orders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard heating elements and urgent replacement orders can be dispatched within 24 to 48 hours. Custom-engineered heating elements typically require 3 to 7 working days depending on batch quantities and technical complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Which sheath alloys and high-temperature materials do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We fabricate using premium high-grade materials including SS 304, SS 316L, SS 321, Incoloy 800/840, Titanium, Quartz/Silica sheaths, high-purity electrical grade MgO insulation, and Nichrome 80/20 / Kanthal A1 resistance heating wires.",
      },
    },
    {
      "@type": "Question",
      name: "What quality assurance and testing procedures are performed before dispatch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every individual heater undergoes stringent quality assurance including high-voltage AC dielectric flash testing (>2000V AC), cold insulation resistance testing (megger >20 MΩ at 500V DC), resistance calibration, dimensional checks, and leak testing.",
      },
    },
  ],
};

export default function ContactUs() {
  return (
    <main className="contact-page">
      <JsonLd data={contactBreadcrumbs} />
      <JsonLd data={faqJsonLd} />

      <section className="contact-hero">
        <div className="container">
          <h1>REQUEST A QUOTE &amp; CONTACT SHREE INDUSTRIES</h1>
          <p>
            We are here to help. Reach out to our technical engineering team for quotes, product drawings, or customized industrial heating solutions.
          </p>
        </div>
      </section>

      <section className="contact-content-section section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-panel">
              <h2>Get in Touch</h2>
              <p className="contact-subtext">
                Whether you have an inquiry regarding product specifications, competitive bulk pricing, or need custom thermal engineering, our engineering specialists are ready to assist.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Factory &amp; Head Office</h3>
                    <p>
                      Plot No. E-34, WTC Trade Center,<br />
                      SP Waluj Road, Ranjangaon Shenapunji, Waluj MIDC,<br />
                      Chhatrapati Sambhaji Nagar, Maharashtra 431136, India
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Phone &amp; WhatsApp</h3>
                    <p>
                      <a href="tel:+919096258317">+91 9096258317</a><br />
                      <a href="tel:+918956412020">+91 8956412020</a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Direct Sales Email</h3>
                    <p>
                      <a href="mailto:sale@shreeindustriesheaters.com">
                        sale@shreeindustriesheaters.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h3>Connect With Us</h3>
                <div className="social-links">
                  <a
                    href="mailto:sale@shreeindustriesheaters.com"
                    className="social-icon"
                    aria-label="Email Shree Industries"
                  >
                    <i className="fa-regular fa-envelope"></i>
                  </a>
                  <a
                    href="tel:+919096258317"
                    className="social-icon"
                    aria-label="Call Shree Industries"
                  >
                    <i className="fa-solid fa-phone"></i>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Waluj+MIDC+Chhatrapati+Sambhaji+Nagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Find Shree Industries on Google Maps"
                  >
                    <i className="fa-solid fa-location-dot"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-panel">
              <h2>Send a Request for Quotation (RFQ)</h2>
              <form
                action="mailto:sale@shreeindustriesheaters.com"
                method="post"
                encType="text/plain"
                className="contact-form"
              >
                <div className="form-group">
                  <label htmlFor="name">Full Name / Company Name</label>
                  <input
                    type="text"
                    id="name"
                    name="Name"
                    required
                    placeholder="e.g. John Doe / Acme Engineering Ltd."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Business Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    required
                    placeholder="e.g. procurement@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Contact Number / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="Phone"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Inquiry Type</label>
                  <select
                    id="subject"
                    name="Subject"
                    required
                    defaultValue="Heater Quote Request"
                  >
                    <option value="Heater Quote Request">Industrial Heaters Quote Request</option>
                    <option value="Custom Engineering">Custom Heater Engineering &amp; Drawings</option>
                    <option value="Supply & Services">Supply Equipment (Furnace / Oven / Panels)</option>
                    <option value="AMC Service">Annual Maintenance Contract (AMC)</option>
                    <option value="Bulk Order">Bulk Supply / Tender Order</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Application Requirements / Specifications</label>
                  <textarea
                    id="message"
                    name="Message"
                    rows={5}
                    required
                    placeholder="Specify dimensions (OD, length), voltage, wattage, sheath material, operating temperature, and quantities..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Submit RFQ <i className="fa-regular fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial FAQ Section for Buyers & Search Engine Discovery */}
      <section className="faq-section" style={{ padding: "60px 0 80px", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
        <div className="container" style={{ maxWidth: "920px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ color: "#b59247", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", fontSize: "13px" }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "28px", color: "#02549c", marginTop: "8px", textTransform: "uppercase" }}>
              B2B Industrial Heating Elements &amp; Orders FAQ
            </h2>
            <div style={{ width: "60px", height: "3px", backgroundColor: "#b59247", margin: "16px auto 0" }}></div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontSize: "17px", color: "#1e2934", margin: "0 0 10px", fontWeight: 700 }}>
                <i className="fa-solid fa-circle-question" style={{ color: "#02549c", marginRight: "10px" }}></i>
                What types of industrial heaters does Shree Industries manufacture?
              </h3>
              <p style={{ margin: 0, color: "#5e6874", lineHeight: 1.7, fontSize: "14.5px" }}>
                Shree Industries manufactures a comprehensive range of custom industrial heaters including Cartridge Heaters, Immersion Heaters (flanged and threaded), Ceramic Band Heaters, Mica Band Heaters, U-Shape Finned Air Heaters, Roller Heaters, Porcelain Bobbin Heaters, Ceramic Infrared Heaters, and high-temperature Furnace Heating Elements.
              </p>
            </div>

            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontSize: "17px", color: "#1e2934", margin: "0 0 10px", fontWeight: 700 }}>
                <i className="fa-solid fa-circle-question" style={{ color: "#02549c", marginRight: "10px" }}></i>
                Can you manufacture heating elements as per custom drawings and voltages?
              </h3>
              <p style={{ margin: 0, color: "#5e6874", lineHeight: 1.7, fontSize: "14.5px" }}>
                Yes, our core expertise is tailor-made industrial heating solutions. We engineer heating elements to exact customer specifications, voltages (110V, 230V, 415V, 440V, 480V 3-phase), wattages, terminal styles, and physical geometries from your technical drawings.
              </p>
            </div>

            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontSize: "17px", color: "#1e2934", margin: "0 0 10px", fontWeight: 700 }}>
                <i className="fa-solid fa-circle-question" style={{ color: "#02549c", marginRight: "10px" }}></i>
                What is your typical production and delivery lead time for orders?
              </h3>
              <p style={{ margin: 0, color: "#5e6874", lineHeight: 1.7, fontSize: "14.5px" }}>
                Standard heating elements and urgent replacement orders can be dispatched within 24 to 48 hours. Custom-engineered heating elements typically require 3 to 7 working days depending on batch quantities and technical complexity.
              </p>
            </div>

            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontSize: "17px", color: "#1e2934", margin: "0 0 10px", fontWeight: 700 }}>
                <i className="fa-solid fa-circle-question" style={{ color: "#02549c", marginRight: "10px" }}></i>
                Which sheath alloys and high-temperature materials do you work with?
              </h3>
              <p style={{ margin: 0, color: "#5e6874", lineHeight: 1.7, fontSize: "14.5px" }}>
                We fabricate using premium high-grade materials including SS 304, SS 316L, SS 321, Incoloy 800/840, Titanium, Quartz/Silica sheaths, high-purity electrical grade MgO insulation, and Nichrome 80/20 / Kanthal A1 resistance heating wires.
              </p>
            </div>

            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontSize: "17px", color: "#1e2934", margin: "0 0 10px", fontWeight: 700 }}>
                <i className="fa-solid fa-circle-question" style={{ color: "#02549c", marginRight: "10px" }}></i>
                What quality assurance and testing procedures are performed before dispatch?
              </h3>
              <p style={{ margin: 0, color: "#5e6874", lineHeight: 1.7, fontSize: "14.5px" }}>
                Every individual heater undergoes stringent quality assurance including high-voltage AC dielectric flash testing (&gt;2000V AC), cold insulation resistance testing (megger &gt;20 MΩ at 500V DC), resistance calibration, dimensional checks, and leak testing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
