import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add trailing slashes to ensure consistent routing
  trailingSlash: true,
  
  // Ensure proper handling of dynamic routes
  async redirects() {
    return [];
  },

  // Add custom headers if needed
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
};

export default nextConfig;