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
    return [
      // {
      //   source: "/ivrweb/e-form/1",
      //   destination: "/ivrweb/e-form/1?id=123456",
      //   permanent: false,
      // },
      // {
      //   source: "/ivrweb/e-form/2",
      //   destination: "/ivrweb/e-form/2?id=123456",
      //   permanent: true,
      // },
      // {
      //   source: "/ivrweb/e-form/3",
      //   destination: "/ivrweb/e-form/3?id=123456",
      //   permanent: true,
      // },
      // {
      //   source: "/ivrweb/e-form/4",
      //   destination: "/ivrweb/e-form/4?id=123456",
      //   permanent: true,
      // },
      // {
      //   source: "/ivrweb/e-form/5",
      //   destination: "/ivrweb/e-form/5?id=123456",
      //   permanent: true,
      // },
      // {
      //   source: "/ivrweb/e-form/6",
      //   destination: "/ivrweb/e-form/6?id=123456",
      //   permanent: true,
      // },
      // {
      //   source: "/ivrweb/e-form/7",
      //   destination: "/ivrweb/e-form/7?id=123456",
      //   permanent: true,
      // },
      // {
      //   source: "/ivrweb/e-form/8",
      //   destination: "/ivrweb/e-form/8?id=123456",
      //   permanent: true,
      // },
      // {
      //   source: "/ivrweb/e-form/9",
      //   destination: "/ivrweb/e-form/9?id=123456",
      //   permanent: true,
      // },
    ];
  },
  styledComponents: true,
};

module.exports = nextConfig;
