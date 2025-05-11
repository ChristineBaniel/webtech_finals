/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Optimizes for Vercel
  eslint: {
    ignoreDuringBuilds: true, // Temporarily disables ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true, // Temporarily disables TypeScript errors
  },
}

module.exports = nextConfig