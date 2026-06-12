import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nazarko.tech";

  const iphoneModels = [
    "android",

    "iphone-x",
    "iphone-xr",
    "iphone-xs",
    "iphone-xs-max",

    "iphone-11",
    "iphone-11-pro",
    "iphone-11-pro-max",

    "iphone-12-mini",
    "iphone-12",
    "iphone-12-pro",
    "iphone-12-pro-max",

    "iphone-13-mini",
    "iphone-13",
    "iphone-13-pro",
    "iphone-13-pro-max",

    "iphone-14",
    "iphone-14-plus",
    "iphone-14-pro",
    "iphone-14-pro-max",

    "iphone-15",
    "iphone-15-plus",
    "iphone-15-pro",
    "iphone-15-pro-max",

    "iphone-16",
    "iphone-16-pro",
    "iphone-16-pro-max",

    "iphone-17",
    "iphone-17-pro",
    "iphone-17-pro-max",
  ];

  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/price`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/warranty`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/remont-pc`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/remont-laptop`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/remont-playstation`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/remont-xbox`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];

  iphoneModels.forEach((model) => {
    pages.push({
      url: `${baseUrl}/remont-iphone/${model}`,
      lastModified: new Date(),
      priority: 0.7,
    });
  });

  return pages;
}