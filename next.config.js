// const { withContentlayer } = require('next-contentlayer');

// /**
//  * @type {import('next/dist/next-server/server/config').NextConfig}
//  **/
// module.exports = withContentlayer({
//   reactStrictMode: true,
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
//   eslint: {
//     dirs: ['app', 'components', 'lib', 'layouts', 'scripts'],
//   },
//   swcMinify: true,
// });

const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['app', 'components', 'lib', 'layouts', 'scripts'],
  },
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Uncomment both lines below when deploying online to Stanford. Leave both lines commented for development OR for Hostinger
  //   basePath: '/~ryanjack',
  //   assetPrefix: 'https://cs.stanford.edu/~ryanjack/',
};

module.exports = withContentlayer(nextConfig);
