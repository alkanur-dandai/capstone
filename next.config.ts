import nextPWA from "next-pwa";
import type { NextConfig } from "next";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Required: these packages use ESM and will fail Vercel's build without this
  transpilePackages: [
    "maplibre-gl",
    "react-map-gl",
    "react-three-map",
    "@react-three/drei",
    "@react-three/fiber",
    "@react-three/postprocessing",
  ],

  webpack: (config, { isServer }) => {
    // maplibre-gl references 'fs' which doesn't exist in the browser
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Prevent maplibre-gl from being bundled on the server side at all
    if (isServer) {
      config.externals = [
        ...(Array.isArray(config.externals) ? config.externals : []),
        "maplibre-gl",
      ];
    }

    return config;
  },
};

export default withPWA(nextConfig);