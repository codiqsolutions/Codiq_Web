import type { NextConfig } from "next";

const backendUrl = process.env.BACKEND_URL
  ? (process.env.BACKEND_URL.startsWith('http') ? process.env.BACKEND_URL : `https://${process.env.BACKEND_URL}`)
  : 'http://localhost:4000';

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`, // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
