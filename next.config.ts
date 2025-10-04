/** @type {import('next').NextConfig} */
import { resolve } from 'path';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
};

export default nextConfig;
