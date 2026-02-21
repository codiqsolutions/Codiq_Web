import type { NextConfig } from "next";

// In production on Vercel, rewrites are handled by vercel.json.
// This rewrite only applies in local development.
const backendUrl = process.env.BACKEND_URL || 'http://localhost:4000';

const nextConfig: NextConfig = {
  async rewrites() {
    // Skip Next.js rewrite in production (Vercel handles it via vercel.json)
    if (process.env.NODE_ENV === 'production') {
      return [];
    }
    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
