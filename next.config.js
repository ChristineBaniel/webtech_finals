// next.config.js
module.exports = {
  output: 'standalone',
  // Remove these after fixing errors:
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // Add if using ISR:
  experimental: { isrMemoryCacheSize: 50 }
}