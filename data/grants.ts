/**
 * Michigan Homebuyer Grant & Down Payment Assistance Programs
 *
 * All qualification logic runs client-side. No API needed.
 * Data sourced from MSHDA, county housing authorities, and federal programs.
 * Last updated: September 1, 2026
 */

// Monthly grant task: bump BOTH dates when refreshing this file.
// Shown on /grants and in its structured data; freshness is a citation signal.
export const GRANTS_LAST_UPDATED = "September 1, 2026";
export const GRANTS_LAST_UPDATED_ISO = "2026-09-01";

// ── Types ────────────────────────────────────────────────────────────────────

export type County =
  | "Oakland"
  | "Wayne"
  | "Macomb"
  | "Washtenaw"
  | "Livingston"
  | "Genesee"
  | "Monroe";

export type CreditScoreRange =
  | "below-620"
  | "620-659"
  | "660-679"
  | "680-719"
  | "720-plus"
  | "not-sure";

export type OccupationCategory =
  | "none"
  | "teacher"
  | "law-enforcement"
  | "firefighter"
  | "emt"
  | "military-veteran"
  | "healthcare"
  | "government"
  | "other";

export interface BuyerProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  county: County;
  city: string;
  householdSize: number;
  annualIncome: number;
  purchasePrice: number;
  isFirstTimeBuyer: boolean;
  isVeteran: boolean;
  occupation: OccupationCategory;
  creditScore: CreditScoreRange;
  livesInDetroit: boolean;
}

export interface GrantProgram {
  id: string;
  name: string;
  amount: string;
  type: "grant" | "forgivable-loan" | "loan" | "rate-reduction";
  description: string;
  highlights: string[];
  requirements: string[];
  url: string;
  qualify: (p: BuyerProfile) => { eligible: boolean; missing: string[] };
}

// ── Income Limits ────────────────────────────────────────────────────────────

// MSHDA MI Home Loan / MI 10K DPA / MCC limits, effective June 1, 2026.
// Source: MSHDA "Income and Sales Price Limits" (6.1.2026).
// MSHDA splits limits two ways: 1-2 person vs 3-or-more person households, and
// targeted vs non-targeted areas. Targeted areas also allow repeat buyers.
type MshdaLimit = { small: number; large: number }; // 1-2 persons, 3 or more

const MSHDA_NON_TARGETED: Record<County, MshdaLimit> = {
  Oakland: { small: 104_800, large: 120_520 },
  Wayne: { small: 104_800, large: 120_520 },
  Macomb: { small: 104_800, large: 120_520 },
  Livingston: { small: 129_000, large: 148_350 },
  Genesee: { small: 98_400, large: 113_160 },
  Monroe: { small: 98_400, large: 113_160 },
  // Washtenaw is targeted countywide, so this row is never used for it.
  Washtenaw: { small: 170_760, large: 199_220 },
};

const MSHDA_TARGETED: Record<County, MshdaLimit> = {
  Oakland: { small: 125_760, large: 146_720 },
  Wayne: { small: 125_760, large: 146_720 },
  Macomb: { small: 125_760, large: 146_720 },
  Livingston: { small: 154_800, large: 180_600 },
  Genesee: { small: 118_080, large: 137_760 },
  Monroe: { small: 118_080, large: 137_760 },
  Washtenaw: { small: 170_760, large: 199_220 },
};

// MSHDA targeted areas inside the seven counties this tool covers, per the same
// MSHDA table. Note Oakland's targeted area is Royal Oak Township, which is not
// the City of Royal Oak, so Royal Oak is deliberately absent here.
const MSHDA_TARGETED_CITIES: Record<County, string[]> = {
  Oakland: ["Pontiac", "Southfield"],
  Wayne: [
    "Dearborn",
    "Detroit",
    "Ecorse",
    "Hamtramck",
    "Highland Park",
    "Inkster",
    "Lincoln Park",
    "River Rouge",
    "Taylor",
    "Wayne",
  ],
  Macomb: ["Harrison Township", "Mount Clemens", "Mt. Clemens"],
  Livingston: ["Howell"],
  Genesee: ["Flint"],
  Monroe: ["Luna Pier"],
  Washtenaw: [], // entire county is targeted, handled in isMshdaTargeted
};

const MSHDA_PURCHASE_LIMIT = 566_355; // statewide single sales price limit, eff. June 1, 2026

// Oakland County Treasurer / Independent Bank program: one published figure at
// 120% of Oakland County AMI, not a per-household-size table.
const OAKLAND_DPA_INCOME_LIMIT = 123_240;

// City of Detroit DPA, 80% AMI as published on the program page.
const DETROIT_DPA_INCOME: Record<number, number> = {
  1: 58_700,
  2: 67_100,
  3: 75_500,
  4: 83_850,
  5: 90_300,
  6: 97_300,
  7: 104_000,
  8: 110_700,
};

// Wayne County communities that run their own funds and are therefore outside
// the countywide Wayne County / National Faith DPA program.
const WAYNE_DPA_EXCLUDED_CITIES = [
  "Canton",
  "Dearborn",
  "Detroit",
  "Lincoln Park",
  "Livonia",
  "Redford",
  "Taylor",
  "Westland",
];

// Genesee communities excluded from the countywide GCMPC program.
const GENESEE_DPA_EXCLUDED_CITIES = ["Flint", "Clio", "Otter Lake", "Lennon"];

// USDA Guaranteed Rural Housing income limits for Michigan, 2026.
const USDA_INCOME_SMALL = 122_800; // 1-4 person households
const USDA_INCOME_LARGE = 162_100; // 5-8 person households

// HUD FY2026 LOW (80% AMI) income limits, effective May 1, 2026. Used for
// HomeReady/Home Possible, county DPA programs, and lender 80% AMI products.
// Oakland, Macomb, and Wayne share the Detroit-Warren-Livonia HUD Metro FMR Area.
const AMI_80_BY_COUNTY: Record<County, Record<number, number>> = {
  Oakland:    { 1: 58_700, 2: 67_100, 3: 75_500, 4: 83_850, 5: 90_600, 6: 97_300, 7: 104_000, 8: 110_700 },
  Macomb:     { 1: 58_700, 2: 67_100, 3: 75_500, 4: 83_850, 5: 90_600, 6: 97_300, 7: 104_000, 8: 110_700 },
  Wayne:      { 1: 58_700, 2: 67_100, 3: 75_500, 4: 83_850, 5: 90_600, 6: 97_300, 7: 104_000, 8: 110_700 },
  Washtenaw:  { 1: 74_800, 2: 85_450, 3: 96_150, 4: 106_800, 5: 115_350, 6: 123_900, 7: 132_450, 8: 141_000 },
  Livingston: { 1: 72_250, 2: 82_600, 3: 92_900, 4: 103_200, 5: 111_500, 6: 119_750, 7: 128_000, 8: 136_250 },
  Genesee:    { 1: 46_850, 2: 53_550, 3: 60_250, 4: 66_900, 5: 72_300, 6: 77_650, 7: 83_000, 8: 88_350 },
  Monroe:     { 1: 53_350, 2: 60_950, 3: 68_550, 4: 76_150, 5: 82_250, 6: 88_350, 7: 94_450, 8: 100_550 },
};

// ── Helper ──────────────────────────────────────────────────────────────────

function creditAtLeast(score: CreditScoreRange, min: number): boolean {
  const map: Record<CreditScoreRange, number> = {
    "below-620": 580,
    "620-659": 620,
    "660-679": 660,
    "680-719": 680,
    "720-plus": 720,
    "not-sure": 0,
  };
  // "not-sure" is NOT a pass, it's unknown. We mark it as a soft flag.
  if (score === "not-sure") return false;
  return map[score] >= min;
}

function creditUnknown(score: CreditScoreRange): boolean {
  return score === "not-sure";
}

function getIncomeLimit(
  table: Record<number, number>,
  size: number
): number {
  const capped = Math.min(Math.max(size, 1), 8);
  return table[capped] ?? table[4];
}

// Washtenaw is a MSHDA targeted county in full. Elsewhere, targeted status is
// set at the city or township level.
function isMshdaTargeted(p: BuyerProfile): boolean {
  if (p.county === "Washtenaw") return true;
  const city = p.city.trim().toLowerCase();
  return MSHDA_TARGETED_CITIES[p.county].some((c) => c.toLowerCase() === city);
}

function mshdaIncomeLimit(p: BuyerProfile): number {
  const row = (isMshdaTargeted(p) ? MSHDA_TARGETED : MSHDA_NON_TARGETED)[
    p.county
  ];
  return p.householdSize >= 3 ? row.large : row.small;
}

// ── Programs ────────────────────────────────────────────────────────────────

export const programs: GrantProgram[] = [
  {
    id: "mshda-10k-dpa",
    name: "MSHDA MI 10K DPA",
    amount: "Up to $10,000",
    type: "forgivable-loan",
    description:
      "MSHDA's MI 10K DPA is Michigan's primary down payment assistance program, providing up to $10,000 as a 0% interest second mortgage with no monthly payments. It is available statewide across all 83 counties and must be paired with a MSHDA MI Home Loan first mortgage. Repayment is deferred until you sell, refinance, pay off the first mortgage, or stop occupying the home. It replaced MSHDA's older $7,500 MI DPA program, which was discontinued in May 2023.",
    highlights: [
      "$10,000 in down payment, closing cost, and prepaid assistance",
      "0% interest, no monthly payments, repayment deferred",
      "Available statewide in all 83 counties",
      "Pairs with a MSHDA MI Home Loan first mortgage",
    ],
    requirements: [
      "Must use an MSHDA-approved lender",
      "First-time homebuyer, or any buyer in a MSHDA targeted area",
      "Household income under the MSHDA limit for your county and household size",
      "Sales price under $566,355 statewide",
      "Credit score 640+ (660+ for multi-section manufactured homes)",
      "No more than $20,000 in liquid cash assets",
      "Homebuyer education course required",
    ],
    url: "https://www.michigan.gov/mshda/pathway-to-housing/mi-10k-dpa-loan",
    qualify: (p) => {
      const missing: string[] = [];
      const limit = mshdaIncomeLimit(p);
      const sizeLabel = p.householdSize >= 3 ? "3 or more people" : "1 to 2 people";
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for a household of ${sizeLabel} in ${p.county} County`
        );
      if (!p.isFirstTimeBuyer && !isMshdaTargeted(p))
        missing.push(
          "Must be a first-time homebuyer, repeat buyers only qualify in MSHDA targeted areas"
        );
      if (!creditAtLeast(p.creditScore, 640) && !creditUnknown(p.creditScore))
        missing.push("Credit score of 640+ required");
      if (creditUnknown(p.creditScore))
        missing.push("Credit score of 640+ required, verify yours before applying");
      if (p.purchasePrice > MSHDA_PURCHASE_LIMIT)
        missing.push("Purchase price must be under $566,355");
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "mshda-mcc",
    name: "MSHDA Mortgage Credit Certificate",
    amount: "Up to $2,000/year",
    type: "rate-reduction",
    description:
      "The MSHDA Mortgage Credit Certificate turns 20% of the mortgage interest you pay each year into a dollar-for-dollar federal tax credit, up to $2,000 annually, for the life of the loan. It is not down payment money, it lowers what you owe the IRS every year you hold the mortgage. The MCC must be applied for and approved through an approved MCC lender before you close.",
    highlights: [
      "20% of annual mortgage interest as a federal tax credit",
      "Up to $2,000 back every year for the life of the loan",
      "Available statewide through approved MCC lenders",
      "Can be layered with down payment assistance",
    ],
    requirements: [
      "Must apply through an approved MCC lender before closing",
      "First-time homebuyer, or any buyer in a MSHDA targeted area",
      "Household income under the MSHDA limit for your county and household size",
      "Sales price under $566,355 statewide",
      "Primary residence only",
    ],
    url: "https://www.michigan.gov/mshda/pathway-to-housing/mortgage-credit-certificate-program",
    qualify: (p) => {
      const missing: string[] = [];
      const limit = mshdaIncomeLimit(p);
      const sizeLabel = p.householdSize >= 3 ? "3 or more people" : "1 to 2 people";
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for a household of ${sizeLabel} in ${p.county} County`
        );
      if (!p.isFirstTimeBuyer && !isMshdaTargeted(p))
        missing.push(
          "Must be a first-time homebuyer, repeat buyers only qualify in MSHDA targeted areas"
        );
      if (p.purchasePrice > MSHDA_PURCHASE_LIMIT)
        missing.push("Purchase price must be under $566,355");
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "mshda-rate-relief",
    name: "MSHDA Rate Relief Mortgage",
    amount: "~1% lower interest rate",
    type: "rate-reduction",
    description:
      "MSHDA's Rate Relief Mortgage bought down the interest rate by a full percentage point for eligible first-time homebuyers, funded by a $50 million bond purchased by FHLBank Indianapolis. At launch it dropped the typical MSHDA-with-DPA rate from about 6.375% to 5.375%, roughly $100 a month lower on an average MSHDA loan. All program funds have now been exhausted and MSHDA is no longer accepting applications. Worth monitoring in case the bond is renewed.",
    highlights: [
      "Interest rate reduced by about a full percentage point",
      "Could be paired with MSHDA down payment assistance",
      "Lower monthly payment for the life of the loan",
      "Program closed, funds exhausted",
    ],
    requirements: [
      "First-time homebuyer",
      "Household income at or below 80% of area median income",
      "Credit score 640+",
      "Sales price could not exceed $224,500",
      "Program funding currently exhausted",
    ],
    url: "https://www.michigan.gov/mshda/pathway-to-housing/mshda-rate-relief-mortgage",
    qualify: () => {
      // Funds exhausted, always near-miss so buyers know the program exists
      return {
        eligible: false,
        missing: [
          "Funding currently exhausted and the program is closed to new applications as of September 2026; check back",
        ],
      };
    },
  },
  {
    id: "oakland-county-dpa",
    name: "Oakland County DPA Grant",
    amount: "Up to $5,000",
    type: "grant",
    description:
      "The Oakland County Treasurer's Office, in partnership with Independent Bank, offers a $5,000 grant toward down payment and closing costs for first-time buyers purchasing in Oakland County. It does not need to be repaid, and it can be stacked with other assistance. The mortgage itself has to be financed through Independent Bank, and funds run on a first-come first-served basis until they are exhausted.",
    highlights: [
      "True grant: does not need to be repaid",
      "$5,000 toward down payment or closing costs",
      "Can be combined with MSHDA and other programs",
      "Income limit is a generous 120% of Oakland County AMI",
    ],
    requirements: [
      "Must be a first-time homebuyer (no ownership in the past three years)",
      "Purchasing in Oakland County as your year-round primary residence",
      "Household income at or below 120% of Oakland County AMI ($123,240)",
      "Mortgage must be financed through Independent Bank",
      "Must contribute at least $1,000 of your own funds",
      "Pre-purchase counseling course required",
    ],
    url: "https://www.oakgov.com/government/oakland-county-treasurer-s-office/financial-empowerment-center/homebuyer-assistance-program",
    qualify: (p) => {
      const missing: string[] = [];
      if (p.county !== "Oakland")
        missing.push("Property must be in Oakland County");
      if (!p.isFirstTimeBuyer)
        missing.push("Must be a first-time homebuyer");
      if (p.annualIncome > OAKLAND_DPA_INCOME_LIMIT)
        missing.push(
          `Household income must be at or below $${OAKLAND_DPA_INCOME_LIMIT.toLocaleString()} (120% of Oakland County AMI)`
        );
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "detroit-dpa",
    name: "Detroit Down Payment Assistance",
    amount: "Up to $25,000",
    type: "grant",
    description:
      "The City of Detroit offers up to $25,000 in down payment, prepaid, and closing cost assistance for buyers purchasing within the city. It is one of the most generous municipal programs in the state, backed by roughly $9 million in federal CDBG and CDBG-DR funding, and it is currently accepting applications.",
    highlights: [
      "Up to $25,000, one of Michigan's largest",
      "Does not need to be repaid if you stay three years",
      "Available for purchases within Detroit city limits",
      "Can be combined with other programs",
    ],
    requirements: [
      "Property must be in Detroit city limits",
      "Must have lived in Detroit for the last 12 months",
      "Must not have owned property in the last three years (or lost a Detroit home to tax foreclosure between 2010 and 2016)",
      "Household income at or below 80% of area median income",
      "Assistance cannot exceed 50% of the purchase price",
      "Must remain the principal resident for three years or repay pro rata",
      "Homebuyer education course required",
    ],
    url: "https://detroitmi.gov/departments/housing-and-revitalization-department/homebuyers/detroit-down-payment-assistance-program",
    qualify: (p) => {
      const missing: string[] = [];
      if (!p.livesInDetroit)
        missing.push("Property must be within Detroit city limits");
      if (!p.isFirstTimeBuyer)
        missing.push("Must not have owned property in the last three years");
      const limit = getIncomeLimit(DETROIT_DPA_INCOME, p.householdSize);
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for a ${p.householdSize}-person household`
        );
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "wayne-county-dpa",
    name: "Wayne County DPA",
    amount: "Up to $13,999",
    type: "forgivable-loan",
    description:
      "Wayne County provides a fixed, 0% interest forgivable loan of up to $13,999 for income-qualified buyers purchasing in participating Wayne County communities. The loan is forgiven after five years of ownership and occupancy. Detroit runs its own separate program, and several larger Wayne County cities administer their own funds instead.",
    highlights: [
      "Up to $13,999, 0% interest",
      "Forgiven after five years of ownership",
      "Roughly 30 participating Wayne County communities",
      "Can be layered with MSHDA programs",
    ],
    requirements: [
      "Purchasing in a participating Wayne County community",
      "Household income at or below 80% of area median income",
      "No ownership interest in real estate in the past three years",
      "HUD-approved homebuyer education course required",
      "Mortgage pre-approval required before applying",
    ],
    url: "https://nationalfaith.org/dpa/wayne/",
    qualify: (p) => {
      const missing: string[] = [];
      if (p.county !== "Wayne")
        missing.push("Property must be in Wayne County");
      if (WAYNE_DPA_EXCLUDED_CITIES.includes(p.city))
        missing.push(
          `${p.city} runs its own assistance program and is not covered by the countywide Wayne County DPA`
        );
      if (!p.isFirstTimeBuyer)
        missing.push("Must not have owned real estate in the past three years");
      const limit = getIncomeLimit(AMI_80_BY_COUNTY.Wayne, p.householdSize);
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for a ${p.householdSize}-person household`
        );
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "national-faith-wayne",
    name: "National Faith Homebuyers (Wayne County)",
    amount: "Up to $13,999",
    type: "forgivable-loan",
    description:
      "National Faith Homebuyers administers down payment and closing cost assistance of up to $13,999 for first-time buyers in about 30 Wayne County communities. It is a 0% interest loan, fully forgiven after five years of occupancy. Funds are first-come, first-served, so availability moves through the year.",
    highlights: [
      "Up to $13,999 in assistance",
      "0% interest, forgiven after five years",
      "Nonprofit administered",
      "Roughly 30 participating Wayne County communities",
    ],
    requirements: [
      "Purchasing in a participating Wayne County community",
      "Household income at or below 80% of area median income",
      "No ownership interest in real estate in the past three years",
      "HUD-approved homebuyer education course required",
    ],
    url: "https://nationalfaith.org/dpa/wayne/",
    qualify: (p) => {
      const missing: string[] = [];
      if (p.county !== "Wayne")
        missing.push("Property must be in Wayne County");
      if (WAYNE_DPA_EXCLUDED_CITIES.includes(p.city))
        missing.push(
          `${p.city} is not among the participating communities for this program`
        );
      if (!p.isFirstTimeBuyer)
        missing.push("Must not have owned real estate in the past three years");
      const limit = getIncomeLimit(AMI_80_BY_COUNTY.Wayne, p.householdSize);
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for a ${p.householdSize}-person household`
        );
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "genesee-county-dpa",
    name: "Genesee County GCMPC Grant",
    amount: "Up to $10,000",
    type: "forgivable-loan",
    description:
      "The Genesee County Metropolitan Planning Commission offers up to $10,000 in down payment and closing cost assistance as a 0% interest loan, forgiven after five years in the home. It covers Genesee County outside the cities of Flint and Clio and the villages of Otter Lake and Lennon, which administer their own funds.",
    highlights: [
      "Up to $10,000 in assistance",
      "0% interest, forgiven after five years",
      "Genesee County outside Flint and Clio",
      "First-time buyer program",
    ],
    requirements: [
      "Purchasing in Genesee County, excluding Flint, Clio, Otter Lake, and Lennon",
      "First-time homebuyer",
      "Household income at or below 80% of area median income",
      "Must contribute 1% of the sales price or $500, whichever is greater",
      "Eight hours of housing counseling required",
    ],
    url: "https://gcmpc.org/down-payment-assistance/",
    qualify: (p) => {
      const missing: string[] = [];
      if (p.county !== "Genesee")
        missing.push("Property must be in Genesee County");
      if (GENESEE_DPA_EXCLUDED_CITIES.includes(p.city))
        missing.push(
          `${p.city} is excluded from the countywide GCMPC program and runs its own funds`
        );
      if (!p.isFirstTimeBuyer)
        missing.push("Must be a first-time homebuyer");
      const limit = getIncomeLimit(AMI_80_BY_COUNTY.Genesee, p.householdSize);
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for a ${p.householdSize}-person household`
        );
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "washtenaw-oced",
    name: "Washtenaw County OCED DPA",
    amount: "Varies by cycle",
    type: "forgivable-loan",
    description:
      "The Washtenaw County Office of Community and Economic Development provides down payment assistance for income-qualified buyers purchasing within the county. Funding opens in cycles and the award structure varies between a forgivable loan and a deferred second mortgage, so confirm the current terms and application window with OCED before counting on it.",
    highlights: [
      "Forgivable loan or deferred second mortgage",
      "Washtenaw County purchases",
      "Funding opens in cycles, confirm current window",
    ],
    requirements: [
      "Purchasing in Washtenaw County",
      "Household income at or below 80% of area median income",
      "Homebuyer education required",
      "Award amount and terms vary by funding cycle",
    ],
    url: "https://www.washtenaw.org/839/Office-of-Community-Economic-Developmen",
    qualify: (p) => {
      const missing: string[] = [];
      if (p.county !== "Washtenaw")
        missing.push("Property must be in Washtenaw County");
      const limit = getIncomeLimit(AMI_80_BY_COUNTY.Washtenaw, p.householdSize);
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for a ${p.householdSize}-person household`
        );
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "warren-dpa",
    name: "City of Warren Homebuyer Assistance",
    amount: "Up to $25,000",
    type: "forgivable-loan",
    description:
      "The City of Warren covers half of the required down payment plus up to $3,500 in closing costs, to a maximum of $25,000 per household based on demonstrated need. It is a federally funded HOME program, structured as a deferred second mortgage that is fully forgiven at the end of the affordability period: five years for awards under $15,000, ten years for awards between $15,000 and $25,000.",
    highlights: [
      "Up to $25,000 based on need",
      "No payments, fully forgiven after 5 to 10 years",
      "Covers half your down payment plus closing costs",
      "The largest local program in Macomb County",
    ],
    requirements: [
      "Purchasing in the City of Warren",
      "Household income at or below 80% of area median income",
      "Must be your primary residence",
      "Primary mortgage lender must meet city eligibility criteria",
      "Homebuyer education required",
    ],
    url: "https://www.cityofwarren.org/community-development/",
    qualify: (p) => {
      const missing: string[] = [];
      if (p.county !== "Macomb" || p.city !== "Warren")
        missing.push("Property must be in the City of Warren");
      const limit = getIncomeLimit(AMI_80_BY_COUNTY.Macomb, p.householdSize);
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for a ${p.householdSize}-person household`
        );
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "mshda-first-gen",
    name: "MSHDA First-Generation DPA",
    amount: "Up to $25,000",
    type: "forgivable-loan",
    description:
      "MSHDA's First-Generation Down Payment Assistance pilot offered up to $25,000 for first-generation homebuyers (those whose parents never owned a home). Funding is currently exhausted, but this program may be renewed. Worth monitoring.",
    highlights: [
      "Up to $25,000 in assistance",
      "Designed for first-generation homebuyers",
      "Statewide availability when funded",
    ],
    requirements: [
      "First-generation homebuyer (parents never owned a home)",
      "Must use an MSHDA-approved lender",
      "Homebuyer education required",
      "Program funding currently exhausted",
    ],
    url: "https://www.michigan.gov/mshda/pathway-to-housing/firstgendpa",
    qualify: () => {
      // Funding exhausted, always near-miss so users know it exists
      return {
        eligible: false,
        missing: ["Funding currently exhausted (depleted May 2025), no renewal announced as of September 2026; check back"],
      };
    },
  },
  {
    id: "va-home-loan",
    name: "VA Home Loan (0% Down)",
    amount: "0% down payment",
    type: "rate-reduction",
    description:
      "Veterans and active-duty service members may qualify for a VA-backed mortgage with zero down payment and no private mortgage insurance. One of the most powerful homebuying benefits available.",
    highlights: [
      "Zero down payment required",
      "No private mortgage insurance (PMI)",
      "Competitive interest rates",
      "Available nationwide",
    ],
    requirements: [
      "Must be a veteran or active-duty service member",
      "Certificate of Eligibility (COE) required",
      "Primary residence only",
      "Meets VA property standards",
    ],
    url: "https://www.va.gov/housing-assistance/home-loans/",
    qualify: (p) => {
      const missing: string[] = [];
      if (!p.isVeteran)
        missing.push("Must be a veteran or active-duty service member");
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "usda-rural",
    name: "USDA Rural Development Loan",
    amount: "0% down payment",
    type: "rate-reduction",
    description:
      "The USDA Rural Development program offers zero-down mortgages for homes in eligible rural and suburban areas. Several communities in outer Southeast Michigan qualify, including parts of Monroe, Livingston, and Genesee counties.",
    highlights: [
      "Zero down payment",
      "Reduced mortgage insurance",
      "Competitive rates",
      "Eligible areas in outer SE Michigan",
    ],
    requirements: [
      "Property must be in a USDA-eligible area",
      "Income limits apply. In Michigan the 2026 limits are $122,800 for 1 to 4 person households and $162,100 for 5 to 8 person households, higher in some high-cost areas.",
      "Primary residence only",
      "Credit score 640+ recommended",
    ],
    url: "https://www.rd.usda.gov/programs-services/single-family-housing-programs",
    qualify: (p) => {
      const missing: string[] = [];
      const ruralCounties: County[] = ["Monroe", "Livingston", "Genesee"];
      if (!ruralCounties.includes(p.county))
        missing.push(
          "Property must be in a USDA-eligible rural area (most likely in Monroe, Livingston, or Genesee County)"
        );
      const usdaLimit =
        p.householdSize >= 5 ? USDA_INCOME_LARGE : USDA_INCOME_SMALL;
      if (p.annualIncome > usdaLimit)
        missing.push(
          `Household income must be under $${usdaLimit.toLocaleString()} for a ${p.householdSize}-person household in Michigan`
        );
      if (!creditAtLeast(p.creditScore, 640) && !creditUnknown(p.creditScore))
        missing.push("Credit score of 640+ recommended");
      if (creditUnknown(p.creditScore))
        missing.push("Credit score of 640+ recommended, verify yours before applying");
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "good-neighbor",
    name: "Good Neighbor Next Door (HUD)",
    amount: "50% off list price",
    type: "grant",
    description:
      "HUD's Good Neighbor Next Door program offers a 50% discount on the list price for homes in designated revitalization areas. Available to law enforcement officers, teachers, firefighters, and EMTs.",
    highlights: [
      "50% discount on HUD-listed homes",
      "Available in revitalization areas",
      "Must live in the home for 3 years",
    ],
    requirements: [
      "Must be a teacher, law enforcement officer, firefighter, or EMT",
      "Home must be a HUD-listed property in a revitalization area",
      "Must commit to living in the home for 36 months",
      "One-time program participation",
    ],
    url: "https://www.hud.gov/program_offices/housing/sfh/reo/goodn/gnndabot",
    qualify: (p) => {
      const missing: string[] = [];
      const eligible = ["teacher", "law-enforcement", "firefighter", "emt"];
      if (!eligible.includes(p.occupation))
        missing.push(
          "Must be a teacher, law enforcement officer, firefighter, or EMT"
        );
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "homeready",
    name: "HomeReady / Home Possible",
    amount: "3% down payment",
    type: "rate-reduction",
    description:
      "Fannie Mae's HomeReady and Freddie Mac's Home Possible programs allow qualified buyers to purchase with as little as 3% down. Designed for moderate-income borrowers with reduced mortgage insurance costs.",
    highlights: [
      "As little as 3% down payment",
      "Reduced PMI costs",
      "Available for moderate-income buyers",
      "Can use gift funds for down payment",
    ],
    requirements: [
      "Income at or below 80% of area median income",
      "Credit score 620+",
      "Homebuyer education may be required",
      "Primary residence only",
    ],
    url: "https://singlefamily.fanniemae.com/originating-underwriting/mortgage-products/homeready-mortgage",
    qualify: (p) => {
      const missing: string[] = [];
      if (!creditAtLeast(p.creditScore, 620) && !creditUnknown(p.creditScore))
        missing.push("Credit score of 620+ required");
      if (creditUnknown(p.creditScore))
        missing.push("Credit score of 620+ required, verify yours before applying");
      const amiTable = AMI_80_BY_COUNTY[p.county];
      const amiLimit = getIncomeLimit(amiTable, p.householdSize);
      if (p.annualIncome > amiLimit)
        missing.push(
          `Household income must be under $${amiLimit.toLocaleString()} (80% AMI) for a ${p.householdSize}-person household in ${p.county} County`
        );
      return { eligible: missing.length === 0, missing };
    },
  },

  // ── Bank & Credit Union Programs ──────────────────────────────────────────

  {
    id: "chase-homebuyer-grant",
    name: "Chase Homebuyer Grant",
    amount: "Up to $5,000",
    type: "grant",
    description:
      "Chase offers a grant toward down payment, closing costs, or buying down your rate for purchases in eligible census tracts. It is a true grant that does not need to be repaid. Chase raised the grant to $7,500 in 15 metro areas, but Michigan is not among them, so Detroit-area buyers fall under the $5,000 tier. It applies to DreaMaker, standard agency, FHA, and VA mortgages originated through Chase.",
    highlights: [
      "True grant, no repayment required",
      "$5,000 toward down payment, closing costs, or rate buy-down",
      "Available in eligible census tracts",
      "Must originate mortgage through Chase",
    ],
    requirements: [
      "Property must be in a Chase-eligible census tract",
      "Must use Chase for your mortgage",
      "Primary residence only",
      "Minimum credit score requirements apply",
    ],
    url: "https://www.chase.com/personal/mortgage/education/financing-a-home/chase-homebuyer-grant",
    qualify: (p) => {
      const missing: string[] = [];
      if (!creditAtLeast(p.creditScore, 620) && !creditUnknown(p.creditScore))
        missing.push("Credit score of 620+ typically required");
      if (creditUnknown(p.creditScore))
        missing.push("Credit score requirements apply, verify yours before applying");
      missing.push("Property must be in a Chase-eligible census tract, ask a Chase loan officer to verify");
      return { eligible: false, missing };
    },
  },
  {
    id: "wells-fargo-homebuyer-access",
    name: "Wells Fargo Homebuyer Access",
    amount: "Up to $10,000",
    type: "grant",
    description:
      "Wells Fargo's Homebuyer Access grant provides $10,000 toward down payment for buyers at or below 120% of area median income in underserved communities. It never has to be repaid. The program runs in 21 metro areas nationwide and no Michigan market is currently on that list, so Southeast Michigan buyers are not eligible today. Worth rechecking if Wells Fargo expands again.",
    highlights: [
      "Up to $10,000 down payment grant",
      "No repayment required",
      "Income limit is a generous 120% of area median income",
      "Not currently offered in any Michigan metro",
    ],
    requirements: [
      "Property must be in an eligible Wells Fargo metro area",
      "Must use Wells Fargo for a fixed-rate conventional mortgage",
      "Household income at or below 120% of area median income",
      "Primary residence only",
    ],
    url: "https://www.wellsfargo.com/mortgage/homebuyer-access-grant/",
    qualify: () => {
      // Michigan is not among the 21 eligible metro areas as of September 2026
      return {
        eligible: false,
        missing: [
          "Not currently offered in any Michigan metro area; confirm with a Wells Fargo loan officer in case the program expands",
        ],
      };
    },
  },
  {
    id: "wells-fargo-closing-cost",
    name: "Wells Fargo Closing Cost Credit",
    amount: "Up to $5,000",
    type: "grant",
    description:
      "Wells Fargo offers up to $5,000 in closing cost credits for buyers at or below 80% of area median income, stackable with the Homebuyer Access grant for up to $15,000 combined. Like Homebuyer Access, it is limited to Wells Fargo's eligible metro areas, and no Michigan market is currently on that list.",
    highlights: [
      "Up to $5,000 toward closing costs",
      "For buyers at or below 80% AMI",
      "Can combine with Homebuyer Access grant",
      "Not currently offered in any Michigan metro",
    ],
    requirements: [
      "Household income at or below 80% AMI",
      "Property must be in an eligible Wells Fargo metro area",
      "Must use Wells Fargo for your mortgage",
      "Primary residence only",
    ],
    url: "https://www.wellsfargo.com/mortgage/homebuyer-access-grant/",
    qualify: () => {
      return {
        eligible: false,
        missing: [
          "Not currently offered in any Michigan metro area; confirm with a Wells Fargo loan officer in case the program expands",
        ],
      };
    },
  },
  {
    id: "rocket-one-plus",
    name: "Rocket Mortgage ONE+",
    amount: "1% down (Rocket covers 2%)",
    type: "grant",
    description:
      "Rocket Mortgage's ONE+ program lets qualified buyers purchase with just 1% down. Rocket provides an additional 2% grant (up to $7,000) to bring your total equity to 3%. Designed for income-qualified buyers.",
    highlights: [
      "Only 1% down payment from you",
      "Rocket contributes 2% grant (up to $7,000)",
      "Start with 3% equity on day one",
      "No PMI with 3% equity structure",
    ],
    requirements: [
      "Household income at or below 80% AMI",
      "Must originate through Rocket Mortgage",
      "Credit score 620+",
      "Primary residence, single-family home",
    ],
    url: "https://www.rocketmortgage.com/learn/one-plus",
    qualify: (p) => {
      const missing: string[] = [];
      const amiTable = AMI_80_BY_COUNTY[p.county];
      const amiLimit = getIncomeLimit(amiTable, p.householdSize);
      if (p.annualIncome > amiLimit)
        missing.push(
          `Household income must be at or below $${amiLimit.toLocaleString()} (80% AMI) for a ${p.householdSize}-person household in ${p.county} County`
        );
      if (!creditAtLeast(p.creditScore, 620) && !creditUnknown(p.creditScore))
        missing.push("Credit score of 620+ required");
      if (creditUnknown(p.creditScore))
        missing.push("Credit score of 620+ required, verify yours before applying");
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "honor-cu-launch",
    name: "FHLBank Indianapolis Launch DPA",
    amount: "Up to $20,000",
    type: "forgivable-loan",
    description:
      "Launch is FHLBank Indianapolis's down payment assistance program, offering up to $20,000 toward down payment, closing costs, and counseling for first-time buyers at or below 80% of area median income. You access it through a participating FHLBank Indianapolis member lender, several of which lend across Southeast Michigan. Funds are first-come, first-served and carry a five-year retention period.",
    highlights: [
      "Up to $20,000 in assistance",
      "For first-time homebuyers at or below 80% AMI",
      "Five-year retention period, then fully yours",
      "Offered through FHLBank Indianapolis member lenders",
    ],
    requirements: [
      "First-time homebuyer",
      "Household income at or below 80% of area median income",
      "Must originate through a participating FHLBank Indianapolis member lender",
      "Pre-purchase homebuyer education required",
      "Funds are first-come, first-served, confirm the current round is still open",
    ],
    url: "https://www.fhlbi.com/services/voluntary-programs/",
    qualify: (p) => {
      const missing: string[] = [];
      if (!p.isFirstTimeBuyer)
        missing.push("Must be a first-time homebuyer");
      const amiTable = AMI_80_BY_COUNTY[p.county];
      const amiLimit = getIncomeLimit(amiTable, p.householdSize);
      if (p.annualIncome > amiLimit)
        missing.push(
          `Household income must be at or below $${amiLimit.toLocaleString()} (80% AMI) for a ${p.householdSize}-person household in ${p.county} County`
        );
      if (!creditAtLeast(p.creditScore, 620) && !creditUnknown(p.creditScore))
        missing.push("Credit score of 620+ typically required");
      if (creditUnknown(p.creditScore))
        missing.push("Credit score requirements apply, verify yours before applying");
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "fhlb-homeboost",
    name: "FHLB HomeBoost",
    amount: "Up to $25,000",
    type: "grant",
    description:
      "FHLBank Indianapolis's HomeBoost program provides up to $25,000 in down payment, closing cost, and counseling assistance for first-generation, first-time homebuyers in Michigan and Indiana at or below 120% of area median income. The 2026 round opened July 8 with a $5.3 million allocation, awarded first-come first-served through participating member lenders.",
    highlights: [
      "Up to $25,000 in assistance",
      "For first-generation, first-time homebuyers",
      "Generous 120% AMI income limit",
      "2026 round open, $5.3 million allocated",
    ],
    requirements: [
      "First-generation homebuyer (parents never owned a home, or you aged out of foster care or became emancipated)",
      "First-time homebuyer",
      "Household income at or below 120% of area median income",
      "Must use a participating FHLBank Indianapolis member lender",
      "Must contribute at least $500 toward the purchase",
      "Pre-purchase homebuyer education required",
    ],
    url: "https://www.fhlbi.com/services/community-programs/homeboost-down-payment-assistance-/",
    qualify: (p) => {
      const missing: string[] = [];
      // First-generation status is not captured in the intake form
      if (!p.isFirstTimeBuyer)
        missing.push("Must be a first-time homebuyer");
      missing.push(
        "Must be a first-generation homebuyer, ask a FHLBank Indianapolis member lender to confirm HomeBoost eligibility"
      );
      return { eligible: false, missing };
    },
  },
  {
    id: "flagstar-destination-home",
    name: "Flagstar Destination Home",
    amount: "No PMI",
    type: "rate-reduction",
    description:
      "Flagstar Bank's Destination Home program offers mortgage financing with no private mortgage insurance (PMI) requirement in designated community lending areas. Competitive rates with reduced upfront costs.",
    highlights: [
      "No PMI required",
      "Community lending program",
      "Competitive interest rates",
      "Reduced overall monthly payment",
    ],
    requirements: [
      "Property must be in a Flagstar community lending area",
      "Must originate mortgage through Flagstar",
      "Income and credit requirements apply",
      "Primary residence only",
    ],
    url: "https://www.flagstar.com",
    qualify: (p) => {
      const missing: string[] = [];
      if (!creditAtLeast(p.creditScore, 620) && !creditUnknown(p.creditScore))
        missing.push("Credit score of 620+ typically required");
      if (creditUnknown(p.creditScore))
        missing.push("Credit score requirements apply, verify yours before applying");
      missing.push("Property must be in a Flagstar community lending area, ask a Flagstar loan officer to verify");
      return { eligible: false, missing };
    },
  },
];

// ── Qualification Engine ────────────────────────────────────────────────────

export interface QualificationResult {
  program: GrantProgram;
  eligible: boolean;
  missing: string[];
}

export function qualifyBuyer(profile: BuyerProfile): {
  qualified: QualificationResult[];
  nearMiss: QualificationResult[];
  notEligible: QualificationResult[];
} {
  const results = programs.map((program) => {
    const result = program.qualify(profile);
    return { program, ...result };
  });

  const qualified = results.filter((r) => r.eligible);
  const nearMiss = results.filter(
    (r) => !r.eligible && r.missing.length === 1
  );
  const notEligible = results.filter(
    (r) => !r.eligible && r.missing.length > 1
  );

  return { qualified, nearMiss, notEligible };
}

// ── Counties & Cities for form ──────────────────────────────────────────────

export const counties: County[] = [
  "Oakland",
  "Wayne",
  "Macomb",
  "Washtenaw",
  "Livingston",
  "Genesee",
  "Monroe",
];

export const citiesByCounty: Record<County, string[]> = {
  Oakland: [
    "Birmingham",
    "Bloomfield Hills",
    "Bloomfield Township",
    "Clarkston",
    "Commerce Township",
    "Farmington Hills",
    "Lake Orion",
    "Milford",
    "Novi",
    "Pontiac",
    "Rochester",
    "Rochester Hills",
    "Royal Oak",
    "Southfield",
    "Troy",
    "Waterford",
    "West Bloomfield",
    "Other",
  ],
  Wayne: [
    "Canton",
    "Dearborn",
    "Dearborn Heights",
    "Detroit",
    "Grosse Pointe",
    "Grosse Pointe Park",
    "Livonia",
    "Northville",
    "Plymouth",
    "Westland",
    "Other",
  ],
  Macomb: [
    "Clinton Township",
    "Macomb Township",
    "Shelby Township",
    "St. Clair Shores",
    "Sterling Heights",
    "Warren",
    "Other",
  ],
  Washtenaw: [
    "Ann Arbor",
    "Dexter",
    "Saline",
    "Ypsilanti",
    "Other",
  ],
  Livingston: [
    "Brighton",
    "Hartland",
    "Howell",
    "Other",
  ],
  Genesee: [
    "Davison",
    "Fenton",
    "Flint",
    "Grand Blanc",
    "Other",
  ],
  Monroe: [
    "Monroe",
    "Dundee",
    "Temperance",
    "Other",
  ],
};
