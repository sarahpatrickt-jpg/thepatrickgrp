/**
 * Michigan Homebuyer Grant & Down Payment Assistance Programs
 *
 * All qualification logic runs client-side. No API needed.
 * Data sourced from MSHDA, county housing authorities, and federal programs.
 * Last updated: June 1, 2026
 */

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

// ── Income Limits (2025-2026 HUD / MSHDA) ──────────────────────────────────

const MSHDA_INCOME_LIMIT = 168_400; // statewide for DPA programs
const MSHDA_10K_INCOME_LIMIT = 113_300; // lower limit for 10K DPA
const OAKLAND_COUNTY_INCOME: Record<number, number> = {
  1: 63_350,
  2: 72_400,
  3: 81_450,
  4: 90_450,
  5: 97_700,
  6: 104_950,
  7: 112_200,
  8: 119_450,
};
const DETROIT_DPA_INCOME: Record<number, number> = {
  // 80% AMI for the Detroit-Warren-Dearborn area, per City of Detroit DPA program page
  1: 56_600,
  2: 64_650,
  3: 72_750,
  4: 80_800,
  5: 87_300,
  6: 93_750,
  7: 100_200,
  8: 106_700,
};
const WAYNE_COUNTY_INCOME: Record<number, number> = {
  1: 55_300,
  2: 63_200,
  3: 71_100,
  4: 79_000,
  5: 85_350,
  6: 91_650,
  7: 98_000,
  8: 104_300,
};
const GENESEE_INCOME: Record<number, number> = {
  1: 47_600,
  2: 54_400,
  3: 61_200,
  4: 68_000,
  5: 73_450,
  6: 78_900,
  7: 84_350,
  8: 89_750,
};

const MSHDA_PURCHASE_LIMIT = 544_233; // statewide single sales price limit (raised from $224,500 via HB 5032, eff. May 2025)
const MSHDA_TARGET_PURCHASE_LIMIT = 544_233; // MSHDA now applies one statewide sales price limit across all 83 counties
const OAKLAND_PURCHASE_LIMIT = 294_600;
const DETROIT_PURCHASE_LIMIT = 265_000;

// 80% AMI by county (2025-2026 HUD), used for HomeReady/Home Possible
const AMI_80_BY_COUNTY: Record<County, Record<number, number>> = {
  Oakland: { 1: 63_350, 2: 72_400, 3: 81_450, 4: 90_450, 5: 97_700, 6: 104_950, 7: 112_200, 8: 119_450 },
  Macomb:  { 1: 63_350, 2: 72_400, 3: 81_450, 4: 90_450, 5: 97_700, 6: 104_950, 7: 112_200, 8: 119_450 },
  Wayne:   { 1: 55_300, 2: 63_200, 3: 71_100, 4: 79_000, 5: 85_350, 6: 91_650, 7: 98_000, 8: 104_300 },
  Washtenaw: { 1: 63_350, 2: 72_400, 3: 81_450, 4: 90_450, 5: 97_700, 6: 104_950, 7: 112_200, 8: 119_450 },
  Livingston: { 1: 63_350, 2: 72_400, 3: 81_450, 4: 90_450, 5: 97_700, 6: 104_950, 7: 112_200, 8: 119_450 },
  Genesee: { 1: 47_600, 2: 54_400, 3: 61_200, 4: 68_000, 5: 73_450, 6: 78_900, 7: 84_350, 8: 89_750 },
  Monroe:  { 1: 47_600, 2: 54_400, 3: 61_200, 4: 68_000, 5: 73_450, 6: 78_900, 7: 84_350, 8: 89_750 },
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

// ── Programs ────────────────────────────────────────────────────────────────

export const programs: GrantProgram[] = [
  {
    id: "mshda-mi-dpa",
    name: "MSHDA MI DPA",
    amount: "Up to $7,500",
    type: "forgivable-loan",
    description:
      "Michigan's primary down payment assistance program. Provides up to $7,500 as a 0% interest second mortgage, forgiven over time. Available statewide when paired with an MSHDA first mortgage.",
    highlights: [
      "0% interest, no monthly payments",
      "Forgiven after remaining in the home",
      "Pairs with MSHDA first mortgage",
      "Available statewide",
    ],
    requirements: [
      "Must use an MSHDA-approved lender",
      "Household income under $168,400",
      "Credit score 640+",
      "Homebuyer education course required",
      "Primary residence only",
    ],
    url: "https://www.michigan.gov/mshda/homeownership/mi-home-loan",
    qualify: (p) => {
      const missing: string[] = [];
      if (p.annualIncome > MSHDA_INCOME_LIMIT)
        missing.push("Household income must be under $168,400");
      if (!creditAtLeast(p.creditScore, 640) && !creditUnknown(p.creditScore))
        missing.push("Credit score of 640+ required");
      if (creditUnknown(p.creditScore))
        missing.push("Credit score of 640+ required, verify yours before applying");
      if (p.purchasePrice > MSHDA_TARGET_PURCHASE_LIMIT)
        missing.push("Purchase price must be under $544,233");
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "mshda-10k-dpa",
    name: "MSHDA MI 10K DPA",
    amount: "Up to $10,000",
    type: "forgivable-loan",
    description:
      "MSHDA's MI 10K DPA provides up to $10,000 as a 0% interest second mortgage, forgiven over time. As of 2026 it is available statewide across all 83 Michigan counties (previously limited to ~236 targeted zip codes). Designed for low-to-moderate-income buyers.",
    highlights: [
      "$10,000 in down payment assistance",
      "0% interest, forgiven over time",
      "Now available statewide (expanded in 2026)",
      "Pairs with MSHDA first mortgage",
    ],
    requirements: [
      "Available statewide as of 2026",
      "Household income under $113,300",
      "Credit score 640+",
      "Must use an MSHDA-approved lender",
      "Homebuyer education course required",
    ],
    url: "https://www.michigan.gov/mshda/homeownership/mi-home-loan",
    qualify: (p) => {
      const missing: string[] = [];
      if (p.annualIncome > MSHDA_10K_INCOME_LIMIT)
        missing.push("Household income must be under $113,300");
      if (!creditAtLeast(p.creditScore, 640) && !creditUnknown(p.creditScore))
        missing.push("Credit score of 640+ required");
      if (creditUnknown(p.creditScore))
        missing.push("Credit score of 640+ required, verify yours before applying");
      if (p.purchasePrice > MSHDA_TARGET_PURCHASE_LIMIT)
        missing.push("Purchase price must be under $544,233");
      // As of 2026 the MI 10K DPA is available statewide, the targeted-zip restriction no longer applies
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "oakland-county-dpa",
    name: "Oakland County DPA Grant",
    amount: "Up to $5,000",
    type: "grant",
    description:
      "Oakland County Community Development provides a direct grant of up to $5,000 for down payment and closing costs. This does not need to be repaid. Available to income-qualified first-time buyers purchasing in Oakland County.",
    highlights: [
      "True grant: does not need to be repaid",
      "Up to $5,000 for down payment or closing costs",
      "Specifically for Oakland County purchases",
    ],
    requirements: [
      "Must be a first-time homebuyer",
      "Purchasing in Oakland County",
      "Income limits apply (based on household size)",
      "Homebuyer education course required",
    ],
    url: "https://www.oakgov.com/government/oakland-county-treasurer-s-office/financial-empowerment-center/homebuyer-assistance-program",
    qualify: (p) => {
      const missing: string[] = [];
      if (p.county !== "Oakland")
        missing.push("Property must be in Oakland County");
      if (!p.isFirstTimeBuyer)
        missing.push("Must be a first-time homebuyer");
      const limit = getIncomeLimit(OAKLAND_COUNTY_INCOME, p.householdSize);
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for a ${p.householdSize}-person household`
        );
      if (p.purchasePrice > OAKLAND_PURCHASE_LIMIT)
        missing.push("Purchase price must be under $294,600");
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "detroit-dpa",
    name: "Detroit Down Payment Assistance",
    amount: "Up to $25,000",
    type: "forgivable-loan",
    description:
      "The City of Detroit offers up to $25,000 in down payment and closing cost assistance for buyers purchasing within the city. One of the most generous municipal DPA programs in the state.",
    highlights: [
      "Up to $25,000, one of Michigan's largest",
      "Forgivable over 5-10 years",
      "Available for purchases within Detroit city limits",
      "Can be combined with other programs",
    ],
    requirements: [
      "Property must be in Detroit city limits",
      "Income limits apply (based on household size)",
      "Homebuyer education course required",
      "Must be primary residence",
    ],
    url: "https://detroitmi.gov/departments/housing-and-revitalization-department",
    qualify: (p) => {
      const missing: string[] = [];
      if (!p.livesInDetroit)
        missing.push("Property must be within Detroit city limits");
      if (!p.isFirstTimeBuyer)
        missing.push("Must be a first-time homebuyer");
      const limit = getIncomeLimit(DETROIT_DPA_INCOME, p.householdSize);
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for a ${p.householdSize}-person household`
        );
      if (p.purchasePrice > DETROIT_PURCHASE_LIMIT)
        missing.push("Purchase price must be under $265,000");
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "wayne-county-dpa",
    name: "Wayne County DPA",
    amount: "Up to $7,500",
    type: "forgivable-loan",
    description:
      "Wayne County provides forgivable down payment assistance for income-qualified buyers purchasing in Wayne County (outside Detroit, which has its own program).",
    highlights: [
      "Up to $7,500 forgivable",
      "Available throughout Wayne County",
      "Can be layered with MSHDA programs",
    ],
    requirements: [
      "Purchasing in Wayne County",
      "Income limits apply (based on household size)",
      "First-time buyer preferred",
      "Homebuyer education required",
    ],
    url: "https://www.waynecounty.com/departments/lsh/community-development.aspx",
    qualify: (p) => {
      const missing: string[] = [];
      if (p.county !== "Wayne")
        missing.push("Property must be in Wayne County");
      if (!p.isFirstTimeBuyer)
        missing.push("Must be a first-time homebuyer");
      const limit = getIncomeLimit(WAYNE_COUNTY_INCOME, p.householdSize);
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for a ${p.householdSize}-person household`
        );
      if (p.purchasePrice > MSHDA_TARGET_PURCHASE_LIMIT)
        missing.push("Purchase price must be under $544,233");
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "national-faith-wayne",
    name: "National Faith Homebuyers (Wayne County)",
    amount: "Up to $14,999",
    type: "forgivable-loan",
    description:
      "National Faith Homebuyers provides up to $14,999 in down payment and closing cost assistance for buyers purchasing in Wayne County. 0% interest, forgivable after 5 years of occupancy.",
    highlights: [
      "Up to $14,999 in assistance",
      "0% interest, forgivable after 5 years",
      "Forgivable loan structure",
      "Nonprofit administered",
      "Wayne County purchases",
    ],
    requirements: [
      "Purchasing in Wayne County",
      "Income limits apply",
      "Homebuyer education required",
      "First-time buyer",
    ],
    url: "https://www.nationalfaith.org",
    qualify: (p) => {
      const missing: string[] = [];
      if (p.county !== "Wayne")
        missing.push("Property must be in Wayne County");
      if (!p.isFirstTimeBuyer)
        missing.push("Must be a first-time homebuyer");
      const limit = getIncomeLimit(WAYNE_COUNTY_INCOME, p.householdSize);
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for ${p.householdSize}-person household`
        );
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "genesee-county-dpa",
    name: "Genesee County GCMPC Grant",
    amount: "Up to $10,000",
    type: "grant",
    description:
      "The Genesee County Metropolitan Planning Commission offers up to $10,000 in down payment and closing cost assistance. Designed for low-to-moderate income first-time homebuyers in Genesee County.",
    highlights: [
      "Up to $10,000 in assistance",
      "Available in Genesee County",
      "First-time buyer program",
    ],
    requirements: [
      "Purchasing in Genesee County",
      "First-time homebuyer",
      "Income limits apply",
      "Homebuyer education required",
    ],
    url: "https://www.gcmpc.org",
    qualify: (p) => {
      const missing: string[] = [];
      if (p.county !== "Genesee")
        missing.push("Property must be in Genesee County");
      if (!p.isFirstTimeBuyer)
        missing.push("Must be a first-time homebuyer");
      const limit = getIncomeLimit(GENESEE_INCOME, p.householdSize);
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for ${p.householdSize}-person household`
        );
      return { eligible: missing.length === 0, missing };
    },
  },
  {
    id: "washtenaw-oced",
    name: "Washtenaw County OCED DPA",
    amount: "Up to $10,000",
    type: "forgivable-loan",
    description:
      "Washtenaw County Office of Community and Economic Development provides down payment assistance for income-qualified homebuyers purchasing within the county.",
    highlights: [
      "Up to $10,000 in assistance",
      "Forgivable loan",
      "Washtenaw County purchases",
    ],
    requirements: [
      "Purchasing in Washtenaw County",
      "Income limits apply",
      "Homebuyer education required",
    ],
    url: "https://www.washtenaw.org/839/Office-of-Community-Economic-Developmen",
    qualify: (p) => {
      const missing: string[] = [];
      if (p.county !== "Washtenaw")
        missing.push("Property must be in Washtenaw County");
      // Washtenaw uses HUD limits similar to Oakland
      const limit = getIncomeLimit(OAKLAND_COUNTY_INCOME, p.householdSize);
      if (p.annualIncome > limit)
        missing.push(
          `Household income must be under $${limit.toLocaleString()} for ${p.householdSize}-person household`
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
        missing: ["Funding currently exhausted (depleted May 2025), no renewal announced as of mid-2026; check back"],
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
      "Income limits apply (typically 115% of area median)",
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
    amount: "Up to $7,500",
    type: "grant",
    description:
      "Chase offers up to $7,500 in grant funds toward down payment and closing costs for homebuyers purchasing in eligible areas. This is a true grant that does not need to be repaid. Available through Chase mortgage origination.",
    highlights: [
      "True grant, no repayment required",
      "Up to $7,500 toward down payment or closing costs",
      "Available in eligible census tracts",
      "Must originate mortgage through Chase",
    ],
    requirements: [
      "Property must be in a Chase-eligible area",
      "Must use Chase for your mortgage",
      "Primary residence only",
      "Minimum credit score requirements apply",
    ],
    url: "https://www.chase.com/personal/mortgage/mortgage-assistance",
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
      "Wells Fargo's Homebuyer Access grant provides up to $10,000 toward down payment for buyers in eligible areas. No repayment required. Must originate your mortgage through Wells Fargo.",
    highlights: [
      "Up to $10,000 down payment grant",
      "No repayment required",
      "Available in eligible communities",
      "Can be combined with other assistance",
    ],
    requirements: [
      "Property must be in a Wells Fargo-eligible area",
      "Must use Wells Fargo for your mortgage",
      "Income limits may apply",
      "Primary residence only",
    ],
    url: "https://www.wellsfargo.com/mortgage/homebuyer-access-grant/",
    qualify: (p) => {
      const missing: string[] = [];
      if (!creditAtLeast(p.creditScore, 620) && !creditUnknown(p.creditScore))
        missing.push("Credit score of 620+ typically required");
      if (creditUnknown(p.creditScore))
        missing.push("Credit score requirements apply, verify yours before applying");
      missing.push("Property must be in a Wells Fargo-eligible area, ask a Wells Fargo loan officer to verify");
      return { eligible: false, missing };
    },
  },
  {
    id: "wells-fargo-closing-cost",
    name: "Wells Fargo Closing Cost Credit",
    amount: "Up to $5,000",
    type: "grant",
    description:
      "Wells Fargo offers up to $5,000 in closing cost credits for income-qualified buyers at or below 80% of area median income. Can be combined with the Homebuyer Access grant for additional savings.",
    highlights: [
      "Up to $5,000 toward closing costs",
      "For buyers at or below 80% AMI",
      "Can combine with Homebuyer Access grant",
      "No repayment required",
    ],
    requirements: [
      "Household income at or below 80% AMI",
      "Must use Wells Fargo for your mortgage",
      "Primary residence only",
    ],
    url: "https://www.wellsfargo.com/mortgage/homebuyer-access-grant/",
    qualify: (p) => {
      const missing: string[] = [];
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
    name: "Honor Credit Union Launch DPA",
    amount: "Up to $20,000",
    type: "forgivable-loan",
    description:
      "Honor Credit Union's Launch program offers up to $20,000 in down payment assistance for first-time, income-qualified homebuyers. Designed for buyers at or below 80% AMI. Must originate your mortgage through Honor CU.",
    highlights: [
      "Up to $20,000 in assistance",
      "For first-time homebuyers",
      "Income-qualified (80% AMI)",
      "Must use Honor Credit Union",
    ],
    requirements: [
      "First-time homebuyer",
      "Household income at or below 80% AMI",
      "Must originate mortgage through Honor CU",
      "Property in Honor CU service area",
    ],
    url: "https://www.honorcu.com",
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
      "The Federal Home Loan Bank HomeBoost program provides up to $25,000 in down payment and closing cost assistance. Targeted toward minority and first-generation homebuyers. Available through participating FHLB member lenders.",
    highlights: [
      "Up to $25,000 in assistance",
      "Targeted toward minority and first-gen buyers",
      "Available through participating lenders",
      "Grant, no repayment required",
    ],
    requirements: [
      "Minority or first-generation homebuyer",
      "Must use a participating FHLB member lender",
      "Income limits may apply",
      "Primary residence only",
    ],
    url: "https://www.fhlbi.com",
    qualify: (p) => {
      const missing: string[] = [];
      // Cannot determine minority/first-gen status from current profile
      missing.push("Must be a minority or first-generation homebuyer, ask your lender about FHLB HomeBoost eligibility");
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
