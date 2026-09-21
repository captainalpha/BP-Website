import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  // images: {
  //   domains: [
  //     "ik.imagekit.io",
  //     // add other domains if needed
  //   ],
  // },
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [{ hostname: "ik.imagekit.io" }],
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
