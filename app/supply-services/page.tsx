"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./supply-services.css";

const heroItems = [
  {
    name: "TRANSFORMER OVEN",
    image: "/images/supply-services/transformer-oven.png",
    category: "SUPPLY PRODUCT",
  },
  {
    name: "MUFFLE FURNACE",
    image: "/images/supply-services/muffle-furnace.png",
    category: "SUPPLY PRODUCT",
  },
  {
    name: "SILICON CARBIDE (SiC) HEATING ELEMENTS",
    image: "/images/supply-services/silicon-carbide-element.png",
    category: "SUPPLY PRODUCT",
  },
  {
    name: "APFC PANEL",
    image: "/images/supply-services/apfc-panel.png",
    category: "SUPPLY & SERVICES",
  },
  {
    name: "PLC AUTOMATION PANEL",
    image: "/images/supply-services/plc-panel.jpg",
    category: "SUPPLY & SERVICES",
  },
  {
    name: "ANNUAL MAINTENANCE CONTRACT (AMC)",
    image: "/images/supply-services/annual-amc-service.jpg",
    category: "INDUSTRIAL SERVICE",
  },
];

const suppliedProducts = [
  {
    id: "transformer-oven",
    name: "Transformer Drying & Curing Oven",
    badge: "Heavy Industrial Equipment",
    image: "/images/supply-services/transformer-oven.png",
    description:
      "Engineered specifically for moisture extraction, vacuum drying, and varnish curing of transformer cores, coils, and heavy electrical windings. Built with precision digital PID temperature controls up to 250°C, heavy-gauge steel construction, and multi-directional forced-air recirculation to guarantee temperature uniformity and prevent hotspots.",
    specsTitle: "Key Technical Specifications:",
    specs: [
      "Operating temperature range up to 250°C",
      "Digital PID microprocessor temperature controller",
      "Forced air circulation for uniform heat distribution",
      "Heavy-duty motorized/manual material loading trolley",
      "High-density rockwool thermal insulation",
      "Explosion-relief hatch & safety over-temp cut-off",
    ],
    inquiryTopic: "Transformer Drying Oven",
  },
  {
    id: "muffle-furnace",
    name: "High-Temperature Muffle Furnace",
    badge: "Lab & Industrial Heating",
    image: "/images/supply-services/muffle-furnace.png",
    description:
      "Precision benchtop and floor-standing electric muffle furnace designed for metallurgical heat treatment, ashing, sintering, annealing, and materials testing up to 1200°C–1400°C. Engineered with high-grade vacuum-formed ceramic fiber insulation for rapid ramp-up, energy efficiency, and minimal exterior case heating.",
    specsTitle: "Key Technical Specifications:",
    specs: [
      "Maximum operating temperatures up to 1200°C–1400°C",
      "High-purity vacuum-molded ceramic fiber chamber",
      "Multi-segment programmable digital PID controller",
      "Door safety interlock switch cutting power when opened",
      "Long-life embedded heating element arrays",
      "Fast thermal ramp-up and excellent temperature uniformity",
    ],
    inquiryTopic: "Muffle Furnace",
  },
  {
    id: "silicon-carbide-coils",
    name: "Silicon Carbide (SiC) Heating Elements & Coils",
    badge: "Extreme Temperature Heating",
    image: "/images/supply-services/silicon-carbide-element.png",
    description:
      "High-density recrystallized Silicon Carbide (SiC) heating elements and coils designed for extreme thermal processes requiring temperatures up to 1600°C (2912°F). Highly resistant to oxidation and chemical corrosion, these robust elements feature low electrical resistance cold ends to keep terminal connections cool and maximize energy transfer directly into the furnace hot zone.",
    specsTitle: "Key Technical Specifications:",
    specs: [
      "Operating temperatures from 600°C up to 1600°C in air",
      "Available in Straight (ED), Dumbbell (DB) & U/W Shapes",
      "Exceptional resistance to oxidation & chemical attack",
      "Flame-sprayed aluminum ends for low-resistance contacts",
      "High mechanical rigidity & thermal shock resistance",
      "Ideal for glass melting, ceramic kilns & sintering",
    ],
    inquiryTopic: "Silicon Carbide Heating Elements",
  },
  {
    id: "apfc-panel-supply",
    name: "APFC Panel (Automatic Power Factor Correction)",
    badge: "Power Quality & Distribution",
    image: "/images/supply-services/apfc-panel.png",
    description:
      "Standard and heavy-duty Automatic Power Factor Correction (APFC) panels designed to automatically maintain plant power factor close to unity (0.99 lag). Equipped with microprocessor-based APFC relays, detuned harmonic filter reactors, and heavy-duty MPP/gas-filled capacitors to eliminate utility low-power-factor penalties and stabilize grid voltage.",
    specsTitle: "Key Technical Specifications:",
    specs: [
      "Intelligent multi-stage microprocessor controller (4–16 steps)",
      "Detuned harmonic filter reactors (5.67%, 7%, 14%)",
      "Heavy-duty capacitor duty contactors or thyristor switches",
      "Powder-coated CRCA steel enclosure (IP54/IP55 rated)",
      "Comprehensive digital metering for V, I, PF, kVA & THD",
      "Integrated over-voltage & over-current protections",
    ],
    inquiryTopic: "APFC Panel Supply",
  },
  {
    id: "plc-panel-supply",
    name: "PLC Automation Control Panel",
    badge: "Industrial Automation & Control",
    image: "/images/supply-services/plc-panel.jpg",
    description:
      "Custom-built industrial automation control panels featuring state-of-the-art Programmable Logic Controllers (PLC), Human-Machine Interfaces (HMI), Variable Frequency Drives (VFD), and power distribution switchgear. Engineered for complete automated control, recipe execution, closed-loop temperature profiles, and real-time monitoring of industrial heating equipment and furnaces.",
    specsTitle: "Key Technical Specifications:",
    specs: [
      "Integrated with Siemens, Schneider, Rockwell, or Delta PLCs",
      "Touchscreen color HMI with intuitive graphical interfaces",
      "Multi-zone PID loop control with SCR thyristor power regulation",
      "Industrial Ethernet, Modbus & Profinet communication ready",
      "Segregated low-voltage and power wiring with neat ferrules",
      "Complete electrical schematics, logic backups & documentation",
    ],
    inquiryTopic: "PLC Control Panel Supply",
  },
];

const industrialServices = [
  {
    id: "apfc-maintenance-services",
    name: "APFC Panel Testing, Audit & Maintenance Services",
    badge: "Preventive Electrical Service",
    image: "/images/supply-services/apfc-panel.png",
    description:
      "Professional comprehensive health inspection, testing, and periodic maintenance services for industrial APFC panels. Our certified technicians perform capacitance health verification, contactor contact inspection, thermographic inspection for hotspot detection, harmonic distortion audits, and power factor tuning to keep your facility compliant and prevent utility penalties.",
    specsTitle: "Service Deliverables & Scope:",
    specs: [
      "On-site microfarad (μF) capacitance degradation testing",
      "Thermographic infrared scanning for loose joints & hotspots",
      "Harmonic distortion analysis and filter reactor health check",
      "Controller threshold tuning & power factor recalibration",
      "Switchgear inspection, contact cleaning & terminal retorquing",
      "Genuine replacement of damaged capacitors, fuses & relays",
    ],
    inquiryTopic: "APFC Panel Maintenance Service",
  },
  {
    id: "plc-automation-services",
    name: "PLC Automation, Programming & Retrofitting Services",
    badge: "Turnkey Engineering Solutions",
    image: "/images/supply-services/plc-panel.jpg",
    description:
      "Complete software programming, SCADA screen design, and turnkey panel retrofitting for furnaces, ovens, and industrial machinery. We upgrade outdated, fault-prone relay logic into modern automated PLC systems featuring digital recipe storage, real-time temperature tracking, error logging, and remote plant connectivity.",
    specsTitle: "Service Deliverables & Scope:",
    specs: [
      "Custom PLC logic development (Siemens, Rockwell, Schneider, Delta)",
      "Modernization of legacy relay panels to modern PLC/HMI setups",
      "Touchscreen HMI development with animated process monitoring",
      "SCADA configuration, cloud IoT integration & historical trend logs",
      "Multi-zone temperature loop tuning & safety interlock setup",
      "24/7 on-site emergency troubleshooting, bug fixes & logic backups",
    ],
    inquiryTopic: "PLC Automation & Retrofitting Service",
  },
  {
    id: "annual-amc-services",
    name: "Annual Maintenance Contract (AMC) for Heaters, Furnaces & Panels",
    badge: "Zero-Downtime Guarantee",
    image: "/images/supply-services/annual-amc-service.jpg",
    description:
      "Dedicated Annual Maintenance Contracts (AMC) designed to guarantee continuous uptime, safety, and peak thermal efficiency across your industrial heating equipment and electrical panels. Backed by experienced heating and electrical specialists, our AMC covers regular scheduled preventive checkups, calibration, and priority emergency breakdown support.",
    specsTitle: "AMC Contract Inclusions:",
    specs: [
      "Scheduled monthly/quarterly preventive inspection visits",
      "Complete insulation resistance (Megger) & dielectric testing",
      "Infrared thermography scans of elements, busbars & terminals",
      "Calibration of temperature controllers against certified masters",
      "Detailed health audit reports with preventive recommendations",
      "Guaranteed priority on-site breakdown response & spare parts support",
    ],
    inquiryTopic: "Annual Maintenance Contract (AMC)",
  },
];

export default function SupplyServicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroItems.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroItems.length) % heroItems.length,
    );

  return (
    <main>
      {/* Hero Section */}
      <section className="supply-hero">
        <div
          className="container"
          style={{ display: "flex", height: "100%", alignItems: "center" }}
        >
          <div className="supply-hero-text">
            <h1>SUPPLY PRODUCTS &amp; INDUSTRIAL SERVICES</h1>
            <p>
              Leading supplier of high-temperature furnaces, industrial ovens,
              heating elements, electrical control panels, and turnkey automation services.
            </p>
          </div>
          <div className="supply-hero-carousel">
            <button
              className="supply-carousel-arrow"
              onClick={prevSlide}
              aria-label="Previous Slide"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="supply-carousel-content">
              <span className="supply-hero-label">
                {heroItems[currentSlide].name}
              </span>
              <div className="supply-carousel-image-wrapper">
                <Image
                  src={heroItems[currentSlide].image}
                  alt={`${heroItems[currentSlide].name} - Shree Industries Supply & Services`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <button
              className="supply-carousel-arrow"
              onClick={nextSlide}
              aria-label="Next Slide"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="supply-intro container">
        <h2>COMPREHENSIVE INDUSTRIAL SUPPLIES & ENGINEERING SERVICES</h2>
        <p>
          Beyond manufacturing premier electric heaters, <strong>Shree Industries</strong>{" "}
          is a trusted supplier of heavy industrial heating machinery, high-temperature
          laboratory furnaces, specialized Silicon Carbide heating elements, and advanced
          electrical control panels.
        </p>
        <p>
          Our engineering division provides complete lifecycle support—delivering
          expert on-site testing, panel retrofitting, automation programming, and
          comprehensive <strong>Annual Maintenance Contracts (AMC)</strong> to keep your
          production systems running at peak reliability.
        </p>
      </section>

      {/* SECTION 1: SUPPLY PRODUCTS */}
      <section className="supply-list-section">
        <div className="container">
          <div className="section-divider-header">
            <div className="section-divider-title">
              <span className="indicator-bar"></span>
              <h2>SUPPLY PRODUCTS & EQUIPMENT</h2>
            </div>
            <span className="section-tag">
              <i className="fa-solid fa-boxes-stacked" style={{ marginRight: "6px" }}></i>
              5 Equipment Categories
            </span>
          </div>

          {suppliedProducts.map((item) => (
            <article className="supply-item-card" key={item.id}>
              <div className="item-card-image-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
              </div>
              <div className="item-card-info">
                <span className="item-card-badge">{item.badge}</span>
                <h3>{item.name}</h3>
                <p className="item-card-desc">{item.description}</p>
                <div className="item-card-specs">
                  <h4>{item.specsTitle}</h4>
                  <ul>
                    {item.specs.map((spec, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="item-card-footer">
                  <span style={{ fontSize: "13px", color: "#64748b", fontWeight: "500" }}>
                    <i className="fa-solid fa-shield-halved" style={{ color: "#0077cc", marginRight: "6px" }}></i>
                    Quality Tested &amp; Certified
                  </span>
                  <Link
                    href={`/contact-us?subject=Inquiry%20for%20${encodeURIComponent(item.inquiryTopic)}`}
                    className="inquire-action-btn"
                  >
                    <span>Request Quote</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {/* SECTION 2: SERVICES */}
          <div className="section-divider-header" style={{ marginTop: "60px" }}>
            <div className="section-divider-title services-title">
              <span className="indicator-bar"></span>
              <h2>ENGINEERING &amp; INDUSTRIAL SERVICES</h2>
            </div>
            <span className="section-tag" style={{ background: "#e6fffa", color: "#234e52" }}>
              <i className="fa-solid fa-screwdriver-wrench" style={{ marginRight: "6px" }}></i>
              Professional Maintenance &amp; Automation
            </span>
          </div>

          {industrialServices.map((service) => (
            <article className="supply-item-card service-card" key={service.id}>
              <div className="item-card-image-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                />
              </div>
              <div className="item-card-info service-info">
                <span className="item-card-badge service-badge">{service.badge}</span>
                <h3>{service.name}</h3>
                <p className="item-card-desc">{service.description}</p>
                <div className="item-card-specs service-specs">
                  <h4>{service.specsTitle}</h4>
                  <ul>
                    {service.specs.map((spec, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="item-card-footer">
                  <span style={{ fontSize: "13px", color: "#64748b", fontWeight: "500" }}>
                    <i className="fa-solid fa-clock-rotate-left" style={{ color: "#00a86b", marginRight: "6px" }}></i>
                    Rapid On-Site Support &amp; Audits
                  </span>
                  <Link
                    href={`/contact-us?subject=Service%20Inquiry%20for%20${encodeURIComponent(service.inquiryTopic)}`}
                    className="inquire-action-btn service-btn"
                  >
                    <span>Book Service / AMC</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {/* Consultation CTA Banner */}
          <div className="consultation-cta-banner">
            <div className="cta-banner-text">
              <h3>Need Customized Equipment Supply or an AMC Package?</h3>
              <p>
                Our engineering team works closely with plant managers to design bespoke
                transformer ovens, deliver high-grade Silicon Carbide heating elements, or
                tailor a preventative maintenance contract specifically for your facility.
              </p>
            </div>
            <Link href="/contact-us" className="cta-banner-button">
              <span>Talk to Our Engineers</span>
              <i className="fa-solid fa-phone"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
