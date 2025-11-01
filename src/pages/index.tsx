import {
  Head,
  Section,
  PlatformCard,
  Insight,
  Card,
  MiniLineChart,
  StackedBars,
  Bars,
  Donut,
  MiniColumnChart,
  WorldMapSkeleton,
  ComparisonList,
} from "@/data/imports";
import ProfileHeader from "@/components/ProfileHeader";
import QuickKpis from "@/components/QuickKpis";

// Exported page values
export const PROFILE = {
  name: "John Doe",
  category: "Fashion, Beauty",
  location: "Bangalore, India",
  gender: "Male",
  age: 21,
  image: "https://i.pravatar.cc/150?img=3",
};

export const PLATFORMS = ["Instagram", "YouTube", "Facebook", "TikTok"] as const;

export const INSIGHTS = [
  { k: "Followers", v: "145K" },
  { k: "Following", v: "1,245" },
  { k: "Posts", v: "456" },
  { k: "Engagement Rate", v: "14.5%" },
  { k: "Reach", v: "145K" },
  { k: "Views", v: "18.7M" },
] as const;

export const TOP_CONTENT_COUNT = 4;

export const PAST_CAMPAIGN_ROWS = [
  { brand: "Axe Lifestyle", posts: 14, likes: "Avg 13.5K", com: "Avg 1.4K", er: "12.5%", st: "Active" },
  { brand: "Alo Revive", posts: 11, likes: "Avg 11.4K", com: "Avg 1.2K", er: "9.8%", st: "Active" },
  { brand: "Neo Perfume", posts: 9, likes: "Avg 9.4K", com: "Avg 1.1K", er: "8.3%", st: "Active" },
  { brand: "Oric Beauty", posts: 8, likes: "Avg 8.4K", com: "Avg 1.0K", er: "5.9%", st: "Active" },
] as const;

export const REVIEWS_COUNT = 3;

// Section titles / classes
export const SOCIAL_PLATFORMS_SECTION_TITLE = "Social platforms";
export const SOCIAL_PLATFORMS_CLASS_NAME = "mt-6";
export const INSIGHT_SECTION_TITLE = "Insight";
export const TOP_CONTENT_SECTION_TITLE = "Top Performing Content";
export const REVIEWS_SECTION_TITLE = "Reviews";

export default function Home() {
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
              {PLATFORMS.map((p, i) => (
                <PlatformCard key={p} name={p} colorIdx={i} />
              ))}
            </div>
          </Section>

          {/* Insight tiles */}
          <Section title={INSIGHT_SECTION_TITLE} className="mt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {INSIGHTS.map((x) => (
                <Insight key={x.k} label={x.k} value={x.v} />
              ))}
            </div>
          </Section>

          {/* Top Performing Content */}
          <Section title={TOP_CONTENT_SECTION_TITLE} className="mt-6">
            <div className="mb-3 flex items-center gap-2 text-sm">
              <span className="rounded-full bg-rose-100 px-3 py-1 text-rose-700">Reels</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1">Posts</span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {new Array(TOP_CONTENT_COUNT).fill(0).map((_, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl">
                  <img
                    src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&auto=format&q=60&sig=${idx}`}
                    alt="content"
                    className="aspect-[3/4] w-full object-cover transition-transform group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-3 text-xs text-white">
                    <span>Leslie Alexander</span>
                    <span className="rounded-md bg-white/20 px-2 py-0.5 text-[10px]">Play</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Charts row */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="Top Performing Content">
              <MiniLineChart />
            </Card>
            <Card title="Post Engagement">
              <StackedBars />
            </Card>
            <Card title="Sentiment Tracking">
              <Bars />
            </Card>
          </div>

          {/* Audience & Activity */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="Average Activity">
              <Donut />
            </Card>
            <Card title="Eng. Rate (12M)">
              <MiniColumnChart />
            </Card>
            <Card title="Audience Gender">
              <Donut colors="violet" />
            </Card>
          </div>

          {/* Maps / Lists */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card title="Audience Country (State)">
              <WorldMapSkeleton />
            </Card>
            <Card title="Eng. Rate Comparison">
              <ComparisonList />
            </Card>
          </div>

          {/* Past Campaign table */}
          <Section title="Past Campaign" className="mt-6">
            <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-neutral-50 text-neutral-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">Brand</th>
                    <th className="px-4 py-3 font-medium">Total Posts</th>
                    <th className="px-4 py-3 font-medium">Likes</th>
                    <th className="px-4 py-3 font-medium">Comments</th>
                    <th className="px-4 py-3 font-medium">Eng. rate</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {PAST_CAMPAIGN_ROWS.map((r) => (
                    <tr key={r.brand} className="border-t border-neutral-100">
                      <td className="px-4 py-3">{r.brand}</td>
                      <td className="px-4 py-3">{r.posts}</td>
                      <td className="px-4 py-3">{r.likes}</td>
                      <td className="px-4 py-3">{r.com}</td>
                      <td className="px-4 py-3">{r.er}</td>
                      <td className="px-4 py-3"><span className="rounded-full bg-emerald-50 px-2 py-1 text-xs text-emerald-700">{r.st}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

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

