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
  image?: string; // URL for hero/card image
  imageAlt?: string;
  relatedSlugs: string[];
  relatedCitySlugs: string[];
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
    image: "/images/insights/spring-2026-market-update.jpg",
    imageAlt: "Suburban homes in spring with green lawns and flowering trees",
    relatedSlugs: ["best-time-to-sell-a-house-southeast-michigan", "how-to-win-a-bidding-war-metro-detroit", "cost-to-sell-a-house-michigan"],
    relatedCitySlugs: ["birmingham-mi", "troy-mi", "rochester-hills-mi", "sterling-heights-mi", "warren-mi"],
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
    image: "/images/insights/why-birmingham-keeps-appreciating.jpg",
    imageAlt: "Upscale residential neighborhood with mature trees and brick homes",
    excerpt:
      "A walkable downtown isn't just a lifestyle feature - it's a durable value driver that has held through every market cycle we've seen.",
    date: "2026-03-15",
    author: "Sarah",
    category: "Neighborhood",
    readTime: "5 min read",
    relatedSlugs: ["spring-2026-southeast-michigan-market-update", "rochester-hills-vs-troy-michigan", "moving-to-southeast-michigan-from-chicago"],
    relatedCitySlugs: ["birmingham-mi", "bloomfield-hills-mi", "royal-oak-mi"],
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
    image: "/images/insights/buyers-map-grosse-pointe.jpg",
    imageAlt: "Elegant home exterior with landscaped front yard",
    excerpt:
      "Five distinct communities, each with a different feel and price point. Here's how to navigate them before you tour a single home.",
    date: "2026-02-10",
    author: "Brad",
    category: "Buyer Tips",
    readTime: "7 min read",
    relatedSlugs: ["how-to-win-a-bidding-war-metro-detroit", "what-a-home-inspection-covers-michigan", "new-construction-vs-resale-michigan"],
    relatedCitySlugs: ["grosse-pointe-mi", "st-clair-shores-mi", "detroit-mi"],
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

  // ─── "How Much Does It Cost to Sell a House in Michigan?" ──────────────────
  {
    slug: "cost-to-sell-a-house-michigan",
    title: "How Much Does It Cost to Sell a House in Michigan?",
    image: "/images/insights/cost-to-sell-michigan.jpg",
    imageAlt: "Calculator and documents on a desk representing home selling costs",
    excerpt:
      "Transfer taxes, title fees, commissions, and concessions — here's what Southeast Michigan sellers actually pay at closing, with a worked example on a $400K sale.",
    date: "2026-05-05",
    author: "Sarah",
    category: "Seller Tips",
    readTime: "6 min read",
    relatedSlugs: ["best-time-to-sell-a-house-southeast-michigan", "selling-a-house-during-divorce-michigan", "selling-a-parents-home-michigan"],
    relatedCitySlugs: [],
    content: [
      {
        type: "paragraph",
        text: "Most sellers focus on what their home will sell for. Fewer have a clear picture of what they'll actually walk away with. The gap between sale price and net proceeds is larger than most people expect — and understanding it in advance puts you in a much stronger position when it's time to make decisions.",
      },
      {
        type: "paragraph",
        text: "Here's a realistic breakdown of what it costs to sell a home in Southeast Michigan, with a worked example on a $400,000 sale.",
      },
      {
        type: "h2",
        text: "Agent Commission",
      },
      {
        type: "paragraph",
        text: "Commission is typically the largest line item. Under rules that took effect in 2024, the buyer's agent compensation is now negotiated separately from the listing commission — it's no longer automatically bundled. In practice, here's how it plays out: listing agents in Southeast Michigan generally charge 2.5–3% of the sale price. Sellers may also choose to offer a buyer agent concession — typically 2–2.5% — as a strategic tool to attract financed buyers. If you offer nothing toward the buyer's agent, some buyers will factor that into their offer or pass entirely.",
      },
      {
        type: "callout",
        label: "The practical reality",
        text: "On a $400,000 sale, a 3% listing fee plus a 2.5% buyer agent concession = $22,000. That's the commission side of the ledger. Some sellers in strong markets offer less on the buyer side; some offer more. It depends on demand and strategy.",
      },
      {
        type: "h2",
        text: "Michigan Transfer Taxes",
      },
      {
        type: "paragraph",
        text: "Michigan has both a state and county real estate transfer tax, and both are paid by the seller. The state transfer tax is $3.75 per $500 of sale price. The county transfer tax is $1.10 per $1,000 in most Lower Peninsula counties. Together they run approximately 0.86% of the sale price.",
      },
      {
        type: "stat-row",
        stats: [
          { label: "State Transfer Tax", value: "$3,000", note: "on a $400K sale" },
          { label: "County Transfer Tax", value: "$440",   note: "on a $400K sale" },
          { label: "Total Transfer Tax",  value: "$3,440", note: "~0.86% of sale price" },
        ],
      },
      {
        type: "paragraph",
        text: "Note: Michigan principal residence exemption (PRE) holders may qualify for an exemption from the state transfer tax if the property is their primary residence. Ask your title company to verify eligibility early — this can save a meaningful amount.",
      },
      {
        type: "h2",
        text: "Title Insurance and Closing Fees",
      },
      {
        type: "paragraph",
        text: "In Michigan, it's customary for the seller to pay for the owner's title insurance policy. This protects the buyer against any future title claims and is required by most lenders. On a $400,000 sale, the owner's title policy typically runs $800–$1,200 depending on the title company. Add a closing/settlement fee of $300–$500, and title-related costs total roughly $1,100–$1,700.",
      },
      {
        type: "h2",
        text: "Repairs, Staging, and Pre-Market Prep",
      },
      {
        type: "paragraph",
        text: "This line item is entirely within your control — and it's where sellers make their biggest mistakes in both directions. Some over-invest in renovations that won't be recovered in the sale price. Others under-invest and leave money on the table.",
      },
      {
        type: "two-col",
        left: {
          label: "Worth doing",
          text: "Fixing anything a buyer's inspector will flag. Fresh paint in neutral tones. Deep cleaning and decluttering. Professional photography. Minor landscaping.",
        },
        right: {
          label: "Rarely worth it",
          text: "Full kitchen or bathroom renovations in hopes of a higher sale price. New flooring throughout. Roof replacement unless it's in genuinely poor condition.",
        },
      },
      {
        type: "paragraph",
        text: "A realistic pre-market budget for a well-maintained home in Southeast Michigan is $1,500–$5,000. Homes that need significant catch-up work can run $10,000–$20,000+, but those investments should be evaluated carefully against the expected return.",
      },
      {
        type: "h2",
        text: "Seller Concessions",
      },
      {
        type: "paragraph",
        text: "In today's market, buyers frequently ask sellers to contribute toward closing costs — typically 1–3% of the purchase price. In a competitive multiple-offer situation, concessions may be zero. In a slower market or on a home that's been sitting, concessions are often part of the negotiation. Plan for the possibility even if you don't end up paying them.",
      },
      {
        type: "h2",
        text: "The Full Picture: A $400,000 Sale",
      },
      {
        type: "stat-row",
        stats: [
          { label: "Listing commission (3%)",      value: "$12,000", note: "" },
          { label: "Buyer agent concession (2.5%)", value: "$10,000", note: "if offered" },
          { label: "Transfer taxes",                value: "$3,440",  note: "state + county" },
          { label: "Title and closing fees",        value: "$1,400",  note: "estimate" },
          { label: "Pre-market prep",               value: "$3,000",  note: "estimate" },
        ],
      },
      {
        type: "paragraph",
        text: "Total estimated selling costs: approximately $29,840 — or roughly 7.5% of the sale price before any seller concessions. That leaves a seller with a $400,000 sale walking away with approximately $370,000 before paying off their mortgage.",
      },
      {
        type: "h2",
        text: "How to Protect Your Net",
      },
      {
        type: "bullets",
        items: [
          "Get a net sheet before you list. Any agent should be able to produce one with your specific numbers.",
          "Understand the transfer tax exemption if this is your primary residence.",
          "Be surgical about pre-market repairs — fix what will come up in inspection, not what will make the home look renovated.",
          "Price accurately from the start. Overpriced homes sit, and price reductions cost more than the initial discount would have.",
          "In a competitive offer situation, push back on excessive concession requests before accepting.",
        ],
      },
    ],
  },

  // ─── "Best Time of Year to Sell a House in SE Michigan" ────────────────────
  {
    slug: "best-time-to-sell-a-house-southeast-michigan",
    title: "Best Time of Year to Sell a House in Southeast Michigan",
    image: "/images/insights/best-time-to-sell.jpg",
    imageAlt: "For sale sign in front of a well-maintained suburban home",
    excerpt:
      "Spring gets the most attention, but the real answer is more nuanced — and timing matters less than most sellers think.",
    date: "2026-04-18",
    author: "Sarah",
    category: "Seller Tips",
    readTime: "5 min read",
    relatedSlugs: ["cost-to-sell-a-house-michigan", "spring-2026-southeast-michigan-market-update", "downsizing-southeast-michigan"],
    relatedCitySlugs: [],
    content: [
      {
        type: "paragraph",
        text: "Every seller asks some version of this question. The conventional answer is spring — and the conventional answer isn't wrong. But it's incomplete. Here's how I actually think about timing with clients, and what the data from Southeast Michigan says.",
      },
      {
        type: "h2",
        text: "Spring Is the Peak — With a Catch",
      },
      {
        type: "paragraph",
        text: "March through June is historically the strongest window for home sales in Michigan. More buyers are active, homes show better in natural light, curb appeal is at its best, and families buying before the school year create real deadline pressure. The demand side is simply larger in spring than any other season.",
      },
      {
        type: "paragraph",
        text: "The catch: every other seller knows this too. Spring is peak listing season, which means peak competition. A well-priced, well-prepared home in April will likely see strong activity. A mediocre listing in April may get lost in the noise it wouldn't face in October.",
      },
      {
        type: "callout",
        label: "What the data shows",
        text: "In Oakland and Macomb counties, median sale prices and sale-to-list ratios are consistently highest in April, May, and June. Days on market are shortest. But the advantage disappears quickly for sellers who overprice or under-prepare.",
      },
      {
        type: "h2",
        text: "Summer: Good Demand, Attention Competes With Vacations",
      },
      {
        type: "paragraph",
        text: "July and August still see active buyers — particularly buyers on corporate relocation timelines, which are year-round. The volume is lower than spring, but motivated buyers are real. The problem is seller attention: families are traveling, contractors are busy, and the logistics of a summer showing schedule can be frustrating. If your home is turnkey and priced right, summer works fine. If it needs any prep work, summer timelines get squeezed.",
      },
      {
        type: "h2",
        text: "Fall: The Underrated Window",
      },
      {
        type: "paragraph",
        text: "September and October are consistently undervalued by sellers who assume spring is the only strong season. Here's what fall has going for it: fewer competing listings, serious buyers (people who've been looking since spring and still haven't found something), and homes that show beautifully in fall light with leaf color.",
      },
      {
        type: "paragraph",
        text: "The buyers who are actively searching in October in Southeast Michigan are not casual browsers. They have real motivation. Fall listings that are priced correctly often move faster than sellers expect — without the multiple-offer chaos that spring can produce.",
      },
      {
        type: "h2",
        text: "Winter: The Counterintuitive Case",
      },
      {
        type: "paragraph",
        text: "November through February is the slowest period — but slow doesn't mean dead. Buyer volume is lowest, but so is seller competition. The buyers who are looking in January in Michigan are serious. They are not driving around in the snow looking at houses for fun.",
      },
      {
        type: "paragraph",
        text: "For certain home types — condos, ranch homes, properties that show as well in winter as in summer — the winter window can produce a faster, less complicated sale than spring. The pool of buyers is smaller, but the pool of sellers is smaller too.",
      },
      {
        type: "h2",
        text: "What Matters More Than Season",
      },
      {
        type: "paragraph",
        text: "I've watched sellers obsess over timing and underinvest in the things that actually drive sale price and speed.",
      },
      {
        type: "bullets",
        items: [
          "Pricing accuracy: a correctly priced home sells in any season. An overpriced one doesn't sell in any season.",
          "Preparation: professional photography, decluttering, and addressing deferred maintenance matter more than the calendar.",
          "Days on market: the longer a home sits, the more buyers assume something is wrong. A clean launch beats a perfect-season launch.",
          "Your own timeline: if you're ready in November and your competition is in spring, the spring market might not be worth waiting for.",
        ],
      },
      {
        type: "h2",
        text: "The Real Answer",
      },
      {
        type: "paragraph",
        text: "The best time to list is when your home is genuinely ready and you're prepared to execute — not when the calendar says so. If that happens to be March, great. If it's October, that can work in your favor. What doesn't work is waiting for the \"right\" season while holding off on the preparation that actually moves homes.",
      },
      {
        type: "paragraph",
        text: "If you're thinking about selling in the next six months, the conversation to have now isn't about timing — it's about what the home needs to look its best, what comparable homes have sold for, and what your net proceeds will look like. That conversation is free and takes about 30 minutes.",
      },
    ],
  },

  // ─── "Selling a House During a Divorce in Michigan" ─────────────────────
  {
    slug: "selling-a-house-during-divorce-michigan",
    title: "Selling a House During a Divorce in Michigan",
    image: "/images/insights/selling-during-divorce.jpg",
    imageAlt: "House keys and legal documents on a table",
    excerpt:
      "Timing, authority, equity splits, and keeping the process from derailing — what Michigan sellers navigating a divorce actually need to know.",
    date: "2026-04-05",
    author: "Sarah",
    category: "Seller Tips",
    readTime: "7 min read",
    relatedSlugs: ["cost-to-sell-a-house-michigan", "cash-offer-home-michigan-is-it-right-for-you", "selling-a-parents-home-michigan"],
    relatedCitySlugs: [],
    content: [
      {
        type: "paragraph",
        text: "Selling a home during a divorce is one of the most common situations we handle — and one of the most emotionally and logistically complex. The real estate part is straightforward. The human part is not. Here's what you need to understand before the listing agreement is signed.",
      },
      {
        type: "paragraph",
        text: "Note: this is real estate guidance, not legal advice. Every divorce involves specific facts that affect how property must be handled. Your family law attorney should be your primary advisor on anything involving your divorce proceedings.",
      },
      {
        type: "h2",
        text: "Both Spouses Must Sign — Unless There's a Court Order",
      },
      {
        type: "paragraph",
        text: "In Michigan, when a home is jointly owned — as most marital homes are — both spouses must sign the listing agreement, the purchase agreement, and the closing documents. There is no workaround for this. If one spouse refuses to cooperate, the home cannot be listed or sold without a court order directing the sale.",
      },
      {
        type: "paragraph",
        text: "Michigan courts can and do order the sale of a marital home when spouses cannot agree. If that's your situation, your attorney can file a motion with the court. The process takes time, but it is available. In the meantime, the home sits — which affects everyone's financial position.",
      },
      {
        type: "h2",
        text: "Timing: Before, During, or After the Divorce Is Final",
      },
      {
        type: "paragraph",
        text: "There is no universally right answer on timing — it depends on your financial situation, your attorney's guidance, and your ability to cooperate on the sale process. Here are the options:",
      },
      {
        type: "bullets",
        items: [
          "Sell before the divorce is final: proceeds can be held in escrow or distributed as part of the settlement. Avoids the uncertainty of what happens to the home in the judgment. Requires cooperation from both parties throughout the process.",
          "Sell as part of the divorce settlement: the sale is ordered or agreed upon in the divorce decree. Timing is tied to the legal process, which can be unpredictable. Often the cleanest outcome if both parties agree.",
          "One spouse buys out the other: one spouse refinances into their own name and pays the other their equity share. Requires that spouse to qualify for the mortgage independently. Avoids the sale entirely but requires lender approval.",
          "Sell after the divorce is final: can simplify the transaction since ownership may already be transferred to one party. But the home has been sitting through the divorce process, which can mean deferred maintenance and a stale listing.",
        ],
      },
      {
        type: "h2",
        text: "What Happens When Spouses Disagree on Price",
      },
      {
        type: "paragraph",
        text: "This is the most common friction point. One spouse wants to list at $450,000; the other wants $420,000. The home sits while they argue, accumulating carrying costs and losing the spring market window. Meanwhile, buyers who've been watching the listing assume something is wrong.",
      },
      {
        type: "paragraph",
        text: "A neutral comparative market analysis from an experienced agent — someone neither party has a prior relationship with — is often the cleanest way to resolve this disagreement. The data should drive the pricing decision, not whoever is more emotionally attached to a number.",
      },
      {
        type: "callout",
        label: "From experience",
        text: "The couples who sell quickly and cleanly are the ones who treat this as a business transaction from the first conversation. That doesn't mean it isn't painful — it is. It means they've agreed to make decisions based on data and their attorneys' guidance rather than the emotions of the moment.",
      },
      {
        type: "h2",
        text: "How Sale Proceeds Are Divided",
      },
      {
        type: "paragraph",
        text: "Sale proceeds are marital property in Michigan and are subject to equitable distribution — which means fair, but not necessarily 50/50. The divorce decree will specify how proceeds are divided. In most cases where both spouses contributed to the home, the split is close to equal after the mortgage is paid off, but your attorney will advise on your specific situation.",
      },
      {
        type: "paragraph",
        text: "One important note: if one spouse has been solely responsible for mortgage payments during the separation, that may affect how equity is ultimately divided. Document everything and let your attorney advise.",
      },
      {
        type: "h2",
        text: "Capital Gains Tax Considerations",
      },
      {
        type: "paragraph",
        text: "If you and your spouse have lived in the home as your primary residence for at least two of the last five years, you may qualify for the federal capital gains exclusion — up to $500,000 for married couples filing jointly. If the home is sold after the divorce is final and ownership transfers to one party, that individual's exclusion drops to $250,000. Timing the sale relative to the divorce finalization can have real tax consequences. Talk to a CPA before making this decision.",
      },
      {
        type: "h2",
        text: "Choosing the Right Agent for This Situation",
      },
      {
        type: "paragraph",
        text: "The agent you choose for a divorce sale needs to be able to communicate effectively with both parties without taking sides, stay emotionally neutral when conversations get difficult, and keep the transaction moving forward when either party is tempted to use the sale as leverage in the broader dispute.",
      },
      {
        type: "paragraph",
        text: "We've handled these transactions before. We work with both parties professionally, communicate transparently with each, and focus on getting the home sold at the best possible price — which ultimately serves everyone. If you're in this situation and want a confidential conversation about where to start, call us.",
      },
    ],
  },

  // ─── "New Construction vs. Resale in SE Michigan" ────────────────────────
  {
    slug: "new-construction-vs-resale-michigan",
    title: "New Construction vs. Resale in Southeast Michigan: What Buyers Need to Know",
    image: "/images/insights/new-construction-vs-resale.jpg",
    imageAlt: "Modern new construction home with clean lines and landscaping",
    excerpt:
      "The base price looks attractive until you see what the builder charges for everything else. Here's how to think through the decision honestly.",
    date: "2026-03-28",
    author: "Brad",
    category: "Buyer Tips",
    readTime: "7 min read",
    relatedSlugs: ["how-to-win-a-bidding-war-metro-detroit", "rochester-hills-vs-troy-michigan", "what-a-home-inspection-covers-michigan"],
    relatedCitySlugs: ["troy-mi", "rochester-hills-mi", "northville-mi", "shelby-township-mi"],
    content: [
      {
        type: "paragraph",
        text: "The new construction vs. resale question comes up constantly with buyers in Southeast Michigan — and the answer is rarely obvious. Both have real advantages. Both have real traps. Here's how I walk clients through the decision.",
      },
      {
        type: "h2",
        text: "The Upgrade Trap: What the Base Price Actually Means",
      },
      {
        type: "paragraph",
        text: "This is the single most important thing to understand about new construction: the price on the sign is not the price you'll pay. Builder base prices reflect a stripped-down configuration that often doesn't match what you saw in the model home. The model home was built to sell — loaded with structural options, design center upgrades, and lot premiums that don't appear in the advertised starting price.",
      },
      {
        type: "paragraph",
        text: "In my experience, the gap between base price and what buyers actually spend runs 15–35% in Southeast Michigan. That means a community advertising homes from $380,000 may produce a realistic purchase price of $450,000–$515,000 once you add the options you actually want.",
      },
      {
        type: "callout",
        label: "Before you visit a model home",
        text: "Register with your buyer's agent before your first visit to the sales office. The moment you enter unrepresented, you may lose your right to have your own agent. The builder's on-site rep works for the builder — not for you.",
      },
      {
        type: "h2",
        text: "Timeline: What You're Committing To",
      },
      {
        type: "paragraph",
        text: "Production new construction in Southeast Michigan typically takes 6–12 months from contract signing to closing, depending on the builder and construction stage at the time you sign. Semi-custom and custom builds take longer. Builder contracts give the builder significant flexibility on delivery dates — read carefully what your remedies are if the timeline extends.",
      },
      {
        type: "paragraph",
        text: "Resale closes on a timeline you control — typically 30–45 days from accepted offer. If you have a lease ending, a job starting, or a home to sell, that flexibility matters.",
      },
      {
        type: "h2",
        text: "The Warranty Advantage in New Construction",
      },
      {
        type: "paragraph",
        text: "Michigan requires builders to provide statutory warranty coverage: one year on workmanship and materials, two years on mechanical systems (plumbing, electrical, HVAC), and 10 years on structural defects. That warranty is a genuine advantage over resale, where you're buying the home as-is relative to its history.",
      },
      {
        type: "paragraph",
        text: "The caveat: new construction is not immune to defects. I strongly recommend independent inspections at framing, rough-in, and final walkthrough — before the walls are closed and before the closing date. The warranty protects you after close; inspections protect you from inheriting defects that are much harder to fix once the home is finished.",
      },
      {
        type: "h2",
        text: "Negotiation: Very Different Games",
      },
      {
        type: "paragraph",
        text: "With resale, everything is negotiable — price, closing date, repairs, appliances. With a builder, price negotiation is limited. Builders in Southeast Michigan rarely move on base price, especially in active communities. Where there is room to negotiate: lot premiums, design center allowances, included upgrades, and closing cost contributions — particularly if the builder is closing out a community or has standing inventory.",
      },
      {
        type: "paragraph",
        text: "An experienced buyer's agent knows which builders have historically had flexibility and where. Without that context, you're negotiating blind.",
      },
      {
        type: "h2",
        text: "Established Neighborhood vs. New Development",
      },
      {
        type: "paragraph",
        text: "New construction communities are often in developing areas where the surrounding infrastructure is still catching up — retail, restaurants, and road capacity may take years to mature. Resale homes in established neighborhoods in Birmingham, Troy, Rochester Hills, or Northville come with the amenities already in place.",
      },
      {
        type: "two-col",
        left: {
          label: "New construction tends to win when...",
          text: "You want specific floor plan customization. You're comfortable with a 6–12 month timeline. You want a builder warranty on all systems. You're buying in a community where new construction represents a strong value relative to nearby resale.",
        },
        right: {
          label: "Resale tends to win when...",
          text: "You need to close in 45 days. You want an established neighborhood with mature trees and walkable character. You're buying in a community where resale is significantly better value than new. You want negotiating leverage on price and terms.",
        },
      },
      {
        type: "h2",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "Neither option is universally better. The right answer depends on your timeline, your priorities, and the specific community and price point you're targeting. What matters most is that you understand what you're buying in both cases — not the version the builder's sales agent or a listing MLS photo projects.",
      },
      {
        type: "paragraph",
        text: "If you're weighing a specific new construction community against resale options in the same area, I can pull the numbers and walk through a comparison. That conversation takes 20 minutes and will tell you more than a dozen model home tours.",
      },
    ],
  },

  // ─── "How to Win a Bidding War in Metro Detroit" ─────────────────────────
  {
    slug: "how-to-win-a-bidding-war-metro-detroit",
    title: "How to Win a Bidding War in Metro Detroit",
    image: "/images/insights/how-to-win-bidding-war.jpg",
    imageAlt: "Couple reviewing an offer with their real estate agent",
    excerpt:
      "Escalation clauses and waiving inspections aren't the whole story. Here's how Brad actually advises buyers to compete — and win — in Southeast Michigan.",
    date: "2026-05-01",
    author: "Brad",
    category: "Buyer Tips",
    readTime: "6 min read",
    relatedSlugs: ["new-construction-vs-resale-michigan", "what-a-home-inspection-covers-michigan", "spring-2026-southeast-michigan-market-update"],
    relatedCitySlugs: ["troy-mi", "rochester-hills-mi", "birmingham-mi"],
    content: [
      {
        type: "paragraph",
        text: "Multiple offers are a reality in Southeast Michigan — especially in the under-$450K range in Oakland and Macomb counties. I've helped buyers compete in some brutal situations and walked away from others. Here's how I actually approach it.",
      },
      {
        type: "h2",
        text: "Start Before You Find the House",
      },
      {
        type: "paragraph",
        text: "The biggest mistake buyers make in competitive markets is treating pre-approval as a formality. By the time you find the home you want, it's too late to upgrade your financial position. Here's what I push clients to do before they start seriously looking:",
      },
      {
        type: "bullets",
        items: [
          "Get fully underwritten, not just pre-approved. A fully underwritten pre-approval means the lender has verified your income, assets, and credit — and your file is conditionally approved pending the property appraisal. Sellers and listing agents recognize the difference.",
          "Know your ceiling before you tour. In a multiple-offer situation, you may have 24 hours to submit. That's not when you want to have a conversation with your lender about how high you can go.",
          "Have your earnest money liquid. In competitive offers, $5,000–$10,000 in earnest money is a baseline. Thinly liquid buyers who need time to pull funds together lose to buyers who don't.",
        ],
      },
      {
        type: "h2",
        text: "Escalation Clauses: Useful, Not Magic",
      },
      {
        type: "paragraph",
        text: "An escalation clause says: 'I'll pay $X, but if another offer comes in higher, I'll beat it by $Y up to a maximum of $Z.' Used correctly, they can get you the home without overpaying by a fixed amount. But there are things to know:",
      },
      {
        type: "bullets",
        items: [
          "The escalation cap is the number that matters. Set it at your true maximum — not a comfortable number. You can always walk away from a deal; you can't walk back into one after it's sold to someone else.",
          "Not all sellers or listing agents like them. Some sellers find them confusing or manipulative and prefer a clean highest-and-best. Your agent should know the listing agent's preferences before you escalate.",
          "Escalation clauses don't cover terms. If two offers escalate to the same price, the seller decides based on other terms — inspection contingency, closing date, financing type. Don't let the escalation make you lazy on the rest of the offer.",
        ],
      },
      {
        type: "h2",
        text: "The Inspection Question",
      },
      {
        type: "paragraph",
        text: "Waiving the inspection entirely is a risk I rarely recommend. A home with a foundation issue, a failing HVAC system, or hidden water damage can cost $20,000–$60,000+ to address. That's a lot of money to save a few days of negotiation.",
      },
      {
        type: "paragraph",
        text: "What I do recommend, when the market is competitive: offer to do an inspection for informational purposes only, or offer to accept the home with repairs only above a specific dollar threshold (say, $5,000). This tells the seller you're not going to use the inspection as a renegotiation tool for minor items — while preserving your right to walk away from something genuinely serious.",
      },
      {
        type: "h2",
        text: "What Sellers Actually Want",
      },
      {
        type: "paragraph",
        text: "Price matters. But it's not always the only thing that matters. Here's what moves sellers in Southeast Michigan:",
      },
      {
        type: "bullets",
        items: [
          "Closing date flexibility. If the sellers need 60 days before they have to be out, a buyer who gives them that is worth real money.",
          "Rent-back options. Sellers who haven't found their next home sometimes need to stay after closing. Offering a short rent-back period can break a tie.",
          "Fewer contingencies. A financing contingency is usually necessary. A home sale contingency — 'I'll buy your house after mine sells' — is a deal-killer in a competitive situation.",
          "Certainty of close. Cash offers win in part because they remove financing risk. If you're not paying cash, a strong underwriting approval closes the gap.",
        ],
      },
      {
        type: "callout",
        label: "On offer letters",
        text: "Many buyers want to write a personal letter to the seller. I advise against this. Seller letters introduce fair housing risk when they mention personal characteristics — and in Michigan, sellers and their agents are advised to avoid accepting decisions influenced by personal information unrelated to the transaction. A clean, strong offer tells the seller everything they need to know.",
      },
      {
        type: "h2",
        text: "The Real Advantage: Speed and Preparation",
      },
      {
        type: "paragraph",
        text: "The buyers who consistently win in competitive markets aren't the ones who overbid. They're the ones who are ready. Pre-approved with a real number. Comfortable with their maximum before they walk in the door. Working with an agent who can reach the listing agent, understand the seller's timeline, and put together a clean offer the same day.",
      },
      {
        type: "paragraph",
        text: "If you're serious about buying in Southeast Michigan this year, the conversation to have now is about preparation — not waiting until you find the right house to figure out how to compete for it.",
      },
    ],
  },

  // ─── "What to Know When Selling a Parent's Home in Michigan" ─────────────
  {
    slug: "selling-a-parents-home-michigan",
    title: "What to Know When Selling a Parent's Home in Michigan",
    image: "/images/insights/selling-parents-home.jpg",
    imageAlt: "Classic family home with mature landscaping",
    excerpt:
      "Whether your parent is downsizing, moving to memory care, or has passed away — selling their home involves legal authority, tax questions, and emotional weight that a standard sale doesn't.",
    date: "2026-04-22",
    author: "Sarah",
    category: "Seller Tips",
    readTime: "7 min read",
    relatedSlugs: ["selling-a-house-during-divorce-michigan", "cost-to-sell-a-house-michigan", "cash-offer-home-michigan-is-it-right-for-you"],
    relatedCitySlugs: [],
    content: [
      {
        type: "paragraph",
        text: "This is one of the most common calls we get — and one of the most varied. Selling a parent's home looks very different depending on whether your parent is still living, has recently passed, or is moving into care. The common threads are legal authority, family coordination, and a property that may need work before it goes on the market.",
      },
      {
        type: "paragraph",
        text: "This is real estate guidance, not legal or tax advice. The specifics of your situation should be reviewed with a Michigan attorney and CPA.",
      },
      {
        type: "h2",
        text: "Scenario 1: Your Parent Is Living but No Longer Managing the Sale Themselves",
      },
      {
        type: "paragraph",
        text: "If your parent is in memory care, has cognitive decline, or simply can't manage the sale process, someone needs to have legal authority to act on their behalf. That typically means a durable power of attorney (POA) naming you or another family member as agent. Without a valid POA, children have no legal authority to list or sell a parent's home — even with the best intentions.",
      },
      {
        type: "paragraph",
        text: "If a POA is not in place and your parent lacks capacity to sign one, guardianship or conservatorship through the Michigan probate court may be required. This takes time. If you're in this situation, talk to a Michigan elder law attorney immediately.",
      },
      {
        type: "h2",
        text: "Scenario 2: Your Parent Has Recently Passed",
      },
      {
        type: "paragraph",
        text: "When a parent passes away, the path to selling their home depends on how the property was held. If the home was in a living trust, the successor trustee can typically proceed with the sale without court involvement. If the home was held outright in the parent's name, the estate must go through Michigan's probate process — which requires Letters of Authority from the probate court before a purchase agreement can be signed.",
      },
      {
        type: "paragraph",
        text: "The probate process in Michigan takes a minimum of five months from the date of death, though the practical timeline is often longer. Planning around this timeline — and making sure the home is maintained and secured during probate — is something we help families navigate.",
      },
      {
        type: "h2",
        text: "The Step-Up in Basis: A Tax Benefit Most Families Don't Know About",
      },
      {
        type: "paragraph",
        text: "When a parent passes and leaves real property to heirs, the heirs receive what's called a stepped-up cost basis — the property's fair market value at the date of death becomes the new basis, not the original purchase price.",
      },
      {
        type: "callout",
        label: "Why this matters",
        text: "If your parents bought their home for $90,000 in 1985, and it's worth $420,000 today when your parent passes, your basis as the heir is $420,000 — not $90,000. If you sell for $420,000, there's no capital gains tax owed. This is a significant benefit that many families don't realize until their CPA tells them. Timing the sale relative to the date of death matters.",
      },
      {
        type: "paragraph",
        text: "This does not apply if you inherit through a living trust or as a joint tenant — the rules differ. Consult a CPA before you sell, not after.",
      },
      {
        type: "h2",
        text: "What the Property Looks Like",
      },
      {
        type: "paragraph",
        text: "Parent homes have usually been lived in for decades. That means deferred maintenance, dated finishes, and systems (furnace, water heater, roof, windows) that may be at or past their useful life. The question isn't whether to address these things — it's which ones move the needle on sale price and which ones don't.",
      },
      {
        type: "two-col",
        left: {
          label: "Typically worth addressing",
          text: "Systems that will fail inspection (furnace, roof, electrical panel). Anything that creates a safety concern. Deep cleaning and clearing the home. Fresh paint in dated colors.",
        },
        right: {
          label: "Often not worth it",
          text: "Full kitchen or bath renovations. New flooring throughout. Landscaping overhauls. Cosmetic updates that won't change what the home sells for in its market segment.",
        },
      },
      {
        type: "h2",
        text: "Managing Multiple Family Members",
      },
      {
        type: "paragraph",
        text: "If there are multiple adult children involved, expect some disagreement. About price. About what to fix. About timing. About what the home is worth emotionally versus financially. These conversations are hard, and they happen in the middle of grief.",
      },
      {
        type: "paragraph",
        text: "We stay neutral. We provide data. We communicate with the person who has legal authority to act — and we keep the process moving without fanning family conflict. This is something we've done before, and we know how to handle it.",
      },
      {
        type: "h2",
        text: "Where to Start",
      },
      {
        type: "paragraph",
        text: "The first step is almost always the same: figure out who has legal authority to sell. Once that's clear, the rest of the process is straightforward. Call us for a confidential conversation — we can walk through your specific situation and tell you exactly what the path forward looks like.",
      },
    ],
  },

  // ─── "Moving to SE Michigan from Chicago" ───────────────────────────────
  {
    slug: "moving-to-southeast-michigan-from-chicago",
    title: "Moving to Southeast Michigan from Chicago: What to Expect",
    image: "/images/insights/moving-from-chicago.jpg",
    imageAlt: "Tree-lined residential street in a Michigan suburb",
    excerpt:
      "Chicago buyers are consistently surprised by what their budget buys here — and by a few things they didn't expect. Here's an honest guide.",
    date: "2026-04-12",
    author: "Sarah",
    category: "Buyer Tips",
    readTime: "6 min read",
    relatedSlugs: ["why-birmingham-keeps-appreciating", "rochester-hills-vs-troy-michigan", "new-construction-vs-resale-michigan"],
    relatedCitySlugs: ["birmingham-mi", "bloomfield-hills-mi", "rochester-hills-mi", "clarkston-mi", "northville-mi"],
    content: [
      {
        type: "paragraph",
        text: "We work with relocators from across the country, and Chicago buyers come up consistently. There's a reason: Metro Detroit's suburbs offer a lifestyle and a price point that's genuinely hard to find in the Chicago suburbs at comparable proximity to a major city. But there are also things that surprise Chicago buyers — in both directions. Here's what I tell them.",
      },
      {
        type: "h2",
        text: "What Your Budget Buys",
      },
      {
        type: "paragraph",
        text: "This is usually where the conversation starts. The same $600,000 that gets you a 1,600 sq ft townhouse in Naperville or a modest single-family in Western Springs buys a substantially different home in Southeast Michigan. In Rochester Hills, Clarkston, or Shelby Township at that price, you're looking at 3,000+ sq ft, a larger lot, newer construction, and likely a 3-car garage.",
      },
      {
        type: "paragraph",
        text: "In Birmingham — the closest thing Southeast Michigan has to a walkable, dining-and-retail-centric suburb like Hinsdale or Western Springs — $600K still buys a detached single-family on a real lot. That's not a comparison that holds in most major metro areas.",
      },
      {
        type: "h2",
        text: "Property Taxes: A Meaningful Difference",
      },
      {
        type: "paragraph",
        text: "Illinois property taxes are among the highest in the country. Effective rates in the Chicago suburbs typically run 2–3% of assessed value annually. Michigan's effective property tax rates are generally lower — typically 1.2–1.8% depending on the municipality. On a $500,000 home, that difference can be $5,000–$9,000 per year.",
      },
      {
        type: "stat-row",
        stats: [
          { label: "Illinois (typical suburb)", value: "2–3%",     note: "effective property tax rate" },
          { label: "Michigan (Oakland County)", value: "1.2–1.8%", note: "effective property tax rate" },
          { label: "Annual difference ($500K)", value: "$4K–$9K",  note: "estimated savings" },
        ],
      },
      {
        type: "paragraph",
        text: "Michigan also has a principal residence exemption (PRE) that reduces the taxable value of your primary residence. This takes effect in the tax year following your purchase — make sure your title company files the paperwork at closing.",
      },
      {
        type: "h2",
        text: "Neighborhoods Chicago Buyers Tend to Love",
      },
      {
        type: "paragraph",
        text: "Different Chicago buyers land in very different places in Southeast Michigan. Here's how I usually frame it:",
      },
      {
        type: "bullets",
        items: [
          "If you're coming from the North Shore (Winnetka, Kenilworth, Wilmette): look at Birmingham and Bloomfield Hills. The architecture, the scale of homes, and the premium real estate culture are comparable.",
          "If you're coming from the western suburbs (Naperville, Wheaton, Glen Ellyn): Rochester Hills, Clarkston, and Northville tend to feel most familiar — strong community identity, good infrastructure, varied housing.",
          "If you want acreage and privacy and don't mind being further out: Washington Township, Independence Township near Clarkston, and the northern Oakland County corridor.",
          "If walkability matters and you want the densest, most urban suburb: Birmingham is the answer.",
        ],
      },
      {
        type: "h2",
        text: "Things That Surprise Chicago Buyers",
      },
      {
        type: "paragraph",
        text: "Three things come up consistently after buyers move:",
      },
      {
        type: "bullets",
        items: [
          "Traffic is manageable. Southeast Michigan doesn't have anything close to Chicago-level congestion. Drive times feel dramatically shorter even though the geography is similar.",
          "The lake is everywhere. Lake St. Clair and the inland lake system in Oakland and Livingston counties mean water access is far more available than Chicago buyers expect at non-waterfront prices.",
          "Winters are similar, not worse. The Great Lakes climate in Southeast Michigan is cold and snowy — like Chicago, sometimes more. This doesn't surprise most Chicago buyers, but the occasional buyer from the South gets a reminder.",
        ],
      },
      {
        type: "h2",
        text: "How the Remote Buying Process Works",
      },
      {
        type: "paragraph",
        text: "Most Chicago buyers we work with start the process without visiting. We do a video call to understand your priorities, identify 3–4 specific neighborhoods worth your time, and give you an honest read on the market before you book a trip. When you're ready, we plan a focused 2-day showing trip that lets you see enough to make a real decision.",
      },
      {
        type: "paragraph",
        text: "Michigan allows remote closings, so you can technically complete the purchase without being here for every step — though we recommend being present for the final walkthrough. The entire process, from first conversation to keys, typically takes 60–120 days depending on your timeline and the market.",
      },
      {
        type: "paragraph",
        text: "If you're thinking about Southeast Michigan as a destination, the 15-minute call is the right first step. We can give you a specific picture of what your budget buys in each area and what the moving timeline looks like.",
      },
    ],
  },

  // ─── "Rochester Hills vs. Troy" ─────────────────────────────────────────
  {
    slug: "rochester-hills-vs-troy-michigan",
    title: "Rochester Hills vs. Troy: Choosing the Right Oakland County Suburb",
    image: "/images/insights/rochester-hills-vs-troy.jpg",
    imageAlt: "Split view of two different suburban neighborhoods",
    excerpt:
      "Two of Oakland County's top markets — different character, different commute patterns, different price floors. Here's how to decide.",
    date: "2026-03-22",
    author: "Brad",
    category: "Neighborhood",
    readTime: "6 min read",
    relatedSlugs: ["spring-2026-southeast-michigan-market-update", "new-construction-vs-resale-michigan", "why-birmingham-keeps-appreciating"],
    relatedCitySlugs: ["rochester-hills-mi", "troy-mi", "shelby-township-mi"],
    content: [
      {
        type: "paragraph",
        text: "Rochester Hills and Troy are the two most active markets in Oakland County for buyers in the $350K–$700K range. I show homes in both constantly, and the question of which to choose comes down to a handful of things: lifestyle, commute, what kind of neighborhood feel you want, and budget.",
      },
      {
        type: "h2",
        text: "The Character Difference",
      },
      {
        type: "paragraph",
        text: "Rochester Hills is anchored by the village of Rochester — a walkable downtown with independently owned restaurants, a farmers market, coffee shops, and Paint Creek Trail running through it. The community has a small-town identity even though it's a city of 80,000. Buyers who want a place with a neighborhood feel, trail access, and a functional town center tend to land here.",
      },
      {
        type: "paragraph",
        text: "Troy reads differently. It's a corporate hub — home to significant employer bases along the I-75 and Big Beaver corridors, the Somerset Collection, and some of the best road infrastructure in Oakland County. The residential neighborhoods are strong, but Troy doesn't have a downtown the way Rochester does. The payoff is proximity to employment, easy freeway access, and a housing market with strong resale history.",
      },
      {
        type: "h2",
        text: "Price Points",
      },
      {
        type: "stat-row",
        stats: [
          { label: "Rochester Hills median",  value: "~$410K", note: "single-family, 2026" },
          { label: "Troy median",             value: "~$380K", note: "single-family, 2026" },
          { label: "Both markets DOM",        value: "14–18",  note: "days on market, 2026" },
        ],
      },
      {
        type: "paragraph",
        text: "Rochester Hills typically carries a slight price premium over comparable homes in Troy — reflecting the trail access, the village downtown, and the demand for that community feel. The gap narrows in the upper price ranges. Both markets move quickly; well-priced homes in either city rarely sit more than a couple of weeks.",
      },
      {
        type: "h2",
        text: "School Districts",
      },
      {
        type: "paragraph",
        text: "Most of Rochester Hills falls within Rochester Community Schools — one of the largest districts in Oakland County, serving Rochester Hills, the City of Rochester, and parts of Oakland Township. Troy is served by Troy School District.",
      },
      {
        type: "paragraph",
        text: "Note: small portions of Rochester Hills fall within the Avondale or Lake Orion school districts depending on the specific address. If school district boundaries matter to your search, verify the specific parcel — don't assume based on city alone. We always confirm this for buyers before they make an offer.",
      },
      {
        type: "h2",
        text: "Commute and Access",
      },
      {
        type: "paragraph",
        text: "Troy wins on commute access, full stop. The intersection of I-75, M-59, and Crooks/Big Beaver puts a huge portion of Oakland County and northern Wayne County within 25 minutes. For buyers who need to get to downtown Detroit, the airport, or major employment centers, Troy's location is hard to beat.",
      },
      {
        type: "paragraph",
        text: "Rochester Hills accesses M-59 and M-24 easily and connects north to Clarkston, south to Troy, and east to Macomb County. Commute times to downtown Detroit are longer than Troy — typically 35–50 minutes depending on route and time of day. For buyers whose employers are in the northern Oakland County corridor or Macomb, Rochester Hills can actually be more convenient.",
      },
      {
        type: "h2",
        text: "New Construction",
      },
      {
        type: "paragraph",
        text: "Rochester Hills has limited new construction — it's a largely built-out community, so new inventory is mostly infill or teardown-rebuild. Troy is similar. Buyers specifically seeking new construction communities are usually better served looking at Shelby Township, Macomb Township, Washington Township, or Northville/Plymouth.",
      },
      {
        type: "h2",
        text: "Who Each Is Right For",
      },
      {
        type: "two-col",
        left: {
          label: "Rochester Hills tends to fit buyers who...",
          text: "Want trail access and an active outdoor lifestyle. Value a walkable town center for daily errands and dining. Are comfortable with slightly longer freeway commutes. Want the community-feel of a smaller town in a larger city.",
        },
        right: {
          label: "Troy tends to fit buyers who...",
          text: "Commute to major employment centers and value access above all. Want proximity to Somerset Collection and the Big Beaver corridor. Are buying primarily on resale value and market fundamentals. Are comfortable in a more car-dependent, suburban layout.",
        },
      },
      {
        type: "paragraph",
        text: "For most buyers, the right answer comes out of a single conversation about what matters most. If you've narrowed it to these two and want to see both in a single day, I can set that up — usually 3–4 homes in each market gives you a clear sense of the difference.",
      },
    ],
  },

  // ─── "Is a Cash Offer Right for Your Situation?" ────────────────────────
  {
    slug: "cash-offer-home-michigan-is-it-right-for-you",
    title: "Is a Cash Offer Right for Your Situation? What Michigan Sellers Should Know",
    image: "/images/insights/cash-offer-right-for-you.jpg",
    imageAlt: "Person reviewing a cash offer letter at a kitchen table",
    excerpt:
      "Cash offers are faster and simpler — but you'll typically net less. Here's when the trade-off makes sense, and when it doesn't.",
    date: "2026-03-14",
    author: "Sarah",
    category: "Seller Tips",
    readTime: "5 min read",
    relatedSlugs: ["cost-to-sell-a-house-michigan", "selling-a-parents-home-michigan", "brrrr-strategy-southeast-michigan"],
    relatedCitySlugs: [],
    content: [
      {
        type: "paragraph",
        text: "The pitch for cash offers is simple: skip the showings, skip the uncertainty, close in two weeks. That pitch works for some sellers. For others, it means leaving $30,000 to $60,000 on the table. The question isn't whether cash offers are good or bad — it's whether the trade-off makes sense for your specific situation.",
      },
      {
        type: "h2",
        text: "What You Give Up for Speed",
      },
      {
        type: "paragraph",
        text: "Cash buyers — whether institutional buyers, local investors, or iBuyers — price in margin. They're not paying full market value. They're paying a price that allows for repairs, carrying costs, and profit. In Southeast Michigan, cash offer programs typically come in 10–20% below what the property would fetch on the open market with professional marketing and proper preparation.",
      },
      {
        type: "paragraph",
        text: "On a home worth $380,000, that discount is $38,000–$76,000. Whether that's worth it depends entirely on your situation.",
      },
      {
        type: "h2",
        text: "When a Cash Offer Makes Genuine Sense",
      },
      {
        type: "bullets",
        items: [
          "The property needs significant work you don't want to manage. A home that needs a new roof, foundation work, major updates, or a complete renovation is difficult to sell at full market value without investing first. If you don't have the capital or appetite for that work, a cash sale avoids it entirely.",
          "You need to close fast and the timeline is non-negotiable. Job relocation in three weeks, a care facility deposit that's due, an estate that needs to settle quickly — these are real situations where the certainty of a cash close has genuine value.",
          "The home has a title or legal issue that makes financing difficult. Certain properties — those with unpermitted additions, estate complications, or title defects — are hard to finance. Cash buyers take on that complexity.",
          "You're a tired landlord and want out with minimal friction. Managing a vacant or tenant-occupied property while going through a traditional sale is stressful. A cash sale ends the obligation.",
        ],
      },
      {
        type: "h2",
        text: "When a Traditional Sale Is Almost Always Better",
      },
      {
        type: "paragraph",
        text: "If your home is in reasonable condition, you have 30–60 days of flexibility, and you're not in financial distress — a traditional listing with professional marketing will almost always net you more money. The difference isn't marginal. In a market like Southeast Michigan, where buyer demand is real and properly priced homes move quickly, the premium for going to market is significant.",
      },
      {
        type: "callout",
        label: "The comparison we offer",
        text: "We run a cash offer program. When sellers call us asking about cash offers, we give them both numbers: what a cash offer looks like and what a traditional listing would likely produce. Some sellers choose the cash offer. Most choose to list. But having the comparison in front of you is how you make the right decision for your situation.",
      },
      {
        type: "h2",
        text: "The 'List First, Cash as Backup' Strategy",
      },
      {
        type: "paragraph",
        text: "One approach that works well for sellers who are uncertain: list the home on the market for 2–3 weeks with a firm cash offer in hand as a fallback. If the market responds — and in Southeast Michigan, properly priced homes usually do — you capture the premium. If it doesn't, you have the certainty of the cash sale to fall back on.",
      },
      {
        type: "paragraph",
        text: "This requires working with an agent who can offer both options. We can. If you're trying to figure out which path makes sense for your home, the conversation takes about 20 minutes.",
      },
    ],
  },

  // ─── "BRRRR Strategy in Southeast Michigan" ─────────────────────────────
  {
    slug: "brrrr-strategy-southeast-michigan",
    title: "BRRRR Strategy in Oakland and Macomb Counties: What Investors Need to Know",
    image: "/images/insights/brrrr-strategy.jpg",
    imageAlt: "Investment property being renovated with tools and materials",
    excerpt:
      "Buy distressed, rehab, rent, refinance, repeat. Here's how the strategy actually works in Southeast Michigan — and where it breaks down.",
    date: "2026-03-05",
    author: "Brad",
    category: "Buyer Tips",
    readTime: "7 min read",
    relatedSlugs: ["cash-offer-home-michigan-is-it-right-for-you", "how-to-win-a-bidding-war-metro-detroit", "spring-2026-southeast-michigan-market-update"],
    relatedCitySlugs: ["sterling-heights-mi", "warren-mi", "shelby-township-mi", "rochester-hills-mi", "troy-mi"],
    content: [
      {
        type: "paragraph",
        text: "The BRRRR strategy — Buy, Rehab, Rent, Refinance, Repeat — is one of the most discussed approaches in real estate investing. The theory is clean: buy a distressed property below market, force appreciation through rehab, rent it out, then pull your capital back out through a cash-out refinance based on the new after-repair value. Use that capital for the next deal.",
      },
      {
        type: "paragraph",
        text: "The theory is sound. The execution requires discipline at every step. Here's how it plays out in Southeast Michigan, and where investors get into trouble.",
      },
      {
        type: "h2",
        text: "Finding the Right Property",
      },
      {
        type: "paragraph",
        text: "The BRRRR only works if you buy right. In Oakland and Macomb counties, the inventory of genuinely distressed, off-market properties is limited — and the competition for it is real. There are local wholesalers, out-of-state investors, and iBuyer-adjacent platforms all fishing in the same pond.",
      },
      {
        type: "paragraph",
        text: "The best access points I've found: our cash offer program (which generates motivated seller leads before they hit MLS), the probate and estate pipeline (older homes in disrepair that families need to move quickly), and well-networked agents who know about properties before they list. The MLS is late to this conversation.",
      },
      {
        type: "h2",
        text: "The Rehab: Where Most BRRRR Deals Die",
      },
      {
        type: "paragraph",
        text: "Underestimating the rehab is the most common failure mode. Investors looking at a distressed home in Warren or Sterling Heights see a $130,000 purchase price and a $230,000 ARV and think the numbers work. They don't account for the true scope.",
      },
      {
        type: "bullets",
        items: [
          "Always get contractor bids before you close, not after. The surprise costs come from deferred structural issues, outdated electrical panels, galvanized plumbing, and roofs that looked okay until someone was actually on them.",
          "Budget a 15–20% contingency on every rehab. Something unexpected always comes up.",
          "Know the difference between cosmetic and structural rehab timelines. Cosmetic rehabs (paint, flooring, fixtures, kitchen refresh) can finish in 4–8 weeks. Structural work doubles or triples that.",
          "Carrying costs accumulate during rehab — mortgage, insurance, property taxes, utilities. A 3-month rehab that becomes 6 months eats margin.",
        ],
      },
      {
        type: "h2",
        text: "Rental Rates in Oakland and Macomb Counties",
      },
      {
        type: "paragraph",
        text: "Rental demand in Southeast Michigan is real and consistent. Single-family homes in the $1,400–$2,200/month range have strong tenant pools in Oakland and Macomb counties, particularly in suburban communities with good access to employment.",
      },
      {
        type: "stat-row",
        stats: [
          { label: "Sterling Heights / Warren", value: "$1,400–$1,700", note: "3BR single-family est." },
          { label: "Shelby / Macomb Township",  value: "$1,600–$2,000", note: "3BR single-family est." },
          { label: "Rochester Hills / Troy",    value: "$1,900–$2,400", note: "3BR single-family est." },
        ],
      },
      {
        type: "paragraph",
        text: "These are estimates for 3-bedroom single-family homes in good condition. Actual rents depend heavily on the specific property, condition, and micro-location. Pull active rental comps before you underwrite a deal, not the Zestimate.",
      },
      {
        type: "h2",
        text: "The Refinance: The Critical Math",
      },
      {
        type: "paragraph",
        text: "The refinance step is what separates BRRRR from a standard buy-and-hold. To pull capital out, you need the after-repair appraisal to support the numbers. Lenders typically allow 70–75% loan-to-value on investment property cash-out refinances.",
      },
      {
        type: "paragraph",
        text: "Here's the math on a simplified example: purchase $130K + rehab $40K = $170K all-in. ARV $240K. At 75% LTV, the refi loan is $180K. That covers your all-in cost and pulls $10K back out — not a full capital recycle, but you've deployed less than $10K of permanent capital into a cash-flowing rental. The deal works. If the ARV comes in at $210K instead of $240K, the math breaks down.",
      },
      {
        type: "callout",
        label: "The discipline required",
        text: "BRRRR math is sensitive to the ARV. Deals that look good at a $240K ARV often don't work at $210K. Underwrite conservatively — use comparable sales that are actually comparable, not the best-case examples. And get the property under contract with inspection rights before you commit to a number.",
      },
      {
        type: "h2",
        text: "Is Southeast Michigan a Good BRRRR Market?",
      },
      {
        type: "paragraph",
        text: "Selectively, yes. The entry prices in parts of Macomb County and northern Wayne County are low enough to make the math work in ways that coastal markets can't. Rental demand is steady. The rehab contractor ecosystem in Metro Detroit is mature — there are experienced crews who know what they're doing.",
      },
      {
        type: "paragraph",
        text: "The limiting factor is deal flow. If you're committed to the strategy, you need consistent access to off-market inventory. That's something we can help with. If you want to talk through a specific deal you're looking at, bring the numbers and we'll work through it.",
      },
    ],
  },

  // ─── "Downsizing in Southeast Michigan" ──────────────────────────────────
  {
    slug: "downsizing-southeast-michigan",
    title: "Downsizing in Southeast Michigan: How to Handle the Transition",
    image: "/images/insights/downsizing.jpg",
    imageAlt: "Cozy smaller home with welcoming front porch",
    excerpt:
      "The logistics of downsizing are more complex than most people expect — selling, buying, timing, and letting go of a home you've lived in for decades.",
    date: "2026-02-28",
    author: "Sarah",
    category: "Seller Tips",
    readTime: "6 min read",
    relatedSlugs: ["cost-to-sell-a-house-michigan", "best-time-to-sell-a-house-southeast-michigan", "selling-a-parents-home-michigan"],
    relatedCitySlugs: ["birmingham-mi", "bloomfield-hills-mi", "troy-mi"],
    content: [
      {
        type: "paragraph",
        text: "Downsizing is one of the most common and most emotionally layered moves we help clients make. The practical challenge is coordinating two transactions — selling a larger home and buying a smaller one — in a market where both sides of that equation have their own timing pressures. The emotional challenge is letting go of a home that holds decades of memory.",
      },
      {
        type: "paragraph",
        text: "Here's how I walk clients through it.",
      },
      {
        type: "h2",
        text: "Start with the Numbers, Not the Floor Plan",
      },
      {
        type: "paragraph",
        text: "Before you look at a single condo or ranch home, understand what your current home is worth and what you'll net after the sale. That number determines what you can realistically spend on the next home — and whether the downsize actually frees up the liquidity you're expecting.",
      },
      {
        type: "paragraph",
        text: "Many clients are surprised by how much equity they've accumulated. A home bought for $230,000 in 2002 might sell for $520,000 today. After selling costs and paying off a small remaining mortgage, the net proceeds can be substantial. Getting that number before you start looking changes how you approach the search.",
      },
      {
        type: "h2",
        text: "The Timing Problem: Selling and Buying at Once",
      },
      {
        type: "paragraph",
        text: "The central challenge of downsizing is sequencing. Sell before you buy, and you may be homeless for a period. Buy before you sell, and you're carrying two properties. In Southeast Michigan's current market, here are the options that work:",
      },
      {
        type: "bullets",
        items: [
          "Sell with a rent-back agreement. You sell your current home and negotiate the right to stay as a tenant for 30–60 days after closing while you close on the new home. This is common and generally accepted by buyers who have flexibility on move-in.",
          "Make an offer with a home sale contingency. You make an offer on the smaller home contingent on your current home selling first. This works in slower markets; in competitive markets, sellers often won't accept it.",
          "Bridge financing. Some lenders offer short-term bridge loans that let you buy before you sell. The interest cost is real, but for the right situation, the certainty is worth it.",
          "List and look simultaneously. Price and prepare your current home, and begin seriously touring smaller homes at the same time. With clear communication and good timing, you can get offers aligned.",
        ],
      },
      {
        type: "h2",
        text: "What Downsizers Are Actually Looking For in SE Michigan",
      },
      {
        type: "paragraph",
        text: "The most common request: a ranch or first-floor primary bedroom. Steps become a real concern for clients in their 60s and 70s, and the supply of ranch homes in Southeast Michigan is limited relative to demand. When a well-maintained ranch hits the market in Oakland or Macomb County at the right price, it doesn't sit.",
      },
      {
        type: "paragraph",
        text: "Condominiums are a strong option for downsizers who want to eliminate exterior maintenance — lawn, snow, exterior upkeep. Oakland County has a range of condo communities from entry-level maintenance-fee product up through luxury attached and detached condos in Birmingham, Bloomfield Hills, and Troy.",
      },
      {
        type: "h2",
        text: "The Emotional Side",
      },
      {
        type: "paragraph",
        text: "I'm going to say something that most agents don't: the emotional component of this move is real and it affects decision-making in ways that sometimes work against the seller's financial interest. Sellers price higher than the market supports because they're attached to a number tied to what the home means to them, not what buyers will pay. Or they delay the decision for years waiting until they 'feel ready.'",
      },
      {
        type: "callout",
        label: "What I've observed",
        text: "The clients who navigate this best are the ones who've decided the move is right for them — and then let the data drive the real estate decisions. The attachment to the home is real and valid. Separating it from the pricing and timing decisions is what keeps the transaction on track.",
      },
      {
        type: "h2",
        text: "The Practical Starting Point",
      },
      {
        type: "paragraph",
        text: "A walkthrough of your current home and a conversation about what you're looking for on the other side — that's where this starts. We'll give you a current market value assessment, walk through your net proceeds at different price points, and help you understand what the timing looks like in today's market. That conversation typically takes an hour and answers most of the questions that have been sitting unresolved.",
      },
    ],
  },

  // ─── "What a Home Inspection Covers in Michigan" ─────────────────────────
  {
    slug: "what-a-home-inspection-covers-michigan",
    title: "What a Home Inspection Actually Covers in Michigan",
    image: "/images/insights/home-inspection-michigan.jpg",
    imageAlt: "Home inspector examining a property exterior",
    excerpt:
      "Most buyers think a home inspection is a pass/fail test. It isn't — and misunderstanding what inspectors find (and don't find) leads to expensive surprises.",
    date: "2026-02-18",
    author: "Brad",
    category: "Buyer Tips",
    readTime: "6 min read",
    relatedSlugs: ["how-to-win-a-bidding-war-metro-detroit", "new-construction-vs-resale-michigan", "buyers-map-to-grosse-pointe"],
    relatedCitySlugs: [],
    content: [
      {
        type: "paragraph",
        text: "Home inspections are one of the most misunderstood parts of the buying process. Buyers treat them like a seal of approval. They're not. A home inspection is a visual assessment of accessible systems and components by a licensed professional — not a guarantee that the home is defect-free, and not a structural engineering report. Here's what it actually covers and what to do with the results.",
      },
      {
        type: "h2",
        text: "What Michigan Home Inspectors Actually Look At",
      },
      {
        type: "paragraph",
        text: "Michigan home inspectors are licensed by the state and follow standards that define what's included in a standard inspection. A thorough home inspection covers:",
      },
      {
        type: "bullets",
        items: [
          "Roof: visible condition, flashing, gutters, and drainage — from the ground or with a ladder, not always walked",
          "Foundation and structure: visible foundation walls, basement or crawlspace, framing elements that are accessible",
          "Electrical: panel condition, visible wiring, outlets, GFCI protection, grounding",
          "Plumbing: supply and drain lines, water heater, fixtures, visible pipe condition",
          "HVAC: furnace, air conditioning, ductwork, filters — operational test at the time of inspection",
          "Insulation and ventilation: attic and crawlspace where accessible",
          "Windows and doors: operation, seals, visible damage",
          "Exterior: siding, grading, visible drainage, porches and decks",
        ],
      },
      {
        type: "h2",
        text: "What Home Inspections Don't Cover",
      },
      {
        type: "paragraph",
        text: "This is where buyers get into trouble. Standard home inspections do not include:",
      },
      {
        type: "bullets",
        items: [
          "Behind walls, under flooring, or inside inaccessible spaces",
          "Sewer line condition (requires a separate sewer scope — highly recommended on homes over 20 years old)",
          "Radon levels (separate test, ~$150, worth doing in Michigan where radon is common)",
          "Mold assessment beyond visual observation of moisture staining",
          "Chimney interior condition (separate chimney inspection if the home has a fireplace)",
          "Pest/termite inspection (common in other states, less standard in Michigan but available)",
          "Septic systems, wells, or private water quality",
        ],
      },
      {
        type: "callout",
        label: "My recommendation for most Michigan homes",
        text: "Standard inspection plus a sewer scope plus radon test. The sewer scope runs $150–$250 and can find $5,000–$20,000+ in problems in the line between the house and the street. Radon is common enough in Michigan that testing is worth the cost every time. Total added cost: $300–$400 for peace of mind that a lot of buyers skip.",
      },
      {
        type: "h2",
        text: "How to Read the Inspection Report",
      },
      {
        type: "paragraph",
        text: "A typical inspection report for a 30-year-old Michigan home will have 30–60 items flagged. Most of them are not deal-killers. Inspectors are trained to document everything — deferred caulk, minor grading issues, an outlet that needs a cover. Don't panic at the number of items.",
      },
      {
        type: "paragraph",
        text: "What actually matters is the category of defect: safety issues (exposed wiring, CO detector placement, gas leaks), major system failures (furnace at end of life, active water intrusion, significant structural cracks), and expensive deferred maintenance (roof within 2–3 years, aging water heater). Those items deserve attention and negotiation. The rest are context, not crises.",
      },
      {
        type: "h2",
        text: "What Happens After the Inspection in Michigan",
      },
      {
        type: "paragraph",
        text: "In Michigan, the standard purchase agreement gives buyers an inspection contingency period — typically 10 days from acceptance. Within that window, you can request repairs, ask for a price reduction, or walk away. Here's how I advise buyers to handle it:",
      },
      {
        type: "two-col",
        left: {
          label: "Request repairs for...",
          text: "Safety hazards. Major system failures. Active water intrusion. Anything the inspector flagged as needing immediate attention. These are legitimate negotiating points.",
        },
        right: {
          label: "Don't request repairs for...",
          text: "Cosmetic items. Minor maintenance. Things you knew about before making the offer. Items under $500 in a transaction that's already been negotiated. Nickel-and-diming on inspection kills deals and goodwill.",
        },
      },
      {
        type: "h2",
        text: "One More Thing",
      },
      {
        type: "paragraph",
        text: "Attend your inspection in person. Walk through the home with the inspector for the full 2–3 hours. The written report tells you what was found; the inspection itself tells you why it matters, how serious it is, and what to watch for after you move in. Buyers who skip the walkthrough and just read the report lose the most valuable part of the process.",
      },
    ],
  },

  // ─── "Mid-May 2026 Market Pulse" ────────────────────────────────────────
  {
    slug: "may-2026-southeast-michigan-market-pulse",
    title: "May 2026 Market Pulse: Midwest Markets Are Getting National Attention",
    image: "/images/insights/may-2026-market-pulse.jpg",
    imageAlt: "Aerial view of a residential neighborhood with tree-lined streets",
    excerpt:
      "Southeast Michigan just landed on multiple national hottest-markets lists. Here's what that means locally — and whether the hype matches reality on the ground.",
    date: "2026-05-11",
    author: "Sarah",
    category: "Market Update",
    readTime: "5 min read",
    relatedSlugs: ["spring-2026-southeast-michigan-market-update", "how-to-win-a-bidding-war-metro-detroit", "best-time-to-sell-a-house-southeast-michigan"],
    relatedCitySlugs: ["troy-mi", "birmingham-mi", "shelby-township-mi", "rochester-hills-mi", "livonia-mi", "clinton-township-mi"],
    content: [
      {
        type: "paragraph",
        text: "Something shifted in the national conversation this month. Fortune and Redfin both published their 2026 hottest-neighborhood rankings — and Michigan showed up twice in the top 10. Locally, the Detroit News ran its own analysis putting Livonia and Troy at the top of the state. Southeast Michigan is getting attention it hasn't had in years.",
      },
      {
        type: "paragraph",
        text: "That's the headline. Here's what it actually means if you're trying to buy or sell in Oakland or Macomb County right now.",
      },
      {
        type: "h2",
        text: "The National Rankings",
      },
      {
        type: "paragraph",
        text: "Redfin's 2026 hottest-neighborhoods list put two Michigan communities in the top 10 nationally. The rankings are based on year-over-year price growth, sale-to-list ratios, share of homes selling above asking, and days on market. Separately, the Detroit News analyzed Southeast Michigan cities using Redfin data and found that Livonia and Troy had the most competitive housing markets in the region.",
      },
      {
        type: "paragraph",
        text: "The common thread: Midwest affordability is pulling in buyers from higher-cost markets. A median home price under $400,000 in communities with strong infrastructure, employment access, and short commute times is compelling to buyers who've been priced out of coastal metros.",
      },
      {
        type: "h2",
        text: "Where Rates Stand This Week",
      },
      {
        type: "stat-row",
        stats: [
          { label: "30-Year Fixed", value: "6.25–6.45%", note: "as of May 11" },
          { label: "Oakland County Median", value: "~$355,000", note: "+2–3% YoY" },
          { label: "MI Inventory", value: "~2.5 mo.", note: "balanced = 5–6 months" },
        ],
      },
      {
        type: "paragraph",
        text: "Mortgage rates have been stubbornly range-bound since late winter — hovering between 6.25% and 6.45% on a 30-year fixed depending on the lender and borrower profile. The rate relief that some buyers were hoping for by spring hasn't materialized. That's keeping transaction volume lower than it would be otherwise, but it's not stopping motivated buyers from acting.",
      },
      {
        type: "h2",
        text: "Inventory: Up, but Not for the Reason You'd Hope",
      },
      {
        type: "paragraph",
        text: "Active listings across Metro Detroit are up roughly 13–17% year-over-year depending on the submarket. That sounds like good news for buyers — more to choose from. But the increase isn't driven by a wave of new listings hitting the market. It's driven by homes sitting longer. The listings that are priced right and well-prepared are still moving in under three weeks. The ones that aren't are accumulating.",
      },
      {
        type: "callout",
        label: "The split market",
        text: "This is the defining feature of spring 2026 in Southeast Michigan. There is no single market. There is a fast market for well-priced, well-prepared homes — and a slow market for everything else. The gap between the two is wider than it was a year ago.",
      },
      {
        type: "h2",
        text: "What I'm Watching This Month",
      },
      {
        type: "h3",
        text: "Oakland County: Still Competitive Under $450K",
      },
      {
        type: "paragraph",
        text: "The sub-$450K single-family market in Oakland County remains the most competitive segment in Southeast Michigan. Troy, Livonia, and Rochester Hills are seeing homes go under contract within two weeks when priced accurately. Above $600K, buyers have leverage they didn't have last year — especially in Bloomfield and parts of West Bloomfield where luxury inventory has been building.",
      },
      {
        type: "h3",
        text: "Macomb County: The Value Play Continues",
      },
      {
        type: "paragraph",
        text: "Shelby Township and Clinton Township continue to attract buyers who've been priced out of Oakland County. Macomb County's price appreciation has been quietly strong — up nearly 5% year-over-year in some pockets — and the demand from move-up buyers and first-time buyers is real. New construction activity in Washington Township and northern Macomb is adding inventory, but it's getting absorbed.",
      },
      {
        type: "h3",
        text: "The Rate Lock Question",
      },
      {
        type: "paragraph",
        text: "Multiple buyers have asked me this month whether they should wait for rates to drop before buying. My answer hasn't changed: if you find the right home at the right price, act. You can refinance a rate. You can't retroactively buy a home that sold to someone else. The buyers who are winning right now are the ones who've stopped trying to time rates and started focusing on finding the right property.",
      },
      {
        type: "h2",
        text: "For Sellers: The Window Is Open — Use It Well",
      },
      {
        type: "paragraph",
        text: "May through mid-June is historically the strongest stretch for sellers in Southeast Michigan. Buyer activity is at its seasonal peak, and homes that hit the market in the next four weeks get maximum exposure. But the market is less forgiving than it was in 2022 or 2023.",
      },
      {
        type: "bullets",
        items: [
          "Price with current data. The homes sitting longest this spring are the ones priced based on what the neighbor got six months ago rather than what comparable homes are closing at now.",
          "Invest in presentation. Professional photography, decluttering, and handling deferred maintenance before listing — not after the first price reduction.",
          "Expect negotiation above $500K. Buyers at the upper end of the market have options and are using them. The days of multiple offers on every luxury listing are over for now.",
        ],
      },
      {
        type: "h2",
        text: "For Buyers: You Have More Room Than You Think",
      },
      {
        type: "paragraph",
        text: "The national rankings validate what we've been telling relocators and local buyers: Southeast Michigan is fundamentally undervalued relative to comparable Midwest and coastal metros. The value here is real. But so is the competition in the most desirable price ranges.",
      },
      {
        type: "bullets",
        items: [
          "Get fully underwritten before you start. In a multiple-offer situation at $350K in Troy, a pre-approval letter isn't enough — a fully underwritten approval signals certainty.",
          "Don't sleep on Macomb County. The value-to-quality ratio in Shelby Township, Macomb Township, and even Sterling Heights is hard to beat.",
          "Move on the right house. Inventory is up, but the good inventory still goes fast. The increase in active listings is not an invitation to wait.",
        ],
      },
      {
        type: "h2",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "Southeast Michigan getting national attention isn't hype — the fundamentals support it. Prices are appreciating at a healthy pace. Inventory is tight but workable. Employment is stable. And the cost of entry is still dramatically lower than comparable markets nationally. Whether you're buying, selling, or thinking about it for later this year, the May picture is clear: the market rewards preparation and punishes delay.",
      },
    ],
  },

  {
    slug: "sorting-by-preparation-may-2026",
    title: "Sorting by Preparation: Why the Corridor's DOM Is Diverging",
    image: "/images/insights/sorting-by-preparation.jpg",
    imageAlt: "Professionally staged home interior ready for market",
    excerpt:
      "Countywide days-on-market in Oakland have stretched to 32. A specific bracket of the market is still clearing in the high-20s. The spread between those two numbers is the entire story of late spring 2026.",
    date: "2026-05-18",
    author: "Sarah",
    category: "Market Update",
    readTime: "5 min read",
    relatedSlugs: ["may-2026-southeast-michigan-market-pulse", "spring-2026-southeast-michigan-market-update", "best-time-to-sell-a-house-southeast-michigan"],
    relatedCitySlugs: ["rochester-hills-mi", "shelby-township-mi", "troy-mi", "bloomfield-hills-mi"],
    content: [
      {
        type: "h2",
        text: "A late-spring read on the corridor",
      },
      {
        type: "paragraph",
        text: "The mortgage rate is not the most interesting number this month. Freddie Mac's 30-year fixed averaged 6.36% for the week ending May 14, with the 15-year at 5.71%, both down a single basis point from the prior week and roughly 45 basis points below where they sat at the same point in 2025. The Federal Reserve held the federal funds target at 3.50% to 3.75% at its April 29 meeting, and the four-member dissent recorded at that vote was the most divided FOMC reading since 1992. The next move on the calendar is the June 16 and 17 meeting, when the Committee refreshes its rate projections.",
      },
      {
        type: "paragraph",
        text: "What is more interesting is what those rates are now doing to seller behavior across the Woodward to M-59 corridor, and what they are no longer doing to the equity-rich move-up buyer.",
      },
      {
        type: "h2",
        text: "The leverage frame",
      },
      {
        type: "paragraph",
        text: "For the move-up buyer selling a $400K colonial in Royal Oak or Troy and moving into an $850K estate in Rochester Hills or Shelby Twp, the rate conversation has become a leverage conversation. Two hundred thousand dollars of cash equity migrating from the sale into the next purchase means the financed portion is modest. The monthly payment delta between a 6.0% and a 6.5% mortgage is real, but it rarely changes the buy-or-wait decision for a household with this kind of balance sheet behind them. We continue to advise clients to underwrite to the home and finance the rate.",
      },
      {
        type: "h2",
        text: "The divergence story",
      },
      {
        type: "paragraph",
        text: "The number worth watching this month is days-on-market, and specifically the spread between two readings of it.",
      },
      {
        type: "paragraph",
        text: "Countywide, Oakland County is now sitting on the market for about 32 days. A year ago at this point in the spring, the same figure was 23. That is a meaningful stretch.",
      },
      {
        type: "paragraph",
        text: "The $700K to $950K bracket of the corridor is telling a different story. Well-presented inventory in that range is still clearing in the high-20s. The bracket has not slowed in any structural sense.",
      },
      {
        type: "callout",
        label: "The split",
        text: "The gap between 32 and 27 days is not noise. It is the market sorting itself by preparation. Homes drifting into the 40-and-50-day window are almost universally un-updated 1990s product, or sellers priced against a Sunday headline rather than against the comps actually closing. Homes still moving in 27 days are turn-key, accurately priced, and presented by someone who understands what the bracket rewards.",
      },
      {
        type: "h2",
        text: "What's moving on the ground",
      },
      {
        type: "paragraph",
        text: "Three observations from this week's tours and conversations.",
      },
      {
        type: "h3",
        text: "Rochester Hills (48306 and 48307)",
      },
      {
        type: "paragraph",
        text: "Modernized colonials are pulling a turn-key premium of roughly 7 to 10% per square foot over their un-updated neighbors on the same blocks. The white-oak-and-quartz package is no longer a \"nice to have\" in this zip code; it is a pricing threshold.",
      },
      {
        type: "h3",
        text: "Shelby Twp (48316)",
      },
      {
        type: "paragraph",
        text: "Two off-market trades cleared in 48316 in the past week, both before the listings reached broker preview. The buyer pool here is patient, capitalized, and waiting for prepared product. Sellers who list ready are getting rewarded; sellers who wait for \"summer\" are not.",
      },
      {
        type: "h3",
        text: "Commerce Twp (48382)",
      },
      {
        type: "paragraph",
        text: "Deeded lake-access supply between $600K and $850K remains tight going into Memorial Day. The Work-From-Lake archetype, a renovated build with a dedicated office and a water view, continues to lead the bracket on a price-per-square-foot basis.",
      },
      {
        type: "h2",
        text: "The window",
      },
      {
        type: "paragraph",
        text: "The eight-week stretch between Memorial Day and Independence Day is historically the tightest selling window of the year in this corridor. It is also, in 2026, the window most ruthlessly sorting prepared listings from underprepared ones.",
      },
      {
        type: "paragraph",
        text: "If you are six weeks from listing and the kitchen still carries builder-grade granite or the photography is still scheduled for \"sometime next week,\" the question to answer this week is whether you finish those changes before the window closes or reset the timeline to a fall launch. Both are defensible. Neither is the answer most sellers default to without help.",
      },
      {
        type: "h2",
        text: "Where to start",
      },
      {
        type: "paragraph",
        text: "If you are weighing a move this season, the most useful first step is rarely a showing. It is a conversation about whether the timing serves you and what the comps in your zip code are actually rewarding right now.",
      },
      {
        type: "bullets",
        items: [
          "A current valuation at thepatrickgrp.com/home-valuation",
          "A 20-minute strategy call before you commit to a listing date at thepatrickgrp.com/contact",
          "Early access to inventory previews before MLS at thepatrickgrp.com/vip-buyers",
        ],
      },
    ],
  },

  {
    slug: "michigan-sb-971-investor-limit-what-buyers-sellers-need-to-know",
    title: "Michigan's SB 971 Could Cap Out-of-State Investors at 10 Homes — What It Means for You",
    image: "/images/insights/sb-971-investor-cap.jpg",
    imageAlt: "Residential street in Southeast Michigan with for sale sign",
    excerpt:
      "A new Michigan bill would prohibit out-of-state investment groups from owning more than 10 single-family homes in the state. Here's what it actually says, how it connects to the federal push, and what it means if you're buying or selling in Southeast Michigan.",
    date: "2026-05-22",
    author: "Brad",
    category: "Buyer Tips",
    readTime: "6 min read",
    relatedSlugs: ["spring-2026-southeast-michigan-market-update", "how-to-win-a-bidding-war-metro-detroit", "sorting-by-preparation-may-2026"],
    relatedCitySlugs: ["sterling-heights-mi", "warren-mi", "detroit-mi", "clinton-township-mi", "shelby-township-mi"],
    content: [
      {
        type: "paragraph",
        text: "If you've been on TikTok or Instagram this month, you've probably seen it: creators and local housing advocates are buzzing about a Michigan bill that would cap how many single-family homes out-of-state investment groups can own in the state. The bill is Senate Bill 971, introduced by Senator Veronica Klinefelt (D-Eastpointe), and the core idea is simple — if you're an out-of-state investment entity, you cannot own more than 10 single-family homes in Michigan.",
      },
      {
        type: "paragraph",
        text: "The social media energy around this is real. But so is the nuance. Here's what SB 971 actually proposes, how it fits into a much bigger national conversation, and what it means if you're actively buying or selling in Southeast Michigan right now.",
      },
      {
        type: "h2",
        text: "What Senate Bill 971 Actually Says",
      },
      {
        type: "paragraph",
        text: "SB 971 was introduced on May 14, 2026, as part of a broader package of housing affordability legislation from Michigan Senate Democrats. The bill targets out-of-state investment groups specifically — not individual investors, not local landlords, not Michigan-based companies. The proposed cap is 10 single-family homes per entity.",
      },
      {
        type: "paragraph",
        text: "The goal, according to Senator Klinefelt, is to level the playing field for Michigan families who are competing against deep-pocketed institutional buyers that can make all-cash offers, waive inspections, and close in days. If you've ever lost a home to a cash buyer who never planned to live there, you understand the frustration this bill is trying to address.",
      },
      {
        type: "callout",
        label: "Key Detail",
        text: "SB 971 targets out-of-state investment groups, not individual investors or Michigan-based landlords. The 10-home cap applies per entity. The bill is currently in committee and has not yet been voted on.",
      },
      {
        type: "h2",
        text: "The Federal Picture: It's Bigger Than Michigan",
      },
      {
        type: "paragraph",
        text: "Michigan isn't acting in a vacuum. In January 2026, the White House issued an executive order titled 'Stopping Wall Street from Competing with Main Street Homebuyers.' Then in March, the U.S. Senate passed the 21st Century ROAD to Housing Act by a vote of 89-10, which includes a provision banning any investor that owns 350 or more homes from purchasing additional single-family properties.",
      },
      {
        type: "paragraph",
        text: "The House passed its own version in May 2026, though it takes a softer approach — dropping the outright ban in favor of other mechanisms. The two chambers will need to reconcile the differences before anything reaches the president's desk.",
      },
      {
        type: "paragraph",
        text: "Michigan's SB 971 is a state-level complement to that federal momentum. The 10-home threshold is significantly more aggressive than the federal 350-home cap, which tells you something about how seriously Michigan legislators are taking the issue locally.",
      },
      {
        type: "h2",
        text: "How Big Is the Problem in Southeast Michigan?",
      },
      {
        type: "paragraph",
        text: "Nationally, institutional investors (entities owning 100+ homes) account for a relatively small share of total home purchases — roughly 1-2% of transactions. But the impact is not evenly distributed. Sun Belt markets like Atlanta and Jacksonville have seen institutional ownership reach 18-25% of single-family rentals. The Midwest has been less affected overall, but Metro Detroit's affordability has made it increasingly attractive to out-of-state capital.",
      },
      {
        type: "paragraph",
        text: "Here's what we see on the ground: in Wayne and Macomb counties specifically, cash offers from entities with no local presence have become more common in the sub-$300,000 price range over the past two years. These aren't always massive institutional players — some are mid-sized out-of-state firms running portfolios of 50-200 homes across multiple states. But the effect on a first-time buyer trying to purchase a starter home in Warren or Clinton Township is the same: they lose.",
      },
      {
        type: "h2",
        text: "What This Means for Buyers",
      },
      {
        type: "paragraph",
        text: "If SB 971 passes, it would reduce one category of competition in the market — particularly at the entry-level price points where institutional interest is highest. That's meaningful. But it's not a silver bullet.",
      },
      {
        type: "bullets",
        items: [
          "The bill targets out-of-state groups only. Michigan-based investors and individual landlords are unaffected.",
          "It does not address the core supply problem. Southeast Michigan still needs more housing built, period.",
          "It will not lower home prices on its own. Prices are driven by supply, demand, rates, and local employment — not just investor activity.",
          "It could reduce the frequency of all-cash, no-inspection offers in certain price brackets, which would give financed buyers a better shot.",
        ],
      },
      {
        type: "paragraph",
        text: "The practical advice hasn't changed: get pre-approved, work with an agent who understands competitive offer strategy, and be ready to move when the right home appears. But if this bill passes, the playing field in certain neighborhoods gets a little more level.",
      },
      {
        type: "h2",
        text: "What This Means for Sellers",
      },
      {
        type: "paragraph",
        text: "If you're selling, the concern is obvious: does limiting investor buyers reduce your pool of potential offers? The honest answer is yes, marginally — but that's not the whole story.",
      },
      {
        type: "paragraph",
        text: "Investor offers are attractive because they're often cash and close fast. But they also tend to come in below market value, because the buyer is running a yield calculation, not an emotional one. A family that plans to live in the home for 10 years will almost always pay more than an entity calculating cap rate. For most sellers in Southeast Michigan, a deeper pool of qualified owner-occupant buyers is ultimately better for your bottom line.",
      },
      {
        type: "callout",
        label: "For Sellers",
        text: "A well-marketed home priced correctly will attract strong offers regardless of this legislation. The fundamentals of selling well — preparation, pricing, and professional marketing — matter far more than who is in your buyer pool.",
      },
      {
        type: "h2",
        text: "Will It Pass?",
      },
      {
        type: "paragraph",
        text: "SB 971 is currently in committee. Michigan has a Democratic trifecta (governor, state house, state senate), and the bill has strong party support. But 'introduced' and 'signed into law' are very different things. The real estate industry, property rights advocates, and investment groups will all weigh in. Even supportive legislators may push to modify the 10-home threshold or the definition of 'out-of-state investment group.'",
      },
      {
        type: "paragraph",
        text: "We'll be watching this closely and will update this article as the bill progresses. For now, the takeaway is that the political momentum — at both the state and federal level — is clearly moving toward restricting institutional ownership of single-family homes. Whether that becomes law in Michigan this session or next, the direction is set.",
      },
      {
        type: "h2",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "SB 971 is a real bill with real momentum, not just a TikTok talking point. It won't fix housing affordability on its own, but it addresses a genuine frustration that Michigan buyers — especially first-time buyers in the $200K-$300K range — feel every week. Whether you're buying or selling, the fundamentals haven't changed: work with someone who knows the local market, understands the competitive landscape, and can help you navigate whatever rules are in play.",
      },
      {
        type: "bullets",
        items: [
          "Buying? Get ahead of the competition with our VIP Coming Soon list at thepatrickgrp.com/vip-buyers",
          "Selling? Find out what your home is worth today at thepatrickgrp.com/home-valuation",
          "Questions about how this affects your situation? Call us at 248.755.3545",
        ],
      },
    ],
  },

  {
    slug: "michigan-homebuyer-grants-rates-how-to-afford-a-home-2026",
    title: "Grants, Rates, and Real Math: How Michigan Buyers Are Actually Affording Homes in 2026",
    image: "/images/insights/grants-rates-real-math.jpg",
    imageAlt: "Young couple reviewing paperwork at a kitchen table",
    excerpt:
      "Mortgage rates are in the mid-6s. Insurance is up 20%. And Michigan has thousands in grant money most buyers don't know about. Here's how to stack every advantage and actually close on a house this year.",
    date: "2026-05-22",
    author: "Brad",
    category: "Buyer Tips",
    readTime: "7 min read",
    relatedSlugs: ["michigan-sb-971-investor-limit-what-buyers-sellers-need-to-know", "how-to-win-a-bidding-war-metro-detroit", "spring-2026-southeast-michigan-market-update"],
    relatedCitySlugs: ["sterling-heights-mi", "warren-mi", "clinton-township-mi", "macomb-township-mi", "romulus-mi", "detroit-mi"],
    content: [
      {
        type: "paragraph",
        text: "Let's be honest about what first-time buyers are facing in 2026. The 30-year fixed mortgage rate is sitting around 6.5%. Michigan home insurance premiums jumped over 21% last year. Median home prices are up in every county we track. And if you're scrolling TikTok or Instagram, you're seeing a lot of people telling you the dream is dead.",
      },
      {
        type: "paragraph",
        text: "It's not dead. But it does require a different strategy than it did in 2019 when rates were in the 3s and nobody was talking about insurance costs. The buyers who are actually closing in Southeast Michigan right now aren't lucky — they're informed. They know what programs exist, they know how to stack them, and they have someone in their corner who's done it before.",
      },
      {
        type: "paragraph",
        text: "This article breaks down every financial lever available to Michigan homebuyers right now — grants, loan programs, rate strategies, and insurance realities. No fluff. Just the math.",
      },
      {
        type: "h2",
        text: "The Rate Reality: 6.5% Is Not the End of the World",
      },
      {
        type: "paragraph",
        text: "The average 30-year fixed rate as of late May 2026 is approximately 6.5%, with 15-year fixed rates around 5.7%. That's down from the 7%+ peaks of 2023-2024, but still well above the historically unusual sub-4% rates that shaped buyer expectations for a decade.",
      },
      {
        type: "paragraph",
        text: "Here's what I tell every buyer who walks into my office worried about rates: your grandparents bought their house at 8-12%. The average 30-year rate over the last 50 years is about 7.7%. We're below the historical average. What changed isn't the rate — it's the price of the house relative to wages, and that's exactly where grants and assistance programs become your leverage.",
      },
      {
        type: "stat-row",
        stats: [
          { label: "30-Year Fixed", value: "~6.5%", note: "May 2026 avg" },
          { label: "15-Year Fixed", value: "~5.7%", note: "May 2026 avg" },
          { label: "50-Year Avg", value: "7.7%", note: "Historical norm" },
        ],
      },
      {
        type: "callout",
        label: "Rate Strategy",
        text: "Ask your lender about a 2-1 temporary rate buydown. On a $270,000 Macomb County home, a seller-paid 2-1 buydown drops your first-year rate to ~4.5% and your second-year rate to ~5.5%. That can mean $400/month in savings during the years you need it most. We regularly negotiate seller-paid buydowns into our offers.",
      },
      {
        type: "h2",
        text: "Michigan Grants Most Buyers Don't Know About",
      },
      {
        type: "paragraph",
        text: "This is where the real advantage is. Michigan has some of the most generous down payment assistance programs in the Midwest, and the vast majority of first-time buyers I talk to don't know they exist. We built a free grant qualification tool on our site that checks 12+ programs in about two minutes. But here's the breakdown of the biggest ones:",
      },
      {
        type: "h3",
        text: "MSHDA MI Home Loan + DPA ($7,500–$10,000)",
      },
      {
        type: "paragraph",
        text: "The Michigan State Housing Development Authority offers up to $7,500 in down payment assistance statewide, and up to $10,000 in targeted zip codes. This is a zero-interest, zero-monthly-payment loan that you only pay back when you sell, refinance, or pay off your mortgage. It stacks on top of FHA, conventional, VA, or USDA loans. You need a 640+ credit score and your household income must be under the county limit — roughly $95,000 to $121,000 depending on where you're buying.",
      },
      {
        type: "h3",
        text: "Detroit DPA (Up to $25,000)",
      },
      {
        type: "paragraph",
        text: "Buying in Detroit proper? The Detroit Down Payment Assistance Program offers up to $25,000 for down payments, closing costs, and related expenses. This is one of the most generous city-level programs in the entire country. Combined with MSHDA, a Detroit buyer could potentially access $35,000 in assistance before touching their own savings.",
      },
      {
        type: "h3",
        text: "USDA Rural Development (Zero Down Payment)",
      },
      {
        type: "paragraph",
        text: "Here's one that surprises people: 97% of Michigan is USDA-eligible. That means zero down payment required. You don't have to be buying a farm — plenty of suburban and small-town communities in Livingston County, northern Macomb County, and western Oakland County qualify. Income limits are generous too: $119,850 for a family of 1-4 in 2026. If you're buying outside the major metro cores, this should be your first conversation with a lender.",
      },
      {
        type: "h3",
        text: "VA Loans (Zero Down, No PMI)",
      },
      {
        type: "paragraph",
        text: "If you're a veteran or active-duty military, the VA loan remains the single best mortgage product available anywhere. Zero down payment, no private mortgage insurance, and competitive rates that are typically 0.25-0.5% below conventional. You can combine VA financing with MSHDA assistance in many cases.",
      },
      {
        type: "h3",
        text: "HomeReady and Home Possible (3% Down, Income-Based)",
      },
      {
        type: "paragraph",
        text: "Fannie Mae's HomeReady and Freddie Mac's Home Possible programs allow as little as 3% down with reduced mortgage insurance for borrowers at or below 80% of area median income. In Oakland County, that's a household income up to approximately $83,000. In Wayne County, it's lower. These programs are specifically designed for the buyer who has good credit but not a lot of cash saved.",
      },
      {
        type: "callout",
        label: "Check Your Eligibility",
        text: "We built a free tool that checks your eligibility for 12+ Michigan grant and assistance programs in about 2 minutes. No obligation, instant results. Try it at thepatrickgrp.com/grants",
      },
      {
        type: "h2",
        text: "The Insurance Problem Nobody's Talking About",
      },
      {
        type: "paragraph",
        text: "Here's the number that's quietly changing the affordability math: Michigan home insurance premiums increased 21.6% between 2024 and 2025, and projections show another 3-8% increase in 2026. The average Michigan homeowner is now paying roughly $2,200 per year — about $183/month — just for insurance.",
      },
      {
        type: "paragraph",
        text: "Most first-time buyers budget for principal, interest, and taxes. They forget insurance until the lender pulls it into the escrow estimate, and suddenly their comfortable monthly payment is $150-200 higher than expected. Don't let this happen to you.",
      },
      {
        type: "bullets",
        items: [
          "Get insurance quotes before you make an offer — not after. Your agent should help you factor this into your budget from day one.",
          "Bundle your auto and home insurance. In Michigan, bundling typically saves 15-25%.",
          "Ask about wind/hail deductible options. A higher deductible on weather-related claims can meaningfully reduce your premium.",
          "Newer homes and updated roofs get significantly better rates. Factor this into which homes you're targeting.",
        ],
      },
      {
        type: "h2",
        text: "Stacking the Advantages: A Real Example",
      },
      {
        type: "paragraph",
        text: "Let's run real numbers on a $270,000 home in Macomb County — right at the county median — for a first-time buyer with a 680 credit score and $65,000 household income.",
      },
      {
        type: "stat-row",
        stats: [
          { label: "Purchase Price", value: "$270,000", note: "Macomb County median" },
          { label: "MSHDA DPA", value: "$10,000", note: "Targeted zip" },
          { label: "Out of Pocket", value: "~$2,700", note: "1% minimum contribution" },
        ],
      },
      {
        type: "paragraph",
        text: "With MSHDA's DPA covering most of the down payment, this buyer needs roughly $2,700 of their own money plus closing costs — which can often be negotiated as seller concessions in the current market. Add a seller-paid 2-1 rate buydown and the first-year monthly payment drops by $300-400 compared to the sticker rate. That's the difference between 'I can't afford it' and 'I'm moving in next month.'",
      },
      {
        type: "h2",
        text: "The Competitive Edge: Why This Matters in a Bidding Situation",
      },
      {
        type: "paragraph",
        text: "Here's something the TikTok finance creators don't always mention: knowing these programs isn't just about affording the home. It's about winning the offer. When I write an offer for a buyer using MSHDA or a similar program, I make sure the offer is structured so the seller sees strength, not complexity. Pre-approval with DPA already confirmed. Clean terms. Fast close timeline. The seller doesn't care where your down payment comes from — they care that you can close.",
      },
      {
        type: "paragraph",
        text: "I've personally closed deals in Macomb and Wayne counties where my buyer was using full DPA and beat out a conventional offer because we presented it better. The program doesn't make you a weaker buyer — bad preparation makes you a weaker buyer.",
      },
      {
        type: "h2",
        text: "What to Do This Week",
      },
      {
        type: "paragraph",
        text: "If you're a first-time buyer in Southeast Michigan and you've been sitting on the sideline because the numbers feel impossible, here's your action list:",
      },
      {
        type: "bullets",
        items: [
          "Check your grant eligibility in 2 minutes — free, instant results at thepatrickgrp.com/grants",
          "Get pre-approved with an MSHDA-approved lender. We have a list of trusted local lenders we work with regularly.",
          "Get insurance quotes early. Know your real monthly cost before you start touring homes.",
          "Join our VIP Coming Soon list to see homes before they hit Zillow — thepatrickgrp.com/vip-buyers",
          "Call us at 248.755.3545 — a 15-minute conversation about your situation costs nothing and could save you thousands.",
        ],
      },
      {
        type: "paragraph",
        text: "The buyers who are closing in 2026 aren't the ones with the most money. They're the ones with the most information. Now you have it.",
      },
    ],
  },

  // ─── "June 2026: The Quiet Buyer Window" ────────────────────────────────
  {
    slug: "june-2026-quiet-buyer-window-oakland-county",
    title: "The Quietest Buyer's Window Metro Detroit Has Had in Five Years",
    image: "/images/insights/june-2026-buyer-window.jpg",
    imageAlt: "Suburban Oakland County home with a for sale sign in early summer",
    excerpt:
      "Inventory is up. Days on market are up. Prices in Oakland County are actually down year-over-year. Owning is now cheaper than renting in most of our service area — and almost no one is talking about it.",
    date: "2026-06-09",
    author: "Sarah",
    category: "Market Update",
    readTime: "6 min read",
    relatedSlugs: [
      "may-2026-southeast-michigan-market-pulse",
      "spring-2026-southeast-michigan-market-update",
      "how-to-win-a-bidding-war-metro-detroit",
      "michigan-homebuyer-grants-rates-how-to-afford-a-home-2026",
    ],
    relatedCitySlugs: [
      "birmingham-mi",
      "troy-mi",
      "rochester-hills-mi",
      "bloomfield-hills-mi",
      "northville-mi",
      "royal-oak-mi",
    ],
    content: [
      {
        type: "paragraph",
        text: "There's a moment in every cycle when the data shifts before the headlines catch up. We're in one right now. Most buyers I talk to this month still think we're in the 2022 market — bidding wars, no inventory, paying over asking. That hasn't been true in Oakland County for several months, and the June numbers make it official.",
      },
      {
        type: "paragraph",
        text: "Lucido Real Estate ran their analysis last week and called it a \"choice without a crash\" market. That's the right frame. The market hasn't broken. Prices aren't collapsing. But the leverage has quietly moved to buyers in a way it hasn't since 2019, and most people haven't noticed yet.",
      },
      {
        type: "h2",
        text: "Three Numbers That Changed the Picture",
      },
      {
        type: "stat-row",
        stats: [
          { label: "Oakland Inventory", value: "+12.2%", note: "YoY active listings" },
          { label: "Days on Market", value: "+18.5%", note: "Median, YoY" },
          { label: "Median List Price", value: "−3.6%", note: "Oakland County, YoY" },
        ],
      },
      {
        type: "paragraph",
        text: "Active listings in Oakland County are up 12% year over year. The median home is sitting almost three weeks before going under contract — up nearly 20% from this time last year. And the median list price has actually come down 3.6% YoY. Each of those numbers in isolation is mild. Stacked together, they say one thing: sellers are quietly repricing.",
      },
      {
        type: "paragraph",
        text: "You won't see that on the front page. You will see it the moment you start writing offers.",
      },
      {
        type: "h2",
        text: "The Math That Just Flipped",
      },
      {
        type: "paragraph",
        text: "Here's the one nobody's pointing out. The median Oakland County home, financed with 20% down at today's rate, comes in at about $1,869 a month in principal and interest. The median Oakland County rent is around $2,050.",
      },
      {
        type: "callout",
        label: "The flip",
        text: "Owning the median home is now roughly $180/month cheaper than renting it. That math hasn't been true in our market since before 2021.",
      },
      {
        type: "paragraph",
        text: "That doesn't account for taxes and insurance, and it doesn't make a renter's life harder than it needs to be. But for anyone debating whether to keep renting or finally buy, the gap is small enough that the long-term math of owning — building equity, fixing your housing cost, deducting interest — wins decisively over a 5-year hold. That's a conversation worth having with anyone you know who's been waiting for \"the right time.\"",
      },
      {
        type: "h2",
        text: "Why This Isn't a Crash",
      },
      {
        type: "paragraph",
        text: "When the numbers move like this — inventory up, DOM up, price down — people understandably get nervous about 2008. I've been through that cycle. This isn't it. Three reasons:",
      },
      {
        type: "bullets",
        items: [
          "Inventory is rebuilding from historic lows, not from oversupply. Oakland's active listing count is still well below where it sat in 2018–2019.",
          "Mortgage rates are actually lower than this time last year. The 30-year fixed averaged 6.36% in May, down from 6.81% in May 2025. Buyers think rates are punishing them. They're not — they're better.",
          "Demand hasn't disappeared. It's just become more selective. Well-priced, well-presented homes still move in under two weeks. The homes piling up DOM are the ones priced to 2024 comps.",
        ],
      },
      {
        type: "paragraph",
        text: "This is what a healthy, functional market looks like after four years of distortion. Not a crash. A reset.",
      },
      {
        type: "h2",
        text: "If You're Buying",
      },
      {
        type: "two-col",
        left: {
          label: "What's working",
          text: "Sellers are negotiating. Inspection objections are being addressed. Closing cost concessions are back. You can take a weekend to think about a house — that wasn't true 18 months ago. The serious buyer who's pre-approved and ready to write a clean offer has the most leverage of any point in the last five years.",
        },
        right: {
          label: "What to watch",
          text: "Don't confuse this window with a buyer's market across the board. Birmingham, Northville, and Bloomfield Hills under $700k are still tight. The shift is concentrated in the $400k–$1M range and in markets where inventory rebuilt fastest. Know which submarket you're in.",
        },
      },
      {
        type: "h2",
        text: "If You're Selling",
      },
      {
        type: "paragraph",
        text: "Two things. First — your home is still worth more than it was last year. Even in Oakland, with prices down 3.6% YoY, you're well above 2022 numbers, let alone 2019. The headline isn't \"prices crashed.\" The headline is \"the line stopped going straight up.\"",
      },
      {
        type: "paragraph",
        text: "Second — pricing discipline matters more right now than it has in five years. Homes priced to last summer's comps are the ones sitting. Homes priced to today's market are selling, and several are seeing competitive offers. The difference is rarely more than 3–5% in initial list price, but it's the difference between selling in 14 days and renegotiating after 60.",
      },
      {
        type: "callout",
        label: "The seller's takeaway",
        text: "Get your home priced right on day one. The market will tell you in the first two weeks. Listening to it early is the entire game.",
      },
      {
        type: "h2",
        text: "What I'd Actually Do This Month",
      },
      {
        type: "paragraph",
        text: "If you've been on the fence about buying, this is the cleanest window we've seen since the pandemic distorted everything. Get pre-approved this week. Walk three homes before the Fourth of July. Write an offer you can sleep with — there's room to negotiate that didn't exist last summer.",
      },
      {
        type: "paragraph",
        text: "If you're selling, list with discipline. The buyers are out there and they're qualified. They're just not paying for last year's market anymore.",
      },
      {
        type: "paragraph",
        text: "The window won't stay open forever. When rates drop another quarter point — and most economists still expect that before year-end — the demand side wakes up and the leverage shifts back. The buyers who move now will look back at June 2026 as the quietest moment of the cycle.",
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
