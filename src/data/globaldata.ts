// Centralized global data used across pages/components

export const PROFILE = {
  name: "John Doe",
  category: "Fashion, Beauty",
  location: "Bangalore, India",
  gender: "Male",
  age: 21,
  image: "https://i.pravatar.cc/150?img=3",
} as const;

export const PLATFORMS = ["Instagram", "YouTube", "Facebook", "TikTok"] as const;

export const PLATFORM_STATS = [
  { name: "Instagram", followers: "145K", growthPct: "+ 17.36%", growthRateRank: "Top 5%", engagementRate: "8.8%", badgeSrc: "/logos/instagram.png" },
  { name: "YouTube", followers: "82K", growthPct: "+ 9.12%", growthRateRank: "Top 12%", engagementRate: "6.1%", badgeSrc: "/logos/youtube.png" },
  { name: "Facebook", followers: "210K", growthPct: "+ 4.03%", growthRateRank: "Top 25%", engagementRate: "3.4%", badgeSrc: "/logos/facebook.jpg" },
  { name: "TikTok", followers: "351K", growthPct: "+ 22.87%", growthRateRank: "Top 3%", engagementRate: "12.2%", badgeSrc: "/logos/tiktok.webp" },
] as const;

export const INSIGHTS = [
  { k: "Followers", v: "145K" },
  { k: "Following", v: "1,245" },
  { k: "Posts", v: "456" },
  { k: "Engagement Rate", v: "14.5%" },
  { k: "Reach", v: "145K" },
] as const;

export const TOP_CONTENT_COUNT = 4 as const;

export const PAST_CAMPAIGN_ROWS = [
  { brand: "Axe Lifestyle", posts: 14, likes: "Avg 13.5K", com: "Avg 1.4K", er: "12.5%", st: "Active" },
  { brand: "Alo Revive", posts: 11, likes: "Avg 11.4K", com: "Avg 1.2K", er: "9.8%", st: "Active" },
  { brand: "Neo Perfume", posts: 9, likes: "Avg 9.4K", com: "Avg 1.1K", er: "8.3%", st: "Active" },
  { brand: "Oric Beauty", posts: 8, likes: "Avg 8.4K", com: "Avg 1.0K", er: "5.9%", st: "Active" },
] as const;

export const REVIEWS_COUNT = 3 as const;

// Section titles / classes
export const SOCIAL_PLATFORMS_SECTION_TITLE = "Social platforms" as const;
export const SOCIAL_PLATFORMS_CLASS_NAME = "mt-6" as const;
export const INSIGHT_SECTION_TITLE = "Insight" as const;
export const TOP_CONTENT_SECTION_TITLE = "Top Performing Content" as const;
export const REVIEWS_SECTION_TITLE = "Reviews" as const;
