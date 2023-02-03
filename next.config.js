const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n,
  basePath: "/ivrweb",
  env: {
    basePath: "/ivrweb",
  },
  async rewrites() {
    return [];
  },
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
