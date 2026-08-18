import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://www.blazetech.com.ng";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about/", "/services/", "/contact/"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
