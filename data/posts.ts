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

  // ─── "How Much Does It Cost to Sell a House in Michigan?" ──────────────────
  {
    slug: "cost-to-sell-a-house-michigan",
    title: "How Much Does It Cost to Sell a House in Michigan?",
    excerpt:
      "Transfer taxes, title fees, commissions, and concessions — here's what Southeast Michigan sellers actually pay at closing, with a worked example on a $400K sale.",
    date: "2026-05-05",
    author: "Sarah",
    category: "Seller Tips",
    readTime: "6 min read",
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
    excerpt:
      "Spring gets the most attention, but the real answer is more nuanced — and timing matters less than most sellers think.",
    date: "2026-04-18",
    author: "Sarah",
    category: "Seller Tips",
    readTime: "5 min read",
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
    excerpt:
      "Timing, authority, equity splits, and keeping the process from derailing — what Michigan sellers navigating a divorce actually need to know.",
    date: "2026-04-05",
    author: "Sarah",
    category: "Seller Tips",
    readTime: "7 min read",
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
    excerpt:
      "The base price looks attractive until you see what the builder charges for everything else. Here's how to think through the decision honestly.",
    date: "2026-03-28",
    author: "Brad",
    category: "Buyer Tips",
    readTime: "7 min read",
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
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
