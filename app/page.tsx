import Image from "next/image";
import HeroCarousel from "../components/HeroCarousel";
type Product = { name: string; image: string; href: string };
type Application = { name: string; image: string };

const products: Product[] = [
  { name: "Roller Heater", image: "roller_heater1.png", href: "roller-heater" },
  {
    name: "Industrial Water Heater",
    image: "ss-304-watter_heater.png",
    href: "industrial-water-horizontal-type-heater",
  },
  {
    name: "Immersion Heaters",
    image: "emmersion_heaters1.png",
    href: "immersion-heater",
  },
  {
    name: "Load Bank Heater",
    image: "loadBank_heater.png",
    href: "loadbank-heater",
  },
  {
    name: "Cartridge Heater",
    image: "high_density_cartridge_heater1.png",
    href: "cartridge-heater",
  },
  {
    name: "Ceramic Band Heater",
    image: "ceramic_band_heater.png",
    href: "ceramic-band-heater",
  },
  {
    name: "U-Shape Air Heater",
    image: "ushaped_finned_heater1.png",
    href: "u-shape-air-heater",
  },
  {
    name: "Mica Band Heater",
    image: "mica_band_heater_1.png",
    href: "mica-band-heater",
  },
  {
    name: "Ceramic Infrared Heater",
    image: "ceramic_infrared_heater.png",
    href: "ceramic-infrared-heater",
  },

  {
    name: "Hot Runner Heater",
    image: "runner_heater1.png",
    href: "hot-runner-heater",
  },
  {
    name: "Furnace Heating Element",
    image: "heating-elements.png",
    href: "furnace-heating-elements",
  },
  {
    name: "Other Products",
    image: "other_products.png",
    href: "other-products",
  },
];

const applications: Application[] = [
  ["Chemical Plant", "chemical--plant.jpg"],
  ["Corrugation Machines", "CORRUGATION-MACHINE.jpg"],
  ["Industrial Furnace", "furnace-big.jpg"],
  ["Industrial Oven", "Industrial_Oven.jpg"],
  ["Plastic Industry", "Plastic.jpg"],
  ["Plating Plants", "plating_header.jpg"],
  ["Rubber Industry", "Rubber-plant.jpg"],
  ["Paint Baker", "PAINT-BAKER.webp"],
  ["Food Industry", "food_industries.jpg"],
  ["7 Process Tank Plating", "7-process-tank-plating.webp"],
  ["Blast Furnace for Steel Melting", "Blast-Furnace-For Steel-Melting.jpg"],
  ["Oil Plant", "oil-plant.jpeg"],
  ["Paint Booth", "paint-booth.jpg"],
  ["Plastic Moulding Machine", "platic-moulding-machine.png"],
  ["Industrial Furnace", "Industrial_Furnace.jpg"],
].map(([name, image]) => ({ name, image }));

const nav = [
  "Home",
  "About Us",
  "Products",
  "Sister Companies",
  "Gallery",
  "Contact Us",
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="section-title">{children}</h2>;
}

export default function Home() {
  return (
    <main>

      <HeroCarousel />

      <section className="intro section">
        <div className="container narrow">
          <p>
            Shree Industries Heaters is an ISO certified company,
            certified by TUV AUSTRIA. We are known for quality products and
            customer satisfaction, making us the vendor of choice for machinery
            manufacturers across India.
          </p>
          <div className="intro-grid">
            <div>
              <h2>
                Welcome to <span>Shree Industries Heaters</span>
              </h2>
              <p>
                We manufacture industrial heaters, heating elements and custom
                heating solutions using the finest raw materials. Our
                experienced team supports customers from product design through
                reliable delivery.
              </p>
              <a className="text-link" href="#products">
                Read more →
              </a>
            </div>
            <div className="intro-card">
              <p>
                We use high-grade stainless steel tubing, Incoloy and magnesium
                oxide to meet demanding industrial requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section products-section">
        <div className="container">
          <SectionTitle>Our Product</SectionTitle>
          <p className="section-lead">
            Explore our range of efficient, dependable industrial heating
            solutions.
          </p>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <a
                  className="product-image"
                  href={`/products/${product.href}`}
                  aria-label={`View ${product.name} details`}
                >
                  <Image
                    src={`/images/products/${product.image}`}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 25vw"
                  />
                </a>
                <a className="product-card-button" href={`/products/${product.href}`}>
                  {product.name}
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container narrow">
          <SectionTitle>Why Us</SectionTitle>
          <p>For customers who work with us, we promise:</p>
          <ul>
            <li>Quality-assured products for every order</li>
            <li>Highly competitive pricing</li>
            <li>Capacity to meet bulk and urgent requirements</li>
          </ul>
        </div>
      </section>

      <section className="assurance">
        <div className="container assurance-grid">
          <article>
            <Image
              src="/images/quality_assurance.png"
              width={110}
              height={110}
              alt="Quality assurance"
            />
            <h3>Quality Assurance</h3>
            <p>
              Strict quality protocols guide every step from design through
              final finishing.
            </p>
          </article>
          <article>
            <Image
              src="/images/customer-satisfaction.png"
              width={110}
              height={110}
              alt="Customer satisfaction"
            />
            <h3>100% Client Satisfaction</h3>
            <p>
              Our client-focused approach delivers dependable products and
              attentive service.
            </p>
          </article>
        </div>
      </section>

      <section className="facts">
        <div className="container facts-grid">
          {[
            ["500,000+", "Heaters Supplied"],
            ["50,000+", "Customised Heaters Delivered"],
            ["10,000+", "Customers"],
          ].map(([number, label]) => (
            <div key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>


    </main>
  );
}
