/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.akamai.steamstatic.com', 'avatars.steamstatic.com'],
  },
};

module.exports = nextConfig;
