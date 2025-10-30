import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  output: 'export',
  basePath: '/kit_paper/doc',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
