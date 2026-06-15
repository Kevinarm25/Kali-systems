import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [64, 96, 128, 256],
    imageSizes: [48, 56, 72, 96],
  },
};

export default nextConfig;
