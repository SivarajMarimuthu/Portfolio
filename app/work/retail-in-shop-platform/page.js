// import { CaseStudyPage } from "@/components/CaseStudyPage";
// import { getProject } from "@/content/portfolio";

// export const metadata = {
//   title: "Enterprise Retail In-Shop Assistance Platform",
//   description:
//     "Case study covering a high-volume retail platform, Python Flask APIs, React integration, automation and AWS production support.",
// };

// export default function RetailCaseStudyRoute() {
//   return <CaseStudyPage project={getProject("retail-in-shop-platform")} />;
// }
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getProject } from "@/content/portfolio";

const project = getProject("retail-in-shop-platform");

const canonicalPath = "/work/retail-in-shop-platform/";

const pageDescription =
  "Case study covering an enterprise retail platform supporting in-store customer engagement, campaign workflows, membership capture, dashboards, reporting and production operations.";

export const metadata = {
  title: project.title,
  description: pageDescription,

  alternates: {
    canonical: canonicalPath,
  },

  openGraph: {
    title: project.title,
    description: pageDescription,
    url: canonicalPath,
    type: "article",
    images: [
      {
        url: project.image,
        width: 1792,
        height: 1024,
        alt: project.imageAlt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: project.title,
    description: pageDescription,
    images: [project.image],
  },
};

export default function RetailCaseStudyRoute() {
  return <CaseStudyPage project={project} />;
}
