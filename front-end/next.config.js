/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: () => [
    {
      source: "/report",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
  async rewrites() {
    return [
      {
        source: "/flask/:path*",
        destination: "http://127.0.0.1:5000/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
