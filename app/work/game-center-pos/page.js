import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getProject } from "@/content/portfolio";

export const metadata = {
  title: "Game Center Billing & POS System",
  description:
    "Case study covering a React, Node.js, Express.js and MySQL billing and point-of-sale application.",
};

export default function GameCenterCaseStudyRoute() {
  return <CaseStudyPage project={getProject("game-center-pos")} />;
}
