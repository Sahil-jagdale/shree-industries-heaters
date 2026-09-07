"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fire-svg"
      >
        <path
          d="M11.25,23.5C4.7,23.5,2,17.2,2,13.6c0-3.3,2.6-6.8,4.1-8.5c0.4-0.5,1.2-0.4,1.4,0.2c0.2,1,0.5,2.7,1.8,4.1 c-0.8-3.7,1.6-8.2,3.3-9.1C13,0.1,13.4,0,13.8,0c0.3,0,0.6,0.1,0.7,0.3c3.6,5.1,1,10.6,1,10.6c1.6-1.9,1.9-4,1.9-4 c0.2-0.5,1-0.6,1.4-0.1c2.1,3.1,3.1,6.5,3.1,9.6C22,20.4,18.3,23.5,11.25,23.5z M12.8,20.5c1.8,0,3.3-1.3,3.8-3.1 c0.2-0.8,0-1.8-0.6-2.5c-0.2-0.3-0.6-0.3-0.8,0c-0.8,1.3-2,1.3-2,1.3c0-1.9-1.3-3.6-2.1-4.4c-0.3-0.3-0.8-0.1-0.8,0.3 c0.1,2-0.8,3.5-1.7,4.7c-0.7,0.8-1,1.9-1,2.9C7.6,19.8,10,20.5,12.8,20.5z"
          fill="url(#fireGradient)"
        />
        <defs>
          <linearGradient id="fireGradient" x1="12" y1="23.5" x2="12" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff3b00" />
            <stop offset="0.5" stopColor="#ff7a00" />
            <stop offset="1" stopColor="#ffc700" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}
