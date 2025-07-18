import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.DOMAIN!,
        // port: "3000",
        // pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
