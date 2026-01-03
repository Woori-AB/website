import type { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/sv", "/en", "/ko"],
    },
    sitemap: "https://wooristockholm.se/sitemap.xml",
  };
}
