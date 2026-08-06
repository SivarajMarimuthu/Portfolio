import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getProject } from "@/content/portfolio";

export const metadata = {
  title: "Enterprise Retail In-Shop Assistance Platform",
  description:
    "Case study covering a high-volume retail platform, Python Flask APIs, React integration, automation and AWS production support.",
};

export default function RetailCaseStudyRoute() {
  return <CaseStudyPage project={getProject("retail-in-shop-platform")} />;
}
