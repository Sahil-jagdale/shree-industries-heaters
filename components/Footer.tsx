import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#000000",
        color: "#a0aab5",
        fontSize: "14px",
        lineHeight: "1.6",
      }}
    >
      <div
        className="container footer-links-grid"
        style={{
          padding: "60px 0",
        }}
      >
        <div>
          <h3
            style={{
              color: "#ffffff",
              fontSize: "16px",
              borderLeft: "3px solid #0066cc",
              paddingLeft: "10px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            About Us
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Shree Industries is one of the top manufacturers and suppliers of
            all types of Industrial Heaters including, Roller Heaters, Immersion
            Heaters, Air Heaters, U Shaped Heaters and Heating Elements.
          </p>
          <div style={{ display: "flex", gap: "15px" }}>
            <a
              href="mailto:sales@shreeindustrialheater.com"
              aria-label="Email Shree Industries"
              style={{ color: "#ffffff", fontSize: "16px" }}
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a
              href="tel:+919096258317"
              aria-label="Call Shree Industries"
              style={{ color: "#ffffff", fontSize: "16px" }}
            >
              <i className="fa-solid fa-phone"></i>
            </a>
            <a
              href="https://maps.google.com/?q=Waluj+MIDC+Chhatrapati+Sambhaji+Nagar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps Location of Shree Industries"
              style={{ color: "#ffffff", fontSize: "16px" }}
            >
              <i className="fa-solid fa-location-dot"></i>
            </a>
          </div>
        </div>

        <div>
          <h3
            style={{
              color: "#ffffff",
              fontSize: "16px",
              borderLeft: "3px solid #0066cc",
              paddingLeft: "10px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Products
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { name: "Cartridge Heater", href: "/products/cartridge-heater" },
              { name: "Industrial Water Heater", href: "/products/industrial-water-horizontal-type-heater" },
              { name: "Ceramic Band Heater", href: "/products/ceramic-band-heater" },
              { name: "U-Shape Air Heater", href: "/products/u-shape-air-heater" },
              { name: "Hot Runner Heater", href: "/products/hot-runner-heater" },
              { name: "Load Bank Heater", href: "/products/loadbank-heater" },
            ].map((item) => (
              <li
                key={item.name}
                style={{
                  borderBottom: "1px solid #1a1a1a",
                  paddingBottom: "10px",
                  marginBottom: "10px",
                }}
              >
                <Link
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textTransform: "uppercase",
                    color: "#d1d8e0",
                  }}
                >
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{ fontSize: "10px" }}
                  ></i>{" "}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            style={{
              color: "transparent",
              fontSize: "16px",
              paddingLeft: "10px",
              marginBottom: "20px",
              userSelect: "none",
            }}
          >
            Products
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { name: "Immersion Heater", href: "/products/immersion-heater" },
              { name: "Mica Band Heater", href: "/products/mica-band-heater" },
              { name: "Ceramic Infrared Heater", href: "/products/ceramic-infrared-heater" },
              { name: "Roller Heater", href: "/products/roller-heater" },
              { name: "Furnace Heating Elements", href: "/products/furnace-heating-elements" },
              { name: "Porcelain Heater", href: "/products/porcelain-heater" },
              { name: "Other Products", href: "/products/other-products" },
            ].map((item) => (
              <li
                key={item.name}
                style={{
                  borderBottom: "1px solid #1a1a1a",
                  paddingBottom: "10px",
                  marginBottom: "10px",
                }}
              >
                <Link
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textTransform: "uppercase",
                    color: "#d1d8e0",
                  }}
                >
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{ fontSize: "10px" }}
                  ></i>{" "}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            style={{
              color: "#ffffff",
              fontSize: "16px",
              borderLeft: "3px solid #0066cc",
              paddingLeft: "10px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Contact Info
          </h3>
          <div style={{ marginBottom: "15px" }}>
            <strong
              style={{
                color: "#ffffff",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Shree Industries
            </strong>
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
            >
              <i
                className="fa-solid fa-location-dot"
                style={{ marginTop: "4px", color: "#ffffff" }}
              ></i>
              <span>
                Plot No. E-34, WTC Trade Center,
                <br /> SP Waluj Road,Ranjangaon Shenapunji, Waluj MIDC,
                Chhatrapati Sambhaji Nagar, Maharashtra 431136.
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <i className="fa-solid fa-phone" style={{ color: "#ffffff" }}></i>
            <span>+91 9096258317 / 8956412020</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <i
              className="fa-regular fa-envelope"
              style={{ color: "#ffffff" }}
            ></i>
            <span>sales@shreeindustrialheater.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
