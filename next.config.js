/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|ico)$/i,
      type: 'asset/resource'
    });
    return config;
  },
  // Add basePath if your app is not served from the root
  // basePath: '',
  // Add assetPrefix if your assets are served from a CDN
  // assetPrefix: '',
};

module.exports = nextConfig;