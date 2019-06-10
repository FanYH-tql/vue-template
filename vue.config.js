const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};

const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "/";

module.exports = {
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  // 打包时不生成.map文件
  // prodcutionSourceMap: false,
  // 跨域
  devServer: {
    proxy: "http://localhost:8080"
  }
};
