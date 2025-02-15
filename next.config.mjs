/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cagatayucer.com',
      },
    ],
  },
};

export default nextConfig;
