// Centralized global data used across pages/components

export const PROFILE = {
  name: "name",
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

// Chart Data
export const DONUT_DATA = [
  { label: "Views", value: 183000, color: "#f87171" },
  { label: "Likes", value: 280000, color: "#f0a5c8" },
  { label: "Comments", value: 888, color: "#8b5cf6" }
] as const;

export const CITY_DATA = [
  { name: "Mumbai", percentage: 57.5 },
  { name: "Bangalore", percentage: 57.5 },
  { name: "Chennai", percentage: 57.5 },
  { name: "Pune", percentage: 57.5 },
  { name: "Delhi", percentage: 57.5 },
  { name: "Mumbai", percentage: 57.5 }
] as const;

export const LANGUAGE_DATA = [
  { name: "English", percentage: 44.5 },
  { name: "Hindi", percentage: 7.5 },
  { name: "Telugu", percentage: 45.5 },
  { name: "Tamil", percentage: 54.5 },
  { name: "Kannada", percentage: 9.5 },
  { name: "Malayalam", percentage: 7.5 }
] as const;

export const REACH_DATA = [
  { range: "<500", percentage: 18 },
  { range: "500-1.5K", percentage: 30 },
  { range: "1.5-2.5K", percentage: 18 },
  { range: "2.5-3.5K", percentage: 23 },
  { range: "3.5-4.5K", percentage: 33 },
  { range: "4.5K+", percentage: 27 }
] as const;

export const INTEREST_DATA = [
  { name: "Apparel", percentage: 57.5 },
  { name: "Summer outfit", percentage: 45.1 },
  { name: "Beauty Products", percentage: 32.5 },
  { name: "Men wear", percentage: 57.5 },
  { name: "Shoes", percentage: 57.5 },
  { name: "Street style", percentage: 25.5 }
] as const;

export const COUNTRY_DATA = [
  { country: "India", status: "Good" as const },
  { country: "USA", status: "Average" as const },
  { country: "UK", status: "Good" as const },
  { country: "Canada", status: "Average" as const }
] as const;

export const CATEGORY_DATA = [
  { category: "Apparel", status: "Good" as const },
  { category: "Summer outfit", status: "Average" as const },
  { category: "Beauty Products", status: "Good" as const },
  { category: "Men wear", status: "Average" as const },
] as const;

export const STACKED_BAR_DATA = [
  { k: "Video", v: 12, r: 38 },
  { k: "Stories", v: 60, r: 25 },
  { k: "Posts", v: 45, r: 30 },
  { k: "Reels", v: 75, r: 15 }
] as const;

export const LOYALTY_ROWS = [
  { k: "Advocates", v: 70, r: 20 },
  { k: "Promoters", v: 55, r: 30 },
  { k: "Neutrals", v: 35, r: 50 },
] as const;

export const LOYALTY_AXIS = ["10-30%", "30-50%", "50-70%", "70-90%"] as const;
