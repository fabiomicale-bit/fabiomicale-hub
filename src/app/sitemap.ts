import { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const BASE = "https://www.fabiomicale.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                                  changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/accademia`,                  changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/newsletter`,                 changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/mepa-elite`,                  changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/impresa-liquida`,               changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/punto-zero`,                  changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/agenzia-business`,            changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/il-libro`,                    changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/il-metodo`,                   changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lavora-con-me`,               changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/recensioni`,                  changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/chi-sono`,                    changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`,                        changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/contatti`,                    changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/agenzia-business/analisi-strategiche`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/agenzia-business/analisi-strategiche/era-acquisizione-liquida`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/agenzia-business/analisi-strategiche/dal-click-al-contratto`,   changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/agenzia-business/analisi-strategiche/automazione-invisibile`,   changeFrequency: "monthly", priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.dataISO),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
