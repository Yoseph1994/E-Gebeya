/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asset.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "https://dzwtevsdsnfpyliqssaw.supabase.co",
      },
    ],
  },
};

export default nextConfig;
