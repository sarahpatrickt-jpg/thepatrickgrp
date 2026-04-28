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
        text: "Every spring the question is the same: is this the year the market finally softens? And every year, Southeast Michigan finds a way to surprise people. Spring 2026 is no different - but it's nuanced in ways that matter if you're deciding whether to list, buy, or wait.",
      },
      {
        type: "paragraph",
        text: "Here's what the data from March 2026 (our most recent complete month from Realcomp) is telling us, and how I'm thinking about what comes next.",
      },
      {
        type: "h2",
        text: "Prices Are Still Rising - Just More Slowly",
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
        text: "Wayne County's 6.2% gain stands out - that market has been quietly outperforming for a few years now as buyers price out of Oakland and push east and south. Macomb at +4.7% is similarly strong. Oakland and Washtenaw, which surged hardest in 2021–2022, are settling into a more measured growth pattern.",
      },
      {
        type: "h2",
        text: "Homes Are Taking Longer to Sell",
      },
      {
        type: "paragraph",
        text: "The more telling story is in days on market. Every county saw average DOM increase year-over-year in March - and in some cases significantly.",
      },
      {
        type: "bullets",
        items: [
          "Macomb County: 18 days average - up 28.6% from March 2025",
          "Livingston County: 17 days average - up 21.4% from March 2025",
          "Oakland County: 16 days average - up 14.3% from March 2025",
          "Wayne County: 17 days average - up 13.3% from March 2025",
          "Washtenaw County: 15 days average - up 6.3% from March 2025",
        ],
      },
      {
        type: "paragraph",
        text: "To be clear: 15–18 days is still a fast market by historical standards. But the direction matters. A year ago, a well-priced home in Oakland County might have had offers in 48–72 hours. Today, sellers who overprice or under-prepare are waiting - and that wait is costing them leverage.",
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
        text: "Inventory is still tight in the sub-$400k range in Oakland County. Birmingham, Troy, and Rochester Hills continue to see competitive offers on well-presented homes. We had a listing in Troy last month that drew four offers in the first weekend - but we priced it carefully and the sellers invested in a pre-market refresh.",
      },
      {
        type: "paragraph",
        text: "Above $600k, it's a different conversation. Buyers at that price point have options, they're taking their time, and they're negotiating. Sellers who priced optimistically in the fall have come down. That's not a crash - it's a recalibration.",
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
        text: "You have more breathing room than you did in 2022. Use it wisely - don't use it as an excuse to move slowly on something you genuinely want. The best homes at the right prices still attract competition.",
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
        text: "The window to sell remains favorable - prices are up, buyer demand is real, and inventory is still relatively low by historical standards. But the sellers getting top dollar are the ones treating this like a competitive process, not a guaranteed windfall.",
      },
      {
        type: "h2",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "Southeast Michigan real estate in spring 2026 is a good market - not a wild one. Prices are growing, not crashing. Buyers have slightly more leverage than they did a year ago. Sellers who do the work are still seeing strong results.",
      },
      {
        type: "paragraph",
        text: "If you're thinking about making a move this year, now is the time to have the conversation - not because the market is going to fall, but because spring is historically the best window to act, and that window is already open.",
      },
    ],
  },

  // ─── "Why Birmingham Keeps Appreciating" ─────────────────────────────────
  {
    slug: "why-birmingham-keeps-appreciating",
    title: "Why Birmingham Keeps Appreciating",
    excerpt:
      "A walkable downtown isn't just a lifestyle feature - it's a durable value driver that has held through every market cycle we've seen.",
    date: "2026-03-15",
    author: "Sarah",
    category: "Neighborhood",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Birmingham is one of the few markets in Southeast Michigan where I consistently have to tell sellers not to anchor too low. Across every cycle I've worked through, this city has held its value in ways that other Oakland County markets haven't. That's not an accident.",
      },
      {
        type: "h2",
        text: "The Downtown Effect Is Real",
      },
      {
        type: "paragraph",
        text: "Birmingham's walkable downtown core along Old Woodward and Merrill Street isn't just a lifestyle amenity - it's a structural demand driver. Very few communities in Southeast Michigan offer the density of independently owned restaurants, retail, and year-round foot traffic that Birmingham does within walking distance of residential streets.",
      },
      {
        type: "paragraph",
        text: "That walkability has a direct effect on buyer behavior. Buyers who want this don't have close alternatives. You can't replicate a walkable downtown in a suburb. So when inventory in Birmingham is low - which it almost always is - buyers compete for it.",
      },
      {
        type: "h2",
        text: "Supply Is Structurally Constrained",
      },
      {
        type: "paragraph",
        text: "Birmingham is approximately 4.7 square miles. It doesn't have room to expand the way communities like Shelby Township or Novi do. When demand rises, there's limited new inventory to absorb it. That supply constraint is a core reason why prices hold and appreciate in ways that larger, more developable communities don't.",
      },
      {
        type: "paragraph",
        text: "New construction does happen in Birmingham, but it's infill - replacing older homes or building on the rare available lot. When new construction hits the market here, it typically sets new price floors rather than competing with existing homes on value.",
      },
      {
        type: "h2",
        text: "What the Numbers Show",
      },
      {
        type: "stat-row",
        stats: [
          { label: "Median Sale Price", value: "$720,000", note: "+4.2% year-over-year" },
          { label: "Days on Market",    value: "11",       note: "Oakland avg: 16" },
          { label: "Price Per Sq Ft",  value: "$298",     note: "Among highest in Oakland Co." },
        ],
      },
      {
        type: "paragraph",
        text: "Eleven days on market. That number tells you what the demand curve looks like. In a county where the March 2026 average was 16 days, Birmingham's sub-two-week pace signals that well-priced homes here face real competition - and that buyers aren't waiting.",
      },
      {
        type: "h2",
        text: "Architectural Quality Holds Value",
      },
      {
        type: "paragraph",
        text: "Birmingham's housing stock includes Tudor revivals and colonials from the 1920s through the 1950s built with quality that shows up in resale. Solid brick construction, larger-than-usual lots for an inner-ring suburb, mature street trees. When buyers compare these homes to newer suburban construction, the quality differential justifies a meaningful premium for a large segment of the market.",
      },
      {
        type: "paragraph",
        text: "Buyers often tell me they didn't expect to love the older stock as much as they do. The bones are good. And when the bones are good, a renovation budget goes further than it does when you're trying to fix structural mediocrity.",
      },
      {
        type: "h2",
        text: "What I Watch for as a Listing Agent",
      },
      {
        type: "paragraph",
        text: "When I'm preparing a Birmingham listing, I'm looking at a handful of things: the condition of windows and mechanicals (buyers at this price point expect them to be updated), the lot size - even 15 feet of extra depth matters here - and the kitchen and primary suite. Buyers at $700K and above are comparing this home against renovated homes in other Oakland County markets. The listings that win are the ones that look genuinely ready.",
      },
      {
        type: "callout",
        label: "The pattern",
        text: "Birmingham has outperformed through the 2008 crash, the COVID spike, and the 2022 rate correction. Every time the market has softened, Birmingham has held firmer than comparable Oakland County communities. That consistency is what makes it one of the most reliable value stores in Southeast Michigan.",
      },
      {
        type: "h2",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "If you're buying in Birmingham, understand that you're paying for one of the most durable markets in the region. Don't expect to steal it. Do expect that in 5–7 years, you'll have strong resale optionality. In most markets, that's not something I can promise.",
      },
      {
        type: "paragraph",
        text: "For sellers: your biggest risk is overpricing at the luxury tier above $1.5M. Below that, well-prepared homes continue to see competitive activity. The fundamentals here are as strong as they've been.",
      },
    ],
  },

  // ─── "A Buyer's Map to Grosse Pointe" ────────────────────────────────────
  {
    slug: "buyers-map-to-grosse-pointe",
    title: "A Buyer's Map to Grosse Pointe",
    excerpt:
      "Five distinct communities, each with a different feel and price point. Here's how to navigate them before you tour a single home.",
    date: "2026-02-10",
    author: "Brad",
    category: "Buyer Tips",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "\"Grosse Pointe\" isn't one market - it's five. And if you're buying here without understanding the differences, you're navigating blind. I've helped buyers find the right fit across all five communities, and the answer almost always comes down to the same three things: budget, lifestyle, and how much proximity to Detroit matters to you.",
      },
      {
        type: "h2",
        text: "The Five Communities at a Glance",
      },
      {
        type: "h3",
        text: "Grosse Pointe Park - Most Urban, Most Accessible Entry Point",
      },
      {
        type: "paragraph",
        text: "Park is the most urban of the five, bordering Detroit to the west. Homes sit on smaller lots, and the architectural range is wide - solid brick colonials, Queen Anne revivals, bungalows. The neighborhood has a walkability that the other communities don't quite match. Entry points are the lowest of the five, and the upside for buyers who are comfortable with the proximity to Detroit is real.",
      },
      {
        type: "h3",
        text: "Grosse Pointe City - Village Center, Strongest Lifestyle Appeal",
      },
      {
        type: "paragraph",
        text: "What most people picture when they imagine \"Grosse Pointe\" is Grosse Pointe City - the village center along Kercheval, independent restaurants, boutiques, and a neighborhood feel that's more insular than Park. Prices run slightly higher than Park in the same size home. Well-maintained homes in the $400K–$650K range move quickly when they're priced right.",
      },
      {
        type: "h3",
        text: "Grosse Pointe Farms - Larger Lots, Premium Addresses",
      },
      {
        type: "paragraph",
        text: "Farms commands a premium for tangible reasons: larger lots, more architectural standouts, and addresses that carry weight with a certain buyer profile. The Farms also has access to private lakefront amenities through Pier Park, which matters to buyers who want Lake St. Clair access without owning waterfront. Above $800K, competition is real and inventory is consistently thin.",
      },
      {
        type: "h3",
        text: "Grosse Pointe Woods - Best Value Per Square Foot",
      },
      {
        type: "paragraph",
        text: "Woods is where I point first-time Grosse Pointe buyers who want the community feel on a tighter budget. Larger lots than Park, better value per square foot than Farms, and a residential character that feels more removed from the city. The tradeoff is distance from the main commercial corridors and a slightly longer drive to the waterfront amenities.",
      },
      {
        type: "h3",
        text: "Grosse Pointe Shores - Waterfront and Estate Territory",
      },
      {
        type: "paragraph",
        text: "Shores is the outlier - smaller in population, significant lakefront inventory, and estate-scale properties. If direct Lake St. Clair access is the priority, this is where you look. Expect to pay the waterfront premium, and expect that well-positioned waterfront homes sell in a compressed window when they come to market.",
      },
      {
        type: "h2",
        text: "The Detroit Proximity Question",
      },
      {
        type: "paragraph",
        text: "I'll be direct: Detroit's proximity is an asset for many buyers and a hesitation for others. If you're coming from outside the region, it can feel like a concern. What I consistently hear from buyers a year after they move in - especially those coming from Chicago or the coasts - is that the concern was unfounded. Grosse Pointe has maintained a clear identity and strong price performance through multiple cycles.",
      },
      {
        type: "paragraph",
        text: "For certain buyer profiles - remote workers, buyers who value easy city access for dining and culture, and buyers who simply want more house for the money - the proximity is a feature, not a liability.",
      },
      {
        type: "h2",
        text: "Before You Tour: The Practical Checklist",
      },
      {
        type: "bullets",
        items: [
          "Know which community fits your budget before you start. The price tiers are real and meaningful.",
          "If waterfront access matters, clarify upfront whether you want direct ownership or shared amenity access - they're priced very differently.",
          "Architecture varies more than you'd expect. Decide whether you want historic character or updated finishes before scheduling showings, or you'll burn weekends.",
          "Check the flood zone status on any property near the lake. It affects insurance cost and can affect financing.",
          "Grosse Pointe Park and City homes at the right price can sell quickly. Get pre-approved before you look seriously.",
        ],
      },
      {
        type: "h2",
        text: "My Take",
      },
      {
        type: "paragraph",
        text: "Grosse Pointe as a whole has outperformed my expectations as a market over the past five years. The Lake St. Clair waterfront gives the community a lifestyle asset with no real substitute in Southeast Michigan. And the value you get relative to comparable Oakland County markets is significant - you're getting more house, access to water, and a community with a strong sense of place.",
      },
      {
        type: "callout",
        label: "Practical advice",
        text: "Get pre-approved, know your community, and move when you find the right home. Grosse Pointe isn't the kind of market where waiting typically produces a better deal - especially on the Farms and Shores end of the price spectrum.",
      },
      {
        type: "paragraph",
        text: "If you're weighing Grosse Pointe against Northville, Rochester Hills, or Royal Oak, the conversation is worth having. The right answer depends on what matters most to you, and I'm happy to walk through it before you start touring.",
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
