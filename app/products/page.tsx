"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./products.css";

const heroProducts = [
  { name: "ROLLER HEATER", image: "/images/products/roller_heater1.png" },
  { name: "IMMERSION HEATER", image: "/images/products/emmersion_heaters1.png" },
  { name: "INDUSTRIAL WATER HEATER", image: "/images/products/ss-304-watter_heater.png" },
  { name: "CARTRIDGE HEATER", image: "/images/products/high_density_cartridge_heater1.png" },
  { name: "CERAMIC BAND HEATER", image: "/images/products/ceramic_band_heater.png" },
  { name: "U-SHAPE AIR HEATER", image: "/images/products/ushaped_finned_heater1.png" },
  { name: "MICA BAND HEATER", image: "/images/products/mica_band_heater_1.png" },
  { name: "CERAMIC INFRARED HEATER", image: "/images/products/ceramic_infrared_heater.png" },
  { name: "HOT RUNNER HEATER", image: "/images/products/runner_heater1.png" },
  { name: "LOAD BANK HEATER", image: "/images/products/loadBank_heater.png" },
  { name: "FURNACE HEATING ELEMENT", image: "/images/products/heating-elements.png" },
  { name: "OTHER PRODUCTS", image: "/images/products/other_products.png" },
];

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);

  return (
    <main>
      <section className="products-hero">
        <div className="container" style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
          <div className="products-hero-text">
            <h1>ALL PRODUCTS</h1>
          </div>
          <div className="products-hero-carousel">
            <button className="carousel-arrow left" onClick={prevSlide}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            
            <div className="carousel-content">
              <span className="products-hero-label">{heroProducts[currentSlide].name}</span>
              <div className="carousel-image-wrapper">
                <Image 
                  src={heroProducts[currentSlide].image} 
                  alt={heroProducts[currentSlide].name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            <button className="carousel-arrow right" onClick={nextSlide}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="products-intro container">
        <h2>OUR PRODUCTS</h2>
        <p>
          At <strong>Shree Industries</strong>, we offer a wide range of high quality industrial heaters such as Cartridge Heaters, Industrial Water Heaters, Ceramic Band Heaters, all imersion heaters, U-Shaped Air Heaters, Mica Band Heaters, Ceramic Infrared Heaters, Hot Runner Heaters, Furnace Heating Elements, Roller Heaters and Other Heating Products.
          <br/>
          We also make customized heaters for our customers based on their specification and drawing.
        </p>
        <p>
          All industrial heaters made at our factory goes through the best of quality checks to ensure high qaulity products for our customers. Our products are widely used by companies and manufacturing facilities of all sizes in Pune, Mumbai, Maharashtra and across India.
        </p>
      </section>

      <section className="products-list-section">
        <div className="container">
          
          <Link href="/products/roller-heater" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-list-card">
            <div className="product-card-images">
              <img src="/images/products/roller_heater1.png" alt="Roller Heater" width="250" height="250" />
            </div>
            <div className="product-card-info">
              <h3>ROLLER HEATER</h3>
              <p>
                Roller heaters are compact heating devices designed for a variety of applications. Consisting of a cylindrical heating element enclosed within a protective casing, roller heaters are adept at evenly distributing heat across surfaces.
              </p>
            </div>
          </div>
</Link>

          <Link href="/products/industrial-water-horizontal-type-heater" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-list-card">
            <div className="product-card-images">
              <img src="/images/products/ss-304-watter_heater.png" alt="Industrial Water Heater" width="250" height="250" />
            </div>
            <div className="product-card-info">
              <h3>INDUSTRIAL WATER HEATER</h3>
              <p>
                Industrial Water Horizontal Type Heater is a high-performance heating solution designed for industrial applications. Crafted from premium stainless steel (SS 304), it boasts exceptional durability and corrosion resistance.
              </p>
            </div>
          </div>
</Link>

          <Link href="/products/immersion-heater" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-list-card">
            <div className="product-card-images">
              <img src="/images/products/emmersion_heaters1.png" alt="Immersion Heaters" width="250" height="250" />
            </div>
            <div className="product-card-info">
              <h3>IMMERSION HEATERS</h3>
              <p>
                An immersion heater is a device which is installed in a tank or container to heat a liquid. The installation can be over-the-side, flanged or threaded. Immersion heaters are available with heating elements made of copper, steel...
              </p>
            </div>
          </div>
</Link>

          <Link href="/products/loadbank-heater" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-list-card">
            <div className="product-card-images">
              <img src="/images/products/loadBank_heater.png" alt="Load Bank Heater" width="250" height="250" />
            </div>
            <div className="product-card-info">
              <h3>LOAD BANK HEATER</h3>
              <p>
                A load bank heater is a specialized heating solution often utilized in testing and maintenance of electrical power sources. By simulating an electrical load, these heaters dissipate electrical energy in the form of heat, providing...
              </p>
            </div>
          </div>
</Link>

          <Link href="/products/cartridge-heater" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-list-card">
            <div className="product-card-images">
              <img src="/images/products/high_density_cartridge_heater1.png" alt="Cartridge Heater" width="250" height="250" />
            </div>
            <div className="product-card-info">
              <h3>CARTRIDGE HEATER</h3>
              <p>
                Cartridge heaters are heavily used in industrial applications for heating metal parts. Designed for high temperatures, they provide localized heating for dies, molds, and platens ensuring precise temperature maintenance.
              </p>
            </div>
          </div>
</Link>

          <Link href="/products/ceramic-band-heater" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-list-card">
            <div className="product-card-images">
              <img src="/images/products/ceramic_band_heater.png" alt="Ceramic Band Heater" width="250" height="250" />
            </div>
            <div className="product-card-info">
              <h3>CERAMIC BAND HEATER</h3>
              <p>
                Ceramic band heaters are designed to operate at high temperatures, offering excellent energy efficiency and heat retention. They are ideal for plastic injection molding machines and extruders where consistent heat is crucial.
              </p>
            </div>
          </div>
</Link>

          <Link href="/products/u-shape-air-heater" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-list-card">
            <div className="product-card-images">
              <img src="/images/products/ushaped_finned_heater1.png" alt="U-Shape Air Heater" width="250" height="250" />
            </div>
            <div className="product-card-info">
              <h3>U-SHAPE AIR HEATER</h3>
              <p>
                U-Shape finned air heaters are specifically designed to maximize surface area for rapid heat transfer. They are commonly used in duct heating, ovens, and forced air systems for reliable and uniform air heating.
              </p>
            </div>
          </div>
</Link>

          <Link href="/products/mica-band-heater" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-list-card">
            <div className="product-card-images">
              <img src="/images/products/mica_band_heater_1.png" alt="Mica Band Heater" width="250" height="250" />
            </div>
            <div className="product-card-info">
              <h3>MICA BAND HEATER</h3>
              <p>
                Mica band heaters provide efficient and economical heating for cylindrical surfaces. Known for their quick heat transfer and long lifespan, they are widely used in the plastics, packaging, and processing industries.
              </p>
            </div>
          </div>
</Link>

          <Link href="/products/ceramic-infrared-heater" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-list-card">
            <div className="product-card-images">
              <img src="/images/products/ceramic_infrared_heater.png" alt="Ceramic Infrared Heater" width="250" height="250" />
            </div>
            <div className="product-card-info">
              <h3>CERAMIC INFRARED HEATER</h3>
              <p>
                Ceramic infrared heaters emit long-wave infrared radiation, providing uniform and highly efficient heat. These heaters are ideal for thermoforming, curing, shrinking, and drying processes across various manufacturing lines.
              </p>
            </div>
          </div>
</Link>

          <Link href="/products/hot-runner-heater" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-list-card">
            <div className="product-card-images">
              <img src="/images/products/runner_heater1.png" alt="Hot Runner Heater" width="250" height="250" />
            </div>
            <div className="product-card-info">
              <h3>HOT RUNNER HEATER</h3>
              <p>
                Hot runner heaters are precision heating solutions used extensively in plastic injection molding. They ensure precise temperature control within the hot runner system to optimize material flow and part quality.
              </p>
            </div>
          </div>
</Link>

          <Link href="/products/furnace-heating-elements" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-list-card">
            <div className="product-card-images">
              <img src="/images/products/heating-elements.png" alt="Furnace Heating Element" width="250" height="250" />
            </div>
            <div className="product-card-info">
              <h3>FURNACE HEATING ELEMENT</h3>
              <p>
                Our robust furnace heating elements are designed to withstand extreme temperatures in industrial furnaces. They are engineered to provide uniform heating and long operational life under demanding continuous operation.
              </p>
            </div>
          </div>
</Link>

          <Link href="/products/other-products" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="product-list-card">
            <div className="product-card-images">
              <img src="/images/products/other_products.png" alt="Other Products" width="250" height="250" />
            </div>
            <div className="product-card-info">
              <h3>OTHER PRODUCTS</h3>
              <p>
                We offer a comprehensive suite of customized heating solutions tailored to your unique industrial requirements. Contact us for bespoke heating element design, specialized casing, and custom manufacturing.
              </p>
            </div>
          </div>
</Link>

        </div>
      </section>

      <section className="product-features-section container">
        <div className="product-features-title">PRODUCT FEATURES</div>
        
        <div className="product-features-grid">
          <div className="product-features-text">
            <h4>A) High Speed Capacity Super Roller Heater - 10.5 MM DIA</h4>
            <div className="uppercase-text">
              SPECIAL IMPORT QUALITY SWAGED TYPE, S.S.304 9 RODS (ONE UNIT) STRAIGHT AIR HEATING ELEMENT.
            </div>
            <p>
              Time required for heating the Roller 30 minutes after start the machine.
            </p>

            <h4>B) Higher Capacity Super Roller Heater - 8 MM DIA</h4>
            <div className="uppercase-text">
              IMPORT QUALITY SWAGED TYPE S.S. 304 9 RODS (ONE UNIT) STRAIGHT AIR HEATING ELEMENT
            </div>
            <p>
              Time required for heating the Roller only 25 minutes after start the machine.
            </p>
          </div>
          <div className="product-features-image" style={{ display: 'flex', justifyContent: 'center' }}>
            <Image 
              src="/images/products/roller_heater1.png" 
              alt="Roller Heater Features" 
              width={500} 
              height={500} 
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

    </main>
  );
}
