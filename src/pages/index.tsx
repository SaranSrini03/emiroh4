import {
  Head,
  Section,
  PlatformCard,
  Insight,
  Card,
  StackedBars,
  type StackedBarRow,
  Bars,
  AverageActivity,
  EngRate,
  AudienceGender,
  MiniColumnChart,
  WorldMapSkeleton,
  ComparisonList,
  ProfileHeader,
  QuickKpis,
  InsightTitle,
  TopPerformingContent,
  TopContentLine,
  PastCampaignTable,
  AudienceTopCity,
  AudienceLanguages,
  AudienceReach,
  AudienceInterest,
  EngRateComparisonCategories,
  EngRateComparisonCountries,
  AudienceAge,
  FollowerChart,
  LikeChart,
  Reviews,
} from "@/data/imports";
import {
  PROFILE,
  PLATFORM_STATS,
  INSIGHTS,
  PAST_CAMPAIGN_ROWS,
  REVIEWS_COUNT,
  SOCIAL_PLATFORMS_SECTION_TITLE,
  SOCIAL_PLATFORMS_CLASS_NAME,
  INSIGHT_SECTION_TITLE,
  REVIEWS_SECTION_TITLE,
  PLATFORMS,
} from "@/data/globaldata";

export default function Home() {
  const loyaltyRows: StackedBarRow[] = [
    { k: "Advocates", v: 70, r: 20 },
    { k: "Promoters", v: 55, r: 30 },
    { k: "Neutrals", v: 35, r: 50 },
  ];
  const loyaltyAxis = ["10-30%", "30-50%", "50-70%", "70-90%"];
  return (
    <>
      <Head>
        <title>Emiroh4</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-neutral-50 text-neutral-800">
        {/* Page container */}
        <div className="mx-auto max-w-[1200px] px-3 py-4 sm:px-4 sm:py-6">
          {/* Top profile header */}
          <ProfileHeader
            name={PROFILE.name}
            category={PROFILE.category}
            location={PROFILE.location}
            gender={PROFILE.gender}
            age={PROFILE.age}
            image={PROFILE.image}
          />
          <QuickKpis />

          {/* Social platforms */}
          <Section title={SOCIAL_PLATFORMS_SECTION_TITLE} className={SOCIAL_PLATFORMS_CLASS_NAME}>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {PLATFORM_STATS.map((p, i) => (
                <PlatformCard
                  key={p.name}
                  name={p.name}
                  colorIdx={i}
                  followers={p.followers}
                  growthPct={p.growthPct}
                  growthRateRank={p.growthRateRank}
                  engagementRate={p.engagementRate}
                  badgeSrc={p.badgeSrc}
                />
              ))}
            </div>
          </Section>

          {/* Insight tiles */}
          <Section title={<InsightTitle title={INSIGHT_SECTION_TITLE} options={[...PLATFORMS]} />} className="mt-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 w-full">
              {INSIGHTS.map((x) => (
                <Insight key={x.k} label={x.k} value={x.v} />
              ))}
            </div>
          </Section>

          {/* Top Performing Content */}
          <TopPerformingContent />


          {/* Charts row */}
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Card title="Top Performing Content" className="w-full">
              <div className="overflow-x-auto">
                <TopContentLine className="w-full min-w-[600px]" />
              </div>
            </Card>
            <Card title="Post Engagement" className="w-full">
              <StackedBars />
            </Card>
          </div>


          {/* Audience & Activity */}
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Card title="Sentiment Tracking (post comments)" className="w-full">
              <div className="overflow-x-auto">
                <Bars />
              </div>
            </Card>
            <Card title="Loyalty" className="w-full">
              <StackedBars rows={loyaltyRows} axis={loyaltyAxis}/>
            </Card>
          </div>
          {/* Past Campaign table */}
          <Section title="Past Campaign" className="mt-6">
            <PastCampaignTable rows={PAST_CAMPAIGN_ROWS} />
          </Section>

          {/* Charts: Average Activity, Eng. Rate, Audience Gender */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Average Activity" className="w-full">
              <AverageActivity />
            </Card>
            <Card title="Eng. Rate (1.58%)" className="w-full">
              <EngRate />
            </Card>
            <Card title="Audience Gender" className="w-full sm:col-span-2 lg:col-span-1">
              <AudienceGender />
            </Card>
          </div>

          {/* Audience Age, Follower Chart, Like Chart */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="Audience Age">
              <AudienceAge />
            </Card>
            <Card title="Follower Chart">
              <FollowerChart />
            </Card>
            <Card title="Like Chart">
              <LikeChart />
            </Card>
          </div>

          {/* Maps / Lists */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card title="Audience Country (State)" className="md:col-span-2">
              <WorldMapSkeleton />
            </Card>
          </div>

          {/* New Three Cards Section */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="Audience top city">
              <AudienceTopCity />
            </Card>
            <Card title="Audience Languages">
              <AudienceLanguages />
            </Card>
            <Card title="Audience Reach">
              <AudienceReach />
            </Card>
          </div>

          {/* Second Three Cards Section */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="Audience Interest">
              <AudienceInterest />
            </Card>
            <Card title="Eng. Rate Comparison">
              <EngRateComparisonCategories />
            </Card>
            <Card title="Eng. Rate Comparison (Audience Countries)">
              <EngRateComparisonCountries />
            </Card>
          </div>

          {/* Reviews */}
          <Reviews
            title={REVIEWS_SECTION_TITLE}
            reviewsCount={REVIEWS_COUNT}
            currentPage={1}
            totalPages={4}
          />
        </div>
      </main>
    </>
  );
}

