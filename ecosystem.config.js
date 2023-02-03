module.exports = {
  apps: [
    {
      name: "fwd-cpr",
      script: "./node_modules/next/dist/bin/next",
      args: "start -p " + (process.env.PORT || 3026),
      watch: false,
      autorestart: true,
    },
  ],
};
