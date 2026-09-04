"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  "Home",
  "About Us",
  "Products",
  "Partner Brands",
  "Contact Us",
];

export default function Header() {
  const pathname = usePathname();

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
          <a href="/#contact">E-brochure ↓</a>
        </div>
      </div>
      <header className="header">
        <div className="container nav-wrap">
          <Link href="/" className="brand" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <Image
              src="/images/logo.jpg"
              alt="Shree Industries Logo"
              width={60}
              height={60}
              style={{ objectFit: 'contain' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <strong style={{ color: '#b59247', fontSize: '1.2rem', lineHeight: '1.2' }}>SHREE INDUSTRIES</strong>
              <span style={{ color: '#888', fontSize: '0.8rem', fontWeight: '500' }}>
                HEATERS & ALL ELECTRICAL SOLUTIONS
              </span>
            </div>
          </Link>
          <nav aria-label="Main navigation">
            {nav.map((item) => {
              const href = item === "Home"
                ? "/"
                : item === "About Us"
                  ? "/about-us"
                  : item === "Products"
                    ? "/products"
                    : item === "Contact Us"
                      ? "/contact-us"
                      : `/#${item.toLowerCase().replaceAll(" ", "-")}`;

              const isActive = (item === "Home" && pathname === "/") ||
                (item === "About Us" && pathname === "/about-us") ||
                (item === "Products" && pathname === "/products") ||
                (item === "Contact Us" && pathname === "/contact-us");

              return (
                <Link
                  key={item}
                  href={href}
                  className={isActive ? "active" : ""}
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
