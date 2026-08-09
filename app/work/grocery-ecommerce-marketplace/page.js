// import { CaseStudyPage } from "@/components/CaseStudyPage";
// import { getProject } from "@/content/portfolio";

// export const metadata = {
//   title: "Grocery E-commerce Marketplace",
//   description:
//     "Case study covering frontend, backend, authentication, database and verified payment workflows for a grocery marketplace.",
// };

// export default function GroceryMarketplaceCaseStudyRoute() {
//   return (
//     <CaseStudyPage project={getProject("grocery-ecommerce-marketplace")} />
//   );
// }
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getProject } from "@/content/portfolio";

const project = getProject("grocery-ecommerce-marketplace");

const canonicalPath = "/work/grocery-ecommerce-marketplace/";

const pageDescription =
  "Case study covering a grocery marketplace with responsive customer, vendor and administrator workflows, backend APIs, authentication, ordering and verified payment processing.";

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

export default function GroceryEcommerceCaseStudyRoute() {
  return <CaseStudyPage project={project} />;
}
