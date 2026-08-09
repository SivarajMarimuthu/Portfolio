// import { CaseStudyPage } from "@/components/CaseStudyPage";
// import { getProject } from "@/content/portfolio";

// export const metadata = {
//   title: "Game Center Billing & POS System",
//   description:
//     "Case study covering a React, Node.js, Express.js and MySQL billing and point-of-sale application.",
// };

// export default function GameCenterCaseStudyRoute() {
//   return <CaseStudyPage project={getProject("game-center-pos")} />;
// }
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getProject } from "@/content/portfolio";

const project = getProject("game-center-pos");

const canonicalPath = "/work/game-center-pos/";

const pageDescription =
  "Case study covering a React, Node.js, Express.js and MySQL billing and point-of-sale application.";

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

export default function GameCenterCaseStudyRoute() {
  return <CaseStudyPage project={project} />;
}
