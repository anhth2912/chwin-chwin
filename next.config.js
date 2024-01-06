const packageJson = require('./package.json')
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // env: {
  //   APP_ENV: process.env.APP_ENV || 'development',
  //   NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  //   NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  //   NEXT_PUBLIC_CHAIN_ID: process.env.NEXT_PUBLIC_CHAIN_ID,
  //   NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
  //   NEXT_PUBLIC_APP_VERSION: packageJson?.version ?? '1.0.0',
  // },
  webpack: (config) => {
    config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin')

    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 5000,
      ignored: ['**/.git', '**/.next', '**/node_modules'],
    }

    return config
  },
  i18n,
}

module.exports = nextConfig
