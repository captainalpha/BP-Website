/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
};
const withImages = require("next-images");
module.exports = withImages();
module.exports = nextConfig;
