/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.mattran.org.vn",
      "xdcs.cdnchinhphu.vn",
      "upload.wikimedia.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allow images from all domains
      },
    ],
  },
};

export default nextConfig;
