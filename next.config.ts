import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Spark Platform — MLS listing photos
      { protocol: "https", hostname: "cdn.resize.sparkplatform.com" },
      { protocol: "https", hostname: "cdn.photos.sparkplatform.com" },
    ],
  },
};

export default nextConfig;
