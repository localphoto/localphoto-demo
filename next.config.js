/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2g3wyw4vlq6n.cloudfront.net",
        port: "",
        pathname: "/demo/**",
      },
    ],
  },
};

module.exports = nextConfig;
