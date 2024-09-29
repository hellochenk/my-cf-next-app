// import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
const timestamp = new Date().getTime();
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
    TIME_STAMP: timestamp,
},
  // output: 'standalone'
};

// if (process.env.NODE_ENV === 'development') {
//   await setupDevPlatform();
// }

export default nextConfig;
