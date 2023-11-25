// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
// next.config.js
module.exports = {
    webpack: (config) => {
      // Add a rule to handle SVG files
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
  