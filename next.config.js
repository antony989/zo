const withPWA = require('next-pwa')
module.exports = withPWA({
  pwa: { dest: 'public' },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://121.143.90.156:5000/api/:path*'
      }
    ]
  },
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: [
        "@svgr/webpack",
        {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      ],
    });

    if (!isServer) {
      config.node = { fs: "empty", module: "empty" };
    }

    return config;
  },
  images: {
    domains: ["i.imgur.com"],
  },
  env: {
    key: process.env.COUNT_API_KEY,
    URL: process.env.BASE_URL,
  },
});
