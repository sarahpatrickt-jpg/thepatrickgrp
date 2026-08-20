// Press & news mentions shown on /news and in the homepage "As Seen In" strip.
// To add an entry: append an object here. Nothing else to edit: the page,
// JSON-LD, and ordering all derive from this array.

export type NewsItem = {
  /** ISO date the piece was published: YYYY-MM-DD */
  date: string;
  headline: string;
  /** Publication or outlet name, e.g. "Hour Detroit", "EIN Presswire" */
  outlet: string;
  /** Two or three sentences. No em dashes. */
  summary: string;
  /** Link OUT to the source. Never republish full text here. */
  url: string;
  /** Optional logo path under /public, e.g. "/images/press/outlet.png" */
  logo?: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "2026-08-19",
    headline:
      "Rochester's The Patrick Group Recognized by Hour Detroit as a Real Estate All-Star",
    outlet: "EIN Presswire",
    summary:
      "The Patrick Group, the Rochester, Michigan team led by Principal Broker Sarah Patrick, was named to Hour Detroit's Real Estate All-Stars. The recognition coincided with Brad Patrick appearing on the cover of Real Producers Magazine and with the team's continued expansion of free market data tools for buyers and sellers across Southeast Michigan.",
    url: "https://www.einpresswire.com/article/935180245/rochester-s-the-patrick-group-recognized-by-hour-detroit-as-a-real-estate-all-star",
  },
];

/** Entries newest first. */
export function getNewsItems(): NewsItem[] {
  return [...newsItems].sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Distinct outlet names, newest first: used by the homepage strip. */
export function getNewsOutlets(): string[] {
  return [...new Set(getNewsItems().map((n) => n.outlet))];
}
