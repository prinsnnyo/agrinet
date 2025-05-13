/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    // Needed for proper hydration with next-themes
    optimizePackageImports: ['next-themes'],
  },
}

module.exports = nextConfig
