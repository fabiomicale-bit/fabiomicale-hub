import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/maintenance"],
    },
    sitemap: "https://fabiomicale.com/sitemap.xml",
  };
}
