import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nazarko.tech",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://nazarko.tech/contacts",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://nazarko.tech/price",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}