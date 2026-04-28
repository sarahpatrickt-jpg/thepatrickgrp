export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "callout"; label: string; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "two-col"; left: { label: string; text: string }; right: { label: string; text: string } }
  | { type: "stat-row"; stats: { label: string; value: string; note: string }[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO format: YYYY-MM-DD
  author: "Sarah" | "Brad";
  category: "Market Update" | "Buyer Tips" | "Seller Tips" | "Neighborhood" | "Team News";
  readTime: string;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "spring-2026-southeast-michigan-market-update",
    title: "Spring 2026 Southeast Michigan Real Estate Market Update",
    excerpt:
      "Prices are up across all five counties, but homes are sitting longer than they did a year ago. Here's what that means if you're thinking about buying or selling this spring.",
    date: "2026-04-27",
    author: "Sarah",
    category: "Market Update",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "Every spring the question is the same: is this the year the market finally softens? And every year, Southeast Michigan finds a way to surprise people. Spring 2026 is no different — but it's nuanced in ways that matter if you're deciding whether to list, buy, or wait.",
      },
      {
        type: "paragraph",
        text: "Here's what the data from March 2026 (our most recent complete month from Realcomp) is telling us, and how I'm thinking about what comes next.",
      },
      {
        type: "h2",
        text: "Prices Are Still Rising — Just More Slowly",
      },
      {
        type: "paragraph",
        text: "Median sale prices are up year-over-year in every county we track. That's the headline. But the pace of appreciation has come down significantly from the 2021–2023 run-up, and that's actually healthy. Double-digit appreciation isn't sustainable. What we're seeing now looks more like a normal, well-functioning market than the frenzy of a few years ago.",
      },
      {
        type: "stat-row",
        stats: [
          { label: "Oakland County", value: "$367,000", note: "+4.2% YoY" },
          { label: "Macomb County", value: "$270,000", note: "+4.7% YoY" },
          { label: "Washtenaw County", value: "$420,000", note: "+2.4% YoY" },
          { label: "Livingston County", value: "$404,000", note: "+2.3% YoY" },
          { label: "Wayne County", value: "$202,000", note: "+6.2% YoY" },
        ],
      },
      {
        type: "paragraph",
        text: "Wayne County's 6.2% gain stands out — that market has been quietly outperforming for a few years now as buyers price out of Oakland and push east and south. Macomb at +4.7% is similarly strong. Oakland and Washtenaw, which surged hardest in 2021–2022, are settling into a more measured growth pattern.",
      },
      {
        type: "h2",
        text: "Homes Are Taking Longer to Sell",
      },
      {
        type: "paragraph",
        text: "The more telling story is in days on market. Every county saw average DOM increase year-over-year in March — and in some cases significantly.",
      },
      {
        type: "bullets",
        items: [
          "Macomb County: 18 days average — up 28.6% from March 2025",
          "Livingston County: 17 days average — up 21.4% from March 2025",
          "Oakland County: 16 days average — up 14.3% from March 2025",
          "Wayne County: 17 days average — up 13.3% from March 2025",
          "Washtenaw County: 15 days average — up 6.3% from March 2025",
        ],
      },
      {
        type: "paragraph",
        text: "To be clear: 15–18 days is still a fast market by historical standards. But the direction matters. A year ago, a well-priced home in Oakland County might have had offers in 48–72 hours. Today, sellers who overprice or under-prepare are waiting — and that wait is costing them leverage.",
      },
      {
        type: "callout",
        label: "What this means",
        text: "Longer days on market doesn't mean the market is bad. It means the gap between priced-right and overpriced has widened. Homes that are well-prepared and accurately priced are still moving quickly. Homes that aren't are sitting.",
      },
      {
        type: "h2",
        text: "What I'm Seeing on the Ground",
      },
      {
        type: "paragraph",
        text: "Data tells you what happened. Let me tell you what I'm watching in real time.",
      },
      {
        type: "paragraph",
        text: "Inventory is still tight in the sub-$400k range in Oakland County. Birmingham, Troy, and Rochester Hills continue to see competitive offers on well-presented homes. We had a listing in Troy last month that drew four offers in the first weekend — but we priced it carefully and the sellers invested in a pre-market refresh.",
      },
      {
        type: "paragraph",
        text: "Above $600k, it's a different conversation. Buyers at that price point have options, they're taking their time, and they're negotiating. Sellers who priced optimistically in the fall have come down. That's not a crash — it's a recalibration.",
      },
      {
        type: "paragraph",
        text: "Macomb County is one to watch. The price appreciation there (+4.7%) combined with still-affordable entry prices makes it attractive to move-up buyers from Wayne and first-time buyers who've been priced out of Oakland. I expect that to continue through summer.",
      },
      {
        type: "h2",
        text: "What This Means for Buyers",
      },
      {
        type: "paragraph",
        text: "You have more breathing room than you did in 2022. Use it wisely — don't use it as an excuse to move slowly on something you genuinely want. The best homes at the right prices still attract competition.",
      },
      {
        type: "bullets",
        items: [
          "Get pre-approved before you start looking seriously. Sellers still expect it.",
          "In the under-$400k Oakland County range, be ready to move quickly.",
          "Above $500k, you have more negotiating room on price and terms than a year ago.",
          "Don't skip the inspection. Markets shift and you want to know what you're buying.",
        ],
      },
      {
        type: "h2",
        text: "What This Means for Sellers",
      },
      {
        type: "paragraph",
        text: "This is not a set-it-and-forget-it market anymore. The sellers who are winning right now are the ones who are doing the work: decluttering, addressing deferred maintenance, pricing based on data rather than optimism.",
      },
      {
        type: "two-col",
        left: {
          label: "Do this",
          text: "Price with the current data, not last year's comps. Invest in professional photography. Address anything a buyer's inspector will flag. Have your disclosures ready.",
        },
        right: {
          label: "Avoid this",
          text: "Pricing above market and planning to 'negotiate down.' Overpriced homes are getting ignored, not negotiated on. Buyers today are informed and patient.",
        },
      },
      {
        type: "paragraph",
        text: "The window to sell remains favorable — prices are up, buyer demand is real, and inventory is still relatively low by historical standards. But the sellers getting top dollar are the ones treating this like a competitive process, not a guaranteed windfall.",
      },
      {
        type: "h2",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "Southeast Michigan real estate in spring 2026 is a good market — not a wild one. Prices are growing, not crashing. Buyers have slightly more leverage than they did a year ago. Sellers who do the work are still seeing strong results.",
      },
      {
        type: "paragraph",
        text: "If you're thinking about making a move this year, now is the time to have the conversation — not because the market is going to fall, but because spring is historically the best window to act, and that window is already open.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
