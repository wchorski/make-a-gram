/** @type {import('next').NextConfig} */

const ANALYTICS_URL = process.env.NEXT_PUBLIC_UMAMI_URL + '/:match*'
console.log('ANALYTICS_URL', ANALYTICS_URL);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/stts/:match*',
        destination: ANALYTICS_URL,
      },
    ]
  },
}

module.exports = nextConfig
