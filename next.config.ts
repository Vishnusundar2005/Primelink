import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images for Vercel deployment
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Enable strict mode for better React practices
  reactStrictMode: true,
  // Compress outputs
  compress: true,
};

export default nextConfig;
