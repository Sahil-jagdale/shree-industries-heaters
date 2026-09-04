import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: '#000000', color: '#a0aab5', fontSize: '14px', lineHeight: '1.6' }}>
      <div className="container" style={{ padding: '60px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '30px' }}>
        
        <div>
          <h3 style={{ color: '#ffffff', fontSize: '16px', borderLeft: '3px solid #0066cc', paddingLeft: '10px', marginBottom: '20px', textTransform: 'uppercase' }}>
            About Us
          </h3>
          <p style={{ marginBottom: '20px' }}>
            Shree Industries is one of the top manufacturers and suppliers of all types of Industrial Heaters including, Roller Heaters, Immersion Heaters, Air Heaters, U Shaped Heaters and Heating Elements.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#" aria-label="Facebook" style={{ color: '#ffffff', fontSize: '16px' }}><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="LinkedIn" style={{ color: '#ffffff', fontSize: '16px' }}><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram" style={{ color: '#ffffff', fontSize: '16px' }}><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div>
          <h3 style={{ color: '#ffffff', fontSize: '16px', borderLeft: '3px solid #0066cc', paddingLeft: '10px', marginBottom: '20px', textTransform: 'uppercase' }}>
            Products
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              "Cartridge Heater",
              "Industrial Water Heater",
              "Ceramic Band Heater",
              "U-Shape Air Heater",
              "Hot Runner Heater",
              "Load Bank Heater"
            ].map(item => (
              <li key={item} style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '10px', marginBottom: '10px' }}>
                <Link href={`/#${item.toLowerCase().replaceAll(" ", "-")}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', textTransform: 'uppercase', color: '#d1d8e0' }}>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px' }}></i> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{ color: 'transparent', fontSize: '16px', paddingLeft: '10px', marginBottom: '20px', userSelect: 'none' }}>
            Products
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              "Immersion Heater",
              "Mica Band Heater",
              "Ceramic Infrared Heater",
              "Roller Heater",
              "Furnace Heating Elements",
              "Other Products"
            ].map(item => (
              <li key={item} style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '10px', marginBottom: '10px' }}>
                <Link href={`/#${item.toLowerCase().replaceAll(" ", "-")}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', textTransform: 'uppercase', color: '#d1d8e0' }}>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px' }}></i> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{ color: '#ffffff', fontSize: '16px', borderLeft: '3px solid #0066cc', paddingLeft: '10px', marginBottom: '20px', textTransform: 'uppercase' }}>
            Contact Info
          </h3>
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#ffffff', textTransform: 'uppercase', display: 'block', marginBottom: '5px' }}>Shree Industries</strong>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <i className="fa-solid fa-location-dot" style={{ marginTop: '4px', color: '#ffffff' }}></i>
              <span>
                SR NO 8/6, NEAR FIRE BRIGADE STATION, SHANTINAGAR INDUSTRIAL ESTATE, LANDEWADI, BHOSARI<br/>
                PUNE - 411 039, MAHARASHTRA, INDIA
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <i className="fa-solid fa-phone" style={{ color: '#ffffff' }}></i>
            <span>+91 9096258317 / 8956412020</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fa-regular fa-envelope" style={{ color: '#ffffff' }}></i>
            <span>sales@shreeindustrialheater.com</span>
          </div>
        </div>
      </div>
      

    </footer>
  );
}
