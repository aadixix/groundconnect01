/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-af45518d51434c34a201a85849f7d01a.r2.dev",
      },
      {
        protocol: "https",
        hostname: "demo.nuovasoft.in",
      },
    ],
  },
};

module.exports = nextConfig;
