// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//    reactStrictMode: false,
// };

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
// });

// module.exports = withPWA({
//   reactStrictMode: true,
// });

// export default nextConfig;


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
};

export default withPWA(nextConfig);