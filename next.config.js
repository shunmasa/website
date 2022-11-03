const nextConfig = {

    images: {
      domains: [ 'excelnzryugaku.local', 'localhost:3000'  ],
    },
    env: {
      REVALIDATION_TOKEN: process.env.REVALIDATION_TOKEN
    },
    async headers() {
      return [
        {
          source: '/(.*)', //All
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
          ],
        },
      ];
    },
  };

  module.exports = nextConfig;
