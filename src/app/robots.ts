import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://gyumin-archive.vercel.app/sitemap.xml",
    host: "https://gyumin-archive.vercel.app",
  };
}
