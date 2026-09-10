"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = ["Home", "About Us", "Products", "Supply & Services", "Contact Us"];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-content">
          <a
            className="topbar-email"
            href="mailto:sales@shreeindustrialheater.com"
            aria-label="Email Shree Industries Heaters"
          >
            <i className="fa-regular fa-envelope" aria-hidden="true"></i>
            <span>sales@shreeindustrialheater.com</span>
          </a>
          <span>☎ +91 9096258317 / 8956412020</span>
          <Link href="/contact-us" className="enquiry-btn">Get Enquiry</Link>
        </div>
      </div>
      <header className="header">
        <div className="container nav-wrap">
          <Link
            href="/"
            className="brand"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
            }}
          >
            <Image
              src="/images/logo.jpg"
              alt="Shree Industries Logo"
              width={90}
              height={90}
              style={{ objectFit: "contain" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <strong
                style={{
                  color: "#b59247",
                  fontSize: "1.2rem",
                  lineHeight: "1.2",
                }}
              >
                SHREE INDUSTRIES
              </strong>
              <span
                style={{ color: "#888", fontSize: "0.8rem", fontWeight: "500" }}
              >
                HEATERS & ALL ELECTRICAL SOLUTIONS
              </span>
            </div>
          </Link>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
          <nav aria-label="Main navigation" className={isMobileMenuOpen ? "mobile-nav-open" : ""}>
            {nav.map((item) => {
              const href =
                item === "Home"
                  ? "/"
                  : item === "About Us"
                    ? "/about-us"
                    : item === "Products"
                      ? "/products"
                      : item === "Supply & Services"
                        ? "/supply-services"
                        : item === "Contact Us"
                          ? "/contact-us"
                          : `/#${item.toLowerCase().replaceAll(" ", "-")}`;

              const isActive =
                (item === "Home" && pathname === "/") ||
                (item === "About Us" && pathname === "/about-us") ||
                (item === "Products" && pathname === "/products") ||
                (item === "Supply & Services" && pathname === "/supply-services") ||
                (item === "Contact Us" && pathname === "/contact-us");

              return (
                <Link
                  key={item}
                  href={href}
                  className={isActive ? "active" : ""}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
