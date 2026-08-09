// import { CaseStudyPage } from "@/components/CaseStudyPage";
// import { getProject } from "@/content/portfolio";

// export const metadata = {
//   title: "Python Business Automation",
//   description:
//     "Case study covering Python automation for reports, data processing, scheduled communication, files and database maintenance.",
// };

// export default function PythonAutomationCaseStudyRoute() {
//   return <CaseStudyPage project={getProject("python-business-automation")} />;
// }
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getProject } from "@/content/portfolio";

const project = getProject("python-business-automation");

const canonicalPath = "/work/python-business-automation/";

const pageDescription =
  "Case study covering Python automation for recurring reports, campaign processing, scheduled communication, file operations, database maintenance and production support.";

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

export default function PythonBusinessAutomationCaseStudyRoute() {
  return <CaseStudyPage project={project} />;
}
