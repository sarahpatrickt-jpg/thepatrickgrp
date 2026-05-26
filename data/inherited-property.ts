/* ──────────────────────────────────────────────────────────────
   Inherited Property Navigator — decision engine
   ────────────────────────────────────────────────────────────── */

// ── Types ──

export type TransferMethod = "will-probate" | "living-trust" | "joint-tenancy" | "unsure";
export type ProbateStatus = "yes" | "no" | "not-sure" | "na-trust";
export type HeirCount = "just-me" | "2-3" | "4-plus";
export type HeirAgreement = "yes" | "mostly" | "no" | "not-discussed";
export type PropertyCondition = "move-in-ready" | "needs-some-work" | "major-repairs" | "not-sure";
export type LienStatus = "clear" | "mortgage" | "liens-or-taxes" | "not-sure";
export type Intention = "sell" | "rent" | "keep" | "no-idea";

export interface InheritedPropertyProfile {
  /* Contact */
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  /* Property situation */
  transferMethod: TransferMethod;
  probateStatus: ProbateStatus;
  heirCount: HeirCount;
  heirAgreement: HeirAgreement;
  propertyCity: string;
  propertyState: string; // always "MI" in our context
  propertyCondition: PropertyCondition;
  lienStatus: LienStatus;
  intention: Intention;
}

export interface ActionStep {
  title: string;
  detail: string;
  urgency: "now" | "soon" | "later";
  icon: "legal" | "financial" | "property" | "family" | "tax" | "decision";
}

export interface RedFlag {
  title: string;
  detail: string;
}

export interface ActionPlan {
  headline: string;
  summary: string;
  steps: ActionStep[];
  redFlags: RedFlag[];
  taxNote: string;
  timelineEstimate: string;
  sellVsRentInsight: string;
}

// ── Michigan cities for the dropdown ──

export const michiganCities = [
  "Birmingham",
  "Bloomfield Hills",
  "Bloomfield Township",
  "Clarkston",
  "Clinton Township",
  "Detroit",
  "Grosse Pointe",
  "Lake Orion",
  "Livonia",
  "Macomb Township",
  "Northville",
  "Novi",
  "Oxford",
  "Plymouth",
  "Rochester",
  "Rochester Hills",
  "Romulus",
  "Royal Oak",
  "Shelby Township",
  "St. Clair Shores",
  "Sterling Heights",
  "Troy",
  "Warren",
  "West Bloomfield",
  "Other (SE Michigan)",
  "Other (Michigan — outside SE Michigan)",
] as const;

// ── Decision engine ──

export function generateActionPlan(p: InheritedPropertyProfile): ActionPlan {
  const steps: ActionStep[] = [];
  const redFlags: RedFlag[] = [];

  // ── 1. Legal first steps (based on transfer method + probate status) ──

  if (p.transferMethod === "will-probate") {
    if (p.probateStatus === "no" || p.probateStatus === "not-sure") {
      steps.push({
        title: "Open probate with the county court",
        detail:
          "In Michigan, if the property was passed through a will (or with no will), you'll need Letters of Authority from the probate court in the county where the deceased lived before you can legally sell. This should be your first step. An estate attorney can file the petition — typical cost is $1,500-$3,500 and the process takes 4-8 weeks.",
        urgency: "now",
        icon: "legal",
      });
    } else {
      steps.push({
        title: "Confirm your Letters of Authority are current",
        detail:
          "Since probate is already open, confirm that your Letters of Authority are still valid and that the court hasn't placed any restrictions on the sale of real property. Your estate attorney can verify this quickly.",
        urgency: "now",
        icon: "legal",
      });
    }
  } else if (p.transferMethod === "living-trust") {
    steps.push({
      title: "Review the trust document with an attorney",
      detail:
        "Properties held in a living trust typically avoid probate, which saves significant time. Have the trust reviewed to confirm who the successor trustee is, whether the trustee has authority to sell, and if there are any distribution conditions. If you're the trustee, you can usually proceed directly to sale.",
      urgency: "now",
      icon: "legal",
    });
  } else if (p.transferMethod === "joint-tenancy") {
    steps.push({
      title: "Record the death certificate with the county",
      detail:
        "With joint tenancy (or tenancy by the entirety), ownership transfers automatically to the surviving owner. File the death certificate with the county Register of Deeds to clear the title. No probate is needed, which simplifies everything significantly.",
      urgency: "now",
      icon: "legal",
    });
  } else {
    // unsure
    steps.push({
      title: "Determine how the property was titled",
      detail:
        "Before anything else, you need to know how the property was held: through a will, a living trust, joint tenancy, or no estate plan at all. Pull the deed from the county Register of Deeds (available online in most Michigan counties) or ask the estate attorney. This determines every step that follows.",
      urgency: "now",
      icon: "legal",
    });
  }

  // ── 2. Heir coordination ──

  if (p.heirCount !== "just-me") {
    if (p.heirAgreement === "no") {
      steps.push({
        title: "Address heir disagreements before listing",
        detail:
          "When heirs disagree on what to do with a property, it can stall the entire process — or worse, lead to a partition action in court. We recommend a family meeting (in person or by video) where each heir's position is heard. A neutral third party, like a mediator or the estate attorney, can help. Resolve the direction before spending money on repairs or listing.",
        urgency: "now",
        icon: "family",
      });
      redFlags.push({
        title: "Heir disagreement can force a court-ordered sale",
        detail:
          "If heirs cannot agree, any co-owner can file a partition action, which forces a court-supervised sale — usually at a steep discount. Reaching agreement voluntarily almost always produces a better financial outcome for everyone.",
      });
    } else if (p.heirAgreement === "not-discussed") {
      steps.push({
        title: "Have the conversation with all heirs",
        detail:
          "Before making any decisions, all heirs should be informed and heard. This prevents surprises later. Share the property's estimated value, the costs involved, and the realistic options (sell, rent, keep). Set a deadline for a group decision to avoid indefinite delay.",
        urgency: "now",
        icon: "family",
      });
    } else if (p.heirAgreement === "mostly") {
      steps.push({
        title: "Document the agreement among heirs",
        detail:
          "Get the agreed-upon plan in writing — even an informal email chain where all heirs confirm the direction works. This prevents backtracking later and gives the executor clear authority to proceed.",
        urgency: "soon",
        icon: "family",
      });
    }

    if (p.heirCount === "4-plus") {
      redFlags.push({
        title: "Multiple heirs add complexity at every stage",
        detail:
          "With 4+ heirs, every decision requires more coordination. Designating one point of contact (usually the executor) who communicates with the real estate team, attorney, and title company streamlines the process significantly.",
      });
    }
  }

  // ── 3. Tax basis step-up ──

  steps.push({
    title: "Establish the stepped-up tax basis",
    detail:
      "This is one of the most valuable tax benefits of inherited property. The IRS \"steps up\" the property's cost basis to its fair market value on the date of death. If the home was worth $350,000 on that date and you sell for $360,000, you only pay capital gains on $10,000 — not on the original purchase price decades ago. Get a formal appraisal dated to the date of death as soon as possible. This protects you if you sell years later.",
    urgency: "now",
    icon: "tax",
  });

  // ── 4. Lien/mortgage handling ──

  if (p.lienStatus === "mortgage") {
    steps.push({
      title: "Contact the mortgage servicer",
      detail:
        "Notify the lender of the death and request the current payoff amount. Federal law (Garn-St. Germain Act) prevents lenders from calling the loan due solely because of the borrower's death if the property transfers to a relative. You have time, but you need to know the numbers — the remaining balance affects whether selling makes financial sense and what the estate nets.",
      urgency: "now",
      icon: "financial",
    });
  } else if (p.lienStatus === "liens-or-taxes") {
    steps.push({
      title: "Get a title search and resolve outstanding liens",
      detail:
        "Tax liens, mechanic's liens, or judgments against the property must be resolved before (or at) closing. Order a preliminary title search to identify everything attached to the property. Some liens can be negotiated down; others must be paid in full. An estate attorney can advise on priority and strategy.",
      urgency: "now",
      icon: "financial",
    });
    redFlags.push({
      title: "Outstanding liens reduce the estate's net proceeds",
      detail:
        "All liens must be satisfied before the property can transfer clean title. If the liens exceed the property's value, you may be looking at a short sale or an attorney-negotiated settlement. Know the full picture before committing to a path.",
    });
  } else if (p.lienStatus === "not-sure") {
    steps.push({
      title: "Order a title search to uncover any liens",
      detail:
        "Before deciding on sell, rent, or hold, you need to know what's attached to the property. A title search reveals any mortgages, tax liens, mechanic's liens, or judgments. Your real estate agent or estate attorney can order this — it costs around $200-$400 and takes a few days.",
      urgency: "soon",
      icon: "financial",
    });
  }

  // ── 5. Property condition steps ──

  if (p.propertyCondition === "major-repairs") {
    steps.push({
      title: "Get repair estimates before deciding sell vs. as-is",
      detail:
        "Major repairs (roof, foundation, HVAC, water damage) can cost $10,000-$50,000+. Before investing, get contractor estimates and compare them against the potential sale price improvement. In some cases, selling as-is to an investor at a discount nets the estate more money when you factor in carrying costs, repair delays, and risk of unexpected issues. We can run both scenarios for you.",
      urgency: "soon",
      icon: "property",
    });
  } else if (p.propertyCondition === "needs-some-work") {
    steps.push({
      title: "Identify which repairs actually increase value",
      detail:
        "Not every repair is worth doing. Cosmetic updates (paint, carpet, landscaping) often return 2-3x their cost, while major renovations rarely do. We'll walk through the property and give you an honest assessment of what's worth spending on and what to skip.",
      urgency: "soon",
      icon: "property",
    });
  } else if (p.propertyCondition === "not-sure") {
    steps.push({
      title: "Schedule a property walkthrough",
      detail:
        "An honest, in-person assessment is the only way to know what you're working with. We'll evaluate the property's current condition, identify any issues that could affect sale price or rental viability, and give you a realistic value range. No cost, no obligation.",
      urgency: "soon",
      icon: "property",
    });
  }

  // Always suggest securing the property
  steps.push({
    title: "Secure and insure the property",
    detail:
      "Change the locks, verify that homeowner's insurance is active (or get a vacant property policy), and keep utilities on to prevent pipe freezing and show the home is maintained. A vacant, uninsured home creates liability for the estate.",
    urgency: "now",
    icon: "property",
  });

  // ── 6. Intention-based guidance ──

  if (p.intention === "sell") {
    steps.push({
      title: "Get a professional market analysis",
      detail:
        "A comparative market analysis (CMA) from a local agent shows what similar homes in the area have sold for recently — adjusted for your property's condition. This establishes fair value for the estate and gives all heirs a data-backed number to work with. We provide these at no cost.",
      urgency: "soon",
      icon: "decision",
    });
  } else if (p.intention === "rent") {
    steps.push({
      title: "Analyze the rental income vs. carrying costs",
      detail:
        "Before committing to rent, calculate the full carrying cost: property taxes, insurance, maintenance reserve (budget 1% of value per year), property management (8-10% of rent), and any mortgage payments. Compare that against realistic rental income for the area. Also consider: who will manage it, how decisions get made with multiple heirs, and what happens if a major repair is needed.",
      urgency: "soon",
      icon: "decision",
    });
    if (p.heirCount !== "just-me") {
      redFlags.push({
        title: "Renting with multiple heirs requires a formal agreement",
        detail:
          "Co-owning a rental property with siblings or other heirs without a written operating agreement is one of the most common sources of family conflict. Define responsibilities, expense splitting, and an exit mechanism before signing a lease.",
      });
    }
  } else if (p.intention === "keep") {
    steps.push({
      title: "Transfer the title and update insurance",
      detail:
        "If you're keeping the property, you'll need to formally transfer title into your name (or the trust's name) and update the homeowner's insurance. If there's a mortgage, contact the servicer about assumption options. Also consider: will you live in it, or is it a second property? The tax treatment differs significantly.",
      urgency: "soon",
      icon: "decision",
    });
  } else {
    // no-idea
    steps.push({
      title: "Start with a market analysis and carrying cost estimate",
      detail:
        "When you're not sure what to do, start with the numbers. A market analysis tells you what the property is worth today. A carrying cost estimate tells you what it costs to hold per month (taxes, insurance, utilities, maintenance). These two numbers clarify the decision. We can provide both at no cost.",
      urgency: "soon",
      icon: "decision",
    });
  }

  // ── Sell vs. rent insight ──

  let sellVsRentInsight: string;
  if (p.intention === "sell") {
    sellVsRentInsight =
      "Selling is often the cleanest path — especially with multiple heirs or when the property needs work. In Southeast Michigan, well-priced inherited homes typically sell within 15-30 days. With the stepped-up tax basis, capital gains exposure is usually minimal if you sell within a year or two.";
  } else if (p.intention === "rent") {
    sellVsRentInsight =
      "Renting can make sense if the property is in good condition, in a strong rental market, and you have agreement among all heirs. But it's a business decision, not a sentimental one. Run the numbers honestly — and remember that the stepped-up basis advantage diminishes over time if the property appreciates.";
  } else if (p.intention === "keep") {
    sellVsRentInsight =
      "Keeping the home — whether to live in or as a family property — is straightforward when you're the sole heir. With multiple heirs, you'd typically need to buy out the others' shares. Make sure the property is transferred into your name and that insurance and taxes are current.";
  } else {
    sellVsRentInsight =
      "Most heirs who are unsure end up selling — and that's usually the right call, especially when the property needs work or when multiple people are involved. But there's no wrong answer. Start with the numbers and the decision usually becomes clear.";
  }

  // ── Timeline estimate ──

  let timelineEstimate: string;
  if (p.transferMethod === "living-trust" || p.transferMethod === "joint-tenancy") {
    if (p.intention === "sell") {
      timelineEstimate =
        "Since the property doesn't need probate, you could potentially list within 2-4 weeks and close 30-45 days after accepting an offer. Total timeline: roughly 2-3 months from today.";
    } else {
      timelineEstimate =
        "Without probate, the legal transfer can happen within a few weeks. Budget 2-4 weeks for paperwork, then move forward with your plan.";
    }
  } else if (p.probateStatus === "yes") {
    if (p.intention === "sell") {
      timelineEstimate =
        "With probate already open, you may be able to list once Letters of Authority are issued. Expect 1-2 months to prepare and list, plus 30-45 days to close. Total timeline: roughly 3-4 months.";
    } else {
      timelineEstimate =
        "With probate open, the timeline depends on how quickly Letters of Authority are issued and whether the court requires anything specific. Budget 3-6 months for full resolution.";
    }
  } else {
    if (p.intention === "sell") {
      timelineEstimate =
        "If probate hasn't been opened yet, add 4-8 weeks for that process before you can legally list. Then 2-4 weeks to prepare, 2-4 weeks on market, and 30-45 days to close. Total timeline: roughly 4-6 months.";
    } else {
      timelineEstimate =
        "Starting from scratch with probate, budget 4-8 weeks for the court process, plus time for whatever path you choose. Most inherited property situations take 4-8 months to fully resolve.";
    }
  }

  // ── Tax note ──

  const taxNote =
    "The stepped-up tax basis is one of the biggest financial advantages of inherited property. The IRS resets the property's cost basis to its fair market value on the date of death — which means if you sell near that value, you owe little or no capital gains tax. However, if you hold the property and it appreciates, you'll owe capital gains on the appreciation above the stepped-up basis. Get a date-of-death appraisal to document this value. Consult a tax professional for your specific situation.";

  // ── Headline ──

  let headline: string;
  if (p.intention === "sell") {
    headline = "Your path to selling this inherited property";
  } else if (p.intention === "rent") {
    headline = "What to evaluate before renting this property";
  } else if (p.intention === "keep") {
    headline = "Steps to transfer and keep this property";
  } else {
    headline = "Your personalized action plan";
  }

  // ── Summary ──

  const summaryParts: string[] = [];
  if (p.transferMethod === "will-probate" && (p.probateStatus === "no" || p.probateStatus === "not-sure")) {
    summaryParts.push("probate needs to be opened first");
  } else if (p.transferMethod === "living-trust") {
    summaryParts.push("the trust structure should simplify the legal process");
  } else if (p.transferMethod === "joint-tenancy") {
    summaryParts.push("title transfer should be straightforward");
  }
  if (p.heirCount !== "just-me" && p.heirAgreement !== "yes") {
    summaryParts.push("heir alignment is a priority");
  }
  if (p.lienStatus === "liens-or-taxes") {
    summaryParts.push("there are financial obligations to resolve");
  }
  if (p.propertyCondition === "major-repairs") {
    summaryParts.push("the property's condition will factor into your strategy");
  }

  const summary = summaryParts.length > 0
    ? `Based on your situation: ${summaryParts.join(", ")}. Here's what to do, in order.`
    : "Here's your step-by-step action plan, in order of priority.";

  // Sort steps by urgency
  const urgencyOrder = { now: 0, soon: 1, later: 2 };
  steps.sort((a, b) => urgencyOrder[a.urgency] - urgencyOrder[b.urgency]);

  return {
    headline,
    summary,
    steps,
    redFlags,
    taxNote,
    timelineEstimate,
    sellVsRentInsight,
  };
}
