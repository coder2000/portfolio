import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emits work/<slug>/index.html rather than work/<slug>.html, so nested
  // routes resolve on any static host instead of relying on the host mapping
  // extensionless URLs to .html files.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
