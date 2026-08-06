import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getProject } from "@/content/portfolio";

export const metadata = {
  title: "Grocery E-commerce Marketplace",
  description:
    "Case study covering frontend, backend, authentication, database and verified payment workflows for a grocery marketplace.",
};

export default function GroceryMarketplaceCaseStudyRoute() {
  return (
    <CaseStudyPage project={getProject("grocery-ecommerce-marketplace")} />
  );
}
