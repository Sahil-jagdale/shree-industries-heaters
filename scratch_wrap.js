const fs = require('fs');
const content = fs.readFileSync('app/products/page.tsx', 'utf-8');

const slugs = {
  "ROLLER HEATER": "roller-heater",
  "INDUSTRIAL WATER HEATER": "industrial-water-horizontal-type-heater",
  "IMMERSION HEATERS": "immersion-heater",
  "LOAD BANK HEATER": "loadbank-heater",
  "CARTRIDGE HEATER": "cartridge-heater",
  "CERAMIC BAND HEATER": "ceramic-band-heater",
  "U-SHAPE AIR HEATER": "u-shape-air-heater",
  "MICA BAND HEATER": "mica-band-heater",
  "CERAMIC INFRARED HEATER": "ceramic-infrared-heater",
  "HOT RUNNER HEATER": "hot-runner-heater",
  "FURNACE HEATING ELEMENT": "furnace-heating-elements",
  "OTHER PRODUCTS": "other-products"
};

let newContent = content;

// add Link import if missing
if (!newContent.includes('import Link from')) {
  newContent = newContent.replace('import Image from "next/image";', 'import Image from "next/image";\nimport Link from "next/link";');
}

Object.entries(slugs).forEach(([title, slug]) => {
  // We look for <div className="product-list-card"> ... <h3>TITLE</h3> ... </div>
  const regex = new RegExp(`(<div className="product-list-card">\\s*<div className="product-card-images">[\\s\\S]*?<h3>${title}</h3>[\\s\\S]*?</div>\\s*</div>)`, 'g');
  newContent = newContent.replace(regex, `<Link href="/products/${slug}" style={{ textDecoration: 'none', color: 'inherit' }}>\n$1\n</Link>`);
});

fs.writeFileSync('app/products/page.tsx', newContent);
console.log('Done!');
