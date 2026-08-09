/* ==========================================================
   SEARCH-ENGINE CRAWLING RULES

   Next.js converts this metadata route into:
   /robots.txt

   NEXT_PUBLIC_SITE_URL allows the domain to be changed later
   without modifying this source file.
   ========================================================== */

// const siteUrl =
//   process.env.NEXT_PUBLIC_SITE_URL ||
//   "https://sivaraj-marimuthu.vercel.app";

// export default function robots() {
//   return {
//     rules: [
//       {
//         userAgent: "*",
//         allow: "/",
//       },
//     ],

//     /*
//      * This URL will become valid when we add sitemap.js in the
//      * next QA fix.
//      */
//     sitemap: `${siteUrl}/sitemap.xml`,

//     host: siteUrl,
//   };
// }

/* ==========================================================
   ROBOTS METADATA

   `dynamic = "force-static"` is required because the project
   uses `output: "export"`. It tells Next.js to generate
   robots.txt during the build.
   ========================================================== */

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sivaraj-marimuthu.vercel.app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
