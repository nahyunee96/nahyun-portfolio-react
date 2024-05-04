/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/cv',
        destination: '/portfolio.pdf'
      }
    ]
  }
}

module.exports = nextConfig
