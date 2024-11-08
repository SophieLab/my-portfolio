import next from 'next';

const isProd = process.env.NODE_ENV === 'production';

export default {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/my-portfolio/' : '',
  basePath: isProd ? '/my-portfolio' : '',
  output: 'export',
};
