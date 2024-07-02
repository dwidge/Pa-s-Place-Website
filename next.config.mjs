/** @type {import('next').NextConfig} */
console.log('PUBLIC_URL1', process.env.PUBLIC_URL);
const nextConfig = {
  basePath: process.env.PUBLIC_URL,
  assetPrefix: process.env.PUBLIC_URL,
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });
    return config;
  },
};

export default nextConfig;
