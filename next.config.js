/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "vi",
    localeDetection: false,
  },
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
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
