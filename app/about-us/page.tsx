import Image from "next/image";
import "./about.css";

export default function AboutUs() {
  return (
    <main>
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-text">
            <h1>ABOUT US</h1>
            <p>
              <strong>Shree Industries</strong> is among top rated manufacturers
              and suppliers of Industrial Heaters. Based out of Chhatrapati
              Sambhaji nagar, Maharashtra, we cater our heaters to clients all
              across India. At Shree Industries, innovation and reliability are
              redefined in industrial heating solutions manufacturing. With a
              commitment to excellence, we stand as a premier provider of
              cutting-edge industrial heaters designed to meet the diverse needs
              of businesses across sectors.
            </p>
            <p>
              With over 25 years of expertise in the industry, we have perfected
              our craft to deliver{" "}
              <strong>industrial heaters and heating solutions</strong> that not
              only meet but exceeds our clients expectations.
            </p>
          </div>
          <div
            className="about-images-composition"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image
              src="/images/about_laptop.png"
              alt="Industrial Heating Solutions"
              width={450}
              height={450}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      <section className="about-content-section">
        <div
          className="container about-content-grid about-us-grid"
          style={{
            alignItems: "center",
          }}
        >
          <div
            className="about-cards-list"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div className="about-card">
              <h3>Our Infrastructure</h3>
              <p>
                We have a strong infrastructure of machineries, dynamic and
                skilled technicians and a young management team that ensures
                high quality heaters to our esteemed clients.
              </p>
            </div>
            <div className="about-card" style={{ marginLeft: "40px" }}>
              <h3>Manufacturing Facilities</h3>
              <p>
                Shree Industries has an in-house manufacturing facility equipped
                with advanced machinery & equipments. We have a separate
                facility for testing our Heaters. We also have extensive R&D
                unit.
              </p>
            </div>
            <div className="about-card">
              <h3>Our Team</h3>
              <p>
                We boast of our expert team of engineers and technicians, who
                possesses high level of skills & knowledge about the domain. Our
                team is capable of executing and completing all the orders in a
                systematic, scheduled & strategic manner with intentions of
                maintaining utmost flawlessness in the process.
              </p>
            </div>
            <div className="about-card" style={{ marginLeft: "40px" }}>
              <h3>Our Vision</h3>
              <p>
                We endeavor to provide best value industrial heaters and heating
                solutions that place the highest priority on our customer. Our
                mission is to provide comprehensive and high-end cost effective
                industrial heaters to our esteemed customers with highest
                quality levels in order to serve as a solution-focused partner
                to achieve customer delight.
              </p>
            </div>
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                Shree Industries is led by experienced and dynamic management
                having vast experience of around 3 decades. Our Vision is to be
                one of the most leading Industrial Heaters manufacturing
                companies in India in compatibility with our technology and
                products.
              </p>
            </div>
          </div>
          <div
            className="about-side-image"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src="/images/about_collage.png"
              alt="About Us Collage"
              width={600}
              height={600}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="container what-we-do-grid">
          <div className="what-we-do-text">
            <h3>What We Do</h3>
            <p>
              We manufacture and supply wide range of industrial electric
              heaters and are specialized in customized Heaters and Heating
              Elements supplying across Maharashtra and India. With this rich
              industrial experience of over 30 years, we can offer the best
              quality Industrial Heaters such as Load Bank Heaters, Roller
              Heaters, Industrial Oil Heaters, D-Type Heaters, Immersion Heaters
              such as Industrial Water Heaters, Alkaline Heaters, Strip Heaters,
              Cartridge Heaters, Mica Band Heaters, Coil Type Heating Elements,
              all types of Heating Coils, Open Type Heating Elements, U-shaped
              Air Heaters, at a cost effective price.
            </p>
          </div>
          <div className="what-we-do-image">
            <Image
              src="/images/products/ss-304-watter_heater.png"
              alt="Industrial Water Heater"
              width={600}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
