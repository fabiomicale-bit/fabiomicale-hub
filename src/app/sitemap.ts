import { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const BASE = "https://www.fabiomicale.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                                  changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/il-libro`,                    changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/il-metodo`,                   changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lavora-con-me`,               changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/chi-sono`,                    changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`,                        changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/contatti`,                    changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/reinvenzione-over-40`,        changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/ai-per-professionisti`,       changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/risorse`,                     changeFrequency: "monthly", priority: 0.8 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.dataISO),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
