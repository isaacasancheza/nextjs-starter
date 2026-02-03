import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typedRoutes: true,
  cacheComponents: true,
  serverExternalPackages: ['import-in-the-middle'],
}

export default nextConfig
