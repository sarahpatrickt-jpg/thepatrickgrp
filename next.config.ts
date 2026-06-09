import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Spark Platform — MLS listing photos
      { protocol: "https", hostname: "cdn.resize.sparkplatform.com" },
      { protocol: "https", hostname: "cdn.photos.sparkplatform.com" },
      // Flexmls AWS S3 — older listings store photos here
      { protocol: "https", hostname: "flexmls-apidc-media.s3.amazonaws.com" },
      { protocol: "https", hostname: "flexmls-apicc-media.s3.amazonaws.com" },
    ],
  },
};

export default nextConfig;
