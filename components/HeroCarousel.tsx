"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./HeroCarousel.css";

const backgrounds = [
  "/images/slider-main/bg1.png",
  "/images/slider-main/bg2.png",
  "/images/slider-main/bg3.png",
  "/images/slider-main/bg4.png",
  "/images/slider-main/bg5.png",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-carousel-section">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`hero-slide ${index === currentIndex ? "active" : ""}`}
        >
          <Image
            src={bg}
            alt="Industrial heaters background"
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="hero-carousel-image"
          />
        </div>
      ))}
      <div className="hero-overlay"></div>
      
      <div className="container hero-content-wrapper">
        <div className="hero-content-box">
          <h1 className="hero-title">
            Industrial Heaters &amp; Custom Thermal Solutions Manufacturer
          </h1>
          <p className="hero-subtitle">
            Trust Shree Industries — ISO compliant manufacturer &amp; supplier of high-efficiency cartridge, immersion, tubular, band &amp; custom heating elements since 1994.
          </p>
        </div>
      </div>

      <div className="hero-indicators">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
