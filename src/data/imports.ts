// Centralized re-exports for page imports
export { default as Head } from "next/head";

export { Section } from "@/components/Section";
export { IconBtn } from "@/components/shared/IconBtn";
export { Kpi } from "@/components/kpis/Kpi";
export { PlatformCard } from "@/components/platforms/PlatformCard";
export { Insight } from "@/components/insights/Insight";
export { Card } from "@/components/shared/Card";
export { WorldMapSkeleton } from "@/components/platforms/WorldMapSkeleton";
export { ComparisonList } from "@/components/insights/ComparisonList";

export { MiniLineChart } from "@/components/charts/MiniLineChart";
export {
  StackedBars,
  defaultRows as stackedBarsDefaultRows,
  defaultAxis as stackedBarsDefaultAxis,
} from "@/components/charts/StackedBars";
export type { StackedBarRow } from "@/components/charts/StackedBars";
export { Bars } from "@/components/charts/Bars";
export { Donut } from "@/components/charts/Donut";
export { MiniColumnChart } from "@/components/charts/MiniColumnChart";
export { TopContentLine } from "@/components/charts/TopContentLine";
export { AverageActivity } from "@/components/charts/AverageActivity";
export { EngRate } from "@/components/charts/EngRate";
export { AudienceGender } from "@/components/charts/AudienceGender";
export { AudienceTopCity } from "@/components/charts/AudienceTopCity";
export { AudienceLanguages } from "@/components/charts/AudienceLanguages";
export { AudienceReach } from "@/components/charts/AudienceReach";
export { AudienceInterest } from "@/components/charts/AudienceInterest";
export { EngRateComparisonCategories } from "@/components/charts/EngRateComparisonCategories";
export { EngRateComparisonCountries } from "@/components/charts/EngRateComparisonCountries";
export { AudienceAge } from "@/components/charts/AudienceAge";
export { FollowerChart } from "@/components/charts/FollowerChart";
export { LikeChart } from "@/components/charts/LikeChart";

// Additional grouped components
export { default as ProfileHeader } from "@/components/profile/ProfileHeader";
export { default as CreatorCard } from "@/components/profile/CreatorCard";
export { default as QuickKpis } from "@/components/kpis/QuickKpis";
export { default as InsightTitle } from "@/components/insights/InsightTitle";
export { default as TopPerformingContent } from "@/components/content/TopPerformingContent";
export { PastCampaignTable } from "@/components/tables/PastCampaignTable";
export { default as Reviews } from "@/components/reviews/Reviews";
