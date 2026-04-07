import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://orbitaclinica.com";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/equipo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
