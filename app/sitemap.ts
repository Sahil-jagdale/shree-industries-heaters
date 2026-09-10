import type { MetadataRoute } from "next";

const productSlugs = [
  "porcelain-heater",
  "roller-heater",
  "industrial-water-horizontal-type-heater",
  "immersion-heater",
  "loadbank-heater",
  "cartridge-heater",
  "ceramic-band-heater",
  "u-shape-air-heater",
  "mica-band-heater",
  "ceramic-infrared-heater",
  "hot-runner-heater",
  "furnace-heating-elements",
  "other-products",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.shreeindustriesheaters.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/supply-services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
