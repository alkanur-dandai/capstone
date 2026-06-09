import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  transpilePackages: [
    "maplibre-gl",
    "react-map-gl",
    "react-three-map",
    "@react-three/drei",
    "@react-three/fiber",
    "@react-three/postprocessing",
  ],

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    if (isServer) {
      config.externals = [
        ...(Array.isArray(config.externals) ? config.externals : []),
        "maplibre-gl",
      ];
    }

    return config;
  },
};

export default nextConfig;