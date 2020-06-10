const isProd = process.env.NODE_ENV === "production";
module.exports = {
  env: {
    DB_HOST: process.env.DB_HOST,
  },
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? "" : "",
  // 打包的文件夹
  // distDir: "build"
};
