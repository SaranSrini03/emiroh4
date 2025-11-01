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
        <div className="mx-auto max-w-[1200px] px-4 py-6">
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
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[minmax(700px,_1fr)_minmax(450px,_1fr)]">
            <Card title="Top Performing Content" className="col-span-1 w-full md:col-span-1 lg:col-span-1">
              <TopContentLine className="w-full" />
            </Card>
            <Card title="Post Engagement" className="mt-6 md:mt-0 md:col-span-1 lg:col-span-1">
              <StackedBars />
            </Card>
          </div>


          {/* Audience & Activity */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 w-350">
            <Card title="Sentiment Tracking (post comments)" className="w-150 mr-20">
              <Bars />
            </Card>
            <Card title="Loyalty" className="mt-6 lg:mt-0 lg:col-span-1 w-full ml-40">
              <StackedBars rows={loyaltyRows} axis={loyaltyAxis}/>
            </Card>
          </div>
          {/* Past Campaign table */}
          <Section title="Past Campaign" className="mt-6">
            <PastCampaignTable rows={PAST_CAMPAIGN_ROWS} />
          </Section>

          {/* Charts: Average Activity, Eng. Rate, Audience Gender */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="Average Activity">
              <AverageActivity />
            </Card>
            <Card title="Eng. Rate (1.58%)">
              <EngRate />
            </Card>
            <Card title="Audience Gender">
              <AudienceGender />
            </Card>
          </div>

          {/* Maps / Lists */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card title="Audience Country (State)" className="md:col-span-2">
              <WorldMapSkeleton />
            </Card>

          </div>


          {/* Reviews */}
          <Section title={REVIEWS_SECTION_TITLE} className="mt-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {new Array(REVIEWS_COUNT).fill(0).map((_, i) => (
                <div key={i} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                  <p className="text-sm text-neutral-600">I have been extremely happy with the results of working with the creative agency, and I would highly recommend them to...</p>
                  <div className="mt-4 flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/48?img=${i + 10}`}
                      alt="avatar"
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="text-sm">
                      <div className="font-medium">Name Here</div>
                      <div className="text-xs text-amber-500">★★★★★</div>
                    </div>
                    <button className="ml-auto text-xs text-rose-600">Read More</button>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}

