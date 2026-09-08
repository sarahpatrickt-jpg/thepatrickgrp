/**
 * Server-side Spark API photo fetch for the featured listing landing page.
 *
 * The listing (49756 Labaere Drive, Macomb Twp, MLS# 20261072213) is Coming Soon
 * with an activation date of 09/10/2026. Realcomp does not release Coming Soon
 * records to the data feed until activation, so this searches by street + zip and
 * returns whatever the feed has. Until activation it returns null and the page
 * renders its pre-launch state; once the record replicates, photos appear
 * automatically on the next revalidation. No manual step needed.
 *
 * MichRIC/Realcomp compliance: photos are served directly from MLS-provided CDN
 * URLs (already allowlisted in next.config.ts). No raw data export.
 */

const SPARK_BASE = "https://replication.sparkapi.com/v1";

interface SparkPhoto {
  Uri1024?: string;
  Uri800?: string;
  Uri640?: string;
  UriLarge?: string;
  Primary?: boolean;
}

export interface FeaturedListingLive {
  photos: string[];
  mlsStatus: string;
}

export async function getLabaerePhotos(): Promise<FeaturedListingLive | null> {
  const key = process.env.SPARK_API_KEY;
  if (!key) return null;

  const filter = "StreetName Eq 'Labaere' And PostalCode Eq '48044'";
  const url =
    `${SPARK_BASE}/listings?_filter=${encodeURIComponent(filter)}` +
    `&_expand=Photos&_limit=1`;

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${key}` },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const data = (await res.json()) as {
      D?: {
        Success?: boolean;
        Results?: { StandardFields?: { MlsStatus?: string; Photos?: SparkPhoto[] } }[];
      };
    };

    const fields = data.D?.Results?.[0]?.StandardFields;
    if (!fields) return null;

    const photos = (fields.Photos || [])
      .map((p) => p.Uri1024 || p.UriLarge || p.Uri800 || p.Uri640 || "")
      .filter(Boolean);

    if (photos.length === 0) return null;
    return { photos, mlsStatus: fields.MlsStatus || "Coming Soon" };
  } catch {
    return null;
  }
}
