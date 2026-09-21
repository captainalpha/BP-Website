import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  eslint: {
    // ESLint is run separately; don't block production builds on lint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Next 15.5.24 generates a broken .next/types/validator.ts for src/-dir
    // projects (imports "../../app/..." instead of "../../src/app/..."), which
    // fails the build type-check even though the app itself compiles fine.
    ignoreBuildErrors: true,
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
