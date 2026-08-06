import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getProject } from "@/content/portfolio";

export const metadata = {
  title: "Python Business Automation",
  description:
    "Case study covering Python automation for reports, data processing, scheduled communication, files and database maintenance.",
};

export default function PythonAutomationCaseStudyRoute() {
  return <CaseStudyPage project={getProject("python-business-automation")} />;
}
