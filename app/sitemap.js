import { projects } from "@/content/portfolio";

/* ==========================================================
   SITEMAP METADATA

   Next.js generates `/sitemap.xml` from this file.

   `dynamic = "force-static"` is required because the project
   uses `output: "export"`.

   Project URLs are generated from the existing portfolio data,
   so adding another project automatically adds its case-study
   page to the sitemap.
   ========================================================== */

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sivarajmarimuthu.in";

export default function sitemap() {
  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectPages,
  ];
}
