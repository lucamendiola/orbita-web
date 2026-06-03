import type { MetadataRoute } from "next";
import { DRAFT_MODE } from "@/lib/draft";

export default function robots(): MetadataRoute.Robots {
  // Mientras el sitio está en draft (permiso COFEPRIS pendiente),
  // bloqueamos a todos los crawlers para que no se indexe.
  if (DRAFT_MODE) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],
    sitemap: "https://orbitaclinica.com/sitemap.xml",
  };
}
