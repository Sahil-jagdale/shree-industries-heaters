"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./RelatedProducts.css";

type Product = {
  name: string;
  image: string;
};

const allProducts = [
  { name: "ROLLER HEATER", image: "roller_heater1.png", slug: "roller-heater" },
  { name: "IMMERSION HEATERS", image: "emmersion_heaters1.png", slug: "immersion-heater" },
  { name: "INDUSTRIAL WATER HEATER", image: "ss-304-watter_heater.png", slug: "industrial-water-horizontal-type-heater" },
  { name: "CARTRIDGE HEATER", image: "high_density_cartridge_heater1.png", slug: "cartridge-heater" },
  { name: "CERAMIC BAND HEATER", image: "ceramic_band_heater.png", slug: "ceramic-band-heater" },
  { name: "U-SHAPE AIR HEATER", image: "ushaped_finned_heater1.png", slug: "u-shape-air-heater" },
  { name: "MICA BAND HEATER", image: "mica_band_heater_1.png", slug: "mica-band-heater" },
  { name: "CERAMIC INFRARED HEATER", image: "ceramic_infrared_heater.png", slug: "ceramic-infrared-heater" },
  { name: "HOT RUNNER HEATER", image: "runner_heater1.png", slug: "hot-runner-heater" },
  { name: "LOAD BANK HEATER", image: "loadBank_heater.png", slug: "loadbank-heater" },
  { name: "FURNACE HEATING ELEMENT", image: "heating-elements.png", slug: "furnace-heating-elements" },
  { name: "OTHER PRODUCTS", image: "other_products.png", slug: "other-products" },
];

export default function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const [startIndex, setStartIndex] = useState(0);
  
  // Filter out the current product
  const filteredProducts = allProducts.filter(p => p.slug !== currentSlug);
  
  // Show 4 products at a time
  const visibleProducts = filteredProducts.slice(startIndex, startIndex + 4);
  // Handle wrapping around if we're near the end of the array
  if (visibleProducts.length < 4) {
    visibleProducts.push(...filteredProducts.slice(0, 4 - visibleProducts.length));
  }

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % filteredProducts.length);
  };

  return (
    <div className="related-products-section">
      <h2 className="related-title">Read more</h2>
      
      <div className="related-products-grid">
        {visibleProducts.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.slug} className="related-product-card">
            <div className="related-product-image">
              <img 
                src={`/images/products/${product.image}`} 
                alt={product.name} 
              />
            </div>
            <div className="related-product-footer">
              {product.name} <i className="fa-solid fa-arrow-right"></i>
            </div>
          </Link>
        ))}
      </div>

      <div className="related-navigation">
        <button onClick={handlePrev} className="related-nav-button">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={handleNext} className="related-nav-button">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
