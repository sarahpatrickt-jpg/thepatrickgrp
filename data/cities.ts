export interface CityMarketStats {
  medianPrice: number;
  medianPriceChange: number; // YoY %
  daysOnMarket: number;
  pricePerSqft: number;
}

export interface CityPriceRange {
  low: string;
  high: string;
  luxury: string;
}

export interface CityFaq {
  q: string;
  a: string;
}

export interface City {
  slug: string;
  name: string;
  county: string;
  state: string;
  zipCodes: string[];
  marketStats: CityMarketStats;
  priceRange: CityPriceRange;
  schoolDistrict: string;
  commuteToDetroit: string;
  about: string;
  realEstateOverview: string;
  locationAccess: string[];
  schoolInfo: string;
  bradQuote: string;
  quoteAuthor: "Brad" | "Sarah";
  nearbySlugsSee: string[];
  sierraSearchUrl: string;
  faqs: CityFaq[];
  ctaVariant: "buyer" | "seller" | "both";
}

export const cities: City[] = [
  // ─── OAKLAND COUNTY ───────────────────────────────────────────────────────

  {
    slug: "birmingham-mi",
    name: "Birmingham",
    county: "Oakland",
    state: "MI",
    zipCodes: ["48009"],
    marketStats: {
      medianPrice: 874583,
      medianPriceChange: 30,
      daysOnMarket: 35,
      pricePerSqft: 355,
    },
    priceRange: {
      low: "Mid-$400s to $650K gets you a well-maintained colonial or Tudor on a small to mid-sized lot within the city core.",
      high: "$650K–$1.2M brings fully renovated homes, newer construction, and premium streets a few blocks from downtown.",
      luxury: "Above $1.2M you're looking at architectural standouts - custom builds, large lots near Quarton Lake, or recently constructed modern homes with every upgrade.",
    },
    schoolDistrict: "Birmingham City School District",
    commuteToDetroit: "20 min",
    about:
      "Birmingham is one of Oakland County's most established cities, known for its walkable downtown along Merrill Street and Old Woodward Avenue - a dense concentration of independent restaurants, boutiques, galleries, and year-round community events. The city sits at approximately 4.7 square miles and borders Bloomfield Township to the north and Beverly Hills to the west.\n\nReal estate in Birmingham spans a wide range - from historic bungalows and Tudor revivals on tree-lined streets to modern new construction and luxury condominiums. The city has consistently maintained strong buyer demand and competitive days-on-market figures across every market cycle, making it one of the most reliable markets in Southeast Michigan.",
    realEstateOverview:
      "Birmingham's housing stock includes a mix of Tudor revivals and colonials from the 1920s–1950s, alongside significant new construction activity. Lots tend to be smaller in the downtown core and larger toward the city's edges. Entry-level homes typically begin in the mid-$400s, while renovated or new-construction properties regularly exceed $1.5M.\n\nThe condominium market is active, with several well-maintained buildings in and around the downtown area offering lock-and-leave convenience. Inventory in Birmingham moves quickly - well-priced homes often see multiple offers within the first week.",
    locationAccess: [
      "Approximately 20 miles north of downtown Detroit via Woodward Avenue (M-1)",
      "Quick access to I-696 and US-24 (Telegraph Road)",
      "Adjacent to Bloomfield Township, Beverly Hills, and Royal Oak",
      "Downtown Birmingham is walkable from most residential streets within the city core",
    ],
    schoolInfo:
      "Birmingham is served by the Birmingham City School District, which includes Seaholm High School and Groves High School at the secondary level, along with several elementary and middle school buildings. Boundary lines determine school assignments - we recommend verifying which school a specific property feeds into directly with the district.",
    bradQuote:
      "I've watched Birmingham hold its value through the 2008 crash, the COVID spike, and the 2022 rate shock - it is one of the most resilient markets in Southeast Michigan. The walkable downtown isn't just a lifestyle feature, it's a value driver that has kept buyers competing here through every cycle I've worked. When a properly prepared Birmingham listing hits the market, the response is almost always immediate.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["bloomfield-hills-mi", "bloomfield-township-mi", "royal-oak-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Birmingham MI")}`,
    faqs: [
      {
        q: "What's the difference between Birmingham and Bloomfield Hills?",
        a: "Birmingham is a walkable city with a dense downtown - you can walk to dinner, coffee, and shops from most neighborhoods. Bloomfield Hills is a city of estates: larger lots, wooded privacy, no commercial downtown, and a prestige address. Both have strong markets, but the lifestyle is completely different.",
      },
      {
        q: "Are there condos available in downtown Birmingham?",
        a: "Yes. There are several well-established condo buildings within and adjacent to the downtown core. They range from older, well-maintained buildings to newer luxury units. Prices typically start around $400K and go up depending on size, floor, and finishes.",
      },
      {
        q: "How competitive is the Birmingham real estate market?",
        a: "Very. Well-priced Birmingham homes routinely see multiple offers within the first 7–10 days. If you're serious about buying here, having your financing ready before you look is critical - not optional.",
      },
      {
        q: "Does Birmingham have good walkability compared to other Oakland County cities?",
        a: "It's the best in Oakland County by a wide margin. Residents who live within a mile of downtown can walk to dozens of restaurants, specialty retailers, and local services. That walkability premium is baked into the pricing.",
      },
    ],
    ctaVariant: "both",
  },

  {
    slug: "bloomfield-hills-mi",
    name: "Bloomfield Hills",
    county: "Oakland",
    state: "MI",
    zipCodes: ["48301", "48302", "48304"],
    marketStats: {
      medianPrice: 1531667,
      medianPriceChange: 30,
      daysOnMarket: 66,
      pricePerSqft: 233,
    },
    priceRange: {
      low: "$700K–$1M gets you an established home on a wooded lot - expect to budget for updates on older properties in this range.",
      high: "$1M–$2M covers well-maintained to fully updated estates with significant square footage and mature landscaping.",
      luxury: "Above $2M you enter the realm of custom-built estates, significant acreage, and some of the most architecturally notable homes in Southeast Michigan.",
    },
    schoolDistrict: "Bloomfield Hills School District",
    commuteToDetroit: "25 min",
    about:
      "Bloomfield Hills is one of Michigan's most prestigious addresses - a small city of roughly 4,000 residents spread across wooded, estate-sized lots. The city has no commercial downtown of its own; its identity is defined entirely by its residential character: private drives, mature tree canopy, and some of the most architecturally significant homes in the state.\n\nThe city is home to Cranbrook Educational Community, a National Historic Landmark campus that includes museums, art academies, and K–12 schools. That cultural anchor, combined with strict zoning that has kept lot sizes large and commercial intrusion minimal, has preserved the city's character across decades of market cycles.",
    realEstateOverview:
      "The housing stock in Bloomfield Hills skews larger than almost any other Southeast Michigan city - median lot sizes well exceed an acre, and square footage commonly runs 3,000–7,000+ square feet. Architectural styles include mid-century modernist homes, traditional English estates, and significant custom construction from the past 20 years.\n\nDays on market tend to be longer here than in Birmingham or Royal Oak - this is a patient, selective market where buyers are typically well-capitalized and properties are purchased for their unique characteristics rather than comparable value.",
    locationAccess: [
      "Situated between Birmingham to the south and Bloomfield Township to the north",
      "Quick access to US-24 (Telegraph Road) and M-1 (Woodward Avenue)",
      "Approximately 25 miles north of downtown Detroit",
      "Adjacent to Cranbrook, one of the nation's premier private K–12 campuses",
    ],
    schoolInfo:
      "Bloomfield Hills is served by the Bloomfield Hills School District. Andover and Lahser are the two high schools. Properties within the city boundary generally fall within this district, though edge properties should be verified with the district directly.",
    bradQuote:
      "Bloomfield Hills requires a different kind of patience than most markets. Sellers need to understand that the buyer pool for $1M+ estates is smaller and more deliberate. Buyers need to understand that what they're purchasing is genuinely irreplaceable: the acreage, the privacy, the architectural character. When the right match happens here, it's remarkable.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["birmingham-mi", "bloomfield-township-mi", "west-bloomfield-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Bloomfield Hills MI")}`,
    faqs: [
      {
        q: "Is Bloomfield Hills the same as Bloomfield Township?",
        a: "No - they're two separate municipalities. Bloomfield Hills is an incorporated city with its own city government and school district. Bloomfield Township is a much larger township that surrounds it. Both are prestigious, but Bloomfield Hills commands a higher price premium due to exclusivity and lot sizes.",
      },
      {
        q: "What schools serve Bloomfield Hills?",
        a: "The Bloomfield Hills School District serves most of the city, with Andover and Lahser as the two high schools. Cranbrook Schools, a private institution on the National Historic Landmark campus, is also located within the city and is an option for private K–12 education.",
      },
      {
        q: "Are there any starter homes in Bloomfield Hills?",
        a: "Realistically, no. The entry point is typically $700K+, and most available inventory exceeds $1M. The city's zoning keeps lot sizes large, which keeps prices high. Buyers looking for a more accessible entry into the Bloomfield area should look at Bloomfield Township.",
      },
      {
        q: "How is the Bloomfield Hills market for sellers?",
        a: "It's a patient market. Days on market run longer than surrounding cities because the buyer pool for $1M+ homes is smaller and more selective. Correct pricing strategy is critical - overpriced listings in this range sit for months. We price Bloomfield Hills listings very carefully.",
      },
    ],
    ctaVariant: "both",
  },

  {
    slug: "bloomfield-township-mi",
    name: "Bloomfield Township",
    county: "Oakland",
    state: "MI",
    zipCodes: ["48301", "48302", "48304", "48322"],
    marketStats: {
      medianPrice: 555667,
      medianPriceChange: 5.2,
      daysOnMarket: 28,
      pricePerSqft: 214,
    },
    priceRange: {
      low: "$450K–$650K gets you a solid colonial or ranch on a generous lot - likely in an established subdivision, possible cosmetic updates needed.",
      high: "$650K–$1.2M brings updated homes, lakefront access, or newer construction in premier subdivisions.",
      luxury: "Above $1.2M you have access to estate-level properties, private pond-front lots, and custom homes throughout the township's most sought-after enclaves.",
    },
    schoolDistrict: "Bloomfield Hills School District",
    commuteToDetroit: "25 min",
    about:
      "Bloomfield Township is one of Oakland County's largest and most diverse communities - a broad swath of land surrounding the City of Bloomfield Hills, encompassing dozens of established subdivisions, private lakes, and pockets of newer construction. Unlike its city neighbor, the township has a much wider price range and housing variety, making it accessible to buyers at multiple price points.\n\nThe township has no commercial downtown of its own, but sits adjacent to Birmingham and Troy, giving residents convenient access to both. Bloomfield Hills School District serves much of the township, which remains one of the area's strongest draws.",
    realEstateOverview:
      "Bloomfield Township's housing stock spans colonials and ranches from the 1950s through the 1980s to large, newer custom homes in premier subdivisions. Many properties include significant lot sizes, and lake and pond frontage is available across multiple price tiers. The condominium market here is active, particularly in communities targeting empty nesters and downsizers.\n\nAppraisal-supported pricing is critical here - the wide range of property types and conditions means comparables can vary significantly even within the same subdivision.",
    locationAccess: [
      "Surrounded by Birmingham (south), Troy (east), West Bloomfield (west), and Pontiac (north)",
      "Access via US-24 (Telegraph), Woodward Avenue (M-1), and Opdyke Road",
      "Approximately 25 miles north of downtown Detroit",
      "Adjacent to major retail corridors along Long Lake Road and Square Lake Road",
    ],
    schoolInfo:
      "Bloomfield Hills School District serves most of Bloomfield Township, including Andover and Lahser High Schools. Some edge areas of the township may fall within Pontiac or Troy school districts; verify address-specific assignments with the district.",
    bradQuote:
      "Bloomfield Township gives you Birmingham-area proximity and significantly more house for the money - larger lots, more square footage, and access to a broader range of property types than you'll find inside Birmingham proper. It's consistently one of my top recommendations for buyers who need space without sacrifice.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["birmingham-mi", "bloomfield-hills-mi", "west-bloomfield-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Bloomfield Township MI")}`,
    faqs: [
      {
        q: "What's the school district for Bloomfield Township?",
        a: "Most of Bloomfield Township is served by the Bloomfield Hills School District, which includes Andover and Lahser High Schools. Some properties near the township's edges may feed into Pontiac, Troy, or Birmingham school districts - always verify the specific address with the district before purchasing.",
      },
      {
        q: "Is Bloomfield Township more affordable than Birmingham?",
        a: "Yes, generally. The median home price in Bloomfield Township runs $100K–$200K+ below Birmingham, and you typically get more square footage and lot size. You lose the walkable downtown but gain space and a quieter residential character.",
      },
      {
        q: "Are there lakefront homes in Bloomfield Township?",
        a: "Yes. The township has numerous private lakes and ponds with waterfront properties across a range of price points. Lakefront homes here range from modest cottages to full-scale estates, and they represent some of the township's most competitive listing situations.",
      },
      {
        q: "How does Bloomfield Township compare to West Bloomfield?",
        a: "Both are strong markets with lake access and established residential character. Bloomfield Township generally runs slightly higher in price. West Bloomfield has more active lake communities and a broader inventory range. Both are served by their respective school districts - verify address-specific assignments with the relevant district.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "rochester-mi",
    name: "Rochester",
    county: "Oakland",
    state: "MI",
    zipCodes: ["48306", "48307"],
    marketStats: {
      medianPrice: 582833,
      medianPriceChange: 18.4,
      daysOnMarket: 33,
      pricePerSqft: 218,
    },
    priceRange: {
      low: "$350K–$500K gets you a well-maintained colonial or ranch in an established Rochester neighborhood, often within walking distance of the Paint Creek Trail.",
      high: "$500K–$700K brings newer construction, larger lots, or fully updated homes in premier subdivisions near downtown.",
      luxury: "Above $700K you're looking at custom-built homes, acreage properties, or significant renovations on historic streets.",
    },
    schoolDistrict: "Rochester Community School District",
    commuteToDetroit: "35 min",
    about:
      "Rochester is one of Oakland County's most beloved communities - a small city with a genuine downtown village character centered on Main Street, with the Paint Creek Trail weaving through the heart of the community. The trail connects Rochester to Rochester Hills and Lake Orion, and is one of the most-used non-motorized corridors in Oakland County.\n\nThe city has a tight-knit, community-oriented feel distinct from Birmingham's more cosmopolitan energy. Downtown Rochester hosts seasonal events, farmers markets, and a mix of independent restaurants and boutiques. Oakland University sits just north of the city, adding an academic and cultural dimension to the local fabric.",
    realEstateOverview:
      "Rochester's housing stock includes a healthy mix of established colonials and ranches from the 1960s–1980s, alongside newer in-fill construction and renovated homes in walkable blocks near downtown. Townhomes and condominiums are available at more accessible price points, particularly for buyers who want proximity to downtown without a large single-family maintenance commitment.\n\nDemand in Rochester is consistent and the market is competitive - the combination of walkable downtown, trail access, and community character creates broad appeal across buyer profiles.",
    locationAccess: [
      "Located at the intersection of Rochester Road and University Drive, approximately 30 miles north of Detroit",
      "Access via M-59 (Auburn Road), Avon Road, and Rochester Road",
      "Paint Creek Trail runs directly through downtown and connects north to Rochester Hills and Lake Orion",
      "Oakland University located adjacent to Rochester Hills, approximately 3 miles from downtown",
    ],
    schoolInfo:
      "Rochester is served by the Rochester Community School District. Adams, Rochester, and Stoney Creek High Schools serve the secondary level. Verify address-specific school assignments with the district before purchasing.",
    bradQuote:
      "Rochester punches above its weight class in almost every measurable category - the downtown, the Paint Creek Trail, the community feel. What surprises buyers is how competitive it is; you'd think a city this size would have more inventory, but demand consistently outpaces supply. If you want Rochester, you need to move fast when the right one comes up.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["rochester-hills-mi", "lake-orion-mi", "oxford-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Rochester MI")}`,
    faqs: [
      {
        q: "What is the Paint Creek Trail and how does it affect Rochester real estate?",
        a: "The Paint Creek Trail is a 8.9-mile non-motorized trail running from Rochester's downtown north to Lake Orion. Properties near the trail command a premium, and trail access is one of the most-cited reasons buyers choose Rochester over similar nearby cities.",
      },
      {
        q: "Is Rochester different from Rochester Hills?",
        a: "Yes - they're two separate municipalities. Rochester is a small city with a distinct downtown village. Rochester Hills is a much larger city with a suburban character and no comparable downtown. Both share the Rochester Community School District (Adams, Rochester, and Stoney Creek High Schools), but the lifestyle and price point differ.",
      },
      {
        q: "Are there condos or townhomes available in Rochester?",
        a: "Yes, particularly near downtown. There are several well-established condo and townhome communities in and around Rochester's downtown corridor, generally ranging from $280K–$450K. They're popular with buyers who want the Rochester lifestyle without the maintenance of a detached home.",
      },
      {
        q: "How close is Oakland University to Rochester?",
        a: "Oakland University's campus in Rochester Hills is approximately 3 miles from downtown Rochester. The university adds cultural programming, athletics, and an arts center to the area, but doesn't significantly impact residential pricing the way a typical college town might.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "rochester-hills-mi",
    name: "Rochester Hills",
    county: "Oakland",
    state: "MI",
    zipCodes: ["48306", "48307", "48309"],
    marketStats: {
      medianPrice: 422983,
      medianPriceChange: -17.4,
      daysOnMarket: 28,
      pricePerSqft: 194,
    },
    priceRange: {
      low: "$300K–$420K gets you a solid ranch or colonial in an established subdivision - often updated kitchens or baths, good lot sizes.",
      high: "$420K–$600K brings newer construction, larger homes, or well-renovated properties in the city's premier subdivisions.",
      luxury: "Above $600K you have access to executive-level homes, custom builds, and properties on larger parcels in the city's northern sections.",
    },
    schoolDistrict: "Rochester Community School District",
    commuteToDetroit: "35 min",
    about:
      "Rochester Hills is one of Oakland County's larger cities by area and population - a sprawling suburban community with dozens of established subdivisions, convenient access to major employment corridors, and exceptional quality of life fundamentals. Unlike its neighbor Rochester, it lacks a walkable downtown core, but compensates with a wide variety of housing and accessible price points.\n\nThe city is home to multiple parks, Stony Creek Metropark at its northern edge, and Oakland University within its boundaries. The combination of employment proximity, housing variety, and park access makes Rochester Hills consistently one of the highest-demand cities in Oakland County.",
    realEstateOverview:
      "Rochester Hills offers one of the broadest ranges of housing stock in Oakland County - from affordable 1,400-square-foot ranches to 4,000+ square foot executive colonials in gated communities. New construction is available in select areas, and the condo market is active near major corridors.\n\nThe market here is reliable and liquid. Homes priced accurately in Rochester Hills sell quickly across all price tiers. Employment proximity, housing variety, and trail and park access create broad and consistent buyer demand.",
    locationAccess: [
      "Bounded by Auburn Hills to the north, Troy to the south, Oakland Township to the east, and Pontiac to the west",
      "Access via M-59 (Auburn Road), Avon Road, Adams Road, and Rochester Road",
      "Oakland University campus within city limits",
      "Approximately 30 miles north of downtown Detroit via I-75 or Rochester Road",
    ],
    schoolInfo:
      "Rochester Hills is served by the Rochester Community School District. Adams and Rochester High Schools serve secondary students. Property-specific school assignments should be verified with the district, as several subdivision boundaries fall near district boundary lines.",
    bradQuote:
      "Rochester Hills is my workhorse market - it delivers for buyers at almost every price point. You get great parks, easy highway access, and a lot of house for the money compared to Birmingham or Bloomfield. I've placed more buyers here than almost anywhere else in Oakland County.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["rochester-mi", "troy-mi", "lake-orion-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Rochester Hills MI")}`,
    faqs: [
      {
        q: "Does Rochester Hills share a school district with the City of Rochester?",
        a: "Yes. Both the City of Rochester and Rochester Hills are served by the Rochester Community School District. Adams and Rochester High Schools serve secondary students. Verify address-specific assignments with the district before purchasing.",
      },
      {
        q: "Is Rochester Hills a city or a township?",
        a: "Rochester Hills is a charter city, incorporated in 1984. It was previously known as Avon Township. Despite the suburban feel, it has its own city government, police department, and services distinct from Oakland Township and other surrounding municipalities.",
      },
      {
        q: "What's the price difference between Rochester Hills and Troy?",
        a: "They're roughly comparable at the median, though Troy tends to run slightly higher due to proximity to the I-75 employment corridor and Somerset Collection. Rochester Hills often offers more lot size per dollar, particularly in the northern sections of the city.",
      },
      {
        q: "Are there new construction homes available in Rochester Hills?",
        a: "Yes, in select communities, though land availability limits it. Several builders have active communities in the northern portions of Rochester Hills near Oakland Township. These typically range from $550K–$800K for new builds.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "troy-mi",
    name: "Troy",
    county: "Oakland",
    state: "MI",
    zipCodes: ["48083", "48084", "48085", "48098"],
    marketStats: {
      medianPrice: 402167,
      medianPriceChange: -17.2,
      daysOnMarket: 31,
      pricePerSqft: 216,
    },
    priceRange: {
      low: "$350K–$480K gets you a solid colonial or ranch in one of Troy's many established subdivisions, often well-maintained and move-in ready.",
      high: "$480K–$750K brings executive colonials, updated homes in premier subdivisions, and newer construction options.",
      luxury: "Above $750K you're looking at custom builds, large executive homes in gated communities, and properties backing to Auburn Hills employment corridors.",
    },
    schoolDistrict: "Troy School District",
    commuteToDetroit: "25 min",
    about:
      "Troy is one of Michigan's most significant commercial and residential cities - a major I-75 employment hub that is home to dozens of corporate headquarters, the Somerset Collection (one of Michigan's premier luxury malls), and a highly diverse population of over 85,000 residents. The city is one of Oakland County's largest, and its residential real estate market reflects that scale: diverse inventory, consistent demand, and strong long-term value retention.\n\nResidential Troy is quieter than its commercial reputation suggests. The city is organized into dozens of well-maintained subdivisions with tree-lined streets, active homeowner associations, and strong neighborhood identities. The combination of employment proximity, highway access, and housing variety makes Troy one of Oakland County's most perpetually in-demand markets.",
    realEstateOverview:
      "Troy offers housing at a range of price points, from affordable condos and townhomes to executive-level colonials and custom homes in premier subdivisions. The bulk of the housing stock was built between the 1960s and 1990s, with consistent renovation activity keeping properties updated and competitive.\n\nDemand in Troy is driven by a combination of employment proximity (major tech, automotive, and financial employers within or adjacent to the city), highway access, and a well-established residential character across dozens of subdivisions.",
    locationAccess: [
      "Bordered by Birmingham (west), Rochester Hills (north), Sterling Heights (east), and Royal Oak (south)",
      "Direct access to I-75, I-696, and Crooks Road - one of Oakland County's most connected cities",
      "Somerset Collection and major retail corridors along Big Beaver Road (16 Mile)",
      "Approximately 25 miles north of downtown Detroit via I-75",
    ],
    schoolInfo:
      "Troy is served by the Troy School District. Athens and Troy High Schools serve secondary students; school assignment depends on address-specific boundaries within the city. Verify the specific assignment for any property with the district.",
    bradQuote:
      "I cannot think of a market in Southeast Michigan with more consistent fundamentals than Troy. Major employers right there, highway access in every direction, housing variety at every price point - Troy has held value through every downturn I've witnessed. When clients are nervous about making a move, I often point them to Troy because the data does the reassuring.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["rochester-hills-mi", "birmingham-mi", "sterling-heights-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Troy MI")}`,
    faqs: [
      {
        q: "What are the two high schools in Troy and how do I know which one my property feeds?",
        a: "Troy has Athens High School and Troy High School. School assignment is determined by address - properties west of specific boundary roads feed Athens, and those east feed Troy High. We verify the specific assignment for any property before buyers commit.",
      },
      {
        q: "Is Troy a good city to invest in real estate?",
        a: "Troy has among the strongest long-term value retention in Southeast Michigan, driven by employment concentration, housing diversity, and highway access. It's one of the few markets that held value well even during the 2008 downturn, which speaks to its fundamental demand drivers.",
      },
      {
        q: "How is Troy's market different from Bloomfield Hills or Birmingham?",
        a: "Troy is more affordable and more liquid. It lacks Birmingham's walkable downtown or Bloomfield's estate character, but it offers superior highway access, more housing variety, and a larger pool of buyers when you go to sell.",
      },
      {
        q: "Are there condos available in Troy?",
        a: "Yes - Troy has one of the larger condo markets in Oakland County, particularly along Big Beaver Road and near the Somerset Collection. These range from modestly priced units in the $200Ks to luxury high-rise style condos in the $500K+ range.",
      },
    ],
    ctaVariant: "both",
  },

  {
    slug: "west-bloomfield-mi",
    name: "West Bloomfield",
    county: "Oakland",
    state: "MI",
    zipCodes: ["48322", "48323", "48324"],
    marketStats: {
      medianPrice: 382500,
      medianPriceChange: 2.9,
      daysOnMarket: 32,
      pricePerSqft: 198,
    },
    priceRange: {
      low: "$380K–$550K gets you a spacious colonial or ranch in an established subdivision - often larger lot sizes than comparable prices in Troy or Birmingham.",
      high: "$550K–$850K brings lakefront access, well-updated executive homes, and newer construction in West Bloomfield's premier communities.",
      luxury: "Above $850K you're looking at Walnut Lake or Orchard Lake waterfront estates, custom-built homes, and properties with significant privacy and acreage.",
    },
    schoolDistrict: "West Bloomfield School District",
    commuteToDetroit: "30 min",
    about:
      "West Bloomfield Township is one of Oakland County's most established lake communities - a broad, wooded township dotted with private and semi-private lakes including Walnut Lake, Orchard Lake, and Pine Lake. The community has a quieter, more residential character than its Birmingham and Troy neighbors, with a strong emphasis on private lake living and suburban comfort.\n\nWest Bloomfield has a large and established Jewish community that has shaped much of the township's cultural infrastructure, including a concentration of delis, specialty grocers, synagogues, and community organizations along Orchard Lake Road. The township's population is roughly 65,000, and the housing market reflects a wide range of buyer profiles, from first-time buyers to long-established residents.",
    realEstateOverview:
      "West Bloomfield's housing market ranges from entry-level ranches and colonials in established inland subdivisions to multi-million dollar lakefront estates on Walnut Lake and Orchard Lake. The mid-range market ($400K–$700K) is particularly active, with strong demand from buyers in the West Bloomfield School District boundaries and those seeking more lot size than Birmingham or Troy offers at comparable prices.\n\nLakefront properties in West Bloomfield represent their own distinct market segment with premium pricing driven by scarcity and recreational value.",
    locationAccess: [
      "Located west of Bloomfield Township and east of Commerce Township",
      "Access via Orchard Lake Road, Northwestern Highway (M-10), and Telegraph Road (US-24)",
      "Approximately 25 miles northwest of downtown Detroit",
      "Strong retail corridor along Orchard Lake Road and 14 Mile Road",
    ],
    schoolInfo:
      "West Bloomfield Township is primarily served by the West Bloomfield School District. West Bloomfield High School serves most of the township; some border areas fall within Walled Lake Schools. Verify the specific school assignment for any address before purchasing.",
    bradQuote:
      "West Bloomfield's lake communities have been among the most loyal markets I've worked in my career. Walnut Lake, Orchard Lake, Pine Lake - those addresses attract buyers who know exactly what they want and aren't easily deterred. For sellers, the lifestyle premium is real and I've seen it hold value even when other Oakland County markets have softened.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["bloomfield-township-mi", "bloomfield-hills-mi", "novi-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("West Bloomfield MI")}`,
    faqs: [
      {
        q: "What lakes are in West Bloomfield and are they open to all residents?",
        a: "West Bloomfield has several notable lakes including Walnut Lake, Orchard Lake, Pine Lake, and Upper Straits Lake. Access varies - some are private with riparian rights restricted to lakefront owners, while others have semi-public access points. Lakefront property buyers need to understand access rights specific to each lake.",
      },
      {
        q: "Is West Bloomfield in Bloomfield Hills School District?",
        a: "No - West Bloomfield Township is primarily served by the West Bloomfield School District, with West Bloomfield High School as the main secondary school. Some edge areas may fall within Walled Lake or Pontiac school districts. This is different from the Bloomfield Hills School District that serves Bloomfield Township and the City of Bloomfield Hills.",
      },
      {
        q: "How does West Bloomfield compare to Bloomfield Township for home prices?",
        a: "West Bloomfield generally runs slightly below Bloomfield Township at the median, offering more home for the money in many cases. Both are served by their respective school districts - verify address-specific assignments directly with the district.",
      },
      {
        q: "Are there new construction homes in West Bloomfield?",
        a: "Limited new construction is available in select areas, particularly in communities near Pontiac Trail and Maple Road corridors. Much of the township is built out, but infill construction and teardown-rebuild activity does occur in premium lakefront areas.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "royal-oak-mi",
    name: "Royal Oak",
    county: "Oakland",
    state: "MI",
    zipCodes: ["48067", "48073"],
    marketStats: {
      medianPrice: 340500,
      medianPriceChange: -1.4,
      daysOnMarket: 44,
      pricePerSqft: 250,
    },
    priceRange: {
      low: "$280K–$380K gets you a bungalow or cape cod in one of Royal Oak's established neighborhoods - often these are the renovator's opportunity in a desirable location.",
      high: "$380K–$550K brings fully updated bungalows, well-maintained colonials, and newer construction within walking distance of downtown.",
      luxury: "Above $550K you're looking at new custom construction, high-end renovations, or premium condos in the downtown core.",
    },
    schoolDistrict: "Royal Oak School District",
    commuteToDetroit: "15 min",
    about:
      "Royal Oak is one of Southeast Michigan's most vibrant and diverse communities - a compact, walkable city just 15 miles from downtown Detroit with a thriving arts scene, independent restaurant culture, and one of the most active real estate markets in Oakland County. The city's Main Street corridor and Washington Avenue create a pedestrian-friendly downtown that rivals Birmingham's in energy if not in scale.\n\nThe city is known for its bungalow housing stock - thousands of 1920s–1940s craftsman-style homes that continue to attract buyers who value character, neighborhood density, and walkability. Royal Oak also has the Detroit Zoo within its city limits, one of the finest metropolitan zoos in the United States.",
    realEstateOverview:
      "Royal Oak's market is driven by strong buyer demand from first-time homebuyers, Detroit exurban buyers seeking walkability, and investors targeting the city's renovation-ready bungalow stock. Homes here move faster than almost anywhere else in Oakland County - well-priced listings routinely sell within days.\n\nNew construction activity, including luxury infill and condo development near downtown, has added a higher-priced segment to the market. The broad range from affordable bungalows to luxury new builds makes Royal Oak one of the most demographically diverse buyer markets in Southeast Michigan.",
    locationAccess: [
      "Approximately 15 miles north of downtown Detroit via Woodward Avenue (M-1)",
      "I-696 access at Woodward and Crooks Road",
      "Adjacent to Birmingham (north), Ferndale (south), and Berkley (west)",
      "Excellent walkability from most streets to downtown retail and restaurant corridors",
    ],
    schoolInfo:
      "Royal Oak is served by the Royal Oak School District, with Royal Oak High School as the single secondary school. The district is well-regarded and serves the entire city. The compact city boundaries mean most properties are within a straightforward distance from school buildings.",
    bradQuote:
      "I have watched Royal Oak transform over the course of my career from the affordable alternative to Birmingham into one of Oakland County's most competitive markets in its own right. The walkability, the character housing, the proximity to Detroit - it now has its own identity and buyer pool that isn't just driven by overflow from Birmingham. That's a sign of a truly healthy market.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["birmingham-mi", "troy-mi", "bloomfield-township-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Royal Oak MI")}`,
    faqs: [
      {
        q: "Is Royal Oak a good place to buy a first home?",
        a: "Royal Oak is one of the best markets in Southeast Michigan for first-time buyers who value walkability and character housing. The entry point starts in the upper $200s for bungalows needing cosmetic work, and the long-term appreciation history is strong. The competition is fierce, but it rewards prepared buyers.",
      },
      {
        q: "Are the bungalows in Royal Oak expensive to maintain?",
        a: "Homes built in the 1920s–1940s can have deferred maintenance needs - older electrical, original windows, aging plumbing. Many have been updated, but pre-inspection diligence matters here more than in newer-construction cities. A $10K–$20K systems budget isn't unreasonable for an uninspected bungalow purchase.",
      },
      {
        q: "How does Royal Oak compare to Birmingham?",
        a: "Both are walkable Oakland County cities with strong downtowns. Birmingham runs $200K–$300K+ higher in median price and has a more upscale retail character. Royal Oak has more restaurant diversity, a younger demographic energy, and a significantly lower entry price. Buyers who can't afford Birmingham often find Royal Oak delivers a comparable lifestyle.",
      },
      {
        q: "Is parking a challenge in Royal Oak?",
        a: "Near downtown, yes - parking is limited on weekends and evenings, which is typical for a walkable urban environment. Most residential streets have adequate on-street parking, and the city has multiple public parking structures within the downtown core.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "clarkston-mi",
    name: "Clarkston",
    county: "Oakland",
    state: "MI",
    zipCodes: ["48346", "48347", "48348"],
    marketStats: {
      medianPrice: 370833,
      medianPriceChange: 3.9,
      daysOnMarket: 17,
      pricePerSqft: 188,
    },
    priceRange: {
      low: "$320K–$480K gets you a solid suburban home in an established Clarkston-area subdivision - often with more lot size than you'd get at similar prices in southern Oakland County.",
      high: "$480K–$750K brings updated homes near the village, lake access, or newer construction in premium Independence Township communities.",
      luxury: "Above $750K opens up acreage properties, lake-front estates, and truly rural parcels that don't exist in other parts of Oakland County.",
    },
    schoolDistrict: "Clarkston Community School District",
    commuteToDetroit: "45 min",
    about:
      "Clarkston is a genuinely distinct community in Oakland County's northern reaches - a village with authentic small-town character, beloved by buyers who want to leave dense suburban living behind without completely abandoning metro area amenities. The Village of Clarkston (a separate incorporated entity from Independence Township) has one of the most charming downtown streets in Oakland County, anchored by the Clarkston Union restaurant and a collection of locally-owned businesses.\n\nThe broader Clarkston area includes Independence Township, Springfield Township, and portions of other surrounding municipalities - all marketed under the Clarkston name. Pine Knob (now Pine Knob Music Theatre), Deer Lake, and multiple natural areas are defining recreational assets. Buyers who discover Clarkston frequently describe it as the kind of place they weren't looking for but couldn't leave.",
    realEstateOverview:
      "The Clarkston area offers a genuinely diverse real estate inventory - from modest ranches in established subdivisions to lakefront estates and rural acreage parcels that are impossible to find in southern Oakland County. New construction activity is limited, preserving the area's natural character.\n\nThe market runs at a slightly slower pace than Troy or Rochester Hills, giving buyers a bit more time to make decisions. But well-priced properties in the village and on popular lakes still see strong demand.",
    locationAccess: [
      "Located at I-75 and Dixie Highway (M-15), approximately 40 miles north of downtown Detroit",
      "Quick access to I-75 for commuting south toward Troy, Auburn Hills, and Detroit",
      "Pine Knob Music Theatre and DTE Energy Music Theatre adjacent to Clarkston",
      "Deer Lake, Cranberry Lake, and multiple Oakland County parks within close proximity",
    ],
    schoolInfo:
      "Clarkston Community School District serves the area, with Clarkston High School as the sole secondary school. Verify address-specific school assignments with the district before purchasing.",
    bradQuote:
      "Clarkston is one of those markets where buyers arrive skeptical and leave converted. I've had clients who called it 'too far out' on Monday and were writing an offer by Saturday after we toured the village. There is a quality of life here - the village character, the lakes, the natural setting - that photographs honestly don't capture. Buyers who make the move here almost never regret it.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["lake-orion-mi", "oxford-mi", "rochester-hills-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Clarkston MI")}`,
    faqs: [
      {
        q: "Is the Village of Clarkston different from Independence Township?",
        a: "Yes. The Village of Clarkston is a tiny (less than 1 square mile) incorporated village with its own government, located within Independence Township. When most people say 'Clarkston' in a real estate context, they're generally referring to the broader Independence Township area served by Clarkston schools.",
      },
      {
        q: "How long is the commute from Clarkston to Detroit?",
        a: "Plan on 40–50 minutes to downtown Detroit in normal conditions, primarily via I-75. The commute to Troy and Auburn Hills runs 20–30 minutes. This is a genuine trade-off - Clarkston buyers tend to be buyers who have accepted the drive in exchange for the lifestyle.",
      },
      {
        q: "Are there lakefront homes available in the Clarkston area?",
        a: "Yes - several lakes including Deer Lake, Cranberry Lake, Lake Louise, and others have private lakefront properties. These range from mid-priced cottages to significant lakefront estates. Lake access is one of Clarkston's strongest market differentiators.",
      },
      {
        q: "Is Clarkston in Oakland County or Lapeer County?",
        a: "Most of what's referred to as Clarkston - Independence Township and the village itself - is in Oakland County. Some adjacent areas and rural parcels marketed under the Clarkston name may cross into Lapeer County. Always verify the county and tax jurisdiction on specific properties.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "lake-orion-mi",
    name: "Lake Orion",
    county: "Oakland",
    state: "MI",
    zipCodes: ["48360", "48361", "48362"],
    marketStats: {
      medianPrice: 312500,
      medianPriceChange: 0,
      daysOnMarket: 45,
      pricePerSqft: 187,
    },
    priceRange: {
      low: "$250K–$350K gets you a non-waterfront home in Orion Township - often ranch or colonial with reasonable lot sizes.",
      high: "$350K–$550K brings well-updated homes, newer construction, or lake access properties on smaller lakes.",
      luxury: "Above $550K opens up direct frontage on Lake Orion and larger private lakes, with a handful of true estates at the high end.",
    },
    schoolDistrict: "Lake Orion Community School District",
    commuteToDetroit: "40 min",
    about:
      "Lake Orion is northern Oakland County's recreational centerpiece - a community defined by the 520-acre Lake Orion at its core, surrounded by a charming village downtown and miles of Paint Creek Trail connectivity to the south. The village has a genuine small-town character with seasonal activity around the lake, annual events, and a local retail and dining scene that punches above its size.\n\nThe broader Lake Orion market includes Orion Township, which offers a wider range of housing types from affordable ranches to newer construction communities. The General Motors Orion Assembly Plant, one of GM's most modern facilities, is located in Orion Township - a significant local employment anchor.",
    realEstateOverview:
      "Lake Orion's real estate market offers two distinct segments: the lakefront market, driven by recreational demand and scarcity, and the broader non-waterfront suburban market in Orion Township. The non-waterfront market is more price-accessible, offering good value relative to southern Oakland County cities.\n\nWaterfront properties on Lake Orion itself command significant premiums and have their own set of township regulations regarding dock permits, shoreline use, and seasonal access.",
    locationAccess: [
      "Located at M-24 (Lapeer Road) and Clarkston Road, approximately 35 miles north of Detroit",
      "Paint Creek Trail connects south through Rochester Hills toward Rochester",
      "M-24 provides direct access to Auburn Hills (GM/Stellantis corridor) 15 miles south",
      "I-75 access via Joslyn Road interchange approximately 5 miles west",
    ],
    schoolInfo:
      "Lake Orion Community School District serves the village and Orion Township, with Lake Orion High School as the secondary school. School assignment should be verified for specific addresses near district boundary lines.",
    bradQuote:
      "Lake Orion is where I send buyers who want Rochester's trail-and-village vibe at a 20% discount. The lake is genuinely beautiful, the village has real character, and Orion Township has a lot of value in the non-waterfront inventory that gets overlooked because people fixate on waterfront prices. Smart buyers see the opportunity here.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["rochester-mi", "clarkston-mi", "oxford-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Lake Orion MI")}`,
    faqs: [
      {
        q: "Are Lake Orion waterfront homes restricted in how they can be used?",
        a: "Lake Orion has specific township ordinances governing dock permits, boat storage, and shoreline modifications. Waterfront buyers should review current Orion Township ordinances and any lake-specific regulations before purchasing. Some older cottages have grandfathered dock rights that don't transfer to new construction.",
      },
      {
        q: "How does Lake Orion compare to Clarkston for home prices?",
        a: "Lake Orion generally runs slightly below Clarkston, particularly in the non-waterfront market. Both serve similar buyer profiles - buyers who want northern Oakland County character at prices below the southern corridor. Clarkston's village is generally considered more upscale in character.",
      },
      {
        q: "Is the GM Orion Assembly Plant a good or bad thing for home values?",
        a: "It's been a net positive for the area - the plant is a major local employer and has invested significantly in the community. It doesn't have a meaningful negative impact on residential neighborhoods because it's separated from residential areas. If anything, the employment base supports demand.",
      },
      {
        q: "What is the Paint Creek Trail connection to Lake Orion?",
        a: "The Paint Creek Trail's northern terminus is in Lake Orion village, connecting south through Rochester Hills and into the City of Rochester. Properties near the trail in Lake Orion benefit from recreational access and are priced accordingly.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "oxford-mi",
    name: "Oxford",
    county: "Oakland",
    state: "MI",
    zipCodes: ["48370", "48371"],
    marketStats: {
      medianPrice: 285800,
      medianPriceChange: -1.9,
      daysOnMarket: 88,
      pricePerSqft: 171,
    },
    priceRange: {
      low: "$220K–$320K gets you a solid ranch or colonial in Oxford Township - often on a generous lot with more space than comparable prices anywhere in southern Oakland County.",
      high: "$320K–$480K brings newer construction communities, updated homes in the village area, or acreage properties with rural character.",
      luxury: "Above $480K opens up equestrian properties, larger rural parcels, and custom builds in Oxford Township's more rural northern sections.",
    },
    schoolDistrict: "Oxford Community School District",
    commuteToDetroit: "50 min",
    about:
      "Oxford is one of Oakland County's northernmost communities - a village and township with a rural character, small-town downtown, and price points that offer significant value relative to the county's southern tier. Oxford Village has an authentic historic character with local restaurants, antique shops, and a community feel that's increasingly rare in suburban Michigan.\n\nThe community gained national attention in late 2021 for difficult reasons, and the subsequent years have shown a community actively engaged in healing and rebuilding. For buyers, Oxford offers genuine value, rural character, and a school district that has worked hard to rebuild community trust and support.",
    realEstateOverview:
      "Oxford's market offers a range that includes everything from modest village homes and subdivisions to genuine rural acreage, equestrian properties, and lakefront parcels. It's one of the few remaining places in Oakland County where a buyer can acquire meaningful land at a reasonable price.\n\nNew construction activity has been moderate in Oxford Township, primarily in planned residential communities with suburban amenities. The market generally moves at a slightly slower pace than southern Oakland County cities, giving buyers more time to make considered decisions.",
    locationAccess: [
      "Located at M-24 and Lapeer Road, approximately 45 miles north of Detroit",
      "Access via M-24 south to Auburn Hills, Lake Orion, and Pontiac",
      "Orion Township and Lake Orion are the nearest comparable communities, approximately 10 miles south",
      "Rural road network connects to Lapeer County and northern Michigan corridor",
    ],
    schoolInfo:
      "Oxford Community School District serves the village and township, with Oxford High School as the secondary school. The district has undertaken significant investments in student support services and school safety in recent years. Academic programs are comprehensive, and the district is actively working to rebuild its community standing.",
    bradQuote:
      "Oxford is for the buyer who genuinely wants space, values, and rural authenticity - and isn't hung up on the commute. You can still get acreage in Oakland County here, which is almost impossible in the southern tier anymore. The community is resilient, prices reflect real value, and I think the long-term trajectory is positive for buyers who are patient.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["lake-orion-mi", "clarkston-mi", "rochester-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Oxford MI")}`,
    faqs: [
      {
        q: "Is Oxford a good place to buy a home in 2025?",
        a: "Oxford offers genuine value - lower prices, more lot size, and rural character that's increasingly hard to find in Oakland County. The community has shown resilience and continued market activity since 2021. Buyers who are drawn to rural character and space per dollar will find Oxford compelling.",
      },
      {
        q: "Can you buy acreage or farmland in Oxford?",
        a: "Yes - Oxford Township has one of the remaining inventory pools for acreage, equestrian properties, and rural parcels in Oakland County. Five-to-twenty-acre properties are available at prices that would be impossible to find 10–15 miles to the south.",
      },
      {
        q: "What is the commute like from Oxford to Auburn Hills or Troy?",
        a: "Auburn Hills is approximately 20–25 minutes south via M-24. Troy runs 35–45 minutes. The commute to Detroit is 50+ minutes. Oxford is a genuine commute - buyers need to be honest with themselves about whether the rural lifestyle trade-off is worth it for their specific work situation.",
      },
      {
        q: "Is Oxford different from Lake Orion?",
        a: "Yes. Oxford is approximately 10 miles north of Lake Orion, further from Detroit, with a more rural character and lower price points. Lake Orion has the recreational lake anchor and the Paint Creek Trail connection. Oxford has more acreage availability and a more distinctly rural feel.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "novi-mi",
    name: "Novi",
    county: "Oakland",
    state: "MI",
    zipCodes: ["48374", "48375", "48377"],
    marketStats: {
      medianPrice: 383833,
      medianPriceChange: 6.2,
      daysOnMarket: 32,
      pricePerSqft: 204,
    },
    priceRange: {
      low: "$330K–$450K gets you a solid suburban home in an established Novi subdivision or a newer condo in a well-maintained community.",
      high: "$450K–$700K brings executive colonials, newer construction, or premium homes in Novi's lakefront communities.",
      luxury: "Above $700K opens up lake homes on Walled Lake and Novi's private lakes, plus custom construction in the city's most exclusive developments.",
    },
    schoolDistrict: "Novi Community School District",
    commuteToDetroit: "30 min",
    about:
      "Novi is one of Oakland County's most strategically positioned cities - a major I-96 corridor hub with diverse housing, significant commercial development, and a growing population that has made it one of Michigan's fastest-growing cities over the past two decades. The city is home to Twelve Oaks Mall, major employer campuses, and Walled Lake, which provides waterfront living access within the city limits.\n\nNovi has one of the most diverse populations in Oakland County, with a significant South Asian community that has shaped the city's restaurant, retail, and cultural infrastructure. The combination of highway access, housing variety, and a diverse community character makes Novi a consistently high-demand market.",
    realEstateOverview:
      "Novi's housing market covers substantial ground - from affordable condos in planned communities to lakefront estates on Walled Lake. New construction has been a consistent feature of the Novi market, with active builder communities in various stages throughout the city.\n\nProximity to major employer campuses in Southfield, Auburn Hills, and along the M-5 corridor drives consistent demand, along with the city's highway access and housing diversity. The market is active and competitive at most price points.",
    locationAccess: [
      "Located at I-96 and Beck Road, one of Oakland County's best-connected highway positions",
      "M-5 (Grand River Avenue) provides direct access east toward Southfield and west toward Brighton",
      "Twelve Oaks Mall and major retail corridor along Grand River Avenue",
      "Approximately 25 miles northwest of downtown Detroit",
    ],
    schoolInfo:
      "Novi Community School District serves the city, with Novi High School as the sole secondary school. Verify address-specific assignments with the district before purchasing.",
    bradQuote:
      "Novi is one of the most well-rounded markets in Oakland County right now. You've got new construction still available, lake access options, a diverse restaurant and retail scene, and I-96 right there. Buyers who've been comparing Novi to West Bloomfield or Bloomfield Township often end up in Novi because you get more for your dollar.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["west-bloomfield-mi", "bloomfield-township-mi", "northville-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Novi MI")}`,
    faqs: [
      {
        q: "What lakes are in Novi and can anyone buy waterfront?",
        a: "Walled Lake is the largest body of water associated with Novi, though much of its shoreline is in the City of Walled Lake. Novi also has several smaller private lakes within planned communities. Waterfront availability is limited and commands a significant premium - these properties move quickly when they list.",
      },
      {
        q: "Is there new construction available in Novi?",
        a: "Yes - Novi is one of the few established Oakland County cities where new construction communities are still actively developing. Several builders have active phases throughout the city, typically ranging from $500K–$800K+ for new detached homes.",
      },
      {
        q: "How is Novi's diversity and what does it mean for buyers?",
        a: "Novi has one of the most diverse populations in Oakland County, with a particularly strong South Asian community. That diversity is reflected in an exceptional range of international restaurants, cultural organizations, and a vibrant community fabric. Many buyers specifically seek out Novi for this character.",
      },
      {
        q: "Is Novi expensive compared to other I-96 corridor cities?",
        a: "Novi runs higher than Plymouth or Livonia but below Birmingham or Bloomfield Township at comparable quality levels. For the highway access, housing diversity, and overall market strength, most buyers consider Novi fairly priced relative to its fundamentals.",
      },
    ],
    ctaVariant: "buyer",
  },

  // ─── MACOMB COUNTY ────────────────────────────────────────────────────────

  {
    slug: "shelby-township-mi",
    name: "Shelby Township",
    county: "Macomb",
    state: "MI",
    zipCodes: ["48315", "48316", "48317"],
    marketStats: {
      medianPrice: 340500,
      medianPriceChange: 3.5,
      daysOnMarket: 19,
      pricePerSqft: 168,
    },
    priceRange: {
      low: "$280K–$370K gets you a solid brick ranch or colonial in an established Shelby Township subdivision - often with newer mechanicals and move-in ready condition.",
      high: "$370K–$550K brings newer construction, larger lots, or well-updated executive homes in premium Shelby communities.",
      luxury: "Above $550K opens up custom builds, larger acreage properties, and the newer estate developments near 26 Mile Road and Rochester Road corridors.",
    },
    schoolDistrict: "Utica Community Schools",
    commuteToDetroit: "35 min",
    about:
      "Shelby Township sits at the Oakland-Macomb county line - geographically and culturally - giving buyers proximity to Oakland County's lifestyle amenities at Macomb County price points. The township is established, well-maintained, and home to Stony Creek Metropark, one of Southeast Michigan's most-used outdoor recreation facilities with trails, beaches, and a golf course.\n\nShelby Township has a strong concentration of newer construction built over the past 20 years, particularly in the northern sections near 25 Mile and 26 Mile Roads. The township population is roughly 80,000, making it one of Michigan's larger townships, and the quality of the housing stock is consistently high.",
    realEstateOverview:
      "Shelby Township offers exceptional value relative to neighboring Oakland County cities. Buyers who start their search in Rochester Hills or Troy frequently end up here when they realize they can get a newer, larger home with a bigger lot for $50K–$100K less across the county line.\n\nThe market is active and competitive, with consistent demand from buyers within Utica Community Schools boundaries and those who value the Stony Creek access. Inventory is broader than many comparable cities, which gives buyers slightly more flexibility.",
    locationAccess: [
      "Located at the Oakland-Macomb county line, bounded by Rochester Hills to the west",
      "Access via M-53 (Van Dyke), 23 Mile Road, 24 Mile Road, and Rochester Road",
      "Stony Creek Metropark (4,461 acres) within township boundaries",
      "Approximately 30 miles north of downtown Detroit via I-75 or M-53",
    ],
    schoolInfo:
      "Most of Shelby Township is served by Utica Community Schools, with Eisenhower and Utica High Schools serving secondary students depending on address. Some western portions of the township may feed into Rochester Community Schools - verify the specific address with the district.",
    bradQuote:
      "If you're looking for a place that feels a bit more 'open' without losing any of the perks, Shelby Township is the spot. It's got a great, laid-back energy, mostly thanks to Stony Creek Metropark being right in your backyard for hiking, biking, or just hanging by the water. You get that perfect mix of beautiful established neighborhoods and all the shopping along Hall Road, but it still manages to feel peaceful and tucked away. It's basically suburban living with a huge side of nature.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["rochester-hills-mi", "macomb-township-mi", "sterling-heights-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Shelby Township MI")}`,
    faqs: [
      {
        q: "Is Shelby Township in Oakland or Macomb County?",
        a: "Shelby Township is in Macomb County, though it borders Oakland County directly to the west (Rochester Hills and Auburn Hills). This county-line position is actually one of its strongest selling points - you get Macomb pricing with Oakland County proximity.",
      },
      {
        q: "What school district is Shelby Township in?",
        a: "The majority of Shelby Township is served by Utica Community Schools, with Eisenhower and Utica High Schools. Some properties on the western edge may feed into Rochester Community Schools. Always verify the specific property address with the school district before purchasing.",
      },
      {
        q: "How close is Stony Creek Metropark to Shelby Township homes?",
        a: "Stony Creek Metropark occupies the southeastern corner of Shelby Township and spills into neighboring communities. Depending on your address, you can literally walk or bike to the park. It's a genuine lifestyle amenity - 4,461 acres with trails, a swim beach, golf, and winter activities.",
      },
      {
        q: "How does Shelby Township compare to Macomb Township?",
        a: "Shelby Township is generally more established with a wider range of housing age - from 1970s ranches to new construction. Macomb Township skews newer with more active builder communities. Shelby sits closer to Oakland County, which adds proximity value. Both are strong markets within Macomb County.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "sterling-heights-mi",
    name: "Sterling Heights",
    county: "Macomb",
    state: "MI",
    zipCodes: ["48310", "48311", "48312", "48313", "48314"],
    marketStats: {
      medianPrice: 309333,
      medianPriceChange: 4.5,
      daysOnMarket: 33,
      pricePerSqft: 183,
    },
    priceRange: {
      low: "$220K–$295K gets you a well-maintained brick ranch in an established Sterling Heights neighborhood - solid bones, reasonable lot, often updated kitchen or bath.",
      high: "$295K–$400K brings larger colonials, well-renovated homes, and properties in the city's newer subdivisions.",
      luxury: "Above $400K you're in the premium tier for Sterling Heights - executive homes, newer builds, and properties adjacent to the Shelby Township border.",
    },
    schoolDistrict: "Utica Community Schools",
    commuteToDetroit: "25 min",
    about:
      "Sterling Heights is Macomb County's largest city and one of Michigan's most populous - a sprawling, diverse community of nearly 135,000 residents that has consistently attracted buyers seeking solid housing values, employment proximity, and accessible price points. The city's housing stock is anchored by thousands of brick ranches and colonials built during Michigan's postwar suburban expansion, many of which have been well-maintained or renovated.\n\nSterling Heights has a significant Middle Eastern and South Asian population that has shaped the city's restaurant, retail, and cultural character - particularly along Van Dyke Avenue and Mound Road. The city is also home to major defense and automotive employers, including military vehicle manufacturers and automotive supplier campuses.",
    realEstateOverview:
      "Sterling Heights offers straightforward, honest value. The housing stock is predominantly brick construction with good bones, and the market rewards buyers who can look past cosmetic issues on slightly dated interiors. Homes here appraise reliably and sell consistently because the buyer pool is broad and the price points are accessible.\n\nThe market is competitive for well-priced, move-in ready inventory, particularly in the Utica Community Schools section of the city, which draws strong demand from family buyers.",
    locationAccess: [
      "Bordered by Troy (west), Shelby Township (north), Clinton Township (east), and Warren (south)",
      "Access via M-53 (Van Dyke), Mound Road, and I-696",
      "Approximately 20 miles north of downtown Detroit",
      "Major employment corridors along Mound Road (defense) and Van Dyke (commercial)",
    ],
    schoolInfo:
      "Sterling Heights is split between Utica Community Schools (northern sections, generally north of 15 Mile Road) and Warren Consolidated Schools (southern sections). Utica serves Eisenhower and Utica High Schools; Warren Consolidated serves Fitzgerald and other secondary schools. Verify address-specific assignments with the relevant district before purchasing.",
    bradQuote:
      "Sterling Heights is where I send buyers who need the value of Macomb County pricing without sacrificing proximity to Troy and the I-75 corridor. The northern section of Sterling Heights - anything above 15 Mile - is genuinely competitive and offers real value for what you get. The brick ranch inventory here is as solid as anything in the county, and buyers who are willing to update cosmetics get exceptional deals.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["shelby-township-mi", "troy-mi", "warren-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Sterling Heights MI")}`,
    faqs: [
      {
        q: "Is Sterling Heights in Utica Community Schools or Warren Consolidated?",
        a: "It depends on the address. Northern Sterling Heights (generally north of 15 Mile Road and M-59) feeds into Utica Community Schools. Southern Sterling Heights feeds into Warren Consolidated. Always verify the specific address with the district before purchasing.",
      },
      {
        q: "What are the dominant property types in Sterling Heights?",
        a: "The dominant housing type is the brick ranch or brick colonial, most built between 1960 and 1990. Sterling Heights built a lot of housing during Michigan's suburban expansion era, and the brick construction has aged well. Many have been updated; others present renovation opportunities at accessible prices.",
      },
      {
        q: "Is Sterling Heights near major employers?",
        a: "Yes. Mound Road is a significant defense and manufacturing corridor with several large employers. The I-696 and M-53 corridors connect to Troy, Auburn Hills, and Detroit employment centers within 20–30 minutes. The employment proximity contributes to consistent buyer demand.",
      },
      {
        q: "How competitive is Sterling Heights compared to Shelby Township?",
        a: "Sterling Heights is generally less competitive - more inventory, more time on market, and a broader price range. Shelby Township (north of Sterling Heights) runs slightly higher due to newer construction and proximity to Oakland County. If budget is the primary driver, Sterling Heights delivers more for the money.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "clinton-township-mi",
    name: "Clinton Township",
    county: "Macomb",
    state: "MI",
    zipCodes: ["48035", "48036", "48038"],
    marketStats: {
      medianPrice: 246167,
      medianPriceChange: 3.8,
      daysOnMarket: 21,
      pricePerSqft: 155,
    },
    priceRange: {
      low: "$190K–$270K gets you a solid brick ranch or older colonial in Clinton Township - reasonable lot, brick construction, often with Lake St. Clair proximity.",
      high: "$270K–$420K brings newer construction, well-updated homes, and properties with Lake St. Clair or canal access in the township's lakeside sections.",
      luxury: "Above $420K is the waterfront premium - direct Lake St. Clair frontage and the finest canal homes push pricing into the $600K–$1M+ range.",
    },
    schoolDistrict: "Chippewa Valley School District",
    commuteToDetroit: "25 min",
    about:
      "Clinton Township is one of Macomb County's most geographically diverse communities - ranging from inland ranch subdivisions near major commercial corridors to waterfront properties with direct Lake St. Clair and canal access in the township's eastern sections. With nearly 100,000 residents, it's one of Michigan's larger townships and offers a broad range of buyer profiles and price points.\n\nMacomb Community College, one of Michigan's largest community colleges, is headquartered in Clinton Township, adding an educational and employment anchor. The township's proximity to Lake St. Clair is one of its most significant lifestyle differentiators - particularly for buyers who value boating, fishing, and water recreation.",
    realEstateOverview:
      "Clinton Township's market divides clearly into two segments: the inland residential market, which is broadly affordable and accessible, and the waterfront market, which carries significant premium pricing. Both segments are active, though the inland market sees far more transaction volume.\n\nBuyers looking for Macomb County value who don't require waterfront access will find Clinton Township's inland market competitive and well-supplied. Chippewa Valley School District drives demand in the western sections of the township.",
    locationAccess: [
      "Bordered by Sterling Heights (west), Mount Clemens (north), Harrison Township (east), and St. Clair Shores (south)",
      "Access via I-94, M-59, Gratiot Avenue, and Hall Road",
      "Lake St. Clair shoreline and canal systems in eastern township sections",
      "Approximately 20 miles northeast of downtown Detroit via I-94",
    ],
    schoolInfo:
      "Clinton Township is primarily served by Chippewa Valley School District in the western and central portions of the township. Some eastern sections may fall within Fraser School District or other surrounding districts - verify address-specific assignments with the relevant district.",
    bradQuote:
      "Think of Clinton Township as the sweet spot of Metro Detroit - where you get all the perks of a big community without the frantic pace. Whether you're grabbing a coffee at the dog-friendly Partridge Creek, hitting the trails at George George Park, or just enjoying the quiet of your own backyard, it's a place that feels instantly familiar. It's easygoing, centrally located, and just a great spot to actually enjoy where you live.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["sterling-heights-mi", "st-clair-shores-mi", "macomb-township-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Clinton Township MI")}`,
    faqs: [
      {
        q: "Are there waterfront homes in Clinton Township?",
        a: "Yes - eastern Clinton Township has canal-front properties with access to Lake St. Clair, as well as some direct lakefront. These run significantly higher than inland homes, typically from the mid-$300s to $800K+ for direct lake frontage. The canal lifestyle is a major draw for boating enthusiasts.",
      },
      {
        q: "Which school district serves Clinton Township?",
        a: "Chippewa Valley School District serves the western and central sections of the township. Eastern sections may fall within Fraser School District. Verify the specific address with the relevant district before purchasing.",
      },
      {
        q: "How is Clinton Township different from St. Clair Shores?",
        a: "Clinton Township is significantly larger and more inland than St. Clair Shores. St. Clair Shores is essentially a lakefront canal community. Clinton Township has both inland suburban character and some lakefront access, at generally more accessible price points than St. Clair Shores for comparable properties.",
      },
      {
        q: "Is Clinton Township growing or declining in population?",
        a: "Clinton Township has been relatively stable in population, with modest growth in certain areas. New construction activity is limited compared to Macomb Township to the north. The market is driven primarily by existing home sales rather than new development.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "macomb-township-mi",
    name: "Macomb Township",
    county: "Macomb",
    state: "MI",
    zipCodes: ["48042", "48044"],
    marketStats: {
      medianPrice: 390817,
      medianPriceChange: 4.0,
      daysOnMarket: 26,
      pricePerSqft: 172,
    },
    priceRange: {
      low: "$280K–$380K gets you a newer colonial in an established Macomb Township subdivision - often with larger lots than you'd find in Sterling Heights or Clinton Township.",
      high: "$380K–$520K brings executive-level new construction, larger homes on generous lots, and premium subdivision communities.",
      luxury: "Above $520K is the top of the Macomb Township market - custom builds, oversized lots, and the newest builder communities in the township's northern sections.",
    },
    schoolDistrict: "Chippewa Valley School District",
    commuteToDetroit: "35 min",
    about:
      "Macomb Township is one of Michigan's fastest-growing communities and has been for two decades. The township's northern location in Macomb County - further from Detroit but with more land available for development - has made it a builder's market, with new construction communities continuously opening in its vast open acreage. The result is a township full of newer homes, larger lots, and modern amenities.\n\nThe community has good parks and an active new construction market that gives buyers options not available in more built-out cities. The growth trajectory shows no signs of slowing, driven by buyers who want new construction without paying Oakland County prices.",
    realEstateOverview:
      "Macomb Township is almost entirely a newer-construction or newer-vintage market - the bulk of the housing stock dates from the 1990s through today, giving buyers modern floor plans, updated systems, and garage space that older Macomb County communities can't match. Builder communities with active spec inventory are a consistent feature.\n\nThe market runs competitive for new construction and well-priced newer homes. The township's ongoing growth means it's not unusual to find a neighborhood where both resale and new-build options exist side by side.",
    locationAccess: [
      "Located in northern Macomb County, bounded by Romeo (north), Shelby Township (west), Clinton Township (south), and Washington Township (northeast)",
      "Access via M-53 (Van Dyke), 26 Mile Road, and 23 Mile Road",
      "Approximately 35 miles north of downtown Detroit",
      "Rapidly developing commercial corridors along Hall Road and 23 Mile Road",
    ],
    schoolInfo:
      "Macomb Township is primarily served by Chippewa Valley School District in its southern sections and New Haven Community Schools and other districts in northern areas. Verify address-specific school assignments with the relevant district before purchasing.",
    bradQuote:
      "Macomb Township is one of the great growth stories in Macomb County. What was once considered the outer edge of the market is now one of the most sought-after new construction addresses in the region, and the owners who planted roots here early have been rewarded with consistent appreciation.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["shelby-township-mi", "clinton-township-mi", "sterling-heights-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Macomb Township MI")}`,
    faqs: [
      {
        q: "Is Macomb Township a good place for new construction?",
        a: "Yes - it's one of the few places in Southeast Michigan where multiple builder communities with spec inventory are still actively developing. Buyers who want new construction at Macomb County prices find Macomb Township one of the primary options.",
      },
      {
        q: "What school district covers Macomb Township?",
        a: "Southern and central Macomb Township is served primarily by Chippewa Valley School District. Northern areas may feed into New Haven Community Schools or other surrounding districts. Always verify the specific address with the district before purchasing.",
      },
      {
        q: "How far is Macomb Township from the I-75 or I-94 corridors?",
        a: "Macomb Township is positioned along the M-53 (Van Dyke) corridor rather than the I-75 or I-94 corridors. Access to I-75 requires driving west to Shelby Township (approximately 10–15 minutes). This is a real trade-off for buyers who commute to Auburn Hills or Troy via I-75.",
      },
      {
        q: "Are lot sizes in Macomb Township larger than in Sterling Heights?",
        a: "Yes, generally. Macomb Township's newer developments were designed for larger lots - 80 to 100+ foot wide parcels are common. Sterling Heights' older stock tends to run 60–70 foot lots. If lot size matters to you, Macomb Township generally wins that comparison.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "st-clair-shores-mi",
    name: "St. Clair Shores",
    county: "Macomb",
    state: "MI",
    zipCodes: ["48080", "48081", "48082"],
    marketStats: {
      medianPrice: 235500,
      medianPriceChange: 9.9,
      daysOnMarket: 32,
      pricePerSqft: 173,
    },
    priceRange: {
      low: "$180K–$270K gets you a ranch or bungalow in SCS's inland sections - solid brick construction, well-established neighborhoods.",
      high: "$270K–$450K brings canal-front access with dock rights, updated ranches with water views, or well-maintained canal-front colonials.",
      luxury: "Above $450K is where you find direct Lake St. Clair frontage - a genuinely rare category in Southeast Michigan.",
    },
    schoolDistrict: "South Lake School District",
    commuteToDetroit: "20 min",
    about:
      "St. Clair Shores is the canal capital of Macomb County - a waterfront community with over 25 miles of navigable canals connecting to Lake St. Clair and the Lake St. Clair Metropark. The community has a strong boating culture, annual waterfront events, and a lifestyle that is essentially unique in the Detroit metro area. Residents who choose SCS do so largely for the water access.\n\nInland St. Clair Shores is a straightforward brick-ranch community with good bones and accessible prices. The community's proximity to Detroit makes it attractive for buyers who want to be close to the city without paying Detroit-adjacent prices.",
    realEstateOverview:
      "St. Clair Shores divides clearly into the canal market and the inland market. Canal homes carry a significant premium over comparable inland properties due to the dock rights, water views, and recreational access they provide. Both markets are active, with inland homes moving briskly due to accessible price points and the canal market attracting boating-lifestyle buyers from across the region.\n\nThe SCS market tends to be more liquid than its prices might suggest - the specific lifestyle draw creates a concentrated, motivated buyer pool.",
    locationAccess: [
      "Bordered by Grosse Pointe Woods (south), Eastpointe (west), Clinton Township (north), and Lake St. Clair (east)",
      "Access via Jefferson Avenue, 9 Mile Road, and I-94 via Gratiot Avenue",
      "Lake St. Clair Metropark within 5 miles north along Jefferson",
      "Approximately 15 miles northeast of downtown Detroit",
    ],
    schoolInfo:
      "St. Clair Shores is served by South Lake School District and Lakeview Public Schools depending on the specific address. These are smaller districts - verify which school district a specific property feeds into, as this affects both resale value and school programming.",
    bradQuote:
      "St. Clair Shores is the market that consistently surprises buyers who haven't been there. You show them the Nautical Mile, a canal home with direct Lake St. Clair access, and the price point - and they can't believe it exists. For sellers, I've seen strong results here because the product is genuinely unique and the buyer who discovers it is motivated.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["clinton-township-mi", "grosse-pointe-mi", "warren-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("St. Clair Shores MI")}`,
    faqs: [
      {
        q: "What are the canal homes in St. Clair Shores and how do they work?",
        a: "SCS has an extensive system of navigable canals that connect to Lake St. Clair. Canal-front homes have riparian rights and can obtain dock permits to moor watercraft with direct lake access. The canals are maintained by the city and typically navigable for pontoon boats, fishing boats, and smaller watercraft.",
      },
      {
        q: "Is St. Clair Shores a good value compared to Grosse Pointe?",
        a: "Yes, significantly. Grosse Pointe's historic prestige and architectural character command substantial premiums over SCS. SCS offers comparable water access at a much lower price point, trading the Grosse Pointe architectural character for newer brick ranches and a more casual waterfront community.",
      },
      {
        q: "What school districts serve St. Clair Shores?",
        a: "St. Clair Shores is split between South Lake School District (northern sections) and Lakeview Public Schools (southern sections, near Grosse Pointe). School district assignment affects both pricing and access to programming, so verifying the specific address is important for family buyers.",
      },
      {
        q: "Can you launch a boat from your backyard in St. Clair Shores?",
        a: "If you have a canal-front home with dock rights, yes. You would navigate the canal out to Lake St. Clair, which is approximately 0.5–1.5 miles depending on your canal system location. The Lake St. Clair Metropark also has launch facilities for non-canal residents.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "warren-mi",
    name: "Warren",
    county: "Macomb",
    state: "MI",
    zipCodes: ["48088", "48089", "48091", "48092", "48093"],
    marketStats: {
      medianPrice: 190800,
      medianPriceChange: 6.1,
      daysOnMarket: 32,
      pricePerSqft: 140,
    },
    priceRange: {
      low: "$150K–$220K gets you a brick ranch with good bones - these are honest, straightforward homes that have often been well-maintained by long-term owners.",
      high: "$220K–$300K brings updated ranches, larger colonials, and well-maintained properties in Warren's northern sections near the Sterling Heights border.",
      luxury: "Above $300K is the top end for Warren - well-renovated homes in the city's northern sections near the Shelby Township border.",
    },
    schoolDistrict: "Warren Consolidated School District",
    commuteToDetroit: "20 min",
    about:
      "Warren is Michigan's third-largest city and one of the most significant manufacturing employment centers in the state - home to the U.S. Army Detroit Arsenal, General Motors Tech Center, and dozens of automotive supplier facilities. The city's workforce history has shaped its housing stock: thousands of well-built brick ranches constructed for working-class and middle-class buyers during the postwar suburban expansion.\n\nWarren's real estate market is straightforward and value-driven. It's not a lifestyle destination in the Birmingham or Royal Oak sense, but it delivers honest, durable housing at the most accessible price points of any Macomb County city with direct I-696 access.",
    realEstateOverview:
      "Warren's housing stock is predominantly brick ranch and small colonial construction from the 1950s through 1970s. The homes are built well and have aged gracefully, though many have dated interiors that represent renovation opportunities for buyers willing to do the work.\n\nThe market is active at the lower price points, with strong investor and first-time buyer demand. Proximity to Detroit and the major Mound Road employment corridor keeps demand consistent even in slower markets.",
    locationAccess: [
      "Bordered by Sterling Heights (north), Clinton Township (northeast), Detroit (south), and Eastpointe (east)",
      "Direct access to I-696, I-75, and Mound Road employment corridor",
      "Approximately 15 miles north of downtown Detroit",
      "GM Tech Center campus and U.S. Army Detroit Arsenal within city limits",
    ],
    schoolInfo:
      "Warren is primarily served by Warren Consolidated School District, which serves Fitzgerald, Warren Woods, and other secondary schools. Northern sections of the city may feed into Utica Community Schools depending on address. Verify address-specific assignments with the relevant district before purchasing.",
    bradQuote:
      "Warren is the most honest value in Macomb County. You're getting brick construction, close proximity to Detroit, easy highway access, and a price point that makes the math work for investors and first-time buyers. It's not going to win a lifestyle competition, but buyers who need to get into the market and build equity? Warren does that job.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["sterling-heights-mi", "clinton-township-mi", "detroit-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Warren MI")}`,
    faqs: [
      {
        q: "Is Warren a good city for first-time homebuyers?",
        a: "Yes - Warren's price points make it one of the most accessible entry markets in Southeast Michigan. Buyers who qualify for a mortgage but have limited down payment funds often find that Warren is where the numbers work. The brick ranch housing stock is durable, and many have been well-maintained.",
      },
      {
        q: "What school district is in the north section of Warren?",
        a: "The northern sections of Warren (generally north of 13 Mile Road in certain areas) may feed into Utica Community Schools rather than Warren Consolidated. Always verify address-specific assignments with the relevant district before purchasing.",
      },
      {
        q: "Is Warren near the GM Tech Center?",
        a: "Yes. The GM Technical Center campus is located in Warren at Mound and 12 Mile Road - one of the largest and most significant automotive R&D facilities in the world. This employment anchor contributes directly to housing demand in the area.",
      },
      {
        q: "What is the typical condition of homes for sale in Warren?",
        a: "Condition varies widely. Some homes have been owner-occupied for decades and are meticulously maintained. Others have cosmetic deferred maintenance that represents opportunity. A thorough inspection is non-negotiable in this market - the fundamentals (brick, mechanicals) are usually solid, but interiors often need updating.",
      },
    ],
    ctaVariant: "buyer",
  },

  // ─── WAYNE COUNTY ─────────────────────────────────────────────────────────

  {
    slug: "grosse-pointe-mi",
    name: "Grosse Pointe",
    county: "Wayne",
    state: "MI",
    zipCodes: ["48230", "48236"],
    marketStats: {
      medianPrice: 445333,
      medianPriceChange: 30,
      daysOnMarket: 60,
      pricePerSqft: 212,
    },
    priceRange: {
      low: "$450K–$650K gets you an entry-level home in the Grosse Pointes - often smaller square footage or requiring updates, but in one of Southeast Michigan's most architecturally distinctive communities.",
      high: "$650K–$1.2M brings well-maintained Tudors, colonials, and brick homes on the premier streets of Grosse Pointe City and Grosse Pointe Farms.",
      luxury: "Above $1.2M is the lakefront estate category - properties on Lake Shore Drive and directly on Lake St. Clair, architectural standouts by Mies van der Rohe and Albert Kahn.",
    },
    schoolDistrict: "Grosse Pointe Public School System",
    commuteToDetroit: "15 min",
    about:
      "The Grosse Pointes are five distinct lakefront municipalities - Grosse Pointe City, Grosse Pointe Park, Grosse Pointe Farms, Grosse Pointe Woods, and Grosse Pointe Shores - each with its own city government but a shared identity as Southeast Michigan's most prestigious historic address. The communities are defined by their architectural heritage: Tudor revivals, Colonials, and lake estates designed by Michigan's most significant early 20th-century architects.\n\nThe Grosse Pointes border Detroit to the east and Lake St. Clair to the north - a position that offers both city proximity and waterfront access. The communities have maintained their character through deliberate preservation of architectural standards and active community engagement.",
    realEstateOverview:
      "The Grosse Pointe market is defined by architectural quality, historical character, and strong institutional demand. Buyers here are often relocation buyers, Detroit corridor professionals, and buyers who specifically seek the historic character that can't be found in Oakland or Macomb suburban communities.\n\nThe market operates differently than typical suburban markets - condition matters less than address, lot size, and architectural integrity. A Tudor on a premier block will absorb necessary updates and still command top dollar.",
    locationAccess: [
      "Located on the eastern border of Detroit, with direct Lake St. Clair waterfront access",
      "Jefferson Avenue (Lake Shore Drive) provides the primary north-south arterial",
      "Approximately 10–15 miles east of downtown Detroit",
      "Multiple Grosse Pointe communities, each with its own Village commercial district",
    ],
    schoolInfo:
      "The Grosse Pointe Public School System serves all five Grosse Pointe communities. Grosse Pointe South and Grosse Pointe North are the two high schools, with geographic attendance boundaries determining assignment. Verify which school a specific property feeds into directly with the district.",
    bradQuote:
      "If you're looking for a place with a little more 'old-world' soul, Grosse Pointe is it. It's all about those beautiful tree-lined streets, unique architecture, and a real sense of tradition. Since it's right on the water, life here revolves around the lake - whether you're at one of the private resident parks or just catching the breeze off Lake St. Clair. It feels like a quiet, upscale escape with a tight-knit community vibe, yet you're only about 15 minutes away from the energy of downtown Detroit. It's classic, scenic, and very laid-back.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["st-clair-shores-mi", "detroit-mi", "clinton-township-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Grosse Pointe MI")}`,
    faqs: [
      {
        q: "What is the difference between the five Grosse Pointe communities?",
        a: "Grosse Pointe Park is the most urban, bordering Detroit directly. Grosse Pointe City is the smallest and most centrally located. Grosse Pointe Farms has the largest homes and strongest lakefront presence. Grosse Pointe Woods is the most moderately priced. Grosse Pointe Shores is the most exclusive, with the largest estates.",
      },
      {
        q: "Is the Grosse Pointe market more affordable than Birmingham?",
        a: "Yes, notably so. The median price in the Grosse Pointes runs well below Birmingham despite superior architectural character and a stronger sense of historic community identity. The Detroit proximity that many suburban buyers resist actually represents a value opportunity for buyers comfortable with the location.",
      },
      {
        q: "Can I find condos or townhomes in the Grosse Pointes?",
        a: "Yes, particularly in Grosse Pointe City and Grosse Pointe Park. There are several condo buildings and townhome communities that offer a Grosse Pointe address at lower entry price points than single-family homes.",
      },
    ],
    ctaVariant: "both",
  },

  {
    slug: "northville-mi",
    name: "Northville",
    county: "Wayne",
    state: "MI",
    zipCodes: ["48167", "48168"],
    marketStats: {
      medianPrice: 457000,
      medianPriceChange: 5.9,
      daysOnMarket: 23,
      pricePerSqft: 232,
    },
    priceRange: {
      low: "$380K–$520K gets you a well-maintained colonial or townhome in a Northville Township planned community - often newer construction with good amenities.",
      high: "$520K–$750K brings homes in the city proper, larger lots, and well-updated executive homes in premier Northville Township communities.",
      luxury: "Above $750K is custom-built territory - large estate homes in Northville Township's most exclusive enclaves or renovated architecturals near the historic village.",
    },
    schoolDistrict: "Northville Public Schools",
    commuteToDetroit: "30 min",
    about:
      "Northville straddles the Wayne-Oakland county line - the City of Northville sits within both counties, while Northville Township lies primarily in Wayne County. The community is anchored by one of Southeast Michigan's most charming historic downtowns: a walkable village with independent restaurants, boutiques, and a town square that hosts year-round events. The downtown rivals Birmingham in charm if not in scale.\n\nNorthville is consistently cited among the best places to live in Michigan and attracts buyers from both the Wayne and Oakland sides who prioritize the village character, outstanding schools, and community engagement. The housing market reflects that sustained demand with consistently competitive days-on-market figures.",
    realEstateOverview:
      "Northville offers a mix of city-core historic homes, established Township subdivisions, and newer planned communities with modern amenities. The price range is broad, from townhomes in the $350s to custom estate homes above $1M. Northville Township's planned communities are some of the most well-maintained in Wayne County.\n\nThe market is consistently competitive, particularly for homes in the city core walking distance to downtown. Buyers targeting Northville need to be prepared to move quickly on well-priced inventory.",
    locationAccess: [
      "Located at the Wayne-Oakland county line, approximately 25 miles northwest of downtown Detroit",
      "Access via I-275, Six Mile Road, and Seven Mile Road",
      "Hines Drive and the Northville Township trails network provide extensive non-motorized access",
      "Adjacent to Plymouth (south) and Novi (east)",
    ],
    schoolInfo:
      "Northville Public Schools serves the City and Township of Northville, with Northville High School as the sole secondary school. Verify address-specific assignments with the district before purchasing.",
    bradQuote:
      "Northville has one of the strongest community identities of any city I work in. The downtown - Cady Street, the clock tower, the farmers market - creates a genuine quality-of-life pull that translates directly into sustained real estate demand. In 26 years, I have never seen a correctly priced and well-presented Northville listing sit on the market for long.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["plymouth-mi", "novi-mi", "livonia-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Northville MI")}`,
    faqs: [
      {
        q: "Is Northville in Wayne County or Oakland County?",
        a: "Both. The City of Northville straddles the county line, with portions in Wayne County and portions in Oakland County. Northville Township is primarily in Wayne County. The school district - Northville Public Schools - serves the entire city and township regardless of county. Tax rates and some services may differ based on the specific parcel's county.",
      },
      {
        q: "How does Northville's downtown compare to Plymouth's?",
        a: "Both are legitimate historic village downtowns. Northville's is slightly more intimate and upscale in its retail mix. Plymouth has Kellogg Park as a central gathering space and runs a bit more casual in character. Buyers who are torn between the two often come down to price point and specific neighborhood preferences.",
      },
      {
        q: "What is the Northville Downs site and how does it affect the market?",
        a: "The former Northville Downs racetrack site is undergoing redevelopment into a mixed-use residential community within the city. This is one of the most significant infill developments in Northville's recent history and is expected to add new housing inventory to the city core.",
      },
      {
        q: "Are there townhomes or condos in Northville?",
        a: "Yes - Northville Township has several well-established planned communities with condominium and townhome units ranging from the $300s to the low $500s. These are popular with empty nesters and buyers who want Northville access without single-family maintenance.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "plymouth-mi",
    name: "Plymouth",
    county: "Wayne",
    state: "MI",
    zipCodes: ["48170"],
    marketStats: {
      medianPrice: 564515,
      medianPriceChange: 30,
      daysOnMarket: 13,
      pricePerSqft: 336,
    },
    priceRange: {
      low: "$320K–$430K gets you a solid bungalow or colonial in Plymouth Township or at the city's edges - often with good lot size relative to Oakland County comparables.",
      high: "$430K–$620K brings city-core homes within walking distance of Kellogg Park, well-updated colonials, and newer construction in Plymouth Township.",
      luxury: "Above $620K is the premium segment - large custom homes in the township, significant renovations in the city core, or new construction communities.",
    },
    schoolDistrict: "Plymouth-Canton Community Schools",
    commuteToDetroit: "25 min",
    about:
      "Plymouth is a historic downtown village city - smaller than Northville but with an equally strong community identity anchored by Kellogg Park, a central square that hosts events year-round including the Plymouth Ice Festival, Art in the Park, and weekly farmers markets. The city has an authentic small-town character that's become increasingly rare in Southeast Michigan.\n\nPlymouth Township surrounds the city and offers more housing variety and slightly more accessible price points. The Plymouth-Canton Community Schools district serves both city and township.",
    realEstateOverview:
      "Plymouth's market is driven by strong demand from buyers who specifically want the walkable downtown village character. City-core homes command a premium, while Plymouth Township offers more land and newer construction at lower prices. The overall market is competitive and consistent, with strong long-term appreciation backed by lifestyle amenities and community character.\n\nThe mix of bungalows, colonials, and newer construction creates broad price points that accommodate multiple buyer profiles within the same community.",
    locationAccess: [
      "Located approximately 25 miles west of downtown Detroit, at the intersection of Ann Arbor Road and Main Street",
      "Access via I-275 and I-96, with exits for Plymouth-Ann Arbor Road",
      "Adjacent to Northville (north), Canton Township (south and east), and Livonia (east)",
      "Hines Drive connects Plymouth to the extended Wayne County park system",
    ],
    schoolInfo:
      "Plymouth-Canton Community Schools serves Plymouth City, Plymouth Township, and Canton Township, with Plymouth Canton High School as the secondary school. Verify address-specific assignments with the district before purchasing.",
    bradQuote:
      "Plymouth is the pleasant surprise in Wayne County. Buyers come in with modest expectations because of the county address and leave having fallen in love with a genuine downtown, Kellogg Park, and a community character that competes with cities at significantly higher price points. For sellers, I consistently see strong results because buyers arrive emotionally engaged before they've even looked at the numbers.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["northville-mi", "livonia-mi", "novi-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Plymouth MI")}`,
    faqs: [
      {
        q: "What is Plymouth-Canton Community Schools and how large is it?",
        a: "Plymouth-Canton is one of Michigan's largest school districts, serving Plymouth City, Plymouth Township, and Canton Township. Plymouth Canton High School is one of the largest high schools in the state. Verify address-specific assignments with the district before purchasing.",
      },
      {
        q: "Is Plymouth City the same as Plymouth Township?",
        a: "No - they're separate municipalities with different tax rates and government structures. Plymouth City is the small historic core with the downtown and Kellogg Park. Plymouth Township is much larger in area with more suburban housing. Both feed into Plymouth-Canton Community Schools.",
      },
      {
        q: "How does Plymouth compare to Northville for price and character?",
        a: "Both are historic village communities with walkable downtowns and strong community character. Northville runs slightly higher in price and has a more upscale retail character. Plymouth is larger (due to Plymouth Township housing), more accessible in price, and has Kellogg Park as its central gathering point. The choice often comes down to price point and specific street preferences.",
      },
      {
        q: "Are there walkable neighborhoods in Plymouth?",
        a: "Yes - the City of Plymouth's historic core is highly walkable, with Kellogg Park at the center and restaurants, shops, and services within walking distance. Plymouth Township, which surrounds the city, is more auto-dependent. Buyers who specifically want walkability should focus on the city core.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "livonia-mi",
    name: "Livonia",
    county: "Wayne",
    state: "MI",
    zipCodes: ["48150", "48152", "48154"],
    marketStats: {
      medianPrice: 309583,
      medianPriceChange: 10,
      daysOnMarket: 27,
      pricePerSqft: 184,
    },
    priceRange: {
      low: "$220K–$290K gets you a well-maintained brick ranch - these are Livonia's bread and butter, solid 1,000–1,600 sq ft homes on 60-foot lots with newer mechanicals.",
      high: "$290K–$400K brings larger colonials, tri-levels, and well-updated ranches in the city's premier subdivisions.",
      luxury: "Above $400K is the top of the Livonia market - executive homes, recent custom builds, and the city's best-maintained properties.",
    },
    schoolDistrict: "Livonia Public Schools",
    commuteToDetroit: "20 min",
    about:
      "Livonia is one of Michigan's most consistently stable suburban communities - a large city of nearly 100,000 residents with a housing stock defined by thousands of well-built brick ranches and colonials from the 1950s through 1970s. The city doesn't have a walkable downtown, but it compensates with excellent civic infrastructure: exceptional parks, the Livonia Recreation Center, and one of the most active community event calendars in Wayne County.\n\nLivonia's reputation for clean, well-maintained streets and strong civic engagement is well-earned. The community has a long tradition of resident pride that keeps housing stock maintained at levels above typical Wayne County comparables.",
    realEstateOverview:
      "Livonia's market is defined by honest value and reliability. The brick ranch inventory is the strongest in Wayne County for price-per-value metrics - buyers consistently get more durable construction at lower prices than they'd find in Oakland County at comparable quality levels.\n\nDemand in Livonia is driven by Livonia Public Schools (a well-regarded district), proximity to major employer corridors, and an active senior market. The city's aging demographics mean solid, well-maintained estate sales are a consistent part of the inventory.",
    locationAccess: [
      "Located between Plymouth (west), Northville (northwest), Farmington Hills (north), Redford (east), and Dearborn (south)",
      "Excellent access to I-96, I-275, and M-14",
      "Approximately 15 miles west of downtown Detroit",
      "Major retail corridor along Middlebelt Road and Plymouth Road",
    ],
    schoolInfo:
      "Livonia Public Schools serves the city, with Stevenson, Churchill, and Franklin High Schools. School assignment depends on which area of the city the property is in - verify the specific address with the district before purchasing.",
    bradQuote:
      "If you're looking for a place that's as practical as it is comfortable, Livonia is the quintessential 'easy living' suburb. It's famous for having the lowest city tax rate in Wayne County and one of the largest park systems in the state, including the massive Jack E. Kirksey Recreation Center, which is currently undergoing a multi-million dollar modernization. While it has a quiet, established feel, the city is in the middle of a 'City Center' transformation to add more walkable dining and retail. With its central location right on the I-96 and I-275 corridor, you're perfectly positioned halfway between the energy of downtown Detroit and the charm of Ann Arbor.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["plymouth-mi", "northville-mi", "novi-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Livonia MI")}`,
    faqs: [
      {
        q: "What is Livonia known for besides the brick ranches?",
        a: "Livonia has a strong parks system - the Livonia Recreation Center, Rotary Park, and multiple community pools and sports facilities. The city hosts Plymouth Road festival events and has an active senior center. It's a genuinely livable community despite not having a downtown commercial core.",
      },
      {
        q: "What are the three high schools in Livonia and how do I know which one my address feeds?",
        a: "Livonia has Stevenson, Churchill, and Franklin High Schools. Assignment is based on your address and the school boundary maps provided by Livonia Public Schools. Verify that a specific address feeds into your preferred school before purchasing.",
      },
      {
        q: "Is Livonia a good city for investors?",
        a: "Yes - the brick ranch inventory offers good rental yield relative to acquisition cost, and the stable population and employment proximity keep vacancy low. Livonia is one of the more consistently performing rental markets in Wayne County.",
      },
      {
        q: "How does Livonia compare to Westland or Redford for home prices?",
        a: "Livonia runs higher than Westland and Redford due to its civic infrastructure, park system, and housing quality. The differential is roughly $40K–$80K at median for comparable construction.",
      },
    ],
    ctaVariant: "both",
  },

  {
    slug: "detroit-mi",
    name: "Detroit",
    county: "Wayne",
    state: "MI",
    zipCodes: ["48201", "48202", "48203", "48204", "48205", "48206", "48207", "48208", "48209", "48210", "48211", "48212", "48213", "48214", "48215", "48216", "48217", "48218", "48219", "48220", "48221", "48222", "48223", "48224", "48225", "48226", "48227", "48228", "48229", "48230", "48231", "48232", "48233", "48234", "48235", "48236", "48237", "48238", "48239", "48240"],
    marketStats: {
      medianPrice: 91917,
      medianPriceChange: 16.7,
      daysOnMarket: 67,
      pricePerSqft: 70,
    },
    priceRange: {
      low: "$80K–$150K covers a range of single-family homes in established but varied Detroit neighborhoods - condition and street-by-street character vary significantly at this price point.",
      high: "$150K–$280K brings renovated homes, newer construction infill, and properties in the city's most actively appreciating neighborhoods like Midtown, Corktown, and East English Village.",
      luxury: "Above $280K is the investment-grade renovation or premier neighborhood tier - historic Sherwood Forest, Palmer Woods, Indian Village, and the city's landmark architectural properties.",
    },
    schoolDistrict: "Detroit Public Schools Community District",
    commuteToDetroit: "0 min",
    about:
      "Detroit is Michigan's largest city and one of the most significant architectural, cultural, and economic cities in the United States - a 139-square-mile canvas of over 100 distinct neighborhoods with a storied history, ongoing revitalization, and some of the most varied real estate in the country. The city's residential market has transformed substantially over the past decade, with strong appreciation in the city's most established neighborhoods driving buyer interest from across the region and the country.\n\nNeighborhoods like Corktown, Midtown, New Center, East English Village, and Sherwood Forest have seen sustained investment and population growth. The city's architectural heritage - from Albert Kahn's industrial designs to the colonial estates of Sherwood Forest and Palmer Woods - offers buyers properties unavailable anywhere else in Southeast Michigan.",
    realEstateOverview:
      "Detroit's real estate market operates at a different scale and with different dynamics than the suburban markets. Neighborhood selection is the most critical variable - the difference between streets in Detroit can mean a difference of $50K–$100K in value for comparable construction. Buyers need localized knowledge.\n\nThe appreciation rates in Detroit's strongest neighborhoods have exceeded Oakland County in recent years. That said, buyer due diligence - including inspection, title review, and neighborhood-specific market analysis - is more important here than in any other market we serve.",
    locationAccess: [
      "Michigan's largest city and the center of the metro area's highway network",
      "I-75, I-94, I-96, M-10 (Lodge Freeway), and I-375 all converge in the city",
      "Detroit Metropolitan Wayne County Airport (DTW) approximately 20 miles southwest",
      "Downtown, Midtown, Corktown, and riverfront within the central core",
    ],
    schoolInfo:
      "The Detroit Public Schools Community District serves the city's public school students. Many Detroit buyers with children utilize Detroit's school of choice options, charter school landscape, or private school alternatives. We recommend buyers research the specific school options available for their neighborhood of interest.",
    bradQuote:
      "If you're looking for a place with unmatched energy and a true 'soul,' Detroit is in a league of its own. It's a city where you can feel the history in the architecture of neighborhoods like Indian Village or Corktown, but also see the future in the massive revitalization projects happening right now - like the new Hudson's Detroit development and the expanding Riverwalk. It's surprisingly laid-back once you settle in, with a tight-knit community of creators and locals who are genuinely proud of their city. Whether you're grabbing a drink in the Belt, biking the Dequindre Cut, or spending a Sunday at Belle Isle, there's a grit and a beauty here that you just won't find in the suburbs.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["grosse-pointe-mi", "livonia-mi", "romulus-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Detroit MI")}`,
    faqs: [
      {
        q: "Which Detroit neighborhoods are most recommended for buyers?",
        a: "East English Village, Sherwood Forest, Palmer Woods, Indian Village, Corktown, and Midtown are the neighborhoods with the strongest fundamentals for buyers seeking appreciation and quality of life. University District and Bagley/Green Acres on the northwest side also have strong housing stock. Each requires neighborhood-specific research.",
      },
      {
        q: "Is it safe to buy a home in Detroit?",
        a: "The answer is highly neighborhood-specific. Detroit's strongest residential neighborhoods have active community organizations, improving infrastructure, and rising property values. As with any city, block-by-block research is essential. We walk every block before we write an offer on a Detroit property.",
      },
      {
        q: "Are property taxes high in Detroit?",
        a: "Detroit has some of the highest effective property tax rates in Michigan, though Proposal A taxable value caps limit increases for current owners. New buyers should calculate taxes based on State Equalized Value (SEV) and the applicable millage rates - the first year taxes after purchase can be substantially higher than the seller's current bills.",
      },
      {
        q: "What are the best resources for researching Detroit neighborhoods before buying?",
        a: "Detroit's Blight Removal Task Force data, Motor City Mapping, and individual neighborhood association websites are useful starting points. Our team walks target neighborhoods with buyers before making offers. Aerial and street-level tools can supplement but never replace on-the-ground assessment.",
      },
    ],
    ctaVariant: "both",
  },

  {
    slug: "romulus-mi",
    name: "Romulus",
    county: "Wayne",
    state: "MI",
    zipCodes: ["48174"],
    marketStats: {
      medianPrice: 190000,
      medianPriceChange: -1.2,
      daysOnMarket: 42,
      pricePerSqft: 142,
    },
    priceRange: {
      low: "$130K–$190K gets you a ranch or colonial in established Romulus neighborhoods - modest lot sizes, brick or frame construction, move-in ready condition.",
      high: "$190K–$250K brings the best of Romulus inventory - updated homes, larger lots, and properties with newer systems.",
      luxury: "Above $250K is the top tier for Romulus - well-renovated or newer construction properties that represent the market ceiling.",
    },
    schoolDistrict: "Romulus Community Schools",
    commuteToDetroit: "25 min",
    about:
      "Romulus is southern Wayne County's most strategically positioned community - the city surrounds Detroit Metropolitan Wayne County Airport (DTW), one of the nation's busiest and most significant airports. The city's identity is closely tied to aviation and logistics employment, with major cargo and distribution facilities, hotels, and airport services creating a substantial local employment base.\n\nFor residential buyers, Romulus offers some of Wayne County's most accessible price points with reasonably maintained housing stock and straightforward community character. It's not a lifestyle destination, but it serves buyers who need proximity to the airport corridor and maximum affordability.",
    realEstateOverview:
      "Romulus's residential market is relatively modest in size and focused on affordability. The housing stock is primarily ranches and colonials built in the 1960s–1980s, with condition varying across the market. Buyers at this price point should plan for inspection-identified repairs and factor those into their purchase equation.\n\nThe market sees consistent if modest buyer activity, driven primarily by employment proximity and affordability. Investors are active in the market alongside primary residence buyers.",
    locationAccess: [
      "Surrounds Detroit Metropolitan Wayne County Airport (DTW) - one of the nation's busiest airports",
      "Access via I-94, I-275, and Merriman Road",
      "Approximately 20 miles southwest of downtown Detroit",
      "Major logistics and distribution employers within the city",
    ],
    schoolInfo:
      "Romulus Community Schools serves the city and is a smaller district with a single high school. Buyers with school-age children should research current district programming and performance metrics. Some residents access Wayne-Westland Community Schools depending on specific address.",
    bradQuote:
      "If you're looking for a place where your dollar goes further and convenience is king, Romulus is the ultimate 'connected' suburb. Known as the Aerotropolis of Michigan, it's a hub of activity that manages to keep a cozy, small-town feel. It's perfect for people who want a quick commute to major employers like Amazon or Delta, or those who love being minutes away from Detroit Metro Airport for travel. With a cost of living below the national average and a massive investment in new infrastructure - like the Restore I-94 project and upgraded community facilities - it's an area on the rise that still feels grounded and welcoming.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["livonia-mi", "plymouth-mi", "detroit-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Romulus MI")}`,
    faqs: [
      {
        q: "Is noise from Detroit Metro Airport a concern for Romulus homebuyers?",
        a: "Depending on the specific address, yes. Homes directly in the flight path experience meaningful aircraft noise. DTW's flight path maps are publicly available, and we check any Romulus property against those maps before recommending it to noise-sensitive buyers. Some neighborhoods are far enough from active runways to have minimal impact.",
      },
      {
        q: "Is Romulus a good investment market?",
        a: "For buyers focused on yield, the numbers can work - acquisition costs are low and rental demand from airport workers and logistics employees is consistent. That said, appreciation is modest compared to northern Wayne County communities, so the investment case is primarily yield-driven rather than appreciation-driven.",
      },
      {
        q: "How far is Romulus from Plymouth or Livonia?",
        a: "Plymouth is approximately 10 miles north of Romulus via I-275. Livonia is approximately 12 miles northeast. Both offer more established civic infrastructure and lifestyle amenities, at $80K–$150K higher price points. Buyers who can stretch their budget into Plymouth or Livonia generally should consider it.",
      },
      {
        q: "What are the major employers near Romulus?",
        a: "Detroit Metropolitan Wayne County Airport is the dominant employer and economic anchor. Major cargo airlines, ground handling companies, rental car operations, and airport hotels employ thousands of Romulus-area residents. Additionally, the I-94 corridor through Romulus has significant distribution and logistics facilities.",
      },
    ],
    ctaVariant: "buyer",
  },

  // ─── GENESEE COUNTY ────────────────────────────────────────────────────────

  {
    slug: "grand-blanc-mi",
    name: "Grand Blanc",
    county: "Genesee",
    state: "MI",
    zipCodes: ["48439", "48480"],
    marketStats: {
      medianPrice: 265000,
      medianPriceChange: 5.2,
      daysOnMarket: 28,
      pricePerSqft: 145,
    },
    priceRange: {
      low: "Under $200K gets you a well-maintained ranch or starter home in established subdivisions with mature landscaping.",
      high: "$200K–$350K opens up updated colonials, newer builds, and homes with finished basements in popular neighborhoods near Grand Blanc schools.",
      luxury: "Above $350K you're looking at newer construction, larger lots, and custom homes in developments like Woodfield and surrounding areas.",
    },
    schoolDistrict: "Grand Blanc Community Schools",
    commuteToDetroit: "60 min",
    about:
      "Grand Blanc sits at the southern edge of Genesee County, roughly 60 miles northwest of Detroit. It functions as the primary residential suburb for people who work in the Flint metro area but prefer a quieter, more suburban setting. The city and surrounding Grand Blanc Township together offer a mix of established neighborhoods, newer developments, and commercial corridors along Saginaw Road and Holly Road.\n\nThe community has a small but functional downtown area and benefits from proximity to Genesys Regional Medical Center, one of the region's largest employers. Grand Blanc has consistently attracted buyers looking for affordable housing within Grand Blanc Community Schools boundaries.",
    realEstateOverview:
      "Grand Blanc's housing stock is heavily weighted toward single-family homes built from the 1970s through the 2010s. You'll find everything from modest ranches in older subdivisions to newer colonial and contemporary homes in planned developments. The market here moves at a moderate pace, well-priced homes sell within a month, but you're unlikely to see the same bidding-war intensity as Oakland County.\n\nLot sizes tend to be generous by metro Detroit standards, and many properties include features like finished basements and attached garages that would cost significantly more in communities closer to Detroit.",
    locationAccess: [
      "Located along I-75, approximately 60 miles northwest of Detroit",
      "15 minutes south of downtown Flint",
      "Easy access to US-23 for connections to Ann Arbor and Toledo",
      "Bishop International Airport (FNT) is approximately 20 minutes north",
    ],
    schoolInfo:
      "Grand Blanc is served by Grand Blanc Community Schools, one of the larger districts in Genesee County. The district operates multiple elementary schools, a middle school complex, and Grand Blanc High School. Verify specific school assignments with the district for any property you're considering.",
    bradQuote:
      "Grand Blanc is where your dollar stretches the furthest without sacrificing school quality or neighborhood feel. Buyers coming from Oakland County are consistently surprised by what $250K buys here, and the commute to Flint-area employers is measured in minutes, not hours.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["fenton-mi", "goodrich-mi", "linden-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Grand Blanc MI")}`,
    faqs: [
      {
        q: "Is Grand Blanc a good place to buy a first home?",
        a: "Yes. Entry-level homes under $200K are available in well-maintained subdivisions with good access to schools and shopping. The combination of affordability and school district quality makes Grand Blanc one of the strongest first-time buyer markets in Genesee County.",
      },
      {
        q: "How far is Grand Blanc from Oakland County?",
        a: "Grand Blanc is approximately 30–40 minutes north of northern Oakland County cities like Clarkston and Oxford via I-75. Some buyers commute south to Oakland County employers, though it's a longer drive than most Metro Detroit suburbs.",
      },
      {
        q: "What's the job market like near Grand Blanc?",
        a: "The largest employers in the area include Genesys Regional Medical Center, the Grand Blanc school district, and various General Motors facilities in the broader Flint area. Many residents also commute to employers along the I-75 corridor.",
      },
      {
        q: "How does Grand Blanc compare to Fenton?",
        a: "Both are affordable Genesee County options, but they have different characters. Grand Blanc is more suburban and subdivision-oriented. Fenton has a charming downtown and lakeside identity. Grand Blanc tends to have slightly lower price points and larger school enrollment.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "fenton-mi",
    name: "Fenton",
    county: "Genesee",
    state: "MI",
    zipCodes: ["48430"],
    marketStats: {
      medianPrice: 295000,
      medianPriceChange: 6.8,
      daysOnMarket: 25,
      pricePerSqft: 160,
    },
    priceRange: {
      low: "Under $225K gets you a solid ranch or bungalow in town, often within walking distance of downtown Fenton.",
      high: "$225K–$400K brings updated homes on larger lots, newer subdivisions, and properties with lake access or proximity.",
      luxury: "Above $400K you're into lakefront homes on Lake Fenton, Silver Lake, or Marl Lake, direct waterfront with private docks.",
    },
    schoolDistrict: "Fenton Area Public Schools",
    commuteToDetroit: "55 min",
    about:
      "Fenton is a small city in southwestern Genesee County with a genuine downtown, a thriving restaurant scene, and access to several inland lakes that define the area's identity. The city sits at the intersection of US-23 and Silver Lake Road, making it a natural crossroads between Flint, Ann Arbor, and the northern Oakland County communities.\n\nThe downtown along LeRoy Street has seen significant reinvestment over the past decade: local restaurants, coffee shops, breweries, and boutiques have filled storefronts and created a walkable core that draws visitors from surrounding communities. Fenton's lakeside lifestyle is the primary draw for buyers who want waterfront living without lakefront pricing found in northern Michigan.",
    realEstateOverview:
      "Fenton's real estate market splits into two distinct tiers: in-town homes and lakefront properties. In-town inventory includes bungalows, ranches, and colonials from the mid-20th century through recent construction. Lakefront homes on Lake Fenton, Silver Lake, and Marl Lake command premium pricing and move quickly when priced correctly.\n\nThe area has also seen newer subdivision development east and south of town, attracting buyers who want the Fenton lifestyle without necessarily being on the water. Inventory turns over at a healthy pace, this isn't a market where homes sit for months.",
    locationAccess: [
      "Direct access to US-23 for quick connections north to Flint or south to Ann Arbor",
      "Approximately 55 minutes northwest of Detroit via US-23 and I-96",
      "25 minutes south of downtown Flint",
      "Surrounded by Lake Fenton, Silver Lake, and Marl Lake",
    ],
    schoolInfo:
      "Fenton is served by Fenton Area Public Schools, which includes multiple elementary schools, a middle school, and Fenton High School. The district serves the city of Fenton and portions of the surrounding township. Confirm specific school assignments with the district for any address.",
    bradQuote:
      "Fenton is what happens when a small town gets it right. The downtown has real energy, the lakes give it a resort feel, and the pricing is still accessible compared to anything in Oakland County. I'm seeing more buyers from the south side of Metro Detroit discover this market every year.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["grand-blanc-mi", "linden-mi", "hartland-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Fenton MI")}`,
    faqs: [
      {
        q: "What lakes are near Fenton?",
        a: "Fenton is surrounded by several desirable inland lakes including Lake Fenton (the largest), Silver Lake, and Marl Lake. Lakefront homes are available on all three, with pricing that varies based on lot size, lake size, and home condition. Lake Fenton properties tend to command the highest premiums.",
      },
      {
        q: "Is Fenton's downtown walkable?",
        a: "Yes. Downtown Fenton along LeRoy Street is one of the most walkable small-town centers in the region. Restaurants, coffee shops, a brewery, and independent retail are concentrated within a few blocks. The Fenton community hosts regular downtown events throughout the year.",
      },
      {
        q: "How does Fenton compare to Brighton?",
        a: "Both are desirable small cities with lake access and active downtowns. Brighton is in Livingston County and tends to run $30K–$60K higher on comparable homes. Fenton has a slightly more small-town feel and is closer to Flint, while Brighton is positioned more toward the Ann Arbor–Detroit corridor.",
      },
      {
        q: "Are there new construction options in Fenton?",
        a: "Yes. Several newer subdivisions have been developed in Fenton Township east and south of the city center. These offer contemporary floor plans and modern finishes at prices that are competitive compared to new construction in Oakland or Livingston counties.",
      },
    ],
    ctaVariant: "both",
  },

  {
    slug: "linden-mi",
    name: "Linden",
    county: "Genesee",
    state: "MI",
    zipCodes: ["48451"],
    marketStats: {
      medianPrice: 275000,
      medianPriceChange: 4.5,
      daysOnMarket: 30,
      pricePerSqft: 150,
    },
    priceRange: {
      low: "Under $200K gets you a ranch or older home in town, often on a quiet residential street within walking distance of the mill pond area.",
      high: "$200K–$350K brings updated colonials, newer builds in surrounding Argentine Township, and homes with acreage.",
      luxury: "Above $350K you're looking at lakefront properties on Byram Lake or larger parcels with custom-built homes in the surrounding countryside.",
    },
    schoolDistrict: "Linden Community Schools",
    commuteToDetroit: "60 min",
    about:
      "Linden is a small, quiet community just west of Fenton in southwestern Genesee County. The city centers around a historic mill pond and a compact downtown with a handful of shops and restaurants. It's the kind of place where neighbors know each other and the pace is deliberately slower than the metro sprawl to the south.\n\nThe surrounding Argentine Township offers a more rural setting with larger lots and agricultural land, while still providing easy access to US-23 for commuters. Linden's appeal is straightforward: small-town living with reasonable home prices and a solid school district.",
    realEstateOverview:
      "Linden's housing stock is modest in scale: primarily ranches, bungalows, and colonials built from the 1950s through the 1990s in the city proper, with newer construction scattered through the township. The market is quiet but steady, with homes turning over at a moderate pace.\n\nBuyers looking for rural-adjacent living with a community anchor will find what they're looking for here. Lakefront properties on Byram Lake and other nearby bodies of water add a premium tier to an otherwise affordable market.",
    locationAccess: [
      "Located just west of Fenton along Silver Lake Road",
      "US-23 access is approximately 5 minutes east via Fenton",
      "30 minutes south of downtown Flint",
      "Approximately 60 minutes northwest of Detroit",
    ],
    schoolInfo:
      "Linden is served by Linden Community Schools, which includes an elementary school, a middle school, and Linden High School. The district serves the city and portions of surrounding Argentine and Fenton townships.",
    bradQuote:
      "Linden is the sleeper pick in southwestern Genesee County. You get the small-town charm, a solid school district, and pricing that lets you buy more house than you'd ever get closer to Detroit. If quiet and affordable is what you're after, Linden delivers.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["fenton-mi", "grand-blanc-mi", "hartland-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Linden MI")}`,
    faqs: [
      {
        q: "How does Linden compare to Fenton?",
        a: "Linden is smaller, quieter, and more affordable than Fenton. Fenton has a more developed downtown and lake scene. Linden appeals to buyers who want genuine small-town living without paying for Fenton's premium. The two communities are only a few minutes apart.",
      },
      {
        q: "Is Linden rural?",
        a: "The city of Linden itself has a compact residential core around the mill pond. The surrounding Argentine Township is more rural with larger lots and agricultural land. You can find both settings within the Linden school district.",
      },
      {
        q: "What's the commute like from Linden to Metro Detroit?",
        a: "Expect approximately 60 minutes to reach central Oakland County or Detroit via US-23 to I-96 or I-75. The commute is manageable but not short. Linden works best for people who work locally, remotely, or are willing to trade drive time for affordability.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "goodrich-mi",
    name: "Goodrich",
    county: "Genesee",
    state: "MI",
    zipCodes: ["48438"],
    marketStats: {
      medianPrice: 310000,
      medianPriceChange: 5.8,
      daysOnMarket: 32,
      pricePerSqft: 155,
    },
    priceRange: {
      low: "Under $225K gets you an older ranch or small home in the village or on a modest lot in surrounding Atlas Township.",
      high: "$225K–$400K brings newer colonials, homes on several acres, and properties in subdivisions near the Goodrich school complex.",
      luxury: "Above $400K opens up larger parcels with 5+ acres, horse-ready properties, and custom homes built in the rolling Genesee County countryside.",
    },
    schoolDistrict: "Goodrich Area Schools",
    commuteToDetroit: "55 min",
    about:
      "Goodrich is a small village in Atlas Township, positioned in the eastern part of Genesee County between Flint and the northern Oakland County communities. It has a distinctly rural character: rolling hills, horse farms, and open land, while still offering convenient access to I-75 and the Davison Freeway for commuters.\n\nThe village itself is small, with a few local shops and restaurants around the main intersection. Goodrich's primary draw is the combination of a well-regarded school district, affordable acreage, and a rural lifestyle that's still within reasonable driving distance of employment centers in both Genesee and Oakland counties.",
    realEstateOverview:
      "Goodrich's real estate market leans toward larger lots and rural properties. While there are some subdivision-style neighborhoods, many homes sit on one to ten or more acres. The housing stock includes everything from modest ranches to large custom-built homes on multi-acre parcels.\n\nThis is not a high-turnover market, properties tend to be owner-occupied for long periods, and inventory is limited at any given time. When homes do come to market, they tend to attract strong interest, particularly from buyers relocating from more expensive Oakland County communities.",
    locationAccess: [
      "Located along M-15, approximately 15 miles north of Clarkston",
      "I-75 access is approximately 10 minutes west via Grange Hall Road",
      "20 minutes southeast of downtown Flint",
      "Northern Oakland County communities are approximately 20–30 minutes south",
    ],
    schoolInfo:
      "Goodrich is served by Goodrich Area Schools, a smaller district that includes an elementary school, a middle school, and Goodrich High School. The district covers the village and surrounding portions of Atlas Township.",
    bradQuote:
      "Goodrich is where buyers go when they want land, privacy, and a strong school district without paying Oakland County prices. It's rural Michigan at its best: rolling terrain, room to breathe, and a tight-knit community that takes care of its own.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["grand-blanc-mi", "clarkston-mi", "oxford-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Goodrich MI")}`,
    faqs: [
      {
        q: "Is Goodrich considered rural?",
        a: "Yes. Goodrich and the surrounding Atlas Township are distinctly rural. Expect larger lots, agricultural properties, and a country lifestyle. The village has basic services, but for significant shopping or dining, residents typically drive to Grand Blanc or the Clarkston/Ortonville area.",
      },
      {
        q: "Can I find horse property in Goodrich?",
        a: "Absolutely. Goodrich and Atlas Township are popular with equestrian buyers. Multi-acre properties with existing barns or room to build equestrian facilities are regularly available. Zoning in the township is generally accommodating for agricultural and equestrian use.",
      },
      {
        q: "How does Goodrich compare to Clarkston?",
        a: "Clarkston offers more of a village-meets-suburb feel with a walkable downtown and closer proximity to Oakland County employers. Goodrich is more rural, more affordable, and quieter. You get significantly more land for your money in Goodrich, but you're further from the metro employment centers.",
      },
    ],
    ctaVariant: "buyer",
  },

  // ─── LIVINGSTON COUNTY ─────────────────────────────────────────────────────

  {
    slug: "brighton-mi",
    name: "Brighton",
    county: "Livingston",
    state: "MI",
    zipCodes: ["48114", "48116"],
    marketStats: {
      medianPrice: 385000,
      medianPriceChange: 6.2,
      daysOnMarket: 22,
      pricePerSqft: 185,
    },
    priceRange: {
      low: "Under $275K gets you a well-maintained ranch or smaller home in older neighborhoods near the downtown core.",
      high: "$275K–$500K brings updated colonials, newer subdivision homes, and properties with lake access or proximity in Brighton Township.",
      luxury: "Above $500K you're into lakefront homes on Island Lake, Woodland Lake, or custom builds on acreage in the surrounding countryside.",
    },
    schoolDistrict: "Brighton Area Schools",
    commuteToDetroit: "50 min",
    about:
      "Brighton sits at the crossroads of I-96 and US-23 in Livingston County, making it one of the most accessible small cities in the region. The downtown along Grand River Avenue has a genuine Main Street character: independent restaurants, coffee shops, boutiques, and a year-round event calendar that includes the well-known Brighton Art Fair and holiday celebrations.\n\nThe surrounding Brighton Township and Green Oak Township add a layer of lakeside and semi-rural living that's harder to find closer to Detroit. Multiple inland lakes, state recreation areas, and the Huron River corridor give Brighton a recreational identity that distinguishes it from purely suburban communities.",
    realEstateOverview:
      "Brighton's housing market is among the strongest in Livingston County. The city proper offers a walkable residential core with homes from the early to mid-1900s, while surrounding townships feature newer subdivisions, lake communities, and rural parcels. Homes here move quickly, well-priced listings in the Brighton school district regularly attract multiple offers.\n\nThe lakefront segment is particularly competitive. Properties on Island Lake, Woodland Lake, and other area bodies of water carry significant premiums and often sell within days of listing. New construction is active in subdivisions along the I-96 corridor.",
    locationAccess: [
      "Located at the interchange of I-96 and US-23, direct highway access in all directions",
      "Approximately 50 minutes northwest of Detroit via I-96",
      "35 minutes north of Ann Arbor via US-23",
      "Surrounded by Island Lake State Recreation Area and Huron Meadows Metropark",
    ],
    schoolInfo:
      "Brighton is served by Brighton Area Schools, a well-enrolled district that includes multiple elementary buildings, Scranton Middle School, and Brighton High School. The district covers the city and portions of Brighton, Green Oak, Genoa, and Hamburg townships.",
    bradQuote:
      "Brighton is where highway access meets small-town living, and the market reflects it. You're equidistant between Detroit and Ann Arbor, you've got lake life on your doorstep, and downtown Brighton actually has a pulse. That combination keeps demand high and inventory tight.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["howell-mi", "hartland-mi", "south-lyon-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Brighton MI")}`,
    faqs: [
      {
        q: "How does Brighton compare to Howell?",
        a: "Brighton and Howell are the two primary communities in Livingston County. Brighton generally runs $30K–$60K higher on comparable homes and has better highway access. Howell has a slightly more established historic downtown and is the county seat. Both have strong school districts and active real estate markets.",
      },
      {
        q: "Are there lakefront homes available in Brighton?",
        a: "Yes. Brighton is surrounded by multiple inland lakes including Island Lake, Woodland Lake, Ore Lake, and others. Lakefront homes typically start in the mid-$400s and can exceed $800K for premium waterfront positions. These properties are highly sought after and move quickly.",
      },
      {
        q: "What's the commute from Brighton to Detroit or Ann Arbor?",
        a: "Brighton's position at I-96 and US-23 makes both commutes straightforward. Expect approximately 50 minutes to downtown Detroit via I-96 and 35 minutes to Ann Arbor via US-23. Rush hour can add 15–20 minutes to either route.",
      },
      {
        q: "Is there new construction available in Brighton?",
        a: "Yes. Several active subdivisions in Brighton Township and Green Oak Township offer new construction in the Brighton school district. Pricing for new builds typically starts in the mid-$400s and ranges upward depending on lot size and finishes.",
      },
    ],
    ctaVariant: "both",
  },

  {
    slug: "howell-mi",
    name: "Howell",
    county: "Livingston",
    state: "MI",
    zipCodes: ["48843", "48855"],
    marketStats: {
      medianPrice: 345000,
      medianPriceChange: 5.5,
      daysOnMarket: 26,
      pricePerSqft: 175,
    },
    priceRange: {
      low: "Under $250K gets you a ranch or older home in the city, often within walking distance of the historic downtown courthouse square.",
      high: "$250K–$425K brings updated colonials, newer subdivision homes, and properties on larger lots in surrounding Howell Township.",
      luxury: "Above $425K you're into lakefront properties on Thompson Lake or custom homes on multi-acre parcels in the surrounding countryside.",
    },
    schoolDistrict: "Howell Public Schools",
    commuteToDetroit: "55 min",
    about:
      "Howell is the county seat of Livingston County and the commercial center of the area. The historic downtown, anchored by the county courthouse, features a walkable grid of shops, restaurants, and local businesses that host community events year-round, including the popular Howell Melon Festival and Fantasy of Lights holiday celebration.\n\nThe city sits along the I-96 corridor west of Brighton, with Howell Township extending into rolling farmland and lake communities to the north and south. Howell has historically been more affordable than Brighton while offering a similar small-city lifestyle and strong public schools.",
    realEstateOverview:
      "Howell's real estate market offers genuine value relative to communities further east along the I-96 corridor. The city proper has a mix of historic homes near downtown, mid-century ranches and colonials in established neighborhoods, and newer construction in subdivisions along the city's edges.\n\nHowell Township adds lakefront properties on Thompson Lake and other nearby bodies of water, along with rural parcels that appeal to buyers seeking space and privacy. The market moves at a healthy pace, not as frenzied as Brighton, but well-priced homes don't linger.",
    locationAccess: [
      "Located along I-96, approximately 55 minutes northwest of Detroit",
      "40 minutes north of Ann Arbor via M-59 and US-23",
      "Historic downtown centered around the Livingston County Courthouse",
      "Adjacent to Howell Township with access to Thompson Lake and surrounding recreation areas",
    ],
    schoolInfo:
      "Howell is served by Howell Public Schools, which operates multiple elementary schools, two middle schools (Parker and Highlander Way), and Howell High School. The district covers the city and surrounding township areas.",
    bradQuote:
      "Howell is the value play in Livingston County. You get a real downtown, a strong school district, and homes that are $30K–$60K less than comparable properties in Brighton. For buyers who don't need to be right on the highway interchange, Howell is the smarter buy.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["brighton-mi", "hartland-mi", "fenton-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Howell MI")}`,
    faqs: [
      {
        q: "Is Howell more affordable than Brighton?",
        a: "Generally, yes. Comparable homes in Howell tend to run $30K–$60K less than similar properties in Brighton. The tradeoff is slightly longer commute times to Detroit-area employers, as Howell sits further west along I-96.",
      },
      {
        q: "What's Howell's downtown like?",
        a: "Howell has one of the more charming historic downtowns in the region. The courthouse square anchors a grid of local shops, restaurants, and service businesses. The city hosts regular events including farmers markets, festivals, and holiday celebrations that draw visitors from across the county.",
      },
      {
        q: "Are there lake homes in Howell?",
        a: "Yes. Thompson Lake in Howell Township is the primary lakefront market. Other smaller lakes and ponds also have residential properties. Lakefront homes in the Howell area are generally more affordable than comparable waterfront in Brighton or Fenton.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "hartland-mi",
    name: "Hartland",
    county: "Livingston",
    state: "MI",
    zipCodes: ["48353"],
    marketStats: {
      medianPrice: 365000,
      medianPriceChange: 5.8,
      daysOnMarket: 24,
      pricePerSqft: 175,
    },
    priceRange: {
      low: "Under $275K gets you a solid ranch or older colonial on a standard suburban lot in Hartland Township subdivisions.",
      high: "$275K–$450K brings updated homes on larger lots, newer construction, and properties near Hartland's lake communities.",
      luxury: "Above $450K opens up lakefront homes, custom builds on acreage, and newer luxury subdivisions with premium finishes.",
    },
    schoolDistrict: "Hartland Consolidated Schools",
    commuteToDetroit: "50 min",
    about:
      "Hartland Township sits in northeastern Livingston County at the intersection of US-23 and M-59, giving it some of the best highway access in the county. There's no traditional city center. Hartland is a township community centered around its school district and the commercial corridors along M-59.\n\nThe area is defined by a mix of suburban subdivisions, semi-rural properties, and inland lake communities. Multiple lakes including Handy Lake, Round Lake, and Long Lake provide recreational opportunities and drive waterfront demand. Hartland's position between Flint and the northern Oakland County communities makes it a natural choice for commuters who want space without excessive drive times.",
    realEstateOverview:
      "Hartland's real estate market is driven by the school district and highway access. Subdivision homes from the 1980s through the 2010s make up the bulk of available inventory, with newer construction active along the M-59 corridor. Lakefront properties on area lakes represent the premium segment.\n\nThe market here is competitive. Hartland's combination of relatively affordable pricing, strong schools, and excellent highway access keeps demand high. Inventory tends to be tight, especially in the spring and summer selling seasons.",
    locationAccess: [
      "Located at the intersection of US-23 and M-59, dual highway access",
      "Approximately 50 minutes northwest of Detroit",
      "20 minutes north of Brighton, 20 minutes south of Fenton",
      "Multiple inland lakes within the township boundaries",
    ],
    schoolInfo:
      "Hartland is served by Hartland Consolidated Schools, which operates multiple elementary buildings, Hartland Middle School, and Hartland High School. The district is a primary driver of real estate demand in the area.",
    bradQuote:
      "Hartland is one of the best-positioned communities in Livingston County. You've got US-23 and M-59 right there, the lake access adds a lifestyle dimension that keeps property values strong. It's a market I always recommend buyers explore.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["brighton-mi", "fenton-mi", "howell-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Hartland MI")}`,
    faqs: [
      {
        q: "Does Hartland have a downtown?",
        a: "Not in the traditional sense. Hartland is a township, not a city, so there's no walkable downtown core. Commercial activity is concentrated along M-59 and at the US-23 interchange. For a downtown experience, residents typically visit Fenton or Brighton, both about 20 minutes away.",
      },
      {
        q: "What lakes are in Hartland?",
        a: "Hartland Township includes several inland lakes including Handy Lake, Round Lake, Long Lake, and Dunham Lake. Lakefront properties on these bodies of water are popular and tend to sell quickly when available.",
      },
      {
        q: "How does Hartland compare to Brighton?",
        a: "Brighton has a more developed downtown and slightly higher price points. Hartland offers better highway access (dual highways vs. Brighton's single interchange) and comparable school quality. Both are strong Livingston County markets, the choice often comes down to lifestyle preference.",
      },
    ],
    ctaVariant: "both",
  },

  // ─── OAKLAND COUNTY (BORDER) ───────────────────────────────────────────────

  {
    slug: "south-lyon-mi",
    name: "South Lyon",
    county: "Oakland",
    state: "MI",
    zipCodes: ["48178"],
    marketStats: {
      medianPrice: 395000,
      medianPriceChange: 6.5,
      daysOnMarket: 20,
      pricePerSqft: 190,
    },
    priceRange: {
      low: "Under $300K gets you a well-maintained ranch or small colonial in the city proper or older subdivisions near downtown.",
      high: "$300K–$500K brings newer subdivision homes, updated colonials with finished basements, and properties in planned communities like Colonial Acres and Brookstone.",
      luxury: "Above $500K opens up newer luxury subdivisions, custom homes on larger lots, and premium properties in communities bordering Lyon Township's open spaces.",
    },
    schoolDistrict: "South Lyon Community Schools",
    commuteToDetroit: "45 min",
    about:
      "South Lyon is a small city on the western edge of Oakland County, straddling the boundary with Livingston County. It has a genuine downtown along Lake Street and Pontiac Trail, with local restaurants, shops, and a community vibe that distinguishes it from the more corporate-feeling suburbs to the east.\n\nThe city and surrounding Lyon Township have experienced significant growth over the past two decades, with multiple new subdivisions and commercial developments filling in what was previously agricultural land. South Lyon's appeal is its position, close enough to Oakland County employment centers for a reasonable commute, but far enough west to feel less congested and more community-oriented.",
    realEstateOverview:
      "South Lyon's market is split between the charming city core with older, character-rich homes and the newer subdivision developments in surrounding Lyon and Green Oak townships. The school district is the common thread that ties demand together across both segments.\n\nNewer subdivisions have pushed average pricing upward, but the city proper still offers entry points below $300K. The market is competitive. South Lyon's combination of small-town identity, strong schools, and proximity to the I-96 and M-5 corridors keeps buyer demand consistently high.",
    locationAccess: [
      "Located on the western edge of Oakland County along Pontiac Trail",
      "Quick access to I-96 via Grand River Avenue and M-5 (Haggerty connector)",
      "Approximately 45 minutes northwest of Detroit",
      "Adjacent to Milford, Novi, and the Livingston County communities",
    ],
    schoolInfo:
      "South Lyon is served by South Lyon Community Schools, a well-regarded district that includes multiple elementary schools, Millennium Middle School, Centennial Middle School, and South Lyon High School (East and regular campus). The district covers the city and portions of Lyon, Green Oak, Salem, and Northfield townships.",
    bradQuote:
      "South Lyon is one of those markets where you get Oakland County schools and a real small-town feel at a price point that still makes sense. The downtown is authentic, the community is tight, and the growth has been managed well. It's where I'd tell buyers to look when Northville or Novi pricing feels out of reach.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["novi-mi", "northville-mi", "brighton-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("South Lyon MI")}`,
    faqs: [
      {
        q: "How does South Lyon compare to Northville?",
        a: "Northville is more established, more expensive, and has a larger historic downtown. South Lyon is more affordable, growing faster, and has a slightly more relaxed small-town character. Both have strong school districts. Buyers who love the Northville concept but need a lower price point should explore South Lyon.",
      },
      {
        q: "Is South Lyon growing?",
        a: "Yes, significantly. New subdivisions in Lyon and Green Oak townships have expanded the community's footprint. Commercial development along Pontiac Trail has followed. South Lyon is one of the faster-growing communities in western Oakland County.",
      },
      {
        q: "What's the commute from South Lyon to Novi or Farmington Hills?",
        a: "Expect 20–30 minutes to reach Novi or Farmington Hills employment centers. The M-5 connector and Pontiac Trail provide the primary routes. Rush hour can add 10–15 minutes, but the commute is manageable for most.",
      },
      {
        q: "Does South Lyon have a walkable downtown?",
        a: "Yes. The downtown along Lake Street and Pontiac Trail is compact but walkable, with local restaurants, a coffee shop, small retailers, and community gathering spaces. It's not as extensive as Northville's downtown, but it has genuine small-town character.",
      },
    ],
    ctaVariant: "both",
  },

  // ─── WASHTENAW COUNTY ──────────────────────────────────────────────────────

  {
    slug: "ann-arbor-mi",
    name: "Ann Arbor",
    county: "Washtenaw",
    state: "MI",
    zipCodes: ["48103", "48104", "48105", "48108"],
    marketStats: {
      medianPrice: 485000,
      medianPriceChange: 4.8,
      daysOnMarket: 18,
      pricePerSqft: 260,
    },
    priceRange: {
      low: "Under $350K gets you a condo, townhouse, or small bungalow in neighborhoods further from downtown, typically east or south side.",
      high: "$350K–$700K brings single-family homes in established neighborhoods like Burns Park, Kerrytown-area, or the Old West Side. Updated homes with character.",
      luxury: "Above $700K you're looking at premium locations near downtown, homes in the Barton Hills area, larger properties in Ann Arbor Hills, or newer luxury construction.",
    },
    schoolDistrict: "Ann Arbor Public Schools",
    commuteToDetroit: "45 min",
    about:
      "Ann Arbor is the cultural and economic anchor of Washtenaw County, home to the University of Michigan and a thriving ecosystem of technology, healthcare, and research employers. The city of approximately 125,000 residents offers an urban density and walkability that's rare for Michigan: multiple distinct commercial districts, an extensive restaurant scene, and a cultural calendar driven by the university and independent arts community.\n\nReal estate in Ann Arbor is the most competitive in Washtenaw County by a significant margin. The combination of university employment, a highly educated workforce, and limited land for new development keeps pricing elevated and inventory tight. Buyers should be prepared to move quickly and compete.",
    realEstateOverview:
      "Ann Arbor's housing stock ranges from historic homes in neighborhoods like Burns Park, the Old West Side, and Water Hill to mid-century ranches and colonials in the city's residential rings, to newer condominiums and townhouses near downtown and along the Huron River corridor.\n\nThe market is intensely competitive. Well-priced homes in desirable neighborhoods regularly receive multiple offers within days of listing. The condo and townhouse market provides more accessible entry points but is also fast-moving. New construction within city limits is limited by available land, which contributes to persistent upward pressure on pricing.",
    locationAccess: [
      "Located along US-23, approximately 45 minutes west of Detroit via I-94",
      "Home to the University of Michigan, Michigan Medicine, and a major tech corridor",
      "Downtown is walkable with extensive bus transit (TheRide/AAATA)",
      "Detroit Metropolitan Airport is approximately 25 minutes east via I-94",
    ],
    schoolInfo:
      "Ann Arbor is served by Ann Arbor Public Schools, one of the larger districts in the state. The district operates numerous elementary schools, multiple middle schools, and several high schools including Pioneer, Huron, and Skyline. School boundaries vary, verify specific assignments with the district for any address.",
    bradQuote:
      "Ann Arbor is a market unto itself. University of Michigan creates a floor under demand that doesn't exist in most Michigan markets: between faculty, hospital system employees, and the tech corridor, there's always a deep pool of qualified buyers. If you're buying here, come prepared to compete from day one.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["ypsilanti-mi", "saline-mi", "dexter-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Ann Arbor MI")}`,
    faqs: [
      {
        q: "How competitive is the Ann Arbor real estate market?",
        a: "Very. Ann Arbor is consistently one of the most competitive markets in Michigan. Well-priced homes in desirable neighborhoods often receive multiple offers within the first week. Having financing fully approved before you begin looking is essential, not optional.",
      },
      {
        q: "Is Ann Arbor affordable for first-time buyers?",
        a: "Single-family homes under $300K are rare within Ann Arbor city limits. First-time buyers typically look at condos or townhouses in Ann Arbor, or explore nearby communities like Ypsilanti, Saline, or Dexter where single-family homes are more accessible.",
      },
      {
        q: "What drives Ann Arbor's pricing?",
        a: "The University of Michigan is the primary driver. The university and Michigan Medicine together employ tens of thousands of well-compensated professionals. Add in the tech corridor, limited buildable land, and a culture that attracts national relocations, and you get persistent demand against constrained supply.",
      },
      {
        q: "How does Ann Arbor compare to Birmingham?",
        a: "Both are premium walkable communities with strong demand. Birmingham is oriented toward the corporate Oakland County employer base. Ann Arbor is anchored by the university and tech sectors. Pricing is comparable in many segments, though Ann Arbor offers more diversity in housing types including condos and urban options.",
      },
    ],
    ctaVariant: "both",
  },

  {
    slug: "ypsilanti-mi",
    name: "Ypsilanti",
    county: "Washtenaw",
    state: "MI",
    zipCodes: ["48197", "48198"],
    marketStats: {
      medianPrice: 245000,
      medianPriceChange: 8.2,
      daysOnMarket: 20,
      pricePerSqft: 165,
    },
    priceRange: {
      low: "Under $175K gets you a bungalow or ranch in Ypsilanti Township or the city's east side, solid starter home territory.",
      high: "$175K–$325K brings updated homes in the Depot Town area, Normal Park, or College Heights neighborhoods, walkable to downtown with character.",
      luxury: "Above $325K you're looking at fully renovated historic homes, larger properties near the river, or newer construction in Ypsilanti Township subdivisions.",
    },
    schoolDistrict: "Ypsilanti Community Schools / Lincoln Consolidated Schools",
    commuteToDetroit: "40 min",
    about:
      "Ypsilanti sits just east of Ann Arbor and has emerged as one of Washtenaw County's most dynamic communities. The city has two distinct commercial centers, downtown Ypsilanti along Michigan Avenue and the Depot Town district along the Huron River: both featuring independent restaurants, breweries, galleries, and music venues that have earned the city a reputation for authenticity and cultural energy.\n\nEastern Michigan University anchors the city's north side, while Ypsilanti Township to the south and east offers more traditional suburban development. Ypsilanti has seen significant reinvestment in recent years as buyers priced out of Ann Arbor have discovered the city's walkable neighborhoods, historic housing stock, and substantially lower price points.",
    realEstateOverview:
      "Ypsilanti offers one of the strongest value propositions in Washtenaw County. Historic neighborhoods like Normal Park, College Heights, and the Depot Town area feature craftsman bungalows, foursquares, and colonials at price points that are 40–50% below comparable Ann Arbor properties.\n\nThe market has been appreciating faster than the county average as Ann Arbor spillover drives demand. Ypsilanti Township adds a suburban dimension with newer subdivisions and larger lot properties. Inventory moves quickly in the city's most desirable walkable neighborhoods, buyers should be prepared to act decisively.",
    locationAccess: [
      "Located along I-94, approximately 40 minutes west of Detroit",
      "Immediately east of Ann Arbor, 10 minutes to downtown Ann Arbor via Washtenaw Avenue",
      "Depot Town and downtown Ypsilanti are walkable commercial districts",
      "Detroit Metropolitan Airport is approximately 15 minutes east via I-94",
    ],
    schoolInfo:
      "Ypsilanti is served by Ypsilanti Community Schools in the city proper and Lincoln Consolidated Schools in portions of the township. School district boundaries are complex in this area, always verify which district a specific property falls within before making assumptions.",
    bradQuote:
      "Ypsilanti is where smart buyers go when Ann Arbor's pricing doesn't work. You get walkable neighborhoods, genuinely interesting restaurants and culture, and homes that are $150K–$200K less than comparable properties ten minutes west. The appreciation numbers tell the story, this market is being discovered.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["ann-arbor-mi", "saline-mi", "romulus-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Ypsilanti MI")}`,
    faqs: [
      {
        q: "How does Ypsilanti compare to Ann Arbor?",
        a: "Ypsilanti is significantly more affordable, comparable homes run 40–50% less than Ann Arbor. The tradeoff is a less established commercial base and different school districts. But for buyers who want walkability, character, and proximity to Ann Arbor employers, Ypsilanti is the clear value play in Washtenaw County.",
      },
      {
        q: "Is Ypsilanti a good investment?",
        a: "Recent appreciation data says yes. Ypsilanti has been appreciating faster than the county average as demand spills over from Ann Arbor. The combination of low entry prices and strong appreciation potential makes it attractive for both owner-occupants and investors.",
      },
      {
        q: "What's Depot Town?",
        a: "Depot Town is a historic commercial district along the Huron River on Ypsilanti's east side. It's home to some of the area's best restaurants, the Sidetrack Bar & Grill, the Ypsilanti Farmers Market, and a growing collection of small businesses. It's one of the main draws for buyers choosing Ypsilanti.",
      },
      {
        q: "What about the school districts in Ypsilanti?",
        a: "This is an important detail. The city of Ypsilanti is served by Ypsilanti Community Schools, while portions of Ypsilanti Township fall under Lincoln Consolidated Schools. The districts have different characteristics, verify which district applies to any specific property you're considering.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "saline-mi",
    name: "Saline",
    county: "Washtenaw",
    state: "MI",
    zipCodes: ["48176"],
    marketStats: {
      medianPrice: 425000,
      medianPriceChange: 5.5,
      daysOnMarket: 19,
      pricePerSqft: 210,
    },
    priceRange: {
      low: "Under $325K gets you an older ranch or smaller home in the city proper, within walking distance of downtown Saline.",
      high: "$325K–$550K brings updated colonials, newer subdivision homes, and properties in Saline's popular planned communities.",
      luxury: "Above $550K opens up newer luxury builds, homes on acreage south of town, and premium properties in the Saline school district's most desirable subdivisions.",
    },
    schoolDistrict: "Saline Area Schools",
    commuteToDetroit: "45 min",
    about:
      "Saline is a small city approximately 10 miles south of Ann Arbor that has grown from a quiet agricultural community into one of Washtenaw County's most desirable residential markets. The downtown along Michigan Avenue retains a genuine small-town character with local restaurants, shops, and the iconic Saline River running through town.\n\nThe school district is the primary demand driver. The city is served by Saline Area Schools. The city and surrounding Saline Township offer a mix of walkable in-town living and newer subdivision development that appeals to a wide range of buyers.",
    realEstateOverview:
      "Saline's real estate market is anchored by its school district reputation. The city offers a range from older homes near the downtown core to newer subdivisions on the city's expanding edges. Pricing sits between Ann Arbor (higher) and Ypsilanti or Milan (lower), making it a middle-market sweet spot.\n\nInventory tends to be tight, particularly for homes in the $350K–$500K range that represent the core of the market. Well-priced listings attract quick interest, and the spring selling season is especially competitive.",
    locationAccess: [
      "Located approximately 10 miles south of Ann Arbor along US-12 and M-17",
      "Quick access to US-23 for northbound connections to I-96 and I-94",
      "Approximately 45 minutes west of Detroit via US-23 and I-94",
      "Downtown Saline is a compact, walkable commercial district along Michigan Avenue",
    ],
    schoolInfo:
      "Saline is served by Saline Area Schools, which includes multiple elementary buildings, Saline Middle School, and Saline High School. The district's reputation is a primary driver of housing demand in the area.",
    bradQuote:
      "Saline is the family market in Washtenaw County, full stop. The school district drives everything here. Buyers relocating to the Ann Arbor area who want strong schools, a real community, and pricing below Ann Arbor proper consistently land in Saline. The market reflects that demand.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["ann-arbor-mi", "ypsilanti-mi", "dexter-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Saline MI")}`,
    faqs: [
      {
        q: "How does Saline compare to Ann Arbor?",
        a: "Saline is more affordable than Ann Arbor, comparable homes run $50K–$100K less. The tradeoff is less urban amenity and nightlife. But Saline's small-town feel and lower pricing make it a preferred alternative to Ann Arbor proper.",
      },
      {
        q: "Is Saline growing?",
        a: "Yes. New subdivision development on the city's edges has expanded Saline's footprint, and commercial development along Michigan Avenue has followed. Growth has been measured, the city hasn't lost its character, but it's clearly trending upward in both population and property values.",
      },
      {
        q: "What's downtown Saline like?",
        a: "Downtown Saline along Michigan Avenue is a compact, walkable district with local restaurants, a coffee shop, independent retail, and the Saline River running through. It's smaller than Ann Arbor's or Brighton's downtown, but it has authentic small-town character.",
      },
    ],
    ctaVariant: "both",
  },

  {
    slug: "dexter-mi",
    name: "Dexter",
    county: "Washtenaw",
    state: "MI",
    zipCodes: ["48130"],
    marketStats: {
      medianPrice: 435000,
      medianPriceChange: 5.0,
      daysOnMarket: 21,
      pricePerSqft: 205,
    },
    priceRange: {
      low: "Under $325K gets you an older home in the village, a condo, or a smaller property in surrounding townships.",
      high: "$325K–$550K brings updated village homes, newer subdivision properties, and homes with river or nature access in Dexter Township.",
      luxury: "Above $550K you're into custom homes on acreage, waterfront properties on area lakes, and premium positions along the Huron River corridor.",
    },
    schoolDistrict: "Dexter Community Schools",
    commuteToDetroit: "55 min",
    about:
      "Dexter is a small village approximately 10 miles northwest of Ann Arbor, situated along the Huron River in a landscape of rolling hills, farmland, and nature preserves. The village has a compact, walkable downtown with local restaurants, coffee shops, and a growing collection of small businesses.\n\nThe community appeals to buyers who want proximity to Ann Arbor's employment base without living in the city. Dexter's school district, natural setting, and village character create a distinctly different lifestyle than what's available in Ann Arbor or the more suburban communities to the south and east.",
    realEstateOverview:
      "Dexter's real estate market is driven by two factors: the school district and the natural setting. The village core offers historic and character homes within walking distance of downtown. Surrounding Dexter, Webster, and Scio townships add subdivision homes, rural parcels, and properties along the Huron River corridor.\n\nInventory is limited. Dexter is a small community, and turnover is moderate. When well-priced homes hit the market in the school district, they attract interest quickly. The rural parcels and custom-home segment adds a tier that appeals to buyers seeking privacy and space.",
    locationAccess: [
      "Located along Huron River Drive, approximately 10 miles northwest of Ann Arbor",
      "I-94 access is approximately 10 minutes south via Baker Road",
      "Approximately 55 minutes west of Detroit",
      "Surrounded by Huron River, Hudson Mills Metropark, and Pinckney State Recreation Area",
    ],
    schoolInfo:
      "Dexter is served by Dexter Community Schools, a well-regarded smaller district that includes elementary schools, Creekside Intermediate School, Mill Creek Middle School, and Dexter High School.",
    bradQuote:
      "Dexter is Ann Arbor's escape hatch for buyers who want nature, space, and a village feel without giving up access to everything Ann Arbor offers. The Huron River, the parks, and the rolling terrain make it feel like you're much further from the city than you actually are. Ten minutes and you're in downtown Ann Arbor.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["ann-arbor-mi", "chelsea-mi", "brighton-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Dexter MI")}`,
    faqs: [
      {
        q: "How far is Dexter from Ann Arbor?",
        a: "About 10 miles or 15–20 minutes driving. Many Dexter residents commute to Ann Arbor for work, the drive along Huron River Drive or via I-94 is scenic and manageable. Dexter functions effectively as a satellite community for Ann Arbor employers.",
      },
      {
        q: "Is Dexter walkable?",
        a: "The village core is compact and walkable, you can walk to restaurants, the coffee shop, and local businesses from most village addresses. Beyond the village, the community is car-dependent. The natural setting makes it great for hiking and biking, but not for walking to services.",
      },
      {
        q: "What outdoor recreation is near Dexter?",
        a: "Dexter has exceptional outdoor access. Hudson Mills Metropark, the Huron River (paddling and fishing), Pinckney State Recreation Area, and the Border-to-Border Trail are all within minutes. This is one of the primary draws for buyers choosing Dexter over more suburban alternatives.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "chelsea-mi",
    name: "Chelsea",
    county: "Washtenaw",
    state: "MI",
    zipCodes: ["48118"],
    marketStats: {
      medianPrice: 375000,
      medianPriceChange: 4.5,
      daysOnMarket: 28,
      pricePerSqft: 190,
    },
    priceRange: {
      low: "Under $275K gets you a ranch or older home in the village or a manufactured home in the surrounding township areas.",
      high: "$275K–$475K brings updated village homes, newer subdivision properties, and homes on several acres in surrounding Sylvan and Lima townships.",
      luxury: "Above $475K opens up larger rural parcels, lakefront properties, and custom homes in the rolling western Washtenaw County countryside.",
    },
    schoolDistrict: "Chelsea School District",
    commuteToDetroit: "65 min",
    about:
      "Chelsea is a small city in western Washtenaw County known for its charming downtown, the Purple Rose Theatre (founded by Jeff Daniels), and a surrounding landscape of farmland, lakes, and rolling terrain. The community sits along I-94 between Ann Arbor and Jackson, offering a distinctly small-town lifestyle that's further removed from the metro area than most Washtenaw communities.\n\nThe downtown along Main Street has restaurants, shops, a bookstore, and the kind of sidewalk-strolling atmosphere that attracts both residents and day-trippers. Chelsea's identity is rooted in arts, agriculture, and community, it doesn't try to be suburban, and that's precisely the appeal.",
    realEstateOverview:
      "Chelsea's real estate market serves buyers looking for genuine small-town and rural living within reach of Ann Arbor and I-94 corridor employment. The village core offers historic homes with character, while surrounding townships provide rural parcels, lake properties, and newer subdivision homes.\n\nPricing is generally below Ann Arbor and comparable to or slightly below Dexter and Saline. The market moves at a moderate pace. Chelsea attracts a specific buyer profile that values community, nature, and quiet over proximity and convenience.",
    locationAccess: [
      "Located along I-94, approximately 15 miles west of Ann Arbor",
      "65 minutes west of Detroit via I-94",
      "Surrounded by Waterloo State Recreation Area and Gerald E. Eddy Discovery Center",
      "Downtown Chelsea is a walkable Main Street district with shops, restaurants, and the Purple Rose Theatre",
    ],
    schoolInfo:
      "Chelsea is served by the Chelsea School District, which operates Beach Elementary, Beach Middle School, and Chelsea High School. The district covers the city and surrounding portions of Sylvan, Lima, Lyndon, and Dexter townships.",
    bradQuote:
      "Chelsea is for buyers who want to live in a real place, not a subdivision, not a mall corridor, but a community with a downtown, a theater, and farmers who still work the surrounding land. It's further out, but that distance is the point. You trade commute time for a quality of life that's hard to find closer to the city.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["dexter-mi", "ann-arbor-mi", "saline-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Chelsea MI")}`,
    faqs: [
      {
        q: "How far is Chelsea from Ann Arbor?",
        a: "Approximately 15 miles west, or about 20–25 minutes via I-94. The commute is straightforward but places Chelsea further from the metro core than Dexter or Saline. Many Chelsea residents work in Ann Arbor or remotely.",
      },
      {
        q: "What's the Purple Rose Theatre?",
        a: "The Purple Rose Theatre Company was founded by actor Jeff Daniels (a Chelsea native) in 1991. It's a professional regional theater that produces original and contemporary works year-round. It's a significant cultural asset and a source of community pride.",
      },
      {
        q: "Is Chelsea rural?",
        a: "The village itself is compact and walkable. Surrounding Sylvan, Lima, and Lyndon townships are distinctly rural: farmland, rolling hills, and state recreation areas. You can find both settings within the Chelsea school district, which is part of the appeal.",
      },
    ],
    ctaVariant: "buyer",
  },

  // ─── MONROE COUNTY ─────────────────────────────────────────────────────────

  {
    slug: "monroe-mi",
    name: "Monroe",
    county: "Monroe",
    state: "MI",
    zipCodes: ["48161", "48162"],
    marketStats: {
      medianPrice: 215000,
      medianPriceChange: 6.0,
      daysOnMarket: 30,
      pricePerSqft: 130,
    },
    priceRange: {
      low: "Under $150K gets you a functional ranch, bungalow, or starter home in the city, one of the most affordable entry points in Southeast Michigan.",
      high: "$150K–$300K brings updated homes in the city's better neighborhoods, properties in Monroe Township subdivisions, and homes near Sterling State Park.",
      luxury: "Above $300K opens up waterfront properties along Lake Erie, larger homes on acreage in the township, and newer construction south of the city.",
    },
    schoolDistrict: "Monroe Public Schools",
    commuteToDetroit: "45 min",
    about:
      "Monroe is the county seat of Monroe County and the largest city in Michigan's southernmost county. Situated along the River Raisin and near the shores of Lake Erie, Monroe has a historic identity that predates Michigan statehood, it was the site of the Battle of the River Raisin in the War of 1812.\n\nThe city offers a mix of historic neighborhoods, commercial corridors, and proximity to Lake Erie's recreational opportunities including Sterling State Park, Michigan's only state park on Lake Erie. Monroe's position along I-75 between Detroit and Toledo makes it accessible to employment centers in both metro areas.",
    realEstateOverview:
      "Monroe offers some of the most affordable housing in Southeast Michigan. The city and surrounding townships have a wide range of inventory from older historic homes near downtown to mid-century neighborhoods to newer suburban development in the township.\n\nThe market has been appreciating at a healthy clip as buyers discover the value proposition, homes here cost a fraction of what comparable properties command in Wayne or Oakland counties. Lake Erie access adds a lifestyle dimension that's unique to Monroe County. The market moves at a moderate pace, giving buyers more time to evaluate than in faster-moving markets to the north.",
    locationAccess: [
      "Located along I-75, approximately 45 minutes south of Detroit",
      "40 minutes north of Toledo, Ohio via I-75",
      "Sterling State Park and Lake Erie shoreline access",
      "River Raisin runs through the city center, connecting to Lake Erie",
    ],
    schoolInfo:
      "Monroe is served by Monroe Public Schools, which operates multiple elementary buildings, middle schools, and Monroe High School. Other districts including Jefferson Schools and Airport Community Schools serve portions of Monroe Township and surrounding areas.",
    bradQuote:
      "Monroe is the most undervalued market in Southeast Michigan. You're 45 minutes from Detroit, you have Lake Erie access, and the median price is under $220K. Buyers who can handle the I-75 commute are getting two to three times the house they'd get in Wayne County. The appreciation numbers are starting to reflect what we've been telling people for years.",
    quoteAuthor: "Sarah",
    nearbySlugsSee: ["dundee-mi", "romulus-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Monroe MI")}`,
    faqs: [
      {
        q: "How affordable is Monroe compared to Metro Detroit?",
        a: "Significantly more affordable. Monroe's median home price is roughly half of what you'd pay in most Wayne County suburbs and a third of Oakland County pricing. For buyers willing to commute, the value proposition is compelling.",
      },
      {
        q: "Does Monroe have Lake Erie access?",
        a: "Yes. Sterling State Park on Monroe's eastern edge is Michigan's only state park on Lake Erie, offering beaches, fishing, and boating access. The Lake Erie shoreline and River Raisin also provide recreational opportunities throughout the area.",
      },
      {
        q: "What's the commute from Monroe to Detroit?",
        a: "Approximately 45 minutes via I-75 under normal conditions. Rush hour can extend this to 60–75 minutes depending on your specific destination. Some Monroe residents also commute south to Toledo, Ohio, which is about 40 minutes.",
      },
      {
        q: "Is Monroe growing?",
        a: "Monroe Township and the areas along I-75 are seeing gradual residential development. The city itself is stable with modest reinvestment in the downtown and riverfront areas. Growth is measured rather than rapid, but property values have been trending upward.",
      },
    ],
    ctaVariant: "buyer",
  },

  {
    slug: "dundee-mi",
    name: "Dundee",
    county: "Monroe",
    state: "MI",
    zipCodes: ["48131"],
    marketStats: {
      medianPrice: 225000,
      medianPriceChange: 7.0,
      daysOnMarket: 32,
      pricePerSqft: 135,
    },
    priceRange: {
      low: "Under $165K gets you a ranch, bungalow, or older home in the village or surrounding Dundee Township.",
      high: "$165K–$300K brings updated homes on larger lots, newer construction, and properties with acreage in the surrounding agricultural area.",
      luxury: "Above $300K opens up custom homes on multi-acre parcels, waterfront properties on area lakes, and newer builds with significant land.",
    },
    schoolDistrict: "Dundee Community Schools",
    commuteToDetroit: "50 min",
    about:
      "Dundee is a small village in northwestern Monroe County along the River Raisin, offering a genuine rural small-town experience with modern accessibility. The village sits near the intersection of US-23 and M-50, providing reasonable highway access to both the Detroit metro area and Toledo.\n\nDundee's identity is rooted in its agricultural surroundings and small-town character. The Cabela's retail destination along US-23 has put Dundee on the map for visitors, but for residents, the appeal is simpler: affordable homes, open space, and a community where people know their neighbors.",
    realEstateOverview:
      "Dundee's real estate market is among the most affordable in the region. The village offers a small core of residential properties, while surrounding Dundee Township provides larger lots, agricultural parcels, and scattered newer development.\n\nThis is not a high-volume market, inventory is limited, and turnover is moderate. But for buyers seeking maximum value and willing to embrace a rural-adjacent lifestyle, Dundee offers price points that are difficult to match anywhere else in Southeast Michigan.",
    locationAccess: [
      "Located near the intersection of US-23 and M-50 in northwestern Monroe County",
      "Approximately 50 minutes south of Detroit via US-23",
      "30 minutes north of Toledo, Ohio",
      "River Raisin runs through the village",
    ],
    schoolInfo:
      "Dundee is served by Dundee Community Schools, a smaller district that includes an elementary school, a middle school, and Dundee High School. The district covers the village and surrounding portions of Dundee Township.",
    bradQuote:
      "Dundee is where your dollar goes the furthest in the entire Southeast Michigan market. If you work along the US-23 corridor or can handle a longer commute, the amount of house and land you get here is genuinely surprising. It's not for everyone, but for the right buyer, Dundee is a home run.",
    quoteAuthor: "Brad",
    nearbySlugsSee: ["monroe-mi", "saline-mi"],
    sierraSearchUrl: `https://www.oakandstonerealestate.com/search#?q=${encodeURIComponent("Dundee MI")}`,
    faqs: [
      {
        q: "How affordable is Dundee?",
        a: "Dundee is one of the most affordable markets in Southeast Michigan. Entry-level homes under $165K are available, and even updated properties rarely exceed $300K. For buyers on a budget, Dundee represents exceptional value.",
      },
      {
        q: "Is Dundee rural?",
        a: "Yes. The village has a small residential core, but the surrounding area is predominantly agricultural. This is a rural community: expect open farmland, larger lots, and a lifestyle oriented around small-town and country living.",
      },
      {
        q: "What's the commute from Dundee to Detroit?",
        a: "Approximately 50 minutes via US-23 to I-94 or I-75. The commute is manageable but not short. Dundee works best for people who work locally, remotely, or along the US-23 corridor.",
      },
    ],
    ctaVariant: "buyer",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return cities.map((c) => c.slug);
}

/**
 * New city slugs for Washtenaw, Livingston, Genesee, and Monroe counties.
 * These pages render a "Coming Soon" template until full city content is added.
 * When content is ready, move the slug into `cities` above.
 */
export const COMING_SOON_SLUGS: ReadonlyArray<string> = [
  "milan-mi",
  "whitmore-lake-mi",
] as const;

export function isComingSoonSlug(slug: string): boolean {
  return (COMING_SOON_SLUGS as ReadonlyArray<string>).includes(slug);
}
